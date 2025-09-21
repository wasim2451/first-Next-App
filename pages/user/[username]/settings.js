import {useRouter} from 'next/router'
const Settings=()=>{
    const router=useRouter();
    const{username}=router.query;
    return <>
    <h1>This is the Settings Page of {username}</h1>
    </>
};
export default Settings ;