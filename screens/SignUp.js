import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function SignUp(){

    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('')

    function handleSubmitForm(){
        let valid = true;
        if(!validateEmail(emailInput)){
            setEmailError("Please enter a valid email")
            valid = false;
        }
        if(!validPassword(passwordInput)){
            setPasswordError("Please enter a valid password")
            valid = false;
        }
        if(!valid) return;
        setPasswordInput('');
        setEmailInput('');
        console.log("You may submit...");
    }

    function validateEmail(email){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    function validPassword(password){
        if(password.length < 8) return false;
        else return true;
    }

    return(
        <View>
            <Text>Sign up</Text>
            <TextInput 
                placeholder="Enter your email address"
                onChangeText={newText => setEmailInput(newText)}
                value={emailInput}
                />
            {emailError ? <Text>{emailError}</Text> : null}
            <TextInput
                placeholder="Enter your password"
                onChangeText={newText => setPasswordInput(newText)}
                secureTextEntry={true}
                value={passwordInput}
            />
            {passwordError ? <Text>{passwordError}</Text> : null}
            <Button title="Submit" onPress={handleSubmitForm}/>
        </View>
    )
}