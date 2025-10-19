---
name: research
description: Deep web research with adaptive planning and intelligent search
agent: deep-research-agent
---

# Deep Research: $ARGUMENTS

You are conducting comprehensive web research using Tavily MCP with adaptive planning, multi-hop reasoning, and evidence-based synthesis.

## Research Context

**Query**: $ARGUMENTS

**Research Configuration**: Use research defaults from RESEARCH_CONFIG.md with parallel-first execution

## Research Protocol

Execute adaptive research with Tavily MCP integration and intelligent source management:

### 1. UNDERSTAND - Query Analysis

**Query Assessment**:
- Analyze complexity and ambiguity level
- Identify required information types (factual, analytical, comparative)
- Determine temporal requirements (current vs historical)
- Define success criteria and confidence targets

**Scope Determination**:
- Estimate breadth vs depth requirements
- Identify parallelization opportunities
- Assess multi-hop exploration needs
- Set confidence thresholds (0.6-0.9 range)

### 2. PLAN - Research Strategy

**Strategy Selection**:
```
Planning-Only:
- Clear, specific query
- Well-defined scope
- Direct execution possible

Intent-Planning:
- Ambiguous terms present
- Clarification beneficial
- 2-3 clarifying questions

Unified:
- Complex multi-faceted query
- User collaboration valuable
- Iterative refinement expected
```

**Search Planning**:
- **Parallel-First Mandate**: Default to parallel searches
- Batch similar queries together (max 5 concurrent)
- Only sequential for dependent hops
- Identify entity and concept exploration paths

**Depth Configuration**:
```
Quick (--depth quick):
- Basic search, 1 hop, 10 sources max
- Summary output, 2min target
- Confidence: 0.6+

Standard (default):
- Extended search, 2-3 hops, 20 sources
- Structured report, 5min target
- Confidence: 0.7+

Deep (--depth deep):
- Comprehensive search, 3-4 hops, 40 sources
- Detailed analysis, 8min target
- Confidence: 0.8+

Exhaustive (--depth exhaustive):
- Maximum depth, 5 hops, 50+ sources
- Complete investigation, 10min target
- Confidence: 0.9+
```

### 3. EXECUTE - Parallel Research

**Tavily Search Operations** (Parallel-First):
```
MANDATORY PARALLEL EXECUTION:
1. Batch all independent search queries
2. Execute 3-5 searches concurrently
3. Only use sequential for hop dependencies

Example - CORRECT:
- Search 1: "quantum computing 2024 breakthroughs"
- Search 2: "quantum computing IBM latest"
- Search 3: "quantum computing Google research"
→ Execute ALL THREE in parallel

Example - WRONG:
- Search 1 → wait → Search 2 → wait → Search 3
```

**Smart Extraction Routing**:
```
Simple Content → Tavily Extract:
- Static HTML, simple articles
- Public content, no JavaScript
- Fast extraction priority

Complex Content → Playwright:
- JavaScript-heavy pages
- Dynamic content, SPAs
- Interactive elements
- Authentication required
```

**Multi-Hop Exploration**:
```
Hop 1 (Initial):
- Parallel broad searches
- Gather baseline information
- Identify key entities and concepts

Hop 2-3 (Entity Expansion):
- Parallel entity-specific searches
- Follow promising leads
- Cross-reference findings

Hop 4-5 (Deep Dive):
- Targeted specific investigations
- Validate conclusions
- Fill remaining gaps
```

### 4. SYNTHESIZE - Evidence Integration

**Source Management**:
```
For each source:
- Track URL and retrieval timestamp
- Assess credibility (tier 1-4 scoring)
- Extract key information
- Note confidence level
- Cross-reference with other sources
```

**Credibility Assessment**:
```
Tier 1 (0.9-1.0):
- Academic journals, official docs
- Government publications
- Peer-reviewed papers

Tier 2 (0.7-0.9):
- Established media outlets
- Industry reports, expert blogs

Tier 3 (0.5-0.7):
- Community resources
- Wikipedia, technical forums

Tier 4 (0.3-0.5):
- User forums, social media
- Unverified sources
```

**Contradiction Resolution**:
- Identify conflicting information
- Compare source credibility scores
- Seek additional authoritative sources
- Note uncertainties explicitly

### 5. VALIDATE - Quality Assurance

**Completeness Check**:
- All query aspects addressed
- Sufficient source diversity
- Confidence targets met
- Gaps identified and documented

**Evidence Validation**:
- Sources properly cited
- Claims traceable to sources
- Conflicting views presented
- Uncertainty acknowledged

**Self-Reflection** (use Serena if available):
```
Use think_about_collected_information:
- Assess information sufficiency
- Identify remaining gaps
- Evaluate research quality
- Determine if additional hops needed
```

### 6. DELIVER - Research Output

**Report Structure**:
```markdown
# Research Report: [Topic]

## Executive Summary
[2-3 paragraph overview with key findings]

## Key Findings
1. [Finding 1] - Confidence: XX%
   - Sources: [cite sources]
2. [Finding 2] - Confidence: XX%
   - Sources: [cite sources]

## Detailed Analysis
[In-depth exploration of findings]

## Source Assessment
- Total sources: XX
- Credibility distribution: Tier 1 (X), Tier 2 (X), Tier 3 (X)
- Contradictions identified: X
- Information gaps: [list]

## Confidence Assessment
- Overall confidence: XX%
- High confidence areas: [list]
- Low confidence areas: [list]
- Recommendations for further research: [if needed]

## Sources
[Numbered list with URLs and retrieval dates]
```

**Save Location**:
```
claudedocs/research_[sanitized_topic]_[timestamp].md
```

## Research Patterns

### Parallel Search Optimization
```
ALWAYS parallel:
- Initial broad searches
- Entity-specific queries
- Verification searches
- Gap-filling searches

ONLY sequential:
- Hop N requires Hop N-1 results
- API rate limit constraints
- Explicit user requirement
```

### Multi-Hop Strategies
```
Entity Expansion:
Topic → Entities → Related Work → Collaborators

Concept Deepening:
Topic → Subtopics → Details → Examples

Temporal Progression:
Current → Recent → Historical → Origins

Causal Chain:
Effect → Immediate Cause → Root Cause
```

## MCP Tool Usage

**Tavily Search**:
```
tavily-search:
- query: search terms
- search_depth: basic|advanced
- max_results: 5-20
- include_domains: [optional filter]
- time_range: day|week|month|year
```

**Tavily Extract**:
```
tavily-extract:
- urls: [list of URLs]
- extract_depth: basic|advanced
```

**Playwright** (for complex content):
```
browser_navigate: navigate to URL
browser_snapshot: capture content
browser_take_screenshot: visual validation
```

**Serena** (for session persistence):
```
write_memory: save research session
read_memory: load previous research
think_about_collected_information: assess quality
```

## Examples

### Current Events Research
```
/research "latest quantum computing breakthroughs 2024"
→ Tavily search with time_range=month
→ Parallel searches: IBM, Google, research papers
→ Extract and synthesize findings
→ Confidence: 85%, 15 sources (Tier 1: 8, Tier 2: 7)
```

### Technical Deep Dive
```
/research "distributed consensus algorithms comparison" --depth deep
→ Multi-hop: algorithms → implementations → benchmarks
→ 4 hops, 35 sources analyzed
→ Comprehensive analysis with code examples
→ Confidence: 90%, academic focus
```

### Market Analysis
```
/research "AI coding assistants competitive landscape" --depth exhaustive
→ Parallel: feature comparison, pricing, user reviews
→ Playwright for dynamic content extraction
→ 5 hops, 50+ sources
→ Complete market intelligence report
```

## Quality Standards

**Search Efficiency**:
- Parallel execution default
- <500ms per search average
- 3-5 concurrent searches
- Intelligent rate limit management

**Evidence Quality**:
- Multiple source verification
- Credibility scoring applied
- Contradictions identified
- Uncertainty acknowledged

**Report Quality**:
- Clear executive summary
- Proper source citations
- Confidence levels specified
- Actionable insights provided

---

**Execute comprehensive research now with Tavily MCP, parallel-first execution, and evidence-based synthesis.**
