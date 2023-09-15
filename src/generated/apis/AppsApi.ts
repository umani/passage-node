/* tslint:disable */
/* eslint-disable */
/**
 * Passage Management API
 * Passage\'s management API to manage your Passage apps and users.
 *
 * The version of the OpenAPI document: v1
 * Contact: support@passage.id
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AppResponse,
  Model401Error,
  Model404Error,
  Model500Error,
} from '../models/index';
import {
    AppResponseFromJSON,
    AppResponseToJSON,
    Model401ErrorFromJSON,
    Model401ErrorToJSON,
    Model404ErrorFromJSON,
    Model404ErrorToJSON,
    Model500ErrorFromJSON,
    Model500ErrorToJSON,
} from '../models/index';

export interface GetAppRequest {
    appId: string;
}

/**
 * 
 */
export class AppsApi extends runtime.BaseAPI {

    /**
     * Get app information.
     * Get App
     */
    async getAppRaw(requestParameters: GetAppRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppResponse>> {
        if (requestParameters.appId === null || requestParameters.appId === undefined) {
            throw new runtime.RequiredError('appId','Required parameter requestParameters.appId was null or undefined when calling getApp.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/apps/{app_id}`.replace(`{${"app_id"}}`, encodeURIComponent(String(requestParameters.appId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppResponseFromJSON(jsonValue));
    }

    /**
     * Get app information.
     * Get App
     */
    async getApp(requestParameters: GetAppRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppResponse> {
        const response = await this.getAppRaw(requestParameters, initOverrides);
        return await response.value();
    }

}