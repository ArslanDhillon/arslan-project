import React  from "react";
import { View, Image, Text, Dimensions, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import { globalStyles } from "./GlobalStyles";
import { SafeAreaView } from "react-native-safe-area-context";

const { height, width } = Dimensions.get('window');


const sheild = require('../assets/sheildIcon.png');
const faceIcon = require('../assets/face.png');



const FaceIdScreen = (props) => {
    return (
        <SafeAreaView>
        <View style={globalStyles.container}>

            <Text style={{ fontSize: 12 }}>
                Account Details
            </Text>

            <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center', }}>

                <View style={{ width: 2, height: 2, borderRadius: 2, backgroundColor: "#000" }}></View>

                <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#000", marginRight: 9, marginLeft: 6 }}></View>

                <View style={{
                    height: 35 / 852 * height,width:35 / 853 *height, borderRadius: 17.5, borderWidth: 1, alignSelf: "center",justifyContent:'center'
                 }}>
                    <Image source={sheild}
                        style={{
                            height: 19 / 852 * height, width: 19 / 393 * width,resizeMode: 'contain', alignSelf: 'center', justifyContent: 'center'
                        }}
                    />
                </View>

                <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#000", marginRight: 9, marginLeft: 6 }}></View>
                <View style={{ width: 2, height: 2, borderRadius: 2, backgroundColor: "#000" }}></View>


            </View>
            <Text style={{ fontSize: 20, fontWeight: '800', marginTop: 10 }}>
                    Secure with FaceID
            </Text>

            <Image  source={faceIcon}  
                style = {{ height : 104 / 853 * height,width:104 / 393 * width ,resizeMode:'contain',marginTop:60,}}
            />
            <TouchableOpacity style = {[globalStyles.capsuleButton,{marginTop:60}]}
                onPress={() =>props.navigation.navigate('PasswordScreen')}
            >
                <Text style = {{color:'#fff',fontSize:12,fontWeight:'500',}}>
                    Enable FaceID
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style = {{marginTop:30}}
                onPress={() =>props.navigation.navigate('PasswordScreen')}

            >
                <Text style ={{fontSize:15,fontWeight:'500',}}>
                    Skip
                </Text>
            </TouchableOpacity>
        </View>
        </SafeAreaView>
    )
}

export default FaceIdScreen ;

