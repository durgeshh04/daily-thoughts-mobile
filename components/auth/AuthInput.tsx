import { AuthInputProps } from "@/types";
import React from "react";
import { Text, TextInput, View } from "react-native";

const AuthInput = ({ label, ...props }: AuthInputProps) => {
  return (
    <View className="mb-5">
      {label && <Text className="text-gray-500 mb-2 text-sm">{label}</Text>}
      <TextInput
        className="border border-gray-300 rounded-xl p-4 text-base"
        placeholderTextColor="#9ca3af"
        {...props}
      />
    </View>
  );
};

export default AuthInput;
