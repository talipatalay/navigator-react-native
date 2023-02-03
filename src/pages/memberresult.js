
import React from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";


const result = ({ route }) => {

    const { user } = route.params

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.message}>Hoşgeldiniz!  </Text>
            <Text style={styles.label}>Adı: {user.userName} </Text>
            <Text style={styles.label}>Soyadı: {user.surName}  </Text>
            <Text style={styles.label}>Yaşı: {user.Age} </Text>
            <Text style={styles.label}>Mail: {user.Mail} </Text>

        </SafeAreaView>
    )
};

export default result;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        margin: 10,
        color: 'black'
    },
    message: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    label: {
        margin: 5,
        fontSize: 20,

    }

});

