/*
 * A holder for OAuth settings
 */
export interface OAuthConfiguration {
    authority: string;
    clientId: string;
    clientSecret: string;
    userId: string;
    password: string;
    scope: string;
}
