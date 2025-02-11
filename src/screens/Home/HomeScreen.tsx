import React from "react";
import { Button, Image, Text, View, XStack, YStack } from "tamagui";
import CardSlider from "../../components/cards/CardSlider";
import fonts from "../../components/ui/fonts";
import ListTransaction from "../../components/listTrx/ListTransaction";


const HomeScreen = () => {
    return (
        <YStack flex={1} bg={"black"}>
            <XStack paddingInline={16} paddingBlock={16} justify={"space-between"} items={"center"}>
                <YStack>
                    <Text fontSize={24} color={"white"} style={fonts.poppinsMedium}>Flow Pocket</Text>
                    <Text fontSize={12} color={"white"} style={fonts.poppinsMedium}>Manage Money, Control Life</Text>
                </YStack>
                <Button paddingBlock={13} paddingInline={13} rounded={16} bg={"#3B3F3E"}>
                    <Image source={{
                        uri: require('../../assets/images/plus.png'),
                        width: 20,
                        height: 20
                    }}
                    />
                </Button>
            </XStack>

            <XStack justify={"center"} mt={16}>
                <CardSlider />
            </XStack>

            <ListTransaction />
        </YStack>
    )
}

export default HomeScreen