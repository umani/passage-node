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
 * Body font family
 * @export
 */
export const FontFamily = {
    Helvetica: 'Helvetica',
    Arial: 'Arial',
    ArialBlack: 'Arial Black',
    Verdana: 'Verdana',
    Tahoma: 'Tahoma',
    TrebuchetMs: 'Trebuchet MS',
    Impact: 'Impact',
    GillSans: 'Gill Sans',
    TimesNewRoman: 'Times New Roman',
    Georgia: 'Georgia',
    Palatino: 'Palatino',
    Baskerville: 'Baskerville',
    AndalMono: 'Andalé Mono',
    Courier: 'Courier',
    Lucida: 'Lucida',
    Monaco: 'Monaco',
    BradleyHand: 'Bradley Hand',
    BrushScriptMt: 'Brush Script MT',
    Luminari: 'Luminari',
    ComicSansMs: 'Comic Sans MS'
} as const;
export type FontFamily = typeof FontFamily[keyof typeof FontFamily];


export function FontFamilyFromJSON(json: any): FontFamily {
    return FontFamilyFromJSONTyped(json, false);
}

export function FontFamilyFromJSONTyped(json: any, ignoreDiscriminator: boolean): FontFamily {
    return json as FontFamily;
}

export function FontFamilyToJSON(value?: FontFamily | null): any {
    return value as any;
}
