import ThemeType from '../themes/type'

const GreenTheme:ThemeType = {
    dark: false,
    colors: {
        background: '#fefbf1', //bg
        primary: '#7da40a', //primary
        text: '#221a02', //text
        card: '#9fb5f9', //secondary
        border: 'rgba(125, 164, 10, 0.4)',
        notification: '#390bc1' //accent
    }
}

const GreenThemeDark:ThemeType = {
    dark: true,
    colors: {
        background: '#221a02', //bg
        primary: '#7da40a', //primary
        text: '#fefbf1', //text
        card: '#000105', //secondary
        border: 'rgba(125, 164, 10, 0.5)',
        notification: '#906ef7' //accent
    }
}

export default GreenTheme