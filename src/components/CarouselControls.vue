<template>
    <!-- in vue 2.x you need wrap these buttons in a div -->
    <button class="carousel-control left" @click="$emit('prev')">&lt;</button>
    <button class="carousel-control right" @click="$emit('next')">&gt;</button>
  </template>
  
  <script>
  export default {
    emits: ["prev", "next"], // vue v3
  };
  </script>
 <style scoped>
 .carousel-control {
   background-color: rgba(0, 0, 0, 0.5);
   border: none;
   display: flex;
   justify-content: center;
   align-items: center;
   position: absolute;
   height: 50px;
   width: 50px;
   top: calc(50% - 25px);
   color: #fff;
   cursor: pointer;
   border-radius: 50%;
   font-weight: bold;
   font-size: 24px; /* Adjust font size as needed */
 }
 
 /* Styling for the "Prev" button */
 .left {
   left: 10px; /* Adjust left position for placement */
 }
 
 /* Styling for the "Next" button */
 .right {
   right: 10px; /* Adjust right position for placement */
 }
 </style>
 