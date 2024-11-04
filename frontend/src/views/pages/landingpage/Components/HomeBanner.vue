<script setup lang="ts">
// assets
import dashboard from '@/assets/images/landing/bg-mockup-default.png';
import technology from '@/assets/images/landing/technology.svg';
import merchant from '@/assets/images/datacom/merchant1.jpeg';
import skyVideo from '@/layouts/component/video.vue'

// icons
import { EyeOutlined } from '@ant-design/icons-vue';

// Vuetify Breakpoints
  import { useDisplay } from 'vuetify'
  // Destructure only the keys you want to use
  const { smAndDown } = useDisplay()

</script>

<template>
<v-row class="bg-primary justify-end py-5">
	<v-col cols="8" class="grow">
		<v-container class="pt-0">
			<v-row class="pt-0">
				<v-col class="pt-0">
					<h2>
						The Heavens declare the glory of God
					</h2>
					<h4>
						Psalm 19:1
					</h4>
					<v-row class="justify-center">
						<v-col cols="12" md="6">
							<v-card
								elevation="8">
								<v-card-item class="py-3">
									<v-card-title>Scene 1</v-card-title>

									<v-card-subtitle>War on God's Law</v-card-subtitle>
								</v-card-item>

								<v-card-text>
									<h4 class="mb-0">
										Proverbs 20:22
									</h4>
									<h5>
										Unequal weights are an abomination
									</h5>
									In this scene, we have Sagittarius shooting the scorpion who is attacking the scales of justice (Libra). Once past the scales of God's justice,
									the scorpion can attack the woman (Virgo).
								</v-card-text>
							</v-card>
						</v-col>
						<v-col cols="12" md="6">
							<v-card
								elevation="8">
								<v-card-item class="py-3">
									<v-card-title>Scene 2</v-card-title>

									<v-card-subtitle>Lion of Judah Protects His Mother</v-card-subtitle>
								</v-card-item>

								<v-card-text>
									<h4 class="mb-0">
										Revelation 5:5

									</h4>
									<h5>
										And one of the elders said to me, “Weep no more; behold, the Lion of the tribe of Judah, the Root of David, has conquered"
									</h5>
									In this scene, Leo (the Lion of Judah) is protecting Virgo from an attack by the crab cancer. She is being attacked form both sides as the enemy seeks to destroy her.
								</v-card-text>
							</v-card>
						</v-col>
					</v-row>
					<v-row>
						<v-col cols="12" md="6">
							<v-card
								elevation="8">
								<v-card-item class="py-3">
									<v-card-title>Scene 3</v-card-title>

									<v-card-subtitle>Lion of Judah Protects His Mother</v-card-subtitle>
								</v-card-item>

								<v-card-text>
									<h4 class="mb-0">
										John 10:10
									</h4>
									<h5>
										The thief comes only to steal and kill and destroy. I came that they may have life and have it abundantly.
									</h5>
									In this scene, a bull is trying to stampede man and woman with his horns. In order to protect man and woman, we have a warrior (Orion) throwing Jupiter at him in order to protect God's beloved.
									<br />
									<small>Notice the ram behind the bull, watching whats happening and getting ready to ram him. Ref Daniel 8</small>
								</v-card-text>
							</v-card>
						</v-col>
						<v-col cols="12" md="6">
							<v-card
								elevation="8">
								<v-card-item class="py-3">
									<v-card-title>Scene 4</v-card-title>

									<v-card-subtitle>Atone for Sin</v-card-subtitle>
								</v-card-item>

								<v-card-text>
									<h4 class="mb-0">
										1 John 4:10
									</h4>
									<h5>
										In this is love, not that we have loved God but that he loved us and sent his Son to be the propitiation for our sins.
									</h5>
									In the old testament, goats were used to sacrifice for sin. Jesus was the ultimate sacrifice for everybody. 
									If man dies in their sin, the wrath of God will be poured out on Earth as we see Aquarius doing here.
									The bowl of wrath will be poured onto the sea and kill all the fish (Pisces).
									<br />
									<small>Notice Saturn in the midst of the wrath being poured out...like a millstone around its head...</small>
								</v-card-text>
							</v-card>
						</v-col>
					</v-row>
				</v-col>
			</v-row>
		</v-container>
	</v-col>
	<v-col cols="4" class="grow-0" align-self="center">
		<v-row class="justify-center">
			<v-cols cols="12" lg="4" md="5" class="px-10">
				<skyVideo />
			</v-cols>
		</v-row>
	</v-col>
</v-row>

	

</template>
<style scoped lang="scss">

</style>
