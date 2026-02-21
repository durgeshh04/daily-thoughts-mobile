import type { TextInputProps } from "react-native";

export type AuthInputProps = TextInputProps & {
  label?: string;
  error?: string;
};

export type {
  LoginFormValues,
  SignupFormValues
} from "@/validation/authSchemas";

