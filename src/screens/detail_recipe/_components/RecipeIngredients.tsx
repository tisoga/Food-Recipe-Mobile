import { View, Text, Dimensions } from 'react-native';
import styles from '../styles';
import usedTheme from '../../../hook/usedTheme';

type RecipeIngredientsProps = {
    title: string
    data: Array<IngredientsType>
}

const RecipeIngredients = ({ title, data }: RecipeIngredientsProps) => {
    const colors = usedTheme()
    const windowDimesion = Dimensions.get('window');

    return (
        <View style={styles.recipeContainer}>
            <Text style={[styles.textTitle, colors.primary]}>{title}</Text>
            <View style={{ width: windowDimesion.width - 30 }}>
                {data.map((item, index) => (
                    <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <Text style={[styles.textIngredients, colors.text]}>{`\u2B24 ${item.ingredient}`}</Text>
                        <Text style={[styles.textIngredients, colors.text]}>{`${item.qty}`}</Text>
                    </View>
                ))}
            </View>
        </View>
    )
}

export default RecipeIngredients