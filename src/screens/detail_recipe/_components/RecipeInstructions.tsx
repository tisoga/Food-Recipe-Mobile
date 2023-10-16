import { View, Text, Dimensions } from 'react-native';
import styles from '../styles';
import usedTheme from '../../../hook/usedTheme';

type RecipeInstructionsProps = {
    title: string
    data: any[]
}

const RecipeInstructions = ({ title, data }: RecipeInstructionsProps) => {
    const colors = usedTheme();
    const windowDimesion = Dimensions.get('window');

    return (
        <View style={styles.recipeContainer}>
            <Text style={[styles.textTitle, colors.primary]}>{title}</Text>
            <View style={{ flexDirection: 'column', width: windowDimesion.width - 30 }}>
                {data.map((item, index) => (
                    <Text key={index} style={[styles.textInstruction, colors.text]}>{`${index + 1}. ${item}`}</Text>
                ))}
            </View>
        </View>
    )
}

export default RecipeInstructions