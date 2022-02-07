import React from 'react';
import {NativeModules, NativeModulesStatic} from 'react-native';

type localStorage = {
  setItem: (key: string, value: string) => void;
  getItem: (key: string) => string; //if it returns 0 then the value that ur trying to acess is empty
  clear: () => void;
};
// type OtherModule = {/* ... */}
type CustomModules = {localStorage: localStorage};
export const {localStorage} = <CustomModules & NativeModulesStatic>(
  NativeModules
);
