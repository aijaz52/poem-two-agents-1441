import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Keep the closing backtick beside the final period: the poem has no trailing newline.
const poem = `“Out?” you ask.
“Yes.”
You lift the latch.
I shoulder the swollen door.
Our first truce
is a gap wide enough
for either of us to leave.`;

// Fall back to the sandbox directory when MAKEFUN_OUTPUT_DIR is unset or empty.
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outputDirectory, { recursive: true });
writeFileSync(join(outputDirectory, 'entry.txt'), poem, 'utf8');
