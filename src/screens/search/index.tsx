import {
    View,
} from 'react-native';
import SearchInput from './SearchInput';
import SearchBody from './SearchBody';
import styles from './styles';
import usedTheme from '../../hook/usedTheme';
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamsList } from '../../../App';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSearchHistory } from '../../redux/SearchHistorySlice';

type props = NativeStackScreenProps<RootStackParamsList, 'Search'>

const SearchScreen = ({ navigation }: props): JSX.Element => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const colors = usedTheme()

    const navigateToBack = () => {
        navigation.goBack()
    }

    const searchButton = (keyword: string) => {
        if (!keyword) return
        setValue(keyword)
        navigation.navigate('All_Recipe', {
            searchKeyword: keyword,
            type: 'Search'
        })
        dispatch(addSearchHistory(value))
    }

    const goToDetailSearch = (foodId: string) => {
        navigation.navigate('Detail', {
            foodId: foodId
        })
    }

    return (
        <View style={[styles.mainContainer, colors.background]}>
            <SearchInput navigateGoBack={navigateToBack} onHandlerSearch={searchButton} value={value} onChange={setValue} />
            <SearchBody onHandlerSearch={searchButton} onPressPopularSearch={goToDetailSearch} />
        </View>
    )
}

export default SearchScreen