import { Text, TouchableOpacity } from "react-native"
import styles from "../styles"
import usedTheme from "../../../hook/usedTheme"

type ItemPopularProps = {
    text: string
    onPress: () => void
}

const ItemPopularTag = ({ text, onPress }: ItemPopularProps) => {
    const colors = usedTheme()

    return (
        <TouchableOpacity style={[styles.tagContainer, colors.border]} onPress={onPress} activeOpacity={0.7}>
            <Text style={[styles.textNormal, colors.primary]}>{text}</Text>
        </TouchableOpacity>
    )
}

export default ItemPopularTag