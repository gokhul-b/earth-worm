<template>
    <div>
      <select v-model="selectedCrop">
        <option>Select a crop</option>
        <option v-for="crop in crops" :value="crop">{{ crop }}</option>
      </select>
      <canvas id="chart"></canvas>
    </div>
  </template>
  
  <script>
  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import Chart from 'chart.js'
  
  export default {
    data() {
      return {
        crops: [],
        selectedCrop: '',
        chartData: {}
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      async getData() {
        const cropRef = firebase.firestore().collection('crops')
        const snapshot = await cropRef.get()
        const cropData = snapshot.docs.map(doc => doc.data())
  
        // Get a list of all crop types
        this.crops = Array.from(new Set(cropData.map(crop => crop.crop)))
  
        // Group the crop data by crop type and month
        this.chartData = cropData.reduce((acc, crop) => {
          if (!acc[crop.crop]) {
            acc[crop.crop] = {}
          }
          if (!acc[crop.crop][crop.month]) {
            acc[crop.crop][crop.month] = 0
          }
          acc[crop.crop][crop.month] += crop.acres
          return acc
        }, {})
  
        this.renderChart()
      },
      renderChart() {
        const ctx = document.getElementById('chart').getContext('2d')
        const data = this.getChartData()
  
        new Chart(ctx, {
          type: 'bar',
          data,
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        })
      },
      getChartData() {
        const cropData = this.chartData[this.selectedCrop]
        if (!cropData) {
          return {
            labels: [],
            datasets: [{
              label: 'Acres',
              data: []
            }]
          }
        }
  
        const labels = Object.keys(cropData)
        const data = Object.values(cropData)
  
        return {
          labels,
          datasets: [{
            label: 'Acres',
            data,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }]
        }
      }
    },
    watch: {
      selectedCrop() {
        this.renderChart()
      }
    }
  }
  </script>