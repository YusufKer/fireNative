import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { View, Text, Button } from "react-native";

//COMPONENTS

export default function Home({ navigation }){

    const context = useContext(AppContext);

    return(
        <View>
            <Text>Home</Text>
            <Text>{context.test}</Text>
            <Button title="changes state" onPress={() => context.setTest("test")}/>
        </View>
    )
}