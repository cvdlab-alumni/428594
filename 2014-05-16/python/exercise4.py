def diagram2cell(diagram,master,cell): 
   from lar2psm import larModelBreak

   mat = diagram2cellMatrix(diagram)(master,cell)
   diagram =larApply(mat)(diagram) 
   V1,CV1 = larModelBreak(master) 
   V2,CV2 = larModelBreak(diagram)
   n = len(V1); 
   m = len(V2)
   
   def shift(CV, n): 
      return [[v+n for v in cell] for cell in CV]
   
   CV2 = shift(CV2,n)

   vdict1 = defaultdict(list)
   for k,v in enumerate(V1): vdict1[vcode(v)].append(k) 
   vdict2 = defaultdict(list)
   for k,v in enumerate(V2): vdict2[vcode(v)].append(k+n) 
   
   vertdict = defaultdict(list)
   for point in vdict1.keys(): vertdict[point] += vdict1[point]
   for point in vdict2.keys(): vertdict[point] += vdict2[point]

   case1, case12, case2 = [],[],[]
   for item in vertdict.items():
      key,val = item
      if len(val)==2:  case12 += [item]
      elif val[0] < n: case1 += [item]
      else: case2 += [item]
   n1 = len(case1); n2 = len(case12); n3 = len(case2)

   invertedindex = list(0 for k in range(n+m))
   for k,item in enumerate(case1):
      invertedindex[item[1][0]] = k
   for k,item in enumerate(case12):
      invertedindex[item[1][0]] = k+n1
      invertedindex[item[1][1]] = k+n1
   for k,item in enumerate(case2):
      invertedindex[item[1][0]] = k+n1+n2


   V = [eval(p[0]) for p in case1] + [eval(p[0]) for p in case12] + [eval(p[0]) for p in case2]
   CV1 = [sorted([invertedindex[v] for v in cell]) for cell in CV1]
   CV2 = [sorted([invertedindex[v] for v in cell]) for cell in CV2]

   V = master[0] + diagram[0]
   offset = len(master[0])
   CV = [c for k,c in enumerate(master[1]) if k != cell] + [[v+offset for v in c] for c in diagram[1]]
   master = V, CV
   return master
