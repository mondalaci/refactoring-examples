// instead of

if (!conditionA && !conditionB && !conditionC) {
    doA();
} else {
    doB();
}

// simplify as

if (conditionA || conditionB || conditionC) {
    doB();
} else {
    doA();
}
