let text = 'India'

let mySet = new Set(text)  // Set ['I', 'n', 'd', 'i', 'a']
mySet.size  // 5

// Set allow us to create a collection of unique value
//case sensitive & duplicate ommision
new Set("Firefox")  // Set(7) [ "F", "i", "r", "e", "f", "o", "x" ]
new Set("firefox")  // Set(6) [ "f", "i", "r", "e", "o", "x" ]