import { View, Text, Modal, Image, TouchableOpacity } from "react-native";
import React from "react";
import icons from "@/constants/icons";
interface ModalProps {
  visible: boolean;
  onClose: () => void;
  onSave?: () => void;
  text: string;
}
export default function CustomModal({
  visible,
  onSave,
  onClose,
  text,
}: ModalProps) {
  return (
    <Modal transparent visible animationType="fade">
      <View className="flex-1 justify-center items-center bg-primary/50">
        <View className="bg-secondary rounded-lg p-5 w-80 items-center">
          <Image source={icons.info} className="size-10" tintColor={"white"} />
          <Text className="text-white font-nunito text-xl mt-2">{text}</Text>
          <View className="flex-row mt-4 gap-4">
            <TouchableOpacity
              className="bg-red-600 px-6 py-3 rounded-md"
              onPress={onClose}>
              <Text className="text-white font-nunito">Discard</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-green-600 px-6 py-3 rounded-md"
              onPress={onSave}>
              <Text className="text-white font-nunito">Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
