export default function(errors) {
  let msg = '';

  for (let key in errors) {
    if (key.includes('detail')) {
      break;
    } else {
      msg += errors[key][0];
    }
  }

  return msg;
}
