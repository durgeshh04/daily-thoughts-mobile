import AuthInput from "@/components/auth/AuthInput";
import Button from "@/components/ui/Button";
import { useState } from "react";
import {
  Keyboard,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Signup = () => {
  const [form, setForm] = useState({
    username: "",
    identifier: "",
    fullname: "",
    password: "",
  });

  const updateField = (key: string, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <SafeAreaView className="flex-1 bg-white">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
          className="px-6"
        >
          {/* Header */}
          <View className="mb-10">
            <Text className="text-3xl font-bold">Create Account</Text>
            <Text className="text-gray-500 mt-2">Sign up to get started</Text>
          </View>

          {/* Inputs */}
          <AuthInput
            label="Email or Mobile"
            placeholder="Enter email or mobile"
            value={form.identifier}
            onChangeText={(text) => updateField("identifier", text)}
          />

          <AuthInput
            label="Username"
            placeholder="Enter username"
            value={form.username}
            onChangeText={(text) => updateField("username", text)}
          />

          <AuthInput
            label="Full Name"
            placeholder="Enter full name"
            value={form.fullname}
            onChangeText={(text) => updateField("fullname", text)}
          />

          <AuthInput
            label="Password"
            placeholder="Enter password"
            value={form.password}
            onChangeText={(text) => updateField("password", text)}
            secureTextEntry
          />

          {/* Button */}
          <View className="mt-4">
            <Button title="Sign Up" onPress={() => console.log(form)} />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Signup;
