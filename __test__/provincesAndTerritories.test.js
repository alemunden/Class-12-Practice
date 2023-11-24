const provincesAndTerritories = require('../javascript/provincesAndTerritories');

const provTerr = [
    "Alberta", "British Columbia", "Manitoba", 
    "New Brunswick", "Newfoundland", "Labrador", 
    "Nova Scotia", "Ontario", "Prince Edward Island", 
    "Quebec", "Saskatchewan", "Nunavut", 
    "The Northwest Territories", "Yukon"
];

describe('Testing Territories', () => {
    test('Data about Nunavut', () => {
        try {
            expect(provincesAndTerritories(provTerr, 11)).toEqual("Nunavut");
        } catch(error) {
            expect(error.message).toBe("UNKNOWN ERROR");
        }
    });

    test('Data about Northwest Territories', () => {
        try{
            expect(provincesAndTerritories(provTerr, 12)).toEqual("Northwest Territories");
        } catch(error) {
            expect(error.message).toBe("UNKNOWN ERROR");
        }
    });

    test('Data about Yukon', () => {
        try {
            expect(provincesAndTerritories(provTerr, 13)).toEqual("Yukon");
        } catch(error) {
            expect(error.message).toBe("UNKNOWN ERROR");
        }
    });
});

describe('Testing Provinces', () => {
    test('Data about Alberta', () => {
        try {
            expect(provincesAndTerritories(provTerr, 0)).toEqual("Alberta");
        } catch(error) {
            expect(error.message).toBe("UNKNOWN ERROR");
        }
    });

    test('Data about British Columbia', () => {
        try {
            expect(provincesAndTerritories(provTerr, 1)).toEqual("British Columbia");
        } catch(error) {
            expect(error.message).toBe("UNKNOWN ERROR");
        }   
    });

    test('Data about Manitoba', () => {
        try {
            expect(provincesAndTerritories(provTerr, 2)).toEqual("Manitoba");
        } catch(error) {
            expect(error.message).toBe("UNKNOWN ERROR");
        }
    });

    test('Data about New Brunswick', () => {
        try {
            expect(provincesAndTerritories(provTerr, 3)).toEqual("New Brunswick");
        } catch(error) {
            expect(error.message).toBe("UNKNOWN ERROR");
        }
    });

    test('Data about Newfoundland and Labrador', () => {
        try {
            expect(provincesAndTerritories(provTerr, 4)).toEqual("Newfoundland");
        } catch(error) {
            expect(error.message).toBe("UNKNOWN ERROR");
        }
    });

    test('Data about Nova Scotia', () => {
        try {
            expect(provincesAndTerritories(provTerr, 6)).toEqual("Nova Scotia");
        } catch(error) {
            expect(error.message).toBe("UNKNOWN ERROR");
        }
    });
    
    test('Data about Ontario', () => {
        try {
            expect(provincesAndTerritories(provTerr, 7)).toEqual("Ontario");
        } catch(error) {
            expect(error.message).toBe("UNKNOWN ERROR");
        }
    });

    test('Data about Prince Edward Island', () => {
        try {
            expect(provincesAndTerritories(provTerr, 8)).toEqual("Prince Edward Island");
        } catch(error) {
            expect(error.message).toBe("UNKNOWN ERROR");
        }
    });

    test('Data about Quebec', () => {
        try {
            expect(provincesAndTerritories(provTerr, 9)).toEqual("Quebec");
        } catch(error) {
            expect(error.message).toBe("UNKNOWN ERROR");
        }
    });

    test('Data about Saskatchewan', () => {
        try {
            expect(provincesAndTerritories(provTerr, 10)).toEqual("Saskatchewan");
        } catch(error) {
            expect(error.message).toBe("UNKNOWN ERROR");
        }
    });
});