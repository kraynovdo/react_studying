let condition1 = true;
let condition2 = true;
let condition3 = true;
let code1 = function(){}
let code2 = function(){}

//region If
if (condition1)
    code1();

if (condition1)
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

if (condition1)
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
