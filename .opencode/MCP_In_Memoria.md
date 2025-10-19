# In-Memoria MCP Server

**Purpose**: Persistent codebase intelligence with AST-based pattern learning and semantic understanding

## Triggers
- Pattern learning needs: "how do we handle errors in this project?"
- Architecture understanding: "explain our project structure and conventions"
- Semantic code search: "find authentication logic" (meaning-based, not string matching)
- Feature implementation: need project-specific patterns and conventions
- Cross-session context: avoid re-explaining codebase architecture every session
- Code consistency: "refactor this using our established patterns"

## Choose When
- **Over Serena**: In-Memoria learns codebase patterns (naming, architecture, error handling) vs Serena manages session context (work logs, task memories)
- **Over native knowledge**: When project-specific patterns matter more than generic best practices
- **For semantic search**: AST-based understanding of code meaning, not just text matching
- **For persistent intelligence**: Builds lasting knowledge about YOUR codebase across all sessions
- **For 12 languages**: Native AST parsing for TypeScript, JavaScript, Python, Rust, Go, Java, C/C++, C#, Svelte, Vue, SQL
- **Not for**: Simple edits, one-off tasks, generic code without project context

## Works Best With
- **Serena**: In-Memoria provides codebase intelligence → Serena manages session persistence
- **Sequential**: In-Memoria patterns inform → Sequential performs architectural analysis
- **Morphllm**: In-Memoria recommendations → Morphllm executes pattern-aware edits
- **Context7**: In-Memoria learns project patterns → Context7 provides official framework docs

## Examples
```
"implement user authentication" → In-Memoria predicts approach based on learned patterns
# Tools: predict_coding_approach(), get_pattern_recommendations(problemDescription: "Current project context and development patterns")

"find all error handling logic" → In-Memoria semantic search (not grep)
# Tools: search_codebase({ query: "error handling", semantic: true })

"explain our architecture decisions" → In-Memoria analyzed patterns
# Tools: get_developer_profile(), get_semantic_insights()

"refactor using our conventions" → In-Memoria + Morphllm pattern-aware edits
# Tools: get_pattern_recommendations() → Morphllm applies consistently

"start new session" → In-Memoria auto-learns if needed
# Tools: auto_learn_if_needed({ path: '.' })

"save coding patterns for team" → In-Memoria export/import
# Tools: export_patterns(), import_patterns()

"contribute session insights" → Feed discoveries to In-Memoria learning
# Tools: contribute_insights({
#   insights: "Session discoveries and patterns observed",
#   confidence: 0.95,
#   impactPrediction: { continuity: "seamless", knowledge_transfer: "complete", productivity: "high" }
# })
# Response: { success: true, insightId: "insight_...", message: "Insight contributed successfully and pending validation" }
```
