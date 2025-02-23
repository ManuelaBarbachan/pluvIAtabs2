import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, Text, View } from "react-native";
import { useRouter } from "expo-router";  

export default function Login() {
  const router = useRouter(); 

  return (
    <View style={styles.container}>
      <Text>Email</Text>
      <TextInput style={styles.input} placeholder="Ingrese su email" keyboardType="email-address" />
      
      <Text>Contraseña</Text>
      <TextInput style={styles.input} placeholder="Ingrese su contraseña" secureTextEntry />
      
      <TouchableOpacity style={styles.button} onPress={() => router.push("(tabs)")}> 
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#2641db",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
