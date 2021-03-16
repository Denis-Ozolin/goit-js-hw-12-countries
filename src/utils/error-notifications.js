import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';

defaultModules.set(PNotifyMobile, {});

const errorNotificationMessage = 'Too many matches found. Please enter a more specific query!';

  function onErrorNotification(){
    return error({
      text: `${errorNotificationMessage}`,
    })
  }

  export default onErrorNotification; 
