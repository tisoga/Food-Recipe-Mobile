import { View, Text, ScrollView, Dimensions, ImageBackground, TouchableOpacity } from "react-native"
import styles from './styles'
import imgTest from '../../assets/carbonala.jpg'
import usedTheme from "../../hook/usedTheme"
import { RecipeIngredients, RecipeInstructions } from "./_components"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamsList } from "../../../App"
import { useQuery } from '@tanstack/react-query'
import getRecipeDetail from "../../fetching/getRecipeDetail"
import { useDispatch, useSelector } from "react-redux"
import { addToFavorite, deleteFromFavorite } from "../../redux/FavoriteFoodSlice"
import { RootState } from "../../redux/store"
import { useEffect } from "react"
import LoadingScreen from "../loading_screen"

type props = NativeStackScreenProps<RootStackParamsList, 'Detail'>

const DetailRecipeScreen = ({ route, navigation }: props) => {
    const foodId = route.params.foodId
    const favoriteFood = useSelector((state: RootState) => state.FavoriteFood)
    const windowDimesion = Dimensions.get('window')
    const dispatch = useDispatch()
    const colors = usedTheme()

    const goBack = () => {
        navigation.goBack()
    }

    const { isLoading, data } = useQuery({
        queryKey: ['detailRecipe'],
        queryFn: () => getRecipeDetail(foodId),
        staleTime: 0,
        cacheTime: 0

    })

    if (isLoading) {
        return (
            <LoadingScreen />
        )
    }

    if (!data) {
        return (
            <View>
                <Text>No data</Text>
            </View>
        )
    }

    const onClickToFavorite = () => {
        dispatch(addToFavorite(data))
    }

    const onDeleteFavorite = () => {
        dispatch(deleteFromFavorite(data.id))
    }

    return (
        <ScrollView style={styles.mainContainer}>
            <ImageBackground
                source={imgTest}
                src={data.image}
                style={[styles.imageContainer, { width: windowDimesion.width, height: windowDimesion.height / 2.7 }]} >
                <View style={styles.headerContainer}>
                    <TouchableOpacity style={[styles.headerButton, colors.button]} activeOpacity={0.8} onPress={goBack}>
                        <Icon name="arrow-left" size={30} color={'white'} />
                    </TouchableOpacity>
                    {favoriteFood.find(item => item.id === data.id)
                        ?
                        <TouchableOpacity style={[styles.headerButton, colors.button]} activeOpacity={0.8} onPress={onDeleteFavorite}>
                            <Icon name="heart" size={30} color={'red'} />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={[styles.headerButton, colors.button]} activeOpacity={0.8} onPress={onClickToFavorite}>
                            <Icon name="heart" size={30} color={'black'} />
                        </TouchableOpacity>
                    }
                </View>
                <View style={styles.foodInformationContainer}>
                    <Text style={[styles.textFoodName, colors.text]}>{data.dishName}</Text>
                    <Text style={[styles.textSecondaryInfo, colors.text]}>{`${data.categories.name} | ${data.origin}`}</Text>
                </View>
            </ImageBackground>
            <ScrollView style={[styles.detailContainer, colors.background]}>
                <RecipeIngredients title="Ingredients" data={data.ingredients} />
                <RecipeInstructions title="Instructions" data={data.instructions} />
            </ScrollView>
        </ScrollView>
    )
}

export default DetailRecipeScreen