import React, { Component } from 'react'
import './App.css';
import { connect } from 'react-redux';
import Form from './components/Form/Form';
import Note from './components/Note/Note';
import fBase from './firebase/FirebaseConnect';
//this.duLieu.props
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { dataNote: [] }
  }
  addData = (data) => {
    console.log(data);
    fBase.data.push(data);
  }
  componentWillMount() {
    fBase.data.on("value", (notes) => {
      let aData = [];
      notes.forEach((note, o) => {
        o = { ...note.val(), id: note.key }
        note.val().id = note.key
        aData.push(o)
      })
      this.setState({ dataNote: aData })
    })
  }
  render() {
    return (
      <div >
        <div className="bgc3 mb50">
          <div className="container">
            <div className="pa15 cf bấmĐc shineh fwb fs12 ">Home</div>
          </div>
        </div>
        <div className="mb50">
          <div className="container">
            <div className="df fww jcsb">
              <div className="col-xs-8">
                {this.state.dataNote.map((d) => {
                  return (<Note key={d.id} dataNote={d}/>)
                })}
              </div>
              <div className="col-xs-4">
                <Form getData={this.addData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    duLieu: state.num,
    isEdit:state.isEdit
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEditStatus: () => {
      dispatch("CHANGE_EDIT_STATUS")
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);