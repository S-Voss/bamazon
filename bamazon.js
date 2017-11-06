var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon_db"
})

connection.connect(function(err){
    if (err) throw err;
    console.log('Connection Successful! \n');
    makeTable();
})

var makeTable = function(){
    connection.query("SELECT * FROM product_info", function(err, res){
        for (var i = 0; i<res.length; i++){
    console.log(res[i].item_id + " || " + res[i].product_name + " || " 
    + res[i].department_name + " || " + res[i].price + " || " 
    + res[i].stock_quantity + "\n");
        }
        customerPrompt(res);
    })
}

var customerPrompt = function(res){
    //prompt user to make a purchase decision
    inquirer.prompt([{
        type: "input",
        name: "choice",
        message: "What item would you like to purchase next?"
    //Loop through the list of products listed in db for the customer to purchase
    }]).then(function(answer){
        console.log(answer.choice);
        var correct = false;
        for (var i = 0; i<res.length; i++){
            //if a product column exists that the user requested
            //then set a variable = to the selection and id = i
            if(res[i].product_name == answer.choice){
                correct = true;
                var product = answer.choice;
                var id=i;
                //prompt the user for a quantity selection
                inquirer.prompt({
                    type: "input",
                    name: "quantity",
                    message: "How many would you like to buy?",
                    //check that the selection is a number
                    validate: function(value) {
                        if(isNaN(value) == false){
                            return true;
                        } else {
                            return false;
                        }
                    }
                    //query the database with the answer to the prompt above that will:
                }).then(function(answer){
                    //check to see the selection has current inventory
                    if((res[id].stock_quantity - answer.quantity) > 0){
                        //if so query product_name and decrease inevotry by 1
                        connection.query("UPDATE product_info SET stock_quantity='" + (res[id].stock_quantity - answer.quantity) + "' WHERE product_name ='" + product + "'", function(err, res2){
                            console.log("Product Bought");
                            makeTable();
                            var cost = res[id].price * answer.quantity
                            console.log("Order Total: $" + cost +".00");
                        })
                        //otherwise, reprompt the user
                    } else {
                        console.log("Insufficient quantity!")
                        customerPrompt(res);
                    }
                })
            }
        }
        //otherwise, reprompt the user for a column that does exist
        if(i == res.length && correct == false) {
            console.log("Not a valid product selection!");
            customerPrompt(res);
        }
    })
}