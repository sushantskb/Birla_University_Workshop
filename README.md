# Commit: Setup Fonts and Assets

This commit integrates custom fonts and assets into the application, enhancing the visual design and user experience.

## Changes

* **`app.json` Configuration:**
    * Updated the `app.json` file to configure the app's icon, splash screen, and font loading.
    * Added configuration for Android adaptive icons and web favicon.
    * Configured the splash screen to display the app icon with a white background.
    * Registered custom fonts from the `assets/fonts` directory.

    ```json
    "icon": "./assets/images/icon.png",
    "android": {
        "adaptiveIcon": {
            "foregroundImage": "./assets/images/icon.png",
            "backgroundColor": "#ffffff"
        }
    },
    "web": {
        "bundler": "metro",
        "output": "static",
        "favicon": "./assets/images/icon.png"
    },
    "plugins": [
        "expo-router",
        [
            "expo-splash-screen",
            {
                "image": "./assets/images/icon.png",
                "imageWidth": 200,
                "resizeMode": "cover",
                "backgroundColor": "#ffffff",
                "enableFullScreenImage_legacy": true
            }
        ],
        [
            "expo-font",
            {
                "fonts": [
                    "./assets/fonts/Nunito-Black.ttf",
                    "./assets/fonts/Nunito-Bold.ttf",
                    "./assets/fonts/Nunito-ExtraBold.ttf",
                    "./assets/fonts/Nunito-Light.ttf",
                    "./assets/fonts/Nunito-Regular.ttf",
                    "./assets/fonts/Nunito-SemiBold.ttf"
                ]
            }
        ]
    ],
    ```

* **`_layout.tsx` Updates:**
    * Modified `_layout.tsx` to load custom fonts using `useFonts` from `expo-font`.
    * Implemented a `useEffect` hook to hide the splash screen when fonts are loaded.
    * Added null return if fonts are not loaded.
    * Added import of global.css.

    ```typescript
    import { SplashScreen, Stack } from "expo-router";
    import { useFonts } from "expo-font";
    import "./global.css";
    import { useEffect } from "react";
    export default function RootLayout() {
        const [fontsLoaded] = useFonts({
            "Nunito-Black": require("../assets/fonts/Nunito-Black.ttf"),
            "Nunito-Bold": require("../assets/fonts/Nunito-Bold.ttf"),
            "Nunito-ExtraBold": require("../assets/fonts/Nunito-ExtraBold.ttf"),
            "Nunito-Regular": require("../assets/fonts/Nunito-Regular.ttf"),
            "Nunito-SemiBold": require("../assets/fonts/Nunito-SemiBold.ttf"),
            "Nunito-Light": require("../assets/fonts/Nunito-Light.ttf"),
            "Nunito-ExtraLight": require("../assets/fonts/Nunito-ExtraLight.ttf"),
        });

        useEffect(() => {
            if (fontsLoaded) {
                SplashScreen.hideAsync();
            }
        }, [fontsLoaded]);

        if (!fontsLoaded) return null;
        return <Stack />;
    }
    ```

* **`tailwind.config.js` Updates:**
    * Extended the Tailwind CSS theme to include custom font families and colors.
    * Updated the content array to include components folder.

    ```javascript
    /** @type {import('tailwindcss').Config} */
    module.exports = {
        // NOTE: Update this to include the paths to all of your component files.
        content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
        presets: [require("nativewind/preset")],
        theme: {
            extend: {
                fontFamily: {
                    nunito: ["Nunito-Regular", "sans-serif"],
                    "nunito-bold": ["Nunito-Bold", "sans-serif"],
                    "nunito-extrabold": ["Nunito-ExtraBold", "sans-serif"],
                    "nunito-medium": ["Nunito-Medium", "sans-serif"],
                    "nunito-semibold": ["Nunito-semibold", "sans-serif"],
                    "nunito-light": ["Nunito-Light", "sans-serif"],
                },
                colors: {
                    "primary":"#252525",
                    "secondary": "#3B3B3B",
                    white: {
                        DEFAULT: "#FFFFF",
                        500: "#9A9A9A"
                    }
                }
            },
        },
        plugins: [],
    };
    ```

* **`image.d.ts` Creation:**
    * Created `image.d.ts` to provide TypeScript type definitions for imported PNG images.

    ```typescript
    declare module "*.png" {
        const value: any;
        export default value;
    }
    ```

* **Asset Integration:**
    * Added image assets from the provided Google Drive folder to the `assets/images` directory.
    * Added font assets from the provided google drive folder to the `assets/fonts` directory.
* **Constants integration:**
    * Added constant files from the provided google drive folder.

## Purpose

This commit enhances the application's visual presentation by integrating custom fonts and assets, ensuring a consistent and visually appealing user interface across different platforms.

## Next Steps

* Utilize the custom fonts and assets in the application's UI components.
* Refine the splash screen and app icon appearance.
* Begin to use the constants in the application.