import React, { useMemo } from 'react'
import {Text} from 'react-native'
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getPosts ,getLogin} from "../../WebApiService/store/post/actions";


export default function HomeScreen() {

     const {Home,Login}= useSelector((state) => state.Reducer);
    console.log('============ Reducers Home Screen========================');
    console.log('====================================');
    console.log(Home);
    console.log('====================================');
   
    console.log('====================================');
    console.log(Login);
    console.log('====================================');
   
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
