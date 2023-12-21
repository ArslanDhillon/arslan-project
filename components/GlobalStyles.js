import { StyleSheet, Dimensions, Platform } from "react-native";

const { height, width } = Dimensions.get('window');

const arrowIconHeight = 70 / 852 * height;
const arrowIconWidth = 65 / 393 * width;
const afimageHeight = 106 / 852 * height;
const afimageWidth = 106 / 393 * width;

const globalStyles = StyleSheet.create({

  container :{
    height: 100,
    alignItems: 'center',
  },
    
  arrowBotton: {
    backgroundColor: '#2468E8',
    borderRadius: 35,
    height: arrowIconHeight,
    width: arrowIconWidth,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 1, width: -1 },
        shadowRadius: 10,

      },
      android: {
        elevation: 15,
      }
    })
  },
  logoImageStyle: {
    height: afimageHeight,
    width: afimageWidth,
  },

  inputStyle:{
    backgroundColor: "#f2f2f2",
    borderRadius: 10, 
    marginTop: 20, 
    padding: 8,
    width: 360 / 393 * width ,
    fontSize:10,
    fontWeight:'500'
  },
  capsuleButton:{
    height:64 / 852 * height,
    width:178 / 393 *width,
    backgroundColor:'#2468E8',
    borderRadius:58,
    justifyContent:'center',
    alignItems:'center',

    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 1, width: -1 },
        shadowRadius: 10,

      },
      android: {
        elevation: 15,
      }
    })
  }
})

export { globalStyles }