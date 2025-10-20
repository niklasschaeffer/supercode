export class AnimationController {
  constructor() {
    this.observers = new Map()
    this.init()
  }
  
  init() {
    this.setupIntersectionObserver()
    this.setupHeroAnimations()
    this.setupButtonEffects()
    this.setupParallaxEffects()
  }
  
  setupIntersectionObserver() {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateElement(entry.target)
        }
      })
    }, options)
    
    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el)
      this.observers.set(el, observer)
    })
  }
  
  animateElement(element) {
    element.classList.add('animated')
    
    // Stagger animation for multiple elements
    const parent = element.parentElement
    if (parent) {
      const siblings = Array.from(parent.children)
      const index = siblings.indexOf(element)
      element.style.transitionDelay = `${index * 0.1}s`
    }
  }
  
  setupHeroAnimations() {
    // Hero card tilt effect
    const heroCards = document.querySelectorAll('.hero-card[data-tilt]')
    
    heroCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        this.handleCardTilt(e, card)
      })
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)'
      })
    })
  }
  
  handleCardTilt(e, card) {
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`
  }
  
  setupButtonEffects() {
    const buttons = document.querySelectorAll('.btn')
    buttons.forEach(btn => {
      btn.addEventListener('mouseenter', (e) => this.createRipple(e, btn))
    })
  }
  
  createRipple(e, button) {
    const ripple = document.createElement('span')
    ripple.style.position = 'absolute'
    ripple.style.width = '100px'
    ripple.style.height = '100px'
    ripple.style.background = 'rgba(255, 255, 255, 0.3)'
    ripple.style.borderRadius = '50%'
    ripple.style.transform = 'translate(-50%, -50%)'
    ripple.style.pointerEvents = 'none'
    ripple.style.animation = 'ripple 0.6s ease-out'
    
    const rect = button.getBoundingClientRect()
    ripple.style.left = `${e.clientX - rect.left}px`
    ripple.style.top = `${e.clientY - rect.top}px`
    
    button.appendChild(ripple)
    
    setTimeout(() => ripple.remove(), 600)
  }
  
  setupParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.hero-particles')
    
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset
      
      parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5
        element.style.transform = `translateY(${scrolled * speed}px)`
      })
    })
  }
  
  // Add custom animations
  addCustomAnimation(element, animation) {
    element.classList.add('animate-on-scroll')
    element.dataset.animation = animation
  }
  
  // Cleanup observers
  destroy() {
    this.observers.forEach((observer, element) => {
      observer.unobserve(element)
    })
    this.observers.clear()
  }
}

// Add ripple animation to styles
const style = document.createElement('style')
style.textContent = `
  @keyframes ripple {
    to {
      transform: translate(-50%, -50%) scale(4);
      opacity: 0;
    }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-20px) rotate(1deg); }
    66% { transform: translateY(10px) rotate(-1deg); }
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
    40% { transform: translateX(-50%) translateY(-10px); }
    60% { transform: translateX(-50%) translateY(-5px); }
  }
`
document.head.appendChild(style)