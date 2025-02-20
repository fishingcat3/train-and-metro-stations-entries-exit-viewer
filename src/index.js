const raw = `
MonthYear,Station,Station_Type ,Entry_Exit,Trip
2024-08,Aberdeen  Station,Train,Exit,Less than 50
2024-08,Aberdeen  Station,Train,Entry,Less than 50
2024-08,Adamstown  Station,Train,Exit,2390
2024-08,Adamstown  Station,Train,Entry,2554
2024-08,Albion Park  Station,Train,Exit,6182
2024-08,Albion Park  Station,Train,Entry,6791
2024-08,Allawah  Station,Train,Exit,59757
2024-08,Allawah  Station,Train,Entry,66970
2024-08,Arncliffe  Station,Train,Exit,55115
2024-08,Arncliffe  Station,Train,Entry,60433
2024-08,Artarmon  Station,Train,Exit,105985
2024-08,Artarmon  Station,Train,Entry,111323
2024-08,Ashfield  Station,Train,Exit,261532
2024-08,Ashfield  Station,Train,Entry,264546
2024-08,Asquith  Station,Train,Exit,27434
2024-08,Asquith  Station,Train,Entry,31908
2024-08,Auburn  Station,Train,Exit,403776
2024-08,Auburn  Station,Train,Entry,421443
2024-08,Austinmer  Station,Train,Exit,2115
2024-08,Austinmer  Station,Train,Entry,2429
2024-08,Awaba  Station,Train,Exit,378
2024-08,Awaba  Station,Train,Entry,422
2024-08,Banksia  Station,Train,Exit,33407
2024-08,Banksia  Station,Train,Entry,36550
2024-08,Bankstown  Station,Train,Exit,232362
2024-08,Bankstown  Station,Train,Entry,226366
2024-08,Barangaroo  Station,Metro,Exit,141647
2024-08,Barangaroo  Station,Metro,Entry,121351
2024-08,Bardwell Park  Station,Train,Exit,24055
2024-08,Bardwell Park  Station,Train,Entry,26225
2024-08,Bargo  Station,Train,Exit,1162
2024-08,Bargo  Station,Train,Entry,1237
2024-08,Bathurst  Station,Train,Exit,1773
2024-08,Bathurst  Station,Train,Entry,2436
2024-08,Beecroft  Station,Train,Exit,32975
2024-08,Beecroft  Station,Train,Entry,33985
2024-08,Bell  Station,Train,Exit,82
2024-08,Bell  Station,Train,Entry,75
2024-08,Bella Vista  Station,Metro,Exit,72627
2024-08,Bella Vista  Station,Metro,Entry,74764
2024-08,Bellambi  Station,Train,Exit,2295
2024-08,Bellambi  Station,Train,Entry,2650
2024-08,Belmore  Station,Train,Exit,50297
2024-08,Belmore  Station,Train,Entry,55699
2024-08,Berala  Station,Train,Exit,44320
2024-08,Berala  Station,Train,Entry,44897
2024-08,Beresfield  Station,Train,Exit,3368
2024-08,Beresfield  Station,Train,Entry,3798
2024-08,Berowra  Station,Train,Exit,24933
2024-08,Berowra  Station,Train,Entry,26932
2024-08,Berry  Station,Train,Exit,1728
2024-08,Berry  Station,Train,Entry,1739
2024-08,Beverly Hills  Station,Train,Exit,41031
2024-08,Beverly Hills  Station,Train,Entry,45685
2024-08,Bexley North  Station,Train,Exit,28358
2024-08,Bexley North  Station,Train,Entry,30957
2024-08,Birrong  Station,Train,Exit,21626
2024-08,Birrong  Station,Train,Entry,22585
2024-08,Blackheath  Station,Train,Exit,4837
2024-08,Blackheath  Station,Train,Entry,4942
2024-08,Blacktown  Station,Train,Exit,421553
2024-08,Blacktown  Station,Train,Entry,406788
2024-08,Blaxland  Station,Train,Exit,9930
2024-08,Blaxland  Station,Train,Entry,10633
2024-08,Bomaderry  Station,Train,Exit,6147
2024-08,Bomaderry  Station,Train,Entry,7052
2024-08,Bombo  Station,Train,Exit,760
2024-08,Bombo  Station,Train,Entry,907
2024-08,Bondi Junction  Station,Train,Exit,535741
2024-08,Bondi Junction  Station,Train,Entry,530046
2024-08,Booragul  Station,Train,Exit,632
2024-08,Booragul  Station,Train,Entry,699
2024-08,Bowral  Station,Train,Exit,5185
2024-08,Bowral  Station,Train,Entry,5413
2024-08,Branxton  Station,Train,Exit,132
2024-08,Branxton  Station,Train,Entry,212
2024-08,Broadmeadow  Station,Train,Exit,18243
2024-08,Broadmeadow  Station,Train,Entry,20254
2024-08,Bullaburra  Station,Train,Exit,1175
2024-08,Bullaburra  Station,Train,Entry,1248
2024-08,Bulli  Station,Train,Exit,3369
2024-08,Bulli  Station,Train,Entry,3871
2024-08,Bundanoon  Station,Train,Exit,271
2024-08,Bundanoon  Station,Train,Entry,347
2024-08,Burradoo  Station,Train,Exit,267
2024-08,Burradoo  Station,Train,Entry,240
2024-08,Burwood  Station,Train,Exit,546559
2024-08,Burwood  Station,Train,Entry,530347
2024-08,Cabramatta  Station,Train,Exit,205028
2024-08,Cabramatta  Station,Train,Entry,206247
2024-08,Camellia  Station,Train,Exit,2719
2024-08,Camellia  Station,Train,Entry,3744
2024-08,Campbelltown  Station,Train,Exit,137459
2024-08,Campbelltown  Station,Train,Entry,136722
2024-08,Campsie  Station,Train,Exit,169953
2024-08,Campsie  Station,Train,Entry,170959
2024-08,Canley Vale  Station,Train,Exit,61229
2024-08,Canley Vale  Station,Train,Entry,65990
2024-08,Canterbury  Station,Train,Exit,50614
2024-08,Canterbury  Station,Train,Entry,55600
2024-08,Cardiff  Station,Train,Exit,18374
2024-08,Cardiff  Station,Train,Entry,20035
2024-08,Caringbah  Station,Train,Exit,58197
2024-08,Caringbah  Station,Train,Entry,62087
2024-08,Carlingford  Station,Train,Exit,2521
2024-08,Carlingford  Station,Train,Entry,3236
2024-08,Carlton  Station,Train,Exit,62406
2024-08,Carlton  Station,Train,Entry,67482
2024-08,Carramar  Station,Train,Exit,12896
2024-08,Carramar  Station,Train,Entry,14618
2024-08,Castle Hill  Station,Metro,Exit,180813
2024-08,Castle Hill  Station,Metro,Entry,171110
2024-08,Casula  Station,Train,Exit,8804
2024-08,Casula  Station,Train,Entry,10040
2024-08,Central  Station,Shared,Exit,2271922
2024-08,Central  Station,Shared,Entry,2215661
2024-08,Chatswood  Station,Shared,Exit,817317
2024-08,Chatswood  Station,Shared,Entry,785332
2024-08,Cheltenham  Station,Train,Exit,20347
2024-08,Cheltenham  Station,Train,Entry,25035
2024-08,Cherrybrook  Station,Metro,Exit,103222
2024-08,Cherrybrook  Station,Metro,Entry,110101
2024-08,Chester Hill  Station,Train,Exit,24092
2024-08,Chester Hill  Station,Train,Entry,25163
2024-08,Circular Quay  Station,Train,Exit,570232
2024-08,Circular Quay  Station,Train,Entry,554815
2024-08,Clarendon  Station,Train,Exit,1587
2024-08,Clarendon  Station,Train,Entry,1657
2024-08,Clyde  Station,Train,Exit,24137
2024-08,Clyde  Station,Train,Entry,25396
2024-08,Coalcliff  Station,Train,Exit,442
2024-08,Coalcliff  Station,Train,Entry,512
2024-08,Cockle Creek  Station,Train,Exit,1196
2024-08,Cockle Creek  Station,Train,Entry,1121
2024-08,Coledale  Station,Train,Exit,756
2024-08,Coledale  Station,Train,Entry,867
2024-08,Como  Station,Train,Exit,13086
2024-08,Como  Station,Train,Entry,15008
2024-08,Concord West  Station,Train,Exit,45373
2024-08,Concord West  Station,Train,Entry,48163
2024-08,Coniston  Station,Train,Exit,5634
2024-08,Coniston  Station,Train,Entry,6001
2024-08,Corrimal  Station,Train,Exit,2914
2024-08,Corrimal  Station,Train,Entry,3396
2024-08,Cowan  Station,Train,Exit,1367
2024-08,Cowan  Station,Train,Entry,1215
2024-08,Cringila  Station,Train,Exit,360
2024-08,Cringila  Station,Train,Entry,291
2024-08,Cronulla  Station,Train,Exit,58690
2024-08,Cronulla  Station,Train,Entry,59224
2024-08,Crows Nest  Station,Metro,Exit,123121
2024-08,Crows Nest  Station,Metro,Entry,120104
2024-08,Croydon  Station,Train,Exit,52390
2024-08,Croydon  Station,Train,Entry,57701
2024-08,Dapto  Station,Train,Exit,10795
2024-08,Dapto  Station,Train,Entry,11935
2024-08,Denistone  Station,Train,Exit,12062
2024-08,Denistone  Station,Train,Entry,13609
2024-08,Domestic  Station,Train,Exit,199644
2024-08,Domestic  Station,Train,Entry,224402
2024-08,Doonside  Station,Train,Exit,62834
2024-08,Doonside  Station,Train,Entry,69076
2024-08,Dora Creek  Station,Train,Exit,885
2024-08,Dora Creek  Station,Train,Entry,1000
2024-08,Douglas Park  Station,Train,Exit,464
2024-08,Douglas Park  Station,Train,Entry,496
2024-08,Dulwich Hill  Station,Train,Exit,47694
2024-08,Dulwich Hill  Station,Train,Entry,53195
2024-08,Dundas  Station,Train,Exit,2730
2024-08,Dundas  Station,Train,Entry,2841
2024-08,Dungog  Station,Train,Exit,419
2024-08,Dungog  Station,Train,Entry,463
2024-08,East Hills  Station,Train,Exit,17926
2024-08,East Hills  Station,Train,Entry,19217
2024-08,East Maitland  Station,Train,Exit,513
2024-08,East Maitland  Station,Train,Entry,534
2024-08,East Richmond  Station,Train,Exit,7645
2024-08,East Richmond  Station,Train,Entry,5042
2024-08,Eastwood  Station,Train,Exit,185839
2024-08,Eastwood  Station,Train,Entry,182915
2024-08,Edgecliff  Station,Train,Exit,188408
2024-08,Edgecliff  Station,Train,Entry,195840
2024-08,Edmondson Park  Station,Train,Exit,99597
2024-08,Edmondson Park  Station,Train,Entry,103415
2024-08,Emu Plains  Station,Train,Exit,22953
2024-08,Emu Plains  Station,Train,Entry,24533
2024-08,Engadine  Station,Train,Exit,27015
2024-08,Engadine  Station,Train,Entry,28802
2024-08,Epping  Station,Shared,Exit,361192
2024-08,Epping  Station,Shared,Entry,366650
2024-08,Erskineville  Station,Train,Exit,61961
2024-08,Erskineville  Station,Train,Entry,67902
2024-08,Exeter  Station,Train,Exit,77
2024-08,Exeter  Station,Train,Entry,112
2024-08,Fairfield  Station,Train,Exit,144056
2024-08,Fairfield  Station,Train,Entry,148278
2024-08,Fairy Meadow  Station,Train,Exit,2516
2024-08,Fairy Meadow  Station,Train,Entry,2856
2024-08,Fassifern  Station,Train,Exit,8228
2024-08,Fassifern  Station,Train,Entry,9274
2024-08,Faulconbridge  Station,Train,Exit,1967
2024-08,Faulconbridge  Station,Train,Entry,2105
2024-08,Flemington  Station,Train,Exit,130400
2024-08,Flemington  Station,Train,Entry,135642
2024-08,Gadigal  Station,Metro,Exit,181310
2024-08,Gadigal  Station,Metro,Entry,180488
2024-08,Gerringong  Station,Train,Exit,1081
2024-08,Gerringong  Station,Train,Entry,1105
2024-08,Glenbrook  Station,Train,Exit,8306
2024-08,Glenbrook  Station,Train,Entry,9150
2024-08,Glenfield  Station,Train,Exit,128545
2024-08,Glenfield  Station,Train,Entry,134975
2024-08,Gordon  Station,Train,Exit,159824
2024-08,Gordon  Station,Train,Entry,163018
2024-08,Gosford  Station,Train,Exit,101843
2024-08,Gosford  Station,Train,Entry,101887
2024-08,Goulburn  Station,Train,Exit,853
2024-08,Goulburn  Station,Train,Entry,1055
2024-08,Granville  Station,Train,Exit,176211
2024-08,Granville  Station,Train,Entry,186167
2024-08,Green Square  Station,Train,Exit,259428
2024-08,Green Square  Station,Train,Entry,268056
2024-08,Greta  Station,Train,Exit,Less than 50
2024-08,Greta  Station,Train,Entry,Less than 50
2024-08,Guildford  Station,Train,Exit,69056
2024-08,Guildford  Station,Train,Entry,75825
2024-08,Gymea  Station,Train,Exit,42337
2024-08,Gymea  Station,Train,Entry,45291
2024-08,Hamilton  Station,Train,Exit,16224
2024-08,Hamilton  Station,Train,Entry,16081
2024-08,Harris Park  Station,Train,Exit,74535
2024-08,Harris Park  Station,Train,Entry,72712
2024-08,Hawkesbury River  Station,Train,Exit,5950
2024-08,Hawkesbury River  Station,Train,Entry,6124
2024-08,Hazelbrook  Station,Train,Exit,5905
2024-08,Hazelbrook  Station,Train,Entry,6187
2024-08,Heathcote  Station,Train,Exit,11753
2024-08,Heathcote  Station,Train,Entry,12274
2024-08,Helensburgh  Station,Train,Exit,8878
2024-08,Helensburgh  Station,Train,Entry,9474
2024-08,Hexham  Station,Train,Exit,192
2024-08,Hexham  Station,Train,Entry,181
2024-08,High Street  Station,Train,Exit,397
2024-08,High Street  Station,Train,Entry,319
2024-08,Hilldale  Station,Train,Exit,Less than 50
2024-08,Hilldale  Station,Train,Entry,Less than 50
2024-08,Hills Showground  Station,Metro,Exit,88507
2024-08,Hills Showground  Station,Metro,Entry,92071
2024-08,Holsworthy  Station,Train,Exit,66701
2024-08,Holsworthy  Station,Train,Entry,70495
2024-08,Homebush  Station,Train,Exit,88564
2024-08,Homebush  Station,Train,Entry,96314
2024-08,Hornsby  Station,Train,Exit,310056
2024-08,Hornsby  Station,Train,Entry,300101
2024-08,Hurlstone Park  Station,Train,Exit,24791
2024-08,Hurlstone Park  Station,Train,Entry,27790
2024-08,Hurstville  Station,Train,Exit,507421
2024-08,Hurstville  Station,Train,Entry,495792
2024-08,Ingleburn  Station,Train,Exit,73485
2024-08,Ingleburn  Station,Train,Entry,74040
2024-08,International  Station,Train,Exit,129134
2024-08,International  Station,Train,Entry,133587
2024-08,Jannali  Station,Train,Exit,54113
2024-08,Jannali  Station,Train,Entry,57046
2024-08,Katoomba  Station,Train,Exit,34466
2024-08,Katoomba  Station,Train,Entry,33813
2024-08,Kellyville  Station,Metro,Exit,95661
2024-08,Kellyville  Station,Metro,Entry,97657
2024-08,Kembla Grange  Station,Train,Exit,189
2024-08,Kembla Grange  Station,Train,Entry,176
2024-08,Kiama  Station,Train,Exit,13672
2024-08,Kiama  Station,Train,Entry,13831
2024-08,Killara  Station,Train,Exit,45174
2024-08,Killara  Station,Train,Entry,47935
2024-08,Kings Cross  Station,Train,Exit,349380
2024-08,Kings Cross  Station,Train,Entry,334299
2024-08,Kingsgrove  Station,Train,Exit,46493
2024-08,Kingsgrove  Station,Train,Entry,49036
2024-08,Kingswood  Station,Train,Exit,51041
2024-08,Kingswood  Station,Train,Entry,55138
2024-08,Kirrawee  Station,Train,Exit,40721
2024-08,Kirrawee  Station,Train,Entry,42015
2024-08,Kogarah  Station,Train,Exit,264433
2024-08,Kogarah  Station,Train,Entry,272944
2024-08,Koolewong  Station,Train,Exit,1185
2024-08,Koolewong  Station,Train,Entry,1534
2024-08,Kotara  Station,Train,Exit,1756
2024-08,Kotara  Station,Train,Entry,1424
2024-08,Lakemba  Station,Train,Exit,92715
2024-08,Lakemba  Station,Train,Entry,95240
2024-08,Lapstone  Station,Train,Exit,1631
2024-08,Lapstone  Station,Train,Entry,1898
2024-08,Lawson  Station,Train,Exit,3176
2024-08,Lawson  Station,Train,Entry,3325
2024-08,Leightonfield  Station,Train,Exit,5218
2024-08,Leightonfield  Station,Train,Entry,5401
2024-08,Leppington  Station,Train,Exit,96457
2024-08,Leppington  Station,Train,Entry,100810
2024-08,Leumeah  Station,Train,Exit,57919
2024-08,Leumeah  Station,Train,Entry,60744
2024-08,Leura  Station,Train,Exit,7767
2024-08,Leura  Station,Train,Entry,9473
2024-08,Lewisham  Station,Train,Exit,57591
2024-08,Lewisham  Station,Train,Entry,63250
2024-08,Lidcombe  Station,Train,Exit,339015
2024-08,Lidcombe  Station,Train,Entry,347388
2024-08,Linden  Station,Train,Exit,265
2024-08,Linden  Station,Train,Entry,353
2024-08,Lindfield  Station,Train,Exit,92641
2024-08,Lindfield  Station,Train,Entry,93669
2024-08,Lisarow  Station,Train,Exit,2853
2024-08,Lisarow  Station,Train,Entry,3072
2024-08,Lithgow  Station,Train,Exit,4617
2024-08,Lithgow  Station,Train,Entry,5104
2024-08,Liverpool  Station,Train,Exit,228985
2024-08,Liverpool  Station,Train,Entry,227193
2024-08,Lochinvar  Station,Train,Exit,Less than 50
2024-08,Lochinvar  Station,Train,Entry,Less than 50
2024-08,Loftus  Station,Train,Exit,8750
2024-08,Loftus  Station,Train,Entry,9448
2024-08,Lysaghts  Station,Train,Exit,Less than 50
2024-08,Lysaghts  Station,Train,Entry,Less than 50
2024-08,Macarthur  Station,Train,Exit,78858
2024-08,Macarthur  Station,Train,Entry,79241
2024-08,Macdonaldtown  Station,Train,Exit,24027
2024-08,Macdonaldtown  Station,Train,Entry,24588
2024-08,Macquarie Fields  Station,Train,Exit,20376
2024-08,Macquarie Fields  Station,Train,Entry,22228
2024-08,Macquarie Park  Station,Metro,Exit,102224
2024-08,Macquarie Park  Station,Metro,Entry,101171
2024-08,Macquarie University  Station,Metro,Exit,397089
2024-08,Macquarie University  Station,Metro,Entry,389328
2024-08,Maitland  Station,Train,Exit,8730
2024-08,Maitland  Station,Train,Entry,9500
2024-08,Marayong  Station,Train,Exit,24154
2024-08,Marayong  Station,Train,Entry,26473
2024-08,Marrickville  Station,Train,Exit,88582
2024-08,Marrickville  Station,Train,Entry,90771
2024-08,Martin Place  Station,Shared,Exit,634085
2024-08,Martin Place  Station,Shared,Entry,569370
2024-08,Martins Creek  Station,Train,Exit,Less than 50
2024-08,Martins Creek  Station,Train,Entry,Less than 50
2024-08,Marulan  Station,Train,Exit,Less than 50
2024-08,Marulan  Station,Train,Entry,Less than 50
2024-08,Mascot  Station,Train,Exit,420645
2024-08,Mascot  Station,Train,Entry,417692
2024-08,Meadowbank  Station,Train,Exit,118516
2024-08,Meadowbank  Station,Train,Entry,129187
2024-08,Medlow Bath  Station,Train,Exit,916
2024-08,Medlow Bath  Station,Train,Entry,1059
2024-08,Menangle Park  Station,Train,Exit,508
2024-08,Menangle Park  Station,Train,Entry,425
2024-08,Menangle  Station,Train,Exit,302
2024-08,Menangle  Station,Train,Entry,294
2024-08,Merrylands  Station,Train,Exit,155649
2024-08,Merrylands  Station,Train,Entry,158409
2024-08,Metford  Station,Train,Exit,1616
2024-08,Metford  Station,Train,Entry,1569
2024-08,Milsons Point  Station,Train,Exit,188087
2024-08,Milsons Point  Station,Train,Entry,179776
2024-08,Mindaribba  Station,Train,Exit,Less than 50
2024-08,Mindaribba  Station,Train,Entry,Less than 50
2024-08,Minnamurra  Station,Train,Exit,2225
2024-08,Minnamurra  Station,Train,Entry,2478
2024-08,Minto  Station,Train,Exit,69322
2024-08,Minto  Station,Train,Entry,72061
2024-08,Miranda  Station,Train,Exit,89276
2024-08,Miranda  Station,Train,Entry,85505
2024-08,Mittagong  Station,Train,Exit,3736
2024-08,Mittagong  Station,Train,Entry,3997
2024-08,Morisset  Station,Train,Exit,14887
2024-08,Morisset  Station,Train,Entry,15961
2024-08,Mortdale  Station,Train,Exit,74308
2024-08,Mortdale  Station,Train,Entry,80742
2024-08,Moss Vale  Station,Train,Exit,3643
2024-08,Moss Vale  Station,Train,Entry,4139
2024-08,Mount Colah  Station,Train,Exit,12792
2024-08,Mount Colah  Station,Train,Entry,13927
2024-08,Mount Druitt  Station,Train,Exit,159608
2024-08,Mount Druitt  Station,Train,Entry,159149
2024-08,Mount Kuring-gai  Station,Train,Exit,5308
2024-08,Mount Kuring-gai  Station,Train,Entry,5121
2024-08,Mount Victoria  Station,Train,Exit,2728
2024-08,Mount Victoria  Station,Train,Entry,2696
2024-08,Mulgrave  Station,Train,Exit,6008
2024-08,Mulgrave  Station,Train,Entry,6212
2024-08,Museum  Station,Train,Exit,285217
2024-08,Museum  Station,Train,Entry,266400
2024-08,Muswellbrook  Station,Train,Exit,434
2024-08,Muswellbrook  Station,Train,Entry,589
2024-08,Narara  Station,Train,Exit,4437
2024-08,Narara  Station,Train,Entry,5096
2024-08,Narwee  Station,Train,Exit,39038
2024-08,Narwee  Station,Train,Entry,42253
2024-08,Newcastle Interchange Station,Train,Exit,41287
2024-08,Newcastle Interchange Station,Train,Entry,40872
2024-08,Newtown  Station,Train,Exit,275025
2024-08,Newtown  Station,Train,Entry,241823
2024-08,Niagara Park  Station,Train,Exit,2346
2024-08,Niagara Park  Station,Train,Entry,2426
2024-08,Normanhurst  Station,Train,Exit,23205
2024-08,Normanhurst  Station,Train,Entry,28992
2024-08,North Ryde  Station,Metro,Exit,78026
2024-08,North Ryde  Station,Metro,Entry,77570
2024-08,North Strathfield  Station,Train,Exit,63904
2024-08,North Strathfield  Station,Train,Entry,64348
2024-08,North Sydney  Station,Train,Exit,478798
2024-08,North Sydney  Station,Train,Entry,456024
2024-08,North Wollongong  Station,Train,Exit,34157
2024-08,North Wollongong  Station,Train,Entry,34439
2024-08,Norwest  Station,Metro,Exit,68910
2024-08,Norwest  Station,Metro,Entry,69981
2024-08,Oak Flats  Station,Train,Exit,8980
2024-08,Oak Flats  Station,Train,Entry,9785
2024-08,Oatley  Station,Train,Exit,43823
2024-08,Oatley  Station,Train,Entry,45985
2024-08,Olympic Park  Station,Train,Exit,81784
2024-08,Olympic Park  Station,Train,Entry,80185
2024-08,Otford  Station,Train,Exit,852
2024-08,Otford  Station,Train,Entry,828
2024-08,Ourimbah  Station,Train,Exit,4191
2024-08,Ourimbah  Station,Train,Entry,4352
2024-08,Padstow  Station,Train,Exit,54138
2024-08,Padstow  Station,Train,Entry,57770
2024-08,Panania  Station,Train,Exit,36456
2024-08,Panania  Station,Train,Entry,39434
2024-08,Parramatta  Station,Train,Exit,1098878
2024-08,Parramatta  Station,Train,Entry,1074370
2024-08,Paterson  Station,Train,Exit,147
2024-08,Paterson  Station,Train,Entry,172
2024-08,Pendle Hill  Station,Train,Exit,72008
2024-08,Pendle Hill  Station,Train,Entry,76167
2024-08,Pennant Hills  Station,Train,Exit,40330
2024-08,Pennant Hills  Station,Train,Entry,41926
2024-08,Penrith  Station,Train,Exit,181802
2024-08,Penrith  Station,Train,Entry,174418
2024-08,Penrose  Station,Train,Exit,Less than 50
2024-08,Penrose  Station,Train,Entry,Less than 50
2024-08,Penshurst  Station,Train,Exit,64788
2024-08,Penshurst  Station,Train,Entry,74071
2024-08,Petersham  Station,Train,Exit,79533
2024-08,Petersham  Station,Train,Entry,80305
2024-08,Picton  Station,Train,Exit,2905
2024-08,Picton  Station,Train,Entry,3233
2024-08,Point Clare  Station,Train,Exit,3297
2024-08,Point Clare  Station,Train,Entry,3690
2024-08,Port Kembla North  Station,Train,Exit,300
2024-08,Port Kembla North  Station,Train,Entry,303
2024-08,Port Kembla  Station,Train,Exit,1746
2024-08,Port Kembla  Station,Train,Entry,2055
2024-08,Punchbowl  Station,Train,Exit,53740
2024-08,Punchbowl  Station,Train,Entry,56648
2024-08,Pymble  Station,Train,Exit,49785
2024-08,Pymble  Station,Train,Entry,54983
2024-08,Quakers Hill  Station,Train,Exit,61052
2024-08,Quakers Hill  Station,Train,Entry,67468
2024-08,Redfern  Station,Train,Exit,794457
2024-08,Redfern  Station,Train,Entry,735682
2024-08,Regents Park  Station,Train,Exit,29420
2024-08,Regents Park  Station,Train,Entry,30079
2024-08,Revesby  Station,Train,Exit,107499
2024-08,Revesby  Station,Train,Entry,111176
2024-08,Rhodes  Station,Train,Exit,237254
2024-08,Rhodes  Station,Train,Entry,240462
2024-08,Richmond  Station,Train,Exit,16264
2024-08,Richmond  Station,Train,Entry,19814
2024-08,Riverstone  Station,Train,Exit,30407
2024-08,Riverstone  Station,Train,Entry,32445
2024-08,Riverwood  Station,Train,Exit,75197
2024-08,Riverwood  Station,Train,Entry,78748
2024-08,Rockdale  Station,Train,Exit,245347
2024-08,Rockdale  Station,Train,Entry,253206
2024-08,Rooty Hill  Station,Train,Exit,85075
2024-08,Rooty Hill  Station,Train,Entry,88592
2024-08,Roseville  Station,Train,Exit,65983
2024-08,Roseville  Station,Train,Entry,70789
2024-08,Rouse Hill  Station,Metro,Exit,117903
2024-08,Rouse Hill  Station,Metro,Entry,112372
2024-08,Rydal  Station,Train,Exit,Less than 50
2024-08,Rydal  Station,Train,Entry,Less than 50
2024-08,Sandgate  Station,Train,Exit,390
2024-08,Sandgate  Station,Train,Entry,416
2024-08,Scarborough  Station,Train,Exit,705
2024-08,Scarborough  Station,Train,Entry,458
2024-08,Schofields  Station,Train,Exit,106981
2024-08,Schofields  Station,Train,Entry,113245
2024-08,Scone  Station,Train,Exit,320
2024-08,Scone  Station,Train,Entry,404
2024-08,Sefton  Station,Train,Exit,14818
2024-08,Sefton  Station,Train,Entry,17180
2024-08,Seven Hills  Station,Train,Exit,143708
2024-08,Seven Hills  Station,Train,Entry,150711
2024-08,Shellharbour Junction  Station,Train,Exit,3977
2024-08,Shellharbour Junction  Station,Train,Entry,4596
2024-08,Singleton  Station,Train,Exit,673
2024-08,Singleton  Station,Train,Entry,771
2024-08,Springwood  Station,Train,Exit,19911
2024-08,Springwood  Station,Train,Entry,20801
2024-08,St James  Station,Train,Exit,202723
2024-08,St James  Station,Train,Entry,185937
2024-08,St Leonards  Station,Train,Exit,346685
2024-08,St Leonards  Station,Train,Entry,345109
2024-08,St Marys  Station,Train,Exit,105838
2024-08,St Marys  Station,Train,Entry,107174
2024-08,St Peters  Station,Train,Exit,74864
2024-08,St Peters  Station,Train,Entry,81043
2024-08,Stanmore  Station,Train,Exit,67026
2024-08,Stanmore  Station,Train,Entry,74201
2024-08,Stanwell Park  Station,Train,Exit,1551
2024-08,Stanwell Park  Station,Train,Entry,1476
2024-08,Strathfield  Station,Train,Exit,634692
2024-08,Strathfield  Station,Train,Entry,646709
2024-08,Summer Hill  Station,Train,Exit,75934
2024-08,Summer Hill  Station,Train,Entry,81608
2024-08,Sutherland  Station,Train,Exit,154239
2024-08,Sutherland  Station,Train,Entry,157292
2024-08,Sydenham  Station,Shared,Exit,209968
2024-08,Sydenham  Station,Shared,Entry,206522
2024-08,Tahmoor  Station,Train,Exit,3332
2024-08,Tahmoor  Station,Train,Entry,3701
2024-08,Tallawong  Station,Metro,Exit,144578
2024-08,Tallawong  Station,Metro,Entry,154347
2024-08,Tallong  Station,Train,Exit,Less than 50
2024-08,Tallong  Station,Train,Entry,Less than 50
2024-08,Tarana  Station,Train,Exit,68
2024-08,Tarana  Station,Train,Entry,87
2024-08,Tarro  Station,Train,Exit,104
2024-08,Tarro  Station,Train,Entry,132
2024-08,Tascott  Station,Train,Exit,1970
2024-08,Tascott  Station,Train,Entry,2500
2024-08,Telarah  Station,Train,Exit,2503
2024-08,Telarah  Station,Train,Entry,2786
2024-08,Telopea  Station,Train,Exit,2579
2024-08,Telopea  Station,Train,Entry,2953
2024-08,Tempe  Station,Train,Exit,30633
2024-08,Tempe  Station,Train,Entry,32296
2024-08,Teralba  Station,Train,Exit,1057
2024-08,Teralba  Station,Train,Entry,1126
2024-08,Thirroul  Station,Train,Exit,21757
2024-08,Thirroul  Station,Train,Entry,21704
2024-08,Thornleigh  Station,Train,Exit,36260
2024-08,Thornleigh  Station,Train,Entry,37813
2024-08,Thornton  Station,Train,Exit,5398
2024-08,Thornton  Station,Train,Entry,5958
2024-08,Toongabbie  Station,Train,Exit,68182
2024-08,Toongabbie  Station,Train,Entry,71606
2024-08,Town Hall  Station,Train,Exit,2081049
2024-08,Town Hall  Station,Train,Entry,2135397
2024-08,Towradgi  Station,Train,Exit,1516
2024-08,Towradgi  Station,Train,Entry,1842
2024-08,Tuggerah  Station,Train,Exit,24700
2024-08,Tuggerah  Station,Train,Entry,25533
2024-08,Turramurra  Station,Train,Exit,86045
2024-08,Turramurra  Station,Train,Entry,90121
2024-08,Turrella  Station,Train,Exit,25563
2024-08,Turrella  Station,Train,Entry,27447
2024-08,Unanderra  Station,Train,Exit,8915
2024-08,Unanderra  Station,Train,Entry,10071
2024-08,Valley Heights  Station,Train,Exit,1114
2024-08,Valley Heights  Station,Train,Entry,1377
2024-08,Victoria Cross  Station,Metro,Exit,164759
2024-08,Victoria Cross  Station,Metro,Entry,175803
2024-08,Victoria Street  Station,Train,Exit,6352
2024-08,Victoria Street  Station,Train,Entry,6721
2024-08,Villawood  Station,Train,Exit,11655
2024-08,Villawood  Station,Train,Entry,12304
2024-08,Vineyard  Station,Train,Exit,3774
2024-08,Vineyard  Station,Train,Entry,4145
2024-08,Wahroonga  Station,Train,Exit,44470
2024-08,Wahroonga  Station,Train,Entry,47257
2024-08,Waitara  Station,Train,Exit,68288
2024-08,Waitara  Station,Train,Entry,71863
2024-08,Wallarobba  Station,Train,Exit,Less than 50
2024-08,Wallarobba  Station,Train,Entry,Less than 50
2024-08,Warabrook  Station,Train,Exit,5494
2024-08,Warabrook  Station,Train,Entry,5398
2024-08,Waratah  Station,Train,Exit,3961
2024-08,Waratah  Station,Train,Entry,4154
2024-08,Warnervale  Station,Train,Exit,5137
2024-08,Warnervale  Station,Train,Entry,5740
2024-08,Warrawee  Station,Train,Exit,20965
2024-08,Warrawee  Station,Train,Entry,23472
2024-08,Warrimoo  Station,Train,Exit,2450
2024-08,Warrimoo  Station,Train,Entry,2572
2024-08,Warwick Farm  Station,Train,Exit,55691
2024-08,Warwick Farm  Station,Train,Entry,60869
2024-08,Waterfall  Station,Train,Exit,9945
2024-08,Waterfall  Station,Train,Entry,9632
2024-08,Waterloo  Station,Metro,Exit,61300
2024-08,Waterloo  Station,Metro,Entry,61892
2024-08,Waverton  Station,Train,Exit,43208
2024-08,Waverton  Station,Train,Entry,48692
2024-08,Wentworth Falls  Station,Train,Exit,7772
2024-08,Wentworth Falls  Station,Train,Entry,7966
2024-08,Wentworthville  Station,Train,Exit,91434
2024-08,Wentworthville  Station,Train,Entry,95669
2024-08,Werrington  Station,Train,Exit,27422
2024-08,Werrington  Station,Train,Entry,30679
2024-08,West Ryde  Station,Train,Exit,114450
2024-08,West Ryde  Station,Train,Entry,114766
2024-08,Westmead  Station,Train,Exit,162307
2024-08,Westmead  Station,Train,Entry,174027
2024-08,Wiley Park  Station,Train,Exit,34412
2024-08,Wiley Park  Station,Train,Entry,40030
2024-08,Windsor  Station,Train,Exit,17183
2024-08,Windsor  Station,Train,Entry,17359
2024-08,Wingello  Station,Train,Exit,Less than 50
2024-08,Wingello  Station,Train,Entry,61
2024-08,Wirragulla  Station,Train,Exit,Less than 50
2024-08,Wirragulla  Station,Train,Entry,Less than 50
2024-08,Wolli Creek  Station,Train,Exit,234146
2024-08,Wolli Creek  Station,Train,Entry,233952
2024-08,Wollongong  Station,Train,Exit,45264
2024-08,Wollongong  Station,Train,Entry,45214
2024-08,Wollstonecraft  Station,Train,Exit,50558
2024-08,Wollstonecraft  Station,Train,Entry,55433
2024-08,Wombarra  Station,Train,Exit,611
2024-08,Wombarra  Station,Train,Entry,731
2024-08,Wondabyne  Station,Train,Exit,397
2024-08,Wondabyne  Station,Train,Entry,318
2024-08,Woodford  Station,Train,Exit,1653
2024-08,Woodford  Station,Train,Entry,1648
2024-08,Woolooware  Station,Train,Exit,26892
2024-08,Woolooware  Station,Train,Entry,28166
2024-08,Woonona  Station,Train,Exit,2448
2024-08,Woonona  Station,Train,Entry,2894
2024-08,Woy Woy  Station,Train,Exit,78883
2024-08,Woy Woy  Station,Train,Entry,77827
2024-08,Wyee  Station,Train,Exit,5295
2024-08,Wyee  Station,Train,Entry,5879
2024-08,Wynyard  Station,Train,Exit,1482946
2024-08,Wynyard  Station,Train,Entry,1390223
2024-08,Wyong  Station,Train,Exit,27863
2024-08,Wyong  Station,Train,Entry,29386
2024-08,Yagoona  Station,Train,Exit,31361
2024-08,Yagoona  Station,Train,Entry,35094
2024-08,Yennora  Station,Train,Exit,28298
2024-08,Yennora  Station,Train,Entry,27554
2024-08,Yerrinbool  Station,Train,Exit,358
2024-08,Yerrinbool  Station,Train,Entry,410
2024-08,Zig Zag  Station,Train,Exit,Less than 50
2024-08,Zig Zag  Station,Train,Entry,Less than 50
2024-09,Aberdeen  Station,Train,Exit,Less than 50
2024-09,Aberdeen  Station,Train,Entry,Less than 50
2024-09,Adamstown  Station,Train,Exit,2256
2024-09,Adamstown  Station,Train,Entry,2391
2024-09,Albion Park  Station,Train,Exit,5228
2024-09,Albion Park  Station,Train,Entry,5837
2024-09,Allawah  Station,Train,Exit,53869
2024-09,Allawah  Station,Train,Entry,60422
2024-09,Arncliffe  Station,Train,Exit,51130
2024-09,Arncliffe  Station,Train,Entry,55681
2024-09,Artarmon  Station,Train,Exit,85945
2024-09,Artarmon  Station,Train,Entry,91014
2024-09,Ashfield  Station,Train,Exit,242535
2024-09,Ashfield  Station,Train,Entry,243026
2024-09,Asquith  Station,Train,Exit,23997
2024-09,Asquith  Station,Train,Entry,28887
2024-09,Auburn  Station,Train,Exit,345354
2024-09,Auburn  Station,Train,Entry,363617
2024-09,Austinmer  Station,Train,Exit,1939
2024-09,Austinmer  Station,Train,Entry,2414
2024-09,Awaba  Station,Train,Exit,360
2024-09,Awaba  Station,Train,Entry,397
2024-09,Banksia  Station,Train,Exit,31672
2024-09,Banksia  Station,Train,Entry,33999
2024-09,Bankstown  Station,Train,Exit,209996
2024-09,Bankstown  Station,Train,Entry,205479
2024-09,Barangaroo  Station,Metro,Exit,225270
2024-09,Barangaroo  Station,Metro,Entry,193901
2024-09,Bardwell Park  Station,Train,Exit,21884
2024-09,Bardwell Park  Station,Train,Entry,23755
2024-09,Bargo  Station,Train,Exit,923
2024-09,Bargo  Station,Train,Entry,1024
2024-09,Bathurst  Station,Train,Exit,1673
2024-09,Bathurst  Station,Train,Entry,2342
2024-09,Beecroft  Station,Train,Exit,29137
2024-09,Beecroft  Station,Train,Entry,30893
2024-09,Bell  Station,Train,Exit,51
2024-09,Bell  Station,Train,Entry,52
2024-09,Bella Vista  Station,Metro,Exit,75678
2024-09,Bella Vista  Station,Metro,Entry,77472
2024-09,Bellambi  Station,Train,Exit,2005
2024-09,Bellambi  Station,Train,Entry,2292
2024-09,Belmore  Station,Train,Exit,44594
2024-09,Belmore  Station,Train,Entry,49310
2024-09,Berala  Station,Train,Exit,39998
2024-09,Berala  Station,Train,Entry,40846
2024-09,Beresfield  Station,Train,Exit,3294
2024-09,Beresfield  Station,Train,Entry,3570
2024-09,Berowra  Station,Train,Exit,23424
2024-09,Berowra  Station,Train,Entry,25390
2024-09,Berry  Station,Train,Exit,1301
2024-09,Berry  Station,Train,Entry,1390
2024-09,Beverly Hills  Station,Train,Exit,36488
2024-09,Beverly Hills  Station,Train,Entry,40441
2024-09,Bexley North  Station,Train,Exit,25566
2024-09,Bexley North  Station,Train,Entry,27843
2024-09,Birrong  Station,Train,Exit,19334
2024-09,Birrong  Station,Train,Entry,20107
2024-09,Blackheath  Station,Train,Exit,4396
2024-09,Blackheath  Station,Train,Entry,4704
2024-09,Blacktown  Station,Train,Exit,374173
2024-09,Blacktown  Station,Train,Entry,360865
2024-09,Blaxland  Station,Train,Exit,9090
2024-09,Blaxland  Station,Train,Entry,9983
2024-09,Bomaderry  Station,Train,Exit,5341
2024-09,Bomaderry  Station,Train,Entry,6287
2024-09,Bombo  Station,Train,Exit,482
2024-09,Bombo  Station,Train,Entry,581
2024-09,Bondi Junction  Station,Train,Exit,538813
2024-09,Bondi Junction  Station,Train,Entry,531238
2024-09,Booragul  Station,Train,Exit,644
2024-09,Booragul  Station,Train,Entry,668
2024-09,Bowral  Station,Train,Exit,7660
2024-09,Bowral  Station,Train,Entry,7741
2024-09,Branxton  Station,Train,Exit,107
2024-09,Branxton  Station,Train,Entry,177
2024-09,Broadmeadow  Station,Train,Exit,18092
2024-09,Broadmeadow  Station,Train,Entry,19856
2024-09,Bullaburra  Station,Train,Exit,1153
2024-09,Bullaburra  Station,Train,Entry,1170
2024-09,Bulli  Station,Train,Exit,2946
2024-09,Bulli  Station,Train,Entry,3255
2024-09,Bundanoon  Station,Train,Exit,219
2024-09,Bundanoon  Station,Train,Entry,348
2024-09,Burradoo  Station,Train,Exit,260
2024-09,Burradoo  Station,Train,Entry,223
2024-09,Burwood  Station,Train,Exit,476034
2024-09,Burwood  Station,Train,Entry,465293
2024-09,Cabramatta  Station,Train,Exit,193445
2024-09,Cabramatta  Station,Train,Entry,194959
2024-09,Camellia  Station,Train,Exit,2625
2024-09,Camellia  Station,Train,Entry,3832
2024-09,Campbelltown  Station,Train,Exit,125055
2024-09,Campbelltown  Station,Train,Entry,125472
2024-09,Campsie  Station,Train,Exit,155914
2024-09,Campsie  Station,Train,Entry,157481
2024-09,Canley Vale  Station,Train,Exit,52748
2024-09,Canley Vale  Station,Train,Entry,57159
2024-09,Canterbury  Station,Train,Exit,45549
2024-09,Canterbury  Station,Train,Entry,50842
2024-09,Cardiff  Station,Train,Exit,17805
2024-09,Cardiff  Station,Train,Entry,19516
2024-09,Caringbah  Station,Train,Exit,53902
2024-09,Caringbah  Station,Train,Entry,56888
2024-09,Carlingford  Station,Train,Exit,2279
2024-09,Carlingford  Station,Train,Entry,2969
2024-09,Carlton  Station,Train,Exit,57695
2024-09,Carlton  Station,Train,Entry,62154
2024-09,Carramar  Station,Train,Exit,11503
2024-09,Carramar  Station,Train,Entry,13298
2024-09,Castle Hill  Station,Metro,Exit,175213
2024-09,Castle Hill  Station,Metro,Entry,167636
2024-09,Casula  Station,Train,Exit,7575
2024-09,Casula  Station,Train,Entry,8902
2024-09,Central  Station,Shared,Exit,2109693
2024-09,Central  Station,Shared,Entry,2054635
2024-09,Chatswood  Station,Shared,Exit,771542
2024-09,Chatswood  Station,Shared,Entry,744412
2024-09,Cheltenham  Station,Train,Exit,18062
2024-09,Cheltenham  Station,Train,Entry,21953
2024-09,Cherrybrook  Station,Metro,Exit,104524
2024-09,Cherrybrook  Station,Metro,Entry,111278
2024-09,Chester Hill  Station,Train,Exit,22366
2024-09,Chester Hill  Station,Train,Entry,23706
2024-09,Circular Quay  Station,Train,Exit,547808
2024-09,Circular Quay  Station,Train,Entry,544977
2024-09,Clarendon  Station,Train,Exit,1865
2024-09,Clarendon  Station,Train,Entry,1880
2024-09,Clyde  Station,Train,Exit,21262
2024-09,Clyde  Station,Train,Entry,22594
2024-09,Coalcliff  Station,Train,Exit,418
2024-09,Coalcliff  Station,Train,Entry,333
2024-09,Cockle Creek  Station,Train,Exit,1218
2024-09,Cockle Creek  Station,Train,Entry,1192
2024-09,Coledale  Station,Train,Exit,764
2024-09,Coledale  Station,Train,Entry,890
2024-09,Como  Station,Train,Exit,12142
2024-09,Como  Station,Train,Entry,14007
2024-09,Concord West  Station,Train,Exit,41254
2024-09,Concord West  Station,Train,Entry,43953
2024-09,Coniston  Station,Train,Exit,4890
2024-09,Coniston  Station,Train,Entry,5271
2024-09,Corrimal  Station,Train,Exit,2813
2024-09,Corrimal  Station,Train,Entry,3245
2024-09,Cowan  Station,Train,Exit,1352
2024-09,Cowan  Station,Train,Entry,1163
2024-09,Cringila  Station,Train,Exit,322
2024-09,Cringila  Station,Train,Entry,316
2024-09,Cronulla  Station,Train,Exit,54839
2024-09,Cronulla  Station,Train,Entry,55394
2024-09,Crows Nest  Station,Metro,Exit,254405
2024-09,Crows Nest  Station,Metro,Entry,246528
2024-09,Croydon  Station,Train,Exit,50457
2024-09,Croydon  Station,Train,Entry,55300
2024-09,Dapto  Station,Train,Exit,9383
2024-09,Dapto  Station,Train,Entry,10277
2024-09,Denistone  Station,Train,Exit,11070
2024-09,Denistone  Station,Train,Entry,12547
2024-09,Domestic  Station,Train,Exit,191049
2024-09,Domestic  Station,Train,Entry,215501
2024-09,Doonside  Station,Train,Exit,54245
2024-09,Doonside  Station,Train,Entry,60780
2024-09,Dora Creek  Station,Train,Exit,861
2024-09,Dora Creek  Station,Train,Entry,969
2024-09,Douglas Park  Station,Train,Exit,416
2024-09,Douglas Park  Station,Train,Entry,401
2024-09,Dulwich Hill  Station,Train,Exit,43986
2024-09,Dulwich Hill  Station,Train,Entry,48931
2024-09,Dundas  Station,Train,Exit,2511
2024-09,Dundas  Station,Train,Entry,2669
2024-09,Dungog  Station,Train,Exit,372
2024-09,Dungog  Station,Train,Entry,467
2024-09,East Hills  Station,Train,Exit,27057
2024-09,East Hills  Station,Train,Entry,27717
2024-09,East Maitland  Station,Train,Exit,482
2024-09,East Maitland  Station,Train,Entry,491
2024-09,East Richmond  Station,Train,Exit,5750
2024-09,East Richmond  Station,Train,Entry,4284
2024-09,Eastwood  Station,Train,Exit,167633
2024-09,Eastwood  Station,Train,Entry,164938
2024-09,Edgecliff  Station,Train,Exit,182904
2024-09,Edgecliff  Station,Train,Entry,187836
2024-09,Edmondson Park  Station,Train,Exit,89847
2024-09,Edmondson Park  Station,Train,Entry,92735
2024-09,Emu Plains  Station,Train,Exit,21890
2024-09,Emu Plains  Station,Train,Entry,23154
2024-09,Engadine  Station,Train,Exit,24642
2024-09,Engadine  Station,Train,Entry,26402
2024-09,Epping  Station,Shared,Exit,335917
2024-09,Epping  Station,Shared,Entry,341863
2024-09,Erskineville  Station,Train,Exit,51998
2024-09,Erskineville  Station,Train,Entry,58145
2024-09,Exeter  Station,Train,Exit,Less than 50
2024-09,Exeter  Station,Train,Entry,90
2024-09,Fairfield  Station,Train,Exit,125526
2024-09,Fairfield  Station,Train,Entry,130966
2024-09,Fairy Meadow  Station,Train,Exit,2127
2024-09,Fairy Meadow  Station,Train,Entry,2563
2024-09,Fassifern  Station,Train,Exit,7879
2024-09,Fassifern  Station,Train,Entry,8734
2024-09,Faulconbridge  Station,Train,Exit,1769
2024-09,Faulconbridge  Station,Train,Entry,1857
2024-09,Flemington  Station,Train,Exit,113512
2024-09,Flemington  Station,Train,Entry,119046
2024-09,Gadigal  Station,Metro,Exit,370916
2024-09,Gadigal  Station,Metro,Entry,356603
2024-09,Gerringong  Station,Train,Exit,812
2024-09,Gerringong  Station,Train,Entry,789
2024-09,Glenbrook  Station,Train,Exit,7711
2024-09,Glenbrook  Station,Train,Entry,8585
2024-09,Glenfield  Station,Train,Exit,113391
2024-09,Glenfield  Station,Train,Entry,120944
2024-09,Gordon  Station,Train,Exit,139121
2024-09,Gordon  Station,Train,Entry,142332
2024-09,Gosford  Station,Train,Exit,95302
2024-09,Gosford  Station,Train,Entry,94900
2024-09,Goulburn  Station,Train,Exit,693
2024-09,Goulburn  Station,Train,Entry,941
2024-09,Granville  Station,Train,Exit,165784
2024-09,Granville  Station,Train,Entry,175676
2024-09,Green Square  Station,Train,Exit,236241
2024-09,Green Square  Station,Train,Entry,241998
2024-09,Greta  Station,Train,Exit,Less than 50
2024-09,Greta  Station,Train,Entry,Less than 50
2024-09,Guildford  Station,Train,Exit,60333
2024-09,Guildford  Station,Train,Entry,67523
2024-09,Gymea  Station,Train,Exit,38632
2024-09,Gymea  Station,Train,Entry,41866
2024-09,Hamilton  Station,Train,Exit,15353
2024-09,Hamilton  Station,Train,Entry,15585
2024-09,Harris Park  Station,Train,Exit,62531
2024-09,Harris Park  Station,Train,Entry,62141
2024-09,Hawkesbury River  Station,Train,Exit,6114
2024-09,Hawkesbury River  Station,Train,Entry,6123
2024-09,Hazelbrook  Station,Train,Exit,5289
2024-09,Hazelbrook  Station,Train,Entry,5723
2024-09,Heathcote  Station,Train,Exit,10628
2024-09,Heathcote  Station,Train,Entry,11065
2024-09,Helensburgh  Station,Train,Exit,7807
2024-09,Helensburgh  Station,Train,Entry,8630
2024-09,Hexham  Station,Train,Exit,188
2024-09,Hexham  Station,Train,Entry,181
2024-09,High Street  Station,Train,Exit,331
2024-09,High Street  Station,Train,Entry,250
2024-09,Hilldale  Station,Train,Exit,Less than 50
2024-09,Hilldale  Station,Train,Entry,Less than 50
2024-09,Hills Showground  Station,Metro,Exit,89951
2024-09,Hills Showground  Station,Metro,Entry,93710
2024-09,Holsworthy  Station,Train,Exit,59615
2024-09,Holsworthy  Station,Train,Entry,62836
2024-09,Homebush  Station,Train,Exit,79700
2024-09,Homebush  Station,Train,Entry,86065
2024-09,Hornsby  Station,Train,Exit,275129
2024-09,Hornsby  Station,Train,Entry,267056
2024-09,Hurlstone Park  Station,Train,Exit,23100
2024-09,Hurlstone Park  Station,Train,Entry,25983
2024-09,Hurstville  Station,Train,Exit,456115
2024-09,Hurstville  Station,Train,Entry,450232
2024-09,Ingleburn  Station,Train,Exit,65286
2024-09,Ingleburn  Station,Train,Entry,66133
2024-09,International  Station,Train,Exit,127003
2024-09,International  Station,Train,Entry,133258
2024-09,Jannali  Station,Train,Exit,48635
2024-09,Jannali  Station,Train,Entry,51481
2024-09,Katoomba  Station,Train,Exit,28507
2024-09,Katoomba  Station,Train,Entry,28259
2024-09,Kellyville  Station,Metro,Exit,95333
2024-09,Kellyville  Station,Metro,Entry,96571
2024-09,Kembla Grange  Station,Train,Exit,137
2024-09,Kembla Grange  Station,Train,Entry,108
2024-09,Kiama  Station,Train,Exit,10957
2024-09,Kiama  Station,Train,Entry,11329
2024-09,Killara  Station,Train,Exit,38131
2024-09,Killara  Station,Train,Entry,40716
2024-09,Kings Cross  Station,Train,Exit,345134
2024-09,Kings Cross  Station,Train,Entry,330097
2024-09,Kingsgrove  Station,Train,Exit,41916
2024-09,Kingsgrove  Station,Train,Entry,44423
2024-09,Kingswood  Station,Train,Exit,45776
2024-09,Kingswood  Station,Train,Entry,49876
2024-09,Kirrawee  Station,Train,Exit,37279
2024-09,Kirrawee  Station,Train,Entry,38643
2024-09,Kogarah  Station,Train,Exit,238968
2024-09,Kogarah  Station,Train,Entry,248158
2024-09,Koolewong  Station,Train,Exit,1010
2024-09,Koolewong  Station,Train,Entry,1322
2024-09,Kotara  Station,Train,Exit,1675
2024-09,Kotara  Station,Train,Entry,1345
2024-09,Lakemba  Station,Train,Exit,83283
2024-09,Lakemba  Station,Train,Entry,84842
2024-09,Lapstone  Station,Train,Exit,1542
2024-09,Lapstone  Station,Train,Entry,1718
2024-09,Lawson  Station,Train,Exit,2952
2024-09,Lawson  Station,Train,Entry,3119
2024-09,Leightonfield  Station,Train,Exit,4917
2024-09,Leightonfield  Station,Train,Entry,5089
2024-09,Leppington  Station,Train,Exit,87774
2024-09,Leppington  Station,Train,Entry,91324
2024-09,Leumeah  Station,Train,Exit,52854
2024-09,Leumeah  Station,Train,Entry,55367
2024-09,Leura  Station,Train,Exit,7956
2024-09,Leura  Station,Train,Entry,9614
2024-09,Lewisham  Station,Train,Exit,55969
2024-09,Lewisham  Station,Train,Entry,58985
2024-09,Lidcombe  Station,Train,Exit,305019
2024-09,Lidcombe  Station,Train,Entry,312296
2024-09,Linden  Station,Train,Exit,217
2024-09,Linden  Station,Train,Entry,291
2024-09,Lindfield  Station,Train,Exit,79922
2024-09,Lindfield  Station,Train,Entry,80956
2024-09,Lisarow  Station,Train,Exit,2618
2024-09,Lisarow  Station,Train,Entry,2891
2024-09,Lithgow  Station,Train,Exit,4283
2024-09,Lithgow  Station,Train,Entry,4872
2024-09,Liverpool  Station,Train,Exit,208590
2024-09,Liverpool  Station,Train,Entry,209567
2024-09,Lochinvar  Station,Train,Exit,Less than 50
2024-09,Lochinvar  Station,Train,Entry,Less than 50
2024-09,Loftus  Station,Train,Exit,7765
2024-09,Loftus  Station,Train,Entry,8613
2024-09,Lysaghts  Station,Train,Exit,Less than 50
2024-09,Lysaghts  Station,Train,Entry,Less than 50
2024-09,Macarthur  Station,Train,Exit,64015
2024-09,Macarthur  Station,Train,Entry,65214
2024-09,Macdonaldtown  Station,Train,Exit,22795
2024-09,Macdonaldtown  Station,Train,Entry,22906
2024-09,Macquarie Fields  Station,Train,Exit,18764
2024-09,Macquarie Fields  Station,Train,Entry,20478
2024-09,Macquarie Park  Station,Metro,Exit,102121
2024-09,Macquarie Park  Station,Metro,Entry,102502
2024-09,Macquarie University  Station,Metro,Exit,340434
2024-09,Macquarie University  Station,Metro,Entry,334834
2024-09,Maitland  Station,Train,Exit,8836
2024-09,Maitland  Station,Train,Entry,9701
2024-09,Marayong  Station,Train,Exit,21419
2024-09,Marayong  Station,Train,Entry,23639
2024-09,Marrickville  Station,Train,Exit,79812
2024-09,Marrickville  Station,Train,Entry,82369
2024-09,Martin Place  Station,Shared,Exit,812256
2024-09,Martin Place  Station,Shared,Entry,737062
2024-09,Martins Creek  Station,Train,Exit,Less than 50
2024-09,Martins Creek  Station,Train,Entry,Less than 50
2024-09,Marulan  Station,Train,Exit,Less than 50
2024-09,Marulan  Station,Train,Entry,Less than 50
2024-09,Mascot  Station,Train,Exit,386667
2024-09,Mascot  Station,Train,Entry,383458
2024-09,Meadowbank  Station,Train,Exit,106866
2024-09,Meadowbank  Station,Train,Entry,117633
2024-09,Medlow Bath  Station,Train,Exit,646
2024-09,Medlow Bath  Station,Train,Entry,767
2024-09,Menangle Park  Station,Train,Exit,433
2024-09,Menangle Park  Station,Train,Entry,360
2024-09,Menangle  Station,Train,Exit,272
2024-09,Menangle  Station,Train,Entry,285
2024-09,Merrylands  Station,Train,Exit,133336
2024-09,Merrylands  Station,Train,Entry,138028
2024-09,Metford  Station,Train,Exit,1619
2024-09,Metford  Station,Train,Entry,1578
2024-09,Milsons Point  Station,Train,Exit,150743
2024-09,Milsons Point  Station,Train,Entry,146652
2024-09,Mindaribba  Station,Train,Exit,Less than 50
2024-09,Mindaribba  Station,Train,Entry,Less than 50
2024-09,Minnamurra  Station,Train,Exit,1930
2024-09,Minnamurra  Station,Train,Entry,1936
2024-09,Minto  Station,Train,Exit,61196
2024-09,Minto  Station,Train,Entry,64156
2024-09,Miranda  Station,Train,Exit,79749
2024-09,Miranda  Station,Train,Entry,76453
2024-09,Mittagong  Station,Train,Exit,3040
2024-09,Mittagong  Station,Train,Entry,3516
2024-09,Morisset  Station,Train,Exit,14274
2024-09,Morisset  Station,Train,Entry,15482
2024-09,Mortdale  Station,Train,Exit,66524
2024-09,Mortdale  Station,Train,Entry,72527
2024-09,Moss Vale  Station,Train,Exit,3278
2024-09,Moss Vale  Station,Train,Entry,3622
2024-09,Mount Colah  Station,Train,Exit,11115
2024-09,Mount Colah  Station,Train,Entry,12361
2024-09,Mount Druitt  Station,Train,Exit,141804
2024-09,Mount Druitt  Station,Train,Entry,143389
2024-09,Mount Kuring-gai  Station,Train,Exit,4748
2024-09,Mount Kuring-gai  Station,Train,Entry,4757
2024-09,Mount Victoria  Station,Train,Exit,2640
2024-09,Mount Victoria  Station,Train,Entry,2519
2024-09,Mulgrave  Station,Train,Exit,5430
2024-09,Mulgrave  Station,Train,Entry,5663
2024-09,Museum  Station,Train,Exit,260117
2024-09,Museum  Station,Train,Entry,245673
2024-09,Muswellbrook  Station,Train,Exit,419
2024-09,Muswellbrook  Station,Train,Entry,526
2024-09,Narara  Station,Train,Exit,4343
2024-09,Narara  Station,Train,Entry,4859
2024-09,Narwee  Station,Train,Exit,35210
2024-09,Narwee  Station,Train,Entry,38427
2024-09,Newcastle Interchange Station,Train,Exit,41420
2024-09,Newcastle Interchange Station,Train,Entry,40843
2024-09,Newtown  Station,Train,Exit,252716
2024-09,Newtown  Station,Train,Entry,220773
2024-09,Niagara Park  Station,Train,Exit,2156
2024-09,Niagara Park  Station,Train,Entry,2326
2024-09,Normanhurst  Station,Train,Exit,21441
2024-09,Normanhurst  Station,Train,Entry,26702
2024-09,North Ryde  Station,Metro,Exit,80940
2024-09,North Ryde  Station,Metro,Entry,81752
2024-09,North Strathfield  Station,Train,Exit,57985
2024-09,North Strathfield  Station,Train,Entry,58847
2024-09,North Sydney  Station,Train,Exit,285990
2024-09,North Sydney  Station,Train,Entry,268838
2024-09,North Wollongong  Station,Train,Exit,31336
2024-09,North Wollongong  Station,Train,Entry,32134
2024-09,Norwest  Station,Metro,Exit,69758
2024-09,Norwest  Station,Metro,Entry,70339
2024-09,Oak Flats  Station,Train,Exit,7333
2024-09,Oak Flats  Station,Train,Entry,8129
2024-09,Oatley  Station,Train,Exit,39846
2024-09,Oatley  Station,Train,Entry,41780
2024-09,Olympic Park  Station,Train,Exit,78887
2024-09,Olympic Park  Station,Train,Entry,73534
2024-09,Otford  Station,Train,Exit,1367
2024-09,Otford  Station,Train,Entry,854
2024-09,Ourimbah  Station,Train,Exit,3985
2024-09,Ourimbah  Station,Train,Entry,4172
2024-09,Padstow  Station,Train,Exit,49608
2024-09,Padstow  Station,Train,Entry,53355
2024-09,Panania  Station,Train,Exit,32882
2024-09,Panania  Station,Train,Entry,35786
2024-09,Parramatta  Station,Train,Exit,969737
2024-09,Parramatta  Station,Train,Entry,950864
2024-09,Paterson  Station,Train,Exit,116
2024-09,Paterson  Station,Train,Entry,167
2024-09,Pendle Hill  Station,Train,Exit,66176
2024-09,Pendle Hill  Station,Train,Entry,70334
2024-09,Pennant Hills  Station,Train,Exit,35168
2024-09,Pennant Hills  Station,Train,Entry,37169
2024-09,Penrith  Station,Train,Exit,165483
2024-09,Penrith  Station,Train,Entry,160099
2024-09,Penrose  Station,Train,Exit,Less than 50
2024-09,Penrose  Station,Train,Entry,Less than 50
2024-09,Penshurst  Station,Train,Exit,58500
2024-09,Penshurst  Station,Train,Entry,67194
2024-09,Petersham  Station,Train,Exit,73481
2024-09,Petersham  Station,Train,Entry,72351
2024-09,Picton  Station,Train,Exit,2671
2024-09,Picton  Station,Train,Entry,3011
2024-09,Point Clare  Station,Train,Exit,3003
2024-09,Point Clare  Station,Train,Entry,3582
2024-09,Port Kembla North  Station,Train,Exit,287
2024-09,Port Kembla North  Station,Train,Entry,274
2024-09,Port Kembla  Station,Train,Exit,1444
2024-09,Port Kembla  Station,Train,Entry,1679
2024-09,Punchbowl  Station,Train,Exit,47873
2024-09,Punchbowl  Station,Train,Entry,50044
2024-09,Pymble  Station,Train,Exit,42146
2024-09,Pymble  Station,Train,Entry,46835
2024-09,Quakers Hill  Station,Train,Exit,52648
2024-09,Quakers Hill  Station,Train,Entry,58738
2024-09,Redfern  Station,Train,Exit,681984
2024-09,Redfern  Station,Train,Entry,630206
2024-09,Regents Park  Station,Train,Exit,26877
2024-09,Regents Park  Station,Train,Entry,27755
2024-09,Revesby  Station,Train,Exit,101517
2024-09,Revesby  Station,Train,Entry,103890
2024-09,Rhodes  Station,Train,Exit,215686
2024-09,Rhodes  Station,Train,Entry,219591
2024-09,Richmond  Station,Train,Exit,14429
2024-09,Richmond  Station,Train,Entry,16947
2024-09,Riverstone  Station,Train,Exit,25743
2024-09,Riverstone  Station,Train,Entry,28843
2024-09,Riverwood  Station,Train,Exit,67905
2024-09,Riverwood  Station,Train,Entry,71469
2024-09,Rockdale  Station,Train,Exit,220092
2024-09,Rockdale  Station,Train,Entry,228379
2024-09,Rooty Hill  Station,Train,Exit,75002
2024-09,Rooty Hill  Station,Train,Entry,79224
2024-09,Roseville  Station,Train,Exit,55361
2024-09,Roseville  Station,Train,Entry,59655
2024-09,Rouse Hill  Station,Metro,Exit,116333
2024-09,Rouse Hill  Station,Metro,Entry,110123
2024-09,Rydal  Station,Train,Exit,Less than 50
2024-09,Rydal  Station,Train,Entry,Less than 50
2024-09,Sandgate  Station,Train,Exit,345
2024-09,Sandgate  Station,Train,Entry,438
2024-09,Scarborough  Station,Train,Exit,406
2024-09,Scarborough  Station,Train,Entry,425
2024-09,Schofields  Station,Train,Exit,89664
2024-09,Schofields  Station,Train,Entry,96166
2024-09,Scone  Station,Train,Exit,295
2024-09,Scone  Station,Train,Entry,365
2024-09,Sefton  Station,Train,Exit,13985
2024-09,Sefton  Station,Train,Entry,16165
2024-09,Seven Hills  Station,Train,Exit,125038
2024-09,Seven Hills  Station,Train,Entry,131466
2024-09,Shellharbour Junction  Station,Train,Exit,3417
2024-09,Shellharbour Junction  Station,Train,Entry,3872
2024-09,Singleton  Station,Train,Exit,631
2024-09,Singleton  Station,Train,Entry,692
2024-09,Springwood  Station,Train,Exit,18458
2024-09,Springwood  Station,Train,Entry,19239
2024-09,St James  Station,Train,Exit,184220
2024-09,St James  Station,Train,Entry,172103
2024-09,St Leonards  Station,Train,Exit,237289
2024-09,St Leonards  Station,Train,Entry,237777
2024-09,St Marys  Station,Train,Exit,96697
2024-09,St Marys  Station,Train,Entry,100356
2024-09,St Peters  Station,Train,Exit,64770
2024-09,St Peters  Station,Train,Entry,69993
2024-09,Stanmore  Station,Train,Exit,63609
2024-09,Stanmore  Station,Train,Entry,68793
2024-09,Stanwell Park  Station,Train,Exit,1304
2024-09,Stanwell Park  Station,Train,Entry,1351
2024-09,Strathfield  Station,Train,Exit,550376
2024-09,Strathfield  Station,Train,Entry,560154
2024-09,Summer Hill  Station,Train,Exit,71344
2024-09,Summer Hill  Station,Train,Entry,74983
2024-09,Sutherland  Station,Train,Exit,140666
2024-09,Sutherland  Station,Train,Entry,144112
2024-09,Sydenham  Station,Shared,Exit,213116
2024-09,Sydenham  Station,Shared,Entry,213772
2024-09,Tahmoor  Station,Train,Exit,2825
2024-09,Tahmoor  Station,Train,Entry,3000
2024-09,Tallawong  Station,Metro,Exit,149403
2024-09,Tallawong  Station,Metro,Entry,158278
2024-09,Tallong  Station,Train,Exit,Less than 50
2024-09,Tallong  Station,Train,Entry,Less than 50
2024-09,Tarana  Station,Train,Exit,76
2024-09,Tarana  Station,Train,Entry,114
2024-09,Tarro  Station,Train,Exit,112
2024-09,Tarro  Station,Train,Entry,123
2024-09,Tascott  Station,Train,Exit,1807
2024-09,Tascott  Station,Train,Entry,2343
2024-09,Telarah  Station,Train,Exit,2542
2024-09,Telarah  Station,Train,Entry,2866
2024-09,Telopea  Station,Train,Exit,2314
2024-09,Telopea  Station,Train,Entry,2760
2024-09,Tempe  Station,Train,Exit,27159
2024-09,Tempe  Station,Train,Entry,28608
2024-09,Teralba  Station,Train,Exit,1077
2024-09,Teralba  Station,Train,Entry,1191
2024-09,Thirroul  Station,Train,Exit,19077
2024-09,Thirroul  Station,Train,Entry,19998
2024-09,Thornleigh  Station,Train,Exit,34023
2024-09,Thornleigh  Station,Train,Entry,35736
2024-09,Thornton  Station,Train,Exit,5489
2024-09,Thornton  Station,Train,Entry,6062
2024-09,Toongabbie  Station,Train,Exit,61141
2024-09,Toongabbie  Station,Train,Entry,64643
2024-09,Town Hall  Station,Train,Exit,1683451
2024-09,Town Hall  Station,Train,Entry,1763924
2024-09,Towradgi  Station,Train,Exit,1327
2024-09,Towradgi  Station,Train,Entry,1610
2024-09,Tuggerah  Station,Train,Exit,22796
2024-09,Tuggerah  Station,Train,Entry,23950
2024-09,Turramurra  Station,Train,Exit,73666
2024-09,Turramurra  Station,Train,Entry,77560
2024-09,Turrella  Station,Train,Exit,22288
2024-09,Turrella  Station,Train,Entry,24277
2024-09,Unanderra  Station,Train,Exit,7468
2024-09,Unanderra  Station,Train,Entry,8574
2024-09,Valley Heights  Station,Train,Exit,1066
2024-09,Valley Heights  Station,Train,Entry,1209
2024-09,Victoria Cross  Station,Metro,Exit,343673
2024-09,Victoria Cross  Station,Metro,Entry,353517
2024-09,Victoria Street  Station,Train,Exit,6580
2024-09,Victoria Street  Station,Train,Entry,6851
2024-09,Villawood  Station,Train,Exit,11052
2024-09,Villawood  Station,Train,Entry,11682
2024-09,Vineyard  Station,Train,Exit,3488
2024-09,Vineyard  Station,Train,Entry,3872
2024-09,Wahroonga  Station,Train,Exit,36814
2024-09,Wahroonga  Station,Train,Entry,39490
2024-09,Waitara  Station,Train,Exit,57695
2024-09,Waitara  Station,Train,Entry,61186
2024-09,Wallarobba  Station,Train,Exit,Less than 50
2024-09,Wallarobba  Station,Train,Entry,Less than 50
2024-09,Warabrook  Station,Train,Exit,5479
2024-09,Warabrook  Station,Train,Entry,5487
2024-09,Waratah  Station,Train,Exit,4067
2024-09,Waratah  Station,Train,Entry,4297
2024-09,Warnervale  Station,Train,Exit,4958
2024-09,Warnervale  Station,Train,Entry,5607
2024-09,Warrawee  Station,Train,Exit,16844
2024-09,Warrawee  Station,Train,Entry,19148
2024-09,Warrimoo  Station,Train,Exit,2312
2024-09,Warrimoo  Station,Train,Entry,2486
2024-09,Warwick Farm  Station,Train,Exit,52507
2024-09,Warwick Farm  Station,Train,Entry,57385
2024-09,Waterfall  Station,Train,Exit,8843
2024-09,Waterfall  Station,Train,Entry,8703
2024-09,Waterloo  Station,Metro,Exit,116322
2024-09,Waterloo  Station,Metro,Entry,122229
2024-09,Waverton  Station,Train,Exit,34742
2024-09,Waverton  Station,Train,Entry,39543
2024-09,Wentworth Falls  Station,Train,Exit,6971
2024-09,Wentworth Falls  Station,Train,Entry,7205
2024-09,Wentworthville  Station,Train,Exit,83056
2024-09,Wentworthville  Station,Train,Entry,86560
2024-09,Werrington  Station,Train,Exit,25006
2024-09,Werrington  Station,Train,Entry,28200
2024-09,West Ryde  Station,Train,Exit,105383
2024-09,West Ryde  Station,Train,Entry,105703
2024-09,Westmead  Station,Train,Exit,144475
2024-09,Westmead  Station,Train,Entry,155071
2024-09,Wiley Park  Station,Train,Exit,31463
2024-09,Wiley Park  Station,Train,Entry,36498
2024-09,Windsor  Station,Train,Exit,15216
2024-09,Windsor  Station,Train,Entry,15587
2024-09,Wingello  Station,Train,Exit,Less than 50
2024-09,Wingello  Station,Train,Entry,Less than 50
2024-09,Wirragulla  Station,Train,Exit,Less than 50
2024-09,Wirragulla  Station,Train,Entry,Less than 50
2024-09,Wolli Creek  Station,Train,Exit,208001
2024-09,Wolli Creek  Station,Train,Entry,211283
2024-09,Wollongong  Station,Train,Exit,40580
2024-09,Wollongong  Station,Train,Entry,40496
2024-09,Wollstonecraft  Station,Train,Exit,38234
2024-09,Wollstonecraft  Station,Train,Entry,42145
2024-09,Wombarra  Station,Train,Exit,608
2024-09,Wombarra  Station,Train,Entry,721
2024-09,Wondabyne  Station,Train,Exit,427
2024-09,Wondabyne  Station,Train,Entry,350
2024-09,Woodford  Station,Train,Exit,1408
2024-09,Woodford  Station,Train,Entry,1510
2024-09,Woolooware  Station,Train,Exit,24697
2024-09,Woolooware  Station,Train,Entry,25949
2024-09,Woonona  Station,Train,Exit,1978
2024-09,Woonona  Station,Train,Entry,2466
2024-09,Woy Woy  Station,Train,Exit,73820
2024-09,Woy Woy  Station,Train,Entry,73358
2024-09,Wyee  Station,Train,Exit,4828
2024-09,Wyee  Station,Train,Entry,5536
2024-09,Wynyard  Station,Train,Exit,1186404
2024-09,Wynyard  Station,Train,Entry,1127340
2024-09,Wyong  Station,Train,Exit,25721
2024-09,Wyong  Station,Train,Entry,27679
2024-09,Yagoona  Station,Train,Exit,28471
2024-09,Yagoona  Station,Train,Entry,32115
2024-09,Yennora  Station,Train,Exit,25734
2024-09,Yennora  Station,Train,Entry,25434
2024-09,Yerrinbool  Station,Train,Exit,284
2024-09,Yerrinbool  Station,Train,Entry,297
2024-09,Zig Zag  Station,Train,Exit,Less than 50
2024-09,Zig Zag  Station,Train,Entry,Less than 50
2024-10,Aberdeen  Station,Train,Exit,Less than 50
2024-10,Aberdeen  Station,Train,Entry,63
2024-10,Adamstown  Station,Train,Exit,2596
2024-10,Adamstown  Station,Train,Entry,2562
2024-10,Albion Park  Station,Train,Exit,5822
2024-10,Albion Park  Station,Train,Entry,6482
2024-10,Allawah  Station,Train,Exit,55704
2024-10,Allawah  Station,Train,Entry,62651
2024-10,Arncliffe  Station,Train,Exit,53300
2024-10,Arncliffe  Station,Train,Entry,59050
2024-10,Artarmon  Station,Train,Exit,97261
2024-10,Artarmon  Station,Train,Entry,101628
2024-10,Ashfield  Station,Train,Exit,261902
2024-10,Ashfield  Station,Train,Entry,262034
2024-10,Asquith  Station,Train,Exit,26839
2024-10,Asquith  Station,Train,Entry,30165
2024-10,Auburn  Station,Train,Exit,366844
2024-10,Auburn  Station,Train,Entry,383600
2024-10,Austinmer  Station,Train,Exit,2009
2024-10,Austinmer  Station,Train,Entry,2504
2024-10,Awaba  Station,Train,Exit,449
2024-10,Awaba  Station,Train,Entry,518
2024-10,Banksia  Station,Train,Exit,33405
2024-10,Banksia  Station,Train,Entry,36826
2024-10,Bankstown  Station,Train,Exit,44997
2024-10,Bankstown  Station,Train,Entry,41932
2024-10,Barangaroo  Station,Metro,Exit,226430
2024-10,Barangaroo  Station,Metro,Entry,201922
2024-10,Bardwell Park  Station,Train,Exit,26099
2024-10,Bardwell Park  Station,Train,Entry,27929
2024-10,Bargo  Station,Train,Exit,1138
2024-10,Bargo  Station,Train,Entry,1254
2024-10,Bathurst  Station,Train,Exit,1923
2024-10,Bathurst  Station,Train,Entry,2695
2024-10,Beecroft  Station,Train,Exit,31877
2024-10,Beecroft  Station,Train,Entry,32998
2024-10,Bell  Station,Train,Exit,86
2024-10,Bell  Station,Train,Entry,98
2024-10,Bella Vista  Station,Metro,Exit,78629
2024-10,Bella Vista  Station,Metro,Entry,80984
2024-10,Bellambi  Station,Train,Exit,2204
2024-10,Bellambi  Station,Train,Entry,2438
2024-10,Berala  Station,Train,Exit,39028
2024-10,Berala  Station,Train,Entry,41349
2024-10,Beresfield  Station,Train,Exit,3468
2024-10,Beresfield  Station,Train,Entry,3812
2024-10,Berowra  Station,Train,Exit,25075
2024-10,Berowra  Station,Train,Entry,27046
2024-10,Berry  Station,Train,Exit,1786
2024-10,Berry  Station,Train,Entry,1791
2024-10,Beverly Hills  Station,Train,Exit,43702
2024-10,Beverly Hills  Station,Train,Entry,48232
2024-10,Bexley North  Station,Train,Exit,30229
2024-10,Bexley North  Station,Train,Entry,33036
2024-10,Birrong  Station,Train,Exit,4904
2024-10,Birrong  Station,Train,Entry,4803
2024-10,Blackheath  Station,Train,Exit,6266
2024-10,Blackheath  Station,Train,Entry,6511
2024-10,Blacktown  Station,Train,Exit,399093
2024-10,Blacktown  Station,Train,Entry,388661
2024-10,Blaxland  Station,Train,Exit,10175
2024-10,Blaxland  Station,Train,Entry,10937
2024-10,Bomaderry  Station,Train,Exit,6380
2024-10,Bomaderry  Station,Train,Entry,7605
2024-10,Bombo  Station,Train,Exit,752
2024-10,Bombo  Station,Train,Entry,908
2024-10,Bondi Junction  Station,Train,Exit,605212
2024-10,Bondi Junction  Station,Train,Entry,605872
2024-10,Booragul  Station,Train,Exit,754
2024-10,Booragul  Station,Train,Entry,777
2024-10,Bowral  Station,Train,Exit,6034
2024-10,Bowral  Station,Train,Entry,6146
2024-10,Branxton  Station,Train,Exit,144
2024-10,Branxton  Station,Train,Entry,189
2024-10,Broadmeadow  Station,Train,Exit,20617
2024-10,Broadmeadow  Station,Train,Entry,21745
2024-10,Bullaburra  Station,Train,Exit,1140
2024-10,Bullaburra  Station,Train,Entry,1109
2024-10,Bulli  Station,Train,Exit,3119
2024-10,Bulli  Station,Train,Entry,3398
2024-10,Bundanoon  Station,Train,Exit,270
2024-10,Bundanoon  Station,Train,Entry,407
2024-10,Burradoo  Station,Train,Exit,271
2024-10,Burradoo  Station,Train,Entry,239
2024-10,Burwood  Station,Train,Exit,539465
2024-10,Burwood  Station,Train,Entry,527097
2024-10,Cabramatta  Station,Train,Exit,197003
2024-10,Cabramatta  Station,Train,Entry,198641
2024-10,Camellia  Station,Train,Exit,2730
2024-10,Camellia  Station,Train,Entry,3847
2024-10,Campbelltown  Station,Train,Exit,138014
2024-10,Campbelltown  Station,Train,Entry,137962
2024-10,Canley Vale  Station,Train,Exit,56628
2024-10,Canley Vale  Station,Train,Entry,63673
2024-10,Cardiff  Station,Train,Exit,21207
2024-10,Cardiff  Station,Train,Entry,22718
2024-10,Caringbah  Station,Train,Exit,56950
2024-10,Caringbah  Station,Train,Entry,59311
2024-10,Carlingford  Station,Train,Exit,2197
2024-10,Carlingford  Station,Train,Entry,2680
2024-10,Carlton  Station,Train,Exit,59482
2024-10,Carlton  Station,Train,Entry,65141
2024-10,Carramar  Station,Train,Exit,12366
2024-10,Carramar  Station,Train,Entry,13827
2024-10,Castle Hill  Station,Metro,Exit,183677
2024-10,Castle Hill  Station,Metro,Entry,173573
2024-10,Casula  Station,Train,Exit,8478
2024-10,Casula  Station,Train,Entry,9534
2024-10,Central  Station,Shared,Exit,2313149
2024-10,Central  Station,Shared,Entry,2251285
2024-10,Chatswood  Station,Shared,Exit,823320
2024-10,Chatswood  Station,Shared,Entry,793732
2024-10,Cheltenham  Station,Train,Exit,17386
2024-10,Cheltenham  Station,Train,Entry,20581
2024-10,Cherrybrook  Station,Metro,Exit,108132
2024-10,Cherrybrook  Station,Metro,Entry,112384
2024-10,Chester Hill  Station,Train,Exit,26067
2024-10,Chester Hill  Station,Train,Entry,27307
2024-10,Circular Quay  Station,Train,Exit,595111
2024-10,Circular Quay  Station,Train,Entry,591764
2024-10,Clarendon  Station,Train,Exit,2160
2024-10,Clarendon  Station,Train,Entry,2187
2024-10,Clyde  Station,Train,Exit,23765
2024-10,Clyde  Station,Train,Entry,24574
2024-10,Coalcliff  Station,Train,Exit,546
2024-10,Coalcliff  Station,Train,Entry,455
2024-10,Cockle Creek  Station,Train,Exit,1354
2024-10,Cockle Creek  Station,Train,Entry,1238
2024-10,Coledale  Station,Train,Exit,839
2024-10,Coledale  Station,Train,Entry,894
2024-10,Como  Station,Train,Exit,13032
2024-10,Como  Station,Train,Entry,15183
2024-10,Concord West  Station,Train,Exit,45956
2024-10,Concord West  Station,Train,Entry,48943
2024-10,Coniston  Station,Train,Exit,5045
2024-10,Coniston  Station,Train,Entry,5612
2024-10,Corrimal  Station,Train,Exit,2902
2024-10,Corrimal  Station,Train,Entry,3149
2024-10,Cowan  Station,Train,Exit,1575
2024-10,Cowan  Station,Train,Entry,1418
2024-10,Cringila  Station,Train,Exit,348
2024-10,Cringila  Station,Train,Entry,230
2024-10,Cronulla  Station,Train,Exit,64105
2024-10,Cronulla  Station,Train,Entry,63876
2024-10,Crows Nest  Station,Metro,Exit,250068
2024-10,Crows Nest  Station,Metro,Entry,244017
2024-10,Croydon  Station,Train,Exit,49908
2024-10,Croydon  Station,Train,Entry,55163
2024-10,Dapto  Station,Train,Exit,10367
2024-10,Dapto  Station,Train,Entry,11346
2024-10,Denistone  Station,Train,Exit,11995
2024-10,Denistone  Station,Train,Entry,13654
2024-10,Domestic  Station,Train,Exit,215869
2024-10,Domestic  Station,Train,Entry,243317
2024-10,Doonside  Station,Train,Exit,60967
2024-10,Doonside  Station,Train,Entry,67302
2024-10,Dora Creek  Station,Train,Exit,855
2024-10,Dora Creek  Station,Train,Entry,935
2024-10,Douglas Park  Station,Train,Exit,462
2024-10,Douglas Park  Station,Train,Entry,445
2024-10,Dundas  Station,Train,Exit,2525
2024-10,Dundas  Station,Train,Entry,2624
2024-10,Dungog  Station,Train,Exit,422
2024-10,Dungog  Station,Train,Entry,504
2024-10,East Hills  Station,Train,Exit,18309
2024-10,East Hills  Station,Train,Entry,19899
2024-10,East Maitland  Station,Train,Exit,529
2024-10,East Maitland  Station,Train,Entry,569
2024-10,East Richmond  Station,Train,Exit,6096
2024-10,East Richmond  Station,Train,Entry,4451
2024-10,Eastwood  Station,Train,Exit,184043
2024-10,Eastwood  Station,Train,Entry,180925
2024-10,Edgecliff  Station,Train,Exit,195584
2024-10,Edgecliff  Station,Train,Entry,200669
2024-10,Edmondson Park  Station,Train,Exit,98703
2024-10,Edmondson Park  Station,Train,Entry,102354
2024-10,Emu Plains  Station,Train,Exit,23972
2024-10,Emu Plains  Station,Train,Entry,25461
2024-10,Engadine  Station,Train,Exit,26929
2024-10,Engadine  Station,Train,Entry,28374
2024-10,Epping  Station,Shared,Exit,359992
2024-10,Epping  Station,Shared,Entry,366324
2024-10,Erskineville  Station,Train,Exit,52548
2024-10,Erskineville  Station,Train,Entry,58265
2024-10,Exeter  Station,Train,Exit,55
2024-10,Exeter  Station,Train,Entry,97
2024-10,Fairfield  Station,Train,Exit,139977
2024-10,Fairfield  Station,Train,Entry,144158
2024-10,Fairy Meadow  Station,Train,Exit,2470
2024-10,Fairy Meadow  Station,Train,Entry,2719
2024-10,Fassifern  Station,Train,Exit,9371
2024-10,Fassifern  Station,Train,Entry,10128
2024-10,Faulconbridge  Station,Train,Exit,2024
2024-10,Faulconbridge  Station,Train,Entry,2080
2024-10,Flemington  Station,Train,Exit,115776
2024-10,Flemington  Station,Train,Entry,121847
2024-10,Gadigal  Station,Metro,Exit,434521
2024-10,Gadigal  Station,Metro,Entry,420329
2024-10,Gerringong  Station,Train,Exit,1172
2024-10,Gerringong  Station,Train,Entry,1110
2024-10,Glenbrook  Station,Train,Exit,8827
2024-10,Glenbrook  Station,Train,Entry,9706
2024-10,Glenfield  Station,Train,Exit,118871
2024-10,Glenfield  Station,Train,Entry,126804
2024-10,Gordon  Station,Train,Exit,152036
2024-10,Gordon  Station,Train,Entry,154219
2024-10,Gosford  Station,Train,Exit,103308
2024-10,Gosford  Station,Train,Entry,104576
2024-10,Goulburn  Station,Train,Exit,795
2024-10,Goulburn  Station,Train,Entry,1052
2024-10,Granville  Station,Train,Exit,165894
2024-10,Granville  Station,Train,Entry,176217
2024-10,Green Square  Station,Train,Exit,249915
2024-10,Green Square  Station,Train,Entry,255374
2024-10,Greta  Station,Train,Exit,Less than 50
2024-10,Greta  Station,Train,Entry,Less than 50
2024-10,Guildford  Station,Train,Exit,66406
2024-10,Guildford  Station,Train,Entry,72994
2024-10,Gymea  Station,Train,Exit,41840
2024-10,Gymea  Station,Train,Entry,45153
2024-10,Hamilton  Station,Train,Exit,16830
2024-10,Hamilton  Station,Train,Entry,16573
2024-10,Harris Park  Station,Train,Exit,72187
2024-10,Harris Park  Station,Train,Entry,70084
2024-10,Hawkesbury River  Station,Train,Exit,7281
2024-10,Hawkesbury River  Station,Train,Entry,7414
2024-10,Hazelbrook  Station,Train,Exit,5645
2024-10,Hazelbrook  Station,Train,Entry,6053
2024-10,Heathcote  Station,Train,Exit,11995
2024-10,Heathcote  Station,Train,Entry,12202
2024-10,Helensburgh  Station,Train,Exit,9020
2024-10,Helensburgh  Station,Train,Entry,9743
2024-10,Hexham  Station,Train,Exit,229
2024-10,Hexham  Station,Train,Entry,228
2024-10,High Street  Station,Train,Exit,424
2024-10,High Street  Station,Train,Entry,387
2024-10,Hilldale  Station,Train,Exit,Less than 50
2024-10,Hilldale  Station,Train,Entry,Less than 50
2024-10,Hills Showground  Station,Metro,Exit,95444
2024-10,Hills Showground  Station,Metro,Entry,99544
2024-10,Holsworthy  Station,Train,Exit,66552
2024-10,Holsworthy  Station,Train,Entry,69585
2024-10,Homebush  Station,Train,Exit,88345
2024-10,Homebush  Station,Train,Entry,92926
2024-10,Hornsby  Station,Train,Exit,285959
2024-10,Hornsby  Station,Train,Entry,280301
2024-10,Hurstville  Station,Train,Exit,491649
2024-10,Hurstville  Station,Train,Entry,486000
2024-10,Ingleburn  Station,Train,Exit,72119
2024-10,Ingleburn  Station,Train,Entry,72544
2024-10,International  Station,Train,Exit,134108
2024-10,International  Station,Train,Entry,147457
2024-10,Jannali  Station,Train,Exit,52793
2024-10,Jannali  Station,Train,Entry,55857
2024-10,Katoomba  Station,Train,Exit,33371
2024-10,Katoomba  Station,Train,Entry,32620
2024-10,Kellyville  Station,Metro,Exit,99343
2024-10,Kellyville  Station,Metro,Entry,101124
2024-10,Kembla Grange  Station,Train,Exit,223
2024-10,Kembla Grange  Station,Train,Entry,180
2024-10,Kiama  Station,Train,Exit,14184
2024-10,Kiama  Station,Train,Entry,13981
2024-10,Killara  Station,Train,Exit,44236
2024-10,Killara  Station,Train,Entry,46104
2024-10,Kings Cross  Station,Train,Exit,365295
2024-10,Kings Cross  Station,Train,Entry,349896
2024-10,Kingsgrove  Station,Train,Exit,51942
2024-10,Kingsgrove  Station,Train,Entry,54936
2024-10,Kingswood  Station,Train,Exit,49782
2024-10,Kingswood  Station,Train,Entry,53137
2024-10,Kirrawee  Station,Train,Exit,39993
2024-10,Kirrawee  Station,Train,Entry,41306
2024-10,Kogarah  Station,Train,Exit,254512
2024-10,Kogarah  Station,Train,Entry,263412
2024-10,Koolewong  Station,Train,Exit,1233
2024-10,Koolewong  Station,Train,Entry,1635
2024-10,Kotara  Station,Train,Exit,1721
2024-10,Kotara  Station,Train,Entry,1410
2024-10,Lapstone  Station,Train,Exit,1653
2024-10,Lapstone  Station,Train,Entry,1833
2024-10,Lawson  Station,Train,Exit,3324
2024-10,Lawson  Station,Train,Entry,3391
2024-10,Leightonfield  Station,Train,Exit,5260
2024-10,Leightonfield  Station,Train,Entry,5386
2024-10,Leppington  Station,Train,Exit,95984
2024-10,Leppington  Station,Train,Entry,99574
2024-10,Leumeah  Station,Train,Exit,56687
2024-10,Leumeah  Station,Train,Entry,59590
2024-10,Leura  Station,Train,Exit,10641
2024-10,Leura  Station,Train,Entry,12788
2024-10,Lewisham  Station,Train,Exit,61026
2024-10,Lewisham  Station,Train,Entry,64574
2024-10,Lidcombe  Station,Train,Exit,422108
2024-10,Lidcombe  Station,Train,Entry,418966
2024-10,Linden  Station,Train,Exit,269
2024-10,Linden  Station,Train,Entry,341
2024-10,Lindfield  Station,Train,Exit,89303
2024-10,Lindfield  Station,Train,Entry,90720
2024-10,Lisarow  Station,Train,Exit,2872
2024-10,Lisarow  Station,Train,Entry,3180
2024-10,Lithgow  Station,Train,Exit,6128
2024-10,Lithgow  Station,Train,Entry,6595
2024-10,Liverpool  Station,Train,Exit,209734
2024-10,Liverpool  Station,Train,Entry,211494
2024-10,Lochinvar  Station,Train,Exit,Less than 50
2024-10,Lochinvar  Station,Train,Entry,Less than 50
2024-10,Loftus  Station,Train,Exit,8251
2024-10,Loftus  Station,Train,Entry,8881
2024-10,Lysaghts  Station,Train,Exit,Less than 50
2024-10,Lysaghts  Station,Train,Entry,Less than 50
2024-10,Macarthur  Station,Train,Exit,71681
2024-10,Macarthur  Station,Train,Entry,72374
2024-10,Macdonaldtown  Station,Train,Exit,25142
2024-10,Macdonaldtown  Station,Train,Entry,25395
2024-10,Macquarie Fields  Station,Train,Exit,21781
2024-10,Macquarie Fields  Station,Train,Entry,22452
2024-10,Macquarie Park  Station,Metro,Exit,111690
2024-10,Macquarie Park  Station,Metro,Entry,112506
2024-10,Macquarie University  Station,Metro,Exit,401580
2024-10,Macquarie University  Station,Metro,Entry,395612
2024-10,Maitland  Station,Train,Exit,9243
2024-10,Maitland  Station,Train,Entry,9807
2024-10,Marayong  Station,Train,Exit,22677
2024-10,Marayong  Station,Train,Entry,24887
2024-10,Martin Place  Station,Shared,Exit,893860
2024-10,Martin Place  Station,Shared,Entry,808840
2024-10,Martins Creek  Station,Train,Exit,Less than 50
2024-10,Martins Creek  Station,Train,Entry,Less than 50
2024-10,Marulan  Station,Train,Exit,51
2024-10,Marulan  Station,Train,Entry,64
2024-10,Mascot  Station,Train,Exit,415364
2024-10,Mascot  Station,Train,Entry,411216
2024-10,Meadowbank  Station,Train,Exit,109430
2024-10,Meadowbank  Station,Train,Entry,121357
2024-10,Medlow Bath  Station,Train,Exit,863
2024-10,Medlow Bath  Station,Train,Entry,982
2024-10,Menangle Park  Station,Train,Exit,393
2024-10,Menangle Park  Station,Train,Entry,399
2024-10,Menangle  Station,Train,Exit,299
2024-10,Menangle  Station,Train,Entry,319
2024-10,Merrylands  Station,Train,Exit,149813
2024-10,Merrylands  Station,Train,Entry,153297
2024-10,Metford  Station,Train,Exit,1748
2024-10,Metford  Station,Train,Entry,1869
2024-10,Milsons Point  Station,Train,Exit,196825
2024-10,Milsons Point  Station,Train,Entry,185197
2024-10,Mindaribba  Station,Train,Exit,Less than 50
2024-10,Mindaribba  Station,Train,Entry,Less than 50
2024-10,Minnamurra  Station,Train,Exit,2215
2024-10,Minnamurra  Station,Train,Entry,2425
2024-10,Minto  Station,Train,Exit,66341
2024-10,Minto  Station,Train,Entry,68769
2024-10,Miranda  Station,Train,Exit,89483
2024-10,Miranda  Station,Train,Entry,86257
2024-10,Mittagong  Station,Train,Exit,3723
2024-10,Mittagong  Station,Train,Entry,4052
2024-10,Morisset  Station,Train,Exit,16069
2024-10,Morisset  Station,Train,Entry,17393
2024-10,Mortdale  Station,Train,Exit,72887
2024-10,Mortdale  Station,Train,Entry,79665
2024-10,Moss Vale  Station,Train,Exit,3749
2024-10,Moss Vale  Station,Train,Entry,4036
2024-10,Mount Colah  Station,Train,Exit,12690
2024-10,Mount Colah  Station,Train,Entry,14074
2024-10,Mount Druitt  Station,Train,Exit,153493
2024-10,Mount Druitt  Station,Train,Entry,154091
2024-10,Mount Kuring-gai  Station,Train,Exit,5352
2024-10,Mount Kuring-gai  Station,Train,Entry,5389
2024-10,Mount Victoria  Station,Train,Exit,2612
2024-10,Mount Victoria  Station,Train,Entry,2656
2024-10,Mulgrave  Station,Train,Exit,6073
2024-10,Mulgrave  Station,Train,Entry,6425
2024-10,Museum  Station,Train,Exit,266347
2024-10,Museum  Station,Train,Entry,237744
2024-10,Muswellbrook  Station,Train,Exit,503
2024-10,Muswellbrook  Station,Train,Entry,598
2024-10,Narara  Station,Train,Exit,4575
2024-10,Narara  Station,Train,Entry,5187
2024-10,Narwee  Station,Train,Exit,40386
2024-10,Narwee  Station,Train,Entry,44289
2024-10,Newcastle Interchange Station,Train,Exit,46550
2024-10,Newcastle Interchange Station,Train,Entry,45905
2024-10,Newtown  Station,Train,Exit,271554
2024-10,Newtown  Station,Train,Entry,237854
2024-10,Niagara Park  Station,Train,Exit,2347
2024-10,Niagara Park  Station,Train,Entry,2404
2024-10,Normanhurst  Station,Train,Exit,21558
2024-10,Normanhurst  Station,Train,Entry,26482
2024-10,North Ryde  Station,Metro,Exit,84893
2024-10,North Ryde  Station,Metro,Entry,85487
2024-10,North Strathfield  Station,Train,Exit,62619
2024-10,North Strathfield  Station,Train,Entry,63607
2024-10,North Sydney  Station,Train,Exit,305764
2024-10,North Sydney  Station,Train,Entry,286769
2024-10,North Wollongong  Station,Train,Exit,31418
2024-10,North Wollongong  Station,Train,Entry,31948
2024-10,Norwest  Station,Metro,Exit,71958
2024-10,Norwest  Station,Metro,Entry,73012
2024-10,Oak Flats  Station,Train,Exit,8326
2024-10,Oak Flats  Station,Train,Entry,9036
2024-10,Oatley  Station,Train,Exit,41369
2024-10,Oatley  Station,Train,Entry,43856
2024-10,Olympic Park  Station,Train,Exit,129705
2024-10,Olympic Park  Station,Train,Entry,95138
2024-10,Otford  Station,Train,Exit,1035
2024-10,Otford  Station,Train,Entry,995
2024-10,Ourimbah  Station,Train,Exit,4020
2024-10,Ourimbah  Station,Train,Entry,4159
2024-10,Padstow  Station,Train,Exit,60651
2024-10,Padstow  Station,Train,Entry,64860
2024-10,Panania  Station,Train,Exit,36419
2024-10,Panania  Station,Train,Entry,38859
2024-10,Parramatta  Station,Train,Exit,1037187
2024-10,Parramatta  Station,Train,Entry,1011136
2024-10,Paterson  Station,Train,Exit,140
2024-10,Paterson  Station,Train,Entry,178
2024-10,Pendle Hill  Station,Train,Exit,70216
2024-10,Pendle Hill  Station,Train,Entry,74550
2024-10,Pennant Hills  Station,Train,Exit,38869
2024-10,Pennant Hills  Station,Train,Entry,39800
2024-10,Penrith  Station,Train,Exit,181898
2024-10,Penrith  Station,Train,Entry,177215
2024-10,Penrose  Station,Train,Exit,Less than 50
2024-10,Penrose  Station,Train,Entry,Less than 50
2024-10,Penshurst  Station,Train,Exit,63648
2024-10,Penshurst  Station,Train,Entry,72835
2024-10,Petersham  Station,Train,Exit,77759
2024-10,Petersham  Station,Train,Entry,79177
2024-10,Picton  Station,Train,Exit,2893
2024-10,Picton  Station,Train,Entry,3272
2024-10,Point Clare  Station,Train,Exit,3112
2024-10,Point Clare  Station,Train,Entry,3634
2024-10,Port Kembla North  Station,Train,Exit,317
2024-10,Port Kembla North  Station,Train,Entry,340
2024-10,Port Kembla  Station,Train,Exit,1464
2024-10,Port Kembla  Station,Train,Entry,1792
2024-10,Pymble  Station,Train,Exit,46502
2024-10,Pymble  Station,Train,Entry,49698
2024-10,Quakers Hill  Station,Train,Exit,55142
2024-10,Quakers Hill  Station,Train,Entry,60304
2024-10,Redfern  Station,Train,Exit,681198
2024-10,Redfern  Station,Train,Entry,632861
2024-10,Regents Park  Station,Train,Exit,37097
2024-10,Regents Park  Station,Train,Entry,39188
2024-10,Revesby  Station,Train,Exit,125076
2024-10,Revesby  Station,Train,Entry,126578
2024-10,Rhodes  Station,Train,Exit,235296
2024-10,Rhodes  Station,Train,Entry,236915
2024-10,Richmond  Station,Train,Exit,15600
2024-10,Richmond  Station,Train,Entry,17838
2024-10,Riverstone  Station,Train,Exit,27361
2024-10,Riverstone  Station,Train,Entry,29413
2024-10,Riverwood  Station,Train,Exit,78631
2024-10,Riverwood  Station,Train,Entry,83008
2024-10,Rockdale  Station,Train,Exit,242052
2024-10,Rockdale  Station,Train,Entry,249787
2024-10,Rooty Hill  Station,Train,Exit,84129
2024-10,Rooty Hill  Station,Train,Entry,88190
2024-10,Roseville  Station,Train,Exit,63176
2024-10,Roseville  Station,Train,Entry,66211
2024-10,Rouse Hill  Station,Metro,Exit,122710
2024-10,Rouse Hill  Station,Metro,Entry,117251
2024-10,Rydal  Station,Train,Exit,Less than 50
2024-10,Rydal  Station,Train,Entry,Less than 50
2024-10,Sandgate  Station,Train,Exit,332
2024-10,Sandgate  Station,Train,Entry,444
2024-10,Scarborough  Station,Train,Exit,541
2024-10,Scarborough  Station,Train,Entry,495
2024-10,Schofields  Station,Train,Exit,98632
2024-10,Schofields  Station,Train,Entry,104500
2024-10,Scone  Station,Train,Exit,375
2024-10,Scone  Station,Train,Entry,445
2024-10,Sefton  Station,Train,Exit,18711
2024-10,Sefton  Station,Train,Entry,20107
2024-10,Seven Hills  Station,Train,Exit,137877
2024-10,Seven Hills  Station,Train,Entry,144467
2024-10,Shellharbour Junction  Station,Train,Exit,3898
2024-10,Shellharbour Junction  Station,Train,Entry,4388
2024-10,Singleton  Station,Train,Exit,712
2024-10,Singleton  Station,Train,Entry,743
2024-10,Springwood  Station,Train,Exit,20251
2024-10,Springwood  Station,Train,Entry,20833
2024-10,St James  Station,Train,Exit,188231
2024-10,St James  Station,Train,Entry,170072
2024-10,St Leonards  Station,Train,Exit,261990
2024-10,St Leonards  Station,Train,Entry,261182
2024-10,St Marys  Station,Train,Exit,103327
2024-10,St Marys  Station,Train,Entry,106393
2024-10,St Peters  Station,Train,Exit,62095
2024-10,St Peters  Station,Train,Entry,69706
2024-10,Stanmore  Station,Train,Exit,66358
2024-10,Stanmore  Station,Train,Entry,71249
2024-10,Stanwell Park  Station,Train,Exit,1351
2024-10,Stanwell Park  Station,Train,Entry,1357
2024-10,Strathfield  Station,Train,Exit,654478
2024-10,Strathfield  Station,Train,Entry,674028
2024-10,Summer Hill  Station,Train,Exit,75422
2024-10,Summer Hill  Station,Train,Entry,80673
2024-10,Sutherland  Station,Train,Exit,155263
2024-10,Sutherland  Station,Train,Entry,157248
2024-10,Sydenham  Station,Shared,Exit,486707
2024-10,Sydenham  Station,Shared,Entry,505978
2024-10,Tahmoor  Station,Train,Exit,3167
2024-10,Tahmoor  Station,Train,Entry,3459
2024-10,Tallawong  Station,Metro,Exit,156817
2024-10,Tallawong  Station,Metro,Entry,166474
2024-10,Tallong  Station,Train,Exit,Less than 50
2024-10,Tallong  Station,Train,Entry,Less than 50
2024-10,Tarana  Station,Train,Exit,99
2024-10,Tarana  Station,Train,Entry,123
2024-10,Tarro  Station,Train,Exit,133
2024-10,Tarro  Station,Train,Entry,149
2024-10,Tascott  Station,Train,Exit,2054
2024-10,Tascott  Station,Train,Entry,2572
2024-10,Telarah  Station,Train,Exit,2454
2024-10,Telarah  Station,Train,Entry,2931
2024-10,Telopea  Station,Train,Exit,2531
2024-10,Telopea  Station,Train,Entry,2849
2024-10,Tempe  Station,Train,Exit,32709
2024-10,Tempe  Station,Train,Entry,34456
2024-10,Teralba  Station,Train,Exit,1101
2024-10,Teralba  Station,Train,Entry,1232
2024-10,Thirroul  Station,Train,Exit,22059
2024-10,Thirroul  Station,Train,Entry,22640
2024-10,Thornleigh  Station,Train,Exit,37466
2024-10,Thornleigh  Station,Train,Entry,38614
2024-10,Thornton  Station,Train,Exit,5587
2024-10,Thornton  Station,Train,Entry,6189
2024-10,Toongabbie  Station,Train,Exit,66126
2024-10,Toongabbie  Station,Train,Entry,69536
2024-10,Town Hall  Station,Train,Exit,1827568
2024-10,Town Hall  Station,Train,Entry,1929174
2024-10,Towradgi  Station,Train,Exit,1441
2024-10,Towradgi  Station,Train,Entry,1676
2024-10,Tuggerah  Station,Train,Exit,25665
2024-10,Tuggerah  Station,Train,Entry,26587
2024-10,Turramurra  Station,Train,Exit,81966
2024-10,Turramurra  Station,Train,Entry,84898
2024-10,Turrella  Station,Train,Exit,24921
2024-10,Turrella  Station,Train,Entry,27107
2024-10,Unanderra  Station,Train,Exit,8509
2024-10,Unanderra  Station,Train,Entry,9455
2024-10,Valley Heights  Station,Train,Exit,1102
2024-10,Valley Heights  Station,Train,Entry,1297
2024-10,Victoria Cross  Station,Metro,Exit,350492
2024-10,Victoria Cross  Station,Metro,Entry,358945
2024-10,Victoria Street  Station,Train,Exit,6785
2024-10,Victoria Street  Station,Train,Entry,7128
2024-10,Villawood  Station,Train,Exit,11677
2024-10,Villawood  Station,Train,Entry,12032
2024-10,Vineyard  Station,Train,Exit,3683
2024-10,Vineyard  Station,Train,Entry,3904
2024-10,Wahroonga  Station,Train,Exit,41161
2024-10,Wahroonga  Station,Train,Entry,42621
2024-10,Waitara  Station,Train,Exit,64263
2024-10,Waitara  Station,Train,Entry,66972
2024-10,Wallarobba  Station,Train,Exit,Less than 50
2024-10,Wallarobba  Station,Train,Entry,Less than 50
2024-10,Warabrook  Station,Train,Exit,4729
2024-10,Warabrook  Station,Train,Entry,4786
2024-10,Waratah  Station,Train,Exit,3926
2024-10,Waratah  Station,Train,Entry,4166
2024-10,Warnervale  Station,Train,Exit,5125
2024-10,Warnervale  Station,Train,Entry,5803
2024-10,Warrawee  Station,Train,Exit,18372
2024-10,Warrawee  Station,Train,Entry,19976
2024-10,Warrimoo  Station,Train,Exit,2437
2024-10,Warrimoo  Station,Train,Entry,2505
2024-10,Warwick Farm  Station,Train,Exit,54105
2024-10,Warwick Farm  Station,Train,Entry,59665
2024-10,Waterfall  Station,Train,Exit,9707
2024-10,Waterfall  Station,Train,Entry,9461
2024-10,Waterloo  Station,Metro,Exit,131058
2024-10,Waterloo  Station,Metro,Entry,135655
2024-10,Waverton  Station,Train,Exit,40951
2024-10,Waverton  Station,Train,Entry,46098
2024-10,Wentworth Falls  Station,Train,Exit,8245
2024-10,Wentworth Falls  Station,Train,Entry,8259
2024-10,Wentworthville  Station,Train,Exit,91060
2024-10,Wentworthville  Station,Train,Entry,95101
2024-10,Werrington  Station,Train,Exit,27120
2024-10,Werrington  Station,Train,Entry,30236
2024-10,West Ryde  Station,Train,Exit,114438
2024-10,West Ryde  Station,Train,Entry,114748
2024-10,Westmead  Station,Train,Exit,153524
2024-10,Westmead  Station,Train,Entry,164365
2024-10,Windsor  Station,Train,Exit,16755
2024-10,Windsor  Station,Train,Entry,17063
2024-10,Wingello  Station,Train,Exit,Less than 50
2024-10,Wingello  Station,Train,Entry,52
2024-10,Wirragulla  Station,Train,Exit,Less than 50
2024-10,Wirragulla  Station,Train,Entry,Less than 50
2024-10,Wolli Creek  Station,Train,Exit,228605
2024-10,Wolli Creek  Station,Train,Entry,229773
2024-10,Wollongong  Station,Train,Exit,47176
2024-10,Wollongong  Station,Train,Entry,47175
2024-10,Wollstonecraft  Station,Train,Exit,45257
2024-10,Wollstonecraft  Station,Train,Entry,49222
2024-10,Wombarra  Station,Train,Exit,579
2024-10,Wombarra  Station,Train,Entry,722
2024-10,Wondabyne  Station,Train,Exit,486
2024-10,Wondabyne  Station,Train,Entry,428
2024-10,Woodford  Station,Train,Exit,1810
2024-10,Woodford  Station,Train,Entry,1811
2024-10,Woolooware  Station,Train,Exit,26442
2024-10,Woolooware  Station,Train,Entry,27882
2024-10,Woonona  Station,Train,Exit,2293
2024-10,Woonona  Station,Train,Entry,2664
2024-10,Woy Woy  Station,Train,Exit,82943
2024-10,Woy Woy  Station,Train,Entry,82369
2024-10,Wyee  Station,Train,Exit,5550
2024-10,Wyee  Station,Train,Entry,6239
2024-10,Wynyard  Station,Train,Exit,1262853
2024-10,Wynyard  Station,Train,Entry,1198959
2024-10,Wyong  Station,Train,Exit,28380
2024-10,Wyong  Station,Train,Entry,30245
2024-10,Yagoona  Station,Train,Exit,8912
2024-10,Yagoona  Station,Train,Entry,9665
2024-10,Yennora  Station,Train,Exit,27980
2024-10,Yennora  Station,Train,Entry,27642
2024-10,Yerrinbool  Station,Train,Exit,417
2024-10,Yerrinbool  Station,Train,Entry,448
2024-10,Zig Zag  Station,Train,Exit,Less than 50
2024-10,Zig Zag  Station,Train,Entry,Less than 50
2024-11,Aberdeen  Station,Train,Exit,Less than 50
2024-11,Aberdeen  Station,Train,Entry,Less than 50
2024-11,Adamstown  Station,Train,Exit,2255
2024-11,Adamstown  Station,Train,Entry,2215
2024-11,Albion Park  Station,Train,Exit,5585
2024-11,Albion Park  Station,Train,Entry,6419
2024-11,Allawah  Station,Train,Exit,51779
2024-11,Allawah  Station,Train,Entry,57602
2024-11,Arncliffe  Station,Train,Exit,49150
2024-11,Arncliffe  Station,Train,Entry,54665
2024-11,Artarmon  Station,Train,Exit,90344
2024-11,Artarmon  Station,Train,Entry,96147
2024-11,Ashfield  Station,Train,Exit,247348
2024-11,Ashfield  Station,Train,Entry,249571
2024-11,Asquith  Station,Train,Exit,24564
2024-11,Asquith  Station,Train,Entry,27577
2024-11,Auburn  Station,Train,Exit,339031
2024-11,Auburn  Station,Train,Entry,354347
2024-11,Austinmer  Station,Train,Exit,1764
2024-11,Austinmer  Station,Train,Entry,2233
2024-11,Awaba  Station,Train,Exit,320
2024-11,Awaba  Station,Train,Entry,392
2024-11,Banksia  Station,Train,Exit,30321
2024-11,Banksia  Station,Train,Entry,33406
2024-11,Bankstown  Station,Train,Exit,97622
2024-11,Bankstown  Station,Train,Entry,93022
2024-11,Barangaroo  Station,Metro,Exit,190447
2024-11,Barangaroo  Station,Metro,Entry,171879
2024-11,Bardwell Park  Station,Train,Exit,22880
2024-11,Bardwell Park  Station,Train,Entry,24840
2024-11,Bargo  Station,Train,Exit,849
2024-11,Bargo  Station,Train,Entry,1015
2024-11,Bathurst  Station,Train,Exit,1673
2024-11,Bathurst  Station,Train,Entry,2511
2024-11,Beecroft  Station,Train,Exit,29037
2024-11,Beecroft  Station,Train,Entry,30022
2024-11,Bell  Station,Train,Exit,65
2024-11,Bell  Station,Train,Entry,54
2024-11,Bella Vista  Station,Metro,Exit,71603
2024-11,Bella Vista  Station,Metro,Entry,73608
2024-11,Bellambi  Station,Train,Exit,2024
2024-11,Bellambi  Station,Train,Entry,2388
2024-11,Berala  Station,Train,Exit,41722
2024-11,Berala  Station,Train,Entry,43437
2024-11,Beresfield  Station,Train,Exit,2991
2024-11,Beresfield  Station,Train,Entry,3358
2024-11,Berowra  Station,Train,Exit,21534
2024-11,Berowra  Station,Train,Entry,23623
2024-11,Berry  Station,Train,Exit,1459
2024-11,Berry  Station,Train,Entry,1543
2024-11,Beverly Hills  Station,Train,Exit,39076
2024-11,Beverly Hills  Station,Train,Entry,44214
2024-11,Bexley North  Station,Train,Exit,26467
2024-11,Bexley North  Station,Train,Entry,29282
2024-11,Birrong  Station,Train,Exit,10964
2024-11,Birrong  Station,Train,Entry,11095
2024-11,Blackheath  Station,Train,Exit,4521
2024-11,Blackheath  Station,Train,Entry,4751
2024-11,Blacktown  Station,Train,Exit,374985
2024-11,Blacktown  Station,Train,Entry,364881
2024-11,Blaxland  Station,Train,Exit,8706
2024-11,Blaxland  Station,Train,Entry,9776
2024-11,Bomaderry  Station,Train,Exit,5929
2024-11,Bomaderry  Station,Train,Entry,7033
2024-11,Bombo  Station,Train,Exit,452
2024-11,Bombo  Station,Train,Entry,692
2024-11,Bondi Junction  Station,Train,Exit,553829
2024-11,Bondi Junction  Station,Train,Entry,558806
2024-11,Booragul  Station,Train,Exit,589
2024-11,Booragul  Station,Train,Entry,602
2024-11,Bowral  Station,Train,Exit,4266
2024-11,Bowral  Station,Train,Entry,4427
2024-11,Branxton  Station,Train,Exit,125
2024-11,Branxton  Station,Train,Entry,151
2024-11,Broadmeadow  Station,Train,Exit,17946
2024-11,Broadmeadow  Station,Train,Entry,20229
2024-11,Bullaburra  Station,Train,Exit,960
2024-11,Bullaburra  Station,Train,Entry,1064
2024-11,Bulli  Station,Train,Exit,2975
2024-11,Bulli  Station,Train,Entry,3278
2024-11,Bundanoon  Station,Train,Exit,227
2024-11,Bundanoon  Station,Train,Entry,314
2024-11,Burradoo  Station,Train,Exit,229
2024-11,Burradoo  Station,Train,Entry,214
2024-11,Burwood  Station,Train,Exit,495764
2024-11,Burwood  Station,Train,Entry,483281
2024-11,Cabramatta  Station,Train,Exit,166679
2024-11,Cabramatta  Station,Train,Entry,169369
2024-11,Camellia  Station,Train,Exit,2773
2024-11,Camellia  Station,Train,Entry,4096
2024-11,Campbelltown  Station,Train,Exit,121025
2024-11,Campbelltown  Station,Train,Entry,121468
2024-11,Canley Vale  Station,Train,Exit,48332
2024-11,Canley Vale  Station,Train,Entry,53195
2024-11,Cardiff  Station,Train,Exit,17657
2024-11,Cardiff  Station,Train,Entry,19494
2024-11,Caringbah  Station,Train,Exit,51910
2024-11,Caringbah  Station,Train,Entry,56111
2024-11,Carlingford  Station,Train,Exit,2244
2024-11,Carlingford  Station,Train,Entry,2540
2024-11,Carlton  Station,Train,Exit,55653
2024-11,Carlton  Station,Train,Entry,60087
2024-11,Carramar  Station,Train,Exit,10967
2024-11,Carramar  Station,Train,Entry,12463
2024-11,Castle Hill  Station,Metro,Exit,180683
2024-11,Castle Hill  Station,Metro,Entry,170790
2024-11,Casula  Station,Train,Exit,7807
2024-11,Casula  Station,Train,Entry,8518
2024-11,Central  Station,Shared,Exit,1955910
2024-11,Central  Station,Shared,Entry,1891261
2024-11,Chatswood  Station,Shared,Exit,778237
2024-11,Chatswood  Station,Shared,Entry,752264
2024-11,Cheltenham  Station,Train,Exit,17048
2024-11,Cheltenham  Station,Train,Entry,20485
2024-11,Cherrybrook  Station,Metro,Exit,103714
2024-11,Cherrybrook  Station,Metro,Entry,109689
2024-11,Chester Hill  Station,Train,Exit,22594
2024-11,Chester Hill  Station,Train,Entry,23830
2024-11,Circular Quay  Station,Train,Exit,603959
2024-11,Circular Quay  Station,Train,Entry,608840
2024-11,Clarendon  Station,Train,Exit,1328
2024-11,Clarendon  Station,Train,Entry,1316
2024-11,Clyde  Station,Train,Exit,21110
2024-11,Clyde  Station,Train,Entry,22129
2024-11,Coalcliff  Station,Train,Exit,455
2024-11,Coalcliff  Station,Train,Entry,434
2024-11,Cockle Creek  Station,Train,Exit,1112
2024-11,Cockle Creek  Station,Train,Entry,1117
2024-11,Coledale  Station,Train,Exit,743
2024-11,Coledale  Station,Train,Entry,867
2024-11,Como  Station,Train,Exit,11691
2024-11,Como  Station,Train,Entry,13981
2024-11,Concord West  Station,Train,Exit,40647
2024-11,Concord West  Station,Train,Entry,43425
2024-11,Coniston  Station,Train,Exit,4886
2024-11,Coniston  Station,Train,Entry,5239
2024-11,Corrimal  Station,Train,Exit,2616
2024-11,Corrimal  Station,Train,Entry,3025
2024-11,Cowan  Station,Train,Exit,978
2024-11,Cowan  Station,Train,Entry,1006
2024-11,Cringila  Station,Train,Exit,295
2024-11,Cringila  Station,Train,Entry,234
2024-11,Cronulla  Station,Train,Exit,61925
2024-11,Cronulla  Station,Train,Entry,61160
2024-11,Crows Nest  Station,Metro,Exit,235045
2024-11,Crows Nest  Station,Metro,Entry,232226
2024-11,Croydon  Station,Train,Exit,46332
2024-11,Croydon  Station,Train,Entry,51689
2024-11,Dapto  Station,Train,Exit,9782
2024-11,Dapto  Station,Train,Entry,10553
2024-11,Denistone  Station,Train,Exit,10246
2024-11,Denistone  Station,Train,Entry,11562
2024-11,Domestic  Station,Train,Exit,195281
2024-11,Domestic  Station,Train,Entry,219482
2024-11,Doonside  Station,Train,Exit,55713
2024-11,Doonside  Station,Train,Entry,62199
2024-11,Dora Creek  Station,Train,Exit,815
2024-11,Dora Creek  Station,Train,Entry,789
2024-11,Douglas Park  Station,Train,Exit,418
2024-11,Douglas Park  Station,Train,Entry,404
2024-11,Dundas  Station,Train,Exit,2412
2024-11,Dundas  Station,Train,Entry,2481
2024-11,Dungog  Station,Train,Exit,315
2024-11,Dungog  Station,Train,Entry,403
2024-11,East Hills  Station,Train,Exit,21766
2024-11,East Hills  Station,Train,Entry,21601
2024-11,East Maitland  Station,Train,Exit,468
2024-11,East Maitland  Station,Train,Entry,524
2024-11,East Richmond  Station,Train,Exit,4567
2024-11,East Richmond  Station,Train,Entry,3970
2024-11,Eastwood  Station,Train,Exit,160022
2024-11,Eastwood  Station,Train,Entry,158633
2024-11,Edgecliff  Station,Train,Exit,185572
2024-11,Edgecliff  Station,Train,Entry,191764
2024-11,Edmondson Park  Station,Train,Exit,84445
2024-11,Edmondson Park  Station,Train,Entry,88737
2024-11,Emu Plains  Station,Train,Exit,21662
2024-11,Emu Plains  Station,Train,Entry,23057
2024-11,Engadine  Station,Train,Exit,23928
2024-11,Engadine  Station,Train,Entry,25773
2024-11,Epping  Station,Shared,Exit,346307
2024-11,Epping  Station,Shared,Entry,353299
2024-11,Erskineville  Station,Train,Exit,49590
2024-11,Erskineville  Station,Train,Entry,54372
2024-11,Exeter  Station,Train,Exit,59
2024-11,Exeter  Station,Train,Entry,94
2024-11,Fairfield  Station,Train,Exit,135661
2024-11,Fairfield  Station,Train,Entry,139128
2024-11,Fairy Meadow  Station,Train,Exit,2350
2024-11,Fairy Meadow  Station,Train,Entry,2661
2024-11,Fassifern  Station,Train,Exit,7666
2024-11,Fassifern  Station,Train,Entry,8511
2024-11,Faulconbridge  Station,Train,Exit,1637
2024-11,Faulconbridge  Station,Train,Entry,1684
2024-11,Flemington  Station,Train,Exit,115202
2024-11,Flemington  Station,Train,Entry,120314
2024-11,Gadigal  Station,Metro,Exit,411068
2024-11,Gadigal  Station,Metro,Entry,390348
2024-11,Gerringong  Station,Train,Exit,982
2024-11,Gerringong  Station,Train,Entry,936
2024-11,Glenbrook  Station,Train,Exit,7631
2024-11,Glenbrook  Station,Train,Entry,8317
2024-11,Glenfield  Station,Train,Exit,121102
2024-11,Glenfield  Station,Train,Entry,128838
2024-11,Gordon  Station,Train,Exit,139350
2024-11,Gordon  Station,Train,Entry,143673
2024-11,Gosford  Station,Train,Exit,90324
2024-11,Gosford  Station,Train,Entry,90611
2024-11,Goulburn  Station,Train,Exit,661
2024-11,Goulburn  Station,Train,Entry,941
2024-11,Granville  Station,Train,Exit,154229
2024-11,Granville  Station,Train,Entry,164740
2024-11,Green Square  Station,Train,Exit,216948
2024-11,Green Square  Station,Train,Entry,226536
2024-11,Greta  Station,Train,Exit,Less than 50
2024-11,Greta  Station,Train,Entry,Less than 50
2024-11,Guildford  Station,Train,Exit,60002
2024-11,Guildford  Station,Train,Entry,67348
2024-11,Gymea  Station,Train,Exit,37940
2024-11,Gymea  Station,Train,Entry,41946
2024-11,Hamilton  Station,Train,Exit,14074
2024-11,Hamilton  Station,Train,Entry,14270
2024-11,Harris Park  Station,Train,Exit,63229
2024-11,Harris Park  Station,Train,Entry,62140
2024-11,Hawkesbury River  Station,Train,Exit,5944
2024-11,Hawkesbury River  Station,Train,Entry,5811
2024-11,Hazelbrook  Station,Train,Exit,4866
2024-11,Hazelbrook  Station,Train,Entry,5368
2024-11,Heathcote  Station,Train,Exit,10612
2024-11,Heathcote  Station,Train,Entry,11007
2024-11,Helensburgh  Station,Train,Exit,7948
2024-11,Helensburgh  Station,Train,Entry,8989
2024-11,Hexham  Station,Train,Exit,233
2024-11,Hexham  Station,Train,Entry,265
2024-11,High Street  Station,Train,Exit,337
2024-11,High Street  Station,Train,Entry,282
2024-11,Hilldale  Station,Train,Exit,Less than 50
2024-11,Hilldale  Station,Train,Entry,Less than 50
2024-11,Hills Showground  Station,Metro,Exit,88750
2024-11,Hills Showground  Station,Metro,Entry,92528
2024-11,Holsworthy  Station,Train,Exit,56161
2024-11,Holsworthy  Station,Train,Entry,61427
2024-11,Homebush  Station,Train,Exit,86223
2024-11,Homebush  Station,Train,Entry,90228
2024-11,Hornsby  Station,Train,Exit,279938
2024-11,Hornsby  Station,Train,Entry,274622
2024-11,Hurstville  Station,Train,Exit,455071
2024-11,Hurstville  Station,Train,Entry,448240
2024-11,Ingleburn  Station,Train,Exit,64469
2024-11,Ingleburn  Station,Train,Entry,65130
2024-11,International  Station,Train,Exit,128607
2024-11,International  Station,Train,Entry,133593
2024-11,Jannali  Station,Train,Exit,47787
2024-11,Jannali  Station,Train,Entry,51469
2024-11,Katoomba  Station,Train,Exit,27733
2024-11,Katoomba  Station,Train,Entry,27674
2024-11,Kellyville  Station,Metro,Exit,90200
2024-11,Kellyville  Station,Metro,Entry,92715
2024-11,Kembla Grange  Station,Train,Exit,759
2024-11,Kembla Grange  Station,Train,Entry,571
2024-11,Kiama  Station,Train,Exit,12285
2024-11,Kiama  Station,Train,Entry,12628
2024-11,Killara  Station,Train,Exit,39960
2024-11,Killara  Station,Train,Entry,42295
2024-11,Kings Cross  Station,Train,Exit,349456
2024-11,Kings Cross  Station,Train,Entry,336454
2024-11,Kingsgrove  Station,Train,Exit,46750
2024-11,Kingsgrove  Station,Train,Entry,50055
2024-11,Kingswood  Station,Train,Exit,44795
2024-11,Kingswood  Station,Train,Entry,48708
2024-11,Kirrawee  Station,Train,Exit,36819
2024-11,Kirrawee  Station,Train,Entry,38893
2024-11,Kogarah  Station,Train,Exit,235422
2024-11,Kogarah  Station,Train,Entry,244326
2024-11,Koolewong  Station,Train,Exit,1029
2024-11,Koolewong  Station,Train,Entry,1352
2024-11,Kotara  Station,Train,Exit,1397
2024-11,Kotara  Station,Train,Entry,1106
2024-11,Lapstone  Station,Train,Exit,1447
2024-11,Lapstone  Station,Train,Entry,1612
2024-11,Lawson  Station,Train,Exit,2883
2024-11,Lawson  Station,Train,Entry,3038
2024-11,Leightonfield  Station,Train,Exit,4840
2024-11,Leightonfield  Station,Train,Entry,5646
2024-11,Leppington  Station,Train,Exit,84605
2024-11,Leppington  Station,Train,Entry,89140
2024-11,Leumeah  Station,Train,Exit,47378
2024-11,Leumeah  Station,Train,Entry,50632
2024-11,Leura  Station,Train,Exit,6879
2024-11,Leura  Station,Train,Entry,8725
2024-11,Lewisham  Station,Train,Exit,54278
2024-11,Lewisham  Station,Train,Entry,59546
2024-11,Lidcombe  Station,Train,Exit,318446
2024-11,Lidcombe  Station,Train,Entry,329285
2024-11,Linden  Station,Train,Exit,232
2024-11,Linden  Station,Train,Entry,288
2024-11,Lindfield  Station,Train,Exit,80218
2024-11,Lindfield  Station,Train,Entry,83718
2024-11,Lisarow  Station,Train,Exit,2544
2024-11,Lisarow  Station,Train,Entry,2959
2024-11,Lithgow  Station,Train,Exit,4562
2024-11,Lithgow  Station,Train,Entry,4977
2024-11,Liverpool  Station,Train,Exit,186846
2024-11,Liverpool  Station,Train,Entry,188999
2024-11,Lochinvar  Station,Train,Exit,Less than 50
2024-11,Lochinvar  Station,Train,Entry,Less than 50
2024-11,Loftus  Station,Train,Exit,7310
2024-11,Loftus  Station,Train,Entry,8236
2024-11,Lysaghts  Station,Train,Exit,Less than 50
2024-11,Lysaghts  Station,Train,Entry,Less than 50
2024-11,Macarthur  Station,Train,Exit,57975
2024-11,Macarthur  Station,Train,Entry,60639
2024-11,Macdonaldtown  Station,Train,Exit,22695
2024-11,Macdonaldtown  Station,Train,Entry,23061
2024-11,Macquarie Fields  Station,Train,Exit,19141
2024-11,Macquarie Fields  Station,Train,Entry,20471
2024-11,Macquarie Park  Station,Metro,Exit,96430
2024-11,Macquarie Park  Station,Metro,Entry,97555
2024-11,Macquarie University  Station,Metro,Exit,322387
2024-11,Macquarie University  Station,Metro,Entry,319392
2024-11,Maitland  Station,Train,Exit,7558
2024-11,Maitland  Station,Train,Entry,8156
2024-11,Marayong  Station,Train,Exit,20948
2024-11,Marayong  Station,Train,Entry,22770
2024-11,Martin Place  Station,Shared,Exit,814528
2024-11,Martin Place  Station,Shared,Entry,730633
2024-11,Martins Creek  Station,Train,Exit,Less than 50
2024-11,Martins Creek  Station,Train,Entry,Less than 50
2024-11,Marulan  Station,Train,Exit,Less than 50
2024-11,Marulan  Station,Train,Entry,62
2024-11,Mascot  Station,Train,Exit,369448
2024-11,Mascot  Station,Train,Entry,369772
2024-11,Meadowbank  Station,Train,Exit,100516
2024-11,Meadowbank  Station,Train,Entry,111250
2024-11,Medlow Bath  Station,Train,Exit,694
2024-11,Medlow Bath  Station,Train,Entry,823
2024-11,Menangle Park  Station,Train,Exit,268
2024-11,Menangle Park  Station,Train,Entry,307
2024-11,Menangle  Station,Train,Exit,269
2024-11,Menangle  Station,Train,Entry,277
2024-11,Merrylands  Station,Train,Exit,136379
2024-11,Merrylands  Station,Train,Entry,140312
2024-11,Metford  Station,Train,Exit,1359
2024-11,Metford  Station,Train,Entry,1452
2024-11,Milsons Point  Station,Train,Exit,173299
2024-11,Milsons Point  Station,Train,Entry,165811
2024-11,Mindaribba  Station,Train,Exit,Less than 50
2024-11,Mindaribba  Station,Train,Entry,Less than 50
2024-11,Minnamurra  Station,Train,Exit,2014
2024-11,Minnamurra  Station,Train,Entry,2100
2024-11,Minto  Station,Train,Exit,57254
2024-11,Minto  Station,Train,Entry,60940
2024-11,Miranda  Station,Train,Exit,84321
2024-11,Miranda  Station,Train,Entry,81440
2024-11,Mittagong  Station,Train,Exit,2972
2024-11,Mittagong  Station,Train,Entry,3308
2024-11,Morisset  Station,Train,Exit,13882
2024-11,Morisset  Station,Train,Entry,15125
2024-11,Mortdale  Station,Train,Exit,66807
2024-11,Mortdale  Station,Train,Entry,74080
2024-11,Moss Vale  Station,Train,Exit,3211
2024-11,Moss Vale  Station,Train,Entry,3553
2024-11,Mount Colah  Station,Train,Exit,11463
2024-11,Mount Colah  Station,Train,Entry,12679
2024-11,Mount Druitt  Station,Train,Exit,141495
2024-11,Mount Druitt  Station,Train,Entry,141368
2024-11,Mount Kuring-gai  Station,Train,Exit,4434
2024-11,Mount Kuring-gai  Station,Train,Entry,4681
2024-11,Mount Victoria  Station,Train,Exit,2680
2024-11,Mount Victoria  Station,Train,Entry,2772
2024-11,Mulgrave  Station,Train,Exit,5354
2024-11,Mulgrave  Station,Train,Entry,5459
2024-11,Museum  Station,Train,Exit,251097
2024-11,Museum  Station,Train,Entry,219818
2024-11,Muswellbrook  Station,Train,Exit,391
2024-11,Muswellbrook  Station,Train,Entry,572
2024-11,Narara  Station,Train,Exit,3946
2024-11,Narara  Station,Train,Entry,4599
2024-11,Narwee  Station,Train,Exit,36696
2024-11,Narwee  Station,Train,Entry,40537
2024-11,Newcastle Interchange Station,Train,Exit,38207
2024-11,Newcastle Interchange Station,Train,Entry,37725
2024-11,Newtown  Station,Train,Exit,254541
2024-11,Newtown  Station,Train,Entry,224791
2024-11,Niagara Park  Station,Train,Exit,1965
2024-11,Niagara Park  Station,Train,Entry,2147
2024-11,Normanhurst  Station,Train,Exit,20699
2024-11,Normanhurst  Station,Train,Entry,25918
2024-11,North Ryde  Station,Metro,Exit,78781
2024-11,North Ryde  Station,Metro,Entry,80044
2024-11,North Strathfield  Station,Train,Exit,55583
2024-11,North Strathfield  Station,Train,Entry,57166
2024-11,North Sydney  Station,Train,Exit,257134
2024-11,North Sydney  Station,Train,Entry,242808
2024-11,North Wollongong  Station,Train,Exit,24965
2024-11,North Wollongong  Station,Train,Entry,26903
2024-11,Norwest  Station,Metro,Exit,69030
2024-11,Norwest  Station,Metro,Entry,70239
2024-11,Oak Flats  Station,Train,Exit,7742
2024-11,Oak Flats  Station,Train,Entry,8685
2024-11,Oatley  Station,Train,Exit,38760
2024-11,Oatley  Station,Train,Entry,41617
2024-11,Olympic Park  Station,Train,Exit,136871
2024-11,Olympic Park  Station,Train,Entry,83686
2024-11,Otford  Station,Train,Exit,804
2024-11,Otford  Station,Train,Entry,834
2024-11,Ourimbah  Station,Train,Exit,3188
2024-11,Ourimbah  Station,Train,Entry,3457
2024-11,Padstow  Station,Train,Exit,51585
2024-11,Padstow  Station,Train,Entry,56727
2024-11,Panania  Station,Train,Exit,31734
2024-11,Panania  Station,Train,Entry,35103
2024-11,Parramatta  Station,Train,Exit,927486
2024-11,Parramatta  Station,Train,Entry,904747
2024-11,Paterson  Station,Train,Exit,115
2024-11,Paterson  Station,Train,Entry,207
2024-11,Pendle Hill  Station,Train,Exit,64123
2024-11,Pendle Hill  Station,Train,Entry,68630
2024-11,Pennant Hills  Station,Train,Exit,34784
2024-11,Pennant Hills  Station,Train,Entry,36449
2024-11,Penrith  Station,Train,Exit,166242
2024-11,Penrith  Station,Train,Entry,162072
2024-11,Penrose  Station,Train,Exit,Less than 50
2024-11,Penrose  Station,Train,Entry,Less than 50
2024-11,Penshurst  Station,Train,Exit,56360
2024-11,Penshurst  Station,Train,Entry,65818
2024-11,Petersham  Station,Train,Exit,74288
2024-11,Petersham  Station,Train,Entry,77017
2024-11,Picton  Station,Train,Exit,2427
2024-11,Picton  Station,Train,Entry,2915
2024-11,Point Clare  Station,Train,Exit,2697
2024-11,Point Clare  Station,Train,Entry,3176
2024-11,Port Kembla North  Station,Train,Exit,255
2024-11,Port Kembla North  Station,Train,Entry,328
2024-11,Port Kembla  Station,Train,Exit,1324
2024-11,Port Kembla  Station,Train,Entry,1668
2024-11,Pymble  Station,Train,Exit,43965
2024-11,Pymble  Station,Train,Entry,48092
2024-11,Quakers Hill  Station,Train,Exit,49087
2024-11,Quakers Hill  Station,Train,Entry,54459
2024-11,Redfern  Station,Train,Exit,559884
2024-11,Redfern  Station,Train,Entry,522952
2024-11,Regents Park  Station,Train,Exit,30115
2024-11,Regents Park  Station,Train,Entry,32226
2024-11,Revesby  Station,Train,Exit,113188
2024-11,Revesby  Station,Train,Entry,115186
2024-11,Rhodes  Station,Train,Exit,202517
2024-11,Rhodes  Station,Train,Entry,205789
2024-11,Richmond  Station,Train,Exit,13872
2024-11,Richmond  Station,Train,Entry,15251
2024-11,Riverstone  Station,Train,Exit,23797
2024-11,Riverstone  Station,Train,Entry,26325
2024-11,Riverwood  Station,Train,Exit,69175
2024-11,Riverwood  Station,Train,Entry,73871
2024-11,Rockdale  Station,Train,Exit,219401
2024-11,Rockdale  Station,Train,Entry,228270
2024-11,Rooty Hill  Station,Train,Exit,75352
2024-11,Rooty Hill  Station,Train,Entry,80054
2024-11,Roseville  Station,Train,Exit,56716
2024-11,Roseville  Station,Train,Entry,59915
2024-11,Rouse Hill  Station,Metro,Exit,113864
2024-11,Rouse Hill  Station,Metro,Entry,108914
2024-11,Rydal  Station,Train,Exit,Less than 50
2024-11,Rydal  Station,Train,Entry,Less than 50
2024-11,Sandgate  Station,Train,Exit,289
2024-11,Sandgate  Station,Train,Entry,376
2024-11,Scarborough  Station,Train,Exit,443
2024-11,Scarborough  Station,Train,Entry,399
2024-11,Schofields  Station,Train,Exit,85490
2024-11,Schofields  Station,Train,Entry,90903
2024-11,Scone  Station,Train,Exit,270
2024-11,Scone  Station,Train,Entry,347
2024-11,Sefton  Station,Train,Exit,16065
2024-11,Sefton  Station,Train,Entry,17850
2024-11,Seven Hills  Station,Train,Exit,122304
2024-11,Seven Hills  Station,Train,Entry,129048
2024-11,Shellharbour Junction  Station,Train,Exit,3540
2024-11,Shellharbour Junction  Station,Train,Entry,4095
2024-11,Singleton  Station,Train,Exit,562
2024-11,Singleton  Station,Train,Entry,625
2024-11,Springwood  Station,Train,Exit,19094
2024-11,Springwood  Station,Train,Entry,19562
2024-11,St James  Station,Train,Exit,189583
2024-11,St James  Station,Train,Entry,168656
2024-11,St Leonards  Station,Train,Exit,235053
2024-11,St Leonards  Station,Train,Entry,235233
2024-11,St Marys  Station,Train,Exit,94205
2024-11,St Marys  Station,Train,Entry,97505
2024-11,St Peters  Station,Train,Exit,55667
2024-11,St Peters  Station,Train,Entry,63353
2024-11,Stanmore  Station,Train,Exit,62299
2024-11,Stanmore  Station,Train,Entry,68375
2024-11,Stanwell Park  Station,Train,Exit,1377
2024-11,Stanwell Park  Station,Train,Entry,1328
2024-11,Strathfield  Station,Train,Exit,572858
2024-11,Strathfield  Station,Train,Entry,588923
2024-11,Summer Hill  Station,Train,Exit,70436
2024-11,Summer Hill  Station,Train,Entry,75211
2024-11,Sutherland  Station,Train,Exit,140085
2024-11,Sutherland  Station,Train,Entry,141971
2024-11,Sydenham  Station,Shared,Exit,442791
2024-11,Sydenham  Station,Shared,Entry,454706
2024-11,Tahmoor  Station,Train,Exit,2657
2024-11,Tahmoor  Station,Train,Entry,3008
2024-11,Tallawong  Station,Metro,Exit,145603
2024-11,Tallawong  Station,Metro,Entry,157306
2024-11,Tallong  Station,Train,Exit,Less than 50
2024-11,Tallong  Station,Train,Entry,Less than 50
2024-11,Tarana  Station,Train,Exit,83
2024-11,Tarana  Station,Train,Entry,104
2024-11,Tarro  Station,Train,Exit,89
2024-11,Tarro  Station,Train,Entry,105
2024-11,Tascott  Station,Train,Exit,1602
2024-11,Tascott  Station,Train,Entry,1981
2024-11,Telarah  Station,Train,Exit,2193
2024-11,Telarah  Station,Train,Entry,2555
2024-11,Telopea  Station,Train,Exit,2320
2024-11,Telopea  Station,Train,Entry,2597
2024-11,Tempe  Station,Train,Exit,29763
2024-11,Tempe  Station,Train,Entry,31288
2024-11,Teralba  Station,Train,Exit,921
2024-11,Teralba  Station,Train,Entry,1050
2024-11,Thirroul  Station,Train,Exit,19389
2024-11,Thirroul  Station,Train,Entry,20606
2024-11,Thornleigh  Station,Train,Exit,32626
2024-11,Thornleigh  Station,Train,Entry,34129
2024-11,Thornton  Station,Train,Exit,4517
2024-11,Thornton  Station,Train,Entry,5034
2024-11,Toongabbie  Station,Train,Exit,60226
2024-11,Toongabbie  Station,Train,Entry,63828
2024-11,Town Hall  Station,Train,Exit,1712541
2024-11,Town Hall  Station,Train,Entry,1781781
2024-11,Towradgi  Station,Train,Exit,1411
2024-11,Towradgi  Station,Train,Entry,1678
2024-11,Tuggerah  Station,Train,Exit,21637
2024-11,Tuggerah  Station,Train,Entry,22498
2024-11,Turramurra  Station,Train,Exit,73623
2024-11,Turramurra  Station,Train,Entry,78096
2024-11,Turrella  Station,Train,Exit,21417
2024-11,Turrella  Station,Train,Entry,23995
2024-11,Unanderra  Station,Train,Exit,7922
2024-11,Unanderra  Station,Train,Entry,8639
2024-11,Valley Heights  Station,Train,Exit,956
2024-11,Valley Heights  Station,Train,Entry,1170
2024-11,Victoria Cross  Station,Metro,Exit,327445
2024-11,Victoria Cross  Station,Metro,Entry,334008
2024-11,Victoria Street  Station,Train,Exit,5482
2024-11,Victoria Street  Station,Train,Entry,5964
2024-11,Villawood  Station,Train,Exit,10444
2024-11,Villawood  Station,Train,Entry,10685
2024-11,Vineyard  Station,Train,Exit,3244
2024-11,Vineyard  Station,Train,Entry,3346
2024-11,Wahroonga  Station,Train,Exit,38378
2024-11,Wahroonga  Station,Train,Entry,40630
2024-11,Waitara  Station,Train,Exit,57499
2024-11,Waitara  Station,Train,Entry,62694
2024-11,Wallarobba  Station,Train,Exit,Less than 50
2024-11,Wallarobba  Station,Train,Entry,Less than 50
2024-11,Warabrook  Station,Train,Exit,3031
2024-11,Warabrook  Station,Train,Entry,3100
2024-11,Waratah  Station,Train,Exit,3641
2024-11,Waratah  Station,Train,Entry,3684
2024-11,Warnervale  Station,Train,Exit,4279
2024-11,Warnervale  Station,Train,Entry,4893
2024-11,Warrawee  Station,Train,Exit,17769
2024-11,Warrawee  Station,Train,Entry,19913
2024-11,Warrimoo  Station,Train,Exit,2144
2024-11,Warrimoo  Station,Train,Entry,2258
2024-11,Warwick Farm  Station,Train,Exit,46534
2024-11,Warwick Farm  Station,Train,Entry,50974
2024-11,Waterfall  Station,Train,Exit,8079
2024-11,Waterfall  Station,Train,Entry,8134
2024-11,Waterloo  Station,Metro,Exit,118542
2024-11,Waterloo  Station,Metro,Entry,122751
2024-11,Waverton  Station,Train,Exit,36631
2024-11,Waverton  Station,Train,Entry,42032
2024-11,Wentworth Falls  Station,Train,Exit,7191
2024-11,Wentworth Falls  Station,Train,Entry,7286
2024-11,Wentworthville  Station,Train,Exit,81423
2024-11,Wentworthville  Station,Train,Entry,85704
2024-11,Werrington  Station,Train,Exit,24873
2024-11,Werrington  Station,Train,Entry,27946
2024-11,West Ryde  Station,Train,Exit,101834
2024-11,West Ryde  Station,Train,Entry,102508
2024-11,Westmead  Station,Train,Exit,140976
2024-11,Westmead  Station,Train,Entry,152116
2024-11,Windsor  Station,Train,Exit,14656
2024-11,Windsor  Station,Train,Entry,14983
2024-11,Wingello  Station,Train,Exit,Less than 50
2024-11,Wingello  Station,Train,Entry,Less than 50
2024-11,Wirragulla  Station,Train,Exit,Less than 50
2024-11,Wirragulla  Station,Train,Entry,Less than 50
2024-11,Wolli Creek  Station,Train,Exit,206702
2024-11,Wolli Creek  Station,Train,Entry,206207
2024-11,Wollongong  Station,Train,Exit,41614
2024-11,Wollongong  Station,Train,Entry,42744
2024-11,Wollstonecraft  Station,Train,Exit,41075
2024-11,Wollstonecraft  Station,Train,Entry,45265
2024-11,Wombarra  Station,Train,Exit,556
2024-11,Wombarra  Station,Train,Entry,662
2024-11,Wondabyne  Station,Train,Exit,388
2024-11,Wondabyne  Station,Train,Entry,376
2024-11,Woodford  Station,Train,Exit,1349
2024-11,Woodford  Station,Train,Entry,1450
2024-11,Woolooware  Station,Train,Exit,23126
2024-11,Woolooware  Station,Train,Entry,25113
2024-11,Woonona  Station,Train,Exit,2151
2024-11,Woonona  Station,Train,Entry,2602
2024-11,Woy Woy  Station,Train,Exit,69717
2024-11,Woy Woy  Station,Train,Entry,69322
2024-11,Wyee  Station,Train,Exit,4720
2024-11,Wyee  Station,Train,Entry,5571
2024-11,Wynyard  Station,Train,Exit,1150985
2024-11,Wynyard  Station,Train,Entry,1082572
2024-11,Wyong  Station,Train,Exit,23706
2024-11,Wyong  Station,Train,Entry,25924
2024-11,Yagoona  Station,Train,Exit,20637
2024-11,Yagoona  Station,Train,Entry,22744
2024-11,Yennora  Station,Train,Exit,24807
2024-11,Yennora  Station,Train,Entry,24119
2024-11,Yerrinbool  Station,Train,Exit,311
2024-11,Yerrinbool  Station,Train,Entry,422
2024-11,Zig Zag  Station,Train,Exit,Less than 50
2024-11,Zig Zag  Station,Train,Entry,Less than 50
2024-12,Aberdeen  Station,Train,Exit,Less than 50
2024-12,Aberdeen  Station,Train,Entry,Less than 50
2024-12,Adamstown  Station,Train,Exit,2107
2024-12,Adamstown  Station,Train,Entry,2156
2024-12,Albion Park  Station,Train,Exit,4662
2024-12,Albion Park  Station,Train,Entry,5254
2024-12,Allawah  Station,Train,Exit,47183
2024-12,Allawah  Station,Train,Entry,53389
2024-12,Arncliffe  Station,Train,Exit,43091
2024-12,Arncliffe  Station,Train,Entry,48452
2024-12,Artarmon  Station,Train,Exit,82704
2024-12,Artarmon  Station,Train,Entry,88359
2024-12,Ashfield  Station,Train,Exit,230972
2024-12,Ashfield  Station,Train,Entry,236253
2024-12,Asquith  Station,Train,Exit,21108
2024-12,Asquith  Station,Train,Entry,23815
2024-12,Auburn  Station,Train,Exit,288570
2024-12,Auburn  Station,Train,Entry,310458
2024-12,Austinmer  Station,Train,Exit,1602
2024-12,Austinmer  Station,Train,Entry,1946
2024-12,Awaba  Station,Train,Exit,338
2024-12,Awaba  Station,Train,Entry,413
2024-12,Banksia  Station,Train,Exit,26723
2024-12,Banksia  Station,Train,Entry,30229
2024-12,Barangaroo  Station,Metro,Exit,222661
2024-12,Barangaroo  Station,Metro,Entry,193300
2024-12,Bardwell Park  Station,Train,Exit,20714
2024-12,Bardwell Park  Station,Train,Entry,22591
2024-12,Bargo  Station,Train,Exit,855
2024-12,Bargo  Station,Train,Entry,995
2024-12,Bathurst  Station,Train,Exit,1771
2024-12,Bathurst  Station,Train,Entry,2549
2024-12,Beecroft  Station,Train,Exit,24627
2024-12,Beecroft  Station,Train,Entry,25654
2024-12,Bell  Station,Train,Exit,106
2024-12,Bell  Station,Train,Entry,96
2024-12,Bella Vista  Station,Metro,Exit,74261
2024-12,Bella Vista  Station,Metro,Entry,77429
2024-12,Bellambi  Station,Train,Exit,1953
2024-12,Bellambi  Station,Train,Entry,1955
2024-12,Belmore  Station,Train,Exit,Less than 50
2024-12,Belmore  Station,Train,Entry,Less than 50
2024-12,Berala  Station,Train,Exit,37142
2024-12,Berala  Station,Train,Entry,39855
2024-12,Beresfield  Station,Train,Exit,2725
2024-12,Beresfield  Station,Train,Entry,3034
2024-12,Berowra  Station,Train,Exit,20088
2024-12,Berowra  Station,Train,Entry,21890
2024-12,Berry  Station,Train,Exit,1331
2024-12,Berry  Station,Train,Entry,1425
2024-12,Beverly Hills  Station,Train,Exit,37324
2024-12,Beverly Hills  Station,Train,Entry,42568
2024-12,Bexley North  Station,Train,Exit,25614
2024-12,Bexley North  Station,Train,Entry,28269
2024-12,Birrong  Station,Train,Exit,8294
2024-12,Birrong  Station,Train,Entry,8326
2024-12,Blackheath  Station,Train,Exit,4763
2024-12,Blackheath  Station,Train,Entry,5123
2024-12,Blacktown  Station,Train,Exit,343392
2024-12,Blacktown  Station,Train,Entry,339971
2024-12,Blaxland  Station,Train,Exit,6998
2024-12,Blaxland  Station,Train,Entry,7841
2024-12,Bomaderry  Station,Train,Exit,5308
2024-12,Bomaderry  Station,Train,Entry,6572
2024-12,Bombo  Station,Train,Exit,631
2024-12,Bombo  Station,Train,Entry,756
2024-12,Bondi Junction  Station,Train,Exit,531364
2024-12,Bondi Junction  Station,Train,Entry,543215
2024-12,Booragul  Station,Train,Exit,481
2024-12,Booragul  Station,Train,Entry,529
2024-12,Bowral  Station,Train,Exit,4306
2024-12,Bowral  Station,Train,Entry,4626
2024-12,Branxton  Station,Train,Exit,138
2024-12,Branxton  Station,Train,Entry,162
2024-12,Broadmeadow  Station,Train,Exit,17607
2024-12,Broadmeadow  Station,Train,Entry,19201
2024-12,Bullaburra  Station,Train,Exit,979
2024-12,Bullaburra  Station,Train,Entry,1023
2024-12,Bulli  Station,Train,Exit,2675
2024-12,Bulli  Station,Train,Entry,2903
2024-12,Bundanoon  Station,Train,Exit,198
2024-12,Bundanoon  Station,Train,Entry,310
2024-12,Burradoo  Station,Train,Exit,253
2024-12,Burradoo  Station,Train,Entry,225
2024-12,Burwood  Station,Train,Exit,475003
2024-12,Burwood  Station,Train,Entry,467044
2024-12,Cabramatta  Station,Train,Exit,173210
2024-12,Cabramatta  Station,Train,Entry,175855
2024-12,Camellia  Station,Train,Exit,2260
2024-12,Camellia  Station,Train,Entry,3436
2024-12,Campbelltown  Station,Train,Exit,116790
2024-12,Campbelltown  Station,Train,Entry,119332
2024-12,Campsie  Station,Train,Exit,86
2024-12,Campsie  Station,Train,Entry,91
2024-12,Canley Vale  Station,Train,Exit,44735
2024-12,Canley Vale  Station,Train,Entry,50603
2024-12,Cardiff  Station,Train,Exit,18584
2024-12,Cardiff  Station,Train,Entry,19702
2024-12,Caringbah  Station,Train,Exit,45186
2024-12,Caringbah  Station,Train,Entry,48592
2024-12,Carlingford  Station,Train,Exit,1695
2024-12,Carlingford  Station,Train,Entry,1980
2024-12,Carlton  Station,Train,Exit,49185
2024-12,Carlton  Station,Train,Entry,54684
2024-12,Carramar  Station,Train,Exit,10899
2024-12,Carramar  Station,Train,Entry,12342
2024-12,Castle Hill  Station,Metro,Exit,190795
2024-12,Castle Hill  Station,Metro,Entry,185917
2024-12,Casula  Station,Train,Exit,6773
2024-12,Casula  Station,Train,Entry,7616
2024-12,Central  Station,Shared,Exit,1692378
2024-12,Central  Station,Shared,Entry,1636157
2024-12,Chatswood  Station,Shared,Exit,763307
2024-12,Chatswood  Station,Shared,Entry,743934
2024-12,Cheltenham  Station,Train,Exit,13775
2024-12,Cheltenham  Station,Train,Entry,15938
2024-12,Cherrybrook  Station,Metro,Exit,102497
2024-12,Cherrybrook  Station,Metro,Entry,108088
2024-12,Chester Hill  Station,Train,Exit,20692
2024-12,Chester Hill  Station,Train,Entry,22285
2024-12,Circular Quay  Station,Train,Exit,659449
2024-12,Circular Quay  Station,Train,Entry,645726
2024-12,Clarendon  Station,Train,Exit,1125
2024-12,Clarendon  Station,Train,Entry,1151
2024-12,Clyde  Station,Train,Exit,17744
2024-12,Clyde  Station,Train,Entry,18786
2024-12,Coalcliff  Station,Train,Exit,467
2024-12,Coalcliff  Station,Train,Entry,431
2024-12,Cockle Creek  Station,Train,Exit,923
2024-12,Cockle Creek  Station,Train,Entry,943
2024-12,Coledale  Station,Train,Exit,666
2024-12,Coledale  Station,Train,Entry,771
2024-12,Como  Station,Train,Exit,10172
2024-12,Como  Station,Train,Entry,12328
2024-12,Concord West  Station,Train,Exit,37711
2024-12,Concord West  Station,Train,Entry,40330
2024-12,Coniston  Station,Train,Exit,3738
2024-12,Coniston  Station,Train,Entry,4349
2024-12,Corrimal  Station,Train,Exit,2430
2024-12,Corrimal  Station,Train,Entry,2825
2024-12,Cowan  Station,Train,Exit,1028
2024-12,Cowan  Station,Train,Entry,1008
2024-12,Cringila  Station,Train,Exit,298
2024-12,Cringila  Station,Train,Entry,261
2024-12,Cronulla  Station,Train,Exit,67115
2024-12,Cronulla  Station,Train,Entry,66251
2024-12,Crows Nest  Station,Metro,Exit,245609
2024-12,Crows Nest  Station,Metro,Entry,243237
2024-12,Croydon  Station,Train,Exit,39777
2024-12,Croydon  Station,Train,Entry,43288
2024-12,Dapto  Station,Train,Exit,8090
2024-12,Dapto  Station,Train,Entry,9237
2024-12,Denistone  Station,Train,Exit,9457
2024-12,Denistone  Station,Train,Entry,10417
2024-12,Domestic  Station,Train,Exit,195316
2024-12,Domestic  Station,Train,Entry,229058
2024-12,Doonside  Station,Train,Exit,50189
2024-12,Doonside  Station,Train,Entry,56255
2024-12,Dora Creek  Station,Train,Exit,735
2024-12,Dora Creek  Station,Train,Entry,794
2024-12,Douglas Park  Station,Train,Exit,387
2024-12,Douglas Park  Station,Train,Entry,463
2024-12,Dundas  Station,Train,Exit,1734
2024-12,Dundas  Station,Train,Entry,1850
2024-12,Dungog  Station,Train,Exit,332
2024-12,Dungog  Station,Train,Entry,440
2024-12,East Hills  Station,Train,Exit,14851
2024-12,East Hills  Station,Train,Entry,16549
2024-12,East Maitland  Station,Train,Exit,582
2024-12,East Maitland  Station,Train,Entry,610
2024-12,East Richmond  Station,Train,Exit,3632
2024-12,East Richmond  Station,Train,Entry,3488
2024-12,Eastwood  Station,Train,Exit,149760
2024-12,Eastwood  Station,Train,Entry,150168
2024-12,Edgecliff  Station,Train,Exit,171954
2024-12,Edgecliff  Station,Train,Entry,171917
2024-12,Edmondson Park  Station,Train,Exit,76488
2024-12,Edmondson Park  Station,Train,Entry,80937
2024-12,Emu Plains  Station,Train,Exit,16509
2024-12,Emu Plains  Station,Train,Entry,17863
2024-12,Engadine  Station,Train,Exit,21044
2024-12,Engadine  Station,Train,Entry,23267
2024-12,Epping  Station,Shared,Exit,305912
2024-12,Epping  Station,Shared,Entry,315391
2024-12,Erskineville  Station,Train,Exit,42919
2024-12,Erskineville  Station,Train,Entry,47138
2024-12,Exeter  Station,Train,Exit,67
2024-12,Exeter  Station,Train,Entry,100
2024-12,Fairfield  Station,Train,Exit,114767
2024-12,Fairfield  Station,Train,Entry,121987
2024-12,Fairy Meadow  Station,Train,Exit,2025
2024-12,Fairy Meadow  Station,Train,Entry,2114
2024-12,Fassifern  Station,Train,Exit,7361
2024-12,Fassifern  Station,Train,Entry,8338
2024-12,Faulconbridge  Station,Train,Exit,1497
2024-12,Faulconbridge  Station,Train,Entry,1567
2024-12,Flemington  Station,Train,Exit,109467
2024-12,Flemington  Station,Train,Entry,115765
2024-12,Gadigal  Station,Metro,Exit,452747
2024-12,Gadigal  Station,Metro,Entry,439406
2024-12,Gerringong  Station,Train,Exit,911
2024-12,Gerringong  Station,Train,Entry,1021
2024-12,Glenbrook  Station,Train,Exit,6175
2024-12,Glenbrook  Station,Train,Entry,6902
2024-12,Glenfield  Station,Train,Exit,100559
2024-12,Glenfield  Station,Train,Entry,109467
2024-12,Gordon  Station,Train,Exit,118558
2024-12,Gordon  Station,Train,Entry,123857
2024-12,Gosford  Station,Train,Exit,88069
2024-12,Gosford  Station,Train,Entry,87751
2024-12,Goulburn  Station,Train,Exit,683
2024-12,Goulburn  Station,Train,Entry,1112
2024-12,Granville  Station,Train,Exit,133690
2024-12,Granville  Station,Train,Entry,146253
2024-12,Green Square  Station,Train,Exit,188450
2024-12,Green Square  Station,Train,Entry,198392
2024-12,Greta  Station,Train,Exit,52
2024-12,Greta  Station,Train,Entry,Less than 50
2024-12,Guildford  Station,Train,Exit,53636
2024-12,Guildford  Station,Train,Entry,61472
2024-12,Gymea  Station,Train,Exit,33037
2024-12,Gymea  Station,Train,Entry,36446
2024-12,Hamilton  Station,Train,Exit,14122
2024-12,Hamilton  Station,Train,Entry,13966
2024-12,Harris Park  Station,Train,Exit,69383
2024-12,Harris Park  Station,Train,Entry,68568
2024-12,Hawkesbury River  Station,Train,Exit,6325
2024-12,Hawkesbury River  Station,Train,Entry,6497
2024-12,Hazelbrook  Station,Train,Exit,4379
2024-12,Hazelbrook  Station,Train,Entry,4853
2024-12,Heathcote  Station,Train,Exit,9915
2024-12,Heathcote  Station,Train,Entry,10438
2024-12,Helensburgh  Station,Train,Exit,6695
2024-12,Helensburgh  Station,Train,Entry,7649
2024-12,Hexham  Station,Train,Exit,209
2024-12,Hexham  Station,Train,Entry,197
2024-12,High Street  Station,Train,Exit,344
2024-12,High Street  Station,Train,Entry,254
2024-12,Hilldale  Station,Train,Exit,Less than 50
2024-12,Hilldale  Station,Train,Entry,Less than 50
2024-12,Hills Showground  Station,Metro,Exit,89966
2024-12,Hills Showground  Station,Metro,Entry,95353
2024-12,Holsworthy  Station,Train,Exit,52875
2024-12,Holsworthy  Station,Train,Entry,57654
2024-12,Homebush  Station,Train,Exit,80098
2024-12,Homebush  Station,Train,Entry,85582
2024-12,Hornsby  Station,Train,Exit,245817
2024-12,Hornsby  Station,Train,Entry,246829
2024-12,Hurstville  Station,Train,Exit,420878
2024-12,Hurstville  Station,Train,Entry,420700
2024-12,Ingleburn  Station,Train,Exit,60501
2024-12,Ingleburn  Station,Train,Entry,62096
2024-12,International  Station,Train,Exit,142407
2024-12,International  Station,Train,Entry,142655
2024-12,Jannali  Station,Train,Exit,41443
2024-12,Jannali  Station,Train,Entry,45143
2024-12,Katoomba  Station,Train,Exit,33346
2024-12,Katoomba  Station,Train,Entry,32498
2024-12,Kellyville  Station,Metro,Exit,92136
2024-12,Kellyville  Station,Metro,Entry,95893
2024-12,Kembla Grange  Station,Train,Exit,191
2024-12,Kembla Grange  Station,Train,Entry,168
2024-12,Kiama  Station,Train,Exit,15659
2024-12,Kiama  Station,Train,Entry,14638
2024-12,Killara  Station,Train,Exit,35896
2024-12,Killara  Station,Train,Entry,38078
2024-12,Kings Cross  Station,Train,Exit,323760
2024-12,Kings Cross  Station,Train,Entry,312645
2024-12,Kingsgrove  Station,Train,Exit,43965
2024-12,Kingsgrove  Station,Train,Entry,47042
2024-12,Kingswood  Station,Train,Exit,38831
2024-12,Kingswood  Station,Train,Entry,42384
2024-12,Kirrawee  Station,Train,Exit,32978
2024-12,Kirrawee  Station,Train,Entry,34983
2024-12,Kogarah  Station,Train,Exit,209279
2024-12,Kogarah  Station,Train,Entry,221353
2024-12,Koolewong  Station,Train,Exit,1042
2024-12,Koolewong  Station,Train,Entry,1309
2024-12,Kotara  Station,Train,Exit,1296
2024-12,Kotara  Station,Train,Entry,1097
2024-12,Lapstone  Station,Train,Exit,1032
2024-12,Lapstone  Station,Train,Entry,1243
2024-12,Lawson  Station,Train,Exit,2985
2024-12,Lawson  Station,Train,Entry,3085
2024-12,Leightonfield  Station,Train,Exit,4433
2024-12,Leightonfield  Station,Train,Entry,4839
2024-12,Leppington  Station,Train,Exit,77084
2024-12,Leppington  Station,Train,Entry,81792
2024-12,Leumeah  Station,Train,Exit,43908
2024-12,Leumeah  Station,Train,Entry,47284
2024-12,Leura  Station,Train,Exit,7041
2024-12,Leura  Station,Train,Entry,9045
2024-12,Lewisham  Station,Train,Exit,46884
2024-12,Lewisham  Station,Train,Entry,51859
2024-12,Lidcombe  Station,Train,Exit,317716
2024-12,Lidcombe  Station,Train,Entry,327000
2024-12,Linden  Station,Train,Exit,204
2024-12,Linden  Station,Train,Entry,252
2024-12,Lindfield  Station,Train,Exit,72873
2024-12,Lindfield  Station,Train,Entry,75202
2024-12,Lisarow  Station,Train,Exit,2328
2024-12,Lisarow  Station,Train,Entry,2650
2024-12,Lithgow  Station,Train,Exit,5917
2024-12,Lithgow  Station,Train,Entry,6501
2024-12,Liverpool  Station,Train,Exit,174451
2024-12,Liverpool  Station,Train,Entry,178665
2024-12,Lochinvar  Station,Train,Exit,Less than 50
2024-12,Lochinvar  Station,Train,Entry,Less than 50
2024-12,Loftus  Station,Train,Exit,5567
2024-12,Loftus  Station,Train,Entry,6470
2024-12,Lysaghts  Station,Train,Exit,Less than 50
2024-12,Lysaghts  Station,Train,Entry,Less than 50
2024-12,Macarthur  Station,Train,Exit,60300
2024-12,Macarthur  Station,Train,Entry,60634
2024-12,Macdonaldtown  Station,Train,Exit,23825
2024-12,Macdonaldtown  Station,Train,Entry,23865
2024-12,Macquarie Fields  Station,Train,Exit,18112
2024-12,Macquarie Fields  Station,Train,Entry,19370
2024-12,Macquarie Park  Station,Metro,Exit,85226
2024-12,Macquarie Park  Station,Metro,Entry,87460
2024-12,Macquarie University  Station,Metro,Exit,307783
2024-12,Macquarie University  Station,Metro,Entry,305783
2024-12,Maitland  Station,Train,Exit,7210
2024-12,Maitland  Station,Train,Entry,8182
2024-12,Marayong  Station,Train,Exit,17861
2024-12,Marayong  Station,Train,Entry,19957
2024-12,Marrickville  Station,Train,Exit,Less than 50
2024-12,Marrickville  Station,Train,Entry,Less than 50
2024-12,Martin Place  Station,Shared,Exit,858334
2024-12,Martin Place  Station,Shared,Entry,724911
2024-12,Martins Creek  Station,Train,Exit,Less than 50
2024-12,Martins Creek  Station,Train,Entry,Less than 50
2024-12,Marulan  Station,Train,Exit,Less than 50
2024-12,Marulan  Station,Train,Entry,74
2024-12,Mascot  Station,Train,Exit,348897
2024-12,Mascot  Station,Train,Entry,354836
2024-12,Meadowbank  Station,Train,Exit,89549
2024-12,Meadowbank  Station,Train,Entry,99413
2024-12,Medlow Bath  Station,Train,Exit,738
2024-12,Medlow Bath  Station,Train,Entry,867
2024-12,Menangle Park  Station,Train,Exit,309
2024-12,Menangle Park  Station,Train,Entry,295
2024-12,Menangle  Station,Train,Exit,259
2024-12,Menangle  Station,Train,Entry,262
2024-12,Merrylands  Station,Train,Exit,126801
2024-12,Merrylands  Station,Train,Entry,132052
2024-12,Metford  Station,Train,Exit,1332
2024-12,Metford  Station,Train,Entry,1397
2024-12,Milsons Point  Station,Train,Exit,179952
2024-12,Milsons Point  Station,Train,Entry,155870
2024-12,Mindaribba  Station,Train,Exit,Less than 50
2024-12,Mindaribba  Station,Train,Entry,Less than 50
2024-12,Minnamurra  Station,Train,Exit,1801
2024-12,Minnamurra  Station,Train,Entry,2034
2024-12,Minto  Station,Train,Exit,55037
2024-12,Minto  Station,Train,Entry,58754
2024-12,Miranda  Station,Train,Exit,86960
2024-12,Miranda  Station,Train,Entry,83691
2024-12,Mittagong  Station,Train,Exit,2909
2024-12,Mittagong  Station,Train,Entry,3322
2024-12,Morisset  Station,Train,Exit,13853
2024-12,Morisset  Station,Train,Entry,14848
2024-12,Mortdale  Station,Train,Exit,62281
2024-12,Mortdale  Station,Train,Entry,68972
2024-12,Moss Vale  Station,Train,Exit,2993
2024-12,Moss Vale  Station,Train,Entry,3511
2024-12,Mount Colah  Station,Train,Exit,9802
2024-12,Mount Colah  Station,Train,Entry,11091
2024-12,Mount Druitt  Station,Train,Exit,126560
2024-12,Mount Druitt  Station,Train,Entry,129062
2024-12,Mount Kuring-gai  Station,Train,Exit,4127
2024-12,Mount Kuring-gai  Station,Train,Entry,4394
2024-12,Mount Victoria  Station,Train,Exit,2299
2024-12,Mount Victoria  Station,Train,Entry,2436
2024-12,Mulgrave  Station,Train,Exit,4194
2024-12,Mulgrave  Station,Train,Entry,4419
2024-12,Museum  Station,Train,Exit,229449
2024-12,Museum  Station,Train,Entry,195455
2024-12,Muswellbrook  Station,Train,Exit,429
2024-12,Muswellbrook  Station,Train,Entry,531
2024-12,Narara  Station,Train,Exit,3355
2024-12,Narara  Station,Train,Entry,4178
2024-12,Narwee  Station,Train,Exit,34878
2024-12,Narwee  Station,Train,Entry,38558
2024-12,Newcastle Interchange Station,Train,Exit,41164
2024-12,Newcastle Interchange Station,Train,Entry,40522
2024-12,Newtown  Station,Train,Exit,232569
2024-12,Newtown  Station,Train,Entry,205705
2024-12,Niagara Park  Station,Train,Exit,1653
2024-12,Niagara Park  Station,Train,Entry,1946
2024-12,Normanhurst  Station,Train,Exit,17378
2024-12,Normanhurst  Station,Train,Entry,20462
2024-12,North Ryde  Station,Metro,Exit,74882
2024-12,North Ryde  Station,Metro,Entry,76642
2024-12,North Strathfield  Station,Train,Exit,50665
2024-12,North Strathfield  Station,Train,Entry,51596
2024-12,North Sydney  Station,Train,Exit,228386
2024-12,North Sydney  Station,Train,Entry,194937
2024-12,North Wollongong  Station,Train,Exit,20635
2024-12,North Wollongong  Station,Train,Entry,22538
2024-12,Norwest  Station,Metro,Exit,68957
2024-12,Norwest  Station,Metro,Entry,71494
2024-12,Oak Flats  Station,Train,Exit,6404
2024-12,Oak Flats  Station,Train,Entry,7379
2024-12,Oatley  Station,Train,Exit,32393
2024-12,Oatley  Station,Train,Entry,35669
2024-12,Olympic Park  Station,Train,Exit,153834
2024-12,Olympic Park  Station,Train,Entry,150613
2024-12,Otford  Station,Train,Exit,803
2024-12,Otford  Station,Train,Entry,780
2024-12,Ourimbah  Station,Train,Exit,2331
2024-12,Ourimbah  Station,Train,Entry,2742
2024-12,Padstow  Station,Train,Exit,47947
2024-12,Padstow  Station,Train,Entry,53005
2024-12,Panania  Station,Train,Exit,28840
2024-12,Panania  Station,Train,Entry,31695
2024-12,Parramatta  Station,Train,Exit,848855
2024-12,Parramatta  Station,Train,Entry,835711
2024-12,Paterson  Station,Train,Exit,102
2024-12,Paterson  Station,Train,Entry,137
2024-12,Pendle Hill  Station,Train,Exit,56730
2024-12,Pendle Hill  Station,Train,Entry,62097
2024-12,Pennant Hills  Station,Train,Exit,30821
2024-12,Pennant Hills  Station,Train,Entry,32483
2024-12,Penrith  Station,Train,Exit,157481
2024-12,Penrith  Station,Train,Entry,154929
2024-12,Penrose  Station,Train,Exit,Less than 50
2024-12,Penrose  Station,Train,Entry,Less than 50
2024-12,Penshurst  Station,Train,Exit,51506
2024-12,Penshurst  Station,Train,Entry,61296
2024-12,Petersham  Station,Train,Exit,65312
2024-12,Petersham  Station,Train,Entry,68852
2024-12,Picton  Station,Train,Exit,2413
2024-12,Picton  Station,Train,Entry,2670
2024-12,Point Clare  Station,Train,Exit,2447
2024-12,Point Clare  Station,Train,Entry,3024
2024-12,Port Kembla North  Station,Train,Exit,240
2024-12,Port Kembla North  Station,Train,Entry,273
2024-12,Port Kembla  Station,Train,Exit,1144
2024-12,Port Kembla  Station,Train,Entry,1304
2024-12,Pymble  Station,Train,Exit,34998
2024-12,Pymble  Station,Train,Entry,37970
2024-12,Quakers Hill  Station,Train,Exit,40238
2024-12,Quakers Hill  Station,Train,Entry,45716
2024-12,Redfern  Station,Train,Exit,447416
2024-12,Redfern  Station,Train,Entry,416079
2024-12,Regents Park  Station,Train,Exit,26150
2024-12,Regents Park  Station,Train,Entry,28057
2024-12,Revesby  Station,Train,Exit,109463
2024-12,Revesby  Station,Train,Entry,112508
2024-12,Rhodes  Station,Train,Exit,191919
2024-12,Rhodes  Station,Train,Entry,197290
2024-12,Richmond  Station,Train,Exit,13292
2024-12,Richmond  Station,Train,Entry,14197
2024-12,Riverstone  Station,Train,Exit,20245
2024-12,Riverstone  Station,Train,Entry,22307
2024-12,Riverwood  Station,Train,Exit,66096
2024-12,Riverwood  Station,Train,Entry,70381
2024-12,Rockdale  Station,Train,Exit,206855
2024-12,Rockdale  Station,Train,Entry,218526
2024-12,Rooty Hill  Station,Train,Exit,67541
2024-12,Rooty Hill  Station,Train,Entry,72822
2024-12,Roseville  Station,Train,Exit,51368
2024-12,Roseville  Station,Train,Entry,54148
2024-12,Rouse Hill  Station,Metro,Exit,113301
2024-12,Rouse Hill  Station,Metro,Entry,110090
2024-12,Rydal  Station,Train,Exit,Less than 50
2024-12,Rydal  Station,Train,Entry,Less than 50
2024-12,Sandgate  Station,Train,Exit,329
2024-12,Sandgate  Station,Train,Entry,417
2024-12,Scarborough  Station,Train,Exit,485
2024-12,Scarborough  Station,Train,Entry,499
2024-12,Schofields  Station,Train,Exit,68151
2024-12,Schofields  Station,Train,Entry,73090
2024-12,Scone  Station,Train,Exit,391
2024-12,Scone  Station,Train,Entry,505
2024-12,Sefton  Station,Train,Exit,13710
2024-12,Sefton  Station,Train,Entry,15194
2024-12,Seven Hills  Station,Train,Exit,105833
2024-12,Seven Hills  Station,Train,Entry,111691
2024-12,Shellharbour Junction  Station,Train,Exit,3222
2024-12,Shellharbour Junction  Station,Train,Entry,3981
2024-12,Singleton  Station,Train,Exit,644
2024-12,Singleton  Station,Train,Entry,710
2024-12,Springwood  Station,Train,Exit,15483
2024-12,Springwood  Station,Train,Entry,16355
2024-12,St James  Station,Train,Exit,208254
2024-12,St James  Station,Train,Entry,180402
2024-12,St Leonards  Station,Train,Exit,198487
2024-12,St Leonards  Station,Train,Entry,197847
2024-12,St Marys  Station,Train,Exit,81772
2024-12,St Marys  Station,Train,Entry,84452
2024-12,St Peters  Station,Train,Exit,47055
2024-12,St Peters  Station,Train,Entry,53795
2024-12,Stanmore  Station,Train,Exit,53750
2024-12,Stanmore  Station,Train,Entry,58699
2024-12,Stanwell Park  Station,Train,Exit,1278
2024-12,Stanwell Park  Station,Train,Entry,1208
2024-12,Strathfield  Station,Train,Exit,523033
2024-12,Strathfield  Station,Train,Entry,545092
2024-12,Summer Hill  Station,Train,Exit,64162
2024-12,Summer Hill  Station,Train,Entry,69522
2024-12,Sutherland  Station,Train,Exit,133195
2024-12,Sutherland  Station,Train,Entry,134368
2024-12,Sydenham  Station,Shared,Exit,441655
2024-12,Sydenham  Station,Shared,Entry,458890
2024-12,Tahmoor  Station,Train,Exit,2544
2024-12,Tahmoor  Station,Train,Entry,2961
2024-12,Tallawong  Station,Metro,Exit,153522
2024-12,Tallawong  Station,Metro,Entry,166368
2024-12,Tallong  Station,Train,Exit,Less than 50
2024-12,Tallong  Station,Train,Entry,Less than 50
2024-12,Tarana  Station,Train,Exit,58
2024-12,Tarana  Station,Train,Entry,88
2024-12,Tarro  Station,Train,Exit,123
2024-12,Tarro  Station,Train,Entry,176
2024-12,Tascott  Station,Train,Exit,1456
2024-12,Tascott  Station,Train,Entry,1876
2024-12,Telarah  Station,Train,Exit,2190
2024-12,Telarah  Station,Train,Entry,2594
2024-12,Telopea  Station,Train,Exit,1577
2024-12,Telopea  Station,Train,Entry,1843
2024-12,Tempe  Station,Train,Exit,25743
2024-12,Tempe  Station,Train,Entry,27932
2024-12,Teralba  Station,Train,Exit,844
2024-12,Teralba  Station,Train,Entry,953
2024-12,Thirroul  Station,Train,Exit,16483
2024-12,Thirroul  Station,Train,Entry,18094
2024-12,Thornleigh  Station,Train,Exit,30917
2024-12,Thornleigh  Station,Train,Entry,32381
2024-12,Thornton  Station,Train,Exit,4375
2024-12,Thornton  Station,Train,Entry,4864
2024-12,Toongabbie  Station,Train,Exit,52846
2024-12,Toongabbie  Station,Train,Entry,57508
2024-12,Town Hall  Station,Train,Exit,1665290
2024-12,Town Hall  Station,Train,Entry,1734217
2024-12,Towradgi  Station,Train,Exit,1330
2024-12,Towradgi  Station,Train,Entry,1462
2024-12,Tuggerah  Station,Train,Exit,22567
2024-12,Tuggerah  Station,Train,Entry,22869
2024-12,Turramurra  Station,Train,Exit,65021
2024-12,Turramurra  Station,Train,Entry,69660
2024-12,Turrella  Station,Train,Exit,20412
2024-12,Turrella  Station,Train,Entry,22706
2024-12,Unanderra  Station,Train,Exit,6487
2024-12,Unanderra  Station,Train,Entry,7364
2024-12,Valley Heights  Station,Train,Exit,838
2024-12,Valley Heights  Station,Train,Entry,960
2024-12,Victoria Cross  Station,Metro,Exit,300593
2024-12,Victoria Cross  Station,Metro,Entry,301216
2024-12,Victoria Street  Station,Train,Exit,5388
2024-12,Victoria Street  Station,Train,Entry,6100
2024-12,Villawood  Station,Train,Exit,9442
2024-12,Villawood  Station,Train,Entry,9757
2024-12,Vineyard  Station,Train,Exit,2741
2024-12,Vineyard  Station,Train,Entry,2918
2024-12,Wahroonga  Station,Train,Exit,31013
2024-12,Wahroonga  Station,Train,Entry,32044
2024-12,Waitara  Station,Train,Exit,50664
2024-12,Waitara  Station,Train,Entry,54072
2024-12,Wallarobba  Station,Train,Exit,Less than 50
2024-12,Wallarobba  Station,Train,Entry,Less than 50
2024-12,Warabrook  Station,Train,Exit,1875
2024-12,Warabrook  Station,Train,Entry,1941
2024-12,Waratah  Station,Train,Exit,3254
2024-12,Waratah  Station,Train,Entry,3448
2024-12,Warnervale  Station,Train,Exit,3489
2024-12,Warnervale  Station,Train,Entry,4309
2024-12,Warrawee  Station,Train,Exit,12991
2024-12,Warrawee  Station,Train,Entry,13613
2024-12,Warrimoo  Station,Train,Exit,1625
2024-12,Warrimoo  Station,Train,Entry,1960
2024-12,Warwick Farm  Station,Train,Exit,43104
2024-12,Warwick Farm  Station,Train,Entry,48333
2024-12,Waterfall  Station,Train,Exit,7693
2024-12,Waterfall  Station,Train,Entry,7703
2024-12,Waterloo  Station,Metro,Exit,116673
2024-12,Waterloo  Station,Metro,Entry,122028
2024-12,Waverton  Station,Train,Exit,45378
2024-12,Waverton  Station,Train,Entry,42524
2024-12,Wentworth Falls  Station,Train,Exit,6774
2024-12,Wentworth Falls  Station,Train,Entry,7141
2024-12,Wentworthville  Station,Train,Exit,72901
2024-12,Wentworthville  Station,Train,Entry,78652
2024-12,Werrington  Station,Train,Exit,21917
2024-12,Werrington  Station,Train,Entry,24918
2024-12,West Ryde  Station,Train,Exit,96852
2024-12,West Ryde  Station,Train,Entry,96942
2024-12,Westmead  Station,Train,Exit,123551
2024-12,Westmead  Station,Train,Entry,131828
2024-12,Windsor  Station,Train,Exit,13096
2024-12,Windsor  Station,Train,Entry,13668
2024-12,Wingello  Station,Train,Exit,Less than 50
2024-12,Wingello  Station,Train,Entry,Less than 50
2024-12,Wirragulla  Station,Train,Exit,Less than 50
2024-12,Wirragulla  Station,Train,Entry,Less than 50
2024-12,Wolli Creek  Station,Train,Exit,204930
2024-12,Wolli Creek  Station,Train,Entry,207717
2024-12,Wollongong  Station,Train,Exit,40643
2024-12,Wollongong  Station,Train,Entry,40809
2024-12,Wollstonecraft  Station,Train,Exit,38500
2024-12,Wollstonecraft  Station,Train,Entry,42311
2024-12,Wombarra  Station,Train,Exit,569
2024-12,Wombarra  Station,Train,Entry,611
2024-12,Wondabyne  Station,Train,Exit,383
2024-12,Wondabyne  Station,Train,Entry,317
2024-12,Woodford  Station,Train,Exit,1437
2024-12,Woodford  Station,Train,Entry,1468
2024-12,Woolooware  Station,Train,Exit,21117
2024-12,Woolooware  Station,Train,Entry,22847
2024-12,Woonona  Station,Train,Exit,1923
2024-12,Woonona  Station,Train,Entry,2464
2024-12,Woy Woy  Station,Train,Exit,69918
2024-12,Woy Woy  Station,Train,Entry,69188
2024-12,Wyee  Station,Train,Exit,4811
2024-12,Wyee  Station,Train,Entry,5589
2024-12,Wynyard  Station,Train,Exit,1080579
2024-12,Wynyard  Station,Train,Entry,983923
2024-12,Wyong  Station,Train,Exit,23970
2024-12,Wyong  Station,Train,Entry,25321
2024-12,Yagoona  Station,Train,Exit,15409
2024-12,Yagoona  Station,Train,Entry,17550
2024-12,Yennora  Station,Train,Exit,21956
2024-12,Yennora  Station,Train,Entry,21354
2024-12,Yerrinbool  Station,Train,Exit,335
2024-12,Yerrinbool  Station,Train,Entry,340
2024-12,Zig Zag  Station,Train,Exit,Less than 50
2024-12,Zig Zag  Station,Train,Entry,Less than 50
`;

const parsed = [];
const data = raw.trim().split("\n").filter(Boolean);
const columns = data
    .shift()
    .split(",")
    .map((col) => col.trim());

data.forEach((row) => {
    const values = row.split(",").map((val) => val.trim());
    let obj = {};
    columns.forEach((column, index) => {
        obj[column] = values[index];
    });
    const match = parsed.find((item) => item["Station"] === obj["Station"]);
    if (match) {
        if (
            obj["Trip"] === "Less than 50" ||
            match["Trip"] === "Less than 50"
        ) {
            obj["Trip"] = 50;
            match["Less_Than"] = true;
        }
        match["Trip"] += obj["Trip"];
    }
    delete obj["Entry_Exit"];
    parsed.push(obj);
});

console.log(parsed);
