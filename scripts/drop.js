

const { ethers,waffle } = require("hardhat");
const hre = require("hardhat");

async function main() {
  const address="0x49d214291B14373292A66c4dfa4d8E25A99f9a88"
  const bucketCon="0x873289a1aD6Cf024B927bd13bd183B264d274c68"
  const token_address="0xFDCf672f951C294d208590643a6DDa4573767152"
  //const[deployer]=await ethers.provider.getBalance();
  async function getBalance(address) {
    const balance = await ethers.provider.getBalance(address)
    return hre.ethers.utils.formatEther(balance)
  }
  const balance=await getBalance(address)
  console.log("Deployer GöEth balance initial:",balance)
 
 
 const contract=await ethers.getContractAt("Bucket",bucketCon)

 const tx=await contract.drop(token_address,100)
  //console.log("Deploying with address:",deployer.address);
  
  //const weiAmount=(await deployer.getBalance()).toString();

  //console.log("Account balance:",ethers.utils.formatEther(weiAmount));

  //const Token=await ethers.getContractFactory("AEASOToken");
  //const token=await Token.deploy();

  console.log("Deployer GöEth balance after tx:",balance)
  console.log("Transaction:",tx)


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});