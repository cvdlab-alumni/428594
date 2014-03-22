vertsOct = [[0,15],[0,25],[10,35],[20,35],[30,25],[30,15],[20,5],[10,5]]
octNordP = JOIN(AA(MK)(vertsOct)) 
octNord = PROD([octNordP,Q(10)])
vertsRect = [[10,0],[20,0],[20,5],[10,5]]
rectNordP = JOIN(AA(MK)(vertsRect)) 
rectNord = PROD([rectNordP,Q(10)])
zero = STRUCT([octNord,rectNord])

vertsTopSmall0 = [[10,0,10],[20,0,10],[20,5,10],[10,5,10],[15,2.5,15]]
topSmall0 = JOIN(AA(MK)(vertsTopSmall0)) 


vertsOct = [[3,15],[3,25],[10,32],[20,32],[27,25],[27,15],[20,8],[10,8]]
octNordP = JOIN(AA(MK)(vertsOct)) 
octSmall = PROD([octNordP,Q(10)])
one = T(3)(10)(octSmall)

vertsTopBig0 = [[10,8,20],[3,15,20],[14,18,25],[13,19,25]]
topBig0 = JOIN(AA(MK)(vertsTopBig0)) 
vertsTopBig1 = [[3,15,20],[3,25,20],[13,19,25],[13,21,25]]
topBig1 = JOIN(AA(MK)(vertsTopBig1)) 
vertsTopBig2 = [[3,25,20],[10,32,20],[13,21,25],[14,22,25]]
topBig2 = JOIN(AA(MK)(vertsTopBig2)) 
vertsTopBig3 = [[10,32,20],[20,32,20],[14,22,25],[16,22,25]]
topBig3 = JOIN(AA(MK)(vertsTopBig3)) 
vertsTopBig4 = [[20,32,20],[27,25,20],[16,22,25],[17,21,25]]
topBig4 = JOIN(AA(MK)(vertsTopBig4)) 
vertsTopBig5 = [[27,25,20],[27,15,20],[17,21,25],[17,19,25]]
topBig5 = JOIN(AA(MK)(vertsTopBig5)) 
vertsTopBig6 = [[27,15,20],[20,8,20],[17,19,25],[16,18,25]]
topBig6 = JOIN(AA(MK)(vertsTopBig6)) 
vertsTopBig7 = [[20,8,20],[10,8,20],[16,18,25],[14,18,25]]
topBig7 = JOIN(AA(MK)(vertsTopBig7)) 

topBig = STRUCT([topBig0,topBig1,topBig2,topBig3,topBig4,topBig5,topBig6,topBig7])


vertsTower = [[13,19],[13,21],[14,22],[16,22],[17,21],[17,19],[16,18],[14,18]]
octTow = JOIN(AA(MK)(vertsTower)) 
octTower = PROD([octTow,Q(5)])
two = T(3)(25)(octTower)

vertsTop0 = [[14,18,30],[13,19,30],[15,20,35]]
top0 = JOIN(AA(MK)(vertsTop0)) 
vertsTop1 = [[13,19,30],[13,21,30],[15,20,35]]
top1 = JOIN(AA(MK)(vertsTop1)) 
vertsTop2 = [[13,21,30],[14,22,30],[15,20,35]]
top2 = JOIN(AA(MK)(vertsTop2)) 
vertsTop3 = [[14,22,30],[16,22,30],[15,20,35]]
top3 = JOIN(AA(MK)(vertsTop3)) 
vertsTop4 = [[16,22,30],[17,21,30],[15,20,35]]
top4 = JOIN(AA(MK)(vertsTop4)) 
vertsTop5 = [[17,21,30],[17,19,30],[15,20,35]]
top5 = JOIN(AA(MK)(vertsTop5)) 
vertsTop6 = [[17,19,30],[16,18,30],[15,20,35]]
top6 = JOIN(AA(MK)(vertsTop6)) 
vertsTop7 = [[16,18,30],[14,18,30],[15,20,35]]
top7 = JOIN(AA(MK)(vertsTop7)) 

top = STRUCT([top0,top1,top2,top3,top4,top5,top6,top7])

VIEW(STRUCT([topSmall0,two,one,zero,topBig,top]))