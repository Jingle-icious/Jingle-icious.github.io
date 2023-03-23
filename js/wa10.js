const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ['Connor_and_I_Prom.jpg' , 'Gabe_Tyler_Gavin_Funny.jpg' , 'Brady_is_Funny.jpg' , 'Shay_and_I_Coffee.jpg' , 'Aidan_Gabe_Me_Skiing.jpg'];
const alts = {
    'Connor_and_I_Prom.jpg' : 'Connor and I Messing Around for Prom Photos',
    'Gabe_Tyler_Gavin_Funny.jpg' : 'Gabe, Gavin, and Tyler Being Weird',
    'Brady_is_Funny.jpg' : 'Brady With a Shrek Filter',
    'Shay_and_I_Coffee.jpg' : 'Shaylie and I at Starbucks',
    'Aidan_Gabe_Me_Skiing.jpg' : 'Aidan, Gabe and I on Copper Opening Day'
}

/* Looping through images */

for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `img/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e=> {
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