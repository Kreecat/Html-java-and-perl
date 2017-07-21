console.log('we hear you');

var table_data = [ 
  { first_name : 'Rose',
    last_name  : 'Tyler',
    home       : 'Earth' },
  { first_name : 'Zoe',
    last_name  : 'Heriot',
    home       : 'Space Station W3'},
  { first_name : 'Jo',
    last_name  : 'Grant',
    home       : 'Earth'},
  { first_name : 'Leela',
    last_name  : null,
    home       : 'Unspecified'},
  { first_name : 'Romana',
    last_name  : null,
    home       : 'Gallifrey'},
  { first_name : 'Clara',
    last_name  : 'Oswald',
    home       : 'Earth'},
  { first_name : 'Adric',
    last_name  : null,
    home       : 'Alzarius'},
  { first_name : 'Susan',
    last_name  : 'Foreman',
    home       : 'Gallifrey'} ];

var tBody = document.getElementById('tBody'),
    tHead = document.getElementById('tHead');

var trHead = document.createElement('tr');

var thFname = document.createElement('th'),
    thLname = document.createElement('th'),
    thHome = document.createElement('th');

thFname.innerHTML = 'First Name';
thLname.innerHTML = 'Last Name';
thHome.innerHTML = 'Home';

trHead.appendChild(thFname);
trHead.appendChild(thLname);
trHead.appendChild(thHome);

tHead.appendChild(trHead);

for (var i = 0; i < Object.keys(table_data).length; i++) {

    var tr = "<tr>";

    // trying to switch this, functionality not working fully
    // if (table_data[i].last_name === 'null'){
    //   table_data[i].last_name = 'No Last Name';
    // } 

    tr += "<td>" + table_data[i].first_name + "</td>" + "<td>" + table_data[i].last_name + "</td>" + "<td>" + table_data[i].home + "</td></tr>";
    tBody.innerHTML += tr;
}

// For the bonus, attempting to make it so when you click the button it would bring up just people from earth here, however wont pull up the earth through the if statement
// var earth = document.getElementById("earth")

// earth.addEventListener('click', function(e){
//   if(table_data[i].home === 'Earth'){
//     for (var i = 0; i < Object.keys(table_data).length; i++){
//       var tbl = document.createElement('table'),
//           tBody = document.createElement('tbody'),
//           tr = document.createElement('tr');

//       tr += "<td>" + table_data[i].first_name + "</td>" + "<td>" + table_data[i].last_name + "</td></tr>";
//       tBody.innerHTML += tr;
//     }
//   }
// })











