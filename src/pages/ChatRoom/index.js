import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ChatRoom() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Button title='Login' onPress={() => navigation.navigate('SignIn')} />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

});
