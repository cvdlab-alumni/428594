from pyplasm import *
import sys
sys.path.insert(0, '/Library/Python/2.7/site-packages/larcc/lib/py')
from larcc import *
from simplexn import *
from lar2psm import *
from largrid import *
from splines import *
from mapper import *
from boolean import *
from boolean1 import *
from boolean2 import *
from sysml import *
from architectural import *
from morph import *

#colori
grigio = [186,186,186]
verde_auto = [47,79,79]
rosso = [238,44,44]
blu = [0,0,205]
azzurro = [0,206,209]
marrone = [139,87,66]
verde = [2,157,116]
verde_chiaro = [193,255,193]
mattone = [245,245,220]
gold = [255,185,15]
porfido = TEXTURE('/Users/Sirian/Desktop/2014-05-16/image/porfido.jpg')
tegole = TEXTURE('/Users/Sirian/Desktop/2014-05-16/image/tegole.jpg')
marmo = TEXTURE('/Users/Sirian/Desktop/2014-05-16/image/marmo.jpg')
acqua = TEXTURE('/Users/Sirian/Desktop/2014-05-16/image/acqua.jpg')
fiori = TEXTURE('/Users/Sirian/Desktop/2014-05-16/image/fiori.jpg')
prato = TEXTURE('/Users/Sirian/Desktop/2014-05-16/image/prato.jpg')

def disk2D(p):
    u,v = p
    return [v*COS(u), v*SIN(u)]

def color(color):
	return [color[0]/255., color[1]/255., color[2]/255.]

#porta
porta_piena = CUBOID([2,8,1])
porta_scava = T([1,2])([0.2,0.4])(S([1,2,3])([0.8,0.4,0.1])(porta_piena))
porta = DIFFERENCE([porta_piena,porta_scava])
porta_scava = T([1,2])([0.2,4.5])(S([1,2,3])([0.8,0.4,0.1])(porta_piena))
porta = DIFFERENCE([porta,porta_scava])
porta = COLOR(color(marrone))(porta)
maniglia = larSphere(0.2)()
maniglia = COLOR(color(gold))(T([1,2])([1.5,4])(STRUCT(MKPOLS(maniglia))))
porta_maniglia = STRUCT([porta,maniglia])
maniglia = larSphere(0.2)()
maniglia = COLOR(color(gold))(T([1,2])([1.7,4])(STRUCT(MKPOLS(maniglia))))
porta_maniglia = T([1,2,3])([10,20,1])(R([2,3])(PI/2)(STRUCT([porta,maniglia])))

#finestre
finestra_piena = CUBOID([3,8,1])
vetro = MATERIAL([1,1,1,0.1, 0,0,0.8,0.5, 1,1,1,0.1, 0,0,0,0.1, 100])(GRID([[3],[8],[1]]))
vetro_buco = T([1,2])([0.15,0.35])(S([1,2])([0.4,0.45])(finestra_piena))
finestra = DIFFERENCE([finestra_piena,vetro_buco])
vetro_buco = T([1,2])([1.7,0.35])(S([1,2])([0.4,0.45])(finestra_piena))
finestra = DIFFERENCE([finestra,vetro_buco])

vetro_buco = T([1,2])([0.15,4.25])(S([1,2])([0.4,0.45])(finestra_piena))
finestra = DIFFERENCE([finestra,vetro_buco])
vetro_buco = T([1,2])([1.7,4.25])(S([1,2])([0.4,0.45])(finestra_piena))
struttura_finestra = COLOR(color(verde))(DIFFERENCE([finestra,vetro_buco]))

vetro1 =  T([1,2])([0.15,0.35])(S([1,2])([0.4,0.45])(vetro))
vetro2 = T([1,2])([1.7,0.35])(S([1,2])([0.4,0.45])(vetro))
vetro3 =T([1,2])([0.15,4.25])(S([1,2])([0.4,0.45])(vetro))
vetro4 = T([1,2])([1.7,4.25])(S([1,2])([0.4,0.45])(vetro))
finestra_vetro = R([2,3])(PI/2)(STRUCT([struttura_finestra,vetro1,vetro2,vetro3,vetro4]))

porta_finestra1 = T([1,2,3])([9.5,4,1])(finestra_vetro)
porta_finestra2 = T([1,2,3])([3,15,1])(finestra_vetro)

finestra_p = S([2,3])([0.66,0.5])(R([1,2])(PI/2)(finestra_vetro))
finestra1 = T([2,3])([3,4])(finestra_p)
finestra2 = T(2)(7)(finestra1)
finestra3 = T([1,2])([8,6])(finestra2)

finestra_g = S(3)(0.5)(finestra_vetro)
finestra4 = T([1,2,3])([3,1,4])(finestra_g)
finestra5 = T([1,2])([13,3])(finestra4)
finestra6 = T(2)(16)(finestra5)

infissi = STRUCT([porta_finestra1,porta_finestra2,finestra1,finestra2,finestra3,finestra4,finestra5,finestra6,porta_maniglia])

#balcone Tondo grande
b1 = BEZIER(S1)([[0,0,0],[0,0,10]])
b2 = BEZIER(S1)([[10,20,0],[10,20,10]])
b3 = BEZIER(S1)([[20,0,0],[20,0,10]])
controls = [b1,b2,b3]
knots = [0,0,0,1,1,1]
tbspline = TBSPLINE(S2)(2)(knots)(controls)
dom = larModelProduct([larDomain([10]),larDom(knots)])
obj1 = larMap(tbspline)(dom)
obj1 = STRUCT( MKPOLS(obj1) )
balconeTondo_pieno1 = SOLIDIFY(obj1)
balconeTondo_scavato1 = T([1,3])([1,3])(S([1,2])([0.9,0.8])(balconeTondo_pieno1))
balconeTondo1 = DIFFERENCE([balconeTondo_pieno1,balconeTondo_scavato1])
b1 = BEZIER(S1)([[20,0,0],[20,0,10]])
b2 = BEZIER(S1)([[25,-5,0],[25,-5,10]])
b3 = BEZIER(S1)([[30,0,0],[30,0,10]])
controls = [b1,b2,b3]
knots = [0,0,0,1,1,1]
tbspline = TBSPLINE(S2)(2)(knots)(controls)
dom = larModelProduct([larDomain([10]),larDom(knots)])
obj2 = larMap(tbspline)(dom)
obj2 = STRUCT( MKPOLS(obj2) )
balconeTondo_pieno2 = SOLIDIFY(obj2)
balconeTondo_scavato2 = T(1)(2.5)(S([1,2])([0.9,0.8])(balconeTondo_pieno2))
balconeTondo2 = T(1)(-59)(S([1,2])([2,2])(DIFFERENCE([balconeTondo_pieno2,balconeTondo_scavato2])))
utility = R([1,2])(PI)(balconeTondo_scavato2)
balconeTondo = STRUCT([balconeTondo1,balconeTondo2])
#fine

#balcone piccolo tondo
domain2D = PROD([INTERVALS(PI/2)(64), INTERVALS(10)(3)])
balconeTondo_piccoloPiano = MAP(disk2D)(domain2D)
balconeTondo_piccoloPieno = T([1,2])([8,15])(S([1,2])([0.8,0.5])((R([1,2])(PI/2)(PROD([balconeTondo_piccoloPiano,Q(5)])))))
balconeTondo_piccoloScavato = T([1,2,3])([8,15,1])(S([1,2,3])([0.7,0.4,0.8])((R([1,2])(PI/2)(PROD([balconeTondo_piccoloPiano,Q(5)])))))
balconeTondo_piccolo = COLOR(color(verde_chiaro))(DIFFERENCE([balconeTondo_piccoloPieno,balconeTondo_piccoloScavato]))
#fine

#creazione master
master = assemblyDiagramInit([7,12,2])([[1,7,1,4,1,7,1],[1,2,1,3,1,1,1,3,1,1,4,1],[1,10]])
V,CV = master
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(CV)),CYAN,2)
#VIEW(hpc)

#Rimozioni/Creazione muri
toRemove = [141,139,135,133,129,127,123,121,99,97,93,91,89,87,85,83,81,79,75,73,47,46,45,44,41,39,37,35,31,29,27,23,22,21,20]
master = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)

#Creazione apertura per porte e finestre
#Finestra soggiorno grande
toMerge = 21
#cell = MKPOL([master[0],[[v+1 for v in  master[1][toMerge]]],None])
#VIEW(STRUCT([hpc,cell]))
diagram = assemblyDiagramInit([3,1,3])([[2,3,2],[1],[3,4,3]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)

toRemove = [136]
master = master[0],[cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#master = STRUCT(MKPOLS(master))
#VIEW(master)

#Finestra soggiorno piccola divisa su due celle
toMerge = 5
diagram = assemblyDiagramInit([1,1,3])([[1],[1],[3,4,3]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)

toRemove = [140]
master = master[0],[cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)


toMerge = 6
diagram = assemblyDiagramInit([1,2,3])([[1],[1,2],[3,4,3]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)

toRemove = [141]
master = master[0],[cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)

#Finestra Camera Genitori
toMerge = 13
diagram = assemblyDiagramInit([1,2,3])([[1],[2,1],[3,4,3]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)

toRemove = [145]
master = master[0],[cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)


#Porta Finestra camera genitori
toMerge = 28
diagram = assemblyDiagramInit([3,1,2])([[2,3,2],[1],[8,2]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)

toRemove = [150]
master = master[0],[cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)

#Finestra Ingresso
toMerge = 49
diagram = assemblyDiagramInit([1,3,3])([[1],[1,2,1],[3,4,3]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)

toRemove = [156]
master = master[0],[cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)

#Porta d'ingresso
toMerge = 64
diagram = assemblyDiagramInit([3,1,2])([[1,2,1],[1],[8,2]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)

toRemove = [161]
master = master[0],[cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)

#finestra grande bagno
toMerge = 101
diagram = assemblyDiagramInit([3,1,3])([[2,3,2],[1],[3,4,3]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)

toRemove = [167]
master = master[0],[cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)

#finestra grande Stanza figlio
toMerge = 89
diagram = assemblyDiagramInit([3,1,3])([[2,3,2],[1],[3,4,3]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)

toRemove = [174]
master = master[0],[cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)


#Porta Finestra sul balcone
toMerge = 54
diagram = assemblyDiagramInit([3,1,2])([[0.5,3,0.5],[1],[8,2]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)

toRemove = [179]
master = master[0],[cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)

#Porta Soggiorno
toMerge = 35
diagram = assemblyDiagramInit([1,3,2])([[1],[0.5,2,0.5],[8,2]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)

toRemove = [183]
master = master[0],[cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)

#Porta Camera
toMerge = 42
diagram = assemblyDiagramInit([1,3,2])([[1],[0.5,2,0.5],[8,2]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)

toRemove = [187]
master = master[0],[cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)


#Porta Bagno
toMerge = 80
diagram = assemblyDiagramInit([1,3,2])([[1],[0.5,2,0.5],[8,2]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)

toRemove = [191]
master = master[0],[cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)

#Porta Ripostiglio
toMerge = 74
diagram = assemblyDiagramInit([1,3,2])([[1],[0.5,2,0.5],[8,2]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)

toRemove = [195]
master = master[0],[cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)

#Porta Camera
toMerge = 66
diagram = assemblyDiagramInit([1,3,2])([[1],[0.5,2,0.5],[8,2]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)

toRemove = [199]
master = master[0],[cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)

#muretto balcone
toMerge = 95
diagram = assemblyDiagramInit([1,1,2])([[1],[1],[4,6]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)

toRemove = [202]
master = master[0],[cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)

toMerge = 96
diagram = assemblyDiagramInit([1,1,2])([[1],[1],[4,6]])
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)

toRemove = [202]
master = master[0],[cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)

#balcone tondo
utility = T(1)(34)(S([1,2,3])([0.65,0.6,0.1])(utility))
balcone = COLOR(color(verde_chiaro))(T(1)(15.1)(S([1,2,3])([0.31,0.3,0.5])(R([2,1])(PI)(balconeTondo))))
master = STRUCT(MKPOLS(master))
casa = DIFFERENCE([master,utility])

#balcone ingresso
balconeEsterno_base = COLOR(color(mattone))(T([1,2])([8,20])(CUBOID([14,10,1])))
balconeEsterno_cornice1 = T([1,2])([8,30])(CUBOID([14,1,5]))
balconeEsterno_cornice2 = T([1,2])([8,20])(CUBOID([1,10,5]))
balconeEsterno_cornice3 = T([1,2])([21,24])(CUBOID([1,6,5]))
balconeEsterno_2 = COLOR(color(verde_chiaro))(STRUCT([balconeEsterno_cornice1,balconeEsterno_cornice2,balconeEsterno_cornice3]))
balconeEsterno = STRUCT([balconeEsterno_base, balconeEsterno_2])
#VIEW(balconeEsterno)
#casa_parziale = STRUCT([master,balcone,balconeTondo_piccolo,balconeEsterno])


casa_balconi = STRUCT([COLOR(color(mattone))(casa),balconeEsterno,balcone,balconeTondo_piccolo,infissi])
VIEW(casa_balconi)