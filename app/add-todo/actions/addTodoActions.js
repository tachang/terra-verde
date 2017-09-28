export const updateInput = inputData =>
  ({ type: 'UPDATE_INPUT', payload: inputData });

export const changeTestProp = () =>
  ({ type: 'UPDATE_TEST_PROP', payload: 'Test props changed!!!' });
