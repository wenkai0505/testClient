import axios from 'axios'
let API_URL = "https://testserver-ryan.herokuapp.com/api/pepole"

class Addpepole {
    get() {
        return axios.get(API_URL)
    }
    post(name, email, phone, age) {
        return axios.post(API_URL, {
            name, email, phone, age
        })
    }
}


export default new Addpepole()