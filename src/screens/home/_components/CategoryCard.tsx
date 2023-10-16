import { Text, View, Image, Pressable } from "react-native"
import styles from "../styles"
import usedTheme from "../../../hook/usedTheme"
import imgTest from '../../../assets/carbonala.jpg'


type CategoryCardProps = {
    id: string
    categoryText: string
    image?: string
    onPress: (categoryId: string, categoryTitle: string) => void
}

const CategoryCard = ({ categoryText, image, id, onPress }: CategoryCardProps) => {
    const colors = usedTheme()
    return (
        <Pressable style={[styles.categoryCard, colors.bgCard]} onPress={() => onPress(id, categoryText)}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image src={image} source={imgTest} height={1} width={1} style={styles.categoryImage} />
            </View>
            <Text style={{ textAlign: 'center' }}>{categoryText}</Text>
        </Pressable>
    )
}

export default CategoryCard