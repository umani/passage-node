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


/**
 * 
 * @export
 */
export const UserMetadataFieldType = {
    String: 'string',
    Boolean: 'boolean',
    Integer: 'integer',
    Date: 'date',
    Phone: 'phone',
    Email: 'email'
} as const;
export type UserMetadataFieldType = typeof UserMetadataFieldType[keyof typeof UserMetadataFieldType];


export function UserMetadataFieldTypeFromJSON(json: any): UserMetadataFieldType {
    return UserMetadataFieldTypeFromJSONTyped(json, false);
}

export function UserMetadataFieldTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserMetadataFieldType {
    return json as UserMetadataFieldType;
}

export function UserMetadataFieldTypeToJSON(value?: UserMetadataFieldType | null): any {
    return value as any;
}
