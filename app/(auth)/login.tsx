import AuthInput from "@/components/auth/AuthInput";
import Button from "@/components/ui/Button";
import { LoginFormValues } from "@/types";
import { loginSchema } from "@/validation/authSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "expo-router";
import React from "react";
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

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
    mode: "onTouched",
  });

  const onSubmit = (values: LoginFormValues) => {
    console.log("Login credentials:", values);
  };

  return (
    <SafeAreaView className="flex-1 bg-gradient-to-b from-blue-50 to-white">
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
            paddingTop: 60,
            paddingBottom: 40,
          }}
        >
          {/* Header Section */}
          <View className="mb-12">
            <View className="w-16 h-16 bg-blue-500 rounded-2xl items-center justify-center mb-6">
              <Text className="text-white text-3xl font-bold">DT</Text>
            </View>
            <Text className="font-quicksand-bold text-5xl text-gray-900 mb-3">
              Welcome Back
            </Text>
            <Text className="text-gray-500 text-lg font-quicksand-regular">
              Sign in to continue your journey
            </Text>
          </View>

          {/* Form Section */}
          <View className="space-y-5 mb-6">
            <Controller
              control={control}
              name="identifier"
              rules={{
                required: "Email or mobile is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email",
                },
              }}
              render={({ field: { onChange, onBlur, value }, fieldState }) => (
                <AuthInput
                  label="Email or Mobile"
                  placeholder="Enter your email or mobile"
                  onChangeText={onChange}
                  value={value}
                  onBlur={onBlur}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  error={fieldState.error?.message}
                />
              )}
            />

            <Controller
              name="password"
              control={control}
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
                  placeholder="Enter your password"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  autoCapitalize="none"
                  secureTextEntry={true}
                  error={fieldState.error?.message}
                />
              )}
            />

            {/* Forgot Password */}
            <TouchableOpacity className="self-end">
              <Text className="text-blue-500 font-quicksand-semibold text-sm">
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>

          {/* Button */}
          <View className="mb-8">
            <Button
              title={isSubmitting ? "Signing in..." : "Sign In"}
              loading={isSubmitting}
              onPress={handleSubmit(onSubmit)}
            />
          </View>

          {/* Divider */}
          <View className="flex-row items-center mb-8">
            <View className="flex-1 h-px bg-gray-300" />
            <Text className="mx-4 text-gray-400 font-quicksand-medium">
              or continue with
            </Text>
            <View className="flex-1 h-px bg-gray-300" />
          </View>

          {/* Social Login Buttons */}
          <View className="flex-row gap-4 mb-8">
            <TouchableOpacity className="flex-1 h-14 border border-gray-300 rounded-xl items-center justify-center">
              <Text className="font-quicksand-semibold">Google</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 h-14 border border-gray-300 rounded-xl items-center justify-center">
              <Text className="font-quicksand-semibold">Apple</Text>
            </TouchableOpacity>
          </View>

          {/* Sign Up Link */}
          <View className="flex-row justify-center items-center">
            <Text className="text-gray-600 font-quicksand-regular">
              Don't have an account?{" "}
            </Text>
            <Link href="/(auth)/signup">
              <Text className="text-blue-500 font-quicksand-bold">Sign Up</Text>
            </Link>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
