import React from 'react'
import {Text} from 'react-native'
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getPosts } from "../store/post/actions";

export default function Home() {

    const { posts, loadingPosts } = useSelector((state) => state.PostReducer);
console.log(posts);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
   
     <Text>Home</Text>
    
  );
}
