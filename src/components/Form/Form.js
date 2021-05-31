import React, { Component } from 'react';
import { connect } from 'react-redux';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { feild: {} }
    }
    clickAdd = () => {
        this.props.addDataStore(this.state.feild);
        // this.props.getData(this.state.feild)
    }
    changeInput = (e) => {
        let data = this.state.feild;
        data[e.target.name] = e.target.value
        this.setState({ feild: data });
    }
    render() {
        console.log(this.props)
        return (
            <div className="pa10">
                <div className="bra5 oh b1sd">
                    <form>
                    <div className="pa10 fwb tac ttu fs12">Sửa nội dung ghi chú</div>
                    <div className="pa10">
                        <div className="mtb5">
                            Tiêu đề note
                      </div>
                        <input  onChange={(e) => { this.changeInput(e) }} type="text" name="title" className="pa10 mtb5 w1" placeholder="Enter title" />
                        <div className="mtb5">
                            Tiêu đề note
                      </div>
                        <textarea  onChange={(e) => { this.changeInput(e) }} type="text" name="detail" className="pa10 mtb5 w1 b1sd" style={{ minHeight: "200px" }} placeholder="Enter detail" />
                        <div className="mtb5">
                            <button type="reset" onClick={this.clickAdd} className="btn bn bgcgd cf pa10 tac">Lưu</button>
                        </div>
                        </div>
                        </form>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        test: state.test,
        dataEdit:state.dataEdit,
        
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (data) => {
            dispatch({type:"ADD_DATA",data:data});
        },
        editDataStore: (data) => {
            dispatch({type:"EDIT_DATA",data:data});
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form)
