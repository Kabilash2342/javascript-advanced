// // async function greet(){
// //     // return "Kabilash";
// //     return new Promise((resolve,reject)=>{
// //         reject("kabilash")
// //     })
// // }
// // const response=greet();
// // console.log(response);

// // response.then((data)=>console.log(data))
// // .catch((error)=>{
// //     console.log("Error",error)
// // })
 
// const response=await fetch("https://api.github.com/users");
// const data=await response.json();
// console.log(data);

async function github() {
    try {
        const response = await fetch("https://api.github.com/users");
        const data = await response.json();

        const parent = document.getElementById("first");

        for (let user of data) {
            const element = document.createElement("div");
            element.classList.add("user");

            const image = document.createElement("img");
            image.src = user.avatar_url;

            const userName = document.createElement("h2");
            userName.textContent = user.login;

            const anchor = document.createElement("a");
            anchor.href = user.html_url;
            anchor.textContent = "Visit Profile";
            anchor.target = "_blank";

            element.append(image, userName, anchor);
            parent.append(element);
        }
    } catch (error) {
        console.log(error);

        const parent = document.getElementById("first");
        parent.textContent = "Something went wrong!";
    }
}

github();