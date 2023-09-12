import React from 'react'
import {Text} from 'react-native'
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getPosts ,getLogin} from "../../WebApiService/store/post/actions";

export default function HomeScreen() {

    const {Reducer} = useSelector((state) => state);
console.log("sselect datatatat home screen>>>>",Reducer);
const {Home,Login}=Reducer
console.log('====================================');
console.log(Home);
console.log('====================================');

console.log('====================================');
console.log(Login);
console.log('====================================');

let dispatch = useDispatch();

  useEffect(() => {
    let params={
      "email":"hanu@gmail.com",
      "pass":"12345",
}
  dispatch(getPosts()); 
    dispatch(getLogin(params));
  }, []);

  return (
   
     <Text>Home</Text>
    
  );
}
