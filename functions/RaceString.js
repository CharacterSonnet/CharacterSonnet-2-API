//This function turns the name of a race into the necessary querystring for that race's data and options
const raceString = (raceName) => {
    return `query {race(filter: {name: "${raceName}"}){name}}`;
};

module.exports = raceString;