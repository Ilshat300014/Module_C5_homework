const json = `{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`;
const jsonParse = JSON.parse(json);
const studentsList = [];
for (student of jsonParse.list) {
  const member = {
    name: student.name,
    age: Number(student.age),
    prof: student.prof
  };
  studentsList.push(member);
}
const jsObject = {list: studentsList};

