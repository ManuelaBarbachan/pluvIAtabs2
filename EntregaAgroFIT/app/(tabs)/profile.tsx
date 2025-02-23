import { StyleSheet, Image, Platform } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";


/**
 * Esta tab funcionaría como el perfil del usuario, en este caso se puede modificar el nombre que se muestra 
 * en pantalla al cambiar la variable userName.
 * Incluye una foto del usuario y un mensaje de bienvenida
 * @returns La pantalla del perfil
 */
export default function Profile() {
  let userName = "Manuela";
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#c2db26", dark: "#c2db26" }}
      headerImage={
        <IconSymbol
          size={310}
          color="#ffffff"
          name="person"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Perfil</ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedText>¡Bienvenid@ a tu perfil, {userName}!</ThemedText>
      </ThemedView>
      <Image
        style={styles.image}
        source={{
          uri: "https://pbs.twimg.com/profile_images/1354172926208126976/_OJuhxsN_200x200.jpg",
        }}
      ></Image>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#ffffff",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
});