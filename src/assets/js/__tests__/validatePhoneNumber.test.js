import validatePhoneNumber from '../validatePhoneNubmer';

describe('tests for validatePhoneNumber', () => {
  it('returns true for format (XXX) XXX-XXXX', () => {
    expect(validatePhoneNumber('(555) 555-5555')).toBe(true);
  });

  it('returns true for format (XXX)XXX-XXXX', () => {
    expect(validatePhoneNumber('(555)555-5555')).toBe(true);
  });

  it('returns true for format XXX-XXX-XXXX', () => {
    expect(validatePhoneNumber('555-555-5555')).toBe(true);
  });

  it('returns false if phone number is too short', () => {
    expect(validatePhoneNumber('555-5555')).toBe(false);
    expect(validatePhoneNumber('5555')).toBe(false);
    expect(validatePhoneNumber('555')).toBe(false);
    expect(validatePhoneNumber('')).toBe(false);
  });
});
