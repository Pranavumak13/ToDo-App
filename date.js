// console.log(module);
exports.getDate = function getDate() {
    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };
    return today.toLocaleDateString("en-US", options); // date format function    
}


module.exports.getDay = getDay;
function getDay() {
    const today = new Date();
    const options = {
        weekday: "long"
    };
    let day = today.toLocaleDateString("en-US", options); // date format function
    return day;
}
