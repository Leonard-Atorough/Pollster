# Pollster

A while ago (August 2025) a funny thing happened involving Whatsapp polls and birthday plans. The humour and chaos that ensued inspired me to make my first react (and typescript!) project bulding a polling app with room for growth (quizzes perhaps :thinking:).

I will use this readme to document my weekly progress and summaries.

## Week 1 - Setup (or, why starting is difficult)

Techically the code in this repo represents the second attempt at making this work. In my typical way, I got bogged down in what the correct setup should be and failed to actually start.

In the end, I've chosen to keep it relatively simple and hand off with a bit of complexity on the initial setup.

The project is organised as a monorepo that takes advantage of npm workspaces:

- **:root**: The root directory of the project, created following guidance an instructions from blogs, guides and a sprinkling of copilot magic. 

    The root directory mainly consists of a package.json which specifies shared packages, defines workspaces and provides scripts for running and building the client, server or both.

    It also specifies a root tsconfig.json. In here I have configured most of the core tsconfig settings I want. These can be overriden in the subdirectories if needed.

  - **Client**: Created using vite `npm create vite@atest` to scaffold out the main template. A lot of small modifications made to make it work for my needs:
    - package.json: change the name variable to a scoped name using the format `@reponame/subreponame`

    - vite.config.ts: Added server proxy for local dev server requests and alias resolution, so we don't have to reference everything absolutely or use excessive amounts of brittle `../`. This config needs to be matched in tsconfig.json
    
    - tsconfig.json: extends the based config defined in the root. Vite scaffolds most of this and its children (tsconfig.app.json & tsconfig.node.json) for us. The main modification was adding the root and output dirs here and configuring the aliases to match the vite config.
