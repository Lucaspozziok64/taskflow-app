import { View, Text, StyleSheet } from "react-native";

export const Bienvenida = () => {
  return (
    <View>
      <Text style={styles.title}>TaskFlow</Text>
      <Text style={styles.subtitle}>CheckPoint 1:Estructura Base</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffff",
    alignSelf: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#110d0d",
    alignSelf: "center",
    fontStyle: "italic",
    fontWeight: "bold",
  },
});
