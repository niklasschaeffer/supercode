# SuperCode Framework

A comprehensive AI-powered development framework that orchestrates specialized agents and tools for intelligent software engineering workflows.

## Overview

SuperCode is a sophisticated development framework that combines **30 specialized AI agents** with **11 Model Context Protocol (MCP) integrations** to provide intelligent assistance across the entire software development lifecycle. The framework follows evidence-based engineering principles and task-first methodologies.

## Core Components

### 🤖 Specialized Agents (30)

**System & Architecture** (3)
- system-architect, orchestration, task-management

**Code Quality** (5)
- code-review, refactoring-expert, quality-engineer, performance-engineer, security-engineer

**Development** (4)
- backend-architect, frontend-architect, python-expert, typescript-expert

**Requirements & Business** (2)
- requirements-analyst, business-panel-experts (9 thought leaders)

**Research & Documentation** (4)
- deep-research-agent, technical-writer, service-documentation, prompt-engineer

**Operations** (1)
- devops-architect

**Education** (2)
- learning-guide, socratic-mentor

**Context Management** (3)
- context-gathering, context-refinement, logging

**Analysis** (1)
- root-cause-analyst

**Behavioral Modes** (5)
- brainstorm, business-panel, deep-research, introspection, token-efficiency

### 🔧 MCP Integrations (11)

**Core Development**
- **Sequential Thinking**: Structured multi-step reasoning and planning
- **Serena**: File operations and project memory management
- **In-Memoria**: Codebase intelligence and semantic understanding

**Documentation & Search**
- **Context7**: Library documentation and API references
- **Tavily**: Web search and real-time information retrieval

**Code Operations**
- **MorphLLM Fast Apply**: Efficient code editing and pattern application

**Browser & Testing**
- **Playwright**: Browser automation and E2E testing
- **Chrome DevTools**: Advanced browser debugging and testing

**UI & Components**
- **Shadcn**: UI component management
- **Prompt Kit**: Registry patterns and templates

**Integration**
- **Forgejo**: Git platform API integration

### 📋 Command Interface (26)

**Core Workflow**
- `/analyze` → code-review agent
- `/design` → system-architect agent
- `/implement` → multi-domain coordination
- `/build` → devops-architect agent
- `/test` → quality-engineer agent
- `/document` → technical-writer agent

**Planning & Discovery**
- `/brainstorm` → requirements exploration
- `/estimate` → project estimation
- `/workflow` → workflow generation
- `/spec-panel` → specification review

**Orchestration**
- `/spawn` → meta-task orchestration
- `/task` → complex task execution
- `/select-tool` → intelligent tool selection

**Quality & Improvement**
- `/cleanup` → code cleanup
- `/improve` → systematic improvement
- `/reflect` → task reflection

**Research & Analysis**
- `/research` → deep research agent
- `/index` → project indexing
- `/explain` → code explanation
- `/troubleshoot` → problem diagnosis

**Business & Strategy**
- `/business-panel` → 9-expert business analysis

**Operations**
- `/git` → Git operations
- `/prompt` → prompt management

**Session Management**
- `/load` → project context loading
- `/save` → session persistence

**Support**
- `/help` → framework assistance

## Key Features

### 🎯 Task-First Approach
- Understand → Plan → Execute → Validate
- Evidence-based reasoning over assumptions
- Parallel thinking for maximum efficiency
- Context awareness across sessions

### 🏗️ Engineering Excellence
- **SOLID Principles**: Single responsibility, open/closed, Liskov substitution, interface segregation, dependency inversion
- **Core Patterns**: DRY (Don't Repeat Yourself), KISS (Keep It Simple), YAGNI (You Aren't Gonna Need It)
- **Systems Thinking**: Ripple effect analysis, long-term perspective, risk calibration
- **Quality Quadrants**: Functional, structural, performance, security

### 🔄 Intelligent Orchestration
- Dynamic agent selection based on task complexity and requirements
- Dual-context system: Session memory (Serena) + Codebase intelligence (In-Memoria)
- Multi-domain coordination for complex implementations
- Performance-critical operations (<500ms initialization, <200ms core ops)

### 📚 Session Lifecycle Management
- **Load**: `/load` → Activate project + retrieve memories + establish context
- **Save**: `/save` → Persist session + store insights + checkpoint state
- **Checkpoint**: Regular memory updates every 30 minutes for continuity

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd supercode

# Run the installation script
./install.sh
```

The installation script copies all configuration files from `.opencode/` to `~/.config/opencode/` and sets up:
- 30 specialized agent definitions
- 26 intelligent commands
- 11 MCP server configurations
- Framework documentation and behavioral modes

## Configuration

### MCP Server Setup

Edit `~/.config/opencode/opencode.jsonc` to configure MCP servers that require API keys or custom settings:

**Forgejo** (Git platform integration)
```json
"forgejo": {
  "command": ["forgejo-mcp", "-t", "stdio", "--url", "YOUR_FORGEJO_URL"],
  "environment": {
    "FORGEJO_ACCESS_TOKEN": "YOUR_TOKEN"
  }
}
```

**Tavily** (Web search)
```json
"tavily": {
  "environment": {
    "TAVILY_API_KEY": "YOUR_TAVILY_API_KEY"
  }
}
```

**MorphLLM** (Fast code edits)
```json
"morphllm-fast-apply": {
  "environment": {
    "MORPH_API_KEY": "YOUR_MORPH_API_KEY"
  }
}
```

### Theme Configuration

The framework uses the Catppuccin theme by default. You can change this in `opencode.jsonc`:
```json
{
  "theme": "catppuccin"
}
```

## Quick Start

### Basic Workflow
```bash
# 1. Initialize project context
/load

# 2. Analyze existing code
/analyze

# 3. Design new features
/design <feature-description>

# 4. Implement changes
/implement <requirements>

# 5. Save session progress
/save
```

### Advanced Usage

**Deep Research**
```bash
/research "quantum computing breakthroughs 2024"
# Activates: deep-research-agent + Tavily search + Sequential thinking
```

**Business Analysis**
```bash
/business-panel @strategy.pdf
# Activates: 9 business thought leaders (Christensen, Porter, Drucker, etc.)
```

**Complex Task Orchestration**
```bash
/spawn "Migrate authentication system to OAuth2"
# Activates: system-architect with multi-agent delegation
```

## Philosophy

**Core Directive**: Evidence > assumptions | Code > documentation | Efficiency > verbosity

### Principles
- **Data-Driven Decisions**: Base choices on measurements, not assumptions
- **Preventive Quality**: Automated enforcement and early detection
- **Human-Centered Design**: Prioritize user welfare and autonomy
- **Long-Term Perspective**: Balance immediate needs with future maintainability

### Decision Framework
- **Trade-off Analysis**: Temporal impact, reversibility, option preservation
- **Risk Management**: Proactive identification, impact assessment, mitigation planning
- **Hypothesis Testing**: Formulate, test, validate systematically

## Project Structure

```
supercode/
├── .opencode/                    # Framework configuration
│   ├── agent/                    # 30 agent definitions (.md)
│   ├── command/                  # 26 command definitions (.md)
│   ├── opencode.jsonc            # MCP server configuration
│   ├── AGENTS.md                 # Agent documentation
│   ├── AGENT_MAPPING.md          # Command-to-agent mapping
│   ├── FLAGS.md                  # Behavioral flags
│   ├── PRINCIPLES.md             # Engineering principles
│   ├── RULES.md                  # Operational rules
│   ├── RESEARCH_CONFIG.md        # Deep research configuration
│   ├── BUSINESS_*.md             # Business panel configuration
│   └── MCP_*.md                  # MCP server documentation (11 files)
├── .serena/                      # Serena project data and memories
├── install.sh                    # Installation script
└── README.md                     # This file
```

## Architecture

The framework operates on a modular, event-driven architecture:

### Layer 1: User Interface
- **Commands** (`/command-name`) provide the entry point
- Command files specify triggers, usage patterns, and behavioral flows

### Layer 2: Intelligence Layer
- **Agents** contain specialized expertise and decision-making logic
- Agents coordinate with each other for multi-domain tasks
- Mode agents (brainstorm, research, etc.) adapt behavior contextually

### Layer 3: Capability Layer
- **MCP Servers** extend capabilities with external tools
- Dual-context system maintains both session and codebase understanding
- Tool coordination follows primary → secondary → fallback patterns

### Layer 4: Memory Layer
- **Serena** manages cross-session persistence and project memories
- **In-Memoria** provides codebase intelligence and learning
- Memory operations support session lifecycle and knowledge retention

## Development

### Adding New Agents
1. Create `.opencode/agent/your-agent.md` with YAML frontmatter
2. Define persona, workflow patterns, and integration specs
3. Update `AGENT_MAPPING.md` if creating associated commands

### Adding New Commands
1. Create `.opencode/command/your-command.md`
2. Specify triggers, usage, behavioral flow, and MCP integration
3. Map to appropriate agent(s) in `AGENT_MAPPING.md`
4. Test with `/help` to verify registration

### Extending MCP Integration
1. Add MCP server config to `opencode.jsonc`
2. Create `MCP_YourServer.md` documentation
3. Update relevant agent/command files to use new capabilities

## Contributing

SuperCode follows strict quality standards:
- **Evidence-Based**: All technical claims must be verifiable
- **Professional Tone**: Technical precision over marketing language
- **Complete Implementations**: No TODO comments or stub functions
- **Clean Workspace**: Remove temporary files after operations
- **Git Discipline**: Feature branches only, meaningful commits

## License

MIT License - see [LICENSE](LICENSE) file for details.

Copyright (c) 2025 SuperCode Contributors

This project is open source and available under the MIT License. You are free to use, modify, and distribute this software in accordance with the license terms.

---

**SuperCode**: Intelligent software engineering through specialized AI orchestration.

**Version**: 1.0  
**Agents**: 30 | **Commands**: 26 | **MCP Servers**: 11
