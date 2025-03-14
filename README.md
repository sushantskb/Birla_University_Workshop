#  Integrated Search Functionality

This commit integrates the search functionality, allowing users to search notes by title.

<details>
<summary><strong>Changes</strong></summary>

* **Search Screen Implementation (`search.tsx`):**
    * Created a `Search` screen to handle note searching.
    * Used `useLocalSearchParams` to get the search query from the URL.
    * Implemented a `search` state variable to track the current search input.
    * Used `useDebouncedCallback` to debounce the search input, reducing the number of API calls.
    * Integrated the `searchNotes` function using the `useAppwrite` hook to fetch search results.
    * Used `useEffect` to trigger a refetch of search results when the `params.query` changes.
    * Rendered the search results using a `FlatList`.
    * Displayed a `NotFound` component when no search results are found and a query is present.
    * Added a `TextInput` for search input with debounced updates to URL parameters.
    * Implemented color styles for notes.

    ```typescript
    // search.tsx
    import NotFound from "@/components/NotFound";
    import { searchNotes } from "@/lib/appwrite";
    import { useAppwrite } from "@/lib/useAppwrite";
    import { router, useLocalSearchParams } from "expo-router";
    import React, { useEffect, useState } from "react";
    import {
      FlatList,
      Text,
      TextInput,
      TouchableOpacity,
      View,
    } from "react-native";
    import { useDebouncedCallback } from "use-debounce";

    export default function Search() {
      type ColorType = "red" | "green" | "yellow" | "blue" | "purple";
      const colorStyles: Record<ColorType, { backgroundColor: string }> = {
        red: { backgroundColor: "#fca5a5" },
        green: { backgroundColor: "#86efac" },
        yellow: { backgroundColor: "#fde047" },
        blue: { backgroundColor: "#93c5fd" },
        purple: { backgroundColor: "#d8b4fe" },
      };

      const params = useLocalSearchParams<{ query?: string }>();
      const [search, setSearch] = useState<string>(params.query || "");
      const debouncedSearch = useDebouncedCallback(
        (text: string) => router.setParams({ query: text }),
        500
      );
      const handleSearch = (text: string) => {
        setSearch(text);
        debouncedSearch(text);
      };

      const { data, refetch } = useAppwrite({
        fn: searchNotes,
        params: { query: params.query || "" },
        skip: !!params.query,
      });
      useEffect(() => {
        refetch({
          query: params.query || "",
        });
      }, [params.query]);

      return (
        <FlatList
          data={data}
          keyExtractor={(item) => item.$id}
          renderItem={({ item }) => (
            <View
              className={`p-4 my-2 rounded-lg`}
              style={colorStyles[item.color as ColorType]}>
              <TouchableOpacity>
                <Text className="text-lg font-nunito">{item.title}</Text>
              </TouchableOpacity>
            </View>
          )}
          contentContainerClassName="flex-1 bg-primary justify-center items-center px-4 "
          ListHeaderComponent={
            <View className="w-full">
              <View className="w-full flex-row items-center bg-secondary rounded-full px-4 py-2">
                <TextInput
                  className="flex-1 text-white text-xl font-nunito"
                  placeholder="Search by title..."
                  placeholderTextColor={"#a1a1a1"}
                  value={search}
                  onChangeText={handleSearch}
                />
              </View>
            </View>
          }
          ListEmptyComponent={
            params.query && data?.length === 0 ? <NotFound /> : null
          }
        />
      );
    }
    ```

* **Appwrite Function Fix (`lib/appwrite.ts`):**
    * Corrected the `searchNotes` function signature to accept an object with a `query` property.

    ```typescript
    // lib/appwrite.ts
    import { Client, Databases, ID, Query } from "react-native-appwrite";
    // ...

    export async function searchNotes({ query }: { query: string }) {
      try {
        const result = await databases.listDocuments(
          config.databaseId!,
          config.notesCollectionId!,
          [Query.search("title", query)]
        );
        return result.documents;
      } catch (error) {
        console.log("Error occured while searching notes:", error);
      }
    }

    // ... (rest of the code)
    ```

</details>

<details>
<summary><strong>Purpose</strong></summary>

This commit adds a search screen with a search bar and displays search results. It enables users to easily find notes by their titles.
</details>

<details>
<summary><strong>Next Steps</strong></summary>

* Add loading indicators during search.
* Implement better error handling for search.
* Enhance the UI/UX of the search screen.
* Add navigation to the selected note from the search result.
* Add better styling.
* Add search by content feature.
</details>