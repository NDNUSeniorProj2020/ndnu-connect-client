import createError from '../createError';

describe('tests for createError', () => {
  it('creates error message', () => {
    const errors = { err: ['Cannot complete.'] };
    expect(createError(errors)).toEqual('Cannot complete.');
  });

  it('should return empty if errors contains a key called details', () => {
    const errors = { detail: 'Invalid' };
    expect(createError(errors)).toEqual('');
  });
});
