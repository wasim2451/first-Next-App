// To display the User from the URL 
import {useRouter} from 'next/router';
export default function (){
    const {query}=useRouter();
    // console.log(router);
    
    return <>
        <div>This is a Dynamic Route of : {query.username}</div>
    </>
};