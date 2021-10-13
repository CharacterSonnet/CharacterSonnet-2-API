const holySymbolQuery = () => {
  return `
    query {
      equipmentCategory(filter: {index: "holy-symbols"}) {
        name
        index
        equipment{
          name
        }
      }
  }
  `;
};

module.exports = holySymbolQuery;