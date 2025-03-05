// import { createPublicClient, http, parseAbi, getContract } from 'viem';
// import { blast } from 'viem/chains';

// const usdc = '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913';
// const vault = '0x556d518FDFDCC4027A3A1388699c5E11AC201D8b';
// const factoryAddress = '0x33128a8fC17869897dcE68Ed026d694621f6FDfD';
// const factoryAbi = parseAbi(["function getPool( address tokenA, address tokenB, uint24 fee ) external view returns (address pool)"]);

// const providerUrl = 'https://rpc.ankr.com/blast'; 
// const poolBips = 3000;  // 0.3%. This is measured in hundredths of a bip

// const client = createPublicClient({
//     chain: blast,
//     transport: http(providerUrl),
// });

// const factoryContract = getContract({
//     abi: factoryAbi,
//     address: factoryAddress,
//     client: client,
// });

// (async () => {
//     const poolAddress = await factoryContract.read.getPool([usdc, vault, poolBips]);
//     console.log(poolAddress);
// })();

import {
  AlphaRouter,
  SwapOptionsSwapRouter02,
  SwapRoute,
  SwapType,
} from '@uniswap/smart-order-router'
import { TradeType, CurrencyAmount, Percent } from '@uniswap/sdk-core'
import { fromReadableAmount } from './conversion'
import { ethers } from 'ethers'
import { BASE_CHAIN_ID } from './constants'
import { Token } from '@uniswap/sdk-core'
import { tokens } from './tokens'


// Public RPC URLs (Choose one)
const MAINNET_RPC = 'https://base.publicnode.com'; // Public node
// const MAINNET_RPC = 'https://1rpc.io/base'; // Alternative
// const MAINNET_RPC = 'https://rpc.ankr.com/base'; // Ankr

const providerBase = new ethers.providers.StaticJsonRpcProvider(MAINNET_RPC, {
  chainId: BASE_CHAIN_ID,
  name: 'base-mainnet'
});


export async function generateRoute(
  tokenIn: Token,
  tokenOut: Token,
  amountIn: number
): Promise<SwapRoute | null> {
  const router = new AlphaRouter({
    chainId: BASE_CHAIN_ID,
    provider: providerBase,
  })

  const options: SwapOptionsSwapRouter02 = {
    recipient: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
    slippageTolerance: new Percent(50, 10_000),
    deadline: Math.floor(Date.now() / 1000 + 1800),
    type: SwapType.SWAP_ROUTER_02,
  }

  const route = await router.route(
    CurrencyAmount.fromRawAmount(
      tokenIn,
      fromReadableAmount(
        amountIn,
        tokenIn.decimals
      ).toString()
    ),
    tokenOut,
    TradeType.EXACT_INPUT,
    options
  )

  return route
}


if (require.main === module) {
  async function main() {
    const route = await generateRoute(
      tokens["0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913"],
      tokens["0x556d518FDFDCC4027A3A1388699c5E11AC201D8b"],
      1000000
    )
    console.log(route)
  }
  main().catch(console.error)
}