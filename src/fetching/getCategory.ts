import axios from 'axios';
import { API_URL } from '../config';

const getCategory = async () => {
    try {
        const result = await axios.get(`${API_URL}/category`)
        const data: Array<CategoryDataType> = result.data.data
        return data
    }
    catch (e) {
        console.log(e)
        return []
    }
}

export default getCategory