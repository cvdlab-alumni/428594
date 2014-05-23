from larcc import *
#from exercice1 import *

GRID = COMP([INSR(PROD),AA(QUOTE)])

#macchine
dominio = INTERVALS(1)(20) 
a1 = BEZIER(S1)([[0.81, 3.16], [0.76, 3.73], [1.46, 4.17], [1.73, 4.07]]) 
c1 = MAP(a1)(dominio)
a2 = BEZIER(S1)([[5.33, 3.18], [5.47, 5.36], [2.38, 5.73], [1.73, 4.07]]) 
c2 = MAP(a2)(dominio)
a3 = BEZIER(S1)([[5.33, 3.18], [5.33, 3.17], [0.81, 3.17], [0.81, 3.16]])
c3 = MAP(a3)(dominio)
a = STRUCT([c1,c2,c3])
auto = SOLIDIFY(a)
a4 = BEZIER(S1)([[0.8, 2.77], [0.79, 2.76], [0.81, 3.27], [0.8, 3.28]])
c4 = MAP(a4)(dominio)
a5 = BEZIER(S1)([[0.8, 2.77], [0.79, 2.76], [0.95, 2.75], [0.95, 2.74]])
c5 = MAP(a5)(dominio)
a6 = BEZIER(S1)([[2.06, 2.72], [1.92, 3.35], [1.05, 3.37], [0.95, 2.74]])
c6 = MAP(a6)(dominio)
a7 = BEZIER(S1)([[2.06, 2.72], [2.05, 2.72], [3.09, 2.68], [3.1, 2.68]])
c7 = MAP(a7)(dominio)
a8 = BEZIER(S1)([[3.09, 2.68], [3.09, 2.68], [3.09, 3.18], [3.09, 3.18]])
c8 = MAP(a8)(dominio)
a9 = BEZIER(S1)([[3.09, 3.18], [3.09, 3.18], [0.81, 3.27], [0.8, 3.28]])
c9 = MAP(a9)(dominio)
ab = STRUCT([c4,c5,c6,c7,c8,c9])
b = T(1)(6.18)(R([1,1])(PI)(ab))
c = STRUCT([ab,b])
parafango = SOLIDIFY(c)
auto_c = STRUCT([auto,parafango])
auto3D = PROD([auto_c,Q(2)])
f1= BEZIER(S1)([[2.26, 1.9], [3.05, 2.65], [3.78, 2.98], [5.01, 2.93]])
f2= BEZIER(S1)([[5.02, 2.93], [5, 2.84], [4.91, 2.07], [4.91, 2.14]])
f3= BEZIER(S1)([[4.91, 2.14], [4.43, 2.05], [3, 1.87], [2.26, 1.9]])
c10 = MAP(f1)(dominio)
c11 = MAP(f2)(dominio)
c12 = MAP(f3)(dominio)
fin1 = STRUCT([c10,c11,c12])
fin2 = T(1)(10.5)(R([1,1])(PI)(fin1))
finestrini = STRUCT([fin1,fin2])
finestrini_p = SOLIDIFY(finestrini)
finestrini3D = COLOR(color(azzurro))(T([1,2,3])([0.8,2,-0.05])(S(1)(0.5)(PROD([finestrini_p,Q(2.1)]))))
#VIEW(finestrini3D)

#ruote
pneumatico = COLOR(BLACK)(CYLINDER([0.4,2])(100))
cerchione = COLOR(color(grigio))(CYLINDER([0.2,2])(100))
ruota1 = T([1,2])([1.5,2.7])(STRUCT([pneumatico,cerchione]))
ruota2 = T(1)(3.2)(ruota1)
ruote = STRUCT([ruota1,ruota2])
macchina1 = T([1,2])([-0.5,3])(T(3)(-1)(R([2,3])(PI/2)(STRUCT([finestrini3D,COLOR(color(blu))(auto3D),ruote]))))
macchina2 = T([1,2])([-0.5,5.9])(T(3)(-1)(R([2,3])(PI/2)(STRUCT([finestrini3D,COLOR(color(grigio))(auto3D),ruote]))))
macchina3 = T([1,2])([15,13])(T(3)(-1)(R([2,3])(PI/2)(STRUCT([finestrini3D,COLOR(color(verde_auto))(auto3D),ruote]))))
macchina4 = T([1,2,3])([12,-10,-1])(R([1,2])(-PI/2)(R([2,3])(PI/2)(STRUCT([finestrini3D,COLOR(color(rosso))(auto3D),ruote]))))
macchine = STRUCT([macchina1,macchina2,macchina3,macchina4])

#Scala per piano 
gradino = CUBOID([3,1,1])
ringhiera_struttura = CUBOID([0.5,1,5])
ringhiera_sx = T(2)(0.3)(S(2)(0.7)(ringhiera_struttura))
ringhiera_dx = DIFFERENCE([ringhiera_struttura,ringhiera_sx])
corrimano = S(2)(0.1)(T(3)(5)(JOIN(AA(MK)([[0,0,0],[0.5,0,0],[0,10,1],[0.5,10,1]]))))
ringhieraCompleta_sx = STRUCT([ringhiera_dx,corrimano])
ringhieraCompleta_dx = T(1)(2.5)(ringhieraCompleta_sx)
ringhieraCompeleta = marmo(STRUCT([ringhieraCompleta_sx,ringhieraCompleta_dx]))
gradino = STRUCT([gradino,ringhieraCompeleta])
rampa = marmo(STRUCT(NN(4)([T([2,3])([1,1]),gradino])))
pianerottolo = marmo(T(2)(-2)(CUBOID([3,4,1])))
p = marmo(T([1,2,3])([-4,-2,10])(CUBOID([1,4,1])))
pianerottolo_translato = marmo(T([2,3])([7,5])(pianerottolo))
pianerottolo_conRampa = STRUCT([pianerottolo_translato,marmo(T([2,3])([5,5])(ringhiera_dx)),marmo(T([1,2,3])([2.5,5,5])(ringhiera_dx))])
duerampe = marmo(STRUCT([rampa]))
rampa = STRUCT([duerampe,pianerottolo,pianerottolo_conRampa])
rampa_seconda = T([2,3])([6.5,6])(R([3,2])(PI)(T(3)(1)(R([1,3])(PI)(rampa))))
scalaPiano = STRUCT([p,rampa,rampa_seconda])
#fine

#forma tetto
trinagolo = [[0,0],[10,0],[5,5]]
superficie_triangolo = JOIN(AA(MK)(trinagolo))
modello_tetto_pieno = PROD([superficie_triangolo,Q(10)])
scava_tetto = T([1,2])([0.44,-0.5])(S([1,3])([0.9,0.2])(modello_tetto_pieno))
modello_tetto_noCol = tegole(DIFFERENCE([modello_tetto_pieno,scava_tetto]))
scava_tetto_color = COLOR(color(mattone))(T([1,3])([0.44,1])(S([1,2,3])([0.9,0.9,0.1])(modello_tetto_pieno)))
modello_tetto = STRUCT([modello_tetto_noCol,scava_tetto_color])
modello_tetto_bis = T(3)(15)(S(3)(-1)(modello_tetto))
tetto_grande = T([1,2,3])([6.5,21.35,30])(S([1,2,3])([1.7,1.31,1.5])(R([2,3])(PI/2)(STRUCT([modello_tetto,modello_tetto_bis]))))
tetto_piccolo = T([1,2])([10,-8.9])(S([1,2])([0.5,1.1])(R([1,2])(PI/2)(tetto_grande)))
tetto = STRUCT([tetto_grande,tetto_piccolo])

#terrazza
terrazzaGrande = COLOR(color(mattone))(T([1,2,3])([47,3,21])(CUBOID([14,17,1])))
terrazzaPiccolo = COLOR(color(mattone))(T([1,3])([60,21])(CUBOID([9,15,1])))
rin1 = T([1,2,3])([47,3,21])(CUBOID([1,17,4]))
rin2 = T([1,2,3])([51,19,21])(CUBOID([10,1,4]))
rin3 = T([1,2,3])([60,15,21])(CUBOID([1,4,4]))
rin4 = T([1,2,3])([47,3,21])(CUBOID([13,1,4]))
rin5 = T([1,3])([60,21])(CUBOID([1,4,4]))
rin6 = T([1,3])([61,21])(CUBOID([8,1,4]))
rin7 = T([1,2,3])([61,15,21])(CUBOID([8,1,4]))
rin8 = T([1,2,3])([68,1,21])(CUBOID([1,14,4]))
ringhiera_terrazza= COLOR(color(verde_chiaro))(STRUCT([rin1,rin2,rin3,rin4,rin5,rin6,rin7,rin8]))
terrazza = STRUCT([terrazzaGrande,terrazzaPiccolo,ringhiera_terrazza])

#strada
strada_pezzo = porfido(CUBOID([4,4,1]))
pezzo_strada = S(1)(2.4)(strada_pezzo)
strada = T([1,2])([6,-45])(STRUCT(NN(25)([T([2])([4]),pezzo_strada])))

#palazzo
vicinoSuperiore = STRUCT(NN(2)([T(3)(10),casa_balconi]))
vicinoAttaccato = T([1,3])([69,-10])(S(1)(-1)(vicinoSuperiore))

#scale
master = assemblyDiagramInit([3,3,2])([[1,10.5,1],[1,6,1],[1,10]])
V,CV = master
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(CV)),CYAN,2)
toRemove = [11,10,9,8,7,6]
master = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
master = COLOR(color(verde))(STRUCT(MKPOLS(master)))
vetro_scala1 = T([1,3])([1,1])(MATERIAL([1,1,1,0.1, 0,0,0.8,0.5, 1,1,1,0.1, 0,0,0,0.1, 100])(GRID([[7.5],[1],[10]])))
vetro_scala2 = T([1,2,3])([1,7,1])(MATERIAL([1,1,1,0.1, 0,0,0.8,0.5, 1,1,1,0.1, 0,0,0,0.1, 100])(GRID([[10.5],[1],[10]])))
master = STRUCT([master,vetro_scala2,vetro_scala1])
trombaScala_PianoTerra = R([2,1])(-PI/2)(R([1,2])(PI/2)(T([1,2])([-47,-20])(S([1,2])([2,2])(STRUCT([master,T([1,2])([9.5,4])(R([1,2])(PI/2)(scalaPiano))])))))
trombaScala = T(3)(-10)(STRUCT(NN(2)([T(3)(10),trombaScala_PianoTerra])))

#chiusara scale
master = assemblyDiagramInit([3,3,3])([[1,10.5,1],[1,6,1],[1,10,1]])
V,CV = master
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(CV)),CYAN,2)
toRemove = [16,15,14,13,12,10,9]
master = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
master = COLOR(color(verde))(STRUCT(MKPOLS(master)))
vetro_scala1 = T([1,2,3])([4,7,1])(MATERIAL([1,1,1,0.1, 0,0,0.8,0.5, 1,1,1,0.1, 0,0,0,0.1, 100])(GRID([[7.5],[1],[10]])))
vetro_scala2 = T([1,3])([1,1])(MATERIAL([1,1,1,0.1, 0,0,0.8,0.5, 1,1,1,0.1, 0,0,0,0.1, 100])(GRID([[10.5],[1],[10]])))
vetro_scala3 = T([1,2,3])([1,1,11])(MATERIAL([1,1,1,0.1, 0,0,0.8,0.5, 1,1,1,0.1, 0,0,0,0.1, 100])(GRID([[10.5],[6],[1]])))
pianerottolo_antiSuicidio = marmo(T([1,2,3])([0.5,1,0])(CUBOID([4,7,1])))
chiusa_scale = T([1,2,3])([22,4,20])(S([1,2])([2,2])(STRUCT([master,vetro_scala2,vetro_scala1,vetro_scala3,pianerottolo_antiSuicidio])))

#boxe auto
master = assemblyDiagramInit([3,5,2])([[1,4,1],[1,8.5,1,8.5,1],[1,10]])
V,CV = master
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(CV)),CYAN,2)
toRemove = [27,23,19,17,15,13,11,7,3]
master = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
master = COLOR(color(verde))(STRUCT(MKPOLS(master)))
box1 = S([2,3])([0.7,0.9])(master)
box2 = T([1,2])([16,4])(S(2)(0.6)(master))
boxe_auto = STRUCT([box1,box2])

#corridoi scale appartamenti
#primo piano
base = COLOR(color(mattone))(T([1,2,3])([22,20,10])(CUBOID([25,4,1])))
balconcino_base = COLOR(color(verde_chiaro))(T([1,2,3])([22,24,10])(CUBOID([25,1,5])))
balconcino1 = STRUCT([base,balconcino_base])
base_top = COLOR(color(mattone))(T([1,2,3])([22,20,10])(CUBOID([30,4,1])))
balconcino_baseTop = COLOR(color(verde_chiaro))(T([1,2,3])([22,24,10])(CUBOID([30,1,5])))
chiusa_top = COLOR(color(verde_chiaro))(T([1,2,3])([51,20,10])(CUBOID([1,4,5])))
balconcinoTop = STRUCT([base_top,balconcino_baseTop,chiusa_top])
balconcino = STRUCT([balconcino1,T(3)(-10)(balconcino1),T(3)(10)(balconcinoTop)])
base_scala = T([1,2])([22,4])(marmo(CUBOID([24,16,1])))

#fontana
base_fontana = CYLINDER([5,2])(100)
acqua_f = S([1,2])([0.9,0.9])(base_fontana)
fontana_noH2O = marmo(DIFFERENCE([base_fontana,acqua_f]))
h2o = acqua(acqua_f)
fontana1 = STRUCT([fontana_noH2O,h2o])
fontana2 = T(3)(2)(S([1,2])([0.5,0.5])(fontana1))
fontana3 = T(3)(2)(S([1,2])([0.5,0.5])(fontana2))
b1 = BEZIER(S1)([[0,0,0],[0,0,1]])
b2 = BEZIER(S1)([[2,10,0],[2,10,1]])
b3 = BEZIER(S1)([[4,7,0],[4,7,1]])
controls = [b1,b2,b3]
knots = [0,0,0,1,1,1]
tbspline = TBSPLINE(S2)(2)(knots)(controls)
dom = larModelProduct([larDomain([10]),larDom(knots)])
obj1 = larMap(tbspline)(dom)
schizzo_mezzo = STRUCT( MKPOLS(obj1) )
b1 = BEZIER(S1)([[0,7,0],[0,7,1]])
b2 = BEZIER(S1)([[2,10,0],[2,10,1]])
b3 = BEZIER(S1)([[4,0,0],[4,0,1]])
controls = [b1,b2,b3]
knots = [0,0,0,1,1,1]
tbspline = TBSPLINE(S2)(2)(knots)(controls)
dom = larModelProduct([larDomain([10]),larDom(knots)])
obj1 = larMap(tbspline)(dom)
schizzo_altromezzo = T(1)(4)(STRUCT( MKPOLS(obj1) ))
schizzo = T([1,2,3])([-4,0.5,-0.2])(acqua(S(3)(0.9)(R([2,3])(PI/2)(STRUCT([schizzo_mezzo,schizzo_altromezzo])))))
fontana = T([1,2])([60,-25])(S([1,2])([2,2])(STRUCT([fontana1,fontana2,fontana3,schizzo])))

#alberi
tronco = COLOR(color(marrone))(CYLINDER([1,10])(100))
chioma = larSphere(4)()
chioma = COLOR(color(verde))(T([1,2])([0,0])(STRUCT(MKPOLS(chioma))))
albero = T(3)(10)(R([3,3])(PI)(STRUCT([chioma,tronco])))
albero1 = T([1,2])([4,-10])(albero)
albero2 = T([1,2])([17,-20])(albero)
albero3 = T([1,2])([4,-30])(albero)
boschetto = STRUCT([albero1,albero2,albero3])

#terreno
fiori_campo = fiori(CUBOID([10,10,1]))
aiuola = T([1,2,3])([-20,-50,-1])(STRUCT(NN(10)([T([2])([10]),fiori_campo])))
aiuola2 = STRUCT(NN(7)([T([1])([10]),fiori_campo]))
aiuola3 = STRUCT(NN(1)([T([2])([10]),aiuola2]))
aiuola_grande = T([1,2,3])([10,40,-1])(STRUCT([aiuola2,aiuola3]))
buco = COLOR(RED)(T([1,2,3])([30,40,-1])(CUBOID([50,20,1])))
terreno_piccolo = prato(CUBOID([10,10,1]))
terreno_or = STRUCT(NN(3)([T([1])([10]),terreno_piccolo]))
terreno_ver = STRUCT(NN(9)([T([2])([10]),terreno_or]))
ter_or = STRUCT(NN(7)([T([1])([10]),terreno_piccolo]))
ter_ver = STRUCT(NN(7)([T([2])([10]),ter_or]))
ter_pic = T([1,2])([30,0])(STRUCT([ter_or,ter_ver]))
t = STRUCT([terreno_ver,terreno_or,ter_pic])
terreno = T([1,2,3])([-20,-40,-1])(t)
aiuole = STRUCT([aiuola,aiuola_grande])

finale =STRUCT([aiuole,boschetto,macchine,fontana,strada,base_scala,balconcino,vicinoAttaccato,vicinoSuperiore,tetto,terrazza,trombaScala,boxe_auto,chiusa_scale,terreno])

VIEW(finale)


