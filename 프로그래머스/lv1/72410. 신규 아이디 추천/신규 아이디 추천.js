function solution(new_id) {
  new_id = new_id.split("");
  new_id = new_id.map((index) => index.toLowerCase()).join("");
  
  let reg_exp = /[a-z]|\d|\.|\-|\_/g;
  new_id = new_id.match(reg_exp).join("");
  
  new_id = new_id.replace(/\.{2,}/g, ".");
  
  if(new_id[0] === "." || new_id[new_id.length-1] === "."){
    if(new_id[0] === ".") new_id = new_id.slice(1,new_id.length);
    if(new_id[new_id.length-1] === ".") new_id = new_id.slice(0,new_id.length-1);
  }
  
  if(new_id.length === 0) new_id = "a";
  
  if(new_id.length > 15) {
    new_id = new_id.slice(0, 15);
    if(new_id[14] === ".") new_id = new_id.slice(0, 14);
  }
  
  if(new_id.length < 3){
    let index = new_id.length;
    new_id += new_id[index-1].repeat(3 - index);
  }
  return new_id;
}