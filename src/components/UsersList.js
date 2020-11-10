import React from 'react';
import User from "./User";
import {connect} from "react-redux";

const UsersList = (props) => {
  return (
    <div className="user-list">
      {props.users && props.users.map((user) => <User key={user.login.uuid} {...user} />)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state
  };
};

export default connect(mapStateToProps)(UsersList);
