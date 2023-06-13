import { View, Text } from "react-native";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

// COMPONENTS

export default function Profile({ navigation }){
    
    const { loggedIn } = useContext(AppContext)

    useEffect(()=>{
        if(loggedIn) return;
        navigation.navigate("Auth")
    },[loggedIn])
    
    return (
        <View>
            <Text>Profile</Text>
        </View>
    )
}