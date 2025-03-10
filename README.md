# Setup NativeWind and Tailwind CSS

This commit integrates NativeWind and Tailwind CSS for styling the application, enabling utility-first CSS within React Native components.

## Changes

* **Dependency Installation:**
    * Installed `nativewind`, `tailwindcss@^3.4.17`, `react-native-reanimated@3.16.2`, and `react-native-safe-area-context` using `npx expo install`.
    * Initialized Tailwind CSS with `npx tailwindcss init`.
* **Tailwind Configuration:**
    * Created `tailwind.config.js` with the following configuration:

    ```javascript
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      // NOTE: Update this to include the paths to all of your component files.
      content: ["./app/**/*.{js,jsx,ts,tsx}"],
      presets: [require("nativewind/preset")],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

* **Global CSS:**
    * Created `global.css` with Tailwind's base, components, and utilities imports:

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

* **Babel Configuration:**
    * Updated `babel.config.js` to include NativeWind's Babel preset:

    ```javascript
    module.exports = function (api) {
      api.cache(true);
      return {
        presets: [
          ["babel-preset-expo", { jsxImportSource: "nativewind" }],
          "nativewind/babel",
        ],
      };
    };
    ```

* **Metro Configuration:**
    * Updated `metro.config.js` to integrate NativeWind's Metro plugin and specify the input CSS file:

    ```javascript
    const { getDefaultConfig } = require("expo/metro-config");
    const { withNativeWind } = require('nativewind/metro');

    const config = getDefaultConfig(__dirname)

    module.exports = withNativeWind(config, { input: './app/global.css' })
    ```

* **TypeScript Definition:**
    * Created `nativewind-env.d.ts` to provide TypeScript type definitions for NativeWind:

    ```typescript
    /// <reference types="nativewind/types" />
    ```

## Note
* ** Error: **
    * Compilation Error: import should be at the top of the stack.
    *Run: ``` npx expo start --clear ```

## Purpose

This commit sets up the styling infrastructure for the application, enabling the use of Tailwind CSS's utility classes within React Native components through NativeWind.

## Next Steps

* Begin styling components using Tailwind CSS utility classes.
* Refactor existing styles to utilize NativeWind.
* Create reusable component styles.
* Test and refine the styling across different devices and platforms.