import React, { Component } from 'react';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';
import { Route, NavLink, Switch } from 'react-router-dom';
import './Blog.css';

const AsyncNewPost = asyncComponent( () => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: true
    }

        render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to="/posts" 
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#ccdd55',
                                    textDecoration: 'underline'
                                }}>Posts</NavLink></li>
                            <li><NavLink to="/new-post">New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    { this.state.auth ? <Route path="/new-post" component={AsyncNewPost}/> : null }
                    <Route path="/posts" component={Posts}/>
                    <Route render={ () => <h1>Not found</h1>}/>
                    {/* <Redirect from="/" to="/posts"/> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;