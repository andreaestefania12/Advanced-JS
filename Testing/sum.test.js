const sum = require('./sum');

/*
test('adds 1 + 2 to equal 3', () => {
	expect(sum(1,2)).toBe(3);
});*/

test('two plus two is four',() =>{
	expect(2+2).toBe(4); // toBe uses object.is
});

test('object assignment',() =>{
	const data = {one:1};
	data['two'] = 2;
	expect(data).toEqual({one:1,two:2}); // toEqual recursively checks every field of an object or array.
});

// Opposite of a matcher

test('adding positive numbers is not zero',()=>{
	for(let a = 1; a < 10; a++){
		for(let b = 1; b < 10; b++){
			expect(a+b).not.toBe(0);
		}	
	}
});


// Truthiness

test('null',() => {
	const n = null;
	expect(n).toBeNull();
	expect(n).toBeDefined();
	expect(n).not.toBeUndefined();
	expect(n).not.toBeTruthy();
	expect(n).toBeFalsy();
});


test('zero',() => {
	const z = 0;
	expect(z).not.toBeNull();
	expect(z).toBeDefined();
	expect(z).not.toBeUndefined();
	expect(z).not.toBeTruthy();
	expect(z).toBeFalsy();
});




// NUMBERS
test('two plus two',() => {
	const value = 2 + 2;
	expect(value).toBeGreaterThan(3);
	expect(value).toBeGreaterThanOrEqual(3.5);
	expect(value).toBeLessThan(5);
	expect(value).toBeLessThanOrEqual(4.5);
	// toBe and toEqual are equivalent for numbers
	expect(value).toBe(4);
	expect(value).toEqual(4);
});

// For floating point equality use tobecloseto instead of to equal


test('adding floating point numbers',() => {
	const value = 0.1 + 0.2;
	expect(value).toBeCloseTo(0.3);
	//expect(value).toBe(0.3) This won't work cause of rounding error
	
});


// STRINGS 
test('there is no I in team',() => {
	expect('team').not.toMatch(/I/);
	
});
test('but there is a stop in Christoph',() => {
	expect('Christoph').not.toMatch(/stop/);
	
});



// ARRAYS AND ITERABLES 
const shoppingList = [
	'diapers',
	'kleenex',
	'trash bags',
	'paper towels',
	'milk',
];
test('the shopping list has milk on it',() => {
	expect(shoppingList).toContain('milk');
	expect(new Set(shoppingList)).toContain('milk');
});

// EXCEPTIONS

function compileAndroidCode(){
	throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected',() => {
	expect(() => compileAndroidCode()).toThrow();
	expect(() => compileAndroidCode()).toThrow(Error);
	
	// can also use the exact error message or a regexp
	expect(() => compileAndroidCode()).toThrow('You are using the wrong JDK');
	expect(() => compileAndroidCode()).toThrow(/JDK/);
});



// --------------------

// TESTING ASYNCHRONOUS CODE

// CALLBACKS

test('the data is peanut butter',() => {
	function callback(data) {		
		expect(data).toBe('peanut butter');
	}
	fetchData(callback);
});


test('the data is peanut butter', done => {
	function callback(data) {
		try{		
			expect(data).toBe('peanut butter');
			done();
		}catch(error) {
			done(error); 
		}
	}
	fetchData(callback);
});

// if done is never called, the test will fail with timeout error



// PROMISES

test('the data is peanut butter',() => {
	return fetchData().then(data => {
		expect(data).toBe('peanut butter');
	});
});


test('the fetch fails with an error', () => {
	expect.assertions(1);
	return fetchData().cache(e => expect(e).toMatch('error'));
});



// resolves and rejects 

test('the data is peanut butter', () => {
	return expect(fetchData()).resolves.toBe('peanut butter');
});


test('the fetch fails with an error', () => {
	return expect(fetchData()).rejects.toMatch('error');
});


// ASYNC AWAIT

test('the data is peanut butter',async () => {
	const data = await fetchData();
	expect(data).toBe('peanut butter');
});

test('the fetch fails with an error',async () => {
	expect.assertions(1);
	try {
		await fetchData();
	} catch (e){
		expect(e).toMatch('error');
	}
});

// you can combine asyn and await with resolves or rejects
test('the data is peanut butter',async () => {
	await expect(fetchData()).resolve.toBe('peanut butter');
});


test('the fetch fails with an error',async () => {
	await expect(fetchData()).rejects.toMatch('error');
});

// ----------------


// SETUP AND TEARDOWN

beforeEach(() => {
	initializeCityDatabase();
});

afterEach(() => {
	clearCityDatabase();
});

test('city database has Vienna', () => {
	expect(isCity('Vienna')).toBeTruthy;
});
test('city database has San Juan', () => {
	expect(isCity('San Juan')).toBeTruthy;
});


// ONE TIME SET UP
// returned promises

beforeEach(() => {
	return initializeCityDatabase(); 
	
}); 

afterEach(() => {
	return clearCityDatabase();
});

test('city database has Vienna', () => {
	expect(isCity('Vienna')).toBeTruthy;
});
test('city database has San Juan', () => {
	expect(isCity('San Juan')).toBeTruthy;
});


// SCOPING
beforeEach(() => {
	return initializeCityDatabase(); 
	
}); 

test('city database has Vienna', () => {
	expect(isCity('Vienna')).toBeTruthy;
});
test('city database has San Juan', () => {
	expect(isCity('San Juan')).toBeTruthy;
});


describe('matching cities to foods' , () => {
	beforeEach(() => {
		return initializeFoodDatabase(); 
	}); 
	
	test('Vienna <3 veal', () => {
	expect(isValidCityFoodPair('Vienna','Wiener schnitzel')).toBe(true);
	});
	test('San Juan <3 plantains', () => {
	expect(isValidCityFoodPair('San Juan','Mofongol')).toBe(true);
	});
	

});




