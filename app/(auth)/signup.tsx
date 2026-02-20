import AuthInput from "@/components/auth/AuthInput";
import Button from "@/components/ui/Button";
import { SignupFormValues } from "@/types";
import { Controller, useForm } from "react-hook-form";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Signup = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignupFormValues>({
    defaultValues: {
      identifier: "",
      username: "",
      fullname: "",
      password: "",
    },
    mode: "onTouched",
  });

  const onSubmit = (values: SignupFormValues) => {
    console.log("Submitting:", values);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <ScrollView
            style={{ flex: 1 }}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{
              flexGrow: 1,
              paddingHorizontal: 24,
              paddingVertical: 24,
              justifyContent: "center",
            }}
          >
            <View className="mb-10">
              <Text className="text-3xl font-quicksand-bold">
                Create Account
              </Text>
              <Text className="text-gray-500 mt-2 font-quicksand-medium">
                Sign up to get started
              </Text>
            </View>

            <Controller
              control={control}
              name="identifier"
              rules={{ required: "Email or mobile is required" }}
              render={({ field: { onChange, onBlur, value }, fieldState }) => (
                <AuthInput
                  label="Email or Mobile"
                  placeholder="Enter email or mobile"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  error={fieldState.error?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="username"
              rules={{
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 characters",
                },
              }}
              render={({ field: { onChange, onBlur, value }, fieldState }) => (
                <AuthInput
                  label="Username"
                  placeholder="Enter username"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  autoCapitalize="none"
                  error={fieldState.error?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="fullname"
              rules={{ required: "Full name is required" }}
              render={({ field: { onChange, onBlur, value }, fieldState }) => (
                <AuthInput
                  label="Full Name"
                  placeholder="Enter full name"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  autoCapitalize="words"
                  error={fieldState.error?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              rules={{
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              }}
              render={({ field: { onChange, onBlur, value }, fieldState }) => (
                <AuthInput
                  label="Password"
                  placeholder="Enter password"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  secureTextEntry
                  autoCapitalize="none"
                  error={fieldState.error?.message}
                />
              )}
            />

            <View className="mt-4">
              <Button
                title={isSubmitting ? "Signing Up..." : "Sign Up"}
                loading={isSubmitting}
                onPress={handleSubmit(onSubmit)}
              />
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Signup;
