"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TDAmeritrade;

function TDAmeritrade(options) {
  return {
    id: "td",
    name: "TD Ameritrade",
    type: "oauth",
    version: "2.0",
    params: {
      grant_type: "authorization_code"
    },
    accessTokenUrl: "https://api.tdameritrade.com/v1/oauth2/token",
    requestTokenUrl: "https://api.tdameritrade.com/v1/oauth2/token",
    authorizationUrl: `https://auth.tdameritrade.com/auth?response_type=code`,
    profileUrl: `https://api.tdameritrade.com/v1/userprincipals`,

    profile(profile) {
      return { ...profile,
        id: profile.userId
      };
    },

    ...options
  };
}