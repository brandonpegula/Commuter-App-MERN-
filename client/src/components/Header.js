import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <a href="/auth/google">Login with Google</a>
            default:
                return <a href="/api/logout">Logout</a>;
        }
    }

    render() {
        return <nav>
						<div className="navbar">
							<Link to={this.props.auth ? "/destinations" : "/"} className="left brand-logo">
								Brsk
							</Link>
							{this.renderContent()}
						</div>
					</nav>;
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps) (Header);