// FORK this starter file and save it to your own Repl.it account.
const input = require('readline-sync');
let astronautCount = input.question("How many astronauts are in the shuttle?: \n")

// Declare and initialize the 12 variables here:
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
//let astronautCount = 7
let astronautStatus =	"ready"
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000
let shuttleMassKg = 74842.31;
let totalMassKg	= crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius	= -225;
let fuelLevel	= 100;
let weatherStatus	= "clear";
let clearForTakeOff = "yes";
let line = "-------------------------------------";

// Write code to generate the LC04 report here:
console.log(line + "\n" + "> LC04 - LAUNCH CHECKLIST" + "\n" + line + "\n" + "Date: " + date + "\n" + line + "\n" + "> ASTRONAUT INFO" + "\n" + line + "\n" + "* Count: " + astronautCount + "\n" + line + "\n" + "* Status: " + astronautStatus + "\n" + line + "\n" + "> FUEL DATA" + "\n" + line + "\n" + "* Fuel temp celsius: " + fuelTempCelsius + "C" + "\n" + "* Fuel level: " + fuelLevel + "%" + "\n" + line + "\n" + "> MASS DATA" + "\n" + line + "\n" + "* Crew mass: " + crewMassKg + "\n" + "* Fuel mass: " + fuelMassKg + "\n" + "* Shuttle mass: " + shuttleMassKg + "\n" + "* Total mass: " + shuttleMassKg + "\n" + line + "\n" + "> FLIGHT PLAN" + "\n" + line + "\n" + "* weather: " + weatherStatus + "\n" + line + "\n" + "> OVERALL STATUS" + "\n" + line + "\n" + "* Clear for takeoff: " + clearForTakeOff)


// When done, have your TA check your code.

// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.

