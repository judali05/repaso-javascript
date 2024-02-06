const PI=3.14;

function restar (x1,x2){
    return x1-x2
}

function sumar(x1,x2)
{
    return x1+x2;
}

function dividir(x1,x2)
{
    if (x2==0){
         mostrarerror();
    }else{
        return x1/x2;
    }
}

function mostrarerror(){
    console.log("no se puede dividir por cero")
}

exports.sumar=sumar;
exports.restar=restar;
exports.dividir=dividir;
exports.PI=PI;
