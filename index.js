

const fs = require('fs');
const data = require('./record.json')

let current_account = process.argv[2];
let saving_account_bal = data.saving_initial_balence;
let checking_account_bal = data.checking_initial_balence;
let current_opration = process.argv[3];
let currennt_amount = process.argv[4];
let date = new Date().toLocaleDateString();
currennt_amount = Number(currennt_amount);

let is_command_valid = false;
if (currennt_amount % 500 != 0) {
    is_command_valid = true;
    console.log('you can enter amount only in multiply of the 500 enter again.');
}
else {

   

    if (current_opration === "Debit") {
        if (current_account === "Checking") {
         
            if (checking_account_bal < currennt_amount) {
                  is_command_valid = true;
                console.log("Sorry !!! , you will not able to debite this amount !! your account has only Rs." + checking_account_bal);
            }
            else {
               is_command_valid = true;
                checking_account_bal -= currennt_amount;
                data.checking_initial_balence = checking_account_bal;
                fs.writeFile('./record.json', JSON.stringify(data), function writeJSON(err) {
                    if (err) return console.log(err);

                });
                data.checking.push({ date, current_opration, currennt_amount });

                fs.writeFile('./record.json', JSON.stringify(data), function writeJSON(err) {
                    if (err) return console.log(err);

                });
            }

        }
       else if (current_account === "Saving") {

            if (saving_account_bal < currennt_amount) {
                is_command_valid = true;

                console.log("Sorry !!! , you will not able to debite .. your account has only Rs. " + saving_account_bal);
            }
            else {
               is_command_valid = true;
                saving_account_bal -= currennt_amount;
                data.saving_initial_balence = saving_account_bal;
                fs.writeFile('./record.json', JSON.stringify(data), function writeJSON(err) {
                    if (err) return console.log(err);

                });
                data.saving.push({ date, current_opration, currennt_amount });

                fs.writeFile('./record.json', JSON.stringify(data), function writeJSON(err) {
                    if (err) return console.log(err);

                });
            }
        }
    }
    if (current_opration === "Credit") {

        if (current_account === "Checking") {
           is_command_valid = true;
            checking_account_bal += currennt_amount;
            data.checking_initial_balence = checking_account_bal;
            fs.writeFile('./record.json', JSON.stringify(data), function writeJSON(err) {
                if (err) return console.log(err);

            });
            data.checking.push({ date, current_opration, currennt_amount });

            fs.writeFile('./record.json', JSON.stringify(data), function writeJSON(err) {
                if (err) return console.log(err);

            });

        }
        if (current_account === "Saving") {
           is_command_valid = true;
            saving_account_bal += currennt_amount;
            data.saving_initial_balence = saving_account_bal;
            fs.writeFile('./record.json', JSON.stringify(data), function writeJSON(err) {
                if (err) return console.log(err);

            });
            data.saving.push({ date, current_opration, currennt_amount });

            fs.writeFile('./record.json', JSON.stringify(data), function writeJSON(err) {
                if (err) return console.log(err);

            });
        }

    }

    if(is_command_valid === false) 
    {
        console.log("Sorry , you Entered invalid Command !! try again ..");
    }

    console.log("your Saving account has Rs. " + saving_account_bal  );
    console.log("your Checking account has Rs. " + checking_account_bal);
}


