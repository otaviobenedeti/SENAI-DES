class Animal{
    //Atributos
    int id=0;
    String nome='';
    String especie='';
    String raca='';
    double peso=0.0;
    //Métodos
    String tudoJunto(){
        return "$id, $nome, $especie, $raca, $peso";
    }
}

void main(){
    //Instancia
    Animal boi;
    //Objeto
    boi = new Animal();

    boi.id = 1;
    boi.nome = "Boi Bandido";
    boi.especie = "Bovino";
    boi.raca = "Neroli";
    boi.peso = 499.9;
    print(boi.tudoJunto());
}