import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    textTitle: {
        fontSize: 27,
        fontWeight: 'bold'
    },
    textNormal: {
        fontSize: 20,
        opacity: 0.7,
        textTransform: 'capitalize'
    },
    searchHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:5,
        marginLeft: 5,
        marginRight: 10,
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    searchInputContainer: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: 'rgba(128, 128, 128, 0.2)',
        borderColor: 'transparent',
        paddingLeft: 5,
        marginBottom: 5
    },
    searchButton: {
        paddingHorizontal: 5,
        paddingVertical: 5
    },
    searchBodyContainer: {
        flexDirection: 'column',
        marginTop: 15,
        paddingHorizontal: 19
    },
    recentSearchContainer: {
        marginBottom: 20
    },
    recentItemContainer: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
    },
    popularSearchContainer: {
        flexDirection: 'column'
    },
    popularItemContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    tagContainer: {
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 3,
        marginHorizontal: 6,
        marginVertical: 5,
    }
})

export default styles