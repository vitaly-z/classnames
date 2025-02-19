import {expectError} from 'tsd';
import classNames from '..';

// default
classNames.default('foo');
classNames('foo');
classNames(null);
classNames(undefined);
classNames(true);
classNames(false);
classNames(42);
classNames({ conditional: true });
classNames({ conditional: {} });
classNames({ conditional: Symbol() });
classNames([]);
classNames([['bar', null, undefined, true, false, 1234]]);
classNames(['bar', null, undefined, true, false, 1234]);
classNames('bar', null, undefined, true, false, 1234);
classNames('bar', ['abc', { foo: true }]);
classNames('bar', ['abc', { foo: true }], { def: false, ijk: 1234 });
classNames('abc', 1234, true, false, undefined, null, { foo: true }, ['abc', 1234, true, false, undefined, null, { foo: true }]);
classNames('abc', 1234, true, false, undefined, null, { foo: true }, ['abc', 1234, true, false, undefined, null, { foo: true }], ['abc', 1234, true, false, undefined, null, { foo: true }] as const);

expectError(classNames(Symbol()));
expectError(classNames([Symbol()]));
expectError(classNames([[Symbol()]]));

// should match tests/index.js
classNames('c', ['a', 'b']);
classNames('', 'b', {}, '');
classNames('a', 0, null, undefined, true, 1, 'b');
classNames('a', [[]]);
classNames('a', []);
classNames('c', ['a', 'b']);
classNames(['a', 'b']);
classNames(['a', 'b'], 'c');
classNames(['a', 'b'], ['c', 'd']);
classNames(['a', 0, null, undefined, false, true, 'b']);
classNames(['a', ['b', 'c']]);
classNames(['a', ['b', ['c', {d: true}]]]);
classNames(['a', {b: true, c: false}]);
classNames({a: true}, 'b', 0);
classNames({}, Infinity, [{}, []]);
