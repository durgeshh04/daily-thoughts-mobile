import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import cn from "clsx";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

/**
 * Interface for the Custom Tab Bar Icon
 */
interface TabBarIconProps {
  title: string;
  focused: boolean;
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
}

/**
 * TabBarIcon Component
 * Fixed: Receives iconName and focused state to sync colors and rendering.
 */
const TabBarIcon = ({ title, focused, iconName }: TabBarIconProps) => (
  <View style={styles.iconWrapper}>
    <MaterialCommunityIcons
      name={iconName}
      size={24}
      color={focused ? "#FE8C00" : "#5D5F6D"}
    />
    <Text
      className={cn(
        "text-[10px] font-bold mt-1",
        focused ? "text-[#FE8C00]" : "text-[#5D5F6D]",
      )}
      style={{ color: focused ? "#FE8C00" : "#5D5F6D" }}
    >
      {title}
    </Text>
  </View>
);

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false, // Hide default labels to use custom TabBarIcon labels
        tabBarStyle: {
          backgroundColor: "#ffffff",
          height: 84,
          borderTopWidth: 1,
          borderTopColor: "#F3F4F6",
          paddingBottom: 20,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon title="Home" focused={focused} iconName="home-heart" />
          ),
        }}
      />

      <Tabs.Screen
        name="feed"
        options={{
          title: "Feed",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon title="Feed" focused={focused} iconName="rss" />
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  iconWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
});

export default TabsLayout;
