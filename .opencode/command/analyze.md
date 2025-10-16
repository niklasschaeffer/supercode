---
name: analyze
description: Comprehensive code analysis across quality, security, performance, and architecture domains
agent: code-review
---

# Code Analysis: $ARGUMENTS

You are performing comprehensive code analysis to identify issues and improvement opportunities.

## Project Context

**Project Files**:
!`find . -type f \( -name "*.js" -o -name "*.ts" -o -name "*.py" -o -name "*.go" -o -name "*.java" \) | head -30`

**Project Structure**:
@AGENTS.md

**Project Overview**:
@README.md

## Analysis Request

**Target**: $ARGUMENTS

## Analysis Protocol

Execute multi-domain analysis with comprehensive assessment:

### 1. DISCOVER - File Categorization

Analyze project structure and identify targets:

- **Language Detection**: Identify programming languages and frameworks
- **File Discovery**: Locate source files, tests, configuration, and documentation
- **Dependency Analysis**: Identify external dependencies and their usage patterns
- **Architecture Mapping**: Understand component relationships and system structure

### 2. SCAN - Domain-Specific Analysis

Apply specialized analysis techniques across domains:

#### Quality Analysis
- **Code Smells**: Detect duplication, complexity, coupling issues
- **Maintainability**: Assess readability, naming conventions, documentation
- **Test Coverage**: Evaluate test presence and quality
- **Technical Debt**: Identify areas needing refactoring

#### Security Analysis
- **Vulnerability Scanning**: Check for common security issues (injection, XSS, CSRF)
- **Authentication/Authorization**: Review access control patterns
- **Sensitive Data**: Identify credential exposure and data leakage risks
- **Dependency Vulnerabilities**: Check for known security issues in dependencies

#### Performance Analysis
- **Algorithmic Complexity**: Identify inefficient algorithms (O(n²), nested loops)
- **Resource Usage**: Detect memory leaks, excessive allocations
- **Database Queries**: Review N+1 queries, missing indexes
- **Caching Opportunities**: Identify repeated computations

#### Architecture Analysis
- **Design Patterns**: Assess pattern usage and appropriateness
- **SOLID Principles**: Evaluate adherence to design principles
- **Coupling/Cohesion**: Analyze component dependencies
- **Scalability**: Assess system scalability and extensibility

### 3. EVALUATE - Prioritized Findings

Generate severity-rated findings:

- **Critical**: Security vulnerabilities, data loss risks, system-breaking bugs
- **High**: Performance bottlenecks, significant technical debt, major code smells
- **Medium**: Maintainability issues, minor security concerns, test gaps
- **Low**: Code style inconsistencies, documentation gaps, minor optimizations

**Severity Criteria**:
- **Impact**: Potential consequences of the issue
- **Likelihood**: Probability of issue manifesting
- **Effort**: Cost to remediate the issue

### 4. RECOMMEND - Actionable Guidance

Provide implementation-ready recommendations:

- **Quick Wins**: High-impact, low-effort improvements (prioritize these)
- **Refactoring Candidates**: Areas needing structural improvements
- **Security Fixes**: Immediate security remediation steps
- **Performance Optimizations**: Specific optimization techniques
- **Best Practices**: Framework/language-specific recommendations

**Recommendation Format**:
- **What**: Clear description of the issue
- **Why**: Impact and importance
- **How**: Specific implementation steps
- **Priority**: Critical/High/Medium/Low

### 5. REPORT - Comprehensive Analysis

Present structured findings:

**Executive Summary**:
- Overall assessment and key insights
- Critical issues requiring immediate attention
- Recommended action plan

**Detailed Findings**:
- Issue-by-issue breakdown with code examples
- Severity ratings and impact assessment
- Remediation guidance and best practices

**Metrics Dashboard**:
- Code quality scores
- Security vulnerability counts
- Performance bottleneck locations
- Technical debt assessment

## Analysis Depth Options

**Quick Analysis** (--depth quick):
- High-level overview and critical issues only
- Pattern-based detection
- ~5 minute analysis

**Deep Analysis** (--depth deep):
- Comprehensive multi-domain assessment
- Detailed code inspection and flow analysis
- Framework-specific pattern evaluation
- ~15-20 minute analysis

## Focus Domains

Use --focus flag to target specific analysis:
- `--focus quality`: Code smells, maintainability, technical debt
- `--focus security`: Vulnerabilities, auth issues, data protection
- `--focus performance`: Bottlenecks, algorithmic issues, optimization
- `--focus architecture`: Design patterns, SOLID principles, scalability

## Tool Usage

- **Glob**: File discovery and project structure analysis
- **Grep**: Pattern matching and code search operations
- **Read**: Source code inspection and detailed analysis
- **Bash**: External tool execution (linters, security scanners)

## Output Formats

- **Text** (default): Human-readable analysis report
- **JSON** (--format json): Machine-parseable structured output
- **Report** (--format report): Comprehensive HTML report with metrics

---

**Execute comprehensive code analysis now with systematic assessment across all quality domains.**
