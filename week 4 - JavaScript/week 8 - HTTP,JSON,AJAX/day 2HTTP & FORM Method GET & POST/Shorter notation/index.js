
  console.log(form.elements.login == form.login); // true, the same <input>
  form.elements[0].name = "username";
  // change the name of the input
  // form.elements updated the name:
  console.log(form.elements.login); // undefined
  console.log(form.elements.username); // <input name="username">
  // form allows both names: the new one and the old one
  console.log(form.username == form.login); // true
