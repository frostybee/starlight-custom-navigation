---
"starlight-custom-navigation": patch
---

Fix keyboard shortcuts on macOS by using Cmd instead of Ctrl

On macOS, Ctrl+Arrow is captured by the system for Mission Control and never
reaches the browser. The shortcut handler now detects macOS at runtime and checks
Cmd (metaKey) instead of Ctrl. The tooltip chip updates to show "Cmd + →" on Mac and "Ctrl + →" elsewhere. No config change required.
