<template>

  <div>
    <Hero/>
  </div>
  <div class="contact-page">

    

    <!-- Contact Form & Info Section -->
    <section class="contact-section">
      <div class="container">
        <!-- Left Column - Contact Form -->
        <div class="contact-form">
          <h2>Send Us a Message</h2>
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <input 
                type="text" 
                v-model="form.name" 
                placeholder="Your Full Name" 
                required
              />
            </div>
            
            <div class="form-group">
              <input 
                type="email" 
                v-model="form.email" 
                placeholder="Your Email Address" 
                required
              />
            </div>
            
            <div class="form-group">
              <div class="dropdown" @click="toggleDropdown">
                <button type="button" class="dropbtn">
                  {{ form.subject || 'Select Subject ▼' }}
                </button>
                <div class="dropdown-content" v-show="isDropdownOpen">
                  <a @click="selectSubject('Sales & Marketing')">Sales & Marketing</a>
                  <a @click="selectSubject('Design & Creative')">Design & Creative</a>
                  <a @click="selectSubject('UI/UX Design')">UI/UX Design</a>
                  <a @click="selectSubject('General Inquiry')">General Inquiry</a>
                </div>
              </div>
            </div>
            
            <div class="form-group">
              <textarea 
                v-model="form.message" 
                placeholder="Your Message..." 
                rows="5"
                required
              ></textarea>
            </div>
            
            <button type="submit" class="send-btn">
              <i class="fas fa-paper-plane"></i> Send Message
            </button>
          </form>
        </div>

        <!-- Right Column - Address & Info -->
        <div class="contact-info">
          <h2>Our Address</h2>
          <p class="address-desc">
            Quisque eleifend mi et nisi eleifend pretium. Duis porttitor 
            accumsan arcu id rhoncus.
          </p>
          
          <div class="info-item">
            <i class="fas fa-map-marker-alt"></i>
            <span>120-240 Fusce eleifend varius tempus<br>Duis consectetur at ligula 10660</span>
          </div>
          
          <div class="info-item">
            <i class="fas fa-envelope"></i>
            <a href="mailto:info@company.com">info@company.com</a>
          </div>
          
          <div class="info-item">
            <i class="fas fa-phone"></i>
            <a href="tel:0100200340">010-020-0340</a>
          </div>
          
          <div class="info-item">
            <i class="fas fa-globe"></i>
            <a href="#" target="_blank">www.company.com</a>
          </div>

          <!-- Social Links -->
          <div class="social-links">
            <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="map-section">
      <div class="container">
        <h2>Find Us Here</h2>
        <div class="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.3522926915375!2d71.49182065189301!3d34.00594202221674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917261b47bb2f%3A0x846a5953da915116!2sGharibabad%20Rd%2C%20Peshawar%2C%20Pakistan!5e0!3m2!1sen!2s!4v1781375639157!5m2!1sen!2s" 
            width="100%" 
            height="400" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team-section">
      <div class="container">
        <h2 class="section-title">Meet Our Team</h2>
        <p class="section-subtitle">The passionate people behind our success</p>
        
        <div class="team-grid">
          <div class="team-card" v-for="member in teamMembers" :key="member.name">
            <div class="team-image">
              <img :src="member.image" :alt="member.name">
            </div>
            <h3>{{ member.name }}</h3>
            <p class="role">{{ member.role }}</p>
            <p class="bio">{{ member.bio }}</p>
            <div class="team-social">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>


   <div>
    <Lastpage/>
   </div>
  </div>
  
</template>

<script setup>
import { ref, reactive } from 'vue'
import Hero from './Hero.vue'
import Lastpage from './Lastpage.vue'

// Dropdown state
const isDropdownOpen = ref(false)

// Form data
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

// Team members data
const teamMembers = [
  {
    name: 'Ryan White',
    role: 'Chief Executive Officer',
    bio: 'Mauris ante tellus, feugiat nec metus non, bibendum semper velit.',
    image: '/people-1.jpg'
  },
  {
    name: 'Catherine Pinky',
    role: 'Chief Marketing Officer',
    bio: 'Sed faucibus nec velit finibus accumsan. Sed varius augue et leo pharetra.',
    image: '/people-2.jpg'
  },
  {
    name: 'Johnny Brief',
    role: 'Accounting Executive',
    bio: 'Sed faucibus nec velit finibus accumsan. Sed varius augue et leo pharetra.',
    image: '/people-3.jpg'
  },
  {
    name: 'George Nelson',
    role: 'Creative Art Director',
    bio: 'Nunc convallis facilisis congue. Curabitur gravida rutrum justo sed pulvinar.',
    image: '/people-4.jpg'
  }
]

// Toggle dropdown
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

// Select subject
const selectSubject = (subject) => {
  form.subject = subject
  isDropdownOpen.value = false
}

// Handle form submission
const handleSubmit = () => {
  console.log('Form submitted:', form)
  alert('Thank you for your message! We will get back to you soon.')
  
  // Reset form
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
}
</script>

<style scoped>
/* Reset & Base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.contact-page {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero Section */


/* Contact Section */
.contact-section {
  padding: 60px 0;
  background: #f8f9fa;
}

.contact-section .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
}

/* Contact Form */
.contact-form h2 {
  color: #099999;
  margin-bottom: 30px;
  font-size: 2rem;
}

.form-group {
  margin-bottom: 20px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 15px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 16px;
  transition: all 0.3s ease;
  background: white;
  color: #333;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #099999;
  outline: none;
  box-shadow: 0 0 0 3px rgba(9, 153, 153, 0.1);
}

.form-group textarea {
  resize: vertical;
}

/* Dropdown */
.dropdown {
  position: relative;
  width: 100%;
}

.dropbtn {
  width: 100%;
  padding: 15px;
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 16px;
  text-align: left;
  cursor: pointer;
  color: #333;
  transition: all 0.3s ease;
}

.dropbtn:hover {
  border-color: #099999;
}

.dropdown-content {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  border: 2px solid #e0e0e0;
  border-top: none;
  border-radius: 0 0 10px 10px;
  z-index: 100;
  overflow: hidden;
}

.dropdown-content a {
  display: block;
  padding: 12px 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #333;
}

.dropdown-content a:hover {
  background: #099999;
  color: white;
}

.send-btn {
  width: 100%;
  padding: 15px;
  background: #099999;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.send-btn:hover {
  background: #066666;
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(9, 153, 153, 0.3);
}

.send-btn i {
  margin-right: 10px;
}

/* Contact Info */
.contact-info h2 {
  color: #099999;
  margin-bottom: 25px;
  font-size: 2rem;
}

.address-desc {
  color: #666;
  line-height: 1.8;
  margin-bottom: 30px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 20px;
}

.info-item i {
  color: #099999;
  font-size: 20px;
  margin-top: 3px;
  width: 25px;
}

.info-item span,
.info-item a {
  color: #555;
  text-decoration: none;
  line-height: 1.6;
  transition: color 0.3s ease;
}

.info-item a:hover {
  color: #099999;
}

.social-links {
  display: flex;
  gap: 15px;
  margin-top: 30px;
}

.social-icon {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: white;
  border: 2px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #099999;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background: #099999;
  color: white;
  transform: translateY(-3px);
}

/* Map Section */
.map-section {
  padding: 60px 0;
  background: white;
}

.map-section h2 {
  text-align: center;
  color: #099999;
  font-size: 2rem;
  margin-bottom: 30px;
}

.map-container {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
}

.map-container iframe {
  display: block;
}

/* Team Section */
.team-section {
  padding: 60px 0;
  background: #f8f9fa;
}

.section-title {
  text-align: center;
  color: #099999;
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.section-subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 40px;
  font-size: 1.1rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.team-card {
  background: white;
  border-radius: 15px;
  padding: 25px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
}

.team-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.team-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 20px;
  border: 4px solid #099999;
}

.team-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.team-card h3 {
  color: #099999;
  margin-bottom: 5px;
}

.role {
  color: #CC6699;
  font-weight: 600;
  margin-bottom: 10px;
}

.bio {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 15px;
}

.team-social {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.team-social a {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #099999;
  text-decoration: none;
  transition: all 0.3s ease;
}

.team-social a:hover {
  background: #099999;
  color: white;
}

/* Footer */
.footer {
  background: #1a1a2e;
  color: white;
  padding: 60px 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
}

.footer-col h3,
.footer-col h4 {
  margin-bottom: 15px;
  color: #099999;
}

.footer-col p {
  line-height: 1.8;
  opacity: 0.8;
}

.footer-col a {
  display: block;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  margin-bottom: 10px;
  transition: color 0.3s ease;
}

.footer-col a:hover {
  color: #099999;
}

.footer-col i {
  margin-right: 10px;
  color: #099999;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
  text-align: center;
  opacity: 0.7;
  font-size: 14px;
}

/* Animations */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 992px) {
  .contact-section .container {
    grid-template-columns: 1fr;
  }
  
  .footer-content {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }
  
  .hero p {
    font-size: 1rem;
  }
  
  .team-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .footer-col a {
    text-align: center;
  }
}

@media (max-width: 480px) {
  .contact-section {
    padding: 30px 0;
  }
  
  .team-grid {
    grid-template-columns: 1fr;
  }
  
  .social-links {
    justify-content: center;
  }
}
</style>