console.log("Hello world start");

const pi=fetch("https://api.github.com/users")

.then((response)=>{
    return response.json();
})
.then((data)=>{
 const parent=document.getElementById("first");
 const image=document.createElement('img');
 image.src=data[0].avatar_url;
 parent.append(image);
})



console.log("Hello world end");