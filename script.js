let year = 2021;


switch (true) {
    case ((year%4==0)&&(year%100==0)&&(year%400==0)):
        console.log(year+" is a leap year");
        
        break;
    case ((year%4!==0)&&(year%100!==0)&&(year%400!==0)):
        console.log(year+" is not a leap year");
        
        break;
    default:
        console.log("Enter valid input!!");

}