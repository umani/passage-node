/* tslint:disable */
/* eslint-disable */
/**
 * Passage Management API
 * Passage\'s management API to manage your Passage apps and users.
 *
 * The version of the OpenAPI document: 1
 * Contact: support@passage.id
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { RequiredError, HTTPHeaders, BaseAPI, VoidApiResponse, JSONApiResponse, InitOverrideFunction, ApiResponse } from '../runtime.js';
import { type CreateUserRequest, CreateUserRequestToJSON } from '../models/CreateUserRequest.js';
import { type UpdateUserRequest, UpdateUserRequestToJSON } from '../models/UpdateUserRequest.js';
import { type UserResponse } from '../models/UserResponse.js';
import { UserResponseFromJSON } from '../models/UserResponse.js';


export interface ActivateUserRequest {
    appId: string;
    userId: string;
}

export interface CreateUserOperationRequest {
    appId: string;
    createUserRequest: CreateUserRequest;
}

export interface DeactivateUserRequest {
    appId: string;
    userId: string;
}

export interface DeleteUserRequest {
    appId: string;
    userId: string;
}

export interface GetUserRequest {
    appId: string;
    userId: string;
}

export interface UpdateUserOperationRequest {
    appId: string;
    userId: string;
    updateUserRequest: UpdateUserRequest;
}

/**
 * 
 */
export class UsersApi extends BaseAPI {

    /**
     * Activate a user. They will now be able to login.
     * Activate User
     */
    async activateUserRaw(requestParameters: ActivateUserRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<UserResponse>> {
        if (requestParameters.appId === null || requestParameters.appId === undefined) {
            throw new RequiredError('appId','Required parameter requestParameters.appId was null or undefined when calling activateUser.');
        }

        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling activateUser.');
        }

        const queryParameters: any = {};

        const headerParameters: HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/apps/{app_id}/users/{user_id}/activate`.replace(`{${"app_id"}}`, encodeURIComponent(String(requestParameters.appId))).replace(`{${"user_id"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new JSONApiResponse(response, (jsonValue) => UserResponseFromJSON(jsonValue));
    }

    /**
     * Activate a user. They will now be able to login.
     * Activate User
     */
    async activateUser(requestParameters: ActivateUserRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<UserResponse> {
        const response = await this.activateUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create user for an application. Must provide an email of phone number identifier.
     * Create User
     */
    async createUserRaw(requestParameters: CreateUserOperationRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<UserResponse>> {
        if (requestParameters.appId === null || requestParameters.appId === undefined) {
            throw new RequiredError('appId','Required parameter requestParameters.appId was null or undefined when calling createUser.');
        }

        if (requestParameters.createUserRequest === null || requestParameters.createUserRequest === undefined) {
            throw new RequiredError('createUserRequest','Required parameter requestParameters.createUserRequest was null or undefined when calling createUser.');
        }

        const queryParameters: any = {};

        const headerParameters: HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/apps/{app_id}/users`.replace(`{${"app_id"}}`, encodeURIComponent(String(requestParameters.appId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateUserRequestToJSON(requestParameters.createUserRequest),
        }, initOverrides);

        return new JSONApiResponse(response, (jsonValue) => UserResponseFromJSON(jsonValue));
    }

    /**
     * Create user for an application. Must provide an email of phone number identifier.
     * Create User
     */
    async createUser(requestParameters: CreateUserOperationRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<UserResponse> {
        const response = await this.createUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deactivate a user. Their account will still exist, but they will not be able to login.
     * Deactivate User
     */
    async deactivateUserRaw(requestParameters: DeactivateUserRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<UserResponse>> {
        if (requestParameters.appId === null || requestParameters.appId === undefined) {
            throw new RequiredError('appId','Required parameter requestParameters.appId was null or undefined when calling deactivateUser.');
        }

        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling deactivateUser.');
        }

        const queryParameters: any = {};

        const headerParameters: HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/apps/{app_id}/users/{user_id}/deactivate`.replace(`{${"app_id"}}`, encodeURIComponent(String(requestParameters.appId))).replace(`{${"user_id"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new JSONApiResponse(response, (jsonValue) => UserResponseFromJSON(jsonValue));
    }

    /**
     * Deactivate a user. Their account will still exist, but they will not be able to login.
     * Deactivate User
     */
    async deactivateUser(requestParameters: DeactivateUserRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<UserResponse> {
        const response = await this.deactivateUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a user.
     * Delete User
     */
    async deleteUserRaw(requestParameters: DeleteUserRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<void>> {
        if (requestParameters.appId === null || requestParameters.appId === undefined) {
            throw new RequiredError('appId','Required parameter requestParameters.appId was null or undefined when calling deleteUser.');
        }

        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling deleteUser.');
        }

        const queryParameters: any = {};

        const headerParameters: HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/apps/{app_id}/users/{user_id}`.replace(`{${"app_id"}}`, encodeURIComponent(String(requestParameters.appId))).replace(`{${"user_id"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new VoidApiResponse(response);
    }

    /**
     * Delete a user.
     * Delete User
     */
    async deleteUser(requestParameters: DeleteUserRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<void> {
        await this.deleteUserRaw(requestParameters, initOverrides);
    }

    /**
     * Get information about a user.
     * Get User
     */
    async getUserRaw(requestParameters: GetUserRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<UserResponse>> {
        if (requestParameters.appId === null || requestParameters.appId === undefined) {
            throw new RequiredError('appId','Required parameter requestParameters.appId was null or undefined when calling getUser.');
        }

        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling getUser.');
        }

        const queryParameters: any = {};

        const headerParameters: HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/apps/{app_id}/users/{user_id}`.replace(`{${"app_id"}}`, encodeURIComponent(String(requestParameters.appId))).replace(`{${"user_id"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new JSONApiResponse(response, (jsonValue) => UserResponseFromJSON(jsonValue));
    }

    /**
     * Get information about a user.
     * Get User
     */
    async getUser(requestParameters: GetUserRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<UserResponse> {
        const response = await this.getUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a user\'s information.
     * Update User
     */
    async updateUserRaw(requestParameters: UpdateUserOperationRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<UserResponse>> {
        if (requestParameters.appId === null || requestParameters.appId === undefined) {
            throw new RequiredError('appId','Required parameter requestParameters.appId was null or undefined when calling updateUser.');
        }

        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling updateUser.');
        }

        if (requestParameters.updateUserRequest === null || requestParameters.updateUserRequest === undefined) {
            throw new RequiredError('updateUserRequest','Required parameter requestParameters.updateUserRequest was null or undefined when calling updateUser.');
        }

        const queryParameters: any = {};

        const headerParameters: HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/apps/{app_id}/users/{user_id}`.replace(`{${"app_id"}}`, encodeURIComponent(String(requestParameters.appId))).replace(`{${"user_id"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateUserRequestToJSON(requestParameters.updateUserRequest),
        }, initOverrides);

        return new JSONApiResponse(response, (jsonValue) => UserResponseFromJSON(jsonValue));
    }

    /**
     * Update a user\'s information.
     * Update User
     */
    async updateUser(requestParameters: UpdateUserOperationRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<UserResponse> {
        const response = await this.updateUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
