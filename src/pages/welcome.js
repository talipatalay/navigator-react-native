import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaView,Text,View, StyleSheet } from "react-native";
import Button from "../components/Button";

const Welcome = (props) => {

    const goMemberSign = () => {
        props.navigation.navigate('MemberSignScreen')
    }

    return(
        <SafeAreaView style={styles.container}>
        <Text style={styles.header}> LÜKS ARTVİN </Text>
        <Button title='Üye Kaydı Oluştur'
        onPress={goMemberSign}/>
        </SafeAreaView>
    )
};

export default Welcome;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'grey'
    },
    header:{
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        margin: 10,
        color: 'black'
    }
})

