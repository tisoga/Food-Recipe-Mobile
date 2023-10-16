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
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    backButton: {
        position: 'absolute',
        zIndex: 99999,
    },
    backButton2: {
        position: 'absolute',
        zIndex: 99999,
        top: 10
    },
    titleText: {
        fontSize: 30,
        textAlign: 'center'
    },
    normalText: {
        fontSize: 20,
        textAlign: 'center'
    },
    recipeContainer: {
        paddingHorizontal: 10,
        paddingBottom: '10%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        width: 30,
        height: 30,
        marginHorizontal: 2,
    },
    buttonSelected: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        width: 30,
        height: 30,
        marginHorizontal: 2,
        backgroundColor: 'green',
    },
    textButton: {
        fontSize: 20,
    },
    textButtonSelected: {
        fontSize: 20,
        color: 'white'
    },
    categoryCard: {
        marginTop: 10,
        marginHorizontal: 10,
        paddingHorizontal: 20,
        paddingBottom: 10,
        borderRadius: 20,
        height: 120,
    },
    categoryImage: {
        width: 70,
        height: 70,
        resizeMode: 'stretch'
    },
})

export default styles