---
name: implement
description: Feature and code implementation with intelligent persona activation and MCP integration
---

# Feature Implementation: $ARGUMENTS

You are implementing a feature with intelligent multi-domain coordination and systematic development.

## Project Context

**Git Status**:
!`git status --short`

**Branch**:
!`git branch --show-current`

**Dependencies**:
@package.json

**Project Structure**:
[@AGENTS.md](../AGENTS.md)

## Implementation Request

**Feature**: $ARGUMENTS

## Implementation Protocol

Execute systematic feature development with multi-domain expertise:

### 1. ANALYZE - Requirements

Examine implementation requirements:

- **Feature Scope**: Understand what needs to be built
- **Technology Context**: Detect framework and language (React, Vue, Express, Django, etc.)
- **Domain Classification**: Identify domains (frontend, backend, database, security)
- **Dependency Analysis**: Check existing patterns and dependencies

**Framework Detection**:
```
# Detect frontend framework
!`grep -E '"react"|"vue"|"angular"|"svelte"' package.json | head -3`

# Detect backend framework
!`grep -E '"express"|"fastify"|"django"|"flask"' package.json | head -3`
```

### 2. PLAN - Implementation Strategy

Choose approach and activate personas:

**Persona Activation** (based on domain):

**Frontend Implementation**:
- Activate **Frontend Persona** for UI/UX development
- Use **Magic MCP** for component generation (if UI-heavy)
- Apply **Context7 MCP** for framework patterns

**Backend Implementation**:
- Activate **Backend Persona** for server-side logic
- Use **Context7 MCP** for API patterns and database integration
- Engage **Security Persona** for auth and validation

**Full-Stack Features**:
- Coordinate **Frontend + Backend + Architect** personas
- Use **Sequential MCP** for complex multi-step implementation
- Apply **Context7 MCP** for both frontend and backend patterns

**Security-Critical Features**:
- Mandatory **Security Persona** activation
- Apply security best practices from Context7
- Comprehensive validation and threat modeling

**Implementation Pattern**:
- Use **TodoWrite** for multi-file implementations (>3 files)
- Break down into logical steps
- Track progress systematically

### 3. GENERATE - Code Implementation

Create implementation code:

**Code Generation Principles**:
- **Framework-Specific**: Follow official patterns from Context7
- **Type-Safe**: Use TypeScript, PropTypes, or equivalent
- **Tested**: Include basic validation logic
- **Documented**: Add inline comments for complex logic
- **Accessible**: Follow WCAG guidelines for UI components

**Component Structure** (Frontend):
```typescript
// Follow framework conventions
// Props/state management
// Event handlers
// Lifecycle methods
// Return/render logic
```

**API Structure** (Backend):
```typescript
// Route definition
// Request validation
// Business logic
// Error handling
// Response formatting
```

**Database Integration**:
- Schema definitions
- Migration scripts
- Query optimization
- Data validation

### 4. VALIDATE - Quality Checks

Apply comprehensive validation:

**Security Validation** (if security-critical):
- Input sanitization
- Authentication/authorization checks
- SQL injection prevention
- XSS prevention
- CSRF protection

**Code Quality**:
- Follow existing project patterns
- Maintain consistent naming conventions
- Add proper error handling
- Include edge case handling

**Framework Compliance**:
- Use Context7 patterns
- Follow official best practices
- Apply framework-specific optimizations

**Testing Readiness**:
- Unit testable structure
- Integration test hooks
- E2E test compatibility (Playwright)

### 5. INTEGRATE - Documentation and Testing

Complete implementation:

**Documentation Updates**:
- Update relevant documentation
- Add usage examples
- Document API contracts
- Include configuration notes

**Testing Recommendations**:
- Suggest unit tests
- Propose integration tests
- Recommend E2E scenarios (if UI)
- Provide test examples

**Integration Checklist**:
- Files created/modified
- Dependencies added
- Configuration changes
- Migration scripts needed
- Environment variables required

## Implementation Types

**Component Implementation** (--type component):
- UI component generation
- Magic MCP for design system integration
- Frontend persona + accessibility focus

**API Implementation** (--type api):
- Backend service development
- RESTful or GraphQL patterns
- Security persona + validation focus

**Service Implementation** (--type service):
- Business logic layer
- Database integration
- Transaction management

**Full Feature** (--type feature):
- End-to-end implementation
- Frontend + Backend coordination
- Multi-persona collaboration

## Framework-Specific Implementation

**React**:
- Hooks-based components
- Context API for state
- React Router integration
- Official patterns from Context7

**Vue**:
- Composition API
- Pinia for state
- Vue Router integration
- Official patterns from Context7

**Express**:
- Middleware architecture
- Route organization
- Error handling patterns
- Official patterns from Context7

**Next.js**:
- App Router patterns
- Server Components
- API Routes
- Official patterns from Context7

## MCP Integration

- **Magic MCP**: UI component generation (--framework react|vue)
- **Context7 MCP**: Official framework patterns and best practices
- **Sequential MCP**: Complex multi-step implementation planning
- **Playwright MCP**: Testing validation (--with-tests flag)

## Implementation Flags

- `--type [component|api|service|feature]`: Implementation scope
- `--framework [react|vue|express]`: Framework specification
- `--safe`: Extra validation and safety checks
- `--with-tests`: Include test scaffolding and recommendations

## Multi-Persona Coordination

**Frontend + Backend**:
- Architect defines API contracts
- Frontend implements UI
- Backend implements services
- Security validates both layers

**Complex Features**:
- Architect designs system
- Sequential MCP breaks down steps
- Domain personas implement parts
- QA specialist validates integration

## Boundaries

**Will Implement**:
- Features with framework-specific best practices
- Code with security validation and proper patterns
- Implementations with testing and documentation integration

**Will Not**:
- Make architectural decisions without persona consultation
- Implement conflicting with security policies
- Override user-specified constraints or bypass quality gates

---

**Execute systematic feature implementation now with intelligent persona coordination and framework-compliant code generation.**
