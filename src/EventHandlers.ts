/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  EVault,
  EVault_Liquidate,
  EVault_Withdraw,
  EVault_Deposit,
  EVault_VaultStatus
} from "generated";
import { tokens, exchangeRates } from "./tokens";
import { ethers } from "ethers";

const PRECISION = 10n ** 10n;
const provider = new ethers.providers.JsonRpcProvider("https://base.llamarpc.com",);

type MutableLiquidate = {
  -readonly [K in keyof EVault_Liquidate]: EVault_Liquidate[K] 
}

EVault.Liquidate.handler(async ({ event, context }) => {
  const entity: MutableLiquidate = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    liquidator: event.params.liquidator,
    violator: event.params.violator,
    collateral: event.params.collateral,
    repayAssets: event.params.repayAssets,
    collateralReward: event.params.collateralReward,
    usdValue: 0,
  };

  // call asset() on underlying
  // Get the underlying asset for the collateral token
  const collateralContractAbi = [
    {
      "constant": true,
      "inputs": [],
      "name": "asset",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ];

  try {
    const collateralContract = new ethers.Contract(entity.collateral, collateralContractAbi, provider);
    
    const assetAddress = await collateralContract.asset() as string;
    // throw new Error(`Collateral token ${entity.collateral} has underlying asset ${assetAddress}`);
    const assetContract = new ethers.Contract(assetAddress, [
      'function decimals() view returns (uint8)',
      'function symbol() view returns (string)'
    ], provider);
    const decimals = await assetContract.decimals() as number;
    const symbol  = await assetContract.symbol() as string;

    console.log(`Asset ${assetAddress} ${symbol} has ${decimals} decimals ${typeof decimals}`);
    
    const usdValue = (Number(entity.repayAssets) + Number(entity.collateralReward) * exchangeRates[event.srcAddress]) / 10 ** decimals;
    
    entity.usdValue = usdValue;
  
    console.log(`txhash ${event.transaction.hash} usdValue`, usdValue)

    // You might want to store this information in your entity or use it for further operations
    // entity.collateralAsset = assetAddress;
  } catch (error) {
    console.error(`Failed to get asset for collateral ${entity.collateral}:`, error);
  }


  // console.log(`${event.transaction.hash} Liquidator ${event.params.liquidator} violater: ${event.params.violator} Collateral: ${entity.collateral}, RepayAssets: ${entity.repayAssets}, collateralReward: ${entity.collateralReward}\n`);

  context.EVault_Liquidate.set(entity);
});

EVault.VaultStatus.handler(async ({ event, context }) => {
  const entity: EVault_VaultStatus = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    vaultAddress: event.srcAddress,
    totalShares: event.params.totalShares,
    totalBorrows: event.params.totalBorrows,
    accumulatedFees: event.params.accumulatedFees,
    cash: event.params.cash,
    interestAccumulator: event.params.interestAccumulator,
    interestRate: event.params.interestRate,
    timestamp: event.params.timestamp,
    blockNumber: BigInt(event.block.number)
  };

  // const totalAssets = entity.cash + entity.totalBorrows - entity.accumulatedFees;
  const totalAssets = entity.cash + entity.totalBorrows

  if (entity.totalShares !== 0n) {
    const exchangeRate = Number((totalAssets * PRECISION) / entity.totalShares / PRECISION);
    exchangeRates[event.srcAddress] = exchangeRate;
  }

  // console.log(`Vault Status: ${event.srcAddress} Shares: ${entity.totalShares} Borrows: ${entity.totalBorrows} Cash: ${entity.cash}`);

  context.EVault_VaultStatus.set(entity);
});

// Uncomment when ready to implement Withdraw and Deposit
/*
EVault.Withdraw.handler(async ({ event, context }) => {
  const entity: EVault_Withdraw = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    receiver: event.params.receiver,
    owner: event.params.owner,
    assets: event.params.assets,
    shares: event.params.shares,
  };

  console.log(`Vault: ${event.srcAddress} Hash: ${event.transaction.hash} Withdraw: ${entity.assets.toString()} assets, ${entity.shares.toString()} shares`);

  context.EVault_Withdraw.set(entity);
});

EVault.Deposit.handler(async ({ event, context }) => {
  const entity: EVault_Deposit = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    receiver: event.params.receiver,
    assets: event.params.assets,
    shares: event.params.shares,
  };

  console.log(`Vault: ${event.srcAddress} Hash: ${event.transaction.hash} Deposit: ${entity.assets.toString()} assets, ${entity.shares.toString()} shares`);

  context.EVault_Deposit.set(entity);
});
*/


