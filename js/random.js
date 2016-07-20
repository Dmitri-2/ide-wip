"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_random() {
  setModuleName("random");
  this.definitionModule = "random";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_random_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_random_outer0;
  setLineNumber(2);    // compilenode method
  var func1 = function(argcv) {    // method between0And1
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("random");
    setLineNumber(5);    // compilenode call
       // start native code from line 5
    var result = GraceDone;
        return new GraceNum(Math.random());
    var nat2 = result;
       // end native code insertion
    if (!Grace_isTrue(callmethod(var_Number, "match(1)", [1], nat2)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("result of method between0And1 does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    return nat2;
  };
  func1.paramCounts = [0];
  this.methods["between0And1"] = func1;
  func1.definitionLine = 2;
  func1.definitionModule = "random";
  setLineNumber(8);    // compilenode method
  var func3 = function(argcv) {    // method between(_)and(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_m = arguments[curarg];
    curarg++;
    var var_n = arguments[curarg];
    curarg++;
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_Number, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in between (arg list 1), which corresponds to parameter m, does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    curarg++;
    if (!Grace_isTrue(callmethod(var_Number, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in and (arg list 2), which corresponds to parameter n, does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("random");
    setLineNumber(10);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call6 = callmethodChecked(this, "between0And1", []);
    var diff10 = callmethodChecked(var_n, "-(1)", [1], var_m);
    var prod12 = callmethodChecked(diff10, "*(1)", [1], call6);
    var opresult14 = callmethodChecked(prod12, "+(1)", [1], var_m);
    if (!Grace_isTrue(callmethod(var_Number, "match(1)", [1], opresult14)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("result of method between(_)and(_) does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    return opresult14;
  };
  func3.paramTypes = [];
  func3.paramTypes.push([type_Number, "m"]);
  func3.paramTypes.push([type_Number, "n"]);
  func3.paramCounts = [1, 1];
  this.methods["between(1)and(1)"] = func3;
  func3.definitionLine = 8;
  func3.definitionModule = "random";
  setLineNumber(13);    // compilenode method
  var func15 = function(argcv) {    // method integerIn(_)to(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_m = arguments[curarg];
    curarg++;
    var var_n = arguments[curarg];
    curarg++;
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_Number, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in integerIn (arg list 1), which corresponds to parameter m, does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    curarg++;
    if (!Grace_isTrue(callmethod(var_Number, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in to (arg list 2), which corresponds to parameter n, does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("random");
    setLineNumber(15);    // compilenode member
    // call case 6: other requests
    // call case 4: self request
    onSelf = true;
    var call19 = callmethodChecked(this, "between0And1", []);
    var diff24 = callmethodChecked(var_n, "-(1)", [1], var_m);
    var opresult26 = callmethodChecked(diff24, "+(1)", [1], new GraceNum(1));
    var prod28 = callmethodChecked(opresult26, "*(1)", [1], call19);
    var call29 = callmethodChecked(prod28, "truncated", []);
    var opresult31 = callmethodChecked(call29, "+(1)", [1], var_m);
    if (!Grace_isTrue(callmethod(var_Number, "match(1)", [1], opresult31)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("result of method integerIn(_)to(_) does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    return opresult31;
  };
  func15.paramTypes = [];
  func15.paramTypes.push([type_Number, "m"]);
  func15.paramTypes.push([type_Number, "n"]);
  func15.paramCounts = [1, 1];
  this.methods["integerIn(1)to(1)"] = func15;
  func15.definitionLine = 13;
  func15.definitionModule = "random";
  return this;
}
gracecode_random.imports = [];
if (typeof gctCache !== "undefined")
  gctCache['random'] = "classes:\nconfidential:\nfresh-methods:\nmodules:\npath:\n random\npublic:\n between(1)and(1)\n between0And1\n integerIn(1)to(1)\ntypes:\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["random"] = [
    "",
    "method between0And1 -> Number {",
    "    // A pseudo-random number between in the interval [0..1)",
    "    native \"c\" code ‹    return alloc_Float64((double)rand() / RAND_MAX);›",
    "    native \"js\" code ‹    return new GraceNum(Math.random());›",
    "}",
    "",
    "method between (m: Number) and (n: Number) -> Number {",
    "    // A pseudo-random number in the interval [m..n)",
    "    ((n - m) * between0And1) + m",
    "}",
    "",
    "method integerIn (m: Number) to (n: Number) -> Number {",
    "    // A pseudo-random integer in the interval [m..n]",
    "    ((n - m + 1) * between0And1).truncated + m",
    "}" ];
}
if (typeof global !== "undefined")
  global.gracecode_random = gracecode_random;
if (typeof window !== "undefined")
  window.gracecode_random = gracecode_random;
