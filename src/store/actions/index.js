import * as actions from './actionTypes';

export function toggleChat() {
  return {
    type: actions.TOGGLE_CHAT
  };
}

export function toggleInputDisabled() {
  return {
    type: actions.TOGGLE_INPUT_DISABLED
  };
}

export function addUserMessage(text) {
  return {
    type: actions.ADD_NEW_USER_MESSAGE,
    text
  };
}

export function addResponseMessage(text) {
  return {
    type: actions.ADD_NEW_RESPONSE_MESSAGE,
    text
  };
}

export function toggleMsgLoader(payload) {
  return {
    type: actions.TOGGLE_MSG_LOADER,
    payload
  }
}

export function addLinkSnippet(link) {
  return {
    type: actions.ADD_NEW_LINK_SNIPPET,
    link
  };
}

export function renderCustomComponent(component, props, showAvatar) {
  return {
    type: actions.ADD_COMPONENT_MESSAGE,
    component,
    props,
    showAvatar
  };
}

export function dropMessages() {
  return {
    type: actions.DROP_MESSAGES
  };
}

export function hideAvatar() {
  return {
    type: actions.HIDE_AVATAR
  };
}

export function setQuickButtons(buttons) {
  return {
    type: actions.SET_QUICK_BUTTONS,
    buttons
  }
}

export function toggleVioce(){
  return {
    type: actions.TOGGLE_VOICE
  }
}

export function toggleVoiceModel(){
  return {
    type: actions.TOGGEL_VOICE_MODEL
  }
}

export function toggleCancelVoice(){
  return {
    type: actions.TOGGEL_CANCEL_VOICE
  }
}