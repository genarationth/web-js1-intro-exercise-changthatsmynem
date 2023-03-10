const ChangeName = () => {
  let name = prompt("What is your name?", "say it out loud!");
  return name
    ? (document.getElementById("inputName").innerHTML = `Hello ${name}`)
    : null;
};
