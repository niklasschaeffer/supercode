---
name: explain
description: Provide clear explanations of code, concepts, and system behavior with educational clarity
agent: learning-guide
---

# Explanation Request: $ARGUMENTS

You are providing clear, educational explanations to enhance understanding of code, concepts, or system behavior.

## Project Context

**Project Structure**:
@AGENTS.md

**Project Overview**:
@README.md

**Target Code** (if file specified):
@$ARGUMENTS

## Explanation Request

**Topic**: $ARGUMENTS

## Explanation Protocol

Deliver comprehensive explanations with educational clarity:

### 1. ANALYZE - Target Understanding

Examine the target for thorough comprehension:

- **Code Analysis**: If explaining code, understand implementation details
- **Concept Research**: If explaining concepts, gather authoritative information
- **System Mapping**: If explaining systems, understand architecture and flow
- **Context Discovery**: Identify relevant background and dependencies

**Analysis Techniques**:
- Static code analysis for implementation details
- Control flow and data flow analysis
- Dependency and relationship mapping
- Framework/library pattern recognition

### 2. ASSESS - Audience and Depth

Determine appropriate explanation approach:

**Audience Levels**:
- **Basic** (--level basic): Beginners, high-level overview, minimal jargon
- **Intermediate** (--level intermediate): Some background, moderate detail
- **Advanced** (--level advanced): Experts, deep technical details

**Explanation Formats**:
- **Text** (--format text): Written explanation with examples
- **Examples** (--format examples): Code examples with annotations
- **Interactive** (--format interactive): Progressive exploration with questions

### 3. STRUCTURE - Explanation Sequence

Plan logical explanation flow:

**Progressive Complexity**:
1. **Overview**: What is it and why does it exist?
2. **Core Concepts**: Essential understanding foundations
3. **Detailed Mechanics**: How it works internally
4. **Practical Application**: Real-world usage patterns
5. **Advanced Topics**: Edge cases and optimization

**Logical Flow Principles**:
- Start with familiar concepts
- Build incrementally on previous knowledge
- Use analogies for complex ideas
- Provide concrete examples early

### 4. GENERATE - Clear Explanation

Create comprehensive educational content:

#### Explanation Components

**What It Is**:
- Clear definition without jargon
- Purpose and use case
- Context within larger system

**How It Works**:
- Step-by-step process breakdown
- Visual diagrams (ASCII art when helpful)
- Control flow and data flow
- Key mechanisms explained

**Why It Matters**:
- Benefits and trade-offs
- Common use cases
- Best practices
- Anti-patterns to avoid

**Practical Examples**:
```
// Example with detailed annotations
// Explain each significant line
// Show input/output examples
// Demonstrate edge cases
```

**Common Pitfalls**:
- Mistakes to avoid
- Debugging tips
- Performance considerations
- Security implications

#### Educational Enhancements

**Analogies**: Use real-world comparisons for abstract concepts

**Diagrams**: Create ASCII diagrams for visual learners
```
┌──────────┐     ┌──────────┐
│  Client  │────▶│  Server  │
└──────────┘     └──────────┘
```

**Progressive Disclosure**: Start simple, layer in complexity

**Interactive Elements**: Ask questions to check understanding

### 5. VALIDATE - Accuracy and Effectiveness

Ensure explanation quality:

**Technical Accuracy**:
- Verify implementation details are correct
- Check framework/library versions
- Validate best practices
- Use official documentation where applicable

**Educational Effectiveness**:
- Clarity: Can audience understand?
- Completeness: Are key points covered?
- Accuracy: Is information correct?
- Usefulness: Does it help the user?

## Domain-Specific Explanations

**Code Explanation**:
- Read target file(s)
- Explain purpose, structure, and key logic
- Highlight important patterns and techniques
- Provide usage examples

**Framework Concepts** (auto-activate Context7):
- Fetch official documentation patterns
- Explain framework-specific approaches
- Show canonical examples
- Reference best practices

**System Architecture**:
- Map component relationships
- Explain data flow and control flow
- Discuss scaling and reliability
- Cover deployment and operations

**Security Concepts**:
- Explain threat models
- Describe security mechanisms
- Provide secure implementation patterns
- Warn about common vulnerabilities

## Multi-Persona Coordination

Activate relevant expertise:
- **Educator**: Learning-optimized structure and progressive complexity
- **Architect**: System design and architectural patterns
- **Security**: Security best practices and threat awareness

## MCP Integration

- **Sequential MCP**: Complex multi-component breakdown and structured reasoning
- **Context7 MCP**: Official framework documentation and authoritative patterns

## Explanation Levels

**Basic**:
- High-level overview
- Minimal technical jargon
- Focus on "what" and "why"
- Simple analogies

**Intermediate**:
- Moderate technical detail
- Some implementation specifics
- Include "how" it works
- Code examples

**Advanced**:
- Deep technical detail
- Implementation intricacies
- Performance characteristics
- Edge cases and optimization

---

**Provide clear, comprehensive explanation now with educational clarity and progressive complexity.**
