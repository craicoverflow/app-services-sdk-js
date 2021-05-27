/* tslint:disable */
/* eslint-disable */
/**
 * Service Registry Service - Fleet Manager - v1
 * Main entry point for the system, responsible for all sorts of management operations for the whole service of managed service registry.
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { RegistryStatusValue } from './registry-status-value';

/**
 * 
 * @export
 * @interface RegistryStatus
 */
export interface RegistryStatus {
    /**
     * ISO 8601 UTC timestamp.
     * @type {string}
     * @memberof RegistryStatus
     */
    lastUpdated: string;
    /**
     * 
     * @type {RegistryStatusValue}
     * @memberof RegistryStatus
     */
    value: RegistryStatusValue;
}


