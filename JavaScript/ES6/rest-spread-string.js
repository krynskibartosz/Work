// Rest parameter
const f = (x, y, ...a) => {
    return (x + y) * a.length
}
f(1, 2, 'hello', true, 5); // 9

// Spread Operator
const str = 'hello';
const arr = [...str] // ['h','e','l','o'];

const params = ['hello', true, 7];
const otherPar = ['1', "3", ...params]  // [ 1, 3, "hello", true, 7 ]

// A revoir
const quux = (strings, ...values) => {
    console.log(strings[0]) //=== "foo\n"
    console.log(strings[1])// === "bar"
    console.log(strings.raw[0]) //=== "foo\\n"
    console.log(strings.raw[1]) //=== "bar"
    console.log(values[0])//=== 42
};
    quux`foo\n${ 42 }bar`

console.log(String.raw`foo\n${ 42 }bar` === "foo\\n42bar"); // true




