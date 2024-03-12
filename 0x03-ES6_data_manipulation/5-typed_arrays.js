export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const int8View = new Int8Array(buffer);
  try {
    int8View[position] = value;
  } catch (e) {
    throw new Error('Position outside range');
  }

  return buffer;
}
