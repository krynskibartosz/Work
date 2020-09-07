//  Difference between objectES6 && objestES5
// shortand property
// ES6
let x = 0, y = 1;
obj6 = {x, y}
// ES5
let a = 0, b = 1;
obj5 = {a: a, b: b};

// computed property name
// ES6
let objES6 = {
    foo: "bar",
    [ "baz" + quux() ]: 42
}
// ES5
let objES5 = {
    foo: "bar"
};
objES5[ "baz" + quux() ] = 42;

// method property
// ES6
let es6 = {
    foo (a, b) {
        a + b
    }
}
// ES5
let es5 = {
    foo: function (a, b) {
        a + b
    }
}