type CategoryDataType = {
    id: string
    name: string
    image?: string
}

type FoodDataSimpleType = {
    id: string
    dishName: string
    categories: CategoryDataType
    image: string
}

interface FoodDataType extends FoodDataSimpleType {
    origin: string
    isPopular: string
    tag: Array<string>
    searchCount: number
    createdAt: string
}

type IngredientsType = {
    ingredient: string
    qty: string
}

interface FoodDataDetailType extends FoodDataType {
    ingredients: Array<IngredientsType>
    instructions: Array<string>
}

type ThemeType = {
    dark: boolean;
    colors: {
        primary: string;
        background: string;
        card: string;
        text: string;
        border: string;
        notification: string;
    };
};

type ThemeList = 'green' | 'blue' | 'brown' | 'purple'

type ThemeSelectorType = {
    themeName: ThemeList
    colors: {
        light: ThemeType,
        dark: ThemeType
    }
}
