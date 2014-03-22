from pyplasm import *
#facciata nordest
#creo la facciata 2d del piano terra

vertsOct = [[10,5,0],[0,15,0],[10,5,10],[0,15,10]]
octNE = JOIN(AA(MK)(vertsOct))

#creo la faccia 2d del secondo muro ad ottagono
vertsNEOct = [[10,8,0],[3,15,0],[10,8,5],[3,15,5]]
faceNEPartial = JOIN(AA(MK)(vertsNEOct))

#win0 = STRUCT([rectWin0,T([1,2,3])([10,35,10])(diskWinRot)])
#facciata nord secondo piano muro (piccolo)
vertsNEOctTopWall = [[10,8,0],[3,15,0],[10,8,5],[3,15,5]]
faceNETopWall = JOIN(AA(MK)(vertsNEOctTopWall))
translaSec = T(3)(15)

#facciata  nord terzo piano (tetto grande)
vertsTopBig = [[10,8,0],[3,15,0],[15,20,10]]
faceNETopBig = JOIN(AA(MK)(vertsTopBig))
translaThird = T(3)(20)

#facciata nord quarto piano (tetto piccolo e muro)
vertsSmallWall = [[14,18,0],[13,19,0],[14,18,5],[13,19,5]]
faceNESmallWall = JOIN(AA(MK)(vertsSmallWall))
translaFourth = T(3)(28)

vertsSmallTop = [[14,18],[13,19],[15,20,5]]
faceNETop = JOIN(AA(MK)(vertsSmallTop))
translaFive = T(3)(33)


ne = STRUCT([octNE, T(3)(10)(faceNEPartial),translaSec(faceNETopWall),COLOR([0.93,0.36,0.25])(translaThird(faceNETopBig)),
	translaFourth(faceNESmallWall), COLOR([0.93,0.36,0.25])(translaFive(faceNETop))])

#facciata est
#creo la facciata 2d del piano terra

vertsOct = [[0,15,0],[0,25,0],[0,15,10],[0,25,10]]
octEst = JOIN(AA(MK)(vertsOct))

vertsDoors = [[0,18,0],[0,22,0],[0,18,7],[0,22,7]]
doors = JOIN(AA(MK)(vertsDoors))

#creo la faccia 2d del secondo muro ad ottagono
vertsEstOct = [[3,15,0],[3,25,0],[3,15,5],[3,25,5]]
faceEstPartial = JOIN(AA(MK)(vertsEstOct))
#creo finestre
vertsWin0 =[[3,16,0],[3,18,0],[3,16,10],[3,18,10]]
rectWin0 = JOIN(AA(MK)(vertsWin0))

vertsWin1 =[[3,19,0],[3,21,10],[3,21,0],[3,19,10]]
rectWin1 = JOIN(AA(MK)(vertsWin1))

vertsWin2 =[[3,22,0],[3,22,10],[3,24,0],[3,24,10]]
rectWin2 = JOIN(AA(MK)(vertsWin2))
faceEst = (STRUCT([faceEstPartial, COLOR([0.85,0.57,0.4])(rectWin0), COLOR([0.85,0.57,0.4])(rectWin1), COLOR([0.85,0.57,0.4])(rectWin2) ]))

#facciata nord secondo piano muro (piccolo)
vertsEstOctTopWall = [[3,15,0],[3,25,0],[3,15,5],[3,25,5]]
faceEstTopWall = JOIN(AA(MK)(vertsEstOctTopWall))
translaSec = T(3)(15)

#facciata  nord terzo piano (tetto grande)
vertsTopBig = [[3,15,0],[3,25,0],[15,20,10]]
faceEstTopBig = JOIN(AA(MK)(vertsTopBig))
translaThird = T(3)(20)

#facciata nord quarto piano (tetto piccolo e muro)
vertsSmallWall = [[13,19,0],[13,19,5],[13,21,0],[13,21,5]]
faceEstSmallWall = JOIN(AA(MK)(vertsSmallWall))
translaFourth = T(3)(28)

vertsSmallTop = [[13,19],[13,21],[15,20,5]]
faceEstTop = JOIN(AA(MK)(vertsSmallTop))
translaFive = T(3)(33)


east = STRUCT([octEst,T(3)(10)(faceEst),translaSec(faceEstTopWall),COLOR([0.93,0.36,0.25])(translaThird(faceEstTopBig)),
	translaFourth(faceEstSmallWall), COLOR([0.93,0.36,0.25])(translaFive(faceEstTop)),COLOR([0.36,0.25,0.2])(doors)])

#facciata nordovest

vertsOct = [[20,5,0],[30,15,0],[20,5,10],[30,15,10]]
octNO = JOIN(AA(MK)(vertsOct))

#creo la faccia 2d del secondo muro ad ottagono
vertsNOOct = [[20,8,0],[27,15,0],[20,8,5],[27,15,5]]
faceNOPartial = JOIN(AA(MK)(vertsNOOct))

#win0 = STRUCT([rectWin0,T([1,2,3])([10,35,10])(diskWinRot)])
#facciata nord secondo piano muro (piccolo)
vertsNOOctTopWall = [[20,8,0],[27,15,0],[20,8,5],[27,15,5]]
faceNOTopWall = JOIN(AA(MK)(vertsNOOctTopWall))
translaSec = T(3)(15)

#facciata  nord terzo piano (tetto grande)
vertsTopBig = [[20,8,0],[27,15,0],[15,20,10]]
faceNOTopBig = JOIN(AA(MK)(vertsTopBig))
translaThird = T(3)(20)

#facciata nord quarto piano (tetto piccolo e muro)
vertsSmallWall = [[17,19,0],[16,18,0],[17,19,5],[16,18,5]]
faceNOSmallWall = JOIN(AA(MK)(vertsSmallWall))
translaFourth = T(3)(28)

vertsSmallTop = [[17,19],[16,18],[15,20,5]]
faceNOTop = JOIN(AA(MK)(vertsSmallTop))
translaFive = T(3)(33)



no = STRUCT([octNO,T(3)(10)(faceNOPartial),translaSec(faceNOTopWall),COLOR([0.93,0.36,0.25])(translaThird(faceNOTopBig)),
	translaFourth(faceNOSmallWall), COLOR([0.93,0.36,0.25])(translaFive(faceNOTop))])

#facciata ovest
#creo la facciata 2d del piano terra

vertsOct = [[30,15,0],[30,25,0],[30,15,10],[30,25,10]]
octOvest = JOIN(AA(MK)(vertsOct))

vertsDoors = [[30,18,0],[30,22,0],[30,18,7],[30,22,7]]
doors = JOIN(AA(MK)(vertsDoors))

#creo la faccia 2d del secondo muro ad ottagono
vertsOvestOct = [[27,15,0],[27,25,0],[27,15,5],[27,25,5]]
faceOvestPartial = JOIN(AA(MK)(vertsOvestOct))
#creo finestre
vertsWin0 =[[27,16,0],[27,18,0],[27,16,10],[27,18,10]]
rectWin0 = JOIN(AA(MK)(vertsWin0))

vertsWin1 =[[27,19,0],[27,21,10],[27,21,0],[27,19,10]]
rectWin1 = JOIN(AA(MK)(vertsWin1))

vertsWin2 =[[27,22,0],[27,22,10],[27,24,0],[27,24,10]]
rectWin2 = JOIN(AA(MK)(vertsWin2))
#diskWin = MAP(disk2D)(domain2D)
#diskWinRot = ROTATION([2,3])(PI/2)(diskWin)

#win0 = STRUCT([rectWin0,T([1,2,3])([10,35,10])(diskWinRot)])
faceOvest = (STRUCT([faceOvestPartial, COLOR([0.85,0.57,0.4])(rectWin0), COLOR([0.85,0.57,0.4])(rectWin1), COLOR([0.85,0.57,0.4])(rectWin2) ]))

#facciata nord secondo piano muro (piccolo)
vertsOvestOctTopWall = [[27,15,0],[27,25,0],[27,15,5],[27,25,5]]
faceOvestTopWall = JOIN(AA(MK)(vertsOvestOctTopWall))
translaSec = T(3)(15)

#facciata  nord terzo piano (tetto grande)
vertsTopBig = [[27,15,0],[27,25,0],[15,20,10]]
faceOvestTopBig = JOIN(AA(MK)(vertsTopBig))
translaThird = T(3)(20)

#facciata nord quarto piano (tetto piccolo e muro)
vertsSmallWall = [[17,19,0],[17,21,0],[17,19,5],[17,21,5]]
faceOvestSmallWall = JOIN(AA(MK)(vertsSmallWall))
translaFourth = T(3)(28)

vertsSmallTop = [[17,19],[17,21],[15,20,5]]
faceOvestTop = JOIN(AA(MK)(vertsSmallTop))
translaFive = T(3)(33)


west = STRUCT([octOvest,T(3)(10)(faceOvest),translaSec(faceOvestTopWall),COLOR([0.93,0.36,0.25])(translaThird(faceOvestTopBig)),
	translaFourth(faceOvestSmallWall), COLOR([0.93,0.36,0.25])(translaFive(faceOvestTop)),COLOR([0.36,0.25,0.2])(doors)])


#facciata sudest
#creo la facciata 2d del piano terra

vertsOct = [[0,25,0],[10,35,0],[0,25,10],[10,35,10]]
octSE = JOIN(AA(MK)(vertsOct))

#creo la faccia 2d del secondo muro ad ottagono
vertsSEOct = [[3,25,0],[10,32,0],[3,25,10],[10,32,10]]
faceSEPartial = JOIN(AA(MK)(vertsSEOct))

#win0 = STRUCT([rectWin0,T([1,2,3])([10,35,10])(diskWinRot)])
#facciata nord secondo piano muro (piccolo)
vertsSEOctTopWall = [[3,25,0],[10,32,0],[3,25,5],[10,32,5]]
faceSETopWall = JOIN(AA(MK)(vertsSEOctTopWall))
translaSec = T(3)(15)

#facciata  nord terzo piano (tetto grande)
vertsTopBig = [[3,25,0],[10,32,0],[15,20,10]]
faceSETopBig = JOIN(AA(MK)(vertsTopBig))
translaThird = T(3)(20)

#facciata nord quarto piano (tetto piccolo e muro)
vertsSmallWall = [[13,21,0],[14,22,0],[13,21,5],[14,22,5]]
faceSESmallWall = JOIN(AA(MK)(vertsSmallWall))
translaFourth = T(3)(28)

vertsSmallTop = [[13,21],[14,22],[15,20,5]]
faceSETop = JOIN(AA(MK)(vertsSmallTop))
translaFive = T(3)(33)


se = STRUCT([octSE, T(3)(10)(faceSEPartial),COLOR([0.93,0.36,0.25])(translaSec(faceSETopWall)),COLOR([0.93,0.36,0.25])(translaThird(faceSETopBig)),	translaFourth(faceSESmallWall), COLOR([0.93,0.36,0.25])(translaFive(faceSETop))])

#facciata nord est
#creo la facciata 2d del piano terra

vertsOct = [[10,5,0],[0,15,0],[10,5,10],[0,15,10]]
octNE = JOIN(AA(MK)(vertsOct))

#creo la faccia 2d del secondo muro ad ottagono
vertsNEOct = [[10,8,0],[3,15,0],[10,8,5],[3,15,5]]
faceNEPartial = JOIN(AA(MK)(vertsNEOct))

#win0 = STRUCT([rectWin0,T([1,2,3])([10,35,10])(diskWinRot)])
#facciata nord secondo piano muro (piccolo)
vertsNEOctTopWall = [[10,8,0],[3,15,0],[10,8,5],[3,15,5]]
faceNETopWall = JOIN(AA(MK)(vertsNEOctTopWall))
translaSec = T(3)(15)

#facciata  nord terzo piano (tetto grande)
vertsTopBig = [[10,8,0],[3,15,0],[15,20,10]]
faceNETopBig = JOIN(AA(MK)(vertsTopBig))
translaThird = T(3)(20)

#facciata nord quarto piano (tetto piccolo e muro)
vertsSmallWall = [[14,18,0],[13,19,0],[14,18,5],[13,19,5]]
faceNESmallWall = JOIN(AA(MK)(vertsSmallWall))
translaFourth = T(3)(28)

vertsSmallTop = [[14,18],[13,19],[15,20,5]]
faceNETop = JOIN(AA(MK)(vertsSmallTop))
translaFive = T(3)(33)


ne = STRUCT([octNE, T(3)(10)(faceNEPartial),translaSec(faceNETopWall),COLOR([0.93,0.36,0.25])(translaThird(faceNETopBig)),
	translaFourth(faceNESmallWall), COLOR([0.93,0.36,0.25])(translaFive(faceNETop)])

#facciata sudovest

vertsOct = [[20,35,0],[30,25,0],[20,35,10],[30,25,10]]
octSO = JOIN(AA(MK)(vertsOct))

#creo la faccia 2d del secondo muro ad ottagono
vertsSOOct = [[20,32,0],[27,25,0],[20,32,10],[27,25,10]]
faceSOPartial = JOIN(AA(MK)(vertsSOOct))

#win0 = STRUCT([rectWin0,T([1,2,3])([10,35,10])(diskWinRot)])
#facciata nord secondo piano muro (piccolo)
vertsSOOctTopWall = [[20,32,0],[27,25,0],[20,32,5],[27,25,5]]
faceSOTopWall = JOIN(AA(MK)(vertsSOOctTopWall))
translaSec = T(3)(15)

#facciata  nord terzo piano (tetto grande)
vertsTopBig = [[20,32,0],[27,25,0],[15,20,10]]
faceSOTopBig = JOIN(AA(MK)(vertsTopBig))
translaThird = T(3)(20)

#facciata nord quarto piano (tetto piccolo e muro)
vertsSmallWall = [[17,21,0],[16,22,0],[17,21,5],[16,22,5]]
faceSOSmallWall = JOIN(AA(MK)(vertsSmallWall))
translaFourth = T(3)(28)

vertsSmallTop = [[17,21],[16,22],[15,20,5]]
faceSOTop = JOIN(AA(MK)(vertsSmallTop))
translaFive = T(3)(33)


so = STRUCT([octSO, T(3)(10)(faceSOPartial),translaSec(faceSOTopWall),COLOR([0.93,0.36,0.25])(translaThird(faceSOTopBig)),
	translaFourth(faceSOSmallWall), COLOR([0.93,0.36,0.25])(translaFive(faceSOTop))])

	#facciata sud
	#creo la facciata 2d del piano terra

vertsOct = [[10,35,0],[10,35,10],[20,35,0],[20,35,10]]
octSud = JOIN(AA(MK)(vertsOct))

vertsDoors = [[13,35,0],[17,35,0],[13,35,7],[17,35,7]]
doors = JOIN(AA(MK)(vertsDoors))

#creo la faccia 2d del secondo muro ad ottagono
vertsSudOct = [[10,32,0],[10,32,5],[20,32,0],[20,32,5]]
faceSudPartial = JOIN(AA(MK)(vertsSudOct))
#creo finestre
vertsWin0 =[[11,32,0],[11,32,10],[13,32,0],[13,32,10]]
rectWin0 = JOIN(AA(MK)(vertsWin0))

vertsWin1 =[[14,32,0],[14,32,10],[16,32,0],[16,32,10]]
rectWin1 = JOIN(AA(MK)(vertsWin1))

vertsWin2 =[[17,32,0],[17,32,10],[19,32,0],[19,32,10]]
rectWin2 = JOIN(AA(MK)(vertsWin2))
#diskWin = MAP(disk2D)(domain2D)
#diskWinRot = ROTATION([2,3])(PI/2)(diskWin)

#win0 = STRUCT([rectWin0,T([1,2,3])([10,35,10])(diskWinRot)])
faceSud = (STRUCT([faceSudPartial, COLOR([0.85,0.57,0.4])(rectWin0), COLOR([0.85,0.57,0.4])(rectWin1), COLOR([0.85,0.57,0.4])(rectWin2) ]))

#facciata nord secondo piano muro (piccolo)
vertsSudOctTopWall = [[10,32,0],[10,32,5],[20,32,0],[20,32,5]]
faceSudTopWall = JOIN(AA(MK)(vertsSudOctTopWall))
translaSec = T(3)(15)

#facciata  nord terzo piano (tetto grande)
vertsTopBig = [[10,32,0],[20,32,0],[15,20,10]]
faceSudTopBig = JOIN(AA(MK)(vertsTopBig))
translaThird = T(3)(20)

#facciata nord quarto piano (tetto piccolo e muro)
vertsSmallWall = [[14,22,0],[14,22,5],[16,22,0],[16,22,5]]
faceSudSmallWall = JOIN(AA(MK)(vertsSmallWall))
translaFourth = T(3)(28)

vertsSmallTop = [[14,22],[16,22],[15,20,5]]
faceSudTop = JOIN(AA(MK)(vertsSmallTop))
translaFive = T(3)(33)


south = STRUCT([octSud,T(3)(10)(faceSud),translaSec(faceSudTopWall),COLOR([0.93,0.36,0.25])(translaThird(faceSudTopBig)),translaFourth(faceSudSmallWall), COLOR([0.93,0.36,0.25])(translaFive(faceSudTop)),COLOR([0.36,0.25,0.2])(doors)])

#facciata nord
#creo la facciata 2d del rettangolo

vertsNord = [[10,0,0],[10,0,10],[20,0,0],[20,0,10],[20,5,0],[20,5,10],[10,5,0],[10,5,10]]
rectNord = JOIN(AA(MK)(vertsNord))

vertsDoor0 = [[11.5,0,0],[14.5,0,0],[11.5,0,8],[14.5,0,8]]
door0 = JOIN(AA(MK)(vertsDoor0))

vertsDoor1 = [[15.5,0,0],[18.5,0,0],[15.5,0,8],[18.5,0,8]]
door1 = JOIN(AA(MK)(vertsDoor1))

door = STRUCT([COLOR([0.85,0.57,0.4])(door0), COLOR([0.85,0.57,0.4])(door1)])

#creo il tetto sul rettangolo 2d
vertsTopSmall0 = [[10,0,0],[20,0,0],[15,2.5,5]]
vertsTopSmall1 = [[10,5,0],[20,5,0],[15,2.5,5]]
vertsTopSmall2 = [[10,0,0],[15,2.5,5],[10,5,0]]
vertsTopSmall3 = [[20,0,0],[15,2.5,5],[20,5,0]]

topSmall0 = JOIN(AA(MK)(vertsTopSmall0))
topSmall1 = JOIN(AA(MK)(vertsTopSmall1))
topSmall2 = JOIN(AA(MK)(vertsTopSmall2))
topSmall3 = JOIN(AA(MK)(vertsTopSmall3))

rectTop = STRUCT([topSmall0,topSmall1,topSmall2,topSmall3])


#facciata primo piano (muro)
vertsSmallWall = [[20,8,5],[20,8,0],[10,8,0],[10,8,5]]
topSmallNord = JOIN(AA(MK)(vertsSmallWall))
translaFirst = T(3)(10)

vertsNordOct = [[20,8,3],[20,8,0],[10,8,0],[10,8,3]]
faceNord = JOIN(AA(MK)(vertsNordOct))

#facciata nord secondo piano muro (piccolo)
vertsNordOctTopWall = [[20,8,5],[20,8,0],[10,8,0],[10,8,5]]
faceNordTopWall = JOIN(AA(MK)(vertsNordOctTopWall))
translaSec = T(3)(15)

#facciata  nord terzo piano (tetto grande)
vertsTopBig = [[20,8,0],[10,8,0],[15,20,10]]
faceNordTopBig = JOIN(AA(MK)(vertsTopBig))
translaThird = T(3)(20)

#facciata nord quarto piano (tetto piccolo e manca il muro)
vertsSmallWall = [[16,18,0],[16,18,5],[14,18,0],[14,18,5]]
faceNordSmallWall = JOIN(AA(MK)(vertsSmallWall))
translaFourth = T(3)(28)

vertsSmallTop = [[16,18],[14,18],[15,20,5]]
faceNordTop = JOIN(AA(MK)(vertsSmallTop))
translaFive = T(3)(33)


north = STRUCT([door,rectNord,COLOR([0.93,0.36,0.25](translaFirst(topSmallNord)),T(3)(10)(faceNord),translaSec(faceNordTopWall),COLOR([0.93,0.36,0.25])(translaThird(faceNordTopBig)),
                translaFourth(faceNordSmallWall), COLOR([0.93,0.36,0.25])(translaFive(faceNordTop))),
                COLOR([0.93,0.36,0.25])(T(3)(10)(rectTop)))])


mock_up_3D = STRUCT([north,south,west,east,se,no,ne,so])

VIEW(mock_up_3D)
