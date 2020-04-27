// VARIABLES
const magicalUnderlines = Array.from(document.querySelectorAll('.underline--magical'));

const gradientAPI = 'https://manokhin.live/gradient.json';

const gradients = [
    {
      "name": "warmFlame",
      "direction": "90deg",
      "colors": ["#ff9a9e", "#fad0c4"],
      "positions": ["0%", "100%"]
    },
    {
      "name": "youngPassion",
      "direction": "90deg",
      "colors": ["#ff8177", "#ff867a", "#ff8c7f", "#f99185", "#cf556c", "#b12a5b"],
      "positions": ["0%", "0%", "21%", "52%", "78%", "100%"]
    },
    {
      "name": "newLife",
      "direction": "to right",
      "colors": ["#43e97b", "#38f9d7"],
      "positions": ["0%", "100%"]
    },
    {
      "name": "temptingAzure",
      "direction": "120deg",
      "colors": ["#84fab0", "#8fd3f4"],
      "positions": ["0%", "100%"]
    },
    {
      "name": "ripeMalinka",
      "direction": "120deg",
      "colors": ["#f093fb", "#f5576c"],
      "positions": ["0%", "100%"]
    },
    {
      "name": "trueSunset",
      "direction": "to right",
      "colors": ["#fa709a", "#fee140"],
      "positions": ["0%", "100%"]
    },
    {
      "name": "plumPlate",
      "direction": "135deg",
      "colors": ["#667eea", "#764ba2"],
      "positions": ["0%", "100%"]
    },
    {
      "name": "deepBlue",
      "direction": "to right",
      "colors": ["#6a11cb", "#2575fc"],
      "positions": ["0%", "100%"]
    },
    {
      "name": "sweetPeriod",
      "direction": "to top",
      "colors": ["#3f51b1", "#5a55ae", "#7b5fac", "#8f6aae", "#a86aa4", "#cc6b8e", "#f18271", "#f3a469", "#f7c978"],
      "positions": ["0%", "13%", "25%", "38%", "50%", "62%", "75%", "87%", "100%"]
    }
  ];
// HELPER FUNCTIONS

// 1. Get random number in range. Used to get random index from array.
const randNumInRange = max => Math.floor(Math.random() * (max - 1));

// 2. Merge two separate array values at the same index to 
// be the same value in new array.
const mergeArrays = (arrOne, arrTwo) => arrOne
  .map((item, i) => `${item} ${arrTwo[i]}`)
  .join(', ');

// 3. Curried function to add a background to array of elms
const addBackground = (elms) => (color) => {
  elms.forEach(el => {
    el.style.backgroundImage = color;
  });
}


// 5. Partial Application of addBackground to always apply 
// background to the magicalUnderlines constant
const addBackgroundToUnderlines = addBackground(magicalUnderlines);

// GRADIENT FUNCTIONS

// 1. Build CSS formatted linear-gradient from API data
const buildGradient = (obj) => `linear-gradient(${obj.direction}, ${mergeArrays(obj.colors, obj.positions)})`;

// 2. Get single gradient from data pulled in array and
// apply single gradient to a callback function
const applyGradient = async(url, callback) => {
  const data = gradients;
  const gradient = buildGradient(data[randNumInRange(data.length)]);
  callback(gradient);
}

// RESULT
applyGradient(gradientAPI, addBackgroundToUnderlines);