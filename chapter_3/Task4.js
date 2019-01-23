function createSecretHolder(secret) {
    var value = {
        getSecret() {
            return secret;
        },
        setSecret(data) {
            secret = data;
        }
    }
    return value;
}