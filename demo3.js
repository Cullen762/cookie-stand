// not showing up in html
// first and Pike
// var pike = {
//   name: 'pike',
//   minCustHour: 23,
//   maxCustHour:65,
//   avgCkieHr:6.3,
//   ranCustHr:[],
//   cookiesSoldHr:[],
//   totalCookies:10,
//   //The methods (properties that act like functions) are built with a for loop that cycles through the hoursOpen array. It uses Math.floor(Math.random) and this. to calculate the number of customers min/max and  .push to populate the array.  //method for random customers
//   calcRanCustHr: function(){
//     for(var i = 0 ; i < hoursOpen.length; i++){
//       this.ranCustHr.push(Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour));
//       //console.log(this.ranCustHr[i]);
//     }
//
//   },
//
//   calcCookiesSoldHr: function(){
//     for(var j = 0; j < hoursOpen.length; j++){
//       console.log(Math.round(this.avgCkieHr * this.ranCustHr[j]));
//       this.cookiesSoldHr.push(Math.round(this.avgCkieHr * this.ranCustHr[j]));
//     }
//
//   },
//   //augmented assignement
//   //totalCookies
//   calcTotalCookies: function(){
//     for( var l = 0 ; l < hoursOpen.length; l++){
//       this.totalCookies += this.cookiesSoldHr[l];
//     }
//   },
//   //the render function, this dynamically populates the html page.
//   render: function(){
//     var pike = document.getElementById('pike');
//     var fnp = document.getElementById('fnp');
//     //var total = document.getElementsById('total');
//     this.calcRanCustHr();
//     this.calcCookiesSoldHr();
//     this.calcTotalCookies();
//     //appends the name of the object in the size h3 to the linked html sheet
//     var h3EL = document.createElement('h3');
//     h3EL.textContent = this.name;
//     fnp.appendChild(h3EL);
//     //appends the list, populated with random numbers created by the calcCookiesSldHr and calcranCustHr methods
//     for(var k = 0; k < hoursOpen.length; k++){
//       var liEl = document.createElement('li');
//       console.log(this.cookiesSoldHr[k]);
//       liEl.textContent = hoursOpen[k] + ' : ' + this.cookiesSoldHr[k] + ' cookies ';
//
//       pike.appendChild(liEl);
//     }
//     //appends total element to bottom of page
//     var totalEl = document.createElement('li');
//     totalEl.textContent = ' total ' + this.totalCookies;
//
//     pike.appendChild(totalEl);
//   }
// };
//
// pike.render();
//
// // alki
// var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
//
// var alki = {
//   name: 'alki',
//   minCustHour: 2,
//   maxCustHour:16,
//   avgCkieHr:4.6,
//   ranCustHr:[],
//   cookiesSoldHr:[],
//   totalCookies:10,
//   //The methods (properties that act like functions) are built with a for loop that cycles through the hoursOpen array. It uses Math.floor(Math.random) and this. to calculate the number of customers min/max and  .push to populate the array.  //method for random customers
//   calcRanCustHr: function(){
//     for(var i = 0 ; i < hoursOpen.length; i++){
//       this.ranCustHr.push(Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour));
//       //console.log(this.ranCustHr[i]);
//     }
//
//   },
//
//   calcCookiesSoldHr: function(){
//     for(var j = 0; j < hoursOpen.length; j++){
//       console.log(Math.round(this.avgCkieHr * this.ranCustHr[j]));
//       this.cookiesSoldHr.push(Math.round(this.avgCkieHr * this.ranCustHr[j]));
//     }
//
//   },
//   //augmented assignement
//   //totalCookies
//   calcTotalCookies: function(){
//     for( var l = 0 ; l < hoursOpen.length; l++){
//       this.totalCookies += this.cookiesSoldHr[l];
//     }
//   },
//   //the render function, this dynamically populates the html page.
//   render: function(){
//     var alkiShop = document.getElementById('alki');
//     var alk = document.getElementById('alk');
//     //var total = document.getElementsById('total');
//     this.calcRanCustHr();
//     this.calcCookiesSoldHr();
//     this.calcTotalCookies();
//     //appends the name of the object in the size h3 to the linked html sheet
//     var h3EL = document.createElement('h3');
//     h3EL.textContent = this.name;
//     alkiShop.appendChild(h3EL);
//     //appends the list, populated with random numbers created by the calcCookiesSldHr and calcranCustHr methods
//     for(var k = 0; k < hoursOpen.length; k++){
//       var liEl = document.createElement('li');
//       //console.log(this.cookiesSoldHr[k]);
//       liEl.textContent = hoursOpen[k] + ' : ' + this.cookiesSoldHr[k] + ' cookies ';
//
//       alkiShop.appendChild(liEl);
//     }
//     //appends total element to bottom of page
//     var totalEl = document.createElement('li');
//     totalEl.textContent = ' total ' + this.totalCookies;
//
//     alkiShop.appendChild(totalEl);
//   }
// };
//
// alki.render();
//
// //Seattle Center
// var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// // first and Pike
// var seattleCenter = {
//   name: 'Seattle Center',
//   minCustHour: 11,
//   maxCustHour:38,
//   avgCkieHr:3.7,
//   ranCustHr:[],
//   cookiesSoldHr:[],
//   totalCookies:10,
//   //The methods (properties that act like functions) are built with a for loop that cycles through the hoursOpen array. It uses Math.floor(Math.random) and this. to calculate the number of customers min/max and  .push to populate the array.  //method for random customers
//   calcRanCustHr: function(){
//     for(var i = 0 ; i < hoursOpen.length; i++){
//       this.ranCustHr.push(Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour));
//       //console.log(this.ranCustHr[i]);
//     }
//
//   },
//
//   calcCookiesSoldHr: function(){
//     for(var j = 0; j < hoursOpen.length; j++){
//       console.log(Math.round(this.avgCkieHr * this.ranCustHr[j]));
//       this.cookiesSoldHr.push(Math.round(this.avgCkieHr * this.ranCustHr[j]));
//     }
//
//   },
//   //augmented assignement
//   //totalCookies
//   calcTotalCookies: function(){
//     for( var l = 0 ; l < hoursOpen.length; l++){
//       this.totalCookies += this.cookiesSoldHr[l];
//     }
//   },
//   //the render function, this dynamically populates the html page.
//   render: function(){
//     var spaceNeedle = document.getElementById('seaCenter');
//     var seaCenter = document.getElementById('sec');
//     //var total = document.getElementsById('total');
//     this.calcRanCustHr();
//     this.calcCookiesSoldHr();
//     this.calcTotalCookies();
//     //appends the name of the object in the size h3 to the linked html sheet
//     var h3EL = document.createElement('h3');
//     h3EL.textContent = this.name;
//     spaceNeedle.appendChild(h3EL);
//     //appends the list, populated with random numbers created by the calcCookiesSldHr and calcranCustHr methods
//     for(var k = 0; k < hoursOpen.length; k++){
//       var liEl = document.createElement('li');
//       //console.log(this.cookiesSoldHr[k]);
//       liEl.textContent = hoursOpen[k] + ' : ' + this.cookiesSoldHr[k] + ' cookies ';
//
//       spaceNeedle.appendChild(liEl);
//     }
//     //appends total element to bottom of page
//     var totalEl = document.createElement('li');
//     totalEl.textContent = ' total ' + this.totalCookies;
//
//     spaceNeedle.appendChild(totalEl);
//   }
// };
//
// seattleCenter.render();
//
// //capitol hill
// var capitolHill = {
//   name: 'Capitol Hill',
//   minCustHour: 20,
//   maxCustHour:38,
//   avgCkieHr:2.3,
//   ranCustHr:[],
//   cookiesSoldHr:[],
//   totalCookies:10,
//   //The methods (properties that act like functions) are built with a for loop that cycles through the hoursOpen array. It uses Math.floor(Math.random) and this. to calculate the number of customers min/max and  .push to populate the array.  //method for random customers
//   calcRanCustHr: function(){
//     for(var i = 0 ; i < hoursOpen.length; i++){
//       this.ranCustHr.push(Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour));
//       //console.log(this.ranCustHr[i]);
//     }
//
//   },
//
//   calcCookiesSoldHr: function(){
//     for(var j = 0; j < hoursOpen.length; j++){
//       console.log(Math.round(this.avgCkieHr * this.ranCustHr[j]));
//       this.cookiesSoldHr.push(Math.round(this.avgCkieHr * this.ranCustHr[j]));
//     }
//
//   },
//   //augmented assignement
//   //totalCookies
//   calcTotalCookies: function(){
//     for( var l = 0 ; l < hoursOpen.length; l++){
//       this.totalCookies += this.cookiesSoldHr[l];
//     }
//   },
//   //the render function, this dynamically populates the html page.
//   render: function(){
//     var capHill = document.getElementById('cph');
//     var ch = document.getElementById('ch');
//     //var total = document.getElementsById('total');
//     this.calcRanCustHr();
//     this.calcCookiesSoldHr();
//     this.calcTotalCookies();
//     //appends the name of the object in the size h3 to the linked html sheet
//     var h3EL = document.createElement('h3');
//     h3EL.textContent = this.name;
//     capHill.appendChild(h3EL);
//     //appends the list, populated with random numbers created by the calcCookiesSldHr and calcranCustHr methods
//     for(var k = 0; k < hoursOpen.length; k++){
//       var liEl = document.createElement('li');
//       //console.log(this.cookiesSoldHr[k]);
//       liEl.textContent = hoursOpen[k] + ' : ' + this.cookiesSoldHr[k] + ' cookies ';
//
//       capHill.appendChild(liEl);
//     }
//     //appends total element to bottom of page
//     var totalEl = document.createElement('li');
//     totalEl.textContent = ' total ' + this.totalCookies;
//
//     capHill.appendChild(totalEl);
//   }
// };
//
// capitolHill.render();
//
// //SeaTac Airport
// var seaTacAirport = {
//   name: 'SeaTac Airport',
//   minCustHour: 3,
//   maxCustHour:24,
//   avgCkieHr:1.2,
//   ranCustHr:[],
//   cookiesSoldHr:[],
//   totalCookies:10,
//   //The methods (properties that act like functions) are built with a for loop that cycles through the hoursOpen array. It uses Math.floor(Math.random) and this. to calculate the number of customers min/max and  .push to populate the array.  //method for random customers
//   calcRanCustHr: function(){
//     for(var i = 0 ; i < hoursOpen.length; i++){
//       this.ranCustHr.push(Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour));
//       //console.log(this.ranCustHr[i]);
//     }
//
//   },
//
//   calcCookiesSoldHr: function(){
//     for(var j = 0; j < hoursOpen.length; j++){
//       console.log(Math.round(this.avgCkieHr * this.ranCustHr[j]));
//       this.cookiesSoldHr.push(Math.round(this.avgCkieHr * this.ranCustHr[j]));
//     }
//
//   },
//   //augmented assignement
//   //totalCookies
//   calcTotalCookies: function(){
//     for( var l = 0 ; l < hoursOpen.length; l++){
//       this.totalCookies += this.cookiesSoldHr[l];
//     }
//   },
//   //the render function, this dynamically populates the html page.
//   render: function(){
//     var seaTac = document.getElementById('airport');
//     var sta = document.getElementById('sta');
//     //var total = document.getElementsById('total');
//     this.calcRanCustHr();
//     this.calcCookiesSoldHr();
//     this.calcTotalCookies();
//     //appends the name of the object in the size h3 to the linked html sheet
//     var h3EL = document.createElement('h3');
//     h3EL.textContent = this.name;
//     seaTac.appendChild(h3EL);
//     //appends the list, populated with random numbers created by the calcCookiesSldHr and calcranCustHr methods
//     for(var k = 0; k < hoursOpen.length; k++){
//       var liEl = document.createElement('li');
//       //console.log(this.cookiesSoldHr[k]);
//       liEl.textContent = hoursOpen[k] + ' : ' + this.cookiesSoldHr[k] + ' cookies ';
//
//       seaTac.appendChild(liEl);
//     }
//     //appends total element to bottom of page
//     var totalEl = document.createElement('li');
//     totalEl.textContent = ' total ' + this.totalCookies;
//
//     seaTac.appendChild(totalEl);
//   }
// };
//
// seaTacAirport.render();
