---
name: estimate
description: Provide development estimates for tasks, features, or projects with intelligent analysis
agent: requirements-analyst
model: glm-4.6
---

# Development Estimation: $ARGUMENTS

You are providing systematic development estimates with confidence intervals, risk assessment, and detailed breakdown analysis.

## Project Context

**Project Structure**:
@AGENTS.md

**Codebase Complexity**:
!`find . -type f \( -name "*.js" -o -name "*.ts" -o -name "*.py" -o -name "*.java" \) ! -path "*/node_modules/*" | wc -l` files

**Dependencies**:
@package.json

**Recent Development Velocity**:
!`git log --oneline --since="1 month ago" | wc -l` commits in last month

## Estimation Request

**Target**: $ARGUMENTS

## Estimation Protocol

Execute multi-dimensional estimation analysis with systematic methodology:

### 1. ANALYZE - Scope and Complexity

**Scope Analysis**:
- Define clear boundaries and deliverables
- Identify all components and dependencies
- Assess integration points and interfaces
- Determine testing and documentation requirements

**Complexity Assessment**:
```
Factors:
- Technical complexity (algorithms, architecture)
- Integration complexity (external systems, APIs)
- Data complexity (models, migrations, transformations)
- UI/UX complexity (interactions, responsiveness)
- Testing complexity (coverage, edge cases)

Scoring: 1 (trivial) to 10 (extremely complex)
```

**Framework Pattern Analysis**:
- Identify applicable framework patterns
- Review similar implementations in codebase
- Consult framework documentation for guidance
- Apply framework-specific estimation factors

### 2. CALCULATE - Estimation Methodology

**Time-Based Estimation**:
```
Components:
1. Design & Planning: 15-20% of total
2. Implementation: 40-50% of total
3. Testing: 20-25% of total
4. Documentation: 10-15% of total
5. Buffer: 20-30% for unknowns

Calculation:
Base estimate × (1 + complexity_factor) × (1 + risk_factor) + buffer
```

**Effort-Based Estimation**:
```
Factors:
- Lines of code (rough estimate)
- Number of components/modules
- Integration points
- Test coverage requirements
- Team familiarity with technology

Unit: Person-hours or person-days
```

**Complexity-Based Estimation**:
```
Levels:
- Trivial (1-2 hours): Simple changes, config updates
- Simple (2-4 hours): Single function, basic feature
- Moderate (1-2 days): Multiple components, moderate integration
- Complex (3-5 days): Significant features, complex integration
- Very Complex (1-2 weeks): Major features, architecture changes
- Epic (2+ weeks): Large-scale projects, multiple subsystems
```

**Historical Benchmarks**:
- Review similar completed tasks
- Analyze actual vs estimated time
- Apply learning from past projects
- Adjust for team velocity and context

### 3. VALIDATE - Cross-Reference and Confidence

**Multi-Perspective Validation**:
- **Architecture**: Design complexity and integration assessment
- **Performance**: Optimization effort and performance testing
- **Quality**: Testing coverage and edge case handling
- **Project Management**: Timeline feasibility and resource allocation

**Confidence Intervals**:
```
High Confidence (90%+):
- Similar work done recently
- Clear requirements
- Familiar technology
- Low uncertainty

Medium Confidence (70-90%):
- Some similar experience
- Most requirements clear
- Mostly familiar technology
- Moderate uncertainty

Low Confidence (50-70%):
- Limited similar experience
- Requirements need clarification
- Unfamiliar technology
- High uncertainty
```

**Risk Assessment**:
```
Risk Factors:
- Technical unknowns (new libraries, patterns)
- Requirement ambiguity or changes
- Dependency on external systems
- Team availability and expertise
- Environmental or infrastructure issues

Impact: Multiply estimate by (1 + risk_factor × 0.1)
```

### 4. PRESENT - Detailed Breakdown

**Estimation Summary**:
```
Task: [Task Name]
Total Estimate: X-Y [units]
Confidence: [High/Medium/Low] (XX%)

Breakdown:
1. [Component A]: X [units] - [justification]
2. [Component B]: Y [units] - [justification]
3. [Testing]: Z [units] - [justification]
4. [Buffer]: W [units] - [uncertainty allocation]

Risk Factors:
- [Risk 1]: Impact +X%
- [Risk 2]: Impact +Y%

Assumptions:
- [Assumption 1]
- [Assumption 2]
```

**Range Estimates**:
- **Best Case**: Optimistic scenario (20th percentile)
- **Most Likely**: Expected scenario (50th percentile)
- **Worst Case**: Pessimistic scenario (80th percentile)

### 5. TRACK - Accuracy and Learning

**Estimation Tracking**:
- Document estimation methodology used
- Record assumptions and risk factors
- Track actual time spent when available
- Calculate accuracy metrics for learning

**Continuous Improvement**:
- Compare estimated vs actual time
- Identify estimation patterns (overestimate/underestimate)
- Adjust methodology based on learnings
- Build historical benchmark database

## Estimation Examples

### Feature Development
```
/estimate "user authentication system" --type time --unit days --breakdown

Analysis:
- Scope: JWT auth, login, registration, password reset
- Complexity: Moderate (6/10) - standard patterns but security critical
- Components: Database models, API endpoints, UI forms, email integration

Breakdown:
1. Database Design: 0.5 days - User model, sessions table
2. Backend API: 2 days - Auth endpoints, JWT middleware, validation
3. Frontend UI: 1.5 days - Login/register forms, protected routes
4. Email Integration: 0.5 days - Password reset flow
5. Testing: 1.5 days - Unit, integration, security tests
6. Documentation: 0.5 days - API docs, integration guide
7. Buffer: 1.5 days (20%) - Unexpected issues, refinement

Total: 8 days
Range: 6-10 days
Confidence: 80% (High) - familiar patterns, clear requirements
```

### Performance Optimization
```
/estimate "optimize API response times" --type effort --unit hours

Analysis:
- Scope: Profile API, identify bottlenecks, implement optimizations
- Complexity: Moderate to High (7/10) - requires analysis and testing
- Risk: Medium - performance improvements may have side effects

Breakdown:
1. Performance Profiling: 4 hours - Identify slow endpoints
2. Database Optimization: 6 hours - Query optimization, indexing
3. Caching Implementation: 8 hours - Redis integration, cache strategy
4. Code Optimization: 6 hours - Algorithm improvements, refactoring
5. Load Testing: 4 hours - Validate improvements under load
6. Monitoring Setup: 2 hours - Performance monitoring dashboard

Total: 30 hours
Range: 24-40 hours
Confidence: 70% (Medium) - some unknowns in bottleneck sources
```

### System Migration
```
/estimate "migrate monolith to microservices" --type complexity

Analysis:
- Scope: Identify service boundaries, extract services, deploy infrastructure
- Complexity: Very High (9/10) - architectural transformation
- Risk: High - significant architecture change, coordination required

Breakdown:
1. Architecture Design: 2 weeks - Service boundaries, API contracts
2. Database Separation: 3 weeks - Data migration, schema changes
3. Service Implementation: 6 weeks - Extract 3-4 core services
4. API Gateway Setup: 1 week - Routing, authentication
5. Infrastructure: 2 weeks - Kubernetes, CI/CD, monitoring
6. Testing: 3 weeks - Integration, performance, chaos testing
7. Gradual Migration: 4 weeks - Phased rollout, monitoring
8. Buffer: 4 weeks (20%) - Unexpected complexity, refinement

Total: 25 weeks (6 months)
Range: 20-30 weeks
Confidence: 60% (Medium-Low) - major undertaking, many unknowns
```

## Quality Standards

**Estimation Accuracy**:
- Evidence-based analysis
- Multiple validation perspectives
- Clear assumptions documented
- Confidence levels specified

**Risk Management**:
- Risk factors identified
- Impact quantified
- Mitigation strategies considered
- Buffer allocated appropriately

**Learning Culture**:
- Track estimation accuracy
- Analyze estimation errors
- Continuously improve methodology
- Build institutional knowledge

---

**Execute systematic development estimation now with comprehensive analysis and confidence intervals.**
