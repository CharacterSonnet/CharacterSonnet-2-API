//filters down class_levels array from class query to just the current level's information. 

const levelCrunch = (class_levels, lvl) => {
  let activeLvls = class_levels.filter(levelData=> levelData.level <= lvl);
  let currentLvl = class_levels.splice(class_levels.findIndex(levelData=> levelData.level == lvl && level.prof_bonus))[0];
  activeLvls.forEach(levelData=>{
    currentLvl.features = [...currentLvl.features, ...levelData.features];
  });
  return currentLvl;
};

module.exports = levelCrunch;