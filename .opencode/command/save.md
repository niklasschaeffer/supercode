---
name: save
description: Session lifecycle management with Serena and In-Memoria MCP integration for persistent context
agent: logging
---

# Session Context Persistence: $ARGUMENTS

You are saving session context using Serena MCP (session memories) and In-Memoria MCP (codebase intelligence) for complete cross-session persistence.

## Mandatory Tool Usage
```
Tool: 'prepare_for_new_conversation' from Serena MCP
```

## Session Context

**Current Directory**: !`pwd`
**Session Duration**: !`echo "Session active since startup"`
**Recent Work**: !`git log --oneline -5`
**Existing Memories**: Use Serena MCP `list_memories` to see current state

## Save Request

**Target**: ${ARGUMENTS:-"session context and codebase insights"}

## Session Persistence Protocol

Execute systematic session saving with dual MCP integration:

### 1. ANALYZE - Session Progress & Insights

**Work Assessment**:
- Review session changes (git status, git diff)
- Identify completed tasks and deliverables
- Assess progress toward goals
- Determine what warrants persistence

**Discovery Identification**:
- Extract architecture insights discovered
- Identify new patterns or conventions learned
- Document technical decisions made
- Capture workarounds and solutions found

**Codebase Learning**:
- Note pattern usage discovered during session
- Identify architectural understanding gained
- Recognize conventions and style preferences observed
- Document error handling approaches seen

### 2. PERSIST - Dual Memory Operations

**Serena MCP - Session Memories**:
```
write_memory(memory_name, content)
→ Session work logs and progress
→ Task context and decisions
→ Blockers and resolutions
→ Next steps and recommendations

Memory types:
- session_[date_time]: Work completed, insights, next steps
- checkpoint_[timestamp]: Recovery points with full state
- decision_[topic]: Technical decisions and rationale
- issue_[topic]: Known issues and workarounds
```

**In-Memoria MCP - Codebase Intelligence**:
```
contribute_insights({ insights, category })
→ Feed session discoveries to pattern learning
→ Architecture understanding contributions
→ Convention and style observations
→ Error handling pattern insights

Contribution categories:
- architecture: Component design and relationships
- patterns: Code patterns and idioms discovered
- conventions: Naming and style preferences
- error_handling: Error patterns observed
```

### 3. CHECKPOINT - State Preservation

**Checkpoint Creation**:
- Session duration >30min → auto-checkpoint
- Before risky operations → safety checkpoint
- Major milestone reached → progress checkpoint
- User explicit request → manual checkpoint

**Checkpoint Content** (Serena):
```
checkpoint_[date]_[time]_[task]
- Current task state and progress
- Work completed and remaining
- Context for resumption
- Recovery instructions
```

**Pattern Export** (In-Memoria, optional):
```
export_patterns({ path, filter })
→ Share learned patterns with team
→ Transfer intelligence across projects
→ Backup codebase understanding
```

### 4. VALIDATE - Data Integrity

**Serena Validation**:
- Verify memory write successful
- Check no duplicate or conflicting memories
- Ensure meaningful memory names
- Validate content well-formatted

**In-Memoria Validation**:
- Confirm insights contributed successfully
- Verify pattern learning updated
- Check contribution relevance
- Validate learning status

**Cross-MCP Consistency**:
- Ensure session context aligns with codebase intelligence
- Verify no conflicting information between MCPs
- Check complementary data integrity

### 5. PREPARE - Next Session Readiness

**Context Summary**:
- Overview of saved Serena memories
- Highlight key session discoveries
- Note contributed In-Memoria insights
- Flag incomplete work or blockers
- Suggest priorities for next session

**Continuity Setup**:
- Session memories ready for /load
- Codebase patterns updated for next session
- Checkpoint available for recovery
- Next steps clearly documented

## MCP Operations Reference

**Serena MCP** (Session Persistence):
```
write_memory(name, content) → Persist session memory
list_memories() → Show saved memories
read_memory(name) → Retrieve memory (validation)
delete_memory(name) → Remove obsolete memory
prepare_for_new_conversation → Setup for next session
```

**In-Memoria MCP** (Codebase Intelligence):
```
contribute_insights({ insights, category }) → Feed discoveries to learning
export_patterns({ path, filter }) → Export learned patterns (optional)
get_learning_status() → Check contribution status
```

## Save Strategies

**Auto-Save**: Triggered every 30+min, task completion, before /load, or significant discovery
**Manual Save**: Comprehensive analysis, all discoveries in both MCPs, full checkpoint
**Quick Save**: Critical insights only, essential data, fast (<200ms)

## Examples

### Basic Session Save
```
/save
→ Analyzes session progress and insights
→ Creates Serena session memory via `prepare_for_new_conversation`
→ Contributes insights to In-Memoria
→ Auto-checkpoint if >30min
→ Reports saved context summary
```

### Comprehensive Save with Checkpoint
```
/save --checkpoint --all
→ Complete session analysis
→ Serena: All discoveries documented
→ In-Memoria: All insights contributed
→ Full checkpoint with recovery data
→ Pattern export (optional)
→ Detailed summary provided
```

### Discovery Documentation
```
/save "authentication pattern discovered"
→ Serena: Focused session memory
→ In-Memoria: Pattern contribution
→ Updates project understanding
→ Quick operation completion
```

## Integration Benefits

**Dual MCP Persistence**: Serena (session logs/decisions) + In-Memoria (codebase patterns/architecture) = complete context preservation for instant /load restoration and immediate productivity.

---

**Execute session persistence now with dual MCP integration for complete cross-session continuity.**
