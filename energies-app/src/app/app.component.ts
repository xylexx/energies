import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  source1 = "assets/image1.png";
  source3 = "assets/image3.png";
  sourceRes = "";
  title = 'Energies-app';
  selectedTransport = -1;
  selectedEnergie = -1;

  constructor() { }

  ngOnInit() {

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
    console.log("transport : " + idTransport + " et énergie : " + idEnergie);
    if(idTransport==1) {
      if(idEnergie==1){
        this.sourceRes = "assets/oui.png";
      }
      else if(idEnergie==2){
        this.sourceRes = "assets/non.png";
      }
      else this.sourceRes="";
    }
    else this.sourceRes="";
  }

}
