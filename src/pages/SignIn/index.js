import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { auth } from '../../services/firebaseConfig';

export default function SignIn() {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [type, setType] = useState(false); // false = login, true = cadastro

    function handleLogin() {
        if (type) {
            //Cadastro
            if (name === '' || email === '' || password === '') {
                alert('Preencha todos os campos!');
                return;
            }

            createUserWithEmailAndPassword(auth, email, password)
                .then((user) => {
                    console.log(user)
                    user.user.updateProfile({ displayName: name })
                        .then(() => { navigation.goBack(); });
                })
                .catch((error) => {
                    console.log(error)
                    if (error.code === 'auth/email-already-in-use') {
                        alert('Esse email já está em uso!');
                        return;
                    }
                    if (error.code === 'auth/invalid-email') {
                        alert('Email inválido!');
                        return;
                    }
                });
        } else {
            //login
            signInWithEmailAndPassword(auth, email, password)
                .then(() => {
                    navigation.goBack();
                })
                .catch((error) => {
                    if (error.code === 'auth/invalid-email') {
                        alert('Email inválido!');
                        return;
                    }
                })
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.logo}>ChatGroup</Text>
            <Text style={{ marginBottom: 20 }}>Ajude, colabore, faça networking</Text>


            {type && (
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder='Qual seu nome?'
                    placeholderTextColor={'#99999b'}
                />
            )}
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
                secureTextEntry={true}
            />

            <TouchableOpacity
                style={[styles.buttonLogin, { backgroundColor: type ? '#f53745' : '#57db86' }]}
                onPress={handleLogin}
            >
                <Text style={styles.buttonText}>{type ? 'Cadastrar' : 'Acessar'}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setType(!type)}>
                <Text>{type ? 'Já possuo uma conta' : 'Criar uma nova conta'}</Text>
            </TouchableOpacity>
        </SafeAreaView >
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
