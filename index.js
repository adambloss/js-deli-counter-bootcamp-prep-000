var katzDeli = [];
function takeANumber(katzDeli, name) {
  katzDeli.push(name)

  return 'Welcome, ' +name+'. You are number '+
  katzDeli.length+' in line.'
}
function nowServing(line){
  if (line.length>0){
    return 'Currently serving ' +
    line.shift(0)+'.'
  }
  else {
    return 'There is nobody waiting to be served!'
  }
}
function currentLine(line) {
'The line is currently';
  if (line.length>0){
   + ': ';
   for(var i = 0;i<line.length;i++){
  var name = line[i];
  var a = +i+1+'. ' + name+', ';
  return a
 }
}
else {
  return +' empty .';
}
}
