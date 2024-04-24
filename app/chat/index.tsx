import { View, Text, ScrollView, SafeAreaView, TextInput } from "react-native";
import React, { useState } from "react";
import { styles } from "../../src/styles/styles";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const ChatScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-slate-100 relative flex p-4">
      <ScrollView className="p-0">
        <UserMsg txt={"Hello"} />
        <UserMsg txt={"How are you doing today?"} />

        <BotMsg txt={"I am doing great. How about you?"} />
      </ScrollView>

      <View className="fixed">
        <View
          style={styles.shadow}
          className="flex flex-row space-x-2 items-center mt-6 bg-white w-full px-3 py-2 shadow-2xl rounded-full"
        >
          <Feather name="search" size={24} color="#8a8a8a" />
          <TextInput className="w-[70%]" placeholder="Search Something" />

          <FontAwesome5 name="microphone" size={24} color="#61abff" />

          <FontAwesome5 name="camera" size={24} color="#115929" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const UserMsg = ({ txt }: { txt: string }) => (
  <View className="flex flex-row-reverse w-full mb-1">
    <View className="bg-white rounded-l-xl p-4 max-w-2/3">
      <Text>{txt}</Text>
    </View>
  </View>
);

const BotMsg = ({ txt }: { txt: string }) => (
  <View className="flex flex-row w-full mb-1">
    <View className="bg-green-200 p-4 rounded-r-xl max-w-2/3">
      <Text>{txt}</Text>
    </View>
  </View>
);

export default ChatScreen;
