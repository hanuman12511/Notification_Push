import { useDispatch, useSelector } from 'react-redux';

import React, { useEffect } from 'react'
import {Text,View,Button} from 'react-native'
import { setMessage } from '../../webserviceSlice/reducer/messageReducer';
import {getHomeThunk, getLoginThunk} from "../../webserviceSlice/Thunk"
const Home = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state?.message);
  const home = useSelector((state) => state.home);
console.log('====================================');
console.log("home selector ",message);
console.log("home selector homedata ",home);
console.log('====================================');
  const handlePress = () => {
    //dispatch(getLoginThunk({"email":"hanu@gmail.com","pass":"12345"}));
    dispatch(setMessage({"email":"hanu@gmail.com","pass":"12345"}));
  };

  useEffect(()=>{
function show(){
dispatch(getHomeThunk());
}
show();
  },[])

  return (
    <View >
      <Text ></Text>
      <Button title={'Set Message'} onPress={handlePress} />
    </View>
  );
};
export default Home