import { Pressable, Text } from "react-native"
import styles from "../styles"
import usedTheme from "../../../hook/usedTheme"


type PaginationBtnType = {
    pageNo: number
    isSelected?: boolean
    onPress: () => void
}

const PaginationBtn = ({ pageNo, isSelected, onPress }: PaginationBtnType) => {
    const colors = usedTheme()
    return (
        <Pressable style={isSelected ? styles.buttonSelected : styles.button} onPress={onPress}>
            <Text style={[colors.text, isSelected ? styles.textButtonSelected : styles.textButton]}>{String(pageNo)}</Text>
        </Pressable>
    )
}

export default PaginationBtn