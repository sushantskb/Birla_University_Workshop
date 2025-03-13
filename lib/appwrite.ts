import { Client, Databases, ID, Query } from "react-native-appwrite";
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

export async function getNotesById({ id }: { id: string }) {
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
