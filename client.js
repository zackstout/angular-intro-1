
var myFirstApp = angular.module("firstAng", []);

myFirstApp.controller('commandCenter', function() {
  var stargate = this;
  stargate.msg = "what up";

  stargate.currentPerson = '';

  stargate.append = function() {
    console.log(stargate.input1);
    var newPerson = {
      name: stargate.input1,
      github: stargate.input2
    };
    people.push(newPerson);
    console.log(people);
  };

  stargate.display = function(person) {
    console.log(person);
    stargate.currentPerson = person.name;
  };

  var people = [{name: 'Chris', github: 'christopher-black'}, {name: 'Zack', github: 'zackstout'}];
  stargate.people = people;
});

function randomPerson() {
  return Math.floor(Math.random() * 16);
}
