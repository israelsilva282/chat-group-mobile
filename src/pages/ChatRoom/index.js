import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import FabButton from '../../components/FabButton';
import ModalNewRoom from '../../components/ModalNewRoom';

export default function ChatRoom() {
    const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <FabButton setVisible={() => setModalVisible(true)} />

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
