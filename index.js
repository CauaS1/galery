const people = document.querySelector("#people");
const wall = document.querySelector("#wallpaper");
const technology = document.querySelector("#technology");
const police = document.querySelector("#police");


const mainPeople = document.querySelector('.mainPeople');
const mainWall = document.querySelector('.mainWall');
const mainTech = document.querySelector('.mainTech');
const mainPolice = document.querySelector('.mainPolice');




people.addEventListener('click', () => {
  people.classList.add('selected');
  mainPeople.id = 'actived';

  mainPolice.id = '';
  mainTech.id = '';
  mainWall.id = ''; 


  wall.classList.remove('selected');
  police.classList.remove('selected');
  technology.classList.remove('selected');
})

wall.addEventListener('click', () => {
  wall.classList.add('selected');
  mainWall.id = 'actived';

  mainPeople.id = '';
  mainPolice.id = '';
  mainTech.id = '';

  people.classList.remove('selected');
  police.classList.remove('selected');
  technology.classList.remove('selected');
  


})

technology.addEventListener('click', () => {
  technology.classList.add('selected');
  mainTech.id = 'actived';

  mainPeople.id = '';
  mainWall.id = '';
  mainPolice.id = ''; 

  wall.classList.remove('selected');
  people.classList.remove('selected');
  police.classList.remove('selected');
})

police.addEventListener('click', () => {
  police.classList.add('selected');
  mainPolice.id = 'actived';

  mainPeople.id = '';
  mainWall.id = '';
  mainTech.id = ''; 

  wall.classList.remove('selected');
  people.classList.remove('selected');
  technology.classList.remove('selected');
})

//man3, man2, girls 2 3 4
