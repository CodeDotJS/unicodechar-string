import test from 'ava';
import fn from './';

const str = 'I wish I were a \ud83e\udd84, so I could stab idiots with my head!';

test(str, async t => {
	const bud = await fn(str);

	t.is(bud, 'I wish I were a 🦄, so I could stab idiots with my head!');
});
