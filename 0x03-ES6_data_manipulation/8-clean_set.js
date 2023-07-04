const cleanSet = (set, startString) => {
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }
  let result = '';
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      result += `-${value.slice(startString.length)}`;
    }
  });
  return result.slice(1);
};

export default cleanSet;
