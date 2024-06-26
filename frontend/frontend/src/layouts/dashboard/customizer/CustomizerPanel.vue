<script setup lang="ts">
import { ref } from 'vue';
import { useCustomizerStore } from '@/stores/customizer';
// icons
import { CloseCircleOutlined, BorderInnerOutlined, HighlightOutlined, BgColorsOutlined, FontColorsOutlined } from '@ant-design/icons-vue';

// assets
import ThemeColor from '@/assets/images/customizer/theme-color.svg';

const customizer = useCustomizerStore();

// themes color options
const themeColors = ref([
  {
    name: 'DefaultTheme',
    title: 'Default',
    bg: 'themeDefault'
  },
  {
    name: 'LightTheme1',
    title: 'Theme 1',
    bg: 'themeLightTheme1'
  },
  {
    name: 'LightTheme2',
    title: 'Theme 2',
    bg: 'themeLightTheme2'
  },
  {
    name: 'LightTheme3',
    title: 'Theme 3',
    bg: 'themeLightTheme3'
  },
  {
    name: 'LightTheme4',
    title: 'Theme 4',
    bg: 'themeLightTheme4'
  },
  {
    name: 'LightTheme5',
    title: 'Theme 5',
    bg: 'themeLightTheme5'
  },
  {
    name: 'LightTheme6',
    title: 'Theme 6',
    bg: 'themeLightTheme6'
  },
  {
    name: 'LightTheme7',
    title: 'Theme 7',
    bg: 'themeLightTheme7'
  },
  {
    name: 'LightTheme8',
    title: 'Theme 8',
    bg: 'themeLightTheme8'
  }
]);

// Dark Theme Colors
const DarkthemeColors = ref([
  { name: 'DarkDefaultTheme', title: 'Default', bg: 'themeDarkDefault' },
  { name: 'DarkTheme1', title: 'Theme 1', bg: 'themeDark1' },
  { name: 'DarkTheme2', title: 'Theme 2', bg: 'themeDark2' },
  { name: 'DarkTheme3', title: 'Theme 3', bg: 'themeDark3' },
  { name: 'DarkTheme4', title: 'Theme 4', bg: 'themeDark4' },
  { name: 'DarkTheme5', title: 'Theme 5', bg: 'themeDark5' },
  { name: 'DarkTheme6', title: 'Theme 6', bg: 'themeDark6' },
  { name: 'DarkTheme7', title: 'Theme 7', bg: 'themeDark7' },
  { name: 'DarkTheme8', title: 'Theme 8', bg: 'themeDark8' }
]);

// themes font Family options
const fontFamily = ref(['Inter', 'Roboto', 'Poppins', 'Public sans']);
// themes font Family options

const multiple = ref([0, 1, 2, 3, 4, 5]);

function clearoptions() {
  customizer.actTheme = 'DefaultTheme';
  customizer.setHorizontalLayout = false;
  customizer.inputBg = false;
  customizer.boxed = false;
  customizer.fontTheme = 'Public sans';
}
</script>

<!------------------------------------->
<!-- Customizer -->
<!------------------------------------->
<template>
  <v-navigation-drawer app temporary elevation="24" location="right" border="0" v-model="customizer.Customizer_drawer" width="340">
    <v-row class="ma-0">
      <v-col cols="12" class="pa-0">
        <div class="pa-5 d-flex justify-space-between align-center bg-primary">
          <div class="text-h5 font-weight-medium">Theme Customization</div>
          <div>
            <v-btn variant="text" icon density="compact" @click.stop="customizer.SET_CUSTOMIZER_DRAWER(!customizer.Customizer_drawer)">
              <CloseCircleOutlined />
            </v-btn>
          </div>
        </div>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <perfect-scrollbar style="height: calc(100vh - 69px)">
      <div>
        <v-row class="ma-0">
          <v-col cols="12" class="pa-0">
            <v-expansion-panels v-model="multiple" class="customizer-accordion" multiple>
              <v-expansion-panel elevation="0" class="border-0 mb-1">
                <v-expansion-panel-title class="pb-2">
                  <div class="d-flex align-center">
                    <v-avatar variant="tonal" color="primary" rounded>
                      <BorderInnerOutlined :style="{ fontSize: '16px' }" />
                    </v-avatar>
                    <div class="ml-3">
                      <h6 class="text-subtitle-1 mb-0">Menu Orientation</h6>
                      <p class="text-caption mb-0">Choose Vertical or Horizontal Menu Orientation</p>
                    </div>
                  </div>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <!-- sidebar layout -->
                  <!------------------------------------->
                  <div>
                    <v-radio-group class="custom-radio ma-n2" v-model="customizer.setHorizontalLayout" hide-details>
                      <v-radio :value="false" color="primary" class="ma-2 text-center" label="Vertical">
                        <img src="@/assets/images/customizer/default.svg" alt="menu layout" style="width: 64px; height: 64px; left: -24%" />
                      </v-radio>
                      <v-radio :value="true" color="primary" class="ma-2 text-center" label="Horizontal">
                        <img
                          src="@/assets/images/customizer/container.svg"
                          alt="menu layout"
                          style="width: 64px; height: 64px; left: -7%"
                        />
                      </v-radio>
                    </v-radio-group>
                  </div>
                  <!------------------------------------->
                  <!-- end sidebar layout -->
                  <!------------------------------------->
                </v-expansion-panel-text>
              </v-expansion-panel>

              <!------------------------------------->
              <!-- Preset color -->
              <!------------------------------------->
              <v-expansion-panel elevation="0" class="mb-1">
                <v-expansion-panel-title class="pb-2">
                  <div class="d-flex align-center">
                    <v-avatar variant="tonal" color="primary" rounded>
                      <BgColorsOutlined :style="{ fontSize: '16px' }" />
                    </v-avatar>
                    <div class="ml-3">
                      <h6 class="text-subtitle-1 mb-0">Color Scheme</h6>
                      <p class="text-caption mb-0">Choose your primary theme color</p>
                    </div>
                  </div>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <v-card-item class="pa-0">
                    <v-card-text class="pa-1 colors-scheme">
                      <v-item-group mandatory v-model="customizer.actTheme" class="d-flex flex-wrap ga-4">
                        <v-item v-slot="{ isSelected, toggle }" v-for="theme in themeColors" :key="theme.name" :value="theme.name">
                          <div class="d-flex flex-column bg-gray100 pa-2 rounded" @click="toggle" :class="isSelected ? 'Selected' : ''">
                            <v-img
                              :src="ThemeColor"
                              alt="book"
                              height="40px"
                              width="40px"
                              cover
                              :class="theme.bg"
                              class="ma-auto rounded"
                            />
                            <span class="text-caption mt-3">{{ theme.title }}</span>
                          </div>
                        </v-item>
                      </v-item-group>
                    </v-card-text>
                  </v-card-item>
                </v-expansion-panel-text>
              </v-expansion-panel>
              <!------------------------------------->
              <!-- end Preset color -->
              <!------------------------------------->

              <!------------------------------------->
              <!-- Dark Preset color -->
              <!------------------------------------->
              <v-expansion-panel elevation="0" class="mb-1">
                <v-expansion-panel-title class="pb-2">
                  <div class="d-flex align-center">
                    <v-avatar variant="tonal" color="primary" rounded>
                      <BgColorsOutlined :style="{ fontSize: '16px' }" />
                    </v-avatar>
                    <div class="ml-3">
                      <h6 class="text-subtitle-1 mb-0">Dark Preset Color</h6>
                      <p class="text-caption mb-0">Choose your primary theme color for dark mode</p>
                    </div>
                  </div>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <v-item-group mandatory v-model="customizer.actTheme">
                    <v-card-item class="pa-0">
                      <v-card-text class="pa-1 colors-scheme">
                        <v-item-group mandatory v-model="customizer.actTheme" class="d-flex flex-wrap ga-4">
                          <v-item v-slot="{ isSelected, toggle }" v-for="theme in DarkthemeColors" :key="theme.name" :value="theme.name">
                            <div class="d-flex flex-column bg-gray100 pa-2 rounded" @click="toggle" :class="isSelected ? 'Selected' : ''">
                              <v-img
                                :src="ThemeColor"
                                alt="book"
                                height="40px"
                                width="40px"
                                cover
                                :class="theme.bg"
                                class="ma-auto rounded"
                              />
                              <span class="text-caption mt-3">{{ theme.title }}</span>
                            </div>
                          </v-item>
                        </v-item-group>
                      </v-card-text>
                    </v-card-item>
                  </v-item-group>
                </v-expansion-panel-text>
              </v-expansion-panel>
              <!------------------------------------->
              <!-- end dark Preset color -->
              <!------------------------------------->

              <!------------------------------------->
              <!------------------------------------->
              <!-- Input Outlined With Filled -->
              <!------------------------------------->
              <v-expansion-panel elevation="0" class="mb-1">
                <v-expansion-panel-title class="pb-2">
                  <div class="d-flex align-center">
                    <v-avatar variant="tonal" color="primary" rounded>
                      <HighlightOutlined :style="{ fontSize: '16px' }" />
                    </v-avatar>
                    <div class="ml-3">
                      <h6 class="text-subtitle-1 mb-0">Input Background</h6>
                      <p class="text-caption mb-0">Choose option with background or without background for input</p>
                    </div>
                  </div>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <v-radio-group class="custom-radio input-radio ma-n2" v-model="customizer.inputBg" hide-details>
                    <v-radio :value="true" color="primary" class="ma-2 input-bg px-3" label="With Background"> </v-radio>
                    <v-radio :value="false" color="primary" class="ma-2 without-bg px-3" label="Without Background"> </v-radio>
                  </v-radio-group>
                </v-expansion-panel-text>
              </v-expansion-panel>
              <!------------------------------------->
              <!-- End Input Outlined With Filled -->
              <!------------------------------------->

              <!------------------------------------->
              <!-- Boxed Container -->
              <!------------------------------------->
              <v-expansion-panel elevation="0" class="mb-1">
                <v-expansion-panel-title class="pb-2">
                  <div class="d-flex align-center">
                    <v-avatar variant="tonal" color="primary" rounded>
                      <BorderInnerOutlined :style="{ fontSize: '16px' }" />
                    </v-avatar>
                    <div class="ml-3">
                      <h6 class="text-subtitle-1 mb-0">Layout Width</h6>
                      <p class="text-caption mb-0">Choose fluid or container layout</p>
                    </div>
                  </div>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <v-radio-group class="custom-radio ma-n2" v-model="customizer.boxed" hide-details>
                    <v-radio :value="false" color="primary" class="ma-2 text-center" label="Fluid">
                      <img src="@/assets/images/customizer/default.svg" alt="layout" style="width: 64px; height: 64px" />
                    </v-radio>
                    <v-radio :value="true" color="primary" class="ma-2 text-center" label="Container">
                      <img src="@/assets/images/customizer/container.svg" alt="layout" style="width: 64px; height: 64px; left: -10%" />
                    </v-radio>
                  </v-radio-group>
                </v-expansion-panel-text>
              </v-expansion-panel>
              <!------------------------------------->
              <!-- End Box Container -->
              <!------------------------------------->

              <!------------------------------------->
              <!-- Font Family -->
              <!------------------------------------->
              <v-expansion-panel elevation="0" class="mb-1">
                <v-expansion-panel-title class="pb-1">
                  <div class="d-flex align-center">
                    <v-avatar variant="tonal" color="primary" rounded>
                      <FontColorsOutlined :style="{ fontSize: '16px' }" />
                    </v-avatar>
                    <div class="ml-3">
                      <h6 class="text-subtitle-1 mb-0">Font Family</h6>
                      <p class="text-caption mb-0">Choose your font family.</p>
                    </div>
                  </div>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <v-radio-group v-model="customizer.fontTheme" hide-details class="custom-font">
                    <v-radio v-for="font in fontFamily" :key="font" :value="font" color="primary" class="mb-2 text-center">
                      <template v-slot:label>
                        <h5 :class="`${font} text-h5 mb-0`">Aa</h5>
                        <span class="text-caption text-lightText">{{ font }}</span>
                      </template>
                    </v-radio>
                  </v-radio-group>
                </v-expansion-panel-text>
              </v-expansion-panel>
              <!------------------------------------->
              <!-- end Font Family -->
              <!------------------------------------->
              <!------------------------------------->
            </v-expansion-panels>
            <v-divider></v-divider>
            <div class="d-flex pa-4">
              <v-btn color="error" variant="tonal" block @click="clearoptions"> Reset </v-btn>
            </div>
          </v-col>
        </v-row>
      </div>
    </perfect-scrollbar>
  </v-navigation-drawer>
</template>
<style lang="scss">
@import '@/scss/_variables.scss';
.customizer-accordion {
  .v-expansion-panel-title {
    padding: 16px;
  }
  .v-expansion-panel {
    border-width: 0;
    border-top: 1px solid rgb(var(--v-theme-borderLight));
    border-radius: 0;
    &.v-expansion-panel--active {
      .v-expansion-panel-title--active {
        .v-expansion-panel-title__overlay {
          background: transparent;
        }
      }
    }
    .v-expansion-panel-text__wrapper {
      padding: 16px;
      border-top: none;
    }
  }
  .v-expansion-panel-title {
    &:hover {
      > .v-expansion-panel-title__overlay {
        opacity: 0;
      }
    }
  }
}
.custom-radio {
  .v-selection-control-group {
    flex-direction: row;
    .v-selection-control {
      width: 80px;
      height: 108px;
      align-items: center;
      justify-content: center;
      flex: unset;
      display: block;
      background: rgb(var(--v-theme-gray100));
      border-radius: 4px;
      box-shadow: $box-shadow;
      .v-label {
        justify-content: center;
        font-size: 0.75rem;
        line-height: 1.66;
        padding-top: 70px;
        --v-medium-emphasis-opacity: 1;
      }
      &.v-selection-control--dirty {
        box-shadow: 0 0 0 2px rgba(var(--v-theme-primary), 0.2);
        background-color: rgba(var(--v-theme-primary), 0.1);
      }
      .v-selection-control__wrapper {
        position: absolute;
        .v-selection-control__input {
          opacity: 0;
          width: unset;
          height: unset;
        }
        img {
          position: absolute;
          top: 8px;
          left: -45%;
          z-index: -1;
        }
      }
    }
  }
}
.colors-scheme {
  .bg-gray100 {
    box-shadow: $box-shadow;
    &.Selected {
      box-shadow: 0 0 0 2px rgba(var(--v-theme-primary), 0.2);
      background-color: rgba(var(--v-theme-primary), 0.1) !important;
    }
  }
}
.input-bg {
  background-color: rgb(var(--v-theme-gray100)) !important;
}
.without-bg {
  background-color: rgb(var(--v-theme-surface)) !important;
}
.input-radio {
  .v-selection-control-group {
    .v-selection-control {
      height: 30px;
      width: 100%;
      .v-label {
        padding-top: 0;
      }
    }
  }
}
.custom-font {
  .v-selection-control-group {
    flex-direction: row;
    flex-wrap: wrap;
    .v-selection-control__wrapper {
      display: none;
    }
    .v-selection-control {
      border: 6px solid rgb(var(--v-theme-gray100));
      border-radius: 4px;
      margin: 6px;
      padding: 8px;
      min-width: 80px;
      .v-label {
        display: block;
        text-align: center;
        --v-medium-emphasis-opacity: 1;
      }
      &.v-selection-control--dirty {
        border: 6px solid rgba(var(--v-theme-primary), 0.1);
        box-shadow: 0 0 0 2px rgba(var(--v-theme-primary), 0.2);
      }
    }
  }
  .v-selection-control {
    justify-content: center;
  }
}
</style>
