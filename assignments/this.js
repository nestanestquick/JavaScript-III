/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global context - when in global scope 'this' will be the window/console object

* 2. Implicit Binding- whenever  function is called by a preceeding dot, 
     the object left of the dot is'this'

* 3. New Binding- whenever a constriction function is used, this refers 
     to the specific instance of the object that is returned by the 
     constructor function 

* 4. Explicit Binding- whenever JS call or apply method is applied, 
     this is explicitly defined, can modify objects in a different 'this' function
*
* write out a code example of each explanation above
*/

// Principle 1
    
    function sayName(input) {
        console.log(this);
        return input;
    }
    sayName('Nesta');
// code example for Window Binding

// Principle 2
    
    const myObj = {
        greeting: 'Hello',
        sayHello: function(input) {
            console.log(`${this.greeting} my name is ${input}`);
        }
    };
    myObj.sayHello('Nesta');

// code example for Implicit Binding

// Principle 3

    function PersonSlain(slayee, slayer) {
        this.slain = ' has been slain! ';
        this.slayee = slayee;
        this.slayer = slayer;
        this.speak = function() {
            console.log(this.slayee + this.slain + 'by ' + this.slayer + "!!");
        };
    }

const nesta = new PersonSlain('Nesta', 'Kelly');
const kelly = new PersonSlain('Kelly', 'Nesta');

nesta.speak();
kelly.speak();

// code example for New Binding

// Principle 4

    function PersonSlain(slayee, slayer) {
        this.slain = ' has been slain! ';
        this.slayee = slayee;
        this.slayer = slayer;
        this.speak = function() {
            console.log(this.slayee + this.slain + 'by ' + this.slayer + "!!");
        };
    }

    const nesta = new PersonSlain('Nesta', 'Kelly');
    const kelly = new PersonSlain('Kelly', 'Nesta');

    nesta.speak.call(kelly); kelly.speak.apply(nesta);

    console.log('--------------------------------');

    nesta.speak();
    kelly.speak();
// code example for Explicit Binding

