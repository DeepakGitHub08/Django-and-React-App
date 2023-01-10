import React, {Component} from 'react'
import { CtxConsumer } from '../App';
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
        //const animals = ['cat', 'dog', 'horse'];
        return (
            <CtxConsumer>
                {context => {
                    return (<div>
                        {console.log(context.animals)}
                        {context.animals.map( (animal) => {
                            return (
                                <div key={animal}>
                                    <h1> {animal}</h1>
                                </div>
                            );
                        })}
                    </div>)
                    
                }}

            </CtxConsumer>
            // {context => (
            //     <div>
            //         <h1>footer</h1>
            //         {context.animals && context.animals.map(animal => {
            //             return (
            //                 <div key={animal}>
            //                     <h1>{animal}</h1>
            //                 </div>
            //             );
            //         }) }
            //     </div>
            // )}
        )
    }
}
export default Footer;