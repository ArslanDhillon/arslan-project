import React, { useState } from "react";
import { View, Text, Dimensions, Image, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "./GlobalStyles";

const { height, width } = Dimensions.get('window');

const locationIcon = require('../assets/location.png');
const arrowBotton = require("../assets/arrow.png");
const wightIcon = require('../assets/vector.png');
const blackIcon = require('../assets/vector2.png');


const StateScreen = (props) => {

    const [slected ,setSlected]  = useState('')

    const states = [
        {
            id:1,
            Name: 'Alabama',
        },
        {
            id:2,
            Name: 'California',
        },
        {
            id:3,
            Name: 'Missouri',
        },
        {
            id:4,
            Name: 'Other',
        },

    ]


    return (
        <View>
            <SafeAreaView>
                <View style={globalStyles.container}>
                    <Text style={{ fontSize: 12 }}>
                        Application Details
                    </Text>

                    <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center' }}>

                        <View style={{ width: 2, height: 2, borderRadius: 2, backgroundColor: "#000" }}></View>

                        <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#000", marginRight: 9, marginLeft: 6 }}></View>

                        <View style={{
                            height: 35 / 852 * height,width: 35 /852 *height, borderRadius: 17.5, borderWidth: 1, alignSelf: "center", justifyContent: 'center'
                        }}>
                            <Image source={locationIcon}
                                style={{
                                    height: 20 / 852 * height, width: 20 / 852 * height,  alignSelf: 'center', justifyContent: 'center'
                                }}
                            />
                        </View>

                        <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#000", marginRight: 9, marginLeft: 6 }}></View>
                        <View style={{ width: 2, height: 2, borderRadius: 2, backgroundColor: "#000" }}></View>

                    </View>
                    <Text style={{ fontSize: 20, fontWeight: '800', marginTop: 10 }}>
                        In which state do you reside?
                    </Text>

                    <Text style={{ fontSize: 10, color: '#a7a7a7', margin: 10, marginBottom: 0 }}>
                        (Please ensure all information entered on your application
                    </Text>
                    <Text style={{ fontSize: 10, color: '#a7a7a7', }}>
                        is correct and up-to-date, America Finance will verify all
                    </Text>
                    <Text style={{ fontSize: 10, color: '#a7a7a7' }}>
                        information submitted.)
                    </Text>
                  
                        {
                            states.map((item) =>
                                <TouchableOpacity key={item.id} onPress={()=>setSlected(item.Name)}>
                                    <View style={styles.stateText}>
                                        <Text style={{ fontSize: 14, fontWeight: '400', }}>
                                            {item.Name}
                                        </Text>
                                        <View style = {{
                                                height: 34 / 852 * height, width: 34 / 853 * height,borderRadius:17,justifyContent:'center',
                                                backgroundColor:slected=== item.Name ? "#2468E8" :'#f2f2f2'
                                            }}>
                                            <Image source={slected === item.Name ? wightIcon : blackIcon}
                                                style={{ alignSelf:'center',height:21 /853 * height,width : 21 / 393 * width}}
                                            />
                                        </View>

                                    </View>
                                </TouchableOpacity>
                            )
                        }


                    <View style={{ flex: 1, alignItems: "center" }}>
                        <TouchableOpacity style={{ alignSelf: 'flex-end', marginTop: 20, marginEnd: 12 }} 
                            onPress ={() => props.navigation.navigate('WaitListScreen')}

                        >
                            <View style={globalStyles.arrowBotton}>
                                <Image source={arrowBotton}
                                />
                            </View>
                        </TouchableOpacity>

                        <Text style={{ fontSize: 12, color: '#a7a7a7', fontWeight: '500', height: 18, marginTop: 90 / 852 * height }}>
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
        </View>
    )
}

export default StateScreen;


const styles = StyleSheet.create({
    stateText: {

        padding: 15,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#f2f2f2',
        margin: 10,
        width: 355 / 393 * width,
        flexDirection: 'row',
        justifyContent: 'space-between',

    }

})