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

import { exists, mapValues } from '../runtime';
import type { UserMetadataFieldType } from './UserMetadataFieldType';
import {
    UserMetadataFieldTypeFromJSON,
    UserMetadataFieldTypeFromJSONTyped,
    UserMetadataFieldTypeToJSON,
} from './UserMetadataFieldType';

/**
 * 
 * @export
 * @interface UserMetadataField
 */
export interface UserMetadataField {
    /**
     * 
     * @type {string}
     * @memberof UserMetadataField
     */
    field_name: string;
    /**
     * 
     * @type {string}
     * @memberof UserMetadataField
     */
    friendly_name: string;
    /**
     * 
     * @type {string}
     * @memberof UserMetadataField
     */
    id: string;
    /**
     * 
     * @type {boolean}
     * @memberof UserMetadataField
     */
    profile: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserMetadataField
     */
    registration: boolean;
    /**
     * 
     * @type {UserMetadataFieldType}
     * @memberof UserMetadataField
     */
    type: UserMetadataFieldType;
}

/**
 * Check if a given object implements the UserMetadataField interface.
 */
export function instanceOfUserMetadataField(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "field_name" in value;
    isInstance = isInstance && "friendly_name" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "profile" in value;
    isInstance = isInstance && "registration" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function UserMetadataFieldFromJSON(json: any): UserMetadataField {
    return UserMetadataFieldFromJSONTyped(json, false);
}

export function UserMetadataFieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserMetadataField {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'field_name': json['field_name'],
        'friendly_name': json['friendly_name'],
        'id': json['id'],
        'profile': json['profile'],
        'registration': json['registration'],
        'type': UserMetadataFieldTypeFromJSON(json['type']),
    };
}

export function UserMetadataFieldToJSON(value?: UserMetadataField | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'field_name': value.field_name,
        'friendly_name': value.friendly_name,
        'id': value.id,
        'profile': value.profile,
        'registration': value.registration,
        'type': UserMetadataFieldTypeToJSON(value.type),
    };
}
