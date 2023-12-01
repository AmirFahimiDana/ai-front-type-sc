import axios from "axios";

const BASE_URL = "./result2.json";

const getPersons = async () => {
    const response = await axios.get(`${BASE_URL}`);
    return response.data;
};


export { getPersons };
