/**
 * Problem statement
 * 
 * The first line of input consists of the number of ingredients, N
 * The second line of input consists of the N space-separated integers representing the quantity of each ingredient required to create a Powerpuff Girl.
 * The third line of input consists of the N space-separated integers representing the quantity of each ingredient present in the laboratory.
 * Constraints
 * 1<= N <=10000000 (1e7)
 * 0<= Quantity_of_ingredient <= LLONG_MAX 
 * 
 */

const input_stdin_array = ['4', '2 5 6 3', '20 40 90 50'];

let output = 0;
//Write code here
let stop = false;
const no_Of_Input = parseInt(input_stdin_array[0], 0);
const unit_powpg = input_stdin_array[1].trim().split(' ').map(x => +x);
const qty_ingredient = input_stdin_array[2].trim().split(' ').map(x => +x);
// console.log(input_stdin_array);
while (!stop) {
    output++;
    for (let idx = 0; idx < no_Of_Input; idx++) {
        qty_ingredient[idx] -= unit_powpg[idx];
        if (qty_ingredient[idx] <= 0) {
            stop = true;
        }
    }
}