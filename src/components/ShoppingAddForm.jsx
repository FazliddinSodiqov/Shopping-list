import React from "react";
class ShoppingAddForm extends React.Component {
    constructor(props) {
        super(props);

     this.state = {
        title: 'Buy ',
        number: ''
    }
    }
   
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        const {title, number} = this.state;
        return(
    <div className="form">
        <input type="text" 
        className="Title"
        name="title"
         placeholder="Title..."
            onChange={this.onChange}
            value={title}
 />
        <input type="number"
         className="number" 
            name="number"
         placeholder="14"
            onChange={this.onChange}
            value={number}
         />
    <button>Add</button>
    </div>
    )}
}
export default ShoppingAddForm;