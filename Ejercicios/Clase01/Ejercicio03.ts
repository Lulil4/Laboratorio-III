function myFunction(myNumber : number, myString? : string) : void{

    if (myNumber != 0)
    {
    if (myString)
    {
        for (let i : number = 0; i < myNumber; i++)
        {
            console.log(myString);
        }
    }
    else
    {
        console.log(1 / myNumber);
    }
}
else
{
    console.log("The number is 0");
}
}

myFunction(5);