const armorQuery = () => {
  return `
    query {
      equipmentCategory(filter: {index: "armor"}) {
        name
        index
        equipment {
          name
          armor_category
          armor_class {
            base
            max_bonus
          }
        }
      }
    }
  `;
};

module.exports = armorQuery;