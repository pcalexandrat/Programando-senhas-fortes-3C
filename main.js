const campoSenha = document.querySelector('#campo-senha');
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
geraSenha();
campoSenha.value = letrasMaiusculas;

function diminuiTamanho(){
    if (tamanhoSenha > 1){
       // tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    campoSenha.textContent = tamanhoSenha;
    geraSenha();
}
function aumentaTamanho(){
    if (tamanhoSenha < 20){
       // tamanhoSenha = tamanhoSenha+1;
       tamanhoSenha++;
    }
    campoSenha.textContent = tamanhoSenha;
    geraSenha();
}
function geraSenha() {
    let senha = '';
    for (let i = 0; i < tamanhoSenha; i++) {
        let numeroAleatorio = Math.random() * letrasMaiusculas.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + letrasMaiusculas[numeroAleatorio];
    }
   campoSenha.value = senha;
}