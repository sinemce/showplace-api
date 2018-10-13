var Enum = require('enum');

const ageEnum = new Enum({"15 - 18": 0, "19 - 25":1, "26 - 35": 2, "36 - +": 3 });


const ageList = ageEnum.toJSON();

module.exports={ageList}