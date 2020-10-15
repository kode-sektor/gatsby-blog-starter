import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
  } from 'reactstrap';

class Header extends React.Component{

    constructor (props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state={
            isOpen : false
        }
    }

    toggle () {
        this.setState ({
            isOpen : !this.state.isOpen
        })
    }

    render () {
        return (
            <div>
                <Navbar fixed="top" color="light" light expand="md">
                <NavbarBrand href="/">{this.props.siteTitle}</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/team/">Team</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/tags/">Tags</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/about/">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                    </NavItem>
                </Nav>
                <NavbarText>Simple Text</NavbarText>
                </Collapse>
            </Navbar>
            </div>
        )
    }


}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
