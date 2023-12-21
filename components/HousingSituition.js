import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "./GlobalStyles";
import { Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";

const { height, width } = Dimensions.get('window');


const wightIcon = require('../assets/vector.png');
const blackIcon = require('../assets/vector2.png');

const HousingSituition = () => {

    const [slected, setSlected] = useState('')

    const situitions = [
        {
            id: 1,
            data: "Live with family"
        },
        {
            id: 2,
            data: "Rent"
        },
        {
            id: 3,
            data: "Own"
        },
        {
            id: 4,
            data: "Other"
        },
    ]


    return (
        <SafeAreaView>
            <View style={globalStyles.container}>
                <Text style = {{fontSize:10,fontWeight:'500'}}>
                    Application Details
                </Text>
                <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center' }}>

                    <View style={{ width: 2, height: 2, borderRadius: 2, backgroundColor: "#000" }}></View>

                    <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#000", marginRight: 9, marginLeft: 6 }}></View>

                    <View style={{
                        height: 35 / 852 * height, width: 35 / 852 * height, borderRadius: 17.5, borderWidth: 1, alignSelf: "center", justifyContent: 'center'
                    }}>
                        <Image source={require('../assets/usertag.png')}
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
                <Text style={{ fontSize: 10, fontWeight: '500', marginTop: 5, color: '#a7a7a7', }}>
                    What best describes your housing
                </Text>
                <Text style={{ fontSize: 10, fontWeight: '500', color: '#a7a7a7', }}>
                    Usituation?
                </Text>
                {
                    situitions.map((item) =>
                        <TouchableOpacity key={item.id} onPress={() => setSlected(item.data)}>
                            <View style={{
                                padding: 15, borderWidth: 1, borderColor: '#f2f2f2', justifyContent: 'space-between', flexDirection: 'row',
                                width: 357 / 393 * width, borderRadius: 20, margin: 10
                            }}>
                                <Text>{item.data}</Text>
                                <View style={{
                                    height: 34 / 852 * height, width: 34 / 853 * height, borderRadius: 17, justifyContent: 'center',
                                    backgroundColor: slected === item.data ? "#2468E8" : '#f2f2f2'
                                   }}>
                                    <Image source={slected === item.data ? wightIcon : blackIcon}
                                        style={{
                                            height: 21 / 852 * height, width: 21 / 393 * width, alignSelf: 'center'
                                        }}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }

                <View style={{ width: width, alignItems: 'flex-end', marginRight: 20, marginTop: 20 / 852 * height }}>
                    <TouchableOpacity>
                        <View style={globalStyles.arrowBotton}>
                            <Image source={require('../assets/arrow.png')} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: "center" }}>

                    <Text style={{ fontSize: 12, color: '#a7a7a7', fontWeight: '500', height: 18, marginTop: 60 / 852 * height }}>
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

export default HousingSituition;  