import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Moyens de transport et énergies';
  resetImg = "assets/reset.png"

  // Définition des images pour les transports
  sourceTransport1 = "assets/avion/avion.png";
  sourceTransport2 = "assets/bateau/bateau.png";
  sourceTransport3 = "assets/bus/bus.png";
  sourceTransport4 = "assets/pieds/pieds.png";
  sourceTransport5 = "assets/train/train.png";
  sourceTransport6 = "assets/velo/velo.png";
  sourceTransport7 = "assets/voiture/voiture.png";

  // Définition des images pour les énergies
  sourceEnergie1 = "assets/energies/carburant.png";
  sourceEnergie2 = "assets/energies/charbon.jpg";
  sourceEnergie3 = "assets/energies/electricite.png";
  sourceEnergie4 = "assets/energies/nourriture.png";
  sourceEnergie5 = "assets/energies/soleil.png";
  sourceEnergie6 = "assets/energies/vent.png";

  // Définition de l'image du résultat
  sourceRes = "";

  selectedTransport = -1;
  selectedEnergie = -1;

  constructor() { }

  ngOnInit() {

  }

  reset() {
    this.selectedTransport = -1;
    this.selectedEnergie = -1;
    this.setCombo(this.selectedTransport, this.selectedEnergie);
  }

  setSelectedTransport(id: number) {
    this.selectedTransport = id;
    if(this.selectedEnergie != -1){
      this.setCombo(this.selectedTransport, this.selectedEnergie);
    }
  }

  setSelectedEnergie(id: number) {
    this.selectedEnergie = id;
    if(this.selectedTransport != -1){
      this.setCombo(this.selectedTransport, this.selectedEnergie);
    }
  }

  setCombo(idTransport: number, idEnergie: number){
    // Avion
    if (idTransport==1) {
      // Carburant
      if (idEnergie==1){
        this.sourceRes = "assets/avion/avion_carburant.png";
      }
      // Charbon
      else if (idEnergie==2){
        this.sourceRes = "assets/avion/avion_charbon.png";
      }
      // Electricite
      else if (idEnergie==3){
        this.sourceRes = "assets/avion/avion_electricite.png";
      }
      // Nourriture
      else if (idEnergie==4){
        this.sourceRes = "assets/avion/avion_nourriture.png";
      }
      // Soleil
      else if (idEnergie==5){
        this.sourceRes = "assets/avion/avion_soleil.png";
      }
      // Vent
      else if (idEnergie==6){
        this.sourceRes = "assets/avion/avion_vent.png";
      }
      else this.sourceRes="";
    }

    // Bateau
    else if (idTransport==2){
      // Carburant
      if (idEnergie==1){
        this.sourceRes = "assets/bateau/bateau_carburant.png";
      }
      // Charbon
      else if (idEnergie==2){
        this.sourceRes = "assets/bateau/bateau_charbon.png";
      }
      // Electricite
      else if (idEnergie==3){
        this.sourceRes = "assets/bateau/bateau_electrique.png";
      }
      // Nourriture
      else if (idEnergie==4){
        this.sourceRes = "assets/bateau/bateau_nourriture.png";
      }
      // Soleil
      else if (idEnergie==5){
        this.sourceRes = "assets/bateau/bateau_soleil.png";
      }
      // Vent
      else if (idEnergie==6){
        this.sourceRes = "assets/bateau/bateau_vent.png";
      }
      else this.sourceRes="";
    }

    // Bus
    else if (idTransport==3){
      // Carburant
      if (idEnergie==1){
        this.sourceRes = "assets/bus/bus_carburant.png";
      }
      // Charbon
      else if (idEnergie==2){
        this.sourceRes = "assets/bus/bus_charbon.png";
      }
      // Electricite
      else if (idEnergie==3){
        this.sourceRes = "assets/bus/bus_electricite.png";
      }
      // Nourriture
      else if (idEnergie==4){
        this.sourceRes = "assets/bus/bus_nourriture.png";
      }
      // Soleil
      else if (idEnergie==5){
        this.sourceRes = "assets/bus/bus_soleil.png";
      }
      // Vent
      else if (idEnergie==6){
        this.sourceRes = "assets/bus/bus_vent.png";
      }
      else this.sourceRes="";
    }

    // Pieds
    else if (idTransport==4){
      // Carburant
      if (idEnergie==1){
        this.sourceRes = "assets/pieds/pieds_carburant.png";
      }
      // Charbon
      else if (idEnergie==2){
        this.sourceRes = "assets/pieds/pieds_charbon.png";
      }
      // Electricite
      else if (idEnergie==3){
        this.sourceRes = "assets/pieds/pieds_electricite.png";
      }
      // Nourriture
      else if (idEnergie==4){
        this.sourceRes = "assets/pieds/pieds_nourriture.png";
      }
      // Soleil
      else if (idEnergie==5){
        this.sourceRes = "assets/pieds/pieds_soleil.png";
      }
      // Vent
      else if (idEnergie==6){
        this.sourceRes = "assets/pieds/pieds_vent.png";
      }
      else this.sourceRes="";
    }

    // Train
    else if (idTransport==5){
      // Carburant
      if (idEnergie==1){
        this.sourceRes = "assets/train/train_carburant.png";
      }
      // Charbon
      else if (idEnergie==2){
        this.sourceRes = "assets/train/train_charbon.png";
      }
      // Electricite
      else if (idEnergie==3){
        this.sourceRes = "assets/train/train_electricite.png";
      }
      // Nourriture
      else if (idEnergie==4){
        this.sourceRes = "assets/train/train_nourriture.png";
      }
      // Soleil
      else if (idEnergie==5){
        this.sourceRes = "assets/train/train_soleil.png";
      }
      // Vent
      else if (idEnergie==6){
        this.sourceRes = "assets/train/train_vent.png";
      }
      else this.sourceRes="";
    }

    // Velo
    else if (idTransport==6){
      // Carburant
      if (idEnergie==1){
        this.sourceRes = "assets/velo/velo_carburant.png";
      }
      // Charbon
      else if (idEnergie==2){
        this.sourceRes = "assets/velo/velo_charbon.png";
      }
      // Electricite
      else if (idEnergie==3){
        this.sourceRes = "assets/velo/velo_electricite.png";
      }
      // Nourriture
      else if (idEnergie==4){
        this.sourceRes = "assets/velo/velo_nourriture.png";
      }
      // Soleil
      else if (idEnergie==5){
        this.sourceRes = "assets/velo/velo_soleil.png";
      }
      // Vent
      else if (idEnergie==6){
        this.sourceRes = "assets/velo/velo_vent.png";
      }
      else this.sourceRes="";
    }

    // Voiture
    else if (idTransport==7){
      // Carburant
      if (idEnergie==1){
        this.sourceRes = "assets/voiture/voiture_carburant.png";
      }
      // Charbon
      else if (idEnergie==2){
        this.sourceRes = "assets/voiture/voiture_charbon.png";
      }
      // Electricite
      else if (idEnergie==3){
        this.sourceRes = "assets/voiture/voiture_electricite.png";
      }
      // Nourriture
      else if (idEnergie==4){
        this.sourceRes = "assets/voiture/voiture_nourriture.png";
      }
      // Soleil
      else if (idEnergie==5){
        this.sourceRes = "assets/voiture/voiture_solaire.png";
      }
      // Vent
      else if (idEnergie==6){
        this.sourceRes = "assets/voiture/voiture_vent.png";
      }
      else this.sourceRes="";
    }

    else this.sourceRes="";
  }

}
