import { StyleSheet, Text, View } from 'react-native';

export default function ChatRoom() {
    return (
        <View style={styles.container}>
            <Text>Tela ChatRoom</Text>
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
