import { Token } from '@uniswap/sdk-core';
import { ethers } from 'ethers';
import { BASE_CHAIN_ID } from './uniswap-v3/constants';

// Standard ERC20 ABI - only including functions we need
const ERC20_ABI = [
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function decimals() view returns (uint8)'
];

/**
 * Fetches token details from an ERC20 contract address on Base
 * @param address The ERC20 token contract address
 * @param rpcUrl Optional RPC URL for Base (defaults to public endpoint)
 * @returns Promise resolving to a Token object
 */
export async function getTokenFromAddress(
  address: string, 
  rpcUrl: string = 'https://mainnet.base.org'
): Promise<Token> {
  try {
    // Validate address format
    if (!ethers.utils.isAddress(address)) {
      throw new Error(`Invalid address format: ${address}`);
    }
    
    const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
    const tokenContract = new ethers.Contract(address, ERC20_ABI, provider);
    
    // Fetch token details in parallel
    const [name, symbol, decimals] = await Promise.all([
      tokenContract.name(),
      tokenContract.symbol(),
      tokenContract.decimals()
    ]);
    
    return new Token(
      BASE_CHAIN_ID,
      address,
      decimals,
      symbol,
      name
    );
  } catch (error) {
    console.error(`Failed to fetch token details for ${address}:`, error);
    throw error;
  }
}

/**
 * Example usage:
 * 
 * const token = await getTokenFromAddress('0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913');
 * console.log(token); // Should output USDC token details
 */