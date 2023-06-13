import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { View, Text, ScrollView } from "react-native";

//COMPONENTS

export default function Home({ navigation }){

    const context = useContext(AppContext);

    return(
        <View>
            <Text>Home</Text>
            <ScrollView>

            </ScrollView>
        </View>
    )
}