import { setFailed } from '@actions/core';

(async(): Promise<void> => {
  console.log('Hello world!');
  
})().catch(error => {
  console.log(error);
  setFailed(error.message);
});
