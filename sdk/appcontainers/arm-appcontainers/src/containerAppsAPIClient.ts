/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import {
  PipelineRequest,
  PipelineResponse,
  SendRequest
} from "@azure/core-rest-pipeline";
import * as coreAuth from "@azure/core-auth";
import {
  ContainerAppsAuthConfigsImpl,
  ContainerAppsImpl,
  ContainerAppsRevisionsImpl,
  ContainerAppsRevisionReplicasImpl,
  DaprComponentsImpl,
  OperationsImpl,
  ManagedEnvironmentsImpl,
  CertificatesImpl,
  NamespacesImpl,
  ManagedEnvironmentsStoragesImpl,
  ContainerAppsSourceControlsImpl
} from "./operations";
import {
  ContainerAppsAuthConfigs,
  ContainerApps,
  ContainerAppsRevisions,
  ContainerAppsRevisionReplicas,
  DaprComponents,
  Operations,
  ManagedEnvironments,
  Certificates,
  Namespaces,
  ManagedEnvironmentsStorages,
  ContainerAppsSourceControls
} from "./operationsInterfaces";
import { ContainerAppsAPIClientOptionalParams } from "./models";

export class ContainerAppsAPIClient extends coreClient.ServiceClient {
  $host: string;
  subscriptionId: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the ContainerAppsAPIClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The ID of the target subscription.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: ContainerAppsAPIClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: ContainerAppsAPIClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-appcontainers/1.1.0`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    if (!options.credentialScopes) {
      options.credentialScopes = ["https://management.azure.com/.default"];
    }
    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri:
        options.endpoint ?? options.baseUri ?? "https://management.azure.com"
    };
    super(optionsWithDefaults);

    let bearerTokenAuthenticationPolicyFound: boolean = false;
    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] = options.pipeline.getOrderedPolicies();
      bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName
      );
    }
    if (
      !options ||
      !options.pipeline ||
      options.pipeline.getOrderedPolicies().length == 0 ||
      !bearerTokenAuthenticationPolicyFound
    ) {
      this.pipeline.removePolicy({
        name: coreRestPipeline.bearerTokenAuthenticationPolicyName
      });
      this.pipeline.addPolicy(
        coreRestPipeline.bearerTokenAuthenticationPolicy({
          credential: credentials,
          scopes: `${optionsWithDefaults.credentialScopes}`,
          challengeCallbacks: {
            authorizeRequestOnChallenge:
              coreClient.authorizeRequestOnClaimChallenge
          }
        })
      );
    }
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2022-03-01";
    this.containerAppsAuthConfigs = new ContainerAppsAuthConfigsImpl(this);
    this.containerApps = new ContainerAppsImpl(this);
    this.containerAppsRevisions = new ContainerAppsRevisionsImpl(this);
    this.containerAppsRevisionReplicas = new ContainerAppsRevisionReplicasImpl(
      this
    );
    this.daprComponents = new DaprComponentsImpl(this);
    this.operations = new OperationsImpl(this);
    this.managedEnvironments = new ManagedEnvironmentsImpl(this);
    this.certificates = new CertificatesImpl(this);
    this.namespaces = new NamespacesImpl(this);
    this.managedEnvironmentsStorages = new ManagedEnvironmentsStoragesImpl(
      this
    );
    this.containerAppsSourceControls = new ContainerAppsSourceControlsImpl(
      this
    );
    this.addCustomApiVersionPolicy(options.apiVersion);
  }

  /** A function that adds a policy that sets the api-version (or equivalent) to reflect the library version. */
  private addCustomApiVersionPolicy(apiVersion?: string) {
    if (!apiVersion) {
      return;
    }
    const apiVersionPolicy = {
      name: "CustomApiVersionPolicy",
      async sendRequest(
        request: PipelineRequest,
        next: SendRequest
      ): Promise<PipelineResponse> {
        const param = request.url.split("?");
        if (param.length > 1) {
          const newParams = param[1].split("&").map((item) => {
            if (item.indexOf("api-version") > -1) {
              return "api-version=" + apiVersion;
            } else {
              return item;
            }
          });
          request.url = param[0] + "?" + newParams.join("&");
        }
        return next(request);
      }
    };
    this.pipeline.addPolicy(apiVersionPolicy);
  }

  containerAppsAuthConfigs: ContainerAppsAuthConfigs;
  containerApps: ContainerApps;
  containerAppsRevisions: ContainerAppsRevisions;
  containerAppsRevisionReplicas: ContainerAppsRevisionReplicas;
  daprComponents: DaprComponents;
  operations: Operations;
  managedEnvironments: ManagedEnvironments;
  certificates: Certificates;
  namespaces: Namespaces;
  managedEnvironmentsStorages: ManagedEnvironmentsStorages;
  containerAppsSourceControls: ContainerAppsSourceControls;
}
