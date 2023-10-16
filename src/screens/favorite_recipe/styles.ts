import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    headerContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        paddingHorizontal: 10,
    },
    backButton: {
        position: 'absolute',
        zIndex: 99999,
    },
    titleText: {
        fontSize: 30,
        textAlign: 'center'
    },
    secondText: {
        fontSize: 20,
        textAlign: 'center'
    },
    recipeContainer: {
        paddingHorizontal: 10,
        // paddingBottom: '10%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    emptyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default styles