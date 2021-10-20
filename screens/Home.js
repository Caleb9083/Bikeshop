import { Ionicons, FontAwesome, AntDesign, Entypo, SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';

export default function Home({navigation}){
    const Cards = (props) => {
        return(
            <View style={{
                borderRadius: 10,
                backgroundColor: "#eee",
                height: 250,
                width: 150,
                margin: 10
                }}>
                <TouchableOpacity style={{ flexDirection: "column" }}>
                    <View style={{ justifyContent: "flex-end", flexDirection: "row", marginBottom: 10 }}>
                        <AntDesign name="hearto" size={24} color={props.color} />
                    </View>
                    <View >
                    <Image
                        style={
                            {
                                width: 130,
                                height: 140,
                                borderRadius: 20,
                                marginBottom: 10,
                                marginLeft: 10,
                                objectFit: "contain"
                            }
                        }
                    source={ props.url }
                        
                    />
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: "center" }}>
                        <Text style={{ 
                            color: 'gray',
                            marginTop: 10,
                            fontSize: 18,
                            
                        }}
                        >{props.title}</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: "center" }} >
                        <Text style={{color: "orange", fontWeight: 700, fontSize: 16, justifyContent: "flex-end" }} >$</Text>
                        <Text style={{fontWeight: 700, fontSize: 20}} > {props.amount} </Text>
                    </View>
                </TouchableOpacity>
            </View>
)
}

    
    return <View style={{
        backgroundColor: 'white', 
        flex: 1, 
        paddingTop: 55, 
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center' }}>
            <View style={{ 
                flexDirection: "row",
                justifyContent: 'space-between',
                alignItems: 'center',
                width: 350,
            }}>
                <Ionicons name="ios-menu-outline" size={24} color="black" />
                <FontAwesome name="motorcycle" size={24} color="black" />
                
                <View style={{flexDirection: "row"}}>
                    <AntDesign name="search1" size={20} color="black" />
                    <Ionicons name="notifications" size={20} color="black" />

                </View>
            </View>
            <View style={{ width: 350 }}>
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
                fontSize: 20,
                width: 350
            }}>Categories
            </Text>

            <View style={{ 
            flexDirection: 'row',
            alignItems: 'center',
            width: 350,
            justifyContent: 'space-around',
            marginBottom: 15,
            }}>
            <Text style={ 
                [styless.text_container, {color: "orange"}]           
            }>All</Text>
            <Text style={
                [styless.text_container, {color: "gray"}]
            }>Roadbike</Text>
            <Text style={
                [styless.text_container, {color: "gray"}]
            }>Mountain</Text>
            <Text style={
                [styless.text_container, {color: "gray"}]
            }>Urban</Text>
        </View>
        <View style={{ 
            flexDirection: "row",
            justifyContent: 'center',
            alignItems: 'center',
            width: 350,
         }}>
        <Cards 
        title={"Pinarello Bike"} amount={"1,700.00"} color={"orange"}
        url={ {
            uri:  "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGluYXJlbGxvJTIwYmlrZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        }}
        />
        <Cards title={"Brompton Bike"} amount={"1,500.00"}
        url={ {
            uri:  "https://media.istockphoto.com/photos/black-and-red-folding-bicycle-picture-id690917450?b=1&k=20&m=690917450&s=170667a&w=0&h=sRB_e9XjSBD0qn8l37ApXAFZkfQhZ5Dp2YzoVOEtyF0=",
        }}
        />
        </View>
        <View style={{ 
            flexDirection: "row",
            justifyContent: 'center',
            alignItems: 'center',
            width: 350,            
         }}>
        <Cards
        title={"Schwinn Bike"} amount={"1,200.00"} 
        url={ {
            uri:  "https://media.istockphoto.com/photos/vintage-red-bicycle-picture-id171209836?b=1&k=20&m=171209836&s=170667a&w=0&h=S7RHMl8qOtd8HYnCPTXDKmEWv4iD741qV0MIBlQLFEU=",
        }}
        />
        <Cards title={"Norco Bike"} amount={"9,80.00"}
        url={ {
            uri:  "https://images.unsplash.com/photo-1513540870164-07649a1d676f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bm9yY28lMjBiaWtlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        }}
        />
        </View>
        <View style={{ 
                flexDirection: "row",
                justifyContent: 'space-around',
                alignItems: 'center',
                width: 350,
                backgroundColor: "#eee",
                marginTop: 15,

            }}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Home')
                    }}
                >
                    <Entypo name="home" size={30} color="orange" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Login')
                    }}
                >
                    <View style={[styless.icon_container, { transform: [{translateY: -25}] } ]} >
                    <MaterialCommunityIcons name="microphone-outline" size={26} color="white" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Cart')
                    }}
                >
                    <SimpleLineIcons name="handbag" size={30} color="gray" />
                </TouchableOpacity>
            </View>
        
        </View>
}

const styless = {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text_container: {
        backgroundColor: "#eee",
        padding: 10, 
        marginTop: 20, 
        borderRadius: 10,
        fontSize: 15,
        marginLeft: 15,
    },
    icon_container: {
        backgroundColor: "#000", 
        borderRadius: 30,
        padding: 30,
        height: 40,
        width: 40,
        justifyContent: "center",
        alignItems: "center"
    }
  };