import React from 'react';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
import Add from 'material-ui/svg-icons/navigation/chevron-right';

const styles = {
    button: {
        margin: 12,
    },
    span: {
        margin: 12,
    },
    list :[
        {
            backgroundColor: "#8b9dc3"
        }, {
            backgroundColor: "#dfe3ee"
        }
    ]

};

const ExpressionType = (props) => (
        <ListItem
            primaryText={props.expressionType.text}
            rightIcon={<Add/>}
            onClick={() => { props.add(props.expressionType) }}
            style={styles.list[props.even]}
        />
);

export default class SelectorForExpressionValueWorkSheet extends React.Component {
    render() {
        return (
            <div>
                <Subheader>Select the type of expressions to add to the Work-Sheet</Subheader>
                <List>
                    { this.props.provider.expressionTypes.map(
                        (expressionType, index) => {
                            return <ExpressionType
                                key={expressionType.text}
                                expressionType={expressionType}
                                add={this.props.addExpression}
                                even={index%2}
                            />;
                        }
                    )}
                </List>
            </div>
        );
    }
};
