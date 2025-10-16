---
name: workflow
description: Generate structured implementation workflows from PRDs and feature requirements
agent: requirements-analyst
---

# Workflow Generation: $ARGUMENTS

You are generating structured implementation workflows from PRD and feature specifications with multi-persona coordination.

## Project Context

**Project Files**:
!`find . -type f \( -name "*.md" -o -name "*.txt" \) -path "*/PRD/*" -o -path "*/docs/*" | head -20`

**Project Structure**:
@AGENTS.md

**Dependencies**:
@package.json

## Workflow Request

**Target**: $ARGUMENTS

## Workflow Protocol

Execute systematic workflow generation with multi-domain coordination:

### 1. ANALYZE - Requirements Understanding

Parse PRD and feature specifications:

- **Document Analysis**: Read and parse PRD/specification documents
- **Requirement Extraction**: Identify functional and non-functional requirements
- **Scope Assessment**: Determine implementation complexity and domains involved
- **Technology Context**: Identify frameworks, languages, and architectural patterns
- **Dependency Mapping**: Understand existing systems and integration points

**Framework Detection**:
```
!`grep -r "react\|vue\|angular\|express\|django" package.json 2>/dev/null | head -5`
```

### 2. PLAN - Workflow Structure

Generate comprehensive implementation workflow:

**Domain Classification**:
- **Frontend**: UI/UX components, user interactions, state management
- **Backend**: API services, business logic, data processing
- **Database**: Schema design, migrations, query optimization
- **Security**: Authentication, authorization, data protection
- **DevOps**: Deployment, monitoring, infrastructure

**Task Decomposition**:
- Break down features into implementable tasks
- Identify dependencies between tasks
- Estimate complexity and effort for each task
- Group related tasks into logical phases

**Workflow Strategies**:

**Systematic** (--strategy systematic):
- Sequential phases with clear milestones
- Comprehensive documentation and validation
- Enterprise-grade quality gates
- Best for: Large projects, regulated environments

**Agile** (--strategy agile):
- Iterative sprints with incremental delivery
- Flexible adaptation to changes
- Continuous integration and testing
- Best for: Fast-moving projects, startups

**Enterprise** (--strategy enterprise):
- Formal approval gates and compliance checks
- Multi-team coordination and resource planning
- Risk management and audit trails
- Best for: Enterprise systems, mission-critical applications

### 3. COORDINATE - Multi-Persona Activation

Activate domain-specific personas for comprehensive coverage:

**Persona Assignment** (based on domains):

**Architecture-Heavy**:
- Activate **System Architect** for design decisions
- Use **Sequential MCP** for complex architectural analysis
- Apply **Context7 MCP** for architectural patterns

**Frontend-Heavy**:
- Activate **Frontend Architect** for UI strategy
- Use **Magic MCP** for component generation workflows
- Apply **Context7 MCP** for framework-specific patterns

**Backend-Heavy**:
- Activate **Backend Architect** for service design
- Use **Context7 MCP** for API and database patterns
- Engage **Security Engineer** for secure implementation

**Full-Stack Projects**:
- Coordinate **Frontend + Backend + Architect** personas
- Use **Sequential MCP** for cross-domain workflows
- Apply **Serena MCP** for cross-session persistence

**Security-Critical**:
- Mandatory **Security Engineer** involvement
- Threat modeling and secure design principles
- Compliance validation workflows

### 4. GENERATE - Workflow Documentation

Create structured step-by-step implementation workflow:

**Workflow Structure**:
```markdown
# Implementation Workflow: [Feature Name]

## Overview
- **Objective**: Clear feature description
- **Domains**: Frontend, Backend, Database, etc.
- **Estimated Effort**: X days/weeks
- **Risk Level**: Low/Medium/High

## Phase 1: [Phase Name]
### Tasks
1. [Task 1] - Assigned to: [Persona/Role]
   - Dependencies: [List dependencies]
   - Acceptance Criteria: [Clear criteria]
   - Estimated Effort: X hours

2. [Task 2] - Assigned to: [Persona/Role]
   ...

### Deliverables
- [List phase deliverables]

### Quality Gates
- [Validation criteria for phase completion]

## Phase 2: [Phase Name]
...

## Testing Strategy
- Unit tests: [Scope and approach]
- Integration tests: [Scope and approach]
- E2E tests: [Scope and approach]
- Performance tests: [If applicable]

## Deployment Plan
- Environment setup
- Migration strategy
- Rollback plan
- Monitoring and alerting

## Dependencies
- External dependencies: [APIs, services, etc.]
- Internal dependencies: [Other features, systems]
- Team dependencies: [Other teams, stakeholders]

## Risk Assessment
- Technical risks: [List with mitigation]
- Resource risks: [List with mitigation]
- Schedule risks: [List with mitigation]
```

**Save Location**:
```
claudedocs/workflows/workflow_[feature_name]_[timestamp].md
```

### 5. VALIDATE - Quality Assurance

Apply comprehensive workflow validation:

**Completeness Check**:
- All requirements addressed in workflow
- Dependencies properly identified and sequenced
- Quality gates defined for each phase
- Testing strategy comprehensive
- Deployment plan detailed

**Feasibility Assessment**:
- Tasks are implementable and well-defined
- Effort estimates reasonable
- Dependencies manageable
- Resource requirements realistic
- Timeline achievable

**Quality Standards**:
- Clear acceptance criteria for all tasks
- Appropriate persona/role assignments
- Proper use of MCP tools and patterns
- Security considerations addressed
- Performance requirements defined

## Workflow Depth Options

**Shallow** (--depth shallow):
- High-level phases and major tasks only
- Quick overview for simple features
- ~10-15 tasks total

**Normal** (default):
- Detailed phase breakdown with task descriptions
- Comprehensive for most projects
- ~20-40 tasks total

**Deep** (--depth deep):
- Granular task decomposition
- Subtask-level detail
- Complete implementation guide
- ~50+ tasks for complex projects

## Multi-Persona Coordination

**Workflow Generation Patterns**:

**Simple Feature** (single domain):
- Primary persona generates workflow
- Lightweight coordination
- Fast turnaround

**Medium Feature** (2-3 domains):
- 2-3 personas coordinate
- Cross-domain validation
- Balanced detail level

**Complex Feature** (4+ domains):
- Full multi-persona coordination
- **Sequential MCP** for orchestration
- Comprehensive workflow with all quality gates
- **Serena MCP** for cross-session management

## MCP Tool Integration

**Sequential MCP**:
- Complex multi-step workflow analysis
- Dependency reasoning and validation
- Used for: Complex features, architectural decisions

**Context7 MCP**:
- Framework-specific workflow patterns
- Technology best practices
- Used for: Framework-heavy implementations

**Magic MCP**:
- UI/UX workflow generation
- Component-based development workflows
- Used for: Frontend-heavy features

**Playwright MCP**:
- Testing workflow integration
- E2E test planning
- Used for: Test-heavy workflows

**Morphllm MCP**:
- Large-scale workflow transformations
- Pattern-based workflow optimization
- Used for: Refactoring, migrations

**Serena MCP**:
- Cross-session workflow persistence
- Workflow memory and context
- Used for: Long-running projects, workflow evolution

## Parallel Execution

Use --parallel flag for:
- Independent task identification
- Concurrent execution planning
- Resource optimization
- Faster delivery timelines

**Parallel Workflow Patterns**:
- Frontend + Backend development in parallel
- Multiple independent features
- Test development alongside implementation
- Documentation concurrent with coding

## Examples

**Simple Feature Workflow**:
```
/workflow "add user profile page"
→ Single-domain (frontend) workflow
→ Frontend persona + Magic MCP
→ 15-20 tasks, ~2-3 days
```

**Complex Feature Workflow**:
```
/workflow ClaudeDocs/PRD/payment-system.md --depth deep
→ Multi-domain (frontend + backend + security) workflow
→ Multiple personas + Sequential MCP coordination
→ 60+ tasks, ~3-4 weeks
```

**Enterprise Workflow**:
```
/workflow enterprise-prd.md --strategy enterprise --parallel
→ Enterprise strategy with compliance gates
→ All personas + comprehensive MCP integration
→ 100+ tasks, multi-team coordination
```

**Agile Sprint Workflow**:
```
/workflow "sprint 5 features" --strategy agile --depth shallow
→ Agile strategy for sprint planning
→ High-level tasks for iteration
→ 25-30 tasks, 2-week sprint
```

## Quality Standards

**Workflow Clarity**:
- Clear task descriptions
- Unambiguous acceptance criteria
- Explicit dependencies
- Realistic estimates

**Completeness**:
- All requirements covered
- Testing strategy included
- Deployment plan detailed
- Risk assessment comprehensive

**Actionability**:
- Tasks are implementable
- Assignments are clear
- Resources are identified
- Timeline is realistic

---

**Execute systematic workflow generation now with multi-persona coordination and comprehensive implementation planning.**
