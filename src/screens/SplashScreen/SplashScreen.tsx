import { useEffect } from "react";
import { Image, StyleSheet } from "react-native";
import { View, Text, YStack, XStack } from "tamagui";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Splash">;

const SplashScreen = () => {
    const navigation = useNavigation<NavigationProps>();

    useEffect(() => {
        setTimeout(() => {
            navigation.replace("Main");
        }, 2000); // Navigasi setelah 2 detik
    }, []);

    return (
        <YStack
            flex={1}
            bg={"black"}
            justify="center"
            items="center"
        >
            <Image
                source={require("../../assets/images/moneyPeople.png")}
                style={{ width: 217, height: 246, resizeMode: "contain" }}
            />
            <Text
                fontSize={48}
                color="#83C5BE"
                mt={10}
                mb={0}
                style={styles.poppinsBold}
            >
                Flow Pocket
            </Text>
            <Text fontSize={18} mt={-8} color="white" style={styles.poppinsRegular}>
                Manage Money, Control Life
            </Text>
        </YStack>
    );
};

const styles = StyleSheet.create({
    poppinsRegular: {
        fontFamily: "Poppins-Regular"
    },
    poppinsBold: {
        fontFamily: "Poppins-Bold"
    },
})

export default SplashScreen;
