---
name: save
description: Session lifecycle management with Serena MCP integration for session context persistence
agent: logging
---

# Session Context Persistence: $ARGUMENTS

You are saving session context and discoveries using Serena MCP integration for cross-session persistence and memory management.

## Session Context

**Current Directory**:
!`pwd`

**Session Duration**:
!`echo "Session active since startup"`

**Recent Work**:
!`git log --oneline -5`

**Existing Memories**:
Use Serena MCP `list_memories` to see current memory state

## Save Request

**Target**: ${ARGUMENTS:-"session context and discoveries"}

## Session Persistence Protocol

Execute systematic session context saving with Serena MCP integration:

### 1. ANALYZE - Session Progress

**Work Assessment**:
- Review changes made during session (git status, git diff)
- Identify completed tasks and deliverables
- Assess progress toward session goals
- Determine what warrants persistence

**Discovery Identification**:
- Extract insights about project architecture
- Identify new patterns or conventions discovered
- Document technical decisions made
- Capture workarounds and solutions found

**Context Evaluation**:
- Assess what future sessions need to know
- Prioritize critical vs nice-to-have context
- Check for ephemeral vs persistent information
- Identify gaps in existing memories

### 2. PERSIST - Memory Operations

**Memory Creation**:
```
For each discovery or context to preserve:
1. Categorize memory type (architecture, pattern, session, config)
2. Choose meaningful memory name
3. Format content for clarity and reusability
4. Use Serena MCP write_memory to persist
```

**Memory Types to Save**:

**Architecture Memories**:
```
Memory Name: architecture_[component_name]
Content:
- Component purpose and responsibilities
- Relationships to other components
- Design decisions and rationale
- Scalability and performance notes
```

**Pattern Memories**:
```
Memory Name: pattern_[pattern_name]
Content:
- Pattern description and use cases
- Implementation examples
- When to use vs alternatives
- Common pitfalls and solutions
```

**Session Memories**:
```
Memory Name: session_[date_time]
Content:
- Work completed in session
- Key insights and discoveries
- Blockers encountered and resolutions
- Next steps and recommendations
```

**Configuration Memories**:
```
Memory Name: config_[aspect]
Content:
- Configuration purpose and settings
- Dependencies and requirements
- Setup instructions
- Troubleshooting guidance
```

### 3. CHECKPOINT - Progress Tracking

**Checkpoint Creation**:
```
Create checkpoint when:
- Session duration > 30 minutes
- Complex task near completion
- Before risky operations
- User explicitly requests
- Major milestone reached
```

**Checkpoint Content**:
- Current task state and progress
- Work completed so far
- Remaining work identified
- Context for resumption
- Recovery instructions if needed

**Checkpoint Naming**:
```
Format: checkpoint_[date]_[time]_[task_description]
Example: checkpoint_2024_01_15_14_30_auth_implementation
```

### 4. VALIDATE - Data Integrity

**Memory Validation**:
- Verify memory write successful
- Check content is well-formatted
- Ensure no duplicate or conflicting information
- Validate memory names are meaningful

**Context Consistency**:
- Cross-check with existing memories
- Identify and resolve conflicts
- Update related memories if needed
- Maintain coherent project understanding

**Completeness Check**:
- Ensure all critical discoveries captured
- Verify checkpoint includes necessary context
- Check for missing information
- Confirm session goals documented

### 5. PREPARE - Next Session Readiness

**Context Summary**:
- Provide overview of saved memories
- Highlight most important discoveries
- Flag any incomplete work or blockers
- Suggest priorities for next session

**Cleanup Operations**:
- Remove temporary or obsolete memories
- Consolidate related memories if appropriate
- Update memory timestamps
- Organize memory structure

**Continuity Planning**:
- Identify logical next steps
- Document any prerequisites for resumption
- Note any time-sensitive items
- Prepare session restoration guidance

## Save Strategies

### Auto-Save (Triggered)
```
Automatically save when:
- 30+ minutes elapsed
- Major task completion
- Before /load in new session
- Significant discovery made

Saves:
- Session progress
- Key insights
- Current state snapshot
```

### Manual Save (Explicit)
```
User requests save:
- Comprehensive session analysis
- All discoveries documented
- Checkpoint created
- Context prepared for next session
```

### Quick Save
```
Rapid context preservation:
- Only critical insights
- Minimal checkpoint data
- Fast operation (<200ms)
- Essential continuity only
```

### Comprehensive Save
```
Full session documentation:
- All discoveries captured
- Complete checkpoint with recovery data
- Cross-reference updates
- Detailed session summary
```

## Memory Organization

**Memory Naming Conventions**:
```
architecture_*: System design and component structure
pattern_*: Code patterns and conventions
session_*: Session work and progress
checkpoint_*: Recovery points
config_*: Configuration and setup
decision_*: Technical decisions and rationale
issue_*: Known issues and workarounds
```

**Memory Content Structure**:
```markdown
# [Memory Title]

## Context
[When and why this was created]

## Content
[The actual information to preserve]

## Related
[Links to related memories or components]

## Notes
[Additional context or caveats]
```

## Serena MCP Operations

**Memory Writing**:
```
write_memory(memory_name, content)
→ Persists memory to project
→ Available in future sessions
→ Cross-session continuity
```

**Memory Listing**:
```
list_memories()
→ Shows all saved memories
→ Helps avoid duplicates
→ Enables memory management
```

**Memory Reading** (for validation):
```
read_memory(memory_name)
→ Retrieves saved content
→ Validates successful save
→ Checks for conflicts
```

**Memory Deletion** (cleanup):
```
delete_memory(memory_name)
→ Removes obsolete memories
→ Keeps memory space clean
→ Maintains organization
```

## Examples

### Basic Session Save
```
/save
→ Analyzes session progress
→ Identifies key discoveries
→ Creates session memory
→ Auto-checkpoint if >30min
→ Reports saved context
```

### Comprehensive Checkpoint
```
/save --checkpoint --all
→ Complete session analysis
→ All discoveries documented
→ Full checkpoint with recovery data
→ Cross-session continuity prepared
→ Detailed summary provided
```

### Discovery Documentation
```
/save "Document authentication pattern"
→ Focused memory creation
→ Captures specific insight
→ Adds to pattern memories
→ Updates project understanding
```

### Session Summary
```
/save --summarize
→ Generates session summary
→ Documents progress and outcomes
→ Highlights key learnings
→ Prepares next session context
→ No checkpoint created
```

## Automatic Save Triggers

**Time-Based**:
- Every 30 minutes of active work
- Before session termination
- After extended idle period

**Event-Based**:
- Major task completion
- Before risky operations (rebase, major refactor)
- Significant discovery made
- User-initiated checkpoint

**Quality-Based**:
- When context worth preserving identified
- After problem resolution
- New pattern discovered
- Important decision documented

## Quality Standards

**Memory Quality**:
- Clear and concise content
- Well-organized structure
- Meaningful memory names
- No redundant information

**Persistence Efficiency**:
- Fast save operations (<200ms typically)
- Efficient memory storage
- No unnecessary duplicates
- Clean memory organization

**Cross-Session Utility**:
- Memories enable quick context restoration
- Insights readily applicable
- Context accelerates future work
- Continuity seamlessly maintained

## Integration with Session Lifecycle

**Complete Session Flow**:
```
1. /load → Start with full context
2. Work with project understanding
3. Discover patterns and insights
4. Periodic auto-saves (30min)
5. /save → Explicit session end
6. Next session: /load → Instant context
```

**Benefits**:
- No context lost between sessions
- Accumulated project knowledge
- Fast session startup
- Continuous learning capture
- Efficient knowledge transfer

---

**Execute session context persistence now with Serena MCP integration and cross-session continuity.**
