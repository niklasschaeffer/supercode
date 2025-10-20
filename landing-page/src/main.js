import { content } from './data/content.js'
import { Header } from './components/header.js'
import { AnimationController } from './components/animations.js'
import { LoadingScreen } from './components/loading.js'

// DOM Elements
const featuresGrid = document.getElementById('features-grid')
const agentsCategories = document.getElementById('agents-categories')
const docsGrid = document.getElementById('docs-grid')

// State
let header, animations, loading

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  initializeApp()
  
  // Additional safety net - ensure initialization happens even if loading fails
  setTimeout(() => {
    if (!animations) {
      console.warn('Safety net initialization triggered')
      initializeAfterLoading()
    }
  }, 4000)
})

// Global safety net - accessible from browser console for debugging
window.forceInitialization = () => {
  console.warn('Force initialization triggered')
  initializeAfterLoading()
}

function initializeApp() {
  // Initialize components
  loading = new LoadingScreen()
  loading.init() // Start the loading simulation
  
  // Fallback timeout to ensure page loads even if animation fails
  const fallbackTimeout = setTimeout(() => {
    if (loading.isLoading || !animations) {
      console.warn('Loading screen fallback triggered - loading:', loading.isLoading, 'animations:', !!animations)
      if (loading.isLoading) {
        loading.hide()
      }
      initializeAfterLoading()
    }
  }, 3000) // 3 second fallback
  
  // Wait for loading to complete before initializing other components
  window.addEventListener('loadingComplete', () => {
    clearTimeout(fallbackTimeout)
    initializeAfterLoading()
  })
}

function initializeAfterLoading() {
  try {
    header = new Header()
    
    // Update global object for debugging
    window.SuperCodeLanding.header = header
    
    // Render content first, then initialize animations
    renderContent()
    
    // Initialize animations after content is rendered
    setTimeout(() => {
      animations = new AnimationController()
      window.SuperCodeLanding.animations = animations
      console.log('Animations initialized after content render')
    }, 100)
    
    // Setup performance monitoring
    setupPerformanceMonitoring()
    
    console.log('Initialization completed successfully')
  } catch (error) {
    console.error('Error during initialization:', error)
    // Still try to render content even if animations fail
    try {
      renderContent()
    } catch (renderError) {
      console.error('Error rendering content:', renderError)
    }
  }
}

// Render Content
function renderContent() {
  renderFeatures()
  renderAgents()
  renderDocs()
}

function renderFeatures() {
  featuresGrid.innerHTML = content.features.map(feature => `
    <div class="feature-card ${feature.highlight ? 'highlight' : ''} animate-on-scroll">
      <span class="feature-icon">${feature.icon}</span>
      <h3 class="feature-title">${feature.title}</h3>
      <p class="feature-description">${feature.description}</p>
    </div>
  `).join('')
}

function renderAgents() {
  agentsCategories.innerHTML = content.agents.categories.map(category => `
    <div class="agent-category animate-on-scroll">
      <div class="category-header">
        <h3 class="category-name">${category.name}</h3>
        <span class="category-count">${category.count}</span>
      </div>
      <div class="agent-list">
        ${category.agents.map(agent => `
          <span class="agent-tag">${agent}</span>
        `).join('')}
      </div>
    </div>
  `).join('')
}

function renderDocs() {
  docsGrid.innerHTML = content.docs.sections.map(section => `
    <div class="doc-card animate-on-scroll">
      <h3 class="doc-title">${section.title}</h3>
      <p class="doc-content">${section.content}</p>
      <div class="doc-topics">
        ${section.topics.map(topic => `
          <span class="topic-tag">${topic}</span>
        `).join('')}
      </div>
    </div>
  `).join('')
}

// Performance monitoring
function setupPerformanceMonitoring() {
  // Track page load performance
  window.addEventListener('load', () => {
    const loadTime = performance.now()
    trackEvent('page_load', { loadTime })
    
    // Log performance metrics
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0]
      console.log('Page Load Performance:', {
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        totalTime: loadTime
      })
    }
  })
}

// Performance optimization
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Analytics and event tracking
function trackEvent(eventName, data = {}) {
  // Placeholder for analytics
  console.log('Event tracked:', eventName, data)
}

// Add loading states for interactive elements
function addLoadingState(element, isLoading) {
  if (isLoading) {
    element.classList.add('loading')
    element.disabled = true
  } else {
    element.classList.remove('loading')
    element.disabled = false
  }
}

// Export functions for potential external use
window.SuperCodeLanding = {
  trackEvent,
  addLoadingState,
  header,
  animations,
  loading
}