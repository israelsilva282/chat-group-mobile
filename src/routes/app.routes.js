import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatRoom from "../pages/ChatRoom";
import Messages from "../pages/Messages";
import Search from "../pages/Search";
import SignIn from "../pages/SignIn";

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <Stack.Navigator initialRouteName="ChatRoom">
            <Stack.Screen name="SignIn" component={SignIn} options={{
                title: 'Acesse agora',
            }} />
            <Stack.Screen name="ChatRoom" component={ChatRoom} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="Messages" component={Messages} />
        </Stack.Navigator>
    )
}