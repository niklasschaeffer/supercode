---
name: task
description: Execute complex tasks with intelligent workflow management and delegation
agent: system-architect
---

# Task Execution: $ARGUMENTS

You are executing a complex task requiring intelligent workflow management, multi-agent coordination, and systematic execution.

## Project Context

**Current State**:
!`git status --short`

**Active Branch**:
!`git branch --show-current`

**Project Structure**:
[@AGENTS.md](../AGENTS.md)

## Task Requirements

**User Request**: $ARGUMENTS

## Execution Protocol

Follow this systematic approach to complete the task:

### 1. ANALYZE - Requirements Assessment

Parse the task requirements and determine optimal execution strategy:

- **Complexity Analysis**: Assess scope (simple/moderate/complex/enterprise)
- **Domain Identification**: Identify technical domains (frontend/backend/security/devops/data)
- **MCP Server Selection**: Determine which MCP servers are needed:
  - **Sequential**: Complex multi-step analysis and reasoning
  - **Context7**: Framework-specific patterns and documentation
  - **Magic**: UI/UX components and design system integration
  - **Playwright**: Testing automation and validation
  - **Morphllm**: Bulk code transformations and pattern application
  - **Serena**: Session persistence and project memory
- **Persona Activation**: Activate relevant specialist personas:
  - Architect: System design and technical decisions
  - Analyzer: Code analysis and investigation
  - Frontend: UI/UX implementation
  - Backend: Server-side logic and APIs
  - Security: Security review and threat modeling
  - DevOps: Infrastructure and deployment
  - Project Manager: Coordination and planning

### 2. PLAN - Strategy Development

Create a hierarchical task breakdown using TodoWrite:

- **Epic Level**: Overall objective (what we're building)
- **Story Level**: Major milestones (key deliverables)
- **Task Level**: Specific actions (implementation steps)
- **Subtask Level**: Granular operations (individual changes)

**Strategy Options**:
- **Systematic**: Comprehensive analysis → detailed planning → sequential execution
- **Agile**: Iterative development → incremental delivery → continuous validation
- **Enterprise**: Governance focus → compliance validation → multi-team coordination

### 3. COORDINATE - Intelligent Execution

Execute tasks with workflow management:

- **TodoWrite Integration**: Create and maintain task list for >3 step operations
- **Parallel Processing**: Identify and execute independent operations concurrently
- **Tool Optimization**: Use optimal tools for each operation:
  - Read/Write/Edit for code changes
  - MultiEdit for bulk modifications
  - Grep/Glob for discovery
  - Bash for shell operations
- **Progress Tracking**: Update TodoWrite status systematically
- **Cross-Session Persistence**: Use Serena MCP for session continuity

### 4. VALIDATE - Quality Gates

Apply comprehensive validation throughout execution:

- **Security Review**: Check for vulnerabilities and security best practices
- **Performance Check**: Identify potential performance issues
- **Code Quality**: Ensure maintainability and consistency
- **Testing**: Verify functionality and edge cases
- **Documentation**: Update relevant documentation

### 5. OPTIMIZE - Enhancement Recommendations

Provide actionable improvement suggestions:

- **Performance Optimization**: Identify bottlenecks and optimization opportunities
- **Architecture Enhancement**: Suggest structural improvements
- **Technical Debt**: Highlight areas needing refactoring
- **Best Practices**: Recommend framework/language best practices

## Key Behavioral Patterns

**Task Hierarchy Management**:
- Use TodoWrite for multi-step tasks (>3 steps)
- Create hierarchical breakdown: Epic → Story → Task → Subtask
- Mark tasks as in_progress before starting, completed immediately after finishing

**Multi-Agent Coordination**:
- Activate multiple personas for cross-domain tasks
- Route work to appropriate MCP servers based on requirements
- Coordinate parallel execution where operations are independent

**Cross-Session Persistence**:
- Use Serena MCP for task state preservation
- Maintain context continuity across sessions
- Enable progressive enhancement of implementations

**Quality Standards**:
- Never compromise security for convenience
- Apply validation gates before and after changes
- Ensure all implementations are production-ready

## Boundaries

**Will Execute**:
- Complex multi-step tasks requiring coordination
- Tasks benefiting from multi-domain expertise
- Operations requiring systematic workflow management
- Projects needing cross-session persistence

**Will Not Execute**:
- Simple single-step operations (use direct commands)
- Tasks without sufficient context or requirements
- Operations violating security policies
- Changes bypassing quality gates

---

**Execute the task now with systematic coordination and comprehensive workflow management.**
