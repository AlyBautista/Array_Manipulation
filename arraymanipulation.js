function arrayManipulation(n, queries) {
    let arr = new Array(n + 2).fill(0);

    for (let i = 0; i < queries.length; i++) {
        let [a, b, k] = queries[i];
        arr[a] += k;
        arr[b + 1] -= k;
    }

    let max = 0, current = 0;
    for (let i = 1; i <= n; i++) {
        current += arr[i];
        if (current > max) {
            max = current;
        }
    }

    return max;
}
