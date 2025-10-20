export const content = {
  hero: {
    title: "SuperCode Framework",
    subtitle: "Intelligent Software Engineering Through Specialized AI Orchestration",
    description: "A comprehensive AI-powered development framework combining 30 specialized agents with 11 MCP integrations for intelligent software engineering workflows.",
    cta: "Get Started",
    version: "v1.0"
  },

  features: [
    {
      icon: "🤖",
      title: "30 Specialized Agents",
      description: "From system architects to security engineers, each agent brings deep expertise in their domain.",
      highlight: true
    },
    {
      icon: "🔧",
      title: "11 MCP Integrations",
      description: "Powerful integrations with Sequential Thinking, Serena, In-Memoria, Context7, and more.",
      highlight: true
    },
    {
      icon: "📋",
      title: "26 Intelligent Commands",
      description: "Comprehensive command interface covering the entire development lifecycle.",
      highlight: false
    },
    {
      icon: "🎯",
      title: "Task-First Approach",
      description: "Evidence-based engineering with Understand → Plan → Execute → Validate methodology.",
      highlight: false
    },
    {
      icon: "🔄",
      title: "Dual-Context System",
      description: "Session memory (Serena) + Codebase intelligence (In-Memoria) for complete context awareness.",
      highlight: false
    },
    {
      icon: "📚",
      title: "Session Lifecycle",
      description: "Load → Analyze → Design → Implement → Save workflow with intelligent persistence.",
      highlight: false
    }
  ],

  architecture: {
    title: "Revolutionary Agent Architecture",
    subtitle: "Primary Agents with Dynamic Subagent Coordination",
    description: "Experience our groundbreaking architectural evolution: primary agents now intelligently coordinate specialized subagents based on mode and context. This hierarchical system enables unprecedented flexibility and expertise deployment.",
    highlight: {
      title: "What's New?",
      points: [
        "Primary agents (like orchestration) dynamically call subagents (like frontend-architect)",
        "Mode-based agent selection for optimal expertise matching",
        "Hierarchical coordination for complex multi-domain tasks",
        "Improved efficiency through intelligent agent routing"
      ]
    },
    layers: [
      {
        name: "Primary Agents",
        description: "Strategic coordination and decision-making",
        examples: ["orchestration", "system-architect", "task-management"]
      },
      {
        name: "Mode Agents",
        description: "Contextual behavior adaptation",
        examples: ["brainstorm", "deep-research", "introspection", "token-efficiency"]
      },
      {
        name: "Specialized Agents",
        description: "Domain-specific expertise and execution",
        examples: ["frontend-architect", "backend-architect", "security-engineer", "quality-engineer"]
      }
    ]
  },

  agents: {
    categories: [
      {
        name: "System & Architecture",
        count: 3,
        agents: ["system-architect", "orchestration", "task-management"]
      },
      {
        name: "Code Quality",
        count: 5,
        agents: ["code-review", "refactoring-expert", "quality-engineer", "performance-engineer", "security-engineer"]
      },
      {
        name: "Development",
        count: 4,
        agents: ["backend-architect", "frontend-architect", "python-expert", "typescript-expert"]
      },
      {
        name: "Requirements & Business",
        count: 2,
        agents: ["requirements-analyst", "business-panel-experts"]
      },
      {
        name: "Research & Documentation",
        count: 4,
        agents: ["deep-research-agent", "technical-writer", "service-documentation", "prompt-engineer"]
      },
      {
        name: "Operations",
        count: 1,
        agents: ["devops-architect"]
      },
      {
        name: "Education",
        count: 2,
        agents: ["learning-guide", "socratic-mentor"]
      },
      {
        name: "Context Management",
        count: 3,
        agents: ["context-gathering", "context-refinement", "logging"]
      },
      {
        name: "Analysis",
        count: 1,
        agents: ["root-cause-analyst"]
      }
    ]
  },

  mcpIntegrations: [
    {
      name: "Sequential Thinking",
      description: "Structured multi-step reasoning and planning",
      category: "Core Development"
    },
    {
      name: "Serena",
      description: "File operations and project memory management",
      category: "Core Development"
    },
    {
      name: "In-Memoria",
      description: "Codebase intelligence and semantic understanding",
      category: "Core Development"
    },
    {
      name: "Context7",
      description: "Library documentation and API references",
      category: "Documentation & Search"
    },
    {
      name: "Tavily",
      description: "Web search and real-time information retrieval",
      category: "Documentation & Search"
    },
    {
      name: "MorphLLM Fast Apply",
      description: "Efficient code editing and pattern application",
      category: "Code Operations"
    },
    {
      name: "Playwright",
      description: "Browser automation and E2E testing",
      category: "Browser & Testing"
    },
    {
      name: "Shadcn",
      description: "UI component management",
      category: "UI & Components"
    },
    {
      name: "Forgejo",
      description: "Git platform API integration",
      category: "Integration"
    }
  ],

  commands: [
    {
      name: "Core Workflow",
      commands: [
        { name: "/analyze", agent: "code-review", description: "Comprehensive code analysis" },
        { name: "/design", agent: "system-architect", description: "System architecture design" },
        { name: "/implement", agent: "multi-domain", description: "Feature implementation" },
        { name: "/build", agent: "devops-architect", description: "Build and deployment" },
        { name: "/test", agent: "quality-engineer", description: "Testing and coverage" },
        { name: "/document", agent: "technical-writer", description: "Documentation generation" }
      ]
    },
    {
      name: "Orchestration",
      commands: [
        { name: "/spawn", agent: "system-architect", description: "Meta-task orchestration" },
        { name: "/task", agent: "system-architect", description: "Complex task execution" },
        { name: "/select-tool", agent: "system-architect", description: "Intelligent tool selection" }
      ]
    },
    {
      name: "Planning & Discovery",
      commands: [
        { name: "/brainstorm", agent: "requirements-analyst", description: "Requirements exploration" },
        { name: "/estimate", agent: "requirements-analyst", description: "Project estimation" },
        { name: "/workflow", agent: "requirements-analyst", description: "Workflow generation" },
        { name: "/spec-panel", agent: "requirements-analyst", description: "Specification review" }
      ]
    }
  ],

  docs: {
    title: "Framework Documentation",
    sections: [
      {
        title: "Getting Started",
        content: "Learn the basics of SuperCode framework, installation, and configuration.",
        topics: ["Installation", "Configuration", "Quick Start", "Basic Workflow"]
      },
      {
        title: "Agent System",
        content: "Understand our revolutionary agent architecture and coordination patterns.",
        topics: ["Primary Agents", "Mode Agents", "Specialized Agents", "Agent Coordination"]
      },
      {
        title: "MCP Integrations",
        content: "Explore the powerful Model Context Protocol integrations that extend SuperCode capabilities.",
        topics: ["Core Development", "Documentation", "Code Operations", "Browser Testing"]
      },
      {
        title: "Command Reference",
        content: "Complete reference for all 26 intelligent commands and their usage patterns.",
        topics: ["Core Commands", "Planning Commands", "Quality Commands", "Session Management"]
      },
      {
        title: "Engineering Principles",
        content: "Learn about the evidence-based engineering principles that guide SuperCode development.",
        topics: ["SOLID Principles", "Quality Quadrants", "Decision Framework", "Risk Management"]
      }
    ]
  },

  footer: {
    description: "Intelligent software engineering through specialized AI orchestration",
    links: [
      { name: "GitHub", url: "#" },
      { name: "Documentation", url: "#" },
      { name: "Community", url: "#" }
    ]
  }
}