// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("Conversion from EUR to USD // 1 EUR = 1.2 USD", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.2 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("Conversion from USD to JPY // 1 USD = 102.32 JPY", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    const yen = fromDollarToYen(100)

    const expected = 100 * 102.32; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(100)).toBe(10232);
})

test("Conversion from JPY to GBP // 1 GBP = 159.875 JPY", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    const pound = fromYenToPound(1000)

    const expected = 1000 / 159.875; 
    
    // this is the comparison for the unit test
     expect(fromYenToPound(1000)).toBe(6.254886630179828);
})

