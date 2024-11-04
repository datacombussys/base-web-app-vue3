import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
import { icons } from './mdi-icon'; // Import icons from separate file
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import {
  DefaultTheme,
  LightTheme1,
  LightTheme2,
  LightTheme3,
  LightTheme4,
  LightTheme5,
  LightTheme6,
  LightTheme7,
  LightTheme8
} from '@/theme/LightTheme';
import {
  DarkDefaultTheme,
  DarkTheme1,
  DarkTheme6,
  DarkTheme7,
  DarkTheme8,
  DarkTheme5,
  DarkTheme2,
  DarkTheme3,
  DarkTheme4
} from '@/theme/DarkTheme';

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases: {
      ...aliases,
      ...icons
    },
    sets: {
      mdi
    }
  },
  theme: {
    defaultTheme: 'DefaultTheme',
    themes: {
      DefaultTheme,
      LightTheme1,
      LightTheme2,
      LightTheme3,
      LightTheme4,
      LightTheme5,
      LightTheme6,
      LightTheme7,
      LightTheme8,
      DarkDefaultTheme,
      DarkTheme1,
      DarkTheme8,
      DarkTheme7,
      DarkTheme6,
      DarkTheme5,
      DarkTheme2,
      DarkTheme3,
      DarkTheme4
    }
  },
  defaults: {
    VBtn: {},
    VCard: {
      rounded: 'md'
    },
    VTextField: {
      rounded: 'lg'
    },
    VTooltip: {
      // set v-tooltip default location to top
      location: 'top'
    }
  }
});
