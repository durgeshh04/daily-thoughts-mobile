import { Link } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const login = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text className="text-3xl font-bold">Daily Thoughts</Text>
      <Text>
        <Link href={"/(auth)/signup"}>Signup</Link>
      </Text>
    </SafeAreaView>
  );
};

export default login;
