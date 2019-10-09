import React from 'react';
import { ExpoConfigView } from '@expo/samples';

export default function Settings2Screen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return <ExpoConfigView />;
}

Settings2Screen.navigationOptions = {
  title: 'app.json',
};
