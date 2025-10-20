---
name: prompt
description: Generate and optimize prompts for AI interactions with expert guidance
agent: prompt-engineer
---

# Prompt Generation: $ARGUMENTS

You are generating and optimizing prompts for AI interactions with expert guidance and best practices.

## Project Context

**Project Structure**:
[@AGENTS.md](../AGENTS.md)

**Existing Prompts**:
!`find . -type f \( -name "*.prompt.md" -o -name "*prompt*.md" -o -name "*.opencode.md" \) 2>/dev/null | head -10`

**Dependencies**:
@package.json

## Prompt Request

**Target**: $ARGUMENTS

## Prompt Engineering Protocol

Execute systematic prompt generation and optimization with AI-first approach:

### 1. ANALYZE - Context and Requirements

**Context Analysis**:
- Identify the AI system or model being targeted (GPT, Claude, LLM, etc.)
- Understand the task domain (code generation, analysis, content creation, etc.)
- Analyze existing prompt patterns in the project
- Assess user intent and expected outcomes

**Requirements Understanding**:
- Determine clarity and specificity needs
- Identify required context and background information
- Consider token budget and response length constraints
- Evaluate success criteria for the prompt

### 2. PLAN - Prompt Strategy

**Prompt Type Selection**:
- Task Prompt: Clear instruction-based prompts for specific actions
- System Prompt: Role-based prompts for consistent behavior
- Few-Shot Prompt: Example-driven prompts for pattern learning
- Chain-of-Thought: Reasoning prompts for complex problem-solving
- Template Prompt: Reusable structured prompts with variables

**Optimization Strategy**:
- Clarity: Use precise language and clear instructions
- Context: Provide relevant background and constraints
- Structure: Organize information logically
- Examples: Include demonstrations when beneficial
- Constraints: Define boundaries and expectations

### 3. DESIGN - Prompt Structure

**Prompt Components**:

1. **Role/Persona** (if applicable)
   - Define the AI's role and expertise
   - Set behavioral expectations and mindset

2. **Context/Background**
   - Provide necessary domain knowledge
   - Include relevant project information
   - Reference existing patterns or conventions

3. **Task/Instruction**
   - State the primary objective clearly
   - Break down complex tasks into steps
   - Use action verbs and specific language

4. **Constraints/Requirements**
   - Define output format expectations
   - Set boundaries and limitations
   - Specify quality criteria

5. **Examples** (if needed)
   - Show desired input-output patterns
   - Demonstrate edge cases
   - Illustrate style and format

### 4. IMPLEMENT - Prompt Creation

**Prompt Development**:
- Draft initial prompt with all components
- Apply prompt engineering best practices:
  * Use clear, unambiguous language
  * Structure information hierarchically
  * Front-load critical information
  * Use delimiters for distinct sections
  * Include format specifications
  * Add guardrails for safety/quality

**Optimization Techniques**:
- Remove redundancy and verbosity
- Enhance specificity where needed
- Add examples for complex requirements
- Test for potential ambiguities
- Validate against success criteria

### 5. VALIDATE - Testing and Refinement

**Validation Process**:
- Review prompt for clarity and completeness
- Check for potential misinterpretations
- Verify all requirements are addressed
- Test prompt with sample inputs (if applicable)
- Iterate based on results

**Quality Checklist**:
- [ ] Clear objective and instructions
- [ ] Sufficient context provided
- [ ] Appropriate level of specificity
- [ ] Examples included (if beneficial)
- [ ] Constraints clearly defined
- [ ] Format expectations specified
- [ ] Edge cases considered
- [ ] Token efficiency optimized

### 6. DOCUMENT - Prompt Documentation

**Documentation Elements**:
- Prompt purpose and use case
- Expected input parameters
- Output format specification
- Usage examples
- Version and iteration notes
- Performance considerations

## Best Practices

### AI-First Prompt Principles

1. **Clarity Over Brevity**: Be explicit rather than assuming understanding
2. **Structure Over Stream**: Organize information logically
3. **Examples Over Explanation**: Show don't tell when possible
4. **Constraints Over Freedom**: Define boundaries for better results
5. **Iteration Over Perfection**: Test and refine continuously

### Common Prompt Patterns

**Instruction Pattern**:
```
You are [role]. Your task is to [action] [object] according to [constraints].

Context: [background information]

Requirements:
- [requirement 1]
- [requirement 2]

Output format: [specification]
```

**Few-Shot Pattern**:
```
Here are examples of [task]:

Example 1:
Input: [input]
Output: [output]

Example 2:
Input: [input]
Output: [output]

Now complete this:
Input: [new input]
Output:
```

**Chain-of-Thought Pattern**:
```
Solve [problem] by thinking step-by-step:

1. First, analyze [aspect]
2. Then, consider [aspect]
3. Finally, conclude [aspect]

Show your reasoning for each step.
```

### Anti-Patterns to Avoid

- ❌ Vague instructions without clear objectives
- ❌ Assuming implicit knowledge or context
- ❌ Overly complex nested instructions
- ❌ Missing output format specifications
- ❌ Neglecting edge cases and constraints
- ❌ Using ambiguous or loaded language

## Deliverables

Generate comprehensive prompt artifacts:

1. **Optimized Prompt**: The final, production-ready prompt
2. **Usage Guide**: How to use the prompt effectively
3. **Test Cases**: Sample inputs and expected outputs
4. **Variations**: Alternative versions for different contexts
5. **Improvement Notes**: Areas for future optimization

## Integration with Development Workflow

- Save prompts in `{$CWD}/.opencode/prompts`
- Use consistent frontmatter format (YAML with name, description, agent/model)
- Version control prompts alongside code
- Document prompt performance and iterations
- Share effective patterns across team

---

**Expert Mode**: Engage @prompt-engineer for advanced optimization, A/B testing strategies, and domain-specific prompt patterns.

**Collaboration**: Consider @technical-writer for documentation and @quality-engineer for validation criteria.

