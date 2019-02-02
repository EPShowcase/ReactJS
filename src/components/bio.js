import React from "react";
import { connect } from "react-redux";

const BioComponent = props => {
  return (
    <div>Bio</div>
  );
};

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BioComponent);
