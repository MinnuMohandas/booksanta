import *as React from 'react'
import {Dimensions, StyleSheet, View,Animated,Text} from 'react-native'
import { Icon, ListItem } from 'react-native-elements'
import {SwipeListView} from 'react-native-swipe-list-view'

export default class SwipeList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            allNotifcations:this.props.notifications
        }
    }renderItem=doc=> (
  // console.log("*************************************************************",doc)
        <Animated.View>
            <ListItem
                title={doc.item.bookName}
                titleStyle={{color:'black',fontWeight:'bold'}}
                subtitle={doc.item.message}
                leftElement={<Icon name="book" type="font-awesome" color ='#696969'/>}
                
                            />
        </Animated.View>
        )
    
    renderHiddenItem=()=>(
        <View style={styles.rowBack}>
            <View  style={[styles.backRightBtn,styles.backRightBtnRight]}>
            <Text style={styles.backTextWhite}></Text>
              </View>
        </View>
    )
    updateMarkAsread =(notification)=>{
        db.collection("notifications1").doc(notification.doc_id).update({
          "notification_status" : "read"
        })
      }

    onSwipeValueChange=swipeData=>{
        console.log(swipeData);
        var allNotifications = this.state.allNotifications
          const {key,value} = swipeData;
          if(value < -Dimensions.get('window').width){
       const newData = [...allNotifications];
       console.log(newData,"************************************************************",key);
         
           const prevIndex = allNotifications.findIndex(item => item.key === key);
           this.updateMarkAsread(allNotifications[prevIndex]);
             newData.splice(prevIndex, 1);
            this.setState({allNotifications : newData})
       };
    }
    render(){
        console.log(this.state.allNotifcations)
        return(
            <View style={styles.container}>
                <SwipeListView
                  disabaleRightSwipe
                  data={this.state.allNotifcations}
                  renderItem={this.renderItem}
                  renderHiddenItem={this.renderHiddenItem}
                  rightOpenValue={-Dimensions.get('window').width}
                  previewRowKey={'0'}
                  previewOpenValue={-40}
                  previewOpenDelay={3000}
                  onSwipeValueChange={this.onSwipeValueChange}
                ></SwipeListView>
            </View>
        )
        
    }

}
const styles = StyleSheet.create({ 
    container: { 
        backgroundColor: 'white', 
        flex: 1, 
    }, 
    backTextWhite: { 
        color: '#FFF', 
        fontWeight:'bold', 
        fontSize:15 
    }, 
    rowBack: { 
        alignItems: 'center', 
        backgroundColor: '#29b6f6', 
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingLeft: 15, 
    }, 
    backRightBtn: { 
        alignItems: 'center', 
        bottom: 0, 
        justifyContent: 'center', 
        position: 'absolute', 
        top: 0, 
        width: 100, 
    }, 
    backRightBtnRight: { 
        backgroundColor: '#29b6f6', 
        right: 0, 
    },
 });