import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import FabButton from '../../components/FabButton';
import ModalNewRoom from '../../components/ModalNewRoom';
import { auth } from "../../services/firebaseConfig";

export default function ChatRoom() {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [user, setUser] = useState(null)

    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const user = auth.currentUser;
        setUser(user);

    }, [isFocused])

    return (
        <View style={styles.container}>
            <FabButton setVisible={() => setModalVisible(true)} userStatus={user} />

            <ModalNewRoom setVisible={() => setModalVisible(false)} visible={modalVisible} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

});
