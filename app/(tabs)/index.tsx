import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Task from "../../components/Task.jsx";
const app = () => {
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>

        <View style={styles.items}> </View>

        {/* this is the task */}
        <Task text={"Task 1"} />
        <Task text={"Task 2"} />
      </View>
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
});
