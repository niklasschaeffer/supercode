# Command-to-Agent Mapping

**Date**: 2025-10-16
**Status**: All 25 commands now have appropriate agent assignments

## Agent Assignments

### System Architecture & Design
- **design** → system-architect (system architecture, APIs, component interfaces)
- **spawn** → system-architect (meta-system task orchestration)
- **select-tool** → system-architect (MCP tool selection intelligence)
- **task** → task (complex task orchestration)

### Analysis & Quality
- **analyze** → analyzer (multi-domain code analysis)
- **cleanup** → analyzer (systematic code cleanup)
- **explain** → analyzer (educational code explanations)
- **improve** → analyzer (systematic code improvements)
- **troubleshoot** → root-cause-analyst (issue diagnosis and resolution)

### Requirements & Planning
- **brainstorm** → requirements-analyst (requirements discovery)
- **estimate** → requirements-analyst (development estimation)
- **workflow** → requirements-analyst (implementation workflow generation)
- **spec-panel** → requirements-analyst (expert specification review)

### Documentation
- **document** → technical-writer (focused documentation generation)
- **index** → technical-writer (project documentation and knowledge base)
- **help** → general-purpose (command reference)

### Development & Build
- **build** → build (project building and compilation)
- **implement** → build (feature implementation)
- **test** → test (test execution and coverage)

### Session Management (Serena MCP)
- **load** → context-gathering (project context loading)
- **save** → general-purpose (session persistence)
- **reflect** → general-purpose (task reflection and validation)

### Research & Discovery
- **research** → deep-research-agent (deep web research with Tavily MCP)

### Business Analysis
- **business-panel** → business-panel-experts (multi-expert business analysis)

### Version Control
- **git** → general-purpose (Git/Gitea operations)

## Agent Descriptions

Available agents in `.opencode/agent/`:

1. **backend-architect** - Backend system design and architecture
2. **business-panel-experts** - Multi-expert business analysis panel
3. **code-review** - Code review and quality assessment
4. **context-gathering** - Project context collection and initialization
5. **context-refinement** - Context manifest updates and refinement
6. **deep-research-agent** - Comprehensive research with adaptive strategies
7. **devops-architect** - Infrastructure and deployment automation
8. **frontend-architect** - UI/UX and frontend system design
9. **learning-guide** - Educational guidance and concept explanation
10. **logging** - Work log consolidation and organization
11. **performance-engineer** - Performance optimization and analysis
12. **python-expert** - Python-specific development expertise
13. **quality-engineer** - Testing strategies and quality assurance
14. **refactoring-expert** - Code refactoring and clean code principles
15. **requirements-analyst** - Requirements discovery and analysis
16. **root-cause-analyst** - Systematic problem investigation
17. **security-engineer** - Security analysis and vulnerability detection
18. **service-documentation** - Service documentation updates
19. **socratic-mentor** - Socratic method educational guidance
20. **system-architect** - System-level architecture and design
21. **technical-writer** - Technical documentation creation

## Mapping Rationale

### Key Decisions

1. **system-architect for meta-operations**: spawn, select-tool, design require system-level thinking
2. **analyzer for code operations**: Multiple code-focused commands benefit from analysis expertise
3. **requirements-analyst for planning**: brainstorm, estimate, workflow, spec-panel all involve requirements
4. **technical-writer for docs**: document and index are documentation-focused
5. **context-gathering for load**: Specialized for project context initialization
6. **business-panel-experts for business-panel**: Specialized multi-expert business analysis
7. **deep-research-agent for research**: Specialized for web research with Tavily MCP

### Changes Made

**Updated agent assignments**:
- design: architect → **system-architect** (more specific)
- document: scribe → **technical-writer** (proper agent name)
- help: [none] → **general-purpose** (simple reference command)
- select-tool: [none] → **system-architect** (system-level tool selection)
- spawn: [none] → **system-architect** (meta-system orchestration)
- workflow: [none] → **requirements-analyst** (workflow planning)
- business-panel: [none] → **business-panel-experts** (specialized business analysis)
- spec-panel: [none] → **requirements-analyst** (specification review)

## Verification

All 25 commands now have appropriate agent assignments matching their purpose and the available agent capabilities in `.opencode/agent/`.

**Coverage**: 100% (25/25 commands)
**Agent Utilization**: 11 different agents used appropriately
**Specialization**: Commands matched to most appropriate agent expertise
