// Datos de las canastas: se editan acá (precios, contenido, textos).
const DATOS = {
  "config": {
    "whatsapp": "59896190002",
    "ivaNota": "Todos los precios incluyen IVA.",
    "lema": "Calidad y el más eficiente servicio para sus compromisos de Fin de Año.",
    "medida": "Preparamos canastas especiales de acuerdo al gusto, preferencia y presupuesto de cada cliente. Consúltenos y le sugeriremos las mejores opciones. El contenido puede variar según disponibilidad, siempre dentro de la misma categoría.",
    "pagos": [
      "Tarjetas de crédito y débito",
      "Transferencias y pagos online",
      "Mercado Pago"
    ],
    "temporada": "2026/2027",
    "frase1": "Lo mejor que traen nuestras canastas no se ve",
    "frase2": "Incluyen el deseo de un año genial de quien las regala."
  },
  "canastas": [
    {
      "id": "un-momento",
      "nombre": "Canasta Un Momento",
      "precio": 2290,
      "foto": "fotos/un-momento.jpg",
      "contenido": []
    },
    {
      "id": "un-toque",
      "nombre": "Canasta Un Toque",
      "precio": 2340,
      "foto": "fotos/un-toque.jpg",
      "contenido": []
    },
    {
      "id": "oportuna",
      "nombre": "Canasta Oportuna",
      "precio": 2990,
      "foto": "fotos/oportuna.jpg",
      "contenido": [
        "Vino Liebfraumilch 750 ml (Alemania)",
        "Palitos Stickletti 125 g (Alemania)",
        "Maní Ultje 200 g (Alemania)",
        "Paté Tulip 125 g (Bélgica)",
        "Aceitunas Serpis con anchoas 125 g (España)",
        "Barra de chocolate Twix Bar 45 g x 3",
        "Turrón Oro Navideño 150 g (España)"
      ]
    },
    {
      "id": "compromiso",
      "nombre": "Canasta Compromiso",
      "precio": 3290,
      "foto": "fotos/compromiso.jpg",
      "contenido": [
        "Vino La Escondida Malbec 750 ml (Argentina)",
        "Tortilla chips original 125 g (Alemania)",
        "Pringles original 12 x 40 g (EE.UU.)",
        "Maxi Mix 125 g (Alemania)",
        "Mini Brezli Wolf 100 g (Alemania)",
        "Chocolas Crispy Milk 125 g (Bélgica)",
        "Twix Bar 18 x 45 g, 810 g (Brasil)"
      ]
    },
    {
      "id": "bayley-s",
      "nombre": "Canasta Bayley S",
      "precio": 3390,
      "foto": "fotos/bayley-s.webp",
      "contenido": []
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
      ]
    },
    {
      "id": "dulce-jack",
      "nombre": "Canasta Dulce Jack",
      "precio": 3790,
      "foto": "fotos/dulce-jack.jpg",
      "contenido": []
    },
    {
      "id": "mi-1er-johnnie",
      "nombre": "Canasta Mi 1er Johnnie",
      "precio": 4990,
      "foto": "fotos/mi-1er-johnnie.jpg",
      "contenido": []
    },
    {
      "id": "te-pasaste",
      "nombre": "Canasta Te Pasaste!",
      "precio": 7790,
      "foto": "fotos/te-pasaste.jpg",
      "contenido": []
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
      ]
    },
    {
      "id": "distincion",
      "nombre": "Canasta Distinción",
      "precio": 11690,
      "foto": "fotos/distincion.jpg",
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
      ]
    },
    {
      "id": "descontrol",
      "nombre": "Canasta Descontrol",
      "precio": 16900,
      "foto": "fotos/descontrol.jpg",
      "contenido": []
    }
  ]
};
