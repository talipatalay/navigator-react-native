import React from "react";
import { Alert, SafeAreaView, View } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import result from "./memberresult";

const Membersign = ({ navigation }) => {
    const [userName, setuserName] = useState(null);
    const [surName, setsurName] = useState(null);
    const [Age, setAge] = useState(null);
    const [Mail, setMail] = useState(null);

    function handleSubmit() {
        if (!userName || !surName || !Age || !Mail) {
            Alert.alert('LÜKS ARTVİN', 'Bilgiler Boş Bırakılamaz');
            return;
        }
        const user = {
            userName,
            surName,
            Age,
            Mail
        }
        navigation.navigate("MemberResultScreen", { user })
    }
    return (
        <SafeAreaView>
            <View>
                <Input
                    label="Üye Adı"
                    placeholder="Üye İsmini Giriniz..."
                    onChangeText={setuserName}
                />
                <Input
                    label="Üye Soyadı"
                    placeholder="Üye Soyadı Giriniz..."
                    onChangeText={setsurName}
                />
                <Input
                    label="Üye Yaşı"
                    placeholder="Üye Yaşı Giriniz..."
                    onChangeText={setAge}
                />
                <Input
                    label="E-Posta"
                    placeholder="Üye E-Posta Giriniz..."
                    onChangeText={setMail}
                />
            </View>
            <Button title="Kaydı Tamamla" onPress={handleSubmit} />
        </SafeAreaView>
    )
};

export default Membersign;