function countWords(str) 
{
  str = str.trim();
  if (str === '') 
  {
  return 0;
  }
  else
  return str.split(/\s+/).length;
}

