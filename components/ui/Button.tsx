import cn from "clsx";
import React from "react";
import { ActivityIndicator, Pressable, Text } from "react-native";

type ButtonProps = {
  title?: string;
  onPress?: () => void;
  loading?: boolean;
  variant?: "primary" | "secondary";
};

const Button = ({
  title = "Continue",
  onPress,
  loading = false,
  variant = "primary",
}: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      className={cn(
        "rounded-xl p-4 items-center",
        variant === "primary" ? "bg-black" : "bg-gray-200",
      )}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text
          className={cn(
            "font-semibold",
            variant === "primary" ? "text-white" : "text-black",
          )}
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
};

export default Button;
