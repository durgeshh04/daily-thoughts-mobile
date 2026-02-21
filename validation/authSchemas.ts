import * as yup from "yup";

export const loginSchema = yup.object().shape({
  identifier: yup
    .string()
    .required("Email or Mobile is required")
    .test(
      "email-or-phone",
      "Please enter valid email or phone number",
      (value) => {
        if (!value) return false;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10,}$/;
        return emailRegex.test(value) || phoneRegex.test(value);
      },
    ),

  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be atleast 6 characters"),
});

export const signupSchema = yup.object().shape({
  identifier: yup
    .string()
    .required("Email or Mobile is required")
    .test(
      "email-or-phone",
      "Please enter valid email or phone number",
      (value) => {
        if (!value) return false;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10,}$/;
        return emailRegex.test(value) || phoneRegex.test(value);
      },
    ),

  username: yup
    .string()
    .required("Username is required")
    .min(4, "Username must be at least 4 characters")
    .matches(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores",
    ),

  fullname: yup
    .string()
    .required("Full name is required")
    .min(2, "Full name must be at least 2 characters"),

  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be atleast 6 characters"),
});

export type LoginFormValues = yup.InferType<typeof loginSchema>;
export type SignupFormValues = yup.InferType<typeof signupSchema>;
