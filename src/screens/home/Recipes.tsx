import { View, Text, Pressable } from 'react-native'
import styles from './styles'
import usedTheme from '../../hook/usedTheme'
import { RecipeCard } from './_components'


type RecipeProps = {
    navigateDetail: (foodId: string) => void
    navigateAllRecipe: (type: 'Category' | 'Recipe', oldData: Array<any>) => void
    data?: Array<FoodDataType>
}

const Recipe = ({ navigateDetail, navigateAllRecipe, data }: RecipeProps) => {
    const colors = usedTheme()

    return (
        <View style={styles.recipeContainer}>
            <View style={styles.textContainer}>
                <Text style={[styles.textTitle, colors.text]}>Recipe</Text>
                {data &&
                    <Pressable onPress={() => navigateAllRecipe('Recipe', data)}>
                        <Text style={[styles.textSecondary, colors.text]}>View all</Text>
                    </Pressable>
                }
            </View>
            <View style={styles.recipeCardContainer}>
                {data &&
                    data.map((item) => (
                        <RecipeCard
                            key={item.id}
                            foodName={item.dishName}
                            foodCategory={item.categories.name}
                            img={item.image}
                            type='home'
                            onPress={() => navigateDetail(item.id)} />
                    ))}
            </View>
        </View>
    )
}

export default Recipe