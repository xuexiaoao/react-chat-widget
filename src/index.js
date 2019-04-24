import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import Widget from './components/Widget';
import store from '../src/store/store';

const ConnectedWidget = props =>
  <Provider store={store}>
    <Widget
      inputRef={props.inputRef}
      title={props.title}
      titleAvatar={props.titleAvatar}
      subtitle={props.subtitle}
      handleNewUserMessage={props.handleNewUserMessage}
      handleQuickButtonClicked={props.handleQuickButtonClicked}
      senderPlaceHolder={props.senderPlaceHolder}
      profileAvatar={props.profileAvatar}
      showCloseButton={props.showCloseButton}
      fullScreenMode={props.fullScreenMode}
      badge={props.badge}
      autofocus={props.autofocus}
      customLauncher={props.launcher}
      customSender={props.customSender}
      onTap={props.onTap}
      onPress={props.onPress}
      onPressUp={props.onPressUp}
      onPanUp ={props.onPanUp }
      onPanLeft={props.onPanLeft}
      onPanRight={props.onPanRight}
      onPanDown={props.onPanDown}
    />
  </Provider>;

ConnectedWidget.propTypes = {
  title: PropTypes.string,
  titleAvatar: PropTypes.string,
  subtitle: PropTypes.string,
  handleNewUserMessage: PropTypes.func.isRequired,
  handleQuickButtonClicked: PropTypes.func,
  senderPlaceHolder: PropTypes.string,
  profileAvatar: PropTypes.string,
  showCloseButton: PropTypes.bool,
  fullScreenMode: PropTypes.bool,
  badge: PropTypes.number,
  autofocus: PropTypes.bool,
  launcher: PropTypes.func,
  onTap: PropTypes.func,
  onPress: PropTypes.func,
  onPressUp: PropTypes.func,
  onPanUp: PropTypes.func,
  onPanLeft: PropTypes.func,
  onPanRight: PropTypes.func,
  onPanDown: PropTypes.func
};

ConnectedWidget.defaultProps = {
  title: 'Welcome',
  subtitle: 'This is your chat subtitle',
  senderPlaceHolder: 'Type a message...',
  showCloseButton: true,
  fullScreenMode: false,
  badge: 0,
  autofocus: true
};

export default ConnectedWidget;
