class Movie {
    constructor(title, studio, rating) {
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
printname(){
    return this.title;
}    
}
let m1=new Movie("Jurassic World Dominion", "Universal Pictures", "PG-13");
console.log(m1);
let m2=new Movie("Casino Royale", "Eon Productions", "PG-13");
console.log(m2);
console.log(`Movie title is : ${m1.printname()}, ${m2.printname()}`);