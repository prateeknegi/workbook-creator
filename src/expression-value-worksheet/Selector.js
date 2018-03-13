import React from 'react';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    button: {
        margin: 12,
    },
    span: {
        margin: 12,
    }
};

const ExpressionType = (props) => (
    <div>
        <RaisedButton
            primary={true}
            icon={<ContentAdd />}
            style={styles.button}
            onClick={() => { props.add(props.expressionType) }}

        />
        <span style={styles.span}>{props.expressionType.text}</span>
    </div>
);

export default class SelectorForExpressionValueWorkSheet extends React.Component {
    render() {
        return (
            <div>
                <Subheader>Provide Value of Expression WorkSheet Generator</Subheader>
                <Divider/>
                <Subheader>Select the expressions to add to Work-Sheet</Subheader>
                {this.props.provider.expressionTypes.map(
                    (expressionType) => {
                        return <ExpressionType key={expressionType.text} expressionType={expressionType} add={this.props.addExpression}/>;
                    }
                )}
            </div>
        );
    }
};
