const druidicFociQuery = () => {
  return `
    query{
      equipmentCategories(filter:{index:"druidic-foci"}){
        name
        index
        equipment{
          name
        }
      }
    }
  `;
};

module.exports = druidicFociQuery;