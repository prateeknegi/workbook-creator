import React from 'react';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import {Card, CardHeader, CardText} from 'material-ui/Card';

const styles = {

    span: {
        margin: 12,
    },
    cards: [
        {
            card: {
                backgroundColor: "#8b9dc3"
            },
            cardText: {
                backgroundColor: "#f7f7f7"
            }
        }, {
            card: {
                backgroundColor: "#dfe3ee"
            },
            cardText: {
                backgroundColor: "#f7f7f7"
            }
        },
    ]
};
// const question = {
//     variables : {name},
//     values : {value},
//     expression : []
// };

const ExpressionPreview = (props) => (
        <Card>
            <CardHeader
                title={props.result.expression[0].text}
                actAsExpander={true}
                showExpandableButton={true}
                style={styles.cards[props.even].card}
            />
            <CardText expandable={true} style={styles.cards[props.even].cardText}>
                <div>Evaluate value of the expression:</div>
                <div>{props.result.variables[0]}={props.result.values[0]}</div>
                <div>{props.result.expression[0].text}</div>
                <div>Solution: {props.result.expression[0].solution}</div>
            </CardText>
        </Card>
);

export default class Preview extends React.Component {
    render() {
        return (
            <div>
                <Subheader>Preview</Subheader>
                <Divider/>
                {
                    this.props.results.map(
                    (result, index) => {
                        console.log(result);
                        return <ExpressionPreview key={index} result={result} even={index%2}/>
                    }
                )}
            </div>
        );
    }

    componentWillReceiveProps(newProps) {
        console.log(newProps);
    }
}