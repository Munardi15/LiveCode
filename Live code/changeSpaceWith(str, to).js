function changeSpaceWith(str, to){
  var gabung = str.split(' ').join(to);
  return gabung;
}

console.log(changeSpaceWith('Steve fox', '-'));
console.log(changeSpaceWith('Sergei Dragunov', '+'));