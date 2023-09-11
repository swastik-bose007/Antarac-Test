import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function App() {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(false);

  const onChange = (event, selectedDate) => {
    if (setDate != undefined) {
      setOpen(false);
      setDate(selectedDate);
      setSelected(true)
    } else {
      setOpen(false);
    }
  };

  return (
    <View style={styles.container}>
      <Button title={selected ? date.toDateString(): "select a date" } onPress={() => setOpen(true)} />
      {open && (
        <DateTimePicker
          mode="date"
          display={Platform.OS === "android" ? "spinner" : "default"}
          value={date}
          onChange={onChange}
        />
      )}
      <StatusBar style="auto" />
    </View>
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
