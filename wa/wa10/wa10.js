const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = [`Connor_Me_Prom.jpg`, `Seneca_and_Me_Pumpkin.jpg`, `Copper_Opening.jpg`, `Gabe_Gavin_Tyler.jpg`, `Brady_Shrek.jpg` , `Alex_Me_Ski.jpg`, `Erick_Jenga.jpg` , `Gabe_Me_Ski.jpg`, `Ethan_Gabe_Brayson.jpg`, `Shay_and_I.jpg`];
const alts = {
  'Connor_Me_Prom.jpg' : 'Connor and I Messing Around for Prom Photos',
  'Seneca_and_Me_Pumpkin.jpg' : 'Seneca and I at the Pumpkin Patch',
  'Copper_Opening.jpg' : 'Aidan, Gabe and I at Copper Mountain Opening Day',
  'Gabe_Gavin_Tyler.jpg' : 'Gavin, Tyler, and Gabe Being Weird',
  'Brady_Shrek.jpg' : 'Brady With a Shrek Filter',
  'Alex_Me_Ski.jpg' : 'Alex and I at Snowbird', 
  'Erick_Jenga.jpg' : 'Erick Proud of His Jenga Stack',
  'Gabe_Me_Ski.jpg' : 'Gabe and I at Winter Park',
  'Ethan_Gabe_Brayson.jpg' : 'Ethan, Gabe, and Brayson at 8th Grade Graduation', 
  'Shay_and_I.jpg' : 'Shaylie and I getting Coffee',
}

/* Looping through images */

for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${image}`);
  newImage.setAttribute('alt', alts[image]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});

