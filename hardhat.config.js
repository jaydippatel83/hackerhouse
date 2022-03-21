require("@nomiclabs/hardhat-waffle"); 
const HARMONY_PRIVATE_KEY = '0x4447a51eaaa911ffc387867dc26cf8b8119ac8d00d2cac4512c57a18b0a90d1a';

module.exports = {
  solidity: "0.8.4",
  networks: { 
    harmony: {
      url: `https://api.s0.b.hmny.io`,
      accounts: [HARMONY_PRIVATE_KEY]
    }, 
  },
};
