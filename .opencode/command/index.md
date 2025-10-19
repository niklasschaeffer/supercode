---
name: index
description: Generate comprehensive project documentation and knowledge base with intelligent organization
agent: technical-writer
---

# Project Documentation: $ARGUMENTS

You are generating comprehensive project documentation with intelligent organization, cross-referencing, and knowledge base structure.

## Project Context

**Project Structure**:
@AGENTS.md

**README Overview**:
@README.md

**Existing Documentation**:
!`find . -type f -name "*.md" ! -path "*/node_modules/*" ! -path "*/.git/*" | head -20`

**Project Files**:
!`find . -type f \( -name "*.js" -o -name "*.ts" -o -name "*.py" -o -name "*.java" \) ! -path "*/node_modules/*" | head -30`

**Dependencies**:
@package.json

## Documentation Request

**Target**: $ARGUMENTS

## Documentation Protocol

Execute systematic documentation generation with comprehensive coverage:

### 1. ANALYZE - Project Understanding

**Structure Analysis**:
- Examine project directory organization
- Identify key components and modules
- Map relationships and dependencies
- Understand architectural patterns

**Content Discovery**:
- Review existing documentation for gaps
- Identify undocumented components
- Extract API surfaces and interfaces
- Discover configuration requirements

**Audience Assessment**:
- Determine documentation consumers (developers, users, ops)
- Identify technical depth requirements
- Assess documentation type needs
- Consider use case scenarios

### 2. ORGANIZE - Information Architecture

**Documentation Structure**:
```
Knowledge Base Organization:
1. Overview & Getting Started
   - Project purpose and goals
   - Quick start guide
   - Installation instructions

2. Architecture & Design
   - System architecture
   - Component relationships
   - Design decisions and rationale

3. API & Interface Documentation
   - Public APIs and endpoints
   - Function/method signatures
   - Data models and schemas

4. Development Guide
   - Setup and configuration
   - Development workflow
   - Testing strategies
   - Contribution guidelines

5. Deployment & Operations
   - Deployment procedures
   - Configuration management
   - Monitoring and maintenance
```

**Cross-Reference Strategy**:
- Create logical navigation paths
- Link related documentation sections
- Establish hierarchical structure
- Enable multiple discovery paths

### 3. GENERATE - Documentation Creation

**Documentation Types**:

**Project Structure Documentation**:
```markdown
# Project Structure

## Overview
High-level project organization and purpose

## Directory Structure
```
├── src/           # Source code
│   ├── api/      # API endpoints
│   ├── models/   # Data models
│   └── utils/    # Utility functions
├── tests/        # Test suite
└── docs/         # Documentation
```

## Key Components
- Component A: Purpose and responsibilities
- Component B: Purpose and responsibilities

## Dependencies
[Dependency map and relationships]
```

**API Documentation**:
```markdown
# API Reference

## Authentication
[Authentication mechanism and requirements]

## Endpoints

### GET /api/resource
**Description**: [What it does]
**Parameters**:
- param1 (string, required): Description
**Response**:
```json
{
  "data": "example"
}
```
**Example**:
```bash
curl -X GET https://api.example.com/resource
```
```

**Architecture Documentation**:
```markdown
# System Architecture

## Overview
[High-level system description]

## Components
[Component diagram and descriptions]

## Data Flow
[How data moves through the system]

## Design Decisions
[Key architectural choices and rationale]

## Scalability Considerations
[How the system scales]
```

**README Documentation**:
```markdown
# Project Name

Brief, compelling project description

## Features
- Feature 1: Description
- Feature 2: Description

## Installation
```bash
npm install project-name
```

## Quick Start
```javascript
// Minimal example
const example = require('project-name');
```

## Documentation
- [Full Documentation](./docs/index.md)
- [API Reference](./docs/api.md)
- [Contributing Guide](./docs/contributing.md)

## License
[License information]
```

### 4. VALIDATE - Quality Assurance

**Completeness Checks**:
- All public APIs documented
- Configuration options explained
- Examples provided and tested
- Error handling documented

**Accuracy Verification**:
- Technical information is correct
- Code examples execute successfully
- Links and references work
- Version information current

**Standards Compliance**:
- Consistent formatting and style
- Clear and concise language
- Appropriate technical depth
- Accessibility considerations

**Framework Pattern Integration**:
- Follow framework documentation conventions
- Use framework-specific terminology
- Include framework best practices
- Reference official documentation

### 5. MAINTAIN - Update Strategy

**Update Procedures**:
- Preserve manual additions and customizations
- Update generated sections only
- Maintain version control of documentation
- Track documentation changes with code changes

**Continuous Documentation**:
- Document as code evolves
- Keep examples current
- Update deprecated patterns
- Add new features promptly

## Documentation Formats

### Markdown Format (Default)
```markdown
Clear, readable text with:
- Code blocks with syntax highlighting
- Tables for structured data
- Links for cross-references
- Images for diagrams when helpful
```

### JSON Format
```json
{
  "name": "Component Name",
  "description": "Component description",
  "api": {
    "methods": [],
    "properties": []
  }
}
```

### YAML Format
```yaml
component:
  name: Component Name
  description: Component description
  api:
    methods: []
    properties: []
```

## Examples

### Project Structure Documentation
```
/index . --type structure --format md
→ Generates comprehensive directory structure documentation
→ Documents component purposes and relationships
→ Creates navigable architecture overview
→ Includes dependency mapping and configuration guide
```

### API Documentation Generation
```
/index src/api --type api --format json
→ Extracts all API endpoints and methods
→ Generates OpenAPI-compatible documentation
→ Includes request/response schemas and examples
→ Documents authentication and error handling
```

### Complete Knowledge Base
```
/index . --type docs
→ Generates multi-section knowledge base
→ Includes getting started, architecture, API reference
→ Creates development and deployment guides
→ Establishes cross-reference navigation
```

### README Enhancement
```
/index . --type readme
→ Analyzes project and generates comprehensive README
→ Includes features, installation, quick start
→ Adds badges, screenshots, and examples
→ Links to detailed documentation sections
```

## Quality Standards

**Documentation Quality**:
- Clear, concise language
- Accurate technical information
- Helpful examples and use cases
- Proper formatting and structure

**Organization**:
- Logical information hierarchy
- Effective cross-referencing
- Multiple access paths
- Clear navigation

**Maintainability**:
- Version-controlled with code
- Update procedures established
- Manual sections preserved
- Automated generation where appropriate

**Accessibility**:
- Readable by target audience
- Appropriate technical depth
- Searchable and navigable
- Multiple format options

---

**Generate comprehensive project documentation now with intelligent organization and cross-referencing.**
