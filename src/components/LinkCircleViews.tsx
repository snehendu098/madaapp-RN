import { Text, TouchableOpacity, Linking } from "react-native";
import React from "react";
import { styles } from "../styles/styles";

const LinkCircleViews = ({
  positionClass,
  showTxt,
  redirectUrl,
}: {
  positionClass: string;
  showTxt: string;
  redirectUrl: string;
}) => {
  return (
    <TouchableOpacity
      onPress={() => Linking.openURL(redirectUrl)}
      style={styles.shadow}
      className={`absolute ${positionClass} rounded-full flex items-center justify-center h-[35vw] w-[35vw] bg-white`}
    >
      <Text className="text-xl font-bold">{showTxt}</Text>
    </TouchableOpacity>
  );
};

export default LinkCircleViews;
