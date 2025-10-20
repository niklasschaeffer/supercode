(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const h={features:[{icon:"🤖",title:"30 Specialized Agents",description:"From system architects to security engineers, each agent brings deep expertise in their domain.",highlight:!0},{icon:"🔧",title:"11 MCP Integrations",description:"Powerful integrations with Sequential Thinking, Serena, In-Memoria, Context7, and more.",highlight:!0},{icon:"📋",title:"26 Intelligent Commands",description:"Comprehensive command interface covering the entire development lifecycle.",highlight:!1},{icon:"🎯",title:"Task-First Approach",description:"Evidence-based engineering with Understand → Plan → Execute → Validate methodology.",highlight:!1},{icon:"🔄",title:"Dual-Context System",description:"Session memory (Serena) + Codebase intelligence (In-Memoria) for complete context awareness.",highlight:!1},{icon:"📚",title:"Session Lifecycle",description:"Load → Analyze → Design → Implement → Save workflow with intelligent persistence.",highlight:!1}],agents:{categories:[{name:"System & Architecture",count:3,agents:["system-architect","orchestration","task-management"]},{name:"Code Quality",count:5,agents:["code-review","refactoring-expert","quality-engineer","performance-engineer","security-engineer"]},{name:"Development",count:4,agents:["backend-architect","frontend-architect","python-expert","typescript-expert"]},{name:"Requirements & Business",count:2,agents:["requirements-analyst","business-panel-experts"]},{name:"Research & Documentation",count:4,agents:["deep-research-agent","technical-writer","service-documentation","prompt-engineer"]},{name:"Operations",count:1,agents:["devops-architect"]},{name:"Education",count:2,agents:["learning-guide","socratic-mentor"]},{name:"Context Management",count:3,agents:["context-gathering","context-refinement","logging"]},{name:"Analysis",count:1,agents:["root-cause-analyst"]}]},docs:{sections:[{title:"Getting Started",content:"Learn the basics of SuperCode framework, installation, and configuration.",topics:["Installation","Configuration","Quick Start","Basic Workflow"]},{title:"Agent System",content:"Understand our revolutionary agent architecture and coordination patterns.",topics:["Primary Agents","Mode Agents","Specialized Agents","Agent Coordination"]},{title:"MCP Integrations",content:"Explore the powerful Model Context Protocol integrations that extend SuperCode capabilities.",topics:["Core Development","Documentation","Code Operations","Browser Testing"]},{title:"Command Reference",content:"Complete reference for all 26 intelligent commands and their usage patterns.",topics:["Core Commands","Planning Commands","Quality Commands","Session Management"]},{title:"Engineering Principles",content:"Learn about the evidence-based engineering principles that guide SuperCode development.",topics:["SOLID Principles","Quality Quadrants","Decision Framework","Risk Management"]}]}};class w{constructor(){this.header=document.getElementById("header"),this.navToggle=document.getElementById("nav-toggle"),this.navMenu=document.getElementById("nav-menu"),this.isMenuOpen=!1,this.lastScrollY=window.scrollY,this.init()}init(){this.setupNavigation(),this.setupScrollEffects(),this.setupKeyboardNavigation()}setupNavigation(){this.navToggle.addEventListener("click",()=>this.toggleMobileMenu()),document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const n=document.querySelector(e.getAttribute("href"));n&&(n.scrollIntoView({behavior:"smooth",block:"start"}),this.closeMobileMenu())})})}setupScrollEffects(){window.addEventListener("scroll",()=>{const e=window.scrollY;e>50?this.header.classList.add("scrolled"):this.header.classList.remove("scrolled"),e>this.lastScrollY&&e>100?this.header.style.transform="translateY(-100%)":this.header.style.transform="translateY(0)",this.lastScrollY=e})}setupKeyboardNavigation(){document.addEventListener("keydown",e=>{e.key==="Escape"&&this.isMenuOpen&&this.closeMobileMenu()})}toggleMobileMenu(){this.isMenuOpen=!this.isMenuOpen,this.navMenu.classList.toggle("active");const e=this.navToggle.querySelectorAll("span");this.isMenuOpen?(e[0].style.transform="rotate(45deg) translate(5px, 5px)",e[1].style.opacity="0",e[2].style.transform="rotate(-45deg) translate(7px, -6px)"):(e[0].style.transform="none",e[1].style.opacity="1",e[2].style.transform="none")}closeMobileMenu(){this.isMenuOpen&&this.toggleMobileMenu()}}class C{constructor(){this.observers=new Map,this.init()}init(){this.setupIntersectionObserver(),this.setupHeroAnimations(),this.setupButtonEffects(),this.setupParallaxEffects()}setupIntersectionObserver(){const e={threshold:.1,rootMargin:"0px 0px -50px 0px"},t=new IntersectionObserver(n=>{n.forEach(s=>{s.isIntersecting&&this.animateElement(s.target)})},e);document.querySelectorAll(".animate-on-scroll").forEach(n=>{t.observe(n),this.observers.set(n,t)})}animateElement(e){e.classList.add("animated");const t=e.parentElement;if(t){const s=Array.from(t.children).indexOf(e);e.style.transitionDelay=`${s*.1}s`}}setupHeroAnimations(){document.querySelectorAll(".hero-card[data-tilt]").forEach(t=>{t.addEventListener("mousemove",n=>{this.handleCardTilt(n,t)}),t.addEventListener("mouseleave",()=>{t.style.transform="perspective(1000px) rotateX(0) rotateY(0) translateZ(0)"})})}handleCardTilt(e,t){const n=t.getBoundingClientRect(),s=e.clientX-n.left,o=e.clientY-n.top,a=n.width/2,c=n.height/2,f=(o-c)/10,v=(a-s)/10;t.style.transform=`perspective(1000px) rotateX(${f}deg) rotateY(${v}deg) translateZ(10px)`}setupButtonEffects(){document.querySelectorAll(".btn").forEach(t=>{t.addEventListener("mouseenter",n=>this.createRipple(n,t))})}createRipple(e,t){const n=document.createElement("span");n.style.position="absolute",n.style.width="100px",n.style.height="100px",n.style.background="rgba(255, 255, 255, 0.3)",n.style.borderRadius="50%",n.style.transform="translate(-50%, -50%)",n.style.pointerEvents="none",n.style.animation="ripple 0.6s ease-out";const s=t.getBoundingClientRect();n.style.left=`${e.clientX-s.left}px`,n.style.top=`${e.clientY-s.top}px`,t.appendChild(n),setTimeout(()=>n.remove(),600)}setupParallaxEffects(){const e=document.querySelectorAll(".hero-particles");window.addEventListener("scroll",()=>{const t=window.pageYOffset;e.forEach(n=>{const s=n.dataset.speed||.5;n.style.transform=`translateY(${t*s}px)`})})}addCustomAnimation(e,t){e.classList.add("animate-on-scroll"),e.dataset.animation=t}destroy(){this.observers.forEach((e,t)=>{e.unobserve(t)}),this.observers.clear()}}const g=document.createElement("style");g.textContent=`
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
`;document.head.appendChild(g);class x{constructor(){this.loadingScreen=document.getElementById("loading-screen"),this.loadingProgress=document.querySelector(".loading-progress"),this.isLoading=!0,this.progress=0,this.simulationInterval=null}init(){if(!this.loadingScreen||!this.loadingProgress){console.warn("Loading screen elements not found, skipping loading animation"),this.hide();return}document.body.style.overflow="hidden",this.simulateLoading()}simulateLoading(){const e=setInterval(()=>{this.progress+=Math.random()*30,this.progress>=100&&(this.progress=100,clearInterval(e),this.simulationInterval=null,setTimeout(()=>this.hide(),500)),this.updateProgress()},200);this.simulationInterval=e}updateProgress(){this.loadingProgress&&(this.loadingProgress.style.width=`${this.progress}%`)}hide(){this.loadingScreen&&this.loadingScreen.classList.add("hidden"),this.isLoading=!1,document.body.style.overflow="visible",window.dispatchEvent(new CustomEvent("loadingComplete"))}show(){this.loadingScreen&&this.loadingScreen.classList.remove("hidden"),this.isLoading=!0,this.progress=0,this.updateProgress(),document.body.style.overflow="hidden"}destroy(){this.simulationInterval&&(clearInterval(this.simulationInterval),this.simulationInterval=null)}}class L{constructor(e){this.container=e,this.commands=[{text:"git clone https://github.com/niklasschaeffer/supercode.git",delay:0},{text:"cd supercode",delay:1500},{text:"./install.sh",delay:3e3}],this.currentCommand=0,this.currentChar=0,this.isTyping=!1,this.cursor=null,this.isExpanded=!1,this.autoType=!0}init(){this.render(),this.autoType?this.startTyping():this.showAllTextImmediately()}render(){this.container.innerHTML=`
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
            ${this.commands.map((e,t)=>`
              <div class="code-line" data-line="${t}">
                <span class="code-prompt">$</span>
                <span class="code-text-container" data-command-container="${t}">
                  <span class="code-text" data-command="${t}"></span>
                  <span class="code-cursor" data-cursor="${t}" style="display: none;">▊</span>
                </span>
              </div>
            `).join("")}
          </div>
          <div class="code-success" style="display: none;">
            <span class="success-icon">✓</span>
            <span class="success-text">SuperCode Framework installed successfully!</span>
          </div>
        </div>
      </div>
    `,this.setupEventListeners()}setupEventListeners(){const e=this.container.querySelector(".code-copy"),t=this.container.querySelector(".code-rerun");e?.addEventListener("click",()=>this.copyCommands()),t?.addEventListener("click",()=>this.rerunAnimation())}showAllTextImmediately(){this.commands.forEach((t,n)=>{const s=this.container.querySelector(`[data-command="${n}"]`),o=this.container.querySelector(`[data-line="${n}"]`);s&&(s.textContent=t.text),o&&(o.classList.add("completed"),o.style.opacity="1",o.style.animation="none")});const e=this.container.querySelector(".code-success");e&&(e.style.display="flex",e.style.animation="none",e.style.opacity="1")}async startTyping(){if(this.isTyping)return;this.isTyping=!0,this.currentCommand=0,this.currentChar=0;const e=this.container.querySelector(".code-success");e&&(e.style.display="none"),this.container.querySelectorAll(".code-text").forEach(t=>{t.textContent=""});for(let t=0;t<this.commands.length;t++)await this.typeCommand(t),await this.wait(800);e&&(e.style.display="flex",e.style.animation="fadeInUp 0.5s ease-out"),this.isTyping=!1}async typeCommand(e){const t=this.commands[e],n=this.container.querySelector(`[data-command="${e}"]`),s=this.container.querySelector(`[data-cursor="${e}"]`),o=this.container.querySelector(`[data-line="${e}"]`);if(!(!n||!s||!o)){s.style.display="inline",o.classList.add("active"),this.startCursorBlink(s);for(let a=0;a<=t.text.length;a++){n.textContent=t.text.substring(0,a);let c=this.getTypingDelay(t.text[a]);a>0&&a%8===0&&Math.random()>.7&&(c+=Math.random()*150+50),await this.wait(c)}this.stopCursorBlink(s),s.style.display="none",o.classList.remove("active"),o.classList.add("completed"),this.addCompletionEffect(o)}}getTypingDelay(e){return e===" "?30:/[a-z]/.test(e)?60+Math.random()*40:/[A-Z]/.test(e)?80+Math.random()*60:/[0-9]/.test(e)?70+Math.random()*50:/[./-]/.test(e)?90+Math.random()*70:50+Math.random()*30}startCursorBlink(e){e.blinkInterval&&clearInterval(e.blinkInterval),e.blinkInterval=setInterval(()=>{e.style.opacity=e.style.opacity==="0"?"1":"0"},300)}stopCursorBlink(e){e.blinkInterval&&(clearInterval(e.blinkInterval),e.blinkInterval=null),e.style.opacity="1"}addCompletionEffect(e){e.style.transition="color 0.3s ease",e.style.color="#4ade80",setTimeout(()=>{e.style.color=""},300)}async copyCommands(){const e=this.commands.map(t=>t.text).join(`
`);try{await navigator.clipboard.writeText(e);const t=this.container.querySelector(".code-copy"),n=t.innerHTML;t.innerHTML=`
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      `,setTimeout(()=>{t.innerHTML=n},2e3)}catch(t){console.error("Failed to copy commands:",t)}}rerunAnimation(){if(this.isTyping)return;this.container.querySelectorAll(".code-line").forEach(t=>{t.classList.remove("completed"),t.style.opacity="",t.style.animation=""}),this.container.querySelectorAll(".code-text").forEach(t=>{t.textContent=""});const e=this.container.querySelector(".code-success");e&&(e.style.display="none",e.style.animation="",e.style.opacity=""),this.startTyping()}wait(e){return new Promise(t=>setTimeout(t,e))}}const b=document.getElementById("features-grid"),E=document.getElementById("agents-categories"),S=document.getElementById("docs-grid");let u,l,r,p;document.addEventListener("DOMContentLoaded",()=>{M(),setTimeout(()=>{l||(console.warn("Safety net initialization triggered"),d())},4e3)});window.forceInitialization=()=>{console.warn("Force initialization triggered"),d()};function M(){r=new x,r.init();const i=setTimeout(()=>{(r.isLoading||!l)&&(console.warn("Loading screen fallback triggered - loading:",r.isLoading,"animations:",!!l),r.isLoading&&r.hide(),d())},3e3);window.addEventListener("loadingComplete",()=>{clearTimeout(i),d()})}function d(){try{u=new w,window.SuperCodeLanding.header=u;const i=document.querySelector(".hero-visual");i&&(i.innerHTML='<div id="code-box-container"></div>',p=new L(document.getElementById("code-box-container")),p.init(),window.SuperCodeLanding.codeBox=p),m(),setTimeout(()=>{l=new C,window.SuperCodeLanding.animations=l,console.log("Animations initialized after content render")},100),A(),console.log("Initialization completed successfully")}catch(i){console.error("Error during initialization:",i);try{m()}catch(e){console.error("Error rendering content:",e)}}}function m(){T(),I(),k()}function T(){b.innerHTML=h.features.map(i=>`
    <div class="feature-card ${i.highlight?"highlight":""} animate-on-scroll">
      <span class="feature-icon">${i.icon}</span>
      <h3 class="feature-title">${i.title}</h3>
      <p class="feature-description">${i.description}</p>
    </div>
  `).join("")}function I(){E.innerHTML=h.agents.categories.map(i=>`
    <div class="agent-category animate-on-scroll">
      <div class="category-header">
        <h3 class="category-name">${i.name}</h3>
        <span class="category-count">${i.count}</span>
      </div>
      <div class="agent-list">
        ${i.agents.map(e=>`
          <span class="agent-tag">${e}</span>
        `).join("")}
      </div>
    </div>
  `).join("")}function k(){S.innerHTML=h.docs.sections.map(i=>`
    <div class="doc-card animate-on-scroll">
      <h3 class="doc-title">${i.title}</h3>
      <p class="doc-content">${i.content}</p>
      <div class="doc-topics">
        ${i.topics.map(e=>`
          <span class="topic-tag">${e}</span>
        `).join("")}
      </div>
    </div>
  `).join("")}function A(){window.addEventListener("load",()=>{const i=performance.now();if(y("page_load",{loadTime:i}),"performance"in window){const e=performance.getEntriesByType("navigation")[0];console.log("Page Load Performance:",{domContentLoaded:e.domContentLoadedEventEnd-e.domContentLoadedEventStart,loadComplete:e.loadEventEnd-e.loadEventStart,totalTime:i})}})}function y(i,e={}){console.log("Event tracked:",i,e)}function $(i,e){e?(i.classList.add("loading"),i.disabled=!0):(i.classList.remove("loading"),i.disabled=!1)}window.SuperCodeLanding={trackEvent:y,addLoadingState:$,header:u,animations:l,loading:r};
