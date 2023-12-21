import React from "react";
import { View, Text, TextInput, Dimensions,TouchableOpacity ,Image} from "react-native";
import { globalStyles } from "./GlobalStyles";
import { SafeAreaView } from "react-native-safe-area-context";

const { height, width } = Dimensions.get('window')

const HouseDetails = () => {
    return (
        <SafeAreaView>
            <View style={globalStyles.container}>
                <Text style={{ fontSize: 10, fontWeight: '500' }}>
                    Between 2 - 3 years
                </Text>
                <TextInput placeholder="Address"
                    style={[globalStyles.inputStyle, { marginTop: 40 / 852 * height }]}
                />
                <TextInput placeholder="Zip Code"
                    style={globalStyles.inputStyle}
                    keyboardType="numeric"
                />
                <View style = {{flexDirection:'row',gap:25/393*width}}>
                    <TextInput placeholder="From"
                        keyboardType="numeric"
                        style={[globalStyles.inputStyle,{width:168/393*width}]}
                    />
                    <TextInput placeholder="To"
                        style={[globalStyles.inputStyle,{width:168/393*width}]}
                        keyboardType="numeric"
                    />
                </View>
                <TextInput placeholder="Landlord Name"
                    style={globalStyles.inputStyle}
                />
                <TextInput placeholder="Contact Number"
                    style={globalStyles.inputStyle}
                    keyboardType="numeric"
                />
                 <TouchableOpacity style={{ alignSelf: 'flex-end', marginEnd: 12 ,marginTop:30/852*height}} >
                    <View style={globalStyles.arrowBotton}>
                        <Image source={require('../assets/arrow.png')}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default HouseDetails;