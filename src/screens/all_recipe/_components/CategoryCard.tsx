import { View, Image, Text, Dimensions, Pressable } from 'react-native';
import styles from '../styles';
import usedTheme from '../../../hook/usedTheme';
import img from '../../../assets/carbonala.jpg'

type CategoryCardProps = {
    id: string
    categoryText: string
    image?: string
    onPress: (categoryId: string, categoryTitle: string) => void
}

const CategoryCard = ({ id, categoryText, image, onPress }: CategoryCardProps) => {
    const colors = usedTheme()
    const windowDimensions = Dimensions.get('window')

    return (
        <Pressable style={[styles.categoryCard, colors.bgCard, { width: windowDimensions.width / 2 - 33 }]} onPress={() => onPress(id, categoryText)}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image src={image} source={img} height={1} width={1} style={styles.categoryImage} />
            </View>
            <Text style={{ textAlign: 'center' }}>{categoryText}</Text>
        </Pressable>
    )
}

export default CategoryCard