import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toggleChat, addUserMessage } from '@actions';

import WidgetLayout from './layout';

class Widget extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.fullScreenMode) {
      this.props.dispatch(toggleChat());
    }
  }

  toggleConversation = () => {
    this.props.dispatch(toggleChat());
  }

  handleMessageSubmit = (event) => {
    event.preventDefault();
    const userInput = event.target.message.value;
    if (userInput.trim()) {
      this.props.dispatch(addUserMessage(userInput));
      this.props.handleNewUserMessage(userInput);
    }
    event.target.message.value = '';
  }

  handleQuickButtonClicked = (event, value) => {
    event.preventDefault();

    if(this.props.handleQuickButtonClicked) {
      this.props.handleQuickButtonClicked(value);
    }
  }

  render() {
    return (
      <WidgetLayout
        inputRef={this.props.inputRef}
        onToggleConversation={this.toggleConversation}
        onSendMessage={this.handleMessageSubmit}
        onQuickButtonClicked={this.handleQuickButtonClicked}
        title={this.props.title}
        titleAvatar={this.props.titleAvatar}
        subtitle={this.props.subtitle}
        senderPlaceHolder={this.props.senderPlaceHolder}
        profileAvatar={this.props.profileAvatar}
        showCloseButton={this.props.showCloseButton}
        fullScreenMode={this.props.fullScreenMode}
        badge={this.props.badge}
        autofocus={this.props.autofocus}
        customLauncher={this.props.customLauncher}
        customSender={this.props.customSender}
        onTap={this.props.onTap}
        onPress={this.props.onPress}
        onPressUp={this.props.onPressUp}
        onPanUp ={this.props.onPanUp }
        onPanLeft={this.props.onPanLeft}
        onPanRight={this.props.onPanRight}
        onPanDown={this.props.onPanDown}
      />
    );
  }
}

Widget.propTypes = {
  title: PropTypes.string,
  titleAvatar: PropTypes.string,
  subtitle: PropTypes.string,
  handleNewUserMessage: PropTypes.func.isRequired,
  handleQuickButtonClicked: PropTypes.func.isRequired,
  senderPlaceHolder: PropTypes.string,
  profileAvatar: PropTypes.string,
  showCloseButton: PropTypes.bool,
  fullScreenMode: PropTypes.bool,
  badge: PropTypes.number,
  autofocus: PropTypes.bool,
  customLauncher: PropTypes.func,
  onTap: PropTypes.func,
  onPress: PropTypes.func,
  onPressUp: PropTypes.func,
  onPanUp: PropTypes.func,
  onPanLeft: PropTypes.func,
  onPanRight: PropTypes.func,
  onPanDown: PropTypes.func
};

export default connect()(Widget);
