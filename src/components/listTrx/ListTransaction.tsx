import { Circle, Image, ScrollView, Square, Text, View, XStack, YStack } from "tamagui"
import fonts from "../ui/fonts";

const ListTransaction = () => {
    const listData = [
        {
            name: "Nasi Padang",
            date: "1 February 2025",
            category: "expense",
            amount: "40.000",
        },
        {
            name: "Bonus",
            date: "3 February 2025",
            category: "income",
            amount: "300.000",
        },
        {
            name: "Ayam",
            date: "4 February 2025",
            category: "expense",
            amount: "30.000",
        },
        {
            name: "Family Mart",
            date: "5 February 2025",
            category: "expense",
            amount: "30.000",
        },
        {
            name: "Piutang",
            date: "6 February 2025",
            category: "income",
            amount: "230.000",
        },
    ]

    return (
        <YStack px={16}>
            <Text my={16} fontSize={16} color="white" style={fonts.poppinsMedium}>Total Transaction</Text>

            <XStack justify="space-between" items="center">
                <View bg="#D55B5B" rounded={24} px={16} py={16} width={"48%"}>
                    <XStack justify="space-between">
                        <YStack>
                            <Text mb={16} fontSize={12} color="white" style={fonts.poppinsRegular}>Expense</Text>
                            <Text fontSize={14} color="white" style={fonts.poppinsSemiBold}>Rp100.000.000</Text>
                        </YStack>
                        <View px={10} height={25} bg="#B94B4B" rounded="$9" justify="center" items="center">
                            <Image source={{
                                uri: require("../../assets/images/iconDown.png"),
                                width: 10,
                                height: 10
                            }} objectFit="contain" />
                        </View>
                    </XStack>
                </View>
                <View bg="#389C7B" rounded={24} px={16} py={16} width={"48%"}>
                    <XStack justify="space-between">
                        <YStack>
                            <Text mb={16} fontSize={12} color="white" style={fonts.poppinsRegular}>Income</Text>
                            <Text fontSize={14} color="white" style={fonts.poppinsSemiBold}>Rp100.000.000</Text>
                        </YStack>
                        <View px={10} height={25} bg="#328C6E" rounded="$9" justify="center" items="center">
                            <Image source={{
                                uri: require("../../assets/images/iconUp.png"),
                                width: 10,
                                height: 10
                            }} objectFit="contain" />
                        </View>
                    </XStack>
                </View>
            </XStack>

            <Text my={16} fontSize={16} color="white" style={fonts.poppinsMedium}>Your Last Transaction</Text>

            <ScrollView mb={300} maxH={210}>
                {listData.map((item, index) => (
                    <XStack key={index} justify="space-between" items="center" bg="#262626" px={24} py={20} rounded={24} mb={12}>
                        <XStack width="40%" items="center" gap={16}>
                            <View bg="#202020" rounded={50} p={9}>
                                <Image source={{
                                    uri: item.category === "expense" ? require("../../assets/images/arrowDown.png") : require("../../assets/images/arrowUp.png"),
                                    width: 14,
                                    height: 14,
                                }} objectFit="contain" />
                            </View>
                            <YStack>
                                <Text fontSize={16} color="white" style={fonts.poppinsMedium}>{item.name}</Text>
                                <Text fontSize={12} color="#8E8E8E" style={fonts.poppinsRegular}>{item.date}</Text>
                            </YStack>
                        </XStack>
                        <Text fontSize={12} color={item.category === "expense" ? "#F57777" : "#69D7B3"} style={fonts.poppinsMedium}>{item.category === "expense" ? `-Rp${item.amount}` : `Rp${item.amount}`}</Text>
                    </XStack>
                ))}
            </ScrollView>
        </YStack>
    )
}

export default ListTransaction;