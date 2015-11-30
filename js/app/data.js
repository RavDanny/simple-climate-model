/**
 * Stores data extracted from the .xls files.
 *
 * Converted via https://shancarter.github.io/mr-data-converter/
 *
 * Probably won't be permanent, not a good way of doing this - especially if user-set custom data needs to be handled in the future.
 */

// each first-dimensional element represents a ROW from the xls file
var XLS_RCPH =
[
  [1850,1860,1870,1880,1890,1900,1910,1920,1930,1940,1950,1960,1970,1980,1990,2000,2005,2010,2020,2030,2040,2050,2060,2070,2080,2090,2100],
  [0.17236,0.17420,0.18110,0.19093,0.23740,0.24221,0.29375,0.38317,0.48070,0.56470,0.54639,0.62158,0.82695,1.14830,1.51671,1.72349,1.90112,2.08864,2.48004,2.85355,3.14559,3.52117,3.90538,4.44275,4.93215,5.25544,5.48141],
  [0.14835,0.17647,0.20072,0.26270,0.32307,0.35390,0.42487,0.48344,0.55795,0.60906,0.61767,0.71644,0.86182,1.08483,1.32018,1.54279,1.68979,1.83551,2.11670,2.37372,2.64800,2.96609,3.32880,3.72855,4.14642,4.50294,4.78313],
  [0.04754,0.05579,0.06480,0.07373,0.08421,0.09728,0.12129,0.14959,0.17906,0.20455,0.23319,0.28017,0.34174,0.40949,0.46528,0.48518,0.48610,0.49256,0.49778,0.50199,0.51888,0.53854,0.55433,0.56174,0.55288,0.50592,0.44212],
  [0.00996,0.01339,0.01663,0.01953,0.02260,0.02498,0.02906,0.03583,0.04258,0.04847,0.05618,0.06436,0.07730,0.09797,0.12440,0.14452,0.15641,0.16778,0.19005,0.21183,0.23715,0.26536,0.29577,0.32769,0.35948,0.38914,0.41561],
  [0.00000,0.00007,0.00013,0.00021,0.00032,0.00051,0.00078,0.00128,0.00210,0.00347,0.00801,0.02211,0.06927,0.17402,0.28778,0.33179,0.34041,0.34403,0.34637,0.33871,0.31622,0.27232,0.23585,0.21106,0.19361,0.17987,0.16810],
  [-0.03349,-0.07151,-0.10119,-0.16524,-0.19280,-0.23446,-0.28225,-0.28697,-0.30100,-0.30085,-0.36867,-0.46149,-0.52319,-0.61802,-0.68092,-0.78080,-0.77159,-0.75125,-0.67085,-0.57270,-0.57466,-0.52115,-0.50936,-0.38630,-0.32024,-0.32243,-0.32754],
  [0.17236,0.17420,0.18110,0.19093,0.23740,0.24221,0.29375,0.38317,0.48070,0.56470,0.54639,0.62158,0.82695,1.14830,1.51671,1.72349,1.90492,2.12627,2.57885,3.00466,3.41106,3.76558,4.02147,4.18821,4.25561,4.26536,4.30904],
  [0.14835,0.17647,0.20072,0.26270,0.32307,0.35390,0.42487,0.48344,0.55795,0.60906,0.61767,0.71644,0.86182,1.08483,1.32018,1.54279,1.68979,1.83659,2.14163,2.45333,2.76799,3.06270,3.30458,3.46540,3.53507,3.56693,3.61779],
  [0.04754,0.05579,0.06480,0.07373,0.08421,0.09728,0.12129,0.14959,0.17906,0.20455,0.23319,0.28017,0.34174,0.40949,0.46528,0.48518,0.48610,0.49182,0.50443,0.51448,0.51824,0.51440,0.50158,0.48001,0.45179,0.42971,0.41514],
  [0.00996,0.01339,0.01663,0.01953,0.02260,0.02498,0.02906,0.03583,0.04258,0.04847,0.05618,0.06436,0.07730,0.09797,0.12440,0.14452,0.15641,0.16737,0.18945,0.21164,0.23319,0.25277,0.26992,0.28476,0.29714,0.30761,0.31701],
  [0.00000,0.00007,0.00013,0.00021,0.00032,0.00051,0.00078,0.00128,0.00210,0.00347,0.00801,0.02211,0.06927,0.17402,0.28778,0.33179,0.34041,0.34379,0.34797,0.34371,0.32261,0.27927,0.24172,0.21472,0.19735,0.18763,0.18296],
  [-0.03349,-0.07151,-0.10119,-0.16524,-0.19280,-0.23446,-0.28225,-0.28697,-0.30100,-0.30085,-0.36867,-0.46149,-0.52319,-0.61802,-0.68092,-0.78080,-0.76778,-0.71329,-0.60463,-0.51849,-0.43097,-0.34356,-0.29633,-0.25669,-0.22573,-0.22653,-0.22386],
  [0.17236,0.17420,0.18110,0.19093,0.23740,0.24221,0.29375,0.38317,0.48070,0.56470,0.54639,0.62158,0.82695,1.14830,1.51671,1.72349,1.90379,2.12900,2.58357,2.86164,2.99868,2.99766,2.91844,2.85442,2.80813,2.75897,2.71374],
  [0.14835,0.17647,0.20072,0.26270,0.32307,0.35390,0.42487,0.48344,0.55795,0.60906,0.61767,0.71644,0.86182,1.08483,1.32018,1.54279,1.68979,1.83956,2.15393,2.39454,2.51284,2.54821,2.54113,2.49495,2.42907,2.36512,2.30658],
  [0.04754,0.05579,0.06480,0.07373,0.08421,0.09728,0.12129,0.14959,0.17906,0.20455,0.23319,0.28017,0.34174,0.40949,0.46528,0.48518,0.48610,0.49463,0.47413,0.42415,0.39533,0.36319,0.32667,0.30373,0.29277,0.28503,0.27837],
  [0.00996,0.01339,0.01663,0.01953,0.02260,0.02498,0.02906,0.03583,0.04258,0.04847,0.05618,0.06436,0.07730,0.09797,0.12440,0.14452,0.15641,0.16733,0.18677,0.20253,0.21624,0.22557,0.22934,0.23101,0.23225,0.23250,0.23170],
  [0.00000,0.00007,0.00013,0.00021,0.00032,0.00051,0.00078,0.00128,0.00210,0.00347,0.00801,0.02211,0.06927,0.17402,0.28778,0.33179,0.34041,0.34436,0.34567,0.32893,0.30102,0.27345,0.25325,0.24263,0.23633,0.22948,0.21992],
  [-0.03349,-0.07151,-0.10119,-0.16524,-0.19280,-0.23446,-0.28225,-0.28697,-0.30100,-0.30085,-0.36867,-0.46149,-0.52319,-0.61802,-0.68092,-0.78080,-0.76891,-0.71688,-0.57694,-0.48852,-0.42674,-0.41276,-0.43195,-0.41792,-0.38228,-0.35317,-0.32284],
  [0.17236,0.17420,0.18110,0.19093,0.23740,0.24221,0.29375,0.38317,0.48070,0.56470,0.54639,0.62158,0.82695,1.14830,1.51671,1.72349,1.90641,2.15445,2.66468,3.27633,3.99274,4.76159,5.53919,6.29932,7.01971,7.74163,8.38822],
  [0.14835,0.17647,0.20072,0.26270,0.32307,0.35390,0.42487,0.48344,0.55795,0.60906,0.61767,0.71644,0.86182,1.08483,1.32018,1.54279,1.68979,1.84031,2.20634,2.62612,3.09955,3.64000,4.23671,4.85615,5.46368,6.04394,6.59241],
  [0.04754,0.05579,0.06480,0.07373,0.08421,0.09728,0.12129,0.14959,0.17906,0.20455,0.23319,0.28017,0.34174,0.40949,0.46528,0.48518,0.48610,0.49722,0.55208,0.62531,0.71486,0.82094,0.91740,0.98358,1.02750,1.06612,1.09370],
  [0.00996,0.01339,0.01663,0.01953,0.02260,0.02498,0.02906,0.03583,0.04258,0.04847,0.05618,0.06436,0.07730,0.09797,0.12440,0.14452,0.15641,0.16774,0.19461,0.22719,0.26416,0.30363,0.34323,0.38214,0.42030,0.45835,0.49598],
  [0.00000,0.00007,0.00013,0.00021,0.00032,0.00051,0.00078,0.00128,0.00210,0.00347,0.00801,0.02211,0.06927,0.17402,0.28778,0.33179,0.34041,0.34533,0.35985,0.37063,0.36610,0.33851,0.31603,0.30338,0.29718,0.29450,0.29447],
  [-0.03349,-0.07151,-0.10119,-0.16524,-0.19280,-0.23446,-0.28225,-0.28697,-0.30100,-0.30085,-0.36867,-0.46149,-0.52319,-0.61802,-0.68092,-0.78080,-0.76629,-0.69615,-0.64820,-0.57292,-0.45195,-0.34149,-0.27418,-0.22593,-0.18895,-0.12128,-0.08835],

  [1850.00000,1860.00000,1870.00000,1880.00000,1890.00000,1900.00000,1910.00000,1920.00000,1930.00000,1940.00000,1950.00000,1960.00000,1970.00000,1980.00000,1990.00000,2000.00000,2005.00000,2010.00000,2020.00000,2030.00000,2040.00000,2050.00000,2060.00000,2070.00000,2080.00000,2090.00000,2100.00000],
  [284.72500,286.22500,287.52500,290.70000,294.17500,295.80000,299.70000,303.02500,307.22500,310.37500,310.75000,316.27250,324.98500,338.36000,353.85500,368.86500,378.81250,389.07150,409.36026,428.87629,450.69811,477.67043,510.63443,549.81989,594.25683,635.64876,669.72317],
  [790.97924,805.25000,821.00000,837.00000,856.00000,879.50000,923.75000,977.75000,1036.25000,1088.25000,1147.25000,1247.00000,1385.75000,1547.75000,1693.63000,1751.02250,1753.73500,1768.68800,1785.79130,1795.92360,1840.65120,1894.85030,1939.39090,1961.82580,1940.16570,1819.14210,1649.39620],
  [275.42506,276.40000,277.37500,278.20000,279.10000,279.80000,280.97500,282.92500,284.97500,286.72500,289.00000,291.40000,295.20000,301.38250,309.48500,315.85000,319.44000,323.07147,330.20175,337.15862,345.33907,354.59228,364.71388,375.51480,386.46501,396.85944,406.26529],
  [287.77976,289.91598,291.89791,295.76950,300.06405,302.57933,308.15630,313.60095,320.12446,325.32184,327.92113,337.17000,351.32841,371.94514,395.32369,415.85781,428.65338,442.37987,469.32428,494.97421,524.96655,562.02530,606.67872,658.82717,715.96138,764.28815,799.86818],
  [284.47783,284.54001,284.76049,284.54128,287.04595,286.79938,288.48048,294.37098,298.61802,304.10083,301.92017,302.54075,311.80753,330.86448,349.91054,364.36712,375.01356,387.60742,415.76955,445.56175,470.71807,505.13208,542.44710,599.42514,656.94130,698.56587,728.12370],
  [284.72500,286.22500,287.52500,290.70000,294.17500,295.80000,299.70000,303.02500,307.22500,310.37500,310.75000,316.27250,324.98500,338.36000,353.85500,368.86500,378.81250,389.12785,411.12868,435.04594,460.84499,486.53532,508.87135,524.30217,531.13797,533.74072,538.35830],
  [790.97924,805.25000,821.00000,837.00000,856.00000,879.50000,923.75000,977.75000,1036.25000,1088.25000,1147.25000,1247.00000,1385.75000,1547.75000,1693.63000,1751.02250,1753.73500,1767.09780,1801.43360,1829.90830,1841.80290,1833.09440,1800.51120,1744.73880,1671.82860,1613.55430,1576.34580],
  [275.42506,276.40000,277.37500,278.20000,279.10000,279.80000,280.97500,282.92500,284.97500,286.72500,289.00000,291.40000,295.20000,301.38250,309.48500,315.85000,319.44000,322.96652,329.98341,337.11811,344.13879,350.60754,356.32237,361.31358,365.51103,369.06775,372.27383],
  [287.77976,289.91598,291.89791,295.76950,300.06405,302.57933,308.15630,313.60095,320.12446,325.32184,327.92113,337.17000,351.32841,371.94514,395.32369,415.85781,428.65338,442.35294,471.95823,503.79914,537.23515,569.71528,596.99345,614.76966,621.47985,623.85482,629.59152],
  [284.47783,284.54001,284.76049,284.54128,287.04595,286.79938,288.48048,294.37098,298.61802,304.10083,301.92017,302.54075,311.80753,330.86448,349.91054,364.36712,375.14774,390.16358,423.26850,457.45837,492.99769,526.37589,551.91183,569.17631,576.42655,576.76615,580.90945],
  [284.72500,286.22500,287.52500,290.70000,294.17500,295.80000,299.70000,303.02500,307.22500,310.37500,310.75000,316.27250,324.98500,338.36000,353.85500,368.86500,378.81250,389.28521,412.06783,430.78315,440.22240,442.70046,441.67274,437.48062,431.61659,426.00472,420.89546],
  [790.97924,805.25000,821.00000,837.00000,856.00000,879.50000,923.75000,977.75000,1036.25000,1088.25000,1147.25000,1247.00000,1385.75000,1547.75000,1693.63000,1751.02250,1753.73500,1773.12780,1730.51800,1600.21540,1527.09760,1451.53980,1365.10560,1310.65060,1285.40460,1268.28160,1253.62840],
  [275.42506,276.40000,277.37500,278.20000,279.10000,279.80000,280.97500,282.92500,284.97500,286.72500,289.00000,291.40000,295.20000,301.38250,309.48500,315.85000,319.44000,322.95654,329.20830,334.29728,338.75834,341.89562,343.19171,343.74376,344.16138,344.26085,344.01630],
  [287.77976,289.91598,291.89791,295.76950,300.06405,302.57933,308.15630,313.60095,320.12446,325.32184,327.92113,337.17000,351.32841,371.94514,395.32369,415.85781,428.65338,442.76093,470.82072,490.69893,501.43259,503.32053,499.94405,494.22383,487.71734,481.39405,475.19275],
  [284.47783,284.54001,284.76049,284.54128,287.04595,286.79938,288.48048,294.37098,298.61802,304.10083,301.92017,302.54075,311.80753,330.86448,349.91054,364.36712,375.10733,390.12466,423.46397,445.15424,455.97977,455.44144,447.83410,441.34334,436.47529,431.47294,426.96270],
  [284.72500,286.22500,287.52500,290.70000,294.17500,295.80000,299.70000,303.02500,307.22500,310.37500,310.75000,316.27250,324.98500,338.36000,353.85500,368.86500,378.81250,389.32416,415.78022,448.83485,489.43545,540.54279,603.52045,677.07762,758.18230,844.80471,935.87437],
  [790.97924,805.25000,821.00000,837.00000,856.00000,879.50000,923.75000,977.75000,1036.25000,1088.25000,1147.25000,1247.00000,1385.75000,1547.75000,1693.63000,1751.02250,1753.73500,1778.67490,1923.67100,2132.01350,2399.24450,2739.98470,3076.13450,3322.34070,3489.83870,3638.59190,3750.68460],
  [275.42506,276.40000,277.37500,278.20000,279.10000,279.80000,280.97500,282.92500,284.97500,286.72500,289.00000,291.40000,295.20000,301.38250,309.48500,315.85000,319.44000,323.06113,331.51441,341.96012,354.03477,367.21965,380.71612,394.22720,407.70193,421.35734,435.10615],
  [287.77976,289.91598,291.89791,295.76950,300.06405,302.57933,308.15630,313.60095,320.12446,325.32184,327.92113,337.17000,351.32841,371.94514,395.32369,415.85781,428.65338,443.06521,482.75861,534.35305,599.34291,683.06168,785.60378,902.52893,1029.93550,1167.74790,1313.45120],
  [284.47783,284.54001,284.76049,284.54128,287.04595,286.79938,288.48048,294.37098,298.61802,304.10083,301.92017,302.54075,311.80753,330.86448,349.91054,364.36712,375.19996,392.05839,429.09113,479.08885,545.79430,628.43015,725.22685,834.84352,954.05292,1091.07230,1231.44530],

  [1850.00000,1860.00000,1870.00000,1880.00000,1890.00000,1900.00000,1910.00000,1920.00000,1930.00000,1940.00000,1950.00000,1960.00000,1970.00000,1980.00000,1990.00000,2000.00000,2005.00000,2010.00000,2020.00000,2030.00000,2040.00000,2050.00000,2060.00000,2070.00000,2080.00000,2090.00000,2100.00000],
  [0.50776,0.60997,0.61664,0.85724,0.96775,1.18721,1.64098,1.65328,1.94888,2.06583,2.52233,3.76928,5.27311,6.35721,7.46348,7.88380,9.16650,9.38890,9.35670,9.43790,10.84030,12.58000,14.56600,16.47670,17.52470,14.55560,13.93470],
  [41.18418,12.86275,39.89494,67.44912,96.10657,109.60250,120.79372,134.91777,145.58172,157.71890,174.37590,222.31463,250.69365,288.10693,315.95082,300.41073,313.64512,322.51805,310.14185,325.15958,343.48984,355.04163,363.92808,359.93129,339.90979,269.99810,245.96273],
  [0.66236,0.75833,0.76645,1.23219,1.32868,1.46539,1.76185,2.05651,2.36483,2.59637,5.04960,6.15777,9.32938,11.09647,11.92036,11.71751,12.07501,12.86277,12.46080,13.85670,15.28733,16.55830,17.85316,18.90617,19.42679,19.42239,19.28143],
  [0.50776,0.60997,0.61664,0.85724,0.96775,1.18721,1.64098,1.65328,1.94888,2.06583,2.52233,3.76928,5.27311,6.35721,7.46348,7.88380,9.16650,9.51800,10.21240,11.16960,11.53660,11.27990,9.58520,7.22190,4.19000,4.21960,4.24930],
  [41.18418,12.86275,39.89494,67.44912,96.10657,109.60250,120.79372,134.91777,145.58172,157.71890,174.37590,222.31463,250.69365,288.10693,315.95082,300.54932,301.55373,309.35722,324.97686,331.83985,333.95258,331.31508,317.58812,300.74587,280.78779,273.41860,266.05136],
  [0.66236,0.75833,0.76645,1.23219,1.32868,1.46539,1.76185,2.05651,2.36483,2.59637,5.04960,6.15777,9.32938,11.09647,11.92036,11.71767,12.07517,12.36431,12.94119,13.46997,13.65367,13.49590,13.36720,13.13604,12.80211,12.77461,12.74696],
  [0.50776,0.60997,0.61664,0.85724,0.96775,1.18721,1.64098,1.65328,1.94888,2.06583,2.52233,3.76928,5.27311,6.35721,7.46348,7.88380,9.16650,9.87790,10.26040,7.94570,5.02380,3.38670,2.03450,0.65380,0.11690,-0.26800,-0.41960],
  [41.18418,12.86275,39.89494,67.44912,96.10657,109.60250,120.79372,134.91777,145.58172,157.71890,174.37590,222.31463,250.69365,288.10693,315.95082,300.13794,309.09152,329.82828,253.03160,233.38169,224.01931,189.29153,166.46140,161.30282,155.07067,148.43386,142.04710],
  [0.66236,0.75833,0.76645,1.23219,1.32868,1.46539,1.76185,2.05651,2.36483,2.59637,5.04960,6.15777,9.32938,11.09647,11.92036,11.71767,12.07517,12.31686,11.57090,11.47929,11.27846,9.81609,8.98559,9.02173,8.82106,8.58110,8.30076],
  [0.50776,0.60997,0.61664,0.85724,0.96775,1.18721,1.64098,1.65328,1.94888,2.06583,2.52233,3.76928,5.27311,6.35721,7.46348,7.88380,9.16650,9.96940,12.44400,14.55400,17.43160,20.78060,24.09720,26.37420,27.71510,28.53070,28.81710],
  [41.18418,12.86275,39.89494,67.44912,96.10657,109.60250,120.79372,134.91777,145.58172,157.71890,174.37590,222.31463,250.69365,288.10693,315.95082,300.43783,338.53013,369.66915,438.82851,498.94131,586.04547,676.78970,745.14918,780.07940,821.34562,870.70792,887.56395],
  [0.66236,0.75833,0.76645,1.23219,1.32868,1.46539,1.76185,2.05651,2.36483,2.59637,5.04960,6.15777,9.32938,11.09647,11.92036,11.71767,12.07517,12.81139,15.01547,16.93827,18.90130,20.10784,21.09109,21.90603,22.87780,24.03139,24.79023],

  [1850.00000,1860.00000,1870.00000,1880.00000,1890.00000,1900.00000,1910.00000,1920.00000,1930.00000,1940.00000,1950.00000,1960.00000,1970.00000,1980.00000,1990.00000,2000.00000,2005.00000,2010.00000,2020.00000,2030.00000,2040.00000,2050.00000,2060.00000,2070.00000,2080.00000,2090.00000,2100.00000],
  [4.54293,3.19973,5.04725,8.38235,13.75708,24.01550,35.17434,38.85775,46.60566,54.84853,62.50678,94.33976,126.88853,130.45236,127.99282,107.70301,108.48406,107.44047,95.07174,80.00000,83.27280,74.36519,69.83725,44.60038,30.00784,25.17397,20.87709],
  [4.54293,3.19973,5.04725,8.38235,13.75708,24.01550,35.17434,38.85775,46.60566,54.84853,62.50678,94.33976,126.88853,130.45236,127.99282,107.75598,116.37371,111.87475,102.87684,86.77573,69.60265,51.35451,41.42004,32.79555,25.48010,23.99308,22.50659],
  [4.54293,3.19973,5.04725,8.38235,13.75708,24.01550,35.17434,38.85775,46.60566,54.84853,62.50678,94.33976,126.88853,130.45236,127.99282,107.49994,109.90677,107.90257,85.62079,57.79943,39.32010,31.14724,27.39741,23.73047,19.50829,15.65011,12.90964],
  [4.54293,3.19973,5.04725,8.38235,13.75708,24.01550,35.17434,38.85775,46.60566,54.84853,62.50678,94.33976,126.88853,130.45236,127.99282,107.70063,114.01842,101.50545,96.09631,85.33081,65.55997,52.21969,45.40871,40.12685,36.88937,28.95151,25.71102]
];

var XLS_RCPH_ROWS = XLS_RCPH.length;
var XLS_RCPH_COLS = XLS_RCPH[0].length;

var TAU_LINE = [0.0786,0.0282,0.0013,0.0015,0.0014,0.0012,0.0014,0.0019,0.0019,0.0015,0.0014,0.0016,0.0019,0.0016,0.0012,0.0011,0.0013,0.0016,0.0012,0.0008,0.0008,0.0007,0.0006,0.0005,0.0004,0.0006,0.0009,0.0006,0.0002,0.0001,0.0000,0,0,0,-0.0000,0.0002,0,0,0.0001,0.0000,-0.0000,0,0,0,0.0001,0.0001,0,0.0000,0.0003,0.0000,0,-0.0000,0.0003,0.0002,0.0003,0,0,0,0.0002,0.0002,0.0002,0.0002,0.0002,0.0002,0.0002,0.0002,0.0002,0.0002,0.0083,0.0312,0.0542,0.0641,0.0675,0.0712,0.0750,0.0787,0.0830,0.0836,0.0760,0.0680,0.0663,0.0678,0.0700,0.0723,0.0741,0.0758,0.0774,0.0795,0.0817,0.0741,0.0464,0.0165,0.0039,0.0007,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.0008,0.0009,0.0008,0.0000,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.0035,0.0120,0.0178,0.0194,0.0206,0.0217,0.0227,0.0238,0.0252,0.0266,0.0275,0.0255,0.0178,0.0093,0.0062,0.0057,0.0056,0.0052,0.0044,0.0039,0.0035,0.0030,0.0026,0.0024,0.0023,0.0019,0.0015,0.0014,0.0013,0.0006,0,0,0,0,0,0,0,0,0.0005,0.0006,0.0004,0.0003,0.0001,0,0,0,0.0001,0,0,0,0,0.0001,0.0000,0,0,0,-0.0000,0.0002,0,0,0.0001,0.0000,-0.0000,0,0,0,0.0001,0.0001,0,0.0000,0.0003,0.0000,0,0,0.0002,0.0003,0.0003,0,0,0,0.0002,0.0002,0.0002,0.0002,0.0002,0.0002,0.0002,0.0002,0.0005,0.0008,0.0008,0.0012,0.0013,0.0010,0.0014,0.0014,0.0009,0.0006,0.0006,0.0006,0.0006,0.0006,0.0003,0,0.0002,0.0005,0.0005,0.0005,0.0005,0.0005,0.0005,0.0005,0.0005,0.0005,0.0005,0.0002,0,0.0001,0.0004,0.0004,0.0007,0.0011,0.0011,0.0011,0.0012,0.0012,0.0013,0.0013,0.0014,0.0014,0.0011,0.0014,0.0027,0.0035,0.0037,0.0038,0.0040,0.0042,0.0043,0.0045,0.0047,0.0048,0.0050,0.0046,0.0031,0.0019,0.0015,0.0011,0.0007,0.0009,0.0008,0.0004,0.0005,0.0008,0.0004,0,0,0,0,0.0001,0.0000,0,0,0,0,0,0.0001,0.0001,0.0001,0.0009,0.0043,0.0083,0.0098,0.0101,0.0109,0.0118,0.0124,0.0129,0.0135,0.0126,0.0088,0.0049,0.0038,0.0040,0.0036,0.0031,0.0029,0.0028,0.0026,0.0027,0.0029,0.0025,0.0020,0.0018,0.0017,0.0015,0.0013,0.0012,0.0013,0.0015,0.0011,0.0006,0.0004,0.0003,0.0007,0.0015,0.0015,0.0011,0.0010,0.0009,0.0011,0.0014,0.0011,0.0007,0.0006,0.0008,0.0011,0.0007,0.0003,0.0003,0.0005,0.0007,0.0004,0.0003,0.0006,0.0002,0,0.0001,0.0003,0.0003,0.0002,0.0002,0.0004,0.0004,0.0001,0.0004,0.0004,0.0000,-0.0000,0,0.0002,0.0005,0.0005,0.0005,0.0005,0.0005,0.0005,0.0005,0.0005,0.0005,0.0005,0.0005,0.0005,0.0005,0.0002,0,0.0001,0.0862,0.1950,0.1260,0.0146,0,0,0,0,0.0658,0.2604,0.4179,0.4313,0.3976,0.3170,0.2225,0.2016,0.1544,0.0799,0.0770,0.0708,0.0314,0.0232,0.0073,0,0,0,0,0,0,0,0,0,0,0,0.0043,0.0039,0.0043,0,0,0,0,0,0,0,0,0.1549,0.3158,0.1555,0,0,0,0,0,0,0,0.0075,0.0214,0.0084,0,0,0,0,0,0,0,0,0,0.0118,0.0510,0.0872,0.1093,0.0955,0.0602,0.0419,0.0303,0.0059,0,0,0,0,0,0,0,0.0243,0.0738,0.1022,0.0979,0.0816,0.0742,0.0559,0.0143,0,0,0,0.0192,0.0465,0.0559,0.0577,0.0449,0.0113,0,0,0,0,0,0,0,0.0059,0.0157,0.0198,0.0260,0.0387,0.0461,0.0350,0.0096,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.0001,0,0,0.0001,0.0001,0,0,0.0166,0.0339,0.0222,0.0306,0.0691,0.0789,0.0615,0.0528,0.0404,0.0113,0,0,0,0,0,0,0,0.0058,0.0144,0.0181,0.0234,0.0340,0.0405,0.0309,0.0086,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-0.0000,0,0,0,0,0.0000,0,0,0,-0.0000,0.0002,0.0002,0.0002,0,0,0.0003,0.0003,0,0,0,0.0073,0.0200,0.0255,0.0295,0.0340,0.0264,0.0081,0.0020,0.0409,0.1343,0.2089,0.2155,0.1991,0.1589,0.1112,0.1006,0.0772,0.0403,0.0387,0.0353,0.0156,0.0118,0.0037,0,0,0,0,0,0,0,0,0,0,0,0.0023,0.0023,0.0023,0,0,0,0,0,0,0,0,0.0021,0.0030,0.0038,0.0063,0.0060,0,0,0,0.0007,0.0004,0.0133,0.0253,0.0121,0,0,0,0,0.0068,0.0196,0.0267,0.0233,0.0144,0.0096,0.0070,0.0015,0,0.0066,0.0236,0.0342,0.0267,0.0079,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.0013,0.0073,0.0113,0.0064,0.0018,0.0008,0,0,0,0,0,0,0,0.0014,0.0027,0.0012,0.0002,0.0001,0,0,0.0001,0.0000,0,0,0,0.0014,0.0061,0.0060,0.0041,0.0416,0.1212,0.1686,0.1346,0.0503,0.0055,0.0089,0.0155,0.0198,0.0145,0.0021,0.0038,0.0123,0.0044,0,0,0,0,0,0,0,0.0004,0.0009,0.0002,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.0018,0.0046,0.0048,0.0040,0.0014,0,0,0,0.0006,0.0014,0.0020,0.0026,0.0027,0.0033,0.0053,0.0058,0.0021,0,0,0,0,0,0.0001,0.0000,0,0,0.0021,0.0047,0.0056,0.0056,0.0025,0,0,0,0.0000,0.0003,0,0,0.0006,0.0030,0.0071,0.0080,0.0037,0.0004,0,0,0,0.0000,0.0003,0,0,0,0.0001,0.0064,0.0251,0.0430,0.0492,0.0520,0.0400,0.0130,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.0000,-0.0000,0,0,0,0,0,-0.0000,0.0002,0,0,0.0001,0.0069,0.0141,0.0087,0.0039,0.0038,0.0038,0.0073,0.0080,0.0034,0.0008,0.0016,0.0012,0.0004,-0.0000,0.0013,0.0040,0.0051,0.0043,0.0014,0,0,0,0,0,-0.0000,0,0,0,0,0.0042,0.0101,0.0090,0.0047,0.0015,0,0,0,0,-0.0000,0,0,0,0,0.0000,0,0,0,-0.0000,0.0026,0.0074,0.0092,0.0082,0.0085,0.0138,0.0194,0.0171,0.0123,0.0076,0.0035,0.0087,0.0162,0.0172,0.0180,0.0136,0.0064,0.0061,0.0097,0.0132,0.0118,0.0061,0.0025,0.0008,0,0,0,0,0.0013,0.0045,0.0039,0.0019,0.0020,0.0021,0.0007,0.0007,0.0038,0.0057,0.0049,0.0046,0.0040,0.0027,0.0029,0.0026,0.0012,0.0010,0.0005,0.0015,0.0057,0.0108,0.0133,0.0118,0.0118,0.0163,0.0202,0.0187,0.0152,0.0110,0.0062,0.0050,0.0060,0.0044,0.0013,0.0008,0.0017,0.0010,0,0,0,0,0,0,0,0,0,0,0,0.0019,0.0055,0.0074,0.0059,0.0054,0.0085,0.0085,0.0032,0.0014,0.0035,0.0050,0.0054,0.0040,0.0018,0.0007,0.0005,0.0006,0.0013,0.0018,0.0018,0.0014,0.0009,0.0011,0.0010,0.0003,0.0013,0.0053,0.0069,0.0050,0.0051,0.0044,0.0010,0,0,0.0001,0,0,0,0.0018,0.0065,0.0075,0.0045,0.0021,0.0023,0.0044,0.0082,0.0106,0.0074,0.0051,0.0073,0.0085,0.0070,0.0065,0.0054,0.0020,-0.0000,0,0.0020,0.0054,0.0040,0.0027,0.0023,0.0004,0,0,0,0.0009,0.0032,0.0048,0.0050,0.0033,0.0012,0.0007,0.0009,0.0004,0.0021,0.0043,0.0026,0.0010,0.0006,0,0,0,-0.0000,0,0,0,0.0022,0.0042,0.0020,0.0000,0.0033,0.0078,0.0071,0.0043,0.0043,0.0051,0.0050,0.0048,0.0119,0.0189,0.0111,0.0038,0.0050,0.0041,0.0010,0,0,0,0,0.0015,0.0036,0.0036,0.0012,0,0,0,0,0,0,0.0001,0,0.0013,0.0041,0.0047,0.0024,0.0002,0.0012,0.0043,0.0055,0.0042,0.0012,0,0,0.0001,0,0,0,0,0.0003,0.0016,0.0010,0.0003,0.0012,0.0051,0.0080,0.0036,0,0,0,0,0,0.0001,0.0000,0,0,0,0.0081,0.0176,0.0102,0.0015,0.0004,0,0,0,0,0.0001,-0.0000,0,0,0,0.0001,0,0,0,0,0.0011,0.0067,0.0106,0.0082,0.0076,0.0095,0.0088,0.0061,0.0028,0.0005,0,0.0000,0.0005,0.0000,0.0004,0.0039,0.0060,0.0023,0,0.0001,0,0,0,-0.0000,0,0,0.0002,0.0004,0,0,0,0.0043,0.0123,0.0111,0.0030,0.0037,0.0095,0.0070,0.0022,0.0024,0.0026,0.0020,0.0022,0.0027,0.0024,0.0009,0,0,0,0,0,0.0000,0.0051,0.0101,0.0085,0.0085,0.0087,0.0047,0.0037,0.0059,0.0055,0.0034,0.0021,0.0005,0,0,0,0,0,0,0,0,0,0,0,-0.0000,0,0.0000,0.0015,0.0046,0.0058,0.0021,0,0,0,0,0.0000,0,0.0001,0.0001,0,0,0.0002,0.0002,0.0001,0.0001,0.0000,-0.0000,0,0,0,0.0001,0.0004,0.0004,0.0001,0,0,0,-0.0000,0.0003,0.0002,0.0003,0.0003,0,0,0,0.0002,0.0002,0.0002,0.0002,0.0002,0.0002,0.0002,0.0002,0.0002,0.0002,0.0002,0.0002,0.0002,0.0002,0.0002,0.0002,0.0002,0.0002,0.0041,0.0124,0.0177,0.0197,0.0212,0.0218,0.0187,0.0112,0.0070,0.0052,0.0055,0.0186,0.0315,0.0223,0.0062,0.0017,0.0039,0.0115,0.0163,0.0106,0.0038,-0.0000,0,0.0168,0.0407,0.0312,0.0074,0.0036,0.0174,0.0245,0.0116,0.0031,0.0022,0.0018,0.0049,0.0085,0.0266,0.0928,0.1750,0.1764,0.1219,0.0993,0.1330,0.1980,0.1807,0.0748,0.0117,0.0028,0.0060,0.0248,0.0566,0.1059,0.1308,0.0790,0.0171,0.0051,0.0136,0.0167,0.0130,0.0081,0.0028,0.0010,0.0030,0.0021,0,0,0,0.0028,0.0164,0.0314,0.0260,0.0090,0.0017,0.0011,0.0010,0.0008,0.0004,0.0000,0,0,0,0,0,0,0,0.0016,0.0128,0.0243,0.0300,0.0327,0.0341,0.0255,0.0070,0,0,0,0,0.0083,0.0430,0.0825,0.1001,0.1056,0.1112,0.0917,0.0449,0.0196,0.0182,0.0165,0.0152,0.0140,0.0123,0.0110,0.0101,0.0090,0.0081,0.0066,0.0049,0.0033,0.0021,0.0010,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.0022,0.0052,0.0023,0,0,0,0,0,0,0,0.0028,0.0063,0.0078,0.0078,0.0078,0.0084,0.0091,0.0094,0.0097,0.0098,0.0097,0.0103,0.0110,0.0113,0.0113,0.0113,0.0119,0.0126,0.0129,0.0132,0.0133,0.0132,0.0138,0.0145,0.0148,0.0151,0.0152,0.0152,0.0157,0.0281,0.0538,0.0693,0.0727,0.0763,0.0801,0.0610,0.0171,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.0016,0.0097,0.0212,0.0267,0.0281,0.0300,0.0265,0.0170,0.0121,0.0125,0.0127,0.0089,0.0016,0,0,0,0,0,0,0,0,0,0,0,0,0,0.0009,0.0044,0.0083,0.0090,0.0072,0.0061,0.0053,0.0035,0.0025,0.0021,0.0016,0.0017,0.0040,0.0084,0.0094,0.0052,0.0020,0.0031,0.0043,0.0061,0.0081,0.0066,0.0612,0.1798,0.2258,0.2032,0.1887,0.1517,0.1244,0.1339,0.1489,0.1366,0.0867,0.0672,0.0707,0.0411,0.0097,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.0012,0.0036,0.0049,0.0052,0.0012,0,0.0025,0.0131,0.0301,0.0366,0.0228,0.0087,0.0077,0.0056,0.0025,0.0101,0.0135,0.0063,0.0054,0.0077,0.0068,0.0057,0.0041,0.0044,0.0044,0.0064,0.0110,0.0119,0.0087,0.0034,0,0.0016,0.0047,0.0057,0.0048,0.0006,0.0000,0.0030,0.0077,0.0165,0.0115,0,0,0.0061,0.0078,0.0058,0.0015,0.0010,0,0,0.0094,0.0189,0.0125,0,0,0.0024,0.0057,0.0119,0.0124,0,0,0.0031,0.0178,0.0184,0.0088,0,0,0.0031,0.0056,0.0041,0.0025,0.0020,0.0027,0.0418,0.1447,0.2791,0.3809,0.3924,0.3604,0.2886,0.2027,0.1831,0.1402,0.0729,0.0702,0.0641,0.0285,0.0216,0.0062,0,0,0,0,0,0,0,0,0,0,0,0.0038,0.0041,0.0043,0,0,0,0,0,0,0,0,0.0038,0.0057,0.0064,0.0109,0.0111,0,0,0,0.0010,0.0009,0.0035,0.0041,0.0042,0.0030,0.0048,0.0078,0.0042,0,0.0012,0.0028,0.0013,0.0025,0.0042,0.0041,0.0056,0.0038,0.0035,0.0072,0.0059,0.0031,0.0026,0.0016,0.0010,0.0035,0.0045,0.0035,0.0043,0.0044,0.0040,0.0025,0,0,0,0,0,0,0,0,0.0001,0.0005,0.0008,0.0010,0.0015,0.0018,0.0018,0.0015,0.0012,0.0015,0.0018,0.0017,0.0018,0.0018,0.0017,0.0018,0.0018,0.0017,0.0018,0.0018,0.0017,0.0018,0.0018,0.0017,0.0018,0.0018,0.0017,0.0018,0.0018,0.0017,0.0018,0.0018,0.0017,0.0018,0.0018,0.0017,0.0018,0.0018,0.0017,0.0018,0.0021,0.0021,0.0015,0.0011,0.0011,0.0011,0.0010,0.0004,0.0012,0.0039,0.0039,0.0027,0.0037,0.0045,0.0040,0.0023,0.0010,0.0013,0.0015,0.0021,0.0033,0.0041,0.0033,0.0021,0.0017,0.0011,0.0004,0.0008,0.0017,0.0014,0.0007,0.0015,0.0031,0.0035,0.0027,0.0021,0.0027,0.0040,0.0047,0.0052,0.0054,0.0041,0.0023,0.0019,0.0033,0.0050,0.0045,0.0034,0.0028,0.0018,0.0011,0.0013,0.0018,0.0018,0.0023,0.0053,0.0078,0.0072,0.0059,0.0063,0.0087,0.0088,0.0051,0.0008,0,0.0008,0.0009,0.0016,0.0033,0.0043,0.0041,0.0035,0.0032,0.0019,0.0009,0.0007,0.0008,0.0010,0.0012,0.0026,0.0048,0.0074,0.0093,0.0082,0.0054,0.0021,0,0.0007,0.0024,0.0018,0.0013,0.0069,0.0159,0.0158,0.0067,0.0004,0,0,0,0,0,0.0016,0.0019,0.0024,0.0039,0.0043,0.0032,0.0032,0.0069,0.0088,0.0046,0.0002,0,0.0003,0.0017,0.0079,0.0192,0.0197,0.0089,0.0022,0.0004,0,0,0,0,0.0017,0.0009,0.0014,0.0025,0.0031,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

// each first-dimentional element represents a COLUMN from the xls
var XLS_TSI = [
  [1610.5,1611.5,1612.5,1613.5,1614.5,1615.5,1616.5,1617.5,1618.5,1619.5,1620.5,1621.5,1622.5,1623.5,1624.5,1625.5,1626.5,1627.5,1628.5,1629.5,1630.5,1631.5,1632.5,1633.5,1634.5,1635.5,1636.5,1637.5,1638.5,1639.5,1640.5,1641.5,1642.5,1643.5,1644.5,1645.5,1646.5,1647.5,1648.5,1649.5,1650.5,1651.5,1652.5,1653.5,1654.5,1655.5,1656.5,1657.5,1658.5,1659.5,1660.5,1661.5,1662.5,1663.5,1664.5,1665.5,1666.5,1667.5,1668.5,1669.5,1670.5,1671.5,1672.5,1673.5,1674.5,1675.5,1676.5,1677.5,1678.5,1679.5,1680.5,1681.5,1682.5,1683.5,1684.5,1685.5,1686.5,1687.5,1688.5,1689.5,1690.5,1691.5,1692.5,1693.5,1694.5,1695.5,1696.5,1697.5,1698.5,1699.5,1700.5,1701.5,1702.5,1703.5,1704.5,1705.5,1706.5,1707.5,1708.5,1709.5,1710.5,1711.5,1712.5,1713.5,1714.5,1715.5,1716.5,1717.5,1718.5,1719.5,1720.5,1721.5,1722.5,1723.5,1724.5,1725.5,1726.5,1727.5,1728.5,1729.5,1730.5,1731.5,1732.5,1733.5,1734.5,1735.5,1736.5,1737.5,1738.5,1739.5,1740.5,1741.5,1742.5,1743.5,1744.5,1745.5,1746.5,1747.5,1748.5,1749.5,1750.5,1751.5,1752.5,1753.5,1754.5,1755.5,1756.5,1757.5,1758.5,1759.5,1760.5,1761.5,1762.5,1763.5,1764.5,1765.5,1766.5,1767.5,1768.5,1769.5,1770.5,1771.5,1772.5,1773.5,1774.5,1775.5,1776.5,1777.5,1778.5,1779.5,1780.5,1781.5,1782.5,1783.5,1784.5,1785.5,1786.5,1787.5,1788.5,1789.5,1790.5,1791.5,1792.5,1793.5,1794.5,1795.5,1796.5,1797.5,1798.5,1799.5,1800.5,1801.5,1802.5,1803.5,1804.5,1805.5,1806.5,1807.5,1808.5,1809.5,1810.5,1811.5,1812.5,1813.5,1814.5,1815.5,1816.5,1817.5,1818.5,1819.5,1820.5,1821.5,1822.5,1823.5,1824.5,1825.5,1826.5,1827.5,1828.5,1829.5,1830.5,1831.5,1832.5,1833.5,1834.5,1835.5,1836.5,1837.5,1838.5,1839.5,1840.5,1841.5,1842.5,1843.5,1844.5,1845.5,1846.5,1847.5,1848.5,1849.5,1850.5,1851.5,1852.5,1853.5,1854.5,1855.5,1856.5,1857.5,1858.5,1859.5,1860.5,1861.5,1862.5,1863.5,1864.5,1865.5,1866.5,1867.5,1868.5,1869.5,1870.5,1871.5,1872.5,1873.5,1874.5,1875.5,1876.5,1877.5,1878.5,1879.5,1880.5,1881.5,1882.5,1883.5,1884.5,1885.5,1886.5,1887.5,1888.5,1889.5,1890.5,1891.5,1892.5,1893.5,1894.5,1895.5,1896.5,1897.5,1898.5,1899.5,1900.5,1901.5,1902.5,1903.5,1904.5,1905.5,1906.5,1907.5,1908.5,1909.5,1910.5,1911.5,1912.5,1913.5,1914.5,1915.5,1916.5,1917.5,1918.5,1919.5,1920.5,1921.5,1922.5,1923.5,1924.5,1925.5,1926.5,1927.5,1928.5,1929.5,1930.5,1931.5,1932.5,1933.5,1934.5,1935.5,1936.5,1937.5,1938.5,1939.5,1940.5,1941.5,1942.5,1943.5,1944.5,1945.5,1946.5,1947.5,1948.5,1949.5,1950.5,1951.5,1952.5,1953.5,1954.5,1955.5,1956.5,1957.5,1958.5,1959.5,1960.5,1961.5,1962.5,1963.5,1964.5,1965.5,1966.5,1967.5,1968.5,1969.5,1970.5,1971.5,1972.5,1973.5,1974.5,1975.5,1976.5,1977.5,1978.5,1979.5,1980.5,1981.5,1982.5,1983.5,1984.5,1985.5,1986.5,1987.5,1988.5,1989.5,1990.5,1991.5,1992.5,1993.5,1994.5,1995.5,1996.5,1997.5,1998.5,1999.5,2000.5,2001.5,2002.5,2003.5,2004.5,2005.5,2006.5,2007.5,2008.5],
  [1365.8477,1365.8342,1366.2461,1366.365,1366.4451,1366.1591,1365.7358,1365.6107,1365.6038,1365.7001,1365.7001,1365.7001,1365.7001,1365.7001,1365.6621,1365.8926,1365.7816,1365.7106,1365.7577,1365.7261,1365.5946,1365.6255,1365.5946,1365.6951,1365.6157,1365.6249,1365.5946,1365.5946,1366.0768,1366.1344,1365.7001,1365.5946,1365.9277,1365.7183,1365.6761,1365.5946,1365.5946,1365.5946,1365.5946,1365.5946,1365.5946,1365.5946,1365.6227,1365.601,1365.5995,1365.5981,1365.5989,1365.5961,1365.5946,1365.5946,1365.6086,1365.6002,1365.5946,1365.5946,1365.5946,1365.5946,1365.5946,1365.5946,1365.5946,1365.5946,1365.5946,1365.601,1365.5974,1365.5946,1365.5961,1365.5946,1365.6073,1365.5967,1365.5961,1365.5946,1365.6002,1365.5946,1365.5946,1365.5946,1365.6045,1365.5946,1365.5989,1365.5953,1365.5981,1365.5961,1365.5946,1365.5946,1365.5946,1365.5946,1365.5946,1365.5953,1365.5946,1365.5946,1365.5946,1365.5946,1365.5974,1365.5981,1365.5989,1365.6135,1365.6234,1365.6333,1365.6171,1365.6318,1365.6143,1365.6058,1365.5974,1365.5946,1365.5946,1365.5967,1365.601,1365.6199,1365.6586,1365.7177,1365.6578,1365.8329,1365.759,1365.745,1365.6719,1365.6255,1365.7042,1365.6846,1365.849,1365.8512,1366.0459,1365.7633,1366.0845,1365.5946,1365.7211,1365.5946,1365.5946,1365.7233,1365.9362,1365.7633,1365.7141,1365.9636,1365.6599,1366.0001,1365.7078,1365.653,1365.5946,1365.5946,1365.5946,1365.5946,1366.0233,1366.0388,1366.0023,1365.8314,1365.7985,1365.7626,1365.6565,1365.6277,1365.6459,1365.7689,1365.8806,1365.9425,1365.9144,1366.076,1365.9193,1365.835,1365.809,1365.6537,1365.6206,1365.8329,1366.0957,1366.2869,1366.2806,1366.1527,1366.0599,1365.8224,1365.776,1365.6339,1365.6937,1365.8638,1366.1007,1366.1625,1365.9812,1366.0944,1365.8258,1365.7429,1365.6283,1365.707,1366.0396,1366.2216,1366.1744,1366.1548,1366.0521,1365.8982,1365.8898,1365.8828,1365.8069,1365.705,1365.6909,1365.6487,1365.6277,1365.6339,1365.6719,1365.9537,1365.8428,1365.7246,1365.7465,1365.7745,1365.6881,1365.6298,1365.6193,1365.603,1365.5946,1365.5967,1365.6227,1365.6586,1365.6677,1365.7126,1365.811,1365.7914,1365.7471,1365.7295,1365.6698,1365.6249,1365.6157,1365.603,1365.6305,1365.6958,1365.7957,1365.9066,1365.9952,1366.0107,1366.0465,1365.8701,1365.7542,1365.6403,1365.6635,1365.92,1366.2988,1366.3635,1366.1387,1366.0521,1365.9341,1365.7816,1365.7267,1365.6522,1365.6775,1365.8041,1365.9025,1366.0023,1366.1976,1366.1829,1365.9812,1366.0029,1365.9446,1365.8448,1365.7162,1365.6262,1365.6163,1365.7169,1365.9066,1366.126,1366.1963,1366.0916,1365.9496,1365.8821,1365.837,1365.7534,1365.6909,1365.6382,1365.7977,1366.0325,1366.2708,1366.2054,1366.1576,1365.958,1365.8406,1365.7035,1365.6586,1365.6543,1365.6135,1365.6255,1365.7689,1365.9124,1365.9313,1365.9791,1365.8812,1365.7909,1365.6487,1365.6234,1365.5962,1365.5652,1365.5912,1365.8303,1365.9163,1366.0458,1366.1332,1366.0166,1365.8434,1365.7094,1365.6982,1365.6534,1365.6216,1365.5294,1365.5165,1365.7083,1365.9651,1365.7684,1365.9651,1365.8604,1365.9426,1365.8459,1365.7173,1365.6285,1365.5706,1365.5739,1365.6302,1365.9285,1366.1349,1366.2821,1366.2454,1366.0179,1365.8523,1365.7351,1365.6019,1365.6211,1365.6436,1365.8406,1365.9348,1366.1135,1365.9885,1365.9429,1365.9159,1365.778,1365.6583,1365.53,1365.6361,1365.85,1366.2373,1366.1718,1366.1079,1366.0894,1366.0143,1365.913,1365.7847,1365.6052,1365.6224,1365.885,1365.9818,1366.219,1366.3475,1366.2528,1366.0098,1365.7721,1365.7653,1365.6313,1365.6599,1365.7793,1366.3097,1366.6632,1366.6246,1366.3717,1366.2682,1365.923,1365.7656,1365.7152,1365.7114,1365.7378,1365.9058,1366.0889,1366.1295,1366.2069,1366.2036,1365.9354,1366.0519,1365.8131,1365.7448,1365.5466,1365.6458,1365.8248,1366.2616,1366.6193,1366.6323,1366.6829,1366.2808,1366.1989,1365.8088,1365.6382,1365.6345,1365.7865,1366.0792,1366.6445,1366.5499,1366.4423,1366.2987,1366.0251,1365.7937,1365.6962,1365.6086,1365.7365,1366.0986,1366.3817,1366.6836,1366.6022,1366.6807,1366.23,1366.048,1365.8545,1365.8107,1365.724,1365.6918],
  [1365.5469,1365.53,1365.9279,1366.0399,1366.1143,1365.8314,1365.4148,1365.2889,1365.2783,1365.3684,1365.3645,1365.3607,1365.3568,1365.353,1365.3121,1365.5303,1365.4191,1365.3418,1365.3518,1365.2922,1365.1428,1365.1515,1365.1183,1365.2158,1365.1362,1365.1411,1365.108,1365.1046,1365.571,1365.6241,1365.1936,1365.0815,1365.4006,1365.1824,1365.1272,1365.0454,1365.0449,1365.0443,1365.0424,1365.0399,1365.0389,1365.0383,1365.0657,1365.0439,1365.0358,1365.026,1365.0249,1365.0199,1365.0145,1365.0125,1365.0259,1365.0178,1365.0125,1365.0125,1365.0126,1365.0127,1365.0127,1365.0125,1365.0122,1365.0122,1365.0122,1365.0183,1365.0148,1365.0122,1365.0135,1365.012,1365.0239,1365.0134,1365.0128,1365.0115,1365.017,1365.0115,1365.0115,1365.0115,1365.0211,1365.0117,1365.0159,1365.0126,1365.0159,1365.0146,1365.0143,1365.0157,1365.0172,1365.0177,1365.0179,1365.0186,1365.0178,1365.0178,1365.0179,1365.0184,1365.0216,1365.0236,1365.0266,1365.0444,1365.0594,1365.0752,1365.0637,1365.0802,1365.0658,1365.0614,1365.0634,1365.0739,1365.0798,1365.0863,1365.1023,1365.1294,1365.1694,1365.2294,1365.1707,1365.3429,1365.2859,1365.288,1365.2209,1365.1837,1365.2681,1365.2574,1365.4274,1365.4327,1365.6237,1365.3479,1365.6605,1365.1812,1365.309,1365.1984,1365.2086,1365.3386,1365.5486,1365.3827,1365.337,1365.5795,1365.2811,1365.6107,1365.3247,1365.2698,1365.2137,1365.2164,1365.2223,1365.2305,1365.6548,1365.6749,1365.6385,1365.468,1365.4402,1365.422,1365.3351,1365.322,1365.3501,1365.4734,1365.5867,1365.6501,1365.6254,1365.7898,1365.6514,1365.5811,1365.5573,1365.4065,1365.3759,1365.5817,1365.8346,1366.0194,1366.022,1365.9155,1365.8433,1365.6243,1365.5862,1365.4493,1365.5039,1365.6656,1365.8955,1365.9534,1365.7753,1365.8868,1365.6217,1365.5284,1365.3966,1365.4558,1365.7682,1365.9337,1365.8801,1365.8595,1365.7604,1365.6101,1365.5961,1365.5756,1365.4816,1365.3645,1365.3348,1365.2817,1365.2567,1365.2629,1365.3035,1365.5757,1365.4541,1365.3218,1365.3257,1365.3361,1365.2385,1365.171,1365.1458,1365.118,1365.1094,1365.1222,1365.1631,1365.2117,1365.2355,1365.2906,1365.3866,1365.36,1365.3119,1365.2968,1365.241,1365.2194,1365.2432,1365.2483,1365.2893,1365.3627,1365.4659,1365.5771,1365.6646,1365.6825,1365.7235,1365.5585,1365.4565,1365.3612,1365.3966,1365.6577,1366.0393,1366.1127,1365.8997,1365.8174,1365.7007,1365.549,1365.494,1365.4237,1365.4543,1365.582,1365.6803,1365.7816,1365.9781,1365.9691,1365.7698,1365.7744,1365.6947,1365.5848,1365.4614,1365.3828,1365.3853,1365.4946,1365.6875,1365.9054,1365.9718,1365.8623,1365.712,1365.6283,1365.566,1365.4755,1365.4119,1365.3597,1365.5194,1365.7557,1365.9944,1365.9343,1365.8876,1365.6866,1365.5582,1365.4095,1365.3593,1365.3596,1365.3309,1365.3533,1365.5,1365.6443,1365.6676,1365.7147,1365.6166,1365.507,1365.3417,1365.2982,1365.2628,1365.2344,1365.269,1365.5204,1365.619,1365.76,1365.8553,1365.739,1365.5581,1365.4126,1365.3899,1365.3381,1365.3074,1365.2292,1365.2378,1365.4479,1365.718,1365.5291,1365.7255,1365.6097,1365.6748,1365.5642,1365.4309,1365.3473,1365.301,1365.3175,1365.3844,1365.689,1365.899,1366.048,1366.0096,1365.7802,1365.6178,1365.5127,1365.3948,1365.4265,1365.4581,1365.6622,1365.7633,1365.9468,1365.8245,1365.7833,1365.7655,1365.6436,1365.5364,1365.4156,1365.5275,1365.7439,1366.1333,1366.0676,1366.0031,1365.9868,1365.9242,1365.8451,1365.7419,1365.5841,1365.614,1365.881,1365.9791,1366.2185,1366.349,1366.2555,1366.0131,1365.7765,1365.7676,1365.6284,1365.6564,1365.7773,1366.3109,1366.6681,1366.6328,1366.3828,1366.2767,1365.9199,1365.7484,1365.6963,1365.6976,1365.7341,1365.9178,1366.1143,1366.1644,1366.2476,1366.2426,1365.958,1366.0525,1365.7991,1365.7271,1365.5345,1365.6453,1365.8331,1366.2747,1366.6348,1366.6482,1366.6951,1366.2859,1366.1992,1365.8103,1365.6416,1365.6379,1365.7899,1366.0826,1366.6479,1366.5533,1366.4457,1366.3021,1366.0286,1365.7971,1365.6996,1365.6121,1365.7399,1366.1021,1366.3851,1366.6836,1366.6022,1366.6807,1366.23,1366.048,1365.8545,1365.8107,1365.724,1365.6918]
];
