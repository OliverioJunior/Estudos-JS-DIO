class contaBancaria {
    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia; 
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = 0;
    }

    get saldo(){
        return this._saldo;

    }

    set saldo(val){
        this._saldo = val;
    }

    sacar(val) {
        if(val>this._saldo) {
            return "Saldo Insuficiente"
        } this._saldo -= val;

        return this._saldo;
    }

    depositar(val){
        this._saldo += val

        return this._saldo;
    }
}

class contaCorrente extends contaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);

        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito( val){
        this._cartaoCredito = val
    }

}

class contaPoupanca extends contaBancaria{
    constructor(agencia, numero ){
        super(agencia, numero);

        this.tipo = 'poupança';
    
    }

}
class contaUniversitaria extends contaBancaria{
    constructor(agencia, numero ){
        super(agencia, numero);

        this.tipo = 'universitária';
    
    }

    sacar(val) {
        if(val>500){
            return "operação negada!"
        }

        this._saldo -= val;
    }

}