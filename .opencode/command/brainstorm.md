---
name: brainstorm
description: Interactive requirements discovery through Socratic dialogue and systematic exploration
agent: requirements-analyst
---

# Requirements Discovery: $ARGUMENTS

You are facilitating interactive requirements discovery through Socratic dialogue, multi-persona coordination, and systematic exploration.

## Discovery Context

**Topic/Idea**: $ARGUMENTS

**Project Structure**: [@AGENTS.md](../AGENTS.md)

## Discovery Protocol

Execute systematic requirements discovery with multi-persona coordination:

### 1. EXPLORE - Initial Understanding

**Idea Assessment**:
- Parse initial concept and stated goals
- Identify ambiguity and gaps in specification
- Determine complexity and scope indicators
- Assess need for multi-domain expertise

**Socratic Questioning**:
```
Core Questions:
- What problem does this solve for users?
- Who are the target users and their workflows?
- What's the expected user volume and scale?
- What are the success criteria?
- What constraints exist (technical, budget, timeline)?

Follow-up Probing:
- Can you elaborate on [aspect]?
- What happens if [edge case]?
- How does this differ from [alternative]?
- What's the priority: [A] or [B]?
```

**Context Gathering**:
- Existing systems and integrations
- Technology stack preferences
- Team capabilities and constraints
- Timeline and resource limitations

### 2. ANALYZE - Multi-Persona Coordination

**Persona Activation** (based on project needs):

**Architecture Perspective**:
```
Questions:
- What's the system structure and scalability needs?
- How do components interact and communicate?
- What are the data flow and state management requirements?
- What integration points exist with external systems?

Analysis:
- System design feasibility
- Scalability considerations
- Technology stack recommendations
- Architecture pattern suggestions
```

**Frontend Perspective** (if UI component):
```
Questions:
- What's the user experience and interaction flow?
- What devices and browsers need support?
- What accessibility requirements exist?
- What's the visual design and branding needs?

Analysis:
- UI/UX feasibility with Magic MCP patterns
- Framework selection (React, Vue, Angular)
- Design system integration
- Responsive design strategy
```

**Backend Perspective** (if server component):
```
Questions:
- What data models and persistence needs exist?
- What APIs and integration points are required?
- What authentication and authorization needs exist?
- What performance and scalability requirements?

Analysis:
- API design recommendations
- Database selection and schema design
- Authentication strategy
- Performance optimization approaches
```

**Security Perspective**:
```
Questions:
- What sensitive data is handled?
- What authentication mechanisms are needed?
- What compliance requirements exist (GDPR, HIPAA, etc.)?
- What are the threat models and attack vectors?

Analysis:
- Security requirements and controls
- Compliance validation
- Authentication/authorization strategy
- Data protection measures
```

**DevOps Perspective** (if deployment component):
```
Questions:
- What deployment environments are needed?
- What CI/CD requirements exist?
- What monitoring and observability needs?
- What infrastructure and scaling requirements?

Analysis:
- Deployment strategy recommendations
- CI/CD pipeline design
- Monitoring and alerting setup
- Infrastructure as code approach
```

### 3. VALIDATE - Feasibility Assessment

**Technical Feasibility**:
- Technology stack validation
- Integration complexity assessment
- Performance requirement verification
- Resource requirement estimation

**Use Context7 for framework validation**:
```
If specific frameworks mentioned:
- Validate framework capabilities
- Check compatibility and versions
- Review official patterns and best practices
- Assess learning curve and community support
```

**Use Magic for UI feasibility**:
```
If UI components involved:
- Search 21st.dev patterns for similar components
- Validate design system integration
- Assess accessibility compliance
- Review responsive design requirements
```

**Business Feasibility**:
- Resource availability assessment
- Timeline realism evaluation
- ROI and value proposition validation
- Risk identification and mitigation

### 4. SPECIFY - Concrete Requirements

**Functional Requirements**:
```
FR-1: [Requirement]
  - User Story: As a [role], I want [action] so that [benefit]
  - Acceptance Criteria:
    - Given [context], when [action], then [outcome]
    - Given [context], when [action], then [outcome]
  - Priority: High/Medium/Low
```

**Non-Functional Requirements**:
```
NFR-1: Performance
  - Response time: <XXXms for [operation]
  - Throughput: X requests/second
  - Scalability: Support X concurrent users

NFR-2: Security
  - Authentication: [method]
  - Authorization: [approach]
  - Data protection: [strategy]

NFR-3: Availability
  - Uptime: X.XX%
  - Recovery time: <X hours
  - Backup strategy: [approach]
```

**Technical Specifications**:
```
Architecture:
- [Component diagram or description]
- [Technology stack]
- [Integration points]

Data Models:
- [Entity relationships]
- [Schema design]
- [Data flow]

API Design:
- [Endpoint specifications]
- [Request/response formats]
- [Authentication approach]
```

### 5. HANDOFF - Implementation Brief

**Deliverable Creation**:
```markdown
# Implementation Brief: [Project Name]

## Executive Summary
[2-3 paragraph overview]

## Requirements
### Functional Requirements
[FR-1 through FR-N]

### Non-Functional Requirements
[NFR-1 through NFR-N]

## Technical Specifications
### Architecture
[System design]

### Technology Stack
[Chosen technologies with rationale]

### Data Models
[Entity design]

### API Design
[Endpoint specifications]

## Implementation Strategy
### Phase 1: [Name]
- Deliverables: [list]
- Timeline: [estimate]
- Dependencies: [list]

### Phase 2: [Name]
...

## Risk Assessment
- Risk 1: [description] - Mitigation: [strategy]
- Risk 2: [description] - Mitigation: [strategy]

## Success Criteria
[Measurable outcomes]

## Next Steps
[Immediate actions]
```

**Cross-Session Persistence** (use Serena if available):
```
write_memory("requirements_[topic]", brief_content)
write_memory("discovery_insights_[topic]", key_learnings)
```

**Save Location**:
```
claudedocs/briefs/[sanitized_topic]_brief_[timestamp].md
```

## Discovery Strategies

### Systematic Strategy
```
Characteristics:
- Comprehensive multi-persona analysis
- Thorough feasibility assessment
- Detailed specification generation
- Enterprise-grade documentation

Best for:
- Complex enterprise projects
- High-risk initiatives
- Regulatory compliance needs
- Large team coordination
```

### Agile Strategy
```
Characteristics:
- Rapid iteration and validation
- MVP-focused requirements
- Lightweight documentation
- Parallel exploration paths

Best for:
- Startup MVPs
- Rapid prototyping
- Experimental features
- Small team projects
```

### Enterprise Strategy
```
Characteristics:
- Comprehensive security analysis
- Compliance validation
- Scalability planning
- Risk management focus

Best for:
- Enterprise deployments
- Regulated industries
- Mission-critical systems
- Large-scale platforms
```

## MCP Tool Coordination

**Sequential** (systematic reasoning):
```
Use for:
- Complex requirement analysis
- Multi-step feasibility assessment
- Systematic validation workflows
```

**Context7** (framework validation):
```
Use for:
- Technology stack verification
- Framework capability assessment
- Pattern and best practice review
```

**Magic** (UI feasibility):
```
Use for:
- UI component feasibility
- Design system integration
- Accessibility validation
```

**Serena** (session persistence):
```
Use for:
- Cross-session discovery
- Iterative refinement tracking
- Project memory management
```

## Examples

### Product Discovery
```
/brainstorm "AI-powered project management tool" --strategy systematic --depth deep
→ Multi-persona: architect, analyzer, security, project-manager
→ Comprehensive feasibility across all domains
→ Detailed specification with architecture, security, deployment
→ Implementation brief ready for /workflow or /implement
```

### Feature Exploration
```
/brainstorm "real-time collaboration features" --strategy agile --parallel
→ Parallel exploration: frontend (UX), backend (sync), security (auth)
→ Rapid MVP validation with Magic and Context7
→ Lightweight spec focused on core functionality
```

### Enterprise Validation
```
/brainstorm "enterprise data analytics platform" --strategy enterprise
→ Security-first analysis with compliance validation
→ Scalability and performance planning
→ Risk assessment and mitigation strategies
→ Enterprise-grade documentation
```

## Quality Standards

**Discovery Completeness**:
- All ambiguities resolved
- Multi-persona perspectives gathered
- Feasibility validated
- Concrete specifications generated

**Dialogue Quality**:
- Socratic questioning effective
- User vision preserved
- Technical realism maintained
- Collaborative exploration

**Documentation Quality**:
- Clear and actionable
- Properly structured
- Implementation-ready
- Cross-session accessible

---

**Execute interactive requirements discovery now with Socratic dialogue and multi-persona coordination.**
