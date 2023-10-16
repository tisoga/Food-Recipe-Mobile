import { Text, View } from "react-native"
import styles from "./styles"
import usedTheme from "../../hook/usedTheme"
import { ItemPopularTag, ItemRecentSearch } from "./_components"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"

type SearchBodyProps = {
    onHandlerSearch: (keyword: string) => void
    onPressPopularSearch: (foodId: string) => void
}

const SearchBody = ({ onHandlerSearch, onPressPopularSearch }: SearchBodyProps) => {
    const colors = usedTheme()
    const searchHistory = useSelector((state: RootState) => state.SearchHistory)
    const popularHistory = useSelector((state: RootState) => state.PopularHistory)

    return (
        <View style={styles.searchBodyContainer}>
            {searchHistory?.length >= 1 &&
                <View style={styles.recentSearchContainer}>
                    <Text style={[styles.textTitle, colors.text]}>Recent Searches</Text>
                    {searchHistory.map((item) => (
                        <ItemRecentSearch onHandlerPress={onHandlerSearch} key={item} text={item} />
                    ))}
                </View>
            }
            <View style={styles.popularSearchContainer}>
                <Text style={[styles.textTitle, colors.text]}>Popular Searches</Text>
                <View style={styles.popularItemContainer}>
                    {popularHistory.map((item) => (
                        <ItemPopularTag key={item.id} onPress={() => onPressPopularSearch(item.id)} text={item.name} />
                    ))}
                </View>
            </View>
        </View>
    )
}

export default SearchBody