from larcc import *
def cellNumbering (larModel,hpcModel):
    V,CV = larModel
    def cellNumbering0 (cellSubset,color=WHITE,scalingFactor=1,prova=0):
        text = TEXTWITHATTRIBUTES (TEXTALIGNMENT='centre', TEXTANGLE=0,
                                   TEXTWIDTH=0.1*scalingFactor,
                                   TEXTHEIGHT=0.2*scalingFactor,
                                   TEXTSPACING=0.025*scalingFactor)
        hpcList = [hpcModel]
        for cell in cellSubset:
            point = CCOMB([V[v] for v in CV[cell]])
            hpcList.append(T([1,2,3])(point)(COLOR(color)(text(str(cell+prova)))))
        return STRUCT(hpcList)
    return cellNumbering0
#fine##
DRAW = COMP([VIEW,STRUCT,MKPOLS])


#Soggiorno
contaCelle = 0
masterSoggiorno = assemblyDiagramInit([3,3,2])([[1,5,1],[1,7,1],[1,10]])
V,CV = masterSoggiorno
hpc = SKEL_1(STRUCT(MKPOLS(masterSoggiorno)))
hpc = cellNumbering (masterSoggiorno,hpc)(range(len(CV)),CYAN,2)
contaCelle += len(CV)
infoCels = STRUCT([hpc])
#VIEW(hpc)

#Finestra
toMerge = 3
diagramSoggiorno = assemblyDiagramInit([1,3,3])([[1],[2,3,2],[2.5,5,2.5]])
masterSoggiorno = diagram2cell(diagramSoggiorno,masterSoggiorno,toMerge)
hpcFinestraSoggiorno = SKEL_1(STRUCT(MKPOLS(masterSoggiorno)))
hpcFinestraSoggiorno = cellNumbering (masterSoggiorno,hpcFinestraSoggiorno)(range(len(masterSoggiorno[1])),CYAN,2,contaCelle)
#VIEW(STRUCT([hpc,hpcFinestraSoggiorno]))
#VIEW(hpcFinestraSoggiorno)
#Fine

#Muro
toRemove = [8,21]
masterSoggiorno = masterSoggiorno[0],[cell for k,cell in enumerate(masterSoggiorno[1]) if not (k in toRemove)]
#masterSoggiorno = STRUCT(MKPOLS(masterSoggiorno))

#VIEW(masterSoggiorno)

#Porta
toMerge = 13
cell = MKPOL([masterSoggiorno[0],[[v+1 for v in  masterSoggiorno[1][toMerge]]],None])

diagramPortaSoggiorno = assemblyDiagramInit([1,3,2])([[1],[2,3,2],[8,2]])
masterSoggiorno= diagram2cell(diagramPortaSoggiorno,masterSoggiorno,toMerge)
hpcPortaSoggiorno = SKEL_1(STRUCT(MKPOLS(masterSoggiorno)))
hpcPortaSoggiorno = cellNumbering (masterSoggiorno,hpcPortaSoggiorno)(range(len(masterSoggiorno[1])),CYAN,2,contaCelle)
#VIEW(hpcPortaSoggiorno)

toRemove = [25]
masterSoggiorno = masterSoggiorno[0],[cell for k,cell in enumerate(masterSoggiorno[1]) if not (k in toRemove)]
masterSoggiorno = STRUCT(MKPOLS(masterSoggiorno))
#VIEW(masterSoggiorno)

#Camera Genitori
masterGenitori = assemblyDiagramInit([3,2,2])([[1,5,1],[6,1],[1,10]])
V,CV = masterGenitori
hpc = SKEL_1(STRUCT(MKPOLS(masterGenitori)))
hpc = cellNumbering (masterGenitori,hpc)(range(len(CV)),CYAN,2,contaCelle)
contaCelle += len(CV)
infoCels = STRUCT([T(2)(9)(hpc),infoCels])

#VIEW(hpc)

#Finestra
toMerge = 1
diagramGenitori = assemblyDiagramInit([1,3,3])([[1],[1.5,3,1.5],[2.5,5,2.5]])
masterGenitori = diagram2cell(diagramGenitori,masterGenitori,toMerge)
hpcFinestraGenitori = SKEL_1(STRUCT(MKPOLS(masterGenitori)))
hpcFinestraGenitori = cellNumbering (masterGenitori,hpcFinestraGenitori)(range(len(masterGenitori[1])),CYAN,2,contaCelle)
#VIEW(STRUCT([hpc,hpcFinestraGenitori]))
#VIEW(hpcFinestraGenitori)
#Fine

#Muro
toRemove = [4,15]
masterGenitori = masterGenitori[0],[cell for k,cell in enumerate(masterGenitori[1]) if not (k in toRemove)]
#DRAW(masterGenitori)

#VIEW(STRUCT([masterGenitori]))

#Porta
toMerge = 7
cell = MKPOL([masterGenitori[0],[[v+1 for v in  masterGenitori[1][toMerge]]],None])

diagramPortaGenitori = assemblyDiagramInit([1,3,2])([[1],[0,2,4],[8,2]])
masterGenitori= diagram2cell(diagramPortaGenitori,masterGenitori,toMerge)
hpcPortaGenitori = SKEL_1(STRUCT(MKPOLS(masterGenitori)))
hpcPortaGenitori = cellNumbering (masterGenitori,hpcPortaGenitori)(range(len(masterGenitori[1])),CYAN,2,contaCelle)
#VIEW(hpcPortaGenitori)

toRemove = [19]
masterGenitori = masterGenitori[0],[cell for k,cell in enumerate(masterGenitori[1]) if not (k in toRemove)]
masterGenitori = T(2)(9)(STRUCT(MKPOLS(masterGenitori)))
#VIEW(masterGenitori)

#Ripostiglio
masterRipostiglio = assemblyDiagramInit([1,3,2])([[3],[1,2,1],[1,10]])
V,CV = masterRipostiglio
hpc = SKEL_1(STRUCT(MKPOLS(masterRipostiglio)))
hpc = cellNumbering (masterRipostiglio,hpc)(range(len(CV)),CYAN,2,contaCelle)
contaCelle += len(CV)
infoCels = STRUCT([T([1,2])([7,11])(hpc),infoCels])


#VIEW(hpc)

#Porta
toMerge = 1
diagramRipostiglio = assemblyDiagramInit([3,1,2])([[0.5,2,0.5],[1],[8,2]])
masterRipostiglio = diagram2cell(diagramRipostiglio,masterRipostiglio,toMerge)
hpcPortaRipostiglio = SKEL_1(STRUCT(MKPOLS(masterRipostiglio)))
hpcPortaRipostiglio = cellNumbering (masterRipostiglio,hpcPortaRipostiglio)(range(len(masterRipostiglio[1])),CYAN,2,contaCelle)
#VIEW(STRUCT([hpc,hpcPortaRipostiglio]))
#VIEW(hpcPortaRipostiglio)
#Fine

#Muro
toRemove = [2,7]
masterRipostiglio = masterRipostiglio[0],[cell for k,cell in enumerate(masterRipostiglio[1]) if not (k in toRemove)]
masterRipostiglio = T([1,2])([7,11])(STRUCT(MKPOLS(masterRipostiglio)))
#VIEW(masterRipostiglio)



#Corridoio
masterCorridoio = assemblyDiagramInit([1,2,2])([[3],[1,10],[1,10]])
V,CV = masterCorridoio
hpc = SKEL_1(STRUCT(MKPOLS(masterCorridoio)))
hpc = cellNumbering (masterCorridoio,hpc)(range(len(CV)),CYAN,2,contaCelle)
contaCelle += len(CV)
infoCels = STRUCT([ T(1)(7)(hpc),infoCels])
#VIEW(hpc)

#Porta
toMerge = 1
diagramCorridoio = assemblyDiagramInit([3,1,2])([[0.5,2,0.5],[1],[8,2]])
masterCorridoio = diagram2cell(diagramCorridoio,masterCorridoio,toMerge)
hpcCorridoio = SKEL_1(STRUCT(MKPOLS(masterCorridoio)))
hpcCorridoio = cellNumbering (masterCorridoio,hpcCorridoio)(range(len(masterCorridoio[1])),CYAN,2,contaCelle)
#VIEW(STRUCT([hpc,hpcCorridoio]))
#VIEW(hpcCorridoio)
#Fine

#Muro
toRemove = [2,5]
masterCorridoio = masterCorridoio[0],[cell for k,cell in enumerate(masterCorridoio[1]) if not (k in toRemove)]
masterCorridoio = T(1)(7)(STRUCT(MKPOLS(masterCorridoio)))
#VIEW(masterCorridoio)


#Mia Camera
masterCamera = assemblyDiagramInit([3,3,2])([[1,4,1],[1,7,1],[1,10]])
V,CV = masterCamera
hpc = SKEL_1(STRUCT(MKPOLS(masterCamera)))
hpc = cellNumbering (masterCamera,hpc)(range(len(CV)),CYAN,2,contaCelle)
contaCelle += len(CV)
infoCels = STRUCT([T([1,2])([10,9])(hpc),infoCels])
#VIEW(hpc)

#Finestra
toMerge = 15
diagramCamera = assemblyDiagramInit([1,3,3])([[1],[1,5,1],[2.5,5,2.5]])
masterCamera = diagram2cell(diagramCamera,masterCamera,toMerge)
hpcFinestraCamera = SKEL_1(STRUCT(MKPOLS(masterCamera)))
hpcFinestraCamera = cellNumbering (masterCamera,hpcFinestraCamera)(range(len(masterCamera[1])),CYAN,2,contaCelle)
#VIEW(STRUCT([hpc,hpcFinestraCamera]))
#VIEW(hpcFinestraCamera)
#Fine

#Muro
toRemove = [9,21]
masterCamera = masterCamera[0],[cell for k,cell in enumerate(masterCamera[1]) if not (k in toRemove)]
#VIEW(masterCamera)

#Porta
toMerge = 3
cell = MKPOL([masterCamera[0],[[v+1 for v in  masterCamera[1][toMerge]]],None])

diagramPortaGenitori = assemblyDiagramInit([1,3,2])([[1],[5,2,0],[8,2]])
masterCamera= diagram2cell(diagramPortaGenitori,masterCamera,toMerge)
hpcPortaGenitori = SKEL_1(STRUCT(MKPOLS(masterCamera)))
hpcPortaGenitori = cellNumbering (masterCamera,hpcPortaGenitori)(range(len(masterCamera[1])),CYAN,2,contaCelle)
#VIEW(hpcPortaGenitori)

toRemove = [23]
masterCamera = masterCamera[0],[cell for k,cell in enumerate(masterCamera[1]) if not (k in toRemove)]
masterCamera = T([1,2])([10,9])(STRUCT(MKPOLS(masterCamera)))
#VIEW(masterCamera)


#Bagno
masterBagno = assemblyDiagramInit([3,3,2])([[1,4,1],[1,3,1],[1,10]])
V,CV = masterBagno
hpc = SKEL_1(STRUCT(MKPOLS(masterBagno)))
hpc = cellNumbering (masterBagno,hpc)(range(len(CV)),CYAN,2,contaCelle)
contaCelle += len(CV)
infoCels = STRUCT([T([1,2])([10,4])(hpc),infoCels])

#VIEW(hpc)

#Finestra
toMerge = 15
diagramBagno = assemblyDiagramInit([1,3,3])([[1],[0.5,2,0.5],[2.5,5,2.5]])
masterBagno = diagram2cell(diagramBagno,masterBagno,toMerge)
hpcFinestraBagno = SKEL_1(STRUCT(MKPOLS(masterBagno)))
hpcFinestraBagno = cellNumbering (masterBagno,hpcFinestraBagno)(range(len(masterBagno[1])),CYAN,2,contaCelle)
#VIEW(STRUCT([hpc,hpcFinestraBagno]))
#VIEW(hpcFinestraBagno)
#Fine

#Muro
toRemove = [9,21]
masterBagno = masterBagno[0],[cell for k,cell in enumerate(masterBagno[1]) if not (k in toRemove)]
#masterBagno = T([1,2])([10,4])(STRUCT(MKPOLS(masterBagno)))
#VIEW(masterBagno)

#Porta
toMerge = 3
cell = MKPOL([masterBagno[0],[[v+1 for v in  masterBagno[1][toMerge]]],None])

diagramPortaBagno = assemblyDiagramInit([1,3,2])([[1],[0.5,2,0.5],[8,2]])
masterBagno= diagram2cell(diagramPortaBagno,masterBagno,toMerge)
hpcPortaBagno = SKEL_1(STRUCT(MKPOLS(masterBagno)))
hpcPortaBagno = cellNumbering (masterBagno,hpcPortaBagno)(range(len(masterBagno[1])),CYAN,2,contaCelle)
#VIEW(hpcPortaBagno)

toRemove = [25]
masterBagno = masterBagno[0],[cell for k,cell in enumerate(masterBagno[1]) if not (k in toRemove)]
masterBagno = T([1,2])([10,4])(STRUCT(MKPOLS(masterBagno)))
#VIEW(masterBagno)

#Cucina
masterCucina = assemblyDiagramInit([3,2,2])([[1,4,1],[1,3],[1,10]])
V,CV = masterCucina
hpc = SKEL_1(STRUCT(MKPOLS(masterCucina)))
hpc = cellNumbering (masterCucina,hpc)(range(len(CV)),CYAN,2,contaCelle)
contaCelle += len(CV)
infoCels = STRUCT([T(1)(10)(hpc),infoCels])
#VIEW(hpc)

#Finestra
toMerge = 11
diagramCucina = assemblyDiagramInit([1,3,3])([[1],[0.5,2,0.5],[2.5,5,2.5]])
masterCucina = diagram2cell(diagramCucina,masterCucina,toMerge)
hpcFinestraCucina = SKEL_1(STRUCT(MKPOLS(masterCucina)))
hpcFinestraCucina = cellNumbering (masterCucina,hpcFinestraCucina)(range(len(masterCucina[1])),CYAN,2,contaCelle)
#VIEW(STRUCT([hpc,hpcFinestraCucina]))
#VIEW(hpcFinestraCucina)
#Fine

#Muro
toRemove = [7,15]
masterCucina = masterCucina[0],[cell for k,cell in enumerate(masterCucina[1]) if not (k in toRemove)]

#VIEW(masterCucina)

#Porta
toMerge = 3
cell = MKPOL([masterCucina[0],[[v+1 for v in  masterCucina[1][toMerge]]],None])

diagramPortaCucina = assemblyDiagramInit([1,3,2])([[1],[0.5,2,0.5],[8,2]])
masterCucina= diagram2cell(diagramPortaCucina,masterCucina,toMerge)
hpcPortaCucina = SKEL_1(STRUCT(MKPOLS(masterCucina)))
hpcPortaCucina = cellNumbering (masterCucina,hpcPortaCucina)(range(len(masterCucina[1])),CYAN,2,contaCelle)
#VIEW(hpcPortaCucina)

toRemove = [19]
masterCucina = masterCucina[0],[cell for k,cell in enumerate(masterCucina[1]) if not (k in toRemove)]
masterCucina = T(1)(10)(STRUCT(MKPOLS(masterCucina)))
#VIEW(masterCucina)


#balconcino
masterbalconcino = assemblyDiagramInit([1,1,1])([[16],[5],[1]])
V,CV = masterbalconcino
hpc = SKEL_1(STRUCT(MKPOLS(masterbalconcino)))
hpc = cellNumbering (masterbalconcino,hpc)(range(len(CV)),CYAN,2,contaCelle)
contaCelle += len(CV)
masterbalconcino = COLOR([0.81,0.57,0.45])(T(2)(-5)(STRUCT(MKPOLS(masterbalconcino))))
infoCels = STRUCT([hpc,infoCels])
#VIEW(hpc)

interno = COLOR([0.96,0.8,0.69])(STRUCT([masterSoggiorno,masterCucina,masterBagno,masterCamera,masterCorridoio,masterRipostiglio,masterGenitori]))
appartamento = STRUCT([masterbalconcino,interno])


#VIEW(STRUCT([masterSoggiorno,masterCucina,masterBagno,masterCamera,masterCorridoio,masterRipostiglio,masterGenitori]))

#VIEW(infocels)
