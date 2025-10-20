---
name: cleanup
description: Systematically clean up code, remove dead code, and optimize project structure
agent: refactoring-expert
---

# Code Cleanup: $ARGUMENTS

You are performing systematic code cleanup to improve codebase hygiene and reduce technical debt.

## Project Context

**Git Status**:
!`git status --short`

**Project Structure**:
[@AGENTS.md](../AGENTS.md)

**Current Files**:
!`find . -type f \( -name "*.js" -o -name "*.ts" -o -name "*.py" -o -name "*.go" \) | head -30`

## Cleanup Request

**Target**: $ARGUMENTS

## Cleanup Protocol

Execute systematic cleanup with safety-first approach:

### 1. ANALYZE - Cleanup Opportunities

Assess cleanup scope and safety considerations:

- **Dead Code Detection**: Identify unused functions, classes, variables
- **Import Analysis**: Find unused imports and dependencies
- **File Structure**: Review directory organization and naming conventions
- **Dependency Audit**: Check for unused packages and outdated versions

**Detection Techniques**:
- Static analysis for unused exports
- Import/usage correlation analysis
- File timestamp and modification patterns
- Dependency tree analysis

### 2. PLAN - Cleanup Strategy

Choose cleanup approach based on scope:

**Safe Mode** (--safe):
- Conservative approach with automatic validation
- Only remove code with zero references
- Preserve all potentially used code
- Automatic backup before changes

**Aggressive Mode** (--aggressive):
- Thorough cleanup with intelligent heuristics
- Remove code with low usage probability
- Optimize structure more aggressively
- Requires careful review

**Interactive Mode** (--interactive):
- User-guided cleanup for complex decisions
- Present options with recommendations
- Allow selective application of changes

### 3. EXECUTE - Systematic Cleanup

Apply cleanup operations with validation:

#### Dead Code Removal
- **Unused Functions**: Remove functions with no references
- **Orphaned Classes**: Remove classes not imported anywhere
- **Dead Variables**: Remove unused variable declarations
- **Commented Code**: Remove old commented-out code blocks

#### Import Optimization
- **Unused Imports**: Remove imports not referenced in file
- **Duplicate Imports**: Consolidate multiple imports from same module
- **Import Organization**: Group and sort imports by convention
- **Barrel File Optimization**: Simplify re-export patterns

#### File Structure Cleanup
- **Empty Files**: Remove files with no meaningful content
- **Duplicate Files**: Identify and consolidate duplicate implementations
- **Directory Organization**: Suggest better file organization
- **Naming Consistency**: Align filenames with conventions

#### Dependency Optimization
- **Unused Packages**: Identify unused npm/pip/go packages
- **Outdated Dependencies**: Flag packages needing updates
- **Dependency Consolidation**: Find redundant dependency patterns

### 4. VALIDATE - Safety Verification

Ensure no functionality loss:

**Pre-Cleanup Checks**:
- Create backup of affected files
- Run existing tests to establish baseline
- Document all planned changes

**During Cleanup**:
- Incremental changes with validation between steps
- Preserve functionality throughout process
- Monitor for breaking changes

**Post-Cleanup Validation**:
- Run full test suite
- Verify no new errors introduced
- Check build still succeeds
- Review git diff for accuracy

### 5. REPORT - Cleanup Summary

Provide comprehensive cleanup report:

**Changes Made**:
- Files modified/deleted
- Lines of code removed
- Imports optimized
- Dependencies cleaned

**Impact Assessment**:
- Codebase size reduction
- Complexity improvement
- Maintainability gains
- Technical debt reduction

**Ongoing Recommendations**:
- Linting rules to prevent dead code accumulation
- Code review practices to maintain hygiene
- Automated cleanup tools to integrate
- Regular cleanup schedule

## Cleanup Types

Use --type flag to target specific cleanup:
- `--type code`: Dead code and unused functionality
- `--type imports`: Unused imports and dependency optimization
- `--type files`: File structure and organization
- `--type all`: Comprehensive cleanup across all types

## Safety Features

**Backup Creation**:
- Automatic git commit before cleanup (if in git repo)
- Stash creation for easy rollback
- Change log documentation

**Validation Gates**:
- Static analysis before removal
- Test execution after changes
- Build verification
- Manual review checkpoints (interactive mode)

**Rollback Capabilities**:
- Git reset to pre-cleanup state
- Stash pop to restore changes
- File-level undo operations

## Multi-Persona Coordination

Activate relevant expertise:
- **Architect**: Structure and organization decisions
- **Quality**: Code quality and maintainability assessment
- **Security**: Ensure no security-sensitive code removed

## MCP Integration

- **Sequential MCP**: Complex dependency analysis and cleanup planning
- **Context7 MCP**: Framework-specific cleanup patterns and best practices

---

**Execute systematic cleanup now with comprehensive safety validation and intelligent dead code removal.**
