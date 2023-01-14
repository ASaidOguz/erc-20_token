// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  

  //const[deployer]=await ethers.getSigners();

  //console.log("Deploying with address:",deployer.address);

  //const weiAmount=(await deployer.getBalance()).toString();

  //console.log("Account balance:",ethers.utils.formatEther(weiAmount));

  const Token=await ethers.getContractFactory("AEASOToken");
  const token=await Token.deploy();

  console.log("Token Deploy address:",token.address)

 /*  How to verify a deployed ERC-20 smart contract :
  npx hardhat verify --network goerli <contract address> 
  --contract contracts/AEASOToken.sol:AEASOToken 

  Address and location of the smart contract added like this above and dont forget to 
  add used contracts inside hardhat config like this 
  contracts:[
    "contracts/AEASOToken.sol","@openzeppelin/contracts/token/ERC20/ERC20.sol"
   ] */


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
