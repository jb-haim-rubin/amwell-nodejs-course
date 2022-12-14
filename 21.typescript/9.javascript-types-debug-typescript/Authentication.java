interface IAuthentication {
    void onAuthenticated()
}




class Authentication {
    private IAuthentication auth;
    Authentication(IAuthentication auth) {
        this.auth = auth
    }

    void runner() {
        //Authenticated
        this.auth.onAuthenticated(....)
    }
}

