import { StyleSheet, Text, View } from 'react-native';

export default function SignIn() {
    return (
        <View style={styles.container}>
            <Text>Tela Login</Text>
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
