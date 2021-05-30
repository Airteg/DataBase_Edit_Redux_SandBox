import "../styles.css";

function List(data) {
  console.log("List");

  function vis() {
    let element = document.getElementById("modal");
    element.style.transform = "scale(1)";
  }
  function edRec(props) {
    let element = document.getElementById("modal");
    let e = document.querySelectorAll("#modal > form");
    console.log("edit");
    const a = +props.target.getAttribute("atribute");
    e[0][0].value = data.user[a].name;
    e[0][1].value = data.user[a].phone;
    e[0][2].value = data.user[a].email;
    // console.log(e[0][0].value);
    // console.log(e[0][1].value);
    // console.log(e[0][2].value);
    // console.log(data.user[a]);
    element.style.transform = "scale(1)";
  }
  function delRec(props) {
    const a = +props.target.getAttribute("atribute");
    alert(`Удалить ${data.user[0].name}??? С ума сошли?`);
  }

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th colSpan="6">
              <h2>Data Base</h2>
            </th>
          </tr>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>E-mail</th>
            <th>Actions</th>
            <th>
              <button onClick={vis}>New User</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.user.map((item, id) => (
            <tr key={id}>
              <th>{`${id + 1}.`}</th>
              <th>{item.name}</th>
              <th>{item.phone}</th>
              <th>{item.email}</th>
              <th>
                <button atribute={id} onClick={edRec}>
                  Edit
                </button>
              </th>
              <th>
                <button atribute={id} onClick={delRec}>
                  Del
                </button>
              </th>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan="6">
              In strict confidence. You can tell us everything about yourself.
              We won't tell anyone. And I'll tell none!
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
export default List;
