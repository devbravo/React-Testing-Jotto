import { combineReducers } from 'redux';
import success from './sucessRedcuer';
import guessedWords from './guessedWordsReducer';

export default combineReducers({
  success,
  guessedWords,
});
