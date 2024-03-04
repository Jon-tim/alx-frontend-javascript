export default function appendToEachArrayValue(array, appendString) {
  const modified = [];
  let index = 0;
  for (const value of array) {
    modified[index] = appendString + value;
    index++;
  }

  return modified;
}
