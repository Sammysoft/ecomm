import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Dimensions } from "react-native";
import { WebView } from "react-native-webview";

const { height: windowHeight, width: windowWidth } = Dimensions.get("window")

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="dark" />
      <View style={{ height: windowHeight, width: windowWidth }}>
      <WebView
        style={{ height:"100%", width:"100%"}}
        source={{ uri: "https://gorgeous-sable-d76ccf.netlify.app" }}
      />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
