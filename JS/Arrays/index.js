/**
 * slice: get data by range without modified array
 * splice: remove data by range
 */

let names = ["joão", "gabriel", "carvalho", "lopes", "cruz"]
let obj = [{"name": "first"}, {"name": "second"}, {"name": "third"}, {"name": "fourth"}]

const sl = names.slice(0, 3)
console.log(sl)
console.log(names)

const sp = names.splice(0, 3)
console.log(sl)
console.log(names)

console.log("Sorting")
console.log(obj.sort((first, second) => first.name.localeCompare(second.name)))
console.log(obj.sort((first, second) => first.name.localeCompare(second.name)).reverse())

let some = [{
    name: "joão", 
    enabled: false, 
    value: 10
}, 
{
    name: "antonio", 
    enabled: false, 
    value: 15
}, 
{
    name: "lais", 
    enabled: true, 
    value: 25
}]

//map
some.map((element, index) => {
    if (element.enabled == false) {
        element.name = "modified"
    }
});
console.log(some)

//filter
const resultFilter = some.filter((element, index) => { return element.enabled})
console.log(resultFilter)

//find (findFirst())
const resultFind = some.find((element, index) => {
    return !element.enabled
})

console.log(resultFind)

//every - Does each element in the collection satisfy that condition? if yes then true
const resultEvery = some.every((element, index) => {
    return !element.enabled
})

console.log(typeof resultEvery)
console.log(resultEvery)


//some - Does at least one element in the collection satisfy this condition? if yes then true
const resultSome = some.some((element, index) => {
    return !element.enabled
})
console.log(typeof resultSome)
console.log(resultSome)

//reduce
const totalValue = some.reduce((total, element) => {
    return total + element.value
}, 0)

console.log(totalValue)