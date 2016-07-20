"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_notest() {
  setModuleName("notest");
  this.definitionModule = "notest";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_notest_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_notest_outer0;
  setLineNumber(6);    // compilenode identifier
  // call case 5: prelude request
  var call2 = callmethodChecked(var_prelude, "methods$object(1)", [0, 1], this);
  this.superobj = call2;
  if (call2.data) this.data = call2.data;
  if (call2.hasOwnProperty('_value'))
      this._value = call2._value;
  setLineNumber(8);    // compilenode method
  var func3 = function(argcv) {    // method assert(_)description(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_bb = arguments[curarg];
    curarg++;
    var var_str = arguments[curarg];
    curarg++;
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_Boolean, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in assert (arg list 1), which corresponds to parameter bb, does not have " + 
                callmethod(var_Boolean, "asString", [0])._value + "."));
    curarg++;
    if (!Grace_isTrue(callmethod(var_String, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in description (arg list 2), which corresponds to parameter str, does not have " + 
                callmethod(var_String, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("notest");
    return GraceDone;
  };
  func3.paramTypes = [];
  func3.paramTypes.push([type_Boolean, "bb"]);
  func3.paramTypes.push([type_String, "str"]);
  func3.paramCounts = [1, 1];
  this.methods["assert(1)description(1)"] = func3;
  func3.definitionLine = 8;
  func3.definitionModule = "notest";
  setLineNumber(10);    // compilenode method
  var func4 = function(argcv) {    // method deny(_)description(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_bb = arguments[curarg];
    curarg++;
    var var_str = arguments[curarg];
    curarg++;
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_Boolean, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in deny (arg list 1), which corresponds to parameter bb, does not have " + 
                callmethod(var_Boolean, "asString", [0])._value + "."));
    curarg++;
    if (!Grace_isTrue(callmethod(var_String, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in description (arg list 2), which corresponds to parameter str, does not have " + 
                callmethod(var_String, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("notest");
    return GraceDone;
  };
  func4.paramTypes = [];
  func4.paramTypes.push([type_Boolean, "bb"]);
  func4.paramTypes.push([type_String, "str"]);
  func4.paramCounts = [1, 1];
  this.methods["deny(1)description(1)"] = func4;
  func4.definitionLine = 10;
  func4.definitionModule = "notest";
  setLineNumber(12);    // compilenode method
  var func5 = function(argcv) {    // method assert(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_bb = arguments[curarg];
    curarg++;
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_Boolean, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in assert (arg list 1), which corresponds to parameter bb, does not have " + 
                callmethod(var_Boolean, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("notest");
    return GraceDone;
  };
  func5.paramTypes = [];
  func5.paramTypes.push([type_Boolean, "bb"]);
  func5.paramCounts = [1];
  this.methods["assert(1)"] = func5;
  func5.definitionLine = 12;
  func5.definitionModule = "notest";
  setLineNumber(14);    // compilenode method
  var func6 = function(argcv) {    // method deny(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_bb = arguments[curarg];
    curarg++;
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_Boolean, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in deny (arg list 1), which corresponds to parameter bb, does not have " + 
                callmethod(var_Boolean, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("notest");
    return GraceDone;
  };
  func6.paramTypes = [];
  func6.paramTypes.push([type_Boolean, "bb"]);
  func6.paramCounts = [1];
  this.methods["deny(1)"] = func6;
  func6.definitionLine = 14;
  func6.definitionModule = "notest";
  setLineNumber(16);    // compilenode method
  var func7 = function(argcv) {    // method assert(_)shouldBe(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_s1 = arguments[curarg];
    curarg++;
    var var_s2 = arguments[curarg];
    curarg++;
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_Object, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in assert (arg list 1), which corresponds to parameter s1, does not have " + 
                callmethod(var_Object, "asString", [0])._value + "."));
    curarg++;
    if (!Grace_isTrue(callmethod(var_Object, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in shouldBe (arg list 2), which corresponds to parameter s2, does not have " + 
                callmethod(var_Object, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("notest");
    return GraceDone;
  };
  func7.paramTypes = [];
  func7.paramTypes.push([type_Object, "s1"]);
  func7.paramTypes.push([type_Object, "s2"]);
  func7.paramCounts = [1, 1];
  this.methods["assert(1)shouldBe(1)"] = func7;
  func7.definitionLine = 16;
  func7.definitionModule = "notest";
  setLineNumber(18);    // compilenode method
  var func8 = function(argcv) {    // method assert(_)shouldntBe(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_s1 = arguments[curarg];
    curarg++;
    var var_s2 = arguments[curarg];
    curarg++;
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_Object, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in assert (arg list 1), which corresponds to parameter s1, does not have " + 
                callmethod(var_Object, "asString", [0])._value + "."));
    curarg++;
    if (!Grace_isTrue(callmethod(var_Object, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in shouldntBe (arg list 2), which corresponds to parameter s2, does not have " + 
                callmethod(var_Object, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("notest");
    return GraceDone;
  };
  func8.paramTypes = [];
  func8.paramTypes.push([type_Object, "s1"]);
  func8.paramTypes.push([type_Object, "s2"]);
  func8.paramCounts = [1, 1];
  this.methods["assert(1)shouldntBe(1)"] = func8;
  func8.definitionLine = 18;
  func8.definitionModule = "notest";
  setLineNumber(20);    // compilenode method
  var func9 = function(argcv) {    // method assert(_)shouldEqual(_)within(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_n1 = arguments[curarg];
    curarg++;
    var var_n2 = arguments[curarg];
    curarg++;
    var var_epsilon = arguments[curarg];
    curarg++;
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_Number, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in assert (arg list 1), which corresponds to parameter n1, does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    curarg++;
    if (!Grace_isTrue(callmethod(var_Number, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in shouldEqual (arg list 2), which corresponds to parameter n2, does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    curarg++;
    curarg++;
    // End argument checking
    setModuleName("notest");
    return GraceDone;
  };
  func9.paramTypes = [];
  func9.paramTypes.push([type_Number, "n1"]);
  func9.paramTypes.push([type_Number, "n2"]);
  func9.paramTypes.push([]);
  func9.paramCounts = [1, 1, 1];
  this.methods["assert(1)shouldEqual(1)within(1)"] = func9;
  func9.definitionLine = 20;
  func9.definitionModule = "notest";
  setLineNumber(22);    // compilenode method
  var func10 = function(argcv) {    // method assert(_)shouldRaise(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_b = arguments[curarg];
    curarg++;
    var var_desired = arguments[curarg];
    curarg++;
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_Block, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in assert (arg list 1), which corresponds to parameter b, does not have " + 
                callmethod(var_Block, "asString", [0])._value + "."));
    curarg++;
    curarg++;
    // End argument checking
    setModuleName("notest");
    return GraceDone;
  };
  func10.paramTypes = [];
  func10.paramTypes.push([type_Block, "b"]);
  func10.paramTypes.push([]);
  func10.paramCounts = [1, 1];
  this.methods["assert(1)shouldRaise(1)"] = func10;
  func10.definitionLine = 22;
  func10.definitionModule = "notest";
  setLineNumber(24);    // compilenode method
  var func11 = function(argcv) {    // method assert(_)shouldntRaise(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_b = arguments[curarg];
    curarg++;
    var var_undesired = arguments[curarg];
    curarg++;
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_Block, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in assert (arg list 1), which corresponds to parameter b, does not have " + 
                callmethod(var_Block, "asString", [0])._value + "."));
    curarg++;
    curarg++;
    // End argument checking
    setModuleName("notest");
    return GraceDone;
  };
  func11.paramTypes = [];
  func11.paramTypes.push([type_Block, "b"]);
  func11.paramTypes.push([]);
  func11.paramCounts = [1, 1];
  this.methods["assert(1)shouldntRaise(1)"] = func11;
  func11.definitionLine = 24;
  func11.definitionModule = "notest";
  setLineNumber(26);    // compilenode method
  var func12 = function(argcv) {    // method assert(_)hasType(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_s = arguments[curarg];
    curarg++;
    var var_desired = arguments[curarg];
    curarg++;
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_Object, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in assert (arg list 1), which corresponds to parameter s, does not have " + 
                callmethod(var_Object, "asString", [0])._value + "."));
    curarg++;
    if (!Grace_isTrue(callmethod(var_Type, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in hasType (arg list 2), which corresponds to parameter desired, does not have " + 
                callmethod(var_Type, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("notest");
    return GraceDone;
  };
  func12.paramTypes = [];
  func12.paramTypes.push([type_Object, "s"]);
  func12.paramTypes.push([type_Type, "desired"]);
  func12.paramCounts = [1, 1];
  this.methods["assert(1)hasType(1)"] = func12;
  func12.definitionLine = 26;
  func12.definitionModule = "notest";
  setLineNumber(28);    // compilenode method
  var func13 = function(argcv) {    // method deny(_)hasType(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_s = arguments[curarg];
    curarg++;
    var var_undesired = arguments[curarg];
    curarg++;
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_Object, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in deny (arg list 1), which corresponds to parameter s, does not have " + 
                callmethod(var_Object, "asString", [0])._value + "."));
    curarg++;
    if (!Grace_isTrue(callmethod(var_Type, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in hasType (arg list 2), which corresponds to parameter undesired, does not have " + 
                callmethod(var_Type, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("notest");
    return GraceDone;
  };
  func13.paramTypes = [];
  func13.paramTypes.push([type_Object, "s"]);
  func13.paramTypes.push([type_Type, "undesired"]);
  func13.paramCounts = [1, 1];
  this.methods["deny(1)hasType(1)"] = func13;
  func13.definitionLine = 28;
  func13.definitionModule = "notest";
  setLineNumber(30);    // compilenode method
  var func14 = function(argcv) {    // method assertType(_)describes(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_T = arguments[curarg];
    curarg++;
    var var_value = arguments[curarg];
    curarg++;
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_Type, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in assertType (arg list 1), which corresponds to parameter T, does not have " + 
                callmethod(var_Type, "asString", [0])._value + "."));
    curarg++;
    curarg++;
    // End argument checking
    setModuleName("notest");
    return GraceDone;
  };
  func14.paramTypes = [];
  func14.paramTypes.push([type_Type, "T"]);
  func14.paramTypes.push([]);
  func14.paramCounts = [1, 1];
  this.methods["assertType(1)describes(1)"] = func14;
  func14.definitionLine = 30;
  func14.definitionModule = "notest";
  setLineNumber(32);    // compilenode method
  var func15 = function(argcv) {    // method failBecause(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_reason = arguments[curarg];
    curarg++;
    setModuleName("notest");
    return GraceDone;
  };
  func15.paramCounts = [1];
  this.methods["failBecause(1)"] = func15;
  func15.definitionLine = 32;
  func15.definitionModule = "notest";
  setLineNumber(34);    // compilenode method
  var func16 = function(argcv) {    // method testSuiteNamed(_)with(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_name = arguments[curarg];
    curarg++;
    var var_block = arguments[curarg];
    curarg++;
    setModuleName("notest");
    return GraceDone;
  };
  func16.paramCounts = [1, 1];
  this.methods["testSuiteNamed(1)with(1)"] = func16;
  func16.definitionLine = 34;
  func16.definitionModule = "notest";
  setLineNumber(36);    // compilenode method
  var func17 = function(argcv) {    // method testSuite(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_block = arguments[curarg];
    curarg++;
    setModuleName("notest");
    return GraceDone;
  };
  func17.paramCounts = [1];
  this.methods["testSuite(1)"] = func17;
  func17.definitionLine = 36;
  func17.definitionModule = "notest";
  setLineNumber(38);    // compilenode method
  var func18 = function(argcv) {    // method test(_)by(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_name = arguments[curarg];
    curarg++;
    var var_block = arguments[curarg];
    curarg++;
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_String, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in test (arg list 1), which corresponds to parameter name, does not have " + 
                callmethod(var_String, "asString", [0])._value + "."));
    curarg++;
    curarg++;
    // End argument checking
    setModuleName("notest");
    return GraceDone;
  };
  func18.paramTypes = [];
  func18.paramTypes.push([type_String, "name"]);
  func18.paramTypes.push([]);
  func18.paramCounts = [1, 1];
  this.methods["test(1)by(1)"] = func18;
  func18.definitionLine = 38;
  func18.definitionModule = "notest";
  return this;
}
gracecode_notest.imports = [];
if (typeof gctCache !== "undefined")
  gctCache['notest'] = "classes:\nconfidential:\nfresh-methods:\nmodules:\npath:\n notest\npublic:\n AndPattern\n BaseType\n BasicPattern\n Binding\n BindingPattern\n Block0\n Block1\n Block2\n Block3\n BoundsError\n Cmd\n Collection\n ConcurrentModification\n Dictionary\n Enumerable\n ExceptionKind\n Expandable\n Extractable\n FailedMatch\n Fun\n Fun2\n Fun3\n Iterable\n Iterator\n IteratorExhausted\n List\n MatchAndDestructuringPattern\n MatchResult\n NoSuchObject\n OrPattern\n Pattern\n Point\n Proc\n Proc2\n Proc3\n RequestError\n Sequence\n Set\n Singleton\n SubobjectResponsibility\n SuccessfulMatch\n TypeIntersection\n TypeSubtraction\n TypeUnion\n TypeVariant\n UninitializedVariable\n VariablePattern\n WildcardPattern\n abstract\n alwaysEqual\n assert(1)\n assert(1)description(1)\n assert(1)hasType(1)\n assert(1)shouldBe(1)\n assert(1)shouldEqual(1)within(1)\n assert(1)shouldRaise(1)\n assert(1)shouldntBe(1)\n assert(1)shouldntRaise(1)\n assertType(1)describes(1)\n binding\n collection\n collections\n deny(1)\n deny(1)description(1)\n deny(1)hasType(1)\n dictionary(1)\n do(1)while(1)\n emptyDictionary\n emptyList\n emptySequence\n emptySet\n enumerable\n failBecause(1)\n for(1)and(1)do(1)\n indexable\n list(1)\n max(2)\n methods\n min(2)\n point2Dx(1)y(1)\n range\n repeat(1)times(1)\n required\n sequence(1)\n set(1)\n test(1)by(1)\n testSuite(1)\n testSuiteNamed(1)with(1)\n valueOf(1)\ntypes:\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["notest"] = [
    "// This module is a subsitute for the minitest dialect.",
    "// It does no testing at all.  It exists so that student code that",
    "// depends on minitest can be run by the instuctor under gUnit,",
    "// without getting confounding results from the minitest tests.",
    "",
    "inherits prelude.methods",
    "",
    "method assert(bb:Boolean) description(str:String) { }",
    "",
    "method deny(bb:Boolean) description(str:String) { }",
    "",
    "method assert(bb:Boolean) { }",
    "",
    "method deny(bb:Boolean) { }",
    "",
    "method assert(s1:Object) shouldBe (s2:Object) { }",
    "",
    "method assert(s1:Object) shouldntBe (s2:Object) { }",
    "",
    "method assert(n1:Number) shouldEqual (n2:Number) within (epsilon) { }",
    "",
    "method assert(b:Block) shouldRaise (desired) { }",
    "",
    "method assert(b:Block) shouldntRaise (undesired) { }",
    "",
    "method assert(s:Object) hasType (desired:Type) { }",
    "",
    "method deny(s:Object) hasType (undesired:Type) { }",
    "",
    "method assertType(T:Type) describes (value) { }",
    "",
    "method failBecause(reason) { }",
    "",
    "method testSuiteNamed (name) with (block) { }",
    "",
    "method testSuite (block) { }",
    "",
    "method test(name:String) by(block) { }",
    "" ];
}
if (typeof global !== "undefined")
  global.gracecode_notest = gracecode_notest;
if (typeof window !== "undefined")
  window.gracecode_notest = gracecode_notest;
