import { AuthStrategy } from './AuthStrategy.js';

export type PassageConfig = {
    appID: string;
    apiKey?: string;
    authStrategy?: AuthStrategy;
    failureRedirect?: string;
};
