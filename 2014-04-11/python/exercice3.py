from pyplasm import *
import sys
sys.path.insert(0, '/Library/Python/2.7/site-packages/larcc/lib/py')
from larcc import *
from simplexn import *
from lar2psm import *
from largrid import *
from mapper import *
from boolean import *
from boolean1 import *
from boolean2 import *
from sysml import *
from architectural import *
from morph import *
#******************************
def scalePoints (points, svect):
	return [AA(PROD)(TRANS([p,svect])) for p in points]

def larDomain(shape):
	V,CV = larSimplexGrid(shape)
	V = scalePoints(V, [1./d for d in shape])
	return V,CV

def larIntervals(shape):
    def larIntervals0(size):
    	V,CV = larDomain(shape)
    	V = scalePoints(V, [scaleFactor for scaleFactor in size])
    	return V,CV
	return larIntervals0

def larMap(coordFuncs):
	def larMap0(domain):
		V,CV = domain
		V = TRANS(CONS(coordFuncs)(V)) 
		return V,CV
	return larMap0

#*************************************

def disk2D(p):
	u,v = p
	return [v*COS(u), v*SIN(u)]

def translatePoints (points, tvect): 
     return [VECTSUM([p,tvect]) for p in points]

def rotatePoints (points, angle): 
	a = angle
	return [[x*COS(a)-y*SIN(a), x*SIN(a)+y*COS(a)] for x,y in points]

def larSphere(radius=1):
    def larSphere0(shape=[18,36]):
        V,CV = larIntervals(shape)([PI,2*PI])
        V = translatePoints(V,[-PI/2,-PI])
        domain = V,CV
        x = lambda V : [radius*COS(p[0])*SIN(p[1]) for p in V]
        y = lambda V : [radius*COS(p[0])*COS(p[1]) for p in V]
        z = lambda V : [radius*SIN(p[0]) for p in V]
        return larMap([x,y,z])(domain)
    return larSphere0

def larBall(radius=1):
    def larBall0(shape=[18,36]):
        V,CV = larSphere(radius)(shape)
        return V,[range(len(V))]
    return larBall0

def larCylinder(params):
    radius,height= params
    def larCylinder0(shape=[36,1]):
        domain = larIntervals(shape)([2*PI,1])
        V,CV = domain
        x = lambda V : [radius*COS(p[0]) for p in V] 
        y = lambda V : [radius*SIN(p[0]) for p in V] 
        z = lambda V : [height*p[1] for p in V] 
        mapping = [x,y,z]
        model = larMap(mapping)(domain)
        return model
    return larCylinder0

def larRod(params):
    radius,height= params
    def larRod0(shape=[36,1]):
        V,CV = larCylinder(params)(shape)
        return V,[range(len(V))]
    return larRod0


pavimento = COLOR([0.6,0.8,0.19])(T([1,2])([-50,-50])(CUBOID([100,100,-2])))
porzioneStrada = COLOR([0.6,0.6,0.6])(T([1,2])([-20,-20])(CUBOID([40,5,-2])))
stradaPrincipale = STRUCT([R([1,2])(PI/2)(porzioneStrada),porzioneStrada,R([1,2])(-PI/2)(porzioneStrada),T(2)(40)(porzioneStrada)])
stradaSecondaria = COLOR([0.6,0.6,0.6])(T([1,2])([-50,40])(CUBOID([100,5,-2])))
stradaTerziaria = R([1,2])(PI/2)(stradaSecondaria)
stradaUnione = COLOR([0.6,0.6,0.6])(T([1,2])([-40,-30])(CUBOID([40,5,-2])))
stradaUnionedue = COLOR([0.6,0.6,0.6])(T([1,2])([-10,-25])(CUBOID([10,5,-2])))

#**********************definisco una funzione che genera case*********
def casetta(colTetto, colCasa, ColFinestre, colPorte):
    verticicasa = [[0,0], [4,0], [0,4], [4,4]]
    verticitetto = [[2,8],[0,4], [4,4]]
    cellecase = [[1,2,3,4]]
    celletetto = [[1,2,3]]
    pols = None
    formacasa = MKPOL([verticicasa, cellecase, pols])
    formatetto = MKPOL([verticitetto, celletetto, pols])
    porta = CUBOID([1,2])
    finestra = CUBOID([1,1])
    finestradue = CUBOID([1,1])
    transPorta = T(1)(1.5)
    transFinestra = T([1,2])([0.5,2.5])
    transFinestraDue = T([1,2])([2.5,2.5])
    forma3Dcasa = PROD([formacasa, Q(2)])
    forma3Dtetto = PROD([formatetto, Q(2)])
    porta3D = PROD([porta, Q(2)])
    finestra3D = PROD([finestra, Q(2)])
    finestradue3D = PROD([finestradue, Q(2)])
    casa3Dcolor = STRUCT([ COLOR(colCasa)(forma3Dcasa),COLOR(colTetto)(forma3Dtetto),COLOR(ColFinestre)(T([1,2])([0.5,2.5])(finestra3D)), COLOR(colPorte)(transPorta(porta3D)), COLOR(ColFinestre)(transFinestraDue(finestradue3D))])
    return (casa3Dcolor)
#************************fine *****************

casa1 = R([2,3])(PI/2)(casetta([1,0.25,0.25],[1,0.75,0.75],[0.73,1,1],[0.36,0.2,0.09]))
casa2 = R([2,3])(PI/2)(casetta([0.12,0.69,0.66],[0.75,1,0.75],[0.73,1,1],[0.36,0.2,0.09]))
casa3 = R([2,3])(PI/2)(casetta([1,0.14,0],[1,0.54,0.41],[0.73,1,1],[0.36,0.2,0.09]))
casa4 = R([2,3])(PI/2)(casetta([0.54,0.03,0.31],[1,0.71,0.75],[0.73,1,1],[0.36,0.2,0.09]))
casa5 = R([1,2])(PI/2)(R([2,3])(PI/2)(casetta([0.40,0.13,0.54],[0.93,0.87,0.89],[0.73,1,1],[0.36,0.2,0.09])))
casa6 = R([1,2])(PI/2)(R([2,3])(PI/2)(casetta([0.55,0.13,0.13],[0.81,0.57,0.45],[0.73,1,1],[0.36,0.2,0.09])))
casa7 = R([1,2])(PI/2)(R([2,3])(PI/2)(casetta([0.54,0.47,0.38],[0.93,0.81,0.63],[0.73,1,1],[0.36,0.2,0.09])))

edifici = STRUCT([T([1,2])([35,47])(casa1),T([1,2])([15,47])(casa2),T([1,2])([-5,47])(casa3),T([1,2])([-25,47])(casa4),
   T([1,2])([-47,35])(casa5),T([1,2])([-47,5])(casa6),T([1,2])([-47,-35])(casa7)])


domain2D = PROD([INTERVALS(2*PI)(8), INTERVALS(10)(3)]) 
baseStorta = MAP(disk2D)(domain2D) 

#base edificio
c = CUBOID([7.68,5,1])
ottagono2D = R([1,2])(PI/8)(baseStorta)
ottagono = PROD([ottagono2D,Q(1)])
rettangolo = T([1,2])([-3.84,-14.2])(c)
base = STRUCT([ottagono,rettangolo])

#primo piano
primoPiano = T(3)(10)(base)

#secondo piano
secondoPiano = T(3)(20)(S([1,2])([0.7,0.7])(ottagono))

#terzo piano
terzoPianoBase = T(3)(25)(S([1,2])([0.3,0.3])(ottagono))
terzoPiano = STRUCT([terzoPianoBase])


#decorazione cima
astaLarcc = larRod([.25,10.])([32,1])
astaParziale = STRUCT(MKPOLS(astaLarcc))
asta = COLOR([0.90,0.90,0.98])(T(3)(34)(astaParziale))

puntaLarcc = larBall(1)([18,36])
puntaParziale = STRUCT(MKPOLS(puntaLarcc))
punta = T(3)(40)(puntaParziale)


basi3D = STRUCT([COLOR([0.4,0.54,0.54])(base), COLOR([0.4,0.54,0.54])(primoPiano), COLOR([0.4,0.54,0.54])(secondoPiano), COLOR([0.4,0.54,0.54])(terzoPiano), COLOR([1,0.75,0.14])(punta),asta])

#tetti 3D
V = [[-3.85,-9.2,11],[-3.85,-14.2,11],[3.85,-9.2,11],[3.85,-14.2,11],[0,-11.7,15]]
tettoRettangolo = JOIN(AA(MK)(V))

V = [[7,0,21],[4.9,4.9,21],[0,7,21],[-4.9,4.9,21],[-7,0,21],[-4.9,-4.9,21],[0,-7,21],[4.9,-4.9,21],
[3,0,25],[2.1,2.1,25],[0,3,25],[-2.1,2.1,25],[-3,0,25],[-2.1,-2.1,25],[0,-3,25],[2.1,-2.1,25]]
tettoGrande = JOIN(AA(MK)(V))

V = [[3,0,30],[2.1,2.1,30],[0,3,30],[-2.1,2.1,30],[-3,0,30],[-2.1,-2.1,30],[0,-3,30],[2.1,-2.1,30],[0,0,35]]
tettoPiccolo = JOIN(AA(MK)(V))
tetti = STRUCT([COLOR([0.78,0.78,0.78])(tettoRettangolo),COLOR([0.78,0.78,0.78])(R([1,2])(PI/8)(tettoPiccolo)),COLOR([0.78,0.78,0.78])(R([1,2])(PI/8)(tettoGrande))])

#pareti 3D
V = [[-3.85,-9.2,0],[3.85,-9.2,0],[-3.85,-9.2,10],[3.85,-9.2,10],[-3.85,-8.2,0],[3.85,-8.2,0],[-3.85,-8.2,10],[3.85,-8.2,10]]
parete01 = JOIN(AA(MK)(V))
FV = [[0,1,2,3,4,5,6,7]]


V = [[-3.85,-9.2,0],[3.85,-9.2,0],[-3.85,-9.2,10],[3.85,-9.2,10],[-3.85,-8.2,0],[3.85,-8.2,0],[-3.85,-8.2,10],[3.85,-8.2,10]]
parete01Parziale = STRUCT(MKPOLS([V,FV]))


def disk2D(p): 
    u,v = p 
    return [v*COS(u), v*SIN(u)] 
domain2D = PROD([INTERVALS(PI)(32), INTERVALS(2.3)(3)]) 

finestraGrande = T(2)(-0.3)(S([1,2,3])([0.6,1,0.6])(parete01Parziale))
arcoSopra = MAP(disk2D)(domain2D)
arco3d = PROD([arcoSopra,Q(1.5)])
arcoParziale = STRUCT([T([2,3])([-8.5,6])(R([2,3])(PI/2)(arco3d))])
finestrone = STRUCT([finestraGrande,arcoParziale])

finestroneCompleto = DIFFERENCE([parete01Parziale,finestrone])
finestra = T([2,3])([-0.1,5])(S([1,2,3])([0.3,0.9,0.3])(finestrone))

parete01 = COLOR([1,0.89,0.70])(DIFFERENCE([finestroneCompleto,finestra]))


parete12 = COLOR([1,0.89,0.70])(T(3)(10)(S([1,2])([0.7,0.7])(parete01Parziale)))

rect = T(3)(10)(S([1,2])([0.5,0.5])(parete01Parziale))
rect2 = T(3)(10.5)(S([1,2,3])([0.4,0.5,0.9])(parete01Parziale))

bordo1 = COLOR([0,0.39,0])(T([2,3])([-2,3])(S(3)(0.8)(DIFFERENCE([rect,rect2]))))
bordo2 = COLOR([0,0.39,0])(T([2,3])([-3.4,3])((S([1,2,3])([0.2,0.5,0.8])(bordo1))))
bordo3 = COLOR([0,0.39,0])(T([1,2,3])([-1.1,-3.4,3])((S([1,2,3])([0.2,0.5,0.8])(bordo1))))
bordo4 = COLOR([0,0.39,0])(T([1,2,3])([1.1,-3.4,3])((S([1,2,3])([0.2,0.5,0.8])(bordo1))))

parete12 = STRUCT([parete12,bordo1,bordo2,bordo3,bordo4])

V = [[-3.85,-9.2,0],[3.85,-9.2,0],[-3.85,-9.2,10],[3.85,-9.2,10],[-3.85,-8.2,0],[3.85,-8.2,0],[-3.85,-8.2,10],[3.85,-8.2,10]]
V = [[-1.85,-9.2,1],[1.85,-9.2,1],[-1.85,-9.2,9],[1.85,-9.2,9],[-1.85,-8.2,1],[1.85,-8.2,1],[-1.85,-8.2,9],[1.85,-8.2,9]]
finestra34 = STRUCT(MKPOLS([V,FV]))
muroFinestra34parziale = DIFFERENCE([parete01Parziale,finestra34])
muroFinestra34 = T(3)(25)(S(3)(0.5)(S([1,2])([0.3,0.3])(muroFinestra34parziale)))
parete34 = COLOR([1,0.89,0.70])(muroFinestra34)

V = [[-3.85,-9.2,0],[-3.85,-14.2,0],[-3.85,-9.2,10],[-3.85,-14.2,10],[-2.85,-9.2,0],[-2.85,-14.2,0],[-2.85,-9.2,10],[-2.85,-14.2,10]]
pareteRettangolo = COLOR([1,0.89,0.70])(JOIN(AA(MK)(V)))
pareteRettangolo2 = COLOR([1,0.89,0.70])(T([1])([6.7])(pareteRettangolo))

V = [[-3.85,-14.2,0],[3.85,-14.2,0],[-3.85,-14.2,10],[3.85,-14.2,10],[-3.85,-13.2,0],[3.85,-13.2,0],[-3.85,-13.2,10],[3.85,-13.2,10]]
pareteRettangolo3Parziale = STRUCT(MKPOLS([V,FV]))
porta = T(2)(-13.7)(R([1,2])(PI/2)(CUBOID([4,16,9])))

pareteRettangolo3 = (COLOR([1,0.89,0.70])(DIFFERENCE([pareteRettangolo,porta])))
parete = STRUCT([pareteRettangolo,pareteRettangolo2,pareteRettangolo3])

facciata = STRUCT([parete01,parete34,parete12])
facciataDiversa = STRUCT([R([1,2])(PI/8)(parete)])
facciataDiversa2 = STRUCT([parete34,parete12])
tuttefacce = STRUCT([R([1,2])(3*PI/8)(facciata),R([1,2])(5*PI/8)(facciata),R([1,2])(7*PI/8)(facciata),R([1,2])(9*PI/8)(facciata),R([1,2])(-1*PI/8)(facciata),R([1,2])(-3*PI/8)(facciata),R([1,2])(-5*PI/8)(facciata)])
pareti = STRUCT([R([1,2])(-PI/8)(facciataDiversa),R([1,2])(-PI/8)(tuttefacce),facciataDiversa2])

battistero3d = STRUCT([pareti,tetti,basi3D,pavimento,stradaPrincipale,stradaSecondaria,stradaTerziaria,stradaUnione,stradaUnionedue,edifici])
VIEW(battistero3d)
