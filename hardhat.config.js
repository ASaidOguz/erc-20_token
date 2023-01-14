require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",

  networks:{
    goerli:{
    url:process.env.ALCHEMY_GOERLI_URL,
    accounts:[process.env.PRIVATE_KEY]
    }
  },
  etherscan:{
    apiKey:{goerli:process.env.ETHERSCAN_API_KEY}
   },
   contracts:[
    "contracts/AEASOToken.sol","@openzeppelin/contracts/token/ERC20/ERC20.sol"
   ]
   
};
