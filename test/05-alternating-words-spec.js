const { expect } = require('chai');

const alternatingWords = require('../problems/05-alternating-words');

describe('alternatingWords()', function () {
	it('mutates the input array (does not create a copy of the array)', function () {
		const inputArr = ['Death', 'STAR'];
		const outputArr = ['DEATH', 'star'];

		alternatingWords(inputArr);
		expect(inputArr).to.deep.equal(outputArr);
	});

	it('mutates the input array of even length to have alternating upper and lower case words', function () {
		const inputArrOne = ['jedi', 'Darth Vader', 'STORMTROOPER', 'WOOKIEE'];
		const inputArrTwo = ['Luke', 'Sith', 'Boba Fett', 'jawa', 'DROID', 'Force'];

		const outputOne = ['JEDI', 'darth vader', 'STORMTROOPER', 'wookiee'];
		const outputTwo = ['LUKE', 'sith', 'BOBA FETT', 'jawa', 'DROID', 'force'];

		alternatingWords(inputArrOne);
		alternatingWords(inputArrTwo);

		expect(inputArrOne).to.deep.equal(outputOne);
		expect(inputArrTwo).to.deep.equal(outputTwo);
	});

	it('mutates the input array of odd length to have alternating upper and lower case words', function () {
		const inputArrOne = ['Ewoks'];
		const inputArrTwo = ['Han Solo', 'Darth Maul', 'Jar Jar Binks'];

		const outputOne = ['EWOKS'];
		const outputTwo = ['HAN SOLO', 'darth maul', 'JAR JAR BINKS'];

		alternatingWords(inputArrOne);
		alternatingWords(inputArrTwo);

		expect(inputArrOne).to.deep.equal(outputOne);
		expect(inputArrTwo).to.deep.equal(outputTwo);
	});
});
