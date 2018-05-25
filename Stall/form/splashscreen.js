import React ,{Component} from 'react';
import {
 
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  ListView,
  Navigator,
  Actions
  } from 'react-native';

  export default class splash extends Component {
    static navigationOptions={
        header:null,
    };
      render() 
      {
        const {navigate} =this.props.navigation;
        setTimeout(() => {
           navigate('Login'); 
        }, 5000);
          return (
          <View style={styles.MainContainer}>
          <View style={{backgroundColor:'transparent'}}>
          <Image style = {styles.logo} source={require('./Image/Tecture.png')}/>
          </View>
          <View style={{backgroundColor:'transparent'}}><Text style={styles.text}>Powered By{'\n'} </Text></View>
          </View>
          );
      }
  }
  
  const styles=StyleSheet.create({
      
      logo: {
        //backgroundColor: 'rgba(0,0,0,0)',
       width: 200,
       height: 230,
       // flex:1,
        //flexDirection: 'column',
       // position: 'absolute',
       // marginTop:20,
        //resizeMode: "stretch"
        resizeMode: 'cover',
        //justifyContent:'center',
        alignSelf:'center',
        //flexDirection:'row'
      },
      text: {
          textAlign:'center',
           fontSize:14,
           color:'#5E375D',
          // marginTop:450,
        },
        MainContainer :{
            //resizeMode: 'stretch',
            backgroundColor:'white',
           justifyContent: 'space-around',
           alignItems:'center',
           flex:1,
           width: null,
           height: null,
           //margin: 10
           },
  });