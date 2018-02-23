import React, {Component} from 'react';

class Dashboard extends Component {

    render(){
        return (
            <div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        userid: state.userid,
        properties: state.properties
    }
}

export default Dashboard;