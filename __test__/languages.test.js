const languages = require('../javascript/languages');

describe('Programming languages saved in an array', () => {
    test('Data about programming languages', () => {
        expect(languages([])).toEqual([, "JavaScript", , "Next.js", , "CSS"]);
    });
});