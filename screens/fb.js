import * as React from 'react'
import {View,Text,StyleSheet} from 'react-native'

export default class Facebook extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Facebook</Text>
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
            color:'blue',
            fontSize: 50
        }
        });