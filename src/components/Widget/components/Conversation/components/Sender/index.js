import React, { Component } from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

import Gesture from 'rc-gesture';
//import Siriwave from 'react-siriwave'

import send from '@assets/send_button.svg';
import voice from '@assets/microphone.svg';
import keyboard from '@assets/writing-tool.svg';

import { toggleVioce,toggleVoiceModel } from '@actions';

import './style.scss';

class Sender extends Component{
  input = React.createRef();

  componentDidUpdate() {
    const {inputRef } = this.props;
    // if(inputRef){
    //   inputRef.focus();
    // }
  }

  onimgClick = ()=>{
    this.props.dispatch(toggleVioce())
  }

  onVoiceClick = ()=>{
    this.props.dispatch(toggleVoiceModel())
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
    }
  }

  onPressUp = (gestureStatus)=>{
    if(this.props.onPressUp){
      this.props.onPressUp(gestureStatus);
    }else{
      console.log(gestureStatus);
    }
  }

  onPanUp  = (moveStatus)=>{
    if(this.props.onPanUp ){
      this.props.onPanUp(moveStatus);
    }else{
      console.log(moveStatus);
    }
  }

  onPan  = (moveStatus)=>{
    if(this.props.onPan ){
      this.props.onPan(moveStatus);
    }else{
      console.log(moveStatus);
    }
  }

  onPanLeft  = (moveStatus)=>{
    if(this.props.onPanLeft ){
      this.props.onPanLeft(moveStatus);
    }else{
      console.log(moveStatus);
    }
  }

  onPanRight  = (moveStatus)=>{
    if(this.props.onPanRight ){
      this.props.onPanRight(moveStatus);
    }else{
      console.log(moveStatus);
    }
  }

  onPanDown  = (moveStatus)=>{
    if(this.props.onPanDown ){
      this.props.onPanDown(moveStatus);
    }else{
      console.log(moveStatus);
    }
  }

  onPanStart  = (moveStatus)=>{
    if(this.props.onPanStart ){
      this.props.onPanStart(moveStatus);
    }else{
      console.log(moveStatus);
    }
  }

  onPanMove  = (moveStatus)=>{
    if(this.props.onPanMove ){
      this.props.onPanMove(moveStatus);
    }else{
      console.log(moveStatus);
    }
  }

  onPanEnd  = (moveStatus)=>{
    if(this.props.onPanEnd ){
      this.props.onPanEnd(moveStatus);
    }else{
      console.log(moveStatus);
    }
  }

  render() {
    const { sendMessage, placeholder, disabledInput, autofocus, showVoice,showVoiceModel,isCancelVoice } = this.props;
    const icon = showVoice ? keyboard : voice;
    return (
      <div>
      <form className="rcw-sender" onSubmit={sendMessage}>
        <div className="rcw-send">
          <img src={icon} className="rcw-send-icon" alt="voice" onClick={this.onimgClick} />
        </div>
        <div className={`sayBtn ${showVoice && 'active'}`}>
            <Gesture
            onTap={this.onTap}
            onPress={this.onPress}
            onPressUp={this.onPressUp}
            onPanUp ={this.onPanUp }
            onPanLeft={this.onPanLeft}
            onPanRight={this.onPanRight}
            onPanDown={this.onPanDown}
            >
              <span id="sendBtn" className="sendBtn">按住 说话</span>
            </Gesture>
        </div>
        <input type="text" className={`rcw-new-message ${showVoice && 'not-active'}`}  name="message" placeholder={placeholder} disabled={disabledInput} autoFocus={autofocus} autoComplete="off"/>
        <button type="submit" className={`rcw-send ${showVoice && 'not-active'}`}>
            <img src={send} className="rcw-send-icon" alt="send" />
        </button>
      </form>
      <div className = {`alert-loading ${showVoiceModel && !isCancelVoice && 'active'}`} >
        <div className = "loading-icon">
          <div id="one"></div>
          <div id="two"></div>
          <div id="three"></div>
          <div id="four"></div>
          <div id="five"></div>
        </div>
        <p>松开发送， 上滑取消</p>
      </div>
      <div className = {`voice-cancel ${showVoiceModel && isCancelVoice && 'active'}`} >
        <div className = "voice-cancel-icon">
        </div>
        <p>松开手指， 取消发送</p>
      </div>
      <div className={`mask ${showVoiceModel && 'active'}`}></div>
      </div>
    );
  }

}

Sender.propTypes = {
  sendMessage: PropTypes.func,
  placeholder: PropTypes.string,
  disabledInput: PropTypes.bool,
  autofocus: PropTypes.bool
};

export default connect(store=>({
  showVoice:store.behavior.get('showVoice'),
  showVoiceModel:store.behavior.get('showVoiceModel'),
  isCancelVoice:store.behavior.get('isCancelVoice')
}))(Sender);
