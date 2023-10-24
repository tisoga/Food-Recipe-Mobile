import { Pressable, View } from 'react-native';
import styles from '../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

type ThemeButtonProps = {
    name: ThemeList
    color: string
    onPress: (name: ThemeList) => void
}

const ThemeButton = ({ name, color, onPress }: ThemeButtonProps) => {
    const selectedTheme = useSelector((state: RootState) => state.Theme)
    
    return (
        <View>
            <Pressable style={[{ backgroundColor: color }, styles.btnThemeColor]} onPress={() => onPress(name)} />
            {selectedTheme.themeName === name &&
                <Icon name='check' style={{ position: 'absolute', bottom: 2, right: 3 }} color={'white'} size={17} />
            }
        </View>
    )
}

export default ThemeButton