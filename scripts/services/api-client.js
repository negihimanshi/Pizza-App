//Network Call Code
import URL from '../utils/constant.js';
async function makeNetworkCall(){
    try{
        const response = await fetch(URL); //Block
        const object = await response.json();  //Block
        return object; //Wrap Promise
    }
    catch(err){
        console.log('Some Problem in API Call ', err);
        throw err;
    }
}

    //     const promise = fetch(url);  //Assign to Thread
//     console.log('Promise is', promise);
//     promise.then(response => {
//         console.log('Response is ', response);
//         const promise2 = response.json(); // Deserialization (JSON to Object)
//         promise2.then(data=>console.log('Data is ', data))
//         .catch(e=>console.log('JSON parse Error ', e));
//     }).catch(err => {
//         console.log('Error is', err);
//     });
//     console.log('Good Bye');
// }

export default makeNetworkCall;