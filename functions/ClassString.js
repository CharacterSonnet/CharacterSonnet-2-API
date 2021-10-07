//this function takes a classname as input and creates a graphQL querystring that will acquire all the necessary information for the correct class. 
const classString = (className) => {
  return `query {class(filter: {name:"${className}"}) { name }}`;  
};

module.exports = classString;