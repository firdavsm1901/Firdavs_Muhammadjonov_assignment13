<template>
  <div id="app">
	  <header>
		  <h1>Firdavs<span>ACCORDION</span></h1>
	  </header>
    <div class="faqs">
      <FAQ 
        v-for="(faq, i) in faqs" 
        :faq="faq" 
        :index="i" 
        :key="i"
        :open="faq.open"
        @toggleOpen="toggleOpen"
      />
    </div>
  </div>
</template>

<script>
import FAQ from './FAQ.vue';

export default {
  name: 'app',
  components: {
    FAQ
  },
  data () {
    return {
      faqs: [
       {
          question: "How do I reset my password?",
          answer: "To reset your password, go to the login page and click on 'Forgot Password.' Follow the instructions sent to your email to reset it.",
          open: false
        },
        {
          question: "What are the supported payment methods?",
          answer: "We accept Visa, Mastercard, American Express, and PayPal as our primary payment methods.",
          open: false
        },
        {
          question: "Can I cancel my subscription anytime?",
          answer: "Yes, you can cancel your subscription at any time. Your subscription will remain active until the end of the billing cycle.",
          open: false
        },
        {
          question: "Is there a mobile app available?",
          answer: "Yes, we have a mobile app available for both iOS and Android devices. You can download it from the App Store or Google Play Store.",
          open: false
        },
        {
          question: "Do you offer customer support on weekends?",
          answer: "Yes, our customer support team is available seven days a week to assist you with any queries or issues.",
          open: false
        },
        {
          question: "How does the internet work?",
          answer: "The internet is a global network of interconnected computers that communicate via various protocols.",
          open: false
        },
        {
          question: "What programming language should I learn first?",
          answer: "It depends on your interests and goals. Python, JavaScript, and Java are popular choices for beginners.",
          open: false
        },
      ]
    }
  },
  methods: {
    toggleOpen: function (index) {
      this.faqs = this.faqs.map((faq, i) => {
        if (index === i) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      });
    }
  }
}
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	background-color: #EEE;
	font-family: sans-serif;
}

header {
  background-color: #3c3c3c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
}

header h1 {
  color: #EEE;
  font-size: 28px;
  font-weight: 300;
  text-transform: uppercase;
}

header h1 span {
  color: #56E3B8;
  font-weight: 900;
}

.faq {
  display: block;
  width: 100%;
  max-width: 768px;
  margin: 15px auto;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  background-color: #FFF;
}

.faq .question {
  position: relative;
  color: #3c3c3c;
  font-size: 20px;
  transition: all 0.4s linear;
  width: 500px;
}

.faq .question::after {
  content: '';

  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%) rotate(0deg);

  width: 30px;
  height: 30px;
  background-image: url('https://cdn-icons-png.flaticon.com/512/5548/5548622.png');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  
  transition: all 0.2s linear;
}
.faq.open .question {
  margin-bottom: 15px;
}
.faq.open .question::after {
  transform: translateY(-50%) rotate(90deg);
}
.faq .answer {
  color: green;
  font-weight: bold;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 18px;
  opacity: 0;
  max-height: 0px;
  overflow-y: hidden;
  word-wrap: break-word;
  max-width: 500px;
  transition: all 0.4s ease-out;
}
.faq.open .answer {
  opacity: 1;
  max-height: 1000px;
}
</style>
