class Fraction {
    numerator;
    denumerator;

    constructor(numerator, denumerator) {
        this.numerator = numerator;
        this.denumerator = denumerator;
    }

    multiplyBy(param) {
        var type = typeof param;
        if (type === "object") {
            this.numerator = this.numerator * param.numerator;
            this.denumerator = this.denumerator * param.denumerator;
        }
        else if(type === "number" && param > 0){
            this.numerator = this.numerator * param;
        }
    }

    static multiply(x,y){
        var numeratorNew = x.numerator * y.numerator;
        var denumeratorNew = x.denumerator * y.denumerator;
        return new Fraction(numeratorNew, denumeratorNew);
    }

    print() {
        console.log(this.numerator.toString() + "/" + this.denumerator.toString());
    }
}
var u = new Fraction(2, 3);
console.log("print(): ulamek u")
u.print();
var v = new Fraction(2, 6);
console.log("print(): ulamek v")
v.print();
u.multiplyBy(v);
console.log("po wywołaniu multiplyBy(v) - ułamek v")
u.print();
u.multiplyBy(3)
console.log("po wywołaniu multiplyBy(i) - liczba całkowita, dodatnia, i=3")
u.print();
var fraction = Fraction.multiply(u, v);
console.log("po wywolaniu multiply(x,y) - x=u, y=v")
fraction.print();