/**
 *
 */
module.exports = function(){
  return function(prefix){
    do {
      prefix += Math.floor(Math.random() * 1000000);
    } while (document.getElementById(prefix));
    return prefix;
  };
};
