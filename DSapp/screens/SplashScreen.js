//import libraries
import React, { Component } from 'react';
import {  View, Text, Image } from 'react-native';

export default class AlignItemsBasics extends Component {
    render() {
    return (
        <View style={{ flex:1 }}>
        <View style={{backgroundColor: '#bdc3c7'}}/>
         <Image source ={require('../resources/datespot.png')} />
        </View>
        
        
    );
}
}
//export default class Splash extends Component {
   // render (){
       // return (
            
         //   <View>         
          //  </View>
           
            
      //  );
   // }
//}
//
