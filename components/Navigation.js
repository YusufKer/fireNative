import { useNavigation } from "@react-navigation/native"
import { View, Button, StyleSheet } from "react-native"

export default function Navigation(){

    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <Button title="Home" onPress={() => navigation.navigate("Home")}/>
            <Button title="About" onPress={() => navigation.navigate("About")}/>
            <Button title="Contact" onPress={() => navigation.navigate("Contact")}/>
            <Button title="Profile" onPress={() => navigation.navigate("Profile")}/>
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