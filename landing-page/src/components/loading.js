export class LoadingScreen {
  constructor() {
    this.loadingScreen = document.getElementById('loading-screen')
    this.loadingProgress = document.querySelector('.loading-progress')
    this.isLoading = true
    this.progress = 0
    this.simulationInterval = null
  }
  
  init() {
    // Ensure DOM elements exist before starting
    if (!this.loadingScreen || !this.loadingProgress) {
      console.warn('Loading screen elements not found, skipping loading animation')
      this.hide()
      return
    }
    
    // Set initial body overflow to prevent scrolling during load
    document.body.style.overflow = 'hidden'
    this.simulateLoading()
  }
  
  simulateLoading() {
    const interval = setInterval(() => {
      this.progress += Math.random() * 30
      if (this.progress >= 100) {
        this.progress = 100
        clearInterval(interval)
        this.simulationInterval = null
        setTimeout(() => this.hide(), 500)
      }
      this.updateProgress()
    }, 200)
    this.simulationInterval = interval
  }
  
  updateProgress() {
    if (this.loadingProgress) {
      this.loadingProgress.style.width = `${this.progress}%`
    }
  }
  
  hide() {
    if (this.loadingScreen) {
      this.loadingScreen.classList.add('hidden')
    }
    this.isLoading = false
    document.body.style.overflow = 'visible'
    
    // Dispatch event to notify that loading is complete
    window.dispatchEvent(new CustomEvent('loadingComplete'))
  }
  
  show() {
    if (this.loadingScreen) {
      this.loadingScreen.classList.remove('hidden')
    }
    this.isLoading = true
    this.progress = 0
    this.updateProgress()
    document.body.style.overflow = 'hidden'
  }
  
  // Cleanup method to prevent memory leaks
  destroy() {
    if (this.simulationInterval) {
      clearInterval(this.simulationInterval)
      this.simulationInterval = null
    }
  }
}