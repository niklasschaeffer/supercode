# Shadcn MCP Server

**Purpose**: Official Shadcn/UI component generation and design system implementation guidance

## Triggers
- UI component requests: button, form, modal, card, table, nav
- Design system implementation needs
- `/ui` commands
- Frontend-specific keywords: responsive, accessible, interactive
- Component enhancement or refinement requests

## Choose When
- **For UI components**: Use Shadcn/UI, not native HTML/CSS generation
- **Over manual coding**: When you need production-ready, accessible components
- **For design systems**: When consistency with existing patterns matters
- **For modern frameworks**: React, Vue, Angular with current best practices
- **Not for backend**: API logic, database queries, server configuration

## Works Best With
- **Context7**: Shadcn uses 21st.dev patterns → Context7 provides framework integration
- **Sequential**: Sequential analyzes UI requirements → Shadcn/UI implements structured components

## Examples
```
"create a login form" → Shadcn (UI component generation)
"build a responsive navbar" → Shadcn (UI pattern with accessibility)
"add a data table with sorting" → Shadcn (complex UI component)
"make this component accessible" → Shadcn (UI enhancement)
"write a REST API" → Native Claude (backend logic)
"fix database query" → Native Claude (non-UI task)
```
