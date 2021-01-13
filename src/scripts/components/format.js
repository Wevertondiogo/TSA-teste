const CPF = document.querySelector("#CPF");
const cardNumber = document.querySelector("#cardNumber");
//RETORNANDO INDEX E INCREMENT
const increment = (...increment) => increment[0];
const handleIndex = (...index) => index[0];

const formatCardNumber = [" ", " ", " "];
const cardNumberIndex = [4, 9, 14];

const formatCPF = [".", ".", "-"];
const CPFIndex = [3, 7, 11];

function formatField(field, increment, index) {
  const length = field.value.length;

  const [i1, i2, i3] = index;
  const [inc1, inc2, inc3] = increment;

  if (length === i1) field.value += inc1;
  if (length === i2) field.value += inc2;
  if (length === i3) field.value += inc3;
  return field.value;
}

CPF.addEventListener("keydown", (event) =>
  formatField(event.target, increment(formatCPF), handleIndex(CPFIndex))
);

cardNumber.addEventListener("keydown", (event) =>
  formatField(
    event.target,
    increment(formatCardNumber),
    handleIndex(cardNumberIndex)
  )
);
