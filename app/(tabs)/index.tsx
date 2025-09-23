import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>📜 ScrollView Demo</Text>

      {Array.from({ length: 20 }).map((_, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardText}>Item {index + 1}</Text>
        </View>
      ))}

      <Text style={styles.footer}>✨ You reached the end!</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#4a90e2",
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  cardText: {
    color: "#fff",
    fontSize: 18,
  },
  footer: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 30,
    color: "gray",
  },
});
