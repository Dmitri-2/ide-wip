"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_gUnit() {
  setModuleName("gUnit");
  this.definitionModule = "gUnit";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_gUnit_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_gUnit_outer0;
  setLineNumber(8);    // compilenode import
  // Import of mirrors as mirror
  if (typeof gracecode_mirrors == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module mirrors'));
  var var_mirror = do_import("mirrors", gracecode_mirrors);
  var func1 = function(argcv) {    // method mirror
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("gUnit");
    // mirror is a simple accessor - elide try ... catch
    return var_mirror;
  };
  func1.paramCounts = [0];
  this.methods["mirror"] = func1;
  func1.definitionLine = 8;
  func1.definitionModule = "gUnit";
  func1.debug = "import";
  func1.confidential = true;
  setModuleName("gUnit");
  setLineNumber(9);    // compilenode import
  // Import of math as math
  if (typeof gracecode_math == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module math'));
  var var_math = do_import("math", gracecode_math);
  var func2 = function(argcv) {    // method math
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("gUnit");
    // math is a simple accessor - elide try ... catch
    return var_math;
  };
  func2.paramCounts = [0];
  this.methods["math"] = func2;
  func2.definitionLine = 9;
  func2.definitionModule = "gUnit";
  func2.debug = "import";
  func2.confidential = true;
  setModuleName("gUnit");
  setLineNumber(62);    // compilenode method
  var func3 = function(argcv) {    // method assertion
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("gUnit");
    var obj4 = Grace_allocObject(GraceObject, "assertion");
    obj4.definitionModule = "gUnit";
    obj4.definitionLine = 62;
    obj4.outer = this;
    var reader_gUnit_outer5 = function() {
      return this.outer;
    };
    obj4.methods["outer"] = reader_gUnit_outer5;
    var obj_init_4 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj4;
      var func6 = function(argcv) {    // method countOneAssertion
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("gUnit");
        setLineNumber(64);    // compilenode member
        // call case 5: prelude request
        var call8 = callmethodChecked(var_prelude, "abstract", []);
        return call8;
      };
      func6.paramCounts = [0];
      obj4.methods["countOneAssertion"] = func6;
      func6.definitionLine = 64;
      func6.definitionModule = "gUnit";
      var func9 = function(argcv) {    // method failBecause(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_str = arguments[curarg];
        curarg++;
        setModuleName("gUnit");
        setLineNumber(67);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call11 = callmethodChecked(this, "assert(1)description(1)", [1, 1], GraceFalse, var_str);
        return call11;
      };
      func9.paramCounts = [1];
      obj4.methods["failBecause(1)"] = func9;
      func9.definitionLine = 66;
      func9.definitionModule = "gUnit";
      var func12 = function(argcv) {    // method assert(_)description(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_bb = arguments[curarg];
        curarg++;
        var var_str = arguments[curarg];
        curarg++;
        // Start argument checking
        curarg = 1;
        setLineNumber(69);    // compilenode identifier
        if (!Grace_isTrue(callmethod(var_Boolean, "match(1)",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in assert (arg list 1), which corresponds to parameter bb, does not have " + 
                    callmethod(var_Boolean, "asString", [0])._value + "."));
        curarg++;
        curarg++;
        // End argument checking
        setModuleName("gUnit");
        setLineNumber(70);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call14 = callmethodChecked(this, "countOneAssertion", []);
        var if15 = GraceDone;
        setLineNumber(71);    // compilenode call
        // call case 6: other requests
        var call17 = callmethodChecked(var_bb, "prefix!", [0]);
        if (Grace_isTrue(call17)) {
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call20 = callmethodChecked(this, "AssertionFailure", []);
          var call21 = callmethodChecked(call20, "raise(1)", [1], var_str);
          if15 = call21;
        }
        return if15;
      };
      func12.paramTypes = [];
      func12.paramTypes.push([type_Boolean, "bb"]);
      func12.paramTypes.push([]);
      func12.paramCounts = [1, 1];
      obj4.methods["assert(1)description(1)"] = func12;
      func12.definitionLine = 69;
      func12.definitionModule = "gUnit";
      var func22 = function(argcv) {    // method deny(_)description(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_bb = arguments[curarg];
        curarg++;
        var var_str = arguments[curarg];
        curarg++;
        // Start argument checking
        curarg = 1;
        setLineNumber(73);    // compilenode identifier
        if (!Grace_isTrue(callmethod(var_Boolean, "match(1)",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in deny (arg list 1), which corresponds to parameter bb, does not have " + 
                    callmethod(var_Boolean, "asString", [0])._value + "."));
        curarg++;
        curarg++;
        // End argument checking
        setModuleName("gUnit");
        setLineNumber(74);    // compilenode call
        // call case 6: other requests
        var call25 = callmethodChecked(var_bb, "prefix!", [0]);
        // call case 4: self request
        onSelf = true;
        var call26 = callmethodChecked(this, "assert(1)description(1)", [1, 1], call25, var_str);
        return call26;
      };
      func22.paramTypes = [];
      func22.paramTypes.push([type_Boolean, "bb"]);
      func22.paramTypes.push([]);
      func22.paramCounts = [1, 1];
      obj4.methods["deny(1)description(1)"] = func22;
      func22.definitionLine = 73;
      func22.definitionModule = "gUnit";
      var func27 = function(argcv) {    // method assert(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_bb = arguments[curarg];
        curarg++;
        // Start argument checking
        curarg = 1;
        setLineNumber(76);    // compilenode identifier
        if (!Grace_isTrue(callmethod(var_Boolean, "match(1)",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in assert (arg list 1), which corresponds to parameter bb, does not have " + 
                    callmethod(var_Boolean, "asString", [0])._value + "."));
        curarg++;
        // End argument checking
        setModuleName("gUnit");
        setLineNumber(77);    // compilenode string
        var string29 = new GraceString("Assertion failed!");
        // call case 4: self request
        onSelf = true;
        var call30 = callmethodChecked(this, "assert(1)description(1)", [1, 1], var_bb, string29);
        return call30;
      };
      func27.paramTypes = [];
      func27.paramTypes.push([type_Boolean, "bb"]);
      func27.paramCounts = [1];
      obj4.methods["assert(1)"] = func27;
      func27.definitionLine = 76;
      func27.definitionModule = "gUnit";
      var func31 = function(argcv) {    // method deny(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_bb = arguments[curarg];
        curarg++;
        // Start argument checking
        curarg = 1;
        setLineNumber(79);    // compilenode identifier
        if (!Grace_isTrue(callmethod(var_Boolean, "match(1)",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in deny (arg list 1), which corresponds to parameter bb, does not have " + 
                    callmethod(var_Boolean, "asString", [0])._value + "."));
        curarg++;
        // End argument checking
        setModuleName("gUnit");
        setLineNumber(80);    // compilenode call
        // call case 6: other requests
        var call34 = callmethodChecked(var_bb, "prefix!", [0]);
        // call case 4: self request
        onSelf = true;
        var call35 = callmethodChecked(this, "assert(1)", [1], call34);
        return call35;
      };
      func31.paramTypes = [];
      func31.paramTypes.push([type_Boolean, "bb"]);
      func31.paramCounts = [1];
      obj4.methods["deny(1)"] = func31;
      func31.definitionLine = 79;
      func31.definitionModule = "gUnit";
      var func36 = function(argcv) {    // method assert(_)shouldBe(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_s1 = arguments[curarg];
        curarg++;
        var var_s2 = arguments[curarg];
        curarg++;
        // Start argument checking
        curarg = 1;
        setLineNumber(82);    // compilenode identifier
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
        setModuleName("gUnit");
        setLineNumber(83);    // compilenode identifier
        var opresult40 = callmethodChecked(var_s1, "==(1)", [1], var_s2);
        var string41 = new GraceString("\u203a");
        // call case 6: other requests
        var call44 = callmethodChecked(var_s2, "asDebugString", []);
        var string46 = new GraceString("\u203a should be \u2039");
        // call case 6: other requests
        var call49 = callmethodChecked(var_s1, "asDebugString", []);
        var string51 = new GraceString("\u2039");
        var opresult53 = callmethodChecked(string51, "++(1)", [1], call49);
        var opresult55 = callmethodChecked(opresult53, "++(1)", [1], string46);
        var opresult57 = callmethodChecked(opresult55, "++(1)", [1], call44);
        var opresult59 = callmethodChecked(opresult57, "++(1)", [1], string41);
        // call case 4: self request
        onSelf = true;
        var call60 = callmethodChecked(this, "assert(1)description(1)", [1, 1], opresult40, opresult59);
        return call60;
      };
      func36.paramTypes = [];
      func36.paramTypes.push([type_Object, "s1"]);
      func36.paramTypes.push([type_Object, "s2"]);
      func36.paramCounts = [1, 1];
      obj4.methods["assert(1)shouldBe(1)"] = func36;
      func36.definitionLine = 82;
      func36.definitionModule = "gUnit";
      var func61 = function(argcv) {    // method assert(_)shouldntBe(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_s1 = arguments[curarg];
        curarg++;
        var var_s2 = arguments[curarg];
        curarg++;
        // Start argument checking
        curarg = 1;
        setLineNumber(85);    // compilenode identifier
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
        setModuleName("gUnit");
        setLineNumber(86);    // compilenode member
        // call case 6: other requests
        var opresult66 = callmethodChecked(var_s1, "==(1)", [1], var_s2);
        var call67 = callmethodChecked(opresult66, "not", []);
        var string68 = new GraceString("\u203a");
        // call case 6: other requests
        var call71 = callmethodChecked(var_s2, "asDebugString", []);
        var string73 = new GraceString("\u203a should not be \u2039");
        // call case 6: other requests
        var call76 = callmethodChecked(var_s1, "asDebugString", []);
        var string78 = new GraceString("\u2039");
        var opresult80 = callmethodChecked(string78, "++(1)", [1], call76);
        var opresult82 = callmethodChecked(opresult80, "++(1)", [1], string73);
        var opresult84 = callmethodChecked(opresult82, "++(1)", [1], call71);
        var opresult86 = callmethodChecked(opresult84, "++(1)", [1], string68);
        // call case 4: self request
        onSelf = true;
        var call87 = callmethodChecked(this, "assert(1)description(1)", [1, 1], call67, opresult86);
        return call87;
      };
      func61.paramTypes = [];
      func61.paramTypes.push([type_Object, "s1"]);
      func61.paramTypes.push([type_Object, "s2"]);
      func61.paramCounts = [1, 1];
      obj4.methods["assert(1)shouldntBe(1)"] = func61;
      func61.definitionLine = 85;
      func61.definitionModule = "gUnit";
      var func88 = function(argcv) {    // method deny(_)shouldBe(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_s1 = arguments[curarg];
        curarg++;
        var var_s2 = arguments[curarg];
        curarg++;
        // Start argument checking
        curarg = 1;
        setLineNumber(88);    // compilenode identifier
        if (!Grace_isTrue(callmethod(var_Object, "match(1)",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in deny (arg list 1), which corresponds to parameter s1, does not have " + 
                    callmethod(var_Object, "asString", [0])._value + "."));
        curarg++;
        if (!Grace_isTrue(callmethod(var_Object, "match(1)",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in shouldBe (arg list 2), which corresponds to parameter s2, does not have " + 
                    callmethod(var_Object, "asString", [0])._value + "."));
        curarg++;
        // End argument checking
        setModuleName("gUnit");
        setLineNumber(89);    // compilenode member
        // call case 6: other requests
        var opresult93 = callmethodChecked(var_s1, "==(1)", [1], var_s2);
        var call94 = callmethodChecked(opresult93, "not", []);
        var string95 = new GraceString("\u203a");
        // call case 6: other requests
        var call98 = callmethodChecked(var_s2, "asDebugString", []);
        var string100 = new GraceString("\u203a should not be \u2039");
        // call case 6: other requests
        var call103 = callmethodChecked(var_s1, "asDebugString", []);
        var string105 = new GraceString("\u2039");
        var opresult107 = callmethodChecked(string105, "++(1)", [1], call103);
        var opresult109 = callmethodChecked(opresult107, "++(1)", [1], string100);
        var opresult111 = callmethodChecked(opresult109, "++(1)", [1], call98);
        var opresult113 = callmethodChecked(opresult111, "++(1)", [1], string95);
        // call case 4: self request
        onSelf = true;
        var call114 = callmethodChecked(this, "assert(1)description(1)", [1, 1], call94, opresult113);
        return call114;
      };
      func88.paramTypes = [];
      func88.paramTypes.push([type_Object, "s1"]);
      func88.paramTypes.push([type_Object, "s2"]);
      func88.paramCounts = [1, 1];
      obj4.methods["deny(1)shouldBe(1)"] = func88;
      func88.definitionLine = 88;
      func88.definitionModule = "gUnit";
      var func115 = function(argcv) {    // method assert(_)shouldEqual(_)within(_)
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
        setLineNumber(91);    // compilenode identifier
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
        setModuleName("gUnit");
        setLineNumber(92);    // compilenode identifier
        var diff121 = callmethodChecked(var_n1, "-(1)", [1], var_n2);
        // call case 6: other requests
        var call122 = callmethodChecked(var_math, "abs(1)", [1], diff121);
        var opresult124 = callmethodChecked(call122, "\u2264(1)", [1], var_epsilon);
        var string125 = new GraceString("\u203a");
        // call case 6: other requests
        var call128 = callmethodChecked(var_n2, "asDebugString", []);
        var string130 = new GraceString("\u203a should be approximately \u2039");
        // call case 6: other requests
        var call133 = callmethodChecked(var_n1, "asDebugString", []);
        var string135 = new GraceString("\u2039");
        var opresult137 = callmethodChecked(string135, "++(1)", [1], call133);
        var opresult139 = callmethodChecked(opresult137, "++(1)", [1], string130);
        var opresult141 = callmethodChecked(opresult139, "++(1)", [1], call128);
        var opresult143 = callmethodChecked(opresult141, "++(1)", [1], string125);
        // call case 4: self request
        onSelf = true;
        var call144 = callmethodChecked(this, "assert(1)description(1)", [1, 1], opresult124, opresult143);
        return call144;
      };
      func115.paramTypes = [];
      func115.paramTypes.push([type_Number, "n1"]);
      func115.paramTypes.push([type_Number, "n2"]);
      func115.paramTypes.push([type_Number, "epsilon"]);
      func115.paramCounts = [1, 1, 1];
      obj4.methods["assert(1)shouldEqual(1)within(1)"] = func115;
      func115.definitionLine = 91;
      func115.definitionModule = "gUnit";
      var func145 = function(argcv) {    // method assert(_)shouldRaise(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_block0 = arguments[curarg];
        curarg++;
        var var_desiredException = arguments[curarg];
        curarg++;
        setModuleName("gUnit");
        setLineNumber(95);    // compilenode vardec
        var var_completedNormally;
        setLineNumber(96);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call147 = callmethodChecked(this, "countOneAssertion", []);
        setLineNumber(97);    // compilenode block
        var block149 = new GraceBlock(this, 97, 0);
        block149.real = function() {
          setLineNumber(98);    // compilenode member
          // call case 6: other requests
          var call151 = callmethodChecked(var_block0, "apply", []);
          setLineNumber(99);    // compilenode identifier
          var_completedNormally = GraceTrue;
          return GraceDone;
        };
        var cases148 = [];
        setLineNumber(100);    // compilenode block
        var block152 = new GraceBlock(this, 100, 1);
        setLineNumber(0);    // compilenode string
        var string155 = new GraceString("raisedException");
        // call case 6: other requests
        // call case 5: prelude request
        var call157 = callmethodChecked(var_prelude, "VariablePattern", []);
        var call158 = callmethodChecked(call157, "new(1)", [1], string155);
        setLineNumber(100);    // compilenode identifier
        // call case 6: other requests
        setLineNumber(0);    // compilenode member
        // call case 5: prelude request
        var call160 = callmethodChecked(var_prelude, "AndPattern", []);
        var call161 = callmethodChecked(call160, "new(2)", [2], call158, var_desiredException);
        block152.pattern = call161;
        setLineNumber(100);    // compilenode identifier
        block152.paramTypes = [var_desiredException];
        block152.real = function(var_raisedException) {
          setLineNumber(101);    // compilenode identifier
          var_completedNormally = GraceFalse;
          return GraceDone;
        };
        cases148.push(block152);
        setLineNumber(102);    // compilenode block
        var block162 = new GraceBlock(this, 102, 1);
        setLineNumber(1);    // compilenode identifier
        block162.real = function(var_raisedException) {
          setLineNumber(104);    // compilenode string
          var string164 = new GraceString("");
          var string167 = new GraceString("\" instead of ");
          // call case 6: other requests
          var call170 = callmethodChecked(var_raisedException, "message", []);
          var string172 = new GraceString(": \"");
          var opresult174 = callmethodChecked(string172, "++(1)", [1], call170);
          var opresult176 = callmethodChecked(opresult174, "++(1)", [1], string167);
          var opresult178 = callmethodChecked(opresult176, "++(1)", [1], var_desiredException);
          var opresult180 = callmethodChecked(opresult178, "++(1)", [1], string164);
          setLineNumber(103);    // compilenode string
          var string182 = new GraceString("");
          // call case 6: other requests
          var call185 = callmethodChecked(var_raisedException, "exception", []);
          var string187 = new GraceString("code raised exception ");
          var opresult189 = callmethodChecked(string187, "++(1)", [1], call185);
          var opresult191 = callmethodChecked(opresult189, "++(1)", [1], string182);
          var opresult193 = callmethodChecked(opresult191, "++(1)", [1], opresult180);
          // call case 4: self request
          onSelf = true;
          var call194 = callmethodChecked(this, "failBecause(1)", [1], opresult193);
          return call194;
        };
        cases148.push(block162);
        setLineNumber(97);    // compiletrycatch
        var catchres148 = tryCatch(block149,cases148,false);
        setModuleName("gUnit");
        var if195 = GraceDone;
        setLineNumber(106);    // compilenode identifier
        if (Grace_isTrue(var_completedNormally)) {
          var string197 = new GraceString("code did not raise an exception");
          // call case 4: self request
          onSelf = true;
          var call198 = callmethodChecked(this, "failBecause(1)", [1], string197);
          if195 = call198;
        }
        return if195;
      };
      func145.paramCounts = [1, 1];
      obj4.methods["assert(1)shouldRaise(1)"] = func145;
      func145.definitionLine = 94;
      func145.definitionModule = "gUnit";
      var func199 = function(argcv) {    // method assert(_)shouldntRaise(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_block0 = arguments[curarg];
        curarg++;
        var var_undesiredException = arguments[curarg];
        curarg++;
        setModuleName("gUnit");
        setLineNumber(109);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call201 = callmethodChecked(this, "countOneAssertion", []);
        setLineNumber(110);    // compilenode block
        var block203 = new GraceBlock(this, 110, 0);
        block203.real = function() {
          setLineNumber(111);    // compilenode member
          // call case 6: other requests
          var call205 = callmethodChecked(var_block0, "apply", []);
          return call205;
        };
        var cases202 = [];
        setLineNumber(112);    // compilenode block
        var block206 = new GraceBlock(this, 112, 1);
        setLineNumber(0);    // compilenode string
        var string209 = new GraceString("raisedException");
        // call case 6: other requests
        // call case 5: prelude request
        var call211 = callmethodChecked(var_prelude, "VariablePattern", []);
        var call212 = callmethodChecked(call211, "new(1)", [1], string209);
        setLineNumber(112);    // compilenode identifier
        // call case 6: other requests
        setLineNumber(0);    // compilenode member
        // call case 5: prelude request
        var call214 = callmethodChecked(var_prelude, "AndPattern", []);
        var call215 = callmethodChecked(call214, "new(2)", [2], call212, var_undesiredException);
        block206.pattern = call215;
        setLineNumber(112);    // compilenode identifier
        block206.paramTypes = [var_undesiredException];
        block206.real = function(var_raisedException) {
          setLineNumber(113);    // compilenode string
          var string217 = new GraceString("");
          // call case 6: other requests
          var call220 = callmethodChecked(var_raisedException, "exception", []);
          var string222 = new GraceString("code raised exception ");
          var opresult224 = callmethodChecked(string222, "++(1)", [1], call220);
          var opresult226 = callmethodChecked(opresult224, "++(1)", [1], string217);
          // call case 4: self request
          onSelf = true;
          var call227 = callmethodChecked(this, "failBecause(1)", [1], opresult226);
          return call227;
        };
        cases202.push(block206);
        setLineNumber(114);    // compilenode block
        var block228 = new GraceBlock(this, 114, 1);
        setLineNumber(1);    // compilenode identifier
        block228.real = function(var___95____95__7) {
          return GraceDone;
        };
        cases202.push(block228);
        setLineNumber(110);    // compiletrycatch
        var catchres202 = tryCatch(block203,cases202,false);
        setModuleName("gUnit");
        return catchres202;
      };
      func199.paramCounts = [1, 1];
      obj4.methods["assert(1)shouldntRaise(1)"] = func199;
      func199.definitionLine = 108;
      func199.definitionModule = "gUnit";
      var func229 = function(argcv) {    // method assert(_)hasType(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_value = arguments[curarg];
        curarg++;
        var var_Desired = arguments[curarg];
        curarg++;
        // Start argument checking
        curarg = 1;
        curarg++;
        setLineNumber(118);    // compilenode identifier
        if (!Grace_isTrue(callmethod(var_Type, "match(1)",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in hasType (arg list 2), which corresponds to parameter Desired, does not have " + 
                    callmethod(var_Type, "asString", [0])._value + "."));
        curarg++;
        // End argument checking
        setModuleName("gUnit");
        setLineNumber(119);    // compilenode identifier
        var cases230 = [];
        setLineNumber(120);    // compilenode block
        var block231 = new GraceBlock(this, 120, 1);
        setLineNumber(0);    // compilenode string
        var string234 = new GraceString("__8");
        // call case 6: other requests
        // call case 5: prelude request
        var call236 = callmethodChecked(var_prelude, "VariablePattern", []);
        var call237 = callmethodChecked(call236, "new(1)", [1], string234);
        setLineNumber(120);    // compilenode identifier
        // call case 6: other requests
        setLineNumber(0);    // compilenode member
        // call case 5: prelude request
        var call239 = callmethodChecked(var_prelude, "AndPattern", []);
        var call240 = callmethodChecked(call239, "new(2)", [2], call237, var_Desired);
        block231.pattern = call240;
        setLineNumber(120);    // compilenode identifier
        block231.paramTypes = [var_Desired];
        block231.real = function(var___95____95__8) {
          // call case 4: self request
          onSelf = true;
          var call242 = callmethodChecked(this, "countOneAssertion", []);
          return call242;
        };
        cases230.push(block231);
        setLineNumber(121);    // compilenode block
        var block243 = new GraceBlock(this, 121, 1);
        setLineNumber(1);    // compilenode identifier
        block243.real = function(var___95____95__9) {
          setLineNumber(122);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call245 = callmethodChecked(this, "methodsIn(1)missingFrom(1)", [1, 1], var_Desired, var_value);
          var var_m = call245;
          setLineNumber(123);    // compilenode string
          var string247 = new GraceString(".");
          var string250 = new GraceString("; it's missing methods ");
          var string253 = new GraceString(" does not have type ");
          // call case 6: other requests
          var call256 = callmethodChecked(var_value, "asDebugString", []);
          var string258 = new GraceString("");
          var opresult260 = callmethodChecked(string258, "++(1)", [1], call256);
          var opresult262 = callmethodChecked(opresult260, "++(1)", [1], string253);
          var opresult264 = callmethodChecked(opresult262, "++(1)", [1], var_Desired);
          var opresult266 = callmethodChecked(opresult264, "++(1)", [1], string250);
          var opresult268 = callmethodChecked(opresult266, "++(1)", [1], var_m);
          var opresult270 = callmethodChecked(opresult268, "++(1)", [1], string247);
          // call case 4: self request
          onSelf = true;
          var call271 = callmethodChecked(this, "failBecause(1)", [1], opresult270);
          return call271;
        };
        cases230.push(block243);
        setLineNumber(119);    // compilematchcase
        var matchres230 = matchCase(var_value,cases230,false);
        setModuleName("gUnit");
        return matchres230;
      };
      func229.paramTypes = [];
      func229.paramTypes.push([]);
      func229.paramTypes.push([type_Type, "Desired"]);
      func229.paramCounts = [1, 1];
      obj4.methods["assert(1)hasType(1)"] = func229;
      func229.definitionLine = 118;
      func229.definitionModule = "gUnit";
      var func272 = function(argcv) {    // method assertType(_)describes(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_T = arguments[curarg];
        curarg++;
        var var_value = arguments[curarg];
        curarg++;
        // Start argument checking
        curarg = 1;
        setLineNumber(125);    // compilenode identifier
        if (!Grace_isTrue(callmethod(var_Type, "match(1)",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in assertType (arg list 1), which corresponds to parameter T, does not have " + 
                    callmethod(var_Type, "asString", [0])._value + "."));
        curarg++;
        curarg++;
        // End argument checking
        setModuleName("gUnit");
        setLineNumber(126);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call274 = callmethodChecked(this, "protocolOf(1)notCoveredBy(1)", [1, 1], var_value, var_T);
        var var_missingFromT = call274;
        setLineNumber(127);    // compilenode member
        // call case 6: other requests
        var call277 = callmethodChecked(var_missingFromT, "isEmpty", []);
        // call case 4: self request
        onSelf = true;
        var call278 = callmethodChecked(this, "assert(1)description(1)", [1, 1], call277, var_missingFromT);
        return call278;
      };
      func272.paramTypes = [];
      func272.paramTypes.push([type_Type, "T"]);
      func272.paramTypes.push([]);
      func272.paramCounts = [1, 1];
      obj4.methods["assertType(1)describes(1)"] = func272;
      func272.definitionLine = 125;
      func272.definitionModule = "gUnit";
      var func279 = function(argcv) {    // method methodsIn(_)missingFrom(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_DesiredType = arguments[curarg];
        curarg++;
        var var_value = arguments[curarg];
        curarg++;
        setModuleName("gUnit");
        setLineNumber(131);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call282 = callmethodChecked(var_mirror, "reflect(1)", [1], var_value);
        var call283 = callmethodChecked(call282, "methodNames", []);
        var var_vMethods = call283;
        setLineNumber(132);    // compilenode member
        // call case 6: other requests
        var call285 = callmethodChecked(var_DesiredType, "methodNames", []);
        var var_tMethods = call285;
        setLineNumber(133);    // compilenode identifier
        var opresult288 = callmethodChecked(var_tMethods, "--(1)", [1], var_vMethods);
        var var_missing = opresult288;
        var if289 = GraceDone;
        setLineNumber(134);    // compilenode member
        // call case 6: other requests
        var call292 = callmethodChecked(var_missing, "size", []);
        var opresult294 = callmethodChecked(call292, "==(1)", [1], new GraceNum(0));
        if (Grace_isTrue(opresult294)) {
          setLineNumber(135);    // compilenode string
          var string296 = new GraceString("");
          var string299 = new GraceString(" seems to have all the methods of ");
          // call case 6: other requests
          var call302 = callmethodChecked(var_value, "asDebugString", []);
          var string304 = new GraceString("");
          var opresult306 = callmethodChecked(string304, "++(1)", [1], call302);
          var opresult308 = callmethodChecked(opresult306, "++(1)", [1], string299);
          var opresult310 = callmethodChecked(opresult308, "++(1)", [1], var_DesiredType);
          var opresult312 = callmethodChecked(opresult310, "++(1)", [1], string296);
          // call case 6: other requests
          // call case 5: prelude request
          var call314 = callmethodChecked(var_prelude, "ProgrammingError", []);
          var call315 = callmethodChecked(call314, "raise(1)", [1], opresult312);
          if289 = call315;
        } else {
          setLineNumber(137);    // compilenode string
          var string316 = new GraceString("");
          var var_s = string316;
          setLineNumber(138);    // compilenode block
          var block318 = new GraceBlock(this, 138, 1);
          setLineNumber(1);    // compilenode identifier
          block318.real = function(var_each) {
            setLineNumber(138);    // compilenode identifier
            var opresult321 = callmethodChecked(var_s, "++(1)", [1], var_each);
            var_s = opresult321;
            return GraceDone;
          };
          setLineNumber(139);    // compilenode block
          var block322 = new GraceBlock(this, 139, 0);
          block322.real = function() {
            var string323 = new GraceString(", ");
            var opresult326 = callmethodChecked(var_s, "++(1)", [1], string323);
            var_s = opresult326;
            return GraceDone;
          };
          // call case 6: other requests
          setLineNumber(138);    // compilenode identifier
          var call327 = callmethodChecked(var_missing, "do(1)separatedBy(1)", [1, 1], block318, block322);
          setLineNumber(140);    // compilenode identifier
          if289 = var_s;
        }
        setLineNumber(134);    // return value
        if (!Grace_isTrue(callmethod(var_String, "match(1)", [1], if289)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method methodsIn(_)missingFrom(_) does not have " + 
                    callmethod(var_String, "asString", [0])._value + "."));
        return if289;
      };
      func279.confidential = true;
      func279.paramCounts = [1, 1];
      obj4.methods["methodsIn(1)missingFrom(1)"] = func279;
      func279.definitionLine = 130;
      func279.definitionModule = "gUnit";
      var func328 = function(argcv) {    // method protocolOf(_)notCoveredBy(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_value = arguments[curarg];
        curarg++;
        var var_Q = arguments[curarg];
        curarg++;
        // Start argument checking
        curarg = 1;
        curarg++;
        setLineNumber(143);    // compilenode identifier
        if (!Grace_isTrue(callmethod(var_Type, "match(1)",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in notCoveredBy (arg list 2), which corresponds to parameter Q, does not have " + 
                    callmethod(var_Type, "asString", [0])._value + "."));
        curarg++;
        // End argument checking
        setModuleName("gUnit");
        setLineNumber(144);    // compilenode string
        var string329 = new GraceString("");
        var var_s = string329;
        setLineNumber(145);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call333 = callmethodChecked(var_mirror, "reflect(1)", [1], var_value);
        var call334 = callmethodChecked(call333, "methodNames", []);
        // call case 5: prelude request
        var call335 = callmethodChecked(var_prelude, "set(1)", [1], call334);
        var var_vMethods = call335;
        setLineNumber(146);    // compilenode member
        // call case 6: other requests
        var call338 = callmethodChecked(var_Q, "methodNames", []);
        // call case 5: prelude request
        var call339 = callmethodChecked(var_prelude, "set(1)", [1], call338);
        var var_qMethods = call339;
        setLineNumber(148);    // compilenode member
        // call case 6: other requests
        setLineNumber(147);    // compilenode block
        var block342 = new GraceBlock(this, 147, 1);
        setLineNumber(1);    // compilenode identifier
        block342.real = function(var_m) {
          setLineNumber(148);    // compilenode string
          var string343 = new GraceString("outer");
          var opresult346 = callmethodChecked(var_m, "\u2260(1)", [1], string343);
          // call case 6: other requests
          var string350 = new GraceString("()object");
          // call case 6: other requests
          var call351 = callmethodChecked(var_m, "endsWith(1)", [1], string350);
          var call352 = callmethodChecked(call351, "prefix!", [0]);
          var opresult354 = callmethodChecked(call352, "&&(1)", [1], opresult346);
          return opresult354;
        };
        // call case 6: other requests
        setLineNumber(147);    // compilenode identifier
        var opresult357 = callmethodChecked(var_vMethods, "--(1)", [1], var_qMethods);
        var call358 = callmethodChecked(opresult357, "filter(1)", [1], block342);
        var call359 = callmethodChecked(call358, "asSet", []);
        var var_missing = call359;
        var if360 = GraceDone;
        setLineNumber(149);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call363 = callmethodChecked(var_missing, "isEmpty", []);
        var call364 = callmethodChecked(call363, "not", []);
        if (Grace_isTrue(call364)) {
          setLineNumber(150);    // compilenode string
          var string365 = new GraceString(" is missing ");
          // call case 6: other requests
          var call368 = callmethodChecked(var_Q, "asDebugString", []);
          var string370 = new GraceString("");
          var opresult372 = callmethodChecked(string370, "++(1)", [1], call368);
          var opresult374 = callmethodChecked(opresult372, "++(1)", [1], string365);
          var_s = opresult374;
          setLineNumber(151);    // compilenode block
          var block376 = new GraceBlock(this, 151, 1);
          setLineNumber(1);    // compilenode identifier
          block376.real = function(var_each) {
            setLineNumber(151);    // compilenode identifier
            var opresult379 = callmethodChecked(var_s, "++(1)", [1], var_each);
            var_s = opresult379;
            return GraceDone;
          };
          setLineNumber(152);    // compilenode block
          var block380 = new GraceBlock(this, 152, 0);
          block380.real = function() {
            var string381 = new GraceString(", ");
            var opresult384 = callmethodChecked(var_s, "++(1)", [1], string381);
            var_s = opresult384;
            return GraceDone;
          };
          // call case 6: other requests
          setLineNumber(151);    // compilenode identifier
          var call385 = callmethodChecked(var_missing, "do(1)separatedBy(1)", [1, 1], block376, block380);
          if360 = call385;
        }
        setLineNumber(154);    // compilenode identifier
        return var_s;
      };
      func328.paramTypes = [];
      func328.paramTypes.push([]);
      func328.paramTypes.push([type_Type, "Q"]);
      func328.confidential = true;
      func328.paramCounts = [1, 1];
      obj4.methods["protocolOf(1)notCoveredBy(1)"] = func328;
      func328.definitionLine = 143;
      func328.definitionModule = "gUnit";
      var func386 = function(argcv) {    // method deny(_)hasType(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_value = arguments[curarg];
        curarg++;
        var var_Undesired = arguments[curarg];
        curarg++;
        // Start argument checking
        curarg = 1;
        curarg++;
        setLineNumber(156);    // compilenode identifier
        if (!Grace_isTrue(callmethod(var_Type, "match(1)",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in hasType (arg list 2), which corresponds to parameter Undesired, does not have " + 
                    callmethod(var_Type, "asString", [0])._value + "."));
        curarg++;
        // End argument checking
        setModuleName("gUnit");
        setLineNumber(157);    // compilenode identifier
        var cases387 = [];
        setLineNumber(158);    // compilenode block
        var block388 = new GraceBlock(this, 158, 1);
        setLineNumber(0);    // compilenode string
        var string391 = new GraceString("__10");
        // call case 6: other requests
        // call case 5: prelude request
        var call393 = callmethodChecked(var_prelude, "VariablePattern", []);
        var call394 = callmethodChecked(call393, "new(1)", [1], string391);
        setLineNumber(158);    // compilenode identifier
        // call case 6: other requests
        setLineNumber(0);    // compilenode member
        // call case 5: prelude request
        var call396 = callmethodChecked(var_prelude, "AndPattern", []);
        var call397 = callmethodChecked(call396, "new(2)", [2], call394, var_Undesired);
        block388.pattern = call397;
        setLineNumber(158);    // compilenode identifier
        block388.paramTypes = [var_Undesired];
        block388.real = function(var___95____95__10) {
          setLineNumber(159);    // compilenode string
          var string399 = new GraceString("");
          var string402 = new GraceString(" has type ");
          // call case 6: other requests
          var call405 = callmethodChecked(var_value, "asDebugString", []);
          var string407 = new GraceString("");
          var opresult409 = callmethodChecked(string407, "++(1)", [1], call405);
          var opresult411 = callmethodChecked(opresult409, "++(1)", [1], string402);
          var opresult413 = callmethodChecked(opresult411, "++(1)", [1], var_Undesired);
          var opresult415 = callmethodChecked(opresult413, "++(1)", [1], string399);
          // call case 4: self request
          onSelf = true;
          var call416 = callmethodChecked(this, "failBecause(1)", [1], opresult415);
          return call416;
        };
        cases387.push(block388);
        setLineNumber(161);    // compilenode block
        var block417 = new GraceBlock(this, 161, 1);
        setLineNumber(1);    // compilenode identifier
        block417.real = function(var___95____95__11) {
          setLineNumber(162);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call419 = callmethodChecked(this, "countOneAssertion", []);
          return call419;
        };
        cases387.push(block417);
        setLineNumber(157);    // compilematchcase
        var matchres387 = matchCase(var_value,cases387,false);
        setModuleName("gUnit");
        return matchres387;
      };
      func386.paramTypes = [];
      func386.paramTypes.push([]);
      func386.paramTypes.push([type_Type, "Undesired"]);
      func386.paramCounts = [1, 1];
      obj4.methods["deny(1)hasType(1)"] = func386;
      func386.definitionLine = 156;
      func386.definitionModule = "gUnit";
      setLineNumber(63);    // compilenode string
      var string421 = new GraceString("AssertionFailure");
      // call case 6: other requests
      // call case 5: prelude request
      var call423 = callmethodChecked(var_prelude, "Exception", []);
      var call424 = callmethodChecked(call423, "refine(1)", [1], string421);
      obj4.data["AssertionFailure"] = call424;
      var reader_gUnit_AssertionFailure425 = function() {
        return this.data["AssertionFailure"];
      };
      reader_gUnit_AssertionFailure425.def = true;
      obj4.methods["AssertionFailure"] = reader_gUnit_AssertionFailure425;
      superDepth = origSuperDepth;
    };
    obj_init_4.apply(obj4, []);
    return obj4;
  };
  func3.paramCounts = [0];
  this.methods["assertion"] = func3;
  func3.definitionLine = 62;
  func3.definitionModule = "gUnit";
    var func426 = function(argcv) {    // method assertion$object(_)
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      // Start argument processing
      curarg = 1;
      // End argument processing
      setModuleName("gUnit");
      var returnTarget = invocationCount;
      invocationCount++;
      var obj427 = Grace_allocObject(GraceObject, "assertion");
      obj427.definitionModule = "gUnit";
      obj427.definitionLine = 62;
      var inho427 = inheritingObject;
      while (inho427.superobj) inho427 = inho427.superobj;
      inho427.superobj = obj427;
      obj427.data = inheritingObject.data;
      if (inheritingObject.hasOwnProperty('_value'))
        obj427._value = inheritingObject._value;
      obj427.outer = this;
      var reader_gUnit_outer428 = function() {
        return this.outer;
      };
      obj427.methods["outer"] = reader_gUnit_outer428;
      var obj_init_427 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj427;
        var func429 = function(argcv) {    // method countOneAssertion
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("gUnit");
          setLineNumber(64);    // compilenode member
          // call case 5: prelude request
          var call431 = callmethodChecked(var_prelude, "abstract", []);
          return call431;
        };
        func429.paramCounts = [0];
        obj427.methods["countOneAssertion"] = func429;
        func429.definitionLine = 64;
        func429.definitionModule = "gUnit";
        var func432 = function(argcv) {    // method failBecause(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_str = arguments[curarg];
          curarg++;
          setModuleName("gUnit");
          setLineNumber(67);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call434 = callmethodChecked(this, "assert(1)description(1)", [1, 1], GraceFalse, var_str);
          return call434;
        };
        func432.paramCounts = [1];
        obj427.methods["failBecause(1)"] = func432;
        func432.definitionLine = 66;
        func432.definitionModule = "gUnit";
        var func435 = function(argcv) {    // method assert(_)description(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_bb = arguments[curarg];
          curarg++;
          var var_str = arguments[curarg];
          curarg++;
          // Start argument checking
          curarg = 1;
          setLineNumber(69);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Boolean, "match(1)",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in assert (arg list 1), which corresponds to parameter bb, does not have " + 
                      callmethod(var_Boolean, "asString", [0])._value + "."));
          curarg++;
          curarg++;
          // End argument checking
          setModuleName("gUnit");
          setLineNumber(70);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call437 = callmethodChecked(this, "countOneAssertion", []);
          var if438 = GraceDone;
          setLineNumber(71);    // compilenode call
          // call case 6: other requests
          var call440 = callmethodChecked(var_bb, "prefix!", [0]);
          if (Grace_isTrue(call440)) {
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call443 = callmethodChecked(this, "AssertionFailure", []);
            var call444 = callmethodChecked(call443, "raise(1)", [1], var_str);
            if438 = call444;
          }
          return if438;
        };
        func435.paramTypes = [];
        func435.paramTypes.push([type_Boolean, "bb"]);
        func435.paramTypes.push([]);
        func435.paramCounts = [1, 1];
        obj427.methods["assert(1)description(1)"] = func435;
        func435.definitionLine = 69;
        func435.definitionModule = "gUnit";
        var func445 = function(argcv) {    // method deny(_)description(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_bb = arguments[curarg];
          curarg++;
          var var_str = arguments[curarg];
          curarg++;
          // Start argument checking
          curarg = 1;
          setLineNumber(73);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Boolean, "match(1)",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in deny (arg list 1), which corresponds to parameter bb, does not have " + 
                      callmethod(var_Boolean, "asString", [0])._value + "."));
          curarg++;
          curarg++;
          // End argument checking
          setModuleName("gUnit");
          setLineNumber(74);    // compilenode call
          // call case 6: other requests
          var call448 = callmethodChecked(var_bb, "prefix!", [0]);
          // call case 4: self request
          onSelf = true;
          var call449 = callmethodChecked(this, "assert(1)description(1)", [1, 1], call448, var_str);
          return call449;
        };
        func445.paramTypes = [];
        func445.paramTypes.push([type_Boolean, "bb"]);
        func445.paramTypes.push([]);
        func445.paramCounts = [1, 1];
        obj427.methods["deny(1)description(1)"] = func445;
        func445.definitionLine = 73;
        func445.definitionModule = "gUnit";
        var func450 = function(argcv) {    // method assert(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_bb = arguments[curarg];
          curarg++;
          // Start argument checking
          curarg = 1;
          setLineNumber(76);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Boolean, "match(1)",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in assert (arg list 1), which corresponds to parameter bb, does not have " + 
                      callmethod(var_Boolean, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("gUnit");
          setLineNumber(77);    // compilenode string
          var string452 = new GraceString("Assertion failed!");
          // call case 4: self request
          onSelf = true;
          var call453 = callmethodChecked(this, "assert(1)description(1)", [1, 1], var_bb, string452);
          return call453;
        };
        func450.paramTypes = [];
        func450.paramTypes.push([type_Boolean, "bb"]);
        func450.paramCounts = [1];
        obj427.methods["assert(1)"] = func450;
        func450.definitionLine = 76;
        func450.definitionModule = "gUnit";
        var func454 = function(argcv) {    // method deny(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_bb = arguments[curarg];
          curarg++;
          // Start argument checking
          curarg = 1;
          setLineNumber(79);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Boolean, "match(1)",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in deny (arg list 1), which corresponds to parameter bb, does not have " + 
                      callmethod(var_Boolean, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("gUnit");
          setLineNumber(80);    // compilenode call
          // call case 6: other requests
          var call457 = callmethodChecked(var_bb, "prefix!", [0]);
          // call case 4: self request
          onSelf = true;
          var call458 = callmethodChecked(this, "assert(1)", [1], call457);
          return call458;
        };
        func454.paramTypes = [];
        func454.paramTypes.push([type_Boolean, "bb"]);
        func454.paramCounts = [1];
        obj427.methods["deny(1)"] = func454;
        func454.definitionLine = 79;
        func454.definitionModule = "gUnit";
        var func459 = function(argcv) {    // method assert(_)shouldBe(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_s1 = arguments[curarg];
          curarg++;
          var var_s2 = arguments[curarg];
          curarg++;
          // Start argument checking
          curarg = 1;
          setLineNumber(82);    // compilenode identifier
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
          setModuleName("gUnit");
          setLineNumber(83);    // compilenode identifier
          var opresult463 = callmethodChecked(var_s1, "==(1)", [1], var_s2);
          var string464 = new GraceString("\u203a");
          // call case 6: other requests
          var call467 = callmethodChecked(var_s2, "asDebugString", []);
          var string469 = new GraceString("\u203a should be \u2039");
          // call case 6: other requests
          var call472 = callmethodChecked(var_s1, "asDebugString", []);
          var string474 = new GraceString("\u2039");
          var opresult476 = callmethodChecked(string474, "++(1)", [1], call472);
          var opresult478 = callmethodChecked(opresult476, "++(1)", [1], string469);
          var opresult480 = callmethodChecked(opresult478, "++(1)", [1], call467);
          var opresult482 = callmethodChecked(opresult480, "++(1)", [1], string464);
          // call case 4: self request
          onSelf = true;
          var call483 = callmethodChecked(this, "assert(1)description(1)", [1, 1], opresult463, opresult482);
          return call483;
        };
        func459.paramTypes = [];
        func459.paramTypes.push([type_Object, "s1"]);
        func459.paramTypes.push([type_Object, "s2"]);
        func459.paramCounts = [1, 1];
        obj427.methods["assert(1)shouldBe(1)"] = func459;
        func459.definitionLine = 82;
        func459.definitionModule = "gUnit";
        var func484 = function(argcv) {    // method assert(_)shouldntBe(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_s1 = arguments[curarg];
          curarg++;
          var var_s2 = arguments[curarg];
          curarg++;
          // Start argument checking
          curarg = 1;
          setLineNumber(85);    // compilenode identifier
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
          setModuleName("gUnit");
          setLineNumber(86);    // compilenode member
          // call case 6: other requests
          var opresult489 = callmethodChecked(var_s1, "==(1)", [1], var_s2);
          var call490 = callmethodChecked(opresult489, "not", []);
          var string491 = new GraceString("\u203a");
          // call case 6: other requests
          var call494 = callmethodChecked(var_s2, "asDebugString", []);
          var string496 = new GraceString("\u203a should not be \u2039");
          // call case 6: other requests
          var call499 = callmethodChecked(var_s1, "asDebugString", []);
          var string501 = new GraceString("\u2039");
          var opresult503 = callmethodChecked(string501, "++(1)", [1], call499);
          var opresult505 = callmethodChecked(opresult503, "++(1)", [1], string496);
          var opresult507 = callmethodChecked(opresult505, "++(1)", [1], call494);
          var opresult509 = callmethodChecked(opresult507, "++(1)", [1], string491);
          // call case 4: self request
          onSelf = true;
          var call510 = callmethodChecked(this, "assert(1)description(1)", [1, 1], call490, opresult509);
          return call510;
        };
        func484.paramTypes = [];
        func484.paramTypes.push([type_Object, "s1"]);
        func484.paramTypes.push([type_Object, "s2"]);
        func484.paramCounts = [1, 1];
        obj427.methods["assert(1)shouldntBe(1)"] = func484;
        func484.definitionLine = 85;
        func484.definitionModule = "gUnit";
        var func511 = function(argcv) {    // method deny(_)shouldBe(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_s1 = arguments[curarg];
          curarg++;
          var var_s2 = arguments[curarg];
          curarg++;
          // Start argument checking
          curarg = 1;
          setLineNumber(88);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Object, "match(1)",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in deny (arg list 1), which corresponds to parameter s1, does not have " + 
                      callmethod(var_Object, "asString", [0])._value + "."));
          curarg++;
          if (!Grace_isTrue(callmethod(var_Object, "match(1)",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in shouldBe (arg list 2), which corresponds to parameter s2, does not have " + 
                      callmethod(var_Object, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("gUnit");
          setLineNumber(89);    // compilenode member
          // call case 6: other requests
          var opresult516 = callmethodChecked(var_s1, "==(1)", [1], var_s2);
          var call517 = callmethodChecked(opresult516, "not", []);
          var string518 = new GraceString("\u203a");
          // call case 6: other requests
          var call521 = callmethodChecked(var_s2, "asDebugString", []);
          var string523 = new GraceString("\u203a should not be \u2039");
          // call case 6: other requests
          var call526 = callmethodChecked(var_s1, "asDebugString", []);
          var string528 = new GraceString("\u2039");
          var opresult530 = callmethodChecked(string528, "++(1)", [1], call526);
          var opresult532 = callmethodChecked(opresult530, "++(1)", [1], string523);
          var opresult534 = callmethodChecked(opresult532, "++(1)", [1], call521);
          var opresult536 = callmethodChecked(opresult534, "++(1)", [1], string518);
          // call case 4: self request
          onSelf = true;
          var call537 = callmethodChecked(this, "assert(1)description(1)", [1, 1], call517, opresult536);
          return call537;
        };
        func511.paramTypes = [];
        func511.paramTypes.push([type_Object, "s1"]);
        func511.paramTypes.push([type_Object, "s2"]);
        func511.paramCounts = [1, 1];
        obj427.methods["deny(1)shouldBe(1)"] = func511;
        func511.definitionLine = 88;
        func511.definitionModule = "gUnit";
        var func538 = function(argcv) {    // method assert(_)shouldEqual(_)within(_)
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
          setLineNumber(91);    // compilenode identifier
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
          setModuleName("gUnit");
          setLineNumber(92);    // compilenode identifier
          var diff544 = callmethodChecked(var_n1, "-(1)", [1], var_n2);
          // call case 6: other requests
          var call545 = callmethodChecked(var_math, "abs(1)", [1], diff544);
          var opresult547 = callmethodChecked(call545, "\u2264(1)", [1], var_epsilon);
          var string548 = new GraceString("\u203a");
          // call case 6: other requests
          var call551 = callmethodChecked(var_n2, "asDebugString", []);
          var string553 = new GraceString("\u203a should be approximately \u2039");
          // call case 6: other requests
          var call556 = callmethodChecked(var_n1, "asDebugString", []);
          var string558 = new GraceString("\u2039");
          var opresult560 = callmethodChecked(string558, "++(1)", [1], call556);
          var opresult562 = callmethodChecked(opresult560, "++(1)", [1], string553);
          var opresult564 = callmethodChecked(opresult562, "++(1)", [1], call551);
          var opresult566 = callmethodChecked(opresult564, "++(1)", [1], string548);
          // call case 4: self request
          onSelf = true;
          var call567 = callmethodChecked(this, "assert(1)description(1)", [1, 1], opresult547, opresult566);
          return call567;
        };
        func538.paramTypes = [];
        func538.paramTypes.push([type_Number, "n1"]);
        func538.paramTypes.push([type_Number, "n2"]);
        func538.paramTypes.push([type_Number, "epsilon"]);
        func538.paramCounts = [1, 1, 1];
        obj427.methods["assert(1)shouldEqual(1)within(1)"] = func538;
        func538.definitionLine = 91;
        func538.definitionModule = "gUnit";
        var func568 = function(argcv) {    // method assert(_)shouldRaise(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_block0 = arguments[curarg];
          curarg++;
          var var_desiredException = arguments[curarg];
          curarg++;
          setModuleName("gUnit");
          setLineNumber(95);    // compilenode vardec
          var var_completedNormally;
          setLineNumber(96);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call570 = callmethodChecked(this, "countOneAssertion", []);
          setLineNumber(97);    // compilenode block
          var block572 = new GraceBlock(this, 97, 0);
          block572.real = function() {
            setLineNumber(98);    // compilenode member
            // call case 6: other requests
            var call574 = callmethodChecked(var_block0, "apply", []);
            setLineNumber(99);    // compilenode identifier
            var_completedNormally = GraceTrue;
            return GraceDone;
          };
          var cases571 = [];
          setLineNumber(100);    // compilenode block
          var block575 = new GraceBlock(this, 100, 1);
          setLineNumber(0);    // compilenode string
          var string578 = new GraceString("raisedException");
          // call case 6: other requests
          // call case 5: prelude request
          var call580 = callmethodChecked(var_prelude, "VariablePattern", []);
          var call581 = callmethodChecked(call580, "new(1)", [1], string578);
          setLineNumber(100);    // compilenode identifier
          // call case 6: other requests
          setLineNumber(0);    // compilenode member
          // call case 5: prelude request
          var call583 = callmethodChecked(var_prelude, "AndPattern", []);
          var call584 = callmethodChecked(call583, "new(2)", [2], call581, var_desiredException);
          block575.pattern = call584;
          setLineNumber(100);    // compilenode identifier
          block575.paramTypes = [var_desiredException];
          block575.real = function(var_raisedException) {
            setLineNumber(101);    // compilenode identifier
            var_completedNormally = GraceFalse;
            return GraceDone;
          };
          cases571.push(block575);
          setLineNumber(102);    // compilenode block
          var block585 = new GraceBlock(this, 102, 1);
          setLineNumber(1);    // compilenode identifier
          block585.real = function(var_raisedException) {
            setLineNumber(104);    // compilenode string
            var string587 = new GraceString("");
            var string590 = new GraceString("\" instead of ");
            // call case 6: other requests
            var call593 = callmethodChecked(var_raisedException, "message", []);
            var string595 = new GraceString(": \"");
            var opresult597 = callmethodChecked(string595, "++(1)", [1], call593);
            var opresult599 = callmethodChecked(opresult597, "++(1)", [1], string590);
            var opresult601 = callmethodChecked(opresult599, "++(1)", [1], var_desiredException);
            var opresult603 = callmethodChecked(opresult601, "++(1)", [1], string587);
            setLineNumber(103);    // compilenode string
            var string605 = new GraceString("");
            // call case 6: other requests
            var call608 = callmethodChecked(var_raisedException, "exception", []);
            var string610 = new GraceString("code raised exception ");
            var opresult612 = callmethodChecked(string610, "++(1)", [1], call608);
            var opresult614 = callmethodChecked(opresult612, "++(1)", [1], string605);
            var opresult616 = callmethodChecked(opresult614, "++(1)", [1], opresult603);
            // call case 4: self request
            onSelf = true;
            var call617 = callmethodChecked(this, "failBecause(1)", [1], opresult616);
            return call617;
          };
          cases571.push(block585);
          setLineNumber(97);    // compiletrycatch
          var catchres571 = tryCatch(block572,cases571,false);
          setModuleName("gUnit");
          var if618 = GraceDone;
          setLineNumber(106);    // compilenode identifier
          if (Grace_isTrue(var_completedNormally)) {
            var string620 = new GraceString("code did not raise an exception");
            // call case 4: self request
            onSelf = true;
            var call621 = callmethodChecked(this, "failBecause(1)", [1], string620);
            if618 = call621;
          }
          return if618;
        };
        func568.paramCounts = [1, 1];
        obj427.methods["assert(1)shouldRaise(1)"] = func568;
        func568.definitionLine = 94;
        func568.definitionModule = "gUnit";
        var func622 = function(argcv) {    // method assert(_)shouldntRaise(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_block0 = arguments[curarg];
          curarg++;
          var var_undesiredException = arguments[curarg];
          curarg++;
          setModuleName("gUnit");
          setLineNumber(109);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call624 = callmethodChecked(this, "countOneAssertion", []);
          setLineNumber(110);    // compilenode block
          var block626 = new GraceBlock(this, 110, 0);
          block626.real = function() {
            setLineNumber(111);    // compilenode member
            // call case 6: other requests
            var call628 = callmethodChecked(var_block0, "apply", []);
            return call628;
          };
          var cases625 = [];
          setLineNumber(112);    // compilenode block
          var block629 = new GraceBlock(this, 112, 1);
          setLineNumber(0);    // compilenode string
          var string632 = new GraceString("raisedException");
          // call case 6: other requests
          // call case 5: prelude request
          var call634 = callmethodChecked(var_prelude, "VariablePattern", []);
          var call635 = callmethodChecked(call634, "new(1)", [1], string632);
          setLineNumber(112);    // compilenode identifier
          // call case 6: other requests
          setLineNumber(0);    // compilenode member
          // call case 5: prelude request
          var call637 = callmethodChecked(var_prelude, "AndPattern", []);
          var call638 = callmethodChecked(call637, "new(2)", [2], call635, var_undesiredException);
          block629.pattern = call638;
          setLineNumber(112);    // compilenode identifier
          block629.paramTypes = [var_undesiredException];
          block629.real = function(var_raisedException) {
            setLineNumber(113);    // compilenode string
            var string640 = new GraceString("");
            // call case 6: other requests
            var call643 = callmethodChecked(var_raisedException, "exception", []);
            var string645 = new GraceString("code raised exception ");
            var opresult647 = callmethodChecked(string645, "++(1)", [1], call643);
            var opresult649 = callmethodChecked(opresult647, "++(1)", [1], string640);
            // call case 4: self request
            onSelf = true;
            var call650 = callmethodChecked(this, "failBecause(1)", [1], opresult649);
            return call650;
          };
          cases625.push(block629);
          setLineNumber(114);    // compilenode block
          var block651 = new GraceBlock(this, 114, 1);
          setLineNumber(1);    // compilenode identifier
          block651.real = function(var___95____95__7) {
            return GraceDone;
          };
          cases625.push(block651);
          setLineNumber(110);    // compiletrycatch
          var catchres625 = tryCatch(block626,cases625,false);
          setModuleName("gUnit");
          return catchres625;
        };
        func622.paramCounts = [1, 1];
        obj427.methods["assert(1)shouldntRaise(1)"] = func622;
        func622.definitionLine = 108;
        func622.definitionModule = "gUnit";
        var func652 = function(argcv) {    // method assert(_)hasType(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_value = arguments[curarg];
          curarg++;
          var var_Desired = arguments[curarg];
          curarg++;
          // Start argument checking
          curarg = 1;
          curarg++;
          setLineNumber(118);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Type, "match(1)",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in hasType (arg list 2), which corresponds to parameter Desired, does not have " + 
                      callmethod(var_Type, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("gUnit");
          setLineNumber(119);    // compilenode identifier
          var cases653 = [];
          setLineNumber(120);    // compilenode block
          var block654 = new GraceBlock(this, 120, 1);
          setLineNumber(0);    // compilenode string
          var string657 = new GraceString("__8");
          // call case 6: other requests
          // call case 5: prelude request
          var call659 = callmethodChecked(var_prelude, "VariablePattern", []);
          var call660 = callmethodChecked(call659, "new(1)", [1], string657);
          setLineNumber(120);    // compilenode identifier
          // call case 6: other requests
          setLineNumber(0);    // compilenode member
          // call case 5: prelude request
          var call662 = callmethodChecked(var_prelude, "AndPattern", []);
          var call663 = callmethodChecked(call662, "new(2)", [2], call660, var_Desired);
          block654.pattern = call663;
          setLineNumber(120);    // compilenode identifier
          block654.paramTypes = [var_Desired];
          block654.real = function(var___95____95__8) {
            // call case 4: self request
            onSelf = true;
            var call665 = callmethodChecked(this, "countOneAssertion", []);
            return call665;
          };
          cases653.push(block654);
          setLineNumber(121);    // compilenode block
          var block666 = new GraceBlock(this, 121, 1);
          setLineNumber(1);    // compilenode identifier
          block666.real = function(var___95____95__9) {
            setLineNumber(122);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call668 = callmethodChecked(this, "methodsIn(1)missingFrom(1)", [1, 1], var_Desired, var_value);
            var var_m = call668;
            setLineNumber(123);    // compilenode string
            var string670 = new GraceString(".");
            var string673 = new GraceString("; it's missing methods ");
            var string676 = new GraceString(" does not have type ");
            // call case 6: other requests
            var call679 = callmethodChecked(var_value, "asDebugString", []);
            var string681 = new GraceString("");
            var opresult683 = callmethodChecked(string681, "++(1)", [1], call679);
            var opresult685 = callmethodChecked(opresult683, "++(1)", [1], string676);
            var opresult687 = callmethodChecked(opresult685, "++(1)", [1], var_Desired);
            var opresult689 = callmethodChecked(opresult687, "++(1)", [1], string673);
            var opresult691 = callmethodChecked(opresult689, "++(1)", [1], var_m);
            var opresult693 = callmethodChecked(opresult691, "++(1)", [1], string670);
            // call case 4: self request
            onSelf = true;
            var call694 = callmethodChecked(this, "failBecause(1)", [1], opresult693);
            return call694;
          };
          cases653.push(block666);
          setLineNumber(119);    // compilematchcase
          var matchres653 = matchCase(var_value,cases653,false);
          setModuleName("gUnit");
          return matchres653;
        };
        func652.paramTypes = [];
        func652.paramTypes.push([]);
        func652.paramTypes.push([type_Type, "Desired"]);
        func652.paramCounts = [1, 1];
        obj427.methods["assert(1)hasType(1)"] = func652;
        func652.definitionLine = 118;
        func652.definitionModule = "gUnit";
        var func695 = function(argcv) {    // method assertType(_)describes(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_T = arguments[curarg];
          curarg++;
          var var_value = arguments[curarg];
          curarg++;
          // Start argument checking
          curarg = 1;
          setLineNumber(125);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Type, "match(1)",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in assertType (arg list 1), which corresponds to parameter T, does not have " + 
                      callmethod(var_Type, "asString", [0])._value + "."));
          curarg++;
          curarg++;
          // End argument checking
          setModuleName("gUnit");
          setLineNumber(126);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call697 = callmethodChecked(this, "protocolOf(1)notCoveredBy(1)", [1, 1], var_value, var_T);
          var var_missingFromT = call697;
          setLineNumber(127);    // compilenode member
          // call case 6: other requests
          var call700 = callmethodChecked(var_missingFromT, "isEmpty", []);
          // call case 4: self request
          onSelf = true;
          var call701 = callmethodChecked(this, "assert(1)description(1)", [1, 1], call700, var_missingFromT);
          return call701;
        };
        func695.paramTypes = [];
        func695.paramTypes.push([type_Type, "T"]);
        func695.paramTypes.push([]);
        func695.paramCounts = [1, 1];
        obj427.methods["assertType(1)describes(1)"] = func695;
        func695.definitionLine = 125;
        func695.definitionModule = "gUnit";
        var func702 = function(argcv) {    // method methodsIn(_)missingFrom(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_DesiredType = arguments[curarg];
          curarg++;
          var var_value = arguments[curarg];
          curarg++;
          setModuleName("gUnit");
          setLineNumber(131);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call705 = callmethodChecked(var_mirror, "reflect(1)", [1], var_value);
          var call706 = callmethodChecked(call705, "methodNames", []);
          var var_vMethods = call706;
          setLineNumber(132);    // compilenode member
          // call case 6: other requests
          var call708 = callmethodChecked(var_DesiredType, "methodNames", []);
          var var_tMethods = call708;
          setLineNumber(133);    // compilenode identifier
          var opresult711 = callmethodChecked(var_tMethods, "--(1)", [1], var_vMethods);
          var var_missing = opresult711;
          var if712 = GraceDone;
          setLineNumber(134);    // compilenode member
          // call case 6: other requests
          var call715 = callmethodChecked(var_missing, "size", []);
          var opresult717 = callmethodChecked(call715, "==(1)", [1], new GraceNum(0));
          if (Grace_isTrue(opresult717)) {
            setLineNumber(135);    // compilenode string
            var string719 = new GraceString("");
            var string722 = new GraceString(" seems to have all the methods of ");
            // call case 6: other requests
            var call725 = callmethodChecked(var_value, "asDebugString", []);
            var string727 = new GraceString("");
            var opresult729 = callmethodChecked(string727, "++(1)", [1], call725);
            var opresult731 = callmethodChecked(opresult729, "++(1)", [1], string722);
            var opresult733 = callmethodChecked(opresult731, "++(1)", [1], var_DesiredType);
            var opresult735 = callmethodChecked(opresult733, "++(1)", [1], string719);
            // call case 6: other requests
            // call case 5: prelude request
            var call737 = callmethodChecked(var_prelude, "ProgrammingError", []);
            var call738 = callmethodChecked(call737, "raise(1)", [1], opresult735);
            if712 = call738;
          } else {
            setLineNumber(137);    // compilenode string
            var string739 = new GraceString("");
            var var_s = string739;
            setLineNumber(138);    // compilenode block
            var block741 = new GraceBlock(this, 138, 1);
            setLineNumber(1);    // compilenode identifier
            block741.real = function(var_each) {
              setLineNumber(138);    // compilenode identifier
              var opresult744 = callmethodChecked(var_s, "++(1)", [1], var_each);
              var_s = opresult744;
              return GraceDone;
            };
            setLineNumber(139);    // compilenode block
            var block745 = new GraceBlock(this, 139, 0);
            block745.real = function() {
              var string746 = new GraceString(", ");
              var opresult749 = callmethodChecked(var_s, "++(1)", [1], string746);
              var_s = opresult749;
              return GraceDone;
            };
            // call case 6: other requests
            setLineNumber(138);    // compilenode identifier
            var call750 = callmethodChecked(var_missing, "do(1)separatedBy(1)", [1, 1], block741, block745);
            setLineNumber(140);    // compilenode identifier
            if712 = var_s;
          }
          setLineNumber(134);    // return value
          if (!Grace_isTrue(callmethod(var_String, "match(1)", [1], if712)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method methodsIn(_)missingFrom(_) does not have " + 
                      callmethod(var_String, "asString", [0])._value + "."));
          return if712;
        };
        func702.confidential = true;
        func702.paramCounts = [1, 1];
        obj427.methods["methodsIn(1)missingFrom(1)"] = func702;
        func702.definitionLine = 130;
        func702.definitionModule = "gUnit";
        var func751 = function(argcv) {    // method protocolOf(_)notCoveredBy(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_value = arguments[curarg];
          curarg++;
          var var_Q = arguments[curarg];
          curarg++;
          // Start argument checking
          curarg = 1;
          curarg++;
          setLineNumber(143);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Type, "match(1)",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in notCoveredBy (arg list 2), which corresponds to parameter Q, does not have " + 
                      callmethod(var_Type, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("gUnit");
          setLineNumber(144);    // compilenode string
          var string752 = new GraceString("");
          var var_s = string752;
          setLineNumber(145);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call756 = callmethodChecked(var_mirror, "reflect(1)", [1], var_value);
          var call757 = callmethodChecked(call756, "methodNames", []);
          // call case 5: prelude request
          var call758 = callmethodChecked(var_prelude, "set(1)", [1], call757);
          var var_vMethods = call758;
          setLineNumber(146);    // compilenode member
          // call case 6: other requests
          var call761 = callmethodChecked(var_Q, "methodNames", []);
          // call case 5: prelude request
          var call762 = callmethodChecked(var_prelude, "set(1)", [1], call761);
          var var_qMethods = call762;
          setLineNumber(148);    // compilenode member
          // call case 6: other requests
          setLineNumber(147);    // compilenode block
          var block765 = new GraceBlock(this, 147, 1);
          setLineNumber(1);    // compilenode identifier
          block765.real = function(var_m) {
            setLineNumber(148);    // compilenode string
            var string766 = new GraceString("outer");
            var opresult769 = callmethodChecked(var_m, "\u2260(1)", [1], string766);
            // call case 6: other requests
            var string773 = new GraceString("()object");
            // call case 6: other requests
            var call774 = callmethodChecked(var_m, "endsWith(1)", [1], string773);
            var call775 = callmethodChecked(call774, "prefix!", [0]);
            var opresult777 = callmethodChecked(call775, "&&(1)", [1], opresult769);
            return opresult777;
          };
          // call case 6: other requests
          setLineNumber(147);    // compilenode identifier
          var opresult780 = callmethodChecked(var_vMethods, "--(1)", [1], var_qMethods);
          var call781 = callmethodChecked(opresult780, "filter(1)", [1], block765);
          var call782 = callmethodChecked(call781, "asSet", []);
          var var_missing = call782;
          var if783 = GraceDone;
          setLineNumber(149);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call786 = callmethodChecked(var_missing, "isEmpty", []);
          var call787 = callmethodChecked(call786, "not", []);
          if (Grace_isTrue(call787)) {
            setLineNumber(150);    // compilenode string
            var string788 = new GraceString(" is missing ");
            // call case 6: other requests
            var call791 = callmethodChecked(var_Q, "asDebugString", []);
            var string793 = new GraceString("");
            var opresult795 = callmethodChecked(string793, "++(1)", [1], call791);
            var opresult797 = callmethodChecked(opresult795, "++(1)", [1], string788);
            var_s = opresult797;
            setLineNumber(151);    // compilenode block
            var block799 = new GraceBlock(this, 151, 1);
            setLineNumber(1);    // compilenode identifier
            block799.real = function(var_each) {
              setLineNumber(151);    // compilenode identifier
              var opresult802 = callmethodChecked(var_s, "++(1)", [1], var_each);
              var_s = opresult802;
              return GraceDone;
            };
            setLineNumber(152);    // compilenode block
            var block803 = new GraceBlock(this, 152, 0);
            block803.real = function() {
              var string804 = new GraceString(", ");
              var opresult807 = callmethodChecked(var_s, "++(1)", [1], string804);
              var_s = opresult807;
              return GraceDone;
            };
            // call case 6: other requests
            setLineNumber(151);    // compilenode identifier
            var call808 = callmethodChecked(var_missing, "do(1)separatedBy(1)", [1, 1], block799, block803);
            if783 = call808;
          }
          setLineNumber(154);    // compilenode identifier
          return var_s;
        };
        func751.paramTypes = [];
        func751.paramTypes.push([]);
        func751.paramTypes.push([type_Type, "Q"]);
        func751.confidential = true;
        func751.paramCounts = [1, 1];
        obj427.methods["protocolOf(1)notCoveredBy(1)"] = func751;
        func751.definitionLine = 143;
        func751.definitionModule = "gUnit";
        var func809 = function(argcv) {    // method deny(_)hasType(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_value = arguments[curarg];
          curarg++;
          var var_Undesired = arguments[curarg];
          curarg++;
          // Start argument checking
          curarg = 1;
          curarg++;
          setLineNumber(156);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Type, "match(1)",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in hasType (arg list 2), which corresponds to parameter Undesired, does not have " + 
                      callmethod(var_Type, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("gUnit");
          setLineNumber(157);    // compilenode identifier
          var cases810 = [];
          setLineNumber(158);    // compilenode block
          var block811 = new GraceBlock(this, 158, 1);
          setLineNumber(0);    // compilenode string
          var string814 = new GraceString("__10");
          // call case 6: other requests
          // call case 5: prelude request
          var call816 = callmethodChecked(var_prelude, "VariablePattern", []);
          var call817 = callmethodChecked(call816, "new(1)", [1], string814);
          setLineNumber(158);    // compilenode identifier
          // call case 6: other requests
          setLineNumber(0);    // compilenode member
          // call case 5: prelude request
          var call819 = callmethodChecked(var_prelude, "AndPattern", []);
          var call820 = callmethodChecked(call819, "new(2)", [2], call817, var_Undesired);
          block811.pattern = call820;
          setLineNumber(158);    // compilenode identifier
          block811.paramTypes = [var_Undesired];
          block811.real = function(var___95____95__10) {
            setLineNumber(159);    // compilenode string
            var string822 = new GraceString("");
            var string825 = new GraceString(" has type ");
            // call case 6: other requests
            var call828 = callmethodChecked(var_value, "asDebugString", []);
            var string830 = new GraceString("");
            var opresult832 = callmethodChecked(string830, "++(1)", [1], call828);
            var opresult834 = callmethodChecked(opresult832, "++(1)", [1], string825);
            var opresult836 = callmethodChecked(opresult834, "++(1)", [1], var_Undesired);
            var opresult838 = callmethodChecked(opresult836, "++(1)", [1], string822);
            // call case 4: self request
            onSelf = true;
            var call839 = callmethodChecked(this, "failBecause(1)", [1], opresult838);
            return call839;
          };
          cases810.push(block811);
          setLineNumber(161);    // compilenode block
          var block840 = new GraceBlock(this, 161, 1);
          setLineNumber(1);    // compilenode identifier
          block840.real = function(var___95____95__11) {
            setLineNumber(162);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call842 = callmethodChecked(this, "countOneAssertion", []);
            return call842;
          };
          cases810.push(block840);
          setLineNumber(157);    // compilematchcase
          var matchres810 = matchCase(var_value,cases810,false);
          setModuleName("gUnit");
          return matchres810;
        };
        func809.paramTypes = [];
        func809.paramTypes.push([]);
        func809.paramTypes.push([type_Type, "Undesired"]);
        func809.paramCounts = [1, 1];
        obj427.methods["deny(1)hasType(1)"] = func809;
        func809.definitionLine = 156;
        func809.definitionModule = "gUnit";
        setLineNumber(63);    // compilenode string
        var string844 = new GraceString("AssertionFailure");
        // call case 6: other requests
        // call case 5: prelude request
        var call846 = callmethodChecked(var_prelude, "Exception", []);
        var call847 = callmethodChecked(call846, "refine(1)", [1], string844);
        obj427.data["AssertionFailure"] = call847;
        var reader_gUnit_AssertionFailure848 = function() {
          return this.data["AssertionFailure"];
        };
        reader_gUnit_AssertionFailure848.def = true;
        obj427.methods["AssertionFailure"] = reader_gUnit_AssertionFailure848;
        superDepth = origSuperDepth;
      };
      obj_init_427.apply(inheritingObject, []);
      return obj427;
      };
      this.methods["assertion$object(1)"] = func426;
    setLineNumber(167);    // compilenode method
    var func849 = function(argcv) {    // method testCaseNamed(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_name__39__ = arguments[curarg];
      curarg++;
      setModuleName("gUnit");
      var obj850 = Grace_allocObject(null, "testCaseNamed(_)");
      obj850.definitionModule = "gUnit";
      obj850.definitionLine = 167;
      obj850.outer = this;
      var reader_gUnit_outer851 = function() {
        return this.outer;
      };
      obj850.methods["outer"] = reader_gUnit_outer851;
      var obj_init_850 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj850;
        var func852 = function(argcv) {    // method name
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("gUnit");
          // name is a simple accessor - elide try ... catch
          setLineNumber(172);    // compilenode identifier
          return var_name__39__;
        };
        func852.paramCounts = [0];
        obj850.methods["name"] = func852;
        func852.definitionLine = 172;
        func852.definitionModule = "gUnit";
        var func853 = function(argcv) {    // method setup
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("gUnit");
          return GraceDone;
        };
        func853.paramCounts = [0];
        obj850.methods["setup"] = func853;
        func853.definitionLine = 174;
        func853.definitionModule = "gUnit";
        var func854 = function(argcv) {    // method teardown
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("gUnit");
          return GraceDone;
        };
        func854.paramCounts = [0];
        obj850.methods["teardown"] = func854;
        func854.definitionLine = 175;
        func854.definitionModule = "gUnit";
        var func855 = function(argcv) {    // method countOneAssertion
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("gUnit");
          setLineNumber(177);    // compilenode member
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call858 = callmethodChecked(this, "currentResult", []);
          var call859 = callmethodChecked(call858, "countOneAssertion", []);
          return call859;
        };
        func855.paramCounts = [0];
        obj850.methods["countOneAssertion"] = func855;
        func855.definitionLine = 176;
        func855.definitionModule = "gUnit";
        var func860 = function(argcv) {    // method run(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_result = arguments[curarg];
          curarg++;
          setModuleName("gUnit");
          setLineNumber(181);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call862 = callmethodChecked(this, "currentResult:=(1)", [1], var_result);
          setLineNumber(182);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call865 = callmethodChecked(this, "name", []);
          // call case 6: other requests
          var call866 = callmethodChecked(var_result, "testStarted(1)", [1], call865);
          setLineNumber(183);    // compilenode block
          var block868 = new GraceBlock(this, 183, 0);
          block868.real = function() {
            setLineNumber(184);    // compilenode block
            var block870 = new GraceBlock(this, 184, 0);
            block870.real = function() {
              setLineNumber(185);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call872 = callmethodChecked(this, "setup", []);
              setLineNumber(186);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call874 = callmethodChecked(this, "runTest", []);
              return call874;
            };
            var cases869 = [];
            setLineNumber(187);    // compilenode block
            var block875 = new GraceBlock(this, 187, 0);
            block875.real = function() {
              // call case 4: self request
              onSelf = true;
              var call877 = callmethodChecked(this, "teardown", []);
              return call877;
            };
            setLineNumber(184);    // compiletrycatch
            var catchres869 = tryCatch(block870,cases869,block875);
            setModuleName("gUnit");
            return catchres869;
          };
          var cases867 = [];
          setLineNumber(188);    // compilenode block
          var block878 = new GraceBlock(this, 188, 1);
          setLineNumber(0);    // compilenode string
          var string881 = new GraceString("e");
          // call case 6: other requests
          // call case 5: prelude request
          var call883 = callmethodChecked(var_prelude, "VariablePattern", []);
          var call884 = callmethodChecked(call883, "new(1)", [1], string881);
          setLineNumber(188);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call886 = callmethodChecked(this, "AssertionFailure", []);
          // call case 6: other requests
          // call case 5: prelude request
          var call888 = callmethodChecked(var_prelude, "AndPattern", []);
          var call889 = callmethodChecked(call888, "new(2)", [2], call884, call886);
          block878.pattern = call889;
          // call case 4: self request
          onSelf = true;
          var call891 = callmethodChecked(this, "AssertionFailure", []);
          block878.paramTypes = [call891];
          block878.real = function(var_e) {
            setLineNumber(189);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call894 = callmethodChecked(this, "name", []);
            // call case 6: other requests
            var call896 = callmethodChecked(var_e, "message", []);
            // call case 6: other requests
            var call897 = callmethodChecked(var_result, "testFailed(1)withMessage(1)", [1, 1], call894, call896);
            return call897;
          };
          cases867.push(block878);
          setLineNumber(190);    // compilenode block
          var block898 = new GraceBlock(this, 190, 1);
          setLineNumber(188);    // compilenode string
          var string901 = new GraceString("e");
          // call case 6: other requests
          // call case 5: prelude request
          var call903 = callmethodChecked(var_prelude, "VariablePattern", []);
          var call904 = callmethodChecked(call903, "new(1)", [1], string901);
          setLineNumber(190);    // compilenode member
          // call case 5: prelude request
          var call906 = callmethodChecked(var_prelude, "Exception", []);
          // call case 6: other requests
          setLineNumber(188);    // compilenode member
          // call case 5: prelude request
          var call908 = callmethodChecked(var_prelude, "AndPattern", []);
          var call909 = callmethodChecked(call908, "new(2)", [2], call904, call906);
          block898.pattern = call909;
          setLineNumber(190);    // compilenode member
          // call case 5: prelude request
          var call911 = callmethodChecked(var_prelude, "Exception", []);
          block898.paramTypes = [call911];
          block898.real = function(var_e) {
            setLineNumber(191);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call914 = callmethodChecked(this, "name", []);
            var string915 = new GraceString("");
            // call case 6: other requests
            var call918 = callmethodChecked(var_e, "message", []);
            var string920 = new GraceString(": ");
            // call case 6: other requests
            var call923 = callmethodChecked(var_e, "exception", []);
            var string925 = new GraceString("");
            var opresult927 = callmethodChecked(string925, "++(1)", [1], call923);
            var opresult929 = callmethodChecked(opresult927, "++(1)", [1], string920);
            var opresult931 = callmethodChecked(opresult929, "++(1)", [1], call918);
            var opresult933 = callmethodChecked(opresult931, "++(1)", [1], string915);
            // call case 6: other requests
            var call934 = callmethodChecked(var_result, "testErrored(1)withMessage(1)", [1, 1], call914, opresult933);
            return call934;
          };
          cases867.push(block898);
          setLineNumber(183);    // compiletrycatch
          var catchres867 = tryCatch(block868,cases867,false);
          setModuleName("gUnit");
          setLineNumber(193);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call937 = callmethodChecked(this, "name", []);
          // call case 6: other requests
          var call938 = callmethodChecked(var_result, "testFinished(1)", [1], call937);
          return call938;
        };
        func860.paramCounts = [1];
        obj850.methods["run(1)"] = func860;
        func860.definitionLine = 180;
        func860.definitionModule = "gUnit";
        var func939 = function(argcv) {    // method debug(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_result = arguments[curarg];
          curarg++;
          setModuleName("gUnit");
          setLineNumber(197);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call941 = callmethodChecked(this, "currentResult:=(1)", [1], var_result);
          setLineNumber(198);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call944 = callmethodChecked(this, "name", []);
          // call case 6: other requests
          var call945 = callmethodChecked(var_result, "testStarted(1)", [1], call944);
          setLineNumber(199);    // compilenode block
          var block947 = new GraceBlock(this, 199, 0);
          block947.real = function() {
            setLineNumber(200);    // compilenode string
            var string948 = new GraceString(" ...");
            // call case 4: self request
            onSelf = true;
            var call951 = callmethodChecked(this, "name", []);
            var string953 = new GraceString("\ndebugging method ");
            var opresult955 = callmethodChecked(string953, "++(1)", [1], call951);
            var opresult957 = callmethodChecked(opresult955, "++(1)", [1], string948);
            var call958 = Grace_print(opresult957);
            setLineNumber(201);    // compilenode block
            var block960 = new GraceBlock(this, 201, 0);
            block960.real = function() {
              setLineNumber(202);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call962 = callmethodChecked(this, "setup", []);
              setLineNumber(203);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call964 = callmethodChecked(this, "runTest", []);
              return call964;
            };
            var cases959 = [];
            setLineNumber(204);    // compilenode block
            var block965 = new GraceBlock(this, 204, 0);
            block965.real = function() {
              // call case 4: self request
              onSelf = true;
              var call967 = callmethodChecked(this, "teardown", []);
              return call967;
            };
            setLineNumber(201);    // compiletrycatch
            var catchres959 = tryCatch(block960,cases959,block965);
            setModuleName("gUnit");
            return catchres959;
          };
          var cases946 = [];
          setLineNumber(205);    // compilenode block
          var block968 = new GraceBlock(this, 205, 1);
          setLineNumber(188);    // compilenode string
          var string971 = new GraceString("e");
          // call case 6: other requests
          // call case 5: prelude request
          var call973 = callmethodChecked(var_prelude, "VariablePattern", []);
          var call974 = callmethodChecked(call973, "new(1)", [1], string971);
          setLineNumber(205);    // compilenode member
          // call case 5: prelude request
          var call976 = callmethodChecked(var_prelude, "Exception", []);
          // call case 6: other requests
          setLineNumber(188);    // compilenode member
          // call case 5: prelude request
          var call978 = callmethodChecked(var_prelude, "AndPattern", []);
          var call979 = callmethodChecked(call978, "new(2)", [2], call974, call976);
          block968.pattern = call979;
          setLineNumber(205);    // compilenode member
          // call case 5: prelude request
          var call981 = callmethodChecked(var_prelude, "Exception", []);
          block968.paramTypes = [call981];
          block968.real = function(var_e) {
            setLineNumber(206);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call984 = callmethodChecked(this, "name", []);
            // call case 6: other requests
            var call986 = callmethodChecked(var_e, "message", []);
            // call case 6: other requests
            var call987 = callmethodChecked(var_result, "testErrored(1)withMessage(1)", [1, 1], call984, call986);
            setLineNumber(207);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call990 = callmethodChecked(this, "name", []);
            // call case 4: self request
            onSelf = true;
            var call991 = callmethodChecked(this, "printBackTrace(1)limitedTo(1)", [1, 1], var_e, call990);
            return call991;
          };
          cases946.push(block968);
          setLineNumber(199);    // compiletrycatch
          var catchres946 = tryCatch(block947,cases946,false);
          setModuleName("gUnit");
          setLineNumber(209);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call994 = callmethodChecked(this, "name", []);
          // call case 6: other requests
          var call995 = callmethodChecked(var_result, "testFinished(1)", [1], call994);
          return call995;
        };
        func939.paramCounts = [1];
        obj850.methods["debug(1)"] = func939;
        func939.definitionLine = 196;
        func939.definitionModule = "gUnit";
        var func996 = function(argcv) {    // method runTest
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("gUnit");
          setLineNumber(213);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call999 = callmethodChecked(this, "name", []);
          // call case 6: other requests
          // call case 6: other requests
          var call1001 = callmethodChecked(var_mirror, "reflect(1)", [1], this);
          var call1002 = callmethodChecked(call1001, "getMethod(1)", [1], call999);
          var var_methodImage = call1002;
          setLineNumber(214);    // compilenode member
          // call case 5: prelude request
          var call1005 = callmethodChecked(var_prelude, "emptySequence", []);
          // call case 6: other requests
          var call1006 = callmethodChecked(var_methodImage, "requestWithArgs(1)", [1], call1005);
          return call1006;
        };
        func996.paramCounts = [0];
        obj850.methods["runTest"] = func996;
        func996.definitionLine = 212;
        func996.definitionModule = "gUnit";
        var func1007 = function(argcv) {    // method printBackTrace(_)limitedTo(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_exceptionPacket = arguments[curarg];
          curarg++;
          var var_testName = arguments[curarg];
          curarg++;
          setModuleName("gUnit");
          setLineNumber(218);    // compilenode member
          // call case 6: other requests
          var call1009 = callmethodChecked(var_exceptionPacket, "exception", []);
          var var_ex = call1009;
          setLineNumber(219);    // compilenode member
          // call case 6: other requests
          var call1011 = callmethodChecked(var_exceptionPacket, "message", []);
          var var_msg = call1011;
          setLineNumber(220);    // compilenode member
          // call case 6: other requests
          var call1013 = callmethodChecked(var_exceptionPacket, "lineNumber", []);
          var var_lineNr = call1013;
          setLineNumber(221);    // compilenode string
          var string1014 = new GraceString("");
          var string1017 = new GraceString(": ");
          var string1020 = new GraceString(" on line ");
          var string1023 = new GraceString("");
          var opresult1025 = callmethodChecked(string1023, "++(1)", [1], var_ex);
          var opresult1027 = callmethodChecked(opresult1025, "++(1)", [1], string1020);
          var opresult1029 = callmethodChecked(opresult1027, "++(1)", [1], var_lineNr);
          var opresult1031 = callmethodChecked(opresult1029, "++(1)", [1], string1017);
          var opresult1033 = callmethodChecked(opresult1031, "++(1)", [1], var_msg);
          var opresult1035 = callmethodChecked(opresult1033, "++(1)", [1], string1014);
          var call1036 = Grace_print(opresult1035);
          setLineNumber(222);    // compilenode member
          // call case 6: other requests
          var call1038 = callmethodChecked(var_exceptionPacket, "backtrace", []);
          var var_bt = call1038;
          setLineNumber(223);    // compilenode block
          var block1040 = new GraceBlock(this, 223, 0);
          block1040.real = function() {
            // call case 6: other requests
            var call1043 = callmethodChecked(var_bt, "size", []);
            var opresult1045 = callmethodChecked(call1043, ">(1)", [1], new GraceNum(0));
            return opresult1045;
          };
          var block1046 = new GraceBlock(this, 223, 0);
          block1046.real = function() {
            setLineNumber(224);    // compilenode member
            // call case 6: other requests
            var call1048 = callmethodChecked(var_bt, "pop", []);
            var var_frameDescription = call1048;
            setLineNumber(225);    // compilenode string
            var string1050 = new GraceString("  called from ");
            var opresult1052 = callmethodChecked(string1050, "++(1)", [1], var_frameDescription);
            var call1053 = Grace_print(opresult1052);
            var if1054 = GraceDone;
            setLineNumber(226);    // compilenode identifier
            // call case 6: other requests
            var call1056 = callmethodChecked(var_frameDescription, "contains(1)", [1], var_testName);
            if (Grace_isTrue(call1056)) {
              throw new ReturnException(var_done, returnTarget);
            }
            var if1057 = GraceDone;
            setLineNumber(227);    // compilenode string
            var string1059 = new GraceString("testCaseNamed()setupIn()asTestNumber");
            // call case 6: other requests
            var call1060 = callmethodChecked(var_frameDescription, "contains(1)", [1], string1059);
            if (Grace_isTrue(call1060)) {
              setLineNumber(231);    // compilenode identifier
              throw new ReturnException(var_done, returnTarget);
            }
            return if1057;
          };
          // call case 5: prelude request
          var call1061 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block1040, block1046);
          return call1061;
        };
        func1007.paramCounts = [1, 1];
        obj850.methods["printBackTrace(1)limitedTo(1)"] = func1007;
        func1007.definitionLine = 217;
        func1007.definitionModule = "gUnit";
        var func1062 = function(argcv) {    // method runAndPrintResults
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("gUnit");
          setLineNumber(236);    // compilenode member
          // call case 6: other requests
          // call case 3: self.outer request
          var call1065 = callmethodChecked(superDepth, "outer", [0]);
          onSelf = true;
          var call1066 = callmethodChecked(call1065, "testResult", []);
          var var_result = call1066;
          setLineNumber(237);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call1068 = callmethodChecked(this, "run(1)", [1], var_result);
          var if1069 = GraceDone;
          setLineNumber(238);    // compilenode string
          var string1070 = new GraceString("");
          // call case 4: self request
          onSelf = true;
          var call1073 = callmethodChecked(this, "name", []);
          var opresult1075 = callmethodChecked(call1073, "==(1)", [1], string1070);
          if (Grace_isTrue(opresult1075)) {
            setLineNumber(239);    // compilenode string
            var string1076 = new GraceString("");
            // call case 6: other requests
            var call1079 = callmethodChecked(var_result, "detailedSummary", []);
            var string1081 = new GraceString("");
            var opresult1083 = callmethodChecked(string1081, "++(1)", [1], call1079);
            var opresult1085 = callmethodChecked(opresult1083, "++(1)", [1], string1076);
            var call1086 = Grace_print(opresult1085);
            if1069 = call1086;
          } else {
            setLineNumber(241);    // compilenode string
            var string1087 = new GraceString("");
            // call case 6: other requests
            var call1090 = callmethodChecked(var_result, "detailedSummary", []);
            var string1092 = new GraceString(": ");
            // call case 4: self request
            onSelf = true;
            var call1095 = callmethodChecked(this, "name", []);
            var string1097 = new GraceString("");
            var opresult1099 = callmethodChecked(string1097, "++(1)", [1], call1095);
            var opresult1101 = callmethodChecked(opresult1099, "++(1)", [1], string1092);
            var opresult1103 = callmethodChecked(opresult1101, "++(1)", [1], call1090);
            var opresult1105 = callmethodChecked(opresult1103, "++(1)", [1], string1087);
            var call1106 = Grace_print(opresult1105);
            if1069 = call1106;
          }
          return if1069;
        };
        func1062.paramCounts = [0];
        obj850.methods["runAndPrintResults"] = func1062;
        func1062.definitionLine = 235;
        func1062.definitionModule = "gUnit";
        var func1107 = function(argcv) {    // method debugAndPrintResults
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("gUnit");
          setLineNumber(246);    // compilenode member
          // call case 6: other requests
          // call case 3: self.outer request
          var call1110 = callmethodChecked(superDepth, "outer", [0]);
          onSelf = true;
          var call1111 = callmethodChecked(call1110, "testResult", []);
          var var_result = call1111;
          setLineNumber(247);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call1113 = callmethodChecked(this, "debug(1)", [1], var_result);
          var if1114 = GraceDone;
          setLineNumber(248);    // compilenode string
          var string1115 = new GraceString("");
          // call case 4: self request
          onSelf = true;
          var call1118 = callmethodChecked(this, "name", []);
          var opresult1120 = callmethodChecked(call1118, "==(1)", [1], string1115);
          if (Grace_isTrue(opresult1120)) {
            setLineNumber(249);    // compilenode string
            var string1121 = new GraceString("");
            // call case 6: other requests
            var call1124 = callmethodChecked(var_result, "detailedSummary", []);
            var string1126 = new GraceString("");
            var opresult1128 = callmethodChecked(string1126, "++(1)", [1], call1124);
            var opresult1130 = callmethodChecked(opresult1128, "++(1)", [1], string1121);
            var call1131 = Grace_print(opresult1130);
            if1114 = call1131;
          } else {
            setLineNumber(251);    // compilenode string
            var string1132 = new GraceString("");
            // call case 6: other requests
            var call1135 = callmethodChecked(var_result, "detailedSummary", []);
            var string1137 = new GraceString(": ");
            // call case 4: self request
            onSelf = true;
            var call1140 = callmethodChecked(this, "name", []);
            var string1142 = new GraceString("");
            var opresult1144 = callmethodChecked(string1142, "++(1)", [1], call1140);
            var opresult1146 = callmethodChecked(opresult1144, "++(1)", [1], string1137);
            var opresult1148 = callmethodChecked(opresult1146, "++(1)", [1], call1135);
            var opresult1150 = callmethodChecked(opresult1148, "++(1)", [1], string1132);
            var call1151 = Grace_print(opresult1150);
            if1114 = call1151;
          }
          return if1114;
        };
        func1107.paramCounts = [0];
        obj850.methods["debugAndPrintResults"] = func1107;
        func1107.definitionLine = 245;
        func1107.definitionModule = "gUnit";
        setLineNumber(168);    // compilenode identifier
        // call case 6: other requests
        // call case 3: self.outer request
        var call1154 = callmethodChecked(superDepth, "outer", [0]);
        var call1155 = callmethodChecked(call1154, "assertion$object(1)", [0, 1], this);
        obj850.superobj = call1155;
        if (call1155.data) obj850.data = call1155.data;
        if (call1155.hasOwnProperty('_value'))
            obj850._value = call1155._value;
        setLineNumber(170);    // compilenode num
        obj850.data["size"] = new GraceNum(1);
        var reader_gUnit_size1156 = function() {
          return this.data["size"];
        };
        reader_gUnit_size1156.def = true;
        obj850.methods["size"] = reader_gUnit_size1156;
        obj850.data["currentResult"] = undefined;
        var reader_gUnit_currentResult1157 = function() {
          return this.data["currentResult"];
        };
        obj850.methods["currentResult"] = reader_gUnit_currentResult1157;
        obj850.data["currentResult"] = undefined;
        var writer_gUnit_currentResult1157 = function(argcv, o) {
          this.data["currentResult"] = o;
          return GraceDone;
        };
        obj850.methods["currentResult:=(1)"] = writer_gUnit_currentResult1157;
        reader_gUnit_currentResult1157.confidential = true;
        writer_gUnit_currentResult1157.confidential = true;
        obj850.mutable = true;
        superDepth = origSuperDepth;
      };
      obj_init_850.apply(obj850, []);
      setLineNumber(167);    // return value
      if (!Grace_isTrue(callmethod(var_TestCase, "match(1)", [1], obj850)))
          throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("result of method testCaseNamed(_) does not have " + 
                  callmethod(var_TestCase, "asString", [0])._value + "."));
      return obj850;
    };
    func849.paramCounts = [1];
    this.methods["testCaseNamed(1)"] = func849;
    func849.definitionLine = 167;
    func849.definitionModule = "gUnit";
      var func1158 = function(argcv) {    // method testCaseNamed(_)$object(_)
        var curarg = 1;
        var var_name__39__ = arguments[curarg];
        curarg++;
        var inheritingObject = arguments[curarg++];
        // Start argument processing
        curarg = 1;
        curarg++;
        // End argument processing
        setModuleName("gUnit");
        var returnTarget = invocationCount;
        invocationCount++;
        var obj1159 = Grace_allocObject(null, "testCaseNamed(1)");
        obj1159.definitionModule = "gUnit";
        obj1159.definitionLine = 167;
        var inho1159 = inheritingObject;
        while (inho1159.superobj) inho1159 = inho1159.superobj;
        inho1159.superobj = obj1159;
        obj1159.data = inheritingObject.data;
        if (inheritingObject.hasOwnProperty('_value'))
          obj1159._value = inheritingObject._value;
        obj1159.outer = this;
        var reader_gUnit_outer1160 = function() {
          return this.outer;
        };
        obj1159.methods["outer"] = reader_gUnit_outer1160;
        var obj_init_1159 = function() {
          var origSuperDepth = superDepth;
          superDepth = obj1159;
          var func1161 = function(argcv) {    // method name
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("gUnit");
            // name is a simple accessor - elide try ... catch
            setLineNumber(172);    // compilenode identifier
            return var_name__39__;
          };
          func1161.paramCounts = [0];
          obj1159.methods["name"] = func1161;
          func1161.definitionLine = 172;
          func1161.definitionModule = "gUnit";
          var func1162 = function(argcv) {    // method setup
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("gUnit");
            return GraceDone;
          };
          func1162.paramCounts = [0];
          obj1159.methods["setup"] = func1162;
          func1162.definitionLine = 174;
          func1162.definitionModule = "gUnit";
          var func1163 = function(argcv) {    // method teardown
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("gUnit");
            return GraceDone;
          };
          func1163.paramCounts = [0];
          obj1159.methods["teardown"] = func1163;
          func1163.definitionLine = 175;
          func1163.definitionModule = "gUnit";
          var func1164 = function(argcv) {    // method countOneAssertion
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("gUnit");
            setLineNumber(177);    // compilenode member
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call1167 = callmethodChecked(this, "currentResult", []);
            var call1168 = callmethodChecked(call1167, "countOneAssertion", []);
            return call1168;
          };
          func1164.paramCounts = [0];
          obj1159.methods["countOneAssertion"] = func1164;
          func1164.definitionLine = 176;
          func1164.definitionModule = "gUnit";
          var func1169 = function(argcv) {    // method run(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_result = arguments[curarg];
            curarg++;
            setModuleName("gUnit");
            setLineNumber(181);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call1171 = callmethodChecked(this, "currentResult:=(1)", [1], var_result);
            setLineNumber(182);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call1174 = callmethodChecked(this, "name", []);
            // call case 6: other requests
            var call1175 = callmethodChecked(var_result, "testStarted(1)", [1], call1174);
            setLineNumber(183);    // compilenode block
            var block1177 = new GraceBlock(this, 183, 0);
            block1177.real = function() {
              setLineNumber(184);    // compilenode block
              var block1179 = new GraceBlock(this, 184, 0);
              block1179.real = function() {
                setLineNumber(185);    // compilenode member
                // call case 4: self request
                onSelf = true;
                var call1181 = callmethodChecked(this, "setup", []);
                setLineNumber(186);    // compilenode member
                // call case 4: self request
                onSelf = true;
                var call1183 = callmethodChecked(this, "runTest", []);
                return call1183;
              };
              var cases1178 = [];
              setLineNumber(187);    // compilenode block
              var block1184 = new GraceBlock(this, 187, 0);
              block1184.real = function() {
                // call case 4: self request
                onSelf = true;
                var call1186 = callmethodChecked(this, "teardown", []);
                return call1186;
              };
              setLineNumber(184);    // compiletrycatch
              var catchres1178 = tryCatch(block1179,cases1178,block1184);
              setModuleName("gUnit");
              return catchres1178;
            };
            var cases1176 = [];
            setLineNumber(188);    // compilenode block
            var block1187 = new GraceBlock(this, 188, 1);
            setLineNumber(0);    // compilenode string
            var string1190 = new GraceString("e");
            // call case 6: other requests
            // call case 5: prelude request
            var call1192 = callmethodChecked(var_prelude, "VariablePattern", []);
            var call1193 = callmethodChecked(call1192, "new(1)", [1], string1190);
            setLineNumber(188);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call1195 = callmethodChecked(this, "AssertionFailure", []);
            // call case 6: other requests
            // call case 5: prelude request
            var call1197 = callmethodChecked(var_prelude, "AndPattern", []);
            var call1198 = callmethodChecked(call1197, "new(2)", [2], call1193, call1195);
            block1187.pattern = call1198;
            // call case 4: self request
            onSelf = true;
            var call1200 = callmethodChecked(this, "AssertionFailure", []);
            block1187.paramTypes = [call1200];
            block1187.real = function(var_e) {
              setLineNumber(189);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call1203 = callmethodChecked(this, "name", []);
              // call case 6: other requests
              var call1205 = callmethodChecked(var_e, "message", []);
              // call case 6: other requests
              var call1206 = callmethodChecked(var_result, "testFailed(1)withMessage(1)", [1, 1], call1203, call1205);
              return call1206;
            };
            cases1176.push(block1187);
            setLineNumber(190);    // compilenode block
            var block1207 = new GraceBlock(this, 190, 1);
            setLineNumber(188);    // compilenode string
            var string1210 = new GraceString("e");
            // call case 6: other requests
            // call case 5: prelude request
            var call1212 = callmethodChecked(var_prelude, "VariablePattern", []);
            var call1213 = callmethodChecked(call1212, "new(1)", [1], string1210);
            setLineNumber(190);    // compilenode member
            // call case 5: prelude request
            var call1215 = callmethodChecked(var_prelude, "Exception", []);
            // call case 6: other requests
            setLineNumber(188);    // compilenode member
            // call case 5: prelude request
            var call1217 = callmethodChecked(var_prelude, "AndPattern", []);
            var call1218 = callmethodChecked(call1217, "new(2)", [2], call1213, call1215);
            block1207.pattern = call1218;
            setLineNumber(190);    // compilenode member
            // call case 5: prelude request
            var call1220 = callmethodChecked(var_prelude, "Exception", []);
            block1207.paramTypes = [call1220];
            block1207.real = function(var_e) {
              setLineNumber(191);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call1223 = callmethodChecked(this, "name", []);
              var string1224 = new GraceString("");
              // call case 6: other requests
              var call1227 = callmethodChecked(var_e, "message", []);
              var string1229 = new GraceString(": ");
              // call case 6: other requests
              var call1232 = callmethodChecked(var_e, "exception", []);
              var string1234 = new GraceString("");
              var opresult1236 = callmethodChecked(string1234, "++(1)", [1], call1232);
              var opresult1238 = callmethodChecked(opresult1236, "++(1)", [1], string1229);
              var opresult1240 = callmethodChecked(opresult1238, "++(1)", [1], call1227);
              var opresult1242 = callmethodChecked(opresult1240, "++(1)", [1], string1224);
              // call case 6: other requests
              var call1243 = callmethodChecked(var_result, "testErrored(1)withMessage(1)", [1, 1], call1223, opresult1242);
              return call1243;
            };
            cases1176.push(block1207);
            setLineNumber(183);    // compiletrycatch
            var catchres1176 = tryCatch(block1177,cases1176,false);
            setModuleName("gUnit");
            setLineNumber(193);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call1246 = callmethodChecked(this, "name", []);
            // call case 6: other requests
            var call1247 = callmethodChecked(var_result, "testFinished(1)", [1], call1246);
            return call1247;
          };
          func1169.paramCounts = [1];
          obj1159.methods["run(1)"] = func1169;
          func1169.definitionLine = 180;
          func1169.definitionModule = "gUnit";
          var func1248 = function(argcv) {    // method debug(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_result = arguments[curarg];
            curarg++;
            setModuleName("gUnit");
            setLineNumber(197);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call1250 = callmethodChecked(this, "currentResult:=(1)", [1], var_result);
            setLineNumber(198);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call1253 = callmethodChecked(this, "name", []);
            // call case 6: other requests
            var call1254 = callmethodChecked(var_result, "testStarted(1)", [1], call1253);
            setLineNumber(199);    // compilenode block
            var block1256 = new GraceBlock(this, 199, 0);
            block1256.real = function() {
              setLineNumber(200);    // compilenode string
              var string1257 = new GraceString(" ...");
              // call case 4: self request
              onSelf = true;
              var call1260 = callmethodChecked(this, "name", []);
              var string1262 = new GraceString("\ndebugging method ");
              var opresult1264 = callmethodChecked(string1262, "++(1)", [1], call1260);
              var opresult1266 = callmethodChecked(opresult1264, "++(1)", [1], string1257);
              var call1267 = Grace_print(opresult1266);
              setLineNumber(201);    // compilenode block
              var block1269 = new GraceBlock(this, 201, 0);
              block1269.real = function() {
                setLineNumber(202);    // compilenode member
                // call case 4: self request
                onSelf = true;
                var call1271 = callmethodChecked(this, "setup", []);
                setLineNumber(203);    // compilenode member
                // call case 4: self request
                onSelf = true;
                var call1273 = callmethodChecked(this, "runTest", []);
                return call1273;
              };
              var cases1268 = [];
              setLineNumber(204);    // compilenode block
              var block1274 = new GraceBlock(this, 204, 0);
              block1274.real = function() {
                // call case 4: self request
                onSelf = true;
                var call1276 = callmethodChecked(this, "teardown", []);
                return call1276;
              };
              setLineNumber(201);    // compiletrycatch
              var catchres1268 = tryCatch(block1269,cases1268,block1274);
              setModuleName("gUnit");
              return catchres1268;
            };
            var cases1255 = [];
            setLineNumber(205);    // compilenode block
            var block1277 = new GraceBlock(this, 205, 1);
            setLineNumber(188);    // compilenode string
            var string1280 = new GraceString("e");
            // call case 6: other requests
            // call case 5: prelude request
            var call1282 = callmethodChecked(var_prelude, "VariablePattern", []);
            var call1283 = callmethodChecked(call1282, "new(1)", [1], string1280);
            setLineNumber(205);    // compilenode member
            // call case 5: prelude request
            var call1285 = callmethodChecked(var_prelude, "Exception", []);
            // call case 6: other requests
            setLineNumber(188);    // compilenode member
            // call case 5: prelude request
            var call1287 = callmethodChecked(var_prelude, "AndPattern", []);
            var call1288 = callmethodChecked(call1287, "new(2)", [2], call1283, call1285);
            block1277.pattern = call1288;
            setLineNumber(205);    // compilenode member
            // call case 5: prelude request
            var call1290 = callmethodChecked(var_prelude, "Exception", []);
            block1277.paramTypes = [call1290];
            block1277.real = function(var_e) {
              setLineNumber(206);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call1293 = callmethodChecked(this, "name", []);
              // call case 6: other requests
              var call1295 = callmethodChecked(var_e, "message", []);
              // call case 6: other requests
              var call1296 = callmethodChecked(var_result, "testErrored(1)withMessage(1)", [1, 1], call1293, call1295);
              setLineNumber(207);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call1299 = callmethodChecked(this, "name", []);
              // call case 4: self request
              onSelf = true;
              var call1300 = callmethodChecked(this, "printBackTrace(1)limitedTo(1)", [1, 1], var_e, call1299);
              return call1300;
            };
            cases1255.push(block1277);
            setLineNumber(199);    // compiletrycatch
            var catchres1255 = tryCatch(block1256,cases1255,false);
            setModuleName("gUnit");
            setLineNumber(209);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call1303 = callmethodChecked(this, "name", []);
            // call case 6: other requests
            var call1304 = callmethodChecked(var_result, "testFinished(1)", [1], call1303);
            return call1304;
          };
          func1248.paramCounts = [1];
          obj1159.methods["debug(1)"] = func1248;
          func1248.definitionLine = 196;
          func1248.definitionModule = "gUnit";
          var func1305 = function(argcv) {    // method runTest
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("gUnit");
            setLineNumber(213);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call1308 = callmethodChecked(this, "name", []);
            // call case 6: other requests
            // call case 6: other requests
            var call1310 = callmethodChecked(var_mirror, "reflect(1)", [1], this);
            var call1311 = callmethodChecked(call1310, "getMethod(1)", [1], call1308);
            var var_methodImage = call1311;
            setLineNumber(214);    // compilenode member
            // call case 5: prelude request
            var call1314 = callmethodChecked(var_prelude, "emptySequence", []);
            // call case 6: other requests
            var call1315 = callmethodChecked(var_methodImage, "requestWithArgs(1)", [1], call1314);
            return call1315;
          };
          func1305.paramCounts = [0];
          obj1159.methods["runTest"] = func1305;
          func1305.definitionLine = 212;
          func1305.definitionModule = "gUnit";
          var func1316 = function(argcv) {    // method printBackTrace(_)limitedTo(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_exceptionPacket = arguments[curarg];
            curarg++;
            var var_testName = arguments[curarg];
            curarg++;
            setModuleName("gUnit");
            setLineNumber(218);    // compilenode member
            // call case 6: other requests
            var call1318 = callmethodChecked(var_exceptionPacket, "exception", []);
            var var_ex = call1318;
            setLineNumber(219);    // compilenode member
            // call case 6: other requests
            var call1320 = callmethodChecked(var_exceptionPacket, "message", []);
            var var_msg = call1320;
            setLineNumber(220);    // compilenode member
            // call case 6: other requests
            var call1322 = callmethodChecked(var_exceptionPacket, "lineNumber", []);
            var var_lineNr = call1322;
            setLineNumber(221);    // compilenode string
            var string1323 = new GraceString("");
            var string1326 = new GraceString(": ");
            var string1329 = new GraceString(" on line ");
            var string1332 = new GraceString("");
            var opresult1334 = callmethodChecked(string1332, "++(1)", [1], var_ex);
            var opresult1336 = callmethodChecked(opresult1334, "++(1)", [1], string1329);
            var opresult1338 = callmethodChecked(opresult1336, "++(1)", [1], var_lineNr);
            var opresult1340 = callmethodChecked(opresult1338, "++(1)", [1], string1326);
            var opresult1342 = callmethodChecked(opresult1340, "++(1)", [1], var_msg);
            var opresult1344 = callmethodChecked(opresult1342, "++(1)", [1], string1323);
            var call1345 = Grace_print(opresult1344);
            setLineNumber(222);    // compilenode member
            // call case 6: other requests
            var call1347 = callmethodChecked(var_exceptionPacket, "backtrace", []);
            var var_bt = call1347;
            setLineNumber(223);    // compilenode block
            var block1349 = new GraceBlock(this, 223, 0);
            block1349.real = function() {
              // call case 6: other requests
              var call1352 = callmethodChecked(var_bt, "size", []);
              var opresult1354 = callmethodChecked(call1352, ">(1)", [1], new GraceNum(0));
              return opresult1354;
            };
            var block1355 = new GraceBlock(this, 223, 0);
            block1355.real = function() {
              setLineNumber(224);    // compilenode member
              // call case 6: other requests
              var call1357 = callmethodChecked(var_bt, "pop", []);
              var var_frameDescription = call1357;
              setLineNumber(225);    // compilenode string
              var string1359 = new GraceString("  called from ");
              var opresult1361 = callmethodChecked(string1359, "++(1)", [1], var_frameDescription);
              var call1362 = Grace_print(opresult1361);
              var if1363 = GraceDone;
              setLineNumber(226);    // compilenode identifier
              // call case 6: other requests
              var call1365 = callmethodChecked(var_frameDescription, "contains(1)", [1], var_testName);
              if (Grace_isTrue(call1365)) {
                throw new ReturnException(var_done, returnTarget);
              }
              var if1366 = GraceDone;
              setLineNumber(227);    // compilenode string
              var string1368 = new GraceString("testCaseNamed()setupIn()asTestNumber");
              // call case 6: other requests
              var call1369 = callmethodChecked(var_frameDescription, "contains(1)", [1], string1368);
              if (Grace_isTrue(call1369)) {
                setLineNumber(231);    // compilenode identifier
                throw new ReturnException(var_done, returnTarget);
              }
              return if1366;
            };
            // call case 5: prelude request
            var call1370 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block1349, block1355);
            return call1370;
          };
          func1316.paramCounts = [1, 1];
          obj1159.methods["printBackTrace(1)limitedTo(1)"] = func1316;
          func1316.definitionLine = 217;
          func1316.definitionModule = "gUnit";
          var func1371 = function(argcv) {    // method runAndPrintResults
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("gUnit");
            setLineNumber(236);    // compilenode member
            // call case 6: other requests
            // call case 3: self.outer request
            var call1374 = callmethodChecked(superDepth, "outer", [0]);
            onSelf = true;
            var call1375 = callmethodChecked(call1374, "testResult", []);
            var var_result = call1375;
            setLineNumber(237);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call1377 = callmethodChecked(this, "run(1)", [1], var_result);
            var if1378 = GraceDone;
            setLineNumber(238);    // compilenode string
            var string1379 = new GraceString("");
            // call case 4: self request
            onSelf = true;
            var call1382 = callmethodChecked(this, "name", []);
            var opresult1384 = callmethodChecked(call1382, "==(1)", [1], string1379);
            if (Grace_isTrue(opresult1384)) {
              setLineNumber(239);    // compilenode string
              var string1385 = new GraceString("");
              // call case 6: other requests
              var call1388 = callmethodChecked(var_result, "detailedSummary", []);
              var string1390 = new GraceString("");
              var opresult1392 = callmethodChecked(string1390, "++(1)", [1], call1388);
              var opresult1394 = callmethodChecked(opresult1392, "++(1)", [1], string1385);
              var call1395 = Grace_print(opresult1394);
              if1378 = call1395;
            } else {
              setLineNumber(241);    // compilenode string
              var string1396 = new GraceString("");
              // call case 6: other requests
              var call1399 = callmethodChecked(var_result, "detailedSummary", []);
              var string1401 = new GraceString(": ");
              // call case 4: self request
              onSelf = true;
              var call1404 = callmethodChecked(this, "name", []);
              var string1406 = new GraceString("");
              var opresult1408 = callmethodChecked(string1406, "++(1)", [1], call1404);
              var opresult1410 = callmethodChecked(opresult1408, "++(1)", [1], string1401);
              var opresult1412 = callmethodChecked(opresult1410, "++(1)", [1], call1399);
              var opresult1414 = callmethodChecked(opresult1412, "++(1)", [1], string1396);
              var call1415 = Grace_print(opresult1414);
              if1378 = call1415;
            }
            return if1378;
          };
          func1371.paramCounts = [0];
          obj1159.methods["runAndPrintResults"] = func1371;
          func1371.definitionLine = 235;
          func1371.definitionModule = "gUnit";
          var func1416 = function(argcv) {    // method debugAndPrintResults
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("gUnit");
            setLineNumber(246);    // compilenode member
            // call case 6: other requests
            // call case 3: self.outer request
            var call1419 = callmethodChecked(superDepth, "outer", [0]);
            onSelf = true;
            var call1420 = callmethodChecked(call1419, "testResult", []);
            var var_result = call1420;
            setLineNumber(247);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call1422 = callmethodChecked(this, "debug(1)", [1], var_result);
            var if1423 = GraceDone;
            setLineNumber(248);    // compilenode string
            var string1424 = new GraceString("");
            // call case 4: self request
            onSelf = true;
            var call1427 = callmethodChecked(this, "name", []);
            var opresult1429 = callmethodChecked(call1427, "==(1)", [1], string1424);
            if (Grace_isTrue(opresult1429)) {
              setLineNumber(249);    // compilenode string
              var string1430 = new GraceString("");
              // call case 6: other requests
              var call1433 = callmethodChecked(var_result, "detailedSummary", []);
              var string1435 = new GraceString("");
              var opresult1437 = callmethodChecked(string1435, "++(1)", [1], call1433);
              var opresult1439 = callmethodChecked(opresult1437, "++(1)", [1], string1430);
              var call1440 = Grace_print(opresult1439);
              if1423 = call1440;
            } else {
              setLineNumber(251);    // compilenode string
              var string1441 = new GraceString("");
              // call case 6: other requests
              var call1444 = callmethodChecked(var_result, "detailedSummary", []);
              var string1446 = new GraceString(": ");
              // call case 4: self request
              onSelf = true;
              var call1449 = callmethodChecked(this, "name", []);
              var string1451 = new GraceString("");
              var opresult1453 = callmethodChecked(string1451, "++(1)", [1], call1449);
              var opresult1455 = callmethodChecked(opresult1453, "++(1)", [1], string1446);
              var opresult1457 = callmethodChecked(opresult1455, "++(1)", [1], call1444);
              var opresult1459 = callmethodChecked(opresult1457, "++(1)", [1], string1441);
              var call1460 = Grace_print(opresult1459);
              if1423 = call1460;
            }
            return if1423;
          };
          func1416.paramCounts = [0];
          obj1159.methods["debugAndPrintResults"] = func1416;
          func1416.definitionLine = 245;
          func1416.definitionModule = "gUnit";
          setLineNumber(168);    // compilenode identifier
          // call case 6: other requests
          // call case 3: self.outer request
          var call1463 = callmethodChecked(superDepth, "outer", [0]);
          var call1464 = callmethodChecked(call1463, "assertion$object(1)", [0, 1], this);
          obj1159.superobj = call1464;
          if (call1464.data) obj1159.data = call1464.data;
          if (call1464.hasOwnProperty('_value'))
              obj1159._value = call1464._value;
          setLineNumber(170);    // compilenode num
          obj1159.data["size"] = new GraceNum(1);
          var reader_gUnit_size1465 = function() {
            return this.data["size"];
          };
          reader_gUnit_size1465.def = true;
          obj1159.methods["size"] = reader_gUnit_size1465;
          obj1159.data["currentResult"] = undefined;
          var reader_gUnit_currentResult1466 = function() {
            return this.data["currentResult"];
          };
          obj1159.methods["currentResult"] = reader_gUnit_currentResult1466;
          obj1159.data["currentResult"] = undefined;
          var writer_gUnit_currentResult1466 = function(argcv, o) {
            this.data["currentResult"] = o;
            return GraceDone;
          };
          obj1159.methods["currentResult:=(1)"] = writer_gUnit_currentResult1466;
          reader_gUnit_currentResult1466.confidential = true;
          writer_gUnit_currentResult1466.confidential = true;
          obj1159.mutable = true;
          superDepth = origSuperDepth;
        };
        obj_init_1159.apply(inheritingObject, []);
        return obj1159;
        };
        this.methods["testCaseNamed(1)$object(1)"] = func1158;
      setLineNumber(257);    // compilenode method
      var func1467 = function(argcv) {    // method testResult
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("gUnit");
        var obj1468 = Grace_allocObject(GraceObject, "testResult");
        obj1468.definitionModule = "gUnit";
        obj1468.definitionLine = 257;
        obj1468.outer = this;
        var reader_gUnit_outer1469 = function() {
          return this.outer;
        };
        obj1468.methods["outer"] = reader_gUnit_outer1469;
        var obj_init_1468 = function() {
          var origSuperDepth = superDepth;
          superDepth = obj1468;
          var func1470 = function(argcv) {    // method countOneAssertion
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("gUnit");
            setLineNumber(264);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call1474 = callmethodChecked(this, "currentCountOfAssertions", []);
            var opresult1476 = callmethodChecked(call1474, "+(1)", [1], new GraceNum(1));
            // call case 4: self request
            onSelf = true;
            var call1477 = callmethodChecked(this, "currentCountOfAssertions:=(1)", [1], opresult1476);
            return call1477;
          };
          func1470.paramCounts = [0];
          obj1468.methods["countOneAssertion"] = func1470;
          func1470.definitionLine = 263;
          func1470.definitionModule = "gUnit";
          var func1478 = function(argcv) {    // method testStarted(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_name = arguments[curarg];
            curarg++;
            setModuleName("gUnit");
            setLineNumber(268);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call1482 = callmethodChecked(this, "runCount", []);
            var opresult1484 = callmethodChecked(call1482, "+(1)", [1], new GraceNum(1));
            // call case 4: self request
            onSelf = true;
            var call1485 = callmethodChecked(this, "runCount:=(1)", [1], opresult1484);
            setLineNumber(269);    // compilenode num
            // call case 4: self request
            onSelf = true;
            var call1487 = callmethodChecked(this, "currentCountOfAssertions:=(1)", [1], new GraceNum(0));
            return call1487;
          };
          func1478.paramCounts = [1];
          obj1468.methods["testStarted(1)"] = func1478;
          func1478.definitionLine = 267;
          func1478.definitionModule = "gUnit";
          var func1488 = function(argcv) {    // method testFinished(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_name = arguments[curarg];
            curarg++;
            setModuleName("gUnit");
            var if1489 = GraceDone;
            setLineNumber(273);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call1492 = callmethodChecked(this, "currentCountOfAssertions", []);
            var opresult1494 = callmethodChecked(call1492, "==(1)", [1], new GraceNum(0));
            if (Grace_isTrue(opresult1494)) {
              setLineNumber(274);    // compilenode string
              var string1497 = new GraceString("no assertions were checked in this test");
              // call case 6: other requests
              // call case 3: self.outer request
              var call1499 = callmethodChecked(superDepth, "outer", [0]);
              onSelf = true;
              var call1500 = callmethodChecked(call1499, "testRecordFor(1)message(1)", [1, 1], var_name, string1497);
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call1502 = callmethodChecked(this, "failSet", []);
              var call1503 = callmethodChecked(call1502, "add(1)", [1], call1500);
              if1489 = call1503;
            }
            return if1489;
          };
          func1488.paramCounts = [1];
          obj1468.methods["testFinished(1)"] = func1488;
          func1488.definitionLine = 272;
          func1488.definitionModule = "gUnit";
          var func1504 = function(argcv) {    // method testFailed(_)withMessage(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_name = arguments[curarg];
            curarg++;
            var var_msg = arguments[curarg];
            curarg++;
            setModuleName("gUnit");
            setLineNumber(279);    // compilenode identifier
            // call case 6: other requests
            // call case 3: self.outer request
            var call1508 = callmethodChecked(superDepth, "outer", [0]);
            onSelf = true;
            var call1509 = callmethodChecked(call1508, "testRecordFor(1)message(1)", [1, 1], var_name, var_msg);
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call1511 = callmethodChecked(this, "failSet", []);
            var call1512 = callmethodChecked(call1511, "add(1)", [1], call1509);
            return call1512;
          };
          func1504.paramCounts = [1, 1];
          obj1468.methods["testFailed(1)withMessage(1)"] = func1504;
          func1504.definitionLine = 278;
          func1504.definitionModule = "gUnit";
          var func1513 = function(argcv) {    // method testErrored(_)withMessage(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_name = arguments[curarg];
            curarg++;
            var var_msg = arguments[curarg];
            curarg++;
            setModuleName("gUnit");
            setLineNumber(283);    // compilenode identifier
            // call case 6: other requests
            // call case 3: self.outer request
            var call1517 = callmethodChecked(superDepth, "outer", [0]);
            onSelf = true;
            var call1518 = callmethodChecked(call1517, "testRecordFor(1)message(1)", [1, 1], var_name, var_msg);
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call1520 = callmethodChecked(this, "errorSet", []);
            var call1521 = callmethodChecked(call1520, "add(1)", [1], call1518);
            setLineNumber(284);    // compilenode num
            // call case 4: self request
            onSelf = true;
            var call1523 = callmethodChecked(this, "currentCountOfAssertions:=(1)", [1], new GraceNum(1));
            return call1523;
          };
          func1513.paramCounts = [1, 1];
          obj1468.methods["testErrored(1)withMessage(1)"] = func1513;
          func1513.definitionLine = 282;
          func1513.definitionModule = "gUnit";
          var func1524 = function(argcv) {    // method summary
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("gUnit");
            var if1525 = GraceDone;
            setLineNumber(288);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call1528 = callmethodChecked(this, "numberOfErrors", []);
            var opresult1530 = callmethodChecked(call1528, "==(1)", [1], new GraceNum(1));
            if (Grace_isTrue(opresult1530)) {
              var string1531 = new GraceString("");
              if1525 = string1531;
            } else {
              var string1532 = new GraceString("s");
              if1525 = string1532;
            }
            var var_s = if1525;
            setLineNumber(289);    // compilenode string
            var string1533 = new GraceString("");
            var string1536 = new GraceString(" error");
            // call case 4: self request
            onSelf = true;
            var call1539 = callmethodChecked(this, "numberOfErrors", []);
            var string1541 = new GraceString(" failed, ");
            // call case 4: self request
            onSelf = true;
            var call1544 = callmethodChecked(this, "numberOfFailures", []);
            var string1546 = new GraceString(" run, ");
            // call case 4: self request
            onSelf = true;
            var call1549 = callmethodChecked(this, "runCount", []);
            var string1551 = new GraceString("");
            var opresult1553 = callmethodChecked(string1551, "++(1)", [1], call1549);
            var opresult1555 = callmethodChecked(opresult1553, "++(1)", [1], string1546);
            var opresult1557 = callmethodChecked(opresult1555, "++(1)", [1], call1544);
            var opresult1559 = callmethodChecked(opresult1557, "++(1)", [1], string1541);
            var opresult1561 = callmethodChecked(opresult1559, "++(1)", [1], call1539);
            var opresult1563 = callmethodChecked(opresult1561, "++(1)", [1], string1536);
            var opresult1565 = callmethodChecked(opresult1563, "++(1)", [1], var_s);
            var opresult1567 = callmethodChecked(opresult1565, "++(1)", [1], string1533);
            return opresult1567;
          };
          func1524.paramCounts = [0];
          obj1468.methods["summary"] = func1524;
          func1524.definitionLine = 287;
          func1524.definitionModule = "gUnit";
          var func1568 = function(argcv) {    // method detailedSummary
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("gUnit");
            setLineNumber(293);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call1570 = callmethodChecked(this, "summary", []);
            var var_output = call1570;
            var if1571 = GraceDone;
            setLineNumber(294);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call1574 = callmethodChecked(this, "numberOfFailures", []);
            var opresult1576 = callmethodChecked(call1574, ">(1)", [1], new GraceNum(0));
            if (Grace_isTrue(opresult1576)) {
              setLineNumber(295);    // compilenode string
              var string1577 = new GraceString("\nFailures:");
              var opresult1580 = callmethodChecked(var_output, "++(1)", [1], string1577);
              var_output = opresult1580;
              setLineNumber(296);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call1585 = callmethodChecked(this, "failSet", []);
              var call1586 = callmethodChecked(call1585, "asList", []);
              var call1587 = callmethodChecked(call1586, "sort", []);
              var block1588 = new GraceBlock(this, 296, 1);
              setLineNumber(1);    // compilenode identifier
              block1588.real = function(var_each) {
                setLineNumber(297);    // compilenode string
                var string1590 = new GraceString("\n    ");
                var opresult1593 = callmethodChecked(var_output, "++(1)", [1], string1590);
                var opresult1595 = callmethodChecked(opresult1593, "++(1)", [1], var_each);
                var_output = opresult1595;
                return GraceDone;
              };
              // call case 5: prelude request
              var call1596 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1587, block1588);
              if1571 = call1596;
            }
            var if1597 = GraceDone;
            setLineNumber(300);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call1600 = callmethodChecked(this, "numberOfErrors", []);
            var opresult1602 = callmethodChecked(call1600, ">(1)", [1], new GraceNum(0));
            if (Grace_isTrue(opresult1602)) {
              setLineNumber(301);    // compilenode string
              var string1603 = new GraceString("\nErrors:");
              var opresult1606 = callmethodChecked(var_output, "++(1)", [1], string1603);
              var_output = opresult1606;
              setLineNumber(302);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call1611 = callmethodChecked(this, "errorSet", []);
              var call1612 = callmethodChecked(call1611, "asList", []);
              var call1613 = callmethodChecked(call1612, "sort", []);
              var block1614 = new GraceBlock(this, 302, 1);
              setLineNumber(1);    // compilenode identifier
              block1614.real = function(var_each) {
                setLineNumber(303);    // compilenode string
                var string1616 = new GraceString("\n    ");
                var opresult1619 = callmethodChecked(var_output, "++(1)", [1], string1616);
                var opresult1621 = callmethodChecked(opresult1619, "++(1)", [1], var_each);
                var_output = opresult1621;
                return GraceDone;
              };
              // call case 5: prelude request
              var call1622 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1613, block1614);
              if1597 = call1622;
            }
            setLineNumber(306);    // compilenode identifier
            return var_output;
          };
          func1568.paramCounts = [0];
          obj1468.methods["detailedSummary"] = func1568;
          func1568.definitionLine = 292;
          func1568.definitionModule = "gUnit";
          var func1623 = function(argcv) {    // method numberOfErrors
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("gUnit");
            setLineNumber(310);    // compilenode member
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call1626 = callmethodChecked(this, "errorSet", []);
            var call1627 = callmethodChecked(call1626, "size", []);
            return call1627;
          };
          func1623.paramCounts = [0];
          obj1468.methods["numberOfErrors"] = func1623;
          func1623.definitionLine = 309;
          func1623.definitionModule = "gUnit";
          var func1628 = function(argcv) {    // method errors
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("gUnit");
            setLineNumber(314);    // compilenode member
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call1632 = callmethodChecked(this, "errorSet", []);
            // call case 5: prelude request
            var call1633 = callmethodChecked(var_prelude, "list(1)", [1], call1632);
            var call1634 = callmethodChecked(call1633, "sort", []);
            return call1634;
          };
          func1628.paramCounts = [0];
          obj1468.methods["errors"] = func1628;
          func1628.definitionLine = 313;
          func1628.definitionModule = "gUnit";
          var func1635 = function(argcv) {    // method erroredTestNames
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("gUnit");
            setLineNumber(318);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var block1639 = new GraceBlock(this, 318, 1);
            setLineNumber(1);    // compilenode identifier
            block1639.real = function(var_each) {
              setLineNumber(318);    // compilenode member
              // call case 6: other requests
              var call1641 = callmethodChecked(var_each, "name", []);
              return call1641;
            };
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call1643 = callmethodChecked(this, "errorSet", []);
            var call1644 = callmethodChecked(call1643, "map(1)", [1], block1639);
            var call1645 = callmethodChecked(call1644, "asList", []);
            var call1646 = callmethodChecked(call1645, "sort", []);
            return call1646;
          };
          func1635.paramCounts = [0];
          obj1468.methods["erroredTestNames"] = func1635;
          func1635.definitionLine = 317;
          func1635.definitionModule = "gUnit";
          var func1647 = function(argcv) {    // method numberOfFailures
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("gUnit");
            setLineNumber(322);    // compilenode member
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call1650 = callmethodChecked(this, "failSet", []);
            var call1651 = callmethodChecked(call1650, "size", []);
            return call1651;
          };
          func1647.paramCounts = [0];
          obj1468.methods["numberOfFailures"] = func1647;
          func1647.definitionLine = 321;
          func1647.definitionModule = "gUnit";
          var func1652 = function(argcv) {    // method failures
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("gUnit");
            setLineNumber(326);    // compilenode member
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call1656 = callmethodChecked(this, "failSet", []);
            // call case 5: prelude request
            var call1657 = callmethodChecked(var_prelude, "list(1)", [1], call1656);
            var call1658 = callmethodChecked(call1657, "sort", []);
            return call1658;
          };
          func1652.paramCounts = [0];
          obj1468.methods["failures"] = func1652;
          func1652.definitionLine = 325;
          func1652.definitionModule = "gUnit";
          var func1659 = function(argcv) {    // method failedTestNames
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("gUnit");
            setLineNumber(330);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var block1663 = new GraceBlock(this, 330, 1);
            setLineNumber(1);    // compilenode identifier
            block1663.real = function(var_each) {
              setLineNumber(330);    // compilenode member
              // call case 6: other requests
              var call1665 = callmethodChecked(var_each, "name", []);
              return call1665;
            };
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call1667 = callmethodChecked(this, "failSet", []);
            var call1668 = callmethodChecked(call1667, "map(1)", [1], block1663);
            var call1669 = callmethodChecked(call1668, "asList", []);
            var call1670 = callmethodChecked(call1669, "sort", []);
            return call1670;
          };
          func1659.paramCounts = [0];
          obj1468.methods["failedTestNames"] = func1659;
          func1659.definitionLine = 329;
          func1659.definitionModule = "gUnit";
          var func1671 = function(argcv) {    // method numberRun
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("gUnit");
            setLineNumber(334);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call1673 = callmethodChecked(this, "runCount", []);
            return call1673;
          };
          func1671.paramCounts = [0];
          obj1468.methods["numberRun"] = func1671;
          func1671.definitionLine = 333;
          func1671.definitionModule = "gUnit";
          setLineNumber(258);    // compilenode member
          // call case 5: prelude request
          var call1675 = callmethodChecked(var_prelude, "emptySet", []);
          obj1468.data["failSet"] = call1675;
          var reader_gUnit_failSet1676 = function() {
            return this.data["failSet"];
          };
          obj1468.methods["failSet"] = reader_gUnit_failSet1676;
          obj1468.data["failSet"] = call1675;
          var writer_gUnit_failSet1676 = function(argcv, o) {
            this.data["failSet"] = o;
            return GraceDone;
          };
          obj1468.methods["failSet:=(1)"] = writer_gUnit_failSet1676;
          reader_gUnit_failSet1676.confidential = true;
          writer_gUnit_failSet1676.confidential = true;
          obj1468.mutable = true;
          setLineNumber(259);    // compilenode member
          // call case 5: prelude request
          var call1678 = callmethodChecked(var_prelude, "emptySet", []);
          obj1468.data["errorSet"] = call1678;
          var reader_gUnit_errorSet1679 = function() {
            return this.data["errorSet"];
          };
          obj1468.methods["errorSet"] = reader_gUnit_errorSet1679;
          obj1468.data["errorSet"] = call1678;
          var writer_gUnit_errorSet1679 = function(argcv, o) {
            this.data["errorSet"] = o;
            return GraceDone;
          };
          obj1468.methods["errorSet:=(1)"] = writer_gUnit_errorSet1679;
          reader_gUnit_errorSet1679.confidential = true;
          writer_gUnit_errorSet1679.confidential = true;
          obj1468.mutable = true;
          setLineNumber(260);    // compilenode num
          obj1468.data["runCount"] = new GraceNum(0);
          var reader_gUnit_runCount1680 = function() {
            return this.data["runCount"];
          };
          obj1468.methods["runCount"] = reader_gUnit_runCount1680;
          obj1468.data["runCount"] = new GraceNum(0);
          var writer_gUnit_runCount1680 = function(argcv, o) {
            this.data["runCount"] = o;
            return GraceDone;
          };
          obj1468.methods["runCount:=(1)"] = writer_gUnit_runCount1680;
          reader_gUnit_runCount1680.confidential = true;
          writer_gUnit_runCount1680.confidential = true;
          obj1468.mutable = true;
          setLineNumber(261);    // compilenode num
          obj1468.data["currentCountOfAssertions"] = new GraceNum(0);
          var reader_gUnit_currentCountOfAssertions1681 = function() {
            return this.data["currentCountOfAssertions"];
          };
          obj1468.methods["currentCountOfAssertions"] = reader_gUnit_currentCountOfAssertions1681;
          obj1468.data["currentCountOfAssertions"] = new GraceNum(0);
          var writer_gUnit_currentCountOfAssertions1681 = function(argcv, o) {
            this.data["currentCountOfAssertions"] = o;
            return GraceDone;
          };
          obj1468.methods["currentCountOfAssertions:=(1)"] = writer_gUnit_currentCountOfAssertions1681;
          reader_gUnit_currentCountOfAssertions1681.confidential = true;
          writer_gUnit_currentCountOfAssertions1681.confidential = true;
          obj1468.mutable = true;
          superDepth = origSuperDepth;
        };
        obj_init_1468.apply(obj1468, []);
        return obj1468;
      };
      func1467.paramCounts = [0];
      this.methods["testResult"] = func1467;
      func1467.definitionLine = 257;
      func1467.definitionModule = "gUnit";
        var func1682 = function(argcv) {    // method testResult$object(_)
          var curarg = 1;
          var inheritingObject = arguments[curarg++];
          // Start argument processing
          curarg = 1;
          // End argument processing
          setModuleName("gUnit");
          var returnTarget = invocationCount;
          invocationCount++;
          var obj1683 = Grace_allocObject(GraceObject, "testResult");
          obj1683.definitionModule = "gUnit";
          obj1683.definitionLine = 257;
          var inho1683 = inheritingObject;
          while (inho1683.superobj) inho1683 = inho1683.superobj;
          inho1683.superobj = obj1683;
          obj1683.data = inheritingObject.data;
          if (inheritingObject.hasOwnProperty('_value'))
            obj1683._value = inheritingObject._value;
          obj1683.outer = this;
          var reader_gUnit_outer1684 = function() {
            return this.outer;
          };
          obj1683.methods["outer"] = reader_gUnit_outer1684;
          var obj_init_1683 = function() {
            var origSuperDepth = superDepth;
            superDepth = obj1683;
            var func1685 = function(argcv) {    // method countOneAssertion
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("gUnit");
              setLineNumber(264);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call1689 = callmethodChecked(this, "currentCountOfAssertions", []);
              var opresult1691 = callmethodChecked(call1689, "+(1)", [1], new GraceNum(1));
              // call case 4: self request
              onSelf = true;
              var call1692 = callmethodChecked(this, "currentCountOfAssertions:=(1)", [1], opresult1691);
              return call1692;
            };
            func1685.paramCounts = [0];
            obj1683.methods["countOneAssertion"] = func1685;
            func1685.definitionLine = 263;
            func1685.definitionModule = "gUnit";
            var func1693 = function(argcv) {    // method testStarted(_)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_name = arguments[curarg];
              curarg++;
              setModuleName("gUnit");
              setLineNumber(268);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call1697 = callmethodChecked(this, "runCount", []);
              var opresult1699 = callmethodChecked(call1697, "+(1)", [1], new GraceNum(1));
              // call case 4: self request
              onSelf = true;
              var call1700 = callmethodChecked(this, "runCount:=(1)", [1], opresult1699);
              setLineNumber(269);    // compilenode num
              // call case 4: self request
              onSelf = true;
              var call1702 = callmethodChecked(this, "currentCountOfAssertions:=(1)", [1], new GraceNum(0));
              return call1702;
            };
            func1693.paramCounts = [1];
            obj1683.methods["testStarted(1)"] = func1693;
            func1693.definitionLine = 267;
            func1693.definitionModule = "gUnit";
            var func1703 = function(argcv) {    // method testFinished(_)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_name = arguments[curarg];
              curarg++;
              setModuleName("gUnit");
              var if1704 = GraceDone;
              setLineNumber(273);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call1707 = callmethodChecked(this, "currentCountOfAssertions", []);
              var opresult1709 = callmethodChecked(call1707, "==(1)", [1], new GraceNum(0));
              if (Grace_isTrue(opresult1709)) {
                setLineNumber(274);    // compilenode string
                var string1712 = new GraceString("no assertions were checked in this test");
                // call case 6: other requests
                // call case 3: self.outer request
                var call1714 = callmethodChecked(superDepth, "outer", [0]);
                onSelf = true;
                var call1715 = callmethodChecked(call1714, "testRecordFor(1)message(1)", [1, 1], var_name, string1712);
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call1717 = callmethodChecked(this, "failSet", []);
                var call1718 = callmethodChecked(call1717, "add(1)", [1], call1715);
                if1704 = call1718;
              }
              return if1704;
            };
            func1703.paramCounts = [1];
            obj1683.methods["testFinished(1)"] = func1703;
            func1703.definitionLine = 272;
            func1703.definitionModule = "gUnit";
            var func1719 = function(argcv) {    // method testFailed(_)withMessage(_)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_name = arguments[curarg];
              curarg++;
              var var_msg = arguments[curarg];
              curarg++;
              setModuleName("gUnit");
              setLineNumber(279);    // compilenode identifier
              // call case 6: other requests
              // call case 3: self.outer request
              var call1723 = callmethodChecked(superDepth, "outer", [0]);
              onSelf = true;
              var call1724 = callmethodChecked(call1723, "testRecordFor(1)message(1)", [1, 1], var_name, var_msg);
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call1726 = callmethodChecked(this, "failSet", []);
              var call1727 = callmethodChecked(call1726, "add(1)", [1], call1724);
              return call1727;
            };
            func1719.paramCounts = [1, 1];
            obj1683.methods["testFailed(1)withMessage(1)"] = func1719;
            func1719.definitionLine = 278;
            func1719.definitionModule = "gUnit";
            var func1728 = function(argcv) {    // method testErrored(_)withMessage(_)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_name = arguments[curarg];
              curarg++;
              var var_msg = arguments[curarg];
              curarg++;
              setModuleName("gUnit");
              setLineNumber(283);    // compilenode identifier
              // call case 6: other requests
              // call case 3: self.outer request
              var call1732 = callmethodChecked(superDepth, "outer", [0]);
              onSelf = true;
              var call1733 = callmethodChecked(call1732, "testRecordFor(1)message(1)", [1, 1], var_name, var_msg);
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call1735 = callmethodChecked(this, "errorSet", []);
              var call1736 = callmethodChecked(call1735, "add(1)", [1], call1733);
              setLineNumber(284);    // compilenode num
              // call case 4: self request
              onSelf = true;
              var call1738 = callmethodChecked(this, "currentCountOfAssertions:=(1)", [1], new GraceNum(1));
              return call1738;
            };
            func1728.paramCounts = [1, 1];
            obj1683.methods["testErrored(1)withMessage(1)"] = func1728;
            func1728.definitionLine = 282;
            func1728.definitionModule = "gUnit";
            var func1739 = function(argcv) {    // method summary
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("gUnit");
              var if1740 = GraceDone;
              setLineNumber(288);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call1743 = callmethodChecked(this, "numberOfErrors", []);
              var opresult1745 = callmethodChecked(call1743, "==(1)", [1], new GraceNum(1));
              if (Grace_isTrue(opresult1745)) {
                var string1746 = new GraceString("");
                if1740 = string1746;
              } else {
                var string1747 = new GraceString("s");
                if1740 = string1747;
              }
              var var_s = if1740;
              setLineNumber(289);    // compilenode string
              var string1748 = new GraceString("");
              var string1751 = new GraceString(" error");
              // call case 4: self request
              onSelf = true;
              var call1754 = callmethodChecked(this, "numberOfErrors", []);
              var string1756 = new GraceString(" failed, ");
              // call case 4: self request
              onSelf = true;
              var call1759 = callmethodChecked(this, "numberOfFailures", []);
              var string1761 = new GraceString(" run, ");
              // call case 4: self request
              onSelf = true;
              var call1764 = callmethodChecked(this, "runCount", []);
              var string1766 = new GraceString("");
              var opresult1768 = callmethodChecked(string1766, "++(1)", [1], call1764);
              var opresult1770 = callmethodChecked(opresult1768, "++(1)", [1], string1761);
              var opresult1772 = callmethodChecked(opresult1770, "++(1)", [1], call1759);
              var opresult1774 = callmethodChecked(opresult1772, "++(1)", [1], string1756);
              var opresult1776 = callmethodChecked(opresult1774, "++(1)", [1], call1754);
              var opresult1778 = callmethodChecked(opresult1776, "++(1)", [1], string1751);
              var opresult1780 = callmethodChecked(opresult1778, "++(1)", [1], var_s);
              var opresult1782 = callmethodChecked(opresult1780, "++(1)", [1], string1748);
              return opresult1782;
            };
            func1739.paramCounts = [0];
            obj1683.methods["summary"] = func1739;
            func1739.definitionLine = 287;
            func1739.definitionModule = "gUnit";
            var func1783 = function(argcv) {    // method detailedSummary
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("gUnit");
              setLineNumber(293);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call1785 = callmethodChecked(this, "summary", []);
              var var_output = call1785;
              var if1786 = GraceDone;
              setLineNumber(294);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call1789 = callmethodChecked(this, "numberOfFailures", []);
              var opresult1791 = callmethodChecked(call1789, ">(1)", [1], new GraceNum(0));
              if (Grace_isTrue(opresult1791)) {
                setLineNumber(295);    // compilenode string
                var string1792 = new GraceString("\nFailures:");
                var opresult1795 = callmethodChecked(var_output, "++(1)", [1], string1792);
                var_output = opresult1795;
                setLineNumber(296);    // compilenode member
                // call case 6: other requests
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call1800 = callmethodChecked(this, "failSet", []);
                var call1801 = callmethodChecked(call1800, "asList", []);
                var call1802 = callmethodChecked(call1801, "sort", []);
                var block1803 = new GraceBlock(this, 296, 1);
                setLineNumber(1);    // compilenode identifier
                block1803.real = function(var_each) {
                  setLineNumber(297);    // compilenode string
                  var string1805 = new GraceString("\n    ");
                  var opresult1808 = callmethodChecked(var_output, "++(1)", [1], string1805);
                  var opresult1810 = callmethodChecked(opresult1808, "++(1)", [1], var_each);
                  var_output = opresult1810;
                  return GraceDone;
                };
                // call case 5: prelude request
                var call1811 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1802, block1803);
                if1786 = call1811;
              }
              var if1812 = GraceDone;
              setLineNumber(300);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call1815 = callmethodChecked(this, "numberOfErrors", []);
              var opresult1817 = callmethodChecked(call1815, ">(1)", [1], new GraceNum(0));
              if (Grace_isTrue(opresult1817)) {
                setLineNumber(301);    // compilenode string
                var string1818 = new GraceString("\nErrors:");
                var opresult1821 = callmethodChecked(var_output, "++(1)", [1], string1818);
                var_output = opresult1821;
                setLineNumber(302);    // compilenode member
                // call case 6: other requests
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call1826 = callmethodChecked(this, "errorSet", []);
                var call1827 = callmethodChecked(call1826, "asList", []);
                var call1828 = callmethodChecked(call1827, "sort", []);
                var block1829 = new GraceBlock(this, 302, 1);
                setLineNumber(1);    // compilenode identifier
                block1829.real = function(var_each) {
                  setLineNumber(303);    // compilenode string
                  var string1831 = new GraceString("\n    ");
                  var opresult1834 = callmethodChecked(var_output, "++(1)", [1], string1831);
                  var opresult1836 = callmethodChecked(opresult1834, "++(1)", [1], var_each);
                  var_output = opresult1836;
                  return GraceDone;
                };
                // call case 5: prelude request
                var call1837 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1828, block1829);
                if1812 = call1837;
              }
              setLineNumber(306);    // compilenode identifier
              return var_output;
            };
            func1783.paramCounts = [0];
            obj1683.methods["detailedSummary"] = func1783;
            func1783.definitionLine = 292;
            func1783.definitionModule = "gUnit";
            var func1838 = function(argcv) {    // method numberOfErrors
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("gUnit");
              setLineNumber(310);    // compilenode member
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call1841 = callmethodChecked(this, "errorSet", []);
              var call1842 = callmethodChecked(call1841, "size", []);
              return call1842;
            };
            func1838.paramCounts = [0];
            obj1683.methods["numberOfErrors"] = func1838;
            func1838.definitionLine = 309;
            func1838.definitionModule = "gUnit";
            var func1843 = function(argcv) {    // method errors
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("gUnit");
              setLineNumber(314);    // compilenode member
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call1847 = callmethodChecked(this, "errorSet", []);
              // call case 5: prelude request
              var call1848 = callmethodChecked(var_prelude, "list(1)", [1], call1847);
              var call1849 = callmethodChecked(call1848, "sort", []);
              return call1849;
            };
            func1843.paramCounts = [0];
            obj1683.methods["errors"] = func1843;
            func1843.definitionLine = 313;
            func1843.definitionModule = "gUnit";
            var func1850 = function(argcv) {    // method erroredTestNames
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("gUnit");
              setLineNumber(318);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              var block1854 = new GraceBlock(this, 318, 1);
              setLineNumber(1);    // compilenode identifier
              block1854.real = function(var_each) {
                setLineNumber(318);    // compilenode member
                // call case 6: other requests
                var call1856 = callmethodChecked(var_each, "name", []);
                return call1856;
              };
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call1858 = callmethodChecked(this, "errorSet", []);
              var call1859 = callmethodChecked(call1858, "map(1)", [1], block1854);
              var call1860 = callmethodChecked(call1859, "asList", []);
              var call1861 = callmethodChecked(call1860, "sort", []);
              return call1861;
            };
            func1850.paramCounts = [0];
            obj1683.methods["erroredTestNames"] = func1850;
            func1850.definitionLine = 317;
            func1850.definitionModule = "gUnit";
            var func1862 = function(argcv) {    // method numberOfFailures
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("gUnit");
              setLineNumber(322);    // compilenode member
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call1865 = callmethodChecked(this, "failSet", []);
              var call1866 = callmethodChecked(call1865, "size", []);
              return call1866;
            };
            func1862.paramCounts = [0];
            obj1683.methods["numberOfFailures"] = func1862;
            func1862.definitionLine = 321;
            func1862.definitionModule = "gUnit";
            var func1867 = function(argcv) {    // method failures
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("gUnit");
              setLineNumber(326);    // compilenode member
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call1871 = callmethodChecked(this, "failSet", []);
              // call case 5: prelude request
              var call1872 = callmethodChecked(var_prelude, "list(1)", [1], call1871);
              var call1873 = callmethodChecked(call1872, "sort", []);
              return call1873;
            };
            func1867.paramCounts = [0];
            obj1683.methods["failures"] = func1867;
            func1867.definitionLine = 325;
            func1867.definitionModule = "gUnit";
            var func1874 = function(argcv) {    // method failedTestNames
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("gUnit");
              setLineNumber(330);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              var block1878 = new GraceBlock(this, 330, 1);
              setLineNumber(1);    // compilenode identifier
              block1878.real = function(var_each) {
                setLineNumber(330);    // compilenode member
                // call case 6: other requests
                var call1880 = callmethodChecked(var_each, "name", []);
                return call1880;
              };
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call1882 = callmethodChecked(this, "failSet", []);
              var call1883 = callmethodChecked(call1882, "map(1)", [1], block1878);
              var call1884 = callmethodChecked(call1883, "asList", []);
              var call1885 = callmethodChecked(call1884, "sort", []);
              return call1885;
            };
            func1874.paramCounts = [0];
            obj1683.methods["failedTestNames"] = func1874;
            func1874.definitionLine = 329;
            func1874.definitionModule = "gUnit";
            var func1886 = function(argcv) {    // method numberRun
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("gUnit");
              setLineNumber(334);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call1888 = callmethodChecked(this, "runCount", []);
              return call1888;
            };
            func1886.paramCounts = [0];
            obj1683.methods["numberRun"] = func1886;
            func1886.definitionLine = 333;
            func1886.definitionModule = "gUnit";
            setLineNumber(258);    // compilenode member
            // call case 5: prelude request
            var call1890 = callmethodChecked(var_prelude, "emptySet", []);
            obj1683.data["failSet"] = call1890;
            var reader_gUnit_failSet1891 = function() {
              return this.data["failSet"];
            };
            obj1683.methods["failSet"] = reader_gUnit_failSet1891;
            obj1683.data["failSet"] = call1890;
            var writer_gUnit_failSet1891 = function(argcv, o) {
              this.data["failSet"] = o;
              return GraceDone;
            };
            obj1683.methods["failSet:=(1)"] = writer_gUnit_failSet1891;
            reader_gUnit_failSet1891.confidential = true;
            writer_gUnit_failSet1891.confidential = true;
            obj1683.mutable = true;
            setLineNumber(259);    // compilenode member
            // call case 5: prelude request
            var call1893 = callmethodChecked(var_prelude, "emptySet", []);
            obj1683.data["errorSet"] = call1893;
            var reader_gUnit_errorSet1894 = function() {
              return this.data["errorSet"];
            };
            obj1683.methods["errorSet"] = reader_gUnit_errorSet1894;
            obj1683.data["errorSet"] = call1893;
            var writer_gUnit_errorSet1894 = function(argcv, o) {
              this.data["errorSet"] = o;
              return GraceDone;
            };
            obj1683.methods["errorSet:=(1)"] = writer_gUnit_errorSet1894;
            reader_gUnit_errorSet1894.confidential = true;
            writer_gUnit_errorSet1894.confidential = true;
            obj1683.mutable = true;
            setLineNumber(260);    // compilenode num
            obj1683.data["runCount"] = new GraceNum(0);
            var reader_gUnit_runCount1895 = function() {
              return this.data["runCount"];
            };
            obj1683.methods["runCount"] = reader_gUnit_runCount1895;
            obj1683.data["runCount"] = new GraceNum(0);
            var writer_gUnit_runCount1895 = function(argcv, o) {
              this.data["runCount"] = o;
              return GraceDone;
            };
            obj1683.methods["runCount:=(1)"] = writer_gUnit_runCount1895;
            reader_gUnit_runCount1895.confidential = true;
            writer_gUnit_runCount1895.confidential = true;
            obj1683.mutable = true;
            setLineNumber(261);    // compilenode num
            obj1683.data["currentCountOfAssertions"] = new GraceNum(0);
            var reader_gUnit_currentCountOfAssertions1896 = function() {
              return this.data["currentCountOfAssertions"];
            };
            obj1683.methods["currentCountOfAssertions"] = reader_gUnit_currentCountOfAssertions1896;
            obj1683.data["currentCountOfAssertions"] = new GraceNum(0);
            var writer_gUnit_currentCountOfAssertions1896 = function(argcv, o) {
              this.data["currentCountOfAssertions"] = o;
              return GraceDone;
            };
            obj1683.methods["currentCountOfAssertions:=(1)"] = writer_gUnit_currentCountOfAssertions1896;
            reader_gUnit_currentCountOfAssertions1896.confidential = true;
            writer_gUnit_currentCountOfAssertions1896.confidential = true;
            obj1683.mutable = true;
            superDepth = origSuperDepth;
          };
          obj_init_1683.apply(inheritingObject, []);
          return obj1683;
          };
          this.methods["testResult$object(1)"] = func1682;
        setLineNumber(338);    // compilenode method
        var func1897 = function(argcv) {    // method testRecordFor(_)message(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_testName = arguments[curarg];
          curarg++;
          var var_testMsg = arguments[curarg];
          curarg++;
          setModuleName("gUnit");
          var obj1898 = Grace_allocObject(GraceObject, "testRecordFor(_)message(_)");
          obj1898.definitionModule = "gUnit";
          obj1898.definitionLine = 338;
          obj1898.outer = this;
          var reader_gUnit_outer1899 = function() {
            return this.outer;
          };
          obj1898.methods["outer"] = reader_gUnit_outer1899;
          var obj_init_1898 = function() {
            var origSuperDepth = superDepth;
            superDepth = obj1898;
            var func1900 = function(argcv) {    // method name
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("gUnit");
              // name is a simple accessor - elide try ... catch
              setLineNumber(339);    // compilenode identifier
              return var_testName;
            };
            func1900.paramCounts = [0];
            obj1898.methods["name"] = func1900;
            func1900.definitionLine = 339;
            func1900.definitionModule = "gUnit";
            var func1901 = function(argcv) {    // method message
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("gUnit");
              // message is a simple accessor - elide try ... catch
              setLineNumber(340);    // compilenode identifier
              return var_testMsg;
            };
            func1901.paramCounts = [0];
            obj1898.methods["message"] = func1901;
            func1901.definitionLine = 340;
            func1901.definitionModule = "gUnit";
            var func1902 = function(argcv) {    // method asString
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("gUnit");
              setLineNumber(341);    // compilenode string
              var string1903 = new GraceString("");
              var string1906 = new GraceString(": ");
              // call case 4: self request
              onSelf = true;
              var call1909 = callmethodChecked(this, "name", []);
              var string1911 = new GraceString("");
              var opresult1913 = callmethodChecked(string1911, "++(1)", [1], call1909);
              var opresult1915 = callmethodChecked(opresult1913, "++(1)", [1], string1906);
              var opresult1917 = callmethodChecked(opresult1915, "++(1)", [1], var_testMsg);
              var opresult1919 = callmethodChecked(opresult1917, "++(1)", [1], string1903);
              return opresult1919;
            };
            func1902.paramCounts = [0];
            obj1898.methods["asString"] = func1902;
            func1902.definitionLine = 341;
            func1902.definitionModule = "gUnit";
            var func1920 = function(argcv) {    // method hash
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("gUnit");
              setLineNumber(342);    // compilenode member
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call1923 = callmethodChecked(this, "name", []);
              var call1924 = callmethodChecked(call1923, "hash", []);
              return call1924;
            };
            func1920.paramCounts = [0];
            obj1898.methods["hash"] = func1920;
            func1920.definitionLine = 342;
            func1920.definitionModule = "gUnit";
            var func1925 = function(argcv) {    // method compare(_)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_other = arguments[curarg];
              curarg++;
              setModuleName("gUnit");
              setLineNumber(343);    // compilenode member
              // call case 6: other requests
              var call1928 = callmethodChecked(var_other, "name", []);
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call1930 = callmethodChecked(this, "name", []);
              var call1931 = callmethodChecked(call1930, "compare(1)", [1], call1928);
              return call1931;
            };
            func1925.paramCounts = [1];
            obj1898.methods["compare(1)"] = func1925;
            func1925.definitionLine = 343;
            func1925.definitionModule = "gUnit";
            var func1932 = function(argcv) {    // method <(_)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_other = arguments[curarg];
              curarg++;
              setModuleName("gUnit");
              setLineNumber(344);    // compilenode member
              // call case 6: other requests
              var call1934 = callmethodChecked(var_other, "name", []);
              // call case 4: self request
              onSelf = true;
              var call1937 = callmethodChecked(this, "name", []);
              var opresult1939 = callmethodChecked(call1937, "<(1)", [1], call1934);
              return opresult1939;
            };
            func1932.paramCounts = [1];
            obj1898.methods["<(1)"] = func1932;
            func1932.definitionLine = 344;
            func1932.definitionModule = "gUnit";
            var func1940 = function(argcv) {    // method ≤(_)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_other = arguments[curarg];
              curarg++;
              setModuleName("gUnit");
              setLineNumber(345);    // compilenode member
              // call case 6: other requests
              var call1942 = callmethodChecked(var_other, "name", []);
              // call case 4: self request
              onSelf = true;
              var call1945 = callmethodChecked(this, "name", []);
              var opresult1947 = callmethodChecked(call1945, "\u2264(1)", [1], call1942);
              return opresult1947;
            };
            func1940.paramCounts = [1];
            obj1898.methods["\u2264(1)"] = func1940;
            func1940.definitionLine = 345;
            func1940.definitionModule = "gUnit";
            var func1948 = function(argcv) {    // method ==(_)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_other = arguments[curarg];
              curarg++;
              setModuleName("gUnit");
              setLineNumber(346);    // compilenode member
              // call case 6: other requests
              var call1950 = callmethodChecked(var_other, "name", []);
              // call case 4: self request
              onSelf = true;
              var call1953 = callmethodChecked(this, "name", []);
              var opresult1955 = callmethodChecked(call1953, "==(1)", [1], call1950);
              return opresult1955;
            };
            func1948.paramCounts = [1];
            obj1898.methods["==(1)"] = func1948;
            func1948.definitionLine = 346;
            func1948.definitionModule = "gUnit";
            var func1956 = function(argcv) {    // method >(_)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_other = arguments[curarg];
              curarg++;
              setModuleName("gUnit");
              setLineNumber(347);    // compilenode member
              // call case 6: other requests
              var call1958 = callmethodChecked(var_other, "name", []);
              // call case 4: self request
              onSelf = true;
              var call1961 = callmethodChecked(this, "name", []);
              var opresult1963 = callmethodChecked(call1961, "<(1)", [1], call1958);
              return opresult1963;
            };
            func1956.paramCounts = [1];
            obj1898.methods[">(1)"] = func1956;
            func1956.definitionLine = 347;
            func1956.definitionModule = "gUnit";
            var func1964 = function(argcv) {    // method ≥(_)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_other = arguments[curarg];
              curarg++;
              setModuleName("gUnit");
              setLineNumber(348);    // compilenode member
              // call case 6: other requests
              var call1966 = callmethodChecked(var_other, "name", []);
              // call case 4: self request
              onSelf = true;
              var call1969 = callmethodChecked(this, "name", []);
              var opresult1971 = callmethodChecked(call1969, "\u2265(1)", [1], call1966);
              return opresult1971;
            };
            func1964.paramCounts = [1];
            obj1898.methods["\u2265(1)"] = func1964;
            func1964.definitionLine = 348;
            func1964.definitionModule = "gUnit";
            superDepth = origSuperDepth;
          };
          obj_init_1898.apply(obj1898, []);
          return obj1898;
        };
        func1897.paramCounts = [1, 1];
        this.methods["testRecordFor(1)message(1)"] = func1897;
        func1897.definitionLine = 338;
        func1897.definitionModule = "gUnit";
          var func1972 = function(argcv) {    // method testRecordFor(_)message(_)$object(_)
            var curarg = 1;
            var var_testName = arguments[curarg];
            curarg++;
            var var_testMsg = arguments[curarg];
            curarg++;
            var inheritingObject = arguments[curarg++];
            // Start argument processing
            curarg = 1;
            curarg++;
            curarg++;
            // End argument processing
            setModuleName("gUnit");
            var returnTarget = invocationCount;
            invocationCount++;
            var obj1973 = Grace_allocObject(GraceObject, "testRecordFor(1)message(1)");
            obj1973.definitionModule = "gUnit";
            obj1973.definitionLine = 338;
            var inho1973 = inheritingObject;
            while (inho1973.superobj) inho1973 = inho1973.superobj;
            inho1973.superobj = obj1973;
            obj1973.data = inheritingObject.data;
            if (inheritingObject.hasOwnProperty('_value'))
              obj1973._value = inheritingObject._value;
            obj1973.outer = this;
            var reader_gUnit_outer1974 = function() {
              return this.outer;
            };
            obj1973.methods["outer"] = reader_gUnit_outer1974;
            var obj_init_1973 = function() {
              var origSuperDepth = superDepth;
              superDepth = obj1973;
              var func1975 = function(argcv) {    // method name
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                setModuleName("gUnit");
                // name is a simple accessor - elide try ... catch
                setLineNumber(339);    // compilenode identifier
                return var_testName;
              };
              func1975.paramCounts = [0];
              obj1973.methods["name"] = func1975;
              func1975.definitionLine = 339;
              func1975.definitionModule = "gUnit";
              var func1976 = function(argcv) {    // method message
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                setModuleName("gUnit");
                // message is a simple accessor - elide try ... catch
                setLineNumber(340);    // compilenode identifier
                return var_testMsg;
              };
              func1976.paramCounts = [0];
              obj1973.methods["message"] = func1976;
              func1976.definitionLine = 340;
              func1976.definitionModule = "gUnit";
              var func1977 = function(argcv) {    // method asString
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                setModuleName("gUnit");
                setLineNumber(341);    // compilenode string
                var string1978 = new GraceString("");
                var string1981 = new GraceString(": ");
                // call case 4: self request
                onSelf = true;
                var call1984 = callmethodChecked(this, "name", []);
                var string1986 = new GraceString("");
                var opresult1988 = callmethodChecked(string1986, "++(1)", [1], call1984);
                var opresult1990 = callmethodChecked(opresult1988, "++(1)", [1], string1981);
                var opresult1992 = callmethodChecked(opresult1990, "++(1)", [1], var_testMsg);
                var opresult1994 = callmethodChecked(opresult1992, "++(1)", [1], string1978);
                return opresult1994;
              };
              func1977.paramCounts = [0];
              obj1973.methods["asString"] = func1977;
              func1977.definitionLine = 341;
              func1977.definitionModule = "gUnit";
              var func1995 = function(argcv) {    // method hash
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                setModuleName("gUnit");
                setLineNumber(342);    // compilenode member
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call1998 = callmethodChecked(this, "name", []);
                var call1999 = callmethodChecked(call1998, "hash", []);
                return call1999;
              };
              func1995.paramCounts = [0];
              obj1973.methods["hash"] = func1995;
              func1995.definitionLine = 342;
              func1995.definitionModule = "gUnit";
              var func2000 = function(argcv) {    // method compare(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_other = arguments[curarg];
                curarg++;
                setModuleName("gUnit");
                setLineNumber(343);    // compilenode member
                // call case 6: other requests
                var call2003 = callmethodChecked(var_other, "name", []);
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call2005 = callmethodChecked(this, "name", []);
                var call2006 = callmethodChecked(call2005, "compare(1)", [1], call2003);
                return call2006;
              };
              func2000.paramCounts = [1];
              obj1973.methods["compare(1)"] = func2000;
              func2000.definitionLine = 343;
              func2000.definitionModule = "gUnit";
              var func2007 = function(argcv) {    // method <(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_other = arguments[curarg];
                curarg++;
                setModuleName("gUnit");
                setLineNumber(344);    // compilenode member
                // call case 6: other requests
                var call2009 = callmethodChecked(var_other, "name", []);
                // call case 4: self request
                onSelf = true;
                var call2012 = callmethodChecked(this, "name", []);
                var opresult2014 = callmethodChecked(call2012, "<(1)", [1], call2009);
                return opresult2014;
              };
              func2007.paramCounts = [1];
              obj1973.methods["<(1)"] = func2007;
              func2007.definitionLine = 344;
              func2007.definitionModule = "gUnit";
              var func2015 = function(argcv) {    // method ≤(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_other = arguments[curarg];
                curarg++;
                setModuleName("gUnit");
                setLineNumber(345);    // compilenode member
                // call case 6: other requests
                var call2017 = callmethodChecked(var_other, "name", []);
                // call case 4: self request
                onSelf = true;
                var call2020 = callmethodChecked(this, "name", []);
                var opresult2022 = callmethodChecked(call2020, "\u2264(1)", [1], call2017);
                return opresult2022;
              };
              func2015.paramCounts = [1];
              obj1973.methods["\u2264(1)"] = func2015;
              func2015.definitionLine = 345;
              func2015.definitionModule = "gUnit";
              var func2023 = function(argcv) {    // method ==(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_other = arguments[curarg];
                curarg++;
                setModuleName("gUnit");
                setLineNumber(346);    // compilenode member
                // call case 6: other requests
                var call2025 = callmethodChecked(var_other, "name", []);
                // call case 4: self request
                onSelf = true;
                var call2028 = callmethodChecked(this, "name", []);
                var opresult2030 = callmethodChecked(call2028, "==(1)", [1], call2025);
                return opresult2030;
              };
              func2023.paramCounts = [1];
              obj1973.methods["==(1)"] = func2023;
              func2023.definitionLine = 346;
              func2023.definitionModule = "gUnit";
              var func2031 = function(argcv) {    // method >(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_other = arguments[curarg];
                curarg++;
                setModuleName("gUnit");
                setLineNumber(347);    // compilenode member
                // call case 6: other requests
                var call2033 = callmethodChecked(var_other, "name", []);
                // call case 4: self request
                onSelf = true;
                var call2036 = callmethodChecked(this, "name", []);
                var opresult2038 = callmethodChecked(call2036, "<(1)", [1], call2033);
                return opresult2038;
              };
              func2031.paramCounts = [1];
              obj1973.methods[">(1)"] = func2031;
              func2031.definitionLine = 347;
              func2031.definitionModule = "gUnit";
              var func2039 = function(argcv) {    // method ≥(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_other = arguments[curarg];
                curarg++;
                setModuleName("gUnit");
                setLineNumber(348);    // compilenode member
                // call case 6: other requests
                var call2041 = callmethodChecked(var_other, "name", []);
                // call case 4: self request
                onSelf = true;
                var call2044 = callmethodChecked(this, "name", []);
                var opresult2046 = callmethodChecked(call2044, "\u2265(1)", [1], call2041);
                return opresult2046;
              };
              func2039.paramCounts = [1];
              obj1973.methods["\u2265(1)"] = func2039;
              func2039.definitionLine = 348;
              func2039.definitionModule = "gUnit";
              superDepth = origSuperDepth;
            };
            obj_init_1973.apply(inheritingObject, []);
            return obj1973;
            };
            this.methods["testRecordFor(1)message(1)$object(1)"] = func1972;
          setLineNumber(460);    // compilenode method
          var func2047 = function(argcv) {    // method className(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_testClass = arguments[curarg];
            curarg++;
            setModuleName("gUnit");
            setLineNumber(461);    // compilenode member
            // call case 6: other requests
            var call2049 = callmethodChecked(var_testClass, "asString", []);
            var var_cName = call2049;
            var if2050 = GraceDone;
            setLineNumber(462);    // compilenode string
            var string2052 = new GraceString("class ");
            // call case 6: other requests
            var call2053 = callmethodChecked(var_cName, "startsWith(1)", [1], string2052);
            if (Grace_isTrue(call2053)) {
              setLineNumber(463);    // compilenode member
              // call case 6: other requests
              var call2056 = callmethodChecked(var_cName, "size", []);
              // call case 6: other requests
              var call2057 = callmethodChecked(var_cName, "substringFrom(1)to(1)", [1, 1], new GraceNum(7), call2056);
              if2050 = call2057;
            } else {
              var if2058 = GraceDone;
              setLineNumber(464);    // compilenode string
              var string2060 = new GraceString("trait ");
              // call case 6: other requests
              var call2061 = callmethodChecked(var_cName, "startsWith(1)", [1], string2060);
              if (Grace_isTrue(call2061)) {
                setLineNumber(465);    // compilenode member
                // call case 6: other requests
                var call2064 = callmethodChecked(var_cName, "size", []);
                // call case 6: other requests
                var call2065 = callmethodChecked(var_cName, "substringFrom(1)to(1)", [1, 1], new GraceNum(7), call2064);
                if2058 = call2065;
              } else {
                var if2066 = GraceDone;
                setLineNumber(466);    // compilenode string
                var string2068 = new GraceString("a ");
                // call case 6: other requests
                var call2069 = callmethodChecked(var_cName, "startsWith(1)", [1], string2068);
                if (Grace_isTrue(call2069)) {
                  setLineNumber(467);    // compilenode member
                  // call case 6: other requests
                  var call2072 = callmethodChecked(var_cName, "size", []);
                  // call case 6: other requests
                  var call2073 = callmethodChecked(var_cName, "substringFrom(1)to(1)", [1, 1], new GraceNum(3), call2072);
                  if2066 = call2073;
                } else {
                  var if2074 = GraceDone;
                  setLineNumber(468);    // compilenode string
                  var string2076 = new GraceString("an ");
                  // call case 6: other requests
                  var call2077 = callmethodChecked(var_cName, "startsWith(1)", [1], string2076);
                  if (Grace_isTrue(call2077)) {
                    setLineNumber(469);    // compilenode member
                    // call case 6: other requests
                    var call2080 = callmethodChecked(var_cName, "size", []);
                    // call case 6: other requests
                    var call2081 = callmethodChecked(var_cName, "substringFrom(1)to(1)", [1, 1], new GraceNum(4), call2080);
                    if2074 = call2081;
                  } else {
                    setLineNumber(471);    // compilenode string
                    var string2082 = new GraceString("un-named");
                    if2074 = string2082;
                  }
                  if2066 = if2074;
                }
                if2058 = if2066;
              }
              if2050 = if2058;
            }
            return if2050;
          };
          func2047.paramCounts = [1];
          this.methods["className(1)"] = func2047;
          func2047.definitionLine = 460;
          func2047.definitionModule = "gUnit";
          setLineNumber(11);    // compilenode typedec
          // Type decl Assertion
          //   Type literal 
          var type2084 = new GraceType("Assertion");
          type2084.typeMethods.push("assert(1)description(1)");
          type2084.typeMethods.push("deny(1)description(1)");
          type2084.typeMethods.push("assert(1)");
          type2084.typeMethods.push("deny(1)");
          type2084.typeMethods.push("assert(1)shouldBe(1)");
          type2084.typeMethods.push("assert(1)shouldntBe(1)");
          type2084.typeMethods.push("assert(1)shouldEqual(1)within(1)");
          type2084.typeMethods.push("assert(1)shouldRaise(1)");
          type2084.typeMethods.push("assert(1)shouldntRaise(1)");
          type2084.typeMethods.push("assert(1)hasType(1)");
          type2084.typeMethods.push("failBecause(1)");
          var var_Assertion = type2084;
          setLineNumber(1);    // compilenode method
          var func2085 = function(argcv) {    // method Assertion
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("gUnit");
            // Assertion is a simple accessor - elide try ... catch
            setLineNumber(11);    // compilenode identifier
            return var_Assertion;
          };
          func2085.paramCounts = [0];
          this.methods["Assertion"] = func2085;
          func2085.definitionLine = 1;
          func2085.definitionModule = "gUnit";
          setLineNumber(25);    // compilenode typedec
          // Type decl TestCase
          //   Type literal 
          var type2087 = new GraceType("\u2039anon\u203a");
          type2087.typeMethods.push("run(1)");
          type2087.typeMethods.push("debug(1)");
          type2087.typeMethods.push("size");
          type2087.typeMethods.push("name");
          var opresult2090 = callmethodChecked(var_Assertion, "&(1)", [1], type2087);
          var var_TestCase = opresult2090;
          setLineNumber(1);    // compilenode method
          var func2091 = function(argcv) {    // method TestCase
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("gUnit");
            // TestCase is a simple accessor - elide try ... catch
            setLineNumber(25);    // compilenode identifier
            return var_TestCase;
          };
          func2091.paramCounts = [0];
          this.methods["TestCase"] = func2091;
          func2091.definitionLine = 1;
          func2091.definitionModule = "gUnit";
          setLineNumber(32);    // compilenode typedec
          // Type decl TestRecord
          //   Type literal 
          var type2093 = new GraceType("TestRecord");
          type2093.typeMethods.push("name");
          type2093.typeMethods.push("message");
          var var_TestRecord = type2093;
          setLineNumber(1);    // compilenode method
          var func2094 = function(argcv) {    // method TestRecord
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("gUnit");
            // TestRecord is a simple accessor - elide try ... catch
            setLineNumber(32);    // compilenode identifier
            return var_TestRecord;
          };
          func2094.paramCounts = [0];
          this.methods["TestRecord"] = func2094;
          func2094.definitionLine = 1;
          func2094.definitionModule = "gUnit";
          setLineNumber(37);    // compilenode typedec
          // Type decl TestResult
          //   Type literal 
          var type2096 = new GraceType("TestResult");
          type2096.typeMethods.push("testStarted(1)");
          type2096.typeMethods.push("testFailed(1)");
          type2096.typeMethods.push("testErrored(1)");
          type2096.typeMethods.push("testFinished(1)");
          type2096.typeMethods.push("erroredTestNames");
          type2096.typeMethods.push("failedTestNames");
          type2096.typeMethods.push("summary");
          type2096.typeMethods.push("detailedSummary");
          type2096.typeMethods.push("numberOfErrors");
          type2096.typeMethods.push("errors");
          type2096.typeMethods.push("numberOfFailures");
          type2096.typeMethods.push("failures");
          type2096.typeMethods.push("numberRun");
          type2096.typeMethods.push("doNotRerunErrors");
          type2096.typeMethods.push("doRerunErrors");
          var var_TestResult = type2096;
          setLineNumber(1);    // compilenode method
          var func2097 = function(argcv) {    // method TestResult
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("gUnit");
            // TestResult is a simple accessor - elide try ... catch
            setLineNumber(37);    // compilenode identifier
            return var_TestResult;
          };
          func2097.paramCounts = [0];
          this.methods["TestResult"] = func2097;
          func2097.definitionLine = 1;
          func2097.definitionModule = "gUnit";
          setLineNumber(55);    // compilenode typedec
          // Type decl TestSuite
          //   Type literal 
          var type2099 = new GraceType("\u2039anon\u203a");
          type2099.typeMethods.push("add(1)");
          type2099.typeMethods.push("rerunErrors(1)");
          var opresult2102 = callmethodChecked(var_TestCase, "&(1)", [1], type2099);
          var var_TestSuite = opresult2102;
          setLineNumber(1);    // compilenode method
          var func2103 = function(argcv) {    // method TestSuite
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("gUnit");
            // TestSuite is a simple accessor - elide try ... catch
            setLineNumber(55);    // compilenode identifier
            return var_TestSuite;
          };
          func2103.paramCounts = [0];
          this.methods["TestSuite"] = func2103;
          func2103.definitionLine = 1;
          func2103.definitionModule = "gUnit";
          setLineNumber(60);    // compilenode num
          var var_numberOfErrorsToRerun = new GraceNum(10);
          setLineNumber(1);    // compilenode method
          var func2104 = function(argcv) {    // method numberOfErrorsToRerun
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("gUnit");
            // numberOfErrorsToRerun is a simple accessor - elide try ... catch
            setLineNumber(60);    // compilenode identifier
            return var_numberOfErrorsToRerun;
          };
          func2104.paramCounts = [0];
          this.methods["numberOfErrorsToRerun"] = func2104;
          func2104.definitionLine = 1;
          func2104.definitionModule = "gUnit";
          setLineNumber(1);    // compilenode method
          var func2105 = function(argcv) {    // method numberOfErrorsToRerun:=(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var___95__var__95__assign__95__tmp = arguments[curarg];
            curarg++;
            setModuleName("gUnit");
            var_numberOfErrorsToRerun = var___95__var__95__assign__95__tmp;
            return GraceDone;
          };
          func2105.paramCounts = [1];
          this.methods["numberOfErrorsToRerun:=(1)"] = func2105;
          func2105.definitionLine = 1;
          func2105.definitionModule = "gUnit";
          this.methods["numberOfErrorsToRerun"].debug = "var";
          setLineNumber(351);    // compilenode object
          var obj2106 = Grace_allocObject(GraceObject, "testSuite");
          obj2106.definitionModule = "gUnit";
          obj2106.definitionLine = 351;
          obj2106.outer = this;
          var reader_gUnit_outer2107 = function() {
            return this.outer;
          };
          obj2106.methods["outer"] = reader_gUnit_outer2107;
          var obj_init_2106 = function() {
            var origSuperDepth = superDepth;
            superDepth = obj2106;
            var func2108 = function(argcv) {    // method withAll(_)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_initialContents = arguments[curarg];
              curarg++;
              setModuleName("gUnit");
              setLineNumber(353);    // compilenode object
              var obj2109 = Grace_allocObject(null, "testSuite.withAll(_)");
              obj2109.definitionModule = "gUnit";
              obj2109.definitionLine = 353;
              obj2109.outer = this;
              var reader_gUnit_outer2110 = function() {
                return this.outer;
              };
              obj2109.methods["outer"] = reader_gUnit_outer2110;
              var obj_init_2109 = function() {
                var origSuperDepth = superDepth;
                superDepth = obj2109;
                var func2111 = function(argcv) {    // method doNotRerunErrors
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  setModuleName("gUnit");
                  setLineNumber(360);    // compilenode identifier
                  // call case 4: self request
                  onSelf = true;
                  var call2113 = callmethodChecked(this, "errorsToBeRerun:=(1)", [1], GraceFalse);
                  return call2113;
                };
                func2111.paramCounts = [0];
                obj2109.methods["doNotRerunErrors"] = func2111;
                func2111.definitionLine = 360;
                func2111.definitionModule = "gUnit";
                var func2114 = function(argcv) {    // method doRerunErrors
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  setModuleName("gUnit");
                  setLineNumber(361);    // compilenode identifier
                  // call case 4: self request
                  onSelf = true;
                  var call2116 = callmethodChecked(this, "errorsToBeRerun:=(1)", [1], GraceTrue);
                  return call2116;
                };
                func2114.paramCounts = [0];
                obj2109.methods["doRerunErrors"] = func2114;
                func2114.definitionLine = 361;
                func2114.definitionModule = "gUnit";
                var func2117 = function(argcv) {    // method add(_)
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  var var_e = arguments[curarg];
                  curarg++;
                  setModuleName("gUnit");
                  setLineNumber(365);    // compilenode member
                  // call case 6: other requests
                  var call2119 = callmethodChecked(var_e, "name", []);
                  var var_eName = call2119;
                  var if2120 = GraceDone;
                  setLineNumber(366);    // compilenode identifier
                  // call case 6: other requests
                  // call case 4: self request
                  onSelf = true;
                  var call2123 = callmethodChecked(this, "testNames", []);
                  var call2124 = callmethodChecked(call2123, "contains(1)", [1], var_eName);
                  if (Grace_isTrue(call2124)) {
                    setLineNumber(367);    // compilenode string
                    var string2125 = new GraceString("\"");
                    var string2128 = new GraceString("Warning: more than one test named \"");
                    var opresult2130 = callmethodChecked(string2128, "++(1)", [1], var_eName);
                    var opresult2132 = callmethodChecked(opresult2130, "++(1)", [1], string2125);
                    var call2133 = Grace_print(opresult2132);
                    if2120 = call2133;
                  } else {
                    setLineNumber(369);    // compilenode identifier
                    // call case 6: other requests
                    // call case 4: self request
                    onSelf = true;
                    var call2136 = callmethodChecked(this, "testNames", []);
                    var call2137 = callmethodChecked(call2136, "add(1)", [1], var_eName);
                    if2120 = call2137;
                  }
                  setLineNumber(371);    // compilenode identifier
                  // call case 6: other requests
                  // call case 4: self request
                  onSelf = true;
                  var call2140 = callmethodChecked(this, "tests", []);
                  var call2141 = callmethodChecked(call2140, "push(1)", [1], var_e);
                  return call2141;
                };
                func2117.paramCounts = [1];
                obj2109.methods["add(1)"] = func2117;
                func2117.definitionLine = 364;
                func2117.definitionModule = "gUnit";
                var func2142 = function(argcv) {    // method run(_)
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  var var_result = arguments[curarg];
                  curarg++;
                  setModuleName("gUnit");
                  setLineNumber(375);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call2145 = callmethodChecked(this, "tests", []);
                  var block2146 = new GraceBlock(this, 375, 1);
                  setLineNumber(1);    // compilenode identifier
                  block2146.real = function(var_each) {
                    setLineNumber(375);    // compilenode identifier
                    // call case 6: other requests
                    var call2148 = callmethodChecked(var_each, "run(1)", [1], var_result);
                    return call2148;
                  };
                  // call case 5: prelude request
                  var call2149 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call2145, block2146);
                  return call2149;
                };
                func2142.paramCounts = [1];
                obj2109.methods["run(1)"] = func2142;
                func2142.definitionLine = 374;
                func2142.definitionModule = "gUnit";
                var func2150 = function(argcv) {    // method debug(_)
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  var var_result = arguments[curarg];
                  curarg++;
                  setModuleName("gUnit");
                  setLineNumber(379);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call2153 = callmethodChecked(this, "tests", []);
                  var block2154 = new GraceBlock(this, 379, 1);
                  setLineNumber(1);    // compilenode identifier
                  block2154.real = function(var_each) {
                    setLineNumber(379);    // compilenode identifier
                    // call case 6: other requests
                    var call2156 = callmethodChecked(var_each, "debug(1)", [1], var_result);
                    return call2156;
                  };
                  // call case 5: prelude request
                  var call2157 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call2153, block2154);
                  return call2157;
                };
                func2150.paramCounts = [1];
                obj2109.methods["debug(1)"] = func2150;
                func2150.definitionLine = 378;
                func2150.definitionModule = "gUnit";
                var func2158 = function(argcv) {    // method size
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  setModuleName("gUnit");
                  setLineNumber(382);    // compilenode member
                  // call case 6: other requests
                  // call case 4: self request
                  onSelf = true;
                  var call2161 = callmethodChecked(this, "tests", []);
                  var call2162 = callmethodChecked(call2161, "size", []);
                  return call2162;
                };
                func2158.paramCounts = [0];
                obj2109.methods["size"] = func2158;
                func2158.definitionLine = 382;
                func2158.definitionModule = "gUnit";
                var func2163 = function(argcv) {    // method runAndPrintResults
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  setModuleName("gUnit");
                  setLineNumber(385);    // compilenode member
                  // call case 6: other requests
                  // call case 6: other requests
                  // call case 3: self.outer request
                  var call2167 = callmethodChecked(superDepth, "outer", [0]);
                  var call2168 = callmethodChecked(call2167, "outer", []);
                  onSelf = true;
                  var call2169 = callmethodChecked(call2168, "testResult", []);
                  var var_result = call2169;
                  setLineNumber(386);    // compilenode identifier
                  // call case 4: self request
                  onSelf = true;
                  var call2171 = callmethodChecked(this, "run(1)", [1], var_result);
                  var if2172 = GraceDone;
                  setLineNumber(387);    // compilenode string
                  var string2173 = new GraceString("");
                  // call case 4: self request
                  onSelf = true;
                  var call2176 = callmethodChecked(this, "name", []);
                  var opresult2178 = callmethodChecked(call2176, "==(1)", [1], string2173);
                  if (Grace_isTrue(opresult2178)) {
                    setLineNumber(388);    // compilenode string
                    var string2179 = new GraceString("");
                    // call case 6: other requests
                    var call2182 = callmethodChecked(var_result, "detailedSummary", []);
                    var string2184 = new GraceString("");
                    var opresult2186 = callmethodChecked(string2184, "++(1)", [1], call2182);
                    var opresult2188 = callmethodChecked(opresult2186, "++(1)", [1], string2179);
                    var call2189 = Grace_print(opresult2188);
                    if2172 = call2189;
                  } else {
                    setLineNumber(390);    // compilenode string
                    var string2190 = new GraceString("");
                    // call case 6: other requests
                    var call2193 = callmethodChecked(var_result, "detailedSummary", []);
                    var string2195 = new GraceString(": ");
                    // call case 4: self request
                    onSelf = true;
                    var call2198 = callmethodChecked(this, "name", []);
                    var string2200 = new GraceString("");
                    var opresult2202 = callmethodChecked(string2200, "++(1)", [1], call2198);
                    var opresult2204 = callmethodChecked(opresult2202, "++(1)", [1], string2195);
                    var opresult2206 = callmethodChecked(opresult2204, "++(1)", [1], call2193);
                    var opresult2208 = callmethodChecked(opresult2206, "++(1)", [1], string2190);
                    var call2209 = Grace_print(opresult2208);
                    if2172 = call2209;
                  }
                  var if2210 = GraceDone;
                  setLineNumber(392);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call2212 = callmethodChecked(this, "errorsToBeRerun", []);
                  // call case 6: other requests
                  var call2216 = callmethodChecked(var_result, "numberOfErrors", []);
                  var opresult2218 = callmethodChecked(call2216, ">(1)", [1], new GraceNum(0));
                  var opresult2220 = callmethodChecked(opresult2218, "&&(1)", [1], call2212);
                  if (Grace_isTrue(opresult2220)) {
                    setLineNumber(393);    // compilenode identifier
                    // call case 4: self request
                    onSelf = true;
                    var call2222 = callmethodChecked(this, "rerunErrors(1)", [1], var_result);
                    if2210 = call2222;
                  }
                  return if2210;
                };
                func2163.paramCounts = [0];
                obj2109.methods["runAndPrintResults"] = func2163;
                func2163.definitionLine = 384;
                func2163.definitionModule = "gUnit";
                var func2223 = function(argcv) {    // method debugAndPrintResults
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  setModuleName("gUnit");
                  setLineNumber(398);    // compilenode member
                  // call case 6: other requests
                  // call case 6: other requests
                  // call case 3: self.outer request
                  var call2227 = callmethodChecked(superDepth, "outer", [0]);
                  var call2228 = callmethodChecked(call2227, "outer", []);
                  onSelf = true;
                  var call2229 = callmethodChecked(call2228, "testResult", []);
                  var var_result = call2229;
                  setLineNumber(399);    // compilenode identifier
                  // call case 4: self request
                  onSelf = true;
                  var call2231 = callmethodChecked(this, "debug(1)", [1], var_result);
                  var if2232 = GraceDone;
                  setLineNumber(400);    // compilenode string
                  var string2233 = new GraceString("");
                  // call case 4: self request
                  onSelf = true;
                  var call2236 = callmethodChecked(this, "name", []);
                  var opresult2238 = callmethodChecked(call2236, "==(1)", [1], string2233);
                  if (Grace_isTrue(opresult2238)) {
                    setLineNumber(401);    // compilenode string
                    var string2239 = new GraceString("");
                    // call case 6: other requests
                    var call2242 = callmethodChecked(var_result, "detailedSummary", []);
                    var string2244 = new GraceString("");
                    var opresult2246 = callmethodChecked(string2244, "++(1)", [1], call2242);
                    var opresult2248 = callmethodChecked(opresult2246, "++(1)", [1], string2239);
                    var call2249 = Grace_print(opresult2248);
                    if2232 = call2249;
                  } else {
                    setLineNumber(403);    // compilenode string
                    var string2250 = new GraceString("");
                    // call case 6: other requests
                    var call2253 = callmethodChecked(var_result, "detailedSummary", []);
                    var string2255 = new GraceString(": ");
                    // call case 4: self request
                    onSelf = true;
                    var call2258 = callmethodChecked(this, "name", []);
                    var string2260 = new GraceString("");
                    var opresult2262 = callmethodChecked(string2260, "++(1)", [1], call2258);
                    var opresult2264 = callmethodChecked(opresult2262, "++(1)", [1], string2255);
                    var opresult2266 = callmethodChecked(opresult2264, "++(1)", [1], call2253);
                    var opresult2268 = callmethodChecked(opresult2266, "++(1)", [1], string2250);
                    var call2269 = Grace_print(opresult2268);
                    if2232 = call2269;
                  }
                  return if2232;
                };
                func2223.paramCounts = [0];
                obj2109.methods["debugAndPrintResults"] = func2223;
                func2223.definitionLine = 397;
                func2223.definitionModule = "gUnit";
                var func2270 = function(argcv) {    // method iterator
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  setModuleName("gUnit");
                  setLineNumber(407);    // compilenode member
                  // call case 6: other requests
                  // call case 4: self request
                  onSelf = true;
                  var call2273 = callmethodChecked(this, "tests", []);
                  var call2274 = callmethodChecked(call2273, "iterator", []);
                  return call2274;
                };
                func2270.paramCounts = [0];
                obj2109.methods["iterator"] = func2270;
                func2270.definitionLine = 407;
                func2270.definitionModule = "gUnit";
                var func2275 = function(argcv) {    // method do(_)
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  var var_aBlock = arguments[curarg];
                  curarg++;
                  setModuleName("gUnit");
                  setLineNumber(408);    // compilenode identifier
                  // call case 6: other requests
                  // call case 4: self request
                  onSelf = true;
                  var call2278 = callmethodChecked(this, "tests", []);
                  var call2279 = callmethodChecked(call2278, "do(1)", [1], var_aBlock);
                  return call2279;
                };
                func2275.paramCounts = [1];
                obj2109.methods["do(1)"] = func2275;
                func2275.definitionLine = 408;
                func2275.definitionModule = "gUnit";
                var func2280 = function(argcv) {    // method addAll(_)
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  var var_anotherSuite = arguments[curarg];
                  curarg++;
                  setModuleName("gUnit");
                  setLineNumber(410);    // compilenode block
                  var block2282 = new GraceBlock(this, 410, 1);
                  setLineNumber(1);    // compilenode identifier
                  block2282.real = function(var_each) {
                    setLineNumber(410);    // compilenode identifier
                    // call case 4: self request
                    onSelf = true;
                    var call2284 = callmethodChecked(this, "add(1)", [1], var_each);
                    return call2284;
                  };
                  // call case 6: other requests
                  var call2285 = callmethodChecked(var_anotherSuite, "do(1)", [1], block2282);
                  setLineNumber(411);    // compilenode identifier
                  return this;
                };
                func2280.paramCounts = [1];
                obj2109.methods["addAll(1)"] = func2280;
                func2280.definitionLine = 409;
                func2280.definitionModule = "gUnit";
                var func2286 = function(argcv) {    // method ++(_)
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  var var_anotherSuite = arguments[curarg];
                  curarg++;
                  setModuleName("gUnit");
                  setLineNumber(414);    // compilenode identifier
                  // call case 6: other requests
                  // call case 4: self request
                  onSelf = true;
                  var call2290 = callmethodChecked(this, "tests", []);
                  // call case 6: other requests
                  // call case 3: self.outer request
                  var call2292 = callmethodChecked(superDepth, "outer", [0]);
                  onSelf = true;
                  var call2293 = callmethodChecked(call2292, "withAll(1)", [1], call2290);
                  var call2294 = callmethodChecked(call2293, "addAll(1)", [1], var_anotherSuite);
                  return call2294;
                };
                func2286.paramCounts = [1];
                obj2109.methods["++(1)"] = func2286;
                func2286.definitionLine = 413;
                func2286.definitionModule = "gUnit";
                var func2295 = function(argcv) {    // method rerunErrors(_)
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  var var_result = arguments[curarg];
                  curarg++;
                  setModuleName("gUnit");
                  var if2296 = GraceDone;
                  setLineNumber(417);    // compilenode identifier
                  var opresult2299 = callmethodChecked(var_numberOfErrorsToRerun, "\u2264(1)", [1], new GraceNum(0));
                  if (Grace_isTrue(opresult2299)) {
                    return var_done;
                  }
                  setLineNumber(418);    // compilenode member
                  // call case 6: other requests
                  var call2302 = callmethodChecked(var_result, "numberOfErrors", []);
                  // call case 5: prelude request
                  var call2303 = callmethodChecked(var_prelude, "min(2)", [2], call2302, var_numberOfErrorsToRerun);
                  var var_n = call2303;
                  var if2304 = GraceDone;
                  setLineNumber(419);    // compilenode identifier
                  var opresult2307 = callmethodChecked(var_n, "==(1)", [1], new GraceNum(1));
                  if (Grace_isTrue(opresult2307)) {
                    setLineNumber(420);    // compilenode string
                    var string2308 = new GraceString("\nRe-running 1 error.");
                    var call2309 = Grace_print(string2308);
                    if2304 = call2309;
                  } else {
                    setLineNumber(422);    // compilenode string
                    var string2310 = new GraceString(" errors.");
                    var string2313 = new GraceString("\nRe-running ");
                    var opresult2315 = callmethodChecked(string2313, "++(1)", [1], var_n);
                    var opresult2317 = callmethodChecked(opresult2315, "++(1)", [1], string2310);
                    var call2318 = Grace_print(opresult2317);
                    if2304 = call2318;
                  }
                  setLineNumber(424);    // compilenode member
                  // call case 6: other requests
                  // call case 6: other requests
                  // call case 3: self.outer request
                  var call2322 = callmethodChecked(superDepth, "outer", [0]);
                  var call2323 = callmethodChecked(call2322, "outer", []);
                  onSelf = true;
                  var call2324 = callmethodChecked(call2323, "testResult", []);
                  var var_newResult = call2324;
                  setLineNumber(425);    // compilenode member
                  // call case 6: other requests
                  var call2326 = callmethodChecked(var_result, "erroredTestNames", []);
                  var var_errors = call2326;
                  setLineNumber(426);    // compilenode block
                  var block2328 = new GraceBlock(this, 426, 1);
                  setLineNumber(1);    // compilenode identifier
                  block2328.real = function(var_each) {
                    var if2329 = GraceDone;
                    setLineNumber(427);    // compilenode member
                    // call case 6: other requests
                    var call2332 = callmethodChecked(var_each, "name", []);
                    // call case 6: other requests
                    var call2333 = callmethodChecked(var_errors, "contains(1)", [1], call2332);
                    if (Grace_isTrue(call2333)) {
                      setLineNumber(428);    // compilenode identifier
                      // call case 6: other requests
                      var call2335 = callmethodChecked(var_each, "debug(1)", [1], var_newResult);
                      setLineNumber(429);    // compilenode identifier
                      var diff2338 = callmethodChecked(var_n, "-(1)", [1], new GraceNum(1));
                      var_n = diff2338;
                      var if2339 = GraceDone;
                      setLineNumber(430);    // compilenode identifier
                      var opresult2342 = callmethodChecked(var_n, "==(1)", [1], new GraceNum(0));
                      if (Grace_isTrue(opresult2342)) {
                        throw new ReturnException(var_done, returnTarget);
                      }
                      if2329 = if2339;
                    }
                    return if2329;
                  };
                  // call case 6: other requests
                  setLineNumber(426);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call2344 = callmethodChecked(this, "tests", []);
                  var call2345 = callmethodChecked(call2344, "do(1)", [1], block2328);
                  return call2345;
                };
                func2295.paramCounts = [1];
                obj2109.methods["rerunErrors(1)"] = func2295;
                func2295.definitionLine = 416;
                func2295.definitionModule = "gUnit";
                setLineNumber(354);    // compilenode identifier
                // call case 6: other requests
                // call case 6: other requests
                // call case 5: prelude request
                var call2349 = callmethodChecked(var_prelude, "collections", []);
                var call2350 = callmethodChecked(call2349, "enumerable", []);
                var call2351 = callmethodChecked(call2350, "TRAIT$object(1)", [0, 1], this);
                obj2109.superobj = call2351;
                if (call2351.data) obj2109.data = call2351.data;
                if (call2351.hasOwnProperty('_value'))
                    obj2109._value = call2351._value;
                setLineNumber(355);    // compilenode string
                var string2352 = new GraceString("");
                obj2109.data["name"] = string2352;
                var reader_gUnit_name2353 = function() {
                  return this.data["name"];
                };
                obj2109.methods["name"] = reader_gUnit_name2353;
                obj2109.data["name"] = string2352;
                var writer_gUnit_name2353 = function(argcv, o) {
                  this.data["name"] = o;
                  return GraceDone;
                };
                obj2109.methods["name:=(1)"] = writer_gUnit_name2353;
                obj2109.mutable = true;
                setLineNumber(356);    // compilenode array
                var array2354 = new PrimitiveGraceList([]);
                obj2109.data["tests"] = array2354;
                var reader_gUnit_tests2355 = function() {
                  return this.data["tests"];
                };
                reader_gUnit_tests2355.def = true;
                reader_gUnit_tests2355.confidential = true;
                obj2109.methods["tests"] = reader_gUnit_tests2355;
                setLineNumber(357);    // compilenode member
                // call case 5: prelude request
                var call2357 = callmethodChecked(var_prelude, "emptySet", []);
                obj2109.data["testNames"] = call2357;
                var reader_gUnit_testNames2358 = function() {
                  return this.data["testNames"];
                };
                reader_gUnit_testNames2358.def = true;
                reader_gUnit_testNames2358.confidential = true;
                obj2109.methods["testNames"] = reader_gUnit_testNames2358;
                setLineNumber(358);    // compilenode identifier
                obj2109.data["errorsToBeRerun"] = GraceTrue;
                var reader_gUnit_errorsToBeRerun2359 = function() {
                  return this.data["errorsToBeRerun"];
                };
                obj2109.methods["errorsToBeRerun"] = reader_gUnit_errorsToBeRerun2359;
                obj2109.data["errorsToBeRerun"] = GraceTrue;
                var writer_gUnit_errorsToBeRerun2359 = function(argcv, o) {
                  this.data["errorsToBeRerun"] = o;
                  return GraceDone;
                };
                obj2109.methods["errorsToBeRerun:=(1)"] = writer_gUnit_errorsToBeRerun2359;
                reader_gUnit_errorsToBeRerun2359.confidential = true;
                writer_gUnit_errorsToBeRerun2359.confidential = true;
                obj2109.mutable = true;
                setLineNumber(362);    // compilenode block
                var block2361 = new GraceBlock(this, 362, 1);
                setLineNumber(1);    // compilenode identifier
                block2361.real = function(var_each) {
                  setLineNumber(362);    // compilenode identifier
                  // call case 4: self request
                  onSelf = true;
                  var call2363 = callmethodChecked(this, "add(1)", [1], var_each);
                  return call2363;
                };
                // call case 5: prelude request
                var call2364 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_initialContents, block2361);
                superDepth = origSuperDepth;
              };
              obj_init_2109.apply(obj2109, []);
              return obj2109;
            };
            func2108.paramCounts = [1];
            obj2106.methods["withAll(1)"] = func2108;
            func2108.definitionLine = 353;
            func2108.definitionModule = "gUnit";
              var func2365 = function(argcv) {    // method withAll(_)$object(_)
                var curarg = 1;
                var var_initialContents = arguments[curarg];
                curarg++;
                var inheritingObject = arguments[curarg++];
                // Start argument processing
                curarg = 1;
                curarg++;
                // End argument processing
                setModuleName("gUnit");
                var returnTarget = invocationCount;
                invocationCount++;
                var obj2366 = Grace_allocObject(null, "withAll(1)");
                obj2366.definitionModule = "gUnit";
                obj2366.definitionLine = 353;
                var inho2366 = inheritingObject;
                while (inho2366.superobj) inho2366 = inho2366.superobj;
                inho2366.superobj = obj2366;
                obj2366.data = inheritingObject.data;
                if (inheritingObject.hasOwnProperty('_value'))
                  obj2366._value = inheritingObject._value;
                obj2366.outer = this;
                var reader_gUnit_outer2367 = function() {
                  return this.outer;
                };
                obj2366.methods["outer"] = reader_gUnit_outer2367;
                var obj_init_2366 = function() {
                  var origSuperDepth = superDepth;
                  superDepth = obj2366;
                  var func2368 = function(argcv) {    // method doNotRerunErrors
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    setModuleName("gUnit");
                    setLineNumber(360);    // compilenode identifier
                    // call case 4: self request
                    onSelf = true;
                    var call2370 = callmethodChecked(this, "errorsToBeRerun:=(1)", [1], GraceFalse);
                    return call2370;
                  };
                  func2368.paramCounts = [0];
                  obj2366.methods["doNotRerunErrors"] = func2368;
                  func2368.definitionLine = 360;
                  func2368.definitionModule = "gUnit";
                  var func2371 = function(argcv) {    // method doRerunErrors
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    setModuleName("gUnit");
                    setLineNumber(361);    // compilenode identifier
                    // call case 4: self request
                    onSelf = true;
                    var call2373 = callmethodChecked(this, "errorsToBeRerun:=(1)", [1], GraceTrue);
                    return call2373;
                  };
                  func2371.paramCounts = [0];
                  obj2366.methods["doRerunErrors"] = func2371;
                  func2371.definitionLine = 361;
                  func2371.definitionModule = "gUnit";
                  var func2374 = function(argcv) {    // method add(_)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_e = arguments[curarg];
                    curarg++;
                    setModuleName("gUnit");
                    setLineNumber(365);    // compilenode member
                    // call case 6: other requests
                    var call2376 = callmethodChecked(var_e, "name", []);
                    var var_eName = call2376;
                    var if2377 = GraceDone;
                    setLineNumber(366);    // compilenode identifier
                    // call case 6: other requests
                    // call case 4: self request
                    onSelf = true;
                    var call2380 = callmethodChecked(this, "testNames", []);
                    var call2381 = callmethodChecked(call2380, "contains(1)", [1], var_eName);
                    if (Grace_isTrue(call2381)) {
                      setLineNumber(367);    // compilenode string
                      var string2382 = new GraceString("\"");
                      var string2385 = new GraceString("Warning: more than one test named \"");
                      var opresult2387 = callmethodChecked(string2385, "++(1)", [1], var_eName);
                      var opresult2389 = callmethodChecked(opresult2387, "++(1)", [1], string2382);
                      var call2390 = Grace_print(opresult2389);
                      if2377 = call2390;
                    } else {
                      setLineNumber(369);    // compilenode identifier
                      // call case 6: other requests
                      // call case 4: self request
                      onSelf = true;
                      var call2393 = callmethodChecked(this, "testNames", []);
                      var call2394 = callmethodChecked(call2393, "add(1)", [1], var_eName);
                      if2377 = call2394;
                    }
                    setLineNumber(371);    // compilenode identifier
                    // call case 6: other requests
                    // call case 4: self request
                    onSelf = true;
                    var call2397 = callmethodChecked(this, "tests", []);
                    var call2398 = callmethodChecked(call2397, "push(1)", [1], var_e);
                    return call2398;
                  };
                  func2374.paramCounts = [1];
                  obj2366.methods["add(1)"] = func2374;
                  func2374.definitionLine = 364;
                  func2374.definitionModule = "gUnit";
                  var func2399 = function(argcv) {    // method run(_)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_result = arguments[curarg];
                    curarg++;
                    setModuleName("gUnit");
                    setLineNumber(375);    // compilenode member
                    // call case 4: self request
                    onSelf = true;
                    var call2402 = callmethodChecked(this, "tests", []);
                    var block2403 = new GraceBlock(this, 375, 1);
                    setLineNumber(1);    // compilenode identifier
                    block2403.real = function(var_each) {
                      setLineNumber(375);    // compilenode identifier
                      // call case 6: other requests
                      var call2405 = callmethodChecked(var_each, "run(1)", [1], var_result);
                      return call2405;
                    };
                    // call case 5: prelude request
                    var call2406 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call2402, block2403);
                    return call2406;
                  };
                  func2399.paramCounts = [1];
                  obj2366.methods["run(1)"] = func2399;
                  func2399.definitionLine = 374;
                  func2399.definitionModule = "gUnit";
                  var func2407 = function(argcv) {    // method debug(_)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_result = arguments[curarg];
                    curarg++;
                    setModuleName("gUnit");
                    setLineNumber(379);    // compilenode member
                    // call case 4: self request
                    onSelf = true;
                    var call2410 = callmethodChecked(this, "tests", []);
                    var block2411 = new GraceBlock(this, 379, 1);
                    setLineNumber(1);    // compilenode identifier
                    block2411.real = function(var_each) {
                      setLineNumber(379);    // compilenode identifier
                      // call case 6: other requests
                      var call2413 = callmethodChecked(var_each, "debug(1)", [1], var_result);
                      return call2413;
                    };
                    // call case 5: prelude request
                    var call2414 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call2410, block2411);
                    return call2414;
                  };
                  func2407.paramCounts = [1];
                  obj2366.methods["debug(1)"] = func2407;
                  func2407.definitionLine = 378;
                  func2407.definitionModule = "gUnit";
                  var func2415 = function(argcv) {    // method size
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    setModuleName("gUnit");
                    setLineNumber(382);    // compilenode member
                    // call case 6: other requests
                    // call case 4: self request
                    onSelf = true;
                    var call2418 = callmethodChecked(this, "tests", []);
                    var call2419 = callmethodChecked(call2418, "size", []);
                    return call2419;
                  };
                  func2415.paramCounts = [0];
                  obj2366.methods["size"] = func2415;
                  func2415.definitionLine = 382;
                  func2415.definitionModule = "gUnit";
                  var func2420 = function(argcv) {    // method runAndPrintResults
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    setModuleName("gUnit");
                    setLineNumber(385);    // compilenode member
                    // call case 6: other requests
                    // call case 6: other requests
                    // call case 3: self.outer request
                    var call2424 = callmethodChecked(superDepth, "outer", [0]);
                    var call2425 = callmethodChecked(call2424, "outer", []);
                    onSelf = true;
                    var call2426 = callmethodChecked(call2425, "testResult", []);
                    var var_result = call2426;
                    setLineNumber(386);    // compilenode identifier
                    // call case 4: self request
                    onSelf = true;
                    var call2428 = callmethodChecked(this, "run(1)", [1], var_result);
                    var if2429 = GraceDone;
                    setLineNumber(387);    // compilenode string
                    var string2430 = new GraceString("");
                    // call case 4: self request
                    onSelf = true;
                    var call2433 = callmethodChecked(this, "name", []);
                    var opresult2435 = callmethodChecked(call2433, "==(1)", [1], string2430);
                    if (Grace_isTrue(opresult2435)) {
                      setLineNumber(388);    // compilenode string
                      var string2436 = new GraceString("");
                      // call case 6: other requests
                      var call2439 = callmethodChecked(var_result, "detailedSummary", []);
                      var string2441 = new GraceString("");
                      var opresult2443 = callmethodChecked(string2441, "++(1)", [1], call2439);
                      var opresult2445 = callmethodChecked(opresult2443, "++(1)", [1], string2436);
                      var call2446 = Grace_print(opresult2445);
                      if2429 = call2446;
                    } else {
                      setLineNumber(390);    // compilenode string
                      var string2447 = new GraceString("");
                      // call case 6: other requests
                      var call2450 = callmethodChecked(var_result, "detailedSummary", []);
                      var string2452 = new GraceString(": ");
                      // call case 4: self request
                      onSelf = true;
                      var call2455 = callmethodChecked(this, "name", []);
                      var string2457 = new GraceString("");
                      var opresult2459 = callmethodChecked(string2457, "++(1)", [1], call2455);
                      var opresult2461 = callmethodChecked(opresult2459, "++(1)", [1], string2452);
                      var opresult2463 = callmethodChecked(opresult2461, "++(1)", [1], call2450);
                      var opresult2465 = callmethodChecked(opresult2463, "++(1)", [1], string2447);
                      var call2466 = Grace_print(opresult2465);
                      if2429 = call2466;
                    }
                    var if2467 = GraceDone;
                    setLineNumber(392);    // compilenode member
                    // call case 4: self request
                    onSelf = true;
                    var call2469 = callmethodChecked(this, "errorsToBeRerun", []);
                    // call case 6: other requests
                    var call2473 = callmethodChecked(var_result, "numberOfErrors", []);
                    var opresult2475 = callmethodChecked(call2473, ">(1)", [1], new GraceNum(0));
                    var opresult2477 = callmethodChecked(opresult2475, "&&(1)", [1], call2469);
                    if (Grace_isTrue(opresult2477)) {
                      setLineNumber(393);    // compilenode identifier
                      // call case 4: self request
                      onSelf = true;
                      var call2479 = callmethodChecked(this, "rerunErrors(1)", [1], var_result);
                      if2467 = call2479;
                    }
                    return if2467;
                  };
                  func2420.paramCounts = [0];
                  obj2366.methods["runAndPrintResults"] = func2420;
                  func2420.definitionLine = 384;
                  func2420.definitionModule = "gUnit";
                  var func2480 = function(argcv) {    // method debugAndPrintResults
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    setModuleName("gUnit");
                    setLineNumber(398);    // compilenode member
                    // call case 6: other requests
                    // call case 6: other requests
                    // call case 3: self.outer request
                    var call2484 = callmethodChecked(superDepth, "outer", [0]);
                    var call2485 = callmethodChecked(call2484, "outer", []);
                    onSelf = true;
                    var call2486 = callmethodChecked(call2485, "testResult", []);
                    var var_result = call2486;
                    setLineNumber(399);    // compilenode identifier
                    // call case 4: self request
                    onSelf = true;
                    var call2488 = callmethodChecked(this, "debug(1)", [1], var_result);
                    var if2489 = GraceDone;
                    setLineNumber(400);    // compilenode string
                    var string2490 = new GraceString("");
                    // call case 4: self request
                    onSelf = true;
                    var call2493 = callmethodChecked(this, "name", []);
                    var opresult2495 = callmethodChecked(call2493, "==(1)", [1], string2490);
                    if (Grace_isTrue(opresult2495)) {
                      setLineNumber(401);    // compilenode string
                      var string2496 = new GraceString("");
                      // call case 6: other requests
                      var call2499 = callmethodChecked(var_result, "detailedSummary", []);
                      var string2501 = new GraceString("");
                      var opresult2503 = callmethodChecked(string2501, "++(1)", [1], call2499);
                      var opresult2505 = callmethodChecked(opresult2503, "++(1)", [1], string2496);
                      var call2506 = Grace_print(opresult2505);
                      if2489 = call2506;
                    } else {
                      setLineNumber(403);    // compilenode string
                      var string2507 = new GraceString("");
                      // call case 6: other requests
                      var call2510 = callmethodChecked(var_result, "detailedSummary", []);
                      var string2512 = new GraceString(": ");
                      // call case 4: self request
                      onSelf = true;
                      var call2515 = callmethodChecked(this, "name", []);
                      var string2517 = new GraceString("");
                      var opresult2519 = callmethodChecked(string2517, "++(1)", [1], call2515);
                      var opresult2521 = callmethodChecked(opresult2519, "++(1)", [1], string2512);
                      var opresult2523 = callmethodChecked(opresult2521, "++(1)", [1], call2510);
                      var opresult2525 = callmethodChecked(opresult2523, "++(1)", [1], string2507);
                      var call2526 = Grace_print(opresult2525);
                      if2489 = call2526;
                    }
                    return if2489;
                  };
                  func2480.paramCounts = [0];
                  obj2366.methods["debugAndPrintResults"] = func2480;
                  func2480.definitionLine = 397;
                  func2480.definitionModule = "gUnit";
                  var func2527 = function(argcv) {    // method iterator
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    setModuleName("gUnit");
                    setLineNumber(407);    // compilenode member
                    // call case 6: other requests
                    // call case 4: self request
                    onSelf = true;
                    var call2530 = callmethodChecked(this, "tests", []);
                    var call2531 = callmethodChecked(call2530, "iterator", []);
                    return call2531;
                  };
                  func2527.paramCounts = [0];
                  obj2366.methods["iterator"] = func2527;
                  func2527.definitionLine = 407;
                  func2527.definitionModule = "gUnit";
                  var func2532 = function(argcv) {    // method do(_)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_aBlock = arguments[curarg];
                    curarg++;
                    setModuleName("gUnit");
                    setLineNumber(408);    // compilenode identifier
                    // call case 6: other requests
                    // call case 4: self request
                    onSelf = true;
                    var call2535 = callmethodChecked(this, "tests", []);
                    var call2536 = callmethodChecked(call2535, "do(1)", [1], var_aBlock);
                    return call2536;
                  };
                  func2532.paramCounts = [1];
                  obj2366.methods["do(1)"] = func2532;
                  func2532.definitionLine = 408;
                  func2532.definitionModule = "gUnit";
                  var func2537 = function(argcv) {    // method addAll(_)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_anotherSuite = arguments[curarg];
                    curarg++;
                    setModuleName("gUnit");
                    setLineNumber(410);    // compilenode block
                    var block2539 = new GraceBlock(this, 410, 1);
                    setLineNumber(1);    // compilenode identifier
                    block2539.real = function(var_each) {
                      setLineNumber(410);    // compilenode identifier
                      // call case 4: self request
                      onSelf = true;
                      var call2541 = callmethodChecked(this, "add(1)", [1], var_each);
                      return call2541;
                    };
                    // call case 6: other requests
                    var call2542 = callmethodChecked(var_anotherSuite, "do(1)", [1], block2539);
                    setLineNumber(411);    // compilenode identifier
                    return this;
                  };
                  func2537.paramCounts = [1];
                  obj2366.methods["addAll(1)"] = func2537;
                  func2537.definitionLine = 409;
                  func2537.definitionModule = "gUnit";
                  var func2543 = function(argcv) {    // method ++(_)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_anotherSuite = arguments[curarg];
                    curarg++;
                    setModuleName("gUnit");
                    setLineNumber(414);    // compilenode identifier
                    // call case 6: other requests
                    // call case 4: self request
                    onSelf = true;
                    var call2547 = callmethodChecked(this, "tests", []);
                    // call case 6: other requests
                    // call case 3: self.outer request
                    var call2549 = callmethodChecked(superDepth, "outer", [0]);
                    onSelf = true;
                    var call2550 = callmethodChecked(call2549, "withAll(1)", [1], call2547);
                    var call2551 = callmethodChecked(call2550, "addAll(1)", [1], var_anotherSuite);
                    return call2551;
                  };
                  func2543.paramCounts = [1];
                  obj2366.methods["++(1)"] = func2543;
                  func2543.definitionLine = 413;
                  func2543.definitionModule = "gUnit";
                  var func2552 = function(argcv) {    // method rerunErrors(_)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_result = arguments[curarg];
                    curarg++;
                    setModuleName("gUnit");
                    var if2553 = GraceDone;
                    setLineNumber(417);    // compilenode identifier
                    var opresult2556 = callmethodChecked(var_numberOfErrorsToRerun, "\u2264(1)", [1], new GraceNum(0));
                    if (Grace_isTrue(opresult2556)) {
                      return var_done;
                    }
                    setLineNumber(418);    // compilenode member
                    // call case 6: other requests
                    var call2559 = callmethodChecked(var_result, "numberOfErrors", []);
                    // call case 5: prelude request
                    var call2560 = callmethodChecked(var_prelude, "min(2)", [2], call2559, var_numberOfErrorsToRerun);
                    var var_n = call2560;
                    var if2561 = GraceDone;
                    setLineNumber(419);    // compilenode identifier
                    var opresult2564 = callmethodChecked(var_n, "==(1)", [1], new GraceNum(1));
                    if (Grace_isTrue(opresult2564)) {
                      setLineNumber(420);    // compilenode string
                      var string2565 = new GraceString("\nRe-running 1 error.");
                      var call2566 = Grace_print(string2565);
                      if2561 = call2566;
                    } else {
                      setLineNumber(422);    // compilenode string
                      var string2567 = new GraceString(" errors.");
                      var string2570 = new GraceString("\nRe-running ");
                      var opresult2572 = callmethodChecked(string2570, "++(1)", [1], var_n);
                      var opresult2574 = callmethodChecked(opresult2572, "++(1)", [1], string2567);
                      var call2575 = Grace_print(opresult2574);
                      if2561 = call2575;
                    }
                    setLineNumber(424);    // compilenode member
                    // call case 6: other requests
                    // call case 6: other requests
                    // call case 3: self.outer request
                    var call2579 = callmethodChecked(superDepth, "outer", [0]);
                    var call2580 = callmethodChecked(call2579, "outer", []);
                    onSelf = true;
                    var call2581 = callmethodChecked(call2580, "testResult", []);
                    var var_newResult = call2581;
                    setLineNumber(425);    // compilenode member
                    // call case 6: other requests
                    var call2583 = callmethodChecked(var_result, "erroredTestNames", []);
                    var var_errors = call2583;
                    setLineNumber(426);    // compilenode block
                    var block2585 = new GraceBlock(this, 426, 1);
                    setLineNumber(1);    // compilenode identifier
                    block2585.real = function(var_each) {
                      var if2586 = GraceDone;
                      setLineNumber(427);    // compilenode member
                      // call case 6: other requests
                      var call2589 = callmethodChecked(var_each, "name", []);
                      // call case 6: other requests
                      var call2590 = callmethodChecked(var_errors, "contains(1)", [1], call2589);
                      if (Grace_isTrue(call2590)) {
                        setLineNumber(428);    // compilenode identifier
                        // call case 6: other requests
                        var call2592 = callmethodChecked(var_each, "debug(1)", [1], var_newResult);
                        setLineNumber(429);    // compilenode identifier
                        var diff2595 = callmethodChecked(var_n, "-(1)", [1], new GraceNum(1));
                        var_n = diff2595;
                        var if2596 = GraceDone;
                        setLineNumber(430);    // compilenode identifier
                        var opresult2599 = callmethodChecked(var_n, "==(1)", [1], new GraceNum(0));
                        if (Grace_isTrue(opresult2599)) {
                          throw new ReturnException(var_done, returnTarget);
                        }
                        if2586 = if2596;
                      }
                      return if2586;
                    };
                    // call case 6: other requests
                    setLineNumber(426);    // compilenode member
                    // call case 4: self request
                    onSelf = true;
                    var call2601 = callmethodChecked(this, "tests", []);
                    var call2602 = callmethodChecked(call2601, "do(1)", [1], block2585);
                    return call2602;
                  };
                  func2552.paramCounts = [1];
                  obj2366.methods["rerunErrors(1)"] = func2552;
                  func2552.definitionLine = 416;
                  func2552.definitionModule = "gUnit";
                  setLineNumber(354);    // compilenode identifier
                  // call case 6: other requests
                  // call case 6: other requests
                  // call case 5: prelude request
                  var call2606 = callmethodChecked(var_prelude, "collections", []);
                  var call2607 = callmethodChecked(call2606, "enumerable", []);
                  var call2608 = callmethodChecked(call2607, "TRAIT$object(1)", [0, 1], this);
                  obj2366.superobj = call2608;
                  if (call2608.data) obj2366.data = call2608.data;
                  if (call2608.hasOwnProperty('_value'))
                      obj2366._value = call2608._value;
                  setLineNumber(355);    // compilenode string
                  var string2609 = new GraceString("");
                  obj2366.data["name"] = string2609;
                  var reader_gUnit_name2610 = function() {
                    return this.data["name"];
                  };
                  obj2366.methods["name"] = reader_gUnit_name2610;
                  obj2366.data["name"] = string2609;
                  var writer_gUnit_name2610 = function(argcv, o) {
                    this.data["name"] = o;
                    return GraceDone;
                  };
                  obj2366.methods["name:=(1)"] = writer_gUnit_name2610;
                  obj2366.mutable = true;
                  setLineNumber(356);    // compilenode array
                  var array2611 = new PrimitiveGraceList([]);
                  obj2366.data["tests"] = array2611;
                  var reader_gUnit_tests2612 = function() {
                    return this.data["tests"];
                  };
                  reader_gUnit_tests2612.def = true;
                  reader_gUnit_tests2612.confidential = true;
                  obj2366.methods["tests"] = reader_gUnit_tests2612;
                  setLineNumber(357);    // compilenode member
                  // call case 5: prelude request
                  var call2614 = callmethodChecked(var_prelude, "emptySet", []);
                  obj2366.data["testNames"] = call2614;
                  var reader_gUnit_testNames2615 = function() {
                    return this.data["testNames"];
                  };
                  reader_gUnit_testNames2615.def = true;
                  reader_gUnit_testNames2615.confidential = true;
                  obj2366.methods["testNames"] = reader_gUnit_testNames2615;
                  setLineNumber(358);    // compilenode identifier
                  obj2366.data["errorsToBeRerun"] = GraceTrue;
                  var reader_gUnit_errorsToBeRerun2616 = function() {
                    return this.data["errorsToBeRerun"];
                  };
                  obj2366.methods["errorsToBeRerun"] = reader_gUnit_errorsToBeRerun2616;
                  obj2366.data["errorsToBeRerun"] = GraceTrue;
                  var writer_gUnit_errorsToBeRerun2616 = function(argcv, o) {
                    this.data["errorsToBeRerun"] = o;
                    return GraceDone;
                  };
                  obj2366.methods["errorsToBeRerun:=(1)"] = writer_gUnit_errorsToBeRerun2616;
                  reader_gUnit_errorsToBeRerun2616.confidential = true;
                  writer_gUnit_errorsToBeRerun2616.confidential = true;
                  obj2366.mutable = true;
                  setLineNumber(362);    // compilenode block
                  var block2618 = new GraceBlock(this, 362, 1);
                  setLineNumber(1);    // compilenode identifier
                  block2618.real = function(var_each) {
                    setLineNumber(362);    // compilenode identifier
                    // call case 4: self request
                    onSelf = true;
                    var call2620 = callmethodChecked(this, "add(1)", [1], var_each);
                    return call2620;
                  };
                  // call case 5: prelude request
                  var call2621 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_initialContents, block2618);
                  superDepth = origSuperDepth;
                };
                obj_init_2366.apply(inheritingObject, []);
                return obj2366;
                };
                obj2106.methods["withAll(1)$object(1)"] = func2365;
              var func2622 = function(argcv) {    // method empty
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                setModuleName("gUnit");
                setLineNumber(436);    // compilenode array
                var array2624 = new PrimitiveGraceList([]);
                // call case 4: self request
                onSelf = true;
                var call2625 = callmethodChecked(this, "withAll(1)", [1], array2624);
                return call2625;
              };
              func2622.paramCounts = [0];
              obj2106.methods["empty"] = func2622;
              func2622.definitionLine = 436;
              func2622.definitionModule = "gUnit";
              var func2626 = function(argcv) {    // method fromTestMethodsIn(_)named(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_aTestClass = arguments[curarg];
                curarg++;
                var var_aName = arguments[curarg];
                curarg++;
                setModuleName("gUnit");
                setLineNumber(439);    // compilenode member
                // call case 4: self request
                onSelf = true;
                var call2628 = callmethodChecked(this, "empty", []);
                var var_newSuite = call2628;
                setLineNumber(440);    // compilenode string
                var string2630 = new GraceString("null");
                // call case 6: other requests
                var call2631 = callmethodChecked(var_aTestClass, "forMethod(1)", [1], string2630);
                var var_example = call2631;
                setLineNumber(441);    // compilenode identifier
                // call case 6: other requests
                var call2633 = callmethodChecked(var_newSuite, "name:=(1)", [1], var_aName);
                setLineNumber(442);    // compilenode member
                // call case 6: other requests
                // call case 6: other requests
                var call2637 = callmethodChecked(var_mirror, "reflect(1)", [1], var_example);
                var call2638 = callmethodChecked(call2637, "methods", []);
                var block2639 = new GraceBlock(this, 442, 1);
                setLineNumber(1);    // compilenode identifier
                block2639.real = function(var_each) {
                  var if2640 = GraceDone;
                  setLineNumber(443);    // compilenode string
                  var string2642 = new GraceString("test");
                  // call case 6: other requests
                  // call case 6: other requests
                  var call2644 = callmethodChecked(var_each, "name", []);
                  var call2645 = callmethodChecked(call2644, "startsWith(1)", [1], string2642);
                  if (Grace_isTrue(call2645)) {
                    var if2646 = GraceDone;
                    setLineNumber(444);    // compilenode call
                    // call case 6: other requests
                    var string2649 = new GraceString("$object(1)");
                    // call case 6: other requests
                    // call case 6: other requests
                    var call2651 = callmethodChecked(var_each, "name", []);
                    var call2652 = callmethodChecked(call2651, "endsWith(1)", [1], string2649);
                    var call2653 = callmethodChecked(call2652, "prefix!", [0]);
                    if (Grace_isTrue(call2653)) {
                      setLineNumber(448);    // compilenode member
                      // call case 6: other requests
                      var call2657 = callmethodChecked(var_each, "name", []);
                      // call case 6: other requests
                      var call2658 = callmethodChecked(var_aTestClass, "forMethod(1)", [1], call2657);
                      // call case 6: other requests
                      var call2659 = callmethodChecked(var_newSuite, "add(1)", [1], call2658);
                      if2646 = call2659;
                    }
                    if2640 = if2646;
                  }
                  return if2640;
                };
                // call case 5: prelude request
                var call2660 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call2638, block2639);
                setLineNumber(452);    // compilenode identifier
                return var_newSuite;
              };
              func2626.paramCounts = [1, 1];
              obj2106.methods["fromTestMethodsIn(1)named(1)"] = func2626;
              func2626.definitionLine = 438;
              func2626.definitionModule = "gUnit";
              var func2661 = function(argcv) {    // method fromTestMethodsIn(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_aTestClass = arguments[curarg];
                curarg++;
                setModuleName("gUnit");
                setLineNumber(456);    // compilenode identifier
                // call case 6: other requests
                // call case 3: self.outer request
                var call2665 = callmethodChecked(superDepth, "outer", [0]);
                onSelf = true;
                var call2666 = callmethodChecked(call2665, "className(1)", [1], var_aTestClass);
                // call case 4: self request
                onSelf = true;
                var call2667 = callmethodChecked(this, "fromTestMethodsIn(1)named(1)", [1, 1], var_aTestClass, call2666);
                return call2667;
              };
              func2661.paramCounts = [1];
              obj2106.methods["fromTestMethodsIn(1)"] = func2661;
              func2661.definitionLine = 455;
              func2661.definitionModule = "gUnit";
              superDepth = origSuperDepth;
            };
            obj_init_2106.apply(obj2106, []);
            var var_testSuite = obj2106;
            setLineNumber(1);    // compilenode method
            var func2668 = function(argcv) {    // method testSuite
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("gUnit");
              // testSuite is a simple accessor - elide try ... catch
              setLineNumber(351);    // compilenode identifier
              return var_testSuite;
            };
            func2668.paramCounts = [0];
            this.methods["testSuite"] = func2668;
            func2668.definitionLine = 1;
            func2668.definitionModule = "gUnit";
            this.methods["testSuite"].debug = "def";
            return this;
          }
          gracecode_gUnit.imports = ['math', 'mirrors'];
          if (typeof gctCache !== "undefined")
            gctCache['gUnit'] = "classes:\n testSuite\nconfidential:\nconstructors-of:testSuite:\n withAll(1)\nfresh-methods:\n assertion\n testCaseNamed(1)\n testRecordFor(1)message(1)\n testResult\nfresh:assertion:\n AssertionFailure\n assert(1)\n assert(1)description(1)\n assert(1)hasType(1)\n assert(1)shouldBe(1)\n assert(1)shouldEqual(1)within(1)\n assert(1)shouldRaise(1)\n assert(1)shouldntBe(1)\n assert(1)shouldntRaise(1)\n assertType(1)describes(1)\n countOneAssertion\n deny(1)\n deny(1)description(1)\n deny(1)hasType(1)\n deny(1)shouldBe(1)\n failBecause(1)\n methodsIn(1)missingFrom(1)\n protocolOf(1)notCoveredBy(1)\nfresh:testCaseNamed(1):\n ::(1)\n AssertionFailure\n asDebugString\n asString\n assert(1)\n assert(1)description(1)\n assert(1)hasType(1)\n assert(1)shouldBe(1)\n assert(1)shouldEqual(1)within(1)\n assert(1)shouldRaise(1)\n assert(1)shouldntBe(1)\n assert(1)shouldntRaise(1)\n assertType(1)describes(1)\n basicAsString\n countOneAssertion\n currentResult\n debug(1)\n debugAndPrintResults\n deny(1)\n deny(1)description(1)\n deny(1)hasType(1)\n deny(1)shouldBe(1)\n failBecause(1)\n isMe(1)\n methodsIn(1)missingFrom(1)\n name\n printBackTrace(1)limitedTo(1)\n protocolOf(1)notCoveredBy(1)\n run(1)\n runAndPrintResults\n runTest\n setup\n size\n teardown\n \u2260(1)\nfresh:testRecordFor(1)message(1):\n <(1)\n ==(1)\n >(1)\n asString\n compare(1)\n hash\n message\n name\n \u2264(1)\n \u2265(1)\nfresh:testResult:\n countOneAssertion\n currentCountOfAssertions\n detailedSummary\n errorSet\n erroredTestNames\n errors\n failSet\n failedTestNames\n failures\n numberOfErrors\n numberOfFailures\n numberRun\n runCount\n summary\n testErrored(1)withMessage(1)\n testFailed(1)withMessage(1)\n testFinished(1)\n testStarted(1)\nmethods-of:testSuite.withAll(1):\n ++(1)\n add(1)\n addAll(1)\n debug(1)\n debugAndPrintResults\n do(1)\n doNotRerunErrors\n doRerunErrors\n errorsToBeRerun\n iterator\n name\n rerunErrors(1)\n run(1)\n runAndPrintResults\n size\n testNames\n tests\nmethodtypes-of:Assertion:\n 1 assert(b : Block)shouldRaise(desireed : prelude.ExceptionKind) -> Done\n 1 assert(b : Block)shouldntRaise(undesired : prelude.ExceptionKind) -> Done\n 1 assert(bb : Boolean) -> Done\n 1 assert(bb : Boolean)description(str : String) -> Done\n 1 assert(n1 : Number)shouldEqual(n2 : Number)within(epsilon : Number) -> Done\n 1 assert(s : Object)hasType(t : Type) -> Done\n 1 assert(s1 : Object)shouldBe(s2 : Object) -> Done\n 1 assert(s1 : Object)shouldntBe(s2 : Object) -> Done\n 1 deny(bb : Boolean) -> Done\n 1 deny(bb : Boolean)description(str : String) -> Done\n 1 failBecause(Message : String) -> Done\nmethodtypes-of:TestCase:\n & 2\n & Assertion\n 2 debug(_ : TestResult) -> Done\n 2 name -> String\n 2 run(_ : TestResult) -> Done\n 2 size -> Number\nmethodtypes-of:TestRecord:\n 2 message -> String\n 2 name -> String\nmethodtypes-of:TestResult:\n 2 detailedSummary -> String\n 2 doNotRerunErrors -> Done\n 2 doRerunErrors -> Done\n 2 erroredTestNames -> List<String>\n 2 errors -> List<TestRecord>\n 2 failedTestNames -> List<String>\n 2 failures -> List<TestRecord>\n 2 numberOfErrors -> Number\n 2 numberOfFailures -> Number\n 2 numberRun -> Number\n 2 summary -> String\n 2 testErrored(name : String) -> Done\n 2 testFailed(name : String) -> Done\n 2 testFinished(name : String) -> Done\n 2 testStarted(name : String) -> Done\nmethodtypes-of:TestSuite:\n & 3\n & TestCase\n 3 add(t : TestCase) -> Done\n 3 rerunErrors(r : TestResult) -> Done\nmodules:\n math\n mirrors\npath:\n gUnit\npublic:\n Assertion\n TestCase\n TestRecord\n TestResult\n TestSuite\n assertion\n className(1)\n numberOfErrorsToRerun\n numberOfErrorsToRerun:=\n testCaseNamed(1)\n testRecordFor(1)message(1)\n testResult\n testSuite\ntypes:\n Assertion\n TestCase\n TestRecord\n TestResult\n TestSuite\n";
          if (typeof originalSourceLines !== "undefined") {
            originalSourceLines["gUnit"] = [
              "#pragma ExtendedLineups",
              "// GUnit.grace",
              "// GUnit project",
              "//",
              "// Created by Andrew Black on 6/26/12.",
              "",
              "",
              "import \"mirrors\" as mirror",
              "import \"math\" as math",
              "",
              "type Assertion = { ",
              "    assert(bb:Boolean) description(str:String) -> Done",
              "    deny(bb:Boolean) description (str:String)  -> Done",
              "    assert(bb:Boolean) -> Done",
              "    deny(bb:Boolean) -> Done",
              "    assert(s1:Object) shouldBe(s2:Object) -> Done",
              "    assert(s1:Object) shouldntBe(s2:Object) -> Done",
              "    assert(n1:Number) shouldEqual(n2:Number) within(epsilon:Number) -> Done",
              "    assert(b:Block) shouldRaise(desireed:ExceptionKind) -> Done",
              "    assert(b:Block) shouldntRaise(undesired:ExceptionKind) -> Done",
              "    assert(s:Object) hasType(t:Type) -> Done",
              "    failBecause(Message:String) -> Done",
              "}",
              "   ",
              "type TestCase = Assertion & type {",
              "    run(_:TestResult) -> Done",
              "    debug(_:TestResult) -> Done",
              "    size -> Number",
              "    name -> String",
              "}",
              "",
              "type TestRecord = {",
              "    name -> String",
              "    message -> String",
              "}",
              "",
              "type TestResult =  {",
              "    testStarted(name:String) -> Done",
              "    testFailed(name:String) -> Done",
              "    testErrored(name:String) -> Done",
              "    testFinished(name:String) -> Done",
              "    erroredTestNames -> List⟦String⟧",
              "    failedTestNames -> List⟦String⟧",
              "    summary -> String",
              "    detailedSummary -> String",
              "    numberOfErrors -> Number",
              "    errors -> List⟦TestRecord⟧",
              "    numberOfFailures -> Number",
              "    failures -> List⟦TestRecord⟧",
              "    numberRun -> Number",
              "    doNotRerunErrors -> Done",
              "    doRerunErrors -> Done",
              "}",
              "",
              "type TestSuite = TestCase & type {",
              "    add(t:TestCase) -> Done",
              "    rerunErrors(r:TestResult) -> Done",
              "}",
              "",
              "var numberOfErrorsToRerun is public := 10",
              "",
              "class assertion {",
              "    def AssertionFailure is readable = Exception.refine \"AssertionFailure\"",
              "    method countOneAssertion { abstract }",
              "    ",
              "    method failBecause(str) {",
              "        assert (false) description (str)",
              "    }",
              "    method assert(bb: Boolean)description(str) {",
              "        countOneAssertion",
              "        if (! bb) then { AssertionFailure.raise(str) }",
              "    }",
              "    method deny(bb: Boolean) description (str) {",
              "        assert (! bb) description (str)",
              "    }",
              "    method assert(bb: Boolean) {",
              "        assert (bb) description \"Assertion failed!\"",
              "    }",
              "    method deny(bb: Boolean) {",
              "        assert (! bb)",
              "    }",
              "    method assert(s1:Object) shouldBe (s2:Object) {",
              "        assert (s1 == s2) description \"‹{s1.asDebugString}› should be ‹{s2.asDebugString}›\"",
              "    }",
              "    method assert(s1:Object) shouldntBe (s2:Object) {",
              "        assert ((s1 == s2).not) description \"‹{s1.asDebugString}› should not be ‹{s2.asDebugString}›\"",
              "    }",
              "    method deny(s1:Object) shouldBe (s2:Object) {",
              "        assert ((s1 == s2).not) description \"‹{s1.asDebugString}› should not be ‹{s2.asDebugString}›\"",
              "    }",
              "    method assert(n1:Number) shouldEqual (n2:Number) within (epsilon:Number) {",
              "        assert (math.abs(n1 - n2) ≤ epsilon) description \"‹{n1.asDebugString}› should be approximately ‹{n2.asDebugString}›\"",
              "    }",
              "    method assert(block0) shouldRaise (desiredException) {",
              "        var completedNormally",
              "        countOneAssertion",
              "        try {",
              "            block0.apply",
              "            completedNormally := true",
              "        } catch { raisedException:desiredException ->",
              "            completedNormally := false",
              "        } catch { raisedException ->",
              "            failBecause(\"code raised exception {raisedException.exception}\" ++",
              "                \": \\\"{raisedException.message}\\\" instead of {desiredException}\")",
              "        }",
              "        if (completedNormally) then {failBecause \"code did not raise an exception\"}",
              "    }",
              "    method assert(block0) shouldntRaise (undesiredException) {",
              "        countOneAssertion",
              "        try {",
              "            block0.apply",
              "        } catch { raisedException:undesiredException ->",
              "            failBecause \"code raised exception {raisedException.exception}\"",
              "        } catch { _ -> ",
              "            // do nothing; it's OK to raise a different exception.",
              "        }",
              "    }",
              "    method assert(value) hasType (Desired:Type) {",
              "        match (value)",
              "            case { _:Desired -> countOneAssertion }",
              "            case { _ -> ",
              "                def m = methodsIn(Desired) missingFrom (value)",
              "                failBecause \"{value.asDebugString} does not have type {Desired}; it's missing methods {m}.\" }",
              "    }",
              "    method assertType(T:Type) describes (value) {",
              "        def missingFromT = protocolOf(value) notCoveredBy(T)",
              "        assert (missingFromT.isEmpty) description (missingFromT)",
              "    }",
              "",
              "    method methodsIn(DesiredType) missingFrom (value) -> String is confidential {",
              "        def vMethods = mirror.reflect(value).methodNames",
              "        def tMethods = DesiredType.methodNames",
              "        def missing = tMethods -- vMethods",
              "        if (missing.size == 0) then {",
              "            ProgrammingError.raise \"{value.asDebugString} seems to have all the methods of {DesiredType}\"",
              "        } else {",
              "            var s := \"\"",
              "            missing.do { each -> s := s ++ each } ",
              "                separatedBy { s := s ++ \", \" }",
              "            s",
              "        }",
              "    }",
              "    method protocolOf(value) notCoveredBy (Q:Type) -> String is confidential {",
              "        var s := \"\"",
              "        def vMethods = set(mirror.reflect(value).methodNames)",
              "        def qMethods = set(Q.methodNames)",
              "        def missing = (vMethods -- qMethods).filter{m -> ",
              "            (! m.endsWith \"()object\") && (m != \"outer\")}.asSet",
              "        if (missing.isEmpty.not) then {",
              "            s := \"{Q.asDebugString} is missing \"",
              "            missing.do { each -> s := s ++ each } ",
              "                separatedBy { s := s ++ \", \" }",
              "        }",
              "        return s",
              "    }",
              "    method deny(value) hasType (Undesired:Type) {",
              "        match (value)",
              "            case { _:Undesired ->",
              "                failBecause \"{value.asDebugString} has type {Undesired}\"",
              "            }",
              "            case { _ -> ",
              "                countOneAssertion ",
              "            }",
              "    }",
              "}",
              "",
              "class testCaseNamed(name') -> TestCase {",
              "    inherits assertion",
              "",
              "    def size is public = 1",
              "    var currentResult",
              "    method name {name'}",
              "",
              "    method setup { }",
              "    method teardown { }",
              "    method countOneAssertion {",
              "        currentResult.countOneAssertion",
              "    }",
              "",
              "    method run (result) {",
              "        currentResult := result",
              "        result.testStarted(name)",
              "        try {",
              "            try {",
              "                setup",
              "                runTest",
              "            } finally { teardown }",
              "        } catch {e: self.AssertionFailure ->",
              "            result.testFailed(name)withMessage(e.message)",
              "        } catch {e: Exception ->",
              "            result.testErrored(name)withMessage \"{e.exception}: {e.message}\"",
              "        }",
              "        result.testFinished(name)",
              "    }",
              "",
              "    method debug (result) {",
              "        currentResult := result",
              "        result.testStarted(name)",
              "        try {",
              "            print \"\\ndebugging method {name} ...\"",
              "            try {",
              "                setup",
              "                runTest",
              "            } finally { teardown }",
              "        } catch {e: Exception ->",
              "            result.testErrored(name)withMessage(e.message)",
              "            printBackTrace(e) limitedTo(name)",
              "        }",
              "        result.testFinished(name)",
              "    }",
              "    ",
              "    method runTest {",
              "        def methodImage = mirror.reflect(self).getMethod(name)",
              "        methodImage.requestWithArgs(emptySequence)",
              "    }",
              "",
              "    method printBackTrace(exceptionPacket) limitedTo(testName) {",
              "        def ex = exceptionPacket.exception",
              "        def msg = exceptionPacket.message",
              "        def lineNr = exceptionPacket.lineNumber",
              "        print \"{ex} on line {lineNr}: {msg}\"",
              "        def bt = exceptionPacket.backtrace",
              "        while {bt.size > 0} do {",
              "            def frameDescription = bt.pop",
              "            print(\"  called from \" ++ frameDescription)",
              "            if (frameDescription.contains(testName)) then { return }",
              "            if (frameDescription.contains \"testCaseNamed()setupIn()asTestNumber\")",
              "                    then {  ",
              "                // this is for minitest, where the name won't be on the stack",
              "                return",
              "            }",
              "        }",
              "    }",
              "",
              "    method runAndPrintResults {",
              "        def result = testResult",
              "        self.run(result)",
              "        if (name == \"\") then {",
              "            print \"{result.detailedSummary}\"",
              "        } else {",
              "            print \"{self.name}: {result.detailedSummary}\"",
              "        }",
              "    }",
              "    ",
              "    method debugAndPrintResults {",
              "        def result = testResult",
              "        self.debug(result)",
              "        if (name == \"\") then {",
              "            print \"{result.detailedSummary}\"",
              "        } else {",
              "            print \"{self.name}: {result.detailedSummary}\"",
              "        }",
              "    }",
              "}",
              "",
              "",
              "class testResult {",
              "    var failSet := emptySet",
              "    var errorSet := emptySet",
              "    var runCount := 0",
              "    var currentCountOfAssertions := 0",
              "",
              "    method countOneAssertion {",
              "        currentCountOfAssertions := currentCountOfAssertions + 1",
              "    }",
              "",
              "    method testStarted(name) {",
              "        runCount := runCount + 1",
              "        currentCountOfAssertions := 0",
              "    }",
              "",
              "    method testFinished(name) {",
              "        if(currentCountOfAssertions == 0) then {",
              "            failSet.add(testRecordFor(name)message(\"no assertions were checked in this test\"))",
              "        }",
              "    }",
              "    ",
              "    method testFailed(name)withMessage(msg) {",
              "        failSet.add(testRecordFor(name)message(msg))",
              "    }",
              "    ",
              "    method testErrored(name)withMessage(msg) {",
              "        errorSet.add(testRecordFor(name)message(msg))",
              "        currentCountOfAssertions := 1   // to prevent the \"no assertions\" failure",
              "    }",
              "    ",
              "    method summary {",
              "        def s = if (numberOfErrors == 1) then {\"\"} else {\"s\"}",
              "        \"{runCount} run, {numberOfFailures} failed, {numberOfErrors} error{s}\"",
              "    }",
              "    ",
              "    method detailedSummary {",
              "        var output := summary",
              "        if (numberOfFailures > 0) then {",
              "            output := output ++ \"\\nFailures:\"",
              "            for (failSet.asList.sort) do { each ->",
              "                output := output ++ \"\\n    \" ++ each",
              "            }",
              "        }",
              "        if (numberOfErrors > 0) then {",
              "            output := output ++ \"\\nErrors:\"",
              "            for (errorSet.asList.sort) do { each ->",
              "                output := output ++ \"\\n    \" ++ each",
              "            }",
              "        }",
              "        output",
              "    }",
              "    ",
              "    method numberOfErrors {",
              "        errorSet.size",
              "    }",
              "    ",
              "    method errors {",
              "        list(errorSet).sort",
              "    }",
              "    ",
              "    method erroredTestNames {",
              "        errorSet.map{each -> each.name}.asList.sort",
              "    }",
              "    ",
              "    method numberOfFailures {",
              "        failSet.size",
              "    }",
              "    ",
              "    method failures {",
              "        list(failSet).sort",
              "    }",
              "    ",
              "    method failedTestNames {",
              "        failSet.map{each -> each.name}.asList.sort",
              "    }",
              "    ",
              "    method numberRun {",
              "        runCount",
              "    }",
              "}",
              "",
              "class testRecordFor(testName)message(testMsg) {",
              "    method name {testName}",
              "    method message {testMsg}",
              "    method asString {\"{name}: {testMsg}\"}",
              "    method hash {name.hash}",
              "    method compare(other) { name.compare(other.name) }",
              "    method < (other) { name < other.name }",
              "    method ≤ (other) { name ≤ other.name }",
              "    method == (other) { name == other.name }",
              "    method > (other) { name < other.name }",
              "    method ≥ (other) { name ≥ other.name }",
              "}",
              "",
              "def testSuite is public = object {",
              "",
              "    class withAll(initialContents) {",
              "        inherits collections.enumerable.TRAIT",
              "        var name is public := \"\"",
              "        def tests = [ ]",
              "        def testNames = emptySet",
              "        var errorsToBeRerun := true",
              "",
              "        method doNotRerunErrors { errorsToBeRerun := false }",
              "        method doRerunErrors { errorsToBeRerun := true }",
              "        for (initialContents) do { each -> self.add(each) }",
              "                ",
              "        method add(e) {",
              "            def eName = e.name",
              "            if (testNames.contains (eName)) then {",
              "                print \"Warning: more than one test named \\\"{eName}\\\"\"",
              "            } else {",
              "                testNames.add(eName)",
              "            }",
              "            tests.push(e)",
              "        }",
              "        ",
              "        method run(result) {",
              "            for (tests) do { each -> each.run(result) }",
              "        }",
              "        ",
              "        method debug(result) {",
              "            for (tests) do { each -> each.debug(result) }",
              "        }",
              "",
              "        method size { tests.size }",
              "        ",
              "        method runAndPrintResults {",
              "            def result = testResult",
              "            self.run(result)",
              "            if (name == \"\") then {",
              "                print \"{result.detailedSummary}\"",
              "            } else {",
              "                print \"{self.name}: {result.detailedSummary}\"",
              "            }",
              "            if ((result.numberOfErrors > 0) && errorsToBeRerun) then {",
              "                rerunErrors(result)",
              "            }",
              "        }",
              "        ",
              "        method debugAndPrintResults {",
              "            def result = testResult",
              "            self.debug(result)",
              "            if (name == \"\") then {",
              "                print \"{result.detailedSummary}\"",
              "            } else {",
              "                print \"{self.name}: {result.detailedSummary}\"",
              "            }",
              "        }",
              "        ",
              "        method iterator { tests.iterator }",
              "        method do (aBlock) { tests.do (aBlock) }",
              "        method addAll(anotherSuite) {",
              "            anotherSuite.do { each -> self.add(each) }",
              "            self",
              "        }",
              "        method ++ (anotherSuite) {",
              "            outer.withAll(tests).addAll(anotherSuite)",
              "        }",
              "        method rerunErrors(result) {",
              "            if (numberOfErrorsToRerun ≤ 0) then { return }",
              "            var n := min(result.numberOfErrors, numberOfErrorsToRerun)",
              "            if (n == 1) then {",
              "                print \"\\nRe-running 1 error.\"",
              "            } else {",
              "                print \"\\nRe-running {n} errors.\"",
              "            }",
              "            def newResult = testResult",
              "            def errors = result.erroredTestNames",
              "            tests.do { each ->",
              "                if (errors.contains(each.name)) then {",
              "                    each.debug(newResult)",
              "                    n := n - 1",
              "                    if (n == 0) then { return }",
              "                }",
              "            }",
              "        }",
              "    }",
              "    ",
              "    method empty { withAll [] }",
              "    ",
              "    method fromTestMethodsIn(aTestClass) named (aName) {",
              "        def newSuite = self.empty",
              "        def example = aTestClass.forMethod(\"null\")",
              "        newSuite.name := aName",
              "        for (mirror.reflect(example).methods) do { each ->",
              "            if (each.name.startsWith \"test\") then {",
              "                if (! each.name.endsWith \"$object(1)\") then {",
              "                    // we should also check that there are no arguments",
              "                    // but a mirror on a method with no arguments currently",
              "                    // has a partcount of 1!",
              "                    newSuite.add(aTestClass.forMethod(each.name))",
              "                }",
              "            }",
              "        }",
              "        newSuite",
              "    }",
              "    ",
              "    method fromTestMethodsIn(aTestClass) {",
              "        fromTestMethodsIn(aTestClass) named (className(aTestClass))",
              "    }",
              "}",
              "",
              "method className(testClass) {",
              "    def cName = testClass.asString",
              "    if (cName.startsWith \"class \") then {",
              "        cName.substringFrom 7 to (cName.size)",
              "    } elseif { cName.startsWith \"trait \" } then {",
              "        cName.substringFrom 7 to (cName.size)",
              "    } elseif { cName.startsWith \"a \" } then {",
              "        cName.substringFrom 3 to (cName.size)",
              "    } elseif { cName.startsWith \"an \" } then {",
              "        cName.substringFrom 4 to (cName.size)",
              "    } else {",
              "        \"un-named\"",
              "    }",
              "}" ];
          }
          if (typeof global !== "undefined")
            global.gracecode_gUnit = gracecode_gUnit;
          if (typeof window !== "undefined")
            window.gracecode_gUnit = gracecode_gUnit;
