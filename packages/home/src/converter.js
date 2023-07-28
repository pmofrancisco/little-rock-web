import * as R from 'ramda';

export const convertToNumber = (value) => {

  if (R.type(value) === 'Number') {
    return value;
  }

  try {
    if (R.type(value) === 'String' && R.includes('K', value)) {
      const [newValue] = R.split('K', value);
      return Number((Number(newValue) * 1000).toFixed(2));
    }
    if (R.type(value) === 'String' && R.includes('M', value)) {
      const [newValue] = R.split('M', value);
      return Number((Number(newValue) * 1000000).toFixed(2));
    }
    if (R.type(value) === 'String' && R.includes('B', value)) {
      const [newValue] = R.split('B', value);
      return Number((Number(newValue) * 1000000000).toFixed(2));
    }
  } catch {
    throw new Error('Something went wrong');
  }

  throw new Error('Invalid value or type');
}