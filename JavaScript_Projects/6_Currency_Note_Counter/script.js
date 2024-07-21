
{
    let myArray = [0,0,0,0,0,0,0,0,0,0];

    let amount = remainingAmount= 518;

    while(remainingAmount != 0)
    {
        if(remainingAmount >= 5000)
        {
            remainingAmount = remainingAmount % 5000;
            myArray[0]++; 
        }
        else if(remainingAmount >= 1000)
        {
            remainingAmount = remainingAmount % 1000;
            myArray[1]++; 
        }
        else if(remainingAmount >= 500)
        {
            remainingAmount = remainingAmount % 500;
            myArray[2]++; 
        }
        else if(remainingAmount >= 100)
        {
            remainingAmount = remainingAmount % 100;
            myArray[3]++;             
        }
        else if(remainingAmount >= 50)
        {
            remainingAmount = remainingAmount % 50;
            myArray[4]++; 
        }
        else if(remainingAmount >= 20)
        {
            remainingAmount = remainingAmount % 20;
            myArray[5]++; 
        }
        else if(remainingAmount >= 10)
        {
            remainingAmount = remainingAmount % 10;
            myArray[6]++; 
        }
        else if(remainingAmount >= 5)
        {
            remainingAmount = remainingAmount % 5;
            myArray[7]++; 
        }
        else if(remainingAmount >= 2)
        {
            remainingAmount = remainingAmount % 2;
            myArray[8]++; 
        }
        else
        {
            remainingAmount = remainingAmount % 1;
            myArray[9]++; 
        }
    }


    document.write("<br /> 5000 rs Note: " + myArray[0] + "<br /> 1000 rs Note: " +  myArray[1] + "<br /> 500 rs Note: " + 
    myArray[2] + "<br /> 100 rs Note: " + myArray[3] + "<br /> 50 rs Note: " +  myArray[4] + "<br /> 20 rs Note: " + 
    myArray[5] + "<br /> 10 rs Note: " + myArray[6] +  "<br /> 5 rs Note: " + myArray[7] + "<br /> 2 rs Note: " + 
    myArray[8] + "<br /> 1 rs Note: " + myArray[9]);

    document.write("<br />Actual Amount is = ", amount);
}