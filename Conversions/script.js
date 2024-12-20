function temperature() {
    var celsius = document.getElementById("celsius").value; // Fixed ID
    var fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("fahrenheit").value = fahrenheit; // Fixed ID
}

function weight() {
    var kilogram = document.getElementById("kilo").value; // Fixed ID
    var pounds = kilogram * 2.20462;
    document.getElementById("pounds").value = pounds; // Fixed ID
}

function distance() {
    var km = document.getElementById("km").value; // Correct ID
    var miles = km * 0.621371;
    document.getElementById("miles").value = miles; // Correct ID
}
wget https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0101EN-SkillsNetwork/labs/Project/Final_Project_V3/finalproject_startercode.zip