const { expect } = require('chai');

const additionMutator = require('../problems/04-addition-mutator');

describe('additionMutator()', function () {
	it('mutates the input array (does not create a copy of the array)', function () {
		const inputArr = [1, 2, 3, 4];
		const inputNum = 3;
		const outputArr = [4, 5, 6, 7];

		additionMutator(inputArr, inputNum);
		expect(inputArr).to.deep.equal(outputArr);
	});

	it('mutates the input array containing positive integers', function () {
		const inputArr = [4, 17, 1, 2222, 50, 6];
		const inputNumOne = 30;
		const inputNumTwo = -2;
		const outputArrOne = [34, 47, 31, 2252, 80, 36];
		const outputArrTwo = [32, 45, 29, 2250, 78, 34];

		additionMutator(inputArr, inputNumOne);
		expect(inputArr).to.deep.equal(outputArrOne);

		additionMutator(inputArr, inputNumTwo);
		expect(inputArr).to.deep.equal(outputArrTwo);
	});

	it('mutates the input array containing negative integers', function () {
		const inputArr = [-2, -27, -10, -333, -90, -7];
		const inputNumOne = 5;
		const inputNumTwo = -50;
		const outputArrOne = [3, -22, -5, -328, -85, -2];
		const outputArrTwo = [-47, -72, -55, -378, -135, -52];

		additionMutator(inputArr, inputNumOne);
		expect(inputArr).to.deep.equal(outputArrOne);

		additionMutator(inputArr, inputNumTwo);
		expect(inputArr).to.deep.equal(outputArrTwo);
	});
});
