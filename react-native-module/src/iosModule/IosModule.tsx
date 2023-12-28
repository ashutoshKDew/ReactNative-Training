import {NativeModules} from 'react-native';
const {IosModule} = NativeModules;

interface IosInterface {
  createIosEvent(random: number, callBack: (result: number) => void): void;
}

export default IosModule as IosInterface;
