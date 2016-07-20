"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_minitest() {
  setModuleName("minitest");
  this.definitionModule = "minitest";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_minitest_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_minitest_outer0;
  setLineNumber(1);    // compilenode import
  // Import of gUnit as gu
  if (typeof gracecode_gUnit == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module gUnit'));
  var var_gu = do_import("gUnit", gracecode_gUnit);
  var func1 = function(argcv) {    // method gu
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("minitest");
    // gu is a simple accessor - elide try ... catch
    return var_gu;
  };
  func1.paramCounts = [0];
  this.methods["gu"] = func1;
  func1.definitionLine = 1;
  func1.definitionModule = "minitest";
  func1.debug = "import";
  func1.confidential = true;
  setModuleName("minitest");
  setLineNumber(3);    // compilenode identifier
  // call case 5: prelude request
  var call3 = callmethodChecked(var_prelude, "methods$object(1)", [0, 1], this);
  this.superobj = call3;
  if (call3.data) this.data = call3.data;
  if (call3.hasOwnProperty('_value'))
      this._value = call3._value;
  setLineNumber(14);    // compilenode method
  var func4 = function(argcv) {    // method numberOfErrorsToRerun
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("minitest");
    // call case 6: other requests
    var call6 = callmethodChecked(var_gu, "numberOfErrorsToRerun", []);
    if (!Grace_isTrue(callmethod(var_Number, "match(1)", [1], call6)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("result of method numberOfErrorsToRerun does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    return call6;
  };
  func4.paramCounts = [0];
  this.methods["numberOfErrorsToRerun"] = func4;
  func4.definitionLine = 14;
  func4.definitionModule = "minitest";
  setLineNumber(15);    // compilenode method
  var func7 = function(argcv) {    // method numberOfErrorsToRerun:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_n = arguments[curarg];
    curarg++;
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_Number, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in numberOfErrorsToRerun:= (arg list 1), which corresponds to parameter n, does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("minitest");
    setLineNumber(16);    // compilenode identifier
    // call case 6: other requests
    var call9 = callmethodChecked(var_gu, "numberOfErrorsToRerun:=(1)", [1], var_n);
    return call9;
  };
  func7.paramTypes = [];
  func7.paramTypes.push([type_Number, "n"]);
  func7.paramCounts = [1];
  this.methods["numberOfErrorsToRerun:=(1)"] = func7;
  func7.definitionLine = 15;
  func7.definitionModule = "minitest";
  setLineNumber(32);    // compilenode method
  var func10 = function(argcv) {    // method assert(_)description(_)
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
    setModuleName("minitest");
    setLineNumber(33);    // compilenode identifier
    // call case 6: other requests
    var call12 = callmethodChecked(var_mtAssertion, "assert(1)description(1)", [1, 1], var_bb, var_str);
    return call12;
  };
  func10.paramTypes = [];
  func10.paramTypes.push([type_Boolean, "bb"]);
  func10.paramTypes.push([type_String, "str"]);
  func10.paramCounts = [1, 1];
  this.methods["assert(1)description(1)"] = func10;
  func10.definitionLine = 32;
  func10.definitionModule = "minitest";
  setLineNumber(36);    // compilenode method
  var func13 = function(argcv) {    // method deny(_)description(_)
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
    setModuleName("minitest");
    setLineNumber(37);    // compilenode identifier
    // call case 6: other requests
    var call15 = callmethodChecked(var_mtAssertion, "deny(1)description(1)", [1, 1], var_bb, var_str);
    return call15;
  };
  func13.paramTypes = [];
  func13.paramTypes.push([type_Boolean, "bb"]);
  func13.paramTypes.push([type_String, "str"]);
  func13.paramCounts = [1, 1];
  this.methods["deny(1)description(1)"] = func13;
  func13.definitionLine = 36;
  func13.definitionModule = "minitest";
  setLineNumber(40);    // compilenode method
  var func16 = function(argcv) {    // method assert(_)
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
    setModuleName("minitest");
    setLineNumber(41);    // compilenode identifier
    // call case 6: other requests
    var call18 = callmethodChecked(var_mtAssertion, "assert(1)", [1], var_bb);
    return call18;
  };
  func16.paramTypes = [];
  func16.paramTypes.push([type_Boolean, "bb"]);
  func16.paramCounts = [1];
  this.methods["assert(1)"] = func16;
  func16.definitionLine = 40;
  func16.definitionModule = "minitest";
  setLineNumber(44);    // compilenode method
  var func19 = function(argcv) {    // method deny(_)
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
    setModuleName("minitest");
    setLineNumber(45);    // compilenode identifier
    // call case 6: other requests
    var call21 = callmethodChecked(var_mtAssertion, "deny(1)", [1], var_bb);
    return call21;
  };
  func19.paramTypes = [];
  func19.paramTypes.push([type_Boolean, "bb"]);
  func19.paramCounts = [1];
  this.methods["deny(1)"] = func19;
  func19.definitionLine = 44;
  func19.definitionModule = "minitest";
  setLineNumber(48);    // compilenode method
  var func22 = function(argcv) {    // method assert(_)shouldBe(_)
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
    setModuleName("minitest");
    setLineNumber(49);    // compilenode identifier
    // call case 6: other requests
    var call24 = callmethodChecked(var_mtAssertion, "assert(1)shouldBe(1)", [1, 1], var_s1, var_s2);
    return call24;
  };
  func22.paramTypes = [];
  func22.paramTypes.push([type_Object, "s1"]);
  func22.paramTypes.push([type_Object, "s2"]);
  func22.paramCounts = [1, 1];
  this.methods["assert(1)shouldBe(1)"] = func22;
  func22.definitionLine = 48;
  func22.definitionModule = "minitest";
  setLineNumber(52);    // compilenode method
  var func25 = function(argcv) {    // method assert(_)shouldntBe(_)
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
    setModuleName("minitest");
    setLineNumber(53);    // compilenode identifier
    // call case 6: other requests
    var call27 = callmethodChecked(var_mtAssertion, "assert(1)shouldntBe(1)", [1, 1], var_s1, var_s2);
    return call27;
  };
  func25.paramTypes = [];
  func25.paramTypes.push([type_Object, "s1"]);
  func25.paramTypes.push([type_Object, "s2"]);
  func25.paramCounts = [1, 1];
  this.methods["assert(1)shouldntBe(1)"] = func25;
  func25.definitionLine = 52;
  func25.definitionModule = "minitest";
  setLineNumber(56);    // compilenode method
  var func28 = function(argcv) {    // method assert(_)shouldEqual(_)within(_)
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
    if (!Grace_isTrue(callmethod(var_Number, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in within (arg list 3), which corresponds to parameter epsilon, does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("minitest");
    setLineNumber(57);    // compilenode identifier
    // call case 6: other requests
    var call30 = callmethodChecked(var_mtAssertion, "assert(1)shouldEqual(1)within(1)", [1, 1, 1], var_n1, var_n2, var_epsilon);
    return call30;
  };
  func28.paramTypes = [];
  func28.paramTypes.push([type_Number, "n1"]);
  func28.paramTypes.push([type_Number, "n2"]);
  func28.paramTypes.push([type_Number, "epsilon"]);
  func28.paramCounts = [1, 1, 1];
  this.methods["assert(1)shouldEqual(1)within(1)"] = func28;
  func28.definitionLine = 56;
  func28.definitionModule = "minitest";
  setLineNumber(60);    // compilenode method
  var func31 = function(argcv) {    // method assert(_)shouldRaise(_)
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
    // call case 5: prelude request
    var call33 = callmethodChecked(var_prelude, "ExceptionKind", []);
    if (!Grace_isTrue(callmethod(call33, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in shouldRaise (arg list 2), which corresponds to parameter desired, does not have " + 
                callmethod(call33, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("minitest");
    setLineNumber(61);    // compilenode identifier
    // call case 6: other requests
    var call35 = callmethodChecked(var_mtAssertion, "assert(1)shouldRaise(1)", [1, 1], var_b, var_desired);
    return call35;
  };
  func31.paramTypes = [];
  func31.paramTypes.push([type_Block, "b"]);
  func31.paramTypes.push([]);
  func31.paramCounts = [1, 1];
  this.methods["assert(1)shouldRaise(1)"] = func31;
  func31.definitionLine = 60;
  func31.definitionModule = "minitest";
  setLineNumber(64);    // compilenode method
  var func36 = function(argcv) {    // method assert(_)shouldntRaise(_)
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
    // call case 5: prelude request
    var call38 = callmethodChecked(var_prelude, "ExceptionKind", []);
    if (!Grace_isTrue(callmethod(call38, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in shouldntRaise (arg list 2), which corresponds to parameter undesired, does not have " + 
                callmethod(call38, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("minitest");
    setLineNumber(65);    // compilenode identifier
    // call case 6: other requests
    var call40 = callmethodChecked(var_mtAssertion, "assert(1)shouldntRaise(1)", [1, 1], var_b, var_undesired);
    return call40;
  };
  func36.paramTypes = [];
  func36.paramTypes.push([type_Block, "b"]);
  func36.paramTypes.push([]);
  func36.paramCounts = [1, 1];
  this.methods["assert(1)shouldntRaise(1)"] = func36;
  func36.definitionLine = 64;
  func36.definitionModule = "minitest";
  setLineNumber(68);    // compilenode method
  var func41 = function(argcv) {    // method assert(_)hasType(_)
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
    setModuleName("minitest");
    setLineNumber(69);    // compilenode identifier
    // call case 6: other requests
    var call43 = callmethodChecked(var_mtAssertion, "assert(1)hasType(1)", [1, 1], var_s, var_desired);
    return call43;
  };
  func41.paramTypes = [];
  func41.paramTypes.push([type_Object, "s"]);
  func41.paramTypes.push([type_Type, "desired"]);
  func41.paramCounts = [1, 1];
  this.methods["assert(1)hasType(1)"] = func41;
  func41.definitionLine = 68;
  func41.definitionModule = "minitest";
  setLineNumber(72);    // compilenode method
  var func44 = function(argcv) {    // method deny(_)hasType(_)
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
    setModuleName("minitest");
    setLineNumber(73);    // compilenode identifier
    // call case 6: other requests
    var call46 = callmethodChecked(var_mtAssertion, "deny(1)hasType(1)", [1, 1], var_s, var_undesired);
    return call46;
  };
  func44.paramTypes = [];
  func44.paramTypes.push([type_Object, "s"]);
  func44.paramTypes.push([type_Type, "undesired"]);
  func44.paramCounts = [1, 1];
  this.methods["deny(1)hasType(1)"] = func44;
  func44.definitionLine = 72;
  func44.definitionModule = "minitest";
  setLineNumber(76);    // compilenode method
  var func47 = function(argcv) {    // method assertType(_)describes(_)
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
    setModuleName("minitest");
    setLineNumber(77);    // compilenode identifier
    // call case 6: other requests
    var call49 = callmethodChecked(var_mtAssertion, "assertType(1)describes(1)", [1, 1], var_T, var_value);
    return call49;
  };
  func47.paramTypes = [];
  func47.paramTypes.push([type_Type, "T"]);
  func47.paramTypes.push([]);
  func47.paramCounts = [1, 1];
  this.methods["assertType(1)describes(1)"] = func47;
  func47.definitionLine = 76;
  func47.definitionModule = "minitest";
  setLineNumber(80);    // compilenode method
  var func50 = function(argcv) {    // method failBecause(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_reason = arguments[curarg];
    curarg++;
    setModuleName("minitest");
    setLineNumber(81);    // compilenode identifier
    // call case 6: other requests
    var call52 = callmethodChecked(var_mtAssertion, "assert(1)description(1)", [1, 1], GraceFalse, var_reason);
    return call52;
  };
  func50.paramCounts = [1];
  this.methods["failBecause(1)"] = func50;
  func50.definitionLine = 80;
  func50.definitionModule = "minitest";
  setLineNumber(84);    // compilenode method
  var func53 = function(argcv) {    // method testSuiteNamed(_)with(_)
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
            new GraceString("argument 1 in testSuiteNamed (arg list 1), which corresponds to parameter name, does not have " + 
                callmethod(var_String, "asString", [0])._value + "."));
    curarg++;
    if (!Grace_isTrue(callmethod(var_Block, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in with (arg list 2), which corresponds to parameter block, does not have " + 
                callmethod(var_Block, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("minitest");
    var if54 = GraceDone;
    setLineNumber(85);    // compilenode identifier
    var opresult57 = callmethodChecked(var_nullSuite, "\u2260(1)", [1], var_currentTestSuiteForDialect);
    if (Grace_isTrue(opresult57)) {
      setLineNumber(86);    // compilenode string
      var string59 = new GraceString("a testSuite cannot be created inside a testSuite");
      // call case 6: other requests
      // call case 5: prelude request
      var call61 = callmethodChecked(var_prelude, "Exception", []);
      var call62 = callmethodChecked(call61, "raise(1)", [1], string59);
      if54 = call62;
    }
    setLineNumber(88);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call65 = callmethodChecked(var_gu, "testSuite", []);
    var call66 = callmethodChecked(call65, "empty", []);
    var_currentTestSuiteForDialect = call66;
    setLineNumber(89);    // compilenode identifier
    // call case 6: other requests
    var call68 = callmethodChecked(var_currentTestSuiteForDialect, "name:=(1)", [1], var_name);
    setLineNumber(90);    // compilenode identifier
    var_currentSetupBlockForTesting = var_block;
    setLineNumber(91);    // compilenode num
    var_currentTestInThisEvaluation = new GraceNum(0);
    setLineNumber(92);    // compilenode member
    // call case 6: other requests
    var call70 = callmethodChecked(var_block, "apply", []);
    setLineNumber(93);    // compilenode identifier
    var_currentSetupBlockForTesting = var_nullBlock;
    setLineNumber(94);    // compilenode member
    // call case 6: other requests
    var call72 = callmethodChecked(var_currentTestSuiteForDialect, "runAndPrintResults", []);
    setLineNumber(95);    // compilenode identifier
    var_currentTestSuiteForDialect = var_nullSuite;
    setLineNumber(96);    // compilenode num
    var_currentTestBlockForTesting = new GraceNum(0);
    return GraceDone;
  };
  func53.paramTypes = [];
  func53.paramTypes.push([type_String, "name"]);
  func53.paramTypes.push([type_Block, "block"]);
  func53.paramCounts = [1, 1];
  this.methods["testSuiteNamed(1)with(1)"] = func53;
  func53.definitionLine = 84;
  func53.definitionModule = "minitest";
  setLineNumber(99);    // compilenode method
  var func73 = function(argcv) {    // method doNotRerunErrors
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("minitest");
    var_errorsToBeRerun = GraceFalse;
    return GraceDone;
  };
  func73.paramCounts = [0];
  this.methods["doNotRerunErrors"] = func73;
  func73.definitionLine = 99;
  func73.definitionModule = "minitest";
  setLineNumber(100);    // compilenode method
  var func74 = function(argcv) {    // method doRerunErrors
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("minitest");
    var_errorsToBeRerun = GraceTrue;
    return GraceDone;
  };
  func74.paramCounts = [0];
  this.methods["doRerunErrors"] = func74;
  func74.definitionLine = 100;
  func74.definitionModule = "minitest";
  setLineNumber(102);    // compilenode method
  var func75 = function(argcv) {    // method testSuite(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_block = arguments[curarg];
    curarg++;
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_Block, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in testSuite (arg list 1), which corresponds to parameter block, does not have " + 
                callmethod(var_Block, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("minitest");
    setLineNumber(103);    // compilenode string
    var string77 = new GraceString("");
    // call case 4: self request
    onSelf = true;
    var call78 = callmethodChecked(this, "testSuiteNamed(1)with(1)", [1, 1], string77, var_block);
    return call78;
  };
  func75.paramTypes = [];
  func75.paramTypes.push([type_Block, "block"]);
  func75.paramCounts = [1];
  this.methods["testSuite(1)"] = func75;
  func75.definitionLine = 102;
  func75.definitionModule = "minitest";
  setLineNumber(106);    // compilenode method
  var func79 = function(argcv) {    // method test(_)by(_)
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
    if (!Grace_isTrue(callmethod(var_Block, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in by (arg list 2), which corresponds to parameter block, does not have " + 
                callmethod(var_Block, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("minitest");
    var if80 = GraceDone;
    setLineNumber(107);    // compilenode identifier
    var opresult83 = callmethodChecked(var_nullSuite, "==(1)", [1], var_currentTestSuiteForDialect);
    if (Grace_isTrue(opresult83)) {
      setLineNumber(108);    // compilenode string
      var string85 = new GraceString("a test can be created only within a testSuite");
      // call case 6: other requests
      // call case 5: prelude request
      var call87 = callmethodChecked(var_prelude, "Exception", []);
      var call88 = callmethodChecked(call87, "raise(1)", [1], string85);
      if80 = call88;
    }
    setLineNumber(110);    // compilenode identifier
    var opresult91 = callmethodChecked(var_currentTestInThisEvaluation, "+(1)", [1], new GraceNum(1));
    var_currentTestInThisEvaluation = opresult91;
    var if92 = GraceDone;
    setLineNumber(111);    // compilenode identifier
    var opresult95 = callmethodChecked(var_nullBlock, "\u2260(1)", [1], var_currentSetupBlockForTesting);
    if (Grace_isTrue(opresult95)) {
      setLineNumber(114);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call98 = callmethodChecked(this, "testCaseNamed(1)setupIn(1)asTestNumber(1)", [1, 1, 1], var_name, var_currentSetupBlockForTesting, var_currentTestInThisEvaluation);
      // call case 6: other requests
      setLineNumber(112);    // compilenode identifier
      var call99 = callmethodChecked(var_currentTestSuiteForDialect, "add(1)", [1], call98);
      if92 = call99;
    } else {
      var if100 = GraceDone;
      setLineNumber(115);    // compilenode identifier
      var opresult103 = callmethodChecked(var_currentTestInThisEvaluation, "==(1)", [1], var_currentTestBlockForTesting);
      if (Grace_isTrue(opresult103)) {
        setLineNumber(116);    // compilenode member
        // call case 6: other requests
        var call105 = callmethodChecked(var_block, "apply", []);
        if100 = call105;
      }
      if92 = if100;
    }
    return if92;
  };
  func79.paramTypes = [];
  func79.paramTypes.push([type_String, "name"]);
  func79.paramTypes.push([type_Block, "block"]);
  func79.paramCounts = [1, 1];
  this.methods["test(1)by(1)"] = func79;
  func79.definitionLine = 106;
  func79.definitionModule = "minitest";
  setLineNumber(120);    // compilenode method
  var func106 = function(argcv) {    // method testCaseNamed(_)setupIn(_)asTestNumber(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_name__39__ = arguments[curarg];
    curarg++;
    var var_setupBlock = arguments[curarg];
    curarg++;
    var var_number = arguments[curarg];
    curarg++;
    setModuleName("minitest");
    setLineNumber(121);    // compilenode object
    var obj107 = Grace_allocObject(null, "object");
    obj107.definitionModule = "minitest";
    obj107.definitionLine = 121;
    obj107.outer = this;
    var reader_minitest_outer108 = function() {
      return this.outer;
    };
    obj107.methods["outer"] = reader_minitest_outer108;
    var obj_init_107 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj107;
      var func109 = function(argcv) {    // method setup
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("minitest");
        setLineNumber(125);    // compilenode member
        // call case 1: super request
        var call111 = callmethodsuper(this, "setup", []);
        setLineNumber(126);    // compilenode identifier
        var_currentTestBlockForTesting = var_number;
        setLineNumber(127);    // compilenode num
        var_currentTestInThisEvaluation = new GraceNum(0);
        setLineNumber(128);    // compilenode member
        // call case 6: other requests
        var call113 = callmethodChecked(var_setupBlock, "apply", []);
        return call113;
      };
      func109.paramCounts = [0];
      obj107.methods["setup"] = func109;
      func109.definitionLine = 124;
      func109.definitionModule = "minitest";
      var func114 = function(argcv) {    // method teardown
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("minitest");
        setLineNumber(132);    // compilenode num
        var_currentTestBlockForTesting = new GraceNum(0);
        return GraceDone;
      };
      func114.paramCounts = [0];
      obj107.methods["teardown"] = func114;
      func114.definitionLine = 131;
      func114.definitionModule = "minitest";
      var func115 = function(argcv) {    // method currentResult:=(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_r = arguments[curarg];
        curarg++;
        setModuleName("minitest");
        setLineNumber(136);    // compilenode identifier
        // call case 6: other requests
        var call117 = callmethodChecked(var_mtAssertion, "currentResult:=(1)", [1], var_r);
        return call117;
      };
      func115.paramCounts = [1];
      obj107.methods["currentResult:=(1)"] = func115;
      func115.definitionLine = 135;
      func115.definitionModule = "minitest";
      var func118 = function(argcv) {    // method runTest
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("minitest");
        return GraceDone;
      };
      func118.paramCounts = [0];
      obj107.methods["runTest"] = func118;
      func118.definitionLine = 139;
      func118.definitionModule = "minitest";
      setLineNumber(122);    // compilenode identifier
      // call case 6: other requests
      var call120 = callmethodChecked(var_gu, "testCaseNamed(1)$object(1)", [1, 1], var_name__39__, this);
      obj107.superobj = call120;
      if (call120.data) obj107.data = call120.data;
      if (call120.hasOwnProperty('_value'))
          obj107._value = call120._value;
      superDepth = origSuperDepth;
    };
    obj_init_107.apply(obj107, []);
    setLineNumber(120);    // compilenode member
    // call case 6: other requests
    var call122 = callmethodChecked(var_gu, "TestCase", []);
    setLineNumber(121);    // return value
    if (!Grace_isTrue(callmethod(call122, "match(1)", [1], obj107)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("result of method testCaseNamed(_)setupIn(_)asTestNumber(_) does not have " + 
                callmethod(call122, "asString", [0])._value + "."));
    return obj107;
  };
  func106.paramCounts = [1, 1, 1];
  this.methods["testCaseNamed(1)setupIn(1)asTestNumber(1)"] = func106;
  func106.definitionLine = 120;
  func106.definitionModule = "minitest";
    var func123 = function(argcv) {    // method testCaseNamed(_)setupIn(_)asTestNumber(_)$object(_)
      var curarg = 1;
      var var_name__39__ = arguments[curarg];
      curarg++;
      var var_setupBlock = arguments[curarg];
      curarg++;
      var var_number = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      // Start argument processing
      curarg = 1;
      curarg++;
      curarg++;
      curarg++;
      // End argument processing
      setModuleName("minitest");
      var returnTarget = invocationCount;
      invocationCount++;
      var obj124 = Grace_allocObject(null, "testCaseNamed(1)setupIn(1)asTestNumber(1)");
      obj124.definitionModule = "minitest";
      obj124.definitionLine = 121;
      var inho124 = inheritingObject;
      while (inho124.superobj) inho124 = inho124.superobj;
      inho124.superobj = obj124;
      obj124.data = inheritingObject.data;
      if (inheritingObject.hasOwnProperty('_value'))
        obj124._value = inheritingObject._value;
      obj124.outer = this;
      var reader_minitest_outer125 = function() {
        return this.outer;
      };
      obj124.methods["outer"] = reader_minitest_outer125;
      var obj_init_124 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj124;
        var func126 = function(argcv) {    // method setup
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("minitest");
          setLineNumber(125);    // compilenode member
          // call case 1: super request
          var call128 = callmethodsuper(this, "setup", []);
          setLineNumber(126);    // compilenode identifier
          var_currentTestBlockForTesting = var_number;
          setLineNumber(127);    // compilenode num
          var_currentTestInThisEvaluation = new GraceNum(0);
          setLineNumber(128);    // compilenode member
          // call case 6: other requests
          var call130 = callmethodChecked(var_setupBlock, "apply", []);
          return call130;
        };
        func126.paramCounts = [0];
        obj124.methods["setup"] = func126;
        func126.definitionLine = 124;
        func126.definitionModule = "minitest";
        var func131 = function(argcv) {    // method teardown
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("minitest");
          setLineNumber(132);    // compilenode num
          var_currentTestBlockForTesting = new GraceNum(0);
          return GraceDone;
        };
        func131.paramCounts = [0];
        obj124.methods["teardown"] = func131;
        func131.definitionLine = 131;
        func131.definitionModule = "minitest";
        var func132 = function(argcv) {    // method currentResult:=(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_r = arguments[curarg];
          curarg++;
          setModuleName("minitest");
          setLineNumber(136);    // compilenode identifier
          // call case 6: other requests
          var call134 = callmethodChecked(var_mtAssertion, "currentResult:=(1)", [1], var_r);
          return call134;
        };
        func132.paramCounts = [1];
        obj124.methods["currentResult:=(1)"] = func132;
        func132.definitionLine = 135;
        func132.definitionModule = "minitest";
        var func135 = function(argcv) {    // method runTest
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("minitest");
          return GraceDone;
        };
        func135.paramCounts = [0];
        obj124.methods["runTest"] = func135;
        func135.definitionLine = 139;
        func135.definitionModule = "minitest";
        setLineNumber(122);    // compilenode identifier
        // call case 6: other requests
        var call137 = callmethodChecked(var_gu, "testCaseNamed(1)$object(1)", [1, 1], var_name__39__, this);
        obj124.superobj = call137;
        if (call137.data) obj124.data = call137.data;
        if (call137.hasOwnProperty('_value'))
            obj124._value = call137._value;
        superDepth = origSuperDepth;
      };
      obj_init_124.apply(inheritingObject, []);
      return obj124;
      };
      this.methods["testCaseNamed(1)setupIn(1)asTestNumber(1)$object(1)"] = func123;
    setLineNumber(5);    // compilenode string
    var string139 = new GraceString("nullSuite");
    // call case 6: other requests
    // call case 5: prelude request
    var call141 = callmethodChecked(var_prelude, "Singleton", []);
    var call142 = callmethodChecked(call141, "named(1)", [1], string139);
    var var_nullSuite = call142;
    setLineNumber(1);    // compilenode method
    var func143 = function(argcv) {    // method nullSuite
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      setModuleName("minitest");
      // nullSuite is a simple accessor - elide try ... catch
      setLineNumber(5);    // compilenode identifier
      return var_nullSuite;
    };
    func143.paramCounts = [0];
    this.methods["nullSuite"] = func143;
    func143.definitionLine = 1;
    func143.definitionModule = "minitest";
    this.methods["nullSuite"].debug = "def";
    setLineNumber(6);    // compilenode string
    var string145 = new GraceString("nullBlock");
    // call case 6: other requests
    // call case 5: prelude request
    var call147 = callmethodChecked(var_prelude, "Singleton", []);
    var call148 = callmethodChecked(call147, "named(1)", [1], string145);
    var var_nullBlock = call148;
    setLineNumber(1);    // compilenode method
    var func149 = function(argcv) {    // method nullBlock
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      setModuleName("minitest");
      // nullBlock is a simple accessor - elide try ... catch
      setLineNumber(6);    // compilenode identifier
      return var_nullBlock;
    };
    func149.paramCounts = [0];
    this.methods["nullBlock"] = func149;
    func149.definitionLine = 1;
    func149.definitionModule = "minitest";
    this.methods["nullBlock"].debug = "def";
    setLineNumber(8);    // compilenode identifier
    var var_currentTestSuiteForDialect = var_nullSuite;
    setLineNumber(1);    // compilenode method
    var func150 = function(argcv) {    // method currentTestSuiteForDialect
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      setModuleName("minitest");
      // currentTestSuiteForDialect is a simple accessor - elide try ... catch
      setLineNumber(8);    // compilenode identifier
      return var_currentTestSuiteForDialect;
    };
    func150.paramCounts = [0];
    this.methods["currentTestSuiteForDialect"] = func150;
    func150.definitionLine = 1;
    func150.definitionModule = "minitest";
    setLineNumber(1);    // compilenode method
    var func151 = function(argcv) {    // method currentTestSuiteForDialect:=(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var___95__var__95__assign__95__tmp = arguments[curarg];
      curarg++;
      setModuleName("minitest");
      var_currentTestSuiteForDialect = var___95__var__95__assign__95__tmp;
      return GraceDone;
    };
    func151.paramCounts = [1];
    this.methods["currentTestSuiteForDialect:=(1)"] = func151;
    func151.definitionLine = 1;
    func151.definitionModule = "minitest";
    this.methods["currentTestSuiteForDialect"].debug = "var";
    setLineNumber(9);    // compilenode identifier
    var var_currentSetupBlockForTesting = var_nullBlock;
    setLineNumber(1);    // compilenode method
    var func152 = function(argcv) {    // method currentSetupBlockForTesting
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      setModuleName("minitest");
      // currentSetupBlockForTesting is a simple accessor - elide try ... catch
      setLineNumber(9);    // compilenode identifier
      return var_currentSetupBlockForTesting;
    };
    func152.paramCounts = [0];
    this.methods["currentSetupBlockForTesting"] = func152;
    func152.definitionLine = 1;
    func152.definitionModule = "minitest";
    setLineNumber(1);    // compilenode method
    var func153 = function(argcv) {    // method currentSetupBlockForTesting:=(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var___95__var__95__assign__95__tmp = arguments[curarg];
      curarg++;
      setModuleName("minitest");
      var_currentSetupBlockForTesting = var___95__var__95__assign__95__tmp;
      return GraceDone;
    };
    func153.paramCounts = [1];
    this.methods["currentSetupBlockForTesting:=(1)"] = func153;
    func153.definitionLine = 1;
    func153.definitionModule = "minitest";
    this.methods["currentSetupBlockForTesting"].debug = "var";
    setLineNumber(10);    // compilenode num
    var var_currentTestBlockForTesting = new GraceNum(0);
    setLineNumber(1);    // compilenode method
    var func154 = function(argcv) {    // method currentTestBlockForTesting
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      setModuleName("minitest");
      // currentTestBlockForTesting is a simple accessor - elide try ... catch
      setLineNumber(10);    // compilenode identifier
      return var_currentTestBlockForTesting;
    };
    func154.paramCounts = [0];
    this.methods["currentTestBlockForTesting"] = func154;
    func154.definitionLine = 1;
    func154.definitionModule = "minitest";
    setLineNumber(1);    // compilenode method
    var func155 = function(argcv) {    // method currentTestBlockForTesting:=(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var___95__var__95__assign__95__tmp = arguments[curarg];
      curarg++;
      setModuleName("minitest");
      var_currentTestBlockForTesting = var___95__var__95__assign__95__tmp;
      return GraceDone;
    };
    func155.paramCounts = [1];
    this.methods["currentTestBlockForTesting:=(1)"] = func155;
    func155.definitionLine = 1;
    func155.definitionModule = "minitest";
    this.methods["currentTestBlockForTesting"].debug = "var";
    setLineNumber(11);    // compilenode num
    var var_currentTestInThisEvaluation = new GraceNum(0);
    setLineNumber(1);    // compilenode method
    var func156 = function(argcv) {    // method currentTestInThisEvaluation
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      setModuleName("minitest");
      // currentTestInThisEvaluation is a simple accessor - elide try ... catch
      setLineNumber(11);    // compilenode identifier
      return var_currentTestInThisEvaluation;
    };
    func156.paramCounts = [0];
    this.methods["currentTestInThisEvaluation"] = func156;
    func156.definitionLine = 1;
    func156.definitionModule = "minitest";
    setLineNumber(1);    // compilenode method
    var func157 = function(argcv) {    // method currentTestInThisEvaluation:=(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var___95__var__95__assign__95__tmp = arguments[curarg];
      curarg++;
      setModuleName("minitest");
      var_currentTestInThisEvaluation = var___95__var__95__assign__95__tmp;
      return GraceDone;
    };
    func157.paramCounts = [1];
    this.methods["currentTestInThisEvaluation:=(1)"] = func157;
    func157.definitionLine = 1;
    func157.definitionModule = "minitest";
    this.methods["currentTestInThisEvaluation"].debug = "var";
    setLineNumber(12);    // compilenode identifier
    var var_errorsToBeRerun = GraceTrue;
    setLineNumber(1);    // compilenode method
    var func158 = function(argcv) {    // method errorsToBeRerun
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      setModuleName("minitest");
      // errorsToBeRerun is a simple accessor - elide try ... catch
      setLineNumber(12);    // compilenode identifier
      return var_errorsToBeRerun;
    };
    func158.paramCounts = [0];
    this.methods["errorsToBeRerun"] = func158;
    func158.definitionLine = 1;
    func158.definitionModule = "minitest";
    setLineNumber(1);    // compilenode method
    var func159 = function(argcv) {    // method errorsToBeRerun:=(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var___95__var__95__assign__95__tmp = arguments[curarg];
      curarg++;
      setModuleName("minitest");
      var_errorsToBeRerun = var___95__var__95__assign__95__tmp;
      return GraceDone;
    };
    func159.paramCounts = [1];
    this.methods["errorsToBeRerun:=(1)"] = func159;
    func159.definitionLine = 1;
    func159.definitionModule = "minitest";
    this.methods["errorsToBeRerun"].debug = "var";
    setLineNumber(19);    // compilenode object
    var obj160 = Grace_allocObject(null, "mtAssertion");
    obj160.definitionModule = "minitest";
    obj160.definitionLine = 19;
    obj160.outer = this;
    var reader_minitest_outer161 = function() {
      return this.outer;
    };
    obj160.methods["outer"] = reader_minitest_outer161;
    var obj_init_160 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj160;
      var func162 = function(argcv) {    // method countOneAssertion
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("minitest");
        setLineNumber(28);    // compilenode member
        // call case 6: other requests
        // call case 4: self request
        onSelf = true;
        var call165 = callmethodChecked(this, "currentResult", []);
        var call166 = callmethodChecked(call165, "countOneAssertion", []);
        return call166;
      };
      func162.paramCounts = [0];
      obj160.methods["countOneAssertion"] = func162;
      func162.definitionLine = 27;
      func162.definitionModule = "minitest";
      setLineNumber(20);    // compilenode identifier
      // call case 6: other requests
      var call168 = callmethodChecked(var_gu, "assertion$object(1)", [0, 1], this);
      obj160.superobj = call168;
      if (call168.data) obj160.data = call168.data;
      if (call168.hasOwnProperty('_value'))
          obj160._value = call168._value;
      setLineNumber(21);    // compilenode object
      var obj169 = Grace_allocObject(GraceObject, "object");
      obj169.definitionModule = "minitest";
      obj169.definitionLine = 21;
      obj169.outer = this;
      var reader_minitest_outer170 = function() {
        return this.outer;
      };
      obj169.methods["outer"] = reader_minitest_outer170;
      var obj_init_169 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj169;
        var func171 = function(argcv) {    // method countOneAssertion
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("minitest");
          setLineNumber(23);    // compilenode string
          var string172 = new GraceString("countOneAssertion requested on dummy result");
          var call173 = Grace_print(string172);
          return call173;
        };
        func171.paramCounts = [0];
        obj169.methods["countOneAssertion"] = func171;
        func171.definitionLine = 22;
        func171.definitionModule = "minitest";
        superDepth = origSuperDepth;
      };
      obj_init_169.apply(obj169, []);
      obj160.data["currentResult"] = obj169;
      var reader_minitest_currentResult174 = function() {
        return this.data["currentResult"];
      };
      obj160.methods["currentResult"] = reader_minitest_currentResult174;
      obj160.data["currentResult"] = obj169;
      var writer_minitest_currentResult174 = function(argcv, o) {
        this.data["currentResult"] = o;
        return GraceDone;
      };
      obj160.methods["currentResult:=(1)"] = writer_minitest_currentResult174;
      reader_minitest_currentResult174.confidential = true;
      obj160.mutable = true;
      superDepth = origSuperDepth;
    };
    obj_init_160.apply(obj160, []);
    var var_mtAssertion = obj160;
    setLineNumber(1);    // compilenode method
    var func175 = function(argcv) {    // method mtAssertion
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      setModuleName("minitest");
      // mtAssertion is a simple accessor - elide try ... catch
      setLineNumber(19);    // compilenode identifier
      return var_mtAssertion;
    };
    func175.paramCounts = [0];
    this.methods["mtAssertion"] = func175;
    func175.definitionLine = 1;
    func175.definitionModule = "minitest";
    this.methods["mtAssertion"].debug = "def";
    return this;
  }
  gracecode_minitest.imports = ['gUnit'];
  if (typeof gctCache !== "undefined")
    gctCache['minitest'] = "classes:\nconfidential:\nfresh-methods:\n testCaseNamed(1)setupIn(1)asTestNumber(1)\nfresh:testCaseNamed(1)setupIn(1)asTestNumber(1):\n ::(1)\n AssertionFailure\n asDebugString\n asString\n assert(1)\n assert(1)description(1)\n assert(1)hasType(1)\n assert(1)shouldBe(1)\n assert(1)shouldEqual(1)within(1)\n assert(1)shouldRaise(1)\n assert(1)shouldntBe(1)\n assert(1)shouldntRaise(1)\n assertType(1)describes(1)\n basicAsString\n countOneAssertion\n currentResult\n currentResult:=(1)\n debug(1)\n debugAndPrintResults\n deny(1)\n deny(1)description(1)\n deny(1)hasType(1)\n deny(1)shouldBe(1)\n failBecause(1)\n isMe(1)\n methodsIn(1)missingFrom(1)\n name\n printBackTrace(1)limitedTo(1)\n protocolOf(1)notCoveredBy(1)\n run(1)\n runAndPrintResults\n runTest\n setup\n size\n teardown\n \u2260(1)\nmodules:\n gUnit\n math\n mirrors\npath:\n minitest\npublic:\n AndPattern\n BaseType\n BasicPattern\n Binding\n BindingPattern\n Block0\n Block1\n Block2\n Block3\n BoundsError\n Cmd\n Collection\n ConcurrentModification\n Dictionary\n Enumerable\n ExceptionKind\n Expandable\n Extractable\n FailedMatch\n Fun\n Fun2\n Fun3\n Iterable\n Iterator\n IteratorExhausted\n List\n MatchAndDestructuringPattern\n MatchResult\n NoSuchObject\n OrPattern\n Pattern\n Point\n Proc\n Proc2\n Proc3\n RequestError\n Sequence\n Set\n Singleton\n SubobjectResponsibility\n SuccessfulMatch\n TypeIntersection\n TypeSubtraction\n TypeUnion\n TypeVariant\n UninitializedVariable\n VariablePattern\n WildcardPattern\n abstract\n alwaysEqual\n assert(1)\n assert(1)description(1)\n assert(1)hasType(1)\n assert(1)shouldBe(1)\n assert(1)shouldEqual(1)within(1)\n assert(1)shouldRaise(1)\n assert(1)shouldntBe(1)\n assert(1)shouldntRaise(1)\n assertType(1)describes(1)\n binding\n collection\n collections\n deny(1)\n deny(1)description(1)\n deny(1)hasType(1)\n dictionary(1)\n do(1)while(1)\n doNotRerunErrors\n doRerunErrors\n emptyDictionary\n emptyList\n emptySequence\n emptySet\n enumerable\n failBecause(1)\n for(1)and(1)do(1)\n indexable\n list(1)\n max(2)\n methods\n min(2)\n numberOfErrorsToRerun\n numberOfErrorsToRerun:=(1)\n point2Dx(1)y(1)\n range\n repeat(1)times(1)\n required\n sequence(1)\n set(1)\n test(1)by(1)\n testCaseNamed(1)setupIn(1)asTestNumber(1)\n testSuite(1)\n testSuiteNamed(1)with(1)\n valueOf(1)\ntypes:\n";
  if (typeof originalSourceLines !== "undefined") {
    originalSourceLines["minitest"] = [
      "import \"gUnit\" as gu",
      "",
      "inherits prelude.methods",
      "",
      "def nullSuite = prelude.Singleton.named \"nullSuite\"",
      "def nullBlock = prelude.Singleton.named \"nullBlock\"",
      "",
      "var currentTestSuiteForDialect := nullSuite",
      "var currentSetupBlockForTesting := nullBlock",
      "var currentTestBlockForTesting := 0",
      "var currentTestInThisEvaluation := 0",
      "var errorsToBeRerun := true",
      "",
      "method numberOfErrorsToRerun -> Number { gu.numberOfErrorsToRerun }",
      "method numberOfErrorsToRerun:=(n:Number) {",
      "    gu.numberOfErrorsToRerun := n",
      "}",
      "",
      "def mtAssertion = object {",
      "    inherits gu.assertion",
      "    var currentResult is writable := object {",
      "        method countOneAssertion {",
      "            print \"countOneAssertion requested on dummy result\"",
      "        }",
      "    }",
      "",
      "    method countOneAssertion {",
      "        currentResult.countOneAssertion",
      "    }",
      "}",
      "",
      "method assert(bb:Boolean) description(str:String) {",
      "    mtAssertion.assert(bb) description(str)",
      "}",
      "",
      "method deny(bb:Boolean) description(str:String) {",
      "    mtAssertion.deny(bb) description(str)",
      "}",
      "",
      "method assert(bb:Boolean) {",
      "    mtAssertion.assert(bb)",
      "}",
      "",
      "method deny(bb:Boolean) {",
      "    mtAssertion.deny(bb)",
      "}",
      "",
      "method assert(s1:Object) shouldBe (s2:Object) {",
      "    mtAssertion.assert(s1) shouldBe (s2)",
      "}",
      "",
      "method assert(s1:Object) shouldntBe (s2:Object) {",
      "    mtAssertion.assert(s1) shouldntBe (s2)",
      "}",
      "",
      "method assert(n1:Number) shouldEqual (n2:Number) within (epsilon:Number) {",
      "    mtAssertion.assert(n1) shouldEqual (n2) within (epsilon)",
      "}",
      "",
      "method assert(b:Block) shouldRaise (desired:prelude.ExceptionKind) {",
      "    mtAssertion.assert(b) shouldRaise (desired)",
      "}",
      "",
      "method assert(b:Block) shouldntRaise (undesired:prelude.ExceptionKind) {",
      "    mtAssertion.assert(b) shouldntRaise (undesired)",
      "}",
      "",
      "method assert(s:Object) hasType (desired:Type) {",
      "    mtAssertion.assert(s) hasType (desired)",
      "}",
      "",
      "method deny(s:Object) hasType (undesired:Type) {",
      "    mtAssertion.deny(s) hasType (undesired)",
      "}",
      "",
      "method assertType(T:Type) describes (value) {",
      "    mtAssertion.assertType(T) describes (value)",
      "}",
      "",
      "method failBecause(reason) {",
      "    mtAssertion.assert(false) description(reason)",
      "}",
      "",
      "method testSuiteNamed (name:String) with (block:Block) {",
      "    if (nullSuite ≠ currentTestSuiteForDialect) then {",
      "        Exception.raise(\"a testSuite cannot be created inside a testSuite\")",
      "    }",
      "    currentTestSuiteForDialect := gu.testSuite.empty",
      "    currentTestSuiteForDialect.name := name",
      "    currentSetupBlockForTesting := block",
      "    currentTestInThisEvaluation := 0",
      "    block.apply",
      "    currentSetupBlockForTesting := nullBlock",
      "    currentTestSuiteForDialect.runAndPrintResults",
      "    currentTestSuiteForDialect := nullSuite",
      "    currentTestBlockForTesting := 0",
      "}",
      "",
      "method doNotRerunErrors { errorsToBeRerun := false }",
      "method doRerunErrors { errorsToBeRerun := true }",
      "",
      "method testSuite (block:Block) {",
      "    testSuiteNamed \"\" with (block)",
      "}",
      "",
      "method test(name:String) by(block:Block) {",
      "    if (nullSuite == currentTestSuiteForDialect) then {",
      "        Exception.raise(\"a test can be created only within a testSuite\")",
      "    }",
      "    currentTestInThisEvaluation := currentTestInThisEvaluation + 1",
      "    if (nullBlock ≠ currentSetupBlockForTesting) then {",
      "        currentTestSuiteForDialect.add(testCaseNamed(name)",
      "            setupIn(currentSetupBlockForTesting)",
      "            asTestNumber(currentTestInThisEvaluation))",
      "    } elseif { currentTestInThisEvaluation == currentTestBlockForTesting } then {",
      "        block.apply",
      "    }",
      "}",
      "",
      "method testCaseNamed(name') setupIn(setupBlock) asTestNumber(number) -> gu.TestCase {",
      "    object {",
      "        inherits gu.testCaseNamed(name')",
      "",
      "        method setup { ",
      "            super.setup",
      "            currentTestBlockForTesting := number",
      "            currentTestInThisEvaluation := 0",
      "            setupBlock.apply",
      "        }",
      "",
      "        method teardown {",
      "            currentTestBlockForTesting := 0",
      "        }",
      "        ",
      "        method currentResult:= (r) is override {",
      "            mtAssertion.currentResult := r",
      "        }",
      "        ",
      "        method runTest is override {",
      "            // for minitest, the test is run in setup",
      "        }",
      "    }",
      "}",
      "" ];
  }
  if (typeof global !== "undefined")
    global.gracecode_minitest = gracecode_minitest;
  if (typeof window !== "undefined")
    window.gracecode_minitest = gracecode_minitest;
