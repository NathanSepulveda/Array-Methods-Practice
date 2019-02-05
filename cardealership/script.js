let totalProfitDisplay = document.getElementById("totalProfit")
let mostProfitableMonthDisplay= document.getElementById("mostProfitableMonth")
let mostSalesPerson= document.getElementById("mostSalesPerson")

console.log(carInfo[1].gross_profit)

let salesYears2017 = carInfo.filter(info => {
    let _2017 = false
    let purchaseDate = info.purchase_date.slice(0, 4)
    if (purchaseDate === "2017") {
        _2017 = true
    }
    return _2017
})

let allProfitInfo = salesYears2017.map(info => {
    return info.gross_profit
})

console.log(salesYears2017)

console.log(allProfitInfo)

let totalProfit = allProfitInfo.reduce(
    (currentTotal, nextValue) => currentTotal += nextValue,
    0
)

console.log(totalProfit)

totalProfitDisplay.innerHTML += totalProfit

// find month with most sales 
let months2017 = salesYears2017.map(year => {
    let month = year.purchase_date.slice(5, 7)
    return month
})

console.log(months2017)
let monthsCount = {}

months2017.forEach(month => {
    // console.log(month)
    if (monthsCount.hasOwnProperty(month) === false) {
        monthsCount[month] = 1
    } else if (monthsCount.hasOwnProperty(month)) {
        monthsCount[month] += 1
    }
})

console.table(monthsCount)
let bigNumber = Object.keys(monthsCount).reduce((a, b) => monthsCount[a] > monthsCount[b] ? a : b);

console.log(bigNumber)
mostProfitableMonthDisplay.innerHTML += bigNumber

//get best salesperson

let salesNames = salesYears2017.map(data => {
    let salesPeople = data.sales_agent.first_name + " " + data.sales_agent.last_name
    return salesPeople
})

console.log(salesNames)
let salesPeopleObject = {}

salesNames.forEach(person => {
    // console.log(month)
    if (salesPeopleObject.hasOwnProperty(person) === false) {
        salesPeopleObject[person] = 1
    } else if (salesPeopleObject.hasOwnProperty(person)) {
        salesPeopleObject[person] += 1
    }
})
console.table(salesPeopleObject)
let bestSeller = Object.keys(salesPeopleObject).reduce((a, b) => salesPeopleObject[a] > salesPeopleObject[b] ? a : b);
console.log(bestSeller)

mostSalesPerson.innerHTML += bestSeller