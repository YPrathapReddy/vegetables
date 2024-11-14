let vegetabelContainerEl = document.getElementById("vegetabelContainer");
let calculateCostEl = document.getElementById("calculateCost");
let displayCostEl = document.getElementById("displayCost")
let getHomeDeliveryEl = document.getElementById("getHomeDelivery");
let displayDeliveryCostEl = document.getElementById("displayDeliveryCost");

let groceryList = [{
        name: "TOMATO",
        price: 40,
        gramPrice: 0.04,
        id: "item1",
    },
    {
        name: "POTATO",
        price: 30,
        gramPrice: 0.03,
        id: "item2",

    },
    {
        name: "BRINJAL",
        price: 40,
        gramPrice: 0.04,
        id: "item3",
    },
    {
        name: "CUCUMBER",
        price: 50,
        gramPrice: 0.05,
        id: "item4",
    },
    {
        name: "LADIESFINGER",
        price: 50,
        gramPrice: 0.05,
        id: "item5",
    },
    {
        name: "CABBAGE",
        price: 40,
        gramPrice: 0.04,
        id: "item6",
    },
    {
        name: "CALIFLOWER",
        price: 60,
        gramPrice: 0.06,
        id: "item7",
    },
    {
        name: "CARROT",
        price: 80,
        gramPrice: 0.08,
        id: "item8",
    },
    {
        name: "CAPSICUM",
        price: 60,
        gramPrice: 0.06,
        id: "item9",
    },
    {
        name: "GREEN CHILLI",
        price: 70,
        gramPrice: 0.07,
        id: "item10",
    },
    {
        name: "WHITE ONION",
        price: 60,
        gramPrice: 0.06,
        id: "item11",
    },

];

for (let eachItem of groceryList) {
    let itemContainer = document.createElement("div");
    itemContainer.classList.add("d-flex", "flex-row", "justify-content-center", "mb-2");
    vegetabelContainerEl.appendChild(itemContainer);

    let vegetableName = document.createElement("h5");
    vegetableName.classList.add("vegetable-item", "mr-5");
    vegetableName.textContent = eachItem.name;
    itemContainer.appendChild(vegetableName);

    let vegetablePrice = document.createElement("h5");
    vegetablePrice.classList.add("vegetable-price", "mr-5");
    vegetablePrice.textContent = eachItem.price;
    itemContainer.appendChild(vegetablePrice);

    let vegetableQunatity = document.createElement("input");
    vegetableQunatity.type = "text";
    vegetableQunatity.id = eachItem.id;
    // vegetableQunatity.setAttribute("placeHolder", "grams")
    vegetableQunatity.classList.add("vegetable-quantity");
    itemContainer.appendChild(vegetableQunatity);

}
let totalCost;
let savedAmount;
let totalWeight;
let deliveryTotalCost;
calculateCostEl.onclick = function() {
    totalCost = 0
    savedAmount = 0
    totalWeight = 0;
    for (let eachItem of groceryList) {
        let vegetableQunatityCostEl = document.getElementById(eachItem.id);
        let vegetablueValue = vegetableQunatityCostEl.value;
        let cost1 = vegetablueValue / 100;
        vegetablueValue = Math.ceil(cost1) * 100;
        if (vegetablueValue > 0) {
            vegetableQunatityCostEl.value = vegetablueValue;
            totalWeight = totalWeight + vegetablueValue;
        } else {
            vegetableQunatityCostEl.value = "";
        }

        // console.log( vegetablueValue)
        if (vegetablueValue > 0) {
            let itemPrice = vegetablueValue * eachItem.gramPrice;
            totalCost = totalCost + itemPrice;
        }
    }
    let totalCost1 = totalCost
    if (totalCost >= 500) {
        savedAmount = (totalCost1 * 10) / 100;
        totalCost = totalCost - (totalCost * 10) / 100;

    } else if (totalCost >= 200) {
        totalCost = totalCost - (totalCost * 5) / 100;
        savedAmount = (totalCost1 * 5) / 100;
    }
    displayCostEl.classList.add("display-cost", "ml-5", "mt-4")
    if (savedAmount > 0) {
        displayCostEl.textContent = "Cost = " + totalCost + ", and you saved = " + savedAmount;
    } else {
        displayCostEl.textContent = "Cost = " + totalCost;
    }
    console.log(`Amount = ${totalCost}`);
    console.log(`saved = ${savedAmount}`);
    getHomeDeliveryEl.classList.remove("d-none");
}
getHomeDeliveryEl.onclick = function() {
    deliveryTotalCost = 0;
    console.log(`weight = ${totalWeight}`);
    if (totalCost > 0) {
        if (totalWeight < 10000) {
            deliveryTotalCost = totalCost + 100;
            displayDeliveryCostEl.textContent = "Total Cost With Delivery = " + deliveryTotalCost;
        } else {
            deliveryTotalCost = totalCost + (totalWeight * 0.01);
            displayDeliveryCostEl.textContent = "Total Cost With Delivery = " + deliveryTotalCost;
        }
    } else {
        displayDeliveryCostEl.textContent = "sorry sir/madam, you didn't add any item."
    }
    console.log(`total = ${deliveryTotalCost}`)
    displayDeliveryCostEl.classList.add("display-cost", "ml-5", "mt-4");


}
