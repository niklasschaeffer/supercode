---
name: build
description: Build, compile, and package projects with intelligent error handling and optimization
agent: devops-architect
model: glm-4.6
---

# Project Build: $ARGUMENTS

You are building, compiling, and packaging the project with intelligent error handling.

## Project Context

**Git Status**:
!`git status --short`

**Branch**:
!`git branch --show-current`

**Dependencies**:
@package.json

**Project Structure**:
@AGENTS.md

## Build Request

**Target**: $ARGUMENTS

## Build Protocol

Execute comprehensive build process with error handling:

### 1. ANALYZE - Project Structure

Understand build requirements:

- **Build System Detection**: Identify build tool (npm, yarn, make, gradle, cargo, go)
- **Configuration Analysis**: Review build configs (package.json, Makefile, build.gradle, Cargo.toml)
- **Dependency Validation**: Verify all required dependencies are installed
- **Environment Check**: Validate required toolchain components (node, go, rust, java)

**Build System Patterns**:
- **JavaScript/TypeScript**: npm run build, yarn build, webpack, vite, rollup
- **Go**: go build, make
- **Rust**: cargo build
- **Java**: gradle build, mvn package
- **Python**: python setup.py build, poetry build

### 2. VALIDATE - Environment

Ensure build readiness:

- **Dependencies**: Check package installation status
- **Toolchain**: Verify compiler/interpreter versions
- **Configuration**: Validate build config files
- **Clean State**: Check for conflicts or stale artifacts

**Pre-Build Checks**:
```
# Check dependency status
!`npm list --depth=0 2>&1 || yarn list --depth=0 2>&1 || true`

# Verify clean workspace
!`git status --porcelain | wc -l`
```

### 3. EXECUTE - Build Process

Run build with monitoring:

**Build Execution**:
- Execute build command from package.json or build config
- Monitor real-time output for errors and warnings
- Track build progress and timing metrics
- Capture exit codes and error messages

**Environment-Specific Builds**:

**Development** (--type dev):
- Fast build with source maps
- No minification
- Debug symbols included
- Watch mode support

**Production** (--type prod):
- Optimized build with minification
- Tree-shaking and code splitting
- Asset optimization (images, fonts)
- Source map generation for debugging

**Test** (--type test):
- Test-specific configuration
- Coverage instrumentation
- Mock/stub inclusion

**Clean Build** (--clean):
- Remove existing build artifacts
- Clear cache directories
- Fresh dependency installation if needed

### 4. OPTIMIZE - Build Artifacts

Apply optimizations and analysis:

**Artifact Optimization**:
- **Bundle Analysis**: Identify large dependencies and optimization opportunities
- **Asset Compression**: Compress images, fonts, and static assets
- **Code Splitting**: Optimize chunk sizes for better loading
- **Tree Shaking**: Remove unused code from bundles

**Performance Metrics**:
- Build time analysis
- Bundle size comparison
- Dependency audit
- Build cache efficiency

### 5. PACKAGE - Deployment Preparation

Generate deployment-ready artifacts:

**Artifact Generation**:
- Compiled/transpiled code
- Bundled assets
- Configuration files
- Deployment manifests

**Build Report**:
```
Build Summary:
- Status: Success/Failure
- Duration: XX minutes XX seconds
- Artifacts: ./dist, ./build, ./target
- Bundle Sizes: {entry points and sizes}
- Warnings: {count and summary}
- Errors: {if any}
```

**Validation Checks** (if --validate):
- Run smoke tests on build artifacts
- Verify critical paths are functional
- Check for runtime errors
- Use Playwright MCP for UI validation

## Error Handling

**Build Failure Analysis**:

**Common Issues**:
- **Missing Dependencies**: Run `npm install` or equivalent
- **Type Errors**: Review TypeScript/Flow errors with file:line references
- **Syntax Errors**: Identify and fix parsing issues
- **Module Resolution**: Check import paths and module configuration
- **Memory Issues**: Increase Node memory limit or build in chunks

**Error Resolution Pattern**:
1. Parse error message for root cause
2. Identify affected files and line numbers
3. Provide specific resolution steps
4. Offer alternative approaches if available

**Example Error Analysis**:
```
Error: Module not found: Can't resolve './utils'
└─ File: src/app.js:15
└─ Cause: Missing file or incorrect path
└─ Fix: Check if utils.js exists, verify import path
```

## Build Types

Use --type flag:
- `--type dev`: Fast development build
- `--type prod`: Optimized production build
- `--type test`: Test environment build

## Build Options

- `--clean`: Remove existing build artifacts first
- `--optimize`: Apply advanced optimizations
- `--verbose`: Show detailed build output
- `--validate`: Run validation tests after build

## MCP Integration

- **Playwright MCP**: UI testing and validation after build (--validate flag)
- **DevOps Persona**: Build optimization and deployment preparation

## Boundaries

**Will Execute**:
- Project builds using existing configuration
- Error analysis with actionable resolution guidance
- Artifact optimization and deployment preparation

**Will Not**:
- Modify build system configuration files
- Install missing build tools or dependencies
- Execute deployment beyond artifact preparation

---

**Execute project build now with comprehensive error handling and intelligent optimization.**
