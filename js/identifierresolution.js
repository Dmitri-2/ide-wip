"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_identifierresolution() {
  setModuleName("identifierresolution");
  this.definitionModule = "identifierresolution";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_identifierresolution_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_identifierresolution_outer0;
  setLineNumber(2);    // compilenode import
  // Import of io as io
  if (typeof gracecode_io == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module io'));
  var var_io = do_import("io", gracecode_io);
  var func1 = function(argcv) {    // method io
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("identifierresolution");
    // io is a simple accessor - elide try ... catch
    return var_io;
  };
  func1.paramCounts = [0];
  this.methods["io"] = func1;
  func1.definitionLine = 2;
  func1.definitionModule = "identifierresolution";
  func1.debug = "import";
  func1.confidential = true;
  setModuleName("identifierresolution");
  setLineNumber(3);    // compilenode import
  // Import of sys as sys
  if (typeof gracecode_sys == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module sys'));
  var var_sys = do_import("sys", gracecode_sys);
  var func2 = function(argcv) {    // method sys
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("identifierresolution");
    // sys is a simple accessor - elide try ... catch
    return var_sys;
  };
  func2.paramCounts = [0];
  this.methods["sys"] = func2;
  func2.definitionLine = 3;
  func2.definitionModule = "identifierresolution";
  func2.debug = "import";
  func2.confidential = true;
  setModuleName("identifierresolution");
  setLineNumber(4);    // compilenode import
  // Import of ast as ast
  if (typeof gracecode_ast == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module ast'));
  var var_ast = do_import("ast", gracecode_ast);
  var func3 = function(argcv) {    // method ast
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("identifierresolution");
    // ast is a simple accessor - elide try ... catch
    return var_ast;
  };
  func3.paramCounts = [0];
  this.methods["ast"] = func3;
  func3.definitionLine = 4;
  func3.definitionModule = "identifierresolution";
  func3.debug = "import";
  func3.confidential = true;
  setModuleName("identifierresolution");
  setLineNumber(5);    // compilenode import
  // Import of util as util
  if (typeof gracecode_util == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module util'));
  var var_util = do_import("util", gracecode_util);
  var func4 = function(argcv) {    // method util
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("identifierresolution");
    // util is a simple accessor - elide try ... catch
    return var_util;
  };
  func4.paramCounts = [0];
  this.methods["util"] = func4;
  func4.definitionLine = 5;
  func4.definitionModule = "identifierresolution";
  func4.debug = "import";
  func4.confidential = true;
  setModuleName("identifierresolution");
  setLineNumber(6);    // compilenode import
  // Import of xmodule as xmodule
  if (typeof gracecode_xmodule == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module xmodule'));
  var var_xmodule = do_import("xmodule", gracecode_xmodule);
  var func5 = function(argcv) {    // method xmodule
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("identifierresolution");
    // xmodule is a simple accessor - elide try ... catch
    return var_xmodule;
  };
  func5.paramCounts = [0];
  this.methods["xmodule"] = func5;
  func5.definitionLine = 6;
  func5.definitionModule = "identifierresolution";
  func5.debug = "import";
  func5.confidential = true;
  setModuleName("identifierresolution");
  setLineNumber(7);    // compilenode import
  // Import of stringMap as map
  if (typeof gracecode_stringMap == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module stringMap'));
  var var_map = do_import("stringMap", gracecode_stringMap);
  var func6 = function(argcv) {    // method map
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("identifierresolution");
    // map is a simple accessor - elide try ... catch
    return var_map;
  };
  func6.paramCounts = [0];
  this.methods["map"] = func6;
  func6.definitionLine = 7;
  func6.definitionModule = "identifierresolution";
  func6.debug = "import";
  func6.confidential = true;
  setModuleName("identifierresolution");
  setLineNumber(8);    // compilenode import
  // Import of mirrors as mirrors
  if (typeof gracecode_mirrors == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module mirrors'));
  var var_mirrors = do_import("mirrors", gracecode_mirrors);
  var func7 = function(argcv) {    // method mirrors
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("identifierresolution");
    // mirrors is a simple accessor - elide try ... catch
    return var_mirrors;
  };
  func7.paramCounts = [0];
  this.methods["mirrors"] = func7;
  func7.definitionLine = 8;
  func7.definitionModule = "identifierresolution";
  func7.debug = "import";
  func7.confidential = true;
  setModuleName("identifierresolution");
  setLineNumber(9);    // compilenode import
  // Import of errormessages as errormessages
  if (typeof gracecode_errormessages == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module errormessages'));
  var var_errormessages = do_import("errormessages", gracecode_errormessages);
  var func8 = function(argcv) {    // method errormessages
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("identifierresolution");
    // errormessages is a simple accessor - elide try ... catch
    return var_errormessages;
  };
  func8.paramCounts = [0];
  this.methods["errormessages"] = func8;
  func8.definitionLine = 9;
  func8.definitionModule = "identifierresolution";
  func8.debug = "import";
  func8.confidential = true;
  setModuleName("identifierresolution");
  setLineNumber(10);    // compilenode import
  // Import of identifierKinds as k
  if (typeof gracecode_identifierKinds == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module identifierKinds'));
  var var_k = do_import("identifierKinds", gracecode_identifierKinds);
  var func9 = function(argcv) {    // method k
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("identifierresolution");
    // k is a simple accessor - elide try ... catch
    return var_k;
  };
  func9.paramCounts = [0];
  this.methods["k"] = func9;
  func9.definitionLine = 10;
  func9.definitionModule = "identifierresolution";
  func9.debug = "import";
  func9.confidential = true;
  setModuleName("identifierresolution");
  setLineNumber(22);    // compilenode method
  var func10 = function(argcv) {    // method newScopeKind(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_variety__39__ = arguments[curarg];
    curarg++;
    setModuleName("identifierresolution");
    setLineNumber(24);    // compilenode object
    var obj12 = Grace_allocObject(GraceObject, "object");
    obj12.definitionModule = "identifierresolution";
    obj12.definitionLine = 24;
    obj12.outer = this;
    var reader_identifierresolution_outer13 = function() {
      return this.outer;
    };
    obj12.methods["outer"] = reader_identifierresolution_outer13;
    var obj_init_12 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj12;
      superDepth = origSuperDepth;
    };
    obj_init_12.apply(obj12, []);
    // call case 4: self request
    onSelf = true;
    var call14 = callmethodChecked(this, "newScopeIn(1)kind(1)", [1, 1], obj12, var_variety__39__);
    var var_s = call14;
    setLineNumber(25);    // compilenode identifier
    // call case 6: other requests
    var call16 = callmethodChecked(var_s, "hasParent:=(1)", [1], GraceFalse);
    setLineNumber(26);    // compilenode identifier
    return var_s;
  };
  func10.paramCounts = [1];
  this.methods["newScopeKind(1)"] = func10;
  func10.definitionLine = 22;
  func10.definitionModule = "identifierresolution";
  setLineNumber(33);    // compilenode method
  var func17 = function(argcv) {    // method newScopeIn(_)kind(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_parent__39__ = arguments[curarg];
    curarg++;
    var var_variety__39__ = arguments[curarg];
    curarg++;
    setModuleName("identifierresolution");
    var obj18 = Grace_allocObject(GraceObject, "newScopeIn(_)kind(_)");
    obj18.definitionModule = "identifierresolution";
    obj18.definitionLine = 33;
    obj18.outer = this;
    var reader_identifierresolution_outer19 = function() {
      return this.outer;
    };
    obj18.methods["outer"] = reader_identifierresolution_outer19;
    var obj_init_18 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj18;
      var func20 = function(argcv) {    // method ==(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_other = arguments[curarg];
        curarg++;
        setModuleName("identifierresolution");
        setLineNumber(51);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call22 = callmethodChecked(this, "isMe(1)", [1], var_other);
        return call22;
      };
      func20.paramCounts = [1];
      obj18.methods["==(1)"] = func20;
      func20.definitionLine = 51;
      func20.definitionModule = "identifierresolution";
      var func23 = function(argcv) {    // method isEmpty
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierresolution");
        setLineNumber(52);    // compilenode member
        // call case 6: other requests
        // call case 4: self request
        onSelf = true;
        var call27 = callmethodChecked(this, "elements", []);
        var call28 = callmethodChecked(call27, "size", []);
        var opresult30 = callmethodChecked(call28, "==(1)", [1], new GraceNum(0));
        return opresult30;
      };
      func23.paramCounts = [0];
      obj18.methods["isEmpty"] = func23;
      func23.definitionLine = 52;
      func23.definitionModule = "identifierresolution";
      var func31 = function(argcv) {    // method addName(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_n = arguments[curarg];
        curarg++;
        setModuleName("identifierresolution");
        setLineNumber(54);    // compilenode member
        // call case 6: other requests
        var call34 = callmethodChecked(var_k, "methdec", []);
        // call case 6: other requests
        // call case 4: self request
        onSelf = true;
        var call36 = callmethodChecked(this, "elements", []);
        var call37 = callmethodChecked(call36, "put(2)", [2], var_n, call34);
        setLineNumber(55);    // compilenode member
        // call case 6: other requests
        var call40 = callmethodChecked(var_util, "linenum", []);
        // call case 6: other requests
        // call case 4: self request
        onSelf = true;
        var call42 = callmethodChecked(this, "elementLines", []);
        var call43 = callmethodChecked(call42, "put(2)", [2], var_n, call40);
        return call43;
      };
      func31.paramCounts = [1];
      obj18.methods["addName(1)"] = func31;
      func31.definitionLine = 53;
      func31.definitionModule = "identifierresolution";
      var func44 = function(argcv) {    // method addName(_)as(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_n = arguments[curarg];
        curarg++;
        var var_kind = arguments[curarg];
        curarg++;
        // Start argument checking
        curarg = 1;
        curarg++;
        setLineNumber(57);    // compilenode identifier
        if (!Grace_isTrue(callmethod(var_DeclKind, "match(1)",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in as (arg list 2), which corresponds to parameter kind, does not have " + 
                    callmethod(var_DeclKind, "asString", [0])._value + "."));
        curarg++;
        // End argument checking
        setModuleName("identifierresolution");
        setLineNumber(58);    // compilenode block
        var block46 = new GraceBlock(this, 58, 0);
        block46.real = function() {
          setLineNumber(59);    // compilenode identifier
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call49 = callmethodChecked(this, "elements", []);
          var call50 = callmethodChecked(call49, "put(2)", [2], var_n, var_kind);
          setLineNumber(60);    // compilenode member
          // call case 6: other requests
          var call53 = callmethodChecked(var_util, "linenum", []);
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call55 = callmethodChecked(this, "elementLines", []);
          var call56 = callmethodChecked(call55, "put(2)", [2], var_n, call53);
          setLineNumber(62);    // compilenode identifier
          throw new ReturnException(var_done, returnTarget);
          return undefined;
        };
        // call case 6: other requests
        setLineNumber(58);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call58 = callmethodChecked(this, "elements", []);
        var call59 = callmethodChecked(call58, "get(1)ifAbsent(1)", [1, 1], var_n, block46);
        var var_oldKind = call59;
        var if60 = GraceDone;
        setLineNumber(63);    // compilenode member
        // call case 6: other requests
        var call62 = callmethodChecked(var_kind, "isImplicit", []);
        if (Grace_isTrue(call62)) {
          setLineNumber(65);    // compilenode identifier
          return var_done;
        }
        var if63 = GraceDone;
        setLineNumber(66);    // compilenode member
        // call case 6: other requests
        var call65 = callmethodChecked(var_oldKind, "isImplicit", []);
        if (Grace_isTrue(call65)) {
          setLineNumber(67);    // compilenode identifier
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call68 = callmethodChecked(this, "elements", []);
          var call69 = callmethodChecked(call68, "put(2)", [2], var_n, var_kind);
          setLineNumber(68);    // compilenode member
          // call case 6: other requests
          var call72 = callmethodChecked(var_util, "linenum", []);
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call74 = callmethodChecked(this, "elementLines", []);
          var call75 = callmethodChecked(call74, "put(2)", [2], var_n, call72);
          setLineNumber(70);    // compilenode identifier
          return var_done;
        }
        setLineNumber(72);    // compilenode string
        var string77 = new GraceString("");
        var string80 = new GraceString(" because it is already declared as ");
        var string83 = new GraceString(" redefined as ");
        var opresult85 = callmethodChecked(string83, "++(1)", [1], var_kind);
        var opresult87 = callmethodChecked(opresult85, "++(1)", [1], string80);
        var opresult89 = callmethodChecked(opresult87, "++(1)", [1], var_oldKind);
        var opresult91 = callmethodChecked(opresult89, "++(1)", [1], string77);
        setLineNumber(71);    // compilenode string
        var string93 = new GraceString("' cannot be");
        var string96 = new GraceString("'");
        var opresult98 = callmethodChecked(string96, "++(1)", [1], var_n);
        var opresult100 = callmethodChecked(opresult98, "++(1)", [1], string93);
        var opresult102 = callmethodChecked(opresult100, "++(1)", [1], opresult91);
        setLineNumber(73);    // compilenode member
        // call case 6: other requests
        var call104 = callmethodChecked(var_util, "line", []);
        // call case 6: other requests
        var call106 = callmethodChecked(var_util, "linePos", []);
        // call case 6: other requests
        var call109 = callmethodChecked(var_n, "size", []);
        // call case 6: other requests
        var call112 = callmethodChecked(var_util, "linePos", []);
        var opresult114 = callmethodChecked(call112, "+(1)", [1], call109);
        var diff116 = callmethodChecked(opresult114, "-(1)", [1], new GraceNum(1));
        // call case 6: other requests
        setLineNumber(71);    // compilenode identifier
        var call117 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], opresult102, call104, call106, diff116);
        return call117;
      };
      func44.paramTypes = [];
      func44.paramTypes.push([]);
      func44.paramTypes.push([]);
      func44.paramCounts = [1, 1];
      obj18.methods["addName(1)as(1)"] = func44;
      func44.definitionLine = 57;
      func44.definitionModule = "identifierresolution";
      var func118 = function(argcv) {    // method addNode(_)as(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_nd = arguments[curarg];
        curarg++;
        var var_kind = arguments[curarg];
        curarg++;
        setModuleName("identifierresolution");
        setLineNumber(76);    // compilenode member
        // call case 6: other requests
        var call120 = callmethodChecked(var_nd, "value", []);
        var var_ndName = call120;
        setLineNumber(77);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call122 = callmethodChecked(this, "checkShadowing(1)as(1)", [1, 1], var_nd, var_kind);
        setLineNumber(78);    // compilenode block
        var block124 = new GraceBlock(this, 78, 0);
        block124.real = function() {
          setLineNumber(79);    // compilenode identifier
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call127 = callmethodChecked(this, "elements", []);
          var call128 = callmethodChecked(call127, "put(2)", [2], var_ndName, var_kind);
          setLineNumber(80);    // compilenode member
          // call case 6: other requests
          var call131 = callmethodChecked(var_nd, "line", []);
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call133 = callmethodChecked(this, "elementLines", []);
          var call134 = callmethodChecked(call133, "put(2)", [2], var_ndName, call131);
          setLineNumber(82);    // compilenode identifier
          throw new ReturnException(var_done, returnTarget);
          return undefined;
        };
        // call case 6: other requests
        setLineNumber(78);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call136 = callmethodChecked(this, "elements", []);
        var call137 = callmethodChecked(call136, "get(1)ifAbsent(1)", [1, 1], var_ndName, block124);
        var var_oldKind = call137;
        var if138 = GraceDone;
        setLineNumber(83);    // compilenode member
        // call case 6: other requests
        var call140 = callmethodChecked(var_kind, "isImplicit", []);
        if (Grace_isTrue(call140)) {
          setLineNumber(85);    // compilenode identifier
          return var_done;
        }
        var if141 = GraceDone;
        setLineNumber(86);    // compilenode member
        // call case 6: other requests
        var call143 = callmethodChecked(var_oldKind, "isImplicit", []);
        if (Grace_isTrue(call143)) {
          setLineNumber(87);    // compilenode identifier
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call146 = callmethodChecked(this, "elements", []);
          var call147 = callmethodChecked(call146, "put(2)", [2], var_ndName, var_kind);
          setLineNumber(88);    // compilenode member
          // call case 6: other requests
          var call150 = callmethodChecked(var_nd, "line", []);
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call152 = callmethodChecked(this, "elementLines", []);
          var call153 = callmethodChecked(call152, "put(2)", [2], var_ndName, call150);
          setLineNumber(90);    // compilenode identifier
          return var_done;
        }
        setLineNumber(91);    // compilenode string
        var string154 = new GraceString(" in this scope");
        var var_more = string154;
        var if155 = GraceDone;
        setLineNumber(92);    // compilenode identifier
        // call case 6: other requests
        // call case 4: self request
        onSelf = true;
        var call158 = callmethodChecked(this, "elementLines", []);
        var call159 = callmethodChecked(call158, "contains(1)", [1], var_ndName);
        if (Grace_isTrue(call159)) {
          setLineNumber(94);    // compilenode string
          var string160 = new GraceString("");
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call164 = callmethodChecked(this, "elementLines", []);
          var call165 = callmethodChecked(call164, "get(1)", [1], var_ndName);
          var string167 = new GraceString(" on line ");
          var opresult169 = callmethodChecked(string167, "++(1)", [1], call165);
          var opresult171 = callmethodChecked(opresult169, "++(1)", [1], string160);
          setLineNumber(93);    // compilenode string
          var string173 = new GraceString("");
          var string176 = new GraceString(" as a ");
          var opresult178 = callmethodChecked(string176, "++(1)", [1], var_oldKind);
          var opresult180 = callmethodChecked(opresult178, "++(1)", [1], string173);
          var opresult182 = callmethodChecked(opresult180, "++(1)", [1], opresult171);
          var_more = opresult182;
          if155 = GraceDone;
        }
        setLineNumber(98);    // compilenode string
        var string184 = new GraceString(".");
        // call case 6: other requests
        var call187 = callmethodChecked(var_nd, "line", []);
        var string189 = new GraceString(" as well as here at line ");
        var opresult191 = callmethodChecked(string189, "++(1)", [1], call187);
        var opresult193 = callmethodChecked(opresult191, "++(1)", [1], string184);
        setLineNumber(97);    // compilenode string
        var string196 = new GraceString(" redeclared because it is already declared");
        setLineNumber(96);    // compilenode string
        var string198 = new GraceString("' cannot be");
        var string201 = new GraceString("'");
        var opresult203 = callmethodChecked(string201, "++(1)", [1], var_ndName);
        var opresult205 = callmethodChecked(opresult203, "++(1)", [1], string198);
        var opresult207 = callmethodChecked(opresult205, "++(1)", [1], string196);
        var opresult209 = callmethodChecked(opresult207, "++(1)", [1], var_more);
        var opresult211 = callmethodChecked(opresult209, "++(1)", [1], opresult193);
        setLineNumber(99);    // compilenode member
        // call case 6: other requests
        var call213 = callmethodChecked(var_nd, "line", []);
        // call case 6: other requests
        var call215 = callmethodChecked(var_nd, "linePos", []);
        // call case 6: other requests
        var call218 = callmethodChecked(var_ndName, "size", []);
        // call case 6: other requests
        var call221 = callmethodChecked(var_nd, "linePos", []);
        var opresult223 = callmethodChecked(call221, "+(1)", [1], call218);
        var diff225 = callmethodChecked(opresult223, "-(1)", [1], new GraceNum(1));
        // call case 6: other requests
        setLineNumber(96);    // compilenode identifier
        var call226 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], opresult211, call213, call215, diff225);
        return call226;
      };
      func118.paramCounts = [1, 1];
      obj18.methods["addNode(1)as(1)"] = func118;
      func118.definitionLine = 75;
      func118.definitionModule = "identifierresolution";
      var func227 = function(argcv) {    // method contains(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_n = arguments[curarg];
        curarg++;
        setModuleName("identifierresolution");
        setLineNumber(102);    // compilenode identifier
        // call case 6: other requests
        // call case 4: self request
        onSelf = true;
        var call230 = callmethodChecked(this, "elements", []);
        var call231 = callmethodChecked(call230, "contains(1)", [1], var_n);
        return call231;
      };
      func227.paramCounts = [1];
      obj18.methods["contains(1)"] = func227;
      func227.definitionLine = 101;
      func227.definitionModule = "identifierresolution";
      var func232 = function(argcv) {    // method withSurroundingScopesDo(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_b = arguments[curarg];
        curarg++;
        setModuleName("identifierresolution");
        setLineNumber(106);    // compilenode identifier
        var var_cur = this;
        setLineNumber(107);    // compilenode block
        var block234 = new GraceBlock(this, 107, 0);
        block234.real = function() {
          // call case 6: other requests
          var call236 = callmethodChecked(var_b, "apply(1)", [1], var_cur);
          // call case 6: other requests
          var call238 = callmethodChecked(var_cur, "hasParent", []);
          return call238;
        };
        var block239 = new GraceBlock(this, 107, 0);
        block239.real = function() {
          setLineNumber(108);    // compilenode member
          // call case 6: other requests
          var call241 = callmethodChecked(var_cur, "parent", []);
          var_cur = call241;
          return GraceDone;
        };
        // call case 5: prelude request
        var call242 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block234, block239);
        return call242;
      };
      func232.paramCounts = [1];
      obj18.methods["withSurroundingScopesDo(1)"] = func232;
      func232.definitionLine = 104;
      func232.definitionModule = "identifierresolution";
      var func243 = function(argcv) {    // method keysAsList
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierresolution");
        setLineNumber(112);    // compilenode member
        // call case 5: prelude request
        var call245 = callmethodChecked(var_prelude, "emptyList", []);
        var var_result = call245;
        setLineNumber(113);    // compilenode block
        var block247 = new GraceBlock(this, 113, 1);
        setLineNumber(1);    // compilenode identifier
        block247.real = function(var_each) {
          setLineNumber(113);    // compilenode identifier
          // call case 6: other requests
          var call249 = callmethodChecked(var_result, "addLast(1)", [1], var_each);
          return call249;
        };
        // call case 6: other requests
        // call case 4: self request
        onSelf = true;
        var call251 = callmethodChecked(this, "elements", []);
        var call252 = callmethodChecked(call251, "keysDo(1)", [1], block247);
        setLineNumber(114);    // compilenode identifier
        return var_result;
      };
      func243.paramCounts = [0];
      obj18.methods["keysAsList"] = func243;
      func243.definitionLine = 111;
      func243.definitionModule = "identifierresolution";
      var func253 = function(argcv) {    // method keysAndKindsDo(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_action = arguments[curarg];
        curarg++;
        setModuleName("identifierresolution");
        setLineNumber(117);    // compilenode identifier
        // call case 6: other requests
        // call case 4: self request
        onSelf = true;
        var call256 = callmethodChecked(this, "elements", []);
        var call257 = callmethodChecked(call256, "keysAndValuesDo(1)", [1], var_action);
        return call257;
      };
      func253.paramCounts = [1];
      obj18.methods["keysAndKindsDo(1)"] = func253;
      func253.definitionLine = 116;
      func253.definitionModule = "identifierresolution";
      var func258 = function(argcv) {    // method kind(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_n = arguments[curarg];
        curarg++;
        setModuleName("identifierresolution");
        setLineNumber(119);    // compilenode identifier
        // call case 6: other requests
        // call case 4: self request
        onSelf = true;
        var call261 = callmethodChecked(this, "elements", []);
        var call262 = callmethodChecked(call261, "get(1)", [1], var_n);
        return call262;
      };
      func258.paramCounts = [1];
      obj18.methods["kind(1)"] = func258;
      func258.definitionLine = 119;
      func258.definitionModule = "identifierresolution";
      var func263 = function(argcv) {    // method at(_)putScope(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_n = arguments[curarg];
        curarg++;
        var var_scp = arguments[curarg];
        curarg++;
        setModuleName("identifierresolution");
        setLineNumber(121);    // compilenode identifier
        // call case 6: other requests
        // call case 4: self request
        onSelf = true;
        var call266 = callmethodChecked(this, "elementScopes", []);
        var call267 = callmethodChecked(call266, "put(2)", [2], var_n, var_scp);
        return call267;
      };
      func263.paramCounts = [1, 1];
      obj18.methods["at(1)putScope(1)"] = func263;
      func263.definitionLine = 120;
      func263.definitionModule = "identifierresolution";
      var func268 = function(argcv) {    // method getScope(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_n = arguments[curarg];
        curarg++;
        setModuleName("identifierresolution");
        var if269 = GraceDone;
        setLineNumber(124);    // compilenode identifier
        // call case 6: other requests
        // call case 4: self request
        onSelf = true;
        var call272 = callmethodChecked(this, "elementScopes", []);
        var call273 = callmethodChecked(call272, "contains(1)", [1], var_n);
        if (Grace_isTrue(call273)) {
          setLineNumber(125);    // compilenode identifier
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call276 = callmethodChecked(this, "elementScopes", []);
          var call277 = callmethodChecked(call276, "get(1)", [1], var_n);
          return call277;
        }
        setLineNumber(133);    // compilenode identifier
        return var_universalScope;
      };
      func268.paramCounts = [1];
      obj18.methods["getScope(1)"] = func268;
      func268.definitionLine = 123;
      func268.definitionModule = "identifierresolution";
      var func278 = function(argcv) {    // method asStringWithParents
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierresolution");
        setLineNumber(136);    // compilenode string
        var string279 = new GraceString("");
        var string282 = new GraceString("\nCurrent: ");
        var opresult284 = callmethodChecked(string282, "++(1)", [1], this);
        var opresult286 = callmethodChecked(opresult284, "++(1)", [1], string279);
        var var_result = opresult286;
        setLineNumber(137);    // compilenode identifier
        var var_s = this;
        setLineNumber(138);    // compilenode block
        var block288 = new GraceBlock(this, 138, 0);
        block288.real = function() {
          // call case 6: other requests
          var call290 = callmethodChecked(var_s, "hasParent", []);
          return call290;
        };
        var block291 = new GraceBlock(this, 138, 0);
        block291.real = function() {
          setLineNumber(139);    // compilenode member
          // call case 6: other requests
          var call293 = callmethodChecked(var_s, "parent", []);
          var_s = call293;
          setLineNumber(140);    // compilenode string
          var string294 = new GraceString("");
          var string297 = new GraceString("\nParent: ");
          var opresult299 = callmethodChecked(string297, "++(1)", [1], var_s);
          var opresult301 = callmethodChecked(opresult299, "++(1)", [1], string294);
          var opresult304 = callmethodChecked(var_result, "++(1)", [1], opresult301);
          var_result = opresult304;
          return GraceDone;
        };
        // call case 5: prelude request
        var call305 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block288, block291);
        setLineNumber(142);    // compilenode string
        var string306 = new GraceString("\n");
        var opresult309 = callmethodChecked(var_result, "++(1)", [1], string306);
        return opresult309;
      };
      func278.paramCounts = [0];
      obj18.methods["asStringWithParents"] = func278;
      func278.definitionLine = 135;
      func278.definitionModule = "identifierresolution";
      var func310 = function(argcv) {    // method asString
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierresolution");
        setLineNumber(145);    // compilenode string
        var string311 = new GraceString(" ST: ");
        // call case 4: self request
        onSelf = true;
        var call314 = callmethodChecked(this, "variety", []);
        var string316 = new GraceString("(");
        var opresult318 = callmethodChecked(string316, "++(1)", [1], call314);
        var opresult320 = callmethodChecked(opresult318, "++(1)", [1], string311);
        var var_result = opresult320;
        setLineNumber(146);    // compilenode block
        var block322 = new GraceBlock(this, 146, 1);
        setLineNumber(1);    // compilenode identifier
        block322.real = function(var_each) {
          setLineNumber(147);    // compilenode member
          // call case 6: other requests
          var call324 = callmethodChecked(var_each, "serialNumber", []);
          var opresult327 = callmethodChecked(var_result, "++(1)", [1], call324);
          var_result = opresult327;
          var if328 = GraceDone;
          setLineNumber(148);    // compilenode member
          // call case 6: other requests
          var call330 = callmethodChecked(var_each, "hasParent", []);
          if (Grace_isTrue(call330)) {
            var string331 = new GraceString("\u279e");
            var opresult334 = callmethodChecked(var_result, "++(1)", [1], string331);
            var_result = opresult334;
            if328 = GraceDone;
          }
          return if328;
        };
        // call case 4: self request
        onSelf = true;
        var call335 = callmethodChecked(this, "withSurroundingScopesDo(1)", [1], block322);
        setLineNumber(150);    // compilenode string
        var string336 = new GraceString("):\n    ");
        var opresult339 = callmethodChecked(var_result, "++(1)", [1], string336);
        var_result = opresult339;
        setLineNumber(151);    // compilenode block
        var block341 = new GraceBlock(this, 151, 1);
        setLineNumber(1);    // compilenode identifier
        block341.real = function(var_each) {
          setLineNumber(152);    // compilenode string
          var string342 = new GraceString(") ");
          // call case 6: other requests
          var call346 = callmethodChecked(var_each, "key", []);
          // call case 4: self request
          onSelf = true;
          var call347 = callmethodChecked(this, "kind(1)", [1], call346);
          var string349 = new GraceString("(");
          // call case 6: other requests
          var call352 = callmethodChecked(var_each, "key", []);
          var string354 = new GraceString(" ");
          var string357 = new GraceString("");
          var opresult359 = callmethodChecked(string357, "++(1)", [1], var_result);
          var opresult361 = callmethodChecked(opresult359, "++(1)", [1], string354);
          var opresult363 = callmethodChecked(opresult361, "++(1)", [1], call352);
          var opresult365 = callmethodChecked(opresult363, "++(1)", [1], string349);
          var opresult367 = callmethodChecked(opresult365, "++(1)", [1], call347);
          var opresult369 = callmethodChecked(opresult367, "++(1)", [1], string342);
          var_result = opresult369;
          return GraceDone;
        };
        // call case 6: other requests
        setLineNumber(151);    // compilenode identifier
        // call case 6: other requests
        // call case 6: other requests
        // call case 4: self request
        onSelf = true;
        var call373 = callmethodChecked(this, "elements", []);
        var call374 = callmethodChecked(call373, "asList", []);
        var call375 = callmethodChecked(call374, "sortBy(1)", [1], var_keyOrdering);
        var call376 = callmethodChecked(call375, "do(1)", [1], block341);
        setLineNumber(154);    // compilenode string
        var string377 = new GraceString("\n");
        var opresult380 = callmethodChecked(var_result, "++(1)", [1], string377);
        return opresult380;
      };
      func310.paramCounts = [0];
      obj18.methods["asString"] = func310;
      func310.definitionLine = 144;
      func310.definitionModule = "identifierresolution";
      var func381 = function(argcv) {    // method asDebugString
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierresolution");
        setLineNumber(157);    // compilenode string
        var string382 = new GraceString(")");
        // call case 4: self request
        onSelf = true;
        var call385 = callmethodChecked(this, "serialNumber", []);
        var string387 = new GraceString("(ST ");
        var opresult389 = callmethodChecked(string387, "++(1)", [1], call385);
        var opresult391 = callmethodChecked(opresult389, "++(1)", [1], string382);
        return opresult391;
      };
      func381.paramCounts = [0];
      obj18.methods["asDebugString"] = func381;
      func381.definitionLine = 157;
      func381.definitionModule = "identifierresolution";
      var func392 = function(argcv) {    // method elementScopesAsString
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierresolution");
        setLineNumber(160);    // compilenode member
        // call case 5: prelude request
        var call394 = callmethodChecked(var_prelude, "emptySet", []);
        var var_referencedScopes = call394;
        setLineNumber(161);    // compilenode string
        var string395 = new GraceString("\n    [elementScopes:");
        var var_result = string395;
        setLineNumber(162);    // compilenode block
        var block397 = new GraceBlock(this, 162, 1);
        setLineNumber(1);    // compilenode identifier
        block397.real = function(var_each) {
          setLineNumber(163);    // compilenode string
          var string398 = new GraceString("");
          // call case 6: other requests
          // call case 6: other requests
          var call402 = callmethodChecked(var_each, "value", []);
          var call403 = callmethodChecked(call402, "asDebugString", []);
          var string405 = new GraceString("\u279e");
          // call case 6: other requests
          var call408 = callmethodChecked(var_each, "key", []);
          var string410 = new GraceString(" ");
          var string413 = new GraceString("");
          var opresult415 = callmethodChecked(string413, "++(1)", [1], var_result);
          var opresult417 = callmethodChecked(opresult415, "++(1)", [1], string410);
          var opresult419 = callmethodChecked(opresult417, "++(1)", [1], call408);
          var opresult421 = callmethodChecked(opresult419, "++(1)", [1], string405);
          var opresult423 = callmethodChecked(opresult421, "++(1)", [1], call403);
          var opresult425 = callmethodChecked(opresult423, "++(1)", [1], string398);
          var_result = opresult425;
          setLineNumber(164);    // compilenode member
          // call case 6: other requests
          var call428 = callmethodChecked(var_each, "value", []);
          // call case 6: other requests
          var call429 = callmethodChecked(var_referencedScopes, "add(1)", [1], call428);
          return call429;
        };
        // call case 6: other requests
        setLineNumber(162);    // compilenode identifier
        // call case 6: other requests
        // call case 6: other requests
        // call case 4: self request
        onSelf = true;
        var call433 = callmethodChecked(this, "elementScopes", []);
        var call434 = callmethodChecked(call433, "asList", []);
        var call435 = callmethodChecked(call434, "sortBy(1)", [1], var_keyOrdering);
        var call436 = callmethodChecked(call435, "do(1)", [1], block397);
        setLineNumber(166);    // compilenode string
        var string437 = new GraceString("]\n____________\n");
        var opresult440 = callmethodChecked(var_result, "++(1)", [1], string437);
        var_result = opresult440;
        setLineNumber(169);    // compilenode block
        var block442 = new GraceBlock(this, 169, 1);
        setLineNumber(1);    // compilenode identifier
        block442.real = function(var_each) {
          setLineNumber(169);    // compilenode member
          // call case 6: other requests
          var call444 = callmethodChecked(var_each, "asString", []);
          var opresult447 = callmethodChecked(var_result, "++(1)", [1], call444);
          var_result = opresult447;
          return GraceDone;
        };
        // call case 6: other requests
        setLineNumber(168);    // compilenode block
        var block449 = new GraceBlock(this, 168, 2);
        setLineNumber(1);    // compilenode identifier
        block449.real = function(var_a, var_b) {
          setLineNumber(168);    // compilenode member
          // call case 6: other requests
          var call452 = callmethodChecked(var_b, "serialNumber", []);
          // call case 6: other requests
          // call case 6: other requests
          var call454 = callmethodChecked(var_a, "serialNumber", []);
          var call455 = callmethodChecked(call454, "compare(1)", [1], call452);
          return call455;
        };
        // call case 6: other requests
        setLineNumber(167);    // compilenode member
        // call case 6: other requests
        var call457 = callmethodChecked(var_referencedScopes, "asList", []);
        var call458 = callmethodChecked(call457, "sortBy(1)", [1], block449);
        var call459 = callmethodChecked(call458, "do(1)", [1], block442);
        setLineNumber(170);    // compilenode string
        var string460 = new GraceString("____________\n");
        var opresult463 = callmethodChecked(var_result, "++(1)", [1], string460);
        return opresult463;
      };
      func392.paramCounts = [0];
      obj18.methods["elementScopesAsString"] = func392;
      func392.definitionLine = 159;
      func392.definitionModule = "identifierresolution";
      var func464 = function(argcv) {    // method hasDefinitionInNest(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_nm = arguments[curarg];
        curarg++;
        setModuleName("identifierresolution");
        setLineNumber(173);    // compilenode block
        var block466 = new GraceBlock(this, 173, 1);
        setLineNumber(1);    // compilenode identifier
        block466.real = function(var_s) {
          var if467 = GraceDone;
          setLineNumber(174);    // compilenode identifier
          // call case 6: other requests
          var call469 = callmethodChecked(var_s, "contains(1)", [1], var_nm);
          if (Grace_isTrue(call469)) {
            setLineNumber(175);    // compilenode identifier
            throw new ReturnException(GraceTrue, returnTarget);
          }
          return if467;
        };
        // call case 4: self request
        onSelf = true;
        var call470 = callmethodChecked(this, "withSurroundingScopesDo(1)", [1], block466);
        setLineNumber(178);    // compilenode identifier
        return GraceFalse;
      };
      func464.paramCounts = [1];
      obj18.methods["hasDefinitionInNest(1)"] = func464;
      func464.definitionLine = 172;
      func464.definitionModule = "identifierresolution";
      var func471 = function(argcv) {    // method kindInNest(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_nm = arguments[curarg];
        curarg++;
        setModuleName("identifierresolution");
        setLineNumber(182);    // compilenode block
        var block473 = new GraceBlock(this, 182, 1);
        setLineNumber(1);    // compilenode identifier
        block473.real = function(var_s) {
          var if474 = GraceDone;
          setLineNumber(183);    // compilenode identifier
          // call case 6: other requests
          var call476 = callmethodChecked(var_s, "contains(1)", [1], var_nm);
          if (Grace_isTrue(call476)) {
            setLineNumber(184);    // compilenode identifier
            // call case 6: other requests
            var call478 = callmethodChecked(var_s, "kind(1)", [1], var_nm);
            var var_kd = call478;
            var if479 = GraceDone;
            setLineNumber(185);    // compilenode member
            // call case 6: other requests
            var call481 = callmethodChecked(var_kd, "fromParent", []);
            if (Grace_isTrue(call481)) {
              setLineNumber(186);    // compilenode member
              // call case 6: other requests
              var call483 = callmethodChecked(var_k, "methdec", []);
              throw new ReturnException(call483, returnTarget);
            } else {
              setLineNumber(188);    // compilenode identifier
              throw new ReturnException(var_kd, returnTarget);
            }
            if474 = if479;
          }
          return if474;
        };
        // call case 4: self request
        onSelf = true;
        var call484 = callmethodChecked(this, "withSurroundingScopesDo(1)", [1], block473);
        setLineNumber(192);    // compilenode member
        // call case 6: other requests
        var call486 = callmethodChecked(var_k, "undefined", []);
        return call486;
      };
      func471.paramCounts = [1];
      obj18.methods["kindInNest(1)"] = func471;
      func471.definitionLine = 180;
      func471.definitionModule = "identifierresolution";
      var func487 = function(argcv) {    // method thatDefines(_)ifNone(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_name = arguments[curarg];
        curarg++;
        var var_action = arguments[curarg];
        curarg++;
        setModuleName("identifierresolution");
        setLineNumber(195);    // compilenode block
        var block489 = new GraceBlock(this, 195, 1);
        setLineNumber(1);    // compilenode identifier
        block489.real = function(var_s) {
          var if490 = GraceDone;
          setLineNumber(196);    // compilenode identifier
          // call case 6: other requests
          var call492 = callmethodChecked(var_s, "contains(1)", [1], var_name);
          if (Grace_isTrue(call492)) {
            throw new ReturnException(var_s, returnTarget);
          }
          return if490;
        };
        // call case 4: self request
        onSelf = true;
        var call493 = callmethodChecked(this, "withSurroundingScopesDo(1)", [1], block489);
        setLineNumber(198);    // compilenode member
        // call case 6: other requests
        var call495 = callmethodChecked(var_action, "apply", []);
        return call495;
      };
      func487.paramCounts = [1, 1];
      obj18.methods["thatDefines(1)ifNone(1)"] = func487;
      func487.definitionLine = 194;
      func487.definitionModule = "identifierresolution";
      var func496 = function(argcv) {    // method thatDefines(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_name = arguments[curarg];
        curarg++;
        setModuleName("identifierresolution");
        setLineNumber(201);    // compilenode block
        var block498 = new GraceBlock(this, 201, 1);
        setLineNumber(1);    // compilenode identifier
        block498.real = function(var_s) {
          var if499 = GraceDone;
          setLineNumber(202);    // compilenode identifier
          // call case 6: other requests
          var call501 = callmethodChecked(var_s, "contains(1)", [1], var_name);
          if (Grace_isTrue(call501)) {
            throw new ReturnException(var_s, returnTarget);
          }
          return if499;
        };
        // call case 4: self request
        onSelf = true;
        var call502 = callmethodChecked(this, "withSurroundingScopesDo(1)", [1], block498);
        setLineNumber(204);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call504 = callmethodChecked(this, "asStringWithParents", []);
        var call505 = Grace_print(call504);
        setLineNumber(205);    // compilenode string
        var string507 = new GraceString("");
        var string510 = new GraceString("no scope defines ");
        var opresult512 = callmethodChecked(string510, "++(1)", [1], var_name);
        var opresult514 = callmethodChecked(opresult512, "++(1)", [1], string507);
        // call case 6: other requests
        // call case 5: prelude request
        var call516 = callmethodChecked(var_prelude, "ProgrammingError", []);
        var call517 = callmethodChecked(call516, "raise(1)", [1], opresult514);
        return call517;
      };
      func496.paramCounts = [1];
      obj18.methods["thatDefines(1)"] = func496;
      func496.definitionLine = 200;
      func496.definitionModule = "identifierresolution";
      var func518 = function(argcv) {    // method isInSameObjectAs(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_enclosingScope = arguments[curarg];
        curarg++;
        setModuleName("identifierresolution");
        var if519 = GraceDone;
        setLineNumber(208);    // compilenode identifier
        var opresult522 = callmethodChecked(this, "==(1)", [1], var_enclosingScope);
        if (Grace_isTrue(opresult522)) {
          return GraceTrue;
        }
        var if523 = GraceDone;
        setLineNumber(209);    // compilenode member
        // call case 6: other requests
        // call case 4: self request
        onSelf = true;
        var call526 = callmethodChecked(this, "parent", []);
        var call527 = callmethodChecked(call526, "isObjectScope", []);
        if (Grace_isTrue(call527)) {
          return GraceFalse;
        }
        setLineNumber(210);    // compilenode identifier
        // call case 6: other requests
        // call case 4: self request
        onSelf = true;
        var call530 = callmethodChecked(this, "parent", []);
        var call531 = callmethodChecked(call530, "isInSameObjectAs(1)", [1], var_enclosingScope);
        return call531;
      };
      func518.paramCounts = [1];
      obj18.methods["isInSameObjectAs(1)"] = func518;
      func518.definitionLine = 207;
      func518.definitionModule = "identifierresolution";
      var func532 = function(argcv) {    // method isObjectScope
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierresolution");
        var if533 = GraceDone;
        setLineNumber(213);    // compilenode string
        var string534 = new GraceString("object");
        // call case 4: self request
        onSelf = true;
        var call537 = callmethodChecked(this, "variety", []);
        var opresult539 = callmethodChecked(call537, "==(1)", [1], string534);
        if (Grace_isTrue(opresult539)) {
          return GraceTrue;
        }
        var if540 = GraceDone;
        setLineNumber(214);    // compilenode string
        var string541 = new GraceString("module");
        // call case 4: self request
        onSelf = true;
        var call544 = callmethodChecked(this, "variety", []);
        var opresult546 = callmethodChecked(call544, "==(1)", [1], string541);
        if (Grace_isTrue(opresult546)) {
          return GraceTrue;
        }
        var if547 = GraceDone;
        setLineNumber(215);    // compilenode string
        var string548 = new GraceString("dialect");
        // call case 4: self request
        onSelf = true;
        var call551 = callmethodChecked(this, "variety", []);
        var opresult553 = callmethodChecked(call551, "==(1)", [1], string548);
        if (Grace_isTrue(opresult553)) {
          return GraceTrue;
        }
        var if554 = GraceDone;
        setLineNumber(216);    // compilenode string
        var string555 = new GraceString("class");
        // call case 4: self request
        onSelf = true;
        var call558 = callmethodChecked(this, "variety", []);
        var opresult560 = callmethodChecked(call558, "==(1)", [1], string555);
        if (Grace_isTrue(opresult560)) {
          return GraceTrue;
        }
        var if561 = GraceDone;
        setLineNumber(217);    // compilenode string
        var string562 = new GraceString("built-in");
        // call case 4: self request
        onSelf = true;
        var call565 = callmethodChecked(this, "variety", []);
        var opresult567 = callmethodChecked(call565, "==(1)", [1], string562);
        if (Grace_isTrue(opresult567)) {
          return GraceTrue;
        }
        setLineNumber(218);    // compilenode identifier
        return GraceFalse;
      };
      func532.paramCounts = [0];
      obj18.methods["isObjectScope"] = func532;
      func532.definitionLine = 212;
      func532.definitionModule = "identifierresolution";
      var func568 = function(argcv) {    // method isMethodScope
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierresolution");
        setLineNumber(221);    // compilenode string
        var string569 = new GraceString("method");
        // call case 4: self request
        onSelf = true;
        var call572 = callmethodChecked(this, "variety", []);
        var opresult574 = callmethodChecked(call572, "==(1)", [1], string569);
        return opresult574;
      };
      func568.paramCounts = [0];
      obj18.methods["isMethodScope"] = func568;
      func568.definitionLine = 220;
      func568.definitionModule = "identifierresolution";
      var func575 = function(argcv) {    // method resolveOuterMethod(_)fromNode(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_name = arguments[curarg];
        curarg++;
        var var_aNode = arguments[curarg];
        curarg++;
        setModuleName("identifierresolution");
        setLineNumber(226);    // compilenode string
        var string577 = new GraceString("self");
        // call case 6: other requests
        // call case 6: other requests
        var call579 = callmethodChecked(var_ast, "identifierNode", []);
        var call580 = callmethodChecked(call579, "new(2)scope(1)", [2, 1], string577, GraceFalse, this);
        var var_mem = call580;
        setLineNumber(227);    // compilenode block
        var block582 = new GraceBlock(this, 227, 1);
        setLineNumber(1);    // compilenode identifier
        block582.real = function(var_s) {
          var if583 = GraceDone;
          setLineNumber(228);    // compilenode identifier
          // call case 6: other requests
          var call585 = callmethodChecked(var_s, "contains(1)", [1], var_name);
          if (Grace_isTrue(call585)) {
            var if586 = GraceDone;
            setLineNumber(229);    // compilenode string
            var string587 = new GraceString("dialect");
            // call case 6: other requests
            var call590 = callmethodChecked(var_s, "variety", []);
            var opresult592 = callmethodChecked(call590, "==(1)", [1], string587);
            if (Grace_isTrue(opresult592)) {
              setLineNumber(231);    // compilenode member
              // call case 6: other requests
              var string596 = new GraceString("prelude");
              // call case 6: other requests
              // call case 6: other requests
              var call598 = callmethodChecked(var_ast, "identifierNode", []);
              var call599 = callmethodChecked(call598, "new(2)scope(1)", [2, 1], string596, GraceFalse, this);
              // call case 6: other requests
              setLineNumber(230);    // compilenode member
              // call case 6: other requests
              var call601 = callmethodChecked(var_ast, "memberNode", []);
              var call602 = callmethodChecked(call601, "new(2)scope(1)", [2, 1], var_name, call599, this);
              var call603 = callmethodChecked(call602, "onSelf", []);
              throw new ReturnException(call603, returnTarget);
            }
            setLineNumber(233);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            // call case 6: other requests
            var call607 = callmethodChecked(var_ast, "memberNode", []);
            var call608 = callmethodChecked(call607, "new(2)scope(1)", [2, 1], var_name, var_mem, this);
            var call609 = callmethodChecked(call608, "onSelf", []);
            throw new ReturnException(call609, returnTarget);
          }
          var if610 = GraceDone;
          setLineNumber(235);    // compilenode string
          var string611 = new GraceString("object");
          // call case 6: other requests
          var call614 = callmethodChecked(var_s, "variety", []);
          var opresult616 = callmethodChecked(call614, "==(1)", [1], string611);
          if (Grace_isTrue(opresult616)) {
            setLineNumber(236);    // compilenode string
            var string618 = new GraceString("outer");
            // call case 6: other requests
            // call case 6: other requests
            var call620 = callmethodChecked(var_ast, "memberNode", []);
            var call621 = callmethodChecked(call620, "new(2)scope(1)", [2, 1], string618, var_mem, this);
            var_mem = call621;
            if610 = GraceDone;
          } else {
            var if622 = GraceDone;
            setLineNumber(237);    // compilenode string
            var string623 = new GraceString("class");
            // call case 6: other requests
            var call626 = callmethodChecked(var_s, "variety", []);
            var opresult628 = callmethodChecked(call626, "==(1)", [1], string623);
            if (Grace_isTrue(opresult628)) {
              setLineNumber(238);    // compilenode string
              var string630 = new GraceString("outer");
              // call case 6: other requests
              // call case 6: other requests
              var call632 = callmethodChecked(var_ast, "memberNode", []);
              var call633 = callmethodChecked(call632, "new(2)scope(1)", [2, 1], string630, var_mem, this);
              var_mem = call633;
              setLineNumber(239);    // compilenode string
              var string635 = new GraceString("outer");
              // call case 6: other requests
              // call case 6: other requests
              var call637 = callmethodChecked(var_ast, "memberNode", []);
              var call638 = callmethodChecked(call637, "new(2)scope(1)", [2, 1], string635, var_mem, this);
              var_mem = call638;
              if622 = GraceDone;
            }
            if610 = if622;
          }
          return if610;
        };
        // call case 4: self request
        onSelf = true;
        var call639 = callmethodChecked(this, "withSurroundingScopesDo(1)", [1], block582);
        setLineNumber(242);    // compilenode string
        var string641 = new GraceString("");
        var string644 = new GraceString("no method ");
        var opresult646 = callmethodChecked(string644, "++(1)", [1], var_name);
        var opresult648 = callmethodChecked(opresult646, "++(1)", [1], string641);
        setLineNumber(243);    // compilenode member
        // call case 6: other requests
        var call650 = callmethodChecked(var_aNode, "line", []);
        // call case 6: other requests
        var call652 = callmethodChecked(var_aNode, "linePos", []);
        // call case 6: other requests
        var call655 = callmethodChecked(var_name, "size", []);
        // call case 6: other requests
        var call658 = callmethodChecked(var_aNode, "linePos", []);
        var opresult660 = callmethodChecked(call658, "+(1)", [1], call655);
        var diff662 = callmethodChecked(opresult660, "-(1)", [1], new GraceNum(1));
        // call case 6: other requests
        setLineNumber(242);    // compilenode identifier
        var call663 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], opresult648, call650, call652, diff662);
        return call663;
      };
      func575.paramCounts = [1, 1];
      obj18.methods["resolveOuterMethod(1)fromNode(1)"] = func575;
      func575.definitionLine = 223;
      func575.definitionModule = "identifierresolution";
      var func664 = function(argcv) {    // method scopeReferencedBy(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_nd = arguments[curarg];
        curarg++;
        // Start argument checking
        curarg = 1;
        setLineNumber(245);    // compilenode member
        // call case 6: other requests
        var call666 = callmethodChecked(var_ast, "AstNode", []);
        if (!Grace_isTrue(callmethod(call666, "match(1)",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in scopeReferencedBy (arg list 1), which corresponds to parameter nd, does not have " + 
                    callmethod(call666, "asString", [0])._value + "."));
        curarg++;
        // End argument checking
        setModuleName("identifierresolution");
        var if667 = GraceDone;
        setLineNumber(251);    // compilenode member
        // call case 6: other requests
        var call669 = callmethodChecked(var_nd, "isIdentifier", []);
        if (Grace_isTrue(call669)) {
          setLineNumber(252);    // compilenode member
          // call case 6: other requests
          var call671 = callmethodChecked(var_nd, "nameString", []);
          var var_sought = call671;
          var if672 = GraceDone;
          setLineNumber(253);    // compilenode string
          var string673 = new GraceString("outer");
          var opresult676 = callmethodChecked(var_sought, "==(1)", [1], string673);
          if (Grace_isTrue(opresult676)) {
            setLineNumber(254);    // compilenode member
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call679 = callmethodChecked(this, "parent", []);
            var call680 = callmethodChecked(call679, "enclosingObjectScope", []);
            return call680;
          }
          setLineNumber(256);    // compilenode block
          var block682 = new GraceBlock(this, 256, 1);
          setLineNumber(1);    // compilenode identifier
          block682.real = function(var_s) {
            var if683 = GraceDone;
            setLineNumber(257);    // compilenode identifier
            // call case 6: other requests
            var call685 = callmethodChecked(var_s, "contains(1)", [1], var_sought);
            if (Grace_isTrue(call685)) {
              setLineNumber(258);    // compilenode identifier
              // call case 6: other requests
              var call687 = callmethodChecked(var_s, "getScope(1)", [1], var_sought);
              throw new ReturnException(call687, returnTarget);
            }
            return if683;
          };
          // call case 4: self request
          onSelf = true;
          var call688 = callmethodChecked(this, "withSurroundingScopesDo(1)", [1], block682);
          setLineNumber(261);    // compilenode string
          var string690 = new GraceString("");
          var string693 = new GraceString("no method ");
          var opresult695 = callmethodChecked(string693, "++(1)", [1], var_sought);
          var opresult697 = callmethodChecked(opresult695, "++(1)", [1], string690);
          setLineNumber(262);    // compilenode member
          // call case 6: other requests
          var call699 = callmethodChecked(var_nd, "line", []);
          // call case 6: other requests
          var call701 = callmethodChecked(var_nd, "linePos", []);
          // call case 6: other requests
          var call704 = callmethodChecked(var_sought, "size", []);
          // call case 6: other requests
          var call707 = callmethodChecked(var_nd, "linePos", []);
          var opresult709 = callmethodChecked(call707, "+(1)", [1], call704);
          var diff711 = callmethodChecked(opresult709, "-(1)", [1], new GraceNum(1));
          // call case 6: other requests
          setLineNumber(261);    // compilenode identifier
          var call712 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], opresult697, call699, call701, diff711);
          if667 = call712;
        } else {
          var if713 = GraceDone;
          setLineNumber(263);    // compilenode string
          var string714 = new GraceString("op");
          // call case 6: other requests
          var call717 = callmethodChecked(var_nd, "kind", []);
          var opresult719 = callmethodChecked(call717, "==(1)", [1], string714);
          if (Grace_isTrue(opresult719)) {
            setLineNumber(264);    // compilenode member
            // call case 6: other requests
            var call722 = callmethodChecked(var_nd, "left", []);
            // call case 4: self request
            onSelf = true;
            var call723 = callmethodChecked(this, "scopeReferencedBy(1)", [1], call722);
            var var_receiverScope = call723;
            setLineNumber(265);    // compilenode member
            // call case 6: other requests
            var call726 = callmethodChecked(var_nd, "asIdentifier", []);
            // call case 6: other requests
            var call727 = callmethodChecked(var_receiverScope, "scopeReferencedBy(1)", [1], call726);
            return call727;
          } else {
            var if728 = GraceDone;
            setLineNumber(266);    // compilenode member
            // call case 6: other requests
            var call730 = callmethodChecked(var_nd, "isCall", []);
            if (Grace_isTrue(call730)) {
              setLineNumber(267);    // compilenode member
              // call case 6: other requests
              var call732 = callmethodChecked(var_nd, "receiver", []);
              var var_receiver = call732;
              var if733 = GraceDone;
              setLineNumber(268);    // compilenode member
              // call case 6: other requests
              var call735 = callmethodChecked(var_receiver, "isImplicit", []);
              if (Grace_isTrue(call735)) {
                setLineNumber(269);    // compilenode string
                var string737 = new GraceString("");
                // call case 6: other requests
                var call740 = callmethodChecked(var_nd, "line", []);
                var string742 = new GraceString(" on line ");
                // call case 6: other requests
                var call745 = callmethodChecked(var_nd, "nameString", []);
                var string747 = new GraceString("inherits from implicit.");
                var opresult749 = callmethodChecked(string747, "++(1)", [1], call745);
                var opresult751 = callmethodChecked(opresult749, "++(1)", [1], string742);
                var opresult753 = callmethodChecked(opresult751, "++(1)", [1], call740);
                var opresult755 = callmethodChecked(opresult753, "++(1)", [1], string737);
                // call case 6: other requests
                var call756 = callmethodChecked(var_util, "log(1)verbose(1)", [1, 1], new GraceNum(60), opresult755);
                if733 = call756;
              }
              setLineNumber(271);    // compilenode identifier
              // call case 6: other requests
              // call case 3: self.outer request
              var call759 = callmethodChecked(superDepth, "outer", [0]);
              onSelf = true;
              var call760 = callmethodChecked(call759, "transformCall(1)", [1], var_nd);
              var var_newNd = call760;
              setLineNumber(272);    // compilenode member
              // call case 6: other requests
              var call763 = callmethodChecked(var_newNd, "receiver", []);
              // call case 4: self request
              onSelf = true;
              var call764 = callmethodChecked(this, "scopeReferencedBy(1)", [1], call763);
              var var_receiverScope = call764;
              setLineNumber(273);    // compilenode member
              // call case 6: other requests
              var call767 = callmethodChecked(var_newNd, "asIdentifier", []);
              // call case 6: other requests
              var call768 = callmethodChecked(var_receiverScope, "scopeReferencedBy(1)", [1], call767);
              return call768;
            }
            if713 = if728;
          }
          if667 = if713;
        }
        setLineNumber(276);    // compilenode num
        // call case 6: other requests
        var call771 = callmethodChecked(var_nd, "pretty(1)", [1], new GraceNum(0));
        setLineNumber(275);    // compilenode string
        var string773 = new GraceString(" is not a Call, Member, Identifier or op.\n");
        // call case 6: other requests
        var call776 = callmethodChecked(var_nd, "nameString", []);
        var string778 = new GraceString("");
        var opresult780 = callmethodChecked(string778, "++(1)", [1], call776);
        var opresult782 = callmethodChecked(opresult780, "++(1)", [1], string773);
        var opresult784 = callmethodChecked(opresult782, "++(1)", [1], call771);
        // call case 6: other requests
        // call case 5: prelude request
        var call786 = callmethodChecked(var_prelude, "ProgrammingError", []);
        var call787 = callmethodChecked(call786, "raise(1)", [1], opresult784);
        return call787;
      };
      func664.paramCounts = [1];
      obj18.methods["scopeReferencedBy(1)"] = func664;
      func664.definitionLine = 245;
      func664.definitionModule = "identifierresolution";
      var func788 = function(argcv) {    // method enclosingObjectScope
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierresolution");
        setLineNumber(281);    // compilenode block
        var block790 = new GraceBlock(this, 281, 1);
        setLineNumber(1);    // compilenode identifier
        block790.real = function(var_s) {
          var if791 = GraceDone;
          setLineNumber(282);    // compilenode member
          // call case 6: other requests
          var call793 = callmethodChecked(var_s, "isObjectScope", []);
          if (Grace_isTrue(call793)) {
            throw new ReturnException(var_s, returnTarget);
          }
          return if791;
        };
        // call case 4: self request
        onSelf = true;
        var call794 = callmethodChecked(this, "withSurroundingScopesDo(1)", [1], block790);
        setLineNumber(284);    // compilenode string
        var string796 = new GraceString("no object scope found!");
        // call case 6: other requests
        // call case 5: prelude request
        var call798 = callmethodChecked(var_prelude, "ProgrammingError", []);
        var call799 = callmethodChecked(call798, "raise(1)", [1], string796);
        return call799;
      };
      func788.paramCounts = [0];
      obj18.methods["enclosingObjectScope"] = func788;
      func788.definitionLine = 278;
      func788.definitionModule = "identifierresolution";
      var func800 = function(argcv) {    // method inSameContextAs(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_encScope = arguments[curarg];
        curarg++;
        setModuleName("identifierresolution");
        var if801 = GraceDone;
        setLineNumber(291);    // compilenode member
        // call case 6: other requests
        var call803 = callmethodChecked(var_encScope, "isObjectScope", []);
        if (Grace_isTrue(call803)) {
          return GraceFalse;
        }
        setLineNumber(292);    // compilenode block
        var block805 = new GraceBlock(this, 292, 1);
        setLineNumber(1);    // compilenode identifier
        block805.real = function(var_s) {
          var if806 = GraceDone;
          setLineNumber(293);    // compilenode identifier
          var opresult809 = callmethodChecked(var_s, "==(1)", [1], var_encScope);
          if (Grace_isTrue(opresult809)) {
            throw new ReturnException(GraceTrue, returnTarget);
          }
          var if810 = GraceDone;
          setLineNumber(294);    // compilenode member
          // call case 6: other requests
          var call812 = callmethodChecked(var_s, "isObjectScope", []);
          if (Grace_isTrue(call812)) {
            throw new ReturnException(GraceFalse, returnTarget);
          }
          var if813 = GraceDone;
          setLineNumber(295);    // compilenode member
          // call case 6: other requests
          var call815 = callmethodChecked(var_s, "isMethodScope", []);
          if (Grace_isTrue(call815)) {
            throw new ReturnException(GraceFalse, returnTarget);
          }
          return if813;
        };
        // call case 4: self request
        onSelf = true;
        var call816 = callmethodChecked(this, "withSurroundingScopesDo(1)", [1], block805);
        setLineNumber(297);    // compilenode string
        var string818 = new GraceString("");
        var string821 = new GraceString("; encScope = ");
        var string824 = new GraceString("self = ");
        var opresult826 = callmethodChecked(string824, "++(1)", [1], this);
        var opresult828 = callmethodChecked(opresult826, "++(1)", [1], string821);
        var opresult830 = callmethodChecked(opresult828, "++(1)", [1], var_encScope);
        var opresult832 = callmethodChecked(opresult830, "++(1)", [1], string818);
        // call case 6: other requests
        // call case 5: prelude request
        var call834 = callmethodChecked(var_prelude, "ProgrammingError", []);
        var call835 = callmethodChecked(call834, "raise(1)", [1], opresult832);
        return call835;
      };
      func800.paramCounts = [1];
      obj18.methods["inSameContextAs(1)"] = func800;
      func800.definitionLine = 288;
      func800.definitionModule = "identifierresolution";
      var func836 = function(argcv) {    // method isUniversal
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierresolution");
        // isUniversal is a simple accessor - elide try ... catch
        setLineNumber(299);    // compilenode identifier
        return GraceFalse;
      };
      func836.paramCounts = [0];
      obj18.methods["isUniversal"] = func836;
      func836.definitionLine = 299;
      func836.definitionModule = "identifierresolution";
      var func837 = function(argcv) {    // method checkShadowing(_)as(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_ident = arguments[curarg];
        curarg++;
        var var_newKind = arguments[curarg];
        curarg++;
        setModuleName("identifierresolution");
        setLineNumber(301);    // compilenode member
        // call case 6: other requests
        var call839 = callmethodChecked(var_ident, "nameString", []);
        var var_name = call839;
        setLineNumber(302);    // compilenode block
        var block841 = new GraceBlock(this, 302, 0);
        block841.real = function() {
          setLineNumber(304);    // compilenode identifier
          throw new ReturnException(var_done, returnTarget);
          return undefined;
        };
        // call case 4: self request
        onSelf = true;
        var call842 = callmethodChecked(this, "thatDefines(1)ifNone(1)", [1, 1], var_name, block841);
        var var_priorScope = call842;
        var if843 = GraceDone;
        setLineNumber(306);    // compilenode identifier
        var opresult846 = callmethodChecked(var_priorScope, "==(1)", [1], this);
        if (Grace_isTrue(opresult846)) {
          setLineNumber(307);    // compilenode string
          var string847 = new GraceString("this");
          if843 = string847;
        } else {
          setLineNumber(309);    // compilenode string
          var string848 = new GraceString("");
          // call case 6: other requests
          var call851 = callmethodChecked(var_priorScope, "variety", []);
          var string853 = new GraceString("an enclosing ");
          var opresult855 = callmethodChecked(string853, "++(1)", [1], call851);
          var opresult857 = callmethodChecked(opresult855, "++(1)", [1], string848);
          if843 = opresult857;
        }
        var var_description = if843;
        setLineNumber(311);    // compilenode identifier
        // call case 6: other requests
        var call859 = callmethodChecked(var_priorScope, "kind(1)", [1], var_name);
        var var_priorKind = call859;
        var if860 = GraceDone;
        setLineNumber(312);    // compilenode block
        var block861 = new GraceBlock(this, 312, 0);
        block861.real = function() {
          // call case 4: self request
          onSelf = true;
          var call863 = callmethodChecked(this, "isObjectScope", []);
          return call863;
        };
        // call case 6: other requests
        var call866 = callmethodChecked(var_priorScope, "isObjectScope", []);
        var opresult868 = callmethodChecked(call866, "&&(1)", [1], block861);
        if (Grace_isTrue(opresult868)) {
          setLineNumber(314);    // compilenode identifier
          return var_done;
        }
        setLineNumber(316);    // compilenode string
        var string869 = new GraceString("");
        var var_more = string869;
        var if870 = GraceDone;
        setLineNumber(317);    // compilenode identifier
        // call case 6: other requests
        // call case 6: other requests
        var call873 = callmethodChecked(var_priorScope, "elementLines", []);
        var call874 = callmethodChecked(call873, "contains(1)", [1], var_name);
        if (Grace_isTrue(call874)) {
          setLineNumber(318);    // compilenode identifier
          // call case 6: other requests
          // call case 6: other requests
          var call877 = callmethodChecked(var_priorScope, "elementLines", []);
          var call878 = callmethodChecked(call877, "get(1)", [1], var_name);
          var var_ln = call878;
          var if879 = GraceDone;
          setLineNumber(319);    // compilenode identifier
          var opresult882 = callmethodChecked(var_ln, ">(1)", [1], new GraceNum(0));
          if (Grace_isTrue(opresult882)) {
            setLineNumber(320);    // compilenode string
            var string883 = new GraceString("");
            // call case 6: other requests
            // call case 6: other requests
            var call887 = callmethodChecked(var_priorScope, "elementLines", []);
            var call888 = callmethodChecked(call887, "get(1)", [1], var_name);
            var string890 = new GraceString(" on line ");
            var opresult892 = callmethodChecked(string890, "++(1)", [1], call888);
            var opresult894 = callmethodChecked(opresult892, "++(1)", [1], string883);
            var_more = opresult894;
            if879 = GraceDone;
          }
          if870 = if879;
        }
        var if895 = GraceDone;
        setLineNumber(323);    // compilenode member
        // call case 6: other requests
        var call897 = callmethodChecked(var_k, "vardec", []);
        var opresult900 = callmethodChecked(var_newKind, "==(1)", [1], call897);
        if (Grace_isTrue(opresult900)) {
          setLineNumber(324);    // compilenode array
          var array901 = new PrimitiveGraceList([]);
          var var_suggs = array901;
          setLineNumber(325);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call904 = callmethodChecked(var_errormessages, "suggestion", []);
          var call905 = callmethodChecked(call904, "new", []);
          var var_sugg = call905;
          var if906 = GraceDone;
          setLineNumber(326);    // compilenode string
          var string908 = new GraceString("=");
          var string909 = new GraceString(" :=");
          var string912 = new GraceString("");
          var opresult914 = callmethodChecked(string912, "++(1)", [1], var_name);
          var opresult916 = callmethodChecked(opresult914, "++(1)", [1], string909);
          setLineNumber(327);    // compilenode member
          // call case 6: other requests
          var call918 = callmethodChecked(var_ident, "line", []);
          // call case 6: other requests
          setLineNumber(326);    // compilenode identifier
          var call919 = callmethodChecked(var_sugg, "replaceUntil(1)with(1)onLine(1)", [1, 1, 1], string908, opresult916, call918);
          if (Grace_isTrue(call919)) {
            setLineNumber(329);    // compilenode identifier
            // call case 6: other requests
            var call921 = callmethodChecked(var_suggs, "push(1)", [1], var_sugg);
            if906 = call921;
          }
          var if922 = GraceDone;
          setLineNumber(331);    // compilenode member
          // call case 6: other requests
          var call924 = callmethodChecked(var_k, "vardec", []);
          var opresult927 = callmethodChecked(var_priorKind, "==(1)", [1], call924);
          if (Grace_isTrue(opresult927)) {
            setLineNumber(332);    // compilenode string
            var string928 = new GraceString(". To assign to the existing variable, remove 'var'");
            var opresult931 = callmethodChecked(var_more, "++(1)", [1], string928);
            var_more = opresult931;
            if922 = GraceDone;
          }
          setLineNumber(336);    // compilenode string
          var string933 = new GraceString(".");
          var string936 = new GraceString(" scope");
          var string939 = new GraceString("");
          var opresult941 = callmethodChecked(string939, "++(1)", [1], var_description);
          var opresult943 = callmethodChecked(opresult941, "++(1)", [1], string936);
          var opresult945 = callmethodChecked(opresult943, "++(1)", [1], var_more);
          var opresult947 = callmethodChecked(opresult945, "++(1)", [1], string933);
          setLineNumber(335);    // compilenode string
          var string949 = new GraceString("redeclared because it is already declared in ");
          setLineNumber(334);    // compilenode string
          var string951 = new GraceString("' cannot be ");
          var string954 = new GraceString("'");
          var opresult956 = callmethodChecked(string954, "++(1)", [1], var_name);
          var opresult958 = callmethodChecked(opresult956, "++(1)", [1], string951);
          var opresult960 = callmethodChecked(opresult958, "++(1)", [1], string949);
          var opresult962 = callmethodChecked(opresult960, "++(1)", [1], opresult947);
          setLineNumber(337);    // compilenode member
          // call case 6: other requests
          var call964 = callmethodChecked(var_ident, "line", []);
          // call case 6: other requests
          var call966 = callmethodChecked(var_ident, "linePos", []);
          // call case 6: other requests
          var call969 = callmethodChecked(var_name, "size", []);
          // call case 6: other requests
          var call972 = callmethodChecked(var_ident, "linePos", []);
          var opresult974 = callmethodChecked(call972, "+(1)", [1], call969);
          var diff976 = callmethodChecked(opresult974, "-(1)", [1], new GraceNum(1));
          setLineNumber(338);    // compilenode identifier
          // call case 6: other requests
          setLineNumber(334);    // compilenode identifier
          var call977 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)withSuggestions(1)", [1, 3, 1], opresult962, call964, call966, diff976, var_suggs);
          if895 = call977;
        } else {
          setLineNumber(342);    // compilenode string
          var string979 = new GraceString(". Use a different name.");
          var string982 = new GraceString(" scope");
          var string985 = new GraceString("");
          var opresult987 = callmethodChecked(string985, "++(1)", [1], var_description);
          var opresult989 = callmethodChecked(opresult987, "++(1)", [1], string982);
          var opresult991 = callmethodChecked(opresult989, "++(1)", [1], var_more);
          var opresult993 = callmethodChecked(opresult991, "++(1)", [1], string979);
          setLineNumber(341);    // compilenode string
          var string995 = new GraceString("redeclared because it is already declared in ");
          setLineNumber(340);    // compilenode string
          var string997 = new GraceString("' cannot be ");
          var string1000 = new GraceString("'");
          var opresult1002 = callmethodChecked(string1000, "++(1)", [1], var_name);
          var opresult1004 = callmethodChecked(opresult1002, "++(1)", [1], string997);
          var opresult1006 = callmethodChecked(opresult1004, "++(1)", [1], string995);
          var opresult1008 = callmethodChecked(opresult1006, "++(1)", [1], opresult993);
          setLineNumber(343);    // compilenode member
          // call case 6: other requests
          var call1010 = callmethodChecked(var_ident, "line", []);
          // call case 6: other requests
          var call1012 = callmethodChecked(var_ident, "linePos", []);
          setLineNumber(344);    // compilenode member
          // call case 6: other requests
          var call1015 = callmethodChecked(var_name, "size", []);
          // call case 6: other requests
          var call1018 = callmethodChecked(var_ident, "linePos", []);
          var opresult1020 = callmethodChecked(call1018, "+(1)", [1], call1015);
          var diff1022 = callmethodChecked(opresult1020, "-(1)", [1], new GraceNum(1));
          // call case 6: other requests
          setLineNumber(340);    // compilenode identifier
          var call1023 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], opresult1008, call1010, call1012, diff1022);
          if895 = call1023;
        }
        return if895;
      };
      func837.paramCounts = [1, 1];
      obj18.methods["checkShadowing(1)as(1)"] = func837;
      func837.definitionLine = 300;
      func837.definitionModule = "identifierresolution";
      setLineNumber(34);    // compilenode member
      // call case 6: other requests
      var call1025 = callmethodChecked(var_map, "new", []);
      obj18.data["elements"] = call1025;
      var reader_identifierresolution_elements1026 = function() {
        return this.data["elements"];
      };
      reader_identifierresolution_elements1026.def = true;
      obj18.methods["elements"] = reader_identifierresolution_elements1026;
      setLineNumber(35);    // compilenode member
      // call case 6: other requests
      var call1028 = callmethodChecked(var_map, "new", []);
      obj18.data["elementScopes"] = call1028;
      var reader_identifierresolution_elementScopes1029 = function() {
        return this.data["elementScopes"];
      };
      reader_identifierresolution_elementScopes1029.def = true;
      obj18.methods["elementScopes"] = reader_identifierresolution_elementScopes1029;
      setLineNumber(36);    // compilenode member
      // call case 6: other requests
      var call1031 = callmethodChecked(var_map, "new", []);
      obj18.data["elementLines"] = call1031;
      var reader_identifierresolution_elementLines1032 = function() {
        return this.data["elementLines"];
      };
      reader_identifierresolution_elementLines1032.def = true;
      obj18.methods["elementLines"] = reader_identifierresolution_elementLines1032;
      setLineNumber(37);    // compilenode member
      // call case 6: other requests
      var call1034 = callmethodChecked(var_map, "new", []);
      obj18.data["elementTokens"] = call1034;
      var reader_identifierresolution_elementTokens1035 = function() {
        return this.data["elementTokens"];
      };
      reader_identifierresolution_elementTokens1035.def = true;
      obj18.methods["elementTokens"] = reader_identifierresolution_elementTokens1035;
      setLineNumber(38);    // compilenode identifier
      obj18.data["parent"] = var_parent__39__;
      var reader_identifierresolution_parent1036 = function() {
        return this.data["parent"];
      };
      reader_identifierresolution_parent1036.def = true;
      obj18.methods["parent"] = reader_identifierresolution_parent1036;
      setLineNumber(39);    // compilenode identifier
      obj18.data["hasParent"] = GraceTrue;
      var reader_identifierresolution_hasParent1037 = function() {
        return this.data["hasParent"];
      };
      obj18.methods["hasParent"] = reader_identifierresolution_hasParent1037;
      obj18.data["hasParent"] = GraceTrue;
      var writer_identifierresolution_hasParent1037 = function(argcv, o) {
        this.data["hasParent"] = o;
        return GraceDone;
      };
      obj18.methods["hasParent:=(1)"] = writer_identifierresolution_hasParent1037;
      obj18.mutable = true;
      setLineNumber(40);    // compilenode identifier
      obj18.data["variety"] = var_variety__39__;
      var reader_identifierresolution_variety1038 = function() {
        return this.data["variety"];
      };
      reader_identifierresolution_variety1038.def = true;
      obj18.methods["variety"] = reader_identifierresolution_variety1038;
      setLineNumber(41);    // compilenode member
      // call case 6: other requests
      var call1040 = callmethodChecked(var_ast, "nullNode", []);
      obj18.data["node"] = call1040;
      var reader_identifierresolution_node1041 = function() {
        return this.data["node"];
      };
      obj18.methods["node"] = reader_identifierresolution_node1041;
      obj18.data["node"] = call1040;
      var writer_identifierresolution_node1041 = function(argcv, o) {
        this.data["node"] = o;
        return GraceDone;
      };
      obj18.methods["node:=(1)"] = writer_identifierresolution_node1041;
      obj18.mutable = true;
      setLineNumber(42);    // compilenode identifier
      obj18.data["inheritedNames"] = var_undiscovered;
      var reader_identifierresolution_inheritedNames1042 = function() {
        return this.data["inheritedNames"];
      };
      obj18.methods["inheritedNames"] = reader_identifierresolution_inheritedNames1042;
      obj18.data["inheritedNames"] = var_undiscovered;
      var writer_identifierresolution_inheritedNames1042 = function(argcv, o) {
        this.data["inheritedNames"] = o;
        return GraceDone;
      };
      obj18.methods["inheritedNames:=(1)"] = writer_identifierresolution_inheritedNames1042;
      obj18.mutable = true;
      setLineNumber(43);    // compilenode identifier
      var opresult1045 = callmethodChecked(var_stSerial, "+(1)", [1], new GraceNum(1));
      var_stSerial = opresult1045;
      setLineNumber(44);    // compilenode identifier
      obj18.data["serialNumber"] = var_stSerial;
      var reader_identifierresolution_serialNumber1046 = function() {
        return this.data["serialNumber"];
      };
      reader_identifierresolution_serialNumber1046.def = true;
      obj18.methods["serialNumber"] = reader_identifierresolution_serialNumber1046;
      setLineNumber(45);    // compilenode member
      // call case 6: other requests
      // call case 4: self request
      onSelf = true;
      var call1049 = callmethodChecked(this, "serialNumber", []);
      var call1050 = callmethodChecked(call1049, "hash", []);
      obj18.data["hash"] = call1050;
      var reader_identifierresolution_hash1051 = function() {
        return this.data["hash"];
      };
      reader_identifierresolution_hash1051.def = true;
      obj18.methods["hash"] = reader_identifierresolution_hash1051;
      var if1052 = GraceDone;
      setLineNumber(47);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call1054 = callmethodChecked(this, "isObjectScope", []);
      if (Grace_isTrue(call1054)) {
        setLineNumber(48);    // compilenode string
        var string1056 = new GraceString("self");
        // call case 6: other requests
        var call1058 = callmethodChecked(var_k, "selfDef", []);
        // call case 4: self request
        onSelf = true;
        var call1059 = callmethodChecked(this, "addName(1)as(1)", [1, 1], string1056, call1058);
        setLineNumber(49);    // compilenode string
        var string1061 = new GraceString("self");
        // call case 4: self request
        onSelf = true;
        var call1062 = callmethodChecked(this, "at(1)putScope(1)", [1, 1], string1061, this);
        if1052 = call1062;
      }
      superDepth = origSuperDepth;
    };
    obj_init_18.apply(obj18, []);
    return obj18;
  };
  func17.paramCounts = [1, 1];
  this.methods["newScopeIn(1)kind(1)"] = func17;
  func17.definitionLine = 33;
  func17.definitionModule = "identifierresolution";
    var func1063 = function(argcv) {    // method newScopeIn(_)kind(_)$object(_)
      var curarg = 1;
      var var_parent__39__ = arguments[curarg];
      curarg++;
      var var_variety__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      // Start argument processing
      curarg = 1;
      curarg++;
      curarg++;
      // End argument processing
      setModuleName("identifierresolution");
      var returnTarget = invocationCount;
      invocationCount++;
      var obj1064 = Grace_allocObject(GraceObject, "newScopeIn(1)kind(1)");
      obj1064.definitionModule = "identifierresolution";
      obj1064.definitionLine = 33;
      var inho1064 = inheritingObject;
      while (inho1064.superobj) inho1064 = inho1064.superobj;
      inho1064.superobj = obj1064;
      obj1064.data = inheritingObject.data;
      if (inheritingObject.hasOwnProperty('_value'))
        obj1064._value = inheritingObject._value;
      obj1064.outer = this;
      var reader_identifierresolution_outer1065 = function() {
        return this.outer;
      };
      obj1064.methods["outer"] = reader_identifierresolution_outer1065;
      var obj_init_1064 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj1064;
        var func1066 = function(argcv) {    // method ==(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_other = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(51);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call1068 = callmethodChecked(this, "isMe(1)", [1], var_other);
          return call1068;
        };
        func1066.paramCounts = [1];
        obj1064.methods["==(1)"] = func1066;
        func1066.definitionLine = 51;
        func1066.definitionModule = "identifierresolution";
        var func1069 = function(argcv) {    // method isEmpty
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("identifierresolution");
          setLineNumber(52);    // compilenode member
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call1073 = callmethodChecked(this, "elements", []);
          var call1074 = callmethodChecked(call1073, "size", []);
          var opresult1076 = callmethodChecked(call1074, "==(1)", [1], new GraceNum(0));
          return opresult1076;
        };
        func1069.paramCounts = [0];
        obj1064.methods["isEmpty"] = func1069;
        func1069.definitionLine = 52;
        func1069.definitionModule = "identifierresolution";
        var func1077 = function(argcv) {    // method addName(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_n = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(54);    // compilenode member
          // call case 6: other requests
          var call1080 = callmethodChecked(var_k, "methdec", []);
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call1082 = callmethodChecked(this, "elements", []);
          var call1083 = callmethodChecked(call1082, "put(2)", [2], var_n, call1080);
          setLineNumber(55);    // compilenode member
          // call case 6: other requests
          var call1086 = callmethodChecked(var_util, "linenum", []);
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call1088 = callmethodChecked(this, "elementLines", []);
          var call1089 = callmethodChecked(call1088, "put(2)", [2], var_n, call1086);
          return call1089;
        };
        func1077.paramCounts = [1];
        obj1064.methods["addName(1)"] = func1077;
        func1077.definitionLine = 53;
        func1077.definitionModule = "identifierresolution";
        var func1090 = function(argcv) {    // method addName(_)as(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_n = arguments[curarg];
          curarg++;
          var var_kind = arguments[curarg];
          curarg++;
          // Start argument checking
          curarg = 1;
          curarg++;
          setLineNumber(57);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_DeclKind, "match(1)",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in as (arg list 2), which corresponds to parameter kind, does not have " + 
                      callmethod(var_DeclKind, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("identifierresolution");
          setLineNumber(58);    // compilenode block
          var block1092 = new GraceBlock(this, 58, 0);
          block1092.real = function() {
            setLineNumber(59);    // compilenode identifier
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call1095 = callmethodChecked(this, "elements", []);
            var call1096 = callmethodChecked(call1095, "put(2)", [2], var_n, var_kind);
            setLineNumber(60);    // compilenode member
            // call case 6: other requests
            var call1099 = callmethodChecked(var_util, "linenum", []);
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call1101 = callmethodChecked(this, "elementLines", []);
            var call1102 = callmethodChecked(call1101, "put(2)", [2], var_n, call1099);
            setLineNumber(62);    // compilenode identifier
            throw new ReturnException(var_done, returnTarget);
            return undefined;
          };
          // call case 6: other requests
          setLineNumber(58);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call1104 = callmethodChecked(this, "elements", []);
          var call1105 = callmethodChecked(call1104, "get(1)ifAbsent(1)", [1, 1], var_n, block1092);
          var var_oldKind = call1105;
          var if1106 = GraceDone;
          setLineNumber(63);    // compilenode member
          // call case 6: other requests
          var call1108 = callmethodChecked(var_kind, "isImplicit", []);
          if (Grace_isTrue(call1108)) {
            setLineNumber(65);    // compilenode identifier
            return var_done;
          }
          var if1109 = GraceDone;
          setLineNumber(66);    // compilenode member
          // call case 6: other requests
          var call1111 = callmethodChecked(var_oldKind, "isImplicit", []);
          if (Grace_isTrue(call1111)) {
            setLineNumber(67);    // compilenode identifier
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call1114 = callmethodChecked(this, "elements", []);
            var call1115 = callmethodChecked(call1114, "put(2)", [2], var_n, var_kind);
            setLineNumber(68);    // compilenode member
            // call case 6: other requests
            var call1118 = callmethodChecked(var_util, "linenum", []);
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call1120 = callmethodChecked(this, "elementLines", []);
            var call1121 = callmethodChecked(call1120, "put(2)", [2], var_n, call1118);
            setLineNumber(70);    // compilenode identifier
            return var_done;
          }
          setLineNumber(72);    // compilenode string
          var string1123 = new GraceString("");
          var string1126 = new GraceString(" because it is already declared as ");
          var string1129 = new GraceString(" redefined as ");
          var opresult1131 = callmethodChecked(string1129, "++(1)", [1], var_kind);
          var opresult1133 = callmethodChecked(opresult1131, "++(1)", [1], string1126);
          var opresult1135 = callmethodChecked(opresult1133, "++(1)", [1], var_oldKind);
          var opresult1137 = callmethodChecked(opresult1135, "++(1)", [1], string1123);
          setLineNumber(71);    // compilenode string
          var string1139 = new GraceString("' cannot be");
          var string1142 = new GraceString("'");
          var opresult1144 = callmethodChecked(string1142, "++(1)", [1], var_n);
          var opresult1146 = callmethodChecked(opresult1144, "++(1)", [1], string1139);
          var opresult1148 = callmethodChecked(opresult1146, "++(1)", [1], opresult1137);
          setLineNumber(73);    // compilenode member
          // call case 6: other requests
          var call1150 = callmethodChecked(var_util, "line", []);
          // call case 6: other requests
          var call1152 = callmethodChecked(var_util, "linePos", []);
          // call case 6: other requests
          var call1155 = callmethodChecked(var_n, "size", []);
          // call case 6: other requests
          var call1158 = callmethodChecked(var_util, "linePos", []);
          var opresult1160 = callmethodChecked(call1158, "+(1)", [1], call1155);
          var diff1162 = callmethodChecked(opresult1160, "-(1)", [1], new GraceNum(1));
          // call case 6: other requests
          setLineNumber(71);    // compilenode identifier
          var call1163 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], opresult1148, call1150, call1152, diff1162);
          return call1163;
        };
        func1090.paramTypes = [];
        func1090.paramTypes.push([]);
        func1090.paramTypes.push([]);
        func1090.paramCounts = [1, 1];
        obj1064.methods["addName(1)as(1)"] = func1090;
        func1090.definitionLine = 57;
        func1090.definitionModule = "identifierresolution";
        var func1164 = function(argcv) {    // method addNode(_)as(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_nd = arguments[curarg];
          curarg++;
          var var_kind = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(76);    // compilenode member
          // call case 6: other requests
          var call1166 = callmethodChecked(var_nd, "value", []);
          var var_ndName = call1166;
          setLineNumber(77);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call1168 = callmethodChecked(this, "checkShadowing(1)as(1)", [1, 1], var_nd, var_kind);
          setLineNumber(78);    // compilenode block
          var block1170 = new GraceBlock(this, 78, 0);
          block1170.real = function() {
            setLineNumber(79);    // compilenode identifier
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call1173 = callmethodChecked(this, "elements", []);
            var call1174 = callmethodChecked(call1173, "put(2)", [2], var_ndName, var_kind);
            setLineNumber(80);    // compilenode member
            // call case 6: other requests
            var call1177 = callmethodChecked(var_nd, "line", []);
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call1179 = callmethodChecked(this, "elementLines", []);
            var call1180 = callmethodChecked(call1179, "put(2)", [2], var_ndName, call1177);
            setLineNumber(82);    // compilenode identifier
            throw new ReturnException(var_done, returnTarget);
            return undefined;
          };
          // call case 6: other requests
          setLineNumber(78);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call1182 = callmethodChecked(this, "elements", []);
          var call1183 = callmethodChecked(call1182, "get(1)ifAbsent(1)", [1, 1], var_ndName, block1170);
          var var_oldKind = call1183;
          var if1184 = GraceDone;
          setLineNumber(83);    // compilenode member
          // call case 6: other requests
          var call1186 = callmethodChecked(var_kind, "isImplicit", []);
          if (Grace_isTrue(call1186)) {
            setLineNumber(85);    // compilenode identifier
            return var_done;
          }
          var if1187 = GraceDone;
          setLineNumber(86);    // compilenode member
          // call case 6: other requests
          var call1189 = callmethodChecked(var_oldKind, "isImplicit", []);
          if (Grace_isTrue(call1189)) {
            setLineNumber(87);    // compilenode identifier
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call1192 = callmethodChecked(this, "elements", []);
            var call1193 = callmethodChecked(call1192, "put(2)", [2], var_ndName, var_kind);
            setLineNumber(88);    // compilenode member
            // call case 6: other requests
            var call1196 = callmethodChecked(var_nd, "line", []);
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call1198 = callmethodChecked(this, "elementLines", []);
            var call1199 = callmethodChecked(call1198, "put(2)", [2], var_ndName, call1196);
            setLineNumber(90);    // compilenode identifier
            return var_done;
          }
          setLineNumber(91);    // compilenode string
          var string1200 = new GraceString(" in this scope");
          var var_more = string1200;
          var if1201 = GraceDone;
          setLineNumber(92);    // compilenode identifier
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call1204 = callmethodChecked(this, "elementLines", []);
          var call1205 = callmethodChecked(call1204, "contains(1)", [1], var_ndName);
          if (Grace_isTrue(call1205)) {
            setLineNumber(94);    // compilenode string
            var string1206 = new GraceString("");
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call1210 = callmethodChecked(this, "elementLines", []);
            var call1211 = callmethodChecked(call1210, "get(1)", [1], var_ndName);
            var string1213 = new GraceString(" on line ");
            var opresult1215 = callmethodChecked(string1213, "++(1)", [1], call1211);
            var opresult1217 = callmethodChecked(opresult1215, "++(1)", [1], string1206);
            setLineNumber(93);    // compilenode string
            var string1219 = new GraceString("");
            var string1222 = new GraceString(" as a ");
            var opresult1224 = callmethodChecked(string1222, "++(1)", [1], var_oldKind);
            var opresult1226 = callmethodChecked(opresult1224, "++(1)", [1], string1219);
            var opresult1228 = callmethodChecked(opresult1226, "++(1)", [1], opresult1217);
            var_more = opresult1228;
            if1201 = GraceDone;
          }
          setLineNumber(98);    // compilenode string
          var string1230 = new GraceString(".");
          // call case 6: other requests
          var call1233 = callmethodChecked(var_nd, "line", []);
          var string1235 = new GraceString(" as well as here at line ");
          var opresult1237 = callmethodChecked(string1235, "++(1)", [1], call1233);
          var opresult1239 = callmethodChecked(opresult1237, "++(1)", [1], string1230);
          setLineNumber(97);    // compilenode string
          var string1242 = new GraceString(" redeclared because it is already declared");
          setLineNumber(96);    // compilenode string
          var string1244 = new GraceString("' cannot be");
          var string1247 = new GraceString("'");
          var opresult1249 = callmethodChecked(string1247, "++(1)", [1], var_ndName);
          var opresult1251 = callmethodChecked(opresult1249, "++(1)", [1], string1244);
          var opresult1253 = callmethodChecked(opresult1251, "++(1)", [1], string1242);
          var opresult1255 = callmethodChecked(opresult1253, "++(1)", [1], var_more);
          var opresult1257 = callmethodChecked(opresult1255, "++(1)", [1], opresult1239);
          setLineNumber(99);    // compilenode member
          // call case 6: other requests
          var call1259 = callmethodChecked(var_nd, "line", []);
          // call case 6: other requests
          var call1261 = callmethodChecked(var_nd, "linePos", []);
          // call case 6: other requests
          var call1264 = callmethodChecked(var_ndName, "size", []);
          // call case 6: other requests
          var call1267 = callmethodChecked(var_nd, "linePos", []);
          var opresult1269 = callmethodChecked(call1267, "+(1)", [1], call1264);
          var diff1271 = callmethodChecked(opresult1269, "-(1)", [1], new GraceNum(1));
          // call case 6: other requests
          setLineNumber(96);    // compilenode identifier
          var call1272 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], opresult1257, call1259, call1261, diff1271);
          return call1272;
        };
        func1164.paramCounts = [1, 1];
        obj1064.methods["addNode(1)as(1)"] = func1164;
        func1164.definitionLine = 75;
        func1164.definitionModule = "identifierresolution";
        var func1273 = function(argcv) {    // method contains(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_n = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(102);    // compilenode identifier
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call1276 = callmethodChecked(this, "elements", []);
          var call1277 = callmethodChecked(call1276, "contains(1)", [1], var_n);
          return call1277;
        };
        func1273.paramCounts = [1];
        obj1064.methods["contains(1)"] = func1273;
        func1273.definitionLine = 101;
        func1273.definitionModule = "identifierresolution";
        var func1278 = function(argcv) {    // method withSurroundingScopesDo(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_b = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(106);    // compilenode identifier
          var var_cur = this;
          setLineNumber(107);    // compilenode block
          var block1280 = new GraceBlock(this, 107, 0);
          block1280.real = function() {
            // call case 6: other requests
            var call1282 = callmethodChecked(var_b, "apply(1)", [1], var_cur);
            // call case 6: other requests
            var call1284 = callmethodChecked(var_cur, "hasParent", []);
            return call1284;
          };
          var block1285 = new GraceBlock(this, 107, 0);
          block1285.real = function() {
            setLineNumber(108);    // compilenode member
            // call case 6: other requests
            var call1287 = callmethodChecked(var_cur, "parent", []);
            var_cur = call1287;
            return GraceDone;
          };
          // call case 5: prelude request
          var call1288 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block1280, block1285);
          return call1288;
        };
        func1278.paramCounts = [1];
        obj1064.methods["withSurroundingScopesDo(1)"] = func1278;
        func1278.definitionLine = 104;
        func1278.definitionModule = "identifierresolution";
        var func1289 = function(argcv) {    // method keysAsList
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("identifierresolution");
          setLineNumber(112);    // compilenode member
          // call case 5: prelude request
          var call1291 = callmethodChecked(var_prelude, "emptyList", []);
          var var_result = call1291;
          setLineNumber(113);    // compilenode block
          var block1293 = new GraceBlock(this, 113, 1);
          setLineNumber(1);    // compilenode identifier
          block1293.real = function(var_each) {
            setLineNumber(113);    // compilenode identifier
            // call case 6: other requests
            var call1295 = callmethodChecked(var_result, "addLast(1)", [1], var_each);
            return call1295;
          };
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call1297 = callmethodChecked(this, "elements", []);
          var call1298 = callmethodChecked(call1297, "keysDo(1)", [1], block1293);
          setLineNumber(114);    // compilenode identifier
          return var_result;
        };
        func1289.paramCounts = [0];
        obj1064.methods["keysAsList"] = func1289;
        func1289.definitionLine = 111;
        func1289.definitionModule = "identifierresolution";
        var func1299 = function(argcv) {    // method keysAndKindsDo(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_action = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(117);    // compilenode identifier
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call1302 = callmethodChecked(this, "elements", []);
          var call1303 = callmethodChecked(call1302, "keysAndValuesDo(1)", [1], var_action);
          return call1303;
        };
        func1299.paramCounts = [1];
        obj1064.methods["keysAndKindsDo(1)"] = func1299;
        func1299.definitionLine = 116;
        func1299.definitionModule = "identifierresolution";
        var func1304 = function(argcv) {    // method kind(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_n = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(119);    // compilenode identifier
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call1307 = callmethodChecked(this, "elements", []);
          var call1308 = callmethodChecked(call1307, "get(1)", [1], var_n);
          return call1308;
        };
        func1304.paramCounts = [1];
        obj1064.methods["kind(1)"] = func1304;
        func1304.definitionLine = 119;
        func1304.definitionModule = "identifierresolution";
        var func1309 = function(argcv) {    // method at(_)putScope(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_n = arguments[curarg];
          curarg++;
          var var_scp = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(121);    // compilenode identifier
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call1312 = callmethodChecked(this, "elementScopes", []);
          var call1313 = callmethodChecked(call1312, "put(2)", [2], var_n, var_scp);
          return call1313;
        };
        func1309.paramCounts = [1, 1];
        obj1064.methods["at(1)putScope(1)"] = func1309;
        func1309.definitionLine = 120;
        func1309.definitionModule = "identifierresolution";
        var func1314 = function(argcv) {    // method getScope(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_n = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          var if1315 = GraceDone;
          setLineNumber(124);    // compilenode identifier
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call1318 = callmethodChecked(this, "elementScopes", []);
          var call1319 = callmethodChecked(call1318, "contains(1)", [1], var_n);
          if (Grace_isTrue(call1319)) {
            setLineNumber(125);    // compilenode identifier
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call1322 = callmethodChecked(this, "elementScopes", []);
            var call1323 = callmethodChecked(call1322, "get(1)", [1], var_n);
            return call1323;
          }
          setLineNumber(133);    // compilenode identifier
          return var_universalScope;
        };
        func1314.paramCounts = [1];
        obj1064.methods["getScope(1)"] = func1314;
        func1314.definitionLine = 123;
        func1314.definitionModule = "identifierresolution";
        var func1324 = function(argcv) {    // method asStringWithParents
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("identifierresolution");
          setLineNumber(136);    // compilenode string
          var string1325 = new GraceString("");
          var string1328 = new GraceString("\nCurrent: ");
          var opresult1330 = callmethodChecked(string1328, "++(1)", [1], this);
          var opresult1332 = callmethodChecked(opresult1330, "++(1)", [1], string1325);
          var var_result = opresult1332;
          setLineNumber(137);    // compilenode identifier
          var var_s = this;
          setLineNumber(138);    // compilenode block
          var block1334 = new GraceBlock(this, 138, 0);
          block1334.real = function() {
            // call case 6: other requests
            var call1336 = callmethodChecked(var_s, "hasParent", []);
            return call1336;
          };
          var block1337 = new GraceBlock(this, 138, 0);
          block1337.real = function() {
            setLineNumber(139);    // compilenode member
            // call case 6: other requests
            var call1339 = callmethodChecked(var_s, "parent", []);
            var_s = call1339;
            setLineNumber(140);    // compilenode string
            var string1340 = new GraceString("");
            var string1343 = new GraceString("\nParent: ");
            var opresult1345 = callmethodChecked(string1343, "++(1)", [1], var_s);
            var opresult1347 = callmethodChecked(opresult1345, "++(1)", [1], string1340);
            var opresult1350 = callmethodChecked(var_result, "++(1)", [1], opresult1347);
            var_result = opresult1350;
            return GraceDone;
          };
          // call case 5: prelude request
          var call1351 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block1334, block1337);
          setLineNumber(142);    // compilenode string
          var string1352 = new GraceString("\n");
          var opresult1355 = callmethodChecked(var_result, "++(1)", [1], string1352);
          return opresult1355;
        };
        func1324.paramCounts = [0];
        obj1064.methods["asStringWithParents"] = func1324;
        func1324.definitionLine = 135;
        func1324.definitionModule = "identifierresolution";
        var func1356 = function(argcv) {    // method asString
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("identifierresolution");
          setLineNumber(145);    // compilenode string
          var string1357 = new GraceString(" ST: ");
          // call case 4: self request
          onSelf = true;
          var call1360 = callmethodChecked(this, "variety", []);
          var string1362 = new GraceString("(");
          var opresult1364 = callmethodChecked(string1362, "++(1)", [1], call1360);
          var opresult1366 = callmethodChecked(opresult1364, "++(1)", [1], string1357);
          var var_result = opresult1366;
          setLineNumber(146);    // compilenode block
          var block1368 = new GraceBlock(this, 146, 1);
          setLineNumber(1);    // compilenode identifier
          block1368.real = function(var_each) {
            setLineNumber(147);    // compilenode member
            // call case 6: other requests
            var call1370 = callmethodChecked(var_each, "serialNumber", []);
            var opresult1373 = callmethodChecked(var_result, "++(1)", [1], call1370);
            var_result = opresult1373;
            var if1374 = GraceDone;
            setLineNumber(148);    // compilenode member
            // call case 6: other requests
            var call1376 = callmethodChecked(var_each, "hasParent", []);
            if (Grace_isTrue(call1376)) {
              var string1377 = new GraceString("\u279e");
              var opresult1380 = callmethodChecked(var_result, "++(1)", [1], string1377);
              var_result = opresult1380;
              if1374 = GraceDone;
            }
            return if1374;
          };
          // call case 4: self request
          onSelf = true;
          var call1381 = callmethodChecked(this, "withSurroundingScopesDo(1)", [1], block1368);
          setLineNumber(150);    // compilenode string
          var string1382 = new GraceString("):\n    ");
          var opresult1385 = callmethodChecked(var_result, "++(1)", [1], string1382);
          var_result = opresult1385;
          setLineNumber(151);    // compilenode block
          var block1387 = new GraceBlock(this, 151, 1);
          setLineNumber(1);    // compilenode identifier
          block1387.real = function(var_each) {
            setLineNumber(152);    // compilenode string
            var string1388 = new GraceString(") ");
            // call case 6: other requests
            var call1392 = callmethodChecked(var_each, "key", []);
            // call case 4: self request
            onSelf = true;
            var call1393 = callmethodChecked(this, "kind(1)", [1], call1392);
            var string1395 = new GraceString("(");
            // call case 6: other requests
            var call1398 = callmethodChecked(var_each, "key", []);
            var string1400 = new GraceString(" ");
            var string1403 = new GraceString("");
            var opresult1405 = callmethodChecked(string1403, "++(1)", [1], var_result);
            var opresult1407 = callmethodChecked(opresult1405, "++(1)", [1], string1400);
            var opresult1409 = callmethodChecked(opresult1407, "++(1)", [1], call1398);
            var opresult1411 = callmethodChecked(opresult1409, "++(1)", [1], string1395);
            var opresult1413 = callmethodChecked(opresult1411, "++(1)", [1], call1393);
            var opresult1415 = callmethodChecked(opresult1413, "++(1)", [1], string1388);
            var_result = opresult1415;
            return GraceDone;
          };
          // call case 6: other requests
          setLineNumber(151);    // compilenode identifier
          // call case 6: other requests
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call1419 = callmethodChecked(this, "elements", []);
          var call1420 = callmethodChecked(call1419, "asList", []);
          var call1421 = callmethodChecked(call1420, "sortBy(1)", [1], var_keyOrdering);
          var call1422 = callmethodChecked(call1421, "do(1)", [1], block1387);
          setLineNumber(154);    // compilenode string
          var string1423 = new GraceString("\n");
          var opresult1426 = callmethodChecked(var_result, "++(1)", [1], string1423);
          return opresult1426;
        };
        func1356.paramCounts = [0];
        obj1064.methods["asString"] = func1356;
        func1356.definitionLine = 144;
        func1356.definitionModule = "identifierresolution";
        var func1427 = function(argcv) {    // method asDebugString
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("identifierresolution");
          setLineNumber(157);    // compilenode string
          var string1428 = new GraceString(")");
          // call case 4: self request
          onSelf = true;
          var call1431 = callmethodChecked(this, "serialNumber", []);
          var string1433 = new GraceString("(ST ");
          var opresult1435 = callmethodChecked(string1433, "++(1)", [1], call1431);
          var opresult1437 = callmethodChecked(opresult1435, "++(1)", [1], string1428);
          return opresult1437;
        };
        func1427.paramCounts = [0];
        obj1064.methods["asDebugString"] = func1427;
        func1427.definitionLine = 157;
        func1427.definitionModule = "identifierresolution";
        var func1438 = function(argcv) {    // method elementScopesAsString
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("identifierresolution");
          setLineNumber(160);    // compilenode member
          // call case 5: prelude request
          var call1440 = callmethodChecked(var_prelude, "emptySet", []);
          var var_referencedScopes = call1440;
          setLineNumber(161);    // compilenode string
          var string1441 = new GraceString("\n    [elementScopes:");
          var var_result = string1441;
          setLineNumber(162);    // compilenode block
          var block1443 = new GraceBlock(this, 162, 1);
          setLineNumber(1);    // compilenode identifier
          block1443.real = function(var_each) {
            setLineNumber(163);    // compilenode string
            var string1444 = new GraceString("");
            // call case 6: other requests
            // call case 6: other requests
            var call1448 = callmethodChecked(var_each, "value", []);
            var call1449 = callmethodChecked(call1448, "asDebugString", []);
            var string1451 = new GraceString("\u279e");
            // call case 6: other requests
            var call1454 = callmethodChecked(var_each, "key", []);
            var string1456 = new GraceString(" ");
            var string1459 = new GraceString("");
            var opresult1461 = callmethodChecked(string1459, "++(1)", [1], var_result);
            var opresult1463 = callmethodChecked(opresult1461, "++(1)", [1], string1456);
            var opresult1465 = callmethodChecked(opresult1463, "++(1)", [1], call1454);
            var opresult1467 = callmethodChecked(opresult1465, "++(1)", [1], string1451);
            var opresult1469 = callmethodChecked(opresult1467, "++(1)", [1], call1449);
            var opresult1471 = callmethodChecked(opresult1469, "++(1)", [1], string1444);
            var_result = opresult1471;
            setLineNumber(164);    // compilenode member
            // call case 6: other requests
            var call1474 = callmethodChecked(var_each, "value", []);
            // call case 6: other requests
            var call1475 = callmethodChecked(var_referencedScopes, "add(1)", [1], call1474);
            return call1475;
          };
          // call case 6: other requests
          setLineNumber(162);    // compilenode identifier
          // call case 6: other requests
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call1479 = callmethodChecked(this, "elementScopes", []);
          var call1480 = callmethodChecked(call1479, "asList", []);
          var call1481 = callmethodChecked(call1480, "sortBy(1)", [1], var_keyOrdering);
          var call1482 = callmethodChecked(call1481, "do(1)", [1], block1443);
          setLineNumber(166);    // compilenode string
          var string1483 = new GraceString("]\n____________\n");
          var opresult1486 = callmethodChecked(var_result, "++(1)", [1], string1483);
          var_result = opresult1486;
          setLineNumber(169);    // compilenode block
          var block1488 = new GraceBlock(this, 169, 1);
          setLineNumber(1);    // compilenode identifier
          block1488.real = function(var_each) {
            setLineNumber(169);    // compilenode member
            // call case 6: other requests
            var call1490 = callmethodChecked(var_each, "asString", []);
            var opresult1493 = callmethodChecked(var_result, "++(1)", [1], call1490);
            var_result = opresult1493;
            return GraceDone;
          };
          // call case 6: other requests
          setLineNumber(168);    // compilenode block
          var block1495 = new GraceBlock(this, 168, 2);
          setLineNumber(1);    // compilenode identifier
          block1495.real = function(var_a, var_b) {
            setLineNumber(168);    // compilenode member
            // call case 6: other requests
            var call1498 = callmethodChecked(var_b, "serialNumber", []);
            // call case 6: other requests
            // call case 6: other requests
            var call1500 = callmethodChecked(var_a, "serialNumber", []);
            var call1501 = callmethodChecked(call1500, "compare(1)", [1], call1498);
            return call1501;
          };
          // call case 6: other requests
          setLineNumber(167);    // compilenode member
          // call case 6: other requests
          var call1503 = callmethodChecked(var_referencedScopes, "asList", []);
          var call1504 = callmethodChecked(call1503, "sortBy(1)", [1], block1495);
          var call1505 = callmethodChecked(call1504, "do(1)", [1], block1488);
          setLineNumber(170);    // compilenode string
          var string1506 = new GraceString("____________\n");
          var opresult1509 = callmethodChecked(var_result, "++(1)", [1], string1506);
          return opresult1509;
        };
        func1438.paramCounts = [0];
        obj1064.methods["elementScopesAsString"] = func1438;
        func1438.definitionLine = 159;
        func1438.definitionModule = "identifierresolution";
        var func1510 = function(argcv) {    // method hasDefinitionInNest(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_nm = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(173);    // compilenode block
          var block1512 = new GraceBlock(this, 173, 1);
          setLineNumber(1);    // compilenode identifier
          block1512.real = function(var_s) {
            var if1513 = GraceDone;
            setLineNumber(174);    // compilenode identifier
            // call case 6: other requests
            var call1515 = callmethodChecked(var_s, "contains(1)", [1], var_nm);
            if (Grace_isTrue(call1515)) {
              setLineNumber(175);    // compilenode identifier
              throw new ReturnException(GraceTrue, returnTarget);
            }
            return if1513;
          };
          // call case 4: self request
          onSelf = true;
          var call1516 = callmethodChecked(this, "withSurroundingScopesDo(1)", [1], block1512);
          setLineNumber(178);    // compilenode identifier
          return GraceFalse;
        };
        func1510.paramCounts = [1];
        obj1064.methods["hasDefinitionInNest(1)"] = func1510;
        func1510.definitionLine = 172;
        func1510.definitionModule = "identifierresolution";
        var func1517 = function(argcv) {    // method kindInNest(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_nm = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(182);    // compilenode block
          var block1519 = new GraceBlock(this, 182, 1);
          setLineNumber(1);    // compilenode identifier
          block1519.real = function(var_s) {
            var if1520 = GraceDone;
            setLineNumber(183);    // compilenode identifier
            // call case 6: other requests
            var call1522 = callmethodChecked(var_s, "contains(1)", [1], var_nm);
            if (Grace_isTrue(call1522)) {
              setLineNumber(184);    // compilenode identifier
              // call case 6: other requests
              var call1524 = callmethodChecked(var_s, "kind(1)", [1], var_nm);
              var var_kd = call1524;
              var if1525 = GraceDone;
              setLineNumber(185);    // compilenode member
              // call case 6: other requests
              var call1527 = callmethodChecked(var_kd, "fromParent", []);
              if (Grace_isTrue(call1527)) {
                setLineNumber(186);    // compilenode member
                // call case 6: other requests
                var call1529 = callmethodChecked(var_k, "methdec", []);
                throw new ReturnException(call1529, returnTarget);
              } else {
                setLineNumber(188);    // compilenode identifier
                throw new ReturnException(var_kd, returnTarget);
              }
              if1520 = if1525;
            }
            return if1520;
          };
          // call case 4: self request
          onSelf = true;
          var call1530 = callmethodChecked(this, "withSurroundingScopesDo(1)", [1], block1519);
          setLineNumber(192);    // compilenode member
          // call case 6: other requests
          var call1532 = callmethodChecked(var_k, "undefined", []);
          return call1532;
        };
        func1517.paramCounts = [1];
        obj1064.methods["kindInNest(1)"] = func1517;
        func1517.definitionLine = 180;
        func1517.definitionModule = "identifierresolution";
        var func1533 = function(argcv) {    // method thatDefines(_)ifNone(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_name = arguments[curarg];
          curarg++;
          var var_action = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(195);    // compilenode block
          var block1535 = new GraceBlock(this, 195, 1);
          setLineNumber(1);    // compilenode identifier
          block1535.real = function(var_s) {
            var if1536 = GraceDone;
            setLineNumber(196);    // compilenode identifier
            // call case 6: other requests
            var call1538 = callmethodChecked(var_s, "contains(1)", [1], var_name);
            if (Grace_isTrue(call1538)) {
              throw new ReturnException(var_s, returnTarget);
            }
            return if1536;
          };
          // call case 4: self request
          onSelf = true;
          var call1539 = callmethodChecked(this, "withSurroundingScopesDo(1)", [1], block1535);
          setLineNumber(198);    // compilenode member
          // call case 6: other requests
          var call1541 = callmethodChecked(var_action, "apply", []);
          return call1541;
        };
        func1533.paramCounts = [1, 1];
        obj1064.methods["thatDefines(1)ifNone(1)"] = func1533;
        func1533.definitionLine = 194;
        func1533.definitionModule = "identifierresolution";
        var func1542 = function(argcv) {    // method thatDefines(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_name = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(201);    // compilenode block
          var block1544 = new GraceBlock(this, 201, 1);
          setLineNumber(1);    // compilenode identifier
          block1544.real = function(var_s) {
            var if1545 = GraceDone;
            setLineNumber(202);    // compilenode identifier
            // call case 6: other requests
            var call1547 = callmethodChecked(var_s, "contains(1)", [1], var_name);
            if (Grace_isTrue(call1547)) {
              throw new ReturnException(var_s, returnTarget);
            }
            return if1545;
          };
          // call case 4: self request
          onSelf = true;
          var call1548 = callmethodChecked(this, "withSurroundingScopesDo(1)", [1], block1544);
          setLineNumber(204);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call1550 = callmethodChecked(this, "asStringWithParents", []);
          var call1551 = Grace_print(call1550);
          setLineNumber(205);    // compilenode string
          var string1553 = new GraceString("");
          var string1556 = new GraceString("no scope defines ");
          var opresult1558 = callmethodChecked(string1556, "++(1)", [1], var_name);
          var opresult1560 = callmethodChecked(opresult1558, "++(1)", [1], string1553);
          // call case 6: other requests
          // call case 5: prelude request
          var call1562 = callmethodChecked(var_prelude, "ProgrammingError", []);
          var call1563 = callmethodChecked(call1562, "raise(1)", [1], opresult1560);
          return call1563;
        };
        func1542.paramCounts = [1];
        obj1064.methods["thatDefines(1)"] = func1542;
        func1542.definitionLine = 200;
        func1542.definitionModule = "identifierresolution";
        var func1564 = function(argcv) {    // method isInSameObjectAs(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_enclosingScope = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          var if1565 = GraceDone;
          setLineNumber(208);    // compilenode identifier
          var opresult1568 = callmethodChecked(this, "==(1)", [1], var_enclosingScope);
          if (Grace_isTrue(opresult1568)) {
            return GraceTrue;
          }
          var if1569 = GraceDone;
          setLineNumber(209);    // compilenode member
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call1572 = callmethodChecked(this, "parent", []);
          var call1573 = callmethodChecked(call1572, "isObjectScope", []);
          if (Grace_isTrue(call1573)) {
            return GraceFalse;
          }
          setLineNumber(210);    // compilenode identifier
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call1576 = callmethodChecked(this, "parent", []);
          var call1577 = callmethodChecked(call1576, "isInSameObjectAs(1)", [1], var_enclosingScope);
          return call1577;
        };
        func1564.paramCounts = [1];
        obj1064.methods["isInSameObjectAs(1)"] = func1564;
        func1564.definitionLine = 207;
        func1564.definitionModule = "identifierresolution";
        var func1578 = function(argcv) {    // method isObjectScope
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("identifierresolution");
          var if1579 = GraceDone;
          setLineNumber(213);    // compilenode string
          var string1580 = new GraceString("object");
          // call case 4: self request
          onSelf = true;
          var call1583 = callmethodChecked(this, "variety", []);
          var opresult1585 = callmethodChecked(call1583, "==(1)", [1], string1580);
          if (Grace_isTrue(opresult1585)) {
            return GraceTrue;
          }
          var if1586 = GraceDone;
          setLineNumber(214);    // compilenode string
          var string1587 = new GraceString("module");
          // call case 4: self request
          onSelf = true;
          var call1590 = callmethodChecked(this, "variety", []);
          var opresult1592 = callmethodChecked(call1590, "==(1)", [1], string1587);
          if (Grace_isTrue(opresult1592)) {
            return GraceTrue;
          }
          var if1593 = GraceDone;
          setLineNumber(215);    // compilenode string
          var string1594 = new GraceString("dialect");
          // call case 4: self request
          onSelf = true;
          var call1597 = callmethodChecked(this, "variety", []);
          var opresult1599 = callmethodChecked(call1597, "==(1)", [1], string1594);
          if (Grace_isTrue(opresult1599)) {
            return GraceTrue;
          }
          var if1600 = GraceDone;
          setLineNumber(216);    // compilenode string
          var string1601 = new GraceString("class");
          // call case 4: self request
          onSelf = true;
          var call1604 = callmethodChecked(this, "variety", []);
          var opresult1606 = callmethodChecked(call1604, "==(1)", [1], string1601);
          if (Grace_isTrue(opresult1606)) {
            return GraceTrue;
          }
          var if1607 = GraceDone;
          setLineNumber(217);    // compilenode string
          var string1608 = new GraceString("built-in");
          // call case 4: self request
          onSelf = true;
          var call1611 = callmethodChecked(this, "variety", []);
          var opresult1613 = callmethodChecked(call1611, "==(1)", [1], string1608);
          if (Grace_isTrue(opresult1613)) {
            return GraceTrue;
          }
          setLineNumber(218);    // compilenode identifier
          return GraceFalse;
        };
        func1578.paramCounts = [0];
        obj1064.methods["isObjectScope"] = func1578;
        func1578.definitionLine = 212;
        func1578.definitionModule = "identifierresolution";
        var func1614 = function(argcv) {    // method isMethodScope
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("identifierresolution");
          setLineNumber(221);    // compilenode string
          var string1615 = new GraceString("method");
          // call case 4: self request
          onSelf = true;
          var call1618 = callmethodChecked(this, "variety", []);
          var opresult1620 = callmethodChecked(call1618, "==(1)", [1], string1615);
          return opresult1620;
        };
        func1614.paramCounts = [0];
        obj1064.methods["isMethodScope"] = func1614;
        func1614.definitionLine = 220;
        func1614.definitionModule = "identifierresolution";
        var func1621 = function(argcv) {    // method resolveOuterMethod(_)fromNode(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_name = arguments[curarg];
          curarg++;
          var var_aNode = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(226);    // compilenode string
          var string1623 = new GraceString("self");
          // call case 6: other requests
          // call case 6: other requests
          var call1625 = callmethodChecked(var_ast, "identifierNode", []);
          var call1626 = callmethodChecked(call1625, "new(2)scope(1)", [2, 1], string1623, GraceFalse, this);
          var var_mem = call1626;
          setLineNumber(227);    // compilenode block
          var block1628 = new GraceBlock(this, 227, 1);
          setLineNumber(1);    // compilenode identifier
          block1628.real = function(var_s) {
            var if1629 = GraceDone;
            setLineNumber(228);    // compilenode identifier
            // call case 6: other requests
            var call1631 = callmethodChecked(var_s, "contains(1)", [1], var_name);
            if (Grace_isTrue(call1631)) {
              var if1632 = GraceDone;
              setLineNumber(229);    // compilenode string
              var string1633 = new GraceString("dialect");
              // call case 6: other requests
              var call1636 = callmethodChecked(var_s, "variety", []);
              var opresult1638 = callmethodChecked(call1636, "==(1)", [1], string1633);
              if (Grace_isTrue(opresult1638)) {
                setLineNumber(231);    // compilenode member
                // call case 6: other requests
                var string1642 = new GraceString("prelude");
                // call case 6: other requests
                // call case 6: other requests
                var call1644 = callmethodChecked(var_ast, "identifierNode", []);
                var call1645 = callmethodChecked(call1644, "new(2)scope(1)", [2, 1], string1642, GraceFalse, this);
                // call case 6: other requests
                setLineNumber(230);    // compilenode member
                // call case 6: other requests
                var call1647 = callmethodChecked(var_ast, "memberNode", []);
                var call1648 = callmethodChecked(call1647, "new(2)scope(1)", [2, 1], var_name, call1645, this);
                var call1649 = callmethodChecked(call1648, "onSelf", []);
                throw new ReturnException(call1649, returnTarget);
              }
              setLineNumber(233);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              // call case 6: other requests
              var call1653 = callmethodChecked(var_ast, "memberNode", []);
              var call1654 = callmethodChecked(call1653, "new(2)scope(1)", [2, 1], var_name, var_mem, this);
              var call1655 = callmethodChecked(call1654, "onSelf", []);
              throw new ReturnException(call1655, returnTarget);
            }
            var if1656 = GraceDone;
            setLineNumber(235);    // compilenode string
            var string1657 = new GraceString("object");
            // call case 6: other requests
            var call1660 = callmethodChecked(var_s, "variety", []);
            var opresult1662 = callmethodChecked(call1660, "==(1)", [1], string1657);
            if (Grace_isTrue(opresult1662)) {
              setLineNumber(236);    // compilenode string
              var string1664 = new GraceString("outer");
              // call case 6: other requests
              // call case 6: other requests
              var call1666 = callmethodChecked(var_ast, "memberNode", []);
              var call1667 = callmethodChecked(call1666, "new(2)scope(1)", [2, 1], string1664, var_mem, this);
              var_mem = call1667;
              if1656 = GraceDone;
            } else {
              var if1668 = GraceDone;
              setLineNumber(237);    // compilenode string
              var string1669 = new GraceString("class");
              // call case 6: other requests
              var call1672 = callmethodChecked(var_s, "variety", []);
              var opresult1674 = callmethodChecked(call1672, "==(1)", [1], string1669);
              if (Grace_isTrue(opresult1674)) {
                setLineNumber(238);    // compilenode string
                var string1676 = new GraceString("outer");
                // call case 6: other requests
                // call case 6: other requests
                var call1678 = callmethodChecked(var_ast, "memberNode", []);
                var call1679 = callmethodChecked(call1678, "new(2)scope(1)", [2, 1], string1676, var_mem, this);
                var_mem = call1679;
                setLineNumber(239);    // compilenode string
                var string1681 = new GraceString("outer");
                // call case 6: other requests
                // call case 6: other requests
                var call1683 = callmethodChecked(var_ast, "memberNode", []);
                var call1684 = callmethodChecked(call1683, "new(2)scope(1)", [2, 1], string1681, var_mem, this);
                var_mem = call1684;
                if1668 = GraceDone;
              }
              if1656 = if1668;
            }
            return if1656;
          };
          // call case 4: self request
          onSelf = true;
          var call1685 = callmethodChecked(this, "withSurroundingScopesDo(1)", [1], block1628);
          setLineNumber(242);    // compilenode string
          var string1687 = new GraceString("");
          var string1690 = new GraceString("no method ");
          var opresult1692 = callmethodChecked(string1690, "++(1)", [1], var_name);
          var opresult1694 = callmethodChecked(opresult1692, "++(1)", [1], string1687);
          setLineNumber(243);    // compilenode member
          // call case 6: other requests
          var call1696 = callmethodChecked(var_aNode, "line", []);
          // call case 6: other requests
          var call1698 = callmethodChecked(var_aNode, "linePos", []);
          // call case 6: other requests
          var call1701 = callmethodChecked(var_name, "size", []);
          // call case 6: other requests
          var call1704 = callmethodChecked(var_aNode, "linePos", []);
          var opresult1706 = callmethodChecked(call1704, "+(1)", [1], call1701);
          var diff1708 = callmethodChecked(opresult1706, "-(1)", [1], new GraceNum(1));
          // call case 6: other requests
          setLineNumber(242);    // compilenode identifier
          var call1709 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], opresult1694, call1696, call1698, diff1708);
          return call1709;
        };
        func1621.paramCounts = [1, 1];
        obj1064.methods["resolveOuterMethod(1)fromNode(1)"] = func1621;
        func1621.definitionLine = 223;
        func1621.definitionModule = "identifierresolution";
        var func1710 = function(argcv) {    // method scopeReferencedBy(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_nd = arguments[curarg];
          curarg++;
          // Start argument checking
          curarg = 1;
          setLineNumber(245);    // compilenode member
          // call case 6: other requests
          var call1712 = callmethodChecked(var_ast, "AstNode", []);
          if (!Grace_isTrue(callmethod(call1712, "match(1)",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in scopeReferencedBy (arg list 1), which corresponds to parameter nd, does not have " + 
                      callmethod(call1712, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("identifierresolution");
          var if1713 = GraceDone;
          setLineNumber(251);    // compilenode member
          // call case 6: other requests
          var call1715 = callmethodChecked(var_nd, "isIdentifier", []);
          if (Grace_isTrue(call1715)) {
            setLineNumber(252);    // compilenode member
            // call case 6: other requests
            var call1717 = callmethodChecked(var_nd, "nameString", []);
            var var_sought = call1717;
            var if1718 = GraceDone;
            setLineNumber(253);    // compilenode string
            var string1719 = new GraceString("outer");
            var opresult1722 = callmethodChecked(var_sought, "==(1)", [1], string1719);
            if (Grace_isTrue(opresult1722)) {
              setLineNumber(254);    // compilenode member
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call1725 = callmethodChecked(this, "parent", []);
              var call1726 = callmethodChecked(call1725, "enclosingObjectScope", []);
              return call1726;
            }
            setLineNumber(256);    // compilenode block
            var block1728 = new GraceBlock(this, 256, 1);
            setLineNumber(1);    // compilenode identifier
            block1728.real = function(var_s) {
              var if1729 = GraceDone;
              setLineNumber(257);    // compilenode identifier
              // call case 6: other requests
              var call1731 = callmethodChecked(var_s, "contains(1)", [1], var_sought);
              if (Grace_isTrue(call1731)) {
                setLineNumber(258);    // compilenode identifier
                // call case 6: other requests
                var call1733 = callmethodChecked(var_s, "getScope(1)", [1], var_sought);
                throw new ReturnException(call1733, returnTarget);
              }
              return if1729;
            };
            // call case 4: self request
            onSelf = true;
            var call1734 = callmethodChecked(this, "withSurroundingScopesDo(1)", [1], block1728);
            setLineNumber(261);    // compilenode string
            var string1736 = new GraceString("");
            var string1739 = new GraceString("no method ");
            var opresult1741 = callmethodChecked(string1739, "++(1)", [1], var_sought);
            var opresult1743 = callmethodChecked(opresult1741, "++(1)", [1], string1736);
            setLineNumber(262);    // compilenode member
            // call case 6: other requests
            var call1745 = callmethodChecked(var_nd, "line", []);
            // call case 6: other requests
            var call1747 = callmethodChecked(var_nd, "linePos", []);
            // call case 6: other requests
            var call1750 = callmethodChecked(var_sought, "size", []);
            // call case 6: other requests
            var call1753 = callmethodChecked(var_nd, "linePos", []);
            var opresult1755 = callmethodChecked(call1753, "+(1)", [1], call1750);
            var diff1757 = callmethodChecked(opresult1755, "-(1)", [1], new GraceNum(1));
            // call case 6: other requests
            setLineNumber(261);    // compilenode identifier
            var call1758 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], opresult1743, call1745, call1747, diff1757);
            if1713 = call1758;
          } else {
            var if1759 = GraceDone;
            setLineNumber(263);    // compilenode string
            var string1760 = new GraceString("op");
            // call case 6: other requests
            var call1763 = callmethodChecked(var_nd, "kind", []);
            var opresult1765 = callmethodChecked(call1763, "==(1)", [1], string1760);
            if (Grace_isTrue(opresult1765)) {
              setLineNumber(264);    // compilenode member
              // call case 6: other requests
              var call1768 = callmethodChecked(var_nd, "left", []);
              // call case 4: self request
              onSelf = true;
              var call1769 = callmethodChecked(this, "scopeReferencedBy(1)", [1], call1768);
              var var_receiverScope = call1769;
              setLineNumber(265);    // compilenode member
              // call case 6: other requests
              var call1772 = callmethodChecked(var_nd, "asIdentifier", []);
              // call case 6: other requests
              var call1773 = callmethodChecked(var_receiverScope, "scopeReferencedBy(1)", [1], call1772);
              return call1773;
            } else {
              var if1774 = GraceDone;
              setLineNumber(266);    // compilenode member
              // call case 6: other requests
              var call1776 = callmethodChecked(var_nd, "isCall", []);
              if (Grace_isTrue(call1776)) {
                setLineNumber(267);    // compilenode member
                // call case 6: other requests
                var call1778 = callmethodChecked(var_nd, "receiver", []);
                var var_receiver = call1778;
                var if1779 = GraceDone;
                setLineNumber(268);    // compilenode member
                // call case 6: other requests
                var call1781 = callmethodChecked(var_receiver, "isImplicit", []);
                if (Grace_isTrue(call1781)) {
                  setLineNumber(269);    // compilenode string
                  var string1783 = new GraceString("");
                  // call case 6: other requests
                  var call1786 = callmethodChecked(var_nd, "line", []);
                  var string1788 = new GraceString(" on line ");
                  // call case 6: other requests
                  var call1791 = callmethodChecked(var_nd, "nameString", []);
                  var string1793 = new GraceString("inherits from implicit.");
                  var opresult1795 = callmethodChecked(string1793, "++(1)", [1], call1791);
                  var opresult1797 = callmethodChecked(opresult1795, "++(1)", [1], string1788);
                  var opresult1799 = callmethodChecked(opresult1797, "++(1)", [1], call1786);
                  var opresult1801 = callmethodChecked(opresult1799, "++(1)", [1], string1783);
                  // call case 6: other requests
                  var call1802 = callmethodChecked(var_util, "log(1)verbose(1)", [1, 1], new GraceNum(60), opresult1801);
                  if1779 = call1802;
                }
                setLineNumber(271);    // compilenode identifier
                // call case 6: other requests
                // call case 3: self.outer request
                var call1805 = callmethodChecked(superDepth, "outer", [0]);
                onSelf = true;
                var call1806 = callmethodChecked(call1805, "transformCall(1)", [1], var_nd);
                var var_newNd = call1806;
                setLineNumber(272);    // compilenode member
                // call case 6: other requests
                var call1809 = callmethodChecked(var_newNd, "receiver", []);
                // call case 4: self request
                onSelf = true;
                var call1810 = callmethodChecked(this, "scopeReferencedBy(1)", [1], call1809);
                var var_receiverScope = call1810;
                setLineNumber(273);    // compilenode member
                // call case 6: other requests
                var call1813 = callmethodChecked(var_newNd, "asIdentifier", []);
                // call case 6: other requests
                var call1814 = callmethodChecked(var_receiverScope, "scopeReferencedBy(1)", [1], call1813);
                return call1814;
              }
              if1759 = if1774;
            }
            if1713 = if1759;
          }
          setLineNumber(276);    // compilenode num
          // call case 6: other requests
          var call1817 = callmethodChecked(var_nd, "pretty(1)", [1], new GraceNum(0));
          setLineNumber(275);    // compilenode string
          var string1819 = new GraceString(" is not a Call, Member, Identifier or op.\n");
          // call case 6: other requests
          var call1822 = callmethodChecked(var_nd, "nameString", []);
          var string1824 = new GraceString("");
          var opresult1826 = callmethodChecked(string1824, "++(1)", [1], call1822);
          var opresult1828 = callmethodChecked(opresult1826, "++(1)", [1], string1819);
          var opresult1830 = callmethodChecked(opresult1828, "++(1)", [1], call1817);
          // call case 6: other requests
          // call case 5: prelude request
          var call1832 = callmethodChecked(var_prelude, "ProgrammingError", []);
          var call1833 = callmethodChecked(call1832, "raise(1)", [1], opresult1830);
          return call1833;
        };
        func1710.paramCounts = [1];
        obj1064.methods["scopeReferencedBy(1)"] = func1710;
        func1710.definitionLine = 245;
        func1710.definitionModule = "identifierresolution";
        var func1834 = function(argcv) {    // method enclosingObjectScope
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("identifierresolution");
          setLineNumber(281);    // compilenode block
          var block1836 = new GraceBlock(this, 281, 1);
          setLineNumber(1);    // compilenode identifier
          block1836.real = function(var_s) {
            var if1837 = GraceDone;
            setLineNumber(282);    // compilenode member
            // call case 6: other requests
            var call1839 = callmethodChecked(var_s, "isObjectScope", []);
            if (Grace_isTrue(call1839)) {
              throw new ReturnException(var_s, returnTarget);
            }
            return if1837;
          };
          // call case 4: self request
          onSelf = true;
          var call1840 = callmethodChecked(this, "withSurroundingScopesDo(1)", [1], block1836);
          setLineNumber(284);    // compilenode string
          var string1842 = new GraceString("no object scope found!");
          // call case 6: other requests
          // call case 5: prelude request
          var call1844 = callmethodChecked(var_prelude, "ProgrammingError", []);
          var call1845 = callmethodChecked(call1844, "raise(1)", [1], string1842);
          return call1845;
        };
        func1834.paramCounts = [0];
        obj1064.methods["enclosingObjectScope"] = func1834;
        func1834.definitionLine = 278;
        func1834.definitionModule = "identifierresolution";
        var func1846 = function(argcv) {    // method inSameContextAs(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_encScope = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          var if1847 = GraceDone;
          setLineNumber(291);    // compilenode member
          // call case 6: other requests
          var call1849 = callmethodChecked(var_encScope, "isObjectScope", []);
          if (Grace_isTrue(call1849)) {
            return GraceFalse;
          }
          setLineNumber(292);    // compilenode block
          var block1851 = new GraceBlock(this, 292, 1);
          setLineNumber(1);    // compilenode identifier
          block1851.real = function(var_s) {
            var if1852 = GraceDone;
            setLineNumber(293);    // compilenode identifier
            var opresult1855 = callmethodChecked(var_s, "==(1)", [1], var_encScope);
            if (Grace_isTrue(opresult1855)) {
              throw new ReturnException(GraceTrue, returnTarget);
            }
            var if1856 = GraceDone;
            setLineNumber(294);    // compilenode member
            // call case 6: other requests
            var call1858 = callmethodChecked(var_s, "isObjectScope", []);
            if (Grace_isTrue(call1858)) {
              throw new ReturnException(GraceFalse, returnTarget);
            }
            var if1859 = GraceDone;
            setLineNumber(295);    // compilenode member
            // call case 6: other requests
            var call1861 = callmethodChecked(var_s, "isMethodScope", []);
            if (Grace_isTrue(call1861)) {
              throw new ReturnException(GraceFalse, returnTarget);
            }
            return if1859;
          };
          // call case 4: self request
          onSelf = true;
          var call1862 = callmethodChecked(this, "withSurroundingScopesDo(1)", [1], block1851);
          setLineNumber(297);    // compilenode string
          var string1864 = new GraceString("");
          var string1867 = new GraceString("; encScope = ");
          var string1870 = new GraceString("self = ");
          var opresult1872 = callmethodChecked(string1870, "++(1)", [1], this);
          var opresult1874 = callmethodChecked(opresult1872, "++(1)", [1], string1867);
          var opresult1876 = callmethodChecked(opresult1874, "++(1)", [1], var_encScope);
          var opresult1878 = callmethodChecked(opresult1876, "++(1)", [1], string1864);
          // call case 6: other requests
          // call case 5: prelude request
          var call1880 = callmethodChecked(var_prelude, "ProgrammingError", []);
          var call1881 = callmethodChecked(call1880, "raise(1)", [1], opresult1878);
          return call1881;
        };
        func1846.paramCounts = [1];
        obj1064.methods["inSameContextAs(1)"] = func1846;
        func1846.definitionLine = 288;
        func1846.definitionModule = "identifierresolution";
        var func1882 = function(argcv) {    // method isUniversal
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("identifierresolution");
          // isUniversal is a simple accessor - elide try ... catch
          setLineNumber(299);    // compilenode identifier
          return GraceFalse;
        };
        func1882.paramCounts = [0];
        obj1064.methods["isUniversal"] = func1882;
        func1882.definitionLine = 299;
        func1882.definitionModule = "identifierresolution";
        var func1883 = function(argcv) {    // method checkShadowing(_)as(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_ident = arguments[curarg];
          curarg++;
          var var_newKind = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(301);    // compilenode member
          // call case 6: other requests
          var call1885 = callmethodChecked(var_ident, "nameString", []);
          var var_name = call1885;
          setLineNumber(302);    // compilenode block
          var block1887 = new GraceBlock(this, 302, 0);
          block1887.real = function() {
            setLineNumber(304);    // compilenode identifier
            throw new ReturnException(var_done, returnTarget);
            return undefined;
          };
          // call case 4: self request
          onSelf = true;
          var call1888 = callmethodChecked(this, "thatDefines(1)ifNone(1)", [1, 1], var_name, block1887);
          var var_priorScope = call1888;
          var if1889 = GraceDone;
          setLineNumber(306);    // compilenode identifier
          var opresult1892 = callmethodChecked(var_priorScope, "==(1)", [1], this);
          if (Grace_isTrue(opresult1892)) {
            setLineNumber(307);    // compilenode string
            var string1893 = new GraceString("this");
            if1889 = string1893;
          } else {
            setLineNumber(309);    // compilenode string
            var string1894 = new GraceString("");
            // call case 6: other requests
            var call1897 = callmethodChecked(var_priorScope, "variety", []);
            var string1899 = new GraceString("an enclosing ");
            var opresult1901 = callmethodChecked(string1899, "++(1)", [1], call1897);
            var opresult1903 = callmethodChecked(opresult1901, "++(1)", [1], string1894);
            if1889 = opresult1903;
          }
          var var_description = if1889;
          setLineNumber(311);    // compilenode identifier
          // call case 6: other requests
          var call1905 = callmethodChecked(var_priorScope, "kind(1)", [1], var_name);
          var var_priorKind = call1905;
          var if1906 = GraceDone;
          setLineNumber(312);    // compilenode block
          var block1907 = new GraceBlock(this, 312, 0);
          block1907.real = function() {
            // call case 4: self request
            onSelf = true;
            var call1909 = callmethodChecked(this, "isObjectScope", []);
            return call1909;
          };
          // call case 6: other requests
          var call1912 = callmethodChecked(var_priorScope, "isObjectScope", []);
          var opresult1914 = callmethodChecked(call1912, "&&(1)", [1], block1907);
          if (Grace_isTrue(opresult1914)) {
            setLineNumber(314);    // compilenode identifier
            return var_done;
          }
          setLineNumber(316);    // compilenode string
          var string1915 = new GraceString("");
          var var_more = string1915;
          var if1916 = GraceDone;
          setLineNumber(317);    // compilenode identifier
          // call case 6: other requests
          // call case 6: other requests
          var call1919 = callmethodChecked(var_priorScope, "elementLines", []);
          var call1920 = callmethodChecked(call1919, "contains(1)", [1], var_name);
          if (Grace_isTrue(call1920)) {
            setLineNumber(318);    // compilenode identifier
            // call case 6: other requests
            // call case 6: other requests
            var call1923 = callmethodChecked(var_priorScope, "elementLines", []);
            var call1924 = callmethodChecked(call1923, "get(1)", [1], var_name);
            var var_ln = call1924;
            var if1925 = GraceDone;
            setLineNumber(319);    // compilenode identifier
            var opresult1928 = callmethodChecked(var_ln, ">(1)", [1], new GraceNum(0));
            if (Grace_isTrue(opresult1928)) {
              setLineNumber(320);    // compilenode string
              var string1929 = new GraceString("");
              // call case 6: other requests
              // call case 6: other requests
              var call1933 = callmethodChecked(var_priorScope, "elementLines", []);
              var call1934 = callmethodChecked(call1933, "get(1)", [1], var_name);
              var string1936 = new GraceString(" on line ");
              var opresult1938 = callmethodChecked(string1936, "++(1)", [1], call1934);
              var opresult1940 = callmethodChecked(opresult1938, "++(1)", [1], string1929);
              var_more = opresult1940;
              if1925 = GraceDone;
            }
            if1916 = if1925;
          }
          var if1941 = GraceDone;
          setLineNumber(323);    // compilenode member
          // call case 6: other requests
          var call1943 = callmethodChecked(var_k, "vardec", []);
          var opresult1946 = callmethodChecked(var_newKind, "==(1)", [1], call1943);
          if (Grace_isTrue(opresult1946)) {
            setLineNumber(324);    // compilenode array
            var array1947 = new PrimitiveGraceList([]);
            var var_suggs = array1947;
            setLineNumber(325);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call1950 = callmethodChecked(var_errormessages, "suggestion", []);
            var call1951 = callmethodChecked(call1950, "new", []);
            var var_sugg = call1951;
            var if1952 = GraceDone;
            setLineNumber(326);    // compilenode string
            var string1954 = new GraceString("=");
            var string1955 = new GraceString(" :=");
            var string1958 = new GraceString("");
            var opresult1960 = callmethodChecked(string1958, "++(1)", [1], var_name);
            var opresult1962 = callmethodChecked(opresult1960, "++(1)", [1], string1955);
            setLineNumber(327);    // compilenode member
            // call case 6: other requests
            var call1964 = callmethodChecked(var_ident, "line", []);
            // call case 6: other requests
            setLineNumber(326);    // compilenode identifier
            var call1965 = callmethodChecked(var_sugg, "replaceUntil(1)with(1)onLine(1)", [1, 1, 1], string1954, opresult1962, call1964);
            if (Grace_isTrue(call1965)) {
              setLineNumber(329);    // compilenode identifier
              // call case 6: other requests
              var call1967 = callmethodChecked(var_suggs, "push(1)", [1], var_sugg);
              if1952 = call1967;
            }
            var if1968 = GraceDone;
            setLineNumber(331);    // compilenode member
            // call case 6: other requests
            var call1970 = callmethodChecked(var_k, "vardec", []);
            var opresult1973 = callmethodChecked(var_priorKind, "==(1)", [1], call1970);
            if (Grace_isTrue(opresult1973)) {
              setLineNumber(332);    // compilenode string
              var string1974 = new GraceString(". To assign to the existing variable, remove 'var'");
              var opresult1977 = callmethodChecked(var_more, "++(1)", [1], string1974);
              var_more = opresult1977;
              if1968 = GraceDone;
            }
            setLineNumber(336);    // compilenode string
            var string1979 = new GraceString(".");
            var string1982 = new GraceString(" scope");
            var string1985 = new GraceString("");
            var opresult1987 = callmethodChecked(string1985, "++(1)", [1], var_description);
            var opresult1989 = callmethodChecked(opresult1987, "++(1)", [1], string1982);
            var opresult1991 = callmethodChecked(opresult1989, "++(1)", [1], var_more);
            var opresult1993 = callmethodChecked(opresult1991, "++(1)", [1], string1979);
            setLineNumber(335);    // compilenode string
            var string1995 = new GraceString("redeclared because it is already declared in ");
            setLineNumber(334);    // compilenode string
            var string1997 = new GraceString("' cannot be ");
            var string2000 = new GraceString("'");
            var opresult2002 = callmethodChecked(string2000, "++(1)", [1], var_name);
            var opresult2004 = callmethodChecked(opresult2002, "++(1)", [1], string1997);
            var opresult2006 = callmethodChecked(opresult2004, "++(1)", [1], string1995);
            var opresult2008 = callmethodChecked(opresult2006, "++(1)", [1], opresult1993);
            setLineNumber(337);    // compilenode member
            // call case 6: other requests
            var call2010 = callmethodChecked(var_ident, "line", []);
            // call case 6: other requests
            var call2012 = callmethodChecked(var_ident, "linePos", []);
            // call case 6: other requests
            var call2015 = callmethodChecked(var_name, "size", []);
            // call case 6: other requests
            var call2018 = callmethodChecked(var_ident, "linePos", []);
            var opresult2020 = callmethodChecked(call2018, "+(1)", [1], call2015);
            var diff2022 = callmethodChecked(opresult2020, "-(1)", [1], new GraceNum(1));
            setLineNumber(338);    // compilenode identifier
            // call case 6: other requests
            setLineNumber(334);    // compilenode identifier
            var call2023 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)withSuggestions(1)", [1, 3, 1], opresult2008, call2010, call2012, diff2022, var_suggs);
            if1941 = call2023;
          } else {
            setLineNumber(342);    // compilenode string
            var string2025 = new GraceString(". Use a different name.");
            var string2028 = new GraceString(" scope");
            var string2031 = new GraceString("");
            var opresult2033 = callmethodChecked(string2031, "++(1)", [1], var_description);
            var opresult2035 = callmethodChecked(opresult2033, "++(1)", [1], string2028);
            var opresult2037 = callmethodChecked(opresult2035, "++(1)", [1], var_more);
            var opresult2039 = callmethodChecked(opresult2037, "++(1)", [1], string2025);
            setLineNumber(341);    // compilenode string
            var string2041 = new GraceString("redeclared because it is already declared in ");
            setLineNumber(340);    // compilenode string
            var string2043 = new GraceString("' cannot be ");
            var string2046 = new GraceString("'");
            var opresult2048 = callmethodChecked(string2046, "++(1)", [1], var_name);
            var opresult2050 = callmethodChecked(opresult2048, "++(1)", [1], string2043);
            var opresult2052 = callmethodChecked(opresult2050, "++(1)", [1], string2041);
            var opresult2054 = callmethodChecked(opresult2052, "++(1)", [1], opresult2039);
            setLineNumber(343);    // compilenode member
            // call case 6: other requests
            var call2056 = callmethodChecked(var_ident, "line", []);
            // call case 6: other requests
            var call2058 = callmethodChecked(var_ident, "linePos", []);
            setLineNumber(344);    // compilenode member
            // call case 6: other requests
            var call2061 = callmethodChecked(var_name, "size", []);
            // call case 6: other requests
            var call2064 = callmethodChecked(var_ident, "linePos", []);
            var opresult2066 = callmethodChecked(call2064, "+(1)", [1], call2061);
            var diff2068 = callmethodChecked(opresult2066, "-(1)", [1], new GraceNum(1));
            // call case 6: other requests
            setLineNumber(340);    // compilenode identifier
            var call2069 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], opresult2054, call2056, call2058, diff2068);
            if1941 = call2069;
          }
          return if1941;
        };
        func1883.paramCounts = [1, 1];
        obj1064.methods["checkShadowing(1)as(1)"] = func1883;
        func1883.definitionLine = 300;
        func1883.definitionModule = "identifierresolution";
        setLineNumber(34);    // compilenode member
        // call case 6: other requests
        var call2071 = callmethodChecked(var_map, "new", []);
        obj1064.data["elements"] = call2071;
        var reader_identifierresolution_elements2072 = function() {
          return this.data["elements"];
        };
        reader_identifierresolution_elements2072.def = true;
        obj1064.methods["elements"] = reader_identifierresolution_elements2072;
        setLineNumber(35);    // compilenode member
        // call case 6: other requests
        var call2074 = callmethodChecked(var_map, "new", []);
        obj1064.data["elementScopes"] = call2074;
        var reader_identifierresolution_elementScopes2075 = function() {
          return this.data["elementScopes"];
        };
        reader_identifierresolution_elementScopes2075.def = true;
        obj1064.methods["elementScopes"] = reader_identifierresolution_elementScopes2075;
        setLineNumber(36);    // compilenode member
        // call case 6: other requests
        var call2077 = callmethodChecked(var_map, "new", []);
        obj1064.data["elementLines"] = call2077;
        var reader_identifierresolution_elementLines2078 = function() {
          return this.data["elementLines"];
        };
        reader_identifierresolution_elementLines2078.def = true;
        obj1064.methods["elementLines"] = reader_identifierresolution_elementLines2078;
        setLineNumber(37);    // compilenode member
        // call case 6: other requests
        var call2080 = callmethodChecked(var_map, "new", []);
        obj1064.data["elementTokens"] = call2080;
        var reader_identifierresolution_elementTokens2081 = function() {
          return this.data["elementTokens"];
        };
        reader_identifierresolution_elementTokens2081.def = true;
        obj1064.methods["elementTokens"] = reader_identifierresolution_elementTokens2081;
        setLineNumber(38);    // compilenode identifier
        obj1064.data["parent"] = var_parent__39__;
        var reader_identifierresolution_parent2082 = function() {
          return this.data["parent"];
        };
        reader_identifierresolution_parent2082.def = true;
        obj1064.methods["parent"] = reader_identifierresolution_parent2082;
        setLineNumber(39);    // compilenode identifier
        obj1064.data["hasParent"] = GraceTrue;
        var reader_identifierresolution_hasParent2083 = function() {
          return this.data["hasParent"];
        };
        obj1064.methods["hasParent"] = reader_identifierresolution_hasParent2083;
        obj1064.data["hasParent"] = GraceTrue;
        var writer_identifierresolution_hasParent2083 = function(argcv, o) {
          this.data["hasParent"] = o;
          return GraceDone;
        };
        obj1064.methods["hasParent:=(1)"] = writer_identifierresolution_hasParent2083;
        obj1064.mutable = true;
        setLineNumber(40);    // compilenode identifier
        obj1064.data["variety"] = var_variety__39__;
        var reader_identifierresolution_variety2084 = function() {
          return this.data["variety"];
        };
        reader_identifierresolution_variety2084.def = true;
        obj1064.methods["variety"] = reader_identifierresolution_variety2084;
        setLineNumber(41);    // compilenode member
        // call case 6: other requests
        var call2086 = callmethodChecked(var_ast, "nullNode", []);
        obj1064.data["node"] = call2086;
        var reader_identifierresolution_node2087 = function() {
          return this.data["node"];
        };
        obj1064.methods["node"] = reader_identifierresolution_node2087;
        obj1064.data["node"] = call2086;
        var writer_identifierresolution_node2087 = function(argcv, o) {
          this.data["node"] = o;
          return GraceDone;
        };
        obj1064.methods["node:=(1)"] = writer_identifierresolution_node2087;
        obj1064.mutable = true;
        setLineNumber(42);    // compilenode identifier
        obj1064.data["inheritedNames"] = var_undiscovered;
        var reader_identifierresolution_inheritedNames2088 = function() {
          return this.data["inheritedNames"];
        };
        obj1064.methods["inheritedNames"] = reader_identifierresolution_inheritedNames2088;
        obj1064.data["inheritedNames"] = var_undiscovered;
        var writer_identifierresolution_inheritedNames2088 = function(argcv, o) {
          this.data["inheritedNames"] = o;
          return GraceDone;
        };
        obj1064.methods["inheritedNames:=(1)"] = writer_identifierresolution_inheritedNames2088;
        obj1064.mutable = true;
        setLineNumber(43);    // compilenode identifier
        var opresult2091 = callmethodChecked(var_stSerial, "+(1)", [1], new GraceNum(1));
        var_stSerial = opresult2091;
        setLineNumber(44);    // compilenode identifier
        obj1064.data["serialNumber"] = var_stSerial;
        var reader_identifierresolution_serialNumber2092 = function() {
          return this.data["serialNumber"];
        };
        reader_identifierresolution_serialNumber2092.def = true;
        obj1064.methods["serialNumber"] = reader_identifierresolution_serialNumber2092;
        setLineNumber(45);    // compilenode member
        // call case 6: other requests
        // call case 4: self request
        onSelf = true;
        var call2095 = callmethodChecked(this, "serialNumber", []);
        var call2096 = callmethodChecked(call2095, "hash", []);
        obj1064.data["hash"] = call2096;
        var reader_identifierresolution_hash2097 = function() {
          return this.data["hash"];
        };
        reader_identifierresolution_hash2097.def = true;
        obj1064.methods["hash"] = reader_identifierresolution_hash2097;
        var if2098 = GraceDone;
        setLineNumber(47);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call2100 = callmethodChecked(this, "isObjectScope", []);
        if (Grace_isTrue(call2100)) {
          setLineNumber(48);    // compilenode string
          var string2102 = new GraceString("self");
          // call case 6: other requests
          var call2104 = callmethodChecked(var_k, "selfDef", []);
          // call case 4: self request
          onSelf = true;
          var call2105 = callmethodChecked(this, "addName(1)as(1)", [1, 1], string2102, call2104);
          setLineNumber(49);    // compilenode string
          var string2107 = new GraceString("self");
          // call case 4: self request
          onSelf = true;
          var call2108 = callmethodChecked(this, "at(1)putScope(1)", [1, 1], string2107, this);
          if2098 = call2108;
        }
        superDepth = origSuperDepth;
      };
      obj_init_1064.apply(inheritingObject, []);
      return obj1064;
      };
      this.methods["newScopeIn(1)kind(1)$object(1)"] = func1063;
    setLineNumber(374);    // compilenode method
    var func2109 = function(argcv) {    // method rewritematchblockterm(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_arg = arguments[curarg];
      curarg++;
      setModuleName("identifierresolution");
      setLineNumber(378);    // compilenode member
      // call case 6: other requests
      var call2112 = callmethodChecked(var_arg, "line", []);
      // call case 6: other requests
      var call2114 = callmethodChecked(var_arg, "linePos", []);
      // call case 6: other requests
      var call2115 = callmethodChecked(var_util, "setPosition(2)", [2], call2112, call2114);
      var if2116 = GraceDone;
      setLineNumber(379);    // compilenode string
      var string2117 = new GraceString("num");
      // call case 6: other requests
      var call2120 = callmethodChecked(var_arg, "kind", []);
      var opresult2122 = callmethodChecked(call2120, "==(1)", [1], string2117);
      if (Grace_isTrue(opresult2122)) {
        setLineNumber(380);    // compilenode array
        var array2124 = new PrimitiveGraceList([]);
        var array2123 = new PrimitiveGraceList([var_arg, array2124]);
        return array2123;
      }
      var if2125 = GraceDone;
      setLineNumber(382);    // compilenode string
      var string2126 = new GraceString("string");
      // call case 6: other requests
      var call2129 = callmethodChecked(var_arg, "kind", []);
      var opresult2131 = callmethodChecked(call2129, "==(1)", [1], string2126);
      if (Grace_isTrue(opresult2131)) {
        setLineNumber(383);    // compilenode array
        var array2133 = new PrimitiveGraceList([]);
        var array2132 = new PrimitiveGraceList([var_arg, array2133]);
        return array2132;
      }
      var if2134 = GraceDone;
      setLineNumber(385);    // compilenode string
      var string2135 = new GraceString("boolean");
      // call case 6: other requests
      var call2138 = callmethodChecked(var_arg, "kind", []);
      var opresult2140 = callmethodChecked(call2138, "==(1)", [1], string2135);
      if (Grace_isTrue(opresult2140)) {
        setLineNumber(386);    // compilenode array
        var array2142 = new PrimitiveGraceList([]);
        var array2141 = new PrimitiveGraceList([var_arg, array2142]);
        return array2141;
      }
      var if2143 = GraceDone;
      setLineNumber(388);    // compilenode block
      var block2144 = new GraceBlock(this, 388, 0);
      block2144.real = function() {
        setLineNumber(389);    // compilenode string
        var string2145 = new GraceString("prefix");
        setLineNumber(388);    // compilenode num
        // call case 6: other requests
        // call case 6: other requests
        // call case 6: other requests
        var call2150 = callmethodChecked(var_arg, "receiver", []);
        var call2151 = callmethodChecked(call2150, "nameString", []);
        var call2152 = callmethodChecked(call2151, "substringFrom(1)to(1)", [1, 1], new GraceNum(1), new GraceNum(6));
        var opresult2154 = callmethodChecked(call2152, "==(1)", [1], string2145);
        return opresult2154;
      };
      var string2156 = new GraceString("call");
      // call case 6: other requests
      var call2159 = callmethodChecked(var_arg, "kind", []);
      var opresult2161 = callmethodChecked(call2159, "==(1)", [1], string2156);
      var opresult2163 = callmethodChecked(opresult2161, "&&(1)", [1], block2144);
      if (Grace_isTrue(opresult2163)) {
        setLineNumber(390);    // compilenode array
        var array2165 = new PrimitiveGraceList([]);
        var array2164 = new PrimitiveGraceList([var_arg, array2165]);
        return array2164;
      }
      var if2166 = GraceDone;
      setLineNumber(392);    // compilenode string
      var string2167 = new GraceString("member");
      // call case 6: other requests
      var call2170 = callmethodChecked(var_arg, "kind", []);
      var opresult2172 = callmethodChecked(call2170, "==(1)", [1], string2167);
      if (Grace_isTrue(opresult2172)) {
        setLineNumber(393);    // compilenode array
        var array2174 = new PrimitiveGraceList([]);
        var array2173 = new PrimitiveGraceList([var_arg, array2174]);
        return array2173;
      }
      var if2175 = GraceDone;
      setLineNumber(395);    // compilenode string
      var string2176 = new GraceString("call");
      // call case 6: other requests
      var call2179 = callmethodChecked(var_arg, "kind", []);
      var opresult2181 = callmethodChecked(call2179, "==(1)", [1], string2176);
      if (Grace_isTrue(opresult2181)) {
        setLineNumber(396);    // compilenode array
        var array2182 = new PrimitiveGraceList([]);
        var var_bindings = array2182;
        setLineNumber(397);    // compilenode array
        var array2183 = new PrimitiveGraceList([]);
        var var_subpats = array2183;
        setLineNumber(398);    // compilenode member
        // call case 6: other requests
        var call2186 = callmethodChecked(var_arg, "with", []);
        var block2187 = new GraceBlock(this, 398, 1);
        setLineNumber(1);    // compilenode identifier
        block2187.real = function(var_part) {
          setLineNumber(399);    // compilenode member
          // call case 6: other requests
          var call2190 = callmethodChecked(var_part, "args", []);
          var block2191 = new GraceBlock(this, 399, 1);
          setLineNumber(1);    // compilenode identifier
          block2191.real = function(var_a) {
            setLineNumber(400);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call2193 = callmethodChecked(this, "rewritematchblockterm(1)", [1], var_a);
            var var_tmp = call2193;
            setLineNumber(401);    // compilenode member
            // call case 6: other requests
            var call2196 = callmethodChecked(var_tmp, "first", []);
            // call case 6: other requests
            var call2197 = callmethodChecked(var_subpats, "push(1)", [1], call2196);
            setLineNumber(402);    // compilenode member
            // call case 6: other requests
            var call2200 = callmethodChecked(var_tmp, "second", []);
            var block2201 = new GraceBlock(this, 402, 1);
            setLineNumber(1);    // compilenode identifier
            block2201.real = function(var_b) {
              setLineNumber(403);    // compilenode identifier
              // call case 6: other requests
              var call2203 = callmethodChecked(var_bindings, "push(1)", [1], var_b);
              return call2203;
            };
            // call case 5: prelude request
            var call2204 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call2200, block2201);
            return call2204;
          };
          // call case 5: prelude request
          var call2205 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call2190, block2191);
          return call2205;
        };
        // call case 5: prelude request
        var call2206 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call2186, block2187);
        setLineNumber(408);    // compilenode string
        var string2209 = new GraceString("MatchAndDestructuringPattern");
        setLineNumber(409);    // compilenode string
        var string2211 = new GraceString("prelude");
        // call case 6: other requests
        // call case 6: other requests
        var call2213 = callmethodChecked(var_ast, "identifierNode", []);
        var call2214 = callmethodChecked(call2213, "new(2)", [2], string2211, GraceFalse);
        // call case 6: other requests
        setLineNumber(408);    // compilenode member
        // call case 6: other requests
        var call2216 = callmethodChecked(var_ast, "memberNode", []);
        var call2217 = callmethodChecked(call2216, "new(2)", [2], string2209, call2214);
        setLineNumber(410);    // compilenode string
        var string2220 = new GraceString("new");
        // call case 6: other requests
        var call2223 = callmethodChecked(var_arg, "receiver", []);
        // call case 6: other requests
        // call case 6: other requests
        var call2226 = callmethodChecked(var_ast, "arrayNode", []);
        var call2227 = callmethodChecked(call2226, "new(1)", [1], var_subpats);
        var array2221 = new PrimitiveGraceList([call2223, call2227]);
        // call case 6: other requests
        // call case 6: other requests
        var call2229 = callmethodChecked(var_ast, "requestPart", []);
        var call2230 = callmethodChecked(call2229, "request(1)withArgs(1)", [1, 1], string2220, array2221);
        var array2218 = new PrimitiveGraceList([call2230]);
        // call case 6: other requests
        setLineNumber(407);    // compilenode member
        // call case 6: other requests
        var call2232 = callmethodChecked(var_ast, "callNode", []);
        var call2233 = callmethodChecked(call2232, "new(2)", [2], call2217, array2218);
        var var_callpat = call2233;
        setLineNumber(412);    // compilenode identifier
        var array2234 = new PrimitiveGraceList([var_callpat, var_bindings]);
        return array2234;
      }
      var if2235 = GraceDone;
      setLineNumber(414);    // compilenode member
      // call case 6: other requests
      var call2237 = callmethodChecked(var_arg, "isIdentifier", []);
      if (Grace_isTrue(call2237)) {
        setLineNumber(416);    // compilenode string
        var string2240 = new GraceString("VariablePattern");
        setLineNumber(417);    // compilenode string
        var string2242 = new GraceString("prelude");
        // call case 6: other requests
        // call case 6: other requests
        var call2244 = callmethodChecked(var_ast, "identifierNode", []);
        var call2245 = callmethodChecked(call2244, "new(2)", [2], string2242, GraceFalse);
        // call case 6: other requests
        setLineNumber(416);    // compilenode member
        // call case 6: other requests
        var call2247 = callmethodChecked(var_ast, "memberNode", []);
        var call2248 = callmethodChecked(call2247, "new(2)", [2], string2240, call2245);
        setLineNumber(418);    // compilenode string
        var string2251 = new GraceString("new");
        // call case 6: other requests
        var call2255 = callmethodChecked(var_arg, "value", []);
        // call case 6: other requests
        // call case 6: other requests
        var call2257 = callmethodChecked(var_ast, "stringNode", []);
        var call2258 = callmethodChecked(call2257, "new(1)", [1], call2255);
        var array2252 = new PrimitiveGraceList([call2258]);
        // call case 6: other requests
        // call case 6: other requests
        var call2260 = callmethodChecked(var_ast, "requestPart", []);
        var call2261 = callmethodChecked(call2260, "request(1)withArgs(1)", [1, 1], string2251, array2252);
        var array2249 = new PrimitiveGraceList([call2261]);
        // call case 6: other requests
        setLineNumber(415);    // compilenode member
        // call case 6: other requests
        var call2263 = callmethodChecked(var_ast, "callNode", []);
        var call2264 = callmethodChecked(call2263, "new(2)", [2], call2248, array2249);
        var var_varpat = call2264;
        var if2265 = GraceDone;
        setLineNumber(420);    // compilenode member
        // call case 6: other requests
        var call2267 = callmethodChecked(var_arg, "dtype", []);
        var opresult2270 = callmethodChecked(GraceFalse, "\u2260(1)", [1], call2267);
        if (Grace_isTrue(opresult2270)) {
          var if2271 = GraceDone;
          setLineNumber(421);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call2274 = callmethodChecked(var_arg, "dtype", []);
          var call2275 = callmethodChecked(call2274, "isIdentifier", []);
          if (Grace_isTrue(call2275)) {
            setLineNumber(423);    // compilenode string
            var string2279 = new GraceString("AndPattern");
            setLineNumber(424);    // compilenode string
            var string2281 = new GraceString("prelude");
            // call case 6: other requests
            // call case 6: other requests
            var call2283 = callmethodChecked(var_ast, "identifierNode", []);
            var call2284 = callmethodChecked(call2283, "new(2)", [2], string2281, GraceFalse);
            // call case 6: other requests
            setLineNumber(423);    // compilenode member
            // call case 6: other requests
            var call2286 = callmethodChecked(var_ast, "memberNode", []);
            var call2287 = callmethodChecked(call2286, "new(2)", [2], string2279, call2284);
            setLineNumber(425);    // compilenode string
            var string2290 = new GraceString("new");
            // call case 6: other requests
            var call2293 = callmethodChecked(var_arg, "dtype", []);
            var array2291 = new PrimitiveGraceList([var_varpat, call2293]);
            // call case 6: other requests
            // call case 6: other requests
            var call2295 = callmethodChecked(var_ast, "requestPart", []);
            var call2296 = callmethodChecked(call2295, "request(1)withArgs(1)", [1, 1], string2290, array2291);
            var array2288 = new PrimitiveGraceList([call2296]);
            // call case 6: other requests
            setLineNumber(422);    // compilenode member
            // call case 6: other requests
            var call2298 = callmethodChecked(var_ast, "callNode", []);
            var call2299 = callmethodChecked(call2298, "new(2)", [2], call2287, array2288);
            setLineNumber(426);    // compilenode identifier
            var array2300 = new PrimitiveGraceList([var_arg]);
            var array2276 = new PrimitiveGraceList([call2299, array2300]);
            return array2276;
          }
          setLineNumber(428);    // compilenode member
          // call case 6: other requests
          var call2303 = callmethodChecked(var_arg, "dtype", []);
          // call case 4: self request
          onSelf = true;
          var call2304 = callmethodChecked(this, "rewritematchblockterm(1)", [1], call2303);
          var var_tmp = call2304;
          setLineNumber(429);    // compilenode identifier
          var array2305 = new PrimitiveGraceList([var_arg]);
          var var_bindings = array2305;
          setLineNumber(430);    // compilenode member
          // call case 6: other requests
          var call2308 = callmethodChecked(var_tmp, "second", []);
          var block2309 = new GraceBlock(this, 430, 1);
          setLineNumber(1);    // compilenode identifier
          block2309.real = function(var_b) {
            setLineNumber(431);    // compilenode identifier
            // call case 6: other requests
            var call2311 = callmethodChecked(var_bindings, "push(1)", [1], var_b);
            return call2311;
          };
          // call case 5: prelude request
          var call2312 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call2308, block2309);
          setLineNumber(434);    // compilenode string
          var string2315 = new GraceString("AndPattern");
          setLineNumber(435);    // compilenode string
          var string2317 = new GraceString("prelude");
          // call case 6: other requests
          // call case 6: other requests
          var call2319 = callmethodChecked(var_ast, "identifierNode", []);
          var call2320 = callmethodChecked(call2319, "new(2)", [2], string2317, GraceFalse);
          // call case 6: other requests
          setLineNumber(434);    // compilenode member
          // call case 6: other requests
          var call2322 = callmethodChecked(var_ast, "memberNode", []);
          var call2323 = callmethodChecked(call2322, "new(2)", [2], string2315, call2320);
          setLineNumber(436);    // compilenode string
          var string2326 = new GraceString("new");
          // call case 6: other requests
          var call2329 = callmethodChecked(var_tmp, "first", []);
          var array2327 = new PrimitiveGraceList([var_varpat, call2329]);
          // call case 6: other requests
          // call case 6: other requests
          var call2331 = callmethodChecked(var_ast, "requestPart", []);
          var call2332 = callmethodChecked(call2331, "request(1)withArgs(1)", [1, 1], string2326, array2327);
          var array2324 = new PrimitiveGraceList([call2332]);
          // call case 6: other requests
          setLineNumber(433);    // compilenode member
          // call case 6: other requests
          var call2334 = callmethodChecked(var_ast, "callNode", []);
          var call2335 = callmethodChecked(call2334, "new(2)", [2], call2323, array2324);
          var var_bindingpat = call2335;
          setLineNumber(438);    // compilenode identifier
          var array2336 = new PrimitiveGraceList([var_bindingpat, var_bindings]);
          return array2336;
        }
        setLineNumber(440);    // compilenode identifier
        var array2338 = new PrimitiveGraceList([var_arg]);
        var array2337 = new PrimitiveGraceList([var_varpat, array2338]);
        return array2337;
      }
      var if2339 = GraceDone;
      setLineNumber(442);    // compilenode string
      var string2340 = new GraceString("typeliteral");
      // call case 6: other requests
      var call2343 = callmethodChecked(var_arg, "kind", []);
      var opresult2345 = callmethodChecked(call2343, "==(1)", [1], string2340);
      if (Grace_isTrue(opresult2345)) {
        setLineNumber(443);    // compilenode array
        var array2347 = new PrimitiveGraceList([]);
        var array2346 = new PrimitiveGraceList([var_arg, array2347]);
        return array2346;
      }
      setLineNumber(446);    // compilenode string
      var string2349 = new GraceString("'.");
      // call case 6: other requests
      var call2352 = callmethodChecked(var_arg, "kind", []);
      var string2354 = new GraceString("match block of unexpected kind '");
      var opresult2356 = callmethodChecked(string2354, "++(1)", [1], call2352);
      var opresult2358 = callmethodChecked(opresult2356, "++(1)", [1], string2349);
      setLineNumber(445);    // compilenode string
      var string2360 = new GraceString("Internal error in compiler: fell through when rewriting ");
      var opresult2362 = callmethodChecked(string2360, "++(1)", [1], opresult2358);
      // call case 6: other requests
      // call case 5: prelude request
      var call2364 = callmethodChecked(var_prelude, "ProgrammingError", []);
      var call2365 = callmethodChecked(call2364, "raise(1)", [1], opresult2362);
      return call2365;
    };
    func2109.paramCounts = [1];
    this.methods["rewritematchblockterm(1)"] = func2109;
    func2109.definitionLine = 374;
    func2109.definitionModule = "identifierresolution";
    setLineNumber(448);    // compilenode method
    var func2366 = function(argcv) {    // method rewritematchblock(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_blk = arguments[curarg];
      curarg++;
      setModuleName("identifierresolution");
      setLineNumber(449);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call2369 = callmethodChecked(var_blk, "params", []);
      var call2370 = callmethodChecked(call2369, "first", []);
      var var_arg = call2370;
      setLineNumber(450);    // compilenode identifier
      var var_pattern = GraceFalse;
      setLineNumber(451);    // compilenode array
      var array2371 = new PrimitiveGraceList([]);
      var var_newparams = array2371;
      setLineNumber(452);    // compilenode member
      // call case 6: other requests
      var call2374 = callmethodChecked(var_blk, "params", []);
      var block2375 = new GraceBlock(this, 452, 1);
      setLineNumber(1);    // compilenode identifier
      block2375.real = function(var_p) {
        setLineNumber(453);    // compilenode identifier
        // call case 6: other requests
        var call2377 = callmethodChecked(var_newparams, "push(1)", [1], var_p);
        return call2377;
      };
      // call case 5: prelude request
      var call2378 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call2374, block2375);
      var if2379 = GraceDone;
      setLineNumber(456);    // compilenode string
      var string2380 = new GraceString("boolean");
      // call case 6: other requests
      var call2383 = callmethodChecked(var_arg, "kind", []);
      var opresult2385 = callmethodChecked(call2383, "==(1)", [1], string2380);
      setLineNumber(455);    // compilenode string
      var string2387 = new GraceString("string");
      // call case 6: other requests
      var call2390 = callmethodChecked(var_arg, "kind", []);
      var opresult2392 = callmethodChecked(call2390, "==(1)", [1], string2387);
      var string2394 = new GraceString("num");
      // call case 6: other requests
      var call2397 = callmethodChecked(var_arg, "kind", []);
      var opresult2399 = callmethodChecked(call2397, "==(1)", [1], string2394);
      var opresult2401 = callmethodChecked(opresult2399, "||(1)", [1], opresult2392);
      var opresult2403 = callmethodChecked(opresult2401, "||(1)", [1], opresult2385);
      if (Grace_isTrue(opresult2403)) {
        setLineNumber(457);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call2405 = callmethodChecked(this, "rewritematchblockterm(1)", [1], var_arg);
        var var_tmp = call2405;
        setLineNumber(458);    // compilenode member
        // call case 6: other requests
        var call2407 = callmethodChecked(var_tmp, "first", []);
        var_pattern = call2407;
        setLineNumber(459);    // compilenode member
        // call case 6: other requests
        var call2409 = callmethodChecked(var_tmp, "second", []);
        var_newparams = call2409;
        if2379 = GraceDone;
      }
      var if2410 = GraceDone;
      setLineNumber(461);    // compilenode string
      var string2411 = new GraceString("identifier");
      // call case 6: other requests
      var call2414 = callmethodChecked(var_arg, "kind", []);
      var opresult2416 = callmethodChecked(call2414, "==(1)", [1], string2411);
      if (Grace_isTrue(opresult2416)) {
        setLineNumber(463);    // compilenode string
        var string2419 = new GraceString("VariablePattern");
        setLineNumber(464);    // compilenode string
        var string2421 = new GraceString("prelude");
        // call case 6: other requests
        // call case 6: other requests
        var call2423 = callmethodChecked(var_ast, "identifierNode", []);
        var call2424 = callmethodChecked(call2423, "new(2)", [2], string2421, GraceFalse);
        // call case 6: other requests
        setLineNumber(463);    // compilenode member
        // call case 6: other requests
        var call2426 = callmethodChecked(var_ast, "memberNode", []);
        var call2427 = callmethodChecked(call2426, "new(2)", [2], string2419, call2424);
        setLineNumber(465);    // compilenode string
        var string2430 = new GraceString("new");
        // call case 6: other requests
        var call2434 = callmethodChecked(var_arg, "value", []);
        // call case 6: other requests
        // call case 6: other requests
        var call2436 = callmethodChecked(var_ast, "stringNode", []);
        var call2437 = callmethodChecked(call2436, "new(1)", [1], call2434);
        var array2431 = new PrimitiveGraceList([call2437]);
        // call case 6: other requests
        // call case 6: other requests
        var call2439 = callmethodChecked(var_ast, "requestPart", []);
        var call2440 = callmethodChecked(call2439, "request(1)withArgs(1)", [1, 1], string2430, array2431);
        var array2428 = new PrimitiveGraceList([call2440]);
        // call case 6: other requests
        setLineNumber(462);    // compilenode member
        // call case 6: other requests
        var call2442 = callmethodChecked(var_ast, "callNode", []);
        var call2443 = callmethodChecked(call2442, "new(2)", [2], call2427, array2428);
        var var_varpat = call2443;
        var if2444 = GraceDone;
        setLineNumber(466);    // compilenode member
        // call case 6: other requests
        var call2446 = callmethodChecked(var_arg, "dtype", []);
        var opresult2449 = callmethodChecked(GraceFalse, "\u2260(1)", [1], call2446);
        if (Grace_isTrue(opresult2449)) {
          setLineNumber(467);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call2453 = callmethodChecked(var_arg, "dtype", []);
          var call2454 = callmethodChecked(call2453, "kind", []);
          var cases2450 = [];
          setLineNumber(468);    // compilenode block
          var block2455 = new GraceBlock(this, 468, 0);
          var string2456 = new GraceString("op");
          var string2458 = new GraceString("identifier");
          var opresult2460 = callmethodChecked(string2458, "|(1)", [1], string2456);
          block2455.pattern = opresult2460;
          block2455.real = function() {
            setLineNumber(470);    // compilenode string
            var string2463 = new GraceString("AndPattern");
            setLineNumber(471);    // compilenode string
            var string2465 = new GraceString("prelude");
            // call case 6: other requests
            // call case 6: other requests
            var call2467 = callmethodChecked(var_ast, "identifierNode", []);
            var call2468 = callmethodChecked(call2467, "new(2)", [2], string2465, GraceFalse);
            // call case 6: other requests
            setLineNumber(470);    // compilenode member
            // call case 6: other requests
            var call2470 = callmethodChecked(var_ast, "memberNode", []);
            var call2471 = callmethodChecked(call2470, "new(2)", [2], string2463, call2468);
            setLineNumber(472);    // compilenode string
            var string2474 = new GraceString("new");
            // call case 6: other requests
            var call2477 = callmethodChecked(var_arg, "dtype", []);
            var array2475 = new PrimitiveGraceList([var_varpat, call2477]);
            // call case 6: other requests
            // call case 6: other requests
            var call2479 = callmethodChecked(var_ast, "requestPart", []);
            var call2480 = callmethodChecked(call2479, "request(1)withArgs(1)", [1, 1], string2474, array2475);
            var array2472 = new PrimitiveGraceList([call2480]);
            // call case 6: other requests
            setLineNumber(469);    // compilenode member
            // call case 6: other requests
            var call2482 = callmethodChecked(var_ast, "callNode", []);
            var call2483 = callmethodChecked(call2482, "new(2)", [2], call2471, array2472);
            var_pattern = call2483;
            return GraceDone;
          };
          cases2450.push(block2455);
          setLineNumber(473);    // compilenode block
          var block2484 = new GraceBlock(this, 473, 1);
          setLineNumber(1);    // compilenode identifier
          block2484.real = function(var___95____95__0) {
            setLineNumber(474);    // compilenode member
            // call case 6: other requests
            var call2487 = callmethodChecked(var_arg, "dtype", []);
            // call case 4: self request
            onSelf = true;
            var call2488 = callmethodChecked(this, "rewritematchblockterm(1)", [1], call2487);
            var var_tmp = call2488;
            setLineNumber(476);    // compilenode string
            var string2491 = new GraceString("AndPattern");
            setLineNumber(477);    // compilenode string
            var string2493 = new GraceString("prelude");
            // call case 6: other requests
            // call case 6: other requests
            var call2495 = callmethodChecked(var_ast, "identifierNode", []);
            var call2496 = callmethodChecked(call2495, "new(2)", [2], string2493, GraceFalse);
            // call case 6: other requests
            setLineNumber(476);    // compilenode member
            // call case 6: other requests
            var call2498 = callmethodChecked(var_ast, "memberNode", []);
            var call2499 = callmethodChecked(call2498, "new(2)", [2], string2491, call2496);
            setLineNumber(478);    // compilenode string
            var string2502 = new GraceString("new");
            // call case 6: other requests
            var call2505 = callmethodChecked(var_tmp, "first", []);
            var array2503 = new PrimitiveGraceList([var_varpat, call2505]);
            // call case 6: other requests
            // call case 6: other requests
            var call2507 = callmethodChecked(var_ast, "requestPart", []);
            var call2508 = callmethodChecked(call2507, "request(1)withArgs(1)", [1, 1], string2502, array2503);
            var array2500 = new PrimitiveGraceList([call2508]);
            // call case 6: other requests
            setLineNumber(475);    // compilenode member
            // call case 6: other requests
            var call2510 = callmethodChecked(var_ast, "callNode", []);
            var call2511 = callmethodChecked(call2510, "new(2)", [2], call2499, array2500);
            var var_bindingpat = call2511;
            setLineNumber(479);    // compilenode identifier
            var_pattern = var_bindingpat;
            setLineNumber(480);    // compilenode member
            // call case 6: other requests
            var call2514 = callmethodChecked(var_tmp, "second", []);
            var block2515 = new GraceBlock(this, 480, 1);
            setLineNumber(1);    // compilenode identifier
            block2515.real = function(var_p) {
              var if2516 = GraceDone;
              setLineNumber(483);    // compilenode member
              // call case 6: other requests
              var call2518 = callmethodChecked(var_p, "wildcard", []);
              if (Grace_isTrue(call2518)) {
                setLineNumber(484);    // compilenode identifier
                // call case 6: other requests
                var call2520 = callmethodChecked(var_p, "isBindingOccurrence:=(1)", [1], GraceTrue);
                if2516 = call2520;
              } else {
                setLineNumber(486);    // compilenode member
                // call case 6: other requests
                var call2522 = callmethodChecked(var_p, "deepCopy", []);
                var var_extraParam = call2522;
                setLineNumber(489);    // compilenode identifier
                // call case 6: other requests
                var call2524 = callmethodChecked(var_extraParam, "isBindingOccurrence:=(1)", [1], GraceTrue);
                setLineNumber(490);    // compilenode identifier
                // call case 6: other requests
                var call2526 = callmethodChecked(var_newparams, "push(1)", [1], var_extraParam);
                if2516 = call2526;
              }
              return if2516;
            };
            // call case 5: prelude request
            var call2527 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call2514, block2515);
            return call2527;
          };
          cases2450.push(block2484);
          setLineNumber(467);    // compilematchcase
          var matchres2450 = matchCase(call2454,cases2450,false);
          setModuleName("identifierresolution");
          if2444 = matchres2450;
        } else {
          var if2528 = GraceDone;
          setLineNumber(495);    // compilenode member
          // call case 6: other requests
          var call2530 = callmethodChecked(var_blk, "matchingPattern", []);
          var opresult2533 = callmethodChecked(GraceFalse, "\u2260(1)", [1], call2530);
          if (Grace_isTrue(opresult2533)) {
            var if2534 = GraceDone;
            setLineNumber(496);    // compilenode member
            // call case 6: other requests
            var call2536 = callmethodChecked(var_arg, "value", []);
            // call case 6: other requests
            // call case 6: other requests
            var call2540 = callmethodChecked(var_blk, "matchingPattern", []);
            var call2541 = callmethodChecked(call2540, "value", []);
            var opresult2543 = callmethodChecked(call2541, "==(1)", [1], call2536);
            if (Grace_isTrue(opresult2543)) {
              setLineNumber(497);    // compilenode identifier
              var_pattern = var_arg;
              setLineNumber(498);    // compilenode array
              var array2544 = new PrimitiveGraceList([]);
              var_newparams = array2544;
              if2534 = GraceDone;
            }
            if2528 = if2534;
          }
          if2444 = if2528;
        }
        if2410 = if2444;
      } else {
        var if2545 = GraceDone;
        setLineNumber(503);    // compilenode member
        // call case 6: other requests
        var call2547 = callmethodChecked(var_blk, "matchingPattern", []);
        var opresult2550 = callmethodChecked(GraceFalse, "\u2260(1)", [1], call2547);
        if (Grace_isTrue(opresult2550)) {
          var if2551 = GraceDone;
          setLineNumber(504);    // compilenode member
          // call case 6: other requests
          var call2553 = callmethodChecked(var_arg, "value", []);
          // call case 6: other requests
          // call case 6: other requests
          var call2557 = callmethodChecked(var_blk, "matchingPattern", []);
          var call2558 = callmethodChecked(call2557, "value", []);
          var opresult2560 = callmethodChecked(call2558, "==(1)", [1], call2553);
          if (Grace_isTrue(opresult2560)) {
            setLineNumber(505);    // compilenode identifier
            var_pattern = var_arg;
            setLineNumber(506);    // compilenode array
            var array2561 = new PrimitiveGraceList([]);
            var_newparams = array2561;
            if2551 = GraceDone;
          }
          if2545 = if2551;
        }
        if2410 = if2545;
      }
      setLineNumber(510);    // compilenode member
      // call case 6: other requests
      var call2564 = callmethodChecked(var_blk, "body", []);
      // call case 6: other requests
      // call case 6: other requests
      var call2566 = callmethodChecked(var_ast, "blockNode", []);
      var call2567 = callmethodChecked(call2566, "new(2)", [2], var_newparams, call2564);
      var var_newblk = call2567;
      setLineNumber(511);    // compilenode identifier
      // call case 6: other requests
      var call2569 = callmethodChecked(var_newblk, "matchingPattern:=(1)", [1], var_pattern);
      setLineNumber(512);    // compilenode member
      // call case 6: other requests
      var call2572 = callmethodChecked(var_blk, "line", []);
      // call case 6: other requests
      var call2573 = callmethodChecked(var_newblk, "line:=(1)", [1], call2572);
      setLineNumber(513);    // compilenode identifier
      return var_newblk;
    };
    func2366.paramCounts = [1];
    this.methods["rewritematchblock(1)"] = func2366;
    func2366.definitionLine = 448;
    func2366.definitionModule = "identifierresolution";
    setLineNumber(516);    // compilenode method
    var func2574 = function(argcv) {    // method transformIdentifier(_)ancestors(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_node = arguments[curarg];
      curarg++;
      var var_as = arguments[curarg];
      curarg++;
      setModuleName("identifierresolution");
      setLineNumber(540);    // compilenode member
      // call case 6: other requests
      var call2576 = callmethodChecked(var_node, "nameString", []);
      var var_nm = call2576;
      setLineNumber(541);    // compilenode member
      // call case 6: other requests
      var call2578 = callmethodChecked(var_node, "scope", []);
      var var_nodeScope = call2578;
      setLineNumber(542);    // compilenode string
      var string2579 = new GraceString(":=(1)");
      var opresult2582 = callmethodChecked(var_nm, "++(1)", [1], string2579);
      var var_nmGets = opresult2582;
      setLineNumber(543);    // compilenode member
      // call case 6: other requests
      var call2585 = callmethodChecked(var_node, "line", []);
      // call case 6: other requests
      var call2587 = callmethodChecked(var_node, "linePos", []);
      // call case 6: other requests
      var call2588 = callmethodChecked(var_util, "setPosition(2)", [2], call2585, call2587);
      var if2589 = GraceDone;
      setLineNumber(544);    // compilenode member
      // call case 6: other requests
      var call2591 = callmethodChecked(var_node, "isAssigned", []);
      if (Grace_isTrue(call2591)) {
        var if2592 = GraceDone;
        setLineNumber(545);    // compilenode identifier
        // call case 6: other requests
        var call2594 = callmethodChecked(var_nodeScope, "hasDefinitionInNest(1)", [1], var_nmGets);
        if (Grace_isTrue(call2594)) {
          var if2595 = GraceDone;
          setLineNumber(546);    // compilenode member
          // call case 6: other requests
          var call2597 = callmethodChecked(var_k, "methdec", []);
          // call case 6: other requests
          var call2600 = callmethodChecked(var_nodeScope, "kindInNest(1)", [1], var_nmGets);
          var opresult2602 = callmethodChecked(call2600, "==(1)", [1], call2597);
          if (Grace_isTrue(opresult2602)) {
            setLineNumber(547);    // compilenode identifier
            return var_node;
          }
          if2592 = if2595;
        }
        if2589 = if2592;
      }
      setLineNumber(551);    // compilenode block
      var block2604 = new GraceBlock(this, 551, 0);
      block2604.real = function() {
        setLineNumber(552);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call2606 = callmethodChecked(this, "reportUndeclaredIdentifier(1)", [1], var_node);
        return call2606;
      };
      // call case 6: other requests
      setLineNumber(551);    // compilenode identifier
      var call2607 = callmethodChecked(var_nodeScope, "thatDefines(1)ifNone(1)", [1, 1], var_nm, block2604);
      var var_definingScope = call2607;
      setLineNumber(554);    // compilenode identifier
      // call case 6: other requests
      var call2609 = callmethodChecked(var_definingScope, "kind(1)", [1], var_nm);
      var var_nodeKind = call2609;
      var if2610 = GraceDone;
      setLineNumber(555);    // compilenode member
      // call case 6: other requests
      var call2612 = callmethodChecked(var_node, "isAssigned", []);
      if (Grace_isTrue(call2612)) {
        var if2613 = GraceDone;
        setLineNumber(556);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call2616 = callmethodChecked(var_nodeKind, "isAssignable", []);
        var call2617 = callmethodChecked(call2616, "not", []);
        if (Grace_isTrue(call2617)) {
          setLineNumber(557);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call2619 = callmethodChecked(this, "reportAssignmentTo(1)declaredInScope(1)", [1, 1], var_node, var_definingScope);
          if2613 = call2619;
        }
        if2610 = if2613;
      }
      var if2620 = GraceDone;
      setLineNumber(560);    // compilenode string
      var string2621 = new GraceString("outer");
      var opresult2624 = callmethodChecked(var_nm, "==(1)", [1], string2621);
      if (Grace_isTrue(opresult2624)) {
        setLineNumber(561);    // compilenode string
        var string2626 = new GraceString("self");
        // call case 6: other requests
        // call case 6: other requests
        var call2628 = callmethodChecked(var_ast, "identifierNode", []);
        var call2629 = callmethodChecked(call2628, "new(2)scope(1)", [2, 1], string2626, GraceFalse, var_nodeScope);
        var var_selfId = call2629;
        setLineNumber(562);    // compilenode string
        var string2631 = new GraceString("outer");
        // call case 6: other requests
        // call case 6: other requests
        var call2633 = callmethodChecked(var_ast, "memberNode", []);
        var call2634 = callmethodChecked(call2633, "new(2)scope(1)", [2, 1], string2631, var_selfId, var_nodeScope);
        var var_memb = call2634;
        var if2635 = GraceDone;
        setLineNumber(563);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call2638 = callmethodChecked(var_as, "parent", []);
        var call2639 = callmethodChecked(call2638, "isCall", []);
        if (Grace_isTrue(call2639)) {
          // call case 6: other requests
          // call case 6: other requests
          var call2642 = callmethodChecked(var_as, "parent", []);
          var call2643 = callmethodChecked(call2642, "onSelf", []);
          if2635 = call2643;
        }
        setLineNumber(564);    // compilenode identifier
        return var_memb;
      }
      var if2644 = GraceDone;
      setLineNumber(567);    // compilenode string
      var string2645 = new GraceString("self");
      var opresult2648 = callmethodChecked(var_nm, "==(1)", [1], string2645);
      if (Grace_isTrue(opresult2648)) {
        setLineNumber(568);    // compilenode identifier
        return var_node;
      }
      setLineNumber(570);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call2650 = callmethodChecked(this, "checkForAmbiguityOf(1)definedIn(1)as(1)", [1, 1, 1], var_node, var_definingScope, var_nodeKind);
      setLineNumber(571);    // compilenode member
      // call case 6: other requests
      var call2652 = callmethodChecked(var_definingScope, "variety", []);
      var var_v = call2652;
      var if2653 = GraceDone;
      setLineNumber(572);    // compilenode string
      var string2654 = new GraceString("built-in");
      var opresult2657 = callmethodChecked(var_v, "==(1)", [1], string2654);
      if (Grace_isTrue(opresult2657)) {
        return var_node;
      }
      var if2658 = GraceDone;
      setLineNumber(573);    // compilenode string
      var string2659 = new GraceString("dialect");
      var opresult2662 = callmethodChecked(var_v, "==(1)", [1], string2659);
      if (Grace_isTrue(opresult2662)) {
        setLineNumber(574);    // compilenode string
        var string2664 = new GraceString("prelude");
        // call case 6: other requests
        // call case 6: other requests
        var call2666 = callmethodChecked(var_ast, "identifierNode", []);
        var call2667 = callmethodChecked(call2666, "new(2)scope(1)", [2, 1], string2664, GraceFalse, var_nodeScope);
        var var_p = call2667;
        setLineNumber(575);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        // call case 6: other requests
        var call2671 = callmethodChecked(var_ast, "memberNode", []);
        var call2672 = callmethodChecked(call2671, "new(2)scope(1)", [2, 1], var_nm, var_p, var_nodeScope);
        var call2673 = callmethodChecked(call2672, "onSelf", []);
        return call2673;
      }
      var if2674 = GraceDone;
      setLineNumber(577);    // compilenode member
      // call case 6: other requests
      var call2676 = callmethodChecked(var_nodeKind, "isParameter", []);
      if (Grace_isTrue(call2676)) {
        return var_node;
      }
      var if2677 = GraceDone;
      setLineNumber(578);    // compilenode member
      // call case 6: other requests
      var call2679 = callmethodChecked(var_k, "typedec", []);
      var opresult2682 = callmethodChecked(var_nodeKind, "==(1)", [1], call2679);
      if (Grace_isTrue(opresult2682)) {
        return var_node;
      }
      var if2683 = GraceDone;
      setLineNumber(581);    // compilenode identifier
      // call case 6: other requests
      var call2685 = callmethodChecked(var_node, "inTypePositionWithAncestors(1)", [1], var_as);
      if (Grace_isTrue(call2685)) {
        return var_node;
      }
      var if2686 = GraceDone;
      setLineNumber(584);    // compilenode identifier
      var opresult2689 = callmethodChecked(var_definingScope, "==(1)", [1], var_moduleScope);
      if (Grace_isTrue(opresult2689)) {
        var if2690 = GraceDone;
        setLineNumber(585);    // compilenode member
        // call case 6: other requests
        var call2692 = callmethodChecked(var_k, "defdec", []);
        var opresult2695 = callmethodChecked(var_nodeKind, "==(1)", [1], call2692);
        if (Grace_isTrue(opresult2695)) {
          return var_node;
        }
        var if2696 = GraceDone;
        setLineNumber(586);    // compilenode member
        // call case 6: other requests
        var call2698 = callmethodChecked(var_k, "typedec", []);
        var opresult2701 = callmethodChecked(var_nodeKind, "==(1)", [1], call2698);
        if (Grace_isTrue(opresult2701)) {
          return var_node;
        }
        var if2702 = GraceDone;
        setLineNumber(587);    // compilenode member
        // call case 6: other requests
        var call2704 = callmethodChecked(var_k, "vardec", []);
        var opresult2707 = callmethodChecked(var_nodeKind, "==(1)", [1], call2704);
        if (Grace_isTrue(opresult2707)) {
          return var_node;
        }
        if2686 = if2702;
      }
      var if2708 = GraceDone;
      setLineNumber(589);    // compilenode member
      // call case 6: other requests
      var call2710 = callmethodChecked(var_nodeScope, "enclosingObjectScope", []);
      var opresult2713 = callmethodChecked(var_definingScope, "==(1)", [1], call2710);
      if (Grace_isTrue(opresult2713)) {
        setLineNumber(592);    // compilenode member
        // call case 6: other requests
        setLineNumber(591);    // compilenode string
        var string2717 = new GraceString("self");
        // call case 6: other requests
        // call case 6: other requests
        var call2719 = callmethodChecked(var_ast, "identifierNode", []);
        var call2720 = callmethodChecked(call2719, "new(2)scope(1)", [2, 1], string2717, GraceFalse, var_nodeScope);
        setLineNumber(592);    // compilenode identifier
        // call case 6: other requests
        setLineNumber(590);    // compilenode member
        // call case 6: other requests
        var call2722 = callmethodChecked(var_ast, "memberNode", []);
        var call2723 = callmethodChecked(call2722, "new(2)scope(1)", [2, 1], var_nm, call2720, var_nodeScope);
        var call2724 = callmethodChecked(call2723, "onSelf", []);
        return call2724;
      }
      var if2725 = GraceDone;
      setLineNumber(595);    // compilenode block
      var block2726 = new GraceBlock(this, 595, 0);
      block2726.real = function() {
        // call case 6: other requests
        var call2728 = callmethodChecked(var_nodeScope, "isInSameObjectAs(1)", [1], var_definingScope);
        return call2728;
      };
      setLineNumber(594);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call2732 = callmethodChecked(var_nodeScope, "isObjectScope", []);
      var call2733 = callmethodChecked(call2732, "not", []);
      var opresult2735 = callmethodChecked(call2733, "&&(1)", [1], block2726);
      if (Grace_isTrue(opresult2735)) {
        var if2736 = GraceDone;
        setLineNumber(596);    // compilenode member
        // call case 6: other requests
        var call2738 = callmethodChecked(var_k, "methdec", []);
        var opresult2741 = callmethodChecked(var_nodeKind, "==(1)", [1], call2738);
        if (Grace_isTrue(opresult2741)) {
          return var_node;
        }
        var if2742 = GraceDone;
        setLineNumber(597);    // compilenode member
        // call case 6: other requests
        var call2744 = callmethodChecked(var_k, "defdec", []);
        var opresult2747 = callmethodChecked(var_nodeKind, "==(1)", [1], call2744);
        if (Grace_isTrue(opresult2747)) {
          return var_node;
        }
        var if2748 = GraceDone;
        setLineNumber(598);    // compilenode member
        // call case 6: other requests
        var call2750 = callmethodChecked(var_k, "vardec", []);
        var opresult2753 = callmethodChecked(var_nodeKind, "==(1)", [1], call2750);
        if (Grace_isTrue(opresult2753)) {
          return var_node;
        }
        if2725 = if2748;
      }
      var if2754 = GraceDone;
      setLineNumber(600);    // compilenode string
      var string2755 = new GraceString("method");
      var opresult2758 = callmethodChecked(var_v, "==(1)", [1], string2755);
      if (Grace_isTrue(opresult2758)) {
        return var_node;
      }
      var if2759 = GraceDone;
      setLineNumber(606);    // compilenode string
      var string2760 = new GraceString("block");
      var opresult2763 = callmethodChecked(var_v, "==(1)", [1], string2760);
      if (Grace_isTrue(opresult2763)) {
        return var_node;
      }
      setLineNumber(607);    // compilenode identifier
      // call case 6: other requests
      var call2765 = callmethodChecked(var_nodeScope, "resolveOuterMethod(1)fromNode(1)", [1, 1], var_nm, var_node);
      return call2765;
    };
    func2574.paramCounts = [1, 1];
    this.methods["transformIdentifier(1)ancestors(1)"] = func2574;
    func2574.definitionLine = 516;
    func2574.definitionModule = "identifierresolution";
    setLineNumber(609);    // compilenode method
    var func2766 = function(argcv) {    // method checkForAmbiguityOf(_)definedIn(_)as(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_node = arguments[curarg];
      curarg++;
      var var_definingScope = arguments[curarg];
      curarg++;
      var var_kind = arguments[curarg];
      curarg++;
      setModuleName("identifierresolution");
      setLineNumber(610);    // compilenode member
      // call case 6: other requests
      var call2768 = callmethodChecked(var_node, "scope", []);
      var var_currentScope = call2768;
      var if2769 = GraceDone;
      setLineNumber(611);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call2772 = callmethodChecked(var_kind, "fromParent", []);
      var call2773 = callmethodChecked(call2772, "not", []);
      if (Grace_isTrue(call2773)) {
        return var_done;
      }
      var if2774 = GraceDone;
      setLineNumber(612);    // compilenode member
      // call case 6: other requests
      var call2777 = callmethodChecked(var_currentScope, "enclosingObjectScope", []);
      var opresult2779 = callmethodChecked(call2777, "\u2260(1)", [1], var_definingScope);
      if (Grace_isTrue(opresult2779)) {
        return var_done;
      }
      setLineNumber(613);    // compilenode member
      // call case 6: other requests
      var call2781 = callmethodChecked(var_node, "nameString", []);
      var var_name = call2781;
      setLineNumber(614);    // compilenode block
      var block2783 = new GraceBlock(this, 614, 0);
      block2783.real = function() {
        setLineNumber(616);    // compilenode identifier
        throw new ReturnException(var_done, returnTarget);
        return undefined;
      };
      // call case 6: other requests
      setLineNumber(614);    // compilenode member
      // call case 6: other requests
      var call2785 = callmethodChecked(var_definingScope, "parent", []);
      var call2786 = callmethodChecked(call2785, "thatDefines(1)ifNone(1)", [1, 1], var_name, block2783);
      var var_conflictingScope = call2786;
      setLineNumber(617);    // compilenode identifier
      // call case 6: other requests
      var call2788 = callmethodChecked(var_conflictingScope, "kind(1)", [1], var_name);
      var var_conflictingKind = call2788;
      var if2789 = GraceDone;
      setLineNumber(618);    // compilenode member
      // call case 6: other requests
      var call2791 = callmethodChecked(var_conflictingKind, "fromParent", []);
      if (Grace_isTrue(call2791)) {
        return var_done;
      }
      setLineNumber(619);    // compilenode string
      var string2792 = new GraceString("");
      var var_more = string2792;
      var if2793 = GraceDone;
      setLineNumber(620);    // compilenode identifier
      // call case 6: other requests
      // call case 6: other requests
      var call2796 = callmethodChecked(var_conflictingScope, "elementLines", []);
      var call2797 = callmethodChecked(call2796, "contains(1)", [1], var_name);
      if (Grace_isTrue(call2797)) {
        setLineNumber(621);    // compilenode identifier
        // call case 6: other requests
        // call case 6: other requests
        var call2800 = callmethodChecked(var_conflictingScope, "elementLines", []);
        var call2801 = callmethodChecked(call2800, "get(1)", [1], var_name);
        var var_earlierDef = call2801;
        var if2802 = GraceDone;
        setLineNumber(622);    // compilenode identifier
        var opresult2805 = callmethodChecked(var_earlierDef, "\u2260(1)", [1], new GraceNum(0));
        if (Grace_isTrue(opresult2805)) {
          setLineNumber(623);    // compilenode string
          var string2806 = new GraceString("");
          var string2809 = new GraceString(" at line ");
          var opresult2811 = callmethodChecked(string2809, "++(1)", [1], var_earlierDef);
          var opresult2813 = callmethodChecked(opresult2811, "++(1)", [1], string2806);
          var_more = opresult2813;
          if2802 = GraceDone;
        }
        if2793 = if2802;
      }
      setLineNumber(626);    // compilenode string
      var string2815 = new GraceString("");
      var string2818 = new GraceString(" as ");
      var string2821 = new GraceString("\n defines ");
      var string2824 = new GraceString("\nconflictingScope = ");
      var string2827 = new GraceString(" as ");
      var string2830 = new GraceString("\n defines ");
      var string2833 = new GraceString("currentScope = ");
      var opresult2835 = callmethodChecked(string2833, "++(1)", [1], var_currentScope);
      var opresult2837 = callmethodChecked(opresult2835, "++(1)", [1], string2830);
      var opresult2839 = callmethodChecked(opresult2837, "++(1)", [1], var_name);
      var opresult2841 = callmethodChecked(opresult2839, "++(1)", [1], string2827);
      var opresult2843 = callmethodChecked(opresult2841, "++(1)", [1], var_kind);
      var opresult2845 = callmethodChecked(opresult2843, "++(1)", [1], string2824);
      var opresult2847 = callmethodChecked(opresult2845, "++(1)", [1], var_conflictingScope);
      var opresult2849 = callmethodChecked(opresult2847, "++(1)", [1], string2821);
      var opresult2851 = callmethodChecked(opresult2849, "++(1)", [1], var_name);
      var opresult2853 = callmethodChecked(opresult2851, "++(1)", [1], string2818);
      var opresult2855 = callmethodChecked(opresult2853, "++(1)", [1], var_conflictingKind);
      var opresult2857 = callmethodChecked(opresult2855, "++(1)", [1], string2815);
      // call case 6: other requests
      var call2858 = callmethodChecked(var_util, "log(1)verbose(1)", [1, 1], new GraceNum(60), opresult2857);
      setLineNumber(627);    // compilenode string
      var string2860 = new GraceString(".");
      var string2863 = new GraceString(", and defined in an enclosing scope");
      var string2866 = new GraceString(" is both ");
      // call case 6: other requests
      var call2869 = callmethodChecked(var_node, "canonicalName", []);
      var string2871 = new GraceString("");
      var opresult2873 = callmethodChecked(string2871, "++(1)", [1], call2869);
      var opresult2875 = callmethodChecked(opresult2873, "++(1)", [1], string2866);
      var opresult2877 = callmethodChecked(opresult2875, "++(1)", [1], var_kind);
      var opresult2879 = callmethodChecked(opresult2877, "++(1)", [1], string2863);
      var opresult2881 = callmethodChecked(opresult2879, "++(1)", [1], var_more);
      var opresult2883 = callmethodChecked(opresult2881, "++(1)", [1], string2860);
      setLineNumber(628);    // compilenode member
      // call case 6: other requests
      var call2885 = callmethodChecked(var_node, "line", []);
      // call case 6: other requests
      var call2887 = callmethodChecked(var_node, "linePos", []);
      // call case 6: other requests
      var call2890 = callmethodChecked(var_name, "size", []);
      // call case 6: other requests
      var call2893 = callmethodChecked(var_node, "linePos", []);
      var opresult2895 = callmethodChecked(call2893, "+(1)", [1], call2890);
      var diff2897 = callmethodChecked(opresult2895, "-(1)", [1], new GraceNum(1));
      // call case 6: other requests
      setLineNumber(627);    // compilenode identifier
      var call2898 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], opresult2883, call2885, call2887, diff2897);
      return call2898;
    };
    func2766.paramCounts = [1, 1, 1];
    this.methods["checkForAmbiguityOf(1)definedIn(1)as(1)"] = func2766;
    func2766.definitionLine = 609;
    func2766.definitionModule = "identifierresolution";
    setLineNumber(630);    // compilenode method
    var func2899 = function(argcv) {    // method checkForReservedName(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_node = arguments[curarg];
      curarg++;
      setModuleName("identifierresolution");
      setLineNumber(631);    // compilenode member
      // call case 6: other requests
      var call2901 = callmethodChecked(var_node, "nameString", []);
      var var_ns = call2901;
      var if2902 = GraceDone;
      setLineNumber(632);    // compilenode identifier
      // call case 6: other requests
      var call2904 = callmethodChecked(var_reserved, "contains(1)", [1], var_ns);
      if (Grace_isTrue(call2904)) {
        setLineNumber(633);    // compilenode string
        var string2906 = new GraceString(" is a reserved name and cannot be re-declared.");
        var string2909 = new GraceString("");
        var opresult2911 = callmethodChecked(string2909, "++(1)", [1], var_ns);
        var opresult2913 = callmethodChecked(opresult2911, "++(1)", [1], string2906);
        setLineNumber(634);    // compilenode member
        // call case 6: other requests
        var call2915 = callmethodChecked(var_node, "line", []);
        // call case 6: other requests
        var call2917 = callmethodChecked(var_node, "linePos", []);
        // call case 6: other requests
        var call2920 = callmethodChecked(var_ns, "size", []);
        // call case 6: other requests
        var call2923 = callmethodChecked(var_node, "linePos", []);
        var opresult2925 = callmethodChecked(call2923, "+(1)", [1], call2920);
        var diff2927 = callmethodChecked(opresult2925, "-(1)", [1], new GraceNum(1));
        // call case 6: other requests
        setLineNumber(633);    // compilenode identifier
        var call2928 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], opresult2913, call2915, call2917, diff2927);
        if2902 = call2928;
      }
      return if2902;
    };
    func2899.paramCounts = [1];
    this.methods["checkForReservedName(1)"] = func2899;
    func2899.definitionLine = 630;
    func2899.definitionModule = "identifierresolution";
    setLineNumber(638);    // compilenode method
    var func2929 = function(argcv) {    // method isSameIgnoringCase(_,_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_c1 = arguments[curarg];
      curarg++;
      var var_c2 = arguments[curarg];
      curarg++;
      setModuleName("identifierresolution");
      var if2930 = GraceDone;
      setLineNumber(640);    // compilenode identifier
      var opresult2933 = callmethodChecked(var_c1, "==(1)", [1], var_c2);
      if (Grace_isTrue(opresult2933)) {
        return GraceTrue;
      }
      setLineNumber(641);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call2937 = callmethodChecked(var_c2, "ord", []);
      // call case 6: other requests
      var call2940 = callmethodChecked(var_c1, "ord", []);
      var diff2942 = callmethodChecked(call2940, "-(1)", [1], call2937);
      var call2943 = callmethodChecked(diff2942, "abs", []);
      var opresult2945 = callmethodChecked(call2943, "==(1)", [1], new GraceNum(32));
      return opresult2945;
    };
    func2929.paramCounts = [2];
    this.methods["isSameIgnoringCase(2)"] = func2929;
    func2929.definitionLine = 638;
    func2929.definitionModule = "identifierresolution";
    setLineNumber(644);    // compilenode method
    var func2946 = function(argcv) {    // method reportUndeclaredIdentifier(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_node = arguments[curarg];
      curarg++;
      setModuleName("identifierresolution");
      setLineNumber(645);    // compilenode member
      // call case 6: other requests
      var call2948 = callmethodChecked(var_node, "scope", []);
      var var_nodeScope = call2948;
      setLineNumber(646);    // compilenode member
      // call case 6: other requests
      var call2950 = callmethodChecked(var_node, "nameString", []);
      var var_nm = call2950;
      setLineNumber(647);    // compilenode member
      // call case 6: other requests
      var call2952 = callmethodChecked(var_nm, "size", []);
      var var_nmSize = call2952;
      setLineNumber(648);    // compilenode identifier
      var prod2955 = callmethodChecked(var_nmSize, "*(1)", [1], new GraceNum(2));
      var var_sizeLimit = prod2955;
      setLineNumber(650);    // compilenode member
      // call case 6: other requests
      var quotient2960 = callmethodChecked(var_nmSize, "/(1)", [1], new GraceNum(3));
      var opresult2962 = callmethodChecked(quotient2960, "+(1)", [1], new GraceNum(1));
      var call2963 = callmethodChecked(opresult2962, "truncated", []);
      var var_thresh = call2963;
      setLineNumber(651);    // compilenode array
      var array2964 = new PrimitiveGraceList([]);
      var var_suggestions = array2964;
      setLineNumber(652);    // compilenode member
      // call case 6: other requests
      var call2966 = callmethodChecked(var_nm, "first", []);
      var var_startChar = call2966;
      setLineNumber(653);    // compilenode vardec
      var var_suggestion;
      setLineNumber(654);    // compilenode block
      var block2968 = new GraceBlock(this, 654, 1);
      setLineNumber(1);    // compilenode identifier
      block2968.real = function(var_s) {
        setLineNumber(655);    // compilenode block
        var block2970 = new GraceBlock(this, 655, 1);
        setLineNumber(1);    // compilenode identifier
        block2970.real = function(var_v) {
          var if2971 = GraceDone;
          setLineNumber(656);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call2975 = callmethodChecked(var_v, "size", []);
          var diff2978 = callmethodChecked(var_nmSize, "-(1)", [1], call2975);
          var call2979 = callmethodChecked(diff2978, "abs", []);
          var opresult2981 = callmethodChecked(call2979, "<(1)", [1], var_thresh);
          if (Grace_isTrue(opresult2981)) {
            setLineNumber(657);    // compilenode string
            var string2983 = new GraceString("");
            var string2986 = new GraceString(" within ");
            var string2989 = new GraceString(" to ");
            var string2992 = new GraceString("matching ");
            var opresult2994 = callmethodChecked(string2992, "++(1)", [1], var_nm);
            var opresult2996 = callmethodChecked(opresult2994, "++(1)", [1], string2989);
            var opresult2998 = callmethodChecked(opresult2996, "++(1)", [1], var_v);
            var opresult3000 = callmethodChecked(opresult2998, "++(1)", [1], string2986);
            var opresult3002 = callmethodChecked(opresult3000, "++(1)", [1], var_thresh);
            var opresult3004 = callmethodChecked(opresult3002, "++(1)", [1], string2983);
            // call case 6: other requests
            var call3005 = callmethodChecked(var_util, "log(1)verbose(1)", [1, 1], new GraceNum(100), opresult3004);
            setLineNumber(658);    // compilenode identifier
            // call case 6: other requests
            var call3007 = callmethodChecked(var_errormessages, "name(1)matches(1)within(1)", [1, 1, 1], var_nm, var_v, var_thresh);
            var var_matchExtent = call3007;
            var if3008 = GraceDone;
            setLineNumber(660);    // compilenode block
            var block3009 = new GraceBlock(this, 660, 0);
            block3009.real = function() {
              setLineNumber(661);    // compilenode member
              // call case 6: other requests
              var call3011 = callmethodChecked(var_v, "size", []);
              var opresult3014 = callmethodChecked(var_matchExtent, "==(1)", [1], call3011);
              var opresult3018 = callmethodChecked(var_nmSize, ">(1)", [1], new GraceNum(2));
              var opresult3020 = callmethodChecked(opresult3018, "&&(1)", [1], opresult3014);
              return opresult3020;
            };
            setLineNumber(660);    // compilenode member
            // call case 6: other requests
            var call3024 = callmethodChecked(var_v, "size", []);
            var opresult3026 = callmethodChecked(call3024, "\u2264(1)", [1], var_sizeLimit);
            // call case 6: other requests
            var call3029 = callmethodChecked(var_v, "size", []);
            var opresult3032 = callmethodChecked(var_nmSize, "\u2264(1)", [1], call3029);
            setLineNumber(659);    // compilenode member
            // call case 6: other requests
            var call3036 = callmethodChecked(var_v, "first", []);
            // call case 4: self request
            onSelf = true;
            var call3037 = callmethodChecked(this, "isSameIgnoringCase(2)", [2], call3036, var_startChar);
            var opresult3041 = callmethodChecked(var_matchExtent, ">(1)", [1], new GraceNum(1));
            var opresult3043 = callmethodChecked(opresult3041, "&&(1)", [1], call3037);
            var opresult3045 = callmethodChecked(opresult3043, "&&(1)", [1], opresult3032);
            var opresult3047 = callmethodChecked(opresult3045, "&&(1)", [1], opresult3026);
            var opresult3049 = callmethodChecked(opresult3047, "||(1)", [1], block3009);
            if (Grace_isTrue(opresult3049)) {
              setLineNumber(662);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              var call3052 = callmethodChecked(var_errormessages, "suggestion", []);
              var call3053 = callmethodChecked(call3052, "new", []);
              var_suggestion = call3053;
              setLineNumber(663);    // compilenode member
              // call case 6: other requests
              var call3056 = callmethodChecked(var_node, "linePos", []);
              setLineNumber(664);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              var call3060 = callmethodChecked(var_node, "value", []);
              var call3061 = callmethodChecked(call3060, "size", []);
              setLineNumber(663);    // compilenode member
              // call case 6: other requests
              var call3064 = callmethodChecked(var_node, "linePos", []);
              var opresult3066 = callmethodChecked(call3064, "+(1)", [1], call3061);
              var diff3068 = callmethodChecked(opresult3066, "-(1)", [1], new GraceNum(1));
              setLineNumber(664);    // compilenode member
              // call case 6: other requests
              var call3070 = callmethodChecked(var_node, "line", []);
              // call case 6: other requests
              setLineNumber(663);    // compilenode identifier
              var call3071 = callmethodChecked(var_suggestion, "replaceRange(2)with(1)onLine(1)", [2, 1, 1], call3056, diff3068, var_v, call3070);
              setLineNumber(665);    // compilenode identifier
              // call case 6: other requests
              var call3073 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
              if3008 = call3073;
            }
            if2971 = if3008;
          }
          return if2971;
        };
        // call case 6: other requests
        setLineNumber(655);    // compilenode member
        // call case 6: other requests
        var call3075 = callmethodChecked(var_s, "elements", []);
        var call3076 = callmethodChecked(call3075, "keysDo(1)", [1], block2970);
        return call3076;
      };
      // call case 6: other requests
      setLineNumber(654);    // compilenode identifier
      var call3077 = callmethodChecked(var_nodeScope, "withSurroundingScopesDo(1)", [1], block2968);
      setLineNumber(670);    // compilenode block
      var block3079 = new GraceBlock(this, 670, 1);
      setLineNumber(1);    // compilenode identifier
      block3079.real = function(var_s) {
        var if3080 = GraceDone;
        setLineNumber(671);    // compilenode identifier
        // call case 6: other requests
        // call case 6: other requests
        // call case 6: other requests
        var call3084 = callmethodChecked(var_nodeScope, "elementScopes", []);
        var call3085 = callmethodChecked(call3084, "get(1)", [1], var_s);
        var call3086 = callmethodChecked(call3085, "contains(1)", [1], var_nm);
        if (Grace_isTrue(call3086)) {
          setLineNumber(672);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call3089 = callmethodChecked(var_errormessages, "suggestion", []);
          var call3090 = callmethodChecked(call3089, "new", []);
          var_suggestion = call3090;
          setLineNumber(673);    // compilenode string
          var string3092 = new GraceString(".");
          var string3095 = new GraceString("");
          var opresult3097 = callmethodChecked(string3095, "++(1)", [1], var_s);
          var opresult3099 = callmethodChecked(opresult3097, "++(1)", [1], string3092);
          // call case 6: other requests
          var call3101 = callmethodChecked(var_node, "linePos", []);
          // call case 6: other requests
          var call3103 = callmethodChecked(var_node, "line", []);
          // call case 6: other requests
          var call3104 = callmethodChecked(var_suggestion, "insert(1)atPosition(1)onLine(1)", [1, 1, 1], opresult3099, call3101, call3103);
          setLineNumber(674);    // compilenode identifier
          // call case 6: other requests
          var call3106 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
          if3080 = call3106;
        }
        return if3080;
      };
      // call case 6: other requests
      setLineNumber(670);    // compilenode member
      // call case 6: other requests
      var call3108 = callmethodChecked(var_nodeScope, "elementScopes", []);
      var call3109 = callmethodChecked(call3108, "keysDo(1)", [1], block3079);
      setLineNumber(677);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call3112 = callmethodChecked(var_node, "value", []);
      var call3113 = callmethodChecked(call3112, "size", []);
      var var_highlightLength = call3113;
      var if3114 = GraceDone;
      setLineNumber(678);    // compilenode member
      // call case 6: other requests
      var call3116 = callmethodChecked(var_node, "value", []);
      var string3119 = new GraceString("()");
      var string3120 = new GraceString("XX");
      // call case 6: other requests
      // call case 6: other requests
      var call3122 = callmethodChecked(var_node, "value", []);
      var call3123 = callmethodChecked(call3122, "replace(1)with(1)", [1, 1], string3119, string3120);
      var opresult3125 = callmethodChecked(call3123, "\u2260(1)", [1], call3116);
      if (Grace_isTrue(opresult3125)) {
        setLineNumber(679);    // compilenode num
        var var_i = new GraceNum(0);
        setLineNumber(680);    // compilenode identifier
        var var_found = GraceFalse;
        setLineNumber(681);    // compilenode member
        // call case 6: other requests
        var call3128 = callmethodChecked(var_node, "value", []);
        var block3129 = new GraceBlock(this, 681, 1);
        setLineNumber(1);    // compilenode identifier
        block3129.real = function(var_c) {
          var if3130 = GraceDone;
          setLineNumber(682);    // compilenode call
          // call case 6: other requests
          var call3132 = callmethodChecked(var_found, "prefix!", [0]);
          var string3134 = new GraceString("(");
          var opresult3137 = callmethodChecked(var_c, "==(1)", [1], string3134);
          var opresult3139 = callmethodChecked(opresult3137, "&&(1)", [1], call3132);
          if (Grace_isTrue(opresult3139)) {
            setLineNumber(683);    // compilenode identifier
            var_highlightLength = var_i;
            setLineNumber(684);    // compilenode identifier
            var_found = GraceTrue;
            if3130 = GraceDone;
          }
          setLineNumber(686);    // compilenode identifier
          var opresult3142 = callmethodChecked(var_i, "+(1)", [1], new GraceNum(1));
          var_i = opresult3142;
          return GraceDone;
        };
        // call case 5: prelude request
        var call3143 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call3128, block3129);
        if3114 = call3143;
      }
      var if3144 = GraceDone;
      setLineNumber(689);    // compilenode member
      // call case 6: other requests
      var call3146 = callmethodChecked(var_node, "inRequest", []);
      if (Grace_isTrue(call3146)) {
        setLineNumber(690);    // compilenode string
        var string3147 = new GraceString("");
        var var_extra = string3147;
        var if3148 = GraceDone;
        setLineNumber(691);    // compilenode string
        var string3149 = new GraceString("while");
        // call case 6: other requests
        var call3152 = callmethodChecked(var_node, "value", []);
        var opresult3154 = callmethodChecked(call3152, "==(1)", [1], string3149);
        if (Grace_isTrue(opresult3154)) {
          setLineNumber(692);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call3157 = callmethodChecked(var_errormessages, "suggestion", []);
          var call3158 = callmethodChecked(call3157, "new", []);
          var_suggestion = call3158;
          setLineNumber(693);    // compilenode string
          var string3160 = new GraceString(" do { }");
          // call case 6: other requests
          var call3162 = callmethodChecked(var_node, "line", []);
          // call case 6: other requests
          var call3163 = callmethodChecked(var_suggestion, "append(1)onLine(1)", [1, 1], string3160, call3162);
          setLineNumber(694);    // compilenode identifier
          // call case 6: other requests
          var call3165 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
          if3148 = call3165;
        }
        var if3166 = GraceDone;
        setLineNumber(696);    // compilenode string
        var string3167 = new GraceString("for");
        // call case 6: other requests
        var call3170 = callmethodChecked(var_node, "value", []);
        var opresult3172 = callmethodChecked(call3170, "==(1)", [1], string3167);
        if (Grace_isTrue(opresult3172)) {
          setLineNumber(697);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call3175 = callmethodChecked(var_errormessages, "suggestion", []);
          var call3176 = callmethodChecked(call3175, "new", []);
          var_suggestion = call3176;
          setLineNumber(698);    // compilenode string
          var string3178 = new GraceString(" do { aVarName -> }");
          // call case 6: other requests
          var call3180 = callmethodChecked(var_node, "line", []);
          // call case 6: other requests
          var call3181 = callmethodChecked(var_suggestion, "append(1)onLine(1)", [1, 1], string3178, call3180);
          setLineNumber(699);    // compilenode identifier
          // call case 6: other requests
          var call3183 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
          if3166 = call3183;
        }
        setLineNumber(701);    // compilenode string
        var string3185 = new GraceString("");
        var string3188 = new GraceString("'. This may be a spelling mistake or an attempt to access a method in another scope.");
        var string3191 = new GraceString("unknown method '");
        var opresult3193 = callmethodChecked(string3191, "++(1)", [1], var_nm);
        var opresult3195 = callmethodChecked(opresult3193, "++(1)", [1], string3188);
        var opresult3197 = callmethodChecked(opresult3195, "++(1)", [1], var_extra);
        var opresult3199 = callmethodChecked(opresult3197, "++(1)", [1], string3185);
        setLineNumber(702);    // compilenode member
        // call case 6: other requests
        var call3201 = callmethodChecked(var_node, "line", []);
        // call case 6: other requests
        var call3203 = callmethodChecked(var_node, "linePos", []);
        // call case 6: other requests
        var call3207 = callmethodChecked(var_node, "linePos", []);
        var opresult3209 = callmethodChecked(call3207, "+(1)", [1], var_highlightLength);
        var diff3211 = callmethodChecked(opresult3209, "-(1)", [1], new GraceNum(1));
        setLineNumber(704);    // compilenode identifier
        // call case 6: other requests
        setLineNumber(701);    // compilenode identifier
        var call3212 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)withSuggestions(1)", [1, 3, 1], opresult3199, call3201, call3203, diff3211, var_suggestions);
        if3144 = call3212;
      }
      setLineNumber(706);    // compilenode string
      var string3214 = new GraceString("'. This may be a spelling mistake or an attempt to access a variable in another scope.");
      var string3217 = new GraceString("unknown variable or method '");
      var opresult3219 = callmethodChecked(string3217, "++(1)", [1], var_nm);
      var opresult3221 = callmethodChecked(opresult3219, "++(1)", [1], string3214);
      setLineNumber(707);    // compilenode member
      // call case 6: other requests
      var call3223 = callmethodChecked(var_node, "line", []);
      // call case 6: other requests
      var call3225 = callmethodChecked(var_node, "linePos", []);
      // call case 6: other requests
      var call3229 = callmethodChecked(var_node, "linePos", []);
      var opresult3231 = callmethodChecked(call3229, "+(1)", [1], var_highlightLength);
      var diff3233 = callmethodChecked(opresult3231, "-(1)", [1], new GraceNum(1));
      // call case 6: other requests
      setLineNumber(706);    // compilenode identifier
      var call3234 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)withSuggestions(1)", [1, 3, 1], opresult3221, call3223, call3225, diff3233, var_suggestions);
      return call3234;
    };
    func2946.paramCounts = [1];
    this.methods["reportUndeclaredIdentifier(1)"] = func2946;
    func2946.definitionLine = 644;
    func2946.definitionModule = "identifierresolution";
    setLineNumber(709);    // compilenode method
    var func3235 = function(argcv) {    // method reportAssignmentTo(_)declaredInScope(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_node = arguments[curarg];
      curarg++;
      var var_scp = arguments[curarg];
      curarg++;
      setModuleName("identifierresolution");
      setLineNumber(712);    // compilenode member
      // call case 6: other requests
      var call3237 = callmethodChecked(var_node, "nameString", []);
      var var_name = call3237;
      setLineNumber(713);    // compilenode identifier
      // call case 6: other requests
      var call3239 = callmethodChecked(var_scp, "kind(1)", [1], var_name);
      var var_kind = call3239;
      setLineNumber(714);    // compilenode string
      var string3240 = new GraceString("");
      var var_more = string3240;
      setLineNumber(715);    // compilenode array
      var array3241 = new PrimitiveGraceList([]);
      var var_suggestions = array3241;
      var if3242 = GraceDone;
      setLineNumber(716);    // compilenode identifier
      // call case 6: other requests
      // call case 6: other requests
      var call3245 = callmethodChecked(var_scp, "elementLines", []);
      var call3246 = callmethodChecked(call3245, "contains(1)", [1], var_name);
      if (Grace_isTrue(call3246)) {
        setLineNumber(717);    // compilenode string
        var string3247 = new GraceString("");
        // call case 6: other requests
        // call case 6: other requests
        var call3251 = callmethodChecked(var_scp, "elementLines", []);
        var call3252 = callmethodChecked(call3251, "get(1)", [1], var_name);
        var string3254 = new GraceString(" on line ");
        var opresult3256 = callmethodChecked(string3254, "++(1)", [1], call3252);
        var opresult3258 = callmethodChecked(opresult3256, "++(1)", [1], string3247);
        var_more = opresult3258;
        if3242 = GraceDone;
      }
      var if3259 = GraceDone;
      setLineNumber(719);    // compilenode member
      // call case 6: other requests
      var call3261 = callmethodChecked(var_k, "selfDef", []);
      var opresult3264 = callmethodChecked(var_kind, "==(1)", [1], call3261);
      if (Grace_isTrue(opresult3264)) {
        setLineNumber(721);    // compilenode string
        var string3266 = new GraceString("it always refers to the current object.");
        setLineNumber(720);    // compilenode string
        var string3268 = new GraceString("' cannot be re-bound; ");
        var string3271 = new GraceString("'");
        var opresult3273 = callmethodChecked(string3271, "++(1)", [1], var_name);
        var opresult3275 = callmethodChecked(opresult3273, "++(1)", [1], string3268);
        var opresult3277 = callmethodChecked(opresult3275, "++(1)", [1], string3266);
        setLineNumber(722);    // compilenode member
        // call case 6: other requests
        var call3279 = callmethodChecked(var_node, "line", []);
        // call case 6: other requests
        var call3281 = callmethodChecked(var_node, "linePos", []);
        // call case 6: other requests
        var call3284 = callmethodChecked(var_name, "size", []);
        // call case 6: other requests
        var call3287 = callmethodChecked(var_node, "linePos", []);
        var opresult3289 = callmethodChecked(call3287, "+(1)", [1], call3284);
        var diff3291 = callmethodChecked(opresult3289, "-(1)", [1], new GraceNum(1));
        // call case 6: other requests
        setLineNumber(720);    // compilenode identifier
        var call3292 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], opresult3277, call3279, call3281, diff3291);
        if3259 = call3292;
      } else {
        var if3293 = GraceDone;
        setLineNumber(723);    // compilenode identifier
        // call case 6: other requests
        var call3295 = callmethodChecked(var_reserved, "contains(1)", [1], var_name);
        if (Grace_isTrue(call3295)) {
          setLineNumber(725);    // compilenode string
          var string3297 = new GraceString("cannot be re-bound.");
          setLineNumber(724);    // compilenode string
          var string3299 = new GraceString("' is a reserved name and ");
          var string3302 = new GraceString("'");
          var opresult3304 = callmethodChecked(string3302, "++(1)", [1], var_name);
          var opresult3306 = callmethodChecked(opresult3304, "++(1)", [1], string3299);
          var opresult3308 = callmethodChecked(opresult3306, "++(1)", [1], string3297);
          setLineNumber(726);    // compilenode member
          // call case 6: other requests
          var call3310 = callmethodChecked(var_node, "line", []);
          // call case 6: other requests
          var call3312 = callmethodChecked(var_node, "linePos", []);
          // call case 6: other requests
          var call3315 = callmethodChecked(var_name, "size", []);
          // call case 6: other requests
          var call3318 = callmethodChecked(var_node, "linePos", []);
          var opresult3320 = callmethodChecked(call3318, "+(1)", [1], call3315);
          var diff3322 = callmethodChecked(opresult3320, "-(1)", [1], new GraceNum(1));
          // call case 6: other requests
          setLineNumber(724);    // compilenode identifier
          var call3323 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], opresult3308, call3310, call3312, diff3322);
          if3293 = call3323;
        } else {
          var if3324 = GraceDone;
          setLineNumber(727);    // compilenode member
          // call case 6: other requests
          var call3326 = callmethodChecked(var_k, "defdec", []);
          var opresult3329 = callmethodChecked(var_kind, "==(1)", [1], call3326);
          if (Grace_isTrue(opresult3329)) {
            var if3330 = GraceDone;
            setLineNumber(728);    // compilenode identifier
            // call case 6: other requests
            // call case 6: other requests
            var call3333 = callmethodChecked(var_scp, "elementTokens", []);
            var call3334 = callmethodChecked(call3333, "contains(1)", [1], var_name);
            if (Grace_isTrue(call3334)) {
              setLineNumber(729);    // compilenode identifier
              // call case 6: other requests
              // call case 6: other requests
              var call3337 = callmethodChecked(var_scp, "elementTokens", []);
              var call3338 = callmethodChecked(call3337, "get(1)", [1], var_name);
              var var_tok = call3338;
              setLineNumber(730);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              var call3341 = callmethodChecked(var_errormessages, "suggestion", []);
              var call3342 = callmethodChecked(call3341, "new", []);
              var var_sugg = call3342;
              var if3343 = GraceDone;
              setLineNumber(731);    // compilenode string
              var string3344 = new GraceString("def");
              // call case 6: other requests
              var call3347 = callmethodChecked(var_tok, "value", []);
              var opresult3349 = callmethodChecked(call3347, "==(1)", [1], string3344);
              if (Grace_isTrue(opresult3349)) {
                setLineNumber(732);    // compilenode identifier
                var var_eq = var_tok;
                setLineNumber(733);    // compilenode block
                var block3351 = new GraceBlock(this, 733, 0);
                block3351.real = function() {
                  var string3352 = new GraceString("=");
                  // call case 6: other requests
                  var call3355 = callmethodChecked(var_eq, "value", []);
                  var opresult3357 = callmethodChecked(call3355, "\u2260(1)", [1], string3352);
                  var string3359 = new GraceString("op");
                  // call case 6: other requests
                  var call3362 = callmethodChecked(var_eq, "kind", []);
                  var opresult3364 = callmethodChecked(call3362, "\u2260(1)", [1], string3359);
                  var opresult3366 = callmethodChecked(opresult3364, "||(1)", [1], opresult3357);
                  return opresult3366;
                };
                var block3367 = new GraceBlock(this, 733, 0);
                block3367.real = function() {
                  setLineNumber(734);    // compilenode member
                  // call case 6: other requests
                  var call3369 = callmethodChecked(var_eq, "next", []);
                  var_eq = call3369;
                  return GraceDone;
                };
                // call case 5: prelude request
                var call3370 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block3351, block3367);
                setLineNumber(736);    // compilenode string
                var string3372 = new GraceString(":=");
                // call case 6: other requests
                var call3373 = callmethodChecked(var_sugg, "replaceToken(1)with(1)", [1, 1], var_eq, string3372);
                setLineNumber(737);    // compilenode string
                var string3375 = new GraceString("var");
                // call case 6: other requests
                var call3376 = callmethodChecked(var_sugg, "replaceToken(1)with(1)", [1, 1], var_tok, string3375);
                setLineNumber(738);    // compilenode identifier
                // call case 6: other requests
                var call3378 = callmethodChecked(var_suggestions, "push(1)", [1], var_sugg);
                if3343 = call3378;
              } else {
                setLineNumber(741);    // compilenode string
                var string3380 = new GraceString(".");
                var string3383 = new GraceString("'");
                // call case 6: other requests
                var call3386 = callmethodChecked(var_tok, "value", []);
                var string3388 = new GraceString("because it was declared as a '");
                var opresult3390 = callmethodChecked(string3388, "++(1)", [1], call3386);
                var opresult3392 = callmethodChecked(opresult3390, "++(1)", [1], string3383);
                var opresult3394 = callmethodChecked(opresult3392, "++(1)", [1], var_more);
                var opresult3396 = callmethodChecked(opresult3394, "++(1)", [1], string3380);
                setLineNumber(740);    // compilenode string
                var string3398 = new GraceString("' cannot be changed ");
                var string3401 = new GraceString("'");
                var opresult3403 = callmethodChecked(string3401, "++(1)", [1], var_name);
                var opresult3405 = callmethodChecked(opresult3403, "++(1)", [1], string3398);
                var opresult3407 = callmethodChecked(opresult3405, "++(1)", [1], opresult3396);
                setLineNumber(742);    // compilenode member
                // call case 6: other requests
                var call3409 = callmethodChecked(var_node, "line", []);
                // call case 6: other requests
                var call3411 = callmethodChecked(var_node, "linePos", []);
                // call case 6: other requests
                var call3414 = callmethodChecked(var_name, "size", []);
                // call case 6: other requests
                var call3417 = callmethodChecked(var_node, "linePos", []);
                var opresult3419 = callmethodChecked(call3417, "+(1)", [1], call3414);
                var diff3421 = callmethodChecked(opresult3419, "-(1)", [1], new GraceNum(1));
                // call case 6: other requests
                setLineNumber(740);    // compilenode identifier
                var call3422 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], opresult3407, call3409, call3411, diff3421);
                if3343 = call3422;
              }
              if3330 = if3343;
            }
            setLineNumber(747);    // compilenode string
            var string3424 = new GraceString("To make it a variable, use 'var' in the declaration");
            setLineNumber(746);    // compilenode string
            var string3426 = new GraceString(". ");
            var string3429 = new GraceString("because it was declared with 'def'");
            var opresult3431 = callmethodChecked(string3429, "++(1)", [1], var_more);
            var opresult3433 = callmethodChecked(opresult3431, "++(1)", [1], string3426);
            setLineNumber(745);    // compilenode string
            var string3435 = new GraceString("' cannot be changed ");
            var string3438 = new GraceString("'");
            var opresult3440 = callmethodChecked(string3438, "++(1)", [1], var_name);
            var opresult3442 = callmethodChecked(opresult3440, "++(1)", [1], string3435);
            var opresult3444 = callmethodChecked(opresult3442, "++(1)", [1], opresult3433);
            var opresult3446 = callmethodChecked(opresult3444, "++(1)", [1], string3424);
            setLineNumber(748);    // compilenode member
            // call case 6: other requests
            var call3448 = callmethodChecked(var_node, "line", []);
            // call case 6: other requests
            var call3450 = callmethodChecked(var_node, "linePos", []);
            // call case 6: other requests
            var call3453 = callmethodChecked(var_name, "size", []);
            // call case 6: other requests
            var call3456 = callmethodChecked(var_node, "linePos", []);
            var opresult3458 = callmethodChecked(call3456, "+(1)", [1], call3453);
            var diff3460 = callmethodChecked(opresult3458, "-(1)", [1], new GraceNum(1));
            setLineNumber(749);    // compilenode identifier
            // call case 6: other requests
            setLineNumber(745);    // compilenode identifier
            var call3461 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)withSuggestions(1)", [1, 3, 1], opresult3446, call3448, call3450, diff3460, var_suggestions);
            if3324 = call3461;
          } else {
            var if3462 = GraceDone;
            setLineNumber(750);    // compilenode member
            // call case 6: other requests
            var call3464 = callmethodChecked(var_k, "typedec", []);
            var opresult3467 = callmethodChecked(var_kind, "==(1)", [1], call3464);
            if (Grace_isTrue(opresult3467)) {
              setLineNumber(752);    // compilenode string
              var string3469 = new GraceString(".");
              var string3472 = new GraceString("because it is declared as a type");
              var opresult3474 = callmethodChecked(string3472, "++(1)", [1], var_more);
              var opresult3476 = callmethodChecked(opresult3474, "++(1)", [1], string3469);
              setLineNumber(751);    // compilenode string
              var string3478 = new GraceString("' cannot be re-bound ");
              var string3481 = new GraceString("'");
              var opresult3483 = callmethodChecked(string3481, "++(1)", [1], var_name);
              var opresult3485 = callmethodChecked(opresult3483, "++(1)", [1], string3478);
              var opresult3487 = callmethodChecked(opresult3485, "++(1)", [1], opresult3476);
              setLineNumber(753);    // compilenode member
              // call case 6: other requests
              var call3489 = callmethodChecked(var_node, "line", []);
              // call case 6: other requests
              var call3491 = callmethodChecked(var_node, "linePos", []);
              // call case 6: other requests
              var call3494 = callmethodChecked(var_name, "size", []);
              // call case 6: other requests
              var call3497 = callmethodChecked(var_node, "linePos", []);
              var opresult3499 = callmethodChecked(call3497, "+(1)", [1], call3494);
              var diff3501 = callmethodChecked(opresult3499, "-(1)", [1], new GraceNum(1));
              // call case 6: other requests
              setLineNumber(751);    // compilenode identifier
              var call3502 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], opresult3487, call3489, call3491, diff3501);
              if3462 = call3502;
            } else {
              var if3503 = GraceDone;
              setLineNumber(754);    // compilenode member
              // call case 6: other requests
              var call3505 = callmethodChecked(var_kind, "isParameter", []);
              if (Grace_isTrue(call3505)) {
                setLineNumber(756);    // compilenode string
                var string3507 = new GraceString(".");
                var string3510 = new GraceString("because it is declared as a parameter");
                var opresult3512 = callmethodChecked(string3510, "++(1)", [1], var_more);
                var opresult3514 = callmethodChecked(opresult3512, "++(1)", [1], string3507);
                setLineNumber(755);    // compilenode string
                var string3516 = new GraceString("' cannot be re-bound ");
                var string3519 = new GraceString("'");
                var opresult3521 = callmethodChecked(string3519, "++(1)", [1], var_name);
                var opresult3523 = callmethodChecked(opresult3521, "++(1)", [1], string3516);
                var opresult3525 = callmethodChecked(opresult3523, "++(1)", [1], opresult3514);
                setLineNumber(757);    // compilenode member
                // call case 6: other requests
                var call3527 = callmethodChecked(var_node, "line", []);
                // call case 6: other requests
                var call3529 = callmethodChecked(var_node, "linePos", []);
                // call case 6: other requests
                var call3532 = callmethodChecked(var_name, "size", []);
                // call case 6: other requests
                var call3535 = callmethodChecked(var_node, "linePos", []);
                var opresult3537 = callmethodChecked(call3535, "+(1)", [1], call3532);
                var diff3539 = callmethodChecked(opresult3537, "-(1)", [1], new GraceNum(1));
                // call case 6: other requests
                setLineNumber(755);    // compilenode identifier
                var call3540 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], opresult3525, call3527, call3529, diff3539);
                if3503 = call3540;
              } else {
                var if3541 = GraceDone;
                setLineNumber(758);    // compilenode member
                // call case 6: other requests
                var call3543 = callmethodChecked(var_k, "methdec", []);
                var opresult3546 = callmethodChecked(var_kind, "==(1)", [1], call3543);
                if (Grace_isTrue(opresult3546)) {
                  setLineNumber(760);    // compilenode string
                  var string3548 = new GraceString(".");
                  var string3551 = new GraceString("because it is declared as a method");
                  var opresult3553 = callmethodChecked(string3551, "++(1)", [1], var_more);
                  var opresult3555 = callmethodChecked(opresult3553, "++(1)", [1], string3548);
                  setLineNumber(759);    // compilenode string
                  var string3557 = new GraceString("' cannot be re-bound ");
                  var string3560 = new GraceString("'");
                  var opresult3562 = callmethodChecked(string3560, "++(1)", [1], var_name);
                  var opresult3564 = callmethodChecked(opresult3562, "++(1)", [1], string3557);
                  var opresult3566 = callmethodChecked(opresult3564, "++(1)", [1], opresult3555);
                  setLineNumber(761);    // compilenode member
                  // call case 6: other requests
                  var call3568 = callmethodChecked(var_node, "line", []);
                  // call case 6: other requests
                  var call3570 = callmethodChecked(var_node, "linePos", []);
                  // call case 6: other requests
                  var call3573 = callmethodChecked(var_name, "size", []);
                  // call case 6: other requests
                  var call3576 = callmethodChecked(var_node, "linePos", []);
                  var opresult3578 = callmethodChecked(call3576, "+(1)", [1], call3573);
                  var diff3580 = callmethodChecked(opresult3578, "-(1)", [1], new GraceNum(1));
                  // call case 6: other requests
                  setLineNumber(759);    // compilenode identifier
                  var call3581 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], opresult3566, call3568, call3570, diff3580);
                  if3541 = call3581;
                }
                if3503 = if3541;
              }
              if3462 = if3503;
            }
            if3324 = if3462;
          }
          if3293 = if3324;
        }
        if3259 = if3293;
      }
      return if3259;
    };
    func3235.paramCounts = [1, 1];
    this.methods["reportAssignmentTo(1)declaredInScope(1)"] = func3235;
    func3235.definitionLine = 709;
    func3235.definitionModule = "identifierresolution";
    setLineNumber(765);    // compilenode method
    var func3582 = function(argcv) {    // method resolveIdentifiers(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_topNode = arguments[curarg];
      curarg++;
      setModuleName("identifierresolution");
      setLineNumber(771);    // compilenode block
      var block3584 = new GraceBlock(this, 771, 2);
      setLineNumber(1);    // compilenode identifier
      block3584.real = function(var_node, var_as) {
        var if3585 = GraceDone;
        setLineNumber(772);    // compilenode member
        // call case 6: other requests
        var call3587 = callmethodChecked(var_node, "isAppliedOccurenceOfIdentifier", []);
        if (Grace_isTrue(call3587)) {
          setLineNumber(773);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call3589 = callmethodChecked(this, "transformIdentifier(1)ancestors(1)", [1, 1], var_node, var_as);
          if3585 = call3589;
        } else {
          var if3590 = GraceDone;
          setLineNumber(774);    // compilenode member
          // call case 6: other requests
          var call3592 = callmethodChecked(var_node, "isCall", []);
          if (Grace_isTrue(call3592)) {
            setLineNumber(775);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call3594 = callmethodChecked(this, "transformCall(1)", [1], var_node);
            if3590 = call3594;
          } else {
            var if3595 = GraceDone;
            setLineNumber(776);    // compilenode member
            // call case 6: other requests
            var call3597 = callmethodChecked(var_node, "isInherits", []);
            if (Grace_isTrue(call3597)) {
              setLineNumber(777);    // compilenode identifier
              // call case 4: self request
              onSelf = true;
              var call3599 = callmethodChecked(this, "transformInherits(1)ancestors(1)", [1, 1], var_node, var_as);
              if3595 = call3599;
            } else {
              var if3600 = GraceDone;
              setLineNumber(778);    // compilenode member
              // call case 6: other requests
              var call3602 = callmethodChecked(var_node, "isBind", []);
              if (Grace_isTrue(call3602)) {
                setLineNumber(779);    // compilenode identifier
                // call case 4: self request
                onSelf = true;
                var call3604 = callmethodChecked(this, "transformBind(1)ancestors(1)", [1, 1], var_node, var_as);
                if3600 = call3604;
              } else {
                var if3605 = GraceDone;
                setLineNumber(780);    // compilenode member
                // call case 6: other requests
                var call3607 = callmethodChecked(var_node, "isTypeDec", []);
                if (Grace_isTrue(call3607)) {
                  setLineNumber(781);    // compilenode identifier
                  if3605 = var_node;
                } else {
                  setLineNumber(783);    // compilenode identifier
                  if3605 = var_node;
                }
                if3600 = if3605;
              }
              if3595 = if3600;
            }
            if3590 = if3595;
          }
          if3585 = if3590;
        }
        return if3585;
      };
      setLineNumber(785);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call3610 = callmethodChecked(var_ast, "ancestorChain", []);
      var call3611 = callmethodChecked(call3610, "empty", []);
      // call case 6: other requests
      setLineNumber(771);    // compilenode identifier
      var call3612 = callmethodChecked(var_topNode, "map(1)ancestors(1)", [1, 1], block3584, call3611);
      return call3612;
    };
    func3582.paramCounts = [1];
    this.methods["resolveIdentifiers(1)"] = func3582;
    func3582.definitionLine = 765;
    func3582.definitionModule = "identifierresolution";
    setLineNumber(788);    // compilenode method
    var func3613 = function(argcv) {    // method processGCT(_,_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_gct = arguments[curarg];
      curarg++;
      var var_importedModuleScope = arguments[curarg];
      curarg++;
      setModuleName("identifierresolution");
      setLineNumber(789);    // compilenode block
      var block3615 = new GraceBlock(this, 789, 1);
      setLineNumber(1);    // compilenode identifier
      block3615.real = function(var_c) {
        setLineNumber(790);    // compilenode array
        var array3616 = new PrimitiveGraceList([]);
        var var_cmeths = array3616;
        setLineNumber(791);    // compilenode string
        var string3618 = new GraceString("");
        var string3621 = new GraceString("constructors-of:");
        var opresult3623 = callmethodChecked(string3621, "++(1)", [1], var_c);
        var opresult3625 = callmethodChecked(opresult3623, "++(1)", [1], string3618);
        // call case 6: other requests
        var call3626 = callmethodChecked(var_gct, "at(1)", [1], opresult3625);
        var var_constrs = call3626;
        setLineNumber(792);    // compilenode string
        var string3628 = new GraceString("class");
        // call case 4: self request
        onSelf = true;
        var call3629 = callmethodChecked(this, "newScopeIn(1)kind(1)", [1, 1], var_importedModuleScope, string3628);
        var var_classScope = call3629;
        setLineNumber(793);    // compilenode block
        var block3631 = new GraceBlock(this, 793, 1);
        setLineNumber(1);    // compilenode identifier
        block3631.real = function(var_constr) {
          setLineNumber(794);    // compilenode string
          var string3633 = new GraceString("object");
          // call case 4: self request
          onSelf = true;
          var call3634 = callmethodChecked(this, "newScopeIn(1)kind(1)", [1, 1], var_importedModuleScope, string3633);
          var var_ns = call3634;
          setLineNumber(795);    // compilenode identifier
          // call case 6: other requests
          var call3636 = callmethodChecked(var_classScope, "addName(1)", [1], var_constr);
          setLineNumber(796);    // compilenode identifier
          // call case 6: other requests
          var call3638 = callmethodChecked(var_classScope, "at(1)putScope(1)", [1, 1], var_constr, var_ns);
          setLineNumber(797);    // compilenode block
          var block3640 = new GraceBlock(this, 797, 1);
          setLineNumber(1);    // compilenode identifier
          block3640.real = function(var_mn) {
            setLineNumber(798);    // compilenode identifier
            // call case 6: other requests
            var call3642 = callmethodChecked(var_ns, "addName(1)", [1], var_mn);
            return call3642;
          };
          // call case 6: other requests
          setLineNumber(797);    // compilenode string
          var string3644 = new GraceString("");
          var string3647 = new GraceString(".");
          var string3650 = new GraceString("methods-of:");
          var opresult3652 = callmethodChecked(string3650, "++(1)", [1], var_c);
          var opresult3654 = callmethodChecked(opresult3652, "++(1)", [1], string3647);
          var opresult3656 = callmethodChecked(opresult3654, "++(1)", [1], var_constr);
          var opresult3658 = callmethodChecked(opresult3656, "++(1)", [1], string3644);
          // call case 6: other requests
          var call3659 = callmethodChecked(var_gct, "at(1)", [1], opresult3658);
          var call3660 = callmethodChecked(call3659, "do(1)", [1], block3640);
          return call3660;
        };
        // call case 5: prelude request
        var call3661 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_constrs, block3631);
        setLineNumber(801);    // compilenode identifier
        // call case 6: other requests
        var call3663 = callmethodChecked(var_importedModuleScope, "addName(1)", [1], var_c);
        setLineNumber(802);    // compilenode identifier
        // call case 6: other requests
        var call3665 = callmethodChecked(var_importedModuleScope, "at(1)putScope(1)", [1, 1], var_c, var_classScope);
        return call3665;
      };
      // call case 6: other requests
      setLineNumber(789);    // compilenode string
      var string3667 = new GraceString("classes");
      var block3668 = new GraceBlock(this, 789, 0);
      block3668.real = function() {
        // call case 5: prelude request
        var call3670 = callmethodChecked(var_prelude, "emptySequence", []);
        return call3670;
      };
      // call case 6: other requests
      var call3671 = callmethodChecked(var_gct, "at(1)ifAbsent(1)", [1, 1], string3667, block3668);
      var call3672 = callmethodChecked(call3671, "do(1)", [1], block3615);
      setLineNumber(804);    // compilenode block
      var block3674 = new GraceBlock(this, 804, 1);
      setLineNumber(1);    // compilenode identifier
      block3674.real = function(var_c) {
        setLineNumber(805);    // compilenode string
        var string3676 = new GraceString("object");
        // call case 4: self request
        onSelf = true;
        var call3677 = callmethodChecked(this, "newScopeIn(1)kind(1)", [1, 1], var_importedModuleScope, string3676);
        var var_objScope = call3677;
        setLineNumber(806);    // compilenode block
        var block3679 = new GraceBlock(this, 806, 1);
        setLineNumber(1);    // compilenode identifier
        block3679.real = function(var_mn) {
          setLineNumber(807);    // compilenode identifier
          // call case 6: other requests
          var call3681 = callmethodChecked(var_objScope, "addName(1)", [1], var_mn);
          return call3681;
        };
        // call case 6: other requests
        setLineNumber(806);    // compilenode string
        var string3683 = new GraceString("");
        var string3686 = new GraceString("fresh:");
        var opresult3688 = callmethodChecked(string3686, "++(1)", [1], var_c);
        var opresult3690 = callmethodChecked(opresult3688, "++(1)", [1], string3683);
        // call case 6: other requests
        var call3691 = callmethodChecked(var_gct, "at(1)", [1], opresult3690);
        var call3692 = callmethodChecked(call3691, "do(1)", [1], block3679);
        setLineNumber(809);    // compilenode identifier
        // call case 6: other requests
        var call3694 = callmethodChecked(var_importedModuleScope, "addName(1)", [1], var_c);
        setLineNumber(810);    // compilenode identifier
        // call case 6: other requests
        var call3696 = callmethodChecked(var_importedModuleScope, "at(1)putScope(1)", [1, 1], var_c, var_objScope);
        return call3696;
      };
      // call case 6: other requests
      setLineNumber(804);    // compilenode string
      var string3698 = new GraceString("fresh-methods");
      var block3699 = new GraceBlock(this, 804, 0);
      block3699.real = function() {
        // call case 5: prelude request
        var call3701 = callmethodChecked(var_prelude, "emptySequence", []);
        return call3701;
      };
      // call case 6: other requests
      var call3702 = callmethodChecked(var_gct, "at(1)ifAbsent(1)", [1, 1], string3698, block3699);
      var call3703 = callmethodChecked(call3702, "do(1)", [1], block3674);
      return call3703;
    };
    func3613.paramCounts = [2];
    this.methods["processGCT(2)"] = func3613;
    func3613.definitionLine = 788;
    func3613.definitionModule = "identifierresolution";
    setLineNumber(814);    // compilenode method
    var func3704 = function(argcv) {    // method setupContext(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_moduleObject = arguments[curarg];
      curarg++;
      setModuleName("identifierresolution");
      setLineNumber(816);    // compilenode num
      // call case 6: other requests
      var call3706 = callmethodChecked(var_util, "setPosition(2)", [2], new GraceNum(0), new GraceNum(0));
      setLineNumber(818);    // compilenode string
      var string3708 = new GraceString("Type");
      // call case 6: other requests
      var call3710 = callmethodChecked(var_k, "typedec", []);
      // call case 6: other requests
      var call3711 = callmethodChecked(var_builtInsScope, "addName(1)as(1)", [1, 1], string3708, call3710);
      setLineNumber(819);    // compilenode string
      var string3713 = new GraceString("Object");
      // call case 6: other requests
      var call3715 = callmethodChecked(var_k, "typedec", []);
      // call case 6: other requests
      var call3716 = callmethodChecked(var_builtInsScope, "addName(1)as(1)", [1, 1], string3713, call3715);
      setLineNumber(820);    // compilenode string
      var string3718 = new GraceString("Unknown");
      // call case 6: other requests
      var call3720 = callmethodChecked(var_k, "typedec", []);
      // call case 6: other requests
      var call3721 = callmethodChecked(var_builtInsScope, "addName(1)as(1)", [1, 1], string3718, call3720);
      setLineNumber(821);    // compilenode string
      var string3723 = new GraceString("String");
      // call case 6: other requests
      var call3725 = callmethodChecked(var_k, "typedec", []);
      // call case 6: other requests
      var call3726 = callmethodChecked(var_builtInsScope, "addName(1)as(1)", [1, 1], string3723, call3725);
      setLineNumber(822);    // compilenode string
      var string3728 = new GraceString("Number");
      // call case 6: other requests
      var call3730 = callmethodChecked(var_k, "typedec", []);
      // call case 6: other requests
      var call3731 = callmethodChecked(var_builtInsScope, "addName(1)as(1)", [1, 1], string3728, call3730);
      setLineNumber(823);    // compilenode string
      var string3733 = new GraceString("Boolean");
      // call case 6: other requests
      var call3735 = callmethodChecked(var_k, "typedec", []);
      // call case 6: other requests
      var call3736 = callmethodChecked(var_builtInsScope, "addName(1)as(1)", [1, 1], string3733, call3735);
      setLineNumber(824);    // compilenode string
      var string3738 = new GraceString("Block");
      // call case 6: other requests
      var call3740 = callmethodChecked(var_k, "typedec", []);
      // call case 6: other requests
      var call3741 = callmethodChecked(var_builtInsScope, "addName(1)as(1)", [1, 1], string3738, call3740);
      setLineNumber(825);    // compilenode string
      var string3743 = new GraceString("Done");
      // call case 6: other requests
      var call3745 = callmethodChecked(var_k, "typedec", []);
      // call case 6: other requests
      var call3746 = callmethodChecked(var_builtInsScope, "addName(1)as(1)", [1, 1], string3743, call3745);
      setLineNumber(826);    // compilenode string
      var string3748 = new GraceString("done");
      // call case 6: other requests
      var call3750 = callmethodChecked(var_k, "defdec", []);
      // call case 6: other requests
      var call3751 = callmethodChecked(var_builtInsScope, "addName(1)as(1)", [1, 1], string3748, call3750);
      setLineNumber(827);    // compilenode string
      var string3753 = new GraceString("true");
      // call case 6: other requests
      var call3755 = callmethodChecked(var_k, "defdec", []);
      // call case 6: other requests
      var call3756 = callmethodChecked(var_builtInsScope, "addName(1)as(1)", [1, 1], string3753, call3755);
      setLineNumber(828);    // compilenode string
      var string3758 = new GraceString("false");
      // call case 6: other requests
      var call3760 = callmethodChecked(var_k, "defdec", []);
      // call case 6: other requests
      var call3761 = callmethodChecked(var_builtInsScope, "addName(1)as(1)", [1, 1], string3758, call3760);
      setLineNumber(829);    // compilenode string
      var string3763 = new GraceString("super");
      // call case 6: other requests
      var call3765 = callmethodChecked(var_k, "defdec", []);
      // call case 6: other requests
      var call3766 = callmethodChecked(var_builtInsScope, "addName(1)as(1)", [1, 1], string3763, call3765);
      setLineNumber(830);    // compilenode string
      var string3768 = new GraceString("outer");
      // call case 6: other requests
      var call3770 = callmethodChecked(var_k, "defdec", []);
      // call case 6: other requests
      var call3771 = callmethodChecked(var_builtInsScope, "addName(1)as(1)", [1, 1], string3768, call3770);
      setLineNumber(831);    // compilenode string
      var string3773 = new GraceString("readable");
      // call case 6: other requests
      var call3774 = callmethodChecked(var_builtInsScope, "addName(1)", [1], string3773);
      setLineNumber(832);    // compilenode string
      var string3776 = new GraceString("writable");
      // call case 6: other requests
      var call3777 = callmethodChecked(var_builtInsScope, "addName(1)", [1], string3776);
      setLineNumber(833);    // compilenode string
      var string3779 = new GraceString("public");
      // call case 6: other requests
      var call3780 = callmethodChecked(var_builtInsScope, "addName(1)", [1], string3779);
      setLineNumber(834);    // compilenode string
      var string3782 = new GraceString("confidential");
      // call case 6: other requests
      var call3783 = callmethodChecked(var_builtInsScope, "addName(1)", [1], string3782);
      setLineNumber(835);    // compilenode string
      var string3785 = new GraceString("override");
      // call case 6: other requests
      var call3786 = callmethodChecked(var_builtInsScope, "addName(1)", [1], string3785);
      setLineNumber(836);    // compilenode string
      var string3788 = new GraceString("parent");
      // call case 6: other requests
      var call3789 = callmethodChecked(var_builtInsScope, "addName(1)", [1], string3788);
      setLineNumber(837);    // compilenode string
      var string3791 = new GraceString("...");
      // call case 6: other requests
      var call3793 = callmethodChecked(var_k, "defdec", []);
      // call case 6: other requests
      var call3794 = callmethodChecked(var_builtInsScope, "addName(1)as(1)", [1, 1], string3791, call3793);
      setLineNumber(839);    // compilenode string
      var string3796 = new GraceString("asString");
      // call case 6: other requests
      var call3797 = callmethodChecked(var_preludeScope, "addName(1)", [1], string3796);
      setLineNumber(840);    // compilenode string
      var string3799 = new GraceString("::(1)");
      // call case 6: other requests
      var call3800 = callmethodChecked(var_preludeScope, "addName(1)", [1], string3799);
      setLineNumber(841);    // compilenode string
      var string3802 = new GraceString("++(1)");
      // call case 6: other requests
      var call3803 = callmethodChecked(var_preludeScope, "addName(1)", [1], string3802);
      setLineNumber(842);    // compilenode string
      var string3805 = new GraceString("==(1)");
      // call case 6: other requests
      var call3806 = callmethodChecked(var_preludeScope, "addName(1)", [1], string3805);
      setLineNumber(843);    // compilenode string
      var string3808 = new GraceString("\u2260(1)");
      // call case 6: other requests
      var call3809 = callmethodChecked(var_preludeScope, "addName(1)", [1], string3808);
      setLineNumber(844);    // compilenode string
      var string3811 = new GraceString("for(1)do(1)");
      // call case 6: other requests
      var call3812 = callmethodChecked(var_preludeScope, "addName(1)", [1], string3811);
      setLineNumber(845);    // compilenode string
      var string3814 = new GraceString("while(1)do(1)");
      // call case 6: other requests
      var call3815 = callmethodChecked(var_preludeScope, "addName(1)", [1], string3814);
      setLineNumber(846);    // compilenode string
      var string3817 = new GraceString("print(1)");
      // call case 6: other requests
      var call3818 = callmethodChecked(var_preludeScope, "addName(1)", [1], string3817);
      setLineNumber(847);    // compilenode string
      var string3820 = new GraceString("native(1)code(1)");
      // call case 6: other requests
      var call3821 = callmethodChecked(var_preludeScope, "addName(1)", [1], string3820);
      setLineNumber(848);    // compilenode string
      var string3823 = new GraceString("Exception");
      // call case 6: other requests
      var call3825 = callmethodChecked(var_k, "defdec", []);
      // call case 6: other requests
      var call3826 = callmethodChecked(var_preludeScope, "addName(1)as(1)", [1, 1], string3823, call3825);
      setLineNumber(849);    // compilenode string
      var string3828 = new GraceString("RuntimeError");
      // call case 6: other requests
      var call3830 = callmethodChecked(var_k, "defdec", []);
      // call case 6: other requests
      var call3831 = callmethodChecked(var_preludeScope, "addName(1)as(1)", [1, 1], string3828, call3830);
      setLineNumber(850);    // compilenode string
      var string3833 = new GraceString("NoSuchMethod");
      // call case 6: other requests
      var call3835 = callmethodChecked(var_k, "defdec", []);
      // call case 6: other requests
      var call3836 = callmethodChecked(var_preludeScope, "addName(1)as(1)", [1, 1], string3833, call3835);
      setLineNumber(851);    // compilenode string
      var string3838 = new GraceString("ProgrammingError");
      // call case 6: other requests
      var call3840 = callmethodChecked(var_k, "defdec", []);
      // call case 6: other requests
      var call3841 = callmethodChecked(var_preludeScope, "addName(1)as(1)", [1, 1], string3838, call3840);
      setLineNumber(852);    // compilenode string
      var string3843 = new GraceString("TypeError");
      // call case 6: other requests
      var call3845 = callmethodChecked(var_k, "defdec", []);
      // call case 6: other requests
      var call3846 = callmethodChecked(var_preludeScope, "addName(1)as(1)", [1, 1], string3843, call3845);
      setLineNumber(853);    // compilenode string
      var string3848 = new GraceString("ResourceException");
      // call case 6: other requests
      var call3850 = callmethodChecked(var_k, "defdec", []);
      // call case 6: other requests
      var call3851 = callmethodChecked(var_preludeScope, "addName(1)as(1)", [1, 1], string3848, call3850);
      setLineNumber(854);    // compilenode string
      var string3853 = new GraceString("EnvironmentException");
      // call case 6: other requests
      var call3855 = callmethodChecked(var_k, "defdec", []);
      // call case 6: other requests
      var call3856 = callmethodChecked(var_preludeScope, "addName(1)as(1)", [1, 1], string3853, call3855);
      setLineNumber(855);    // compilenode string
      var string3858 = new GraceString("\u03c0");
      // call case 6: other requests
      var call3860 = callmethodChecked(var_k, "defdec", []);
      // call case 6: other requests
      var call3861 = callmethodChecked(var_preludeScope, "addName(1)as(1)", [1, 1], string3858, call3860);
      setLineNumber(856);    // compilenode string
      var string3863 = new GraceString("infinity");
      // call case 6: other requests
      var call3865 = callmethodChecked(var_k, "defdec", []);
      // call case 6: other requests
      var call3866 = callmethodChecked(var_preludeScope, "addName(1)as(1)", [1, 1], string3863, call3865);
      setLineNumber(857);    // compilenode string
      var string3868 = new GraceString("minigrace");
      // call case 6: other requests
      var call3869 = callmethodChecked(var_preludeScope, "addName(1)", [1], string3868);
      setLineNumber(858);    // compilenode string
      var string3871 = new GraceString("_methods");
      // call case 6: other requests
      var call3872 = callmethodChecked(var_preludeScope, "addName(1)", [1], string3871);
      setLineNumber(859);    // compilenode string
      var string3874 = new GraceString("primitiveArray");
      // call case 6: other requests
      var call3875 = callmethodChecked(var_preludeScope, "addName(1)", [1], string3874);
      setLineNumber(860);    // compilenode string
      var string3877 = new GraceString("become(1)");
      // call case 6: other requests
      var call3878 = callmethodChecked(var_preludeScope, "addName(1)", [1], string3877);
      setLineNumber(861);    // compilenode string
      var string3880 = new GraceString("unbecome(1)");
      // call case 6: other requests
      var call3881 = callmethodChecked(var_preludeScope, "addName(1)", [1], string3880);
      setLineNumber(862);    // compilenode string
      var string3883 = new GraceString("clone(1)");
      // call case 6: other requests
      var call3884 = callmethodChecked(var_preludeScope, "addName(1)", [1], string3883);
      setLineNumber(863);    // compilenode string
      var string3886 = new GraceString("inBrowser");
      // call case 6: other requests
      var call3887 = callmethodChecked(var_preludeScope, "addName(1)", [1], string3886);
      setLineNumber(864);    // compilenode string
      var string3889 = new GraceString("engine");
      // call case 6: other requests
      var call3890 = callmethodChecked(var_preludeScope, "addName(1)", [1], string3889);
      setLineNumber(866);    // compilenode string
      var string3892 = new GraceString("isMe(1)");
      // call case 6: other requests
      var call3894 = callmethodChecked(var_k, "graceObjectMethod", []);
      // call case 6: other requests
      var call3895 = callmethodChecked(var_graceObjectScope, "addName(1)as(1)", [1, 1], string3892, call3894);
      setLineNumber(867);    // compilenode string
      var string3897 = new GraceString("\u2260(1)");
      // call case 6: other requests
      var call3899 = callmethodChecked(var_k, "graceObjectMethod", []);
      // call case 6: other requests
      var call3900 = callmethodChecked(var_graceObjectScope, "addName(1)as(1)", [1, 1], string3897, call3899);
      setLineNumber(868);    // compilenode string
      var string3902 = new GraceString("basicAsString");
      // call case 6: other requests
      var call3904 = callmethodChecked(var_k, "graceObjectMethod", []);
      // call case 6: other requests
      var call3905 = callmethodChecked(var_graceObjectScope, "addName(1)as(1)", [1, 1], string3902, call3904);
      setLineNumber(869);    // compilenode string
      var string3907 = new GraceString("asString");
      // call case 6: other requests
      var call3909 = callmethodChecked(var_k, "graceObjectMethod", []);
      // call case 6: other requests
      var call3910 = callmethodChecked(var_graceObjectScope, "addName(1)as(1)", [1, 1], string3907, call3909);
      setLineNumber(870);    // compilenode string
      var string3912 = new GraceString("asDebugString");
      // call case 6: other requests
      var call3914 = callmethodChecked(var_k, "graceObjectMethod", []);
      // call case 6: other requests
      var call3915 = callmethodChecked(var_graceObjectScope, "addName(1)as(1)", [1, 1], string3912, call3914);
      setLineNumber(871);    // compilenode string
      var string3917 = new GraceString("::(1)");
      // call case 6: other requests
      var call3919 = callmethodChecked(var_k, "graceObjectMethod", []);
      // call case 6: other requests
      var call3920 = callmethodChecked(var_graceObjectScope, "addName(1)as(1)", [1, 1], string3917, call3919);
      setLineNumber(873);    // compilenode string
      var string3922 = new GraceString("prefix!");
      // call case 6: other requests
      var call3923 = callmethodChecked(var_booleanScope, "addName(1)", [1], string3922);
      setLineNumber(874);    // compilenode string
      var string3925 = new GraceString("&&(1)");
      // call case 6: other requests
      var call3926 = callmethodChecked(var_booleanScope, "addName(1)", [1], string3925);
      setLineNumber(875);    // compilenode string
      var string3928 = new GraceString("||(1)");
      // call case 6: other requests
      var call3929 = callmethodChecked(var_booleanScope, "addName(1)", [1], string3928);
      setLineNumber(876);    // compilenode string
      var string3931 = new GraceString("not");
      // call case 6: other requests
      var call3932 = callmethodChecked(var_booleanScope, "addName(1)", [1], string3931);
      setLineNumber(878);    // compilenode string
      var string3934 = new GraceString("graceObject");
      // call case 6: other requests
      var call3935 = callmethodChecked(var_builtInsScope, "addName(1)", [1], string3934);
      setLineNumber(879);    // compilenode string
      var string3937 = new GraceString("graceObject");
      // call case 6: other requests
      var call3938 = callmethodChecked(var_builtInsScope, "at(1)putScope(1)", [1, 1], string3937, var_graceObjectScope);
      setLineNumber(880);    // compilenode string
      var string3940 = new GraceString("prelude");
      // call case 6: other requests
      var call3942 = callmethodChecked(var_k, "defdec", []);
      // call case 6: other requests
      var call3943 = callmethodChecked(var_builtInsScope, "addName(1)as(1)", [1, 1], string3940, call3942);
      setLineNumber(881);    // compilenode string
      var string3945 = new GraceString("prelude");
      // call case 6: other requests
      var call3946 = callmethodChecked(var_builtInsScope, "at(1)putScope(1)", [1, 1], string3945, var_preludeScope);
      setLineNumber(882);    // compilenode string
      var string3948 = new GraceString("_prelude");
      // call case 6: other requests
      var call3950 = callmethodChecked(var_k, "defdec", []);
      // call case 6: other requests
      var call3951 = callmethodChecked(var_builtInsScope, "addName(1)as(1)", [1, 1], string3948, call3950);
      setLineNumber(883);    // compilenode string
      var string3953 = new GraceString("_prelude");
      // call case 6: other requests
      var call3954 = callmethodChecked(var_builtInsScope, "at(1)putScope(1)", [1, 1], string3953, var_preludeScope);
      setLineNumber(884);    // compilenode string
      var string3956 = new GraceString("true");
      // call case 6: other requests
      var call3957 = callmethodChecked(var_builtInsScope, "at(1)putScope(1)", [1, 1], string3956, var_booleanScope);
      setLineNumber(885);    // compilenode string
      var string3959 = new GraceString("false");
      // call case 6: other requests
      var call3960 = callmethodChecked(var_builtInsScope, "at(1)putScope(1)", [1, 1], string3959, var_booleanScope);
      var if3961 = GraceDone;
      setLineNumber(888);    // compilenode call
      // call case 6: other requests
      var string3964 = new GraceString("NativePrelude");
      // call case 6: other requests
      // call case 6: other requests
      var call3966 = callmethodChecked(var_util, "extensions", []);
      var call3967 = callmethodChecked(call3966, "contains(1)", [1], string3964);
      var call3968 = callmethodChecked(call3967, "prefix!", [0]);
      if (Grace_isTrue(call3968)) {
        setLineNumber(889);    // compilenode identifier
        var var_hadDialect = GraceFalse;
        setLineNumber(890);    // compilenode member
        // call case 6: other requests
        var call3971 = callmethodChecked(var_moduleObject, "value", []);
        var block3972 = new GraceBlock(this, 890, 1);
        setLineNumber(1);    // compilenode identifier
        block3972.real = function(var_val) {
          var if3973 = GraceDone;
          setLineNumber(891);    // compilenode string
          var string3974 = new GraceString("dialect");
          // call case 6: other requests
          var call3977 = callmethodChecked(var_val, "kind", []);
          var opresult3979 = callmethodChecked(call3977, "==(1)", [1], string3974);
          if (Grace_isTrue(opresult3979)) {
            setLineNumber(892);    // compilenode identifier
            var_hadDialect = GraceTrue;
            setLineNumber(893);    // compilenode identifier
            // call case 6: other requests
            var call3981 = callmethodChecked(var_xmodule, "checkExternalModule(1)", [1], var_val);
            setLineNumber(894);    // compilenode member
            // call case 6: other requests
            var call3984 = callmethodChecked(var_val, "value", []);
            // call case 6: other requests
            var call3985 = callmethodChecked(var_xmodule, "parseGCT(1)", [1], call3984);
            var var_gctDict = call3985;
            setLineNumber(895);    // compilenode block
            var block3987 = new GraceBlock(this, 895, 1);
            setLineNumber(1);    // compilenode identifier
            block3987.real = function(var_mn) {
              setLineNumber(896);    // compilenode identifier
              // call case 6: other requests
              var call3989 = callmethodChecked(var_preludeScope, "addName(1)", [1], var_mn);
              return call3989;
            };
            // call case 6: other requests
            setLineNumber(895);    // compilenode string
            var string3991 = new GraceString("public");
            var block3992 = new GraceBlock(this, 895, 0);
            block3992.real = function() {
              // call case 5: prelude request
              var call3994 = callmethodChecked(var_prelude, "emptySequence", []);
              return call3994;
            };
            // call case 6: other requests
            var call3995 = callmethodChecked(var_gctDict, "at(1)ifAbsent(1)", [1, 1], string3991, block3992);
            var call3996 = callmethodChecked(call3995, "do(1)", [1], block3987);
            setLineNumber(898);    // compilenode block
            var block3998 = new GraceBlock(this, 898, 1);
            setLineNumber(1);    // compilenode identifier
            block3998.real = function(var_mn) {
              setLineNumber(899);    // compilenode identifier
              // call case 6: other requests
              var call4000 = callmethodChecked(var_preludeScope, "addName(1)", [1], var_mn);
              return call4000;
            };
            // call case 6: other requests
            setLineNumber(898);    // compilenode string
            var string4002 = new GraceString("confidential");
            var block4003 = new GraceBlock(this, 898, 0);
            block4003.real = function() {
              // call case 5: prelude request
              var call4005 = callmethodChecked(var_prelude, "emptySequence", []);
              return call4005;
            };
            // call case 6: other requests
            var call4006 = callmethodChecked(var_gctDict, "at(1)ifAbsent(1)", [1, 1], string4002, block4003);
            var call4007 = callmethodChecked(call4006, "do(1)", [1], block3998);
            setLineNumber(901);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call4009 = callmethodChecked(this, "processGCT(2)", [2], var_gctDict, var_preludeScope);
            if3973 = call4009;
          }
          return if3973;
        };
        // call case 5: prelude request
        var call4010 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call3971, block3972);
        var if4011 = GraceDone;
        setLineNumber(904);    // compilenode call
        // call case 6: other requests
        var call4013 = callmethodChecked(var_hadDialect, "prefix!", [0]);
        if (Grace_isTrue(call4013)) {
          setLineNumber(905);    // compilenode string
          var string4015 = new GraceString("StandardPrelude");
          // call case 6: other requests
          var call4016 = callmethodChecked(var_xmodule, "parseGCT(1)", [1], string4015);
          var var_gctDict = call4016;
          setLineNumber(906);    // compilenode block
          var block4018 = new GraceBlock(this, 906, 1);
          setLineNumber(1);    // compilenode identifier
          block4018.real = function(var_mn) {
            setLineNumber(907);    // compilenode identifier
            // call case 6: other requests
            var call4020 = callmethodChecked(var_preludeScope, "addName(1)", [1], var_mn);
            return call4020;
          };
          // call case 6: other requests
          setLineNumber(906);    // compilenode string
          var string4022 = new GraceString("public");
          var block4023 = new GraceBlock(this, 906, 0);
          block4023.real = function() {
            // call case 5: prelude request
            var call4025 = callmethodChecked(var_prelude, "emptySequence", []);
            return call4025;
          };
          // call case 6: other requests
          var call4026 = callmethodChecked(var_gctDict, "at(1)ifAbsent(1)", [1, 1], string4022, block4023);
          var call4027 = callmethodChecked(call4026, "do(1)", [1], block4018);
          setLineNumber(909);    // compilenode block
          var block4029 = new GraceBlock(this, 909, 1);
          setLineNumber(1);    // compilenode identifier
          block4029.real = function(var_mn) {
            setLineNumber(910);    // compilenode identifier
            // call case 6: other requests
            var call4031 = callmethodChecked(var_preludeScope, "addName(1)", [1], var_mn);
            return call4031;
          };
          // call case 6: other requests
          setLineNumber(909);    // compilenode string
          var string4033 = new GraceString("confidential");
          var block4034 = new GraceBlock(this, 909, 0);
          block4034.real = function() {
            // call case 5: prelude request
            var call4036 = callmethodChecked(var_prelude, "emptySequence", []);
            return call4036;
          };
          // call case 6: other requests
          var call4037 = callmethodChecked(var_gctDict, "at(1)ifAbsent(1)", [1, 1], string4033, block4034);
          var call4038 = callmethodChecked(call4037, "do(1)", [1], block4029);
          setLineNumber(912);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call4040 = callmethodChecked(this, "processGCT(2)", [2], var_gctDict, var_preludeScope);
          if4011 = call4040;
        }
        if3961 = if4011;
      }
      return if3961;
    };
    func3704.paramCounts = [1];
    this.methods["setupContext(1)"] = func3704;
    func3704.definitionLine = 814;
    func3704.definitionModule = "identifierresolution";
    setLineNumber(917);    // compilenode method
    var func4041 = function(argcv) {    // method checkTraitBody(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_traitObjNode = arguments[curarg];
      curarg++;
      setModuleName("identifierresolution");
      setLineNumber(919);    // compilenode block
      var block4043 = new GraceBlock(this, 919, 1);
      setLineNumber(1);    // compilenode identifier
      block4043.real = function(var_node) {
        var if4044 = GraceDone;
        setLineNumber(920);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call4047 = callmethodChecked(var_node, "isLegalInTrait", []);
        var call4048 = callmethodChecked(call4047, "not", []);
        if (Grace_isTrue(call4048)) {
          setLineNumber(921);    // compilenode member
          // call case 6: other requests
          var call4050 = callmethodChecked(var_node, "statementName", []);
          var var_badThing = call4050;
          setLineNumber(922);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call4052 = callmethodChecked(this, "articleFor(1)", [1], var_badThing);
          var var_article = call4052;
          setLineNumber(924);    // compilenode string
          var string4054 = new GraceString(")");
          // call case 6: other requests
          var call4057 = callmethodChecked(var_traitObjNode, "line", []);
          var string4059 = new GraceString("a trait (defined on line ");
          var opresult4061 = callmethodChecked(string4059, "++(1)", [1], call4057);
          var opresult4063 = callmethodChecked(opresult4061, "++(1)", [1], string4054);
          setLineNumber(923);    // compilenode string
          var string4065 = new GraceString(" cannot appear in ");
          var string4068 = new GraceString(" ");
          var string4071 = new GraceString("");
          var opresult4073 = callmethodChecked(string4071, "++(1)", [1], var_article);
          var opresult4075 = callmethodChecked(opresult4073, "++(1)", [1], string4068);
          var opresult4077 = callmethodChecked(opresult4075, "++(1)", [1], var_badThing);
          var opresult4079 = callmethodChecked(opresult4077, "++(1)", [1], string4065);
          var opresult4081 = callmethodChecked(opresult4079, "++(1)", [1], opresult4063);
          setLineNumber(925);    // compilenode member
          // call case 6: other requests
          var call4083 = callmethodChecked(var_node, "line", []);
          // call case 6: other requests
          setLineNumber(923);    // compilenode identifier
          var call4084 = callmethodChecked(var_errormessages, "syntaxError(1)atLine(1)", [1, 1], opresult4081, call4083);
          if4044 = call4084;
        }
        return if4044;
      };
      // call case 6: other requests
      setLineNumber(919);    // compilenode member
      // call case 6: other requests
      var call4086 = callmethodChecked(var_traitObjNode, "value", []);
      var call4087 = callmethodChecked(call4086, "do(1)", [1], block4043);
      return call4087;
    };
    func4041.paramCounts = [1];
    this.methods["checkTraitBody(1)"] = func4041;
    func4041.definitionLine = 917;
    func4041.definitionModule = "identifierresolution";
    setLineNumber(930);    // compilenode method
    var func4088 = function(argcv) {    // method articleFor(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_str = arguments[curarg];
      curarg++;
      setModuleName("identifierresolution");
      var if4089 = GraceDone;
      setLineNumber(932);    // compilenode member
      // call case 6: other requests
      var call4092 = callmethodChecked(var_str, "first", []);
      // call case 6: other requests
      var string4093 = new GraceString("aeioAEIO");
      var call4094 = callmethodChecked(string4093, "contains(1)", [1], call4092);
      if (Grace_isTrue(call4094)) {
        var string4095 = new GraceString("an");
        if4089 = string4095;
      } else {
        var string4096 = new GraceString("a");
        if4089 = string4096;
      }
      return if4089;
    };
    func4088.paramCounts = [1];
    this.methods["articleFor(1)"] = func4088;
    func4088.definitionLine = 930;
    func4088.definitionModule = "identifierresolution";
    setLineNumber(935);    // compilenode method
    var func4097 = function(argcv) {    // method buildSymbolTableFor(_)ancestors(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_topNode = arguments[curarg];
      curarg++;
      var var_topChain = arguments[curarg];
      curarg++;
      setModuleName("identifierresolution");
      setLineNumber(936);    // compilenode object
      var obj4098 = Grace_allocObject(null, "symbolTableVis");
      obj4098.definitionModule = "identifierresolution";
      obj4098.definitionLine = 936;
      obj4098.outer = this;
      var reader_identifierresolution_outer4099 = function() {
        return this.outer;
      };
      obj4098.methods["outer"] = reader_identifierresolution_outer4099;
      var obj_init_4098 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj4098;
        var func4100 = function(argcv) {    // method visitBind(_)up(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          var var_as = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(940);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call4104 = callmethodChecked(var_as, "parent", []);
          var call4105 = callmethodChecked(call4104, "scope", []);
          // call case 6: other requests
          var call4106 = callmethodChecked(var_o, "scope:=(1)", [1], call4105);
          setLineNumber(941);    // compilenode member
          // call case 6: other requests
          var call4108 = callmethodChecked(var_o, "dest", []);
          var var_lValue = call4108;
          var if4109 = GraceDone;
          setLineNumber(942);    // compilenode string
          var string4110 = new GraceString("identifier");
          // call case 6: other requests
          var call4113 = callmethodChecked(var_lValue, "kind", []);
          var opresult4115 = callmethodChecked(call4113, "==(1)", [1], string4110);
          if (Grace_isTrue(opresult4115)) {
            setLineNumber(943);    // compilenode identifier
            // call case 6: other requests
            var call4117 = callmethodChecked(var_lValue, "isAssigned:=(1)", [1], GraceTrue);
            if4109 = call4117;
          }
          setLineNumber(945);    // compilenode identifier
          return GraceTrue;
        };
        func4100.paramCounts = [1, 1];
        obj4098.methods["visitBind(1)up(1)"] = func4100;
        func4100.definitionLine = 939;
        func4100.definitionModule = "identifierresolution";
        var func4118 = function(argcv) {    // method visitCall(_)up(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          var var_as = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(948);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call4122 = callmethodChecked(var_as, "parent", []);
          var call4123 = callmethodChecked(call4122, "scope", []);
          // call case 6: other requests
          var call4124 = callmethodChecked(var_o, "scope:=(1)", [1], call4123);
          setLineNumber(949);    // compilenode member
          // call case 6: other requests
          var call4126 = callmethodChecked(var_o, "receiver", []);
          var var_callee = call4126;
          var if4127 = GraceDone;
          setLineNumber(950);    // compilenode string
          var string4128 = new GraceString("identifier");
          // call case 6: other requests
          var call4131 = callmethodChecked(var_callee, "kind", []);
          var opresult4133 = callmethodChecked(call4131, "==(1)", [1], string4128);
          if (Grace_isTrue(opresult4133)) {
            setLineNumber(951);    // compilenode identifier
            // call case 6: other requests
            var call4135 = callmethodChecked(var_callee, "inRequest:=(1)", [1], GraceTrue);
            if4127 = call4135;
          }
          setLineNumber(953);    // compilenode identifier
          return GraceTrue;
        };
        func4118.paramCounts = [1, 1];
        obj4098.methods["visitCall(1)up(1)"] = func4118;
        func4118.definitionLine = 947;
        func4118.definitionModule = "identifierresolution";
        var func4136 = function(argcv) {    // method visitBlock(_)up(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          var var_as = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(956);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call4141 = callmethodChecked(var_as, "parent", []);
          var call4142 = callmethodChecked(call4141, "scope", []);
          var string4143 = new GraceString("block");
          // call case 6: other requests
          // call case 3: self.outer request
          var call4145 = callmethodChecked(superDepth, "outer", [0]);
          onSelf = true;
          var call4146 = callmethodChecked(call4145, "newScopeIn(1)kind(1)", [1, 1], call4142, string4143);
          // call case 6: other requests
          var call4147 = callmethodChecked(var_o, "scope:=(1)", [1], call4146);
          setLineNumber(957);    // compilenode identifier
          return GraceTrue;
        };
        func4136.paramCounts = [1, 1];
        obj4098.methods["visitBlock(1)up(1)"] = func4136;
        func4136.definitionLine = 955;
        func4136.definitionModule = "identifierresolution";
        var func4148 = function(argcv) {    // method visitDefDec(_)up(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          var var_as = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(960);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call4152 = callmethodChecked(var_as, "parent", []);
          var call4153 = callmethodChecked(call4152, "scope", []);
          // call case 6: other requests
          var call4154 = callmethodChecked(var_o, "scope:=(1)", [1], call4153);
          var if4155 = GraceDone;
          setLineNumber(961);    // compilenode member
          // call case 6: other requests
          var call4157 = callmethodChecked(var_o, "startToken", []);
          var opresult4160 = callmethodChecked(GraceFalse, "\u2260(1)", [1], call4157);
          if (Grace_isTrue(opresult4160)) {
            setLineNumber(962);    // compilenode member
            // call case 6: other requests
            var call4163 = callmethodChecked(var_o, "nameString", []);
            // call case 6: other requests
            var call4165 = callmethodChecked(var_o, "startToken", []);
            // call case 6: other requests
            // call case 6: other requests
            // call case 6: other requests
            // call case 6: other requests
            var call4169 = callmethodChecked(var_as, "parent", []);
            var call4170 = callmethodChecked(call4169, "scope", []);
            var call4171 = callmethodChecked(call4170, "elementTokens", []);
            var call4172 = callmethodChecked(call4171, "put(2)", [2], call4163, call4165);
            if4155 = call4172;
          }
          var if4173 = GraceDone;
          setLineNumber(964);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call4176 = callmethodChecked(var_o, "value", []);
          var call4177 = callmethodChecked(call4176, "isObject", []);
          if (Grace_isTrue(call4177)) {
            // call case 6: other requests
            var call4180 = callmethodChecked(var_o, "nameString", []);
            // call case 6: other requests
            // call case 6: other requests
            var call4182 = callmethodChecked(var_o, "value", []);
            var call4183 = callmethodChecked(call4182, "name:=(1)", [1], call4180);
            if4173 = call4183;
          }
          setLineNumber(965);    // compilenode identifier
          return GraceTrue;
        };
        func4148.paramCounts = [1, 1];
        obj4098.methods["visitDefDec(1)up(1)"] = func4148;
        func4148.definitionLine = 959;
        func4148.definitionModule = "identifierresolution";
        var func4184 = function(argcv) {    // method visitIdentifier(_)up(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          var var_as = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(968);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call4187 = callmethodChecked(var_as, "parent", []);
          var call4188 = callmethodChecked(call4187, "scope", []);
          var var_scope = call4188;
          setLineNumber(969);    // compilenode identifier
          // call case 6: other requests
          var call4190 = callmethodChecked(var_o, "scope:=(1)", [1], var_scope);
          var if4191 = GraceDone;
          setLineNumber(970);    // compilenode member
          // call case 6: other requests
          var call4193 = callmethodChecked(var_o, "isBindingOccurrence", []);
          if (Grace_isTrue(call4193)) {
            var if4194 = GraceDone;
            setLineNumber(971);    // compilenode block
            var block4195 = new GraceBlock(this, 971, 0);
            block4195.real = function() {
              // call case 6: other requests
              // call case 6: other requests
              var call4198 = callmethodChecked(var_o, "wildcard", []);
              var call4199 = callmethodChecked(call4198, "not", []);
              return call4199;
            };
            // call case 6: other requests
            // call case 6: other requests
            var call4203 = callmethodChecked(var_o, "isDeclaredByParent", []);
            var call4204 = callmethodChecked(call4203, "not", []);
            var opresult4206 = callmethodChecked(call4204, "&&(1)", [1], block4195);
            if (Grace_isTrue(opresult4206)) {
              setLineNumber(972);    // compilenode identifier
              // call case 6: other requests
              // call case 3: self.outer request
              var call4209 = callmethodChecked(superDepth, "outer", [0]);
              onSelf = true;
              var call4210 = callmethodChecked(call4209, "checkForReservedName(1)", [1], var_o);
              setLineNumber(973);    // compilenode identifier
              // call case 6: other requests
              var call4212 = callmethodChecked(var_o, "declarationKindWithAncestors(1)", [1], var_as);
              var var_kind = call4212;
              var if4213 = GraceDone;
              setLineNumber(974);    // compilenode member
              // call case 6: other requests
              var call4215 = callmethodChecked(var_kind, "isParameter", []);
              if (Grace_isTrue(call4215)) {
                var if4216 = GraceDone;
                setLineNumber(975);    // compilenode string
                var string4217 = new GraceString("object");
                // call case 6: other requests
                var call4220 = callmethodChecked(var_scope, "variety", []);
                var opresult4222 = callmethodChecked(call4220, "==(1)", [1], string4217);
                if (Grace_isTrue(opresult4222)) {
                  setLineNumber(980);    // compilenode member
                  // call case 6: other requests
                  var call4224 = callmethodChecked(var_scope, "parent", []);
                  var_scope = call4224;
                  var if4225 = GraceDone;
                  setLineNumber(981);    // compilenode string
                  var string4226 = new GraceString("method");
                  // call case 6: other requests
                  var call4229 = callmethodChecked(var_scope, "variety", []);
                  var opresult4231 = callmethodChecked(call4229, "\u2260(1)", [1], string4226);
                  if (Grace_isTrue(opresult4231)) {
                    setLineNumber(982);    // compilenode string
                    var string4233 = new GraceString("object scope not in method scope");
                    // call case 6: other requests
                    // call case 5: prelude request
                    var call4235 = callmethodChecked(var_prelude, "ProgrammingError", []);
                    var call4236 = callmethodChecked(call4235, "raise(1)", [1], string4233);
                    if4225 = call4236;
                  }
                  if4216 = if4225;
                }
                if4213 = if4216;
              }
              setLineNumber(986);    // compilenode identifier
              // call case 6: other requests
              var call4238 = callmethodChecked(var_scope, "addNode(1)as(1)", [1, 1], var_o, var_kind);
              if4194 = call4238;
            }
            if4191 = if4194;
          } else {
            var if4239 = GraceDone;
            setLineNumber(988);    // compilenode member
            // call case 6: other requests
            var call4241 = callmethodChecked(var_o, "wildcard", []);
            if (Grace_isTrue(call4241)) {
              setLineNumber(989);    // compilenode string
              var string4243 = new GraceString("'_' cannot be used in an expression");
              setLineNumber(990);    // compilenode member
              // call case 6: other requests
              var call4245 = callmethodChecked(var_o, "line", []);
              // call case 6: other requests
              var call4247 = callmethodChecked(var_o, "linePos", []);
              // call case 6: other requests
              var call4249 = callmethodChecked(var_o, "linePos", []);
              // call case 6: other requests
              setLineNumber(989);    // compilenode identifier
              var call4250 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], string4243, call4245, call4247, call4249);
              if4239 = call4250;
            }
            if4191 = if4239;
          }
          setLineNumber(992);    // compilenode identifier
          return GraceTrue;
        };
        func4184.paramCounts = [1, 1];
        obj4098.methods["visitIdentifier(1)up(1)"] = func4184;
        func4184.definitionLine = 967;
        func4184.definitionModule = "identifierresolution";
        var func4251 = function(argcv) {    // method visitImport(_)up(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          var var_as = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(995);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call4255 = callmethodChecked(var_as, "parent", []);
          var call4256 = callmethodChecked(call4255, "scope", []);
          // call case 6: other requests
          var call4257 = callmethodChecked(var_o, "scope:=(1)", [1], call4256);
          setLineNumber(996);    // compilenode identifier
          // call case 6: other requests
          var call4259 = callmethodChecked(var_xmodule, "checkExternalModule(1)", [1], var_o);
          setLineNumber(997);    // compilenode member
          // call case 6: other requests
          var call4262 = callmethodChecked(var_o, "path", []);
          // call case 6: other requests
          var call4263 = callmethodChecked(var_xmodule, "parseGCT(1)", [1], call4262);
          var var_gct = call4263;
          setLineNumber(998);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call4267 = callmethodChecked(var_as, "parent", []);
          var call4268 = callmethodChecked(call4267, "scope", []);
          var string4269 = new GraceString("module");
          // call case 6: other requests
          // call case 3: self.outer request
          var call4271 = callmethodChecked(superDepth, "outer", [0]);
          onSelf = true;
          var call4272 = callmethodChecked(call4271, "newScopeIn(1)kind(1)", [1, 1], call4268, string4269);
          var var_otherModule = call4272;
          setLineNumber(999);    // compilenode identifier
          // call case 6: other requests
          var call4274 = callmethodChecked(var_otherModule, "node:=(1)", [1], var_o);
          setLineNumber(1000);    // compilenode identifier
          // call case 6: other requests
          // call case 3: self.outer request
          var call4277 = callmethodChecked(superDepth, "outer", [0]);
          onSelf = true;
          var call4278 = callmethodChecked(call4277, "processGCT(2)", [2], var_gct, var_otherModule);
          setLineNumber(1001);    // compilenode member
          // call case 6: other requests
          var call4281 = callmethodChecked(var_o, "nameString", []);
          // call case 6: other requests
          // call case 6: other requests
          var call4283 = callmethodChecked(var_o, "scope", []);
          var call4284 = callmethodChecked(call4283, "at(1)putScope(1)", [1, 1], call4281, var_otherModule);
          setLineNumber(1002);    // compilenode identifier
          return GraceTrue;
        };
        func4251.paramCounts = [1, 1];
        obj4098.methods["visitImport(1)up(1)"] = func4251;
        func4251.definitionLine = 994;
        func4251.definitionModule = "identifierresolution";
        var func4285 = function(argcv) {    // method visitInherits(_)up(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          var var_as = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(1005);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call4289 = callmethodChecked(var_as, "parent", []);
          var call4290 = callmethodChecked(call4289, "scope", []);
          // call case 6: other requests
          var call4291 = callmethodChecked(var_o, "scope:=(1)", [1], call4290);
          var if4292 = GraceDone;
          setLineNumber(1006);    // compilenode member
          // call case 6: other requests
          var call4294 = callmethodChecked(var_o, "isUse", []);
          if (Grace_isTrue(call4294)) {
            var if4295 = GraceDone;
            setLineNumber(1007);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            // call case 6: other requests
            var call4299 = callmethodChecked(var_as, "parent", []);
            var call4300 = callmethodChecked(call4299, "canUse", []);
            var call4301 = callmethodChecked(call4300, "not", []);
            if (Grace_isTrue(call4301)) {
              setLineNumber(1009);    // compilenode string
              var string4303 = new GraceString("be inside an object, class, or trait");
              setLineNumber(1008);    // compilenode string
              var string4305 = new GraceString("use statements must ");
              var opresult4307 = callmethodChecked(string4305, "++(1)", [1], string4303);
              setLineNumber(1010);    // compilenode member
              // call case 6: other requests
              var call4309 = callmethodChecked(var_o, "line", []);
              // call case 6: other requests
              var call4311 = callmethodChecked(var_o, "linePos", []);
              // call case 6: other requests
              var call4314 = callmethodChecked(var_o, "linePos", []);
              var opresult4316 = callmethodChecked(call4314, "+(1)", [1], new GraceNum(3));
              // call case 6: other requests
              setLineNumber(1008);    // compilenode identifier
              var call4317 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], opresult4307, call4309, call4311, opresult4316);
              if4295 = call4317;
            }
            if4292 = if4295;
          } else {
            var if4318 = GraceDone;
            setLineNumber(1013);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            // call case 6: other requests
            var call4322 = callmethodChecked(var_as, "parent", []);
            var call4323 = callmethodChecked(call4322, "canInherit", []);
            var call4324 = callmethodChecked(call4323, "not", []);
            if (Grace_isTrue(call4324)) {
              setLineNumber(1015);    // compilenode string
              var string4326 = new GraceString("be inside an object or class; a trait cannot inherit");
              setLineNumber(1014);    // compilenode string
              var string4328 = new GraceString("inherit statements must ");
              var opresult4330 = callmethodChecked(string4328, "++(1)", [1], string4326);
              setLineNumber(1016);    // compilenode member
              // call case 6: other requests
              var call4332 = callmethodChecked(var_o, "line", []);
              // call case 6: other requests
              var call4334 = callmethodChecked(var_o, "linePos", []);
              // call case 6: other requests
              var call4337 = callmethodChecked(var_o, "linePos", []);
              var opresult4339 = callmethodChecked(call4337, "+(1)", [1], new GraceNum(7));
              // call case 6: other requests
              setLineNumber(1014);    // compilenode identifier
              var call4340 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], opresult4330, call4332, call4334, opresult4339);
              if4318 = call4340;
            }
            if4292 = if4318;
          }
          setLineNumber(1019);    // compilenode identifier
          return GraceTrue;
        };
        func4285.paramCounts = [1, 1];
        obj4098.methods["visitInherits(1)up(1)"] = func4285;
        func4285.definitionLine = 1004;
        func4285.definitionModule = "identifierresolution";
        var func4341 = function(argcv) {    // method visitMethod(_)up(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          var var_as = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(1022);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call4344 = callmethodChecked(var_as, "parent", []);
          var call4345 = callmethodChecked(call4344, "scope", []);
          var var_surroundingScope = call4345;
          var if4346 = GraceDone;
          setLineNumber(1023);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call4349 = callmethodChecked(var_surroundingScope, "isObjectScope", []);
          var call4350 = callmethodChecked(call4349, "not", []);
          if (Grace_isTrue(call4350)) {
            setLineNumber(1029);    // compilenode string
            var string4352 = new GraceString(" inside an object");
            setLineNumber(1028);    // compilenode string
            var string4354 = new GraceString("class declarations are permitted only");
            var opresult4356 = callmethodChecked(string4354, "++(1)", [1], string4352);
            setLineNumber(1029);    // compilenode member
            // call case 6: other requests
            var call4358 = callmethodChecked(var_o, "line", []);
            // call case 6: other requests
            var call4360 = callmethodChecked(var_o, "linePos", []);
            // call case 6: other requests
            var call4363 = callmethodChecked(var_o, "linePos", []);
            var opresult4365 = callmethodChecked(call4363, "+(1)", [1], new GraceNum(4));
            // call case 6: other requests
            setLineNumber(1028);    // compilenode identifier
            var call4366 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], opresult4356, call4358, call4360, opresult4365);
            if4346 = call4366;
          }
          setLineNumber(1031);    // compilenode member
          // call case 6: other requests
          var call4368 = callmethodChecked(var_o, "asIdentifier", []);
          var var_ident = call4368;
          setLineNumber(1032);    // compilenode identifier
          // call case 6: other requests
          // call case 3: self.outer request
          var call4371 = callmethodChecked(superDepth, "outer", [0]);
          onSelf = true;
          var call4372 = callmethodChecked(call4371, "checkForReservedName(1)", [1], var_ident);
          setLineNumber(1033);    // compilenode member
          // call case 6: other requests
          var call4375 = callmethodChecked(var_k, "methdec", []);
          // call case 6: other requests
          var call4376 = callmethodChecked(var_surroundingScope, "addNode(1)as(1)", [1, 1], var_ident, call4375);
          setLineNumber(1034);    // compilenode identifier
          // call case 6: other requests
          var call4378 = callmethodChecked(var_ident, "isDeclaredByParent:=(1)", [1], GraceTrue);
          var if4379 = GraceDone;
          setLineNumber(1035);    // compilenode member
          // call case 6: other requests
          var call4381 = callmethodChecked(var_ident, "isBindingOccurrence", []);
          if (Grace_isTrue(call4381)) {
            setLineNumber(1037);    // compilenode string
            var string4384 = new GraceString("method");
            // call case 6: other requests
            // call case 3: self.outer request
            var call4386 = callmethodChecked(superDepth, "outer", [0]);
            onSelf = true;
            var call4387 = callmethodChecked(call4386, "newScopeIn(1)kind(1)", [1, 1], var_surroundingScope, string4384);
            // call case 6: other requests
            var call4388 = callmethodChecked(var_o, "scope:=(1)", [1], call4387);
            var if4389 = GraceDone;
            setLineNumber(1038);    // compilenode member
            // call case 6: other requests
            var call4391 = callmethodChecked(var_o, "returnsObject", []);
            if (Grace_isTrue(call4391)) {
              setLineNumber(1039);    // compilenode identifier
              // call case 6: other requests
              var call4393 = callmethodChecked(var_o, "isFresh:=(1)", [1], GraceTrue);
              if4389 = call4393;
            }
            if4379 = if4389;
          }
          setLineNumber(1042);    // compilenode identifier
          return GraceTrue;
        };
        func4341.paramCounts = [1, 1];
        obj4098.methods["visitMethod(1)up(1)"] = func4341;
        func4341.definitionLine = 1021;
        func4341.definitionModule = "identifierresolution";
        var func4394 = function(argcv) {    // method visitMethodType(_)up(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          var var_as = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(1045);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call4399 = callmethodChecked(var_as, "parent", []);
          var call4400 = callmethodChecked(call4399, "scope", []);
          var string4401 = new GraceString("methodtype");
          // call case 6: other requests
          // call case 3: self.outer request
          var call4403 = callmethodChecked(superDepth, "outer", [0]);
          onSelf = true;
          var call4404 = callmethodChecked(call4403, "newScopeIn(1)kind(1)", [1, 1], call4400, string4401);
          // call case 6: other requests
          var call4405 = callmethodChecked(var_o, "scope:=(1)", [1], call4404);
          setLineNumber(1048);    // compilenode identifier
          return GraceTrue;
        };
        func4394.paramCounts = [1, 1];
        obj4098.methods["visitMethodType(1)up(1)"] = func4394;
        func4394.definitionLine = 1044;
        func4394.definitionModule = "identifierresolution";
        var func4406 = function(argcv) {    // method visitObject(_)up(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          var var_as = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(1051);    // compilenode member
          // call case 6: other requests
          var call4408 = callmethodChecked(var_as, "parent", []);
          var var_myParent = call4408;
          setLineNumber(1052);    // compilenode member
          // call case 6: other requests
          var call4412 = callmethodChecked(var_myParent, "scope", []);
          var string4413 = new GraceString("object");
          // call case 6: other requests
          // call case 3: self.outer request
          var call4415 = callmethodChecked(superDepth, "outer", [0]);
          onSelf = true;
          var call4416 = callmethodChecked(call4415, "newScopeIn(1)kind(1)", [1, 1], call4412, string4413);
          // call case 6: other requests
          var call4417 = callmethodChecked(var_o, "scope:=(1)", [1], call4416);
          var if4418 = GraceDone;
          setLineNumber(1053);    // compilenode member
          // call case 6: other requests
          var call4420 = callmethodChecked(var_o, "inTrait", []);
          if (Grace_isTrue(call4420)) {
            // call case 6: other requests
            // call case 3: self.outer request
            var call4423 = callmethodChecked(superDepth, "outer", [0]);
            onSelf = true;
            var call4424 = callmethodChecked(call4423, "checkTraitBody(1)", [1], var_o);
            if4418 = call4424;
          }
          var if4425 = GraceDone;
          setLineNumber(1054);    // compilenode string
          var string4426 = new GraceString("defdec");
          // call case 6: other requests
          var call4429 = callmethodChecked(var_myParent, "kind", []);
          var opresult4431 = callmethodChecked(call4429, "==(1)", [1], string4426);
          if (Grace_isTrue(opresult4431)) {
            setLineNumber(1055);    // compilenode member
            // call case 6: other requests
            var call4434 = callmethodChecked(var_myParent, "nameString", []);
            // call case 6: other requests
            var call4435 = callmethodChecked(var_o, "name:=(1)", [1], call4434);
            if4425 = call4435;
          }
          setLineNumber(1057);    // compilenode identifier
          return GraceTrue;
        };
        func4406.paramCounts = [1, 1];
        obj4098.methods["visitObject(1)up(1)"] = func4406;
        func4406.definitionLine = 1050;
        func4406.definitionModule = "identifierresolution";
        var func4436 = function(argcv) {    // method visitModule(_)up(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          var var_as = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          // visitModule(_)up(_) is a simple accessor - elide try ... catch
          setLineNumber(1061);    // compilenode identifier
          return GraceTrue;
        };
        func4436.paramCounts = [1, 1];
        obj4098.methods["visitModule(1)up(1)"] = func4436;
        func4436.definitionLine = 1059;
        func4436.definitionModule = "identifierresolution";
        var func4437 = function(argcv) {    // method visitTypeDec(_)up(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          var var_as = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(1064);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call4440 = callmethodChecked(var_as, "parent", []);
          var call4441 = callmethodChecked(call4440, "scope", []);
          var var_enclosingScope = call4441;
          setLineNumber(1065);    // compilenode member
          // call case 6: other requests
          var call4444 = callmethodChecked(var_o, "name", []);
          // call case 6: other requests
          var call4446 = callmethodChecked(var_k, "typedec", []);
          // call case 6: other requests
          var call4447 = callmethodChecked(var_enclosingScope, "addNode(1)as(1)", [1, 1], call4444, call4446);
          setLineNumber(1066);    // compilenode identifier
          // call case 6: other requests
          // call case 6: other requests
          var call4450 = callmethodChecked(var_o, "name", []);
          var call4451 = callmethodChecked(call4450, "isDeclaredByParent:=(1)", [1], GraceTrue);
          setLineNumber(1067);    // compilenode string
          var string4454 = new GraceString("typedec");
          // call case 6: other requests
          // call case 3: self.outer request
          var call4456 = callmethodChecked(superDepth, "outer", [0]);
          onSelf = true;
          var call4457 = callmethodChecked(call4456, "newScopeIn(1)kind(1)", [1, 1], var_enclosingScope, string4454);
          // call case 6: other requests
          var call4458 = callmethodChecked(var_o, "scope:=(1)", [1], call4457);
          setLineNumber(1071);    // compilenode identifier
          return GraceTrue;
        };
        func4437.paramCounts = [1, 1];
        obj4098.methods["visitTypeDec(1)up(1)"] = func4437;
        func4437.definitionLine = 1063;
        func4437.definitionModule = "identifierresolution";
        var func4459 = function(argcv) {    // method visitTypeLiteral(_)up(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          var var_as = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(1074);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call4464 = callmethodChecked(var_as, "parent", []);
          var call4465 = callmethodChecked(call4464, "scope", []);
          var string4466 = new GraceString("type");
          // call case 6: other requests
          // call case 3: self.outer request
          var call4468 = callmethodChecked(superDepth, "outer", [0]);
          onSelf = true;
          var call4469 = callmethodChecked(call4468, "newScopeIn(1)kind(1)", [1, 1], call4465, string4466);
          // call case 6: other requests
          var call4470 = callmethodChecked(var_o, "scope:=(1)", [1], call4469);
          setLineNumber(1075);    // compilenode identifier
          return GraceTrue;
        };
        func4459.paramCounts = [1, 1];
        obj4098.methods["visitTypeLiteral(1)up(1)"] = func4459;
        func4459.definitionLine = 1073;
        func4459.definitionModule = "identifierresolution";
        var func4471 = function(argcv) {    // method visitTypeParameters(_)up(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          var var_as = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(1077);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call4475 = callmethodChecked(var_as, "parent", []);
          var call4476 = callmethodChecked(call4475, "scope", []);
          // call case 6: other requests
          var call4477 = callmethodChecked(var_o, "scope:=(1)", [1], call4476);
          return GraceTrue;
        };
        func4471.paramCounts = [1, 1];
        obj4098.methods["visitTypeParameters(1)up(1)"] = func4471;
        func4471.definitionLine = 1077;
        func4471.definitionModule = "identifierresolution";
        var func4478 = function(argcv) {    // method visitIf(_)up(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          var var_as = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(1078);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call4482 = callmethodChecked(var_as, "parent", []);
          var call4483 = callmethodChecked(call4482, "scope", []);
          // call case 6: other requests
          var call4484 = callmethodChecked(var_o, "scope:=(1)", [1], call4483);
          return GraceTrue;
        };
        func4478.paramCounts = [1, 1];
        obj4098.methods["visitIf(1)up(1)"] = func4478;
        func4478.definitionLine = 1078;
        func4478.definitionModule = "identifierresolution";
        var func4485 = function(argcv) {    // method visitMatchCase(_)up(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          var var_as = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(1079);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call4489 = callmethodChecked(var_as, "parent", []);
          var call4490 = callmethodChecked(call4489, "scope", []);
          // call case 6: other requests
          var call4491 = callmethodChecked(var_o, "scope:=(1)", [1], call4490);
          return GraceTrue;
        };
        func4485.paramCounts = [1, 1];
        obj4098.methods["visitMatchCase(1)up(1)"] = func4485;
        func4485.definitionLine = 1079;
        func4485.definitionModule = "identifierresolution";
        var func4492 = function(argcv) {    // method visitTryCatch(_)up(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          var var_as = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(1080);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call4496 = callmethodChecked(var_as, "parent", []);
          var call4497 = callmethodChecked(call4496, "scope", []);
          // call case 6: other requests
          var call4498 = callmethodChecked(var_o, "scope:=(1)", [1], call4497);
          return GraceTrue;
        };
        func4492.paramCounts = [1, 1];
        obj4098.methods["visitTryCatch(1)up(1)"] = func4492;
        func4492.definitionLine = 1080;
        func4492.definitionModule = "identifierresolution";
        var func4499 = function(argcv) {    // method visitSignaturePart(_)up(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          var var_as = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(1081);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call4503 = callmethodChecked(var_as, "parent", []);
          var call4504 = callmethodChecked(call4503, "scope", []);
          // call case 6: other requests
          var call4505 = callmethodChecked(var_o, "scope:=(1)", [1], call4504);
          return GraceTrue;
        };
        func4499.paramCounts = [1, 1];
        obj4098.methods["visitSignaturePart(1)up(1)"] = func4499;
        func4499.definitionLine = 1081;
        func4499.definitionModule = "identifierresolution";
        var func4506 = function(argcv) {    // method visitArray(_)up(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          var var_as = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(1082);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call4510 = callmethodChecked(var_as, "parent", []);
          var call4511 = callmethodChecked(call4510, "scope", []);
          // call case 6: other requests
          var call4512 = callmethodChecked(var_o, "scope:=(1)", [1], call4511);
          return GraceTrue;
        };
        func4506.paramCounts = [1, 1];
        obj4098.methods["visitArray(1)up(1)"] = func4506;
        func4506.definitionLine = 1082;
        func4506.definitionModule = "identifierresolution";
        var func4513 = function(argcv) {    // method visitMember(_)up(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          var var_as = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(1083);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call4517 = callmethodChecked(var_as, "parent", []);
          var call4518 = callmethodChecked(call4517, "scope", []);
          // call case 6: other requests
          var call4519 = callmethodChecked(var_o, "scope:=(1)", [1], call4518);
          return GraceTrue;
        };
        func4513.paramCounts = [1, 1];
        obj4098.methods["visitMember(1)up(1)"] = func4513;
        func4513.definitionLine = 1083;
        func4513.definitionModule = "identifierresolution";
        var func4520 = function(argcv) {    // method visitGeneric(_)up(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          var var_as = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(1084);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call4524 = callmethodChecked(var_as, "parent", []);
          var call4525 = callmethodChecked(call4524, "scope", []);
          // call case 6: other requests
          var call4526 = callmethodChecked(var_o, "scope:=(1)", [1], call4525);
          return GraceTrue;
        };
        func4520.paramCounts = [1, 1];
        obj4098.methods["visitGeneric(1)up(1)"] = func4520;
        func4520.definitionLine = 1084;
        func4520.definitionModule = "identifierresolution";
        var func4527 = function(argcv) {    // method visitString(_)up(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          var var_as = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(1085);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call4531 = callmethodChecked(var_as, "parent", []);
          var call4532 = callmethodChecked(call4531, "scope", []);
          // call case 6: other requests
          var call4533 = callmethodChecked(var_o, "scope:=(1)", [1], call4532);
          return GraceTrue;
        };
        func4527.paramCounts = [1, 1];
        obj4098.methods["visitString(1)up(1)"] = func4527;
        func4527.definitionLine = 1085;
        func4527.definitionModule = "identifierresolution";
        var func4534 = function(argcv) {    // method visitNum(_)up(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          var var_as = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(1086);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call4538 = callmethodChecked(var_as, "parent", []);
          var call4539 = callmethodChecked(call4538, "scope", []);
          // call case 6: other requests
          var call4540 = callmethodChecked(var_o, "scope:=(1)", [1], call4539);
          return GraceTrue;
        };
        func4534.paramCounts = [1, 1];
        obj4098.methods["visitNum(1)up(1)"] = func4534;
        func4534.definitionLine = 1086;
        func4534.definitionModule = "identifierresolution";
        var func4541 = function(argcv) {    // method visitOp(_)up(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          var var_as = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(1087);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call4545 = callmethodChecked(var_as, "parent", []);
          var call4546 = callmethodChecked(call4545, "scope", []);
          // call case 6: other requests
          var call4547 = callmethodChecked(var_o, "scope:=(1)", [1], call4546);
          return GraceTrue;
        };
        func4541.paramCounts = [1, 1];
        obj4098.methods["visitOp(1)up(1)"] = func4541;
        func4541.definitionLine = 1087;
        func4541.definitionModule = "identifierresolution";
        var func4548 = function(argcv) {    // method visitVarDec(_)up(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          var var_as = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(1088);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call4552 = callmethodChecked(var_as, "parent", []);
          var call4553 = callmethodChecked(call4552, "scope", []);
          // call case 6: other requests
          var call4554 = callmethodChecked(var_o, "scope:=(1)", [1], call4553);
          return GraceTrue;
        };
        func4548.paramCounts = [1, 1];
        obj4098.methods["visitVarDec(1)up(1)"] = func4548;
        func4548.definitionLine = 1088;
        func4548.definitionModule = "identifierresolution";
        var func4555 = function(argcv) {    // method visitReturn(_)up(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          var var_as = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(1089);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call4559 = callmethodChecked(var_as, "parent", []);
          var call4560 = callmethodChecked(call4559, "scope", []);
          // call case 6: other requests
          var call4561 = callmethodChecked(var_o, "scope:=(1)", [1], call4560);
          return GraceTrue;
        };
        func4555.paramCounts = [1, 1];
        obj4098.methods["visitReturn(1)up(1)"] = func4555;
        func4555.definitionLine = 1089;
        func4555.definitionModule = "identifierresolution";
        var func4562 = function(argcv) {    // method visitDialect(_)up(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          var var_as = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(1090);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call4566 = callmethodChecked(var_as, "parent", []);
          var call4567 = callmethodChecked(call4566, "scope", []);
          // call case 6: other requests
          var call4568 = callmethodChecked(var_o, "scope:=(1)", [1], call4567);
          return GraceTrue;
        };
        func4562.paramCounts = [1, 1];
        obj4098.methods["visitDialect(1)up(1)"] = func4562;
        func4562.definitionLine = 1090;
        func4562.definitionModule = "identifierresolution";
        var func4569 = function(argcv) {    // method visitBlank(_)up(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          var var_as = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(1091);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call4573 = callmethodChecked(var_as, "parent", []);
          var call4574 = callmethodChecked(call4573, "scope", []);
          // call case 6: other requests
          var call4575 = callmethodChecked(var_o, "scope:=(1)", [1], call4574);
          return GraceTrue;
        };
        func4569.paramCounts = [1, 1];
        obj4098.methods["visitBlank(1)up(1)"] = func4569;
        func4569.definitionLine = 1091;
        func4569.definitionModule = "identifierresolution";
        var func4576 = function(argcv) {    // method visitCommentNode(_)up(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          var var_as = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(1092);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call4580 = callmethodChecked(var_as, "parent", []);
          var call4581 = callmethodChecked(call4580, "scope", []);
          // call case 6: other requests
          var call4582 = callmethodChecked(var_o, "scope:=(1)", [1], call4581);
          return GraceTrue;
        };
        func4576.paramCounts = [1, 1];
        obj4098.methods["visitCommentNode(1)up(1)"] = func4576;
        func4576.definitionLine = 1092;
        func4576.definitionModule = "identifierresolution";
        setLineNumber(937);    // compilenode identifier
        // call case 6: other requests
        var call4584 = callmethodChecked(var_ast, "baseVisitor$object(1)", [0, 1], this);
        obj4098.superobj = call4584;
        if (call4584.data) obj4098.data = call4584.data;
        if (call4584.hasOwnProperty('_value'))
            obj4098._value = call4584._value;
        superDepth = origSuperDepth;
      };
      obj_init_4098.apply(obj4098, []);
      var var_symbolTableVis = obj4098;
      setLineNumber(1095);    // compilenode object
      var obj4585 = Grace_allocObject(null, "objectScopesVis");
      obj4585.definitionModule = "identifierresolution";
      obj4585.definitionLine = 1095;
      obj4585.outer = this;
      var reader_identifierresolution_outer4586 = function() {
        return this.outer;
      };
      obj4585.methods["outer"] = reader_identifierresolution_outer4586;
      var obj_init_4585 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj4585;
        var func4587 = function(argcv) {    // method visitDefDec(_)up(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          var var_as = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          var if4588 = GraceDone;
          setLineNumber(1103);    // compilenode member
          // call case 6: other requests
          var call4590 = callmethodChecked(var_o, "returnsObject", []);
          if (Grace_isTrue(call4590)) {
            setLineNumber(1104);    // compilenode member
            // call case 6: other requests
            var call4593 = callmethodChecked(var_o, "nameString", []);
            setLineNumber(1105);    // compilenode member
            // call case 6: other requests
            var call4595 = callmethodChecked(var_o, "returnedObjectScope", []);
            // call case 6: other requests
            setLineNumber(1104);    // compilenode member
            // call case 6: other requests
            var call4597 = callmethodChecked(var_o, "scope", []);
            var call4598 = callmethodChecked(call4597, "at(1)putScope(1)", [1, 1], call4593, call4595);
            if4588 = call4598;
          }
          setLineNumber(1107);    // compilenode identifier
          return GraceTrue;
        };
        func4587.paramCounts = [1, 1];
        obj4585.methods["visitDefDec(1)up(1)"] = func4587;
        func4587.definitionLine = 1102;
        func4587.definitionModule = "identifierresolution";
        var func4599 = function(argcv) {    // method visitMethod(_)up(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          var var_as = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(1110);    // compilenode member
          // call case 6: other requests
          var call4601 = callmethodChecked(var_as, "parent", []);
          var var_myParent = call4601;
          var if4602 = GraceDone;
          setLineNumber(1111);    // compilenode member
          // call case 6: other requests
          var call4604 = callmethodChecked(var_o, "returnsObject", []);
          if (Grace_isTrue(call4604)) {
            setLineNumber(1112);    // compilenode member
            // call case 6: other requests
            var call4607 = callmethodChecked(var_o, "nameString", []);
            // call case 6: other requests
            var call4609 = callmethodChecked(var_o, "returnedObjectScope", []);
            // call case 6: other requests
            // call case 6: other requests
            var call4611 = callmethodChecked(var_myParent, "scope", []);
            var call4612 = callmethodChecked(call4611, "at(1)putScope(1)", [1, 1], call4607, call4609);
            var if4613 = GraceDone;
            setLineNumber(1113);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            // call case 6: other requests
            // call case 6: other requests
            var call4618 = callmethodChecked(var_as, "forebears", []);
            var call4619 = callmethodChecked(call4618, "forebears", []);
            var call4620 = callmethodChecked(call4619, "isEmpty", []);
            var call4621 = callmethodChecked(call4620, "not", []);
            if (Grace_isTrue(call4621)) {
              setLineNumber(1115);    // compilenode member
              // call case 6: other requests
              var call4623 = callmethodChecked(var_myParent, "name", []);
              var var_factoryName = call4623;
              var if4624 = GraceDone;
              setLineNumber(1116);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              // call case 6: other requests
              var call4628 = callmethodChecked(var_o, "body", []);
              var call4629 = callmethodChecked(call4628, "last", []);
              var call4630 = callmethodChecked(call4629, "isObject", []);
              var string4632 = new GraceString("object");
              var opresult4635 = callmethodChecked(var_factoryName, "\u2260(1)", [1], string4632);
              var opresult4637 = callmethodChecked(opresult4635, "&&(1)", [1], call4630);
              if (Grace_isTrue(opresult4637)) {
                setLineNumber(1117);    // compilenode member
                // call case 6: other requests
                // call case 6: other requests
                // call case 6: other requests
                var call4642 = callmethodChecked(var_o, "body", []);
                var call4643 = callmethodChecked(call4642, "last", []);
                var call4644 = callmethodChecked(call4643, "name", []);
                var string4646 = new GraceString(".");
                var opresult4649 = callmethodChecked(var_factoryName, "++(1)", [1], string4646);
                var opresult4651 = callmethodChecked(opresult4649, "++(1)", [1], call4644);
                // call case 6: other requests
                // call case 6: other requests
                // call case 6: other requests
                var call4654 = callmethodChecked(var_o, "body", []);
                var call4655 = callmethodChecked(call4654, "last", []);
                var call4656 = callmethodChecked(call4655, "name:=(1)", [1], opresult4651);
                if4624 = call4656;
              }
              if4613 = if4624;
            }
            if4602 = if4613;
          }
          setLineNumber(1121);    // compilenode identifier
          return GraceTrue;
        };
        func4599.paramCounts = [1, 1];
        obj4585.methods["visitMethod(1)up(1)"] = func4599;
        func4599.definitionLine = 1109;
        func4599.definitionModule = "identifierresolution";
        setLineNumber(1101);    // compilenode identifier
        // call case 6: other requests
        var call4658 = callmethodChecked(var_ast, "baseVisitor$object(1)", [0, 1], this);
        obj4585.superobj = call4658;
        if (call4658.data) obj4585.data = call4658.data;
        if (call4658.hasOwnProperty('_value'))
            obj4585._value = call4658._value;
        superDepth = origSuperDepth;
      };
      obj_init_4585.apply(obj4585, []);
      var var_objectScopesVis = obj4585;
      setLineNumber(1125);    // compilenode object
      var obj4659 = Grace_allocObject(null, "inheritanceVis");
      obj4659.definitionModule = "identifierresolution";
      obj4659.definitionLine = 1125;
      obj4659.outer = this;
      var reader_identifierresolution_outer4660 = function() {
        return this.outer;
      };
      obj4659.methods["outer"] = reader_identifierresolution_outer4660;
      var obj_init_4659 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj4659;
        var func4661 = function(argcv) {    // method visitObject(_)up(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          var var_as = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(1128);    // compilenode identifier
          // call case 6: other requests
          // call case 3: self.outer request
          var call4664 = callmethodChecked(superDepth, "outer", [0]);
          onSelf = true;
          var call4665 = callmethodChecked(call4664, "collectParentNames(1)", [1], var_o);
          setLineNumber(1129);    // compilenode identifier
          return GraceTrue;
        };
        func4661.paramCounts = [1, 1];
        obj4659.methods["visitObject(1)up(1)"] = func4661;
        func4661.definitionLine = 1127;
        func4661.definitionModule = "identifierresolution";
        var func4666 = function(argcv) {    // method visitModule(_)up(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          var var_as = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(1132);    // compilenode identifier
          // call case 6: other requests
          // call case 3: self.outer request
          var call4669 = callmethodChecked(superDepth, "outer", [0]);
          onSelf = true;
          var call4670 = callmethodChecked(call4669, "collectParentNames(1)", [1], var_o);
          setLineNumber(1133);    // compilenode identifier
          return GraceTrue;
        };
        func4666.paramCounts = [1, 1];
        obj4659.methods["visitModule(1)up(1)"] = func4666;
        func4666.definitionLine = 1131;
        func4666.definitionModule = "identifierresolution";
        setLineNumber(1126);    // compilenode identifier
        // call case 6: other requests
        var call4672 = callmethodChecked(var_ast, "baseVisitor$object(1)", [0, 1], this);
        obj4659.superobj = call4672;
        if (call4672.data) obj4659.data = call4672.data;
        if (call4672.hasOwnProperty('_value'))
            obj4659._value = call4672._value;
        superDepth = origSuperDepth;
      };
      obj_init_4659.apply(obj4659, []);
      var var_inheritanceVis = obj4659;
      setLineNumber(1137);    // compilenode identifier
      // call case 6: other requests
      var call4674 = callmethodChecked(var_topNode, "accept(1)from(1)", [1, 1], var_symbolTableVis, var_topChain);
      setLineNumber(1138);    // compilenode identifier
      // call case 6: other requests
      var call4676 = callmethodChecked(var_topNode, "accept(1)from(1)", [1, 1], var_objectScopesVis, var_topChain);
      setLineNumber(1139);    // compilenode identifier
      // call case 6: other requests
      var call4678 = callmethodChecked(var_topNode, "accept(1)from(1)", [1, 1], var_inheritanceVis, var_topChain);
      return call4678;
    };
    func4097.paramCounts = [1, 1];
    this.methods["buildSymbolTableFor(1)ancestors(1)"] = func4097;
    func4097.definitionLine = 935;
    func4097.definitionModule = "identifierresolution";
    setLineNumber(1142);    // compilenode method
    var func4679 = function(argcv) {    // method collectParentNames(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_node = arguments[curarg];
      curarg++;
      setModuleName("identifierresolution");
      setLineNumber(1145);    // compilenode member
      // call case 6: other requests
      var call4681 = callmethodChecked(var_node, "scope", []);
      var var_nodeScope = call4681;
      var if4682 = GraceDone;
      setLineNumber(1146);    // compilenode member
      // call case 6: other requests
      var call4685 = callmethodChecked(var_ast, "fakeSymbolTable", []);
      var opresult4687 = callmethodChecked(call4685, "==(1)", [1], var_nodeScope);
      if (Grace_isTrue(opresult4687)) {
        setLineNumber(1147);    // compilenode string
        var string4689 = new GraceString("");
        // call case 6: other requests
        var call4692 = callmethodChecked(var_node, "pretty(1)", [1], new GraceNum(0));
        var string4694 = new GraceString(" has no scope.\n");
        var string4697 = new GraceString("node ");
        var opresult4699 = callmethodChecked(string4697, "++(1)", [1], var_node);
        var opresult4701 = callmethodChecked(opresult4699, "++(1)", [1], string4694);
        var opresult4703 = callmethodChecked(opresult4701, "++(1)", [1], call4692);
        var opresult4705 = callmethodChecked(opresult4703, "++(1)", [1], string4689);
        // call case 6: other requests
        var call4706 = callmethodChecked(var_util, "log(1)verbose(1)", [1, 1], new GraceNum(20), opresult4705);
        if4682 = call4706;
      }
      var if4707 = GraceDone;
      setLineNumber(1149);    // compilenode member
      // call case 6: other requests
      var call4710 = callmethodChecked(var_nodeScope, "inheritedNames", []);
      var opresult4712 = callmethodChecked(call4710, "==(1)", [1], var_completed);
      if (Grace_isTrue(opresult4712)) {
        setLineNumber(1151);    // compilenode identifier
        return var_done;
      }
      var if4713 = GraceDone;
      setLineNumber(1152);    // compilenode member
      // call case 6: other requests
      var call4716 = callmethodChecked(var_nodeScope, "inheritedNames", []);
      var opresult4718 = callmethodChecked(call4716, "==(1)", [1], var_inProgress);
      if (Grace_isTrue(opresult4718)) {
        setLineNumber(1153);    // compilenode string
        var string4720 = new GraceString("cyclic inheritance or trait use");
        setLineNumber(1154);    // compilenode member
        // call case 6: other requests
        var call4722 = callmethodChecked(var_node, "line", []);
        // call case 6: other requests
        var call4724 = callmethodChecked(var_node, "linePos", []);
        // call case 6: other requests
        var call4726 = callmethodChecked(var_node, "linePos", []);
        // call case 6: other requests
        setLineNumber(1153);    // compilenode identifier
        var call4727 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], string4720, call4722, call4724, call4726);
        if4713 = call4727;
      }
      setLineNumber(1156);    // compilenode identifier
      // call case 6: other requests
      var call4729 = callmethodChecked(var_nodeScope, "inheritedNames:=(1)", [1], var_inProgress);
      setLineNumber(1157);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call4731 = callmethodChecked(this, "gatherInheritedNames(1)", [1], var_node);
      setLineNumber(1158);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call4733 = callmethodChecked(this, "gatherUsedNames(1)", [1], var_node);
      setLineNumber(1159);    // compilenode identifier
      // call case 6: other requests
      var call4735 = callmethodChecked(var_nodeScope, "inheritedNames:=(1)", [1], var_completed);
      return call4735;
    };
    func4679.paramCounts = [1];
    this.methods["collectParentNames(1)"] = func4679;
    func4679.definitionLine = 1142;
    func4679.definitionModule = "identifierresolution";
    setLineNumber(1162);    // compilenode method
    var func4736 = function(argcv) {    // method gatherInheritedNames(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_node = arguments[curarg];
      curarg++;
      setModuleName("identifierresolution");
      setLineNumber(1163);    // compilenode member
      // call case 6: other requests
      var call4738 = callmethodChecked(var_node, "superclass", []);
      var var_inhNode = call4738;
      setLineNumber(1164);    // compilenode member
      // call case 6: other requests
      var call4740 = callmethodChecked(var_node, "scope", []);
      var var_objScope = call4740;
      setLineNumber(1165);    // compilenode vardec
      var var_superScope;
      setLineNumber(1166);    // compilenode member
      // call case 6: other requests
      var call4742 = callmethodChecked(var_k, "inherited", []);
      var var_inheritedKind = call4742;
      var if4743 = GraceDone;
      setLineNumber(1167);    // compilenode identifier
      var opresult4746 = callmethodChecked(GraceFalse, "==(1)", [1], var_inhNode);
      if (Grace_isTrue(opresult4746)) {
        setLineNumber(1168);    // compilenode string
        var string4748 = new GraceString("graceObject");
        // call case 6: other requests
        // call case 6: other requests
        var call4750 = callmethodChecked(var_ast, "identifierNode", []);
        var call4751 = callmethodChecked(call4750, "new(2)scope(1)", [2, 1], string4748, GraceFalse, var_objScope);
        var var_gO = call4751;
        setLineNumber(1169);    // compilenode identifier
        // call case 6: other requests
        // call case 6: other requests
        var call4754 = callmethodChecked(var_ast, "inheritsNode", []);
        var call4755 = callmethodChecked(call4754, "new(1)scope(1)", [1, 1], var_gO, var_objScope);
        var_inhNode = call4755;
        setLineNumber(1170);    // compilenode identifier
        var_superScope = var_graceObjectScope;
        setLineNumber(1171);    // compilenode member
        // call case 6: other requests
        var call4757 = callmethodChecked(var_k, "graceObjectMethod", []);
        var_inheritedKind = call4757;
        if4743 = GraceDone;
      } else {
        setLineNumber(1173);    // compilenode member
        // call case 6: other requests
        var call4760 = callmethodChecked(var_inhNode, "value", []);
        // call case 6: other requests
        var call4761 = callmethodChecked(var_objScope, "scopeReferencedBy(1)", [1], call4760);
        var_superScope = call4761;
        var if4762 = GraceDone;
        setLineNumber(1176);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call4765 = callmethodChecked(var_superScope, "isUniversal", []);
        var call4766 = callmethodChecked(call4765, "not", []);
        if (Grace_isTrue(call4766)) {
          var if4767 = GraceDone;
          setLineNumber(1177);    // compilenode member
          // call case 6: other requests
          var call4769 = callmethodChecked(var_superScope, "node", []);
          // call case 6: other requests
          var call4772 = callmethodChecked(var_ast, "nullNode", []);
          var opresult4774 = callmethodChecked(call4772, "\u2260(1)", [1], call4769);
          if (Grace_isTrue(opresult4774)) {
            setLineNumber(1180);    // compilenode member
            // call case 6: other requests
            var call4777 = callmethodChecked(var_superScope, "node", []);
            // call case 4: self request
            onSelf = true;
            var call4778 = callmethodChecked(this, "collectParentNames(1)", [1], call4777);
            if4767 = call4778;
          } else {
            setLineNumber(1182);    // compilenode string
            var string4780 = new GraceString("\u203a.superscope.node == nullNode");
            // call case 6: other requests
            var call4783 = callmethodChecked(var_node, "nameString", []);
            var string4785 = new GraceString("\u2039");
            var opresult4787 = callmethodChecked(string4785, "++(1)", [1], call4783);
            var opresult4789 = callmethodChecked(opresult4787, "++(1)", [1], string4780);
            // call case 6: other requests
            var call4790 = callmethodChecked(var_util, "log(1)verbose(1)", [1, 1], new GraceNum(70), opresult4789);
            if4767 = call4790;
          }
          if4762 = if4767;
        } else {
          setLineNumber(1185);    // compilenode string
          var string4792 = new GraceString(" is universal");
          // call case 6: other requests
          var call4795 = callmethodChecked(var_node, "nameString", []);
          var string4797 = new GraceString("superscope of ");
          var opresult4799 = callmethodChecked(string4797, "++(1)", [1], call4795);
          var opresult4801 = callmethodChecked(opresult4799, "++(1)", [1], string4792);
          // call case 6: other requests
          var call4802 = callmethodChecked(var_util, "log(1)verbose(1)", [1, 1], new GraceNum(70), opresult4801);
          if4762 = call4802;
        }
        if4743 = if4762;
      }
      setLineNumber(1188);    // compilenode block
      var block4804 = new GraceBlock(this, 1188, 1);
      setLineNumber(1);    // compilenode identifier
      block4804.real = function(var_each) {
        var if4805 = GraceDone;
        setLineNumber(1189);    // compilenode string
        var string4806 = new GraceString("self");
        var opresult4809 = callmethodChecked(var_each, "\u2260(1)", [1], string4806);
        if (Grace_isTrue(opresult4809)) {
          setLineNumber(1190);    // compilenode identifier
          // call case 6: other requests
          var call4811 = callmethodChecked(var_objScope, "addName(1)as(1)", [1, 1], var_each, var_inheritedKind);
          setLineNumber(1191);    // compilenode identifier
          // call case 6: other requests
          // call case 6: other requests
          var call4814 = callmethodChecked(var_inhNode, "providedNames", []);
          var call4815 = callmethodChecked(call4814, "add(1)", [1], var_each);
          if4805 = call4815;
        }
        return if4805;
      };
      // call case 6: other requests
      setLineNumber(1188);    // compilenode member
      // call case 6: other requests
      var call4817 = callmethodChecked(var_superScope, "elements", []);
      var call4818 = callmethodChecked(call4817, "keysDo(1)", [1], block4804);
      setLineNumber(1194);    // compilenode block
      var block4820 = new GraceBlock(this, 1194, 1);
      setLineNumber(1);    // compilenode identifier
      block4820.real = function(var_a) {
        setLineNumber(1195);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call4823 = callmethodChecked(var_a, "oldName", []);
        var call4824 = callmethodChecked(call4823, "nameString", []);
        var var_old = call4824;
        var if4825 = GraceDone;
        setLineNumber(1196);    // compilenode identifier
        // call case 6: other requests
        var call4827 = callmethodChecked(var_superScope, "contains(1)", [1], var_old);
        if (Grace_isTrue(call4827)) {
          setLineNumber(1197);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call4831 = callmethodChecked(var_a, "newName", []);
          var call4832 = callmethodChecked(call4831, "nameString", []);
          // call case 6: other requests
          // call case 6: other requests
          var call4834 = callmethodChecked(var_inhNode, "providedNames", []);
          var call4835 = callmethodChecked(call4834, "add(1)", [1], call4832);
          if4825 = call4835;
        } else {
          setLineNumber(1200);    // compilenode string
          var string4837 = new GraceString("because it is not present in the inherited object");
          setLineNumber(1199);    // compilenode string
          var string4839 = new GraceString(" ");
          var string4842 = new GraceString("can't define an alias for ");
          var opresult4844 = callmethodChecked(string4842, "++(1)", [1], var_old);
          var opresult4846 = callmethodChecked(opresult4844, "++(1)", [1], string4839);
          var opresult4848 = callmethodChecked(opresult4846, "++(1)", [1], string4837);
          setLineNumber(1201);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call4851 = callmethodChecked(var_a, "oldName", []);
          var call4852 = callmethodChecked(call4851, "line", []);
          // call case 6: other requests
          // call case 6: other requests
          var call4855 = callmethodChecked(var_a, "oldName", []);
          var call4856 = callmethodChecked(call4855, "linePos", []);
          setLineNumber(1202);    // compilenode member
          // call case 6: other requests
          var call4859 = callmethodChecked(var_old, "size", []);
          // call case 6: other requests
          // call case 6: other requests
          var call4863 = callmethodChecked(var_a, "oldName", []);
          var call4864 = callmethodChecked(call4863, "linePos", []);
          var opresult4866 = callmethodChecked(call4864, "+(1)", [1], call4859);
          var diff4868 = callmethodChecked(opresult4866, "-(1)", [1], new GraceNum(1));
          // call case 6: other requests
          setLineNumber(1199);    // compilenode identifier
          var call4869 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], opresult4848, call4852, call4856, diff4868);
          if4825 = call4869;
        }
        return if4825;
      };
      // call case 6: other requests
      setLineNumber(1194);    // compilenode member
      // call case 6: other requests
      var call4871 = callmethodChecked(var_inhNode, "aliases", []);
      var call4872 = callmethodChecked(call4871, "do(1)", [1], block4820);
      setLineNumber(1205);    // compilenode block
      var block4874 = new GraceBlock(this, 1205, 1);
      setLineNumber(1);    // compilenode identifier
      block4874.real = function(var_exId) {
        setLineNumber(1206);    // compilenode member
        // call case 6: other requests
        var call4877 = callmethodChecked(var_exId, "nameString", []);
        var block4878 = new GraceBlock(this, 1206, 0);
        block4878.real = function() {
          setLineNumber(1208);    // compilenode string
          var string4880 = new GraceString("because it is not present in the inherited object");
          setLineNumber(1207);    // compilenode string
          var string4882 = new GraceString(" ");
          // call case 6: other requests
          var call4885 = callmethodChecked(var_exId, "canonicalName", []);
          var string4887 = new GraceString("can't exclude ");
          var opresult4889 = callmethodChecked(string4887, "++(1)", [1], call4885);
          var opresult4891 = callmethodChecked(opresult4889, "++(1)", [1], string4882);
          var opresult4893 = callmethodChecked(opresult4891, "++(1)", [1], string4880);
          setLineNumber(1209);    // compilenode member
          // call case 6: other requests
          var call4895 = callmethodChecked(var_exId, "line", []);
          // call case 6: other requests
          var call4897 = callmethodChecked(var_exId, "linePos", []);
          setLineNumber(1210);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call4901 = callmethodChecked(var_exId, "nameString", []);
          var call4902 = callmethodChecked(call4901, "size", []);
          // call case 6: other requests
          var call4905 = callmethodChecked(var_exId, "linePos", []);
          var opresult4907 = callmethodChecked(call4905, "+(1)", [1], call4902);
          var diff4909 = callmethodChecked(opresult4907, "-(1)", [1], new GraceNum(1));
          // call case 6: other requests
          setLineNumber(1207);    // compilenode identifier
          var call4910 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], opresult4893, call4895, call4897, diff4909);
          return call4910;
        };
        // call case 6: other requests
        setLineNumber(1206);    // compilenode member
        // call case 6: other requests
        var call4912 = callmethodChecked(var_inhNode, "providedNames", []);
        var call4913 = callmethodChecked(call4912, "remove(1)ifAbsent(1)", [1, 1], call4877, block4878);
        return call4913;
      };
      // call case 6: other requests
      setLineNumber(1205);    // compilenode member
      // call case 6: other requests
      var call4915 = callmethodChecked(var_inhNode, "exclusions", []);
      var call4916 = callmethodChecked(call4915, "do(1)", [1], block4874);
      return call4916;
    };
    func4736.confidential = true;
    func4736.paramCounts = [1];
    this.methods["gatherInheritedNames(1)"] = func4736;
    func4736.definitionLine = 1162;
    func4736.definitionModule = "identifierresolution";
    setLineNumber(1215);    // compilenode method
    var func4917 = function(argcv) {    // method gatherUsedNames(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_objNode = arguments[curarg];
      curarg++;
      setModuleName("identifierresolution");
      setLineNumber(1219);    // compilenode member
      // call case 6: other requests
      var call4919 = callmethodChecked(var_map, "new", []);
      var var_traitMethods = call4919;
      setLineNumber(1220);    // compilenode member
      // call case 6: other requests
      var call4921 = callmethodChecked(var_objNode, "scope", []);
      var var_objScope = call4921;
      setLineNumber(1221);    // compilenode block
      var block4923 = new GraceBlock(this, 1221, 1);
      setLineNumber(1);    // compilenode identifier
      block4923.real = function(var_t) {
        setLineNumber(1222);    // compilenode member
        // call case 6: other requests
        var call4926 = callmethodChecked(var_t, "value", []);
        // call case 6: other requests
        var call4927 = callmethodChecked(var_objScope, "scopeReferencedBy(1)", [1], call4926);
        var var_traitScope = call4927;
        setLineNumber(1223);    // compilenode member
        // call case 6: other requests
        var call4929 = callmethodChecked(var_traitScope, "node", []);
        var var_traitNode = call4929;
        setLineNumber(1224);    // compilenode string
        var string4931 = new GraceString("");
        var string4934 = new GraceString("\ndefined in node ");
        var string4937 = new GraceString(" which has scope ");
        var string4940 = new GraceString("examining parents of trait ");
        var opresult4942 = callmethodChecked(string4940, "++(1)", [1], var_t);
        var opresult4944 = callmethodChecked(opresult4942, "++(1)", [1], string4937);
        var opresult4946 = callmethodChecked(opresult4944, "++(1)", [1], var_traitScope);
        var opresult4948 = callmethodChecked(opresult4946, "++(1)", [1], string4934);
        var opresult4950 = callmethodChecked(opresult4948, "++(1)", [1], var_traitNode);
        var opresult4952 = callmethodChecked(opresult4950, "++(1)", [1], string4931);
        // call case 6: other requests
        var call4953 = callmethodChecked(var_util, "log(1)verbose(1)", [1, 1], new GraceNum(70), opresult4952);
        var if4954 = GraceDone;
        setLineNumber(1225);    // compilenode member
        // call case 6: other requests
        var call4956 = callmethodChecked(var_traitNode, "isObject", []);
        if (Grace_isTrue(call4956)) {
          setLineNumber(1226);    // compilenode member
          // call case 6: other requests
          var call4959 = callmethodChecked(var_traitScope, "node", []);
          // call case 4: self request
          onSelf = true;
          var call4960 = callmethodChecked(this, "collectParentNames(1)", [1], call4959);
          if4954 = call4960;
        } else {
          setLineNumber(1228);    // compilenode string
          var string4962 = new GraceString("");
          // call case 6: other requests
          var call4965 = callmethodChecked(var_traitNode, "pretty(1)", [1], new GraceNum(1));
          var string4967 = new GraceString(" is not an object.\n");
          var string4970 = new GraceString("traitNode ");
          var opresult4972 = callmethodChecked(string4970, "++(1)", [1], var_traitNode);
          var opresult4974 = callmethodChecked(opresult4972, "++(1)", [1], string4967);
          var opresult4976 = callmethodChecked(opresult4974, "++(1)", [1], call4965);
          var opresult4978 = callmethodChecked(opresult4976, "++(1)", [1], string4962);
          // call case 6: other requests
          var call4979 = callmethodChecked(var_util, "log(1)verbose(1)", [1, 1], new GraceNum(70), opresult4978);
          if4954 = call4979;
        }
        setLineNumber(1230);    // compilenode block
        var block4981 = new GraceBlock(this, 1230, 2);
        setLineNumber(1);    // compilenode identifier
        block4981.real = function(var_nm, var_kd) {
          var if4982 = GraceDone;
          setLineNumber(1231);    // compilenode member
          // call case 6: other requests
          var call4984 = callmethodChecked(var_kd, "forUsers", []);
          if (Grace_isTrue(call4984)) {
            setLineNumber(1232);    // compilenode string
            var string4986 = new GraceString(")");
            var string4989 = new GraceString(" is forUsers; (kind = ");
            var string4992 = new GraceString("meth ");
            var opresult4994 = callmethodChecked(string4992, "++(1)", [1], var_nm);
            var opresult4996 = callmethodChecked(opresult4994, "++(1)", [1], string4989);
            var opresult4998 = callmethodChecked(opresult4996, "++(1)", [1], var_kd);
            var opresult5000 = callmethodChecked(opresult4998, "++(1)", [1], string4986);
            // call case 6: other requests
            var call5001 = callmethodChecked(var_util, "log(1)verbose(1)", [1, 1], new GraceNum(70), opresult5000);
            setLineNumber(1233);    // compilenode member
            // call case 6: other requests
            var call5004 = callmethodChecked(var_k, "fromTrait", []);
            // call case 6: other requests
            var call5005 = callmethodChecked(var_objScope, "addName(1)as(1)", [1, 1], var_nm, call5004);
            setLineNumber(1234);    // compilenode identifier
            // call case 6: other requests
            // call case 6: other requests
            var call5008 = callmethodChecked(var_t, "providedNames", []);
            var call5009 = callmethodChecked(call5008, "add(1)", [1], var_nm);
            if4982 = call5009;
          }
          return if4982;
        };
        // call case 6: other requests
        setLineNumber(1230);    // compilenode identifier
        var call5010 = callmethodChecked(var_traitScope, "keysAndKindsDo(1)", [1], block4981);
        setLineNumber(1237);    // compilenode block
        var block5012 = new GraceBlock(this, 1237, 1);
        setLineNumber(1);    // compilenode identifier
        block5012.real = function(var_a) {
          setLineNumber(1238);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call5015 = callmethodChecked(var_a, "oldName", []);
          var call5016 = callmethodChecked(call5015, "nameString", []);
          var var_old = call5016;
          var if5017 = GraceDone;
          setLineNumber(1239);    // compilenode identifier
          // call case 6: other requests
          var call5019 = callmethodChecked(var_traitScope, "contains(1)", [1], var_old);
          if (Grace_isTrue(call5019)) {
            setLineNumber(1240);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call5023 = callmethodChecked(var_a, "newName", []);
            var call5024 = callmethodChecked(call5023, "nameString", []);
            // call case 6: other requests
            // call case 6: other requests
            var call5026 = callmethodChecked(var_t, "providedNames", []);
            var call5027 = callmethodChecked(call5026, "add(1)", [1], call5024);
            if5017 = call5027;
          } else {
            setLineNumber(1243);    // compilenode string
            var string5029 = new GraceString(" because it is not present in the trait");
            var string5032 = new GraceString("");
            var opresult5034 = callmethodChecked(string5032, "++(1)", [1], var_old);
            var opresult5036 = callmethodChecked(opresult5034, "++(1)", [1], string5029);
            setLineNumber(1242);    // compilenode string
            var string5038 = new GraceString("can't define an alias for ");
            var opresult5040 = callmethodChecked(string5038, "++(1)", [1], opresult5036);
            setLineNumber(1244);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call5043 = callmethodChecked(var_a, "oldName", []);
            var call5044 = callmethodChecked(call5043, "line", []);
            // call case 6: other requests
            // call case 6: other requests
            var call5047 = callmethodChecked(var_a, "oldName", []);
            var call5048 = callmethodChecked(call5047, "linePos", []);
            setLineNumber(1245);    // compilenode member
            // call case 6: other requests
            var call5051 = callmethodChecked(var_old, "size", []);
            // call case 6: other requests
            // call case 6: other requests
            var call5055 = callmethodChecked(var_a, "oldName", []);
            var call5056 = callmethodChecked(call5055, "linePos", []);
            var opresult5058 = callmethodChecked(call5056, "+(1)", [1], call5051);
            var diff5060 = callmethodChecked(opresult5058, "-(1)", [1], new GraceNum(1));
            // call case 6: other requests
            setLineNumber(1242);    // compilenode identifier
            var call5061 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], opresult5040, call5044, call5048, diff5060);
            if5017 = call5061;
          }
          return if5017;
        };
        // call case 6: other requests
        setLineNumber(1237);    // compilenode member
        // call case 6: other requests
        var call5063 = callmethodChecked(var_t, "aliases", []);
        var call5064 = callmethodChecked(call5063, "do(1)", [1], block5012);
        setLineNumber(1248);    // compilenode block
        var block5066 = new GraceBlock(this, 1248, 1);
        setLineNumber(1);    // compilenode identifier
        block5066.real = function(var_exId) {
          setLineNumber(1249);    // compilenode member
          // call case 6: other requests
          var call5069 = callmethodChecked(var_exId, "nameString", []);
          var block5070 = new GraceBlock(this, 1249, 0);
          block5070.real = function() {
            setLineNumber(1251);    // compilenode string
            var string5072 = new GraceString("because it is not available in the trait");
            setLineNumber(1250);    // compilenode string
            var string5074 = new GraceString(" ");
            // call case 6: other requests
            var call5077 = callmethodChecked(var_exId, "canonicalName", []);
            var string5079 = new GraceString("can't exclude ");
            var opresult5081 = callmethodChecked(string5079, "++(1)", [1], call5077);
            var opresult5083 = callmethodChecked(opresult5081, "++(1)", [1], string5074);
            var opresult5085 = callmethodChecked(opresult5083, "++(1)", [1], string5072);
            setLineNumber(1252);    // compilenode member
            // call case 6: other requests
            var call5087 = callmethodChecked(var_exId, "line", []);
            // call case 6: other requests
            var call5089 = callmethodChecked(var_exId, "linePos", []);
            setLineNumber(1253);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call5093 = callmethodChecked(var_exId, "nameString", []);
            var call5094 = callmethodChecked(call5093, "size", []);
            // call case 6: other requests
            var call5097 = callmethodChecked(var_exId, "linePos", []);
            var opresult5099 = callmethodChecked(call5097, "+(1)", [1], call5094);
            var diff5101 = callmethodChecked(opresult5099, "-(1)", [1], new GraceNum(1));
            // call case 6: other requests
            setLineNumber(1250);    // compilenode identifier
            var call5102 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], opresult5085, call5087, call5089, diff5101);
            return call5102;
          };
          // call case 6: other requests
          setLineNumber(1249);    // compilenode member
          // call case 6: other requests
          var call5104 = callmethodChecked(var_t, "providedNames", []);
          var call5105 = callmethodChecked(call5104, "remove(1)ifAbsent(1)", [1, 1], call5069, block5070);
          return call5105;
        };
        // call case 6: other requests
        setLineNumber(1248);    // compilenode member
        // call case 6: other requests
        var call5107 = callmethodChecked(var_t, "exclusions", []);
        var call5108 = callmethodChecked(call5107, "do(1)", [1], block5066);
        setLineNumber(1256);    // compilenode block
        var block5110 = new GraceBlock(this, 1256, 1);
        setLineNumber(1);    // compilenode identifier
        block5110.real = function(var_methName) {
          setLineNumber(1257);    // compilenode block
          var block5112 = new GraceBlock(this, 1257, 0);
          block5112.real = function() {
            var array5113 = new PrimitiveGraceList([]);
            return array5113;
          };
          // call case 6: other requests
          var call5114 = callmethodChecked(var_traitMethods, "get(1)ifAbsent(1)", [1, 1], var_methName, block5112);
          var var_definingTraits = call5114;
          setLineNumber(1258);    // compilenode identifier
          // call case 6: other requests
          var call5116 = callmethodChecked(var_definingTraits, "push(1)", [1], var_t);
          setLineNumber(1259);    // compilenode identifier
          // call case 6: other requests
          var call5118 = callmethodChecked(var_traitMethods, "put(2)", [2], var_methName, var_definingTraits);
          return call5118;
        };
        // call case 6: other requests
        setLineNumber(1256);    // compilenode member
        // call case 6: other requests
        var call5120 = callmethodChecked(var_t, "providedNames", []);
        var call5121 = callmethodChecked(call5120, "do(1)", [1], block5110);
        return call5121;
      };
      // call case 6: other requests
      setLineNumber(1221);    // compilenode member
      // call case 6: other requests
      var call5123 = callmethodChecked(var_objNode, "usedTraits", []);
      var call5124 = callmethodChecked(call5123, "do(1)", [1], block4923);
      setLineNumber(1262);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call5126 = callmethodChecked(this, "checkForConflicts(2)", [2], var_objNode, var_traitMethods);
      return call5126;
    };
    func4917.confidential = true;
    func4917.paramCounts = [1];
    this.methods["gatherUsedNames(1)"] = func4917;
    func4917.definitionLine = 1215;
    func4917.definitionModule = "identifierresolution";
    setLineNumber(1265);    // compilenode method
    var func5127 = function(argcv) {    // method checkForConflicts(_,_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_objNode = arguments[curarg];
      curarg++;
      var var_traitMethods = arguments[curarg];
      curarg++;
      setModuleName("identifierresolution");
      setLineNumber(1269);    // compilenode member
      // call case 5: prelude request
      var call5129 = callmethodChecked(var_prelude, "emptyList", []);
      var var_conflicts = call5129;
      setLineNumber(1271);    // compilenode block
      var block5131 = new GraceBlock(this, 1271, 1);
      setLineNumber(1);    // compilenode identifier
      block5131.real = function(var_methName) {
        setLineNumber(1272);    // compilenode identifier
        // call case 6: other requests
        var call5133 = callmethodChecked(var_traitMethods, "get(1)", [1], var_methName);
        var var_sources = call5133;
        var if5134 = GraceDone;
        setLineNumber(1273);    // compilenode member
        // call case 6: other requests
        var call5137 = callmethodChecked(var_sources, "size", []);
        var opresult5139 = callmethodChecked(call5137, ">(1)", [1], new GraceNum(1));
        if (Grace_isTrue(opresult5139)) {
          setLineNumber(1275);    // compilenode string
          var string5141 = new GraceString("");
          // call case 6: other requests
          var call5144 = callmethodChecked(var_objNode, "localNames", []);
          var string5146 = new GraceString("'s localNames = ");
          // call case 6: other requests
          var call5149 = callmethodChecked(var_objNode, "nameString", []);
          var string5151 = new GraceString("\n and ");
          var opresult5153 = callmethodChecked(string5151, "++(1)", [1], call5149);
          var opresult5155 = callmethodChecked(opresult5153, "++(1)", [1], string5146);
          var opresult5157 = callmethodChecked(opresult5155, "++(1)", [1], call5144);
          var opresult5159 = callmethodChecked(opresult5157, "++(1)", [1], string5141);
          setLineNumber(1274);    // compilenode string
          var string5161 = new GraceString("");
          // call case 6: other requests
          var call5164 = callmethodChecked(var_objNode, "scope", []);
          var string5166 = new GraceString("'s scope = ");
          // call case 6: other requests
          var call5169 = callmethodChecked(var_objNode, "nameString", []);
          var string5171 = new GraceString("");
          var opresult5173 = callmethodChecked(string5171, "++(1)", [1], call5169);
          var opresult5175 = callmethodChecked(opresult5173, "++(1)", [1], string5166);
          var opresult5177 = callmethodChecked(opresult5175, "++(1)", [1], call5164);
          var opresult5179 = callmethodChecked(opresult5177, "++(1)", [1], string5161);
          var opresult5181 = callmethodChecked(opresult5179, "++(1)", [1], opresult5159);
          // call case 6: other requests
          var call5182 = callmethodChecked(var_util, "log(1)verbose(1)", [1, 1], new GraceNum(70), opresult5181);
          var if5183 = GraceDone;
          setLineNumber(1276);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          // call case 6: other requests
          var call5187 = callmethodChecked(var_objNode, "localNames", []);
          var call5188 = callmethodChecked(call5187, "contains(1)", [1], var_methName);
          var call5189 = callmethodChecked(call5188, "not", []);
          if (Grace_isTrue(call5189)) {
            setLineNumber(1277);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call5192 = callmethodChecked(this, "conflictForMethodName(1)from(1)", [1, 1], var_methName, var_sources);
            // call case 6: other requests
            var call5193 = callmethodChecked(var_conflicts, "addLast(1)", [1], call5192);
            if5183 = call5193;
          }
          if5134 = if5183;
        }
        return if5134;
      };
      // call case 6: other requests
      setLineNumber(1271);    // compilenode identifier
      var call5194 = callmethodChecked(var_traitMethods, "keysDo(1)", [1], block5131);
      var if5195 = GraceDone;
      setLineNumber(1282);    // compilenode member
      // call case 6: other requests
      var call5197 = callmethodChecked(var_conflicts, "isEmpty", []);
      if (Grace_isTrue(call5197)) {
        return var_done;
      }
      setLineNumber(1284);    // compilenode num
      var var_maxSourceLine = new GraceNum(0);
      var if5198 = GraceDone;
      setLineNumber(1285);    // compilenode member
      // call case 6: other requests
      var call5201 = callmethodChecked(var_conflicts, "size", []);
      var opresult5203 = callmethodChecked(call5201, ">(1)", [1], new GraceNum(1));
      if (Grace_isTrue(opresult5203)) {
        setLineNumber(1286);    // compilenode string
        var string5204 = new GraceString("Trait conflicts found:\n    ");
        if5198 = string5204;
      } else {
        setLineNumber(1288);    // compilenode string
        var string5205 = new GraceString("Trait conflict found: ");
        if5198 = string5205;
      }
      var var_message = if5198;
      setLineNumber(1290);    // compilenode block
      var block5207 = new GraceBlock(this, 1290, 1);
      setLineNumber(1);    // compilenode identifier
      block5207.real = function(var_each) {
        setLineNumber(1291);    // compilenode block
        var block5209 = new GraceBlock(this, 1291, 1);
        setLineNumber(1);    // compilenode identifier
        block5209.real = function(var_s) {
          setLineNumber(1291);    // compilenode member
          // call case 6: other requests
          var call5211 = callmethodChecked(var_s, "nameString", []);
          return call5211;
        };
        // call case 6: other requests
        // call case 6: other requests
        var call5213 = callmethodChecked(var_each, "sources", []);
        var call5214 = callmethodChecked(call5213, "map(1)", [1], block5209);
        var var_sourceList = call5214;
        setLineNumber(1292);    // compilenode block
        var block5216 = new GraceBlock(this, 1292, 2);
        setLineNumber(1);    // compilenode identifier
        block5216.real = function(var_a, var_s) {
          setLineNumber(1292);    // compilenode member
          // call case 6: other requests
          var call5219 = callmethodChecked(var_s, "line", []);
          // call case 5: prelude request
          var call5220 = callmethodChecked(var_prelude, "max(2)", [2], var_a, call5219);
          return call5220;
        };
        setLineNumber(1293);    // compilenode identifier
        // call case 6: other requests
        setLineNumber(1292);    // compilenode member
        // call case 6: other requests
        var call5222 = callmethodChecked(var_each, "sources", []);
        var call5223 = callmethodChecked(call5222, "fold(1)startingWith(1)", [1, 1], block5216, var_maxSourceLine);
        var_maxSourceLine = call5223;
        setLineNumber(1295);    // compilenode string
        var string5224 = new GraceString(".\n    ");
        // call case 4: self request
        onSelf = true;
        var call5227 = callmethodChecked(this, "readableStringFrom(1)", [1], var_sourceList);
        setLineNumber(1294);    // compilenode string
        var string5229 = new GraceString("` is defined in ");
        // call case 6: other requests
        var call5232 = callmethodChecked(var_each, "methodName", []);
        var string5234 = new GraceString("method `");
        var opresult5236 = callmethodChecked(string5234, "++(1)", [1], call5232);
        var opresult5238 = callmethodChecked(opresult5236, "++(1)", [1], string5229);
        var opresult5241 = callmethodChecked(var_message, "++(1)", [1], opresult5238);
        var opresult5243 = callmethodChecked(opresult5241, "++(1)", [1], call5227);
        var opresult5245 = callmethodChecked(opresult5243, "++(1)", [1], string5224);
        var_message = opresult5245;
        return GraceDone;
      };
      // call case 6: other requests
      setLineNumber(1290);    // compilenode identifier
      var call5246 = callmethodChecked(var_conflicts, "do(1)", [1], block5207);
      var if5247 = GraceDone;
      setLineNumber(1297);    // compilenode identifier
      var opresult5250 = callmethodChecked(var_maxSourceLine, "==(1)", [1], new GraceNum(0));
      if (Grace_isTrue(opresult5250)) {
        setLineNumber(1298);    // compilenode identifier
        // call case 6: other requests
        var call5252 = callmethodChecked(var_errormessages, "error(1)", [1], var_message);
        if5247 = call5252;
      } else {
        setLineNumber(1300);    // compilenode identifier
        // call case 6: other requests
        var call5254 = callmethodChecked(var_errormessages, "error(1)atLine(1)", [1, 1], var_message, var_maxSourceLine);
        if5247 = call5254;
      }
      return if5247;
    };
    func5127.paramCounts = [2];
    this.methods["checkForConflicts(2)"] = func5127;
    func5127.definitionLine = 1265;
    func5127.definitionModule = "identifierresolution";
    setLineNumber(1304);    // compilenode method
    var func5255 = function(argcv) {    // method conflictForMethodName(_)from(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_nm = arguments[curarg];
      curarg++;
      var var_srcs = arguments[curarg];
      curarg++;
      setModuleName("identifierresolution");
      var obj5256 = Grace_allocObject(GraceObject, "conflictForMethodName(_)from(_)");
      obj5256.definitionModule = "identifierresolution";
      obj5256.definitionLine = 1304;
      obj5256.outer = this;
      var reader_identifierresolution_outer5257 = function() {
        return this.outer;
      };
      obj5256.methods["outer"] = reader_identifierresolution_outer5257;
      var obj_init_5256 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj5256;
        setLineNumber(1305);    // compilenode identifier
        obj5256.data["methodName"] = var_nm;
        var reader_identifierresolution_methodName5258 = function() {
          return this.data["methodName"];
        };
        reader_identifierresolution_methodName5258.def = true;
        obj5256.methods["methodName"] = reader_identifierresolution_methodName5258;
        setLineNumber(1306);    // compilenode identifier
        obj5256.data["sources"] = var_srcs;
        var reader_identifierresolution_sources5259 = function() {
          return this.data["sources"];
        };
        reader_identifierresolution_sources5259.def = true;
        obj5256.methods["sources"] = reader_identifierresolution_sources5259;
        superDepth = origSuperDepth;
      };
      obj_init_5256.apply(obj5256, []);
      return obj5256;
    };
    func5255.paramCounts = [1, 1];
    this.methods["conflictForMethodName(1)from(1)"] = func5255;
    func5255.definitionLine = 1304;
    func5255.definitionModule = "identifierresolution";
      var func5260 = function(argcv) {    // method conflictForMethodName(_)from(_)$object(_)
        var curarg = 1;
        var var_nm = arguments[curarg];
        curarg++;
        var var_srcs = arguments[curarg];
        curarg++;
        var inheritingObject = arguments[curarg++];
        // Start argument processing
        curarg = 1;
        curarg++;
        curarg++;
        // End argument processing
        setModuleName("identifierresolution");
        var returnTarget = invocationCount;
        invocationCount++;
        var obj5261 = Grace_allocObject(GraceObject, "conflictForMethodName(1)from(1)");
        obj5261.definitionModule = "identifierresolution";
        obj5261.definitionLine = 1304;
        var inho5261 = inheritingObject;
        while (inho5261.superobj) inho5261 = inho5261.superobj;
        inho5261.superobj = obj5261;
        obj5261.data = inheritingObject.data;
        if (inheritingObject.hasOwnProperty('_value'))
          obj5261._value = inheritingObject._value;
        obj5261.outer = this;
        var reader_identifierresolution_outer5262 = function() {
          return this.outer;
        };
        obj5261.methods["outer"] = reader_identifierresolution_outer5262;
        var obj_init_5261 = function() {
          var origSuperDepth = superDepth;
          superDepth = obj5261;
          setLineNumber(1305);    // compilenode identifier
          obj5261.data["methodName"] = var_nm;
          var reader_identifierresolution_methodName5263 = function() {
            return this.data["methodName"];
          };
          reader_identifierresolution_methodName5263.def = true;
          obj5261.methods["methodName"] = reader_identifierresolution_methodName5263;
          setLineNumber(1306);    // compilenode identifier
          obj5261.data["sources"] = var_srcs;
          var reader_identifierresolution_sources5264 = function() {
            return this.data["sources"];
          };
          reader_identifierresolution_sources5264.def = true;
          obj5261.methods["sources"] = reader_identifierresolution_sources5264;
          superDepth = origSuperDepth;
        };
        obj_init_5261.apply(inheritingObject, []);
        return obj5261;
        };
        this.methods["conflictForMethodName(1)from(1)$object(1)"] = func5260;
      setLineNumber(1309);    // compilenode method
      var func5265 = function(argcv) {    // method readableStringFrom(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_xs = arguments[curarg];
        curarg++;
        // Start argument checking
        curarg = 1;
        // call case 5: prelude request
        var call5267 = callmethodChecked(var_prelude, "Sequence", []);
        if (!Grace_isTrue(callmethod(call5267, "match(1)",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in readableStringFrom (arg list 1), which corresponds to parameter xs, does not have " + 
                    callmethod(call5267, "asString", [0])._value + "."));
        curarg++;
        // End argument checking
        setModuleName("identifierresolution");
        setLineNumber(1310);    // compilenode string
        var string5268 = new GraceString("");
        var var_result = string5268;
        setLineNumber(1311);    // compilenode block
        var block5270 = new GraceBlock(this, 1311, 2);
        setLineNumber(1);    // compilenode identifier
        block5270.real = function(var_ix, var_v) {
          setLineNumber(1312);    // compilenode member
          // call case 6: other requests
          var call5272 = callmethodChecked(var_v, "asString", []);
          var opresult5275 = callmethodChecked(var_result, "++(1)", [1], call5272);
          var_result = opresult5275;
          var if5276 = GraceDone;
          setLineNumber(1313);    // compilenode member
          // call case 6: other requests
          var call5279 = callmethodChecked(var_xs, "size", []);
          var diff5281 = callmethodChecked(call5279, "-(1)", [1], new GraceNum(1));
          var opresult5284 = callmethodChecked(var_ix, "==(1)", [1], diff5281);
          if (Grace_isTrue(opresult5284)) {
            setLineNumber(1314);    // compilenode string
            var string5285 = new GraceString(" and ");
            var opresult5288 = callmethodChecked(var_result, "++(1)", [1], string5285);
            var_result = opresult5288;
            if5276 = GraceDone;
          } else {
            var if5289 = GraceDone;
            setLineNumber(1315);    // compilenode member
            // call case 6: other requests
            var call5292 = callmethodChecked(var_xs, "size", []);
            var diff5294 = callmethodChecked(call5292, "-(1)", [1], new GraceNum(1));
            var opresult5297 = callmethodChecked(var_ix, "<(1)", [1], diff5294);
            if (Grace_isTrue(opresult5297)) {
              setLineNumber(1316);    // compilenode string
              var string5298 = new GraceString(", ");
              var opresult5301 = callmethodChecked(var_result, "++(1)", [1], string5298);
              var_result = opresult5301;
              if5289 = GraceDone;
            }
            if5276 = if5289;
          }
          return if5276;
        };
        // call case 6: other requests
        setLineNumber(1311);    // compilenode identifier
        var call5302 = callmethodChecked(var_xs, "keysAndValuesDo(1)", [1], block5270);
        setLineNumber(1319);    // compilenode identifier
        return var_result;
      };
      func5265.paramCounts = [1];
      this.methods["readableStringFrom(1)"] = func5265;
      func5265.definitionLine = 1309;
      func5265.definitionModule = "identifierresolution";
      setLineNumber(1322);    // compilenode method
      var func5303 = function(argcv) {    // method transformBind(_)ancestors(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_bindNode = arguments[curarg];
        curarg++;
        var var_as = arguments[curarg];
        curarg++;
        setModuleName("identifierresolution");
        setLineNumber(1326);    // compilenode member
        // call case 6: other requests
        var call5305 = callmethodChecked(var_bindNode, "dest", []);
        var var_dest = call5305;
        setLineNumber(1327);    // compilenode member
        // call case 6: other requests
        var call5307 = callmethodChecked(var_bindNode, "scope", []);
        var var_currentScope = call5307;
        setLineNumber(1328);    // compilenode member
        // call case 6: other requests
        var call5310 = callmethodChecked(var_bindNode, "line", []);
        // call case 6: other requests
        var call5312 = callmethodChecked(var_bindNode, "linePos", []);
        // call case 6: other requests
        var call5313 = callmethodChecked(var_util, "setPosition(2)", [2], call5310, call5312);
        var if5314 = GraceDone;
        setLineNumber(1329);    // compilenode member
        // call case 6: other requests
        var call5316 = callmethodChecked(var_dest, "isMember", []);
        if (Grace_isTrue(call5316)) {
          setLineNumber(1330);    // compilenode member
          // call case 6: other requests
          var call5318 = callmethodChecked(var_dest, "nameString", []);
          var var_nm = call5318;
          setLineNumber(1331);    // compilenode string
          var string5319 = new GraceString(":=");
          var opresult5322 = callmethodChecked(var_nm, "++(1)", [1], string5319);
          var var_nmGets = opresult5322;
          setLineNumber(1332);    // compilenode member
          // call case 6: other requests
          var call5326 = callmethodChecked(var_bindNode, "value", []);
          var array5324 = new PrimitiveGraceList([call5326]);
          setLineNumber(1333);    // compilenode identifier
          // call case 6: other requests
          setLineNumber(1332);    // compilenode member
          // call case 6: other requests
          var call5328 = callmethodChecked(var_ast, "requestPart", []);
          var call5329 = callmethodChecked(call5328, "request(1)withArgs(1)scope(1)", [1, 1, 1], var_nmGets, array5324, var_currentScope);
          var var_part = call5329;
          setLineNumber(1334);    // compilenode member
          // call case 6: other requests
          var call5332 = callmethodChecked(var_dest, "receiver", []);
          var array5333 = new PrimitiveGraceList([var_part]);
          // call case 6: other requests
          // call case 6: other requests
          var call5335 = callmethodChecked(var_ast, "callNode", []);
          var call5336 = callmethodChecked(call5335, "new(2)scope(1)", [2, 1], call5332, array5333, var_currentScope);
          return call5336;
        } else {
          var if5337 = GraceDone;
          setLineNumber(1335);    // compilenode member
          // call case 6: other requests
          var call5339 = callmethodChecked(var_dest, "isIdentifier", []);
          if (Grace_isTrue(call5339)) {
            setLineNumber(1336);    // compilenode member
            // call case 6: other requests
            var call5341 = callmethodChecked(var_dest, "nameString", []);
            var var_nm = call5341;
            setLineNumber(1337);    // compilenode string
            var string5342 = new GraceString(":=(1)");
            var opresult5345 = callmethodChecked(var_nm, "++(1)", [1], string5342);
            var var_nmGets = opresult5345;
            var if5346 = GraceDone;
            setLineNumber(1338);    // compilenode identifier
            // call case 6: other requests
            var call5348 = callmethodChecked(var_currentScope, "hasDefinitionInNest(1)", [1], var_nmGets);
            if (Grace_isTrue(call5348)) {
              var if5349 = GraceDone;
              setLineNumber(1339);    // compilenode member
              // call case 6: other requests
              var call5351 = callmethodChecked(var_k, "methdec", []);
              // call case 6: other requests
              var call5354 = callmethodChecked(var_currentScope, "kindInNest(1)", [1], var_nmGets);
              var opresult5356 = callmethodChecked(call5354, "==(1)", [1], call5351);
              if (Grace_isTrue(opresult5356)) {
                setLineNumber(1340);    // compilenode member
                // call case 6: other requests
                // call case 6: other requests
                var call5359 = callmethodChecked(var_currentScope, "resolveOuterMethod(1)fromNode(1)", [1, 1], var_nmGets, var_bindNode);
                var call5360 = callmethodChecked(call5359, "receiver", []);
                var var_rcvr = call5360;
                setLineNumber(1341);    // compilenode string
                var string5362 = new GraceString(":=");
                var opresult5365 = callmethodChecked(var_nm, "++(1)", [1], string5362);
                setLineNumber(1342);    // compilenode member
                // call case 6: other requests
                var call5368 = callmethodChecked(var_bindNode, "value", []);
                var array5366 = new PrimitiveGraceList([call5368]);
                // call case 6: other requests
                setLineNumber(1341);    // compilenode member
                // call case 6: other requests
                var call5370 = callmethodChecked(var_ast, "requestPart", []);
                var call5371 = callmethodChecked(call5370, "request(1)withArgs(1)scope(1)", [1, 1, 1], opresult5365, array5366, var_currentScope);
                var var_part = call5371;
                setLineNumber(1343);    // compilenode identifier
                var array5373 = new PrimitiveGraceList([var_part]);
                // call case 6: other requests
                // call case 6: other requests
                var call5375 = callmethodChecked(var_ast, "callNode", []);
                var call5376 = callmethodChecked(call5375, "new(2)scope(1)", [2, 1], var_rcvr, array5373, var_currentScope);
                return call5376;
              } else {
                setLineNumber(1345);    // compilenode string
                var string5378 = new GraceString("bind check 2 failed");
                // call case 6: other requests
                var call5379 = callmethodChecked(var_util, "log(1)verbose(1)", [1, 1], new GraceNum(20), string5378);
                if5349 = call5379;
              }
              if5346 = if5349;
            }
            if5337 = if5346;
          }
          if5314 = if5337;
        }
        setLineNumber(1349);    // compilenode identifier
        return var_bindNode;
      };
      func5303.paramCounts = [1, 1];
      this.methods["transformBind(1)ancestors(1)"] = func5303;
      func5303.definitionLine = 1322;
      func5303.definitionModule = "identifierresolution";
      setLineNumber(1353);    // compilenode method
      var func5380 = function(argcv) {    // method transformInherits(_)ancestors(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_inhNode = arguments[curarg];
        curarg++;
        var var_as = arguments[curarg];
        curarg++;
        setModuleName("identifierresolution");
        setLineNumber(1357);    // compilenode member
        // call case 6: other requests
        var call5382 = callmethodChecked(var_inhNode, "value", []);
        var var_superObject = call5382;
        setLineNumber(1358);    // compilenode member
        // call case 6: other requests
        var call5384 = callmethodChecked(var_inhNode, "scope", []);
        var var_currentScope = call5384;
        var if5385 = GraceDone;
        setLineNumber(1359);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call5388 = callmethodChecked(var_currentScope, "isObjectScope", []);
        var call5389 = callmethodChecked(call5388, "not", []);
        if (Grace_isTrue(call5389)) {
          setLineNumber(1360);    // compilenode string
          var string5391 = new GraceString(" statements must be directly inside an object");
          // call case 6: other requests
          var call5394 = callmethodChecked(var_inhNode, "statementName", []);
          var string5396 = new GraceString("");
          var opresult5398 = callmethodChecked(string5396, "++(1)", [1], call5394);
          var opresult5400 = callmethodChecked(opresult5398, "++(1)", [1], string5391);
          setLineNumber(1361);    // compilenode member
          // call case 6: other requests
          var call5402 = callmethodChecked(var_inhNode, "line", []);
          // call case 6: other requests
          var call5404 = callmethodChecked(var_inhNode, "linePos", []);
          // call case 6: other requests
          var call5407 = callmethodChecked(var_inhNode, "linePos", []);
          var opresult5409 = callmethodChecked(call5407, "+(1)", [1], new GraceNum(7));
          // call case 6: other requests
          setLineNumber(1360);    // compilenode identifier
          var call5410 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], opresult5400, call5402, call5404, opresult5409);
          if5385 = call5410;
        }
        var if5411 = GraceDone;
        setLineNumber(1363);    // compilenode member
        // call case 6: other requests
        var call5413 = callmethodChecked(var_superObject, "isAppliedOccurenceOfIdentifier", []);
        if (Grace_isTrue(call5413)) {
          setLineNumber(1365);    // compilenode member
          // call case 6: other requests
          var call5416 = callmethodChecked(var_superObject, "nameString", []);
          // call case 6: other requests
          var call5417 = callmethodChecked(var_currentScope, "thatDefines(1)", [1], call5416);
          var var_definingScope = call5417;
          var if5418 = GraceDone;
          setLineNumber(1366);    // compilenode string
          var string5419 = new GraceString("built-in");
          // call case 6: other requests
          var call5422 = callmethodChecked(var_definingScope, "variety", []);
          var opresult5424 = callmethodChecked(call5422, "==(1)", [1], string5419);
          if (Grace_isTrue(opresult5424)) {
            return var_inhNode;
          }
          if5411 = if5418;
        }
        setLineNumber(1368);    // compilenode identifier
        // call case 6: other requests
        var call5426 = callmethodChecked(var_currentScope, "scopeReferencedBy(1)", [1], var_superObject);
        var var_superScope = call5426;
        var if5427 = GraceDone;
        setLineNumber(1369);    // compilenode member
        // call case 6: other requests
        var call5429 = callmethodChecked(var_inhNode, "isUse", []);
        if (Grace_isTrue(call5429)) {
        } else {
          var if5430 = GraceDone;
          setLineNumber(1371);    // compilenode member
          // call case 6: other requests
          var call5432 = callmethodChecked(var_inhNode, "inheritsFromMember", []);
          if (Grace_isTrue(call5432)) {
            setLineNumber(1372);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call5436 = callmethodChecked(var_inhNode, "value", []);
            var call5437 = callmethodChecked(call5436, "receiver", []);
            setLineNumber(1373);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call5442 = callmethodChecked(var_inhNode, "value", []);
            var call5443 = callmethodChecked(call5442, "value", []);
            var array5444 = new PrimitiveGraceList([]);
            // call case 6: other requests
            // call case 6: other requests
            var call5446 = callmethodChecked(var_ast, "requestPart", []);
            var call5447 = callmethodChecked(call5446, "request(1)withArgs(1)scope(1)", [1, 1, 1], call5443, array5444, var_currentScope);
            setLineNumber(1374);    // compilenode string
            var string5449 = new GraceString("$object");
            setLineNumber(1375);    // compilenode string
            var string5452 = new GraceString("self");
            // call case 6: other requests
            // call case 6: other requests
            var call5454 = callmethodChecked(var_ast, "identifierNode", []);
            var call5455 = callmethodChecked(call5454, "new(2)scope(1)", [2, 1], string5452, GraceFalse, var_currentScope);
            var array5450 = new PrimitiveGraceList([call5455]);
            // call case 6: other requests
            setLineNumber(1374);    // compilenode member
            // call case 6: other requests
            var call5457 = callmethodChecked(var_ast, "requestPart", []);
            var call5458 = callmethodChecked(call5457, "request(1)withArgs(1)scope(1)", [1, 1, 1], string5449, array5450, var_currentScope);
            var array5438 = new PrimitiveGraceList([call5447, call5458]);
            setLineNumber(1377);    // compilenode identifier
            // call case 6: other requests
            setLineNumber(1372);    // compilenode member
            // call case 6: other requests
            var call5460 = callmethodChecked(var_ast, "callNode", []);
            var call5461 = callmethodChecked(call5460, "new(2)scope(1)", [2, 1], call5437, array5438, var_currentScope);
            var var_newcall = call5461;
            setLineNumber(1378);    // compilenode identifier
            // call case 6: other requests
            var call5463 = callmethodChecked(var_inhNode, "value:=(1)", [1], var_newcall);
            if5430 = call5463;
          } else {
            var if5464 = GraceDone;
            setLineNumber(1379);    // compilenode member
            // call case 6: other requests
            var call5466 = callmethodChecked(var_inhNode, "inheritsFromCall", []);
            if (Grace_isTrue(call5466)) {
              setLineNumber(1380);    // compilenode member
              // call case 6: other requests
              var call5468 = callmethodChecked(var_inhNode, "value", []);
              var var_superCall = call5468;
              setLineNumber(1381);    // compilenode string
              var string5471 = new GraceString("$object");
              setLineNumber(1382);    // compilenode string
              var string5474 = new GraceString("self");
              // call case 6: other requests
              // call case 6: other requests
              var call5476 = callmethodChecked(var_ast, "identifierNode", []);
              var call5477 = callmethodChecked(call5476, "new(2)scope(1)", [2, 1], string5474, GraceFalse, var_currentScope);
              var array5472 = new PrimitiveGraceList([call5477]);
              // call case 6: other requests
              setLineNumber(1381);    // compilenode member
              // call case 6: other requests
              var call5479 = callmethodChecked(var_ast, "requestPart", []);
              var call5480 = callmethodChecked(call5479, "request(1)withArgs(1)", [1, 1], string5471, array5472);
              // call case 6: other requests
              // call case 6: other requests
              var call5482 = callmethodChecked(var_superCall, "with", []);
              var call5483 = callmethodChecked(call5482, "push(1)", [1], call5480);
              if5464 = call5483;
            } else {
              var if5484 = GraceDone;
              setLineNumber(1383);    // compilenode call
              // call case 6: other requests
              var string5487 = new GraceString("ObjectInheritance");
              // call case 6: other requests
              // call case 6: other requests
              var call5489 = callmethodChecked(var_util, "extensions", []);
              var call5490 = callmethodChecked(call5489, "contains(1)", [1], string5487);
              var call5491 = callmethodChecked(call5490, "prefix!", [0]);
              if (Grace_isTrue(call5491)) {
                setLineNumber(1384);    // compilenode string
                var string5493 = new GraceString("inheritance must be from a freshly-created object");
                setLineNumber(1385);    // compilenode member
                // call case 6: other requests
                var call5495 = callmethodChecked(var_inhNode, "line", []);
                // call case 6: other requests
                var call5497 = callmethodChecked(var_superObject, "linePos", []);
                setLineNumber(1386);    // compilenode member
                // call case 6: other requests
                // call case 6: other requests
                var call5501 = callmethodChecked(var_superObject, "nameString", []);
                var call5502 = callmethodChecked(call5501, "size", []);
                // call case 6: other requests
                var call5505 = callmethodChecked(var_superObject, "linePos", []);
                var opresult5507 = callmethodChecked(call5505, "+(1)", [1], call5502);
                var diff5509 = callmethodChecked(opresult5507, "-(1)", [1], new GraceNum(1));
                // call case 6: other requests
                setLineNumber(1384);    // compilenode identifier
                var call5510 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], string5493, call5495, call5497, diff5509);
                if5484 = call5510;
              }
              if5464 = if5484;
            }
            if5430 = if5464;
          }
          if5427 = if5430;
        }
        setLineNumber(1388);    // compilenode identifier
        return var_inhNode;
      };
      func5380.paramCounts = [1, 1];
      this.methods["transformInherits(1)ancestors(1)"] = func5380;
      func5380.definitionLine = 1353;
      func5380.definitionModule = "identifierresolution";
      setLineNumber(1391);    // compilenode method
      var func5511 = function(argcv) {    // method transformCall(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_cNode = arguments[curarg];
        curarg++;
        setModuleName("identifierresolution");
        setLineNumber(1392);    // compilenode member
        // call case 6: other requests
        var call5513 = callmethodChecked(var_cNode, "nameString", []);
        var var_methodName = call5513;
        setLineNumber(1393);    // compilenode member
        // call case 6: other requests
        var call5515 = callmethodChecked(var_cNode, "scope", []);
        var var_s = call5515;
        var if5516 = GraceDone;
        setLineNumber(1394);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call5519 = callmethodChecked(var_cNode, "receiver", []);
        var call5520 = callmethodChecked(call5519, "isImplicit", []);
        if (Grace_isTrue(call5520)) {
          setLineNumber(1395);    // compilenode identifier
          // call case 6: other requests
          var call5522 = callmethodChecked(var_s, "resolveOuterMethod(1)fromNode(1)", [1, 1], var_methodName, var_cNode);
          var var_rcvr = call5522;
          var if5523 = GraceDone;
          setLineNumber(1396);    // compilenode member
          // call case 6: other requests
          var call5525 = callmethodChecked(var_rcvr, "isIdentifier", []);
          if (Grace_isTrue(call5525)) {
            setLineNumber(1397);    // compilenode string
            var string5527 = new GraceString("");
            // call case 6: other requests
            var call5530 = callmethodChecked(var_rcvr, "nameString", []);
            var string5532 = new GraceString(" answered identifier ");
            // call case 6: other requests
            var call5535 = callmethodChecked(var_cNode, "pretty(1)", [1], new GraceNum(0));
            var string5537 = new GraceString("Transformed ");
            var opresult5539 = callmethodChecked(string5537, "++(1)", [1], call5535);
            var opresult5541 = callmethodChecked(opresult5539, "++(1)", [1], string5532);
            var opresult5543 = callmethodChecked(opresult5541, "++(1)", [1], call5530);
            var opresult5545 = callmethodChecked(opresult5543, "++(1)", [1], string5527);
            // call case 6: other requests
            var call5546 = callmethodChecked(var_util, "log(1)verbose(1)", [1, 1], new GraceNum(60), opresult5545);
            setLineNumber(1398);    // compilenode identifier
            return var_cNode;
          }
          setLineNumber(1400);    // compilenode identifier
          // call case 6: other requests
          var call5548 = callmethodChecked(var_s, "thatDefines(1)", [1], var_methodName);
          var var_definingScope = call5548;
          setLineNumber(1402);    // compilenode identifier
          // call case 6: other requests
          var call5551 = callmethodChecked(var_definingScope, "kind(1)", [1], var_methodName);
          // call case 4: self request
          onSelf = true;
          var call5552 = callmethodChecked(this, "checkForAmbiguityOf(1)definedIn(1)as(1)", [1, 1, 1], var_cNode, var_definingScope, call5551);
          setLineNumber(1403);    // compilenode member
          // call case 6: other requests
          var call5555 = callmethodChecked(var_rcvr, "receiver", []);
          // call case 6: other requests
          var call5556 = callmethodChecked(var_cNode, "receiver:=(1)", [1], call5555);
          setLineNumber(1404);    // compilenode member
          // call case 6: other requests
          var call5558 = callmethodChecked(var_cNode, "onSelf", []);
          if5516 = call5558;
        } else {
          setLineNumber(1406);    // compilenode identifier
          if5516 = var_cNode;
        }
        setLineNumber(1391);    // compilenode member
        // call case 6: other requests
        var call5560 = callmethodChecked(var_ast, "AstNode", []);
        setLineNumber(1394);    // return value
        if (!Grace_isTrue(callmethod(call5560, "match(1)", [1], if5516)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method transformCall(_) does not have " + 
                    callmethod(call5560, "asString", [0])._value + "."));
        return if5516;
      };
      func5511.paramCounts = [1];
      this.methods["transformCall(1)"] = func5511;
      func5511.definitionLine = 1391;
      func5511.definitionModule = "identifierresolution";
      setLineNumber(1410);    // compilenode method
      var func5561 = function(argcv) {    // method rewriteMatches(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_topNode = arguments[curarg];
        curarg++;
        setModuleName("identifierresolution");
        setLineNumber(1411);    // compilenode block
        var block5563 = new GraceBlock(this, 1411, 2);
        setLineNumber(1);    // compilenode identifier
        block5563.real = function(var_node, var_as) {
          var if5564 = GraceDone;
          setLineNumber(1412);    // compilenode member
          // call case 6: other requests
          var call5566 = callmethodChecked(var_node, "isMatchingBlock", []);
          if (Grace_isTrue(call5566)) {
            setLineNumber(1413);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call5568 = callmethodChecked(this, "rewritematchblock(1)", [1], var_node);
            if5564 = call5568;
          } else {
            setLineNumber(1415);    // compilenode identifier
            if5564 = var_node;
          }
          return if5564;
        };
        setLineNumber(1417);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call5571 = callmethodChecked(var_ast, "ancestorChain", []);
        var call5572 = callmethodChecked(call5571, "empty", []);
        // call case 6: other requests
        setLineNumber(1411);    // compilenode identifier
        var call5573 = callmethodChecked(var_topNode, "map(1)ancestors(1)", [1, 1], block5563, call5572);
        return call5573;
      };
      func5561.paramCounts = [1];
      this.methods["rewriteMatches(1)"] = func5561;
      func5561.definitionLine = 1410;
      func5561.definitionModule = "identifierresolution";
      setLineNumber(1420);    // compilenode method
      var func5574 = function(argcv) {    // method resolve(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_moduleObject = arguments[curarg];
        curarg++;
        setModuleName("identifierresolution");
        setLineNumber(1421);    // compilenode string
        var string5576 = new GraceString("rewriting tree.");
        // call case 6: other requests
        var call5577 = callmethodChecked(var_util, "log_verbose(1)", [1], string5576);
        setLineNumber(1422);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call5579 = callmethodChecked(this, "setupContext(1)", [1], var_moduleObject);
        setLineNumber(1423);    // compilenode num
        // call case 6: other requests
        var call5581 = callmethodChecked(var_util, "setPosition(2)", [2], new GraceNum(0), new GraceNum(0));
        setLineNumber(1424);    // compilenode identifier
        // call case 6: other requests
        var call5583 = callmethodChecked(var_moduleObject, "scope:=(1)", [1], var_moduleScope);
        setLineNumber(1425);    // compilenode identifier
        var array5585 = new PrimitiveGraceList([var_moduleObject]);
        setLineNumber(1426);    // compilenode string
        var string5586 = new GraceString("prelude");
        // call case 6: other requests
        setLineNumber(1425);    // compilenode member
        // call case 6: other requests
        var call5588 = callmethodChecked(var_ast, "moduleNode", []);
        var call5589 = callmethodChecked(call5588, "body(1)named(1)scope(1)", [1, 1, 1], array5585, string5586, var_preludeScope);
        var var_preludeObject = call5589;
        setLineNumber(1427);    // compilenode identifier
        // call case 6: other requests
        // call case 6: other requests
        var call5592 = callmethodChecked(var_ast, "ancestorChain", []);
        var call5593 = callmethodChecked(call5592, "with(1)", [1], var_preludeObject);
        var var_preludeChain = call5593;
        setLineNumber(1429);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call5595 = callmethodChecked(this, "rewriteMatches(1)", [1], var_moduleObject);
        var var_patternMatchModule = call5595;
        setLineNumber(1430);    // compilenode string
        var string5597 = new GraceString("pattern-match rewriting done.");
        // call case 6: other requests
        var call5598 = callmethodChecked(var_util, "log_verbose(1)", [1], string5597);
        var if5599 = GraceDone;
        setLineNumber(1432);    // compilenode string
        var string5600 = new GraceString("patterns");
        // call case 6: other requests
        var call5603 = callmethodChecked(var_util, "target", []);
        var opresult5605 = callmethodChecked(call5603, "==(1)", [1], string5600);
        if (Grace_isTrue(opresult5605)) {
          setLineNumber(1433);    // compilenode string
          var string5607 = new GraceString("=====================================");
          // call case 6: other requests
          var call5608 = callmethodChecked(var_util, "outprint(1)", [1], string5607);
          setLineNumber(1434);    // compilenode string
          var string5610 = new GraceString("module after pattern-match re-writing");
          // call case 6: other requests
          var call5611 = callmethodChecked(var_util, "outprint(1)", [1], string5610);
          setLineNumber(1435);    // compilenode string
          var string5613 = new GraceString("=====================================");
          // call case 6: other requests
          var call5614 = callmethodChecked(var_util, "outprint(1)", [1], string5613);
          setLineNumber(1436);    // compilenode num
          // call case 6: other requests
          var call5617 = callmethodChecked(var_patternMatchModule, "pretty(1)", [1], new GraceNum(0));
          // call case 6: other requests
          var call5618 = callmethodChecked(var_util, "outprint(1)", [1], call5617);
          setLineNumber(1437);    // compilenode string
          var string5620 = new GraceString("done");
          // call case 6: other requests
          var call5621 = callmethodChecked(var_util, "log_verbose(1)", [1], string5620);
          setLineNumber(1438);    // compilenode num
          // call case 6: other requests
          var call5623 = callmethodChecked(var_sys, "exit(1)", [1], new GraceNum(0));
          if5599 = call5623;
        }
        setLineNumber(1441);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call5625 = callmethodChecked(this, "buildSymbolTableFor(1)ancestors(1)", [1, 1], var_patternMatchModule, var_preludeChain);
        setLineNumber(1442);    // compilenode string
        var string5627 = new GraceString("symbol tables built.");
        // call case 6: other requests
        var call5628 = callmethodChecked(var_util, "log_verbose(1)", [1], string5627);
        var if5629 = GraceDone;
        setLineNumber(1444);    // compilenode string
        var string5630 = new GraceString("symbols");
        // call case 6: other requests
        var call5633 = callmethodChecked(var_util, "target", []);
        var opresult5635 = callmethodChecked(call5633, "==(1)", [1], string5630);
        if (Grace_isTrue(opresult5635)) {
          setLineNumber(1445);    // compilenode string
          var string5637 = new GraceString("=====================================");
          // call case 6: other requests
          var call5638 = callmethodChecked(var_util, "outprint(1)", [1], string5637);
          setLineNumber(1446);    // compilenode string
          var string5640 = new GraceString("module with symbol tables");
          // call case 6: other requests
          var call5641 = callmethodChecked(var_util, "outprint(1)", [1], string5640);
          setLineNumber(1447);    // compilenode string
          var string5643 = new GraceString("=====================================");
          // call case 6: other requests
          var call5644 = callmethodChecked(var_util, "outprint(1)", [1], string5643);
          setLineNumber(1448);    // compilenode string
          var string5646 = new GraceString("top-level");
          // call case 6: other requests
          var call5647 = callmethodChecked(var_util, "outprint(1)", [1], string5646);
          setLineNumber(1449);    // compilenode string
          var string5649 = new GraceString("");
          // call case 6: other requests
          var call5652 = callmethodChecked(var_universalScope, "asDebugString", []);
          var string5654 = new GraceString("Universal scope = ");
          var opresult5656 = callmethodChecked(string5654, "++(1)", [1], call5652);
          var opresult5658 = callmethodChecked(opresult5656, "++(1)", [1], string5649);
          // call case 6: other requests
          var call5659 = callmethodChecked(var_util, "outprint(1)", [1], opresult5658);
          setLineNumber(1450);    // compilenode block
          var block5661 = new GraceBlock(this, 1450, 1);
          setLineNumber(1);    // compilenode identifier
          block5661.real = function(var_each) {
            setLineNumber(1451);    // compilenode member
            // call case 6: other requests
            var call5664 = callmethodChecked(var_each, "asString", []);
            // call case 6: other requests
            var call5665 = callmethodChecked(var_util, "outprint(1)", [1], call5664);
            setLineNumber(1452);    // compilenode member
            // call case 6: other requests
            var call5668 = callmethodChecked(var_each, "elementScopesAsString", []);
            // call case 6: other requests
            var call5669 = callmethodChecked(var_util, "outprint(1)", [1], call5668);
            setLineNumber(1453);    // compilenode string
            var string5671 = new GraceString("----------------");
            // call case 6: other requests
            var call5672 = callmethodChecked(var_util, "outprint(1)", [1], string5671);
            return call5672;
          };
          // call case 6: other requests
          setLineNumber(1450);    // compilenode member
          // call case 6: other requests
          var call5674 = callmethodChecked(var_patternMatchModule, "scope", []);
          var call5675 = callmethodChecked(call5674, "withSurroundingScopesDo(1)", [1], block5661);
          setLineNumber(1455);    // compilenode num
          // call case 6: other requests
          var call5678 = callmethodChecked(var_patternMatchModule, "pretty(1)", [1], new GraceNum(0));
          // call case 6: other requests
          var call5679 = callmethodChecked(var_util, "outprint(1)", [1], call5678);
          setLineNumber(1456);    // compilenode string
          var string5681 = new GraceString("done");
          // call case 6: other requests
          var call5682 = callmethodChecked(var_util, "log_verbose(1)", [1], string5681);
          setLineNumber(1457);    // compilenode num
          // call case 6: other requests
          var call5684 = callmethodChecked(var_sys, "exit(1)", [1], new GraceNum(0));
          if5629 = call5684;
        }
        setLineNumber(1459);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call5686 = callmethodChecked(this, "resolveIdentifiers(1)", [1], var_patternMatchModule);
        return call5686;
      };
      func5574.paramCounts = [1];
      this.methods["resolve(1)"] = func5574;
      func5574.definitionLine = 1420;
      func5574.definitionModule = "identifierresolution";
      setLineNumber(12);    // compilenode string
      var string5688 = new GraceString("completed");
      // call case 6: other requests
      // call case 5: prelude request
      var call5690 = callmethodChecked(var_prelude, "Singleton", []);
      var call5691 = callmethodChecked(call5690, "named(1)", [1], string5688);
      var var_completed = call5691;
      setLineNumber(1);    // compilenode method
      var func5692 = function(argcv) {    // method completed
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierresolution");
        // completed is a simple accessor - elide try ... catch
        setLineNumber(12);    // compilenode identifier
        return var_completed;
      };
      func5692.paramCounts = [0];
      this.methods["completed"] = func5692;
      func5692.definitionLine = 1;
      func5692.definitionModule = "identifierresolution";
      this.methods["completed"].debug = "def";
      setLineNumber(13);    // compilenode string
      var string5694 = new GraceString("inProgress");
      // call case 6: other requests
      // call case 5: prelude request
      var call5696 = callmethodChecked(var_prelude, "Singleton", []);
      var call5697 = callmethodChecked(call5696, "named(1)", [1], string5694);
      var var_inProgress = call5697;
      setLineNumber(1);    // compilenode method
      var func5698 = function(argcv) {    // method inProgress
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierresolution");
        // inProgress is a simple accessor - elide try ... catch
        setLineNumber(13);    // compilenode identifier
        return var_inProgress;
      };
      func5698.paramCounts = [0];
      this.methods["inProgress"] = func5698;
      func5698.definitionLine = 1;
      func5698.definitionModule = "identifierresolution";
      this.methods["inProgress"].debug = "def";
      setLineNumber(14);    // compilenode string
      var string5700 = new GraceString("undiscovered");
      // call case 6: other requests
      // call case 5: prelude request
      var call5702 = callmethodChecked(var_prelude, "Singleton", []);
      var call5703 = callmethodChecked(call5702, "named(1)", [1], string5700);
      var var_undiscovered = call5703;
      setLineNumber(1);    // compilenode method
      var func5704 = function(argcv) {    // method undiscovered
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierresolution");
        // undiscovered is a simple accessor - elide try ... catch
        setLineNumber(14);    // compilenode identifier
        return var_undiscovered;
      };
      func5704.paramCounts = [0];
      this.methods["undiscovered"] = func5704;
      func5704.definitionLine = 1;
      func5704.definitionModule = "identifierresolution";
      this.methods["undiscovered"].debug = "def";
      setLineNumber(17);    // compilenode num
      var var_stSerial = new GraceNum(100);
      setLineNumber(1);    // compilenode method
      var func5705 = function(argcv) {    // method stSerial
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierresolution");
        // stSerial is a simple accessor - elide try ... catch
        setLineNumber(17);    // compilenode identifier
        return var_stSerial;
      };
      func5705.paramCounts = [0];
      this.methods["stSerial"] = func5705;
      func5705.definitionLine = 1;
      func5705.definitionModule = "identifierresolution";
      setLineNumber(1);    // compilenode method
      var func5706 = function(argcv) {    // method stSerial:=(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var___95__var__95__assign__95__tmp = arguments[curarg];
        curarg++;
        setModuleName("identifierresolution");
        var_stSerial = var___95__var__95__assign__95__tmp;
        return GraceDone;
      };
      func5706.paramCounts = [1];
      this.methods["stSerial:=(1)"] = func5706;
      func5706.definitionLine = 1;
      func5706.definitionModule = "identifierresolution";
      this.methods["stSerial"].debug = "var";
      setLineNumber(19);    // compilenode string
      var string5709 = new GraceString("self");
      var string5710 = new GraceString("super");
      var string5711 = new GraceString("outer");
      var string5712 = new GraceString("true");
      var string5713 = new GraceString("false");
      var array5708 = new PrimitiveGraceList([string5709, string5710, string5711, string5712, string5713]);
      // call case 5: prelude request
      var call5714 = callmethodChecked(var_prelude, "sequence(1)", [1], array5708);
      var var_reserved = call5714;
      setLineNumber(1);    // compilenode method
      var func5715 = function(argcv) {    // method reserved
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierresolution");
        // reserved is a simple accessor - elide try ... catch
        setLineNumber(19);    // compilenode identifier
        return var_reserved;
      };
      func5715.paramCounts = [0];
      this.methods["reserved"] = func5715;
      func5715.definitionLine = 1;
      func5715.definitionModule = "identifierresolution";
      this.methods["reserved"].debug = "def";
      setLineNumber(29);    // compilenode block
      var block5716 = new GraceBlock(this, 29, 2);
      setLineNumber(1);    // compilenode identifier
      block5716.real = function(var_a, var_b) {
        setLineNumber(29);    // compilenode member
        // call case 6: other requests
        var call5719 = callmethodChecked(var_b, "key", []);
        // call case 6: other requests
        // call case 6: other requests
        var call5721 = callmethodChecked(var_a, "key", []);
        var call5722 = callmethodChecked(call5721, "compare(1)", [1], call5719);
        return call5722;
      };
      var var_keyOrdering = block5716;
      setLineNumber(1);    // compilenode method
      var func5723 = function(argcv) {    // method keyOrdering
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierresolution");
        // keyOrdering is a simple accessor - elide try ... catch
        setLineNumber(29);    // compilenode identifier
        return var_keyOrdering;
      };
      func5723.paramCounts = [0];
      this.methods["keyOrdering"] = func5723;
      func5723.definitionLine = 1;
      func5723.definitionModule = "identifierresolution";
      this.methods["keyOrdering"].debug = "def";
      setLineNumber(31);    // compilenode typedec
      // Type decl DeclKind
      // call case 6: other requests
      var call5726 = callmethodChecked(var_k, "T", []);
      var var_DeclKind = call5726;
      setLineNumber(1);    // compilenode method
      var func5727 = function(argcv) {    // method DeclKind
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierresolution");
        // DeclKind is a simple accessor - elide try ... catch
        setLineNumber(31);    // compilenode identifier
        return var_DeclKind;
      };
      func5727.paramCounts = [0];
      this.methods["DeclKind"] = func5727;
      func5727.definitionLine = 1;
      func5727.definitionModule = "identifierresolution";
      setLineNumber(349);    // compilenode string
      var string5729 = new GraceString("empty");
      // call case 4: self request
      onSelf = true;
      var call5730 = callmethodChecked(this, "newScopeKind(1)", [1], string5729);
      var var_emptyScope = call5730;
      setLineNumber(1);    // compilenode method
      var func5731 = function(argcv) {    // method emptyScope
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierresolution");
        // emptyScope is a simple accessor - elide try ... catch
        setLineNumber(349);    // compilenode identifier
        return var_emptyScope;
      };
      func5731.paramCounts = [0];
      this.methods["emptyScope"] = func5731;
      func5731.definitionLine = 1;
      func5731.definitionModule = "identifierresolution";
      this.methods["emptyScope"].debug = "def";
      setLineNumber(350);    // compilenode identifier
      // call case 6: other requests
      // call case 6: other requests
      var call5734 = callmethodChecked(var_ast, "nullNode", []);
      var call5735 = callmethodChecked(call5734, "scope:=(1)", [1], var_emptyScope);
      setLineNumber(351);    // compilenode string
      var string5737 = new GraceString("built-in");
      // call case 4: self request
      onSelf = true;
      var call5738 = callmethodChecked(this, "newScopeIn(1)kind(1)", [1, 1], var_emptyScope, string5737);
      var var_builtInsScope = call5738;
      setLineNumber(1);    // compilenode method
      var func5739 = function(argcv) {    // method builtInsScope
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierresolution");
        // builtInsScope is a simple accessor - elide try ... catch
        setLineNumber(351);    // compilenode identifier
        return var_builtInsScope;
      };
      func5739.paramCounts = [0];
      this.methods["builtInsScope"] = func5739;
      func5739.definitionLine = 1;
      func5739.definitionModule = "identifierresolution";
      this.methods["builtInsScope"].debug = "def";
      setLineNumber(352);    // compilenode string
      var string5741 = new GraceString("dialect");
      // call case 4: self request
      onSelf = true;
      var call5742 = callmethodChecked(this, "newScopeIn(1)kind(1)", [1, 1], var_builtInsScope, string5741);
      var var_preludeScope = call5742;
      setLineNumber(1);    // compilenode method
      var func5743 = function(argcv) {    // method preludeScope
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierresolution");
        // preludeScope is a simple accessor - elide try ... catch
        setLineNumber(352);    // compilenode identifier
        return var_preludeScope;
      };
      func5743.paramCounts = [0];
      this.methods["preludeScope"] = func5743;
      func5743.definitionLine = 1;
      func5743.definitionModule = "identifierresolution";
      this.methods["preludeScope"].debug = "def";
      setLineNumber(353);    // compilenode string
      var string5745 = new GraceString("module");
      // call case 4: self request
      onSelf = true;
      var call5746 = callmethodChecked(this, "newScopeIn(1)kind(1)", [1, 1], var_preludeScope, string5745);
      var var_moduleScope = call5746;
      setLineNumber(1);    // compilenode method
      var func5747 = function(argcv) {    // method moduleScope
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierresolution");
        // moduleScope is a simple accessor - elide try ... catch
        setLineNumber(353);    // compilenode identifier
        return var_moduleScope;
      };
      func5747.paramCounts = [0];
      this.methods["moduleScope"] = func5747;
      func5747.definitionLine = 1;
      func5747.definitionModule = "identifierresolution";
      this.methods["moduleScope"].debug = "def";
      setLineNumber(354);    // compilenode string
      var string5749 = new GraceString("object");
      // call case 4: self request
      onSelf = true;
      var call5750 = callmethodChecked(this, "newScopeIn(1)kind(1)", [1, 1], var_emptyScope, string5749);
      var var_graceObjectScope = call5750;
      setLineNumber(1);    // compilenode method
      var func5751 = function(argcv) {    // method graceObjectScope
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierresolution");
        // graceObjectScope is a simple accessor - elide try ... catch
        setLineNumber(354);    // compilenode identifier
        return var_graceObjectScope;
      };
      func5751.paramCounts = [0];
      this.methods["graceObjectScope"] = func5751;
      func5751.definitionLine = 1;
      func5751.definitionModule = "identifierresolution";
      this.methods["graceObjectScope"].debug = "def";
      setLineNumber(355);    // compilenode string
      var string5753 = new GraceString("object");
      // call case 4: self request
      onSelf = true;
      var call5754 = callmethodChecked(this, "newScopeIn(1)kind(1)", [1, 1], var_builtInsScope, string5753);
      var var_booleanScope = call5754;
      setLineNumber(1);    // compilenode method
      var func5755 = function(argcv) {    // method booleanScope
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierresolution");
        // booleanScope is a simple accessor - elide try ... catch
        setLineNumber(355);    // compilenode identifier
        return var_booleanScope;
      };
      func5755.paramCounts = [0];
      this.methods["booleanScope"] = func5755;
      func5755.definitionLine = 1;
      func5755.definitionModule = "identifierresolution";
      this.methods["booleanScope"].debug = "def";
      setLineNumber(357);    // compilenode object
      var obj5756 = Grace_allocObject(null, "universalScope");
      obj5756.definitionModule = "identifierresolution";
      obj5756.definitionLine = 357;
      obj5756.outer = this;
      var reader_identifierresolution_outer5757 = function() {
        return this.outer;
      };
      obj5756.methods["outer"] = reader_identifierresolution_outer5757;
      var obj_init_5756 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj5756;
        var func5758 = function(argcv) {    // method hasParent
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("identifierresolution");
          // hasParent is a simple accessor - elide try ... catch
          setLineNumber(361);    // compilenode identifier
          return GraceFalse;
        };
        func5758.paramCounts = [0];
        obj5756.methods["hasParent"] = func5758;
        func5758.definitionLine = 361;
        func5758.definitionModule = "identifierresolution";
        var func5759 = function(argcv) {    // method parent
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("identifierresolution");
          setLineNumber(362);    // compilenode string
          var string5761 = new GraceString("universal scope has no parent");
          // call case 6: other requests
          // call case 5: prelude request
          var call5763 = callmethodChecked(var_prelude, "ProgrammingError", []);
          var call5764 = callmethodChecked(call5763, "raise(1)", [1], string5761);
          return call5764;
        };
        func5759.paramCounts = [0];
        obj5756.methods["parent"] = func5759;
        func5759.definitionLine = 362;
        func5759.definitionModule = "identifierresolution";
        var func5765 = function(argcv) {    // method addName(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_n = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(363);    // compilenode string
          var string5767 = new GraceString("can't add to the universal scope");
          // call case 6: other requests
          // call case 5: prelude request
          var call5769 = callmethodChecked(var_prelude, "ProgrammingError", []);
          var call5770 = callmethodChecked(call5769, "raise(1)", [1], string5767);
          return call5770;
        };
        func5765.paramCounts = [1];
        obj5756.methods["addName(1)"] = func5765;
        func5765.definitionLine = 363;
        func5765.definitionModule = "identifierresolution";
        var func5771 = function(argcv) {    // method addName(_)as(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_n = arguments[curarg];
          curarg++;
          var var_kd = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(364);    // compilenode string
          var string5773 = new GraceString("can't add to the universal scope");
          // call case 6: other requests
          // call case 5: prelude request
          var call5775 = callmethodChecked(var_prelude, "ProgrammingError", []);
          var call5776 = callmethodChecked(call5775, "raise(1)", [1], string5773);
          return call5776;
        };
        func5771.paramCounts = [1, 1];
        obj5756.methods["addName(1)as(1)"] = func5771;
        func5771.definitionLine = 364;
        func5771.definitionModule = "identifierresolution";
        var func5777 = function(argcv) {    // method addNode(_)as(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_n = arguments[curarg];
          curarg++;
          var var_kd = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(365);    // compilenode string
          var string5779 = new GraceString("can't add to the universal scope");
          // call case 6: other requests
          // call case 5: prelude request
          var call5781 = callmethodChecked(var_prelude, "ProgrammingError", []);
          var call5782 = callmethodChecked(call5781, "raise(1)", [1], string5779);
          return call5782;
        };
        func5777.paramCounts = [1, 1];
        obj5756.methods["addNode(1)as(1)"] = func5777;
        func5777.definitionLine = 365;
        func5777.definitionModule = "identifierresolution";
        var func5783 = function(argcv) {    // method contains(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_n = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          // contains(_) is a simple accessor - elide try ... catch
          setLineNumber(366);    // compilenode identifier
          return GraceTrue;
        };
        func5783.paramCounts = [1];
        obj5756.methods["contains(1)"] = func5783;
        func5783.definitionLine = 366;
        func5783.definitionModule = "identifierresolution";
        var func5784 = function(argcv) {    // method withSurroundingScopesDo(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_b = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(367);    // compilenode identifier
          // call case 6: other requests
          var call5786 = callmethodChecked(var_b, "apply(1)", [1], this);
          return call5786;
        };
        func5784.paramCounts = [1];
        obj5756.methods["withSurroundingScopesDo(1)"] = func5784;
        func5784.definitionLine = 367;
        func5784.definitionModule = "identifierresolution";
        var func5787 = function(argcv) {    // method kind(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_n = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          setLineNumber(368);    // compilenode string
          var string5788 = new GraceString("unknown");
          return string5788;
        };
        func5787.paramCounts = [1];
        obj5756.methods["kind(1)"] = func5787;
        func5787.definitionLine = 368;
        func5787.definitionModule = "identifierresolution";
        var func5789 = function(argcv) {    // method at(_)putScope(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_n = arguments[curarg];
          curarg++;
          var var_scp = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          return GraceDone;
        };
        func5789.paramCounts = [1, 1];
        obj5756.methods["at(1)putScope(1)"] = func5789;
        func5789.definitionLine = 369;
        func5789.definitionModule = "identifierresolution";
        var func5790 = function(argcv) {    // method getScope(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_n = arguments[curarg];
          curarg++;
          setModuleName("identifierresolution");
          // getScope(_) is a simple accessor - elide try ... catch
          setLineNumber(370);    // compilenode identifier
          return this;
        };
        func5790.paramCounts = [1];
        obj5756.methods["getScope(1)"] = func5790;
        func5790.definitionLine = 370;
        func5790.definitionModule = "identifierresolution";
        var func5791 = function(argcv) {    // method isUniversal
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("identifierresolution");
          // isUniversal is a simple accessor - elide try ... catch
          setLineNumber(371);    // compilenode identifier
          return GraceTrue;
        };
        func5791.paramCounts = [0];
        obj5756.methods["isUniversal"] = func5791;
        func5791.definitionLine = 371;
        func5791.definitionModule = "identifierresolution";
        setLineNumber(360);    // compilenode string
        var string5793 = new GraceString("universal");
        // call case 6: other requests
        setLineNumber(0);    // compilenode member
        // call case 3: self.outer request
        var call5795 = callmethodChecked(superDepth, "outer", [0]);
        onSelf = true;
        var call5796 = callmethodChecked(call5795, "newScopeIn(1)kind(1)$object(1)", [1, 1, 1], var_emptyScope, string5793, this);
        obj5756.superobj = call5796;
        if (call5796.data) obj5756.data = call5796.data;
        if (call5796.hasOwnProperty('_value'))
            obj5756._value = call5796._value;
        superDepth = origSuperDepth;
      };
      obj_init_5756.apply(obj5756, []);
      var var_universalScope = obj5756;
      setLineNumber(1);    // compilenode method
      var func5797 = function(argcv) {    // method universalScope
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierresolution");
        // universalScope is a simple accessor - elide try ... catch
        setLineNumber(357);    // compilenode identifier
        return var_universalScope;
      };
      func5797.paramCounts = [0];
      this.methods["universalScope"] = func5797;
      func5797.definitionLine = 1;
      func5797.definitionModule = "identifierresolution";
      this.methods["universalScope"].debug = "def";
      return this;
    }
    gracecode_identifierresolution.imports = ['ast', 'errormessages', 'identifierKinds', 'io', 'mirrors', 'stringMap', 'sys', 'util', 'xmodule'];
    if (typeof gctCache !== "undefined")
      gctCache['identifierresolution'] = "classes:\nconfidential:\n gatherInheritedNames(1)\n gatherUsedNames(1)\nfresh-methods:\n conflictForMethodName(1)from(1)\n newScopeIn(1)kind(1)\nfresh:conflictForMethodName(1)from(1):\n methodName\n sources\nfresh:newScopeIn(1)kind(1):\n ==(1)\n addName(1)\n addName(1)as(1)\n addNode(1)as(1)\n asDebugString\n asString\n asStringWithParents\n at(1)putScope(1)\n checkShadowing(1)as(1)\n contains(1)\n elementLines\n elementScopes\n elementScopesAsString\n elementTokens\n elements\n enclosingObjectScope\n getScope(1)\n hasDefinitionInNest(1)\n hasParent\n hash\n inSameContextAs(1)\n inheritedNames\n isEmpty\n isInSameObjectAs(1)\n isMethodScope\n isObjectScope\n isUniversal\n keysAndKindsDo(1)\n keysAsList\n kind(1)\n kindInNest(1)\n node\n parent\n resolveOuterMethod(1)fromNode(1)\n scopeReferencedBy(1)\n serialNumber\n thatDefines(1)\n thatDefines(1)ifNone(1)\n variety\n withSurroundingScopesDo(1)\nmethodtypes-of:DeclKind:\nmodules:\n ast\n errormessages\n identifierKinds\n io\n mirrors\n stringMap\n sys\n unixFilePath\n util\n xmodule\npath:\n identifierresolution\npublic:\n DeclKind\n articleFor(1)\n buildSymbolTableFor(1)ancestors(1)\n checkForAmbiguityOf(1)definedIn(1)as(1)\n checkForConflicts(2)\n checkForReservedName(1)\n checkTraitBody(1)\n collectParentNames(1)\n conflictForMethodName(1)from(1)\n isSameIgnoringCase(2)\n newScopeIn(1)kind(1)\n newScopeKind(1)\n processGCT(2)\n readableStringFrom(1)\n reportAssignmentTo(1)declaredInScope(1)\n reportUndeclaredIdentifier(1)\n resolve(1)\n resolveIdentifiers(1)\n rewriteMatches(1)\n rewritematchblock(1)\n rewritematchblockterm(1)\n setupContext(1)\n transformBind(1)ancestors(1)\n transformCall(1)\n transformIdentifier(1)ancestors(1)\n transformInherits(1)ancestors(1)\ntypes:\n DeclKind\n";
    if (typeof originalSourceLines !== "undefined") {
      originalSourceLines["identifierresolution"] = [
        "#pragma ExtendedLineups",
        "import \"io\" as io",
        "import \"sys\" as sys",
        "import \"ast\" as ast",
        "import \"util\" as util",
        "import \"xmodule\" as xmodule",
        "import \"stringMap\" as map",
        "import \"mirrors\" as mirrors",
        "import \"errormessages\" as errormessages",
        "import \"identifierKinds\" as k",
        "",
        "def completed = Singleton.named \"completed\"",
        "def inProgress = Singleton.named \"inProgress\"",
        "def undiscovered = Singleton.named \"undiscovered\"",
        "// constants used in detecting cyclic inheritance",
        "",
        "var stSerial := 100",
        "",
        "def reserved = sequence [\"self\", \"super\", \"outer\", \"true\", \"false\"]",
        "// reserved names that cannot be re-assigned or re-declared",
        "",
        "method newScopeKind(variety') {",
        "    // for the top of the scope chain",
        "    def s = newScopeIn(object {})kind(variety')",
        "    s.hasParent := false",
        "    s",
        "}",
        "",
        "def keyOrdering = { a, b -> a.key.compare(b.key) }",
        "",
        "type DeclKind = k.T",
        "",
        "class newScopeIn(parent') kind(variety') {",
        "    def elements is public = map.new",
        "    def elementScopes is public = map.new",
        "    def elementLines is public = map.new",
        "    def elementTokens is public = map.new",
        "    def parent is public = parent'",
        "    var hasParent is public := true",
        "    def variety is public = variety'",
        "    var node is public := ast.nullNode      // the outermost ast node that I'm in",
        "    var inheritedNames is public := undiscovered",
        "    stSerial := stSerial + 1",
        "    def serialNumber is public = stSerial",
        "    def hash is public = serialNumber.hash",
        "",
        "    if (isObjectScope) then {",
        "        addName \"self\" as(k.selfDef)",
        "        at \"self\" putScope(self)",
        "    }",
        "    method == (other) { self.isMe(other) }",
        "    method isEmpty { elements.size == 0 }",
        "    method addName(n) {",
        "        elements.put(n, k.methdec)",
        "        elementLines.put(n, util.linenum)",
        "    }",
        "    method addName (n) as (kind:DeclKind) {",
        "        def oldKind = elements.get(n) ifAbsent {",
        "            elements.put(n, kind)",
        "            elementLines.put(n, util.linenum)",
        "            return",
        "        }",
        "        if (kind.isImplicit) then {",
        "            return  // don't overwrite local id with id from trait or super",
        "        }",
        "        if (oldKind.isImplicit)  then {",
        "            elements.put(n, kind)",
        "            elementLines.put(n, util.linenum)",
        "            return",
        "        }",
        "        errormessages.syntaxError(\"'{n}' cannot be\" ++ ",
        "            \" redefined as {kind} because it is already declared as {oldKind}\")",
        "            atRange(util.line, util.linePos, util.linePos + n.size - 1)",
        "    }",
        "    method addNode (nd) as (kind) {",
        "        def ndName = nd.value",
        "        checkShadowing(nd) as(kind)",
        "        def oldKind = elements.get(ndName) ifAbsent {",
        "            elements.put(ndName, kind)",
        "            elementLines.put(ndName, nd.line)",
        "            return",
        "        }",
        "        if (kind.isImplicit) then {",
        "            return  // don't overwrite local id with id from trait or super",
        "        }",
        "        if (oldKind.isImplicit)  then {",
        "            elements.put(ndName, kind)",
        "            elementLines.put(ndName, nd.line)",
        "            return",
        "        }",
        "        var more := \" in this scope\"",
        "        if (elementLines.contains(ndName)) then {",
        "            more := \" as a {oldKind}\"",
        "                ++ \" on line {elementLines.get(ndName)}\"",
        "        }",
        "        errormessages.syntaxError(\"'{ndName}' cannot be\"",
        "            ++ \" redeclared because it is already declared\"",
        "            ++ more ++ \" as well as here at line {nd.line}.\")",
        "            atRange(nd.line, nd.linePos, nd.linePos + ndName.size - 1)",
        "    }",
        "    method contains (n) {",
        "        elements.contains(n)",
        "    }",
        "    method withSurroundingScopesDo (b) {",
        "        // do b in this scope and all surounding scopes.",
        "        var cur := self",
        "        while {b.apply(cur); cur.hasParent} do {",
        "            cur := cur.parent",
        "        }",
        "    }",
        "    method keysAsList {",
        "        def result = emptyList",
        "        elements.keysDo { each -> result.addLast(each) }",
        "        result",
        "    }",
        "    method keysAndKindsDo (action) {",
        "        elements.keysAndValuesDo(action)",
        "    }",
        "    method kind (n) { elements.get(n) }",
        "    method at(n) putScope(scp) {",
        "        elementScopes.put(n, scp)",
        "    }",
        "    method getScope(n) {",
        "        if (elementScopes.contains(n)) then {",
        "            return elementScopes.get(n)",
        "        }",
        "//        util.log 70 verbose (\"scope {self}: elements.contains({n}) = {elements.contains(n)}\" ++",
        "//              \" but elementScopes.contains({n}) = {elementScopes.contains(n)}\")",
        "        //  This occurs for names like `true` that are built-in, but for which there",
        "        //  is no symbolTable describing their atttributes.",
        "        //  TODO: add complete information for the built-in names.",
        "        //  in the meantime:",
        "        return universalScope",
        "    }",
        "    method asStringWithParents {",
        "        var result := \"\\nCurrent: {self}\"",
        "        var s := self",
        "        while {s.hasParent} do {",
        "            s := s.parent",
        "            result := result ++ \"\\nParent: {s}\"",
        "        }",
        "        result ++ \"\\n\"",
        "    }",
        "    method asString {",
        "        var result := \"({variety} ST: \"",
        "        withSurroundingScopesDo { each ->",
        "            result := result ++ each.serialNumber",
        "            if (each.hasParent) then { result := result ++ \"➞\" }",
        "        }",
        "        result := result ++  \"):\\n    \"",
        "        elements.asList.sortBy(keyOrdering).do { each ->",
        "            result := \"{result} {each.key}({kind(each.key)}) \"",
        "        }",
        "        result ++ \"\\n\"",
        "    }",
        "",
        "    method asDebugString { \"(ST {serialNumber})\" }",
        "",
        "    method elementScopesAsString {",
        "        def referencedScopes = emptySet",
        "        var result := \"\\n    [elementScopes:\"",
        "        elementScopes.asList.sortBy(keyOrdering).do { each ->",
        "            result := \"{result} {each.key}➞{each.value.asDebugString}\"",
        "            referencedScopes.add (each.value)",
        "        }",
        "        result := result ++ \"]\\n____________\\n\"",
        "        referencedScopes.asList",
        "            .sortBy { a, b -> a.serialNumber.compare(b.serialNumber) }",
        "                .do { each -> result := result ++ each.asString }",
        "        result ++ \"____________\\n\"",
        "    }",
        "    method hasDefinitionInNest(nm) {",
        "        withSurroundingScopesDo { s ->",
        "            if (s.contains(nm)) then {",
        "                return true",
        "            }",
        "        }",
        "        return false",
        "    }",
        "    method kindInNest(nm) {",
        "        // NEVER answers `inherited` or `fromTrait` !",
        "        withSurroundingScopesDo {s->",
        "            if (s.contains(nm)) then {",
        "                def kd = s.kind(nm)",
        "                if (kd.fromParent) then {",
        "                    return k.methdec",
        "                } else {",
        "                    return kd",
        "                }",
        "            }",
        "        }",
        "        return k.undefined",
        "    }",
        "    method thatDefines(name) ifNone(action) {",
        "        withSurroundingScopesDo { s->",
        "            if (s.contains(name)) then { return s }",
        "        }",
        "        action.apply",
        "    }",
        "    method thatDefines(name) {",
        "        withSurroundingScopesDo { s->",
        "            if (s.contains(name)) then { return s }",
        "        }",
        "        print(self.asStringWithParents)",
        "        ProgrammingError.raise \"no scope defines {name}\"",
        "    }",
        "    method isInSameObjectAs (enclosingScope) {",
        "        if (self == enclosingScope) then { return true }",
        "        if (self.parent.isObjectScope) then { return false }",
        "        self.parent.isInSameObjectAs(enclosingScope)",
        "    }",
        "    method isObjectScope {",
        "        if (variety == \"object\") then { return true }",
        "        if (variety == \"module\") then { return true }",
        "        if (variety == \"dialect\") then { return true }",
        "        if (variety == \"class\") then { return true }",
        "        if (variety == \"built-in\") then { return true }",
        "        false",
        "    }",
        "    method isMethodScope {",
        "        variety == \"method\"",
        "    }",
        "    method resolveOuterMethod(name) fromNode (aNode) {",
        "        // replace name by outer.outer. ... .name,",
        "        // depending on where name is declared.",
        "        var mem := ast.identifierNode.new(\"self\", false) scope(self)",
        "        withSurroundingScopesDo { s->",
        "            if (s.contains(name)) then {",
        "                if (s.variety == \"dialect\") then {",
        "                    return ast.memberNode.new(name,",
        "                        ast.identifierNode.new(\"prelude\", false) scope(self)) scope(self).onSelf",
        "                }",
        "                return ast.memberNode.new(name, mem) scope(self).onSelf",
        "            }",
        "            if (s.variety == \"object\") then {",
        "                mem := ast.memberNode.new(\"outer\", mem) scope(self)",
        "            } elseif {s.variety == \"class\"} then {",
        "                mem := ast.memberNode.new(\"outer\", mem) scope(self)",
        "                mem := ast.memberNode.new(\"outer\", mem) scope(self)",
        "            }",
        "        }",
        "        errormessages.syntaxError \"no method {name}\"",
        "                atRange(aNode.line, aNode.linePos, aNode.linePos + name.size - 1)",
        "    }",
        "    method scopeReferencedBy(nd:ast.AstNode) {",
        "        // Finds the scope referenced by astNode nd.",
        "        // If nd references an object, then the returned",
        "        // scope will have bindings for the methods of that object.",
        "        // Otherwise, it will be the empty scope.",
        "",
        "        if (nd.isIdentifier) then {",
        "            def sought = nd.nameString",
        "            if (sought == \"outer\") then {",
        "                return parent.enclosingObjectScope",
        "            }",
        "            withSurroundingScopesDo {s->",
        "                if (s.contains(sought)) then {",
        "                    return s.getScope(sought)",
        "                }",
        "            }",
        "            errormessages.syntaxError \"no method {sought}\"",
        "                atRange(nd.line, nd.linePos, nd.linePos + sought.size - 1)",
        "        } elseif {nd.kind == \"op\"} then {",
        "            def receiverScope = self.scopeReferencedBy(nd.left)",
        "            return receiverScope.scopeReferencedBy(nd.asIdentifier)",
        "        } elseif {nd.isCall} then { // this includes \"memberNodes\"",
        "            def receiver = nd.receiver",
        "            if (receiver.isImplicit) then {",
        "                util.log 60 verbose \"inherits from implicit.{nd.nameString} on line {nd.line}\"",
        "            }",
        "            def newNd = transformCall(nd)",
        "            def receiverScope = self.scopeReferencedBy(newNd.receiver)",
        "            return receiverScope.scopeReferencedBy(newNd.asIdentifier)",
        "        }",
        "        ProgrammingError.raise(\"{nd.nameString} is not a Call, Member, Identifier or op.\\n\"",
        "            ++ nd.pretty(0))",
        "    }",
        "    method enclosingObjectScope {",
        "        // Answer the closest enclosing scope that describes an",
        "        // object, class or module.  Could answer self.",
        "        withSurroundingScopesDo { s ->",
        "            if (s.isObjectScope) then { return s }",
        "        }",
        "        ProgrammingError.raise \"no object scope found!\"",
        "        // the outermost scope should always be a module scope,",
        "        // which is an object scope.",
        "    }",
        "    method inSameContextAs(encScope) {",
        "        // Is this scope within the same context as encScope?",
        "        // i.e. within the same method and object?",
        "        if (encScope.isObjectScope) then { return false }",
        "        withSurroundingScopesDo { s ->",
        "            if (s == encScope) then { return true }",
        "            if (s.isObjectScope) then { return false }",
        "            if (s.isMethodScope) then { return false }",
        "        }",
        "        ProgrammingError.raise \"self = {self}; encScope = {encScope}\"",
        "    }",
        "    method isUniversal { false }",
        "    method checkShadowing(ident) as(newKind) {",
        "        def name = ident.nameString",
        "        def priorScope = thatDefines(name) ifNone {",
        "            return",
        "        }",
        "        def description =",
        "            if (priorScope == self) then {",
        "                \"this\"",
        "            } else {",
        "                \"an enclosing {priorScope.variety}\"",
        "            }",
        "        def priorKind = priorScope.kind(name)",
        "        if (priorScope.isObjectScope && {self.isObjectScope}) then {",
        "            return",
        "        }",
        "        // new object attributes can shadow old, but other shadowing is illegal",
        "        var more := \"\"",
        "        if (priorScope.elementLines.contains(name)) then {",
        "            def ln = priorScope.elementLines.get(name)",
        "            if (ln > 0) then {",
        "                more := \" on line {priorScope.elementLines.get(name)}\"",
        "            }",
        "        }",
        "        if (newKind == k.vardec) then {",
        "            def suggs = [ ]",
        "            def sugg = errormessages.suggestion.new",
        "            if (sugg.replaceUntil(\"=\")with(\"{name} :=\")",
        "                    onLine(ident.line)",
        "                ) then {",
        "                suggs.push(sugg)",
        "            }",
        "            if (priorKind == k.vardec) then {",
        "                more := more ++ \". To assign to the existing variable, remove 'var'\"",
        "            }",
        "            errormessages.syntaxError(\"'{name}' cannot be \"",
        "                ++ \"redeclared because it is already declared in \"",
        "                ++ \"{description} scope{more}.\")",
        "                atRange(ident.line, ident.linePos, ident.linePos + name.size - 1)",
        "                withSuggestions(suggs)",
        "        } else {",
        "            errormessages.syntaxError(\"'{name}' cannot be \"",
        "                ++ \"redeclared because it is already declared in \"",
        "                ++ \"{description} scope{more}. Use a different name.\")",
        "                atRange(ident.line, ident.linePos,",
        "                    ident.linePos + name.size - 1)",
        "        }",
        "    }",
        "}",
        "",
        "def emptyScope = newScopeKind(\"empty\")",
        "ast.nullNode.scope := emptyScope      // TODO: eliminate!",
        "def builtInsScope = newScopeIn(emptyScope) kind(\"built-in\")",
        "def preludeScope = newScopeIn(builtInsScope) kind(\"dialect\")",
        "def moduleScope = newScopeIn(preludeScope) kind(\"module\")",
        "def graceObjectScope = newScopeIn(emptyScope) kind(\"object\")",
        "def booleanScope = newScopeIn(builtInsScope) kind \"object\"",
        "",
        "def universalScope = object {",
        "    // The scope that defines every identifier,",
        "    // used when we have no information about an object",
        "    inherits newScopeIn(emptyScope) kind(\"universal\")",
        "    method hasParent { false }",
        "    method parent { ProgrammingError.raise \"universal scope has no parent\" }",
        "    method addName(n) { ProgrammingError.raise \"can't add to the universal scope\" }",
        "    method addName(n)as(kd) { ProgrammingError.raise \"can't add to the universal scope\" }",
        "    method addNode(n)as(kd) { ProgrammingError.raise \"can't add to the universal scope\" }",
        "    method contains(n) { true }",
        "    method withSurroundingScopesDo(b) { b.apply(self) }",
        "    method kind(n) { \"unknown\" }",
        "    method at(n) putScope(scp) { }",
        "    method getScope(n) { self }",
        "    method isUniversal { true }",
        "}",
        "",
        "method rewritematchblockterm(arg) {",
        "    // arg is an AstNode prepresenting the pattern from a pattern-block",
        "    // Answer a pair consisting of a new AstNode that does the pattren-match,",
        "    // and a list of bindings.",
        "    util.setPosition(arg.line, arg.linePos)",
        "    if (arg.kind == \"num\") then {",
        "        return [arg, [] ]",
        "    }",
        "    if (arg.kind == \"string\") then {",
        "        return [arg, [] ]",
        "    }",
        "    if (arg.kind == \"boolean\") then {",
        "        return [arg, [] ]",
        "    }",
        "    if ((arg.kind == \"call\") && {arg.receiver.nameString.substringFrom(1)to(6)",
        "        == \"prefix\"}) then {",
        "        return [arg, [] ]",
        "    }",
        "    if (arg.kind == \"member\") then {",
        "        return [arg, [] ]",
        "    }",
        "    if (arg.kind == \"call\") then {",
        "        def bindings = []",
        "        def subpats = []",
        "        for (arg.with) do { part ->",
        "            for (part.args) do { a ->",
        "                def tmp = rewritematchblockterm(a)",
        "                subpats.push(tmp.first)",
        "                for (tmp.second) do {b->",
        "                    bindings.push(b)",
        "                }",
        "            }",
        "        }",
        "        def callpat = ast.callNode.new(",
        "                ast.memberNode.new(\"MatchAndDestructuringPattern\",",
        "                    ast.identifierNode.new(\"prelude\", false)),",
        "            [ast.requestPart.request \"new\" withArgs( [arg.receiver, ast.arrayNode.new(subpats)] )]",
        "        )",
        "        return [callpat, bindings]",
        "    }",
        "    if (arg.isIdentifier) then {",
        "        def varpat = ast.callNode.new(",
        "                ast.memberNode.new(\"VariablePattern\",",
        "                    ast.identifierNode.new(\"prelude\", false)),",
        "            [ast.requestPart.request \"new\" withArgs( [ast.stringNode.new(arg.value)] )]",
        "        )",
        "        if (false != arg.dtype) then {",
        "            if (arg.dtype.isIdentifier) then {",
        "                return [ast.callNode.new(",
        "                        ast.memberNode.new(\"AndPattern\",",
        "                            ast.identifierNode.new(\"prelude\", false)),",
        "                    [ast.requestPart.request \"new\" withArgs( [varpat, arg.dtype] )]",
        "                ), [arg] ]",
        "            }",
        "            def tmp = rewritematchblockterm(arg.dtype)",
        "            def bindings = [arg]",
        "            for (tmp.second) do {b->",
        "                bindings.push(b)",
        "            }",
        "            def bindingpat = ast.callNode.new(",
        "                    ast.memberNode.new(\"AndPattern\",",
        "                        ast.identifierNode.new(\"prelude\", false)),",
        "                [ast.requestPart.request \"new\" withArgs( [varpat, tmp.first ] )]",
        "            )",
        "            return [bindingpat, bindings]",
        "        }",
        "        return [varpat, [arg] ]",
        "    }",
        "    if (arg.kind == \"typeliteral\") then {",
        "        return [arg, [] ]",
        "    }",
        "    ProgrammingError.raise(\"Internal error in compiler: fell through when rewriting \"",
        "        ++ \"match block of unexpected kind '{arg.kind}'.\")",
        "}",
        "method rewritematchblock(blk) {",
        "    def arg = blk.params.first",
        "    var pattern := false",
        "    var newparams := [ ]",
        "    for (blk.params) do { p ->",
        "        newparams.push(p)",
        "    }",
        "    if ((arg.kind == \"num\") || (arg.kind == \"string\") ||",
        "        (arg.kind == \"boolean\")) then {",
        "        def tmp = rewritematchblockterm(arg)",
        "        pattern := tmp.first",
        "        newparams := tmp.second",
        "    }",
        "    if (arg.kind == \"identifier\") then {",
        "        def varpat = ast.callNode.new(",
        "                ast.memberNode.new(\"VariablePattern\",",
        "                    ast.identifierNode.new(\"prelude\", false)),",
        "            [ast.requestPart.request \"new\" withArgs( [ast.stringNode.new(arg.value)] )] )",
        "        if (false != arg.dtype) then {",
        "            match (arg.dtype.kind)",
        "                case { \"identifier\" | \"op\" ->",
        "                    pattern := ast.callNode.new(",
        "                            ast.memberNode.new(\"AndPattern\",",
        "                                ast.identifierNode.new(\"prelude\", false)),",
        "                        [ast.requestPart.request \"new\" withArgs( [varpat, arg.dtype] )] )",
        "                } case { _ ->",
        "                    def tmp = rewritematchblockterm(arg.dtype)",
        "                    def bindingpat = ast.callNode.new(",
        "                            ast.memberNode.new(\"AndPattern\",",
        "                                ast.identifierNode.new(\"prelude\", false)),",
        "                        [ast.requestPart.request \"new\" withArgs( [varpat, tmp.first ] )] )",
        "                    pattern := bindingpat",
        "                    for (tmp.second) do {p->",
        "                        // We can't name both p and the extra param binding",
        "                        // occurences, because then there would be shadowing.",
        "                        if (p.wildcard) then {",
        "                            p.isBindingOccurrence := true",
        "                        } else {",
        "                            def extraParam = p.deepCopy",
        "                            // The deepCopy copies the type too.",
        "                            // Does this cause an unnecessary dynamic type-check?",
        "                            extraParam.isBindingOccurrence := true",
        "                            newparams.push(extraParam)",
        "                        }",
        "                    }",
        "                }",
        "        } else {",
        "            if (false != blk.matchingPattern) then {",
        "                if (blk.matchingPattern.value == arg.value) then {",
        "                    pattern := arg",
        "                    newparams := []",
        "                }",
        "            }",
        "        }",
        "    } else {",
        "        if (false != blk.matchingPattern) then {",
        "            if (blk.matchingPattern.value == arg.value) then {",
        "                pattern := arg",
        "                newparams := []",
        "            }",
        "        }",
        "    }",
        "    def newblk = ast.blockNode.new(newparams, blk.body)",
        "    newblk.matchingPattern := pattern",
        "    newblk.line := blk.line",
        "    return newblk",
        "}",
        "",
        "method transformIdentifier(node) ancestors(as) {",
        "    // node is a (copy of an) ast node that represents an applied occurence of",
        "    // an identifer id.   This implies that node is a leaf in the ast.",
        "    // This method may or may not transform node into another ast.",
        "    // There is no spec for what this method should do.  The code below",
        "    // was developed by addding and removing particular cases until",
        "    // the transformed AST was sufficiecntly similar to the one emitted by the",
        "    // old identifier resolution pass for the C code generator to accept it.",
        "    // This method seems to do the following:",
        "    // - id is self => do nothing",
        "    // - id is super => do nothing",
        "    // - id is in an assignment position and a method ‹id›:=(_) is in scope:",
        "    //          replace node by a method request",
        "    // - id is in the lexical scope: store binding occurence of id in node",
        "    // - id is a method in an outer object scope: transform into member nodes.",
        "    //  TODO: can't make references to fields direct because they might be overridden",
        "    // - id is a self-method: transform into a request on self",
        "    // - id is not declared: generate an error message",
        "",
        "    // Some clauses are flagged \"TODO Compatability Kludge — remove when possible\"",
        "    // This means that APB put them there to produce an AST close enough to the",
        "    // former identifier resolution pass to keep the C code generator (genc) happy.",
        "    // They may represent things that APB doesn't understand, or bugs in genc",
        "",
        "    var nm := node.nameString",
        "    def nodeScope = node.scope",
        "    def nmGets = nm ++ \":=(1)\"",
        "    util.setPosition(node.line, node.linePos)",
        "    if (node.isAssigned) then {",
        "        if (nodeScope.hasDefinitionInNest(nmGets)) then {",
        "            if (nodeScope.kindInNest(nmGets) == k.methdec) then {",
        "                return node     // do nothing; this will be tranformed by the enclosing bind",
        "            }",
        "        }",
        "    }",
        "    def definingScope = nodeScope.thatDefines(nm) ifNone {",
        "        reportUndeclaredIdentifier(node)",
        "    }",
        "    def nodeKind = definingScope.kind(nm)",
        "    if (node.isAssigned) then {",
        "        if (nodeKind.isAssignable.not) then {",
        "            reportAssignmentTo(node) declaredInScope(definingScope)",
        "        }",
        "    }",
        "    if (nm == \"outer\") then {",
        "        def selfId = ast.identifierNode.new(\"self\", false) scope(nodeScope)",
        "        def memb = ast.memberNode.new(\"outer\", selfId) scope(nodeScope)",
        "        if (as.parent.isCall) then { as.parent.onSelf }",
        "        return memb",
        "        // TODO: represent outer statically",
        "    }",
        "    if (nm == \"self\") then {",
        "        return node",
        "    }",
        "    checkForAmbiguityOf (node) definedIn (definingScope) as (nodeKind)",
        "    def v = definingScope.variety",
        "    if (v == \"built-in\") then { return node }",
        "    if (v == \"dialect\") then {",
        "        def p = ast.identifierNode.new(\"prelude\", false) scope(nodeScope)",
        "        return ast.memberNode.new(nm, p) scope(nodeScope).onSelf",
        "    }",
        "    if (nodeKind.isParameter) then { return node }",
        "    if (nodeKind == k.typedec) then { return node }",
        "",
        "    // TODO Compatability Kludge — remove when possible",
        "    if (node.inTypePositionWithAncestors(as)) then { return node }",
        "    // the latter is necessary until .gct files distinguish types",
        "",
        "    if (definingScope == moduleScope) then {",
        "        if (nodeKind == k.defdec) then { return node }",
        "        if (nodeKind == k.typedec) then { return node }",
        "        if (nodeKind == k.vardec) then { return node }",
        "    }",
        "    if (definingScope == nodeScope.enclosingObjectScope) then {",
        "        return ast.memberNode.new(nm,",
        "            ast.identifierNode.new(\"self\", false) scope(nodeScope)",
        "        ) scope(nodeScope).onSelf",
        "    }",
        "    if (nodeScope.isObjectScope.not",
        "             && {nodeScope.isInSameObjectAs(definingScope)}) then {",
        "        if (nodeKind == k.methdec) then { return node }",
        "        if (nodeKind == k.defdec) then { return node }",
        "        if (nodeKind == k.vardec) then { return node }",
        "    }",
        "    if (v == \"method\") then { return node }",
        "        // node is defined in the closest enclosing method.",
        "        // there may be intervening blocks, but no objects or clases.",
        "        // If this identifier is in a block that is returned, then ids",
        "        // defined in the enclosing method scope have to go in a closure",
        "        // In that case, leaving the id untouched may be wrong",
        "    if (v == \"block\") then { return node }",
        "    return nodeScope.resolveOuterMethod(nm) fromNode(node)",
        "}",
        "method checkForAmbiguityOf (node) definedIn (definingScope) as (kind) {",
        "    def currentScope = node.scope",
        "    if (kind.fromParent.not) then { return }",
        "    if (currentScope.enclosingObjectScope != definingScope) then { return }",
        "    def name = node.nameString",
        "    def conflictingScope = definingScope.parent.thatDefines(name) ifNone {",
        "        return",
        "    }",
        "    def conflictingKind = conflictingScope.kind(name)",
        "    if (conflictingKind.fromParent) then { return }",
        "    var more := \"\"",
        "    if (conflictingScope.elementLines.contains(name)) then {",
        "        def earlierDef = conflictingScope.elementLines.get(name)",
        "        if (earlierDef != 0) then {",
        "            more := \" at line {earlierDef}\"",
        "        }",
        "    }",
        "    util.log 60 verbose \"currentScope = {currentScope}\\n defines {name} as {kind}\\nconflictingScope = {conflictingScope}\\n defines {name} as {conflictingKind}\"",
        "    errormessages.syntaxError \"{node.canonicalName} is both {kind}, and defined in an enclosing scope{more}.\"",
        "        atRange(node.line, node.linePos, node.linePos + name.size - 1)",
        "}",
        "method checkForReservedName(node) {",
        "    def ns = node.nameString",
        "    if (reserved.contains(ns)) then {",
        "        errormessages.syntaxError \"{ns} is a reserved name and cannot be re-declared.\"",
        "            atRange(node.line, node.linePos, node.linePos + ns.size - 1)",
        "    }",
        "}",
        "",
        "method isSameIgnoringCase(c1, c2) {",
        "    // necessary because the C library doesn't implement asLower or asUpper",
        "    if (c1 == c2) then { return true }",
        "    return (c1.ord - c2.ord).abs == 32",
        "}",
        "",
        "method reportUndeclaredIdentifier(node) {",
        "    def nodeScope = node.scope",
        "    def nm = node.nameString",
        "    def nmSize = nm.size",
        "    def sizeLimit = nmSize * 2",
        "        // below which we want the startChars to match",
        "    def thresh = ((nmSize / 3) + 1).truncated",
        "    def suggestions = []",
        "    def startChar = nm.first",
        "    var suggestion",
        "    nodeScope.withSurroundingScopesDo { s ->",
        "        s.elements.keysDo { v ->",
        "            if ((nmSize - v.size).abs < thresh) then {",
        "                util.log 100 verbose \"matching {nm} to {v} within {thresh}\"",
        "                def matchExtent = errormessages.name (nm) matches (v) within (thresh)",
        "                if (((matchExtent > 1) && (isSameIgnoringCase(v.first, startChar)) &&",
        "                      (nmSize <= v.size) && (v.size <= sizeLimit)) || {",
        "                      (nmSize > 2) && (matchExtent == v.size) } ) then {",
        "                    suggestion := errormessages.suggestion.new",
        "                    suggestion.replaceRange(node.linePos, node.linePos +",
        "                        node.value.size - 1) with (v) onLine(node.line)",
        "                    suggestions.push(suggestion)",
        "                }",
        "            }",
        "        }",
        "    }",
        "    nodeScope.elementScopes.keysDo { s ->",
        "        if (nodeScope.elementScopes.get(s).contains(nm)) then {",
        "            suggestion := errormessages.suggestion.new",
        "            suggestion.insert(\"{s}.\")atPosition(node.linePos)onLine(node.line)",
        "            suggestions.push(suggestion)",
        "        }",
        "    }",
        "    var highlightLength := node.value.size",
        "    if (node.value.replace \"()\" with \"XX\" != node.value) then {",
        "        var i := 0",
        "        var found := false",
        "        for (node.value) do {c->",
        "            if ((c == \"(\") && (!found)) then {",
        "                highlightLength := i",
        "                found := true",
        "            }",
        "            i := i + 1",
        "        }",
        "    }",
        "    if (node.inRequest) then {",
        "        var extra := \"\"",
        "        if (node.value == \"while\") then {",
        "            suggestion := errormessages.suggestion.new",
        "            suggestion.append \" do \\{ \\}\" onLine(node.line)",
        "            suggestions.push(suggestion)",
        "        }",
        "        if (node.value == \"for\") then {",
        "            suggestion := errormessages.suggestion.new",
        "            suggestion.append \" do \\{ aVarName -> \\}\" onLine(node.line)",
        "            suggestions.push(suggestion)",
        "        }",
        "        errormessages.syntaxError \"unknown method '{nm}'. This may be a spelling mistake or an attempt to access a method in another scope.{extra}\"",
        "            atRange(node.line, node.linePos, node.linePos +",
        "                highlightLength - 1)",
        "            withSuggestions(suggestions)",
        "    }",
        "    errormessages.syntaxError(\"unknown variable or method '{nm}'. This may be a spelling mistake or an attempt to access a variable in another scope.\")atRange(",
        "        node.line, node.linePos, node.linePos + highlightLength - 1)withSuggestions(suggestions)",
        "}",
        "method reportAssignmentTo(node) declaredInScope(scp) {",
        "    // Report a syntax error for an illegal assignment",
        "",
        "    def name = node.nameString",
        "    def kind = scp.kind(name)",
        "    var more := \"\"",
        "    def suggestions = []",
        "    if (scp.elementLines.contains(name)) then {",
        "        more := \" on line {scp.elementLines.get(name)}\"",
        "    }",
        "    if (kind == k.selfDef) then {",
        "        errormessages.syntaxError(\"'{name}' cannot be re-bound; \" ++",
        "              \"it always refers to the current object.\")",
        "              atRange(node.line, node.linePos, node.linePos + name.size - 1)",
        "    } elseif { reserved.contains(name) } then {",
        "        errormessages.syntaxError(\"'{name}' is a reserved name and \" ++",
        "              \"cannot be re-bound.\")",
        "              atRange(node.line, node.linePos, node.linePos + name.size - 1)",
        "    } elseif { kind == k.defdec } then {",
        "        if (scp.elementTokens.contains(name)) then {",
        "            def tok = scp.elementTokens.get(name)",
        "            def sugg = errormessages.suggestion.new",
        "            if (tok.value == \"def\") then {",
        "                var eq := tok",
        "                while {(eq.kind != \"op\") || (eq.value != \"=\")} do {",
        "                    eq := eq.next",
        "                }",
        "                sugg.replaceToken(eq)with(\":=\")",
        "                sugg.replaceToken(tok)with(\"var\")",
        "                suggestions.push(sugg)",
        "            } else {",
        "                errormessages.syntaxError(\"'{name}' cannot be changed \" ++",
        "                    \"because it was declared as a '{tok.value}'{more}.\")",
        "                    atRange(node.line, node.linePos, node.linePos + name.size - 1)",
        "            }",
        "        }",
        "        errormessages.syntaxError(\"'{name}' cannot be changed \"",
        "            ++ \"because it was declared with 'def'{more}. \"",
        "            ++ \"To make it a variable, use 'var' in the declaration\")",
        "            atRange(node.line, node.linePos, node.linePos + name.size - 1)",
        "            withSuggestions(suggestions)",
        "    } elseif { kind == k.typedec } then {",
        "        errormessages.syntaxError(\"'{name}' cannot be re-bound \"",
        "            ++ \"because it is declared as a type{more}.\")",
        "            atRange(node.line, node.linePos, node.linePos + name.size - 1)",
        "    } elseif { kind.isParameter } then {",
        "        errormessages.syntaxError(\"'{name}' cannot be re-bound \"",
        "            ++ \"because it is declared as a parameter{more}.\")",
        "            atRange(node.line, node.linePos, node.linePos + name.size - 1)",
        "    } elseif { kind == k.methdec } then {",
        "        errormessages.syntaxError(\"'{name}' cannot be re-bound \"",
        "            ++ \"because it is declared as a method{more}.\")",
        "            atRange(node.line, node.linePos, node.linePos + name.size - 1)",
        "    }",
        "}",
        "",
        "method resolveIdentifiers(topNode) {",
        "    // Recursively replace bare identifiers with their fully-qualified",
        "    // equivalents.  Creates and returns a new AST; map works",
        "    // bottom-up, so by the time a node is mapped, all of its",
        "    // descendents have already been mapped.",
        "",
        "    topNode.map { node, as ->",
        "        if ( node.isAppliedOccurenceOfIdentifier ) then {",
        "            transformIdentifier(node) ancestors(as)",
        "        } elseif { node.isCall } then {",
        "            transformCall(node)",
        "        } elseif { node.isInherits } then {",
        "            transformInherits(node) ancestors(as)",
        "        } elseif { node.isBind } then {",
        "            transformBind(node) ancestors(as)",
        "        } elseif { node.isTypeDec } then {",
        "            node",
        "        } else {",
        "            node",
        "        }",
        "    } ancestors (ast.ancestorChain.empty)",
        "}",
        "",
        "method processGCT(gct, importedModuleScope) {",
        "    gct.at \"classes\" ifAbsent {emptySequence}.do { c ->",
        "        def cmeths = []",
        "        def constrs = gct.at \"constructors-of:{c}\"",
        "        def classScope = newScopeIn(importedModuleScope) kind \"class\"",
        "        for (constrs) do { constr ->",
        "            def ns = newScopeIn(importedModuleScope) kind(\"object\")",
        "            classScope.addName(constr)",
        "            classScope.at(constr) putScope(ns)",
        "            gct.at \"methods-of:{c}.{constr}\".do { mn ->",
        "                ns.addName(mn)",
        "            }",
        "        }",
        "        importedModuleScope.addName(c)",
        "        importedModuleScope.at(c) putScope(classScope)",
        "    }",
        "    gct.at \"fresh-methods\" ifAbsent {emptySequence}.do { c ->",
        "        def objScope = newScopeIn(importedModuleScope) kind \"object\"",
        "        gct.at \"fresh:{c}\".do { mn ->",
        "            objScope.addName(mn)",
        "        }",
        "        importedModuleScope.addName(c)",
        "        importedModuleScope.at(c) putScope(objScope)",
        "    }",
        "}",
        "",
        "method setupContext(moduleObject) {",
        "    // define the built-in names",
        "    util.setPosition(0, 0)",
        "",
        "    builtInsScope.addName \"Type\" as(k.typedec)",
        "    builtInsScope.addName \"Object\" as(k.typedec)",
        "    builtInsScope.addName \"Unknown\" as(k.typedec)",
        "    builtInsScope.addName \"String\" as(k.typedec)",
        "    builtInsScope.addName \"Number\" as(k.typedec)",
        "    builtInsScope.addName \"Boolean\" as(k.typedec)",
        "    builtInsScope.addName \"Block\" as(k.typedec)",
        "    builtInsScope.addName \"Done\" as(k.typedec)",
        "    builtInsScope.addName \"done\" as(k.defdec)",
        "    builtInsScope.addName \"true\" as(k.defdec)",
        "    builtInsScope.addName \"false\" as(k.defdec)",
        "    builtInsScope.addName \"super\" as(k.defdec)",
        "    builtInsScope.addName \"outer\" as(k.defdec)",
        "    builtInsScope.addName \"readable\"",
        "    builtInsScope.addName \"writable\"",
        "    builtInsScope.addName \"public\"",
        "    builtInsScope.addName \"confidential\"",
        "    builtInsScope.addName \"override\"",
        "    builtInsScope.addName \"parent\"",
        "    builtInsScope.addName \"...\" as(k.defdec)",
        "",
        "    preludeScope.addName \"asString\"",
        "    preludeScope.addName \"::(1)\"",
        "    preludeScope.addName \"++(1)\"",
        "    preludeScope.addName \"==(1)\"",
        "    preludeScope.addName \"≠(1)\"",
        "    preludeScope.addName \"for(1)do(1)\"",
        "    preludeScope.addName \"while(1)do(1)\"",
        "    preludeScope.addName \"print(1)\"",
        "    preludeScope.addName \"native(1)code(1)\"",
        "    preludeScope.addName \"Exception\" as(k.defdec)",
        "    preludeScope.addName \"RuntimeError\" as(k.defdec)",
        "    preludeScope.addName \"NoSuchMethod\" as(k.defdec)",
        "    preludeScope.addName \"ProgrammingError\" as(k.defdec)",
        "    preludeScope.addName \"TypeError\" as(k.defdec)",
        "    preludeScope.addName \"ResourceException\" as(k.defdec)",
        "    preludeScope.addName \"EnvironmentException\" as(k.defdec)",
        "    preludeScope.addName \"π\" as(k.defdec)",
        "    preludeScope.addName \"infinity\" as(k.defdec)",
        "    preludeScope.addName \"minigrace\"",
        "    preludeScope.addName \"_methods\"",
        "    preludeScope.addName \"primitiveArray\"",
        "    preludeScope.addName \"become(1)\"",
        "    preludeScope.addName \"unbecome(1)\"",
        "    preludeScope.addName \"clone(1)\"",
        "    preludeScope.addName \"inBrowser\"",
        "    preludeScope.addName \"engine\"",
        "",
        "    graceObjectScope.addName \"isMe(1)\" as (k.graceObjectMethod)",
        "    graceObjectScope.addName \"≠(1)\" as (k.graceObjectMethod)",
        "    graceObjectScope.addName \"basicAsString\" as (k.graceObjectMethod)",
        "    graceObjectScope.addName \"asString\" as (k.graceObjectMethod)",
        "    graceObjectScope.addName \"asDebugString\" as (k.graceObjectMethod)",
        "    graceObjectScope.addName \"::(1)\" as (k.graceObjectMethod)",
        "",
        "    booleanScope.addName \"prefix!\"",
        "    booleanScope.addName \"&&(1)\"",
        "    booleanScope.addName \"||(1)\"",
        "    booleanScope.addName \"not\"",
        "",
        "    builtInsScope.addName \"graceObject\"",
        "    builtInsScope.at \"graceObject\" putScope(graceObjectScope)",
        "    builtInsScope.addName \"prelude\" as(k.defdec)",
        "    builtInsScope.at \"prelude\" putScope(preludeScope)",
        "    builtInsScope.addName \"_prelude\" as(k.defdec)",
        "    builtInsScope.at \"_prelude\" putScope(preludeScope)",
        "    builtInsScope.at \"true\" putScope(booleanScope)",
        "    builtInsScope.at \"false\" putScope(booleanScope)",
        "",
        "    // Historical - should be removed eventually",
        "    if (!util.extensions.contains(\"NativePrelude\")) then {",
        "        var hadDialect := false",
        "        for (moduleObject.value) do {val->",
        "            if (val.kind == \"dialect\") then {",
        "                hadDialect := true",
        "                xmodule.checkExternalModule(val)",
        "                def gctDict = xmodule.parseGCT(val.value)",
        "                gctDict.at \"public\" ifAbsent {emptySequence}.do { mn ->",
        "                    preludeScope.addName(mn)",
        "                }",
        "                gctDict.at \"confidential\" ifAbsent {emptySequence}.do { mn ->",
        "                    preludeScope.addName(mn)",
        "                }",
        "                processGCT(gctDict, preludeScope)",
        "            }",
        "        }",
        "        if (!hadDialect) then {",
        "            def gctDict = xmodule.parseGCT \"StandardPrelude\"",
        "            gctDict.at \"public\" ifAbsent{emptySequence}.do { mn ->",
        "                preludeScope.addName(mn)",
        "            }",
        "            gctDict.at \"confidential\" ifAbsent {emptySequence}.do { mn ->",
        "                preludeScope.addName(mn)",
        "            }",
        "            processGCT(gctDict, preludeScope)",
        "        }",
        "    }",
        "}",
        "",
        "method checkTraitBody(traitObjNode) {",
        "//    util.log 70 verbose \"checking trait object at line {traitObjNode.line}\"",
        "    traitObjNode.value.do { node ->",
        "        if (node.isLegalInTrait.not) then {",
        "            def badThing = node.statementName",
        "            def article = articleFor (badThing)",
        "            errormessages.syntaxError(\"{article} {badThing} cannot appear in \" ++",
        "                \"a trait (defined on line {traitObjNode.line})\")",
        "                atLine(node.line)",
        "        }",
        "    }",
        "}",
        "",
        "method articleFor(str) {",
        "    // the indefinite article to preceed str",
        "    if (\"aeioAEIO\".contains(str.first)) then { \"an\" } else { \"a\" }",
        "}",
        "",
        "method buildSymbolTableFor(topNode) ancestors(topChain) {",
        "    def symbolTableVis = object {",
        "        inherits ast.baseVisitor",
        "",
        "        method visitBind (o) up (as) {",
        "            o.scope := as.parent.scope",
        "            def lValue = o.dest",
        "            if (lValue.kind == \"identifier\") then {",
        "                lValue.isAssigned := true",
        "            }",
        "            return true",
        "        }",
        "        method visitCall (o) up (as) {",
        "            o.scope := as.parent.scope",
        "            def callee = o.receiver",
        "            if (callee.kind == \"identifier\") then {",
        "                callee.inRequest := true",
        "            }",
        "            return true",
        "        }",
        "        method visitBlock (o) up (as) {",
        "            o.scope := newScopeIn(as.parent.scope) kind \"block\"",
        "            true",
        "        }",
        "        method visitDefDec (o) up (as) {",
        "            o.scope := as.parent.scope",
        "            if (false != o.startToken) then {",
        "                as.parent.scope.elementTokens.put(o.nameString, o.startToken)",
        "            }",
        "            if (o.value.isObject) then { o.value.name := o.nameString }",
        "            true",
        "        }",
        "        method visitIdentifier (o) up (as) {",
        "            var scope := as.parent.scope",
        "            o.scope := scope",
        "            if (o.isBindingOccurrence) then {",
        "                if ((o.isDeclaredByParent.not) && {o.wildcard.not}) then {",
        "                    checkForReservedName(o)",
        "                    def kind = o.declarationKindWithAncestors(as)",
        "                    if (kind.isParameter) then {",
        "                        if (scope.variety == \"object\") then {",
        "                            // this is a hack for declaring the parameters of the factory",
        "                            // method of a dotted class.  The class's symbol table is that of the",
        "                            // fresh object; the factory method's parameters need to go in",
        "                            // the _enclosing_ scope.",
        "                            scope := scope.parent",
        "                            if (scope.variety != \"method\") then {",
        "                                ProgrammingError.raise \"object scope not in method scope\"",
        "                            }",
        "                        }",
        "                    }",
        "                    scope.addNode(o) as (kind)",
        "                }",
        "            } elseif {o.wildcard} then {",
        "                errormessages.syntaxError(\"'_' cannot be used in an expression\")",
        "                    atRange(o.line, o.linePos, o.linePos)",
        "            }",
        "            true",
        "        }",
        "        method visitImport (o) up (as) {",
        "            o.scope := as.parent.scope",
        "            xmodule.checkExternalModule(o)",
        "            def gct = xmodule.parseGCT(o.path)",
        "            def otherModule = newScopeIn(as.parent.scope) kind \"module\"",
        "            otherModule.node := o",
        "            processGCT(gct, otherModule)",
        "            o.scope.at(o.nameString) putScope(otherModule)",
        "            true",
        "        }",
        "        method visitInherits (o) up (as) {",
        "            o.scope := as.parent.scope",
        "            if (o.isUse) then {",
        "                if (as.parent.canUse.not) then {",
        "                    errormessages.syntaxError(\"use statements must \" ++",
        "                        \"be inside an object, class, or trait\")",
        "                        atRange(o.line, o.linePos, o.linePos + 3)",
        "                }",
        "            } else {",
        "                if (as.parent.canInherit.not) then {",
        "                    errormessages.syntaxError(\"inherit statements must \" ++",
        "                        \"be inside an object or class; a trait cannot inherit\")",
        "                        atRange(o.line, o.linePos, o.linePos + 7)",
        "                }",
        "            }",
        "            true",
        "        }",
        "        method visitMethod (o) up (as) {",
        "            def surroundingScope = as.parent.scope",
        "            if (surroundingScope.isObjectScope.not) then {",
        "                // This check needs to be here so long as the parser accepts",
        "                // class declarations as statments, rather than as method",
        "                // declarations.  Why does it do so?  Because of the old",
        "                // \"dotted\" class syntax, wherein a class decl was actually a def.",
        "                errormessages.syntaxError(\"class declarations are permitted only\" ++",
        "                    \" inside an object\") atRange(o.line, o.linePos, o.linePos + 4)",
        "            }",
        "            def ident = o.asIdentifier",
        "            checkForReservedName(ident)",
        "            surroundingScope.addNode(ident) as(k.methdec)",
        "            ident.isDeclaredByParent := true",
        "            if (ident.isBindingOccurrence) then {",
        "                // aliased and excluded names are appliedOccurences",
        "                o.scope := newScopeIn(surroundingScope) kind \"method\"",
        "                if (o.returnsObject) then {",
        "                    o.isFresh := true",
        "                }",
        "            }",
        "            true",
        "        }",
        "        method visitMethodType (o) up (as) {",
        "            o.scope := newScopeIn(as.parent.scope) kind \"methodtype\"",
        "            // the scope for the parameters (including the type parameters,",
        "            // if any) of this method.",
        "            true",
        "        }",
        "        method visitObject (o) up (as) {",
        "            def myParent = as.parent",
        "            o.scope := newScopeIn(myParent.scope) kind \"object\"",
        "            if (o.inTrait) then { checkTraitBody(o) }",
        "            if (myParent.kind == \"defdec\") then {",
        "                o.name := myParent.nameString",
        "            }",
        "            true",
        "        }",
        "        method visitModule(o) up (as) {",
        "            // the module scope was set before the traversal started",
        "            true",
        "        }",
        "        method visitTypeDec (o) up (as) {",
        "            def enclosingScope = as.parent.scope",
        "            enclosingScope.addNode(o.name) as(k.typedec)",
        "            o.name.isDeclaredByParent := true",
        "            o.scope := newScopeIn(enclosingScope) kind \"typedec\"",
        "            // this scope will be the home for any type parameters.",
        "            // If there are no parameters, it won't be used.",
        "            // For now, we don't distinguish between type decs and type params",
        "            true",
        "        }",
        "        method visitTypeLiteral (o) up (as) {",
        "            o.scope := newScopeIn(as.parent.scope) kind \"type\"",
        "            true",
        "        }",
        "        method visitTypeParameters(o) up (as) { o.scope := as.parent.scope ; true }",
        "        method visitIf(o) up (as) { o.scope := as.parent.scope ; true }",
        "        method visitMatchCase(o) up (as) { o.scope := as.parent.scope ; true }",
        "        method visitTryCatch(o) up (as) { o.scope := as.parent.scope ; true }",
        "        method visitSignaturePart(o) up (as) { o.scope := as.parent.scope ; true }",
        "        method visitArray(o) up (as) { o.scope := as.parent.scope ; true }",
        "        method visitMember(o) up (as) { o.scope := as.parent.scope ; true }",
        "        method visitGeneric(o) up (as) { o.scope := as.parent.scope ; true }",
        "        method visitString(o) up (as) { o.scope := as.parent.scope ; true }",
        "        method visitNum(o) up (as) { o.scope := as.parent.scope ; true }",
        "        method visitOp(o) up (as) { o.scope := as.parent.scope ; true }",
        "        method visitVarDec(o) up (as) { o.scope := as.parent.scope ; true }",
        "        method visitReturn(o) up (as) { o.scope := as.parent.scope ; true }",
        "        method visitDialect(o) up (as) { o.scope := as.parent.scope ; true }",
        "        method visitBlank(o) up (as) { o.scope := as.parent.scope ; true }",
        "        method visitCommentNode(o) up (as) { o.scope := as.parent.scope ; true }",
        "    }   // end of symbolTableVis",
        "",
        "    def objectScopesVis = object {",
        "        // This traversal can't be completed in the buildSymbolTable visitor,",
        "        // because the visitation is top-down, and hence the scope of the",
        "        // body of a def or method won't have been allocated when the",
        "        // delcaration is visited.",
        "",
        "        inherits ast.baseVisitor",
        "        method visitDefDec (o) up (as) {",
        "            if (o.returnsObject) then {",
        "                o.scope.at(o.nameString)",
        "                    putScope(o.returnedObjectScope)",
        "            }",
        "            true",
        "        }",
        "        method visitMethod (o) up (as) {",
        "            def myParent = as.parent",
        "            if (o.returnsObject) then {",
        "                myParent.scope.at(o.nameString) putScope(o.returnedObjectScope)",
        "                if (as.forebears.forebears.isEmpty.not) then {",
        "                    // omit this if I'm at the module-level",
        "                    def factoryName = myParent.name",
        "                    if ((factoryName != \"object\") && (o.body.last.isObject)) then {",
        "                        o.body.last.name := factoryName ++ \".\" ++ o.body.last.name",
        "                    }",
        "                }",
        "            }",
        "            true",
        "        }",
        "    }",
        "",
        "    def inheritanceVis = object {",
        "        inherits ast.baseVisitor",
        "        method visitObject (o) up (as) {",
        "            collectParentNames(o)",
        "            true",
        "        }",
        "        method visitModule (o) up (as) {",
        "            collectParentNames(o)",
        "            true",
        "        }",
        "    }",
        "",
        "    topNode.accept(symbolTableVis) from(topChain)",
        "    topNode.accept(objectScopesVis) from(topChain)",
        "    topNode.accept(inheritanceVis) from(topChain)",
        "}",
        "",
        "method collectParentNames(node) {",
        "    // node is an object or class; put the names that it inherits into its scope.",
        "    // In the process, checks for a cycle in the inheritance chain.",
        "    def nodeScope = node.scope",
        "    if (ast.fakeSymbolTable == nodeScope) then {",
        "        util.log 20 verbose \"node {node} has no scope.\\n{node.pretty 0}\"",
        "    }",
        "    if (nodeScope.inheritedNames == completed) then {",
        "        return",
        "    }",
        "    if (nodeScope.inheritedNames == inProgress) then {",
        "        errormessages.syntaxError \"cyclic inheritance or trait use\"",
        "            atRange(node.line, node.linePos, node.linePos)",
        "    }",
        "    nodeScope.inheritedNames := inProgress",
        "    gatherInheritedNames(node)",
        "    gatherUsedNames(node)",
        "    nodeScope.inheritedNames := completed",
        "}",
        "",
        "method gatherInheritedNames(node) is confidential {",
        "    var inhNode := node.superclass",
        "    def objScope = node.scope",
        "    var superScope",
        "    var inheritedKind := k.inherited",
        "    if (false == inhNode) then {",
        "        def gO = ast.identifierNode.new(\"graceObject\", false) scope(objScope)",
        "        inhNode := ast.inheritsNode.new(gO) scope(objScope)",
        "        superScope := graceObjectScope",
        "        inheritedKind := k.graceObjectMethod",
        "    } else {",
        "        superScope := objScope.scopeReferencedBy(inhNode.value)",
        "        // If superScope is the universal scope, then we have no information",
        "        // about the inherited attributes",
        "        if (superScope.isUniversal.not) then {",
        "            if (ast.nullNode != superScope.node) then {",
        "                // superScope.node == nullNode when superScope describes",
        "                // an imported module.",
        "                collectParentNames(superScope.node)",
        "            } else {",
        "                util.log 70 verbose \"‹{node.nameString}›.superscope.node == nullNode\"",
        "            }",
        "        } else {",
        "            util.log 70 verbose \"superscope of {node.nameString} is universal\"",
        "        }",
        "    }",
        "    superScope.elements.keysDo { each ->",
        "        if (each != \"self\") then {",
        "            objScope.addName(each) as(inheritedKind)",
        "            inhNode.providedNames.add(each)",
        "        }",
        "    }",
        "    inhNode.aliases.do { a ->",
        "        def old = a.oldName.nameString",
        "        if (superScope.contains(old)) then {",
        "            inhNode.providedNames.add(a.newName.nameString)",
        "        } else {",
        "            errormessages.syntaxError(\"can't define an alias for {old} \" ++",
        "                \"because it is not present in the inherited object\")",
        "                atRange(a.oldName.line, a.oldName.linePos,",
        "                        a.oldName.linePos + old.size - 1)",
        "        }",
        "    }",
        "    inhNode.exclusions.do { exId ->",
        "        inhNode.providedNames.remove(exId.nameString) ifAbsent {",
        "            errormessages.syntaxError(\"can't exclude {exId.canonicalName} \" ++",
        "                \"because it is not present in the inherited object\")",
        "                atRange(exId.line, exId.linePos,",
        "                        exId.linePos + exId.nameString.size - 1)",
        "        }",
        "    }",
        "}",
        "",
        "method gatherUsedNames(objNode) is confidential {",
        "    // For each of objNodes's used traits, gather the names",
        "    // introduced by that trait, as modified by alias and exclude.",
        "",
        "    def traitMethods = map.new",
        "    def objScope = objNode.scope",
        "    objNode.usedTraits.do { t ->",
        "        def traitScope = objScope.scopeReferencedBy(t.value)",
        "        def traitNode = traitScope.node",
        "        util.log 70 verbose \"examining parents of trait {t} which has scope {traitScope}\\ndefined in node {traitNode}\"",
        "        if (traitNode.isObject) then {",
        "            collectParentNames(traitScope.node)",
        "        } else {",
        "            util.log 70 verbose \"traitNode {traitNode} is not an object.\\n{traitNode.pretty 1}\"",
        "        }",
        "        traitScope.keysAndKindsDo { nm, kd ->",
        "            if (kd.forUsers) then {",
        "                util.log 70 verbose \"meth {nm} is forUsers; (kind = {kd})\"",
        "                objScope.addName(nm) as(k.fromTrait)",
        "                t.providedNames.add(nm)",
        "            }",
        "        }",
        "        t.aliases.do { a ->",
        "            def old = a.oldName.nameString",
        "            if (traitScope.contains(old)) then {",
        "                t.providedNames.add(a.newName.nameString)",
        "            } else {",
        "                errormessages.syntaxError(\"can't define an alias for \" ++",
        "                    \"{old} because it is not present in the trait\")",
        "                    atRange(a.oldName.line, a.oldName.linePos,",
        "                            a.oldName.linePos + old.size - 1)",
        "            }",
        "        }",
        "        t.exclusions.do { exId ->",
        "            t.providedNames.remove(exId.nameString) ifAbsent {",
        "                errormessages.syntaxError(\"can't exclude {exId.canonicalName} \" ++",
        "                    \"because it is not available in the trait\")",
        "                    atRange(exId.line, exId.linePos,",
        "                            exId.linePos + exId.nameString.size - 1)",
        "            }",
        "        }",
        "        t.providedNames.do { methName ->",
        "            def definingTraits = traitMethods.get(methName) ifAbsent { [] }",
        "            definingTraits.push(t)",
        "            traitMethods.put(methName, definingTraits)",
        "        }",
        "    }",
        "    checkForConflicts(objNode, traitMethods)",
        "}",
        "",
        "method checkForConflicts(objNode, traitMethods) {",
        "    // traitMethods is a dictionary with methodNames as keys, and",
        "    // a list of sources as values.  Multiple sources indicate a conflict,",
        "    // unless there is a local definition too.",
        "    def conflicts = emptyList",
        "",
        "    traitMethods.keysDo { methName ->",
        "        def sources = traitMethods.get(methName)",
        "        if (sources.size > 1) then {    // a method has more than one source trait",
        "            util.log 70 verbose(\"{objNode.nameString}'s scope = {objNode.scope}\" ++",
        "                  \"\\n and {objNode.nameString}'s localNames = {objNode.localNames}\")",
        "            if (objNode.localNames.contains(methName).not) then {",
        "                conflicts.addLast (conflictForMethodName(methName) from(sources))",
        "            }",
        "        }",
        "    }",
        "",
        "    if (conflicts.isEmpty) then { return }",
        "",
        "    var maxSourceLine := 0",
        "    var message := if (conflicts.size > 1) then {",
        "        \"Trait conflicts found:\\n    \"",
        "    } else {",
        "        \"Trait conflict found: \"",
        "    }",
        "    conflicts.do { each ->",
        "        def sourceList = each.sources.map { s -> s.nameString }",
        "        maxSourceLine := each.sources.fold {a, s -> max(a, s.line) }",
        "              startingWith(maxSourceLine)",
        "        message := message ++ \"method `{each.methodName}` is defined in \" ++",
        "              readableStringFrom(sourceList) ++ \".\\n    \"",
        "    }",
        "    if (maxSourceLine == 0) then {",
        "        errormessages.error(message)",
        "    } else {",
        "        errormessages.error(message) atLine (maxSourceLine)",
        "    }",
        "}",
        "",
        "class conflictForMethodName(nm) from(srcs) {",
        "    def methodName is public = nm",
        "    def sources is public = srcs",
        "}",
        "",
        "method readableStringFrom(xs:Sequence) {",
        "    var result := \"\"",
        "    xs.keysAndValuesDo { ix, v ->",
        "        result := result ++ v.asString",
        "        if (ix == (xs.size - 1)) then {",
        "            result := result ++ \" and \"",
        "        } elseif { ix < (xs.size - 1) } then {",
        "            result := result ++ \", \"",
        "        }",
        "    }",
        "    result",
        "}",
        "",
        "method transformBind(bindNode) ancestors(as) {",
        "    // bindNode is (a shallow copy of) a bindNode.  If it is binding a",
        "    // \"member\" or an identifier, transform it into a request on a setter",
        "",
        "    def dest = bindNode.dest",
        "    def currentScope = bindNode.scope",
        "    util.setPosition(bindNode.line, bindNode.linePos)",
        "    if ( dest.isMember ) then {",
        "        def nm = dest.nameString",
        "        def nmGets = nm ++ \":=\"",
        "        def part = ast.requestPart.request(nmGets) withArgs [bindNode.value]",
        "                scope(currentScope)",
        "        return ast.callNode.new(dest.receiver, [part]) scope(currentScope)",
        "    } elseif { dest.isIdentifier } then {",
        "        def nm = dest.nameString",
        "        def nmGets = nm ++ \":=(1)\"",
        "        if (currentScope.hasDefinitionInNest(nmGets)) then {",
        "            if (currentScope.kindInNest(nmGets) == k.methdec) then {",
        "                def rcvr = currentScope.resolveOuterMethod(nmGets) fromNode(bindNode).receiver",
        "                def part = ast.requestPart.request(nm ++ \":=\")",
        "                        withArgs [ bindNode.value ] scope(currentScope)",
        "                return ast.callNode.new(rcvr, [ part ]) scope(currentScope)",
        "            } else {",
        "                util.log 20 verbose \"bind check 2 failed\"",
        "            }",
        "        }",
        "    }",
        "    bindNode",
        "}",
        "",
        "",
        "method transformInherits(inhNode) ancestors(as) {",
        "    // inhNode is (a shallow copy of) an inheritsNode.  Transform it to deal",
        "    // with superobject initialization and inherited names, including",
        "    // inheritance modifiers",
        "    def superObject = inhNode.value",
        "    def currentScope = inhNode.scope",
        "    if (currentScope.isObjectScope.not) then {",
        "        errormessages.syntaxError \"{inhNode.statementName} statements must be directly inside an object\"",
        "                    atRange(inhNode.line, inhNode.linePos, inhNode.linePos + 7)",
        "    }",
        "    if (superObject.isAppliedOccurenceOfIdentifier) then {",
        "        // this deals with \"inherits true\" etc.",
        "        def definingScope = currentScope.thatDefines(superObject.nameString)",
        "        if (definingScope.variety == \"built-in\") then { return inhNode }",
        "    }",
        "    def superScope = currentScope.scopeReferencedBy(superObject)",
        "    if (inhNode.isUse) then {",
        "        // a `use` statement; no transformation necessary",
        "    } elseif {inhNode.inheritsFromMember} then {",
        "        def newcall = ast.callNode.new(inhNode.value.receiver, [",
        "            ast.requestPart.request(inhNode.value.value) withArgs( [] ) scope(currentScope),",
        "            ast.requestPart.request \"$object\" withArgs (",
        "                [ast.identifierNode.new(\"self\", false) scope(currentScope)]) scope(currentScope)",
        "            ]",
        "        ) scope(currentScope)",
        "        inhNode.value := newcall",
        "    } elseif (inhNode.inheritsFromCall) then {",
        "        var superCall := inhNode.value",
        "        superCall.with.push(ast.requestPart.request \"$object\"",
        "            withArgs ( [ast.identifierNode.new(\"self\", false) scope(currentScope)] ))",
        "    } elseif {! util.extensions.contains \"ObjectInheritance\"} then {",
        "        errormessages.syntaxError \"inheritance must be from a freshly-created object\"",
        "            atRange(inhNode.line, superObject.linePos,",
        "                superObject.linePos + superObject.nameString.size - 1)",
        "    }",
        "    inhNode",
        "}",
        "",
        "method transformCall(cNode) -> ast.AstNode {",
        "    def methodName = cNode.nameString",
        "    def s = cNode.scope",
        "    if (cNode.receiver.isImplicit) then {",
        "        def rcvr = s.resolveOuterMethod(methodName) fromNode(cNode)",
        "        if (rcvr.isIdentifier) then {",
        "            util.log 60 verbose \"Transformed {cNode.pretty 0} answered identifier {rcvr.nameString}\"",
        "            return cNode",
        "        }",
        "        def definingScope = s.thatDefines(methodName)",
        "        checkForAmbiguityOf (cNode)",
        "            definedIn (definingScope) as (definingScope.kind(methodName))",
        "        cNode.receiver := rcvr.receiver",
        "        cNode.onSelf",
        "    } else {",
        "        cNode",
        "    }",
        "}",
        "",
        "method rewriteMatches(topNode) {",
        "    topNode.map { node, as ->",
        "        if (node.isMatchingBlock) then {",
        "            rewritematchblock(node)",
        "        } else {",
        "            node",
        "        }",
        "    } ancestors (ast.ancestorChain.empty)",
        "}",
        "",
        "method resolve(moduleObject) {",
        "    util.log_verbose \"rewriting tree.\"",
        "    setupContext(moduleObject)",
        "    util.setPosition(0, 0)",
        "    moduleObject.scope := moduleScope",
        "    def preludeObject = ast.moduleNode.body([moduleObject])",
        "        named \"prelude\" scope (preludeScope)",
        "    def preludeChain = ast.ancestorChain.with(preludeObject)",
        "",
        "    def patternMatchModule = rewriteMatches(moduleObject)",
        "    util.log_verbose \"pattern-match rewriting done.\"",
        "",
        "    if (util.target == \"patterns\") then {",
        "        util.outprint \"=====================================\"",
        "        util.outprint \"module after pattern-match re-writing\"",
        "        util.outprint \"=====================================\"",
        "        util.outprint(patternMatchModule.pretty(0))",
        "        util.log_verbose \"done\"",
        "        sys.exit(0)",
        "    }",
        "",
        "    buildSymbolTableFor(patternMatchModule) ancestors(preludeChain)",
        "    util.log_verbose \"symbol tables built.\"",
        "",
        "    if (util.target == \"symbols\") then {",
        "        util.outprint \"=====================================\"",
        "        util.outprint \"module with symbol tables\"",
        "        util.outprint \"=====================================\"",
        "        util.outprint \"top-level\"",
        "        util.outprint \"Universal scope = {universalScope.asDebugString}\"",
        "        patternMatchModule.scope.withSurroundingScopesDo { each ->",
        "            util.outprint (each.asString)",
        "            util.outprint (each.elementScopesAsString)",
        "            util.outprint \"----------------\"",
        "        }",
        "        util.outprint(patternMatchModule.pretty(0))",
        "        util.log_verbose \"done\"",
        "        sys.exit(0)",
        "    }",
        "    resolveIdentifiers(patternMatchModule)",
        "}",
        "",
        "",
        "" ];
    }
    if (typeof global !== "undefined")
      global.gracecode_identifierresolution = gracecode_identifierresolution;
    if (typeof window !== "undefined")
      window.gracecode_identifierresolution = gracecode_identifierresolution;
