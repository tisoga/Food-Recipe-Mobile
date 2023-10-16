import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home';
import SearchScreen from './src/screens/search';
import DetailRecipeScreen from './src/screens/detail_recipe';
import AllRecipeScreen from './src/screens/all_recipe';
import FavoriteFoodScreen from './src/screens/favorite_recipe';

export type RootStackParamsList = {
    Home: undefined,
    Search: undefined,
    Detail: {
        foodId: string
    },
    All_Recipe: {
        oldData?: Array<FoodDataType> | Array<CategoryDataType>
        searchKeyword?: string
        categoryId?: string
        categoryTitle?: string
        type: 'Search' | 'Recipe' | 'Category' | 'Category_Recipe'
    },
    FavoriteFood: undefined
}

const Stack = createNativeStackNavigator<RootStackParamsList>()

const App = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Search' component={SearchScreen} />
            <Stack.Screen name='Detail' component={DetailRecipeScreen} />
            <Stack.Screen name='All_Recipe' component={AllRecipeScreen} />
            <Stack.Screen name='FavoriteFood' component={FavoriteFoodScreen} />
        </Stack.Navigator>
    )
}

export default App