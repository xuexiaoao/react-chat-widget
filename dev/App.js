import React, { Component } from 'react';
import { Widget, addResponseMessage, setQuickButtons, toggleMsgLoader } from '../index';

export default class App extends Component {
  componentDidMount() {
    addResponseMessage('Welcome to this awesome chat!');
  }

  componentDidUpdate() {
    if(this.WdgetInput){
      WdgetInput.focus();
    }
  }

  handleNewUserMessage = (newMessage) => {    
    toggleMsgLoader({userInput:'right'});
    setTimeout(() => {
      toggleMsgLoader();      
      if (newMessage === 'fruits') {
        setQuickButtons([ { label: 'Apple', value: 'apple' }, { label: 'Orange', value: 'orange' }, { label: 'Pear', value: 'pear' }, { label: 'Banana', value: 'banana' } ]);
      } else {
        addResponseMessage(newMessage);
      }
    }, 2000);
  }

  handleQuickButtonClicked = (e) => {
    addResponseMessage('Selected ' + e);
    setQuickButtons([]);
  }

  onTap = (gestureStatus)=>{
    if(this.props.onTap){
      this.props.onTap(gestureStatus);
    }else{
      console.log(gestureStatus);
    }
  }

  onPress = (gestureStatus)=>{
    if(this.props.onPress){
      this.props.onPress(gestureStatus);
    }else{
      console.log(gestureStatus);
      console.log('开始录音');
    }
  }

  onPressOut = (gestureStatus)=>{
    if(this.props.onPressOut){
      this.props.onPressOut(gestureStatus);
    }else{
      console.log(gestureStatus);
      console.log('停止录音，返回mediaId');
      console.log('调用语音转文本接口');
      console.log('发送消息')
    }
  }

  onSwipeUp = (gestureStatus)=>{
    if(this.props.onSwipeUp){
      this.props.onSwipeUp(gestureStatus);
    }else{
      console.log(gestureStatus);
    }
  }


  render() {
    return (
      <Widget
        title="Bienvenido"
        subtitle="Asistente virtual"
        senderPlaceHolder="Escribe aquí ..."
        handleNewUserMessage={this.handleNewUserMessage}
        handleQuickButtonClicked={this.handleQuickButtonClicked}
        badge={1}
        inputRef={DOM=>{this.WdgetInput=DOM;}}
      />
    );
  }
}
