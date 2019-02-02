import React from 'react';
import { connect } from 'react-redux'
const imgStyle = {
  hight: 'auto',
  width: '100px'
};

// I'm too lazy to change API code to allow updating data
// I'm using loopback server with SQLite database on server
// but updating is restricted on public API server
let fixAvatar = (url) => {
  return url.replace('3000', '3001');
}

let mailto = (email) => {
  return 'mailto:' + email;
}

let BioItem = ({ bio }) => (
  // Use dangerouslySetInnerHTML with caution - 
  // in this case we trust results receiving from our API
  bio ?
    <div>
      <h1>{bio.title}</h1>
      <img style={imgStyle} src={fixAvatar(bio.avatarUrl)} alt="" />
      <p dangerouslySetInnerHTML={{ __html: bio.curriculumVitae }} />
      <a href={bio.linkedInUrl} target="_blank">LinkedIn</a>
      <br />
      <a href={mailto(bio.email)}>{bio.email}</a>
    </div> :
    null
);
const mapStateToProps = (state) => ({
  bio: state.bioReducer.bio ? state.bioReducer.bio[0] : null
})
BioItem = connect(mapStateToProps, null)(BioItem)
export default BioItem;