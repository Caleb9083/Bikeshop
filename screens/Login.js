import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function Login({navigation}){
    return <View style={{
        flex: 1,
        justifyContent: "center", 
        alignItems: "center",
        backgroundColor: 'white'}}>
        <Image
            style={
                {
                    width: 200,
                    height: 200,
                    borderRadius: 20,
                    marginBottom: 50,
                    transform: [{rotate: '45deg'}] 
                }
            }
         source={
             {
             uri: "https://images.unsplash.com/photo-1634163250704-1f7aa020f281?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            }
        }
        />
        <Text style={{ 
            color: "rgba(0,0,0,0.8)",
            fontSize: 24,
            }}>Welcome to</Text>
        <TouchableOpacity>
            <Text style={{ 
                color: 'black', 
                fontSize: 30, 
                fontWeight: '600', 
                borderRadius: 10 
                }}>Power Bike Shop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ 
            backgroundColor: "#e3e3e3", 
            padding: 10, paddingHorizontal: 60,
            marginTop: 20, 
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center'
            }}>
                <AntDesign name="google" size={24} color="rgb(256, 100, 10 )" />
                <Text style={{ 
                    fontSize: 17,
                    marginLeft: 15
            }}>Login with Gmail</Text>
        </TouchableOpacity>
        <TouchableOpacity
         onPress={() => {
             navigation.navigate('Home')
         }}
         style={{ 
            backgroundColor: "black", 
            padding: 10, 
            paddingHorizontal: 60,
            marginTop: 20, 
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center' 
            }}>
                <AntDesign name="apple1" size={24} color="white" />
                <Text style={{ 
                fontSize: 17,
                color: 'white',
                marginLeft: 15,
            }}>Login with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={{ 
                marginTop: 10,
                fontWeight: '500',
                color: 'gray',

            }}>Not a menber? 
                <Text style={{color: 'orange', fontWeight: 'bold', marginLeft: 10}}>Sign Up</Text>
            </Text>
         </TouchableOpacity>
    </View>
}