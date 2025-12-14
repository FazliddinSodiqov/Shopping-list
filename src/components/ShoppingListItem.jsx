import React, { act } from "react";
class ShoppingListItem extends React.Component{
    constructor(props){
        super (props);
        this.state = {
        active: false,
        }
    }

    onToggleActive = () => {
        this.setState (state => ({
            active: !state.active,
        })

        );}
   render() {
    const {item} = this.props;
    const {active} = this.state;
     return(
        <div className= {`list-item ${active && 'active'}` } >
            <div className="item-info">
                <span>{item.siza}</span>
                <p>{item.title}</p>

            </div>
        <div className='item-actions'>
					<span className='check' onClick={this.onToggleActive}>&#10003;</span>
					<span className='times'>&times;</span>
				</div>
        </div>
    )
   }
}
export default ShoppingListItem;