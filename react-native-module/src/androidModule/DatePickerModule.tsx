import {NativeModules} from 'react-native';
const {DatePickerModule} = NativeModules;

interface AndroidInterface {
  openBasicDatePicker(callBack: (result: string) => void): void;
}

export default DatePickerModule as AndroidInterface;
