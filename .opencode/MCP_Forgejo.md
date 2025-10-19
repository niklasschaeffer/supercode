# Forgejo MCP Server

**Purpose**: API-based repository management for Forgejo/Gitea instances and Codeberg.org

## Triggers
- Repository operations: create, fork, search, list repositories
- Issue and Pull Request management workflows
- Branch operations: create, delete, list branches
- File content operations: read, create, update, delete files
- Codeberg.org or self-hosted Forgejo/Gitea interactions
- Git workflow automation via API instead of local commands

## Choose When
- **Over gh CLI**: For Forgejo/Gitea/Codeberg instances (not GitHub)
- **Over local git**: For API-based repository management and automation
- **For self-hosted**: When using Forgejo or Gitea instead of GitHub
- **For Codeberg**: Codeberg.org repository and collaboration management
- **For automation**: Scripted repository, issue, and PR workflows via MCP
- **Not for**: GitHub operations (use gh CLI), local git commands (use native git)

## Works Best With
- **Serena**: Forgejo manages repositories → Serena manages code intelligence and session context
- **Sequential**: Forgejo provides repository context → Sequential analyzes architecture
- **In-Memoria**: Forgejo repository operations → In-Memoria learns from codebase patterns

## Configuration
Requires `FORGEJO_URL` and `FORGEJO_ACCESS_TOKEN` environment variables

## Examples
```
"create new repository" → Forgejo creates repo on instance
# Tools: create_repo({ name, description, private }), fork_repo({ owner, repo })

"create issue for bug" → Forgejo creates issue
# Tools: create_issue({ owner, repo, title, body })

"create pull request" → Forgejo creates PR
# Tools: create_pull_request({ owner, repo, title, head, base, body })

"get file content from repo" → Forgejo retrieves file
# Tools: get_file_content({ owner, repo, path, ref })

"create new branch" → Forgejo creates branch
# Tools: create_branch({ owner, repo, branch, old_branch })

"search repositories by topic" → Forgejo searches repos
# Tools: search_repos({ keyword, sort, order })
```
