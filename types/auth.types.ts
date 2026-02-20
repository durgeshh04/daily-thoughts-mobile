import type { TextInputProps } from "react-native";

export type AuthInputProps = TextInputProps & {
  label?: string;
  error?: string;
};

export type LoginPayload = {
  identifier: string;
  password: string;
};

export type SignupFormValues = {
  identifier: string;
  username: string;
  fullname: string;
  password: string;
};
