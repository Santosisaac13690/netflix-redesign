import React from 'react';
import {Link} from 'react-router-dom';
import './navfooter.css';

function Nav() {
    const [state, setState] = React.useState({ showSubMenu: false });

    const handleClick = () => {
        setState({ showSubMenu: !state.showSubMenu })
    }

  return (
      //className="btn-group pull-right {this.props.showBulkActions ? 'show' : 'hidden'}"
      // submenu display none
      // is-active display block
      // state classes

    <div>
        <nav>
          <Link className="title" to="/">NETFLIX</Link>
          <button onClick={handleClick}>Browse </button>
          <ul className="sub-menu {state.showSubMenu ? 'is-active' : ''}">
            <li><Link to="/" className="hover">Home</Link></li>
            <li><Link to="/tvshows" className="hover">TV Shows</Link></li>
            <li><Link to="/movies" className="hover">Movies</Link></li>
            <li><Link to="/newandpopular" className="hover">New & Popular</Link></li>
            <li><Link to="/mylist" className="hover">My List</Link></li>
          </ul>

          <div>

          </div>
        </nav>
    </div>
  )
}

export default Nav;