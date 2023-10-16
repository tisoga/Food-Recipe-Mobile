import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingHorizontal: 10,
    },
    headerContainer: {
        flexDirection: 'row',
        height: 75
    },
    headerLeftContainer: {
        flex: 2
    },
    headerRightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 10
    },
    headerText: {
        color: '#7da40a',
        fontSize: 40,
        fontWeight: 'bold'
    },
    headerNormalText: {
        fontSize: 18
    },
    searchContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: 'rgba(128, 128, 128, 0.2)',
        borderColor: 'transparent',
        paddingLeft: 5
    },
    popularRecipeContainer: {
        marginTop: 10
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textTitle: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    textSecondary: {
        fontSize: 18,
        opacity: 0.7
    },
    popularCard: {
        justifyContent: 'flex-end',
        padding: 10,
        marginVertical: 10,
        marginRight: 10,
        borderWidth: 1,
        height: 250,
        width: 180
    },
    popularCardInfomration: {
        height: 80,
        backgroundColor: 'gray',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        justifyContent: 'space-evenly',
    },
    categoryContainer: {
        marginTop: 10
    },
    categoryCard: {
        marginTop: 10,
        marginRight: 12,
        paddingHorizontal: 10,
        paddingBottom: 10,
        borderRadius: 20,
        width: 120,
        height: 120,
    },
    recipeContainer: {
        marginTop: 10,
    },
    recipeCardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    recipeCard: {
        marginTop: 10,
        // height: 210,
        borderRadius: 20,
        paddingHorizontal: 10,
    },
    textRecipeName: {
        fontSize: 20,
        textAlign: 'center'
    },
    textRecipeCategory: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    categoryImage: {
        width: 70,
        height: 70,
        resizeMode: 'stretch'
    },
    recipeImage: {
        width: '80%',
        height: '80%',
        resizeMode: 'stretch'
    }
})

export default styles