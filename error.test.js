const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("Error", function () {
  let error;


  beforeEach(async function () {
    const Error = await ethers.getContractFactory("Error");
    error = await Error.deploy();
    await error.deployed();
    console.log('error deployed at:'+ error.address)
  });

    it("require reverts correctly", async () => {
      await expect(error.testRequire(5)).to.be.revertedWith("Input must be greater than 10");
    });

    // TO DO: Revert reverts correctly
    it("revert reverts correctly", async () => {
      await expect(error.testRevert(5)).to.be.revertedWith("Input must be greater than 10");
    });

    // TO DO: Assert reverts correctly
    it("assert reverts correctly", async () => {
        await expect(error.testAssert()).to.not.be.revertedWith();
    });

    // TO DO: Custom Error is thrown
 
});

