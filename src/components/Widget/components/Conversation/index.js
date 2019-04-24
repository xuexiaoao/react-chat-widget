import React from 'react';
import PropTypes from 'prop-types';

import Header from './components/Header';
import Messages from './components/Messages';
import Sender from './components/Sender';
import QuickButtons from './components/QuickButtons';
import './style.scss';

const Conversation = props =>
  <div className="rcw-conversation-container">
    <Header
      title={props.title}
      subtitle={props.subtitle}
      toggleChat={props.toggleChat}
      showCloseButton={props.showCloseButton}
      titleAvatar={props.titleAvatar}
    />
    <Messages
      profileAvatar={props.profileAvatar}
    />
    <QuickButtons onQuickButtonClicked={props.onQuickButtonClicked} />
    {props.customSender?props.customSender:
        <Sender
        inputRef={props.inputRef}
        sendMessage={props.sendMessage}
        placeholder={props.senderPlaceHolder}
        disabledInput={props.disabledInput}
        autofocus={props.autofocus}
        onTap={props.onTap}
        onPress={props.onPress}
        onPressUp={props.onPressUp}
        onPanUp ={props.onPanUp }
        onPanLeft={props.onPanLeft}
        onPanRight={props.onPanRight}
        onPanDown={props.onPanDown}
      />
    }

  </div>;

Conversation.propTypes = {
  title: PropTypes.string,
  titleAvatar: PropTypes.string,
  subtitle: PropTypes.string,
  sendMessage: PropTypes.func,
  senderPlaceHolder: PropTypes.string,
  profileAvatar: PropTypes.string,
  toggleChat: PropTypes.func,
  showCloseButton: PropTypes.bool,
  disabledInput: PropTypes.bool,
  autofocus: PropTypes.bool,
  onTap: PropTypes.func,
  onPress: PropTypes.func,
  onPressUp: PropTypes.func,
  onPanUp: PropTypes.func,
  onPanLeft: PropTypes.func,
  onPanRight: PropTypes.func,
  onPanDown: PropTypes.func
};

export default Conversation;
