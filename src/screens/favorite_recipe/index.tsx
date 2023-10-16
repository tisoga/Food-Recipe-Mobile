import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import usedTheme from '../../hook/usedTheme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { RecipeCard } from '../home/_components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../../../App';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { FlatList } from 'react-native';

type FavoriteFoodProps = NativeStackScreenProps<RootStackParamsList, 'FavoriteFood'>

const FavoriteFoodScreen = ({ route, navigation }: FavoriteFoodProps) => {
    const colors = usedTheme()
    const data = useSelector((state: RootState) => state.FavoriteFood)


    const navigateToBack = () => {
        navigation.goBack()
    }

    const navigateToDetailFood = (foodId: string) => {
        navigation.navigate('Detail', {
            foodId: foodId
        })
    }

    return (
        <FlatList
            keyExtractor={item => item.id}
            data={data}
            contentContainerStyle={data.length === 0 && styles.mainContainer}
            ListHeaderComponentStyle={styles.headerContainer}
            numColumns={2}
            ListHeaderComponent={(
                <>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.backButton}
                        onPress={navigateToBack} >
                        <Icon name='arrow-left' size={30} style={colors.primary} />
                    </TouchableOpacity>
                    <View style={{ alignSelf: 'center', flex: 1 }}>
                        <Text style={styles.titleText}>Favorite Food</Text>
                    </View>
                </>
            )}
            ListEmptyComponent={(
                <View style={styles.emptyContainer}>
                    <Text style={[styles.titleText, colors.text]}>Favorite Food is Empty</Text>
                    <Text style={[styles.secondText, colors.text]}>Add Recipe to Favorite First</Text>
                </View>
            )}
            renderItem={({ item }) => (
                <View style={styles.recipeContainer}>
                    <RecipeCard
                        key={item.id}
                        foodName={item.dishName}
                        foodCategory={item.categories.name}
                        img={item.image}
                        onPress={() => navigateToDetailFood(item.id)}
                        type='recipe'
                    />
                </View>
            )}
        />
    )
}

export default FavoriteFoodScreen