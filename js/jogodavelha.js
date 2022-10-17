var vez = "nenhum"
var jogadaj1 = "nenhum"
var jogadaj2 = "nenhum"

function jogodavelha(){
    var l1c1 = document.getElementById("A1").textContent;
    var l1c2 = document.getElementById("A2").textContent;
    var l1c3 = document.getElementById("A3").textContent;
    var l2c1 = document.getElementById("B1").textContent;
    var l2c2 = document.getElementById("B2").textContent;
    var l2c3 = document.getElementById("B3").textContent;
    var l3c1 = document.getElementById("C1").textContent;
    var l3c2 = document.getElementById("C2").textContent;
    var l3c3 = document.getElementById("C3").textContent;
    if (((l1c1 == l1c2) && (l1c2 == l1c3))||((l2c1 == l2c2) && (l2c2 == l2c3))||((l3c1 == l3c2) && (l3c2 == l3c3))||((l1c1 == l2c1) && (l2c1 == l3c1))||((l1c2 == l2c2) && (l2c2 == l3c2))||((l1c3 == l2c3) && (l2c3 == l3c3))||((l1c1 == l2c2) && (l2c2 == l3c3))||((l1c3 == l2c2) && (l2c2 == l3c1))){
        if(vez == "Jogador-1"){
            alert("Parabens  "+(document.getElementById("jogador2").value)+ "  você ganhou");
        }
        else{
            alert("Parabens  "+(document.getElementById("jogador1").value)+"  você ganhou");
        }
        document.location.reload(true);        

    }
    else if(l1c1 != "1" && (l1c2 != "2") && (l1c3 != "3") && (l2c1 != "4") && (l2c3 != "5") && (l2c3 != "6") && (l3c1 != "7") && (l3c2 != "8") && (l3c3 != "9")){
        alert("Deu velha!")
        document.location.reload(true);
    }
    else{

    }

}
function guardarvalor1(){
    if(vez == "nenhum"){
        alert("Selecione \"O\" ou \"X\"")
    }
    else
    {
        if(vez == "Jogador-1"){
            document.getElementById("A1").textContent = jogadaj1;
            vez = "Jogador-2";
            document.getElementById("saida").innerHTML = ((document.getElementById("jogador2").value)+ " é sua vez");
        }
        else{
        document.getElementById("A1").textContent = jogadaj2;
        vez = "Jogador-1";
        document.getElementById("saida").innerHTML = ((document.getElementById("jogador1").value)+ " é sua vez");
        }
            document.getElementById("A1").onclick = 'none';
            jogodavelha;
    }
}
function guardarvalor2(){
    if(vez == "nenhum"){
        alert("Selecione \"O\" ou \"X\"")
    }
    else
    {
        if(vez == "Jogador-1"){
        document.getElementById("A2").textContent = jogadaj1;
        vez = "Jogador-2";
        document.getElementById("saida").innerHTML = ((document.getElementById("jogador2").value)+ " é sua vez");
        }
        else{
        document.getElementById("A2").textContent = jogadaj2;
        vez = "Jogador-1";
        document.getElementById("saida").innerHTML = ((document.getElementById("jogador1").value)+ " é sua vez");
        }
        document.getElementById("A2").onclick = 'none';
    }
}
function guardarvalor3(){
    if(vez == "nenhum"){
        alert("Selecione \"O\" ou \"X\"")
    }
    else
    {
        if(vez == "Jogador-1"){
        document.getElementById("A3").textContent = jogadaj1;
        vez = "Jogador-2";
        document.getElementById("saida").innerHTML = ((document.getElementById("jogador2").value)+ " é sua vez");
        }
        else{
        document.getElementById("A3").textContent = jogadaj2;
        vez = "Jogador-1";
        document.getElementById("saida").innerHTML = ((document.getElementById("jogador1").value)+ " é sua vez");
        }
            document.getElementById("A3").onclick = 'none';
            jogodavelha;
    }
}
function guardarvalor4() {
    if(vez == "nenhum"){
        alert("Selecione \"O\" ou \"X\"")
    }
    else
    {
        if(vez == "Jogador-1"){
            document.getElementById("B1").textContent = jogadaj1;
            vez = "Jogador-2";
            document.getElementById("saida").innerHTML = ((document.getElementById("jogador2").value)+ " é sua vez");
        }
        else{
            document.getElementById("B1").textContent = jogadaj2;
            vez = "Jogador-1";
            document.getElementById("saida").innerHTML = ((document.getElementById("jogador1").value)+ " é sua vez");
        }
            document.getElementById("B1").onclick = 'none';
            jogodavelha;
    }
}
function guardarvalor5() {
    if(vez == "nenhum"){
        alert("Selecione \"O\" ou \"X\"")
    }
    else
    {
        if(vez == "Jogador-1"){
            document.getElementById("B2").textContent = jogadaj1;
            vez = "Jogador-2";
            document.getElementById("saida").innerHTML = ((document.getElementById("jogador2").value)+ " é sua vez");
        }
        else{
            document.getElementById("B2").textContent = jogadaj2;
            vez = "Jogador-1";
            document.getElementById("saida").innerHTML = ((document.getElementById("jogador1").value)+ " é sua vez");
        }
            document.getElementById("B2").onclick = 'none';
            jogodavelha;
    }
}
function guardarvalor6() {
    if(vez == "nenhum"){
        alert("Selecione \"O\" ou \"X\"")
    }
    else
    {
        if(vez == "Jogador-1"){
            document.getElementById("B3").textContent = jogadaj1;
            vez = "Jogador-2";
            document.getElementById("saida").innerHTML = ((document.getElementById("jogador2").value)+ " é sua vez");
        }
        else{
            document.getElementById("B3").textContent = jogadaj2;
            vez = "Jogador-1";   
            document.getElementById("saida").innerHTML = ((document.getElementById("jogador1").value)+ " é sua vez");
        }
            document.getElementById("B3").onclick = 'none';
            jogodavelha;
    }
}
function guardarvalor7() {
    if(vez == "nenhum"){
        alert("Selecione \"O\" ou \"X\"")
    }
    else
    {
        if(vez == "Jogador-1"){
            document.getElementById("C1").textContent = jogadaj1;
            vez = "Jogador-2";
            document.getElementById("saida").innerHTML = ((document.getElementById("jogador2").value)+ "    é sua vez");
        }
        else{
            document.getElementById("C1").textContent = jogadaj2;
            vez = "Jogador-1";
            document.getElementById("saida").innerHTML = ((document.getElementById("jogador1").value)+ "     é sua vez");
        }
            document.getElementById("C1").onclick = 'none';
            jogodavelha;
    }
}
function guardarvalor8() {
    if(vez == "nenhum"){
        alert("Selecione \"O\" ou \"X\"")
    }
    else
    {
        if(vez == "Jogador-1"){
            document.getElementById("C2").textContent = jogadaj1;
            vez = "Jogador-2";
            document.getElementById("saida").innerHTML = ((document.getElementById("jogador2").value)+ "     é sua vez");
        }
        else{
            document.getElementById("C2").textContent = jogadaj2;
            vez = "Jogador-1";
            document.getElementById("saida").innerHTML = ((document.getElementById("jogador1").value)+ "     é sua vez");
        }
            document.getElementById("C2").onclick = 'none';
            jogodavelha;
    }
}
function guardarvalor9() {
    if(vez == "nenhum"){
        alert("Selecione \"O\" ou \"X\"")
    }
    else
    {
        if(vez == "Jogador-1"){
            document.getElementById("C3").textContent = jogadaj1;
            vez = "Jogador-2";
            document.getElementById("saida").innerHTML = ((document.getElementById("jogador2").value)+ "     é sua vez");
        }
        else{
            document.getElementById("C3").textContent = jogadaj2;
            vez = "Jogador-1";
            document.getElementById("saida").innerHTML = ((document.getElementById("jogador1").value)+ "     é sua vez");
        }
            document.getElementById("C3").onclick = 'none';
            jogodavelha;
    }
}
function btdesab1(){
    if(document.getElementById("jogador1").value == "Nome jogador 1"|| document.getElementById("jogador2").value == "Nome jogador 2"){
        alert("Digite o nome dos Jogadores")
    }
    else{
        document.getElementById("J1X").style.display = 'none';
        document.getElementById("J2O").style.display = 'none';
        document.getElementById("J1O").onclick = 'none';
        document.getElementById("J2X").onclick = 'none';
        vez = "Jogador-1";
        jogadaj1 = "O";
        jogadaj2 = "X"

        document.getElementById("saida").innerHTML = ((document.getElementById("jogador1").value)+ " é sua vez");

}
    
}
function btdesab2(){
    if(document.getElementById("jogador1").value == "Nome jogador 1"|| document.getElementById("jogador2").value == "Nome jogador 2"){
        alert("Digite o nome dos Jogadores")
    }
    else{
        document.getElementById("J1O").style.display = 'none';
        document.getElementById("J2X").style.display = 'none'; 
        document.getElementById("J1X").onclick = 'none';
        document.getElementById("J2O").onclick = 'none';
        vez = "Jogador-2";
        jogadaj2 = "O";
        jogadaj1 = "X";
        document.getElementById("saida").innerHTML = ((document.getElementById("jogador2").value)+ " é sua vez");
    }
}
function btdesab3(){
    if(document.getElementById("jogador1").value == "Nome jogador 1"|| document.getElementById("jogador2").value == "Nome jogador 2"){
        alert("Digite o nome dos Jogadores")
    }
    else{
        document.getElementById("J2X").style.display = 'none';
        document.getElementById("J1O").style.display = 'none';
        document.getElementById("J1X").onclick = 'none';
        document.getElementById("J2O").onclick = 'none';
        vez = "Jogador-1";
        jogadaj1 = "X";
        jogadaj2 = "O";
        document.getElementById("saida").innerHTML = ((document.getElementById("jogador1").value)+ " é sua vez");
    }
}
function btdesab4(){
    if(document.getElementById("jogador1").value == "Nome jogador 1"|| document.getElementById("jogador2").value == "Nome jogador 2"){
        alert("Digite o nome dos Jogadores")
    }
    else{
        document.getElementById("J2O").style.display = 'none';
        document.getElementById("J1X").style.display = 'none';
        document.getElementById("J1O").onclick = 'none';
        document.getElementById("J2X").onclick = 'none';
        vez = "Jogador-2";
        jogadaj2 = "X";
        jogadaj1 = "O";
        document.getElementById("saida").innerHTML = ((document.getElementById("jogador2").value)+ " é sua vez");
    }
}

