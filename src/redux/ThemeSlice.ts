import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GreenTheme, GreenThemeDark } from '../themes/GreenTheme'
import { BlueTheme, BlueThemeDark } from '../themes/BlueTheme'
import { BrownTheme, BrownThemeDark } from '../themes/BrownTheme'
import { PurpleTheme, PurpleThemeDark } from '../themes/PurpleTheme'

const initialState: ThemeSelectorType = {
    themeName: 'green',
    colors: {
        light: GreenTheme,
        dark: GreenThemeDark
    }
}

const ThemeSlice = createSlice({
    name: 'Theme',
    initialState: initialState,
    reducers: {
        changeTheme: (state, action: PayloadAction<ThemeList>) => {
            if (action.payload === 'green') {
                return {
                    themeName: action.payload,
                    colors: {
                        light: GreenTheme,
                        dark: GreenThemeDark
                    }
                }
            }
            else if (action.payload === 'blue') {
                return {
                    themeName: action.payload,
                    colors: {
                        light: BlueTheme,
                        dark: BlueThemeDark
                    }
                }
            }
            else if (action.payload === 'brown') {
                return {
                    themeName: action.payload,
                    colors: {
                        light: BrownTheme,
                        dark: BrownThemeDark
                    }
                }
            }
            else {
                return {
                    themeName: action.payload,
                    colors: {
                        light: PurpleTheme,
                        dark: PurpleThemeDark
                    }
                }
            }
        }
    }
})

export const { changeTheme } = ThemeSlice.actions

export default ThemeSlice.reducer