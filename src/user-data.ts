// https://docs.analog.one/documentation/developers/analog-watch/developers-guide/funding-views
import 'dotenv/config';
import { TimegraphClient } from '@analog-labs/timegraph-js';
// Instantiate as follows
const timeGraphClient = new TimegraphClient({
  url: 'https://timegraph.testnet.analog.one/', // A url to Watch GraphQL instance.
  sessionKey: process.env.SESSION_KEY ?? "", // Session key created by user wallet using WASM SDK
});

async function main () {
  // query user registered info from Watch SDK
  const userInfo = await timeGraphClient.user.get();
  console.log(userInfo);
  // query user API keys from Watch SDK
  const apiKeysStatus = timeGraphClient.apiKey.list();
  console.log(apiKeysStatus);
}

main().catch(console.error).finally(() => process.exit());
