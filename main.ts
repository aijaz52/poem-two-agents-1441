import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The closing backtick sits on the last line to omit a trailing newline.
const poem = `“Out?” you ask.
“Yes.”
You lift the latch.
I shoulder the swollen door.
Our first truce
is a gap wide enough
for either of us to leave.`;

// An unset or empty output directory uses the sandbox default.
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outputDirectory, { recursive: true });
writeFileSync(join(outputDirectory, 'entry.txt'), poem, 'utf8');
