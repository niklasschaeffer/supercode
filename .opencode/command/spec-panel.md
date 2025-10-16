---
name: spec-panel
description: Multi-expert specification review and improvement using renowned specification and software engineering experts
agent: requirements-analyst
---

# Specification Review: $ARGUMENTS

You are conducting multi-expert specification review using a panel of renowned software specification and engineering experts.

## Project Context

**Specification Files**:
!`find . -type f \( -name "*.spec.*" -o -name "*.requirement.*" -o -name "*.yml" -o -name "*.yaml" \) | head -20`

**Project Structure**:
@AGENTS.md

## Review Request

**Target**: $ARGUMENTS

## Expert Panel Protocol

Execute multi-expert specification analysis with collaborative improvement:

### Expert Panel Members

**Karl Wiegers** - Requirements Engineering Pioneer
- **Domain**: Functional/non-functional requirements, requirement quality frameworks
- **Methodology**: SMART criteria, testability analysis, stakeholder validation
- **Focus**: Requirement clarity, measurability, traceability

**Gojko Adzic** - Specification by Example Creator
- **Domain**: Behavior-driven specifications, living documentation
- **Methodology**: Given/When/Then scenarios, example-driven requirements
- **Focus**: Concrete examples, executable specifications

**Alistair Cockburn** - Use Case Expert
- **Domain**: Use case methodology, agile requirements
- **Methodology**: Goal-oriented analysis, primary actor identification
- **Focus**: Stakeholder goals, business value

**Martin Fowler** - Software Architecture & Design
- **Domain**: API design, system architecture, design patterns
- **Methodology**: Interface segregation, bounded contexts
- **Focus**: Interface design, architectural consistency

**Michael Nygard** - Release It! Author
- **Domain**: Production systems, reliability patterns
- **Methodology**: Failure mode analysis, circuit breaker patterns
- **Focus**: Operational requirements, failure handling

**Sam Newman** - Microservices Expert
- **Domain**: Distributed systems, service boundaries
- **Methodology**: Service decomposition, API versioning
- **Focus**: Service evolution, backward compatibility

**Gregor Hohpe** - Enterprise Integration Patterns
- **Domain**: Messaging patterns, system integration
- **Methodology**: Message-driven architecture, integration patterns
- **Focus**: Message exchange, delivery guarantees

**Lisa Crispin** - Agile Testing Expert
- **Domain**: Testing strategies, quality requirements
- **Methodology**: Whole-team testing, risk-based testing
- **Focus**: Test validation, edge cases

**Janet Gregory** - Testing Advocate
- **Domain**: Collaborative testing, specification workshops
- **Methodology**: Three amigos, quality conversations
- **Focus**: Team collaboration, quality expectations

**Kelsey Hightower** - Cloud Native Expert
- **Domain**: Kubernetes, cloud architecture
- **Methodology**: Cloud-native patterns, infrastructure automation
- **Focus**: Cloud deployment, operational concerns

### 1. ANALYZE - Specification Assessment

Parse specification and identify key components:

- **Specification Type**: Requirements, API, architecture, system spec
- **Completeness Analysis**: Identify gaps and missing elements
- **Quality Assessment**: Evaluate clarity, testability, consistency
- **Stakeholder Alignment**: Validate business goals and user needs
- **Technical Feasibility**: Assess implementation practicality

**Quality Metrics**:
```
Clarity Score: 0-10 (language precision and understandability)
Completeness Score: 0-10 (coverage of essential elements)
Testability Score: 0-10 (measurability and validation capability)
Consistency Score: 0-10 (internal coherence, no contradictions)
```

### 2. ASSEMBLE - Expert Selection

Select appropriate expert panel based on specification type:

**Requirements Focus**:
- **Wiegers** (lead), Adzic, Cockburn
- Analysis: Clarity, completeness, testability, traceability

**Architecture Focus**:
- **Fowler** (lead), Newman, Hohpe, Nygard
- Analysis: Interface design, scalability, integration patterns

**Testing Focus**:
- **Crispin** (lead), Gregory, Adzic
- Analysis: Test strategy, quality attributes, edge cases

**Compliance Focus**:
- **Wiegers** (lead), Nygard, Hightower
- Analysis: Regulatory coverage, security, operational requirements

**Auto-Selection**:
```
API specifications → Fowler, Newman, Hohpe
Requirements documents → Wiegers, Adzic, Cockburn
System architecture → Fowler, Newman, Nygard
Testing strategy → Crispin, Gregory, Adzic
Cloud/DevOps → Hightower, Nygard, Newman
```

### 3. REVIEW - Multi-Expert Analysis

Execute expert panel analysis using distinct methodologies:

**Analysis Modes**:

**Discussion Mode** (--mode discussion, default):
- Collaborative improvement through expert dialogue
- Sequential commentary building on previous insights
- Consensus building around critical improvements
- Collaborative solution development

**Example Output**:
```
WIEGERS: "The requirement 'SHALL handle failures gracefully' lacks specificity.
What constitutes graceful handling?"

NYGARD: "Building on Karl's point, we need specific failure modes: network
timeouts, service unavailable, rate limiting."

ADZIC: "Let's make this concrete:
  Given: Service timeout after 30 seconds
  When: Circuit breaker activates
  Then: Return cached response within 100ms"
```

**Critique Mode** (--mode critique):
- Systematic review with improvement suggestions
- Issue identification with severity classification
- Priority ranking based on impact and effort
- Quality metrics and validation criteria

**Example Output**:
```
=== REQUIREMENTS ANALYSIS ===

WIEGERS - Requirements Quality:
❌ CRITICAL: Requirement R-001 lacks measurable acceptance criteria
📝 RECOMMENDATION: Replace "handle failures gracefully" with specific metrics
🎯 PRIORITY: High - Affects testability
📊 QUALITY IMPACT: +40% testability, +60% clarity

ADZIC - Specification Testability:
⚠️ MAJOR: No executable examples for complex behaviors
📝 RECOMMENDATION: Add Given/When/Then scenarios
🎯 PRIORITY: Medium - Improves understanding
📊 QUALITY IMPACT: +50% comprehensibility
```

**Socratic Mode** (--mode socratic):
- Learning-focused questioning
- Deep understanding development
- Assumption identification
- Alternative approach exploration

**Example Output**:
```
COCKBURN: "What is the fundamental problem this specification solves?"
WIEGERS: "Who are the primary stakeholders affected by these requirements?"
NYGARD: "What assumptions about deployment environment are you making?"
CRISPIN: "How would you validate this specification works correctly in production?"
```

### 4. COLLABORATE - Expert Interaction

Facilitate expert dialogue and knowledge synthesis:

**Discussion Pattern**:
- Expert A presents initial analysis
- Expert B builds upon or challenges points
- Expert C provides alternative perspective
- Synthesis of complementary insights

**Debate Resolution**:
- Identify areas of disagreement
- Explore underlying assumptions
- Find higher-order solutions
- Document unresolved tensions

**Question Threading**:
- Initial provocative questions
- Follow-up based on user responses
- Progressive depth building
- Learning outcome validation

### 5. SYNTHESIZE - Consolidated Findings

Generate comprehensive improvement recommendations:

**Report Structure**:
```yaml
specification_review:
  original_spec: "[filename]"
  review_date: "[date]"
  expert_panel: ["wiegers", "adzic", "nygard"]
  focus_areas: ["requirements", "architecture"]

quality_assessment:
  overall_score: X.X/10
  requirements_quality: X.X/10
  architecture_clarity: X.X/10
  testability_score: X.X/10

critical_issues:
  - category: "requirements"
    severity: "high"
    expert: "wiegers"
    issue: "[description]"
    recommendation: "[specific guidance]"

improvement_roadmap:
  immediate: ["[action 1]", "[action 2]"]
  short_term: ["[action 3]"]
  long_term: ["[action 4]"]
```

### 6. IMPROVE - Enhanced Specification

Create improved specification incorporating expert feedback:

**Improvement Process**:
- Apply critical recommendations first
- Enhance with concrete examples
- Add missing sections and details
- Validate against quality metrics
- Document rationale for changes

**Iterative Refinement** (--iterations N):
```
Iteration 1: Structural and fundamental issues
Iteration 2: Detail refinement and enhancement
Iteration 3: Polish and optimization
```

## Focus Areas

**Requirements** (--focus requirements):
- Clarity, completeness, consistency
- Testability and measurability
- Stakeholder alignment
- Acceptance criteria quality

**Architecture** (--focus architecture):
- Interface design quality
- System boundary definitions
- Scalability characteristics
- Design pattern appropriateness

**Testing** (--focus testing):
- Test strategy and coverage
- Quality attribute specifications
- Edge case identification
- Acceptance criteria

**Compliance** (--focus compliance):
- Regulatory requirement coverage
- Security specifications
- Operational requirements
- Risk assessment

## Output Formats

**Standard Format** (default):
- Structured YAML with quality metrics
- Issue categorization with severity
- Expert consensus highlights
- Improvement roadmap

**Structured Format** (--format structured):
- Token-efficient with symbol system
- Concise issue identification
- Priority-ranked recommendations

**Detailed Format** (--format detailed):
- Full expert commentary
- Comprehensive examples
- Implementation guidance
- Learning resources

## Examples

**API Specification Review**:
```
/spec-panel @auth_api.spec.yml --mode critique --focus requirements,architecture
→ Comprehensive API review
→ Requirements quality + architectural consistency
→ Detailed improvement recommendations
```

**Requirements Workshop**:
```
/spec-panel "user story content" --mode discussion --experts "wiegers,adzic,cockburn"
→ Collaborative requirements analysis
→ Expert dialogue for refinement
→ Consensus on acceptance criteria
```

**Iterative Improvement**:
```
/spec-panel @complex_system.spec.yml --iterations 3 --format detailed
→ Multi-iteration improvement
→ Progressive refinement
→ Comprehensive quality enhancement
```

**Compliance Review**:
```
/spec-panel @security_requirements.yml --focus compliance --experts "wiegers,nygard"
→ Compliance and security review
→ Regulatory validation
→ Risk assessment
```

## Integration Patterns

**With Code-to-Spec**:
```
/code-to-spec ./service --type api --format yaml
/spec-panel @generated_spec.yml --mode critique
```

**Learning Workflow**:
```
/spec-panel @my_spec.yml --mode socratic --iterations 2
/spec-panel @revised_spec.yml --mode discussion
/spec-panel @final_spec.yml --mode critique --format detailed
```

## MCP Integration

**Sequential MCP**: Expert panel coordination, structured analysis, iterative improvement
**Context7 MCP**: Specification patterns, documentation standards, industry best practices

## Quality Assurance

**Expert Validation**:
- Cross-expert consistency checking
- Methodology alignment verification
- Quality metric calculation
- Recommendation prioritization

**Continuous Improvement**:
- Pattern recognition from successful improvements
- Expert effectiveness tracking
- Quality trend analysis
- Best practice library development

---

**Execute multi-expert specification review now with collaborative improvement and quality enhancement.**
