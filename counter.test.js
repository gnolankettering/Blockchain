const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("Counter", function () {
  let counter;


  beforeEach(async function () {
    const Counter = await ethers.getContractFactory("Counter");
    counter = await Counter.deploy();
    await counter.deployed();
    await counter.initialize(100);
    console.log('counter deployed at:'+ counter.address)
  });

  it("test initial value", async function () {
    expect(await counter.get()).to.equal(100);
  });

  it('Success on decrement of counter.', async function () {            
    await counter.decrement(5)
    expect(await counter.get()).to.equal(95);
  });
 
  it('Success on increment of counter.', async function () {            
    await counter.increment(5)
    expect(await counter.get()).to.equal(105);
  });

  it('Failure in intialization with a negative number.', async function () {            
      await expect(counter.initialize(-1)).to.be.revertedWith("Value must be greater than zero");
  });

  it('Failure on increment with negative numbers.', async function () {            
      await expect(counter.increment(-1)).to.be.revertedWith("Value must be greater than zero");
  });

});

