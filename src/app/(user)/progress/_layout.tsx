import {Stack} from "expo-router";

export default function ProgressLayout() {
    return (
        <Stack>
            <Stack.Screen name='index' options={{title:'Progress'}}/>
        </Stack>
    );
}
