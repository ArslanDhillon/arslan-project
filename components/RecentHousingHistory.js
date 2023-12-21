import React from "react";
import { View, Text, Dimensions, Image, TouchableOpacity, ScrollView } from "react-native";
import { globalStyles } from "./GlobalStyles";
import { SafeAreaView } from "react-native-safe-area-context";

const { height, width } = Dimensions.get('window');

const RecentHousingHistory = () => {

    const data = [
        {
            id: 1,
            address: 'abc',
            city: 'Lahore',
            state: "abc",
            zipCode: 123,
            year: "2020 - 2021",
            duration: "1yr 2mo",
        },
        {
            id: 2,
            address: 'def',
            city: 'Chichawatni',
            state: "def",
            zipCode: 456,
            year: "2021 - 2022",
            duration: "1yr 3mo",
        },
        {
            id: 3,
            address: 'abc',
            city: 'Multan',
            state: "gef",
            zipCode: 898,
            year: "2023 - 2025",
            duration: "2yr 5mo",
        },
    ]

    return (
        <SafeAreaView>
            <View style={globalStyles.container}>
                <Text style={{ fontSize: 10, fontWeight: '500' }}>
                    Application Details
                </Text>
                <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center' }}>

                    <View style={{ width: 2, height: 2, borderRadius: 2, backgroundColor: "#000" }}></View>

                    <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#000", marginRight: 9, marginLeft: 6 }}></View>

                    <View style={{
                        height: 35 / 852 * height, width: 35 / 852 * height, borderRadius: 17.5, borderWidth: 1, alignSelf: "center", justifyContent: 'center'
                    }}>
                        <Image source={require('../assets/home.png')}
                            style={{
                                height: 20 / 852 * height, width: 20 / 852 * height, alignSelf: 'center', justifyContent: 'center'
                            }}
                        />
                    </View>

                    <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#000", marginRight: 9, marginLeft: 6 }}></View>
                    <View style={{ width: 2, height: 2, borderRadius: 2, backgroundColor: "#000" }}></View>
                </View>
                <Text style={{ fontSize: 17, fontWeight: '700', marginTop: 10 }}>
                    Housing
                </Text>
                <Text style={{ fontSize: 10, fontWeight: '500', color: '#a7a7a7' }}>
                    Please submit at least 3 years of your most
                </Text>
                <Text style={{ fontSize: 10, fontWeight: '500', color: '#a7a7a7' }}>
                    recent Housing history
                </Text>

                {
                    data.map((item) =>
                        <View style={{
                            height: 108 / 852 * height, width: 350 / 393 * width, borderColor: '#f2f2f2', borderWidth: 1, borderRadius: 20,
                            flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 / 852 * height
                        }} key={item.id} >
                            <View style={{ padding: 7 }}>
                                <Text style={{ fontSize: 10, fontWeight: '500' }}>
                                    {item.address}
                                </Text>
                                <Text style={{ fontSize: 10, fontWeight: '500' }}>
                                    {item.city},{item.state}   |  {item.zipCode}
                                </Text>
                                <View style={{ flexDirection: 'row', marginTop: 3, gap: 3, alignItems: 'center' }}>
                                    <Text style={{ fontSize: 8, fontWeight: '500' }}>
                                        {item.year}
                                    </Text>
                                    <Text style={{ fontSize: 10, fontWeight: '500', color: '#a7a7a7' }}>
                                        ({item.duration})
                                    </Text>
                                </View>
                            </View>
                            <TouchableOpacity>
                                <Image source={require('../assets/moreIcon.png')}
                                    style={{ height: 34 / 852 * height, width: 34 / 393 * width, resizeMode: 'contain', margin: 10 }}
                                />
                            </TouchableOpacity>
                        </View>
                    )
                }

                <TouchableOpacity style={{ marginTop: 10 }}>
                    <View style={[globalStyles.arrowBotton, { backgroundColor: 'skyblue' }]}>
                        <Image source={require('../assets/blueAddIcon.png')}
                            style={{ height: 20 / 852 * height, width: 20 / 393 * width, }}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignSelf: 'flex-end', marginEnd: 12 }} >
                    <View style={globalStyles.arrowBotton}>
                        <Image source={require('../assets/arrow.png')}
                        />
                    </View>
                </TouchableOpacity>

                <Text style={{ fontSize: 12, color: '#a7a7a7', fontWeight: '500', height: 18, marginTop: 20 / 852 * height }}>
                    For more information and resources regarding
                </Text>

                <Text style={{ fontSize: 12, color: '#a7a7a7', fontWeight: '500', height: 18 }}>
                    PayDay loans, please visit
                </Text>

                <TouchableOpacity>
                    <Text style={{ fontSize: 12, fontWeight: '600', color: '#2468E8', height: 18 }}>
                        www.AmericaFinance.com
                    </Text>

                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )

}

export default RecentHousingHistory;