function getMiddle(s)
{
var lengthOfString= s.length;

var middleIndex= Math.round(lengthOfString/2);

if(lengthOfString%2==0)
{
return s[middleIndex-1]+s[middleIndex];
}
else
return s[middleIndex-1];
}

