// Datos de las canastas: se editan acá (precios, contenido, textos).
const DATOS = {
  "config": {
    "whatsapp": "59896190002",
    "empresa": "Pel Sas",
    "ivaNota": "Precios IVA incluido",
    "contenidoNota": "El contenido puede variar según disponibilidad, siempre dentro de la misma categoría.",
    "lema": "Calidad y el más eficiente servicio para sus compromisos de Fin de Año.",
    "medida": "Preparamos canastas especiales de acuerdo al gusto, preferencia y presupuesto de cada cliente. Consúltenos y le sugeriremos las mejores opciones.",
    "ventajas": [
      { "icono": "pago", "texto": "Todos los medios de pago" },
      { "icono": "entrega", "texto": "Entregas en Montevideo sin cargo" }
    ],
    "temporada": "",
    "frase1": "Lo mejor que traen nuestras canastas no se ve",
    "frase2": "Incluyen el deseo de un año genial de quien las eligió."
  },
  "canastas": [
    {
      "id": "distincion",
      "nombre": "Canasta Distinción",
      "precio": 11690,
      "foto": "fotos/distincion.webp",
      "contenido": [
        "Whisky Johnnie Walker Etiqueta Negra 1 l",
        "Champagne Henkell Trocken Dry Sec 750 ml (Alemania)",
        "Vino Undurraga “Aliwen” Cabernet Carmenere 750 ml (Chile)",
        "Turrón blando La Bruja 150 g (España)",
        "Turrón duro El Almendro 75 g (España)",
        "Barra de chocolate Twix Bar 45 g x 3 (Brasil)",
        "Lata de galletas danesas 454 g (Dinamarca)",
        "Chocolas Crispy Milk 125 g (Alemania)",
        "Aceitunas Serpis con anchoas (Alemania)",
        "Papas Pringles 140 g (Brasil)",
        "Bacalao a la vizcaína 125 g (España)",
        "Dientes de ajo marinados 65 g (España)"
      ],
      "destacada": true,
      "formato": "3/2"
    },
    {
      "id": "un-toque",
      "nombre": "Canasta Un Toque",
      "precio": 2340,
      "foto": "fotos/un-toque.webp",
      "contenido": [
        "Cerveza artesanal Volcánica 500 ml x 2",
        "Palitos Stickletti 125 g (Alemania)",
        "Chips de vegetales De la Tierra",
        "Alfajor Celisano",
        "Maní Ultje chico (Alemania)",
        "Destapador de Papá Noel"
      ],
      "formato": "4/5"
    },
    {
      "id": "impecable",
      "nombre": "Canasta Impecable",
      "precio": 3490,
      "foto": "fotos/impecable.webp",
      "contenido": [
        "Vino Undurraga Cabernet Sauvignon / Blanc 750 ml (Chile)",
        "Studentenfutter, maní con pasas 200 g (Alemania)",
        "Papas Pringles originales 140 g (Brasil)",
        "M&M chocolate 104 g (Brasil)",
        "Barra de chocolate Twix Bar 45 g x 3",
        "Turrón Almendro 150 g (España)",
        "Dientes de ajo marinados “Delicias” (España)",
        "Mejillones en salsa de tomate (Alemania)",
        "Caramelos en lata “Cavendish” (Alemania)"
      ],
      "destacada": true,
      "formato": "3/2"
    },
    {
      "id": "dulce-jack",
      "nombre": "Canasta Dulce Jack",
      "precio": 3790,
      "foto": "fotos/dulce-jack.webp",
      "contenido": [
        "Whisky Jack Daniel’s Old No. 7 700 ml (EE.UU.)",
        "Coca-Cola 600 ml",
        "Bombones Ferrero Rocher",
        "Barra de chocolate Snickers"
      ],
      "formato": "1/1"
    },
    {
      "id": "bayley-s",
      "nombre": "Canasta Bayley S",
      "precio": 3390,
      "foto": "fotos/bayley-s.webp",
      "contenido": [
        "Licor Baileys The Original Irish Cream (Irlanda)",
        "Pack Ferrero Rocher"
      ],
      "formato": "1/1"
    },
    {
      "id": "barbaridad",
      "nombre": "Canasta Barbaridad",
      "precio": 9790,
      "foto": "fotos/barbaridad.webp",
      "contenido": [
        "Whisky Johnnie Walker Etiqueta Roja 1 l",
        "Champagne Mercier Brut 750 ml (Francia)",
        "Chocolas Crispy Naranja 125 g (Alemania)",
        "Chocolate Stick 110 g (Alemania)",
        "Turrón La Bruja 150 g (España)",
        "Papas Pringles 140 g (Brasil)",
        "Sardinas ahumadas Rugenfish 110 g (Alemania)",
        "Pistachos Pitjes en lata 110 g (Alemania)",
        "Pulpo en aceite vegetal 110 g (España)",
        "Paté Tulip 125 g (Bélgica)",
        "Choclitos Paulsen 330 g (Alemania)",
        "Pepinos Paulsen 330 g (Alemania)",
        "Aceitunas Serpis con anchoas 40 g (España)",
        "Snacks Maxi Mix 125 g (Alemania)"
      ],
      "destacada": true,
      "formato": "3/2"
    },
    {
      "id": "un-momento",
      "nombre": "Canasta Un Momento",
      "precio": 2290,
      "foto": "fotos/un-momento.webp",
      "contenido": [
        "Cava Freixenet Cordón Negro Brut (España)",
        "Pack Ferrero Rocher"
      ],
      "formato": "1/1"
    },
    {
      "id": "oportuna",
      "nombre": "Canasta Oportuna",
      "precio": 2990,
      "foto": "fotos/oportuna.webp",
      "contenido": [
        "Vino Liebfraumilch 750 ml (Alemania)",
        "Palitos Stickletti 125 g (Alemania)",
        "Maní Ultje 200 g (Alemania)",
        "Paté Tulip 125 g (Bélgica)",
        "Aceitunas Serpis con anchoas 125 g (España)",
        "Barra de chocolate Twix Bar 45 g x 3",
        "Turrón Oro Navideño 150 g (España)"
      ],
      "formato": "4/3"
    },
    {
      "id": "mi-1er-johnnie",
      "nombre": "Canasta Mi 1er Johnnie",
      "precio": 4990,
      "foto": "fotos/mi-1er-johnnie.webp",
      "contenido": [
        "Whisky Johnnie Walker Etiqueta Roja 1 l",
        "M&M chocolate 104 g (Brasil)",
        "Turrón El Almendro 150 g (España)",
        "Papas Pringles 140 g (Brasil)",
        "Turrón blando",
        "Caramelos en lata Cavendish & Harvey Mixed Fruit Drops 200 g (Alemania)",
        "Pistachos en lata",
        "Paté"
      ],
      "destacada": true,
      "formato": "3/2"
    },
    {
      "id": "compromiso",
      "nombre": "Canasta Compromiso",
      "precio": 3290,
      "foto": "fotos/compromiso.webp",
      "contenido": [
        "Vino La Escondida Malbec 750 ml (Argentina)",
        "Tortilla chips original 125 g (Alemania)",
        "Pringles original 12 x 40 g (EE.UU.)",
        "Maxi Mix 125 g (Alemania)",
        "Mini Brezli Wolf 100 g (Alemania)",
        "Chocolas Crispy Milk 125 g (Bélgica)",
        "Twix Bar 18 x 45 g, 810 g (Brasil)"
      ],
      "formato": "4/3"
    }
  ]
};
