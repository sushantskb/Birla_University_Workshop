import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl font-nunito p-2 rounded-xl text-white">
        📝Notes App
      </Text>
      <View className="mt-2 flex-col items-center gap-3">
        <Link
          href="/add-notes"
          className="bg-orange-500 p-2 rounded-xl text-white">
          Add Notes
        </Link>
        <Link
          href="/search/task"
          className="bg-orange-500 p-2 rounded-xl text-white">
          Search
        </Link>
        <Link
          href="/notes/1"
          className="bg-orange-500 p-2 rounded-xl text-white">
          Note
        </Link>
        <Link
          href="/edit-notes/1"
          className="bg-orange-500 p-2 rounded-xl text-white">
          Edit Notes
        </Link>
      </View>
    </View>
  );
}
