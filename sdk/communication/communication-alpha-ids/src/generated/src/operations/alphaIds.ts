/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { AlphaIds } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AlphaIDsClientContext } from "../alphaIDsClientContext";
import {
  AlphaIdsGetConfigurationOptionalParams,
  AlphaIdsGetConfigurationResponse,
  AlphaIdsUpsertConfigurationOptionalParams,
  AlphaIdsUpsertConfigurationResponse
} from "../models";

/** Class containing AlphaIds operations. */
export class AlphaIdsImpl implements AlphaIds {
  private readonly client: AlphaIDsClientContext;

  /**
   * Initialize a new instance of the class AlphaIds class.
   * @param client Reference to the service client
   */
  constructor(client: AlphaIDsClientContext) {
    this.client = client;
  }

  /**
   * Get the Alpha IDs configuration that's applied for the current resource.
   * @param options The options parameters.
   */
  getConfiguration(
    options?: AlphaIdsGetConfigurationOptionalParams
  ): Promise<AlphaIdsGetConfigurationResponse> {
    return this.client.sendOperationRequest(
      { options },
      getConfigurationOperationSpec
    );
  }

  /**
   * Creates or updates Alpha ID Configuration for the current resource.
   * @param enabled Indicates whether the use of Alpha IDs is supported for a specific resource.
   * @param options The options parameters.
   */
  upsertConfiguration(
    enabled: boolean,
    options?: AlphaIdsUpsertConfigurationOptionalParams
  ): Promise<AlphaIdsUpsertConfigurationResponse> {
    return this.client.sendOperationRequest(
      { enabled, options },
      upsertConfigurationOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getConfigurationOperationSpec: coreClient.OperationSpec = {
  path: "/alphaIds/configuration",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AlphaIdConfiguration
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept],
  serializer
};
const upsertConfigurationOperationSpec: coreClient.OperationSpec = {
  path: "/alphaIds/configuration",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.AlphaIdConfiguration
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  requestBody: {
    parameterPath: { enabled: ["enabled"] },
    mapper: { ...Mappers.AlphaIdConfiguration, required: true }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
