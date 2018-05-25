import {StyleSheet,View,Text,TextInput,TouchableOpacity,TextBox,ScrollView,Picker,PixelRatio,Image} from 'react-native';
import React, {Component} from 'react';
//import {IndicatorViewPager, PagerDotIndicator} from 'rn-viewpager';
import {StackNavigator } from 'react-navigation';
//import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import DatePicker from 'react-native-datepicker'; 
//import { Dropdown } from 'react-native-material-dropdown';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';
import ImagePicker from 'react-native-image-picker';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
//import RadioButton from 'radio-button-react-native';
//import RadioButton from 'radio-button-react-native';
import baseurl from './Baseurl';
const image1=require('./Image/logout.png');
 export default class user extends React.Component {
 
   
  static navigationOptions= ({navigation}) => ({
            //header:null
        title:'Stall Details',
        headerStyle: { backgroundColor: '#5E3750' },
         headerTitleStyle: { color: '#ffffff',fontSize:16 },
         headerRight: 
         <TouchableOpacity onPress={ () =>
          navigation.navigate('Login')}>
          <Image source={image1} style={{width: 23, height: 23.5,marginRight:10}} />
      </TouchableOpacity>,
         
    
   
});
           
      
     
  
  onSelect(index, value){
    this.setState({
      software: `Selected index: ${index} , value: ${value}`
    })
  }
  constructor(props)
  {
    
    super(props);
    console.log("User details",this.props.navigation.state.params.id)
    

    this.state={
    //dataSource:new 
   //ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2}),
     stalls_id:'',
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
       ImageSource:null,
        stall_id:this.props.navigation.state.params.id,
       data:[],
      
    }
}

    selectPhotoTapped() {
        const options = {
          quality: 1.0,
          maxWidth: 500,
          maxHeight: 500,
          storageOptions: {
            skipBackup: true
          }
        };
    
    
        ImagePicker.showImagePicker(options, (response) => {
          console.log('Response = ', response);
    
          if (response.didCancel) {
            console.log('User cancelled photo picker');
          }
          else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          }
          else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          }
          else {
            var source, temp;
            // You can display the image using either:
            //source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
            console.log(response)
    
            temp = response.data;
            var temp2 = response.fileName;
    
            console.log("Image path is : "+temp)
            console.log("Image Name is : "+temp2)
            console.log("Image Type is : "+response.type)
    
            //Or:
            if (Platform.OS === 'android') {
              source = {uri: response.uri, isStatic: true};
            } else {
              source = {uri: response.uri.replace('file://', ''), isStatic: true};
            }
            //let source = { uri: response.uri };
    
            
    
            this.setState({
              avatarSource: source,
              imgBase64: temp,
              image_name: temp2,
              //ImageSource: source,
              //data:[],
   
            });
          }
        });
    
    }
    
    componentDidMount()
    {
      //const {stall_id}=this.state.stall_id;
      fetch(baseurl.StalllId,{

      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
     
        stall_id: this.state.stall_id,
     
       // password: UserPassword
     
      })
     
    }).then((response) => response.json())
          .then((responseJson) => {
            console.log(responseJson[0].id)
            this.setState({
              stalls_id:responseJson[0].id,
              exibition_id :responseJson[0].exibition_id,
              stall_no:responseJson[0].stall_no,
              company_name:responseJson[0].company_name,
              domain:responseJson[0].domain,
              company_email_id:responseJson[0].company_email_id,
              company_number:responseJson[0].company_number,
              website_link:responseJson[0].website_link,
              location:responseJson[0].location,
              contact_person_name:responseJson[0].contact_person_name,
              person_email_id:responseJson[0].person_email_id,
              person_mobile_no:responseJson[0].person_mobile_no,
              special_requrirements:responseJson[0].special_requrirements,
              minutes_of_meeting:responseJson[0].minutes_of_meeting,
              next_meeting_date:responseJson[0].next_meeting_date,
              software:responseJson[0].software,
            })
     
          console.log(responseJson)
          }).catch((error) => {
            console.error(error);
          });
     
     
      }
      InsertDataToServer = () =>{
        
        const {stall_id}=this.state.stall_id;
        const { exibition_id }  = this.state ;
        const { stall_no }  = this.state ;
        const { company_name }  = this.state ;
        const { domain}  = this.state ;
        const { company_email_id }  = this.state ;
        const { company_number }  = this.state ;
        const { website_link }  = this.state ;
        const { location }  = this.state ;
        const { contact_person_name }  = this.state ;
        const { person_email_id }  = this.state ;
        const { person_mobile_no }  = this.state ;
        const { special_requrirements }  = this.state ;
        const { minutes_of_meeting }  = this.state ;
        const { next_meeting_date }  = this.state ;
        const { software }  = this.state ;
        const{ ImageSource}=this.state;
        
       fetch(baseurl.UpdateStall, {
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
         },
         body:JSON.stringify ({
          stall_id: this.state.stall_id,
            //exibition_id:exibition_id,
           // stall_id: this.state.stall_id,
           //stall_id:stall_id,
            stall_no:stall_no,
            company_name:company_name,
            domain:domain,
            company_email_id:company_email_id,
            company_number:company_number,
            website_link:website_link,
            location:location,
            contact_person_name:contact_person_name,
            person_email_id:person_email_id,
            person_mobile_no:person_mobile_no,
            special_requrirements:special_requrirements,
            minutes_of_meeting:minutes_of_meeting,
            next_meeting_date:next_meeting_date,
            software:software,
            ImageSource:this.state.image_name
         })
        
       
      }).then(function(response){
        //alert(response);
        console.log('Response',response);
        //alert("successfully saved");
    },function(response){
    
     console.log(response);
    
    });
        
         }

         sendmail = () =>{
          
          const {stall_id}=this.state.stall_id;
          const { exibition_id }  = this.state ;
          const { stall_no }  = this.state ;
          const { company_name }  = this.state ;
          const { domain}  = this.state ;
          const { company_email_id }  = this.state ;
          const { company_number }  = this.state ;
          const { website_link }  = this.state ;
          const { location }  = this.state ;
          const { contact_person_name }  = this.state ;
          const { person_email_id }  = this.state ;
          const { person_mobile_no }  = this.state ;
          const { special_requrirements }  = this.state ;
          const { minutes_of_meeting }  = this.state ;
          const { next_meeting_date }  = this.state ;
          const { software }  = this.state ;
          const{ ImageSource}=this.state;
          
         fetch('http://git/update_stall_email', {
           method: 'POST',
           headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json',
           },
           body:JSON.stringify ({
            stall_id: this.state.stall_id,
              //exibition_id:exibition_id,
             // stall_id: this.state.stall_id,
             //stall_id:stall_id,
              stall_no:stall_no,
              company_name:company_name,
              domain:domain,
              company_email_id:company_email_id,
              company_number:company_number,
              website_link:website_link,
              location:location,
              contact_person_name:contact_person_name,
              person_email_id:person_email_id,
              person_mobile_no:person_mobile_no,
              special_requrirements:special_requrirements,
              minutes_of_meeting:minutes_of_meeting,
              next_meeting_date:next_meeting_date,
              software:software,
              ImageSource:ImageSource
           })
          
         
          }).then((response)=>response.json())
          .then((responseJson)=>{
              alert("Stall Details Updated");
              this.props.navigation.navigate('Stalllist');
            
            
          },function(responseJson){
       
           console.log(responseJson);
       
          });
           
           
            }
            getsoft= (index,value) =>{
              
                this.setState({
                  software:value
                })
               
          }
   
    render() {
    const { navigate } =this.props.navigation;
  const radio_props = [
    {label: 'Yes', value: 0,labelColor:'#ffffff' },
    {label: 'No', value: 0,labelColor:'#ffffff' }]
  return (
    
    <View style={{flex:1,backgroundColor:'#fff'}}>
   
<ScrollView>

    <View >
   
   <View style={{display:'none'}}>
   <Text style={styles.exhi}>Stall.id</Text>
   <TextInput style={styles.inputBox}
       underlineColorAndroid='rgba(0,0,0,0)'
       placeholder='Stall id' 
       type="hidden"
      //value={this.state.stalls_id}
     value= {`${this.state.stalls_id}`} 
      />
      </View>
      <Text style={styles.exhi}>Stall.no</Text>
    <TextInput style={styles.inputBox}
       underlineColorAndroid='rgba(0,0,0,0)'
       placeholder='Stall.no' 
      value={this.state.stall_no}
       onChangeText={stall_no => this.setState({stall_no})}/>
      <Text style={styles.exhi}>Company Name:</Text>
      <TextInput style={styles.inputBox} 
      underlineColorAndroid='rgba(0,0,0,0)'
      placeholder='Company Name' 
       value={this.state.company_name}
      onChangeText={company_name => this.setState({company_name})}/> 
      <Text style={styles.exhi}>Company Email:</Text>
      <TextInput style={styles.inputBox} 
      underlineColorAndroid='rgba(0,0,0,0)'
      placeholder='Company Email' 
      value={this.state.company_email_id}
      onChangeText={company_email_id => this.setState({company_email_id})}/>
       <Text style={styles.exhi}>Company Phone no:</Text>
      <TextInput style={styles.inputBox}
       underlineColorAndroid='rgba(0,0,0,0)'
       placeholder='Company Phone no:' 
       value={this.state.company_number}
       onChangeText={company_number => this.setState({company_number})}/> 
         <Text style={styles.exhi}>Domain:</Text>
      <TextInput style={styles.inputBox}
       underlineColorAndroid='rgba(0,0,0,0)'
       placeholder='Domain' 
       value={this.state.domain}
       onChangeText={domain => this.setState({domain})}/>
      <Text style={styles.exhi}>Website:</Text>
      <TextInput style={styles.inputBox}
       underlineColorAndroid='rgba(0,0,0,0)'
       placeholder='Website'  
       value={this.state.website_link}
       onChangeText={website_link => this.setState({website_link})}/>
     
    
      <Text style={styles.exhi}>Contact Person Name:</Text>
      <TextInput style={styles.inputBox}
       underlineColorAndroid='rgba(0,0,0,0)'
       placeholder='Contact Person Name'
       value={this.state.contact_person_name}
       onChangeText={contact_person_name => this.setState({contact_person_name})} />
      <Text style={styles.exhi}>Mobile no:</Text>
      <TextInput style={styles.inputBox}
       underlineColorAndroid='rgba(0,0,0,0)'
       placeholder='Mobile No:' 
       value={this.state.person_mobile_no}
       onChangeText={person_mobile_no => this.setState({person_mobile_no})}/>
      <Text style={styles.exhi}>Contact Person Email:</Text>
      <TextInput style={styles.inputBox}
       underlineColorAndroid='rgba(0,0,0,0)'
       placeholder='Contact Person Email'
       value={this.state.person_email_id}
       onChangeText={person_email_id => this.setState({person_email_id})}/>
      <Text style={styles.exhi}>Special Requirement:</Text>
      <TextInput style={styles.inputBox} 
      underlineColorAndroid='rgba(0,0,0,0)'
      placeholder='Special Requirement:' 
      value={this.state.special_requrirements}
      onChangeText={special_requrirements => this.setState({special_requrirements})}/>
      <Text style={styles.exhi}>Minute of Meeting:</Text>
      <TextInput style={styles.inputBox} 
      underlineColorAndroid='rgba(0,0,0,0)'
      placeholder='Minute of meeting' 
      value={this.state.minutes_of_meeting}
      onChangeText={minutes_of_meeting => this.setState({minutes_of_meeting})}/>
      <Text style={styles.exhi}>Next Meeting Date:</Text>
      <DatePicker style={styles.exhi}
        style={{width: responsiveWidth(91)}}
        date={this.state.next_meeting_date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2005-05-01"
        maxDate="2070-12-30"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0, 
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36         }
          // ... You can check the source to find the other keys.
        }}
        value={this.state.next_meeting_date}
        onDateChange={(next_meeting_date) => {this.setState({next_meeting_date})}}
      />
      <Text style={styles.exhi}>Software</Text>
     
      <RadioGroup
       value={this.state.software}
       onSelect = {this.getsoft.bind(this)}
       onValueChange={this.state.software}
    >
      <RadioButton value={'yes'} >
        <Text>Yes</Text>
      </RadioButton>

      <RadioButton value={'no'}>
        <Text>No</Text>
      </RadioButton>
      </RadioGroup>
        <View>   
        <Text style={styles.exhi}>Upload Photo</Text>
      <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
 
            <View style={styles.ImageContainer}>
 
            { this.state.ImageSource === null ? <Text style={{color:'#ffffff'}}>Select a Photo</Text> :
              <Image style={styles.ImageContainer} source={this.state.ImageSource} />
            }
 
            </View>
 
          </TouchableOpacity>
          </View>
       
   </View>
  <View style={{margin:10}}></View>
  <View style={{backgroundColor:'blue',justifyContent:'center',alignItems:'center'}}>
   <TouchableOpacity >
        <Text  onPress= { this.InsertDataToServer} style={styles.btntext}>Save</Text>
        </TouchableOpacity>
    </View>
    <View style={{backgroundColor:'yellow',justifyContent:'center',alignItems:'center'}}>

        <TouchableOpacity >
        <Text  onPress= { this.sendmail} style={styles.btntext}>Save&Email</Text>
        </TouchableOpacity>
  
   </View>


 
 
     </ScrollView>  
     
 
 </View>
 

 

  );
}
}
 
 const styles=StyleSheet.create({
  exhi:{
    color:'black',
    fontSize:16,
    marginLeft:10,

},

inputBox:{
height: responsiveHeight(6), 
width: responsiveWidth(91),
fontSize:15,
borderColor:'#ccc',
borderWidth:1,
color:'#5E3750',
marginRight:20,
marginLeft:5,
marginTop:5,
marginLeft:10
},

inputBox1:{

height: responsiveHeight(6), 
width: responsiveWidth(91),
fontSize:15,
borderColor:'#ccc',
borderWidth:1,
color:'#5E3750',
marginRight:20,
textAlign:'center',
marginLeft:5,
marginBottom:10,
marginTop:5,
marginLeft:10

},
btntext:{
  color:'#ffffff',
  fontSize:18,
  backgroundColor: '#5E375D',
  alignItems: 'center',
  // height:responsiveHeight(5),
  // width:responsiveWidth(30),
  //justifyContent:'center',
  textAlign:'center',
  padding: 13,
  borderRadius:15
    
    
},

ImageContainer: {
   // borderRadius: 360,
    height: responsiveHeight(20), 
    width: responsiveWidth(50),
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    //marginLeft:30,
    backgroundColor: '#5E375D',
    
  },
 
})
