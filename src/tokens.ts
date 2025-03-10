import { Token } from '@uniswap/sdk-core'
import { BASE_CHAIN_ID } from './uniswap-v3-unused/constants'

export const USDC_TOKEN = new Token(
    BASE_CHAIN_ID,
    '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
    6,
    'USDC',
    'USD Coin'
)

export const eusds_1 = new Token(
    BASE_CHAIN_ID,
    '0x556d518FDFDCC4027A3A1388699c5E11AC201D8b',
    18,
    'eUSDS-1',
    'EVK Vault eUSDS-1'
)

export const eusdc_1 = new Token(
    BASE_CHAIN_ID,
    '0x0A1a3b5f2041F33522C4efc754a7D096f880eE16',
    6,
    'eUSDC-1',
    'EVK Vault eUSDC-1'
)

export const eweth_1 = new Token(
    BASE_CHAIN_ID,
    '0x859160DB5841E5cfB8D3f144C6b3381A85A4b410',
    18,
    'eWETH-1',
    'EVK Vault eWETH-1'
)

export const ecbbtc_1 = new Token(
    BASE_CHAIN_ID,
    '0x882018411Bc4A020A879CEE183441fC9fa5D7f8B',
    8,
    'ecbBTC-1',
    'EVK Vault ecbBTC-1'
)

export const eweeth_1 = new Token(
    BASE_CHAIN_ID,
    '0xd4A805261B28f375fc9c3d89EcD2C952Cd130d14',
    18,
    'eweETH-1',
    'EVK Vault eweETH-1'
)

export const eusr_2 = new Token(
    BASE_CHAIN_ID,
    '0x29Dbce367F5157B924Af5093617bb128477D7A5C',
    18,
    'eUSR-2',
    'EVK Vault eUSR-2'
)

export const eeurc_1 = new Token(
    BASE_CHAIN_ID,
    '0x9ECD9fbbdA32b81dee51AdAed28c5C5039c87117',
    6,
    'eEURC-1',
    'EVK Vault eEURC-1'
)

export const ept_usr_24apr2025_1 = new Token(
    BASE_CHAIN_ID,
    '0xEdCc195Ca09c9FCC1DD30b152C0b82045Ff2F91f',
    18,
    'ePT-USR-24APR2025-1',
    'EVK Vault ePT-USR-24APR2025-1'
)

export const eusdc_3 = new Token(
    BASE_CHAIN_ID,
    '0xC063C3b3625DF5F362F60f35B0bcd98e0fa650fb',
    6,
    'eUSDC-3',
    'EVK Vault eUSDC-3'
)

export const ewsteth_1 = new Token(
    BASE_CHAIN_ID,
    '0x7b181d6509DEabfbd1A23aF1E65fD46E89572609',
    18,
    'ewstETH-1',
    'EVK Vault ewstETH-1'
)

export const ecbeth_1 = new Token(
    BASE_CHAIN_ID,
    '0x358f25F82644eaBb441d0df4AF8746614fb9ea49',
    18,
    'ecbETH-1',
    'EVK Vault ecbETH-1'
)

export const elbtc_1 = new Token(
    BASE_CHAIN_ID,
    '0x3f0d3Fd87A42BDaa3dfCC13ADA42eA922e638a7A',
    8,
    'eLBTC-1',
    'EVK Vault eLBTC-1'
)

export const eezeth_1 = new Token(
    BASE_CHAIN_ID,
    '0xa487f940D6f40D7304CD4e62751220f97124BeC9',
    18,
    'eezETH-1',
    'EVK Vault eezETH-1'
)

export const ereth_1 = new Token(
    BASE_CHAIN_ID,
    '0x8b70a855B057cA85F38Ebb2a7399D9FE0BDC1046',
    18,
    'erETH-1',
    'EVK Vault erETH-1'
)

export const esusds_1 = new Token(
    BASE_CHAIN_ID,
    '0x65cFEF3Efbc5586f0c05299343b8BeFb3fF5d81a',
    18,
    'esUSDS-1',
    'EVK Vault esUSDS-1'
)

export const eaero_1 = new Token(
    BASE_CHAIN_ID,
    '0x5Fe2DE3E565a6a501a4Ec44AAB8664b1D674ac25',
    18,
    'eAERO-1',
    'EVK Vault eAERO-1'
)

export const ecbbtc_3 = new Token(
    BASE_CHAIN_ID,
    '0x1E2F1e8A97E96a2FDD6A8Da427603Ed1c8b3847F',
    8,
    'ecbBTC-3',
    'EVK Vault ecbBTC-3'
)

export const elbtc_3 = new Token(
    BASE_CHAIN_ID,
    '0x3F131Ac9D408926a8B36C1e03ce105f44DCD26Af',
    8,
    'eLBTC-3',
    'EVK Vault eLBTC-3'
)

export const ecbeth_2 = new Token(
    BASE_CHAIN_ID,
    '0x34ABB4501419b1E5f836567C58300c861164101A',
    18,
    'ecbETH-2',
    'EVK Vault ecbETH-2'
)

export const eusdc_7 = new Token(
    BASE_CHAIN_ID,
    '0x646A9C23Ec52C80bf436B2b1a5A9ECEA9a63c55C',
    6,
    'eUSDC-7',
    'EVK Vault eUSDC-7'
)

// Export all tokens in a dictionary for easy lookup by address
export const tokens: Record<string, Token> = {
    '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913': USDC_TOKEN,
    '0x556d518FDFDCC4027A3A1388699c5E11AC201D8b': eusds_1,
    '0x0A1a3b5f2041F33522C4efc754a7D096f880eE16': eusdc_1,
    '0x859160DB5841E5cfB8D3f144C6b3381A85A4b410': eweth_1,
    '0x882018411Bc4A020A879CEE183441fC9fa5D7f8B': ecbbtc_1,
    '0xd4A805261B28f375fc9c3d89EcD2C952Cd130d14': eweeth_1,
    '0x29Dbce367F5157B924Af5093617bb128477D7A5C': eusr_2,
    '0x9ECD9fbbdA32b81dee51AdAed28c5C5039c87117': eeurc_1,
    '0xEdCc195Ca09c9FCC1DD30b152C0b82045Ff2F91f': ept_usr_24apr2025_1,
    '0xC063C3b3625DF5F362F60f35B0bcd98e0fa650fb': eusdc_3,
    '0x7b181d6509DEabfbd1A23aF1E65fD46E89572609': ewsteth_1,
    '0x358f25F82644eaBb441d0df4AF8746614fb9ea49': ecbeth_1,
    '0x3f0d3Fd87A42BDaa3dfCC13ADA42eA922e638a7A': elbtc_1,
    '0xa487f940D6f40D7304CD4e62751220f97124BeC9': eezeth_1,
    '0x8b70a855B057cA85F38Ebb2a7399D9FE0BDC1046': ereth_1,
    '0x65cFEF3Efbc5586f0c05299343b8BeFb3fF5d81a': esusds_1,
    '0x5Fe2DE3E565a6a501a4Ec44AAB8664b1D674ac25': eaero_1,
    '0x1E2F1e8A97E96a2FDD6A8Da427603Ed1c8b3847F': ecbbtc_3,
    '0x3F131Ac9D408926a8B36C1e03ce105f44DCD26Af': elbtc_3,
    '0x34ABB4501419b1E5f836567C58300c861164101A': ecbeth_2,
    '0x646A9C23Ec52C80bf436B2b1a5A9ECEA9a63c55C': eusdc_7
}

export const exchangeRates: Record<string, number> = {
  '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913': 0,
  '0x556d518FDFDCC4027A3A1388699c5E11AC201D8b': 0,
  '0x0A1a3b5f2041F33522C4efc754a7D096f880eE16': 0,
  '0x859160DB5841E5cfB8D3f144C6b3381A85A4b410': 0,
  '0x882018411Bc4A020A879CEE183441fC9fa5D7f8B': 0,
  '0xd4A805261B28f375fc9c3d89EcD2C952Cd130d14': 0,
  '0x29Dbce367F5157B924Af5093617bb128477D7A5C': 0,
  '0x9ECD9fbbdA32b81dee51AdAed28c5C5039c87117': 0,
  '0xEdCc195Ca09c9FCC1DD30b152C0b82045Ff2F91f': 0,
  '0xC063C3b3625DF5F362F60f35B0bcd98e0fa650fb': 0,
  '0x7b181d6509DEabfbd1A23aF1E65fD46E89572609': 0,
  '0x358f25F82644eaBb441d0df4AF8746614fb9ea49': 0,
  '0x3f0d3Fd87A42BDaa3dfCC13ADA42eA922e638a7A': 0,
  '0xa487f940D6f40D7304CD4e62751220f97124BeC9': 0,
  '0x8b70a855B057cA85F38Ebb2a7399D9FE0BDC1046': 0,
  '0x65cFEF3Efbc5586f0c05299343b8BeFb3fF5d81a': 0,
  '0x5Fe2DE3E565a6a501a4Ec44AAB8664b1D674ac25': 0,
  '0x1E2F1e8A97E96a2FDD6A8Da427603Ed1c8b3847F': 0,
  '0x3F131Ac9D408926a8B36C1e03ce105f44DCD26Af': 0,
  '0x34ABB4501419b1E5f836567C58300c861164101A': 0,
  '0x646A9C23Ec52C80bf436B2b1a5A9ECEA9a63c55C': 0
}