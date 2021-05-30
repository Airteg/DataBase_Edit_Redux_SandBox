import { useDispatch } from "react-redux";
import { AddNewUsers } from "../action";

function AddUsers(props) {
  // console.log("--------after AddUsers--------");
  // console.log(props);
  // console.log("------------------------------");

  function nVis() {
    let element = document.getElementById("modal");
    element.style.transform = "scale(0)";
  }

  const dicpatch = useDispatch();
  let formSubmit = (event) => {
    event.preventDefault();
    nVis();
    let data = event.target.elements;
    console.log("------AddUser.jsx--------");
    console.log(data.name.value, data.phone.value, data.email.value);
    console.log("----------END------------");
    dicpatch(AddNewUsers(data.name.value, data.phone.value, data.email.value));
  };

  return (
    <div className="visiblity" id="modal">
      <form onSubmit={formSubmit}>
        <div>
          <input type="text" name="name" placeholder="Name" defaultValue="" />
        </div>
        <div>
          <input type="text" name="phone" placeholder="Phone" defaultValue="" />
        </div>
        <div>
          <input
            type="text"
            name="email"
            placeholder="E-mail"
            defaultValue=""
          />
        </div>
        <div>
          <button type="submit">Add users</button>
          <button type="reset" onClick={nVis}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddUsers;
