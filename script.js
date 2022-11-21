


function init() {
    whichBasket();
    renderFoodArea();
    document.getElementById('popup').style = 'display: none';
};

function renderFoodArea() {//rendert alle Angebotene Gerichte
    document.getElementById('food-area').innerHTML += `
    ${createSaladHeader()}
    ${createSaladSelection()}
    ${createPizzaHeader()}
    ${createPizzaSelection()}
    ${createChineseDishHeader()}
    ${createChineseDishSelection()}
    ${createIndianDishHeader()}
    ${createIndianDishSelection()}
    ${createDessertHeader()}
    ${createDessertSelection()}
`;
}


window.addEventListener('resize', () => {
    whichBasket(); // meine funktion die ich ausführen möchte
})

function whichBasket() {//Abfrage ob der responsive Warenkorb benötigt wird oder der normale
    if (window.innerWidth > 1200) {
        hiddeMobileBasket();
    } else {
        showMobileBasket();
    }
}

function showMobileBasket() {//Den responsive Warenkorb anzeigen
    const formattedGrandTotal = grandTotal.toFixed(2).replace('.', ',');
    document.getElementById('shopping-basket-div-button').style = '';
    document.getElementById('shopping-basket-button').innerHTML = `Warenkorb (${formattedGrandTotal})`;
    document.getElementById('body').style = '';
    mobileBasketButton();
}

function hiddeMobileBasket() {//Den normalen Warenkorb anzeigen
    document.getElementById('shopping-basket-div-button').style = 'display: none';
    document.getElementById('popup').style = 'display: none';
    document.getElementById('body').style = '';
    renderShoppingCard();
}

function mobileBasketButton() {//Den responsive Warenkorb Button anzeigen
    const formattedGrandTotal = grandTotal.toFixed(2).replace('.', ',');
    document.getElementById('popup-button-pay').innerHTML = `Bezahlen (${formattedGrandTotal} €)`;
}

function renderShoppingCard() {// ladet den Warenkorb, je nachdem ob was drinn ist oder nicht
    const formattedGrandTotal = grandTotal.toFixed(2).replace('.', ',');
    if (shopping_card_dishes.length == 0) {// Wenn nichts im Warenkorb ist
        renderEmptyShoppingCard();
        document.getElementById('button-pay').style = 'display: none';
        document.getElementById('price-calculation').innerHTML = ``;
    } else {// Wenn der Warenkorb gefüllt ist
        renderSelectedDishes();
        rednerShoppingCardPrice();
        document.getElementById('button-pay').style = '';
        document.getElementById('button-pay').innerHTML = `Bezahlen (${formattedGrandTotal} €)`;
    }
};

function renderEmptyShoppingCard() {//Einen leeren Warenkorb anzeigen
    document.getElementById('selected-dishes').innerHTML = `
    <div class="empty_shopping_card">
        <img src="icons/shopping card.png" alt="">
        <span>Bitte wählen Sie ein Gericht aus.</span>
    </div>
    `;
}

function renderSelectedDishes() { // Den gefüllten WarenKorb anzeigen
    document.getElementById('selected-dishes').innerHTML = ``;
    for (let i = 0; i < shopping_card_dishes.length; i++) {
        const formattedPrice = price[i].toFixed(2).replace('.', ',');
        renderSelectionDishesHtml(i, formattedPrice);
    }

};

function renderSelectionDishesHtml(i, formattedPrice) {//Die HTML-Struktur von den Gerichten im Warenkorb
    return document.getElementById('selected-dishes').innerHTML += `
    <div class="selected_food">
        <div class="selected_dish">
            <div class="dish">${shopping_card_amount[i]} ${shopping_card_dishes[i]}</div>
            <div class="dish_price">${formattedPrice} €</div>
        </div>
        <div class="shopping_card_icons">
            <div class="shopping_card_icon_minus" onclick="dishDecreaseBy1(${i})"><img src="icons/minus.png" alt=""></div>
            <div class="shopping_card_icon_plus" onclick="dishIncreaseBy1(${i})"><img src="icons/plus.png" alt=""></div>
        </div>
    </div>
    `;
}

function rednerShoppingCardPrice() { // Die Kalkulation generieren
    const formattedSubtotal = subtotal.toFixed(2).replace('.', ',');
    const formattedGrandTotal = grandTotal.toFixed(2).replace('.', ',');
    document.getElementById('price-calculation').innerHTML = `
    <div class="flex_box">
        <div>Zwischensummen</div>
        <div>${formattedSubtotal} €</div>
    </div>
    <div class="flex_box">
        <div>Lieferkosten</div>
        <div>2,00 €</div>
    </div>
    <div class="flex_box">
        <div>Gesamt</div>
        <div>${formattedGrandTotal} €</div>
    </div>
    `;
};

function renderPopupShoppingCard() {// ladet den Warenkorb, je nachdem ob was drinn ist oder nicht
    popupBasket();
    document.getElementById('popup').style = '';
    document.getElementById('body').style = 'overflow: hidden';

};

function popupBasket() {
    const formattedGrandTotal = grandTotal.toFixed(2).replace('.', ',');
    if (shopping_card_dishes.length == 0) {// Wenn nichts im Warenkorb ist
        renderPopupEmptyShoppingCard();
        document.getElementById('popup-price-calculation').innerHTML = ``;
        document.getElementById('popup-button-pay').style = 'display: none';
    } else {// Wenn der Warenkorb gefüllt ist
        renderPopupSelectedDishes();
        rednerPopupShoppingCardPrice();
        document.getElementById('popup-button-pay').style = '';
        document.getElementById('popup-button-pay').innerHTML = `Bezahlen (${formattedGrandTotal} €)`;
    }
}

function renderPopupEmptyShoppingCard() {//Einen leeren Warenkorb anzeigen
    document.getElementById('popup-selected-dishes').innerHTML = `
    <div class="empty_shopping_card">
        <img src="icons/shopping card.png" alt="">
        <span>Bitte wählen Sie ein Gericht aus.</span>
    </div>
    `;
}

function renderPopupSelectedDishes() { // Den gefüllten WarenKorb anzeigen
    document.getElementById('popup-selected-dishes').innerHTML = ``;
    for (let i = 0; i < shopping_card_dishes.length; i++) {
        const formattedPrice = price[i].toFixed(2).replace('.', ',');
        renderPopupSelectionDishesHtml(i, formattedPrice);
    }

};

function renderPopupSelectionDishesHtml(i, formattedPrice) {//Die HTML-Struktur von den Gerichten im Warenkorb
    return document.getElementById('popup-selected-dishes').innerHTML += `
    <div class="selected_food">
        <div class="selected_dish">
            <div class="dish">${shopping_card_amount[i]} ${shopping_card_dishes[i]}</div>
            <div class="dish_price">${formattedPrice} €</div>
        </div>
        <div class="shopping_card_icons">
            <div class="shopping_card_icon_minus" onclick="dishDecreaseBy1(${i})"><img src="icons/minus.png" alt=""></div>
            <div class="shopping_card_icon_plus" onclick="dishIncreaseBy1(${i})"><img src="icons/plus.png" alt=""></div>
        </div>
    </div>
    `;
}

function rednerPopupShoppingCardPrice() { // Die Kalkulation generieren
    const formattedSubtotal = subtotal.toFixed(2).replace('.', ',');
    const formattedGrandTotal = grandTotal.toFixed(2).replace('.', ',');
    document.getElementById('popup-price-calculation').innerHTML = `
    <div class="flex_box">
        <div>Zwischensummen</div>
        <div>${formattedSubtotal} €</div>
    </div>
    <div class="flex_box">
        <div>Lieferkosten</div>
        <div>2,00 €</div>
    </div>
    <div class="flex_box">
        <div>Gesamt</div>
        <div>${formattedGrandTotal} €</div>
    </div>
    `;
};

function addFood(dish) {//Ein Gericht zum Warenkorb hinzufügen
    let index = shopping_card_dishes.indexOf(dish.headline);
    if (index == -1) {
        shopping_card_amount.push(1);
        shopping_card_dishes.push(dish.headline);
        price.push(dish.price);
    } else {
        shopping_card_amount[index]++;
    }
    calculatTotal();
    whichBasket();
}

function dishIncreaseBy1(i) {//Die Menge einens Menü um 1 erhöhen
    shopping_card_amount[i]++;
    calculatTotal();
    if (window.innerWidth > 1200) {
        renderShoppingCard();
    } else {
        renderPopupShoppingCard();
    }
}

function dishDecreaseBy1(i) {//Die Menge einens Menü um 1 verringen oder ganz aus dem Warenkorb löschen
    var amountDish = shopping_card_amount[i];
    if (amountDish > 1) {
        shopping_card_amount[i]--;
    } else {
        shopping_card_amount.splice(i, 1);
        shopping_card_dishes.splice(i, 1);
        price.splice(i, 1);
    }
    calculatTotal();
    if (shopping_card_amount.length == 0) {// Damit beim lerren Array auch der Lieferpreis gelöscht wird
        grandTotal = 0;
    }
    if (window.innerWidth > 1200) {
        renderShoppingCard();
    } else {
        renderPopupShoppingCard();
    }
}

function calculatTotal() {// Berechnet dan Zwischenpreis und den Gesamtpreis
    subtotal = 0;
    for (let i = 0; i < shopping_card_dishes.length; i++) {
        subtotal += shopping_card_amount[i] * price[i];
    }
    grandTotal = 0;
    grandTotal = subtotal + 2.00;
}

function closePopup() {// Der Warenkorb im resposive Mode wieder schliesen
    document.getElementById('popup').style = 'display: none';
    document.getElementById('body').style = '';
}

function save(event) {// Wenn auf dem Warnkorb klickt das er sich nicht schliest, sondern nur wenn man auf den Hintergrund klickt
    event.stopPropagation();
}

function openOrdered(){//Das Bestellpopup öffnen und alles im Warenkorb löschen
    document.getElementById('ordered').style = '';
    shopping_card_amount = [];
    shopping_card_dishes = [];
    price = [];
    calculatTotal();
    if (shopping_card_amount.length == 0) {// Damit beim lerren Array auch der Lieferpreis gelöscht wird
        grandTotal = 0;
    }
    if (window.innerWidth > 1200) {
        renderShoppingCard();
    } else {
        renderPopupShoppingCard();
    }
}

function closeOrdered(){//Das Bestellpopup schliesen
    document.getElementById('ordered').style = 'display: none';
}