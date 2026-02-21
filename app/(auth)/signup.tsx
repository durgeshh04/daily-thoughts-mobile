import AuthInput from "@/components/auth/AuthInput";
import Button from "@/components/ui/Button";
import { SignupFormValues } from "@/types";
import { signupSchema } from "@/validation/authSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Signup = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignupFormValues>({
    resolver: yupResolver(signupSchema),
    defaultValues: {
      identifier: "",
      username: "",
      fullname: "",
      password: "",
    },
    mode: "onTouched",
  });

  const onSubmit = (values: SignupFormValues) => {
    console.log("Signup data:", values);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: 24,
            paddingTop: 40,
            paddingBottom: 40,
          }}
        >
          {/* Header Section */}
          <View className="mb-10">
            <View className="w-16 h-16 bg-blue-500 rounded-2xl items-center justify-center mb-6">
              <Text className="text-white text-3xl font-bold">DT</Text>
            </View>
            <Text className="text-4xl font-quicksand-bold text-gray-900 mb-2">
              Create Account
            </Text>
            <Text className="text-gray-500 text-base font-quicksand-regular">
              Join us and start your journey today
            </Text>
          </View>

          {/* Form Section */}
          <View className="space-y-4 mb-6">
            <Controller
              control={control}
              name="fullname"
              rules={{ required: "Full name is required" }}
              render={({ field: { onChange, onBlur, value }, fieldState }) => (
                <AuthInput
                  label="Full Name"
                  placeholder="Enter your full name"
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
              name="username"
              rules={{
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 characters",
                },
                pattern: {
                  value: /^[a-zA-Z0-9_]+$/,
                  message:
                    "Username can only contain letters, numbers, and underscores",
                },
              }}
              render={({ field: { onChange, onBlur, value }, fieldState }) => (
                <AuthInput
                  label="Username"
                  placeholder="Choose a username"
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
              name="identifier"
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email",
                },
              }}
              render={({ field: { onChange, onBlur, value }, fieldState }) => (
                <AuthInput
                  label="Email"
                  placeholder="Enter your email"
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
              name="password"
              rules={{
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              }}
              render={({ field: { onChange, onBlur, value }, fieldState }) => (
                <AuthInput
                  label="Password"
                  placeholder="Create a strong password"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  secureTextEntry
                  autoCapitalize="none"
                  error={fieldState.error?.message}
                />
              )}
            />
          </View>

          {/* Terms and Conditions */}
          <View className="mb-6">
            <Text className="text-gray-500 text-sm font-quicksand-regular text-center">
              By signing up, you agree to our{" "}
              <Text className="text-blue-500 font-quicksand-semibold">
                Terms of Service
              </Text>{" "}
              and{" "}
              <Text className="text-blue-500 font-quicksand-semibold">
                Privacy Policy
              </Text>
            </Text>
          </View>

          {/* Button */}
          <View className="mb-8">
            <Button
              title={isSubmitting ? "Creating Account..." : "Create Account"}
              loading={isSubmitting}
              onPress={handleSubmit(onSubmit)}
            />
          </View>

          {/* Divider */}
          <View className="flex-row items-center mb-8">
            <View className="flex-1 h-px bg-gray-300" />
            <Text className="mx-4 text-gray-400 font-quicksand-medium">
              or sign up with
            </Text>
            <View className="flex-1 h-px bg-gray-300" />
          </View>

          {/* Social Signup Buttons */}
          <View className="flex-row gap-4 mb-8">
            <TouchableOpacity className="flex-1 h-14 border border-gray-300 rounded-xl items-center justify-center">
              <Text className="font-quicksand-semibold">Google</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 h-14 border border-gray-300 rounded-xl items-center justify-center">
              <Text className="font-quicksand-semibold">Apple</Text>
            </TouchableOpacity>
          </View>

          {/* Login Link */}
          <View className="flex-row justify-center items-center">
            <Text className="text-gray-600 font-quicksand-regular">
              Already have an account?{" "}
            </Text>
            <Link href="/(auth)/login">
              <Text className="text-blue-500 font-quicksand-bold">Sign In</Text>
            </Link>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Signup;
