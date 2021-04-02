const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');
// const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'file blade creek neck ripple cash height cheap loan orphan produce habit',
  'https://rinkeby.infura.io/v3/dcf69bab4288490c80acbb0318adc50a'
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
