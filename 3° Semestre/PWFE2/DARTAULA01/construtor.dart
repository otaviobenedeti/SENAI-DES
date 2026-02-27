class Animal{
    //Atributos
    int id=0;
    String nome='';
    String especie='';
    String raca='';
    double peso=0.0;
    //Métodos
    Animal(this.id, this.nome, this.especie, this.raca, this.peso);
    String tudoJunto(){
        return "$id, $nome, $especie, $raca, $peso";
    }
}

void main(){

    Animal boi = new Animal(1,"Bandido","Bovino","Nelori",499.9);
    print(boi.tudoJunto());

    Animal cachorro = new Animal(2,"Pitoco","Canino","Pastor-Alemão",45.0);
    print(cachorro.tudoJunto());
    
    Animal papagaio = new Animal(3,"Rinck neck","Ave","Papagaio-Verdadeiro",500);
    print(papagaio.tudoJunto());

    Animal peixe = new Animal(4,"Oliver","Marinho","Salmão",2.5);
    print(peixe.tudoJunto());

    Animal gato = new Animal(5,"Max","Felino","Persa",3.2);
    print(gato.tudoJunto());
}