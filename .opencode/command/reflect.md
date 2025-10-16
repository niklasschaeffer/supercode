---
name: reflect
description: Task reflection and validation using Serena MCP analysis capabilities
agent: general-purpose
---

# Task Reflection and Validation: $ARGUMENTS

You are performing systematic task reflection and validation using Serena MCP's specialized analysis tools to ensure quality and adherence.

## Current Context

**Project Structure**:
@AGENTS.md

**Recent Work**:
!`git log --oneline -5`

**Current Status**:
!`git status --short`

## Reflection Request

**Focus**: ${ARGUMENTS:-"task adherence and completion assessment"}

## Reflection Protocol

Execute comprehensive reflection using Serena MCP specialized analysis tools:

### 1. ANALYZE - Current State Assessment

**Work Review**:
- Examine changes made and current progress
- Review completed tasks and deliverables
- Assess approach and methodology used
- Identify patterns in work completed

**Context Gathering**:
- Understand original goals and requirements
- Review session objectives and priorities
- Identify any changes in scope or direction
- Assess resource utilization and efficiency

**Reflection Tool Selection**:
```
Use appropriate Serena MCP reflection tool:
- think_about_task_adherence: Validate approach alignment
- think_about_collected_information: Assess information completeness
- think_about_whether_you_are_done: Evaluate completion readiness
```

### 2. VALIDATE - Task Adherence

**Use Serena MCP `think_about_task_adherence`**:

This specialized tool validates current work against project goals:

**Adherence Checks**:
- Are we solving the right problem?
- Does the approach align with project goals?
- Have we deviated from the intended path?
- Are there better approaches available?
- Is the scope appropriate?

**Deviation Identification**:
- Unnecessary feature additions (scope creep)
- Over-engineering or premature optimization
- Misalignment with original requirements
- Inefficient or suboptimal approaches
- Missing critical requirements

**Course Correction**:
- Realign approach with project goals
- Simplify over-complicated solutions
- Refocus on core requirements
- Adjust methodology if needed
- Prioritize essential work

### 3. REFLECT - Information Completeness

**Use Serena MCP `think_about_collected_information`**:

This tool analyzes information gathering and understanding:

**Completeness Assessment**:
- Have we gathered sufficient information?
- Do we understand the problem domain?
- Are there knowledge gaps remaining?
- Is our understanding accurate and complete?
- Do we need additional research or exploration?

**Quality Evaluation**:
- Is information relevant and useful?
- Are we focusing on important details?
- Have we ignored critical aspects?
- Is there redundant or unnecessary information?
- Are our sources reliable and current?

**Gap Identification**:
- What information is missing?
- What assumptions need validation?
- What areas need deeper investigation?
- Where is uncertainty or ambiguity?
- What questions remain unanswered?

### 4. EVALUATE - Completion Readiness

**Use Serena MCP `think_about_whether_you_are_done`**:

This tool determines if work is truly complete:

**Completion Criteria**:
- Are all requirements met?
- Is the implementation complete and functional?
- Have all edge cases been addressed?
- Is testing adequate and passing?
- Is documentation complete and accurate?

**Quality Standards**:
- Does work meet quality expectations?
- Is code clean, maintainable, and well-structured?
- Are there any known issues or technical debt?
- Is performance acceptable?
- Are security concerns addressed?

**Remaining Work**:
- What tasks are incomplete?
- What issues or blockers exist?
- What refinements are needed?
- What testing or validation remains?
- What documentation or cleanup is required?

**Decision Making**:
- Is work ready for completion?
- Should we continue with refinements?
- Are there critical blockers?
- Is additional time warranted?
- What's the path to completion?

### 5. DOCUMENT - Insights and Learning

**Reflection Insights**:
- Document key insights from reflection
- Capture lessons learned
- Identify process improvements
- Note patterns and anti-patterns
- Record decisions and rationale

**Memory Persistence**:
```
Use Serena MCP write_memory to save:
- Reflection insights
- Quality assessments
- Completion validation
- Lessons learned
- Process improvements
```

**Actionable Recommendations**:
- Specific next steps
- Course corrections needed
- Quality improvements required
- Completeness gaps to address
- Validation actions to take

## Reflection Types

### Task Adherence Reflection
```
Focus: Validate approach alignment with goals
Tool: think_about_task_adherence
Output:
- Adherence assessment
- Deviation identification
- Course correction recommendations
- Realignment guidance
```

### Information Completeness Reflection
```
Focus: Assess understanding and information gathering
Tool: think_about_collected_information
Output:
- Completeness assessment
- Gap identification
- Quality evaluation
- Research recommendations
```

### Completion Assessment Reflection
```
Focus: Determine if work is complete
Tool: think_about_whether_you_are_done
Output:
- Completion criteria evaluation
- Remaining work identification
- Quality assessment
- Readiness determination
```

### Comprehensive Reflection
```
Focus: Full task and session analysis
Tools: All three reflection tools
Output:
- Complete reflection report
- Multi-dimensional validation
- Actionable recommendations
- Session insights
```

## Serena MCP Reflection Tools

**think_about_task_adherence**:
```
Purpose: Validate approach against project goals
When: Before major decisions, mid-task, before completion
Output: Adherence validation, deviation identification, course correction
```

**think_about_collected_information**:
```
Purpose: Assess information gathering completeness
When: After research, before implementation, during analysis
Output: Completeness assessment, gap identification, quality evaluation
```

**think_about_whether_you_are_done**:
```
Purpose: Evaluate completion readiness
When: Near task completion, before marking complete, quality gates
Output: Completion criteria evaluation, remaining work, readiness determination
```

## Examples

### Pre-Implementation Reflection
```
/reflect --validate
→ Use think_about_collected_information
→ Assess if we understand the problem sufficiently
→ Identify knowledge gaps before starting
→ Recommend additional research if needed
→ Validate approach before implementation
```

### Mid-Task Course Correction
```
/reflect "Are we on the right track?"
→ Use think_about_task_adherence
→ Validate current approach alignment
→ Identify any deviations from goals
→ Recommend course corrections
→ Realign with project objectives
```

### Completion Validation
```
/reflect --type completion
→ Use think_about_whether_you_are_done
→ Evaluate against completion criteria
→ Identify remaining work
→ Assess quality standards
→ Determine if truly complete
```

### Comprehensive Session Reflection
```
/reflect --comprehensive
→ Use all three reflection tools
→ Complete task and session analysis
→ Multi-dimensional validation
→ Actionable recommendations
→ Session insights and learning
```

## Integration with Development Workflow

**Task Start**:
```
1. Receive task requirements
2. /reflect --validate information
3. Ensure understanding before starting
4. Proceed with confidence
```

**Mid-Task Check**:
```
1. Significant progress made
2. /reflect "adherence check"
3. Validate approach alignment
4. Course correct if needed
```

**Near Completion**:
```
1. Work appears complete
2. /reflect --type completion
3. Validate against criteria
4. Address remaining work
5. Complete when validated
```

**Session End**:
```
1. /reflect --comprehensive
2. Capture session insights
3. Document learnings
4. Save to memories
5. Prepare for next session
```

## Quality Standards

**Reflection Depth**:
- Thorough analysis using appropriate tools
- Evidence-based assessments
- Actionable insights and recommendations
- Clear next steps identified

**Validation Rigor**:
- Objective evaluation against criteria
- Honest assessment of gaps and issues
- No premature completion
- Quality over speed

**Learning Capture**:
- Insights documented and preserved
- Lessons learned recorded
- Process improvements identified
- Knowledge shared via memories

## Benefits of Systematic Reflection

**Quality Assurance**:
- Catch issues early
- Validate approach continuously
- Ensure completeness
- Maintain standards

**Efficiency**:
- Avoid wasted effort on wrong approach
- Course correct early
- Focus on essential work
- Prevent scope creep

**Learning**:
- Capture insights and patterns
- Identify process improvements
- Build project knowledge
- Share learnings across sessions

**Confidence**:
- Validated approach and direction
- Complete understanding
- Quality assurance
- Readiness for completion

---

**Execute systematic task reflection now using Serena MCP specialized analysis tools for comprehensive validation.**
