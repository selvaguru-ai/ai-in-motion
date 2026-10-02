# AI, in motion

A responsive visual learning site for the supplied AI syllabus. Fourteen lessons cover embeddings, attention, context windows, training, prompting, RAG, approach selection, a sample document lab, tools, Salesforce MCP, agents, evaluation, MCP tool tests, and the requested reading list.

## Run locally

```sh
npm run dev
```

Open http://localhost:3000. Requires Node.js for building and Python 3 for the local server. No npm packages are required.

## Build

```sh
npm run build
```

The four public files are copied into `dist/`.

## Publish on GitHub and Vercel

Create a new repository, then run these commands from this folder:

```sh
git init -b main
git add .
git commit -m "Build interactive AI learning playground"
git remote add origin https://github.com/YOUR_USERNAME/ai-in-motion.git
git push -u origin main
```

Import the repository into Vercel. The included `vercel.json` sets the build command to `npm run build`, output to `dist`, and framework to Other. No keys, paid APIs, or database are needed. Vercel's GitHub integration can then deploy future pushes automatically.

## What the demos do

All demos run locally in the browser. They use original, illustrative data; they do not call an LLM. The embedding map and attention weights are made up, context behavior is an illustration, and evaluation costs are not real benchmarks. The RAG lab uses fixed sample PDF text and does not accept or parse PDF uploads. The MCP lab is a toy description check, not a measurement of Claude. Both hands-on labs include real implementation/test steps.

Navigation uses URL hashes, and completion is session-only. External fonts have system fallbacks. The design supports mobile screens, keyboard use, manual animation steps, and reduced motion. Optional, feature-detected WebMCP tools expose lesson navigation and state reading in browsers supporting document.modelContext.

## Sources

- https://www.3blue1brown.com/lessons/gpt/
- https://www.3blue1brown.com/lessons/attention/
- https://jalammar.github.io/illustrated-transformer/
- https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview
- https://arxiv.org/abs/2307.03172
- https://modelcontextprotocol.io/docs/learn/architecture
- https://www.anthropic.com/engineering/building-effective-agents
- https://www.anthropic.com/engineering/contextual-retrieval

Original teaching text and diagrams are included; the original articles and videos are linked, not copied.
