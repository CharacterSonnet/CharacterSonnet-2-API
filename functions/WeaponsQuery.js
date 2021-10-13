const weaponsQuery = () => {
  return `
    query {
      equipmentCategories(limit:0 filter:{index:"weapon"}){
        name
        equipment{
          name
          weapon_category
          properties{
            name
            desc
          }
          weapon_range
          range{
            long
            normal
          }
          damage{
            damage_type{
              name
            }
            damage_dice
          }
          two_handed_damage {
            damage_type{
              name
            }
            damage_dice
          }
        }
      }
    }
  `;
};

module.exports = weaponsQuery;