import { View, Text, FlatList, Pressable } from 'react-native';
import styles from './styles';
import usedTheme from '../../hook/usedTheme';
import { CategoryCard } from './_components';

type categoryProps = {
    navigateToCategory: (categoryId: string, categoryTitle: string) => void
    navigateAllCategory: (oldData: Array<CategoryDataType>) => void
    data?: Array<CategoryDataType>,
}

const Category = ({ navigateAllCategory, navigateToCategory, data }: categoryProps) => {
    const colors = usedTheme()

    return (
        <View style={styles.categoryContainer}>
            {data &&
                <Pressable style={styles.textContainer} onPress={() => navigateAllCategory(data)}>
                    <Text style={[styles.textTitle, colors.text]}>Category</Text>
                    <Text style={[styles.textSecondary, colors.text]}>View all</Text>
                </Pressable>
            }
            <FlatList
                data={data}
                keyExtractor={item => String(item.id)}
                horizontal={true}
                renderItem={({ item }) => (
                    <CategoryCard id={item.id} categoryText={item.name} image={item.image} onPress={navigateToCategory} />
                )}
            />
        </View>
    )
}

export default Category