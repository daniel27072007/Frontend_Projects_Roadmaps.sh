// Importamos apenas o Luxon, que é 100% compatível com o navegador
import { DateTime } from './node_modules/luxon/build/es6/luxon.mjs';

const button1 = document.querySelector("#button1");
const age = document.querySelector("#age");

let anos = 0;
let meses = 0;
let dias = 0;

// O flatpickr já está disponível globalmente graças ao script adicionado no HTML
flatpickr("#birthday", {
  dateFormat: "d/m/Y",
  onChange: function(selectedDates) {
    if (selectedDates.length === 0) return;

    // Converte a data selecionada usando o Luxon
    const dataNascimento = DateTime.fromJSDate(selectedDates[0]);
    const hoje = DateTime.now();
    
    // Calcula a diferença em anos e meses
    const diferenca = hoje.diff(dataNascimento, ['years', 'months', 'days']);

    anos = Math.floor(diferenca.years);
    meses = Math.floor(diferenca.months);
    dias = Math.floor(diferenca.days);

    console.log(`Calculado com sucesso: ${anos} anos e ${meses} meses e ${dias} dias.`);
  }
});

// Evento de clique do botão
button1.onclick = function() {
  if(anos > 100){
    age.innerText = `You do not have ${anos} years, select a proper date`;
  }
  else if(anos < 0 || meses < 0 || dias < 0){
    age.innerText = 'this date is in the future, select a proper date';
  }
  else{
    age.innerText = `You are ${anos} years, ${meses} months and ${dias} days old.`;
  }
};
