import { PassageConfig } from "../types/PassageConfig";
import axios from "axios";

export default class User {
    #appID: string;
    #apiKey: string;
    #authorizationHeader: object | undefined;
     
    constructor(config: PassageConfig) {
        this.#appID = config.appID ? config.appID : '';
        this.#apiKey = config.apiKey ? config.apiKey : '';

        if (this.#apiKey) {
            this.#authorizationHeader = { headers: {
                'Authorization': `Bearer ${this.#apiKey}` 
            }}
        } else {
            this.#authorizationHeader = undefined;
        }

    }

    async get(userID: string): Promise<object> {
        if (!this.#apiKey) throw new Error("A Passage API key is needed to make a getUser request");

        let userData: object = await axios.get(
            `https://api.passage.id/v1/apps/${this.#appID}/users/${userID}`,
            {
                headers: {
                    'Authorization': `Bearer ${this.#apiKey}`,
                }
            }
        )
            .catch(err => {
                throw new Error(`Could not fetch user. HTTP status: ${err.response.status}`);
            })
            .then(res => {
                return res.data.user;
            });

        return userData;
    }

    async deactivate(userID: string): Promise<object> {
        try {
            if (!this.#apiKey) throw new Error("A Passage API key is needed to make a deactivateUser request");

            let userData: object = await axios.patch(
                `https://api.passage.id/v1/apps/${this.#appID}/users/${userID}/deactivate`,
                null, // note that this null is required as axios.patch has different param order than axios.get
                {
                    headers: {
                        'Authorization': `Bearer ${this.#apiKey}`,
                    }
                }
            )
                .catch(err => {
                    throw new Error(`Could not deactivate user. HTTP status: ${err.response.status}`);
                })
                .then(res => {
                    return res.data.user;
                });
    
            return userData;
        } catch(e) {
            console.warn(e);
            return {};
        }
        
    }
    
    async activate(userID: string): Promise<object> {
        try {
            if (!this.#apiKey) throw new Error("A Passage API key is needed to make an activateUser request");

            let userData: object = await axios.patch(
                `https://api.passage.id/v1/apps/${this.#appID}/users/${userID}/activate`,
                null, // note that this null is required as axios.patch has different param order than axios.get
                {
                    headers: {
                        'Authorization': `Bearer ${this.#apiKey}`,
                    }
                }
            )
                .catch(err => {
                    throw new Error(`Could not activate user. HTTP status: ${err.response.status}`);
                })
                .then(res => {
                    return res.data.user;
                });
    
            return userData;
        } catch(e) {
            console.warn(e);
            return {};
        }
    }
}