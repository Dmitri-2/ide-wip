"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_compiler() {
  setModuleName("compiler");
  this.definitionModule = "compiler";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_compiler_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_compiler_outer0;
  setLineNumber(1);    // compilenode import
  // Import of ast as ast
  if (typeof gracecode_ast == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module ast'));
  var var_ast = do_import("ast", gracecode_ast);
  var func1 = function(argcv) {    // method ast
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("compiler");
    // ast is a simple accessor - elide try ... catch
    return var_ast;
  };
  func1.paramCounts = [0];
  this.methods["ast"] = func1;
  func1.definitionLine = 1;
  func1.definitionModule = "compiler";
  func1.debug = "import";
  func1.confidential = true;
  setModuleName("compiler");
  setLineNumber(2);    // compilenode import
  // Import of buildinfo as buildinfo
  if (typeof gracecode_buildinfo == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module buildinfo'));
  var var_buildinfo = do_import("buildinfo", gracecode_buildinfo);
  var func2 = function(argcv) {    // method buildinfo
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("compiler");
    // buildinfo is a simple accessor - elide try ... catch
    return var_buildinfo;
  };
  func2.paramCounts = [0];
  this.methods["buildinfo"] = func2;
  func2.definitionLine = 2;
  func2.definitionModule = "compiler";
  func2.debug = "import";
  func2.confidential = true;
  setModuleName("compiler");
  setLineNumber(3);    // compilenode import
  // Import of genc as genc
  if (typeof gracecode_genc == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module genc'));
  var var_genc = do_import("genc", gracecode_genc);
  var func3 = function(argcv) {    // method genc
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("compiler");
    // genc is a simple accessor - elide try ... catch
    return var_genc;
  };
  func3.paramCounts = [0];
  this.methods["genc"] = func3;
  func3.definitionLine = 3;
  func3.definitionModule = "compiler";
  func3.debug = "import";
  func3.confidential = true;
  setModuleName("compiler");
  setLineNumber(4);    // compilenode import
  // Import of genjs as genjs
  if (typeof gracecode_genjs == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module genjs'));
  var var_genjs = do_import("genjs", gracecode_genjs);
  var func4 = function(argcv) {    // method genjs
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("compiler");
    // genjs is a simple accessor - elide try ... catch
    return var_genjs;
  };
  func4.paramCounts = [0];
  this.methods["genjs"] = func4;
  func4.definitionLine = 4;
  func4.definitionModule = "compiler";
  func4.debug = "import";
  func4.confidential = true;
  setModuleName("compiler");
  setLineNumber(5);    // compilenode import
  // Import of identifierresolution as identifierresolution
  if (typeof gracecode_identifierresolution == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module identifierresolution'));
  var var_identifierresolution = do_import("identifierresolution", gracecode_identifierresolution);
  var func5 = function(argcv) {    // method identifierresolution
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("compiler");
    // identifierresolution is a simple accessor - elide try ... catch
    return var_identifierresolution;
  };
  func5.paramCounts = [0];
  this.methods["identifierresolution"] = func5;
  func5.definitionLine = 5;
  func5.definitionModule = "compiler";
  func5.debug = "import";
  func5.confidential = true;
  setModuleName("compiler");
  setLineNumber(6);    // compilenode import
  // Import of io as io
  if (typeof gracecode_io == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module io'));
  var var_io = do_import("io", gracecode_io);
  var func6 = function(argcv) {    // method io
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("compiler");
    // io is a simple accessor - elide try ... catch
    return var_io;
  };
  func6.paramCounts = [0];
  this.methods["io"] = func6;
  func6.definitionLine = 6;
  func6.definitionModule = "compiler";
  func6.debug = "import";
  func6.confidential = true;
  setModuleName("compiler");
  setLineNumber(7);    // compilenode import
  // Import of lexer as lexer
  if (typeof gracecode_lexer == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module lexer'));
  var var_lexer = do_import("lexer", gracecode_lexer);
  var func7 = function(argcv) {    // method lexer
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("compiler");
    // lexer is a simple accessor - elide try ... catch
    return var_lexer;
  };
  func7.paramCounts = [0];
  this.methods["lexer"] = func7;
  func7.definitionLine = 7;
  func7.definitionModule = "compiler";
  func7.debug = "import";
  func7.confidential = true;
  setModuleName("compiler");
  setLineNumber(8);    // compilenode import
  // Import of mirrors as mirrors
  if (typeof gracecode_mirrors == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module mirrors'));
  var var_mirrors = do_import("mirrors", gracecode_mirrors);
  var func8 = function(argcv) {    // method mirrors
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("compiler");
    // mirrors is a simple accessor - elide try ... catch
    return var_mirrors;
  };
  func8.paramCounts = [0];
  this.methods["mirrors"] = func8;
  func8.definitionLine = 8;
  func8.definitionModule = "compiler";
  func8.debug = "import";
  func8.confidential = true;
  setModuleName("compiler");
  setLineNumber(9);    // compilenode import
  // Import of parser as parser
  if (typeof gracecode_parser == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module parser'));
  var var_parser = do_import("parser", gracecode_parser);
  var func9 = function(argcv) {    // method parser
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("compiler");
    // parser is a simple accessor - elide try ... catch
    return var_parser;
  };
  func9.paramCounts = [0];
  this.methods["parser"] = func9;
  func9.definitionLine = 9;
  func9.definitionModule = "compiler";
  func9.debug = "import";
  func9.confidential = true;
  setModuleName("compiler");
  setLineNumber(10);    // compilenode import
  // Import of sys as sys
  if (typeof gracecode_sys == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module sys'));
  var var_sys = do_import("sys", gracecode_sys);
  var func10 = function(argcv) {    // method sys
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("compiler");
    // sys is a simple accessor - elide try ... catch
    return var_sys;
  };
  func10.paramCounts = [0];
  this.methods["sys"] = func10;
  func10.definitionLine = 10;
  func10.definitionModule = "compiler";
  func10.debug = "import";
  func10.confidential = true;
  setModuleName("compiler");
  setLineNumber(11);    // compilenode import
  // Import of unicode as unicode
  if (typeof gracecode_unicode == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module unicode'));
  var var_unicode = do_import("unicode", gracecode_unicode);
  var func11 = function(argcv) {    // method unicode
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("compiler");
    // unicode is a simple accessor - elide try ... catch
    return var_unicode;
  };
  func11.paramCounts = [0];
  this.methods["unicode"] = func11;
  func11.definitionLine = 11;
  func11.definitionModule = "compiler";
  func11.debug = "import";
  func11.confidential = true;
  setModuleName("compiler");
  setLineNumber(12);    // compilenode import
  // Import of util as util
  if (typeof gracecode_util == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module util'));
  var var_util = do_import("util", gracecode_util);
  var func12 = function(argcv) {    // method util
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("compiler");
    // util is a simple accessor - elide try ... catch
    return var_util;
  };
  func12.paramCounts = [0];
  this.methods["util"] = func12;
  func12.definitionLine = 12;
  func12.definitionModule = "compiler";
  func12.debug = "import";
  func12.confidential = true;
  setModuleName("compiler");
  setLineNumber(13);    // compilenode import
  // Import of xmodule as xmodule
  if (typeof gracecode_xmodule == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module xmodule'));
  var var_xmodule = do_import("xmodule", gracecode_xmodule);
  var func13 = function(argcv) {    // method xmodule
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("compiler");
    // xmodule is a simple accessor - elide try ... catch
    return var_xmodule;
  };
  func13.paramCounts = [0];
  this.methods["xmodule"] = func13;
  func13.definitionLine = 13;
  func13.definitionModule = "compiler";
  func13.debug = "import";
  func13.confidential = true;
  setModuleName("compiler");
  setLineNumber(15);    // compilenode identifier
  // call case 6: other requests
  var call15 = callmethodChecked(var_util, "parseargs(1)", [1], var_buildinfo);
  setLineNumber(17);    // compilenode string
  var string17 = new GraceString("starting compilation");
  // call case 6: other requests
  var call18 = callmethodChecked(var_util, "log_verbose(1)", [1], string17);
  setLineNumber(19);    // compilenode member
  // call case 6: other requests
  var call21 = callmethodChecked(var_util, "infile", []);
  // call case 6: other requests
  // call case 6: other requests
  var call23 = callmethodChecked(var_lexer, "new", []);
  var call24 = callmethodChecked(call23, "lexfile(1)", [1], call21);
  var var_tokens = call24;
  setLineNumber(1);    // compilenode method
  var func25 = function(argcv) {    // method tokens
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("compiler");
    // tokens is a simple accessor - elide try ... catch
    setLineNumber(19);    // compilenode identifier
    return var_tokens;
  };
  func25.paramCounts = [0];
  this.methods["tokens"] = func25;
  func25.definitionLine = 1;
  func25.definitionModule = "compiler";
  setLineNumber(1);    // compilenode method
  var func26 = function(argcv) {    // method tokens:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("compiler");
    var_tokens = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func26.paramCounts = [1];
  this.methods["tokens:=(1)"] = func26;
  func26.definitionLine = 1;
  func26.definitionModule = "compiler";
  this.methods["tokens"].debug = "var";
  var if27 = GraceDone;
  setLineNumber(20);    // compilenode string
  var string28 = new GraceString("lex");
  // call case 6: other requests
  var call31 = callmethodChecked(var_util, "target", []);
  var opresult33 = callmethodChecked(call31, "==(1)", [1], string28);
  if (Grace_isTrue(opresult33)) {
    setLineNumber(22);    // compilenode block
    var block35 = new GraceBlock(this, 22, 1);
    setLineNumber(1);    // compilenode identifier
    block35.real = function(var_v) {
      var if36 = GraceDone;
      setLineNumber(23);    // compilenode member
      // call case 6: other requests
      var call39 = callmethodChecked(var_util, "verbosity", []);
      var opresult41 = callmethodChecked(call39, ">(1)", [1], new GraceNum(30));
      if (Grace_isTrue(opresult41)) {
        setLineNumber(24);    // compilenode string
        var string43 = new GraceString("]");
        // call case 6: other requests
        var call46 = callmethodChecked(var_v, "indent", []);
        var string48 = new GraceString(" indent: ");
        // call case 6: other requests
        var call51 = callmethodChecked(var_v, "size", []);
        var string53 = new GraceString(" size: ");
        // call case 6: other requests
        var call56 = callmethodChecked(var_v, "linePos", []);
        var string58 = new GraceString(".");
        // call case 6: other requests
        var call61 = callmethodChecked(var_v, "line", []);
        var string63 = new GraceString("  [pos: ");
        // call case 6: other requests
        var call66 = callmethodChecked(var_v, "value", []);
        var string68 = new GraceString(": ");
        // call case 6: other requests
        var call71 = callmethodChecked(var_v, "kind", []);
        var string73 = new GraceString("");
        var opresult75 = callmethodChecked(string73, "++(1)", [1], call71);
        var opresult77 = callmethodChecked(opresult75, "++(1)", [1], string68);
        var opresult79 = callmethodChecked(opresult77, "++(1)", [1], call66);
        var opresult81 = callmethodChecked(opresult79, "++(1)", [1], string63);
        var opresult83 = callmethodChecked(opresult81, "++(1)", [1], call61);
        var opresult85 = callmethodChecked(opresult83, "++(1)", [1], string58);
        var opresult87 = callmethodChecked(opresult85, "++(1)", [1], call56);
        var opresult89 = callmethodChecked(opresult87, "++(1)", [1], string53);
        var opresult91 = callmethodChecked(opresult89, "++(1)", [1], call51);
        var opresult93 = callmethodChecked(opresult91, "++(1)", [1], string48);
        var opresult95 = callmethodChecked(opresult93, "++(1)", [1], call46);
        var opresult97 = callmethodChecked(opresult95, "++(1)", [1], string43);
        // call case 6: other requests
        var call98 = callmethodChecked(var_util, "outprint(1)", [1], opresult97);
        if36 = call98;
      } else {
        setLineNumber(26);    // compilenode string
        var string100 = new GraceString("");
        // call case 6: other requests
        var call103 = callmethodChecked(var_v, "value", []);
        var string105 = new GraceString(": ");
        // call case 6: other requests
        var call108 = callmethodChecked(var_v, "kind", []);
        var string110 = new GraceString("");
        var opresult112 = callmethodChecked(string110, "++(1)", [1], call108);
        var opresult114 = callmethodChecked(opresult112, "++(1)", [1], string105);
        var opresult116 = callmethodChecked(opresult114, "++(1)", [1], call103);
        var opresult118 = callmethodChecked(opresult116, "++(1)", [1], string100);
        // call case 6: other requests
        var call119 = callmethodChecked(var_util, "outprint(1)", [1], opresult118);
        if36 = call119;
      }
      return if36;
    };
    // call case 5: prelude request
    var call120 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_tokens, block35);
    setLineNumber(29);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call123 = callmethodChecked(var_util, "outfile", []);
    var call124 = callmethodChecked(call123, "close", []);
    setLineNumber(30);    // compilenode num
    // call case 6: other requests
    var call126 = callmethodChecked(var_sys, "exit(1)", [1], new GraceNum(0));
    if27 = call126;
  }
  setLineNumber(33);    // compilenode identifier
  // call case 6: other requests
  var call128 = callmethodChecked(var_parser, "parse(1)", [1], var_tokens);
  var var_moduleObject = call128;
  setLineNumber(1);    // compilenode method
  var func129 = function(argcv) {    // method moduleObject
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("compiler");
    // moduleObject is a simple accessor - elide try ... catch
    setLineNumber(33);    // compilenode identifier
    return var_moduleObject;
  };
  func129.paramCounts = [0];
  this.methods["moduleObject"] = func129;
  func129.definitionLine = 1;
  func129.definitionModule = "compiler";
  setLineNumber(1);    // compilenode method
  var func130 = function(argcv) {    // method moduleObject:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("compiler");
    var_moduleObject = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func130.paramCounts = [1];
  this.methods["moduleObject:=(1)"] = func130;
  func130.definitionLine = 1;
  func130.definitionModule = "compiler";
  this.methods["moduleObject"].debug = "var";
  setLineNumber(34);    // compilenode member
  // call case 6: other requests
  var call132 = callmethodChecked(var_moduleObject, "value", []);
  var var_values = call132;
  setLineNumber(1);    // compilenode method
  var func133 = function(argcv) {    // method values
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("compiler");
    // values is a simple accessor - elide try ... catch
    setLineNumber(34);    // compilenode identifier
    return var_values;
  };
  func133.paramCounts = [0];
  this.methods["values"] = func133;
  func133.definitionLine = 1;
  func133.definitionModule = "compiler";
  setLineNumber(1);    // compilenode method
  var func134 = function(argcv) {    // method values:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("compiler");
    var_values = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func134.paramCounts = [1];
  this.methods["values:=(1)"] = func134;
  func134.definitionLine = 1;
  func134.definitionModule = "compiler";
  this.methods["values"].debug = "var";
  var if135 = GraceDone;
  setLineNumber(36);    // compilenode string
  var string136 = new GraceString("parse");
  // call case 6: other requests
  var call139 = callmethodChecked(var_util, "target", []);
  var opresult141 = callmethodChecked(call139, "==(1)", [1], string136);
  if (Grace_isTrue(opresult141)) {
    setLineNumber(39);    // compilenode num
    // call case 6: other requests
    var call144 = callmethodChecked(var_moduleObject, "pretty(1)", [1], new GraceNum(0));
    // call case 6: other requests
    var call145 = callmethodChecked(var_util, "outprint(1)", [1], call144);
    setLineNumber(41);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call148 = callmethodChecked(var_util, "outfile", []);
    var call149 = callmethodChecked(call148, "close", []);
    setLineNumber(42);    // compilenode num
    // call case 6: other requests
    var call151 = callmethodChecked(var_sys, "exit(1)", [1], new GraceNum(0));
    if135 = call151;
  }
  var if152 = GraceDone;
  setLineNumber(44);    // compilenode string
  var string153 = new GraceString("grace");
  // call case 6: other requests
  var call156 = callmethodChecked(var_util, "target", []);
  var opresult158 = callmethodChecked(call156, "==(1)", [1], string153);
  if (Grace_isTrue(opresult158)) {
    setLineNumber(45);    // compilenode block
    var block160 = new GraceBlock(this, 45, 1);
    setLineNumber(1);    // compilenode identifier
    block160.real = function(var_v) {
      setLineNumber(46);    // compilenode num
      // call case 6: other requests
      var call163 = callmethodChecked(var_v, "toGrace(1)", [1], new GraceNum(0));
      // call case 6: other requests
      var call164 = callmethodChecked(var_util, "outprint(1)", [1], call163);
      return call164;
    };
    // call case 5: prelude request
    var call165 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_values, block160);
    setLineNumber(48);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call168 = callmethodChecked(var_util, "outfile", []);
    var call169 = callmethodChecked(call168, "close", []);
    setLineNumber(49);    // compilenode num
    // call case 6: other requests
    var call171 = callmethodChecked(var_sys, "exit(1)", [1], new GraceNum(0));
    if152 = call171;
  }
  setLineNumber(52);    // compilenode identifier
  // call case 6: other requests
  var call173 = callmethodChecked(var_xmodule, "checkDialect(1)", [1], var_moduleObject);
  setLineNumber(53);    // compilenode identifier
  // call case 6: other requests
  var call175 = callmethodChecked(var_xmodule, "doParseCheck(1)", [1], var_moduleObject);
  var if176 = GraceDone;
  setLineNumber(55);    // compilenode string
  var string178 = new GraceString("Plugin");
  // call case 6: other requests
  // call case 6: other requests
  var call180 = callmethodChecked(var_util, "extensions", []);
  var call181 = callmethodChecked(call180, "contains(1)", [1], string178);
  if (Grace_isTrue(call181)) {
    setLineNumber(56);    // compilenode identifier
    // call case 6: other requests
    var string185 = new GraceString("Plugin");
    // call case 6: other requests
    // call case 6: other requests
    var call187 = callmethodChecked(var_util, "extensions", []);
    var call188 = callmethodChecked(call187, "get(1)", [1], string185);
    // call case 6: other requests
    var call189 = callmethodChecked(var_mirrors, "loadDynamicModule(1)", [1], call188);
    var call190 = callmethodChecked(call189, "processAST(1)", [1], var_values);
    if176 = call190;
  }
  var if191 = GraceDone;
  setLineNumber(58);    // compilenode string
  var string192 = new GraceString("imports");
  // call case 6: other requests
  var call195 = callmethodChecked(var_util, "target", []);
  var opresult197 = callmethodChecked(call195, "==(1)", [1], string192);
  if (Grace_isTrue(opresult197)) {
    setLineNumber(59);    // compilenode member
    // call case 5: prelude request
    var call199 = callmethodChecked(var_prelude, "emptySet", []);
    var var_imps = call199;
    setLineNumber(60);    // compilenode object
    var obj200 = Grace_allocObject(null, "vis");
    obj200.definitionModule = "compiler";
    obj200.definitionLine = 60;
    obj200.outer = this;
    var reader_compiler_outer201 = function() {
      return this.outer;
    };
    obj200.methods["outer"] = reader_compiler_outer201;
    var obj_init_200 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj200;
      var func202 = function(argcv) {    // method visitImport(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_o = arguments[curarg];
        curarg++;
        setModuleName("compiler");
        setLineNumber(63);    // compilenode member
        // call case 6: other requests
        var call205 = callmethodChecked(var_o, "path", []);
        // call case 6: other requests
        var call206 = callmethodChecked(var_imps, "add(1)", [1], call205);
        setLineNumber(64);    // return value
        if (!Grace_isTrue(callmethod(var_Boolean, "match(1)", [1], GraceFalse)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method visitImport(_) does not have " + 
                    callmethod(var_Boolean, "asString", [0])._value + "."));
        return GraceFalse;
      };
      func202.paramCounts = [1];
      obj200.methods["visitImport(1)"] = func202;
      func202.definitionLine = 62;
      func202.definitionModule = "compiler";
      setLineNumber(61);    // compilenode identifier
      // call case 6: other requests
      var call208 = callmethodChecked(var_ast, "baseVisitor$object(1)", [0, 1], this);
      obj200.superobj = call208;
      if (call208.data) obj200.data = call208.data;
      if (call208.hasOwnProperty('_value'))
          obj200._value = call208._value;
      superDepth = origSuperDepth;
    };
    obj_init_200.apply(obj200, []);
    var var_vis = obj200;
    setLineNumber(67);    // compilenode block
    var block210 = new GraceBlock(this, 67, 1);
    setLineNumber(1);    // compilenode identifier
    block210.real = function(var_v) {
      setLineNumber(68);    // compilenode identifier
      // call case 6: other requests
      var call212 = callmethodChecked(var_v, "accept(1)", [1], var_vis);
      return call212;
    };
    // call case 5: prelude request
    var call213 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_values, block210);
    setLineNumber(70);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call217 = callmethodChecked(var_imps, "asList", []);
    var call218 = callmethodChecked(call217, "sort", []);
    var block219 = new GraceBlock(this, 70, 1);
    setLineNumber(1);    // compilenode identifier
    block219.real = function(var_im) {
      setLineNumber(71);    // compilenode identifier
      // call case 6: other requests
      var call221 = callmethodChecked(var_util, "outprint(1)", [1], var_im);
      return call221;
    };
    // call case 5: prelude request
    var call222 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call218, block219);
    setLineNumber(73);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call225 = callmethodChecked(var_util, "outfile", []);
    var call226 = callmethodChecked(call225, "close", []);
    setLineNumber(74);    // compilenode num
    // call case 6: other requests
    var call228 = callmethodChecked(var_sys, "exit(1)", [1], new GraceNum(0));
    if191 = call228;
  }
  setLineNumber(76);    // compilenode identifier
  // call case 6: other requests
  var call230 = callmethodChecked(var_identifierresolution, "resolve(1)", [1], var_moduleObject);
  var_moduleObject = call230;
  var if231 = GraceDone;
  setLineNumber(77);    // compilenode string
  var string232 = new GraceString("ast");
  // call case 6: other requests
  var call235 = callmethodChecked(var_util, "target", []);
  var opresult237 = callmethodChecked(call235, "==(1)", [1], string232);
  var string239 = new GraceString("processed-ast");
  // call case 6: other requests
  var call242 = callmethodChecked(var_util, "target", []);
  var opresult244 = callmethodChecked(call242, "==(1)", [1], string239);
  var opresult246 = callmethodChecked(opresult244, "||(1)", [1], opresult237);
  if (Grace_isTrue(opresult246)) {
    setLineNumber(78);    // compilenode string
    var string248 = new GraceString("=====================================");
    // call case 6: other requests
    var call249 = callmethodChecked(var_util, "outprint(1)", [1], string248);
    setLineNumber(79);    // compilenode string
    var string251 = new GraceString("module-level symbol table");
    // call case 6: other requests
    var call252 = callmethodChecked(var_util, "outprint(1)", [1], string251);
    setLineNumber(80);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call256 = callmethodChecked(var_moduleObject, "scope", []);
    var call257 = callmethodChecked(call256, "asStringWithParents", []);
    // call case 6: other requests
    var call258 = callmethodChecked(var_util, "outprint(1)", [1], call257);
    setLineNumber(81);    // compilenode string
    var string260 = new GraceString("=====================================");
    // call case 6: other requests
    var call261 = callmethodChecked(var_util, "outprint(1)", [1], string260);
    setLineNumber(82);    // compilenode num
    // call case 6: other requests
    var call264 = callmethodChecked(var_moduleObject, "pretty(1)", [1], new GraceNum(0));
    // call case 6: other requests
    var call265 = callmethodChecked(var_util, "outprint(1)", [1], call264);
    setLineNumber(83);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call268 = callmethodChecked(var_util, "outfile", []);
    var call269 = callmethodChecked(call268, "close", []);
    setLineNumber(84);    // compilenode num
    // call case 6: other requests
    var call271 = callmethodChecked(var_sys, "exit(1)", [1], new GraceNum(0));
    if231 = call271;
  }
  setLineNumber(87);    // compilenode identifier
  // call case 6: other requests
  var call273 = callmethodChecked(var_xmodule, "doAstCheck(1)", [1], var_moduleObject);
  setLineNumber(90);    // compilenode member
  // call case 6: other requests
  var call276 = callmethodChecked(var_util, "target", []);
  var cases274 = [];
  setLineNumber(91);    // compilenode block
  var block277 = new GraceBlock(this, 91, 0);
  var string278 = new GraceString("c");
  block277.pattern = string278;
  block277.real = function() {
    setLineNumber(92);    // compilenode member
    // call case 6: other requests
    var call281 = callmethodChecked(var_util, "outfile", []);
    // call case 6: other requests
    var call283 = callmethodChecked(var_util, "runmode", []);
    setLineNumber(93);    // compilenode member
    // call case 6: other requests
    var call285 = callmethodChecked(var_util, "buildtype", []);
    // call case 6: other requests
    setLineNumber(92);    // compilenode identifier
    var call286 = callmethodChecked(var_genc, "compile(5)", [5], var_moduleObject, call281, call283, call285, var_buildinfo);
    return call286;
  };
  cases274.push(block277);
  setLineNumber(95);    // compilenode block
  var block287 = new GraceBlock(this, 95, 0);
  var string288 = new GraceString("js");
  block287.pattern = string288;
  block287.real = function() {
    setLineNumber(96);    // compilenode member
    // call case 6: other requests
    var call291 = callmethodChecked(var_util, "outfile", []);
    // call case 6: other requests
    var call293 = callmethodChecked(var_util, "runmode", []);
    setLineNumber(97);    // compilenode member
    // call case 6: other requests
    var call295 = callmethodChecked(var_util, "buildtype", []);
    // call case 6: other requests
    var call297 = callmethodChecked(var_util, "gracelibPath", []);
    // call case 6: other requests
    setLineNumber(96);    // compilenode identifier
    var call298 = callmethodChecked(var_genjs, "compile(5)", [5], var_moduleObject, call291, call293, call295, call297);
    return call298;
  };
  cases274.push(block287);
  setLineNumber(99);    // compilenode block
  var block299 = new GraceBlock(this, 99, 1);
  setLineNumber(1);    // compilenode identifier
  block299.real = function(var___95____95__0) {
    setLineNumber(100);    // compilenode string
    var string301 = new GraceString("'\n");
    // call case 6: other requests
    var call304 = callmethodChecked(var_util, "target", []);
    var string306 = new GraceString("minigrace: no such target '");
    var opresult308 = callmethodChecked(string306, "++(1)", [1], call304);
    var opresult310 = callmethodChecked(opresult308, "++(1)", [1], string301);
    // call case 6: other requests
    // call case 6: other requests
    var call312 = callmethodChecked(var_io, "error", []);
    var call313 = callmethodChecked(call312, "write(1)", [1], opresult310);
    setLineNumber(101);    // compilenode num
    // call case 6: other requests
    var call315 = callmethodChecked(var_sys, "exit(1)", [1], new GraceNum(1));
    return call315;
  };
  cases274.push(block299);
  setLineNumber(90);    // compilematchcase
  var matchres274 = matchCase(call276,cases274,false);
  setModuleName("compiler");
  return this;
}
gracecode_compiler.imports = ['ast', 'buildinfo', 'genc', 'genjs', 'identifierresolution', 'io', 'lexer', 'mirrors', 'parser', 'sys', 'unicode', 'util', 'xmodule'];
if (typeof gctCache !== "undefined")
  gctCache['compiler'] = "classes:\nconfidential:\nfresh-methods:\nmodules:\n ast\n buildinfo\n errormessages\n genc\n genjs\n identifierKinds\n identifierresolution\n io\n lexer\n mirrors\n parser\n stringMap\n sys\n unicode\n unixFilePath\n util\n xmodule\npath:\n compiler\npublic:\ntypes:\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["compiler"] = [
    "import \"ast\" as ast",
    "import \"buildinfo\" as buildinfo",
    "import \"genc\" as genc",
    "import \"genjs\" as genjs",
    "import \"identifierresolution\" as identifierresolution",
    "import \"io\" as io",
    "import \"lexer\" as lexer",
    "import \"mirrors\" as mirrors",
    "import \"parser\" as parser",
    "import \"sys\" as sys",
    "import \"unicode\" as unicode",
    "import \"util\" as util",
    "import \"xmodule\" as xmodule",
    "",
    "util.parseargs(buildinfo)",
    "",
    "util.log_verbose \"starting compilation\"",
    "",
    "var tokens := lexer.new.lexfile(util.infile)",
    "if (util.target == \"lex\") then {",
    "    // Print the lexed tokens and quit.",
    "    for (tokens) do { v ->",
    "        if (util.verbosity > 30) then {",
    "            util.outprint \"{v.kind}: {v.value}  [pos: {v.line}.{v.linePos} size: {v.size} indent: {v.indent}]\"",
    "        } else {",
    "            util.outprint \"{v.kind}: {v.value}\"",
    "        }",
    "    }",
    "    util.outfile.close",
    "    sys.exit(0)",
    "}",
    "",
    "var moduleObject := parser.parse(tokens)",
    "var values := moduleObject.value",
    "",
    "if (util.target == \"parse\") then {",
    "    // Parse mode pretty-prints the parse tree and quits.",
    "//    util.log 60 verbose \"target = parse, outfile = {util.outfile}.\"",
    "    util.outprint(moduleObject.pretty(0))",
    "//    util.log 60 verbose \"done writing {util.outfile}.\"",
    "    util.outfile.close",
    "    sys.exit(0)",
    "}",
    "if (util.target == \"grace\") then {",
    "    for (values) do { v ->",
    "        util.outprint(v.toGrace(0))",
    "    }",
    "    util.outfile.close",
    "    sys.exit(0)",
    "}",
    "",
    "xmodule.checkDialect(moduleObject)",
    "xmodule.doParseCheck(moduleObject)",
    "",
    "if (util.extensions.contains(\"Plugin\")) then {",
    "    mirrors.loadDynamicModule(util.extensions.get(\"Plugin\")).processAST(values)",
    "}",
    "if (util.target == \"imports\") then {",
    "    def imps = emptySet",
    "    def vis = object {",
    "        inherits ast.baseVisitor",
    "        method visitImport(o) -> Boolean {",
    "            imps.add(o.path)",
    "            false",
    "        }",
    "    }",
    "    for (values) do {v->",
    "        v.accept(vis)",
    "    }",
    "    for (imps.asList.sort) do {im->",
    "        util.outprint(im)",
    "    }",
    "    util.outfile.close",
    "    sys.exit(0)",
    "}",
    "moduleObject := identifierresolution.resolve(moduleObject)",
    "if ((util.target == \"processed-ast\") || (util.target == \"ast\")) then {",
    "    util.outprint \"=====================================\"",
    "    util.outprint \"module-level symbol table\"",
    "    util.outprint (moduleObject.scope.asStringWithParents)",
    "    util.outprint \"=====================================\"",
    "    util.outprint(moduleObject.pretty(0))",
    "    util.outfile.close",
    "    sys.exit(0)",
    "}",
    "",
    "xmodule.doAstCheck(moduleObject)",
    "",
    "// Perform the actual compilation",
    "match(util.target)",
    "    case { \"c\" ->",
    "        genc.compile(moduleObject, util.outfile, util.runmode,",
    "            util.buildtype, buildinfo)",
    "    }",
    "    case { \"js\" ->",
    "        genjs.compile(moduleObject, util.outfile, util.runmode,",
    "            util.buildtype, util.gracelibPath)",
    "    }",
    "    case { _ ->",
    "        io.error.write(\"minigrace: no such target '\" ++ util.target ++ \"'\\n\")",
    "        sys.exit(1)",
    "    }" ];
}
if (typeof global !== "undefined")
  global.gracecode_compiler = gracecode_compiler;
if (typeof window !== "undefined")
  window.gracecode_compiler = gracecode_compiler;
