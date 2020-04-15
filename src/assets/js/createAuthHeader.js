const createAuthHeader = (token = '') => token ? { Authorization: `Token ${token}` } : {};
export default createAuthHeader;
 