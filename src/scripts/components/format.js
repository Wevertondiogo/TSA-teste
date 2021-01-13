const CPF = document.querySelector("#CPF");

function formatCPF(CPF) {
  const length = CPF.value.length;
  if (length === 3) CPF.value += ".";
  if (length === 7) CPF.value += ".";
  if (length === 11) CPF.value += "-";
  return email.value;
}
CPF.addEventListener("keydown", (event) => formatCPF(event.target));
