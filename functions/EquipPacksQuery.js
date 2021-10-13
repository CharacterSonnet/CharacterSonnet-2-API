const equipPacksQuery = () => {
  return `
    query {
      equipmentCategory(filter: {index: "equipment-packs"}){
        name
        index
        equipment {
          name
          contents {
            item {
              name
            }
          }
        }
      }
    }
  `;
};

module.exports = equipPacksQuery;