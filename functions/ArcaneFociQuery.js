const arcaneFociQuery = () => {
  return `
    query {
      equipmentCategory(filter: {index: "arcane-foci"}){
        name
        index
        equipment {
          name
        }
      }
    }
  `;
};

module.exports = arcaneFociQuery;