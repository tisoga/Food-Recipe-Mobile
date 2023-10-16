import { StyleSheet } from 'react-native';



const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'red'
    },
    imageContainer: {
        backgroundColor: 'green',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    headerContainer: {
        position: 'absolute',
        top: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 10,
        marginTop: 10,
    },
    detailContainer: {
        flex: 1,
        backgroundColor: 'blue',
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    recipeContainer: {
        marginBottom: 10
    },
    foodInformationContainer: {
        backgroundColor: 'rgba(125, 164, 10, 0.8)',
        width: 250,
        height: 60,
        borderRadius: 20,
        marginBottom: 10,
    },
    headerButton: {
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        width: 35,
        height: 30
    },
    textFoodName: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    textSecondaryInfo: {
        marginTop: 3,
        fontSize: 15.5,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    textTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 12
    },
    textInstruction: {
        fontSize: 17.5,
        flexWrap: 'wrap',
        marginBottom: 5,
        textAlign: 'justify'
    },
    textIngredients: {
        fontSize: 16
    }
})

export default styles