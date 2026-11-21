import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Preserve the poem's line breaks without adding a trailing newline.
const poem = `“Out?” you ask.
“Yes.”
You lift the latch.
I shoulder the swollen door.
Our first truce
is a gap wide enough
for either of us to leave.`;

// Use the sandbox's output directory, falling back to /output.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), poem, 'utf8');
