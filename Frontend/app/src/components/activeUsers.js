import React, { Component } from 'react';

class ActiveUsers extends Component {
    render() {
        return (
            <div className="activeUsers">
                <h2 className="headline">
                    <h1 style={{color:"blue"}}>Team ATRIX</h1>
                    BOT is active
                </h2>
                <div id="users">
                    <ul>
                        {this.props.users.map((user, index) => (
                            <li key={index}>
                                <i className="fas fa-circle"></i>
                                <span>
                                    {user}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        )
    }
}

export default ActiveUsers;