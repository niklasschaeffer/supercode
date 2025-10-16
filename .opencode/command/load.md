---
name: load
description: Session lifecycle management with Serena MCP integration for project context loading
agent: context-gathering
---

# Project Context Loading: $ARGUMENTS

You are loading project context and session state using Serena MCP integration for cross-session persistence and memory management.

## Current Context

**Current Directory**:
!`pwd`

**Project Structure**:
@AGENTS.md

**Available Memories**:
Use Serena MCP `list_memories` to discover existing project memories and session context

## Load Request

**Target**: ${ARGUMENTS:-"current directory"}

## Context Loading Protocol

Execute systematic project context loading with Serena MCP integration:

### 1. INITIALIZE - Serena MCP Connection

**Project Activation**:
- Use Serena MCP `activate_project` to establish project context
- Verify Serena MCP connection and memory access
- Check for existing project configuration and memories
- Prepare session context for development workflow

**Directory Analysis**:
- Identify project root and structure
- Detect project type (mono-repo, multi-repo, single project)
- Discover configuration files and build systems
- Map key directories and entry points

### 2. DISCOVER - Memory Retrieval

**List Available Memories**:
```
Use Serena MCP list_memories to discover:
- Previous session contexts
- Project architecture insights
- Development patterns and conventions
- Technical decisions and rationale
- Known issues and workarounds
```

**Memory Assessment**:
- Identify relevant memories for current session
- Prioritize by recency and relevance
- Check for checkpoint data and recovery points
- Validate memory integrity and compatibility

### 3. LOAD - Context Establishment

**Memory Loading**:
```
For each relevant memory:
1. Use Serena MCP read_memory to retrieve content
2. Integrate insights into current session context
3. Update project understanding
4. Identify any conflicting or outdated information
```

**Context Types**:

**Project Context**:
- Architecture and design patterns
- Module organization and relationships
- Technology stack and dependencies
- Build and deployment processes

**Development Context**:
- Coding conventions and style guides
- Common patterns and utilities
- Known issues and workarounds
- Performance considerations

**Session Context**:
- Previous work and progress
- Incomplete tasks and blockers
- Technical decisions made
- Learning insights captured

### 4. ACTIVATE - Project Readiness

**Context Integration**:
- Synthesize loaded memories into coherent project understanding
- Identify knowledge gaps requiring exploration
- Highlight recent changes or updates
- Prepare session-specific context

**Validation**:
- Verify project structure matches expected patterns
- Confirm dependencies are available
- Check for configuration issues
- Validate memory consistency

**Readiness Assessment**:
- Confirm all critical context loaded
- Identify any missing information
- Flag potential issues or blockers
- Report context loading status

### 5. VALIDATE - Session Preparation

**Context Quality Checks**:
- Ensure loaded context is current and accurate
- Verify no conflicting information
- Check for deprecated patterns or outdated decisions
- Validate cross-session compatibility

**Performance Metrics**:
- Context loading time (<500ms target)
- Memory retrieval efficiency
- Project activation speed
- Session readiness score

**Preparation Complete**:
- Provide context summary and key insights
- Highlight important patterns and conventions
- Flag any issues or concerns
- Ready for development workflow

## Loading Strategies

### Quick Load (Default)
```
1. Activate project with Serena MCP
2. List available memories
3. Load most recent session context
4. Provide summary of key insights
```

### Comprehensive Load
```
1. Activate project with full analysis
2. Load all relevant memories
3. Synthesize cross-session learnings
4. Provide detailed context report
5. Identify patterns and conventions
```

### Checkpoint Restoration
```
1. Identify specific checkpoint to restore
2. Load checkpoint data and dependencies
3. Restore session state and progress
4. Resume from checkpoint point
```

### Refresh Load
```
1. Clear cached context
2. Re-analyze project structure
3. Reload all memories fresh
4. Update stale information
```

## Context Categories

**Architecture Memories**:
- System design and component relationships
- Design decisions and trade-offs
- Scalability and performance patterns
- Integration patterns and contracts

**Pattern Memories**:
- Common code patterns and idioms
- Framework usage conventions
- Testing strategies and utilities
- Error handling approaches

**Session Memories**:
- Recent work and progress
- Incomplete tasks and next steps
- Blockers and issues encountered
- Insights and discoveries

**Configuration Memories**:
- Build and deployment setup
- Environment configuration
- Tool preferences and settings
- Workflow optimizations

## Serena MCP Operations

**Project Activation**:
```
activate_project(project_path)
→ Establishes project context
→ Enables memory operations
→ Prepares session environment
```

**Memory Discovery**:
```
list_memories()
→ Returns available memory files
→ Shows memory metadata
→ Enables selective loading
```

**Memory Loading**:
```
read_memory(memory_name)
→ Retrieves memory content
→ Integrates into session context
→ Updates project understanding
```

## Examples

### Basic Project Load
```
/load
→ Activates current directory project
→ Lists available memories
→ Loads recent session context
→ Reports key insights and patterns
→ Ready for development workflow
```

### Specific Project Load
```
/load /path/to/project --analyze
→ Activates specified project path
→ Performs comprehensive structure analysis
→ Loads all relevant memories
→ Provides detailed context report
→ Highlights important conventions
```

### Checkpoint Restoration
```
/load --checkpoint session_2024_01_15_14_30
→ Identifies checkpoint in memories
→ Restores session state from checkpoint
→ Loads associated context and progress
→ Resumes from saved point
→ Reports restoration status
```

### Fresh Context Load
```
/load --refresh
→ Clears cached context
→ Re-analyzes project structure
→ Reloads memories with fresh perspective
→ Updates stale information
→ Provides current project understanding
```

## Quality Standards

**Loading Efficiency**:
- Fast context loading (<500ms for typical projects)
- Efficient memory retrieval
- Minimal redundant operations
- Quick session readiness

**Context Accuracy**:
- Current and relevant information
- No conflicting insights
- Updated patterns and conventions
- Validated against current state

**Completeness**:
- All critical context loaded
- Important patterns identified
- Key decisions documented
- Session-ready state achieved

## Integration with Session Lifecycle

**Session Start Flow**:
```
1. /load → Activate project and load context
2. Work on tasks with full project understanding
3. Periodic checkpoints (automatic or manual)
4. /save → Persist discoveries and progress
5. Session end with context preserved
```

**Cross-Session Benefits**:
- Instant context restoration
- No re-learning project structure
- Preserved insights and decisions
- Continuous knowledge accumulation
- Efficient session transitions

---

**Execute project context loading now with Serena MCP integration and cross-session persistence.**
