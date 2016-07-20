"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_genjs() {
  setModuleName("genjs");
  this.definitionModule = "genjs";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_genjs_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_genjs_outer0;
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
    setModuleName("genjs");
    // io is a simple accessor - elide try ... catch
    return var_io;
  };
  func1.paramCounts = [0];
  this.methods["io"] = func1;
  func1.definitionLine = 2;
  func1.definitionModule = "genjs";
  func1.debug = "import";
  func1.confidential = true;
  setModuleName("genjs");
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
    setModuleName("genjs");
    // sys is a simple accessor - elide try ... catch
    return var_sys;
  };
  func2.paramCounts = [0];
  this.methods["sys"] = func2;
  func2.definitionLine = 3;
  func2.definitionModule = "genjs";
  func2.debug = "import";
  func2.confidential = true;
  setModuleName("genjs");
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
    setModuleName("genjs");
    // ast is a simple accessor - elide try ... catch
    return var_ast;
  };
  func3.paramCounts = [0];
  this.methods["ast"] = func3;
  func3.definitionLine = 4;
  func3.definitionModule = "genjs";
  func3.debug = "import";
  func3.confidential = true;
  setModuleName("genjs");
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
    setModuleName("genjs");
    // util is a simple accessor - elide try ... catch
    return var_util;
  };
  func4.paramCounts = [0];
  this.methods["util"] = func4;
  func4.definitionLine = 5;
  func4.definitionModule = "genjs";
  func4.debug = "import";
  func4.confidential = true;
  setModuleName("genjs");
  setLineNumber(6);    // compilenode import
  // Import of unixFilePath as unixFilePath
  if (typeof gracecode_unixFilePath == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module unixFilePath'));
  var var_unixFilePath = do_import("unixFilePath", gracecode_unixFilePath);
  var func5 = function(argcv) {    // method unixFilePath
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genjs");
    // unixFilePath is a simple accessor - elide try ... catch
    return var_unixFilePath;
  };
  func5.paramCounts = [0];
  this.methods["unixFilePath"] = func5;
  func5.definitionLine = 6;
  func5.definitionModule = "genjs";
  func5.debug = "import";
  func5.confidential = true;
  setModuleName("genjs");
  setLineNumber(7);    // compilenode import
  // Import of xmodule as xmodule
  if (typeof gracecode_xmodule == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module xmodule'));
  var var_xmodule = do_import("xmodule", gracecode_xmodule);
  var func6 = function(argcv) {    // method xmodule
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genjs");
    // xmodule is a simple accessor - elide try ... catch
    return var_xmodule;
  };
  func6.paramCounts = [0];
  this.methods["xmodule"] = func6;
  func6.definitionLine = 7;
  func6.definitionModule = "genjs";
  func6.debug = "import";
  func6.confidential = true;
  setModuleName("genjs");
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
    setModuleName("genjs");
    // mirrors is a simple accessor - elide try ... catch
    return var_mirrors;
  };
  func7.paramCounts = [0];
  this.methods["mirrors"] = func7;
  func7.definitionLine = 8;
  func7.definitionModule = "genjs";
  func7.debug = "import";
  func7.confidential = true;
  setModuleName("genjs");
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
    setModuleName("genjs");
    // errormessages is a simple accessor - elide try ... catch
    return var_errormessages;
  };
  func8.paramCounts = [0];
  this.methods["errormessages"] = func8;
  func8.definitionLine = 9;
  func8.definitionModule = "genjs";
  func8.debug = "import";
  func8.confidential = true;
  setModuleName("genjs");
  setLineNumber(42);    // compilenode method
  var func9 = function(argcv) {    // method increaseindent
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genjs");
    setLineNumber(43);    // compilenode string
    var string10 = new GraceString("  ");
    var opresult13 = callmethodChecked(var_indent, "++(1)", [1], string10);
    var_indent = opresult13;
    return GraceDone;
  };
  func9.paramCounts = [0];
  this.methods["increaseindent"] = func9;
  func9.definitionLine = 42;
  func9.definitionModule = "genjs";
  setLineNumber(46);    // compilenode method
  var func14 = function(argcv) {    // method decreaseindent
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genjs");
    var if15 = GraceDone;
    setLineNumber(47);    // compilenode member
    // call case 6: other requests
    var call18 = callmethodChecked(var_indent, "size", []);
    var opresult20 = callmethodChecked(call18, "\u2264(1)", [1], new GraceNum(2));
    if (Grace_isTrue(opresult20)) {
      setLineNumber(48);    // compilenode string
      var string21 = new GraceString("");
      var_indent = string21;
      if15 = GraceDone;
    } else {
      setLineNumber(50);    // compilenode member
      // call case 6: other requests
      var call25 = callmethodChecked(var_indent, "size", []);
      var diff27 = callmethodChecked(call25, "-(1)", [1], new GraceNum(2));
      // call case 6: other requests
      var call28 = callmethodChecked(var_indent, "substringFrom(1)to(1)", [1, 1], new GraceNum(1), diff27);
      var_indent = call28;
      if15 = GraceDone;
    }
    return if15;
  };
  func14.paramCounts = [0];
  this.methods["decreaseindent"] = func14;
  func14.definitionLine = 46;
  func14.definitionModule = "genjs";
  setLineNumber(54);    // compilenode method
  var func29 = function(argcv) {    // method formatModname(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_name = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(55);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call32 = callmethodChecked(this, "basename(1)", [1], var_name);
    // call case 4: self request
    onSelf = true;
    var call33 = callmethodChecked(this, "escapeident(1)", [1], call32);
    var string35 = new GraceString("gracecode_");
    var opresult37 = callmethodChecked(string35, "++(1)", [1], call33);
    return opresult37;
  };
  func29.paramCounts = [1];
  this.methods["formatModname(1)"] = func29;
  func29.definitionLine = 54;
  func29.definitionModule = "genjs";
  setLineNumber(58);    // compilenode method
  var func38 = function(argcv) {    // method basename(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_filepath = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(59);    // compilenode string
    var string39 = new GraceString("");
    var var_bnm = string39;
    setLineNumber(60);    // compilenode block
    var block41 = new GraceBlock(this, 60, 1);
    setLineNumber(1);    // compilenode identifier
    block41.real = function(var_c) {
      var if42 = GraceDone;
      setLineNumber(61);    // compilenode string
      var string43 = new GraceString("/");
      var opresult46 = callmethodChecked(var_c, "==(1)", [1], string43);
      if (Grace_isTrue(opresult46)) {
        setLineNumber(62);    // compilenode string
        var string47 = new GraceString("");
        var_bnm = string47;
        if42 = GraceDone;
      } else {
        setLineNumber(64);    // compilenode identifier
        var opresult50 = callmethodChecked(var_bnm, "++(1)", [1], var_c);
        var_bnm = opresult50;
        if42 = GraceDone;
      }
      return if42;
    };
    // call case 5: prelude request
    var call51 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_filepath, block41);
    setLineNumber(67);    // compilenode identifier
    return var_bnm;
  };
  func38.paramCounts = [1];
  this.methods["basename(1)"] = func38;
  func38.definitionLine = 58;
  func38.definitionModule = "genjs";
  setLineNumber(70);    // compilenode method
  var func52 = function(argcv) {    // method noteLineNumber(_)comment(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_n = arguments[curarg];
    curarg++;
    var var_c = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(72);    // compilenode identifier
    var_priorLineSeen = var_n;
    setLineNumber(73);    // compilenode identifier
    var_priorLineComment = var_c;
    return GraceDone;
  };
  func52.paramCounts = [1, 1];
  this.methods["noteLineNumber(1)comment(1)"] = func52;
  func52.definitionLine = 70;
  func52.definitionModule = "genjs";
  setLineNumber(76);    // compilenode method
  var func53 = function(argcv) {    // method forceLineNumber(_)comment(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_n = arguments[curarg];
    curarg++;
    var var_c = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(79);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call55 = callmethodChecked(this, "noteLineNumber(1)comment(1)", [1, 1], var_n, var_c);
    var if56 = GraceDone;
    setLineNumber(80);    // compilenode identifier
    if (Grace_isTrue(var_emitPositions)) {
      setLineNumber(81);    // compilenode string
      var string58 = new GraceString("");
      var string61 = new GraceString(");    // ");
      var string64 = new GraceString("setLineNumber(");
      var string67 = new GraceString("");
      var opresult69 = callmethodChecked(string67, "++(1)", [1], var_indent);
      var opresult71 = callmethodChecked(opresult69, "++(1)", [1], string64);
      var opresult73 = callmethodChecked(opresult71, "++(1)", [1], var_priorLineSeen);
      var opresult75 = callmethodChecked(opresult73, "++(1)", [1], string61);
      var opresult77 = callmethodChecked(opresult75, "++(1)", [1], var_priorLineComment);
      var opresult79 = callmethodChecked(opresult77, "++(1)", [1], string58);
      // call case 6: other requests
      var call80 = callmethodChecked(var_output, "push(1)", [1], opresult79);
      if56 = call80;
    }
    setLineNumber(83);    // compilenode identifier
    var_priorLineEmitted = var_priorLineSeen;
    return GraceDone;
  };
  func53.paramCounts = [1, 1];
  this.methods["forceLineNumber(1)comment(1)"] = func53;
  func53.definitionLine = 76;
  func53.definitionModule = "genjs";
  setLineNumber(86);    // compilenode method
  var func81 = function(argcv) {    // method out(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_s = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    var if82 = GraceDone;
    setLineNumber(88);    // compilenode identifier
    var opresult85 = callmethodChecked(var_priorLineSeen, "\u2260(1)", [1], var_priorLineEmitted);
    var opresult88 = callmethodChecked(var_emitPositions, "&&(1)", [1], opresult85);
    if (Grace_isTrue(opresult88)) {
      setLineNumber(89);    // compilenode string
      var string90 = new GraceString("");
      var string93 = new GraceString(");    // ");
      var string96 = new GraceString("setLineNumber(");
      var string99 = new GraceString("");
      var opresult101 = callmethodChecked(string99, "++(1)", [1], var_indent);
      var opresult103 = callmethodChecked(opresult101, "++(1)", [1], string96);
      var opresult105 = callmethodChecked(opresult103, "++(1)", [1], var_priorLineSeen);
      var opresult107 = callmethodChecked(opresult105, "++(1)", [1], string93);
      var opresult109 = callmethodChecked(opresult107, "++(1)", [1], var_priorLineComment);
      var opresult111 = callmethodChecked(opresult109, "++(1)", [1], string90);
      // call case 6: other requests
      var call112 = callmethodChecked(var_output, "push(1)", [1], opresult111);
      setLineNumber(90);    // compilenode identifier
      var_priorLineEmitted = var_priorLineSeen;
      if82 = GraceDone;
    }
    setLineNumber(92);    // compilenode identifier
    var opresult116 = callmethodChecked(var_indent, "++(1)", [1], var_s);
    // call case 6: other requests
    var call117 = callmethodChecked(var_output, "push(1)", [1], opresult116);
    setLineNumber(93);    // compilenode identifier
    return var_done;
  };
  func81.paramCounts = [1];
  this.methods["out(1)"] = func81;
  func81.definitionLine = 86;
  func81.definitionModule = "genjs";
  setLineNumber(96);    // compilenode method
  var func118 = function(argcv) {    // method outUnnumbered(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_s = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(98);    // compilenode identifier
    var opresult122 = callmethodChecked(var_indent, "++(1)", [1], var_s);
    // call case 6: other requests
    var call123 = callmethodChecked(var_output, "push(1)", [1], opresult122);
    return call123;
  };
  func118.paramCounts = [1];
  this.methods["outUnnumbered(1)"] = func118;
  func118.definitionLine = 96;
  func118.definitionModule = "genjs";
  setLineNumber(101);    // compilenode method
  var func124 = function(argcv) {    // method escapeident(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_vn = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(102);    // compilenode string
    var string125 = new GraceString("");
    var var_nm = string125;
    setLineNumber(103);    // compilenode block
    var block127 = new GraceBlock(this, 103, 1);
    setLineNumber(1);    // compilenode identifier
    block127.real = function(var_c) {
      setLineNumber(104);    // compilenode member
      // call case 6: other requests
      var call129 = callmethodChecked(var_c, "ord", []);
      var var_o = call129;
      var if130 = GraceDone;
      setLineNumber(106);    // compilenode identifier
      var opresult133 = callmethodChecked(var_o, "\u2264(1)", [1], new GraceNum(57));
      var opresult137 = callmethodChecked(var_o, "\u2265(1)", [1], new GraceNum(48));
      var opresult139 = callmethodChecked(opresult137, "&&(1)", [1], opresult133);
      setLineNumber(105);    // compilenode identifier
      var opresult143 = callmethodChecked(var_o, "\u2264(1)", [1], new GraceNum(90));
      var opresult147 = callmethodChecked(var_o, "\u2265(1)", [1], new GraceNum(65));
      var opresult149 = callmethodChecked(opresult147, "&&(1)", [1], opresult143);
      var opresult153 = callmethodChecked(var_o, "\u2264(1)", [1], new GraceNum(122));
      var opresult157 = callmethodChecked(var_o, "\u2265(1)", [1], new GraceNum(97));
      var opresult159 = callmethodChecked(opresult157, "&&(1)", [1], opresult153);
      var opresult161 = callmethodChecked(opresult159, "||(1)", [1], opresult149);
      var opresult163 = callmethodChecked(opresult161, "||(1)", [1], opresult139);
      if (Grace_isTrue(opresult163)) {
        setLineNumber(107);    // compilenode identifier
        var opresult166 = callmethodChecked(var_nm, "++(1)", [1], var_c);
        var_nm = opresult166;
        if130 = GraceDone;
      } else {
        setLineNumber(109);    // compilenode string
        var string167 = new GraceString("__");
        var string170 = new GraceString("__");
        var opresult173 = callmethodChecked(var_nm, "++(1)", [1], string170);
        var opresult175 = callmethodChecked(opresult173, "++(1)", [1], var_o);
        var opresult177 = callmethodChecked(opresult175, "++(1)", [1], string167);
        var_nm = opresult177;
        if130 = GraceDone;
      }
      return if130;
    };
    // call case 5: prelude request
    var call178 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_vn, block127);
    setLineNumber(112);    // compilenode identifier
    return var_nm;
  };
  func124.paramCounts = [1];
  this.methods["escapeident(1)"] = func124;
  func124.definitionLine = 101;
  func124.definitionModule = "genjs";
  setLineNumber(114);    // compilenode method
  var func179 = function(argcv) {    // method escapestring(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_s = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(115);    // compilenode string
    var string180 = new GraceString("");
    var var_os = string180;
    setLineNumber(116);    // compilenode block
    var block182 = new GraceBlock(this, 116, 1);
    setLineNumber(1);    // compilenode identifier
    block182.real = function(var_c) {
      var if183 = GraceDone;
      setLineNumber(117);    // compilenode string
      var string184 = new GraceString("\"");
      var opresult187 = callmethodChecked(var_c, "==(1)", [1], string184);
      if (Grace_isTrue(opresult187)) {
        setLineNumber(118);    // compilenode string
        var string188 = new GraceString("\\\"");
        var opresult191 = callmethodChecked(var_os, "++(1)", [1], string188);
        var_os = opresult191;
        if183 = GraceDone;
      } else {
        var if192 = GraceDone;
        setLineNumber(119);    // compilenode string
        var string193 = new GraceString("\\");
        var opresult196 = callmethodChecked(var_c, "==(1)", [1], string193);
        if (Grace_isTrue(opresult196)) {
          setLineNumber(120);    // compilenode string
          var string197 = new GraceString("\\\\");
          var opresult200 = callmethodChecked(var_os, "++(1)", [1], string197);
          var_os = opresult200;
          if192 = GraceDone;
        } else {
          var if201 = GraceDone;
          setLineNumber(121);    // compilenode string
          var string202 = new GraceString("\n");
          var opresult205 = callmethodChecked(var_c, "==(1)", [1], string202);
          if (Grace_isTrue(opresult205)) {
            setLineNumber(122);    // compilenode string
            var string206 = new GraceString("\\n");
            var opresult209 = callmethodChecked(var_os, "++(1)", [1], string206);
            var_os = opresult209;
            if201 = GraceDone;
          } else {
            var if210 = GraceDone;
            setLineNumber(123);    // compilenode member
            // call case 6: other requests
            var call213 = callmethodChecked(var_c, "ord", []);
            var opresult215 = callmethodChecked(call213, ">(1)", [1], new GraceNum(126));
            // call case 6: other requests
            var call219 = callmethodChecked(var_c, "ord", []);
            var opresult221 = callmethodChecked(call219, "<(1)", [1], new GraceNum(32));
            var opresult223 = callmethodChecked(opresult221, "||(1)", [1], opresult215);
            if (Grace_isTrue(opresult223)) {
              setLineNumber(124);    // compilenode member
              // call case 6: other requests
              var call226 = callmethodChecked(var_c, "ord", []);
              // call case 6: other requests
              var call227 = callmethodChecked(var_util, "hex(1)", [1], call226);
              var var_uh = call227;
              setLineNumber(125);    // compilenode block
              var block229 = new GraceBlock(this, 125, 0);
              block229.real = function() {
                // call case 6: other requests
                var call232 = callmethodChecked(var_uh, "size", []);
                var opresult234 = callmethodChecked(call232, "<(1)", [1], new GraceNum(4));
                return opresult234;
              };
              var block235 = new GraceBlock(this, 125, 0);
              block235.real = function() {
                setLineNumber(126);    // compilenode string
                var string237 = new GraceString("0");
                var opresult239 = callmethodChecked(string237, "++(1)", [1], var_uh);
                var_uh = opresult239;
                return GraceDone;
              };
              // call case 5: prelude request
              var call240 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block229, block235);
              setLineNumber(128);    // compilenode string
              var string242 = new GraceString("\\u");
              var opresult245 = callmethodChecked(var_os, "++(1)", [1], string242);
              var opresult247 = callmethodChecked(opresult245, "++(1)", [1], var_uh);
              var_os = opresult247;
              if210 = GraceDone;
            } else {
              setLineNumber(130);    // compilenode identifier
              var opresult250 = callmethodChecked(var_os, "++(1)", [1], var_c);
              var_os = opresult250;
              if210 = GraceDone;
            }
            if201 = if210;
          }
          if192 = if201;
        }
        if183 = if192;
      }
      return if183;
    };
    // call case 5: prelude request
    var call251 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_s, block182);
    setLineNumber(133);    // compilenode identifier
    return var_os;
  };
  func179.paramCounts = [1];
  this.methods["escapestring(1)"] = func179;
  func179.definitionLine = 114;
  func179.definitionModule = "genjs";
  setLineNumber(135);    // compilenode method
  var func252 = function(argcv) {    // method varf(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_vn = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(136);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call254 = callmethodChecked(this, "escapeident(1)", [1], var_vn);
    var string256 = new GraceString("var_");
    var opresult258 = callmethodChecked(string256, "++(1)", [1], call254);
    return opresult258;
  };
  func252.paramCounts = [1];
  this.methods["varf(1)"] = func252;
  func252.definitionLine = 135;
  func252.definitionModule = "genjs";
  setLineNumber(138);    // compilenode method
  var func259 = function(argcv) {    // method beginblock(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_s = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(139);    // compilenode string
    var string261 = new GraceString("%");
    var opresult263 = callmethodChecked(string261, "++(1)", [1], var_s);
    var_bblock = opresult263;
    setLineNumber(140);    // compilenode string
    var string265 = new GraceString(":");
    var opresult268 = callmethodChecked(var_s, "++(1)", [1], string265);
    // call case 4: self request
    onSelf = true;
    var call269 = callmethodChecked(this, "out(1)", [1], opresult268);
    return call269;
  };
  func259.paramCounts = [1];
  this.methods["beginblock(1)"] = func259;
  func259.definitionLine = 138;
  func259.definitionModule = "genjs";
  setLineNumber(142);    // compilenode method
  var func270 = function(argcv) {    // method compilearray(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(143);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(144);    // compilenode identifier
    var opresult273 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult273;
    setLineNumber(145);    // compilenode vardec
    var var_r;
    setLineNumber(146);    // compilenode array
    var array274 = new PrimitiveGraceList([]);
    var var_vals = array274;
    setLineNumber(147);    // compilenode member
    // call case 6: other requests
    var call277 = callmethodChecked(var_o, "value", []);
    var block278 = new GraceBlock(this, 147, 1);
    setLineNumber(1);    // compilenode identifier
    block278.real = function(var_a) {
      setLineNumber(148);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call280 = callmethodChecked(this, "compilenode(1)", [1], var_a);
      var_r = call280;
      setLineNumber(149);    // compilenode identifier
      // call case 6: other requests
      var call282 = callmethodChecked(var_vals, "push(1)", [1], var_r);
      return call282;
    };
    // call case 5: prelude request
    var call283 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call277, block278);
    setLineNumber(151);    // compilenode string
    var string285 = new GraceString(");");
    var string288 = new GraceString("(");
    var string291 = new GraceString(" = new ");
    var string294 = new GraceString("var array");
    var opresult296 = callmethodChecked(string294, "++(1)", [1], var_myc);
    var opresult298 = callmethodChecked(opresult296, "++(1)", [1], string291);
    var opresult300 = callmethodChecked(opresult298, "++(1)", [1], var_bracketConstructor);
    var opresult302 = callmethodChecked(opresult300, "++(1)", [1], string288);
    var opresult304 = callmethodChecked(opresult302, "++(1)", [1], var_vals);
    var opresult306 = callmethodChecked(opresult304, "++(1)", [1], string285);
    // call case 4: self request
    onSelf = true;
    var call307 = callmethodChecked(this, "out(1)", [1], opresult306);
    setLineNumber(152);    // compilenode string
    var string310 = new GraceString("array");
    var opresult312 = callmethodChecked(string310, "++(1)", [1], var_myc);
    // call case 6: other requests
    var call313 = callmethodChecked(var_o, "register:=(1)", [1], opresult312);
    return call313;
  };
  func270.paramCounts = [1];
  this.methods["compilearray(1)"] = func270;
  func270.definitionLine = 142;
  func270.definitionModule = "genjs";
  setLineNumber(154);    // compilenode method
  var func314 = function(argcv) {    // method compilemember(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(156);    // compilenode identifier
    // call case 6: other requests
    var call316 = callmethodChecked(var_o, "generics:=(1)", [1], GraceFalse);
    setLineNumber(157);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call318 = callmethodChecked(this, "compilecall(1)", [1], var_o);
    return call318;
  };
  func314.paramCounts = [1];
  this.methods["compilemember(1)"] = func314;
  func314.definitionLine = 154;
  func314.definitionModule = "genjs";
  setLineNumber(159);    // compilenode method
  var func319 = function(argcv) {    // method compileobjouter(_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_selfr = arguments[curarg];
    curarg++;
    var var_outerRef = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(160);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(161);    // compilenode identifier
    var opresult322 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult322;
    setLineNumber(162);    // compilenode string
    var string324 = new GraceString("outer");
    // call case 4: self request
    onSelf = true;
    var call325 = callmethodChecked(this, "escapestring(1)", [1], string324);
    var var_nm = call325;
    setLineNumber(163);    // compilenode string
    var string327 = new GraceString("outer");
    // call case 4: self request
    onSelf = true;
    var call328 = callmethodChecked(this, "escapeident(1)", [1], string327);
    var var_nmi = call328;
    setLineNumber(164);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call330 = callmethodChecked(this, "escapeident(1)", [1], var_modname);
    var var_emod = call330;
    setLineNumber(165);    // compilenode string
    var string332 = new GraceString(";");
    var string335 = new GraceString(".outer = ");
    var string338 = new GraceString("");
    var opresult340 = callmethodChecked(string338, "++(1)", [1], var_selfr);
    var opresult342 = callmethodChecked(opresult340, "++(1)", [1], string335);
    var opresult344 = callmethodChecked(opresult342, "++(1)", [1], var_outerRef);
    var opresult346 = callmethodChecked(opresult344, "++(1)", [1], string332);
    // call case 4: self request
    onSelf = true;
    var call347 = callmethodChecked(this, "out(1)", [1], opresult346);
    setLineNumber(166);    // compilenode string
    var string349 = new GraceString(" = function() {");
    var string352 = new GraceString("");
    var string355 = new GraceString("_");
    var string358 = new GraceString("var reader_");
    var opresult360 = callmethodChecked(string358, "++(1)", [1], var_emod);
    var opresult362 = callmethodChecked(opresult360, "++(1)", [1], string355);
    var opresult364 = callmethodChecked(opresult362, "++(1)", [1], var_nmi);
    var opresult366 = callmethodChecked(opresult364, "++(1)", [1], string352);
    var opresult368 = callmethodChecked(opresult366, "++(1)", [1], var_myc);
    var opresult370 = callmethodChecked(opresult368, "++(1)", [1], string349);
    // call case 4: self request
    onSelf = true;
    var call371 = callmethodChecked(this, "out(1)", [1], opresult370);
    setLineNumber(167);    // compilenode string
    var string373 = new GraceString("  return this.outer;");
    // call case 4: self request
    onSelf = true;
    var call374 = callmethodChecked(this, "out(1)", [1], string373);
    setLineNumber(168);    // compilenode string
    var string376 = new GraceString("};");
    // call case 4: self request
    onSelf = true;
    var call377 = callmethodChecked(this, "out(1)", [1], string376);
    setLineNumber(169);    // compilenode string
    var string379 = new GraceString(";");
    var string382 = new GraceString("");
    var string385 = new GraceString("_");
    var string388 = new GraceString("\"] = reader_");
    var string391 = new GraceString(".methods[\"");
    var string394 = new GraceString("");
    var opresult396 = callmethodChecked(string394, "++(1)", [1], var_selfr);
    var opresult398 = callmethodChecked(opresult396, "++(1)", [1], string391);
    var opresult400 = callmethodChecked(opresult398, "++(1)", [1], var_nm);
    var opresult402 = callmethodChecked(opresult400, "++(1)", [1], string388);
    var opresult404 = callmethodChecked(opresult402, "++(1)", [1], var_emod);
    var opresult406 = callmethodChecked(opresult404, "++(1)", [1], string385);
    var opresult408 = callmethodChecked(opresult406, "++(1)", [1], var_nmi);
    var opresult410 = callmethodChecked(opresult408, "++(1)", [1], string382);
    var opresult412 = callmethodChecked(opresult410, "++(1)", [1], var_myc);
    var opresult414 = callmethodChecked(opresult412, "++(1)", [1], string379);
    // call case 4: self request
    onSelf = true;
    var call415 = callmethodChecked(this, "out(1)", [1], opresult414);
    return call415;
  };
  func319.paramCounts = [2];
  this.methods["compileobjouter(2)"] = func319;
  func319.definitionLine = 159;
  func319.definitionModule = "genjs";
  setLineNumber(171);    // compilenode method
  var func416 = function(argcv) {    // method compileobjtype(_,_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_selfr = arguments[curarg];
    curarg++;
    var var_pos = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(172);    // compilenode string
    var string417 = new GraceString("undefined");
    var var_val = string417;
    setLineNumber(173);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(174);    // compilenode identifier
    var opresult420 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult420;
    setLineNumber(175);    // compilenode member
    // call case 6: other requests
    var call423 = callmethodChecked(var_o, "value", []);
    // call case 4: self request
    onSelf = true;
    var call424 = callmethodChecked(this, "escapestring(1)", [1], call423);
    var var_nm = call424;
    setLineNumber(176);    // compilenode member
    // call case 6: other requests
    var call427 = callmethodChecked(var_o, "value", []);
    // call case 4: self request
    onSelf = true;
    var call428 = callmethodChecked(this, "escapeident(1)", [1], call427);
    var var_nmi = call428;
    setLineNumber(177);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call430 = callmethodChecked(this, "escapeident(1)", [1], var_modname);
    var var_emod = call430;
    setLineNumber(178);    // compilenode identifier
    // call case 6: other requests
    var call432 = callmethodChecked(var_o, "anonymous:=(1)", [1], GraceTrue);
    setLineNumber(179);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call434 = callmethodChecked(this, "compilenode(1)", [1], var_o);
    var_val = call434;
    setLineNumber(180);    // compilenode string
    var string436 = new GraceString(";");
    var string439 = new GraceString("\"] = ");
    var string442 = new GraceString(".data[\"");
    var opresult445 = callmethodChecked(var_selfr, "++(1)", [1], string442);
    var opresult447 = callmethodChecked(opresult445, "++(1)", [1], var_nm);
    var opresult449 = callmethodChecked(opresult447, "++(1)", [1], string439);
    var opresult451 = callmethodChecked(opresult449, "++(1)", [1], var_val);
    var opresult453 = callmethodChecked(opresult451, "++(1)", [1], string436);
    // call case 4: self request
    onSelf = true;
    var call454 = callmethodChecked(this, "out(1)", [1], opresult453);
    setLineNumber(181);    // compilenode string
    var string456 = new GraceString(" = function() {");
    var string459 = new GraceString("");
    var string462 = new GraceString("_");
    var string465 = new GraceString("    var reader_");
    var opresult467 = callmethodChecked(string465, "++(1)", [1], var_emod);
    var opresult469 = callmethodChecked(opresult467, "++(1)", [1], string462);
    var opresult471 = callmethodChecked(opresult469, "++(1)", [1], var_nmi);
    var opresult473 = callmethodChecked(opresult471, "++(1)", [1], string459);
    var opresult475 = callmethodChecked(opresult473, "++(1)", [1], var_myc);
    var opresult477 = callmethodChecked(opresult475, "++(1)", [1], string456);
    // call case 4: self request
    onSelf = true;
    var call478 = callmethodChecked(this, "out(1)", [1], opresult477);
    setLineNumber(182);    // compilenode string
    var string480 = new GraceString("\"];");
    var string483 = new GraceString("    return this.data[\"");
    var opresult485 = callmethodChecked(string483, "++(1)", [1], var_nm);
    var opresult487 = callmethodChecked(opresult485, "++(1)", [1], string480);
    // call case 4: self request
    onSelf = true;
    var call488 = callmethodChecked(this, "out(1)", [1], opresult487);
    setLineNumber(183);    // compilenode string
    var string490 = new GraceString("  };");
    // call case 4: self request
    onSelf = true;
    var call491 = callmethodChecked(this, "out(1)", [1], string490);
    setLineNumber(184);    // compilenode string
    var string493 = new GraceString(".def = true;");
    var string496 = new GraceString("");
    var string499 = new GraceString("_");
    var string502 = new GraceString("  reader_");
    var opresult504 = callmethodChecked(string502, "++(1)", [1], var_emod);
    var opresult506 = callmethodChecked(opresult504, "++(1)", [1], string499);
    var opresult508 = callmethodChecked(opresult506, "++(1)", [1], var_nmi);
    var opresult510 = callmethodChecked(opresult508, "++(1)", [1], string496);
    var opresult512 = callmethodChecked(opresult510, "++(1)", [1], var_myc);
    var opresult514 = callmethodChecked(opresult512, "++(1)", [1], string493);
    // call case 4: self request
    onSelf = true;
    var call515 = callmethodChecked(this, "out(1)", [1], opresult514);
    setLineNumber(185);    // compilenode identifier
    var var_isReadable = GraceFalse;
    setLineNumber(186);    // compilenode member
    // call case 6: other requests
    var call518 = callmethodChecked(var_o, "annotations", []);
    var block519 = new GraceBlock(this, 186, 1);
    setLineNumber(1);    // compilenode identifier
    block519.real = function(var_ann) {
      var if520 = GraceDone;
      setLineNumber(188);    // compilenode block
      var block521 = new GraceBlock(this, 188, 0);
      block521.real = function() {
        var string522 = new GraceString("confidential");
        // call case 6: other requests
        var call525 = callmethodChecked(var_ann, "value", []);
        var opresult527 = callmethodChecked(call525, "==(1)", [1], string522);
        return opresult527;
      };
      setLineNumber(187);    // compilenode string
      var string529 = new GraceString("identifier");
      // call case 6: other requests
      var call532 = callmethodChecked(var_ann, "kind", []);
      var opresult534 = callmethodChecked(call532, "==(1)", [1], string529);
      var opresult536 = callmethodChecked(opresult534, "&&(1)", [1], block521);
      if (Grace_isTrue(opresult536)) {
        setLineNumber(189);    // compilenode string
        var string538 = new GraceString(".confidential = true;");
        var string541 = new GraceString("");
        var string544 = new GraceString("_");
        var string547 = new GraceString("  reader_");
        var opresult549 = callmethodChecked(string547, "++(1)", [1], var_emod);
        var opresult551 = callmethodChecked(opresult549, "++(1)", [1], string544);
        var opresult553 = callmethodChecked(opresult551, "++(1)", [1], var_nmi);
        var opresult555 = callmethodChecked(opresult553, "++(1)", [1], string541);
        var opresult557 = callmethodChecked(opresult555, "++(1)", [1], var_myc);
        var opresult559 = callmethodChecked(opresult557, "++(1)", [1], string538);
        // call case 4: self request
        onSelf = true;
        var call560 = callmethodChecked(this, "out(1)", [1], opresult559);
        if520 = call560;
      }
      return if520;
    };
    // call case 5: prelude request
    var call561 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call518, block519);
    setLineNumber(192);    // compilenode string
    var string563 = new GraceString(";");
    var string566 = new GraceString("");
    var string569 = new GraceString("_");
    var string572 = new GraceString("\"] = reader_");
    var string575 = new GraceString(".methods[\"");
    var string578 = new GraceString("");
    var opresult580 = callmethodChecked(string578, "++(1)", [1], var_selfr);
    var opresult582 = callmethodChecked(opresult580, "++(1)", [1], string575);
    var opresult584 = callmethodChecked(opresult582, "++(1)", [1], var_nm);
    var opresult586 = callmethodChecked(opresult584, "++(1)", [1], string572);
    var opresult588 = callmethodChecked(opresult586, "++(1)", [1], var_emod);
    var opresult590 = callmethodChecked(opresult588, "++(1)", [1], string569);
    var opresult592 = callmethodChecked(opresult590, "++(1)", [1], var_nmi);
    var opresult594 = callmethodChecked(opresult592, "++(1)", [1], string566);
    var opresult596 = callmethodChecked(opresult594, "++(1)", [1], var_myc);
    var opresult598 = callmethodChecked(opresult596, "++(1)", [1], string563);
    // call case 4: self request
    onSelf = true;
    var call599 = callmethodChecked(this, "out(1)", [1], opresult598);
    return call599;
  };
  func416.paramCounts = [3];
  this.methods["compileobjtype(3)"] = func416;
  func416.definitionLine = 171;
  func416.definitionModule = "genjs";
  setLineNumber(194);    // compilenode method
  var func600 = function(argcv) {    // method compileobjdefdec(_,_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_selfr = arguments[curarg];
    curarg++;
    var var_pos = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(195);    // compilenode string
    var string601 = new GraceString("undefined");
    var var_val = string601;
    var if602 = GraceDone;
    setLineNumber(196);    // compilenode member
    // call case 6: other requests
    var call604 = callmethodChecked(var_o, "value", []);
    var opresult607 = callmethodChecked(GraceFalse, "\u2260(1)", [1], call604);
    if (Grace_isTrue(opresult607)) {
      var if608 = GraceDone;
      setLineNumber(197);    // compilenode string
      var string609 = new GraceString("object");
      // call case 6: other requests
      // call case 6: other requests
      var call613 = callmethodChecked(var_o, "value", []);
      var call614 = callmethodChecked(call613, "kind", []);
      var opresult616 = callmethodChecked(call614, "==(1)", [1], string609);
      if (Grace_isTrue(opresult616)) {
        setLineNumber(198);    // compilenode member
        // call case 6: other requests
        var call619 = callmethodChecked(var_o, "value", []);
        // call case 4: self request
        onSelf = true;
        var call620 = callmethodChecked(this, "compileobject(3)", [3], call619, var_selfr, GraceFalse);
        setLineNumber(199);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call623 = callmethodChecked(var_o, "value", []);
        var call624 = callmethodChecked(call623, "register", []);
        var_val = call624;
        if608 = GraceDone;
      } else {
        setLineNumber(201);    // compilenode member
        // call case 6: other requests
        var call627 = callmethodChecked(var_o, "value", []);
        // call case 4: self request
        onSelf = true;
        var call628 = callmethodChecked(this, "compilenode(1)", [1], call627);
        var_val = call628;
        if608 = GraceDone;
      }
      if602 = if608;
    }
    setLineNumber(204);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(205);    // compilenode identifier
    var opresult631 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult631;
    setLineNumber(206);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call635 = callmethodChecked(var_o, "name", []);
    var call636 = callmethodChecked(call635, "value", []);
    // call case 4: self request
    onSelf = true;
    var call637 = callmethodChecked(this, "escapestring(1)", [1], call636);
    var var_nm = call637;
    setLineNumber(207);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call641 = callmethodChecked(var_o, "name", []);
    var call642 = callmethodChecked(call641, "value", []);
    // call case 4: self request
    onSelf = true;
    var call643 = callmethodChecked(this, "escapeident(1)", [1], call642);
    var var_nmi = call643;
    setLineNumber(208);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call645 = callmethodChecked(this, "escapeident(1)", [1], var_modname);
    var var_emod = call645;
    setLineNumber(209);    // compilenode string
    var string647 = new GraceString(";");
    var string650 = new GraceString("\"] = ");
    var string653 = new GraceString(".data[\"");
    var string656 = new GraceString("");
    var opresult658 = callmethodChecked(string656, "++(1)", [1], var_selfr);
    var opresult660 = callmethodChecked(opresult658, "++(1)", [1], string653);
    var opresult662 = callmethodChecked(opresult660, "++(1)", [1], var_nm);
    var opresult664 = callmethodChecked(opresult662, "++(1)", [1], string650);
    var opresult666 = callmethodChecked(opresult664, "++(1)", [1], var_val);
    var opresult668 = callmethodChecked(opresult666, "++(1)", [1], string647);
    // call case 4: self request
    onSelf = true;
    var call669 = callmethodChecked(this, "out(1)", [1], opresult668);
    setLineNumber(210);    // compilenode string
    var string671 = new GraceString(" = function() {");
    var string674 = new GraceString("");
    var string677 = new GraceString("_");
    var string680 = new GraceString("var reader_");
    var opresult682 = callmethodChecked(string680, "++(1)", [1], var_emod);
    var opresult684 = callmethodChecked(opresult682, "++(1)", [1], string677);
    var opresult686 = callmethodChecked(opresult684, "++(1)", [1], var_nmi);
    var opresult688 = callmethodChecked(opresult686, "++(1)", [1], string674);
    var opresult690 = callmethodChecked(opresult688, "++(1)", [1], var_myc);
    var opresult692 = callmethodChecked(opresult690, "++(1)", [1], string671);
    // call case 4: self request
    onSelf = true;
    var call693 = callmethodChecked(this, "out(1)", [1], opresult692);
    setLineNumber(211);    // compilenode string
    var string695 = new GraceString("\"];");
    var string698 = new GraceString("  return this.data[\"");
    var opresult700 = callmethodChecked(string698, "++(1)", [1], var_nm);
    var opresult702 = callmethodChecked(opresult700, "++(1)", [1], string695);
    // call case 4: self request
    onSelf = true;
    var call703 = callmethodChecked(this, "out(1)", [1], opresult702);
    setLineNumber(212);    // compilenode string
    var string705 = new GraceString("};");
    // call case 4: self request
    onSelf = true;
    var call706 = callmethodChecked(this, "out(1)", [1], string705);
    setLineNumber(213);    // compilenode string
    var string708 = new GraceString(".def = true;");
    var string711 = new GraceString("");
    var string714 = new GraceString("_");
    var string717 = new GraceString("reader_");
    var opresult719 = callmethodChecked(string717, "++(1)", [1], var_emod);
    var opresult721 = callmethodChecked(opresult719, "++(1)", [1], string714);
    var opresult723 = callmethodChecked(opresult721, "++(1)", [1], var_nmi);
    var opresult725 = callmethodChecked(opresult723, "++(1)", [1], string711);
    var opresult727 = callmethodChecked(opresult725, "++(1)", [1], var_myc);
    var opresult729 = callmethodChecked(opresult727, "++(1)", [1], string708);
    // call case 4: self request
    onSelf = true;
    var call730 = callmethodChecked(this, "out(1)", [1], opresult729);
    var if731 = GraceDone;
    setLineNumber(214);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call734 = callmethodChecked(var_o, "isReadable", []);
    var call735 = callmethodChecked(call734, "not", []);
    if (Grace_isTrue(call735)) {
      setLineNumber(215);    // compilenode string
      var string737 = new GraceString(".confidential = true;");
      var string740 = new GraceString("");
      var string743 = new GraceString("_");
      var string746 = new GraceString("reader_");
      var opresult748 = callmethodChecked(string746, "++(1)", [1], var_emod);
      var opresult750 = callmethodChecked(opresult748, "++(1)", [1], string743);
      var opresult752 = callmethodChecked(opresult750, "++(1)", [1], var_nmi);
      var opresult754 = callmethodChecked(opresult752, "++(1)", [1], string740);
      var opresult756 = callmethodChecked(opresult754, "++(1)", [1], var_myc);
      var opresult758 = callmethodChecked(opresult756, "++(1)", [1], string737);
      // call case 4: self request
      onSelf = true;
      var call759 = callmethodChecked(this, "out(1)", [1], opresult758);
      if731 = call759;
    }
    setLineNumber(217);    // compilenode string
    var string761 = new GraceString(";");
    var string764 = new GraceString("");
    var string767 = new GraceString("_");
    var string770 = new GraceString("\"] = reader_");
    var string773 = new GraceString(".methods[\"");
    var string776 = new GraceString("");
    var opresult778 = callmethodChecked(string776, "++(1)", [1], var_selfr);
    var opresult780 = callmethodChecked(opresult778, "++(1)", [1], string773);
    var opresult782 = callmethodChecked(opresult780, "++(1)", [1], var_nm);
    var opresult784 = callmethodChecked(opresult782, "++(1)", [1], string770);
    var opresult786 = callmethodChecked(opresult784, "++(1)", [1], var_emod);
    var opresult788 = callmethodChecked(opresult786, "++(1)", [1], string767);
    var opresult790 = callmethodChecked(opresult788, "++(1)", [1], var_nmi);
    var opresult792 = callmethodChecked(opresult790, "++(1)", [1], string764);
    var opresult794 = callmethodChecked(opresult792, "++(1)", [1], var_myc);
    var opresult796 = callmethodChecked(opresult794, "++(1)", [1], string761);
    // call case 4: self request
    onSelf = true;
    var call797 = callmethodChecked(this, "out(1)", [1], opresult796);
    var if798 = GraceDone;
    setLineNumber(218);    // compilenode string
    var string800 = new GraceString("parent");
    // call case 6: other requests
    var call801 = callmethodChecked(var_ast, "findAnnotation(2)", [2], var_o, string800);
    if (Grace_isTrue(call801)) {
      setLineNumber(219);    // compilenode string
      var string803 = new GraceString(";");
      var string806 = new GraceString(".superobj = ");
      var string809 = new GraceString("  ");
      var opresult811 = callmethodChecked(string809, "++(1)", [1], var_selfr);
      var opresult813 = callmethodChecked(opresult811, "++(1)", [1], string806);
      var opresult815 = callmethodChecked(opresult813, "++(1)", [1], var_val);
      var opresult817 = callmethodChecked(opresult815, "++(1)", [1], string803);
      // call case 4: self request
      onSelf = true;
      var call818 = callmethodChecked(this, "out(1)", [1], opresult817);
      if798 = call818;
    }
    var if819 = GraceDone;
    setLineNumber(221);    // compilenode identifier
    if (Grace_isTrue(var_emitTypeChecks)) {
      var if820 = GraceDone;
      setLineNumber(222);    // compilenode member
      // call case 6: other requests
      var call823 = callmethodChecked(var_o, "dtype", []);
      var opresult825 = callmethodChecked(call823, "\u2260(1)", [1], GraceFalse);
      if (Grace_isTrue(opresult825)) {
        var if826 = GraceDone;
        setLineNumber(223);    // compilenode string
        var string827 = new GraceString("Unknown");
        // call case 6: other requests
        // call case 6: other requests
        var call831 = callmethodChecked(var_o, "dtype", []);
        var call832 = callmethodChecked(call831, "value", []);
        var opresult834 = callmethodChecked(call832, "\u2260(1)", [1], string827);
        if (Grace_isTrue(opresult834)) {
          setLineNumber(224);    // compilenode member
          // call case 6: other requests
          var call837 = callmethodChecked(var_o, "line", []);
          var string838 = new GraceString("typecheck in compileobjdefdec");
          // call case 4: self request
          onSelf = true;
          var call839 = callmethodChecked(this, "noteLineNumber(1)comment(1)", [1, 1], call837, string838);
          setLineNumber(225);    // compilenode string
          var string841 = new GraceString(")))");
          var string844 = new GraceString(", \"match(1)\", [1], ");
          // call case 6: other requests
          var call848 = callmethodChecked(var_o, "dtype", []);
          // call case 4: self request
          onSelf = true;
          var call849 = callmethodChecked(this, "compilenode(1)", [1], call848);
          var string851 = new GraceString("if (!Grace_isTrue(callmethod(");
          var opresult853 = callmethodChecked(string851, "++(1)", [1], call849);
          var opresult855 = callmethodChecked(opresult853, "++(1)", [1], string844);
          var opresult857 = callmethodChecked(opresult855, "++(1)", [1], var_val);
          var opresult859 = callmethodChecked(opresult857, "++(1)", [1], string841);
          // call case 4: self request
          onSelf = true;
          var call860 = callmethodChecked(this, "out(1)", [1], opresult859);
          setLineNumber(226);    // compilenode string
          var string862 = new GraceString("  throw new GraceExceptionPacket(TypeErrorObject,");
          // call case 4: self request
          onSelf = true;
          var call863 = callmethodChecked(this, "out(1)", [1], string862);
          setLineNumber(227);    // compilenode string
          var string865 = new GraceString("\"));");
          // call case 6: other requests
          // call case 6: other requests
          var call869 = callmethodChecked(var_o, "dtype", []);
          var call870 = callmethodChecked(call869, "toGrace(1)", [1], new GraceNum(0));
          var string872 = new GraceString("' is not of type ");
          // call case 6: other requests
          // call case 6: other requests
          var call876 = callmethodChecked(var_o, "name", []);
          var call877 = callmethodChecked(call876, "value", []);
          var string879 = new GraceString("      new GraceString(\"value of def '");
          var opresult881 = callmethodChecked(string879, "++(1)", [1], call877);
          var opresult883 = callmethodChecked(opresult881, "++(1)", [1], string872);
          var opresult885 = callmethodChecked(opresult883, "++(1)", [1], call870);
          var opresult887 = callmethodChecked(opresult885, "++(1)", [1], string865);
          // call case 4: self request
          onSelf = true;
          var call888 = callmethodChecked(this, "out(1)", [1], opresult887);
          if826 = call888;
        }
        if820 = if826;
      }
      if819 = if820;
    }
    return if819;
  };
  func600.paramCounts = [3];
  this.methods["compileobjdefdec(3)"] = func600;
  func600.definitionLine = 194;
  func600.definitionModule = "genjs";
  setLineNumber(232);    // compilenode method
  var func889 = function(argcv) {    // method compileobjvardec(_,_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_selfr = arguments[curarg];
    curarg++;
    var var_pos = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(233);    // compilenode string
    var string890 = new GraceString("undefined");
    var var_val = string890;
    var if891 = GraceDone;
    setLineNumber(234);    // compilenode member
    // call case 6: other requests
    var call893 = callmethodChecked(var_o, "value", []);
    var opresult896 = callmethodChecked(GraceFalse, "\u2260(1)", [1], call893);
    if (Grace_isTrue(opresult896)) {
      setLineNumber(235);    // compilenode member
      // call case 6: other requests
      var call899 = callmethodChecked(var_o, "value", []);
      // call case 4: self request
      onSelf = true;
      var call900 = callmethodChecked(this, "compilenode(1)", [1], call899);
      var_val = call900;
      if891 = GraceDone;
    }
    setLineNumber(237);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(238);    // compilenode identifier
    var opresult903 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult903;
    setLineNumber(239);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call907 = callmethodChecked(var_o, "name", []);
    var call908 = callmethodChecked(call907, "value", []);
    // call case 4: self request
    onSelf = true;
    var call909 = callmethodChecked(this, "escapestring(1)", [1], call908);
    var var_nm = call909;
    setLineNumber(240);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call913 = callmethodChecked(var_o, "name", []);
    var call914 = callmethodChecked(call913, "value", []);
    // call case 4: self request
    onSelf = true;
    var call915 = callmethodChecked(this, "escapeident(1)", [1], call914);
    var var_nmi = call915;
    setLineNumber(241);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call917 = callmethodChecked(this, "escapeident(1)", [1], var_modname);
    var var_emod = call917;
    setLineNumber(242);    // compilenode string
    var string919 = new GraceString(";");
    var string922 = new GraceString("\"] = ");
    var string925 = new GraceString(".data[\"");
    var opresult928 = callmethodChecked(var_selfr, "++(1)", [1], string925);
    var opresult930 = callmethodChecked(opresult928, "++(1)", [1], var_nm);
    var opresult932 = callmethodChecked(opresult930, "++(1)", [1], string922);
    var opresult934 = callmethodChecked(opresult932, "++(1)", [1], var_val);
    var opresult936 = callmethodChecked(opresult934, "++(1)", [1], string919);
    // call case 4: self request
    onSelf = true;
    var call937 = callmethodChecked(this, "out(1)", [1], opresult936);
    setLineNumber(243);    // compilenode string
    var string939 = new GraceString(" = function() {");
    var string943 = new GraceString("_");
    var string946 = new GraceString("var reader_");
    var opresult948 = callmethodChecked(string946, "++(1)", [1], var_emod);
    var opresult950 = callmethodChecked(opresult948, "++(1)", [1], string943);
    var opresult952 = callmethodChecked(opresult950, "++(1)", [1], var_nmi);
    var opresult954 = callmethodChecked(opresult952, "++(1)", [1], var_myc);
    var opresult956 = callmethodChecked(opresult954, "++(1)", [1], string939);
    // call case 4: self request
    onSelf = true;
    var call957 = callmethodChecked(this, "out(1)", [1], opresult956);
    setLineNumber(244);    // compilenode string
    var string959 = new GraceString("\"];");
    var string962 = new GraceString("  return this.data[\"");
    var opresult964 = callmethodChecked(string962, "++(1)", [1], var_nm);
    var opresult966 = callmethodChecked(opresult964, "++(1)", [1], string959);
    // call case 4: self request
    onSelf = true;
    var call967 = callmethodChecked(this, "out(1)", [1], opresult966);
    setLineNumber(245);    // compilenode string
    var string969 = new GraceString("};");
    // call case 4: self request
    onSelf = true;
    var call970 = callmethodChecked(this, "out(1)", [1], string969);
    setLineNumber(247);    // compilenode string
    var string972 = new GraceString(";");
    var string976 = new GraceString("_");
    setLineNumber(246);    // compilenode string
    var string979 = new GraceString("\"] = reader_");
    var string982 = new GraceString(".methods[\"");
    var opresult985 = callmethodChecked(var_selfr, "++(1)", [1], string982);
    var opresult987 = callmethodChecked(opresult985, "++(1)", [1], var_nm);
    var opresult989 = callmethodChecked(opresult987, "++(1)", [1], string979);
    var opresult991 = callmethodChecked(opresult989, "++(1)", [1], var_emod);
    var opresult993 = callmethodChecked(opresult991, "++(1)", [1], string976);
    var opresult995 = callmethodChecked(opresult993, "++(1)", [1], var_nmi);
    var opresult997 = callmethodChecked(opresult995, "++(1)", [1], var_myc);
    var opresult999 = callmethodChecked(opresult997, "++(1)", [1], string972);
    // call case 4: self request
    onSelf = true;
    var call1000 = callmethodChecked(this, "out(1)", [1], opresult999);
    setLineNumber(248);    // compilenode string
    var string1002 = new GraceString(";");
    var string1005 = new GraceString("\"] = ");
    var string1008 = new GraceString(".data[\"");
    var opresult1011 = callmethodChecked(var_selfr, "++(1)", [1], string1008);
    var opresult1013 = callmethodChecked(opresult1011, "++(1)", [1], var_nm);
    var opresult1015 = callmethodChecked(opresult1013, "++(1)", [1], string1005);
    var opresult1017 = callmethodChecked(opresult1015, "++(1)", [1], var_val);
    var opresult1019 = callmethodChecked(opresult1017, "++(1)", [1], string1002);
    // call case 4: self request
    onSelf = true;
    var call1020 = callmethodChecked(this, "out(1)", [1], opresult1019);
    setLineNumber(249);    // compilenode string
    var string1022 = new GraceString(" = function(argcv, o) {");
    var string1026 = new GraceString("_");
    var string1029 = new GraceString("var writer_");
    var opresult1031 = callmethodChecked(string1029, "++(1)", [1], var_emod);
    var opresult1033 = callmethodChecked(opresult1031, "++(1)", [1], string1026);
    var opresult1035 = callmethodChecked(opresult1033, "++(1)", [1], var_nmi);
    var opresult1037 = callmethodChecked(opresult1035, "++(1)", [1], var_myc);
    var opresult1039 = callmethodChecked(opresult1037, "++(1)", [1], string1022);
    // call case 4: self request
    onSelf = true;
    var call1040 = callmethodChecked(this, "out(1)", [1], opresult1039);
    setLineNumber(250);    // compilenode string
    var string1042 = new GraceString("\"] = o;");
    var string1045 = new GraceString("  this.data[\"");
    var opresult1047 = callmethodChecked(string1045, "++(1)", [1], var_nm);
    var opresult1049 = callmethodChecked(opresult1047, "++(1)", [1], string1042);
    // call case 4: self request
    onSelf = true;
    var call1050 = callmethodChecked(this, "out(1)", [1], opresult1049);
    setLineNumber(251);    // compilenode string
    var string1052 = new GraceString("  return GraceDone;");
    // call case 4: self request
    onSelf = true;
    var call1053 = callmethodChecked(this, "out(1)", [1], string1052);
    setLineNumber(252);    // compilenode string
    var string1055 = new GraceString("};");
    // call case 4: self request
    onSelf = true;
    var call1056 = callmethodChecked(this, "out(1)", [1], string1055);
    setLineNumber(254);    // compilenode string
    var string1058 = new GraceString(";");
    var string1062 = new GraceString("_");
    setLineNumber(253);    // compilenode string
    var string1065 = new GraceString(":=(1)\"] = writer_");
    var string1068 = new GraceString(".methods[\"");
    var opresult1071 = callmethodChecked(var_selfr, "++(1)", [1], string1068);
    var opresult1073 = callmethodChecked(opresult1071, "++(1)", [1], var_nm);
    var opresult1075 = callmethodChecked(opresult1073, "++(1)", [1], string1065);
    var opresult1077 = callmethodChecked(opresult1075, "++(1)", [1], var_emod);
    var opresult1079 = callmethodChecked(opresult1077, "++(1)", [1], string1062);
    var opresult1081 = callmethodChecked(opresult1079, "++(1)", [1], var_nmi);
    var opresult1083 = callmethodChecked(opresult1081, "++(1)", [1], var_myc);
    var opresult1085 = callmethodChecked(opresult1083, "++(1)", [1], string1058);
    // call case 4: self request
    onSelf = true;
    var call1086 = callmethodChecked(this, "out(1)", [1], opresult1085);
    var if1087 = GraceDone;
    setLineNumber(255);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call1090 = callmethodChecked(var_o, "isReadable", []);
    var call1091 = callmethodChecked(call1090, "not", []);
    if (Grace_isTrue(call1091)) {
      setLineNumber(256);    // compilenode string
      var string1093 = new GraceString(".confidential = true;");
      var string1096 = new GraceString("");
      var string1099 = new GraceString("_");
      var string1102 = new GraceString("reader_");
      var opresult1104 = callmethodChecked(string1102, "++(1)", [1], var_emod);
      var opresult1106 = callmethodChecked(opresult1104, "++(1)", [1], string1099);
      var opresult1108 = callmethodChecked(opresult1106, "++(1)", [1], var_nmi);
      var opresult1110 = callmethodChecked(opresult1108, "++(1)", [1], string1096);
      var opresult1112 = callmethodChecked(opresult1110, "++(1)", [1], var_myc);
      var opresult1114 = callmethodChecked(opresult1112, "++(1)", [1], string1093);
      // call case 4: self request
      onSelf = true;
      var call1115 = callmethodChecked(this, "out(1)", [1], opresult1114);
      if1087 = call1115;
    }
    var if1116 = GraceDone;
    setLineNumber(258);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call1119 = callmethodChecked(var_o, "isWritable", []);
    var call1120 = callmethodChecked(call1119, "not", []);
    if (Grace_isTrue(call1120)) {
      setLineNumber(259);    // compilenode string
      var string1122 = new GraceString(".confidential = true;");
      var string1125 = new GraceString("");
      var string1128 = new GraceString("_");
      var string1131 = new GraceString("writer_");
      var opresult1133 = callmethodChecked(string1131, "++(1)", [1], var_emod);
      var opresult1135 = callmethodChecked(opresult1133, "++(1)", [1], string1128);
      var opresult1137 = callmethodChecked(opresult1135, "++(1)", [1], var_nmi);
      var opresult1139 = callmethodChecked(opresult1137, "++(1)", [1], string1125);
      var opresult1141 = callmethodChecked(opresult1139, "++(1)", [1], var_myc);
      var opresult1143 = callmethodChecked(opresult1141, "++(1)", [1], string1122);
      // call case 4: self request
      onSelf = true;
      var call1144 = callmethodChecked(this, "out(1)", [1], opresult1143);
      if1116 = call1144;
    }
    var if1145 = GraceDone;
    setLineNumber(261);    // compilenode identifier
    if (Grace_isTrue(var_emitTypeChecks)) {
      var if1146 = GraceDone;
      setLineNumber(262);    // compilenode member
      // call case 6: other requests
      var call1149 = callmethodChecked(var_o, "dtype", []);
      var opresult1151 = callmethodChecked(call1149, "\u2260(1)", [1], GraceFalse);
      if (Grace_isTrue(opresult1151)) {
        var if1152 = GraceDone;
        setLineNumber(263);    // compilenode string
        var string1153 = new GraceString("Unknown");
        // call case 6: other requests
        // call case 6: other requests
        var call1157 = callmethodChecked(var_o, "dtype", []);
        var call1158 = callmethodChecked(call1157, "value", []);
        var opresult1160 = callmethodChecked(call1158, "\u2260(1)", [1], string1153);
        if (Grace_isTrue(opresult1160)) {
          var if1161 = GraceDone;
          setLineNumber(264);    // compilenode string
          var string1162 = new GraceString("undefined");
          var opresult1165 = callmethodChecked(var_val, "==(1)", [1], string1162);
          if (Grace_isTrue(opresult1165)) {
            setLineNumber(265);    // compilenode identifier
            return GraceTrue;
          }
          setLineNumber(267);    // compilenode member
          // call case 6: other requests
          var call1168 = callmethodChecked(var_o, "line", []);
          var string1169 = new GraceString("typecheck in compileobjvardec");
          // call case 4: self request
          onSelf = true;
          var call1170 = callmethodChecked(this, "noteLineNumber(1)comment(1)", [1, 1], call1168, string1169);
          setLineNumber(268);    // compilenode string
          var string1172 = new GraceString(")))");
          var string1175 = new GraceString(", \"match(1)\", [1], ");
          // call case 6: other requests
          var call1179 = callmethodChecked(var_o, "dtype", []);
          // call case 4: self request
          onSelf = true;
          var call1180 = callmethodChecked(this, "compilenode(1)", [1], call1179);
          var string1182 = new GraceString("if (!Grace_isTrue(callmethod(");
          var opresult1184 = callmethodChecked(string1182, "++(1)", [1], call1180);
          var opresult1186 = callmethodChecked(opresult1184, "++(1)", [1], string1175);
          var opresult1188 = callmethodChecked(opresult1186, "++(1)", [1], var_val);
          var opresult1190 = callmethodChecked(opresult1188, "++(1)", [1], string1172);
          // call case 4: self request
          onSelf = true;
          var call1191 = callmethodChecked(this, "out(1)", [1], opresult1190);
          setLineNumber(269);    // compilenode string
          var string1193 = new GraceString("  throw new GraceExceptionPacket(TypeErrorObject,");
          // call case 4: self request
          onSelf = true;
          var call1194 = callmethodChecked(this, "out(1)", [1], string1193);
          setLineNumber(270);    // compilenode string
          var string1196 = new GraceString("\"));");
          // call case 6: other requests
          // call case 6: other requests
          var call1200 = callmethodChecked(var_o, "dtype", []);
          var call1201 = callmethodChecked(call1200, "toGrace(1)", [1], new GraceNum(0));
          var string1203 = new GraceString("' is not of type ");
          // call case 6: other requests
          // call case 6: other requests
          var call1207 = callmethodChecked(var_o, "name", []);
          var call1208 = callmethodChecked(call1207, "value", []);
          var string1210 = new GraceString("      new GraceString(\"initial value of var '");
          var opresult1212 = callmethodChecked(string1210, "++(1)", [1], call1208);
          var opresult1214 = callmethodChecked(opresult1212, "++(1)", [1], string1203);
          var opresult1216 = callmethodChecked(opresult1214, "++(1)", [1], call1201);
          var opresult1218 = callmethodChecked(opresult1216, "++(1)", [1], string1196);
          // call case 4: self request
          onSelf = true;
          var call1219 = callmethodChecked(this, "out(1)", [1], opresult1218);
          if1152 = call1219;
        }
        if1146 = if1152;
      }
      if1145 = if1146;
    }
    return if1145;
  };
  func889.paramCounts = [3];
  this.methods["compileobjvardec(3)"] = func889;
  func889.definitionLine = 232;
  func889.definitionModule = "genjs";
  setLineNumber(275);    // compilenode method
  var func1220 = function(argcv) {    // method compileobject(_,_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_outerRef = arguments[curarg];
    curarg++;
    var var_inheritingObject = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(276);    // compilenode identifier
    var var_origInBlock = var_inBlock;
    setLineNumber(277);    // compilenode identifier
    var_inBlock = GraceFalse;
    setLineNumber(278);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(279);    // compilenode identifier
    var opresult1223 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult1223;
    setLineNumber(280);    // compilenode string
    var string1225 = new GraceString("obj");
    var opresult1227 = callmethodChecked(string1225, "++(1)", [1], var_myc);
    var var_selfr = opresult1227;
    setLineNumber(281);    // compilenode identifier
    // call case 6: other requests
    var call1229 = callmethodChecked(var_o, "register:=(1)", [1], var_selfr);
    var if1230 = GraceDone;
    setLineNumber(283);    // compilenode member
    // call case 6: other requests
    var call1232 = callmethodChecked(var_o, "inTrait", []);
    if (Grace_isTrue(call1232)) {
      setLineNumber(284);    // compilenode string
      var string1233 = new GraceString("GraceTrait");
      if1230 = string1233;
    } else {
      var if1234 = GraceDone;
      setLineNumber(285);    // compilenode member
      // call case 6: other requests
      var call1236 = callmethodChecked(var_o, "superclass", []);
      var opresult1239 = callmethodChecked(GraceFalse, "==(1)", [1], call1236);
      if (Grace_isTrue(opresult1239)) {
        setLineNumber(286);    // compilenode string
        var string1240 = new GraceString("GraceObject");
        if1234 = string1240;
      } else {
        setLineNumber(288);    // compilenode string
        var string1241 = new GraceString("null");
        if1234 = string1241;
      }
      if1230 = if1234;
    }
    var var_superConstructor = if1230;
    setLineNumber(290);    // compilenode string
    var string1243 = new GraceString("\");");
    // call case 6: other requests
    var call1246 = callmethodChecked(var_o, "name", []);
    var string1248 = new GraceString(", \"");
    var string1251 = new GraceString(" = Grace_allocObject(");
    var string1254 = new GraceString("var ");
    var opresult1256 = callmethodChecked(string1254, "++(1)", [1], var_selfr);
    var opresult1258 = callmethodChecked(opresult1256, "++(1)", [1], string1251);
    var opresult1260 = callmethodChecked(opresult1258, "++(1)", [1], var_superConstructor);
    var opresult1262 = callmethodChecked(opresult1260, "++(1)", [1], string1248);
    var opresult1264 = callmethodChecked(opresult1262, "++(1)", [1], call1246);
    var opresult1266 = callmethodChecked(opresult1264, "++(1)", [1], string1243);
    // call case 4: self request
    onSelf = true;
    var call1267 = callmethodChecked(this, "out(1)", [1], opresult1266);
    setLineNumber(291);    // compilenode string
    var string1269 = new GraceString("\";");
    var string1272 = new GraceString(".definitionModule = \"");
    var string1275 = new GraceString("");
    var opresult1277 = callmethodChecked(string1275, "++(1)", [1], var_selfr);
    var opresult1279 = callmethodChecked(opresult1277, "++(1)", [1], string1272);
    var opresult1281 = callmethodChecked(opresult1279, "++(1)", [1], var_modname);
    var opresult1283 = callmethodChecked(opresult1281, "++(1)", [1], string1269);
    // call case 4: self request
    onSelf = true;
    var call1284 = callmethodChecked(this, "out(1)", [1], opresult1283);
    setLineNumber(292);    // compilenode string
    var string1286 = new GraceString(";");
    // call case 6: other requests
    var call1289 = callmethodChecked(var_o, "line", []);
    var string1291 = new GraceString(".definitionLine = ");
    var string1294 = new GraceString("");
    var opresult1296 = callmethodChecked(string1294, "++(1)", [1], var_selfr);
    var opresult1298 = callmethodChecked(opresult1296, "++(1)", [1], string1291);
    var opresult1300 = callmethodChecked(opresult1298, "++(1)", [1], call1289);
    var opresult1302 = callmethodChecked(opresult1300, "++(1)", [1], string1286);
    // call case 4: self request
    onSelf = true;
    var call1303 = callmethodChecked(this, "out(1)", [1], opresult1302);
    var if1304 = GraceDone;
    setLineNumber(293);    // compilenode identifier
    if (Grace_isTrue(var_inheritingObject)) {
      setLineNumber(294);    // compilenode string
      var string1306 = new GraceString(" = inheritingObject;");
      var string1309 = new GraceString("var inho");
      var opresult1311 = callmethodChecked(string1309, "++(1)", [1], var_myc);
      var opresult1313 = callmethodChecked(opresult1311, "++(1)", [1], string1306);
      // call case 4: self request
      onSelf = true;
      var call1314 = callmethodChecked(this, "out(1)", [1], opresult1313);
      setLineNumber(295);    // compilenode string
      var string1316 = new GraceString(".superobj;");
      var string1319 = new GraceString(" = inho");
      var string1322 = new GraceString(".superobj) inho");
      var string1325 = new GraceString("while (inho");
      var opresult1327 = callmethodChecked(string1325, "++(1)", [1], var_myc);
      var opresult1329 = callmethodChecked(opresult1327, "++(1)", [1], string1322);
      var opresult1331 = callmethodChecked(opresult1329, "++(1)", [1], var_myc);
      var opresult1333 = callmethodChecked(opresult1331, "++(1)", [1], string1319);
      var opresult1335 = callmethodChecked(opresult1333, "++(1)", [1], var_myc);
      var opresult1337 = callmethodChecked(opresult1335, "++(1)", [1], string1316);
      // call case 4: self request
      onSelf = true;
      var call1338 = callmethodChecked(this, "out(1)", [1], opresult1337);
      setLineNumber(296);    // compilenode string
      var string1340 = new GraceString(";");
      var string1343 = new GraceString(".superobj = ");
      var string1346 = new GraceString("inho");
      var opresult1348 = callmethodChecked(string1346, "++(1)", [1], var_myc);
      var opresult1350 = callmethodChecked(opresult1348, "++(1)", [1], string1343);
      var opresult1352 = callmethodChecked(opresult1350, "++(1)", [1], var_selfr);
      var opresult1354 = callmethodChecked(opresult1352, "++(1)", [1], string1340);
      // call case 4: self request
      onSelf = true;
      var call1355 = callmethodChecked(this, "out(1)", [1], opresult1354);
      setLineNumber(297);    // compilenode string
      var string1357 = new GraceString(".data = inheritingObject.data;");
      var string1360 = new GraceString("");
      var opresult1362 = callmethodChecked(string1360, "++(1)", [1], var_selfr);
      var opresult1364 = callmethodChecked(opresult1362, "++(1)", [1], string1357);
      // call case 4: self request
      onSelf = true;
      var call1365 = callmethodChecked(this, "out(1)", [1], opresult1364);
      setLineNumber(298);    // compilenode string
      var string1367 = new GraceString("if (inheritingObject.hasOwnProperty('_value'))");
      // call case 4: self request
      onSelf = true;
      var call1368 = callmethodChecked(this, "out(1)", [1], string1367);
      setLineNumber(299);    // compilenode string
      var string1370 = new GraceString("._value = inheritingObject._value;");
      var string1373 = new GraceString("  ");
      var opresult1375 = callmethodChecked(string1373, "++(1)", [1], var_selfr);
      var opresult1377 = callmethodChecked(opresult1375, "++(1)", [1], string1370);
      // call case 4: self request
      onSelf = true;
      var call1378 = callmethodChecked(this, "out(1)", [1], opresult1377);
      if1304 = call1378;
    }
    setLineNumber(301);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call1380 = callmethodChecked(this, "compileobjouter(2)", [2], var_selfr, var_outerRef);
    setLineNumber(302);    // compilenode string
    var string1382 = new GraceString(" = function() {");
    var string1385 = new GraceString("var obj_init_");
    var opresult1387 = callmethodChecked(string1385, "++(1)", [1], var_myc);
    var opresult1389 = callmethodChecked(opresult1387, "++(1)", [1], string1382);
    // call case 4: self request
    onSelf = true;
    var call1390 = callmethodChecked(this, "out(1)", [1], opresult1389);
    setLineNumber(303);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call1392 = callmethodChecked(this, "increaseindent", []);
    setLineNumber(304);    // compilenode string
    var string1394 = new GraceString("var origSuperDepth = superDepth;");
    // call case 4: self request
    onSelf = true;
    var call1395 = callmethodChecked(this, "out(1)", [1], string1394);
    setLineNumber(305);    // compilenode string
    var string1397 = new GraceString(";");
    var string1400 = new GraceString("superDepth = ");
    var opresult1402 = callmethodChecked(string1400, "++(1)", [1], var_selfr);
    var opresult1404 = callmethodChecked(opresult1402, "++(1)", [1], string1397);
    // call case 4: self request
    onSelf = true;
    var call1405 = callmethodChecked(this, "out(1)", [1], opresult1404);
    setLineNumber(306);    // compilenode num
    var var_pos = new GraceNum(0);
    setLineNumber(307);    // compilenode member
    // call case 6: other requests
    var call1408 = callmethodChecked(var_o, "value", []);
    var block1409 = new GraceBlock(this, 307, 1);
    setLineNumber(1);    // compilenode identifier
    block1409.real = function(var_e) {
      var if1410 = GraceDone;
      setLineNumber(308);    // compilenode string
      var string1411 = new GraceString("method");
      // call case 6: other requests
      var call1414 = callmethodChecked(var_e, "kind", []);
      var opresult1416 = callmethodChecked(call1414, "==(1)", [1], string1411);
      if (Grace_isTrue(opresult1416)) {
        setLineNumber(309);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call1418 = callmethodChecked(this, "compilemethod(2)", [2], var_e, var_selfr);
        if1410 = call1418;
      }
      return if1410;
    };
    // call case 5: prelude request
    var call1419 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1408, block1409);
    var if1420 = GraceDone;
    setLineNumber(314);    // compilenode member
    // call case 6: other requests
    var call1422 = callmethodChecked(var_o, "superclass", []);
    var opresult1425 = callmethodChecked(GraceFalse, "\u2260(1)", [1], call1422);
    if (Grace_isTrue(opresult1425)) {
      setLineNumber(315);    // compilenode member
      // call case 6: other requests
      var call1428 = callmethodChecked(var_o, "superclass", []);
      // call case 4: self request
      onSelf = true;
      var call1429 = callmethodChecked(this, "compileInherits(1)in(2)", [1, 2], call1428, var_o, var_selfr);
      if1420 = call1429;
    }
    setLineNumber(319);    // compilenode block
    var block1431 = new GraceBlock(this, 319, 1);
    setLineNumber(1);    // compilenode identifier
    block1431.real = function(var_t) {
      setLineNumber(319);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call1433 = callmethodChecked(this, "compileInherits(1)in(2)", [1, 2], var_t, var_o, var_selfr);
      return call1433;
    };
    // call case 6: other requests
    // call case 6: other requests
    var call1435 = callmethodChecked(var_o, "usedTraits", []);
    var call1436 = callmethodChecked(call1435, "do(1)", [1], block1431);
    setLineNumber(322);    // compilenode block
    var block1438 = new GraceBlock(this, 322, 1);
    setLineNumber(1);    // compilenode identifier
    block1438.real = function(var_e) {
      var if1439 = GraceDone;
      setLineNumber(323);    // compilenode string
      var string1440 = new GraceString("method");
      // call case 6: other requests
      var call1443 = callmethodChecked(var_e, "kind", []);
      var opresult1445 = callmethodChecked(call1443, "==(1)", [1], string1440);
      if (Grace_isTrue(opresult1445)) {
      } else {
        var if1446 = GraceDone;
        setLineNumber(324);    // compilenode string
        var string1447 = new GraceString("vardec");
        // call case 6: other requests
        var call1450 = callmethodChecked(var_e, "kind", []);
        var opresult1452 = callmethodChecked(call1450, "==(1)", [1], string1447);
        if (Grace_isTrue(opresult1452)) {
          setLineNumber(325);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call1454 = callmethodChecked(this, "compileobjvardec(3)", [3], var_e, var_selfr, var_pos);
          setLineNumber(326);    // compilenode string
          var string1456 = new GraceString(".mutable = true;");
          var string1459 = new GraceString("");
          var opresult1461 = callmethodChecked(string1459, "++(1)", [1], var_selfr);
          var opresult1463 = callmethodChecked(opresult1461, "++(1)", [1], string1456);
          // call case 4: self request
          onSelf = true;
          var call1464 = callmethodChecked(this, "out(1)", [1], opresult1463);
          setLineNumber(327);    // compilenode identifier
          var opresult1467 = callmethodChecked(var_pos, "+(1)", [1], new GraceNum(1));
          var_pos = opresult1467;
          if1446 = GraceDone;
        } else {
          var if1468 = GraceDone;
          setLineNumber(328);    // compilenode string
          var string1469 = new GraceString("defdec");
          // call case 6: other requests
          var call1472 = callmethodChecked(var_e, "kind", []);
          var opresult1474 = callmethodChecked(call1472, "==(1)", [1], string1469);
          if (Grace_isTrue(opresult1474)) {
            setLineNumber(329);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call1476 = callmethodChecked(this, "compileobjdefdec(3)", [3], var_e, var_selfr, var_pos);
            setLineNumber(330);    // compilenode identifier
            var opresult1479 = callmethodChecked(var_pos, "+(1)", [1], new GraceNum(1));
            var_pos = opresult1479;
            if1468 = GraceDone;
          } else {
            var if1480 = GraceDone;
            setLineNumber(331);    // compilenode string
            var string1481 = new GraceString("typedec");
            // call case 6: other requests
            var call1484 = callmethodChecked(var_e, "kind", []);
            var opresult1486 = callmethodChecked(call1484, "==(1)", [1], string1481);
            if (Grace_isTrue(opresult1486)) {
              setLineNumber(332);    // compilenode identifier
              // call case 4: self request
              onSelf = true;
              var call1488 = callmethodChecked(this, "compiletypedec(1)", [1], var_e);
              setLineNumber(333);    // compilenode identifier
              var opresult1491 = callmethodChecked(var_pos, "+(1)", [1], new GraceNum(1));
              var_pos = opresult1491;
              if1480 = GraceDone;
            } else {
              var if1492 = GraceDone;
              setLineNumber(334);    // compilenode string
              var string1493 = new GraceString("object");
              // call case 6: other requests
              var call1496 = callmethodChecked(var_e, "kind", []);
              var opresult1498 = callmethodChecked(call1496, "==(1)", [1], string1493);
              if (Grace_isTrue(opresult1498)) {
                setLineNumber(335);    // compilenode identifier
                // call case 4: self request
                onSelf = true;
                var call1500 = callmethodChecked(this, "compileobject(3)", [3], var_e, var_selfr, GraceFalse);
                if1492 = call1500;
              } else {
                setLineNumber(337);    // compilenode identifier
                // call case 4: self request
                onSelf = true;
                var call1502 = callmethodChecked(this, "compilenode(1)", [1], var_e);
                if1492 = call1502;
              }
              if1480 = if1492;
            }
            if1468 = if1480;
          }
          if1446 = if1468;
        }
        if1439 = if1446;
      }
      return if1439;
    };
    // call case 6: other requests
    setLineNumber(322);    // compilenode member
    // call case 6: other requests
    var call1504 = callmethodChecked(var_o, "value", []);
    var call1505 = callmethodChecked(call1504, "do(1)", [1], block1438);
    setLineNumber(340);    // compilenode string
    var string1507 = new GraceString("superDepth = origSuperDepth;");
    // call case 4: self request
    onSelf = true;
    var call1508 = callmethodChecked(this, "out(1)", [1], string1507);
    setLineNumber(341);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call1510 = callmethodChecked(this, "decreaseindent", []);
    setLineNumber(342);    // compilenode string
    var string1512 = new GraceString("};");
    // call case 4: self request
    onSelf = true;
    var call1513 = callmethodChecked(this, "out(1)", [1], string1512);
    var if1514 = GraceDone;
    setLineNumber(343);    // compilenode identifier
    if (Grace_isTrue(var_inheritingObject)) {
      setLineNumber(344);    // compilenode string
      var string1516 = new GraceString(".apply(inheritingObject, []);");
      var string1519 = new GraceString("obj_init_");
      var opresult1521 = callmethodChecked(string1519, "++(1)", [1], var_myc);
      var opresult1523 = callmethodChecked(opresult1521, "++(1)", [1], string1516);
      // call case 4: self request
      onSelf = true;
      var call1524 = callmethodChecked(this, "out(1)", [1], opresult1523);
      if1514 = call1524;
    } else {
      setLineNumber(346);    // compilenode string
      var string1526 = new GraceString(", []);");
      var string1529 = new GraceString(".apply(");
      var string1532 = new GraceString("obj_init_");
      var opresult1534 = callmethodChecked(string1532, "++(1)", [1], var_myc);
      var opresult1536 = callmethodChecked(opresult1534, "++(1)", [1], string1529);
      var opresult1538 = callmethodChecked(opresult1536, "++(1)", [1], var_selfr);
      var opresult1540 = callmethodChecked(opresult1538, "++(1)", [1], string1526);
      // call case 4: self request
      onSelf = true;
      var call1541 = callmethodChecked(this, "out(1)", [1], opresult1540);
      if1514 = call1541;
    }
    setLineNumber(348);    // compilenode identifier
    var_inBlock = var_origInBlock;
    return GraceDone;
  };
  func1220.paramCounts = [3];
  this.methods["compileobject(3)"] = func1220;
  func1220.definitionLine = 275;
  func1220.definitionModule = "genjs";
  setLineNumber(350);    // compilenode method
  var func1542 = function(argcv) {    // method compileblock(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(351);    // compilenode identifier
    var var_origInBlock = var_inBlock;
    setLineNumber(352);    // compilenode identifier
    var_inBlock = GraceTrue;
    setLineNumber(353);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(354);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call1545 = callmethodChecked(var_o, "params", []);
    var call1546 = callmethodChecked(call1545, "size", []);
    var var_nParams = call1546;
    setLineNumber(355);    // compilenode identifier
    var opresult1549 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult1549;
    setLineNumber(356);    // compilenode string
    var string1551 = new GraceString(");");
    var string1554 = new GraceString(", ");
    // call case 6: other requests
    var call1557 = callmethodChecked(var_o, "line", []);
    var string1559 = new GraceString(" = new GraceBlock(this, ");
    var string1562 = new GraceString("var block");
    var opresult1564 = callmethodChecked(string1562, "++(1)", [1], var_myc);
    var opresult1566 = callmethodChecked(opresult1564, "++(1)", [1], string1559);
    var opresult1568 = callmethodChecked(opresult1566, "++(1)", [1], call1557);
    var opresult1570 = callmethodChecked(opresult1568, "++(1)", [1], string1554);
    var opresult1572 = callmethodChecked(opresult1570, "++(1)", [1], var_nParams);
    var opresult1574 = callmethodChecked(opresult1572, "++(1)", [1], string1551);
    // call case 4: self request
    onSelf = true;
    var call1575 = callmethodChecked(this, "out(1)", [1], opresult1574);
    var if1576 = GraceDone;
    setLineNumber(357);    // compilenode member
    // call case 6: other requests
    var call1578 = callmethodChecked(var_o, "matchingPattern", []);
    var opresult1581 = callmethodChecked(GraceFalse, "\u2260(1)", [1], call1578);
    if (Grace_isTrue(opresult1581)) {
      setLineNumber(358);    // compilenode member
      // call case 6: other requests
      var call1584 = callmethodChecked(var_o, "matchingPattern", []);
      // call case 4: self request
      onSelf = true;
      var call1585 = callmethodChecked(this, "compilenode(1)", [1], call1584);
      var var_pat = call1585;
      setLineNumber(359);    // compilenode string
      var string1587 = new GraceString(";");
      var string1590 = new GraceString(".pattern = ");
      var string1593 = new GraceString("block");
      var opresult1595 = callmethodChecked(string1593, "++(1)", [1], var_myc);
      var opresult1597 = callmethodChecked(opresult1595, "++(1)", [1], string1590);
      var opresult1599 = callmethodChecked(opresult1597, "++(1)", [1], var_pat);
      var opresult1601 = callmethodChecked(opresult1599, "++(1)", [1], string1587);
      // call case 4: self request
      onSelf = true;
      var call1602 = callmethodChecked(this, "out(1)", [1], opresult1601);
      if1576 = call1602;
    }
    setLineNumber(361);    // compilenode string
    var string1603 = new GraceString("");
    var var_paramList = string1603;
    setLineNumber(362);    // compilenode array
    var array1604 = new PrimitiveGraceList([]);
    var var_paramTypes = array1604;
    setLineNumber(363);    // compilenode identifier
    var var_paramsAreTyped = GraceFalse;
    setLineNumber(364);    // compilenode identifier
    var var_first = GraceTrue;
    setLineNumber(365);    // compilenode member
    // call case 6: other requests
    var call1607 = callmethodChecked(var_o, "params", []);
    var block1608 = new GraceBlock(this, 365, 1);
    setLineNumber(1);    // compilenode identifier
    block1608.real = function(var_each) {
      setLineNumber(366);    // compilenode member
      // call case 6: other requests
      var call1610 = callmethodChecked(var_each, "decType", []);
      var var_dType = call1610;
      setLineNumber(367);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call1613 = callmethodChecked(this, "compilenode(1)", [1], var_dType);
      // call case 6: other requests
      var call1614 = callmethodChecked(var_paramTypes, "push(1)", [1], call1613);
      var if1615 = GraceDone;
      setLineNumber(368);    // compilenode member
      // call case 6: other requests
      var call1617 = callmethodChecked(var_ast, "unknownType", []);
      var opresult1620 = callmethodChecked(var_dType, "\u2260(1)", [1], call1617);
      if (Grace_isTrue(opresult1620)) {
        setLineNumber(369);    // compilenode identifier
        var_paramsAreTyped = GraceTrue;
        if1615 = GraceDone;
      }
      var if1621 = GraceDone;
      setLineNumber(371);    // compilenode identifier
      if (Grace_isTrue(var_first)) {
        setLineNumber(372);    // compilenode member
        // call case 6: other requests
        var call1624 = callmethodChecked(var_each, "value", []);
        // call case 4: self request
        onSelf = true;
        var call1625 = callmethodChecked(this, "varf(1)", [1], call1624);
        var_paramList = call1625;
        setLineNumber(373);    // compilenode identifier
        var_first = GraceFalse;
        if1621 = GraceDone;
      } else {
        setLineNumber(375);    // compilenode member
        // call case 6: other requests
        var call1628 = callmethodChecked(var_each, "value", []);
        // call case 4: self request
        onSelf = true;
        var call1629 = callmethodChecked(this, "varf(1)", [1], call1628);
        var string1631 = new GraceString(", ");
        var opresult1634 = callmethodChecked(var_paramList, "++(1)", [1], string1631);
        var opresult1636 = callmethodChecked(opresult1634, "++(1)", [1], call1629);
        var_paramList = opresult1636;
        if1621 = GraceDone;
      }
      return if1621;
    };
    // call case 5: prelude request
    var call1637 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1607, block1608);
    var if1638 = GraceDone;
    setLineNumber(378);    // compilenode identifier
    var opresult1641 = callmethodChecked(var_paramsAreTyped, "&&(1)", [1], var_emitTypeChecks);
    if (Grace_isTrue(opresult1641)) {
      setLineNumber(379);    // compilenode string
      var string1643 = new GraceString(";");
      var string1646 = new GraceString(".paramTypes = ");
      var string1649 = new GraceString("block");
      var opresult1651 = callmethodChecked(string1649, "++(1)", [1], var_myc);
      var opresult1653 = callmethodChecked(opresult1651, "++(1)", [1], string1646);
      var opresult1655 = callmethodChecked(opresult1653, "++(1)", [1], var_paramTypes);
      var opresult1657 = callmethodChecked(opresult1655, "++(1)", [1], string1643);
      // call case 4: self request
      onSelf = true;
      var call1658 = callmethodChecked(this, "out(1)", [1], opresult1657);
      if1638 = call1658;
    }
    setLineNumber(381);    // compilenode string
    var string1660 = new GraceString(") {");
    var string1663 = new GraceString(".real = function(");
    var string1666 = new GraceString("block");
    var opresult1668 = callmethodChecked(string1666, "++(1)", [1], var_myc);
    var opresult1670 = callmethodChecked(opresult1668, "++(1)", [1], string1663);
    var opresult1672 = callmethodChecked(opresult1670, "++(1)", [1], var_paramList);
    var opresult1674 = callmethodChecked(opresult1672, "++(1)", [1], string1660);
    // call case 4: self request
    onSelf = true;
    var call1675 = callmethodChecked(this, "out(1)", [1], opresult1674);
    setLineNumber(382);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call1677 = callmethodChecked(this, "increaseindent", []);
    setLineNumber(383);    // compilenode string
    var string1678 = new GraceString("GraceDone");
    var var_ret = string1678;
    setLineNumber(384);    // compilenode member
    // call case 6: other requests
    var call1681 = callmethodChecked(var_o, "body", []);
    var block1682 = new GraceBlock(this, 384, 1);
    setLineNumber(1);    // compilenode identifier
    block1682.real = function(var_l) {
      setLineNumber(385);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call1684 = callmethodChecked(this, "compilenode(1)", [1], var_l);
      var_ret = call1684;
      return GraceDone;
    };
    // call case 5: prelude request
    var call1685 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1681, block1682);
    setLineNumber(387);    // compilenode string
    var string1687 = new GraceString(";");
    var string1690 = new GraceString("return ");
    var opresult1692 = callmethodChecked(string1690, "++(1)", [1], var_ret);
    var opresult1694 = callmethodChecked(opresult1692, "++(1)", [1], string1687);
    // call case 4: self request
    onSelf = true;
    var call1695 = callmethodChecked(this, "out(1)", [1], opresult1694);
    setLineNumber(388);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call1697 = callmethodChecked(this, "decreaseindent", []);
    setLineNumber(389);    // compilenode string
    var string1699 = new GraceString("};");
    // call case 4: self request
    onSelf = true;
    var call1700 = callmethodChecked(this, "out(1)", [1], string1699);
    setLineNumber(390);    // compilenode string
    var string1703 = new GraceString("block");
    var opresult1705 = callmethodChecked(string1703, "++(1)", [1], var_myc);
    // call case 6: other requests
    var call1706 = callmethodChecked(var_o, "register:=(1)", [1], opresult1705);
    setLineNumber(391);    // compilenode identifier
    var_inBlock = var_origInBlock;
    return GraceDone;
  };
  func1542.paramCounts = [1];
  this.methods["compileblock(1)"] = func1542;
  func1542.definitionLine = 350;
  func1542.definitionModule = "genjs";
  setLineNumber(393);    // compilenode method
  var func1707 = function(argcv) {    // method compiletypedec(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(394);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(395);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call1710 = callmethodChecked(var_o, "scope", []);
    var call1711 = callmethodChecked(call1710, "parent", []);
    var var_enclosing = call1711;
    setLineNumber(396);    // compilenode identifier
    var opresult1714 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult1714;
    setLineNumber(397);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call1717 = callmethodChecked(var_o, "name", []);
    var call1718 = callmethodChecked(call1717, "value", []);
    var var_tName = call1718;
    setLineNumber(398);    // compilenode string
    var string1720 = new GraceString("");
    var string1723 = new GraceString("// Type decl ");
    var opresult1725 = callmethodChecked(string1723, "++(1)", [1], var_tName);
    var opresult1727 = callmethodChecked(opresult1725, "++(1)", [1], string1720);
    // call case 4: self request
    onSelf = true;
    var call1728 = callmethodChecked(this, "out(1)", [1], opresult1727);
    setLineNumber(399);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call1731 = callmethodChecked(this, "escapeident(1)", [1], var_tName);
    // call case 6: other requests
    var call1732 = callmethodChecked(var_declaredvars, "push(1)", [1], call1731);
    var if1733 = GraceDone;
    setLineNumber(400);    // compilenode string
    var string1734 = new GraceString("typeliteral");
    // call case 6: other requests
    // call case 6: other requests
    var call1738 = callmethodChecked(var_o, "value", []);
    var call1739 = callmethodChecked(call1738, "kind", []);
    var opresult1741 = callmethodChecked(call1739, "==(1)", [1], string1734);
    if (Grace_isTrue(opresult1741)) {
      // call case 6: other requests
      // call case 6: other requests
      var call1744 = callmethodChecked(var_o, "value", []);
      var call1745 = callmethodChecked(call1744, "name:=(1)", [1], var_tName);
      if1733 = call1745;
    }
    setLineNumber(401);    // compilenode member
    // call case 6: other requests
    var call1748 = callmethodChecked(var_o, "value", []);
    // call case 4: self request
    onSelf = true;
    var call1749 = callmethodChecked(this, "compilenode(1)", [1], call1748);
    var var_val = call1749;
    setLineNumber(402);    // compilenode string
    var string1751 = new GraceString(";");
    var string1754 = new GraceString(" = ");
    // call case 4: self request
    onSelf = true;
    var call1757 = callmethodChecked(this, "varf(1)", [1], var_tName);
    var string1759 = new GraceString("var ");
    var opresult1761 = callmethodChecked(string1759, "++(1)", [1], call1757);
    var opresult1763 = callmethodChecked(opresult1761, "++(1)", [1], string1754);
    var opresult1765 = callmethodChecked(opresult1763, "++(1)", [1], var_val);
    var opresult1767 = callmethodChecked(opresult1765, "++(1)", [1], string1751);
    // call case 4: self request
    onSelf = true;
    var call1768 = callmethodChecked(this, "out(1)", [1], opresult1767);
    setLineNumber(403);    // compilenode string
    var string1770 = new GraceString("");
    var string1773 = new GraceString("type");
    var opresult1775 = callmethodChecked(string1773, "++(1)", [1], var_myc);
    var opresult1777 = callmethodChecked(opresult1775, "++(1)", [1], string1770);
    // call case 6: other requests
    var call1778 = callmethodChecked(var_o, "register:=(1)", [1], opresult1777);
    var if1779 = GraceDone;
    setLineNumber(404);    // compilenode identifier
    var opresult1782 = callmethodChecked(var_compilationDepth, "==(1)", [1], new GraceNum(1));
    if (Grace_isTrue(opresult1782)) {
      setLineNumber(405);    // compilenode member
      // call case 6: other requests
      var call1788 = callmethodChecked(var_o, "nameString", []);
      // call case 6: other requests
      // call case 6: other requests
      var call1790 = callmethodChecked(var_ast, "signaturePart", []);
      var call1791 = callmethodChecked(call1790, "partName(1)scope(1)", [1, 1], call1788, var_enclosing);
      var array1785 = new PrimitiveGraceList([call1791]);
      setLineNumber(406);    // compilenode member
      // call case 6: other requests
      var call1794 = callmethodChecked(var_o, "name", []);
      var array1792 = new PrimitiveGraceList([call1794]);
      // call case 6: other requests
      var call1796 = callmethodChecked(var_ast, "typeType", []);
      // call case 6: other requests
      setLineNumber(405);    // compilenode member
      // call case 6: other requests
      var call1798 = callmethodChecked(var_ast, "methodNode", []);
      var call1799 = callmethodChecked(call1798, "new(3)scope(1)", [3, 1], array1785, array1792, call1796, var_enclosing);
      // call case 4: self request
      onSelf = true;
      var call1800 = callmethodChecked(this, "compilenode(1)", [1], call1799);
      if1779 = call1800;
    }
    return if1779;
  };
  func1707.paramCounts = [1];
  this.methods["compiletypedec(1)"] = func1707;
  func1707.definitionLine = 393;
  func1707.definitionModule = "genjs";
  setLineNumber(409);    // compilenode method
  var func1801 = function(argcv) {    // method compiletypeliteral(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(410);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(411);    // compilenode identifier
    var opresult1804 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult1804;
    setLineNumber(412);    // compilenode member
    // call case 6: other requests
    var call1807 = callmethodChecked(var_o, "value", []);
    // call case 4: self request
    onSelf = true;
    var call1808 = callmethodChecked(this, "escapestring(1)", [1], call1807);
    var var_escName = call1808;
    setLineNumber(413);    // compilenode string
    var string1810 = new GraceString("//   Type literal ");
    // call case 4: self request
    onSelf = true;
    var call1811 = callmethodChecked(this, "out(1)", [1], string1810);
    setLineNumber(414);    // compilenode string
    var string1813 = new GraceString("\");");
    var string1816 = new GraceString(" = new GraceType(\"");
    var string1819 = new GraceString("var type");
    var opresult1821 = callmethodChecked(string1819, "++(1)", [1], var_myc);
    var opresult1823 = callmethodChecked(opresult1821, "++(1)", [1], string1816);
    var opresult1825 = callmethodChecked(opresult1823, "++(1)", [1], var_escName);
    var opresult1827 = callmethodChecked(opresult1825, "++(1)", [1], string1813);
    // call case 4: self request
    onSelf = true;
    var call1828 = callmethodChecked(this, "out(1)", [1], opresult1827);
    setLineNumber(415);    // compilenode member
    // call case 6: other requests
    var call1831 = callmethodChecked(var_o, "methods", []);
    var block1832 = new GraceBlock(this, 415, 1);
    setLineNumber(1);    // compilenode identifier
    block1832.real = function(var_meth) {
      setLineNumber(416);    // compilenode member
      // call case 6: other requests
      var call1835 = callmethodChecked(var_meth, "nameString", []);
      // call case 4: self request
      onSelf = true;
      var call1836 = callmethodChecked(this, "escapestring(1)", [1], call1835);
      var var_mnm = call1836;
      setLineNumber(417);    // compilenode string
      var string1838 = new GraceString("\");");
      var string1841 = new GraceString(".typeMethods.push(\"");
      var string1844 = new GraceString("type");
      var opresult1846 = callmethodChecked(string1844, "++(1)", [1], var_myc);
      var opresult1848 = callmethodChecked(opresult1846, "++(1)", [1], string1841);
      var opresult1850 = callmethodChecked(opresult1848, "++(1)", [1], var_mnm);
      var opresult1852 = callmethodChecked(opresult1850, "++(1)", [1], string1838);
      // call case 4: self request
      onSelf = true;
      var call1853 = callmethodChecked(this, "out(1)", [1], opresult1852);
      return call1853;
    };
    // call case 5: prelude request
    var call1854 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1831, block1832);
    setLineNumber(420);    // compilenode string
    var string1856 = new GraceString("");
    var string1859 = new GraceString("type");
    var opresult1861 = callmethodChecked(string1859, "++(1)", [1], var_myc);
    var opresult1863 = callmethodChecked(opresult1861, "++(1)", [1], string1856);
    // call case 6: other requests
    var call1864 = callmethodChecked(var_o, "register:=(1)", [1], opresult1863);
    return call1864;
  };
  func1801.paramCounts = [1];
  this.methods["compiletypeliteral(1)"] = func1801;
  func1801.definitionLine = 409;
  func1801.definitionModule = "genjs";
  setLineNumber(422);    // compilenode method
  var func1865 = function(argcv) {    // method compilemethod(_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_selfobj = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(423);    // compilenode identifier
    var var_oldusedvars = var_usedvars;
    setLineNumber(424);    // compilenode identifier
    var var_olddeclaredvars = var_declaredvars;
    setLineNumber(425);    // compilenode array
    var array1866 = new PrimitiveGraceList([]);
    var var_paramCounts = array1866;
    setLineNumber(426);    // compilenode member
    // call case 6: other requests
    var call1869 = callmethodChecked(var_o, "signature", []);
    var block1870 = new GraceBlock(this, 426, 1);
    setLineNumber(1);    // compilenode identifier
    block1870.real = function(var_part) {
      setLineNumber(427);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call1874 = callmethodChecked(var_part, "params", []);
      var call1875 = callmethodChecked(call1874, "size", []);
      // call case 6: other requests
      var call1876 = callmethodChecked(var_paramCounts, "push(1)", [1], call1875);
      return call1876;
    };
    // call case 5: prelude request
    var call1877 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1869, block1870);
    setLineNumber(429);    // compilenode block
    var block1878 = new GraceBlock(this, 429, 0);
    block1878.real = function() {
      // call case 6: other requests
      // call case 6: other requests
      // call case 6: other requests
      var call1882 = callmethodChecked(var_o, "body", []);
      var call1883 = callmethodChecked(call1882, "first", []);
      var call1884 = callmethodChecked(call1883, "isIdentifier", []);
      return call1884;
    };
    // call case 6: other requests
    // call case 6: other requests
    var call1889 = callmethodChecked(var_o, "body", []);
    var call1890 = callmethodChecked(call1889, "size", []);
    var opresult1892 = callmethodChecked(call1890, "==(1)", [1], new GraceNum(1));
    var opresult1894 = callmethodChecked(opresult1892, "&&(1)", [1], block1878);
    var var_isSimpleAccessor = opresult1894;
    setLineNumber(430);    // compilenode array
    var array1895 = new PrimitiveGraceList([]);
    var_usedvars = array1895;
    setLineNumber(431);    // compilenode array
    var array1896 = new PrimitiveGraceList([]);
    var_declaredvars = array1896;
    setLineNumber(432);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(433);    // compilenode identifier
    var opresult1899 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult1899;
    setLineNumber(434);    // compilenode member
    // call case 6: other requests
    var call1902 = callmethodChecked(var_o, "nameString", []);
    // call case 4: self request
    onSelf = true;
    var call1903 = callmethodChecked(this, "escapestring(1)", [1], call1902);
    var var_name = call1903;
    setLineNumber(435);    // compilenode identifier
    var opresult1906 = callmethodChecked(var_name, "++(1)", [1], var_myc);
    var var_nm = opresult1906;
    setLineNumber(436);    // compilenode array
    var array1907 = new PrimitiveGraceList([]);
    var var_closurevars = array1907;
    setLineNumber(437);    // compilenode identifier
    var var_haveTypedParams = GraceFalse;
    setLineNumber(438);    // compilenode member
    // call case 6: other requests
    var call1910 = callmethodChecked(var_o, "signature", []);
    var block1911 = new GraceBlock(this, 438, 1);
    setLineNumber(1);    // compilenode identifier
    block1911.real = function(var_part) {
      setLineNumber(439);    // compilenode member
      // call case 6: other requests
      var call1914 = callmethodChecked(var_part, "params", []);
      var block1915 = new GraceBlock(this, 439, 1);
      setLineNumber(1);    // compilenode identifier
      block1915.real = function(var_p) {
        var if1916 = GraceDone;
        setLineNumber(440);    // compilenode member
        // call case 6: other requests
        var call1919 = callmethodChecked(var_p, "dtype", []);
        var opresult1921 = callmethodChecked(call1919, "\u2260(1)", [1], GraceFalse);
        if (Grace_isTrue(opresult1921)) {
          var if1922 = GraceDone;
          setLineNumber(443);    // compilenode string
          var string1923 = new GraceString("typeliteral");
          // call case 6: other requests
          // call case 6: other requests
          var call1927 = callmethodChecked(var_p, "dtype", []);
          var call1928 = callmethodChecked(call1927, "kind", []);
          var opresult1930 = callmethodChecked(call1928, "==(1)", [1], string1923);
          setLineNumber(442);    // compilenode string
          var string1932 = new GraceString("identifier");
          // call case 6: other requests
          // call case 6: other requests
          var call1936 = callmethodChecked(var_p, "dtype", []);
          var call1937 = callmethodChecked(call1936, "kind", []);
          var opresult1939 = callmethodChecked(call1937, "==(1)", [1], string1932);
          var opresult1941 = callmethodChecked(opresult1939, "||(1)", [1], opresult1930);
          setLineNumber(441);    // compilenode string
          var string1943 = new GraceString("Unknown");
          // call case 6: other requests
          // call case 6: other requests
          var call1947 = callmethodChecked(var_p, "dtype", []);
          var call1948 = callmethodChecked(call1947, "value", []);
          var opresult1950 = callmethodChecked(call1948, "\u2260(1)", [1], string1943);
          var opresult1952 = callmethodChecked(opresult1950, "&&(1)", [1], opresult1941);
          if (Grace_isTrue(opresult1952)) {
            setLineNumber(444);    // compilenode identifier
            var_haveTypedParams = GraceTrue;
            if1922 = GraceDone;
          }
          if1916 = if1922;
        }
        return if1916;
      };
      // call case 5: prelude request
      var call1953 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1914, block1915);
      return call1953;
    };
    // call case 5: prelude request
    var call1954 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1910, block1911);
    setLineNumber(449);    // compilenode member
    // call case 6: other requests
    var call1957 = callmethodChecked(var_o, "canonicalName", []);
    var string1959 = new GraceString(" = function(argcv) {    // method ");
    var string1962 = new GraceString("var func");
    var opresult1964 = callmethodChecked(string1962, "++(1)", [1], var_myc);
    var opresult1966 = callmethodChecked(opresult1964, "++(1)", [1], string1959);
    var opresult1968 = callmethodChecked(opresult1966, "++(1)", [1], call1957);
    // call case 4: self request
    onSelf = true;
    var call1969 = callmethodChecked(this, "out(1)", [1], opresult1968);
    setLineNumber(450);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call1971 = callmethodChecked(this, "increaseindent", []);
    setLineNumber(451);    // compilenode string
    var string1973 = new GraceString("var returnTarget = invocationCount;");
    // call case 4: self request
    onSelf = true;
    var call1974 = callmethodChecked(this, "out(1)", [1], string1973);
    setLineNumber(452);    // compilenode string
    var string1976 = new GraceString("invocationCount++;");
    // call case 4: self request
    onSelf = true;
    var call1977 = callmethodChecked(this, "out(1)", [1], string1976);
    setLineNumber(453);    // compilenode string
    var string1979 = new GraceString("var curarg = 1;");
    // call case 4: self request
    onSelf = true;
    var call1980 = callmethodChecked(this, "out(1)", [1], string1979);
    var if1981 = GraceDone;
    setLineNumber(454);    // compilenode member
    // call case 6: other requests
    var call1983 = callmethodChecked(var_isSimpleAccessor, "not", []);
    var opresult1986 = callmethodChecked(var_debugMode, "&&(1)", [1], call1983);
    if (Grace_isTrue(opresult1986)) {
      setLineNumber(455);    // compilenode string
      var string1988 = new GraceString("\");");
      var string1991 = new GraceString("var myframe = new StackFrame(\"");
      var opresult1993 = callmethodChecked(string1991, "++(1)", [1], var_name);
      var opresult1995 = callmethodChecked(opresult1993, "++(1)", [1], string1988);
      // call case 4: self request
      onSelf = true;
      var call1996 = callmethodChecked(this, "out(1)", [1], opresult1995);
      if1981 = call1996;
    }
    setLineNumber(457);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call2000 = callmethodChecked(var_o, "signature", []);
    var call2001 = callmethodChecked(call2000, "indices", []);
    var block2002 = new GraceBlock(this, 457, 1);
    setLineNumber(1);    // compilenode identifier
    block2002.real = function(var_partnr) {
      setLineNumber(458);    // compilenode identifier
      // call case 6: other requests
      // call case 6: other requests
      var call2005 = callmethodChecked(var_o, "signature", []);
      var call2006 = callmethodChecked(call2005, "at(1)", [1], var_partnr);
      var var_part = call2006;
      setLineNumber(459);    // compilenode member
      // call case 6: other requests
      var call2009 = callmethodChecked(var_part, "params", []);
      var block2010 = new GraceBlock(this, 459, 1);
      setLineNumber(1);    // compilenode identifier
      block2010.real = function(var_p) {
        setLineNumber(460);    // compilenode string
        var string2012 = new GraceString(" = arguments[curarg];");
        // call case 6: other requests
        var call2016 = callmethodChecked(var_p, "value", []);
        // call case 4: self request
        onSelf = true;
        var call2017 = callmethodChecked(this, "varf(1)", [1], call2016);
        var string2019 = new GraceString("var ");
        var opresult2021 = callmethodChecked(string2019, "++(1)", [1], call2017);
        var opresult2023 = callmethodChecked(opresult2021, "++(1)", [1], string2012);
        // call case 4: self request
        onSelf = true;
        var call2024 = callmethodChecked(this, "out(1)", [1], opresult2023);
        setLineNumber(461);    // compilenode string
        var string2026 = new GraceString("curarg++;");
        // call case 4: self request
        onSelf = true;
        var call2027 = callmethodChecked(this, "out(1)", [1], string2026);
        var if2028 = GraceDone;
        setLineNumber(462);    // compilenode member
        // call case 6: other requests
        var call2030 = callmethodChecked(var_isSimpleAccessor, "not", []);
        var opresult2033 = callmethodChecked(var_debugMode, "&&(1)", [1], call2030);
        if (Grace_isTrue(opresult2033)) {
          setLineNumber(463);    // compilenode string
          var string2035 = new GraceString("\",");
          // call case 6: other requests
          var call2039 = callmethodChecked(var_p, "value", []);
          // call case 4: self request
          onSelf = true;
          var call2040 = callmethodChecked(this, "escapestring(1)", [1], call2039);
          var string2042 = new GraceString("myframe.addVar(\"");
          var opresult2044 = callmethodChecked(string2042, "++(1)", [1], call2040);
          var opresult2046 = callmethodChecked(opresult2044, "++(1)", [1], string2035);
          // call case 4: self request
          onSelf = true;
          var call2047 = callmethodChecked(this, "out(1)", [1], opresult2046);
          setLineNumber(464);    // compilenode string
          var string2049 = new GraceString(";});");
          // call case 6: other requests
          var call2053 = callmethodChecked(var_p, "value", []);
          // call case 4: self request
          onSelf = true;
          var call2054 = callmethodChecked(this, "varf(1)", [1], call2053);
          var string2056 = new GraceString("  function() {return ");
          var opresult2058 = callmethodChecked(string2056, "++(1)", [1], call2054);
          var opresult2060 = callmethodChecked(opresult2058, "++(1)", [1], string2049);
          // call case 4: self request
          onSelf = true;
          var call2061 = callmethodChecked(this, "out(1)", [1], opresult2060);
          if2028 = call2061;
        }
        return if2028;
      };
      // call case 5: prelude request
      var call2062 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call2009, block2010);
      return call2062;
    };
    // call case 5: prelude request
    var call2063 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call2001, block2002);
    var if2064 = GraceDone;
    setLineNumber(468);    // compilenode member
    // call case 6: other requests
    var call2067 = callmethodChecked(var_o, "typeParams", []);
    var opresult2069 = callmethodChecked(call2067, "\u2260(1)", [1], GraceFalse);
    if (Grace_isTrue(opresult2069)) {
      setLineNumber(469);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call2072 = callmethodChecked(var_o, "signature", []);
      var call2073 = callmethodChecked(call2072, "size", []);
      var var_sz = call2073;
      setLineNumber(470);    // compilenode string
      var string2075 = new GraceString("// Start type arguments");
      // call case 4: self request
      onSelf = true;
      var call2076 = callmethodChecked(this, "out(1)", [1], string2075);
      setLineNumber(471);    // compilenode block
      var block2078 = new GraceBlock(this, 471, 1);
      setLineNumber(1);    // compilenode identifier
      block2078.real = function(var_g) {
        setLineNumber(472);    // compilenode string
        var string2080 = new GraceString(" = var_Unknown;");
        // call case 6: other requests
        var call2084 = callmethodChecked(var_g, "value", []);
        // call case 4: self request
        onSelf = true;
        var call2085 = callmethodChecked(this, "varf(1)", [1], call2084);
        var string2087 = new GraceString("var ");
        var opresult2089 = callmethodChecked(string2087, "++(1)", [1], call2085);
        var opresult2091 = callmethodChecked(opresult2089, "++(1)", [1], string2080);
        // call case 4: self request
        onSelf = true;
        var call2092 = callmethodChecked(this, "out(1)", [1], opresult2091);
        return call2092;
      };
      // call case 6: other requests
      setLineNumber(471);    // compilenode member
      // call case 6: other requests
      var call2094 = callmethodChecked(var_o, "typeParams", []);
      var call2095 = callmethodChecked(call2094, "do(1)", [1], block2078);
      setLineNumber(474);    // compilenode string
      var string2097 = new GraceString(") {");
      var opresult2101 = callmethodChecked(new GraceNum(1), "+(1)", [1], var_sz);
      var string2103 = new GraceString("if (argcv.length == ");
      var opresult2105 = callmethodChecked(string2103, "++(1)", [1], opresult2101);
      var opresult2107 = callmethodChecked(opresult2105, "++(1)", [1], string2097);
      // call case 4: self request
      onSelf = true;
      var call2108 = callmethodChecked(this, "out(1)", [1], opresult2107);
      var if2109 = GraceDone;
      setLineNumber(475);    // compilenode identifier
      if (Grace_isTrue(var_emitArgChecks)) {
        setLineNumber(476);    // compilenode string
        var string2111 = new GraceString(") {");
        // call case 6: other requests
        // call case 6: other requests
        var call2115 = callmethodChecked(var_o, "typeParams", []);
        var call2116 = callmethodChecked(call2115, "size", []);
        var string2118 = new GraceString("] !== ");
        var string2121 = new GraceString("  if (argcv[");
        var opresult2123 = callmethodChecked(string2121, "++(1)", [1], var_sz);
        var opresult2125 = callmethodChecked(opresult2123, "++(1)", [1], string2118);
        var opresult2127 = callmethodChecked(opresult2125, "++(1)", [1], call2116);
        var opresult2129 = callmethodChecked(opresult2127, "++(1)", [1], string2111);
        // call case 4: self request
        onSelf = true;
        var call2130 = callmethodChecked(this, "out(1)", [1], opresult2129);
        setLineNumber(477);    // compilenode string
        var string2132 = new GraceString("    throw new GraceExceptionPacket(ProgrammingErrorObject, ");
        // call case 4: self request
        onSelf = true;
        var call2133 = callmethodChecked(this, "out(1)", [1], string2132);
        setLineNumber(478);    // compilenode string
        var string2135 = new GraceString("\"));");
        // call case 6: other requests
        var call2138 = callmethodChecked(var_o, "canonicalName", []);
        var string2140 = new GraceString("        new GraceString(\"wrong number of type arguments for ");
        var opresult2142 = callmethodChecked(string2140, "++(1)", [1], call2138);
        var opresult2144 = callmethodChecked(opresult2142, "++(1)", [1], string2135);
        // call case 4: self request
        onSelf = true;
        var call2145 = callmethodChecked(this, "out(1)", [1], opresult2144);
        setLineNumber(479);    // compilenode string
        var string2147 = new GraceString("  }");
        // call case 4: self request
        onSelf = true;
        var call2148 = callmethodChecked(this, "out(1)", [1], string2147);
        if2109 = call2148;
      }
      setLineNumber(481);    // compilenode block
      var block2150 = new GraceBlock(this, 481, 1);
      setLineNumber(1);    // compilenode identifier
      block2150.real = function(var_g) {
        setLineNumber(482);    // compilenode string
        var string2152 = new GraceString(" = arguments[curarg++];");
        // call case 6: other requests
        var call2156 = callmethodChecked(var_g, "value", []);
        // call case 4: self request
        onSelf = true;
        var call2157 = callmethodChecked(this, "varf(1)", [1], call2156);
        var string2159 = new GraceString("  ");
        var opresult2161 = callmethodChecked(string2159, "++(1)", [1], call2157);
        var opresult2163 = callmethodChecked(opresult2161, "++(1)", [1], string2152);
        // call case 4: self request
        onSelf = true;
        var call2164 = callmethodChecked(this, "out(1)", [1], opresult2163);
        return call2164;
      };
      // call case 6: other requests
      setLineNumber(481);    // compilenode member
      // call case 6: other requests
      var call2166 = callmethodChecked(var_o, "typeParams", []);
      var call2167 = callmethodChecked(call2166, "do(1)", [1], block2150);
      setLineNumber(484);    // compilenode string
      var string2169 = new GraceString("}");
      // call case 4: self request
      onSelf = true;
      var call2170 = callmethodChecked(this, "out(1)", [1], string2169);
      setLineNumber(485);    // compilenode string
      var string2172 = new GraceString("// End type arguments");
      // call case 4: self request
      onSelf = true;
      var call2173 = callmethodChecked(this, "out(1)", [1], string2172);
      if2064 = call2173;
    }
    var if2174 = GraceDone;
    setLineNumber(487);    // compilenode member
    // call case 6: other requests
    var call2176 = callmethodChecked(var_o, "needsArgChecks", []);
    var opresult2179 = callmethodChecked(var_emitTypeChecks, "&&(1)", [1], call2176);
    if (Grace_isTrue(opresult2179)) {
      setLineNumber(488);    // compilenode string
      var string2181 = new GraceString("// Start argument checking");
      // call case 4: self request
      onSelf = true;
      var call2182 = callmethodChecked(this, "out(1)", [1], string2181);
      setLineNumber(489);    // compilenode string
      var string2184 = new GraceString("curarg = 1;");
      // call case 4: self request
      onSelf = true;
      var call2185 = callmethodChecked(this, "out(1)", [1], string2184);
      setLineNumber(490);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call2189 = callmethodChecked(var_o, "signature", []);
      var call2190 = callmethodChecked(call2189, "indices", []);
      var block2191 = new GraceBlock(this, 490, 1);
      setLineNumber(1);    // compilenode identifier
      block2191.real = function(var_partnr) {
        setLineNumber(491);    // compilenode identifier
        // call case 6: other requests
        // call case 6: other requests
        var call2194 = callmethodChecked(var_o, "signature", []);
        var call2195 = callmethodChecked(call2194, "at(1)", [1], var_partnr);
        var var_part = call2195;
        setLineNumber(492);    // compilenode num
        var var_paramnr = new GraceNum(0);
        setLineNumber(493);    // compilenode member
        // call case 6: other requests
        var call2198 = callmethodChecked(var_part, "params", []);
        var block2199 = new GraceBlock(this, 493, 1);
        setLineNumber(1);    // compilenode identifier
        block2199.real = function(var_p) {
          setLineNumber(494);    // compilenode identifier
          var opresult2202 = callmethodChecked(var_paramnr, "+(1)", [1], new GraceNum(1));
          var_paramnr = opresult2202;
          var if2203 = GraceDone;
          setLineNumber(495);    // compilenode member
          // call case 6: other requests
          var call2206 = callmethodChecked(var_p, "dtype", []);
          var opresult2208 = callmethodChecked(call2206, "\u2260(1)", [1], GraceFalse);
          var opresult2211 = callmethodChecked(var_emitTypeChecks, "&&(1)", [1], opresult2208);
          if (Grace_isTrue(opresult2211)) {
            setLineNumber(496);    // compilenode member
            // call case 6: other requests
            var call2214 = callmethodChecked(var_o, "line", []);
            var string2215 = new GraceString("argument check in compilemethod");
            // call case 4: self request
            onSelf = true;
            var call2216 = callmethodChecked(this, "noteLineNumber(1)comment(1)", [1, 1], call2214, string2215);
            setLineNumber(497);    // compilenode member
            // call case 6: other requests
            var call2219 = callmethodChecked(var_p, "dtype", []);
            // call case 4: self request
            onSelf = true;
            var call2220 = callmethodChecked(this, "compilenode(1)", [1], call2219);
            var var_dtype = call2220;
            setLineNumber(499);    // compilenode string
            var string2222 = new GraceString("  [1], arguments[curarg])))");
            setLineNumber(498);    // compilenode string
            var string2224 = new GraceString(", \"match(1)\",");
            var string2227 = new GraceString("if (!Grace_isTrue(callmethod(");
            var opresult2229 = callmethodChecked(string2227, "++(1)", [1], var_dtype);
            var opresult2231 = callmethodChecked(opresult2229, "++(1)", [1], string2224);
            var opresult2233 = callmethodChecked(opresult2231, "++(1)", [1], string2222);
            // call case 4: self request
            onSelf = true;
            var call2234 = callmethodChecked(this, "out(1)", [1], opresult2233);
            setLineNumber(500);    // compilenode string
            var string2236 = new GraceString("    throw new GraceExceptionPacket(TypeErrorObject,");
            // call case 4: self request
            onSelf = true;
            var call2237 = callmethodChecked(this, "out(1)", [1], string2236);
            setLineNumber(501);    // compilenode string
            var string2239 = new GraceString(", does not have \" + ");
            // call case 6: other requests
            var call2242 = callmethodChecked(var_p, "value", []);
            var string2244 = new GraceString("), which corresponds to parameter ");
            var string2247 = new GraceString(" (arg list ");
            // call case 6: other requests
            var call2250 = callmethodChecked(var_part, "name", []);
            var string2252 = new GraceString(" in ");
            var string2255 = new GraceString("        new GraceString(\"argument ");
            var opresult2257 = callmethodChecked(string2255, "++(1)", [1], var_paramnr);
            var opresult2259 = callmethodChecked(opresult2257, "++(1)", [1], string2252);
            var opresult2261 = callmethodChecked(opresult2259, "++(1)", [1], call2250);
            var opresult2263 = callmethodChecked(opresult2261, "++(1)", [1], string2247);
            var opresult2265 = callmethodChecked(opresult2263, "++(1)", [1], var_partnr);
            var opresult2267 = callmethodChecked(opresult2265, "++(1)", [1], string2244);
            var opresult2269 = callmethodChecked(opresult2267, "++(1)", [1], call2242);
            var opresult2271 = callmethodChecked(opresult2269, "++(1)", [1], string2239);
            // call case 4: self request
            onSelf = true;
            var call2272 = callmethodChecked(this, "out(1)", [1], opresult2271);
            setLineNumber(502);    // compilenode string
            var string2274 = new GraceString(", \"asString\", [0])._value + \".\"));");
            var string2277 = new GraceString("            callmethod(");
            var opresult2279 = callmethodChecked(string2277, "++(1)", [1], var_dtype);
            var opresult2281 = callmethodChecked(opresult2279, "++(1)", [1], string2274);
            // call case 4: self request
            onSelf = true;
            var call2282 = callmethodChecked(this, "out(1)", [1], opresult2281);
            if2203 = call2282;
          }
          setLineNumber(504);    // compilenode string
          var string2284 = new GraceString("curarg++;");
          // call case 4: self request
          onSelf = true;
          var call2285 = callmethodChecked(this, "out(1)", [1], string2284);
          return call2285;
        };
        // call case 5: prelude request
        var call2286 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call2198, block2199);
        return call2286;
      };
      // call case 5: prelude request
      var call2287 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call2190, block2191);
      setLineNumber(507);    // compilenode string
      var string2289 = new GraceString("// End argument checking");
      // call case 4: self request
      onSelf = true;
      var call2290 = callmethodChecked(this, "out(1)", [1], string2289);
      if2174 = call2290;
    }
    setLineNumber(513);    // compilenode string
    var string2292 = new GraceString("\");");
    var string2295 = new GraceString("setModuleName(\"");
    var opresult2297 = callmethodChecked(string2295, "++(1)", [1], var_modname);
    var opresult2299 = callmethodChecked(opresult2297, "++(1)", [1], string2292);
    // call case 4: self request
    onSelf = true;
    var call2300 = callmethodChecked(this, "out(1)", [1], opresult2299);
    var if2301 = GraceDone;
    setLineNumber(514);    // compilenode identifier
    if (Grace_isTrue(var_isSimpleAccessor)) {
      setLineNumber(515);    // compilenode string
      var string2303 = new GraceString(" is a simple accessor - elide try ... catch");
      // call case 6: other requests
      var call2306 = callmethodChecked(var_o, "canonicalName", []);
      var string2308 = new GraceString("// ");
      var opresult2310 = callmethodChecked(string2308, "++(1)", [1], call2306);
      var opresult2312 = callmethodChecked(opresult2310, "++(1)", [1], string2303);
      // call case 4: self request
      onSelf = true;
      var call2313 = callmethodChecked(this, "out(1)", [1], opresult2312);
      setLineNumber(516);    // compilenode num
      // call case 6: other requests
      // call case 6: other requests
      var call2317 = callmethodChecked(var_o, "body", []);
      var call2318 = callmethodChecked(call2317, "at(1)", [1], new GraceNum(1));
      // call case 4: self request
      onSelf = true;
      var call2319 = callmethodChecked(this, "compilenode(1)", [1], call2318);
      var var_ret = call2319;
      setLineNumber(517);    // compilenode string
      var string2321 = new GraceString(";");
      var string2324 = new GraceString("return ");
      var opresult2326 = callmethodChecked(string2324, "++(1)", [1], var_ret);
      var opresult2328 = callmethodChecked(opresult2326, "++(1)", [1], string2321);
      // call case 4: self request
      onSelf = true;
      var call2329 = callmethodChecked(this, "out(1)", [1], opresult2328);
      if2301 = call2329;
    } else {
      var if2330 = GraceDone;
      setLineNumber(519);    // compilenode identifier
      if (Grace_isTrue(var_debugMode)) {
        setLineNumber(520);    // compilenode string
        var string2332 = new GraceString("stackFrames.push(myframe);");
        // call case 4: self request
        onSelf = true;
        var call2333 = callmethodChecked(this, "out(1)", [1], string2332);
        setLineNumber(521);    // compilenode string
        var string2335 = new GraceString("try {");
        // call case 4: self request
        onSelf = true;
        var call2336 = callmethodChecked(this, "out(1)", [1], string2335);
        setLineNumber(522);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call2338 = callmethodChecked(this, "increaseindent", []);
        if2330 = call2338;
      }
      setLineNumber(524);    // compilenode string
      var string2339 = new GraceString("GraceDone");
      var var_ret = string2339;
      setLineNumber(525);    // compilenode member
      // call case 6: other requests
      var call2341 = callmethodChecked(var_o, "line", []);
      var var_lastLine = call2341;
      setLineNumber(526);    // compilenode member
      // call case 6: other requests
      var call2344 = callmethodChecked(var_o, "body", []);
      var block2345 = new GraceBlock(this, 526, 1);
      setLineNumber(1);    // compilenode identifier
      block2345.real = function(var_l) {
        setLineNumber(527);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call2347 = callmethodChecked(this, "compilenode(1)", [1], var_l);
        var_ret = call2347;
        setLineNumber(528);    // compilenode member
        // call case 6: other requests
        var call2349 = callmethodChecked(var_l, "line", []);
        var_lastLine = call2349;
        return GraceDone;
      };
      // call case 5: prelude request
      var call2350 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call2344, block2345);
      var if2351 = GraceDone;
      setLineNumber(530);    // compilenode string
      var string2352 = new GraceString("undefined");
      var opresult2355 = callmethodChecked(var_ret, "\u2260(1)", [1], string2352);
      if (Grace_isTrue(opresult2355)) {
        var if2356 = GraceDone;
        setLineNumber(531);    // compilenode member
        // call case 6: other requests
        var call2359 = callmethodChecked(var_o, "dtype", []);
        var opresult2361 = callmethodChecked(call2359, "\u2260(1)", [1], GraceFalse);
        var opresult2364 = callmethodChecked(var_emitTypeChecks, "&&(1)", [1], opresult2361);
        if (Grace_isTrue(opresult2364)) {
          setLineNumber(532);    // compilenode member
          // call case 6: other requests
          var call2367 = callmethodChecked(var_o, "dtype", []);
          // call case 4: self request
          onSelf = true;
          var call2368 = callmethodChecked(this, "compilenode(1)", [1], call2367);
          var var_dtype = call2368;
          setLineNumber(533);    // compilenode string
          var string2370 = new GraceString("return value");
          // call case 4: self request
          onSelf = true;
          var call2371 = callmethodChecked(this, "noteLineNumber(1)comment(1)", [1, 1], var_lastLine, string2370);
          setLineNumber(534);    // compilenode string
          var string2373 = new GraceString(")))");
          var string2376 = new GraceString(", \"match(1)\", [1], ");
          var string2379 = new GraceString("if (!Grace_isTrue(callmethod(");
          var opresult2381 = callmethodChecked(string2379, "++(1)", [1], var_dtype);
          var opresult2383 = callmethodChecked(opresult2381, "++(1)", [1], string2376);
          var opresult2385 = callmethodChecked(opresult2383, "++(1)", [1], var_ret);
          var opresult2387 = callmethodChecked(opresult2385, "++(1)", [1], string2373);
          // call case 4: self request
          onSelf = true;
          var call2388 = callmethodChecked(this, "out(1)", [1], opresult2387);
          setLineNumber(535);    // compilenode string
          var string2390 = new GraceString("    throw new GraceExceptionPacket(TypeErrorObject,");
          // call case 4: self request
          onSelf = true;
          var call2391 = callmethodChecked(this, "out(1)", [1], string2390);
          setLineNumber(536);    // compilenode string
          var string2393 = new GraceString(" does not have \" + ");
          // call case 6: other requests
          var call2396 = callmethodChecked(var_o, "canonicalName", []);
          var string2398 = new GraceString("        new GraceString(\"result of method ");
          var opresult2400 = callmethodChecked(string2398, "++(1)", [1], call2396);
          var opresult2402 = callmethodChecked(opresult2400, "++(1)", [1], string2393);
          // call case 4: self request
          onSelf = true;
          var call2403 = callmethodChecked(this, "out(1)", [1], opresult2402);
          setLineNumber(537);    // compilenode string
          var string2405 = new GraceString(", \"asString\", [0])._value + \".\"));");
          var string2408 = new GraceString("            callmethod(");
          var opresult2410 = callmethodChecked(string2408, "++(1)", [1], var_dtype);
          var opresult2412 = callmethodChecked(opresult2410, "++(1)", [1], string2405);
          // call case 4: self request
          onSelf = true;
          var call2413 = callmethodChecked(this, "out(1)", [1], opresult2412);
          if2356 = call2413;
        }
        setLineNumber(539);    // compilenode string
        var string2415 = new GraceString(";");
        var string2418 = new GraceString("return ");
        var opresult2420 = callmethodChecked(string2418, "++(1)", [1], var_ret);
        var opresult2422 = callmethodChecked(opresult2420, "++(1)", [1], string2415);
        // call case 4: self request
        onSelf = true;
        var call2423 = callmethodChecked(this, "out(1)", [1], opresult2422);
        if2351 = call2423;
      }
      var if2424 = GraceDone;
      setLineNumber(541);    // compilenode identifier
      if (Grace_isTrue(var_debugMode)) {
        setLineNumber(542);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call2426 = callmethodChecked(this, "decreaseindent", []);
        setLineNumber(543);    // compilenode string
        var string2428 = new GraceString("} finally {");
        // call case 4: self request
        onSelf = true;
        var call2429 = callmethodChecked(this, "out(1)", [1], string2428);
        setLineNumber(544);    // compilenode string
        var string2431 = new GraceString("    stackFrames.pop();");
        // call case 4: self request
        onSelf = true;
        var call2432 = callmethodChecked(this, "out(1)", [1], string2431);
        setLineNumber(545);    // compilenode string
        var string2434 = new GraceString("}");
        // call case 4: self request
        onSelf = true;
        var call2435 = callmethodChecked(this, "out(1)", [1], string2434);
        if2424 = call2435;
      }
      if2301 = if2424;
    }
    setLineNumber(548);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call2437 = callmethodChecked(this, "decreaseindent", []);
    setLineNumber(549);    // compilenode string
    var string2439 = new GraceString("};");
    // call case 4: self request
    onSelf = true;
    var call2440 = callmethodChecked(this, "out(1)", [1], string2439);
    setLineNumber(550);    // compilenode identifier
    var_usedvars = var_oldusedvars;
    setLineNumber(551);    // compilenode identifier
    var_declaredvars = var_olddeclaredvars;
    var if2441 = GraceDone;
    setLineNumber(552);    // compilenode identifier
    if (Grace_isTrue(var_haveTypedParams)) {
      setLineNumber(553);    // compilenode string
      var string2443 = new GraceString("");
      var string2446 = new GraceString("func");
      var opresult2448 = callmethodChecked(string2446, "++(1)", [1], var_myc);
      var opresult2450 = callmethodChecked(opresult2448, "++(1)", [1], string2443);
      // call case 4: self request
      onSelf = true;
      var call2451 = callmethodChecked(this, "compilemethodtypes(2)", [2], opresult2450, var_o);
      if2441 = call2451;
    }
    var if2452 = GraceDone;
    setLineNumber(555);    // compilenode member
    // call case 6: other requests
    var call2454 = callmethodChecked(var_o, "isConfidential", []);
    if (Grace_isTrue(call2454)) {
      setLineNumber(556);    // compilenode string
      var string2456 = new GraceString(".confidential = true;");
      var string2459 = new GraceString("func");
      var opresult2461 = callmethodChecked(string2459, "++(1)", [1], var_myc);
      var opresult2463 = callmethodChecked(opresult2461, "++(1)", [1], string2456);
      // call case 4: self request
      onSelf = true;
      var call2464 = callmethodChecked(this, "out(1)", [1], opresult2463);
      if2452 = call2464;
    }
    setLineNumber(558);    // compilenode string
    var string2466 = new GraceString(";");
    var string2469 = new GraceString(".paramCounts = ");
    var string2472 = new GraceString("func");
    var opresult2474 = callmethodChecked(string2472, "++(1)", [1], var_myc);
    var opresult2476 = callmethodChecked(opresult2474, "++(1)", [1], string2469);
    var opresult2478 = callmethodChecked(opresult2476, "++(1)", [1], var_paramCounts);
    var opresult2480 = callmethodChecked(opresult2478, "++(1)", [1], string2466);
    // call case 4: self request
    onSelf = true;
    var call2481 = callmethodChecked(this, "out(1)", [1], opresult2480);
    setLineNumber(559);    // compilenode string
    var string2483 = new GraceString(";");
    var string2486 = new GraceString("\"] = func");
    var string2489 = new GraceString(".methods[\"");
    var string2492 = new GraceString("");
    var opresult2494 = callmethodChecked(string2492, "++(1)", [1], var_selfobj);
    var opresult2496 = callmethodChecked(opresult2494, "++(1)", [1], string2489);
    var opresult2498 = callmethodChecked(opresult2496, "++(1)", [1], var_name);
    var opresult2500 = callmethodChecked(opresult2498, "++(1)", [1], string2486);
    var opresult2502 = callmethodChecked(opresult2500, "++(1)", [1], var_myc);
    var opresult2504 = callmethodChecked(opresult2502, "++(1)", [1], string2483);
    // call case 4: self request
    onSelf = true;
    var call2505 = callmethodChecked(this, "out(1)", [1], opresult2504);
    setLineNumber(560);    // compilenode string
    var string2507 = new GraceString(";");
    // call case 6: other requests
    var call2510 = callmethodChecked(var_o, "line", []);
    var string2512 = new GraceString(".definitionLine = ");
    var string2515 = new GraceString("func");
    var opresult2517 = callmethodChecked(string2515, "++(1)", [1], var_myc);
    var opresult2519 = callmethodChecked(opresult2517, "++(1)", [1], string2512);
    var opresult2521 = callmethodChecked(opresult2519, "++(1)", [1], call2510);
    var opresult2523 = callmethodChecked(opresult2521, "++(1)", [1], string2507);
    // call case 4: self request
    onSelf = true;
    var call2524 = callmethodChecked(this, "out(1)", [1], opresult2523);
    setLineNumber(561);    // compilenode string
    var string2526 = new GraceString("\";");
    var string2529 = new GraceString(".definitionModule = \"");
    var string2532 = new GraceString("func");
    var opresult2534 = callmethodChecked(string2532, "++(1)", [1], var_myc);
    var opresult2536 = callmethodChecked(opresult2534, "++(1)", [1], string2529);
    var opresult2538 = callmethodChecked(opresult2536, "++(1)", [1], var_modname);
    var opresult2540 = callmethodChecked(opresult2538, "++(1)", [1], string2526);
    // call case 4: self request
    onSelf = true;
    var call2541 = callmethodChecked(this, "out(1)", [1], opresult2540);
    setLineNumber(562);    // compilenode string
    var string2543 = new GraceString("");
    var string2546 = new GraceString("func");
    var opresult2548 = callmethodChecked(string2546, "++(1)", [1], var_myc);
    var opresult2550 = callmethodChecked(opresult2548, "++(1)", [1], string2543);
    // call case 6: other requests
    var call2551 = callmethodChecked(var_o, "register:=(1)", [1], opresult2550);
    var if2552 = GraceDone;
    setLineNumber(563);    // compilenode member
    // call case 6: other requests
    var call2554 = callmethodChecked(var_o, "isFresh", []);
    if (Grace_isTrue(call2554)) {
      setLineNumber(564);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call2556 = callmethodChecked(this, "increaseindent", []);
      setLineNumber(565);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call2558 = callmethodChecked(this, "compilefreshmethod(2)", [2], var_o, var_selfobj);
      setLineNumber(566);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call2560 = callmethodChecked(this, "decreaseindent", []);
      if2552 = call2560;
    }
    return if2552;
  };
  func1865.paramCounts = [2];
  this.methods["compilemethod(2)"] = func1865;
  func1865.definitionLine = 422;
  func1865.definitionModule = "genjs";
  setLineNumber(569);    // compilenode method
  var func2561 = function(argcv) {    // method compilefreshmethod(_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_selfobj = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(570);    // compilenode array
    var array2562 = new PrimitiveGraceList([]);
    var var_paramCounts = array2562;
    setLineNumber(571);    // compilenode member
    // call case 6: other requests
    var call2565 = callmethodChecked(var_o, "signature", []);
    var block2566 = new GraceBlock(this, 571, 1);
    setLineNumber(1);    // compilenode identifier
    block2566.real = function(var_part) {
      setLineNumber(572);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call2570 = callmethodChecked(var_part, "params", []);
      var call2571 = callmethodChecked(call2570, "size", []);
      // call case 6: other requests
      var call2572 = callmethodChecked(var_paramCounts, "push(1)", [1], call2571);
      return call2572;
    };
    // call case 5: prelude request
    var call2573 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call2565, block2566);
    setLineNumber(574);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(575);    // compilenode identifier
    var opresult2576 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult2576;
    setLineNumber(576);    // compilenode string
    var string2578 = new GraceString("$object(1)");
    // call case 6: other requests
    var call2581 = callmethodChecked(var_o, "nameString", []);
    var opresult2583 = callmethodChecked(call2581, "++(1)", [1], string2578);
    // call case 4: self request
    onSelf = true;
    var call2584 = callmethodChecked(this, "escapestring(1)", [1], opresult2583);
    var var_name = call2584;
    setLineNumber(577);    // compilenode identifier
    var opresult2587 = callmethodChecked(var_name, "++(1)", [1], var_myc);
    var var_nm = opresult2587;
    setLineNumber(578);    // compilenode identifier
    var var_haveTypedParams = GraceFalse;
    setLineNumber(579);    // compilenode member
    // call case 6: other requests
    var call2590 = callmethodChecked(var_o, "signature", []);
    var block2591 = new GraceBlock(this, 579, 1);
    setLineNumber(1);    // compilenode identifier
    block2591.real = function(var_part) {
      setLineNumber(580);    // compilenode member
      // call case 6: other requests
      var call2594 = callmethodChecked(var_part, "params", []);
      var block2595 = new GraceBlock(this, 580, 1);
      setLineNumber(1);    // compilenode identifier
      block2595.real = function(var_p) {
        var if2596 = GraceDone;
        setLineNumber(581);    // compilenode member
        // call case 6: other requests
        var call2599 = callmethodChecked(var_p, "dtype", []);
        var opresult2601 = callmethodChecked(call2599, "\u2260(1)", [1], GraceFalse);
        if (Grace_isTrue(opresult2601)) {
          var if2602 = GraceDone;
          setLineNumber(584);    // compilenode string
          var string2603 = new GraceString("typeliteral");
          // call case 6: other requests
          // call case 6: other requests
          var call2607 = callmethodChecked(var_p, "dtype", []);
          var call2608 = callmethodChecked(call2607, "kind", []);
          var opresult2610 = callmethodChecked(call2608, "==(1)", [1], string2603);
          setLineNumber(583);    // compilenode string
          var string2612 = new GraceString("identifier");
          // call case 6: other requests
          // call case 6: other requests
          var call2616 = callmethodChecked(var_p, "dtype", []);
          var call2617 = callmethodChecked(call2616, "kind", []);
          var opresult2619 = callmethodChecked(call2617, "==(1)", [1], string2612);
          var opresult2621 = callmethodChecked(opresult2619, "||(1)", [1], opresult2610);
          setLineNumber(582);    // compilenode string
          var string2623 = new GraceString("Unknown");
          // call case 6: other requests
          // call case 6: other requests
          var call2627 = callmethodChecked(var_p, "dtype", []);
          var call2628 = callmethodChecked(call2627, "value", []);
          var opresult2630 = callmethodChecked(call2628, "\u2260(1)", [1], string2623);
          var opresult2632 = callmethodChecked(opresult2630, "&&(1)", [1], opresult2621);
          if (Grace_isTrue(opresult2632)) {
            setLineNumber(585);    // compilenode identifier
            var_haveTypedParams = GraceTrue;
            if2602 = GraceDone;
          }
          if2596 = if2602;
        }
        return if2596;
      };
      // call case 5: prelude request
      var call2633 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call2594, block2595);
      return call2633;
    };
    // call case 5: prelude request
    var call2634 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call2590, block2591);
    setLineNumber(590);    // compilenode string
    var string2636 = new GraceString("$object(_)");
    // call case 6: other requests
    var call2639 = callmethodChecked(var_o, "canonicalName", []);
    var string2641 = new GraceString(" = function(argcv) {    // method ");
    var string2644 = new GraceString("var func");
    var opresult2646 = callmethodChecked(string2644, "++(1)", [1], var_myc);
    var opresult2648 = callmethodChecked(opresult2646, "++(1)", [1], string2641);
    var opresult2650 = callmethodChecked(opresult2648, "++(1)", [1], call2639);
    var opresult2652 = callmethodChecked(opresult2650, "++(1)", [1], string2636);
    // call case 4: self request
    onSelf = true;
    var call2653 = callmethodChecked(this, "out(1)", [1], opresult2652);
    setLineNumber(591);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call2655 = callmethodChecked(this, "increaseindent", []);
    setLineNumber(592);    // compilenode string
    var string2657 = new GraceString("var curarg = 1;");
    // call case 4: self request
    onSelf = true;
    var call2658 = callmethodChecked(this, "out(1)", [1], string2657);
    setLineNumber(593);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call2662 = callmethodChecked(var_o, "signature", []);
    var call2663 = callmethodChecked(call2662, "indices", []);
    var block2664 = new GraceBlock(this, 593, 1);
    setLineNumber(1);    // compilenode identifier
    block2664.real = function(var_partnr) {
      setLineNumber(594);    // compilenode identifier
      // call case 6: other requests
      // call case 6: other requests
      var call2667 = callmethodChecked(var_o, "signature", []);
      var call2668 = callmethodChecked(call2667, "at(1)", [1], var_partnr);
      var var_part = call2668;
      setLineNumber(595);    // compilenode member
      // call case 6: other requests
      var call2671 = callmethodChecked(var_part, "params", []);
      var block2672 = new GraceBlock(this, 595, 1);
      setLineNumber(1);    // compilenode identifier
      block2672.real = function(var_p) {
        setLineNumber(596);    // compilenode string
        var string2674 = new GraceString(" = arguments[curarg];");
        // call case 6: other requests
        var call2678 = callmethodChecked(var_p, "value", []);
        // call case 4: self request
        onSelf = true;
        var call2679 = callmethodChecked(this, "varf(1)", [1], call2678);
        var string2681 = new GraceString("var ");
        var opresult2683 = callmethodChecked(string2681, "++(1)", [1], call2679);
        var opresult2685 = callmethodChecked(opresult2683, "++(1)", [1], string2674);
        // call case 4: self request
        onSelf = true;
        var call2686 = callmethodChecked(this, "out(1)", [1], opresult2685);
        setLineNumber(597);    // compilenode string
        var string2688 = new GraceString("curarg++;");
        // call case 4: self request
        onSelf = true;
        var call2689 = callmethodChecked(this, "out(1)", [1], string2688);
        return call2689;
      };
      // call case 5: prelude request
      var call2690 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call2671, block2672);
      return call2690;
    };
    // call case 5: prelude request
    var call2691 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call2663, block2664);
    setLineNumber(600);    // compilenode string
    var string2693 = new GraceString("var inheritingObject = arguments[curarg++];");
    // call case 4: self request
    onSelf = true;
    var call2694 = callmethodChecked(this, "out(1)", [1], string2693);
    var if2695 = GraceDone;
    setLineNumber(601);    // compilenode member
    // call case 6: other requests
    var call2698 = callmethodChecked(var_o, "typeParams", []);
    var opresult2700 = callmethodChecked(call2698, "\u2260(1)", [1], GraceFalse);
    if (Grace_isTrue(opresult2700)) {
      setLineNumber(602);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call2704 = callmethodChecked(var_o, "signature", []);
      var call2705 = callmethodChecked(call2704, "size", []);
      var opresult2707 = callmethodChecked(call2705, "+(1)", [1], new GraceNum(1));
      var var_sz = opresult2707;
      setLineNumber(603);    // compilenode string
      var string2709 = new GraceString("// Start type arguments");
      // call case 4: self request
      onSelf = true;
      var call2710 = callmethodChecked(this, "out(1)", [1], string2709);
      setLineNumber(604);    // compilenode block
      var block2712 = new GraceBlock(this, 604, 1);
      setLineNumber(1);    // compilenode identifier
      block2712.real = function(var_g) {
        setLineNumber(605);    // compilenode string
        var string2714 = new GraceString(" = var_Unknown;");
        // call case 6: other requests
        var call2718 = callmethodChecked(var_g, "value", []);
        // call case 4: self request
        onSelf = true;
        var call2719 = callmethodChecked(this, "varf(1)", [1], call2718);
        var string2721 = new GraceString("var ");
        var opresult2723 = callmethodChecked(string2721, "++(1)", [1], call2719);
        var opresult2725 = callmethodChecked(opresult2723, "++(1)", [1], string2714);
        // call case 4: self request
        onSelf = true;
        var call2726 = callmethodChecked(this, "out(1)", [1], opresult2725);
        return call2726;
      };
      // call case 6: other requests
      setLineNumber(604);    // compilenode member
      // call case 6: other requests
      var call2728 = callmethodChecked(var_o, "typeParams", []);
      var call2729 = callmethodChecked(call2728, "do(1)", [1], block2712);
      setLineNumber(607);    // compilenode string
      var string2731 = new GraceString(") {");
      var opresult2735 = callmethodChecked(new GraceNum(1), "+(1)", [1], var_sz);
      var string2737 = new GraceString("if (argcv.length == ");
      var opresult2739 = callmethodChecked(string2737, "++(1)", [1], opresult2735);
      var opresult2741 = callmethodChecked(opresult2739, "++(1)", [1], string2731);
      // call case 4: self request
      onSelf = true;
      var call2742 = callmethodChecked(this, "out(1)", [1], opresult2741);
      var if2743 = GraceDone;
      setLineNumber(608);    // compilenode identifier
      if (Grace_isTrue(var_emitArgChecks)) {
        setLineNumber(609);    // compilenode string
        var string2745 = new GraceString(") {");
        // call case 6: other requests
        // call case 6: other requests
        var call2749 = callmethodChecked(var_o, "typeParams", []);
        var call2750 = callmethodChecked(call2749, "size", []);
        var string2752 = new GraceString("] !== ");
        var string2755 = new GraceString("  if (argcv[");
        var opresult2757 = callmethodChecked(string2755, "++(1)", [1], var_sz);
        var opresult2759 = callmethodChecked(opresult2757, "++(1)", [1], string2752);
        var opresult2761 = callmethodChecked(opresult2759, "++(1)", [1], call2750);
        var opresult2763 = callmethodChecked(opresult2761, "++(1)", [1], string2745);
        // call case 4: self request
        onSelf = true;
        var call2764 = callmethodChecked(this, "out(1)", [1], opresult2763);
        setLineNumber(610);    // compilenode string
        var string2766 = new GraceString("    throw new GraceExceptionPacket(ProgrammingErrorObject, ");
        // call case 4: self request
        onSelf = true;
        var call2767 = callmethodChecked(this, "out(1)", [1], string2766);
        setLineNumber(611);    // compilenode string
        var string2769 = new GraceString("        new GraceString(\"wrong number of type arguments for {o.canonicalName}\"));");
        // call case 4: self request
        onSelf = true;
        var call2770 = callmethodChecked(this, "out(1)", [1], string2769);
        setLineNumber(612);    // compilenode string
        var string2772 = new GraceString("  }");
        // call case 4: self request
        onSelf = true;
        var call2773 = callmethodChecked(this, "out(1)", [1], string2772);
        if2743 = call2773;
      }
      setLineNumber(614);    // compilenode block
      var block2775 = new GraceBlock(this, 614, 1);
      setLineNumber(1);    // compilenode identifier
      block2775.real = function(var_g) {
        setLineNumber(615);    // compilenode string
        var string2777 = new GraceString(" = arguments[curarg++];");
        // call case 6: other requests
        var call2781 = callmethodChecked(var_g, "value", []);
        // call case 4: self request
        onSelf = true;
        var call2782 = callmethodChecked(this, "varf(1)", [1], call2781);
        var string2784 = new GraceString("  ");
        var opresult2786 = callmethodChecked(string2784, "++(1)", [1], call2782);
        var opresult2788 = callmethodChecked(opresult2786, "++(1)", [1], string2777);
        // call case 4: self request
        onSelf = true;
        var call2789 = callmethodChecked(this, "out(1)", [1], opresult2788);
        return call2789;
      };
      // call case 6: other requests
      setLineNumber(614);    // compilenode member
      // call case 6: other requests
      var call2791 = callmethodChecked(var_o, "typeParams", []);
      var call2792 = callmethodChecked(call2791, "do(1)", [1], block2775);
      setLineNumber(617);    // compilenode string
      var string2794 = new GraceString("}");
      // call case 4: self request
      onSelf = true;
      var call2795 = callmethodChecked(this, "out(1)", [1], string2794);
      setLineNumber(618);    // compilenode string
      var string2797 = new GraceString("// End type arguments");
      // call case 4: self request
      onSelf = true;
      var call2798 = callmethodChecked(this, "out(1)", [1], string2797);
      if2695 = call2798;
    }
    setLineNumber(620);    // compilenode string
    var string2800 = new GraceString("// Start argument processing");
    // call case 4: self request
    onSelf = true;
    var call2801 = callmethodChecked(this, "out(1)", [1], string2800);
    setLineNumber(621);    // compilenode string
    var string2803 = new GraceString("curarg = 1;");
    // call case 4: self request
    onSelf = true;
    var call2804 = callmethodChecked(this, "out(1)", [1], string2803);
    setLineNumber(622);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call2808 = callmethodChecked(var_o, "signature", []);
    var call2809 = callmethodChecked(call2808, "indices", []);
    var block2810 = new GraceBlock(this, 622, 1);
    setLineNumber(1);    // compilenode identifier
    block2810.real = function(var_partnr) {
      setLineNumber(623);    // compilenode identifier
      // call case 6: other requests
      // call case 6: other requests
      var call2813 = callmethodChecked(var_o, "signature", []);
      var call2814 = callmethodChecked(call2813, "at(1)", [1], var_partnr);
      var var_part = call2814;
      setLineNumber(624);    // compilenode num
      var var_paramnr = new GraceNum(0);
      setLineNumber(625);    // compilenode member
      // call case 6: other requests
      var call2817 = callmethodChecked(var_part, "params", []);
      var block2818 = new GraceBlock(this, 625, 1);
      setLineNumber(1);    // compilenode identifier
      block2818.real = function(var_p) {
        setLineNumber(626);    // compilenode identifier
        var opresult2821 = callmethodChecked(var_paramnr, "+(1)", [1], new GraceNum(1));
        var_paramnr = opresult2821;
        var if2822 = GraceDone;
        setLineNumber(627);    // compilenode member
        // call case 6: other requests
        var call2825 = callmethodChecked(var_p, "dtype", []);
        var opresult2827 = callmethodChecked(call2825, "\u2260(1)", [1], GraceFalse);
        var opresult2830 = callmethodChecked(var_emitTypeChecks, "&&(1)", [1], opresult2827);
        if (Grace_isTrue(opresult2830)) {
          setLineNumber(628);    // compilenode member
          // call case 6: other requests
          var call2833 = callmethodChecked(var_o, "line", []);
          var string2834 = new GraceString("argument check in compilefreshmethod");
          // call case 4: self request
          onSelf = true;
          var call2835 = callmethodChecked(this, "noteLineNumber(1)comment(1)", [1, 1], call2833, string2834);
          setLineNumber(629);    // compilenode member
          // call case 6: other requests
          var call2838 = callmethodChecked(var_p, "dtype", []);
          // call case 4: self request
          onSelf = true;
          var call2839 = callmethodChecked(this, "compilenode(1)", [1], call2838);
          var var_dtype = call2839;
          setLineNumber(631);    // compilenode string
          var string2841 = new GraceString("  [1], arguments[curarg])))");
          setLineNumber(630);    // compilenode string
          var string2843 = new GraceString(", \"match(1)\",");
          var string2846 = new GraceString("if (!Grace_isTrue(callmethod(");
          var opresult2848 = callmethodChecked(string2846, "++(1)", [1], var_dtype);
          var opresult2850 = callmethodChecked(opresult2848, "++(1)", [1], string2843);
          var opresult2852 = callmethodChecked(opresult2850, "++(1)", [1], string2841);
          // call case 4: self request
          onSelf = true;
          var call2853 = callmethodChecked(this, "out(1)", [1], opresult2852);
          setLineNumber(632);    // compilenode string
          var string2855 = new GraceString("    throw new GraceExceptionPacket(TypeErrorObject,");
          // call case 4: self request
          onSelf = true;
          var call2856 = callmethodChecked(this, "out(1)", [1], string2855);
          setLineNumber(633);    // compilenode string
          var string2858 = new GraceString(", does not have \" + ");
          // call case 6: other requests
          var call2861 = callmethodChecked(var_p, "value", []);
          var string2863 = new GraceString("), which corresponds to parameter ");
          var string2866 = new GraceString(" (arg list ");
          // call case 6: other requests
          var call2869 = callmethodChecked(var_part, "name", []);
          var string2871 = new GraceString(" in ");
          var string2874 = new GraceString("        new GraceString(\"argument ");
          var opresult2876 = callmethodChecked(string2874, "++(1)", [1], var_paramnr);
          var opresult2878 = callmethodChecked(opresult2876, "++(1)", [1], string2871);
          var opresult2880 = callmethodChecked(opresult2878, "++(1)", [1], call2869);
          var opresult2882 = callmethodChecked(opresult2880, "++(1)", [1], string2866);
          var opresult2884 = callmethodChecked(opresult2882, "++(1)", [1], var_partnr);
          var opresult2886 = callmethodChecked(opresult2884, "++(1)", [1], string2863);
          var opresult2888 = callmethodChecked(opresult2886, "++(1)", [1], call2861);
          var opresult2890 = callmethodChecked(opresult2888, "++(1)", [1], string2858);
          // call case 4: self request
          onSelf = true;
          var call2891 = callmethodChecked(this, "out(1)", [1], opresult2890);
          setLineNumber(634);    // compilenode string
          var string2893 = new GraceString(", \"asString\", [0])._value + \".\"));");
          var string2896 = new GraceString("            callmethod(");
          var opresult2898 = callmethodChecked(string2896, "++(1)", [1], var_dtype);
          var opresult2900 = callmethodChecked(opresult2898, "++(1)", [1], string2893);
          // call case 4: self request
          onSelf = true;
          var call2901 = callmethodChecked(this, "out(1)", [1], opresult2900);
          if2822 = call2901;
        }
        setLineNumber(636);    // compilenode string
        var string2903 = new GraceString("curarg++;");
        // call case 4: self request
        onSelf = true;
        var call2904 = callmethodChecked(this, "out(1)", [1], string2903);
        return call2904;
      };
      // call case 5: prelude request
      var call2905 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call2817, block2818);
      return call2905;
    };
    // call case 5: prelude request
    var call2906 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call2809, block2810);
    setLineNumber(639);    // compilenode string
    var string2908 = new GraceString("// End argument processing");
    // call case 4: self request
    onSelf = true;
    var call2909 = callmethodChecked(this, "out(1)", [1], string2908);
    setLineNumber(644);    // compilenode string
    var string2911 = new GraceString("\");");
    var string2914 = new GraceString("setModuleName(\"");
    var opresult2916 = callmethodChecked(string2914, "++(1)", [1], var_modname);
    var opresult2918 = callmethodChecked(opresult2916, "++(1)", [1], string2911);
    // call case 4: self request
    onSelf = true;
    var call2919 = callmethodChecked(this, "out(1)", [1], opresult2918);
    var if2920 = GraceDone;
    setLineNumber(645);    // compilenode identifier
    if (Grace_isTrue(var_debugMode)) {
      setLineNumber(646);    // compilenode string
      var string2922 = new GraceString("stackFrames.push(myframe);");
      // call case 4: self request
      onSelf = true;
      var call2923 = callmethodChecked(this, "out(1)", [1], string2922);
      if2920 = call2923;
    }
    setLineNumber(648);    // compilenode string
    var string2925 = new GraceString("var returnTarget = invocationCount;");
    // call case 4: self request
    onSelf = true;
    var call2926 = callmethodChecked(this, "out(1)", [1], string2925);
    setLineNumber(649);    // compilenode string
    var string2928 = new GraceString("invocationCount++;");
    // call case 4: self request
    onSelf = true;
    var call2929 = callmethodChecked(this, "out(1)", [1], string2928);
    var if2930 = GraceDone;
    setLineNumber(650);    // compilenode identifier
    if (Grace_isTrue(var_debugMode)) {
      setLineNumber(651);    // compilenode string
      var string2932 = new GraceString("try {");
      // call case 4: self request
      onSelf = true;
      var call2933 = callmethodChecked(this, "out(1)", [1], string2932);
      setLineNumber(652);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call2935 = callmethodChecked(this, "increaseindent", []);
      if2930 = call2935;
    }
    setLineNumber(654);    // compilenode identifier
    var var_tailObject = GraceFalse;
    var if2936 = GraceDone;
    setLineNumber(655);    // compilenode block
    var block2937 = new GraceBlock(this, 655, 0);
    block2937.real = function() {
      var string2938 = new GraceString("object");
      // call case 6: other requests
      // call case 6: other requests
      // call case 6: other requests
      var call2943 = callmethodChecked(var_o, "body", []);
      var call2944 = callmethodChecked(call2943, "last", []);
      var call2945 = callmethodChecked(call2944, "kind", []);
      var opresult2947 = callmethodChecked(call2945, "==(1)", [1], string2938);
      return opresult2947;
    };
    // call case 6: other requests
    // call case 6: other requests
    var call2952 = callmethodChecked(var_o, "body", []);
    var call2953 = callmethodChecked(call2952, "size", []);
    var opresult2955 = callmethodChecked(call2953, ">(1)", [1], new GraceNum(0));
    var opresult2957 = callmethodChecked(opresult2955, "&&(1)", [1], block2937);
    if (Grace_isTrue(opresult2957)) {
      setLineNumber(656);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call2960 = callmethodChecked(var_o, "body", []);
      var call2961 = callmethodChecked(call2960, "pop", []);
      var_tailObject = call2961;
      setLineNumber(657);    // compilenode member
      // call case 6: other requests
      var call2964 = callmethodChecked(var_o, "nameString", []);
      // call case 6: other requests
      var call2965 = callmethodChecked(var_tailObject, "name:=(1)", [1], call2964);
      if2936 = call2965;
    }
    setLineNumber(659);    // compilenode string
    var string2966 = new GraceString("GraceDone");
    var var_ret = string2966;
    setLineNumber(660);    // compilenode member
    // call case 6: other requests
    var call2969 = callmethodChecked(var_o, "body", []);
    var block2970 = new GraceBlock(this, 660, 1);
    setLineNumber(1);    // compilenode identifier
    block2970.real = function(var_l) {
      setLineNumber(661);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call2972 = callmethodChecked(this, "compilenode(1)", [1], var_l);
      var_ret = call2972;
      return GraceDone;
    };
    // call case 5: prelude request
    var call2973 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call2969, block2970);
    var if2974 = GraceDone;
    setLineNumber(663);    // compilenode identifier
    var opresult2977 = callmethodChecked(GraceFalse, "\u2260(1)", [1], var_tailObject);
    if (Grace_isTrue(opresult2977)) {
      setLineNumber(664);    // compilenode identifier
      // call case 6: other requests
      // call case 6: other requests
      var call2980 = callmethodChecked(var_o, "body", []);
      var call2981 = callmethodChecked(call2980, "push(1)", [1], var_tailObject);
      setLineNumber(665);    // compilenode string
      var string2983 = new GraceString("this");
      // call case 4: self request
      onSelf = true;
      var call2984 = callmethodChecked(this, "compileobject(3)", [3], var_tailObject, string2983, GraceTrue);
      setLineNumber(666);    // compilenode member
      // call case 6: other requests
      var call2986 = callmethodChecked(var_tailObject, "register", []);
      var_ret = call2986;
      if2974 = GraceDone;
    }
    setLineNumber(668);    // compilenode string
    var string2988 = new GraceString(";");
    var string2991 = new GraceString("return ");
    var opresult2993 = callmethodChecked(string2991, "++(1)", [1], var_ret);
    var opresult2995 = callmethodChecked(opresult2993, "++(1)", [1], string2988);
    // call case 4: self request
    onSelf = true;
    var call2996 = callmethodChecked(this, "out(1)", [1], opresult2995);
    var if2997 = GraceDone;
    setLineNumber(669);    // compilenode identifier
    if (Grace_isTrue(var_debugMode)) {
      setLineNumber(670);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call2999 = callmethodChecked(this, "decreaseindent", []);
      setLineNumber(671);    // compilenode string
      var string3001 = new GraceString("} finally {");
      // call case 4: self request
      onSelf = true;
      var call3002 = callmethodChecked(this, "out(1)", [1], string3001);
      setLineNumber(672);    // compilenode string
      var string3004 = new GraceString("    stackFrames.pop();");
      // call case 4: self request
      onSelf = true;
      var call3005 = callmethodChecked(this, "out(1)", [1], string3004);
      setLineNumber(673);    // compilenode string
      var string3007 = new GraceString("}");
      // call case 4: self request
      onSelf = true;
      var call3008 = callmethodChecked(this, "out(1)", [1], string3007);
      if2997 = call3008;
    }
    setLineNumber(675);    // compilenode string
    var string3010 = new GraceString("};");
    // call case 4: self request
    onSelf = true;
    var call3011 = callmethodChecked(this, "out(1)", [1], string3010);
    var if3012 = GraceDone;
    setLineNumber(676);    // compilenode identifier
    if (Grace_isTrue(var_haveTypedParams)) {
      setLineNumber(677);    // compilenode string
      var string3014 = new GraceString("");
      var string3017 = new GraceString("func");
      var opresult3019 = callmethodChecked(string3017, "++(1)", [1], var_myc);
      var opresult3021 = callmethodChecked(opresult3019, "++(1)", [1], string3014);
      // call case 4: self request
      onSelf = true;
      var call3022 = callmethodChecked(this, "compilemethodtypes(2)", [2], opresult3021, var_o);
      if3012 = call3022;
    }
    setLineNumber(679);    // compilenode member
    // call case 6: other requests
    var call3025 = callmethodChecked(var_o, "annotations", []);
    var block3026 = new GraceBlock(this, 679, 1);
    setLineNumber(1);    // compilenode identifier
    block3026.real = function(var_ann) {
      var if3027 = GraceDone;
      setLineNumber(681);    // compilenode block
      var block3028 = new GraceBlock(this, 681, 0);
      block3028.real = function() {
        var string3029 = new GraceString("confidential");
        // call case 6: other requests
        var call3032 = callmethodChecked(var_ann, "value", []);
        var opresult3034 = callmethodChecked(call3032, "==(1)", [1], string3029);
        return opresult3034;
      };
      setLineNumber(680);    // compilenode string
      var string3036 = new GraceString("identifier");
      // call case 6: other requests
      var call3039 = callmethodChecked(var_ann, "kind", []);
      var opresult3041 = callmethodChecked(call3039, "==(1)", [1], string3036);
      var opresult3043 = callmethodChecked(opresult3041, "&&(1)", [1], block3028);
      if (Grace_isTrue(opresult3043)) {
        setLineNumber(682);    // compilenode string
        var string3045 = new GraceString(".confidential = true;");
        var string3048 = new GraceString("func");
        var opresult3050 = callmethodChecked(string3048, "++(1)", [1], var_myc);
        var opresult3052 = callmethodChecked(opresult3050, "++(1)", [1], string3045);
        // call case 4: self request
        onSelf = true;
        var call3053 = callmethodChecked(this, "out(1)", [1], opresult3052);
        if3027 = call3053;
      }
      return if3027;
    };
    // call case 5: prelude request
    var call3054 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call3025, block3026);
    setLineNumber(685);    // compilenode string
    var string3056 = new GraceString(";");
    var string3059 = new GraceString("\"] = func");
    var string3062 = new GraceString(".methods[\"");
    var string3065 = new GraceString("");
    var opresult3067 = callmethodChecked(string3065, "++(1)", [1], var_selfobj);
    var opresult3069 = callmethodChecked(opresult3067, "++(1)", [1], string3062);
    var opresult3071 = callmethodChecked(opresult3069, "++(1)", [1], var_name);
    var opresult3073 = callmethodChecked(opresult3071, "++(1)", [1], string3059);
    var opresult3075 = callmethodChecked(opresult3073, "++(1)", [1], var_myc);
    var opresult3077 = callmethodChecked(opresult3075, "++(1)", [1], string3056);
    // call case 4: self request
    onSelf = true;
    var call3078 = callmethodChecked(this, "out(1)", [1], opresult3077);
    return call3078;
  };
  func2561.paramCounts = [2];
  this.methods["compilefreshmethod(2)"] = func2561;
  func2561.definitionLine = 569;
  func2561.definitionModule = "genjs";
  setLineNumber(687);    // compilenode method
  var func3079 = function(argcv) {    // method compilemethodtypes(_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_func = arguments[curarg];
    curarg++;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(688);    // compilenode string
    var string3081 = new GraceString(".paramTypes = [];");
    var string3084 = new GraceString("");
    var opresult3086 = callmethodChecked(string3084, "++(1)", [1], var_func);
    var opresult3088 = callmethodChecked(opresult3086, "++(1)", [1], string3081);
    // call case 4: self request
    onSelf = true;
    var call3089 = callmethodChecked(this, "out(1)", [1], opresult3088);
    setLineNumber(689);    // compilenode num
    var var_pi = new GraceNum(0);
    setLineNumber(690);    // compilenode member
    // call case 6: other requests
    var call3092 = callmethodChecked(var_o, "signature", []);
    var block3093 = new GraceBlock(this, 690, 1);
    setLineNumber(1);    // compilenode identifier
    block3093.real = function(var_part) {
      setLineNumber(691);    // compilenode member
      // call case 6: other requests
      var call3096 = callmethodChecked(var_part, "params", []);
      var block3097 = new GraceBlock(this, 691, 1);
      setLineNumber(1);    // compilenode identifier
      block3097.real = function(var_p) {
        var if3098 = GraceDone;
        setLineNumber(694);    // compilenode member
        // call case 6: other requests
        var call3100 = callmethodChecked(var_p, "dtype", []);
        var opresult3103 = callmethodChecked(GraceFalse, "\u2260(1)", [1], call3100);
        if (Grace_isTrue(opresult3103)) {
          var if3104 = GraceDone;
          setLineNumber(696);    // compilenode string
          var string3105 = new GraceString("typeliteral");
          // call case 6: other requests
          // call case 6: other requests
          var call3109 = callmethodChecked(var_p, "dtype", []);
          var call3110 = callmethodChecked(call3109, "kind", []);
          var opresult3112 = callmethodChecked(call3110, "==(1)", [1], string3105);
          setLineNumber(695);    // compilenode block
          var block3114 = new GraceBlock(this, 695, 0);
          block3114.real = function() {
            var string3115 = new GraceString("Unknown");
            // call case 6: other requests
            // call case 6: other requests
            var call3119 = callmethodChecked(var_p, "dtype", []);
            var call3120 = callmethodChecked(call3119, "value", []);
            var opresult3122 = callmethodChecked(call3120, "\u2260(1)", [1], string3115);
            return opresult3122;
          };
          var string3124 = new GraceString("identifier");
          // call case 6: other requests
          // call case 6: other requests
          var call3128 = callmethodChecked(var_p, "dtype", []);
          var call3129 = callmethodChecked(call3128, "kind", []);
          var opresult3131 = callmethodChecked(call3129, "==(1)", [1], string3124);
          var opresult3133 = callmethodChecked(opresult3131, "&&(1)", [1], block3114);
          var opresult3135 = callmethodChecked(opresult3133, "||(1)", [1], opresult3112);
          if (Grace_isTrue(opresult3135)) {
            setLineNumber(697);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call3139 = callmethodChecked(var_p, "dtype", []);
            var call3140 = callmethodChecked(call3139, "value", []);
            // call case 4: self request
            onSelf = true;
            var call3141 = callmethodChecked(this, "escapeident(1)", [1], call3140);
            var var_typeid = call3141;
            var if3142 = GraceDone;
            setLineNumber(698);    // compilenode identifier
            // call case 6: other requests
            var call3144 = callmethodChecked(var_topLevelTypes, "contains(1)", [1], var_typeid);
            if (Grace_isTrue(call3144)) {
              setLineNumber(700);    // compilenode string
              var string3146 = new GraceString("\"]);");
              // call case 6: other requests
              var call3150 = callmethodChecked(var_p, "nameString", []);
              // call case 4: self request
              onSelf = true;
              var call3151 = callmethodChecked(this, "escapestring(1)", [1], call3150);
              var string3153 = new GraceString(", \"");
              var string3156 = new GraceString("type_");
              var opresult3158 = callmethodChecked(string3156, "++(1)", [1], var_typeid);
              var opresult3160 = callmethodChecked(opresult3158, "++(1)", [1], string3153);
              var opresult3162 = callmethodChecked(opresult3160, "++(1)", [1], call3151);
              var opresult3164 = callmethodChecked(opresult3162, "++(1)", [1], string3146);
              setLineNumber(699);    // compilenode string
              var string3166 = new GraceString(".paramTypes.push([");
              var string3169 = new GraceString("");
              var opresult3171 = callmethodChecked(string3169, "++(1)", [1], var_func);
              var opresult3173 = callmethodChecked(opresult3171, "++(1)", [1], string3166);
              var opresult3175 = callmethodChecked(opresult3173, "++(1)", [1], opresult3164);
              // call case 4: self request
              onSelf = true;
              var call3176 = callmethodChecked(this, "out(1)", [1], opresult3175);
              if3142 = call3176;
            } else {
              setLineNumber(702);    // compilenode string
              var string3178 = new GraceString(".paramTypes.push([]);");
              var string3181 = new GraceString("");
              var opresult3183 = callmethodChecked(string3181, "++(1)", [1], var_func);
              var opresult3185 = callmethodChecked(opresult3183, "++(1)", [1], string3178);
              // call case 4: self request
              onSelf = true;
              var call3186 = callmethodChecked(this, "out(1)", [1], opresult3185);
              if3142 = call3186;
            }
            if3104 = if3142;
          } else {
            setLineNumber(705);    // compilenode string
            var string3188 = new GraceString(".paramTypes.push([]);");
            var string3191 = new GraceString("");
            var opresult3193 = callmethodChecked(string3191, "++(1)", [1], var_func);
            var opresult3195 = callmethodChecked(opresult3193, "++(1)", [1], string3188);
            // call case 4: self request
            onSelf = true;
            var call3196 = callmethodChecked(this, "out(1)", [1], opresult3195);
            if3104 = call3196;
          }
          if3098 = if3104;
        } else {
          setLineNumber(708);    // compilenode string
          var string3198 = new GraceString(".paramTypes.push([]);");
          var string3201 = new GraceString("");
          var opresult3203 = callmethodChecked(string3201, "++(1)", [1], var_func);
          var opresult3205 = callmethodChecked(opresult3203, "++(1)", [1], string3198);
          // call case 4: self request
          onSelf = true;
          var call3206 = callmethodChecked(this, "out(1)", [1], opresult3205);
          if3098 = call3206;
        }
        setLineNumber(710);    // compilenode identifier
        var opresult3209 = callmethodChecked(var_pi, "+(1)", [1], new GraceNum(1));
        var_pi = opresult3209;
        return GraceDone;
      };
      // call case 5: prelude request
      var call3210 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call3096, block3097);
      return call3210;
    };
    // call case 5: prelude request
    var call3211 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call3092, block3093);
    return call3211;
  };
  func3079.paramCounts = [2];
  this.methods["compilemethodtypes(2)"] = func3079;
  func3079.definitionLine = 687;
  func3079.definitionModule = "genjs";
  setLineNumber(714);    // compilenode method
  var func3212 = function(argcv) {    // method compileif(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(715);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(716);    // compilenode identifier
    var opresult3215 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult3215;
    setLineNumber(717);    // compilenode string
    var string3217 = new GraceString(" = GraceDone;");
    var string3220 = new GraceString("var if");
    var opresult3222 = callmethodChecked(string3220, "++(1)", [1], var_myc);
    var opresult3224 = callmethodChecked(opresult3222, "++(1)", [1], string3217);
    // call case 4: self request
    onSelf = true;
    var call3225 = callmethodChecked(this, "outUnnumbered(1)", [1], opresult3224);
    setLineNumber(718);    // compilenode string
    var string3227 = new GraceString(")) {");
    // call case 6: other requests
    var call3231 = callmethodChecked(var_o, "value", []);
    // call case 4: self request
    onSelf = true;
    var call3232 = callmethodChecked(this, "compilenode(1)", [1], call3231);
    var string3234 = new GraceString("if (Grace_isTrue(");
    var opresult3236 = callmethodChecked(string3234, "++(1)", [1], call3232);
    var opresult3238 = callmethodChecked(opresult3236, "++(1)", [1], string3227);
    // call case 4: self request
    onSelf = true;
    var call3239 = callmethodChecked(this, "out(1)", [1], opresult3238);
    setLineNumber(719);    // compilenode string
    var string3240 = new GraceString("undefined");
    var var_tret = string3240;
    setLineNumber(720);    // compilenode string
    var string3241 = new GraceString("undefined");
    var var_fret = string3241;
    setLineNumber(721);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call3243 = callmethodChecked(this, "increaseindent", []);
    setLineNumber(722);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call3246 = callmethodChecked(var_o, "thenblock", []);
    var call3247 = callmethodChecked(call3246, "body", []);
    var var_thenList = call3247;
    setLineNumber(723);    // compilenode block
    var block3249 = new GraceBlock(this, 723, 1);
    setLineNumber(1);    // compilenode identifier
    block3249.real = function(var_l) {
      setLineNumber(724);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call3251 = callmethodChecked(this, "compilenode(1)", [1], var_l);
      var_tret = call3251;
      return GraceDone;
    };
    // call case 5: prelude request
    var call3252 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_thenList, block3249);
    var if3253 = GraceDone;
    setLineNumber(726);    // compilenode string
    var string3254 = new GraceString("undefined");
    var opresult3257 = callmethodChecked(var_tret, "\u2260(1)", [1], string3254);
    if (Grace_isTrue(opresult3257)) {
      setLineNumber(727);    // compilenode string
      var string3259 = new GraceString(";");
      var string3262 = new GraceString(" = ");
      var string3265 = new GraceString("if");
      var opresult3267 = callmethodChecked(string3265, "++(1)", [1], var_myc);
      var opresult3269 = callmethodChecked(opresult3267, "++(1)", [1], string3262);
      var opresult3271 = callmethodChecked(opresult3269, "++(1)", [1], var_tret);
      var opresult3273 = callmethodChecked(opresult3271, "++(1)", [1], string3259);
      // call case 4: self request
      onSelf = true;
      var call3274 = callmethodChecked(this, "out(1)", [1], opresult3273);
      if3253 = call3274;
    }
    setLineNumber(729);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call3276 = callmethodChecked(this, "decreaseindent", []);
    setLineNumber(730);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call3279 = callmethodChecked(var_o, "elseblock", []);
    var call3280 = callmethodChecked(call3279, "body", []);
    var var_elseList = call3280;
    var if3281 = GraceDone;
    setLineNumber(731);    // compilenode member
    // call case 6: other requests
    var call3284 = callmethodChecked(var_elseList, "size", []);
    var opresult3286 = callmethodChecked(call3284, ">(1)", [1], new GraceNum(0));
    if (Grace_isTrue(opresult3286)) {
      setLineNumber(732);    // compilenode string
      var string3288 = new GraceString("} else {");
      // call case 4: self request
      onSelf = true;
      var call3289 = callmethodChecked(this, "out(1)", [1], string3288);
      setLineNumber(733);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call3291 = callmethodChecked(this, "increaseindent", []);
      setLineNumber(734);    // compilenode block
      var block3293 = new GraceBlock(this, 734, 1);
      setLineNumber(1);    // compilenode identifier
      block3293.real = function(var_l) {
        setLineNumber(735);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call3295 = callmethodChecked(this, "compilenode(1)", [1], var_l);
        var_fret = call3295;
        return GraceDone;
      };
      // call case 5: prelude request
      var call3296 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_elseList, block3293);
      var if3297 = GraceDone;
      setLineNumber(737);    // compilenode string
      var string3298 = new GraceString("undefined");
      var opresult3301 = callmethodChecked(var_fret, "\u2260(1)", [1], string3298);
      if (Grace_isTrue(opresult3301)) {
        setLineNumber(738);    // compilenode string
        var string3303 = new GraceString(";");
        var string3306 = new GraceString(" = ");
        var string3309 = new GraceString("if");
        var opresult3311 = callmethodChecked(string3309, "++(1)", [1], var_myc);
        var opresult3313 = callmethodChecked(opresult3311, "++(1)", [1], string3306);
        var opresult3315 = callmethodChecked(opresult3313, "++(1)", [1], var_fret);
        var opresult3317 = callmethodChecked(opresult3315, "++(1)", [1], string3303);
        // call case 4: self request
        onSelf = true;
        var call3318 = callmethodChecked(this, "out(1)", [1], opresult3317);
        if3297 = call3318;
      }
      setLineNumber(740);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call3320 = callmethodChecked(this, "decreaseindent", []);
      if3281 = call3320;
    }
    setLineNumber(742);    // compilenode string
    var string3322 = new GraceString("}");
    // call case 4: self request
    onSelf = true;
    var call3323 = callmethodChecked(this, "out(1)", [1], string3322);
    setLineNumber(743);    // compilenode string
    var string3326 = new GraceString("if");
    var opresult3328 = callmethodChecked(string3326, "++(1)", [1], var_myc);
    // call case 6: other requests
    var call3329 = callmethodChecked(var_o, "register:=(1)", [1], opresult3328);
    return call3329;
  };
  func3212.paramCounts = [1];
  this.methods["compileif(1)"] = func3212;
  func3212.definitionLine = 714;
  func3212.definitionModule = "genjs";
  setLineNumber(745);    // compilenode method
  var func3330 = function(argcv) {    // method compileidentifier(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(746);    // compilenode member
    // call case 6: other requests
    var call3332 = callmethodChecked(var_o, "value", []);
    var var_name = call3332;
    var if3333 = GraceDone;
    setLineNumber(747);    // compilenode string
    var string3334 = new GraceString("super");
    var opresult3337 = callmethodChecked(var_name, "==(1)", [1], string3334);
    if (Grace_isTrue(opresult3337)) {
      setLineNumber(748);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call3340 = callmethodChecked(var_errormessages, "suggestion", []);
      var call3341 = callmethodChecked(call3340, "new", []);
      var var_sugg = call3341;
      setLineNumber(749);    // compilenode member
      // call case 6: other requests
      var call3344 = callmethodChecked(var_o, "linePos", []);
      // call case 6: other requests
      var call3347 = callmethodChecked(var_o, "linePos", []);
      var opresult3349 = callmethodChecked(call3347, "+(1)", [1], new GraceNum(4));
      var string3350 = new GraceString("self");
      // call case 6: other requests
      var call3352 = callmethodChecked(var_o, "line", []);
      // call case 6: other requests
      var call3353 = callmethodChecked(var_sugg, "replaceRange(2)with(1)onLine(1)", [2, 1, 1], call3344, opresult3349, string3350, call3352);
      setLineNumber(751);    // compilenode string
      var string3355 = new GraceString("left of the . in a method request.");
      setLineNumber(750);    // compilenode string
      var string3357 = new GraceString("'super' can be used only to the ");
      var opresult3359 = callmethodChecked(string3357, "++(1)", [1], string3355);
      setLineNumber(753);    // compilenode member
      // call case 6: other requests
      var call3361 = callmethodChecked(var_o, "line", []);
      // call case 6: other requests
      var call3363 = callmethodChecked(var_o, "linePos", []);
      // call case 6: other requests
      var call3366 = callmethodChecked(var_o, "linePos", []);
      var opresult3368 = callmethodChecked(call3366, "+(1)", [1], new GraceNum(4));
      // call case 6: other requests
      setLineNumber(750);    // compilenode identifier
      var call3369 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)withSuggestion(1)", [1, 3, 1], opresult3359, call3361, call3363, opresult3368, var_sugg);
      if3333 = call3369;
    }
    var if3370 = GraceDone;
    setLineNumber(755);    // compilenode string
    var string3371 = new GraceString("self");
    var opresult3374 = callmethodChecked(var_name, "==(1)", [1], string3371);
    if (Grace_isTrue(opresult3374)) {
      setLineNumber(756);    // compilenode string
      var string3376 = new GraceString("this");
      // call case 6: other requests
      var call3377 = callmethodChecked(var_o, "register:=(1)", [1], string3376);
      if3370 = call3377;
    } else {
      var if3378 = GraceDone;
      setLineNumber(757);    // compilenode string
      var string3379 = new GraceString("...");
      var opresult3382 = callmethodChecked(var_name, "==(1)", [1], string3379);
      if (Grace_isTrue(opresult3382)) {
        setLineNumber(758);    // compilenode string
        var string3384 = new GraceString("ellipsis");
        // call case 6: other requests
        var call3385 = callmethodChecked(var_o, "register:=(1)", [1], string3384);
        if3378 = call3385;
      } else {
        var if3386 = GraceDone;
        setLineNumber(759);    // compilenode string
        var string3387 = new GraceString("true");
        var opresult3390 = callmethodChecked(var_name, "==(1)", [1], string3387);
        if (Grace_isTrue(opresult3390)) {
          setLineNumber(760);    // compilenode string
          var string3392 = new GraceString("GraceTrue");
          // call case 6: other requests
          var call3393 = callmethodChecked(var_o, "register:=(1)", [1], string3392);
          if3386 = call3393;
        } else {
          var if3394 = GraceDone;
          setLineNumber(761);    // compilenode string
          var string3395 = new GraceString("false");
          var opresult3398 = callmethodChecked(var_name, "==(1)", [1], string3395);
          if (Grace_isTrue(opresult3398)) {
            setLineNumber(762);    // compilenode string
            var string3400 = new GraceString("GraceFalse");
            // call case 6: other requests
            var call3401 = callmethodChecked(var_o, "register:=(1)", [1], string3400);
            if3394 = call3401;
          } else {
            setLineNumber(764);    // compilenode identifier
            // call case 6: other requests
            var call3403 = callmethodChecked(var_usedvars, "push(1)", [1], var_name);
            setLineNumber(765);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call3406 = callmethodChecked(this, "varf(1)", [1], var_name);
            // call case 6: other requests
            var call3407 = callmethodChecked(var_o, "register:=(1)", [1], call3406);
            if3394 = call3407;
          }
          if3386 = if3394;
        }
        if3378 = if3386;
      }
      if3370 = if3378;
    }
    return if3370;
  };
  func3330.paramCounts = [1];
  this.methods["compileidentifier(1)"] = func3330;
  func3330.definitionLine = 745;
  func3330.definitionModule = "genjs";
  setLineNumber(768);    // compilenode method
  var func3408 = function(argcv) {    // method compilebind(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(769);    // compilenode member
    // call case 6: other requests
    var call3410 = callmethodChecked(var_o, "dest", []);
    var var_lhs = call3410;
    var if3411 = GraceDone;
    setLineNumber(770);    // compilenode member
    // call case 6: other requests
    var call3413 = callmethodChecked(var_lhs, "isIdentifier", []);
    if (Grace_isTrue(call3413)) {
      setLineNumber(771);    // compilenode member
      // call case 6: other requests
      var call3416 = callmethodChecked(var_o, "value", []);
      // call case 4: self request
      onSelf = true;
      var call3417 = callmethodChecked(this, "compilenode(1)", [1], call3416);
      var var_val = call3417;
      setLineNumber(772);    // compilenode member
      // call case 6: other requests
      var call3419 = callmethodChecked(var_lhs, "value", []);
      var var_nm = call3419;
      setLineNumber(773);    // compilenode identifier
      // call case 6: other requests
      var call3421 = callmethodChecked(var_usedvars, "push(1)", [1], var_nm);
      setLineNumber(774);    // compilenode string
      var string3423 = new GraceString(";");
      var string3426 = new GraceString(" = ");
      // call case 4: self request
      onSelf = true;
      var call3429 = callmethodChecked(this, "varf(1)", [1], var_nm);
      var string3431 = new GraceString("");
      var opresult3433 = callmethodChecked(string3431, "++(1)", [1], call3429);
      var opresult3435 = callmethodChecked(opresult3433, "++(1)", [1], string3426);
      var opresult3437 = callmethodChecked(opresult3435, "++(1)", [1], var_val);
      var opresult3439 = callmethodChecked(opresult3437, "++(1)", [1], string3423);
      // call case 4: self request
      onSelf = true;
      var call3440 = callmethodChecked(this, "out(1)", [1], opresult3439);
      setLineNumber(775);    // compilenode string
      var string3442 = new GraceString("GraceDone");
      // call case 6: other requests
      var call3443 = callmethodChecked(var_o, "register:=(1)", [1], string3442);
      if3411 = call3443;
    } else {
      setLineNumber(777);    // compilenode string
      var string3445 = new GraceString(" does not bind an indentifer");
      var string3448 = new GraceString("bindNode ");
      var opresult3450 = callmethodChecked(string3448, "++(1)", [1], var_o);
      var opresult3452 = callmethodChecked(opresult3450, "++(1)", [1], string3445);
      // call case 6: other requests
      // call case 5: prelude request
      var call3454 = callmethodChecked(var_prelude, "ProgrammingError", []);
      var call3455 = callmethodChecked(call3454, "raise(1)", [1], opresult3452);
      if3411 = call3455;
    }
    return if3411;
  };
  func3408.paramCounts = [1];
  this.methods["compilebind(1)"] = func3408;
  func3408.definitionLine = 768;
  func3408.definitionModule = "genjs";
  setLineNumber(780);    // compilenode method
  var func3456 = function(argcv) {    // method compiledefdec(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(781);    // compilenode vardec
    var var_nm;
    setLineNumber(782);    // compilenode vardec
    var var_snm;
    setLineNumber(783);    // compilenode member
    // call case 6: other requests
    var call3458 = callmethodChecked(var_o, "scope", []);
    var var_currentScope = call3458;
    var if3459 = GraceDone;
    setLineNumber(784);    // compilenode string
    var string3460 = new GraceString("generic");
    // call case 6: other requests
    // call case 6: other requests
    var call3464 = callmethodChecked(var_o, "name", []);
    var call3465 = callmethodChecked(call3464, "kind", []);
    var opresult3467 = callmethodChecked(call3465, "==(1)", [1], string3460);
    if (Grace_isTrue(opresult3467)) {
      setLineNumber(785);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      // call case 6: other requests
      var call3471 = callmethodChecked(var_o, "name", []);
      var call3472 = callmethodChecked(call3471, "value", []);
      var call3473 = callmethodChecked(call3472, "value", []);
      var_snm = call3473;
      if3459 = GraceDone;
    } else {
      setLineNumber(787);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call3476 = callmethodChecked(var_o, "name", []);
      var call3477 = callmethodChecked(call3476, "value", []);
      var_snm = call3477;
      if3459 = GraceDone;
    }
    setLineNumber(789);    // compilenode identifier
    var_nm = var_snm;
    var if3478 = GraceDone;
    setLineNumber(790);    // compilenode identifier
    if (Grace_isTrue(var_debugMode)) {
      setLineNumber(791);    // compilenode string
      var string3480 = new GraceString("});");
      // call case 4: self request
      onSelf = true;
      var call3483 = callmethodChecked(this, "varf(1)", [1], var_nm);
      var string3485 = new GraceString("\", function() {return ");
      // call case 4: self request
      onSelf = true;
      var call3488 = callmethodChecked(this, "escapestring(1)", [1], var_nm);
      var string3490 = new GraceString("myframe.addVar(\"");
      var opresult3492 = callmethodChecked(string3490, "++(1)", [1], call3488);
      var opresult3494 = callmethodChecked(opresult3492, "++(1)", [1], string3485);
      var opresult3496 = callmethodChecked(opresult3494, "++(1)", [1], call3483);
      var opresult3498 = callmethodChecked(opresult3496, "++(1)", [1], string3480);
      // call case 4: self request
      onSelf = true;
      var call3499 = callmethodChecked(this, "out(1)", [1], opresult3498);
      if3478 = call3499;
    }
    setLineNumber(793);    // compilenode identifier
    // call case 6: other requests
    var call3501 = callmethodChecked(var_declaredvars, "push(1)", [1], var_nm);
    setLineNumber(794);    // compilenode member
    // call case 6: other requests
    var call3504 = callmethodChecked(var_o, "value", []);
    // call case 4: self request
    onSelf = true;
    var call3505 = callmethodChecked(this, "compilenode(1)", [1], call3504);
    var var_val = call3505;
    setLineNumber(795);    // compilenode string
    var string3507 = new GraceString(";");
    var string3510 = new GraceString(" = ");
    // call case 4: self request
    onSelf = true;
    var call3513 = callmethodChecked(this, "varf(1)", [1], var_nm);
    var string3515 = new GraceString("var ");
    var opresult3517 = callmethodChecked(string3515, "++(1)", [1], call3513);
    var opresult3519 = callmethodChecked(opresult3517, "++(1)", [1], string3510);
    var opresult3521 = callmethodChecked(opresult3519, "++(1)", [1], var_val);
    var opresult3523 = callmethodChecked(opresult3521, "++(1)", [1], string3507);
    // call case 4: self request
    onSelf = true;
    var call3524 = callmethodChecked(this, "out(1)", [1], opresult3523);
    var if3525 = GraceDone;
    setLineNumber(796);    // compilenode identifier
    var opresult3528 = callmethodChecked(var_compilationDepth, "==(1)", [1], new GraceNum(1));
    if (Grace_isTrue(opresult3528)) {
      setLineNumber(797);    // compilenode member
      // call case 6: other requests
      var call3534 = callmethodChecked(var_o, "nameString", []);
      // call case 6: other requests
      // call case 6: other requests
      var call3536 = callmethodChecked(var_ast, "signaturePart", []);
      var call3537 = callmethodChecked(call3536, "partName(1)scope(1)", [1, 1], call3534, var_currentScope);
      var array3531 = new PrimitiveGraceList([call3537]);
      setLineNumber(798);    // compilenode member
      // call case 6: other requests
      var call3540 = callmethodChecked(var_o, "name", []);
      var array3538 = new PrimitiveGraceList([call3540]);
      // call case 6: other requests
      setLineNumber(797);    // compilenode member
      // call case 6: other requests
      var call3542 = callmethodChecked(var_ast, "methodNode", []);
      var call3543 = callmethodChecked(call3542, "new(3)scope(1)", [3, 1], array3531, array3538, GraceFalse, var_currentScope);
      // call case 4: self request
      onSelf = true;
      var call3544 = callmethodChecked(this, "compilenode(1)", [1], call3543);
      var if3545 = GraceDone;
      setLineNumber(799);    // compilenode string
      var string3547 = new GraceString("parent");
      // call case 6: other requests
      var call3548 = callmethodChecked(var_ast, "findAnnotation(2)", [2], var_o, string3547);
      if (Grace_isTrue(call3548)) {
        setLineNumber(800);    // compilenode string
        var string3550 = new GraceString(";");
        var string3553 = new GraceString("this.superobj = ");
        var opresult3555 = callmethodChecked(string3553, "++(1)", [1], var_val);
        var opresult3557 = callmethodChecked(opresult3555, "++(1)", [1], string3550);
        // call case 4: self request
        onSelf = true;
        var call3558 = callmethodChecked(this, "out(1)", [1], opresult3557);
        if3545 = call3558;
      }
      setLineNumber(802);    // compilenode string
      var string3560 = new GraceString("\"].debug = \"def\";");
      var string3563 = new GraceString("this.methods[\"");
      var opresult3565 = callmethodChecked(string3563, "++(1)", [1], var_nm);
      var opresult3567 = callmethodChecked(opresult3565, "++(1)", [1], string3560);
      // call case 4: self request
      onSelf = true;
      var call3568 = callmethodChecked(this, "out(1)", [1], opresult3567);
      if3525 = call3568;
    }
    var if3569 = GraceDone;
    setLineNumber(804);    // compilenode identifier
    if (Grace_isTrue(var_emitTypeChecks)) {
      var if3570 = GraceDone;
      setLineNumber(805);    // compilenode member
      // call case 6: other requests
      var call3573 = callmethodChecked(var_o, "dtype", []);
      var opresult3575 = callmethodChecked(call3573, "\u2260(1)", [1], GraceFalse);
      if (Grace_isTrue(opresult3575)) {
        var if3576 = GraceDone;
        setLineNumber(806);    // compilenode string
        var string3577 = new GraceString("Unknown");
        // call case 6: other requests
        // call case 6: other requests
        var call3581 = callmethodChecked(var_o, "dtype", []);
        var call3582 = callmethodChecked(call3581, "value", []);
        var opresult3584 = callmethodChecked(call3582, "\u2260(1)", [1], string3577);
        if (Grace_isTrue(opresult3584)) {
          setLineNumber(807);    // compilenode member
          // call case 6: other requests
          var call3587 = callmethodChecked(var_o, "line", []);
          var string3588 = new GraceString("compiledefdec");
          // call case 4: self request
          onSelf = true;
          var call3589 = callmethodChecked(this, "noteLineNumber(1)comment(1)", [1, 1], call3587, string3588);
          setLineNumber(808);    // compilenode string
          var string3591 = new GraceString(")))");
          // call case 4: self request
          onSelf = true;
          var call3594 = callmethodChecked(this, "varf(1)", [1], var_nm);
          var string3596 = new GraceString(", \"match(1)\", [1], ");
          // call case 6: other requests
          var call3600 = callmethodChecked(var_o, "dtype", []);
          // call case 4: self request
          onSelf = true;
          var call3601 = callmethodChecked(this, "compilenode(1)", [1], call3600);
          var string3603 = new GraceString("if (!Grace_isTrue(callmethod(");
          var opresult3605 = callmethodChecked(string3603, "++(1)", [1], call3601);
          var opresult3607 = callmethodChecked(opresult3605, "++(1)", [1], string3596);
          var opresult3609 = callmethodChecked(opresult3607, "++(1)", [1], call3594);
          var opresult3611 = callmethodChecked(opresult3609, "++(1)", [1], string3591);
          // call case 4: self request
          onSelf = true;
          var call3612 = callmethodChecked(this, "out(1)", [1], opresult3611);
          setLineNumber(809);    // compilenode string
          var string3614 = new GraceString("  throw new GraceExceptionPacket(TypeErrorObject,");
          // call case 4: self request
          onSelf = true;
          var call3615 = callmethodChecked(this, "out(1)", [1], string3614);
          setLineNumber(810);    // compilenode string
          var string3617 = new GraceString("\"));");
          // call case 6: other requests
          // call case 6: other requests
          var call3621 = callmethodChecked(var_o, "dtype", []);
          var call3622 = callmethodChecked(call3621, "toGrace(1)", [1], new GraceNum(0));
          var string3624 = new GraceString("' is not of type ");
          var string3627 = new GraceString("      new GraceString(\"value of def '");
          var opresult3629 = callmethodChecked(string3627, "++(1)", [1], var_snm);
          var opresult3631 = callmethodChecked(opresult3629, "++(1)", [1], string3624);
          var opresult3633 = callmethodChecked(opresult3631, "++(1)", [1], call3622);
          var opresult3635 = callmethodChecked(opresult3633, "++(1)", [1], string3617);
          // call case 4: self request
          onSelf = true;
          var call3636 = callmethodChecked(this, "out(1)", [1], opresult3635);
          if3576 = call3636;
        }
        if3570 = if3576;
      }
      if3569 = if3570;
    }
    setLineNumber(814);    // compilenode string
    var string3638 = new GraceString("GraceDone");
    // call case 6: other requests
    var call3639 = callmethodChecked(var_o, "register:=(1)", [1], string3638);
    return call3639;
  };
  func3456.paramCounts = [1];
  this.methods["compiledefdec(1)"] = func3456;
  func3456.definitionLine = 780;
  func3456.definitionModule = "genjs";
  setLineNumber(816);    // compilenode method
  var func3640 = function(argcv) {    // method compilevardec(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(817);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call3643 = callmethodChecked(var_o, "name", []);
    var call3644 = callmethodChecked(call3643, "value", []);
    var var_nm = call3644;
    setLineNumber(818);    // compilenode member
    // call case 6: other requests
    var call3646 = callmethodChecked(var_o, "scope", []);
    var var_currentScope = call3646;
    setLineNumber(819);    // compilenode identifier
    // call case 6: other requests
    var call3648 = callmethodChecked(var_declaredvars, "push(1)", [1], var_nm);
    setLineNumber(820);    // compilenode member
    // call case 6: other requests
    var call3650 = callmethodChecked(var_o, "value", []);
    var var_val = call3650;
    var if3651 = GraceDone;
    setLineNumber(821);    // compilenode identifier
    var opresult3654 = callmethodChecked(GraceFalse, "\u2260(1)", [1], var_val);
    if (Grace_isTrue(opresult3654)) {
      setLineNumber(822);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call3656 = callmethodChecked(this, "compilenode(1)", [1], var_val);
      var_val = call3656;
      setLineNumber(823);    // compilenode string
      var string3658 = new GraceString(";");
      var string3661 = new GraceString(" = ");
      // call case 4: self request
      onSelf = true;
      var call3664 = callmethodChecked(this, "varf(1)", [1], var_nm);
      var string3666 = new GraceString("var ");
      var opresult3668 = callmethodChecked(string3666, "++(1)", [1], call3664);
      var opresult3670 = callmethodChecked(opresult3668, "++(1)", [1], string3661);
      var opresult3672 = callmethodChecked(opresult3670, "++(1)", [1], var_val);
      var opresult3674 = callmethodChecked(opresult3672, "++(1)", [1], string3658);
      // call case 4: self request
      onSelf = true;
      var call3675 = callmethodChecked(this, "out(1)", [1], opresult3674);
      if3651 = call3675;
    } else {
      setLineNumber(825);    // compilenode string
      var string3677 = new GraceString(";");
      // call case 4: self request
      onSelf = true;
      var call3680 = callmethodChecked(this, "varf(1)", [1], var_nm);
      var string3682 = new GraceString("var ");
      var opresult3684 = callmethodChecked(string3682, "++(1)", [1], call3680);
      var opresult3686 = callmethodChecked(opresult3684, "++(1)", [1], string3677);
      // call case 4: self request
      onSelf = true;
      var call3687 = callmethodChecked(this, "out(1)", [1], opresult3686);
      setLineNumber(826);    // compilenode string
      var string3688 = new GraceString("false");
      var_val = string3688;
      if3651 = GraceDone;
    }
    var if3689 = GraceDone;
    setLineNumber(828);    // compilenode identifier
    if (Grace_isTrue(var_debugMode)) {
      setLineNumber(829);    // compilenode string
      var string3691 = new GraceString("});");
      // call case 4: self request
      onSelf = true;
      var call3694 = callmethodChecked(this, "varf(1)", [1], var_nm);
      var string3696 = new GraceString("\", function() {return ");
      // call case 4: self request
      onSelf = true;
      var call3699 = callmethodChecked(this, "escapestring(1)", [1], var_nm);
      var string3701 = new GraceString("myframe.addVar(\"");
      var opresult3703 = callmethodChecked(string3701, "++(1)", [1], call3699);
      var opresult3705 = callmethodChecked(opresult3703, "++(1)", [1], string3696);
      var opresult3707 = callmethodChecked(opresult3705, "++(1)", [1], call3694);
      var opresult3709 = callmethodChecked(opresult3707, "++(1)", [1], string3691);
      // call case 4: self request
      onSelf = true;
      var call3710 = callmethodChecked(this, "out(1)", [1], opresult3709);
      if3689 = call3710;
    }
    var if3711 = GraceDone;
    setLineNumber(831);    // compilenode identifier
    var opresult3714 = callmethodChecked(var_compilationDepth, "==(1)", [1], new GraceNum(1));
    if (Grace_isTrue(opresult3714)) {
      setLineNumber(832);    // compilenode member
      // call case 6: other requests
      var call3720 = callmethodChecked(var_o, "nameString", []);
      // call case 6: other requests
      // call case 6: other requests
      var call3722 = callmethodChecked(var_ast, "signaturePart", []);
      var call3723 = callmethodChecked(call3722, "partName(1)scope(1)", [1, 1], call3720, var_currentScope);
      var array3717 = new PrimitiveGraceList([call3723]);
      setLineNumber(833);    // compilenode member
      // call case 6: other requests
      var call3726 = callmethodChecked(var_o, "name", []);
      var array3724 = new PrimitiveGraceList([call3726]);
      // call case 6: other requests
      setLineNumber(832);    // compilenode member
      // call case 6: other requests
      var call3728 = callmethodChecked(var_ast, "methodNode", []);
      var call3729 = callmethodChecked(call3728, "new(3)scope(1)", [3, 1], array3717, array3724, GraceFalse, var_currentScope);
      // call case 4: self request
      onSelf = true;
      var call3730 = callmethodChecked(this, "compilenode(1)", [1], call3729);
      setLineNumber(834);    // compilenode string
      var string3732 = new GraceString("_var_assign_tmp");
      // call case 6: other requests
      // call case 6: other requests
      var call3734 = callmethodChecked(var_ast, "identifierNode", []);
      var call3735 = callmethodChecked(call3734, "new(2)", [2], string3732, GraceFalse);
      var var_paramID = call3735;
      setLineNumber(836);    // compilenode string
      var string3740 = new GraceString(":=");
      // call case 6: other requests
      var call3743 = callmethodChecked(var_o, "nameString", []);
      var opresult3745 = callmethodChecked(call3743, "++(1)", [1], string3740);
      var array3746 = new PrimitiveGraceList([var_paramID]);
      // call case 6: other requests
      // call case 6: other requests
      var call3748 = callmethodChecked(var_ast, "signaturePart", []);
      var call3749 = callmethodChecked(call3748, "partName(1)params(1)scope(1)", [1, 1, 1], opresult3745, array3746, var_currentScope);
      var array3738 = new PrimitiveGraceList([call3749]);
      setLineNumber(837);    // compilenode member
      // call case 6: other requests
      var call3753 = callmethodChecked(var_o, "name", []);
      // call case 6: other requests
      // call case 6: other requests
      var call3755 = callmethodChecked(var_ast, "bindNode", []);
      var call3756 = callmethodChecked(call3755, "new(2)", [2], call3753, var_paramID);
      var array3750 = new PrimitiveGraceList([call3756]);
      // call case 6: other requests
      setLineNumber(835);    // compilenode member
      // call case 6: other requests
      var call3758 = callmethodChecked(var_ast, "methodNode", []);
      var call3759 = callmethodChecked(call3758, "new(3)scope(1)", [3, 1], array3738, array3750, GraceFalse, var_currentScope);
      // call case 4: self request
      onSelf = true;
      var call3760 = callmethodChecked(this, "compilenode(1)", [1], call3759);
      setLineNumber(838);    // compilenode string
      var string3762 = new GraceString("\"].debug = \"var\";");
      var string3765 = new GraceString("this.methods[\"");
      var opresult3767 = callmethodChecked(string3765, "++(1)", [1], var_nm);
      var opresult3769 = callmethodChecked(opresult3767, "++(1)", [1], string3762);
      // call case 4: self request
      onSelf = true;
      var call3770 = callmethodChecked(this, "out(1)", [1], opresult3769);
      if3711 = call3770;
    }
    var if3771 = GraceDone;
    setLineNumber(840);    // compilenode identifier
    if (Grace_isTrue(var_emitTypeChecks)) {
      var if3772 = GraceDone;
      setLineNumber(841);    // compilenode member
      // call case 6: other requests
      var call3775 = callmethodChecked(var_o, "dtype", []);
      var opresult3777 = callmethodChecked(call3775, "\u2260(1)", [1], GraceFalse);
      if (Grace_isTrue(opresult3777)) {
        var if3778 = GraceDone;
        setLineNumber(842);    // compilenode string
        var string3779 = new GraceString("Unknown");
        // call case 6: other requests
        // call case 6: other requests
        var call3783 = callmethodChecked(var_o, "dtype", []);
        var call3784 = callmethodChecked(call3783, "value", []);
        var opresult3786 = callmethodChecked(call3784, "\u2260(1)", [1], string3779);
        if (Grace_isTrue(opresult3786)) {
          var if3787 = GraceDone;
          setLineNumber(843);    // compilenode string
          var string3788 = new GraceString("false");
          var opresult3791 = callmethodChecked(var_val, "\u2260(1)", [1], string3788);
          if (Grace_isTrue(opresult3791)) {
            setLineNumber(844);    // compilenode member
            // call case 6: other requests
            var call3794 = callmethodChecked(var_o, "line", []);
            var string3795 = new GraceString("compilevardec");
            // call case 4: self request
            onSelf = true;
            var call3796 = callmethodChecked(this, "noteLineNumber(1)comment(1)", [1, 1], call3794, string3795);
            setLineNumber(845);    // compilenode string
            var string3798 = new GraceString(")))");
            // call case 4: self request
            onSelf = true;
            var call3801 = callmethodChecked(this, "varf(1)", [1], var_nm);
            var string3803 = new GraceString(", \"match(1)\", [1], ");
            // call case 6: other requests
            var call3807 = callmethodChecked(var_o, "dtype", []);
            // call case 4: self request
            onSelf = true;
            var call3808 = callmethodChecked(this, "compilenode(1)", [1], call3807);
            var string3810 = new GraceString("if (!Grace_isTrue(callmethod(");
            var opresult3812 = callmethodChecked(string3810, "++(1)", [1], call3808);
            var opresult3814 = callmethodChecked(opresult3812, "++(1)", [1], string3803);
            var opresult3816 = callmethodChecked(opresult3814, "++(1)", [1], call3801);
            var opresult3818 = callmethodChecked(opresult3816, "++(1)", [1], string3798);
            // call case 4: self request
            onSelf = true;
            var call3819 = callmethodChecked(this, "out(1)", [1], opresult3818);
            setLineNumber(846);    // compilenode string
            var string3821 = new GraceString("  throw new GraceExceptionPacket(TypeErrorObject,");
            // call case 4: self request
            onSelf = true;
            var call3822 = callmethodChecked(this, "out(1)", [1], string3821);
            setLineNumber(847);    // compilenode string
            var string3824 = new GraceString("\"));");
            // call case 6: other requests
            // call case 6: other requests
            var call3828 = callmethodChecked(var_o, "dtype", []);
            var call3829 = callmethodChecked(call3828, "toGrace(1)", [1], new GraceNum(0));
            var string3831 = new GraceString("' is not of type ");
            // call case 6: other requests
            // call case 6: other requests
            var call3835 = callmethodChecked(var_o, "name", []);
            var call3836 = callmethodChecked(call3835, "value", []);
            var string3838 = new GraceString("      new GraceString(\"initial value of var '");
            var opresult3840 = callmethodChecked(string3838, "++(1)", [1], call3836);
            var opresult3842 = callmethodChecked(opresult3840, "++(1)", [1], string3831);
            var opresult3844 = callmethodChecked(opresult3842, "++(1)", [1], call3829);
            var opresult3846 = callmethodChecked(opresult3844, "++(1)", [1], string3824);
            // call case 4: self request
            onSelf = true;
            var call3847 = callmethodChecked(this, "out(1)", [1], opresult3846);
            if3787 = call3847;
          }
          if3778 = if3787;
        }
        if3772 = if3778;
      }
      if3771 = if3772;
    }
    setLineNumber(852);    // compilenode string
    var string3849 = new GraceString("GraceDone");
    // call case 6: other requests
    var call3850 = callmethodChecked(var_o, "register:=(1)", [1], string3849);
    return call3850;
  };
  func3640.paramCounts = [1];
  this.methods["compilevardec(1)"] = func3640;
  func3640.definitionLine = 816;
  func3640.definitionModule = "genjs";
  setLineNumber(854);    // compilenode method
  var func3851 = function(argcv) {    // method compiletrycatch(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(855);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(856);    // compilenode identifier
    var opresult3854 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult3854;
    setLineNumber(857);    // compilenode member
    // call case 6: other requests
    var call3856 = callmethodChecked(var_o, "cases", []);
    var var_cases = call3856;
    setLineNumber(858);    // compilenode member
    // call case 6: other requests
    var call3859 = callmethodChecked(var_o, "value", []);
    // call case 4: self request
    onSelf = true;
    var call3860 = callmethodChecked(this, "compilenode(1)", [1], call3859);
    var var_mainblock = call3860;
    setLineNumber(859);    // compilenode string
    var string3862 = new GraceString(" = [];");
    var string3865 = new GraceString("var cases");
    var opresult3867 = callmethodChecked(string3865, "++(1)", [1], var_myc);
    var opresult3869 = callmethodChecked(opresult3867, "++(1)", [1], string3862);
    // call case 4: self request
    onSelf = true;
    var call3870 = callmethodChecked(this, "out(1)", [1], opresult3869);
    setLineNumber(860);    // compilenode block
    var block3872 = new GraceBlock(this, 860, 1);
    setLineNumber(1);    // compilenode identifier
    block3872.real = function(var_c) {
      setLineNumber(861);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call3874 = callmethodChecked(this, "compilenode(1)", [1], var_c);
      var var_e = call3874;
      setLineNumber(862);    // compilenode string
      var string3876 = new GraceString(");");
      var string3879 = new GraceString(".push(");
      var string3882 = new GraceString("cases");
      var opresult3884 = callmethodChecked(string3882, "++(1)", [1], var_myc);
      var opresult3886 = callmethodChecked(opresult3884, "++(1)", [1], string3879);
      var opresult3888 = callmethodChecked(opresult3886, "++(1)", [1], var_e);
      var opresult3890 = callmethodChecked(opresult3888, "++(1)", [1], string3876);
      // call case 4: self request
      onSelf = true;
      var call3891 = callmethodChecked(this, "out(1)", [1], opresult3890);
      return call3891;
    };
    // call case 5: prelude request
    var call3892 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_cases, block3872);
    setLineNumber(864);    // compilenode string
    var string3893 = new GraceString("false");
    var var_finally = string3893;
    var if3894 = GraceDone;
    setLineNumber(865);    // compilenode member
    // call case 6: other requests
    var call3896 = callmethodChecked(var_o, "finally", []);
    var opresult3899 = callmethodChecked(GraceFalse, "\u2260(1)", [1], call3896);
    if (Grace_isTrue(opresult3899)) {
      setLineNumber(866);    // compilenode member
      // call case 6: other requests
      var call3902 = callmethodChecked(var_o, "finally", []);
      // call case 4: self request
      onSelf = true;
      var call3903 = callmethodChecked(this, "compilenode(1)", [1], call3902);
      var_finally = call3903;
      if3894 = GraceDone;
    }
    setLineNumber(868);    // compilenode member
    // call case 6: other requests
    var call3906 = callmethodChecked(var_o, "line", []);
    var string3907 = new GraceString("compiletrycatch");
    // call case 4: self request
    onSelf = true;
    var call3908 = callmethodChecked(this, "noteLineNumber(1)comment(1)", [1, 1], call3906, string3907);
    setLineNumber(869);    // compilenode string
    var string3910 = new GraceString(");");
    var string3913 = new GraceString(",");
    var string3916 = new GraceString(",cases");
    var string3919 = new GraceString(" = tryCatch(");
    var string3922 = new GraceString("var catchres");
    var opresult3924 = callmethodChecked(string3922, "++(1)", [1], var_myc);
    var opresult3926 = callmethodChecked(opresult3924, "++(1)", [1], string3919);
    var opresult3928 = callmethodChecked(opresult3926, "++(1)", [1], var_mainblock);
    var opresult3930 = callmethodChecked(opresult3928, "++(1)", [1], string3916);
    var opresult3932 = callmethodChecked(opresult3930, "++(1)", [1], var_myc);
    var opresult3934 = callmethodChecked(opresult3932, "++(1)", [1], string3913);
    var opresult3936 = callmethodChecked(opresult3934, "++(1)", [1], var_finally);
    var opresult3938 = callmethodChecked(opresult3936, "++(1)", [1], string3910);
    // call case 4: self request
    onSelf = true;
    var call3939 = callmethodChecked(this, "out(1)", [1], opresult3938);
    setLineNumber(870);    // compilenode string
    var string3941 = new GraceString("\");");
    var string3944 = new GraceString("setModuleName(\"");
    var opresult3946 = callmethodChecked(string3944, "++(1)", [1], var_modname);
    var opresult3948 = callmethodChecked(opresult3946, "++(1)", [1], string3941);
    // call case 4: self request
    onSelf = true;
    var call3949 = callmethodChecked(this, "out(1)", [1], opresult3948);
    setLineNumber(871);    // compilenode string
    var string3952 = new GraceString("catchres");
    var opresult3954 = callmethodChecked(string3952, "++(1)", [1], var_myc);
    // call case 6: other requests
    var call3955 = callmethodChecked(var_o, "register:=(1)", [1], opresult3954);
    return call3955;
  };
  func3851.paramCounts = [1];
  this.methods["compiletrycatch(1)"] = func3851;
  func3851.definitionLine = 854;
  func3851.definitionModule = "genjs";
  setLineNumber(873);    // compilenode method
  var func3956 = function(argcv) {    // method compilematchcase(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(874);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(875);    // compilenode identifier
    var opresult3959 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult3959;
    setLineNumber(876);    // compilenode member
    // call case 6: other requests
    var call3961 = callmethodChecked(var_o, "cases", []);
    var var_cases = call3961;
    setLineNumber(877);    // compilenode member
    // call case 6: other requests
    var call3964 = callmethodChecked(var_o, "value", []);
    // call case 4: self request
    onSelf = true;
    var call3965 = callmethodChecked(this, "compilenode(1)", [1], call3964);
    var var_matchee = call3965;
    setLineNumber(878);    // compilenode string
    var string3967 = new GraceString(" = [];");
    var string3970 = new GraceString("var cases");
    var opresult3972 = callmethodChecked(string3970, "++(1)", [1], var_myc);
    var opresult3974 = callmethodChecked(opresult3972, "++(1)", [1], string3967);
    // call case 4: self request
    onSelf = true;
    var call3975 = callmethodChecked(this, "out(1)", [1], opresult3974);
    setLineNumber(879);    // compilenode block
    var block3977 = new GraceBlock(this, 879, 1);
    setLineNumber(1);    // compilenode identifier
    block3977.real = function(var_c) {
      setLineNumber(880);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call3979 = callmethodChecked(this, "compilenode(1)", [1], var_c);
      var var_e = call3979;
      setLineNumber(881);    // compilenode string
      var string3981 = new GraceString(");");
      var string3984 = new GraceString(".push(");
      var string3987 = new GraceString("cases");
      var opresult3989 = callmethodChecked(string3987, "++(1)", [1], var_myc);
      var opresult3991 = callmethodChecked(opresult3989, "++(1)", [1], string3984);
      var opresult3993 = callmethodChecked(opresult3991, "++(1)", [1], var_e);
      var opresult3995 = callmethodChecked(opresult3993, "++(1)", [1], string3981);
      // call case 4: self request
      onSelf = true;
      var call3996 = callmethodChecked(this, "out(1)", [1], opresult3995);
      return call3996;
    };
    // call case 5: prelude request
    var call3997 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_cases, block3977);
    setLineNumber(883);    // compilenode string
    var string3998 = new GraceString("false");
    var var_elsecase = string3998;
    var if3999 = GraceDone;
    setLineNumber(884);    // compilenode member
    // call case 6: other requests
    var call4001 = callmethodChecked(var_o, "elsecase", []);
    var opresult4004 = callmethodChecked(GraceFalse, "\u2260(1)", [1], call4001);
    if (Grace_isTrue(opresult4004)) {
      setLineNumber(885);    // compilenode member
      // call case 6: other requests
      var call4007 = callmethodChecked(var_o, "elsecase", []);
      // call case 4: self request
      onSelf = true;
      var call4008 = callmethodChecked(this, "compilenode(1)", [1], call4007);
      var_elsecase = call4008;
      if3999 = GraceDone;
    }
    setLineNumber(887);    // compilenode member
    // call case 6: other requests
    var call4011 = callmethodChecked(var_o, "line", []);
    var string4012 = new GraceString("compilematchcase");
    // call case 4: self request
    onSelf = true;
    var call4013 = callmethodChecked(this, "noteLineNumber(1)comment(1)", [1, 1], call4011, string4012);
    setLineNumber(888);    // compilenode string
    var string4015 = new GraceString(");");
    var string4018 = new GraceString(",");
    var string4021 = new GraceString(",cases");
    var string4024 = new GraceString(" = matchCase(");
    var string4027 = new GraceString("var matchres");
    var opresult4029 = callmethodChecked(string4027, "++(1)", [1], var_myc);
    var opresult4031 = callmethodChecked(opresult4029, "++(1)", [1], string4024);
    var opresult4033 = callmethodChecked(opresult4031, "++(1)", [1], var_matchee);
    var opresult4035 = callmethodChecked(opresult4033, "++(1)", [1], string4021);
    var opresult4037 = callmethodChecked(opresult4035, "++(1)", [1], var_myc);
    var opresult4039 = callmethodChecked(opresult4037, "++(1)", [1], string4018);
    var opresult4041 = callmethodChecked(opresult4039, "++(1)", [1], var_elsecase);
    var opresult4043 = callmethodChecked(opresult4041, "++(1)", [1], string4015);
    // call case 4: self request
    onSelf = true;
    var call4044 = callmethodChecked(this, "out(1)", [1], opresult4043);
    setLineNumber(889);    // compilenode string
    var string4046 = new GraceString("\");");
    var string4049 = new GraceString("setModuleName(\"");
    var opresult4051 = callmethodChecked(string4049, "++(1)", [1], var_modname);
    var opresult4053 = callmethodChecked(opresult4051, "++(1)", [1], string4046);
    // call case 4: self request
    onSelf = true;
    var call4054 = callmethodChecked(this, "out(1)", [1], opresult4053);
    setLineNumber(890);    // compilenode string
    var string4057 = new GraceString("matchres");
    var opresult4059 = callmethodChecked(string4057, "++(1)", [1], var_myc);
    // call case 6: other requests
    var call4060 = callmethodChecked(var_o, "register:=(1)", [1], opresult4059);
    return call4060;
  };
  func3956.paramCounts = [1];
  this.methods["compilematchcase(1)"] = func3956;
  func3956.definitionLine = 873;
  func3956.definitionModule = "genjs";
  setLineNumber(892);    // compilenode method
  var func4061 = function(argcv) {    // method compileop(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(893);    // compilenode member
    // call case 6: other requests
    var call4064 = callmethodChecked(var_o, "right", []);
    // call case 4: self request
    onSelf = true;
    var call4065 = callmethodChecked(this, "compilenode(1)", [1], call4064);
    var var_right = call4065;
    setLineNumber(894);    // compilenode identifier
    var opresult4068 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult4068;
    setLineNumber(895);    // compilenode string
    var string4069 = new GraceString("opresult");
    var var_rnm = string4069;
    var if4070 = GraceDone;
    setLineNumber(896);    // compilenode string
    var string4071 = new GraceString("*");
    // call case 6: other requests
    var call4074 = callmethodChecked(var_o, "value", []);
    var opresult4076 = callmethodChecked(call4074, "==(1)", [1], string4071);
    if (Grace_isTrue(opresult4076)) {
      setLineNumber(897);    // compilenode string
      var string4077 = new GraceString("prod");
      var_rnm = string4077;
      if4070 = GraceDone;
    }
    var if4078 = GraceDone;
    setLineNumber(899);    // compilenode string
    var string4079 = new GraceString("/");
    // call case 6: other requests
    var call4082 = callmethodChecked(var_o, "value", []);
    var opresult4084 = callmethodChecked(call4082, "==(1)", [1], string4079);
    if (Grace_isTrue(opresult4084)) {
      setLineNumber(900);    // compilenode string
      var string4085 = new GraceString("quotient");
      var_rnm = string4085;
      if4078 = GraceDone;
    }
    var if4086 = GraceDone;
    setLineNumber(902);    // compilenode string
    var string4087 = new GraceString("-");
    // call case 6: other requests
    var call4090 = callmethodChecked(var_o, "value", []);
    var opresult4092 = callmethodChecked(call4090, "==(1)", [1], string4087);
    if (Grace_isTrue(opresult4092)) {
      setLineNumber(903);    // compilenode string
      var string4093 = new GraceString("diff");
      var_rnm = string4093;
      if4086 = GraceDone;
    }
    var if4094 = GraceDone;
    setLineNumber(905);    // compilenode string
    var string4095 = new GraceString("%");
    // call case 6: other requests
    var call4098 = callmethodChecked(var_o, "value", []);
    var opresult4100 = callmethodChecked(call4098, "==(1)", [1], string4095);
    if (Grace_isTrue(opresult4100)) {
      setLineNumber(906);    // compilenode string
      var string4101 = new GraceString("modulus");
      var_rnm = string4101;
      if4094 = GraceDone;
    }
    var if4102 = GraceDone;
    setLineNumber(908);    // compilenode block
    var block4103 = new GraceBlock(this, 908, 0);
    block4103.real = function() {
      var string4104 = new GraceString("super");
      // call case 6: other requests
      // call case 6: other requests
      var call4108 = callmethodChecked(var_o, "left", []);
      var call4109 = callmethodChecked(call4108, "value", []);
      var opresult4111 = callmethodChecked(call4109, "==(1)", [1], string4104);
      return opresult4111;
    };
    var string4113 = new GraceString("identifier");
    // call case 6: other requests
    // call case 6: other requests
    var call4117 = callmethodChecked(var_o, "left", []);
    var call4118 = callmethodChecked(call4117, "kind", []);
    var opresult4120 = callmethodChecked(call4118, "==(1)", [1], string4113);
    var opresult4122 = callmethodChecked(opresult4120, "&&(1)", [1], block4103);
    if (Grace_isTrue(opresult4122)) {
      setLineNumber(910);    // compilenode string
      var string4124 = new GraceString(");");
      var string4127 = new GraceString("\", [1], ");
      // call case 6: other requests
      var call4131 = callmethodChecked(var_o, "nameString", []);
      // call case 4: self request
      onSelf = true;
      var call4132 = callmethodChecked(this, "escapestring(1)", [1], call4131);
      var string4134 = new GraceString(", \"");
      setLineNumber(909);    // compilenode string
      var string4136 = new GraceString(" = callmethodsuper(this");
      var string4140 = new GraceString("var ");
      var opresult4142 = callmethodChecked(string4140, "++(1)", [1], var_rnm);
      var opresult4144 = callmethodChecked(opresult4142, "++(1)", [1], var_auto__95__count);
      var opresult4146 = callmethodChecked(opresult4144, "++(1)", [1], string4136);
      var opresult4148 = callmethodChecked(opresult4146, "++(1)", [1], string4134);
      var opresult4150 = callmethodChecked(opresult4148, "++(1)", [1], call4132);
      var opresult4152 = callmethodChecked(opresult4150, "++(1)", [1], string4127);
      var opresult4154 = callmethodChecked(opresult4152, "++(1)", [1], var_right);
      var opresult4156 = callmethodChecked(opresult4154, "++(1)", [1], string4124);
      // call case 4: self request
      onSelf = true;
      var call4157 = callmethodChecked(this, "out(1)", [1], opresult4156);
      if4102 = call4157;
    } else {
      setLineNumber(912);    // compilenode member
      // call case 6: other requests
      var call4160 = callmethodChecked(var_o, "left", []);
      // call case 4: self request
      onSelf = true;
      var call4161 = callmethodChecked(this, "compilenode(1)", [1], call4160);
      var var_left = call4161;
      setLineNumber(913);    // compilenode identifier
      var opresult4164 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
      var_auto__95__count = opresult4164;
      var if4165 = GraceDone;
      setLineNumber(914);    // compilenode identifier
      if (Grace_isTrue(var_emitArgChecks)) {
        setLineNumber(916);    // compilenode string
        var string4167 = new GraceString(");");
        var string4170 = new GraceString("\", [1], ");
        // call case 6: other requests
        var call4174 = callmethodChecked(var_o, "nameString", []);
        // call case 4: self request
        onSelf = true;
        var call4175 = callmethodChecked(this, "escapestring(1)", [1], call4174);
        var string4177 = new GraceString(", \"");
        setLineNumber(915);    // compilenode string
        var string4180 = new GraceString(" = callmethodChecked(");
        var string4184 = new GraceString("var ");
        var opresult4186 = callmethodChecked(string4184, "++(1)", [1], var_rnm);
        var opresult4188 = callmethodChecked(opresult4186, "++(1)", [1], var_auto__95__count);
        var opresult4190 = callmethodChecked(opresult4188, "++(1)", [1], string4180);
        var opresult4192 = callmethodChecked(opresult4190, "++(1)", [1], var_left);
        var opresult4194 = callmethodChecked(opresult4192, "++(1)", [1], string4177);
        var opresult4196 = callmethodChecked(opresult4194, "++(1)", [1], call4175);
        var opresult4198 = callmethodChecked(opresult4196, "++(1)", [1], string4170);
        var opresult4200 = callmethodChecked(opresult4198, "++(1)", [1], var_right);
        var opresult4202 = callmethodChecked(opresult4200, "++(1)", [1], string4167);
        // call case 4: self request
        onSelf = true;
        var call4203 = callmethodChecked(this, "out(1)", [1], opresult4202);
        if4165 = call4203;
      } else {
        setLineNumber(919);    // compilenode string
        var string4205 = new GraceString(");");
        var string4208 = new GraceString("\", [1], ");
        // call case 6: other requests
        var call4212 = callmethodChecked(var_o, "nameString", []);
        // call case 4: self request
        onSelf = true;
        var call4213 = callmethodChecked(this, "escapestring(1)", [1], call4212);
        var string4215 = new GraceString(", \"");
        setLineNumber(918);    // compilenode string
        var string4218 = new GraceString(" = callmethod(");
        var string4222 = new GraceString("var ");
        var opresult4224 = callmethodChecked(string4222, "++(1)", [1], var_rnm);
        var opresult4226 = callmethodChecked(opresult4224, "++(1)", [1], var_auto__95__count);
        var opresult4228 = callmethodChecked(opresult4226, "++(1)", [1], string4218);
        var opresult4230 = callmethodChecked(opresult4228, "++(1)", [1], var_left);
        var opresult4232 = callmethodChecked(opresult4230, "++(1)", [1], string4215);
        var opresult4234 = callmethodChecked(opresult4232, "++(1)", [1], call4213);
        var opresult4236 = callmethodChecked(opresult4234, "++(1)", [1], string4208);
        var opresult4238 = callmethodChecked(opresult4236, "++(1)", [1], var_right);
        var opresult4240 = callmethodChecked(opresult4238, "++(1)", [1], string4205);
        // call case 4: self request
        onSelf = true;
        var call4241 = callmethodChecked(this, "out(1)", [1], opresult4240);
        if4165 = call4241;
      }
      if4102 = if4165;
    }
    setLineNumber(922);    // compilenode identifier
    var opresult4245 = callmethodChecked(var_rnm, "++(1)", [1], var_auto__95__count);
    // call case 6: other requests
    var call4246 = callmethodChecked(var_o, "register:=(1)", [1], opresult4245);
    setLineNumber(923);    // compilenode identifier
    var opresult4249 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult4249;
    return GraceDone;
  };
  func4061.paramCounts = [1];
  this.methods["compileop(1)"] = func4061;
  func4061.definitionLine = 892;
  func4061.definitionModule = "genjs";
  setLineNumber(925);    // compilenode method
  var func4250 = function(argcv) {    // method compileArguments(_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_args = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(926);    // compilenode member
    // call case 6: other requests
    var call4253 = callmethodChecked(var_o, "with", []);
    var block4254 = new GraceBlock(this, 926, 1);
    setLineNumber(1);    // compilenode identifier
    block4254.real = function(var_part) {
      setLineNumber(927);    // compilenode member
      // call case 6: other requests
      var call4257 = callmethodChecked(var_part, "args", []);
      var block4258 = new GraceBlock(this, 927, 1);
      setLineNumber(1);    // compilenode identifier
      block4258.real = function(var_p) {
        setLineNumber(928);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call4261 = callmethodChecked(this, "compilenode(1)", [1], var_p);
        // call case 6: other requests
        var call4262 = callmethodChecked(var_args, "push(1)", [1], call4261);
        return call4262;
      };
      // call case 5: prelude request
      var call4263 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call4257, block4258);
      return call4263;
    };
    // call case 5: prelude request
    var call4264 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call4253, block4254);
    var if4265 = GraceDone;
    setLineNumber(931);    // compilenode member
    // call case 6: other requests
    var call4267 = callmethodChecked(var_o, "generics", []);
    var opresult4270 = callmethodChecked(GraceFalse, "\u2260(1)", [1], call4267);
    if (Grace_isTrue(opresult4270)) {
      setLineNumber(932);    // compilenode block
      var block4272 = new GraceBlock(this, 932, 1);
      setLineNumber(1);    // compilenode identifier
      block4272.real = function(var_g) {
        setLineNumber(933);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call4275 = callmethodChecked(this, "compilenode(1)", [1], var_g);
        // call case 6: other requests
        var call4276 = callmethodChecked(var_args, "push(1)", [1], call4275);
        return call4276;
      };
      // call case 6: other requests
      setLineNumber(932);    // compilenode member
      // call case 6: other requests
      var call4278 = callmethodChecked(var_o, "generics", []);
      var call4279 = callmethodChecked(call4278, "do(1)", [1], block4272);
      if4265 = call4279;
    }
    return if4265;
  };
  func4250.paramCounts = [2];
  this.methods["compileArguments(2)"] = func4250;
  func4250.definitionLine = 925;
  func4250.definitionModule = "genjs";
  setLineNumber(937);    // compilenode method
  var func4280 = function(argcv) {    // method assembleArguments(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_args = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(938);    // compilenode string
    var string4281 = new GraceString("");
    var var_result = string4281;
    setLineNumber(939);    // compilenode block
    var block4283 = new GraceBlock(this, 939, 1);
    setLineNumber(1);    // compilenode identifier
    block4283.real = function(var_arg) {
      setLineNumber(940);    // compilenode string
      var string4285 = new GraceString(", ");
      var opresult4288 = callmethodChecked(var_result, "++(1)", [1], string4285);
      var opresult4290 = callmethodChecked(opresult4288, "++(1)", [1], var_arg);
      var_result = opresult4290;
      return GraceDone;
    };
    // call case 5: prelude request
    var call4291 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_args, block4283);
    setLineNumber(942);    // compilenode identifier
    return var_result;
  };
  func4280.paramCounts = [1];
  this.methods["assembleArguments(1)"] = func4280;
  func4280.definitionLine = 937;
  func4280.definitionModule = "genjs";
  setLineNumber(944);    // compilenode method
  var func4292 = function(argcv) {    // method partl(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(945);    // compilenode string
    var string4293 = new GraceString("");
    var var_result = string4293;
    setLineNumber(946);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call4297 = callmethodChecked(var_o, "with", []);
    var call4298 = callmethodChecked(call4297, "indices", []);
    var block4299 = new GraceBlock(this, 946, 1);
    setLineNumber(1);    // compilenode identifier
    block4299.real = function(var_partnr) {
      setLineNumber(947);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      // call case 6: other requests
      // call case 6: other requests
      var call4304 = callmethodChecked(var_o, "with", []);
      var call4305 = callmethodChecked(call4304, "at(1)", [1], var_partnr);
      var call4306 = callmethodChecked(call4305, "args", []);
      var call4307 = callmethodChecked(call4306, "size", []);
      var opresult4310 = callmethodChecked(var_result, "++(1)", [1], call4307);
      var_result = opresult4310;
      var if4311 = GraceDone;
      setLineNumber(948);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call4314 = callmethodChecked(var_o, "with", []);
      var call4315 = callmethodChecked(call4314, "size", []);
      var opresult4318 = callmethodChecked(var_partnr, "<(1)", [1], call4315);
      if (Grace_isTrue(opresult4318)) {
        setLineNumber(949);    // compilenode string
        var string4319 = new GraceString(", ");
        var opresult4322 = callmethodChecked(var_result, "++(1)", [1], string4319);
        var_result = opresult4322;
        if4311 = GraceDone;
      }
      return if4311;
    };
    // call case 5: prelude request
    var call4323 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call4298, block4299);
    var if4324 = GraceDone;
    setLineNumber(952);    // compilenode member
    // call case 6: other requests
    var call4326 = callmethodChecked(var_o, "generics", []);
    var opresult4329 = callmethodChecked(GraceFalse, "\u2260(1)", [1], call4326);
    if (Grace_isTrue(opresult4329)) {
      setLineNumber(953);    // compilenode string
      var string4330 = new GraceString("");
      // call case 6: other requests
      // call case 6: other requests
      var call4334 = callmethodChecked(var_o, "generics", []);
      var call4335 = callmethodChecked(call4334, "size", []);
      var string4337 = new GraceString(", ");
      var opresult4339 = callmethodChecked(string4337, "++(1)", [1], call4335);
      var opresult4341 = callmethodChecked(opresult4339, "++(1)", [1], string4330);
      var opresult4344 = callmethodChecked(var_result, "++(1)", [1], opresult4341);
      var_result = opresult4344;
      if4324 = GraceDone;
    }
    setLineNumber(955);    // compilenode identifier
    return var_result;
  };
  func4292.paramCounts = [1];
  this.methods["partl(1)"] = func4292;
  func4292.definitionLine = 944;
  func4292.definitionModule = "genjs";
  setLineNumber(957);    // compilenode method
  var func4345 = function(argcv) {    // method compileSuperRequest(_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_args = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(958);    // compilenode string
    var string4347 = new GraceString("// call case 1: super request");
    // call case 4: self request
    onSelf = true;
    var call4348 = callmethodChecked(this, "out(1)", [1], string4347);
    setLineNumber(959);    // compilenode member
    // call case 6: other requests
    var call4351 = callmethodChecked(var_o, "nameString", []);
    // call case 4: self request
    onSelf = true;
    var call4352 = callmethodChecked(this, "escapestring(1)", [1], call4351);
    var var_escapedName = call4352;
    setLineNumber(961);    // compilenode string
    var string4354 = new GraceString(");");
    // call case 4: self request
    onSelf = true;
    var call4357 = callmethodChecked(this, "assembleArguments(1)", [1], var_args);
    var string4359 = new GraceString("]");
    // call case 4: self request
    onSelf = true;
    var call4362 = callmethodChecked(this, "partl(1)", [1], var_o);
    var string4364 = new GraceString("\", [");
    // call case 6: other requests
    var call4368 = callmethodChecked(var_o, "nameString", []);
    // call case 4: self request
    onSelf = true;
    var call4369 = callmethodChecked(this, "escapestring(1)", [1], call4368);
    var string4371 = new GraceString(", \"");
    var opresult4373 = callmethodChecked(string4371, "++(1)", [1], call4369);
    var opresult4375 = callmethodChecked(opresult4373, "++(1)", [1], string4364);
    var opresult4377 = callmethodChecked(opresult4375, "++(1)", [1], call4362);
    var opresult4379 = callmethodChecked(opresult4377, "++(1)", [1], string4359);
    var opresult4381 = callmethodChecked(opresult4379, "++(1)", [1], call4357);
    var opresult4383 = callmethodChecked(opresult4381, "++(1)", [1], string4354);
    setLineNumber(960);    // compilenode string
    var string4385 = new GraceString(" = callmethodsuper(this");
    var string4388 = new GraceString("var call");
    var opresult4390 = callmethodChecked(string4388, "++(1)", [1], var_auto__95__count);
    var opresult4392 = callmethodChecked(opresult4390, "++(1)", [1], string4385);
    var opresult4394 = callmethodChecked(opresult4392, "++(1)", [1], opresult4383);
    // call case 4: self request
    onSelf = true;
    var call4395 = callmethodChecked(this, "out(1)", [1], opresult4394);
    return call4395;
  };
  func4345.paramCounts = [2];
  this.methods["compileSuperRequest(2)"] = func4345;
  func4345.definitionLine = 957;
  func4345.definitionModule = "genjs";
  setLineNumber(963);    // compilenode method
  var func4396 = function(argcv) {    // method compileOuterRequest(_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_args = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(964);    // compilenode string
    var string4398 = new GraceString("// call case 2: outer request");
    // call case 4: self request
    onSelf = true;
    var call4399 = callmethodChecked(this, "out(1)", [1], string4398);
    setLineNumber(965);    // compilenode member
    // call case 6: other requests
    var call4402 = callmethodChecked(var_o, "receiver", []);
    // call case 4: self request
    onSelf = true;
    var call4403 = callmethodChecked(this, "compilenode(1)", [1], call4402);
    var var_ot = call4403;
    setLineNumber(967);    // compilenode string
    var string4405 = new GraceString(");");
    // call case 4: self request
    onSelf = true;
    var call4408 = callmethodChecked(this, "assembleArguments(1)", [1], var_args);
    var string4410 = new GraceString("]");
    // call case 4: self request
    onSelf = true;
    var call4413 = callmethodChecked(this, "partl(1)", [1], var_o);
    var string4415 = new GraceString("\", [");
    // call case 6: other requests
    // call case 6: other requests
    var call4420 = callmethodChecked(var_o, "receiver", []);
    var call4421 = callmethodChecked(call4420, "nameString", []);
    // call case 4: self request
    onSelf = true;
    var call4422 = callmethodChecked(this, "escapestring(1)", [1], call4421);
    var string4424 = new GraceString(", \"");
    var opresult4426 = callmethodChecked(string4424, "++(1)", [1], call4422);
    var opresult4428 = callmethodChecked(opresult4426, "++(1)", [1], string4415);
    var opresult4430 = callmethodChecked(opresult4428, "++(1)", [1], call4413);
    var opresult4432 = callmethodChecked(opresult4430, "++(1)", [1], string4410);
    var opresult4434 = callmethodChecked(opresult4432, "++(1)", [1], call4408);
    var opresult4436 = callmethodChecked(opresult4434, "++(1)", [1], string4405);
    setLineNumber(966);    // compilenode string
    var string4438 = new GraceString("");
    var string4441 = new GraceString("(");
    var string4444 = new GraceString(" = ");
    var string4447 = new GraceString("var call");
    var opresult4449 = callmethodChecked(string4447, "++(1)", [1], var_auto__95__count);
    var opresult4451 = callmethodChecked(opresult4449, "++(1)", [1], string4444);
    var opresult4453 = callmethodChecked(opresult4451, "++(1)", [1], var_requestCall);
    var opresult4455 = callmethodChecked(opresult4453, "++(1)", [1], string4441);
    var opresult4457 = callmethodChecked(opresult4455, "++(1)", [1], var_ot);
    var opresult4459 = callmethodChecked(opresult4457, "++(1)", [1], string4438);
    var opresult4461 = callmethodChecked(opresult4459, "++(1)", [1], opresult4436);
    // call case 4: self request
    onSelf = true;
    var call4462 = callmethodChecked(this, "out(1)", [1], opresult4461);
    return call4462;
  };
  func4396.paramCounts = [2];
  this.methods["compileOuterRequest(2)"] = func4396;
  func4396.definitionLine = 963;
  func4396.definitionModule = "genjs";
  setLineNumber(969);    // compilenode method
  var func4463 = function(argcv) {    // method compileSelfOuterRequest(_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_args = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(970);    // compilenode string
    var string4465 = new GraceString("// call case 3: self.outer request");
    // call case 4: self request
    onSelf = true;
    var call4466 = callmethodChecked(this, "out(1)", [1], string4465);
    setLineNumber(972);    // compilenode string
    var string4468 = new GraceString("\"outer\", [0]);");
    setLineNumber(971);    // compilenode string
    var string4470 = new GraceString("(superDepth, ");
    var string4473 = new GraceString(" = ");
    var string4476 = new GraceString("var call");
    var opresult4478 = callmethodChecked(string4476, "++(1)", [1], var_auto__95__count);
    var opresult4480 = callmethodChecked(opresult4478, "++(1)", [1], string4473);
    var opresult4482 = callmethodChecked(opresult4480, "++(1)", [1], var_requestCall);
    var opresult4484 = callmethodChecked(opresult4482, "++(1)", [1], string4470);
    var opresult4486 = callmethodChecked(opresult4484, "++(1)", [1], string4468);
    // call case 4: self request
    onSelf = true;
    var call4487 = callmethodChecked(this, "out(1)", [1], opresult4486);
    return call4487;
  };
  func4463.paramCounts = [2];
  this.methods["compileSelfOuterRequest(2)"] = func4463;
  func4463.definitionLine = 969;
  func4463.definitionModule = "genjs";
  setLineNumber(974);    // compilenode method
  var func4488 = function(argcv) {    // method compileSelfRequest(_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_args = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(975);    // compilenode string
    var string4490 = new GraceString("// call case 4: self request");
    // call case 4: self request
    onSelf = true;
    var call4491 = callmethodChecked(this, "out(1)", [1], string4490);
    setLineNumber(976);    // compilenode string
    var string4493 = new GraceString("onSelf = true;");
    // call case 4: self request
    onSelf = true;
    var call4494 = callmethodChecked(this, "out(1)", [1], string4493);
    setLineNumber(978);    // compilenode string
    var string4496 = new GraceString(");");
    // call case 4: self request
    onSelf = true;
    var call4499 = callmethodChecked(this, "assembleArguments(1)", [1], var_args);
    var string4501 = new GraceString("]");
    // call case 4: self request
    onSelf = true;
    var call4504 = callmethodChecked(this, "partl(1)", [1], var_o);
    var string4506 = new GraceString("\", [");
    // call case 6: other requests
    var call4510 = callmethodChecked(var_o, "nameString", []);
    // call case 4: self request
    onSelf = true;
    var call4511 = callmethodChecked(this, "escapestring(1)", [1], call4510);
    var string4513 = new GraceString(", \"");
    var opresult4515 = callmethodChecked(string4513, "++(1)", [1], call4511);
    var opresult4517 = callmethodChecked(opresult4515, "++(1)", [1], string4506);
    var opresult4519 = callmethodChecked(opresult4517, "++(1)", [1], call4504);
    var opresult4521 = callmethodChecked(opresult4519, "++(1)", [1], string4501);
    var opresult4523 = callmethodChecked(opresult4521, "++(1)", [1], call4499);
    var opresult4525 = callmethodChecked(opresult4523, "++(1)", [1], string4496);
    setLineNumber(977);    // compilenode string
    var string4527 = new GraceString("(this");
    var string4530 = new GraceString(" = ");
    var string4533 = new GraceString("var call");
    var opresult4535 = callmethodChecked(string4533, "++(1)", [1], var_auto__95__count);
    var opresult4537 = callmethodChecked(opresult4535, "++(1)", [1], string4530);
    var opresult4539 = callmethodChecked(opresult4537, "++(1)", [1], var_requestCall);
    var opresult4541 = callmethodChecked(opresult4539, "++(1)", [1], string4527);
    var opresult4543 = callmethodChecked(opresult4541, "++(1)", [1], opresult4525);
    // call case 4: self request
    onSelf = true;
    var call4544 = callmethodChecked(this, "out(1)", [1], opresult4543);
    return call4544;
  };
  func4488.paramCounts = [2];
  this.methods["compileSelfRequest(2)"] = func4488;
  func4488.definitionLine = 974;
  func4488.definitionModule = "genjs";
  setLineNumber(980);    // compilenode method
  var func4545 = function(argcv) {    // method compilePreludeRequest(_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_args = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(981);    // compilenode string
    var string4547 = new GraceString("// call case 5: prelude request");
    // call case 4: self request
    onSelf = true;
    var call4548 = callmethodChecked(this, "out(1)", [1], string4547);
    setLineNumber(983);    // compilenode string
    var string4550 = new GraceString(");");
    // call case 4: self request
    onSelf = true;
    var call4553 = callmethodChecked(this, "assembleArguments(1)", [1], var_args);
    var string4555 = new GraceString("]");
    // call case 4: self request
    onSelf = true;
    var call4558 = callmethodChecked(this, "partl(1)", [1], var_o);
    var string4560 = new GraceString("\", [");
    // call case 6: other requests
    var call4564 = callmethodChecked(var_o, "nameString", []);
    // call case 4: self request
    onSelf = true;
    var call4565 = callmethodChecked(this, "escapestring(1)", [1], call4564);
    var string4567 = new GraceString(", \"");
    var opresult4569 = callmethodChecked(string4567, "++(1)", [1], call4565);
    var opresult4571 = callmethodChecked(opresult4569, "++(1)", [1], string4560);
    var opresult4573 = callmethodChecked(opresult4571, "++(1)", [1], call4558);
    var opresult4575 = callmethodChecked(opresult4573, "++(1)", [1], string4555);
    var opresult4577 = callmethodChecked(opresult4575, "++(1)", [1], call4553);
    var opresult4579 = callmethodChecked(opresult4577, "++(1)", [1], string4550);
    setLineNumber(982);    // compilenode string
    var string4581 = new GraceString("(var_prelude");
    var string4584 = new GraceString(" = ");
    var string4587 = new GraceString("var call");
    var opresult4589 = callmethodChecked(string4587, "++(1)", [1], var_auto__95__count);
    var opresult4591 = callmethodChecked(opresult4589, "++(1)", [1], string4584);
    var opresult4593 = callmethodChecked(opresult4591, "++(1)", [1], var_requestCall);
    var opresult4595 = callmethodChecked(opresult4593, "++(1)", [1], string4581);
    var opresult4597 = callmethodChecked(opresult4595, "++(1)", [1], opresult4579);
    // call case 4: self request
    onSelf = true;
    var call4598 = callmethodChecked(this, "out(1)", [1], opresult4597);
    return call4598;
  };
  func4545.paramCounts = [2];
  this.methods["compilePreludeRequest(2)"] = func4545;
  func4545.definitionLine = 980;
  func4545.definitionModule = "genjs";
  setLineNumber(985);    // compilenode method
  var func4599 = function(argcv) {    // method compileOtherRequest(_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_args = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(986);    // compilenode string
    var string4601 = new GraceString("// call case 6: other requests");
    // call case 4: self request
    onSelf = true;
    var call4602 = callmethodChecked(this, "out(1)", [1], string4601);
    setLineNumber(987);    // compilenode member
    // call case 6: other requests
    var call4605 = callmethodChecked(var_o, "receiver", []);
    // call case 4: self request
    onSelf = true;
    var call4606 = callmethodChecked(this, "compilenode(1)", [1], call4605);
    var var_target = call4606;
    var if4607 = GraceDone;
    setLineNumber(988);    // compilenode member
    // call case 6: other requests
    var call4609 = callmethodChecked(var_o, "isSelfRequest", []);
    if (Grace_isTrue(call4609)) {
      setLineNumber(989);    // compilenode string
      var string4611 = new GraceString("onSelf = true;");
      // call case 4: self request
      onSelf = true;
      var call4612 = callmethodChecked(this, "out(1)", [1], string4611);
      if4607 = call4612;
    }
    setLineNumber(992);    // compilenode string
    var string4614 = new GraceString(");");
    // call case 4: self request
    onSelf = true;
    var call4617 = callmethodChecked(this, "assembleArguments(1)", [1], var_args);
    var string4619 = new GraceString("]");
    // call case 4: self request
    onSelf = true;
    var call4622 = callmethodChecked(this, "partl(1)", [1], var_o);
    var string4624 = new GraceString("\", [");
    // call case 6: other requests
    var call4628 = callmethodChecked(var_o, "nameString", []);
    // call case 4: self request
    onSelf = true;
    var call4629 = callmethodChecked(this, "escapestring(1)", [1], call4628);
    var string4631 = new GraceString(", \"");
    var opresult4633 = callmethodChecked(string4631, "++(1)", [1], call4629);
    var opresult4635 = callmethodChecked(opresult4633, "++(1)", [1], string4624);
    var opresult4637 = callmethodChecked(opresult4635, "++(1)", [1], call4622);
    var opresult4639 = callmethodChecked(opresult4637, "++(1)", [1], string4619);
    var opresult4641 = callmethodChecked(opresult4639, "++(1)", [1], call4617);
    var opresult4643 = callmethodChecked(opresult4641, "++(1)", [1], string4614);
    setLineNumber(991);    // compilenode string
    var string4645 = new GraceString("");
    var string4648 = new GraceString("(");
    var string4651 = new GraceString(" = ");
    var string4654 = new GraceString("var call");
    var opresult4656 = callmethodChecked(string4654, "++(1)", [1], var_auto__95__count);
    var opresult4658 = callmethodChecked(opresult4656, "++(1)", [1], string4651);
    var opresult4660 = callmethodChecked(opresult4658, "++(1)", [1], var_requestCall);
    var opresult4662 = callmethodChecked(opresult4660, "++(1)", [1], string4648);
    var opresult4664 = callmethodChecked(opresult4662, "++(1)", [1], var_target);
    var opresult4666 = callmethodChecked(opresult4664, "++(1)", [1], string4645);
    var opresult4668 = callmethodChecked(opresult4666, "++(1)", [1], opresult4643);
    // call case 4: self request
    onSelf = true;
    var call4669 = callmethodChecked(this, "out(1)", [1], opresult4668);
    return call4669;
  };
  func4599.paramCounts = [2];
  this.methods["compileOtherRequest(2)"] = func4599;
  func4599.definitionLine = 985;
  func4599.definitionModule = "genjs";
  setLineNumber(994);    // compilenode method
  var func4670 = function(argcv) {    // method compilecall(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(995);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(996);    // compilenode identifier
    var opresult4673 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult4673;
    setLineNumber(997);    // compilenode array
    var array4674 = new PrimitiveGraceList([]);
    var var_args = array4674;
    setLineNumber(998);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call4676 = callmethodChecked(this, "compileArguments(2)", [2], var_o, var_args);
    setLineNumber(999);    // compilenode member
    // call case 6: other requests
    var call4678 = callmethodChecked(var_o, "receiver", []);
    var var_receiver = call4678;
    var if4679 = GraceDone;
    setLineNumber(1000);    // compilenode member
    // call case 6: other requests
    var call4681 = callmethodChecked(var_receiver, "isSuper", []);
    if (Grace_isTrue(call4681)) {
      setLineNumber(1001);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call4683 = callmethodChecked(this, "compileSuperRequest(2)", [2], var_o, var_args);
      if4679 = call4683;
    } else {
      var if4684 = GraceDone;
      setLineNumber(1002);    // compilenode member
      // call case 6: other requests
      var call4686 = callmethodChecked(var_receiver, "isOuter", []);
      if (Grace_isTrue(call4686)) {
        setLineNumber(1003);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call4688 = callmethodChecked(this, "compileOuterRequest(2)", [2], var_o, var_args);
        if4684 = call4688;
      } else {
        var if4689 = GraceDone;
        setLineNumber(1004);    // compilenode block
        var block4690 = new GraceBlock(this, 1004, 0);
        block4690.real = function() {
          var string4691 = new GraceString("outer");
          // call case 6: other requests
          var call4694 = callmethodChecked(var_o, "nameString", []);
          var opresult4696 = callmethodChecked(call4694, "==(1)", [1], string4691);
          return opresult4696;
        };
        // call case 6: other requests
        var call4699 = callmethodChecked(var_receiver, "isSelf", []);
        var opresult4701 = callmethodChecked(call4699, "&&(1)", [1], block4690);
        if (Grace_isTrue(opresult4701)) {
          setLineNumber(1005);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call4703 = callmethodChecked(this, "compileSelfOuterRequest(2)", [2], var_o, var_args);
          if4689 = call4703;
        } else {
          var if4704 = GraceDone;
          setLineNumber(1006);    // compilenode member
          // call case 6: other requests
          var call4706 = callmethodChecked(var_receiver, "isSelf", []);
          if (Grace_isTrue(call4706)) {
            setLineNumber(1007);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call4708 = callmethodChecked(this, "compileSelfRequest(2)", [2], var_o, var_args);
            if4704 = call4708;
          } else {
            var if4709 = GraceDone;
            setLineNumber(1008);    // compilenode member
            // call case 6: other requests
            var call4711 = callmethodChecked(var_receiver, "isPrelude", []);
            if (Grace_isTrue(call4711)) {
              setLineNumber(1009);    // compilenode identifier
              // call case 4: self request
              onSelf = true;
              var call4713 = callmethodChecked(this, "compilePreludeRequest(2)", [2], var_o, var_args);
              if4709 = call4713;
            } else {
              setLineNumber(1011);    // compilenode identifier
              // call case 4: self request
              onSelf = true;
              var call4715 = callmethodChecked(this, "compileOtherRequest(2)", [2], var_o, var_args);
              if4709 = call4715;
            }
            if4704 = if4709;
          }
          if4689 = if4704;
        }
        if4684 = if4689;
      }
      if4679 = if4684;
    }
    setLineNumber(1013);    // compilenode string
    var string4718 = new GraceString("call");
    var opresult4720 = callmethodChecked(string4718, "++(1)", [1], var_auto__95__count);
    // call case 6: other requests
    var call4721 = callmethodChecked(var_o, "register:=(1)", [1], opresult4720);
    setLineNumber(1014);    // compilenode identifier
    var opresult4724 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult4724;
    return GraceDone;
  };
  func4670.paramCounts = [1];
  this.methods["compilecall(1)"] = func4670;
  func4670.definitionLine = 994;
  func4670.definitionModule = "genjs";
  setLineNumber(1016);    // compilenode method
  var func4725 = function(argcv) {    // method compiledialect(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(1017);    // compilenode string
    var string4727 = new GraceString("");
    // call case 6: other requests
    var call4730 = callmethodChecked(var_o, "value", []);
    var string4732 = new GraceString("// Dialect import of ");
    var opresult4734 = callmethodChecked(string4732, "++(1)", [1], call4730);
    var opresult4736 = callmethodChecked(opresult4734, "++(1)", [1], string4727);
    // call case 4: self request
    onSelf = true;
    var call4737 = callmethodChecked(this, "out(1)", [1], opresult4736);
    setLineNumber(1018);    // compilenode member
    // call case 6: other requests
    var call4740 = callmethodChecked(var_o, "value", []);
    // call case 4: self request
    onSelf = true;
    var call4741 = callmethodChecked(this, "escapestring(1)", [1], call4740);
    var var_fn = call4741;
    setLineNumber(1019);    // compilenode string
    var string4743 = new GraceString(");");
    // call case 6: other requests
    var call4747 = callmethodChecked(var_o, "value", []);
    // call case 4: self request
    onSelf = true;
    var call4748 = callmethodChecked(this, "formatModname(1)", [1], call4747);
    var string4750 = new GraceString("\", ");
    var string4753 = new GraceString("var_prelude = do_import(\"");
    var opresult4755 = callmethodChecked(string4753, "++(1)", [1], var_fn);
    var opresult4757 = callmethodChecked(opresult4755, "++(1)", [1], string4750);
    var opresult4759 = callmethodChecked(opresult4757, "++(1)", [1], call4748);
    var opresult4761 = callmethodChecked(opresult4759, "++(1)", [1], string4743);
    // call case 4: self request
    onSelf = true;
    var call4762 = callmethodChecked(this, "out(1)", [1], opresult4761);
    setLineNumber(1020);    // compilenode string
    var string4764 = new GraceString("this.outer = var_prelude;");
    // call case 4: self request
    onSelf = true;
    var call4765 = callmethodChecked(this, "out(1)", [1], string4764);
    var if4766 = GraceDone;
    setLineNumber(1021);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call4769 = callmethodChecked(var_xmodule, "currentDialect", []);
    var call4770 = callmethodChecked(call4769, "hasAtStart", []);
    if (Grace_isTrue(call4770)) {
      setLineNumber(1022);    // compilenode string
      var string4772 = new GraceString("callmethod(var_prelude, \"atModuleStart\", [1], ");
      // call case 4: self request
      onSelf = true;
      var call4773 = callmethodChecked(this, "out(1)", [1], string4772);
      setLineNumber(1023);    // compilenode string
      var string4775 = new GraceString("\"));");
      // call case 4: self request
      onSelf = true;
      var call4778 = callmethodChecked(this, "escapestring(1)", [1], var_modname);
      var string4780 = new GraceString("  new GraceString(\"");
      var opresult4782 = callmethodChecked(string4780, "++(1)", [1], call4778);
      var opresult4784 = callmethodChecked(opresult4782, "++(1)", [1], string4775);
      // call case 4: self request
      onSelf = true;
      var call4785 = callmethodChecked(this, "out(1)", [1], opresult4784);
      if4766 = call4785;
    }
    setLineNumber(1025);    // compilenode string
    var string4787 = new GraceString("undefined");
    // call case 6: other requests
    var call4788 = callmethodChecked(var_o, "register:=(1)", [1], string4787);
    return call4788;
  };
  func4725.paramCounts = [1];
  this.methods["compiledialect(1)"] = func4725;
  func4725.definitionLine = 1016;
  func4725.definitionModule = "genjs";
  setLineNumber(1027);    // compilenode method
  var func4789 = function(argcv) {    // method compileimport(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(1028);    // compilenode string
    var string4791 = new GraceString("");
    // call case 6: other requests
    var call4794 = callmethodChecked(var_o, "nameString", []);
    var string4796 = new GraceString(" as ");
    // call case 6: other requests
    var call4799 = callmethodChecked(var_o, "path", []);
    var string4801 = new GraceString("// Import of ");
    var opresult4803 = callmethodChecked(string4801, "++(1)", [1], call4799);
    var opresult4805 = callmethodChecked(opresult4803, "++(1)", [1], string4796);
    var opresult4807 = callmethodChecked(opresult4805, "++(1)", [1], call4794);
    var opresult4809 = callmethodChecked(opresult4807, "++(1)", [1], string4791);
    // call case 4: self request
    onSelf = true;
    var call4810 = callmethodChecked(this, "out(1)", [1], opresult4809);
    setLineNumber(1029);    // compilenode member
    // call case 6: other requests
    var call4812 = callmethodChecked(var_o, "scope", []);
    var var_currentScope = call4812;
    setLineNumber(1030);    // compilenode member
    // call case 6: other requests
    var call4815 = callmethodChecked(var_o, "nameString", []);
    // call case 4: self request
    onSelf = true;
    var call4816 = callmethodChecked(this, "escapeident(1)", [1], call4815);
    var var_nm = call4816;
    setLineNumber(1031);    // compilenode member
    // call case 6: other requests
    var call4819 = callmethodChecked(var_o, "path", []);
    // call case 4: self request
    onSelf = true;
    var call4820 = callmethodChecked(this, "escapestring(1)", [1], call4819);
    var var_fn = call4820;
    setLineNumber(1032);    // compilenode string
    var string4822 = new GraceString(" == 'undefined')");
    // call case 6: other requests
    var call4826 = callmethodChecked(var_o, "path", []);
    // call case 4: self request
    onSelf = true;
    var call4827 = callmethodChecked(this, "formatModname(1)", [1], call4826);
    var string4829 = new GraceString("if (typeof ");
    var opresult4831 = callmethodChecked(string4829, "++(1)", [1], call4827);
    var opresult4833 = callmethodChecked(opresult4831, "++(1)", [1], string4822);
    // call case 4: self request
    onSelf = true;
    var call4834 = callmethodChecked(this, "out(1)", [1], opresult4833);
    setLineNumber(1033);    // compilenode string
    var string4836 = new GraceString("  throw new GraceExceptionPacket(EnvironmentExceptionObject, ");
    // call case 4: self request
    onSelf = true;
    var call4837 = callmethodChecked(this, "out(1)", [1], string4836);
    setLineNumber(1034);    // compilenode string
    var string4839 = new GraceString("'));");
    // call case 6: other requests
    var call4842 = callmethodChecked(var_o, "path", []);
    var string4844 = new GraceString("    new GraceString('could not find module ");
    var opresult4846 = callmethodChecked(string4844, "++(1)", [1], call4842);
    var opresult4848 = callmethodChecked(opresult4846, "++(1)", [1], string4839);
    // call case 4: self request
    onSelf = true;
    var call4849 = callmethodChecked(this, "out(1)", [1], opresult4848);
    setLineNumber(1035);    // compilenode string
    var string4851 = new GraceString(");");
    // call case 6: other requests
    var call4855 = callmethodChecked(var_o, "path", []);
    // call case 4: self request
    onSelf = true;
    var call4856 = callmethodChecked(this, "formatModname(1)", [1], call4855);
    var string4858 = new GraceString("\", ");
    var string4861 = new GraceString(" = do_import(\"");
    var opresult4863 = callmethodChecked(string4861, "++(1)", [1], var_fn);
    var opresult4865 = callmethodChecked(opresult4863, "++(1)", [1], string4858);
    var opresult4867 = callmethodChecked(opresult4865, "++(1)", [1], call4856);
    var opresult4869 = callmethodChecked(opresult4867, "++(1)", [1], string4851);
    // call case 4: self request
    onSelf = true;
    var call4872 = callmethodChecked(this, "varf(1)", [1], var_nm);
    var string4874 = new GraceString("var ");
    var opresult4876 = callmethodChecked(string4874, "++(1)", [1], call4872);
    var opresult4878 = callmethodChecked(opresult4876, "++(1)", [1], opresult4869);
    // call case 4: self request
    onSelf = true;
    var call4879 = callmethodChecked(this, "out(1)", [1], opresult4878);
    setLineNumber(1036);    // compilenode member
    // call case 6: other requests
    var call4881 = callmethodChecked(var_o, "value", []);
    var var_methodIdent = call4881;
    setLineNumber(1037);    // compilenode member
    // call case 6: other requests
    var call4886 = callmethodChecked(var_o, "nameString", []);
    // call case 6: other requests
    // call case 6: other requests
    var call4888 = callmethodChecked(var_ast, "signaturePart", []);
    var call4889 = callmethodChecked(call4888, "partName(1)scope(1)", [1, 1], call4886, var_currentScope);
    var array4883 = new PrimitiveGraceList([call4889]);
    setLineNumber(1038);    // compilenode identifier
    var array4890 = new PrimitiveGraceList([var_methodIdent]);
    // call case 6: other requests
    var call4892 = callmethodChecked(var_o, "dtype", []);
    // call case 6: other requests
    setLineNumber(1037);    // compilenode member
    // call case 6: other requests
    var call4894 = callmethodChecked(var_ast, "methodNode", []);
    var call4895 = callmethodChecked(call4894, "new(3)scope(1)", [3, 1], array4883, array4890, call4892, var_currentScope);
    var var_accessor = call4895;
    setLineNumber(1039);    // compilenode member
    // call case 6: other requests
    var call4898 = callmethodChecked(var_o, "line", []);
    // call case 6: other requests
    var call4899 = callmethodChecked(var_accessor, "line:=(1)", [1], call4898);
    setLineNumber(1040);    // compilenode member
    // call case 6: other requests
    var call4902 = callmethodChecked(var_o, "linePos", []);
    // call case 6: other requests
    var call4903 = callmethodChecked(var_accessor, "linePos:=(1)", [1], call4902);
    setLineNumber(1041);    // compilenode member
    // call case 6: other requests
    var call4906 = callmethodChecked(var_o, "annotations", []);
    // call case 6: other requests
    // call case 6: other requests
    var call4908 = callmethodChecked(var_accessor, "annotations", []);
    var call4909 = callmethodChecked(call4908, "addAll(1)", [1], call4906);
    setLineNumber(1042);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call4911 = callmethodChecked(this, "compilenode(1)", [1], var_accessor);
    setLineNumber(1043);    // compilenode string
    var string4913 = new GraceString(".debug = \"import\";");
    // call case 6: other requests
    var call4916 = callmethodChecked(var_accessor, "register", []);
    var string4918 = new GraceString("");
    var opresult4920 = callmethodChecked(string4918, "++(1)", [1], call4916);
    var opresult4922 = callmethodChecked(opresult4920, "++(1)", [1], string4913);
    // call case 4: self request
    onSelf = true;
    var call4923 = callmethodChecked(this, "out(1)", [1], opresult4922);
    var if4924 = GraceDone;
    setLineNumber(1044);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call4927 = callmethodChecked(var_o, "isReadable", []);
    var call4928 = callmethodChecked(call4927, "not", []);
    if (Grace_isTrue(call4928)) {
      setLineNumber(1045);    // compilenode string
      var string4930 = new GraceString(".confidential = true;");
      // call case 6: other requests
      var call4933 = callmethodChecked(var_accessor, "register", []);
      var string4935 = new GraceString("");
      var opresult4937 = callmethodChecked(string4935, "++(1)", [1], call4933);
      var opresult4939 = callmethodChecked(opresult4937, "++(1)", [1], string4930);
      // call case 4: self request
      onSelf = true;
      var call4940 = callmethodChecked(this, "out(1)", [1], opresult4939);
      if4924 = call4940;
    }
    var if4941 = GraceDone;
    setLineNumber(1047);    // compilenode identifier
    if (Grace_isTrue(var_emitTypeChecks)) {
      var if4942 = GraceDone;
      setLineNumber(1048);    // compilenode member
      // call case 6: other requests
      var call4945 = callmethodChecked(var_o, "dtype", []);
      var opresult4947 = callmethodChecked(call4945, "\u2260(1)", [1], GraceFalse);
      if (Grace_isTrue(opresult4947)) {
        var if4948 = GraceDone;
        setLineNumber(1049);    // compilenode string
        var string4949 = new GraceString("Unknown");
        // call case 6: other requests
        // call case 6: other requests
        var call4953 = callmethodChecked(var_o, "dtype", []);
        var call4954 = callmethodChecked(call4953, "value", []);
        var opresult4956 = callmethodChecked(call4954, "\u2260(1)", [1], string4949);
        if (Grace_isTrue(opresult4956)) {
          setLineNumber(1050);    // compilenode string
          var string4958 = new GraceString(", \"match(1)\",");
          // call case 6: other requests
          var call4962 = callmethodChecked(var_o, "dtype", []);
          // call case 4: self request
          onSelf = true;
          var call4963 = callmethodChecked(this, "compilenode(1)", [1], call4962);
          var string4965 = new GraceString("if (!Grace_isTrue(callmethod(");
          var opresult4967 = callmethodChecked(string4965, "++(1)", [1], call4963);
          var opresult4969 = callmethodChecked(opresult4967, "++(1)", [1], string4958);
          // call case 4: self request
          onSelf = true;
          var call4970 = callmethodChecked(this, "out(1)", [1], opresult4969);
          setLineNumber(1051);    // compilenode string
          var string4972 = new GraceString(")))");
          // call case 4: self request
          onSelf = true;
          var call4975 = callmethodChecked(this, "varf(1)", [1], var_nm);
          var string4977 = new GraceString("  [1], ");
          var opresult4979 = callmethodChecked(string4977, "++(1)", [1], call4975);
          var opresult4981 = callmethodChecked(opresult4979, "++(1)", [1], string4972);
          // call case 4: self request
          onSelf = true;
          var call4982 = callmethodChecked(this, "out(1)", [1], opresult4981);
          setLineNumber(1052);    // compilenode string
          var string4984 = new GraceString("    throw new GraceExceptionPacket(TypeErrorObject,");
          // call case 4: self request
          onSelf = true;
          var call4985 = callmethodChecked(this, "out(1)", [1], string4984);
          setLineNumber(1053);    // compilenode string
          var string4987 = new GraceString("\"))");
          // call case 6: other requests
          // call case 6: other requests
          var call4991 = callmethodChecked(var_o, "dtype", []);
          var call4992 = callmethodChecked(call4991, "toGrace(1)", [1], new GraceNum(0));
          var string4994 = new GraceString(" is not of type ");
          // call case 6: other requests
          var call4997 = callmethodChecked(var_o, "nameString", []);
          var string4999 = new GraceString("          new GraceString(\"module ");
          var opresult5001 = callmethodChecked(string4999, "++(1)", [1], call4997);
          var opresult5003 = callmethodChecked(opresult5001, "++(1)", [1], string4994);
          var opresult5005 = callmethodChecked(opresult5003, "++(1)", [1], call4992);
          var opresult5007 = callmethodChecked(opresult5005, "++(1)", [1], string4987);
          // call case 4: self request
          onSelf = true;
          var call5008 = callmethodChecked(this, "out(1)", [1], opresult5007);
          if4948 = call5008;
        }
        if4942 = if4948;
      }
      if4941 = if4942;
    }
    setLineNumber(1057);    // compilenode string
    var string5010 = new GraceString("\");");
    var string5013 = new GraceString("setModuleName(\"");
    var opresult5015 = callmethodChecked(string5013, "++(1)", [1], var_modname);
    var opresult5017 = callmethodChecked(opresult5015, "++(1)", [1], string5010);
    // call case 4: self request
    onSelf = true;
    var call5018 = callmethodChecked(this, "out(1)", [1], opresult5017);
    setLineNumber(1058);    // compilenode string
    var string5020 = new GraceString("undefined");
    // call case 6: other requests
    var call5021 = callmethodChecked(var_o, "register:=(1)", [1], string5020);
    return call5021;
  };
  func4789.paramCounts = [1];
  this.methods["compileimport(1)"] = func4789;
  func4789.definitionLine = 1027;
  func4789.definitionModule = "genjs";
  setLineNumber(1060);    // compilenode method
  var func5022 = function(argcv) {    // method compilereturn(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(1061);    // compilenode member
    // call case 6: other requests
    var call5025 = callmethodChecked(var_o, "value", []);
    // call case 4: self request
    onSelf = true;
    var call5026 = callmethodChecked(this, "compilenode(1)", [1], call5025);
    var var_reg = call5026;
    var if5027 = GraceDone;
    setLineNumber(1062);    // compilenode identifier
    if (Grace_isTrue(var_inBlock)) {
      setLineNumber(1063);    // compilenode string
      var string5029 = new GraceString(", returnTarget);");
      var string5032 = new GraceString("throw new ReturnException(");
      var opresult5034 = callmethodChecked(string5032, "++(1)", [1], var_reg);
      var opresult5036 = callmethodChecked(opresult5034, "++(1)", [1], string5029);
      // call case 4: self request
      onSelf = true;
      var call5037 = callmethodChecked(this, "out(1)", [1], opresult5036);
      if5027 = call5037;
    } else {
      setLineNumber(1065);    // compilenode string
      var string5039 = new GraceString(";");
      var string5042 = new GraceString("return ");
      var opresult5044 = callmethodChecked(string5042, "++(1)", [1], var_reg);
      var opresult5046 = callmethodChecked(opresult5044, "++(1)", [1], string5039);
      // call case 4: self request
      onSelf = true;
      var call5047 = callmethodChecked(this, "out(1)", [1], opresult5046);
      if5027 = call5047;
    }
    setLineNumber(1067);    // compilenode string
    var string5049 = new GraceString("undefined");
    // call case 6: other requests
    var call5050 = callmethodChecked(var_o, "register:=(1)", [1], string5049);
    return call5050;
  };
  func5022.paramCounts = [1];
  this.methods["compilereturn(1)"] = func5022;
  func5022.definitionLine = 1060;
  func5022.definitionModule = "genjs";
  setLineNumber(1069);    // compilenode method
  var func5051 = function(argcv) {    // method compilePrint(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(1070);    // compilenode array
    var array5052 = new PrimitiveGraceList([]);
    var var_args = array5052;
    setLineNumber(1071);    // compilenode member
    // call case 6: other requests
    var call5055 = callmethodChecked(var_o, "with", []);
    var block5056 = new GraceBlock(this, 1071, 1);
    setLineNumber(1);    // compilenode identifier
    block5056.real = function(var_part) {
      setLineNumber(1072);    // compilenode member
      // call case 6: other requests
      var call5059 = callmethodChecked(var_part, "args", []);
      var block5060 = new GraceBlock(this, 1072, 1);
      setLineNumber(1);    // compilenode identifier
      block5060.real = function(var_prm) {
        setLineNumber(1073);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call5062 = callmethodChecked(this, "compilenode(1)", [1], var_prm);
        var var_r = call5062;
        setLineNumber(1074);    // compilenode identifier
        // call case 6: other requests
        var call5064 = callmethodChecked(var_args, "push(1)", [1], var_r);
        return call5064;
      };
      // call case 5: prelude request
      var call5065 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call5059, block5060);
      return call5065;
    };
    // call case 5: prelude request
    var call5066 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call5055, block5056);
    var if5067 = GraceDone;
    setLineNumber(1077);    // compilenode member
    // call case 6: other requests
    var call5070 = callmethodChecked(var_args, "size", []);
    var opresult5072 = callmethodChecked(call5070, "\u2260(1)", [1], new GraceNum(1));
    if (Grace_isTrue(opresult5072)) {
      setLineNumber(1078);    // compilenode string
      var string5074 = new GraceString("method print takes a single argument");
      setLineNumber(1079);    // compilenode member
      // call case 6: other requests
      var call5076 = callmethodChecked(var_o, "line", []);
      // call case 6: other requests
      var call5078 = callmethodChecked(var_o, "linePos", []);
      // call case 6: other requests
      var call5081 = callmethodChecked(var_o, "linePos", []);
      var opresult5083 = callmethodChecked(call5081, "+(1)", [1], new GraceNum(4));
      // call case 6: other requests
      setLineNumber(1078);    // compilenode identifier
      var call5084 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], string5074, call5076, call5078, opresult5083);
      if5067 = call5084;
    } else {
      setLineNumber(1081);    // compilenode string
      var string5086 = new GraceString(");");
      // call case 6: other requests
      var call5089 = callmethodChecked(var_args, "first", []);
      var string5091 = new GraceString(" = Grace_print(");
      var string5094 = new GraceString("var call");
      var opresult5096 = callmethodChecked(string5094, "++(1)", [1], var_auto__95__count);
      var opresult5098 = callmethodChecked(opresult5096, "++(1)", [1], string5091);
      var opresult5100 = callmethodChecked(opresult5098, "++(1)", [1], call5089);
      var opresult5102 = callmethodChecked(opresult5100, "++(1)", [1], string5086);
      // call case 4: self request
      onSelf = true;
      var call5103 = callmethodChecked(this, "out(1)", [1], opresult5102);
      if5067 = call5103;
    }
    setLineNumber(1083);    // compilenode string
    var string5106 = new GraceString("call");
    var opresult5108 = callmethodChecked(string5106, "++(1)", [1], var_auto__95__count);
    // call case 6: other requests
    var call5109 = callmethodChecked(var_o, "register:=(1)", [1], opresult5108);
    setLineNumber(1084);    // compilenode identifier
    var opresult5112 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult5112;
    return GraceDone;
  };
  func5051.paramCounts = [1];
  this.methods["compilePrint(1)"] = func5051;
  func5051.definitionLine = 1069;
  func5051.definitionModule = "genjs";
  setLineNumber(1086);    // compilenode method
  var func5113 = function(argcv) {    // method compileNativeCode(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    var if5114 = GraceDone;
    setLineNumber(1087);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call5118 = callmethodChecked(var_o, "with", []);
    var call5119 = callmethodChecked(call5118, "size", []);
    var opresult5121 = callmethodChecked(call5119, "\u2260(1)", [1], new GraceNum(2));
    if (Grace_isTrue(opresult5121)) {
      setLineNumber(1088);    // compilenode string
      var string5123 = new GraceString("method native()code takes two arguments");
      setLineNumber(1089);    // compilenode member
      // call case 6: other requests
      var call5125 = callmethodChecked(var_o, "line", []);
      // call case 6: other requests
      var call5127 = callmethodChecked(var_o, "linePos", []);
      // call case 6: other requests
      var call5130 = callmethodChecked(var_o, "linePos", []);
      var opresult5132 = callmethodChecked(call5130, "+(1)", [1], new GraceNum(5));
      // call case 6: other requests
      setLineNumber(1088);    // compilenode identifier
      var call5133 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], string5123, call5125, call5127, opresult5132);
      if5114 = call5133;
    }
    setLineNumber(1091);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    // call case 6: other requests
    // call case 6: other requests
    var call5138 = callmethodChecked(var_o, "with", []);
    var call5139 = callmethodChecked(call5138, "first", []);
    var call5140 = callmethodChecked(call5139, "args", []);
    var call5141 = callmethodChecked(call5140, "first", []);
    var var_param1 = call5141;
    var if5142 = GraceDone;
    setLineNumber(1092);    // compilenode string
    var string5143 = new GraceString("string");
    // call case 6: other requests
    var call5146 = callmethodChecked(var_param1, "kind", []);
    var opresult5148 = callmethodChecked(call5146, "\u2260(1)", [1], string5143);
    if (Grace_isTrue(opresult5148)) {
      setLineNumber(1093);    // compilenode string
      var string5150 = new GraceString("the first argument to native()code must be a string literal");
      setLineNumber(1094);    // compilenode member
      // call case 6: other requests
      var call5152 = callmethodChecked(var_param1, "line", []);
      // call case 6: other requests
      var call5154 = callmethodChecked(var_param1, "linePos", []);
      // call case 6: other requests
      var call5156 = callmethodChecked(var_param1, "linePos", []);
      // call case 6: other requests
      setLineNumber(1093);    // compilenode identifier
      var call5157 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], string5150, call5152, call5154, call5156);
      if5142 = call5157;
    }
    var if5158 = GraceDone;
    setLineNumber(1096);    // compilenode string
    var string5159 = new GraceString("js");
    // call case 6: other requests
    var call5162 = callmethodChecked(var_param1, "value", []);
    var opresult5164 = callmethodChecked(call5162, "\u2260(1)", [1], string5159);
    if (Grace_isTrue(opresult5164)) {
      setLineNumber(1097);    // compilenode string
      var string5166 = new GraceString("GraceDone");
      // call case 6: other requests
      var call5167 = callmethodChecked(var_o, "register:=(1)", [1], string5166);
      setLineNumber(1099);    // compilenode identifier
      return var_done;
    }
    setLineNumber(1100);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    // call case 6: other requests
    // call case 6: other requests
    var call5172 = callmethodChecked(var_o, "with", []);
    var call5173 = callmethodChecked(call5172, "second", []);
    var call5174 = callmethodChecked(call5173, "args", []);
    var call5175 = callmethodChecked(call5174, "first", []);
    var var_param2 = call5175;
    var if5176 = GraceDone;
    setLineNumber(1101);    // compilenode string
    var string5177 = new GraceString("string");
    // call case 6: other requests
    var call5180 = callmethodChecked(var_param2, "kind", []);
    var opresult5182 = callmethodChecked(call5180, "\u2260(1)", [1], string5177);
    if (Grace_isTrue(opresult5182)) {
      setLineNumber(1102);    // compilenode string
      var string5184 = new GraceString("the second argument to native()code must be a string literal");
      setLineNumber(1103);    // compilenode member
      // call case 6: other requests
      var call5186 = callmethodChecked(var_param2, "line", []);
      // call case 6: other requests
      setLineNumber(1102);    // compilenode identifier
      var call5187 = callmethodChecked(var_errormessages, "syntaxError(1)atLine(1)", [1, 1], string5184, call5186);
      if5176 = call5187;
    }
    setLineNumber(1105);    // compilenode member
    // call case 6: other requests
    var call5189 = callmethodChecked(var_param2, "value", []);
    var var_codeString = call5189;
    setLineNumber(1106);    // compilenode string
    var string5191 = new GraceString("");
    // call case 6: other requests
    var call5194 = callmethodChecked(var_o, "line", []);
    var string5196 = new GraceString("   // start native code from line ");
    var opresult5198 = callmethodChecked(string5196, "++(1)", [1], call5194);
    var opresult5200 = callmethodChecked(opresult5198, "++(1)", [1], string5191);
    // call case 4: self request
    onSelf = true;
    var call5201 = callmethodChecked(this, "out(1)", [1], opresult5200);
    setLineNumber(1107);    // compilenode string
    var string5203 = new GraceString("var result = GraceDone;");
    // call case 4: self request
    onSelf = true;
    var call5204 = callmethodChecked(this, "out(1)", [1], string5203);
    setLineNumber(1108);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call5206 = callmethodChecked(this, "out(1)", [1], var_codeString);
    setLineNumber(1109);    // compilenode string
    var string5208 = new GraceString("nat");
    var opresult5210 = callmethodChecked(string5208, "++(1)", [1], var_auto__95__count);
    var var_reg = opresult5210;
    setLineNumber(1110);    // compilenode identifier
    var opresult5213 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult5213;
    setLineNumber(1111);    // compilenode string
    var string5215 = new GraceString(" = result;");
    var string5218 = new GraceString("var ");
    var opresult5220 = callmethodChecked(string5218, "++(1)", [1], var_reg);
    var opresult5222 = callmethodChecked(opresult5220, "++(1)", [1], string5215);
    // call case 4: self request
    onSelf = true;
    var call5223 = callmethodChecked(this, "out(1)", [1], opresult5222);
    setLineNumber(1112);    // compilenode identifier
    // call case 6: other requests
    var call5225 = callmethodChecked(var_o, "register:=(1)", [1], var_reg);
    setLineNumber(1113);    // compilenode string
    var string5227 = new GraceString("   // end native code insertion");
    // call case 4: self request
    onSelf = true;
    var call5228 = callmethodChecked(this, "out(1)", [1], string5227);
    return call5228;
  };
  func5113.paramCounts = [1];
  this.methods["compileNativeCode(1)"] = func5113;
  func5113.definitionLine = 1086;
  func5113.definitionModule = "genjs";
  setLineNumber(1116);    // compilenode method
  var func5229 = function(argcv) {    // method compilenode(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(1117);    // compilenode identifier
    var opresult5232 = callmethodChecked(var_compilationDepth, "+(1)", [1], new GraceNum(1));
    var_compilationDepth = opresult5232;
    setLineNumber(1118);    // compilenode member
    // call case 6: other requests
    var call5235 = callmethodChecked(var_o, "line", []);
    var string5236 = new GraceString("");
    // call case 6: other requests
    var call5239 = callmethodChecked(var_o, "kind", []);
    var string5241 = new GraceString("compilenode ");
    var opresult5243 = callmethodChecked(string5241, "++(1)", [1], call5239);
    var opresult5245 = callmethodChecked(opresult5243, "++(1)", [1], string5236);
    // call case 4: self request
    onSelf = true;
    var call5246 = callmethodChecked(this, "noteLineNumber(1)comment(1)", [1, 1], call5235, opresult5245);
    setLineNumber(1119);    // compilenode member
    // call case 6: other requests
    var call5248 = callmethodChecked(var_o, "kind", []);
    var var_oKind = call5248;
    var if5249 = GraceDone;
    setLineNumber(1120);    // compilenode string
    var string5250 = new GraceString("num");
    var opresult5253 = callmethodChecked(var_oKind, "==(1)", [1], string5250);
    if (Grace_isTrue(opresult5253)) {
      setLineNumber(1121);    // compilenode string
      var string5255 = new GraceString(")");
      // call case 6: other requests
      var call5258 = callmethodChecked(var_o, "value", []);
      var string5260 = new GraceString("new GraceNum(");
      var opresult5262 = callmethodChecked(string5260, "++(1)", [1], call5258);
      var opresult5264 = callmethodChecked(opresult5262, "++(1)", [1], string5255);
      // call case 6: other requests
      var call5265 = callmethodChecked(var_o, "register:=(1)", [1], opresult5264);
      if5249 = call5265;
    }
    var if5266 = GraceDone;
    setLineNumber(1123);    // compilenode string
    var string5267 = new GraceString("string");
    var opresult5270 = callmethodChecked(var_oKind, "==(1)", [1], string5267);
    if (Grace_isTrue(opresult5270)) {
      setLineNumber(1125);    // compilenode member
      // call case 6: other requests
      var call5273 = callmethodChecked(var_o, "value", []);
      // call case 4: self request
      onSelf = true;
      var call5274 = callmethodChecked(this, "escapestring(1)", [1], call5273);
      var var_os = call5274;
      setLineNumber(1127);    // compilenode string
      var string5276 = new GraceString("\");");
      setLineNumber(1126);    // compilenode string
      var string5279 = new GraceString(" = new GraceString(\"");
      var string5282 = new GraceString("var string");
      var opresult5284 = callmethodChecked(string5282, "++(1)", [1], var_auto__95__count);
      var opresult5286 = callmethodChecked(opresult5284, "++(1)", [1], string5279);
      var opresult5288 = callmethodChecked(opresult5286, "++(1)", [1], var_os);
      var opresult5290 = callmethodChecked(opresult5288, "++(1)", [1], string5276);
      // call case 4: self request
      onSelf = true;
      var call5291 = callmethodChecked(this, "out(1)", [1], opresult5290);
      setLineNumber(1128);    // compilenode string
      var string5294 = new GraceString("string");
      var opresult5296 = callmethodChecked(string5294, "++(1)", [1], var_auto__95__count);
      // call case 6: other requests
      var call5297 = callmethodChecked(var_o, "register:=(1)", [1], opresult5296);
      setLineNumber(1129);    // compilenode identifier
      var opresult5300 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
      var_auto__95__count = opresult5300;
      if5266 = GraceDone;
    } else {
      var if5301 = GraceDone;
      setLineNumber(1130);    // compilenode string
      var string5302 = new GraceString("dialect");
      var opresult5305 = callmethodChecked(var_oKind, "==(1)", [1], string5302);
      if (Grace_isTrue(opresult5305)) {
        setLineNumber(1131);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call5307 = callmethodChecked(this, "compiledialect(1)", [1], var_o);
        if5301 = call5307;
      } else {
        var if5308 = GraceDone;
        setLineNumber(1132);    // compilenode string
        var string5309 = new GraceString("import");
        var opresult5312 = callmethodChecked(var_oKind, "==(1)", [1], string5309);
        if (Grace_isTrue(opresult5312)) {
          setLineNumber(1133);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call5314 = callmethodChecked(this, "compileimport(1)", [1], var_o);
          if5308 = call5314;
        } else {
          var if5315 = GraceDone;
          setLineNumber(1134);    // compilenode string
          var string5316 = new GraceString("return");
          var opresult5319 = callmethodChecked(var_oKind, "==(1)", [1], string5316);
          if (Grace_isTrue(opresult5319)) {
            setLineNumber(1135);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call5321 = callmethodChecked(this, "compilereturn(1)", [1], var_o);
            if5315 = call5321;
          } else {
            var if5322 = GraceDone;
            setLineNumber(1136);    // compilenode string
            var string5323 = new GraceString("generic");
            var opresult5326 = callmethodChecked(var_oKind, "==(1)", [1], string5323);
            if (Grace_isTrue(opresult5326)) {
              setLineNumber(1137);    // compilenode member
              // call case 6: other requests
              var call5330 = callmethodChecked(var_o, "value", []);
              // call case 4: self request
              onSelf = true;
              var call5331 = callmethodChecked(this, "compilenode(1)", [1], call5330);
              // call case 6: other requests
              var call5332 = callmethodChecked(var_o, "register:=(1)", [1], call5331);
              if5322 = call5332;
            } else {
              var if5333 = GraceDone;
              setLineNumber(1138);    // compilenode string
              var string5334 = new GraceString("identifier");
              var opresult5337 = callmethodChecked(var_oKind, "==(1)", [1], string5334);
              if (Grace_isTrue(opresult5337)) {
                setLineNumber(1139);    // compilenode identifier
                // call case 4: self request
                onSelf = true;
                var call5339 = callmethodChecked(this, "compileidentifier(1)", [1], var_o);
                if5333 = call5339;
              } else {
                var if5340 = GraceDone;
                setLineNumber(1140);    // compilenode string
                var string5341 = new GraceString("defdec");
                var opresult5344 = callmethodChecked(var_oKind, "==(1)", [1], string5341);
                if (Grace_isTrue(opresult5344)) {
                  setLineNumber(1141);    // compilenode identifier
                  // call case 4: self request
                  onSelf = true;
                  var call5346 = callmethodChecked(this, "compiledefdec(1)", [1], var_o);
                  if5340 = call5346;
                } else {
                  var if5347 = GraceDone;
                  setLineNumber(1142);    // compilenode string
                  var string5348 = new GraceString("vardec");
                  var opresult5351 = callmethodChecked(var_oKind, "==(1)", [1], string5348);
                  if (Grace_isTrue(opresult5351)) {
                    setLineNumber(1143);    // compilenode identifier
                    // call case 4: self request
                    onSelf = true;
                    var call5353 = callmethodChecked(this, "compilevardec(1)", [1], var_o);
                    if5347 = call5353;
                  } else {
                    var if5354 = GraceDone;
                    setLineNumber(1144);    // compilenode string
                    var string5355 = new GraceString("block");
                    var opresult5358 = callmethodChecked(var_oKind, "==(1)", [1], string5355);
                    if (Grace_isTrue(opresult5358)) {
                      setLineNumber(1145);    // compilenode identifier
                      // call case 4: self request
                      onSelf = true;
                      var call5360 = callmethodChecked(this, "compileblock(1)", [1], var_o);
                      if5354 = call5360;
                    } else {
                      var if5361 = GraceDone;
                      setLineNumber(1146);    // compilenode string
                      var string5362 = new GraceString("method");
                      var opresult5365 = callmethodChecked(var_oKind, "==(1)", [1], string5362);
                      if (Grace_isTrue(opresult5365)) {
                        setLineNumber(1147);    // compilenode string
                        var string5367 = new GraceString("this");
                        // call case 4: self request
                        onSelf = true;
                        var call5368 = callmethodChecked(this, "compilemethod(2)", [2], var_o, string5367);
                        if5361 = call5368;
                      } else {
                        var if5369 = GraceDone;
                        setLineNumber(1148);    // compilenode string
                        var string5370 = new GraceString("array");
                        var opresult5373 = callmethodChecked(var_oKind, "==(1)", [1], string5370);
                        if (Grace_isTrue(opresult5373)) {
                          setLineNumber(1149);    // compilenode identifier
                          // call case 4: self request
                          onSelf = true;
                          var call5375 = callmethodChecked(this, "compilearray(1)", [1], var_o);
                          if5369 = call5375;
                        } else {
                          var if5376 = GraceDone;
                          setLineNumber(1150);    // compilenode string
                          var string5377 = new GraceString("bind");
                          var opresult5380 = callmethodChecked(var_oKind, "==(1)", [1], string5377);
                          if (Grace_isTrue(opresult5380)) {
                            setLineNumber(1151);    // compilenode identifier
                            // call case 4: self request
                            onSelf = true;
                            var call5382 = callmethodChecked(this, "compilebind(1)", [1], var_o);
                            if5376 = call5382;
                          } else {
                            var if5383 = GraceDone;
                            setLineNumber(1152);    // compilenode string
                            var string5384 = new GraceString("if");
                            var opresult5387 = callmethodChecked(var_oKind, "==(1)", [1], string5384);
                            if (Grace_isTrue(opresult5387)) {
                              setLineNumber(1153);    // compilenode identifier
                              // call case 4: self request
                              onSelf = true;
                              var call5389 = callmethodChecked(this, "compileif(1)", [1], var_o);
                              if5383 = call5389;
                            } else {
                              var if5390 = GraceDone;
                              setLineNumber(1154);    // compilenode string
                              var string5391 = new GraceString("trycatch");
                              var opresult5394 = callmethodChecked(var_oKind, "==(1)", [1], string5391);
                              if (Grace_isTrue(opresult5394)) {
                                setLineNumber(1155);    // compilenode identifier
                                // call case 4: self request
                                onSelf = true;
                                var call5396 = callmethodChecked(this, "compiletrycatch(1)", [1], var_o);
                                if5390 = call5396;
                              } else {
                                var if5397 = GraceDone;
                                setLineNumber(1156);    // compilenode string
                                var string5398 = new GraceString("matchcase");
                                var opresult5401 = callmethodChecked(var_oKind, "==(1)", [1], string5398);
                                if (Grace_isTrue(opresult5401)) {
                                  setLineNumber(1157);    // compilenode identifier
                                  // call case 4: self request
                                  onSelf = true;
                                  var call5403 = callmethodChecked(this, "compilematchcase(1)", [1], var_o);
                                  if5397 = call5403;
                                } else {
                                  var if5404 = GraceDone;
                                  setLineNumber(1158);    // compilenode string
                                  var string5405 = new GraceString("object");
                                  var opresult5408 = callmethodChecked(var_oKind, "==(1)", [1], string5405);
                                  if (Grace_isTrue(opresult5408)) {
                                    setLineNumber(1159);    // compilenode string
                                    var string5410 = new GraceString("this");
                                    // call case 4: self request
                                    onSelf = true;
                                    var call5411 = callmethodChecked(this, "compileobject(3)", [3], var_o, string5410, GraceFalse);
                                    if5404 = call5411;
                                  } else {
                                    var if5412 = GraceDone;
                                    setLineNumber(1160);    // compilenode string
                                    var string5413 = new GraceString("typedec");
                                    var opresult5416 = callmethodChecked(var_oKind, "==(1)", [1], string5413);
                                    if (Grace_isTrue(opresult5416)) {
                                      setLineNumber(1161);    // compilenode identifier
                                      // call case 4: self request
                                      onSelf = true;
                                      var call5418 = callmethodChecked(this, "compiletypedec(1)", [1], var_o);
                                      if5412 = call5418;
                                    } else {
                                      var if5419 = GraceDone;
                                      setLineNumber(1162);    // compilenode string
                                      var string5420 = new GraceString("typeliteral");
                                      var opresult5423 = callmethodChecked(var_oKind, "==(1)", [1], string5420);
                                      if (Grace_isTrue(opresult5423)) {
                                        setLineNumber(1163);    // compilenode identifier
                                        // call case 4: self request
                                        onSelf = true;
                                        var call5425 = callmethodChecked(this, "compiletypeliteral(1)", [1], var_o);
                                        if5419 = call5425;
                                      } else {
                                        var if5426 = GraceDone;
                                        setLineNumber(1164);    // compilenode string
                                        var string5427 = new GraceString("member");
                                        var opresult5430 = callmethodChecked(var_oKind, "==(1)", [1], string5427);
                                        if (Grace_isTrue(opresult5430)) {
                                          setLineNumber(1165);    // compilenode identifier
                                          // call case 4: self request
                                          onSelf = true;
                                          var call5432 = callmethodChecked(this, "compilemember(1)", [1], var_o);
                                          if5426 = call5432;
                                        } else {
                                          var if5433 = GraceDone;
                                          setLineNumber(1166);    // compilenode string
                                          var string5434 = new GraceString("call");
                                          var opresult5437 = callmethodChecked(var_oKind, "==(1)", [1], string5434);
                                          if (Grace_isTrue(opresult5437)) {
                                            var if5438 = GraceDone;
                                            setLineNumber(1167);    // compilenode member
                                            // call case 6: other requests
                                            // call case 6: other requests
                                            var call5441 = callmethodChecked(var_o, "receiver", []);
                                            var call5442 = callmethodChecked(call5441, "isPrelude", []);
                                            if (Grace_isTrue(call5442)) {
                                              var if5443 = GraceDone;
                                              setLineNumber(1168);    // compilenode string
                                              var string5444 = new GraceString("print(1)");
                                              // call case 6: other requests
                                              var call5447 = callmethodChecked(var_o, "nameString", []);
                                              var opresult5449 = callmethodChecked(call5447, "==(1)", [1], string5444);
                                              if (Grace_isTrue(opresult5449)) {
                                                setLineNumber(1169);    // compilenode identifier
                                                // call case 4: self request
                                                onSelf = true;
                                                var call5451 = callmethodChecked(this, "compilePrint(1)", [1], var_o);
                                                if5443 = call5451;
                                              } else {
                                                var if5452 = GraceDone;
                                                setLineNumber(1170);    // compilenode string
                                                var string5453 = new GraceString("native(1)code(1)");
                                                // call case 6: other requests
                                                var call5456 = callmethodChecked(var_o, "nameString", []);
                                                var opresult5458 = callmethodChecked(call5456, "==(1)", [1], string5453);
                                                if (Grace_isTrue(opresult5458)) {
                                                  setLineNumber(1171);    // compilenode identifier
                                                  // call case 4: self request
                                                  onSelf = true;
                                                  var call5460 = callmethodChecked(this, "compileNativeCode(1)", [1], var_o);
                                                  if5452 = call5460;
                                                } else {
                                                  setLineNumber(1173);    // compilenode identifier
                                                  // call case 4: self request
                                                  onSelf = true;
                                                  var call5462 = callmethodChecked(this, "compilecall(1)", [1], var_o);
                                                  if5452 = call5462;
                                                }
                                                if5443 = if5452;
                                              }
                                              if5438 = if5443;
                                            } else {
                                              setLineNumber(1176);    // compilenode identifier
                                              // call case 4: self request
                                              onSelf = true;
                                              var call5464 = callmethodChecked(this, "compilecall(1)", [1], var_o);
                                              if5438 = call5464;
                                            }
                                            if5433 = if5438;
                                          } else {
                                            var if5465 = GraceDone;
                                            setLineNumber(1178);    // compilenode string
                                            var string5466 = new GraceString("op");
                                            var opresult5469 = callmethodChecked(var_oKind, "==(1)", [1], string5466);
                                            if (Grace_isTrue(opresult5469)) {
                                              setLineNumber(1179);    // compilenode identifier
                                              // call case 4: self request
                                              onSelf = true;
                                              var call5471 = callmethodChecked(this, "compileop(1)", [1], var_o);
                                              if5465 = call5471;
                                            }
                                            if5433 = if5465;
                                          }
                                          if5426 = if5433;
                                        }
                                        if5419 = if5426;
                                      }
                                      if5412 = if5419;
                                    }
                                    if5404 = if5412;
                                  }
                                  if5397 = if5404;
                                }
                                if5390 = if5397;
                              }
                              if5383 = if5390;
                            }
                            if5376 = if5383;
                          }
                          if5369 = if5376;
                        }
                        if5361 = if5369;
                      }
                      if5354 = if5361;
                    }
                    if5347 = if5354;
                  }
                  if5340 = if5347;
                }
                if5333 = if5340;
              }
              if5322 = if5333;
            }
            if5315 = if5322;
          }
          if5308 = if5315;
        }
        if5301 = if5308;
      }
      if5266 = if5301;
    }
    setLineNumber(1181);    // compilenode identifier
    var diff5474 = callmethodChecked(var_compilationDepth, "-(1)", [1], new GraceNum(1));
    var_compilationDepth = diff5474;
    setLineNumber(1182);    // compilenode member
    // call case 6: other requests
    var call5476 = callmethodChecked(var_o, "register", []);
    return call5476;
  };
  func5229.paramCounts = [1];
  this.methods["compilenode(1)"] = func5229;
  func5229.definitionLine = 1116;
  func5229.definitionModule = "genjs";
  setLineNumber(1185);    // compilenode method
  var func5477 = function(argcv) {    // method compile(_,_,_,_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_moduleObject = arguments[curarg];
    curarg++;
    var var_of = arguments[curarg];
    curarg++;
    var var_rm = arguments[curarg];
    curarg++;
    var var_bt = arguments[curarg];
    curarg++;
    var var_glPath = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(1186);    // compilenode member
    // call case 6: other requests
    var call5479 = callmethodChecked(var_sys, "argv", []);
    var var_argv = call5479;
    setLineNumber(1187);    // compilenode string
    var string5481 = new GraceString("NativePrelude");
    // call case 6: other requests
    // call case 6: other requests
    var call5483 = callmethodChecked(var_util, "extensions", []);
    var call5484 = callmethodChecked(call5483, "contains(1)", [1], string5481);
    var var_isPrelude = call5484;
    var if5485 = GraceDone;
    setLineNumber(1188);    // compilenode string
    var string5487 = new GraceString("ExtendedLineups");
    // call case 6: other requests
    // call case 6: other requests
    var call5489 = callmethodChecked(var_util, "extensions", []);
    var call5490 = callmethodChecked(call5489, "contains(1)", [1], string5487);
    if (Grace_isTrue(call5490)) {
      setLineNumber(1189);    // compilenode string
      var string5491 = new GraceString("PrimitiveGraceList");
      var_bracketConstructor = string5491;
      if5485 = GraceDone;
    }
    var if5492 = GraceDone;
    setLineNumber(1191);    // compilenode string
    var string5494 = new GraceString("noChecks");
    // call case 6: other requests
    // call case 6: other requests
    var call5496 = callmethodChecked(var_util, "extensions", []);
    var call5497 = callmethodChecked(call5496, "contains(1)", [1], string5494);
    if (Grace_isTrue(call5497)) {
      setLineNumber(1192);    // compilenode identifier
      var_emitTypeChecks = GraceFalse;
      setLineNumber(1193);    // compilenode identifier
      var_emitUndefinedChecks = GraceFalse;
      setLineNumber(1194);    // compilenode identifier
      var_emitArgChecks = GraceFalse;
      setLineNumber(1195);    // compilenode identifier
      var_emitPositions = GraceFalse;
      setLineNumber(1196);    // compilenode string
      var string5498 = new GraceString("callmethod");
      var_requestCall = string5498;
      if5492 = GraceDone;
    }
    var if5499 = GraceDone;
    setLineNumber(1198);    // compilenode string
    var string5501 = new GraceString("noTypeChecks");
    // call case 6: other requests
    // call case 6: other requests
    var call5503 = callmethodChecked(var_util, "extensions", []);
    var call5504 = callmethodChecked(call5503, "contains(1)", [1], string5501);
    if (Grace_isTrue(call5504)) {
      setLineNumber(1199);    // compilenode identifier
      var_emitTypeChecks = GraceFalse;
      if5499 = GraceDone;
    }
    var if5505 = GraceDone;
    setLineNumber(1201);    // compilenode string
    var string5507 = new GraceString("noArgChecks");
    // call case 6: other requests
    // call case 6: other requests
    var call5509 = callmethodChecked(var_util, "extensions", []);
    var call5510 = callmethodChecked(call5509, "contains(1)", [1], string5507);
    if (Grace_isTrue(call5510)) {
      setLineNumber(1202);    // compilenode identifier
      var_emitArgChecks = GraceFalse;
      if5505 = GraceDone;
    }
    var if5511 = GraceDone;
    setLineNumber(1204);    // compilenode string
    var string5513 = new GraceString("noUndefChecks");
    // call case 6: other requests
    // call case 6: other requests
    var call5515 = callmethodChecked(var_util, "extensions", []);
    var call5516 = callmethodChecked(call5515, "contains(1)", [1], string5513);
    if (Grace_isTrue(call5516)) {
      setLineNumber(1205);    // compilenode identifier
      var_emitUndefinedChecks = GraceFalse;
      if5511 = GraceDone;
    }
    var if5517 = GraceDone;
    setLineNumber(1207);    // compilenode string
    var string5519 = new GraceString("noLineNumbers");
    // call case 6: other requests
    // call case 6: other requests
    var call5521 = callmethodChecked(var_util, "extensions", []);
    var call5522 = callmethodChecked(call5521, "contains(1)", [1], string5519);
    if (Grace_isTrue(call5522)) {
      setLineNumber(1208);    // compilenode identifier
      var_emitPositions = GraceFalse;
      setLineNumber(1209);    // compilenode string
      var string5523 = new GraceString("callmethod");
      var_requestCall = string5523;
      if5517 = GraceDone;
    }
    setLineNumber(1211);    // compilenode member
    // call case 6: other requests
    var call5525 = callmethodChecked(var_moduleObject, "value", []);
    var_values = call5525;
    setLineNumber(1212);    // compilenode identifier
    var_outfile = var_of;
    setLineNumber(1213);    // compilenode member
    // call case 6: other requests
    var call5527 = callmethodChecked(var_moduleObject, "name", []);
    var_modname = call5527;
    setLineNumber(1214);    // compilenode identifier
    var_runmode = var_rm;
    setLineNumber(1215);    // compilenode identifier
    var_buildtype = var_bt;
    var if5528 = GraceDone;
    setLineNumber(1216);    // compilenode string
    var string5530 = new GraceString("Debug");
    // call case 6: other requests
    // call case 6: other requests
    var call5532 = callmethodChecked(var_util, "extensions", []);
    var call5533 = callmethodChecked(call5532, "contains(1)", [1], string5530);
    if (Grace_isTrue(call5533)) {
      setLineNumber(1217);    // compilenode identifier
      var_debugMode = GraceTrue;
      if5528 = GraceDone;
    }
    setLineNumber(1219);    // compilenode string
    var string5535 = new GraceString("generating ECMAScript code.");
    // call case 6: other requests
    var call5536 = callmethodChecked(var_util, "log_verbose(1)", [1], string5535);
    setLineNumber(1220);    // compilenode string
    var string5538 = new GraceString("String");
    // call case 6: other requests
    var call5539 = callmethodChecked(var_topLevelTypes, "add(1)", [1], string5538);
    setLineNumber(1221);    // compilenode string
    var string5541 = new GraceString("Number");
    // call case 6: other requests
    var call5542 = callmethodChecked(var_topLevelTypes, "add(1)", [1], string5541);
    setLineNumber(1222);    // compilenode string
    var string5544 = new GraceString("Boolean");
    // call case 6: other requests
    var call5545 = callmethodChecked(var_topLevelTypes, "add(1)", [1], string5544);
    setLineNumber(1223);    // compilenode string
    var string5547 = new GraceString("Block");
    // call case 6: other requests
    var call5548 = callmethodChecked(var_topLevelTypes, "add(1)", [1], string5547);
    setLineNumber(1224);    // compilenode string
    var string5550 = new GraceString("Done");
    // call case 6: other requests
    var call5551 = callmethodChecked(var_topLevelTypes, "add(1)", [1], string5550);
    setLineNumber(1225);    // compilenode string
    var string5553 = new GraceString("Type");
    // call case 6: other requests
    var call5554 = callmethodChecked(var_topLevelTypes, "add(1)", [1], string5553);
    setLineNumber(1226);    // compilenode string
    var string5556 = new GraceString("Unknown");
    // call case 6: other requests
    var call5557 = callmethodChecked(var_topLevelTypes, "add(1)", [1], string5556);
    setLineNumber(1227);    // compilenode string
    var string5559 = new GraceString("Object");
    // call case 6: other requests
    var call5560 = callmethodChecked(var_topLevelTypes, "add(1)", [1], string5559);
    var if5561 = GraceDone;
    setLineNumber(1228);    // compilenode call
    // call case 6: other requests
    var string5564 = new GraceString("noStrict");
    // call case 6: other requests
    // call case 6: other requests
    var call5566 = callmethodChecked(var_util, "extensions", []);
    var call5567 = callmethodChecked(call5566, "contains(1)", [1], string5564);
    var call5568 = callmethodChecked(call5567, "prefix!", [0]);
    if (Grace_isTrue(call5568)) {
      setLineNumber(1229);    // compilenode string
      var string5570 = new GraceString("\"use strict\";");
      // call case 4: self request
      onSelf = true;
      var call5571 = callmethodChecked(this, "out(1)", [1], string5570);
      if5561 = call5571;
    }
    var if5572 = GraceDone;
    setLineNumber(1231);    // compilenode member
    // call case 6: other requests
    var call5574 = callmethodChecked(var_isPrelude, "not", []);
    if (Grace_isTrue(call5574)) {
      setLineNumber(1232);    // compilenode string
      var string5576 = new GraceString("var___95__prelude = do_import(\"StandardPrelude\", gracecode_StandardPrelude);");
      // call case 4: self request
      onSelf = true;
      var call5577 = callmethodChecked(this, "out(1)", [1], string5576);
      if5572 = call5577;
    }
    setLineNumber(1234);    // compilenode num
    // call case 6: other requests
    var call5579 = callmethodChecked(var_util, "setline(1)", [1], new GraceNum(1));
    setLineNumber(1235);    // compilenode string
    var string5581 = new GraceString("() {");
    // call case 4: self request
    onSelf = true;
    var call5584 = callmethodChecked(this, "formatModname(1)", [1], var_modname);
    var string5586 = new GraceString("function ");
    var opresult5588 = callmethodChecked(string5586, "++(1)", [1], call5584);
    var opresult5590 = callmethodChecked(opresult5588, "++(1)", [1], string5581);
    // call case 4: self request
    onSelf = true;
    var call5591 = callmethodChecked(this, "out(1)", [1], opresult5590);
    setLineNumber(1236);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call5593 = callmethodChecked(this, "increaseindent", []);
    setLineNumber(1237);    // compilenode string
    var string5595 = new GraceString("\");");
    var string5598 = new GraceString("setModuleName(\"");
    var opresult5600 = callmethodChecked(string5598, "++(1)", [1], var_modname);
    var opresult5602 = callmethodChecked(opresult5600, "++(1)", [1], string5595);
    // call case 4: self request
    onSelf = true;
    var call5603 = callmethodChecked(this, "out(1)", [1], opresult5602);
    setLineNumber(1238);    // compilenode string
    var string5605 = new GraceString("\";");
    var string5608 = new GraceString("this.definitionModule = \"");
    var opresult5610 = callmethodChecked(string5608, "++(1)", [1], var_modname);
    var opresult5612 = callmethodChecked(opresult5610, "++(1)", [1], string5605);
    // call case 4: self request
    onSelf = true;
    var call5613 = callmethodChecked(this, "out(1)", [1], opresult5612);
    setLineNumber(1239);    // compilenode string
    var string5615 = new GraceString("this.definitionLine = 0;");
    // call case 4: self request
    onSelf = true;
    var call5616 = callmethodChecked(this, "out(1)", [1], string5615);
    setLineNumber(1240);    // compilenode string
    var string5618 = new GraceString("var var_prelude = var___95__prelude;");
    // call case 4: self request
    onSelf = true;
    var call5619 = callmethodChecked(this, "out(1)", [1], string5618);
    var if5620 = GraceDone;
    setLineNumber(1244);    // compilenode identifier
    if (Grace_isTrue(var_debugMode)) {
      setLineNumber(1245);    // compilenode string
      var string5622 = new GraceString(" module\");");
      var string5625 = new GraceString("var myframe = new StackFrame(\"");
      var opresult5627 = callmethodChecked(string5625, "++(1)", [1], var_modname);
      var opresult5629 = callmethodChecked(opresult5627, "++(1)", [1], string5622);
      // call case 4: self request
      onSelf = true;
      var call5630 = callmethodChecked(this, "out(1)", [1], opresult5629);
      setLineNumber(1246);    // compilenode string
      var string5632 = new GraceString("stackFrames.push(myframe);");
      // call case 4: self request
      onSelf = true;
      var call5633 = callmethodChecked(this, "out(1)", [1], string5632);
      if5620 = call5633;
    }
    setLineNumber(1248);    // compilenode string
    var string5635 = new GraceString("this");
    var string5636 = new GraceString("var_prelude");
    // call case 4: self request
    onSelf = true;
    var call5637 = callmethodChecked(this, "compileobjouter(2)", [2], string5635, string5636);
    setLineNumber(1249);    // compilenode array
    var array5638 = new PrimitiveGraceList([]);
    var var_imported = array5638;
    var if5639 = GraceDone;
    setLineNumber(1250);    // compilenode identifier
    if (Grace_isTrue(var_isPrelude)) {
      setLineNumber(1251);    // compilenode block
      var block5641 = new GraceBlock(this, 1251, 1);
      setLineNumber(1);    // compilenode identifier
      block5641.real = function(var_o) {
        var if5642 = GraceDone;
        setLineNumber(1252);    // compilenode member
        // call case 6: other requests
        var call5644 = callmethodChecked(var_o, "isMethod", []);
        if (Grace_isTrue(call5644)) {
          setLineNumber(1253);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call5646 = callmethodChecked(this, "compilenode(1)", [1], var_o);
          if5642 = call5646;
        }
        var if5647 = GraceDone;
        setLineNumber(1255);    // compilenode member
        // call case 6: other requests
        var call5649 = callmethodChecked(var_o, "isExternal", []);
        if (Grace_isTrue(call5649)) {
          setLineNumber(1256);    // compilenode member
          // call case 6: other requests
          var call5652 = callmethodChecked(var_o, "path", []);
          // call case 6: other requests
          var call5653 = callmethodChecked(var_imported, "push(1)", [1], call5652);
          if5647 = call5653;
        }
        return if5647;
      };
      // call case 6: other requests
      setLineNumber(1251);    // compilenode member
      // call case 6: other requests
      var call5655 = callmethodChecked(var_moduleObject, "value", []);
      var call5656 = callmethodChecked(call5655, "do(1)", [1], block5641);
      setLineNumber(1259);    // compilenode block
      var block5658 = new GraceBlock(this, 1259, 1);
      setLineNumber(1);    // compilenode identifier
      block5658.real = function(var_o) {
        var if5659 = GraceDone;
        setLineNumber(1260);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call5662 = callmethodChecked(var_o, "isMethod", []);
        var call5663 = callmethodChecked(call5662, "not", []);
        if (Grace_isTrue(call5663)) {
          setLineNumber(1261);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call5665 = callmethodChecked(this, "compilenode(1)", [1], var_o);
          if5659 = call5665;
        }
        return if5659;
      };
      // call case 6: other requests
      setLineNumber(1259);    // compilenode member
      // call case 6: other requests
      var call5667 = callmethodChecked(var_moduleObject, "value", []);
      var call5668 = callmethodChecked(call5667, "do(1)", [1], block5658);
      if5639 = call5668;
    } else {
      setLineNumber(1265);    // compilenode block
      var block5670 = new GraceBlock(this, 1265, 1);
      setLineNumber(1);    // compilenode identifier
      block5670.real = function(var_o) {
        setLineNumber(1266);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call5672 = callmethodChecked(this, "compilenode(1)", [1], var_o);
        setLineNumber(1267);    // compilenode member
        // call case 6: other requests
        var call5675 = callmethodChecked(var_o, "path", []);
        // call case 6: other requests
        var call5676 = callmethodChecked(var_imported, "push(1)", [1], call5675);
        return call5676;
      };
      // call case 6: other requests
      setLineNumber(1265);    // compilenode identifier
      var call5677 = callmethodChecked(var_moduleObject, "externalsDo(1)", [1], block5670);
      var if5678 = GraceDone;
      setLineNumber(1269);    // compilenode member
      // call case 6: other requests
      var call5680 = callmethodChecked(var_moduleObject, "superclass", []);
      var opresult5683 = callmethodChecked(GraceFalse, "\u2260(1)", [1], call5680);
      if (Grace_isTrue(opresult5683)) {
        setLineNumber(1270);    // compilenode member
        // call case 6: other requests
        var call5686 = callmethodChecked(var_moduleObject, "superclass", []);
        var string5687 = new GraceString("this");
        // call case 4: self request
        onSelf = true;
        var call5688 = callmethodChecked(this, "compileInherits(1)in(2)", [1, 2], call5686, var_moduleObject, string5687);
        if5678 = call5688;
      }
      setLineNumber(1272);    // compilenode block
      var block5690 = new GraceBlock(this, 1272, 1);
      setLineNumber(1);    // compilenode identifier
      block5690.real = function(var_t) {
        setLineNumber(1273);    // compilenode string
        var string5692 = new GraceString("this");
        // call case 4: self request
        onSelf = true;
        var call5693 = callmethodChecked(this, "compileInherits(1)in(2)", [1, 2], var_t, var_moduleObject, string5692);
        return call5693;
      };
      // call case 6: other requests
      setLineNumber(1272);    // compilenode member
      // call case 6: other requests
      var call5695 = callmethodChecked(var_moduleObject, "usedTraits", []);
      var call5696 = callmethodChecked(call5695, "do(1)", [1], block5690);
      setLineNumber(1275);    // compilenode block
      var block5698 = new GraceBlock(this, 1275, 1);
      setLineNumber(1);    // compilenode identifier
      block5698.real = function(var_o) {
        setLineNumber(1276);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call5700 = callmethodChecked(this, "compilenode(1)", [1], var_o);
        return call5700;
      };
      // call case 6: other requests
      setLineNumber(1275);    // compilenode identifier
      var call5701 = callmethodChecked(var_moduleObject, "methodsDo(1)", [1], block5698);
      if5639 = call5701;
    }
    setLineNumber(1279);    // compilenode block
    var block5703 = new GraceBlock(this, 1279, 1);
    setLineNumber(1);    // compilenode identifier
    block5703.real = function(var_o) {
      setLineNumber(1280);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call5705 = callmethodChecked(this, "compilenode(1)", [1], var_o);
      return call5705;
    };
    // call case 6: other requests
    setLineNumber(1279);    // compilenode identifier
    var call5706 = callmethodChecked(var_moduleObject, "executableComponentsDo(1)", [1], block5703);
    var if5707 = GraceDone;
    setLineNumber(1282);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call5710 = callmethodChecked(var_xmodule, "currentDialect", []);
    var call5711 = callmethodChecked(call5710, "hasAtEnd", []);
    if (Grace_isTrue(call5711)) {
      setLineNumber(1283);    // compilenode string
      var string5713 = new GraceString("callmethod(var_prelude, \"atModuleEnd\", [1], this);");
      // call case 4: self request
      onSelf = true;
      var call5714 = callmethodChecked(this, "out(1)", [1], string5713);
      if5707 = call5714;
    }
    var if5715 = GraceDone;
    setLineNumber(1285);    // compilenode identifier
    if (Grace_isTrue(var_debugMode)) {
      setLineNumber(1286);    // compilenode string
      var string5717 = new GraceString("stackFrames.pop();");
      // call case 4: self request
      onSelf = true;
      var call5718 = callmethodChecked(this, "out(1)", [1], string5717);
      if5715 = call5718;
    }
    setLineNumber(1288);    // compilenode string
    var string5720 = new GraceString("return this;");
    // call case 4: self request
    onSelf = true;
    var call5721 = callmethodChecked(this, "out(1)", [1], string5720);
    setLineNumber(1289);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call5723 = callmethodChecked(this, "decreaseindent", []);
    setLineNumber(1290);    // compilenode string
    var string5725 = new GraceString("}");
    // call case 4: self request
    onSelf = true;
    var call5726 = callmethodChecked(this, "out(1)", [1], string5725);
    setLineNumber(1292);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call5728 = callmethodChecked(this, "formatModname(1)", [1], var_modname);
    var var_generatedModuleName = call5728;
    setLineNumber(1293);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var block5732 = new GraceBlock(this, 1293, 1);
    setLineNumber(1);    // compilenode identifier
    block5732.real = function(var_each) {
      setLineNumber(1293);    // compilenode string
      var string5733 = new GraceString("'");
      var string5736 = new GraceString("'");
      var opresult5738 = callmethodChecked(string5736, "++(1)", [1], var_each);
      var opresult5740 = callmethodChecked(opresult5738, "++(1)", [1], string5733);
      return opresult5740;
    };
    // call case 6: other requests
    var call5741 = callmethodChecked(var_imported, "map(1)", [1], block5732);
    var call5742 = callmethodChecked(call5741, "asList", []);
    var call5743 = callmethodChecked(call5742, "sort", []);
    var var_importList = call5743;
    setLineNumber(1294);    // compilenode string
    var string5745 = new GraceString(";");
    var string5748 = new GraceString(".imports = ");
    var string5751 = new GraceString("");
    var opresult5753 = callmethodChecked(string5751, "++(1)", [1], var_generatedModuleName);
    var opresult5755 = callmethodChecked(opresult5753, "++(1)", [1], string5748);
    var opresult5757 = callmethodChecked(opresult5755, "++(1)", [1], var_importList);
    var opresult5759 = callmethodChecked(opresult5757, "++(1)", [1], string5745);
    // call case 4: self request
    onSelf = true;
    var call5760 = callmethodChecked(this, "out(1)", [1], opresult5759);
    setLineNumber(1296);    // compilenode member
    // call case 6: other requests
    var call5763 = callmethodChecked(var_imports, "other", []);
    // call case 6: other requests
    var call5764 = callmethodChecked(var_moduleObject, "imports:=(1)", [1], call5763);
    setLineNumber(1297);    // compilenode identifier
    // call case 6: other requests
    var call5766 = callmethodChecked(var_xmodule, "writeGctForModule(1)", [1], var_moduleObject);
    setLineNumber(1299);    // compilenode identifier
    // call case 6: other requests
    var call5768 = callmethodChecked(var_xmodule, "parseGCT(1)", [1], var_modname);
    var var_gct = call5768;
    setLineNumber(1300);    // compilenode identifier
    // call case 6: other requests
    var call5770 = callmethodChecked(var_xmodule, "gctAsString(1)", [1], var_gct);
    var var_gctText = call5770;
    setLineNumber(1301);    // compilenode string
    var string5772 = new GraceString("if (typeof gctCache !== \"undefined\")");
    // call case 4: self request
    onSelf = true;
    var call5773 = callmethodChecked(this, "out(1)", [1], string5772);
    setLineNumber(1302);    // compilenode string
    var string5775 = new GraceString("\";");
    // call case 4: self request
    onSelf = true;
    var call5778 = callmethodChecked(this, "escapestring(1)", [1], var_gctText);
    var string5780 = new GraceString("'] = \"");
    // call case 4: self request
    onSelf = true;
    var call5784 = callmethodChecked(this, "basename(1)", [1], var_modname);
    // call case 4: self request
    onSelf = true;
    var call5785 = callmethodChecked(this, "escapestring(1)", [1], call5784);
    var string5787 = new GraceString("  gctCache['");
    var opresult5789 = callmethodChecked(string5787, "++(1)", [1], call5785);
    var opresult5791 = callmethodChecked(opresult5789, "++(1)", [1], string5780);
    var opresult5793 = callmethodChecked(opresult5791, "++(1)", [1], call5778);
    var opresult5795 = callmethodChecked(opresult5793, "++(1)", [1], string5775);
    // call case 4: self request
    onSelf = true;
    var call5796 = callmethodChecked(this, "out(1)", [1], opresult5795);
    setLineNumber(1303);    // compilenode string
    var string5798 = new GraceString("if (typeof originalSourceLines !== \"undefined\") {");
    // call case 4: self request
    onSelf = true;
    var call5799 = callmethodChecked(this, "out(1)", [1], string5798);
    setLineNumber(1304);    // compilenode string
    var string5801 = new GraceString("\"] = [");
    var string5804 = new GraceString("  originalSourceLines[\"");
    var opresult5806 = callmethodChecked(string5804, "++(1)", [1], var_modname);
    var opresult5808 = callmethodChecked(opresult5806, "++(1)", [1], string5801);
    // call case 4: self request
    onSelf = true;
    var call5809 = callmethodChecked(this, "out(1)", [1], opresult5808);
    setLineNumber(1305);    // compilenode member
    // call case 6: other requests
    var call5811 = callmethodChecked(var_util, "cLines", []);
    var var_sourceLines = call5811;
    setLineNumber(1306);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call5814 = callmethodChecked(var_util, "cLines", []);
    var call5815 = callmethodChecked(call5814, "size", []);
    var var_numberOfLines = call5815;
    setLineNumber(1307);    // compilenode num
    var var_ln = new GraceNum(1);
    setLineNumber(1308);    // compilenode block
    var block5817 = new GraceBlock(this, 1308, 0);
    block5817.real = function() {
      var opresult5820 = callmethodChecked(var_ln, "<(1)", [1], var_numberOfLines);
      return opresult5820;
    };
    var block5821 = new GraceBlock(this, 1308, 0);
    block5821.real = function() {
      setLineNumber(1309);    // compilenode string
      var string5823 = new GraceString("\",");
      // call case 6: other requests
      var call5826 = callmethodChecked(var_sourceLines, "at(1)", [1], var_ln);
      var string5828 = new GraceString("    \"");
      var opresult5830 = callmethodChecked(string5828, "++(1)", [1], call5826);
      var opresult5832 = callmethodChecked(opresult5830, "++(1)", [1], string5823);
      // call case 4: self request
      onSelf = true;
      var call5833 = callmethodChecked(this, "out(1)", [1], opresult5832);
      setLineNumber(1310);    // compilenode identifier
      var opresult5836 = callmethodChecked(var_ln, "+(1)", [1], new GraceNum(1));
      var_ln = opresult5836;
      return GraceDone;
    };
    // call case 5: prelude request
    var call5837 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block5817, block5821);
    var if5838 = GraceDone;
    setLineNumber(1312);    // compilenode identifier
    var opresult5841 = callmethodChecked(var_numberOfLines, "\u2264(1)", [1], new GraceNum(0));
    if (Grace_isTrue(opresult5841)) {
      setLineNumber(1313);    // compilenode string
      var string5843 = new GraceString(" ];");
      // call case 4: self request
      onSelf = true;
      var call5844 = callmethodChecked(this, "out(1)", [1], string5843);
      if5838 = call5844;
    } else {
      setLineNumber(1315);    // compilenode string
      var string5846 = new GraceString("\" ];");
      // call case 6: other requests
      var call5849 = callmethodChecked(var_sourceLines, "at(1)", [1], var_numberOfLines);
      var string5851 = new GraceString("    \"");
      var opresult5853 = callmethodChecked(string5851, "++(1)", [1], call5849);
      var opresult5855 = callmethodChecked(opresult5853, "++(1)", [1], string5846);
      // call case 4: self request
      onSelf = true;
      var call5856 = callmethodChecked(this, "out(1)", [1], opresult5855);
      if5838 = call5856;
    }
    setLineNumber(1317);    // compilenode string
    var string5858 = new GraceString("}");
    // call case 4: self request
    onSelf = true;
    var call5859 = callmethodChecked(this, "out(1)", [1], string5858);
    setLineNumber(1318);    // compilenode string
    var string5861 = new GraceString("if (typeof global !== \"undefined\")");
    // call case 4: self request
    onSelf = true;
    var call5862 = callmethodChecked(this, "out(1)", [1], string5861);
    setLineNumber(1319);    // compilenode string
    var string5864 = new GraceString(";");
    var string5867 = new GraceString(" = ");
    var string5870 = new GraceString("  global.");
    var opresult5872 = callmethodChecked(string5870, "++(1)", [1], var_generatedModuleName);
    var opresult5874 = callmethodChecked(opresult5872, "++(1)", [1], string5867);
    var opresult5876 = callmethodChecked(opresult5874, "++(1)", [1], var_generatedModuleName);
    var opresult5878 = callmethodChecked(opresult5876, "++(1)", [1], string5864);
    // call case 4: self request
    onSelf = true;
    var call5879 = callmethodChecked(this, "out(1)", [1], opresult5878);
    setLineNumber(1320);    // compilenode string
    var string5881 = new GraceString("if (typeof window !== \"undefined\")");
    // call case 4: self request
    onSelf = true;
    var call5882 = callmethodChecked(this, "out(1)", [1], string5881);
    setLineNumber(1321);    // compilenode string
    var string5884 = new GraceString(";");
    var string5887 = new GraceString(" = ");
    var string5890 = new GraceString("  window.");
    var opresult5892 = callmethodChecked(string5890, "++(1)", [1], var_generatedModuleName);
    var opresult5894 = callmethodChecked(opresult5892, "++(1)", [1], string5887);
    var opresult5896 = callmethodChecked(opresult5894, "++(1)", [1], var_generatedModuleName);
    var opresult5898 = callmethodChecked(opresult5896, "++(1)", [1], string5884);
    // call case 4: self request
    onSelf = true;
    var call5899 = callmethodChecked(this, "out(1)", [1], opresult5898);
    setLineNumber(1323);    // compilenode block
    var block5901 = new GraceBlock(this, 1323, 1);
    setLineNumber(1);    // compilenode identifier
    block5901.real = function(var_o) {
      setLineNumber(1324);    // compilenode identifier
      // call case 6: other requests
      var call5903 = callmethodChecked(var_util, "outprint(1)", [1], var_o);
      return call5903;
    };
    // call case 5: prelude request
    var call5904 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_output, block5901);
    setLineNumber(1326);    // compilenode member
    // call case 6: other requests
    var call5906 = callmethodChecked(var_outfile, "close", []);
    setLineNumber(1327);    // compilenode string
    var string5908 = new GraceString("done.");
    // call case 6: other requests
    var call5909 = callmethodChecked(var_util, "log_verbose(1)", [1], string5908);
    var if5910 = GraceDone;
    setLineNumber(1328);    // compilenode string
    var string5911 = new GraceString("run");
    var opresult5914 = callmethodChecked(var_buildtype, "==(1)", [1], string5911);
    if (Grace_isTrue(opresult5914)) {
      // call case 4: self request
      onSelf = true;
      var call5916 = callmethodChecked(this, "runJsCode(2)", [2], var_of, var_glPath);
      if5910 = call5916;
    }
    return if5910;
  };
  func5477.paramCounts = [5];
  this.methods["compile(5)"] = func5477;
  func5477.definitionLine = 1185;
  func5477.definitionModule = "genjs";
  setLineNumber(1331);    // compilenode method
  var func5917 = function(argcv) {    // method compileInherits(_)in(_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_objNode = arguments[curarg];
    curarg++;
    var var_selfr = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    var if5918 = GraceDone;
    setLineNumber(1334);    // compilenode member
    // call case 6: other requests
    var call5920 = callmethodChecked(var_o, "isUse", []);
    if (Grace_isTrue(call5920)) {
      setLineNumber(1335);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call5922 = callmethodChecked(this, "compileTrait(1)in(2)", [1, 2], var_o, var_objNode, var_selfr);
      if5918 = call5922;
    } else {
      setLineNumber(1337);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call5924 = callmethodChecked(this, "compileSuper(2)", [2], var_o, var_selfr);
      if5918 = call5924;
    }
    return if5918;
  };
  func5917.paramCounts = [1, 2];
  this.methods["compileInherits(1)in(2)"] = func5917;
  func5917.definitionLine = 1331;
  func5917.definitionModule = "genjs";
  setLineNumber(1341);    // compilenode method
  var func5925 = function(argcv) {    // method compileSuper(_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_selfr = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(1342);    // compilenode member
    // call case 6: other requests
    var call5928 = callmethodChecked(var_o, "value", []);
    // call case 4: self request
    onSelf = true;
    var call5929 = callmethodChecked(this, "compilenode(1)", [1], call5928);
    var var_sup = call5929;
    setLineNumber(1343);    // compilenode string
    var string5931 = new GraceString(";");
    var string5934 = new GraceString(".superobj = ");
    var string5937 = new GraceString("");
    var opresult5939 = callmethodChecked(string5937, "++(1)", [1], var_selfr);
    var opresult5941 = callmethodChecked(opresult5939, "++(1)", [1], string5934);
    var opresult5943 = callmethodChecked(opresult5941, "++(1)", [1], var_sup);
    var opresult5945 = callmethodChecked(opresult5943, "++(1)", [1], string5931);
    // call case 4: self request
    onSelf = true;
    var call5946 = callmethodChecked(this, "out(1)", [1], opresult5945);
    setLineNumber(1344);    // compilenode string
    var string5948 = new GraceString(".data;");
    var string5951 = new GraceString(".data = ");
    var string5954 = new GraceString(".data) ");
    var string5957 = new GraceString("if (");
    var opresult5959 = callmethodChecked(string5957, "++(1)", [1], var_sup);
    var opresult5961 = callmethodChecked(opresult5959, "++(1)", [1], string5954);
    var opresult5963 = callmethodChecked(opresult5961, "++(1)", [1], var_selfr);
    var opresult5965 = callmethodChecked(opresult5963, "++(1)", [1], string5951);
    var opresult5967 = callmethodChecked(opresult5965, "++(1)", [1], var_sup);
    var opresult5969 = callmethodChecked(opresult5967, "++(1)", [1], string5948);
    // call case 4: self request
    onSelf = true;
    var call5970 = callmethodChecked(this, "out(1)", [1], opresult5969);
    setLineNumber(1346);    // compilenode string
    var string5972 = new GraceString(".hasOwnProperty('_value'))");
    var string5975 = new GraceString("if (");
    var opresult5977 = callmethodChecked(string5975, "++(1)", [1], var_sup);
    var opresult5979 = callmethodChecked(opresult5977, "++(1)", [1], string5972);
    // call case 4: self request
    onSelf = true;
    var call5980 = callmethodChecked(this, "out(1)", [1], opresult5979);
    setLineNumber(1347);    // compilenode string
    var string5982 = new GraceString("._value;");
    var string5985 = new GraceString("._value = ");
    var string5988 = new GraceString("    ");
    var opresult5990 = callmethodChecked(string5988, "++(1)", [1], var_selfr);
    var opresult5992 = callmethodChecked(opresult5990, "++(1)", [1], string5985);
    var opresult5994 = callmethodChecked(opresult5992, "++(1)", [1], var_sup);
    var opresult5996 = callmethodChecked(opresult5994, "++(1)", [1], string5982);
    // call case 4: self request
    onSelf = true;
    var call5997 = callmethodChecked(this, "out(1)", [1], opresult5996);
    setLineNumber(1350);    // compilenode block
    var block5999 = new GraceBlock(this, 1350, 1);
    setLineNumber(1);    // compilenode identifier
    block5999.real = function(var_each) {
      setLineNumber(1351);    // compilenode string
      var string6001 = new GraceString("');");
      // call case 6: other requests
      // call case 6: other requests
      var call6005 = callmethodChecked(var_each, "oldName", []);
      var call6006 = callmethodChecked(call6005, "nameString", []);
      var string6008 = new GraceString(", '");
      var string6011 = new GraceString("'] = findMethod(");
      // call case 6: other requests
      // call case 6: other requests
      var call6015 = callmethodChecked(var_each, "newName", []);
      var call6016 = callmethodChecked(call6015, "nameString", []);
      var string6018 = new GraceString(".methods['");
      var string6021 = new GraceString("");
      var opresult6023 = callmethodChecked(string6021, "++(1)", [1], var_selfr);
      var opresult6025 = callmethodChecked(opresult6023, "++(1)", [1], string6018);
      var opresult6027 = callmethodChecked(opresult6025, "++(1)", [1], call6016);
      var opresult6029 = callmethodChecked(opresult6027, "++(1)", [1], string6011);
      var opresult6031 = callmethodChecked(opresult6029, "++(1)", [1], var_sup);
      var opresult6033 = callmethodChecked(opresult6031, "++(1)", [1], string6008);
      var opresult6035 = callmethodChecked(opresult6033, "++(1)", [1], call6006);
      var opresult6037 = callmethodChecked(opresult6035, "++(1)", [1], string6001);
      // call case 4: self request
      onSelf = true;
      var call6038 = callmethodChecked(this, "out(1)", [1], opresult6037);
      return call6038;
    };
    // call case 6: other requests
    setLineNumber(1350);    // compilenode member
    // call case 6: other requests
    var call6040 = callmethodChecked(var_o, "aliases", []);
    var call6041 = callmethodChecked(call6040, "do(1)", [1], block5999);
    setLineNumber(1353);    // compilenode block
    var block6043 = new GraceBlock(this, 1353, 1);
    setLineNumber(1);    // compilenode identifier
    block6043.real = function(var_each) {
      setLineNumber(1354);    // compilenode string
      var string6045 = new GraceString("'];");
      // call case 6: other requests
      var call6048 = callmethodChecked(var_each, "nameString", []);
      var string6050 = new GraceString(".methods['");
      var string6053 = new GraceString("delete ");
      var opresult6055 = callmethodChecked(string6053, "++(1)", [1], var_sup);
      var opresult6057 = callmethodChecked(opresult6055, "++(1)", [1], string6050);
      var opresult6059 = callmethodChecked(opresult6057, "++(1)", [1], call6048);
      var opresult6061 = callmethodChecked(opresult6059, "++(1)", [1], string6045);
      // call case 4: self request
      onSelf = true;
      var call6062 = callmethodChecked(this, "out(1)", [1], opresult6061);
      return call6062;
    };
    // call case 6: other requests
    setLineNumber(1353);    // compilenode member
    // call case 6: other requests
    var call6064 = callmethodChecked(var_o, "exclusions", []);
    var call6065 = callmethodChecked(call6064, "do(1)", [1], block6043);
    return call6065;
  };
  func5925.paramCounts = [2];
  this.methods["compileSuper(2)"] = func5925;
  func5925.definitionLine = 1341;
  func5925.definitionModule = "genjs";
  setLineNumber(1358);    // compilenode method
  var func6066 = function(argcv) {    // method compileTrait(_)in(_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_objNode = arguments[curarg];
    curarg++;
    var var_selfr = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(1359);    // compilenode member
    // call case 6: other requests
    var call6069 = callmethodChecked(var_o, "value", []);
    // call case 4: self request
    onSelf = true;
    var call6070 = callmethodChecked(this, "compilenode(1)", [1], call6069);
    var var_tObj = call6070;
    setLineNumber(1360);    // compilenode member
    // call case 6: other requests
    var call6072 = callmethodChecked(var_objNode, "localNames", []);
    // call case 6: other requests
    var call6075 = callmethodChecked(var_o, "providedNames", []);
    var opresult6077 = callmethodChecked(call6075, "--(1)", [1], call6072);
    var var_tMethNames = opresult6077;
    setLineNumber(1362);    // compilenode block
    var block6079 = new GraceBlock(this, 1362, 1);
    setLineNumber(1);    // compilenode identifier
    block6079.real = function(var_each) {
      setLineNumber(1363);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call6082 = callmethodChecked(var_each, "newName", []);
      var call6083 = callmethodChecked(call6082, "nameString", []);
      var var_nn = call6083;
      setLineNumber(1365);    // compilenode string
      var string6085 = new GraceString("'];  // alias");
      // call case 6: other requests
      // call case 6: other requests
      var call6089 = callmethodChecked(var_each, "oldName", []);
      var call6090 = callmethodChecked(call6089, "nameString", []);
      var string6092 = new GraceString(".methods['");
      var string6095 = new GraceString("");
      var opresult6097 = callmethodChecked(string6095, "++(1)", [1], var_tObj);
      var opresult6099 = callmethodChecked(opresult6097, "++(1)", [1], string6092);
      var opresult6101 = callmethodChecked(opresult6099, "++(1)", [1], call6090);
      var opresult6103 = callmethodChecked(opresult6101, "++(1)", [1], string6085);
      setLineNumber(1364);    // compilenode string
      var string6105 = new GraceString("'] = ");
      var string6108 = new GraceString(".methods['");
      var string6111 = new GraceString("");
      var opresult6113 = callmethodChecked(string6111, "++(1)", [1], var_selfr);
      var opresult6115 = callmethodChecked(opresult6113, "++(1)", [1], string6108);
      var opresult6117 = callmethodChecked(opresult6115, "++(1)", [1], var_nn);
      var opresult6119 = callmethodChecked(opresult6117, "++(1)", [1], string6105);
      var opresult6121 = callmethodChecked(opresult6119, "++(1)", [1], opresult6103);
      // call case 4: self request
      onSelf = true;
      var call6122 = callmethodChecked(this, "out(1)", [1], opresult6121);
      setLineNumber(1366);    // compilenode identifier
      // call case 6: other requests
      var call6124 = callmethodChecked(var_tMethNames, "remove(1)", [1], var_nn);
      return call6124;
    };
    // call case 6: other requests
    setLineNumber(1362);    // compilenode member
    // call case 6: other requests
    var call6126 = callmethodChecked(var_o, "aliases", []);
    var call6127 = callmethodChecked(call6126, "do(1)", [1], block6079);
    setLineNumber(1368);    // compilenode block
    var block6129 = new GraceBlock(this, 1368, 1);
    setLineNumber(1);    // compilenode identifier
    block6129.real = function(var_methName) {
      setLineNumber(1369);    // compilenode string
      var string6131 = new GraceString("'];");
      var string6134 = new GraceString(".methods['");
      var string6137 = new GraceString("'] = ");
      var string6140 = new GraceString(".methods['");
      var string6143 = new GraceString("");
      var opresult6145 = callmethodChecked(string6143, "++(1)", [1], var_selfr);
      var opresult6147 = callmethodChecked(opresult6145, "++(1)", [1], string6140);
      var opresult6149 = callmethodChecked(opresult6147, "++(1)", [1], var_methName);
      var opresult6151 = callmethodChecked(opresult6149, "++(1)", [1], string6137);
      var opresult6153 = callmethodChecked(opresult6151, "++(1)", [1], var_tObj);
      var opresult6155 = callmethodChecked(opresult6153, "++(1)", [1], string6134);
      var opresult6157 = callmethodChecked(opresult6155, "++(1)", [1], var_methName);
      var opresult6159 = callmethodChecked(opresult6157, "++(1)", [1], string6131);
      // call case 4: self request
      onSelf = true;
      var call6160 = callmethodChecked(this, "out(1)", [1], opresult6159);
      return call6160;
    };
    // call case 6: other requests
    setLineNumber(1368);    // compilenode identifier
    var call6161 = callmethodChecked(var_tMethNames, "do(1)", [1], block6129);
    return call6161;
  };
  func6066.paramCounts = [1, 2];
  this.methods["compileTrait(1)in(2)"] = func6066;
  func6066.definitionLine = 1358;
  func6066.definitionModule = "genjs";
  setLineNumber(1373);    // compilenode method
  var func6162 = function(argcv) {    // method runJsCode(_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_of = arguments[curarg];
    curarg++;
    var var_glPath = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    setLineNumber(1374);    // compilenode string
    var string6164 = new GraceString("GRACE_MODULE_PATH");
    // call case 6: other requests
    // call case 6: other requests
    var call6166 = callmethodChecked(var_sys, "environ", []);
    var call6167 = callmethodChecked(call6166, "at(1)", [1], string6164);
    var var_gmp = call6167;
    setLineNumber(1375);    // compilenode identifier
    // call case 6: other requests
    var call6169 = callmethodChecked(var_unixFilePath, "split(1)", [1], var_gmp);
    var var_pathList = call6169;
    var if6170 = GraceDone;
    setLineNumber(1376);    // compilenode string
    var string6171 = new GraceString("/");
    // call case 6: other requests
    var call6175 = callmethodChecked(var_glPath, "size", []);
    // call case 6: other requests
    var call6176 = callmethodChecked(var_glPath, "at(1)", [1], call6175);
    var opresult6178 = callmethodChecked(call6176, "==(1)", [1], string6171);
    if (Grace_isTrue(opresult6178)) {
      if6170 = var_glPath;
    } else {
      setLineNumber(1377);    // compilenode string
      var string6179 = new GraceString("/");
      var opresult6182 = callmethodChecked(var_glPath, "++(1)", [1], string6179);
      if6170 = opresult6182;
    }
    var var_libPath = if6170;
    var if6183 = GraceDone;
    setLineNumber(1378);    // compilenode string
    var string6185 = new GraceString("gracelib.js");
    var opresult6188 = callmethodChecked(var_libPath, "++(1)", [1], string6185);
    // call case 6: other requests
    var call6189 = callmethodChecked(var_io, "exists(1)", [1], opresult6188);
    if (Grace_isTrue(call6189)) {
      var if6190 = GraceDone;
      setLineNumber(1379);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call6193 = callmethodChecked(var_pathList, "contains(1)", [1], var_libPath);
      var call6194 = callmethodChecked(call6193, "not", []);
      if (Grace_isTrue(call6194)) {
        setLineNumber(1380);    // compilenode string
        var string6196 = new GraceString("GRACE_MODULE_PATH");
        var string6197 = new GraceString("");
        var string6200 = new GraceString(":");
        var string6203 = new GraceString("");
        var opresult6205 = callmethodChecked(string6203, "++(1)", [1], var_libPath);
        var opresult6207 = callmethodChecked(opresult6205, "++(1)", [1], string6200);
        var opresult6209 = callmethodChecked(opresult6207, "++(1)", [1], var_gmp);
        var opresult6211 = callmethodChecked(opresult6209, "++(1)", [1], string6197);
        // call case 6: other requests
        // call case 6: other requests
        var call6213 = callmethodChecked(var_sys, "environ", []);
        var call6214 = callmethodChecked(call6213, "at(1)put(1)", [1, 1], string6196, opresult6211);
        if6190 = call6214;
      }
      if6183 = if6190;
    }
    setLineNumber(1383);    // compilenode member
    // call case 6: other requests
    var string6217 = new GraceString("grace");
    // call case 6: other requests
    var call6220 = callmethodChecked(var_of, "pathname", []);
    var array6218 = new PrimitiveGraceList([call6220]);
    // call case 6: other requests
    var call6221 = callmethodChecked(var_io, "spawn(2)", [2], string6217, array6218);
    var call6222 = callmethodChecked(call6221, "wait", []);
    var var_runExitCode = call6222;
    var if6223 = GraceDone;
    setLineNumber(1384);    // compilenode identifier
    var opresult6226 = callmethodChecked(var_runExitCode, "<(1)", [1], new GraceNum(0));
    if (Grace_isTrue(opresult6226)) {
      setLineNumber(1385);    // compilenode string
      var string6228 = new GraceString(".\n");
      // call case 6: other requests
      var call6231 = callmethodChecked(var_runExitCode, "prefix-", [0]);
      var string6233 = new GraceString(" exited with error ");
      var string6236 = new GraceString("minigrace: program ");
      var opresult6238 = callmethodChecked(string6236, "++(1)", [1], var_modname);
      var opresult6240 = callmethodChecked(opresult6238, "++(1)", [1], string6233);
      var opresult6242 = callmethodChecked(opresult6240, "++(1)", [1], call6231);
      var opresult6244 = callmethodChecked(opresult6242, "++(1)", [1], string6228);
      // call case 6: other requests
      // call case 6: other requests
      var call6246 = callmethodChecked(var_io, "error", []);
      var call6247 = callmethodChecked(call6246, "write(1)", [1], opresult6244);
      setLineNumber(1386);    // compilenode num
      // call case 6: other requests
      var call6249 = callmethodChecked(var_sys, "exit(1)", [1], new GraceNum(4));
      if6223 = call6249;
    }
    return if6223;
  };
  func6162.paramCounts = [2];
  this.methods["runJsCode(2)"] = func6162;
  func6162.definitionLine = 1373;
  func6162.definitionModule = "genjs";
  setLineNumber(11);    // compilenode string
  var string6250 = new GraceString("");
  var var_indent = string6250;
  setLineNumber(1);    // compilenode method
  var func6251 = function(argcv) {    // method indent
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genjs");
    // indent is a simple accessor - elide try ... catch
    setLineNumber(11);    // compilenode identifier
    return var_indent;
  };
  func6251.paramCounts = [0];
  this.methods["indent"] = func6251;
  func6251.definitionLine = 1;
  func6251.definitionModule = "genjs";
  setLineNumber(1);    // compilenode method
  var func6252 = function(argcv) {    // method indent:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    var_indent = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func6252.paramCounts = [1];
  this.methods["indent:=(1)"] = func6252;
  func6252.definitionLine = 1;
  func6252.definitionModule = "genjs";
  this.methods["indent"].debug = "var";
  setLineNumber(12);    // compilenode num
  var var_verbosity = new GraceNum(30);
  setLineNumber(1);    // compilenode method
  var func6253 = function(argcv) {    // method verbosity
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genjs");
    // verbosity is a simple accessor - elide try ... catch
    setLineNumber(12);    // compilenode identifier
    return var_verbosity;
  };
  func6253.paramCounts = [0];
  this.methods["verbosity"] = func6253;
  func6253.definitionLine = 1;
  func6253.definitionModule = "genjs";
  setLineNumber(1);    // compilenode method
  var func6254 = function(argcv) {    // method verbosity:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    var_verbosity = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func6254.paramCounts = [1];
  this.methods["verbosity:=(1)"] = func6254;
  func6254.definitionLine = 1;
  func6254.definitionModule = "genjs";
  this.methods["verbosity"].debug = "var";
  setLineNumber(13);    // compilenode num
  var var_pad1 = new GraceNum(1);
  setLineNumber(1);    // compilenode method
  var func6255 = function(argcv) {    // method pad1
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genjs");
    // pad1 is a simple accessor - elide try ... catch
    setLineNumber(13);    // compilenode identifier
    return var_pad1;
  };
  func6255.paramCounts = [0];
  this.methods["pad1"] = func6255;
  func6255.definitionLine = 1;
  func6255.definitionModule = "genjs";
  setLineNumber(1);    // compilenode method
  var func6256 = function(argcv) {    // method pad1:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    var_pad1 = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func6256.paramCounts = [1];
  this.methods["pad1:=(1)"] = func6256;
  func6256.definitionLine = 1;
  func6256.definitionModule = "genjs";
  this.methods["pad1"].debug = "var";
  setLineNumber(14);    // compilenode num
  var var_auto__95__count = new GraceNum(0);
  setLineNumber(1);    // compilenode method
  var func6257 = function(argcv) {    // method auto_count
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genjs");
    // auto_count is a simple accessor - elide try ... catch
    setLineNumber(14);    // compilenode identifier
    return var_auto__95__count;
  };
  func6257.paramCounts = [0];
  this.methods["auto_count"] = func6257;
  func6257.definitionLine = 1;
  func6257.definitionModule = "genjs";
  setLineNumber(1);    // compilenode method
  var func6258 = function(argcv) {    // method auto_count:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    var_auto__95__count = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func6258.paramCounts = [1];
  this.methods["auto_count:=(1)"] = func6258;
  func6258.definitionLine = 1;
  func6258.definitionModule = "genjs";
  this.methods["auto_count"].debug = "var";
  setLineNumber(15);    // compilenode array
  var array6259 = new PrimitiveGraceList([]);
  var var_constants = array6259;
  setLineNumber(1);    // compilenode method
  var func6260 = function(argcv) {    // method constants
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genjs");
    // constants is a simple accessor - elide try ... catch
    setLineNumber(15);    // compilenode identifier
    return var_constants;
  };
  func6260.paramCounts = [0];
  this.methods["constants"] = func6260;
  func6260.definitionLine = 1;
  func6260.definitionModule = "genjs";
  setLineNumber(1);    // compilenode method
  var func6261 = function(argcv) {    // method constants:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    var_constants = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func6261.paramCounts = [1];
  this.methods["constants:=(1)"] = func6261;
  func6261.definitionLine = 1;
  func6261.definitionModule = "genjs";
  this.methods["constants"].debug = "var";
  setLineNumber(16);    // compilenode array
  var array6262 = new PrimitiveGraceList([]);
  var var_output = array6262;
  setLineNumber(1);    // compilenode method
  var func6263 = function(argcv) {    // method output
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genjs");
    // output is a simple accessor - elide try ... catch
    setLineNumber(16);    // compilenode identifier
    return var_output;
  };
  func6263.paramCounts = [0];
  this.methods["output"] = func6263;
  func6263.definitionLine = 1;
  func6263.definitionModule = "genjs";
  setLineNumber(1);    // compilenode method
  var func6264 = function(argcv) {    // method output:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    var_output = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func6264.paramCounts = [1];
  this.methods["output:=(1)"] = func6264;
  func6264.definitionLine = 1;
  func6264.definitionModule = "genjs";
  this.methods["output"].debug = "var";
  setLineNumber(17);    // compilenode array
  var array6265 = new PrimitiveGraceList([]);
  var var_usedvars = array6265;
  setLineNumber(1);    // compilenode method
  var func6266 = function(argcv) {    // method usedvars
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genjs");
    // usedvars is a simple accessor - elide try ... catch
    setLineNumber(17);    // compilenode identifier
    return var_usedvars;
  };
  func6266.paramCounts = [0];
  this.methods["usedvars"] = func6266;
  func6266.definitionLine = 1;
  func6266.definitionModule = "genjs";
  setLineNumber(1);    // compilenode method
  var func6267 = function(argcv) {    // method usedvars:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    var_usedvars = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func6267.paramCounts = [1];
  this.methods["usedvars:=(1)"] = func6267;
  func6267.definitionLine = 1;
  func6267.definitionModule = "genjs";
  this.methods["usedvars"].debug = "var";
  setLineNumber(18);    // compilenode array
  var array6268 = new PrimitiveGraceList([]);
  var var_declaredvars = array6268;
  setLineNumber(1);    // compilenode method
  var func6269 = function(argcv) {    // method declaredvars
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genjs");
    // declaredvars is a simple accessor - elide try ... catch
    setLineNumber(18);    // compilenode identifier
    return var_declaredvars;
  };
  func6269.paramCounts = [0];
  this.methods["declaredvars"] = func6269;
  func6269.definitionLine = 1;
  func6269.definitionModule = "genjs";
  setLineNumber(1);    // compilenode method
  var func6270 = function(argcv) {    // method declaredvars:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    var_declaredvars = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func6270.paramCounts = [1];
  this.methods["declaredvars:=(1)"] = func6270;
  func6270.definitionLine = 1;
  func6270.definitionModule = "genjs";
  this.methods["declaredvars"].debug = "var";
  setLineNumber(19);    // compilenode string
  var string6271 = new GraceString("entry");
  var var_bblock = string6271;
  setLineNumber(1);    // compilenode method
  var func6272 = function(argcv) {    // method bblock
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genjs");
    // bblock is a simple accessor - elide try ... catch
    setLineNumber(19);    // compilenode identifier
    return var_bblock;
  };
  func6272.paramCounts = [0];
  this.methods["bblock"] = func6272;
  func6272.definitionLine = 1;
  func6272.definitionModule = "genjs";
  setLineNumber(1);    // compilenode method
  var func6273 = function(argcv) {    // method bblock:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    var_bblock = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func6273.paramCounts = [1];
  this.methods["bblock:=(1)"] = func6273;
  func6273.definitionLine = 1;
  func6273.definitionModule = "genjs";
  this.methods["bblock"].debug = "var";
  setLineNumber(21);    // compilenode array
  var array6274 = new PrimitiveGraceList([]);
  var var_values = array6274;
  setLineNumber(1);    // compilenode method
  var func6275 = function(argcv) {    // method values
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genjs");
    // values is a simple accessor - elide try ... catch
    setLineNumber(21);    // compilenode identifier
    return var_values;
  };
  func6275.paramCounts = [0];
  this.methods["values"] = func6275;
  func6275.definitionLine = 1;
  func6275.definitionModule = "genjs";
  setLineNumber(1);    // compilenode method
  var func6276 = function(argcv) {    // method values:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    var_values = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func6276.paramCounts = [1];
  this.methods["values:=(1)"] = func6276;
  func6276.definitionLine = 1;
  func6276.definitionModule = "genjs";
  this.methods["values"].debug = "var";
  setLineNumber(22);    // compilenode vardec
  var var_outfile;
  setLineNumber(1);    // compilenode method
  var func6277 = function(argcv) {    // method outfile
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genjs");
    // outfile is a simple accessor - elide try ... catch
    setLineNumber(22);    // compilenode identifier
    return var_outfile;
  };
  func6277.paramCounts = [0];
  this.methods["outfile"] = func6277;
  func6277.definitionLine = 1;
  func6277.definitionModule = "genjs";
  setLineNumber(1);    // compilenode method
  var func6278 = function(argcv) {    // method outfile:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    var_outfile = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func6278.paramCounts = [1];
  this.methods["outfile:=(1)"] = func6278;
  func6278.definitionLine = 1;
  func6278.definitionModule = "genjs";
  this.methods["outfile"].debug = "var";
  setLineNumber(23);    // compilenode string
  var string6279 = new GraceString("main");
  var var_modname = string6279;
  setLineNumber(1);    // compilenode method
  var func6280 = function(argcv) {    // method modname
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genjs");
    // modname is a simple accessor - elide try ... catch
    setLineNumber(23);    // compilenode identifier
    return var_modname;
  };
  func6280.paramCounts = [0];
  this.methods["modname"] = func6280;
  func6280.definitionLine = 1;
  func6280.definitionModule = "genjs";
  setLineNumber(1);    // compilenode method
  var func6281 = function(argcv) {    // method modname:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    var_modname = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func6281.paramCounts = [1];
  this.methods["modname:=(1)"] = func6281;
  func6281.definitionLine = 1;
  func6281.definitionModule = "genjs";
  this.methods["modname"].debug = "var";
  setLineNumber(24);    // compilenode string
  var string6282 = new GraceString("build");
  var var_runmode = string6282;
  setLineNumber(1);    // compilenode method
  var func6283 = function(argcv) {    // method runmode
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genjs");
    // runmode is a simple accessor - elide try ... catch
    setLineNumber(24);    // compilenode identifier
    return var_runmode;
  };
  func6283.paramCounts = [0];
  this.methods["runmode"] = func6283;
  func6283.definitionLine = 1;
  func6283.definitionModule = "genjs";
  setLineNumber(1);    // compilenode method
  var func6284 = function(argcv) {    // method runmode:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    var_runmode = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func6284.paramCounts = [1];
  this.methods["runmode:=(1)"] = func6284;
  func6284.definitionLine = 1;
  func6284.definitionModule = "genjs";
  this.methods["runmode"].debug = "var";
  setLineNumber(25);    // compilenode string
  var string6285 = new GraceString("bc");
  var var_buildtype = string6285;
  setLineNumber(1);    // compilenode method
  var func6286 = function(argcv) {    // method buildtype
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genjs");
    // buildtype is a simple accessor - elide try ... catch
    setLineNumber(25);    // compilenode identifier
    return var_buildtype;
  };
  func6286.paramCounts = [0];
  this.methods["buildtype"] = func6286;
  func6286.definitionLine = 1;
  func6286.definitionModule = "genjs";
  setLineNumber(1);    // compilenode method
  var func6287 = function(argcv) {    // method buildtype:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    var_buildtype = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func6287.paramCounts = [1];
  this.methods["buildtype:=(1)"] = func6287;
  func6287.definitionLine = 1;
  func6287.definitionModule = "genjs";
  this.methods["buildtype"].debug = "var";
  setLineNumber(26);    // compilenode identifier
  var var_inBlock = GraceFalse;
  setLineNumber(1);    // compilenode method
  var func6288 = function(argcv) {    // method inBlock
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genjs");
    // inBlock is a simple accessor - elide try ... catch
    setLineNumber(26);    // compilenode identifier
    return var_inBlock;
  };
  func6288.paramCounts = [0];
  this.methods["inBlock"] = func6288;
  func6288.definitionLine = 1;
  func6288.definitionModule = "genjs";
  setLineNumber(1);    // compilenode method
  var func6289 = function(argcv) {    // method inBlock:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    var_inBlock = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func6289.paramCounts = [1];
  this.methods["inBlock:=(1)"] = func6289;
  func6289.definitionLine = 1;
  func6289.definitionModule = "genjs";
  this.methods["inBlock"].debug = "var";
  setLineNumber(27);    // compilenode num
  var var_compilationDepth = new GraceNum(0);
  setLineNumber(1);    // compilenode method
  var func6290 = function(argcv) {    // method compilationDepth
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genjs");
    // compilationDepth is a simple accessor - elide try ... catch
    setLineNumber(27);    // compilenode identifier
    return var_compilationDepth;
  };
  func6290.paramCounts = [0];
  this.methods["compilationDepth"] = func6290;
  func6290.definitionLine = 1;
  func6290.definitionModule = "genjs";
  setLineNumber(1);    // compilenode method
  var func6291 = function(argcv) {    // method compilationDepth:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    var_compilationDepth = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func6291.paramCounts = [1];
  this.methods["compilationDepth:=(1)"] = func6291;
  func6291.definitionLine = 1;
  func6291.definitionModule = "genjs";
  this.methods["compilationDepth"].debug = "var";
  setLineNumber(28);    // compilenode member
  // call case 5: prelude request
  var call6293 = callmethodChecked(var_prelude, "emptySet", []);
  var var_importedModules = call6293;
  setLineNumber(1);    // compilenode method
  var func6294 = function(argcv) {    // method importedModules
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genjs");
    // importedModules is a simple accessor - elide try ... catch
    setLineNumber(28);    // compilenode identifier
    return var_importedModules;
  };
  func6294.paramCounts = [0];
  this.methods["importedModules"] = func6294;
  func6294.definitionLine = 1;
  func6294.definitionModule = "genjs";
  this.methods["importedModules"].debug = "def";
  setLineNumber(29);    // compilenode member
  // call case 5: prelude request
  var call6296 = callmethodChecked(var_prelude, "emptySet", []);
  var var_topLevelTypes = call6296;
  setLineNumber(1);    // compilenode method
  var func6297 = function(argcv) {    // method topLevelTypes
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genjs");
    // topLevelTypes is a simple accessor - elide try ... catch
    setLineNumber(29);    // compilenode identifier
    return var_topLevelTypes;
  };
  func6297.paramCounts = [0];
  this.methods["topLevelTypes"] = func6297;
  func6297.definitionLine = 1;
  func6297.definitionModule = "genjs";
  this.methods["topLevelTypes"].debug = "def";
  setLineNumber(30);    // compilenode member
  // call case 6: other requests
  var call6299 = callmethodChecked(var_util, "requiredModules", []);
  var var_imports = call6299;
  setLineNumber(1);    // compilenode method
  var func6300 = function(argcv) {    // method imports
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genjs");
    // imports is a simple accessor - elide try ... catch
    setLineNumber(30);    // compilenode identifier
    return var_imports;
  };
  func6300.paramCounts = [0];
  this.methods["imports"] = func6300;
  func6300.definitionLine = 1;
  func6300.definitionModule = "genjs";
  this.methods["imports"].debug = "def";
  setLineNumber(31);    // compilenode identifier
  var var_debugMode = GraceFalse;
  setLineNumber(1);    // compilenode method
  var func6301 = function(argcv) {    // method debugMode
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genjs");
    // debugMode is a simple accessor - elide try ... catch
    setLineNumber(31);    // compilenode identifier
    return var_debugMode;
  };
  func6301.paramCounts = [0];
  this.methods["debugMode"] = func6301;
  func6301.definitionLine = 1;
  func6301.definitionModule = "genjs";
  setLineNumber(1);    // compilenode method
  var func6302 = function(argcv) {    // method debugMode:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    var_debugMode = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func6302.paramCounts = [1];
  this.methods["debugMode:=(1)"] = func6302;
  func6302.definitionLine = 1;
  func6302.definitionModule = "genjs";
  this.methods["debugMode"].debug = "var";
  setLineNumber(32);    // compilenode num
  var var_priorLineSeen = new GraceNum(0);
  setLineNumber(1);    // compilenode method
  var func6303 = function(argcv) {    // method priorLineSeen
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genjs");
    // priorLineSeen is a simple accessor - elide try ... catch
    setLineNumber(32);    // compilenode identifier
    return var_priorLineSeen;
  };
  func6303.paramCounts = [0];
  this.methods["priorLineSeen"] = func6303;
  func6303.definitionLine = 1;
  func6303.definitionModule = "genjs";
  setLineNumber(1);    // compilenode method
  var func6304 = function(argcv) {    // method priorLineSeen:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    var_priorLineSeen = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func6304.paramCounts = [1];
  this.methods["priorLineSeen:=(1)"] = func6304;
  func6304.definitionLine = 1;
  func6304.definitionModule = "genjs";
  this.methods["priorLineSeen"].debug = "var";
  setLineNumber(33);    // compilenode string
  var string6305 = new GraceString("");
  var var_priorLineComment = string6305;
  setLineNumber(1);    // compilenode method
  var func6306 = function(argcv) {    // method priorLineComment
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genjs");
    // priorLineComment is a simple accessor - elide try ... catch
    setLineNumber(33);    // compilenode identifier
    return var_priorLineComment;
  };
  func6306.paramCounts = [0];
  this.methods["priorLineComment"] = func6306;
  func6306.definitionLine = 1;
  func6306.definitionModule = "genjs";
  setLineNumber(1);    // compilenode method
  var func6307 = function(argcv) {    // method priorLineComment:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    var_priorLineComment = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func6307.paramCounts = [1];
  this.methods["priorLineComment:=(1)"] = func6307;
  func6307.definitionLine = 1;
  func6307.definitionModule = "genjs";
  this.methods["priorLineComment"].debug = "var";
  setLineNumber(34);    // compilenode num
  var var_priorLineEmitted = new GraceNum(0);
  setLineNumber(1);    // compilenode method
  var func6308 = function(argcv) {    // method priorLineEmitted
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genjs");
    // priorLineEmitted is a simple accessor - elide try ... catch
    setLineNumber(34);    // compilenode identifier
    return var_priorLineEmitted;
  };
  func6308.paramCounts = [0];
  this.methods["priorLineEmitted"] = func6308;
  func6308.definitionLine = 1;
  func6308.definitionModule = "genjs";
  setLineNumber(1);    // compilenode method
  var func6309 = function(argcv) {    // method priorLineEmitted:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    var_priorLineEmitted = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func6309.paramCounts = [1];
  this.methods["priorLineEmitted:=(1)"] = func6309;
  func6309.definitionLine = 1;
  func6309.definitionModule = "genjs";
  this.methods["priorLineEmitted"].debug = "var";
  setLineNumber(35);    // compilenode identifier
  var var_emitTypeChecks = GraceTrue;
  setLineNumber(1);    // compilenode method
  var func6310 = function(argcv) {    // method emitTypeChecks
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genjs");
    // emitTypeChecks is a simple accessor - elide try ... catch
    setLineNumber(35);    // compilenode identifier
    return var_emitTypeChecks;
  };
  func6310.paramCounts = [0];
  this.methods["emitTypeChecks"] = func6310;
  func6310.definitionLine = 1;
  func6310.definitionModule = "genjs";
  setLineNumber(1);    // compilenode method
  var func6311 = function(argcv) {    // method emitTypeChecks:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    var_emitTypeChecks = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func6311.paramCounts = [1];
  this.methods["emitTypeChecks:=(1)"] = func6311;
  func6311.definitionLine = 1;
  func6311.definitionModule = "genjs";
  this.methods["emitTypeChecks"].debug = "var";
  setLineNumber(36);    // compilenode identifier
  var var_emitUndefinedChecks = GraceTrue;
  setLineNumber(1);    // compilenode method
  var func6312 = function(argcv) {    // method emitUndefinedChecks
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genjs");
    // emitUndefinedChecks is a simple accessor - elide try ... catch
    setLineNumber(36);    // compilenode identifier
    return var_emitUndefinedChecks;
  };
  func6312.paramCounts = [0];
  this.methods["emitUndefinedChecks"] = func6312;
  func6312.definitionLine = 1;
  func6312.definitionModule = "genjs";
  setLineNumber(1);    // compilenode method
  var func6313 = function(argcv) {    // method emitUndefinedChecks:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    var_emitUndefinedChecks = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func6313.paramCounts = [1];
  this.methods["emitUndefinedChecks:=(1)"] = func6313;
  func6313.definitionLine = 1;
  func6313.definitionModule = "genjs";
  this.methods["emitUndefinedChecks"].debug = "var";
  setLineNumber(37);    // compilenode identifier
  var var_emitArgChecks = GraceTrue;
  setLineNumber(1);    // compilenode method
  var func6314 = function(argcv) {    // method emitArgChecks
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genjs");
    // emitArgChecks is a simple accessor - elide try ... catch
    setLineNumber(37);    // compilenode identifier
    return var_emitArgChecks;
  };
  func6314.paramCounts = [0];
  this.methods["emitArgChecks"] = func6314;
  func6314.definitionLine = 1;
  func6314.definitionModule = "genjs";
  setLineNumber(1);    // compilenode method
  var func6315 = function(argcv) {    // method emitArgChecks:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    var_emitArgChecks = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func6315.paramCounts = [1];
  this.methods["emitArgChecks:=(1)"] = func6315;
  func6315.definitionLine = 1;
  func6315.definitionModule = "genjs";
  this.methods["emitArgChecks"].debug = "var";
  setLineNumber(38);    // compilenode identifier
  var var_emitPositions = GraceTrue;
  setLineNumber(1);    // compilenode method
  var func6316 = function(argcv) {    // method emitPositions
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genjs");
    // emitPositions is a simple accessor - elide try ... catch
    setLineNumber(38);    // compilenode identifier
    return var_emitPositions;
  };
  func6316.paramCounts = [0];
  this.methods["emitPositions"] = func6316;
  func6316.definitionLine = 1;
  func6316.definitionModule = "genjs";
  setLineNumber(1);    // compilenode method
  var func6317 = function(argcv) {    // method emitPositions:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    var_emitPositions = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func6317.paramCounts = [1];
  this.methods["emitPositions:=(1)"] = func6317;
  func6317.definitionLine = 1;
  func6317.definitionModule = "genjs";
  this.methods["emitPositions"].debug = "var";
  setLineNumber(39);    // compilenode string
  var string6318 = new GraceString("callmethodChecked");
  var var_requestCall = string6318;
  setLineNumber(1);    // compilenode method
  var func6319 = function(argcv) {    // method requestCall
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genjs");
    // requestCall is a simple accessor - elide try ... catch
    setLineNumber(39);    // compilenode identifier
    return var_requestCall;
  };
  func6319.paramCounts = [0];
  this.methods["requestCall"] = func6319;
  func6319.definitionLine = 1;
  func6319.definitionModule = "genjs";
  setLineNumber(1);    // compilenode method
  var func6320 = function(argcv) {    // method requestCall:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    var_requestCall = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func6320.paramCounts = [1];
  this.methods["requestCall:=(1)"] = func6320;
  func6320.definitionLine = 1;
  func6320.definitionModule = "genjs";
  this.methods["requestCall"].debug = "var";
  setLineNumber(40);    // compilenode string
  var string6321 = new GraceString("Lineup");
  var var_bracketConstructor = string6321;
  setLineNumber(1);    // compilenode method
  var func6322 = function(argcv) {    // method bracketConstructor
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genjs");
    // bracketConstructor is a simple accessor - elide try ... catch
    setLineNumber(40);    // compilenode identifier
    return var_bracketConstructor;
  };
  func6322.paramCounts = [0];
  this.methods["bracketConstructor"] = func6322;
  func6322.definitionLine = 1;
  func6322.definitionModule = "genjs";
  setLineNumber(1);    // compilenode method
  var func6323 = function(argcv) {    // method bracketConstructor:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genjs");
    var_bracketConstructor = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func6323.paramCounts = [1];
  this.methods["bracketConstructor:=(1)"] = func6323;
  func6323.definitionLine = 1;
  func6323.definitionModule = "genjs";
  this.methods["bracketConstructor"].debug = "var";
  return this;
}
gracecode_genjs.imports = ['ast', 'errormessages', 'io', 'mirrors', 'sys', 'unixFilePath', 'util', 'xmodule'];
if (typeof gctCache !== "undefined")
  gctCache['genjs'] = "classes:\nconfidential:\nfresh-methods:\nmodules:\n ast\n errormessages\n identifierKinds\n io\n mirrors\n sys\n unixFilePath\n util\n xmodule\npath:\n genjs\npublic:\n assembleArguments(1)\n basename(1)\n beginblock(1)\n compile(5)\n compileArguments(2)\n compileInherits(1)in(2)\n compileNativeCode(1)\n compileOtherRequest(2)\n compileOuterRequest(2)\n compilePreludeRequest(2)\n compilePrint(1)\n compileSelfOuterRequest(2)\n compileSelfRequest(2)\n compileSuper(2)\n compileSuperRequest(2)\n compileTrait(1)in(2)\n compilearray(1)\n compilebind(1)\n compileblock(1)\n compilecall(1)\n compiledefdec(1)\n compiledialect(1)\n compilefreshmethod(2)\n compileidentifier(1)\n compileif(1)\n compileimport(1)\n compilematchcase(1)\n compilemember(1)\n compilemethod(2)\n compilemethodtypes(2)\n compilenode(1)\n compileobjdefdec(3)\n compileobject(3)\n compileobjouter(2)\n compileobjtype(3)\n compileobjvardec(3)\n compileop(1)\n compilereturn(1)\n compiletrycatch(1)\n compiletypedec(1)\n compiletypeliteral(1)\n compilevardec(1)\n decreaseindent\n escapeident(1)\n escapestring(1)\n forceLineNumber(1)comment(1)\n formatModname(1)\n increaseindent\n noteLineNumber(1)comment(1)\n out(1)\n outUnnumbered(1)\n partl(1)\n runJsCode(2)\n varf(1)\ntypes:\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["genjs"] = [
    "#pragma ExtendedLineups",
    "import \"io\" as io",
    "import \"sys\" as sys",
    "import \"ast\" as ast",
    "import \"util\" as util",
    "import \"unixFilePath\" as unixFilePath",
    "import \"xmodule\" as xmodule",
    "import \"mirrors\" as mirrors",
    "import \"errormessages\" as errormessages",
    "",
    "var indent := \"\"",
    "var verbosity := 30",
    "var pad1 := 1",
    "var auto_count := 0",
    "var constants := []",
    "var output := []",
    "var usedvars := []",
    "var declaredvars := []",
    "var bblock := \"entry\"",
    "",
    "var values := []",
    "var outfile",
    "var modname := \"main\"",
    "var runmode := \"build\"",
    "var buildtype := \"bc\"",
    "var inBlock := false",
    "var compilationDepth := 0",
    "def importedModules = emptySet",
    "def topLevelTypes = emptySet",
    "def imports = util.requiredModules",
    "var debugMode := false",
    "var priorLineSeen := 0",
    "var priorLineComment := \"\"",
    "var priorLineEmitted := 0",
    "var emitTypeChecks := true",
    "var emitUndefinedChecks := true",
    "var emitArgChecks := true",
    "var emitPositions := true",
    "var requestCall := \"callmethodChecked\"",
    "var bracketConstructor := \"Lineup\"",
    "",
    "method increaseindent {",
    "    indent := indent ++ \"  \"",
    "}",
    "",
    "method decreaseindent {",
    "    if(indent.size <= 2) then {",
    "        indent := \"\"",
    "    } else {",
    "        indent := indent.substringFrom(1)to(indent.size - 2)",
    "    }",
    "}",
    "",
    "method formatModname(name) {",
    "    \"gracecode_\" ++ escapeident (basename(name))",
    "}",
    "",
    "method basename(filepath) {",
    "    var bnm := \"\"",
    "    for (filepath) do {c->",
    "        if (c == \"/\") then {",
    "            bnm := \"\"",
    "        } else {",
    "            bnm := bnm ++ c",
    "        }",
    "    }",
    "    bnm",
    "}",
    "",
    "method noteLineNumber(n)comment(c) {",
    "    // remember the current line number, so that it can be generated if needed",
    "    priorLineSeen := n",
    "    priorLineComment := c",
    "}",
    "",
    "method forceLineNumber(n)comment(c) {",
    "    // force the generation of code that sets the line number.  ",
    "    // Used at the start of a method",
    "    noteLineNumber(n)comment(c)",
    "    if (emitPositions) then {",
    "        output.push \"{indent}setLineNumber({priorLineSeen});    // {priorLineComment}\"",
    "    }",
    "    priorLineEmitted := priorLineSeen",
    "}",
    "",
    "method out(s) {",
    "    // output code, but first output code to set the line number",
    "    if (emitPositions && (priorLineSeen != priorLineEmitted)) then {",
    "        output.push \"{indent}setLineNumber({priorLineSeen});    // {priorLineComment}\"",
    "        priorLineEmitted := priorLineSeen",
    "    }",
    "    output.push(indent ++ s)",
    "    return done",
    "}",
    "",
    "method outUnnumbered(s) {",
    "    // output code that does not correspond to any source line",
    "    output.push(indent ++ s)",
    "}",
    "",
    "method escapeident(vn) {",
    "    var nm := \"\"",
    "    for (vn) do {c->",
    "        var o := c.ord",
    "        if (((o >= 97 ) && (o <= 122)) || ((o >= 65) && (o <= 90))",
    "            || ((o >= 48) && (o <= 57))) then {",
    "            nm := nm ++ c",
    "        } else {",
    "            nm := nm ++ \"__\" ++ o ++ \"__\"",
    "        }",
    "    }",
    "    nm",
    "}",
    "method escapestring(s) {",
    "    var os := \"\"",
    "    for (s) do {c->",
    "        if (c == \"\\\"\") then {",
    "            os := os ++ \"\\\\\\\"\"",
    "        } elseif { c == \"\\\\\" } then {",
    "            os := os ++ \"\\\\\\\\\"",
    "        } elseif { c == \"\\n\" } then {",
    "            os := os ++ \"\\\\n\"",
    "        } elseif { (c.ord < 32) || (c.ord > 126) } then {",
    "            var uh := util.hex(c.ord)",
    "            while {uh.size < 4} do {",
    "                uh := \"0\" ++ uh",
    "            }",
    "            os := os ++ \"\\\\u\" ++ uh",
    "        } else {",
    "            os := os ++ c",
    "        }",
    "    }",
    "    os",
    "}",
    "method varf(vn) {",
    "    \"var_\" ++ escapeident(vn)",
    "}",
    "method beginblock(s) {",
    "    bblock := \"%\" ++ s",
    "    out(s ++ \":\")",
    "}",
    "method compilearray(o) {",
    "    var myc := auto_count",
    "    auto_count := auto_count + 1",
    "    var r",
    "    var vals := []",
    "    for (o.value) do {a ->",
    "        r := compilenode(a)",
    "        vals.push(r)",
    "    }",
    "    out \"var array{myc} = new {bracketConstructor}({vals});\"",
    "    o.register := \"array\" ++ myc",
    "}",
    "method compilemember(o) {",
    "    // Member in value position is actually a nullary method call.",
    "    o.generics := false     // because they are compiled wrongly",
    "    compilecall(o)",
    "}",
    "method compileobjouter(selfr, outerRef) {",
    "    var myc := auto_count",
    "    auto_count := auto_count + 1",
    "    var nm := escapestring(\"outer\")",
    "    var nmi := escapeident(\"outer\")",
    "    def emod = escapeident(modname)",
    "    out(\"{selfr}.outer = {outerRef};\")",
    "    out(\"var reader_{emod}_{nmi}{myc} = function() \\{\")",
    "    out(\"  return this.outer;\")",
    "    out(\"\\};\")",
    "    out(\"{selfr}.methods[\\\"{nm}\\\"] = reader_{emod}_{nmi}{myc};\")",
    "}",
    "method compileobjtype(o, selfr, pos) {",
    "    var val := \"undefined\"",
    "    var myc := auto_count",
    "    auto_count := auto_count + 1",
    "    var nm := escapestring(o.value)",
    "    var nmi := escapeident(o.value)",
    "    def emod = escapeident(modname)",
    "    o.anonymous := true",
    "    val := compilenode(o)",
    "    out(selfr ++ \".data[\\\"\" ++ nm ++ \"\\\"] = \" ++ val ++ \";\")",
    "    out(\"    var reader_{emod}_{nmi}{myc} = function() \\{\")",
    "    out(\"    return this.data[\\\"\" ++ nm ++ \"\\\"];\")",
    "    out(\"  \\};\")",
    "    out(\"  reader_{emod}_{nmi}{myc}.def = true;\")",
    "    var isReadable := false",
    "    for (o.annotations) do {ann->",
    "        if ((ann.kind == \"identifier\") && ",
    "            {ann.value == \"confidential\"}) then {",
    "            out \"  reader_{emod}_{nmi}{myc}.confidential = true;\"",
    "        }",
    "    }",
    "    out \"{selfr}.methods[\\\"{nm}\\\"] = reader_{emod}_{nmi}{myc};\"",
    "}",
    "method compileobjdefdec(o, selfr, pos) {",
    "    var val := \"undefined\"",
    "    if (false != o.value) then {",
    "        if (o.value.kind == \"object\") then {",
    "            compileobject(o.value, selfr, false)",
    "            val := o.value.register",
    "        } else {",
    "            val := compilenode(o.value)",
    "        }",
    "    }",
    "    var myc := auto_count",
    "    auto_count := auto_count + 1",
    "    var nm := escapestring(o.name.value)",
    "    var nmi := escapeident(o.name.value)",
    "    def emod = escapeident(modname)",
    "    out \"{selfr}.data[\\\"{nm}\\\"] = {val};\"",
    "    out \"var reader_{emod}_{nmi}{myc} = function() \\{\"",
    "    out \"  return this.data[\\\"{nm}\\\"];\"",
    "    out \"\\};\"",
    "    out \"reader_{emod}_{nmi}{myc}.def = true;\"",
    "    if (o.isReadable.not) then {",
    "        out \"reader_{emod}_{nmi}{myc}.confidential = true;\"",
    "    }",
    "    out \"{selfr}.methods[\\\"{nm}\\\"] = reader_{emod}_{nmi}{myc};\"",
    "    if (ast.findAnnotation(o, \"parent\")) then {",
    "        out \"  {selfr}.superobj = {val};\"",
    "    }",
    "    if (emitTypeChecks) then {",
    "        if (o.dtype != false) then {",
    "            if (o.dtype.value != \"Unknown\") then {",
    "                noteLineNumber(o.line)comment(\"typecheck in compileobjdefdec\")",
    "                out \"if (!Grace_isTrue(callmethod({compilenode(o.dtype)}, \\\"match(1)\\\", [1], {val})))\"",
    "                out \"  throw new GraceExceptionPacket(TypeErrorObject,\"",
    "                out \"      new GraceString(\\\"value of def '{o.name.value}' is not of type {o.dtype.toGrace(0)}\\\"));\"",
    "            }",
    "        }",
    "    }",
    "}",
    "method compileobjvardec(o, selfr, pos) {",
    "    var val := \"undefined\"",
    "    if (false != o.value) then {",
    "        val := compilenode(o.value)",
    "    }",
    "    var myc := auto_count",
    "    auto_count := auto_count + 1",
    "    var nm := escapestring(o.name.value)",
    "    var nmi := escapeident(o.name.value)",
    "    def emod = escapeident(modname)",
    "    out(selfr ++ \".data[\\\"\" ++ nm ++ \"\\\"] = \" ++ val ++ \";\")",
    "    out(\"var reader_\" ++ emod ++ \"_\" ++ nmi ++ myc ++ \" = function() \\{\")",
    "    out(\"  return this.data[\\\"\" ++ nm ++ \"\\\"];\")",
    "    out(\"\\};\")",
    "    out(selfr ++ \".methods[\\\"\" ++ nm ++ \"\\\"] = reader_\" ++ emod ++",
    "        \"_\" ++ nmi ++ myc ++ \";\")",
    "    out(selfr ++ \".data[\\\"\" ++ nm ++ \"\\\"] = \" ++ val ++ \";\")",
    "    out(\"var writer_\" ++ emod ++ \"_\" ++ nmi ++ myc ++ \" = function(argcv, o) \\{\")",
    "    out(\"  this.data[\\\"\" ++ nm ++ \"\\\"] = o;\")",
    "    out \"  return GraceDone;\"",
    "    out(\"\\};\")",
    "    out(selfr ++ \".methods[\\\"\" ++ nm ++ \":=(1)\\\"] = writer_\" ++ emod ++",
    "        \"_\" ++ nmi ++ myc ++ \";\")",
    "    if (o.isReadable.not) then {",
    "        out(\"reader_{emod}_{nmi}{myc}.confidential = true;\")",
    "    }",
    "    if (o.isWritable.not) then {",
    "        out(\"writer_{emod}_{nmi}{myc}.confidential = true;\")",
    "    }",
    "    if (emitTypeChecks) then {",
    "        if (o.dtype != false) then {",
    "            if (o.dtype.value != \"Unknown\") then {",
    "                if (val == \"undefined\") then {",
    "                    return true",
    "                }",
    "                noteLineNumber(o.line)comment(\"typecheck in compileobjvardec\")",
    "                out \"if (!Grace_isTrue(callmethod({compilenode(o.dtype)}, \\\"match(1)\\\", [1], {val})))\"",
    "                out \"  throw new GraceExceptionPacket(TypeErrorObject,\"",
    "                out \"      new GraceString(\\\"initial value of var '{o.name.value}' is not of type {o.dtype.toGrace(0)}\\\"));\"",
    "            }",
    "        }",
    "    }",
    "}",
    "method compileobject(o, outerRef, inheritingObject) {",
    "    var origInBlock := inBlock",
    "    inBlock := false",
    "    var myc := auto_count",
    "    auto_count := auto_count + 1",
    "    def selfr = \"obj\" ++ myc",
    "    o.register := selfr",
    "    def superConstructor =",
    "        if (o.inTrait) then { ",
    "            \"GraceTrait\"",
    "        } elseif {false == o.superclass} then {",
    "            \"GraceObject\"",
    "        } else {",
    "            \"null\"  // inheritance will be compiled later, when the inherits node is found",
    "        }",
    "    out \"var {selfr} = Grace_allocObject({superConstructor}, \\\"{o.name}\\\");\"",
    "    out \"{selfr}.definitionModule = \\\"{modname}\\\";\"",
    "    out \"{selfr}.definitionLine = {o.line};\"",
    "    if (inheritingObject) then {",
    "        out \"var inho{myc} = inheritingObject;\"",
    "        out \"while (inho{myc}.superobj) inho{myc} = inho{myc}.superobj;\"",
    "        out \"inho{myc}.superobj = {selfr};\"",
    "        out \"{selfr}.data = inheritingObject.data;\"",
    "        out \"if (inheritingObject.hasOwnProperty('_value'))\"",
    "        out \"  {selfr}._value = inheritingObject._value;\"",
    "    }",
    "    compileobjouter(selfr, outerRef)",
    "    out(\"var obj_init_{myc} = function() \\{\")",
    "    increaseindent",
    "    out(\"var origSuperDepth = superDepth;\")",
    "    out(\"superDepth = {selfr};\")",
    "    var pos := 0",
    "    for (o.value) do { e ->",
    "        if (e.kind == \"method\") then {",
    "            compilemethod(e, selfr)",
    "        }",
    "    }",
    "        ",
    "    // compile inherits",
    "    if (false != o.superclass) then {",
    "        compileInherits(o.superclass) in (o, selfr)",
    "    }",
    "    ",
    "    // compile traits",
    "    o.usedTraits.do { t -> compileInherits(t) in (o, selfr) }",
    "",
    "    // compile body",
    "    o.value.do { e ->",
    "        if (e.kind == \"method\") then {",
    "        } elseif { e.kind == \"vardec\" } then {",
    "            compileobjvardec(e, selfr, pos)",
    "            out(\"{selfr}.mutable = true;\")",
    "            pos := pos + 1",
    "        } elseif { e.kind == \"defdec\" } then {",
    "            compileobjdefdec(e, selfr, pos)",
    "            pos := pos + 1",
    "        } elseif { e.kind == \"typedec\" } then {",
    "            compiletypedec(e)",
    "            pos := pos + 1",
    "        } elseif { e.kind == \"object\" } then {",
    "            compileobject(e, selfr, false)",
    "        } else {",
    "            compilenode(e)",
    "        }",
    "    }",
    "    out \"superDepth = origSuperDepth;\"",
    "    decreaseindent",
    "    out \"\\};\"",
    "    if (inheritingObject) then {",
    "        out \"obj_init_{myc}.apply(inheritingObject, []);\"",
    "    } else {",
    "        out \"obj_init_{myc}.apply({selfr}, []);\"",
    "    }",
    "    inBlock := origInBlock",
    "}",
    "method compileblock(o) {",
    "    var origInBlock := inBlock",
    "    inBlock := true",
    "    def myc = auto_count",
    "    def nParams = o.params.size",
    "    auto_count := auto_count + 1",
    "    out \"var block{myc} = new GraceBlock(this, {o.line}, {nParams});\"",
    "    if (false != o.matchingPattern) then {",
    "        def pat = compilenode(o.matchingPattern)",
    "        out \"block{myc}.pattern = {pat};\"",
    "    }",
    "    var paramList := \"\"",
    "    var paramTypes :=  [ ]",
    "    var paramsAreTyped := false",
    "    var first := true",
    "    for (o.params) do { each ->",
    "        def dType = each.decType",
    "        paramTypes.push(compilenode(dType))",
    "        if (dType != ast.unknownType) then {",
    "            paramsAreTyped := true",
    "        }",
    "        if (first) then {",
    "            paramList := varf(each.value)",
    "            first := false",
    "        } else {",
    "            paramList := paramList ++ \", \" ++ varf(each.value)",
    "        }",
    "    }",
    "    if (paramsAreTyped && emitTypeChecks) then {",
    "        out \"block{myc}.paramTypes = {paramTypes};\"",
    "    }",
    "    out \"block{myc}.real = function({paramList}) \\{\"",
    "    increaseindent",
    "    var ret := \"GraceDone\"",
    "    for (o.body) do {l->",
    "        ret := compilenode(l)",
    "    }",
    "    out(\"return \" ++ ret ++ \";\")",
    "    decreaseindent",
    "    out(\"\\};\")",
    "    o.register := \"block\" ++ myc",
    "    inBlock := origInBlock",
    "}",
    "method compiletypedec(o) {",
    "    def myc = auto_count",
    "    def enclosing = o.scope.parent",
    "    auto_count := auto_count + 1",
    "    def tName = o.name.value",
    "    out \"// Type decl {tName}\"",
    "    declaredvars.push(escapeident(tName))",
    "    if (o.value.kind == \"typeliteral\") then {o.value.name := tName }",
    "    def val = compilenode(o.value)",
    "    out \"var {varf(tName)} = {val};\"",
    "    o.register := \"type{myc}\"",
    "    if (compilationDepth == 1) then {",
    "        compilenode(ast.methodNode.new([ast.signaturePart.partName(o.nameString) scope(enclosing)],",
    "            [o.name], ast.typeType) scope(enclosing))",
    "    }",
    "}",
    "method compiletypeliteral(o) {",
    "    def myc = auto_count",
    "    auto_count := auto_count + 1",
    "    def escName = escapestring(o.value)",
    "    out(\"//   Type literal \")",
    "    out(\"var type{myc} = new GraceType(\\\"{escName}\\\");\")",
    "    for (o.methods) do {meth->",
    "        def mnm = escapestring(meth.nameString)",
    "        out(\"type{myc}.typeMethods.push(\\\"{mnm}\\\");\")",
    "    }",
    "    // TODO: types in the type literal",
    "    o.register := \"type{myc}\"",
    "}",
    "method compilemethod(o, selfobj) {",
    "    var oldusedvars := usedvars",
    "    var olddeclaredvars := declaredvars",
    "    def paramCounts =  [ ]",
    "    for (o.signature) do { part ->",
    "        paramCounts.push(part.params.size)",
    "    }",
    "    def isSimpleAccessor = (o.body.size == 1) && {o.body.first.isIdentifier}",
    "    usedvars := []",
    "    declaredvars := []",
    "    var myc := auto_count",
    "    auto_count := auto_count + 1",
    "    var name := escapestring(o.nameString)",
    "    var nm := name ++ myc",
    "    var closurevars := []",
    "    var haveTypedParams := false",
    "    for (o.signature) do { part ->",
    "        for (part.params) do {p->",
    "            if (p.dtype != false) then {",
    "                if ((p.dtype.value != \"Unknown\")",
    "                    && ((p.dtype.kind == \"identifier\")",
    "                        || (p.dtype.kind == \"typeliteral\"))) then {",
    "                    haveTypedParams := true",
    "                }",
    "            }",
    "        }",
    "    }",
    "    out(\"var func\" ++ myc ++ \" = function(argcv) \\{    // method \" ++ o.canonicalName)",
    "    increaseindent",
    "    out(\"var returnTarget = invocationCount;\")",
    "    out(\"invocationCount++;\")",
    "    out(\"var curarg = 1;\")",
    "    if (debugMode && isSimpleAccessor.not) then {",
    "        out \"var myframe = new StackFrame(\\\"{name}\\\");\"",
    "    }",
    "    for (o.signature.indices) do { partnr ->",
    "        var part := o.signature.at(partnr)",
    "        for (part.params) do { p ->",
    "            out \"var {varf(p.value)} = arguments[curarg];\"",
    "            out \"curarg++;\"",
    "            if (debugMode && isSimpleAccessor.not) then {",
    "                out \"myframe.addVar(\\\"{escapestring(p.value)}\\\",\"",
    "                out \"  function() \\{return {varf(p.value)};});\"",
    "            }",
    "        }",
    "    }",
    "    if (o.typeParams != false) then {",
    "        def sz = o.signature.size",
    "        out \"// Start type arguments\"",
    "        o.typeParams.do {g->",
    "            out \"var {varf(g.value)} = var_Unknown;\"",
    "        }",
    "        out \"if (argcv.length == {1 + sz}) \\{\"",
    "        if (emitArgChecks) then {",
    "            out \"  if (argcv[{sz}] !== {o.typeParams.size}) \\{\"",
    "            out \"    throw new GraceExceptionPacket(ProgrammingErrorObject, \"",
    "            out \"        new GraceString(\\\"wrong number of type arguments for {o.canonicalName}\\\"));\"",
    "            out \"  \\}\"",
    "        }",
    "        o.typeParams.do { g ->",
    "            out(\"  {varf(g.value)} = arguments[curarg++];\")",
    "        }",
    "        out \"\\}\"",
    "        out \"// End type arguments\"",
    "    }",
    "    if (emitTypeChecks && o.needsArgChecks) then {",
    "        out \"// Start argument checking\"",
    "        out \"curarg = 1;\"",
    "        for (o.signature.indices) do { partnr ->",
    "            var part := o.signature.at(partnr)",
    "            var paramnr := 0",
    "            for (part.params) do { p ->",
    "                paramnr := paramnr + 1",
    "                if (emitTypeChecks && (p.dtype != false)) then {",
    "                    noteLineNumber(o.line)comment(\"argument check in compilemethod\")",
    "                    def dtype = compilenode(p.dtype)",
    "                    out(\"if (!Grace_isTrue(callmethod({dtype}, \\\"match(1)\\\",\" ++",
    "                        \"  [1], arguments[curarg])))\")",
    "                    out \"    throw new GraceExceptionPacket(TypeErrorObject,\" ",
    "                    out \"        new GraceString(\\\"argument {paramnr} in {part.name} (arg list {partnr}), which corresponds to parameter {p.value}, does not have \\\" + \"",
    "                    out \"            callmethod({dtype}, \\\"asString\\\", [0])._value + \\\".\\\"));\"",
    "                }",
    "                out(\"curarg++;\")",
    "            }",
    "        }",
    "        out \"// End argument checking\"",
    "    }",
    "",
    "    // Setting the location is deliberately delayed to this point, so that",
    "    // argument checking errors are reported as errors at the request site",
    "    // --- which is where the error happens.",
    "    out(\"setModuleName(\\\"{modname}\\\");\")",
    "    if (isSimpleAccessor) then {",
    "        out \"// {o.canonicalName} is a simple accessor - elide try ... catch\"",
    "        def ret = compilenode(o.body.at(1))",
    "        out(\"return \" ++ ret ++ \";\")",
    "    } else {",
    "        if (debugMode) then {",
    "            out \"stackFrames.push(myframe);\"",
    "            out(\"try \\{\")",
    "            increaseindent",
    "        }",
    "        var ret := \"GraceDone\"",
    "        var lastLine := o.line",
    "        for (o.body) do { l ->",
    "            ret := compilenode(l)",
    "            lastLine := l.line",
    "        }",
    "        if (ret != \"undefined\") then {",
    "            if (emitTypeChecks && (o.dtype != false)) then {",
    "                def dtype = compilenode(o.dtype)",
    "                noteLineNumber (lastLine) comment \"return value\"",
    "                out \"if (!Grace_isTrue(callmethod({dtype}, \\\"match(1)\\\", [1], {ret})))\"",
    "                out \"    throw new GraceExceptionPacket(TypeErrorObject,\" ",
    "                out \"        new GraceString(\\\"result of method {o.canonicalName} does not have \\\" + \"",
    "                out \"            callmethod({dtype}, \\\"asString\\\", [0])._value + \\\".\\\"));\"",
    "            }",
    "            out(\"return \" ++ ret ++ \";\")",
    "        }",
    "        if (debugMode) then {",
    "            decreaseindent",
    "            out \"\\} finally \\{\"",
    "            out \"    stackFrames.pop();\"",
    "            out \"\\}\"",
    "        }",
    "    }",
    "    decreaseindent",
    "    out \"\\};\"",
    "    usedvars := oldusedvars",
    "    declaredvars := olddeclaredvars",
    "    if (haveTypedParams) then {",
    "        compilemethodtypes(\"func{myc}\", o)",
    "    }",
    "    if (o.isConfidential) then {",
    "        out \"func{myc}.confidential = true;\"",
    "    }",
    "    out \"func{myc}.paramCounts = {paramCounts};\"",
    "    out(\"{selfobj}.methods[\\\"{name}\\\"] = func{myc};\")",
    "    out \"func{myc}.definitionLine = {o.line};\"",
    "    out \"func{myc}.definitionModule = \\\"{modname}\\\";\"",
    "    o.register := \"func{myc}\"",
    "    if (o.isFresh) then {",
    "        increaseindent",
    "        compilefreshmethod(o, selfobj)",
    "        decreaseindent",
    "    }",
    "}",
    "method compilefreshmethod(o, selfobj) {",
    "    def paramCounts =  [ ]",
    "    for (o.signature) do { part ->",
    "        paramCounts.push(part.params.size)",
    "    }",
    "    var myc := auto_count",
    "    auto_count := auto_count + 1",
    "    def name = escapestring(o.nameString ++ \"$object(1)\")",
    "    var nm := name ++ myc",
    "    var haveTypedParams := false",
    "    for (o.signature) do { part ->",
    "        for (part.params) do {p->",
    "            if (p.dtype != false) then {",
    "                if ((p.dtype.value != \"Unknown\")",
    "                    && ((p.dtype.kind == \"identifier\")",
    "                        || (p.dtype.kind == \"typeliteral\"))) then {",
    "                    haveTypedParams := true",
    "                }",
    "            }",
    "        }",
    "    }",
    "    out \"var func{myc} = function(argcv) \\{    // method {o.canonicalName}$object(_)\"",
    "    increaseindent",
    "    out(\"var curarg = 1;\")",
    "    for (o.signature.indices) do { partnr ->",
    "        var part := o.signature.at(partnr)",
    "        for (part.params) do { p ->",
    "            out(\"var {varf(p.value)} = arguments[curarg];\")",
    "            out(\"curarg++;\")",
    "        }",
    "    }",
    "    out \"var inheritingObject = arguments[curarg++];\"",
    "    if (o.typeParams != false) then {",
    "        def sz = o.signature.size + 1",
    "        out \"// Start type arguments\"",
    "        o.typeParams.do {g->",
    "            out \"var {varf(g.value)} = var_Unknown;\"",
    "        }",
    "        out \"if (argcv.length == {1 + sz}) \\{\"",
    "        if (emitArgChecks) then {",
    "            out \"  if (argcv[{sz}] !== {o.typeParams.size}) \\{\"",
    "            out \"    throw new GraceExceptionPacket(ProgrammingErrorObject, \"",
    "            out \"        new GraceString(\\\"wrong number of type arguments for \\{o.canonicalName}\\\"));\"",
    "            out \"  \\}\"",
    "        }",
    "        o.typeParams.do { g ->",
    "            out(\"  {varf(g.value)} = arguments[curarg++];\")",
    "        }",
    "        out \"\\}\"",
    "        out \"// End type arguments\"",
    "    }",
    "    out \"// Start argument processing\"",
    "    out \"curarg = 1;\"",
    "    for (o.signature.indices) do { partnr ->",
    "        var part := o.signature.at(partnr)",
    "        var paramnr := 0",
    "        for (part.params) do { p ->",
    "            paramnr := paramnr + 1",
    "            if (emitTypeChecks && (p.dtype != false)) then {",
    "                noteLineNumber(o.line)comment(\"argument check in compilefreshmethod\")",
    "                def dtype = compilenode(p.dtype)",
    "                out(\"if (!Grace_isTrue(callmethod({dtype}, \\\"match(1)\\\",\" ++",
    "                    \"  [1], arguments[curarg])))\")",
    "                out \"    throw new GraceExceptionPacket(TypeErrorObject,\" ",
    "                out \"        new GraceString(\\\"argument {paramnr} in {part.name} (arg list {partnr}), which corresponds to parameter {p.value}, does not have \\\" + \"",
    "                out \"            callmethod({dtype}, \\\"asString\\\", [0])._value + \\\".\\\"));\"",
    "            }",
    "            out(\"curarg++;\")",
    "        }",
    "    }",
    "    out \"// End argument processing\"",
    "",
    "    // Setting the location is deliberately delayed to this point, so that",
    "    // argument checking errors are reported as errors at the request site",
    "    // --- which is where the error happens.",
    "    out(\"setModuleName(\\\"{modname}\\\");\")",
    "    if (debugMode) then {",
    "        out \"stackFrames.push(myframe);\"",
    "    }",
    "    out(\"var returnTarget = invocationCount;\")",
    "    out(\"invocationCount++;\")",
    "    if (debugMode) then {",
    "        out(\"try \\{\")",
    "        increaseindent",
    "    }",
    "    var tailObject := false",
    "    if ((o.body.size > 0) && {o.body.last.kind == \"object\"}) then {",
    "        tailObject := o.body.pop    // remove tail object",
    "        tailObject.name := o.nameString",
    "    }",
    "    var ret := \"GraceDone\"",
    "    for (o.body) do { l ->",
    "        ret := compilenode(l)",
    "    }",
    "    if (false != tailObject) then {",
    "        o.body.push(tailObject)     // put tail object back",
    "        compileobject(tailObject, \"this\", true)",
    "        ret := tailObject.register",
    "    }",
    "    out(\"return \" ++ ret ++ \";\")",
    "    if (debugMode) then {",
    "        decreaseindent",
    "        out \"\\} finally \\{\"",
    "        out \"    stackFrames.pop();\"",
    "        out \"\\}\"",
    "    }",
    "    out \"\\};\"",
    "    if (haveTypedParams) then {",
    "        compilemethodtypes(\"func{myc}\", o)",
    "    }",
    "    for (o.annotations) do {ann->",
    "        if ((ann.kind == \"identifier\") && ",
    "            {ann.value == \"confidential\"}) then {",
    "            out(\"func{myc}.confidential = true;\")",
    "        }",
    "    }",
    "    out \"{selfobj}.methods[\\\"{name}\\\"] = func{myc};\"",
    "}",
    "method compilemethodtypes(func, o) {",
    "    out(\"{func}.paramTypes = [];\")",
    "    var pi := 0",
    "    for (o.signature) do { part ->",
    "        for (part.params) do {p->",
    "            // We store information for static top-level types only:",
    "            // absent information is treated as Unknown (and unchecked).",
    "            if (false != p.dtype) then {",
    "                if (((p.dtype.kind == \"identifier\") && {p.dtype.value != \"Unknown\"})",
    "                    || (p.dtype.kind == \"typeliteral\")) then {",
    "                    def typeid = escapeident(p.dtype.value)",
    "                    if (topLevelTypes.contains(typeid)) then {",
    "                        out(\"{func}.paramTypes.push([\"",
    "                            ++ \"type_{typeid}, \\\"{escapestring(p.nameString)}\\\"]);\")",
    "                    } else {",
    "                        out(\"{func}.paramTypes.push([]);\")",
    "                    }",
    "                } else {",
    "                    out(\"{func}.paramTypes.push([]);\")",
    "                }",
    "            } else {",
    "                out(\"{func}.paramTypes.push([]);\")",
    "            }",
    "            pi := pi + 1",
    "        }",
    "    }",
    "}",
    "method compileif(o) {",
    "    var myc := auto_count",
    "    auto_count := auto_count + 1",
    "    outUnnumbered \"var if{myc} = GraceDone;\"",
    "    out(\"if (Grace_isTrue(\" ++ compilenode(o.value) ++ \")) \\{\")",
    "    var tret := \"undefined\"",
    "    var fret := \"undefined\"",
    "    increaseindent",
    "    def thenList = o.thenblock.body",
    "    for (thenList) do { l->",
    "        tret := compilenode(l)",
    "    }",
    "    if (tret != \"undefined\") then {",
    "        out(\"if\" ++ myc ++ \" = \" ++ tret ++ \";\")",
    "    }",
    "    decreaseindent",
    "    def elseList = o.elseblock.body",
    "    if (elseList.size > 0) then {",
    "        out(\"\\} else \\{\")",
    "        increaseindent",
    "        for (elseList) do { l->",
    "            fret := compilenode(l)",
    "        }",
    "        if (fret != \"undefined\") then {",
    "            out(\"if\" ++ myc ++ \" = \" ++ fret ++ \";\")",
    "        }",
    "        decreaseindent",
    "    }",
    "    out(\"\\}\")",
    "    o.register := \"if\" ++ myc",
    "}",
    "method compileidentifier(o) {",
    "    var name := o.value",
    "    if (name == \"super\") then {",
    "        def sugg = errormessages.suggestion.new",
    "        sugg.replaceRange(o.linePos, o.linePos + 4)with \"self\" onLine(o.line)",
    "        errormessages.syntaxError(\"'super' can be used only to the \"",
    "                ++ \"left of the . in a method request.\")",
    "            atRange(",
    "                o.line, o.linePos, o.linePos + 4)withSuggestion(sugg)",
    "    }",
    "    if (name == \"self\") then {",
    "        o.register := \"this\"",
    "    } elseif { name == \"...\" } then {",
    "        o.register := \"ellipsis\"",
    "    } elseif { name == \"true\" } then {",
    "        o.register := \"GraceTrue\"",
    "    } elseif { name == \"false\" } then {",
    "        o.register := \"GraceFalse\"",
    "    } else {",
    "        usedvars.push(name)",
    "        o.register := varf(name)",
    "    }",
    "}",
    "method compilebind(o) {",
    "    def lhs = o.dest",
    "    if (lhs.isIdentifier) then {",
    "        def val = compilenode(o.value)",
    "        def nm = lhs.value",
    "        usedvars.push(nm)",
    "        out \"{varf(nm)} = {val};\"",
    "        o.register := \"GraceDone\"",
    "    } else {",
    "        ProgrammingError.raise \"bindNode {o} does not bind an indentifer\"",
    "    }",
    "}",
    "method compiledefdec(o) {",
    "    var nm",
    "    var snm",
    "    def currentScope = o.scope",
    "    if (o.name.kind == \"generic\") then {",
    "        snm := o.name.value.value",
    "    } else {",
    "        snm := o.name.value",
    "    }",
    "    nm := snm",
    "    if (debugMode) then {",
    "        out \"myframe.addVar(\\\"{escapestring(nm)}\\\", function() \\{return {varf(nm)}});\"",
    "    }",
    "    declaredvars.push(nm)",
    "    var val := compilenode(o.value)",
    "    out(\"var \" ++ varf(nm) ++ \" = \" ++ val ++ \";\")",
    "    if (compilationDepth == 1) then {",
    "        compilenode(ast.methodNode.new([ast.signaturePart.partName(o.nameString) scope(currentScope)],",
    "            [o.name], false) scope(currentScope))",
    "        if (ast.findAnnotation(o, \"parent\")) then {",
    "            out(\"this.superobj = {val};\")",
    "        }",
    "        out(\"this.methods[\\\"{nm}\\\"].debug = \\\"def\\\";\")",
    "    }",
    "    if (emitTypeChecks) then {",
    "        if (o.dtype != false) then {",
    "            if (o.dtype.value != \"Unknown\") then {",
    "                noteLineNumber(o.line)comment(\"compiledefdec\")",
    "                out \"if (!Grace_isTrue(callmethod({compilenode(o.dtype)}, \\\"match(1)\\\", [1], {varf(nm)})))\"",
    "                out \"  throw new GraceExceptionPacket(TypeErrorObject,\"",
    "                out \"      new GraceString(\\\"value of def '{snm}' is not of type {o.dtype.toGrace(0)}\\\"));\"",
    "            }",
    "        }",
    "    }",
    "    o.register := \"GraceDone\"",
    "}",
    "method compilevardec(o) {",
    "    var nm := o.name.value",
    "    def currentScope = o.scope",
    "    declaredvars.push(nm)",
    "    var val := o.value",
    "    if (false != val) then {",
    "        val := compilenode(val)",
    "        out(\"var \" ++ varf(nm) ++ \" = \" ++ val ++ \";\")",
    "    } else {",
    "        out(\"var \" ++ varf(nm) ++ \";\")",
    "        val := \"false\"",
    "    }",
    "    if (debugMode) then {",
    "        out \"myframe.addVar(\\\"{escapestring(nm)}\\\", function() \\{return {varf(nm)}});\"",
    "    }",
    "    if (compilationDepth == 1) then {",
    "        compilenode(ast.methodNode.new([ast.signaturePart.partName(o.nameString) scope(currentScope)],",
    "            [o.name], false) scope(currentScope))",
    "        def paramID = ast.identifierNode.new(\"_var_assign_tmp\", false)",
    "        compilenode(ast.methodNode.new(",
    "            [ast.signaturePart.partName(o.nameString ++ \":=\") params( [paramID] ) scope(currentScope)],",
    "            [ast.bindNode.new(o.name, paramID)], false)  scope(currentScope))",
    "        out(\"this.methods[\\\"{nm}\\\"].debug = \\\"var\\\";\")",
    "    }",
    "    if (emitTypeChecks) then {",
    "        if (o.dtype != false) then {",
    "            if (o.dtype.value != \"Unknown\") then {",
    "                if (val != \"false\") then {",
    "                    noteLineNumber(o.line)comment(\"compilevardec\")",
    "                    out \"if (!Grace_isTrue(callmethod({compilenode(o.dtype)}, \\\"match(1)\\\", [1], {varf(nm)})))\"",
    "                    out \"  throw new GraceExceptionPacket(TypeErrorObject,\"",
    "                    out \"      new GraceString(\\\"initial value of var '{o.name.value}' is not of type {o.dtype.toGrace(0)}\\\"));\"",
    "                }",
    "            }",
    "        }",
    "    }",
    "    o.register := \"GraceDone\"",
    "}",
    "method compiletrycatch(o) {",
    "    def myc = auto_count",
    "    auto_count := auto_count + 1",
    "    def cases = o.cases",
    "    def mainblock = compilenode(o.value)",
    "    out(\"var cases{myc} = [];\")",
    "    for (cases) do {c->",
    "        def e = compilenode(c)",
    "        out(\"cases{myc}.push({e});\")",
    "    }",
    "    var finally := \"false\"",
    "    if (false != o.finally) then {",
    "        finally := compilenode(o.finally)",
    "    }",
    "    noteLineNumber(o.line)comment(\"compiletrycatch\")",
    "    out(\"var catchres{myc} = tryCatch({mainblock},cases{myc},{finally});\")",
    "    out(\"setModuleName(\\\"{modname}\\\");\")",
    "    o.register := \"catchres\" ++ myc",
    "}",
    "method compilematchcase(o) {",
    "    def myc = auto_count",
    "    auto_count := auto_count + 1",
    "    def cases = o.cases",
    "    def matchee = compilenode(o.value)",
    "    out(\"var cases{myc} = [];\")",
    "    for (cases) do {c->",
    "        def e = compilenode(c)",
    "        out(\"cases{myc}.push({e});\")",
    "    }",
    "    var elsecase := \"false\"",
    "    if (false != o.elsecase) then {",
    "        elsecase := compilenode(o.elsecase)",
    "    }",
    "    noteLineNumber(o.line)comment(\"compilematchcase\")",
    "    out(\"var matchres{myc} = matchCase({matchee},cases{myc},{elsecase});\")",
    "    out(\"setModuleName(\\\"{modname}\\\");\")",
    "    o.register := \"matchres\" ++ myc",
    "}",
    "method compileop(o) {",
    "    var right := compilenode(o.right)",
    "    auto_count := auto_count + 1",
    "    var rnm := \"opresult\"",
    "    if (o.value == \"*\") then {",
    "        rnm := \"prod\"",
    "    }",
    "    if (o.value == \"/\") then {",
    "        rnm := \"quotient\"",
    "    }",
    "    if (o.value == \"-\") then {",
    "        rnm := \"diff\"",
    "    }",
    "    if (o.value == \"%\") then {",
    "        rnm := \"modulus\"",
    "    }",
    "    if ((o.left.kind == \"identifier\") && {o.left.value == \"super\"}) then {",
    "        out(\"var \" ++ rnm ++ auto_count ++ \" = callmethodsuper(this\"",
    "            ++ \", \\\"\" ++ escapestring(o.nameString) ++ \"\\\", [1], \" ++ right ++ \");\")",
    "    } else {",
    "        var left := compilenode(o.left)",
    "        auto_count := auto_count + 1",
    "        if (emitArgChecks) then {",
    "            out(\"var \" ++ rnm ++ auto_count ++ \" = callmethodChecked(\" ++ left",
    "                ++ \", \\\"\" ++ escapestring(o.nameString) ++ \"\\\", [1], \" ++ right ++ \");\")",
    "        } else {",
    "            out(\"var \" ++ rnm ++ auto_count ++ \" = callmethod(\" ++ left",
    "                ++ \", \\\"\" ++ escapestring(o.nameString) ++ \"\\\", [1], \" ++ right ++ \");\")",
    "        }",
    "    }",
    "    o.register := rnm ++ auto_count",
    "    auto_count := auto_count + 1",
    "}",
    "method compileArguments(o, args) {",
    "    for (o.with) do { part ->",
    "        for (part.args) do { p ->",
    "            args.push(compilenode(p))",
    "        }",
    "    }",
    "    if (false != o.generics) then {",
    "        o.generics.do {g->",
    "            args.push(compilenode(g))",
    "        }",
    "    }",
    "}",
    "method assembleArguments(args) {",
    "    var result := \"\"",
    "    for (args) do { arg ->",
    "        result := result ++ \", \" ++ arg",
    "    }",
    "    result",
    "}",
    "method partl(o) {",
    "    var result := \"\"",
    "    for (o.with.indices) do { partnr ->",
    "        result := result ++ o.with.at(partnr).args.size",
    "        if (partnr < o.with.size) then {",
    "            result := result ++ \", \"",
    "        }",
    "    }",
    "    if (false != o.generics) then {",
    "        result := result ++ \", {o.generics.size}\"",
    "    }",
    "    result",
    "}",
    "method compileSuperRequest(o, args) {",
    "    out \"// call case 1: super request\"",
    "    def escapedName = escapestring(o.nameString)",
    "    out(\"var call{auto_count} = callmethodsuper(this\" ++",
    "          \", \\\"{escapestring(o.nameString)}\\\", [{partl(o)}]{assembleArguments(args)});\")",
    "}",
    "method compileOuterRequest(o, args) {",
    "    out \"// call case 2: outer request\"",
    "    def ot = compilenode(o.receiver)",
    "    out(\"var call{auto_count} = {requestCall}({ot}\" ++",
    "          \", \\\"{escapestring(o.receiver.nameString)}\\\", [{partl(o)}]{assembleArguments(args)});\")",
    "}",
    "method compileSelfOuterRequest(o, args) {",
    "    out \"// call case 3: self.outer request\"",
    "    out(\"var call{auto_count} = {requestCall}(superDepth, \" ++",
    "            \"\\\"outer\\\", [0]);\")",
    "}",
    "method compileSelfRequest(o, args) {",
    "    out \"// call case 4: self request\"",
    "    out(\"onSelf = true;\");",
    "    out(\"var call{auto_count} = {requestCall}(this\" ++",
    "          \", \\\"{escapestring(o.nameString)}\\\", [{partl(o)}]{assembleArguments(args)});\")",
    "}",
    "method compilePreludeRequest(o, args) {",
    "    out \"// call case 5: prelude request\"",
    "    out(\"var call{auto_count} = {requestCall}(var_prelude\" ++",
    "          \", \\\"{escapestring(o.nameString)}\\\", [{partl(o)}]{assembleArguments(args)});\")",
    "}",
    "method compileOtherRequest(o, args) {",
    "    out \"// call case 6: other requests\"",
    "    def target = compilenode(o.receiver)",
    "    if (o.isSelfRequest) then {",
    "        out \"onSelf = true;\"",
    "    }",
    "    out(\"var call{auto_count} = {requestCall}({target}\" ++",
    "          \", \\\"{escapestring(o.nameString)}\\\", [{partl(o)}]{assembleArguments(args)});\")",
    "}",
    "method compilecall(o) {",
    "    def myc = auto_count",
    "    auto_count := auto_count + 1",
    "    var args := []",
    "    compileArguments(o, args)",
    "    def receiver = o.receiver",
    "    if (receiver.isSuper) then {",
    "        compileSuperRequest(o, args)",
    "    } elseif { receiver.isOuter } then {",
    "        compileOuterRequest(o, args)",
    "    } elseif { receiver.isSelf && { o.nameString == \"outer\" } } then {",
    "        compileSelfOuterRequest(o, args)",
    "    } elseif { receiver.isSelf } then {",
    "        compileSelfRequest(o, args)",
    "    } elseif { receiver.isPrelude } then {",
    "        compilePreludeRequest(o, args)",
    "    } else {",
    "        compileOtherRequest(o, args)",
    "    }",
    "    o.register := \"call\" ++ auto_count",
    "    auto_count := auto_count + 1",
    "}",
    "method compiledialect(o) {",
    "    out(\"// Dialect import of {o.value}\")",
    "    var fn := escapestring(o.value)",
    "    out \"var_prelude = do_import(\\\"{fn}\\\", {formatModname(o.value)});\"",
    "    out \"this.outer = var_prelude;\"",
    "    if (xmodule.currentDialect.hasAtStart) then {",
    "        out \"callmethod(var_prelude, \\\"atModuleStart\\\", [1], \"",
    "        out \"  new GraceString(\\\"{escapestring(modname)}\\\"));\"",
    "    }",
    "    o.register := \"undefined\"",
    "}",
    "method compileimport(o) {",
    "    out(\"// Import of {o.path} as {o.nameString}\")",
    "    def currentScope = o.scope",
    "    var nm := escapeident(o.nameString)",
    "    var fn := escapestring(o.path)",
    "    out(\"if (typeof {formatModname(o.path)} == 'undefined')\")",
    "    out \"  throw new GraceExceptionPacket(EnvironmentExceptionObject, \"",
    "    out \"    new GraceString('could not find module {o.path}'));\"",
    "    out(\"var \" ++ varf(nm) ++ \" = do_import(\\\"{fn}\\\", {formatModname(o.path)});\")",
    "    def methodIdent = o.value",
    "    def accessor = (ast.methodNode.new([ast.signaturePart.partName(o.nameString) scope(currentScope)],",
    "        [methodIdent], o.dtype) scope(currentScope))",
    "    accessor.line := o.line",
    "    accessor.linePos := o.linePos",
    "    accessor.annotations.addAll(o.annotations)",
    "    compilenode(accessor)",
    "    out(\"{accessor.register}.debug = \\\"import\\\";\")",
    "    if (o.isReadable.not) then {",
    "        out \"{accessor.register}.confidential = true;\"",
    "    }",
    "    if (emitTypeChecks) then {",
    "        if (o.dtype != false) then {",
    "            if (o.dtype.value != \"Unknown\") then {",
    "                out \"if (!Grace_isTrue(callmethod({compilenode(o.dtype)}, \\\"match(1)\\\",\"",
    "                out \"  [1], {varf(nm)})))\"",
    "                out \"    throw new GraceExceptionPacket(TypeErrorObject,\"",
    "                out \"          new GraceString(\\\"module {o.nameString} is not of type {o.dtype.toGrace(0)}\\\"))\";",
    "            }",
    "        }",
    "    }",
    "    out \"setModuleName(\\\"{modname}\\\");\"",
    "    o.register := \"undefined\"",
    "}",
    "method compilereturn(o) {",
    "    var reg := compilenode(o.value)",
    "    if (inBlock) then {",
    "        out(\"throw new ReturnException(\" ++ reg ++ \", returnTarget);\")",
    "    } else {",
    "        out(\"return \" ++ reg ++ \";\")",
    "    }",
    "    o.register := \"undefined\"",
    "}",
    "method compilePrint(o) {",
    "    var args := []",
    "    for (o.with) do { part ->",
    "        for (part.args) do { prm ->",
    "            var r := compilenode(prm)",
    "            args.push(r)",
    "        }",
    "    }",
    "    if (args.size != 1) then {",
    "        errormessages.syntaxError \"method print takes a single argument\"",
    "            atRange(o.line, o.linePos, o.linePos + 4)",
    "    } else {",
    "        out(\"var call\" ++ auto_count ++ \" = Grace_print(\" ++ args.first ++ \");\")",
    "    }",
    "    o.register := \"call\" ++ auto_count",
    "    auto_count := auto_count + 1",
    "}",
    "method compileNativeCode(o) {",
    "    if(o.with.size != 2) then {",
    "        errormessages.syntaxError \"method native()code takes two arguments\"",
    "            atRange(o.line, o.linePos, o.linePos + 5)",
    "    }",
    "    def param1 = o.with.first.args.first",
    "    if (param1.kind != \"string\") then {",
    "        errormessages.syntaxError \"the first argument to native()code must be a string literal\"",
    "            atRange(param1.line, param1.linePos, param1.linePos)",
    "    }",
    "    if (param1.value != \"js\") then { ",
    "        o.register := \"GraceDone\"",
    "        return",
    "    }",
    "    def param2 = o.with.second.args.first",
    "    if (param2.kind != \"string\") then {",
    "        errormessages.syntaxError \"the second argument to native()code must be a string literal\"",
    "            atLine(param2.line)",
    "    }",
    "    def codeString = param2.value",
    "    out \"   // start native code from line {o.line}\"",
    "    out \"var result = GraceDone;\"",
    "    out(codeString)",
    "    def reg = \"nat\" ++ auto_count",
    "    auto_count := auto_count + 1",
    "    out \"var {reg} = result;\"",
    "    o.register := reg",
    "    out \"   // end native code insertion\"",
    "}",
    "",
    "method compilenode(o) {",
    "    compilationDepth := compilationDepth + 1",
    "    noteLineNumber(o.line)comment \"compilenode {o.kind}\"",
    "    def oKind = o.kind",
    "    if (oKind == \"num\") then {",
    "        o.register := \"new GraceNum(\" ++ o.value ++ \")\"",
    "    }",
    "    if (oKind == \"string\") then {",
    "        // Escape characters that may not be legal in string literals",
    "        def os = escapestring(o.value)",
    "        out(\"var string\" ++ auto_count ++ \" = new GraceString(\\\"\"",
    "            ++ os ++ \"\\\");\")",
    "        o.register := \"string\" ++ auto_count",
    "        auto_count := auto_count + 1",
    "    } elseif { oKind == \"dialect\" } then {",
    "        compiledialect(o)",
    "    } elseif { oKind == \"import\" } then {",
    "        compileimport(o)",
    "    } elseif { oKind == \"return\" } then {",
    "        compilereturn(o)",
    "    } elseif { oKind == \"generic\" } then {",
    "        o.register := compilenode(o.value)",
    "    } elseif { oKind == \"identifier\" } then {",
    "        compileidentifier(o)",
    "    } elseif { oKind == \"defdec\" } then {",
    "        compiledefdec(o)",
    "    } elseif { oKind == \"vardec\" } then {",
    "        compilevardec(o)",
    "    } elseif { oKind == \"block\" } then {",
    "        compileblock(o)",
    "    } elseif { oKind == \"method\" } then {",
    "        compilemethod(o, \"this\")",
    "    } elseif { oKind == \"array\" } then {",
    "        compilearray(o)",
    "    } elseif { oKind == \"bind\" } then {",
    "        compilebind(o)",
    "    } elseif { oKind == \"if\" } then {",
    "        compileif(o)",
    "    } elseif { oKind == \"trycatch\" } then {",
    "        compiletrycatch(o)",
    "    } elseif { oKind == \"matchcase\" } then {",
    "        compilematchcase(o)",
    "    } elseif { oKind == \"object\" } then {",
    "        compileobject(o, \"this\", false)",
    "    } elseif { oKind == \"typedec\" } then {",
    "        compiletypedec(o)",
    "    } elseif { oKind == \"typeliteral\" } then {",
    "        compiletypeliteral(o)",
    "    } elseif { oKind == \"member\" } then {",
    "        compilemember(o)",
    "    } elseif { oKind == \"call\" } then {",
    "        if (o.receiver.isPrelude) then {",
    "            if (o.nameString == \"print(1)\") then {",
    "                compilePrint(o)",
    "            } elseif {o.nameString == \"native(1)code(1)\"} then {",
    "                compileNativeCode(o)",
    "            } else {",
    "                compilecall(o)",
    "            }",
    "        } else {",
    "            compilecall(o)",
    "        }",
    "    } elseif { oKind == \"op\" } then {",
    "        compileop(o)",
    "    }",
    "    compilationDepth := compilationDepth - 1",
    "    o.register",
    "}",
    "",
    "method compile(moduleObject, of, rm, bt, glPath) {",
    "    var argv := sys.argv",
    "    def isPrelude = util.extensions.contains(\"NativePrelude\")",
    "    if (util.extensions.contains \"ExtendedLineups\") then {",
    "        bracketConstructor := \"PrimitiveGraceList\"",
    "    }",
    "    if (util.extensions.contains \"noChecks\") then {",
    "        emitTypeChecks := false",
    "        emitUndefinedChecks := false",
    "        emitArgChecks := false",
    "        emitPositions := false",
    "        requestCall := \"callmethod\"",
    "    }",
    "    if (util.extensions.contains \"noTypeChecks\") then {",
    "        emitTypeChecks := false",
    "    }",
    "    if (util.extensions.contains \"noArgChecks\") then {",
    "        emitArgChecks := false",
    "    }",
    "    if (util.extensions.contains \"noUndefChecks\") then {",
    "        emitUndefinedChecks := false",
    "    }",
    "    if (util.extensions.contains \"noLineNumbers\") then {",
    "        emitPositions := false",
    "        requestCall := \"callmethod\"",
    "    }",
    "    values := moduleObject.value",
    "    outfile := of",
    "    modname := moduleObject.name",
    "    runmode := rm",
    "    buildtype := bt",
    "    if (util.extensions.contains(\"Debug\")) then {",
    "        debugMode := true",
    "    }",
    "    util.log_verbose(\"generating ECMAScript code.\")",
    "    topLevelTypes.add \"String\"",
    "    topLevelTypes.add \"Number\"",
    "    topLevelTypes.add \"Boolean\"",
    "    topLevelTypes.add \"Block\"",
    "    topLevelTypes.add \"Done\"",
    "    topLevelTypes.add \"Type\"",
    "    topLevelTypes.add \"Unknown\"",
    "    topLevelTypes.add \"Object\"",
    "    if (! util.extensions.contains \"noStrict\") then {",
    "        out \"\\\"use strict\\\";\"",
    "    }",
    "    if (isPrelude.not) then {",
    "        out \"var___95__prelude = do_import(\\\"StandardPrelude\\\", gracecode_StandardPrelude);\"",
    "    }",
    "    util.setline(1)",
    "    out(\"function {formatModname(modname)}() \\{\")",
    "    increaseindent",
    "    out(\"setModuleName(\\\"{modname}\\\");\")",
    "    out \"this.definitionModule = \\\"{modname}\\\";\"",
    "    out \"this.definitionLine = 0;\"",
    "    out \"var var_prelude = var___95__prelude;\"",
    "        // var_prelude must be local to this function, because its value",
    "        // varies from module to modules.",
    "",
    "    if (debugMode) then {",
    "        out \"var myframe = new StackFrame(\\\"{modname} module\\\");\"",
    "        out \"stackFrames.push(myframe);\"",
    "    }",
    "    compileobjouter(\"this\", \"var_prelude\")",
    "    def imported = []",
    "    if (isPrelude) then {  // compile components in non-standard order",
    "        moduleObject.value.do { o ->",
    "            if (o.isMethod) then {",
    "                compilenode(o)",
    "            }",
    "            if (o.isExternal) then {",
    "                imported.push(o.path)",
    "            }",
    "        }",
    "        moduleObject.value.do { o ->",
    "            if (o.isMethod.not) then {",
    "                compilenode(o)",
    "            }",
    "        }",
    "    } else {",
    "        moduleObject.externalsDo { o ->",
    "            compilenode(o)",
    "            imported.push(o.path)",
    "        }",
    "        if (false != moduleObject.superclass) then {",
    "            compileInherits(moduleObject.superclass) in (moduleObject, \"this\")",
    "        }",
    "        moduleObject.usedTraits.do { t -> ",
    "            compileInherits(t) in (moduleObject, \"this\")",
    "        }",
    "        moduleObject.methodsDo { o ->",
    "            compilenode(o)",
    "        }",
    "    }",
    "    moduleObject.executableComponentsDo { o ->",
    "        compilenode(o)",
    "    }",
    "    if (xmodule.currentDialect.hasAtEnd) then {",
    "        out(\"callmethod(var_prelude, \\\"atModuleEnd\\\", [1], this);\")",
    "    }",
    "    if (debugMode) then {",
    "        out \"stackFrames.pop();\"",
    "    }",
    "    out(\"return this;\")",
    "    decreaseindent",
    "    out(\"\\}\")",
    "    ",
    "    def generatedModuleName = formatModname(modname)",
    "    def importList = imported.map{ each -> \"'{each}'\" }.asList.sort",
    "    out \"{generatedModuleName}.imports = {importList};\"",
    "    ",
    "    moduleObject.imports := imports.other",
    "    xmodule.writeGctForModule(moduleObject)",
    "",
    "    def gct = xmodule.parseGCT(modname)",
    "    def gctText = xmodule.gctAsString(gct)",
    "    out \"if (typeof gctCache !== \\\"undefined\\\")\"",
    "    out \"  gctCache['{escapestring(basename(modname))}'] = \\\"{escapestring(gctText)}\\\";\"",
    "    out \"if (typeof originalSourceLines !== \\\"undefined\\\") \\{\"",
    "    out \"  originalSourceLines[\\\"{modname}\\\"] = [\"",
    "    def sourceLines = util.cLines",
    "    def numberOfLines = util.cLines.size",
    "    var ln := 1",
    "    while {ln < numberOfLines} do {",
    "        out \"    \\\"{sourceLines.at(ln)}\\\",\"",
    "        ln := ln + 1",
    "    }",
    "    if (numberOfLines <= 0) then {",
    "        out \" ];\"",
    "    } else {",
    "        out \"    \\\"{sourceLines.at(numberOfLines)}\\\" ];\"",
    "    }",
    "    out \"\\}\"",
    "    out \"if (typeof global !== \\\"undefined\\\")\"",
    "    out \"  global.{generatedModuleName} = {generatedModuleName};\"",
    "    out \"if (typeof window !== \\\"undefined\\\")\"",
    "    out \"  window.{generatedModuleName} = {generatedModuleName};\"",
    "",
    "    for (output) do { o ->",
    "        util.outprint(o)",
    "    }",
    "    outfile.close",
    "    util.log_verbose \"done.\"",
    "    if (buildtype == \"run\") then { runJsCode(of, glPath) }",
    "}",
    "",
    "method compileInherits(o) in (objNode, selfr) {",
    "    // o is an inherits node: compile it.  ",
    "    // selfr is the name of enclosing object; objNode is the enclosing AST node",
    "    if (o.isUse) then { ",
    "        compileTrait(o) in (objNode, selfr)",
    "    } else {",
    "        compileSuper(o, selfr)",
    "    }",
    "}",
    "",
    "method compileSuper(o, selfr) {",
    "    def sup = compilenode(o.value)",
    "    out \"{selfr}.superobj = {sup};\"",
    "    out \"if ({sup}.data) {selfr}.data = {sup}.data;\"",
    "    // out \"delete {sup}.data;\"    // to avoid a redundant reference",
    "    out \"if ({sup}.hasOwnProperty('_value'))\"",
    "    out \"    {selfr}._value = {sup}._value;\"",
    "    // out \"delete {sup}._value;\"  // to avoid an inconsistent copy of built-in values",
    "    // this breaks inheritance from booleans",
    "    o.aliases.do { each ->",
    "        out \"{selfr}.methods['{each.newName.nameString}'] = findMethod({sup}, '{each.oldName.nameString}');\"",
    "    }",
    "    o.exclusions.do { each ->",
    "        out \"delete {sup}.methods['{each.nameString}'];\"",
    "    }",
    "}",
    "",
    "method compileTrait(o) in (objNode, selfr) {",
    "    def tObj = compilenode(o.value)",
    "    def tMethNames = o.providedNames -- objNode.localNames",
    "//    util.log 70 verbose \"tMethNames = {tMethNames.asList.sort}\"",
    "    o.aliases.do { each ->",
    "        def nn = each.newName.nameString",
    "        out(\"{selfr}.methods['{nn}'] = \" ++",
    "            \"{tObj}.methods['{each.oldName.nameString}'];  // alias\")",
    "        tMethNames.remove(nn)",
    "    }",
    "    tMethNames.do { methName ->",
    "        out \"{selfr}.methods['{methName}'] = {tObj}.methods['{methName}'];\"",
    "    }",
    "}",
    "",
    "method runJsCode(of, glPath) {",
    "    def gmp = sys.environ.at \"GRACE_MODULE_PATH\"",
    "    def pathList = unixFilePath.split(gmp)",
    "    def libPath = if (glPath.at(glPath.size) == \"/\") then { glPath }",
    "                        else { glPath ++ \"/\" }",
    "    if (io.exists(libPath ++ \"gracelib.js\")) then {",
    "        if (pathList.contains(libPath).not) then {",
    "            sys.environ.at \"GRACE_MODULE_PATH\" put \"{libPath}:{gmp}\"",
    "        }",
    "    }",
    "    def runExitCode = io.spawn(\"grace\", [of.pathname]).wait",
    "    if (runExitCode < 0) then {",
    "        io.error.write \"minigrace: program {modname} exited with error {-runExitCode}.\\n\"",
    "        sys.exit(4)",
    "    }",
    "}" ];
}
if (typeof global !== "undefined")
  global.gracecode_genjs = gracecode_genjs;
if (typeof window !== "undefined")
  window.gracecode_genjs = gracecode_genjs;
