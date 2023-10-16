import axios from 'axios';
import { API_URL } from '../config';

type FetchGetRecipeType = {
    page?: number
    isPopular?: boolean,
    search?: string,
    categoryId?: string
}

const getRecipe = async ({ page, isPopular, search, categoryId }: FetchGetRecipeType) => {
    const url = new URL(`${API_URL}/food-data`);

    if (page !== undefined) {
        url.searchParams.append('page', String(page));
    }

    if (isPopular !== undefined) {
        url.searchParams.append('isPopular', String(true))
    }

    if (search !== undefined) {
        url.searchParams.append('search', search)
    }

    if(categoryId !== undefined){
        url.searchParams.append('category', categoryId)
    }
    // console.log(url)
    try {
        const result = await axios.get(url.toString())
        const data: Array<FoodDataType> = result.data.data
        // console.log(data)
        return data
    }
    catch (e) {
        console.log(e)
        return []
    }
}

export default getRecipe