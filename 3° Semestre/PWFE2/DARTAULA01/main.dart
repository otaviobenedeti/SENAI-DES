void main(){
    String texto = "Alô Mundo!";
    int numero = 999999999999;
    double n = 0.333333333333333333333;
    bool ativo = true;
    var coisa = 10; //Não tipada
    dynamic tudo = "oi";

    print(texto);
    print(numero);
    print("Real ="+n.toString());//Concatenação
    print(ativo?"Oi":"Tchau");//If ternário
    print(coisa);
    print(tudo);
    tudo = 500;
    print(tudo);
}