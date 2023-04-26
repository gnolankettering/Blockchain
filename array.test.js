const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("Array", function () {
  let array;


  beforeEach(async function () {
    const Array = await ethers.getContractFactory("Array");
    array = await Array.deploy();
    await array.deployed();
    console.log('array deployed at:'+ array.address)
    array.push(4);
    array.push(2);
    array.push(42);
  });

  it("can return the full array", async () => {
      const arr = await array.getArr();
      expect(arr[0]).to.equal(4);
      expect(arr[1]).to.equal(2);
      expect(arr[2]).to.equal(42);
  });
 
  // // // TODO: test for the length of the array
  // it("test for the length of the array", async () => {
  //     const len = await array.getLength();
  //     expect(len).to.equal(3);
  // });

  // // TODO: pop the last element - check the length of the array 
  it("pop the last element", async () => {
      var len = await array.getLength();
      array.pop();
      len = await array.getLength();
      expect(len).to.equal(2);
  });


});
