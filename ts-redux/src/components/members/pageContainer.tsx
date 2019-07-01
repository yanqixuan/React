import * as React from 'react';
import { connect } from 'react-redux';  //连接
import { MembersPage } from './page';
import { fetchMembersAction } from './actions/fetchMembers';

const mapStateToProps = (state) => ({
  members:state.members
});
const mapActionsToProps = (dispatch) =>({
  fetchMembers:() => dispatch(fetchMembersAction())
})

export const MembersPageContainer = connect(mapStateToProps,mapActionsToProps)(MembersPage); //使两方连接起来