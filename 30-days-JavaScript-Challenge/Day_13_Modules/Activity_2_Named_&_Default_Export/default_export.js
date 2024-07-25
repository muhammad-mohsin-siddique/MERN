export default function greeting(name){

    if(name == undefined || name === ''){
        
        return `Invalid Input:  ${name} `;
    }else{
        return `Welcome ${name} to Our Website`;
    }
}