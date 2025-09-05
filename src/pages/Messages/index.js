import { StyleSheet, Text, View } from 'react-native';

export default function Messages() {
    return (
        <View style={styles.container}>
            <Text>Tela Mensagens</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
