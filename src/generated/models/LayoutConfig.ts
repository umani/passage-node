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
/**
 * 
 * @export
 * @interface LayoutConfig
 */
export interface LayoutConfig {
    /**
     * 
     * @type {number}
     * @memberof LayoutConfig
     */
    h: number;
    /**
     * 
     * @type {string}
     * @memberof LayoutConfig
     */
    id: string;
    /**
     * 
     * @type {number}
     * @memberof LayoutConfig
     */
    w: number;
    /**
     * 
     * @type {number}
     * @memberof LayoutConfig
     */
    x: number;
    /**
     * 
     * @type {number}
     * @memberof LayoutConfig
     */
    y: number;
}

/**
 * Check if a given object implements the LayoutConfig interface.
 */
export function instanceOfLayoutConfig(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "h" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "w" in value;
    isInstance = isInstance && "x" in value;
    isInstance = isInstance && "y" in value;

    return isInstance;
}

export function LayoutConfigFromJSON(json: any): LayoutConfig {
    return LayoutConfigFromJSONTyped(json, false);
}

export function LayoutConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): LayoutConfig {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'h': json['h'],
        'id': json['id'],
        'w': json['w'],
        'x': json['x'],
        'y': json['y'],
    };
}

export function LayoutConfigToJSON(value?: LayoutConfig | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'h': value.h,
        'id': value.id,
        'w': value.w,
        'x': value.x,
        'y': value.y,
    };
}
