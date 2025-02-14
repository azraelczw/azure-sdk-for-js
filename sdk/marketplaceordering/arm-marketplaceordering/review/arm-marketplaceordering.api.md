## API Report File for "@azure/arm-marketplaceordering"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';

// @public
export interface AgreementTerms extends Resource {
    accepted?: boolean;
    licenseTextLink?: string;
    marketplaceTermsLink?: string;
    plan?: string;
    privacyPolicyLink?: string;
    product?: string;
    publisher?: string;
    retrieveDatetime?: string;
    signature?: string;
    readonly systemData?: SystemData;
}

// @public
export type CreatedByType = string;

// @public
export interface ErrorResponse {
    error?: ErrorResponseError;
}

// @public
export interface ErrorResponseError {
    readonly code?: string;
    readonly message?: string;
}

// @public
export enum KnownCreatedByType {
    Application = "Application",
    Key = "Key",
    ManagedIdentity = "ManagedIdentity",
    User = "User"
}

// @public
export enum KnownOfferType {
    Virtualmachine = "virtualmachine"
}

// @public
export interface MarketplaceAgreements {
    cancel(publisherId: string, offerId: string, planId: string, options?: MarketplaceAgreementsCancelOptionalParams): Promise<MarketplaceAgreementsCancelResponse>;
    create(offerType: OfferType, publisherId: string, offerId: string, planId: string, parameters: AgreementTerms, options?: MarketplaceAgreementsCreateOptionalParams): Promise<MarketplaceAgreementsCreateResponse>;
    get(offerType: OfferType, publisherId: string, offerId: string, planId: string, options?: MarketplaceAgreementsGetOptionalParams): Promise<MarketplaceAgreementsGetResponse>;
    getAgreement(publisherId: string, offerId: string, planId: string, options?: MarketplaceAgreementsGetAgreementOptionalParams): Promise<MarketplaceAgreementsGetAgreementResponse>;
    list(options?: MarketplaceAgreementsListOptionalParams): Promise<MarketplaceAgreementsListResponse>;
    sign(publisherId: string, offerId: string, planId: string, options?: MarketplaceAgreementsSignOptionalParams): Promise<MarketplaceAgreementsSignResponse>;
}

// @public
export interface MarketplaceAgreementsCancelOptionalParams extends coreClient.OperationOptions {
}

// @public
export type MarketplaceAgreementsCancelResponse = AgreementTerms;

// @public
export interface MarketplaceAgreementsCreateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type MarketplaceAgreementsCreateResponse = AgreementTerms;

// @public
export interface MarketplaceAgreementsGetAgreementOptionalParams extends coreClient.OperationOptions {
}

// @public
export type MarketplaceAgreementsGetAgreementResponse = AgreementTerms;

// @public
export interface MarketplaceAgreementsGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type MarketplaceAgreementsGetResponse = AgreementTerms;

// @public
export interface MarketplaceAgreementsListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type MarketplaceAgreementsListResponse = AgreementTerms[];

// @public
export interface MarketplaceAgreementsSignOptionalParams extends coreClient.OperationOptions {
}

// @public
export type MarketplaceAgreementsSignResponse = AgreementTerms;

// @public (undocumented)
export class MarketplaceOrderingAgreements extends coreClient.ServiceClient {
    // (undocumented)
    $host: string;
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: MarketplaceOrderingAgreementsOptionalParams);
    // (undocumented)
    apiVersion: string;
    // (undocumented)
    marketplaceAgreements: MarketplaceAgreements;
    // (undocumented)
    operations: Operations;
    // (undocumented)
    subscriptionId: string;
}

// @public
export interface MarketplaceOrderingAgreementsOptionalParams extends coreClient.ServiceClientOptions {
    $host?: string;
    apiVersion?: string;
    endpoint?: string;
}

// @public
export type OfferType = string;

// @public
export interface Operation {
    display?: OperationDisplay;
    name?: string;
}

// @public
export interface OperationDisplay {
    description?: string;
    operation?: string;
    provider?: string;
    resource?: string;
}

// @public
export interface OperationListResult {
    readonly nextLink?: string;
    value?: Operation[];
}

// @public
export interface Operations {
    list(options?: OperationsListOptionalParams): PagedAsyncIterableIterator<Operation>;
}

// @public
export interface OperationsListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type OperationsListNextResponse = OperationListResult;

// @public
export interface OperationsListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type OperationsListResponse = OperationListResult;

// @public
export interface Resource {
    readonly id?: string;
    readonly name?: string;
    readonly type?: string;
}

// @public
export interface SystemData {
    createdAt?: Date;
    createdBy?: string;
    createdByType?: CreatedByType;
    lastModifiedAt?: Date;
    lastModifiedBy?: string;
    lastModifiedByType?: CreatedByType;
}

// (No @packageDocumentation comment for this package)

```
