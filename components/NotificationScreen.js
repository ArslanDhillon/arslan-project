import React from "react";
import { View ,Text,Dimensions,Image, TouchableOpacity} from "react-native";
import { globalStyles } from "./GlobalStyles";

const {height,width} = Dimensions.get ('window')

const NotificationScreen =() =>{
    return(
        <View style = {globalStyles.container}>
            <Text style = {{fontSize:20,fontWeight:'800',marginTop:90/852*height}}>
            Notifications
            </Text>

            <Image source={require('../assets/bellIcon.png')}
                style = {{height:237 /852*height,width:315 /393*width,marginTop:10}}
            />
            <Text style = {{color:'#a7a7a7',fontSize:10,fontWeight:'500'}}>
                Allow America Finance to show
            </Text>
             <Text style = {{color:'#a7a7a7',fontSize:10,fontWeight:'500'}}>
                you notifications regarding the 
            </Text>
             <Text style = {{color:'#a7a7a7',fontSize:10,fontWeight:'500'}}>
                status of your loan?
            </Text>

            <TouchableOpacity style = {[globalStyles.capsuleButton,{marginTop:100/852*height}]}>
                <Text style = {{fontSize:10,fontWeight:'500',color:'#fff'}}>
                    Allow Permission
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default NotificationScreen ;