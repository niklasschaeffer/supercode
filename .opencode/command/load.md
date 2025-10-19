---
name: load
description: Session lifecycle management with Serena and In-Memoria MCP integration for context loading
agent: context-gathering
---

# Project Context Loading: $ARGUMENTS

You are loading project context using Serena MCP (session memories) and In-Memoria MCP (codebase intelligence) for complete cross-session restoration.

## Current Context

**Current Directory**: !`pwd`
**Project Structure**: @AGENTS.md
**Available Memories**: Use Serena MCP `list_memories` and In-Memoria `get_learning_status` to discover context

## Load Request

**Target**: ${ARGUMENTS:-"current directory"}

## Context Loading Protocol

Execute systematic project loading with dual MCP integration:

### 1. INITIALIZE - Dual MCP Connection

**Serena MCP Activation**:
- Use `activate_project(project_path)` to establish session context
- Verify Serena connection and memory access
- Check for existing session memories and checkpoints
- Prepare session restoration environment

**In-Memoria MCP Learning**:
- Use `auto_learn_if_needed({ path: '.' })` to trigger codebase analysis if needed
- Verify In-Memoria connection and learning status
- Check if codebase analysis is current
- Prepare pattern intelligence for session

**Directory Analysis**:
- Identify project root and structure
- Detect project type and technology stack
- Discover configuration files
- Map key directories and entry points

### 2. DISCOVER - Dual Memory Retrieval

**Serena MCP - Session Memories**:
```
list_memories()
→ Previous session contexts
→ Work logs and progress
→ Technical decisions
→ Known issues and workarounds
→ Checkpoints and recovery points

read_memory(memory_name)
→ Retrieve specific session context
→ Load checkpoint data if resuming
→ Integrate session insights
```

**In-Memoria MCP - Codebase Intelligence**:
```
get_project_blueprint({ path: '.', includeFeatureMap: true })
→ Architecture overview and component map
→ Project structure understanding
→ Technology stack and dependencies
→ Entry points and key modules

get_pattern_recommendations({ includeRelatedFiles: true })
→ Project-specific patterns and conventions
→ Naming conventions and style preferences
→ Common idioms and utilities
→ Error handling approaches
```

### 3. LOAD - Dual Context Establishment

**Session Context** (Serena):
- Load recent session memories and work logs
- Restore checkpoint if resuming task
- Integrate technical decisions made
- Review known issues and workarounds
- Identify incomplete work and next steps

**Codebase Context** (In-Memoria):
```
predict_coding_approach({
  problemDescription: "current session goals",
  includeFileRouting: true
})
→ Recommended approach based on learned patterns
→ File routing suggestions
→ Pattern application guidance
→ Consistency recommendations

get_semantic_insights()
→ Code relationships and dependencies
→ Architectural patterns in use
→ Component interactions
```

### 4. ACTIVATE - Project Readiness

**Context Integration**:
- Synthesize Serena session context with In-Memoria codebase intelligence
- Combine "what we did" (Serena) with "how codebase works" (In-Memoria)
- Identify knowledge gaps requiring exploration
- Prepare comprehensive session understanding

**Validation**:
- Verify project structure matches expected patterns
- Confirm dependencies available
- Check for configuration issues
- Validate memory consistency between MCPs

**Readiness Assessment**:
- Confirm all critical context loaded from both MCPs
- Identify any missing information
- Flag potential issues or blockers
- Report dual-context loading status

### 5. VALIDATE - Session Preparation

**Context Quality**:
- Ensure loaded context is current and accurate
- Verify no conflicting information between MCPs
- Check for deprecated patterns or outdated decisions
- Validate cross-session compatibility

**Performance**:
- Context loading time (<500ms target)
- Memory retrieval efficiency
- Pattern learning status
- Session readiness achieved

**Preparation Complete**:
- Provide integrated context summary
- Highlight session insights (Serena) + codebase patterns (In-Memoria)
- Flag any issues or concerns
- Ready for development workflow

## MCP Operations Reference

**Serena MCP** (Session Context):
```
activate_project(path) → Establish project context
list_memories() → Discover saved memories
read_memory(name) → Retrieve session context
```

**In-Memoria MCP** (Codebase Intelligence):
```
auto_learn_if_needed({ path }) → Trigger learning if needed
get_project_blueprint({ path, includeFeatureMap }) → Architecture overview
get_pattern_recommendations({ includeRelatedFiles }) → Load patterns
predict_coding_approach({ problemDescription, includeFileRouting }) → Get recommendations
get_semantic_insights() → Code relationships and patterns
get_learning_status() → Check analysis status
```

## Loading Strategies

**Quick Load** (Default): Serena activates + loads recent session, In-Memoria auto-learns + gets blueprint
**Comprehensive Load**: Full memory analysis + complete pattern loading with semantic insights
**Checkpoint Restoration**: Load specific checkpoint + restore exact session state

## Examples

### Basic Project Load
```
/load
→ Serena: Activates project + lists memories
→ In-Memoria: Auto-learns if needed + loads blueprint
→ Loads recent session context
→ Provides pattern recommendations
→ Reports integrated context ready
```

### Comprehensive Load with Analysis
```
/load --analyze
→ Serena: Full memory analysis + all contexts
→ In-Memoria: Complete pattern loading + semantic insights
→ Detailed architecture overview
→ Coding approach predictions
→ Comprehensive readiness report
```

### Checkpoint Restoration
```
/load --checkpoint checkpoint_2024_01_15_14_30
→ Serena: Restores specific checkpoint state
→ In-Memoria: Loads patterns for checkpoint context
→ Resumes from saved session point
→ Full context restoration completed
```

## Integration Benefits

**Dual MCP Context**: Serena ("what we did") + In-Memoria ("how codebase works") = complete understanding for immediate productivity with no re-explaining. Intelligence accumulates over time with each session.

---

**Execute project context loading now with dual MCP integration for complete session restoration.**
