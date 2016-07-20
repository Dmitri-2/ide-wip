"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_xmodule() {
  setModuleName("xmodule");
  this.definitionModule = "xmodule";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_xmodule_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_xmodule_outer0;
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
    setModuleName("xmodule");
    // io is a simple accessor - elide try ... catch
    return var_io;
  };
  func1.paramCounts = [0];
  this.methods["io"] = func1;
  func1.definitionLine = 2;
  func1.definitionModule = "xmodule";
  func1.debug = "import";
  func1.confidential = true;
  setModuleName("xmodule");
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
    setModuleName("xmodule");
    // sys is a simple accessor - elide try ... catch
    return var_sys;
  };
  func2.paramCounts = [0];
  this.methods["sys"] = func2;
  func2.definitionLine = 3;
  func2.definitionModule = "xmodule";
  func2.debug = "import";
  func2.confidential = true;
  setModuleName("xmodule");
  setLineNumber(4);    // compilenode import
  // Import of util as util
  if (typeof gracecode_util == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject,
      new GraceString('could not find module util'));
  var var_util = do_import("util", gracecode_util);
  var func3 = function(argcv) {    // method util
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("xmodule");
    // util is a simple accessor - elide try ... catch
    return var_util;
  };
  func3.paramCounts = [0];
  this.methods["util"] = func3;
  func3.definitionLine = 4;
  func3.definitionModule = "xmodule";
  func3.debug = "import";
  func3.confidential = true;
  setModuleName("xmodule");
  setLineNumber(5);    // compilenode import
  // Import of ast as ast
  if (typeof gracecode_ast == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject,
      new GraceString('could not find module ast'));
  var var_ast = do_import("ast", gracecode_ast);
  var func4 = function(argcv) {    // method ast
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("xmodule");
    // ast is a simple accessor - elide try ... catch
    return var_ast;
  };
  func4.paramCounts = [0];
  this.methods["ast"] = func4;
  func4.definitionLine = 5;
  func4.definitionModule = "xmodule";
  func4.debug = "import";
  func4.confidential = true;
  setModuleName("xmodule");
  setLineNumber(6);    // compilenode import
  // Import of mirrors as mirrors
  if (typeof gracecode_mirrors == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject,
      new GraceString('could not find module mirrors'));
  var var_mirrors = do_import("mirrors", gracecode_mirrors);
  var func5 = function(argcv) {    // method mirrors
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("xmodule");
    // mirrors is a simple accessor - elide try ... catch
    return var_mirrors;
  };
  func5.paramCounts = [0];
  this.methods["mirrors"] = func5;
  func5.definitionLine = 6;
  func5.definitionModule = "xmodule";
  func5.debug = "import";
  func5.confidential = true;
  setModuleName("xmodule");
  setLineNumber(7);    // compilenode import
  // Import of errormessages as errormessages
  if (typeof gracecode_errormessages == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject,
      new GraceString('could not find module errormessages'));
  var var_errormessages = do_import("errormessages", gracecode_errormessages);
  var func6 = function(argcv) {    // method errormessages
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("xmodule");
    // errormessages is a simple accessor - elide try ... catch
    return var_errormessages;
  };
  func6.paramCounts = [0];
  this.methods["errormessages"] = func6;
  func6.definitionLine = 7;
  func6.definitionModule = "xmodule";
  func6.debug = "import";
  func6.confidential = true;
  setModuleName("xmodule");
  setLineNumber(8);    // compilenode import
  // Import of unixFilePath as filePath
  if (typeof gracecode_unixFilePath == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject,
      new GraceString('could not find module unixFilePath'));
  var var_filePath = do_import("unixFilePath", gracecode_unixFilePath);
  var func7 = function(argcv) {    // method filePath
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("xmodule");
    // filePath is a simple accessor - elide try ... catch
    return var_filePath;
  };
  func7.paramCounts = [0];
  this.methods["filePath"] = func7;
  func7.definitionLine = 8;
  func7.definitionModule = "xmodule";
  func7.debug = "import";
  func7.confidential = true;
  setModuleName("xmodule");
  setLineNumber(13);    // compilenode method
  var func8 = function(argcv) {    // method builtInModules
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("xmodule");
    var if9 = GraceDone;
    setLineNumber(14);    // compilenode string
    var string10 = new GraceString("c");
    // call case 6: other requests
    var call13 = callmethodChecked(var_util, "target", []);
    var opresult15 = callmethodChecked(call13, "==(1)", [1], string10);
    if (Grace_isTrue(opresult15)) {
      setLineNumber(15);    // compilenode string
      var string18 = new GraceString("sys");
      setLineNumber(16);    // compilenode string
      var string19 = new GraceString("io");
      setLineNumber(17);    // compilenode string
      var string20 = new GraceString("imports");
      setLineNumber(18);    // compilenode string
      var string21 = new GraceString("StandardPrelude");
      setLineNumber(19);    // compilenode string
      var string22 = new GraceString("standardGrace");
      setLineNumber(20);    // compilenode string
      var string23 = new GraceString("collectionsPrelude");
      var array17 = new PrimitiveGraceList([string18, string19, string20, string21, string22, string23]);
      // call case 5: prelude request
      var call24 = callmethodChecked(var_prelude, "list(1)", [1], array17);
      if9 = call24;
    } else {
      setLineNumber(22);    // compilenode string
      var string27 = new GraceString("imports");
      setLineNumber(23);    // compilenode string
      var string28 = new GraceString("io");
      setLineNumber(24);    // compilenode string
      var string29 = new GraceString("mirrors");
      setLineNumber(25);    // compilenode string
      var string30 = new GraceString("sys");
      setLineNumber(26);    // compilenode string
      var string31 = new GraceString("unicode");
      setLineNumber(27);    // compilenode string
      var string32 = new GraceString("util");
      var array26 = new PrimitiveGraceList([string27, string28, string29, string30, string31, string32]);
      // call case 5: prelude request
      var call33 = callmethodChecked(var_prelude, "list(1)", [1], array26);
      if9 = call33;
    }
    return if9;
  };
  func8.paramCounts = [0];
  this.methods["builtInModules"] = func8;
  func8.definitionLine = 13;
  func8.definitionModule = "xmodule";
  setLineNumber(57);    // compilenode method
  var func34 = function(argcv) {    // method checkDialect(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_moduleObject = arguments[curarg];
    curarg++;
    setModuleName("xmodule");
    setLineNumber(58);    // compilenode block
    var block36 = new GraceBlock(this, 58, 1);
    setLineNumber(1);    // compilenode identifier
    block36.real = function(var_node) {
      var if37 = GraceDone;
      setLineNumber(59);    // compilenode member
      // call case 6: other requests
      var call39 = callmethodChecked(var_node, "isDialect", []);
      if (Grace_isTrue(call39)) {
        setLineNumber(60);    // compilenode member
        // call case 6: other requests
        var call41 = callmethodChecked(var_node, "moduleName", []);
        var var_nm = call41;
        setLineNumber(61);    // compilenode identifier
        // call case 6: other requests
        var call43 = callmethodChecked(var_currentDialect, "name:=(1)", [1], var_nm);
        setLineNumber(62);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call45 = callmethodChecked(this, "checkExternalModule(1)", [1], var_node);
        setLineNumber(63);    // compilenode string
        var string47 = new GraceString("loading dialect for checkers.");
        // call case 6: other requests
        var call48 = callmethodChecked(var_util, "log(1)verbose(1)", [1, 1], new GraceNum(50), string47);
        setLineNumber(64);    // compilenode block
        var block50 = new GraceBlock(this, 64, 0);
        block50.real = function() {
          setLineNumber(65);    // compilenode member
          // call case 6: other requests
          var call53 = callmethodChecked(var_node, "path", []);
          // call case 6: other requests
          var call54 = callmethodChecked(var_mirrors, "loadDynamicModule(1)", [1], call53);
          var var_dobj = call54;
          setLineNumber(66);    // compilenode identifier
          // call case 6: other requests
          var call56 = callmethodChecked(var_currentDialect, "moduleObject:=(1)", [1], var_dobj);
          setLineNumber(67);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call59 = callmethodChecked(var_mirrors, "reflect(1)", [1], var_dobj);
          var call60 = callmethodChecked(call59, "methods", []);
          var var_mths = call60;
          setLineNumber(68);    // compilenode block
          var block62 = new GraceBlock(this, 68, 1);
          setLineNumber(1);    // compilenode identifier
          block62.real = function(var_m) {
            var if63 = GraceDone;
            setLineNumber(69);    // compilenode string
            var string64 = new GraceString("checker(1)");
            // call case 6: other requests
            var call67 = callmethodChecked(var_m, "name", []);
            var opresult69 = callmethodChecked(call67, "==(1)", [1], string64);
            if (Grace_isTrue(opresult69)) {
              setLineNumber(70);    // compilenode identifier
              // call case 6: other requests
              var call71 = callmethodChecked(var_currentDialect, "hasParseChecker:=(1)", [1], GraceTrue);
              if63 = call71;
            }
            var if72 = GraceDone;
            setLineNumber(72);    // compilenode string
            var string73 = new GraceString("astChecker(1)");
            // call case 6: other requests
            var call76 = callmethodChecked(var_m, "name", []);
            var opresult78 = callmethodChecked(call76, "==(1)", [1], string73);
            if (Grace_isTrue(opresult78)) {
              setLineNumber(73);    // compilenode identifier
              // call case 6: other requests
              var call80 = callmethodChecked(var_currentDialect, "hasAstChecker:=(1)", [1], GraceTrue);
              if72 = call80;
            }
            var if81 = GraceDone;
            setLineNumber(75);    // compilenode string
            var string82 = new GraceString("atModuleEnd(1)");
            // call case 6: other requests
            var call85 = callmethodChecked(var_m, "name", []);
            var opresult87 = callmethodChecked(call85, "==(1)", [1], string82);
            if (Grace_isTrue(opresult87)) {
              setLineNumber(76);    // compilenode identifier
              // call case 6: other requests
              var call89 = callmethodChecked(var_currentDialect, "hasAtEnd:=(1)", [1], GraceTrue);
              if81 = call89;
            }
            var if90 = GraceDone;
            setLineNumber(78);    // compilenode string
            var string91 = new GraceString("atModuleStart(1)");
            // call case 6: other requests
            var call94 = callmethodChecked(var_m, "name", []);
            var opresult96 = callmethodChecked(call94, "==(1)", [1], string91);
            if (Grace_isTrue(opresult96)) {
              setLineNumber(79);    // compilenode identifier
              // call case 6: other requests
              var call98 = callmethodChecked(var_currentDialect, "hasAtStart:=(1)", [1], GraceTrue);
              if90 = call98;
            }
            return if90;
          };
          // call case 5: prelude request
          var call99 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_mths, block62);
          return call99;
        };
        var cases49 = [];
        setLineNumber(82);    // compilenode block
        var block100 = new GraceBlock(this, 82, 1);
        setLineNumber(0);    // compilenode string
        var string103 = new GraceString("e");
        // call case 6: other requests
        // call case 5: prelude request
        var call105 = callmethodChecked(var_prelude, "VariablePattern", []);
        var call106 = callmethodChecked(call105, "new(1)", [1], string103);
        setLineNumber(82);    // compilenode member
        // call case 5: prelude request
        var call108 = callmethodChecked(var_prelude, "RuntimeError", []);
        // call case 6: other requests
        setLineNumber(0);    // compilenode member
        // call case 5: prelude request
        var call110 = callmethodChecked(var_prelude, "AndPattern", []);
        var call111 = callmethodChecked(call110, "new(2)", [2], call106, call108);
        block100.pattern = call111;
        setLineNumber(82);    // compilenode member
        // call case 5: prelude request
        var call113 = callmethodChecked(var_prelude, "RuntimeError", []);
        block100.paramTypes = [call113];
        block100.real = function(var_e) {
          setLineNumber(83);    // compilenode member
          // call case 6: other requests
          var call116 = callmethodChecked(var_node, "line", []);
          // call case 6: other requests
          var call117 = callmethodChecked(var_util, "setPosition(2)", [2], call116, new GraceNum(1));
          setLineNumber(84);    // compilenode member
          // call case 6: other requests
          var call119 = callmethodChecked(var_e, "printBacktrace", []);
          setLineNumber(85);    // compilenode string
          var string121 = new GraceString(".");
          var string124 = new GraceString("' failed to load.\n");
          var string127 = new GraceString("Dialect error: dialect '");
          var opresult129 = callmethodChecked(string127, "++(1)", [1], var_nm);
          var opresult131 = callmethodChecked(opresult129, "++(1)", [1], string124);
          var opresult133 = callmethodChecked(opresult131, "++(1)", [1], var_e);
          var opresult135 = callmethodChecked(opresult133, "++(1)", [1], string121);
          setLineNumber(86);    // compilenode member
          // call case 6: other requests
          var call137 = callmethodChecked(var_node, "line", []);
          // call case 6: other requests
          setLineNumber(85);    // compilenode identifier
          var call138 = callmethodChecked(var_errormessages, "error(1)atLine(1)", [1, 1], opresult135, call137);
          return call138;
        };
        cases49.push(block100);
        setLineNumber(64);    // compiletrycatch
        var catchres49 = tryCatch(block50,cases49,false);
        setModuleName("xmodule");
        setLineNumber(89);    // compilenode identifier
        throw new ReturnException(var_done, returnTarget);
      }
      return if37;
    };
    // call case 6: other requests
    setLineNumber(58);    // compilenode member
    // call case 6: other requests
    var call140 = callmethodChecked(var_moduleObject, "value", []);
    var call141 = callmethodChecked(call140, "do(1)", [1], block36);
    return call141;
  };
  func34.paramCounts = [1];
  this.methods["checkDialect(1)"] = func34;
  func34.definitionLine = 57;
  func34.definitionModule = "xmodule";
  setLineNumber(93);    // compilenode method
  var func142 = function(argcv) {    // method doParseCheck(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_moduleObj = arguments[curarg];
    curarg++;
    setModuleName("xmodule");
    var if143 = GraceDone;
    setLineNumber(94);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call146 = callmethodChecked(var_currentDialect, "hasParseChecker", []);
    var call147 = callmethodChecked(call146, "not", []);
    if (Grace_isTrue(call147)) {
      return var_done;
    }
    setLineNumber(95);    // compilenode string
    var string149 = new GraceString("CheckerFailure");
    // call case 6: other requests
    // call case 5: prelude request
    var call151 = callmethodChecked(var_prelude, "Exception", []);
    var call152 = callmethodChecked(call151, "refine(1)", [1], string149);
    var var_CheckerFailure = call152;
    setLineNumber(96);    // compilenode block
    var block154 = new GraceBlock(this, 96, 0);
    block154.real = function() {
      setLineNumber(97);    // compilenode member
      // call case 6: other requests
      var call157 = callmethodChecked(var_moduleObj, "value", []);
      // call case 6: other requests
      // call case 6: other requests
      var call159 = callmethodChecked(var_currentDialect, "moduleObject", []);
      var call160 = callmethodChecked(call159, "checker(1)", [1], call157);
      return call160;
    };
    var cases153 = [];
    setLineNumber(98);    // compilenode block
    var block161 = new GraceBlock(this, 98, 1);
    setLineNumber(0);    // compilenode string
    var string164 = new GraceString("e");
    // call case 6: other requests
    // call case 5: prelude request
    var call166 = callmethodChecked(var_prelude, "VariablePattern", []);
    var call167 = callmethodChecked(call166, "new(1)", [1], string164);
    setLineNumber(98);    // compilenode identifier
    // call case 6: other requests
    setLineNumber(0);    // compilenode member
    // call case 5: prelude request
    var call169 = callmethodChecked(var_prelude, "AndPattern", []);
    var call170 = callmethodChecked(call169, "new(2)", [2], call167, var_CheckerFailure);
    block161.pattern = call170;
    setLineNumber(98);    // compilenode identifier
    block161.paramTypes = [var_CheckerFailure];
    block161.real = function(var_e) {
      setLineNumber(99);    // compilenode member
      // call case 6: other requests
      var call173 = callmethodChecked(var_e, "data", []);
      var cases171 = [];
      setLineNumber(100);    // compilenode block
      var block174 = new GraceBlock(this, 100, 1);
      setLineNumber(0);    // compilenode string
      var string177 = new GraceString("lp");
      // call case 6: other requests
      // call case 5: prelude request
      var call179 = callmethodChecked(var_prelude, "VariablePattern", []);
      var call180 = callmethodChecked(call179, "new(1)", [1], string177);
      setLineNumber(100);    // compilenode identifier
      // call case 6: other requests
      setLineNumber(0);    // compilenode member
      // call case 5: prelude request
      var call182 = callmethodChecked(var_prelude, "AndPattern", []);
      var call183 = callmethodChecked(call182, "new(2)", [2], call180, var_LinePos);
      block174.pattern = call183;
      setLineNumber(100);    // compilenode identifier
      block174.paramTypes = [var_LinePos];
      block174.real = function(var_lp) {
        setLineNumber(101);    // compilenode string
        var string185 = new GraceString(".");
        // call case 6: other requests
        var call188 = callmethodChecked(var_e, "message", []);
        var string190 = new GraceString(": ");
        // call case 6: other requests
        var call193 = callmethodChecked(var_e, "exception", []);
        var string195 = new GraceString("");
        var opresult197 = callmethodChecked(string195, "++(1)", [1], call193);
        var opresult199 = callmethodChecked(opresult197, "++(1)", [1], string190);
        var opresult201 = callmethodChecked(opresult199, "++(1)", [1], call188);
        var opresult203 = callmethodChecked(opresult201, "++(1)", [1], string185);
        setLineNumber(102);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call206 = callmethodChecked(var_e, "data", []);
        var call207 = callmethodChecked(call206, "line", []);
        // call case 6: other requests
        // call case 6: other requests
        var call210 = callmethodChecked(var_e, "data", []);
        var call211 = callmethodChecked(call210, "linePos", []);
        // call case 6: other requests
        setLineNumber(101);    // compilenode identifier
        var call212 = callmethodChecked(var_errormessages, "error(1)atPosition(2)", [1, 2], opresult203, call207, call211);
        return call212;
      };
      cases171.push(block174);
      setLineNumber(104);    // compilenode block
      var block213 = new GraceBlock(this, 104, 1);
      setLineNumber(0);    // compilenode string
      var string216 = new GraceString("rs");
      // call case 6: other requests
      // call case 5: prelude request
      var call218 = callmethodChecked(var_prelude, "VariablePattern", []);
      var call219 = callmethodChecked(call218, "new(1)", [1], string216);
      setLineNumber(104);    // compilenode identifier
      // call case 6: other requests
      setLineNumber(0);    // compilenode member
      // call case 5: prelude request
      var call221 = callmethodChecked(var_prelude, "AndPattern", []);
      var call222 = callmethodChecked(call221, "new(2)", [2], call219, var_RangeSuggestions);
      block213.pattern = call222;
      setLineNumber(104);    // compilenode identifier
      block213.paramTypes = [var_RangeSuggestions];
      block213.real = function(var_rs) {
        setLineNumber(105);    // compilenode string
        var string224 = new GraceString(".");
        // call case 6: other requests
        var call227 = callmethodChecked(var_e, "message", []);
        var string229 = new GraceString(": ");
        // call case 6: other requests
        var call232 = callmethodChecked(var_e, "exception", []);
        var string234 = new GraceString("");
        var opresult236 = callmethodChecked(string234, "++(1)", [1], call232);
        var opresult238 = callmethodChecked(opresult236, "++(1)", [1], string229);
        var opresult240 = callmethodChecked(opresult238, "++(1)", [1], call227);
        var opresult242 = callmethodChecked(opresult240, "++(1)", [1], string224);
        setLineNumber(106);    // compilenode member
        // call case 6: other requests
        var call244 = callmethodChecked(var_rs, "line", []);
        // call case 6: other requests
        var call246 = callmethodChecked(var_rs, "posStart", []);
        // call case 6: other requests
        var call248 = callmethodChecked(var_rs, "posEnd", []);
        setLineNumber(107);    // compilenode member
        // call case 6: other requests
        var call250 = callmethodChecked(var_rs, "suggestions", []);
        // call case 6: other requests
        setLineNumber(105);    // compilenode identifier
        var call251 = callmethodChecked(var_errormessages, "error(1)atRange(3)withSuggestions(1)", [1, 3, 1], opresult242, call244, call246, call248, call250);
        return call251;
      };
      cases171.push(block213);
      setLineNumber(109);    // compilenode block
      var block252 = new GraceBlock(this, 109, 1);
      setLineNumber(1);    // compilenode identifier
      block252.real = function(var___95____95__2) {
        setLineNumber(110);    // compilenode string
        var string254 = new GraceString(".");
        // call case 6: other requests
        var call257 = callmethodChecked(var_e, "message", []);
        var string259 = new GraceString(": ");
        // call case 6: other requests
        var call262 = callmethodChecked(var_e, "exception", []);
        var string264 = new GraceString("");
        var opresult266 = callmethodChecked(string264, "++(1)", [1], call262);
        var opresult268 = callmethodChecked(opresult266, "++(1)", [1], string259);
        var opresult270 = callmethodChecked(opresult268, "++(1)", [1], call257);
        var opresult272 = callmethodChecked(opresult270, "++(1)", [1], string254);
        setLineNumber(111);    // compilenode member
        // call case 6: other requests
        var call274 = callmethodChecked(var_util, "linenum", []);
        // call case 6: other requests
        setLineNumber(110);    // compilenode identifier
        var call275 = callmethodChecked(var_errormessages, "error(1)atLine(1)", [1, 1], opresult272, call274);
        return call275;
      };
      cases171.push(block252);
      setLineNumber(99);    // compilematchcase
      var matchres171 = matchCase(call173,cases171,false);
      setModuleName("xmodule");
      return matchres171;
    };
    cases153.push(block161);
    setLineNumber(113);    // compilenode block
    var block276 = new GraceBlock(this, 113, 1);
    setLineNumber(0);    // compilenode string
    var string279 = new GraceString("e");
    // call case 6: other requests
    // call case 5: prelude request
    var call281 = callmethodChecked(var_prelude, "VariablePattern", []);
    var call282 = callmethodChecked(call281, "new(1)", [1], string279);
    setLineNumber(113);    // compilenode member
    // call case 5: prelude request
    var call284 = callmethodChecked(var_prelude, "Exception", []);
    // call case 6: other requests
    setLineNumber(0);    // compilenode member
    // call case 5: prelude request
    var call286 = callmethodChecked(var_prelude, "AndPattern", []);
    var call287 = callmethodChecked(call286, "new(2)", [2], call282, call284);
    block276.pattern = call287;
    setLineNumber(113);    // compilenode member
    // call case 5: prelude request
    var call289 = callmethodChecked(var_prelude, "Exception", []);
    block276.paramTypes = [call289];
    block276.real = function(var_e) {
      setLineNumber(114);    // compilenode member
      // call case 6: other requests
      var call291 = callmethodChecked(var_e, "printBacktrace", []);
      setLineNumber(116);    // compilenode string
      var string293 = new GraceString("");
      // call case 6: other requests
      var call296 = callmethodChecked(var_e, "message", []);
      var string298 = new GraceString(": ");
      // call case 6: other requests
      var call301 = callmethodChecked(var_e, "exception", []);
      var string303 = new GraceString("'.\n");
      // call case 6: other requests
      var call306 = callmethodChecked(var_currentDialect, "name", []);
      var string308 = new GraceString("dialect '");
      var opresult310 = callmethodChecked(string308, "++(1)", [1], call306);
      var opresult312 = callmethodChecked(opresult310, "++(1)", [1], string303);
      var opresult314 = callmethodChecked(opresult312, "++(1)", [1], call301);
      var opresult316 = callmethodChecked(opresult314, "++(1)", [1], string298);
      var opresult318 = callmethodChecked(opresult316, "++(1)", [1], call296);
      var opresult320 = callmethodChecked(opresult318, "++(1)", [1], string293);
      setLineNumber(115);    // compilenode string
      var string322 = new GraceString("Unexpected exception raised by parse checker for ");
      var opresult324 = callmethodChecked(string322, "++(1)", [1], opresult320);
      // call case 6: other requests
      var call325 = callmethodChecked(var_errormessages, "error(1)", [1], opresult324);
      return call325;
    };
    cases153.push(block276);
    setLineNumber(96);    // compiletrycatch
    var catchres153 = tryCatch(block154,cases153,false);
    setModuleName("xmodule");
    return catchres153;
  };
  func142.paramCounts = [1];
  this.methods["doParseCheck(1)"] = func142;
  func142.definitionLine = 93;
  func142.definitionModule = "xmodule";
  setLineNumber(120);    // compilenode method
  var func326 = function(argcv) {    // method doAstCheck(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_moduleObj = arguments[curarg];
    curarg++;
    setModuleName("xmodule");
    var if327 = GraceDone;
    setLineNumber(121);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call330 = callmethodChecked(var_currentDialect, "hasAstChecker", []);
    var call331 = callmethodChecked(call330, "not", []);
    if (Grace_isTrue(call331)) {
      return var_done;
    }
    setLineNumber(122);    // compilenode string
    var string333 = new GraceString("CheckerFailure");
    // call case 6: other requests
    // call case 5: prelude request
    var call335 = callmethodChecked(var_prelude, "Exception", []);
    var call336 = callmethodChecked(call335, "refine(1)", [1], string333);
    var var_CheckerFailure = call336;
    setLineNumber(123);    // compilenode block
    var block338 = new GraceBlock(this, 123, 0);
    block338.real = function() {
      setLineNumber(124);    // compilenode identifier
      // call case 6: other requests
      // call case 6: other requests
      var call341 = callmethodChecked(var_currentDialect, "moduleObject", []);
      var call342 = callmethodChecked(call341, "astChecker(1)", [1], var_moduleObj);
      return call342;
    };
    var cases337 = [];
    setLineNumber(125);    // compilenode block
    var block343 = new GraceBlock(this, 125, 1);
    setLineNumber(0);    // compilenode string
    var string346 = new GraceString("e");
    // call case 6: other requests
    // call case 5: prelude request
    var call348 = callmethodChecked(var_prelude, "VariablePattern", []);
    var call349 = callmethodChecked(call348, "new(1)", [1], string346);
    setLineNumber(125);    // compilenode identifier
    // call case 6: other requests
    setLineNumber(0);    // compilenode member
    // call case 5: prelude request
    var call351 = callmethodChecked(var_prelude, "AndPattern", []);
    var call352 = callmethodChecked(call351, "new(2)", [2], call349, var_CheckerFailure);
    block343.pattern = call352;
    setLineNumber(125);    // compilenode identifier
    block343.paramTypes = [var_CheckerFailure];
    block343.real = function(var_e) {
      setLineNumber(126);    // compilenode member
      // call case 6: other requests
      var call355 = callmethodChecked(var_e, "data", []);
      var cases353 = [];
      setLineNumber(127);    // compilenode block
      var block356 = new GraceBlock(this, 127, 1);
      setLineNumber(0);    // compilenode string
      var string359 = new GraceString("lp");
      // call case 6: other requests
      // call case 5: prelude request
      var call361 = callmethodChecked(var_prelude, "VariablePattern", []);
      var call362 = callmethodChecked(call361, "new(1)", [1], string359);
      setLineNumber(127);    // compilenode identifier
      // call case 6: other requests
      setLineNumber(0);    // compilenode member
      // call case 5: prelude request
      var call364 = callmethodChecked(var_prelude, "AndPattern", []);
      var call365 = callmethodChecked(call364, "new(2)", [2], call362, var_LinePos);
      block356.pattern = call365;
      setLineNumber(127);    // compilenode identifier
      block356.paramTypes = [var_LinePos];
      block356.real = function(var_lp) {
        setLineNumber(128);    // compilenode string
        var string367 = new GraceString(".");
        // call case 6: other requests
        var call370 = callmethodChecked(var_e, "message", []);
        var string372 = new GraceString(": ");
        // call case 6: other requests
        var call375 = callmethodChecked(var_e, "exception", []);
        var string377 = new GraceString("");
        var opresult379 = callmethodChecked(string377, "++(1)", [1], call375);
        var opresult381 = callmethodChecked(opresult379, "++(1)", [1], string372);
        var opresult383 = callmethodChecked(opresult381, "++(1)", [1], call370);
        var opresult385 = callmethodChecked(opresult383, "++(1)", [1], string367);
        setLineNumber(129);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call388 = callmethodChecked(var_e, "data", []);
        var call389 = callmethodChecked(call388, "line", []);
        // call case 6: other requests
        // call case 6: other requests
        var call392 = callmethodChecked(var_e, "data", []);
        var call393 = callmethodChecked(call392, "linePos", []);
        // call case 6: other requests
        setLineNumber(128);    // compilenode identifier
        var call394 = callmethodChecked(var_errormessages, "error(1)atPosition(2)", [1, 2], opresult385, call389, call393);
        return call394;
      };
      cases353.push(block356);
      setLineNumber(131);    // compilenode block
      var block395 = new GraceBlock(this, 131, 1);
      setLineNumber(0);    // compilenode string
      var string398 = new GraceString("rs");
      // call case 6: other requests
      // call case 5: prelude request
      var call400 = callmethodChecked(var_prelude, "VariablePattern", []);
      var call401 = callmethodChecked(call400, "new(1)", [1], string398);
      setLineNumber(131);    // compilenode identifier
      // call case 6: other requests
      setLineNumber(0);    // compilenode member
      // call case 5: prelude request
      var call403 = callmethodChecked(var_prelude, "AndPattern", []);
      var call404 = callmethodChecked(call403, "new(2)", [2], call401, var_RangeSuggestions);
      block395.pattern = call404;
      setLineNumber(131);    // compilenode identifier
      block395.paramTypes = [var_RangeSuggestions];
      block395.real = function(var_rs) {
        setLineNumber(132);    // compilenode string
        var string406 = new GraceString(".");
        // call case 6: other requests
        var call409 = callmethodChecked(var_e, "message", []);
        var string411 = new GraceString(": ");
        // call case 6: other requests
        var call414 = callmethodChecked(var_e, "exception", []);
        var string416 = new GraceString("");
        var opresult418 = callmethodChecked(string416, "++(1)", [1], call414);
        var opresult420 = callmethodChecked(opresult418, "++(1)", [1], string411);
        var opresult422 = callmethodChecked(opresult420, "++(1)", [1], call409);
        var opresult424 = callmethodChecked(opresult422, "++(1)", [1], string406);
        setLineNumber(133);    // compilenode member
        // call case 6: other requests
        var call426 = callmethodChecked(var_rs, "line", []);
        // call case 6: other requests
        var call428 = callmethodChecked(var_rs, "posStart", []);
        // call case 6: other requests
        var call430 = callmethodChecked(var_rs, "posEnd", []);
        setLineNumber(134);    // compilenode member
        // call case 6: other requests
        var call432 = callmethodChecked(var_rs, "suggestions", []);
        // call case 6: other requests
        setLineNumber(132);    // compilenode identifier
        var call433 = callmethodChecked(var_errormessages, "error(1)atRange(3)withSuggestions(1)", [1, 3, 1], opresult424, call426, call428, call430, call432);
        return call433;
      };
      cases353.push(block395);
      setLineNumber(136);    // compilenode block
      var block434 = new GraceBlock(this, 136, 1);
      setLineNumber(1);    // compilenode identifier
      block434.real = function(var___95____95__3) {
        return GraceDone;
      };
      cases353.push(block434);
      setLineNumber(126);    // compilematchcase
      var matchres353 = matchCase(call355,cases353,false);
      setModuleName("xmodule");
      setLineNumber(137);    // compilenode string
      var string436 = new GraceString(".");
      // call case 6: other requests
      var call439 = callmethodChecked(var_e, "message", []);
      var string441 = new GraceString(": ");
      // call case 6: other requests
      var call444 = callmethodChecked(var_e, "exception", []);
      var string446 = new GraceString("");
      var opresult448 = callmethodChecked(string446, "++(1)", [1], call444);
      var opresult450 = callmethodChecked(opresult448, "++(1)", [1], string441);
      var opresult452 = callmethodChecked(opresult450, "++(1)", [1], call439);
      var opresult454 = callmethodChecked(opresult452, "++(1)", [1], string436);
      // call case 6: other requests
      var call456 = callmethodChecked(var_util, "linenum", []);
      // call case 6: other requests
      var call457 = callmethodChecked(var_errormessages, "error(1)atPosition(2)", [1, 2], opresult454, call456, new GraceNum(0));
      return call457;
    };
    cases337.push(block343);
    setLineNumber(138);    // compilenode block
    var block458 = new GraceBlock(this, 138, 1);
    setLineNumber(0);    // compilenode string
    var string461 = new GraceString("e");
    // call case 6: other requests
    // call case 5: prelude request
    var call463 = callmethodChecked(var_prelude, "VariablePattern", []);
    var call464 = callmethodChecked(call463, "new(1)", [1], string461);
    setLineNumber(138);    // compilenode member
    // call case 5: prelude request
    var call466 = callmethodChecked(var_prelude, "Exception", []);
    // call case 6: other requests
    setLineNumber(0);    // compilenode member
    // call case 5: prelude request
    var call468 = callmethodChecked(var_prelude, "AndPattern", []);
    var call469 = callmethodChecked(call468, "new(2)", [2], call464, call466);
    block458.pattern = call469;
    setLineNumber(138);    // compilenode member
    // call case 5: prelude request
    var call471 = callmethodChecked(var_prelude, "Exception", []);
    block458.paramTypes = [call471];
    block458.real = function(var_e) {
      setLineNumber(139);    // compilenode member
      // call case 6: other requests
      var call473 = callmethodChecked(var_e, "printBacktrace", []);
      setLineNumber(141);    // compilenode string
      var string475 = new GraceString("");
      // call case 6: other requests
      var call478 = callmethodChecked(var_e, "message", []);
      var string480 = new GraceString(": ");
      // call case 6: other requests
      var call483 = callmethodChecked(var_e, "exception", []);
      var string485 = new GraceString("'.\n");
      // call case 6: other requests
      var call488 = callmethodChecked(var_currentDialect, "name", []);
      var string490 = new GraceString("dialect '");
      var opresult492 = callmethodChecked(string490, "++(1)", [1], call488);
      var opresult494 = callmethodChecked(opresult492, "++(1)", [1], string485);
      var opresult496 = callmethodChecked(opresult494, "++(1)", [1], call483);
      var opresult498 = callmethodChecked(opresult496, "++(1)", [1], string480);
      var opresult500 = callmethodChecked(opresult498, "++(1)", [1], call478);
      var opresult502 = callmethodChecked(opresult500, "++(1)", [1], string475);
      setLineNumber(140);    // compilenode string
      var string504 = new GraceString("Unexpected exception raised by AST checker for ");
      var opresult506 = callmethodChecked(string504, "++(1)", [1], opresult502);
      // call case 6: other requests
      var call507 = callmethodChecked(var_errormessages, "error(1)", [1], opresult506);
      return call507;
    };
    cases337.push(block458);
    setLineNumber(123);    // compiletrycatch
    var catchres337 = tryCatch(block338,cases337,false);
    setModuleName("xmodule");
    return catchres337;
  };
  func326.paramCounts = [1];
  this.methods["doAstCheck(1)"] = func326;
  func326.definitionLine = 120;
  func326.definitionModule = "xmodule";
  setLineNumber(145);    // compilenode method
  var func508 = function(argcv) {    // method checkExternalModule(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_node = arguments[curarg];
    curarg++;
    setModuleName("xmodule");
    setLineNumber(146);    // compilenode member
    // call case 6: other requests
    var call511 = callmethodChecked(var_node, "moduleName", []);
    // call case 6: other requests
    var call513 = callmethodChecked(var_node, "path", []);
    setLineNumber(147);    // compilenode member
    // call case 6: other requests
    var call515 = callmethodChecked(var_node, "line", []);
    // call case 6: other requests
    var call517 = callmethodChecked(var_node, "linePos", []);
    // call case 6: other requests
    var call519 = callmethodChecked(var_node, "isDialect", []);
    // call case 4: self request
    onSelf = true;
    var call520 = callmethodChecked(this, "checkimport(5)", [5], call511, call513, call515, call517, call519);
    return call520;
  };
  func508.paramCounts = [1];
  this.methods["checkExternalModule(1)"] = func508;
  func508.definitionLine = 145;
  func508.definitionModule = "xmodule";
  setLineNumber(150);    // compilenode method
  var func521 = function(argcv) {    // method checkimport(_,_,_,_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_nm = arguments[curarg];
    curarg++;
    var var_pathname = arguments[curarg];
    curarg++;
    var var_line = arguments[curarg];
    curarg++;
    var var_linePos = arguments[curarg];
    curarg++;
    var var_isDialect = arguments[curarg];
    curarg++;
    setModuleName("xmodule");
    var if522 = GraceDone;
    setLineNumber(151);    // compilenode identifier
    // call case 6: other requests
    // call case 4: self request
    onSelf = true;
    var call525 = callmethodChecked(this, "builtInModules", []);
    var call526 = callmethodChecked(call525, "contains(1)", [1], var_nm);
    if (Grace_isTrue(call526)) {
      setLineNumber(152);    // compilenode identifier
      // call case 6: other requests
      // call case 6: other requests
      var call529 = callmethodChecked(var_imports, "other", []);
      var call530 = callmethodChecked(call529, "add(1)", [1], var_nm);
      setLineNumber(154);    // compilenode identifier
      return var_done;
    }
    var if531 = GraceDone;
    setLineNumber(155);    // compilenode identifier
    // call case 6: other requests
    var call533 = callmethodChecked(var_imports, "isAlready(1)", [1], var_nm);
    if (Grace_isTrue(call533)) {
      setLineNumber(157);    // compilenode identifier
      return var_done;
    }
    setLineNumber(158);    // compilenode identifier
    var var_noSource = GraceFalse;
    var if534 = GraceDone;
    setLineNumber(161);    // compilenode member
    // call case 5: prelude request
    var call536 = callmethodChecked(var_prelude, "inBrowser", []);
    if (Grace_isTrue(call536)) {
      setLineNumber(162);    // compilenode string
      var string538 = new GraceString(".js");
      var opresult541 = callmethodChecked(var_nm, "++(1)", [1], string538);
      var string542 = new GraceString("");
      var block543 = new GraceBlock(this, 162, 1);
      setLineNumber(1);    // compilenode identifier
      block543.real = function(var___95____95__4) {
        setLineNumber(163);    // compilenode string
        var string545 = new GraceString(" before importing it.");
        var string548 = new GraceString("Please compile module ");
        var opresult550 = callmethodChecked(string548, "++(1)", [1], var_nm);
        var opresult552 = callmethodChecked(opresult550, "++(1)", [1], string545);
        setLineNumber(164);    // compilenode member
        // call case 6: other requests
        var call555 = callmethodChecked(var_nm, "size", []);
        var opresult558 = callmethodChecked(var_linePos, "+(1)", [1], call555);
        var diff560 = callmethodChecked(opresult558, "-(1)", [1], new GraceNum(1));
        // call case 6: other requests
        setLineNumber(163);    // compilenode identifier
        var call561 = callmethodChecked(var_errormessages, "error(1)atRange(3)", [1, 3], opresult552, var_line, var_linePos, diff560);
        return call561;
      };
      // call case 6: other requests
      setLineNumber(162);    // compilenode identifier
      var call562 = callmethodChecked(var_util, "file(1)onPath(1)otherwise(1)", [1, 1, 1], opresult541, string542, block543);
      setLineNumber(167);    // compilenode identifier
      return var_done;
    }
    setLineNumber(168);    // compilenode string
    var string564 = new GraceString("GRACE_MODULE_PATH");
    // call case 6: other requests
    // call case 6: other requests
    var call566 = callmethodChecked(var_sys, "environ", []);
    var call567 = callmethodChecked(call566, "at(1)", [1], string564);
    var var_gmp = call567;
    setLineNumber(169);    // compilenode string
    var string569 = new GraceString("grace");
    // call case 6: other requests
    // call case 6: other requests
    var call571 = callmethodChecked(var_filePath, "fromString(1)", [1], var_pathname);
    var call572 = callmethodChecked(call571, "setExtension(1)", [1], string569);
    var var_pn = call572;
    setLineNumber(170);    // compilenode member
    // call case 6: other requests
    var call575 = callmethodChecked(var_util, "sourceDir", []);
    setLineNumber(171);    // compilenode block
    var block576 = new GraceBlock(this, 171, 1);
    setLineNumber(1);    // compilenode identifier
    block576.real = function(var_l) {
      setLineNumber(172);    // compilenode identifier
      var_noSource = GraceTrue;
      setLineNumber(173);    // compilenode identifier
      return var_pn;
    };
    // call case 6: other requests
    setLineNumber(170);    // compilenode identifier
    var call577 = callmethodChecked(var_util, "file(1)on(1)orPath(1)otherwise(1)", [1, 1, 1, 1], var_pn, call575, var_gmp, block576);
    var var_moduleFileGrace = call577;
    setLineNumber(175);    // compilenode string
    var string579 = new GraceString(".gct");
    // call case 6: other requests
    // call case 6: other requests
    var call581 = callmethodChecked(var_moduleFileGrace, "copy", []);
    var call582 = callmethodChecked(call581, "setExtension(1)", [1], string579);
    var var_moduleFileGct = call582;
    var if583 = GraceDone;
    setLineNumber(176);    // compilenode member
    // call case 6: other requests
    var call585 = callmethodChecked(var_util, "outDir", []);
    // call case 6: other requests
    var call588 = callmethodChecked(var_util, "sourceDir", []);
    var opresult590 = callmethodChecked(call588, "\u2260(1)", [1], call585);
    if (Grace_isTrue(opresult590)) {
      setLineNumber(177);    // compilenode member
      // call case 6: other requests
      var call593 = callmethodChecked(var_util, "outDir", []);
      // call case 6: other requests
      var call594 = callmethodChecked(var_moduleFileGct, "setDirectory(1)", [1], call593);
      if583 = call594;
    }
    var if595 = GraceDone;
    setLineNumber(179);    // compilenode string
    var string596 = new GraceString("c");
    // call case 6: other requests
    var call599 = callmethodChecked(var_util, "target", []);
    var opresult601 = callmethodChecked(call599, "==(1)", [1], string596);
    if (Grace_isTrue(opresult601)) {
      setLineNumber(180);    // compilenode string
      var string603 = new GraceString(".gso");
      // call case 6: other requests
      // call case 6: other requests
      var call605 = callmethodChecked(var_moduleFileGct, "copy", []);
      var call606 = callmethodChecked(call605, "setExtension(1)", [1], string603);
      var var_moduleFileGso = call606;
      setLineNumber(181);    // compilenode string
      var string608 = new GraceString(".gcn");
      // call case 6: other requests
      // call case 6: other requests
      var call610 = callmethodChecked(var_moduleFileGct, "copy", []);
      var call611 = callmethodChecked(call610, "setExtension(1)", [1], string608);
      var var_moduleFileGcn = call611;
      setLineNumber(183);    // compilenode block
      var block612 = new GraceBlock(this, 183, 0);
      block612.real = function() {
        // call case 6: other requests
        var call614 = callmethodChecked(var_dynamicCModules, "contains(1)", [1], var_nm);
        return call614;
      };
      // call case 6: other requests
      var call617 = callmethodChecked(var_util, "dynamicModule", []);
      setLineNumber(182);    // compilenode member
      // call case 6: other requests
      var call620 = callmethodChecked(var_util, "importDynamic", []);
      var opresult623 = callmethodChecked(var_isDialect, "||(1)", [1], call620);
      var opresult625 = callmethodChecked(opresult623, "||(1)", [1], call617);
      var opresult627 = callmethodChecked(opresult625, "||(1)", [1], block612);
      var var_needsDynamic = opresult627;
      setLineNumber(184);    // compilenode string
      var string629 = new GraceString(".");
      var string632 = new GraceString(" is ");
      var string635 = new GraceString("needsDynamic for ");
      var opresult637 = callmethodChecked(string635, "++(1)", [1], var_nm);
      var opresult639 = callmethodChecked(opresult637, "++(1)", [1], string632);
      var opresult641 = callmethodChecked(opresult639, "++(1)", [1], var_needsDynamic);
      var opresult643 = callmethodChecked(opresult641, "++(1)", [1], string629);
      // call case 6: other requests
      var call644 = callmethodChecked(var_util, "log(1)verbose(1)", [1, 1], new GraceNum(100), opresult643);
      setLineNumber(185);    // compilenode vardec
      var var_binaryFile;
      setLineNumber(186);    // compilenode vardec
      var var_importsSet;
      var if645 = GraceDone;
      setLineNumber(187);    // compilenode identifier
      if (Grace_isTrue(var_needsDynamic)) {
        setLineNumber(188);    // compilenode identifier
        // call case 6: other requests
        var call647 = callmethodChecked(var_dynamicCModules, "add(1)", [1], var_nm);
        setLineNumber(189);    // compilenode identifier
        var_binaryFile = var_moduleFileGso;
        setLineNumber(190);    // compilenode member
        // call case 6: other requests
        var call649 = callmethodChecked(var_imports, "other", []);
        var_importsSet = call649;
        if645 = GraceDone;
      } else {
        setLineNumber(192);    // compilenode identifier
        var_binaryFile = var_moduleFileGcn;
        setLineNumber(193);    // compilenode member
        // call case 6: other requests
        var call651 = callmethodChecked(var_imports, "static", []);
        var_importsSet = call651;
        if645 = GraceDone;
      }
      var if652 = GraceDone;
      setLineNumber(195);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call655 = callmethodChecked(var_binaryFile, "exists", []);
      var call656 = callmethodChecked(call655, "not", []);
      var opresult659 = callmethodChecked(var_noSource, "&&(1)", [1], call656);
      if (Grace_isTrue(opresult659)) {
        setLineNumber(196);    // compilenode block
        var block661 = new GraceBlock(this, 196, 1);
        setLineNumber(1);    // compilenode identifier
        block661.real = function(var_l) {
          setLineNumber(198);    // compilenode string
          var string663 = new GraceString(".");
          var string666 = new GraceString("; looked in ");
          // call case 6: other requests
          var call669 = callmethodChecked(var_binaryFile, "shortName", []);
          var string671 = new GraceString(" or ");
          // call case 6: other requests
          var call674 = callmethodChecked(var_pn, "shortName", []);
          var string676 = new GraceString("I can't find ");
          var opresult678 = callmethodChecked(string676, "++(1)", [1], call674);
          var opresult680 = callmethodChecked(opresult678, "++(1)", [1], string671);
          var opresult682 = callmethodChecked(opresult680, "++(1)", [1], call669);
          var opresult684 = callmethodChecked(opresult682, "++(1)", [1], string666);
          var opresult686 = callmethodChecked(opresult684, "++(1)", [1], var_l);
          var opresult688 = callmethodChecked(opresult686, "++(1)", [1], string663);
          setLineNumber(199);    // compilenode identifier
          // call case 6: other requests
          setLineNumber(197);    // compilenode identifier
          var call689 = callmethodChecked(var_errormessages, "error(1)atLine(1)", [1, 1], opresult688, var_line);
          return call689;
        };
        // call case 6: other requests
        setLineNumber(196);    // compilenode identifier
        var call690 = callmethodChecked(var_util, "file(1)onPath(1)otherwise(1)", [1, 1, 1], var_binaryFile, var_gmp, block661);
        var_binaryFile = call690;
        setLineNumber(201);    // compilenode member
        // call case 6: other requests
        var call693 = callmethodChecked(var_binaryFile, "directory", []);
        // call case 6: other requests
        var call694 = callmethodChecked(var_moduleFileGct, "setDirectory(1)", [1], call693);
        var if695 = GraceDone;
        setLineNumber(202);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call698 = callmethodChecked(var_moduleFileGct, "exists", []);
        var call699 = callmethodChecked(call698, "not", []);
        if (Grace_isTrue(call699)) {
          setLineNumber(204);    // compilenode string
          var string701 = new GraceString(" nor source.");
          var string704 = new GraceString("");
          var opresult706 = callmethodChecked(string704, "++(1)", [1], var_moduleFileGct);
          var opresult708 = callmethodChecked(opresult706, "++(1)", [1], string701);
          setLineNumber(203);    // compilenode string
          var string710 = new GraceString(", but neither ");
          var string713 = new GraceString("I found ");
          var opresult715 = callmethodChecked(string713, "++(1)", [1], var_binaryFile);
          var opresult717 = callmethodChecked(opresult715, "++(1)", [1], string710);
          var opresult719 = callmethodChecked(opresult717, "++(1)", [1], opresult708);
          setLineNumber(205);    // compilenode identifier
          // call case 6: other requests
          setLineNumber(203);    // compilenode identifier
          var call720 = callmethodChecked(var_errormessages, "error(1)atLine(1)", [1, 1], opresult719, var_line);
          if695 = call720;
        }
        if652 = if695;
      }
      var if721 = GraceDone;
      setLineNumber(208);    // compilenode member
      // call case 6: other requests
      var call723 = callmethodChecked(var_needsDynamic, "not", []);
      if (Grace_isTrue(call723)) {
        setLineNumber(209);    // compilenode member
        // call case 6: other requests
        var call726 = callmethodChecked(var_binaryFile, "asString", []);
        // call case 6: other requests
        // call case 6: other requests
        var call728 = callmethodChecked(var_imports, "linkfiles", []);
        var call729 = callmethodChecked(call728, "add(1)", [1], call726);
        if721 = call729;
      }
      setLineNumber(211);    // compilenode string
      var string731 = new GraceString(".");
      // call case 6: other requests
      var call734 = callmethodChecked(var_imports, "linkfiles", []);
      var string736 = new GraceString("linkfiles is ");
      var opresult738 = callmethodChecked(string736, "++(1)", [1], call734);
      var opresult740 = callmethodChecked(opresult738, "++(1)", [1], string731);
      // call case 6: other requests
      var call741 = callmethodChecked(var_util, "log(1)verbose(1)", [1, 1], new GraceNum(100), opresult740);
      var if742 = GraceDone;
      setLineNumber(213);    // compilenode block
      var block743 = new GraceBlock(this, 213, 0);
      block743.real = function() {
        setLineNumber(214);    // compilenode block
        var block744 = new GraceBlock(this, 214, 0);
        block744.real = function() {
          // call case 6: other requests
          var call746 = callmethodChecked(var_binaryFile, "newer(1)", [1], var_moduleFileGrace);
          return call746;
        };
        var opresult749 = callmethodChecked(var_noSource, "||(1)", [1], block744);
        return opresult749;
      };
      setLineNumber(212);    // compilenode block
      var block751 = new GraceBlock(this, 212, 0);
      block751.real = function() {
        setLineNumber(213);    // compilenode member
        // call case 6: other requests
        var call753 = callmethodChecked(var_moduleFileGct, "exists", []);
        return call753;
      };
      setLineNumber(212);    // compilenode member
      // call case 6: other requests
      var call756 = callmethodChecked(var_binaryFile, "exists", []);
      var opresult758 = callmethodChecked(call756, "&&(1)", [1], block751);
      var opresult760 = callmethodChecked(opresult758, "&&(1)", [1], block743);
      if (Grace_isTrue(opresult760)) {
      } else {
        var if761 = GraceDone;
        setLineNumber(218);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call764 = callmethodChecked(var_binaryFile, "exists", []);
        var call765 = callmethodChecked(call764, "not", []);
        if (Grace_isTrue(call765)) {
          setLineNumber(219);    // compilenode string
          var string767 = new GraceString(" does not exist");
          var string770 = new GraceString("");
          var opresult772 = callmethodChecked(string770, "++(1)", [1], var_binaryFile);
          var opresult774 = callmethodChecked(opresult772, "++(1)", [1], string767);
          // call case 6: other requests
          var call775 = callmethodChecked(var_util, "log(1)verbose(1)", [1, 1], new GraceNum(60), opresult774);
          if761 = call775;
        } else {
          var if776 = GraceDone;
          setLineNumber(220);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call779 = callmethodChecked(var_binaryFile, "newer(1)", [1], var_moduleFileGrace);
          var call780 = callmethodChecked(call779, "not", []);
          if (Grace_isTrue(call780)) {
            setLineNumber(221);    // compilenode string
            var string782 = new GraceString("");
            var string785 = new GraceString(" not newer than ");
            var string788 = new GraceString("");
            var opresult790 = callmethodChecked(string788, "++(1)", [1], var_binaryFile);
            var opresult792 = callmethodChecked(opresult790, "++(1)", [1], string785);
            var opresult794 = callmethodChecked(opresult792, "++(1)", [1], var_moduleFileGrace);
            var opresult796 = callmethodChecked(opresult794, "++(1)", [1], string782);
            // call case 6: other requests
            var call797 = callmethodChecked(var_util, "log(1)verbose(1)", [1, 1], new GraceNum(60), opresult796);
            if776 = call797;
          }
          if761 = if776;
        }
        setLineNumber(223);    // compilenode member
        // call case 6: other requests
        var call800 = callmethodChecked(var_moduleFileGrace, "asString", []);
        setLineNumber(224);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call801 = callmethodChecked(this, "compileModule(1)inFile(1)forDialect(1)atRange(2)", [1, 1, 1, 2], var_nm, call800, var_isDialect, var_line, var_linePos);
        if742 = call801;
      }
      setLineNumber(226);    // compilenode identifier
      // call case 6: other requests
      var call803 = callmethodChecked(var_importsSet, "add(1)", [1], var_nm);
      if595 = call803;
    } else {
      var if804 = GraceDone;
      setLineNumber(227);    // compilenode string
      var string805 = new GraceString("js");
      // call case 6: other requests
      var call808 = callmethodChecked(var_util, "target", []);
      var opresult810 = callmethodChecked(call808, "==(1)", [1], string805);
      if (Grace_isTrue(opresult810)) {
        setLineNumber(228);    // compilenode string
        var string812 = new GraceString(".js");
        // call case 6: other requests
        // call case 6: other requests
        var call814 = callmethodChecked(var_moduleFileGct, "copy", []);
        var call815 = callmethodChecked(call814, "setExtension(1)", [1], string812);
        var var_moduleFileJs = call815;
        var if816 = GraceDone;
        setLineNumber(230);    // compilenode block
        var block817 = new GraceBlock(this, 230, 0);
        block817.real = function() {
          setLineNumber(231);    // compilenode block
          var block818 = new GraceBlock(this, 231, 0);
          block818.real = function() {
            setLineNumber(232);    // compilenode identifier
            // call case 6: other requests
            var call820 = callmethodChecked(var_moduleFileJs, "newer(1)", [1], var_moduleFileGrace);
            return call820;
          };
          setLineNumber(231);    // compilenode identifier
          var opresult823 = callmethodChecked(var_noSource, "||(1)", [1], block818);
          return opresult823;
        };
        setLineNumber(229);    // compilenode block
        var block825 = new GraceBlock(this, 229, 0);
        block825.real = function() {
          setLineNumber(230);    // compilenode member
          // call case 6: other requests
          var call827 = callmethodChecked(var_moduleFileGct, "exists", []);
          return call827;
        };
        setLineNumber(229);    // compilenode member
        // call case 6: other requests
        var call830 = callmethodChecked(var_moduleFileJs, "exists", []);
        var opresult832 = callmethodChecked(call830, "&&(1)", [1], block825);
        var opresult834 = callmethodChecked(opresult832, "&&(1)", [1], block817);
        if (Grace_isTrue(opresult834)) {
        } else {
          var if835 = GraceDone;
          setLineNumber(237);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call838 = callmethodChecked(var_moduleFileJs, "newer(1)", [1], var_moduleFileGrace);
          var call839 = callmethodChecked(call838, "not", []);
          if (Grace_isTrue(call839)) {
            setLineNumber(238);    // compilenode string
            var string841 = new GraceString("");
            var string844 = new GraceString(" not newer than ");
            var string847 = new GraceString("");
            var opresult849 = callmethodChecked(string847, "++(1)", [1], var_moduleFileJs);
            var opresult851 = callmethodChecked(opresult849, "++(1)", [1], string844);
            var opresult853 = callmethodChecked(opresult851, "++(1)", [1], var_moduleFileGrace);
            var opresult855 = callmethodChecked(opresult853, "++(1)", [1], string841);
            // call case 6: other requests
            var call856 = callmethodChecked(var_util, "log(1)verbose(1)", [1, 1], new GraceNum(60), opresult855);
            if835 = call856;
          }
          var if857 = GraceDone;
          setLineNumber(240);    // compilenode member
          // call case 6: other requests
          var call859 = callmethodChecked(var_moduleFileGrace, "exists", []);
          if (Grace_isTrue(call859)) {
            setLineNumber(241);    // compilenode member
            // call case 6: other requests
            var call862 = callmethodChecked(var_moduleFileGrace, "asString", []);
            setLineNumber(242);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call863 = callmethodChecked(this, "compileModule(1)inFile(1)forDialect(1)atRange(2)", [1, 1, 1, 2], var_nm, call862, var_isDialect, var_line, var_linePos);
            if857 = call863;
          } else {
            var if864 = GraceDone;
            setLineNumber(244);    // compilenode identifier
            if (Grace_isTrue(var_isDialect)) {
              var string865 = new GraceString("dialect");
              if864 = string865;
            } else {
              var string866 = new GraceString("module");
              if864 = string866;
            }
            var var_thing = if864;
            setLineNumber(245);    // compilenode string
            var string868 = new GraceString("");
            var string871 = new GraceString(" ");
            var string874 = new GraceString("Can't find ");
            var opresult876 = callmethodChecked(string874, "++(1)", [1], var_thing);
            var opresult878 = callmethodChecked(opresult876, "++(1)", [1], string871);
            var opresult880 = callmethodChecked(opresult878, "++(1)", [1], var_nm);
            var opresult882 = callmethodChecked(opresult880, "++(1)", [1], string868);
            setLineNumber(246);    // compilenode identifier
            // call case 6: other requests
            setLineNumber(245);    // compilenode identifier
            var call883 = callmethodChecked(var_errormessages, "error(1)atLine(1)", [1, 1], opresult882, var_line);
            if857 = call883;
          }
          if816 = if857;
        }
        setLineNumber(249);    // compilenode identifier
        // call case 6: other requests
        // call case 6: other requests
        var call886 = callmethodChecked(var_imports, "other", []);
        var call887 = callmethodChecked(call886, "add(1)", [1], var_nm);
        if804 = call887;
      }
      if595 = if804;
    }
    setLineNumber(251);    // compilenode member
    // call case 6: other requests
    var call890 = callmethodChecked(var_moduleFileGct, "directory", []);
    // call case 4: self request
    onSelf = true;
    var call891 = callmethodChecked(this, "addTransitiveImports(5)", [5], call890, var_isDialect, var_nm, var_line, var_linePos);
    return call891;
  };
  func521.confidential = true;
  func521.paramCounts = [5];
  this.methods["checkimport(5)"] = func521;
  func521.definitionLine = 150;
  func521.definitionModule = "xmodule";
  setLineNumber(254);    // compilenode method
  var func892 = function(argcv) {    // method addTransitiveImports(_,_,_,_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_directory = arguments[curarg];
    curarg++;
    var var_isDialect = arguments[curarg];
    curarg++;
    var var_moduleName = arguments[curarg];
    curarg++;
    var var_line = arguments[curarg];
    curarg++;
    var var_linePos = arguments[curarg];
    curarg++;
    setModuleName("xmodule");
    setLineNumber(255);    // compilenode block
    var block894 = new GraceBlock(this, 255, 0);
    block894.real = function() {
      setLineNumber(256);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call896 = callmethodChecked(this, "parseGCT(1)sourceDir(1)", [1, 1], var_moduleName, var_directory);
      return call896;
    };
    // call case 6: other requests
    setLineNumber(255);    // compilenode identifier
    var call897 = callmethodChecked(var_gctCache, "at(1)ifAbsent(1)", [1, 1], var_moduleName, block894);
    var var_gctData = call897;
    var if898 = GraceDone;
    setLineNumber(258);    // compilenode string
    var string900 = new GraceString("dialect");
    // call case 6: other requests
    var call901 = callmethodChecked(var_gctData, "containsKey(1)", [1], string900);
    if (Grace_isTrue(call901)) {
      setLineNumber(259);    // compilenode member
      // call case 6: other requests
      var string904 = new GraceString("dialect");
      // call case 6: other requests
      var call905 = callmethodChecked(var_gctData, "at(1)", [1], string904);
      var call906 = callmethodChecked(call905, "first", []);
      var var_dName = call906;
      setLineNumber(260);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call908 = callmethodChecked(this, "checkimport(5)", [5], var_dName, var_dName, var_line, var_linePos, GraceTrue);
      if898 = call908;
    }
    setLineNumber(262);    // compilenode string
    var string910 = new GraceString("modules");
    var block911 = new GraceBlock(this, 262, 0);
    block911.real = function() {
      // call case 5: prelude request
      var call913 = callmethodChecked(var_prelude, "emptySequence", []);
      return call913;
    };
    // call case 6: other requests
    var call914 = callmethodChecked(var_gctData, "at(1)ifAbsent(1)", [1, 1], string910, block911);
    var var_importedModules = call914;
    setLineNumber(263);    // compilenode member
    // call case 6: other requests
    var call916 = callmethodChecked(var_util, "modname", []);
    var var_m = call916;
    var if917 = GraceDone;
    setLineNumber(264);    // compilenode identifier
    // call case 6: other requests
    var call919 = callmethodChecked(var_importedModules, "contains(1)", [1], var_m);
    if (Grace_isTrue(call919)) {
      setLineNumber(266);    // compilenode string
      var string921 = new GraceString("' (and so on).");
      var string924 = new GraceString("', which is imported by '");
      var string927 = new GraceString("by '");
      var opresult929 = callmethodChecked(string927, "++(1)", [1], var_moduleName);
      var opresult931 = callmethodChecked(opresult929, "++(1)", [1], string924);
      var opresult933 = callmethodChecked(opresult931, "++(1)", [1], var_m);
      var opresult935 = callmethodChecked(opresult933, "++(1)", [1], string921);
      setLineNumber(265);    // compilenode string
      var string937 = new GraceString("' is imported ");
      var string940 = new GraceString("Cyclic import detected: '");
      var opresult942 = callmethodChecked(string940, "++(1)", [1], var_m);
      var opresult944 = callmethodChecked(opresult942, "++(1)", [1], string937);
      var opresult946 = callmethodChecked(opresult944, "++(1)", [1], opresult935);
      setLineNumber(267);    // compilenode identifier
      // call case 6: other requests
      setLineNumber(265);    // compilenode identifier
      var call947 = callmethodChecked(var_errormessages, "error(1)atLine(1)", [1, 1], opresult946, var_line);
      if917 = call947;
    }
    setLineNumber(269);    // compilenode block
    var block949 = new GraceBlock(this, 269, 1);
    setLineNumber(1);    // compilenode identifier
    block949.real = function(var_each) {
      setLineNumber(270);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call951 = callmethodChecked(this, "checkimport(5)", [5], var_each, var_each, var_line, var_linePos, var_isDialect);
      return call951;
    };
    // call case 6: other requests
    setLineNumber(269);    // compilenode identifier
    var call952 = callmethodChecked(var_importedModules, "do(1)", [1], block949);
    return call952;
  };
  func892.confidential = true;
  func892.paramCounts = [5];
  this.methods["addTransitiveImports(5)"] = func892;
  func892.definitionLine = 254;
  func892.definitionModule = "xmodule";
  setLineNumber(274);    // compilenode method
  var func953 = function(argcv) {    // method compileModule(_)inFile(_)forDialect(_)atRange(_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_nm = arguments[curarg];
    curarg++;
    var var_sourceFile = arguments[curarg];
    curarg++;
    var var_isDialect = arguments[curarg];
    curarg++;
    var var_line = arguments[curarg];
    curarg++;
    var var_linePos = arguments[curarg];
    curarg++;
    setModuleName("xmodule");
    var if954 = GraceDone;
    setLineNumber(276);    // compilenode block
    var block955 = new GraceBlock(this, 276, 0);
    block955.real = function() {
      // call case 6: other requests
      // call case 6: other requests
      var call958 = callmethodChecked(var_util, "recurse", []);
      var call959 = callmethodChecked(call958, "not", []);
      return call959;
    };
    // call case 5: prelude request
    var call962 = callmethodChecked(var_prelude, "inBrowser", []);
    var opresult964 = callmethodChecked(call962, "||(1)", [1], block955);
    if (Grace_isTrue(opresult964)) {
      setLineNumber(277);    // compilenode string
      var string966 = new GraceString(" before importing it.");
      var string969 = new GraceString("Please compile module ");
      var opresult971 = callmethodChecked(string969, "++(1)", [1], var_nm);
      var opresult973 = callmethodChecked(opresult971, "++(1)", [1], string966);
      setLineNumber(278);    // compilenode identifier
      // call case 6: other requests
      setLineNumber(277);    // compilenode identifier
      var call974 = callmethodChecked(var_errormessages, "error(1)atLine(1)", [1, 1], opresult973, var_line);
      if954 = call974;
    }
    setLineNumber(280);    // compilenode identifier
    var var_slashed = GraceFalse;
    setLineNumber(281);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call978 = callmethodChecked(var_sys, "argv", []);
    var call979 = callmethodChecked(call978, "first", []);
    var block980 = new GraceBlock(this, 281, 1);
    setLineNumber(1);    // compilenode identifier
    block980.real = function(var_letter) {
      var if981 = GraceDone;
      setLineNumber(282);    // compilenode string
      var string982 = new GraceString("/");
      var opresult985 = callmethodChecked(var_letter, "==(1)", [1], string982);
      if (Grace_isTrue(opresult985)) {
        setLineNumber(283);    // compilenode identifier
        var_slashed = GraceTrue;
        if981 = GraceDone;
      }
      return if981;
    };
    // call case 5: prelude request
    var call986 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call979, block980);
    setLineNumber(286);    // compilenode vardec
    var var_cmd;
    var if987 = GraceDone;
    setLineNumber(287);    // compilenode identifier
    if (Grace_isTrue(var_slashed)) {
      setLineNumber(288);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call991 = callmethodChecked(var_sys, "argv", []);
      var call992 = callmethodChecked(call991, "first", []);
      // call case 6: other requests
      var call993 = callmethodChecked(var_io, "realpath(1)", [1], call992);
      var_cmd = call993;
      if987 = GraceDone;
    } else {
      setLineNumber(290);    // compilenode string
      var string995 = new GraceString("");
      // call case 6: other requests
      // call case 6: other requests
      var call999 = callmethodChecked(var_sys, "argv", []);
      var call1000 = callmethodChecked(call999, "first", []);
      var string1002 = new GraceString("/");
      // call case 6: other requests
      var call1005 = callmethodChecked(var_sys, "execPath", []);
      var string1007 = new GraceString("");
      var opresult1009 = callmethodChecked(string1007, "++(1)", [1], call1005);
      var opresult1011 = callmethodChecked(opresult1009, "++(1)", [1], string1002);
      var opresult1013 = callmethodChecked(opresult1011, "++(1)", [1], call1000);
      var opresult1015 = callmethodChecked(opresult1013, "++(1)", [1], string995);
      // call case 6: other requests
      var call1016 = callmethodChecked(var_io, "realpath(1)", [1], opresult1015);
      var_cmd = call1016;
      if987 = GraceDone;
    }
    setLineNumber(292);    // compilenode member
    // call case 6: other requests
    var call1018 = callmethodChecked(var_cmd, "size", []);
    var var_cmdSz = call1018;
    var if1019 = GraceDone;
    setLineNumber(293);    // compilenode string
    var string1020 = new GraceString(".js");
    var diff1025 = callmethodChecked(var_cmdSz, "-(1)", [1], new GraceNum(2));
    // call case 6: other requests
    var call1026 = callmethodChecked(var_cmd, "substringFrom(1)to(1)", [1, 1], diff1025, var_cmdSz);
    var opresult1028 = callmethodChecked(call1026, "==(1)", [1], string1020);
    if (Grace_isTrue(opresult1028)) {
      setLineNumber(294);    // compilenode string
      var string1029 = new GraceString("\"");
      var string1032 = new GraceString("grace \"");
      var opresult1034 = callmethodChecked(string1032, "++(1)", [1], var_cmd);
      var opresult1036 = callmethodChecked(opresult1034, "++(1)", [1], string1029);
      var_cmd = opresult1036;
      if1019 = GraceDone;
    } else {
      setLineNumber(296);    // compilenode string
      var string1037 = new GraceString("\"");
      var string1040 = new GraceString("\"");
      var opresult1042 = callmethodChecked(string1040, "++(1)", [1], var_cmd);
      var opresult1044 = callmethodChecked(opresult1042, "++(1)", [1], string1037);
      var_cmd = opresult1044;
      if1019 = GraceDone;
    }
    var if1045 = GraceDone;
    setLineNumber(298);    // compilenode member
    // call case 6: other requests
    var call1047 = callmethodChecked(var_util, "defaultVerbosity", []);
    // call case 6: other requests
    var call1050 = callmethodChecked(var_util, "verbosity", []);
    var opresult1052 = callmethodChecked(call1050, "\u2260(1)", [1], call1047);
    if (Grace_isTrue(opresult1052)) {
      setLineNumber(299);    // compilenode string
      var string1053 = new GraceString("");
      // call case 6: other requests
      var call1056 = callmethodChecked(var_util, "verbosity", []);
      var string1058 = new GraceString(" --verbose ");
      var opresult1060 = callmethodChecked(string1058, "++(1)", [1], call1056);
      var opresult1062 = callmethodChecked(opresult1060, "++(1)", [1], string1053);
      var opresult1065 = callmethodChecked(var_cmd, "++(1)", [1], opresult1062);
      var_cmd = opresult1065;
      if1045 = GraceDone;
    }
    var if1066 = GraceDone;
    setLineNumber(301);    // compilenode member
    // call case 6: other requests
    var call1068 = callmethodChecked(var_util, "dirFlag", []);
    if (Grace_isTrue(call1068)) {
      setLineNumber(302);    // compilenode member
      // call case 6: other requests
      var call1070 = callmethodChecked(var_util, "outDir", []);
      var string1072 = new GraceString(" --dir ");
      var opresult1075 = callmethodChecked(var_cmd, "++(1)", [1], string1072);
      var opresult1077 = callmethodChecked(opresult1075, "++(1)", [1], call1070);
      var_cmd = opresult1077;
      if1066 = GraceDone;
    }
    var if1078 = GraceDone;
    setLineNumber(304);    // compilenode member
    // call case 6: other requests
    var call1080 = callmethodChecked(var_util, "vtag", []);
    var opresult1083 = callmethodChecked(GraceFalse, "\u2260(1)", [1], call1080);
    if (Grace_isTrue(opresult1083)) {
      setLineNumber(305);    // compilenode member
      // call case 6: other requests
      var call1085 = callmethodChecked(var_util, "vtag", []);
      var string1087 = new GraceString(" --vtag ");
      var opresult1090 = callmethodChecked(var_cmd, "++(1)", [1], string1087);
      var opresult1092 = callmethodChecked(opresult1090, "++(1)", [1], call1085);
      var_cmd = opresult1092;
      if1078 = GraceDone;
    }
    var if1093 = GraceDone;
    setLineNumber(307);    // compilenode string
    var string1094 = new GraceString("c");
    // call case 6: other requests
    var call1097 = callmethodChecked(var_util, "target", []);
    var opresult1099 = callmethodChecked(call1097, "==(1)", [1], string1094);
    if (Grace_isTrue(opresult1099)) {
      var if1100 = GraceDone;
      setLineNumber(308);    // compilenode member
      // call case 6: other requests
      var call1103 = callmethodChecked(var_util, "dynamicModule", []);
      var opresult1105 = callmethodChecked(call1103, "||(1)", [1], var_isDialect);
      if (Grace_isTrue(opresult1105)) {
        setLineNumber(309);    // compilenode string
        var string1106 = new GraceString(" --dynamic-module");
        var opresult1109 = callmethodChecked(var_cmd, "++(1)", [1], string1106);
        var_cmd = opresult1109;
        if1100 = GraceDone;
      }
      var if1110 = GraceDone;
      setLineNumber(311);    // compilenode member
      // call case 6: other requests
      var call1112 = callmethodChecked(var_util, "importDynamic", []);
      if (Grace_isTrue(call1112)) {
        setLineNumber(312);    // compilenode string
        var string1113 = new GraceString(" --import-dynamic");
        var opresult1116 = callmethodChecked(var_cmd, "++(1)", [1], string1113);
        var_cmd = opresult1116;
        if1110 = GraceDone;
      }
      setLineNumber(314);    // compilenode string
      var string1117 = new GraceString(" -XNoMain");
      var opresult1120 = callmethodChecked(var_cmd, "++(1)", [1], string1117);
      var_cmd = opresult1120;
      if1093 = GraceDone;
    }
    setLineNumber(316);    // compilenode member
    // call case 6: other requests
    var call1122 = callmethodChecked(var_util, "gracelibPath", []);
    var string1124 = new GraceString(" --gracelib ");
    var opresult1127 = callmethodChecked(var_cmd, "++(1)", [1], string1124);
    var opresult1129 = callmethodChecked(opresult1127, "++(1)", [1], call1122);
    var_cmd = opresult1129;
    setLineNumber(317);    // compilenode member
    // call case 6: other requests
    var call1131 = callmethodChecked(var_util, "commandLineExtensions", []);
    var opresult1134 = callmethodChecked(var_cmd, "++(1)", [1], call1131);
    var_cmd = opresult1134;
    setLineNumber(318);    // compilenode string
    var string1135 = new GraceString("\"");
    var string1138 = new GraceString(" --noexec \"");
    // call case 6: other requests
    var call1141 = callmethodChecked(var_util, "target", []);
    var string1143 = new GraceString(" --target ");
    var string1146 = new GraceString("");
    var opresult1148 = callmethodChecked(string1146, "++(1)", [1], var_cmd);
    var opresult1150 = callmethodChecked(opresult1148, "++(1)", [1], string1143);
    var opresult1152 = callmethodChecked(opresult1150, "++(1)", [1], call1141);
    var opresult1154 = callmethodChecked(opresult1152, "++(1)", [1], string1138);
    var opresult1156 = callmethodChecked(opresult1154, "++(1)", [1], var_sourceFile);
    var opresult1158 = callmethodChecked(opresult1156, "++(1)", [1], string1135);
    var_cmd = opresult1158;
    setLineNumber(319);    // compilenode string
    var string1160 = new GraceString("");
    var string1163 = new GraceString("executing sub-compile ");
    var opresult1165 = callmethodChecked(string1163, "++(1)", [1], var_cmd);
    var opresult1167 = callmethodChecked(opresult1165, "++(1)", [1], string1160);
    // call case 6: other requests
    var call1168 = callmethodChecked(var_util, "log(1)verbose(1)", [1, 1], new GraceNum(50), opresult1167);
    setLineNumber(320);    // compilenode member
    // call case 6: other requests
    var string1171 = new GraceString("bash");
    var string1173 = new GraceString("-c");
    var array1172 = new PrimitiveGraceList([string1173, var_cmd]);
    // call case 6: other requests
    var call1174 = callmethodChecked(var_io, "spawn(2)", [2], string1171, array1172);
    var call1175 = callmethodChecked(call1174, "status", []);
    var var_exitCode = call1175;
    var if1176 = GraceDone;
    setLineNumber(321);    // compilenode identifier
    var opresult1179 = callmethodChecked(var_exitCode, "\u2260(1)", [1], new GraceNum(0));
    if (Grace_isTrue(opresult1179)) {
      setLineNumber(322);    // compilenode string
      var string1181 = new GraceString(").");
      var string1184 = new GraceString(" (");
      var string1187 = new GraceString("Failed to compile imported module ");
      var opresult1189 = callmethodChecked(string1187, "++(1)", [1], var_nm);
      var opresult1191 = callmethodChecked(opresult1189, "++(1)", [1], string1184);
      var opresult1193 = callmethodChecked(opresult1191, "++(1)", [1], var_exitCode);
      var opresult1195 = callmethodChecked(opresult1193, "++(1)", [1], string1181);
      setLineNumber(323);    // compilenode identifier
      // call case 6: other requests
      setLineNumber(322);    // compilenode identifier
      var call1196 = callmethodChecked(var_errormessages, "error(1)atLine(1)", [1, 1], opresult1195, var_line);
      if1176 = call1196;
    }
    return if1176;
  };
  func953.confidential = true;
  func953.paramCounts = [1, 1, 1, 2];
  this.methods["compileModule(1)inFile(1)forDialect(1)atRange(2)"] = func953;
  func953.definitionLine = 274;
  func953.definitionModule = "xmodule";
  setLineNumber(327);    // compilenode method
  var func1197 = function(argcv) {    // method parseGCT(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_moduleName = arguments[curarg];
    curarg++;
    setModuleName("xmodule");
    setLineNumber(328);    // compilenode block
    var block1199 = new GraceBlock(this, 328, 0);
    block1199.real = function() {
      setLineNumber(329);    // compilenode member
      // call case 6: other requests
      var call1202 = callmethodChecked(var_util, "outDir", []);
      // call case 4: self request
      onSelf = true;
      var call1203 = callmethodChecked(this, "parseGCT(1)sourceDir(1)", [1, 1], var_moduleName, call1202);
      return call1203;
    };
    // call case 6: other requests
    setLineNumber(328);    // compilenode identifier
    var call1204 = callmethodChecked(var_gctCache, "at(1)ifAbsent(1)", [1, 1], var_moduleName, block1199);
    return call1204;
  };
  func1197.paramCounts = [1];
  this.methods["parseGCT(1)"] = func1197;
  func1197.definitionLine = 327;
  func1197.definitionModule = "xmodule";
  setLineNumber(333);    // compilenode method
  var func1205 = function(argcv) {    // method parseGCT(_)sourceDir(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_moduleName = arguments[curarg];
    curarg++;
    var var_dir = arguments[curarg];
    curarg++;
    setModuleName("xmodule");
    setLineNumber(334);    // compilenode member
    // call case 5: prelude request
    var call1207 = callmethodChecked(var_prelude, "emptyDictionary", []);
    var var_gctData = call1207;
    setLineNumber(335);    // compilenode member
    // call case 6: other requests
    var call1209 = callmethodChecked(var_moduleName, "size", []);
    var var_sz = call1209;
    setLineNumber(336);    // compilenode string
    var string1211 = new GraceString(".gct");
    // call case 6: other requests
    // call case 6: other requests
    var call1213 = callmethodChecked(var_filePath, "fromString(1)", [1], var_moduleName);
    var call1214 = callmethodChecked(call1213, "setExtension(1)", [1], string1211);
    var var_sought = call1214;
    setLineNumber(338);    // compilenode string
    var string1217 = new GraceString("GRACE_MODULE_PATH");
    // call case 6: other requests
    // call case 6: other requests
    var call1219 = callmethodChecked(var_sys, "environ", []);
    var call1220 = callmethodChecked(call1219, "at(1)", [1], string1217);
    var block1221 = new GraceBlock(this, 338, 1);
    setLineNumber(1);    // compilenode identifier
    block1221.real = function(var_l) {
      setLineNumber(339);    // compilenode string
      var string1223 = new GraceString(".");
      var string1226 = new GraceString("; looked in ");
      var string1229 = new GraceString(" for module ");
      var string1232 = new GraceString("Can't find file ");
      var opresult1234 = callmethodChecked(string1232, "++(1)", [1], var_sought);
      var opresult1236 = callmethodChecked(opresult1234, "++(1)", [1], string1229);
      var opresult1238 = callmethodChecked(opresult1236, "++(1)", [1], var_moduleName);
      var opresult1240 = callmethodChecked(opresult1238, "++(1)", [1], string1226);
      var opresult1242 = callmethodChecked(opresult1240, "++(1)", [1], var_l);
      var opresult1244 = callmethodChecked(opresult1242, "++(1)", [1], string1223);
      // call case 6: other requests
      var call1245 = callmethodChecked(var_util, "log(1)verbose(1)", [1, 1], new GraceNum(80), opresult1244);
      setLineNumber(340);    // compilenode identifier
      // call case 6: other requests
      var call1247 = callmethodChecked(var_gctCache, "at(1)put(1)", [1, 1], var_moduleName, var_gctData);
      setLineNumber(341);    // compilenode identifier
      throw new ReturnException(var_gctData, returnTarget);
      return undefined;
    };
    // call case 6: other requests
    setLineNumber(337);    // compilenode identifier
    var call1248 = callmethodChecked(var_util, "file(1)on(1)orPath(1)otherwise(1)", [1, 1, 1, 1], var_sought, var_dir, call1220, block1221);
    var var_filename = call1248;
    setLineNumber(343);    // compilenode string
    var string1250 = new GraceString("r");
    // call case 6: other requests
    var call1251 = callmethodChecked(var_io, "open(2)", [2], var_filename, string1250);
    var var_tfp = call1251;
    setLineNumber(344);    // compilenode string
    var string1252 = new GraceString("");
    var var_key = string1252;
    setLineNumber(345);    // compilenode block
    var block1254 = new GraceBlock(this, 345, 0);
    block1254.real = function() {
      // call case 6: other requests
      // call case 6: other requests
      var call1257 = callmethodChecked(var_tfp, "eof", []);
      var call1258 = callmethodChecked(call1257, "prefix!", [0]);
      return call1258;
    };
    var block1259 = new GraceBlock(this, 345, 0);
    block1259.real = function() {
      setLineNumber(346);    // compilenode member
      // call case 6: other requests
      var call1261 = callmethodChecked(var_tfp, "getline", []);
      var var_line = call1261;
      var if1262 = GraceDone;
      setLineNumber(347);    // compilenode member
      // call case 6: other requests
      var call1265 = callmethodChecked(var_line, "size", []);
      var opresult1267 = callmethodChecked(call1265, ">(1)", [1], new GraceNum(0));
      if (Grace_isTrue(opresult1267)) {
        var if1268 = GraceDone;
        setLineNumber(348);    // compilenode string
        var string1269 = new GraceString(" ");
        // call case 6: other requests
        var call1272 = callmethodChecked(var_line, "at(1)", [1], new GraceNum(1));
        var opresult1274 = callmethodChecked(call1272, "\u2260(1)", [1], string1269);
        if (Grace_isTrue(opresult1274)) {
          setLineNumber(349);    // compilenode member
          // call case 6: other requests
          var call1278 = callmethodChecked(var_line, "size", []);
          var diff1280 = callmethodChecked(call1278, "-(1)", [1], new GraceNum(1));
          // call case 6: other requests
          var call1281 = callmethodChecked(var_line, "substringFrom(1)to(1)", [1, 1], new GraceNum(1), diff1280);
          var_key = call1281;
          setLineNumber(350);    // compilenode array
          var array1283 = new PrimitiveGraceList([]);
          // call case 6: other requests
          var call1284 = callmethodChecked(var_gctData, "at(1)put(1)", [1, 1], var_key, array1283);
          if1268 = call1284;
        } else {
          setLineNumber(352);    // compilenode member
          // call case 6: other requests
          var call1288 = callmethodChecked(var_line, "size", []);
          // call case 6: other requests
          var call1289 = callmethodChecked(var_line, "substringFrom(1)to(1)", [1, 1], new GraceNum(2), call1288);
          // call case 6: other requests
          // call case 6: other requests
          var call1291 = callmethodChecked(var_gctData, "at(1)", [1], var_key);
          var call1292 = callmethodChecked(call1291, "addLast(1)", [1], call1289);
          if1268 = call1292;
        }
        if1262 = if1268;
      }
      return if1262;
    };
    // call case 5: prelude request
    var call1293 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block1254, block1259);
    setLineNumber(356);    // compilenode member
    // call case 6: other requests
    var call1295 = callmethodChecked(var_tfp, "close", []);
    setLineNumber(357);    // compilenode identifier
    // call case 6: other requests
    var call1297 = callmethodChecked(var_gctCache, "at(1)put(1)", [1, 1], var_moduleName, var_gctData);
    setLineNumber(358);    // compilenode identifier
    return var_gctData;
  };
  func1205.confidential = true;
  func1205.paramCounts = [1, 1];
  this.methods["parseGCT(1)sourceDir(1)"] = func1205;
  func1205.definitionLine = 333;
  func1205.definitionModule = "xmodule";
  setLineNumber(361);    // compilenode method
  var func1298 = function(argcv) {    // method writeGCT(_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_modname = arguments[curarg];
    curarg++;
    var var_dict = arguments[curarg];
    curarg++;
    setModuleName("xmodule");
    setLineNumber(362);    // compilenode string
    var string1300 = new GraceString(".gct");
    var string1303 = new GraceString("");
    // call case 6: other requests
    var call1306 = callmethodChecked(var_util, "outDir", []);
    var string1308 = new GraceString("");
    var opresult1310 = callmethodChecked(string1308, "++(1)", [1], call1306);
    var opresult1312 = callmethodChecked(opresult1310, "++(1)", [1], string1303);
    var opresult1314 = callmethodChecked(opresult1312, "++(1)", [1], var_modname);
    var opresult1316 = callmethodChecked(opresult1314, "++(1)", [1], string1300);
    var string1317 = new GraceString("w");
    // call case 6: other requests
    var call1318 = callmethodChecked(var_io, "open(2)", [2], opresult1316, string1317);
    var var_fp = call1318;
    setLineNumber(363);    // compilenode block
    var block1320 = new GraceBlock(this, 363, 1);
    setLineNumber(1);    // compilenode identifier
    block1320.real = function(var_b) {
      setLineNumber(364);    // compilenode string
      var string1322 = new GraceString(":\n");
      // call case 6: other requests
      var call1325 = callmethodChecked(var_b, "key", []);
      var string1327 = new GraceString("");
      var opresult1329 = callmethodChecked(string1327, "++(1)", [1], call1325);
      var opresult1331 = callmethodChecked(opresult1329, "++(1)", [1], string1322);
      // call case 6: other requests
      var call1332 = callmethodChecked(var_fp, "write(1)", [1], opresult1331);
      setLineNumber(365);    // compilenode block
      var block1334 = new GraceBlock(this, 365, 1);
      setLineNumber(1);    // compilenode identifier
      block1334.real = function(var_v) {
        setLineNumber(366);    // compilenode string
        var string1336 = new GraceString("\n");
        var string1339 = new GraceString(" ");
        var opresult1341 = callmethodChecked(string1339, "++(1)", [1], var_v);
        var opresult1343 = callmethodChecked(opresult1341, "++(1)", [1], string1336);
        // call case 6: other requests
        var call1344 = callmethodChecked(var_fp, "write(1)", [1], opresult1343);
        return call1344;
      };
      // call case 6: other requests
      setLineNumber(365);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      // call case 6: other requests
      var call1348 = callmethodChecked(var_b, "value", []);
      var call1349 = callmethodChecked(call1348, "asList", []);
      var call1350 = callmethodChecked(call1349, "sort", []);
      var call1351 = callmethodChecked(call1350, "do(1)", [1], block1334);
      return call1351;
    };
    // call case 6: other requests
    setLineNumber(363);    // compilenode identifier
    // call case 6: other requests
    // call case 6: other requests
    // call case 6: other requests
    var call1355 = callmethodChecked(var_dict, "bindings", []);
    var call1356 = callmethodChecked(call1355, "asList", []);
    var call1357 = callmethodChecked(call1356, "sortBy(1)", [1], var_keyCompare);
    var call1358 = callmethodChecked(call1357, "do(1)", [1], block1320);
    setLineNumber(369);    // compilenode member
    // call case 6: other requests
    var call1360 = callmethodChecked(var_fp, "close", []);
    setLineNumber(370);    // compilenode identifier
    // call case 6: other requests
    var call1362 = callmethodChecked(var_gctCache, "at(1)put(1)", [1, 1], var_modname, var_dict);
    return call1362;
  };
  func1298.confidential = true;
  func1298.paramCounts = [2];
  this.methods["writeGCT(2)"] = func1298;
  func1298.definitionLine = 361;
  func1298.definitionModule = "xmodule";
  setLineNumber(373);    // compilenode method
  var func1363 = function(argcv) {    // method writeGctForModule(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_moduleObject = arguments[curarg];
    curarg++;
    setModuleName("xmodule");
    setLineNumber(374);    // compilenode member
    // call case 6: other requests
    var call1366 = callmethodChecked(var_moduleObject, "name", []);
    // call case 4: self request
    onSelf = true;
    var call1368 = callmethodChecked(this, "generateGctForModule(1)", [1], var_moduleObject);
    // call case 4: self request
    onSelf = true;
    var call1369 = callmethodChecked(this, "writeGCT(2)", [2], call1366, call1368);
    return call1369;
  };
  func1363.paramCounts = [1];
  this.methods["writeGctForModule(1)"] = func1363;
  func1363.definitionLine = 373;
  func1363.definitionModule = "xmodule";
  setLineNumber(377);    // compilenode method
  var func1370 = function(argcv) {    // method gctAsString(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_gctDict = arguments[curarg];
    curarg++;
    setModuleName("xmodule");
    setLineNumber(378);    // compilenode string
    var string1371 = new GraceString("");
    var var_ret = string1371;
    setLineNumber(379);    // compilenode block
    var block1373 = new GraceBlock(this, 379, 1);
    setLineNumber(1);    // compilenode identifier
    block1373.real = function(var_b) {
      setLineNumber(380);    // compilenode string
      var string1374 = new GraceString(":\n");
      // call case 6: other requests
      var call1377 = callmethodChecked(var_b, "key", []);
      var string1379 = new GraceString("");
      var opresult1381 = callmethodChecked(string1379, "++(1)", [1], call1377);
      var opresult1383 = callmethodChecked(opresult1381, "++(1)", [1], string1374);
      var opresult1386 = callmethodChecked(var_ret, "++(1)", [1], opresult1383);
      var_ret = opresult1386;
      setLineNumber(381);    // compilenode block
      var block1388 = new GraceBlock(this, 381, 1);
      setLineNumber(1);    // compilenode identifier
      block1388.real = function(var_v) {
        setLineNumber(382);    // compilenode string
        var string1389 = new GraceString("\n");
        var string1392 = new GraceString(" ");
        var opresult1394 = callmethodChecked(string1392, "++(1)", [1], var_v);
        var opresult1396 = callmethodChecked(opresult1394, "++(1)", [1], string1389);
        var opresult1399 = callmethodChecked(var_ret, "++(1)", [1], opresult1396);
        var_ret = opresult1399;
        return GraceDone;
      };
      // call case 6: other requests
      setLineNumber(381);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      // call case 6: other requests
      var call1403 = callmethodChecked(var_b, "value", []);
      var call1404 = callmethodChecked(call1403, "asList", []);
      var call1405 = callmethodChecked(call1404, "sort", []);
      var call1406 = callmethodChecked(call1405, "do(1)", [1], block1388);
      return call1406;
    };
    // call case 6: other requests
    setLineNumber(379);    // compilenode identifier
    // call case 6: other requests
    // call case 6: other requests
    // call case 6: other requests
    var call1410 = callmethodChecked(var_gctDict, "bindings", []);
    var call1411 = callmethodChecked(call1410, "asList", []);
    var call1412 = callmethodChecked(call1411, "sortBy(1)", [1], var_keyCompare);
    var call1413 = callmethodChecked(call1412, "do(1)", [1], block1373);
    setLineNumber(385);    // compilenode identifier
    return var_ret;
  };
  func1370.paramCounts = [1];
  this.methods["gctAsString(1)"] = func1370;
  func1370.definitionLine = 377;
  func1370.definitionModule = "xmodule";
  setLineNumber(461);    // compilenode method
  var func1414 = function(argcv) {    // method generateGctForModule(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_moduleObject = arguments[curarg];
    curarg++;
    setModuleName("xmodule");
    setLineNumber(462);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call1416 = callmethodChecked(this, "buildGctFor(1)", [1], var_moduleObject);
    var var_gct = call1416;
    setLineNumber(463);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call1418 = callmethodChecked(this, "addFreshMethodsOf(1)to(1)", [1, 1], var_moduleObject, var_gct);
    setLineNumber(464);    // compilenode identifier
    return var_gct;
  };
  func1414.confidential = true;
  func1414.paramCounts = [1];
  this.methods["generateGctForModule(1)"] = func1414;
  func1414.definitionLine = 461;
  func1414.definitionModule = "xmodule";
  setLineNumber(467);    // compilenode method
  var func1419 = function(argcv) {    // method buildGctFor(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_module = arguments[curarg];
    curarg++;
    setModuleName("xmodule");
    setLineNumber(468);    // compilenode member
    // call case 5: prelude request
    var call1421 = callmethodChecked(var_prelude, "emptyDictionary", []);
    var var_gct = call1421;
    setLineNumber(469);    // compilenode member
    // call case 5: prelude request
    var call1423 = callmethodChecked(var_prelude, "emptyList", []);
    var var_classes = call1423;
    setLineNumber(470);    // compilenode member
    // call case 5: prelude request
    var call1425 = callmethodChecked(var_prelude, "emptyList", []);
    var var_confidentials = call1425;
    setLineNumber(471);    // compilenode member
    // call case 5: prelude request
    var call1427 = callmethodChecked(var_prelude, "emptyList", []);
    var var_meths = call1427;
    setLineNumber(472);    // compilenode member
    // call case 5: prelude request
    var call1429 = callmethodChecked(var_prelude, "emptyList", []);
    var var_types = call1429;
    setLineNumber(473);    // compilenode identifier
    var var_theDialect = GraceFalse;
    setLineNumber(474);    // compilenode block
    var block1431 = new GraceBlock(this, 474, 1);
    setLineNumber(1);    // compilenode identifier
    block1431.real = function(var_p) {
      setLineNumber(475);    // compilenode member
      // call case 6: other requests
      var call1434 = callmethodChecked(var_p, "providedNames", []);
      // call case 6: other requests
      var call1435 = callmethodChecked(var_meths, "addAll(1)", [1], call1434);
      return call1435;
    };
    // call case 6: other requests
    setLineNumber(474);    // compilenode identifier
    var call1436 = callmethodChecked(var_module, "parentsDo(1)", [1], block1431);
    setLineNumber(477);    // compilenode member
    // call case 6: other requests
    var call1439 = callmethodChecked(var_module, "value", []);
    var block1440 = new GraceBlock(this, 477, 1);
    setLineNumber(1);    // compilenode identifier
    block1440.real = function(var_v) {
      var if1441 = GraceDone;
      setLineNumber(478);    // compilenode string
      var string1442 = new GraceString("vardec");
      // call case 6: other requests
      var call1445 = callmethodChecked(var_v, "kind", []);
      var opresult1447 = callmethodChecked(call1445, "==(1)", [1], string1442);
      if (Grace_isTrue(opresult1447)) {
        var if1448 = GraceDone;
        setLineNumber(479);    // compilenode member
        // call case 6: other requests
        var call1450 = callmethodChecked(var_v, "isReadable", []);
        if (Grace_isTrue(call1450)) {
          setLineNumber(480);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call1454 = callmethodChecked(var_v, "name", []);
          var call1455 = callmethodChecked(call1454, "value", []);
          // call case 6: other requests
          var call1456 = callmethodChecked(var_meths, "push(1)", [1], call1455);
          if1448 = call1456;
        }
        var if1457 = GraceDone;
        setLineNumber(482);    // compilenode member
        // call case 6: other requests
        var call1459 = callmethodChecked(var_v, "isWritable", []);
        if (Grace_isTrue(call1459)) {
          setLineNumber(483);    // compilenode string
          var string1461 = new GraceString(":=");
          // call case 6: other requests
          // call case 6: other requests
          var call1465 = callmethodChecked(var_v, "name", []);
          var call1466 = callmethodChecked(call1465, "value", []);
          var opresult1468 = callmethodChecked(call1466, "++(1)", [1], string1461);
          // call case 6: other requests
          var call1469 = callmethodChecked(var_meths, "push(1)", [1], opresult1468);
          if1457 = call1469;
        }
        if1441 = if1457;
      } else {
        var if1470 = GraceDone;
        setLineNumber(485);    // compilenode string
        var string1471 = new GraceString("method");
        // call case 6: other requests
        var call1474 = callmethodChecked(var_v, "kind", []);
        var opresult1476 = callmethodChecked(call1474, "==(1)", [1], string1471);
        if (Grace_isTrue(opresult1476)) {
          var if1477 = GraceDone;
          setLineNumber(486);    // compilenode member
          // call case 6: other requests
          var call1479 = callmethodChecked(var_v, "isPublic", []);
          if (Grace_isTrue(call1479)) {
            setLineNumber(487);    // compilenode member
            // call case 6: other requests
            var call1482 = callmethodChecked(var_v, "nameString", []);
            // call case 6: other requests
            var call1483 = callmethodChecked(var_meths, "push(1)", [1], call1482);
            if1477 = call1483;
          } else {
            setLineNumber(489);    // compilenode member
            // call case 6: other requests
            var call1486 = callmethodChecked(var_v, "nameString", []);
            // call case 6: other requests
            var call1487 = callmethodChecked(var_confidentials, "push(1)", [1], call1486);
            if1477 = call1487;
          }
          if1470 = if1477;
        } else {
          var if1488 = GraceDone;
          setLineNumber(491);    // compilenode string
          var string1489 = new GraceString("typedec");
          // call case 6: other requests
          var call1492 = callmethodChecked(var_v, "kind", []);
          var opresult1494 = callmethodChecked(call1492, "==(1)", [1], string1489);
          if (Grace_isTrue(opresult1494)) {
            var if1495 = GraceDone;
            setLineNumber(492);    // compilenode member
            // call case 6: other requests
            var call1497 = callmethodChecked(var_v, "isPublic", []);
            if (Grace_isTrue(call1497)) {
              setLineNumber(493);    // compilenode member
              // call case 6: other requests
              var call1500 = callmethodChecked(var_v, "nameString", []);
              // call case 6: other requests
              var call1501 = callmethodChecked(var_meths, "push(1)", [1], call1500);
              setLineNumber(494);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              var call1505 = callmethodChecked(var_v, "name", []);
              var call1506 = callmethodChecked(call1505, "value", []);
              // call case 6: other requests
              var call1507 = callmethodChecked(var_types, "push(1)", [1], call1506);
              setLineNumber(495);    // compilenode array
              var array1508 = new PrimitiveGraceList([]);
              var_methodtypes = array1508;
              setLineNumber(496);    // compilenode identifier
              // call case 6: other requests
              var call1510 = callmethodChecked(var_v, "accept(1)", [1], var_typeVisitor);
              setLineNumber(497);    // compilenode num
              // call case 6: other requests
              // call case 6: other requests
              var call1513 = callmethodChecked(var_v, "name", []);
              var call1514 = callmethodChecked(call1513, "toGrace(1)", [1], new GraceNum(0));
              var var_typename = call1514;
              var if1515 = GraceDone;
              setLineNumber(498);    // compilenode member
              // call case 6: other requests
              var call1518 = callmethodChecked(var_v, "typeParams", []);
              var opresult1520 = callmethodChecked(call1518, "\u2260(1)", [1], GraceFalse);
              if (Grace_isTrue(opresult1520)) {
                setLineNumber(499);    // compilenode member
                // call case 6: other requests
                var call1522 = callmethodChecked(var_v, "typeParams", []);
                var opresult1525 = callmethodChecked(var_typename, "++(1)", [1], call1522);
                var_typename = opresult1525;
                if1515 = GraceDone;
              }
              setLineNumber(501);    // compilenode string
              var string1527 = new GraceString("");
              var string1530 = new GraceString("methodtypes-of:");
              var opresult1532 = callmethodChecked(string1530, "++(1)", [1], var_typename);
              var opresult1534 = callmethodChecked(opresult1532, "++(1)", [1], string1527);
              // call case 6: other requests
              var call1535 = callmethodChecked(var_gct, "at(1)put(1)", [1, 1], opresult1534, var_methodtypes);
              if1495 = call1535;
            } else {
              setLineNumber(503);    // compilenode member
              // call case 6: other requests
              var call1538 = callmethodChecked(var_v, "nameString", []);
              // call case 6: other requests
              var call1539 = callmethodChecked(var_confidentials, "push(1)", [1], call1538);
              if1495 = call1539;
            }
            if1488 = if1495;
          } else {
            var if1540 = GraceDone;
            setLineNumber(505);    // compilenode string
            var string1541 = new GraceString("defdec");
            // call case 6: other requests
            var call1544 = callmethodChecked(var_v, "kind", []);
            var opresult1546 = callmethodChecked(call1544, "==(1)", [1], string1541);
            if (Grace_isTrue(opresult1546)) {
              var if1547 = GraceDone;
              setLineNumber(506);    // compilenode member
              // call case 6: other requests
              var call1549 = callmethodChecked(var_v, "isPublic", []);
              if (Grace_isTrue(call1549)) {
                setLineNumber(507);    // compilenode member
                // call case 6: other requests
                var call1552 = callmethodChecked(var_v, "nameString", []);
                // call case 6: other requests
                var call1553 = callmethodChecked(var_meths, "push(1)", [1], call1552);
                if1547 = call1553;
              }
              var if1554 = GraceDone;
              setLineNumber(509);    // compilenode string
              var string1556 = new GraceString("parent");
              // call case 6: other requests
              var call1557 = callmethodChecked(var_ast, "findAnnotation(2)", [2], var_v, string1556);
              if (Grace_isTrue(call1557)) {
                setLineNumber(510);    // compilenode block
                var block1559 = new GraceBlock(this, 510, 1);
                setLineNumber(1);    // compilenode identifier
                block1559.real = function(var_m) {
                  setLineNumber(510);    // compilenode identifier
                  // call case 6: other requests
                  var call1561 = callmethodChecked(var_meths, "push(1)", [1], var_m);
                  return call1561;
                };
                // call case 6: other requests
                // call case 6: other requests
                // call case 6: other requests
                var call1564 = callmethodChecked(var_v, "scope", []);
                var call1565 = callmethodChecked(call1564, "elements", []);
                var call1566 = callmethodChecked(call1565, "keysDo(1)", [1], block1559);
                if1554 = call1566;
              }
              var if1567 = GraceDone;
              setLineNumber(512);    // compilenode member
              // call case 6: other requests
              var call1569 = callmethodChecked(var_v, "returnsObject", []);
              if (Grace_isTrue(call1569)) {
                setLineNumber(513);    // compilenode member
                // call case 6: other requests
                var call1571 = callmethodChecked(var_v, "value", []);
                var var_ob = call1571;
                setLineNumber(514);    // compilenode array
                var array1572 = new PrimitiveGraceList([]);
                var var_obConstructors = array1572;
                setLineNumber(515);    // compilenode member
                // call case 6: other requests
                var call1575 = callmethodChecked(var_ob, "value", []);
                var block1576 = new GraceBlock(this, 515, 1);
                setLineNumber(1);    // compilenode identifier
                block1576.real = function(var_nd) {
                  var if1577 = GraceDone;
                  setLineNumber(516);    // compilenode member
                  // call case 6: other requests
                  var call1579 = callmethodChecked(var_nd, "isClass", []);
                  if (Grace_isTrue(call1579)) {
                    setLineNumber(517);    // compilenode member
                    // call case 6: other requests
                    var call1581 = callmethodChecked(var_nd, "nameString", []);
                    var var_factMethNm = call1581;
                    setLineNumber(518);    // compilenode identifier
                    // call case 6: other requests
                    var call1583 = callmethodChecked(var_obConstructors, "push(1)", [1], var_factMethNm);
                    setLineNumber(519);    // compilenode member
                    // call case 5: prelude request
                    var call1585 = callmethodChecked(var_prelude, "emptyList", []);
                    var var_exportedMethods = call1585;
                    setLineNumber(520);    // compilenode block
                    var block1587 = new GraceBlock(this, 520, 2);
                    setLineNumber(1);    // compilenode identifier
                    block1587.real = function(var_key, var_knd) {
                      var if1588 = GraceDone;
                      setLineNumber(521);    // compilenode member
                      // call case 6: other requests
                      var call1590 = callmethodChecked(var_knd, "forGct", []);
                      if (Grace_isTrue(call1590)) {
                        // call case 6: other requests
                        var call1592 = callmethodChecked(var_exportedMethods, "add(1)", [1], var_key);
                        if1588 = call1592;
                      }
                      return if1588;
                    };
                    // call case 6: other requests
                    setLineNumber(520);    // compilenode identifier
                    // call case 6: other requests
                    // call case 6: other requests
                    var call1595 = callmethodChecked(var_ob, "scope", []);
                    var call1596 = callmethodChecked(call1595, "getScope(1)", [1], var_factMethNm);
                    var call1597 = callmethodChecked(call1596, "keysAndKindsDo(1)", [1], block1587);
                    setLineNumber(523);    // compilenode string
                    var string1599 = new GraceString("");
                    var string1602 = new GraceString(".");
                    // call case 6: other requests
                    // call case 6: other requests
                    var call1606 = callmethodChecked(var_v, "name", []);
                    var call1607 = callmethodChecked(call1606, "value", []);
                    var string1609 = new GraceString("methods-of:");
                    var opresult1611 = callmethodChecked(string1609, "++(1)", [1], call1607);
                    var opresult1613 = callmethodChecked(opresult1611, "++(1)", [1], string1602);
                    var opresult1615 = callmethodChecked(opresult1613, "++(1)", [1], var_factMethNm);
                    var opresult1617 = callmethodChecked(opresult1615, "++(1)", [1], string1599);
                    setLineNumber(524);    // compilenode member
                    // call case 6: other requests
                    var call1619 = callmethodChecked(var_exportedMethods, "sort", []);
                    // call case 6: other requests
                    setLineNumber(523);    // compilenode identifier
                    var call1620 = callmethodChecked(var_gct, "at(1)put(1)", [1, 1], opresult1617, call1619);
                    if1577 = call1620;
                  }
                  return if1577;
                };
                // call case 5: prelude request
                var call1621 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1575, block1576);
                var if1622 = GraceDone;
                setLineNumber(527);    // compilenode member
                // call case 6: other requests
                var call1625 = callmethodChecked(var_obConstructors, "size", []);
                var opresult1627 = callmethodChecked(call1625, ">(1)", [1], new GraceNum(0));
                if (Grace_isTrue(opresult1627)) {
                  setLineNumber(528);    // compilenode string
                  var string1629 = new GraceString("");
                  // call case 6: other requests
                  // call case 6: other requests
                  var call1633 = callmethodChecked(var_v, "name", []);
                  var call1634 = callmethodChecked(call1633, "value", []);
                  var string1636 = new GraceString("constructors-of:");
                  var opresult1638 = callmethodChecked(string1636, "++(1)", [1], call1634);
                  var opresult1640 = callmethodChecked(opresult1638, "++(1)", [1], string1629);
                  setLineNumber(529);    // compilenode identifier
                  // call case 6: other requests
                  setLineNumber(528);    // compilenode identifier
                  var call1641 = callmethodChecked(var_gct, "at(1)put(1)", [1, 1], opresult1640, var_obConstructors);
                  setLineNumber(530);    // compilenode member
                  // call case 6: other requests
                  // call case 6: other requests
                  var call1645 = callmethodChecked(var_v, "name", []);
                  var call1646 = callmethodChecked(call1645, "value", []);
                  // call case 6: other requests
                  var call1647 = callmethodChecked(var_classes, "push(1)", [1], call1646);
                  if1622 = call1647;
                }
                if1567 = if1622;
              }
              if1540 = if1567;
            } else {
              var if1648 = GraceDone;
              setLineNumber(533);    // compilenode string
              var string1649 = new GraceString("dialect");
              // call case 6: other requests
              var call1652 = callmethodChecked(var_v, "kind", []);
              var opresult1654 = callmethodChecked(call1652, "==(1)", [1], string1649);
              if (Grace_isTrue(opresult1654)) {
                setLineNumber(534);    // compilenode member
                // call case 6: other requests
                var call1656 = callmethodChecked(var_v, "value", []);
                var_theDialect = call1656;
                if1648 = GraceDone;
              }
              if1540 = if1648;
            }
            if1488 = if1540;
          }
          if1470 = if1488;
        }
        if1441 = if1470;
      }
      return if1441;
    };
    // call case 5: prelude request
    var call1657 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1439, block1440);
    setLineNumber(537);    // compilenode string
    var string1659 = new GraceString("classes");
    // call case 6: other requests
    var call1661 = callmethodChecked(var_classes, "sort", []);
    // call case 6: other requests
    var call1662 = callmethodChecked(var_gct, "at(1)put(1)", [1, 1], string1659, call1661);
    setLineNumber(538);    // compilenode string
    var string1664 = new GraceString("confidential");
    // call case 6: other requests
    var call1666 = callmethodChecked(var_confidentials, "sort", []);
    // call case 6: other requests
    var call1667 = callmethodChecked(var_gct, "at(1)put(1)", [1, 1], string1664, call1666);
    setLineNumber(539);    // compilenode string
    var string1669 = new GraceString("modules");
    // call case 6: other requests
    // call case 6: other requests
    // call case 6: other requests
    var call1673 = callmethodChecked(var_module, "imports", []);
    var call1674 = callmethodChecked(call1673, "asList", []);
    var call1675 = callmethodChecked(call1674, "sorted", []);
    // call case 6: other requests
    var call1676 = callmethodChecked(var_gct, "at(1)put(1)", [1, 1], string1669, call1675);
    setLineNumber(540);    // compilenode string
    var string1678 = new GraceString("path");
    // call case 6: other requests
    var call1681 = callmethodChecked(var_module, "name", []);
    var array1679 = new PrimitiveGraceList([call1681]);
    // call case 6: other requests
    var call1682 = callmethodChecked(var_gct, "at(1)put(1)", [1, 1], string1678, array1679);
    setLineNumber(541);    // compilenode string
    var string1684 = new GraceString("public");
    // call case 6: other requests
    var call1686 = callmethodChecked(var_meths, "sort", []);
    // call case 6: other requests
    var call1687 = callmethodChecked(var_gct, "at(1)put(1)", [1, 1], string1684, call1686);
    setLineNumber(542);    // compilenode string
    var string1689 = new GraceString("types");
    // call case 6: other requests
    var call1691 = callmethodChecked(var_types, "sort", []);
    // call case 6: other requests
    var call1692 = callmethodChecked(var_gct, "at(1)put(1)", [1, 1], string1689, call1691);
    var if1693 = GraceDone;
    setLineNumber(543);    // compilenode identifier
    var opresult1696 = callmethodChecked(GraceFalse, "\u2260(1)", [1], var_theDialect);
    if (Grace_isTrue(opresult1696)) {
      setLineNumber(544);    // compilenode string
      var string1698 = new GraceString("dialect");
      var array1699 = new PrimitiveGraceList([var_theDialect]);
      // call case 6: other requests
      var call1700 = callmethodChecked(var_gct, "at(1)put(1)", [1, 1], string1698, array1699);
      if1693 = call1700;
    }
    setLineNumber(546);    // compilenode identifier
    return var_gct;
  };
  func1419.paramCounts = [1];
  this.methods["buildGctFor(1)"] = func1419;
  func1419.definitionLine = 467;
  func1419.definitionModule = "xmodule";
  setLineNumber(549);    // compilenode method
  var func1701 = function(argcv) {    // method addFreshMethodsOf(_)to(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_moduleObject = arguments[curarg];
    curarg++;
    var var_gct = arguments[curarg];
    curarg++;
    setModuleName("xmodule");
    setLineNumber(555);    // compilenode array
    var array1702 = new PrimitiveGraceList([]);
    var var_freshmeths = array1702;
    setLineNumber(556);    // compilenode member
    // call case 6: other requests
    var call1705 = callmethodChecked(var_moduleObject, "value", []);
    var block1706 = new GraceBlock(this, 556, 1);
    setLineNumber(1);    // compilenode identifier
    block1706.real = function(var_node) {
      var if1707 = GraceDone;
      setLineNumber(557);    // compilenode member
      // call case 6: other requests
      var call1709 = callmethodChecked(var_node, "isClass", []);
      if (Grace_isTrue(call1709)) {
        setLineNumber(558);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call1711 = callmethodChecked(this, "addFreshMethod(1)to(1)for(1)", [1, 1, 1], var_node, var_freshmeths, var_gct);
        if1707 = call1711;
      }
      return if1707;
    };
    // call case 5: prelude request
    var call1712 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1705, block1706);
    setLineNumber(561);    // compilenode string
    var string1714 = new GraceString("fresh-methods");
    // call case 6: other requests
    var call1715 = callmethodChecked(var_gct, "at(1)put(1)", [1, 1], string1714, var_freshmeths);
    return call1715;
  };
  func1701.confidential = true;
  func1701.paramCounts = [1, 1];
  this.methods["addFreshMethodsOf(1)to(1)"] = func1701;
  func1701.definitionLine = 549;
  func1701.definitionModule = "xmodule";
  setLineNumber(564);    // compilenode method
  var func1716 = function(argcv) {    // method addFreshMethod(_)to(_)for(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_node = arguments[curarg];
    curarg++;
    var var_freshlist = arguments[curarg];
    curarg++;
    var var_gct = arguments[curarg];
    curarg++;
    setModuleName("xmodule");
    setLineNumber(565);    // compilenode member
    // call case 6: other requests
    var call1718 = callmethodChecked(var_node, "nameString", []);
    var var_methName = call1718;
    setLineNumber(566);    // compilenode identifier
    // call case 6: other requests
    var call1720 = callmethodChecked(var_freshlist, "push(1)", [1], var_methName);
    setLineNumber(567);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call1723 = callmethodChecked(var_node, "body", []);
    var call1724 = callmethodChecked(call1723, "last", []);
    var var_freshMethExpression = call1724;
    var if1725 = GraceDone;
    setLineNumber(568);    // compilenode member
    // call case 6: other requests
    var call1727 = callmethodChecked(var_freshMethExpression, "isObject", []);
    if (Grace_isTrue(call1727)) {
      setLineNumber(569);    // compilenode member
      // call case 5: prelude request
      var call1729 = callmethodChecked(var_prelude, "emptyList", []);
      var var_exportedMethods = call1729;
      setLineNumber(570);    // compilenode block
      var block1731 = new GraceBlock(this, 570, 2);
      setLineNumber(1);    // compilenode identifier
      block1731.real = function(var_key, var_knd) {
        var if1732 = GraceDone;
        setLineNumber(571);    // compilenode member
        // call case 6: other requests
        var call1734 = callmethodChecked(var_knd, "forGct", []);
        if (Grace_isTrue(call1734)) {
          // call case 6: other requests
          var call1736 = callmethodChecked(var_exportedMethods, "add(1)", [1], var_key);
          if1732 = call1736;
        }
        return if1732;
      };
      // call case 6: other requests
      setLineNumber(570);    // compilenode member
      // call case 6: other requests
      var call1738 = callmethodChecked(var_freshMethExpression, "scope", []);
      var call1739 = callmethodChecked(call1738, "keysAndKindsDo(1)", [1], block1731);
      setLineNumber(573);    // compilenode string
      var string1741 = new GraceString("");
      var string1744 = new GraceString("fresh:");
      var opresult1746 = callmethodChecked(string1744, "++(1)", [1], var_methName);
      var opresult1748 = callmethodChecked(opresult1746, "++(1)", [1], string1741);
      // call case 6: other requests
      var call1750 = callmethodChecked(var_exportedMethods, "sort", []);
      // call case 6: other requests
      var call1751 = callmethodChecked(var_gct, "at(1)put(1)", [1, 1], opresult1748, call1750);
      if1725 = call1751;
    } else {
      var if1752 = GraceDone;
      setLineNumber(574);    // compilenode member
      // call case 6: other requests
      var call1754 = callmethodChecked(var_freshMethExpression, "isCall", []);
      if (Grace_isTrue(call1754)) {
        setLineNumber(578);    // compilenode member
        // call case 6: other requests
        var call1756 = callmethodChecked(var_freshMethExpression, "nameString", []);
        var var_requestedName = call1756;
        var if1757 = GraceDone;
        setLineNumber(579);    // compilenode string
        var string1758 = new GraceString("copy");
        var opresult1761 = callmethodChecked(var_requestedName, "==(1)", [1], string1758);
        if (Grace_isTrue(opresult1761)) {
          setLineNumber(580);    // compilenode string
          var string1763 = new GraceString("");
          var string1766 = new GraceString("fresh:");
          var opresult1768 = callmethodChecked(string1766, "++(1)", [1], var_methName);
          var opresult1770 = callmethodChecked(opresult1768, "++(1)", [1], string1763);
          var string1772 = new GraceString("public");
          // call case 6: other requests
          var call1773 = callmethodChecked(var_gct, "at(1)", [1], string1772);
          // call case 6: other requests
          var call1774 = callmethodChecked(var_gct, "at(1)put(1)", [1, 1], opresult1770, call1773);
          if1757 = call1774;
        } else {
          var if1775 = GraceDone;
          setLineNumber(581);    // compilenode string
          var string1776 = new GraceString("clone(1)");
          var opresult1779 = callmethodChecked(var_requestedName, "==(1)", [1], string1776);
          if (Grace_isTrue(opresult1779)) {
            setLineNumber(582);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            // call case 6: other requests
            // call case 6: other requests
            var call1784 = callmethodChecked(var_freshMethExpression, "with", []);
            var call1785 = callmethodChecked(call1784, "first", []);
            var call1786 = callmethodChecked(call1785, "args", []);
            var call1787 = callmethodChecked(call1786, "first", []);
            var var_cloneArg = call1787;
            var if1788 = GraceDone;
            setLineNumber(583);    // compilenode member
            // call case 6: other requests
            var call1790 = callmethodChecked(var_cloneArg, "isSelf", []);
            if (Grace_isTrue(call1790)) {
              setLineNumber(584);    // compilenode string
              var string1792 = new GraceString("");
              var string1795 = new GraceString("fresh:");
              var opresult1797 = callmethodChecked(string1795, "++(1)", [1], var_methName);
              var opresult1799 = callmethodChecked(opresult1797, "++(1)", [1], string1792);
              var string1801 = new GraceString("public");
              // call case 6: other requests
              var call1802 = callmethodChecked(var_gct, "at(1)", [1], string1801);
              // call case 6: other requests
              var call1803 = callmethodChecked(var_gct, "at(1)put(1)", [1, 1], opresult1799, call1802);
              if1788 = call1803;
            } else {
              setLineNumber(586);    // compilenode string
              var string1805 = new GraceString("");
              var string1808 = new GraceString("fresh:");
              var opresult1810 = callmethodChecked(string1808, "++(1)", [1], var_methName);
              var opresult1812 = callmethodChecked(opresult1810, "++(1)", [1], string1805);
              setLineNumber(587);    // compilenode string
              var string1814 = new GraceString("");
              // call case 6: other requests
              var call1817 = callmethodChecked(var_cloneArg, "toGrace(1)", [1], new GraceNum(0));
              var string1819 = new GraceString("methods-of:");
              var opresult1821 = callmethodChecked(string1819, "++(1)", [1], call1817);
              var opresult1823 = callmethodChecked(opresult1821, "++(1)", [1], string1814);
              var block1824 = new GraceBlock(this, 587, 0);
              block1824.real = function() {
                setLineNumber(591);    // compilenode string
                var string1826 = new GraceString(" in gct.");
                // call case 6: other requests
                var call1829 = callmethodChecked(var_cloneArg, "toGrace(1)", [1], new GraceNum(0));
                var string1831 = new GraceString("Can't find methods-of:");
                var opresult1833 = callmethodChecked(string1831, "++(1)", [1], call1829);
                var opresult1835 = callmethodChecked(opresult1833, "++(1)", [1], string1826);
                setLineNumber(590);    // compilenode string
                var string1837 = new GraceString("\n");
                // call case 6: other requests
                var call1840 = callmethodChecked(var_freshMethExpression, "pretty(1)", [1], new GraceNum(0));
                setLineNumber(589);    // compilenode string
                var string1842 = new GraceString("unrecognized fresh method tail-call:\n");
                var opresult1844 = callmethodChecked(string1842, "++(1)", [1], call1840);
                var opresult1846 = callmethodChecked(opresult1844, "++(1)", [1], string1837);
                var opresult1848 = callmethodChecked(opresult1846, "++(1)", [1], opresult1835);
                // call case 6: other requests
                setLineNumber(588);    // compilenode member
                // call case 5: prelude request
                var call1850 = callmethodChecked(var_prelude, "ProgrammingError", []);
                var call1851 = callmethodChecked(call1850, "raise(1)", [1], opresult1848);
                return call1851;
              };
              // call case 6: other requests
              setLineNumber(587);    // compilenode identifier
              var call1852 = callmethodChecked(var_gct, "at(1)isAbsent(1)", [1, 1], opresult1823, block1824);
              // call case 6: other requests
              setLineNumber(586);    // compilenode identifier
              var call1853 = callmethodChecked(var_gct, "at(1)put(1)", [1, 1], opresult1812, call1852);
              if1788 = call1853;
            }
            if1775 = if1788;
          } else {
            setLineNumber(597);    // compilenode string
            var string1855 = new GraceString("");
            // call case 6: other requests
            var call1858 = callmethodChecked(var_freshMethExpression, "pretty(1)", [1], new GraceNum(0));
            var string1860 = new GraceString("unrecognized fresh method tail-call: ");
            var opresult1862 = callmethodChecked(string1860, "++(1)", [1], call1858);
            var opresult1864 = callmethodChecked(opresult1862, "++(1)", [1], string1855);
            // call case 6: other requests
            setLineNumber(596);    // compilenode member
            // call case 5: prelude request
            var call1866 = callmethodChecked(var_prelude, "ProgrammingError", []);
            var call1867 = callmethodChecked(call1866, "raise(1)", [1], opresult1864);
            if1775 = call1867;
          }
          if1757 = if1775;
        }
        if1752 = if1757;
      } else {
        setLineNumber(601);    // compilenode string
        var string1869 = new GraceString("");
        // call case 6: other requests
        var call1872 = callmethodChecked(var_freshMethExpression, "pretty(1)", [1], new GraceNum(0));
        var string1874 = new GraceString("fresh method result of an unexpected kind: ");
        var opresult1876 = callmethodChecked(string1874, "++(1)", [1], call1872);
        var opresult1878 = callmethodChecked(opresult1876, "++(1)", [1], string1869);
        // call case 6: other requests
        setLineNumber(600);    // compilenode member
        // call case 5: prelude request
        var call1880 = callmethodChecked(var_prelude, "ProgrammingError", []);
        var call1881 = callmethodChecked(call1880, "raise(1)", [1], opresult1878);
        if1752 = call1881;
      }
      if1725 = if1752;
    }
    return if1725;
  };
  func1716.confidential = true;
  func1716.paramCounts = [1, 1, 1];
  this.methods["addFreshMethod(1)to(1)for(1)"] = func1716;
  func1716.definitionLine = 564;
  func1716.definitionModule = "xmodule";
  setLineNumber(10);    // compilenode member
  // call case 5: prelude request
  var call1883 = callmethodChecked(var_prelude, "emptyDictionary", []);
  var var_gctCache = call1883;
  setLineNumber(1);    // compilenode method
  var func1884 = function(argcv) {    // method gctCache
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("xmodule");
    // gctCache is a simple accessor - elide try ... catch
    setLineNumber(10);    // compilenode identifier
    return var_gctCache;
  };
  func1884.paramCounts = [0];
  this.methods["gctCache"] = func1884;
  func1884.definitionLine = 1;
  func1884.definitionModule = "xmodule";
  this.methods["gctCache"].debug = "def";
  setLineNumber(11);    // compilenode block
  var block1885 = new GraceBlock(this, 11, 2);
  setLineNumber(1);    // compilenode identifier
  block1885.real = function(var_a, var_b) {
    setLineNumber(11);    // compilenode member
    // call case 6: other requests
    var call1888 = callmethodChecked(var_b, "key", []);
    // call case 6: other requests
    // call case 6: other requests
    var call1890 = callmethodChecked(var_a, "key", []);
    var call1891 = callmethodChecked(call1890, "compare(1)", [1], call1888);
    return call1891;
  };
  var var_keyCompare = block1885;
  setLineNumber(1);    // compilenode method
  var func1892 = function(argcv) {    // method keyCompare
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("xmodule");
    // keyCompare is a simple accessor - elide try ... catch
    setLineNumber(11);    // compilenode identifier
    return var_keyCompare;
  };
  func1892.paramCounts = [0];
  this.methods["keyCompare"] = func1892;
  func1892.definitionLine = 1;
  func1892.definitionModule = "xmodule";
  this.methods["keyCompare"].debug = "def";
  setLineNumber(31);    // compilenode object
  var obj1893 = Grace_allocObject(GraceObject, "currentDialect");
  obj1893.definitionModule = "xmodule";
  obj1893.definitionLine = 31;
  obj1893.outer = this;
  var reader_xmodule_outer1894 = function() {
    return this.outer;
  };
  obj1893.methods["outer"] = reader_xmodule_outer1894;
  var obj_init_1893 = function() {
    var origSuperDepth = superDepth;
    superDepth = obj1893;
    setLineNumber(32);    // compilenode string
    var string1895 = new GraceString("standardGrace");
    obj1893.data["name"] = string1895;
    var reader_xmodule_name1896 = function() {
      return this.data["name"];
    };
    obj1893.methods["name"] = reader_xmodule_name1896;
    obj1893.data["name"] = string1895;
    var writer_xmodule_name1896 = function(argcv, o) {
      this.data["name"] = o;
      return GraceDone;
    };
    obj1893.methods["name:=(1)"] = writer_xmodule_name1896;
    obj1893.mutable = true;
    setLineNumber(33);    // compilenode identifier
    obj1893.data["moduleObject"] = var___95__prelude;
    var reader_xmodule_moduleObject1897 = function() {
      return this.data["moduleObject"];
    };
    obj1893.methods["moduleObject"] = reader_xmodule_moduleObject1897;
    obj1893.data["moduleObject"] = var___95__prelude;
    var writer_xmodule_moduleObject1897 = function(argcv, o) {
      this.data["moduleObject"] = o;
      return GraceDone;
    };
    obj1893.methods["moduleObject:=(1)"] = writer_xmodule_moduleObject1897;
    obj1893.mutable = true;
    setLineNumber(36);    // compilenode identifier
    obj1893.data["hasParseChecker"] = GraceFalse;
    var reader_xmodule_hasParseChecker1898 = function() {
      return this.data["hasParseChecker"];
    };
    obj1893.methods["hasParseChecker"] = reader_xmodule_hasParseChecker1898;
    obj1893.data["hasParseChecker"] = GraceFalse;
    var writer_xmodule_hasParseChecker1898 = function(argcv, o) {
      this.data["hasParseChecker"] = o;
      return GraceDone;
    };
    obj1893.methods["hasParseChecker:=(1)"] = writer_xmodule_hasParseChecker1898;
    obj1893.mutable = true;
    setLineNumber(37);    // compilenode identifier
    obj1893.data["hasAstChecker"] = GraceFalse;
    var reader_xmodule_hasAstChecker1899 = function() {
      return this.data["hasAstChecker"];
    };
    obj1893.methods["hasAstChecker"] = reader_xmodule_hasAstChecker1899;
    obj1893.data["hasAstChecker"] = GraceFalse;
    var writer_xmodule_hasAstChecker1899 = function(argcv, o) {
      this.data["hasAstChecker"] = o;
      return GraceDone;
    };
    obj1893.methods["hasAstChecker:=(1)"] = writer_xmodule_hasAstChecker1899;
    obj1893.mutable = true;
    setLineNumber(38);    // compilenode identifier
    obj1893.data["hasAtStart"] = GraceFalse;
    var reader_xmodule_hasAtStart1900 = function() {
      return this.data["hasAtStart"];
    };
    obj1893.methods["hasAtStart"] = reader_xmodule_hasAtStart1900;
    obj1893.data["hasAtStart"] = GraceFalse;
    var writer_xmodule_hasAtStart1900 = function(argcv, o) {
      this.data["hasAtStart"] = o;
      return GraceDone;
    };
    obj1893.methods["hasAtStart:=(1)"] = writer_xmodule_hasAtStart1900;
    obj1893.mutable = true;
    setLineNumber(39);    // compilenode identifier
    obj1893.data["hasAtEnd"] = GraceFalse;
    var reader_xmodule_hasAtEnd1901 = function() {
      return this.data["hasAtEnd"];
    };
    obj1893.methods["hasAtEnd"] = reader_xmodule_hasAtEnd1901;
    obj1893.data["hasAtEnd"] = GraceFalse;
    var writer_xmodule_hasAtEnd1901 = function(argcv, o) {
      this.data["hasAtEnd"] = o;
      return GraceDone;
    };
    obj1893.methods["hasAtEnd:=(1)"] = writer_xmodule_hasAtEnd1901;
    obj1893.mutable = true;
    superDepth = origSuperDepth;
  };
  obj_init_1893.apply(obj1893, []);
  var var_currentDialect = obj1893;
  setLineNumber(1);    // compilenode method
  var func1902 = function(argcv) {    // method currentDialect
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("xmodule");
    // currentDialect is a simple accessor - elide try ... catch
    setLineNumber(31);    // compilenode identifier
    return var_currentDialect;
  };
  func1902.paramCounts = [0];
  this.methods["currentDialect"] = func1902;
  func1902.definitionLine = 1;
  func1902.definitionModule = "xmodule";
  this.methods["currentDialect"].debug = "def";
  setLineNumber(42);    // compilenode typedec
  // Type decl LinePos
  //   Type literal
  var type1904 = new GraceType("LinePos");
  type1904.typeMethods.push("line");
  type1904.typeMethods.push("linePos");
  var var_LinePos = type1904;
  setLineNumber(1);    // compilenode method
  var func1905 = function(argcv) {    // method LinePos
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("xmodule");
    // LinePos is a simple accessor - elide try ... catch
    setLineNumber(42);    // compilenode identifier
    return var_LinePos;
  };
  func1905.paramCounts = [0];
  this.methods["LinePos"] = func1905;
  func1905.definitionLine = 1;
  func1905.definitionModule = "xmodule";
  setLineNumber(47);    // compilenode typedec
  // Type decl RangeSuggestions
  //   Type literal
  var type1907 = new GraceType("RangeSuggestions");
  type1907.typeMethods.push("line");
  type1907.typeMethods.push("posStart");
  type1907.typeMethods.push("posEnd");
  type1907.typeMethods.push("suggestions");
  var var_RangeSuggestions = type1907;
  setLineNumber(1);    // compilenode method
  var func1908 = function(argcv) {    // method RangeSuggestions
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("xmodule");
    // RangeSuggestions is a simple accessor - elide try ... catch
    setLineNumber(47);    // compilenode identifier
    return var_RangeSuggestions;
  };
  func1908.paramCounts = [0];
  this.methods["RangeSuggestions"] = func1908;
  func1908.definitionLine = 1;
  func1908.definitionModule = "xmodule";
  setLineNumber(54);    // compilenode string
  var string1911 = new GraceString("mirrors");
  var string1912 = new GraceString("curl");
  var string1913 = new GraceString("unicode");
  var array1910 = new PrimitiveGraceList([string1911, string1912, string1913]);
  // call case 5: prelude request
  var call1914 = callmethodChecked(var_prelude, "set(1)", [1], array1910);
  var var_dynamicCModules = call1914;
  setLineNumber(1);    // compilenode method
  var func1915 = function(argcv) {    // method dynamicCModules
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("xmodule");
    // dynamicCModules is a simple accessor - elide try ... catch
    setLineNumber(54);    // compilenode identifier
    return var_dynamicCModules;
  };
  func1915.paramCounts = [0];
  this.methods["dynamicCModules"] = func1915;
  func1915.definitionLine = 1;
  func1915.definitionModule = "xmodule";
  this.methods["dynamicCModules"].debug = "def";
  setLineNumber(55);    // compilenode member
  // call case 6: other requests
  var call1917 = callmethodChecked(var_util, "requiredModules", []);
  var var_imports = call1917;
  setLineNumber(1);    // compilenode method
  var func1918 = function(argcv) {    // method imports
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("xmodule");
    // imports is a simple accessor - elide try ... catch
    setLineNumber(55);    // compilenode identifier
    return var_imports;
  };
  func1918.paramCounts = [0];
  this.methods["imports"] = func1918;
  func1918.definitionLine = 1;
  func1918.definitionModule = "xmodule";
  this.methods["imports"].debug = "def";
  setLineNumber(388);    // compilenode array
  var array1919 = new PrimitiveGraceList([]);
  var var_methodtypes = array1919;
  setLineNumber(1);    // compilenode method
  var func1920 = function(argcv) {    // method methodtypes
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("xmodule");
    // methodtypes is a simple accessor - elide try ... catch
    setLineNumber(388);    // compilenode identifier
    return var_methodtypes;
  };
  func1920.paramCounts = [0];
  this.methods["methodtypes"] = func1920;
  func1920.definitionLine = 1;
  func1920.definitionModule = "xmodule";
  setLineNumber(1);    // compilenode method
  var func1921 = function(argcv) {    // method methodtypes:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("xmodule");
    var_methodtypes = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func1921.paramCounts = [1];
  this.methods["methodtypes:=(1)"] = func1921;
  func1921.definitionLine = 1;
  func1921.definitionModule = "xmodule";
  this.methods["methodtypes"].debug = "var";
  setLineNumber(389);    // compilenode object
  var obj1922 = Grace_allocObject(null, "typeVisitor");
  obj1922.definitionModule = "xmodule";
  obj1922.definitionLine = 389;
  obj1922.outer = this;
  var reader_xmodule_outer1923 = function() {
    return this.outer;
  };
  obj1922.methods["outer"] = reader_xmodule_outer1923;
  var obj_init_1922 = function() {
    var origSuperDepth = superDepth;
    superDepth = obj1922;
    var func1924 = function(argcv) {    // method visitTypeLiteral(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_lit = arguments[curarg];
      curarg++;
      setModuleName("xmodule");
      setLineNumber(393);    // compilenode member
      // call case 6: other requests
      var call1927 = callmethodChecked(var_lit, "methods", []);
      var block1928 = new GraceBlock(this, 393, 1);
      setLineNumber(1);    // compilenode identifier
      block1928.real = function(var_meth) {
        setLineNumber(394);    // compilenode string
        var string1929 = new GraceString(" ");
        // call case 4: self request
        onSelf = true;
        var call1932 = callmethodChecked(this, "literalCount", []);
        var string1934 = new GraceString("");
        var opresult1936 = callmethodChecked(string1934, "++(1)", [1], call1932);
        var opresult1938 = callmethodChecked(opresult1936, "++(1)", [1], string1929);
        var var_mtstr = opresult1938;
        setLineNumber(395);    // compilenode member
        // call case 6: other requests
        var call1941 = callmethodChecked(var_meth, "signature", []);
        var block1942 = new GraceBlock(this, 395, 1);
        setLineNumber(1);    // compilenode identifier
        block1942.real = function(var_part) {
          setLineNumber(396);    // compilenode member
          // call case 6: other requests
          var call1944 = callmethodChecked(var_part, "name", []);
          var opresult1947 = callmethodChecked(var_mtstr, "++(1)", [1], call1944);
          var_mtstr = opresult1947;
          var if1948 = GraceDone;
          setLineNumber(397);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call1952 = callmethodChecked(var_part, "params", []);
          var call1953 = callmethodChecked(call1952, "size", []);
          var opresult1955 = callmethodChecked(call1953, ">(1)", [1], new GraceNum(0));
          if (Grace_isTrue(opresult1955)) {
            setLineNumber(398);    // compilenode string
            var string1956 = new GraceString("(");
            var opresult1959 = callmethodChecked(var_mtstr, "++(1)", [1], string1956);
            var_mtstr = opresult1959;
            setLineNumber(399);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call1963 = callmethodChecked(var_part, "params", []);
            var call1964 = callmethodChecked(call1963, "indices", []);
            var block1965 = new GraceBlock(this, 399, 1);
            setLineNumber(1);    // compilenode identifier
            block1965.real = function(var_pnr) {
              setLineNumber(400);    // compilenode identifier
              // call case 6: other requests
              // call case 6: other requests
              var call1968 = callmethodChecked(var_part, "params", []);
              var call1969 = callmethodChecked(call1968, "at(1)", [1], var_pnr);
              var var_p = call1969;
              var if1970 = GraceDone;
              setLineNumber(401);    // compilenode member
              // call case 6: other requests
              var call1973 = callmethodChecked(var_p, "dtype", []);
              var opresult1975 = callmethodChecked(call1973, "\u2260(1)", [1], GraceFalse);
              if (Grace_isTrue(opresult1975)) {
                setLineNumber(402);    // compilenode num
                // call case 6: other requests
                var call1977 = callmethodChecked(var_p, "toGrace(1)", [1], new GraceNum(1));
                var opresult1980 = callmethodChecked(var_mtstr, "++(1)", [1], call1977);
                var_mtstr = opresult1980;
                if1970 = GraceDone;
              } else {
                var if1981 = GraceDone;
                setLineNumber(405);    // compilenode member
                // call case 6: other requests
                var call1983 = callmethodChecked(var_p, "wildcard", []);
                if (Grace_isTrue(call1983)) {
                  setLineNumber(406);    // compilenode string
                  var string1984 = new GraceString("_");
                  var opresult1987 = callmethodChecked(var_mtstr, "++(1)", [1], string1984);
                  var_mtstr = opresult1987;
                  if1981 = GraceDone;
                } else {
                  setLineNumber(408);    // compilenode member
                  // call case 6: other requests
                  var call1989 = callmethodChecked(var_p, "value", []);
                  var opresult1992 = callmethodChecked(var_mtstr, "++(1)", [1], call1989);
                  var_mtstr = opresult1992;
                  if1981 = GraceDone;
                }
                setLineNumber(410);    // compilenode member
                // call case 6: other requests
                // call case 6: other requests
                var call1995 = callmethodChecked(var_ast, "unknownType", []);
                var call1996 = callmethodChecked(call1995, "value", []);
                var string1998 = new GraceString(" : ");
                var opresult2001 = callmethodChecked(var_mtstr, "++(1)", [1], string1998);
                var opresult2003 = callmethodChecked(opresult2001, "++(1)", [1], call1996);
                var_mtstr = opresult2003;
                var if2004 = GraceDone;
                setLineNumber(411);    // compilenode member
                // call case 6: other requests
                var call2006 = callmethodChecked(var_p, "generics", []);
                var opresult2009 = callmethodChecked(GraceFalse, "\u2260(1)", [1], call2006);
                if (Grace_isTrue(opresult2009)) {
                  setLineNumber(412);    // compilenode string
                  var string2010 = new GraceString("<");
                  var opresult2013 = callmethodChecked(var_mtstr, "++(1)", [1], string2010);
                  var_mtstr = opresult2013;
                  setLineNumber(413);    // compilenode member
                  // call case 6: other requests
                  // call case 6: other requests
                  var call2018 = callmethodChecked(var_p, "generics", []);
                  var call2019 = callmethodChecked(call2018, "size", []);
                  var diff2021 = callmethodChecked(call2019, "-(1)", [1], new GraceNum(1));
                  var opresult2024 = callmethodChecked(new GraceNum(1), "..(1)", [1], diff2021);
                  var block2025 = new GraceBlock(this, 413, 1);
                  setLineNumber(1);    // compilenode identifier
                  block2025.real = function(var_ix) {
                    setLineNumber(414);    // compilenode num
                    // call case 6: other requests
                    // call case 6: other requests
                    // call case 6: other requests
                    var call2029 = callmethodChecked(var_p, "generics", []);
                    var call2030 = callmethodChecked(call2029, "at(1)", [1], var_ix);
                    var call2031 = callmethodChecked(call2030, "toGrace(1)", [1], new GraceNum(1));
                    var opresult2034 = callmethodChecked(var_mtstr, "++(1)", [1], call2031);
                    var_mtstr = opresult2034;
                    return GraceDone;
                  };
                  // call case 5: prelude request
                  var call2035 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], opresult2024, block2025);
                  setLineNumber(416);    // compilenode string
                  var string2036 = new GraceString(">");
                  // call case 6: other requests
                  // call case 6: other requests
                  // call case 6: other requests
                  var call2041 = callmethodChecked(var_p, "generics", []);
                  var call2042 = callmethodChecked(call2041, "last", []);
                  var call2043 = callmethodChecked(call2042, "toGrace(1)", [1], new GraceNum(1));
                  var opresult2046 = callmethodChecked(var_mtstr, "++(1)", [1], call2043);
                  var opresult2048 = callmethodChecked(opresult2046, "++(1)", [1], string2036);
                  var_mtstr = opresult2048;
                  if2004 = GraceDone;
                }
                if1970 = if2004;
              }
              var if2049 = GraceDone;
              setLineNumber(419);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              var call2052 = callmethodChecked(var_part, "params", []);
              var call2053 = callmethodChecked(call2052, "size", []);
              var opresult2056 = callmethodChecked(var_pnr, "<(1)", [1], call2053);
              if (Grace_isTrue(opresult2056)) {
                setLineNumber(420);    // compilenode string
                var string2057 = new GraceString(", ");
                var opresult2060 = callmethodChecked(var_mtstr, "++(1)", [1], string2057);
                var_mtstr = opresult2060;
                if2049 = GraceDone;
              }
              return if2049;
            };
            // call case 5: prelude request
            var call2061 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1964, block1965);
            setLineNumber(423);    // compilenode string
            var string2062 = new GraceString(")");
            var opresult2065 = callmethodChecked(var_mtstr, "++(1)", [1], string2062);
            var_mtstr = opresult2065;
            if1948 = GraceDone;
          }
          return if1948;
        };
        // call case 5: prelude request
        var call2066 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1941, block1942);
        var if2067 = GraceDone;
        setLineNumber(426);    // compilenode member
        // call case 6: other requests
        var call2070 = callmethodChecked(var_meth, "rtype", []);
        var opresult2072 = callmethodChecked(call2070, "\u2260(1)", [1], GraceFalse);
        if (Grace_isTrue(opresult2072)) {
          setLineNumber(427);    // compilenode num
          // call case 6: other requests
          // call case 6: other requests
          var call2075 = callmethodChecked(var_meth, "rtype", []);
          var call2076 = callmethodChecked(call2075, "toGrace(1)", [1], new GraceNum(1));
          var string2078 = new GraceString(" -> ");
          var opresult2081 = callmethodChecked(var_mtstr, "++(1)", [1], string2078);
          var opresult2083 = callmethodChecked(opresult2081, "++(1)", [1], call2076);
          var_mtstr = opresult2083;
          if2067 = GraceDone;
        }
        setLineNumber(429);    // compilenode identifier
        // call case 6: other requests
        var call2085 = callmethodChecked(var_methodtypes, "push(1)", [1], var_mtstr);
        return call2085;
      };
      // call case 5: prelude request
      var call2086 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1927, block1928);
      setLineNumber(431);    // compilenode identifier
      return GraceFalse;
    };
    func1924.paramCounts = [1];
    obj1922.methods["visitTypeLiteral(1)"] = func1924;
    func1924.definitionLine = 392;
    func1924.definitionModule = "xmodule";
    var func2087 = function(argcv) {    // method visitOp(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_op = arguments[curarg];
      curarg++;
      setModuleName("xmodule");
      var if2088 = GraceDone;
      setLineNumber(434);    // compilenode string
      var string2089 = new GraceString("|");
      // call case 6: other requests
      var call2092 = callmethodChecked(var_op, "value", []);
      var opresult2094 = callmethodChecked(call2092, "==(1)", [1], string2089);
      var string2096 = new GraceString("&");
      // call case 6: other requests
      var call2099 = callmethodChecked(var_op, "value", []);
      var opresult2101 = callmethodChecked(call2099, "==(1)", [1], string2096);
      var opresult2103 = callmethodChecked(opresult2101, "||(1)", [1], opresult2094);
      if (Grace_isTrue(opresult2103)) {
        setLineNumber(435);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call2106 = callmethodChecked(var_op, "left", []);
        var call2107 = callmethodChecked(call2106, "kind", []);
        var var_leftkind = call2107;
        setLineNumber(436);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call2110 = callmethodChecked(var_op, "right", []);
        var call2111 = callmethodChecked(call2110, "kind", []);
        var var_rightkind = call2111;
        var if2112 = GraceDone;
        setLineNumber(437);    // compilenode string
        var string2113 = new GraceString("member");
        var opresult2116 = callmethodChecked(var_leftkind, "==(1)", [1], string2113);
        var string2118 = new GraceString("identifier");
        var opresult2121 = callmethodChecked(var_leftkind, "==(1)", [1], string2118);
        var opresult2123 = callmethodChecked(opresult2121, "||(1)", [1], opresult2116);
        if (Grace_isTrue(opresult2123)) {
          setLineNumber(438);    // compilenode num
          // call case 6: other requests
          // call case 6: other requests
          var call2126 = callmethodChecked(var_op, "left", []);
          var call2127 = callmethodChecked(call2126, "toGrace(1)", [1], new GraceNum(0));
          var var_typeIdent = call2127;
          setLineNumber(439);    // compilenode string
          var string2129 = new GraceString("");
          var string2132 = new GraceString(" ");
          // call case 6: other requests
          var call2135 = callmethodChecked(var_op, "value", []);
          var string2137 = new GraceString("");
          var opresult2139 = callmethodChecked(string2137, "++(1)", [1], call2135);
          var opresult2141 = callmethodChecked(opresult2139, "++(1)", [1], string2132);
          var opresult2143 = callmethodChecked(opresult2141, "++(1)", [1], var_typeIdent);
          var opresult2145 = callmethodChecked(opresult2143, "++(1)", [1], string2129);
          // call case 6: other requests
          var call2146 = callmethodChecked(var_methodtypes, "push(1)", [1], opresult2145);
          if2112 = call2146;
        } else {
          var if2147 = GraceDone;
          setLineNumber(440);    // compilenode string
          var string2148 = new GraceString("typeliteral");
          var opresult2151 = callmethodChecked(var_leftkind, "==(1)", [1], string2148);
          if (Grace_isTrue(opresult2151)) {
            setLineNumber(441);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call2155 = callmethodChecked(this, "literalCount", []);
            var opresult2157 = callmethodChecked(call2155, "+(1)", [1], new GraceNum(1));
            // call case 4: self request
            onSelf = true;
            var call2158 = callmethodChecked(this, "literalCount:=(1)", [1], opresult2157);
            setLineNumber(442);    // compilenode string
            var string2160 = new GraceString("");
            // call case 4: self request
            onSelf = true;
            var call2163 = callmethodChecked(this, "literalCount", []);
            var string2165 = new GraceString(" ");
            // call case 6: other requests
            var call2168 = callmethodChecked(var_op, "value", []);
            var string2170 = new GraceString("");
            var opresult2172 = callmethodChecked(string2170, "++(1)", [1], call2168);
            var opresult2174 = callmethodChecked(opresult2172, "++(1)", [1], string2165);
            var opresult2176 = callmethodChecked(opresult2174, "++(1)", [1], call2163);
            var opresult2178 = callmethodChecked(opresult2176, "++(1)", [1], string2160);
            // call case 6: other requests
            var call2179 = callmethodChecked(var_methodtypes, "push(1)", [1], opresult2178);
            setLineNumber(443);    // compilenode member
            // call case 6: other requests
            var call2182 = callmethodChecked(var_op, "left", []);
            // call case 4: self request
            onSelf = true;
            var call2183 = callmethodChecked(this, "visitTypeLiteral(1)", [1], call2182);
            if2147 = call2183;
          } else {
            var if2184 = GraceDone;
            setLineNumber(444);    // compilenode string
            var string2185 = new GraceString("op");
            var opresult2188 = callmethodChecked(var_leftkind, "==(1)", [1], string2185);
            if (Grace_isTrue(opresult2188)) {
              setLineNumber(445);    // compilenode member
              // call case 6: other requests
              var call2191 = callmethodChecked(var_op, "left", []);
              // call case 4: self request
              onSelf = true;
              var call2192 = callmethodChecked(this, "visitOp(1)", [1], call2191);
              if2184 = call2192;
            }
            if2147 = if2184;
          }
          if2112 = if2147;
        }
        var if2193 = GraceDone;
        setLineNumber(447);    // compilenode string
        var string2194 = new GraceString("member");
        var opresult2197 = callmethodChecked(var_rightkind, "==(1)", [1], string2194);
        var string2199 = new GraceString("identifier");
        var opresult2202 = callmethodChecked(var_rightkind, "==(1)", [1], string2199);
        var opresult2204 = callmethodChecked(opresult2202, "||(1)", [1], opresult2197);
        if (Grace_isTrue(opresult2204)) {
          setLineNumber(448);    // compilenode num
          // call case 6: other requests
          // call case 6: other requests
          var call2207 = callmethodChecked(var_op, "right", []);
          var call2208 = callmethodChecked(call2207, "toGrace(1)", [1], new GraceNum(0));
          var var_typeIdent = call2208;
          setLineNumber(449);    // compilenode string
          var string2210 = new GraceString("");
          var string2213 = new GraceString(" ");
          // call case 6: other requests
          var call2216 = callmethodChecked(var_op, "value", []);
          var string2218 = new GraceString("");
          var opresult2220 = callmethodChecked(string2218, "++(1)", [1], call2216);
          var opresult2222 = callmethodChecked(opresult2220, "++(1)", [1], string2213);
          var opresult2224 = callmethodChecked(opresult2222, "++(1)", [1], var_typeIdent);
          var opresult2226 = callmethodChecked(opresult2224, "++(1)", [1], string2210);
          // call case 6: other requests
          var call2227 = callmethodChecked(var_methodtypes, "push(1)", [1], opresult2226);
          if2193 = call2227;
        } else {
          var if2228 = GraceDone;
          setLineNumber(450);    // compilenode string
          var string2229 = new GraceString("typeliteral");
          var opresult2232 = callmethodChecked(var_rightkind, "==(1)", [1], string2229);
          if (Grace_isTrue(opresult2232)) {
            setLineNumber(451);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call2236 = callmethodChecked(this, "literalCount", []);
            var opresult2238 = callmethodChecked(call2236, "+(1)", [1], new GraceNum(1));
            // call case 4: self request
            onSelf = true;
            var call2239 = callmethodChecked(this, "literalCount:=(1)", [1], opresult2238);
            setLineNumber(452);    // compilenode string
            var string2241 = new GraceString("");
            // call case 4: self request
            onSelf = true;
            var call2244 = callmethodChecked(this, "literalCount", []);
            var string2246 = new GraceString(" ");
            // call case 6: other requests
            var call2249 = callmethodChecked(var_op, "value", []);
            var string2251 = new GraceString("");
            var opresult2253 = callmethodChecked(string2251, "++(1)", [1], call2249);
            var opresult2255 = callmethodChecked(opresult2253, "++(1)", [1], string2246);
            var opresult2257 = callmethodChecked(opresult2255, "++(1)", [1], call2244);
            var opresult2259 = callmethodChecked(opresult2257, "++(1)", [1], string2241);
            // call case 6: other requests
            var call2260 = callmethodChecked(var_methodtypes, "push(1)", [1], opresult2259);
            setLineNumber(453);    // compilenode member
            // call case 6: other requests
            var call2263 = callmethodChecked(var_op, "right", []);
            // call case 4: self request
            onSelf = true;
            var call2264 = callmethodChecked(this, "visitTypeLiteral(1)", [1], call2263);
            if2228 = call2264;
          } else {
            var if2265 = GraceDone;
            setLineNumber(454);    // compilenode string
            var string2266 = new GraceString("op");
            var opresult2269 = callmethodChecked(var_rightkind, "==(1)", [1], string2266);
            if (Grace_isTrue(opresult2269)) {
              setLineNumber(455);    // compilenode member
              // call case 6: other requests
              var call2272 = callmethodChecked(var_op, "right", []);
              // call case 4: self request
              onSelf = true;
              var call2273 = callmethodChecked(this, "visitOp(1)", [1], call2272);
              if2265 = call2273;
            }
            if2228 = if2265;
          }
          if2193 = if2228;
        }
        if2088 = if2193;
      }
      setLineNumber(458);    // compilenode identifier
      return GraceFalse;
    };
    func2087.paramCounts = [1];
    obj1922.methods["visitOp(1)"] = func2087;
    func2087.definitionLine = 433;
    func2087.definitionModule = "xmodule";
    setLineNumber(390);    // compilenode identifier
    // call case 6: other requests
    var call2275 = callmethodChecked(var_ast, "baseVisitor$object(1)", [0, 1], this);
    obj1922.superobj = call2275;
    if (call2275.data) obj1922.data = call2275.data;
    if (call2275.hasOwnProperty('_value'))
        obj1922._value = call2275._value;
    setLineNumber(391);    // compilenode num
    obj1922.data["literalCount"] = new GraceNum(1);
    var reader_xmodule_literalCount2276 = function() {
      return this.data["literalCount"];
    };
    obj1922.methods["literalCount"] = reader_xmodule_literalCount2276;
    obj1922.data["literalCount"] = new GraceNum(1);
    var writer_xmodule_literalCount2276 = function(argcv, o) {
      this.data["literalCount"] = o;
      return GraceDone;
    };
    obj1922.methods["literalCount:=(1)"] = writer_xmodule_literalCount2276;
    reader_xmodule_literalCount2276.confidential = true;
    writer_xmodule_literalCount2276.confidential = true;
    obj1922.mutable = true;
    superDepth = origSuperDepth;
  };
  obj_init_1922.apply(obj1922, []);
  var var_typeVisitor = obj1922;
  setLineNumber(1);    // compilenode method
  var func2277 = function(argcv) {    // method typeVisitor
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("xmodule");
    // typeVisitor is a simple accessor - elide try ... catch
    setLineNumber(389);    // compilenode identifier
    return var_typeVisitor;
  };
  func2277.paramCounts = [0];
  this.methods["typeVisitor"] = func2277;
  func2277.definitionLine = 1;
  func2277.definitionModule = "xmodule";
  this.methods["typeVisitor"].debug = "def";
  return this;
}
gracecode_xmodule.imports = ['ast', 'errormessages', 'io', 'mirrors', 'sys', 'unixFilePath', 'util'];
if (typeof gctCache !== "undefined")
  gctCache['xmodule'] = "classes:\nconfidential:\n addFreshMethod(1)to(1)for(1)\n addFreshMethodsOf(1)to(1)\n addTransitiveImports(5)\n checkimport(5)\n compileModule(1)inFile(1)forDialect(1)atRange(2)\n generateGctForModule(1)\n parseGCT(1)sourceDir(1)\n writeGCT(2)\nfresh-methods:\nmethodtypes-of:LinePos:\n 1 line -> Number\n 1 linePos -> Number\nmethodtypes-of:RangeSuggestions:\n 1 line -> Number\n 1 posEnd -> Number\n 1 posStart -> Number\n 1 suggestions -> Done\nmodules:\n ast\n errormessages\n identifierKinds\n io\n mirrors\n sys\n unixFilePath\n util\npath:\n xmodule\npublic:\n LinePos\n RangeSuggestions\n buildGctFor(1)\n builtInModules\n checkDialect(1)\n checkExternalModule(1)\n doAstCheck(1)\n doParseCheck(1)\n dynamicCModules\n gctAsString(1)\n parseGCT(1)\n writeGctForModule(1)\ntypes:\n LinePos\n RangeSuggestions\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["xmodule"] = [
    "#pragma ExtendedLineups",
    "import \"io\" as io",
    "import \"sys\" as sys",
    "import \"util\" as util",
    "import \"ast\" as ast",
    "import \"mirrors\" as mirrors",
    "import \"errormessages\" as errormessages",
    "import \"unixFilePath\" as filePath",
    "",
    "def gctCache = emptyDictionary",
    "def keyCompare = { a, b -> a.key.compare(b.key) }",
    "",
    "method builtInModules {",
    "    if (util.target == \"c\") then {",
    "        list [  \"sys\",",
    "                \"io\",",
    "                \"imports\",",
    "                \"StandardPrelude\",",
    "                \"standardGrace\",",
    "                \"collectionsPrelude\" ]",
    "    } else {",
    "        list [  \"imports\",",
    "                \"io\",",
    "                \"mirrors\",",
    "                \"sys\",",
    "                \"unicode\",",
    "                \"util\" ]",
    "    }",
    "}",
    "",
    "def currentDialect = object {",
    "    var name is public := \"standardGrace\"",
    "    var moduleObject is public := _prelude",
    "    // TODO: this isn't quite right: should be the prelude",
    "    // on the GRACE_MODULE_PATH of this compilation",
    "    var hasParseChecker is public := false",
    "    var hasAstChecker is public := false",
    "    var hasAtStart is public := false",
    "    var hasAtEnd is public := false",
    "}",
    "",
    "type LinePos = {",
    "    line -> Number",
    "    linePos -> Number",
    "}",
    "",
    "type RangeSuggestions = {",
    "    line -> Number",
    "    posStart -> Number",
    "    posEnd -> Number",
    "    suggestions",
    "}",
    "",
    "def dynamicCModules is public = set [\"mirrors\", \"curl\", \"unicode\"]",
    "def imports = util.requiredModules",
    "",
    "method checkDialect(moduleObject) {",
    "    moduleObject.value.do { node ->",
    "        if (node.isDialect) then {",
    "            def nm = node.moduleName",
    "            currentDialect.name := nm",
    "            checkExternalModule(node)",
    "            util.log 50 verbose \"loading dialect for checkers.\"",
    "            try {",
    "                def dobj = mirrors.loadDynamicModule(node.path)",
    "                currentDialect.moduleObject := dobj",
    "                def mths = mirrors.reflect(dobj).methods",
    "                for (mths) do { m ->",
    "                    if (m.name == \"checker(1)\") then {",
    "                        currentDialect.hasParseChecker := true",
    "                    }",
    "                    if (m.name == \"astChecker(1)\") then {",
    "                        currentDialect.hasAstChecker := true",
    "                    }",
    "                    if (m.name == \"atModuleEnd(1)\") then {",
    "                        currentDialect.hasAtEnd := true",
    "                    }",
    "                    if (m.name == \"atModuleStart(1)\") then {",
    "                        currentDialect.hasAtStart := true",
    "                    }",
    "                }",
    "            } catch { e : RuntimeError ->",
    "                util.setPosition(node.line, 1)",
    "                e.printBacktrace",
    "                errormessages.error \"Dialect error: dialect '{nm}' failed to load.\\n{e}.\"",
    "                    atLine(node.line)",
    "            }",
    "            return  // there is at most one dialect",
    "        }",
    "    }",
    "}",
    "",
    "method doParseCheck(moduleObj) {",
    "    if (currentDialect.hasParseChecker.not) then { return }",
    "    def CheckerFailure = Exception.refine \"CheckerFailure\"",
    "    try {",
    "        currentDialect.moduleObject.checker(moduleObj.value)",
    "    } catch { e : CheckerFailure ->",
    "        match (e.data)",
    "            case { lp : LinePos ->",
    "                errormessages.error \"{e.exception}: {e.message}.\"",
    "                    atPosition(e.data.line, e.data.linePos)",
    "            }",
    "            case { rs : RangeSuggestions ->",
    "                errormessages.error(\"{e.exception}: {e.message}.\")",
    "                    atRange(rs.line, rs.posStart, rs.posEnd)",
    "                    withSuggestions(rs.suggestions)",
    "            }",
    "            case { _ ->",
    "                errormessages.error \"{e.exception}: {e.message}.\" ",
    "                    atLine(util.linenum)",
    "            }",
    "    } catch { e : Exception ->      // some unknwown Grace exception",
    "        e.printBacktrace",
    "        errormessages.error(\"Unexpected exception raised by parse checker for \" ++",
    "            \"dialect '{currentDialect.name}'.\\n{e.exception}: {e.message}\")",
    "    }",
    "}",
    "",
    "method doAstCheck(moduleObj) {",
    "    if (currentDialect.hasAstChecker.not) then { return }",
    "    def CheckerFailure = Exception.refine \"CheckerFailure\"",
    "    try {",
    "        currentDialect.moduleObject.astChecker(moduleObj)",
    "    } catch { e : CheckerFailure ->",
    "        match (e.data)",
    "            case { lp : LinePos ->",
    "                errormessages.error \"{e.exception}: {e.message}.\"",
    "                    atPosition(e.data.line, e.data.linePos)",
    "            }",
    "            case { rs : RangeSuggestions ->",
    "                errormessages.error(\"{e.exception}: {e.message}.\")",
    "                    atRange(rs.line, rs.posStart, rs.posEnd)",
    "                    withSuggestions(rs.suggestions)",
    "            }",
    "            case { _ -> }",
    "        errormessages.error(\"{e.exception}: {e.message}.\")atPosition(util.linenum, 0)",
    "    } catch { e : Exception ->      // some unknwown Grace exception",
    "        e.printBacktrace",
    "        errormessages.error(\"Unexpected exception raised by AST checker for \" ++",
    "            \"dialect '{currentDialect.name}'.\\n{e.exception}: {e.message}\")",
    "    }",
    "}",
    "",
    "method checkExternalModule(node) {",
    "    checkimport(node.moduleName, node.path,",
    "        node.line, node.linePos, node.isDialect)",
    "}",
    "",
    "method checkimport(nm, pathname, line, linePos, isDialect) is confidential {",
    "    if (builtInModules.contains(nm)) then {",
    "        imports.other.add(nm)",
    "        return",
    "    }",
    "    if (imports.isAlready(nm)) then {",
    "        return",
    "    }",
    "    var noSource := false",
    "    // noSource implies that the module is written in native code, like \"unicode.c\"",
    "",
    "    if (prelude.inBrowser) then {",
    "        util.file(nm ++ \".js\") onPath \"\" otherwise { _ ->",
    "            errormessages.error \"Please compile module {nm} before importing it.\"",
    "                atRange(line, linePos, linePos + nm.size - 1)",
    "        }",
    "        return",
    "    }",
    "    def gmp = sys.environ.at \"GRACE_MODULE_PATH\"",
    "    def pn = filePath.fromString(pathname).setExtension \"grace\"",
    "    def moduleFileGrace = util.file(pn) on(util.sourceDir)",
    "                                orPath (gmp) otherwise { l ->",
    "        noSource := true",
    "        pn",
    "    }",
    "    var moduleFileGct := moduleFileGrace.copy.setExtension \".gct\"",
    "    if (util.sourceDir != util.outDir) then {",
    "        moduleFileGct.setDirectory(util.outDir)",
    "    }",
    "    if (util.target == \"c\") then {",
    "        def moduleFileGso = moduleFileGct.copy.setExtension \".gso\"",
    "        def moduleFileGcn = moduleFileGct.copy.setExtension \".gcn\"",
    "        def needsDynamic = isDialect || util.importDynamic ||",
    "            util.dynamicModule || { dynamicCModules.contains(nm) }",
    "        util.log 100 verbose \"needsDynamic for {nm} is {needsDynamic}.\"",
    "        var binaryFile",
    "        var importsSet",
    "        if (needsDynamic) then {",
    "            dynamicCModules.add(nm)",
    "            binaryFile := moduleFileGso",
    "            importsSet := imports.other",
    "        } else {",
    "            binaryFile := moduleFileGcn",
    "            importsSet := imports.static",
    "        }",
    "        if (noSource && binaryFile.exists.not) then {",
    "            binaryFile := util.file(binaryFile) onPath (gmp) otherwise { l ->",
    "                errormessages.error(",
    "                    \"I can't find {pn.shortName} or {binaryFile.shortName}; looked in {l}.\")",
    "                    atLine(line)",
    "            }",
    "            moduleFileGct.setDirectory(binaryFile.directory)",
    "            if (moduleFileGct.exists.not) then {",
    "                errormessages.error(\"I found {binaryFile}, but neither \" ++",
    "                    \"{moduleFileGct} nor source.\")",
    "                    atLine(line)",
    "            }",
    "        }",
    "        if (needsDynamic.not) then {",
    "            imports.linkfiles.add(binaryFile.asString)",
    "        }",
    "        util.log 100 verbose \"linkfiles is {imports.linkfiles}.\"",
    "        if (binaryFile.exists && {",
    "            moduleFileGct.exists } && {",
    "                noSource || { binaryFile.newer(moduleFileGrace) }",
    "            }",
    "        ) then {",
    "        } else {",
    "            if ( binaryFile.exists.not ) then {",
    "                util.log 60 verbose \"{binaryFile} does not exist\"",
    "            } elseif { binaryFile.newer(moduleFileGrace).not } then {",
    "                util.log 60 verbose \"{binaryFile} not newer than {moduleFileGrace}\"",
    "            }",
    "            compileModule (nm) inFile (moduleFileGrace.asString) ",
    "                forDialect (isDialect) atRange (line, linePos)",
    "        }",
    "        importsSet.add(nm)",
    "    } elseif { util.target == \"js\" } then {",
    "        def moduleFileJs = moduleFileGct.copy.setExtension \".js\"",
    "        if (moduleFileJs.exists && {",
    "            moduleFileGct.exists } && {",
    "                noSource || {",
    "                    moduleFileJs.newer(moduleFileGrace)",
    "                }",
    "            }",
    "        ) then {",
    "        } else {",
    "            if (moduleFileJs.newer(moduleFileGrace).not) then {",
    "                util.log 60 verbose \"{moduleFileJs} not newer than {moduleFileGrace}\"",
    "            }",
    "            if (moduleFileGrace.exists) then {",
    "                compileModule (nm) inFile (moduleFileGrace.asString) ",
    "                    forDialect (isDialect) atRange (line, linePos)",
    "            } else {",
    "                def thing = if (isDialect) then {\"dialect\"} else {\"module\"}",
    "                errormessages.error \"Can't find {thing} {nm}\"",
    "                    atLine(line)",
    "            }",
    "        }",
    "        imports.other.add(nm)",
    "    }",
    "    addTransitiveImports(moduleFileGct.directory, isDialect, nm, line, linePos)",
    "}",
    "",
    "method addTransitiveImports(directory, isDialect, moduleName, line, linePos) is confidential {",
    "    def gctData = gctCache.at(moduleName) ifAbsent {",
    "        parseGCT(moduleName) sourceDir(directory)",
    "    }",
    "    if (gctData.containsKey \"dialect\") then {",
    "        def dName = gctData.at \"dialect\" .first",
    "        checkimport(dName, dName, line, linePos, true)",
    "    }",
    "    def importedModules = gctData.at \"modules\" ifAbsent { emptySequence }",
    "    def m = util.modname",
    "    if (importedModules.contains(m)) then {",
    "        errormessages.error(\"Cyclic import detected: '{m}' is imported \"",
    "            ++ \"by '{moduleName}', which is imported by '{m}' (and so on).\")",
    "            atLine(line)",
    "    }",
    "    importedModules.do { each ->",
    "        checkimport(each, each, line, linePos, isDialect)",
    "    }",
    "}",
    "",
    "method compileModule (nm) inFile (sourceFile)",
    "        forDialect (isDialect) atRange (line, linePos) is confidential {",
    "    if ( prelude.inBrowser || { util.recurse.not } ) then {",
    "        errormessages.error \"Please compile module {nm} before importing it.\"",
    "            atLine(line)",
    "    }",
    "    var slashed := false",
    "    for (sys.argv.first) do {letter ->",
    "        if(letter == \"/\") then {",
    "            slashed := true",
    "        }",
    "    }",
    "    var cmd",
    "    if (slashed) then {",
    "        cmd := io.realpath(sys.argv.first)",
    "    } else {",
    "        cmd := io.realpath \"{sys.execPath}/{sys.argv.first}\"",
    "    }",
    "    def cmdSz = cmd.size",
    "    if (cmd.substringFrom(cmdSz-2) to (cmdSz) == \".js\") then {",
    "        cmd := \"grace \\\"{cmd}\\\"\"",
    "    } else {",
    "        cmd := \"\\\"{cmd}\\\"\"",
    "    }",
    "    if (util.verbosity != util.defaultVerbosity) then {",
    "        cmd := cmd ++ \" --verbose {util.verbosity}\"",
    "    }",
    "    if (util.dirFlag) then {",
    "        cmd := cmd ++ \" --dir \" ++ util.outDir",
    "    }",
    "    if (false != util.vtag) then {",
    "        cmd := cmd ++ \" --vtag \" ++ util.vtag",
    "    }",
    "    if (util.target == \"c\") then {",
    "        if (util.dynamicModule || isDialect) then {",
    "            cmd := cmd ++ \" --dynamic-module\"",
    "        }",
    "        if (util.importDynamic) then {",
    "            cmd := cmd ++ \" --import-dynamic\"",
    "        }",
    "        cmd := cmd ++ \" -XNoMain\"",
    "    }",
    "    cmd := cmd ++ \" --gracelib \" ++ util.gracelibPath",
    "    cmd := cmd ++ util.commandLineExtensions",
    "    cmd := \"{cmd} --target {util.target} --noexec \\\"{sourceFile}\\\"\"",
    "    util.log 50 verbose \"executing sub-compile {cmd}\"",
    "    def exitCode = io.spawn(\"bash\", [\"-c\", cmd]).status",
    "    if (exitCode != 0) then {",
    "        errormessages.error \"Failed to compile imported module {nm} ({exitCode}).\"",
    "            atLine(line)",
    "    }",
    "}",
    "",
    "method parseGCT(moduleName) {",
    "    gctCache.at(moduleName) ifAbsent {",
    "        parseGCT(moduleName) sourceDir(util.outDir)",
    "    }",
    "}",
    "",
    "method parseGCT(moduleName) sourceDir(dir) is confidential {",
    "    def gctData = emptyDictionary",
    "    def sz = moduleName.size",
    "    def sought = filePath.fromString(moduleName).setExtension \".gct\"",
    "    def filename = util.file(sought) on(dir)",
    "      orPath(sys.environ.at \"GRACE_MODULE_PATH\") otherwise { l ->",
    "        util.log 80 verbose \"Can't find file {sought} for module {moduleName}; looked in {l}.\"",
    "        gctCache.at(moduleName) put(gctData)",
    "        return gctData",
    "    }",
    "    def tfp = io.open(filename, \"r\")",
    "    var key := \"\"",
    "    while {!tfp.eof} do {",
    "        def line = tfp.getline",
    "        if (line.size > 0) then {",
    "            if (line.at(1) != \" \") then {",
    "                key := line.substringFrom 1 to(line.size-1)",
    "                gctData.at(key) put [ ]",
    "            } else {",
    "                gctData.at(key).addLast(line.substringFrom 2 to(line.size))",
    "            }",
    "        }",
    "    }",
    "    tfp.close",
    "    gctCache.at(moduleName) put(gctData)",
    "    return gctData",
    "}",
    "",
    "method writeGCT(modname, dict) is confidential {",
    "    def fp = io.open(\"{util.outDir}{modname}.gct\", \"w\")",
    "    dict.bindings.asList.sortBy(keyCompare).do { b ->",
    "        fp.write \"{b.key}:\\n\"",
    "        b.value.asList.sort.do { v ->",
    "            fp.write \" {v}\\n\"",
    "        }",
    "    }",
    "    fp.close",
    "    gctCache.at(modname) put(dict)",
    "}",
    "",
    "method writeGctForModule(moduleObject) {",
    "    writeGCT(moduleObject.name, generateGctForModule(moduleObject))",
    "}",
    "",
    "method gctAsString(gctDict) {",
    "    var ret := \"\"",
    "    gctDict.bindings.asList.sortBy(keyCompare).do { b ->",
    "        ret := ret ++ \"{b.key}:\\n\"",
    "        b.value.asList.sort.do { v ->",
    "            ret := ret ++ \" {v}\\n\"",
    "        }",
    "    }",
    "    return ret",
    "}",
    "",
    "var methodtypes := [ ]",
    "def typeVisitor = object {",
    "    inherits ast.baseVisitor",
    "    var literalCount := 1",
    "    method visitTypeLiteral(lit) {",
    "        for (lit.methods) do { meth ->",
    "            var mtstr := \"{literalCount} \"",
    "            for (meth.signature) do { part ->",
    "                mtstr := mtstr ++ part.name",
    "                if (part.params.size > 0) then {",
    "                    mtstr := mtstr ++ \"(\"",
    "                    for (part.params.indices) do { pnr ->",
    "                        var p := part.params.at(pnr)",
    "                        if (p.dtype != false) then {",
    "                            mtstr := mtstr ++ p.toGrace(1)",
    "                        } else {",
    "                            // if parameter type not listed, give it type Unknown",
    "                            if(p.wildcard) then {",
    "                                mtstr := mtstr ++ \"_\"",
    "                            } else {",
    "                                mtstr := mtstr ++ p.value",
    "                            }",
    "                            mtstr := mtstr ++ \" : \" ++ ast.unknownType.value",
    "                            if (false != p.generics) then {",
    "                                mtstr := mtstr ++ \"<\"",
    "                                for (1..(p.generics.size - 1)) do {ix ->",
    "                                    mtstr := mtstr ++ p.generics.at(ix).toGrace(1)",
    "                                }",
    "                                mtstr := mtstr ++ p.generics.last.toGrace(1) ++ \">\"",
    "                            }",
    "                        }",
    "                        if (pnr < part.params.size) then {",
    "                            mtstr := mtstr ++ \", \"",
    "                        }",
    "                    }",
    "                    mtstr := mtstr ++ \")\"",
    "                }",
    "            }",
    "            if (meth.rtype != false) then {",
    "                mtstr := mtstr ++ \" -> \" ++ meth.rtype.toGrace(1)",
    "            }",
    "            methodtypes.push(mtstr)",
    "        }",
    "        return false",
    "    }",
    "    method visitOp(op) {",
    "        if ((op.value==\"&\") || (op.value==\"|\")) then {",
    "            def leftkind = op.left.kind",
    "            def rightkind = op.right.kind",
    "            if ((leftkind==\"identifier\") || (leftkind==\"member\")) then {",
    "                var typeIdent := op.left.toGrace(0)",
    "                methodtypes.push(\"{op.value} {typeIdent}\")",
    "            } elseif { leftkind==\"typeliteral\" } then {",
    "                literalCount := literalCount + 1",
    "                methodtypes.push(\"{op.value} {literalCount}\")",
    "                visitTypeLiteral(op.left)",
    "            } elseif { leftkind==\"op\" } then {",
    "                visitOp(op.left)",
    "            }",
    "            if ((rightkind==\"identifier\") || (rightkind==\"member\")) then {",
    "                var typeIdent := op.right.toGrace(0)",
    "                methodtypes.push(\"{op.value} {typeIdent}\")",
    "            } elseif { rightkind==\"typeliteral\" } then {",
    "                literalCount := literalCount + 1",
    "                methodtypes.push(\"{op.value} {literalCount}\")",
    "                visitTypeLiteral(op.right)",
    "            } elseif { rightkind==\"op\" } then {",
    "                visitOp(op.right)",
    "            }",
    "        }",
    "        return false",
    "    }",
    "}",
    "method generateGctForModule(moduleObject) is confidential {",
    "    def gct = buildGctFor(moduleObject)",
    "    addFreshMethodsOf (moduleObject) to (gct)",
    "    return gct",
    "}",
    "",
    "method buildGctFor(module) {",
    "    def gct = emptyDictionary",
    "    def classes = emptyList",
    "    def confidentials = emptyList",
    "    def meths = emptyList",
    "    def types = emptyList",
    "    var theDialect := false",
    "    module.parentsDo { p ->",
    "        meths.addAll(p.providedNames)",
    "    }",
    "    for (module.value) do { v->",
    "        if (v.kind == \"vardec\") then {",
    "            if (v.isReadable) then {",
    "                meths.push(v.name.value)",
    "            }",
    "            if (v.isWritable) then {",
    "                meths.push(v.name.value ++ \":=\")",
    "            }",
    "        } elseif {v.kind == \"method\"} then {",
    "            if (v.isPublic) then {",
    "                meths.push(v.nameString)",
    "            } else {",
    "                confidentials.push(v.nameString)",
    "            }",
    "        } elseif {v.kind == \"typedec\"} then {",
    "            if (v.isPublic) then {",
    "                meths.push(v.nameString)",
    "                types.push(v.name.value)",
    "                methodtypes := [ ]",
    "                v.accept(typeVisitor)",
    "                var typename := v.name.toGrace(0)",
    "                if (v.typeParams != false) then {",
    "                    typename := typename ++ v.typeParams",
    "                }",
    "                gct.at \"methodtypes-of:{typename}\" put(methodtypes)",
    "            } else {",
    "                confidentials.push(v.nameString)",
    "            }",
    "        } elseif {v.kind == \"defdec\"} then {",
    "            if (v.isPublic) then {",
    "                meths.push(v.nameString)",
    "            }",
    "            if (ast.findAnnotation(v, \"parent\")) then {",
    "                v.scope.elements.keysDo { m -> meths.push(m) }",
    "            }",
    "            if (v.returnsObject) then {",
    "                def ob = v.value",
    "                def obConstructors = [ ]",
    "                for (ob.value) do {nd->",
    "                    if (nd.isClass) then {",
    "                        def factMethNm = nd.nameString",
    "                        obConstructors.push(factMethNm)",
    "                        def exportedMethods = emptyList",
    "                        ob.scope.getScope(factMethNm).keysAndKindsDo { key, knd ->",
    "                            if (knd.forGct) then { exportedMethods.add(key) }",
    "                        }",
    "                        gct.at \"methods-of:{v.name.value}.{factMethNm}\"",
    "                            put(exportedMethods.sort)",
    "                    }",
    "                }",
    "                if (obConstructors.size > 0) then {",
    "                    gct.at \"constructors-of:{v.name.value}\"",
    "                        put(obConstructors)",
    "                    classes.push(v.name.value)",
    "                }",
    "            }",
    "        } elseif { v.kind == \"dialect\" } then {",
    "            theDialect := v.value",
    "        }",
    "    }",
    "    gct.at \"classes\" put(classes.sort)",
    "    gct.at \"confidential\" put(confidentials.sort)",
    "    gct.at \"modules\" put(module.imports.asList.sorted)",
    "    gct.at \"path\" put [module.name]",
    "    gct.at \"public\" put(meths.sort)",
    "    gct.at \"types\" put(types.sort)",
    "    if (false != theDialect) then {",
    "        gct.at \"dialect\" put [theDialect]",
    "    }",
    "    gct",
    "}",
    "",
    "method addFreshMethodsOf (moduleObject) to (gct) is confidential {",
    "    // adds information about the methods made available via fresh methods.",
    "    // This is done in a separate pass after public information is in the gct,",
    "    // because of the special treatment of prelude.clone",
    "    // TODO: doesn't this just duplicate what's in 'classes' ? No: 'classes'",
    "    // lists only classes declared inside a def'd object constructer.",
    "    def freshmeths = [ ]",
    "    for (moduleObject.value) do { node->",
    "        if (node.isClass) then {",
    "            addFreshMethod (node) to (freshmeths) for (gct)",
    "        }",
    "    }",
    "    gct.at \"fresh-methods\" put(freshmeths)",
    "}",
    "",
    "method addFreshMethod (node) to (freshlist) for (gct) is confidential {",
    "    def methName = node.nameString",
    "    freshlist.push(methName)",
    "    def freshMethExpression = node.body.last",
    "    if (freshMethExpression.isObject) then {",
    "        def exportedMethods = emptyList",
    "        freshMethExpression.scope.keysAndKindsDo { key, knd ->",
    "            if (knd.forGct) then { exportedMethods.add(key) }",
    "        }",
    "        gct.at \"fresh:{methName}\" put (exportedMethods.sort)",
    "    } elseif {freshMethExpression.isCall} then {",
    "        // this deals with the two special cases, defined in",
    "        // ast.callNode.returnsObject.  The freshMethExpression must",
    "        // be a request of self.copy or prelude.clone(_)",
    "        def requestedName = freshMethExpression.nameString",
    "        if (requestedName == \"copy\") then {",
    "            gct.at \"fresh:{methName}\" put(gct.at \"public\")",
    "        } elseif {requestedName == \"clone(1)\"} then {",
    "            def cloneArg = freshMethExpression.with.first.args.first",
    "            if (cloneArg.isSelf) then {",
    "                gct.at \"fresh:{methName}\" put(gct.at \"public\")",
    "            } else {",
    "                gct.at \"fresh:{methName}\"",
    "                    put(gct.at \"methods-of:{cloneArg.toGrace 0}\" isAbsent {",
    "                        ProgrammingError.raise (",
    "                            \"unrecognized fresh method tail-call:\\n\" ++",
    "                              freshMethExpression.pretty(0) ++ \"\\n\" ++",
    "                                \"Can't find methods-of:{cloneArg.toGrace 0} in gct.\" )",
    "                    } )",
    "            }",
    "        } else {",
    "            // if it's not a call or an object constructor, why is it labelled as fresh?",
    "            ProgrammingError.raise",
    "                \"unrecognized fresh method tail-call: {freshMethExpression.pretty(0)}\"",
    "        }",
    "    } else {",
    "        ProgrammingError.raise",
    "            \"fresh method result of an unexpected kind: {freshMethExpression.pretty(0)}\"",
    "    }",
    "}",
    "" ];
}
if (typeof global !== "undefined")
  global.gracecode_xmodule = gracecode_xmodule;
if (typeof window !== "undefined")
  window.gracecode_xmodule = gracecode_xmodule;
