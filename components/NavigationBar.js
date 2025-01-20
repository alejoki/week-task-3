import React from "react";
import { Appbar } from "react-native-paper";

export default function NavigationBar({ navigation, back }) {
  return (
    <Appbar.Header>
      {back ? (
        <Appbar.BackAction onPress={navigation.goBack} />
      ) : (
        <Appbar.Action
          icon="arrow-right"
          onPress={() => navigation.navigate("Second")}
        />
      )}
      <Appbar.Content title="MD Nav Demo" />
    </Appbar.Header>
  );
}
