import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

// Custom directive for scroll-triggered animations
app.directive('reveal', {
  mounted(el) {
    el.classList.add('reveal-init')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.classList.add('reveal-active')
          observer.unobserve(el)
        }
      })
    }, {
      threshold: 0,
      rootMargin: '0px 0px -10% 0px'
    })
    observer.observe(el)
  }
})

app.mount('#app')
