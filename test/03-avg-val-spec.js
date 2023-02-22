const { expect } = require('chai');

const avgVal = require('../problems/03-avg-val');

describe('avgVal()', function () {
	it('returns average of integer values in array', function () {
		const inputArrOne = [200, 100, 5, 3];
		const inputArrTwo = [-4, -6];

		const outputOne = 77;
		const outputTwo = -5;

		expect(avgVal(inputArrOne)).to.equal(outputOne);
		expect(avgVal(inputArrTwo)).to.equal(outputTwo);
	});

	it('returns average when array is of odd length', function () {
		const inputArrOne = [1];
		const inputArrTwo = [3, 6, 9, 11, 19];

		const outputOne = 1;
		const outputTwo = 9.6;

		expect(avgVal(inputArrOne)).to.equal(outputOne);
		expect(avgVal(inputArrTwo)).to.equal(outputTwo);
	});

	it('returns null if the array is empty', function () {
		const inputArr = [];

		expect(avgVal(inputArr)).to.equal(null);
	});
});
