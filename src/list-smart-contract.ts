// https://docs.analog.one/documentation/developers/analog-watch/developers-guide/listing-smart-contracts
import 'dotenv/config';
import { TimegraphClient } from '@analog-labs/timegraph-js';
import abiBokkyPooBahsDateTimeContract from './abi/abiBokkyPooBahsDateTimeContract';    

// Instantiate as follows
const timeGraphClient = new TimegraphClient({
  url: 'https://timegraph.testnet.analog.one/', // A url to Watch GraphQL instance.
  sessionKey: process.env.SESSION_KEY ?? "", // Session key created by user wallet using WASM SDK
});

// List smart contract

// https://etherscan.io/address/0x75100bd564415731b5936a4a94d0dc29dde5db3c#code

// TODO: only 'address' attribute is supported
// so in the meantime use the GraphiQL approach mentioned here
// https://docs.analog.one/documentation/developers/analog-watch/developers-guide/listing-smart-contracts#how-to-list-a-smart-contract
//
// GraphiQL
// 
// Headers
//
// {
//   "Authorization": "<insert_session_key>"
// }
//
// Variables
// {
//   "address": "0x75100bd564415731b5936a4a94d0dc29dde5db3c",
//   "network": "Ethereum",
//   "identifier": "BokkyPooBahsDateTimeContract",
//   "chain": "mainnet",
//   "methods": ["_now"],
//   "abi": ".......",
//   "scope": "global",
//   "dryRun": true,
//   "all": true
// }
//
// Mutation
//
// mutation ListSmartContract(
//   $address: String!
//   $network: String!
//   $identifier: String!
//   $chain: String
//   $methods: [String!]
//   $abi: String
//   $scope: String
//   $dryRun: Boolean
//   $all: Boolean
// ) {
//   contract(
//     address:$address,
//     network: $network,
//     identifier: $identifier,
//     chain: $chain,
//     methods: $methods,
//     abi: $abi,
//     scope: $scope,
//     dryRun:$dryRun,
//     all: $all,
//   ) {
//     status,
//     error,
//     functions {
//       status,
//       error,
//       name,
//     },
//     contract {
//       status,
//       error,
//       address,
//       network,
//       identifier,
//     }
//   }
// }
async function main () {
  let abi = abiBokkyPooBahsDateTimeContract;

  const smartContract = await timeGraphClient.smartContract.get({
    // Extract the contract with the specified address
    // e.g. https://etherscan.io/address/0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae#code
    address: '0x75100bd564415731b5936a4a94d0dc29dde5db3c',
    // Extract contract from specified network
    // network: 'Ethereum',
    // // Propose identifier for the smart contract functions group
    // identifier: 'BokkyPooBahsDateTimeContract',
    // // Look into the specified network chain instead of the mainnet
    // chain: 'mainnet',
    // // Look for specified methods only
    // methods: ['_now'],
    // // Use the specified contract ABI instead of getting the network version
    // abi: abi,
    // // Merging scope: "global" or "subgraph."
    // scope: "global",
    // // do not merge, just propose mutations
    // dryRun: true,
    // // all: report all functions; it reports only view functions by default.
    // all: true,
  });
}

main().catch(console.error).finally(() => process.exit());
