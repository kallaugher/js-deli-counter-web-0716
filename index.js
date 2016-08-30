var katzDeli = [];

function takeANumber(katzDeliLine, name){
  var position = katzDeliLine.length + 1
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var frontPerson = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${frontPerson}.`;
  }
}

function currentLine(line){
  if (line.length === 0){
    return "The line is currently empty.";
  } else {
    var lineString = "The line is currently:"
    for(var i=0; i < line.length; i++){
      lineString += ` ${i+1}. ${line[i]},`;
    }
  }
  return lineString.slice(0, -1)
}
