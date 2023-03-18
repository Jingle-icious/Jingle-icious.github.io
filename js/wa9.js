
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'It was 112 fahrenheit outside, so insertx: decided to go for a walk. When he got to inserty:, he stood still, thinking for a moment, then insertz:. Jingle saw the whole thing, but honestly couldn`t care less — insertx: was a human, Jingle was a cat, and she only cared about sleeping.';
const insertX = ['Gabe', 'Gavin', 'Tyler'];
const insertY = ['his high school', 'his house', 'Evie`s dorm'];
const insertZ = ['decided to chug 80 mg of caffeine', 'started explaining the intricacies of Genshin Impact ', 'realized he had an essay due that he hadn`t started'];

randomize.addEventListener ('click', result);

function result() {
    let newStory =storyText;

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll('insertx:', xItem);
    newStory = newStory.replaceAll('inserty:', yItem);
    newStory = newStory.replaceAll('insertz:', zItem);

    if (customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replaceAll('Jingle', name);
    }

    if (document.getElementById("uk").checked) {
        const weight = `${Math.round(300*0.0714286)} stone`;
        const temperature =  `${Math.round((112-32) * 5 / 9)} centigrade`;
        newStory = newStory.replaceAll('112 fahrenheit', temperature);
        newStory = newStory.replaceAll('300 pounds', weight);
    }

    story.textContent = newStory; 
    story.style.visibility = 'visible';
}