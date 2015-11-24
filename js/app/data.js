/**
 * Stores data extracted from the .xls files.
 *
 * Converted via https://shancarter.github.io/mr-data-converter/
 *
 * Probably won't be permanent, not a good way of doing this - especially if user-set custom data needs to be handled in the future.
 */

var XLS_RCPH =
[
  [1850,1860,1870,1880,1890,1900,1910,1920,1930,1940,1950,1960,1970,1980,1990,2000,2005,2010,2020,2030,2040,2050,2060,2070,2080,2090,2100],
  [0.172,0.174,0.181,0.191,0.237,0.242,0.294,0.383,0.481,0.565,0.546,0.622,0.827,1.148,1.517,1.723,1.901,2.089,2.480,2.854,3.146,3.521,3.905,4.443,4.932,5.255,5.481],
  [0.148,0.176,0.201,0.263,0.323,0.354,0.425,0.483,0.558,0.609,0.618,0.716,0.862,1.085,1.320,1.543,1.690,1.836,2.117,2.374,2.648,2.966,3.329,3.729,4.146,4.503,4.783],
  [0.048,0.056,0.065,0.074,0.084,0.097,0.121,0.150,0.179,0.205,0.233,0.280,0.342,0.409,0.465,0.485,0.486,0.493,0.498,0.502,0.519,0.539,0.554,0.562,0.553,0.506,0.442],
  [0.010,0.013,0.017,0.020,0.023,0.025,0.029,0.036,0.043,0.048,0.056,0.064,0.077,0.098,0.124,0.145,0.156,0.168,0.190,0.212,0.237,0.265,0.296,0.328,0.359,0.389,0.416],
  [0.000,0.000,0.000,0.000,0.000,0.001,0.001,0.001,0.002,0.003,0.008,0.022,0.069,0.174,0.288,0.332,0.340,0.344,0.346,0.339,0.316,0.272,0.236,0.211,0.194,0.180,0.168],
  [-0.033,-0.072,-0.101,-0.165,-0.193,-0.234,-0.282,-0.287,-0.301,-0.301,-0.369,-0.461,-0.523,-0.618,-0.681,-0.781,-0.772,-0.751,-0.671,-0.573,-0.575,-0.521,-0.509,-0.386,-0.320,-0.322,-0.328],
  [0.172,0.174,0.181,0.191,0.237,0.242,0.294,0.383,0.481,0.565,0.546,0.622,0.827,1.148,1.517,1.723,1.905,2.126,2.579,3.005,3.411,3.766,4.021,4.188,4.256,4.265,4.309],
  [0.148,0.176,0.201,0.263,0.323,0.354,0.425,0.483,0.558,0.609,0.618,0.716,0.862,1.085,1.320,1.543,1.690,1.837,2.142,2.453,2.768,3.063,3.305,3.465,3.535,3.567,3.618],
  [0.048,0.056,0.065,0.074,0.084,0.097,0.121,0.150,0.179,0.205,0.233,0.280,0.342,0.409,0.465,0.485,0.486,0.492,0.504,0.514,0.518,0.514,0.502,0.480,0.452,0.430,0.415],
  [0.010,0.013,0.017,0.020,0.023,0.025,0.029,0.036,0.043,0.048,0.056,0.064,0.077,0.098,0.124,0.145,0.156,0.167,0.189,0.212,0.233,0.253,0.270,0.285,0.297,0.308,0.317],
  [0.000,0.000,0.000,0.000,0.000,0.001,0.001,0.001,0.002,0.003,0.008,0.022,0.069,0.174,0.288,0.332,0.340,0.344,0.348,0.344,0.323,0.279,0.242,0.215,0.197,0.188,0.183],
  [-0.033,-0.072,-0.101,-0.165,-0.193,-0.234,-0.282,-0.287,-0.301,-0.301,-0.369,-0.461,-0.523,-0.618,-0.681,-0.781,-0.768,-0.713,-0.605,-0.518,-0.431,-0.344,-0.296,-0.257,-0.226,-0.227,-0.224],
  [0.172,0.174,0.181,0.191,0.237,0.242,0.294,0.383,0.481,0.565,0.546,0.622,0.827,1.148,1.517,1.723,1.904,2.129,2.584,2.862,2.999,2.998,2.918,2.854,2.808,2.759,2.714],
  [0.148,0.176,0.201,0.263,0.323,0.354,0.425,0.483,0.558,0.609,0.618,0.716,0.862,1.085,1.320,1.543,1.690,1.840,2.154,2.395,2.513,2.548,2.541,2.495,2.429,2.365,2.307],
  [0.048,0.056,0.065,0.074,0.084,0.097,0.121,0.150,0.179,0.205,0.233,0.280,0.342,0.409,0.465,0.485,0.486,0.495,0.474,0.424,0.395,0.363,0.327,0.304,0.293,0.285,0.278],
  [0.010,0.013,0.017,0.020,0.023,0.025,0.029,0.036,0.043,0.048,0.056,0.064,0.077,0.098,0.124,0.145,0.156,0.167,0.187,0.203,0.216,0.226,0.229,0.231,0.232,0.233,0.232],
  [0.000,0.000,0.000,0.000,0.000,0.001,0.001,0.001,0.002,0.003,0.008,0.022,0.069,0.174,0.288,0.332,0.340,0.344,0.346,0.329,0.301,0.273,0.253,0.243,0.236,0.229,0.220],
  [-0.033,-0.072,-0.101,-0.165,-0.193,-0.234,-0.282,-0.287,-0.301,-0.301,-0.369,-0.461,-0.523,-0.618,-0.681,-0.781,-0.769,-0.717,-0.577,-0.489,-0.427,-0.413,-0.432,-0.418,-0.382,-0.353,-0.323],
  [0.172,0.174,0.181,0.191,0.237,0.242,0.294,0.383,0.481,0.565,0.546,0.622,0.827,1.148,1.517,1.723,1.906,2.154,2.665,3.276,3.993,4.762,5.539,6.299,7.020,7.742,8.388],
  [0.148,0.176,0.201,0.263,0.323,0.354,0.425,0.483,0.558,0.609,0.618,0.716,0.862,1.085,1.320,1.543,1.690,1.840,2.206,2.626,3.100,3.640,4.237,4.856,5.464,6.044,6.592],
  [0.048,0.056,0.065,0.074,0.084,0.097,0.121,0.150,0.179,0.205,0.233,0.280,0.342,0.409,0.465,0.485,0.486,0.497,0.552,0.625,0.715,0.821,0.917,0.984,1.028,1.066,1.094],
  [0.010,0.013,0.017,0.020,0.023,0.025,0.029,0.036,0.043,0.048,0.056,0.064,0.077,0.098,0.124,0.145,0.156,0.168,0.195,0.227,0.264,0.304,0.343,0.382,0.420,0.458,0.496],
  [0.000,0.000,0.000,0.000,0.000,0.001,0.001,0.001,0.002,0.003,0.008,0.022,0.069,0.174,0.288,0.332,0.340,0.345,0.360,0.371,0.366,0.339,0.316,0.303,0.297,0.295,0.294],
  [-0.033,-0.072,-0.101,-0.165,-0.193,-0.234,-0.282,-0.287,-0.301,-0.301,-0.369,-0.461,-0.523,-0.618,-0.681,-0.781,-0.766,-0.696,-0.648,-0.573,-0.452,-0.341,-0.274,-0.226,-0.189,-0.121,-0.088],

  [1850,1860,1870,1880,1890,1900,1910,1920,1930,1940,1950,1960,1970,1980,1990,2000,2005,2010,2020,2030,2040,2050,2060,2070,2080,2090,2100],
  [284.725,286.225,287.525,290.700,294.175,295.800,299.700,303.025,307.225,310.375,310.750,316.273,324.985,338.360,353.855,368.865,378.813,389.072,409.360,428.876,450.698,477.670,510.634,549.820,594.257,635.649,669.723],
  [790.979,805.250,821.000,837.000,856.000,879.500,923.750,977.750,1036.250,1088.250,1147.250,1247.000,1385.750,1547.750,1693.630,1751.023,1753.735,1768.688,1785.791,1795.924,1840.651,1894.850,1939.391,1961.826,1940.166,1819.142,1649.396],
  [275.425,276.400,277.375,278.200,279.100,279.800,280.975,282.925,284.975,286.725,289.000,291.400,295.200,301.383,309.485,315.850,319.440,323.071,330.202,337.159,345.339,354.592,364.714,375.515,386.465,396.859,406.265],
  [287.780,289.916,291.898,295.770,300.064,302.579,308.156,313.601,320.124,325.322,327.921,337.170,351.328,371.945,395.324,415.858,428.653,442.380,469.324,494.974,524.967,562.025,606.679,658.827,715.961,764.288,799.868],
  [284.478,284.540,284.760,284.541,287.046,286.799,288.480,294.371,298.618,304.101,301.920,302.541,311.808,330.864,349.911,364.367,375.014,387.607,415.770,445.562,470.718,505.132,542.447,599.425,656.941,698.566,728.124],
  [284.725,286.225,287.525,290.700,294.175,295.800,299.700,303.025,307.225,310.375,310.750,316.273,324.985,338.360,353.855,368.865,378.813,389.128,411.129,435.046,460.845,486.535,508.871,524.302,531.138,533.741,538.358],
  [790.979,805.250,821.000,837.000,856.000,879.500,923.750,977.750,1036.250,1088.250,1147.250,1247.000,1385.750,1547.750,1693.630,1751.023,1753.735,1767.098,1801.434,1829.908,1841.803,1833.094,1800.511,1744.739,1671.829,1613.554,1576.346],
  [275.425,276.400,277.375,278.200,279.100,279.800,280.975,282.925,284.975,286.725,289.000,291.400,295.200,301.383,309.485,315.850,319.440,322.967,329.983,337.118,344.139,350.608,356.322,361.314,365.511,369.068,372.274],
  [287.780,289.916,291.898,295.770,300.064,302.579,308.156,313.601,320.124,325.322,327.921,337.170,351.328,371.945,395.324,415.858,428.653,442.353,471.958,503.799,537.235,569.715,596.993,614.770,621.480,623.855,629.592],
  [284.478,284.540,284.760,284.541,287.046,286.799,288.480,294.371,298.618,304.101,301.920,302.541,311.808,330.864,349.911,364.367,375.148,390.164,423.269,457.458,492.998,526.376,551.912,569.176,576.427,576.766,580.909],
  [284.725,286.225,287.525,290.700,294.175,295.800,299.700,303.025,307.225,310.375,310.750,316.273,324.985,338.360,353.855,368.865,378.813,389.285,412.068,430.783,440.222,442.700,441.673,437.481,431.617,426.005,420.895],
  [790.979,805.250,821.000,837.000,856.000,879.500,923.750,977.750,1036.250,1088.250,1147.250,1247.000,1385.750,1547.750,1693.630,1751.023,1753.735,1773.128,1730.518,1600.215,1527.098,1451.540,1365.106,1310.651,1285.405,1268.282,1253.628],
  [275.425,276.400,277.375,278.200,279.100,279.800,280.975,282.925,284.975,286.725,289.000,291.400,295.200,301.383,309.485,315.850,319.440,322.957,329.208,334.297,338.758,341.896,343.192,343.744,344.161,344.261,344.016],
  [287.780,289.916,291.898,295.770,300.064,302.579,308.156,313.601,320.124,325.322,327.921,337.170,351.328,371.945,395.324,415.858,428.653,442.761,470.821,490.699,501.433,503.321,499.944,494.224,487.717,481.394,475.193],
  [284.478,284.540,284.760,284.541,287.046,286.799,288.480,294.371,298.618,304.101,301.920,302.541,311.808,330.864,349.911,364.367,375.107,390.125,423.464,445.154,455.980,455.441,447.834,441.343,436.475,431.473,426.963],
  [284.725,286.225,287.525,290.700,294.175,295.800,299.700,303.025,307.225,310.375,310.750,316.273,324.985,338.360,353.855,368.865,378.813,389.324,415.780,448.835,489.435,540.543,603.520,677.078,758.182,844.805,935.874],
  [790.979,805.250,821.000,837.000,856.000,879.500,923.750,977.750,1036.250,1088.250,1147.250,1247.000,1385.750,1547.750,1693.630,1751.023,1753.735,1778.675,1923.671,2132.014,2399.245,2739.985,3076.135,3322.341,3489.839,3638.592,3750.685],
  [275.425,276.400,277.375,278.200,279.100,279.800,280.975,282.925,284.975,286.725,289.000,291.400,295.200,301.383,309.485,315.850,319.440,323.061,331.514,341.960,354.035,367.220,380.716,394.227,407.702,421.357,435.106],
  [287.780,289.916,291.898,295.770,300.064,302.579,308.156,313.601,320.124,325.322,327.921,337.170,351.328,371.945,395.324,415.858,428.653,443.065,482.759,534.353,599.343,683.062,785.604,902.529,1029.936,1167.748,1313.451],
  [284.478,284.540,284.760,284.541,287.046,286.799,288.480,294.371,298.618,304.101,301.920,302.541,311.808,330.864,349.911,364.367,375.200,392.058,429.091,479.089,545.794,628.430,725.227,834.844,954.053,1091.072,1231.445],

  [1850,1860,1870,1880,1890,1900,1910,1920,1930,1940,1950,1960,1970,1980,1990,2000,2005,2010,2020,2030,2040,2050,2060,2070,2080,2090,2100],
  [0.508,0.610,0.617,0.857,0.968,1.187,1.641,1.653,1.949,2.066,2.522,3.769,5.273,6.357,7.463,7.884,9.167,9.389,9.357,9.438,10.840,12.580,14.566,16.477,17.525,14.556,13.935],
  [41.184,12.863,39.895,67.449,96.107,109.603,120.794,134.918,145.582,157.719,174.376,222.315,250.694,288.107,315.951,300.411,313.645,322.518,310.142,325.160,343.490,355.042,363.928,359.931,339.910,269.998,245.963],
  [0.662,0.758,0.766,1.232,1.329,1.465,1.762,2.057,2.365,2.596,5.050,6.158,9.329,11.096,11.920,11.718,12.075,12.863,12.461,13.857,15.287,16.558,17.853,18.906,19.427,19.422,19.281],
  [0.508,0.610,0.617,0.857,0.968,1.187,1.641,1.653,1.949,2.066,2.522,3.769,5.273,6.357,7.463,7.884,9.167,9.518,10.212,11.170,11.537,11.280,9.585,7.222,4.190,4.220,4.249],
  [41.184,12.863,39.895,67.449,96.107,109.603,120.794,134.918,145.582,157.719,174.376,222.315,250.694,288.107,315.951,300.549,301.554,309.357,324.977,331.840,333.953,331.315,317.588,300.746,280.788,273.419,266.051],
  [0.662,0.758,0.766,1.232,1.329,1.465,1.762,2.057,2.365,2.596,5.050,6.158,9.329,11.096,11.920,11.718,12.075,12.364,12.941,13.470,13.654,13.496,13.367,13.136,12.802,12.775,12.747],
  [0.508,0.610,0.617,0.857,0.968,1.187,1.641,1.653,1.949,2.066,2.522,3.769,5.273,6.357,7.463,7.884,9.167,9.878,10.260,7.946,5.024,3.387,2.035,0.654,0.117,-0.268,-0.420],
  [41.184,12.863,39.895,67.449,96.107,109.603,120.794,134.918,145.582,157.719,174.376,222.315,250.694,288.107,315.951,300.138,309.092,329.828,253.032,233.382,224.019,189.292,166.461,161.303,155.071,148.434,142.047],
  [0.662,0.758,0.766,1.232,1.329,1.465,1.762,2.057,2.365,2.596,5.050,6.158,9.329,11.096,11.920,11.718,12.075,12.317,11.571,11.479,11.278,9.816,8.986,9.022,8.821,8.581,8.301],
  [0.508,0.610,0.617,0.857,0.968,1.187,1.641,1.653,1.949,2.066,2.522,3.769,5.273,6.357,7.463,7.884,9.167,9.969,12.444,14.554,17.432,20.781,24.097,26.374,27.715,28.531,28.817],
  [41.184,12.863,39.895,67.449,96.107,109.603,120.794,134.918,145.582,157.719,174.376,222.315,250.694,288.107,315.951,300.438,338.530,369.669,438.829,498.941,586.045,676.790,745.149,780.079,821.346,870.708,887.564],
  [0.662,0.758,0.766,1.232,1.329,1.465,1.762,2.057,2.365,2.596,5.050,6.158,9.329,11.096,11.920,11.718,12.075,12.811,15.015,16.938,18.901,20.108,21.091,21.906,22.878,24.031,24.790],

  [1850,1860,1870,1880,1890,1900,1910,1920,1930,1940,1950,1960,1970,1980,1990,2000,2005,2010,2020,2030,2040,2050,2060,2070,2080,2090,2100],
  [4.54293,3.19973,5.04725,8.38235,13.75708,24.0155,35.17434,38.85775,46.60566,54.84853,62.50678,94.33976,126.88853,130.45236,127.99282,107.703,108.484,107.440,95.072,80.000,83.273,74.365,69.837,44.600,30.008,25.174,20.877],
  [4.54293,3.19973,5.04725,8.38235,13.75708,24.0155,35.17434,38.85775,46.60566,54.84853,62.50678,94.33976,126.88853,130.45236,127.99282,107.756,116.374,111.875,102.877,86.776,69.603,51.355,41.420,32.796,25.480,23.993,22.507],
  [4.54293,3.19973,5.04725,8.38235,13.75708,24.0155,35.17434,38.85775,46.60566,54.84853,62.50678,94.33976,126.88853,130.45236,127.99282,107.500,109.907,107.903,85.621,57.799,39.320,31.147,27.397,23.730,19.508,15.650,12.910],
  [4.54293,3.19973,5.04725,8.38235,13.75708,24.0155,35.17434,38.85775,46.60566,54.84853,62.50678,94.33976,126.88853,130.45236,127.99282,107.701,114.018,101.505,96.096,85.331,65.560,52.220,45.409,40.127,36.889,28.952,25.711]
];

var XLS_RCPH_ROWS = XLS_RCPH.length;
var XLS_RCPH_COLS = XLS_RCPH[0].length;

