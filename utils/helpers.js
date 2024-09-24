const { format } = require("sequelize/lib/utils");

module.exports = {
    format_date: (date) => {
        return date.toLocaleDateString();
    },
};