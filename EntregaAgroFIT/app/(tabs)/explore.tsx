import { StyleSheet, FlatList, View } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";

export default function ListaTab() {
  const categorias = [
    { id: 1, nombre: "Arroz" },
    { id: 2, nombre: "Soja" },
    { id: 3, nombre: "Maiz" },
    { id: 4, nombre: "Garbanzos" },
    { id: 5, nombre: "Quinoa" },
    { id: 6, nombre: "Avena" },
    { id: 7, nombre: "Trigo" },
  ];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#26db98", dark: "#26db98" }}
      headerImage={
        <IconSymbol
          size={310}
          color="#ffffff"
          name="grid"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Lista</ThemedText>
      </ThemedView>
      <ThemedText>Estas son las categorías</ThemedText>

      {/* para que no de conflicto */}
      <View style={styles.listaContainer}>
        <FlatList
          data={categorias}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ThemedText style={styles.categoria}>{item.nombre}</ThemedText>
          )}
        />
      </View>
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
    gap: 8,
  },
  listaContainer: {
    flex: 1, // par ael parrallelscrollview 
    width: "100%", 
  },
  categoria: {
    backgroundColor: "#98e8c3",
    margin: 5,
    borderRadius: 5,
    padding: 10,
    textAlign: "center",
  },
});
