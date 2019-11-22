var today = new Date();
var hourNow = today.getHours();
var greeting; 

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = ' Good afternoon!';
} else if  (hourNow > 0 ) {
    greeting = ' Good morning!';
} else {
    greeting = ' Welcome!';
}

document.write('<h3>' + greeting + '</h3>' );


var showOrder = function () {
    var order  = prompt( 'what would you like to order');
    var item ,  quantity;
    var item = '';
    
    while (order !== 'washing' && order !== 'laundering'){
     
        order = prompt ( 'please do something different, select "washing" or "laundering"…');
    };
    
    //ask for the quantity

        quantity = prompt ( 'how many would you like');

    //console.log(quantity);

    //  while(isNaN(quantity) !== 'number'){
    //      console.log(isNaN(quantity));
    //      quantity = prompt ('PLEASE ENTER A NUMERICAL VALUE');
    //  }

    //validate the quantity 

    if(order === 'washing'){
    item = '<money_pile.jpg>';
    
    }else if ( order === 'laundering'){
        item = '<money_picture.jpg>';
    }
    return item;
    //A FOR LOOP

    for(var i = 0; i <quantity; i = i + 1){
        items = items + item;
    }
    return items;
};
showOrder();