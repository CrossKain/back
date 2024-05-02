const path = require("path")
const fs = require("fs")
const getUsers = () => {
    const filePath = path.join(__dirname, "/usersDataJson.json")
    return fs.readFileSync(filePath)
}

module.exports = getUsers