import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    web3 = new Web3(window.web3.currentProvider);
} else {
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/0fd19d7a8b8f4e4587ad7fe8d0d52263'
    );

    web3 = new Web3(provider);
}

export default web3;