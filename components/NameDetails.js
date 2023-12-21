import React, { useState } from "react";
import { View, Image, Text, Dimensions, TouchableOpacity, TextInput,  } from 'react-native';
import { globalStyles } from "./GlobalStyles";
import { SafeAreaView } from "react-native-safe-area-context";

const { height, width } = Dimensions.get('window');
const accountIcon = require('../assets/accountIcon.png');
const arrowBotton = require('../assets/arrow.png');


const NameDetails = (props) => {
    return (
        <SafeAreaView>
      {/*  <ScrollView> */}
            <View style={globalStyles.container}>

                <Text style={{ fontSize: 12 }}>
                    Account Details
                </Text>

                <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center', }}>

                    <View style={{ width: 2, height: 2, borderRadius: 2, backgroundColor: "#000" }}></View>

                    <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#000", marginRight: 9, marginLeft: 6 }}></View>

                    <View style={{
                        height: 35 / 852 * height, borderRadius: 17.5, borderWidth: 1, alignSelf: "center"
                    }}>
                        <Image source={accountIcon}
                            style={{
                                height: 19 / 852 * height, width: 19 / 393 * width, margin: 4, resizeMode: 'contain', alignSelf: 'center', justifyContent: 'center'
                            }}
                        />
                    </View>

                    <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#000", marginRight: 9, marginLeft: 6 }}></View>
                    <View style={{ width: 2, height: 2, borderRadius: 2, backgroundColor: "#000" }}></View>


                </View>
                <Text style={{ fontSize: 20, fontWeight: '800', marginTop: 10 }}>
                    Name
                </Text>

                <View style={{ marginTop: 30 }}>
                    <TextInput placeholder="First name" style={globalStyles.inputStyle}
                        autoFocus={true}
                    />
                    <TextInput placeholder="Middle name (if applicable)" style={globalStyles.inputStyle} />
                    <TextInput placeholder="Last name" style={globalStyles.inputStyle} />
                </View>


                <View style={{ width: width, marginTop: 70 / 852 * height }}>
                    <TouchableOpacity style={{ alignSelf: 'flex-end', marginTop: 20, marginEnd: 12 }}
                        onPress={() => props.navigation.navigate('EmailDetails')}
                    >
                        <View style={globalStyles.arrowBotton}>
                            <Image source={arrowBotton}
                            />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: 'center', flexDirection: 'column', height: 100, marginTop: 100 / 852 * height }}>
                    <Text style={{ fontSize: 12, fontWeight: '500' }}>
                        By creating an account, you agree to the
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                        <TouchableOpacity>
                            <Text style={{ fontSize: 12, fontWeight: '500', color: '#2468E8' }}>
                                Terms & Conditions
                            </Text>
                        </TouchableOpacity>
                        <Text> and </Text>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 12, fontWeight: '500', color: '#2468E8' }}>
                                Privacy Policy
                            </Text>
                        </TouchableOpacity>

                    </View>
                    <Text style={{ fontSize: 12, fontWeight: '500' }}>
                        of America Finance
                    </Text>
                </View>
            </View>
      {/*   </ScrollView> */}
      </SafeAreaView>
    )

}

export default NameDetails;
