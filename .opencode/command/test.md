---
name: test
description: Execute tests with coverage analysis and automated quality reporting
agent: quality-engineer
---

# Test Execution: $ARGUMENTS

You are executing tests with comprehensive coverage analysis and quality reporting.

## Project Context

**Git Status**:
!`git status --short`

**Test Files**:
!`find . -type f \( -name "*.test.*" -o -name "*.spec.*" -o -name "*_test.*" \) | head -20`

**Dependencies**:
@package.json

**Project Structure**:
[@AGENTS.md](../AGENTS.md)

## Test Request

**Target**: $ARGUMENTS

## Test Execution Protocol

Execute comprehensive testing with quality analysis:

### 1. DISCOVER - Test Categorization

Identify and categorize available tests:

- **Test Framework Detection**: Jest, Mocha, Pytest, Go Test, Cargo Test
- **Test Type Classification**: Unit, Integration, E2E, Performance
- **Test File Discovery**: Pattern-based test file identification
- **Configuration Analysis**: Test runner config and environment setup

**Test Discovery Patterns**:
- **Jest/Vitest**: `*.test.js`, `*.spec.js`, `__tests__/*.js`
- **Pytest**: `test_*.py`, `*_test.py`
- **Go**: `*_test.go`
- **Rust**: `tests/*.rs`, `#[test]` attributes

**Framework Detection**:
```
# Detect test framework
!`grep -E '"jest"|"vitest"|"mocha"|"pytest"' package.json | head -3`
```

### 2. CONFIGURE - Test Environment

Set up test execution environment:

- **Environment Variables**: Load test-specific env vars
- **Test Database**: Set up test database if needed
- **Mock Services**: Configure mocks for external services
- **Coverage Tools**: Enable coverage tracking

**Test Types**:

**Unit Tests** (--type unit):
- Fast, isolated function/component tests
- No external dependencies
- High code coverage target (>80%)

**Integration Tests** (--type integration):
- Multi-component interaction tests
- Database and API integration
- Real dependencies where appropriate

**E2E Tests** (--type e2e):
- Full application flow testing
- Browser automation via Playwright MCP
- Real user scenario simulation

**All Tests** (--type all):
- Complete test suite execution
- All test types in sequence
- Comprehensive coverage report

### 3. EXECUTE - Test Running

Run tests with monitoring:

**Test Execution**:
- Execute test command from package.json or config
- Monitor real-time output
- Track test progress and timing
- Capture failures and errors

**Execution Options**:

**Standard Run**:
```bash
# Run all tests with default configuration
npm test
# or
pytest
# or
go test ./...
# or
cargo test
```

**Coverage Mode** (--coverage):
```bash
# Run with coverage tracking
npm test -- --coverage
# or
pytest --cov
# or
go test -cover ./...
```

**Watch Mode** (--watch):
```bash
# Continuous testing during development
npm test -- --watch
# or
pytest-watch
```

**Verbose Output** (--verbose):
```bash
# Detailed test output
npm test -- --verbose
# or
pytest -v
```

### 4. ANALYZE - Results and Coverage

Generate comprehensive analysis:

**Test Results Analysis**:
- **Pass/Fail Summary**: Overall test status
- **Failure Details**: Stack traces and error messages
- **Timing Metrics**: Slow tests identification
- **Flaky Tests**: Intermittent failures

**Coverage Analysis**:
- **Line Coverage**: Percentage of lines executed
- **Branch Coverage**: Conditional paths tested
- **Function Coverage**: Functions called during tests
- **Statement Coverage**: Individual statements executed

**Coverage Targets**:
- **Critical Code**: 90%+ coverage (auth, payment, security)
- **Core Features**: 80%+ coverage
- **Utilities**: 70%+ coverage
- **UI Components**: 60%+ coverage

**Quality Metrics**:
- Test count and distribution
- Average test duration
- Code coverage trends
- Test reliability score

### 5. REPORT - Actionable Recommendations

Provide comprehensive test report:

**Test Summary**:
```
Test Results:
- Total Tests: XXX
- Passed: XXX (XX%)
- Failed: XXX (XX%)
- Skipped: XXX (XX%)
- Duration: XX.XXs

Coverage Summary:
- Lines: XX% (XXXX/XXXX)
- Branches: XX% (XXX/XXX)
- Functions: XX% (XXX/XXX)
- Statements: XX% (XXX/XXX)
```

**Failure Analysis** (if failures):
```
Failed Tests:
1. test_name (file:line)
   └─ Error: Expected X but got Y
   └─ Cause: [Root cause analysis]
   └─ Fix: [Suggested resolution]
```

**Recommendations**:
- **Coverage Gaps**: Files/functions needing more tests
- **Slow Tests**: Tests needing optimization
- **Flaky Tests**: Unreliable tests to investigate
- **Missing Tests**: Critical paths without coverage

## Test Types

Use --type flag:
- `--type unit`: Fast unit tests only
- `--type integration`: Integration tests
- `--type e2e`: End-to-end browser tests (Playwright)
- `--type all`: Complete test suite

## Test Options

- `--coverage`: Generate coverage report
- `--watch`: Continuous testing mode
- `--fix`: Auto-fix simple failures (where possible)
- `--verbose`: Detailed test output

## E2E Testing with Playwright

**Auto-Activated** for `--type e2e`:
- Real browser automation
- Cross-browser testing (Chrome, Firefox, Safari)
- Visual regression testing
- Accessibility validation
- Performance metrics

**E2E Test Patterns**:
- User authentication flows
- Form submissions
- Navigation scenarios
- Data persistence
- Error handling

## Test Failure Handling

**Failure Analysis**:
1. Parse error messages
2. Identify failing test and file
3. Analyze root cause
4. Provide resolution steps

**Common Failure Types**:
- **Assertion Failures**: Expected vs actual mismatch
- **Timeout Errors**: Slow async operations
- **Mock Issues**: Incorrect mock configuration
- **Environment Problems**: Missing dependencies or config

**Auto-Fix** (--fix flag):
- Simple assertion updates
- Timeout adjustments
- Mock configuration fixes
- Import/dependency resolution

## Watch Mode Development

**Continuous Testing**:
- File change detection
- Automatic test re-runs
- Focused test execution
- Real-time feedback

**Benefits**:
- Immediate failure detection
- Faster development feedback
- Regression prevention
- Confidence during refactoring

## MCP Integration

- **Playwright MCP**: E2E browser testing (--type e2e)
- **QA Specialist Persona**: Test analysis and quality assessment

## Boundaries

**Will Execute**:
- Existing test suites with configured runners
- Coverage analysis and quality metrics
- Intelligent failure analysis and recommendations

**Will Not**:
- Generate new test cases or modify test code
- Execute tests requiring unavailable external services
- Make destructive changes without explicit permission

---

**Execute comprehensive testing now with coverage analysis and intelligent quality reporting.**
