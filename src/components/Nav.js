import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './navfooter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faAngleDown, faBell } from '@fortawesome/free-solid-svg-icons';

export default class Nav extends Component  {
    state = {
        divcontainer: false,
        searchbar: false,
    }

        
    render(){
        var Handlechange = e =>{
            this.setState({divcontainer:!this.state.divcontainer});
        }

        var SearchActive = e =>{
            this.setState({searchbar:!this.state.searchbar});
        }

        var submenu = this.state.divcontainer;
        var searchbar = this.state.searchbar;
        return (
            <div className='nav-ctn'>
                <nav>
                    <Link className="title" to="/home"><img src="netflixLogo.png" alt="Netflix" /></Link>
                    <div className='browse-flex'>
                        <div className='browse-btn'>
                            <a aria-label="dropdown" onClick={Handlechange} >Browse</a>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </div>

                        {submenu && (
                        <ul>
                        <li><Link to="/home" className="hover">Home</Link></li>
                        <li><Link to="/tvshows" className="hover">TV Shows</Link></li>
                        <li><Link to="/movies" className="hover">Movies</Link></li>
                        <li><Link to="/newandpopular" className="hover">New & Popular</Link></li>
                        <li><Link to="/mylist" className="hover">My List</Link></li>
                        </ul>
                        )}
                    </div>

                    <a aria-label="search" className='icons' onClick={SearchActive} ><FontAwesomeIcon icon={faMagnifyingGlass} /></a>

                    {searchbar && (
                    <form>
                        <input type='text' name='searchBar' id='search' placeholder='Titles, people, genres' />
                    </form>
                    )}

                    <a aria-label="notifications" className='icons'><FontAwesomeIcon icon={faBell} /></a>

                </nav>
            </div>
        )
    }
}