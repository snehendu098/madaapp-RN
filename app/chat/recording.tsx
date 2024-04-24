import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "../../src/styles/styles";
import { Entypo } from "@expo/vector-icons";
import { router } from "expo-router";

const App = () => {
  const [recording, setRecording] = useState(false);
  const [recordings, setRecordings] = useState([]);

  async function startRecording() {}

  async function stopRecording() {}

  function getDurationFormatted(milliseconds: any) {}
  function getRecordingLines() {}
  function clearRecordings() {}

  return (
    <View className="flex-1 bg-slate-100 flex items-center relative ">
      {/* <Text className="text-5xl font-bold">Recording</Text> */}
      <TouchableOpacity
        style={styles.shadow}
        onPress={() => router.back()}
        className="absolute p-1 rounded-lg top-5 right-5 bg-gray-800"
      >
        <Entypo name="cross" size={30} color="#eb3f45" />
      </TouchableOpacity>

      <View className="h-full flex items-center justify-center">
        <View
          style={styles.shadow}
          className="p-4 w-40 h-40 flex items-center justify-center rounded-full bg-gray-800"
        >
          <TouchableOpacity onPress={() => setRecording(!recording)}>
            <FontAwesome
              name={recording ? "stop" : "microphone"}
              size={recording ? 60 : 80}
              color={recording ? "#eb3f45" : "#215e20"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default App;
