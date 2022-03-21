require("@nomiclabs/hardhat-waffle"); 
const HARMONY_PRIVATE_KEY = process.env.REACT_APP_HARMONY_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: { 
    harmony: {
      url: `https://api.s0.b.hmny.io`,
      accounts: [HARMONY_PRIVATE_KEY]
    }, 
  },
};
