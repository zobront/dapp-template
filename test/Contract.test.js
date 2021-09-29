const assert = require('assert')
const { ethers } = require("hardhat");
// const ContractArtifact = require('../artifacts/contracts/Contract.sol/Contract.json')

let signer, contract;

beforeEach(async () => {
  [signer] = await ethers.getSigners();

  // const Contract = await new ethers.ContractFactory(ContractArtifact.abi, ContractArtifact.bytecode, signer);
  // contract = await Contract.deploy();
  // await contract.deployed()
});

describe("Contract Name", () => {
  it("should do xyz", async () => {
    assert(1 == 1);
  });
});
