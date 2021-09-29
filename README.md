# DApp Project Template

This is a simple template for DApp projects built with Hardhat, Ethers.js, Mocha and NextJS.

- Write smart contracts and include as *.sol files in `/contracts` folder
- Write tests in parallel using Mocha and include them in the `/test` folder
- Repeat: Compile using `npx hardhat compile` & run your tests using `npx hardhat test`
- If needed, deploy locally with `npx hardhat node`
- Update details of your deployment script in the `/scripts` folder
- Deploy with `npm run deploy` (I have script set to default to Rinkeby)
- Add all relevant contract information to the ContractProvider
- Create your Next.JS app by adding pages, components, and style
