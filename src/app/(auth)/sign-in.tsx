import { useState } from "react";
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
import { StyleSheet } from "react-native";
import { carouselData } from "@/assets/data/carousel";
import Ionicons from "@expo/vector-icons/Ionicons";
import { DotIndicator } from "react-native-indicators";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  async function onSignIn() {
    try {
      setLoading(true);
      await sleep(2000);
    } catch (e) {
      console.log("Failed to Sign In");
    } finally {
      console.log("Signed In!!");
      setLoading(false);
    }
  }

  return (
    <>
      <View flex centerV marginH-20>
        <Stack.Screen options={{ title: "Sign In", headerShown: false }} />
        <View padding-10 gap-10 style={styles.card}>
          <View center>
            <Ionicons name="barbell-sharp" size={48} color="white" />
            <Text text30 blue60>
              Fitrack
            </Text>
          </View>

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
            validationMessage={[
              "password is required",
              "password is too short",
            ]}
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
            size={Button.sizes.medium}
            backgroundColor={Colors.blue30}
            disabled={!(validEmail && validPassword)}
            onPress={() => onSignIn()}
          >
            {loading ? (
              <DotIndicator color={"white"} count={3} size={10} />
            ) : (
              <Text color={"white"}>Sign In</Text>
            )}
          </Button>

          <Button
            label={"Create an account"}
            size={Button.sizes.medium}
            outline
            outlineColor={"white"}
            onPress={() => router.push("/(auth)/sign-up")}
            color={Colors.white}
          />
        </View>
      </View>
      <View style={styles.carouselContainer}>
        <Carousel
          onChangePage={() => console.log("page changed")}
          autoplay
          loop
          initialPage={1}
        >
          {carouselData.map((item) => (
            <View key={item.id}>
              <Image
                key={item.id}
                style={styles.image}
                contentFit={"cover"}
                source={item.imageUrl}
              />
            </View>
          ))}
        </Carousel>
      </View>
    </>
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
  carouselContainer: {
    position: "absolute",
    width: "100%",
    zIndex: -1,
  },
  card: {
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 30,
    justifyContent: "center",
  },
  image: {
    width: "100%",
    aspectRatio: 0.5,
  },
});
