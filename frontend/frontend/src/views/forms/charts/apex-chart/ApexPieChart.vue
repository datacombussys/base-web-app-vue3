<script setup lang="ts">
import { computed } from 'vue';
import { useTheme } from 'vuetify';
import { getdarkPrimary, getPrimary, getSecondary } from './UpdateColors';

const theme = useTheme();
const successColor = theme.current.value.colors.success;
const errorColor = theme.current.value.colors.error;
const warningColor = theme.current.value.colors.warning;
const chartOptions = computed(() => {
  return {
    chart: {
      type: 'pie',
      height: 350,
      width: 350,
      fontFamily: `inherit`,
      foreColor: getSecondary.value
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    colors: [getdarkPrimary.value, getPrimary.value, successColor, errorColor, warningColor],
    legend: {
      show: true,
      offsetX: 10,
      offsetY: 10,
      labels: {
        useSeriesColors: false
      },
      markers: {
        width: 12,
        height: 12,
        radius: 5
      },
      itemMargin: {
        horizontal: 25,
        vertical: 4
      }
    },
    responsive: [
      {
        breakpoint: 375,
        chart: {
          width: 250,
          height: 250
        },
        options: {
          legend: {
            show: true,
            position: 'bottom'
          }
        }
      },
      {
        breakpoint: 960,
        chart: {
          width: 250,
          height: 250
        },
        options: {
          legend: {
            show: true,
            position: 'right'
          }
        }
      },
      {
        breakpoint: 1280,
        chart: {
          width: 250,
          height: 250
        },
        options: {
          legend: {
            show: true,
            position: 'right'
          }
        }
      },
      {
        breakpoint: 1550,
        chart: {
          width: 300,
          height: 300
        },
        options: {
          legend: {
            show: true,
            position: 'bottom'
          }
        }
      }
    ],
    tooltip: {
      theme: 'light',
      fillSeriesColor: false
    }
  };
});
const pieChart = {
  series: [44, 55, 13, 43, 22]
};
</script>

<template>
  <!-- ---------------------------------------------------- -->
  <!-- Pie Chart -->
  <!-- ---------------------------------------------------- -->

  <apexchart type="pie" height="350" :options="chartOptions" :series="pieChart.series"> </apexchart>
</template>
