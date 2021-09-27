# DApp Project Template

This is a simple template for DApp projects built with Hardhat, Ethers.js, Mocha and NextJS.

- Write smart contracts and include as *.sol files in `/contracts` folder
- Compile using `npx hardhat compile`
- Write tests using Mocha and include them in the `/test` folder
- Run your tests using `npx hardhat test`
- Deploy locally with `npx hardhat node`
- Create your Next.JS app by adding pages, components, and styles
- Get deployment information from Infura and add it to `hardhat.config.js`
- Update details of your deployment script in the `/scripts` folder
- Deploy with `npx hardhat run scripts/deploy.js --network <insert network name from config>`