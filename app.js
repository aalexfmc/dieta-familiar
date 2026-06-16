// app.js

const NUTRITION_DATA = {
  miembros: {
    padre: {
      nombre: "Papá",
      id: "padre",
      objetivo: "Definición suave con rendimiento - V2 calibración",
      kcal: 2272,
      macros: { kcal: "2272 (media casa con batidos)", p: "169 g", h: "269 g", g: "55 g" },
      macros_num: { kcal: 2272, p: 169, h: 269, g: 55 },
      calibracion: { carrera: 2800, gimnasio: 2600, descanso: "2350-2450" },
      desayuno: "<strong>Fijo de desayuno:</strong> Café con leche semidesnatada 150 ml.<br><strong>Bloque fácil V2 recomendado:</strong> 1 pack salado crujiente + 1 pack dulce activo + 1 fruta.",
      merienda: "<strong>Distribución flexible V2:</strong> Café por la mañana; pack salado en almuerzo o media mañana; pack dulce en merienda o alrededor del gimnasio. Si hay carrera, cambiar el pack dulce por el extra carrera o añadir extra carrera según hambre/rendimiento.",
      ajustes: "<strong>Calibración V1:</strong> Carrera 2800 kcal · Gimnasio 2600 kcal · Descanso 2350-2450 kcal.<br><strong>Noche con entreno:</strong> 250 ml leche semidesnatada + 1 scoop proteína + creatina (cuenta en el total diario V2). 2 batidos en 6 días.",
      modulos_actividad: [
        {
          tipo: 'descanso',
          icono: '🛋️',
          titulo: 'Descanso / Oficina',
          kcal_objetivo: '2350-2450',
          batido: false,
          modulo: 'Sin batido. Mantener plan base.',
          extra_opcional: 'Si hay hambre real: +1 pack tortitas campestres 35 g o 1 fruta.',
          resultado: '~2196-2450 kcal',
          nota: 'No añadir más proteína: ya llega al objetivo proteico con la base.',
          macros: { kcal: "2350-2450", p: "170 g", h: "270 g", g: "70 g" },
          macros_num: { kcal: 2400, p: 170, h: 270, g: 70 }
        },
        {
          tipo: 'gimnasio',
          icono: '🏋️',
          titulo: 'Día de Gimnasio',
          kcal_objetivo: '2600',
          batido: true,
          modulo: 'Pre-entreno (30-90 min antes): 1 plátano o 1 pack tortitas campestres 35 g. Post-entreno (al llegar): 250 ml leche semidesnatada + 1 scoop proteína + creatina.',
          impacto: '+330-380 kcal · +30-33 g P · +34-45 g H · +6 g G',
          resultado: '~2525-2575 kcal',
          nota: 'El batido cuenta dentro del total diario V1. Solo si ese día entrena.',
          macros: { kcal: "2600", p: "200 g", h: "290 g", g: "70 g" },
          macros_num: { kcal: 2600, p: 200, h: 290, g: 70 }
        },
        {
          tipo: 'carrera_media',
          icono: '🏃',
          titulo: 'Carrera 10-12 km',
          kcal_objetivo: '2600-2800',
          batido: true,
          modulo: 'Pre-carrera (30-90 min antes): 1 plátano + 1 pack tortitas campestres 35 g. Post-carrera (al llegar): batido habitual.',
          impacto: '+470 kcal aprox.',
          resultado: '~2660-2700 kcal',
          nota: 'Suficiente si la carrera no ha sido muy larga o intensa. Solo si ese día corre.',
          macros: { kcal: "2600-2800", p: "200 g", h: "315 g", g: "70 g" },
          macros_num: { kcal: 2700, p: 200, h: 315, g: 70 }
        },
        {
          tipo: 'carrera_larga',
          icono: '🏃‍♂️',
          titulo: 'Carrera 15-20 km / 90 min',
          kcal_objetivo: '2800',
          batido: true,
          modulo: 'Pre-carrera (60-120 min antes): 1 plátano + 2 packs tortitas campestres 70 g. Post-carrera (al llegar): batido habitual.',
          extras_hidrato: 'Alternativa caliente si hay tiempo: 250 g patata cocida o 150 g arroz cocido.',
          impacto: '+600-700 kcal aprox.',
          resultado: '~2800-2900 kcal',
          nota: 'Priorizar hidratos, no más proteína. Si aún se queda corto, añadir 1 barrita muesli o 30 g Corn Flakes post-carrera. Solo si ese día corre largo.',
          macros: { kcal: "2800-2900", p: "200 g", h: "355 g", g: "70 g" },
          macros_num: { kcal: 2850, p: 200, h: 355, g: 70 }
        }
      ],
      packs_cero_elaboracion: [
        {
          nombre: 'Salado crujiente',
          momento: 'Almuerzo o merienda',
          productos: '1 pack tortitas campestres 35 g + 1 lata atún natural + 1 mini brik gazpacho 330 ml',
          macros: '340 kcal / 18 g P / 38 g H / 12 g G',
          comentario: 'Salado, fresco y saciante. Alto en sal, no usar siempre.'
        },
        {
          nombre: 'Dulce activo',
          momento: 'Merienda o pre-gym ligero',
          productos: '1 bebida láctea stracciatella +Proteínas 280 g + 1 pack tortitas maíz chocolate 32,5 g',
          macros: '301 kcal / 22 g P / 32 g H / 9 g G',
          comentario: 'Muy cómodo y apetecible. Si entrena por la tarde, usar 30-90 min antes. Más procesado, rotar.'
        },
        {
          nombre: 'Extra carrera',
          momento: 'Pre-carrera',
          productos: '1 plátano + 1 barrita muesli chocolate + 1 pack tortitas campestres 35 g',
          macros: '349 kcal / 5 g P / 69 g H / 7 g G',
          comentario: 'Hidrato fácil para correr. Tomar 30-90 min antes; en carrera larga, 60-120 min antes. Bajo en proteína a propósito.'
        },
        {
          nombre: 'Post-entreno listo',
          momento: 'Post-gym / post-carrera',
          productos: '1 bebida láctea stracciatella +Proteínas 280 g',
          macros: '146 kcal / 20 g P / 11 g H / 2 g G',
          comentario: 'Alternativa rápida al shaker al llegar de entrenar. Si toma leche + scoop, no sumar también este por defecto.'
        }
      ]
    },
    madre: {
      nombre: "Mamá",
      id: "madre",
      objetivo: "Pérdida grasa sostenible + pasos V1",
      kcal: 1611,
      macros: { kcal: "1611", p: "120 g", h: "178 g", g: "43 g" },
      macros_num: { kcal: 1611, p: 120, h: 178, g: 43 },
      desayuno: "<strong>Fijo de desayuno:</strong> Café con leche semidesnatada 150 ml.<br><strong>Media mañana fija:</strong> Infusión + 1 fruta.<br><strong>Bloque fácil V2 recomendado:</strong> 1 pack dulce controlado + 1 pack salado saciante.",
      merienda: "<strong>Distribución flexible V2:</strong> Café por la mañana; infusión + fruta a media mañana; pack dulce o salado antes del momento de picoteo; el otro pack se usa solo si aparece hambre real o si la cena queda lejos.",
      ajustes: "<strong>Pasos V1:</strong> Priorizar actividad diaria (7000 pasos sem. 1, 8000 sem. 2, 8000-10000 sem. 3) + no picoteo libre. Si hay hambre real: priorizar pack salado saciante o 1 fruta extra. No frutos secos libres.",
      packs_cero_elaboracion: [
        {
          nombre: 'Dulce controlado',
          momento: 'Merienda',
          productos: '1 natillas chocolate +Proteínas 120 g + 1 barrita cereales y frutos secos',
          macros: '215 kcal / 13 g P / 17 g H / 9 g G',
          comentario: 'Dulce, cerrado y más apetecible que yogur solo. Procesado, rotar.'
        },
        {
          nombre: 'Salado saciante',
          momento: 'Hambre real',
          productos: '1 mini brik gazpacho 330 ml + 1 lata atún natural + 1 fruta',
          macros: '275 kcal / 17 g P / 31 g H / 9 g G',
          comentario: 'Muy saciante y sin cocina. Alto en sal por atún/gazpacho.'
        },
        {
          nombre: 'Crujiente controlado',
          momento: 'Merienda',
          productos: '1 pack tortitas campestres 35 g + 1 natillas chocolate +Proteínas 120 g',
          macros: '242 kcal / 12 g P / 37 g H / 4 g G',
          comentario: 'Crujiente + dulce, todo cerrado. Mejor que picoteo sin medir.'
        }
      ]
    },
    luis: {
      nombre: "Luis",
      id: "luis",
      objetivo: "Definición / recomposición - V2 calibración",
      kcal: 2217,
      macros: { kcal: "2217 (media casa con batidos)", p: "171 g", h: "254 g", g: "55 g" },
      macros_num: { kcal: 2217, p: 171, h: 254, g: 55 },
      calibracion: { gimnasio: "2350-2400", descanso: "2050-2150" },
      desayuno: "<strong>Fijo de desayuno:</strong> Café con leche semidesnatada 150 ml.<br><strong>Bloque fácil V2 recomendado:</strong> 1 pack dulce potente + 1 pack salado crujiente.",
      merienda: "<strong>Distribución flexible V2:</strong> Café por la mañana; pack dulce como pre-gym o merienda; pack salado como almuerzo o cena tardía si no ha llegado a proteína. En descanso puede elegir solo uno de los dos packs si no tiene hambre.",
      ajustes: "<strong>Calibración V1:</strong> Gimnasio 2350-2400 kcal · Descanso 2050-2150 kcal.<br><strong>Noche con entreno:</strong> 250 ml leche semidesnatada + 1 scoop proteína + creatina (cuenta en el total diario V2). 3 batidos en 6 días.",
      modulos_actividad: [
        {
          tipo: 'descanso',
          icono: '🛋️',
          titulo: 'Descanso / Oficina',
          kcal_objetivo: '2050-2150',
          batido: false,
          modulo: 'Sin batido. Mantener plan base.',
          extra_opcional: 'Si hay hambre real: 1 fruta o 1 pack tortitas campestres 35 g.',
          resultado: '~2086 kcal',
          nota: 'Ya va alto de proteína — no añadir más.',
          macros: { kcal: "2050-2150", p: "172 g", h: "243 g", g: "47 g" },
          macros_num: { kcal: 2100, p: 172, h: 243, g: 47 }
        },
        {
          tipo: 'gimnasio',
          icono: '🏋️',
          titulo: 'Día de Gimnasio',
          kcal_objetivo: '2350-2400',
          batido: true,
          modulo: 'Pre-entreno (30-90 min antes): 1 plátano o 1 pack tortitas campestres 35 g. Post-entreno (al llegar): 250 ml leche semidesnatada + 1 scoop proteína + creatina.',
          impacto: '+305-340 kcal · +30 g P · +32-42 g H · +6 g G',
          resultado: '~2390-2425 kcal',
          nota: 'Si entrena fuerte y nota bajón, usar el pack dulce potente como pre-gym en vez de solo plátano. Solo si ese día entrena.',
          macros: { kcal: "2350-2400", p: "202 g", h: "283 g", g: "53 g" },
          macros_num: { kcal: 2380, p: 202, h: 283, g: 53 }
        }
      ],
      packs_cero_elaboracion: [
        {
          nombre: 'Dulce potente',
          momento: 'Merienda o pre-gym',
          productos: '1 bebida láctea stracciatella +Proteínas 280 g + 1 pack tortitas maíz chocolate 32,5 g + 1 plátano',
          macros: '406 kcal / 23 g P / 59 g H / 9 g G',
          comentario: 'Energético y fácil. Si entrena por la tarde, tomar 30-90 min antes. En descanso puede ser demasiado.'
        },
        {
          nombre: 'Salado crujiente',
          momento: 'Almuerzo o merienda',
          productos: '1 pack tortitas campestres 35 g + 1 lata atún natural + 1 mini brik gazpacho 330 ml',
          macros: '340 kcal / 18 g P / 38 g H / 12 g G',
          comentario: 'Salado y rápido. No hace falta meter más proteína si ya va alto.'
        },
        {
          nombre: 'Extra gimnasio',
          momento: 'Post-gym',
          productos: 'Batido habitual: 250 ml leche semidesnatada + 1 scoop proteína + creatina',
          macros: '230 kcal / 32 g P / 14 g H / 6 g G',
          comentario: 'Tomar al llegar de entrenar, antes o después de cenar según tolerancia. Cuenta dentro del día. En descanso no es obligatorio.'
        }
      ]
    },
    natalia: {
      nombre: "Natalia",
      id: "natalia",
      objetivo: "Rendimiento y crecimiento",
      kcal: "Flexible",
      macros: { kcal: "Flexible (orientativo ~1671)", p: "Flexible (orientativo ~106g)", h: "Generoso si entrena (orientativo ~238g)", g: "Flexible (orientativo ~32g)" },
      macros_num: { kcal: 1671, p: 106, h: 238, g: 32 },
      desayuno: "<strong>Bloque flexible orientativo V2:</strong> Elegir 1-2 packs al día según hambre, horario y baloncesto. Sin café con leche obligatorio.",
      merienda: "<strong>Distribución flexible V2:</strong> Pack dulce normal como desayuno o merienda; pack salado ocasional si le apetece; pack baloncesto antes o después de entrenar/partido.<br><strong>Alternativas:</strong> bocadillo pequeño, cereales con leche, yogur con fruta, fruta extra o tortitas.",
      ajustes: "En días de baloncesto: no recortar hidratos. No usar lenguaje de dieta restrictiva bajo ningún concepto. Las cantidades son flexibles por apetito y crecimiento.",
      packs_cero_elaboracion: [
        {
          nombre: 'Dulce normal',
          momento: 'Merienda',
          productos: '1 vaso leche semidesnatada 250 ml + 1 barrita muesli chocolate + 1 fruta',
          macros: '294 kcal / 10 g P / 47 g H / 8 g G',
          comentario: 'Flexible, normal y sin enfoque de dieta.'
        },
        {
          nombre: 'Salado ocasional',
          momento: 'Merienda',
          productos: '1 pack palitos con frutos secos 65 g + 1 mini brik gazpacho 330 ml',
          macros: '449 kcal / 12 g P / 47 g H / 24 g G',
          comentario: 'Muy apetecible pero más graso/salado. Usar como opción, no obligación.'
        },
        {
          nombre: 'Baloncesto',
          momento: 'Pre-basket o post-basket',
          productos: '1 plátano + 1 barrita muesli chocolate + 1 pack tortitas campestres 35 g',
          macros: '349 kcal / 5 g P / 69 g H / 7 g G',
          comentario: 'Hidrato fácil. Mejor 30-90 min antes si entrena por la tarde; si no da tiempo, después. No recortar en días de basket.'
        }
      ]
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
    { nombre: "Leche semidesnatada Hacendado", ref: "https://tienda.mercadona.es/product/10382/leche-semidesnatada-hacendado-brick", uso: "Batido post-entreno Papá/Luis" },
    { nombre: "Tortitas de maíz con chocolate Hacendado", ref: "https://tienda.mercadona.es/product/14788/tortitas-maiz-chocolate-negro-hacendado-paquete", uso: "Packs 0 elaboración" },
    { nombre: "Barritas muesli chocolate Hacendado", ref: "https://tienda.mercadona.es/product/21808/barritas-cereales-muesli-con-chocolate-hacendado-caja", uso: "Packs 0 elaboración" },
    { nombre: "Barritas cereales y frutos secos Hacendado", ref: "https://tienda.mercadona.es/product/21854/barritas-cereales-frutos-secos-hacendado-caja", uso: "Packs 0 elaboración" },
    { nombre: "Bebida láctea stracciatella +Proteínas Hacendado", ref: "https://tienda.mercadona.es/product/22616/bebida-lactea-stracciatella-proteinas-hacendado-bote", uso: "Packs 0 elaboración" },
    { nombre: "Natillas chocolate +Proteínas Hacendado", ref: "https://tienda.mercadona.es/product/20914/postre-lacteo-chocolate-proteinas-hacendado-pack-4", uso: "Packs 0 elaboración" },
    { nombre: "Gazpacho tradicional Hacendado mini brik", ref: "https://tienda.mercadona.es/product/15609/gazpacho-tradicional-hacendado-mini-brik", uso: "Packs 0 elaboración" },
    { nombre: "Palitos con frutos secos Hacendado", ref: "https://tienda.mercadona.es/product/14603/palitos-pan-con-frutos-secos-paquete", uso: "Packs 0 elaboración" }
  ],
  compra: {
    "Proteína": [
      "Pechuga de pollo: 7 bandejas de 550-600 g aprox.",
      "Carne picada vacuno premium 400 g: 2 paquetes.",
      "Tacos vacuno marinado para guisar: 1 bandeja de 600 g.",
      "Huevos L: 2 paquetes de 12.",
      "Atún natural: 1 pack de 6 latas para cenas (añadir 1 pack extra si se usan packs salados).",
      "Jamón serrano: 400-600 g total para cenas/recetas (ya no es base obligatoria del bloque personal)."
    ],
    "Hidratos": [
      "Arroz vaporizado: 1 paquete de 1 kg.",
      "Macarrón/pasta: 2 paquetes de 1 kg o 4 de 500 g.",
      "Patatas: 5-6 kg.",
      "Pan integral/normal: según consumo de comidas/cenas, aprox. 3-4 barras o equivalente (ya no es base diaria).",
      "Tortitas campestres: 2 paquetes grandes.",
      "Corn Flakes: opcional, 1 caja solo si Natalia los usa o alternativa."
    ],
    "Legumbres y Verduras": [
      "Lenteja cocida 570 g: 3 tarros.",
      "Guisantes congelados: 2 bolsas de 1 kg.",
      "Brócoli congelado: 1 bolsa de 1 kg.",
      "Mix coliflor/brócoli/zanahoria: 1 bolsa de 1 kg.",
      "Verdura para ensaladas/guisos: 3-4 kg (lechuga, tomate, zanahoria, champiñón, judías verdes, etc.).",
      "Tomate triturado 800 g: 3 botes.",
      "Gazpacho: 4-5 botellas de 1 L."
    ],
    "Desayuno, Meriendas y Extras": [
      "Yogur +Proteínas 500 g: opcional, 2-4 botes (ya no es base diaria de Luis).",
      "Yogur +Proteínas natural pack 4x120 g: opcional, 2-4 packs (ya no es base diaria de Papá/Mamá).",
      "Natillas chocolate +Proteínas pack 4x120 g: 1-2 packs (para meriendas dulces cerradas).",
      "Bebida láctea stracciatella +Proteínas 280 g: 4-8 botellas según uso de Papá/Luis/Natalia.",
      "Leche semidesnatada: 6-7 bricks de 1 L (para café con leche diario y batidos).",
      "Fruta variada: 35-45 piezas/semana.",
      "Frutos rojos congelados: 1-2 bolsas.",
      "Frutos secos naturales/nueces: no comprar como base (mejor barritas o pack cerrado para evitar picoteo).",
      "Chocolate 85%: opcional (ya no es base diaria).",
      "Tortitas de maíz con chocolate: 1-2 paquetes (packs dulces).",
      "Barritas muesli chocolate: 1 caja.",
      "Barritas cereales y frutos secos: 1 caja.",
      "Gazpacho tradicional mini briks pack 3x330 ml: 2-4 packs.",
      "Palitos con frutos secos: 1 paquete (Natalia / snack ocasional).",
      "AOVE: 1 botella.",
      "Ketchup zero / mostaza / especias: según necesidad."
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
      { dia: 1, kcal: 2148, p: 171, h: 269, g: 42 },
      { dia: 2, kcal: 2327, p: 177, h: 259, g: 62 },
      { dia: 3, kcal: 2265, p: 155, h: 281, g: 59 },
      { dia: 4, kcal: 2109, p: 171, h: 298, g: 23 },
      { dia: 5, kcal: 2294, p: 170, h: 311, g: 40 },
      { dia: 6, kcal: 2031, p: 176, h: 256, g: 33 }
    ],
    padre_batido: [
      { dia: 1, kcal: 2378, p: 203, h: 283, g: 48 },
      { dia: 2, kcal: 2557, p: 209, h: 273, g: 68 },
      { dia: 3, kcal: 2495, p: 187, h: 295, g: 65 },
      { dia: 4, kcal: 2339, p: 203, h: 312, g: 29 },
      { dia: 5, kcal: 2524, p: 202, h: 325, g: 46 },
      { dia: 6, kcal: 2261, p: 208, h: 269, g: 39 }
    ],
    madre: [
      { dia: 1, kcal: 1689, p: 141, h: 184, g: 43 },
      { dia: 2, kcal: 1761, p: 138, h: 169, g: 57 },
      { dia: 3, kcal: 1712, p: 118, h: 193, g: 53 },
      { dia: 4, kcal: 1567, p: 127, h: 203, g: 26 },
      { dia: 5, kcal: 1739, p: 134, h: 216, g: 38 },
      { dia: 6, kcal: 1559, p: 143, h: 165, g: 36 }
    ],
    luis: [
      { dia: 1, kcal: 2060, p: 174, h: 236, g: 46 },
      { dia: 2, kcal: 2214, p: 179, h: 223, g: 66 },
      { dia: 3, kcal: 2156, p: 156, h: 247, g: 62 },
      { dia: 4, kcal: 2009, p: 172, h: 266, g: 27 },
      { dia: 5, kcal: 2161, p: 170, h: 271, g: 43 },
      { dia: 6, kcal: 1918, p: 179, h: 218, g: 36 }
    ],
    luis_batido: [
      { dia: 1, kcal: 2290, p: 206, h: 249, g: 52 },
      { dia: 2, kcal: 2444, p: 210, h: 236, g: 72 },
      { dia: 3, kcal: 2386, p: 187, h: 261, g: 68 },
      { dia: 4, kcal: 2239, p: 204, h: 279, g: 33 },
      { dia: 5, kcal: 2391, p: 202, h: 285, g: 49 },
      { dia: 6, kcal: 2148, p: 211, h: 231, g: 42 }
    ],
    natalia: [
      { dia: 1, kcal: 1700, p: 114, h: 234, g: 34 },
      { dia: 2, kcal: 1779, p: 115, h: 221, g: 47 },
      { dia: 3, kcal: 1739, p: 96, h: 245, g: 43 },
      { dia: 4, kcal: 1599, p: 103, h: 255, g: 17 },
      { dia: 5, kcal: 1648, p: 95, h: 257, g: 29 },
      { dia: 6, kcal: 1557, p: 114, h: 218, g: 25 }
    ],
    promedios_v1: {
      padre_sin_batido: { kcal: 2196, p: 170, h: 279, g: 43 },
      padre_con_2_batidos: { kcal: 2272, p: 181, h: 284, g: 45 },
      madre: { kcal: 1671, p: 134, h: 188, g: 42 },
      luis_sin_batido: { kcal: 2086, p: 172, h: 243, g: 47 },
      luis_con_3_batidos: { kcal: 2201, p: 187, h: 250, g: 50 },
      natalia_orientativo: { kcal: 1671, p: 106, h: 238, g: 32 }
    }
  }
};

const MEMBER_TIMELINES = {
  padre: [
    { fase: "Desayuno", icono: "☕", titulo: "Café con leche", desc: "150 ml de leche semidesnatada" },
    { fase: "Almuerzo", icono: "🥪", titulo: "Pack Salado Crujiente", desc: "1 pack de tortitas campestres + 1 lata de atún al natural + 1 mini brik de gazpacho" },
    { fase: "Comida Familiar", icono: "🍽️", titulo: "En Familia", desc: "Comida común (ver pestaña Menú). Tu ración: ~27%" },
    { fase: "Merienda", icono: "🍌", titulo: "Pack Dulce Activo + Fruta", desc: "1 botella bebida stracciatella +Proteínas + 1 pack tortitas chocolate + 1 fruta" },
    { fase: "Cena Familiar", icono: "🌙", titulo: "En Familia", desc: "Cena común (ver pestaña Menú). Tu ración: ~27-30% + extras según día" },
    { fase: "Post-Entreno", icono: "🥤", titulo: "Módulo Actividad (Entreno)", desc: "Batido de proteína (leche + scoop + creatina) en días de gimnasio o carrera larga" }
  ],
  madre: [
    { fase: "Desayuno", icono: "☕", titulo: "Café con leche", desc: "150 ml de leche semidesnatada" },
    { fase: "Media mañana", icono: "🍵", titulo: "Infusión + Fruta", desc: "Infusión al gusto + 1 pieza de fruta (hábito diario)" },
    { fase: "Comida Familiar", icono: "🍽️", titulo: "En Familia", desc: "Comida común (ver pestaña Menú). Tu ración: ~22-25%" },
    { fase: "Merienda / Snacks", icono: "🍫", titulo: "Pack Dulce Controlado", desc: "1 natillas chocolate +Proteínas + 1 barrita de cereales y frutos secos" },
    { fase: "Cena Familiar", icono: "🌙", titulo: "En Familia", desc: "Cena común (ver pestaña Menú). Tu ración: ~20-29%" }
  ],
  luis: [
    { fase: "Desayuno", icono: "☕", titulo: "Café con leche", desc: "150 ml de leche semidesnatada" },
    { fase: "Almuerzo", icono: "🥪", titulo: "Pack Salado Crujiente", desc: "1 pack de tortitas campestres + 1 lata de atún al natural + 1 mini brik de gazpacho" },
    { fase: "Comida Familiar", icono: "🍽️", titulo: "En Familia", desc: "Comida común (ver pestaña Menú). Tu ración: ~26-33%" },
    { fase: "Merienda / Pre-Gym", icono: "🍌", titulo: "Pack Dulce Potente", desc: "1 botella bebida stracciatella +Proteínas + 1 pack tortitas chocolate + 1 plátano" },
    { fase: "Cena Familiar", icono: "🌙", titulo: "En Familia", desc: "Cena común (ver pestaña Menú). Tu ración: ~26-30% + extras según día" },
    { fase: "Post-Gym", icono: "🥤", titulo: "Módulo Actividad (Entreno)", desc: "Batido de proteína (leche + scoop + creatina) en días de gimnasio" }
  ],
  natalia: [
    { fase: "Desayuno", icono: "🥣", titulo: "Bloque Flexible", desc: "1 vaso de leche semidesnatada + Corn Flakes + fruta o bocadillo de jamón" },
    { fase: "Comida Familiar", icono: "🍽️", titulo: "En Familia", desc: "Comida común (ver pestaña Menú). Tu ración: ~20%" },
    { fase: "Merienda / Snacks", icono: "🥨", titulo: "Pack Dulce o Salado", desc: "Elegir 1-2 packs (palitos con frutos secos, barritas, fruta o yogures) según hambre" },
    { fase: "Cena Familiar", icono: "🌙", titulo: "En Familia", desc: "Cena común (ver pestaña Menú). Tu ración: ~17-23%" },
    { fase: "Baloncesto", icono: "🏀", titulo: "Extra Entrenamiento", desc: "1 plátano + barrita chocolate + tortitas campestres en días de baloncesto" }
  ]
};

let currentTab = 'perfiles';
let currentUser = localStorage.getItem('dieta_current_user') || 'global';
let activeMember = (currentUser === 'global') ? 'padre' : currentUser;
let activeDay = 1;
let menuViewMode = (currentUser === 'global') ? 'lote' : 'individual'; // 'lote' o 'individual'
let batchMultiplier = 1; // Multiplicador de raciones para cocina por lotes
let selectedActivityType = null; // Tipo de actividad seleccionado (sobrescribe macros de perfil)

// Aplicar clase individual-mode al body según corresponda
if (currentUser !== 'global') {
  document.body.classList.add('individual-mode');
} else {
  document.body.classList.remove('individual-mode');
}

// CLOUD SYNC CONFIG (local proxy → jsonblob.com, zero CORS issues)
const SYNC_API_URL = '/api/sync';
const SYNC_KEYS = ['dieta_shopping_state', 'dieta_cooked_state', 'dieta_postponed_state', 'dieta_custom_shopping_items'];
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
  initUserSelector();

  // Descargar estado de la nube antes de renderizar las secciones que dependen de localStorage
  syncPull().then(() => {
    initProfiles();
    initMenu();
    initShoppingList();
    initShoppingListActions();
    initProducts();
    initMercadonaModal();
    initUniversalCalculator();
    
    // Renderizar vistas iniciales
    renderProfileDetails();
    renderMenuDay();
  });
});

function initUserSelector() {
  const select = document.getElementById('header-user-select');
  if (select) {
    select.value = currentUser;
    select.addEventListener('change', (e) => {
      currentUser = e.target.value;
      localStorage.setItem('dieta_current_user', currentUser);
      activeMember = (currentUser === 'global') ? 'padre' : currentUser;
      menuViewMode = (currentUser === 'global') ? 'lote' : 'individual';
      
      const toggleInd = document.getElementById('toggle-mode-individual');
      const toggleLote = document.getElementById('toggle-mode-lote');
      if (toggleInd && toggleLote) {
        if (menuViewMode === 'individual') {
          toggleInd.classList.add('active');
          toggleLote.classList.remove('active');
        } else {
          toggleLote.classList.add('active');
          toggleInd.classList.remove('active');
        }
      }
      
      if (currentUser === 'global') {
        document.body.classList.remove('individual-mode');
      } else {
        document.body.classList.add('individual-mode');
      }
      
      initDashboard();
      initProfiles();
      renderProfileDetails();
      renderMenuDay();
    });
  }

  const savedUser = localStorage.getItem('dieta_current_user');
  const modal = document.getElementById('user-welcome-modal');
  if (!savedUser && modal) {
    modal.style.display = 'flex';
    
    const cards = modal.querySelectorAll('.welcome-user-card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const selectedUser = card.getAttribute('data-user');
        currentUser = selectedUser;
        localStorage.setItem('dieta_current_user', currentUser);
        
        if (select) select.value = currentUser;
        activeMember = (currentUser === 'global') ? 'padre' : currentUser;
        menuViewMode = (currentUser === 'global') ? 'lote' : 'individual';
        
        const toggleInd = document.getElementById('toggle-mode-individual');
        const toggleLote = document.getElementById('toggle-mode-lote');
        if (toggleInd && toggleLote) {
          if (menuViewMode === 'individual') {
            toggleInd.classList.add('active');
            toggleLote.classList.remove('active');
          } else {
            toggleLote.classList.add('active');
            toggleInd.classList.remove('active');
          }
        }
        
        if (currentUser === 'global') {
          document.body.classList.remove('individual-mode');
        } else {
          document.body.classList.add('individual-mode');
        }
        
        modal.style.display = 'none';
        
        initDashboard();
        initProfiles();
        renderProfileDetails();
        renderMenuDay();
      });
    });
  }
}

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
    const isCurrent = currentUser === member.id;
    card.className = `summary-card ${member.id} ${isCurrent ? 'active-user-card' : ''}`;
    
    const initial = member.nombre.charAt(0);
    
    card.innerHTML = `
      <div class="card-header-flex">
        <div>
          <h3 class="card-name">${member.nombre} ${isCurrent ? '<span class="user-badge-you">Tú</span>' : ''}</h3>
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
      selectedActivityType = null;
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
    const isCurrent = currentUser === member.id;
    btn.innerHTML = `<span class="dot"></span> ${member.nombre} ${isCurrent ? '<span class="user-badge-you" style="font-size: 0.6rem; padding: 0.1rem 0.3rem; margin-left: 0.35rem; border-radius: 3px;">Tú</span>' : ''}`;
    
    btn.addEventListener('click', () => {
      activeMember = member.id;
      selectedActivityType = null;
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
  
  // Macros Sidebar & Override Badge Logic
  const macrosList = document.getElementById('profile-macros-list');
  
  let activeMacros = member.macros;
  let activeMacrosNum = member.macros_num;
  let overrideBadgeHTML = '';

  if (selectedActivityType && member.modulos_actividad) {
    const actModule = member.modulos_actividad.find(m => m.tipo === selectedActivityType);
    if (actModule && actModule.macros && actModule.macros_num) {
      activeMacros = actModule.macros;
      activeMacrosNum = actModule.macros_num;
      overrideBadgeHTML = `
        <div class="sidebar-override-badge">
          <span>⚡ ${actModule.titulo}</span>
          <button class="sidebar-override-close" id="clear-activity-override" title="Volver a media semanal">&times;</button>
        </div>
      `;
    }
  }

  // Calculate SVG offsets
  const kcalVal = activeMacrosNum.kcal || 2000;
  const pVal = activeMacrosNum.p || 100;
  const hVal = activeMacrosNum.h || 200;
  const gVal = activeMacrosNum.g || 50;
  
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
  
  const kcalText = member.kcal === 'Flexible' && !selectedActivityType ? 'Flex' : kcalVal;

  // Build activity modules HTML if the member has them
  let activityHTML = '';
  if (member.modulos_actividad) {
    activityHTML = `
      <details class="clean-details" style="margin-top: 1.5rem;" ${currentUser === 'global' ? 'open' : ''}>
        <summary style="font-size: 1.1rem; font-weight: 600; cursor: pointer; color: var(--primary); outline: none; margin-bottom: 0.5rem; font-family: 'Outfit', sans-serif;">
          ⚡ Tipo de Día — Módulos de Actividad
        </summary>
        <div class="details-content" style="padding-top: 0.5rem;">
          <p class="activity-intro" style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1rem;">
            La comida y la cena familiares no cambian. Haz clic en un tipo de día para ver qué módulo o comida extra añadir a tu plan diario.
          </p>
          <div class="activity-cards" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem;">
            ${member.modulos_actividad.map(m => `
              <div class="activity-card activity-${m.tipo} ${selectedActivityType === m.tipo ? 'active' : ''}" data-type="${m.tipo}" style="cursor: pointer; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1rem; background: var(--bg-card); transition: all 0.2s;">
                <div class="activity-card-header" style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
                  <span class="activity-icon" style="font-size: 1.25rem;">${m.icono}</span>
                  <div class="activity-card-title">
                    <h5 style="margin: 0; font-size: 0.95rem; font-weight: 600;">${m.titulo}</h5>
                  </div>
                </div>
                <div class="activity-card-body" style="font-size: 0.85rem; display: flex; flex-direction: column; gap: 0.5rem; color: var(--text-secondary);">
                  <div class="activity-module-row">
                    <strong style="color: var(--text-primary);">${m.batido ? '🥤 Módulo' : '📋 Plan'}:</strong>
                    <span>${m.modulo}</span>
                  </div>
                  ${m.extra_opcional ? `<div class="activity-module-row"><strong>➕ Opcional:</strong> <span>${m.extra_opcional}</span></div>` : ''}
                  ${m.extras_hidrato ? `<div class="activity-module-row"><strong>🍞 Extra hidrato:</strong> <span>${m.extras_hidrato}</span></div>` : ''}
                  ${m.nota ? `<div class="activity-nota" style="font-style: italic; color: var(--text-muted); margin-top: 0.25rem;">💡 ${m.nota}</div>` : ''}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </details>
    `;
  }
  
  // Build packs HTML if the member has them
  let packsHTML = '';
  if (member.packs_cero_elaboracion) {
    packsHTML = `
      <details class="clean-details" style="margin-top: 1.5rem;" ${currentUser === 'global' ? 'open' : ''}>
        <summary style="font-size: 1.1rem; font-weight: 600; cursor: pointer; color: var(--primary); outline: none; margin-bottom: 0.5rem; font-family: 'Outfit', sans-serif;">
          📦 Packs 0 Elaboración Hacendado
        </summary>
        <div class="details-content" style="padding-top: 0.5rem;">
          <p class="activity-intro" style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1rem;">
            Opciones rápidas de Mercadona con unidades completas (sin pesar cereales, medias raciones ni picoteo libre) para elegir dentro del bloque personal diario.
          </p>
          <div class="packs-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
            ${member.packs_cero_elaboracion.map(p => `
              <div class="pack-card" style="border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1rem; background: var(--bg-card);">
                <div class="pack-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                  <h5 style="margin: 0; font-size: 0.95rem; font-weight: 600; color: var(--text-primary);">${p.nombre}</h5>
                  <span class="pack-momento" style="font-size: 0.75rem; color: var(--primary); font-weight: 500; background: rgba(14, 165, 233, 0.08); padding: 0.15rem 0.4rem; border-radius: var(--radius-sm);">${p.momento}</span>
                </div>
                <div class="pack-products" style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.5rem;">🛒 ${p.productos}</div>
                <div class="pack-comment" style="font-size: 0.8rem; color: var(--text-muted); font-style: italic; border-top: 1px solid var(--border-color); padding-top: 0.5rem; margin-top: 0.5rem;">💡 ${p.comentario}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </details>
    `;
  }
  
  const timelineData = MEMBER_TIMELINES[activeMember] || [];
  const timelineHTML = `
    <div class="meal-block" style="border: none; padding: 0; background: transparent;">
      <h4>📅 Tu Línea de Tiempo del Día</h4>
      <div class="timeline-container">
        <div class="timeline-line"></div>
        ${timelineData.map(item => `
          <div class="timeline-item">
            <div class="timeline-badge">${item.icono}</div>
            <div class="timeline-panel">
              <div class="timeline-header-flex">
                <span class="timeline-fase">${item.fase}</span>
                <span class="timeline-title">${item.titulo}</span>
              </div>
              <p class="timeline-desc">${item.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Build macros details accordion if individual mode
  let macrosDetailsHTML = '';
  if (currentUser !== 'global') {
    macrosDetailsHTML = `
      <details class="clean-details" style="margin-top: 1.5rem;" id="profile-macros-details">
        <summary style="font-size: 1.1rem; font-weight: 600; cursor: pointer; color: var(--primary); outline: none; margin-bottom: 0.5rem; font-family: 'Outfit', sans-serif;">
          📊 Objetivos Nutricionales y Distribución
        </summary>
        <div class="details-content" style="padding-top: 0.5rem;" id="profile-macros-details-content">
          ${overrideBadgeHTML}
          <div class="macros-chart-container" style="display: flex; justify-content: center; margin-bottom: 1.5rem;">
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
            <!-- Renderizado dinámico de barras -->
          </div>
        </div>
      </details>
    `;
  }

  // Comidas Fijas
  const mealsContainer = document.getElementById('profile-meals-container');
  mealsContainer.innerHTML = `
    ${timelineHTML}
    ${activityHTML}
    ${packsHTML}
    ${macrosDetailsHTML}
  `;
  
  // Render sidebar or details content macros
  if (currentUser === 'global') {
    macrosList.innerHTML = `
      ${overrideBadgeHTML}
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
  } else {
    macrosList.innerHTML = ''; // Limpiar el de la barra lateral en modo individual
  }

  const activeContainer = (currentUser === 'global')
    ? macrosList
    : document.getElementById('profile-macros-details-content');

  if (activeContainer) {
    const metersList = activeContainer.querySelector('.macros-meters-list');
    if (metersList) {
      metersList.innerHTML = '';
      const labelMap = { kcal: 'Calorías (kcal)', p: 'Proteína (g)', h: 'Carbohidratos (g)', g: 'Grasas (g)' };
      
      Object.keys(activeMacros).forEach(key => {
        const valText = activeMacros[key];
        const valNum = activeMacrosNum[key] || 0;
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
    }

    // Animate SVG rings
    setTimeout(() => {
      const circleH = activeContainer.querySelector('.fill-circle.hc');
      const circleP = activeContainer.querySelector('.fill-circle.prot');
      const circleG = activeContainer.querySelector('.fill-circle.fat');
      if (circleH) circleH.style.strokeDashoffset = offsetH;
      if (circleP) circleP.style.strokeDashoffset = offsetP;
      if (circleG) circleG.style.strokeDashoffset = offsetG;
      
      activeContainer.querySelectorAll('.macro-meter-bar').forEach(bar => {
        const pct = bar.getAttribute('data-pct');
        if (pct) bar.style.width = `${pct}%`;
      });
    }, 50);
  }

  // Attach click listeners to activity cards
  mealsContainer.querySelectorAll('.activity-card').forEach(card => {
    card.addEventListener('click', () => {
      const type = card.getAttribute('data-type');
      if (selectedActivityType === type) {
        selectedActivityType = null;
      } else {
        selectedActivityType = type;
      }
      renderProfileDetails();
    });
  });

  // Clear override button listener (works for both sidebar or details container)
  const clearOverrideBtn = document.getElementById('clear-activity-override');
  if (clearOverrideBtn) {
    clearOverrideBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      selectedActivityType = null;
      renderProfileDetails();
    });
  }
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
  
  // Extraer día y tipo de comida de la etiqueta (ej: "Día 3 • Comida" o "Comida")
  let day = activeDay;
  const dayMatch = label.match(/Día\s+(\d+)/i);
  if (dayMatch) {
    day = parseInt(dayMatch[1]);
  }
  const mealType = label.toLowerCase().includes('comida') ? 'comida' : 'cena';
  
  // Claves de estado de plato cocinado
  const savedCookedState = JSON.parse(localStorage.getItem('dieta_cooked_state')) || {};
  const globalCookedKey = `cooked_global_day_${day}_${mealType}`;
  const userCookedKey = currentUser !== 'global' ? `cooked_${currentUser}_day_${day}_${mealType}` : '';
  const isCooked = !!savedCookedState[globalCookedKey] || (userCookedKey && !!savedCookedState[userCookedKey]);
  
  const activeCookedKey = currentUser === 'global' ? globalCookedKey : `cooked_${currentUser}_day_${day}_${mealType}`;
  
  if (isCooked) {
    cardEl.classList.add('cooked-done-card');
  } else {
    cardEl.classList.remove('cooked-done-card');
  }
  
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
    <div style="display:flex; align-items:center; gap:0.75rem;">
      <input type="checkbox" class="meal-cooked-checkbox" data-key="${activeCookedKey}" ${isCooked ? 'checked' : ''} style="width: 20px; height: 20px; accent-color: var(--success); cursor: pointer; flex-shrink: 0;" title="Marcar como hecho">
      <div>
        <span style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-secondary);">${label}</span>
        <h3 style="margin: 0.15rem 0 0 0; font-size: 1.2rem; font-weight: 700; font-family: 'Outfit', sans-serif;">${mealData.nombre}</h3>
      </div>
    </div>
    ${buttonHtml}
  `;
  cardEl.appendChild(header);

  // Escuchador del checkbox de cocinado
  const checkbox = header.querySelector('.meal-cooked-checkbox');
  if (checkbox) {
    checkbox.addEventListener('change', () => {
      const key = checkbox.getAttribute('data-key');
      if (checkbox.checked) {
        savedCookedState[key] = true;
        cardEl.classList.add('cooked-done-card');
      } else {
        delete savedCookedState[key];
        delete savedCookedState[globalCookedKey];
        if (userCookedKey) delete savedCookedState[userCookedKey];
        cardEl.classList.remove('cooked-done-card');
      }
      localStorage.setItem('dieta_cooked_state', JSON.stringify(savedCookedState));
      syncPush();
    });
  }

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
    if (currentUser !== 'global') {
      // Vista individual personalizada - solo muestra la porción del usuario actual
      const mId = currentUser;
      const member = NUTRITION_DATA.miembros[mId];
      const memberPortion = mealData.individual[mId];
      
      if (memberPortion) {
        const portionContainer = document.createElement('div');
        portionContainer.className = 'personal-portion-container';
        
        let extraText = '';
        if (mealType === 'cena' && mealData.lote.extras && mealData.lote.extras[mId]) {
          extraText = `
            <div style="margin-top: 0.75rem; padding: 0.5rem 0.75rem; background: rgba(245, 158, 11, 0.1); border-left: 3px solid var(--warning); border-radius: var(--radius-sm); font-size: 0.85rem; color: var(--text-primary);">
              <strong style="color: var(--warning);">⚡ Tu Extra de Cena:</strong> ${mealData.lote.extras[mId]}
            </div>
          `;
        }
        
        const ingredientsHtml = Object.keys(memberPortion).map(k => {
          const val = memberPortion[k] || '-';
          return `
            <div style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 0.5rem 0.75rem; border-radius: var(--radius-sm); display: flex; justify-content: space-between; align-items: center; font-size: 0.9rem;">
              <span style="color: var(--text-secondary); font-weight: 500;">${k}</span>
              <strong style="color: var(--primary); font-size: 0.95rem;">${val}</strong>
            </div>
          `;
        }).join('');
        
        portionContainer.innerHTML = `
          <h4 style="font-size: 0.9rem; font-weight: 600; color: var(--primary); text-transform: uppercase; margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.25rem;">
            🍽️ Tu Porción (${member.nombre})
          </h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 0.5rem;">
            ${ingredientsHtml}
          </div>
          ${extraText}
        `;
        cardEl.appendChild(portionContainer);
      }
    } else {
      // Vista individual global (Todos) - Tabla original
      const table = document.createElement('table');
      table.className = 'portions-table';
      
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
        const isCurrent = currentUser === mId;
        
        const tr = document.createElement('tr');
        tr.className = `${mId} ${isCurrent ? 'active-user-row' : ''}`;
        
        let tds = ingredKeys.map(k => {
          let val = memberPortion[k] || '-';
          return `<td class="qty-highlight" data-label="${k}">${val}</td>`;
        }).join('');
        
        let extraText = '';
        if (mealType === 'cena' && mealData.lote.extras && mealData.lote.extras[mId]) {
          extraText = `<br><span style="font-size:0.75rem; color:var(--warning); font-weight:normal;">+ Extra: ${mealData.lote.extras[mId]}</span>`;
        }
        
        tr.innerHTML = `
          <td class="name-cell"><span class="dot"></span> ${member.nombre} ${isCurrent ? '<span class="user-badge-you">Tú</span>' : ''} ${extraText}</td>
          ${tds}
        `;
        tbody.appendChild(tr);
      });
      
      cardEl.appendChild(table);
    }
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
      const isCurrent = currentUser === mId;
      return `
        <div class="reparto-item ${isCurrent ? 'active-user-reparto' : ''}">
          <span class="reparto-name">${member.nombre} ${isCurrent ? '<span class="user-badge-you">Tú</span>' : ''} <span class="reparto-pct">${pct}%</span></span>
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
        const isCurrent = currentUser === mId;
        return `<div class="${isCurrent ? 'active-user-extra-row' : ''}"><strong>${member.nombre} ${isCurrent ? '<span class="user-badge-you">Tú</span>' : ''}:</strong> ${scaledExtra}</div>`;
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
        
        // Si el usuario es individual, mostrar su resultado gigante al principio, y la lista abajo pequeña
        if (currentUser !== 'global') {
          const mId = currentUser;
          const pct = mealData.lote.reparto[mId];
          const portionWeight = ((totalWeight * pct) / 100).toFixed(1);
          
          const personalHeader = document.createElement('div');
          personalHeader.style.cssText = 'grid-column: 1 / -1; margin-bottom: 0.75rem; padding: 0.75rem; background: rgba(14, 165, 233, 0.08); border: 1px solid var(--primary); border-radius: var(--radius-sm); text-align: center;';
          personalHeader.innerHTML = `
            <div style="font-size: 0.85rem; color: var(--text-secondary); font-weight: 500;">⚖️ Tu Ración Calculada:</div>
            <div style="font-size: 1.5rem; font-weight: 800; color: var(--primary); margin-top: 0.25rem;">${portionWeight} g <span style="font-size: 0.9rem; font-weight: normal; color: var(--text-muted);">(${pct}%)</span></div>
          `;
          calcResults.appendChild(personalHeader);
        }
        
        Object.keys(mealData.lote.reparto).forEach(mId => {
          const member = NUTRITION_DATA.miembros[mId];
          const pct = mealData.lote.reparto[mId];
          const portionWeight = ((totalWeight * pct) / 100).toFixed(1);
          const isCurrent = currentUser === mId;
          
          const box = document.createElement('div');
          box.className = `calc-result-box ${isCurrent ? 'active-user-calc-result' : ''}`;
          
          // Si es usuario individual, hacer el resto de cajas más discretas
          if (currentUser !== 'global' && !isCurrent) {
            box.style.opacity = '0.6';
          }
          
          box.innerHTML = `
            <span class="calc-result-name">${member.nombre} ${isCurrent ? '<span class="user-badge-you">Tú</span>' : ''}</span>
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

// LISTA DE LA COMPRA
const SUPERMARKET_ORDER = ['Legumbres y Verduras', 'Proteína', 'Desayuno, Meriendas y Extras', 'Hidratos'];

function initShoppingList() {
  const container = document.getElementById('shopping-list-container');
  if (!container) return;
  
  container.innerHTML = '';
  
  // Configurar estado visual de "Ocultar Tachados" al re-renderizar
  const isHidden = localStorage.getItem('dieta_hide_checked') === 'true';
  if (isHidden) {
    container.classList.add('hide-checked-active');
  } else {
    container.classList.remove('hide-checked-active');
  }

  // Cargar estado guardado de localStorage
  const savedState = JSON.parse(localStorage.getItem('dieta_shopping_state')) || {};
  
  // Ordenar categorías según el pasillo de Mercadona
  const sortedCategories = Object.keys(NUTRITION_DATA.compra).sort((a, b) => {
    const indexA = SUPERMARKET_ORDER.indexOf(a);
    const indexB = SUPERMARKET_ORDER.indexOf(b);
    return (indexA !== -1 ? indexA : 99) - (indexB !== -1 ? indexB : 99);
  });

  sortedCategories.forEach(cat => {
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
  
  // Card de Extras del Hogar / Personalizados
  const customCard = document.createElement('div');
  customCard.className = 'shopping-card';
  customCard.id = 'shopping-card-custom';
  
  const customH3 = document.createElement('h3');
  customH3.innerHTML = `<span>🏠</span> Extras / Varios`;
  customCard.appendChild(customH3);
  
  const customUl = document.createElement('div');
  customUl.className = 'shopping-list';
  
  const customItems = JSON.parse(localStorage.getItem('dieta_custom_shopping_items')) || [];
  
  customItems.forEach((item, index) => {
    const itemEl = document.createElement('div');
    itemEl.className = `shopping-item ${item.checked ? 'checked' : ''}`;
    itemEl.innerHTML = `
      <input type="checkbox" class="shopping-item-check" data-index="${index}" ${item.checked ? 'checked' : ''}>
      <span class="shopping-item-text" style="cursor: pointer; flex-grow: 1;">${item.text}</span>
      <button class="custom-item-delete-btn" data-index="${index}" title="Eliminar artículo">&times;</button>
    `;
    
    const checkbox = itemEl.querySelector('input.shopping-item-check');
    checkbox.addEventListener('change', () => {
      item.checked = checkbox.checked;
      if (item.checked) {
        itemEl.classList.add('checked');
      } else {
        itemEl.classList.remove('checked');
      }
      localStorage.setItem('dieta_custom_shopping_items', JSON.stringify(customItems));
      syncPush();
      updateCategoryStatus(customCard);
    });
    
    const textSpan = itemEl.querySelector('.shopping-item-text');
    textSpan.addEventListener('click', () => {
      checkbox.checked = !checkbox.checked;
      checkbox.dispatchEvent(new Event('change'));
    });
    
    const deleteBtn = itemEl.querySelector('.custom-item-delete-btn');
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      customItems.splice(index, 1);
      localStorage.setItem('dieta_custom_shopping_items', JSON.stringify(customItems));
      syncPush();
      initShoppingList();
    });
    
    customUl.appendChild(itemEl);
  });
  
  // Formulario para añadir extras
  const addForm = document.createElement('div');
  addForm.className = 'add-custom-item-container';
  addForm.innerHTML = `
    <input type="text" placeholder="Añadir artículo extra..." class="add-custom-item-input" id="add-custom-item-input">
    <button class="add-custom-item-btn" id="add-custom-item-btn">Añadir</button>
  `;
  
  const addInput = addForm.querySelector('#add-custom-item-input');
  const addBtn = addForm.querySelector('#add-custom-item-btn');
  
  const addAction = () => {
    const text = addInput.value.trim();
    if (!text) return;
    customItems.push({ text: text, checked: false });
    localStorage.setItem('dieta_custom_shopping_items', JSON.stringify(customItems));
    syncPush();
    initShoppingList();
  };
  
  addBtn.addEventListener('click', addAction);
  addInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addAction();
  });
  
  customCard.appendChild(customUl);
  customCard.appendChild(addForm);
  container.appendChild(customCard);
  updateCategoryStatus(customCard);
}

let isShoppingActionsInit = false;

function initShoppingListActions() {
  if (isShoppingActionsInit) return;
  isShoppingActionsInit = true;
  
  // Botón reset
  const resetBtn = document.getElementById('reset-shopping-list');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (!confirm('¿Seguro que quieres borrar todo lo tachado de la lista?')) return;
      localStorage.removeItem('dieta_shopping_state');
      
      // También resetear custom items
      const customItems = JSON.parse(localStorage.getItem('dieta_custom_shopping_items')) || [];
      customItems.forEach(item => item.checked = false);
      localStorage.setItem('dieta_custom_shopping_items', JSON.stringify(customItems));
      
      syncPush();
      initShoppingList();
    });
  }

  // Botón Ocultar Tachados
  const hideCheckedBtn = document.getElementById('toggle-hide-checked');
  const container = document.getElementById('shopping-list-container');
  if (hideCheckedBtn && container) {
    // Configurar estado inicial del botón
    const isHidden = localStorage.getItem('dieta_hide_checked') === 'true';
    if (isHidden) {
      hideCheckedBtn.classList.add('active');
      hideCheckedBtn.innerText = '👁️ Mostrar Todo';
    } else {
      hideCheckedBtn.classList.remove('active');
      hideCheckedBtn.innerText = '👁️ Ocultar Tachados';
    }
    
    hideCheckedBtn.addEventListener('click', () => {
      const currentlyHidden = container.classList.contains('hide-checked-active');
      if (currentlyHidden) {
        container.classList.remove('hide-checked-active');
        hideCheckedBtn.classList.remove('active');
        hideCheckedBtn.innerText = '👁️ Ocultar Tachados';
        localStorage.setItem('dieta_hide_checked', 'false');
      } else {
        container.classList.add('hide-checked-active');
        hideCheckedBtn.classList.add('active');
        hideCheckedBtn.innerText = '👁️ Mostrar Todo';
        localStorage.setItem('dieta_hide_checked', 'true');
      }
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
  
  // Categorías estándar
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
  
  // Artículos personalizados (extras)
  const customItems = JSON.parse(localStorage.getItem('dieta_custom_shopping_items')) || [];
  const customPending = [];
  customItems.forEach(item => {
    if (!item.checked) {
      customPending.push(`• ${item.text}`);
      count++;
    }
  });
  
  if (customPending.length > 0) {
    pendingText += `*EXTRAS Y VARIOS:*\n${customPending.join('\n')}\n\n`;
  }
  
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

// ─── CALCULADORA UNIVERSAL DE RACIONES ───────────
function initUniversalCalculator() {
  const modal = document.getElementById('calc-universal-modal');
  const openBtn = document.getElementById('open-calc-universal');
  const closeBtn1 = document.getElementById('close-calc-universal');
  const closeBtn2 = document.getElementById('close-calc-universal-btn');
  
  if (!modal) return;
  
  const openModal = () => {
    modal.style.display = 'flex';
    
    // Cargar tara guardada
    const savedCustomTara = localStorage.getItem('dieta_calc_univ_custom_tara');
    if (savedCustomTara) {
      document.getElementById('calc-univ-custom-tara').value = savedCustomTara;
    }
    
    // Cargar reparto personalizado si existe
    const savedCustomReparto = JSON.parse(localStorage.getItem('dieta_calc_univ_custom_reparto'));
    if (savedCustomReparto) {
      document.getElementById('calc-univ-pct-padre').value = savedCustomReparto.padre || 30;
      document.getElementById('calc-univ-pct-madre').value = savedCustomReparto.madre || 20;
      document.getElementById('calc-univ-pct-luis').value = savedCustomReparto.luis || 25;
      document.getElementById('calc-univ-pct-natalia').value = savedCustomReparto.natalia || 25;
    }
    
    // Enfocar el input de peso
    const weightInput = document.getElementById('calc-univ-weight');
    if (weightInput) {
      weightInput.value = '';
      weightInput.focus();
    }
  };
  
  const closeModal = () => {
    modal.style.display = 'none';
  };
  
  if (openBtn) openBtn.addEventListener('click', openModal);
  if (closeBtn1) closeBtn1.addEventListener('click', closeModal);
  if (closeBtn2) closeBtn2.addEventListener('click', closeModal);
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  
  // Mostrar/ocultar campos condicionales
  const taraSelect = document.getElementById('calc-univ-tara-select');
  const customTaraGroup = document.getElementById('calc-univ-custom-tara-group');
  if (taraSelect && customTaraGroup) {
    taraSelect.addEventListener('change', () => {
      customTaraGroup.style.display = taraSelect.value === 'custom' ? 'flex' : 'none';
    });
  }
  
  const repartoSelect = document.getElementById('calc-univ-reparto-select');
  const customRepartoGroup = document.getElementById('calc-univ-custom-reparto-group');
  if (repartoSelect && customRepartoGroup) {
    repartoSelect.addEventListener('change', () => {
      customRepartoGroup.style.display = repartoSelect.value === 'custom' ? 'block' : 'none';
    });
  }
  
  // Realizar el cálculo
  const calcBtn = document.getElementById('calc-univ-btn-action');
  const resultsContainer = document.getElementById('calc-univ-results');
  
  if (calcBtn && resultsContainer) {
    const runCalculation = () => {
      const totalWeightInput = parseFloat(document.getElementById('calc-univ-weight').value);
      if (isNaN(totalWeightInput) || totalWeightInput <= 0) {
        alert('Por favor, introduce un peso cocinado válido mayor que 0.');
        return;
      }
      
      // Determinar tara
      let taraValue = 0;
      if (taraSelect.value === 'custom') {
        const customTaraVal = parseFloat(document.getElementById('calc-univ-custom-tara').value);
        taraValue = isNaN(customTaraVal) ? 0 : customTaraVal;
        localStorage.setItem('dieta_calc_univ_custom_tara', taraValue);
      } else {
        taraValue = parseFloat(taraSelect.value);
      }
      
      const netWeight = totalWeightInput - taraValue;
      if (netWeight <= 0) {
        alert('El peso cocinado es menor o igual que la tara del recipiente. Introduce un peso mayor.');
        return;
      }
      
      // Determinar reparto (%)
      let reparto = {};
      const repartoType = repartoSelect.value;
      
      if (repartoType === 'familia') {
        reparto = { padre: 30, madre: 20, luis: 25, natalia: 25 };
      } else if (repartoType === 'adultos') {
        reparto = { padre: 45, madre: 30, luis: 25, natalia: 0 };
      } else if (repartoType === 'deportistas') {
        reparto = { padre: 55, madre: 0, luis: 45, natalia: 0 };
      } else if (repartoType === 'custom') {
        const pPadre = parseFloat(document.getElementById('calc-univ-pct-padre').value) || 0;
        const pMadre = parseFloat(document.getElementById('calc-univ-pct-madre').value) || 0;
        const pLuis = parseFloat(document.getElementById('calc-univ-pct-luis').value) || 0;
        const pNatalia = parseFloat(document.getElementById('calc-univ-pct-natalia').value) || 0;
        
        const sum = pPadre + pMadre + pLuis + pNatalia;
        const errorEl = document.getElementById('calc-univ-pct-error');
        const sumValEl = document.getElementById('calc-univ-pct-sum-val');
        
        if (sumValEl) sumValEl.innerText = sum;
        
        if (Math.abs(sum - 100) > 0.01) {
          if (errorEl) errorEl.style.display = 'block';
          return;
        } else {
          if (errorEl) errorEl.style.display = 'none';
        }
        
        reparto = { padre: pPadre, madre: pMadre, luis: pLuis, natalia: pNatalia };
        localStorage.setItem('dieta_calc_univ_custom_reparto', JSON.stringify(reparto));
      }
      
      // Mostrar resultados
      resultsContainer.innerHTML = '';
      resultsContainer.style.display = 'grid';
      
      Object.keys(reparto).forEach(mId => {
        const pct = reparto[mId];
        if (pct <= 0) return; // Omitir si es 0%
        
        const member = NUTRITION_DATA.miembros[mId];
        const portionWeight = ((netWeight * pct) / 100).toFixed(1);
        
        const box = document.createElement('div');
        box.className = 'calc-result-box';
        box.style.cssText = 'background:var(--bg-input); border:1px solid var(--border-color); border-radius:var(--radius-sm); padding:0.75rem; text-align:center; display:flex; flex-direction:column; gap:0.25rem;';
        box.innerHTML = `
          <span style="font-weight:600; color:var(--text-secondary); font-size:0.85rem;">${member ? member.nombre : mId}</span>
          <span style="font-size:1.15rem; font-weight:700; color:var(--primary);">${portionWeight} g</span>
          <span style="font-size:0.75rem; color:var(--text-muted); font-style:italic;">(${pct}%)</span>
        `;
        resultsContainer.appendChild(box);
      });
    };
    
    calcBtn.addEventListener('click', runCalculation);
    document.getElementById('calc-univ-weight').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') runCalculation();
    });
    document.getElementById('calc-univ-custom-tara').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') runCalculation();
    });
  }
}

// ─── PWA SERVICE WORKER REGISTRATION ──────────────
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Service Worker registrado con éxito:', reg.scope))
      .catch(err => console.error('Error al registrar Service Worker:', err));
  });
}

