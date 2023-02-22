const chai = require('chai');
const spies = require('chai-spies');

const expect = chai.expect;
chai.use(spies);

const myIncludes = require('../problems/01-my-includes');

describe('myIncludes()', function () {
	let inputArrOne;
	let inputArrTwo;

	beforeEach(() => {
		inputArrOne = [3, 5, 7, 8, 11];
		inputArrTwo = ['A', 'b', 'z', 'E'];
	});

	it('returns "true" if target is present within input array', function () {
		const targetOne = 5;
		const targetTwo = 'b';

		expect(myIncludes(inputArrOne, targetOne)).to.be.true;
		expect(myIncludes(inputArrTwo, targetTwo)).to.be.true;
	});

	it('returns "false" if target is NOT present within input array', function () {
		const targetOne = -50;
		const targetTwo = 'H';

		expect(myIncludes(inputArrOne, targetOne)).to.be.false;
		expect(myIncludes(inputArrTwo, targetTwo)).to.be.false;
	});

	it('does not use the built in Array.includes() and Array.indexOf() methods', function () {
		const includesSpyOne = chai.spy.on(inputArrOne, ['includes', 'indexOf']);
		const includesSpyTwo = chai.spy.on(inputArrTwo, ['includes', 'indexOf']);

		const targetOne = 7;
		const targetTwo = 'W';

		myIncludes(inputArrOne, targetOne);
		myIncludes(inputArrTwo, targetTwo);

		expect(includesSpyOne[0]).to.not.have.been.called();
		expect(includesSpyOne[1]).to.not.have.been.called();
		expect(includesSpyTwo[0]).to.not.have.been.called();
		expect(includesSpyTwo[1]).to.not.have.been.called();
	});
});
