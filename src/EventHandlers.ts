/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  EVault,
  EVault_Liquidate,
} from "generated";

EVault.Liquidate.handler(async ({ event, context }) => {
  const entity: EVault_Liquidate = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    liquidator: event.params.liquidator,
    violator: event.params.violator,
    collateral: event.params.collateral,
    repayAssets: event.params.repayAssets,
    yieldBalance: event.params.yieldBalance,
  };


  console.log("liquidation")

  context.EVault_Liquidate.set(entity);
});
