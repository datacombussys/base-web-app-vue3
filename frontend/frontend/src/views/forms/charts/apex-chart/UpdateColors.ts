import { computed } from 'vue';
import * as themeColors from '@/theme/LightTheme';
import * as themeDarkColors from '@/theme/DarkTheme';
import { useCustomizerStore } from '@/stores/customizer';

const custmizer = useCustomizerStore();

const getPrimary = computed(() => {
  if (custmizer.actTheme === 'LightTheme1') {
    return themeColors.LightTheme1.colors.primary;
  } else if (custmizer.actTheme === 'LightTheme2') {
    return themeColors.LightTheme2.colors.primary;
  } else if (custmizer.actTheme === 'LightTheme3') {
    return themeColors.LightTheme3.colors.primary;
  } else if (custmizer.actTheme === 'LightTheme4') {
    return themeColors.LightTheme4.colors.primary;
  } else if (custmizer.actTheme === 'LightTheme5') {
    return themeColors.LightTheme5.colors.primary;
  } else if (custmizer.actTheme === 'LightTheme6') {
    return themeColors.LightTheme6.colors.primary;
  } else if (custmizer.actTheme === 'LightTheme7') {
    return themeColors.LightTheme7.colors.primary;
  } else if (custmizer.actTheme === 'LightTheme8') {
    return themeColors.LightTheme8.colors.primary;
  } else {
    return themeColors.DefaultTheme.colors.primary;
  }
});

const getdarkPrimary = computed(() => {
  if (custmizer.actTheme === 'LightTheme1') {
    return themeColors.LightTheme1.colors.darkprimary;
  } else if (custmizer.actTheme === 'LightTheme2') {
    return themeColors.LightTheme2.colors.darkprimary;
  } else if (custmizer.actTheme === 'LightTheme3') {
    return themeColors.LightTheme3.colors.darkprimary;
  } else if (custmizer.actTheme === 'LightTheme4') {
    return themeColors.LightTheme4.colors.darkprimary;
  } else if (custmizer.actTheme === 'LightTheme5') {
    return themeColors.LightTheme5.colors.darkprimary;
  } else if (custmizer.actTheme === 'LightTheme6') {
    return themeColors.LightTheme6.colors.darkprimary;
  } else if (custmizer.actTheme === 'LightTheme7') {
    return themeColors.LightTheme7.colors.darkprimary;
  } else if (custmizer.actTheme === 'LightTheme8') {
    return themeColors.LightTheme8.colors.darkprimary;
  } else {
    return themeColors.DefaultTheme.colors.darkprimary;
  }
});

const getLightBorder = computed(() => {
  if (custmizer.actTheme === 'LightTheme1') {
    return themeColors.LightTheme1.colors.borderLight;
  } else if (custmizer.actTheme === 'LightTheme2') {
    return themeColors.LightTheme2.colors.borderLight;
  } else if (custmizer.actTheme === 'LightTheme3') {
    return themeColors.LightTheme3.colors.borderLight;
  } else if (custmizer.actTheme === 'LightTheme4') {
    return themeColors.LightTheme4.colors.borderLight;
  } else if (custmizer.actTheme === 'LightTheme5') {
    return themeColors.LightTheme5.colors.borderLight;
  } else if (custmizer.actTheme === 'LightTheme6') {
    return themeColors.LightTheme6.colors.borderLight;
  } else if (custmizer.actTheme === 'LightTheme7') {
    return themeColors.LightTheme7.colors.borderLight;
  } else if (custmizer.actTheme === 'LightTheme8') {
    return themeColors.LightTheme8.colors.borderLight;
  } else if (custmizer.actTheme === 'DarkTheme1') {
    return themeDarkColors.DarkTheme1.colors.borderLight;
  } else if (custmizer.actTheme === 'DarkTheme2') {
    return themeDarkColors.DarkTheme2.colors.borderLight;
  } else if (custmizer.actTheme === 'DarkTheme3') {
    return themeDarkColors.DarkTheme3.colors.borderLight;
  } else if (custmizer.actTheme === 'DarkTheme4') {
    return themeDarkColors.DarkTheme4.colors.borderLight;
  } else if (custmizer.actTheme === 'DarkTheme5') {
    return themeDarkColors.DarkTheme5.colors.borderLight;
  } else if (custmizer.actTheme === 'DarkTheme6') {
    return themeDarkColors.DarkTheme6.colors.borderLight;
  } else if (custmizer.actTheme === 'DarkTheme7') {
    return themeDarkColors.DarkTheme7.colors.borderLight;
  } else if (custmizer.actTheme === 'DarkTheme8') {
    return themeDarkColors.DarkTheme8.colors.borderLight;
  } else if (custmizer.actTheme === 'DarkDefaultTheme') {
    return themeDarkColors.DarkDefaultTheme.colors.borderLight;
  } else {
    return themeColors.DefaultTheme.colors.borderLight;
  }
});

const getLightPrimary = computed(() => {
  if (custmizer.actTheme === 'LightTheme1') {
    return themeColors.LightTheme1.colors.primary200;
  } else if (custmizer.actTheme === 'LightTheme2') {
    return themeColors.LightTheme2.colors.primary200;
  } else if (custmizer.actTheme === 'LightTheme3') {
    return themeColors.LightTheme3.colors.primary200;
  } else if (custmizer.actTheme === 'LightTheme4') {
    return themeColors.LightTheme4.colors.primary200;
  } else if (custmizer.actTheme === 'LightTheme5') {
    return themeColors.LightTheme5.colors.primary200;
  } else if (custmizer.actTheme === 'LightTheme6') {
    return themeColors.LightTheme6.colors.primary200;
  } else if (custmizer.actTheme === 'LightTheme7') {
    return themeColors.LightTheme7.colors.primary;
  } else if (custmizer.actTheme === 'LightTheme8') {
    return themeColors.LightTheme8.colors.primary;
  } else {
    return themeColors.DefaultTheme.colors.primary200;
  }
});

const getSecondary = computed(() => {
  if (custmizer.actTheme === 'LightTheme1') {
    return themeColors.LightTheme1.colors.secondary;
  } else if (custmizer.actTheme === 'LightTheme2') {
    return themeColors.LightTheme2.colors.secondary;
  } else if (custmizer.actTheme === 'LightTheme3') {
    return themeColors.LightTheme3.colors.secondary;
  } else if (custmizer.actTheme === 'LightTheme4') {
    return themeColors.LightTheme4.colors.secondary;
  } else if (custmizer.actTheme === 'LightTheme5') {
    return themeColors.LightTheme5.colors.secondary;
  } else if (custmizer.actTheme === 'LightTheme6') {
    return themeColors.LightTheme6.colors.secondary;
  } else if (custmizer.actTheme === 'LightTheme7') {
    return themeColors.LightTheme7.colors.secondary;
  } else if (custmizer.actTheme === 'LightTheme8') {
    return themeColors.LightTheme8.colors.secondary;
  } else {
    return themeColors.DefaultTheme.colors.secondary;
  }
});

const getLightSecondary = computed(() => {
  if (custmizer.actTheme === 'LightTheme1') {
    return themeColors.LightTheme1.colors.secondary200;
  } else if (custmizer.actTheme === 'LightTheme2') {
    return themeColors.LightTheme2.colors.secondary200;
  } else if (custmizer.actTheme === 'LightTheme3') {
    return themeColors.LightTheme3.colors.secondary200;
  } else if (custmizer.actTheme === 'LightTheme4') {
    return themeColors.LightTheme4.colors.secondary200;
  } else if (custmizer.actTheme === 'LightTheme5') {
    return themeColors.LightTheme5.colors.secondary200;
  } else if (custmizer.actTheme === 'LightTheme6') {
    return themeColors.LightTheme6.colors.secondary200;
  } else if (custmizer.actTheme === 'LightTheme7') {
    return themeColors.LightTheme7.colors.secondary200;
  } else if (custmizer.actTheme === 'LightTheme8') {
    return themeColors.LightTheme8.colors.secondary200;
  } else {
    return themeColors.DefaultTheme.colors.secondary200;
  }
});

export { getPrimary, getSecondary, getdarkPrimary, getLightPrimary, getLightSecondary, getLightBorder };
