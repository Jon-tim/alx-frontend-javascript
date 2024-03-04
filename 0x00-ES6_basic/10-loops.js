export default function appendToEachArrayValue(array, appendString) {
  let modified = [];
  let index = 0;
  for (const value of array) {
    modified[index] = appendString + value;
    index++;
  }

  return modified;
}
