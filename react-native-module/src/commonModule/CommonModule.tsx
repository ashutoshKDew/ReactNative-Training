/**
 * This exposes the native CalendarModule module as a JS module. This has a
 * function 'createCalendarEvent' which takes the following parameters:
 *
 * 1. String name: A string representing the name of the event
 * 2. String location: A string representing the location of the event
 */
import {NativeModules} from 'react-native';
const {CommonModule} = NativeModules;

interface CommonInterface {
  createCommonEvent(name: string, callBack: (result: string) => void): void;
}

export default CommonModule as CommonInterface;
