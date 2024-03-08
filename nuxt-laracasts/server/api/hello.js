import { eventHandler } from "#imports"
export default eventHandler((req, res) => {return {"foo": process.env.FOO, "bar": process.env.BAR}})
