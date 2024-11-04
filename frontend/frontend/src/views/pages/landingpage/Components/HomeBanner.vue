<script setup lang="ts">
// assets
import dashboard from '@/assets/images/landing/bg-mockup-default.png';
import technology from '@/assets/images/landing/technology.svg';
import merchant from '@/assets/images/datacom/merchant1.jpeg';

// icons
import { EyeOutlined } from '@ant-design/icons-vue';

// Vuetify Breakpoints
  import { useDisplay } from 'vuetify'
  // Destructure only the keys you want to use
  const { smAndDown } = useDisplay()

</script>

<template>
  <div class="home-bg2">
		<v-img
      :min-height="minHeight"
      :src="merchant"
      class="white--text"
      gradient="to right, rgba(5, 11, 31, .2), rgba(5, 11, 31, .2)">

		 <v-row class="fill-height flex justify-center">
        <v-responsive
          class="d-flex align-center justify-center"
          height="100%"
          max-width="100%"
          width="100%"
        >
				
					<v-row class="spacer" justify="center">
						<v-col cols="12" lg="4" md="5" class="px-10">
							<div class="pr-lg-4 homeContent text-md-left text-center">
								<h1 class="bannerText mb-5 text-white" data-aos="fade-up" data-aos-duration="500">
									Carefully Crafted for your <span class="text-primary">Caring Vue</span> Project!
								</h1>
								<p class="mb-8 text-h5 font-weight-regular text-white" data-aos="fade-up" data-aos-duration="800">
									Mantis Vue is a blazing-fast dashboard template built using the Vuetify library.
								</p>
								<div data-aos="fade-up" class="d-flex flex-wrap ga-2 justify-md-start justify-center" data-aos-duration="1000">
									<v-btn color="primary" size="large" variant="outlined" to="/components/buttons">Explore components</v-btn>
									<v-btn color="primary" size="large" to="/dashboard/default">
										<template v-slot:prepend>
											<EyeOutlined />
										</template>
										Live Preview
									</v-btn>
								</div>
								<div data-aos="fade-up" data-aos-duration="1400">
									
								</div>
							</div>
						</v-col>
					</v-row>
				</v-responsive>
				
      </v-row>
		</v-img>



    <!-- <v-container class="maxWidth">
			<img :src="merchant" class="HeaderImage d-none d-md-block" />
      <v-row class="spacer align-center">
        <v-col cols="12" lg="4" md="5">
          <div class="pr-lg-4 homeContent text-md-left text-center">
            <h1 class="bannerText mb-5 text-white" data-aos="fade-up" data-aos-duration="500">
              Carefully Crafted for your <span class="text-primary">Caring Vue</span> Project
            </h1>
            <p class="mb-8 text-h5 font-weight-regular text-white" data-aos="fade-up" data-aos-duration="800">
              Mantis Vue is a blazing-fast dashboard template built using the Vuetify library.
            </p>
            <div data-aos="fade-up" class="d-flex flex-wrap ga-2 justify-md-start justify-center" data-aos-duration="1000">
              <v-btn color="primary" size="large" variant="outlined" to="/components/buttons">Explore components</v-btn>
              <v-btn color="primary" size="large" to="/dashboard/default">
                <template v-slot:prepend>
                  <EyeOutlined />
                </template>
                Live Preview
              </v-btn>
            </div>
            <div data-aos="fade-up" data-aos-duration="1400">
							
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container> -->


  </div>
</template>
<style scoped lang="scss">
.home-bg2 {
	position: relative;
	background: #141414;
	overflow: hidden;
  min-height: 100vh;
  display: block;
  align-items: top;
  &::before {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(329.36deg, rgb(0, 0, 0) 14.79%, rgba(67, 67, 67, 0.28) 64.86%);
  }
}
.home-bg {
  position: relative;
  background: #141414;
  overflow: hidden;
  min-height: 100vh;
  display: block;
  align-items: top;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(329.36deg, rgb(0, 0, 0) 14.79%, rgba(67, 67, 67, 0.28) 64.86%);
  }
}
.homeContent {
  position: relative;
  z-index: 2;
}
.bannerText {
  font-size: 2.5rem;
  line-height: 1.3;
  font-weight: 700;
  @media (max-width: 1264px) {
    font-size: 2rem;
  }
  @media (max-width: 800px) {
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    font-size: 1.825rem;
  }
}
.HeaderImage {
  display: block;
  object-fit: cover;
  position: relative;
  z-index: 1;
  width: 100%;

}
.widget1 {
  position: absolute;
  top: -40px;
  right: -170px;
  width: 290px;
  animation: 10s slideY linear infinite;
}
.widget2 {
  position: absolute;
  bottom: -90px;
  left: 300px;
  width: 280px;
  animation: 10s slideY linear infinite;
  animation-delay: 2s;
}
.widgetImages {
  max-width: 100%;
  filter: drop-shadow(0px 0px 50px rgb(33 150 243 / 30%));
}

.v-container {
	padding: 0px;
	margin: 0px;
}
</style>
