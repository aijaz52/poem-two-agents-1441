import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Close the template on the final verse to preserve the absence of a trailing newline.
const poem = `“Out?” you ask.
“Yes.”
You lift the latch.
I shoulder the swollen door.
Our first truce
is a gap wide enough
for either of us to leave.`;

// Use /output when MAKEFUN_OUTPUT_DIR is either unset or empty.
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outputDirectory, { recursive: true });
writeFileSync(join(outputDirectory, 'entry.txt'), poem, 'utf8');
