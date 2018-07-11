import React from "react"
import {CSSTransition} from "react-transition-group"
import Skin from "../../containers/Skin"

import "./menu.styl"

class Menu extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			skinShow: false
		};
	}
	showSetting = (status) => {
		this.close();
        setTimeout(() => {
        	this.setState({
        		skinShow: status
        	});
        }, 300);
	}
	close = () => {
        this.props.closeMenu();
    }
	render() {
		return (
			<div>
				<CSSTransition in={this.props.show} timeout={300} classNames="fade"
					onEnter={() => {
						this.refs.bottom.style.display = "block";
					}}
					onExited={() => {
						this.refs.bottom.style.display = "none";
					}}>
			      <div className="bottom-container" onClick={this.close}  ref="bottom">
			        <div className="bottom-wrapper">
			          <div className="item" onClick={() => {this.showSetting(true);}}>
			            Choose Skins
			          </div>
			          <div className="item-close" onClick={this.close}>
			            Close
			          </div>
			        </div>
			      </div>
			    </CSSTransition>
			    <Skin show={this.state.skinShow} close={() => {this.showSetting(false);}} />
		  	</div>
		);
	}
}

export default Menu