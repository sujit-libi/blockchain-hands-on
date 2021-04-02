import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xD78bdBd4B10eDecCe11Dffb81477df36B99054f3'
);

export default instance;
