export default function cleanSet(set, startString) {
  const stringsArray = [];
  if (startString === '') return '';
  for (const item of set) {
    if (item.startsWith(startString)) {
      stringsArray.push(item);
    }
  }
  return stringsArray.map((str) => str.slice(startString.length)).join('-');
}
