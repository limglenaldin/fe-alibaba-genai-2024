const API_URL = process.env.NEXT_PUBLIC_API_URL ?? ''
const API_KEY = process.env.NEXT_PUBLIC_API_KEY ?? ''

const apiConfig = {
    API_URL: API_URL
}

const apiHeaders = new Headers();
apiHeaders.append("X-API-KEY", API_KEY);

export {apiConfig, apiHeaders};