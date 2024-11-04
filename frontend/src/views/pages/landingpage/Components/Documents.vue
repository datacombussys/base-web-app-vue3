<script setup lang="ts">
import { ref, onMounted } from 'vue';
// assets
import imageDemo1 from '@/assets/images/landing/img-demo2.jpg';
import imageDemo2 from '@/assets/images/landing/img-demo1.jpg';
import imageDemo3 from '@/assets/images/landing/img-demo3.jpg';

// icons
import { SendOutlined } from '@ant-design/icons-vue';
import { DownloadOutlined } from '@ant-design/icons-vue';
const intro = '@/assets/documents/timeline.odt'

const relativeURL = ref<string | null>(null);

onMounted(async () => {
  try {
    relativeURL.value = await import.meta.env.BASE_URL;
  } catch (error) {
    console.error('Error url not found:', error);
  }
});
</script>

<template>
  <div class="spacer">
    <v-container class="maxWidth">
      <v-row class="justify-center">

        <v-col md="4" sm="6" cols="12" data-aos="fade-up" data-aos-duration="800">
          <v-card variant="outlined" class="bg-surface overflow-hidden">
            <v-card-item class="pa-5 pb-7">
              <v-card-title class="text-h3 pb-3 mt-4">Intro and Methodology</v-card-title>
              <p class="mb-6 text-h6 text-lightText">
                I will discuss who I am and I will review my mehtodology for understanding Scripture.
              </p>
              <v-btn
                color="dark"
                variant="outlined"
                :href="intro"
								download
              >
                <template v-slot:append>
                  <DownloadOutlined />
                </template>
                Download PDF
              </v-btn>
            </v-card-item>

          </v-card>
        </v-col>

        <v-col md="4" sm="6" cols="12" data-aos="fade-up" data-aos-duration="800">
          <v-card variant="outlined" class="bg-surface overflow-hidden">
            <v-card-item class="pa-5 pb-7">
              <v-card-title wrap class="text-h3 pb-3 mt-4">Prostitute, Beast, and False Prophet</v-card-title>
              <p class="mb-6 text-h6 text-lightText">
                I will discuss who I have identified as the prostitute, the beast and the false prophet, in addition to the number of their names.
              </p>
              <v-btn
                color="dark"
                variant="outlined"
                target="_"
                href="https://www.figma.com/file/NJGFukWMHgU0LVhS4qLP4A/Mantis?node-id=106412%3A169520"
              >
                <template v-slot:append>
                  <DownloadOutlined />
                </template>
                Download PDF
              </v-btn>
            </v-card-item>

          </v-card>
        </v-col>

				<v-col md="4" sm="6" cols="12" data-aos="fade-up" data-aos-duration="800">
          <v-card variant="outlined" class="bg-surface overflow-hidden">
            <v-card-item class="pa-5 pb-7">
              <v-card-title class="text-h3 pb-3 mt-4">Timeline of the End</v-card-title>
              <p class="mb-6 text-h6 text-lightText">
                I will discuss the projected timeline for the culmination of the end-times events including rapture.
              </p>
              <v-btn
                color="dark"
                variant="outlined"
                target="_"
                href="https://www.figma.com/file/NJGFukWMHgU0LVhS4qLP4A/Mantis?node-id=106412%3A169520"
              >
                <template v-slot:append>
                  <DownloadOutlined />
                </template>
                Download PDF
              </v-btn>
            </v-card-item>

          </v-card>
        </v-col>

      </v-row>
    </v-container>
  </div>
</template>
