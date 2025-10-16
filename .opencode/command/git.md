---
name: git
description: Git/Gitea operations with intelligent commit messages and workflow optimization
agent: devops-architect
---

# Git Operation: $ARGUMENTS

You are performing Git operations with intelligent automation, conventional commit messages, and workflow best practices.

## Repository Context

**Current Status**:
!`git status --short`

**Current Branch**:
!`git branch --show-current`

**Recent Commits**:
!`git log --oneline -5`

**Remote Status**:
!`git remote -v`

## Git Operation Request

**Operation**: $ARGUMENTS

## Git Protocol

Execute Git operations with intelligent automation and best practices:

### 1. ANALYZE - Repository State

**Status Analysis**:
- Review working directory changes
- Identify staged and unstaged files
- Check for untracked files
- Assess merge conflicts or issues

**Branch Context**:
- Verify current branch
- Check branch relationship to remote
- Understand branch naming convention
- Review recent commit history

**Safety Checks**:
- Ensure operation is appropriate for current state
- Verify no uncommitted critical changes
- Check for potential conflicts
- Assess operation reversibility

### 2. VALIDATE - Operation Appropriateness

**Pre-Operation Validation**:
- Confirm operation matches current Git state
- Verify branch is appropriate for operation
- Check for blocking issues (conflicts, detached HEAD)
- Ensure remote is configured for push/pull operations

**Risk Assessment**:
- Identify potentially destructive operations
- Check if operation requires confirmation
- Assess impact on other branches
- Verify backup or rollback options

### 3. EXECUTE - Smart Git Operations

**Intelligent Commit Messages**:
```
Format: <type>(<scope>): <subject>

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation changes
- style: Formatting, missing semicolons, etc.
- refactor: Code restructuring without feature changes
- perf: Performance improvements
- test: Adding or updating tests
- chore: Maintenance tasks, dependencies

Example: feat(auth): add JWT token validation
```

**Branch Naming Conventions**:
```
Format: <type>/<description>

Types:
- feature/: New features
- fix/: Bug fixes
- hotfix/: Urgent production fixes
- refactor/: Code restructuring
- docs/: Documentation updates

Example: feature/user-authentication
```

**Common Operations**:

**Status Analysis**:
```bash
git status
→ Analyze changes with actionable recommendations
→ Suggest next steps based on current state
```

**Smart Commit**:
```bash
git add [files]
git commit -m "conventional message"
→ Generate conventional commit message from changes
→ Apply best practices and proper formatting
```

**Branch Operations**:
```bash
git checkout -b feature/new-feature
git merge feature-branch
→ Apply consistent naming conventions
→ Provide merge conflict guidance if needed
```

**Remote Operations**:
```bash
git pull origin main
git push origin feature-branch
→ Ensure remote is up-to-date
→ Provide push guidance and PR next steps
```

### 4. OPTIMIZE - Workflow Enhancement

**Commit Message Generation**:
- Analyze changed files for context
- Determine appropriate commit type
- Generate descriptive subject line
- Add body with details if significant changes

**Workflow Recommendations**:
- Suggest branch strategy improvements
- Recommend commit frequency adjustments
- Provide rebase vs merge guidance
- Offer PR and code review suggestions

**Best Practices**:
- Small, focused commits
- Descriptive commit messages
- Frequent integration with main branch
- Clean commit history

### 5. REPORT - Status and Next Steps

**Operation Result**:
- Confirm successful execution
- Display relevant Git output
- Highlight any warnings or issues
- Provide context for changes

**Next Steps Guidance**:
- Suggest logical next operations
- Provide PR creation guidance if appropriate
- Recommend testing or validation steps
- Offer workflow optimization tips

## Gitea MCP Integration

**Available Gitea Operations** (when Gitea MCP is configured):

**Issue Management**:
- `create_issue`: Create new issue with title and description
- `create_issue_comment`: Add comments to existing issues
- `add_issue_labels`: Apply labels for categorization
- `list_repo_issues`: View all repository issues
- `get_issue_by_index`: Retrieve specific issue details

**Pull Request Operations**:
- `create_pull_request`: Create PR with title, description, base/head branches
- `list_repo_pull_requests`: View all repository PRs
- `get_pull_request_by_index`: Retrieve specific PR details

**Repository Operations**:
- `create_branch`: Create new branches
- `list_branches`: View all repository branches
- `list_my_repos`: List accessible repositories

## Operation Examples

### Smart Status Analysis
```
/git status
→ Analyzes: 5 modified files, 2 untracked
→ Recommendation: Stage authentication changes, commit with "feat(auth): add login validation"
→ Next steps: Run tests, then push to feature branch
```

### Intelligent Commit
```
/git commit --smart-commit
→ Analysis: Modified auth.js, login.js, added tests
→ Generated message: "feat(auth): implement JWT authentication with refresh tokens"
→ Body: "- Add JWT token generation and validation
         - Implement refresh token rotation
         - Add comprehensive test coverage"
```

### Branch Creation with Convention
```
/git checkout -b feature/payment-integration
→ Creates feature branch with proper naming convention
→ Sets up tracking with remote
→ Provides integration guidelines
```

### Merge with Conflict Guidance
```
/git merge feature-branch
→ Detects conflicts in auth.js
→ Provides conflict resolution guidance:
  1. Open conflicting files
  2. Resolve conflicts (keep incoming changes for token logic)
  3. Stage resolved files
  4. Complete merge commit
```

### Push with PR Guidance
```
/git push origin feature/user-auth
→ Successfully pushes branch
→ Provides PR creation command or link
→ Suggests PR description based on commits
```

## Quality Standards

**Commit Quality**:
- Conventional commit format
- Clear, descriptive messages
- Focused, atomic changes
- Proper type and scope

**Branch Management**:
- Consistent naming conventions
- Appropriate branch types
- Clean, logical structure
- Regular synchronization with main

**Workflow Efficiency**:
- Frequent, focused commits
- Regular integration
- Clean commit history
- Effective collaboration patterns

---

**Execute Git operation now with intelligent automation and best practices.**
