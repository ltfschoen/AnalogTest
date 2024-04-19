// https://docs.analog.one/documentation/developers/analog-watch/developers-guide/querying-data
import 'dotenv/config';
import { TimegraphClient } from '@analog-labs/timegraph-js';
// Instantiate as follows
const timeGraphClient = new TimegraphClient({
  url: 'https://timegraph.testnet.analog.one/', // A url to Watch GraphQL instance.
  sessionKey: process.env.SESSION_KEY ?? "", // Session key created by user wallet using WASM SDK
});

async function main () {
  // display list of published artifacts
  const listPublishedArtifacts = timeGraphClient.view.subgraph(
  // const listPublishedArtifacts = timeGraphClient.fn.subgraph(
    {
      after: "0x000", // after the hashID 
      before: "0x000", // before the hashID
      hash: "0x000", // current hashID
      limit: 10 // number of records
    }
  );
  console.log('listPublishedArtifacts: ', listPublishedArtifacts);

  // querying data from another publishers' View
  // then an alias request will be called in first like this:
  const otherPublisherData = timeGraphClient.view.data(
  // const otherPublisherData = timeGraphClient.fn.data(
    { 
      hashId: "0x000", // hashID of view or fn
      fields: ["field1"], // fields to return
      limit: 10, // number of records required
    }
  );
  console.log('otherPublisherData: ', otherPublisherData);

  // subgraph details to extract functions and views associated with a given session key.
  // depending on the Watch artifact, running any of the specified codes displays the subgraph details
  const subgraphDetails = timeGraphClient.view.subgraph(
  // const subgraphDetails = timeGraphClient.fn.subgraph(
    {
      after: "0x000", // after this hash fetch all
      before: "0x000", // before this hash fetch all
      hash: "0x000", // fetch one record with hash
      limit: 10 // limit of records
    }
  );
  console.log('subgraphDetails: ', subgraphDetails);

  // global artifacts. fetch functions and views that are created by other publishers
  const response = timeGraphClient.view.global(
  // const response = timeGraphClient.fn.global(
    {
      after: "0x000", // after this hash fetch all
      before: "0x000", // before this hash fetch all
      hash: "0x000", // fetch one record with hash
      limit: 10 // limit of records
    }
  );
}

main().catch(console.error).finally(() => process.exit());
