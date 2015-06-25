// instead of

if (!condition) {
    doA();
} else {
    doB();
}

// simplify as

if (condition) {
    doB();
} else {
    doA();
}
