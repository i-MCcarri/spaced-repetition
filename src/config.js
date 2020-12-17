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
    API_ENDPOINT: 'https://still-springs-12112.herokuapp.com/api',
    TOKEN_KEY: tokenKey,
}