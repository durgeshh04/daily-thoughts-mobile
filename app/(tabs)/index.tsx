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
      <Text>Hello World!</Text>
    </SafeAreaView>
  );
}
