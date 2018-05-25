
import React ,{Component} from 'react';
//import {Button} from 'react-native';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  ListView,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Actions,
  KeyboardAvoidingView
  
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {UIActivityIndicator} from 'react-native-indicators';
//import {SearchBar} from 'react-native-elements';
import baseurl from './form/Baseurl';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
//import { Button } from 'react-native-elements'
const image1=require('./Image/phj.png');
const image2=require('./Image/loogout.png');
const image3=require('./Image/git.png');

export default class Stalllist extends Component {
    static navigationOptions={
      header:null,
    };
  constructor()
  {
    

    super();
    this.state={
      isLoading:true,
    dataSource:new 
   ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2}),
   data:[],
   currentstall:null,

   exibition_id : '',
   stall_no:'',
   company_name:'',
   domain:'',
   company_email_id:'',
   company_number:'',
   website_link:'',
   location:'',
   contact_person_name:'',
   person_email_id:'',
   person_mobile_no:'',
   special_requrirements:'',
   minutes_of_meeting:'',
   next_meeting_date:'',
   software:'',

   
    }
  }
  
  componentDidMount()
  {
    
    fetch(baseurl.Stalllisting)
    .then((response)=>response.json())
    .then((responseJson)=>{
      console.log(responseJson)
      data=responseJson;
    
      this.setState({
       
       dataSource:this.state.dataSource.cloneWithRows(data),
       isLoading:false,
       currentstall : data
      
      })
      //this.updatedetails = this.updatedetails.bind(this);
    })
    .catch((error)=>{
        console.error(error);
    });
  }
  
   
   
  
  updatedetails=(id)=>{
    console.log('The data',id)
    this.props.navigation.navigate('User',{id});
   
}

  SearchFilterFunction(text){
    
    const newData = data.filter(function(item){
        const itemData = item.company_name
        const textData = text
        return itemData.indexOf(textData) > -1
    })
    this.setState({
        dataSource: this.state.dataSource.cloneWithRows(newData),
        text: text
    })
}
  render(){
    const {navigate} =this.props.navigation;
    if(this.state.isLoading)  {
      return(
        <UIActivityIndicator color='#5E375D' />
      );
    }else{
    
    return (
     
      <View style={{backgroundColor:'transparent',flex:1}}>
  
  <View style={{flex:0.6,backgroundColor:'transparent',justifyContent:'space-between'}}>
  
        <View style={{ flex: 0.8,  backgroundColor: 'transparent', alignItems: 'center' }}>
  
             <View style = {{flex: 1, position: 'absolute',}}>
               <Image source = {image1} resizeMode = 'cover' style = {{ opacity: 1, }} />
             </View>
             
       
             <View style = {{ alignSelf: 'flex-end',top:10, right: 10,backgroundColor:'transparent', opacity: 1}}>
             <TouchableOpacity 
              onPress={ () => navigate('Login')}>
               <Image style = {styles.logo} source = {image2} resizeMode = 'contain'/>
               </TouchableOpacity>
             </View>
       
            
             <View style = {{ top: 40,}}>
               <Image style = {styles.logo1} source = {image3} resizeMode = 'contain' />
             </View>
             
          </View>

          <KeyboardAvoidingView
      style={{ backgroundColor: 'transparent' }}
      resetScrollToCoords={{ x: 0, y: 0 }}
     // contentContainerStyle={styles.container}
      scrollEnabled={true}
    >
           <View style={{backgroundColor:'transparent',justifyContent:'center',alignItems:'center'}}>
           
                <TextInput 
                    style={styles.TextInputStyleClass}
                    onChangeText={(text) => this.SearchFilterFunction(text)}
                    value={this.state.text}
                    underlineColorAndroid='#000'
                    placeholder='Search by Exhibition name'
                      />

           </View>
          </KeyboardAvoidingView>
   </View>
 
<View style={{backgroundColor:'transparent',alignSelf:'center',flex: 1, justifyContent: 'center'}}>

  
  <View style={{}}>
  <Text style = {styles.headline}>Stall Details List</Text>
  </View>
 
  <ScrollView vertical={true}>
  <ListView
         dataSource={this.state.dataSource}
         renderRow={(rowData)=>
         
          <View style={styles.lists}>
            
           
           <TouchableOpacity  onPress= { this.updatedetails.bind(this,rowData.id) } >
           
            <Text style={
            {marginLeft:10}
          } >
           <Text style={
            {fontWeight:'bold',marginLeft:10, color:'#5E375D'}
          }>
          
           Stall id: </Text><Text >{rowData.id}</Text></Text>
           <Text  style={
            {marginLeft:10}
          }>
          <Text style={
            {fontWeight:'bold',marginLeft:10, color:'#5E375D'}
          }>
          
           Stall No: </Text><Text>{rowData.stall_no}</Text></Text>
           <Text  style={
            {marginLeft:10}
          }>
           <Text  style={
            {fontWeight:'bold',marginLeft:10,color:'#5E375D'}}>
           Company Name:</Text><Text> {rowData.company_name}</Text></Text>
           <Text  style={
            {marginLeft:10}
          }>
           <Text  style={
            {fontWeight:'bold',marginLeft:10,color:'#5E375D'}}>
           Domain:</Text><Text>{rowData.company_email_id}
           </Text></Text>
          
           <Text style={{marginBottom:10,marginLeft:10}}>
           <Text style={{marginBottom:10,fontWeight:'bold',marginLeft:10,color:'#5E375D'}}>
           Location: </Text><Text> {rowData.location}
           </Text></Text>
          
           </TouchableOpacity>
           </View>
         }
           />
     
    </ScrollView>
    </View>  
</View>
  
    )
  }
  }
  
}
const styles=StyleSheet.create({
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
   
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
 
 nav:{
  flex:0,
  flexDirection:'row',

   marginTop:10,
  
 },

  
  
  headline: {
    fontSize: 18,
    fontWeight:'bold',
    textAlign: 'center',
    color:'#5E375D'
    
  },
  
  
   backgroundImage: {
     //flex: 3,
     backgroundColor: '#FFFFFA',
     flexDirection: 'row',
     justifyContent:'center',
   
     alignItems:'center'
   },
   bck:{
    // flex:1,
     backgroundColor: '#FFFFFA',
     flexDirection: 'row',
     justifyContent:'center',
   
     alignItems:'center'
   },
   buttonContainer: {
    //backgroundColor: '#FFFFFA',
    //borderRadius: 10,
    marginLeft:400,
   
    //padding: 10,
    //shadowColor: '#000000'
    
    },
    fm:{
      fontSize: 16,
      //marginLeft:5,
      paddingLeft:2,
      marginTop:10,
      color:'#5E375D'
    },
    f:{
      fontSize: 16,
      marginTop:10,
      color:'#5E375D'
    },
    btntext:{
      color:'#ffffff',
      fontSize:14,
      
      
  },
  button: {
      alignSelf: 'stretch',
      alignItems: 'center',
      padding:5,
      flex:0,
      backgroundColor: '#5E375D',
      alignSelf: 'flex-end',
      borderRadius:12
  },
  lists:{
    borderWidth:2,
    borderRadius:10,
    borderColor:'#5E375D',
    backgroundColor:'#ffffff',
    marginLeft:10,
    marginRight:10,
    marginTop:30,


  },
  logo: {
    backgroundColor: 'rgba(0,0,0,0)',
    opacity: 1,
    width: 30,
    height: 30,
    alignSelf: 'flex-end',
  },

  logo1: {
    backgroundColor: 'rgba(0,0,0,0)',
    opacity: 1,
    width: 95,
    height: 95,
    alignSelf: 'center',
  },

  TextInputStyleClass:{
    
      textAlign: 'center',
      height:responsiveHeight(6),
      width:responsiveWidth(60),
      fontSize: 16,
     
    
}

});