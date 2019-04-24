import { Map } from 'immutable';

import { createReducer } from '@utils/store';

import * as actionTypes from '../actions/actionTypes';

const initialState = Map({ showChat: false, disabledInput: false, msgLoader: false, showVoice: false, showVoiceModel: false, userInput: false,isCancelVoice:false });

const behaviorReducer = {
  [actionTypes.TOGGLE_CHAT]: state =>
    state.update('showChat', showChat => !showChat),

  [actionTypes.TOGGLE_INPUT_DISABLED]: state =>
    state.update('disabledInput', disabledInput => !disabledInput),

  [actionTypes.TOGGLE_MSG_LOADER]: (state,{payload}) =>{
    let result = state.update('msgLoader', msgLoader => !msgLoader);
    payload?result = result.update('userInput', () => payload.userInput==='right'?true:false):'';
    return result;
  },

  [actionTypes.TOGGLE_VOICE]: state => 
  state.update('showVoice', showVoice => !showVoice),
  
  [actionTypes.TOGGEL_VOICE_MODEL]: state => 
  state.update('showVoiceModel', showVoiceModel => !showVoiceModel),

  [actionTypes.TOGGEL_CANCEL_VOICE]: state => 
  state.update('isCancelVoice', isCancelVoice => !isCancelVoice)
};

export default (state = initialState, action) => createReducer(behaviorReducer, state, action);
