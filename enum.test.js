const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("Enum", function () {
  let enums;


  beforeEach(async function () {
    const Enum = await ethers.getContractFactory("Enum");
    enums = await Enum.deploy();
    await enums.deployed();
    console.log('enums deployed at:'+ enums.address)  });

  it("can get current value of enum", async () => {
      // current value is always the first value, i.e. Pending
      expect(await enums.get()).to.equal(0);
  });

  // TO DO: can set new value of enum
  it("can set new value of enum", async () => {
      await enums.set(2);
      expect(await enums.get()).to.equal(2);
  });
  // TO DO: can change enum value in called function (cancel)
  it("can set to cancelled", async () => {
      await enums.cancel();
      expect(await enums.get()).equal(4);
  });

  // TO DO: delete returns enum to default value (set and reset)
  it("delete", async () => {
      await enums.set(2);
      await enums.reset();
      expect(await enums.get()).equal(0);
  });
});

