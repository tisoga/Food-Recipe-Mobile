import { Text, Button, View, useColorScheme, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import usedTheme from '../../hook/usedTheme';
import styles from './styles';
import { ThemeButton } from './_components';
import { useState } from 'react';
import { GreenTheme, GreenThemeDark } from '../../themes/GreenTheme'
import { BlueTheme, BlueThemeDark } from '../../themes/BlueTheme'
import { BrownTheme, BrownThemeDark } from '../../themes/BrownTheme'
import { PurpleTheme, PurpleThemeDark } from '../../themes/PurpleTheme'
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../redux/ThemeSlice';

const ChangeTheme = () => {
    const dispatch = useDispatch()
    const colors = usedTheme()
    const colorScheme = useColorScheme()
    const [isModalVisible, setModal] = useState<boolean>(false)

    const onChangeModal = (val: 'open' | 'close') => {
        if (val === 'open') setModal(true)
        else setModal(false)
    }

    const onChangeTheme = (themeColor: ThemeList) => {
        dispatch(changeTheme(themeColor))
    }

    return (
        <>
            <Modal
                isVisible={isModalVisible}
                style={[colors.background, styles.modalContainer]}
                onBackButtonPress={() => onChangeModal('close')}
                onBackdropPress={() => onChangeModal('close')} >
                <View style={styles.modalItemsContainer}>
                    <Text style={[colors.text, styles.textTitleModal]}>Choose Your Theme</Text>
                    <View style={styles.btnThemeContainer}>
                        <ThemeButton name='green' color={colorScheme === 'light' ? GreenTheme.colors.primary : GreenThemeDark.colors.primary} onPress={onChangeTheme} />
                        <ThemeButton name='brown' color={colorScheme === 'light' ? BrownTheme.colors.primary : BrownThemeDark.colors.primary} onPress={onChangeTheme} />
                        <ThemeButton name='blue' color={colorScheme === 'light' ? BlueTheme.colors.primary : BlueThemeDark.colors.primary} onPress={onChangeTheme} />
                        <ThemeButton name='purple' color={colorScheme === 'light' ? PurpleTheme.colors.primary : PurpleThemeDark.colors.primary} onPress={onChangeTheme} />
                    </View>
                </View>
            </Modal>
            <Pressable style={[colors.bgCard, styles.changeBtnTheme]} onPress={() => onChangeModal('open')}>
                <Text style={[colors.text, { textAlign: 'center', fontSize: 22 }]}>Change Theme</Text>
            </Pressable>
        </>
    )
}

export default ChangeTheme