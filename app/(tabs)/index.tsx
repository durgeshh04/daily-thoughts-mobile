import { router } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const isAuthenticated = false;

  if (!isAuthenticated) {
    router.replace("/(auth)/login");
  }

  return (
    <SafeAreaView>
      <Text className="bg-blue-500 text-5xl text-center">Hello World!</Text>
    </SafeAreaView>
  );
}
