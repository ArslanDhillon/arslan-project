import React from "react";
import { View ,Text,Image,Dimensions, TouchableOpacity} from 'react-native';
import { globalStyles } from "./GlobalStyles";

const {height,width} = Dimensions.get('window')


const CongratesScreen = (props) =>{
    return(
        <View style = {globalStyles.container}>
            <Text style = {{fontSize:20,fontWeight:'800',marginTop:70/853*height}}>
                Congratulations
            </Text>
            <Image  source={require('../assets/AFImage.png')}
                style= {{height:109/853*height,width:96 /393*width, marginTop:55/853*height}}
            />

            <Text  style= {{fontSize:18,fontWeight:'500',marginTop:25/853*height}}>
                You're all set to start 
            </Text>
            <Text  style= {{fontSize:18,fontWeight:'500',}}>
            your new loan with us.
            </Text>

            <TouchableOpacity style = {[globalStyles.capsuleButton,{marginTop:120/853*height}]}
                onPress={() => props.navigation.navigate('StateScreen') }
            >
                <Text style = {{color:'#fff',fontSize:12,fontWeight:'500'}}>
                    Start Loan
                </Text>
            </TouchableOpacity>

            <Text style = {{fontSize:12,color:'#a7a7a7',fontWeight:'500',marginTop:140/853*height,height:18}}>
                For more information and resources regarding 
            </Text>
            
            <Text style = {{fontSize:12,color:'#a7a7a7',fontWeight:'500',}}>
                PayDay loans, please visit
            </Text>

            <TouchableOpacity>
            <Text style = {{fontSize:12,fontWeight:'500',color:'#2468E8'}}>
                www.AmericaFinance.com 
            </Text>

            </TouchableOpacity>
        </View>
    );
}

export default CongratesScreen ;