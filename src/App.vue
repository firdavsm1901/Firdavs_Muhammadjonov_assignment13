<template>
    <carousel :slides="slides" :interval="3000" controls indicators></carousel>
  </template>
  
  <script>
  import Carousel from "./components/Carousel.vue";
  
  export default {
    name: "App",
    components: { Carousel },
    data: () => ({
      slides: [
        "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fDRrJTIwbmF0dXJlfGVufDB8fDB8fHww",
        "https://images7.alphacoders.com/110/1106442.jpg",
        "https://img.freepik.com/premium-photo/sunset-mountain-river-wallpapers-generative-ai_876282-1957.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699833600&semt=ais",
        "https://images.unsplash.com/photo-1475776408506-9a5371e7a068?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D",
        "https://img.freepik.com/premium-photo/panorama-lauterbrunnen-valley-from-wengen-swiss-alps_261932-2971.jpg",
      ],
    }),
  };
  </script>
  
  <style scoped>
</style>