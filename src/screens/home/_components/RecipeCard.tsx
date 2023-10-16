import { Dimensions, Text, View, Image, TouchableOpacity } from "react-native"
import styles from "../styles"
import usedTheme from "../../../hook/usedTheme"
import imgTest from '../../../assets/carbonala.jpg'

type RecipeCardProps = {
    foodName: string
    foodCategory: string
    img?: string
    type: 'home' | 'recipe'
    onPress: () => void
}

const RecipeCard = ({ foodName, foodCategory, img, onPress, type = 'home' }: RecipeCardProps) => {
    const colors = usedTheme()
    const windowDimensions = Dimensions.get('window');

    return (
        <TouchableOpacity style={[styles.recipeCard, colors.bgCard,
        type === 'home'
            ? { height: windowDimensions.height / 3 - 10, width: windowDimensions.width / 2 - 22 }
            : { height: windowDimensions.height / 4 - 10, width: windowDimensions.width / 2 - 22 }
        ]}
            activeOpacity={0.8}
            onPress={onPress}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={imgTest} src={img} height={1} width={1} style={styles.recipeImage} />
            </View>
            <View style={{ marginBottom: 10 }}>
                <Text style={[styles.textRecipeName, colors.text]}>{foodName}</Text>
                <Text style={[styles.textRecipeCategory, colors.primary]}>{foodCategory}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default RecipeCard