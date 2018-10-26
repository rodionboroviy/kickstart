import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x759875df5e23bAf40eaf56890FA031048f5020E1'
);

export default instance;