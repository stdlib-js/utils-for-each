/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var noop = require( '@stdlib/utils-noop' );
var Float64Array = require( '@stdlib/array-float64' );
var Float32Array = require( '@stdlib/array-float32' );
var forEach = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof forEach, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a collection', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {},
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			forEach( value, noop );
		};
	}
});

tape( 'the function throws an error if not provided a function to invoke', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			forEach( [ 1, 2, 3 ], value );
		};
	}
});

tape( 'if provided an empty collection, the function never invokes a provided function', function test( t ) {
	var arr = [];

	function foo() {
		t.fail( 'should not be invoked' );
	}

	forEach( arr, foo );

	t.deepEqual( arr, [], 'expected result' );
	t.end();
});

tape( 'the function returns the input collection', function test( t ) {
	var arr;
	var out;

	function foo() {
		t.pass( 'invoked provided function' );
	}

	arr = [ 1, 2, 3 ];

	out = forEach( arr, foo );

	t.strictEqual( out, arr, 'returns input collection' );
	t.end();
});

tape( 'the function invokes a provided function for each element in a collection (array)', function test( t ) {
	var arr;
	var out;

	arr = [ 1, 2, 3 ];
	out = [ 0, 0, 0 ];

	function copy( value, index ) {
		out[ index ] = value;
	}

	forEach( arr, copy );

	t.deepEqual( out, [ 1, 2, 3 ], 'expected result' );
	t.end();
});

tape( 'the function invokes a provided function for each element in a collection (array-like object)', function test( t ) {
	var expected;
	var arr;
	var out;

	arr = {
		'length': 3,
		'0': 1,
		'1': 2,
		'2': 3
	};
	out = {
		'length': 3,
		'0': 0,
		'1': 0,
		'2': 0
	};

	function copy( value, index ) {
		out[ index ] = value;
	}

	forEach( arr, copy );

	expected = {
		'length': 3,
		'0': 1,
		'1': 2,
		'2': 3
	};

	t.deepEqual( out, expected, 'expected result' );
	t.end();
});

tape( 'the function invokes a provided function for each element in a collection (typed array)', function test( t ) {
	var arr;
	var out;

	arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	out = new Float32Array( [ 0.0, 0.0, 0.0 ] );

	function copy( value, index ) {
		out[ index ] = value;
	}

	forEach( arr, copy );

	t.strictEqual( out[ 0 ], 1.0, 'expected result' );
	t.strictEqual( out[ 1 ], 2.0, 'expected result' );
	t.strictEqual( out[ 2 ], 3.0, 'expected result' );

	t.end();
});

tape( 'the function supports providing an execution context', function test( t ) {
	var ctx;
	var arr;

	function sum( value ) {
		/* eslint-disable no-invalid-this */
		this.sum += value;
		this.count += 1;
	}

	ctx = {
		'sum': 0,
		'count': 0
	};
	arr = [ 1.0, 2.0, 3.0 ];

	forEach( arr, sum, ctx );

	t.strictEqual( ctx.sum/ctx.count, 2.0, 'expected result' );

	t.end();
});

tape( 'the function provides basic support for dynamic arrays', function test( t ) {
	var arr;
	var out;

	arr = [ 1, 2, 3 ];
	out = [];

	function copy( value, index, collection ) {
		out.push( value );
		if ( index === collection.length-1 && collection.length < 10 ) {
			collection.push( index+2 );
		}
	}

	forEach( arr, copy );

	t.deepEqual( arr, [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ], 'expected result' );
	t.deepEqual( out, [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ], 'expected result' );
	t.end();
});

tape( 'the function does not skip empty elements', function test( t ) {
	var expected;
	var arr;

	arr = [ 1, , , 4 ]; // eslint-disable-line no-sparse-arrays
	expected = [ 1, void 0, void 0, 4 ];

	function verify( value, index ) {
		t.strictEqual( value, expected[ index ], 'provides expected value' );
	}

	forEach( arr, verify );
	t.end();
});
