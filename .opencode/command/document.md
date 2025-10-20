---
name: document
description: Generate focused documentation for components, functions, APIs, and features
agent: technical-writer
---

# Documentation Generation: $ARGUMENTS

You are generating focused, high-quality documentation for code components, APIs, or features with appropriate style and format.

## Project Context

**Project Structure**:
[@AGENTS.md](../AGENTS.md)

**README Overview**:
[@README.md](../../README.md)

**Existing Documentation**:
!`find . -type f -name "*.md" ! -path "*/node_modules/*" ! -path "*/.git/*" | head -15`

**Target Content** (if file specified):
@$ARGUMENTS

## Documentation Request

**Target**: $ARGUMENTS

## Documentation Protocol

Execute systematic documentation generation with audience-appropriate content:

### 1. ANALYZE - Target Understanding

**Code Analysis**:
- Examine component structure and interfaces
- Identify public APIs and exported functions
- Understand data flows and dependencies
- Extract key functionality and purpose

**Context Assessment**:
- Determine target audience (developers, users, API consumers)
- Identify documentation type requirements (inline, external, API reference, guide)
- Review existing documentation patterns and style
- Assess integration with project documentation ecosystem

### 2. IDENTIFY - Documentation Requirements

**Type Selection**:
- **Inline**: JSDoc/TSDoc comments, docstrings, function/class documentation
- **External**: README files, component guides, architecture documentation
- **API**: Reference documentation with endpoints, parameters, responses
- **Guide**: Tutorials, how-to guides, integration instructions

**Style Determination**:
- **Brief**: Concise descriptions with essential information
- **Detailed**: Comprehensive documentation with examples and edge cases
- Audience-appropriate technical depth
- Consistent with project conventions

### 3. GENERATE - Documentation Content

**Core Content Elements**:
- Purpose and overview
- Interface specifications (parameters, return values, types)
- Usage examples with code snippets
- Error handling and edge cases
- Dependencies and requirements

**Language-Specific Patterns**:
- JavaScript/TypeScript: JSDoc with type annotations
- Python: Google/NumPy style docstrings
- Java: JavaDoc with proper tags
- Go: Package and function comments

**Quality Requirements**:
- Clear and concise language
- Accurate technical information
- Practical examples
- Proper formatting and structure

### 4. FORMAT - Structure and Organization

**Inline Documentation**:
```javascript
/**
 * Brief description of function purpose
 *
 * @param {Type} paramName - Parameter description
 * @returns {Type} Return value description
 * @throws {ErrorType} Error condition description
 * @example
 * // Usage example
 * functionName(arg);
 */
```

**API Documentation**:
```markdown
## Endpoint Name

**URL**: `/api/endpoint`
**Method**: `POST`

**Parameters**:
| Name | Type | Required | Description |
|------|------|----------|-------------|

**Response**:
```json
{
  "example": "response"
}
```

**User Guide**:
```markdown
# Feature Name

## Overview
Brief description of feature

## Installation
Setup instructions

## Usage
Step-by-step guide with examples

## Configuration
Available options and settings

## Troubleshooting
Common issues and solutions
```

### 5. INTEGRATE - Ecosystem Compatibility

**Cross-Referencing**:
- Link to related documentation
- Reference dependent components
- Connect to API documentation
- Include navigation aids

**Consistency Checks**:
- Follow project documentation standards
- Use consistent terminology
- Match existing formatting patterns
- Maintain style guide compliance

## Documentation Types

### Inline Code Documentation
```
Target: Function, class, or method
Content:
- Purpose and behavior description
- Parameter types and descriptions
- Return value specification
- Exception/error documentation
- Usage examples

Output: JSDoc/docstring comments added to code
```

### API Reference Documentation
```
Target: API endpoints or SDK methods
Content:
- Endpoint specifications
- Request/response schemas
- Authentication requirements
- Rate limits and constraints
- Error codes and handling

Output: Comprehensive API reference (Markdown/OpenAPI)
```

### User Guide Documentation
```
Target: Feature or module
Content:
- Feature overview and purpose
- Installation/setup instructions
- Usage examples and workflows
- Configuration options
- Troubleshooting guidance

Output: Tutorial-style guide with examples
```

### Component Documentation
```
Target: UI component or module
Content:
- Component purpose and behavior
- Props/parameters specification
- Usage examples with code
- Styling and customization
- Integration patterns

Output: Component library documentation
```

## Quality Standards

**Accuracy**:
- Technically correct information
- Up-to-date with current implementation
- Verified examples that work
- Accurate type information

**Clarity**:
- Clear, concise language
- Appropriate technical depth
- Well-organized structure
- Helpful examples

**Completeness**:
- All public APIs documented
- Edge cases covered
- Error conditions explained
- Integration guidance provided

## Examples

**Inline Function Documentation**:
```
/document src/auth/validateToken.js --type inline
→ Adds JSDoc comments with parameter types and return values
→ Includes usage examples and error handling documentation
→ Follows project JSDoc style conventions
```

**API Reference**:
```
/document src/api --type api --style detailed
→ Generates comprehensive API documentation for all endpoints
→ Includes request/response schemas, authentication, error codes
→ Provides integration examples and best practices
```

**User Guide**:
```
/document payment-integration --type guide --style brief
→ Creates step-by-step integration guide
→ Includes setup, configuration, and usage examples
→ Provides troubleshooting section with common issues
```

**Component Library Docs**:
```
/document src/components --type external
→ Generates documentation for all components
→ Includes props, usage examples, and customization options
→ Provides component preview and integration patterns
```

---

**Generate focused, high-quality documentation now with appropriate style and comprehensive content.**
