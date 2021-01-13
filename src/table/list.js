import { GetUsers } from "../scripts/data/mock.js";

const tbody = document.querySelector("tbody");

function table(prop) {
  return `
      <tr>
        <td scope="row">${prop.name}</td>
        <td>${prop.email}</td>
        <td>${prop.CPF}</td>
        <td>${prop.currentDate}</td>
      </tr>
    `;
}

GetUsers().then((users) => {
  const createTable = users.map((user) => table(user)).join("");
  tbody.innerHTML += createTable;
});
