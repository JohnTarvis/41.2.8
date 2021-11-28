import React, {useState} from "react";

function ColorForm({newColor}) {
  const [form, updateForm] = useState({name: "", value:"#ffffff"});
  function change(e) {
    updateForm(form => ({ ...form, 
                          [e.target.name]: e.target.value}));
  }
  function submit(e) {
    e.preventDefault();
    newColor({ [form.name]: form.value });
  }
  const {value, name} = form;
  return (
    <div className="NewColor">
      <form onSubmit={submit}>
      <div>
          <label htmlFor="value">value</label>
          <input
            type="color"
            name="new-value"
            id="new-value"
            onChange={change}
            value={value}
          />
        </div>
        <div>
          <label htmlFor="name">name</label>
          <input
            name="new-color"
            id="new-color"
            placeholder="name"
            onChange={change}
            value={name}
          />
        </div>
        <input type="Submit" value="add"/>
      </form>
    </div>
  );
}

export default ColorForm;
