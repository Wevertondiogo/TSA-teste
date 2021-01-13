async function GetUsers() {
  const url = "http://localhost:3000/users";
  const res = await fetch(url);

  const body = res.json();

  return body;
}

async function Post(users) {
  const ajax = new XMLHttpRequest();

  ajax.open("POST", "http://localhost:3000/users", true);
  ajax.setRequestHeader("Content-type", "application/json", "charset=UTF-8");

  ajax.onreadystatechange = function () {
    if (ajax.readyState === 4 && ajax.status === 200) {
      try {
        const data = JSON.Parse(ajax.responseText);
        console.log(data);
      } catch (error) {
        console.error(error.message);
      }
    }
  };
  ajax.send(JSON.stringify(users));
}
export { Post, GetUsers };

// FUTURA IMPLEMENTAÇÃO
// const FetchData = async () => {
//   const res = await fetch(
//     "https://servicodados.ibge.gov.br/api/v1/localidades/distritos"
//   );

//   const body = res.json();

//   body
//     .then((outputs) => {
//       const requestState = outputs.map((output) => {
//         return output.municipio.microrregiao.mesorregiao.UF.sigla;
//       });

//       //REMOVENDO DUPLICATAS DO ARRAY
//       const arrState = new Set(requestState);

//       const states = [...arrState].sort();

//       console.log(states);
//     })
//     .catch((error) => console.log(error.message));
// };
