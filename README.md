#  Implemented Remaining Appwrite Functions (Edit, Delete, Search)

This commit adds the remaining Appwrite functions for editing, deleting, and searching notes, completing the CRUD operations and search functionality.

<details>
<summary><strong>Changes</strong></summary>

* **Appwrite Functions (`lib/appwrite.ts`):**
    * Implemented `editNote` function to update an existing note in Appwrite.
    * Implemented `deleteNote` function to delete a note from Appwrite.
    * Implemented `searchNotes` function to search notes by title using Appwrite's search query.
    * Added error handling for each function.

    ```typescript
    // lib/appwrite.ts
    import { Client, Databases, ID, Query } from "react-native-appwrite";
    // ... (other imports and configurations)

    export async function editNote(
      noteId: string,
      title: string,
      content: string,
      color: string
    ) {
      try {
        await databases.updateDocument(
          config.databaseId!,
          config.notesCollectionId!,
          noteId,
          {
            title: title,
            content: content,
            color: color,
          }
        );
        console.log("Note Updated");
      } catch (error) {
        console.log("Error occured while updating the notes:", error);
      }
    }

    export async function deleteNote(noteId: string) {
      try {
        await databases.deleteDocument(
          config.databaseId!,
          config.notesCollectionId!,
          noteId
        );
        console.log("Note Deleted");
      } catch (error) {
        console.log("Error occured while deleting the notes:", error);
      }
    }

    export async function searchNotes(query: string) {
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
    ```

</details>

<details>
<summary><strong>Purpose</strong></summary>

This commit extends the application's backend functionality by adding the ability to edit, delete, and search notes, providing a complete set of data management operations.
</details>

<details>
<summary><strong>Next Steps</strong></summary>

* Integrate these new Appwrite functions into the UI components (Edit Notes screen, Home screen, Search screen).
* Update the Edit Notes screen to use the `editNote` function for saving changes.
* Update the Home screen to use the `deleteNote` function when deleting notes.
* Update the Search screen to use the `searchNotes` function and display search results.
* Add loading and error handling indicators in the UI for these operations.
* Test the functions thoroughly with various scenarios.
* Add better styling if needed.
</details>