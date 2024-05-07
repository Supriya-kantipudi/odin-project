class Complex{
    constructor(realpart,complexpart){
        this.realpart = realpart;
        this.complexpart = complexpart;
    }

    add(realpart,complexpart){
        this.complexpart = this.complexpart + complexpart;
        this.realpart = this.realpart + realpart;
    }

    get realpart(){
        return this._realpart;
    }

    set realpart(newrealPart){
        this._realpart = newrealPart;
    }
}

let num = new Complex(23,45);
console.log(num.realpart ,num.complexpart);
num.add(23,23);
num.realpart = 40;


console.log(num.realpart ,num.complexpart);