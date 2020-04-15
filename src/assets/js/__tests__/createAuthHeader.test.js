import createAuthHeader from '../createAuthHeader';

describe('tests for createAuthHeader function', () => {
	it('sends an empty object if no token is present', () => expect(createAuthHeader()).toEqual({}));

	it('creates headers object with Authorization key and token', () => {
		expect(createAuthHeader('randomToken')).toEqual({ Authorization: `Token randomToken`});
	});
});
