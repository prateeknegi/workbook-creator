import React from 'react';
import Selector from './Selector'
import Preview from "./Preview";
import provider from './Provider';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

const styles = {
    content: {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'flex-start'
    }
};

export default class ExpressionValueWorkSheet extends React.Component {

    constructor(props) {
        super(props);
        this.addExpression = this.addExpression.bind(this);
        this.state = {selectedExpressions: []};
    }

    addExpression(selectedExpression) {
        console.log(selectedExpression);
        var result = provider.generatorFunction([selectedExpression]);
        var expressions = this.state.selectedExpressions.concat(result);
        this.setState({selectedExpressions: expressions});
    }


    render() {
        return (<div>
            <Subheader>Provide Value of Expression WorkSheet Generator</Subheader>
            <Divider/>
            <div style={styles.content}>
                <Selector addExpression={this.addExpression} provider={provider}/>
                <Preview results={this.state.selectedExpressions}/>
            </div>
        </div>);
    }
}
