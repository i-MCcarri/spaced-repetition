let apiPath
let tokenKey

if (process.env.NODE_ENV === 'production') {
    apiPath = process.env.REACT_APP_API_ENDPOINT
    tokenKey = 'blogful-client-auth-token'
} else {
    apiPath = 'http://localhost:8000/api'
    tokenKey = 'blogful-client-auth-token'
}

export default {
    API_ENDPOINT: apiPath,
    TOKEN_KEY: tokenKey,
}