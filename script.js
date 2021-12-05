var calci={
    'sum':function(){
        var total=this.a+this.b;
        console.log(total);
    },
    'sub':function(){
        var total=this.a-this.b;
        console.log(total);
    },
    'mul':function(){
        var total= this.a*this.b;
        console.log(total);
    },
    'div':function(){
        var total=this.a/this.b;
        console.log(total);
    },
}
var value1={
    'a':5,
    'b':4,
};
var value2={
    'a':222,
    'b':43,
};
var value3={
    'a':22,
    'b':2,
};
var value4={
    'a':44,
    'b':4,
};
var calculation1=calci.sum.bind(value1);
calculation1();
var calculation2=calci.sub.bind(value2);
calculation2();
var calculation3=calci.mul.bind(value3);
calculation3();
var calculation4=calci.div.bind(value4);
calculation4();
