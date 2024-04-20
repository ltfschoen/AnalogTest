# Analog One Incentivized Testnet

[Sign-up to Analog incentivized testnet using referral: CYXJDY](https://testnet.analog.one/#/?signup&referral=CYXJDY)

* Install latest Node.js LTS version using NVM
```
npm install -g yarn
nvm use
```

* Install dependencies
```
yarn install
```

* Copy the template and add environment variables including your Analog Substrate-based address and seed. Add the `SESSION_KEY` generated from later running `node ./dist/generate-ssk.js` or from downloading a session key and generating "API Keys" section of your Profile at https://watch.testnet.analog.one/#/profile
```
cp .env-example .env
```

* Build
```
yarn run build
```

* Run code
```
# generate api keys
node ./dist/generate-ssk.js
node ./dist/user-data.js
node ./dist/fund-view.js
node ./dist/list-smart-contract.js
node ./dist/query-data.js
```

# Issues

* https://github.com/Analog-Labs/testnet_issue_tracker/issues

# Resources

* Quests https://testnet.analog.one/#/quests
* Testnet https://watch.testnet.analog.one/#/
* Analog Watch Quickstart https://docs.analog.one/documentation/developers/analog-watch/quickstart
* Smart contract address https://watch.testnet.analog.one/ to explore all the listed smart contracts.
  * Listing smart contracts "Listing Smart Contracts." https://docs.analog.one/documentation/developers/analog-watch/developers-guide/listing-smart-contracts#how-to-list-a-smart-contract
    * GraphiQL - https://timegraph.testnet.analog.one/
    * https://graphql.org/learn/queries/#mutations
    * https://graphql.org/learn/schema/
* Setup
  * https://blog.logrocket.com/how-to-set-up-node-typescript-express/
