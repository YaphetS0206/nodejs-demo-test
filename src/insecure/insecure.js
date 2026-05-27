function dangerous(userInput) {

  eval(userInput);

}

module.exports = {
  dangerous
};