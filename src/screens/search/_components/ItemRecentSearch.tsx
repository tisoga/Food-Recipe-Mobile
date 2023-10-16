import { Pressable, Text, View } from "react-native"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from "../styles"
import usedTheme from "../../../hook/usedTheme"
import { useDispatch } from "react-redux"
import { deleteSearchHistory } from "../../../redux/SearchHistorySlice"

type ItemRecentProps = {
    text: string,
    onHandlerPress: (keyword: string) => void
}

const ItemRecentSearch = ({ text, onHandlerPress }: ItemRecentProps) => {
    const colors = usedTheme()
    const dispatch = useDispatch()

    const onHandlerDelete = () => {
        dispatch(deleteSearchHistory(text))
    }


    return (
        <View style={styles.recentItemContainer}>
            <Pressable onPress={ () => onHandlerPress(text) }>
                <Text style={[styles.textNormal, colors.text]}>{text}</Text>
            </Pressable>
            <Icon name="close" size={20} onPress={onHandlerDelete} />
        </View>
    )
}

export default ItemRecentSearch