import { AuthInputProps } from "@/types";
import React from "react";
import { Text, TextInput, View } from "react-native";

const AuthInput = ({ label, error, ...props }: AuthInputProps) => {
  return (
    <View className="mb-5">
      {label && (
        <Text className="font-quicksand-semibold text-gray-500 mb-2 text-sm">
          {label}
        </Text>
      )}
      <TextInput
        className={
          error
            ? "border border-red-500 rounded-xl p-4 text-base"
            : "border border-gray-300 rounded-xl p-4 text-base"
        }
        placeholderTextColor="#9ca3af"
        {...props}
      />
      {!!error && (
        <Text className="mt-2 text-sm text-red-600 font-quicksand-medium">
          {error}
        </Text>
      )}
    </View>
  );
};

export default AuthInput;
