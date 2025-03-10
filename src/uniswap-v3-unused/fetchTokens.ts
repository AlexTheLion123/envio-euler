import { writeFileSync } from 'fs';
import path from 'path';
import { getTokenFromAddress } from './tokenUtils';

async function fetchAllTokens() {
  // List of addresses to query
  const addresses = [
    '0x556d518FDFDCC4027A3A1388699c5E11AC201D8b',
    '0x0A1a3b5f2041F33522C4efc754a7D096f880eE16',
    '0x859160DB5841E5cfB8D3f144C6b3381A85A4b410',
    '0x882018411Bc4A020A879CEE183441fC9fa5D7f8B',
    '0xd4A805261B28f375fc9c3d89EcD2C952Cd130d14',
    '0x29Dbce367F5157B924Af5093617bb128477D7A5C',
    '0x9ECD9fbbdA32b81dee51AdAed28c5C5039c87117',
    '0xEdCc195Ca09c9FCC1DD30b152C0b82045Ff2F91f',
    '0xC063C3b3625DF5F362F60f35B0bcd98e0fa650fb',
    '0x7b181d6509DEabfbd1A23aF1E65fD46E89572609',
    '0x358f25F82644eaBb441d0df4AF8746614fb9ea49',
    '0x3f0d3Fd87A42BDaa3dfCC13ADA42eA922e638a7A',
    '0xa487f940D6f40D7304CD4e62751220f97124BeC9',
    '0x8b70a855B057cA85F38Ebb2a7399D9FE0BDC1046',
    '0x65cFEF3Efbc5586f0c05299343b8BeFb3fF5d81a',
    '0x5ce15fC058E762A6A9722fC6521A0c0F5eECD9BA',
    '0x5Fe2DE3E565a6a501a4Ec44AAB8664b1D674ac25',
    '0x1E2F1e8A97E96a2FDD6A8Da427603Ed1c8b3847F',
    '0x3F131Ac9D408926a8B36C1e03ce105f44DCD26Af',
    '0x34ABB4501419b1E5f836567C58300c861164101A',
    '0x646A9C23Ec52C80bf436B2b1a5A9ECEA9a63c55C',
  ];

  console.log(`Fetching token details for ${addresses.length} addresses...`);
  
  // Results object
  const tokensData: Record<string, any> = {};
  
  // Process tokens with slight delay to avoid rate limiting
  for (let i = 0; i < addresses.length; i++) {
    const address = addresses[i];
    try {
      console.log(`Fetching token ${i + 1}/${addresses.length}: ${address}`);
      const token = await getTokenFromAddress(address);
      
      // Store serializable token data
      tokensData[address] = {
        chainId: token.chainId,
        address: token.address,
        decimals: token.decimals,
        symbol: token.symbol,
        name: token.name
      };
      
      // Add a small delay between requests to avoid rate limiting
      if (i < addresses.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    } catch (error) {
      console.error(`Error fetching token at address ${address}:`, error);
      tokensData[address] = { error: 'Failed to fetch token details' };
    }
  }
  
  // Write results to JSON file
  const outputPath = path.join(__dirname, '..', 'tokens.json');
  writeFileSync(outputPath, JSON.stringify(tokensData, null, 2));
  console.log(`Token details saved to ${outputPath}`);
  
  return tokensData;
}

// Execute the function if this file is run directly
if (require.main === module) {
  fetchAllTokens()
    .then(() => console.log('Done!'))
    .catch(error => console.error('Error in fetchAllTokens:', error));
}

// Export for potential use in other files
export { fetchAllTokens };