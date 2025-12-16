let combattant1 = {
    name: "Ismael",
    pv: 50,
    attaque: 13,
    précision: 0.7,
    vérifierPrécision: function() {
        return Math.random() < this.précision;
    },
    attaquerAdversaire: function(opponent) {
        if (this.vérifierPrécision()) {
            opponent.pv -= this.attaque;
            console.log(this.name + " touche " + opponent.name + " et inflige " + this.attaque + " dégâts !");
        } else {
            console.log(this.name + " rate son attaque !");
        }
    }
};

let combattant2 = {
    name: "Yanis",
    pv: 50,
    attaque: 12,
    précision: 0.8,
    vérifierPrécision: function() {
        return Math.random() < this.précision;
    },
    attaquerAdversaire: function(opponent) {
        if (this.vérifierPrécision()) {
            opponent.pv -= this.attaque;
            console.log(this.name + " touche " + opponent.name + " et inflige " + this.attaque + " dégâts !");
        } else {
            console.log(this.name + " rate son attaque !");
        }
    }
};

console.log("Début du combat entre " + combattant1.name + " et " + combattant2.name);

while (combattant1.pv > 0 && combattant2.pv > 0) {
    console.log("Tour suivant :");
    combattant1.attaquerAdversaire(combattant2);
    if (combattant2.pv <= 0) break;
    combattant2.attaquerAdversaire(combattant1);
    console.log(combattant1.name + " a " + combattant1.pv + " PV, " + combattant2.name + " a " + combattant2.pv + " PV");
}
 //le ? et : servent de "si oui alors" et de "si non alors"
let vainqueur = combattant1.pv > 0 ? combattant1.name : combattant2.name;
console.log("Le vainqueur est " + vainqueur + " !");
