// CREAR UNA CLASE
class Employe {
    constructor(ID){
        this.ID = ID; 
    }
}
class EmployeDirection extends  Employe {
    constructor(matricule, nom, prenom, dateNaissance, dateEmbauche, salaire, ID){
        super(ID);
        this.matricule = matricule;
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
        this.dateEmbauche = dateEmbauche;
        this.salaire = salaire;
    }

    Age(){
        let dateN = new Date (this.dateNaissance);
        let hoy = new Date();
        let age = hoy.getFullYear() - dateN.getFullYear();
        return age;
    }

    Anciennete(){
        let embauche = new Date (this.dateEmbauche);
        let hoy = new Date();
        let nombre = hoy.getFullYear() - embauche.getFullYear();
        return nombre;
    }

    AugmenterSalaireByAnciennete () {
    let salairetotal = this.salaire

        if (this.Anciennete > 5) {
            return salairetotal * 1.02;
        }else
        if (this.Anciennete > 10) {
            return salairetotal * 1.05;
        }else
        return salairetotal * 1.1;
    }
    

    AfficherEmploye () {
        return `
        Matricule : ${this.matricule}
        Nom : ${this.nom.toUpperCase()}
        Prenom : ${this.prenom[0].toUpperCase()}${this.prenom.substr(1).toLowerCase()}
        Age : ${this.Age()}
        Ancienneté : ${this.Anciennete()}
        Salaire : ${this.AugmenterSalaireByAnciennete()}`
    }
}
 
class Interface {
    AjouterEmploye(Datos){
        const DatosEmploye = document.getElementById('DatosEmploye');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong></strong> ${persona1.AfficherEmploye()}
                    
                </div>
                <div class="card-body">
                    <strong></strong> ${persona2.AfficherEmploye()}
                   
                </div>
                <div class="card-body">
                    <strong></strong> ${persona3.AfficherEmploye()}
                    <a href="#" class="btn btn-danger" name"effacer">Effacer</a>
                </div>
            </div>
        `;
        DatosEmploye.appendChild(element);
    }

    resetForm() {
        document.getElementById('formulaire').reset(); //resetear formulario
    }

    EffacerEmploye(element) {
        if (element.name === 'effacer'){
            DatosEmploye.remove();
        }
    }
}


// CREAR UN OBJETO
const persona1 = new EmployeDirection ('15-A','Garcia', 'Miguel', '10/18/1985', '10/20/2013','8000');
const persona2 = new EmployeDirection('20-B','Beneston','Lucas', '5/10/1990', '10/20/2018', '5000');
const persona3 = new EmployeDirection ('30-C','Leclerd','Yassin', '5/10/1992', '10/20/2019', '4000');

console.log(persona1.AfficherEmploye());
console.log(persona2.AfficherEmploye());
console.log(persona3.AfficherEmploye());

//RECUPERAR EVENTOS DOM 
document.getElementById("formulaire")
.addEventListener('submit', function(event) {
    const ID = document.getElementById('Matricule').value;
 
    //alert('Recuperando Datos Formulario')
    
    const Datos = new Employe(ID);
    

    const interface = new Interface();
    interface.AjouterEmploye(Datos);
    //console.log(Datos);
    interface.resetForm();//llamar resetear formulario

    event.preventDefault(); //eliminar cargar pagina cuando cargo el formulario
});

document.getElementById('DatosEmploye')
    .addEventListener('click', function (e) {
        const interface = new Interface();
        interface.EffacerEmploye(e.target);
    });

