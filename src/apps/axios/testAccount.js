import axios from 'axios';
const testAccount = axios.create ({
    baseURL: 'https://api.jsonbin.io/b/5f06d053a62f9b4b27619c9c/1',
    headers: {
        "secret-key":"$2b$10$U/28fyJlsTWwHU/cFW1xp.amnXoM1V7.Fa9VqsqWqH/RkCEgd/yfC"
    },
     responseType : "json"
});
export default testAccount;