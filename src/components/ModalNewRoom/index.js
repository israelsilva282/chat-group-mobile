import { useEffect, useRef, useState } from 'react';
import {
    Animated,
    Easing,
    KeyboardAvoidingView,
    Modal,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from 'react-native';

export default function ModalNewRoom({ setVisible, visible }) {
    const [roomName, setRoomName] = useState('');

    // animação do fundo
    const fadeAnim = useRef(new Animated.Value(0)).current;
    // animação do conteúdo (slide up)
    const slideAnim = useRef(new Animated.Value(300)).current;

    useEffect(() => {
        if (visible) {
            // entra
            Animated.parallel([
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 250,
                    useNativeDriver: true,
                }),
                Animated.spring(slideAnim, {
                    toValue: 0,
                    bounciness: 0,
                    useNativeDriver: true,
                }),
            ]).start();
        } else {
            // sai
            Animated.parallel([
                Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: true,
                }),
                Animated.timing(slideAnim, {
                    toValue: 300,
                    duration: 200,
                    easing: Easing.ease,
                    useNativeDriver: true,
                }),
            ]).start();
        }
    }, [visible]);

    return (
        <Modal visible={visible} transparent animationType="none">
            <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
                {/* Fecha clicando fora */}
                <TouchableWithoutFeedback onPress={setVisible}>
                    <View style={styles.modal} />
                </TouchableWithoutFeedback>

                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                >
                    <Animated.View
                        style={[
                            styles.modalContent,
                            { transform: [{ translateY: slideAnim }] },
                        ]}
                    >
                        <Text style={styles.title}>Criar um novo grupo?</Text>

                        <TextInput
                            value={roomName}
                            onChangeText={setRoomName}
                            placeholder="Nome da sala"
                            style={styles.input}
                        />

                        <TouchableOpacity style={styles.buttonCreate}>
                            <Text style={styles.buttonText}>Criar sala</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.backButton} onPress={setVisible}>
                            <Text>Voltar</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </KeyboardAvoidingView>
            </Animated.View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(34,34,34,0.4)',
        justifyContent: 'flex-end', // conteúdo vem de baixo
    },
    modal: {
        ...StyleSheet.absoluteFillObject,
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        paddingBottom: 40,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        elevation: 8,
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
    },
    input: {
        borderRadius: 4,
        height: 45,
        backgroundColor: '#DDD',
        marginVertical: 15,
        fontSize: 16,
        paddingHorizontal: 10,
    },
    buttonCreate: {
        borderRadius: 6,
        backgroundColor: '#2C6BED',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    backButton: {
        marginTop: 10,
        alignItems: 'center',
    }
});
