import { Feather } from "@expo/vector-icons";
import { signOut } from "firebase/auth";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from "../../services/firebaseConfig";

function CustomHeader({ navigation, options }) {

    function handleSignOut() {
        const user = auth.currentUser;

        if (!user) {
            console.log("⚠️ Nenhum usuário logado.");
            return;
        }

        signOut(auth)
            .then(() => {
                console.log("✅ Usuário deslogado com sucesso!");
                navigation.navigate("SignIn");
            })
            .catch((error) => {
                console.log("❌ Erro ao sair:", error.message);
            });
    }

    return (
        <SafeAreaView style={styles.header}>
            {/* Título à esquerda */}
            <Text style={styles.title}>{options.title}</Text>

            {/* Ícones à direita */}
            <View style={styles.actions}>
                <TouchableOpacity onPress={() => alert("Pesquisar...")}>
                    <Feather name="search" size={22} color="#fff" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSignOut}>
                    <Feather name="log-out" size={22} color="red" style={styles.icon} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#2C6BED",
        padding: 16,
        paddingTop: 40, // espaço p/ status bar
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        overflow: "hidden",
    },
    title: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    actions: {
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        marginRight: 15,
    },
});

export default CustomHeader;
