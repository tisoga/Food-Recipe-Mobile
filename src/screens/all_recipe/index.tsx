import { useEffect, useState } from 'react'
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import styles from './styles'
import { RecipeCard } from '../home/_components'
import { PaginationBtn, CategoryCard, NotFound } from './_components'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamsList } from '../../../App'
import { useQuery } from '@tanstack/react-query'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import SearchInput from '../search/SearchInput'
import getRecipe from '../../fetching/getRecipe'
import usedTheme from '../../hook/usedTheme'
import LoadingScreen from '../loading_screen'


type AllRecipeScreenProps = NativeStackScreenProps<RootStackParamsList, 'All_Recipe'>

const AllRecipeScreen = ({ route, navigation }: AllRecipeScreenProps) => {
    const { type, searchKeyword, oldData, categoryId, categoryTitle } = route.params
    const [searchValue, setSearchValue] = useState(searchKeyword)
    const [refresh, setRefresh] = useState(true)
    const [pageNo, setPageNo] = useState(1)
    const colors = usedTheme()
    const totalPage = 4

    const { isLoading, data, refetch } = useQuery({
        initialData: oldData,
        queryKey: ['searchRecipe'],
        queryFn: async () => {
            if (type === 'Search') return await getRecipe({ search: searchValue })
            else if (type === 'Recipe') return await getRecipe({ page: pageNo })
            else if (type === 'Category_Recipe') return await getRecipe({ categoryId: categoryId })
            else return oldData
        },
        staleTime: 0,
        cacheTime: 0
    })


    const navigateToBack = () => {
        navigation.goBack()
    }

    const searchButton = () => {
        refetch()
    }

    const onHandlerPaginationBtn = (page: number) => {
        setPageNo(page)
    }

    const onHandlerCategoryBtn = (categoryId: string, categoryTitle: string) => {
        navigation.navigate('All_Recipe', {
            type: 'Category_Recipe',
            categoryId: categoryId,
            categoryTitle: categoryTitle
        })
        setRefresh(!refresh)
    }

    useEffect(() => {
        refetch()
    }, [pageNo, refresh])

    if (isLoading) {
        return (
            <LoadingScreen />
        )
    }

    return (
        <ScrollView contentContainerStyle={styles.mainContainer}>
            {type === 'Search'
                ?
                <SearchInput
                    navigateGoBack={navigateToBack}
                    onHandlerSearch={searchButton}
                    focus={false}
                    value={searchValue}
                    onChange={setSearchValue} />
                :
                <View style={styles.headerContainer}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={type == 'Category' || type == 'Category_Recipe' ? styles.backButton : styles.backButton2}
                        onPress={navigateToBack} >
                        <Icon name='arrow-left' size={30} style={colors.primary} />
                    </TouchableOpacity>
                    <View style={{ alignSelf: 'center', flex: 1 }}>
                        {type === 'Category_Recipe'
                            ? <Text style={styles.titleText}>All {categoryTitle} Category</Text>
                            : <Text style={styles.titleText}>All {type}</Text>
                        }
                        {type === 'Recipe' &&
                            <Text style={styles.normalText}>Page {pageNo}</Text>
                        }
                    </View>
                </View>
            }
            <View style={styles.recipeContainer}>
                {type === 'Category' ?
                    <>
                        {data?.map((item) => {
                            if (!('categories' in item)) {
                                return (
                                    <CategoryCard
                                        key={item.id}
                                        id={item.id}
                                        categoryText={item.name}
                                        image={item.image}
                                        onPress={onHandlerCategoryBtn} />
                                )
                            }
                        })}
                    </>
                    :
                    <>
                        { data?.length == 0 && (<NotFound />) }
                        {data?.map((item) => {
                            if ('categories' in item)
                                return (
                                    <RecipeCard
                                        key={item.id}
                                        foodCategory={item.categories.name}
                                        foodName={item.dishName}
                                        img={item.image}
                                        onPress={() => navigation.navigate('Detail', {
                                            foodId: item.id
                                        })}
                                        type='recipe' />
                                )
                        })}
                    </>
                }
            </View>
            {
                type === 'Recipe' &&
                <View style={styles.buttonContainer}>
                    {[...Array(totalPage)].map((_, index) => (
                        <PaginationBtn
                            key={index}
                            pageNo={index + 1}
                            onPress={() => onHandlerPaginationBtn(index + 1)}
                            isSelected={pageNo === index + 1} />
                    ))}
                </View>
            }
        </ScrollView >
    )
}

export default AllRecipeScreen