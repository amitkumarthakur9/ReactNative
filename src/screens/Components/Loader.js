import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

export default Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        animating={true}
        color={"rgba(33, 0, 93, 1)"}
        size={"large"}
      />
      <Text>Please Wait </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
