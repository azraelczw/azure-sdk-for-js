/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SynapseManagementClient } = require("@azure/arm-synapse");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get object metadata from an integration runtime
 *
 * @summary Get object metadata from an integration runtime
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/preview/2021-06-01-preview/examples/IntegrationRuntimeObjectMetadata_List.json
 */
async function getIntegrationRuntimeObjectMetadata() {
  const subscriptionId = "12345678-1234-1234-1234-12345678abc";
  const resourceGroupName = "exampleResourceGroup";
  const workspaceName = "exampleWorkspace";
  const integrationRuntimeName = "testactivityv2";
  const getMetadataRequest = {
    metadataPath: "ssisFolders",
  };
  const options = {
    getMetadataRequest,
  };
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.integrationRuntimeObjectMetadata.list(
    resourceGroupName,
    workspaceName,
    integrationRuntimeName,
    options
  );
  console.log(result);
}

getIntegrationRuntimeObjectMetadata().catch(console.error);
