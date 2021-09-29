const assert = require('assert')
const { ethers } = require("hardhat");
const ReplaceThisArtifact = require('../artifacts/contracts/ReplaceThis.sol/ReplaceThis.json')

// NOTE: Replace all instances of "ReplaceThis" with uppercase, and "replacethat" with lowercase

let signer, replacethat;

beforeEach(async () => {
  [signer] = await ethers.getSigners();

  const ReplaceThis = await new ethers.ContractFactory(ReplaceThisArtifact.abi, ReplaceThisArtifact.bytecode, signer);
  replacethat = await ReplaceThis.deploy();
  await replacethat.deployed()
});

describe("ReplaceThis", () => {
  it("should deploy", async () => {
    assert.ok(replacethat.address);
  });
});
