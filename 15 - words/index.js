class Add {
    constructor(...words) {
        this.words = words;

        this.print = function(){
            let encrypt = words.join('$')

            console.log("$" +encrypt +"$")

        }
    }
  
}


var x = new Add("hehe","hoho","haha","hihi")


x.print()