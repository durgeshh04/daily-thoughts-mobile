export type AuthInputProps = {
  label?: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
};

export type LoginPayload = {
  identifier: string;
  password: string;
};

export type SignupPayload = {
  email?: string;
  mobile?: string;
  username: string;
  fullname: string;
  password: string;
};
