const { joi } = require("../../config/importModulesConfig")

const validation = joi().object({
    Variable_code: joi().string().invalid("H01").required(),
    Year: joi().string().required(),
    Industry_aggregation_NZSIOC: joi().string().required(),
    Industry_code_NZSIOC: joi().string().required(),
    Industry_name_NZSIOC: joi().string().required(),
    Units: joi().string().required(),
    Variable_name: joi().string().required(),
    Variable_category: joi().string().required(),
    Value: joi().string().required(),
    Industry_code_ANZSIC06: joi().string().required()
}).required()

module.exports = validation
