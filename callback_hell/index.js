const orderDetails = {
    orderID: 123123,
    food: ["Pizza", "Biryani", "Coke"],
    cost: 620,
    customer_name: "Rohit",
    customer_location: "Dwarka",
    restaurant_location: "Delhi"
};

function placedOrder(orderDetails, callback) {
    console.log(`₹${orderDetails.cost} payment is in progress...`);

    setTimeout(() => {
        console.log("✅ Payment received and order placed.");
        orderDetails.status = "Order Placed";

        callback(orderDetails);
    }, 3000);
}

function preparingOrder(orderDetails, callback) {
    console.log(`👨‍🍳 Preparing: ${orderDetails.food.join(", ")}`);

    setTimeout(() => {
        console.log("✅ Food is prepared.");
        orderDetails.status = "Food Prepared";

        callback(orderDetails);
    }, 3000);
}

function pickupOrder(orderDetails) {
    console.log("🚴 Delivery boy is on the way to pick up the order.");

    setTimeout(() => {
        console.log("✅ Delivery boy picked up the order.");
        orderDetails.status = "Picked Up";

        console.log("Final Order Details:");
        console.log(orderDetails);
    }, 3000);
}

placedOrder(orderDetails, (orderDetails) => {
    preparingOrder(orderDetails, (orderDetails) => {
        pickupOrder(orderDetails);
    });
});