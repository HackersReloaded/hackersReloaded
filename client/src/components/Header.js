import React from "react";

 class Header extends React.Component{
  render() {
    return(
      <nav className="navbar navbar-default">
       <div className="container">
         <div className="navbar-header">
           <ul className="nav navbar-nav">
               <li><a href="#">Home</a></li>
               <h1 id="m-header">{this.props.header}</h1>
               <hr/>
               {this.props.children}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Header;

