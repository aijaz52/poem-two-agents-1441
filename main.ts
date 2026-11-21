import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Keep the closing backtick on the last line so the poem has no trailing newline.
const poem = `“Out?” you ask.
“Yes.”
You lift the latch.
I shoulder the swollen door.
Our first truce
is a gap wide enough
for either of us to leave.`;

// An unset or empty MAKEFUN_OUTPUT_DIR selects the sandbox's /output directory.
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outputDirectory, { recursive: true });
writeFileSync(join(outputDirectory, 'entry.txt'), poem, 'utf8');
