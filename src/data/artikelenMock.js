// Standaarddata voor de panorama-strip. Dit is de layout die via de CMS is ingesteld
// (margin_left/margin_top/z_index per foto) en op 2026-10-06 geëxporteerd vanuit de CMS
// ("Exporteer data (JSON)" op het dashboard), zodat alle bezoekers dezelfde, correct
// gepositioneerde foto's zien — ook zonder Supabase-database.
// Wordt overschreven door een Supabase-call zodra VITE_SUPABASE_URL/VITE_SUPABASE_ANON_KEY
// zijn ingesteld (zie composables/useSupabase.js).

// Verhoog deze versie bij elke nieuwe export, zodat oude lokale CMS-data van
// teamgenoten automatisch wordt vervangen door deze data.
export const MOCK_VERSIE = '2026-10-06'

export const artikelenMock = [
  {
    "id": 1,
    "catalogusnummer": "135001",
    "afbeelding": "1.jpg",
    "alt": "Panorama van Utrecht — deel 1",
    "beschrijving": "Afbeelding van de titelpagina van het Panorama van Utrecht, op de lithostenen\ngetekend door J. Bos, gedrukt bij P.W. van de Weijer en in juli 1859 uitgegeven door de Wed.\nHerfkens en zoon.\n\nInformatie: Het Panorama van Utrecht bestaat uit vier aaneengeplakte, zigzag gevouwen bladen\nmet een totale lengte van 5,82 meter. Het panorama is een meterslange tekening van een\nrondwandeling om het centrum van Utrecht, met steeds wisselend uitzicht vanaf de singels. Het\ngeeft een heel precies beeld van hoe de stad in 1859 er uitzag en het leuke is dat je ook het\nverloop van de seizoenen in de tekening terugziet.",
    "link_bron": "https://hetutrechtsarchief.nl/beeld/10AA76F512755EEF8B2AB912E7310E9D",
    "x": 1093,
    "y": 913,
    "polygons": null,
    "height": 489,
    "margin_left": 0,
    "margin_top": 100,
    "z_index": 1
  },
  {
    "id": 2,
    "catalogusnummer": "135002",
    "afbeelding": "2.jpg",
    "alt": "Panorama van Utrecht — deel 2",
    "beschrijving": "Gezicht over de Wittevrouwenbrug in de Wittevrouwenstraat te Utrecht met het\ndouanekantoor (de latere politiepost Wittevrouwen) en de Willemskazerne.",
    "link_bron": "https://hetutrechtsarchief.nl/beeld/C31712F4A3B15A4E8540206F7927AC9F",
    "x": null,
    "y": null,
    "polygons": [
      {
        "name": "Gebied 1",
        "catalogusnummer": "",
        "title": "",
        "beschrijving": "",
        "link_bron": "",
        "points": [
          {
            "x": 72,
            "y": 1530
          },
          {
            "x": 61,
            "y": 1262
          },
          {
            "x": 197,
            "y": 1234
          },
          {
            "x": 313,
            "y": 1188
          },
          {
            "x": 386,
            "y": 1125
          },
          {
            "x": 435,
            "y": 1094
          },
          {
            "x": 840,
            "y": 1118
          },
          {
            "x": 1073,
            "y": 1123
          },
          {
            "x": 1071,
            "y": 1049
          },
          {
            "x": 1127,
            "y": 1132
          },
          {
            "x": 1280,
            "y": 1213
          },
          {
            "x": 1504,
            "y": 1276
          },
          {
            "x": 1749,
            "y": 1276
          },
          {
            "x": 1846,
            "y": 1328
          },
          {
            "x": 1843,
            "y": 1461
          },
          {
            "x": 2084,
            "y": 1541
          }
        ]
      }
    ],
    "height": 489,
    "margin_left": -30,
    "margin_top": 98,
    "z_index": -2
  },
  {
    "id": 3,
    "catalogusnummer": "135004",
    "afbeelding": "3.jpg",
    "alt": "Panorama van Utrecht — deel 3",
    "beschrijving": "Hotspot 3 — historische locatie op het panorama van Utrecht (1859). Klik voor meer informatie.",
    "link_bron": "https://hetutrechtsarchief.nl/onderzoek/resultaten?id=3",
    "x": null,
    "y": null,
    "polygons": [
      {
        "name": "Gebied 1",
        "catalogusnummer": "",
        "title": "",
        "beschrijving": "",
        "link_bron": "",
        "points": [
          {
            "x": 530,
            "y": 985
          },
          {
            "x": 532,
            "y": 918
          },
          {
            "x": 828,
            "y": 918
          },
          {
            "x": 826,
            "y": 891
          },
          {
            "x": 813,
            "y": 878
          },
          {
            "x": 910,
            "y": 848
          },
          {
            "x": 910,
            "y": 822
          },
          {
            "x": 888,
            "y": 823
          },
          {
            "x": 1029,
            "y": 704
          },
          {
            "x": 1027,
            "y": 689
          },
          {
            "x": 1040,
            "y": 687
          },
          {
            "x": 1044,
            "y": 711
          },
          {
            "x": 1193,
            "y": 818
          },
          {
            "x": 1281,
            "y": 805
          },
          {
            "x": 1281,
            "y": 781
          },
          {
            "x": 1274,
            "y": 780
          },
          {
            "x": 1298,
            "y": 760
          },
          {
            "x": 1316,
            "y": 780
          },
          {
            "x": 1308,
            "y": 782
          },
          {
            "x": 1309,
            "y": 815
          },
          {
            "x": 1417,
            "y": 815
          },
          {
            "x": 1418,
            "y": 798
          },
          {
            "x": 1425,
            "y": 785
          },
          {
            "x": 1439,
            "y": 795
          },
          {
            "x": 1439,
            "y": 815
          },
          {
            "x": 1506,
            "y": 816
          },
          {
            "x": 1508,
            "y": 793
          },
          {
            "x": 1513,
            "y": 778
          },
          {
            "x": 1517,
            "y": 786
          },
          {
            "x": 1517,
            "y": 798
          },
          {
            "x": 1527,
            "y": 798
          },
          {
            "x": 1537,
            "y": 830
          },
          {
            "x": 1565,
            "y": 828
          },
          {
            "x": 1565,
            "y": 820
          },
          {
            "x": 1574,
            "y": 819
          },
          {
            "x": 1574,
            "y": 828
          },
          {
            "x": 1610,
            "y": 877
          },
          {
            "x": 1669,
            "y": 876
          },
          {
            "x": 1669,
            "y": 866
          },
          {
            "x": 1680,
            "y": 865
          },
          {
            "x": 1680,
            "y": 877
          },
          {
            "x": 1707,
            "y": 912
          },
          {
            "x": 1754,
            "y": 912
          },
          {
            "x": 1751,
            "y": 1082
          },
          {
            "x": 529,
            "y": 1085
          }
        ]
      }
    ],
    "height": 489,
    "margin_left": -54,
    "margin_top": 95,
    "z_index": 3
  },
  {
    "id": 4,
    "catalogusnummer": "135004",
    "afbeelding": "4.jpg",
    "alt": "Panorama van Utrecht — deel 4",
    "beschrijving": "Gezicht op de uitmonding van de Plompetorengracht te Utrecht in de\nstadsbuitengracht, in het midden de bomen langs de Noorderkade en rechts een gedeelte van\nhet Begijnebolwerk. Rechts wordt een overhaalschuitje voortgetrokken.",
    "link_bron": "https://hetutrechtsarchief.nl/beeld/5EFEB0981F685840A95F534163CC0649",
    "x": null,
    "y": null,
    "polygons": [
      {
        "name": "Gebied 1",
        "catalogusnummer": "",
        "title": "",
        "beschrijving": "",
        "link_bron": "",
        "points": [
          {
            "x": 1637,
            "y": 1062
          },
          {
            "x": 1640,
            "y": 885
          },
          {
            "x": 1630,
            "y": 877
          },
          {
            "x": 1659,
            "y": 873
          },
          {
            "x": 1664,
            "y": 859
          },
          {
            "x": 1715,
            "y": 859
          },
          {
            "x": 1739,
            "y": 880
          },
          {
            "x": 1758,
            "y": 880
          },
          {
            "x": 1753,
            "y": 1064
          }
        ]
      },
      {
        "name": "Gebied 2",
        "catalogusnummer": "",
        "title": "",
        "beschrijving": "Afbeelding van het overhaalschuitje over de Stadsbuitengracht ter\nhoogte van de Lange Smeestraat te Utrecht. Deze veerbootjes, die voetgangers van en naar de\nbinnenstad vervoerden, werden in de loop van de 19e eeuw vervangen door vaste bruggen.",
        "link_bron": "https://hetutrechtsarchief.nl/beeld/242D4A4C5CA4516E9DF926B2A2E7486E",
        "points": [
          {
            "x": 2951,
            "y": 1340
          },
          {
            "x": 2924,
            "y": 1287
          },
          {
            "x": 2964,
            "y": 1291
          },
          {
            "x": 2966,
            "y": 1271
          },
          {
            "x": 2956,
            "y": 1266
          },
          {
            "x": 2997,
            "y": 1273
          },
          {
            "x": 2996,
            "y": 1210
          },
          {
            "x": 2985,
            "y": 1207
          },
          {
            "x": 3052,
            "y": 1198
          },
          {
            "x": 3122,
            "y": 1207
          },
          {
            "x": 3185,
            "y": 1223
          },
          {
            "x": 3177,
            "y": 1230
          },
          {
            "x": 3173,
            "y": 1309
          },
          {
            "x": 3192,
            "y": 1309
          },
          {
            "x": 3192,
            "y": 1256
          },
          {
            "x": 3201,
            "y": 1257
          },
          {
            "x": 3203,
            "y": 1308
          },
          {
            "x": 3235,
            "y": 1308
          },
          {
            "x": 3228,
            "y": 1311
          },
          {
            "x": 3229,
            "y": 1337
          },
          {
            "x": 3276,
            "y": 1338
          },
          {
            "x": 3243,
            "y": 1378
          },
          {
            "x": 3164,
            "y": 1390
          },
          {
            "x": 3077,
            "y": 1376
          }
        ]
      },
      {
        "name": "Gebied 3",
        "catalogusnummer": "",
        "title": "",
        "beschrijving": "Gezicht op de stoombierbrouwerij De Krans (Nieuwekade 30) te\nUtrecht. Vanaf de middeleeuwen werd er in Utrecht volop bier gebrouwen. Tot ver in de 19e eeuw\nwerd hier grachtenwater voor gebruikt. In de twintigste eeuw verloren de Utrechtse brouwerijen\nde concurrentiestrijd met die uit Amsterdam en verdwenen de brouwerijen in de stad.",
        "link_bron": "https://hetutrechtsarchief.nl/beeld/96609F68DD095F6D9794354E2AAC22E6",
        "points": [
          {
            "x": 84,
            "y": 1070
          },
          {
            "x": 68,
            "y": 878
          },
          {
            "x": 156,
            "y": 830
          },
          {
            "x": 150,
            "y": 807
          },
          {
            "x": 164,
            "y": 773
          },
          {
            "x": 186,
            "y": 801
          },
          {
            "x": 176,
            "y": 824
          },
          {
            "x": 267,
            "y": 824
          },
          {
            "x": 264,
            "y": 801
          },
          {
            "x": 282,
            "y": 782
          },
          {
            "x": 298,
            "y": 799
          },
          {
            "x": 286,
            "y": 822
          },
          {
            "x": 416,
            "y": 881
          },
          {
            "x": 418,
            "y": 1070
          }
        ]
      }
    ],
    "height": 489,
    "margin_left": -59,
    "margin_top": 90,
    "z_index": 4
  },
  {
    "id": 5,
    "catalogusnummer": "135005",
    "afbeelding": "5.jpg",
    "alt": "",
    "beschrijving": "Gezicht op het Begijnebolwerk te Utrecht.",
    "link_bron": "https://hetutrechtsarchief.nl/beeld/956865ED18175EC28A884B09136B8678",
    "x": 1974,
    "y": 296,
    "polygons": null,
    "height": 489,
    "margin_left": -80,
    "margin_top": 92,
    "z_index": 5
  },
  {
    "id": 6,
    "catalogusnummer": "135006",
    "afbeelding": "6.jpg",
    "alt": "",
    "beschrijving": "Gezicht op een gedeelte van het Begijnebolwerk (links) en de Van Asch van\nWijckskade te Utrecht.",
    "link_bron": "https://hetutrechtsarchief.nl/beeld/1F575DA871D45951B614A952A0381D6D",
    "x": 2034,
    "y": 341,
    "polygons": null,
    "height": 489,
    "margin_left": -78,
    "margin_top": 98,
    "z_index": 6
  },
  {
    "id": 7,
    "catalogusnummer": "135007",
    "afbeelding": "7.jpg",
    "alt": "",
    "beschrijving": "Gezicht op de Van Asch van Wijckskade te Utrecht, de Weerdbarrière en de\nWeerdbrug en rechts de Noorderkade met de stadswaag en stadskraan.",
    "link_bron": "https://hetutrechtsarchief.nl/beeld/71CD4684E8C157A385F4E837A513E5D7",
    "x": 1982,
    "y": 351,
    "polygons": [
      {
        "name": "Gebied 1",
        "catalogusnummer": "",
        "title": "",
        "beschrijving": "Met\nbehulp van de stadskraan konden zware goederen, zoals wijntonnen, in en uit schepen geladen\nworden. Het water is van oudsher een belangrijke transportroute in Utrecht.",
        "link_bron": "",
        "points": [
          {
            "x": 3283,
            "y": 1221
          },
          {
            "x": 3293,
            "y": 1204
          },
          {
            "x": 3285,
            "y": 1208
          },
          {
            "x": 3283,
            "y": 1198
          },
          {
            "x": 3254,
            "y": 1140
          },
          {
            "x": 3257,
            "y": 1133
          },
          {
            "x": 3281,
            "y": 1150
          },
          {
            "x": 3304,
            "y": 1135
          },
          {
            "x": 3326,
            "y": 1156
          },
          {
            "x": 3318,
            "y": 1160
          },
          {
            "x": 3322,
            "y": 1204
          },
          {
            "x": 3312,
            "y": 1206
          },
          {
            "x": 3327,
            "y": 1221
          }
        ]
      }
    ],
    "height": 489,
    "margin_left": -85,
    "margin_top": 108,
    "z_index": 37
  },
  {
    "id": 8,
    "catalogusnummer": "135008",
    "afbeelding": "8.jpg",
    "alt": "",
    "beschrijving": "Gezicht op de Noorderkade te Utrecht, de Koninklijke Fabriek van\nLandbouwkundige Werktuigen, bierbrouwerij De Krans en het Paardenveld met de molen De Rijn\nen Zon.",
    "link_bron": "https://hetutrechtsarchief.nl/beeld/6FC84D5C50C55AD8A179D722039F3C82",
    "x": null,
    "y": null,
    "polygons": [
      {
        "name": "Gebied 1",
        "catalogusnummer": "",
        "title": "",
        "beschrijving": "",
        "link_bron": "",
        "points": [
          {
            "x": 2690,
            "y": 976
          },
          {
            "x": 2686,
            "y": 996
          },
          {
            "x": 2701,
            "y": 1017
          },
          {
            "x": 2730,
            "y": 919
          },
          {
            "x": 2691,
            "y": 898
          },
          {
            "x": 2693,
            "y": 861
          },
          {
            "x": 2743,
            "y": 856
          },
          {
            "x": 2759,
            "y": 760
          },
          {
            "x": 2749,
            "y": 750
          },
          {
            "x": 2690,
            "y": 836
          },
          {
            "x": 2668,
            "y": 819
          },
          {
            "x": 2734,
            "y": 739
          },
          {
            "x": 2743,
            "y": 750
          },
          {
            "x": 2753,
            "y": 716
          },
          {
            "x": 2674,
            "y": 593
          },
          {
            "x": 2693,
            "y": 585
          },
          {
            "x": 2755,
            "y": 681
          },
          {
            "x": 2751,
            "y": 698
          },
          {
            "x": 2774,
            "y": 700
          },
          {
            "x": 2866,
            "y": 564
          },
          {
            "x": 2870,
            "y": 608
          },
          {
            "x": 2799,
            "y": 708
          },
          {
            "x": 2841,
            "y": 712
          },
          {
            "x": 2868,
            "y": 696
          },
          {
            "x": 2889,
            "y": 714
          },
          {
            "x": 2866,
            "y": 836
          },
          {
            "x": 2876,
            "y": 859
          },
          {
            "x": 2901,
            "y": 863
          },
          {
            "x": 2904,
            "y": 886
          },
          {
            "x": 2868,
            "y": 921
          },
          {
            "x": 2901,
            "y": 1074
          },
          {
            "x": 2573,
            "y": 1082
          },
          {
            "x": 2575,
            "y": 1026
          },
          {
            "x": 2551,
            "y": 1024
          },
          {
            "x": 2573,
            "y": 973
          },
          {
            "x": 2584,
            "y": 982
          },
          {
            "x": 2638,
            "y": 982
          },
          {
            "x": 2642,
            "y": 942
          },
          {
            "x": 2651,
            "y": 940
          },
          {
            "x": 2657,
            "y": 982
          }
        ]
      }
    ],
    "height": 489,
    "margin_left": -59,
    "margin_top": 95,
    "z_index": -3
  },
  {
    "id": 9,
    "catalogusnummer": "135009",
    "afbeelding": "9.jpg",
    "alt": "Panorama van Utrecht — deel 9",
    "beschrijving": "Gezicht op het Paardenveld te Utrecht met de molen De Meiboom en rechts een\nwas- en badhuis, de latere Wasch- en Badinrichting van W. de Rijk.",
    "link_bron": "https://hetutrechtsarchief.nl/beeld/E36B0BDECC935D8482ACBFD4EFC99BFC",
    "x": 1972,
    "y": 327,
    "polygons": [
      {
        "name": "Gebied 1",
        "catalogusnummer": "135009",
        "title": "",
        "beschrijving": "Badhuizen werden sinds eind 19e\neeuw gebouwd, toen er een grotere aandacht kwam voor hygiëne, gezondheid en levensstijl. De\nvraag naar hygiënische baden nam toe door industrialisatie en verstedelijking, wat leidde tot de\nbouw van openbare badhuizen, waar tegen betaling een bad of douche kon worden genomen.135009",
        "link_bron": "",
        "points": [
          {
            "x": 2656,
            "y": 1146
          },
          {
            "x": 2654,
            "y": 1067
          },
          {
            "x": 2701,
            "y": 986
          },
          {
            "x": 2712,
            "y": 1009
          },
          {
            "x": 2808,
            "y": 1007
          },
          {
            "x": 2792,
            "y": 993
          },
          {
            "x": 2841,
            "y": 986
          },
          {
            "x": 2834,
            "y": 1009
          },
          {
            "x": 2903,
            "y": 1004
          },
          {
            "x": 2896,
            "y": 953
          },
          {
            "x": 2978,
            "y": 911
          },
          {
            "x": 2978,
            "y": 813
          },
          {
            "x": 3001,
            "y": 811
          },
          {
            "x": 3011,
            "y": 906
          },
          {
            "x": 3078,
            "y": 902
          },
          {
            "x": 3162,
            "y": 958
          },
          {
            "x": 3132,
            "y": 955
          },
          {
            "x": 3139,
            "y": 1004
          },
          {
            "x": 3295,
            "y": 1002
          },
          {
            "x": 3381,
            "y": 1053
          },
          {
            "x": 3379,
            "y": 1144
          }
        ]
      }
    ],
    "height": 489,
    "margin_left": -42,
    "margin_top": 100,
    "z_index": 9
  },
  {
    "id": 10,
    "catalogusnummer": "135010",
    "afbeelding": "10.jpg",
    "alt": "Panorama van Utrecht — deel 10",
    "beschrijving": "Gezicht over de Catharijnebrug te Utrecht op een groot appartementengebouw, het\ndouanekantoortje (de Catharijnebarrière), een herenhuis (later Bierhuis De Hoop) en de\ngasfabriek van W.H. de Heus op en bij het noordwestelijke bastion van het vroegere kasteel\nVredenburg.",
    "link_bron": "https://hetutrechtsarchief.nl/beeld/A2001190E8D4503290B58D0E91C3C00B",
    "x": 1999,
    "y": 349,
    "polygons": [
      {
        "name": "Gebied 1",
        "catalogusnummer": "",
        "title": "",
        "beschrijving": "",
        "link_bron": "",
        "points": [
          {
            "x": 1892,
            "y": 1555
          },
          {
            "x": 1890,
            "y": 1480
          },
          {
            "x": 1925,
            "y": 1471
          },
          {
            "x": 1885,
            "y": 1443
          },
          {
            "x": 1738,
            "y": 1441
          },
          {
            "x": 1448,
            "y": 1417
          },
          {
            "x": 1357,
            "y": 1417
          },
          {
            "x": 1427,
            "y": 1406
          },
          {
            "x": 1637,
            "y": 1242
          },
          {
            "x": 1633,
            "y": 1111
          },
          {
            "x": 1243,
            "y": 1116
          },
          {
            "x": 1012,
            "y": 1163
          },
          {
            "x": 930,
            "y": 1160
          },
          {
            "x": 53,
            "y": 1375
          },
          {
            "x": 60,
            "y": 1546
          }
        ]
      },
      {
        "name": "Gebied 2",
        "catalogusnummer": "",
        "title": "",
        "beschrijving": "",
        "link_bron": "",
        "points": [
          {
            "x": 400,
            "y": 1128
          },
          {
            "x": 407,
            "y": 724
          },
          {
            "x": 470,
            "y": 680
          },
          {
            "x": 557,
            "y": 684
          },
          {
            "x": 552,
            "y": 666
          },
          {
            "x": 592,
            "y": 666
          },
          {
            "x": 592,
            "y": 689
          },
          {
            "x": 839,
            "y": 689
          },
          {
            "x": 827,
            "y": 668
          },
          {
            "x": 867,
            "y": 666
          },
          {
            "x": 865,
            "y": 684
          },
          {
            "x": 1117,
            "y": 689
          },
          {
            "x": 1108,
            "y": 668
          },
          {
            "x": 1150,
            "y": 666
          },
          {
            "x": 1143,
            "y": 689
          },
          {
            "x": 1369,
            "y": 691
          },
          {
            "x": 1348,
            "y": 670
          },
          {
            "x": 1411,
            "y": 668
          },
          {
            "x": 1385,
            "y": 691
          },
          {
            "x": 1476,
            "y": 689
          },
          {
            "x": 1530,
            "y": 738
          },
          {
            "x": 1651,
            "y": 796
          },
          {
            "x": 1619,
            "y": 827
          },
          {
            "x": 1612,
            "y": 1109
          },
          {
            "x": 1178,
            "y": 1130
          }
        ]
      },
      {
        "name": "Gebied 3",
        "catalogusnummer": "",
        "title": "",
        "beschrijving": "",
        "link_bron": "",
        "points": [
          {
            "x": 2198,
            "y": 1219
          },
          {
            "x": 2193,
            "y": 1145
          },
          {
            "x": 2118,
            "y": 1150
          },
          {
            "x": 2112,
            "y": 908
          },
          {
            "x": 2083,
            "y": 890
          },
          {
            "x": 2184,
            "y": 821
          },
          {
            "x": 2201,
            "y": 830
          },
          {
            "x": 2265,
            "y": 772
          },
          {
            "x": 2363,
            "y": 775
          },
          {
            "x": 2409,
            "y": 827
          },
          {
            "x": 2455,
            "y": 827
          },
          {
            "x": 2435,
            "y": 885
          },
          {
            "x": 2479,
            "y": 888
          },
          {
            "x": 2484,
            "y": 625
          },
          {
            "x": 2525,
            "y": 631
          },
          {
            "x": 2516,
            "y": 879
          },
          {
            "x": 2568,
            "y": 922
          },
          {
            "x": 2574,
            "y": 1194
          },
          {
            "x": 2429,
            "y": 1194
          },
          {
            "x": 2435,
            "y": 1220
          }
        ]
      },
      {
        "name": "Gebied 4",
        "catalogusnummer": "",
        "title": "",
        "beschrijving": "Gezicht vanaf de Catharijnebrug op de stadsbuitengracht te Utrecht, uit\nhet noordwesten, met links de gasfabriek van W.H. de Heus aan het Vredenburg. De steenmassa\nis het noordwestelijke bastion van het vroegere kasteel Vredenburg. Foto uit omstreeks 1859",
        "link_bron": "https://hetutrechtsarchief.nl/beeld/B6B9365CBB68539A9722E09AAD843FF8",
        "points": [
          {
            "x": 3270,
            "y": 1165
          },
          {
            "x": 3270,
            "y": 952
          },
          {
            "x": 3206,
            "y": 882
          },
          {
            "x": 3200,
            "y": 911
          },
          {
            "x": 2969,
            "y": 905
          },
          {
            "x": 2958,
            "y": 888
          },
          {
            "x": 2938,
            "y": 874
          },
          {
            "x": 2943,
            "y": 900
          },
          {
            "x": 2877,
            "y": 960
          },
          {
            "x": 2880,
            "y": 1168
          }
        ]
      },
      {
        "name": "Gebied 5",
        "catalogusnummer": "",
        "title": "",
        "beschrijving": " Plattegrond van het gebouwencomplex van de koperpletterij en\ngasfabriek van W.H. de Heus, gelegen tussen de Stadsbuitengracht en het Vredenburg te\nUtrecht; met vermelding van de bestemming van de gebouwen.\nMet legenda en een aantal doorhalingen en notities.",
        "link_bron": "https://hetutrechtsarchief.nl/beeld/65A95647F9105D7790B7D46843629005",
        "points": [
          {
            "x": 3752,
            "y": 949
          },
          {
            "x": 3752,
            "y": 912
          },
          {
            "x": 3408,
            "y": 920
          },
          {
            "x": 3394,
            "y": 903
          },
          {
            "x": 3339,
            "y": 967
          },
          {
            "x": 3342,
            "y": 1169
          },
          {
            "x": 3752,
            "y": 1160
          }
        ]
      }
    ],
    "height": 489,
    "margin_left": -58,
    "margin_top": 99,
    "z_index": 10
  },
  {
    "id": 11,
    "catalogusnummer": "135011",
    "afbeelding": "11.jpg",
    "alt": "",
    "beschrijving": "Gezicht op de koperpletterij van W.H. de Heus met het zuidwestelijke bastion van\nhet vroegere kasteel Vredenburg en rechts de Rijnkade te Utrecht.",
    "link_bron": "https://hetutrechtsarchief.nl/beeld/63F776776A4F5571B7F9BA921BA82C53",
    "x": 1988,
    "y": 353,
    "polygons": [
      {
        "name": "Gebied 1",
        "catalogusnummer": "",
        "title": "",
        "beschrijving": "Plattegrond van het gebouwencomplex van de koperpletterij en\ngasfabriek van W.H. de Heus, gelegen tussen de Stadsbuitengracht en het Vredenburg te\nUtrecht; met vermelding van de bestemming van de gebouwen.\nMet legenda en een aantal doorhalingen en notities.",
        "link_bron": " https://hetutrechtsarchief.nl/beeld/65A95647F9105D7790B7D46843629005",
        "points": [
          {
            "x": 973,
            "y": 1069
          },
          {
            "x": 986,
            "y": 968
          },
          {
            "x": 939,
            "y": 934
          },
          {
            "x": 786,
            "y": 938
          },
          {
            "x": 790,
            "y": 627
          },
          {
            "x": 769,
            "y": 597
          },
          {
            "x": 748,
            "y": 631
          },
          {
            "x": 748,
            "y": 934
          },
          {
            "x": 518,
            "y": 929
          },
          {
            "x": 513,
            "y": 904
          },
          {
            "x": 488,
            "y": 895
          },
          {
            "x": 484,
            "y": 925
          },
          {
            "x": 428,
            "y": 917
          },
          {
            "x": 360,
            "y": 955
          },
          {
            "x": 317,
            "y": 917
          },
          {
            "x": 253,
            "y": 972
          },
          {
            "x": 224,
            "y": 925
          },
          {
            "x": 0,
            "y": 925
          },
          {
            "x": 11,
            "y": 1176
          },
          {
            "x": 969,
            "y": 1181
          }
        ]
      }
    ],
    "height": 489,
    "margin_left": -81,
    "margin_top": 101,
    "z_index": 11
  },
  {
    "id": 12,
    "catalogusnummer": "135012",
    "afbeelding": "12.jpg",
    "alt": "",
    "beschrijving": "Gezicht over de Willemsbrug op de Rijnkade te Utrecht, het hek met de\ndouanekantoortjes aan weerszijden van de brug (de Willemsbarrière) en rechts van de brug het\nbegin van het in Engelse landschapsstijl aangelegde singelplantsoen.",
    "link_bron": "https://hetutrechtsarchief.nl/beeld/258DF9FF4E905A80ACE2E300C1D7C5B0",
    "x": 1854,
    "y": 323,
    "polygons": [
      {
        "name": "Gebied 1",
        "catalogusnummer": "",
        "title": "",
        "beschrijving": "",
        "link_bron": "",
        "points": [
          {
            "x": 1570,
            "y": 1213
          },
          {
            "x": 1781,
            "y": 1148
          },
          {
            "x": 1951,
            "y": 1107
          },
          {
            "x": 2029,
            "y": 1131
          },
          {
            "x": 2161,
            "y": 1124
          },
          {
            "x": 2250,
            "y": 1165
          },
          {
            "x": 2623,
            "y": 1335
          },
          {
            "x": 3248,
            "y": 1488
          },
          {
            "x": 3706,
            "y": 1522
          },
          {
            "x": 3699,
            "y": 1590
          },
          {
            "x": 1492,
            "y": 1576
          },
          {
            "x": 1513,
            "y": 1508
          },
          {
            "x": 2049,
            "y": 1447
          },
          {
            "x": 2070,
            "y": 1416
          },
          {
            "x": 1873,
            "y": 1335
          },
          {
            "x": 1876,
            "y": 1223
          }
        ]
      },
      {
        "name": "Gebied 2",
        "catalogusnummer": "",
        "title": "",
        "beschrijving": "Gezicht vanaf de Catharijnesingel te Utrecht over de Willemsbrug met\nde beide commiezenhuisjes uit het zuidwesten, met links het hoekhuis aan de Rijnkade, rechts\neen herenhuis in het Willemsplantsoen en op de achtergrond de Mariaplaats en de Buur- en\nDomtoren. Omstreeks 1850.",
        "link_bron": "https://hetutrechtsarchief.nl/beeld/760266C82F6050B7AE95AB4DCC8C0DDD",
        "points": [
          {
            "x": 2419,
            "y": 1209
          },
          {
            "x": 2419,
            "y": 985
          },
          {
            "x": 2378,
            "y": 932
          },
          {
            "x": 2382,
            "y": 914
          },
          {
            "x": 2351,
            "y": 910
          },
          {
            "x": 2349,
            "y": 926
          },
          {
            "x": 2246,
            "y": 926
          },
          {
            "x": 2246,
            "y": 906
          },
          {
            "x": 2226,
            "y": 906
          },
          {
            "x": 2225,
            "y": 926
          },
          {
            "x": 2190,
            "y": 957
          },
          {
            "x": 2159,
            "y": 974
          },
          {
            "x": 2166,
            "y": 1003
          },
          {
            "x": 2161,
            "y": 1108
          },
          {
            "x": 2199,
            "y": 1149
          },
          {
            "x": 2333,
            "y": 1205
          }
        ]
      }
    ],
    "height": 489,
    "margin_left": -58,
    "margin_top": 105,
    "z_index": 12
  },
  {
    "id": 13,
    "catalogusnummer": "135013",
    "afbeelding": "13.jpg",
    "alt": "",
    "beschrijving": "Gezicht op het in Engelse landschapsstijl aangelegde singelplantsoen te Utrecht\nmet het theehuis van de oud-rooms-katholieke aartsbisschop en rechts het hospitaal van het\nDuitse Huis. Het kruis boven het langgerekte rode dak is van de Dominicuskerk op de\nMariaplaats.",
    "link_bron": "https://hetutrechtsarchief.nl/beeld/4A4C50C570245E8588497B3C7A450AF2",
    "x": 1920,
    "y": 270,
    "polygons": [
      {
        "name": "Gebied 1",
        "catalogusnummer": "135013",
        "title": "",
        "beschrijving": "Gezicht op de Mariaplaats te Utrecht uit het westen, met in het midden\nop de achtergrond de Zadelstraat en de Domtoren. Op de foto zie je ook een waterpomp. De\npomp werd in 1844 op de Mariaplaats geplaatst en leverde schoon water, zelfs tijdens de\ncholera-uitbraken in de jaren 1870.",
        "link_bron": "https://hetutrechtsarchief.nl/beeld/6327971C55015F558F79C26FA10CDA00",
        "points": [
          {
            "x": 603,
            "y": 1142
          },
          {
            "x": 604,
            "y": 969
          },
          {
            "x": 607,
            "y": 939
          },
          {
            "x": 631,
            "y": 939
          },
          {
            "x": 666,
            "y": 912
          },
          {
            "x": 663,
            "y": 899
          },
          {
            "x": 682,
            "y": 895
          },
          {
            "x": 740,
            "y": 895
          },
          {
            "x": 742,
            "y": 908
          },
          {
            "x": 761,
            "y": 930
          },
          {
            "x": 781,
            "y": 930
          },
          {
            "x": 771,
            "y": 948
          },
          {
            "x": 793,
            "y": 949
          },
          {
            "x": 784,
            "y": 967
          },
          {
            "x": 954,
            "y": 964
          },
          {
            "x": 954,
            "y": 952
          },
          {
            "x": 961,
            "y": 951
          },
          {
            "x": 966,
            "y": 946
          },
          {
            "x": 967,
            "y": 912
          },
          {
            "x": 951,
            "y": 917
          },
          {
            "x": 947,
            "y": 902
          },
          {
            "x": 964,
            "y": 902
          },
          {
            "x": 960,
            "y": 885
          },
          {
            "x": 988,
            "y": 883
          },
          {
            "x": 983,
            "y": 902
          },
          {
            "x": 1004,
            "y": 899
          },
          {
            "x": 1005,
            "y": 915
          },
          {
            "x": 989,
            "y": 924
          },
          {
            "x": 980,
            "y": 943
          },
          {
            "x": 995,
            "y": 942
          },
          {
            "x": 993,
            "y": 951
          },
          {
            "x": 1002,
            "y": 952
          },
          {
            "x": 1002,
            "y": 964
          },
          {
            "x": 1029,
            "y": 968
          },
          {
            "x": 1020,
            "y": 949
          },
          {
            "x": 1045,
            "y": 937
          },
          {
            "x": 1064,
            "y": 946
          },
          {
            "x": 1061,
            "y": 970
          },
          {
            "x": 1276,
            "y": 967
          },
          {
            "x": 1270,
            "y": 946
          },
          {
            "x": 1283,
            "y": 933
          },
          {
            "x": 1302,
            "y": 942
          },
          {
            "x": 1296,
            "y": 970
          },
          {
            "x": 1397,
            "y": 967
          },
          {
            "x": 1385,
            "y": 945
          },
          {
            "x": 1400,
            "y": 927
          },
          {
            "x": 1419,
            "y": 939
          },
          {
            "x": 1422,
            "y": 968
          },
          {
            "x": 1470,
            "y": 967
          },
          {
            "x": 1471,
            "y": 1142
          }
        ]
      }
    ],
    "height": 489,
    "margin_left": -75,
    "margin_top": 101,
    "z_index": 13
  },
  {
    "id": 14,
    "catalogusnummer": "1350014",
    "afbeelding": "14.jpg",
    "alt": "Panorama van Utrecht — deel 14",
    "beschrijving": "Gezicht op het in Engelse landschapsstijl aangelegde singelplantsoen te Utrecht\nter hoogte van de Zeven Steegjes. De opzet van het plan Zocher was om de minder\naantrekkelijke delen van de stad te camoufleren. Dat doet hij hier door middel van een\nplantsoen. \n\nAanvullende informatie: Plattegrond van de stad Utrecht met directe omgeving; met weergave\nvan het stratenplan (deels met straatnamen), wegen en watergangen en aanduiding van de\nbelangrijke gebouwen. Met weergave van alle groenvoorzieningen, waaronder de plantsoenen,\ndoor Zocher aangelegd op de geslechte wallen en bolwerken, aangeduid als \"Nieuwe\nwandeling\". Met lijst van belangrijke gebouwen en overige objecten. Datering rond 1858.",
    "link_bron": "foto 1: https://hetutrechtsarchief.nl/beeld/6759D656B0C95F08925ADB45D52FC5EF Foto 2: https://hetutrechtsarchief.nl/beeld/08AA17E1FA7D5A7A8CA290331C728100",
    "x": 1914,
    "y": 289,
    "polygons": null,
    "height": 489,
    "margin_left": -60,
    "margin_top": 102,
    "z_index": 14
  },
  {
    "id": 15,
    "catalogusnummer": "135015",
    "afbeelding": "15.jpg",
    "alt": "Panorama van Utrecht — deel 15",
    "beschrijving": "Gezicht op het singelplantsoen te Utrecht met het Bartholomeusgasthuis.",
    "link_bron": "https://hetutrechtsarchief.nl/beeld/CA88E4BBEF625553BA328781A0EAE594",
    "x": 1955,
    "y": 290,
    "polygons": null,
    "height": 489,
    "margin_left": -65,
    "margin_top": 102,
    "z_index": 15
  },
  {
    "id": 16,
    "catalogusnummer": "135016",
    "afbeelding": "16.jpg",
    "alt": "Panorama van Utrecht — deel 16",
    "beschrijving": "Gezicht op het singelplantsoen te Utrecht met links de Geertekerk en in de\nstadsbuitengracht een houtvlot.",
    "link_bron": "https://hetutrechtsarchief.nl/beeld/88A6A522198C5D69B1E2A459A076036C",
    "x": null,
    "y": null,
    "polygons": [
      {
        "name": "Gebied 1",
        "catalogusnummer": "135016",
        "title": "",
        "beschrijving": "De stadsbuitengracht (Singel)\nhad de taak als doorgaande scheepsroute overgenomen van de Oudegracht. Dit houtvlot\nbestaat uit aan elkaar gebonden rijen boomstammen. Zo’n transport was vaak dagenlang\nonderweg naar zijn eindbestemming, dikwijls Amsterdam.",
        "link_bron": "",
        "points": [
          {
            "x": 3709,
            "y": 1303
          },
          {
            "x": 3174,
            "y": 1311
          },
          {
            "x": 3172,
            "y": 1281
          },
          {
            "x": 3188,
            "y": 1281
          },
          {
            "x": 3150,
            "y": 1241
          },
          {
            "x": 3123,
            "y": 1241
          },
          {
            "x": 3117,
            "y": 1181
          },
          {
            "x": 3101,
            "y": 1181
          },
          {
            "x": 3090,
            "y": 1238
          },
          {
            "x": 2973,
            "y": 1235
          },
          {
            "x": 2925,
            "y": 1281
          },
          {
            "x": 2949,
            "y": 1298
          },
          {
            "x": 2843,
            "y": 1295
          },
          {
            "x": 2835,
            "y": 1260
          },
          {
            "x": 2859,
            "y": 1260
          },
          {
            "x": 2811,
            "y": 1192
          },
          {
            "x": 2667,
            "y": 1195
          },
          {
            "x": 2604,
            "y": 1257
          },
          {
            "x": 2626,
            "y": 1254
          },
          {
            "x": 2626,
            "y": 1292
          },
          {
            "x": 2553,
            "y": 1292
          },
          {
            "x": 2517,
            "y": 1254
          },
          {
            "x": 2534,
            "y": 1227
          },
          {
            "x": 2496,
            "y": 1216
          },
          {
            "x": 2490,
            "y": 1249
          },
          {
            "x": 2422,
            "y": 1195
          },
          {
            "x": 2488,
            "y": 1260
          },
          {
            "x": 2488,
            "y": 1300
          },
          {
            "x": 2224,
            "y": 1298
          },
          {
            "x": 2194,
            "y": 1314
          },
          {
            "x": 2417,
            "y": 1390
          },
          {
            "x": 3704,
            "y": 1387
          }
        ]
      }
    ],
    "height": 489,
    "margin_left": -65,
    "margin_top": 107,
    "z_index": 16
  },
  {
    "id": 17,
    "catalogusnummer": "135017",
    "afbeelding": "17.jpg",
    "alt": "Panorama van Utrecht — deel 17",
    "beschrijving": "Gezicht op het singelplantsoen te Utrecht met half achter de bomen het\nDiakonessenhuis aan de Springweg en rechts een gedeelte van het vroegere bastion Sterrenburg\nmet daarachter de molen op de Bijlhouwerstoren en in de stadsbuitengracht een houtvlot.",
    "link_bron": "https://hetutrechtsarchief.nl/beeld/28CC42C93E3E52ECBC63C4496D95DD45",
    "x": null,
    "y": null,
    "polygons": [
      {
        "name": "Gebied 1",
        "catalogusnummer": "",
        "title": "",
        "beschrijving": "De stadsbuitengracht (Singel)\nhad de taak als doorgaande scheepsroute overgenomen van de Oudegracht. Dit houtvlot\nbestaat uit aan elkaar gebonden rijen boomstammen. Zo’n transport was vaak dagenlang\nonderweg naar zijn eindbestemming, dikwijls Amsterdam.",
        "link_bron": "",
        "points": [
          {
            "x": 3600,
            "y": 1387
          },
          {
            "x": 3502,
            "y": 1305
          },
          {
            "x": 3262,
            "y": 1305
          },
          {
            "x": 3270,
            "y": 1251
          },
          {
            "x": 3314,
            "y": 1212
          },
          {
            "x": 3262,
            "y": 1241
          },
          {
            "x": 3267,
            "y": 1199
          },
          {
            "x": 3230,
            "y": 1199
          },
          {
            "x": 3233,
            "y": 1239
          },
          {
            "x": 3225,
            "y": 1283
          },
          {
            "x": 3188,
            "y": 1308
          },
          {
            "x": 2535,
            "y": 1303
          },
          {
            "x": 2377,
            "y": 1278
          },
          {
            "x": 2344,
            "y": 1232
          },
          {
            "x": 2361,
            "y": 1202
          },
          {
            "x": 2331,
            "y": 1187
          },
          {
            "x": 2327,
            "y": 1230
          },
          {
            "x": 2304,
            "y": 1266
          },
          {
            "x": 2214,
            "y": 1255
          },
          {
            "x": 2312,
            "y": 1268
          },
          {
            "x": 2325,
            "y": 1287
          },
          {
            "x": 2327,
            "y": 1306
          },
          {
            "x": 2116,
            "y": 1304
          },
          {
            "x": 2029,
            "y": 1245
          },
          {
            "x": 2001,
            "y": 1225
          },
          {
            "x": 2025,
            "y": 1213
          },
          {
            "x": 2014,
            "y": 1185
          },
          {
            "x": 1987,
            "y": 1194
          },
          {
            "x": 1987,
            "y": 1228
          },
          {
            "x": 1927,
            "y": 1304
          },
          {
            "x": 442,
            "y": 1298
          },
          {
            "x": 412,
            "y": 1260
          },
          {
            "x": 425,
            "y": 1241
          },
          {
            "x": 422,
            "y": 1208
          },
          {
            "x": 391,
            "y": 1214
          },
          {
            "x": 389,
            "y": 1247
          },
          {
            "x": 361,
            "y": 1310
          },
          {
            "x": 0,
            "y": 1301
          },
          {
            "x": 0,
            "y": 1392
          }
        ]
      }
    ],
    "height": 489,
    "margin_left": -47,
    "margin_top": 109,
    "z_index": 41
  },
  {
    "id": 18,
    "catalogusnummer": "135018",
    "afbeelding": "18.jpg",
    "alt": "Panorama van Utrecht — deel 18",
    "beschrijving": "Gezicht op het singelplantsoen te Utrecht met het dubbele woonhuis boven de\nkazematten van het vroegere bastion Sterrenburg en de molen op de Bijlhouwerstoren.",
    "link_bron": "https://hetutrechtsarchief.nl/beeld/EAB9EA9ABD12590990685BA19BB84658",
    "x": 1952,
    "y": 241,
    "polygons": null,
    "height": 489,
    "margin_left": -52,
    "margin_top": 116,
    "z_index": 40
  },
  {
    "id": 19,
    "catalogusnummer": "135019",
    "afbeelding": "19.jpg",
    "alt": "Panorama van Utrecht — deel 19",
    "beschrijving": "Gezicht over de Tolsteegbrug te Utrecht op de hekpalen van de Tolsteegbarrière bij\nhet Ledig Erf met daaronder de uitmonding van de Oudegracht in de stadsbuitengracht en rechts\nhet in het singelplantsoen opgenomen vroegere bastion Manenburg.",
    "link_bron": "https://hetutrechtsarchief.nl/beeld/73228A5574FB54CBB908821C0782B896",
    "x": 1911,
    "y": 323,
    "polygons": null,
    "height": 489,
    "margin_left": -54,
    "margin_top": 120,
    "z_index": 19
  },
  {
    "id": 20,
    "catalogusnummer": "135020",
    "afbeelding": "20.jpg",
    "alt": "Panorama van Utrecht — deel 20",
    "beschrijving": "Gezicht op het singelplantsoen te Utrecht met de zuidwestelijke toren van de\nNicolaikerk en de cavaleriestallen met daarachter een gebouw van het voormalige St.-\nAgnietenklooster. Tegenwoordig ziet hier het Centraal Museum.",
    "link_bron": "https://hetutrechtsarchief.nl/beeld/EDC28E77EE0A537C9101A3F79BE38CE6",
    "x": 1867,
    "y": 371,
    "polygons": null,
    "height": 489,
    "margin_left": -51,
    "margin_top": 124,
    "z_index": 20
  },
  {
    "id": 21,
    "catalogusnummer": "135021",
    "afbeelding": "21.jpg",
    "alt": "Panorama van Utrecht — deel 21",
    "beschrijving": "Gezicht op het singelplantsoen te Utrecht met het gebouw van de Fundatie van de\nVrijvrouwe van Renswoude en rechts de kameren van Maria van Pallaes aan de Agnietenstraat.",
    "link_bron": "https://hetutrechtsarchief.nl/beeld/F0DFA55F8AC0533F908948D3B2513F86",
    "x": 1960,
    "y": 336,
    "polygons": null,
    "height": 489,
    "margin_left": -36,
    "margin_top": 134,
    "z_index": -4
  },
  {
    "id": 22,
    "catalogusnummer": "135022",
    "afbeelding": "22.jpg",
    "alt": "Panorama van Utrecht — deel 22",
    "beschrijving": "Gezicht op het singelplantsoen te Utrecht met geheel links de regentenkamer van\nde kameren van Maria van Pallaes en daarnaast de Nieuwegracht 'Onder de Linden' en de\nuitmonding van de Nieuwegracht in de stadsbuitengracht en rechts de rode daken van\ngebouwen van de voormalige St.-Servaasabdij.",
    "link_bron": "https://hetutrechtsarchief.nl/beeld/3D37B999C1995D7F8945C563E1F00E97",
    "x": 1956,
    "y": 360,
    "polygons": null,
    "height": 489,
    "margin_left": -51,
    "margin_top": 133,
    "z_index": 34
  },
  {
    "id": 23,
    "catalogusnummer": "135023",
    "afbeelding": "23.jpg",
    "alt": "Panorama van Utrecht — deel 23",
    "beschrijving": "Gezicht op het singelplantsoen rond het voormalige bastion Zonnenburg te Utrecht\nmet links op de achtergrond een van de gebouwen van de voormalige St.-Servaasabdij, in het\nmidden het Meteorologisch Instituut en rechts de Sterrenwacht.",
    "link_bron": "https://hetutrechtsarchief.nl/beeld/FE85A26FBA285835A01DD51A26B62E42",
    "x": 1786,
    "y": 315,
    "polygons": [
      {
        "name": "Gebied 1",
        "catalogusnummer": "",
        "title": "",
        "beschrijving": "",
        "link_bron": "",
        "points": [
          {
            "x": 1199,
            "y": 1132
          },
          {
            "x": 1189,
            "y": 832
          },
          {
            "x": 1267,
            "y": 825
          },
          {
            "x": 1257,
            "y": 766
          },
          {
            "x": 1248,
            "y": 711
          },
          {
            "x": 1257,
            "y": 670
          },
          {
            "x": 1273,
            "y": 711
          },
          {
            "x": 1459,
            "y": 497
          },
          {
            "x": 1456,
            "y": 391
          },
          {
            "x": 1471,
            "y": 301
          },
          {
            "x": 1524,
            "y": 289
          },
          {
            "x": 1530,
            "y": 301
          },
          {
            "x": 1484,
            "y": 314
          },
          {
            "x": 1487,
            "y": 497
          },
          {
            "x": 1623,
            "y": 689
          },
          {
            "x": 1664,
            "y": 676
          },
          {
            "x": 1685,
            "y": 642
          },
          {
            "x": 1689,
            "y": 726
          },
          {
            "x": 1738,
            "y": 720
          },
          {
            "x": 1720,
            "y": 745
          },
          {
            "x": 1720,
            "y": 794
          },
          {
            "x": 1785,
            "y": 797
          },
          {
            "x": 1785,
            "y": 1123
          }
        ]
      },
      {
        "name": "Gebied 2",
        "catalogusnummer": "135023",
        "title": "",
        "beschrijving": "Gezicht over de stadsbuitengracht te Utrecht op de Sterrenwacht\n(Astronomisch Observatorium) op het voormalige bastion Zonnenburg. Foto omstreeks 1859.",
        "link_bron": "https://hetutrechtsarchief.nl/beeld/1E43305A0B485079BB540EB1F2BC294D",
        "points": [
          {
            "x": 3425,
            "y": 1007
          },
          {
            "x": 2647,
            "y": 990
          },
          {
            "x": 2352,
            "y": 1604
          },
          {
            "x": 3450,
            "y": 1591
          }
        ]
      }
    ],
    "height": 489,
    "margin_left": -51,
    "margin_top": 130,
    "z_index": 35
  },
  {
    "id": 24,
    "catalogusnummer": "135024",
    "afbeelding": "24.jpg",
    "alt": "Panorama van Utrecht — deel 24",
    "beschrijving": "Gezicht op het singelplantsoen bij het Servaasbolwerkte Utrecht met rechts op de\nachtergrond een gedeelte van het St.-Magdalenaklooster.\n\n\naanvullende informatie: Plattegrond van een niet gevoerd ontwerp van Zocher voor een\nplantsoen op het bastion Lepelenburg te Utrecht.",
    "link_bron": "Foto 1: https://hetutrechtsarchief.nl/beeld/CD56E44A31FF505B994E7E4D033EDB6C Foto 2:  https://hetutrechtsarchief.nl/beeld/6391B40590B65F228CE253049071E836",
    "x": 1826,
    "y": 255,
    "polygons": null,
    "height": 489,
    "margin_left": -51,
    "margin_top": 128,
    "z_index": 24
  },
  {
    "id": 25,
    "catalogusnummer": "135025",
    "afbeelding": "25.jpg",
    "alt": "Panorama van Utrecht — deel 25",
    "beschrijving": "Gezicht op het singelplantsoen bij het Servaasbolwerk te Utrecht met het gebouw\nvan het voormalige Leeuwenberchgasthuis, destijds in gebruik als chemisch laboratorium, en op\nde achtergrond de daken van de bisschoppelijke stallen op het Servaasbolwerk.",
    "link_bron": "https://hetutrechtsarchief.nl/beeld/5D7B85DA087B59CE94AE432CFBBCF908",
    "x": 1877,
    "y": 328,
    "polygons": null,
    "height": 489,
    "margin_left": -41,
    "margin_top": 125,
    "z_index": 25
  },
  {
    "id": 26,
    "catalogusnummer": "135026",
    "afbeelding": "26.jpg",
    "alt": "Panorama van Utrecht — deel 26",
    "beschrijving": "Gezicht over de Maliebrug met het dubbele hek en het douanekantoortje (de\nMaliebarrière) te Utrecht op het singelplantsoen met geheel links een gedeelte van de\nBruntenhof en rechts een gedeelte van het bolwerk Lepelenburg.",
    "link_bron": "https://hetutrechtsarchief.nl/beeld/5890DC9B634A51B8A6A720B98851D290",
    "x": 1802,
    "y": 292,
    "polygons": [
      {
        "name": "Gebied 1",
        "catalogusnummer": "135026",
        "title": "",
        "beschrijving": "Gezicht op de Maliebrug over de Stadsbuitengracht te Utrecht, uit het\nnoordoosten.",
        "link_bron": "https://hetutrechtsarchief.nl/beeld/A7393BB93FDA516FA3618D044403AE7D",
        "points": [
          {
            "x": 3700,
            "y": 1452
          },
          {
            "x": 3490,
            "y": 1344
          },
          {
            "x": 3206,
            "y": 1116
          },
          {
            "x": 3091,
            "y": 1075
          },
          {
            "x": 3106,
            "y": 993
          },
          {
            "x": 3072,
            "y": 1004
          },
          {
            "x": 3087,
            "y": 937
          },
          {
            "x": 3031,
            "y": 937
          },
          {
            "x": 3042,
            "y": 918
          },
          {
            "x": 2919,
            "y": 911
          },
          {
            "x": 2919,
            "y": 1112
          },
          {
            "x": 2561,
            "y": 1120
          },
          {
            "x": 2565,
            "y": 881
          },
          {
            "x": 2539,
            "y": 885
          },
          {
            "x": 2550,
            "y": 918
          },
          {
            "x": 2445,
            "y": 915
          },
          {
            "x": 2449,
            "y": 1068
          },
          {
            "x": 2345,
            "y": 1179
          },
          {
            "x": 2300,
            "y": 1261
          },
          {
            "x": 2173,
            "y": 1377
          },
          {
            "x": 2072,
            "y": 1441
          },
          {
            "x": 1934,
            "y": 1511
          },
          {
            "x": 1919,
            "y": 1582
          },
          {
            "x": 3700,
            "y": 1571
          }
        ]
      }
    ],
    "height": 489,
    "margin_left": -42,
    "margin_top": 129,
    "z_index": 26
  },
  {
    "id": 27,
    "catalogusnummer": "135027",
    "afbeelding": "27.jpg",
    "alt": "Panorama van Utrecht — deel 27",
    "beschrijving": "Gezicht op het voormalige bolwerk Lepelenburg te Utrecht met links het huis\nLievendaal en rechts enkele particuliere tuinhuizen.",
    "link_bron": "https://hetutrechtsarchief.nl/beeld/A9A6F5A2D16A5F4F8F803D074786B13B",
    "x": 1982,
    "y": 316,
    "polygons": null,
    "height": 489,
    "margin_left": -56,
    "margin_top": 138,
    "z_index": 27
  },
  {
    "id": 28,
    "catalogusnummer": "135028",
    "afbeelding": "28.jpg",
    "alt": "Panorama van Utrecht — deel 28",
    "beschrijving": "Gezicht op het voormalige bolwerk Lepelenburg te Utrecht met een aantal\nparticuliere tuinen en tuinhuizen.",
    "link_bron": "https://hetutrechtsarchief.nl/beeld/CA0B6316D7905D4C8589457F8C9001AA",
    "x": 1983,
    "y": 353,
    "polygons": null,
    "height": 489,
    "margin_left": -58,
    "margin_top": 138,
    "z_index": 28
  },
  {
    "id": 29,
    "catalogusnummer": "135029",
    "afbeelding": "29.jpg",
    "alt": "Panorama van Utrecht — deel 29",
    "beschrijving": "Gezicht op het singelplantsoen te Utrecht ten noorden van het voormalige bolwerk\nLepelenburg, waarop het witte huis links staat, met in het midden de huizen aan het begin van\nde Herenstraat en rechtsachter enkele van de kameren van Jan van der Meer aan het\nHieronymusplantsoen.",
    "link_bron": "https://hetutrechtsarchief.nl/beeld/613B43B28E9D5000B05A6CAE90B08305",
    "x": 1844,
    "y": 353,
    "polygons": null,
    "height": 489,
    "margin_left": -54,
    "margin_top": 138,
    "z_index": 29
  },
  {
    "id": 30,
    "catalogusnummer": "135030",
    "afbeelding": "30.jpg",
    "alt": "Panorama van Utrecht — deel 30",
    "beschrijving": "Gezicht op het singelplantsoen te Utrecht ter hoogte van de bocht van de Kromme\nNieuwegracht (links op de achtergrond) met de huizen aan het Hieronymusplantsoen en\ndaarachter de voormalige St.-Hieronymuskapel en rechts twee boogjes, de restanten van de\noude stadsmuur.",
    "link_bron": "https://hetutrechtsarchief.nl/beeld/E4C30A03277455A08CF407FC60681B72",
    "x": 1962,
    "y": 348,
    "polygons": null,
    "height": 489,
    "margin_left": -65,
    "margin_top": 143,
    "z_index": 30
  },
  {
    "id": 31,
    "catalogusnummer": "135031",
    "afbeelding": "31.jpg",
    "alt": "Panorama van Utrecht — deel 31",
    "beschrijving": "Gezicht op het singelplantsoen te Utrecht met links de Zonstraat (later gewijzigd in\nNobelstraat) die aansluit op de Lucasbrug, op de voorgrond, met rechts daarvan het\nLucasbolwerk met het Suikerhuis.",
    "link_bron": "https://hetutrechtsarchief.nl/beeld/33334F8B578654D185D79BC427669DFB",
    "x": 1952,
    "y": 353,
    "polygons": [
      {
        "name": "Gebied 1",
        "catalogusnummer": "135031",
        "title": "",
        "beschrijving": "De Lucasbrug werd ook wel ‘knuppelbrug’ genoemd. De brug is\nopgebouwd uit schijnbaar willekeurig geplaatste ruwe boomstammetjes.",
        "link_bron": "https://hetutrechtsarchief.nl/beeld/2F9DEEE2246258BDA4B5EBB33350EAC4",
        "points": [
          {
            "x": 1797,
            "y": 1554
          },
          {
            "x": 1792,
            "y": 1475
          },
          {
            "x": 1824,
            "y": 1499
          },
          {
            "x": 1832,
            "y": 1481
          },
          {
            "x": 1548,
            "y": 1247
          },
          {
            "x": 1431,
            "y": 1202
          },
          {
            "x": 1267,
            "y": 1168
          },
          {
            "x": 1272,
            "y": 1205
          },
          {
            "x": 1161,
            "y": 1186
          },
          {
            "x": 1073,
            "y": 1162
          },
          {
            "x": 1076,
            "y": 1210
          },
          {
            "x": 1169,
            "y": 1242
          },
          {
            "x": 1169,
            "y": 1343
          },
          {
            "x": 1187,
            "y": 1340
          },
          {
            "x": 1187,
            "y": 1250
          },
          {
            "x": 1230,
            "y": 1258
          },
          {
            "x": 1232,
            "y": 1343
          },
          {
            "x": 1262,
            "y": 1287
          },
          {
            "x": 1262,
            "y": 1444
          },
          {
            "x": 1285,
            "y": 1449
          },
          {
            "x": 1277,
            "y": 1311
          },
          {
            "x": 1370,
            "y": 1422
          },
          {
            "x": 1365,
            "y": 1536
          },
          {
            "x": 1384,
            "y": 1534
          },
          {
            "x": 1386,
            "y": 1444
          },
          {
            "x": 1471,
            "y": 1558
          }
        ]
      }
    ],
    "height": 489,
    "margin_left": -61,
    "margin_top": 145,
    "z_index": 31
  },
  {
    "id": 32,
    "catalogusnummer": "135032",
    "afbeelding": "32.jpg",
    "alt": "Panorama van Utrecht — deel 32",
    "beschrijving": "Gezicht op het singelplantsoen te Utrecht met links de noordelijke punt van het\nLucasbolwerk met de directeurswoning van het Suikerhuis. Het Suikerhuis was een\nsuikerraffinaderij die in 1721 werd begonnen. In 1860 werd deze afgebroken.",
    "link_bron": "https://hetutrechtsarchief.nl/beeld/AA7F2C16737A51AEB41E75F892B46704",
    "x": 1895,
    "y": 393,
    "polygons": [
      {
        "name": "Gebied 1",
        "catalogusnummer": "135032",
        "title": "",
        "beschrijving": "Gezicht op het Lucasbolwerk met het Suikerhuis te Utrecht, vóór de\nafbraak, uit het noorden.",
        "link_bron": "https://hetutrechtsarchief.nl/beeld/809F5D0A817A5588B2A9389988BB0B00",
        "points": [
          {
            "x": 1099,
            "y": 884
          },
          {
            "x": 1010,
            "y": 991
          },
          {
            "x": 999,
            "y": 1180
          },
          {
            "x": 1318,
            "y": 1180
          },
          {
            "x": 1311,
            "y": 1070
          },
          {
            "x": 1281,
            "y": 991
          },
          {
            "x": 1270,
            "y": 1029
          },
          {
            "x": 1226,
            "y": 1019
          },
          {
            "x": 1181,
            "y": 1077
          },
          {
            "x": 1181,
            "y": 971
          }
        ]
      }
    ],
    "height": 489,
    "margin_left": -49,
    "margin_top": 137,
    "z_index": 32
  },
  {
    "id": 33,
    "catalogusnummer": "135033",
    "afbeelding": "33.jpg",
    "alt": "Panorama van Utrecht — deel 33",
    "beschrijving": "Gezicht op het singelplantsoen te Utrecht ten noorden van het Lucasbolwerk.\nUiterst rechts sluit het plantsoen aan bij de Wittevrouwenbrug waarmee het panorama begint.\nHier eindigt de tekenaar zijn rondje langs de singel.",
    "link_bron": "https://hetutrechtsarchief.nl/beeld/33124A9788485D87ABA2B6030C6BD73B",
    "x": 1762,
    "y": 358,
    "polygons": null,
    "height": 489,
    "margin_left": -58,
    "margin_top": 141,
    "z_index": 33
  }
]
