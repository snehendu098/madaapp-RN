import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { styles } from "../../src/styles/styles";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import { launchCameraAsync } from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";

const ChatScreen = () => {
  const [done, setDone] = useState<boolean>(false);
  const [txt, setTxt] = useState<string>();
  const [uri, setUri] = useState<string>();

  const [msg, setMsg] = useState<any>();

  const pickImage = async () => {
    let result = await launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 4],
    });

    if (!result.canceled) {
      setUri(result.assets[0].uri);
    }
  };

  const handleSend = () => {
    // API CALL
    setDone(true);
    setMsg({ txt: txt, img: uri });
    setTxt("");
    setUri("");
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-100 relative flex p-4">
      <View className="fixed">
        <View
          style={styles.shadow}
          className="flex flex-row justify-between space-x-2 items-center mt-6 bg-white w-full px-3 py-2 shadow-2xl rounded-full"
        >
          <Feather name="search" size={24} color="#8a8a8a" />
          <TextInput
            value={txt}
            onChangeText={setTxt}
            className="w-[70%]"
            placeholder="Type Something"
          />

          {!txt && !uri && (
            <Link href={"/chat/recording"}>
              <FontAwesome5 name={"microphone"} size={24} color="#61abff" />
            </Link>
          )}

          <TouchableOpacity onPress={pickImage}>
            <FontAwesome5 name="camera" size={24} color="#115929" />
          </TouchableOpacity>

          {(txt || uri) && (
            <TouchableOpacity onPress={handleSend}>
              <MaterialIcons name="send" size={24} color="#61abff" />
            </TouchableOpacity>
          )}
        </View>
        {uri && (
          <View className="w-full mt-2 flex">
            <Image source={{ uri: uri }} height={70} width={70} />
          </View>
        )}
      </View>

      <ScrollView className="pt-4">
        {/* {msg && <UserMsg msg={msg} />} */}
        <BotMsg txt={"I am doing great. How about you?"} />
      </ScrollView>
    </SafeAreaView>
  );
};

const UserMsg = ({ msg }: any) => {
  console.log("txt", msg);

  return (
    <View className="flex flex-row-reverse w-full mb-1">
      <View className="bg-green-200 rounded-xl overflow-hidden max-w-2/3">
        {msg.img && (
          <Image source={{ uri: msg.img }} height={150} width={150} />
        )}
        {msg.txt && (
          <View className="p-4">
            <Text>{msg.txt}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const BotMsg = ({ txt }: { txt: string }) => (
  <View className="flex flex-row w-full mb-1">
    <View className="bg-gray-800 p-4 rounded-xl w-full">
      <Text className="text-white font-semibold">{txt}</Text>
    </View>
  </View>
);

export default ChatScreen;
