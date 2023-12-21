import React, { useState } from "react";
import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "./GlobalStyles";

const { height, width } = Dimensions.get('window');



const wightIcon = require('../assets/vector.png');
const blackIcon = require('../assets/vector2.png');

const HousingDurationScreen = () => {
    const [slected, setSlected] = useState('');
    const durations = [
        {
            id: 1,
            data: '1 Year or Less',

        },
        {
            id: 2,
            data: 'Between 1 and 2 Years',

        },
        {
            id: 3,
            data: 'Between 2 and 3 Years',

        },
        {
            id: 4,
            data: 'Between 3 and 5 Years',

        },
        {
            id: 5,
            data: '5+ Years',

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
                <Text style={{ fontSize: 12, fontWeight: '500', color: '#717171', marginBottom: 30 / 852 * height }}>
                    Length of time at this location?
                </Text>

                {
                    durations.map((item) =>
                        <TouchableOpacity key={item.id} onPress={() => {
                            setSlected(item.data)
                        }}>
                            <View style={{
                                height: 74 / 852 * height, width: 357 / 393 * width, borderRadius: 23, borderWidth: 1, borderColor: '#f2f2f2', padding: 15,
                                justifyContent: 'space-between', flexDirection: 'row',margin:5,
                                }}>
                                <Text>{item.data}</Text>
                                <View style={{
                                    height: 35 / 852 * height, width: 35 / 852 * height, borderRadius: 17, alignItems: 'center',
                                    justifyContent: 'center', backgroundColor: slected === item.data ? '#2468E8' : "#f2f2f2"
                                        }}>
                                    <Image source={slected === item.data ? wightIcon : blackIcon}
                                        style={{ height: 21 / 852 * height, width: 21 / 393 * width, }}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }
                
                <View style={{ width: width, alignItems: 'flex-end', marginRight: 20, marginTop: 20 / 852 * height }}>
                    <TouchableOpacity>
                        <View style={globalStyles.arrowBotton}>
                            <Image source={require('../assets/blueAddIcon.png')} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: "center" }}>

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
                
            </View>
        </SafeAreaView>
    )
}

export default HousingDurationScreen;