import { BASE_URL } from "@/utils/baseurl";
import axios from "axios";


type method = 'POST' | 'GET' | 'DELETE' | 'PATCH';



function fecthAPI(method: method, endpoint: string, data?: any, headers?: any) {
    const response = axios({
        method: method,
        headers: {
            // 'Content-Type': 'application/json',
            ...headers
        },
        url: `${BASE_URL()}${endpoint}`,
        data: data
    }).then((response) => {
        return response
    }).catch((error) => {
        return error.response.data
    })
    return response
}

export default fecthAPI