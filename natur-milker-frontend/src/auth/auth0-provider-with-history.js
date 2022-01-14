import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const history = useHistory();
  const domain = 'dev-umutgungor.eu.auth0.com'
  const clientId = 'psuEn3ZXBjkvTxPFgiSzo4kgxFSRrxqS'
  const audience = 'https://dev-umutgungor.eu.auth0.com/api/v2/'

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
    audience={audience}
    useRefreshTokens
    cacheLocation="localstorage"
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;