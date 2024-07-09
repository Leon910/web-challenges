const myConsole = {
    name: "stephie",
    clear: () => {
      console.clear();
      console.log("diese konsole wurde gelöscht");
    },
    log: (platzhalter) => {
      console.log("ente:", platzhalter);
    },
    error: (platzhalter) => {
      console.log("errormessage:", platzhalter)
    }
  };

  console.clear();
  myConsole.clear();
  myConsole.log("quack quack”)
  myConsole.error("This is an error!!")
  
  function greet(name) {
    console.log("hello:", name);
  }

  // greet("stephie”);
  function greetClass() {
    greet("stephie”)
    greet("felix”)
    greet("leon”)
  }
  // greetClass();
  function enteGreetClass() {
  myConsole.log("stephie”)
  myConsole.log("felix”)
  myConsole.log("leon”)
  }
  // enteGreetClass();
  function shout(platzhalter) {
    console.log(platzhalter.toUpperCase()+"!!!")
  }
  function shoutClass() {
    shout("stephie”)
    shout("felix”)
    shout("leon”)
  }
  console.log(shoutClass)
  // shoutClass();
  function doWithClass(callback) {
    callback("stephie”)
    callback("felix”)
    callback("leon”)
    callback("jennifer”)
  }
  doWithClass(greet)
  doWithClass(shout)
  doWithClass(myConsole.log)
  doWithClass((platzhalter) => {
  console.log(platzhalter[0])
  })
  // doWithClass((classMember) => {
  // if (classMember === "felix”) {
  //   console.log("hello coach”)
  // } else {
  //   console.log("hello student”)
  // }
  // })
  const classMembers = ["stephie”, "felix", "leon”, "jennifer”];
  classMembers.forEach(greet)
  classMembers.forEach(shout)
  classMembers.forEach((classMember) => {
    if (classMember === "felix”) {
      console.log("hello coach”)
    } else {
      console.log("hello student”)
    }})