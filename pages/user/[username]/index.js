import {useRouter} from 'next/router'
const Home=()=>{
    const router=useRouter();
    const{username}=router.query;
    return <>
    <h1>This is the Index Page of {username}</h1>
    </>
};
export default Home ;