import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React, { useState } from "react";

const ChatScreen = ({
  txt,
  voice,
  vision,
}: {
  txt: boolean;
  voice: boolean;
  vision: boolean;
}) => {
  const [text, setText] = useState(txt);
  const [voiceSearch, setVoiceSearch] = useState(voice);
  const [visionSearch, setVisionSearch] = useState(vision);

  return (
    <SafeAreaView className="flex-1 fixed top-0 bottom-0 ">
      <ScrollView className="p-4">
        <UserMsg txt={"Hello"} />
        <UserMsg txt={"How are you doing today?"} />
        <BotMsg txt={"I am doing great. How about you?"} />
      </ScrollView>
    </SafeAreaView>
  );
};

const UserMsg = ({ txt }: { txt: string }) => (
  <View className="flex flex-row-reverse w-full">
    <View className="bg-white p-4 max-w-2/3">
      <Text>{txt}</Text>
    </View>
  </View>
);

const BotMsg = ({ txt }: { txt: string }) => (
  <View className="flex flex-row w-full">
    <View className="bg-green-200 p-4 max-w-2/3">
      <Text>{txt}</Text>
    </View>
  </View>
);

export default ChatScreen;
