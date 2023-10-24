import { ScrollView, Button, Text } from 'react-native';
import styles from './styles';
import Header from './Header';
import PopularRecipe from './PopularRecipe';
import Category from './Category';
import Recipes from './Recipes';
import usedTheme from '../../hook/usedTheme';
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamsList } from '../../../App';
import { useQueries } from '@tanstack/react-query'
import getCategory from '../../fetching/getCategory';
import getRecipe from '../../fetching/getRecipe';
import LoadingScreen from '../loading_screen';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../redux/ThemeSlice';
import Modal from 'react-native-modal'
import ChangeTheme from './ChangeTheme';

type props = NativeStackScreenProps<RootStackParamsList, 'Home'>

const HomeScreen = ({ navigation }: props): JSX.Element => {
    const colors = usedTheme()
    const dispatch = useDispatch()

    const result = useQueries({
        queries: [
            {
                queryKey: ['category'],
                queryFn: () => getCategory(),
            },
            {
                queryKey: ['recipe'],
                queryFn: () => getRecipe({})
            },
            {
                queryKey: ['pupularRecipe'],
                queryFn: () => getRecipe({ page: 1, isPopular: true })
            }
        ]
    })

    const navigateToFavoriteFood = () => {
        navigation.navigate('FavoriteFood')
    }

    const navigateToSearch = () => {
        navigation.navigate('Search')
    }

    const navigateToDetail = (foodId: string) => {
        navigation.navigate('Detail', { foodId })
    }

    const navigateToAllRecipe = (type: 'Category' | 'Recipe', oldData: Array<FoodDataType>) => {
        navigation.navigate('All_Recipe', {
            type: type,
            oldData: oldData
        })
    }

    const navigateToCategory = (categoryId: string, categoryTitle: string) => {
        navigation.navigate('All_Recipe', {
            type: 'Category_Recipe',
            categoryId: categoryId,
            categoryTitle: categoryTitle
        })
    }

    const navigateToAllCategory = (oldData: Array<CategoryDataType>) => {
        navigation.navigate('All_Recipe', {
            type: 'Category',
            oldData: oldData
        })
    }

    const isLoading = result.some(query => query.isLoading)

    if (isLoading) {
        return (
            <LoadingScreen />
        )
    }

    const onClick = () => {
        dispatch(changeTheme('green'))
    }

    return (
        <ScrollView style={[styles.mainContainer, colors.background]}>
            <Header navigateToSearch={navigateToSearch} navigateToFavorite={navigateToFavoriteFood} />
            <PopularRecipe data={result[2].data} navigate={navigateToDetail} />
            <Category data={result[0].data} navigateToCategory={navigateToCategory} navigateAllCategory={navigateToAllCategory} />
            <Recipes data={result[1].data} navigateDetail={navigateToDetail} navigateAllRecipe={navigateToAllRecipe} />
            <ChangeTheme />
        </ScrollView>
    )
}

export default HomeScreen