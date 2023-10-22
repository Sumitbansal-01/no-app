function utils(schema, input) {
    return async function (req, res, next) {
        try {
            const result = await schema.validate(req[input])
            if (result.error) {
                return res.status(400).send({ error: 'Yes', value: result.error.toString() })
            }else{
                next()
            }
        } catch (err) {
            console.log({ error: 'Yes', value: err.toString(), msg: 'in joi validation' })
            return res.status(500).send({ error: 'Yes', value: err.toString() })
        }
    };
}

module.exports = utils