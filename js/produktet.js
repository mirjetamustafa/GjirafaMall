let carts = document.querySelectorAll('.add-cart')



let shopItemsData = [
    {
        id: "1",
        name: "Parfum Lancome La Vie Est Belle Intensément 50ml",
        tag: "Emulsioni nga CeraVe është dizajnuar për pastrimin dhe njomjen e lëkurës së trupit dhe fytyrës pa ndryshuar pengesën mbrojtëse. Është pasuruar me ceramide 1, 3, 6-II, acid hialuronik, glicerinë dhe kolesterol, i përshtatshëm për higjienën e përdit...",
        price: 126.00,
        oldPrice: 0,
        img: "https://gv466hf5ah.gjirafa.net/image/1079/1079529.jpg?width=250&height=250",
        trans: "https://gjirafamall.com/Content/24hicon.svg",
        zbritje: 0
    },
    {
        id: "2",
        name: "Parfum Ccalvin Kllein IN 2U MEN 50 ml",
        tag: "Përshkrimi është duke u përpunuar, ndërkohë mund të shikoni specifikat teknike, apo kontaktoni në...",
        price: 24.90,
        oldPrice: 49.80,
        img: "https://gv466hf5ah.gjirafa.net/image/1322/1322622.jpg?width=250&height=250",
        zbritje: -50
    },
    {
        id: "3",
        name: "Eau De Parfum Emporio Armani Stronger With You Freeze 100 ml",
        tag: "Përshkrimi është duke u përpunuar, ndërkohë mund të shikoni specifikat teknike, apo kontaktoni në...",
        price: 92.00,
        oldPrice: 108.36,
        img: "https://gv466hf5ah.gjirafa.net/image/0608/0608730.png?width=250&height=250",
        trans: "https://gjirafamall.com/Content/24hicon.svg",
        zbritje: -15
    },
    {
        id: "4",
        name: "Krem pudër BB Garnier Pure Active, Light, 50 ml",
        tag: "Përshkrimi është duke u përpunuar, ndërkohë mund të shikoni specifikat teknike, apo kontaktoni në...",
        price: 7.10,
        oldPrice: 0,
        img: "https://gv466hf5ah.gjirafa.net/image/1383/1383769.jpg?width=250&height=250",
        zbritje: 0
    },
    {
        id: "5",
        name: "Krem pudër Estée Lauder Double Wear Maximum",
        tag: "Përshkrimi është duke u përpunuar, ndërkohë mund të shikoni specifikat teknike, apo kontaktoni në...",
        price: 42.33,
        oldPrice: 48.98,
        img: "https://gv466hf5ah.gjirafa.net/image/0645/0645662.png?width=250&height=250",
        zbritje: -15
    },
    {
        id: "6",
        name: "Sprej depilimi për meshkuj Amina Blue, 100ml",
        tag: "Përshkrimi është duke u përpunuar, ndërkohë mund të shikoni specifikat teknike, apo kontaktoni në...",
        price: 5.50,
        oldPrice: 6.50,
        img: "https://gv466hf5ah.gjirafa.net/image/1324/1324992.jpg?width=250&height=250",
        zbritje: -15
    },
    {
        id: "7",
        name: "Depilator me lazer Beurer Velvet Skin Pro IPL 8500",
        tag: "Përshkrimi është duke u përpunuar, ndërkohë mund të shikoni specifikat teknike, apo kontaktoni në...",
        price: 434.31,
        oldPrice: 469.06,
        img: "https://gv466hf5ah.gjirafa.net/image/0706/0706905.jpg?width=250&height=250",
        zbritje: -7
    },
    {
        id: "8",
        name: "Depilator PHILIPS Satinelle BRE 224/00",
        tag: "Përshkrimi është duke u përpunuar, ndërkohë mund të shikoni specifikat teknike, apo kontaktoni në...",
        price: 45.31,
        oldPrice: 0,
        img: "https://gv466hf5ah.gjirafa.net/image/1439/1439796.jpg?width=250&height=250",
        zbritje: 0
    },
    {
        id: "9",
        name: "Korrektor anti-skuqje Lovely Magic Pen",
        tag: "Përshkrimi është duke u përpunuar, ndërkohë mund të shikoni specifikat teknike, apo kontaktoni në...",
        price: 2.46,
        oldPrice: 0,
        img: "https://gv466hf5ah.gjirafa.net/image/1295/1295066.jpg?width=250&height=250",
        trans: "https://gjirafamall.com/Content/24hicon.svg",
        zbritje: 0
    },
    {
        id: "10",
        name: "Balsam Vaseline Pure Petroleum Pure Jelly 50 ml",
        tag: "Përshkrimi është duke u përpunuar, ndërkohë mund të shikoni specifikat teknike, apo kontaktoni në...",
        price: 2.90,
        oldPrice: 0,
        img: "https://gv466hf5ah.gjirafa.net/image/1034/1034731.jpg?width=250&height=250",
        trans: "https://gjirafamall.com/Content/24hicon.svg",
        zbritje: 0
    },
    {
        id: "11",
        name: "Parfum Emporio Armani Stronger With You Intensely",
        tag: "Emulsioni nga CeraVe është dizajnuar për pastrimin dhe njomjen e lëkurës së trupit dhe fytyrës pa ndryshuar pengesën mbrojtëse. Është pasuruar me ceramide 1, 3, 6-II, acid hialuronik, glicerinë dhe kolesterol, i përshtatshëm për higjienën e përdit...",
        price: 60.60,
        oldPrice: 61.35,
        img: "https://gv466hf5ah.gjirafa.net/image/0495/0495674.jpg?width=250&height=250",
        trans: "https://gjirafamall.com/Content/24hicon.svg",
        zbritje: -1
    },
    {
        id: "12",
        name: "Eau De Parfum Dior Homme Intense, 100 ml",
        tag: "Përshkrimi është duke u përpunuar, ndërkohë mund të shikoni specifikat teknike, apo kontaktoni në...",
        price: 132.23,
        oldPrice: 0,
        img: "https://gv466hf5ah.gjirafa.net/image/1441/1441022.jpg?width=250&height=250",
        zbritje: 0
    },
    {
        id: "13",
        name: "Eau de Parfum Armaf Club De Nuit Sillage, 105 ml",
        tag: "Emulsioni nga CeraVe është dizajnuar për pastrimin dhe njomjen e lëkurës së trupit dhe fytyrës pa ndryshuar pengesën mbrojtëse. Është pasuruar me ceramide 1, 3, 6-II, acid hialuronik, glicerinë dhe kolesterol, i përshtatshëm për higjienën e përdit...",
        price: 34.42,
        oldPrice: 43.65,
        img: "https://gv466hf5ah.gjirafa.net/image/0873/0873904.jpg?width=250&height=250",
        zbritje: -21
    },
    {
        id: "14",
        name: "Serum për fytyrë The Ordinary Granactive Retinoid",
        tag: "Përshkrimi është duke u përpunuar, ndërkohë mund të shikoni specifikat teknike, apo kontaktoni në...",
        price: 28.47,
        oldPrice: 28.50,
        img: "https://gv466hf5ah.gjirafa.net/image/1063/1063289.png?width=250&height=250",
        zbritje: -0
    },
    {
        id: "15",
        name: "Krem pudër Double Wear SPF 10 Estée Lauder Nr. 3C2",
        tag: "Përshkrimi është duke u përpunuar, ndërkohë mund të shikoni specifikat teknike, apo kontaktoni në...",
        price: 39.98,
        oldPrice: 45.88,
        img: "https://gv466hf5ah.gjirafa.net/image/0606/0606692.jpg?width=250&height=250",
        zbritje: -13
    },
    {
        id: "16",
        name: "Skrab Clear & Defend Neutrogena 150 ml",
        tag: "Emulsioni nga CeraVe është dizajnuar për pastrimin dhe njomjen e lëkurës së trupit dhe fytyrës pa ndryshuar pengesën mbrojtëse. Është pasuruar me ceramide 1, 3, 6-II, acid hialuronik, glicerinë dhe kolesterol, i përshtatshëm për higjienën e përdit...",
        price: 5.29,
        oldPrice: 6.55,
        img: "https://gv466hf5ah.gjirafa.net/image/1046/1046307.jpg?width=250&height=250",
        zbritje: -19
    },
    {
        id: "17",
        name: "Parfum Armaf Club De Nuit Intense 105ml",
        tag: "Përshkrimi është duke u përpunuar, ndërkohë mund të shikoni specifikat teknike, apo kontaktoni në...",
        price: 32.45,
        oldPrice: 37.64,
        img: "https://gv466hf5ah.gjirafa.net/image/0655/0655775.jpg?width=250&height=250",
        zbritje: -15
    },
    {
        id: "18",
        name: "Eau de Toilette Versace-t , 100ml",
        tag: "Përshkrimi është duke u përpunuar, ndërkohë mund të shikoni specifikat teknike, apo kontaktoni në...",
        price: 91.00,
        oldPrice: 0,
        img: "https://gv466hf5ah.gjirafa.net/image/1376/1376307.jpg?width=250&height=250",
        zbritje: 0
    },
    {
        id: "19",
        name: "Parfum Gucci Guilty Absolute, 50 ml",
        tag: "Përshkrimi është duke u përpunuar, ndërkohë mund të shikoni specifikat teknike, apo kontaktoni në...",
        price: 50.00,
        oldPrice: 57.73,
        img: "https://gv466hf5ah.gjirafa.net/image/0343/0343674.jpg?width=250&height=250",
        trans: "https://gjirafamall.com/Content/24hicon.svg",
        zbritje: -13
    },
    {
        id: "20",
        name: "Eau de Parfum Kolmaz Tonic 69, 100ml",
        tag: "Emulsioni nga CeraVe është dizajnuar për pastrimin dhe njomjen e lëkurës së trupit dhe fytyrës pa ndryshuar pengesën mbrojtëse. Është pasuruar me ceramide 1, 3, 6-II, acid hialuronik, glicerinë dhe kolesterol, i përshtatshëm për higjienën e përdit...",
        price: 44.71,
        oldPrice: 0,
        img: "https://gv466hf5ah.gjirafa.net/image/1431/1431738.jpg?width=250&height=250",
        trans: "https://gjirafamall.com/Content/24hicon.svg",
        zbritje: 0
    },
    {
        id: "21",
        name: "Parfum Chanel Chance Eau Tendre 100ml",
        tag: "Emulsioni nga CeraVe është dizajnuar për pastrimin dhe njomjen e lëkurës së trupit dhe fytyrës pa ndryshuar pengesën mbrojtëse. Është pasuruar me ceramide 1, 3, 6-II, acid hialuronik, glicerinë dhe kolesterol, i përshtatshëm për higjienën e përdit...",
        price: 210.05,
        oldPrice: 0,
        img: "https://gv466hf5ah.gjirafa.net/image/0655/0655663.jpg?width=250&height=250",
        zbritje: 0
    },
    {
        id: "22",
        name: "Eau de Parfum Dior Dior j dore, 100ml",
        price: 188.71,
        oldPrice: 0,
        img: "https://gv466hf5ah.gjirafa.net/image/1376/1376552.jpg?width=250&height=250",
        zbritje: 0
    },
    {
        id: "23",
        name: "Losion për pastrimin e fytyrës Neutrogena Hydro",
        price: 8.63,
        oldPrice: 8.68,
        img: "https://gv466hf5ah.gjirafa.net/image/0290/0290190.jpg?width=250&height=250",
        trans: "https://gjirafamall.com/Content/24hicon.svg",
        zbritje: 0
    },
    {
        id: "24",
        name: "Losion hidratues dhe pastrues CeraVe, për lëkurë",
        price: 14.21,
        oldPrice: 18.22,
        img: "https://gv466hf5ah.gjirafa.net/image/1130/1130321.jpg?width=250&height=250",
        zbritje: -22
    },
    {
        id: "25",
        name: "Parfum Lancome La Vie Est Belle Intensément 50ml",
        price: 126.00,
        oldPrice: 0,
        img: "https://gv466hf5ah.gjirafa.net/image/0960/0960508.png?width=250&height=250",
        trans: "https://gjirafamall.com/Content/24hicon.svg",
        zbritje: 0
    },
    {
        id: "26",
        name: "Parfum Ccalvin Kllein IN 2U MEN 50 ml",
        price: 24.90,
        oldPrice: 49.81,
        img: "https://gv466hf5ah.gjirafa.net/image/0249/0249158.jpg?width=250&height=250",
        zbritje: -50
    },
    {
        id: "27",
        name: "Eau De Parfum Emporio Armani Stronger With You Freeze 100 ml",
        price: 92.00,
        oldPrice: 108.36,
        img: "https://gv466hf5ah.gjirafa.net/image/1296/1296714.jpg?width=250&height=250",
        trans: "https://gjirafamall.com/Content/24hicon.svg",
        zbritje: -15
    },
    {
        id: "28",
        name: "Krem pudër BB Garnier Pure Active, Light, 50 ml",
        price: 7.10,
        oldPrice: 0,
        img: "https://gv466hf5ah.gjirafa.net/image/1290/1290066.jpg?width=250&height=250",
        zbritje: 0
    },
    {
        id: "29",
        name: "Krem pudër Estée Lauder Double Wear Maximum",
        price: 42.33,
        oldPrice: 48.98,
        img: "https://gv466hf5ah.gjirafa.net/image/1320/1320872.jpg?width=250&height=250",
        zbritje: -15
    },
    {
        id: "30",
        name: "Sprej depilimi për meshkuj Amina Blue, 100ml",
        price: 5.50,
        oldPrice: 6.50,
        img: "https://gv466hf5ah.gjirafa.net/image/1320/1320288.jpg?width=250&height=250",
        zbritje: -15
    },
    {
        id: "31",
        name: "Depilator me lazer Beurer Velvet Skin Pro IPL 8500",
        price: 434.31,
        oldPrice: 469.06,
        img: "https://gv466hf5ah.gjirafa.net/image/0290/0290190.jpg?width=250&height=250",
        zbritje: -7
    },
    {
        id: "32",
        name: "Depilator PHILIPS Satinelle BRE 224/00",
        price: 45.31,
        oldPrice: 0,
        img: "https://gv466hf5ah.gjirafa.net/image/1046/1046305.jpg?width=250&height=250",
        zbritje: 0
    },
    {
        id: "33",
        name: "Korrektor anti-skuqje Lovely Magic Pen",
        price: 2.46,
        oldPrice: 0,
        img: "https://gv466hf5ah.gjirafa.net/image/0326/0326600.jpg?width=250&height=250",
        trans: "https://gjirafamall.com/Content/24hicon.svg",
        zbritje: 0
    },
    {
        id: "34",
        name: "Balsam Vaseline Pure Petroleum Pure Jelly 50 ml",
        price: 2.90,
        oldPrice: 0,
        img: "https://gv466hf5ah.gjirafa.net/image/0328/0328840.jpg?width=250&height=250",
        trans: "https://gjirafamall.com/Content/24hicon.svg",
        zbritje: 0
    },
    {
        id: "35",
        name: "Parfum Emporio Armani Stronger With You Intensely,",
        price: 60.60,
        oldPrice: 61.35,
        img: "https://gv466hf5ah.gjirafa.net/image/1056/1056607.jpg?width=250&height=250",
        trans: "https://gjirafamall.com/Content/24hicon.svg",
        zbritje: -1
    },
    {
        id: "36",
        name: "Eau De Parfum Dior Homme Intense, 100 ml",
        price: 132.23,
        oldPrice: 0,
        img: "https://gv466hf5ah.gjirafa.net/image/0983/0983805.jpg?width=250&height=250",
        zbritje: 0
    },
    {
        id: "37",
        name: "Eau de Parfum Armaf Club De Nuit Sillage, 105 ml",
        price: 34.42,
        oldPrice: 43.65,
        img: "https://gv466hf5ah.gjirafa.net/image/0517/0517918.jpg?width=250&height=250",
        zbritje: -21
    },
    {
        id: "38",
        name: "Serum për fytyrë The Ordinary Granactive Retinoid",
        price: 28.47,
        oldPrice: 28.50,
        img: "https://gv466hf5ah.gjirafa.net/image/0884/0884570.jpg?width=250&height=250",
        zbritje: -0
    },
    {
        id: "39",
        name: "Krem pudër Double Wear SPF 10 Estée Lauder Nr. 3C2",
        price: 39.98,
        oldPrice: 45.88,
        img: "https://gv466hf5ah.gjirafa.net/image/1323/1323559.jpg?width=250&height=250",
        zbritje: -13
    },
    {
        id: "40",
        name: "Skrab Clear & Defend Neutrogena 150 ml",
        price: 5.29,
        oldPrice: 6.55,
        img: "https://gv466hf5ah.gjirafa.net/image/1295/1295052.jpg?width=250&height=250",
        zbritje: -19
    },
    {
        id: "41",
        name: "Parfum Armaf Club De Nuit Intense 105ml",
        price: 32.45,
        oldPrice: 37.64,
        img: "https://gv466hf5ah.gjirafa.net/image/0284/0284348.jpg?width=250&height=250",
        zbritje: -15
    },
    {
        id: "42",
        name: "Eau de Toilette Versace-t , 100ml",
        price: 91.00,
        oldPrice: 0,
        img: "https://gv466hf5ah.gjirafa.net/image/0654/0654450.jpg?width=250&height=250",
        zbritje: 0
    },
    {
        id: "43",
        name: "Parfum Gucci Guilty Absolute, 50 ml",
        price: 50.00,
        oldPrice: 57.73,
        img: "https://gv466hf5ah.gjirafa.net/image/1512/1512438.jpg?width=250&height=250",
        trans: "https://gjirafamall.com/Content/24hicon.svg",
        zbritje: -13
    },
    {
        id: "44",
        name: "Eau de Parfum Kolmaz Tonic 69, 100ml",
        price: 44.70,
        oldPrice: 0,
        img: "https://gv466hf5ah.gjirafa.net/image/1301/1301049.jpg?width=250&height=250",
        trans: "https://gjirafamall.com/Content/24hicon.svg",
        zbritje: 0
    },
    {
        id: "45",
        name: "Parfum Chanel Chance Eau Tendre 100ml",
        price: 210.05,
        oldPrice: 0,
        img: "https://gv466hf5ah.gjirafa.net/image/0321/0321216.jpg?width=250&height=250",
        zbritje: 0
    },
    {
        id: "46",
        name: "Eau de Parfum Dior Dior j dore, 100ml",
        price: 188.70,
        oldPrice: 0,
        img: "https://gv466hf5ah.gjirafa.net/image/0388/0388982.jpg?width=250&height=250",
        zbritje: 0
    },
    {
        id: "47",
        name: "Losion për pastrimin e fytyrës Neutrogena Hydro",
        price: 8.63,
        oldPrice: 8.68,
        img: "https://gv466hf5ah.gjirafa.net/image/1054/1054262.jpg?width=250&height=250",
        trans: "https://gjirafamall.com/Content/24hicon.svg",
        zbritje: 0
    },
    {
        id: "48",
        name: "Losion hidratues dhe pastrues CeraVe, për lëkurë",
        price: 14.21,
        oldPrice: 18.22,
        img: "https://gv466hf5ah.gjirafa.net/image/1130/1130321.jpg?width=250&height=250",
        zbritje: -22
    },
    {
        id: "49",
        name: "Krem pudër Estée Lauder Double Wear Maximum",
        price: 42.33,
        oldPrice: 48.98,
        img: "https://gv466hf5ah.gjirafa.net/image/0645/0645662.png?width=250&height=250",
        zbritje: -15
    },
    {
        id: "50",
        name: "Sprej depilimi për meshkuj Amina Blue, 100ml",
        price: 5.50,
        oldPrice: 6.50,
        img: "https://gv466hf5ah.gjirafa.net/image/1324/1324992.jpg?width=250&height=250",
        zbritje: -15
    },
    {
        id: "51",
        name: "Depilator me lazer Beurer Velvet Skin Pro IPL 8500",
        price: 434.31,
        oldPrice: 469.06,
        img: "https://gv466hf5ah.gjirafa.net/image/0706/0706905.jpg?width=250&height=250",
        zbritje: -7
    },
    {
        id: "52",
        name: "Balsam Vaseline Pure Petroleum Pure Jelly 50 ml",
        price: 2.90,
        oldPrice: 0,
        img: "https://gv466hf5ah.gjirafa.net/image/1034/1034731.jpg?width=250&height=250",
        trans: "https://gjirafamall.com/Content/24hicon.svg",
        zbritje: 0
    },
    {
        id: "53",
        name: "Skrab Clear & Defend Neutrogena 150 ml",
        price: 5.29,
        oldPrice: 6.55,
        img: "https://gv466hf5ah.gjirafa.net/image/1046/1046307.jpg?width=250&height=250",
        zbritje: -19
    },
    {
        id: "54",
        name: "Losion hidratues dhe pastrues CeraVe, për lëkurë",
        price: 14.21,
        oldPrice: 18.22,
        img: "https://gv466hf5ah.gjirafa.net/image/1130/1130321.jpg?width=250&height=250",
        zbritje: -22
    },
    {
        id: "55",
        name: "Eau de Parfum Dior Dior j dore, 100ml",
        price: 188.71,
        oldPrice: 0,
        img: "https://gv466hf5ah.gjirafa.net/image/1376/1376552.jpg?width=250&height=250",
        zbritje: 0
    },
    {
        id: "56",
        name: "Depilator PHILIPS Satinelle BRE 224/00",
        price: 45.31,
        oldPrice: 0,
        img: "https://gv466hf5ah.gjirafa.net/image/1439/1439796.jpg?width=250&height=250",
        zbritje: 0
    },
    {
        id: "57",
        name: "Korrektor anti-skuqje Lovely Magic Pen",
        price: 2.46,
        oldPrice: 0,
        img: "https://gv466hf5ah.gjirafa.net/image/1295/1295066.jpg?width=250&height=250",
        trans: "https://gjirafamall.com/Content/24hicon.svg",
        zbritje: 0
    },
    {
        id: "58",
        name: "Balsam Vaseline Pure Petroleum Pure Jelly 50 ml",
        price: 2.90,
        oldPrice: 0,
        img: "https://gv466hf5ah.gjirafa.net/image/1034/1034731.jpg?width=250&height=250",
        trans: "https://gjirafamall.com/Content/24hicon.svg",
        zbritje: 0
    },
    {
        id: "59",
        name: "Parfum Emporio Armani Stronger With You Intensely",
        price: 60.60,
        oldPrice: 61.35,
        img: "https://gv466hf5ah.gjirafa.net/image/0495/0495674.jpg?width=250&height=250",
        trans: "https://gjirafamall.com/Content/24hicon.svg",
        zbritje: -1
    },
    {
        id: "60",
        name: "Eau De Parfum Dior Homme Intense, 100 ml",
        price: 132.23,
        oldPrice: 0,
        img: "https://gv466hf5ah.gjirafa.net/image/1441/1441022.jpg?width=250&height=250",
        zbritje: 0
    },
    {
        id: "61",
        name: "Eau de Parfum Armaf Club De Nuit Sillage, 105 ml",
        price: 34.42,
        oldPrice: 43.65,
        img: "https://gv466hf5ah.gjirafa.net/image/0873/0873904.jpg?width=250&height=250",
        zbritje: -21
    },
    {
        id: "62",
        name: "Serum për fytyrë The Ordinary Granactive Retinoid",
        price: 28.47,
        oldPrice: 28.50,
        img: "https://gv466hf5ah.gjirafa.net/image/1063/1063289.png?width=250&height=250",
        zbritje: -0
    },
    {
        id: "63",
        name: "Krem pudër Double Wear SPF 10 Estée Lauder Nr. 3C2",
        price: 39.98,
        oldPrice: 45.88,
        img: "https://gv466hf5ah.gjirafa.net/image/0606/0606692.jpg?width=250&height=250",
        zbritje: -13
    },
    {
        id: "64",
        name: "Skrab Clear & Defend Neutrogena 150 ml",
        price: 5.29,
        oldPrice: 6.55,
        img: "https://gv466hf5ah.gjirafa.net/image/1046/1046307.jpg?width=250&height=250",
        zbritje: -19
    },
    {
        id: "65",
        name: "Parfum Armaf Club De Nuit Intense 105ml",
        price: 32.45,
        oldPrice: 37.64,
        img: "https://gv466hf5ah.gjirafa.net/image/0655/0655775.jpg?width=250&height=250",
        zbritje: -15
    },
    {
        id: "66",
        name: "Eau de Toilette Versace-t , 100ml",
        price: 91.00,
        oldPrice: 0,
        img: "https://gv466hf5ah.gjirafa.net/image/1376/1376307.jpg?width=250&height=250",
        zbritje: 0
    },
    {
        id: "67",
        name: "Parfum Gucci Guilty Absolute, 50 ml",
        price: 50.00,
        oldPrice: 57.73,
        img: "https://gv466hf5ah.gjirafa.net/image/0343/0343674.jpg?width=250&height=250",
        trans: "https://gjirafamall.com/Content/24hicon.svg",
        zbritje: -13
    },
    {
        id: "68",
        name: "Eau de Parfum Kolmaz Tonic 69, 100ml",
        price: 44.71,
        oldPrice: 0,
        img: "https://gv466hf5ah.gjirafa.net/image/1431/1431738.jpg?width=250&height=250",
        trans: "https://gjirafamall.com/Content/24hicon.svg",
        zbritje: 0
    },
    {
        id: "69",
        name: "Parfum Chanel Chance Eau Tendre 100ml",
        price: 210.05,
        oldPrice: 0,
        img: "https://gv466hf5ah.gjirafa.net/image/0655/0655663.jpg?width=250&height=250",
        zbritje: 0
    },
    {
        id: "70",
        name: "Eau de Parfum Dior Dior j dore, 100ml",
        price: 188.71,
        oldPrice: 0,
        img: "https://gv466hf5ah.gjirafa.net/image/1376/1376552.jpg?width=250&height=250",
        zbritje: 0
    },
    {
        id: "71",
        name: "Losion për pastrimin e fytyrës Neutrogena Hydro",
        price: 8.63,
        oldPrice: 8.68,
        img: "https://gv466hf5ah.gjirafa.net/image/0290/0290190.jpg?width=250&height=250",
        trans: "https://gjirafamall.com/Content/24hicon.svg",
        zbritje: 0
    },
    {
        id: "72",
        name: "Losion hidratues dhe pastrues CeraVe, për lëkurë",
        price: 14.21,
        oldPrice: 18.22,
        img: "https://gv466hf5ah.gjirafa.net/image/1130/1130321.jpg?width=250&height=250",
        zbritje: -22
    },
];



// let generateCart = () => {
//     return (cart.innerHTML = shopItemsData.map((x)=>{
//         let {id, name, price, oldPrice, img, trans, zbritje} = x;
//         return `<div class="col-lg-3 border">
                            
//         <div class="d-flex flex-row justify-content-end bd-highlight mt-2">
//             <div class="px-1 bd-highlight ">
//                 <img class="align-items-end" src=${trans} width="25" alt="">
//             </div>
//             <div class="p-0 bd-highlight">
//                 <span class="align-items-end gjirafa py-1">${zbritje}%</span>
//             </div>
//         </div>
//         <div class="produktet produktet-kozmetik">
//             <a href="produktet/parfume.html">
//                 <img src=${img} class="w-100 p-5 mt-3" title="Shfaq Detaje per Eau De Parfum Emporio Armani Stronger With You Freeze 100 ml" alt="Shfaq Detaje per Eau De Parfum Emporio Armani Stronger With You Freeze 100 ml">
//             </a>
            
//             <div class="text-center" id="">
//                 <a href="produktet/parfume.html" >${name}</a>
//             </div>
            
//             <div class="my-2 text-center" id="produktet-1">
//                 <span class="fw-bold text-black">${price}€</span>
//                 <span class="text-muted zbritje fw-bold">${oldPrice}€</span>
//             </div>
//             <div class="hover-product">
//                 <div class="produkt-hover text-center">
//                     <a href="#" title="Përshkrimi"><i class="fa fa-info"></i> Shiko detajet!</a>
//                 </div>
//                 <div class="produkt-hover-1">
//                     <div class="d-flex flex-row">
//                         <div class="arrow-down">
//                             <a href="#" class="add-cart" title="Shto në shportë">
//                                 <i class="fa fa-cart-arrow-down"></i>
//                             </a>
//                         </div>
                        
//                         <div class="heart">
//                             <a href="#" title="Lista e dëshirave">
//                                 <i class="fa fa-heart-o mt-3"></i>
//                             </a>
//                         </div>
                        
//                         <div class="heart">
//                             <a href="#" title="Krahaso">
//                                 <i class="fa fa-retweet mt-3"></i>
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
        
//     </div>`
//     }).join(""));

    
   
// }
// generateCart();

for(let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click', ()=>{
        cartNumbers(shopItemsData[i]);
        totalCost(shopItemsData[i]);
    });
    
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}


function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    console.log(productNumbers)
    
    productNumbers = parseInt(productNumbers)
    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product)
}

function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    
    if(cartItems != null){
        if(cartItems[product.name] == undefined){
            cartItems = {
                ...cartItems,
                [product.name]: product
            }
        }
        cartItems[product.name].inCart += 1;
    }
    else{
        product.inCart = 1;
        cartItems = {
            [product.name]: product
        }
    }
    
    localStorage.setItem("productsInCart", JSON.stringify
    (cartItems));

}

function totalCost(product){
    //console.log("The product price is", product.price);
    let cartCost = localStorage.getItem("totalCost");
    
    console.log("The cartCost is", cartCost);
    console.log(typeof cartCost)

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }else{
        localStorage.setItem("totalCost", product.price);
    }
    
}

function displayCart(){
    let cartItems = localStorage.getItem("productsInCart")
    cartItems = JSON.parse(cartItems)
    let productContainer = document.querySelector(".product-container")
    let cartCost = localStorage.getItem("totalCost");
    
    console.log(cartItems);
    if(cartItems && productContainer){
       productContainer.innerHTML = '';
       Object.values(cartItems).map(item => {
        productContainer.innerHTML += `
            <div class="d-flex py-3 px-0 row">
            <div class="p-2  col-9">
                <div class="d-flex px-3">
                    <div>
                        <img src="${item.img}" width="100" alt="">

                    </div>
                    <div>
                        <h6>${item.name}</h6>
                        <p>${item.tag}</p>
                    </div>
                    <div class="d-flex flex-column">
                        <div>
                            <a class="btn mx-3  btn-sm btn-x" title="Zhvendose produktin" href="#">
                                <i class="fa fa-2x">×</i>
                            </a>
                        </div>

                        <div class="">
                            <a class="btn mx-3 btn-sm btn-icon btn-heart" title="Zhvendose produktin" href="#">
                                <i class="fa fa-heart-o"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-3 d-flex flex-row-reverse">
                <div class="py-2 px-4 cart-flex">${item.inCart * item.price}€</div>
                <div class="py-2 px-4 cart-flex">
                <div class="sasiaa">
                    <span class="minuss">-</span>
                    <span class="numm">${item.inCart}</span>
                    <span class="pluss">+</span>
                </div>
            </div>
            <div class="py-2 px-4 cart-flex">${item.price}€</div>
            </div>
            
        </div> `
       });

       productContainer.innerHTML += `
        <div class="row jumbotron  mx-0 p-3 border-top">
        <div class="col-6 p-3">
            <div class="d-flex flex-column">
                <h6>Kodi promocional</h6>
                <div class="input-group mb-3">
                    <input type="text" class="form-control input-focus" placeholder="Shkruaj kodin e kuponit këtu" aria-label="Recipient's username" aria-describedby="basic-addon2">
                    <div class="input-group-append">
                    <span class="input-group-text btn  px-4 py-2" id="basic-addon2"><i class="bi bi-check-lg"></i> Apliko kuponin</span>
                    </div>
                </div>
            </div>
            <div class="d-flex flex-column">
                <h6>Kam një kupon</h6>
                <div class="input-group mb-3">
                    <input type="text" class="form-control input-focus" placeholder="Shkruaj kodin e kuponit këtu" aria-label="Recipient's username" aria-describedby="basic-addon2">
                    <div class="input-group-append">
                    <span class="input-group-text btn  px-3 py-2" id="basic-addon2"><i class="bi bi-check-lg"></i> Shto një Gift Card</span>
                    </div>
                </div>
            </div>
            
        </div>

        <div class="col-6">
            <div class="d-flex  justify-content-between">
                <p class="koha-arritjes">Nëntotal:</p>
                <p>${cartCost} €</p>
            </div>
            <div class="d-flex  justify-content-between">
                <p class="koha-arritjes">Transporti: <strong class="">Do të kalkulohet gjatë blerjes</strong></p>
                <p class="kalkulimi">00.00 €</p>
            </div>
            <div class="d-flex  justify-content-between">
                <p class="koha-arritjes">Flex Total:</p>
                <p>00.00 €</p>
            </div>
            <div class="d-flex  justify-content-between">
                <p class="koha-arritjes">Koha e arritjes së porosisë:</p>
                <h6 class="text-danger koha-arritjes">E Shtunë, 15 Tetor Ose e Hënë, 17 Tetor</h6>
            </div>
            <div class="d-flex  justify-content-between">
                <h6 class="total-per-pages">Total për pagesë:</h6>
                <p class="tot-per-pages">Kalkulohet gjatë blerjes</p>
            </div>
        </div>
        
        
    </div>
       `
    }
    
}

onLoadCartNumbers();
displayCart();