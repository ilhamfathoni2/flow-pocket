import { Text, YStack } from "tamagui"
import { RootStackParamList } from "../../navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type NavigationProps = NativeStackNavigationProp<RootStackParamList, "CardSetting">;

const CardSetting = () => {
    return (
        <YStack flex={1} bg="black" justify="center" items="center">
            <Text fontSize={20} text="center" color="white">Card Setting</Text>
        </YStack>
    )
}

export default CardSetting;