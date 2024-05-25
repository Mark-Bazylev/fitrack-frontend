import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { Link, Stack } from "expo-router";
import { Colors } from "@/src/constants/Colors";
import {sleep} from "@/src/utils";
export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    async function onSignUp() {
        try {
            setLoading(true);
            await sleep(2000);
        } catch (e) {
            console.log("Failed to Sign Up");
        } finally {
            console.log("Account created!!");
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: "Sign Up" }} />

            <Text style={styles.label}>Email</Text>
            <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="john@gmail.com"
                style={styles.input}
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder=""
                style={styles.input}
                secureTextEntry
            />

            <Link href="/sign-in" style={styles.textButton}>
                Sign In
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", padding: 10 },
    label: {
        color: "gray",
        fontSize: 16,
    },
    input: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 20,
    },

    textButton: {
        alignSelf: "center",
        fontWeight: "bold",
        color: Colors.light.tint,
    },
});
