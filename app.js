// app.js

const NUTRITION_DATA = {
  miembros: {
    padre: {
      nombre: "Papá",
      id: "padre",
      objetivo: "Definición suave con rendimiento",
      kcal: 2700,
      macros: { kcal: "2700", p: "170 g", h: "335 g", g: "75 g" },
      macros_num: { kcal: 2700, p: 170, h: 335, g: 75 },
      desayuno: "Pan integral 100 g + jamón serrano 60 g + tomate + AOVE 10 g + 1 fruta.",
      merienda: "2 yogures +Proteínas pequeños de 120 g + Corn Flakes 15 g + 1 fruta.",
      ajustes: "En días de trail duro, añadir +60-100 g pan, +1 plátano o +40-60 g arroz/pasta.<br><strong>Noche con entreno:</strong> batido post-entreno extra de 250 ml leche semidesnatada + 1 scoop proteína + creatina (aporta +220-240 kcal, +30-35g Proteína, +12-15g HC y +4-5g Grasa). No compensar quitando cena salvo estancamiento."
    },
    madre: {
      nombre: "Mamá",
      id: "madre",
      objetivo: "Pérdida grasa sostenible",
      kcal: 1800,
      macros: { kcal: "1800", p: "130 g", h: "185 g", g: "60 g" },
      macros_num: { kcal: 1800, p: 130, h: 185, g: 60 },
      desayuno: "Pan integral 60 g + jamón serrano 40 g + tomate + AOVE 5 g + 1 fruta. <br><strong>Media mañana:</strong> infusión + 1 fruta.",
      merienda: "1 yogur +Proteínas pequeño de 120 g + 1 fruta. <br><strong>Si llegas con hambre real:</strong> subir a 2 yogures pequeños o añadir 1 huevo cocido / 1 lata de atún / 10-15 g frutos secos.<br><strong>Nota familiar:</strong> el bote grande de 500g se mantiene solo cuando encaja de verdad. Para la familia, el formato pequeño de 120g es mejor porque evita medias raciones raras y no convierte la merienda en una comida enorme.",
      ajustes: "Si tienes hambre, añadir 10-15 g frutos secos o 5-10 g AOVE, no picoteo libre."
    },
    luis: {
      nombre: "Luis",
      id: "luis",
      objetivo: "Definición / recomposición",
      kcal: 2350,
      macros: { kcal: "2350", p: "160 g", h: "280 g", g: "65 g" },
      macros_num: { kcal: 2350, p: 160, h: 280, g: 65 },
      desayuno: "Yogur +Proteínas 500 g + Corn Flakes 20 g + chocolate 85% 24 g + frutos rojos 100 g.",
      merienda: "1 plátano + 1 paquete individual de tortitas campestres (snack extra).",
      ajustes: "En gimnasio fuerte, añadir +1 paquete de tortitas o +1 fruta + 40-60 g pan.<br><strong>Noche con entreno:</strong> batido post-entreno extra de 250 ml leche semidesnatada + 1 scoop proteína + creatina (aporta +220-240 kcal, +30-35g Proteína, +12-15g HC y +4-5g Grasa). No es obligatorio tomarlo en días sin entrenamiento si llegas a la proteína normal."
    },
    natalia: {
      nombre: "Natalia",
      id: "natalia",
      objetivo: "Rendimiento y crecimiento (Flexible)",
      kcal: "Flexible",
      macros: { kcal: "Flexible", p: "Flexible", h: "Generoso si entrena", g: "Flexible" },
      macros_num: { kcal: 2000, p: 110, h: 300, g: 45 }, // Estimado para gráficos
      desayuno: "Tostadas con jamón/tomate o cereales con leche + fruta (orientativo).",
      merienda: "Fruta, bocadillo pequeño, yogur, tortitas o similar (orientativo).",
      ajustes: "En días de baloncesto: no recortar hidratos. No usar lenguaje de dieta restrictiva bajo ningún concepto."
    }
  },
  productos: [
    { nombre: "Filetes pechuga de pollo", ref: "https://tienda.mercadona.es/product/2787/filetes-pechuga-pollo-bandeja", uso: "Proteína base" },
    { nombre: "Arroz vaporizado Hacendado", ref: "https://tienda.mercadona.es/product/5020/arroz-vaporizado-hacendado-paquete", uso: "Hidrato ajustable" },
    { nombre: "Macarron Hacendado", ref: "https://tienda.mercadona.es/product/6250/macarron-hacendado-paquete", uso: "Pasta familiar" },
    { nombre: "Fideo mediano Hacendado", ref: "https://tienda.mercadona.es/product/6256/fideo-mediano-hacendado-paquete", uso: "Opcional invierno / sopa" },
    { nombre: "Carne picada vacuno premium 400 g", ref: "https://tienda.mercadona.es/product/52776/preparado-carne-picada-vacuno-paquete", uso: "Pasta / burritos" },
    { nombre: "Tacos vacuno marinado para guisar", ref: "https://tienda.mercadona.es/product/12746/tacos-vacuno-marinado-guisar-bandeja", uso: "Estofado" },
    { nombre: "Guisante fino congelado", ref: "https://tienda.mercadona.es/product/61215/guisante-fino-hacendado-ultracongelado-paquete", uso: "Cuchara / cena" },
    { nombre: "Huevos L", ref: "https://tienda.mercadona.es/product/31504/huevos-grandes-l-paquete", uso: "Cenas / desayunos" },
    { nombre: "Atún claro natural", ref: "https://tienda.mercadona.es/product/18018/atun-claro-natural-hacendado", uso: "Cena rápida" },
    { nombre: "Lenteja cocida 570 g", ref: "https://tienda.mercadona.es/product/26030/lenteja-cocida-hacendado-tarro", uso: "Plato cuchara" },
    { nombre: "Tomate triturado 800 g", ref: "https://tienda.mercadona.es/product/16043/tomate-triturado-hacendado-freir-bote", uso: "Salsa" },
    { nombre: "Gazpacho tradicional 1 L", ref: "https://tienda.mercadona.es/product/15604/gazpacho-tradicional-hacendado-botella", uso: "Acompañamiento" },
    { nombre: "Brócoli congelado 1 kg", ref: "https://tienda.mercadona.es/product/61261/brocoli-hacendado-ultracongelado-paquete", uso: "Verdura" },
    { nombre: "Mix coliflor, brócoli y zanahoria 1 kg", ref: "https://tienda.mercadona.es/product/61006/coliflor-brocoli-zanahoria-hacendado-ultracongelada-paquete", uso: "Verdura" },
    { nombre: "Queso fresco batido 0% 500 g", ref: "https://tienda.mercadona.es/product/51071/queso-fresco-batido-desnatado-0-mg-hacendado-tarrina", uso: "Opcional" },
    { nombre: "Yogur +Proteínas 500 g", ref: "https://tienda.mercadona.es/product/21256/postre-lacteo-natural-proteinas-hacendado-0-mg-10-g-proteinas-bote", uso: "Desayuno / merienda" },
    { nombre: "Yogur +Proteínas natural 4 x 120 g", ref: "https://tienda.mercadona.es/product/20908/postre-lacteo-natural-proteinas-hacendado-0-mg-12-g-proteinas-pack-4", uso: "Merienda más ligera" },
    { nombre: "Corn Flakes Hacendado", ref: "https://tienda.mercadona.es/product/22966/cereales-copos-maiz-corn-flakes-hacendado-0-azucares-anadidos-caja", uso: "Desayuno" },
    { nombre: "Chocolate 85%", ref: "https://tienda.mercadona.es/product/12493/porciones-chocolate-negro-85-cacao-extrafino-hacendado-paquete", uso: "Extra controlado" },
    { nombre: "Tortitas campestres", ref: "https://tienda.mercadona.es/product/14786/tortitas-maiz-campestre-hacendado-paquete", uso: "Extra Luis / snack" },
    { nombre: "Ketchup zero", ref: "https://tienda.mercadona.es/product/35343/ketchup-zero-azucares-anadidos-hacendado-bote", uso: "Salsa" },
    { nombre: "Leche semidesnatada Hacendado", ref: "https://tienda.mercadona.es/product/10382/leche-semidesnatada-hacendado-brick", uso: "Batido post-entreno Papá/Luis" }
  ],
  compra: {
    "Proteína": [
      "Pechuga de pollo: 7 bandejas de 550-600 g aprox.",
      "Carne picada vacuno premium 400 g: 2 paquetes.",
      "Tacos vacuno marinado para guisar: 1 bandeja de 600 g.",
      "Huevos L: 2 paquetes de 12.",
      "Atún natural: 1 pack de 6 latas.",
      "Jamón serrano: 700-900 g total para desayunos y cenas."
    ],
    "Hidratos": [
      "Arroz vaporizado: 1 paquete de 1 kg.",
      "Macarrón/pasta: 2 paquetes de 1 kg o 4 de 500 g.",
      "Patatas: 5-6 kg.",
      "Pan integral/normal: según consumo, aprox. 5-6 barras.",
      "Tortitas campestres: 2 paquetes grandes.",
      "Corn Flakes: 1 caja de 500 g."
    ],
    "Legumbres y Verduras": [
      "Lenteja cocida 570 g: 3 tarros.",
      "Guisantes congelados: 2 bolsas de 1 kg.",
      "Brócoli congelado: 1 bolsa de 1 kg.",
      "Mix coliflor/brócoli/zanahoria: 1 bolsa de 1 kg.",
      "Verdura para ensaladas/guisos: 3-4 kg.",
      "Tomate triturado 800 g: 3 botes.",
      "Gazpacho: 4-5 botellas de 1 L."
    ],
    "Desayuno, Meriendas y Extras": [
      "Yogur +Proteínas 500 g: 7 botes para Luis (desayuno diario).",
      "Yogur +Proteínas natural 120 g (pack 4): 6 packs (para Papá y Mamá: 21 botes total + 3 de margen).",
      "Leche semidesnatada: 3-4 bricks de 1 L (para batidos post-entreno de Papá y Luis).",
      "Proteína en polvo: no se compra si ya hay (1 scoop/entreno).",
      "Creatina: 3-5 g diarios (no aporta kcal ni macros).",
      "Fruta variada: 35-45 piezas/semana.",
      "Frutos rojos congelados: 1-2 bolsas.",
      "Chocolate 85%: 1 paquete.",
      "Aceite de Oliva Virgen Extra (AOVE): 1 botella.",
      "Ketchup zero / mostaza / especias."
    ]
  },
  menu: {
    1: {
      comida: {
        nombre: "Arroz caldoso con pollo, zanahoria y champiñones",
        tiempo: "35-45 min",
        detalles_verdura: "Zanahoria 400 g + champiñones 400 g + tomate triturado 200 g. (Opcional: 200 g pimiento rojo/verde para volumen).",
        especias_y_sal: "5-6 g de sal para toda la olla, ajo en polvo, pimentón dulce, pimienta negra y perejil. Opcional: azafrán o colorante.",
        instrucciones: [
          "Cortar el pollo en dados y salpimentar.",
          "Dorar el pollo con el AOVE en olla grande a potencia 7 durante 5-7 min.",
          "Añadir la zanahoria cortada en rodajas finas y cocinar a potencia 6 durante 4 min.",
          "Añadir los champiñones laminados y el tomate triturado. Cocinar a potencia 6 durante 3-4 min.",
          "Añadir el arroz seco y remover todo junto durante 1 min.",
          "Añadir agua o caldo: unas 3 partes de líquido por 1 parte de arroz seco si se quiere caldoso.",
          "Cocer a potencia 7 hasta que hierva, y luego bajar a potencia 4-5 durante 18-20 min.",
          "Reposar 5 min antes de repartir."
        ],
        individual: {
          padre: { "Pollo crudo": "220 g", "Arroz seco": "110 g", "Verdura": "250 g", "AOVE": "10 g" },
          madre: { "Pollo crudo": "180 g", "Arroz seco": "55 g", "Verdura": "300 g", "AOVE": "8 g" },
          luis: { "Pollo crudo": "220 g", "Arroz seco": "90 g", "Verdura": "250 g", "AOVE": "10 g" },
          natalia: { "Pollo crudo": "160 g", "Arroz seco": "80 g", "Verdura": "200 g", "AOVE": "8 g" }
        },
        lote: {
          ingredientes: { "Pollo crudo": "780 g", "Arroz seco": "335 g", "Verdura (mix)": "1000 g", "AOVE": "36 g" },
          reparto: { padre: 27.4, madre: 25.2, luis: 26.5, natalia: 20.8 }
        }
      },
      cena: {
        nombre: "Guisantes con jamón y huevo",
        tiempo: "20-25 min",
        detalles_verdura: "Guisantes congelados. (Opcional: cebolla 100-150 g si se acepta en casa).",
        huevo_recomendado: "Huevo cocido (recomendado para lotes) o a la plancha.",
        especias_y_sal: "2-3 g de sal para el salteado, ajo en polvo y pimienta negra. Cuidado con la sal: el jamón ya aporta bastante.",
        instrucciones: [
          "Si se usan huevos cocidos: ponerlos en agua fría, subir a potencia 9 hasta hervir y cocer 10-11 min. Luego enfriar y pelar.",
          "Cocer o saltear los guisantes. Si son congelados, ponerlos en sartén/olla con un poco de agua a potencia 7 durante 6-8 min.",
          "Escurrir si sobra agua.",
          "Añadir el AOVE y el jamón en tacos o tiras. Cocinar a potencia 5-6 durante 3-4 min.",
          "Servir el salteado de guisantes por porcentajes y añadir los huevos y pan de cada persona."
        ],
        individual: {
          padre: { "Guisantes": "250 g", "Jamón": "60 g", "Huevos": "2 u", "Pan": "60 g", "AOVE": "5 g" },
          madre: { "Guisantes": "220 g", "Jamón": "40 g", "Huevos": "2 u", "Pan": "30 g", "AOVE": "5 g" },
          luis: { "Guisantes": "250 g", "Jamón": "60 g", "Huevos": "2 u", "Pan": "50 g", "AOVE": "5 g" },
          natalia: { "Guisantes": "200 g", "Jamón": "40 g", "Huevos": "2 u", "Pan": "50 g", "AOVE": "5 g" }
        },
        lote: {
          ingredientes: { "Guisantes": "920 g", "Jamón": "200 g", "AOVE": "20 g" },
          reparto: { padre: 27.6, madre: 23.2, luis: 27.6, natalia: 21.5 },
          extras: {
            padre: "2 huevos + 60 g pan",
            madre: "2 huevos + 30 g pan",
            luis: "2 huevos + 50 g pan",
            natalia: "2 huevos + 50 g pan"
          }
        }
      }
    },
    2: {
      comida: {
        nombre: "Pasta con carne picada, tomate y champiñones",
        tiempo: "25-35 min",
        detalles_verdura: "Champiñones 400 g + zanahoria rallada o picada 200 g. (Opcional: pimiento rojo/verde 200 g).",
        especias_y_sal: "4-5 g de sal para la salsa completa, ajo en polvo, orégano, pimienta negra y albahaca. Bajar la sal si el tomate es frito en vez de triturado.",
        instrucciones: [
          "Cocer la pasta en abundante agua con sal a potencia 9-10 hasta hervir, luego 7-8 el tiempo recomendado.",
          "En otra sartén/olla, cocinar la carne picada a potencia 7 durante 6-8 min desmenuzándola bien.",
          "Añadir la zanahoria rallada y los champiñones laminados. Cocinar a potencia 6 durante 5 min.",
          "Añadir el tomate triturado, sal, pimienta, ajo y orégano.",
          "Bajar a potencia 4-5 y cocinar 10-15 min.",
          "Mezclar con la pasta bien escurrida y repartir."
        ],
        individual: {
          padre: { "Pasta seca": "120 g", "Carne picada vacuno": "230 g", "Tomate triturado": "200 g", "Verdura": "150 g", "AOVE": "0 g" },
          madre: { "Pasta seca": "60 g", "Carne picada vacuno": "170 g", "Tomate triturado": "200 g", "Verdura": "200 g", "AOVE": "0 g" },
          luis: { "Pasta seca": "100 g", "Carne picada vacuno": "230 g", "Tomate triturado": "200 g", "Verdura": "150 g", "AOVE": "0 g" },
          natalia: { "Pasta seca": "90 g", "Carne picada vacuno": "170 g", "Tomate triturado": "150 g", "Verdura": "100 g", "AOVE": "0 g" }
        },
        lote: {
          ingredientes: { "Pasta seca": "370 g", "Carne picada vacuno": "800 g", "Tomate triturado": "750 g", "Verdura (mix)": "600 g", "AOVE": "0 g" },
          reparto: { padre: 27.8, madre: 25.0, luis: 27.0, natalia: 20.2 }
        }
      },
      cena: {
        nombre: "Pollo frío o a la plancha + ensalada grande + gazpacho",
        tiempo: "15-20 min",
        detalles_verdura: "Lechuga, tomate fresco, zanahoria rallada, cebolla u otras verduras para ensalada grande.",
        especias_y_sal: "Sal, ajo en polvo y pimienta para el pollo. Vinagre/limón, sal y AOVE para aliñar la ensalada.",
        instrucciones: [
          "Si se usa pollo frío ya cocinado: cortarlo en tiras. Si es a la plancha: sazonar los filetes de pechuga con sal y ajo en polvo y cocinarlos a la plancha a potencia 7-8 durante 3-4 min por lado con un toque de AOVE.",
          "Preparar una ensalada grande con lechuga, tomate fresco y zanahoria rallada, y aliñar al gusto con sal, vinagre/limón y AOVE de forma controlada.",
          "Servir el pollo (caliente o frío) sobre o junto a la ensalada según el porcentaje de reparto.",
          "Acompañar con el gazpacho tradicional frío y el pan correspondiente de cada persona."
        ],
        individual: {
          padre: { "Pollo crudo": "200 g", "Ensalada": "250 g", "Gazpacho": "300 ml", "Pan": "50 g", "AOVE": "5 g" },
          madre: { "Pollo crudo": "160 g", "Ensalada": "300 g", "Gazpacho": "300 ml", "Pan": "0 g", "AOVE": "5 g" },
          luis: { "Pollo crudo": "200 g", "Ensalada": "250 g", "Gazpacho": "300 ml", "Pan": "30 g", "AOVE": "5 g" },
          natalia: { "Pollo crudo": "150 g", "Ensalada": "200 g", "Gazpacho": "250 ml", "Pan": "30 g", "AOVE": "5 g" }
        },
        lote: {
          ingredientes: { "Pollo crudo": "710 g", "Ensalada": "1000 g", "AOVE": "20 g" },
          reparto: { padre: 27.1, madre: 26.4, luis: 26.4, natalia: 20.1 },
          extras: {
            padre: "300 ml gazpacho + 50 g pan",
            madre: "300 ml gazpacho + sin pan",
            luis: "300 ml gazpacho + 30 g pan",
            natalia: "250 ml gazpacho + 30 g pan"
          }
        }
      }
    },
    3: {
      comida: {
        nombre: "Estofado de ternera con patata, zanahoria y champiñones",
        tiempo: "55-75 min",
        detalles_verdura: "Zanahoria 500 g + champiñones 300 g + tomate triturado 200 g. (Opcional: 200 g guisantes al final).",
        especias_y_sal: "5-6 g de sal para toda la olla, pimienta negra, ajo en polvo, pimentón dulce y 1 hoja de laurel. Opcional: tomillo o romero.",
        instrucciones: [
          "Dorar los tacos de ternera con el AOVE en una olla a potencia 7-8 durante 6-8 min.",
          "Añadir la zanahoria cortada en rodajas y los champiñones laminados. Cocinar a potencia 6 durante 5 min.",
          "Añadir el tomate triturado, la patata chascada (cortada rompiendo al final para soltar almidón), agua o caldo y las especias al gusto.",
          "Subir a potencia 9 hasta que hierva, y luego bajar a potencia 3-4 cociendo tapado de 40 a 55 min.",
          "Si se usan guisantes extras, incorporarlos en los últimos 8-10 min de cocción.",
          "Remover de vez en cuando y ajustar de agua si se queda seco.",
          "Reposar 5 min antes de repartir."
        ],
        individual: {
          padre: { "Tacos vacuno": "180 g", "Patata": "420 g", "Verdura": "250 g", "Pan": "60 g", "AOVE": "10 g" },
          madre: { "Tacos vacuno": "130 g", "Patata": "250 g", "Verdura": "300 g", "Pan": "30 g", "AOVE": "8 g" },
          luis: { "Tacos vacuno": "170 g", "Patata": "350 g", "Verdura": "250 g", "Pan": "50 g", "AOVE": "10 g" },
          natalia: { "Tacos vacuno": "120 g", "Patata": "320 g", "Verdura": "200 g", "Pan": "50 g", "AOVE": "8 g" }
        },
        lote: {
          ingredientes: { "Tacos de vacuno": "600 g", "Patata": "1340 g", "Verdura": "1000 g", "AOVE": "36 g" },
          reparto: { padre: 28.9, madre: 23.1, luis: 26.2, natalia: 21.8 },
          extras: {
            padre: "60 g pan",
            madre: "30 g pan",
            luis: "50 g pan",
            natalia: "50 g pan"
          }
        }
      },
      cena: {
        nombre: "Tortilla francesa grande con gazpacho y pan",
        tiempo: "10-15 min",
        huevo_recomendado: "Tortilla francesa grande o huevos revueltos, no fritos. Para repartir mejor, hacer tortilla grande y cortarla por porcentaje/raciones.",
        especias_y_sal: "1-2 g de sal para los 10 huevos, pimienta opcional. Si se añade jamón, usar menos sal.",
        instrucciones: [
          "Batir todos los huevos correspondientes con un toque de sal.",
          "Calentar la sartén antiadherente pintada con el AOVE a potencia 6.",
          "Verter los huevos batidos y cuajar a potencia 4-5 durante 4-6 min.",
          "Doblar o cuajar tipo tortilla grande y cortar en raciones por porcentaje.",
          "Servir con gazpacho tradicional frío, pan integral y jamón serrano."
        ],
        individual: {
          padre: { "Huevos": "3 u", "Gazpacho": "300 ml", "Pan": "80 g", "Jamón": "40 g", "AOVE": "5 g" },
          madre: { "Huevos": "2 u", "Gazpacho": "300 ml", "Pan": "40 g", "Jamón": "30 g", "AOVE": "5 g" },
          luis: { "Huevos": "3 u", "Gazpacho": "300 ml", "Pan": "70 g", "Jamón": "40 g", "AOVE": "5 g" },
          natalia: { "Huevos": "2 u", "Gazpacho": "250 ml", "Pan": "60 g", "Jamón": "30 g", "AOVE": "5 g" }
        },
        lote: {
          ingredientes: { "Huevos": "10 u", "AOVE": "20 g" },
          reparto: { padre: 30.0, madre: 20.0, luis: 30.0, natalia: 20.0 },
          extras: {
            padre: "300 ml gazpacho + 80 g pan + 40 g jamón",
            madre: "300 ml gazpacho + 40 g pan + 30 g jamón",
            luis: "300 ml gazpacho + 70 g pan + 40 g jamón",
            natalia: "250 ml gazpacho + 60 g pan + 30 g jamón"
          }
        }
      }
    },
    4: {
      comida: {
        nombre: "Pollo con patata, zanahoria y champiñones al horno/airfryer",
        tiempo: "45-60 min (horno) | 25-35 min (airfryer)",
        detalles_verdura: "Zanahoria 400 g + champiñones 400 g. (Opcional: parrillada/mix preparado).",
        especias_y_sal: "5-6 g de sal para toda la bandeja, ajo en polvo, pimentón dulce/ahumado, pimienta y perejil. Opcional: curry.",
        instrucciones: [
          "Precalentar el horno a 200 °C.",
          "Pelar y cortar las patatas en gajos y la zanahoria en rodajas. Mezclar con el AOVE, sal y especias.",
          "Hornear patatas y zanahorias en bandeja durante 25 min.",
          "Añadir el pollo salpimentado o especiado a la bandeja.",
          "Incorporar los champiñones laminados en los últimos 15-20 min de horneado para evitar que suelten demasiada agua.",
          "Hornear todo hasta que el pollo esté bien cocinado en su interior.",
          "<em>Nota vitro:</em> ablandar patata y zanahoria al microondas 8-12 min. Dorar pollo a potencia 7 durante 6-8 min. Añadir verdura, champiñones y patatas cocidas y rehogar a potencia 5-6 durante 10-15 min."
        ],
        individual: {
          padre: { "Pollo crudo": "240 g", "Patata": "450 g", "Verdura": "250 g", "Pan": "40 g", "AOVE": "12 g" },
          madre: { "Pollo crudo": "180 g", "Patata": "250 g", "Verdura": "300 g", "Pan": "0 g", "AOVE": "8 g" },
          luis: { "Pollo crudo": "230 g", "Patata": "380 g", "Verdura": "250 g", "Pan": "30 g", "AOVE": "10 g" },
          natalia: { "Pollo crudo": "170 g", "Patata": "350 g", "Verdura": "200 g", "Pan": "30 g", "AOVE": "8 g" }
        },
        lote: {
          ingredientes: { "Pollo crudo": "820 g", "Patata": "1430 g", "Verdura (mix)": "1000 g", "AOVE": "38 g" },
          reparto: { padre: 29.0, madre: 22.4, luis: 26.5, natalia: 22.1 },
          extras: {
            padre: "40 g pan",
            madre: "sin pan",
            luis: "30 g pan",
            natalia: "30 g pan"
          }
        }
      },
      cena: {
        nombre: "Ensalada fría/templada de pasta con atún y tomate",
        tiempo: "20-25 min",
        detalles_verdura: "Tomate triturado/fresco en la ensalada + Ensalada verde mezclada o aparte (lechuga, tomate fresco, zanahoria, champiñones salteados para templada).",
        especias_y_sal: "Sal para la salsa, orégano, ajo en polvo, pimienta y albahaca.",
        instrucciones: [
          "Cocer la pasta en agua hirviendo con sal a potencia 9-10, luego 7-8 el tiempo recomendado. Dejar escurrir y templar/enfriar.",
          "Calentar ligeramente el tomate triturado con orégano, albahaca y una pizca de sal a potencia 5 durante 8-10 min (opcional si se prefiere totalmente fría).",
          "Añadir el atún natural escurrido al tomate y mezclar.",
          "Mezclar la pasta templada/fría con el atún, tomate y la verdura fresca picada (tomate fresco, lechuga, zanahoria) para hacer la ensalada de pasta.",
          "Servir templada o fría. Si queda algo seca, añadir más tomate fresco triturado o picado, no más pasta."
        ],
        individual: {
          padre: { "Pasta seca": "80 g", "Atún natural": "2 latas", "Tomate triturado": "200 g", "Verdura": "150 g", "AOVE": "5 g" },
          madre: { "Pasta seca": "50 g", "Atún natural": "1 lata", "Tomate triturado": "200 g", "Verdura": "200 g", "AOVE": "5 g" },
          luis: { "Pasta seca": "75 g", "Atún natural": "2 latas", "Tomate triturado": "200 g", "Verdura": "150 g", "AOVE": "5 g" },
          natalia: { "Pasta seca": "60 g", "Atún natural": "1 lata", "Tomate triturado": "150 g", "Verdura": "100 g", "AOVE": "5 g" }
        },
        lote: {
          ingredientes: { "Pasta seca": "265 g", "Atún natural": "6 latas", "Tomate triturado": "750 g", "Verdura (mix)": "600 g", "AOVE": "20 g" },
          reparto: { padre: 26.7, madre: 29.2, luis: 26.9, natalia: 17.2 }
        }
      }
    },
    5: {
      comida: {
        nombre: "Lentejas con zanahoria, champiñones y pollo",
        tiempo: "25-35 min",
        detalles_verdura: "Zanahoria 300 g + champiñones 250 g + tomate triturado 100 g. (Opcional: pimiento 100 g).",
        especias_y_sal: "4-5 g de sal para el guiso, pimentón dulce, ajo en polvo, laurel y pimienta. Si algún día pones chorizo, baja la sal.",
        instrucciones: [
          "Dorar el pollo en dados con el AOVE en olla a potencia 7 durante 5-7 min.",
          "Añadir la zanahoria cortada en rodajas y los champiñones. Rehogar a potencia 6 durante 5 min.",
          "Añadir las lentejas cocidas de tarro lavadas y escurridas.",
          "Añadir el tomate triturado y agua o caldo de verduras hasta textura deseada.",
          "Cocinar tapado a potencia 4-5 durante 12-18 min.",
          "Reposar 5 min y repartir."
        ],
        individual: {
          padre: { "Lenteja cocida": "350 g", "Pollo crudo": "180 g", "Verdura": "200 g", "Pan": "80 g", "AOVE": "10 g" },
          madre: { "Lenteja cocida": "250 g", "Pollo crudo": "150 g", "Verdura": "250 g", "Pan": "30 g", "AOVE": "8 g" },
          luis: { "Lenteja cocida": "320 g", "Pollo crudo": "180 g", "Verdura": "200 g", "Pan": "60 g", "AOVE": "10 g" },
          natalia: { "Lenteja cocida": "Alternativa flexible", "Pollo crudo": "140 g", "Verdura": "100 g", "Pan": "80 g", "AOVE": "6 g" }
        },
        lote: {
          ingredientes: { "Lenteja cocida (adultos)": "920 g", "Pollo crudo": "510 g", "Verdura": "650 g", "AOVE": "28 g" },
          reparto: { padre: 35.1, madre: 31.2, luis: 33.7 },
          extras: {
            padre: "80 g pan",
            madre: "30 g pan",
            luis: "60 g pan",
            natalia: "Alternativa flexible de pollo + pan/patata/fruta + verdura aceptada"
          }
        }
      },
      cena: {
        nombre: "Judías verdes con patata y huevo cocido",
        tiempo: "30-40 min",
        detalles_verdura: "Judías verdes. (Alternativa: brócoli o mix coliflor/brócoli/zanahoria congelado, no menestras con guisantes/habas).",
        huevo_recomendado: "Huevo cocido (se reparte fácil y no añade aceite de cocinado extra).",
        especias_y_sal: "3-4 g de sal para patata y judías, ajo en polvo, pimentón dulce y pimienta. Opcional: vinagre o limón al servir.",
        instrucciones: [
          "Cocer las patatas troceadas en agua hirviendo con sal a potencia 9 al principio, bajando a 6-7 durante 15-20 min.",
          "Añadir las judías verdes y cocer otros 8-12 min más hasta estar al dente. Escurrir bien.",
          "Rehogar ligeramente la verdura y patata con el AOVE a potencia 5-6 durante 3-5 min.",
          "Cocer los huevos aparte: poner en agua fría, potencia 9 hasta hervir y mantener 10-11 min. Luego enfriar con agua helada y pelar.",
          "Servir la verdura/patata por porcentaje del lote y añadir los huevos cocidos troceados y el pan."
        ],
        individual: {
          padre: { "Verdura/judías": "300 g", "Patata": "350 g", "Huevos": "3 u", "Pan": "40 g", "AOVE": "8 g" },
          madre: { "Verdura/judías": "300 g", "Patata": "220 g", "Huevos": "2 u", "Pan": "20 g", "AOVE": "6 g" },
          luis: { "Verdura/judías": "300 g", "Patata": "300 g", "Huevos": "3 u", "Pan": "30 g", "AOVE": "8 g" },
          natalia: { "Verdura/judías": "250 g", "Patata": "280 g", "Huevos": "2 u", "Pan": "30 g", "AOVE": "6 g" }
        },
        lote: {
          ingredientes: { "Judías/verdura": "1150 g", "Patata": "1150 g", "AOVE": "28 g" },
          reparto: { padre: 28.3, madre: 22.6, luis: 26.1, natalia: 23.0 },
          extras: {
            padre: "3 huevos + 40 g pan",
            madre: "2 huevos + 20 g pan",
            luis: "3 huevos + 30 g pan",
            natalia: "2 huevos + 30 g pan"
          }
        }
      }
    },
    6: {
      comida: {
        nombre: "Arroz caldoso con pollo, zanahoria y champiñones (Repetición)",
        tiempo: "35-45 min",
        detalles_verdura: "Zanahoria 400 g + champiñones 400 g + tomate triturado 200 g. (Opcional: 200 g pimiento rojo/verde para volumen).",
        especias_y_sal: "5-6 g de sal para toda la olla, ajo en polvo, pimentón dulce, pimienta negra y perejil. Opcional: azafrán o colorante.",
        instrucciones: [
          "Cortar el pollo en dados y salpimentar.",
          "Dorar el pollo con el AOVE en olla grande a potencia 7 durante 5-7 min.",
          "Añadir la zanahoria cortada en rodajas finas y cocinar a potencia 6 durante 4 min.",
          "Añadir los champiñones laminados y el tomate triturado. Cocinar a potencia 6 durante 3-4 min.",
          "Añadir el arroz seco y remover todo junto durante 1 min.",
          "Añadir agua o caldo: unas 3 partes de líquido por 1 parte de arroz seco si se quiere caldoso.",
          "Cocer a potencia 7 hasta que hierva, y luego bajar a potencia 4-5 durante 18-20 min.",
          "Reposar 5 min antes de repartir."
        ],
        individual: {
          padre: { "Pollo crudo": "220 g", "Arroz seco": "110 g", "Verdura": "250 g", "AOVE": "10 g" },
          madre: { "Pollo crudo": "180 g", "Arroz seco": "55 g", "Verdura": "300 g", "AOVE": "8 g" },
          luis: { "Pollo crudo": "220 g", "Arroz seco": "90 g", "Verdura": "250 g", "AOVE": "10 g" },
          natalia: { "Pollo crudo": "160 g", "Arroz seco": "80 g", "Verdura": "200 g", "AOVE": "8 g" }
        },
        lote: {
          ingredientes: { "Pollo crudo": "780 g", "Arroz seco": "335 g", "Verdura (mix)": "1000 g", "AOVE": "36 g" },
          reparto: { padre: 27.4, madre: 25.2, luis: 26.5, natalia: 20.8 }
        }
      },
      cena: {
        nombre: "Pollo frío o a la plancha + ensalada grande + gazpacho (Repetición)",
        tiempo: "15-20 min",
        detalles_verdura: "Lechuga, tomate fresco, zanahoria rallada, cebolla u otras verduras para ensalada grande.",
        especias_y_sal: "Sal, ajo en polvo y pimienta para el pollo. Vinagre/limón, sal y AOVE para aliñar la ensalada.",
        instrucciones: [
          "Si se usa pollo frío ya cocinado: cortarlo en tiras. Si es a la plancha: sazonar los filetes de pechuga con sal y ajo en polvo y cocinarlos a la plancha a potencia 7-8 durante 3-4 min por lado con un toque de AOVE.",
          "Preparar una ensalada grande con lechuga, tomate fresco y zanahoria rallada, y aliñar al gusto con sal, vinagre/limón y AOVE de forma controlada.",
          "Servir el pollo (caliente o frío) sobre o junto a la ensalada según el porcentaje de reparto.",
          "Acompañar con el gazpacho tradicional frío y el pan correspondiente de cada persona."
        ],
        individual: {
          padre: { "Pollo crudo": "200 g", "Ensalada": "250 g", "Gazpacho": "300 ml", "Pan": "50 g", "AOVE": "5 g" },
          madre: { "Pollo crudo": "160 g", "Ensalada": "300 g", "Gazpacho": "300 ml", "Pan": "0 g", "AOVE": "5 g" },
          luis: { "Pollo crudo": "200 g", "Ensalada": "250 g", "Gazpacho": "300 ml", "Pan": "30 g", "AOVE": "5 g" },
          natalia: { "Pollo crudo": "150 g", "Ensalada": "200 g", "Gazpacho": "250 ml", "Pan": "30 g", "AOVE": "5 g" }
        },
        lote: {
          ingredientes: { "Pollo crudo": "710 g", "Ensalada": "1000 g", "AOVE": "20 g" },
          reparto: { padre: 27.1, madre: 26.4, luis: 26.4, natalia: 20.1 },
          extras: {
            padre: "300 ml gazpacho + 50 g pan",
            madre: "300 ml gazpacho + sin pan",
            luis: "300 ml gazpacho + 30 g pan",
            natalia: "250 ml gazpacho + 30 g pan"
          }
        }
      }
    }
  },
  totales_diarios: {
    padre: [
      { dia: 1, kcal: 2623, p: 195, h: 308, g: 64 },
      { dia: 2, kcal: 2885, p: 209, h: 354, g: 70 },
      { dia: 3, kcal: 2745, p: 180, h: 323, g: 80 },
      { dia: 4, kcal: 2641, p: 198, h: 347, g: 50 },
      { dia: 5, kcal: 2769, p: 191, h: 352, g: 66 },
      { dia: 6, kcal: 2664, p: 207, h: 344, g: 50 }
    ],
    madre: [
      { dia: 1, kcal: 1862, p: 159, h: 192, g: 48 },
      { dia: 2, kcal: 1896, p: 161, h: 204, g: 48 },
      { dia: 3, kcal: 1878, p: 138, h: 203, g: 57 },
      { dia: 4, kcal: 1725, p: 146, h: 209, g: 33 },
      { dia: 5, kcal: 1897, p: 150, h: 224, g: 44 },
      { dia: 6, kcal: 1758, p: 164, h: 195, g: 35 }
    ],
    luis: [
      { dia: 1, kcal: 2174, p: 168, h: 236, g: 57 },
      { dia: 2, kcal: 2382, p: 179, h: 272, g: 62 },
      { dia: 3, kcal: 2268, p: 150, h: 249, g: 72 },
      { dia: 4, kcal: 2151, p: 167, h: 273, g: 41 },
      { dia: 5, kcal: 2297, p: 162, h: 278, g: 58 },
      { dia: 6, kcal: 2163, p: 178, h: 261, g: 43 }
    ],
    natalia: [
      { dia: 1, kcal: 2017, p: 112, h: 277, g: 49 },
      { dia: 2, kcal: 2189, p: 121, h: 313, g: 50 },
      { dia: 3, kcal: 2084, p: 96, h: 295, g: 58 },
      { dia: 4, kcal: 1964, p: 104, h: 309, g: 35 },
      { dia: 5, kcal: 2004, p: 100, h: 303, g: 44 },
      { dia: 6, kcal: 2027, p: 119, h: 305, g: 37 }
    ]
  }
};

let currentTab = 'resumen';
let activeMember = 'padre';
let activeDay = 1;
let menuViewMode = 'lote'; // 'lote' o 'individual'
let batchMultiplier = 1; // Multiplicador de raciones para cocina por lotes

// CLOUD SYNC CONFIG (local proxy → jsonblob.com, zero CORS issues)
const SYNC_API_URL = '/api/sync';
const SYNC_KEYS = ['dieta_shopping_state', 'dieta_cooked_state', 'dieta_postponed_state'];
let isSyncing = false;

function setSyncStatus(status) {
  const dot = document.getElementById('sync-indicator');
  if (!dot) return;
  dot.classList.remove('synced', 'syncing', 'error');
  if (status === 'synced') {
    dot.classList.add('synced');
    dot.title = '✅ Sincronizado con la nube familiar';
  } else if (status === 'syncing') {
    dot.classList.add('syncing');
    dot.title = '🔄 Sincronizando...';
  } else if (status === 'error') {
    dot.classList.add('error');
    dot.title = '⚠️ Error de conexión. Trabajando localmente';
  }
}

function syncPull() {
  setSyncStatus('syncing');
  return fetch(SYNC_API_URL, { headers: { 'Accept': 'application/json' } })
    .then(res => {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json();
    })
    .then(data => {
      if (data && typeof data === 'object') {
        SYNC_KEYS.forEach(key => {
          if (data[key] !== undefined && data[key] !== null) {
            localStorage.setItem(key, JSON.stringify(data[key]));
          }
        });
      }
      setSyncStatus('synced');
    })
    .catch(err => {
      console.warn('syncPull error:', err);
      setSyncStatus('error');
    });
}

function syncPush() {
  if (isSyncing) return;
  isSyncing = true;
  setSyncStatus('syncing');

  const payload = {};
  SYNC_KEYS.forEach(key => {
    try {
      payload[key] = JSON.parse(localStorage.getItem(key)) || {};
    } catch (e) {
      payload[key] = {};
    }
  });

  fetch(SYNC_API_URL, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify(payload)
  })
    .then(res => {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      setSyncStatus('synced');
    })
    .catch(err => {
      console.warn('syncPush error:', err);
      setSyncStatus('error');
    })
    .finally(() => {
      isSyncing = false;
    });
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initTabs();
  initDashboard();

  // Descargar estado de la nube antes de renderizar las secciones que dependen de localStorage
  syncPull().then(() => {
    initProfiles();
    initMenu();
    initShoppingList();
    initProducts();
    initMercadonaModal();
  });
});

// PESTAÑAS (TABS)
function initTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      switchTab(targetTab);
    });
  });
}

// CAMBIAR PESTAÑA
function switchTab(tabId) {
  currentTab = tabId;
  
  // Activar botón
  document.querySelectorAll('.tab-btn').forEach(btn => {
    if (btn.getAttribute('data-tab') === tabId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Activar sección
  document.querySelectorAll('.page-section').forEach(section => {
    if (section.id === `${tabId}-section`) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });

  // Acciones especiales al cambiar de pestaña
  if (tabId === 'perfiles') {
    renderProfileDetails();
  } else if (tabId === 'menu') {
    renderMenuDay();
  }
}

// DASHBOARD
function initDashboard() {
  const grid = document.getElementById('dashboard-members-grid');
  if (!grid) return;
  
  grid.innerHTML = '';
  
  Object.keys(NUTRITION_DATA.miembros).forEach(key => {
    const member = NUTRITION_DATA.miembros[key];
    const card = document.createElement('div');
    card.className = `summary-card ${member.id}`;
    
    // Inicial para Avatar
    const initial = member.nombre.charAt(0);
    
    card.innerHTML = `
      <div class="card-header-flex">
        <div>
          <h3 class="card-name">${member.nombre}</h3>
          <span class="card-subtitle">${member.objetivo}</span>
        </div>
        <div class="card-avatar">${initial}</div>
      </div>
      <div class="card-kcal">${member.macros.kcal} <span>kcal</span></div>
      <div class="card-macros">
        <div class="macro-box p">
          <span class="macro-val">${member.macros.p}</span>
          <span class="macro-lbl">Prot</span>
        </div>
        <div class="macro-box h">
          <span class="macro-val">${member.macros.h}</span>
          <span class="macro-lbl">HC</span>
        </div>
        <div class="macro-box g">
          <span class="macro-val">${member.macros.g}</span>
          <span class="macro-lbl">Grasa</span>
        </div>
      </div>
    `;
    
    card.addEventListener('click', () => {
      activeMember = member.id;
      switchTab('perfiles');
    });
    
    grid.appendChild(card);
  });
}

// PERFILES
function initProfiles() {
  const container = document.getElementById('profile-selector-container');
  if (!container) return;
  
  container.innerHTML = '';
  
  Object.keys(NUTRITION_DATA.miembros).forEach(key => {
    const member = NUTRITION_DATA.miembros[key];
    const btn = document.createElement('button');
    btn.className = `profile-select-btn ${member.id} ${activeMember === member.id ? 'active' : ''}`;
    btn.innerHTML = `<span class="dot"></span> ${member.nombre}`;
    
    btn.addEventListener('click', () => {
      activeMember = member.id;
      document.querySelectorAll('.profile-select-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProfileDetails();
    });
    
    container.appendChild(btn);
  });
}

function renderProfileDetails() {
  const member = NUTRITION_DATA.miembros[activeMember];
  if (!member) return;
  
  // Nombre y Objetivo
  document.getElementById('profile-name').innerText = member.nombre;
  document.getElementById('profile-objective').innerText = member.objetivo;
  
  // Macros Sidebar
  const macrosList = document.getElementById('profile-macros-list');
  
  // Calculate SVG offsets
  const kcalVal = member.macros_num.kcal || 2000;
  const pVal = member.macros_num.p || 100;
  const hVal = member.macros_num.h || 200;
  const gVal = member.macros_num.g || 50;
  
  const maxValues = { kcal: 3200, p: 200, h: 400, g: 100 };
  
  const pctH = Math.min(hVal / maxValues.h, 1);
  const pctP = Math.min(pVal / maxValues.p, 1);
  const pctG = Math.min(gVal / maxValues.g, 1);
  
  const circumferenceH = 2 * Math.PI * 80; // 502.65
  const circumferenceP = 2 * Math.PI * 62; // 389.56
  const circumferenceG = 2 * Math.PI * 44; // 276.46
  
  const offsetH = circumferenceH - (pctH * circumferenceH);
  const offsetP = circumferenceP - (pctP * circumferenceP);
  const offsetG = circumferenceG - (pctG * circumferenceG);
  
  const kcalText = member.kcal === 'Flexible' ? 'Flex' : kcalVal;

  macrosList.innerHTML = `
    <h4>Objetivos Nutricionales</h4>
    
    <div class="macros-chart-container">
      <svg width="200" height="200" viewBox="0 0 200 200" class="macros-svg">
        <!-- Tracks -->
        <circle cx="100" cy="100" r="80" class="track-circle" />
        <circle cx="100" cy="100" r="62" class="track-circle" />
        <circle cx="100" cy="100" r="44" class="track-circle" />
        
        <!-- Fills -->
        <circle cx="100" cy="100" r="80" class="fill-circle hc" stroke-dasharray="${circumferenceH}" stroke-dashoffset="${circumferenceH}" transform="rotate(-90 100 100)" />
        <circle cx="100" cy="100" r="62" class="fill-circle prot" stroke-dasharray="${circumferenceP}" stroke-dashoffset="${circumferenceP}" transform="rotate(-90 100 100)" />
        <circle cx="100" cy="100" r="44" class="fill-circle fat" stroke-dasharray="${circumferenceG}" stroke-dashoffset="${circumferenceG}" transform="rotate(-90 100 100)" />
        
        <!-- Center Text -->
        <text x="100" y="98" class="chart-kcal-val">${kcalText}</text>
        <text x="100" y="118" class="chart-kcal-lbl">kcal / día</text>
      </svg>
    </div>
    
    <div class="macros-meters-list">
      <!-- Renders bars below -->
    </div>
  `;
  
  // Animate SVG rings
  setTimeout(() => {
    const circleH = macrosList.querySelector('.fill-circle.hc');
    const circleP = macrosList.querySelector('.fill-circle.prot');
    const circleG = macrosList.querySelector('.fill-circle.fat');
    if (circleH) circleH.style.strokeDashoffset = offsetH;
    if (circleP) circleP.style.strokeDashoffset = offsetP;
    if (circleG) circleG.style.strokeDashoffset = offsetG;
  }, 50);

  const metersList = macrosList.querySelector('.macros-meters-list');
  const labelMap = { kcal: 'Calorías (kcal)', p: 'Proteína (g)', h: 'Carbohidratos (g)', g: 'Grasas (g)' };
  
  Object.keys(member.macros).forEach(key => {
    const valText = member.macros[key];
    const valNum = member.macros_num[key] || 0;
    const maxVal = maxValues[key] || 100;
    const percentage = valNum ? Math.min((valNum / maxVal) * 100, 100) : 0;
    
    const barColor = key === 'kcal' ? 'var(--primary)' : (key === 'p' ? '#f43f5e' : (key === 'h' ? '#38bdf8' : '#f59e0b'));
    
    const meter = document.createElement('div');
    meter.className = 'macro-meter';
    meter.innerHTML = `
      <div class="macro-meter-header">
        <span class="macro-meter-lbl">${labelMap[key]}</span>
        <span class="macro-meter-val" style="font-weight: 600;">${valText}</span>
      </div>
      <div class="macro-meter-bar-container">
        <div class="macro-meter-bar" data-pct="${percentage}" style="width: 0%; background-color: ${barColor};"></div>
      </div>
    `;
    metersList.appendChild(meter);
  });

  setTimeout(() => {
    macrosList.querySelectorAll('.macro-meter-bar').forEach(bar => {
      const pct = bar.getAttribute('data-pct');
      if (pct) bar.style.width = `${pct}%`;
    });
  }, 50);
  
  // Comidas Fijas
  const mealsContainer = document.getElementById('profile-meals-container');
  mealsContainer.innerHTML = `
    <div class="meal-block">
      <h4>🍳 Desayuno Fijo</h4>
      <p>${member.desayuno}</p>
    </div>
    <div class="meal-block">
      <h4>🍇 Merienda Saciante</h4>
      <p>${member.merienda}</p>
    </div>
    <div class="tip-box">
      <h5>💡 Ajustes Importantes</h5>
      <p>${member.ajustes}</p>
    </div>
  `;
  
  // Menú Semanal y Gráfico
  renderMemberMenuTable();
}

function renderMemberMenuTable() {
  const tableBody = document.getElementById('profile-menu-table-body');
  if (!tableBody) return;
  
  tableBody.innerHTML = '';
  
  // Cargar estado de platos cocinados desde localStorage
  const savedCookedState = JSON.parse(localStorage.getItem('dieta_cooked_state')) || {};
  
  // Conseguir los totales diarios para este miembro
  const totales = NUTRITION_DATA.totales_diarios[activeMember] || [];
  
  for (let d = 1; d <= 6; d++) {
    const dayData = NUTRITION_DATA.menu[d];
    const comidaNombre = dayData.comida.nombre;
    const cenaNombre = dayData.cena.nombre;
    
    const comidaKey = `cooked_${activeMember}_day_${d}_comida`;
    const cenaKey = `cooked_${activeMember}_day_${d}_cena`;
    
    const isComidaCooked = !!savedCookedState[comidaKey];
    const isCenaCooked = !!savedCookedState[cenaKey];
    
    const totalMacros = totales.find(t => t.dia === d) || { kcal: '-', p: '-', h: '-', g: '-' };
    
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="font-weight: 600; text-align: center;">Día ${d}</td>
      <td class="${isComidaCooked ? 'cooked-done' : ''}">
        <div style="display:flex; align-items:flex-start; gap:0.5rem;">
          <input type="checkbox" class="cooked-checkbox" data-key="${comidaKey}" ${isComidaCooked ? 'checked' : ''} title="Marcar como cocinado / consumido">
          <div>
            <div style="font-weight: 500; font-size: 0.9rem;">${comidaNombre}</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.25rem;">
              ${formatIngredientesList(dayData.comida.individual[activeMember])}
            </div>
          </div>
        </div>
      </td>
      <td class="${isCenaCooked ? 'cooked-done' : ''}">
        <div style="display:flex; align-items:flex-start; gap:0.5rem;">
          <input type="checkbox" class="cooked-checkbox" data-key="${cenaKey}" ${isCenaCooked ? 'checked' : ''} title="Marcar como cocinado / consumido">
          <div>
            <div style="font-weight: 500; font-size: 0.9rem;">${cenaNombre}</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.25rem;">
              ${formatIngredientesList(dayData.cena.individual[activeMember])}
              ${dayData.cena.lote.extras && dayData.cena.lote.extras[activeMember] ? `<br><strong style="color:var(--warning);">Extra:</strong> ${dayData.cena.lote.extras[activeMember]}` : ''}
            </div>
          </div>
        </div>
      </td>
      <td style="font-family: 'Outfit', sans-serif; font-size: 0.85rem; white-space: nowrap; text-align: right;">
        <strong style="color:var(--primary); font-size: 0.95rem;">${totalMacros.kcal} kcal</strong><br>
        <span style="font-size: 0.75rem; color: var(--text-secondary);">
          P: ${totalMacros.p}g | H: ${totalMacros.h}g | G: ${totalMacros.g}g
        </span>
      </td>
    `;
    tableBody.appendChild(tr);
  }
  
  // Agregar escuchadores de eventos a los checkboxes de cocinado
  const checkboxes = tableBody.querySelectorAll('.cooked-checkbox');
  checkboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      const key = cb.getAttribute('data-key');
      const td = cb.closest('td');
      if (cb.checked) {
        savedCookedState[key] = true;
        if (td) td.classList.add('cooked-done');
      } else {
        delete savedCookedState[key];
        if (td) td.classList.remove('cooked-done');
      }
      localStorage.setItem('dieta_cooked_state', JSON.stringify(savedCookedState));
      syncPush();
    });
  });
}

function formatIngredientesList(indData) {
  if (!indData) return '';
  return Object.keys(indData).map(k => `${k}: <strong>${indData[k]}</strong>`).join(" | ");
}

// MENÚ DIARIO
function initMenu() {
  const dayContainer = document.getElementById('menu-day-selector');
  if (!dayContainer) return;
  
  dayContainer.innerHTML = '';
  
  for (let d = 1; d <= 7; d++) {
    const btn = document.createElement('button');
    btn.className = `day-btn ${activeDay === d ? 'active' : ''}`;
    if (d === 7) {
      btn.innerHTML = `<span class="day-word">Día </span>7 <span style="font-size:0.7rem; color:var(--primary); font-weight:bold; margin-left:0.25rem;">🌿</span>`;
    } else {
      btn.innerHTML = `<span class="day-word">Día </span>${d}`;
    }
    btn.addEventListener('click', () => {
      activeDay = d;
      document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Limpiar buscador al hacer clic en un día para restaurar la vista normal
      const searchInput = document.getElementById('search-menu-input');
      if (searchInput) searchInput.value = '';
      
      renderMenuDay();
    });
    dayContainer.appendChild(btn);
  }
  
  // Toggles de vista (Individual / Lotes)
  const toggleInd = document.getElementById('toggle-mode-individual');
  const toggleLote = document.getElementById('toggle-mode-lote');
  
  if (toggleInd && toggleLote) {
    toggleInd.addEventListener('click', () => {
      menuViewMode = 'individual';
      toggleInd.classList.add('active');
      toggleLote.classList.remove('active');
      renderMenuDay();
    });
    toggleLote.addEventListener('click', () => {
      menuViewMode = 'lote';
      toggleLote.classList.add('active');
      toggleInd.classList.remove('active');
      renderMenuDay();
    });
  }

  // Buscador de recetas
  const menuSearchInput = document.getElementById('search-menu-input');
  if (menuSearchInput) {
    menuSearchInput.addEventListener('input', () => {
      renderMenuDay();
    });
  }

  // Manejador de eventos para posponer/restaurar comidas/cenas libres (Día 7)
  const mealsGrid = document.querySelector('.menu-meals-grid');
  if (mealsGrid) {
    mealsGrid.addEventListener('click', (e) => {
      const outBtn = e.target.closest('.meal-out-btn');
      const restoreBtn = e.target.closest('.meal-restore-btn');
      
      if (outBtn) {
        const day = outBtn.getAttribute('data-day');
        const meal = outBtn.getAttribute('data-meal');
        const savedPostponedState = JSON.parse(localStorage.getItem('dieta_postponed_state')) || {};
        savedPostponedState[`postponed_day_${day}_${meal}`] = true;
        localStorage.setItem('dieta_postponed_state', JSON.stringify(savedPostponedState));
        syncPush();
        renderMenuDay();
      }
      
      if (restoreBtn) {
        const day = restoreBtn.getAttribute('data-day');
        const meal = restoreBtn.getAttribute('data-meal');
        const savedPostponedState = JSON.parse(localStorage.getItem('dieta_postponed_state')) || {};
        delete savedPostponedState[`postponed_day_${day}_${meal}`];
        localStorage.setItem('dieta_postponed_state', JSON.stringify(savedPostponedState));
        syncPush();
        renderMenuDay();
      }
    });
  }
}

function renderMenuDay() {
  const searchInput = document.getElementById('search-menu-input');
  const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
  
  const dayContainer = document.getElementById('menu-day-selector');
  const mealsGrid = document.querySelector('.menu-meals-grid');
  if (!mealsGrid) return;
  
  const savedPostponedState = JSON.parse(localStorage.getItem('dieta_postponed_state')) || {};
  
  if (query) {
    // Esconder selector de día y renderizar resultados globales
    if (dayContainer) dayContainer.style.display = 'none';
    mealsGrid.innerHTML = '';
    
    let found = false;
    for (let d = 1; d <= 6; d++) {
      const dayData = NUTRITION_DATA.menu[d];
      
      if (mealMatchesQuery(dayData.comida, query)) {
        const card = document.createElement('div');
        card.className = 'menu-meal-card';
        mealsGrid.appendChild(card);
        renderMeal(dayData.comida, card, `Día ${d} • Comida`);
        found = true;
      }
      
      if (mealMatchesQuery(dayData.cena, query)) {
        const card = document.createElement('div');
        card.className = 'menu-meal-card';
        mealsGrid.appendChild(card);
        renderMeal(dayData.cena, card, `Día ${d} • Cena`);
        found = true;
      }
    }
    
    if (!found) {
      mealsGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 3rem 1rem; width: 100%;">
          <p style="font-size: 1.5rem; margin-bottom: 0.5rem;">🔍</p>
          <p>No se encontraron platos o ingredientes para "${query}"</p>
        </div>
      `;
    }
  } else {
    // Restaurar vista normal por días
    if (dayContainer) dayContainer.style.display = 'flex';
    
    if (activeDay === 7) {
      mealsGrid.innerHTML = '';
      const postponedMeals = [];
      Object.keys(savedPostponedState).forEach(key => {
        const match = key.match(/^postponed_day_(\d+)_(comida|cena)$/);
        if (match) {
          const d = parseInt(match[1]);
          const type = match[2];
          const dayData = NUTRITION_DATA.menu[d];
          if (dayData && dayData[type]) {
            postponedMeals.push({
              day: d,
              type: type,
              data: dayData[type]
            });
          }
        }
      });
      
      if (postponedMeals.length === 0) {
        mealsGrid.innerHTML = `
          <div style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 3.5rem 1.5rem; width: 100%; background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-color); border-radius: var(--radius-lg);">
            <p style="font-size: 2.5rem; margin-bottom: 1rem;">🌿</p>
            <h3 style="font-family: 'Outfit', sans-serif; margin-bottom: 0.5rem; color: var(--text-primary);">Día 7 Libre Familiar</h3>
            <p style="max-width: 480px; margin: 0 auto; color: var(--text-muted); font-size: 0.9rem; line-height: 1.6;">
              No tienes platos pospuestos para hoy. El Día 7 es un día totalmente libre para comer y cenar fuera de casa o improvisar según os apetezca.
            </p>
          </div>
        `;
      } else {
        postponedMeals.forEach(item => {
          const card = document.createElement('div');
          card.className = 'menu-meal-card';
          mealsGrid.appendChild(card);
          const label = `Día ${item.day} • ${item.type === 'comida' ? 'Comida Pospuesta' : 'Cena Pospuesta'}`;
          renderMeal(item.data, card, label);
        });
      }
      return;
    }
    
    const dayData = NUTRITION_DATA.menu[activeDay];
    if (!dayData) return;
    
    mealsGrid.innerHTML = `
      <div class="menu-meal-card" id="menu-comida-card"></div>
      <div class="menu-meal-card" id="menu-cena-card"></div>
    `;
    
    const comidaCard = document.getElementById('menu-comida-card');
    const cenaCard = document.getElementById('menu-cena-card');
    
    // Comprobar comida pospuesta
    const isComidaPostponed = !!savedPostponedState[`postponed_day_${activeDay}_comida`];
    if (isComidaPostponed) {
      comidaCard.className = 'menu-meal-card postponed-meal-card';
      comidaCard.innerHTML = `
        <div class="menu-meal-header" style="display:flex; justify-content:space-between; align-items:flex-start; gap:1rem; width:100%;">
          <div>
            <span>Comida</span>
            <h3 style="color: var(--primary);">🎉 Comida Libre Fuera</h3>
          </div>
          <button class="meal-restore-btn" data-day="${activeDay}" data-meal="comida" style="background:rgba(239, 68, 68, 0.12); border:1px solid rgba(239, 68, 68, 0.25); color:#ef4444; padding:0.35rem 0.65rem; border-radius:var(--radius-sm); font-size:0.75rem; cursor:pointer; display:flex; align-items:center; gap:0.25rem; font-family:'Outfit',sans-serif; font-weight:600;">
            ↩️ Restaurar plato
          </button>
        </div>
        <div style="padding: 1.5rem; text-align: center; color: var(--text-secondary); font-size: 0.9rem;">
          <p style="margin-bottom: 0.5rem; font-size: 1.1rem; color: var(--text-primary);">🌟 ¡Disfrutad de la comida fuera de casa!</p>
          <p style="font-size: 0.8rem; color: var(--text-muted);">
            El plato original (<strong>${dayData.comida.nombre}</strong>) se ha desplazado al <strong>Día 7 (Platos Pospuestos)</strong>.
          </p>
        </div>
      `;
    } else {
      renderMeal(dayData.comida, comidaCard, 'Comida');
    }
    
    // Comprobar cena pospuesta
    const isCenaPostponed = !!savedPostponedState[`postponed_day_${activeDay}_cena`];
    if (isCenaPostponed) {
      cenaCard.className = 'menu-meal-card postponed-meal-card';
      cenaCard.innerHTML = `
        <div class="menu-meal-header" style="display:flex; justify-content:space-between; align-items:flex-start; gap:1rem; width:100%;">
          <div>
            <span>Cena</span>
            <h3 style="color: var(--primary);">🎉 Cena Libre Fuera</h3>
          </div>
          <button class="meal-restore-btn" data-day="${activeDay}" data-meal="cena" style="background:rgba(239, 68, 68, 0.12); border:1px solid rgba(239, 68, 68, 0.25); color:#ef4444; padding:0.35rem 0.65rem; border-radius:var(--radius-sm); font-size:0.75rem; cursor:pointer; display:flex; align-items:center; gap:0.25rem; font-family:'Outfit',sans-serif; font-weight:600;">
            ↩️ Restaurar plato
          </button>
        </div>
        <div style="padding: 1.5rem; text-align: center; color: var(--text-secondary); font-size: 0.9rem;">
          <p style="margin-bottom: 0.5rem; font-size: 1.1rem; color: var(--text-primary);">🌟 ¡Disfrutad de la cena fuera de casa!</p>
          <p style="font-size: 0.8rem; color: var(--text-muted);">
            El plato original (<strong>${dayData.cena.nombre}</strong>) se ha desplazado al <strong>Día 7 (Platos Pospuestos)</strong>.
          </p>
        </div>
      `;
    } else {
      renderMeal(dayData.cena, cenaCard, 'Cena');
    }
  }
}

// Auxiliar para comprobar si una comida contiene la palabra buscada
function mealMatchesQuery(meal, query) {
  if (!meal) return false;
  const name = (meal.nombre || '').toLowerCase();
  const details = (meal.detalles_verdura || '').toLowerCase();
  const spices = (meal.especias_y_sal || '').toLowerCase();
  const egg = (meal.huevo_recomendado || '').toLowerCase();
  const instructions = (meal.instrucciones || []).join(' ').toLowerCase();
  
  // Comprobar también si contiene el ingrediente en el reparto individual
  const firstMember = Object.keys(meal.individual)[0];
  const ingredientsKeys = firstMember ? Object.keys(meal.individual[firstMember]).join(' ').toLowerCase() : '';
  
  return name.includes(query) || 
         details.includes(query) || 
         spices.includes(query) || 
         egg.includes(query) || 
         instructions.includes(query) || 
         ingredientsKeys.includes(query);
}

function renderMeal(mealData, cardEl, label) {
  cardEl.innerHTML = '';
  
  const savedPostponedState = JSON.parse(localStorage.getItem('dieta_postponed_state')) || {};
  let postponedCount = 0;
  Object.keys(savedPostponedState).forEach(key => {
    if (key.startsWith('postponed_day_') && savedPostponedState[key]) {
      postponedCount++;
    }
  });

  const showOutButton = !document.getElementById('search-menu-input')?.value.trim() && activeDay >= 1 && activeDay <= 6;
  
  let buttonStyle = "background:rgba(139, 92, 246, 0.12); border:1px solid rgba(139, 92, 246, 0.25); color:var(--primary);";
  let buttonText = "🍽️ Comer fuera";
  if (postponedCount >= 2) {
    buttonStyle = "background:rgba(245, 158, 11, 0.12); border:1px solid rgba(245, 158, 11, 0.35); color:var(--warning);";
    buttonText = "⚠️ Comer fuera (¡Te estás pasando!)";
  }

  const buttonHtml = showOutButton ? `
    <button class="meal-out-btn" data-day="${activeDay}" data-meal="${label.toLowerCase()}" style="${buttonStyle} padding:0.35rem 0.65rem; border-radius:var(--radius-sm); font-size:0.75rem; cursor:pointer; display:flex; align-items:center; gap:0.25rem; font-family:'Outfit',sans-serif; font-weight:600; transition:all var(--transition-fast);">
      ${buttonText}
    </button>
  ` : '';

  const header = document.createElement('div');
  header.className = 'menu-meal-header';
  header.style.cssText = 'display:flex; justify-content:space-between; align-items:flex-start; gap:1rem; width:100%;';
  header.innerHTML = `
    <div>
      <span>${label}</span>
      <h3>${mealData.nombre}</h3>
    </div>
    ${buttonHtml}
  `;
  cardEl.appendChild(header);

  // Agregar Receta Rápida si existe en los datos
  if (mealData.instrucciones && mealData.instrucciones.length > 0) {
    const details = document.createElement('details');
    details.className = 'recipe-details';
    details.style.cssText = 'margin-top: 1rem; background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 0.75rem;';
    
    let verduraHtml = '';
    if (mealData.detalles_verdura) {
      verduraHtml = `<p style="font-size:0.8rem; color:var(--warning); margin-bottom:0.5rem; font-style:italic; line-height:1.4;">🥗 <strong>Verdura concreta:</strong> ${mealData.detalles_verdura}</p>`;
    }
    
    let especiasHtml = '';
    if (mealData.especias_y_sal) {
      especiasHtml = `<p style="font-size:0.8rem; color:var(--success); margin-bottom:0.5rem; font-style:italic; line-height:1.4;">🧂 <strong>Especias y sal:</strong> ${mealData.especias_y_sal}</p>`;
    }
    
    let huevoHtml = '';
    if (mealData.huevo_recomendado) {
      huevoHtml = `<p style="font-size:0.8rem; color:var(--primary); margin-bottom:0.5rem; font-style:italic; line-height:1.4;">🥚 <strong>Recomendación huevo:</strong> ${mealData.huevo_recomendado}</p>`;
    }
    
    details.innerHTML = `
      <summary style="font-weight: 600; cursor: pointer; color: var(--primary); outline: none; display: flex; align-items: center; gap: 0.5rem; font-family: 'Outfit', sans-serif; font-size: 0.9rem;">
        📖 Receta Rápida (${mealData.tiempo || '30 min'})
      </summary>
      <div style="margin-top: 0.75rem;">
        ${verduraHtml}
        ${especiasHtml}
        ${huevoHtml}
        <ol style="padding-left: 1.25rem; font-size: 0.85rem; line-height: 1.55; color: var(--text-secondary); display: flex; flex-direction: column; gap: 0.45rem;">
          ${mealData.instrucciones.map(step => `<li>${step}</li>`).join('')}
        </ol>
      </div>
    `;
    cardEl.appendChild(details);
  }
  
  if (menuViewMode === 'individual') {
    // Tabla individual
    const table = document.createElement('table');
    table.className = 'portions-table';
    
    // Obtener las claves de ingredientes a partir del primer miembro
    const firstMemberId = Object.keys(mealData.individual)[0];
    const ingredKeys = Object.keys(mealData.individual[firstMemberId]);
    
    let ths = ingredKeys.map(k => `<th>${k}</th>`).join('');
    table.innerHTML = `
      <thead>
        <tr>
          <th>Persona</th>
          ${ths}
        </tr>
      </thead>
      <tbody>
      </tbody>
    `;
    
    const tbody = table.querySelector('tbody');
    
    Object.keys(mealData.individual).forEach(mId => {
      const member = NUTRITION_DATA.miembros[mId];
      const memberPortion = mealData.individual[mId];
      
      const tr = document.createElement('tr');
      tr.className = mId;
      
      let tds = ingredKeys.map(k => {
        let val = memberPortion[k] || '-';
        return `<td class="qty-highlight" data-label="${k}">${val}</td>`;
      }).join('');
      
      // Extras si los hay para esta cena
      let extraText = '';
      if (label === 'Cena' && mealData.lote.extras && mealData.lote.extras[mId]) {
        extraText = `<br><span style="font-size:0.75rem; color:var(--warning); font-weight:normal;">+ Extra: ${mealData.lote.extras[mId]}</span>`;
      }
      
      tr.innerHTML = `
        <td class="name-cell"><span class="dot"></span> ${member.nombre} ${extraText}</td>
        ${tds}
      `;
      tbody.appendChild(tr);
    });
    
    cardEl.appendChild(table);
  } else {
    // Vista por lote (Batch cooking) y calculadora
    const batchDiv = document.createElement('div');
    batchDiv.className = 'batch-cooking-details';
    
    // 1. Ingredientes del lote (escalados)
    let ingredItems = Object.keys(mealData.lote.ingredientes).map(k => {
      const scaledQty = scaleQuantity(mealData.lote.ingredientes[k], batchMultiplier);
      return `
        <div class="ingredient-item">
          <div class="ingredient-qty">${scaledQty}</div>
          <div class="ingredient-name">${k}</div>
        </div>
      `;
    }).join('');
    
    // 2. Reparto en %
    let repartoItems = Object.keys(mealData.lote.reparto).map(mId => {
      const member = NUTRITION_DATA.miembros[mId];
      const pct = mealData.lote.reparto[mId];
      return `
        <div class="reparto-item">
          <span class="reparto-name">${member.nombre} <span class="reparto-pct">${pct}%</span></span>
          <span class="reparto-val" id="reparto-val-${label.toLowerCase()}-${mId}">${pct}%</span>
        </div>
      `;
    }).join('');
    
    // Extras (escalados)
    let extrasSection = '';
    if (mealData.lote.extras) {
      let extRows = Object.keys(mealData.lote.extras).map(mId => {
        const member = NUTRITION_DATA.miembros[mId];
        const scaledExtra = scaleStringNumbers(mealData.lote.extras[mId], batchMultiplier);
        return `<div><strong>${member.nombre}:</strong> ${scaledExtra}</div>`;
      }).join('');
      
      extrasSection = `
        <div class="ingredients-list" style="margin-top: 1rem; border-color: rgba(245, 158, 11, 0.2);">
          <h4 style="color:var(--warning);">⚠️ Extras Individuales (No se cocinan en el plato En Familia)</h4>
          <div style="font-size:0.85rem; display:grid; gap:0.4rem;">
            ${extRows}
          </div>
        </div>
      `;
    }
    
    const suggestedPlaceholder = Math.round(950 * batchMultiplier);
    
    batchDiv.innerHTML = `
      <div class="multiplier-container">
        <span>⚖️ Escalar Cantidades En Familia:</span>
        <div class="multiplier-buttons">
          <button class="mult-btn ${batchMultiplier === 0.5 ? 'active' : ''}" data-mult="0.5">0.5x</button>
          <button class="mult-btn ${batchMultiplier === 1 ? 'active' : ''}" data-mult="1">1x (Normal)</button>
          <button class="mult-btn ${batchMultiplier === 1.5 ? 'active' : ''}" data-mult="1.5">1.5x</button>
          <button class="mult-btn ${batchMultiplier === 2 ? 'active' : ''}" data-mult="2">2x (Doble)</button>
          <button class="mult-btn ${batchMultiplier === 3 ? 'active' : ''}" data-mult="3">3x</button>
        </div>
      </div>

      <div class="ingredients-list">
        <h4>📋 Ingredientes Totales a Cocinar</h4>
        <div class="ingredients-grid">
          ${ingredItems}
        </div>
      </div>
      
      <div class="reparto-list">
        <h4>⚖️ Reparto Final del Plato</h4>
        <div style="display:flex; flex-direction:column; gap:0.25rem;">
          ${repartoItems}
        </div>
      </div>
      
      ${extrasSection}
      
      <div class="calc-card">
        <h4>🧮 Calculadora de Raciones Cocinadas</h4>
        <p style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:0.75rem;">
          Pesa la olla/bandeja final cocinada (restando la tara de la olla) e introduce el peso en gramos:
        </p>
        <div class="calc-input-group">
          <input type="number" id="calc-input-${label.toLowerCase()}" placeholder="Ej: ${suggestedPlaceholder}" min="0">
          <button id="calc-btn-${label.toLowerCase()}">Calcular</button>
        </div>
        <div class="calc-results" id="calc-results-${label.toLowerCase()}" style="display:none;">
          <!-- Se rellena dinámicamente -->
        </div>
      </div>
    `;
    
    cardEl.appendChild(batchDiv);

    // Adjuntar escuchadores de clics a los botones de multiplicación
    const multButtons = batchDiv.querySelectorAll('.mult-btn');
    multButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        batchMultiplier = parseFloat(btn.getAttribute('data-mult'));
        renderMenuDay();
      });
    });
    
    // Añadir listener a la calculadora
    const calcInput = cardEl.querySelector(`#calc-input-${label.toLowerCase()}`);
    const calcBtn = cardEl.querySelector(`#calc-btn-${label.toLowerCase()}`);
    const calcResults = cardEl.querySelector(`#calc-results-${label.toLowerCase()}`);
    
    if (calcBtn && calcInput) {
      const runCalc = () => {
        const totalWeight = parseFloat(calcInput.value);
        if (isNaN(totalWeight) || totalWeight <= 0) return;
        
        calcResults.innerHTML = '';
        calcResults.style.display = 'grid';
        
        Object.keys(mealData.lote.reparto).forEach(mId => {
          const member = NUTRITION_DATA.miembros[mId];
          const pct = mealData.lote.reparto[mId];
          const portionWeight = ((totalWeight * pct) / 100).toFixed(1);
          
          const box = document.createElement('div');
          box.className = 'calc-result-box';
          box.innerHTML = `
            <span class="calc-result-name">${member.nombre}</span>
            <span class="calc-result-val">${portionWeight} g</span>
          `;
          calcResults.appendChild(box);
          
          // Actualizar el valor de la lista de reparto también
          const listVal = cardEl.querySelector(`#reparto-val-${label.toLowerCase()}-${mId}`);
          if (listVal) {
            listVal.innerHTML = `${portionWeight} g <span style="font-size:0.7rem; color:var(--text-muted);">(${pct}%)</span>`;
          }
        });
      };
      
      calcBtn.addEventListener('click', runCalc);
      calcInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') runCalc();
      });
    }
  }
}

// LISTA DE LA COMPRA
function updateCategoryStatus(card) {
  const checkboxes = card.querySelectorAll('input.shopping-item-check');
  const checked = card.querySelectorAll('input.shopping-item-check:checked');
  const h3 = card.querySelector('h3');
  
  const existingBadge = h3.querySelector('.category-badge');
  if (existingBadge) existingBadge.remove();
  
  if (checkboxes.length === checked.length && checkboxes.length > 0) {
    const badge = document.createElement('span');
    badge.className = 'category-badge';
    badge.style.cssText = 'background:var(--success); color:white; font-size:0.7rem; padding:0.15rem 0.5rem; border-radius:10px; margin-left:auto; display:inline-flex; align-items:center; font-family:"Inter",sans-serif; font-weight:600;';
    badge.innerHTML = '✓ Listo';
    h3.appendChild(badge);
    card.style.borderColor = 'var(--success)';
  } else {
    card.style.borderColor = 'var(--border-color)';
  }
}

function initShoppingList() {
  const container = document.getElementById('shopping-list-container');
  if (!container) return;
  
  container.innerHTML = '';
  
  // Cargar estado guardado de localStorage
  const savedState = JSON.parse(localStorage.getItem('dieta_shopping_state')) || {};
  
  Object.keys(NUTRITION_DATA.compra).forEach(cat => {
    const card = document.createElement('div');
    card.className = 'shopping-card';
    
    const h3 = document.createElement('h3');
    const icon = cat === 'Proteína' ? '🥩' : (cat === 'Hidratos' ? '🌾' : (cat === 'Legumbres y Verduras' ? '🥦' : '🍯'));
    h3.innerHTML = `<span>${icon}</span> ${cat}`;
    card.appendChild(h3);
    
    const ul = document.createElement('div');
    ul.className = 'shopping-list';
    
    NUTRITION_DATA.compra[cat].forEach((item, index) => {
      const itemKey = `${cat}_${index}`;
      const isChecked = !!savedState[itemKey];
      
      const itemEl = document.createElement('div');
      itemEl.className = `shopping-item ${isChecked ? 'checked' : ''}`;
      itemEl.innerHTML = `
        <input type="checkbox" class="shopping-item-check" data-key="${itemKey}" ${isChecked ? 'checked' : ''}>
        <span class="shopping-item-text" style="cursor: pointer; flex-grow: 1;">${item}</span>
        <span class="mercadona-select-wrapper" style="margin-left: auto; display: inline-flex; align-items: center; gap: 0.25rem; flex-shrink: 0;">
          <span style="font-size: 0.75rem; color: var(--text-muted);" class="mercadona-lbl-text">🛒</span>
          <input type="checkbox" class="mercadona-select-check" data-item="${item.replace(/"/g, '&quot;')}" title="Seleccionar para pedir en Mercadona">
        </span>
      `;
      
      const checkbox = itemEl.querySelector('input.shopping-item-check');
      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          itemEl.classList.add('checked');
          savedState[itemKey] = true;
        } else {
          itemEl.classList.remove('checked');
          delete savedState[itemKey];
        }
        localStorage.setItem('dieta_shopping_state', JSON.stringify(savedState));
        syncPush();
        updateCategoryStatus(card);
      });

      const textSpan = itemEl.querySelector('.shopping-item-text');
      textSpan.addEventListener('click', () => {
        checkbox.checked = !checkbox.checked;
        checkbox.dispatchEvent(new Event('change'));
      });
      
      ul.appendChild(itemEl);
    });
    
    card.appendChild(ul);
    container.appendChild(card);
    updateCategoryStatus(card);
  });
  
  // Botón reset
  const resetBtn = document.getElementById('reset-shopping-list');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (!confirm('¿Seguro que quieres borrar todo lo tachado de la lista?')) return;
      localStorage.removeItem('dieta_shopping_state');
      document.querySelectorAll('.shopping-card').forEach(card => {
        card.querySelectorAll('.shopping-item').forEach(el => {
          el.classList.remove('checked');
          const cb = el.querySelector('input.shopping-item-check');
          if (cb) cb.checked = false;
        });
        updateCategoryStatus(card);
      });
    });
  }

  // Botón Pedir Mercadona
  const mercadonaOrderBtn = document.getElementById('mercadona-order-btn');
  if (mercadonaOrderBtn) {
    mercadonaOrderBtn.addEventListener('click', () => {
      const selectedChecks = document.querySelectorAll('.mercadona-select-check:checked');
      if (selectedChecks.length === 0) {
        alert('Por favor, selecciona al menos un ingrediente de la lista usando el checkbox con el carrito 🛒.');
        return;
      }
      
      const selectedItems = Array.from(selectedChecks).map(cb => cb.getAttribute('data-item'));
      showMercadonaModal(selectedItems);
    });
  }

  // Botón Copiar Pendientes
  const copyBtn = document.getElementById('copy-shopping-list');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const text = getPendingShoppingList();
      navigator.clipboard.writeText(text).then(() => {
        const originalText = copyBtn.innerText;
        copyBtn.innerText = '✅ ¡Copiado!';
        copyBtn.style.borderColor = 'var(--success)';
        setTimeout(() => { 
          copyBtn.innerText = originalText; 
          copyBtn.style.borderColor = '';
        }, 2000);
      }).catch(err => {
        console.error('Error al copiar al portapapeles:', err);
        alert('No se pudo copiar automáticamente.');
      });
    });
  }

  // Botón Compartir WhatsApp
  const whatsappBtn = document.getElementById('whatsapp-shopping-list');
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
      const text = getPendingShoppingList();
      const encodedText = encodeURIComponent(text);
      const url = `https://api.whatsapp.com/send?text=${encodedText}`;
      window.open(url, '_blank');
    });
  }
}

// Generar lista formateada de pendientes
function getPendingShoppingList() {
  const savedState = JSON.parse(localStorage.getItem('dieta_shopping_state')) || {};
  let pendingText = "*📋 NutriFamilia - Lista de Compra Pendiente*\n\n";
  let count = 0;
  
  Object.keys(NUTRITION_DATA.compra).forEach(cat => {
    const items = NUTRITION_DATA.compra[cat];
    const catPending = [];
    
    items.forEach((item, index) => {
      const itemKey = `${cat}_${index}`;
      if (!savedState[itemKey]) {
        catPending.push(`• ${item}`);
        count++;
      }
    });
    
    if (catPending.length > 0) {
      pendingText += `*${cat.toUpperCase()}:*\n${catPending.join('\n')}\n\n`;
    }
  });
  
  if (count === 0) {
    return "¡Enhorabuena! Has completado todas las compras de la semana. 🎉🍏";
  }
  
  return pendingText.trim();
}

// PRODUCTOS MERCADONA
function initProducts() {
  const grid = document.getElementById('products-grid-container');
  if (!grid) return;
  
  const searchInput = document.getElementById('search-products-input');
  
  const renderList = (filterText = '') => {
    grid.innerHTML = '';
    const filtered = NUTRITION_DATA.productos.filter(prod => {
      const text = `${prod.nombre} ${prod.uso}`.toLowerCase();
      return text.includes(filterText.toLowerCase());
    });
    
    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 3rem 1rem;">
          <p style="font-size: 1.5rem; margin-bottom: 0.5rem;">🔍</p>
          <p>No se encontraron productos para "${filterText}"</p>
        </div>
      `;
      return;
    }
    
    filtered.forEach(prod => {
      const card = document.createElement('div');
      card.className = 'product-card';
      
      card.innerHTML = `
        <div class="product-details">
          <span class="product-tag">${prod.uso}</span>
          <h4 class="product-name">${prod.nombre}</h4>
        </div>
        <a href="${prod.ref}" target="_blank" rel="noopener" class="product-btn">
          🛒 Ver en Mercadona
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 2px;">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      `;
      grid.appendChild(card);
    });
  };
  
  renderList();
  
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderList(e.target.value);
    });
  }
}

// TEMA CLARO / OSCURO
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;
  
  const icon = toggleBtn.querySelector('.theme-toggle-icon');
  const savedTheme = localStorage.getItem('dieta_theme') || 'dark';
  
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    if (icon) icon.innerText = '☀️';
  } else {
    document.body.classList.remove('light-theme');
    if (icon) icon.innerText = '🌙';
  }
  
  toggleBtn.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-theme');
    localStorage.setItem('dieta_theme', isLight ? 'light' : 'dark');
    if (icon) icon.innerText = isLight ? '☀️' : '🌙';
    
    // Redibujar gráficos si están activos
    if (currentTab === 'perfiles') {
      renderProfileDetails();
    }
  });
}

// ESCALAR CANTIDADES
function scaleQuantity(qtyStr, mult) {
  if (mult === 1 || !qtyStr) return qtyStr;
  
  // Extraer número y unidad (ej: "780 g" o "1.5 L")
  const match = qtyStr.trim().match(/^([\d.,]+)\s*(.*)$/);
  if (!match) return qtyStr;
  
  const num = parseFloat(match[1].replace(',', '.'));
  if (isNaN(num)) return qtyStr;
  
  const scaledNum = (num * mult).toFixed(1).replace(/\.0$/, '');
  const unit = match[2];
  
  return `${scaledNum} ${unit}`.trim();
}

function scaleStringNumbers(str, mult) {
  if (mult === 1 || !str) return str;
  // Reemplazar números seguidos de unidades clave
  return str.replace(/([\d.,]+)\s*(g|u|ml|latas?|huevos?|pan|barras?|piezas?|litros?|L)/gi, (match, p1, p2) => {
    const num = parseFloat(p1.replace(',', '.'));
    if (isNaN(num)) return match;
    const scaled = (num * mult).toFixed(1).replace(/\.0$/, '');
    return `${scaled} ${p2}`;
  });
}

// MERCADONA ORDER INTEGRATION
function initMercadonaModal() {
  const closeModal = () => {
    const modal = document.getElementById('mercadona-modal');
    if (modal) modal.style.display = 'none';
  };
  
  const closeBtn = document.getElementById('close-mercadona-modal');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  
  const closeBtnFooter = document.getElementById('close-mercadona-modal-btn');
  if (closeBtnFooter) closeBtnFooter.addEventListener('click', closeModal);
  
  const modalOverlay = document.getElementById('mercadona-modal');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }
}

function getMercadonaLink(itemText) {
  // Limpiar nombre del ingrediente
  let cleanName = itemText.split(':')[0].trim();
  
  // Quitar descripciones de empaquetado/pesos
  cleanName = cleanName.replace(/[\d.,]+\s*(g|kg|u|ml|l|botellas?|packs?|latas?|cajas?|paquetes?|barras?|piezas?)/gi, '').trim();
  
  const cleanNameLower = cleanName.toLowerCase();
  
  // Buscar en NUTRITION_DATA.productos por coincidencia
  let matchedProduct = NUTRITION_DATA.productos.find(p => {
    const prodNameLower = p.nombre.toLowerCase();
    return prodNameLower.includes(cleanNameLower) || cleanNameLower.includes(prodNameLower);
  });
  
  // Si no coincide, buscar por palabras clave
  if (!matchedProduct) {
    const words = cleanNameLower.split(/\s+/).filter(w => w.length > 3);
    if (words.length > 0) {
      matchedProduct = NUTRITION_DATA.productos.find(p => {
        const prodNameLower = p.nombre.toLowerCase();
        return words.every(w => prodNameLower.includes(w));
      });
    }
  }
  
  if (matchedProduct) {
    return {
      name: matchedProduct.nombre,
      link: matchedProduct.ref,
      matched: true
    };
  }
  
  // Fallback al buscador de Mercadona
  return {
    name: cleanName,
    link: `https://tienda.mercadona.es/search-results?query=${encodeURIComponent(cleanName)}`,
    matched: false
  };
}

function showMercadonaModal(selectedItems) {
  const modal = document.getElementById('mercadona-modal');
  const container = document.getElementById('mercadona-links-container');
  if (!modal || !container) return;
  
  container.innerHTML = '';
  
  selectedItems.forEach(itemText => {
    const mapped = getMercadonaLink(itemText);
    
    const row = document.createElement('div');
    row.className = 'mercadona-link-row';
    row.style.cssText = 'display:flex; justify-content:space-between; align-items:center; gap:1rem; padding:0.65rem 0.75rem; background:rgba(255,255,255,0.02); border:1px solid var(--border-color); border-radius:var(--radius-sm); margin-bottom:0.5rem;';
    
    const badgeHtml = mapped.matched 
      ? `<span style="background:rgba(16, 185, 129, 0.12); color:var(--success); font-size:0.7rem; padding:0.15rem 0.4rem; border-radius:4px; font-weight:600; display:inline-block; margin-top:0.25rem;">✓ Producto exacto</span>`
      : `<span style="background:rgba(245, 158, 11, 0.12); color:var(--warning); font-size:0.7rem; padding:0.15rem 0.4rem; border-radius:4px; font-weight:600; display:inline-block; margin-top:0.25rem;">🔍 Buscar en tienda</span>`;
      
    row.innerHTML = `
      <div style="flex-grow:1; text-align:left;">
        <div style="font-weight:500; font-size:0.9rem; color:var(--text-primary); line-height:1.3;">${itemText}</div>
        ${badgeHtml}
      </div>
      <a href="${mapped.link}" target="_blank" rel="noopener" class="btn-primary" style="background:#00703c; border:none; padding:0.45rem 0.85rem; border-radius:var(--radius-sm); color:white; font-size:0.8rem; font-weight:600; text-decoration:none; display:inline-flex; align-items:center; gap:0.25rem; white-space:nowrap; transition:background 0.2s ease;">
        🛒 ${mapped.matched ? 'Añadir' : 'Buscar'}
      </a>
    `;
    
    container.appendChild(row);
  });
  
  modal.style.display = 'flex';
}
