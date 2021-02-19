const Web3 = require('web3');
const assert = require('assert');
const ganache = require('ganache-cli');
const { interface, bytecode } = require('../compile');

let accounts;
let practice;
const web3 = new Web3(ganache.provider());

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  // Use one of those accounts to deploy the contract
  practice = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hello'] })
    .send({ from: accounts[0], gas: '1000000' });
});

describe('Practice Contract', () => {
  it('should deploy contract', () => {
    assert.ok(practice.options.address);
  });

  it('should get default message', async () => {
    const message = await practice.methods.message().call();
    assert.equal(message, 'Hello');
  });
});
