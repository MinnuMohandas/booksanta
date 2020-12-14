import * as React from 'react'
import {View,Text,StyleSheet} from 'react-native'

export default class Instagram extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Instagram</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({ 
    container: {
         flex: 1, backgroundColor: '#fff',
          alignItems: 'center',
           justifyContent: 'center',
         }, 
        text:{
            color:'magenta',
            fontSize: 50
        }
        });