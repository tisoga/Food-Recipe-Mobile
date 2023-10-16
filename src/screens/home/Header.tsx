import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles'
import usedTheme from '../../hook/usedTheme'

type HeaderProps = {
    navigateToSearch: () => void
    navigateToFavorite: () => void
}

const Header = ({ navigateToSearch, navigateToFavorite  }: HeaderProps): JSX.Element => {
    const colors = usedTheme()

    return (
        <>
            <View style={styles.headerContainer}>
                <View style={styles.headerLeftContainer}>
                    <Text style={[styles.headerText, colors.primary]}>Explore Now!</Text>
                    <Text style={[styles.headerNormalText, colors.text]}>What You want to cook today?</Text>
                </View>
                <TouchableOpacity style={styles.headerRightContainer} activeOpacity={0.8} onPress={navigateToFavorite}>
                    <Icon name='heart' size={45} style={colors.primary} />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.searchContainer} onPress={navigateToSearch} activeOpacity={1}>
                    <>
                        <Icon name='magnify' size={28} />
                        <TextInput
                            placeholder='Search for a Meal'
                            style={{ fontSize: 20 }}
                            editable={false}
                        />
                    </>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Header