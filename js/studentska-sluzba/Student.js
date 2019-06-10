export class Student {
  constructor (index, ime, prezime, polozeniPredmeti) {
    this.index = index
    this.ime = ime
    this.prezime = prezime
    this.polozeniPredmeti = []
  }

  dodajPredmet (predmet) {
    this.polozeniPredmeti.push(predmet)
  }

  ukloniPredmet (imePredmeta) {
    this.polozeniPredmeti = this.polozeniPredmeti.filter(predmet => predmet.ime !== imePredmeta)
  }

  izracunajProsekOcena () {
    let zbirOcena = 0

    for (let i = 0; i < this.polozeniPredmeti.length; i++) {
      const predmet = this.polozeniPredmeti[i]

      zbirOcena += predmet.ocena
    }

    return zbirOcena / this.polozeniPredmeti.length
  }
}
