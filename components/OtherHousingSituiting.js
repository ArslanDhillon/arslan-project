import React from "react";
import { View,Text, TextInput, Dimensions ,TouchableOpacity,Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "./GlobalStyles";

const {height,width} =Dimensions.get('window') ;

const OtherHousingSituition = () =>{
    return(
        <SafeAreaView>
            <View style = {globalStyles.container}>
                <Text style = {{fontSize:10,fontWeight:'500'}}>
                    Application Details
                </Text>
                <Text style = {{fontSize:14,fontWeight:'800',marginTop:10}}>
                    Please Specify Other
                </Text>

                <View style = {{height :199/852*height,width:360/393*width,backgroundColor:'#f2f2f2',borderRadius:13,marginTop:50/852*height}}>
                    <TextInput placeholder="Type here"
                        autoFocus={true}
                        multiline
                        maxLength={500}
                        numberOfLines={11}
                        textAlignVertical="top"
                        style = {{
                            fontSize:12,fontWeight:'500',padding:10
                        }}
                    />
                </View>

                  
                <View style={{ width: width, alignItems: 'flex-end', marginRight: 20, marginTop: 75 / 852 * height }}>
                    <TouchableOpacity>
                        <View style={globalStyles.arrowBotton}>
                            <Image source={require('../assets/arrow.png')} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default OtherHousingSituition;