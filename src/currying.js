function add(a) {
  return function(b){
    return a + b;
  }
}
function transform(){
    //using lodash to compose and create function pipes and also curryin in place on line 12
    let input = " JavaScript ";
    let output = "div" + input.trim() + "<div>";
  
    const trim = (str) => str.trim();
    const wrap = type => str => `<${type}>${str}</${type}>`
    const toLowerCase = str => str.toLowerCase();
    const transform =pipe(trim,toLowerCase,wrap('zesta'));
    const result = transform(input);
  
    console.log(result);
}
const add2 = a => b => a + b;
add(1)(3);