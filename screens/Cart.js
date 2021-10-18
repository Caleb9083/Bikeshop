import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';

export default function Cart(){

    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
      ];
      
      const Item = ( props ) => (
        <View style={styles.item}>
            <View style={{ height: 100, width: 100, backgroundColor: "white" }} >
                <Image source={
             {
             uri: "https://images.unsplash.com/photo-1634163250704-1f7aa020f281?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            }
        } />
            </View>
            <View>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.title}>{props.title}</Text>
            </View>
            <View style={{ flexDirection: "column", }}>
                <AntDesign name="delete" size={24} color="black" />
                <View style={{ flexDirection: "row" }}>
                    <Text>-</Text>
                    <Text>1</Text>
                    <Text>+</Text>
                </View>
            </View>
        </View>
      );

      const renderItem = ({ item }) => <Item title={item.title} />;

    return <View style={{ 
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: "column",
    }}>
        <View style={{ 
            flexDirection: 'row',
            alignItems: 'center',
            width: 350,
            justifyContent: 'flex-start',
            marginBottom: 20,
        }}>
            <View style={{ 
                flexDirection: 'row',
                alignItems: 'center',
                }}>
                <Ionicons name="arrow-back" size={24} color="black" /> 
            </View>
            
            <View style={{ 
                flexDirection: 'column',
                alignItems: 'center',            
                marginBottom: 15,
                marginHorizontal: "auto"
                }}>
                    <Text style={{ fontSize: 20, fontWeight: 600 }} >Cart list</Text>
                    <Text style={{ fontSize: 16, color: "gray" }} >(3 items)</Text>
            </View>
        </View>
        <View style={{ backgroundColor: "blue" }} >
        <SafeAreaView style={styles.container}>
          <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
        </SafeAreaView>

        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: 350,
    },
    item: {
      padding: 20,
      flexDirection: "row",
      justifyContent: "space-between"
    },
    title: {
      fontSize: 18,
    },

  });