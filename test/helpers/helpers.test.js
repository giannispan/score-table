import { expect } from 'chai';
import { splitArrayInArrays } from '../../utils';

const array1 = ['item1', 'item2', 'item3', 'item4'];

const array2 = [
  ['item1', 'item2'],
  ['item3', 'item4']
];

describe('split array', () => {
  it('should split array1 in 2 arrays', () => {
    const result = splitArrayInArrays(array1, 2);
    expect(result).to.eql(array2);
  });
});
