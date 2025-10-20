export class Header {
  constructor() {
    this.header = document.getElementById('header')
    this.navToggle = document.getElementById('nav-toggle')
    this.navMenu = document.getElementById('nav-menu')
    this.isMenuOpen = false
    this.lastScrollY = window.scrollY
    
    this.init()
  }
  
  init() {
    this.setupNavigation()
    this.setupScrollEffects()
    this.setupKeyboardNavigation()
  }
  
  setupNavigation() {
    this.navToggle.addEventListener('click', () => this.toggleMobileMenu())
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault()
        const target = document.querySelector(anchor.getAttribute('href'))
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
          this.closeMobileMenu()
        }
      })
    })
  }
  
  setupScrollEffects() {
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY
      
      // Header background on scroll
      if (currentScrollY > 50) {
        this.header.classList.add('scrolled')
      } else {
        this.header.classList.remove('scrolled')
      }
      
      // Hide/show header on scroll
      if (currentScrollY > this.lastScrollY && currentScrollY > 100) {
        this.header.style.transform = 'translateY(-100%)'
      } else {
        this.header.style.transform = 'translateY(0)'
      }
      
      this.lastScrollY = currentScrollY
    })
  }
  
  setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isMenuOpen) {
        this.closeMobileMenu()
      }
    })
  }
  
  toggleMobileMenu() {
    this.isMenuOpen = !this.isMenuOpen
    this.navMenu.classList.toggle('active')
    
    // Animate hamburger menu
    const spans = this.navToggle.querySelectorAll('span')
    if (this.isMenuOpen) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)'
      spans[1].style.opacity = '0'
      spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)'
    } else {
      spans[0].style.transform = 'none'
      spans[1].style.opacity = '1'
      spans[2].style.transform = 'none'
    }
  }
  
  closeMobileMenu() {
    if (this.isMenuOpen) {
      this.toggleMobileMenu()
    }
  }
}