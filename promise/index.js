// // // console.log("Hello worl Start");


// // // const p1=fetch("https://api.github.com/users");
// // // console.log(p1)
// // // const p2=p1.then((response)=>{
// // //     return(response.json());
// // // })
// // // p2.then((response)=>{
// // //     console.log(response);
// // // })





// // // console.log("Hello world end");

// // fetch("https://api.github.com/users").then((response)=>{
// //     return response.json();
// // })
// // .then((data)=>{
// //     const parent=document.getElementById('first');
// //     const image=document.createElement('img');
// //     image.src=data[0].avatar_url;
// //     parent.append(image);

// // })
// // .catch((error)=>{
// //     const parent=document.getElementById("first");
// //     parent.textContent=error.message;
// // });

// const p1=new Promise((resolve,reject)=>{
//     resolve({
//         name:"Rohit",
//         age:30,
//     });
// })
// p1.then((response)=>{
//     console.log(response);
// }).catch((error)=>{
//     console.log(error);
// })

const orderDetails = {
    orderID: 123123,
    food: ["Pizza", "Biryani", "Coke"],
    cost: 620,
    customer_name: "Rohit",
    customer_location: "Dwarka",
    restaurant_location: "Delhi"
};

function placedOrder(orderDetails,) {
    console.log(`₹${orderDetails.cost} payment is in progress...`);

   return new Promise((resolve,reject)=>{

        setTimeout(() => {
        console.log("✅ Payment received and order placed.");
        orderDetails.status = "Order Placed";
        resolve(orderDetails);

        
    }, 3000);
})


    }

    
function preparingOrder(orderDetails) {
    console.log(`👨‍🍳 Preparing: ${orderDetails.food.join(", ")}`);

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        console.log("✅ Food is prepared.");
        orderDetails.status = "Food Prepared";
        resolve(orderDetails);

        
    }, 3000);
        
    }) 

    
}

function pickupOrder(orderDetails) {
    console.log("🚴 Delivery boy is on the way to pick up the order.");

    return new Promise((resolve,reject)=>{
         setTimeout(() => {
        console.log("✅ Delivery boy picked up the order.");
        orderDetails.status = "Picked Up";

        console.log("Final Order Details:");
        console.log(orderDetails);
        resolve(orderDetails);
    }, 3000);
        
    })

   
}

placedOrder(orderDetails)
.then((orderDetails)=>preparingOrder(orderDetails))
.then((orderDetails)=>pickupOrder(orderDetails))
.catch((error)=>{
    console.log("Error",error.message);
})
