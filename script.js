let licorTotal=0;
let alcoholInicial=0;
let alcoholDeseado=0;
let dulzorDeseado=0;
let macerado=0;
let formula_alcohol=0;
let formula_azucar=0;
let alcoholParaCompensar=0;
let azucaryAgua=0
let agua=0;

// document.querySelector(".macerado").addEventListener("keyup",calc);

function calc(){

  licorTotal=document.querySelector(".licor-total").value;
  alcoholInicial=document.querySelector(".alcohol-inicial").value;
  alcoholDeseado=document.querySelector(".alcohol-deseado").value;
  dulzorDeseado=document.querySelector(".dulzor-deseado").value;
  macerado=document.querySelector(".macerado").value;
  console.log(licorTotal,alcoholDeseado,alcoholInicial,dulzorDeseado,macerado);

  formula_alcohol=(licorTotal*alcoholDeseado)/alcoholInicial;
  console.log("La formula del alcohol es: \n",formula_alcohol);
  
  formula_azucar=(licorTotal*dulzorDeseado)/100;
  console.log("La formula del azucar es: \n",formula_azucar);

  alcoholParaCompensar=formula_alcohol-macerado;

  if(formula_alcohol>=macerado){
  
  console.log("Por favor agrega: ",alcoholParaCompensar," de alcohol");
  document.getElementById("compensar").innerText=` agrega ${alcoholParaCompensar.toFixed(2)}`;
  }else{
    document.getElementById("compensar").innerText=` retira ${(alcoholParaCompensar*-1).toFixed(2)}`;
  }
  azucaryAgua=licorTotal-formula_alcohol;
  console.log("La cantidad de azucar y agua es", azucaryAgua);
  
  document.getElementById("azucar").innerText=formula_azucar.toFixed(2);

  agua=azucaryAgua-formula_azucar;
  document.getElementById("agua").innerText=agua.toFixed(2);
  
}