import { View, Text, ActivityIndicator } from 'react-native';
import styles from './styles';
import usedTheme from '../../hook/usedTheme';

const LoadingScreen = () => {
    const colors = usedTheme()
    return (
        <View style={[styles.mainContainer, colors.background]}>
            <ActivityIndicator size={60} />
            <Text style={[styles.textSecondary, colors.text]}>Loading ....</Text>
            <Text style={[styles.textPrimary, colors.text]}>Please Wait</Text>
        </View>
    )
}

export default LoadingScreen
