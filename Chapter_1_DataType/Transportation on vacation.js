function rentalCarCost(d) 
{
var totalDays=d;
var perDayRent = 40;
var totalRent=0;
var finalAmount=0;

if(totalDays<3)
{
finalAmount=totalDays*perDayRent; 
}
else if(totalDays >=3 && totalDays <7)
{
totalRent=totalDays*perDayRent; 
finalAmount = totalRent-20;
}
else 
{
totalRent=totalDays*perDayRent; 
finalAmount = totalRent-50;
}
return finalAmount;
}