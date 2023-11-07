import { useState, useEffect } from "react";
import { Text, View, StatusBar, ImageBackground, TouchableOpacity, TextInput, KeyboardAvoidingView, Button, Dimensions, PixelRatio } from 'react-native';
import * as Localization from 'expo-localization';
import  MainButton  from '~/components/MainButton';
import DateTimePicker from '@react-native-community/datetimepicker';
import BackButton  from '~/components/BackButton';
import Icon from 'react-native-vector-icons/Feather';
import * as ImagePicker from 'expo-image-picker';
import { storage } from "~/data/firebase";
import { ref, uploadBytes, getStorage, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { uid } from 'uid';
import { createEvent } from "~/data/firebase/firestore/saveData";
import Loading from "~/components/Loading";

//I18N
import Locales from '~/data/locales';
const { getText } = Locales();

//ASSETS
import __base from '~/assets/styles/base';
import __setup from '~/assets/styles/pages/setup';

const { width, height } = Dimensions.get('window');


export default function CreateEvent({navigation}) {
  let uploadImage = require('./images/event-picture.png');
  let viewImage = require('./images/event-picture.png');

  const [image, setImage] = useState(false);
  const [eventName, setEventName] = useState('Kygo - Catch and Release');
  const txt = getText('CreateEvent');
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [date, setDate] = useState(new Date());
  const [error, setError] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

	const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false,
      aspect: [16, 9],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
       	const storage = getStorage();
		    const storageRef = ref(storage, "/flyers/"+uid(18)+'.jpg');
		    const img = await fetch(result.assets[0].uri);
		    const bytes = await img.blob();
		    const uploadTask = uploadBytesResumable(storageRef, bytes);
		    uploadTask.on('state_changed',(snapshot) => {
		    	setUploading(true);
				   const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				   setTransferred(progress);
				}, (error) => {
				   switch (error.code) {
				      case 'storage/unauthorized':
				         setError("User doesn't have permission to access the object");
				      break;
				      case 'storage/canceled':
				         setError("User canceled the upload");
				      break;
				      case 'storage/unknown':
				         setError("Unknown error occurred, inspect error.serverResponse");
				      break;
				   }
				},
				() => {
				   getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
				   		setImageUrl(downloadURL);
				   });
				}); 
    }
  };

  const submitEvent = () => {
  	setError(false);
  	if(imageUrl == '' || eventName == '' || date == ''){
      setError('Please fill in all fields');
    } else {
      let data = { image: imageUrl, name: eventName, date: date };
      setLoading(true);
      createEvent(data, (result) => {
      	console.log(result);
        if(result.type=='error'){
          setLoading(false);
          setError(result.data);
        } else {
          navigation.navigate('SelectEvent');
        }
      })
    }
  }
	
	return (
		loading ? <Loading /> : (
			<KeyboardAvoidingView style={__setup.containerSplit} behavior="padding" enabled>
				<StatusBar hidden={true} />
					<BackButton onPress={() => navigation.navigate('NameDevice') }>
	            Name Device
	        </BackButton>
					<View style={[__setup.containerSplitContent, __setup.alignLeft, __setup.hideWhenMobile]} >
			        <TouchableOpacity style={{ alignItems: 'center' }} onPress={ ()=> pickImage() }>
			        	{ image ? (
				        	<ImageBackground
				            style={[ __setup.coverImage ]}
				            source={{ uri: image }}
				            imageStyle={{ resizeMode: 'cover' }}
				          /> ) : (
				          	<View style={[ __setup.coverImage ]}>
				          		<Icon name="image" size={58} color="#555769" style={__setup.codeColIcon} />
				          		<Text style={[ __setup.coverText ]}>Upload flyer</Text>
				          	</View>
				          )
				        }
			        </TouchableOpacity>
					</View>
					<View style={[ (width > 800) ? __setup.containerSplitContent : __setup.container  ]}>
						<View style={ __setup.alignLeft }>
							<Text style={[__base.h1]}>Create event</Text>
							<Text style={[__base.text]}>Create your first event and start issueing Membercards.</Text>
							<View style={__setup.wrapperDate}>
								<TextInput style={[ __base.inputText, __setup.inputTextWithDatePicker  ]} value={eventName} onChangeText={ (e) => { setEventName(e) } } placeholder="Name event"/>
								<View style={__setup.datePicker}>
									<DateTimePicker value={date} mode={'date'} onChange={onChange} />
					      </View>
					    </View>
					    <View style={__setup.uploadCoverMobileWrapper}>
					    	{ image ? (
				        	<ImageBackground
				            style={[ __setup.uploadCoverMobilePreview ]}
				            source={{ uri: image }}
				            imageStyle={{ resizeMode: 'cover' }}
				          /> ) : (
				          	<View style={__setup.uploadCoverMobilePreview} />
				          )
				        }
					    	<TouchableOpacity onPress={ ()=> pickImage() }>
						    	<View style={__setup.uploadCoverMobileButton}>
						    		<Text style={__setup.uploadCoverMobileText}>Upload Image</Text>
						    	</View>
						    </TouchableOpacity>
						    { uploading && <Text style={ __setup.uploadingText }>Uploading ({Math.round(transferred)}%)</Text> }
					    </View>
							<MainButton onPress={() => submitEvent() }>Create Event</MainButton>
							{ error && <Text style={ __base.error }>{ error }</Text> }
						</View>
					</View>
			</KeyboardAvoidingView>
		)
	);
}