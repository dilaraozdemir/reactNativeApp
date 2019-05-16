import axios from 'axios';

const api = axios.create({
    baseURL: 'https://',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});
/** 
const postRequest = (uri,data) => {

    Object.keys(data).map((value,key) => value.trim());

    return new Promise((resolve,reject) =>{
        api.post(uri,data)
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    });
}
*/

export default api;