# My Notes App

This is a simple yet powerful notes application built with React Native and Expo, utilizing Appwrite for backend services. It provides a clean and intuitive interface for managing your notes, complete with CRUD operations and search functionality.

## Features

* **Create (C):** Easily add new notes with titles and content.
* **Read (R):** View your notes with detailed content.
* **Update (U):** Edit existing notes to keep them up-to-date.
* **Delete (D):** Remove notes you no longer need.
* **Search:** Quickly find notes by searching for keywords in titles or content.
* **Appwrite Backend:** Leverages Appwrite for secure and scalable data storage and retrieval.
* **Custom UI Components:** Utilizes custom components for a consistent and user-friendly experience.
* **Responsive Design:** Adapts to various screen sizes for optimal viewing.

## Technologies Used

* **React Native & Expo:** For cross-platform mobile development.
* **Appwrite:** For backend services (database, authentication, etc.).
* **TypeScript:** For static typing and improved code quality.
* **NativeWind:** For Tailwind CSS in React Native.
* **React Native Paper (potentially, if you use it in TextEditor, or Modal) :** For UI components.
* **Custom Components:** For reusable UI elements.

## Project Structure
Markdown

# My Notes App

This is a simple yet powerful notes application built with React Native and Expo, utilizing Appwrite for backend services. It provides a clean and intuitive interface for managing your notes, complete with CRUD operations and search functionality.

## Features

* **Create (C):** Easily add new notes with titles and content.
* **Read (R):** View your notes with detailed content.
* **Update (U):** Edit existing notes to keep them up-to-date.
* **Delete (D):** Remove notes you no longer need.
* **Search:** Quickly find notes by searching for keywords in titles or content.
* **Appwrite Backend:** Leverages Appwrite for secure and scalable data storage and retrieval.
* **Custom UI Components:** Utilizes custom components for a consistent and user-friendly experience.
* **Responsive Design:** Adapts to various screen sizes for optimal viewing.

## Technologies Used

* **React Native & Expo:** For cross-platform mobile development.
* **Appwrite:** For backend services (database, authentication, etc.).
* **TypeScript:** For static typing and improved code quality.
* **NativeWind:** For Tailwind CSS in React Native.
* **React Native Paper (potentially, if you use it in TextEditor, or Modal) :** For UI components.
* **Custom Components:** For reusable UI elements.

## Project Structure

├── .gitignore
├── README.md
├── app.json
├── app
│   ├── _layout.tsx         # Root layout for navigation
│   ├── add-notes.tsx      # Component for adding new notes
│   ├── edit-notes
│   │   └── [id].tsx      # Component for editing existing notes
│   ├── global.css         # Global CSS styles
│   ├── index.tsx          # Main application entry point
│   ├── notes
│   │   └── [id].tsx      # Component for viewing a single note
│   └── search.tsx         # Component for searching notes
├── assets
│   ├── fonts             # Custom fonts
│   │   ├── Nunito-Black.ttf
│   │   ├── Nunito-Bold.ttf
│   │   ├── Nunito-ExtraBold.ttf
│   │   ├── Nunito-ExtraLight.ttf
│   │   ├── Nunito-Light.ttf
│   │   ├── Nunito-Regular.ttf
│   │   └── Nunito-SemiBold.ttf
│   ├── icons             # Application icons
│   │   ├── back.png
│   │   ├── eye.png
│   │   ├── info.png
│   │   ├── plus.png
│   │   ├── save.png
│   │   ├── search.png
│   │   └── trash.png
│   └── images            # Application images
│   │   ├── favicon.png
│   │   ├── icon.png
│   │   ├── not-found.png
│   │   └── splash-icon.png
├── babel.config.js
├── components
│   ├── Empty.tsx         # Component for displaying an empty state
│   ├── Modal.tsx         # Reusable modal component
│   ├── NotFound.tsx      # Component for displaying a "not found" message
│   └── TextEditor.tsx    # Component for text editing
├── constants
│   ├── data.ts           # Constant data
│   ├── icons.ts          # Icon constants
│   └── images.ts         # Image constants
├── image.d.ts
├── lib
│   ├── appwrite.ts       # Appwrite client initialization
│   └── useAppwrite.ts    # Custom hook for Appwrite integration
├── metro.config.js
├── nativewind-env.d.ts
├── package-lock.json
├── package.json
├── tailwind.config.js
└── tsconfig.json

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd <project_directory>
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Configure Appwrite:**

    * Create an Appwrite account and project.
    * Update the `lib/appwrite.ts` file with your Appwrite project and endpoint details.
    * Create a collection inside of Appwrite with the attributes needed for your notes.
4.  **Run the application:**

    ```bash
    npx expo start
    # or
    yarn expo start
    ```

5.  **Use Expo Go app or a simulator to run the app.**

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bug fixes, feature requests, or improvements.


## Author

Sushant Kumar Bishoi