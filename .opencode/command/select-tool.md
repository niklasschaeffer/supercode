---
name: select-tool
description: Intelligent MCP tool selection based on complexity scoring and operation analysis
agent: system-architect
---

# Tool Selection Analysis: $ARGUMENTS

You are performing intelligent MCP tool selection between Serena and Morphllm based on complexity scoring and operation characteristics.

## Project Context

**Project Structure**:
!`find . -type f \( -name "*.py" -o -name "*.js" -o -name "*.ts" -o -name "*.go" \) | wc -l`

**Operation Target**:
$ARGUMENTS

## Selection Request

**Operation**: $ARGUMENTS

## Tool Selection Protocol

Execute intelligent routing decision with complexity-based analysis:

### 1. PARSE - Operation Analysis

Analyze operation characteristics:

- **Operation Type**: Symbol operations vs pattern-based edits
- **Scope Assessment**: File count, directory span, complexity indicators
- **Language Detection**: Programming language and framework context
- **Requirement Analysis**: Speed vs accuracy trade-offs, semantic needs

**Complexity Indicators**:
```
File Count: Low (<3), Medium (3-10), High (>10)
Operation Type: Symbol rename, refactoring, pattern replacement
Language: Python, TypeScript, JavaScript, Go, etc.
Framework: React, Django, Express, etc.
```

### 2. SCORE - Complexity Assessment

Apply multi-dimensional complexity scoring:

**Scoring Factors**:

**File Count Factor** (weight: 0.3):
- 1-2 files: 0.2
- 3-5 files: 0.5
- 6-10 files: 0.7
- 10+ files: 0.9

**Operation Type Factor** (weight: 0.4):
- Pattern replacement: 0.2
- Style enforcement: 0.3
- Bulk text edits: 0.3
- Symbol operations: 0.8
- Semantic refactoring: 0.9
- Architecture changes: 1.0

**Language Factor** (weight: 0.2):
- Simple (Python, JS): 0.3
- Type-safe (TS, Go): 0.6
- Complex (C++, Java): 0.8

**Framework Factor** (weight: 0.1):
- No framework: 0.2
- Simple framework: 0.5
- Complex framework: 0.8

**Complexity Score Formula**:
```
score = (file_count * 0.3) + (operation_type * 0.4) + (language * 0.2) + (framework * 0.1)
```

### 3. MATCH - Tool Capability Assessment

Compare requirements against tool capabilities:

**Serena MCP Capabilities**:
- **Semantic Operations**: Symbol rename, extract, move functions/classes
- **LSP Integration**: Language server protocol for semantic understanding
- **Project Context**: Cross-session memory, project-wide analysis
- **Dependency Tracking**: Reference analysis, symbol relationships
- **Accuracy Priority**: High precision for complex operations
- **Speed**: Moderate (semantic analysis overhead)

**Optimal for Serena**:
- Symbol operations (rename, extract, move)
- Multi-language projects requiring LSP
- Cross-file refactoring with dependency tracking
- Session persistence and memory needs
- Complexity score > 0.6

**Morphllm MCP Capabilities**:
- **Pattern Operations**: Regex-based, bulk text replacements
- **Speed Priority**: Fast execution for simple operations
- **Bulk Processing**: Efficient for large-scale transformations
- **Token Efficiency**: 30-50% token reduction
- **Simple Edits**: Style enforcement, text replacement

**Optimal for Morphllm**:
- Pattern-based bulk edits
- Style guide enforcement
- Simple text replacements
- Speed-critical operations
- Complexity score < 0.4

### 4. SELECT - Tool Decision

Choose optimal tool based on scoring and requirements:

**Decision Matrix**:

**Direct Mapping** (no scoring needed):
```
Symbol operations → Serena
  - rename function/class/variable
  - extract method/class
  - move symbols between files

Pattern edits → Morphllm
  - console.log → logger.info
  - var → const/let
  - style guide enforcement

Memory operations → Serena
  - project context save/load
  - cross-session persistence
```

**Threshold-Based Selection**:
```
Score > 0.6 → Serena
  - High complexity operations
  - Semantic understanding required
  - Accuracy priority

Score < 0.4 → Morphllm
  - Low complexity operations
  - Pattern-based transformations
  - Speed priority

0.4 ≤ Score ≤ 0.6 → Feature-based decision
  - Check for LSP requirements → Serena
  - Check for memory needs → Serena
  - Otherwise → Morphllm for speed
```

**Performance Trade-offs**:
```
Speed Requirements:
  - Time-critical → Morphllm
  - Background operation → Serena acceptable

Accuracy Requirements:
  - Must not break code → Serena
  - Style enforcement → Morphllm acceptable

Context Requirements:
  - Project-wide impact → Serena
  - Isolated changes → Morphllm acceptable
```

### 5. VALIDATE - Selection Verification

Verify selection accuracy and provide confidence metrics:

**Validation Checks**:
- Tool capability matches operation requirements
- Complexity score aligns with tool selection
- Performance requirements satisfied
- Quality standards maintainable

**Confidence Metrics**:
- **High Confidence** (>95%): Direct mapping, clear indicators
- **Medium Confidence** (80-95%): Threshold-based, feature analysis
- **Low Confidence** (<80%): Edge case, manual review suggested

**Fallback Strategy**:
```
Primary: Selected tool (Serena or Morphllm)
  ↓ (if fails)
Secondary: Alternative tool
  ↓ (if fails)
Tertiary: Native tools (Edit, MultiEdit)
```

## Selection Examples

### Complex Symbol Rename
```
Operation: "Rename getUserData to fetchUserProfile across 15 files"
Analysis:
  - File count: 15 (score: 0.9)
  - Operation: Symbol rename (score: 0.8)
  - Language: TypeScript (score: 0.6)
  - Framework: React (score: 0.5)
Complexity Score: 0.78
Selection: Serena MCP
Rationale: High complexity, symbol operation, LSP required
Confidence: 98%
```

### Pattern-Based Bulk Edit
```
Operation: "Replace console.log with logger.info across project"
Analysis:
  - File count: 30 (score: 0.9)
  - Operation: Pattern replacement (score: 0.2)
  - Language: JavaScript (score: 0.3)
  - Framework: None (score: 0.2)
Complexity Score: 0.38
Selection: Morphllm MCP
Rationale: Pattern-based, speed priority, no semantic analysis
Confidence: 95%
```

### Memory Management
```
Operation: "Save project context and workflow state"
Direct Mapping: Memory operation → Serena MCP
Rationale: Cross-session persistence, project context management
Confidence: 100%
```

### Edge Case - Medium Complexity
```
Operation: "Update import paths in 5 TypeScript files"
Analysis:
  - File count: 5 (score: 0.5)
  - Operation: Pattern with semantic awareness (score: 0.5)
  - Language: TypeScript (score: 0.6)
Complexity Score: 0.52
Feature Check: Imports may have dependencies → Serena
Selection: Serena MCP
Rationale: Import changes affect module graph, need LSP
Confidence: 85%
```

## Decision Time Performance

**Target**: Sub-100ms decision time for 95% of operations

**Timing Breakdown**:
- Parse operation: <20ms
- Complexity scoring: <30ms
- Tool matching: <20ms
- Validation: <20ms
- Selection output: <10ms

**Optimization Strategies**:
- Cache common operation patterns
- Pre-compute complexity scores for known patterns
- Direct mapping for common operations
- Parallel factor analysis

## Integration with Commands

**Automatic Selection** (used by):
- /refactor - Intelligent tool routing for refactoring operations
- /edit - Complexity-based edit tool selection
- /implement - Feature-based MCP coordination
- /improve - Quality-focused tool optimization

**Manual Override**:
```
/refactor --tool serena "operation"
/refactor --tool morphllm "operation"
```

## Quality Standards

**Selection Accuracy**: >95% correct tool selection
**Decision Speed**: <100ms for 95% of operations
**Fallback Success**: >99% operation completion with fallback chain
**User Satisfaction**: Optimal performance for operation characteristics

---

**Execute intelligent tool selection now with complexity-based analysis and performance optimization.**
