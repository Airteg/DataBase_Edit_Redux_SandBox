import List from "../components/List";
import { connect } from "react-redux";

function mstp(state) {
  const { user } = state;

  // console.log("=====UserList.jsx======");
  // console.log(user);
  // console.log("-----------END---------");
  return { user: user };
}
export default connect(mstp, null)(List);
