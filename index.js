// code your solution here

function saturdayFun (satActivity = "roller-skate") {
    return `This Saturday, I want to ${satActivity}!`
};

function mondayWork (monActivity = "go to the office") {
    return `This Monday, I will ${monActivity}.`
};

function wrapAdjective (prompt = "*") {
    return function (adjective = "special") {
        return `You are ${prompt}${adjective}${prompt}!`
    }
}