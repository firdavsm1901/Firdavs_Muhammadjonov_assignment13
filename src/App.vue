<template>
  <div id="app">
    <timeLine :points="points"></timeLine>
  </div>
</template>

<script>
  import timeLine from './components/timeLine.vue'

  export default {
    name: 'app',
    data() {
  return {
    points: [
      {
        pointColor: 'red',
        title: 'Product Launch',
        text: 'Unveiling our latest product with groundbreaking features and innovations.',
        linkUrl: 'https://www.example.com/product-launch',
        linkText: 'Learn More',
        date: '2020-05-15'
      },
      {
        pointColor: 'yellow',
        img: '',
        title: 'Seminar on Sustainability',
        text: 'A seminar discussing the importance of sustainability in today\'s world.',
        linkUrl: 'https://www.example.com/sustainability-seminar',
        linkText: 'Explore',
        date: '2019-10-22'
      },
      {
        pointColor: 'green',
        title: 'Charity Fundraiser',
        text: 'Join us in supporting local communities through a charity fundraiser event.',
        linkUrl: 'https://www.example.com/charity-fundraiser',
        linkText: 'Get Involved',
        date: '2021-02-28'
      }
    ]
  };
},
    components: {
      timeLine
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  html body {
    background-color: beige;
  }
</style>