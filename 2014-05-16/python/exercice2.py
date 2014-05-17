from exercice1 import *
from larcc import *
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

ringhiera1 = larRod([.25,10.])([32,1])
ringhiera = T([1,2])([1,1])(STRUCT(MKPOLS(ringhiera1)))
ringhiera2 = CUBOID([2,2,1])

perno = STRUCT([ringhiera, ringhiera2])
rin1 = T([1,2,3])([-29,25,3])(R([2,3])(PI)(S([1,3])([0.9,0.2])(STRUCT(NN(28)([T([1])([2]),perno])))))
rin2 = T(2)(-68)(rin1)
rinb = T([1,2,3])([-29,25,3])(R([2,3])(PI)(S([1,3])([0.9,0.2])(STRUCT(NN(39)([T([1])([2]),perno])))))
rin3 = T([1,2])([-2,-18])(R([1,2])(PI/2)(rinb))
rin4 = T(1)(48)(rin3)
rin = COLOR([0,0.61,0.45])(STRUCT([rin1,rin2,rin3,rin4]))

vicinoAttaccato = S(1)(-1)(appartamento)
vicino = T(1)(-5)(vicinoAttaccato)
mezzoPiano = STRUCT([vicino,appartamento])
#VIEW(mezzoPiano)
fronteAttaccato = S(2)(-1)(mezzoPiano)
fronte = T(2)(-20)(fronteAttaccato)
palazzo = STRUCT([fronte,mezzoPiano])

gradino = CUBOID([3,1,1])
rampa = STRUCT(NN(10)([T([2,3])([1,1]),gradino]))
mezzeRampe = T([1,2,3])([3,12,10])(rampa))
duerampe = COLOR([0,0.61,0.45])(T([1,2,3])([-2,-16,-1])(STRUCT([rampa])))

trombaScala = T([1,2])([25,30])(CUBOID([3,10,1]))
balcone = CUBOID([50,70,1])
appo = DIFFERENCE([balcone, trombaScala])
terrazza = COLOR([0.81,0.57,0.45])(T([1,2])([-27,-45])(appo))
pianogenerale = STRUCT([fronte, mezzoPiano,duerampe,terrazza,rin])
#VIEW(pianogenerale)
tetto = T(3)(101)(STRUCT([(terrazza),rin]))

palazzosuperiore = T(3)(-10)(STRUCT(NN(10)([T(3)(10),pianogenerale])))
palazzo = STRUCT([palazzosuperiore,tetto])

dominio = INTERVALS(1)(20)
lato_sx = BEZIER(S1)([[0,0],[10,20],[20,0],[30,20]]) 
a = COLOR([0.3,0.97,0.66])(MAP(lato_sx)(dominio))
b = T(2)(3)(COLOR([0.4,0.80,0])(MAP(lato_sx)(dominio)))
c = T(2)(6)(COLOR([0.48,0.80,0.48])(MAP(lato_sx)(dominio)))

a1 = STRUCT(NN(100)([T([2])([1]),a]))
b1 = STRUCT(NN(100)([T([2])([1]),b]))
c1 = STRUCT(NN(100)([T([2])([1]),c]))
curveNaturali = T([1,2])([-50,-150])(S([1,2])([3,2])(STRUCT([a1,b1,c1])))

figuraIntera = STRUCT([palazzo,curveNaturali])

#VIEW(figuraIntera)
