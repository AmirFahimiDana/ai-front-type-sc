import axios from "axios";

const BASE_URL = `http://192.168.10.41:8000/answer/?param=`;
const BASE_URL2 = `http://192.168.10.41:8000/result/?param=`;

const getQuery = async (question: string) => {
    try {
        const response = await fetch(`${BASE_URL}${question}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }

        const result = await response.json();
        return JSON.stringify(result.message, null, 4)

    } catch (err: any) {
        throw new Error(err.message);
    }

};

const getData = async (query: string) => {
    const response = await axios.get(`${BASE_URL2}${query}`);
    return response.data;
};

export { getQuery, getData };
