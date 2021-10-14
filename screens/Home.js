import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default function Home(){
    return <View style={{
        backgroundColor: 'white', 
        flex: 1, 
        paddingTop: 55, 
        paddingHorizontal: 20,
        flex: 1 }}>
            <View style={{ 
                flexDirection: "row",
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Ionicons name="ios-menu-outline" size={24} color="black" />
                <FontAwesome name="motorcycle" size={24} color="black" />
                
                <View style={{flexDirection: "row"}}>
                    <AntDesign name="search1" size={20} color="black" />
                    <Ionicons name="notifications" size={20} color="black" />

                </View>
            </View>
            <View>
            <Text style={{ 
                marginTop: 10,
                fontWeight: 700,
                color: 'gray',
                marginTop: 10,
                fontSize: 20

            }}>The World's 
                <Text style={{
                    color: 'orange', 
                    fontWeight: 'bold',
                    fontSize: 25, 
                    marginLeft: 10}}>Best Bike</Text>
            </Text>
        
            </View>
            <Text style={{ 
                marginTop: 10,
                fontWeight: 700,
                color: 'black',
                marginTop: 10,
                fontSize: 20
            }}>Categories
            </Text>

            <View style={{ 
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around'
            }}>
            <Text style={{ 
                backgroundColor: "#e3e3e3",
                padding: 10, 
                marginTop: 20, 
                borderRadius: 10,
                fontSize: 15,
                marginLeft: 15,
                color: "orange"
            }}>All</Text>
            <Text style={{ 
                backgroundColor: "#e3e3e3",
                padding: 10, 
                marginTop: 20, 
                borderRadius: 10,
                fontSize: 15,
                marginLeft: 15,
            }}>Roadbike</Text>
            <Text style={{ 
                backgroundColor: "#e3e3e3",
                padding: 10, 
                marginTop: 20, 
                borderRadius: 10,
                fontSize: 15,
                marginLeft: 15,
            }}>Mountain</Text>
            <Text style={{ 
                backgroundColor: "#e3e3e3",
                padding: 10, 
                marginTop: 20, 
                borderRadius: 10,
                fontSize: 15,
                marginLeft: 15,
            }}>Urb</Text>
        </View>
        <View>
            
        </View>
        </View>
}