import React, { Component } from 'react';
import { connect } from 'react-redux';
class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    render() {
        return (
            <div className="pa10">
                <div className="bra5 oh b1sd">
                    <div onClick={() => this.setState({ open: !this.state.open })} className={"pa10 bb1 bss bcd bấmĐc df jcsb " + (this.state.open ? "bgcgd cf" : "bgce c0")}>
                        <div>{this.props.dataNote.title}</div>
                        <div>
                            <div className="grid wsn">
                                <div onClick={() => { this.props.changeEditStatus(this.props.dataNote) }} className="btn bn mlr5 pa5 bgcgd cf">Sửa</div>
                                <div className="btn bn mlr5 pa5 bgcrd cf">Xóa</div>
                            </div>
                        </div>
                    </div>
                    {this.state.open ? <div className="pa10 wspw"> {this.props.dataNote.detail} </div> : ""}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    console.log(state)
    return {
        isEdit: state.note.isEdit,
        isEdit: state.note.isEdit,

    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: (data) => {
            dispatch({ type: "EDIT_NOTE", data: data, status: !this.state.isEdit })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Note)
