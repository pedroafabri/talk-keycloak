# Simple Keycloak application

## Configuring & Running

Simply run the command `docker compose up` should be good to go.

After configuring your Keycloak realm, copy the realm's Public Key and paste it inside `js-app/jwt-key.js` file, keeping the `-----BEGIN PUBLIC KEY-----` and `-----END PUBLIC KEY-----` intact.

## Accessing Keycloak
In the default configuration, keycloak will be available at the port 8080.
Simply access [localhost:8080](http://localhost:8080) to sign-in.

The default user and password for this keycloak is `admin` and `admin`.

## JS Application
The JS example application is available on port 8000.
If you try and access the address [localhost:8000](http://localhost:8000) without providing a valid token, you'll receive the message `YOU HAVE NO POWER HERE`, alongside `HTTP STATUS 401 - UNAUTHORIZED`.

