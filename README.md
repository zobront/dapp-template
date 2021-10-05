# DApp Project Template

This is a simple template for DApp projects built with Hardhat, Ethers.js, Mocha and NextJS.

Project Setup
- Run `npm install` to get all dependencies set up
- To push to github, use `git remote set-url origin NEWURL` so that it doesn't override the template

Smart Contracts
- Write smart contracts and include as *.sol files in `/contracts` folder
- Write tests in parallel using Mocha and include them in the `/test` folder
- Use `npx hardhat test` to compile and test as you go along

Local Deployment & Front End
- Deploy locally with `npx hardhat node`
- Flip your Metamask over to localhost:8545 and manually add a local private key
- Update details of your deployment script in the `/scripts` folder
- Deploy with `npm run deploy:local`
- Add all relevant contract information to the ContractProvider
- Create your Next.JS app by adding pages, components, and style

Testnet
- Flip your Metamask over to Rinkeby
- Deploy to testnet with `npm run deploy:rinkeby` 