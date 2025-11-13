<template>
  <div class="contact">
    <h1>Contact Us</h1>
    <div class="contact-grid">
      <div class="contact-card">
        <div class="contact-icon">📧</div>
        <h2>Email</h2>
        <p>Get in touch via email</p>
        <a href="mailto:contact@example.com">contact@example.com</a>
      </div>
      
      <div class="contact-card">
        <div class="contact-icon">📞</div>
        <h2>Phone</h2>
        <p>Call us directly</p>
        <a href="tel:+33123456789">+33 1 23 45 67 89</a>
      </div>
      
      <div class="contact-card">
        <div class="contact-icon">📍</div>
        <h2>Address</h2>
        <p>Visit us in person</p>
        <address>123 Main Street<br>Lyon, France</address>
      </div>
      
      <div class="contact-card">
        <div class="contact-icon">💬</div>
        <h2>Social Media</h2>
        <p>Connect with us online</p>
        <div class="social-links">
          <a href="#" target="_blank">LinkedIn</a>
          <span> • </span>
          <a href="#" target="_blank">Twitter</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact {
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.contact h1 {
  margin-bottom: 2rem;
  color: #2c3e50;
  text-align: center;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2rem;
}

.contact-card {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.contact-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.contact-card h2 {
  margin: 0.5rem 0;
  color: #42b983;
  font-size: 1.5rem;
}

.contact-card p {
  color: #666;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.contact-card a {
  color: #42b983;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.contact-card a:hover {
  color: #2c3e50;
  text-decoration: underline;
}

.contact-card address {
  font-style: normal;
  color: #555;
  line-height: 1.6;
}

.social-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.social-links span {
  color: #999;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 1024px) {
  .contact {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
