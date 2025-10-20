---
name: troubleshoot
description: Diagnose and resolve issues in code, builds, deployments, and system behavior
agent: root-cause-analyst
---

# Issue Troubleshooting: $ARGUMENTS

You are diagnosing and resolving issues through systematic root cause analysis and evidence-based problem solving.

## System Context

**Project Structure**:
[@AGENTS.md](../AGENTS.md)

**Recent Git Activity**:
!`git log --oneline -10`

**Project Files**:
!`find . -type f \( -name "*.js" -o -name "*.ts" -o -name "*.json" -o -name "*.log" \) ! -path "*/node_modules/*" | head -20`

**Dependencies**:
@package.json

## Issue Description

**Problem**: $ARGUMENTS

## Troubleshooting Protocol

Execute systematic issue diagnosis with structured debugging methodology:

### 1. ANALYZE - Issue Understanding

**Problem Definition**:
- Clearly define the issue and symptoms
- Identify when the issue first occurred
- Understand expected vs actual behavior
- Determine impact and severity

**Context Gathering**:
- Review error messages and stack traces
- Examine recent code changes (git log)
- Check system logs and output
- Identify affected components

**Issue Classification**:
- **Bug**: Code defects, runtime errors, logic issues
- **Build**: Compilation errors, dependency issues, configuration problems
- **Performance**: Slow execution, memory leaks, bottlenecks
- **Deployment**: Environment issues, configuration mismatches, service failures

### 2. INVESTIGATE - Root Cause Analysis

**Systematic Investigation**:
1. **Reproduce**: Confirm issue can be consistently reproduced
2. **Isolate**: Narrow down to specific component or function
3. **Hypothesize**: Form theories about potential causes
4. **Test**: Validate or eliminate hypotheses systematically

**Evidence Collection**:
- Error messages and stack traces
- Log file analysis
- System state examination
- Configuration review
- Dependency verification

**Pattern Analysis**:
- Search for similar issues in codebase
- Check for recent changes that might correlate
- Identify environmental factors
- Review error patterns and frequency

### 3. DEBUG - Structured Debugging

**Debugging Strategies by Type**:

**Code Bugs**:
```
1. Examine stack trace for error location
2. Review function logic and data flow
3. Check input validation and edge cases
4. Verify assumptions and preconditions
5. Trace execution path to error point
```

**Build Issues**:
```
1. Analyze build logs for error messages
2. Verify dependency versions and compatibility
3. Check configuration files (tsconfig, webpack, etc.)
4. Validate file paths and imports
5. Ensure build tools are properly configured
```

**Performance Problems**:
```
1. Profile code execution and identify hotspots
2. Analyze memory usage and potential leaks
3. Review database queries and API calls
4. Check for inefficient algorithms (O(n²), etc.)
5. Examine resource utilization patterns
```

**Deployment Issues**:
```
1. Verify environment configuration
2. Check service logs and status
3. Validate network connectivity and ports
4. Confirm environment variables are set
5. Review deployment scripts and processes
```

### 4. PROPOSE - Solution Validation

**Solution Development**:
- Identify potential fixes based on root cause
- Evaluate multiple solution approaches
- Assess impact and risk of each solution
- Choose optimal approach with rationale

**Impact Assessment**:
- Determine scope of changes required
- Identify affected components and systems
- Assess potential side effects
- Evaluate testing requirements

**Risk Evaluation**:
- Rate solution risk (low/medium/high)
- Identify potential breaking changes
- Consider rollback strategy
- Plan validation approach

### 5. RESOLVE - Fix Application

**Safe Fix Implementation**:
- Apply minimal changes to address root cause
- Maintain code quality and style
- Add comments explaining the fix
- Consider preventive measures

**Verification Steps**:
1. Apply fix to codebase
2. Run relevant tests to confirm resolution
3. Verify issue no longer reproduces
4. Check for regression in related areas
5. Monitor for any new issues introduced

**Documentation**:
- Document root cause and resolution
- Update troubleshooting guides if applicable
- Add preventive checks or tests
- Share learnings with team

## Troubleshooting Patterns

### Bug Investigation Pattern
```
Error → Stack Trace Analysis → Code Inspection → Data Flow Tracing → Root Cause → Fix → Validation
```

### Build Failure Pattern
```
Build Log → Error Identification → Configuration Check → Dependency Validation → Fix → Rebuild
```

### Performance Issue Pattern
```
Symptom → Profiling → Bottleneck Identification → Optimization → Measurement → Validation
```

### Deployment Problem Pattern
```
Failure → Environment Analysis → Configuration Verification → Service Validation → Fix → Redeploy
```

## Examples

### Code Bug Investigation
```
/troubleshoot "Null pointer exception in user service" --type bug --trace
→ Stack trace analysis: Error in getUserProfile at line 45
→ Root cause: Missing null check for optional user field
→ Fix: Add null check and default value
→ Validation: Tests pass, no regression
```

### Build Failure Resolution
```
/troubleshoot "TypeScript compilation errors" --type build --fix
→ Analysis: 15 type errors in authentication module
→ Root cause: Type definitions missing for new library
→ Fix: Install @types/package and update tsconfig
→ Result: Clean build, all types resolved
```

### Performance Optimization
```
/troubleshoot "API response times degraded" --type performance
→ Profiling: Database query taking 3+ seconds
→ Root cause: Missing index on user_id column
→ Fix: Add database index, optimize query
→ Result: Response time reduced to <100ms
```

### Deployment Issue Resolution
```
/troubleshoot "Service not starting in production" --type deployment --trace
→ Log analysis: Missing environment variable DATABASE_URL
→ Root cause: Environment variable not configured in production
→ Fix: Add environment variable to production configuration
→ Validation: Service starts successfully, health check passes
```

## Quality Standards

**Systematic Approach**:
- Structured debugging methodology
- Evidence-based analysis
- Hypothesis testing and validation
- Root cause identification, not symptom treatment

**Safety First**:
- Minimal, focused changes
- No experimental fixes without analysis
- Proper testing and validation
- Rollback plan available

**Documentation**:
- Clear explanation of root cause
- Detailed resolution steps
- Preventive measures documented
- Knowledge sharing for team

## Debugging Best Practices

**DO**:
- Reproduce the issue consistently
- Form and test hypotheses systematically
- Use debugging tools and logs
- Make minimal, focused changes
- Validate fixes thoroughly

**DON'T**:
- Make random changes hoping to fix the issue
- Skip root cause analysis
- Apply fixes without understanding the problem
- Ignore warning signs or related issues
- Skip validation and testing

---

**Execute systematic troubleshooting now with structured debugging and evidence-based analysis.**
