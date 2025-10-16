---
name: spawn
description: Meta-system task orchestration with intelligent breakdown and delegation
agent: system-architect
---

# Task Orchestration: $ARGUMENTS

You are performing meta-system task orchestration with intelligent breakdown, delegation, and parallel coordination.

## Project Context

**Project Files**:
!`find . -type f \( -name "*.js" -o -name "*.ts" -o -name "*.py" \) | wc -l`

**Project Structure**:
@AGENTS.md

**Git Status**:
!`git status --short`

## Orchestration Request

**Task**: $ARGUMENTS

## Orchestration Protocol

Execute intelligent task decomposition with hierarchical coordination:

### 1. ANALYZE - Scope Assessment

Parse complex operation and assess orchestration requirements:

- **Complexity Analysis**: Assess task complexity across domains and technical areas
- **Domain Identification**: Identify affected domains (frontend, backend, database, security, devops)
- **Scope Estimation**: Determine file count, directory span, integration complexity
- **Dependency Mapping**: Understand task dependencies and coordination requirements
- **Resource Assessment**: Estimate effort, timeline, and resource needs

**Complexity Indicators**:
```
Simple: 1 domain, <5 files, clear dependencies
Medium: 2-3 domains, 5-20 files, moderate dependencies
Complex: 4+ domains, 20+ files, intricate dependencies
Enterprise: Multi-team, multi-system, extensive dependencies
```

### 2. DECOMPOSE - Hierarchical Breakdown

Break down operation into coordinated task hierarchy:

**Task Hierarchy**:
```
Epic (Meta-level operation)
  ↓
Story (Major feature components)
  ↓
Task (Implementable units)
  ↓
Subtask (Atomic actions)
```

**Decomposition Strategy**:

**Epic Level**:
- High-level objective and business value
- Cross-functional coordination requirements
- Timeline and resource allocation
- Success criteria and quality gates

**Story Level**:
- Feature components and deliverables
- Domain-specific implementation units
- Inter-story dependencies
- Story-level acceptance criteria

**Task Level**:
- Concrete implementable units
- Clear ownership and assignment
- Estimated effort and timeline
- Task-level validation criteria

**Subtask Level**:
- Atomic actions and operations
- Individual file or component changes
- Immediate execution steps
- Binary completion status

**Example Breakdown**:
```
Epic: "Implement user authentication system"
  ↓
  Story 1: "Database schema and models"
    ↓
    Task 1.1: "Design user schema"
      → Subtask: Define user table fields
      → Subtask: Create migration script
      → Subtask: Add indexes for email lookup
    Task 1.2: "Implement user model"
      → Subtask: Create User model class
      → Subtask: Add password hashing methods
      → Subtask: Implement validation logic

  Story 2: "Authentication API endpoints"
    ↓
    Task 2.1: "Implement login endpoint"
    Task 2.2: "Implement registration endpoint"
    Task 2.3: "Implement token refresh"

  Story 3: "Frontend authentication flow"
    ↓
    Task 3.1: "Login form component"
    Task 3.2: "Registration form component"
    Task 3.3: "Authentication state management"
```

### 3. ORCHESTRATE - Coordination Strategy

Execute tasks using optimal coordination strategy:

**Strategy Selection**:

**Sequential Strategy** (--strategy sequential):
- Tasks have dependencies and must execute in order
- Each task depends on previous task completion
- Risk mitigation through staged execution
- Quality gates between phases

**Use cases**:
- Database migrations → Schema updates → Data migrations
- Infrastructure setup → Service deployment → Configuration
- Breaking changes requiring careful sequencing

**Parallel Strategy** (--strategy parallel):
- Tasks are independent and can execute concurrently
- Maximum throughput and minimum timeline
- Resource optimization through parallelization
- Independent validation and quality checks

**Use cases**:
- Frontend + Backend development simultaneously
- Multiple independent features
- Test development alongside implementation
- Documentation concurrent with coding

**Adaptive Strategy** (--strategy adaptive, default):
- Dynamic strategy based on task characteristics
- Parallel execution where possible
- Sequential execution for dependencies
- Optimal balance of speed and safety

**Coordination Patterns**:
```
Sequential: Task A → Task B → Task C → Task D

Parallel: Task A ┐
         Task B ├→ Integration
         Task C ┘

Hybrid:   Phase 1 (Parallel: A, B, C) →
          Phase 2 (Sequential: D → E) →
          Phase 3 (Parallel: F, G)
```

### 4. MONITOR - Progress Tracking

Track progress across task hierarchies:

**Progress Tracking**:
- **TodoWrite**: Create hierarchical todo structure for tracking
- **Status Updates**: Real-time status for each task level
- **Completion Metrics**: Track completion percentage across hierarchy
- **Blocker Identification**: Identify and escalate blockers
- **Timeline Monitoring**: Track actual vs estimated progress

**Todo Hierarchy Structure**:
```
Epic Todo: "Implement authentication system"
  Story Todo: "Database schema" (in_progress)
    Task Todo: "Design user schema" (completed)
    Task Todo: "Implement user model" (in_progress)
  Story Todo: "Authentication API" (pending)
  Story Todo: "Frontend flow" (pending)
```

**Status Reporting**:
```
Overall Progress: 35% (14/40 tasks complete)
Active Stories: 2/5
Active Tasks: 3/14
Blockers: 1 (awaiting security review)
Estimated Completion: 3 days (based on velocity)
```

### 5. INTEGRATE - Result Aggregation

Aggregate results and provide orchestration summary:

**Integration Activities**:
- Combine outputs from parallel tasks
- Validate inter-task dependencies
- Perform integration testing
- Generate comprehensive summary

**Success Validation**:
- All tasks completed successfully
- Quality gates passed
- Integration tests passing
- Documentation updated

**Orchestration Summary**:
```markdown
# Orchestration Summary: [Task Name]

## Completion Status
- Epic: [Status]
- Stories: X/Y complete
- Tasks: X/Y complete
- Subtasks: X/Y complete

## Execution Metrics
- Total Duration: X hours
- Parallel Efficiency: Y% time saved
- Tasks Completed: X
- Blockers Resolved: Y

## Deliverables
- [List completed deliverables]

## Next Steps
- [Recommended follow-up actions]
```

## Orchestration Depth

**Normal** (default):
- Epic → Story → Task breakdown
- Standard coordination complexity
- Balanced detail and overview

**Deep** (--depth deep):
- Epic → Story → Task → Subtask breakdown
- Granular task decomposition
- Maximum coordination detail
- Enterprise-scale orchestration

## Delegation Strategies

**Auto-Delegation** (--delegate):
- Automatically identify parallelizable tasks
- Delegate to specialized agents/personas
- Coordinate multi-agent execution
- Aggregate results systematically

**Manual Coordination**:
- User-directed task execution
- Step-by-step guidance
- Interactive decision points
- Learning-focused orchestration

## Multi-Domain Coordination

**Cross-Domain Patterns**:

**Frontend + Backend**:
- API contract definition (sequential, first)
- Parallel implementation of frontend and backend
- Integration testing (sequential, after both complete)

**Database + Application**:
- Schema design (sequential, first)
- Migration execution (sequential, second)
- Application code (parallel with testing)

**Security + Implementation**:
- Threat modeling (sequential, first)
- Parallel secure implementation
- Security validation (sequential, after implementation)

**DevOps + Development**:
- Infrastructure setup (sequential, first)
- Parallel feature development
- Deployment coordination (sequential, final)

## Examples

**Simple Feature Orchestration**:
```
/spawn "add user profile page"
→ Single-domain orchestration
→ Frontend tasks: component, styling, routing
→ Parallel execution: 3 tasks simultaneously
→ Timeline: ~4 hours
```

**Complex System Implementation**:
```
/spawn "implement payment system" --strategy adaptive --depth deep
→ Multi-domain orchestration: Frontend, Backend, Database, Security
→ Epic breakdown: 4 stories, 15 tasks, 40 subtasks
→ Adaptive strategy: Sequential for critical path, parallel for independent work
→ Timeline: ~2 weeks
```

**Enterprise Migration**:
```
/spawn "migrate monolith to microservices" --strategy sequential --depth deep --delegate
→ Enterprise-scale orchestration
→ Multi-phase migration with quality gates
→ Sequential execution for safety
→ Auto-delegation for parallel work within phases
→ Timeline: ~3 months
```

**Infrastructure Setup**:
```
/spawn "establish CI/CD pipeline" --strategy parallel --delegate
→ DevOps orchestration across tools
→ Parallel setup: GitHub Actions, Docker, K8s, monitoring
→ Auto-delegation to specialized agents
→ Timeline: ~3 days
```

## Tool Usage

**TodoWrite**: Hierarchical task tracking and progress monitoring
**Read/Grep/Glob**: Project analysis and dependency mapping
**Edit/MultiEdit/Write**: Coordinated file operations across tasks
**Bash**: System operations and tool orchestration
**Task**: Sub-agent delegation for complex parallel execution

## Quality Standards

**Orchestration Quality**:
- Clear task hierarchy and dependencies
- Realistic effort estimates
- Appropriate coordination strategy
- Effective progress tracking

**Execution Quality**:
- All tasks completed successfully
- Quality gates passed
- Integration validated
- Documentation complete

**Performance Standards**:
- Parallel efficiency maximized
- Dependencies properly managed
- Blockers identified and resolved quickly
- Timeline accuracy within 20%

---

**Execute intelligent task orchestration now with hierarchical breakdown and optimal coordination strategy.**
