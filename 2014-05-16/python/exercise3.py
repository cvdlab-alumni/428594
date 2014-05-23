#rimozione celle
def removeCells(toRemove,(C,CV)):
	master = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
	return master

#unione celle
def mergeCells(toMerge,master):
	cell = MKPOL([master[0],[[v+1 for v in  master[1][toMerge]]],None])
	return cell

#rinumero celle -> modifica del metodo in sysml.py
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

#renumerazione celle
def renumberingCells(master,hpc,countCells=0):
	C,CV = master
	print len(CV)
	hpc = cellNumbering (master,hpc)(range(len(CV)),CYAN,2,countCells)
	return hpc

#prova utilizzo (preso dal test04.py di sysml.py)

DRAW = COMP([VIEW,STRUCT,MKPOLS])

master = assemblyDiagramInit([5,5,2])([[.3,3.2,.1,5,.3],[.3,4,.1,2.9,.3],[.3,2.7]])
V,CV = master
hpc = SKEL_1(STRUCT(MKPOLS(master)))
appo = renumberingCells(master,hpc)
VIEW(appo)

toRemove = [13,33,17,37]
master = removeCells(toRemove,master)
DRAW(master)

toMerge = 29
cell = mergeCells(toMerge,master)
VIEW(STRUCT([hpc,cell]))

#fine


