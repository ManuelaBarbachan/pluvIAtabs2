import { Image, StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";

/**
 * home o inicio, con mensaje de bienvenida 
 * @returns pantalla home
 */
export default function Inicio() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#FFCC80", dark: "#FFCC80" }}
      headerImage={
        <IconSymbol
          size={280}
          color="#ffffff"
          name="house"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">¡Hola!🎉</ThemedText>
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText>Esta es la pantalla de inicio, selecciona un icono para explorar mas opciones</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#ffffff",
    bottom: -80,
    left: -30,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 10,
  },
});
