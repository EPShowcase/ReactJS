import React from "react";
import { connect } from "react-redux";
import { updateBio } from "../actions/bioActions";
import Loading from "./loading";
import BioItem from "./bio-item";

class BioComponent extends React.Component {

  componentDidMount = () => {
    this.props.update();
  }

  render() {
    return (
      <div>
        <Loading loading={this.props.loading} />
        <BioItem />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    bio: state.bioReducer.bio,
    loading: state.bioReducer.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    update: () => {
      dispatch(updateBio());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BioComponent);
