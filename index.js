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
 list = []
 list = list + i+1+'. '+line[i]; 
 return 'The line is currently'+list
}