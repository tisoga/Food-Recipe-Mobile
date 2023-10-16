import { Text, View, ImageBackground, TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from "../styles"
import imgTest from '../../../assets/carbonala.jpg'
import { useSelector } from "react-redux"
import { RootState } from "../../../redux/store"


type PopularCardProps = {
    id: string
    img?: string
    foodName: string
    category: string
    onPress: () => void
}

const PopularCard = ({ id, img, foodName, category, onPress }: PopularCardProps): JSX.Element => {
    const favoriteFood = useSelector((state: RootState) => state.FavoriteFood)

    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
            <ImageBackground source={imgTest} src={img} style={styles.popularCard}>
                <View style={styles.popularCardInfomration}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', zIndex: 99999 }}>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>{foodName}</Text>
                        {favoriteFood.find(item => item.id === id)
                            ? <Icon name='heart' size={22} color={'red'} />
                            : <Icon name='heart' size={22} color={'black'} />
                        }
                    </View>
                    <Text style={{ color: 'white', fontSize: 15 }}>{category}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default PopularCard