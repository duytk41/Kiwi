// import React, {useState} from 'react';
// import { PermissionsAndroid, Button, TouchableOpacity, View, Image } from 'react-native';
// import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
// import { PhotoIcon as PhotoIconOutline} from 'react-native-heroicons/outline';
// import { Colors } from '../../customs/Styles';

// const [img, setImg] = useState('');

// const RequestCamLib = () => {
//   const requestCameraPermissions = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         console.log("Camera permission given");
//         const result = await launchCamera({ mediaType: 'photo', cameraType: 'back' });
//         console.log(result.assets[0].uri);
//         setImg(result.assets[0].uri);
//       } else {
//         console.log("Camera permission denied");
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   };

//   const requestLibraryPermissions = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         console.log("Library permission given");
//         const result = await launchImageLibrary({ mediaType: 'photo' });
//         console.log(result.assets[0].uri);
//         setImg(result.assets[0].uri);
//       } else {
//         console.log("Library permission denied");
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   };

//   return (
//     <>
//       <TouchableOpacity 
//           style={[{ width: 345, height: 185, borderRadius: 10, backgroundColor: Colors.input }]}
//           onPress={() => requestCameraPermissions()}
//           >
//               {img != '' ? <Image source={{ uri:img }} style={{width: '100%', height: '100%', borderRadius: 10}} /> :
//                 <View style={{justifyContent: 'center', alignItems: 'center',width: '100%', height: '100%'}}>
//                   <PhotoIconOutline color='grey'></PhotoIconOutline>
//                 </View>
//               }
//           </TouchableOpacity>
//     </>
//   );
// };

// export default RequestCamLib;