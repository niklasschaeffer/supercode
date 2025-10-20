---
name: design
description: Design system architecture, APIs, and component interfaces with comprehensive specifications
agent: system-architect
---

# System Design: $ARGUMENTS

You are designing system architecture, APIs, or component interfaces with comprehensive specifications and industry best practices.

## Project Context

**Project Structure**:
[@AGENTS.md](../AGENTS.md)

**Existing Architecture**:
!`find . -type f \( -name "*.architecture.md" -o -name "design.md" -o -name "*.spec.md" \) 2>/dev/null | head -10`

**Dependencies**:
@package.json

## Design Request

**Target**: $ARGUMENTS

## Design Protocol

Execute systematic design process with comprehensive specification:

### 1. ANALYZE - Requirements and Context

**Requirements Analysis**:
- Examine functional and non-functional requirements
- Identify scalability and performance constraints
- Analyze existing system architecture and patterns
- Assess integration points and dependencies

**Context Understanding**:
- Review project structure and architectural patterns
- Understand technology stack and framework constraints
- Identify design constraints and limitations
- Consider maintainability and extensibility requirements

### 2. PLAN - Design Approach

**Design Strategy Selection**:
- Architecture Design: System structure, component relationships, scalability planning
- API Design: Interface specification, RESTful/GraphQL patterns, versioning strategy
- Component Design: Interface contracts, dependency management, implementation guidance
- Database Design: Schema design, entity relationships, normalization, performance

**Format Selection**:
- Diagrams: Visual architecture, component relationships, data flow
- Specifications: Detailed technical specs, interface contracts, data models
- Code: Interface definitions, type declarations, implementation templates

### 3. DESIGN - Comprehensive Specification

**Core Design Elements**:
- System structure and component organization
- Interface definitions and contracts
- Data models and entity relationships
- Integration patterns and dependencies

**Best Practices Integration**:
- SOLID principles for component design
- RESTful/GraphQL standards for APIs
- Database normalization and indexing strategies
- Security and performance considerations

**Documentation Requirements**:
- Clear architecture diagrams and visualizations
- Detailed interface specifications
- Implementation guidance and patterns
- Integration and deployment considerations

### 4. VALIDATE - Design Quality

**Quality Checks**:
- Verify requirements coverage and completeness
- Validate scalability and performance characteristics
- Ensure maintainability and extensibility
- Check consistency with existing architecture

**Standards Compliance**:
- Industry best practices adherence
- Framework and technology stack alignment
- Security and performance standards
- Documentation quality and clarity

### 5. DOCUMENT - Design Artifacts

**Deliverables**:
- Architecture diagrams (Mermaid, ASCII art, or descriptive format)
- Technical specifications with detailed descriptions
- Interface contracts and data models
- Implementation guidance and integration patterns

**Organization**:
- Clear structure with logical sections
- Cross-references to related components
- Examples and usage patterns
- Rationale for key design decisions

## Design Types

### Architecture Design
```
System Structure:
- Component organization and responsibilities
- Communication patterns and protocols
- Scalability and resilience strategies
- Deployment and infrastructure considerations

Deliverables:
- System architecture diagram
- Component specifications
- Integration patterns
- Scalability analysis
```

### API Design
```
Interface Specification:
- Endpoint definitions and HTTP methods
- Request/response schemas
- Authentication and authorization
- Error handling and status codes

Deliverables:
- OpenAPI/Swagger specification
- API documentation with examples
- Authentication flow diagrams
- Versioning strategy
```

### Component Design
```
Interface Contracts:
- Component responsibilities
- Public interfaces and methods
- Dependencies and interactions
- State management patterns

Deliverables:
- Component interface definitions
- Class diagrams or type definitions
- Usage examples
- Integration guidelines
```

### Database Design
```
Schema Design:
- Entity models and relationships
- Table structures and constraints
- Indexing strategy
- Query optimization considerations

Deliverables:
- ER diagrams
- Schema definitions (SQL/migration format)
- Normalization analysis
- Performance optimization notes
```

## Quality Standards

**Design Completeness**:
- All requirements addressed
- Edge cases considered
- Error handling specified
- Performance implications documented

**Maintainability**:
- Clear component boundaries
- Minimal coupling
- High cohesion
- Extensibility provisions

**Documentation Quality**:
- Clear and comprehensive
- Visual aids where appropriate
- Examples provided
- Rationale explained

## Examples

**Architecture Design**:
```
/design user-management-system --type architecture
→ Creates microservices architecture with authentication, user profile, and permissions services
→ Includes load balancing, caching, and database scaling strategies
→ Provides deployment architecture and monitoring approach
```

**API Design**:
```
/design payment-api --type api
→ Designs RESTful API with payment processing endpoints
→ Includes authentication, idempotency, and webhook patterns
→ Provides OpenAPI specification and integration examples
```

**Component Design**:
```
/design notification-service --type component
→ Designs notification service with pluggable providers (email, SMS, push)
→ Includes interface definitions, state management, and retry logic
→ Provides implementation guidance and testing strategies
```

**Database Design**:
```
/design e-commerce-db --type database
→ Designs normalized database schema for e-commerce platform
→ Includes products, orders, customers, and inventory models
→ Provides indexing strategy and query optimization recommendations
```

---

**Execute comprehensive system design now with industry best practices and detailed specifications.**
