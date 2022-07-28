/*const person = {
    firstNmae: "oluwapelumi",
    lastNmae: "bamigboye",
    conjuction: "is",
    Status1:  "online",
    status2: "offline",
}
person.name = function(){
    return (this.firstNmae + " " + this.lastNmae + " " + this.conjuction + " " + this.Status1);
}
person.offline = function(){
    return (this.firstNmae + " " + this.lastNmae + " " +  this.conjuction + " " + this.status2);
}
console.log(person.name());*/

//booting object
const Mhistersax = {
    namEoFUser: '  Mhistersax',
    deviceName:  'Linux Operating System',
    Processor:  '64bits operating system',
    deviceRam:   '6Gb RAM of storage',
    deviceNmae:   'Acer chrome book',
    Battery:      '100%',
}  

Mhistersax.greating = function(){
    return (this.namEoFUser);
}

document.getElementById("nameOfUser").innerHTML = Mhistersax.greating();
document.getElementById("operating-system").innerHTML = Mhistersax.Processor;
document.getElementById("battery").innerHTML = Mhistersax.Battery;
// console.log(Mhistersax.greating());
