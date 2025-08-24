import axios from "axios";
import { BASE_URL } from "../../../config/config";


export const getParsedData = async ({nodes, edges}) => {
    try {
        const res = await axios.post(`${BASE_URL}/pipelines/parse`, {
            nodes,
            edges,
        });;

        return res
    } catch (error) {
        return error
    }
}

