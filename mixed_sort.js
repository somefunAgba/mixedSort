"use strict";

/**
 * @param raw_array
 * @returns {*|Array.<T>}
 * Filters out NANs,
 * then sorts to odd and even ascending order.
 */
function mixedSort(raw_array) {
    raw_array = raw_array.filter(
        function (array_val) {
            return typeof array_val === "number"; // !== ''string''
        }
    );

    raw_array.sort(
        function (i, j) {
            if (i % 2 === 0 && j % 2 === 0) {
                return i - j;
            } else if (i % 2 === 0) {
                return 1;
            } else if (j % 2 === 0) {
                return -1;
            } else {
                return i - j;
            }
        }
    );
    return raw_array;
}

// language=ECMAScript 6
/**
 * @param raw_array
 * @returns {Array.<T>}
 * Filters out NANs,
 * Filters, Stores, and Sorts Even numbers
 * Filters, Stores, and Sorts Odd numbers
 * Concatenates Odd and Even array.
 */
function mixedSortConcat(raw_array) {
    raw_array = raw_array.filter(
        function (array_val) {
            return typeof array_val === "number"; // !== ''string''
        }
    );

    const rawE_array = raw_array.filter(
        function (array_val) {
            return array_val % 2 === 0;
        }
    );
    rawE_array.sort((i, j) => i - j);

    const rawO_array = raw_array.filter(
        function (array_val) {
            return array_val % 2 !== 0;
        }
    );
    rawO_array.sort((i, j) => i - j);

    return rawO_array.concat(rawE_array);
}

// Tests
console.log(mixedSort([1, 2, 9, "5", "abc", 77, 99, 3, 8, 33, 456, "2biz", 6, 5, "9", "6uy8i"]));
console.log(mixedSortConcat([1, 2, 9, "5", "abc", 77, 99, 3, 8, 33, 456, "2biz", 6, 5, "9", "6uy8i"]));