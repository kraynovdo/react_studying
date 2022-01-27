let condition1 = true;
let condition2 = true;
let condition3 = true;
let code1 = function(){};
let code2 = function(){};
let code3 = function(){};
let i;

//region If
if (a>5)
    code1();

if (b.x > 6)
{
    code1();
    code2();
}

if (condition1 &&
    condition2 &&
    condition3)
{
    code1();
}

if (condition1)
{
    code1();
    code2();
}

if (condition1)
    code1()
else
{
    code1();
    code2();
}

if (a>b || c<d)
{
    code1();
    code2();
}
else if (condition2)
{
    code2();
    code1();
}

//endregion

//region Function

let tiny = function(){
    code1();
};

function tiny(){ code1(); }

function tiny(){
    code2();
}

function long_args(a1, a2, a3,
    a4)
{
    code1();
    code2();
}

printf("hello %s\n", "world");

//endreging

//region Switch

switch (condition1)
{
case 1: code1(); break;
case 2:
    code1();
    code2(); 
    break;
default: code2();    
}

//endregion

//region loops 
for (i = 0; i<5; i++)
{
    code1();
}

while (i<10)
{
    code2();
}

//endregion

//try catch
try { code1(); } catch(e){ code2(); }

try {
    code1();
    code2();
}
catch(e){
    code3();
}
//endregion

//region operators
a = b;
x += y;
z = a+b+c;
msg = 'this '+
    'is a long string.';
//endregion

//region objects 
let node = {
    name: 'server',
    status: 'updated',
    setup_time: 10*1000,
};
let node = {name: 'server', port: 42};
//endregion

//ALL FILE IS A FUNCTION
(function($, chrome, console){

code1();
code2();

})(jQuery, chrome, console);


//region Arrow

e.on('play', ()=>{
    player.start();
    started = 1;
}

socket.on('connect', ()=>state = 'CONNECTED');

docs.forEach(doc=>add(doc));

//endregion

//region generators
etask(function*(){

});

etask(function*get_request(){
...
});
//endregion


//region Classes
class A {
    prop(){
        return etask(function*(){
            code;
        });
    }
}
//endregion



