import React, { useEffect } from 'react';
import { StyleSheet, Text, Image, View, Dimensions, TextInput, TouchableOpacity, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from './GlobalStyles';
import { useFonts } from 'expo-font';



const { height, width } = Dimensions.get('window');


const inputHeight = 60 / 852 * height;

const afimage = require('../assets/AFImage.png')
const arrowIcon = require('../assets/arrow.png')


const Main = (props) => {


  const[loaded, error] = useFonts({
    PoppinsMedium :require ('../assets/Fonts/Poppins-Medium.ttf'),
    PoppinsSemiBold: require('../assets/Fonts/Poppins-SemiBold.ttf'),
    testfont : require('../assets/Fonts/test/Ephesis-Regular.ttf')

  });

  // useEffect(()=> {
  //   if(loaded){
  //     console.log("Fonts loaded")
  //   }
  //   if (error){
  //     console.log("Error loading font")
  //   }

  // }, [loaded])

  if(!loaded){
    return <View> 
        <Text>Loading ....</Text>
       </View>;
  };


  return (

      <View style={styles.container}>
          <Image source={afimage}
            style={[globalStyles.logoImageStyle,{marginTop:100/852*height}]}
          />

          <View style={{ flexDirection: 'column', height: 100, marginTop: 40 * 852 / height }}>
            <Text style={styles.mainTextStyle}>
              Get the loan you
            </Text>
            <Text style={styles.mainTextStyle}>
              need in no time.
            </Text>
          </View>
          <View style={{
            flexDirection: 'row', justifyContent: 'space-between',
            borderLeftWidth: 4, borderLeftColor: '#2468E8', height: inputHeight, margin: 20,
          }}>
            <Text
              style={{
                fontSize: 12, fontWeight: '500', padding: 10,
              }}>
              Already A Member? Sign In
            </Text>

            <TouchableOpacity 
                onPress={()=>props.navigation.navigate('SignInScreen')}
            >
              <View style={globalStyles.arrowBotton}>
                <Image source={arrowIcon} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={{
            flexDirection: 'row', justifyContent: 'space-between',
            borderLeftWidth: 4, borderLeftColor: '#2468E8', height: inputHeight, margin: 20,
          }}>
            <Text
              style={{
                fontSize: 12, fontWeight: '500', padding: 10,
              }}>
              New Member? Apply Now
            </Text>

            <TouchableOpacity 
                onPress={() => props.navigation.navigate('NameDetails')}
            >
              <View style={globalStyles.arrowBotton}>
                <Image source={arrowIcon} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: 'center', flexDirection: 'column', height: 100,marginTop:30}}>
            <Text style={{ fontSize: 12, fontWeight: '500' }}>
              By creating an account, you agree to the
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              
              <TouchableOpacity>
                  <Text style={{ fontSize: 12, fontWeight: '500' ,color:'#2468E8'}}>
                      Terms & Conditions
                  </Text>
              </TouchableOpacity>
                <Text> and </Text>
              <TouchableOpacity>
                  <Text style={{ fontSize: 12, fontWeight: '500',color:'#2468E8' }}>
                      Privacy Policy
                  </Text>
              </TouchableOpacity>

            </View>
            <Text style={{ fontSize: 12, fontWeight: '500'}}>
                      of America Finance
                  </Text>
          </View>
      </View>
  );
}
export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    flexDirection: 'column',
    alignItems:'center',
  },

  mainTextStyle: {
    fontSize: 19,
    color: 'black',
    fontWeight: '700',
   fontFamily:'testfont',
    textAlign: 'center',
    // marginTop: 60,
    // height: 60,
    flexDirection: 'column'
    // backgroundColor: 'red',
  }
});

