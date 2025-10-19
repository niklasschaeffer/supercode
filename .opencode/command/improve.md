---
name: improve
description: Apply systematic improvements to code quality, performance, and maintainability
agent: refactoring-expert
---

# Code Improvement: $ARGUMENTS

You are applying systematic improvements to enhance code quality, performance, and maintainability.

## Project Context

**Git Status**:
!`git status --short`

**Project Files**:
!`find . -type f \( -name "*.js" -o -name "*.ts" -o -name "*.py" -o -name "*.go" \) | head -25`

**Project Structure**:
@AGENTS.md

**Dependencies**:
@package.json

## Improvement Request

**Target**: $ARGUMENTS

## Improvement Protocol

Execute systematic improvements with domain-specific expertise:

### 1. ANALYZE - Improvement Opportunities

Examine code for enhancement areas:

- **Quality Issues**: Code smells, duplication, complexity, maintainability
- **Performance Bottlenecks**: Inefficient algorithms, excessive computations, memory issues
- **Security Weaknesses**: Vulnerabilities, insecure patterns, data exposure
- **Style Inconsistencies**: Formatting, naming, organization issues

**Analysis Techniques**:
- Static code analysis
- Complexity metrics (cyclomatic, cognitive)
- Performance profiling indicators
- Security pattern matching
- Framework best practice validation

### 2. PLAN - Improvement Strategy

Choose improvement approach and activate personas:

**Improvement Types**:

**Quality Improvement** (--type quality):
- Activate **Architect + Quality** personas
- Focus on structure, readability, maintainability
- Reduce technical debt and code smells
- Apply DRY, SOLID principles

**Performance Optimization** (--type performance):
- Activate **Performance** persona
- Identify algorithmic inefficiencies
- Optimize data structures and loops
- Reduce unnecessary computations

**Maintainability Enhancement** (--type maintainability):
- Activate **Architect** persona
- Improve structure and organization
- Enhance documentation
- Reduce complexity

**Security Hardening** (--type security):
- Activate **Security** persona
- Apply security best practices
- Fix vulnerabilities
- Implement secure patterns

**Safe Mode** (--safe):
- Conservative improvements only
- Preserve all functionality
- Automatic validation after changes
- Easy rollback capability

**Interactive Mode** (--interactive):
- User approval for each improvement
- Explain rationale and trade-offs
- Allow selective application

### 3. EXECUTE - Systematic Improvements

Apply improvements with validation:

#### Quality Improvements

**Code Structure**:
- Extract complex functions into smaller units
- Eliminate code duplication
- Improve naming for clarity
- Organize imports and modules

**Complexity Reduction**:
- Simplify nested conditionals
- Reduce function parameters
- Break down large functions
- Flatten callback chains

**Pattern Application**:
- Apply design patterns where appropriate
- Use framework idioms correctly
- Follow project conventions

#### Performance Optimizations

**Algorithmic**:
- Replace O(n²) with O(n) or O(n log n) algorithms
- Eliminate unnecessary loops
- Use appropriate data structures
- Cache repeated computations

**Resource Usage**:
- Reduce memory allocations
- Optimize string concatenation
- Batch database queries
- Implement lazy loading

**Framework-Specific** (use Context7):
- React: useMemo, useCallback, React.memo
- Vue: computed, keep-alive
- Database: query optimization, indexing

#### Maintainability Enhancements

**Documentation**:
- Add missing JSDoc/docstrings
- Document complex logic
- Update outdated comments
- Add usage examples

**Structure**:
- Improve file organization
- Modularize monolithic files
- Create logical groupings
- Separate concerns

**Type Safety**:
- Add TypeScript types
- Fix type errors
- Use strict mode
- Add runtime validation

#### Security Hardening

**Input Validation**:
- Sanitize user inputs
- Validate data types
- Check boundaries
- Escape outputs

**Authentication/Authorization**:
- Implement proper access control
- Secure session management
- Use secure password hashing
- Apply principle of least privilege

**Data Protection**:
- Encrypt sensitive data
- Secure API keys
- Prevent data leakage
- Implement HTTPS

### 4. VALIDATE - Quality Preservation

Ensure improvements don't break functionality:

**Pre-Improvement**:
- Create git backup (commit or stash)
- Run existing tests
- Document baseline behavior

**During Improvement**:
- Incremental changes
- Validate after each step
- Monitor for regressions

**Post-Improvement**:
- Run full test suite
- Verify behavior unchanged
- Check performance metrics
- Review git diff

**Validation Gates**:
- Tests must pass
- Build must succeed
- No new errors introduced
- Performance not degraded

### 5. DOCUMENT - Improvement Summary

Provide comprehensive improvement report:

**Changes Made**:
- Files modified
- Improvements applied
- Lines changed
- Complexity reduction

**Impact Assessment**:
- Quality improvements
- Performance gains
- Maintainability enhancements
- Security hardening

**Recommendations**:
- Further improvement opportunities
- Preventive measures
- Tool integrations
- Code review practices

## Improvement Focus

Use --type flag:
- `--type quality`: Code structure and maintainability
- `--type performance`: Speed and resource optimization
- `--type maintainability`: Documentation and organization
- `--type security`: Vulnerability fixes and hardening

## Safety Options

- `--safe`: Conservative improvements with automatic validation
- `--interactive`: User approval for each change
- `--preview`: Show planned improvements before applying

## Multi-Persona Coordination

Activate based on improvement type:
- **Architect**: Structural and design improvements
- **Performance**: Speed and optimization
- **Quality**: Maintainability and technical debt
- **Security**: Vulnerability remediation

## MCP Integration

- **Sequential MCP**: Complex multi-step improvement analysis
- **Context7 MCP**: Framework-specific optimization patterns

## Rollback Capability

**Undo Improvements**:
- Git reset to pre-improvement state
- Stash pop to restore original
- File-level rollback if needed

---

**Execute systematic improvements now with comprehensive validation and domain-specific expertise.**
