function placedOrder(callback){
    console.log("Payment is in progress")
    setTimeout(()=>{
        console.log("Payment is received and order get placed");
        callback();
    },3000)
}

function preparingOrder(callback){
    console.log("Your food prepartion started")
    setTimeout(()=>{
        console.log("Your order is now placed");
        callback();
    },3000);
} 

function pickupOrder(){
    console.log("Delivey boy is on his way to pickup the order");
    setTimeout(()=>{
        console.log("I have picked up the order");
    },3000)
}
placedOrder(()=>{
    preparingOrder(()=>{
        pickupOrder();
    });
});