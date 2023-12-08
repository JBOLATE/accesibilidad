import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./Login";
import Registro from "./Registro";

const Tab = createBottomTabNavigator();

function TabGroup() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Login' component={Login} />
            <Tab.Screen name='Registro' component={Registro} />
        </Tab.Navigator>
    )
}

export default function Navigator() {
    return (
        <TabGroup />
    )
}; 