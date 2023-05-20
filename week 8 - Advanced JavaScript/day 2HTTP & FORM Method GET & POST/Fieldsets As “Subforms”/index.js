console.log(form.elements.login); // <input name="login" type="text">
  let formFieldset = form.elements.userFields;
  console.log(formFieldset);
    // <fieldset name="userFields">
    //   <legend>info</legend>
    //   <input name="login" type="text">
    // </fieldset>

  // we can get the input by name both from the form and from the fieldset
  console.log(fieldset.elements.login == form.elements.login); // true
  