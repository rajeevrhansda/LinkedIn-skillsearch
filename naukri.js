const skills = [
  "HTML-HTML5-HTML5-HTML5- HTML-HTML-HTML-HTML-HTML- HTML-HTML-HTML-html-HTML5- HTML5-HTML 5-HTML-HTML5-HTML-HTML-HTML5-HTML5- HTML-HTML-HTML",
  "Cascading Style Sheets (CSS)-CSS-CSS3-Cascading Style Sheets(CSS)-CSS3-Cascading Style Sheets (CSS)-CSS-CSS-CSS-CSS-CSS-CSS-CSS-CSS-css-CSS3-CSS3-CSS 3-CSS3-CSS-CSS-CSS3-CSS-CSS-CSS",
  "Javascript-JavaScript-JavaScript-JavaScript-JavaScript-JavaScript-JavaScript-JavaScript-JavaScript-JavaScript-JavaScript-JavaScript-JavaScript-javascript-JavaScript-JavaScript-JavaScript-JavaScript-JavaScript-JavaScript-JavaScript-JavaScript (ES6)- Java script-Javascript-Java script",
  "Front-End Development-Front-End Development-Front-End Development",
  "Tailwind CSS",
  "Sass",
  "Less",
  "TypeScript",
  "Vanilla JavaScript",
  "Angular-Angular-Angular 7.0-AngularJS-AngularJS-Angular 7.0- Angular 2+-Angular 2-Angular-Angular",
  "Vue.js",
  "React-React.js-React.js-React-React.js-ReactJS-ReactJS-ReactJS-ReactJS-ReactJS-ReactJS-ReactJS-React-React.js-Reactjs-Reactjs- React.js-ReactJS-ReactJS-React",
  "Next.js",
  "Redux",
  "Bootstrap-Bootstrap-Bootstrap-Bootstrap-Bootstrap-Bootstrap-Bootstrap",
  "Material-UI-Material-Ui",
  "Web Design-Web Design-Web Development-Web Technologies-Web Design",
  "Web Development-Web Development-Back-End Web Development-Web Development",
  "Web Technologies",
  "API Development-API Development",
  "Representational State Transfer (REST)-REST APIs-REST API-REST API-REST API-REST API-RESTful APIs--RESTful- REST APIs-REST APIs",
  "AJAX",
  "JSON",
  "Back-End Web Development-Back-End Web Development",
  "Node.js-Node.js-Node.js-Node.js-Node.js-Node.js--Node.js-Node.js-Node.js-Node.js-Node.js-Node.js-NodeJS-Nodejs-Nodejs-Node.js-Node.js-Node.Js-Node.Js",
  "express-Express.js-Express.js-Express.js-Express.js-Express.js-Express-Express.js-Express",
  "SQL-SQL-SQL-SQL-SQL",
  "MySQL-MySQL-MySQL",
  "NoSQL-NoSQL-NoSQL-NoSQL-NOSQL",
  "MongoDB-MongoDB-MongoDB-MongoDB-MongoDB-MongoDB-MongoDB-MongoDB-MongoDB-MongoDB-MongoDB-MongoDB",
  "Git-git-GIT-git",
  "github-GitHub-GitHub",
  "Socket.io",
  "JSON-JSON",
  "AJAX",
  "Databases-Databases-Databases",
  "Software Development",
  "Communication-Communication-Communication- communication skills",
  "problem-solving skills",
  "English",
  "Computer Science-Computer Science",
  "B.E./B.Tech",
];
const data = [];
skills.map((skill) => {
  const abc = new Analyzer(skill);
  data.push(abc.result);
});

function Analyzer(string) {
  this.newString = string;
  this.split = this.newString.split("-");
  this.set = new Set(this.split);
  this.result = {
    name: this.split[0],
    srtLen: this.newString.length,
    demand: this.split.length,
    unique: this.set,
  };
}

data.sort((a, b) => b.demand - a.demand);

const root = document.getElementById("root");

var html = "";
for (var i = 0; i < data.length; i++) {
  html += "<tr>";
  html += "<td>" + data[i].name + "</td>";
  html += "<td>" + data[i].demand + "</td>";
  html += "<td>" + [...data[i].unique].join(", ") + "</td>";
  html += "</tr>";
}

root.innerHTML = `
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Demand</th>
                <th>Unique</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            ${html}
            </tr>
        </tbody>
    </table>
`;
