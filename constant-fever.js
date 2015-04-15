// LOUSY CODE:

due += 8 * 24 * 3600e3; // eight days

// SUPREME CODE:

// duration.js:

var DURATION = (function() {
    self = {};
    self.MILLISECONDS_IN_SECOND = 1000;
    self.MILLISECONDS_IN_MINUTE = 60 * self.MILLISECONDS_IN_SECOND;
    self.MILLISECONDS_IN_HOUR   = 60 * self.MILLISECONDS_IN_MINUTE;
    self.MILLISECONDS_IN_DAY    = 24 * self.MILLISECONDS_IN_HOUR;
    self.MILLISECONDS_IN_MONTH  = 30 * self.MILLISECONDS_IN_DAY;
    self.MILLISECONDS_IN_YEAR   = 365 * self.MILLISECONDS_IN_MONTH;
    return self;
})();

// myCode.js:

due += 8 * DURATION.MILLISECONDS_IN_DAY;

// CONCLUSION: Rather than trying to explain conversion computation in the comments,
// extract conversion constants and (re)use them across your codebase.
