async function greet(){
    // return "Kabilash";
    return new Promise((resolve,reject)=>{
        reject("kabilash")
    })
}
const response=greet();
console.log(response);

response.then((data)=>console.log(data))
.catch((error)=>{
    console.log("Error",error)
})