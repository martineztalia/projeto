import { useRouter } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
export default function Detalhes() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botao} onPress={() => router.push("/")}>
        <Text>Voltar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>router.push("/")}>
        <Text>Ir para a tela inicial</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  titulo:{ 
},
  subtitulo:{

},
botao:{

}

});
