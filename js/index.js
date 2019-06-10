
import { StudentskaSluzba } from './studentska-sluzba/StudentskaSluzba'

var studentskaSluzba = new StudentskaSluzba()
studentskaSluzba.dodajStudenta(2021, 'Zorica', 'Nestorovic')
studentskaSluzba.dodajStudenta(1079, 'Mladen', 'Kanostrevac')
// studentskaSluzba.ukloniStudenta(1079)
studentskaSluzba.dodajPredmet(2021, 'savremeniTurski', 10)
studentskaSluzba.dodajPredmet(2021, 'diplomatika', 9)
studentskaSluzba.dodajPredmet(2021, 'turcizmi', 10)
studentskaSluzba.dodajPredmet(2021, 't1', 6)
studentskaSluzba.dodajPredmet(2021, 'grckaKnjizevnost', 7)

studentskaSluzba.dodajPredmet(1079, 'savremeniTurski', 10)
studentskaSluzba.dodajPredmet(1079, 'diplomatika', 10)
studentskaSluzba.dodajPredmet(1079, 'turcizmi', 10)
studentskaSluzba.dodajPredmet(1079, 't1', 10)
studentskaSluzba.dodajPredmet(1079, 'grckaKnjizevnost', 10)

// studentskaSluzba.ukloniPredmet(2021, 'diplomatika')

// studentskaSluzba.prosekOcena(2021)

console.log(studentskaSluzba.studentSaNajboljimProsekom())
