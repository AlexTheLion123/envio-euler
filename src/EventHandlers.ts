/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  EVault,
  EVault_Liquidate,
  EVault_Withdraw,
  EVault_Deposit
} from "generated";
import { exchangeRates, tokens } from "./uniswap-v3-unused/tokens";


const PRECISION = 10n ** 10n;

EVault.Liquidate.handler(async ({ event, context }) => {
  const entity: EVault_Liquidate = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    liquidator: event.params.liquidator,
    violator: event.params.violator,
    collateral: event.params.collateral,
    repayAssets: event.params.repayAssets,
    yieldBalance: event.params.collateralReward,
  };

  console.log(`${event.transaction.hash} Collateral: ${entity.collateral}, RepayAssets: ${entity.repayAssets}, YieldBalance: ${entity.yieldBalance}`);

  context.EVault_Liquidate.set(entity);
});

EVault.Withdraw.handler(async ({ event, context }) => {
  const entity: EVault_Withdraw = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    receiver: event.params.receiver,
    owner: event.params.owner,
    assets: event.params.assets,
    shares: event.params.shares,
  };

  exchangeRates[event.srcAddress] = Number((entity.assets * PRECISION) / entity.shares) / Number(PRECISION);

  // console.log(`Vault: ${event.srcAddress} Hash: ${event.transaction.hash} Withdraw: ${entity.assets.toString()} exchangeRate ${tokens[event.srcAddress].exchangeRate}`);

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
  
  exchangeRates[event.srcAddress] = Number((entity.assets * PRECISION) / entity.shares) / Number(PRECISION);
  
  // console.log(`Vault: ${event.srcAddress} Hash: ${event.transaction.hash} Deposit: exchangeRate ${tokens[event.srcAddress].exchangeRate}`);

  context.EVault_Deposit.set(entity);
});


