#  Integrated Appwrite Data Fetching and CRUD Operations

This commit integrates Appwrite data fetching and CRUD (Create, Read, Update, Delete) operations into the application, enhancing data management capabilities.

<details>
<summary><strong>Changes</strong></summary>

* **`useAppwrite` Hook (`lib/useAppwrite.ts`):**
    * Created a custom hook `useAppwrite` to handle Appwrite data fetching.
    * This hook manages loading states, errors, and data retrieval.
    * It also provides a `refetch` function to manually trigger data fetching.
    * Added error handling and alert display.

    ```typescript
    import { Alert } from "react-native";
    import { useEffect, useState, useCallback } from "react";

    interface UseAppwriteOptions<T, P extends Record<string, string | number>> {
      fn: (params: P) => Promise<T>;
      params?: P;
      skip?: boolean;
    }

    interface UseAppwriteReturn<T, P> {
      data: T | null;
      loading: boolean;
      error: string | null;
      refetch: (newParams: P) => Promise<void>;
    }

    export const useAppwrite = <T, P extends Record<string, string | number>>({
      fn,
      params = {} as P,
      skip = false,
    }: UseAppwriteOptions<T, P>): UseAppwriteReturn<T, P> => {
      const [data, setData] = useState<T | null>(null);
      const [loading, setLoading] = useState(!skip);
      const [error, setError] = useState<string | null>(null);

      const fetchData = useCallback(
        async (fetchParams: P) => {
          setLoading(true);
          setError(null);

          try {
            const result = await fn(fetchParams);
            setData(result);
          } catch (err: unknown) {
            const errorMessage =
              err instanceof Error ? err.message : "An unknown error occurred";
            setError(errorMessage);
            Alert.alert("Error", errorMessage);
          } finally {
            setLoading(false);
          }
        },
        [fn]
      );

      useEffect(() => {
        if (!skip) {
          fetchData(params);
        }
      }, []);

      const refetch = async (newParams: P) => await fetchData(newParams);

      return { data, loading, error, refetch };
    };
    ```

* **`app.json` Updates:**
    * Added `package` property for android builds.

    ```json
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/icon.png",
        "backgroundColor": "#ffffff"
      },
      "package": "com.skb.noteapp"
    },
    ```

* **Home Screen Integration (`index.tsx`):**
    * Integrated `getAllNotes` function using the `useAppwrite` hook to fetch notes data.
    * Used `useEffect` to format and update the `notesList` state when `notesData` changes.
    * Displayed an `Empty` component when the `notesList` is empty.
    * Added navigation to edit note page.
    * Added navigation to the search page.

    ```typescript
    // index.tsx
    import Empty from "@/components/Empty";
    import icons from "@/constants/icons";
    import { getAllNotes } from "@/lib/appwrite";
    import { useAppwrite } from "@/lib/useAppwrite";
    import { router } from "expo-router";
    import { useEffect, useState } from "react";
    import { Image, Text, TouchableOpacity, View } from "react-native";
    import { GestureHandlerRootView } from "react-native-gesture-handler";
    import { SwipeListView } from "react-native-swipe-list-view";

    // ... (rest of the code)
    ```

* **Add Notes Screen Integration (`add-notes.tsx`):**
    * Integrated `addNote` function to save new notes to Appwrite.
    * Handled save operation inside the modal confirm.
    * Added error handling for the `addNote` function.

    ```typescript
    // add-notes.tsx
    import CustomModal from "@/components/Modal";
    import TextEditor from "@/components/TextEditor";
    import icons from "@/constants/icons";
    import { addNote } from "@/lib/appwrite";
    import { router } from "expo-router";
    import React, { useState } from "react";
    import {
      Image,
      KeyboardAvoidingView,
      Platform,
      TouchableOpacity,
      View,
    } from "react-native";

    // ... (rest of the code)
    ```

* **Edit Notes Screen Implementation (`edit-notes/[id].tsx`):**
    * Created a new screen for editing notes, using `useLocalSearchParams` to get the note ID.
    * Implemented basic structure and state management.
    * Added modal integration.

    ```typescript
    // edit-notes/[id].tsx
    import {
      View,
      Text,
      KeyboardAvoidingView,
      Platform,
      TouchableOpacity,
      Image,
    } from "react-native";
    import React, { useState } from "react";
    import { router, useLocalSearchParams } from "expo-router";
    import icons from "@/constants/icons";
    import TextEditor from "@/components/TextEditor";
    import CustomModal from "@/components/Modal";

    // ... (rest of the code)
    ```

</details>

<details>
<summary><strong>Purpose</strong></summary>

This commit enhances the application's functionality by integrating Appwrite data fetching and CRUD operations, enabling persistent data management and a more dynamic user experience.
</details>

<details>
<summary><strong>Next Steps</strong></summary>

* Implement update and delete note functionalities.
* Add loading and error handling indicators in the UI.
* Implement detailed note view.
* Implement search functionality using appwrite.
* Refine the UI/UX of the edit notes screen.
* Add more robust error handling.
* Add better styling.
</details>