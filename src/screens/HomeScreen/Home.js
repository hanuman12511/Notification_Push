import { useDispatch, useSelector } from 'react-redux';

import React from 'react'
import {Text,View,Button} from 'react-native'
import { setMessage } from '../../webserviceSlice/reducer/messageReducer';
import {getLoginThunk} from "../../webserviceSlice/Thunk"
const Home = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state?.message);
console.log('====================================');
console.log("home selector ",message);
console.log('====================================');
  const handlePress = () => {
    //dispatch(getLoginThunk({"email":"hanu@gmail.com","pass":"12345"}));
    dispatch(setMessage({"email":"hanu@gmail.com","pass":"12345"}));
  };

  return (
    <View >
      <Text ></Text>
      <Button title={'Set Message'} onPress={handlePress} />
    </View>
  );
};
export default Home