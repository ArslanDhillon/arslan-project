import React, { useState } from "react";
import { View, Text, Dimensions, Image, TextInput, TouchableOpacity } from "react-native";
import { globalStyles } from "./GlobalStyles";
import { SafeAreaView } from "react-native-safe-area-context";

const { height, width } = Dimensions.get('window');

const LoanRequest = () => {

    const [text, setText] = useState('')

    return (
        <SafeAreaView>
            <View style={globalStyles.container}>
                <Text style={{ fontSize: 10, fontWeight: '500' }} >
                    Application Details
                </Text>

                <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center' }}>

                    <View style={{ width: 2, height: 2, borderRadius: 2, backgroundColor: "#000" }}></View>

                    <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#000", marginRight: 9, marginLeft: 6 }}></View>

                    <View style={{
                        height: 35 / 852 * height, width: 35 / 852 * height, borderRadius: 17.5, borderWidth: 1, alignSelf: "center", justifyContent: 'center'
                    }}>
                        <Image source={require('../assets/dollarBag.png')}
                            style={{
                                height: 20 / 852 * height, width: 20 / 852 * height, alignSelf: 'center', justifyContent: 'center'
                            }}
                        />
                    </View>

                    <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#000", marginRight: 9, marginLeft: 6 }}></View>
                    <View style={{ width: 2, height: 2, borderRadius: 2, backgroundColor: "#000" }}></View>
                </View>
                <Text style={{ fontSize: 20, fontWeight: '700', marginTop: 10 }}>
                    Loan Request
                </Text>

                <View style={{ flexDirection: 'row',alignItems:'center', marginTop: 65 / 852 * height }}>
                    <Text style={{ fontSize: 12, fontWeight: '500', color: '#a7a7a7' }}>
                        $
                    </Text>
                    <View style = {{height:60/852*height,width:200/393*width}}>
                        <Text
                            style={{ fontSize: 30, fontWeight: '500', color: text === "" ? 'grey' : '#000', }}
                        >
                            {text === "" ? "0.00" : text}
                        </Text>
                    </View>
                </View>
                <Text style = {{fontSize:10,fontWeight:'500',color:'#2468E8'}}>
                    Min Of $100 To Max Of $500
                </Text>

                <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 30 }}>
                    <View style={{ flexDirection: 'row', gap: 40 / 393 * width }}>
                        <TouchableOpacity onPress={() => setText(text + 1)}>
                            <View style={{
                                height: 70 / 852 * height, width: 70 / 852 * height, borderRadius: 25, borderWidth: 1, borderColor: '#f2f2f2',
                                alignItems: 'center', justifyContent: 'center'
                            }}>
                                <Text >1</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setText(text + 2)}>
                            <View style={{
                                height: 70 / 852 * height, width: 70 / 852 * height, borderRadius: 25, borderWidth: 1, borderColor: '#f2f2f2',
                                alignItems: 'center', justifyContent: 'center'
                            }}>
                                <Text >2</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setText(text + 3)}>
                            <View style={{
                                height: 70 / 852 * height, width: 70 / 852 * height, borderRadius: 25, borderWidth: 1, borderColor: '#f2f2f2',
                                alignItems: 'center', justifyContent: 'center'
                            }}>
                                <Text >3</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View style={{ flexDirection: 'row', gap: 40 / 393 * width, marginTop: 30 / 852 * height }}>
                        <TouchableOpacity onPress={() => setText(text + 4)}>
                            <View style={{
                                height: 70 / 852 * height, width: 70 / 852 * height, borderRadius: 25, borderWidth: 1, borderColor: '#f2f2f2',
                                alignItems: 'center', justifyContent: 'center'
                            }}>
                                <Text >4</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setText(text + 5)}>
                            <View style={{
                                height: 70 / 852 * height, width: 70 / 852 * height, borderRadius: 25, borderWidth: 1, borderColor: '#f2f2f2',
                                alignItems: 'center', justifyContent: 'center'
                            }}>
                                <Text >5</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setText(text + 6)}>
                            <View style={{
                                height: 70 / 852 * height, width: 70 / 852 * height, borderRadius: 25, borderWidth: 1, borderColor: '#f2f2f2',
                                alignItems: 'center', justifyContent: 'center'
                            }}>
                                <Text >6</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View style={{ flexDirection: 'row', gap: 40 / 393 * width, marginTop: 30 / 852 * height }}>
                        <TouchableOpacity onPress={() => setText(text + 7)}>
                            <View style={{
                                height: 70 / 852 * height, width: 70 / 852 * height, borderRadius: 25, borderWidth: 1, borderColor: '#f2f2f2',
                                alignItems: 'center', justifyContent: 'center'
                            }}>
                                <Text >7</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setText(text + 8)}>
                            <View style={{
                                height: 70 / 852 * height, width: 70 / 852 * height, borderRadius: 25, borderWidth: 1, borderColor: '#f2f2f2',
                                alignItems: 'center', justifyContent: 'center'
                            }}>
                                <Text >8</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setText(text + 9)}>
                            <View style={{
                                height: 70 / 852 * height, width: 70 / 852 * height, borderRadius: 25, borderWidth: 1, borderColor: '#f2f2f2',
                                alignItems: 'center', justifyContent: 'center'
                            }}>
                                <Text >9</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <TouchableOpacity style={{ marginTop: 30 / 852 * height }}
                        onPress={() => setText(text + 0)} >
                        <View style={{
                            height: 70 / 852 * height, width: 70 / 852 * height, borderRadius: 25, borderWidth: 1, borderColor: '#f2f2f2',
                            alignItems: 'center', justifyContent: 'center',
                        }}>
                            <Text >0</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    );

}

export default LoanRequest;