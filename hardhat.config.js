require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-ethers');

const INFURA_URL = 'https://rinkeby.infura.io/v3/fb419f740b7e401bad5bec77d0d285a5';
const RINKEBY_PRIVATE_KEY = '020441984b59f12de76cde69a73bb1fcbb2a1f8133b3074dbf6772343f8d3e9b';

module.exports = {
  solidity: "0.8.4",
  // networks: {
  //   rinkeby: {
  //     url: INFURA_URL,
  //     accounts: [`0x${RINKEBY_PRIVATE_KEY}`]
  //   }
  // }
}