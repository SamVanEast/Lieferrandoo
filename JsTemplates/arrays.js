let dishesCategories = [
    {
        'img': '<img src="image/salad.jpg" alt="">',
        'headline': 'Salate',
        'info': 'Alle Salate werden mit grünem Salat, frischen Tomaten, Gurken und einem Dressing Ihrer Wahl zubereitet.',
    },
    {
        'img': '<img src="image/pizza.jpg" alt="">',
        'headline': 'Pizza',
        'info': 'Alle Pizzen werden mit Tomatensauce und Käse zubereitet.',
    },
    {
        'img': '<img src="image/chinese dishes.jpg" alt="">',
        'headline': 'Chinesische Gerichte',
        'info': '',
    },
    {
        'img': '<img src="image/indian dishes.jpg" alt="">',
        'headline': 'Indische Gerichte',
        'info': '',
    },
    {
        'img': '<img src="image/tiramisu.jpg" alt="">',
        'headline': 'Desserts',
        'info': '',
    },
]

let salads = [
    {
        'headline': 'Grünen Salat',
        'info': 'ohne frische Tomaten und Gurken',
        'price': 4.00,
    },
    {
        'headline': 'Gemischter Salat',
        'info': 'mit Karotten und Bohnen',
        'price': 5.00,
    },
    {
        'headline': 'Tomatensalat',
        'info': 'mit Zwiebeln, ohne grünen Salat, frische Tomaten und Gurken',
        'price': 4.50,
    },
    {
        'headline': 'Hirtensalat',
        'info': 'mit Thunfisch, Formfleischvorderschinken, Schafskäse, Oliven, Ei, Peperoni und Artischocken, ohne grünen Salat',
        'price': 7.70,
    },
    {
        'headline': 'Krabbencocktail',
        'info': 'ohne grünen Salat, frische Tomaten und Gurken',
        'price': 7.80,
    }
];

let pizzas = [
    {
        'headline': 'Pizza mit Käse',
        'info': '',
        'price': 7.00,
    },
    {
        'headline': 'Pizza mit Salami',
        'info': '',
        'price': 7.40,
    },
    {
        'headline': 'Pizza mit Chamipignons',
        'info': '',
        'price': 7.40,
    },
    {
        'headline': 'Pizza mit Artischocken',
        'info': '',
        'price': 7.40,
    },
    {
        'headline': 'Pizza mit Knoblauch und Zwiebeln',
        'info': '',
        'price': 7.40,
    }
];

let chineseDishes = [
    {
        'headline': 'Chicken Wings',
        'info': 'mit Pommes und Sauce',
        'price': 8.60,
    },
    {
        'headline': 'Chinesische Frühlingsrolle ',
        'info': '',
        'price': 4.50,
    },
    {
        'headline': 'Krubok',
        'info': 'Krabbenchips',
        'price': 3.50,
    },
    {
        'headline': 'Hühnerfleisch',
        'info': 'mit Süß-Sauer-Sauce',
        'price': 11.40,
    },
    {
        'headline': 'Knusprige Ente',
        'info': 'mit gebrantenem Gemüse und Sojasauce',
        'price': 14.80,
    }
];

let indianDishes = [
    {
        'headline': 'Papar',
        'info': 'drei würzige Linsenwaffeln',
        'price': 2.50,
    },
    {
        'headline': 'Sapij Samosa',
        'info': 'frittierte Teigpasteten gefüllt mit Gemüse der Saison',
        'price': 4.50,
    },
    {
        'headline': 'Sabji Bhaji',
        'info': 'allerlei Gemüse der Saison, zubereitet mit erlesenen Gewürzen und Reis',
        'price': 10.00,
    },
    {
        'headline': 'Bharta',
        'info': 'gegrillte Auberginen mit Zwibeln und Tomaten nach indischer Art gekocht',
        'price': 10.00,
    },
    {
        'headline': 'Vegetable Biryani',
        'info': 'Reis nach indischer Art mit Gemüse',
        'price': 10.00,
    }
];

let desserts = [
    {
        'headline': 'Tiramisu',
        'info': '',
        'price': 3.50,
    },
    {
        'headline': 'Spaghetti Eis',
        'info': '',
        'price': 3.50,
    },
    {
        'headline': 'Ganze Zitrone',
        'info': 'gefüllt mit Zitoneneis',
        'price': 4.50,
    },
    {
        'headline': 'Ganze Orange',
        'info': 'gefüllt mit Orangeeis',
        'price': 4.50,
    },
    {
        'headline': '1/2 Kokosnuss',
        'info': 'gefüllt mit Kokosnusseis',
        'price': 5.00,
    }
];

let subtotal = 0;
let grandTotal = 0;

let shopping_card_amount = [];
let shopping_card_dishes = [];
let price = [];