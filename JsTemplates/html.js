function createSaladHeader() { //Salat Dackblatt laden
    return `        
        <div id="salad" class="food_topic">
            <div class="food_topic_img">${dishesCategories[0]['img']}</div>
            <h2 >${dishesCategories[0]['headline']}</h2>
            <span class="food_topic_info">${dishesCategories[0]['info']}</span>
        </div>`;
};

function createSaladSelection() {//Salat Gerichte laden
    let saladSelection = ``;

    for (let i = 0; i < salads.length; i++) {
        const formattedPrice = salads[i]['price'].toFixed(2).replace('.', ',');
        saladSelection += `
        <div class="food_selection" onclick="addFood(salads[${i}])">
            <div class="padding10px">
                <div class="food_selection_headline_img">
                    <div class="food_selection_headline_img_div">
                        <h3 class="food_selection_headline">${salads[i]['headline']}</h3>
                        <img src="icons/info orange.png" alt="">
                    </div>
                    <div class="food_selection_plus">
                        <img src="icons/plus.png" alt="">
                    </div>
                </div>
                <span class="food_selection_info">${salads[i]['info']}</span>
                <div class="food_selection_price">${formattedPrice} €</div>
            </div>
        </div>
        `;
    }
    return saladSelection;
};

function createPizzaHeader() {//Pizza Dackblatt laden
    return `        
        <div id="pizza" class="food_topic">
            <div class="food_topic_img">${dishesCategories[1]['img']}</div>
            <h2 >${dishesCategories[1]['headline']}</h2>
            <span class="food_topic_info">${dishesCategories[1]['info']}</span>
        </div>`;
};

function createPizzaSelection() {//Pizza Gerichte laden
    let pizzaSelection = ``;
    for (let i = 0; i < pizzas.length; i++) {
        const formattedPrice = pizzas[i]['price'].toFixed(2).replace('.', ',');
        pizzaSelection += `
        <div class="food_selection" onclick="addFood(pizzas[${i}])">
            <div class="padding10px">
                <div class="food_selection_headline_img">
                    <div class="food_selection_headline_img_div">
                        <h3 class="food_selection_headline">${pizzas[i]['headline']}</h3>
                        <img src="icons/info orange.png" alt="">
                    </div>
                    <div class="food_selection_plus">
                        <img src="icons/plus.png" alt="">
                    </div>
                </div>
                <span class="food_selection_info">${pizzas[i]['info']}</span>
                <div class="food_selection_price">${formattedPrice} €</div>
            </div>
        </div>
        `;
    }
    return pizzaSelection;
};
function createChineseDishHeader() {//Chinesische Gerichte laden
    return `        
        <div id="chinese-dishes" class="food_topic">
            <div class="food_topic_img">${dishesCategories[2]['img']}</div>
            <h2 >${dishesCategories[2]['headline']}</h2>
            <span class="food_topic_info">${dishesCategories[2]['info']}</span>
        </div>`;
};

function createChineseDishSelection() {//Chinesische Gerichte laden
    let chineseDishSelection = ``;
    for (let i = 0; i < chineseDishes.length; i++) {
        const formattedPrice = chineseDishes[i]['price'].toFixed(2).replace('.', ',');
        chineseDishSelection += `
        <div class="food_selection" onclick="addFood(chineseDishes[${i}])">
            <div class="padding10px">
                <div class="food_selection_headline_img">
                    <div class="food_selection_headline_img_div">
                        <h3 class="food_selection_headline">${chineseDishes[i]['headline']}</h3>
                        <img src="icons/info orange.png" alt="">
                    </div>
                    <div class="food_selection_plus">
                        <img src="icons/plus.png" alt="">
                    </div>
                </div>
                <span class="food_selection_info">${chineseDishes[i]['info']}</span>
                <div class="food_selection_price">${formattedPrice} €</div>
            </div>
        </div>
        `;
    }
    return chineseDishSelection;
};
function createIndianDishHeader() {//Indische Gerichte laden
    return `        
        <div id="indian-dishes" class="food_topic">
            <div class="food_topic_img">${dishesCategories[3]['img']}</div>
            <h2 >${dishesCategories[3]['headline']}</h2>
            <span class="food_topic_info">${dishesCategories[3]['info']}</span>
        </div>`;
};

function createIndianDishSelection() {//Indische Gerichte laden
    let indianDishSelection = ``;
    for (let i = 0; i < indianDishes.length; i++) {
        const formattedPrice = indianDishes[i]['price'].toFixed(2).replace('.', ',');
        indianDishSelection += `
        <div class="food_selection" onclick="addFood(indianDishes[${i}])">
            <div class="padding10px">
                <div class="food_selection_headline_img">
                    <div class="food_selection_headline_img_div">
                        <h3 class="food_selection_headline">${indianDishes[i]['headline']}</h3>
                        <img src="icons/info orange.png" alt="">
                    </div>
                    <div class="food_selection_plus">
                        <img src="icons/plus.png" alt="">
                    </div>
                </div>
                <span class="food_selection_info">${indianDishes[i]['info']}</span>
                <div class="food_selection_price">${formattedPrice} €</div>
            </div>
        </div>
        `;
    }
    return indianDishSelection;
};

function createDessertHeader() {//Desserts Dackblatt laden
    return `        
        <div id="dessert" class="food_topic">
            <div class="food_topic_img">${dishesCategories[4]['img']}</div>
            <h2 >${dishesCategories[4]['headline']}</h2>
            <span class="food_topic_info">${dishesCategories[4]['info']}</span>
        </div>`;
};

function createDessertSelection() {//Desserts laden
    let dessertSelection = ``;
    for (let i = 0; i < desserts.length; i++) {
        const formattedPrice = desserts[i]['price'].toFixed(2).replace('.', ',');
        dessertSelection += `
        <div class="food_selection" onclick="addFood(desserts[${i}])">
            <div class="padding10px">
                <div class="food_selection_headline_img">
                    <div class="food_selection_headline_img_div">
                        <h3 class="food_selection_headline">${desserts[i]['headline']}</h3>
                        <img src="icons/info orange.png" alt="">
                    </div>
                    <div class="food_selection_plus">
                        <img src="icons/plus.png" alt="">
                    </div>
                </div>
                <span class="food_selection_info">${desserts[i]['info']}</span>
                <div class="food_selection_price">${formattedPrice} €</div>
            </div>
        </div>
        `;
    }
    return dessertSelection;
};