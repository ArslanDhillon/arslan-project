import React  from "react";
import { View, Image, Text, Dimensions, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import { globalStyles } from "./GlobalStyles";

const { height, width } = Dimensions.get('window');


const callIcon = require('../assets/call.png');
const flagIcon = require('../assets/flag.png')
const arrowBotton = require('../assets/arrow.png');




const PhoneNumberScreen = (props) => {
    return (
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
                    <Image source={callIcon}
                        style={{
                            height: 19 / 852 * height, width: 19 / 393 * width, margin: 4, resizeMode: 'contain', alignSelf: 'center', justifyContent: 'center'
                        }}
                    />
                </View>

                <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#000", marginRight: 9, marginLeft: 6 }}></View>
                <View style={{ width: 2, height: 2, borderRadius: 2, backgroundColor: "#000" }}></View>


            </View>
            <Text style={{ fontSize: 20, fontWeight: '800', marginTop: 10 }}>
                    Phone Number
            </Text>
            <View style = {{marginTop:40 ,flexDirection:'row', margin:10,}}>
                <Image source={flagIcon}
                    style = {{height:33 / 853 * height,width:24 /393 *width,resizeMode:'contain',margin:5}}
                />
                <TouchableOpacity style= {{alignSelf:'center',marginRight:6}}>
                    <View style = {{flexDirection:'row'}}>
                        <Text style = {{fontWeight:'500'}}>(+1)</Text>
                        <Image  source={require('../assets/downArrow.png')}
                            style ={{height:24 /853 * height, width:24 /393 *width,margin:5,marginLeft:0, resizeMode:'contain'}}

                        />
                    </View>
                </TouchableOpacity>

                <TextInput placeholder="Phone Number"
                        style = {{
                            backgroundColor: '#f2f2f2', borderRadius: 10,padding: 8, width: 250 / 393 * width
                        }}
                        autoFocus = {true}
                        keyboardType="numeric"
                 />

            </View>

            <Text style = {[styles.bottomText,{marginTop:30}]}>
                By continuing, you agree to America 
            </Text>

            <View style = {{flexDirection:'row',}}>
                <Text style = {styles.bottomText}>
                    Finance’s 
                </Text>
                <TouchableOpacity>
                    <Text style = {[styles.bottomText,{color:'#2468E8',fontWeight:'500'}]}>
                         SMS Authorization
                    </Text>
                </TouchableOpacity>
                <Text style = {styles.bottomText}>
                     and 
                </Text>
                <TouchableOpacity>
                    <Text style = {[styles.bottomText,{color:'#2468E8',fontWeight:'500'}]}>
                         SMS Policy.
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: 30 / 852 * height ,width:width}}>
                    <TouchableOpacity style={{ margin: 20,alignItems:'flex-end' }} 
                        onPress={() => props.navigation.navigate('VerifyNumberScreen')}
                    >
                        <View style={globalStyles.arrowBotton}>
                            <Image source={arrowBotton}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
        </View>

    )
}

export default PhoneNumberScreen ;

const styles = StyleSheet.create({
    bottomText:{
        fontSize:12,
        fontWeight:'400',
    }
})