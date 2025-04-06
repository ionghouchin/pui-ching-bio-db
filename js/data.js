const bioData = {
    birds: [
        {
            id: 7,
            name: "白喉紅臀鵯",
            category: "birds",
            image: "../images/IMG_2267.JPG",
            images: [
                "../images/IMG_2267.JPG",
                "../images/IMG_2269.jpg",
                "../images/IMG_2271.jpg",
                "../images/IMG_2285.jpg",
                "../images/IMG_2289.jpg"
            ],
            audio: {
                url: "../images/紅臂鵯.MP3",
                title: "白喉紅臀鵯的叫聲",
                description: "白喉紅臀鵯的特徵鳴叫聲"
            },
            description: "小型鳥類，體長19-21cm，頭黑色而具有光澤，具不明顯的冠羽，耳羽白色或灰白色。上體灰褐色，具有灰色或灰白色的羽緣。腰灰白色、飛行時非常明顯。尾下覆羽血紅色，頦和上喉黑色，下喉及下體白色。幼鳥臀部偏黃。主要取食樹木上的小型漿果、核果。",
            distribution: "在中國大陸，分佈於福建、廣東、江西等地。該物種的模式產地在澳門。",
            features: "體長19-21cm，頭黑色而具有光澤，具不明顯的冠羽，耳羽白色或灰白色。上體灰褐色，腰灰白色，尾下覆羽血紅色，下喉及下體白色。",
            scientificName: "Pycnonotus aurigaster chrysorrhoides",
            commonNames: ["黑頭公", "白喉紅臀鵯"],
            classification: {
                kingdom: "動物界 (Animalia)",
                phylum: "脊索動物門 (Chordata)",
                class: "鳥綱 (Aves)",
                order: "雀形目 (Passeriformes)",
                family: "鵯科 (Pycnonotidae)",
                genus: "鵯屬 (Pycnonotus)",
                species: "白喉紅臀鵯 (P. aurigaster)"
            },
            habitat: "喜歡低山丘陵和平原地帶的次生林、竹林、灌叢、小樹林、紅樹林或人工園圃。"
        },
        {
            id: 4,
            name: "麻雀",
            category: "birds",
            description: "麻雀是澳門最常見的留鳥，常在建築物和樹木間活動。",
            distribution: "遍布澳門各區，特別是在市區建築物周圍。",
            features: "體型小巧，羽毛呈褐色，臉部有黑色斑紋。"
        },
        {
            id: "spotted-dove",
            name: "珠頸斑鳩",
            category: "birds",
            image: "images/spotted-dove.jpg",
            description: "珠頸斑鳩是常見的鳩鴿科鳥類，頸部有特徵性的黑白相間斑紋。",
            distribution: "廣泛分佈於澳門各處",
            features: "體型中等的鳩鴿類，頸部有珠狀斑紋，羽毛呈褐色"
        }
    ],
    plants: [
        {
            id: 1,
            name: "黃皮樹",
            category: "plants",
            image: "../images/1.jpg",
            images: [
                "../images/1.jpg",
                "../images/89c4b7da334728efb81bc95e764c5705.JPG",
                "../images/602dbaf61033f5fb0ecce509283dd555.JPG",
                "../images/1350d3ea2e0ac9daf22cfd4a793457d1.JPG"
            ],
            description: "小喬木，高3-10米，小枝無毛，棕褐色，單數羽狀複葉，對生；小葉7-9片，紙質，卵狀披針形。黄皮樹先端長漸尖，基部圓形或寬楔形，兩側不對稱，表面幾乎無毛或在中脈被疏長毛，中脈基部毛較密，邊緣有細圓鋸齒，小葉柄長2-7毫米，腹面被疏短毛。",
            distribution: "分佈於中國南方地區",
            features: "樹高3.8米，樹幹圍48厘米。葉片長9.5厘米，寬5厘米，通常有5-11片。花穗長30厘米，花直徑1.5厘米。花具芳香，顏色為白色。樹皮可以入藥。",
            scientificName: "Phellodendron sinii Y. C. Wu",
            classification: {
                kingdom: "植物界",
                phylum: "被子植物門",
                class: "木蘭綱",
                order: "無患子目",
                family: "芸香科",
                genus: "黃檗屬",
                species: "黃皮樹"
            },
            habitat: "生長於低海拔山區"
        },
        {
            id: 2,
            name: "鳳凰木",
            category: "plants",
            description: "鳳凰木是澳門的市樹，夏季開花時形成美麗的紅色花海。",
            distribution: "廣泛種植於澳門各區的街道和公園。",
            features: "落葉喬木，樹冠傘形，葉片羽狀複葉，花大紅色。"
        },
        {
            id: "papaya",
            name: "木瓜樹",
            category: "plants",
            image: "images/papaya.jpg",
            description: "木瓜樹是一種常見的熱帶果樹，果實營養豐富。",
            distribution: "澳門各處庭園和果園中常見",
            features: "常綠小喬木，葉大而掌狀分裂，果實橢圓形或梨形"
        },
        {
            id: "mango",
            name: "芒果樹",
            category: "plants",
            image: "images/mango.jpg",
            description: "芒果樹是常見的熱帶果樹，果實香甜可口。",
            distribution: "澳門各處公園和庭園中常見",
            features: "常綠大喬木，葉片革質，果實橢圓形或腎形"
        },
        {
            id: "ant",
            name: "螞蟻",
            category: "insects",
            image: "images/ant.jpg",
            description: "螞蟻是常見的社會性昆蟲，具有嚴密的群體組織。",
            distribution: "遍佈澳門各處",
            features: "體型細小，具有明顯的腰節，觸角彎曲"
        }
    ],
    insects: [
        {
            id: 5,
            name: "蝴蝶",
            category: "insects",
            description: "澳門有多種蝴蝶，是重要的授粉昆蟲。",
            distribution: "在公園、花園和郊野地區常見。",
            features: "翅膀色彩豐富，飛行優雅，有完整的變態發育過程。"
        },
        {
            id: 6,
            name: "蟬",
            category: "insects",
            description: "夏季常見的鳴蟲，以其獨特的鳴叫聲聞名。",
            distribution: "主要分布在樹木較多的公園和郊野地區。",
            features: "體型較大，有透明翅膀，雄性會發出響亮的鳴叫。"
        },
        {
            id: "earthworm",
            name: "蚯蚓",
            category: "insects",
            image: "images/earthworm.jpg",
            description: "蚯蚓是重要的土壤生物，能夠改善土壤結構。",
            distribution: "分佈於澳門各處的土壤中",
            features: "體型細長，環節明顯，無腳，能夠鑽入土壤中"
        }
    ]
}; 