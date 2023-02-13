let test1 = 1;
let test2 = 0;
let test3 = "1";
let test4 = "0";
let test5 = "ten";
let test6 = true;
let test7 = false;
let test8 = undefined;
let test9 = null;
let test10 = "";
let test11 = '';

// Number to String;
test1 = String(test1);
test2 = String(test2);

// String to Number
test3 = Number(test2);
test4 = Number(test3);

// String to Number (NaN)
test5 = Number(test4);

// Boolean to String
test6 = String(test5);
test7 = String(test6);

// String to Boolean
test10 = Boolean(test9);
test11 = Boolean(test10);

// Undefined/Null to String
test8 = String(test7);
test9 = String(test8);