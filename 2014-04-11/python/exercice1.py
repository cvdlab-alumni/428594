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
asta = T(3)(34)(astaParziale)

puntaLarcc = larBall(1)([18,36])
puntaParziale = STRUCT(MKPOLS(puntaLarcc))
punta = T(3)(40)(puntaParziale)

basi3D = STRUCT([base, primoPiano, secondoPiano, terzoPiano, COLOR([1,0.75,0.14])(punta),asta])

#tetti 3D
V = [[-3.85,-9.2,11],[-3.85,-14.2,11],[3.85,-9.2,11],[3.85,-14.2,11],[0,-11.7,15]]
tettoRettangolo = JOIN(AA(MK)(V))

V = [[7,0,21],[4.9,4.9,21],[0,7,21],[-4.9,4.9,21],[-7,0,21],[-4.9,-4.9,21],[0,-7,21],[4.9,-4.9,21],
[3,0,25],[2.1,2.1,25],[0,3,25],[-2.1,2.1,25],[-3,0,25],[-2.1,-2.1,25],[0,-3,25],[2.1,-2.1,25]]
tettoGrande = JOIN(AA(MK)(V))

V = [[3,0,30],[2.1,2.1,30],[0,3,30],[-2.1,2.1,30],[-3,0,30],[-2.1,-2.1,30],[0,-3,30],[2.1,-2.1,30],[0,0,35]]
tettoPiccolo = JOIN(AA(MK)(V))
tetti = STRUCT([tettoRettangolo,R([1,2])(PI/8)(tettoPiccolo),R([1,2])(PI/8)(tettoGrande)])

#pareti 3D
V = [[-3.85,-9.2,0],[3.85,-9.2,0],[-3.85,-9.2,10],[3.85,-9.2,10],[-3.85,-8.2,0],[3.85,-8.2,0],[-3.85,-8.2,10],[3.85,-8.2,10]]
parete01 = JOIN(AA(MK)(V))
parete12 = T(3)(10)(S([1,2])([0.7,0.7])(parete01))
parete34 = T(3)(25)(S(3)(0.5)(S([1,2])([0.3,0.3])(parete01)))

V = [[-3.85,-9.2,0],[-3.85,-14.2,0],[-3.85,-9.2,10],[-3.85,-14.2,10],[-2.85,-9.2,0],[-2.85,-14.2,0],[-2.85,-9.2,10],[-2.85,-14.2,10]]
pareteRettangolo = JOIN(AA(MK)(V))
pareteRettangolo2 = T([1])([6.7])(pareteRettangolo)
V = [[-3.85,-14.2,0],[3.85,-14.2,0],[-3.85,-14.2,10],[3.85,-14.2,10],[-3.85,-13.2,0],[3.85,-13.2,0],[-3.85,-13.2,10],[3.85,-13.2,10]]
pareteRettangolo3 = JOIN(AA(MK)(V))
parete = STRUCT([pareteRettangolo,pareteRettangolo2,pareteRettangolo3])

facciata = STRUCT([parete01,parete34,parete12])
facciataDiversa = STRUCT([R([1,2])(PI/8)(parete)])
tuttefacce = STRUCT([R([1,2])(PI/8)(facciata),R([1,2])(3*PI/8)(facciata),R([1,2])(5*PI/8)(facciata),R([1,2])(7*PI/8)(facciata),R([1,2])(9*PI/8)(facciata),R([1,2])(-1*PI/8)(facciata),R([1,2])(-3*PI/8)(facciata),R([1,2])(-5*PI/8)(facciata),R([1,2])(-7*PI/8)(facciata),R([1,2])(-9*PI/8)(facciata)])
pareti = STRUCT([R([1,2])(-PI/8)(facciataDiversa),R([1,2])(-PI/8)(tuttefacce)])

battistero3d = STRUCT([pareti,tetti,basi3D])
VIEW(battistero3d)
