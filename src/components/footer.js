import React, {Component} from 'react'

class Footer extends Component{
    
    // createAlert(){
    //     alert("You clicked the Footer")
    // }
    state = {
        name : 'Deepak Meena',
        age : 35
    }

    changed(evt){
        console.log(evt.target.value)
        this.setState({name: evt.target.value});
    }
    render (){
        return (
            <React.Fragment>
                <h2 onClick={this.props.myAlert}>{this.props.trademark}</h2>
                <input value={this.state.name}
                    onChange={this.changed.bind(this)} type='text' />
            </React.Fragment>
            )
    }
}
export default Footer;