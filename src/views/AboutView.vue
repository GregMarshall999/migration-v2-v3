<template>
  <div class="about">
    <h1>About Us</h1>
    <div class="content">
      <section>
        <h2>Welcome</h2>
        <p>
          This is a Vue.js application built with modern web technologies. 
          We're committed to providing a great user experience with clean, 
          maintainable code.
        </p>
      </section>
      
      <section>
        <h2>Our Mission</h2>
        <p>
          To deliver high-quality web applications that are both functional 
          and user-friendly, leveraging the power of Vue.js and its ecosystem.
        </p>
      </section>
      
      <section>
        <h2>Technologies</h2>
        <ul>
          <li>Vue.js 3</li>
          <li>Vue Router</li>
          <li>Modern CSS</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<style scoped>
.about {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.about h1 {
  margin-bottom: 2rem;
  color: #2c3e50;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.content section {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.content h2 {
  margin-top: 0;
  margin-bottom: 1rem;
  color: #42b983;
}

.content p {
  line-height: 1.6;
  color: #555;
  margin: 0;
}

.content ul {
  margin: 0;
  padding-left: 1.5rem;
}

.content li {
  margin-bottom: 0.5rem;
  color: #555;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
