const subRaceString = (subRaceName) => {
  return `
  query{
    subraces(filter:{name:"${subRaceName}"}){
      name
      desc
      language_options{
        choose
        from{
          name
        }
      }
      ability_bonuses{
        ability_score{
          name
        }
        bonus
      }
      racial_traits{
        name
        desc
        proficiencies{
          name
        }
        proficiency_choices{
          choose
          from{
            name
          }
        }
        trait_specific{
          subtrait_options{
            choose
            from{
              name
            }
          }
          spell_options{
            choose
            from{
              name
            }
          }
        }
      }
      starting_proficiencies{
        name
      }
    }
  }
  `;
}

module.exports = subRaceString;