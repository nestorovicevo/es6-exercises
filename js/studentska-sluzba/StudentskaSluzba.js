import { Student } from './Student'
import { Predmet } from './Predmet'

export class StudentskaSluzba {
  constructor () {
    this.students = []
  }

  dodajStudenta (index, ime, prezime) {
    const student = new Student(index, ime, prezime)
    this.students.push(student)
  }

  ukloniStudenta (index) {
    this.students = this.students.filter(student => student.index !== index)
  }

  dodajPredmet (index, imePredmeta, ocena) {
    const predmet = new Predmet(imePredmeta, ocena)
    let student = this.potraziStudentaPoIndexu(index)
    student.dodajPredmet(predmet)
  }

  ukloniPredmet (index, imePredmeta) {
    let student = this.potraziStudentaPoIndexu(index)
    student.ukloniPredmet(imePredmeta)
  }

  potraziStudentaPoIndexu (index) {
    return this.students.find(student => student.index === index)
  }

  prosekOcena (index) {
    let student = this.potraziStudentaPoIndexu(index)

    return student.izracunajProsekOcena()
  }

  studentSaNajboljimProsekom () {
    let boljiProsek = 6
    let boljiStudent
    this.students.forEach(student => {
      if (student.izracunajProsekOcena() > boljiProsek) {
        boljiStudent = student
      }
    })
    return boljiStudent
  }
}
