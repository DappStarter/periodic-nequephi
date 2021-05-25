require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog olympic tell educate ranch remember smile imitate private foster spice'; 
let testAccounts = [
"0x6703a41ac695e5755e435cd6cd81f2a7f2a4f16d56c05c5bf964fb2b161b00be",
"0x4b2b74dac0af05bfcaf080f6039e9cca415c54bf97c8c3beb25d5498d80fb0ea",
"0x0f3f9637db0814b8e4bc4b16472c2c0e73a3b01faabd0873da4909c1863b04f7",
"0x64a2d380a1f53284fe8b7e238141bec2e0c9d006a13ad8a36d351f239ddf2820",
"0xd5d333df9d2e16587dfde5b718d49ccf07749ef95204b2890c0e42371bff868b",
"0x0bd7fd2722c95d36ab2d91532deb5501cf1cc0b946994e06d748dfe8418ef32f",
"0xb90f6c41732a88238d3e6b45ce35ce38bafb60e86f4ca38c8b43274f47307d57",
"0x4d91ab11d602db21e53e2aefc2ed222e5a9ded9c418e64a3db5de9ad7f2eaa16",
"0x3ff9efd3eb80d485889a1ca9273974ce944c5f0b4bbe3241138a70d787ab76f6",
"0x018e54dc82c8becd12ba88aea20d5d8690a13a1e0ab43f8983013f6c772441f8"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
