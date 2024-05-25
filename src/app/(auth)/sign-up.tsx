import { useEffect, useState } from "react";
import { sleep } from "@/src/utils";
import { router, Stack } from "expo-router";
import {
  View,
  Text,
  TextField,
  Button,
  Colors,
  Carousel,
} from "react-native-ui-lib";
import { Image } from "expo-image";
import { StyleSheet, Keyboard } from "react-native";
import { carouselData } from "@/assets/data/carousel";
import Ionicons from "@expo/vector-icons/Ionicons";
import { DotIndicator } from "react-native-indicators";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [validName, setValidName] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [validEmail, setValidEmail] = useState(false);

  const [validPassword, setValidPassword] = useState(false);
  const [shownKeyboard, setShownKeyboard] = useState(false);
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", () => setShownKeyboard(true));
    Keyboard.addListener("keyboardDidHide", () => setShownKeyboard(false));
    return () => {
      Keyboard.removeAllListeners("keyboardDidShow");
      Keyboard.removeAllListeners("keyboardDidHide");
    };
  }, []);
  async function onCreateAccount() {
    try {
      setLoading(true);
      await sleep(2000);
    } catch (e) {
      console.log("Failed to create account");
    } finally {
      console.log("account created!!");
      setLoading(false);
    }
  }

  return (
    <View
      padding-10
      flex
      marginH-20
      style={{ justifyContent: shownKeyboard ? "flex-start" : "center" }}
    >
      <View padding-10 gap-10 style={styles.formContainer}>
        <View center>
          <Ionicons name="barbell-sharp" size={48} color="white" />
          <Text text30 blue60>
            Create Account
          </Text>
        </View>
        <TextField
          value={name}
          onChangeText={setName}
          text60
          enableErrors
          label={"Name:"}
          fieldStyle={styles.input}
          labelStyle={styles.label}
          validateOnBlur
          validate={["required"]}
          validationMessage={["name is required"]}
          validationMessageStyle={{ color: Colors.red30, fontSize: 16 }}
          onChangeValidity={(isValid) => setValidName(isValid)}
          maxLength={30}
        />
        <TextField
          value={email}
          onChangeText={setEmail}
          text60
          enableErrors
          label={"Email:"}
          placeholder={"john@gmail.com"}
          placeholderTextColor={"grey"}
          fieldStyle={styles.input}
          labelStyle={styles.label}
          validateOnBlur
          validate={["required", "email"]}
          validationMessage={["email is required", "Email is invalid"]}
          validationMessageStyle={{ color: Colors.red30, fontSize: 16 }}
          onChangeValidity={(isValid) => setValidEmail(isValid)}
          maxLength={30}
        />
        <TextField
          value={password}
          onChangeText={setPassword}
          text60
          enableErrors
          secureTextEntry={!showPassword}
          label={"Password:"}
          fieldStyle={styles.input}
          labelStyle={styles.label}
          validateOnBlur
          validate={["required", (value: string) => value.length > 5]}
          validationMessage={["password is required", "password is too short"]}
          validationMessageStyle={{ color: Colors.red30, fontSize: 16 }}
          onChangeValidity={(isValid) => setValidPassword(isValid)}
          maxLength={30}
          trailingAccessory={
            <MaterialCommunityIcons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="#aaa"
              onPress={() => setShowPassword(!showPassword)}
            />
          }
        />

        <Button
          size={Button.sizes.large}
          backgroundColor={Colors.blue30}
          disabled={!(validName && validEmail && validPassword)}
          onPress={() => onCreateAccount()}
        >
          {loading ? (
            <DotIndicator color={"white"} count={3} size={10} />
          ) : (
            <Text color={"white"}>Create account</Text>
          )}
        </Button>

        <Button
          label={"Already have an account? Sign In"}
          size={Button.sizes.large}
          outline
          outlineColor={"white"}
          onPress={() => router.navigate("/(auth)/sign-in")}
          color={Colors.white}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontWeight: "500",
    color: "rgba(240,240,240,0.6)",
    fontSize: 24,
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.8)",
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
  },

  formContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 30,
    justifyContent: "center",
  },
});
