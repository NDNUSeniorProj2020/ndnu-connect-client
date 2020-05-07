export default function validatePhoneNumber(value = '') {
  const phoneNumRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return value.match(phoneNumRegex) ? true : false;
}
