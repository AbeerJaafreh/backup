import React, { Component } from 'react';

class Paragraph extends Component {
    state = { 
        names:['Abeer','Ahmad','Ali']
     };
    render() { 
        return (  
            <div>
                <p>{this.name()}</p>
            </div>
        );
    }
    name(){
        return this.state.names[1];
    }
}
 
export default Paragraph;
