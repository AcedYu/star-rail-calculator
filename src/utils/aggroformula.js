 const aggropercent = (me, c1, c2, c3) => {
     return me / (me+c1+c2+c3);
 }
 
 const aggrovalue = (character, ...mods) => {
     let totalmods = 1;
     for (let i = 0; i < mods.length; i++) {
        totalmods += mods[i];
    }
    return character * totalmods;
 }