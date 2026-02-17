import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

interface TabBarIconProps {
  title: string;
  focused: boolean;
  iconName: keyof typeof Ionicons.glyphMap;
}

const TabBarIcon = ({ focused, iconName }: TabBarIconProps) => (
  <View style={styles.iconWrapper}>
    <Ionicons
      name={iconName}
      size={30}
      color={focused ? "#FE8C00" : "#5D5F6D"}
    />
  </View>
);

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#ffffff",
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
          tabBarIcon: ({ focused }) => (
            <TabBarIcon title="Home" focused={focused} iconName="home" />
          ),
        }}
      />

      <Tabs.Screen
        name="DailyNews"
        options={{
          title: "Feed",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              title="Feed"
              focused={focused}
              iconName="newspaper-sharp"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              title="Profile"
              focused={focused}
              iconName="person-circle-sharp"
            />
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  iconWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TabsLayout;
