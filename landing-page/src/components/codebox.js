export class CodeBox {
  constructor(container) {
    this.container = container
    this.commands = [
      { text: 'git clone https://github.com/niklasschaeffer/supercode.git', delay: 0 },
      { text: 'cd supercode', delay: 1500 },
      { text: './install.sh', delay: 3000 }
    ]
    this.currentCommand = 0
    this.currentChar = 0
    this.isTyping = false
    this.cursor = null
    this.isExpanded = false
    this.autoType = true // New property to control auto-typing on init
  }

  init() {
    this.render()
    if (this.autoType) {
      this.startTyping()
    } else {
      this.showAllTextImmediately()
    }
  }

  render() {
    this.container.innerHTML = `
      <div class="code-box">
        <div class="code-header">
          <div class="code-dots">
            <span class="dot dot-red"></span>
            <span class="dot dot-yellow"></span>
            <span class="dot dot-green"></span>
          </div>
          <div class="code-title">Terminal</div>
          <div class="code-actions">
            <button class="code-btn code-copy" title="Copy commands">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </button>
            <button class="code-btn code-rerun" title="Rerun animation">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="23 4 23 10 17 10"></polyline>
                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="code-content">
          <div class="code-lines">
            ${this.commands.map((cmd, index) => `
              <div class="code-line" data-line="${index}">
                <span class="code-prompt">$</span>
                <span class="code-text-container" data-command-container="${index}">
                  <span class="code-text" data-command="${index}"></span>
                  <span class="code-cursor" data-cursor="${index}" style="display: none;">▊</span>
                </span>
              </div>
            `).join('')}
          </div>
          <div class="code-success" style="display: none;">
            <span class="success-icon">✓</span>
            <span class="success-text">SuperCode Framework installed successfully!</span>
          </div>
        </div>
      </div>
    `

    this.setupEventListeners()
  }

  setupEventListeners() {
    const copyBtn = this.container.querySelector('.code-copy')
    const rerunBtn = this.container.querySelector('.code-rerun')

    copyBtn?.addEventListener('click', () => this.copyCommands())
    rerunBtn?.addEventListener('click', () => this.rerunAnimation())
  }

  showAllTextImmediately() {
    // Show all command text at once without animation
    this.commands.forEach((command, index) => {
      const textElement = this.container.querySelector(`[data-command="${index}"]`)
      const lineElement = this.container.querySelector(`[data-line="${index}"]`)

      if (textElement) {
        textElement.textContent = command.text
      }

      if (lineElement) {
        lineElement.classList.add('completed')
        // Remove the fade-in animation by setting opacity to 1 immediately
        lineElement.style.opacity = '1'
        lineElement.style.animation = 'none'
      }
    })

    // Show success message immediately
    const successMsg = this.container.querySelector('.code-success')
    if (successMsg) {
      successMsg.style.display = 'flex'
      successMsg.style.animation = 'none'
      successMsg.style.opacity = '1'
    }
  }

  async startTyping() {
    if (this.isTyping) return

    this.isTyping = true
    this.currentCommand = 0
    this.currentChar = 0

    // Hide success message
    const successMsg = this.container.querySelector('.code-success')
    if (successMsg) {
      successMsg.style.display = 'none'
    }

    // Clear all existing text for typing animation
    this.container.querySelectorAll('.code-text').forEach(el => {
      el.textContent = ''
    })

    for (let i = 0; i < this.commands.length; i++) {
      await this.typeCommand(i)
      await this.wait(800) // Pause between commands
    }

    // Show success message
    if (successMsg) {
      successMsg.style.display = 'flex'
      successMsg.style.animation = 'fadeInUp 0.5s ease-out'
    }

    this.isTyping = false
  }

  async typeCommand(commandIndex) {
    const command = this.commands[commandIndex]
    const textElement = this.container.querySelector(`[data-command="${commandIndex}"]`)
    const cursorElement = this.container.querySelector(`[data-cursor="${commandIndex}"]`)
    const lineElement = this.container.querySelector(`[data-line="${commandIndex}"]`)

    if (!textElement || !cursorElement || !lineElement) return

    // Show cursor and highlight line
    cursorElement.style.display = 'inline'
    lineElement.classList.add('active')
    this.startCursorBlink(cursorElement)

    // Type each character with realistic timing
    for (let i = 0; i <= command.text.length; i++) {
      textElement.textContent = command.text.substring(0, i)

      // Variable typing speed for realism
      let typingDelay = this.getTypingDelay(command.text[i])

      // Add occasional pauses for realism
      if (i > 0 && i % 8 === 0 && Math.random() > 0.7) {
        typingDelay += Math.random() * 150 + 50 // Random pause
      }

      await this.wait(typingDelay)
    }

    // Stop cursor blink and show completion
    this.stopCursorBlink(cursorElement)
    cursorElement.style.display = 'none'
    lineElement.classList.remove('active')
    lineElement.classList.add('completed')

    // Add completion effect
    this.addCompletionEffect(lineElement)
  }

  getTypingDelay(char) {
    // Realistic typing delays based on character type
    if (char === ' ') return 30 // Spaces are faster
    if (/[a-z]/.test(char)) return 60 + Math.random() * 40 // Lowercase letters
    if (/[A-Z]/.test(char)) return 80 + Math.random() * 60 // Uppercase slower
    if (/[0-9]/.test(char)) return 70 + Math.random() * 50 // Numbers
    if (/[./-]/.test(char)) return 90 + Math.random() * 70 // Special chars slower
    return 50 + Math.random() * 30 // Default
  }

  startCursorBlink(cursorElement) {
    if (cursorElement.blinkInterval) {
      clearInterval(cursorElement.blinkInterval)
    }

    cursorElement.blinkInterval = setInterval(() => {
      cursorElement.style.opacity = cursorElement.style.opacity === '0' ? '1' : '0'
    }, 300)
  }

  stopCursorBlink(cursorElement) {
    if (cursorElement.blinkInterval) {
      clearInterval(cursorElement.blinkInterval)
      cursorElement.blinkInterval = null
    }
    cursorElement.style.opacity = '1'
  }

  addCompletionEffect(lineElement) {
    // Add a subtle green flash when command completes
    lineElement.style.transition = 'color 0.3s ease'
    lineElement.style.color = '#4ade80'

    setTimeout(() => {
      lineElement.style.color = ''
    }, 300)
  }

  async copyCommands() {
    const fullCommands = this.commands.map(cmd => cmd.text).join('\n')

    try {
      await navigator.clipboard.writeText(fullCommands)

      // Show feedback
      const copyBtn = this.container.querySelector('.code-copy')
      const originalHTML = copyBtn.innerHTML

      copyBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      `

      setTimeout(() => {
        copyBtn.innerHTML = originalHTML
      }, 2000)
    } catch (err) {
      console.error('Failed to copy commands:', err)
    }
  }

  rerunAnimation() {
    if (this.isTyping) return

    // Reset completed states and clear text
    this.container.querySelectorAll('.code-line').forEach(line => {
      line.classList.remove('completed')
      line.style.opacity = ''
      line.style.animation = ''
    })

    // Clear all text
    this.container.querySelectorAll('.code-text').forEach(el => {
      el.textContent = ''
    })

    // Hide success message
    const successMsg = this.container.querySelector('.code-success')
    if (successMsg) {
      successMsg.style.display = 'none'
      successMsg.style.animation = ''
      successMsg.style.opacity = ''
    }

    // Restart typing animation
    this.startTyping()
  }

  wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
}