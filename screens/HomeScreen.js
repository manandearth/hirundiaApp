import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  Button
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { MonoText } from "../components/StyledText";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.welcomeContainer}>
          <Image
            source={require("../assets/images/swallow.png")}
            style={styles.welcomeImage}
          />
        </View>

        <View style={styles.getStartedContainer}>
          <Notice />

          <Text style={styles.getStartedText}>Log in to start surveying</Text>

          <View
            style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
          ></View>
        </View>
        <Input placeholder="Username" />
        <Input placeholder="Password" />
        <Button title="Log in" color="#841584" />
        <View style={styles.helpContainer}>
          <TouchableOpacity
            onPress={handleMoreInformation}
            style={styles.helpLink}
          >
            <Text style={styles.helpLinkText}>
              More information on our website
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.helpContainer}>
          <TouchableOpacity onPress={handleWebAppLink} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>To use a browser instead</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/*      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>
          This is a tab bar. You can edit it in:
        </Text>
        <View
          style={[styles.codeHighlightContainer, styles.navigationFilename]}
        >
          <MonoText style={styles.codeHighlightText}>
            navigation/BottomTabNavigator.js
          </MonoText>
        </View>
      </View>
       */}
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null
};
const Input = props => {
  const { placeholder } = props;
  const [value, onChangeText] = React.useState("");

  return (
    <TextInput
      style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      placeholder={placeholder}
      value={value}
    />
  );
};
function Notice() {
  return (
    <Text style={styles.developmentModeText}>
      A surveying tool. Use the form to add nests to the database.
    </Text>
  );
}

function handleMoreInformation() {
  WebBrowser.openBrowserAsync("https://proyecto-convivir.org/");
}

function handleWebAppLink() {
  WebBrowser.openBrowserAsync("https://fast-anchorage-88647.herokuapp.com/");
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
