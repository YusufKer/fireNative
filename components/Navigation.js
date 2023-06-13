import { useContext } from "react";
import { useNavigation } from "@react-navigation/native"
import { View, Button, StyleSheet } from "react-native"
import { AppContext } from "../context/AppContext";

export default function Navigation(){

    const { loggedIn, setLoggedIn } = useContext(AppContext);
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <Button title="Home" onPress={() => navigation.navigate("Home")}/>
            <Button title="About" onPress={() => navigation.navigate("About")}/>
            <Button title="Contact" onPress={() => navigation.navigate("Contact")}/>
            <Button title="Profile" onPress={() => navigation.navigate("Profile")}/>
            <Button title={loggedIn ? "sign out" : "sign in"} onPress={() => setLoggedIn(!loggedIn)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingTop: 32,
        backgroundColor: "yellow"
    }
})