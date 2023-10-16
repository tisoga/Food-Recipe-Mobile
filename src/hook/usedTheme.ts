import { useTheme } from '@react-navigation/native'

const usedTheme = () => {
    const theme = useTheme()
    
    const colors = {
        primary: {
            color: theme.colors.primary
        },
        text: {
            color: theme.colors.text
        },
        background: {
            backgroundColor: theme.colors.background
        },
        card: {
            color: theme.colors.card
        },
        bgCard: {
            backgroundColor: theme.colors.border
        },
        border: {
            borderColor: theme.colors.primary
        },
        button: {
            backgroundColor: theme.colors.primary
        }
    }

    return colors
}

export default usedTheme