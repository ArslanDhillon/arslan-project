import React from "react";
import { Dimensions, View,Image ,Text,StyleSheet, TouchableOpacity, TextInput} from "react-native";
import { globalStyles } from "./GlobalStyles";

const {height,width} = Dimensions.get('window')

const WaitListScreen = (props) =>{
    return(
        <View style = {globalStyles.container}>
            <Image  source={require('../assets/veiwColor.png')}
                style ={{height: 270 / 853 * height,}}
            />
            
            <Text style = {{fontSize :18,fontWeight:'800',color:'#fff',marginTop:-200/852*height,}}>
                Uh Oh!
            </Text>
            <Text style = {styles.upperText}>
                America Finance does not currently
            </Text>
            <Text style = {styles.upperText}>
                offer loans in your state. Please join our
            </Text>
            <Text style = {styles.upperText}>
                waitlist and we'll notify you once your 
            </Text>
            <Text style = {styles.upperText}>
                state has been added.
            </Text>

            <View style ={{height:70/852*height,width:357/393*width,backgroundColor:'#f2f2f2',borderRadius:13,marginTop:50/852*height}}>
                
            </View>


            <TextInput
                placeholder="Join our waitlist by entering your email"
                autoFocus = {true}
                style = {{
                        backgroundColor:'#f2f2f2', padding:13,margin:20,borderRadius:10,
                        fontSize:10,fontWeight:'500',width:350 / 393 * width
                    }}
            />
            <View style = {{width:width ,alignItems:'flex-end',marginRight:20}}>
                <TouchableOpacity style = {[globalStyles.capsuleButton,{marginTop:25,width:139/393*width}]}
                    onPress={() =>props.navigation.navigate('HomeAddressScreen')}
                >
                    <Text style = {{color:'#fff',fontSize:12,fontWeight:'500'}}>
                        Submit
                    </Text>
                </TouchableOpacity>              
            </View>
        </View>
    )
}

export default WaitListScreen ;

const styles = StyleSheet.create({
    upperText:{
        fontSize :15,
        fontWeight:'500',
        height:25,
        color :"#fff"
        
    }
})

