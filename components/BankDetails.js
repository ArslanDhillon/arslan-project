import React, { useState } from "react";
import { View,Text,Image, Dimensions, TouchableOpacity, TextInput } from "react-native";
import { globalStyles } from "./GlobalStyles";
import { SafeAreaView } from "react-native-safe-area-context";

const {height,width} = Dimensions.get('window')

const selectedImage = require('../assets/slectedIcon.png');
const unSelectedImage = require('../assets/unslectedIcon.png');


const BankDetails = () =>{

    const [selectedIcon,setSelectedIcon] = useState(false)
    return(
        <SafeAreaView>
            <View style = {globalStyles.container}>
                <View style = {{flexDirection:'row',justifyContent:'space-between',width:width}}>
                    <Text style = {{fontSize:10,fontWeight:'500',marginLeft:130 / 393 * width,}}>
                        Add Bank Details
                    </Text>
                    <TouchableOpacity>
                    <Image  source={require('../assets/crossButton.png')}
                        style = {{height :30/852*height,width:30/393*width,marginRight:20}}
                    />
                    </TouchableOpacity>
                </View>

                <View style = {{marginTop:20}}>
                    <TextInput placeholder="Account number"
                        style = {globalStyles.inputStyle}
                    />
                    <TextInput placeholder="Confirm account number"
                        style = {globalStyles.inputStyle}
                    />
                    <TextInput placeholder="Bank name"
                        style = {globalStyles.inputStyle}
                    />
                    <TextInput placeholder="Routing number"
                        style = {globalStyles.inputStyle}
                    />
                </View>

                   <TouchableOpacity 
                        onPress={() =>setSelectedIcon(!selectedIcon)}
                   >
                        <View  style = {{flexDirection:'row',margin:20,gap:8,width:width,alignSelf:'center'}}>
                            <Image source={selectedIcon? selectedImage:unSelectedImage}
                                style = {{height:26/852*height,width:26/393*width,resizeMode:'contain',marginLeft:10}}
                            />
                            <Text style = {{fontSize:10,fontWeight:'500'}}>
                                Save as my prefered bank for withdrawals
                            </Text>    
                        </View>
                   </TouchableOpacity>

                   <TouchableOpacity style ={{marginTop:20}}>
                   <View style={globalStyles.arrowBotton}>
                            <Image source={require('../assets/tick.png')}
                                style= {{height:14/852*height,width:20/393*width,resizeMode:'contain'}}
                            />
                        </View>
                   </TouchableOpacity>
                  
            </View>
        </SafeAreaView>
    )
}

export default BankDetails ;