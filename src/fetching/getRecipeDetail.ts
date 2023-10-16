import axios from 'axios';
import { API_URL } from '../config';

const getRecipeDetail = async (foodId: string) => {
    try {
        const result = await axios.get(`${API_URL}/food-data/${foodId}`)
        const data: FoodDataDetailType = result.data.data
        return data
    }
    catch (e) {
        console.log(e)
        return ''
    }
}

export default getRecipeDetail