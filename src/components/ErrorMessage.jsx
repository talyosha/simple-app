// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Message } from 'semantic-ui-react';

type Props = {
  message: any,
};

const ErrorMessage = ({ message }: Props): React.Node => (
  <Message negative>
    <Message.Header>We're sorry , something go wrong</Message.Header>
    <p>{message}</p>
  </Message>
);

const mapStateToProps = (state) => ({
  message: state.items.error,
});

export default (connect(mapStateToProps)(ErrorMessage): React.AbstractComponent<{}>);
