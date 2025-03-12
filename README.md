#  Setup Appwrite Integration

This commit integrates Appwrite into the project for backend data storage and retrieval.

<details>
<summary><strong>Changes</strong></summary>

* **Appwrite Setup:**
    * Created an Appwrite account and project.
    * Created a database and collection for notes, with appropriate attributes (title, content, color).
* **Environment Variables:**
    * Created an `.env` file to store Appwrite configuration variables:

    ```
    EXPO_PUBLIC_APPWRITE_PROJECT_ID=<your_appwrite_id>
    EXPO_PUBLIC_APPWRITE_ENDPOINT=[https://cloud.appwrite.io/v1](https://cloud.appwrite.io/v1)
    EXPO_PUBLIC_APPWRITE_DATABASEID=<your_database_id>
    EXPO_PUBLIC_APPWRITE_NOTES_COLLECTIONID=<your_collection_id>
    ```

* **Appwrite SDK Integration (`lib/appwrite.ts`):**
    * Installed the `react-native-appwrite` SDK.
    * Created `lib/appwrite.ts` to initialize the Appwrite client and define database functions.
    * Configured the Appwrite client using environment variables.
    * Implemented `getAllNotes` function to retrieve all notes from the database.
    * Implemented `getNotesById` function to retrieve a specific note by id.
    * Implemented `addNote` function to add a new note to the database.

    ```typescript
    import { Client, Databases, ID } from "react-native-appwrite";
    export const config = {
      platform: "com.skb.noteapp",
      endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
      projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
      databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASEID,
      notesCollectionId: process.env.EXPO_PUBLIC_APPWRITE_NOTES_COLLECTIONID,
    };

    export const client = new Client();

    client
      .setEndpoint(config.endpoint!)
      .setProject(config.projectId!)
      .setPlatform(config.platform!);

    const databases = new Databases(client);

    export async function getAllNotes() {
      try {
        const result = await databases.listDocuments(
          config.databaseId!,
          config.notesCollectionId!
        );

        return result.documents;
      } catch (error) {
        console.log(error);
      }
    }

    export async function getNotesById(id: string) {
      try {
        const note = await databases.getDocument(
          config.databaseId!,
          config.notesCollectionId!,
          id
        );
        return note;
      } catch (error) {}
    }

    export async function addNote(title: string, content: string, color: string) {
      try {
        await databases.createDocument(
          config.databaseId!,
          config.notesCollectionId!,
          ID.unique(),
          {
            title: title,
            content: content,
            color: color,
          }
        );
        return console.log("Notes Added");
      } catch (error) {
        console.log("Error in adding notes:", error);
      }
    }
    ```

</details>

<details>
<summary><strong>Purpose</strong></summary>

This commit establishes the backend infrastructure for the application, enabling persistent storage and retrieval of notes using Appwrite.
</details>

<details>
<summary><strong>Next Steps</strong></summary>

* Integrate the Appwrite functions into the application's UI components (Home, Add Notes, etc.).
* Implement error handling and loading states for Appwrite requests.
* Add functionality to update and delete notes.
* Secure Appwrite API keys and database access.
* Test Appwrite integration thoroughly.
* Implement Appwrite authentication.
</details>