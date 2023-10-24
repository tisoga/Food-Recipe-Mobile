import { View, Text } from 'react-native'
import styles from '../styles'
import usedTheme from '../../../hook/usedTheme'

const NotFound = () => {
    const colors = usedTheme()
    return (
        <View style={[styles.notFoundContainer, colors.background]}>
            <Text style={[colors.text, styles.titleText]}>Data Not Found</Text>
        </View>
    )
}

export default NotFound