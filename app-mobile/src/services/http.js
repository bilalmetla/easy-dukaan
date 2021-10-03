import Constants from "../constants";


let url = Constants.serverUrl + '/api'

export const get = async (path) => {
    if (path.charAt(0) == '/') {
        path = path.substring(1)
    }
    
    const response = await fetch(`${url}/${path}`);
    return await response.json();
};


export const post = async (path, data) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    if (path.charAt(0) == '/') {
        path = path.substring(1)
    }
    const response = await fetch(`${url}/${path}`, requestOptions);
    return await response.json();
}