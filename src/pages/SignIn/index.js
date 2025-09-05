import { useState } from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export default function SignIn() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.logo}>ChatGroup</Text>
            <Text style={{ marginBottom: 20 }}>Ajude, colabore, faça networking</Text>

            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder='Qual seu nome?'
                placeholderTextColor={'#99999b'}
            />
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder='Seu email'
                placeholderTextColor={'#99999b'}
            />
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder='Sua senha'
                placeholderTextColor={'#99999b'}
            />

            <TouchableOpacity style={styles.buttonLogin}>
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Criar uma nova conta</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    logo: {
        marginTop: Platform.OS === 'android' ? 55 : 80,
        fontSize: 28,
        fontWeight: 'bold',


    },
    input: {
        color: "#121212",
        backgroundColor: "#ebebeb",
        width: '90%',
        borderRadius: 6,
        marginBottom: 10,
        paddingHorizontal: 8,
        height: 50,
    },
    buttonLogin: {
        width: '90%',
        backgroundColor: '#121212',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 6,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    }
});
