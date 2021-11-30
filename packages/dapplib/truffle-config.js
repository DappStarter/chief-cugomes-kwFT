require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drive flock slush stomach rival oval unit grace office army giggle'; 
let testAccounts = [
"0x15777dbdb5c7e6758f67648ef8781ff1e1e9337f1ad56fbed6859fb6d00ea018",
"0xf3279b7b42d4e98f14098197c88520e3633f86aa399924ddbbd2e4a70ad2e9a4",
"0xb9f1c056ca583c42a09eba26b8248758ee9d8a1b26966fab367c87b84d7b7495",
"0x736a921f03c3f0248e1576fcab7193e5465c3a3039fc3a10243bf0232b897a2e",
"0x054ec6a4a8acb7254803b566766f890abb65c715432f74f489b584b1ce187280",
"0x2a57b03efd57da73c0fa166c6693ddd491b12431fdbce97bb27733818074e905",
"0xc6f1642848feb34d8bae378fe994779226448a9cacb6ea7d7affd549e6974353",
"0x0f5c1315b11a482e112edde14d59c3c35629b39c71658be1d18a33c8173ce347",
"0x2ecfa207713aa6d78faac1ac96b0fd0197af9f6e9100ad96a0407410b8d5ebe7",
"0xe3fb57a7b2a2e0e8534bd951f316e47c2ce59bfcb96eb0cd876e2f5848265b59"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


