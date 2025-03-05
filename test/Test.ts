import assert from "assert";
import { 
  TestHelpers,
  EVault_Liquidate
} from "generated";
const { MockDb, EVault } = TestHelpers;

describe("EVault contract Liquidate event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for EVault contract Liquidate event
  const event = EVault.Liquidate.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("EVault_Liquidate is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await EVault.Liquidate.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualEVaultLiquidate = mockDbUpdated.entities.EVault_Liquidate.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedEVaultLiquidate: EVault_Liquidate = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      liquidator: event.params.liquidator,
      violator: event.params.violator,
      collateral: event.params.collateral,
      repayAssets: event.params.repayAssets,
      yieldBalance: event.params.yieldBalance,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualEVaultLiquidate, expectedEVaultLiquidate, "Actual EVaultLiquidate should be the same as the expectedEVaultLiquidate");
  });
});
