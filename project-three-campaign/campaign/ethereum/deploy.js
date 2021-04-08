const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');
// const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  '', // <====== here goes 12 word memonic
  '' // <====== here goes rinkeby infura io link
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await new web3.eth.getAccounts();

  console.log('Attempting to deploy from account: ', accounts);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: '1000000' });
  console.log('Contract deployed to: ', result.options.address);
};

deploy();
