import React from 'react'
import {View, Text, Dimensions, StyleSheet, Image, StatusBar} from 'react-native'

const {width, height} = Dimensions.get('window')

export const DetailScreen = ({route}) => {
    const {marker} = route.params;

    return(
        <View style={styles.container}>
            <StatusBar backgroundColor="#333"/>
            <Image
                source={marker.image}
                style={styles.image}
            />
            <View style={styles.banner}>
                <Text style={styles.title}>{marker.title} ,</Text>  
                <Text style={[styles.title, {marginLeft: 5}]}>{marker.country}</Text>  
            </View>
            <View style={styles.coordinate}>
                <Text style={{color: '#FFF'}}>Latitude : {marker.coordinate.latitude} , </Text>
                <Text style={{color: '#FFF'}}>Longitude : {marker.coordinate.longitude}</Text>
            </View>
            <View style={styles.description}>
                <Text style={{color:'#FFF'}}>{marker.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    image:{
        width: width,
        height: height/2,
        
    },
    banner:{
        flexDirection: 'row',
        width: width,
        height: height/15,
        backgroundColor: '#FFF',
        alignItems: 'center',
        elevation: 8
    },
    title:{
        fontSize: 20,
        color: '#333',
        
        marginLeft: 35
    },
    coordinate:{
        flexDirection: 'row',
        borderRadius: 10,
        borderColor: '#777',
        backgroundColor: '#333',
        borderWidth: 0.5,
        width: width/2 + 150,
        height: height/15,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 25
    },
    description:{
        width: width/2 + 150,
        height: height/5,
        borderRadius:10,
        borderWidth: 0.5,
        backgroundColor: '#333',
        alignSelf: 'center',
        marginTop: 25,
        paddingTop:10,
        paddingLeft:7,
        paddingRight:7,
        alignItems: 'center'
    }
})