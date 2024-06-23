<script setup>
import { ref } from 'vue';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import { vMaska } from 'maska';

const page = ref({ title: 'Mask Page' });
const breadcrumbs = ref([
  {
    title: 'Plugins',
    disabled: false,
    href: '#'
  },
  {
    title: 'Mask',
    disabled: true,
    href: '#'
  }
]);

const phoneoptions = { mask: ['+1 (###) ##-##-##', '+1 (###) ###-##-##'] };
const phoneValue = ref('');

const teloptions = { mask: ['(##) ####-#####'] };
const telValue = ref('');

const usoptions = { mask: ['(###) ###-#####'] };
const usValue = ref('');

const contactoptions = { mask: '+91 #### ###-###' };
const contactValue = ref('');

const hexoptions = { mask: '!#HHHHHH', tokens: { H: { pattern: /[0-9a-fA-F]/, uppercase: true } } };
const hexValue = ref('');

const dateoptions = { mask: '##/##/####' };
const dateValue = ref('');

const ipaddress = { mask: '###.###.###.###' };
const ipValue = ref('');

const ipv4address = { mask: '####.####.####.####' };
const ipv4Value = ref('');

const ipv6address = { mask: '####.####.####.####.####.####' };
const ipv6Value = ref('');

const timeoptions = { mask: '##:##:##' };
const timeValue = ref('');
</script>
<template>
  <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
  <v-row>
    <v-col cols="12" md="12">
      <v-row>
        <!-- Base Buttons -->
        <v-col cols="12" lg="6">
          <UiParentCard title="Phone no.">
            <div class="mb-5">
              <v-label class="mb-1">Phone Number</v-label>
              <v-text-field
                single-line
                hide-details
                color="primary"
                label="Phone with Code"
                variant="outlined"
                v-maska:[phoneoptions]
                v-model="phoneValue"
              />
            </div>
            <div class="mb-5">
              <v-label class="mb-1">Contact Number</v-label>
              <v-text-field
                single-line
                hide-details
                color="primary"
                label="Contact Number"
                variant="outlined"
                v-maska:[contactoptions]
                v-model="contactValue"
              />
            </div>
            <div class="mb-5">
              <v-label class="mb-1">Telephone with Area Code</v-label>
              <v-text-field
                single-line
                hide-details
                color="primary"
                label="Tel. with Code  Area"
                variant="outlined"
                v-maska:[teloptions]
                v-model="telValue"
              />
            </div>
            <div class="mb-5">
              <v-label class="mb-1">US Telephone</v-label>
              <v-text-field
                single-line
                hide-details
                color="primary"
                label="US Telephone"
                variant="outlined"
                v-maska:[usoptions]
                v-model="usValue"
              />
            </div>
            <div>
              <v-label class="mb-1">Color code</v-label>
              <v-text-field
                single-line
                hide-details
                color="primary"
                label="Hex color: #121113"
                variant="outlined"
                v-maska:[hexoptions]
                v-model="hexValue"
              />
            </div>
          </UiParentCard>
        </v-col>
        <v-col cols="12" lg="6">
          <v-row>
            <v-col cols="12">
              <UiParentCard title="Network">
                <div class="mb-5">
                  <v-label class="mb-1">Enter IP Address</v-label>
                  <v-text-field
                    single-line
                    hide-details
                    color="primary"
                    label="Ip Address"
                    variant="outlined"
                    v-maska:[ipaddress]
                    v-model="ipValue"
                  />
                </div>
                <div class="mb-5">
                  <v-label class="mb-1">Enter IPV4</v-label>
                  <v-text-field
                    single-line
                    hide-details
                    color="primary"
                    label="Ipv4 Address"
                    variant="outlined"
                    v-maska:[ipv4address]
                    v-model="ipv4Value"
                  />
                </div>
                <div>
                  <v-label class="mb-1">Enter IPV6</v-label>
                  <v-text-field
                    single-line
                    hide-details
                    color="primary"
                    label="Ipv6 Address"
                    variant="outlined"
                    v-maska:[ipv6address]
                    v-model="ipv6Value"
                  />
                </div>
              </UiParentCard>
            </v-col>
            <v-col cols="12">
              <UiParentCard title="Date & Time">
                <div class="mb-5">
                  <v-label class="mb-1">Insert Date</v-label>
                  <v-text-field
                    single-line
                    hide-details
                    color="primary"
                    label="Enter Date"
                    variant="outlined"
                    v-maska:[dateoptions]
                    v-model="dateValue"
                  />
                </div>
                <div>
                  <v-label class="mb-1">Insert Time</v-label>
                  <v-text-field
                    single-line
                    hide-details
                    color="primary"
                    label="Enter Time"
                    variant="outlined"
                    v-maska:[timeoptions]
                    v-model="timeValue"
                  />
                </div>
              </UiParentCard>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
