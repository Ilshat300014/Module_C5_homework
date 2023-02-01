const parser = new DOMParser();
const xml = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;
const xmlParse = parser.parseFromString(xml, 'text/xml');
const students = xmlParse.querySelectorAll('student');
const studentsList = [];
for (student of students) {
  const name = student.querySelector('name');
  const firstName = name.querySelector('first');
  const secondName = name.querySelector('second');
  const member = {
    name: `${firstName.textContent} ${secondName.textContent}`,
    age: student.querySelector('age').textContent,
    prof: student.querySelector('prof').textContent,
    lang: name.getAttribute('lang')
  };
  studentsList.push(member);
}
jsObject = {list: studentsList};

