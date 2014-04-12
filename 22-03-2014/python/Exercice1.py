from pyplasm import *

vertsOct = [[0,15],[0,25],[10,35],[20,35],[30,25],[30,15],[20,5],[10,5]]
vertsRect = [[10,0],[20,0],[20,5],[10,5]]

pl = JOIN(AA(MK)(vertsOct))
pl2 = JOIN(AA(MK)(vertsRect))

floor0 = (COLOR([0.54,0.38,0.42])(STRUCT([pl, pl2])))
#VIEW(COLOR([0.54,0,0])(plane0))


vertsTopSmall0 = [[10,0],[20,0],[15,2.5]]
vertsTopSmall1 = [[10,5],[20,5],[15,2.5]]
vertsTopSmall2 = [[10,0],[15,2.5],[10,5]]
vertsTopSmall3 = [[20,0],[15,2.5],[20,5]]

topSmall0 = JOIN(AA(MK)(vertsTopSmall0))
topSmall1 = JOIN(AA(MK)(vertsTopSmall1))
topSmall2 = JOIN(AA(MK)(vertsTopSmall2))
topSmall3 = JOIN(AA(MK)(vertsTopSmall3))

translaFirst = T(3)(10)

floor1 = STRUCT([COLOR([0.8,0.3,0.22])(translaFirst(topSmall0)), COLOR([0.8,0.3,0.22])(translaFirst(topSmall1)), COLOR([0.93,0.36,0.25])(translaFirst(topSmall2)), COLOR([1,0.36,0.25])(translaFirst(topSmall3)), COLOR([0.80,0.56,0.61])(translaFirst(pl))])

#VIEW(STRUCT([floor0, floor1]))


vertsOctSmall = [[3,15],[3,25],[10,32],[20,32],[27,25],[27,15],[20,8],[10,8]]
octSmall = JOIN(AA(MK)(vertsOctSmall))

translaSec = T(3)(15)
floor2 = (COLOR([0.93,0.66,0.72]) (translaSec(octSmall)))

#VIEW(STRUCT([floor0, floor1, floor2]))

vertsTopBig0 = [[10,8],[3,15],[15,20]]
vertsTopBig1 = [[3,15],[3,25],[15,20]]
vertsTopBig2 = [[3,25],[10,32],[15,20]]
vertsTopBig3 = [[10,32],[20,32],[15,20]]
vertsTopBig4 = [[20,32],[27,25],[15,20]]
vertsTopBig5 = [[27,25],[27,15],[15,20]]
vertsTopBig6 = [[27,15],[20,8],[15,20]]
vertsTopBig7 = [[20,8],[10,8],[15,20]]

topBig0 = JOIN(AA(MK)(vertsTopBig0))
topBig1 = JOIN(AA(MK)(vertsTopBig1))
topBig2 = JOIN(AA(MK)(vertsTopBig2))
topBig3 = JOIN(AA(MK)(vertsTopBig3))
topBig4 = JOIN(AA(MK)(vertsTopBig4))
topBig5 = JOIN(AA(MK)(vertsTopBig5))
topBig6 = JOIN(AA(MK)(vertsTopBig6))
topBig7 = JOIN(AA(MK)(vertsTopBig7))
#topBig = STRUCT([topBig0,topBig1,topBig2,topBig3,topBig4,topBig5,topBig6,topBig7,topBig8])

vertsTowerBase = [[13,19],[13,21],[14,22],[16,22],[17,21],[17,19],[16,18],[14,18]]
cellsTowerBase = [[1,2,3,4,5,6,7,8]]
towerBase = JOIN(AA(MK)(vertsTowerBase))

translaThird = T(3)(20)

floor3 = STRUCT([COLOR([0.8,0.3,0.22])(translaThird(topBig0)),COLOR([0.8,0.3,0.22])(translaThird(topBig2)),COLOR([0.8,0.3,0.22])(translaThird(topBig4)),COLOR([0.8,0.3,0.22])(translaThird(topBig6)),
COLOR([0.93,0.36,0.25])(translaThird(topBig1)),COLOR([0.93,0.36,0.25])(translaThird(topBig3)),COLOR([0.93,0.36,0.25])(translaThird(topBig5)),COLOR([0.93,0.36,0.25])(translaThird(topBig7)),COLOR([1.0,0.75,0.79])(translaThird(towerBase))])

#VIEW(STRUCT([floor0, floor1, floor2, floor3]))

vertsLastTop0 = [[13,19],[13,21],[15,20]]
vertsLastTop1 = [[13,21],[14,22],[15,20]]
vertsLastTop2 = [[14,22],[16,22],[15,20]]
vertsLastTop3 = [[16,22],[17,21],[15,20]]
vertsLastTop4 = [[17,21],[17,19],[15,20]]
vertsLastTop5 = [[17,19],[16,18],[15,20]]
vertsLastTop6 = [[16,18],[14,18],[15,20]]
vertsLastTop7 = [[14,18],[13,19],[15,20]]

lastTop0 = JOIN(AA(MK)(vertsLastTop0))
lastTop1 = JOIN(AA(MK)(vertsLastTop1))
lastTop2 = JOIN(AA(MK)(vertsLastTop2))
lastTop3 = JOIN(AA(MK)(vertsLastTop3))
lastTop4 = JOIN(AA(MK)(vertsLastTop4))
lastTop5 = JOIN(AA(MK)(vertsLastTop5))
lastTop6 = JOIN(AA(MK)(vertsLastTop6))
lastTop7 = JOIN(AA(MK)(vertsLastTop7))

translaFourth = T(3)(33)

floor4 = STRUCT([COLOR([0.8,0.3,0.22])(translaFourth(lastTop0)),COLOR([0.8,0.3,0.22])(translaFourth(lastTop2)),COLOR([0.8,0.3,0.22])(translaFourth(lastTop4)),COLOR([0.8,0.3,0.22])(translaFourth(lastTop6)),
COLOR([0.93,0.36,0.25])(translaFourth(lastTop1)),COLOR([0.93,0.36,0.25])(translaFourth(lastTop3)),COLOR([0.93,0.36,0.25])(translaFourth(lastTop5)),COLOR([0.93,0.36,0.25])(translaFourth(lastTop7))])

building = STRUCT([floor0, floor1, floor2, floor3, floor4])

VIEW(building)