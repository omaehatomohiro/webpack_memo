import "core-js/proposals/string-replace-all"
const ok =() => {
  var i = [1,2,3];
  i.forEach( (v,i) => {
    console.log(v)
  });
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve('complete!!');
    }, 1000);
  });

}


interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount("Murphy", 1);