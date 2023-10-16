import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import usedTheme from '../../hook/usedTheme';
import { PopularCard } from './_components';

type PopularRecipeProps = {
    navigate: (foodId: string) => void
    data?: Array<FoodDataType>
}

const PopularRecipe = ({ navigate, data }: PopularRecipeProps) => {
    const colors = usedTheme()

    return (
        <View style={styles.popularRecipeContainer}>
            <Text style={[styles.textTitle, colors.text]}>Popular Recipe</Text>
            <FlatList
                data={data}
                horizontal={true}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <PopularCard
                        id={item.id}
                        img={item.image}
                        foodName={item.dishName}
                        category={item.categories.name}
                        onPress={() => navigate(item.id)} />
                )}
            />
        </View>
    )
}

export default PopularRecipe