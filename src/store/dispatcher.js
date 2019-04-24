import store from './store';
import * as actions from './actions';

export function addUserMessage(text) {
  store.dispatch(actions.addUserMessage(text));
}

export function addResponseMessage(text) {
  store.dispatch(actions.addResponseMessage(text));
}

export function addLinkSnippet(link) {
  store.dispatch(actions.addLinkSnippet(link));
}

export function toggleMsgLoader(payload) {
  store.dispatch(actions.toggleMsgLoader(payload));
}

export function renderCustomComponent(component, props, showAvatar = false) {
  store.dispatch(actions.renderCustomComponent(component, props, showAvatar));
}

export function toggleWidget() {
  store.dispatch(actions.toggleChat());
}

export function toggleInputDisabled() {
  store.dispatch(actions.toggleInputDisabled());
}

export function dropMessages() {
  store.dispatch(actions.dropMessages());
}

export function isWidgetOpened() {
  return store.getState().behavior.get('showChat');
}

export function setQuickButtons(buttons) {
  store.dispatch(actions.setQuickButtons(buttons));
}

export function toggleVoice(){
  store.dispatch(actions.toggleVioce());
}

export function toggleVoiceModel(){
  store.dispatch(actions.toggleVoiceModel());
}

export function toggleCancelVoice(){
  store.dispatch(actions.toggleCancelVoice());
}

export function getCancelVoiceState(){
  return store.getState().behavior.get('isCancelVoice');
}