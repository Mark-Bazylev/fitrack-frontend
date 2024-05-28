import { Colors, View } from "react-native-ui-lib";
import { MaterialIcons } from "@expo/vector-icons";

export default function ExerciseHiddenListItem() {
  return (
    <View
      flex
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View backgroundColor={Colors.blue30} center>
        <MaterialIcons name="edit" size={40} color="white" />
      </View>
      <View backgroundColor={Colors.red30} center>
        <MaterialIcons name="delete" size={40} color="white" />
      </View>
    </View>
  );
}
