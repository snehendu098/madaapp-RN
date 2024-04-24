import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { styles } from "../styles/styles";
import LinkCircleViews from "../components/LinkCircleViews";

const cardConstants = [
  { name: "Education", pc: "top-6 left-0", url: "https://www.google.com/" },
  { name: "Architecture", pc: "top-6 right-0", url: "https://www.google.com/" },
  {
    name: "Innovation",
    pc: "bottom-24 left-0",
    url: "https://www.google.com/",
  },
  { name: "Comms", pc: "bottom-24 right-0", url: "https://www.google.com/" },

  { name: "Business", pc: "top-[32%] left-0", url: "https://www.google.com/" },
  { name: "Brands", pc: "top-[32%] right-0", url: "https://www.google.com/" },
];

function HomeScreen() {
  const [params, setParams] = useState({
    textSearch: false,
    voiceSearch: false,
    visionSearch: false,
  });

  return (
    <View className="flex-1 bg-slate-100 py-10 px-4 relative flex items-center">
      <View className="flex flex-row items-center justify-center">
        <Text className="text-5xl font-bold">M</Text>
        <Text className="text-5xl font-bold">a</Text>
        <Text className="text-5xl font-bold">D</Text>
        <Text className="text-5xl font-bold">a</Text>
      </View>
      <StatusBar style="dark" />

      <View
        style={styles.shadow}
        className="flex flex-row space-x-2 items-center mt-6 bg-white w-full px-3 py-2 shadow-2xl rounded-full"
      >
        <Feather name="search" size={24} color="#8a8a8a" />
        <TouchableOpacity
          onPress={() => setParams({ ...params, textSearch: true })}
          className="w-[70%]"
        >
          <Text className="w-full text-lg text-gray-400">Search Something</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setParams({ ...params, voiceSearch: true })}
        >
          <FontAwesome5 name="microphone" size={24} color="#61abff" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setParams({ ...params, visionSearch: true })}
        >
          <FontAwesome5 name="camera" size={24} color="#115929" />
        </TouchableOpacity>
      </View>
      <View className="relative h-full w-full flex items-center justify-center">
        <View
          className="absolute top-40 w-[70vw] h-[70vw] rounded-full bg-white"
          style={styles.shadow}
        ></View>
        {cardConstants.map((item, index) => (
          <React.Fragment key={index}>
            <LinkCircleViews
              redirectUrl={item.url}
              positionClass={item.pc}
              showTxt={item.name}
            />
          </React.Fragment>
        ))}
      </View>
    </View>
  );
}

export default HomeScreen;
