function cliente (nome, cpf, email, saldo)
{
    this.nome= nome
    this.cpf= cpf
    this.email= email
    this.saldo= saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const holivane = new cliente('Holivane','25468547895','holivane@email.com',100)

console.log(holivane)