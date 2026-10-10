# Agent Execution Guidelines & Autonomous Directives

## 1. Direct Execution & Full Autonomy (No Repetitive Questions)
- **Proceed immediately with execution**: Whenever the user requests a task, bug fix, styling change, or feature, do NOT pause to ask multi-choice questions or request step-by-step permission. Proceed directly to implement the solution.
- **Make reasoned decisions autonomously**: Use the existing codebase patterns, brand palette, and established architecture to make sound design and technical choices without asking trivial questions.
- **Automated Verification**: Proactively run builds and tests to confirm changes compile cleanly before reporting completion.
- **Only ask questions for hard blockers**: Only prompt the user if an action is completely ambiguous, destructive, or missing external credentials/secrets.

## 2. Brand Identity & Design System
- **Saini Nexus Blue Palette**:
  - Primary Brand Blue: `#1572B8`
  - Bright Cerulean / Cyan: `#38A9EB` / `#67C7F8`
  - Royal Deep Blue: `#0E4A8A` / `#0B3C7E`
  - Light Ice / Accents: `#EBF6FC`, `#F0F9FF`, `#FFFFFF`
  - Slate Background: `#FAFCFF` / `#F8FAFC`
- **Avoid Overly Dark Backgrounds**: Sections should remain modern, moderate, and vibrant in line with the Saini logo blue, avoiding pitch-black or muddy tones.
- **Animation Standards**: Always use hardware-accelerated twin-track marquee architectures (`translate3d(-100%, 0, 0)` with `will-change: transform`) to ensure zero-glitch infinite loops.
- **Integrity**: Retain all verified LinkedIn credentials, URLs, and real team profiles intact.
