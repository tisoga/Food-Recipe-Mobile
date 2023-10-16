import { TextInput, View, Pressable } from "react-native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import styles from "./styles"
import usedTheme from "../../hook/usedTheme"


type SearchInputProps = {
    navigateGoBack: () => void
    onHandlerSearch: (keyword: string) => void
    focus?: boolean,
    value: string
    onChange: Function
}

const SearchInput = ({ navigateGoBack, onHandlerSearch, focus = true, value, onChange }: SearchInputProps) => {
    const colors = usedTheme()

    return (
        <View style={styles.searchHeaderContainer}>
            <Icon name='arrow-left' size={30} style={colors.primary} onPress={navigateGoBack} />
            <View style={styles.searchInputContainer}>
                <TextInput
                    placeholder='Search Recipes'
                    style={{ fontSize: 20 }}
                    autoFocus={focus}
                    value={value}
                    onChangeText={(val) => onChange(val)}
                />
                <Pressable style={[styles.searchButton, colors.button]} onPress={() => onHandlerSearch(value)}>
                    <Icon name='magnify' size={28} color={'white'} />
                </Pressable>
            </View>
        </View>
    )
}

export default SearchInput