import React from "react";
import { createNativeStackNavigator } from'@react-navigation/native-stack';
import TelaA from "../views/TelaA";
import TelaB from "../views/TelaB";
import TelaC from "../views/TelaC";

const Stack = createNativeStackNavigator()

export default props => (

    <Stack.Navigator initialRouteName="TelaA" screenOptions={{headerShown: false}}>
        <Stack.Screen name="TelaA" component={TelaA} />
        <Stack.Screen name="TelaB" component={TelaB} />
        <Stack.Screen name="TelaC" component={TelaC} />
    </Stack.Navigator>

)