import getListStudents from "./0-get_list_students.js";
export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.map((arrItem) => arrItem.id);
}
