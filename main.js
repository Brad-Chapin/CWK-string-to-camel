function toCamelCase(str){
  let parts, newStr = "";
  if (str.indexOf("-") != -1){
    parts = str.split("-");
  } else {
    parts = str.split("_");
  }
  newStr += parts[0];
  for (let i = 1; i < parts.length; i++){
    let c = parts[i];
    newStr += c[0].toUpperCase() + c.substr(1);
  }
  return newStr;
}
