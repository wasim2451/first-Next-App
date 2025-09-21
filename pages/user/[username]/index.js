'use client';
import {useRouter} from 'next/router'
import { useEffect } from 'react';

const user ={
        userList:null
    };
const Home=()=>{
    const router=useRouter();
    useEffect(()=>{
        if(user.userList==null){
            router.push('/');
        }
    },[router,user.userList]);
    const{username}=router.query;
    const handleClick=()=>{
        router.push({
            pathname:"/user/[username]/settings", // it is pathname not path
            query:{username} // must be an object
        })
    }
    return <>
    <h1>This is the Index Page of {username}</h1>
    <button onClick={handleClick}>Go to Settings</button>
    <br />
    <button onClick={()=>router.replace(`/`)}>Go to HOME !</button>
    <br />
    <button onClick={()=>router.reload()}> RELOAD </button>
    </>
};
export default Home ;