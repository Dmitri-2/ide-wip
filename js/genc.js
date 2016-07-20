"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_genc() {
  setModuleName("genc");
  this.definitionModule = "genc";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_genc_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_genc_outer0;
  setLineNumber(2);    // compilenode import
  // Import of ast as ast
  if (typeof gracecode_ast == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module ast'));
  var var_ast = do_import("ast", gracecode_ast);
  var func1 = function(argcv) {    // method ast
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genc");
    // ast is a simple accessor - elide try ... catch
    return var_ast;
  };
  func1.paramCounts = [0];
  this.methods["ast"] = func1;
  func1.definitionLine = 2;
  func1.definitionModule = "genc";
  func1.debug = "import";
  func1.confidential = true;
  setModuleName("genc");
  setLineNumber(3);    // compilenode import
  // Import of errormessages as errormessages
  if (typeof gracecode_errormessages == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module errormessages'));
  var var_errormessages = do_import("errormessages", gracecode_errormessages);
  var func2 = function(argcv) {    // method errormessages
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genc");
    // errormessages is a simple accessor - elide try ... catch
    return var_errormessages;
  };
  func2.paramCounts = [0];
  this.methods["errormessages"] = func2;
  func2.definitionLine = 3;
  func2.definitionModule = "genc";
  func2.debug = "import";
  func2.confidential = true;
  setModuleName("genc");
  setLineNumber(4);    // compilenode import
  // Import of io as io
  if (typeof gracecode_io == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module io'));
  var var_io = do_import("io", gracecode_io);
  var func3 = function(argcv) {    // method io
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genc");
    // io is a simple accessor - elide try ... catch
    return var_io;
  };
  func3.paramCounts = [0];
  this.methods["io"] = func3;
  func3.definitionLine = 4;
  func3.definitionModule = "genc";
  func3.debug = "import";
  func3.confidential = true;
  setModuleName("genc");
  setLineNumber(5);    // compilenode import
  // Import of stringMap as map
  if (typeof gracecode_stringMap == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module stringMap'));
  var var_map = do_import("stringMap", gracecode_stringMap);
  var func4 = function(argcv) {    // method map
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genc");
    // map is a simple accessor - elide try ... catch
    return var_map;
  };
  func4.paramCounts = [0];
  this.methods["map"] = func4;
  func4.definitionLine = 5;
  func4.definitionModule = "genc";
  func4.debug = "import";
  func4.confidential = true;
  setModuleName("genc");
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
    setModuleName("genc");
    // mirrors is a simple accessor - elide try ... catch
    return var_mirrors;
  };
  func5.paramCounts = [0];
  this.methods["mirrors"] = func5;
  func5.definitionLine = 6;
  func5.definitionModule = "genc";
  func5.debug = "import";
  func5.confidential = true;
  setModuleName("genc");
  setLineNumber(7);    // compilenode import
  // Import of sys as sys
  if (typeof gracecode_sys == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module sys'));
  var var_sys = do_import("sys", gracecode_sys);
  var func6 = function(argcv) {    // method sys
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genc");
    // sys is a simple accessor - elide try ... catch
    return var_sys;
  };
  func6.paramCounts = [0];
  this.methods["sys"] = func6;
  func6.definitionLine = 7;
  func6.definitionModule = "genc";
  func6.debug = "import";
  func6.confidential = true;
  setModuleName("genc");
  setLineNumber(8);    // compilenode import
  // Import of util as util
  if (typeof gracecode_util == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module util'));
  var var_util = do_import("util", gracecode_util);
  var func7 = function(argcv) {    // method util
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genc");
    // util is a simple accessor - elide try ... catch
    return var_util;
  };
  func7.paramCounts = [0];
  this.methods["util"] = func7;
  func7.definitionLine = 8;
  func7.definitionModule = "genc";
  func7.debug = "import";
  func7.confidential = true;
  setModuleName("genc");
  setLineNumber(9);    // compilenode import
  // Import of xmodule as xmodule
  if (typeof gracecode_xmodule == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module xmodule'));
  var var_xmodule = do_import("xmodule", gracecode_xmodule);
  var func8 = function(argcv) {    // method xmodule
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genc");
    // xmodule is a simple accessor - elide try ... catch
    return var_xmodule;
  };
  func8.paramCounts = [0];
  this.methods["xmodule"] = func8;
  func8.definitionLine = 9;
  func8.definitionModule = "genc";
  func8.debug = "import";
  func8.confidential = true;
  setModuleName("genc");
  setLineNumber(44);    // compilenode method
  var func9 = function(argcv) {    // method out(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_s = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(45);    // compilenode identifier
    // call case 6: other requests
    var call11 = callmethodChecked(var_output, "push(1)", [1], var_s);
    return call11;
  };
  func9.paramCounts = [1];
  this.methods["out(1)"] = func9;
  func9.definitionLine = 44;
  func9.definitionModule = "genc";
  setLineNumber(47);    // compilenode method
  var func12 = function(argcv) {    // method outprint(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_s = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(48);    // compilenode identifier
    // call case 6: other requests
    var call14 = callmethodChecked(var_util, "outprint(1)", [1], var_s);
    return call14;
  };
  func12.paramCounts = [1];
  this.methods["outprint(1)"] = func12;
  func12.definitionLine = 47;
  func12.definitionModule = "genc";
  setLineNumber(50);    // compilenode method
  var func15 = function(argcv) {    // method outswitchup
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genc");
    setLineNumber(51);    // compilenode identifier
    var_output = var_topOutput;
    return GraceDone;
  };
  func15.paramCounts = [0];
  this.methods["outswitchup"] = func15;
  func15.definitionLine = 50;
  func15.definitionModule = "genc";
  setLineNumber(53);    // compilenode method
  var func16 = function(argcv) {    // method outswitchdown
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genc");
    setLineNumber(54);    // compilenode identifier
    var_output = var_bottomOutput;
    return GraceDone;
  };
  func16.paramCounts = [0];
  this.methods["outswitchdown"] = func16;
  func16.definitionLine = 53;
  func16.definitionModule = "genc";
  setLineNumber(56);    // compilenode method
  var func17 = function(argcv) {    // method countnodebindings(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_n = arguments[curarg];
    curarg++;
    setModuleName("genc");
    var if18 = GraceDone;
    setLineNumber(57);    // compilenode string
    var string19 = new GraceString("if");
    // call case 6: other requests
    var call22 = callmethodChecked(var_n, "kind", []);
    var opresult24 = callmethodChecked(call22, "==(1)", [1], string19);
    if (Grace_isTrue(opresult24)) {
      setLineNumber(58);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call28 = callmethodChecked(var_n, "elseblock", []);
      var call29 = callmethodChecked(call28, "body", []);
      // call case 4: self request
      onSelf = true;
      var call30 = callmethodChecked(this, "countbindings(1)", [1], call29);
      // call case 6: other requests
      // call case 6: other requests
      var call35 = callmethodChecked(var_n, "thenblock", []);
      var call36 = callmethodChecked(call35, "body", []);
      // call case 4: self request
      onSelf = true;
      var call37 = callmethodChecked(this, "countbindings(1)", [1], call36);
      var opresult39 = callmethodChecked(call37, "+(1)", [1], call30);
      if18 = opresult39;
    } else {
      setLineNumber(60);    // compilenode num
      if18 = new GraceNum(0);
    }
    return if18;
  };
  func17.paramCounts = [1];
  this.methods["countnodebindings(1)"] = func17;
  func17.definitionLine = 56;
  func17.definitionModule = "genc";
  setLineNumber(63);    // compilenode method
  var func40 = function(argcv) {    // method countbindings(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_l = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(64);    // compilenode num
    var var_numslots = new GraceNum(0);
    setLineNumber(65);    // compilenode block
    var block42 = new GraceBlock(this, 65, 1);
    setLineNumber(1);    // compilenode identifier
    block42.real = function(var_n) {
      setLineNumber(66);    // compilenode member
      // call case 6: other requests
      var call44 = callmethodChecked(var_n, "kind", []);
      var var_k = call44;
      var if45 = GraceDone;
      setLineNumber(67);    // compilenode string
      var string46 = new GraceString("typedec");
      var opresult49 = callmethodChecked(var_k, "==(1)", [1], string46);
      var string51 = new GraceString("defdec");
      var opresult54 = callmethodChecked(var_k, "==(1)", [1], string51);
      var string56 = new GraceString("vardec");
      var opresult59 = callmethodChecked(var_k, "==(1)", [1], string56);
      var opresult61 = callmethodChecked(opresult59, "||(1)", [1], opresult54);
      var opresult63 = callmethodChecked(opresult61, "||(1)", [1], opresult49);
      if (Grace_isTrue(opresult63)) {
        setLineNumber(68);    // compilenode identifier
        var opresult66 = callmethodChecked(var_numslots, "+(1)", [1], new GraceNum(1));
        var_numslots = opresult66;
        if45 = GraceDone;
      } else {
        var if67 = GraceDone;
        setLineNumber(69);    // compilenode string
        var string68 = new GraceString("if");
        // call case 6: other requests
        var call71 = callmethodChecked(var_n, "kind", []);
        var opresult73 = callmethodChecked(call71, "==(1)", [1], string68);
        if (Grace_isTrue(opresult73)) {
          setLineNumber(70);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call75 = callmethodChecked(this, "countnodebindings(1)", [1], var_n);
          var opresult78 = callmethodChecked(var_numslots, "+(1)", [1], call75);
          var_numslots = opresult78;
          if67 = GraceDone;
        }
        if45 = if67;
      }
      return if45;
    };
    // call case 5: prelude request
    var call79 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_l, block42);
    setLineNumber(73);    // compilenode identifier
    return var_numslots;
  };
  func40.paramCounts = [1];
  this.methods["countbindings(1)"] = func40;
  func40.definitionLine = 63;
  func40.definitionModule = "genc";
  setLineNumber(75);    // compilenode method
  var func80 = function(argcv) {    // method definebindings(_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_l = arguments[curarg];
    curarg++;
    var var_slot__39__ = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(76);    // compilenode identifier
    var var_slot = var_slot__39__;
    setLineNumber(77);    // compilenode block
    var block82 = new GraceBlock(this, 77, 1);
    setLineNumber(1);    // compilenode identifier
    block82.real = function(var_n) {
      setLineNumber(78);    // compilenode member
      // call case 6: other requests
      var call84 = callmethodChecked(var_n, "kind", []);
      var var_k = call84;
      var if85 = GraceDone;
      setLineNumber(79);    // compilenode string
      var string86 = new GraceString("typedec");
      var opresult89 = callmethodChecked(var_k, "==(1)", [1], string86);
      var string91 = new GraceString("defdec");
      var opresult94 = callmethodChecked(var_k, "==(1)", [1], string91);
      var string96 = new GraceString("vardec");
      var opresult99 = callmethodChecked(var_k, "==(1)", [1], string96);
      var opresult101 = callmethodChecked(opresult99, "||(1)", [1], opresult94);
      var opresult103 = callmethodChecked(opresult101, "||(1)", [1], opresult89);
      if (Grace_isTrue(opresult103)) {
        setLineNumber(80);    // compilenode string
        var string104 = new GraceString("");
        var var_tnm = string104;
        setLineNumber(81);    // compilenode string
        var string105 = new GraceString("");
        var var_snm = string105;
        var if106 = GraceDone;
        setLineNumber(82);    // compilenode string
        var string107 = new GraceString("generic");
        // call case 6: other requests
        // call case 6: other requests
        var call111 = callmethodChecked(var_n, "name", []);
        var call112 = callmethodChecked(call111, "kind", []);
        var opresult114 = callmethodChecked(call112, "==(1)", [1], string107);
        if (Grace_isTrue(opresult114)) {
          setLineNumber(83);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          // call case 6: other requests
          var call119 = callmethodChecked(var_n, "name", []);
          var call120 = callmethodChecked(call119, "value", []);
          var call121 = callmethodChecked(call120, "value", []);
          // call case 4: self request
          onSelf = true;
          var call122 = callmethodChecked(this, "escapeident(1)", [1], call121);
          var_tnm = call122;
          setLineNumber(84);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          // call case 6: other requests
          var call127 = callmethodChecked(var_n, "name", []);
          var call128 = callmethodChecked(call127, "value", []);
          var call129 = callmethodChecked(call128, "value", []);
          // call case 4: self request
          onSelf = true;
          var call130 = callmethodChecked(this, "escapestring(1)", [1], call129);
          var_snm = call130;
          if106 = GraceDone;
        } else {
          setLineNumber(86);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call134 = callmethodChecked(var_n, "name", []);
          var call135 = callmethodChecked(call134, "value", []);
          // call case 4: self request
          onSelf = true;
          var call136 = callmethodChecked(this, "escapeident(1)", [1], call135);
          var_tnm = call136;
          setLineNumber(87);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call140 = callmethodChecked(var_n, "name", []);
          var call141 = callmethodChecked(call140, "value", []);
          // call case 4: self request
          onSelf = true;
          var call142 = callmethodChecked(this, "escapestring(1)", [1], call141);
          var_snm = call142;
          if106 = GraceDone;
        }
        var if143 = GraceDone;
        setLineNumber(89);    // compilenode call
        // call case 6: other requests
        // call case 6: other requests
        var call146 = callmethodChecked(var_declaredvars, "contains(1)", [1], var_tnm);
        var call147 = callmethodChecked(call146, "prefix!", [0]);
        if (Grace_isTrue(call147)) {
          setLineNumber(90);    // compilenode identifier
          // call case 6: other requests
          var call149 = callmethodChecked(var_declaredvars, "push(1)", [1], var_tnm);
          setLineNumber(91);    // compilenode string
          var string151 = new GraceString("]);");
          var string154 = new GraceString(" = &(stackframe->slots[");
          var string157 = new GraceString("  Object *var_");
          var opresult159 = callmethodChecked(string157, "++(1)", [1], var_tnm);
          var opresult161 = callmethodChecked(opresult159, "++(1)", [1], string154);
          var opresult163 = callmethodChecked(opresult161, "++(1)", [1], var_slot);
          var opresult165 = callmethodChecked(opresult163, "++(1)", [1], string151);
          // call case 4: self request
          onSelf = true;
          var call166 = callmethodChecked(this, "out(1)", [1], opresult165);
          setLineNumber(92);    // compilenode string
          var string168 = new GraceString("\");");
          var string171 = new GraceString(", \"");
          var string174 = new GraceString("  setframeelementname(stackframe, ");
          var opresult176 = callmethodChecked(string174, "++(1)", [1], var_slot);
          var opresult178 = callmethodChecked(opresult176, "++(1)", [1], string171);
          var opresult180 = callmethodChecked(opresult178, "++(1)", [1], var_snm);
          var opresult182 = callmethodChecked(opresult180, "++(1)", [1], string168);
          // call case 4: self request
          onSelf = true;
          var call183 = callmethodChecked(this, "out(1)", [1], opresult182);
          setLineNumber(93);    // compilenode identifier
          var opresult186 = callmethodChecked(var_slot, "+(1)", [1], new GraceNum(1));
          var_slot = opresult186;
          if143 = GraceDone;
        }
        if85 = if143;
      } else {
        var if187 = GraceDone;
        setLineNumber(95);    // compilenode string
        var string188 = new GraceString("if");
        var opresult191 = callmethodChecked(var_k, "==(1)", [1], string188);
        if (Grace_isTrue(opresult191)) {
          setLineNumber(96);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call195 = callmethodChecked(var_n, "thenblock", []);
          var call196 = callmethodChecked(call195, "body", []);
          // call case 4: self request
          onSelf = true;
          var call197 = callmethodChecked(this, "definebindings(2)", [2], call196, var_slot);
          var_slot = call197;
          setLineNumber(97);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call201 = callmethodChecked(var_n, "elseblock", []);
          var call202 = callmethodChecked(call201, "body", []);
          // call case 4: self request
          onSelf = true;
          var call203 = callmethodChecked(this, "definebindings(2)", [2], call202, var_slot);
          var_slot = call203;
          setLineNumber(98);    // compilenode identifier
          // call case 6: other requests
          var call205 = callmethodChecked(var_n, "handledIdentifiers:=(1)", [1], GraceTrue);
          if187 = call205;
        } else {
          var if206 = GraceDone;
          setLineNumber(99);    // compilenode string
          var string207 = new GraceString("import");
          // call case 6: other requests
          var call210 = callmethodChecked(var_n, "kind", []);
          var opresult212 = callmethodChecked(call210, "==(1)", [1], string207);
          if (Grace_isTrue(opresult212)) {
            setLineNumber(100);    // compilenode member
            // call case 6: other requests
            var call215 = callmethodChecked(var_n, "nameString", []);
            // call case 4: self request
            onSelf = true;
            var call216 = callmethodChecked(this, "escapeident(1)", [1], call215);
            var var_tnm = call216;
            setLineNumber(101);    // compilenode string
            var string218 = new GraceString(" = alloc_var();");
            var string221 = new GraceString("  Object *var_");
            var opresult223 = callmethodChecked(string221, "++(1)", [1], var_tnm);
            var opresult225 = callmethodChecked(opresult223, "++(1)", [1], string218);
            // call case 4: self request
            onSelf = true;
            var call226 = callmethodChecked(this, "out(1)", [1], opresult225);
            if206 = call226;
          }
          if187 = if206;
        }
        if85 = if187;
      }
      return if85;
    };
    // call case 5: prelude request
    var call227 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_l, block82);
    setLineNumber(105);    // compilenode identifier
    return var_slot;
  };
  func80.paramCounts = [2];
  this.methods["definebindings(2)"] = func80;
  func80.definitionLine = 75;
  func80.definitionModule = "genc";
  setLineNumber(107);    // compilenode method
  var func228 = function(argcv) {    // method beginblock(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_s = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(108);    // compilenode string
    var string230 = new GraceString("%");
    var opresult232 = callmethodChecked(string230, "++(1)", [1], var_s);
    var_bblock = opresult232;
    setLineNumber(109);    // compilenode string
    var string234 = new GraceString(":");
    var opresult237 = callmethodChecked(var_s, "++(1)", [1], string234);
    // call case 4: self request
    onSelf = true;
    var call238 = callmethodChecked(this, "out(1)", [1], opresult237);
    return call238;
  };
  func228.paramCounts = [1];
  this.methods["beginblock(1)"] = func228;
  func228.definitionLine = 107;
  func228.definitionModule = "genc";
  setLineNumber(111);    // compilenode method
  var func239 = function(argcv) {    // method escapeident(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_s = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(112);    // compilenode string
    var string240 = new GraceString("");
    var var_ns = string240;
    setLineNumber(113);    // compilenode block
    var block242 = new GraceBlock(this, 113, 1);
    setLineNumber(1);    // compilenode identifier
    block242.real = function(var_c) {
      setLineNumber(114);    // compilenode member
      // call case 6: other requests
      var call244 = callmethodChecked(var_c, "ord", []);
      var var_o = call244;
      var if245 = GraceDone;
      setLineNumber(118);    // compilenode identifier
      var opresult248 = callmethodChecked(var_o, "==(1)", [1], new GraceNum(95));
      setLineNumber(117);    // compilenode identifier
      var opresult252 = callmethodChecked(var_o, "\u2264(1)", [1], new GraceNum(57));
      var opresult256 = callmethodChecked(var_o, "\u2265(1)", [1], new GraceNum(48));
      var opresult258 = callmethodChecked(opresult256, "&&(1)", [1], opresult252);
      setLineNumber(116);    // compilenode identifier
      var opresult262 = callmethodChecked(var_o, "\u2264(1)", [1], new GraceNum(122));
      var opresult266 = callmethodChecked(var_o, "\u2265(1)", [1], new GraceNum(97));
      var opresult268 = callmethodChecked(opresult266, "&&(1)", [1], opresult262);
      setLineNumber(115);    // compilenode identifier
      var opresult272 = callmethodChecked(var_o, "\u2264(1)", [1], new GraceNum(90));
      var opresult276 = callmethodChecked(var_o, "\u2265(1)", [1], new GraceNum(65));
      var opresult278 = callmethodChecked(opresult276, "&&(1)", [1], opresult272);
      var opresult280 = callmethodChecked(opresult278, "||(1)", [1], opresult268);
      var opresult282 = callmethodChecked(opresult280, "||(1)", [1], opresult258);
      var opresult284 = callmethodChecked(opresult282, "||(1)", [1], opresult248);
      if (Grace_isTrue(opresult284)) {
        setLineNumber(119);    // compilenode identifier
        var opresult287 = callmethodChecked(var_ns, "++(1)", [1], var_c);
        var_ns = opresult287;
        if245 = GraceDone;
      } else {
        setLineNumber(121);    // compilenode string
        var string288 = new GraceString("_");
        var string291 = new GraceString("_");
        var opresult293 = callmethodChecked(string291, "++(1)", [1], var_o);
        var opresult295 = callmethodChecked(opresult293, "++(1)", [1], string288);
        var opresult298 = callmethodChecked(var_ns, "++(1)", [1], opresult295);
        var_ns = opresult298;
        if245 = GraceDone;
      }
      return if245;
    };
    // call case 5: prelude request
    var call299 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_s, block242);
    setLineNumber(124);    // compilenode identifier
    return var_ns;
  };
  func239.paramCounts = [1];
  this.methods["escapeident(1)"] = func239;
  func239.definitionLine = 111;
  func239.definitionModule = "genc";
  setLineNumber(126);    // compilenode method
  var func300 = function(argcv) {    // method escapestring(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_s = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(127);    // compilenode member
    // call case 6: other requests
    var call302 = callmethodChecked(var_s, "_escape", []);
    return call302;
  };
  func300.paramCounts = [1];
  this.methods["escapestring(1)"] = func300;
  func300.definitionLine = 126;
  func300.definitionModule = "genc";
  setLineNumber(129);    // compilenode method
  var func303 = function(argcv) {    // method escapestring2(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_s = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(130);    // compilenode string
    var string304 = new GraceString("");
    var var_ns = string304;
    setLineNumber(131);    // compilenode num
    var var_cd = new GraceNum(0);
    setLineNumber(132);    // compilenode identifier
    var var_ls = GraceFalse;
    setLineNumber(133);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call307 = callmethodChecked(this, "escapestring(1)", [1], var_s);
    var block308 = new GraceBlock(this, 133, 1);
    setLineNumber(1);    // compilenode identifier
    block308.real = function(var_c) {
      var if309 = GraceDone;
      setLineNumber(134);    // compilenode string
      var string310 = new GraceString("\\");
      var opresult313 = callmethodChecked(var_c, "==(1)", [1], string310);
      var opresult316 = callmethodChecked(var_ls, "&&(1)", [1], opresult313);
      if (Grace_isTrue(opresult316)) {
        setLineNumber(135);    // compilenode identifier
        var_ls = GraceFalse;
        setLineNumber(136);    // compilenode string
        var string317 = new GraceString("\\\\");
        var opresult320 = callmethodChecked(var_ns, "++(1)", [1], string317);
        var_ns = opresult320;
        if309 = GraceDone;
      } else {
        var if321 = GraceDone;
        setLineNumber(137);    // compilenode string
        var string322 = new GraceString("\\");
        var opresult325 = callmethodChecked(var_c, "==(1)", [1], string322);
        if (Grace_isTrue(opresult325)) {
          setLineNumber(138);    // compilenode identifier
          var_ls = GraceTrue;
          if321 = GraceDone;
        } else {
          var if326 = GraceDone;
          setLineNumber(139);    // compilenode identifier
          if (Grace_isTrue(var_ls)) {
            setLineNumber(140);    // compilenode string
            var string328 = new GraceString("\"\"\\x");
            var opresult331 = callmethodChecked(var_ns, "++(1)", [1], string328);
            var opresult333 = callmethodChecked(opresult331, "++(1)", [1], var_c);
            var_ns = opresult333;
            setLineNumber(141);    // compilenode identifier
            var_ls = GraceFalse;
            setLineNumber(142);    // compilenode num
            var_cd = new GraceNum(2);
            if326 = GraceDone;
          } else {
            setLineNumber(144);    // compilenode identifier
            var opresult336 = callmethodChecked(var_ns, "++(1)", [1], var_c);
            var_ns = opresult336;
            if326 = GraceDone;
          }
          if321 = if326;
        }
        if309 = if321;
      }
      var if337 = GraceDone;
      setLineNumber(146);    // compilenode identifier
      var opresult340 = callmethodChecked(var_cd, "==(1)", [1], new GraceNum(1));
      if (Grace_isTrue(opresult340)) {
        setLineNumber(147);    // compilenode string
        var string341 = new GraceString("\"\"");
        var opresult344 = callmethodChecked(var_ns, "++(1)", [1], string341);
        var_ns = opresult344;
        setLineNumber(148);    // compilenode num
        var_cd = new GraceNum(0);
        if337 = GraceDone;
      } else {
        var if345 = GraceDone;
        setLineNumber(149);    // compilenode identifier
        var opresult348 = callmethodChecked(var_cd, ">(1)", [1], new GraceNum(0));
        if (Grace_isTrue(opresult348)) {
          setLineNumber(150);    // compilenode identifier
          var diff351 = callmethodChecked(var_cd, "-(1)", [1], new GraceNum(1));
          var_cd = diff351;
          if345 = GraceDone;
        }
        if337 = if345;
      }
      return if337;
    };
    // call case 5: prelude request
    var call352 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call307, block308);
    setLineNumber(153);    // compilenode identifier
    return var_ns;
  };
  func303.paramCounts = [1];
  this.methods["escapestring2(1)"] = func303;
  func303.definitionLine = 129;
  func303.definitionModule = "genc";
  setLineNumber(155);    // compilenode method
  var func353 = function(argcv) {    // method compilearray(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(156);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(157);    // compilenode identifier
    var opresult356 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult356;
    setLineNumber(158);    // compilenode vardec
    var var_r;
    setLineNumber(159);    // compilenode string
    var string358 = new GraceString(";");
    var string361 = new GraceString(" = ");
    var string364 = new GraceString("  Object array");
    var opresult366 = callmethodChecked(string364, "++(1)", [1], var_myc);
    var opresult368 = callmethodChecked(opresult366, "++(1)", [1], string361);
    var opresult370 = callmethodChecked(opresult368, "++(1)", [1], var_bracketConstructor);
    var opresult372 = callmethodChecked(opresult370, "++(1)", [1], string358);
    // call case 4: self request
    onSelf = true;
    var call373 = callmethodChecked(this, "out(1)", [1], opresult372);
    setLineNumber(160);    // compilenode string
    var string375 = new GraceString("  gc_pause();");
    // call case 4: self request
    onSelf = true;
    var call376 = callmethodChecked(this, "out(1)", [1], string375);
    setLineNumber(161);    // compilenode num
    var var_i = new GraceNum(0);
    setLineNumber(162);    // compilenode member
    // call case 6: other requests
    var call379 = callmethodChecked(var_o, "value", []);
    var block380 = new GraceBlock(this, 162, 1);
    setLineNumber(1);    // compilenode identifier
    block380.real = function(var_a) {
      setLineNumber(163);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call382 = callmethodChecked(this, "compilenode(1)", [1], var_a);
      var_r = call382;
      setLineNumber(164);    // compilenode string
      var string384 = new GraceString(";");
      var string387 = new GraceString("  params[0] = ");
      var opresult389 = callmethodChecked(string387, "++(1)", [1], var_r);
      var opresult391 = callmethodChecked(opresult389, "++(1)", [1], string384);
      // call case 4: self request
      onSelf = true;
      var call392 = callmethodChecked(this, "out(1)", [1], opresult391);
      setLineNumber(165);    // compilenode string
      var string394 = new GraceString("  partcv[0] = 1;");
      // call case 4: self request
      onSelf = true;
      var call395 = callmethodChecked(this, "out(1)", [1], string394);
      setLineNumber(166);    // compilenode string
      var string397 = new GraceString(", \"push(1)\", 1, partcv, params, CFLAG_SELF);");
      var string400 = new GraceString("  callmethodflags(array");
      var opresult402 = callmethodChecked(string400, "++(1)", [1], var_myc);
      var opresult404 = callmethodChecked(opresult402, "++(1)", [1], string397);
      // call case 4: self request
      onSelf = true;
      var call405 = callmethodChecked(this, "out(1)", [1], opresult404);
      setLineNumber(167);    // compilenode identifier
      var opresult408 = callmethodChecked(var_i, "+(1)", [1], new GraceNum(1));
      var_i = opresult408;
      return GraceDone;
    };
    // call case 5: prelude request
    var call409 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call379, block380);
    setLineNumber(169);    // compilenode string
    var string411 = new GraceString("  gc_unpause();");
    // call case 4: self request
    onSelf = true;
    var call412 = callmethodChecked(this, "out(1)", [1], string411);
    setLineNumber(170);    // compilenode string
    var string415 = new GraceString("array");
    var opresult417 = callmethodChecked(string415, "++(1)", [1], var_myc);
    // call case 6: other requests
    var call418 = callmethodChecked(var_o, "register:=(1)", [1], opresult417);
    return call418;
  };
  func353.paramCounts = [1];
  this.methods["compilearray(1)"] = func353;
  func353.definitionLine = 155;
  func353.definitionModule = "genc";
  setLineNumber(172);    // compilenode method
  var func419 = function(argcv) {    // method compilemember(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(174);    // compilenode identifier
    // call case 6: other requests
    var call421 = callmethodChecked(var_o, "generics:=(1)", [1], GraceFalse);
    setLineNumber(175);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call423 = callmethodChecked(this, "compilecall(2)", [2], var_o, GraceFalse);
    return call423;
  };
  func419.paramCounts = [1];
  this.methods["compilemember(1)"] = func419;
  func419.definitionLine = 172;
  func419.definitionModule = "genc";
  setLineNumber(177);    // compilenode method
  var func424 = function(argcv) {    // method compileobjouter(_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_selfr = arguments[curarg];
    curarg++;
    var var_outerRef = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(178);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(179);    // compilenode identifier
    var opresult427 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult427;
    setLineNumber(180);    // compilenode string
    var string428 = new GraceString("outer");
    var var_nm = string428;
    setLineNumber(181);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call430 = callmethodChecked(this, "escapestring2(1)", [1], var_nm);
    var var_enm = call430;
    setLineNumber(182);    // compilenode string
    var string433 = new GraceString("// OBJECT OUTER DEC ");
    var opresult435 = callmethodChecked(string433, "++(1)", [1], var_enm);
    // call case 4: self request
    onSelf = true;
    var call436 = callmethodChecked(this, "out(1)", [1], opresult435);
    setLineNumber(183);    // compilenode string
    var string438 = new GraceString(", 0);");
    var string441 = new GraceString(", ");
    var string444 = new GraceString("  adddatum2(");
    var opresult446 = callmethodChecked(string444, "++(1)", [1], var_selfr);
    var opresult448 = callmethodChecked(opresult446, "++(1)", [1], string441);
    var opresult450 = callmethodChecked(opresult448, "++(1)", [1], var_outerRef);
    var opresult452 = callmethodChecked(opresult450, "++(1)", [1], string438);
    // call case 4: self request
    onSelf = true;
    var call453 = callmethodChecked(this, "out(1)", [1], opresult452);
    setLineNumber(186);    // compilenode string
    var string455 = new GraceString("Object* args, int flags) {");
    setLineNumber(185);    // compilenode string
    var string457 = new GraceString("(Object self, int nparams, int *argcv, ");
    setLineNumber(184);    // compilenode string
    var string459 = new GraceString("");
    var string462 = new GraceString("_");
    var string465 = new GraceString("_");
    var string468 = new GraceString("Object reader_");
    var opresult470 = callmethodChecked(string468, "++(1)", [1], var_escmodname);
    var opresult472 = callmethodChecked(opresult470, "++(1)", [1], string465);
    var opresult474 = callmethodChecked(opresult472, "++(1)", [1], var_enm);
    var opresult476 = callmethodChecked(opresult474, "++(1)", [1], string462);
    var opresult478 = callmethodChecked(opresult476, "++(1)", [1], var_myc);
    var opresult480 = callmethodChecked(opresult478, "++(1)", [1], string459);
    var opresult482 = callmethodChecked(opresult480, "++(1)", [1], string457);
    var opresult484 = callmethodChecked(opresult482, "++(1)", [1], string455);
    // call case 4: self request
    onSelf = true;
    var call485 = callmethodChecked(this, "outprint(1)", [1], opresult484);
    setLineNumber(187);    // compilenode string
    var string487 = new GraceString("  struct UserObject *uo = (struct UserObject*)self;");
    // call case 4: self request
    onSelf = true;
    var call488 = callmethodChecked(this, "outprint(1)", [1], string487);
    setLineNumber(188);    // compilenode string
    var string490 = new GraceString("  return uo->data[0];");
    // call case 4: self request
    onSelf = true;
    var call491 = callmethodChecked(this, "outprint(1)", [1], string490);
    setLineNumber(189);    // compilenode string
    var string493 = new GraceString("}");
    // call case 4: self request
    onSelf = true;
    var call494 = callmethodChecked(this, "outprint(1)", [1], string493);
    setLineNumber(190);    // compilenode string
    var string496 = new GraceString(");");
    var string499 = new GraceString("_");
    var string502 = new GraceString("_");
    var string505 = new GraceString(",\"outer\", &reader_");
    var string508 = new GraceString("  addmethodreal(");
    var opresult510 = callmethodChecked(string508, "++(1)", [1], var_selfr);
    var opresult512 = callmethodChecked(opresult510, "++(1)", [1], string505);
    var opresult514 = callmethodChecked(opresult512, "++(1)", [1], var_escmodname);
    var opresult516 = callmethodChecked(opresult514, "++(1)", [1], string502);
    var opresult518 = callmethodChecked(opresult516, "++(1)", [1], var_enm);
    var opresult520 = callmethodChecked(opresult518, "++(1)", [1], string499);
    var opresult522 = callmethodChecked(opresult520, "++(1)", [1], var_myc);
    var opresult524 = callmethodChecked(opresult522, "++(1)", [1], string496);
    // call case 4: self request
    onSelf = true;
    var call525 = callmethodChecked(this, "out(1)", [1], opresult524);
    return call525;
  };
  func424.paramCounts = [2];
  this.methods["compileobjouter(2)"] = func424;
  func424.definitionLine = 177;
  func424.definitionModule = "genc";
  setLineNumber(192);    // compilenode method
  var func526 = function(argcv) {    // method compileobjtypemeth(_,_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_selfr = arguments[curarg];
    curarg++;
    var var_pos = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(193);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(194);    // compilenode identifier
    var opresult529 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult529;
    setLineNumber(195);    // compilenode member
    // call case 6: other requests
    var call531 = callmethodChecked(var_o, "nameString", []);
    var var_nm = call531;
    setLineNumber(196);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call533 = callmethodChecked(this, "escapestring2(1)", [1], var_nm);
    var var_enm = call533;
    setLineNumber(197);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call535 = callmethodChecked(this, "escapeident(1)", [1], var_nm);
    var var_inm = call535;
    setLineNumber(200);    // compilenode string
    var string537 = new GraceString("Object* args, int flags) {");
    setLineNumber(199);    // compilenode string
    var string539 = new GraceString("(Object self, int nparams, int *argcv, ");
    setLineNumber(198);    // compilenode string
    var string541 = new GraceString("");
    var string544 = new GraceString("_");
    var string547 = new GraceString("_");
    var string550 = new GraceString("Object reader_");
    var opresult552 = callmethodChecked(string550, "++(1)", [1], var_escmodname);
    var opresult554 = callmethodChecked(opresult552, "++(1)", [1], string547);
    var opresult556 = callmethodChecked(opresult554, "++(1)", [1], var_inm);
    var opresult558 = callmethodChecked(opresult556, "++(1)", [1], string544);
    var opresult560 = callmethodChecked(opresult558, "++(1)", [1], var_myc);
    var opresult562 = callmethodChecked(opresult560, "++(1)", [1], string541);
    var opresult564 = callmethodChecked(opresult562, "++(1)", [1], string539);
    var opresult566 = callmethodChecked(opresult564, "++(1)", [1], string537);
    // call case 4: self request
    onSelf = true;
    var call567 = callmethodChecked(this, "outprint(1)", [1], opresult566);
    setLineNumber(201);    // compilenode string
    var string568 = new GraceString("MFLAG_DEF");
    var var_flags = string568;
    setLineNumber(202);    // compilenode member
    // call case 6: other requests
    var call571 = callmethodChecked(var_o, "annotations", []);
    var block572 = new GraceBlock(this, 202, 1);
    setLineNumber(1);    // compilenode identifier
    block572.real = function(var_ann) {
      var if573 = GraceDone;
      setLineNumber(203);    // compilenode block
      var block574 = new GraceBlock(this, 203, 0);
      block574.real = function() {
        var string575 = new GraceString("confidential");
        // call case 6: other requests
        var call578 = callmethodChecked(var_ann, "value", []);
        var opresult580 = callmethodChecked(call578, "==(1)", [1], string575);
        return opresult580;
      };
      var string582 = new GraceString("identifier");
      // call case 6: other requests
      var call585 = callmethodChecked(var_ann, "kind", []);
      var opresult587 = callmethodChecked(call585, "==(1)", [1], string582);
      var opresult589 = callmethodChecked(opresult587, "&&(1)", [1], block574);
      if (Grace_isTrue(opresult589)) {
        setLineNumber(204);    // compilenode string
        var string590 = new GraceString(" | MFLAG_CONFIDENTIAL");
        var string593 = new GraceString("");
        var opresult595 = callmethodChecked(string593, "++(1)", [1], var_flags);
        var opresult597 = callmethodChecked(opresult595, "++(1)", [1], string590);
        var_flags = opresult597;
        if573 = GraceDone;
      }
      return if573;
    };
    // call case 5: prelude request
    var call598 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call571, block572);
    setLineNumber(207);    // compilenode string
    var string600 = new GraceString("  struct UserObject *uo = (struct UserObject *)self;");
    // call case 4: self request
    onSelf = true;
    var call601 = callmethodChecked(this, "outprint(1)", [1], string600);
    setLineNumber(208);    // compilenode string
    var string603 = new GraceString("];");
    var string606 = new GraceString("  return uo->data[");
    var opresult608 = callmethodChecked(string606, "++(1)", [1], var_pos);
    var opresult610 = callmethodChecked(opresult608, "++(1)", [1], string603);
    // call case 4: self request
    onSelf = true;
    var call611 = callmethodChecked(this, "outprint(1)", [1], opresult610);
    setLineNumber(209);    // compilenode string
    var string613 = new GraceString("}");
    // call case 4: self request
    onSelf = true;
    var call614 = callmethodChecked(this, "outprint(1)", [1], string613);
    setLineNumber(210);    // compilenode string
    var string616 = new GraceString(");");
    var string619 = new GraceString(", ");
    var string622 = new GraceString("_");
    var string625 = new GraceString("_");
    var string628 = new GraceString("\",&reader_");
    var string631 = new GraceString(", \"");
    var string634 = new GraceString(" = addmethodrealflags(");
    var string637 = new GraceString("  Method *reader");
    var opresult639 = callmethodChecked(string637, "++(1)", [1], var_myc);
    var opresult641 = callmethodChecked(opresult639, "++(1)", [1], string634);
    var opresult643 = callmethodChecked(opresult641, "++(1)", [1], var_selfr);
    var opresult645 = callmethodChecked(opresult643, "++(1)", [1], string631);
    var opresult647 = callmethodChecked(opresult645, "++(1)", [1], var_enm);
    var opresult649 = callmethodChecked(opresult647, "++(1)", [1], string628);
    var opresult651 = callmethodChecked(opresult649, "++(1)", [1], var_escmodname);
    var opresult653 = callmethodChecked(opresult651, "++(1)", [1], string625);
    var opresult655 = callmethodChecked(opresult653, "++(1)", [1], var_inm);
    var opresult657 = callmethodChecked(opresult655, "++(1)", [1], string622);
    var opresult659 = callmethodChecked(opresult657, "++(1)", [1], var_myc);
    var opresult661 = callmethodChecked(opresult659, "++(1)", [1], string619);
    var opresult663 = callmethodChecked(opresult661, "++(1)", [1], var_flags);
    var opresult665 = callmethodChecked(opresult663, "++(1)", [1], string616);
    // call case 4: self request
    onSelf = true;
    var call666 = callmethodChecked(this, "out(1)", [1], opresult665);
    setLineNumber(211);    // compilenode string
    var string668 = new GraceString("->definitionModule = modulename;");
    var string671 = new GraceString("  reader");
    var opresult673 = callmethodChecked(string671, "++(1)", [1], var_myc);
    var opresult675 = callmethodChecked(opresult673, "++(1)", [1], string668);
    // call case 4: self request
    onSelf = true;
    var call676 = callmethodChecked(this, "out(1)", [1], opresult675);
    setLineNumber(212);    // compilenode string
    var string678 = new GraceString(";");
    // call case 6: other requests
    var call681 = callmethodChecked(var_o, "line", []);
    var string683 = new GraceString("->definitionLine = ");
    var string686 = new GraceString("  reader");
    var opresult688 = callmethodChecked(string686, "++(1)", [1], var_myc);
    var opresult690 = callmethodChecked(opresult688, "++(1)", [1], string683);
    var opresult692 = callmethodChecked(opresult690, "++(1)", [1], call681);
    var opresult694 = callmethodChecked(opresult692, "++(1)", [1], string678);
    // call case 4: self request
    onSelf = true;
    var call695 = callmethodChecked(this, "out(1)", [1], opresult694);
    return call695;
  };
  func526.paramCounts = [3];
  this.methods["compileobjtypemeth(3)"] = func526;
  func526.definitionLine = 192;
  func526.definitionModule = "genc";
  setLineNumber(214);    // compilenode method
  var func696 = function(argcv) {    // method compileobjdefdecdata(_,_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_selfr = arguments[curarg];
    curarg++;
    var var_pos = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(215);    // compilenode string
    var string697 = new GraceString("undefined");
    var var_val = string697;
    var if698 = GraceDone;
    setLineNumber(216);    // compilenode member
    // call case 6: other requests
    var call700 = callmethodChecked(var_o, "value", []);
    var opresult703 = callmethodChecked(GraceFalse, "\u2260(1)", [1], call700);
    if (Grace_isTrue(opresult703)) {
      var if704 = GraceDone;
      setLineNumber(217);    // compilenode string
      var string705 = new GraceString("object");
      // call case 6: other requests
      // call case 6: other requests
      var call709 = callmethodChecked(var_o, "value", []);
      var call710 = callmethodChecked(call709, "kind", []);
      var opresult712 = callmethodChecked(call710, "==(1)", [1], string705);
      if (Grace_isTrue(opresult712)) {
        setLineNumber(218);    // compilenode member
        // call case 6: other requests
        var call715 = callmethodChecked(var_o, "value", []);
        // call case 4: self request
        onSelf = true;
        var call716 = callmethodChecked(this, "compileobject(2)", [2], call715, var_selfr);
        setLineNumber(219);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call719 = callmethodChecked(var_o, "value", []);
        var call720 = callmethodChecked(call719, "register", []);
        var_val = call720;
        if704 = GraceDone;
      } else {
        setLineNumber(221);    // compilenode member
        // call case 6: other requests
        var call723 = callmethodChecked(var_o, "value", []);
        // call case 4: self request
        onSelf = true;
        var call724 = callmethodChecked(this, "compilenode(1)", [1], call723);
        var_val = call724;
        if704 = GraceDone;
      }
      if698 = if704;
    }
    setLineNumber(224);    // compilenode string
    var string726 = new GraceString(");");
    var string729 = new GraceString(", ");
    var string732 = new GraceString(", ");
    var string735 = new GraceString("  adddatum2(");
    var opresult737 = callmethodChecked(string735, "++(1)", [1], var_selfr);
    var opresult739 = callmethodChecked(opresult737, "++(1)", [1], string732);
    var opresult741 = callmethodChecked(opresult739, "++(1)", [1], var_val);
    var opresult743 = callmethodChecked(opresult741, "++(1)", [1], string729);
    var opresult745 = callmethodChecked(opresult743, "++(1)", [1], var_pos);
    var opresult747 = callmethodChecked(opresult745, "++(1)", [1], string726);
    // call case 4: self request
    onSelf = true;
    var call748 = callmethodChecked(this, "out(1)", [1], opresult747);
    var if749 = GraceDone;
    setLineNumber(225);    // compilenode string
    var string751 = new GraceString("parent");
    // call case 6: other requests
    var call752 = callmethodChecked(var_ast, "findAnnotation(2)", [2], var_o, string751);
    if (Grace_isTrue(call752)) {
      setLineNumber(226);    // compilenode string
      var string754 = new GraceString(";");
      var string757 = new GraceString(")->super = ");
      var string760 = new GraceString("  ((struct UserObject *)");
      var opresult762 = callmethodChecked(string760, "++(1)", [1], var_selfr);
      var opresult764 = callmethodChecked(opresult762, "++(1)", [1], string757);
      var opresult766 = callmethodChecked(opresult764, "++(1)", [1], var_val);
      var opresult768 = callmethodChecked(opresult766, "++(1)", [1], string754);
      // call case 4: self request
      onSelf = true;
      var call769 = callmethodChecked(this, "out(1)", [1], opresult768);
      if749 = call769;
    }
    return if749;
  };
  func696.paramCounts = [3];
  this.methods["compileobjdefdecdata(3)"] = func696;
  func696.definitionLine = 214;
  func696.definitionModule = "genc";
  setLineNumber(229);    // compilenode method
  var func770 = function(argcv) {    // method compileobjdefdecmeth(_,_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_selfr = arguments[curarg];
    curarg++;
    var var_pos = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(230);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(231);    // compilenode identifier
    var opresult773 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult773;
    setLineNumber(232);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call776 = callmethodChecked(var_o, "name", []);
    var call777 = callmethodChecked(call776, "value", []);
    var var_nm = call777;
    setLineNumber(233);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call779 = callmethodChecked(this, "escapestring2(1)", [1], var_nm);
    var var_enm = call779;
    setLineNumber(234);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call781 = callmethodChecked(this, "escapeident(1)", [1], var_nm);
    var var_inm = call781;
    setLineNumber(237);    // compilenode string
    var string783 = new GraceString("Object* args, int flags) {");
    setLineNumber(236);    // compilenode string
    var string785 = new GraceString("(Object self, int nparams, int *argcv, ");
    setLineNumber(235);    // compilenode string
    var string787 = new GraceString("");
    var string790 = new GraceString("_");
    var string793 = new GraceString("_");
    var string796 = new GraceString("Object reader_");
    var opresult798 = callmethodChecked(string796, "++(1)", [1], var_escmodname);
    var opresult800 = callmethodChecked(opresult798, "++(1)", [1], string793);
    var opresult802 = callmethodChecked(opresult800, "++(1)", [1], var_inm);
    var opresult804 = callmethodChecked(opresult802, "++(1)", [1], string790);
    var opresult806 = callmethodChecked(opresult804, "++(1)", [1], var_myc);
    var opresult808 = callmethodChecked(opresult806, "++(1)", [1], string787);
    var opresult810 = callmethodChecked(opresult808, "++(1)", [1], string785);
    var opresult812 = callmethodChecked(opresult810, "++(1)", [1], string783);
    // call case 4: self request
    onSelf = true;
    var call813 = callmethodChecked(this, "outprint(1)", [1], opresult812);
    setLineNumber(238);    // compilenode string
    var string814 = new GraceString("MFLAG_DEF");
    var var_flags = string814;
    setLineNumber(239);    // compilenode identifier
    var var_isPublic = GraceFalse;
    setLineNumber(240);    // compilenode member
    // call case 6: other requests
    var call817 = callmethodChecked(var_o, "annotations", []);
    var block818 = new GraceBlock(this, 240, 1);
    setLineNumber(1);    // compilenode identifier
    block818.real = function(var_ann) {
      var if819 = GraceDone;
      setLineNumber(241);    // compilenode block
      var block820 = new GraceBlock(this, 241, 0);
      block820.real = function() {
        var string821 = new GraceString("public");
        // call case 6: other requests
        var call824 = callmethodChecked(var_ann, "value", []);
        var opresult826 = callmethodChecked(call824, "==(1)", [1], string821);
        return opresult826;
      };
      var string828 = new GraceString("identifier");
      // call case 6: other requests
      var call831 = callmethodChecked(var_ann, "kind", []);
      var opresult833 = callmethodChecked(call831, "==(1)", [1], string828);
      var opresult835 = callmethodChecked(opresult833, "&&(1)", [1], block820);
      if (Grace_isTrue(opresult835)) {
        setLineNumber(242);    // compilenode identifier
        var_isPublic = GraceTrue;
        if819 = GraceDone;
      }
      var if836 = GraceDone;
      setLineNumber(244);    // compilenode block
      var block837 = new GraceBlock(this, 244, 0);
      block837.real = function() {
        var string838 = new GraceString("readable");
        // call case 6: other requests
        var call841 = callmethodChecked(var_ann, "value", []);
        var opresult843 = callmethodChecked(call841, "==(1)", [1], string838);
        return opresult843;
      };
      var string845 = new GraceString("identifier");
      // call case 6: other requests
      var call848 = callmethodChecked(var_ann, "kind", []);
      var opresult850 = callmethodChecked(call848, "==(1)", [1], string845);
      var opresult852 = callmethodChecked(opresult850, "&&(1)", [1], block837);
      if (Grace_isTrue(opresult852)) {
        setLineNumber(245);    // compilenode identifier
        var_isPublic = GraceTrue;
        if836 = GraceDone;
      }
      return if836;
    };
    // call case 5: prelude request
    var call853 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call817, block818);
    var if854 = GraceDone;
    setLineNumber(248);    // compilenode call
    // call case 6: other requests
    var call856 = callmethodChecked(var_isPublic, "prefix!", [0]);
    if (Grace_isTrue(call856)) {
      setLineNumber(249);    // compilenode string
      var string857 = new GraceString(" | MFLAG_CONFIDENTIAL");
      var string860 = new GraceString("");
      var opresult862 = callmethodChecked(string860, "++(1)", [1], var_flags);
      var opresult864 = callmethodChecked(opresult862, "++(1)", [1], string857);
      var_flags = opresult864;
      if854 = GraceDone;
    }
    setLineNumber(251);    // compilenode string
    var string866 = new GraceString("  struct UserObject *uo = (struct UserObject *)self;");
    // call case 4: self request
    onSelf = true;
    var call867 = callmethodChecked(this, "outprint(1)", [1], string866);
    setLineNumber(252);    // compilenode string
    var string869 = new GraceString("];");
    var string872 = new GraceString("  return uo->data[");
    var opresult874 = callmethodChecked(string872, "++(1)", [1], var_pos);
    var opresult876 = callmethodChecked(opresult874, "++(1)", [1], string869);
    // call case 4: self request
    onSelf = true;
    var call877 = callmethodChecked(this, "outprint(1)", [1], opresult876);
    setLineNumber(253);    // compilenode string
    var string879 = new GraceString("}");
    // call case 4: self request
    onSelf = true;
    var call880 = callmethodChecked(this, "outprint(1)", [1], string879);
    setLineNumber(254);    // compilenode string
    var string882 = new GraceString(");");
    var string885 = new GraceString(", ");
    var string888 = new GraceString("_");
    var string891 = new GraceString("_");
    var string894 = new GraceString("\",&reader_");
    var string897 = new GraceString(", \"");
    var string900 = new GraceString(" = addmethodrealflags(");
    var string903 = new GraceString("  Method *reader");
    var opresult905 = callmethodChecked(string903, "++(1)", [1], var_myc);
    var opresult907 = callmethodChecked(opresult905, "++(1)", [1], string900);
    var opresult909 = callmethodChecked(opresult907, "++(1)", [1], var_selfr);
    var opresult911 = callmethodChecked(opresult909, "++(1)", [1], string897);
    var opresult913 = callmethodChecked(opresult911, "++(1)", [1], var_enm);
    var opresult915 = callmethodChecked(opresult913, "++(1)", [1], string894);
    var opresult917 = callmethodChecked(opresult915, "++(1)", [1], var_escmodname);
    var opresult919 = callmethodChecked(opresult917, "++(1)", [1], string891);
    var opresult921 = callmethodChecked(opresult919, "++(1)", [1], var_inm);
    var opresult923 = callmethodChecked(opresult921, "++(1)", [1], string888);
    var opresult925 = callmethodChecked(opresult923, "++(1)", [1], var_myc);
    var opresult927 = callmethodChecked(opresult925, "++(1)", [1], string885);
    var opresult929 = callmethodChecked(opresult927, "++(1)", [1], var_flags);
    var opresult931 = callmethodChecked(opresult929, "++(1)", [1], string882);
    // call case 4: self request
    onSelf = true;
    var call932 = callmethodChecked(this, "out(1)", [1], opresult931);
    setLineNumber(255);    // compilenode string
    var string934 = new GraceString("->definitionModule = modulename;");
    var string937 = new GraceString("  reader");
    var opresult939 = callmethodChecked(string937, "++(1)", [1], var_myc);
    var opresult941 = callmethodChecked(opresult939, "++(1)", [1], string934);
    // call case 4: self request
    onSelf = true;
    var call942 = callmethodChecked(this, "out(1)", [1], opresult941);
    setLineNumber(256);    // compilenode string
    var string944 = new GraceString(";");
    // call case 6: other requests
    var call947 = callmethodChecked(var_o, "line", []);
    var string949 = new GraceString("->definitionLine = ");
    var string952 = new GraceString("  reader");
    var opresult954 = callmethodChecked(string952, "++(1)", [1], var_myc);
    var opresult956 = callmethodChecked(opresult954, "++(1)", [1], string949);
    var opresult958 = callmethodChecked(opresult956, "++(1)", [1], call947);
    var opresult960 = callmethodChecked(opresult958, "++(1)", [1], string944);
    // call case 4: self request
    onSelf = true;
    var call961 = callmethodChecked(this, "out(1)", [1], opresult960);
    return call961;
  };
  func770.paramCounts = [3];
  this.methods["compileobjdefdecmeth(3)"] = func770;
  func770.definitionLine = 229;
  func770.definitionModule = "genc";
  setLineNumber(258);    // compilenode method
  var func962 = function(argcv) {    // method compileobjdefdec(_,_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_selfr = arguments[curarg];
    curarg++;
    var var_pos = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(259);    // compilenode string
    var string963 = new GraceString("undefined");
    var var_val = string963;
    var if964 = GraceDone;
    setLineNumber(260);    // compilenode member
    // call case 6: other requests
    var call966 = callmethodChecked(var_o, "value", []);
    var opresult969 = callmethodChecked(GraceFalse, "\u2260(1)", [1], call966);
    if (Grace_isTrue(opresult969)) {
      var if970 = GraceDone;
      setLineNumber(261);    // compilenode string
      var string971 = new GraceString("object");
      // call case 6: other requests
      // call case 6: other requests
      var call975 = callmethodChecked(var_o, "value", []);
      var call976 = callmethodChecked(call975, "kind", []);
      var opresult978 = callmethodChecked(call976, "==(1)", [1], string971);
      if (Grace_isTrue(opresult978)) {
        setLineNumber(262);    // compilenode member
        // call case 6: other requests
        var call981 = callmethodChecked(var_o, "value", []);
        // call case 4: self request
        onSelf = true;
        var call982 = callmethodChecked(this, "compileobject(2)", [2], call981, var_selfr);
        setLineNumber(263);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call985 = callmethodChecked(var_o, "value", []);
        var call986 = callmethodChecked(call985, "register", []);
        var_val = call986;
        if970 = GraceDone;
      } else {
        setLineNumber(265);    // compilenode member
        // call case 6: other requests
        var call989 = callmethodChecked(var_o, "value", []);
        // call case 4: self request
        onSelf = true;
        var call990 = callmethodChecked(this, "compilenode(1)", [1], call989);
        var_val = call990;
        if970 = GraceDone;
      }
      if964 = if970;
    }
    setLineNumber(268);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(269);    // compilenode identifier
    var opresult993 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult993;
    setLineNumber(270);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call996 = callmethodChecked(var_o, "name", []);
    var call997 = callmethodChecked(call996, "value", []);
    var var_nm = call997;
    setLineNumber(271);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call999 = callmethodChecked(this, "escapestring2(1)", [1], var_nm);
    var var_enm = call999;
    setLineNumber(272);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call1001 = callmethodChecked(this, "escapeident(1)", [1], var_nm);
    var var_inm = call1001;
    setLineNumber(273);    // compilenode string
    var string1004 = new GraceString("// OBJECT CONST DEC ");
    var opresult1006 = callmethodChecked(string1004, "++(1)", [1], var_enm);
    // call case 4: self request
    onSelf = true;
    var call1007 = callmethodChecked(this, "out(1)", [1], opresult1006);
    setLineNumber(274);    // compilenode string
    var string1009 = new GraceString(");");
    var string1012 = new GraceString(", ");
    var string1015 = new GraceString(", ");
    var string1018 = new GraceString("  adddatum2(");
    var opresult1020 = callmethodChecked(string1018, "++(1)", [1], var_selfr);
    var opresult1022 = callmethodChecked(opresult1020, "++(1)", [1], string1015);
    var opresult1024 = callmethodChecked(opresult1022, "++(1)", [1], var_val);
    var opresult1026 = callmethodChecked(opresult1024, "++(1)", [1], string1012);
    var opresult1028 = callmethodChecked(opresult1026, "++(1)", [1], var_pos);
    var opresult1030 = callmethodChecked(opresult1028, "++(1)", [1], string1009);
    // call case 4: self request
    onSelf = true;
    var call1031 = callmethodChecked(this, "out(1)", [1], opresult1030);
    setLineNumber(277);    // compilenode string
    var string1033 = new GraceString("Object* args, int flags) {");
    setLineNumber(276);    // compilenode string
    var string1035 = new GraceString("(Object self, int nparams, int *argcv, ");
    setLineNumber(275);    // compilenode string
    var string1037 = new GraceString("");
    var string1040 = new GraceString("_");
    var string1043 = new GraceString("_");
    var string1046 = new GraceString("Object reader_");
    var opresult1048 = callmethodChecked(string1046, "++(1)", [1], var_escmodname);
    var opresult1050 = callmethodChecked(opresult1048, "++(1)", [1], string1043);
    var opresult1052 = callmethodChecked(opresult1050, "++(1)", [1], var_inm);
    var opresult1054 = callmethodChecked(opresult1052, "++(1)", [1], string1040);
    var opresult1056 = callmethodChecked(opresult1054, "++(1)", [1], var_myc);
    var opresult1058 = callmethodChecked(opresult1056, "++(1)", [1], string1037);
    var opresult1060 = callmethodChecked(opresult1058, "++(1)", [1], string1035);
    var opresult1062 = callmethodChecked(opresult1060, "++(1)", [1], string1033);
    // call case 4: self request
    onSelf = true;
    var call1063 = callmethodChecked(this, "outprint(1)", [1], opresult1062);
    setLineNumber(278);    // compilenode string
    var string1065 = new GraceString("  struct UserObject *uo = (struct UserObject *)self;");
    // call case 4: self request
    onSelf = true;
    var call1066 = callmethodChecked(this, "outprint(1)", [1], string1065);
    setLineNumber(279);    // compilenode string
    var string1068 = new GraceString("];");
    var string1071 = new GraceString("  return uo->data[");
    var opresult1073 = callmethodChecked(string1071, "++(1)", [1], var_pos);
    var opresult1075 = callmethodChecked(opresult1073, "++(1)", [1], string1068);
    // call case 4: self request
    onSelf = true;
    var call1076 = callmethodChecked(this, "outprint(1)", [1], opresult1075);
    setLineNumber(280);    // compilenode string
    var string1078 = new GraceString("}");
    // call case 4: self request
    onSelf = true;
    var call1079 = callmethodChecked(this, "outprint(1)", [1], string1078);
    setLineNumber(281);    // compilenode string
    var string1081 = new GraceString(", MFLAG_DEF);");
    var string1084 = new GraceString("_");
    var string1087 = new GraceString("_");
    var string1090 = new GraceString("\",&reader_");
    var string1093 = new GraceString(", \"");
    var string1096 = new GraceString(" = addmethodrealflags(");
    var string1099 = new GraceString("  Method *reader");
    var opresult1101 = callmethodChecked(string1099, "++(1)", [1], var_myc);
    var opresult1103 = callmethodChecked(opresult1101, "++(1)", [1], string1096);
    var opresult1105 = callmethodChecked(opresult1103, "++(1)", [1], var_selfr);
    var opresult1107 = callmethodChecked(opresult1105, "++(1)", [1], string1093);
    var opresult1109 = callmethodChecked(opresult1107, "++(1)", [1], var_enm);
    var opresult1111 = callmethodChecked(opresult1109, "++(1)", [1], string1090);
    var opresult1113 = callmethodChecked(opresult1111, "++(1)", [1], var_escmodname);
    var opresult1115 = callmethodChecked(opresult1113, "++(1)", [1], string1087);
    var opresult1117 = callmethodChecked(opresult1115, "++(1)", [1], var_inm);
    var opresult1119 = callmethodChecked(opresult1117, "++(1)", [1], string1084);
    var opresult1121 = callmethodChecked(opresult1119, "++(1)", [1], var_myc);
    var opresult1123 = callmethodChecked(opresult1121, "++(1)", [1], string1081);
    // call case 4: self request
    onSelf = true;
    var call1124 = callmethodChecked(this, "out(1)", [1], opresult1123);
    return call1124;
  };
  func962.paramCounts = [3];
  this.methods["compileobjdefdec(3)"] = func962;
  func962.definitionLine = 258;
  func962.definitionModule = "genc";
  setLineNumber(283);    // compilenode method
  var func1125 = function(argcv) {    // method compileobjvardecdata(_,_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_selfr = arguments[curarg];
    curarg++;
    var var_pos = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(284);    // compilenode string
    var string1126 = new GraceString("undefined");
    var var_val = string1126;
    var if1127 = GraceDone;
    setLineNumber(285);    // compilenode member
    // call case 6: other requests
    var call1129 = callmethodChecked(var_o, "value", []);
    var opresult1132 = callmethodChecked(GraceFalse, "\u2260(1)", [1], call1129);
    if (Grace_isTrue(opresult1132)) {
      setLineNumber(286);    // compilenode member
      // call case 6: other requests
      var call1135 = callmethodChecked(var_o, "value", []);
      // call case 4: self request
      onSelf = true;
      var call1136 = callmethodChecked(this, "compilenode(1)", [1], call1135);
      var_val = call1136;
      if1127 = GraceDone;
    }
    setLineNumber(288);    // compilenode string
    var string1138 = new GraceString(");");
    var string1141 = new GraceString(", ");
    var string1144 = new GraceString(", ");
    var string1147 = new GraceString("  adddatum2(");
    var opresult1149 = callmethodChecked(string1147, "++(1)", [1], var_selfr);
    var opresult1151 = callmethodChecked(opresult1149, "++(1)", [1], string1144);
    var opresult1153 = callmethodChecked(opresult1151, "++(1)", [1], var_val);
    var opresult1155 = callmethodChecked(opresult1153, "++(1)", [1], string1141);
    var opresult1157 = callmethodChecked(opresult1155, "++(1)", [1], var_pos);
    var opresult1159 = callmethodChecked(opresult1157, "++(1)", [1], string1138);
    // call case 4: self request
    onSelf = true;
    var call1160 = callmethodChecked(this, "out(1)", [1], opresult1159);
    return call1160;
  };
  func1125.paramCounts = [3];
  this.methods["compileobjvardecdata(3)"] = func1125;
  func1125.definitionLine = 283;
  func1125.definitionModule = "genc";
  setLineNumber(290);    // compilenode method
  var func1161 = function(argcv) {    // method compileobjvardecmeth(_,_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_selfr = arguments[curarg];
    curarg++;
    var var_pos = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(291);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(292);    // compilenode identifier
    var opresult1164 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult1164;
    setLineNumber(293);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call1167 = callmethodChecked(var_o, "name", []);
    var call1168 = callmethodChecked(call1167, "value", []);
    var var_nm = call1168;
    setLineNumber(294);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call1170 = callmethodChecked(this, "escapestring2(1)", [1], var_nm);
    var var_enm = call1170;
    setLineNumber(295);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call1172 = callmethodChecked(this, "escapeident(1)", [1], var_nm);
    var var_inm = call1172;
    setLineNumber(298);    // compilenode string
    var string1174 = new GraceString("Object* args, int flags) {");
    setLineNumber(297);    // compilenode string
    var string1176 = new GraceString("(Object self, int nparams, int *argcv, ");
    setLineNumber(296);    // compilenode string
    var string1178 = new GraceString("");
    var string1181 = new GraceString("_");
    var string1184 = new GraceString("_");
    var string1187 = new GraceString("Object reader_");
    var opresult1189 = callmethodChecked(string1187, "++(1)", [1], var_escmodname);
    var opresult1191 = callmethodChecked(opresult1189, "++(1)", [1], string1184);
    var opresult1193 = callmethodChecked(opresult1191, "++(1)", [1], var_inm);
    var opresult1195 = callmethodChecked(opresult1193, "++(1)", [1], string1181);
    var opresult1197 = callmethodChecked(opresult1195, "++(1)", [1], var_myc);
    var opresult1199 = callmethodChecked(opresult1197, "++(1)", [1], string1178);
    var opresult1201 = callmethodChecked(opresult1199, "++(1)", [1], string1176);
    var opresult1203 = callmethodChecked(opresult1201, "++(1)", [1], string1174);
    // call case 4: self request
    onSelf = true;
    var call1204 = callmethodChecked(this, "outprint(1)", [1], opresult1203);
    setLineNumber(299);    // compilenode string
    var string1205 = new GraceString("MFLAG_CONFIDENTIAL");
    var var_rflags = string1205;
    setLineNumber(300);    // compilenode string
    var string1206 = new GraceString("MFLAG_CONFIDENTIAL");
    var var_wflags = string1206;
    setLineNumber(301);    // compilenode member
    // call case 6: other requests
    var call1209 = callmethodChecked(var_o, "annotations", []);
    var block1210 = new GraceBlock(this, 301, 1);
    setLineNumber(1);    // compilenode identifier
    block1210.real = function(var_ann) {
      var if1211 = GraceDone;
      setLineNumber(302);    // compilenode block
      var block1212 = new GraceBlock(this, 302, 0);
      block1212.real = function() {
        var string1213 = new GraceString("public");
        // call case 6: other requests
        var call1216 = callmethodChecked(var_ann, "value", []);
        var opresult1218 = callmethodChecked(call1216, "==(1)", [1], string1213);
        return opresult1218;
      };
      var string1220 = new GraceString("identifier");
      // call case 6: other requests
      var call1223 = callmethodChecked(var_ann, "kind", []);
      var opresult1225 = callmethodChecked(call1223, "==(1)", [1], string1220);
      var opresult1227 = callmethodChecked(opresult1225, "&&(1)", [1], block1212);
      if (Grace_isTrue(opresult1227)) {
        setLineNumber(303);    // compilenode string
        var string1228 = new GraceString("0");
        var_rflags = string1228;
        setLineNumber(304);    // compilenode string
        var string1229 = new GraceString("0");
        var_wflags = string1229;
        if1211 = GraceDone;
      }
      var if1230 = GraceDone;
      setLineNumber(306);    // compilenode block
      var block1231 = new GraceBlock(this, 306, 0);
      block1231.real = function() {
        var string1232 = new GraceString("readable");
        // call case 6: other requests
        var call1235 = callmethodChecked(var_ann, "value", []);
        var opresult1237 = callmethodChecked(call1235, "==(1)", [1], string1232);
        return opresult1237;
      };
      var string1239 = new GraceString("identifier");
      // call case 6: other requests
      var call1242 = callmethodChecked(var_ann, "kind", []);
      var opresult1244 = callmethodChecked(call1242, "==(1)", [1], string1239);
      var opresult1246 = callmethodChecked(opresult1244, "&&(1)", [1], block1231);
      if (Grace_isTrue(opresult1246)) {
        setLineNumber(307);    // compilenode string
        var string1247 = new GraceString("0");
        var_rflags = string1247;
        if1230 = GraceDone;
      }
      var if1248 = GraceDone;
      setLineNumber(309);    // compilenode block
      var block1249 = new GraceBlock(this, 309, 0);
      block1249.real = function() {
        var string1250 = new GraceString("writable");
        // call case 6: other requests
        var call1253 = callmethodChecked(var_ann, "value", []);
        var opresult1255 = callmethodChecked(call1253, "==(1)", [1], string1250);
        return opresult1255;
      };
      var string1257 = new GraceString("identifier");
      // call case 6: other requests
      var call1260 = callmethodChecked(var_ann, "kind", []);
      var opresult1262 = callmethodChecked(call1260, "==(1)", [1], string1257);
      var opresult1264 = callmethodChecked(opresult1262, "&&(1)", [1], block1249);
      if (Grace_isTrue(opresult1264)) {
        setLineNumber(310);    // compilenode string
        var string1265 = new GraceString("0");
        var_wflags = string1265;
        if1248 = GraceDone;
      }
      return if1248;
    };
    // call case 5: prelude request
    var call1266 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1209, block1210);
    setLineNumber(313);    // compilenode string
    var string1268 = new GraceString("  struct UserObject *uo = (struct UserObject *)self;");
    // call case 4: self request
    onSelf = true;
    var call1269 = callmethodChecked(this, "outprint(1)", [1], string1268);
    setLineNumber(314);    // compilenode string
    var string1271 = new GraceString("];");
    var string1274 = new GraceString("  return uo->data[");
    var opresult1276 = callmethodChecked(string1274, "++(1)", [1], var_pos);
    var opresult1278 = callmethodChecked(opresult1276, "++(1)", [1], string1271);
    // call case 4: self request
    onSelf = true;
    var call1279 = callmethodChecked(this, "outprint(1)", [1], opresult1278);
    setLineNumber(315);    // compilenode string
    var string1281 = new GraceString("}");
    // call case 4: self request
    onSelf = true;
    var call1282 = callmethodChecked(this, "outprint(1)", [1], string1281);
    setLineNumber(316);    // compilenode string
    var string1284 = new GraceString(");");
    var string1287 = new GraceString(", ");
    var string1290 = new GraceString("_");
    var string1293 = new GraceString("_");
    var string1296 = new GraceString("\", &reader_");
    var string1299 = new GraceString(", \"");
    var string1302 = new GraceString(" = addmethodrealflags(");
    var string1305 = new GraceString("  Method *reader");
    var opresult1307 = callmethodChecked(string1305, "++(1)", [1], var_myc);
    var opresult1309 = callmethodChecked(opresult1307, "++(1)", [1], string1302);
    var opresult1311 = callmethodChecked(opresult1309, "++(1)", [1], var_selfr);
    var opresult1313 = callmethodChecked(opresult1311, "++(1)", [1], string1299);
    var opresult1315 = callmethodChecked(opresult1313, "++(1)", [1], var_enm);
    var opresult1317 = callmethodChecked(opresult1315, "++(1)", [1], string1296);
    var opresult1319 = callmethodChecked(opresult1317, "++(1)", [1], var_escmodname);
    var opresult1321 = callmethodChecked(opresult1319, "++(1)", [1], string1293);
    var opresult1323 = callmethodChecked(opresult1321, "++(1)", [1], var_inm);
    var opresult1325 = callmethodChecked(opresult1323, "++(1)", [1], string1290);
    var opresult1327 = callmethodChecked(opresult1325, "++(1)", [1], var_myc);
    var opresult1329 = callmethodChecked(opresult1327, "++(1)", [1], string1287);
    var opresult1331 = callmethodChecked(opresult1329, "++(1)", [1], var_rflags);
    var opresult1333 = callmethodChecked(opresult1331, "++(1)", [1], string1284);
    // call case 4: self request
    onSelf = true;
    var call1334 = callmethodChecked(this, "out(1)", [1], opresult1333);
    setLineNumber(319);    // compilenode string
    var string1336 = new GraceString("Object* args, int flags) {");
    setLineNumber(318);    // compilenode string
    var string1338 = new GraceString("(Object self, int nparams, int *argcv, ");
    setLineNumber(317);    // compilenode string
    var string1340 = new GraceString("");
    var string1343 = new GraceString("_");
    var string1346 = new GraceString("_");
    var string1349 = new GraceString("Object writer_");
    var opresult1351 = callmethodChecked(string1349, "++(1)", [1], var_escmodname);
    var opresult1353 = callmethodChecked(opresult1351, "++(1)", [1], string1346);
    var opresult1355 = callmethodChecked(opresult1353, "++(1)", [1], var_inm);
    var opresult1357 = callmethodChecked(opresult1355, "++(1)", [1], string1343);
    var opresult1359 = callmethodChecked(opresult1357, "++(1)", [1], var_myc);
    var opresult1361 = callmethodChecked(opresult1359, "++(1)", [1], string1340);
    var opresult1363 = callmethodChecked(opresult1361, "++(1)", [1], string1338);
    var opresult1365 = callmethodChecked(opresult1363, "++(1)", [1], string1336);
    // call case 4: self request
    onSelf = true;
    var call1366 = callmethodChecked(this, "outprint(1)", [1], opresult1365);
    setLineNumber(320);    // compilenode string
    var string1368 = new GraceString("  struct UserObject *uo = (struct UserObject *)self;");
    // call case 4: self request
    onSelf = true;
    var call1369 = callmethodChecked(this, "outprint(1)", [1], string1368);
    setLineNumber(321);    // compilenode string
    var string1371 = new GraceString("] = args[0];");
    var string1374 = new GraceString("  uo->data[");
    var opresult1376 = callmethodChecked(string1374, "++(1)", [1], var_pos);
    var opresult1378 = callmethodChecked(opresult1376, "++(1)", [1], string1371);
    // call case 4: self request
    onSelf = true;
    var call1379 = callmethodChecked(this, "outprint(1)", [1], opresult1378);
    setLineNumber(322);    // compilenode string
    var string1381 = new GraceString("  return done;");
    // call case 4: self request
    onSelf = true;
    var call1382 = callmethodChecked(this, "outprint(1)", [1], string1381);
    setLineNumber(323);    // compilenode string
    var string1384 = new GraceString("}");
    // call case 4: self request
    onSelf = true;
    var call1385 = callmethodChecked(this, "outprint(1)", [1], string1384);
    setLineNumber(324);    // compilenode string
    var string1387 = new GraceString(");");
    var string1390 = new GraceString(", ");
    var string1393 = new GraceString("_");
    var string1396 = new GraceString("_");
    var string1399 = new GraceString(":=(1)\", &writer_");
    var string1402 = new GraceString(", \"");
    var string1405 = new GraceString(" = addmethodrealflags(");
    var string1408 = new GraceString("  Method *writer");
    var opresult1410 = callmethodChecked(string1408, "++(1)", [1], var_myc);
    var opresult1412 = callmethodChecked(opresult1410, "++(1)", [1], string1405);
    var opresult1414 = callmethodChecked(opresult1412, "++(1)", [1], var_selfr);
    var opresult1416 = callmethodChecked(opresult1414, "++(1)", [1], string1402);
    var opresult1418 = callmethodChecked(opresult1416, "++(1)", [1], var_enm);
    var opresult1420 = callmethodChecked(opresult1418, "++(1)", [1], string1399);
    var opresult1422 = callmethodChecked(opresult1420, "++(1)", [1], var_escmodname);
    var opresult1424 = callmethodChecked(opresult1422, "++(1)", [1], string1396);
    var opresult1426 = callmethodChecked(opresult1424, "++(1)", [1], var_inm);
    var opresult1428 = callmethodChecked(opresult1426, "++(1)", [1], string1393);
    var opresult1430 = callmethodChecked(opresult1428, "++(1)", [1], var_myc);
    var opresult1432 = callmethodChecked(opresult1430, "++(1)", [1], string1390);
    var opresult1434 = callmethodChecked(opresult1432, "++(1)", [1], var_wflags);
    var opresult1436 = callmethodChecked(opresult1434, "++(1)", [1], string1387);
    // call case 4: self request
    onSelf = true;
    var call1437 = callmethodChecked(this, "out(1)", [1], opresult1436);
    setLineNumber(325);    // compilenode string
    var string1439 = new GraceString("->definitionModule = modulename;");
    var string1442 = new GraceString("  reader");
    var opresult1444 = callmethodChecked(string1442, "++(1)", [1], var_myc);
    var opresult1446 = callmethodChecked(opresult1444, "++(1)", [1], string1439);
    // call case 4: self request
    onSelf = true;
    var call1447 = callmethodChecked(this, "out(1)", [1], opresult1446);
    setLineNumber(326);    // compilenode string
    var string1449 = new GraceString("->definitionModule = modulename;");
    var string1452 = new GraceString("  writer");
    var opresult1454 = callmethodChecked(string1452, "++(1)", [1], var_myc);
    var opresult1456 = callmethodChecked(opresult1454, "++(1)", [1], string1449);
    // call case 4: self request
    onSelf = true;
    var call1457 = callmethodChecked(this, "out(1)", [1], opresult1456);
    setLineNumber(327);    // compilenode string
    var string1459 = new GraceString(";");
    // call case 6: other requests
    var call1462 = callmethodChecked(var_o, "line", []);
    var string1464 = new GraceString("->definitionLine = ");
    var string1467 = new GraceString("  reader");
    var opresult1469 = callmethodChecked(string1467, "++(1)", [1], var_myc);
    var opresult1471 = callmethodChecked(opresult1469, "++(1)", [1], string1464);
    var opresult1473 = callmethodChecked(opresult1471, "++(1)", [1], call1462);
    var opresult1475 = callmethodChecked(opresult1473, "++(1)", [1], string1459);
    // call case 4: self request
    onSelf = true;
    var call1476 = callmethodChecked(this, "out(1)", [1], opresult1475);
    setLineNumber(328);    // compilenode string
    var string1478 = new GraceString(";");
    // call case 6: other requests
    var call1481 = callmethodChecked(var_o, "line", []);
    var string1483 = new GraceString("->definitionLine = ");
    var string1486 = new GraceString("  writer");
    var opresult1488 = callmethodChecked(string1486, "++(1)", [1], var_myc);
    var opresult1490 = callmethodChecked(opresult1488, "++(1)", [1], string1483);
    var opresult1492 = callmethodChecked(opresult1490, "++(1)", [1], call1481);
    var opresult1494 = callmethodChecked(opresult1492, "++(1)", [1], string1478);
    // call case 4: self request
    onSelf = true;
    var call1495 = callmethodChecked(this, "out(1)", [1], opresult1494);
    return call1495;
  };
  func1161.paramCounts = [3];
  this.methods["compileobjvardecmeth(3)"] = func1161;
  func1161.definitionLine = 290;
  func1161.definitionModule = "genc";
  setLineNumber(330);    // compilenode method
  var func1496 = function(argcv) {    // method compileobjvardec(_,_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_selfr = arguments[curarg];
    curarg++;
    var var_pos = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(331);    // compilenode string
    var string1497 = new GraceString("undefined");
    var var_val = string1497;
    var if1498 = GraceDone;
    setLineNumber(332);    // compilenode member
    // call case 6: other requests
    var call1500 = callmethodChecked(var_o, "value", []);
    var opresult1503 = callmethodChecked(GraceFalse, "\u2260(1)", [1], call1500);
    if (Grace_isTrue(opresult1503)) {
      setLineNumber(333);    // compilenode member
      // call case 6: other requests
      var call1506 = callmethodChecked(var_o, "value", []);
      // call case 4: self request
      onSelf = true;
      var call1507 = callmethodChecked(this, "compilenode(1)", [1], call1506);
      var_val = call1507;
      if1498 = GraceDone;
    }
    setLineNumber(335);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(336);    // compilenode identifier
    var opresult1510 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult1510;
    setLineNumber(337);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call1513 = callmethodChecked(var_o, "name", []);
    var call1514 = callmethodChecked(call1513, "value", []);
    var var_nm = call1514;
    setLineNumber(338);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call1516 = callmethodChecked(this, "escapestring2(1)", [1], var_nm);
    var var_enm = call1516;
    setLineNumber(339);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call1518 = callmethodChecked(this, "escapeident(1)", [1], var_nm);
    var var_inm = call1518;
    setLineNumber(340);    // compilenode string
    var string1521 = new GraceString("// OBJECT VAR DEC ");
    var opresult1523 = callmethodChecked(string1521, "++(1)", [1], var_nm);
    // call case 4: self request
    onSelf = true;
    var call1524 = callmethodChecked(this, "out(1)", [1], opresult1523);
    setLineNumber(341);    // compilenode string
    var string1526 = new GraceString(");");
    var string1529 = new GraceString(", ");
    var string1532 = new GraceString(", ");
    var string1535 = new GraceString("  adddatum2(");
    var opresult1537 = callmethodChecked(string1535, "++(1)", [1], var_selfr);
    var opresult1539 = callmethodChecked(opresult1537, "++(1)", [1], string1532);
    var opresult1541 = callmethodChecked(opresult1539, "++(1)", [1], var_val);
    var opresult1543 = callmethodChecked(opresult1541, "++(1)", [1], string1529);
    var opresult1545 = callmethodChecked(opresult1543, "++(1)", [1], var_pos);
    var opresult1547 = callmethodChecked(opresult1545, "++(1)", [1], string1526);
    // call case 4: self request
    onSelf = true;
    var call1548 = callmethodChecked(this, "out(1)", [1], opresult1547);
    setLineNumber(344);    // compilenode string
    var string1550 = new GraceString("Object* args, int flags) {");
    setLineNumber(343);    // compilenode string
    var string1552 = new GraceString("(Object self, int nparams, int *argcv, ");
    setLineNumber(342);    // compilenode string
    var string1554 = new GraceString("");
    var string1557 = new GraceString("_");
    var string1560 = new GraceString("_");
    var string1563 = new GraceString("Object reader_");
    var opresult1565 = callmethodChecked(string1563, "++(1)", [1], var_escmodname);
    var opresult1567 = callmethodChecked(opresult1565, "++(1)", [1], string1560);
    var opresult1569 = callmethodChecked(opresult1567, "++(1)", [1], var_inm);
    var opresult1571 = callmethodChecked(opresult1569, "++(1)", [1], string1557);
    var opresult1573 = callmethodChecked(opresult1571, "++(1)", [1], var_myc);
    var opresult1575 = callmethodChecked(opresult1573, "++(1)", [1], string1554);
    var opresult1577 = callmethodChecked(opresult1575, "++(1)", [1], string1552);
    var opresult1579 = callmethodChecked(opresult1577, "++(1)", [1], string1550);
    // call case 4: self request
    onSelf = true;
    var call1580 = callmethodChecked(this, "outprint(1)", [1], opresult1579);
    setLineNumber(345);    // compilenode string
    var string1582 = new GraceString("  struct UserObject *uo = (struct UserObject *)self;");
    // call case 4: self request
    onSelf = true;
    var call1583 = callmethodChecked(this, "outprint(1)", [1], string1582);
    setLineNumber(346);    // compilenode string
    var string1585 = new GraceString("];");
    var string1588 = new GraceString("  return uo->data[");
    var opresult1590 = callmethodChecked(string1588, "++(1)", [1], var_pos);
    var opresult1592 = callmethodChecked(opresult1590, "++(1)", [1], string1585);
    // call case 4: self request
    onSelf = true;
    var call1593 = callmethodChecked(this, "outprint(1)", [1], opresult1592);
    setLineNumber(347);    // compilenode string
    var string1595 = new GraceString("}");
    // call case 4: self request
    onSelf = true;
    var call1596 = callmethodChecked(this, "outprint(1)", [1], string1595);
    setLineNumber(348);    // compilenode string
    var string1598 = new GraceString(");");
    var string1601 = new GraceString("_");
    var string1604 = new GraceString("_");
    var string1607 = new GraceString("\",&reader_");
    var string1610 = new GraceString(", \"");
    var string1613 = new GraceString("  addmethodreal(");
    var opresult1615 = callmethodChecked(string1613, "++(1)", [1], var_selfr);
    var opresult1617 = callmethodChecked(opresult1615, "++(1)", [1], string1610);
    var opresult1619 = callmethodChecked(opresult1617, "++(1)", [1], var_enm);
    var opresult1621 = callmethodChecked(opresult1619, "++(1)", [1], string1607);
    var opresult1623 = callmethodChecked(opresult1621, "++(1)", [1], var_escmodname);
    var opresult1625 = callmethodChecked(opresult1623, "++(1)", [1], string1604);
    var opresult1627 = callmethodChecked(opresult1625, "++(1)", [1], var_inm);
    var opresult1629 = callmethodChecked(opresult1627, "++(1)", [1], string1601);
    var opresult1631 = callmethodChecked(opresult1629, "++(1)", [1], var_myc);
    var opresult1633 = callmethodChecked(opresult1631, "++(1)", [1], string1598);
    // call case 4: self request
    onSelf = true;
    var call1634 = callmethodChecked(this, "out(1)", [1], opresult1633);
    setLineNumber(351);    // compilenode string
    var string1636 = new GraceString("Object* args, int flags) {");
    setLineNumber(350);    // compilenode string
    var string1638 = new GraceString("(Object self, int nparams, int *argcv, ");
    setLineNumber(349);    // compilenode string
    var string1640 = new GraceString("");
    var string1643 = new GraceString("_");
    var string1646 = new GraceString("_");
    var string1649 = new GraceString("Object writer_");
    var opresult1651 = callmethodChecked(string1649, "++(1)", [1], var_escmodname);
    var opresult1653 = callmethodChecked(opresult1651, "++(1)", [1], string1646);
    var opresult1655 = callmethodChecked(opresult1653, "++(1)", [1], var_inm);
    var opresult1657 = callmethodChecked(opresult1655, "++(1)", [1], string1643);
    var opresult1659 = callmethodChecked(opresult1657, "++(1)", [1], var_myc);
    var opresult1661 = callmethodChecked(opresult1659, "++(1)", [1], string1640);
    var opresult1663 = callmethodChecked(opresult1661, "++(1)", [1], string1638);
    var opresult1665 = callmethodChecked(opresult1663, "++(1)", [1], string1636);
    // call case 4: self request
    onSelf = true;
    var call1666 = callmethodChecked(this, "outprint(1)", [1], opresult1665);
    setLineNumber(352);    // compilenode string
    var string1668 = new GraceString("  struct UserObject *uo = (struct UserObject *)self;");
    // call case 4: self request
    onSelf = true;
    var call1669 = callmethodChecked(this, "outprint(1)", [1], string1668);
    setLineNumber(353);    // compilenode string
    var string1671 = new GraceString("] = args[0];");
    var string1674 = new GraceString("  uo->data[");
    var opresult1676 = callmethodChecked(string1674, "++(1)", [1], var_pos);
    var opresult1678 = callmethodChecked(opresult1676, "++(1)", [1], string1671);
    // call case 4: self request
    onSelf = true;
    var call1679 = callmethodChecked(this, "outprint(1)", [1], opresult1678);
    setLineNumber(354);    // compilenode string
    var string1681 = new GraceString("  return done;");
    // call case 4: self request
    onSelf = true;
    var call1682 = callmethodChecked(this, "outprint(1)", [1], string1681);
    setLineNumber(355);    // compilenode string
    var string1684 = new GraceString("}");
    // call case 4: self request
    onSelf = true;
    var call1685 = callmethodChecked(this, "outprint(1)", [1], string1684);
    setLineNumber(356);    // compilenode string
    var string1687 = new GraceString(");");
    var string1690 = new GraceString("_");
    var string1693 = new GraceString("_");
    var string1696 = new GraceString(":=(1)\", &writer_");
    var string1699 = new GraceString(", \"");
    var string1702 = new GraceString("  addmethodreal(");
    var opresult1704 = callmethodChecked(string1702, "++(1)", [1], var_selfr);
    var opresult1706 = callmethodChecked(opresult1704, "++(1)", [1], string1699);
    var opresult1708 = callmethodChecked(opresult1706, "++(1)", [1], var_enm);
    var opresult1710 = callmethodChecked(opresult1708, "++(1)", [1], string1696);
    var opresult1712 = callmethodChecked(opresult1710, "++(1)", [1], var_escmodname);
    var opresult1714 = callmethodChecked(opresult1712, "++(1)", [1], string1693);
    var opresult1716 = callmethodChecked(opresult1714, "++(1)", [1], var_inm);
    var opresult1718 = callmethodChecked(opresult1716, "++(1)", [1], string1690);
    var opresult1720 = callmethodChecked(opresult1718, "++(1)", [1], var_myc);
    var opresult1722 = callmethodChecked(opresult1720, "++(1)", [1], string1687);
    // call case 4: self request
    onSelf = true;
    var call1723 = callmethodChecked(this, "out(1)", [1], opresult1722);
    return call1723;
  };
  func1496.paramCounts = [3];
  this.methods["compileobjvardec(3)"] = func1496;
  func1496.definitionLine = 330;
  func1496.definitionModule = "genc";
  setLineNumber(358);    // compilenode method
  var func1724 = function(argcv) {    // method compileobject(_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_outerRef = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(359);    // compilenode identifier
    var var_origInBlock = var_inBlock;
    setLineNumber(360);    // compilenode identifier
    var_inBlock = GraceFalse;
    setLineNumber(361);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(362);    // compilenode identifier
    var opresult1727 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult1727;
    setLineNumber(363);    // compilenode string
    var string1729 = new GraceString("obj");
    var opresult1731 = callmethodChecked(string1729, "++(1)", [1], var_myc);
    var var_selfr = opresult1731;
    setLineNumber(364);    // compilenode num
    var var_numFields = new GraceNum(1);
    setLineNumber(365);    // compilenode num
    var var_numMethods = new GraceNum(0);
    setLineNumber(366);    // compilenode num
    var var_pos = new GraceNum(1);
    setLineNumber(367);    // compilenode identifier
    var var_superobj = GraceFalse;
    setLineNumber(368);    // compilenode string
    var string1733 = new GraceString(" = inheritingObject;");
    var string1736 = new GraceString("  Object inheritingObject");
    var opresult1738 = callmethodChecked(string1736, "++(1)", [1], var_myc);
    var opresult1740 = callmethodChecked(opresult1738, "++(1)", [1], string1733);
    // call case 4: self request
    onSelf = true;
    var call1741 = callmethodChecked(this, "out(1)", [1], opresult1740);
    setLineNumber(369);    // compilenode string
    var string1743 = new GraceString("  if (isTailObject) {");
    // call case 4: self request
    onSelf = true;
    var call1744 = callmethodChecked(this, "out(1)", [1], string1743);
    setLineNumber(370);    // compilenode string
    var string1746 = new GraceString("    isTailObject = 0;");
    // call case 4: self request
    onSelf = true;
    var call1747 = callmethodChecked(this, "out(1)", [1], string1746);
    setLineNumber(371);    // compilenode string
    var string1749 = new GraceString("    inheritingObject = NULL;");
    // call case 4: self request
    onSelf = true;
    var call1750 = callmethodChecked(this, "out(1)", [1], string1749);
    setLineNumber(372);    // compilenode string
    var string1752 = new GraceString("  }");
    // call case 4: self request
    onSelf = true;
    var call1753 = callmethodChecked(this, "out(1)", [1], string1752);
    setLineNumber(373);    // compilenode member
    // call case 6: other requests
    var call1756 = callmethodChecked(var_o, "value", []);
    var block1757 = new GraceBlock(this, 373, 1);
    setLineNumber(1);    // compilenode identifier
    block1757.real = function(var_e) {
      var if1758 = GraceDone;
      setLineNumber(374);    // compilenode string
      var string1759 = new GraceString("vardec");
      // call case 6: other requests
      var call1762 = callmethodChecked(var_e, "kind", []);
      var opresult1764 = callmethodChecked(call1762, "==(1)", [1], string1759);
      if (Grace_isTrue(opresult1764)) {
        setLineNumber(375);    // compilenode identifier
        var opresult1767 = callmethodChecked(var_numMethods, "+(1)", [1], new GraceNum(1));
        var_numMethods = opresult1767;
        if1758 = GraceDone;
      }
      var if1768 = GraceDone;
      setLineNumber(377);    // compilenode string
      var string1769 = new GraceString("method");
      // call case 6: other requests
      var call1772 = callmethodChecked(var_e, "kind", []);
      var opresult1774 = callmethodChecked(call1772, "==(1)", [1], string1769);
      if (Grace_isTrue(opresult1774)) {
        var if1775 = GraceDone;
        setLineNumber(378);    // compilenode member
        // call case 6: other requests
        var call1777 = callmethodChecked(var_e, "isFresh", []);
        if (Grace_isTrue(call1777)) {
          setLineNumber(379);    // compilenode identifier
          var opresult1780 = callmethodChecked(var_numMethods, "+(1)", [1], new GraceNum(1));
          var_numMethods = opresult1780;
          setLineNumber(380);    // compilenode identifier
          var opresult1783 = callmethodChecked(var_numFields, "+(1)", [1], new GraceNum(1));
          var_numFields = opresult1783;
          if1775 = GraceDone;
        }
        if1768 = if1775;
      }
      setLineNumber(383);    // compilenode identifier
      var opresult1786 = callmethodChecked(var_numMethods, "+(1)", [1], new GraceNum(1));
      var_numMethods = opresult1786;
      setLineNumber(384);    // compilenode identifier
      var opresult1789 = callmethodChecked(var_numFields, "+(1)", [1], new GraceNum(1));
      var_numFields = opresult1789;
      return GraceDone;
    };
    // call case 5: prelude request
    var call1790 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1756, block1757);
    var if1791 = GraceDone;
    setLineNumber(386);    // compilenode identifier
    var opresult1794 = callmethodChecked(var_numFields, "==(1)", [1], new GraceNum(3));
    if (Grace_isTrue(opresult1794)) {
      setLineNumber(387);    // compilenode num
      var_numFields = new GraceNum(4);
      if1791 = GraceDone;
    }
    setLineNumber(389);    // compilenode string
    var string1796 = new GraceString(";");
    var string1799 = new GraceString("static ClassData objclass");
    var opresult1801 = callmethodChecked(string1799, "++(1)", [1], var_myc);
    var opresult1803 = callmethodChecked(opresult1801, "++(1)", [1], string1796);
    // call case 6: other requests
    var call1804 = callmethodChecked(var_globals, "push(1)", [1], opresult1803);
    setLineNumber(391);    // compilenode string
    var string1806 = new GraceString(");");
    var string1809 = new GraceString(", objclass");
    var string1812 = new GraceString("");
    var opresult1814 = callmethodChecked(string1812, "++(1)", [1], var_numFields);
    var opresult1816 = callmethodChecked(opresult1814, "++(1)", [1], string1809);
    var opresult1818 = callmethodChecked(opresult1816, "++(1)", [1], var_myc);
    var opresult1820 = callmethodChecked(opresult1818, "++(1)", [1], string1806);
    setLineNumber(390);    // compilenode string
    var string1822 = new GraceString(",");
    var string1825 = new GraceString(" = alloc_userobj2(");
    var opresult1827 = callmethodChecked(string1825, "++(1)", [1], var_numMethods);
    var opresult1829 = callmethodChecked(opresult1827, "++(1)", [1], string1822);
    var string1832 = new GraceString("  Object ");
    var opresult1834 = callmethodChecked(string1832, "++(1)", [1], var_selfr);
    var opresult1836 = callmethodChecked(opresult1834, "++(1)", [1], opresult1829);
    var opresult1838 = callmethodChecked(opresult1836, "++(1)", [1], opresult1820);
    // call case 4: self request
    onSelf = true;
    var call1839 = callmethodChecked(this, "out(1)", [1], opresult1838);
    setLineNumber(392);    // compilenode string
    var string1841 = new GraceString(");");
    var string1844 = new GraceString("  gc_frame_newslot(");
    var opresult1846 = callmethodChecked(string1844, "++(1)", [1], var_selfr);
    var opresult1848 = callmethodChecked(opresult1846, "++(1)", [1], string1841);
    // call case 4: self request
    onSelf = true;
    var call1849 = callmethodChecked(this, "out(1)", [1], opresult1848);
    var if1850 = GraceDone;
    setLineNumber(393);    // compilenode string
    var string1851 = new GraceString("object");
    // call case 6: other requests
    var call1854 = callmethodChecked(var_o, "name", []);
    var opresult1856 = callmethodChecked(call1854, "\u2260(1)", [1], string1851);
    if (Grace_isTrue(opresult1856)) {
      setLineNumber(394);    // compilenode string
      var string1858 = new GraceString(" == NULL) {");
      var string1861 = new GraceString("if (objclass");
      var opresult1863 = callmethodChecked(string1861, "++(1)", [1], var_myc);
      var opresult1865 = callmethodChecked(opresult1863, "++(1)", [1], string1858);
      // call case 4: self request
      onSelf = true;
      var call1866 = callmethodChecked(this, "out(1)", [1], opresult1865);
      setLineNumber(395);    // compilenode string
      var string1868 = new GraceString("->class->name);");
      var string1871 = new GraceString("  glfree(");
      var opresult1873 = callmethodChecked(string1871, "++(1)", [1], var_selfr);
      var opresult1875 = callmethodChecked(opresult1873, "++(1)", [1], string1868);
      // call case 4: self request
      onSelf = true;
      var call1876 = callmethodChecked(this, "out(1)", [1], opresult1875);
      setLineNumber(396);    // compilenode string
      var string1878 = new GraceString("\";");
      // call case 6: other requests
      var call1881 = callmethodChecked(var_o, "name", []);
      var string1883 = new GraceString("->class->name = \"");
      var string1886 = new GraceString("  ");
      var opresult1888 = callmethodChecked(string1886, "++(1)", [1], var_selfr);
      var opresult1890 = callmethodChecked(opresult1888, "++(1)", [1], string1883);
      var opresult1892 = callmethodChecked(opresult1890, "++(1)", [1], call1881);
      var opresult1894 = callmethodChecked(opresult1892, "++(1)", [1], string1878);
      // call case 4: self request
      onSelf = true;
      var call1895 = callmethodChecked(this, "out(1)", [1], opresult1894);
      setLineNumber(397);    // compilenode string
      var string1897 = new GraceString("}");
      // call case 4: self request
      onSelf = true;
      var call1898 = callmethodChecked(this, "out(1)", [1], string1897);
      if1850 = call1898;
    }
    setLineNumber(399);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call1900 = callmethodChecked(this, "compileobjouter(2)", [2], var_selfr, var_outerRef);
    setLineNumber(400);    // compilenode string
    var string1902 = new GraceString(" = self;");
    var string1905 = new GraceString("  Object oldself");
    var opresult1907 = callmethodChecked(string1905, "++(1)", [1], var_myc);
    var opresult1909 = callmethodChecked(opresult1907, "++(1)", [1], string1902);
    // call case 4: self request
    onSelf = true;
    var call1910 = callmethodChecked(this, "out(1)", [1], opresult1909);
    setLineNumber(401);    // compilenode string
    var string1912 = new GraceString(" = stackframe;");
    var string1915 = new GraceString("  struct StackFrameObject *oldstackframe");
    var opresult1917 = callmethodChecked(string1915, "++(1)", [1], var_myc);
    var opresult1919 = callmethodChecked(opresult1917, "++(1)", [1], string1912);
    // call case 4: self request
    onSelf = true;
    var call1920 = callmethodChecked(this, "out(1)", [1], opresult1919);
    setLineNumber(402);    // compilenode string
    var string1922 = new GraceString(");");
    var string1925 = new GraceString("  stackframe = alloc_StackFrame(1, oldstackframe");
    var opresult1927 = callmethodChecked(string1925, "++(1)", [1], var_myc);
    var opresult1929 = callmethodChecked(opresult1927, "++(1)", [1], string1922);
    // call case 4: self request
    onSelf = true;
    var call1930 = callmethodChecked(this, "out(1)", [1], opresult1929);
    setLineNumber(403);    // compilenode string
    var string1932 = new GraceString("  gc_frame_newslot((Object)stackframe);");
    // call case 4: self request
    onSelf = true;
    var call1933 = callmethodChecked(this, "out(1)", [1], string1932);
    setLineNumber(404);    // compilenode string
    var string1935 = new GraceString(";");
    var string1938 = new GraceString("  self = ");
    var opresult1940 = callmethodChecked(string1938, "++(1)", [1], var_selfr);
    var opresult1942 = callmethodChecked(opresult1940, "++(1)", [1], string1935);
    // call case 4: self request
    onSelf = true;
    var call1943 = callmethodChecked(this, "out(1)", [1], opresult1942);
    setLineNumber(405);    // compilenode string
    var string1945 = new GraceString(" = selfslot;");
    var string1948 = new GraceString("  Object *oldselfslot");
    var opresult1950 = callmethodChecked(string1948, "++(1)", [1], var_myc);
    var opresult1952 = callmethodChecked(opresult1950, "++(1)", [1], string1945);
    // call case 4: self request
    onSelf = true;
    var call1953 = callmethodChecked(this, "out(1)", [1], opresult1952);
    setLineNumber(406);    // compilenode string
    var string1955 = new GraceString("  selfslot = &stackframe->slots[0];");
    // call case 4: self request
    onSelf = true;
    var call1956 = callmethodChecked(this, "out(1)", [1], string1955);
    setLineNumber(407);    // compilenode string
    var string1958 = new GraceString("  *selfslot = self;");
    // call case 4: self request
    onSelf = true;
    var call1959 = callmethodChecked(this, "out(1)", [1], string1958);
    setLineNumber(408);    // compilenode string
    var string1961 = new GraceString("  setframeelementname(stackframe, 0, \"self\");");
    // call case 4: self request
    onSelf = true;
    var call1962 = callmethodChecked(this, "out(1)", [1], string1961);
    setLineNumber(409);    // compilenode string
    var string1964 = new GraceString(";");
    var string1967 = new GraceString(" = thisouter");
    var string1970 = new GraceString(" = (*(struct UserObject *)self).data[0], lowerouter");
    var string1973 = new GraceString("  Object thisouter");
    var opresult1975 = callmethodChecked(string1973, "++(1)", [1], var_myc);
    var opresult1977 = callmethodChecked(opresult1975, "++(1)", [1], string1970);
    var opresult1979 = callmethodChecked(opresult1977, "++(1)", [1], var_myc);
    var opresult1981 = callmethodChecked(opresult1979, "++(1)", [1], string1967);
    var opresult1983 = callmethodChecked(opresult1981, "++(1)", [1], var_myc);
    var opresult1985 = callmethodChecked(opresult1983, "++(1)", [1], string1964);
    // call case 4: self request
    onSelf = true;
    var call1986 = callmethodChecked(this, "out(1)", [1], opresult1985);
    setLineNumber(410);    // compilenode string
    var string1988 = new GraceString(") {");
    var string1991 = new GraceString("  if (inheritingObject");
    var opresult1993 = callmethodChecked(string1991, "++(1)", [1], var_myc);
    var opresult1995 = callmethodChecked(opresult1993, "++(1)", [1], string1988);
    // call case 4: self request
    onSelf = true;
    var call1996 = callmethodChecked(this, "out(1)", [1], opresult1995);
    setLineNumber(411);    // compilenode string
    var string1998 = new GraceString(";");
    var string2001 = new GraceString(" = (struct UserObject *)inheritingObject");
    var string2004 = new GraceString("    struct UserObject *inho");
    var opresult2006 = callmethodChecked(string2004, "++(1)", [1], var_myc);
    var opresult2008 = callmethodChecked(opresult2006, "++(1)", [1], string2001);
    var opresult2010 = callmethodChecked(opresult2008, "++(1)", [1], var_myc);
    var opresult2012 = callmethodChecked(opresult2010, "++(1)", [1], string1998);
    // call case 4: self request
    onSelf = true;
    var call2013 = callmethodChecked(this, "out(1)", [1], opresult2012);
    setLineNumber(412);    // compilenode string
    var string2015 = new GraceString("->super;");
    var string2018 = new GraceString(" = (struct UserObject *)inho");
    var string2021 = new GraceString("->super != GraceDefaultObject) inho");
    var string2024 = new GraceString("    while (inho");
    var opresult2026 = callmethodChecked(string2024, "++(1)", [1], var_myc);
    var opresult2028 = callmethodChecked(opresult2026, "++(1)", [1], string2021);
    var opresult2030 = callmethodChecked(opresult2028, "++(1)", [1], var_myc);
    var opresult2032 = callmethodChecked(opresult2030, "++(1)", [1], string2018);
    var opresult2034 = callmethodChecked(opresult2032, "++(1)", [1], var_myc);
    var opresult2036 = callmethodChecked(opresult2034, "++(1)", [1], string2015);
    // call case 4: self request
    onSelf = true;
    var call2037 = callmethodChecked(this, "out(1)", [1], opresult2036);
    setLineNumber(413);    // compilenode string
    var string2039 = new GraceString(";");
    var string2042 = new GraceString("->super = ");
    var string2045 = new GraceString("    inho");
    var opresult2047 = callmethodChecked(string2045, "++(1)", [1], var_myc);
    var opresult2049 = callmethodChecked(opresult2047, "++(1)", [1], string2042);
    var opresult2051 = callmethodChecked(opresult2049, "++(1)", [1], var_selfr);
    var opresult2053 = callmethodChecked(opresult2051, "++(1)", [1], string2039);
    // call case 4: self request
    onSelf = true;
    var call2054 = callmethodChecked(this, "out(1)", [1], opresult2053);
    setLineNumber(414);    // compilenode string
    var string2056 = new GraceString(";");
    var string2059 = new GraceString("    self = inheritingObject");
    var opresult2061 = callmethodChecked(string2059, "++(1)", [1], var_myc);
    var opresult2063 = callmethodChecked(opresult2061, "++(1)", [1], string2056);
    // call case 4: self request
    onSelf = true;
    var call2064 = callmethodChecked(this, "out(1)", [1], opresult2063);
    setLineNumber(415);    // compilenode string
    var string2066 = new GraceString("    *selfslot = self;");
    // call case 4: self request
    onSelf = true;
    var call2067 = callmethodChecked(this, "out(1)", [1], string2066);
    setLineNumber(416);    // compilenode string
    var string2069 = new GraceString(" = (*(struct UserObject *)self).data[0];");
    var string2072 = new GraceString("    lowerouter");
    var opresult2074 = callmethodChecked(string2072, "++(1)", [1], var_myc);
    var opresult2076 = callmethodChecked(opresult2074, "++(1)", [1], string2069);
    // call case 4: self request
    onSelf = true;
    var call2077 = callmethodChecked(this, "out(1)", [1], opresult2076);
    setLineNumber(417);    // compilenode string
    var string2079 = new GraceString(";");
    var string2082 = new GraceString("    (*(struct UserObject *)self).data[0] = thisouter");
    var opresult2084 = callmethodChecked(string2082, "++(1)", [1], var_myc);
    var opresult2086 = callmethodChecked(opresult2084, "++(1)", [1], string2079);
    // call case 4: self request
    onSelf = true;
    var call2087 = callmethodChecked(this, "out(1)", [1], opresult2086);
    setLineNumber(418);    // compilenode string
    var string2089 = new GraceString("  }");
    // call case 4: self request
    onSelf = true;
    var call2090 = callmethodChecked(this, "out(1)", [1], string2089);
    setLineNumber(419);    // compilenode member
    // call case 6: other requests
    var call2093 = callmethodChecked(var_o, "value", []);
    var block2094 = new GraceBlock(this, 419, 1);
    setLineNumber(1);    // compilenode identifier
    block2094.real = function(var_e) {
      var if2095 = GraceDone;
      setLineNumber(420);    // compilenode string
      var string2096 = new GraceString("method");
      // call case 6: other requests
      var call2099 = callmethodChecked(var_e, "kind", []);
      var opresult2101 = callmethodChecked(call2099, "==(1)", [1], string2096);
      if (Grace_isTrue(opresult2101)) {
        setLineNumber(421);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call2103 = callmethodChecked(this, "compilemethod(3)", [3], var_e, var_selfr, var_pos);
        if2095 = call2103;
      } else {
        var if2104 = GraceDone;
        setLineNumber(422);    // compilenode string
        var string2105 = new GraceString("vardec");
        // call case 6: other requests
        var call2108 = callmethodChecked(var_e, "kind", []);
        var opresult2110 = callmethodChecked(call2108, "==(1)", [1], string2105);
        if (Grace_isTrue(opresult2110)) {
          setLineNumber(423);    // compilenode string
          var string2112 = new GraceString(" == NULL) {");
          var string2115 = new GraceString("if (objclass");
          var opresult2117 = callmethodChecked(string2115, "++(1)", [1], var_myc);
          var opresult2119 = callmethodChecked(opresult2117, "++(1)", [1], string2112);
          // call case 4: self request
          onSelf = true;
          var call2120 = callmethodChecked(this, "out(1)", [1], opresult2119);
          setLineNumber(424);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call2122 = callmethodChecked(this, "compileobjvardecmeth(3)", [3], var_e, var_selfr, var_pos);
          setLineNumber(425);    // compilenode string
          var string2124 = new GraceString("}");
          // call case 4: self request
          onSelf = true;
          var call2125 = callmethodChecked(this, "out(1)", [1], string2124);
          setLineNumber(426);    // compilenode string
          var string2127 = new GraceString("->flags |= OFLAG_MUTABLE;");
          var string2130 = new GraceString("");
          var opresult2132 = callmethodChecked(string2130, "++(1)", [1], var_selfr);
          var opresult2134 = callmethodChecked(opresult2132, "++(1)", [1], string2127);
          // call case 4: self request
          onSelf = true;
          var call2135 = callmethodChecked(this, "out(1)", [1], opresult2134);
          setLineNumber(427);    // compilenode string
          var string2137 = new GraceString(");");
          var string2140 = new GraceString(", alloc_Undefined(), ");
          var string2143 = new GraceString("adddatum2(");
          var opresult2145 = callmethodChecked(string2143, "++(1)", [1], var_selfr);
          var opresult2147 = callmethodChecked(opresult2145, "++(1)", [1], string2140);
          var opresult2149 = callmethodChecked(opresult2147, "++(1)", [1], var_pos);
          var opresult2151 = callmethodChecked(opresult2149, "++(1)", [1], string2137);
          // call case 4: self request
          onSelf = true;
          var call2152 = callmethodChecked(this, "out(1)", [1], opresult2151);
          if2104 = call2152;
        } else {
          var if2153 = GraceDone;
          setLineNumber(428);    // compilenode string
          var string2154 = new GraceString("defdec");
          // call case 6: other requests
          var call2157 = callmethodChecked(var_e, "kind", []);
          var opresult2159 = callmethodChecked(call2157, "==(1)", [1], string2154);
          if (Grace_isTrue(opresult2159)) {
            setLineNumber(429);    // compilenode string
            var string2161 = new GraceString(" == NULL) {");
            var string2164 = new GraceString("if (objclass");
            var opresult2166 = callmethodChecked(string2164, "++(1)", [1], var_myc);
            var opresult2168 = callmethodChecked(opresult2166, "++(1)", [1], string2161);
            // call case 4: self request
            onSelf = true;
            var call2169 = callmethodChecked(this, "out(1)", [1], opresult2168);
            setLineNumber(430);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call2171 = callmethodChecked(this, "compileobjdefdecmeth(3)", [3], var_e, var_selfr, var_pos);
            setLineNumber(431);    // compilenode string
            var string2173 = new GraceString("}");
            // call case 4: self request
            onSelf = true;
            var call2174 = callmethodChecked(this, "out(1)", [1], string2173);
            setLineNumber(432);    // compilenode string
            var string2176 = new GraceString(");");
            var string2179 = new GraceString(", alloc_Undefined(), ");
            var string2182 = new GraceString("adddatum2(");
            var opresult2184 = callmethodChecked(string2182, "++(1)", [1], var_selfr);
            var opresult2186 = callmethodChecked(opresult2184, "++(1)", [1], string2179);
            var opresult2188 = callmethodChecked(opresult2186, "++(1)", [1], var_pos);
            var opresult2190 = callmethodChecked(opresult2188, "++(1)", [1], string2176);
            // call case 4: self request
            onSelf = true;
            var call2191 = callmethodChecked(this, "out(1)", [1], opresult2190);
            if2153 = call2191;
          } else {
            var if2192 = GraceDone;
            setLineNumber(433);    // compilenode string
            var string2193 = new GraceString("typedec");
            // call case 6: other requests
            var call2196 = callmethodChecked(var_e, "kind", []);
            var opresult2198 = callmethodChecked(call2196, "==(1)", [1], string2193);
            if (Grace_isTrue(opresult2198)) {
              setLineNumber(434);    // compilenode string
              var string2200 = new GraceString(" == NULL) {");
              var string2203 = new GraceString("if (objclass");
              var opresult2205 = callmethodChecked(string2203, "++(1)", [1], var_myc);
              var opresult2207 = callmethodChecked(opresult2205, "++(1)", [1], string2200);
              // call case 4: self request
              onSelf = true;
              var call2208 = callmethodChecked(this, "out(1)", [1], opresult2207);
              setLineNumber(435);    // compilenode identifier
              // call case 4: self request
              onSelf = true;
              var call2210 = callmethodChecked(this, "compileobjtypemeth(3)", [3], var_e, var_selfr, var_pos);
              setLineNumber(436);    // compilenode string
              var string2212 = new GraceString("}");
              // call case 4: self request
              onSelf = true;
              var call2213 = callmethodChecked(this, "out(1)", [1], string2212);
              setLineNumber(437);    // compilenode string
              var string2215 = new GraceString(");");
              var string2218 = new GraceString(", alloc_Undefined(), ");
              var string2221 = new GraceString("adddatum2(");
              var opresult2223 = callmethodChecked(string2221, "++(1)", [1], var_selfr);
              var opresult2225 = callmethodChecked(opresult2223, "++(1)", [1], string2218);
              var opresult2227 = callmethodChecked(opresult2225, "++(1)", [1], var_pos);
              var opresult2229 = callmethodChecked(opresult2227, "++(1)", [1], string2215);
              // call case 4: self request
              onSelf = true;
              var call2230 = callmethodChecked(this, "out(1)", [1], opresult2229);
              if2192 = call2230;
            } else {
              setLineNumber(439);    // compilenode identifier
              var diff2233 = callmethodChecked(var_pos, "-(1)", [1], new GraceNum(1));
              var_pos = diff2233;
              if2192 = GraceDone;
            }
            if2153 = if2192;
          }
          if2104 = if2153;
        }
        if2095 = if2104;
      }
      setLineNumber(441);    // compilenode identifier
      var opresult2236 = callmethodChecked(var_pos, "+(1)", [1], new GraceNum(1));
      var_pos = opresult2236;
      return GraceDone;
    };
    // call case 5: prelude request
    var call2237 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call2093, block2094);
    setLineNumber(443);    // compilenode num
    var_pos = new GraceNum(1);
    setLineNumber(445);    // compilenode array
    var array2238 = new PrimitiveGraceList([]);
    var var_content = array2238;
    var if2239 = GraceDone;
    setLineNumber(446);    // compilenode member
    // call case 6: other requests
    var call2241 = callmethodChecked(var_o, "superclass", []);
    var opresult2244 = callmethodChecked(GraceFalse, "\u2260(1)", [1], call2241);
    if (Grace_isTrue(opresult2244)) {
      // call case 6: other requests
      var call2247 = callmethodChecked(var_o, "superclass", []);
      // call case 6: other requests
      var call2248 = callmethodChecked(var_content, "add(1)", [1], call2247);
      if2239 = call2248;
    }
    setLineNumber(447);    // compilenode block
    var block2250 = new GraceBlock(this, 447, 1);
    setLineNumber(1);    // compilenode identifier
    block2250.real = function(var_t) {
      setLineNumber(447);    // compilenode identifier
      // call case 6: other requests
      var call2252 = callmethodChecked(var_content, "add(1)", [1], var_t);
      return call2252;
    };
    // call case 6: other requests
    // call case 6: other requests
    var call2254 = callmethodChecked(var_o, "usedTraits", []);
    var call2255 = callmethodChecked(call2254, "do(1)", [1], block2250);
    setLineNumber(448);    // compilenode block
    var block2257 = new GraceBlock(this, 448, 1);
    setLineNumber(1);    // compilenode identifier
    block2257.real = function(var_e) {
      setLineNumber(448);    // compilenode identifier
      // call case 6: other requests
      var call2259 = callmethodChecked(var_content, "add(1)", [1], var_e);
      return call2259;
    };
    // call case 6: other requests
    // call case 6: other requests
    var call2261 = callmethodChecked(var_o, "value", []);
    var call2262 = callmethodChecked(call2261, "do(1)", [1], block2257);
    setLineNumber(450);    // compilenode block
    var block2264 = new GraceBlock(this, 450, 1);
    setLineNumber(1);    // compilenode identifier
    block2264.real = function(var_e) {
      setLineNumber(451);    // compilenode string
      var string2266 = new GraceString(";");
      var string2269 = new GraceString("  sourceObject = ");
      var opresult2271 = callmethodChecked(string2269, "++(1)", [1], var_selfr);
      var opresult2273 = callmethodChecked(opresult2271, "++(1)", [1], string2266);
      // call case 4: self request
      onSelf = true;
      var call2274 = callmethodChecked(this, "out(1)", [1], opresult2273);
      var if2275 = GraceDone;
      setLineNumber(452);    // compilenode string
      var string2276 = new GraceString("method");
      // call case 6: other requests
      var call2279 = callmethodChecked(var_e, "kind", []);
      var opresult2281 = callmethodChecked(call2279, "==(1)", [1], string2276);
      if (Grace_isTrue(opresult2281)) {
      } else {
        var if2282 = GraceDone;
        setLineNumber(453);    // compilenode string
        var string2283 = new GraceString("vardec");
        // call case 6: other requests
        var call2286 = callmethodChecked(var_e, "kind", []);
        var opresult2288 = callmethodChecked(call2286, "==(1)", [1], string2283);
        if (Grace_isTrue(opresult2288)) {
          setLineNumber(454);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call2290 = callmethodChecked(this, "compileobjvardecdata(3)", [3], var_e, var_selfr, var_pos);
          if2282 = call2290;
        } else {
          var if2291 = GraceDone;
          setLineNumber(455);    // compilenode string
          var string2292 = new GraceString("defdec");
          // call case 6: other requests
          var call2295 = callmethodChecked(var_e, "kind", []);
          var opresult2297 = callmethodChecked(call2295, "==(1)", [1], string2292);
          if (Grace_isTrue(opresult2297)) {
            setLineNumber(456);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call2299 = callmethodChecked(this, "compileobjdefdecdata(3)", [3], var_e, var_selfr, var_pos);
            if2291 = call2299;
          } else {
            var if2300 = GraceDone;
            setLineNumber(457);    // compilenode string
            var string2301 = new GraceString("typedec");
            // call case 6: other requests
            var call2304 = callmethodChecked(var_e, "kind", []);
            var opresult2306 = callmethodChecked(call2304, "==(1)", [1], string2301);
            if (Grace_isTrue(opresult2306)) {
              setLineNumber(458);    // compilenode identifier
              // call case 4: self request
              onSelf = true;
              var call2308 = callmethodChecked(this, "compileobjdefdecdata(3)", [3], var_e, var_selfr, var_pos);
              if2300 = call2308;
            } else {
              var if2309 = GraceDone;
              setLineNumber(459);    // compilenode string
              var string2310 = new GraceString("inherits");
              // call case 6: other requests
              var call2313 = callmethodChecked(var_e, "kind", []);
              var opresult2315 = callmethodChecked(call2313, "==(1)", [1], string2310);
              if (Grace_isTrue(opresult2315)) {
                setLineNumber(462);    // compilenode member
                // call case 6: other requests
                var call2318 = callmethodChecked(var_e, "value", []);
                // call case 4: self request
                onSelf = true;
                var call2319 = callmethodChecked(this, "compilenode(1)", [1], call2318);
                var_superobj = call2319;
                setLineNumber(463);    // compilenode string
                var string2321 = new GraceString(";");
                var string2324 = new GraceString("_uo = (struct UserObject *)");
                var string2327 = new GraceString("  struct UserObject *");
                var opresult2329 = callmethodChecked(string2327, "++(1)", [1], var_selfr);
                var opresult2331 = callmethodChecked(opresult2329, "++(1)", [1], string2324);
                var opresult2333 = callmethodChecked(opresult2331, "++(1)", [1], var_selfr);
                var opresult2335 = callmethodChecked(opresult2333, "++(1)", [1], string2321);
                // call case 4: self request
                onSelf = true;
                var call2336 = callmethodChecked(this, "out(1)", [1], opresult2335);
                setLineNumber(464);    // compilenode string
                var string2338 = new GraceString(";");
                var string2341 = new GraceString("_uo->super = ");
                var string2344 = new GraceString("  ");
                var opresult2346 = callmethodChecked(string2344, "++(1)", [1], var_selfr);
                var opresult2348 = callmethodChecked(opresult2346, "++(1)", [1], string2341);
                var opresult2350 = callmethodChecked(opresult2348, "++(1)", [1], var_superobj);
                var opresult2352 = callmethodChecked(opresult2350, "++(1)", [1], string2338);
                // call case 4: self request
                onSelf = true;
                var call2353 = callmethodChecked(this, "out(1)", [1], opresult2352);
                setLineNumber(465);    // compilenode identifier
                // call case 4: self request
                onSelf = true;
                var call2355 = callmethodChecked(this, "implementAliasesAndExclusionsFor(1)inheriting(2)", [1, 2], var_o, var_e, var_superobj);
                setLineNumber(466);    // compilenode identifier
                var diff2358 = callmethodChecked(var_pos, "-(1)", [1], new GraceNum(1));
                var_pos = diff2358;
                if2309 = GraceDone;
              } else {
                setLineNumber(468);    // compilenode identifier
                // call case 4: self request
                onSelf = true;
                var call2360 = callmethodChecked(this, "compilenode(1)", [1], var_e);
                setLineNumber(469);    // compilenode identifier
                var diff2363 = callmethodChecked(var_pos, "-(1)", [1], new GraceNum(1));
                var_pos = diff2363;
                if2309 = GraceDone;
              }
              if2300 = if2309;
            }
            if2291 = if2300;
          }
          if2282 = if2291;
        }
        if2275 = if2282;
      }
      setLineNumber(471);    // compilenode identifier
      var opresult2366 = callmethodChecked(var_pos, "+(1)", [1], new GraceNum(1));
      var_pos = opresult2366;
      return GraceDone;
    };
    // call case 6: other requests
    setLineNumber(450);    // compilenode identifier
    var call2367 = callmethodChecked(var_content, "do(1)", [1], block2264);
    setLineNumber(473);    // compilenode string
    var string2369 = new GraceString("->class;");
    var string2372 = new GraceString(" = ");
    var string2375 = new GraceString("  objclass");
    var opresult2377 = callmethodChecked(string2375, "++(1)", [1], var_myc);
    var opresult2379 = callmethodChecked(opresult2377, "++(1)", [1], string2372);
    var opresult2381 = callmethodChecked(opresult2379, "++(1)", [1], var_selfr);
    var opresult2383 = callmethodChecked(opresult2381, "++(1)", [1], string2369);
    // call case 4: self request
    onSelf = true;
    var call2384 = callmethodChecked(this, "out(1)", [1], opresult2383);
    setLineNumber(474);    // compilenode string
    var string2386 = new GraceString("->definitionModule = modulename;");
    var string2389 = new GraceString("  objclass");
    var opresult2391 = callmethodChecked(string2389, "++(1)", [1], var_myc);
    var opresult2393 = callmethodChecked(opresult2391, "++(1)", [1], string2386);
    // call case 4: self request
    onSelf = true;
    var call2394 = callmethodChecked(this, "out(1)", [1], opresult2393);
    setLineNumber(475);    // compilenode string
    var string2396 = new GraceString(";");
    // call case 6: other requests
    var call2399 = callmethodChecked(var_o, "line", []);
    var string2401 = new GraceString("->definitionLine = ");
    var string2404 = new GraceString("  objclass");
    var opresult2406 = callmethodChecked(string2404, "++(1)", [1], var_myc);
    var opresult2408 = callmethodChecked(opresult2406, "++(1)", [1], string2401);
    var opresult2410 = callmethodChecked(opresult2408, "++(1)", [1], call2399);
    var opresult2412 = callmethodChecked(opresult2410, "++(1)", [1], string2396);
    // call case 4: self request
    onSelf = true;
    var call2413 = callmethodChecked(this, "out(1)", [1], opresult2412);
    setLineNumber(476);    // compilenode string
    var string2415 = new GraceString(";");
    var string2418 = new GraceString("  (*(struct UserObject *)self).data[0] = lowerouter");
    var opresult2420 = callmethodChecked(string2418, "++(1)", [1], var_myc);
    var opresult2422 = callmethodChecked(opresult2420, "++(1)", [1], string2415);
    // call case 4: self request
    onSelf = true;
    var call2423 = callmethodChecked(this, "out(1)", [1], opresult2422);
    setLineNumber(477);    // compilenode string
    var string2425 = new GraceString(";");
    var string2428 = new GraceString("  self = oldself");
    var opresult2430 = callmethodChecked(string2428, "++(1)", [1], var_myc);
    var opresult2432 = callmethodChecked(opresult2430, "++(1)", [1], string2425);
    // call case 4: self request
    onSelf = true;
    var call2433 = callmethodChecked(this, "out(1)", [1], opresult2432);
    setLineNumber(478);    // compilenode string
    var string2435 = new GraceString(";");
    var string2438 = new GraceString("  selfslot = oldselfslot");
    var opresult2440 = callmethodChecked(string2438, "++(1)", [1], var_myc);
    var opresult2442 = callmethodChecked(opresult2440, "++(1)", [1], string2435);
    // call case 4: self request
    onSelf = true;
    var call2443 = callmethodChecked(this, "out(1)", [1], opresult2442);
    setLineNumber(479);    // compilenode string
    var string2445 = new GraceString(";");
    var string2448 = new GraceString("  stackframe = oldstackframe");
    var opresult2450 = callmethodChecked(string2448, "++(1)", [1], var_myc);
    var opresult2452 = callmethodChecked(opresult2450, "++(1)", [1], string2445);
    // call case 4: self request
    onSelf = true;
    var call2453 = callmethodChecked(this, "out(1)", [1], opresult2452);
    setLineNumber(480);    // compilenode identifier
    // call case 6: other requests
    var call2455 = callmethodChecked(var_o, "register:=(1)", [1], var_selfr);
    setLineNumber(481);    // compilenode identifier
    var_inBlock = var_origInBlock;
    return GraceDone;
  };
  func1724.paramCounts = [2];
  this.methods["compileobject(2)"] = func1724;
  func1724.definitionLine = 358;
  func1724.definitionModule = "genc";
  setLineNumber(483);    // compilenode method
  var func2456 = function(argcv) {    // method compileblock(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(484);    // compilenode identifier
    var var_origInBlock = var_inBlock;
    setLineNumber(485);    // compilenode identifier
    var_inBlock = GraceTrue;
    setLineNumber(486);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(487);    // compilenode identifier
    var opresult2459 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult2459;
    setLineNumber(488);    // compilenode string
    var string2460 = new GraceString("");
    var string2463 = new GraceString("block");
    var opresult2465 = callmethodChecked(string2463, "++(1)", [1], var_myc);
    var opresult2467 = callmethodChecked(opresult2465, "++(1)", [1], string2460);
    var var_obj = opresult2467;
    setLineNumber(489);    // compilenode string
    var string2469 = new GraceString(");");
    var string2472 = new GraceString("\", ");
    var string2475 = new GraceString(" = alloc_Block(NULL, NULL, \"");
    var string2478 = new GraceString("  Object ");
    var opresult2480 = callmethodChecked(string2478, "++(1)", [1], var_obj);
    var opresult2482 = callmethodChecked(opresult2480, "++(1)", [1], string2475);
    var opresult2484 = callmethodChecked(opresult2482, "++(1)", [1], var_modname);
    var opresult2486 = callmethodChecked(opresult2484, "++(1)", [1], string2472);
    var opresult2488 = callmethodChecked(opresult2486, "++(1)", [1], var_linenum);
    var opresult2490 = callmethodChecked(opresult2488, "++(1)", [1], string2469);
    // call case 4: self request
    onSelf = true;
    var call2491 = callmethodChecked(this, "out(1)", [1], opresult2490);
    setLineNumber(490);    // compilenode string
    var string2493 = new GraceString(");");
    var string2496 = new GraceString("  gc_frame_newslot(");
    var opresult2498 = callmethodChecked(string2496, "++(1)", [1], var_obj);
    var opresult2500 = callmethodChecked(opresult2498, "++(1)", [1], string2493);
    // call case 4: self request
    onSelf = true;
    var call2501 = callmethodChecked(this, "out(1)", [1], opresult2500);
    setLineNumber(491);    // compilenode string
    var string2505 = new GraceString("_apply");
    // call case 6: other requests
    var call2507 = callmethodChecked(var_o, "params", []);
    // call case 6: other requests
    // call case 6: other requests
    var call2509 = callmethodChecked(var_ast, "signaturePart", []);
    var call2510 = callmethodChecked(call2509, "partName(1)params(1)", [1, 1], string2505, call2507);
    var array2503 = new PrimitiveGraceList([call2510]);
    // call case 6: other requests
    var call2512 = callmethodChecked(var_o, "body", []);
    // call case 6: other requests
    // call case 6: other requests
    var call2514 = callmethodChecked(var_ast, "methodNode", []);
    var call2515 = callmethodChecked(call2514, "new(3)", [3], array2503, call2512, GraceFalse);
    var var_applymeth = call2515;
    setLineNumber(492);    // compilenode identifier
    // call case 6: other requests
    var call2517 = callmethodChecked(var_applymeth, "selfclosure:=(1)", [1], GraceTrue);
    setLineNumber(493);    // compilenode num
    // call case 4: self request
    onSelf = true;
    var call2519 = callmethodChecked(this, "compilemethod(3)", [3], var_applymeth, var_obj, new GraceNum(0));
    var if2520 = GraceDone;
    setLineNumber(494);    // compilenode member
    // call case 6: other requests
    var call2522 = callmethodChecked(var_o, "matchingPattern", []);
    var opresult2525 = callmethodChecked(GraceFalse, "\u2260(1)", [1], call2522);
    if (Grace_isTrue(opresult2525)) {
      setLineNumber(495);    // compilenode member
      // call case 6: other requests
      var call2528 = callmethodChecked(var_o, "matchingPattern", []);
      // call case 4: self request
      onSelf = true;
      var call2529 = callmethodChecked(this, "compilenode(1)", [1], call2528);
      var var_pat = call2529;
      setLineNumber(496);    // compilenode string
      var string2531 = new GraceString(";");
      var string2534 = new GraceString(")->data[1] = ");
      var string2537 = new GraceString("((struct UserObject *)");
      var opresult2539 = callmethodChecked(string2537, "++(1)", [1], var_obj);
      var opresult2541 = callmethodChecked(opresult2539, "++(1)", [1], string2534);
      var opresult2543 = callmethodChecked(opresult2541, "++(1)", [1], var_pat);
      var opresult2545 = callmethodChecked(opresult2543, "++(1)", [1], string2531);
      // call case 4: self request
      onSelf = true;
      var call2546 = callmethodChecked(this, "out(1)", [1], opresult2545);
      if2520 = call2546;
    }
    var if2547 = GraceDone;
    setLineNumber(498);    // compilenode member
    // call case 6: other requests
    var call2549 = callmethodChecked(var_o, "extraRuntimeData", []);
    var opresult2552 = callmethodChecked(GraceFalse, "\u2260(1)", [1], call2549);
    if (Grace_isTrue(opresult2552)) {
      setLineNumber(500);    // compilenode string
      var string2556 = new GraceString("extraRuntimeData");
      // call case 6: other requests
      // call case 6: other requests
      var call2558 = callmethodChecked(var_ast, "signaturePart", []);
      var call2559 = callmethodChecked(call2558, "partName(1)", [1], string2556);
      var array2554 = new PrimitiveGraceList([call2559]);
      setLineNumber(501);    // compilenode member
      // call case 6: other requests
      var call2562 = callmethodChecked(var_o, "extraRuntimeData", []);
      var array2560 = new PrimitiveGraceList([call2562]);
      // call case 6: other requests
      setLineNumber(499);    // compilenode member
      // call case 6: other requests
      var call2564 = callmethodChecked(var_ast, "methodNode", []);
      var call2565 = callmethodChecked(call2564, "new(3)", [3], array2554, array2560, GraceFalse);
      var var_erdmeth = call2565;
      setLineNumber(502);    // compilenode num
      // call case 4: self request
      onSelf = true;
      var call2567 = callmethodChecked(this, "compilemethod(3)", [3], var_erdmeth, var_obj, new GraceNum(2));
      if2547 = call2567;
    }
    setLineNumber(505);    // compilenode identifier
    // call case 6: other requests
    var call2569 = callmethodChecked(var_o, "register:=(1)", [1], var_obj);
    setLineNumber(506);    // compilenode identifier
    var_inBlock = var_origInBlock;
    return GraceDone;
  };
  func2456.paramCounts = [1];
  this.methods["compileblock(1)"] = func2456;
  func2456.definitionLine = 483;
  func2456.definitionModule = "genc";
  setLineNumber(508);    // compilenode method
  var func2570 = function(argcv) {    // method compiletypedec(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(509);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(510);    // compilenode identifier
    var opresult2573 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult2573;
    var if2574 = GraceDone;
    setLineNumber(511);    // compilenode string
    var string2575 = new GraceString("generic");
    // call case 6: other requests
    // call case 6: other requests
    var call2579 = callmethodChecked(var_o, "name", []);
    var call2580 = callmethodChecked(call2579, "kind", []);
    var opresult2582 = callmethodChecked(call2580, "==(1)", [1], string2575);
    if (Grace_isTrue(opresult2582)) {
      setLineNumber(512);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      // call case 6: other requests
      var call2587 = callmethodChecked(var_o, "name", []);
      var call2588 = callmethodChecked(call2587, "value", []);
      var call2589 = callmethodChecked(call2588, "value", []);
      // call case 4: self request
      onSelf = true;
      var call2590 = callmethodChecked(this, "escapeident(1)", [1], call2589);
      if2574 = call2590;
    } else {
      setLineNumber(514);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call2594 = callmethodChecked(var_o, "name", []);
      var call2595 = callmethodChecked(call2594, "value", []);
      // call case 4: self request
      onSelf = true;
      var call2596 = callmethodChecked(this, "escapeident(1)", [1], call2595);
      if2574 = call2596;
    }
    var var_idName = if2574;
    setLineNumber(516);    // compilenode string
    var string2598 = new GraceString("");
    // call case 6: other requests
    // call case 6: other requests
    var call2602 = callmethodChecked(var_o, "name", []);
    var call2603 = callmethodChecked(call2602, "value", []);
    var string2605 = new GraceString("// Type decl ");
    var opresult2607 = callmethodChecked(string2605, "++(1)", [1], call2603);
    var opresult2609 = callmethodChecked(opresult2607, "++(1)", [1], string2598);
    // call case 4: self request
    onSelf = true;
    var call2610 = callmethodChecked(this, "out(1)", [1], opresult2609);
    setLineNumber(517);    // compilenode identifier
    // call case 6: other requests
    var call2612 = callmethodChecked(var_declaredvars, "push(1)", [1], var_idName);
    var if2613 = GraceDone;
    setLineNumber(518);    // compilenode string
    var string2614 = new GraceString("typeliteral");
    // call case 6: other requests
    // call case 6: other requests
    var call2618 = callmethodChecked(var_o, "value", []);
    var call2619 = callmethodChecked(call2618, "kind", []);
    var opresult2621 = callmethodChecked(call2619, "==(1)", [1], string2614);
    if (Grace_isTrue(opresult2621)) {
      // call case 6: other requests
      // call case 6: other requests
      var call2624 = callmethodChecked(var_o, "value", []);
      var call2625 = callmethodChecked(call2624, "name:=(1)", [1], var_idName);
      if2613 = call2625;
    }
    setLineNumber(519);    // compilenode member
    // call case 6: other requests
    var call2628 = callmethodChecked(var_o, "value", []);
    // call case 4: self request
    onSelf = true;
    var call2629 = callmethodChecked(this, "compilenode(1)", [1], call2628);
    setLineNumber(520);    // compilenode string
    var string2631 = new GraceString(";");
    // call case 6: other requests
    // call case 6: other requests
    var call2635 = callmethodChecked(var_o, "value", []);
    var call2636 = callmethodChecked(call2635, "register", []);
    var string2638 = new GraceString(" = ");
    var string2641 = new GraceString("  *var_");
    var opresult2643 = callmethodChecked(string2641, "++(1)", [1], var_idName);
    var opresult2645 = callmethodChecked(opresult2643, "++(1)", [1], string2638);
    var opresult2647 = callmethodChecked(opresult2645, "++(1)", [1], call2636);
    var opresult2649 = callmethodChecked(opresult2647, "++(1)", [1], string2631);
    // call case 4: self request
    onSelf = true;
    var call2650 = callmethodChecked(this, "out(1)", [1], opresult2649);
    setLineNumber(521);    // compilenode string
    var string2652 = new GraceString("done");
    // call case 6: other requests
    var call2653 = callmethodChecked(var_o, "register:=(1)", [1], string2652);
    var if2654 = GraceDone;
    setLineNumber(522);    // compilenode identifier
    var opresult2657 = callmethodChecked(var_compilationDepth, "==(1)", [1], new GraceNum(1));
    if (Grace_isTrue(opresult2657)) {
      setLineNumber(523);    // compilenode member
      // call case 6: other requests
      var call2663 = callmethodChecked(var_o, "nameString", []);
      // call case 6: other requests
      // call case 6: other requests
      var call2665 = callmethodChecked(var_ast, "signaturePart", []);
      var call2666 = callmethodChecked(call2665, "partName(1)", [1], call2663);
      var array2660 = new PrimitiveGraceList([call2666]);
      setLineNumber(524);    // compilenode member
      // call case 6: other requests
      var call2669 = callmethodChecked(var_o, "name", []);
      var array2667 = new PrimitiveGraceList([call2669]);
      // call case 6: other requests
      setLineNumber(523);    // compilenode member
      // call case 6: other requests
      var call2671 = callmethodChecked(var_ast, "methodNode", []);
      var call2672 = callmethodChecked(call2671, "new(3)", [3], array2660, array2667, GraceFalse);
      // call case 4: self request
      onSelf = true;
      var call2673 = callmethodChecked(this, "compilenode(1)", [1], call2672);
      if2654 = call2673;
    }
    return if2654;
  };
  func2570.paramCounts = [1];
  this.methods["compiletypedec(1)"] = func2570;
  func2570.definitionLine = 508;
  func2570.definitionModule = "genc";
  setLineNumber(527);    // compilenode method
  var func2674 = function(argcv) {    // method compiletypeliteral(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(528);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(529);    // compilenode identifier
    var opresult2677 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult2677;
    setLineNumber(530);    // compilenode string
    var string2679 = new GraceString("//   Type literal ");
    // call case 4: self request
    onSelf = true;
    var call2680 = callmethodChecked(this, "out(1)", [1], string2679);
    setLineNumber(531);    // compilenode string
    var string2682 = new GraceString(");");
    // call case 6: other requests
    // call case 6: other requests
    var call2686 = callmethodChecked(var_o, "methods", []);
    var call2687 = callmethodChecked(call2686, "size", []);
    var string2689 = new GraceString("\", ");
    // call case 6: other requests
    var call2692 = callmethodChecked(var_o, "name", []);
    var string2694 = new GraceString(" = alloc_Type(\"");
    var string2697 = new GraceString("    Object type");
    var opresult2699 = callmethodChecked(string2697, "++(1)", [1], var_myc);
    var opresult2701 = callmethodChecked(opresult2699, "++(1)", [1], string2694);
    var opresult2703 = callmethodChecked(opresult2701, "++(1)", [1], call2692);
    var opresult2705 = callmethodChecked(opresult2703, "++(1)", [1], string2689);
    var opresult2707 = callmethodChecked(opresult2705, "++(1)", [1], call2687);
    var opresult2709 = callmethodChecked(opresult2707, "++(1)", [1], string2682);
    // call case 4: self request
    onSelf = true;
    var call2710 = callmethodChecked(this, "out(1)", [1], opresult2709);
    setLineNumber(532);    // compilenode member
    // call case 6: other requests
    var call2713 = callmethodChecked(var_o, "methods", []);
    var block2714 = new GraceBlock(this, 532, 1);
    setLineNumber(1);    // compilenode identifier
    block2714.real = function(var_meth) {
      setLineNumber(533);    // compilenode member
      // call case 6: other requests
      var call2717 = callmethodChecked(var_meth, "nameString", []);
      // call case 4: self request
      onSelf = true;
      var call2718 = callmethodChecked(this, "escapestring2(1)", [1], call2717);
      var var_mnm = call2718;
      setLineNumber(534);    // compilenode string
      var string2720 = new GraceString("\", NULL);");
      var string2723 = new GraceString(", \"");
      var string2726 = new GraceString("    add_Method((ClassData)type");
      var opresult2728 = callmethodChecked(string2726, "++(1)", [1], var_myc);
      var opresult2730 = callmethodChecked(opresult2728, "++(1)", [1], string2723);
      var opresult2732 = callmethodChecked(opresult2730, "++(1)", [1], var_mnm);
      var opresult2734 = callmethodChecked(opresult2732, "++(1)", [1], string2720);
      // call case 4: self request
      onSelf = true;
      var call2735 = callmethodChecked(this, "out(1)", [1], opresult2734);
      return call2735;
    };
    // call case 5: prelude request
    var call2736 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call2713, block2714);
    setLineNumber(537);    // compilenode string
    var string2738 = new GraceString("");
    var string2741 = new GraceString("type");
    var opresult2743 = callmethodChecked(string2741, "++(1)", [1], var_myc);
    var opresult2745 = callmethodChecked(opresult2743, "++(1)", [1], string2738);
    // call case 6: other requests
    var call2746 = callmethodChecked(var_o, "register:=(1)", [1], opresult2745);
    return call2746;
  };
  func2674.paramCounts = [1];
  this.methods["compiletypeliteral(1)"] = func2674;
  func2674.definitionLine = 527;
  func2674.definitionModule = "genc";
  setLineNumber(539);    // compilenode method
  var func2747 = function(argcv) {    // method compilemethod(_,_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_selfobj = arguments[curarg];
    curarg++;
    var var_pos = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(544);    // compilenode string
    var string2749 = new GraceString("\"");
    // call case 6: other requests
    var call2752 = callmethodChecked(var_o, "canonicalName", []);
    var string2754 = new GraceString("// method \"");
    var opresult2756 = callmethodChecked(string2754, "++(1)", [1], call2752);
    var opresult2758 = callmethodChecked(opresult2756, "++(1)", [1], string2749);
    // call case 4: self request
    onSelf = true;
    var call2759 = callmethodChecked(this, "out(1)", [1], opresult2758);
    setLineNumber(545);    // compilenode identifier
    var var_origParamsUsed = var_paramsUsed;
    setLineNumber(546);    // compilenode num
    var_paramsUsed = new GraceNum(1);
    setLineNumber(547);    // compilenode identifier
    var var_origPartsUsed = var_partsUsed;
    setLineNumber(548);    // compilenode num
    var_partsUsed = new GraceNum(1);
    setLineNumber(549);    // compilenode identifier
    var var_origInBlock = var_inBlock;
    setLineNumber(550);    // compilenode member
    // call case 6: other requests
    var call2761 = callmethodChecked(var_o, "selfclosure", []);
    var_inBlock = call2761;
    setLineNumber(551);    // compilenode identifier
    var var_oldout = var_output;
    setLineNumber(552);    // compilenode identifier
    var var_oldbblock = var_bblock;
    setLineNumber(553);    // compilenode identifier
    var var_oldusedvars = var_usedvars;
    setLineNumber(554);    // compilenode identifier
    var var_olddeclaredvars = var_declaredvars;
    setLineNumber(555);    // compilenode array
    var array2762 = new PrimitiveGraceList([]);
    var_output = array2762;
    setLineNumber(556);    // compilenode array
    var array2763 = new PrimitiveGraceList([]);
    var_usedvars = array2763;
    setLineNumber(557);    // compilenode array
    var array2764 = new PrimitiveGraceList([]);
    var_declaredvars = array2764;
    setLineNumber(558);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(559);    // compilenode identifier
    var opresult2767 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult2767;
    setLineNumber(560);    // compilenode member
    // call case 6: other requests
    var call2769 = callmethodChecked(var_o, "nameString", []);
    var var_name = call2769;
    setLineNumber(561);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call2771 = callmethodChecked(this, "escapestring2(1)", [1], var_name);
    var var_escapedName = call2771;
    setLineNumber(562);    // compilenode identifier
    var opresult2774 = callmethodChecked(var_name, "++(1)", [1], var_myc);
    var var_nm = opresult2774;
    setLineNumber(563);    // compilenode num
    var var_numslots = new GraceNum(0);
    setLineNumber(564);    // compilenode num
    var var_slot = new GraceNum(0);
    setLineNumber(565);    // compilenode identifier
    var var_haveTypedParams = GraceFalse;
    setLineNumber(566);    // compilenode string
    var string2776 = new GraceString("  int i;");
    // call case 4: self request
    onSelf = true;
    var call2777 = callmethodChecked(this, "out(1)", [1], string2776);
    setLineNumber(567);    // compilenode string
    var string2779 = new GraceString("  int curarg = 0;");
    // call case 4: self request
    onSelf = true;
    var call2780 = callmethodChecked(this, "out(1)", [1], string2779);
    setLineNumber(568);    // compilenode string
    var string2782 = new GraceString("  int pushcv[] = {1};");
    // call case 4: self request
    onSelf = true;
    var call2783 = callmethodChecked(this, "out(1)", [1], string2782);
    setLineNumber(569);    // compilenode member
    // call case 6: other requests
    var call2785 = callmethodChecked(var_o, "numParamLists", []);
    var var_npls = call2785;
    var if2786 = GraceDone;
    setLineNumber(570);    // compilenode identifier
    var opresult2789 = callmethodChecked(var_npls, ">(1)", [1], new GraceNum(0));
    // call case 6: other requests
    // call case 6: other requests
    var call2793 = callmethodChecked(var_o, "selfclosure", []);
    var call2794 = callmethodChecked(call2793, "prefix!", [0]);
    var opresult2796 = callmethodChecked(call2794, "&&(1)", [1], opresult2789);
    if (Grace_isTrue(opresult2796)) {
      setLineNumber(571);    // compilenode string
      var string2798 = new GraceString(" && args)");
      var string2801 = new GraceString("  if (nparts < ");
      var opresult2803 = callmethodChecked(string2801, "++(1)", [1], var_npls);
      var opresult2805 = callmethodChecked(opresult2803, "++(1)", [1], string2798);
      // call case 4: self request
      onSelf = true;
      var call2806 = callmethodChecked(this, "out(1)", [1], opresult2805);
      setLineNumber(574);    // compilenode string
      var string2808 = new GraceString(".\", nparts);");
      var string2811 = new GraceString("");
      var opresult2813 = callmethodChecked(string2811, "++(1)", [1], var_npls);
      var opresult2815 = callmethodChecked(opresult2813, "++(1)", [1], string2808);
      setLineNumber(573);    // compilenode string
      var string2817 = new GraceString("reflection error): got %i lists, expected ");
      setLineNumber(572);    // compilenode string
      var string2819 = new GraceString(" (probably ");
      // call case 6: other requests
      var call2822 = callmethodChecked(var_o, "canonicalName", []);
      var string2824 = new GraceString("    graceRaise(RequestError(), \"missing argument list for ");
      var opresult2826 = callmethodChecked(string2824, "++(1)", [1], call2822);
      var opresult2828 = callmethodChecked(opresult2826, "++(1)", [1], string2819);
      var opresult2830 = callmethodChecked(opresult2828, "++(1)", [1], string2817);
      var opresult2832 = callmethodChecked(opresult2830, "++(1)", [1], opresult2815);
      // call case 4: self request
      onSelf = true;
      var call2833 = callmethodChecked(this, "out(1)", [1], opresult2832);
      if2786 = call2833;
    }
    setLineNumber(576);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call2837 = callmethodChecked(var_o, "signature", []);
    var call2838 = callmethodChecked(call2837, "indices", []);
    var block2839 = new GraceBlock(this, 576, 1);
    setLineNumber(1);    // compilenode identifier
    block2839.real = function(var_partnr) {
      setLineNumber(577);    // compilenode identifier
      // call case 6: other requests
      // call case 6: other requests
      var call2842 = callmethodChecked(var_o, "signature", []);
      var call2843 = callmethodChecked(call2842, "at(1)", [1], var_partnr);
      var var_part = call2843;
      setLineNumber(578);    // compilenode member
      // call case 6: other requests
      var call2846 = callmethodChecked(var_part, "params", []);
      var block2847 = new GraceBlock(this, 578, 1);
      setLineNumber(1);    // compilenode identifier
      block2847.real = function(var_param) {
        setLineNumber(579);    // compilenode member
        // call case 6: other requests
        var call2850 = callmethodChecked(var_param, "value", []);
        // call case 4: self request
        onSelf = true;
        var call2851 = callmethodChecked(this, "escapeident(1)", [1], call2850);
        var var_pn = call2851;
        setLineNumber(580);    // compilenode string
        var string2853 = new GraceString("]);");
        var string2856 = new GraceString(" = &(stackframe->slots[");
        var string2859 = new GraceString("  Object *var_");
        var opresult2861 = callmethodChecked(string2859, "++(1)", [1], var_pn);
        var opresult2863 = callmethodChecked(opresult2861, "++(1)", [1], string2856);
        var opresult2865 = callmethodChecked(opresult2863, "++(1)", [1], var_slot);
        var opresult2867 = callmethodChecked(opresult2865, "++(1)", [1], string2853);
        // call case 4: self request
        onSelf = true;
        var call2868 = callmethodChecked(this, "out(1)", [1], opresult2867);
        setLineNumber(581);    // compilenode string
        var string2870 = new GraceString(" = args[curarg];");
        var string2873 = new GraceString("  *var_");
        var opresult2875 = callmethodChecked(string2873, "++(1)", [1], var_pn);
        var opresult2877 = callmethodChecked(opresult2875, "++(1)", [1], string2870);
        // call case 4: self request
        onSelf = true;
        var call2878 = callmethodChecked(this, "out(1)", [1], opresult2877);
        setLineNumber(582);    // compilenode string
        var string2880 = new GraceString("  curarg++;");
        // call case 4: self request
        onSelf = true;
        var call2881 = callmethodChecked(this, "out(1)", [1], string2880);
        setLineNumber(583);    // compilenode identifier
        // call case 6: other requests
        var call2883 = callmethodChecked(var_declaredvars, "push(1)", [1], var_pn);
        setLineNumber(584);    // compilenode identifier
        var opresult2886 = callmethodChecked(var_slot, "+(1)", [1], new GraceNum(1));
        var_slot = opresult2886;
        setLineNumber(585);    // compilenode identifier
        var opresult2889 = callmethodChecked(var_numslots, "+(1)", [1], new GraceNum(1));
        var_numslots = opresult2889;
        var if2890 = GraceDone;
        setLineNumber(586);    // compilenode member
        // call case 6: other requests
        var call2893 = callmethodChecked(var_param, "dtype", []);
        var opresult2895 = callmethodChecked(call2893, "\u2260(1)", [1], GraceFalse);
        if (Grace_isTrue(opresult2895)) {
          var if2896 = GraceDone;
          setLineNumber(589);    // compilenode string
          var string2897 = new GraceString("typeliteral");
          // call case 6: other requests
          // call case 6: other requests
          var call2901 = callmethodChecked(var_param, "dtype", []);
          var call2902 = callmethodChecked(call2901, "kind", []);
          var opresult2904 = callmethodChecked(call2902, "==(1)", [1], string2897);
          setLineNumber(588);    // compilenode string
          var string2906 = new GraceString("identifier");
          // call case 6: other requests
          // call case 6: other requests
          var call2910 = callmethodChecked(var_param, "dtype", []);
          var call2911 = callmethodChecked(call2910, "kind", []);
          var opresult2913 = callmethodChecked(call2911, "==(1)", [1], string2906);
          var opresult2915 = callmethodChecked(opresult2913, "||(1)", [1], opresult2904);
          setLineNumber(587);    // compilenode string
          var string2917 = new GraceString("Unknown");
          // call case 6: other requests
          // call case 6: other requests
          var call2921 = callmethodChecked(var_param, "dtype", []);
          var call2922 = callmethodChecked(call2921, "value", []);
          var opresult2924 = callmethodChecked(call2922, "\u2260(1)", [1], string2917);
          var opresult2926 = callmethodChecked(opresult2924, "&&(1)", [1], opresult2915);
          if (Grace_isTrue(opresult2926)) {
            setLineNumber(590);    // compilenode identifier
            var_haveTypedParams = GraceTrue;
            if2896 = GraceDone;
          }
          if2890 = if2896;
        }
        return if2890;
      };
      // call case 5: prelude request
      var call2927 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call2846, block2847);
      var if2928 = GraceDone;
      setLineNumber(594);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call2932 = callmethodChecked(var_part, "params", []);
      var call2933 = callmethodChecked(call2932, "size", []);
      var opresult2935 = callmethodChecked(call2933, ">(1)", [1], new GraceNum(0));
      // call case 6: other requests
      // call case 6: other requests
      var call2939 = callmethodChecked(var_o, "selfclosure", []);
      var call2940 = callmethodChecked(call2939, "prefix!", [0]);
      var opresult2942 = callmethodChecked(call2940, "&&(1)", [1], opresult2935);
      if (Grace_isTrue(opresult2942)) {
        setLineNumber(595);    // compilenode string
        var string2944 = new GraceString(")");
        // call case 6: other requests
        // call case 6: other requests
        var call2948 = callmethodChecked(var_part, "params", []);
        var call2949 = callmethodChecked(call2948, "size", []);
        var string2951 = new GraceString("] != ");
        var diff2955 = callmethodChecked(var_partnr, "-(1)", [1], new GraceNum(1));
        var string2957 = new GraceString("  if (argcv && argcv[");
        var opresult2959 = callmethodChecked(string2957, "++(1)", [1], diff2955);
        var opresult2961 = callmethodChecked(opresult2959, "++(1)", [1], string2951);
        var opresult2963 = callmethodChecked(opresult2961, "++(1)", [1], call2949);
        var opresult2965 = callmethodChecked(opresult2963, "++(1)", [1], string2944);
        // call case 4: self request
        onSelf = true;
        var call2966 = callmethodChecked(this, "out(1)", [1], opresult2965);
        setLineNumber(596);    // compilenode string
        var string2968 = new GraceString("\");");
        // call case 6: other requests
        var call2971 = callmethodChecked(var_part, "canonicalName", []);
        var string2973 = new GraceString("    graceRaise(RequestError(), \"wrong number of arguments for part ");
        var opresult2975 = callmethodChecked(string2973, "++(1)", [1], call2971);
        var opresult2977 = callmethodChecked(opresult2975, "++(1)", [1], string2968);
        // call case 4: self request
        onSelf = true;
        var call2978 = callmethodChecked(this, "out(1)", [1], opresult2977);
        if2928 = call2978;
      }
      return if2928;
    };
    // call case 5: prelude request
    var call2979 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call2838, block2839);
    setLineNumber(599);    // compilenode string
    var string2981 = new GraceString("]);");
    var string2984 = new GraceString("  Object *selfslot = &(stackframe->slots[");
    var opresult2986 = callmethodChecked(string2984, "++(1)", [1], var_slot);
    var opresult2988 = callmethodChecked(opresult2986, "++(1)", [1], string2981);
    // call case 4: self request
    onSelf = true;
    var call2989 = callmethodChecked(this, "out(1)", [1], opresult2988);
    setLineNumber(600);    // compilenode string
    var string2991 = new GraceString("  *selfslot = self;");
    // call case 4: self request
    onSelf = true;
    var call2992 = callmethodChecked(this, "out(1)", [1], string2991);
    setLineNumber(601);    // compilenode string
    var string2994 = new GraceString("  setframeelementname(stackframe, 0, \"self\");");
    // call case 4: self request
    onSelf = true;
    var call2995 = callmethodChecked(this, "out(1)", [1], string2994);
    setLineNumber(602);    // compilenode identifier
    var opresult2998 = callmethodChecked(var_slot, "+(1)", [1], new GraceNum(1));
    var_slot = opresult2998;
    setLineNumber(603);    // compilenode identifier
    var opresult3001 = callmethodChecked(var_numslots, "+(1)", [1], new GraceNum(1));
    var_numslots = opresult3001;
    setLineNumber(604);    // compilenode string
    var string3003 = new GraceString("  if (methodInheritingObject) curarg++;");
    // call case 4: self request
    onSelf = true;
    var call3004 = callmethodChecked(this, "out(1)", [1], string3003);
    var if3005 = GraceDone;
    setLineNumber(605);    // compilenode member
    // call case 6: other requests
    var call3008 = callmethodChecked(var_o, "typeParams", []);
    var opresult3010 = callmethodChecked(call3008, "\u2260(1)", [1], GraceFalse);
    if (Grace_isTrue(opresult3010)) {
      setLineNumber(606);    // compilenode string
      var string3012 = new GraceString("// Start typeParams");
      // call case 4: self request
      onSelf = true;
      var call3013 = callmethodChecked(this, "out(1)", [1], string3012);
      setLineNumber(607);    // compilenode block
      var block3015 = new GraceBlock(this, 607, 1);
      setLineNumber(1);    // compilenode identifier
      block3015.real = function(var_g) {
        setLineNumber(608);    // compilenode member
        // call case 6: other requests
        var call3018 = callmethodChecked(var_g, "value", []);
        // call case 4: self request
        onSelf = true;
        var call3019 = callmethodChecked(this, "escapeident(1)", [1], call3018);
        var var_gn = call3019;
        setLineNumber(609);    // compilenode identifier
        // call case 6: other requests
        var call3021 = callmethodChecked(var_declaredvars, "push(1)", [1], var_gn);
        setLineNumber(610);    // compilenode string
        var string3023 = new GraceString("]);");
        var string3026 = new GraceString(" = &(stackframe->slots[");
        var string3029 = new GraceString("  Object *var_");
        var opresult3031 = callmethodChecked(string3029, "++(1)", [1], var_gn);
        var opresult3033 = callmethodChecked(opresult3031, "++(1)", [1], string3026);
        var opresult3035 = callmethodChecked(opresult3033, "++(1)", [1], var_slot);
        var opresult3037 = callmethodChecked(opresult3035, "++(1)", [1], string3023);
        // call case 4: self request
        onSelf = true;
        var call3038 = callmethodChecked(this, "out(1)", [1], opresult3037);
        setLineNumber(611);    // compilenode identifier
        var opresult3041 = callmethodChecked(var_slot, "+(1)", [1], new GraceNum(1));
        var_slot = opresult3041;
        setLineNumber(612);    // compilenode identifier
        var opresult3044 = callmethodChecked(var_numslots, "+(1)", [1], new GraceNum(1));
        var_numslots = opresult3044;
        return GraceDone;
      };
      // call case 6: other requests
      setLineNumber(607);    // compilenode member
      // call case 6: other requests
      var call3046 = callmethodChecked(var_o, "typeParams", []);
      var call3047 = callmethodChecked(call3046, "do(1)", [1], block3015);
      setLineNumber(614);    // compilenode string
      var string3049 = new GraceString(" + (methodInheritingObject != NULL)) {");
      // call case 6: other requests
      // call case 6: other requests
      var call3053 = callmethodChecked(var_o, "signature", []);
      var call3054 = callmethodChecked(call3053, "size", []);
      var string3056 = new GraceString("  if (nparts == 1 + ");
      var opresult3058 = callmethodChecked(string3056, "++(1)", [1], call3054);
      var opresult3060 = callmethodChecked(opresult3058, "++(1)", [1], string3049);
      // call case 4: self request
      onSelf = true;
      var call3061 = callmethodChecked(this, "out(1)", [1], opresult3060);
      setLineNumber(615);    // compilenode string
      var string3063 = new GraceString(") {");
      // call case 6: other requests
      // call case 6: other requests
      var call3067 = callmethodChecked(var_o, "typeParams", []);
      var call3068 = callmethodChecked(call3067, "size", []);
      var string3070 = new GraceString("    if (argcv[nparts-1] < ");
      var opresult3072 = callmethodChecked(string3070, "++(1)", [1], call3068);
      var opresult3074 = callmethodChecked(opresult3072, "++(1)", [1], string3063);
      // call case 4: self request
      onSelf = true;
      var call3075 = callmethodChecked(this, "out(1)", [1], opresult3074);
      setLineNumber(616);    // compilenode string
      var string3077 = new GraceString("      graceRaise(RequestError(), \"insufficient generic parameters\");");
      // call case 4: self request
      onSelf = true;
      var call3078 = callmethodChecked(this, "out(1)", [1], string3077);
      setLineNumber(617);    // compilenode string
      var string3080 = new GraceString("    }");
      // call case 4: self request
      onSelf = true;
      var call3081 = callmethodChecked(this, "out(1)", [1], string3080);
      setLineNumber(618);    // compilenode block
      var block3083 = new GraceBlock(this, 618, 1);
      setLineNumber(1);    // compilenode identifier
      block3083.real = function(var_g) {
        setLineNumber(619);    // compilenode member
        // call case 6: other requests
        var call3086 = callmethodChecked(var_g, "value", []);
        // call case 4: self request
        onSelf = true;
        var call3087 = callmethodChecked(this, "escapeident(1)", [1], call3086);
        var var_gn = call3087;
        setLineNumber(620);    // compilenode string
        var string3089 = new GraceString(" = args[curarg++];");
        var string3092 = new GraceString("    *var_");
        var opresult3094 = callmethodChecked(string3092, "++(1)", [1], var_gn);
        var opresult3096 = callmethodChecked(opresult3094, "++(1)", [1], string3089);
        // call case 4: self request
        onSelf = true;
        var call3097 = callmethodChecked(this, "out(1)", [1], opresult3096);
        return call3097;
      };
      // call case 6: other requests
      setLineNumber(618);    // compilenode member
      // call case 6: other requests
      var call3099 = callmethodChecked(var_o, "typeParams", []);
      var call3100 = callmethodChecked(call3099, "do(1)", [1], block3083);
      setLineNumber(622);    // compilenode string
      var string3102 = new GraceString("  } else {");
      // call case 4: self request
      onSelf = true;
      var call3103 = callmethodChecked(this, "out(1)", [1], string3102);
      setLineNumber(623);    // compilenode block
      var block3105 = new GraceBlock(this, 623, 1);
      setLineNumber(1);    // compilenode identifier
      block3105.real = function(var_g) {
        setLineNumber(624);    // compilenode member
        // call case 6: other requests
        var call3108 = callmethodChecked(var_g, "value", []);
        // call case 4: self request
        onSelf = true;
        var call3109 = callmethodChecked(this, "escapeident(1)", [1], call3108);
        var var_gn = call3109;
        setLineNumber(625);    // compilenode string
        var string3111 = new GraceString(" = Unknown;");
        var string3114 = new GraceString("    *var_");
        var opresult3116 = callmethodChecked(string3114, "++(1)", [1], var_gn);
        var opresult3118 = callmethodChecked(opresult3116, "++(1)", [1], string3111);
        // call case 4: self request
        onSelf = true;
        var call3119 = callmethodChecked(this, "out(1)", [1], opresult3118);
        return call3119;
      };
      // call case 6: other requests
      setLineNumber(623);    // compilenode member
      // call case 6: other requests
      var call3121 = callmethodChecked(var_o, "typeParams", []);
      var call3122 = callmethodChecked(call3121, "do(1)", [1], block3105);
      setLineNumber(627);    // compilenode string
      var string3124 = new GraceString("  }");
      // call case 4: self request
      onSelf = true;
      var call3125 = callmethodChecked(this, "out(1)", [1], string3124);
      setLineNumber(628);    // compilenode string
      var string3127 = new GraceString("// End typeParams");
      // call case 4: self request
      onSelf = true;
      var call3128 = callmethodChecked(this, "out(1)", [1], string3127);
      if3005 = call3128;
    }
    setLineNumber(630);    // compilenode string
    var string3129 = new GraceString("done");
    var var_ret = string3129;
    setLineNumber(631);    // compilenode member
    // call case 6: other requests
    var call3132 = callmethodChecked(var_o, "body", []);
    // call case 4: self request
    onSelf = true;
    var call3133 = callmethodChecked(this, "countbindings(1)", [1], call3132);
    var opresult3136 = callmethodChecked(var_numslots, "+(1)", [1], call3133);
    var_numslots = opresult3136;
    setLineNumber(632);    // compilenode member
    // call case 6: other requests
    var call3139 = callmethodChecked(var_o, "body", []);
    // call case 4: self request
    onSelf = true;
    var call3140 = callmethodChecked(this, "definebindings(2)", [2], call3139, var_slot);
    setLineNumber(633);    // compilenode identifier
    var var_tailObject = GraceFalse;
    setLineNumber(634);    // compilenode identifier
    var var_tco = GraceFalse;
    var if3141 = GraceDone;
    setLineNumber(636);    // compilenode block
    var block3142 = new GraceBlock(this, 636, 0);
    block3142.real = function() {
      var string3144 = new GraceString("TailCall");
      // call case 6: other requests
      // call case 6: other requests
      var call3146 = callmethodChecked(var_util, "extensions", []);
      var call3147 = callmethodChecked(call3146, "contains(1)", [1], string3144);
      return call3147;
    };
    setLineNumber(635);    // compilenode block
    var block3149 = new GraceBlock(this, 635, 0);
    block3149.real = function() {
      var string3150 = new GraceString("call");
      // call case 6: other requests
      // call case 6: other requests
      // call case 6: other requests
      var call3155 = callmethodChecked(var_o, "body", []);
      var call3156 = callmethodChecked(call3155, "last", []);
      var call3157 = callmethodChecked(call3156, "kind", []);
      var opresult3159 = callmethodChecked(call3157, "==(1)", [1], string3150);
      return opresult3159;
    };
    // call case 6: other requests
    // call case 6: other requests
    var call3164 = callmethodChecked(var_o, "body", []);
    var call3165 = callmethodChecked(call3164, "size", []);
    var opresult3167 = callmethodChecked(call3165, ">(1)", [1], new GraceNum(0));
    var opresult3169 = callmethodChecked(opresult3167, "&&(1)", [1], block3149);
    var opresult3171 = callmethodChecked(opresult3169, "&&(1)", [1], block3142);
    if (Grace_isTrue(opresult3171)) {
      setLineNumber(637);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call3174 = callmethodChecked(var_o, "body", []);
      var call3175 = callmethodChecked(call3174, "pop", []);
      var_tco = call3175;
      if3141 = GraceDone;
    }
    var if3176 = GraceDone;
    setLineNumber(639);    // compilenode block
    var block3177 = new GraceBlock(this, 639, 0);
    block3177.real = function() {
      var string3178 = new GraceString("object");
      // call case 6: other requests
      // call case 6: other requests
      // call case 6: other requests
      var call3183 = callmethodChecked(var_o, "body", []);
      var call3184 = callmethodChecked(call3183, "last", []);
      var call3185 = callmethodChecked(call3184, "kind", []);
      var opresult3187 = callmethodChecked(call3185, "==(1)", [1], string3178);
      return opresult3187;
    };
    // call case 6: other requests
    // call case 6: other requests
    var call3192 = callmethodChecked(var_o, "body", []);
    var call3193 = callmethodChecked(call3192, "size", []);
    var opresult3195 = callmethodChecked(call3193, ">(1)", [1], new GraceNum(0));
    var opresult3197 = callmethodChecked(opresult3195, "&&(1)", [1], block3177);
    if (Grace_isTrue(opresult3197)) {
      setLineNumber(640);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call3200 = callmethodChecked(var_o, "body", []);
      var call3201 = callmethodChecked(call3200, "pop", []);
      var_tailObject = call3201;
      var if3202 = GraceDone;
      setLineNumber(641);    // compilenode string
      var string3203 = new GraceString("object");
      // call case 6: other requests
      var call3206 = callmethodChecked(var_tailObject, "name", []);
      var opresult3208 = callmethodChecked(call3206, "==(1)", [1], string3203);
      if (Grace_isTrue(opresult3208)) {
        setLineNumber(642);    // compilenode identifier
        var var_selfName = var_selfobj;
        var if3209 = GraceDone;
        setLineNumber(643);    // compilenode string
        var string3211 = new GraceString("var_");
        // call case 6: other requests
        var call3212 = callmethodChecked(var_selfName, "startsWith(1)", [1], string3211);
        if (Grace_isTrue(call3212)) {
          setLineNumber(644);    // compilenode member
          // call case 6: other requests
          var call3215 = callmethodChecked(var_selfName, "size", []);
          // call case 6: other requests
          var call3216 = callmethodChecked(var_selfName, "substringFrom(1)to(1)", [1, 1], new GraceNum(5), call3215);
          var_selfName = call3216;
          if3209 = GraceDone;
        }
        setLineNumber(646);    // compilenode member
        // call case 6: other requests
        var call3219 = callmethodChecked(var_o, "nameString", []);
        var string3221 = new GraceString(".");
        var opresult3224 = callmethodChecked(var_selfobj, "++(1)", [1], string3221);
        var opresult3226 = callmethodChecked(opresult3224, "++(1)", [1], call3219);
        // call case 6: other requests
        var call3227 = callmethodChecked(var_tailObject, "name:=(1)", [1], opresult3226);
        if3202 = call3227;
      }
      if3176 = if3202;
    }
    setLineNumber(649);    // compilenode member
    // call case 6: other requests
    var call3230 = callmethodChecked(var_o, "body", []);
    var block3231 = new GraceBlock(this, 649, 1);
    setLineNumber(1);    // compilenode identifier
    block3231.real = function(var_l) {
      setLineNumber(650);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call3233 = callmethodChecked(this, "compilenode(1)", [1], var_l);
      var_ret = call3233;
      return GraceDone;
    };
    // call case 5: prelude request
    var call3234 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call3230, block3231);
    var if3235 = GraceDone;
    setLineNumber(652);    // compilenode identifier
    var opresult3238 = callmethodChecked(GraceFalse, "\u2260(1)", [1], var_tailObject);
    if (Grace_isTrue(opresult3238)) {
      setLineNumber(653);    // compilenode identifier
      // call case 6: other requests
      // call case 6: other requests
      var call3241 = callmethodChecked(var_o, "body", []);
      var call3242 = callmethodChecked(call3241, "push(1)", [1], var_tailObject);
      setLineNumber(654);    // compilenode string
      var string3244 = new GraceString("  isTailObject = 1;");
      // call case 4: self request
      onSelf = true;
      var call3245 = callmethodChecked(this, "out(1)", [1], string3244);
      setLineNumber(655);    // compilenode string
      var string3247 = new GraceString("  inheritingObject = methodInheritingObject;");
      // call case 4: self request
      onSelf = true;
      var call3248 = callmethodChecked(this, "out(1)", [1], string3247);
      setLineNumber(656);    // compilenode string
      var string3250 = new GraceString("self");
      // call case 4: self request
      onSelf = true;
      var call3251 = callmethodChecked(this, "compileobject(2)", [2], var_tailObject, string3250);
      setLineNumber(657);    // compilenode member
      // call case 6: other requests
      var call3253 = callmethodChecked(var_tailObject, "register", []);
      var_ret = call3253;
      if3235 = GraceDone;
    }
    var if3254 = GraceDone;
    setLineNumber(659);    // compilenode identifier
    var opresult3257 = callmethodChecked(GraceFalse, "\u2260(1)", [1], var_tco);
    if (Grace_isTrue(opresult3257)) {
      setLineNumber(660);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call3259 = callmethodChecked(this, "compilecall(2)", [2], var_tco, GraceTrue);
      setLineNumber(661);    // compilenode member
      // call case 6: other requests
      var call3261 = callmethodChecked(var_tco, "register", []);
      var_ret = call3261;
      if3254 = GraceDone;
    }
    setLineNumber(663);    // compilenode string
    var string3263 = new GraceString("  gc_frame_end(frame);");
    // call case 4: self request
    onSelf = true;
    var call3264 = callmethodChecked(this, "out(1)", [1], string3263);
    setLineNumber(664);    // compilenode string
    var string3266 = new GraceString(";");
    var string3269 = new GraceString("  return ");
    var opresult3271 = callmethodChecked(string3269, "++(1)", [1], var_ret);
    var opresult3273 = callmethodChecked(opresult3271, "++(1)", [1], string3266);
    // call case 4: self request
    onSelf = true;
    var call3274 = callmethodChecked(this, "out(1)", [1], opresult3273);
    setLineNumber(665);    // compilenode string
    var string3276 = new GraceString("}");
    // call case 4: self request
    onSelf = true;
    var call3277 = callmethodChecked(this, "out(1)", [1], string3276);
    setLineNumber(668);    // compilenode identifier
    var var_body = var_output;
    setLineNumber(669);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call3279 = callmethodChecked(this, "outswitchup", []);
    setLineNumber(670);    // compilenode array
    var array3280 = new PrimitiveGraceList([]);
    var var_closurevars = array3280;
    setLineNumber(671);    // compilenode block
    var block3282 = new GraceBlock(this, 671, 1);
    setLineNumber(1);    // compilenode identifier
    block3282.real = function(var_u) {
      setLineNumber(672);    // compilenode identifier
      var var_decl = GraceFalse;
      setLineNumber(673);    // compilenode block
      var block3284 = new GraceBlock(this, 673, 1);
      setLineNumber(1);    // compilenode identifier
      block3284.real = function(var_d) {
        var if3285 = GraceDone;
        setLineNumber(674);    // compilenode identifier
        var opresult3288 = callmethodChecked(var_d, "==(1)", [1], var_u);
        if (Grace_isTrue(opresult3288)) {
          setLineNumber(675);    // compilenode identifier
          var_decl = GraceTrue;
          if3285 = GraceDone;
        }
        return if3285;
      };
      // call case 5: prelude request
      var call3289 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_declaredvars, block3284);
      var if3290 = GraceDone;
      setLineNumber(678);    // compilenode identifier
      if (Grace_isTrue(var_decl)) {
        setLineNumber(679);    // compilenode identifier
        var_decl = var_decl;
        if3290 = GraceDone;
      } else {
        setLineNumber(681);    // compilenode identifier
        var var_found = GraceFalse;
        setLineNumber(682);    // compilenode block
        var block3292 = new GraceBlock(this, 682, 1);
        setLineNumber(1);    // compilenode identifier
        block3292.real = function(var_v) {
          var if3293 = GraceDone;
          setLineNumber(683);    // compilenode identifier
          var opresult3296 = callmethodChecked(var_v, "==(1)", [1], var_u);
          if (Grace_isTrue(opresult3296)) {
            setLineNumber(684);    // compilenode identifier
            var_found = GraceTrue;
            if3293 = GraceDone;
          }
          return if3293;
        };
        // call case 5: prelude request
        var call3297 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_closurevars, block3292);
        var if3298 = GraceDone;
        setLineNumber(687);    // compilenode identifier
        if (Grace_isTrue(var_found)) {
          setLineNumber(688);    // compilenode identifier
          var_found = var_found;
          if3298 = GraceDone;
        } else {
          setLineNumber(690);    // compilenode identifier
          // call case 6: other requests
          var call3300 = callmethodChecked(var_closurevars, "push(1)", [1], var_u);
          if3298 = call3300;
        }
        if3290 = if3298;
      }
      return if3290;
    };
    // call case 5: prelude request
    var call3301 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_usedvars, block3282);
    var if3302 = GraceDone;
    setLineNumber(694);    // compilenode member
    // call case 6: other requests
    var call3304 = callmethodChecked(var_o, "selfclosure", []);
    if (Grace_isTrue(call3304)) {
      setLineNumber(695);    // compilenode string
      var string3306 = new GraceString("self");
      // call case 6: other requests
      var call3307 = callmethodChecked(var_closurevars, "push(1)", [1], string3306);
      if3302 = call3307;
    }
    setLineNumber(697);    // compilenode string
    var string3309 = new GraceString("");
    // call case 4: self request
    onSelf = true;
    var call3312 = callmethodChecked(this, "escapestring2(1)", [1], var_nm);
    var string3314 = new GraceString("_");
    var string3317 = new GraceString("meth_");
    var opresult3319 = callmethodChecked(string3317, "++(1)", [1], var_modname);
    var opresult3321 = callmethodChecked(opresult3319, "++(1)", [1], string3314);
    var opresult3323 = callmethodChecked(opresult3321, "++(1)", [1], call3312);
    var opresult3325 = callmethodChecked(opresult3323, "++(1)", [1], string3309);
    // call case 4: self request
    onSelf = true;
    var call3326 = callmethodChecked(this, "escapeident(1)", [1], opresult3325);
    var var_litname = call3326;
    var if3327 = GraceDone;
    setLineNumber(698);    // compilenode member
    // call case 6: other requests
    var call3330 = callmethodChecked(var_closurevars, "size", []);
    var opresult3332 = callmethodChecked(call3330, ">(1)", [1], new GraceNum(0));
    if (Grace_isTrue(opresult3332)) {
      var if3333 = GraceDone;
      setLineNumber(699);    // compilenode member
      // call case 6: other requests
      var call3335 = callmethodChecked(var_o, "selfclosure", []);
      if (Grace_isTrue(call3335)) {
        setLineNumber(701);    // compilenode string
        var string3337 = new GraceString("Object *args, int32_t flags) {");
        setLineNumber(700);    // compilenode string
        var string3339 = new GraceString("(Object realself, int nparts, int *argcv, ");
        var string3342 = new GraceString("Object ");
        var opresult3344 = callmethodChecked(string3342, "++(1)", [1], var_litname);
        var opresult3346 = callmethodChecked(opresult3344, "++(1)", [1], string3339);
        var opresult3348 = callmethodChecked(opresult3346, "++(1)", [1], string3337);
        // call case 4: self request
        onSelf = true;
        var call3349 = callmethodChecked(this, "out(1)", [1], opresult3348);
        setLineNumber(702);    // compilenode string
        var string3351 = new GraceString("  struct UserObject *uo = (struct UserObject*)realself;");
        // call case 4: self request
        onSelf = true;
        var call3352 = callmethodChecked(this, "out(1)", [1], string3351);
        if3333 = call3352;
      } else {
        setLineNumber(705);    // compilenode string
        var string3354 = new GraceString("int32_t flags) {");
        setLineNumber(704);    // compilenode string
        var string3356 = new GraceString("(Object self, int nparts, int *argcv, Object *args, ");
        var string3359 = new GraceString("Object ");
        var opresult3361 = callmethodChecked(string3359, "++(1)", [1], var_litname);
        var opresult3363 = callmethodChecked(opresult3361, "++(1)", [1], string3356);
        var opresult3365 = callmethodChecked(opresult3363, "++(1)", [1], string3354);
        // call case 4: self request
        onSelf = true;
        var call3366 = callmethodChecked(this, "out(1)", [1], opresult3365);
        setLineNumber(706);    // compilenode string
        var string3368 = new GraceString("  struct UserObject *uo = (struct UserObject*)self;");
        // call case 4: self request
        onSelf = true;
        var call3369 = callmethodChecked(this, "out(1)", [1], string3368);
        if3333 = call3369;
      }
      setLineNumber(708);    // compilenode string
      var string3371 = new GraceString(", (flags>>24)&0xff);");
      var string3374 = new GraceString("  Object closure = getdatum((Object)uo, ");
      var opresult3376 = callmethodChecked(string3374, "++(1)", [1], var_pos);
      var opresult3378 = callmethodChecked(opresult3376, "++(1)", [1], string3371);
      // call case 4: self request
      onSelf = true;
      var call3379 = callmethodChecked(this, "out(1)", [1], opresult3378);
      setLineNumber(709);    // compilenode string
      var string3381 = new GraceString(", getclosureframe(closure));");
      var string3384 = new GraceString("  struct StackFrameObject *stackframe = alloc_StackFrame(");
      var opresult3386 = callmethodChecked(string3384, "++(1)", [1], var_numslots);
      var opresult3388 = callmethodChecked(opresult3386, "++(1)", [1], string3381);
      // call case 4: self request
      onSelf = true;
      var call3389 = callmethodChecked(this, "out(1)", [1], opresult3388);
      setLineNumber(710);    // compilenode string
      var string3391 = new GraceString("  pushclosure(closure);");
      // call case 4: self request
      onSelf = true;
      var call3392 = callmethodChecked(this, "out(1)", [1], string3391);
      if3327 = call3392;
    } else {
      setLineNumber(713);    // compilenode string
      var string3394 = new GraceString("int32_t flags) {");
      setLineNumber(712);    // compilenode string
      var string3396 = new GraceString("(Object self, int nparts, int *argcv, Object *args, ");
      var string3399 = new GraceString("Object ");
      var opresult3401 = callmethodChecked(string3399, "++(1)", [1], var_litname);
      var opresult3403 = callmethodChecked(opresult3401, "++(1)", [1], string3396);
      var opresult3405 = callmethodChecked(opresult3403, "++(1)", [1], string3394);
      // call case 4: self request
      onSelf = true;
      var call3406 = callmethodChecked(this, "out(1)", [1], opresult3405);
      setLineNumber(714);    // compilenode string
      var string3408 = new GraceString(", NULL);");
      var string3411 = new GraceString("  struct StackFrameObject *stackframe = alloc_StackFrame(");
      var opresult3413 = callmethodChecked(string3411, "++(1)", [1], var_numslots);
      var opresult3415 = callmethodChecked(opresult3413, "++(1)", [1], string3408);
      // call case 4: self request
      onSelf = true;
      var call3416 = callmethodChecked(this, "out(1)", [1], opresult3415);
      setLineNumber(715);    // compilenode string
      var string3418 = new GraceString("  pushclosure(NULL);");
      // call case 4: self request
      onSelf = true;
      var call3419 = callmethodChecked(this, "out(1)", [1], string3418);
      if3327 = call3419;
    }
    setLineNumber(717);    // compilenode string
    var string3421 = new GraceString("\");");
    var string3424 = new GraceString("  pushstackframe(stackframe, \"");
    var opresult3426 = callmethodChecked(string3424, "++(1)", [1], var_escapedName);
    var opresult3428 = callmethodChecked(opresult3426, "++(1)", [1], string3421);
    // call case 4: self request
    onSelf = true;
    var call3429 = callmethodChecked(this, "out(1)", [1], opresult3428);
    setLineNumber(718);    // compilenode string
    var string3431 = new GraceString("  int frame = gc_frame_new();");
    // call case 4: self request
    onSelf = true;
    var call3432 = callmethodChecked(this, "out(1)", [1], string3431);
    setLineNumber(719);    // compilenode string
    var string3434 = new GraceString("  gc_frame_newslot((Object)stackframe);");
    // call case 4: self request
    onSelf = true;
    var call3435 = callmethodChecked(this, "out(1)", [1], string3434);
    setLineNumber(720);    // compilenode string
    var string3437 = new GraceString("  Object methodInheritingObject = NULL;");
    // call case 4: self request
    onSelf = true;
    var call3438 = callmethodChecked(this, "out(1)", [1], string3437);
    setLineNumber(721);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call3442 = callmethodChecked(var_o, "signature", []);
    var call3443 = callmethodChecked(call3442, "indices", []);
    var block3444 = new GraceBlock(this, 721, 1);
    setLineNumber(1);    // compilenode identifier
    block3444.real = function(var_partnr) {
      setLineNumber(722);    // compilenode identifier
      // call case 6: other requests
      // call case 6: other requests
      var call3447 = callmethodChecked(var_o, "signature", []);
      var call3448 = callmethodChecked(call3447, "at(1)", [1], var_partnr);
      var var_part = call3448;
      var if3449 = GraceDone;
      setLineNumber(723);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call3453 = callmethodChecked(var_part, "params", []);
      var call3454 = callmethodChecked(call3453, "size", []);
      var opresult3456 = callmethodChecked(call3454, ">(1)", [1], new GraceNum(0));
      if (Grace_isTrue(opresult3456)) {
        setLineNumber(724);    // compilenode string
        var string3458 = new GraceString(")");
        // call case 6: other requests
        // call case 6: other requests
        var call3462 = callmethodChecked(var_part, "params", []);
        var call3463 = callmethodChecked(call3462, "size", []);
        var string3465 = new GraceString("] < ");
        var diff3469 = callmethodChecked(var_partnr, "-(1)", [1], new GraceNum(1));
        var string3471 = new GraceString("  if (nparts > 0 && argcv[");
        var opresult3473 = callmethodChecked(string3471, "++(1)", [1], diff3469);
        var opresult3475 = callmethodChecked(opresult3473, "++(1)", [1], string3465);
        var opresult3477 = callmethodChecked(opresult3475, "++(1)", [1], call3463);
        var opresult3479 = callmethodChecked(opresult3477, "++(1)", [1], string3458);
        // call case 4: self request
        onSelf = true;
        var call3480 = callmethodChecked(this, "out(1)", [1], opresult3479);
        setLineNumber(725);    // compilenode string
        var string3482 = new GraceString("\");");
        // call case 6: other requests
        // call case 6: other requests
        var call3486 = callmethodChecked(var_o, "canonicalName", []);
        var call3487 = callmethodChecked(call3486, "quoted", []);
        var string3489 = new GraceString("    graceRaise(RequestError(), \"insufficient arguments to method ");
        var opresult3491 = callmethodChecked(string3489, "++(1)", [1], call3487);
        var opresult3493 = callmethodChecked(opresult3491, "++(1)", [1], string3482);
        // call case 4: self request
        onSelf = true;
        var call3494 = callmethodChecked(this, "out(1)", [1], opresult3493);
        if3449 = call3494;
      }
      return if3449;
    };
    // call case 5: prelude request
    var call3495 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call3443, block3444);
    setLineNumber(732);    // compilenode num
    var var_i = new GraceNum(0);
    setLineNumber(733);    // compilenode array
    var array3496 = new PrimitiveGraceList([]);
    var var_toremove = array3496;
    setLineNumber(734);    // compilenode member
    // call case 6: other requests
    var call3499 = callmethodChecked(var_o, "signature", []);
    var block3500 = new GraceBlock(this, 734, 1);
    setLineNumber(1);    // compilenode identifier
    block3500.real = function(var_part) {
      setLineNumber(735);    // compilenode member
      // call case 6: other requests
      var call3503 = callmethodChecked(var_part, "params", []);
      var block3504 = new GraceBlock(this, 735, 1);
      setLineNumber(1);    // compilenode identifier
      block3504.real = function(var_p) {
        setLineNumber(736);    // compilenode member
        // call case 6: other requests
        var call3507 = callmethodChecked(var_p, "value", []);
        // call case 4: self request
        onSelf = true;
        var call3508 = callmethodChecked(this, "escapeident(1)", [1], call3507);
        var var_pn = call3508;
        var if3509 = GraceDone;
        setLineNumber(737);    // compilenode identifier
        // call case 6: other requests
        var call3511 = callmethodChecked(var_closurevars, "contains(1)", [1], var_pn);
        if (Grace_isTrue(call3511)) {
          setLineNumber(738);    // compilenode identifier
          // call case 6: other requests
          var call3513 = callmethodChecked(var_toremove, "push(1)", [1], var_pn);
          if3509 = call3513;
        }
        return if3509;
      };
      // call case 5: prelude request
      var call3514 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call3503, block3504);
      return call3514;
    };
    // call case 5: prelude request
    var call3515 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call3499, block3500);
    setLineNumber(746);    // compilenode identifier
    var var_origclosurevars = var_closurevars;
    setLineNumber(747);    // compilenode array
    var array3516 = new PrimitiveGraceList([]);
    var_closurevars = array3516;
    setLineNumber(748);    // compilenode block
    var block3518 = new GraceBlock(this, 748, 1);
    setLineNumber(1);    // compilenode identifier
    block3518.real = function(var_pn) {
      var if3519 = GraceDone;
      setLineNumber(749);    // compilenode identifier
      // call case 6: other requests
      var call3521 = callmethodChecked(var_toremove, "contains(1)", [1], var_pn);
      if (Grace_isTrue(call3521)) {
      } else {
        setLineNumber(752);    // compilenode identifier
        // call case 6: other requests
        var call3523 = callmethodChecked(var_closurevars, "push(1)", [1], var_pn);
        if3519 = call3523;
      }
      return if3519;
    };
    // call case 5: prelude request
    var call3524 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_origclosurevars, block3518);
    setLineNumber(755);    // compilenode string
    var string3526 = new GraceString("];");
    var string3529 = new GraceString("  Object params[");
    var opresult3531 = callmethodChecked(string3529, "++(1)", [1], var_paramsUsed);
    var opresult3533 = callmethodChecked(opresult3531, "++(1)", [1], string3526);
    // call case 4: self request
    onSelf = true;
    var call3534 = callmethodChecked(this, "out(1)", [1], opresult3533);
    setLineNumber(756);    // compilenode string
    var string3536 = new GraceString("];");
    var string3539 = new GraceString("  int partcv[");
    var opresult3541 = callmethodChecked(string3539, "++(1)", [1], var_partsUsed);
    var opresult3543 = callmethodChecked(opresult3541, "++(1)", [1], string3536);
    // call case 4: self request
    onSelf = true;
    var call3544 = callmethodChecked(this, "out(1)", [1], opresult3543);
    setLineNumber(757);    // compilenode num
    var var_j = new GraceNum(0);
    setLineNumber(758);    // compilenode block
    var block3546 = new GraceBlock(this, 758, 1);
    setLineNumber(1);    // compilenode identifier
    block3546.real = function(var_cv) {
      var if3547 = GraceDone;
      setLineNumber(759);    // compilenode string
      var string3548 = new GraceString("self");
      var opresult3551 = callmethodChecked(var_cv, "==(1)", [1], string3548);
      if (Grace_isTrue(opresult3551)) {
        setLineNumber(760);    // compilenode string
        var string3553 = new GraceString("));");
        var string3556 = new GraceString("  Object self = *(getfromclosure(closure, ");
        var opresult3558 = callmethodChecked(string3556, "++(1)", [1], var_j);
        var opresult3560 = callmethodChecked(opresult3558, "++(1)", [1], string3553);
        // call case 4: self request
        onSelf = true;
        var call3561 = callmethodChecked(this, "out(1)", [1], opresult3560);
        setLineNumber(761);    // compilenode string
        var string3563 = new GraceString("  sourceObject = self;");
        // call case 4: self request
        onSelf = true;
        var call3564 = callmethodChecked(this, "out(1)", [1], string3563);
        if3547 = call3564;
      } else {
        setLineNumber(763);    // compilenode string
        var string3566 = new GraceString(");");
        var string3569 = new GraceString(" = getfromclosure(closure, ");
        var string3572 = new GraceString("  Object *var_");
        var opresult3574 = callmethodChecked(string3572, "++(1)", [1], var_cv);
        var opresult3576 = callmethodChecked(opresult3574, "++(1)", [1], string3569);
        var opresult3578 = callmethodChecked(opresult3576, "++(1)", [1], var_j);
        var opresult3580 = callmethodChecked(opresult3578, "++(1)", [1], string3566);
        // call case 4: self request
        onSelf = true;
        var call3581 = callmethodChecked(this, "out(1)", [1], opresult3580);
        if3547 = call3581;
      }
      setLineNumber(765);    // compilenode identifier
      var opresult3584 = callmethodChecked(var_j, "+(1)", [1], new GraceNum(1));
      var_j = opresult3584;
      return GraceDone;
    };
    // call case 5: prelude request
    var call3585 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_closurevars, block3546);
    setLineNumber(767);    // compilenode block
    var block3587 = new GraceBlock(this, 767, 1);
    setLineNumber(1);    // compilenode identifier
    block3587.real = function(var_l) {
      setLineNumber(768);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call3589 = callmethodChecked(this, "out(1)", [1], var_l);
      return call3589;
    };
    // call case 5: prelude request
    var call3590 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_body, block3587);
    setLineNumber(770);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call3592 = callmethodChecked(this, "outswitchdown", []);
    setLineNumber(771);    // compilenode identifier
    var_output = var_oldout;
    setLineNumber(772);    // compilenode identifier
    var_bblock = var_oldbblock;
    setLineNumber(773);    // compilenode identifier
    var_usedvars = var_oldusedvars;
    setLineNumber(774);    // compilenode identifier
    var_declaredvars = var_olddeclaredvars;
    setLineNumber(775);    // compilenode block
    var block3594 = new GraceBlock(this, 775, 1);
    setLineNumber(1);    // compilenode identifier
    block3594.real = function(var_cv) {
      var if3595 = GraceDone;
      setLineNumber(776);    // compilenode string
      var string3596 = new GraceString("self");
      var opresult3599 = callmethodChecked(var_cv, "\u2260(1)", [1], string3596);
      if (Grace_isTrue(opresult3599)) {
        var if3600 = GraceDone;
        setLineNumber(777);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call3603 = callmethodChecked(var_usedvars, "contains(1)", [1], var_cv);
        var call3604 = callmethodChecked(call3603, "not", []);
        if (Grace_isTrue(call3604)) {
          setLineNumber(778);    // compilenode identifier
          // call case 6: other requests
          var call3606 = callmethodChecked(var_usedvars, "push(1)", [1], var_cv);
          if3600 = call3606;
        }
        if3595 = if3600;
      }
      return if3595;
    };
    // call case 5: prelude request
    var call3607 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_closurevars, block3594);
    var if3608 = GraceDone;
    setLineNumber(782);    // compilenode identifier
    var opresult3611 = callmethodChecked(var_selfobj, "==(1)", [1], GraceFalse);
    if (Grace_isTrue(opresult3611)) {
    } else {
      var if3612 = GraceDone;
      setLineNumber(783);    // compilenode member
      // call case 6: other requests
      var call3615 = callmethodChecked(var_closurevars, "size", []);
      var opresult3617 = callmethodChecked(call3615, "==(1)", [1], new GraceNum(0));
      if (Grace_isTrue(opresult3617)) {
        setLineNumber(784);    // compilenode string
        var string3618 = new GraceString("");
        var string3621 = new GraceString("uo");
        var opresult3623 = callmethodChecked(string3621, "++(1)", [1], var_myc);
        var opresult3625 = callmethodChecked(opresult3623, "++(1)", [1], string3618);
        var var_uo2 = opresult3625;
        setLineNumber(785);    // compilenode string
        var string3627 = new GraceString(";");
        var string3630 = new GraceString(" = (struct UserObject*)");
        var string3633 = new GraceString("  struct UserObject *");
        var opresult3635 = callmethodChecked(string3633, "++(1)", [1], var_uo2);
        var opresult3637 = callmethodChecked(opresult3635, "++(1)", [1], string3630);
        var opresult3639 = callmethodChecked(opresult3637, "++(1)", [1], var_selfobj);
        var opresult3641 = callmethodChecked(opresult3639, "++(1)", [1], string3627);
        // call case 4: self request
        onSelf = true;
        var call3642 = callmethodChecked(this, "out(1)", [1], opresult3641);
        setLineNumber(786);    // compilenode string
        var string3644 = new GraceString("] = emptyclosure;");
        var string3647 = new GraceString("->data[");
        var string3650 = new GraceString("  ");
        var opresult3652 = callmethodChecked(string3650, "++(1)", [1], var_uo2);
        var opresult3654 = callmethodChecked(opresult3652, "++(1)", [1], string3647);
        var opresult3656 = callmethodChecked(opresult3654, "++(1)", [1], var_pos);
        var opresult3658 = callmethodChecked(opresult3656, "++(1)", [1], string3644);
        // call case 4: self request
        onSelf = true;
        var call3659 = callmethodChecked(this, "out(1)", [1], opresult3658);
        setLineNumber(787);    // compilenode string
        var string3661 = new GraceString(");");
        var string3664 = new GraceString(", ");
        var string3667 = new GraceString("\", &");
        var string3670 = new GraceString(", \"");
        var string3673 = new GraceString(" = addmethod2pos(");
        var string3676 = new GraceString("  Method *meth_");
        var opresult3678 = callmethodChecked(string3676, "++(1)", [1], var_litname);
        var opresult3680 = callmethodChecked(opresult3678, "++(1)", [1], string3673);
        var opresult3682 = callmethodChecked(opresult3680, "++(1)", [1], var_selfobj);
        var opresult3684 = callmethodChecked(opresult3682, "++(1)", [1], string3670);
        var opresult3686 = callmethodChecked(opresult3684, "++(1)", [1], var_escapedName);
        var opresult3688 = callmethodChecked(opresult3686, "++(1)", [1], string3667);
        var opresult3690 = callmethodChecked(opresult3688, "++(1)", [1], var_litname);
        var opresult3692 = callmethodChecked(opresult3690, "++(1)", [1], string3664);
        var opresult3694 = callmethodChecked(opresult3692, "++(1)", [1], var_pos);
        var opresult3696 = callmethodChecked(opresult3694, "++(1)", [1], string3661);
        // call case 4: self request
        onSelf = true;
        var call3697 = callmethodChecked(this, "out(1)", [1], opresult3696);
        setLineNumber(788);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call3699 = callmethodChecked(this, "compilemethodtypes(2)", [2], var_litname, var_o);
        if3612 = call3699;
      } else {
        setLineNumber(790);    // compilenode string
        var string3701 = new GraceString(");");
        var string3704 = new GraceString("  block_savedest(");
        var opresult3706 = callmethodChecked(string3704, "++(1)", [1], var_selfobj);
        var opresult3708 = callmethodChecked(opresult3706, "++(1)", [1], string3701);
        // call case 4: self request
        onSelf = true;
        var call3709 = callmethodChecked(this, "out(1)", [1], opresult3708);
        setLineNumber(792);    // compilenode string
        var string3711 = new GraceString("\");");
        var string3714 = new GraceString(", \"");
        var opresult3716 = callmethodChecked(string3714, "++(1)", [1], var_escapedName);
        var opresult3718 = callmethodChecked(opresult3716, "++(1)", [1], string3711);
        // call case 6: other requests
        var call3721 = callmethodChecked(var_closurevars, "size", []);
        setLineNumber(791);    // compilenode string
        var string3723 = new GraceString(" = createclosure(");
        var string3726 = new GraceString("  Object closure");
        var opresult3728 = callmethodChecked(string3726, "++(1)", [1], var_myc);
        var opresult3730 = callmethodChecked(opresult3728, "++(1)", [1], string3723);
        var opresult3732 = callmethodChecked(opresult3730, "++(1)", [1], call3721);
        var opresult3734 = callmethodChecked(opresult3732, "++(1)", [1], opresult3718);
        // call case 4: self request
        onSelf = true;
        var call3735 = callmethodChecked(this, "out(1)", [1], opresult3734);
        setLineNumber(793);    // compilenode string
        var string3737 = new GraceString(", stackframe);");
        var string3740 = new GraceString("  setclosureframe(closure");
        var opresult3742 = callmethodChecked(string3740, "++(1)", [1], var_myc);
        var opresult3744 = callmethodChecked(opresult3742, "++(1)", [1], string3737);
        // call case 4: self request
        onSelf = true;
        var call3745 = callmethodChecked(this, "out(1)", [1], opresult3744);
        setLineNumber(794);    // compilenode block
        var block3747 = new GraceBlock(this, 794, 1);
        setLineNumber(1);    // compilenode identifier
        block3747.real = function(var_v) {
          var if3748 = GraceDone;
          setLineNumber(795);    // compilenode string
          var string3749 = new GraceString("self");
          var opresult3752 = callmethodChecked(var_v, "==(1)", [1], string3749);
          if (Grace_isTrue(opresult3752)) {
            setLineNumber(796);    // compilenode string
            var string3754 = new GraceString(", selfslot);");
            var string3757 = new GraceString("  addtoclosure(closure");
            var opresult3759 = callmethodChecked(string3757, "++(1)", [1], var_myc);
            var opresult3761 = callmethodChecked(opresult3759, "++(1)", [1], string3754);
            // call case 4: self request
            onSelf = true;
            var call3762 = callmethodChecked(this, "out(1)", [1], opresult3761);
            setLineNumber(797);    // compilenode identifier
            var opresult3765 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
            var_auto__95__count = opresult3765;
            if3748 = GraceDone;
          } else {
            setLineNumber(799);    // compilenode string
            var string3767 = new GraceString(");");
            var string3770 = new GraceString(", var_");
            var string3773 = new GraceString("  addtoclosure(closure");
            var opresult3775 = callmethodChecked(string3773, "++(1)", [1], var_myc);
            var opresult3777 = callmethodChecked(opresult3775, "++(1)", [1], string3770);
            var opresult3779 = callmethodChecked(opresult3777, "++(1)", [1], var_v);
            var opresult3781 = callmethodChecked(opresult3779, "++(1)", [1], string3767);
            // call case 4: self request
            onSelf = true;
            var call3782 = callmethodChecked(this, "out(1)", [1], opresult3781);
            if3748 = call3782;
          }
          return if3748;
        };
        // call case 5: prelude request
        var call3783 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_closurevars, block3747);
        setLineNumber(802);    // compilenode string
        var string3784 = new GraceString("");
        var string3787 = new GraceString("uo");
        var opresult3789 = callmethodChecked(string3787, "++(1)", [1], var_myc);
        var opresult3791 = callmethodChecked(opresult3789, "++(1)", [1], string3784);
        var var_uo = opresult3791;
        setLineNumber(803);    // compilenode string
        var string3793 = new GraceString(";");
        var string3796 = new GraceString(" = (struct UserObject*)");
        var string3799 = new GraceString("  struct UserObject *");
        var opresult3801 = callmethodChecked(string3799, "++(1)", [1], var_uo);
        var opresult3803 = callmethodChecked(opresult3801, "++(1)", [1], string3796);
        var opresult3805 = callmethodChecked(opresult3803, "++(1)", [1], var_selfobj);
        var opresult3807 = callmethodChecked(opresult3805, "++(1)", [1], string3793);
        // call case 4: self request
        onSelf = true;
        var call3808 = callmethodChecked(this, "out(1)", [1], opresult3807);
        setLineNumber(804);    // compilenode string
        var string3810 = new GraceString(";");
        var string3813 = new GraceString("] = (Object)closure");
        var string3816 = new GraceString("->data[");
        var string3819 = new GraceString("  ");
        var opresult3821 = callmethodChecked(string3819, "++(1)", [1], var_uo);
        var opresult3823 = callmethodChecked(opresult3821, "++(1)", [1], string3816);
        var opresult3825 = callmethodChecked(opresult3823, "++(1)", [1], var_pos);
        var opresult3827 = callmethodChecked(opresult3825, "++(1)", [1], string3813);
        var opresult3829 = callmethodChecked(opresult3827, "++(1)", [1], var_myc);
        var opresult3831 = callmethodChecked(opresult3829, "++(1)", [1], string3810);
        // call case 4: self request
        onSelf = true;
        var call3832 = callmethodChecked(this, "out(1)", [1], opresult3831);
        setLineNumber(805);    // compilenode string
        var string3834 = new GraceString(");");
        var string3837 = new GraceString(", ");
        var string3840 = new GraceString("\", &");
        var string3843 = new GraceString(", \"");
        var string3846 = new GraceString(" = addmethod2pos(");
        var string3849 = new GraceString("  Method *meth_");
        var opresult3851 = callmethodChecked(string3849, "++(1)", [1], var_litname);
        var opresult3853 = callmethodChecked(opresult3851, "++(1)", [1], string3846);
        var opresult3855 = callmethodChecked(opresult3853, "++(1)", [1], var_selfobj);
        var opresult3857 = callmethodChecked(opresult3855, "++(1)", [1], string3843);
        var opresult3859 = callmethodChecked(opresult3857, "++(1)", [1], var_escapedName);
        var opresult3861 = callmethodChecked(opresult3859, "++(1)", [1], string3840);
        var opresult3863 = callmethodChecked(opresult3861, "++(1)", [1], var_litname);
        var opresult3865 = callmethodChecked(opresult3863, "++(1)", [1], string3837);
        var opresult3867 = callmethodChecked(opresult3865, "++(1)", [1], var_pos);
        var opresult3869 = callmethodChecked(opresult3867, "++(1)", [1], string3834);
        // call case 4: self request
        onSelf = true;
        var call3870 = callmethodChecked(this, "out(1)", [1], opresult3869);
        setLineNumber(806);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call3872 = callmethodChecked(this, "compilemethodtypes(2)", [2], var_litname, var_o);
        if3612 = call3872;
      }
      if3608 = if3612;
    }
    setLineNumber(808);    // compilenode member
    // call case 6: other requests
    var call3875 = callmethodChecked(var_o, "annotations", []);
    var block3876 = new GraceBlock(this, 808, 1);
    setLineNumber(1);    // compilenode identifier
    block3876.real = function(var_ann) {
      var if3877 = GraceDone;
      setLineNumber(809);    // compilenode block
      var block3878 = new GraceBlock(this, 809, 0);
      block3878.real = function() {
        var string3879 = new GraceString("confidential");
        // call case 6: other requests
        var call3882 = callmethodChecked(var_ann, "value", []);
        var opresult3884 = callmethodChecked(call3882, "==(1)", [1], string3879);
        return opresult3884;
      };
      var string3886 = new GraceString("identifier");
      // call case 6: other requests
      var call3889 = callmethodChecked(var_ann, "kind", []);
      var opresult3891 = callmethodChecked(call3889, "==(1)", [1], string3886);
      var opresult3893 = callmethodChecked(opresult3891, "&&(1)", [1], block3878);
      if (Grace_isTrue(opresult3893)) {
        setLineNumber(810);    // compilenode string
        var string3895 = new GraceString("->flags |= MFLAG_CONFIDENTIAL;");
        var string3898 = new GraceString("  meth_");
        var opresult3900 = callmethodChecked(string3898, "++(1)", [1], var_litname);
        var opresult3902 = callmethodChecked(opresult3900, "++(1)", [1], string3895);
        // call case 4: self request
        onSelf = true;
        var call3903 = callmethodChecked(this, "out(1)", [1], opresult3902);
        if3877 = call3903;
      }
      return if3877;
    };
    // call case 5: prelude request
    var call3904 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call3875, block3876);
    setLineNumber(813);    // compilenode string
    var string3906 = new GraceString("->definitionModule = modulename;");
    var string3909 = new GraceString("  meth_");
    var opresult3911 = callmethodChecked(string3909, "++(1)", [1], var_litname);
    var opresult3913 = callmethodChecked(opresult3911, "++(1)", [1], string3906);
    // call case 4: self request
    onSelf = true;
    var call3914 = callmethodChecked(this, "out(1)", [1], opresult3913);
    setLineNumber(814);    // compilenode string
    var string3916 = new GraceString(";");
    // call case 6: other requests
    var call3919 = callmethodChecked(var_o, "line", []);
    var string3921 = new GraceString("->definitionLine = ");
    var string3924 = new GraceString("  meth_");
    var opresult3926 = callmethodChecked(string3924, "++(1)", [1], var_litname);
    var opresult3928 = callmethodChecked(opresult3926, "++(1)", [1], string3921);
    var opresult3930 = callmethodChecked(opresult3928, "++(1)", [1], call3919);
    var opresult3932 = callmethodChecked(opresult3930, "++(1)", [1], string3916);
    // call case 4: self request
    onSelf = true;
    var call3933 = callmethodChecked(this, "out(1)", [1], opresult3932);
    var if3934 = GraceDone;
    setLineNumber(815);    // compilenode member
    // call case 6: other requests
    var call3936 = callmethodChecked(var_o, "isFresh", []);
    if (Grace_isTrue(call3936)) {
      setLineNumber(817);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call3938 = callmethodChecked(this, "compilefreshmethod(8)", [8], var_o, var_nm, var_body, var_closurevars, var_selfobj, var_pos, var_numslots, var_oldout);
      if3934 = call3938;
    }
    setLineNumber(819);    // compilenode identifier
    var_inBlock = var_origInBlock;
    setLineNumber(820);    // compilenode identifier
    var_paramsUsed = var_origParamsUsed;
    setLineNumber(821);    // compilenode identifier
    var_partsUsed = var_origPartsUsed;
    return GraceDone;
  };
  func2747.paramCounts = [3];
  this.methods["compilemethod(3)"] = func2747;
  func2747.definitionLine = 539;
  func2747.definitionModule = "genc";
  setLineNumber(827);    // compilenode method
  var func3939 = function(argcv) {    // method compilefreshmethod(_,_,_,_,_,_,_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_nm = arguments[curarg];
    curarg++;
    var var_body = arguments[curarg];
    curarg++;
    var var_closurevars = arguments[curarg];
    curarg++;
    var var_selfobj = arguments[curarg];
    curarg++;
    var var_pos = arguments[curarg];
    curarg++;
    var var_numslots = arguments[curarg];
    curarg++;
    var var_oldout = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(829);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(830);    // compilenode identifier
    var opresult3942 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult3942;
    setLineNumber(831);    // compilenode string
    var string3944 = new GraceString("_object");
    // call case 4: self request
    onSelf = true;
    var call3947 = callmethodChecked(this, "escapestring2(1)", [1], var_nm);
    var string3949 = new GraceString("_");
    var string3952 = new GraceString("meth_");
    var opresult3954 = callmethodChecked(string3952, "++(1)", [1], var_modname);
    var opresult3956 = callmethodChecked(opresult3954, "++(1)", [1], string3949);
    var opresult3958 = callmethodChecked(opresult3956, "++(1)", [1], call3947);
    var opresult3960 = callmethodChecked(opresult3958, "++(1)", [1], string3944);
    // call case 4: self request
    onSelf = true;
    var call3961 = callmethodChecked(this, "escapeident(1)", [1], opresult3960);
    var var_litname = call3961;
    setLineNumber(832);    // compilenode string
    var string3962 = new GraceString("$object(1)");
    // call case 6: other requests
    var call3965 = callmethodChecked(var_o, "nameString", []);
    var opresult3967 = callmethodChecked(call3965, "++(1)", [1], string3962);
    var var_name = opresult3967;
    setLineNumber(833);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call3969 = callmethodChecked(this, "escapestring2(1)", [1], var_name);
    var var_escapedName = call3969;
    setLineNumber(834);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call3971 = callmethodChecked(this, "outswitchup", []);
    var if3972 = GraceDone;
    setLineNumber(835);    // compilenode member
    // call case 6: other requests
    var call3975 = callmethodChecked(var_closurevars, "size", []);
    var opresult3977 = callmethodChecked(call3975, ">(1)", [1], new GraceNum(0));
    if (Grace_isTrue(opresult3977)) {
      var if3978 = GraceDone;
      setLineNumber(836);    // compilenode member
      // call case 6: other requests
      var call3980 = callmethodChecked(var_o, "selfclosure", []);
      if (Grace_isTrue(call3980)) {
        setLineNumber(838);    // compilenode string
        var string3982 = new GraceString("Object *args, int32_t flags) {");
        setLineNumber(837);    // compilenode string
        var string3984 = new GraceString("(Object realself, int nparts, int *argcv, ");
        var string3987 = new GraceString("Object ");
        var opresult3989 = callmethodChecked(string3987, "++(1)", [1], var_litname);
        var opresult3991 = callmethodChecked(opresult3989, "++(1)", [1], string3984);
        var opresult3993 = callmethodChecked(opresult3991, "++(1)", [1], string3982);
        // call case 4: self request
        onSelf = true;
        var call3994 = callmethodChecked(this, "out(1)", [1], opresult3993);
        setLineNumber(839);    // compilenode string
        var string3996 = new GraceString("  struct UserObject *uo = (struct UserObject*)realself;");
        // call case 4: self request
        onSelf = true;
        var call3997 = callmethodChecked(this, "out(1)", [1], string3996);
        if3978 = call3997;
      } else {
        setLineNumber(842);    // compilenode string
        var string3999 = new GraceString("int32_t flags) {");
        setLineNumber(841);    // compilenode string
        var string4001 = new GraceString("(Object self, int nparts, int *argcv, Object *args, ");
        var string4004 = new GraceString("Object ");
        var opresult4006 = callmethodChecked(string4004, "++(1)", [1], var_litname);
        var opresult4008 = callmethodChecked(opresult4006, "++(1)", [1], string4001);
        var opresult4010 = callmethodChecked(opresult4008, "++(1)", [1], string3999);
        // call case 4: self request
        onSelf = true;
        var call4011 = callmethodChecked(this, "out(1)", [1], opresult4010);
        setLineNumber(843);    // compilenode string
        var string4013 = new GraceString("  struct UserObject *uo = (struct UserObject*)self;");
        // call case 4: self request
        onSelf = true;
        var call4014 = callmethodChecked(this, "out(1)", [1], string4013);
        if3978 = call4014;
      }
      setLineNumber(845);    // compilenode string
      var string4016 = new GraceString(", (flags>>24)&0xff);");
      var string4019 = new GraceString("  Object closure = getdatum((Object)uo, ");
      var opresult4021 = callmethodChecked(string4019, "++(1)", [1], var_pos);
      var opresult4023 = callmethodChecked(opresult4021, "++(1)", [1], string4016);
      // call case 4: self request
      onSelf = true;
      var call4024 = callmethodChecked(this, "out(1)", [1], opresult4023);
      setLineNumber(846);    // compilenode string
      var string4026 = new GraceString(", getclosureframe(closure));");
      var string4029 = new GraceString("  struct StackFrameObject *stackframe = alloc_StackFrame(");
      var opresult4031 = callmethodChecked(string4029, "++(1)", [1], var_numslots);
      var opresult4033 = callmethodChecked(opresult4031, "++(1)", [1], string4026);
      // call case 4: self request
      onSelf = true;
      var call4034 = callmethodChecked(this, "out(1)", [1], opresult4033);
      setLineNumber(847);    // compilenode string
      var string4036 = new GraceString("  pushclosure(closure);");
      // call case 4: self request
      onSelf = true;
      var call4037 = callmethodChecked(this, "out(1)", [1], string4036);
      if3972 = call4037;
    } else {
      setLineNumber(850);    // compilenode string
      var string4039 = new GraceString("int32_t flags) {");
      setLineNumber(849);    // compilenode string
      var string4041 = new GraceString("(Object self, int nparts, int *argcv, Object *args, ");
      var string4044 = new GraceString("Object ");
      var opresult4046 = callmethodChecked(string4044, "++(1)", [1], var_litname);
      var opresult4048 = callmethodChecked(opresult4046, "++(1)", [1], string4041);
      var opresult4050 = callmethodChecked(opresult4048, "++(1)", [1], string4039);
      // call case 4: self request
      onSelf = true;
      var call4051 = callmethodChecked(this, "out(1)", [1], opresult4050);
      setLineNumber(851);    // compilenode string
      var string4053 = new GraceString(", NULL);");
      var string4056 = new GraceString("  struct StackFrameObject *stackframe = alloc_StackFrame(");
      var opresult4058 = callmethodChecked(string4056, "++(1)", [1], var_numslots);
      var opresult4060 = callmethodChecked(opresult4058, "++(1)", [1], string4053);
      // call case 4: self request
      onSelf = true;
      var call4061 = callmethodChecked(this, "out(1)", [1], opresult4060);
      setLineNumber(852);    // compilenode string
      var string4063 = new GraceString("  pushclosure(NULL);");
      // call case 4: self request
      onSelf = true;
      var call4064 = callmethodChecked(this, "out(1)", [1], string4063);
      if3972 = call4064;
    }
    setLineNumber(854);    // compilenode string
    var string4066 = new GraceString("\");");
    var string4069 = new GraceString("  pushstackframe(stackframe, \"");
    var opresult4071 = callmethodChecked(string4069, "++(1)", [1], var_escapedName);
    var opresult4073 = callmethodChecked(opresult4071, "++(1)", [1], string4066);
    // call case 4: self request
    onSelf = true;
    var call4074 = callmethodChecked(this, "out(1)", [1], opresult4073);
    setLineNumber(855);    // compilenode string
    var string4076 = new GraceString("  int frame = gc_frame_new();");
    // call case 4: self request
    onSelf = true;
    var call4077 = callmethodChecked(this, "out(1)", [1], string4076);
    setLineNumber(856);    // compilenode string
    var string4079 = new GraceString("  gc_frame_newslot((Object)stackframe);");
    // call case 4: self request
    onSelf = true;
    var call4080 = callmethodChecked(this, "out(1)", [1], string4079);
    setLineNumber(857);    // compilenode string
    var string4081 = new GraceString("0");
    var var_sumAccum = string4081;
    setLineNumber(858);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call4085 = callmethodChecked(var_o, "signature", []);
    var call4086 = callmethodChecked(call4085, "indices", []);
    var block4087 = new GraceBlock(this, 858, 1);
    setLineNumber(1);    // compilenode identifier
    block4087.real = function(var_partnr) {
      setLineNumber(859);    // compilenode string
      var string4088 = new GraceString("]");
      var diff4092 = callmethodChecked(var_partnr, "-(1)", [1], new GraceNum(1));
      var string4094 = new GraceString(" + argcv[");
      var opresult4096 = callmethodChecked(string4094, "++(1)", [1], diff4092);
      var opresult4098 = callmethodChecked(opresult4096, "++(1)", [1], string4088);
      var opresult4101 = callmethodChecked(var_sumAccum, "++(1)", [1], opresult4098);
      var_sumAccum = opresult4101;
      return GraceDone;
    };
    // call case 5: prelude request
    var call4102 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call4086, block4087);
    setLineNumber(861);    // compilenode string
    var string4104 = new GraceString("];");
    var string4107 = new GraceString("  Object methodInheritingObject = args[");
    var opresult4109 = callmethodChecked(string4107, "++(1)", [1], var_sumAccum);
    var opresult4111 = callmethodChecked(opresult4109, "++(1)", [1], string4104);
    // call case 4: self request
    onSelf = true;
    var call4112 = callmethodChecked(this, "out(1)", [1], opresult4111);
    setLineNumber(862);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call4116 = callmethodChecked(var_o, "signature", []);
    var call4117 = callmethodChecked(call4116, "indices", []);
    var block4118 = new GraceBlock(this, 862, 1);
    setLineNumber(1);    // compilenode identifier
    block4118.real = function(var_partnr) {
      setLineNumber(863);    // compilenode identifier
      // call case 6: other requests
      // call case 6: other requests
      var call4121 = callmethodChecked(var_o, "signature", []);
      var call4122 = callmethodChecked(call4121, "at(1)", [1], var_partnr);
      var var_part = call4122;
      var if4123 = GraceDone;
      setLineNumber(864);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call4127 = callmethodChecked(var_part, "params", []);
      var call4128 = callmethodChecked(call4127, "size", []);
      var opresult4130 = callmethodChecked(call4128, ">(1)", [1], new GraceNum(0));
      if (Grace_isTrue(opresult4130)) {
        setLineNumber(865);    // compilenode string
        var string4132 = new GraceString(")");
        // call case 6: other requests
        // call case 6: other requests
        var call4136 = callmethodChecked(var_part, "params", []);
        var call4137 = callmethodChecked(call4136, "size", []);
        var string4139 = new GraceString("] < ");
        var diff4143 = callmethodChecked(var_partnr, "-(1)", [1], new GraceNum(1));
        var string4145 = new GraceString("  if (nparts > 0 && argcv[");
        var opresult4147 = callmethodChecked(string4145, "++(1)", [1], diff4143);
        var opresult4149 = callmethodChecked(opresult4147, "++(1)", [1], string4139);
        var opresult4151 = callmethodChecked(opresult4149, "++(1)", [1], call4137);
        var opresult4153 = callmethodChecked(opresult4151, "++(1)", [1], string4132);
        // call case 4: self request
        onSelf = true;
        var call4154 = callmethodChecked(this, "out(1)", [1], opresult4153);
        setLineNumber(866);    // compilenode string
        var string4156 = new GraceString("\");");
        // call case 6: other requests
        var call4159 = callmethodChecked(var_o, "canonicalName", []);
        var string4161 = new GraceString("    graceRaise(RequestError(), \"insufficient arguments for method ");
        var opresult4163 = callmethodChecked(string4161, "++(1)", [1], call4159);
        var opresult4165 = callmethodChecked(opresult4163, "++(1)", [1], string4156);
        // call case 4: self request
        onSelf = true;
        var call4166 = callmethodChecked(this, "out(1)", [1], opresult4165);
        if4123 = call4166;
      }
      return if4123;
    };
    // call case 5: prelude request
    var call4167 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call4117, block4118);
    setLineNumber(869);    // compilenode string
    var string4169 = new GraceString("];");
    var string4172 = new GraceString("  Object params[");
    var opresult4174 = callmethodChecked(string4172, "++(1)", [1], var_paramsUsed);
    var opresult4176 = callmethodChecked(opresult4174, "++(1)", [1], string4169);
    // call case 4: self request
    onSelf = true;
    var call4177 = callmethodChecked(this, "out(1)", [1], opresult4176);
    setLineNumber(870);    // compilenode string
    var string4179 = new GraceString("];");
    var string4182 = new GraceString("  int partcv[");
    var opresult4184 = callmethodChecked(string4182, "++(1)", [1], var_partsUsed);
    var opresult4186 = callmethodChecked(opresult4184, "++(1)", [1], string4179);
    // call case 4: self request
    onSelf = true;
    var call4187 = callmethodChecked(this, "out(1)", [1], opresult4186);
    setLineNumber(871);    // compilenode num
    var var_j = new GraceNum(0);
    setLineNumber(872);    // compilenode block
    var block4189 = new GraceBlock(this, 872, 1);
    setLineNumber(1);    // compilenode identifier
    block4189.real = function(var_cv) {
      var if4190 = GraceDone;
      setLineNumber(873);    // compilenode string
      var string4191 = new GraceString("self");
      var opresult4194 = callmethodChecked(var_cv, "==(1)", [1], string4191);
      if (Grace_isTrue(opresult4194)) {
        setLineNumber(874);    // compilenode string
        var string4196 = new GraceString("));");
        var string4199 = new GraceString("  Object self = *(getfromclosure(closure, ");
        var opresult4201 = callmethodChecked(string4199, "++(1)", [1], var_j);
        var opresult4203 = callmethodChecked(opresult4201, "++(1)", [1], string4196);
        // call case 4: self request
        onSelf = true;
        var call4204 = callmethodChecked(this, "out(1)", [1], opresult4203);
        setLineNumber(875);    // compilenode string
        var string4206 = new GraceString("  sourceObject = self;");
        // call case 4: self request
        onSelf = true;
        var call4207 = callmethodChecked(this, "out(1)", [1], string4206);
        if4190 = call4207;
      } else {
        setLineNumber(877);    // compilenode string
        var string4209 = new GraceString(");");
        var string4212 = new GraceString(" = getfromclosure(closure, ");
        var string4215 = new GraceString("  Object *var_");
        var opresult4217 = callmethodChecked(string4215, "++(1)", [1], var_cv);
        var opresult4219 = callmethodChecked(opresult4217, "++(1)", [1], string4212);
        var opresult4221 = callmethodChecked(opresult4219, "++(1)", [1], var_j);
        var opresult4223 = callmethodChecked(opresult4221, "++(1)", [1], string4209);
        // call case 4: self request
        onSelf = true;
        var call4224 = callmethodChecked(this, "out(1)", [1], opresult4223);
        if4190 = call4224;
      }
      setLineNumber(879);    // compilenode identifier
      var opresult4227 = callmethodChecked(var_j, "+(1)", [1], new GraceNum(1));
      var_j = opresult4227;
      return GraceDone;
    };
    // call case 5: prelude request
    var call4228 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_closurevars, block4189);
    setLineNumber(881);    // compilenode block
    var block4230 = new GraceBlock(this, 881, 1);
    setLineNumber(1);    // compilenode identifier
    block4230.real = function(var_l) {
      setLineNumber(882);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call4232 = callmethodChecked(this, "out(1)", [1], var_l);
      return call4232;
    };
    // call case 5: prelude request
    var call4233 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_body, block4230);
    setLineNumber(884);    // compilenode identifier
    var_output = var_oldout;
    var if4234 = GraceDone;
    setLineNumber(885);    // compilenode identifier
    var opresult4237 = callmethodChecked(var_selfobj, "==(1)", [1], GraceFalse);
    if (Grace_isTrue(opresult4237)) {
    } else {
      var if4238 = GraceDone;
      setLineNumber(886);    // compilenode member
      // call case 6: other requests
      var call4241 = callmethodChecked(var_closurevars, "size", []);
      var opresult4243 = callmethodChecked(call4241, "==(1)", [1], new GraceNum(0));
      if (Grace_isTrue(opresult4243)) {
        setLineNumber(887);    // compilenode string
        var string4245 = new GraceString(");");
        var string4248 = new GraceString(", ");
        var string4251 = new GraceString("\", &");
        var string4254 = new GraceString(", \"");
        var string4257 = new GraceString(" = addmethod2pos(");
        var string4260 = new GraceString("  Method *meth_");
        var opresult4262 = callmethodChecked(string4260, "++(1)", [1], var_litname);
        var opresult4264 = callmethodChecked(opresult4262, "++(1)", [1], string4257);
        var opresult4266 = callmethodChecked(opresult4264, "++(1)", [1], var_selfobj);
        var opresult4268 = callmethodChecked(opresult4266, "++(1)", [1], string4254);
        var opresult4270 = callmethodChecked(opresult4268, "++(1)", [1], var_escapedName);
        var opresult4272 = callmethodChecked(opresult4270, "++(1)", [1], string4251);
        var opresult4274 = callmethodChecked(opresult4272, "++(1)", [1], var_litname);
        var opresult4276 = callmethodChecked(opresult4274, "++(1)", [1], string4248);
        var opresult4278 = callmethodChecked(opresult4276, "++(1)", [1], var_pos);
        var opresult4280 = callmethodChecked(opresult4278, "++(1)", [1], string4245);
        // call case 4: self request
        onSelf = true;
        var call4281 = callmethodChecked(this, "out(1)", [1], opresult4280);
        setLineNumber(888);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call4283 = callmethodChecked(this, "compilemethodtypes(2)", [2], var_litname, var_o);
        if4238 = call4283;
      } else {
        setLineNumber(890);    // compilenode string
        var string4285 = new GraceString(");");
        var string4288 = new GraceString("  block_savedest(");
        var opresult4290 = callmethodChecked(string4288, "++(1)", [1], var_selfobj);
        var opresult4292 = callmethodChecked(opresult4290, "++(1)", [1], string4285);
        // call case 4: self request
        onSelf = true;
        var call4293 = callmethodChecked(this, "out(1)", [1], opresult4292);
        setLineNumber(892);    // compilenode string
        var string4295 = new GraceString("\");");
        var string4298 = new GraceString(", \"");
        var opresult4300 = callmethodChecked(string4298, "++(1)", [1], var_escapedName);
        var opresult4302 = callmethodChecked(opresult4300, "++(1)", [1], string4295);
        // call case 6: other requests
        var call4305 = callmethodChecked(var_closurevars, "size", []);
        setLineNumber(891);    // compilenode string
        var string4307 = new GraceString(" = createclosure(");
        var string4310 = new GraceString("  Object closure");
        var opresult4312 = callmethodChecked(string4310, "++(1)", [1], var_myc);
        var opresult4314 = callmethodChecked(opresult4312, "++(1)", [1], string4307);
        var opresult4316 = callmethodChecked(opresult4314, "++(1)", [1], call4305);
        var opresult4318 = callmethodChecked(opresult4316, "++(1)", [1], opresult4302);
        // call case 4: self request
        onSelf = true;
        var call4319 = callmethodChecked(this, "out(1)", [1], opresult4318);
        setLineNumber(893);    // compilenode string
        var string4321 = new GraceString(", stackframe);");
        var string4324 = new GraceString("  setclosureframe(closure");
        var opresult4326 = callmethodChecked(string4324, "++(1)", [1], var_myc);
        var opresult4328 = callmethodChecked(opresult4326, "++(1)", [1], string4321);
        // call case 4: self request
        onSelf = true;
        var call4329 = callmethodChecked(this, "out(1)", [1], opresult4328);
        setLineNumber(894);    // compilenode block
        var block4331 = new GraceBlock(this, 894, 1);
        setLineNumber(1);    // compilenode identifier
        block4331.real = function(var_v) {
          var if4332 = GraceDone;
          setLineNumber(895);    // compilenode string
          var string4333 = new GraceString("self");
          var opresult4336 = callmethodChecked(var_v, "==(1)", [1], string4333);
          if (Grace_isTrue(opresult4336)) {
            setLineNumber(896);    // compilenode string
            var string4338 = new GraceString(", selfslot);");
            var string4341 = new GraceString("  addtoclosure(closure");
            var opresult4343 = callmethodChecked(string4341, "++(1)", [1], var_myc);
            var opresult4345 = callmethodChecked(opresult4343, "++(1)", [1], string4338);
            // call case 4: self request
            onSelf = true;
            var call4346 = callmethodChecked(this, "out(1)", [1], opresult4345);
            setLineNumber(897);    // compilenode identifier
            var opresult4349 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
            var_auto__95__count = opresult4349;
            if4332 = GraceDone;
          } else {
            setLineNumber(899);    // compilenode string
            var string4351 = new GraceString(");");
            var string4354 = new GraceString(", var_");
            var string4357 = new GraceString("  addtoclosure(closure");
            var opresult4359 = callmethodChecked(string4357, "++(1)", [1], var_myc);
            var opresult4361 = callmethodChecked(opresult4359, "++(1)", [1], string4354);
            var opresult4363 = callmethodChecked(opresult4361, "++(1)", [1], var_v);
            var opresult4365 = callmethodChecked(opresult4363, "++(1)", [1], string4351);
            // call case 4: self request
            onSelf = true;
            var call4366 = callmethodChecked(this, "out(1)", [1], opresult4365);
            if4332 = call4366;
          }
          return if4332;
        };
        // call case 5: prelude request
        var call4367 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_closurevars, block4331);
        setLineNumber(902);    // compilenode string
        var string4368 = new GraceString("");
        var string4371 = new GraceString("uo");
        var opresult4373 = callmethodChecked(string4371, "++(1)", [1], var_myc);
        var opresult4375 = callmethodChecked(opresult4373, "++(1)", [1], string4368);
        var var_uo = opresult4375;
        setLineNumber(903);    // compilenode string
        var string4377 = new GraceString(");");
        var string4380 = new GraceString(", ");
        var string4383 = new GraceString("\", &");
        var string4386 = new GraceString(", \"");
        var string4389 = new GraceString(" = addmethod2pos(");
        var string4392 = new GraceString("  Method *meth_");
        var opresult4394 = callmethodChecked(string4392, "++(1)", [1], var_litname);
        var opresult4396 = callmethodChecked(opresult4394, "++(1)", [1], string4389);
        var opresult4398 = callmethodChecked(opresult4396, "++(1)", [1], var_selfobj);
        var opresult4400 = callmethodChecked(opresult4398, "++(1)", [1], string4386);
        var opresult4402 = callmethodChecked(opresult4400, "++(1)", [1], var_escapedName);
        var opresult4404 = callmethodChecked(opresult4402, "++(1)", [1], string4383);
        var opresult4406 = callmethodChecked(opresult4404, "++(1)", [1], var_litname);
        var opresult4408 = callmethodChecked(opresult4406, "++(1)", [1], string4380);
        var opresult4410 = callmethodChecked(opresult4408, "++(1)", [1], var_pos);
        var opresult4412 = callmethodChecked(opresult4410, "++(1)", [1], string4377);
        // call case 4: self request
        onSelf = true;
        var call4413 = callmethodChecked(this, "out(1)", [1], opresult4412);
        if4238 = call4413;
      }
      if4234 = if4238;
    }
    setLineNumber(905);    // compilenode member
    // call case 6: other requests
    var call4416 = callmethodChecked(var_o, "annotations", []);
    var block4417 = new GraceBlock(this, 905, 1);
    setLineNumber(1);    // compilenode identifier
    block4417.real = function(var_ann) {
      var if4418 = GraceDone;
      setLineNumber(906);    // compilenode block
      var block4419 = new GraceBlock(this, 906, 0);
      block4419.real = function() {
        var string4420 = new GraceString("confidential");
        // call case 6: other requests
        var call4423 = callmethodChecked(var_ann, "value", []);
        var opresult4425 = callmethodChecked(call4423, "==(1)", [1], string4420);
        return opresult4425;
      };
      var string4427 = new GraceString("identifier");
      // call case 6: other requests
      var call4430 = callmethodChecked(var_ann, "kind", []);
      var opresult4432 = callmethodChecked(call4430, "==(1)", [1], string4427);
      var opresult4434 = callmethodChecked(opresult4432, "&&(1)", [1], block4419);
      if (Grace_isTrue(opresult4434)) {
        setLineNumber(907);    // compilenode string
        var string4436 = new GraceString("->flags |= MFLAG_CONFIDENTIAL;");
        var string4439 = new GraceString("  meth_");
        var opresult4441 = callmethodChecked(string4439, "++(1)", [1], var_litname);
        var opresult4443 = callmethodChecked(opresult4441, "++(1)", [1], string4436);
        // call case 4: self request
        onSelf = true;
        var call4444 = callmethodChecked(this, "out(1)", [1], opresult4443);
        if4418 = call4444;
      }
      return if4418;
    };
    // call case 5: prelude request
    var call4445 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call4416, block4417);
    setLineNumber(910);    // compilenode string
    var string4447 = new GraceString("->definitionModule = modulename;");
    var string4450 = new GraceString("  meth_");
    var opresult4452 = callmethodChecked(string4450, "++(1)", [1], var_litname);
    var opresult4454 = callmethodChecked(opresult4452, "++(1)", [1], string4447);
    // call case 4: self request
    onSelf = true;
    var call4455 = callmethodChecked(this, "out(1)", [1], opresult4454);
    setLineNumber(911);    // compilenode string
    var string4457 = new GraceString(";");
    // call case 6: other requests
    var call4460 = callmethodChecked(var_o, "line", []);
    var string4462 = new GraceString("->definitionLine = ");
    var string4465 = new GraceString("  meth_");
    var opresult4467 = callmethodChecked(string4465, "++(1)", [1], var_litname);
    var opresult4469 = callmethodChecked(opresult4467, "++(1)", [1], string4462);
    var opresult4471 = callmethodChecked(opresult4469, "++(1)", [1], call4460);
    var opresult4473 = callmethodChecked(opresult4471, "++(1)", [1], string4457);
    // call case 4: self request
    onSelf = true;
    var call4474 = callmethodChecked(this, "out(1)", [1], opresult4473);
    return call4474;
  };
  func3939.paramCounts = [8];
  this.methods["compilefreshmethod(8)"] = func3939;
  func3939.definitionLine = 827;
  func3939.definitionModule = "genc";
  setLineNumber(913);    // compilenode method
  var func4475 = function(argcv) {    // method compilemethodtypes(_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_litname = arguments[curarg];
    curarg++;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(914);    // compilenode string
    var string4476 = new GraceString("[] = {");
    var string4479 = new GraceString("  int argcv_");
    var opresult4481 = callmethodChecked(string4479, "++(1)", [1], var_litname);
    var opresult4483 = callmethodChecked(opresult4481, "++(1)", [1], string4476);
    var var_argcv = opresult4483;
    setLineNumber(915);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call4487 = callmethodChecked(var_o, "signature", []);
    var call4488 = callmethodChecked(call4487, "indices", []);
    var block4489 = new GraceBlock(this, 915, 1);
    setLineNumber(1);    // compilenode identifier
    block4489.real = function(var_partnr) {
      setLineNumber(916);    // compilenode identifier
      // call case 6: other requests
      // call case 6: other requests
      var call4492 = callmethodChecked(var_o, "signature", []);
      var call4493 = callmethodChecked(call4492, "at(1)", [1], var_partnr);
      var var_part = call4493;
      setLineNumber(917);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call4496 = callmethodChecked(var_part, "params", []);
      var call4497 = callmethodChecked(call4496, "size", []);
      var opresult4500 = callmethodChecked(var_argcv, "++(1)", [1], call4497);
      var_argcv = opresult4500;
      var if4501 = GraceDone;
      setLineNumber(918);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call4504 = callmethodChecked(var_o, "signature", []);
      var call4505 = callmethodChecked(call4504, "size", []);
      var opresult4508 = callmethodChecked(var_partnr, "<(1)", [1], call4505);
      if (Grace_isTrue(opresult4508)) {
        setLineNumber(919);    // compilenode string
        var string4509 = new GraceString(", ");
        var opresult4512 = callmethodChecked(var_argcv, "++(1)", [1], string4509);
        var_argcv = opresult4512;
        if4501 = GraceDone;
      }
      return if4501;
    };
    // call case 5: prelude request
    var call4513 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call4488, block4489);
    setLineNumber(922);    // compilenode string
    var string4514 = new GraceString("};");
    var opresult4517 = callmethodChecked(var_argcv, "++(1)", [1], string4514);
    var_argcv = opresult4517;
    setLineNumber(923);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call4519 = callmethodChecked(this, "out(1)", [1], var_argcv);
    setLineNumber(924);    // compilenode string
    var string4521 = new GraceString(");");
    var string4524 = new GraceString(", argcv_");
    // call case 6: other requests
    // call case 6: other requests
    var call4528 = callmethodChecked(var_o, "signature", []);
    var call4529 = callmethodChecked(call4528, "size", []);
    var string4531 = new GraceString("->type = alloc_MethodType(");
    var string4534 = new GraceString("  meth_");
    var opresult4536 = callmethodChecked(string4534, "++(1)", [1], var_litname);
    var opresult4538 = callmethodChecked(opresult4536, "++(1)", [1], string4531);
    var opresult4540 = callmethodChecked(opresult4538, "++(1)", [1], call4529);
    var opresult4542 = callmethodChecked(opresult4540, "++(1)", [1], string4524);
    var opresult4544 = callmethodChecked(opresult4542, "++(1)", [1], var_litname);
    var opresult4546 = callmethodChecked(opresult4544, "++(1)", [1], string4521);
    // call case 4: self request
    onSelf = true;
    var call4547 = callmethodChecked(this, "out(1)", [1], opresult4546);
    setLineNumber(925);    // compilenode num
    var var_pi = new GraceNum(0);
    setLineNumber(926);    // compilenode member
    // call case 6: other requests
    var call4550 = callmethodChecked(var_o, "signature", []);
    var block4551 = new GraceBlock(this, 926, 1);
    setLineNumber(1);    // compilenode identifier
    block4551.real = function(var_part) {
      setLineNumber(927);    // compilenode member
      // call case 6: other requests
      var call4554 = callmethodChecked(var_part, "params", []);
      var block4555 = new GraceBlock(this, 927, 1);
      setLineNumber(1);    // compilenode identifier
      block4555.real = function(var_p) {
        var if4556 = GraceDone;
        setLineNumber(930);    // compilenode member
        // call case 6: other requests
        var call4558 = callmethodChecked(var_p, "dtype", []);
        var opresult4561 = callmethodChecked(GraceFalse, "\u2260(1)", [1], call4558);
        if (Grace_isTrue(opresult4561)) {
          var if4562 = GraceDone;
          setLineNumber(932);    // compilenode string
          var string4563 = new GraceString("typeliteral");
          // call case 6: other requests
          // call case 6: other requests
          var call4567 = callmethodChecked(var_p, "dtype", []);
          var call4568 = callmethodChecked(call4567, "kind", []);
          var opresult4570 = callmethodChecked(call4568, "==(1)", [1], string4563);
          setLineNumber(931);    // compilenode string
          var string4572 = new GraceString("identifier");
          // call case 6: other requests
          // call case 6: other requests
          var call4576 = callmethodChecked(var_p, "dtype", []);
          var call4577 = callmethodChecked(call4576, "kind", []);
          var opresult4579 = callmethodChecked(call4577, "==(1)", [1], string4572);
          var opresult4581 = callmethodChecked(opresult4579, "||(1)", [1], opresult4570);
          if (Grace_isTrue(opresult4581)) {
            setLineNumber(933);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call4585 = callmethodChecked(var_p, "dtype", []);
            var call4586 = callmethodChecked(call4585, "value", []);
            // call case 4: self request
            onSelf = true;
            var call4587 = callmethodChecked(this, "escapeident(1)", [1], call4586);
            var var_typeid = call4587;
            var if4588 = GraceDone;
            setLineNumber(934);    // compilenode identifier
            // call case 6: other requests
            var call4590 = callmethodChecked(var_topLevelTypes, "contains(1)", [1], var_typeid);
            if (Grace_isTrue(call4590)) {
              setLineNumber(936);    // compilenode string
              var string4592 = new GraceString(";");
              var string4595 = new GraceString("= type_");
              var opresult4597 = callmethodChecked(string4595, "++(1)", [1], var_typeid);
              var opresult4599 = callmethodChecked(opresult4597, "++(1)", [1], string4592);
              setLineNumber(935);    // compilenode string
              var string4601 = new GraceString("] ");
              var string4604 = new GraceString("->type->types[");
              var string4607 = new GraceString("meth_");
              var opresult4609 = callmethodChecked(string4607, "++(1)", [1], var_litname);
              var opresult4611 = callmethodChecked(opresult4609, "++(1)", [1], string4604);
              var opresult4613 = callmethodChecked(opresult4611, "++(1)", [1], var_pi);
              var opresult4615 = callmethodChecked(opresult4613, "++(1)", [1], string4601);
              var opresult4617 = callmethodChecked(opresult4615, "++(1)", [1], opresult4599);
              // call case 4: self request
              onSelf = true;
              var call4618 = callmethodChecked(this, "out(1)", [1], opresult4617);
              setLineNumber(938);    // compilenode string
              var string4620 = new GraceString("\";");
              // call case 6: other requests
              var call4624 = callmethodChecked(var_p, "nameString", []);
              // call case 4: self request
              onSelf = true;
              var call4625 = callmethodChecked(this, "escapestring2(1)", [1], call4624);
              var string4627 = new GraceString("= \"");
              var opresult4629 = callmethodChecked(string4627, "++(1)", [1], call4625);
              var opresult4631 = callmethodChecked(opresult4629, "++(1)", [1], string4620);
              setLineNumber(937);    // compilenode string
              var string4633 = new GraceString("] ");
              var string4636 = new GraceString("->type->names[");
              var string4639 = new GraceString("meth_");
              var opresult4641 = callmethodChecked(string4639, "++(1)", [1], var_litname);
              var opresult4643 = callmethodChecked(opresult4641, "++(1)", [1], string4636);
              var opresult4645 = callmethodChecked(opresult4643, "++(1)", [1], var_pi);
              var opresult4647 = callmethodChecked(opresult4645, "++(1)", [1], string4633);
              var opresult4649 = callmethodChecked(opresult4647, "++(1)", [1], opresult4631);
              // call case 4: self request
              onSelf = true;
              var call4650 = callmethodChecked(this, "out(1)", [1], opresult4649);
              if4588 = call4650;
            }
            if4562 = if4588;
          }
          if4556 = if4562;
        }
        setLineNumber(942);    // compilenode identifier
        var opresult4653 = callmethodChecked(var_pi, "+(1)", [1], new GraceNum(1));
        var_pi = opresult4653;
        return GraceDone;
      };
      // call case 5: prelude request
      var call4654 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call4554, block4555);
      return call4654;
    };
    // call case 5: prelude request
    var call4655 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call4550, block4551);
    return call4655;
  };
  func4475.paramCounts = [2];
  this.methods["compilemethodtypes(2)"] = func4475;
  func4475.definitionLine = 913;
  func4475.definitionModule = "genc";
  setLineNumber(946);    // compilenode method
  var func4656 = function(argcv) {    // method compileifexpr(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(947);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(948);    // compilenode identifier
    var opresult4659 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult4659;
    setLineNumber(949);    // compilenode member
    // call case 6: other requests
    var call4662 = callmethodChecked(var_o, "value", []);
    // call case 4: self request
    onSelf = true;
    var call4663 = callmethodChecked(this, "compilenode(1)", [1], call4662);
    var var_cond = call4663;
    setLineNumber(950);    // compilenode string
    var string4665 = new GraceString(" = done;");
    var string4668 = new GraceString("  Object if");
    var opresult4670 = callmethodChecked(string4668, "++(1)", [1], var_myc);
    var opresult4672 = callmethodChecked(opresult4670, "++(1)", [1], string4665);
    // call case 4: self request
    onSelf = true;
    var call4673 = callmethodChecked(this, "out(1)", [1], opresult4672);
    setLineNumber(951);    // compilenode string
    var string4675 = new GraceString(" = stackframe;");
    var string4678 = new GraceString("struct StackFrameObject *iftmpstackframe");
    var opresult4680 = callmethodChecked(string4678, "++(1)", [1], var_myc);
    var opresult4682 = callmethodChecked(opresult4680, "++(1)", [1], string4675);
    // call case 4: self request
    onSelf = true;
    var call4683 = callmethodChecked(this, "out(1)", [1], opresult4682);
    setLineNumber(952);    // compilenode string
    var string4685 = new GraceString(")) {");
    var string4688 = new GraceString("  if (istrue(");
    var opresult4690 = callmethodChecked(string4688, "++(1)", [1], var_cond);
    var opresult4692 = callmethodChecked(opresult4690, "++(1)", [1], string4685);
    // call case 4: self request
    onSelf = true;
    var call4693 = callmethodChecked(this, "out(1)", [1], opresult4692);
    setLineNumber(953);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call4697 = callmethodChecked(var_o, "thenblock", []);
    var call4698 = callmethodChecked(call4697, "body", []);
    // call case 4: self request
    onSelf = true;
    var call4699 = callmethodChecked(this, "countbindings(1)", [1], call4698);
    var var_numslots = call4699;
    setLineNumber(954);    // compilenode string
    var string4701 = new GraceString(");");
    var string4704 = new GraceString(", iftmpstackframe");
    var string4707 = new GraceString("stackframe = alloc_StackFrame(");
    var opresult4709 = callmethodChecked(string4707, "++(1)", [1], var_numslots);
    var opresult4711 = callmethodChecked(opresult4709, "++(1)", [1], string4704);
    var opresult4713 = callmethodChecked(opresult4711, "++(1)", [1], var_myc);
    var opresult4715 = callmethodChecked(opresult4713, "++(1)", [1], string4701);
    // call case 4: self request
    onSelf = true;
    var call4716 = callmethodChecked(this, "out(1)", [1], opresult4715);
    setLineNumber(955);    // compilenode string
    var string4718 = new GraceString("gc_frame_newslot((Object)stackframe);");
    // call case 4: self request
    onSelf = true;
    var call4719 = callmethodChecked(this, "out(1)", [1], string4718);
    setLineNumber(956);    // compilenode string
    var string4720 = new GraceString("done");
    var var_tret = string4720;
    setLineNumber(957);    // compilenode string
    var string4721 = new GraceString("done");
    var var_fret = string4721;
    setLineNumber(958);    // compilenode string
    var string4722 = new GraceString("ERROR");
    var var_tblock = string4722;
    setLineNumber(959);    // compilenode string
    var string4723 = new GraceString("ERROR");
    var var_fblock = string4723;
    setLineNumber(960);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call4726 = callmethodChecked(var_o, "thenblock", []);
    var call4727 = callmethodChecked(call4726, "body", []);
    var var_thenList = call4727;
    setLineNumber(961);    // compilenode num
    // call case 4: self request
    onSelf = true;
    var call4729 = callmethodChecked(this, "definebindings(2)", [2], var_thenList, new GraceNum(0));
    setLineNumber(962);    // compilenode block
    var block4731 = new GraceBlock(this, 962, 1);
    setLineNumber(1);    // compilenode identifier
    block4731.real = function(var_l) {
      setLineNumber(963);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call4733 = callmethodChecked(this, "compilenode(1)", [1], var_l);
      var_tret = call4733;
      return GraceDone;
    };
    // call case 5: prelude request
    var call4734 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_thenList, block4731);
    setLineNumber(965);    // compilenode string
    var string4736 = new GraceString(");");
    var string4739 = new GraceString("    gc_frame_newslot(");
    var opresult4741 = callmethodChecked(string4739, "++(1)", [1], var_tret);
    var opresult4743 = callmethodChecked(opresult4741, "++(1)", [1], string4736);
    // call case 4: self request
    onSelf = true;
    var call4744 = callmethodChecked(this, "out(1)", [1], opresult4743);
    setLineNumber(966);    // compilenode string
    var string4746 = new GraceString(";");
    var string4749 = new GraceString(" = ");
    var string4752 = new GraceString("    if");
    var opresult4754 = callmethodChecked(string4752, "++(1)", [1], var_myc);
    var opresult4756 = callmethodChecked(opresult4754, "++(1)", [1], string4749);
    var opresult4758 = callmethodChecked(opresult4756, "++(1)", [1], var_tret);
    var opresult4760 = callmethodChecked(opresult4758, "++(1)", [1], string4746);
    // call case 4: self request
    onSelf = true;
    var call4761 = callmethodChecked(this, "out(1)", [1], opresult4760);
    setLineNumber(967);    // compilenode string
    var string4763 = new GraceString("  } else {");
    // call case 4: self request
    onSelf = true;
    var call4764 = callmethodChecked(this, "out(1)", [1], string4763);
    setLineNumber(968);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call4767 = callmethodChecked(var_o, "elseblock", []);
    var call4768 = callmethodChecked(call4767, "body", []);
    var var_elseList = call4768;
    var if4769 = GraceDone;
    setLineNumber(969);    // compilenode member
    // call case 6: other requests
    var call4772 = callmethodChecked(var_elseList, "size", []);
    var opresult4774 = callmethodChecked(call4772, ">(1)", [1], new GraceNum(0));
    if (Grace_isTrue(opresult4774)) {
      setLineNumber(970);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call4776 = callmethodChecked(this, "countbindings(1)", [1], var_elseList);
      var_numslots = call4776;
      setLineNumber(971);    // compilenode string
      var string4778 = new GraceString(");");
      var string4781 = new GraceString(", iftmpstackframe");
      var string4784 = new GraceString("  stackframe = alloc_StackFrame(");
      var opresult4786 = callmethodChecked(string4784, "++(1)", [1], var_numslots);
      var opresult4788 = callmethodChecked(opresult4786, "++(1)", [1], string4781);
      var opresult4790 = callmethodChecked(opresult4788, "++(1)", [1], var_myc);
      var opresult4792 = callmethodChecked(opresult4790, "++(1)", [1], string4778);
      // call case 4: self request
      onSelf = true;
      var call4793 = callmethodChecked(this, "out(1)", [1], opresult4792);
      setLineNumber(972);    // compilenode string
      var string4795 = new GraceString("  gc_frame_newslot((Object)stackframe);");
      // call case 4: self request
      onSelf = true;
      var call4796 = callmethodChecked(this, "out(1)", [1], string4795);
      setLineNumber(973);    // compilenode num
      // call case 4: self request
      onSelf = true;
      var call4798 = callmethodChecked(this, "definebindings(2)", [2], var_elseList, new GraceNum(0));
      setLineNumber(974);    // compilenode block
      var block4800 = new GraceBlock(this, 974, 1);
      setLineNumber(1);    // compilenode identifier
      block4800.real = function(var_l) {
        setLineNumber(975);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call4802 = callmethodChecked(this, "compilenode(1)", [1], var_l);
        var_fret = call4802;
        return GraceDone;
      };
      // call case 5: prelude request
      var call4803 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_elseList, block4800);
      setLineNumber(977);    // compilenode string
      var string4805 = new GraceString(");");
      var string4808 = new GraceString("    gc_frame_newslot(");
      var opresult4810 = callmethodChecked(string4808, "++(1)", [1], var_fret);
      var opresult4812 = callmethodChecked(opresult4810, "++(1)", [1], string4805);
      // call case 4: self request
      onSelf = true;
      var call4813 = callmethodChecked(this, "out(1)", [1], opresult4812);
      setLineNumber(978);    // compilenode string
      var string4815 = new GraceString(";");
      var string4818 = new GraceString(" = ");
      var string4821 = new GraceString("    if");
      var opresult4823 = callmethodChecked(string4821, "++(1)", [1], var_myc);
      var opresult4825 = callmethodChecked(opresult4823, "++(1)", [1], string4818);
      var opresult4827 = callmethodChecked(opresult4825, "++(1)", [1], var_fret);
      var opresult4829 = callmethodChecked(opresult4827, "++(1)", [1], string4815);
      // call case 4: self request
      onSelf = true;
      var call4830 = callmethodChecked(this, "out(1)", [1], opresult4829);
      if4769 = call4830;
    }
    setLineNumber(980);    // compilenode string
    var string4832 = new GraceString("  }");
    // call case 4: self request
    onSelf = true;
    var call4833 = callmethodChecked(this, "out(1)", [1], string4832);
    setLineNumber(981);    // compilenode string
    var string4835 = new GraceString(";");
    var string4838 = new GraceString("stackframe = iftmpstackframe");
    var opresult4840 = callmethodChecked(string4838, "++(1)", [1], var_myc);
    var opresult4842 = callmethodChecked(opresult4840, "++(1)", [1], string4835);
    // call case 4: self request
    onSelf = true;
    var call4843 = callmethodChecked(this, "out(1)", [1], opresult4842);
    setLineNumber(982);    // compilenode string
    var string4846 = new GraceString("if");
    var opresult4848 = callmethodChecked(string4846, "++(1)", [1], var_myc);
    // call case 6: other requests
    var call4849 = callmethodChecked(var_o, "register:=(1)", [1], opresult4848);
    return call4849;
  };
  func4656.paramCounts = [1];
  this.methods["compileifexpr(1)"] = func4656;
  func4656.definitionLine = 946;
  func4656.definitionModule = "genc";
  setLineNumber(984);    // compilenode method
  var func4850 = function(argcv) {    // method compileif(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("genc");
    var if4851 = GraceDone;
    setLineNumber(985);    // compilenode member
    // call case 6: other requests
    var call4854 = callmethodChecked(var_o, "handledIdentifiers", []);
    var opresult4856 = callmethodChecked(call4854, "==(1)", [1], GraceFalse);
    if (Grace_isTrue(opresult4856)) {
      setLineNumber(986);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call4858 = callmethodChecked(this, "compileifexpr(1)", [1], var_o);
      return call4858;
    }
    setLineNumber(988);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(989);    // compilenode identifier
    var opresult4861 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult4861;
    setLineNumber(990);    // compilenode member
    // call case 6: other requests
    var call4864 = callmethodChecked(var_o, "value", []);
    // call case 4: self request
    onSelf = true;
    var call4865 = callmethodChecked(this, "compilenode(1)", [1], call4864);
    var var_cond = call4865;
    setLineNumber(991);    // compilenode string
    var string4867 = new GraceString(" = done;");
    var string4870 = new GraceString("  Object if");
    var opresult4872 = callmethodChecked(string4870, "++(1)", [1], var_myc);
    var opresult4874 = callmethodChecked(opresult4872, "++(1)", [1], string4867);
    // call case 4: self request
    onSelf = true;
    var call4875 = callmethodChecked(this, "out(1)", [1], opresult4874);
    setLineNumber(992);    // compilenode string
    var string4877 = new GraceString(")) {");
    var string4880 = new GraceString("  if (istrue(");
    var opresult4882 = callmethodChecked(string4880, "++(1)", [1], var_cond);
    var opresult4884 = callmethodChecked(opresult4882, "++(1)", [1], string4877);
    // call case 4: self request
    onSelf = true;
    var call4885 = callmethodChecked(this, "out(1)", [1], opresult4884);
    setLineNumber(993);    // compilenode string
    var string4886 = new GraceString("done");
    var var_tret = string4886;
    setLineNumber(994);    // compilenode string
    var string4887 = new GraceString("done");
    var var_fret = string4887;
    setLineNumber(995);    // compilenode string
    var string4888 = new GraceString("ERROR");
    var var_tblock = string4888;
    setLineNumber(996);    // compilenode string
    var string4889 = new GraceString("ERROR");
    var var_fblock = string4889;
    setLineNumber(997);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call4892 = callmethodChecked(var_o, "thenblock", []);
    var call4893 = callmethodChecked(call4892, "body", []);
    var var_thenList = call4893;
    setLineNumber(998);    // compilenode block
    var block4895 = new GraceBlock(this, 998, 1);
    setLineNumber(1);    // compilenode identifier
    block4895.real = function(var_l) {
      setLineNumber(999);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call4897 = callmethodChecked(this, "compilenode(1)", [1], var_l);
      var_tret = call4897;
      return GraceDone;
    };
    // call case 5: prelude request
    var call4898 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_thenList, block4895);
    setLineNumber(1001);    // compilenode string
    var string4900 = new GraceString(");");
    var string4903 = new GraceString("    gc_frame_newslot(");
    var opresult4905 = callmethodChecked(string4903, "++(1)", [1], var_tret);
    var opresult4907 = callmethodChecked(opresult4905, "++(1)", [1], string4900);
    // call case 4: self request
    onSelf = true;
    var call4908 = callmethodChecked(this, "out(1)", [1], opresult4907);
    setLineNumber(1002);    // compilenode string
    var string4910 = new GraceString(";");
    var string4913 = new GraceString(" = ");
    var string4916 = new GraceString("    if");
    var opresult4918 = callmethodChecked(string4916, "++(1)", [1], var_myc);
    var opresult4920 = callmethodChecked(opresult4918, "++(1)", [1], string4913);
    var opresult4922 = callmethodChecked(opresult4920, "++(1)", [1], var_tret);
    var opresult4924 = callmethodChecked(opresult4922, "++(1)", [1], string4910);
    // call case 4: self request
    onSelf = true;
    var call4925 = callmethodChecked(this, "out(1)", [1], opresult4924);
    setLineNumber(1003);    // compilenode string
    var string4927 = new GraceString("  } else {");
    // call case 4: self request
    onSelf = true;
    var call4928 = callmethodChecked(this, "out(1)", [1], string4927);
    setLineNumber(1004);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call4931 = callmethodChecked(var_o, "elseblock", []);
    var call4932 = callmethodChecked(call4931, "body", []);
    var var_elseList = call4932;
    var if4933 = GraceDone;
    setLineNumber(1005);    // compilenode member
    // call case 6: other requests
    var call4936 = callmethodChecked(var_elseList, "size", []);
    var opresult4938 = callmethodChecked(call4936, ">(1)", [1], new GraceNum(0));
    if (Grace_isTrue(opresult4938)) {
      setLineNumber(1006);    // compilenode block
      var block4940 = new GraceBlock(this, 1006, 1);
      setLineNumber(1);    // compilenode identifier
      block4940.real = function(var_l) {
        setLineNumber(1007);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call4942 = callmethodChecked(this, "compilenode(1)", [1], var_l);
        var_fret = call4942;
        return GraceDone;
      };
      // call case 5: prelude request
      var call4943 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_elseList, block4940);
      setLineNumber(1009);    // compilenode string
      var string4945 = new GraceString(");");
      var string4948 = new GraceString("    gc_frame_newslot(");
      var opresult4950 = callmethodChecked(string4948, "++(1)", [1], var_fret);
      var opresult4952 = callmethodChecked(opresult4950, "++(1)", [1], string4945);
      // call case 4: self request
      onSelf = true;
      var call4953 = callmethodChecked(this, "out(1)", [1], opresult4952);
      setLineNumber(1010);    // compilenode string
      var string4955 = new GraceString(";");
      var string4958 = new GraceString(" = ");
      var string4961 = new GraceString("    if");
      var opresult4963 = callmethodChecked(string4961, "++(1)", [1], var_myc);
      var opresult4965 = callmethodChecked(opresult4963, "++(1)", [1], string4958);
      var opresult4967 = callmethodChecked(opresult4965, "++(1)", [1], var_fret);
      var opresult4969 = callmethodChecked(opresult4967, "++(1)", [1], string4955);
      // call case 4: self request
      onSelf = true;
      var call4970 = callmethodChecked(this, "out(1)", [1], opresult4969);
      if4933 = call4970;
    }
    setLineNumber(1012);    // compilenode string
    var string4972 = new GraceString("  }");
    // call case 4: self request
    onSelf = true;
    var call4973 = callmethodChecked(this, "out(1)", [1], string4972);
    setLineNumber(1013);    // compilenode string
    var string4976 = new GraceString("if");
    var opresult4978 = callmethodChecked(string4976, "++(1)", [1], var_myc);
    // call case 6: other requests
    var call4979 = callmethodChecked(var_o, "register:=(1)", [1], opresult4978);
    return call4979;
  };
  func4850.paramCounts = [1];
  this.methods["compileif(1)"] = func4850;
  func4850.definitionLine = 984;
  func4850.definitionModule = "genc";
  setLineNumber(1015);    // compilenode method
  var func4980 = function(argcv) {    // method compileidentifier(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(1016);    // compilenode member
    // call case 6: other requests
    var call4983 = callmethodChecked(var_o, "value", []);
    // call case 4: self request
    onSelf = true;
    var call4984 = callmethodChecked(this, "escapeident(1)", [1], call4983);
    var var_name = call4984;
    var if4985 = GraceDone;
    setLineNumber(1017);    // compilenode string
    var string4986 = new GraceString("super");
    var opresult4989 = callmethodChecked(var_name, "==(1)", [1], string4986);
    if (Grace_isTrue(opresult4989)) {
      setLineNumber(1018);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call4992 = callmethodChecked(var_errormessages, "suggestion", []);
      var call4993 = callmethodChecked(call4992, "new", []);
      var var_sugg = call4993;
      setLineNumber(1019);    // compilenode member
      // call case 6: other requests
      var call4996 = callmethodChecked(var_o, "linePos", []);
      // call case 6: other requests
      var call4999 = callmethodChecked(var_o, "linePos", []);
      var opresult5001 = callmethodChecked(call4999, "+(1)", [1], new GraceNum(4));
      var string5002 = new GraceString("self");
      // call case 6: other requests
      var call5004 = callmethodChecked(var_o, "line", []);
      // call case 6: other requests
      var call5005 = callmethodChecked(var_sugg, "replaceRange(2)with(1)onLine(1)", [2, 1, 1], call4996, opresult5001, string5002, call5004);
      setLineNumber(1022);    // compilenode string
      var string5007 = new GraceString("Use 'self' instead?");
      setLineNumber(1021);    // compilenode string
      var string5009 = new GraceString("left of the . in a method request. ");
      setLineNumber(1020);    // compilenode string
      var string5011 = new GraceString("'super' can be used only to the ");
      var opresult5013 = callmethodChecked(string5011, "++(1)", [1], string5009);
      var opresult5015 = callmethodChecked(opresult5013, "++(1)", [1], string5007);
      setLineNumber(1024);    // compilenode member
      // call case 6: other requests
      var call5017 = callmethodChecked(var_o, "line", []);
      // call case 6: other requests
      var call5019 = callmethodChecked(var_o, "linePos", []);
      // call case 6: other requests
      var call5022 = callmethodChecked(var_o, "linePos", []);
      var opresult5024 = callmethodChecked(call5022, "+(1)", [1], new GraceNum(4));
      // call case 6: other requests
      setLineNumber(1020);    // compilenode identifier
      var call5025 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)withSuggestion(1)", [1, 3, 1], opresult5015, call5017, call5019, opresult5024, var_sugg);
      if4985 = call5025;
    }
    var if5026 = GraceDone;
    setLineNumber(1026);    // compilenode string
    var string5027 = new GraceString("self");
    var opresult5030 = callmethodChecked(var_name, "==(1)", [1], string5027);
    if (Grace_isTrue(opresult5030)) {
      setLineNumber(1027);    // compilenode string
      var string5032 = new GraceString("self");
      // call case 6: other requests
      var call5033 = callmethodChecked(var_o, "register:=(1)", [1], string5032);
      if5026 = call5033;
    } else {
      var if5034 = GraceDone;
      setLineNumber(1028);    // compilenode string
      var string5035 = new GraceString("__compilerRevision");
      var opresult5038 = callmethodChecked(var_name, "==(1)", [1], string5035);
      if (Grace_isTrue(opresult5038)) {
        setLineNumber(1030);    // compilenode string
        var string5040 = new GraceString(" = alloc_String(compilerRevision);");
        setLineNumber(1029);    // compilenode string
        var string5043 = new GraceString("  Object var_val___compilerRevision");
        var opresult5045 = callmethodChecked(string5043, "++(1)", [1], var_auto__95__count);
        var opresult5047 = callmethodChecked(opresult5045, "++(1)", [1], string5040);
        // call case 4: self request
        onSelf = true;
        var call5048 = callmethodChecked(this, "out(1)", [1], opresult5047);
        setLineNumber(1031);    // compilenode string
        var string5051 = new GraceString("var_val___compilerRevision");
        var opresult5053 = callmethodChecked(string5051, "++(1)", [1], var_auto__95__count);
        // call case 6: other requests
        var call5054 = callmethodChecked(var_o, "register:=(1)", [1], opresult5053);
        setLineNumber(1032);    // compilenode identifier
        var opresult5057 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
        var_auto__95__count = opresult5057;
        if5034 = GraceDone;
      } else {
        var if5058 = GraceDone;
        setLineNumber(1033);    // compilenode string
        var string5059 = new GraceString("_46__46__46_");
        var opresult5062 = callmethodChecked(var_name, "==(1)", [1], string5059);
        if (Grace_isTrue(opresult5062)) {
          setLineNumber(1034);    // compilenode string
          var string5064 = new GraceString(" = alloc_ellipsis();");
          var string5067 = new GraceString("  Object ellipsis");
          var opresult5069 = callmethodChecked(string5067, "++(1)", [1], var_auto__95__count);
          var opresult5071 = callmethodChecked(opresult5069, "++(1)", [1], string5064);
          // call case 4: self request
          onSelf = true;
          var call5072 = callmethodChecked(this, "out(1)", [1], opresult5071);
          setLineNumber(1035);    // compilenode string
          var string5074 = new GraceString("");
          var string5077 = new GraceString("ellipsis");
          var opresult5079 = callmethodChecked(string5077, "++(1)", [1], var_auto__95__count);
          var opresult5081 = callmethodChecked(opresult5079, "++(1)", [1], string5074);
          // call case 6: other requests
          var call5082 = callmethodChecked(var_o, "register:=(1)", [1], opresult5081);
          setLineNumber(1036);    // compilenode identifier
          var opresult5085 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
          var_auto__95__count = opresult5085;
          if5058 = GraceDone;
        } else {
          setLineNumber(1038);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call5087 = callmethodChecked(this, "escapestring2(1)", [1], var_name);
          var_name = call5087;
          setLineNumber(1039);    // compilenode identifier
          // call case 6: other requests
          var call5089 = callmethodChecked(var_usedvars, "push(1)", [1], var_name);
          setLineNumber(1040);    // compilenode string
          var string5091 = new GraceString("");
          var string5094 = new GraceString("*var_");
          var opresult5096 = callmethodChecked(string5094, "++(1)", [1], var_name);
          var opresult5098 = callmethodChecked(opresult5096, "++(1)", [1], string5091);
          // call case 6: other requests
          var call5099 = callmethodChecked(var_o, "register:=(1)", [1], opresult5098);
          if5058 = call5099;
        }
        if5034 = if5058;
      }
      if5026 = if5034;
    }
    return if5026;
  };
  func4980.paramCounts = [1];
  this.methods["compileidentifier(1)"] = func4980;
  func4980.definitionLine = 1015;
  func4980.definitionModule = "genc";
  setLineNumber(1043);    // compilenode method
  var func5100 = function(argcv) {    // method compilebind(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(1044);    // compilenode member
    // call case 6: other requests
    var call5102 = callmethodChecked(var_o, "dest", []);
    var var_lhs = call5102;
    var if5103 = GraceDone;
    setLineNumber(1045);    // compilenode member
    // call case 6: other requests
    var call5105 = callmethodChecked(var_lhs, "isIdentifier", []);
    if (Grace_isTrue(call5105)) {
      setLineNumber(1046);    // compilenode member
      // call case 6: other requests
      var call5108 = callmethodChecked(var_o, "value", []);
      // call case 4: self request
      onSelf = true;
      var call5109 = callmethodChecked(this, "compilenode(1)", [1], call5108);
      var var_val = call5109;
      setLineNumber(1047);    // compilenode member
      // call case 6: other requests
      var call5112 = callmethodChecked(var_lhs, "value", []);
      // call case 4: self request
      onSelf = true;
      var call5113 = callmethodChecked(this, "escapeident(1)", [1], call5112);
      var var_nm = call5113;
      setLineNumber(1048);    // compilenode identifier
      // call case 6: other requests
      var call5115 = callmethodChecked(var_usedvars, "push(1)", [1], var_nm);
      setLineNumber(1049);    // compilenode string
      var string5117 = new GraceString(";");
      var string5120 = new GraceString(" = ");
      var string5123 = new GraceString("  *var_");
      var opresult5125 = callmethodChecked(string5123, "++(1)", [1], var_nm);
      var opresult5127 = callmethodChecked(opresult5125, "++(1)", [1], string5120);
      var opresult5129 = callmethodChecked(opresult5127, "++(1)", [1], var_val);
      var opresult5131 = callmethodChecked(opresult5129, "++(1)", [1], string5117);
      // call case 4: self request
      onSelf = true;
      var call5132 = callmethodChecked(this, "out(1)", [1], opresult5131);
      setLineNumber(1050);    // compilenode string
      var string5134 = new GraceString(" == undefined)");
      var string5137 = new GraceString("  if (");
      var opresult5139 = callmethodChecked(string5137, "++(1)", [1], var_val);
      var opresult5141 = callmethodChecked(opresult5139, "++(1)", [1], string5134);
      // call case 4: self request
      onSelf = true;
      var call5142 = callmethodChecked(this, "out(1)", [1], opresult5141);
      setLineNumber(1051);    // compilenode string
      var string5144 = new GraceString("    graceRaise(ProgrammingError(), \"attempting to use an ininitilized variable\");");
      // call case 4: self request
      onSelf = true;
      var call5145 = callmethodChecked(this, "out(1)", [1], string5144);
      setLineNumber(1052);    // compilenode identifier
      var opresult5148 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
      var_auto__95__count = opresult5148;
      setLineNumber(1053);    // compilenode string
      var string5150 = new GraceString("done");
      // call case 6: other requests
      var call5151 = callmethodChecked(var_o, "register:=(1)", [1], string5150);
      if5103 = call5151;
    } else {
      setLineNumber(1055);    // compilenode string
      var string5153 = new GraceString(" does not bind an indentifer");
      var string5156 = new GraceString("bindNode ");
      var opresult5158 = callmethodChecked(string5156, "++(1)", [1], var_o);
      var opresult5160 = callmethodChecked(opresult5158, "++(1)", [1], string5153);
      // call case 6: other requests
      // call case 5: prelude request
      var call5162 = callmethodChecked(var_prelude, "ProgrammingError", []);
      var call5163 = callmethodChecked(call5162, "raise(1)", [1], opresult5160);
      if5103 = call5163;
    }
    return if5103;
  };
  func5100.paramCounts = [1];
  this.methods["compilebind(1)"] = func5100;
  func5100.definitionLine = 1043;
  func5100.definitionModule = "genc";
  setLineNumber(1058);    // compilenode method
  var func5164 = function(argcv) {    // method compiledefdec(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(1059);    // compilenode vardec
    var var_nm;
    var if5165 = GraceDone;
    setLineNumber(1060);    // compilenode string
    var string5166 = new GraceString("generic");
    // call case 6: other requests
    // call case 6: other requests
    var call5170 = callmethodChecked(var_o, "name", []);
    var call5171 = callmethodChecked(call5170, "kind", []);
    var opresult5173 = callmethodChecked(call5171, "==(1)", [1], string5166);
    if (Grace_isTrue(opresult5173)) {
      setLineNumber(1061);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      // call case 6: other requests
      var call5178 = callmethodChecked(var_o, "name", []);
      var call5179 = callmethodChecked(call5178, "value", []);
      var call5180 = callmethodChecked(call5179, "value", []);
      // call case 4: self request
      onSelf = true;
      var call5181 = callmethodChecked(this, "escapeident(1)", [1], call5180);
      var_nm = call5181;
      if5165 = GraceDone;
    } else {
      setLineNumber(1063);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call5185 = callmethodChecked(var_o, "name", []);
      var call5186 = callmethodChecked(call5185, "value", []);
      // call case 4: self request
      onSelf = true;
      var call5187 = callmethodChecked(this, "escapeident(1)", [1], call5186);
      var_nm = call5187;
      if5165 = GraceDone;
    }
    setLineNumber(1065);    // compilenode identifier
    // call case 6: other requests
    var call5189 = callmethodChecked(var_declaredvars, "push(1)", [1], var_nm);
    setLineNumber(1066);    // compilenode member
    // call case 6: other requests
    var call5192 = callmethodChecked(var_o, "value", []);
    // call case 4: self request
    onSelf = true;
    var call5193 = callmethodChecked(this, "compilenode(1)", [1], call5192);
    var var_val = call5193;
    setLineNumber(1067);    // compilenode string
    var string5195 = new GraceString(";");
    var string5198 = new GraceString(" = ");
    var string5201 = new GraceString("  *var_");
    var opresult5203 = callmethodChecked(string5201, "++(1)", [1], var_nm);
    var opresult5205 = callmethodChecked(opresult5203, "++(1)", [1], string5198);
    var opresult5207 = callmethodChecked(opresult5205, "++(1)", [1], var_val);
    var opresult5209 = callmethodChecked(opresult5207, "++(1)", [1], string5195);
    // call case 4: self request
    onSelf = true;
    var call5210 = callmethodChecked(this, "out(1)", [1], opresult5209);
    setLineNumber(1068);    // compilenode string
    var string5212 = new GraceString(" == undefined)");
    var string5215 = new GraceString("  if (");
    var opresult5217 = callmethodChecked(string5215, "++(1)", [1], var_val);
    var opresult5219 = callmethodChecked(opresult5217, "++(1)", [1], string5212);
    // call case 4: self request
    onSelf = true;
    var call5220 = callmethodChecked(this, "out(1)", [1], opresult5219);
    setLineNumber(1069);    // compilenode string
    var string5222 = new GraceString("    graceRaise(ProgrammingError(), \"attempting to use an ininitilized variable\");");
    // call case 4: self request
    onSelf = true;
    var call5223 = callmethodChecked(this, "out(1)", [1], string5222);
    var if5224 = GraceDone;
    setLineNumber(1070);    // compilenode identifier
    var opresult5227 = callmethodChecked(var_compilationDepth, "==(1)", [1], new GraceNum(1));
    if (Grace_isTrue(opresult5227)) {
      setLineNumber(1071);    // compilenode member
      // call case 6: other requests
      var call5233 = callmethodChecked(var_o, "nameString", []);
      // call case 6: other requests
      // call case 6: other requests
      var call5235 = callmethodChecked(var_ast, "signaturePart", []);
      var call5236 = callmethodChecked(call5235, "partName(1)", [1], call5233);
      var array5230 = new PrimitiveGraceList([call5236]);
      // call case 6: other requests
      var call5239 = callmethodChecked(var_o, "name", []);
      var array5237 = new PrimitiveGraceList([call5239]);
      // call case 6: other requests
      // call case 6: other requests
      var call5241 = callmethodChecked(var_ast, "methodNode", []);
      var call5242 = callmethodChecked(call5241, "new(3)", [3], array5230, array5237, GraceFalse);
      // call case 4: self request
      onSelf = true;
      var call5243 = callmethodChecked(this, "compilenode(1)", [1], call5242);
      var if5244 = GraceDone;
      setLineNumber(1072);    // compilenode string
      var string5246 = new GraceString("parent");
      // call case 6: other requests
      var call5247 = callmethodChecked(var_ast, "findAnnotation(2)", [2], var_o, string5246);
      if (Grace_isTrue(call5247)) {
        setLineNumber(1073);    // compilenode string
        var string5249 = new GraceString(";");
        var string5252 = new GraceString("  ((struct UserObject *)self)->super = ");
        var opresult5254 = callmethodChecked(string5252, "++(1)", [1], var_val);
        var opresult5256 = callmethodChecked(opresult5254, "++(1)", [1], string5249);
        // call case 4: self request
        onSelf = true;
        var call5257 = callmethodChecked(this, "out(1)", [1], opresult5256);
        if5244 = call5257;
      }
      if5224 = if5244;
    }
    setLineNumber(1076);    // compilenode string
    var string5259 = new GraceString("done");
    // call case 6: other requests
    var call5260 = callmethodChecked(var_o, "register:=(1)", [1], string5259);
    return call5260;
  };
  func5164.paramCounts = [1];
  this.methods["compiledefdec(1)"] = func5164;
  func5164.definitionLine = 1058;
  func5164.definitionModule = "genc";
  setLineNumber(1078);    // compilenode method
  var func5261 = function(argcv) {    // method compilevardec(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(1079);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call5265 = callmethodChecked(var_o, "name", []);
    var call5266 = callmethodChecked(call5265, "value", []);
    // call case 4: self request
    onSelf = true;
    var call5267 = callmethodChecked(this, "escapeident(1)", [1], call5266);
    var var_nm = call5267;
    setLineNumber(1080);    // compilenode identifier
    // call case 6: other requests
    var call5269 = callmethodChecked(var_declaredvars, "push(1)", [1], var_nm);
    setLineNumber(1081);    // compilenode member
    // call case 6: other requests
    var call5271 = callmethodChecked(var_o, "value", []);
    var var_val = call5271;
    setLineNumber(1082);    // compilenode identifier
    var var_hadval = GraceFalse;
    var if5272 = GraceDone;
    setLineNumber(1083);    // compilenode identifier
    var opresult5275 = callmethodChecked(GraceFalse, "\u2260(1)", [1], var_val);
    if (Grace_isTrue(opresult5275)) {
      setLineNumber(1084);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call5277 = callmethodChecked(this, "compilenode(1)", [1], var_val);
      var_val = call5277;
      setLineNumber(1085);    // compilenode identifier
      var_hadval = GraceTrue;
      if5272 = GraceDone;
    } else {
      setLineNumber(1087);    // compilenode string
      var string5278 = new GraceString("undefined");
      var_val = string5278;
      if5272 = GraceDone;
    }
    setLineNumber(1089);    // compilenode string
    var string5280 = new GraceString(";");
    var string5283 = new GraceString(" = ");
    var string5286 = new GraceString("  *var_");
    var opresult5288 = callmethodChecked(string5286, "++(1)", [1], var_nm);
    var opresult5290 = callmethodChecked(opresult5288, "++(1)", [1], string5283);
    var opresult5292 = callmethodChecked(opresult5290, "++(1)", [1], var_val);
    var opresult5294 = callmethodChecked(opresult5292, "++(1)", [1], string5280);
    // call case 4: self request
    onSelf = true;
    var call5295 = callmethodChecked(this, "out(1)", [1], opresult5294);
    var if5296 = GraceDone;
    setLineNumber(1090);    // compilenode identifier
    if (Grace_isTrue(var_hadval)) {
      setLineNumber(1091);    // compilenode string
      var string5298 = new GraceString(" == undefined)");
      var string5301 = new GraceString("  if (");
      var opresult5303 = callmethodChecked(string5301, "++(1)", [1], var_val);
      var opresult5305 = callmethodChecked(opresult5303, "++(1)", [1], string5298);
      // call case 4: self request
      onSelf = true;
      var call5306 = callmethodChecked(this, "out(1)", [1], opresult5305);
      setLineNumber(1092);    // compilenode string
      var string5308 = new GraceString("    callmethod(done, \"assignment\", 0, NULL, NULL);");
      // call case 4: self request
      onSelf = true;
      var call5309 = callmethodChecked(this, "out(1)", [1], string5308);
      if5296 = call5309;
    }
    var if5310 = GraceDone;
    setLineNumber(1094);    // compilenode identifier
    var opresult5313 = callmethodChecked(var_compilationDepth, "==(1)", [1], new GraceNum(1));
    if (Grace_isTrue(opresult5313)) {
      setLineNumber(1095);    // compilenode member
      // call case 6: other requests
      var call5319 = callmethodChecked(var_o, "nameString", []);
      // call case 6: other requests
      // call case 6: other requests
      var call5321 = callmethodChecked(var_ast, "signaturePart", []);
      var call5322 = callmethodChecked(call5321, "partName(1)", [1], call5319);
      var array5316 = new PrimitiveGraceList([call5322]);
      // call case 6: other requests
      var call5325 = callmethodChecked(var_o, "name", []);
      var array5323 = new PrimitiveGraceList([call5325]);
      // call case 6: other requests
      // call case 6: other requests
      var call5327 = callmethodChecked(var_ast, "methodNode", []);
      var call5328 = callmethodChecked(call5327, "new(3)", [3], array5316, array5323, GraceFalse);
      // call case 4: self request
      onSelf = true;
      var call5329 = callmethodChecked(this, "compilenode(1)", [1], call5328);
      setLineNumber(1096);    // compilenode string
      var string5331 = new GraceString("_var_assign_tmp");
      // call case 6: other requests
      // call case 6: other requests
      var call5333 = callmethodChecked(var_ast, "identifierNode", []);
      var call5334 = callmethodChecked(call5333, "new(2)", [2], string5331, GraceFalse);
      var var_paramId = call5334;
      setLineNumber(1097);    // compilenode string
      var string5339 = new GraceString(":=");
      // call case 6: other requests
      var call5342 = callmethodChecked(var_o, "nameString", []);
      var opresult5344 = callmethodChecked(call5342, "++(1)", [1], string5339);
      var array5345 = new PrimitiveGraceList([var_paramId]);
      // call case 6: other requests
      // call case 6: other requests
      var call5347 = callmethodChecked(var_ast, "signaturePart", []);
      var call5348 = callmethodChecked(call5347, "partName(1)params(1)", [1, 1], opresult5344, array5345);
      var array5337 = new PrimitiveGraceList([call5348]);
      setLineNumber(1098);    // compilenode member
      // call case 6: other requests
      var call5352 = callmethodChecked(var_o, "name", []);
      // call case 6: other requests
      // call case 6: other requests
      var call5354 = callmethodChecked(var_ast, "bindNode", []);
      var call5355 = callmethodChecked(call5354, "new(2)", [2], call5352, var_paramId);
      var array5349 = new PrimitiveGraceList([call5355]);
      // call case 6: other requests
      setLineNumber(1097);    // compilenode member
      // call case 6: other requests
      var call5357 = callmethodChecked(var_ast, "methodNode", []);
      var call5358 = callmethodChecked(call5357, "new(3)", [3], array5337, array5349, GraceFalse);
      // call case 4: self request
      onSelf = true;
      var call5359 = callmethodChecked(this, "compilenode(1)", [1], call5358);
      if5310 = call5359;
    }
    setLineNumber(1100);    // compilenode string
    var string5361 = new GraceString("done");
    // call case 6: other requests
    var call5362 = callmethodChecked(var_o, "register:=(1)", [1], string5361);
    return call5362;
  };
  func5261.paramCounts = [1];
  this.methods["compilevardec(1)"] = func5261;
  func5261.definitionLine = 1078;
  func5261.definitionModule = "genc";
  setLineNumber(1102);    // compilenode method
  var func5363 = function(argcv) {    // method compiletrycatch(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(1103);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(1104);    // compilenode identifier
    var opresult5366 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult5366;
    setLineNumber(1105);    // compilenode member
    // call case 6: other requests
    var call5368 = callmethodChecked(var_o, "cases", []);
    var var_cases = call5368;
    var if5369 = GraceDone;
    setLineNumber(1106);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call5373 = callmethodChecked(var_o, "cases", []);
    var call5374 = callmethodChecked(call5373, "size", []);
    var opresult5376 = callmethodChecked(call5374, ">(1)", [1], var_paramsUsed);
    if (Grace_isTrue(opresult5376)) {
      setLineNumber(1107);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call5379 = callmethodChecked(var_o, "cases", []);
      var call5380 = callmethodChecked(call5379, "size", []);
      var_paramsUsed = call5380;
      if5369 = GraceDone;
    }
    setLineNumber(1109);    // compilenode member
    // call case 6: other requests
    var call5383 = callmethodChecked(var_o, "value", []);
    // call case 4: self request
    onSelf = true;
    var call5384 = callmethodChecked(this, "compilenode(1)", [1], call5383);
    var var_mainblock = call5384;
    setLineNumber(1110);    // compilenode string
    var string5386 = new GraceString(" = gc_frame_new();");
    var string5389 = new GraceString("  int frame");
    var opresult5391 = callmethodChecked(string5389, "++(1)", [1], var_myc);
    var opresult5393 = callmethodChecked(opresult5391, "++(1)", [1], string5386);
    // call case 4: self request
    onSelf = true;
    var call5394 = callmethodChecked(this, "out(1)", [1], opresult5393);
    setLineNumber(1111);    // compilenode string
    var string5396 = new GraceString(");");
    var string5399 = new GraceString("  gc_frame_newslot(");
    var opresult5401 = callmethodChecked(string5399, "++(1)", [1], var_mainblock);
    var opresult5403 = callmethodChecked(opresult5401, "++(1)", [1], string5396);
    // call case 4: self request
    onSelf = true;
    var call5404 = callmethodChecked(this, "out(1)", [1], opresult5403);
    setLineNumber(1112);    // compilenode num
    var var_i = new GraceNum(0);
    setLineNumber(1113);    // compilenode array
    var array5405 = new PrimitiveGraceList([]);
    var var_params = array5405;
    setLineNumber(1114);    // compilenode block
    var block5407 = new GraceBlock(this, 1114, 1);
    setLineNumber(1);    // compilenode identifier
    block5407.real = function(var_c) {
      setLineNumber(1115);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call5409 = callmethodChecked(this, "compilenode(1)", [1], var_c);
      var var_e = call5409;
      setLineNumber(1116);    // compilenode string
      var string5411 = new GraceString(");");
      var string5414 = new GraceString("  gc_frame_newslot(");
      var opresult5416 = callmethodChecked(string5414, "++(1)", [1], var_e);
      var opresult5418 = callmethodChecked(opresult5416, "++(1)", [1], string5411);
      // call case 4: self request
      onSelf = true;
      var call5419 = callmethodChecked(this, "out(1)", [1], opresult5418);
      setLineNumber(1117);    // compilenode identifier
      var array5421 = new PrimitiveGraceList([var_i, var_e]);
      // call case 6: other requests
      var call5422 = callmethodChecked(var_params, "push(1)", [1], array5421);
      setLineNumber(1118);    // compilenode identifier
      var opresult5425 = callmethodChecked(var_i, "+(1)", [1], new GraceNum(1));
      var_i = opresult5425;
      return GraceDone;
    };
    // call case 5: prelude request
    var call5426 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_cases, block5407);
    setLineNumber(1120);    // compilenode string
    var string5427 = new GraceString("NULL");
    var var_finally = string5427;
    var if5428 = GraceDone;
    setLineNumber(1121);    // compilenode member
    // call case 6: other requests
    var call5430 = callmethodChecked(var_o, "finally", []);
    var opresult5433 = callmethodChecked(GraceFalse, "\u2260(1)", [1], call5430);
    if (Grace_isTrue(opresult5433)) {
      setLineNumber(1122);    // compilenode member
      // call case 6: other requests
      var call5436 = callmethodChecked(var_o, "finally", []);
      // call case 4: self request
      onSelf = true;
      var call5437 = callmethodChecked(this, "compilenode(1)", [1], call5436);
      var_finally = call5437;
      setLineNumber(1123);    // compilenode string
      var string5439 = new GraceString(");");
      var string5442 = new GraceString("  gc_frame_newslot(");
      var opresult5444 = callmethodChecked(string5442, "++(1)", [1], var_finally);
      var opresult5446 = callmethodChecked(opresult5444, "++(1)", [1], string5439);
      // call case 4: self request
      onSelf = true;
      var call5447 = callmethodChecked(this, "out(1)", [1], opresult5446);
      if5428 = call5447;
    }
    setLineNumber(1125);    // compilenode block
    var block5449 = new GraceBlock(this, 1125, 1);
    setLineNumber(1);    // compilenode identifier
    block5449.real = function(var_ie) {
      setLineNumber(1126);    // compilenode member
      // call case 6: other requests
      var call5451 = callmethodChecked(var_ie, "first", []);
      var var_idx = call5451;
      setLineNumber(1127);    // compilenode member
      // call case 6: other requests
      var call5453 = callmethodChecked(var_ie, "second", []);
      var var_e = call5453;
      setLineNumber(1128);    // compilenode string
      var string5455 = new GraceString(";");
      var string5458 = new GraceString("] = ");
      var string5461 = new GraceString("  params[");
      var opresult5463 = callmethodChecked(string5461, "++(1)", [1], var_idx);
      var opresult5465 = callmethodChecked(opresult5463, "++(1)", [1], string5458);
      var opresult5467 = callmethodChecked(opresult5465, "++(1)", [1], var_e);
      var opresult5469 = callmethodChecked(opresult5467, "++(1)", [1], string5455);
      // call case 4: self request
      onSelf = true;
      var call5470 = callmethodChecked(this, "out(1)", [1], opresult5469);
      return call5470;
    };
    // call case 5: prelude request
    var call5471 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_params, block5449);
    setLineNumber(1130);    // compilenode string
    var string5473 = new GraceString(");");
    // call case 6: other requests
    var call5476 = callmethodChecked(var_o, "line", []);
    var string5478 = new GraceString("  setline(");
    var opresult5480 = callmethodChecked(string5478, "++(1)", [1], call5476);
    var opresult5482 = callmethodChecked(opresult5480, "++(1)", [1], string5473);
    // call case 4: self request
    onSelf = true;
    var call5483 = callmethodChecked(this, "out(1)", [1], opresult5482);
    setLineNumber(1132);    // compilenode string
    var string5485 = new GraceString(");");
    var string5488 = new GraceString("");
    var opresult5490 = callmethodChecked(string5488, "++(1)", [1], var_finally);
    var opresult5492 = callmethodChecked(opresult5490, "++(1)", [1], string5485);
    setLineNumber(1131);    // compilenode string
    var string5494 = new GraceString(",");
    // call case 6: other requests
    var call5497 = callmethodChecked(var_cases, "size", []);
    var string5499 = new GraceString(", params, ");
    var string5502 = new GraceString(" = tryCatch(");
    var string5505 = new GraceString("  Object catchres");
    var opresult5507 = callmethodChecked(string5505, "++(1)", [1], var_myc);
    var opresult5509 = callmethodChecked(opresult5507, "++(1)", [1], string5502);
    var opresult5511 = callmethodChecked(opresult5509, "++(1)", [1], var_mainblock);
    var opresult5513 = callmethodChecked(opresult5511, "++(1)", [1], string5499);
    var opresult5515 = callmethodChecked(opresult5513, "++(1)", [1], call5497);
    var opresult5517 = callmethodChecked(opresult5515, "++(1)", [1], string5494);
    var opresult5519 = callmethodChecked(opresult5517, "++(1)", [1], opresult5492);
    // call case 4: self request
    onSelf = true;
    var call5520 = callmethodChecked(this, "out(1)", [1], opresult5519);
    setLineNumber(1133);    // compilenode string
    var string5522 = new GraceString(");");
    var string5525 = new GraceString("  gc_frame_end(frame");
    var opresult5527 = callmethodChecked(string5525, "++(1)", [1], var_myc);
    var opresult5529 = callmethodChecked(opresult5527, "++(1)", [1], string5522);
    // call case 4: self request
    onSelf = true;
    var call5530 = callmethodChecked(this, "out(1)", [1], opresult5529);
    setLineNumber(1134);    // compilenode string
    var string5533 = new GraceString("catchres");
    var opresult5535 = callmethodChecked(string5533, "++(1)", [1], var_myc);
    // call case 6: other requests
    var call5536 = callmethodChecked(var_o, "register:=(1)", [1], opresult5535);
    return call5536;
  };
  func5363.paramCounts = [1];
  this.methods["compiletrycatch(1)"] = func5363;
  func5363.definitionLine = 1102;
  func5363.definitionModule = "genc";
  setLineNumber(1136);    // compilenode method
  var func5537 = function(argcv) {    // method compilematchcase(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(1137);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(1138);    // compilenode identifier
    var opresult5540 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult5540;
    setLineNumber(1139);    // compilenode member
    // call case 6: other requests
    var call5542 = callmethodChecked(var_o, "cases", []);
    var var_cases = call5542;
    var if5543 = GraceDone;
    setLineNumber(1140);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call5547 = callmethodChecked(var_o, "cases", []);
    var call5548 = callmethodChecked(call5547, "size", []);
    var opresult5550 = callmethodChecked(call5548, ">(1)", [1], var_paramsUsed);
    if (Grace_isTrue(opresult5550)) {
      setLineNumber(1141);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call5553 = callmethodChecked(var_o, "cases", []);
      var call5554 = callmethodChecked(call5553, "size", []);
      var_paramsUsed = call5554;
      if5543 = GraceDone;
    }
    setLineNumber(1143);    // compilenode member
    // call case 6: other requests
    var call5557 = callmethodChecked(var_o, "value", []);
    // call case 4: self request
    onSelf = true;
    var call5558 = callmethodChecked(this, "compilenode(1)", [1], call5557);
    var var_matchee = call5558;
    setLineNumber(1144);    // compilenode string
    var string5560 = new GraceString(" = gc_frame_new();");
    var string5563 = new GraceString("  int frame");
    var opresult5565 = callmethodChecked(string5563, "++(1)", [1], var_myc);
    var opresult5567 = callmethodChecked(opresult5565, "++(1)", [1], string5560);
    // call case 4: self request
    onSelf = true;
    var call5568 = callmethodChecked(this, "out(1)", [1], opresult5567);
    setLineNumber(1145);    // compilenode string
    var string5570 = new GraceString(");");
    var string5573 = new GraceString("  gc_frame_newslot(");
    var opresult5575 = callmethodChecked(string5573, "++(1)", [1], var_matchee);
    var opresult5577 = callmethodChecked(opresult5575, "++(1)", [1], string5570);
    // call case 4: self request
    onSelf = true;
    var call5578 = callmethodChecked(this, "out(1)", [1], opresult5577);
    setLineNumber(1146);    // compilenode num
    var var_i = new GraceNum(0);
    setLineNumber(1147);    // compilenode array
    var array5579 = new PrimitiveGraceList([]);
    var var_params = array5579;
    setLineNumber(1148);    // compilenode block
    var block5581 = new GraceBlock(this, 1148, 1);
    setLineNumber(1);    // compilenode identifier
    block5581.real = function(var_c) {
      setLineNumber(1149);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call5583 = callmethodChecked(this, "compilenode(1)", [1], var_c);
      var var_e = call5583;
      setLineNumber(1150);    // compilenode string
      var string5585 = new GraceString(");");
      var string5588 = new GraceString("  gc_frame_newslot(");
      var opresult5590 = callmethodChecked(string5588, "++(1)", [1], var_e);
      var opresult5592 = callmethodChecked(opresult5590, "++(1)", [1], string5585);
      // call case 4: self request
      onSelf = true;
      var call5593 = callmethodChecked(this, "out(1)", [1], opresult5592);
      setLineNumber(1151);    // compilenode identifier
      var array5595 = new PrimitiveGraceList([var_i, var_e]);
      // call case 6: other requests
      var call5596 = callmethodChecked(var_params, "push(1)", [1], array5595);
      setLineNumber(1152);    // compilenode identifier
      var opresult5599 = callmethodChecked(var_i, "+(1)", [1], new GraceNum(1));
      var_i = opresult5599;
      return GraceDone;
    };
    // call case 5: prelude request
    var call5600 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_cases, block5581);
    setLineNumber(1154);    // compilenode string
    var string5601 = new GraceString("NULL");
    var var_elsecase = string5601;
    var if5602 = GraceDone;
    setLineNumber(1155);    // compilenode member
    // call case 6: other requests
    var call5604 = callmethodChecked(var_o, "elsecase", []);
    var opresult5607 = callmethodChecked(GraceFalse, "\u2260(1)", [1], call5604);
    if (Grace_isTrue(opresult5607)) {
      setLineNumber(1156);    // compilenode member
      // call case 6: other requests
      var call5610 = callmethodChecked(var_o, "elsecase", []);
      // call case 4: self request
      onSelf = true;
      var call5611 = callmethodChecked(this, "compilenode(1)", [1], call5610);
      var_elsecase = call5611;
      setLineNumber(1157);    // compilenode string
      var string5613 = new GraceString(");");
      var string5616 = new GraceString("  gc_frame_newslot(");
      var opresult5618 = callmethodChecked(string5616, "++(1)", [1], var_elsecase);
      var opresult5620 = callmethodChecked(opresult5618, "++(1)", [1], string5613);
      // call case 4: self request
      onSelf = true;
      var call5621 = callmethodChecked(this, "out(1)", [1], opresult5620);
      if5602 = call5621;
    }
    setLineNumber(1159);    // compilenode block
    var block5623 = new GraceBlock(this, 1159, 1);
    setLineNumber(1);    // compilenode identifier
    block5623.real = function(var_ie) {
      setLineNumber(1160);    // compilenode member
      // call case 6: other requests
      var call5625 = callmethodChecked(var_ie, "first", []);
      var var_idx = call5625;
      setLineNumber(1161);    // compilenode member
      // call case 6: other requests
      var call5627 = callmethodChecked(var_ie, "second", []);
      var var_e = call5627;
      setLineNumber(1162);    // compilenode string
      var string5629 = new GraceString(";");
      var string5632 = new GraceString("] = ");
      var string5635 = new GraceString("  params[");
      var opresult5637 = callmethodChecked(string5635, "++(1)", [1], var_idx);
      var opresult5639 = callmethodChecked(opresult5637, "++(1)", [1], string5632);
      var opresult5641 = callmethodChecked(opresult5639, "++(1)", [1], var_e);
      var opresult5643 = callmethodChecked(opresult5641, "++(1)", [1], string5629);
      // call case 4: self request
      onSelf = true;
      var call5644 = callmethodChecked(this, "out(1)", [1], opresult5643);
      return call5644;
    };
    // call case 5: prelude request
    var call5645 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_params, block5623);
    setLineNumber(1165);    // compilenode string
    var string5647 = new GraceString(");");
    var string5650 = new GraceString("");
    var opresult5652 = callmethodChecked(string5650, "++(1)", [1], var_elsecase);
    var opresult5654 = callmethodChecked(opresult5652, "++(1)", [1], string5647);
    setLineNumber(1164);    // compilenode string
    var string5656 = new GraceString(",");
    // call case 6: other requests
    var call5659 = callmethodChecked(var_cases, "size", []);
    var string5661 = new GraceString(", params, ");
    var string5664 = new GraceString(" = matchCase(");
    var string5667 = new GraceString("  Object matchres");
    var opresult5669 = callmethodChecked(string5667, "++(1)", [1], var_myc);
    var opresult5671 = callmethodChecked(opresult5669, "++(1)", [1], string5664);
    var opresult5673 = callmethodChecked(opresult5671, "++(1)", [1], var_matchee);
    var opresult5675 = callmethodChecked(opresult5673, "++(1)", [1], string5661);
    var opresult5677 = callmethodChecked(opresult5675, "++(1)", [1], call5659);
    var opresult5679 = callmethodChecked(opresult5677, "++(1)", [1], string5656);
    var opresult5681 = callmethodChecked(opresult5679, "++(1)", [1], opresult5654);
    // call case 4: self request
    onSelf = true;
    var call5682 = callmethodChecked(this, "out(1)", [1], opresult5681);
    setLineNumber(1166);    // compilenode string
    var string5684 = new GraceString(");");
    var string5687 = new GraceString("  gc_frame_end(frame");
    var opresult5689 = callmethodChecked(string5687, "++(1)", [1], var_myc);
    var opresult5691 = callmethodChecked(opresult5689, "++(1)", [1], string5684);
    // call case 4: self request
    onSelf = true;
    var call5692 = callmethodChecked(this, "out(1)", [1], opresult5691);
    setLineNumber(1167);    // compilenode string
    var string5695 = new GraceString("matchres");
    var opresult5697 = callmethodChecked(string5695, "++(1)", [1], var_myc);
    // call case 6: other requests
    var call5698 = callmethodChecked(var_o, "register:=(1)", [1], opresult5697);
    return call5698;
  };
  func5537.paramCounts = [1];
  this.methods["compilematchcase(1)"] = func5537;
  func5537.definitionLine = 1136;
  func5537.definitionModule = "genc";
  setLineNumber(1169);    // compilenode method
  var func5699 = function(argcv) {    // method compileop(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(1170);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(1171);    // compilenode identifier
    var opresult5702 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult5702;
    setLineNumber(1172);    // compilenode member
    // call case 6: other requests
    var call5705 = callmethodChecked(var_o, "right", []);
    // call case 4: self request
    onSelf = true;
    var call5706 = callmethodChecked(this, "compilenode(1)", [1], call5705);
    var var_right = call5706;
    setLineNumber(1173);    // compilenode string
    var string5708 = new GraceString(");");
    var string5711 = new GraceString(" = gc_frame_newslot(");
    var string5714 = new GraceString("  int op_slot_right_");
    var opresult5716 = callmethodChecked(string5714, "++(1)", [1], var_myc);
    var opresult5718 = callmethodChecked(opresult5716, "++(1)", [1], string5711);
    var opresult5720 = callmethodChecked(opresult5718, "++(1)", [1], var_right);
    var opresult5722 = callmethodChecked(opresult5720, "++(1)", [1], string5708);
    // call case 4: self request
    onSelf = true;
    var call5723 = callmethodChecked(this, "out(1)", [1], opresult5722);
    setLineNumber(1174);    // compilenode identifier
    var opresult5726 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult5726;
    var if5727 = GraceDone;
    setLineNumber(1175);    // compilenode block
    var block5728 = new GraceBlock(this, 1175, 0);
    block5728.real = function() {
      var string5729 = new GraceString("super");
      // call case 6: other requests
      // call case 6: other requests
      var call5733 = callmethodChecked(var_o, "left", []);
      var call5734 = callmethodChecked(call5733, "value", []);
      var opresult5736 = callmethodChecked(call5734, "==(1)", [1], string5729);
      return opresult5736;
    };
    var string5738 = new GraceString("identifier");
    // call case 6: other requests
    // call case 6: other requests
    var call5742 = callmethodChecked(var_o, "left", []);
    var call5743 = callmethodChecked(call5742, "kind", []);
    var opresult5745 = callmethodChecked(call5743, "==(1)", [1], string5738);
    var opresult5747 = callmethodChecked(opresult5745, "&&(1)", [1], block5728);
    if (Grace_isTrue(opresult5747)) {
      setLineNumber(1176);    // compilenode member
      // call case 6: other requests
      var call5750 = callmethodChecked(var_o, "nameString", []);
      // call case 4: self request
      onSelf = true;
      var call5751 = callmethodChecked(this, "escapestring2(1)", [1], call5750);
      var var_evl = call5751;
      setLineNumber(1177);    // compilenode string
      var string5753 = new GraceString(";");
      var string5756 = new GraceString("  params[0] = ");
      var opresult5758 = callmethodChecked(string5756, "++(1)", [1], var_right);
      var opresult5760 = callmethodChecked(opresult5758, "++(1)", [1], string5753);
      // call case 4: self request
      onSelf = true;
      var call5761 = callmethodChecked(this, "out(1)", [1], opresult5760);
      setLineNumber(1178);    // compilenode string
      var string5763 = new GraceString("  partcv[0] = 1;");
      // call case 4: self request
      onSelf = true;
      var call5764 = callmethodChecked(this, "out(1)", [1], string5763);
      setLineNumber(1181);    // compilenode string
      var string5766 = new GraceString("CFLAG_SELF);");
      setLineNumber(1180);    // compilenode string
      var string5768 = new GraceString("\", 1, partcv, params, ((flags >> 24) & 0xff) + 1,");
      var string5771 = new GraceString("\"");
      var opresult5773 = callmethodChecked(string5771, "++(1)", [1], var_evl);
      var opresult5775 = callmethodChecked(opresult5773, "++(1)", [1], string5768);
      setLineNumber(1179);    // compilenode string
      var string5777 = new GraceString(" = callmethod4(self, ");
      var string5780 = new GraceString("  Object opresult");
      var opresult5782 = callmethodChecked(string5780, "++(1)", [1], var_myc);
      var opresult5784 = callmethodChecked(opresult5782, "++(1)", [1], string5777);
      var opresult5786 = callmethodChecked(opresult5784, "++(1)", [1], opresult5775);
      var opresult5788 = callmethodChecked(opresult5786, "++(1)", [1], string5766);
      // call case 4: self request
      onSelf = true;
      var call5789 = callmethodChecked(this, "out(1)", [1], opresult5788);
      setLineNumber(1182);    // compilenode string
      var string5791 = new GraceString("");
      var string5794 = new GraceString("opresult");
      var opresult5796 = callmethodChecked(string5794, "++(1)", [1], var_myc);
      var opresult5798 = callmethodChecked(opresult5796, "++(1)", [1], string5791);
      // call case 6: other requests
      var call5799 = callmethodChecked(var_o, "register:=(1)", [1], opresult5798);
      setLineNumber(1183);    // compilenode identifier
      return GraceTrue;
    }
    setLineNumber(1185);    // compilenode member
    // call case 6: other requests
    var call5802 = callmethodChecked(var_o, "left", []);
    // call case 4: self request
    onSelf = true;
    var call5803 = callmethodChecked(this, "compilenode(1)", [1], call5802);
    var var_left = call5803;
    setLineNumber(1186);    // compilenode string
    var string5805 = new GraceString(");");
    var string5808 = new GraceString(" = gc_frame_newslot(");
    var string5811 = new GraceString("  int op_slot_left_");
    var opresult5813 = callmethodChecked(string5811, "++(1)", [1], var_myc);
    var opresult5815 = callmethodChecked(opresult5813, "++(1)", [1], string5808);
    var opresult5817 = callmethodChecked(opresult5815, "++(1)", [1], var_left);
    var opresult5819 = callmethodChecked(opresult5817, "++(1)", [1], string5805);
    // call case 4: self request
    onSelf = true;
    var call5820 = callmethodChecked(this, "out(1)", [1], opresult5819);
    var if5821 = GraceDone;
    setLineNumber(1188);    // compilenode string
    var string5822 = new GraceString("%");
    // call case 6: other requests
    var call5825 = callmethodChecked(var_o, "value", []);
    var opresult5827 = callmethodChecked(call5825, "==(1)", [1], string5822);
    var string5829 = new GraceString("-");
    // call case 6: other requests
    var call5832 = callmethodChecked(var_o, "value", []);
    var opresult5834 = callmethodChecked(call5832, "==(1)", [1], string5829);
    setLineNumber(1187);    // compilenode string
    var string5836 = new GraceString("/");
    // call case 6: other requests
    var call5839 = callmethodChecked(var_o, "value", []);
    var opresult5841 = callmethodChecked(call5839, "==(1)", [1], string5836);
    var string5843 = new GraceString("*");
    // call case 6: other requests
    var call5846 = callmethodChecked(var_o, "value", []);
    var opresult5848 = callmethodChecked(call5846, "==(1)", [1], string5843);
    var string5850 = new GraceString("+");
    // call case 6: other requests
    var call5853 = callmethodChecked(var_o, "value", []);
    var opresult5855 = callmethodChecked(call5853, "==(1)", [1], string5850);
    var opresult5857 = callmethodChecked(opresult5855, "||(1)", [1], opresult5848);
    var opresult5859 = callmethodChecked(opresult5857, "||(1)", [1], opresult5841);
    var opresult5861 = callmethodChecked(opresult5859, "||(1)", [1], opresult5834);
    var opresult5863 = callmethodChecked(opresult5861, "||(1)", [1], opresult5827);
    if (Grace_isTrue(opresult5863)) {
      setLineNumber(1189);    // compilenode string
      var string5864 = new GraceString("sum");
      var var_rnm = string5864;
      var if5865 = GraceDone;
      setLineNumber(1190);    // compilenode string
      var string5866 = new GraceString("*");
      // call case 6: other requests
      var call5869 = callmethodChecked(var_o, "value", []);
      var opresult5871 = callmethodChecked(call5869, "==(1)", [1], string5866);
      if (Grace_isTrue(opresult5871)) {
        setLineNumber(1191);    // compilenode string
        var string5872 = new GraceString("prod");
        var_rnm = string5872;
        if5865 = GraceDone;
      }
      var if5873 = GraceDone;
      setLineNumber(1193);    // compilenode string
      var string5874 = new GraceString("/");
      // call case 6: other requests
      var call5877 = callmethodChecked(var_o, "value", []);
      var opresult5879 = callmethodChecked(call5877, "==(1)", [1], string5874);
      if (Grace_isTrue(opresult5879)) {
        setLineNumber(1194);    // compilenode string
        var string5880 = new GraceString("quotient");
        var_rnm = string5880;
        if5873 = GraceDone;
      }
      var if5881 = GraceDone;
      setLineNumber(1196);    // compilenode string
      var string5882 = new GraceString("-");
      // call case 6: other requests
      var call5885 = callmethodChecked(var_o, "value", []);
      var opresult5887 = callmethodChecked(call5885, "==(1)", [1], string5882);
      if (Grace_isTrue(opresult5887)) {
        setLineNumber(1197);    // compilenode string
        var string5888 = new GraceString("diff");
        var_rnm = string5888;
        if5881 = GraceDone;
      }
      var if5889 = GraceDone;
      setLineNumber(1199);    // compilenode string
      var string5890 = new GraceString("%");
      // call case 6: other requests
      var call5893 = callmethodChecked(var_o, "value", []);
      var opresult5895 = callmethodChecked(call5893, "==(1)", [1], string5890);
      if (Grace_isTrue(opresult5895)) {
        setLineNumber(1200);    // compilenode string
        var string5896 = new GraceString("modulus");
        var_rnm = string5896;
        if5889 = GraceDone;
      }
      setLineNumber(1202);    // compilenode string
      var string5898 = new GraceString(";");
      var string5901 = new GraceString("  params[0] = ");
      var opresult5903 = callmethodChecked(string5901, "++(1)", [1], var_right);
      var opresult5905 = callmethodChecked(opresult5903, "++(1)", [1], string5898);
      // call case 4: self request
      onSelf = true;
      var call5906 = callmethodChecked(this, "out(1)", [1], opresult5905);
      setLineNumber(1203);    // compilenode string
      var string5908 = new GraceString("  partcv[0] = 1;");
      // call case 4: self request
      onSelf = true;
      var call5909 = callmethodChecked(this, "out(1)", [1], string5908);
      setLineNumber(1205);    // compilenode string
      var string5911 = new GraceString("1, partcv, params);");
      setLineNumber(1204);    // compilenode string
      var string5913 = new GraceString("\", ");
      // call case 6: other requests
      var call5916 = callmethodChecked(var_o, "nameString", []);
      var string5918 = new GraceString(", \"");
      var string5921 = new GraceString(" = callmethod(");
      var string5924 = new GraceString("");
      var string5927 = new GraceString("  Object ");
      var opresult5929 = callmethodChecked(string5927, "++(1)", [1], var_rnm);
      var opresult5931 = callmethodChecked(opresult5929, "++(1)", [1], string5924);
      var opresult5933 = callmethodChecked(opresult5931, "++(1)", [1], var_auto__95__count);
      var opresult5935 = callmethodChecked(opresult5933, "++(1)", [1], string5921);
      var opresult5937 = callmethodChecked(opresult5935, "++(1)", [1], var_left);
      var opresult5939 = callmethodChecked(opresult5937, "++(1)", [1], string5918);
      var opresult5941 = callmethodChecked(opresult5939, "++(1)", [1], call5916);
      var opresult5943 = callmethodChecked(opresult5941, "++(1)", [1], string5913);
      var opresult5945 = callmethodChecked(opresult5943, "++(1)", [1], string5911);
      // call case 4: self request
      onSelf = true;
      var call5946 = callmethodChecked(this, "out(1)", [1], opresult5945);
      setLineNumber(1206);    // compilenode identifier
      var opresult5950 = callmethodChecked(var_rnm, "++(1)", [1], var_auto__95__count);
      // call case 6: other requests
      var call5951 = callmethodChecked(var_o, "register:=(1)", [1], opresult5950);
      setLineNumber(1207);    // compilenode identifier
      var opresult5954 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
      var_auto__95__count = opresult5954;
      if5821 = GraceDone;
    } else {
      setLineNumber(1209);    // compilenode string
      var string5956 = new GraceString(";");
      var string5959 = new GraceString("  params[0] = ");
      var opresult5961 = callmethodChecked(string5959, "++(1)", [1], var_right);
      var opresult5963 = callmethodChecked(opresult5961, "++(1)", [1], string5956);
      // call case 4: self request
      onSelf = true;
      var call5964 = callmethodChecked(this, "out(1)", [1], opresult5963);
      setLineNumber(1210);    // compilenode string
      var string5966 = new GraceString("  partcv[0] = 1;");
      // call case 4: self request
      onSelf = true;
      var call5967 = callmethodChecked(this, "out(1)", [1], string5966);
      setLineNumber(1212);    // compilenode string
      var string5969 = new GraceString("\", 1, partcv, params);");
      // call case 6: other requests
      // call case 6: other requests
      var call5973 = callmethodChecked(var_o, "nameString", []);
      var call5974 = callmethodChecked(call5973, "quoted", []);
      var string5976 = new GraceString(", \"");
      var string5979 = new GraceString("callmethod(");
      var opresult5981 = callmethodChecked(string5979, "++(1)", [1], var_left);
      var opresult5983 = callmethodChecked(opresult5981, "++(1)", [1], string5976);
      var opresult5985 = callmethodChecked(opresult5983, "++(1)", [1], call5974);
      var opresult5987 = callmethodChecked(opresult5985, "++(1)", [1], string5969);
      setLineNumber(1211);    // compilenode string
      var string5989 = new GraceString(" = ");
      var string5992 = new GraceString("  Object opresult");
      var opresult5994 = callmethodChecked(string5992, "++(1)", [1], var_auto__95__count);
      var opresult5996 = callmethodChecked(opresult5994, "++(1)", [1], string5989);
      var opresult5998 = callmethodChecked(opresult5996, "++(1)", [1], opresult5987);
      // call case 4: self request
      onSelf = true;
      var call5999 = callmethodChecked(this, "out(1)", [1], opresult5998);
      setLineNumber(1213);    // compilenode string
      var string6002 = new GraceString("opresult");
      var opresult6004 = callmethodChecked(string6002, "++(1)", [1], var_auto__95__count);
      // call case 6: other requests
      var call6005 = callmethodChecked(var_o, "register:=(1)", [1], opresult6004);
      setLineNumber(1214);    // compilenode identifier
      var opresult6008 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
      var_auto__95__count = opresult6008;
      if5821 = GraceDone;
    }
    return if5821;
  };
  func5699.paramCounts = [1];
  this.methods["compileop(1)"] = func5699;
  func5699.definitionLine = 1169;
  func5699.definitionModule = "genc";
  setLineNumber(1217);    // compilenode method
  var func6009 = function(argcv) {    // method compileArguments(_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_args = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(1218);    // compilenode num
    var var_i = new GraceNum(0);
    setLineNumber(1219);    // compilenode member
    // call case 6: other requests
    var call6012 = callmethodChecked(var_o, "with", []);
    var block6013 = new GraceBlock(this, 1219, 1);
    setLineNumber(1);    // compilenode identifier
    block6013.real = function(var_part) {
      setLineNumber(1220);    // compilenode member
      // call case 6: other requests
      var call6016 = callmethodChecked(var_part, "args", []);
      var block6017 = new GraceBlock(this, 1220, 1);
      setLineNumber(1);    // compilenode identifier
      block6017.real = function(var_p) {
        setLineNumber(1221);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call6019 = callmethodChecked(this, "compilenode(1)", [1], var_p);
        var var_r = call6019;
        setLineNumber(1222);    // compilenode identifier
        // call case 6: other requests
        var call6021 = callmethodChecked(var_args, "push(1)", [1], var_r);
        setLineNumber(1223);    // compilenode string
        var string6023 = new GraceString(");");
        var string6026 = new GraceString("  gc_frame_newslot(");
        var opresult6028 = callmethodChecked(string6026, "++(1)", [1], var_r);
        var opresult6030 = callmethodChecked(opresult6028, "++(1)", [1], string6023);
        // call case 4: self request
        onSelf = true;
        var call6031 = callmethodChecked(this, "out(1)", [1], opresult6030);
        return call6031;
      };
      // call case 5: prelude request
      var call6032 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call6016, block6017);
      return call6032;
    };
    // call case 5: prelude request
    var call6033 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call6012, block6013);
    var if6034 = GraceDone;
    setLineNumber(1226);    // compilenode member
    // call case 6: other requests
    var call6037 = callmethodChecked(var_args, "size", []);
    var opresult6039 = callmethodChecked(call6037, ">(1)", [1], var_paramsUsed);
    if (Grace_isTrue(opresult6039)) {
      setLineNumber(1227);    // compilenode member
      // call case 6: other requests
      var call6041 = callmethodChecked(var_args, "size", []);
      var_paramsUsed = call6041;
      if6034 = GraceDone;
    }
    var if6042 = GraceDone;
    setLineNumber(1229);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call6046 = callmethodChecked(var_o, "with", []);
    var call6047 = callmethodChecked(call6046, "size", []);
    var opresult6049 = callmethodChecked(call6047, ">(1)", [1], var_partsUsed);
    if (Grace_isTrue(opresult6049)) {
      setLineNumber(1230);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call6052 = callmethodChecked(var_o, "with", []);
      var call6053 = callmethodChecked(call6052, "size", []);
      var_partsUsed = call6053;
      if6042 = GraceDone;
    }
    setLineNumber(1232);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call6056 = callmethodChecked(var_o, "with", []);
    var call6057 = callmethodChecked(call6056, "size", []);
    var var_nparts = call6057;
    var if6058 = GraceDone;
    setLineNumber(1233);    // compilenode member
    // call case 6: other requests
    var call6060 = callmethodChecked(var_o, "generics", []);
    var opresult6063 = callmethodChecked(GraceFalse, "\u2260(1)", [1], call6060);
    if (Grace_isTrue(opresult6063)) {
      var if6064 = GraceDone;
      setLineNumber(1234);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call6067 = callmethodChecked(var_o, "with", []);
      var call6068 = callmethodChecked(call6067, "size", []);
      var opresult6071 = callmethodChecked(var_partsUsed, "==(1)", [1], call6068);
      if (Grace_isTrue(opresult6071)) {
        setLineNumber(1235);    // compilenode identifier
        var opresult6074 = callmethodChecked(var_partsUsed, "+(1)", [1], new GraceNum(1));
        var_partsUsed = opresult6074;
        if6064 = GraceDone;
      }
      var if6075 = GraceDone;
      setLineNumber(1237);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call6078 = callmethodChecked(var_o, "generics", []);
      var call6079 = callmethodChecked(call6078, "size", []);
      // call case 6: other requests
      var call6082 = callmethodChecked(var_args, "size", []);
      var opresult6084 = callmethodChecked(call6082, "+(1)", [1], call6079);
      var opresult6087 = callmethodChecked(var_paramsUsed, "<(1)", [1], opresult6084);
      if (Grace_isTrue(opresult6087)) {
        setLineNumber(1238);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call6090 = callmethodChecked(var_o, "generics", []);
        var call6091 = callmethodChecked(call6090, "size", []);
        var opresult6094 = callmethodChecked(var_paramsUsed, "+(1)", [1], call6091);
        var_paramsUsed = opresult6094;
        if6075 = GraceDone;
      }
      setLineNumber(1240);    // compilenode identifier
      var opresult6097 = callmethodChecked(var_nparts, "+(1)", [1], new GraceNum(1));
      var_nparts = opresult6097;
      setLineNumber(1241);    // compilenode string
      var string6099 = new GraceString(";");
      // call case 6: other requests
      // call case 6: other requests
      var call6103 = callmethodChecked(var_o, "generics", []);
      var call6104 = callmethodChecked(call6103, "size", []);
      var string6106 = new GraceString("] = ");
      // call case 6: other requests
      // call case 6: other requests
      var call6110 = callmethodChecked(var_o, "with", []);
      var call6111 = callmethodChecked(call6110, "size", []);
      var string6113 = new GraceString("  partcv[");
      var opresult6115 = callmethodChecked(string6113, "++(1)", [1], call6111);
      var opresult6117 = callmethodChecked(opresult6115, "++(1)", [1], string6106);
      var opresult6119 = callmethodChecked(opresult6117, "++(1)", [1], call6104);
      var opresult6121 = callmethodChecked(opresult6119, "++(1)", [1], string6099);
      // call case 4: self request
      onSelf = true;
      var call6122 = callmethodChecked(this, "out(1)", [1], opresult6121);
      setLineNumber(1242);    // compilenode member
      // call case 6: other requests
      var call6124 = callmethodChecked(var_args, "size", []);
      var_i = call6124;
      setLineNumber(1243);    // compilenode block
      var block6126 = new GraceBlock(this, 1243, 1);
      setLineNumber(1);    // compilenode identifier
      block6126.real = function(var_g) {
        setLineNumber(1244);    // compilenode string
        var string6128 = new GraceString(";");
        // call case 4: self request
        onSelf = true;
        var call6131 = callmethodChecked(this, "compilenode(1)", [1], var_g);
        var string6133 = new GraceString("] = ");
        var string6136 = new GraceString("  params[");
        var opresult6138 = callmethodChecked(string6136, "++(1)", [1], var_i);
        var opresult6140 = callmethodChecked(opresult6138, "++(1)", [1], string6133);
        var opresult6142 = callmethodChecked(opresult6140, "++(1)", [1], call6131);
        var opresult6144 = callmethodChecked(opresult6142, "++(1)", [1], string6128);
        // call case 4: self request
        onSelf = true;
        var call6145 = callmethodChecked(this, "out(1)", [1], opresult6144);
        setLineNumber(1245);    // compilenode identifier
        var opresult6148 = callmethodChecked(var_i, "+(1)", [1], new GraceNum(1));
        var_i = opresult6148;
        return GraceDone;
      };
      // call case 6: other requests
      setLineNumber(1243);    // compilenode member
      // call case 6: other requests
      var call6150 = callmethodChecked(var_o, "generics", []);
      var call6151 = callmethodChecked(call6150, "do(1)", [1], block6126);
      setLineNumber(1247);    // compilenode num
      var_i = new GraceNum(0);
      if6058 = GraceDone;
    }
    setLineNumber(1249);    // compilenode identifier
    return var_nparts;
  };
  func6009.paramCounts = [2];
  this.methods["compileArguments(2)"] = func6009;
  func6009.definitionLine = 1217;
  func6009.definitionModule = "genc";
  setLineNumber(1251);    // compilenode method
  var func6152 = function(argcv) {    // method assembleArguments(_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_args = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(1252);    // compilenode num
    var var_i = new GraceNum(0);
    setLineNumber(1253);    // compilenode block
    var block6154 = new GraceBlock(this, 1253, 1);
    setLineNumber(1);    // compilenode identifier
    block6154.real = function(var_arg) {
      setLineNumber(1254);    // compilenode string
      var string6156 = new GraceString(";");
      var string6159 = new GraceString("] = ");
      var string6162 = new GraceString("  params[");
      var opresult6164 = callmethodChecked(string6162, "++(1)", [1], var_i);
      var opresult6166 = callmethodChecked(opresult6164, "++(1)", [1], string6159);
      var opresult6168 = callmethodChecked(opresult6166, "++(1)", [1], var_arg);
      var opresult6170 = callmethodChecked(opresult6168, "++(1)", [1], string6156);
      // call case 4: self request
      onSelf = true;
      var call6171 = callmethodChecked(this, "out(1)", [1], opresult6170);
      setLineNumber(1255);    // compilenode identifier
      var opresult6174 = callmethodChecked(var_i, "+(1)", [1], new GraceNum(1));
      var_i = opresult6174;
      return GraceDone;
    };
    // call case 6: other requests
    setLineNumber(1253);    // compilenode identifier
    var call6175 = callmethodChecked(var_args, "do(1)", [1], block6154);
    setLineNumber(1257);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call6179 = callmethodChecked(var_o, "with", []);
    var call6180 = callmethodChecked(call6179, "indices", []);
    var block6181 = new GraceBlock(this, 1257, 1);
    setLineNumber(1);    // compilenode identifier
    block6181.real = function(var_partnr) {
      setLineNumber(1258);    // compilenode string
      var string6183 = new GraceString(";");
      // call case 6: other requests
      // call case 6: other requests
      // call case 6: other requests
      // call case 6: other requests
      var call6189 = callmethodChecked(var_o, "with", []);
      var call6190 = callmethodChecked(call6189, "at(1)", [1], var_partnr);
      var call6191 = callmethodChecked(call6190, "args", []);
      var call6192 = callmethodChecked(call6191, "size", []);
      var string6194 = new GraceString("] = ");
      var diff6198 = callmethodChecked(var_partnr, "-(1)", [1], new GraceNum(1));
      var string6200 = new GraceString("  partcv[");
      var opresult6202 = callmethodChecked(string6200, "++(1)", [1], diff6198);
      var opresult6204 = callmethodChecked(opresult6202, "++(1)", [1], string6194);
      var opresult6206 = callmethodChecked(opresult6204, "++(1)", [1], call6192);
      var opresult6208 = callmethodChecked(opresult6206, "++(1)", [1], string6183);
      // call case 4: self request
      onSelf = true;
      var call6209 = callmethodChecked(this, "out(1)", [1], opresult6208);
      return call6209;
    };
    // call case 5: prelude request
    var call6210 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call6180, block6181);
    return call6210;
  };
  func6152.paramCounts = [2];
  this.methods["assembleArguments(2)"] = func6152;
  func6152.definitionLine = 1251;
  func6152.definitionModule = "genc";
  setLineNumber(1261);    // compilenode method
  var func6211 = function(argcv) {    // method compileSuperRequest(_,_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_args = arguments[curarg];
    curarg++;
    var var_nparts = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(1262);    // compilenode string
    var string6213 = new GraceString("// call case 1: super request");
    // call case 4: self request
    onSelf = true;
    var call6214 = callmethodChecked(this, "out(1)", [1], string6213);
    setLineNumber(1263);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call6216 = callmethodChecked(this, "assembleArguments(2)", [2], var_o, var_args);
    setLineNumber(1264);    // compilenode member
    // call case 6: other requests
    var call6219 = callmethodChecked(var_o, "nameString", []);
    // call case 4: self request
    onSelf = true;
    var call6220 = callmethodChecked(this, "escapestring2(1)", [1], call6219);
    var var_escapedName = call6220;
    setLineNumber(1267);    // compilenode string
    var string6222 = new GraceString("CFLAG_SELF);");
    setLineNumber(1266);    // compilenode string
    var string6224 = new GraceString(", partcv, params, ((flags >> 24) & 0xff) + 1, ");
    var string6227 = new GraceString("");
    var opresult6229 = callmethodChecked(string6227, "++(1)", [1], var_nparts);
    var opresult6231 = callmethodChecked(opresult6229, "++(1)", [1], string6224);
    setLineNumber(1265);    // compilenode string
    var string6233 = new GraceString("\", ");
    var string6236 = new GraceString(" = callmethod4(self, \"");
    var string6239 = new GraceString("  Object call");
    var opresult6241 = callmethodChecked(string6239, "++(1)", [1], var_auto__95__count);
    var opresult6243 = callmethodChecked(opresult6241, "++(1)", [1], string6236);
    var opresult6245 = callmethodChecked(opresult6243, "++(1)", [1], var_escapedName);
    var opresult6247 = callmethodChecked(opresult6245, "++(1)", [1], string6233);
    var opresult6249 = callmethodChecked(opresult6247, "++(1)", [1], opresult6231);
    var opresult6251 = callmethodChecked(opresult6249, "++(1)", [1], string6222);
    // call case 4: self request
    onSelf = true;
    var call6252 = callmethodChecked(this, "out(1)", [1], opresult6251);
    return call6252;
  };
  func6211.paramCounts = [3];
  this.methods["compileSuperRequest(3)"] = func6211;
  func6211.definitionLine = 1261;
  func6211.definitionModule = "genc";
  setLineNumber(1269);    // compilenode method
  var func6253 = function(argcv) {    // method compileOuterRequest(_,_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_args = arguments[curarg];
    curarg++;
    var var_nparts = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(1270);    // compilenode string
    var string6255 = new GraceString("// call case 2: outer request");
    // call case 4: self request
    onSelf = true;
    var call6256 = callmethodChecked(this, "out(1)", [1], string6255);
    setLineNumber(1271);    // compilenode string
    var string6257 = new GraceString("");
    var string6260 = new GraceString("outer");
    var opresult6262 = callmethodChecked(string6260, "++(1)", [1], var_auto__95__count);
    var opresult6264 = callmethodChecked(opresult6262, "++(1)", [1], string6257);
    var var_ot = opresult6264;
    setLineNumber(1273);    // compilenode string
    var string6266 = new GraceString("0, 0, NULL, ((flags >> 24) & 0xff));");
    setLineNumber(1272);    // compilenode string
    var string6268 = new GraceString(" = callmethod3(self, \"outer\", ");
    var string6271 = new GraceString("  Object ");
    var opresult6273 = callmethodChecked(string6271, "++(1)", [1], var_ot);
    var opresult6275 = callmethodChecked(opresult6273, "++(1)", [1], string6268);
    var opresult6277 = callmethodChecked(opresult6275, "++(1)", [1], string6266);
    // call case 4: self request
    onSelf = true;
    var call6278 = callmethodChecked(this, "out(1)", [1], opresult6277);
    setLineNumber(1274);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call6280 = callmethodChecked(this, "assembleArguments(2)", [2], var_o, var_args);
    setLineNumber(1275);    // compilenode member
    // call case 6: other requests
    var call6283 = callmethodChecked(var_o, "nameString", []);
    // call case 4: self request
    onSelf = true;
    var call6284 = callmethodChecked(this, "escapestring2(1)", [1], call6283);
    var var_escapedName = call6284;
    setLineNumber(1277);    // compilenode string
    var string6286 = new GraceString(", partcv, params, CFLAG_SELF);");
    var string6289 = new GraceString("");
    var opresult6291 = callmethodChecked(string6289, "++(1)", [1], var_nparts);
    var opresult6293 = callmethodChecked(opresult6291, "++(1)", [1], string6286);
    setLineNumber(1276);    // compilenode string
    var string6295 = new GraceString("\", ");
    var string6298 = new GraceString(", \"");
    var string6301 = new GraceString(" = callmethodflags(");
    var string6304 = new GraceString("  Object call");
    var opresult6306 = callmethodChecked(string6304, "++(1)", [1], var_auto__95__count);
    var opresult6308 = callmethodChecked(opresult6306, "++(1)", [1], string6301);
    var opresult6310 = callmethodChecked(opresult6308, "++(1)", [1], var_ot);
    var opresult6312 = callmethodChecked(opresult6310, "++(1)", [1], string6298);
    var opresult6314 = callmethodChecked(opresult6312, "++(1)", [1], var_escapedName);
    var opresult6316 = callmethodChecked(opresult6314, "++(1)", [1], string6295);
    var opresult6318 = callmethodChecked(opresult6316, "++(1)", [1], opresult6293);
    // call case 4: self request
    onSelf = true;
    var call6319 = callmethodChecked(this, "out(1)", [1], opresult6318);
    return call6319;
  };
  func6253.paramCounts = [3];
  this.methods["compileOuterRequest(3)"] = func6253;
  func6253.definitionLine = 1269;
  func6253.definitionModule = "genc";
  setLineNumber(1279);    // compilenode method
  var func6320 = function(argcv) {    // method compileSelfOuterRequest(_,_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_args = arguments[curarg];
    curarg++;
    var var_nparts = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(1280);    // compilenode string
    var string6322 = new GraceString("// call case 3: self.outer request");
    // call case 4: self request
    onSelf = true;
    var call6323 = callmethodChecked(this, "out(1)", [1], string6322);
    setLineNumber(1282);    // compilenode string
    var string6325 = new GraceString("0, 0, NULL, ((flags >> 24) & 0xff));");
    setLineNumber(1281);    // compilenode string
    var string6327 = new GraceString(" = callmethod3(self, \"outer\", ");
    var string6330 = new GraceString("  Object call");
    var opresult6332 = callmethodChecked(string6330, "++(1)", [1], var_auto__95__count);
    var opresult6334 = callmethodChecked(opresult6332, "++(1)", [1], string6327);
    var opresult6336 = callmethodChecked(opresult6334, "++(1)", [1], string6325);
    // call case 4: self request
    onSelf = true;
    var call6337 = callmethodChecked(this, "out(1)", [1], opresult6336);
    return call6337;
  };
  func6320.paramCounts = [3];
  this.methods["compileSelfOuterRequest(3)"] = func6320;
  func6320.definitionLine = 1279;
  func6320.definitionModule = "genc";
  setLineNumber(1284);    // compilenode method
  var func6338 = function(argcv) {    // method compileSelfRequest(_,_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_args = arguments[curarg];
    curarg++;
    var var_nparts = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(1285);    // compilenode string
    var string6340 = new GraceString("// call case 4: self request");
    // call case 4: self request
    onSelf = true;
    var call6341 = callmethodChecked(this, "out(1)", [1], string6340);
    setLineNumber(1286);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call6343 = callmethodChecked(this, "assembleArguments(2)", [2], var_o, var_args);
    setLineNumber(1287);    // compilenode member
    // call case 6: other requests
    var call6346 = callmethodChecked(var_o, "nameString", []);
    // call case 4: self request
    onSelf = true;
    var call6347 = callmethodChecked(this, "escapestring2(1)", [1], call6346);
    var var_escapedName = call6347;
    setLineNumber(1289);    // compilenode string
    var string6349 = new GraceString(", partcv, params, CFLAG_SELF);");
    var string6352 = new GraceString("");
    var opresult6354 = callmethodChecked(string6352, "++(1)", [1], var_nparts);
    var opresult6356 = callmethodChecked(opresult6354, "++(1)", [1], string6349);
    setLineNumber(1288);    // compilenode string
    var string6358 = new GraceString("\", ");
    var string6361 = new GraceString(" = callmethodflags(self, \"");
    var string6364 = new GraceString("  Object call");
    var opresult6366 = callmethodChecked(string6364, "++(1)", [1], var_auto__95__count);
    var opresult6368 = callmethodChecked(opresult6366, "++(1)", [1], string6361);
    var opresult6370 = callmethodChecked(opresult6368, "++(1)", [1], var_escapedName);
    var opresult6372 = callmethodChecked(opresult6370, "++(1)", [1], string6358);
    var opresult6374 = callmethodChecked(opresult6372, "++(1)", [1], opresult6356);
    // call case 4: self request
    onSelf = true;
    var call6375 = callmethodChecked(this, "out(1)", [1], opresult6374);
    return call6375;
  };
  func6338.paramCounts = [3];
  this.methods["compileSelfRequest(3)"] = func6338;
  func6338.definitionLine = 1284;
  func6338.definitionModule = "genc";
  setLineNumber(1291);    // compilenode method
  var func6376 = function(argcv) {    // method compilePreludeRequest(_,_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_args = arguments[curarg];
    curarg++;
    var var_nparts = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(1292);    // compilenode string
    var string6378 = new GraceString("// call case 5: prelude request");
    // call case 4: self request
    onSelf = true;
    var call6379 = callmethodChecked(this, "out(1)", [1], string6378);
    setLineNumber(1293);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call6381 = callmethodChecked(this, "assembleArguments(2)", [2], var_o, var_args);
    setLineNumber(1294);    // compilenode member
    // call case 6: other requests
    var call6384 = callmethodChecked(var_o, "nameString", []);
    // call case 4: self request
    onSelf = true;
    var call6385 = callmethodChecked(this, "escapestring2(1)", [1], call6384);
    var var_escapedName = call6385;
    setLineNumber(1296);    // compilenode string
    var string6387 = new GraceString(", partcv, params, CFLAG_SELF);");
    var string6390 = new GraceString("");
    var opresult6392 = callmethodChecked(string6390, "++(1)", [1], var_nparts);
    var opresult6394 = callmethodChecked(opresult6392, "++(1)", [1], string6387);
    setLineNumber(1295);    // compilenode string
    var string6396 = new GraceString("\", ");
    var string6399 = new GraceString(" = callmethodflags(prelude, \"");
    var string6402 = new GraceString("  Object call");
    var opresult6404 = callmethodChecked(string6402, "++(1)", [1], var_auto__95__count);
    var opresult6406 = callmethodChecked(opresult6404, "++(1)", [1], string6399);
    var opresult6408 = callmethodChecked(opresult6406, "++(1)", [1], var_escapedName);
    var opresult6410 = callmethodChecked(opresult6408, "++(1)", [1], string6396);
    var opresult6412 = callmethodChecked(opresult6410, "++(1)", [1], opresult6394);
    // call case 4: self request
    onSelf = true;
    var call6413 = callmethodChecked(this, "out(1)", [1], opresult6412);
    return call6413;
  };
  func6376.paramCounts = [3];
  this.methods["compilePreludeRequest(3)"] = func6376;
  func6376.definitionLine = 1291;
  func6376.definitionModule = "genc";
  setLineNumber(1298);    // compilenode method
  var func6414 = function(argcv) {    // method compileOtherRequest(_,_,_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_args = arguments[curarg];
    curarg++;
    var var_nparts = arguments[curarg];
    curarg++;
    var var_tailcall = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(1299);    // compilenode string
    var string6416 = new GraceString("// call case 6: other requests");
    // call case 4: self request
    onSelf = true;
    var call6417 = callmethodChecked(this, "out(1)", [1], string6416);
    setLineNumber(1300);    // compilenode member
    // call case 6: other requests
    var call6420 = callmethodChecked(var_o, "receiver", []);
    // call case 4: self request
    onSelf = true;
    var call6421 = callmethodChecked(this, "compilenode(1)", [1], call6420);
    var var_target = call6421;
    setLineNumber(1301);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call6423 = callmethodChecked(this, "assembleArguments(2)", [2], var_o, var_args);
    setLineNumber(1302);    // compilenode member
    // call case 6: other requests
    var call6426 = callmethodChecked(var_o, "nameString", []);
    // call case 4: self request
    onSelf = true;
    var call6427 = callmethodChecked(this, "escapestring2(1)", [1], call6426);
    var var_escapedName = call6427;
    var if6428 = GraceDone;
    setLineNumber(1303);    // compilenode member
    // call case 6: other requests
    var call6430 = callmethodChecked(var_o, "isSelfRequest", []);
    if (Grace_isTrue(call6430)) {
      var string6431 = new GraceString("CFLAG_SELF");
      if6428 = string6431;
    } else {
      var string6432 = new GraceString("0");
      if6428 = string6432;
    }
    var var_callFlags = if6428;
    var if6433 = GraceDone;
    setLineNumber(1304);    // compilenode identifier
    if (Grace_isTrue(var_tailcall)) {
      setLineNumber(1306);    // compilenode string
      var string6435 = new GraceString(");");
      var string6438 = new GraceString(", partcv, params, ");
      var string6441 = new GraceString(" ");
      var opresult6443 = callmethodChecked(string6441, "++(1)", [1], var_nparts);
      var opresult6445 = callmethodChecked(opresult6443, "++(1)", [1], string6438);
      var opresult6447 = callmethodChecked(opresult6445, "++(1)", [1], var_callFlags);
      var opresult6449 = callmethodChecked(opresult6447, "++(1)", [1], string6435);
      setLineNumber(1305);    // compilenode string
      var string6451 = new GraceString("\",");
      var string6454 = new GraceString(", \"");
      var string6457 = new GraceString(" = tailcall(");
      var string6460 = new GraceString("  Object call");
      var opresult6462 = callmethodChecked(string6460, "++(1)", [1], var_auto__95__count);
      var opresult6464 = callmethodChecked(opresult6462, "++(1)", [1], string6457);
      var opresult6466 = callmethodChecked(opresult6464, "++(1)", [1], var_target);
      var opresult6468 = callmethodChecked(opresult6466, "++(1)", [1], string6454);
      var opresult6470 = callmethodChecked(opresult6468, "++(1)", [1], var_escapedName);
      var opresult6472 = callmethodChecked(opresult6470, "++(1)", [1], string6451);
      var opresult6474 = callmethodChecked(opresult6472, "++(1)", [1], opresult6449);
      // call case 4: self request
      onSelf = true;
      var call6475 = callmethodChecked(this, "out(1)", [1], opresult6474);
      if6433 = call6475;
    } else {
      setLineNumber(1309);    // compilenode string
      var string6477 = new GraceString(");");
      var string6480 = new GraceString(", partcv, params, ");
      var string6483 = new GraceString(" ");
      var opresult6485 = callmethodChecked(string6483, "++(1)", [1], var_nparts);
      var opresult6487 = callmethodChecked(opresult6485, "++(1)", [1], string6480);
      var opresult6489 = callmethodChecked(opresult6487, "++(1)", [1], var_callFlags);
      var opresult6491 = callmethodChecked(opresult6489, "++(1)", [1], string6477);
      setLineNumber(1308);    // compilenode string
      var string6493 = new GraceString("\",");
      var string6496 = new GraceString(", \"");
      var string6499 = new GraceString(" = callmethodflags(");
      var string6502 = new GraceString("  Object call");
      var opresult6504 = callmethodChecked(string6502, "++(1)", [1], var_auto__95__count);
      var opresult6506 = callmethodChecked(opresult6504, "++(1)", [1], string6499);
      var opresult6508 = callmethodChecked(opresult6506, "++(1)", [1], var_target);
      var opresult6510 = callmethodChecked(opresult6508, "++(1)", [1], string6496);
      var opresult6512 = callmethodChecked(opresult6510, "++(1)", [1], var_escapedName);
      var opresult6514 = callmethodChecked(opresult6512, "++(1)", [1], string6493);
      var opresult6516 = callmethodChecked(opresult6514, "++(1)", [1], opresult6491);
      // call case 4: self request
      onSelf = true;
      var call6517 = callmethodChecked(this, "out(1)", [1], opresult6516);
      if6433 = call6517;
    }
    return if6433;
  };
  func6414.paramCounts = [4];
  this.methods["compileOtherRequest(4)"] = func6414;
  func6414.definitionLine = 1298;
  func6414.definitionModule = "genc";
  setLineNumber(1312);    // compilenode method
  var func6518 = function(argcv) {    // method compilecall(_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_tailcall = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(1313);    // compilenode identifier
    var var_myc = var_auto__95__count;
    setLineNumber(1314);    // compilenode identifier
    var opresult6521 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult6521;
    setLineNumber(1315);    // compilenode string
    var string6523 = new GraceString(" = gc_frame_new();");
    var string6526 = new GraceString("  int callframe");
    var opresult6528 = callmethodChecked(string6526, "++(1)", [1], var_myc);
    var opresult6530 = callmethodChecked(opresult6528, "++(1)", [1], string6523);
    // call case 4: self request
    onSelf = true;
    var call6531 = callmethodChecked(this, "out(1)", [1], opresult6530);
    setLineNumber(1316);    // compilenode array
    var array6532 = new PrimitiveGraceList([]);
    var var_args = array6532;
    setLineNumber(1317);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call6534 = callmethodChecked(this, "compileArguments(2)", [2], var_o, var_args);
    var var_nparts = call6534;
    setLineNumber(1318);    // compilenode member
    // call case 6: other requests
    var call6536 = callmethodChecked(var_o, "receiver", []);
    var var_receiver = call6536;
    var if6537 = GraceDone;
    setLineNumber(1319);    // compilenode member
    // call case 6: other requests
    var call6539 = callmethodChecked(var_receiver, "isSuper", []);
    if (Grace_isTrue(call6539)) {
      setLineNumber(1320);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call6541 = callmethodChecked(this, "compileSuperRequest(3)", [3], var_o, var_args, var_nparts);
      if6537 = call6541;
    } else {
      var if6542 = GraceDone;
      setLineNumber(1321);    // compilenode member
      // call case 6: other requests
      var call6544 = callmethodChecked(var_receiver, "isOuter", []);
      if (Grace_isTrue(call6544)) {
        setLineNumber(1322);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call6546 = callmethodChecked(this, "compileOuterRequest(3)", [3], var_o, var_args, var_nparts);
        if6542 = call6546;
      } else {
        var if6547 = GraceDone;
        setLineNumber(1323);    // compilenode block
        var block6548 = new GraceBlock(this, 1323, 0);
        block6548.real = function() {
          var string6549 = new GraceString("outer");
          // call case 6: other requests
          var call6552 = callmethodChecked(var_o, "nameString", []);
          var opresult6554 = callmethodChecked(call6552, "==(1)", [1], string6549);
          return opresult6554;
        };
        // call case 6: other requests
        var call6557 = callmethodChecked(var_receiver, "isSelf", []);
        var opresult6559 = callmethodChecked(call6557, "&&(1)", [1], block6548);
        if (Grace_isTrue(opresult6559)) {
          setLineNumber(1324);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call6561 = callmethodChecked(this, "compileSelfOuterRequest(3)", [3], var_o, var_args, var_nparts);
          if6547 = call6561;
        } else {
          var if6562 = GraceDone;
          setLineNumber(1325);    // compilenode member
          // call case 6: other requests
          var call6564 = callmethodChecked(var_receiver, "isSelf", []);
          if (Grace_isTrue(call6564)) {
            setLineNumber(1326);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call6566 = callmethodChecked(this, "compileSelfRequest(3)", [3], var_o, var_args, var_nparts);
            if6562 = call6566;
          } else {
            var if6567 = GraceDone;
            setLineNumber(1327);    // compilenode member
            // call case 6: other requests
            var call6569 = callmethodChecked(var_receiver, "isPrelude", []);
            if (Grace_isTrue(call6569)) {
              setLineNumber(1328);    // compilenode identifier
              // call case 4: self request
              onSelf = true;
              var call6571 = callmethodChecked(this, "compilePreludeRequest(3)", [3], var_o, var_args, var_nparts);
              if6567 = call6571;
            } else {
              setLineNumber(1330);    // compilenode identifier
              // call case 4: self request
              onSelf = true;
              var call6573 = callmethodChecked(this, "compileOtherRequest(4)", [4], var_o, var_args, var_nparts, var_tailcall);
              if6567 = call6573;
            }
            if6562 = if6567;
          }
          if6547 = if6562;
        }
        if6542 = if6547;
      }
      if6537 = if6542;
    }
    setLineNumber(1332);    // compilenode string
    var string6575 = new GraceString(");");
    var string6578 = new GraceString("  gc_frame_end(callframe");
    var opresult6580 = callmethodChecked(string6578, "++(1)", [1], var_myc);
    var opresult6582 = callmethodChecked(opresult6580, "++(1)", [1], string6575);
    // call case 4: self request
    onSelf = true;
    var call6583 = callmethodChecked(this, "out(1)", [1], opresult6582);
    setLineNumber(1333);    // compilenode string
    var string6586 = new GraceString("call");
    var opresult6588 = callmethodChecked(string6586, "++(1)", [1], var_auto__95__count);
    // call case 6: other requests
    var call6589 = callmethodChecked(var_o, "register:=(1)", [1], opresult6588);
    setLineNumber(1334);    // compilenode identifier
    var opresult6592 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult6592;
    return GraceDone;
  };
  func6518.paramCounts = [2];
  this.methods["compilecall(2)"] = func6518;
  func6518.definitionLine = 1312;
  func6518.definitionModule = "genc";
  setLineNumber(1337);    // compilenode method
  var func6593 = function(argcv) {    // method compiledialect(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(1338);    // compilenode string
    var string6595 = new GraceString("\"");
    // call case 6: other requests
    var call6598 = callmethodChecked(var_o, "value", []);
    var string6600 = new GraceString("// Dialect \"");
    var opresult6602 = callmethodChecked(string6600, "++(1)", [1], call6598);
    var opresult6604 = callmethodChecked(opresult6602, "++(1)", [1], string6595);
    // call case 4: self request
    onSelf = true;
    var call6605 = callmethodChecked(this, "out(1)", [1], opresult6604);
    setLineNumber(1339);    // compilenode string
    var string6606 = new GraceString("");
    var var_snm = string6606;
    setLineNumber(1340);    // compilenode member
    // call case 6: other requests
    var call6609 = callmethodChecked(var_o, "value", []);
    var block6610 = new GraceBlock(this, 1340, 1);
    setLineNumber(1);    // compilenode identifier
    block6610.real = function(var_c) {
      var if6611 = GraceDone;
      setLineNumber(1341);    // compilenode string
      var string6612 = new GraceString("/");
      var opresult6615 = callmethodChecked(var_c, "==(1)", [1], string6612);
      if (Grace_isTrue(opresult6615)) {
        setLineNumber(1342);    // compilenode string
        var string6616 = new GraceString("");
        var_snm = string6616;
        if6611 = GraceDone;
      } else {
        setLineNumber(1344);    // compilenode identifier
        var opresult6619 = callmethodChecked(var_snm, "++(1)", [1], var_c);
        var_snm = opresult6619;
        if6611 = GraceDone;
      }
      return if6611;
    };
    // call case 5: prelude request
    var call6620 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call6609, block6610);
    setLineNumber(1347);    // compilenode member
    // call case 6: other requests
    var call6623 = callmethodChecked(var_o, "value", []);
    // call case 4: self request
    onSelf = true;
    var call6624 = callmethodChecked(this, "escapestring2(1)", [1], call6623);
    var var_fn = call6624;
    setLineNumber(1348);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call6626 = callmethodChecked(this, "escapeident(1)", [1], var_snm);
    var string6628 = new GraceString("module_");
    var opresult6630 = callmethodChecked(string6628, "++(1)", [1], call6626);
    var var_modg = opresult6630;
    setLineNumber(1349);    // compilenode string
    var string6632 = new GraceString(" == NULL)");
    var string6635 = new GraceString("  if (");
    var opresult6637 = callmethodChecked(string6635, "++(1)", [1], var_modg);
    var opresult6639 = callmethodChecked(opresult6637, "++(1)", [1], string6632);
    // call case 4: self request
    onSelf = true;
    var call6640 = callmethodChecked(this, "out(1)", [1], opresult6639);
    var if6641 = GraceDone;
    setLineNumber(1350);    // compilenode member
    // call case 6: other requests
    var call6644 = callmethodChecked(var_o, "value", []);
    // call case 6: other requests
    // call case 6: other requests
    var call6646 = callmethodChecked(var_imports, "static", []);
    var call6647 = callmethodChecked(call6646, "contains(1)", [1], call6644);
    if (Grace_isTrue(call6647)) {
      setLineNumber(1351);    // compilenode string
      var string6649 = new GraceString("_init();");
      var string6652 = new GraceString(" = ");
      var string6655 = new GraceString("    ");
      var opresult6657 = callmethodChecked(string6655, "++(1)", [1], var_modg);
      var opresult6659 = callmethodChecked(opresult6657, "++(1)", [1], string6652);
      var opresult6661 = callmethodChecked(opresult6659, "++(1)", [1], var_modg);
      var opresult6663 = callmethodChecked(opresult6661, "++(1)", [1], string6649);
      // call case 4: self request
      onSelf = true;
      var call6664 = callmethodChecked(this, "out(1)", [1], opresult6663);
      if6641 = call6664;
    } else {
      setLineNumber(1353);    // compilenode string
      var string6666 = new GraceString("\");");
      var string6669 = new GraceString(" = dlmodule(\"");
      var string6672 = new GraceString("    ");
      var opresult6674 = callmethodChecked(string6672, "++(1)", [1], var_modg);
      var opresult6676 = callmethodChecked(opresult6674, "++(1)", [1], string6669);
      var opresult6678 = callmethodChecked(opresult6676, "++(1)", [1], var_fn);
      var opresult6680 = callmethodChecked(opresult6678, "++(1)", [1], string6666);
      // call case 4: self request
      onSelf = true;
      var call6681 = callmethodChecked(this, "out(1)", [1], opresult6680);
      if6641 = call6681;
    }
    setLineNumber(1355);    // compilenode string
    var string6683 = new GraceString("  Object *var_dialect = alloc_var();");
    // call case 4: self request
    onSelf = true;
    var call6684 = callmethodChecked(this, "out(1)", [1], string6683);
    setLineNumber(1356);    // compilenode string
    var string6686 = new GraceString(";");
    var string6689 = new GraceString("  *var_dialect = ");
    var opresult6691 = callmethodChecked(string6689, "++(1)", [1], var_modg);
    var opresult6693 = callmethodChecked(opresult6691, "++(1)", [1], string6686);
    // call case 4: self request
    onSelf = true;
    var call6694 = callmethodChecked(this, "out(1)", [1], opresult6693);
    setLineNumber(1357);    // compilenode string
    var string6696 = new GraceString(";");
    var string6699 = new GraceString("  prelude = ");
    var opresult6701 = callmethodChecked(string6699, "++(1)", [1], var_modg);
    var opresult6703 = callmethodChecked(opresult6701, "++(1)", [1], string6696);
    // call case 4: self request
    onSelf = true;
    var call6704 = callmethodChecked(this, "out(1)", [1], opresult6703);
    setLineNumber(1358);    // compilenode string
    var string6706 = new GraceString("_init();");
    var string6709 = new GraceString("Object ");
    var opresult6711 = callmethodChecked(string6709, "++(1)", [1], var_modg);
    var opresult6713 = callmethodChecked(opresult6711, "++(1)", [1], string6706);
    // call case 6: other requests
    var call6714 = callmethodChecked(var_globals, "push(1)", [1], opresult6713);
    setLineNumber(1359);    // compilenode string
    var string6716 = new GraceString(";");
    var string6719 = new GraceString("Object ");
    var opresult6721 = callmethodChecked(string6719, "++(1)", [1], var_modg);
    var opresult6723 = callmethodChecked(opresult6721, "++(1)", [1], string6716);
    // call case 6: other requests
    var call6724 = callmethodChecked(var_globals, "push(1)", [1], opresult6723);
    setLineNumber(1360);    // compilenode identifier
    var opresult6727 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult6727;
    var if6728 = GraceDone;
    setLineNumber(1361);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call6731 = callmethodChecked(var_xmodule, "currentDialect", []);
    var call6732 = callmethodChecked(call6731, "hasAtEnd", []);
    if (Grace_isTrue(call6732)) {
      setLineNumber(1362);    // compilenode string
      var string6734 = new GraceString("  partcv[0] = 1;");
      // call case 4: self request
      onSelf = true;
      var call6735 = callmethodChecked(this, "out(1)", [1], string6734);
      setLineNumber(1363);    // compilenode string
      var string6737 = new GraceString("\");");
      // call case 4: self request
      onSelf = true;
      var call6740 = callmethodChecked(this, "escapestring(1)", [1], var_modname);
      var string6742 = new GraceString("  params[0] = alloc_String(\"");
      var opresult6744 = callmethodChecked(string6742, "++(1)", [1], call6740);
      var opresult6746 = callmethodChecked(opresult6744, "++(1)", [1], string6737);
      // call case 4: self request
      onSelf = true;
      var call6747 = callmethodChecked(this, "out(1)", [1], opresult6746);
      setLineNumber(1365);    // compilenode string
      var string6749 = new GraceString("1, partcv, params, CFLAG_SELF);");
      setLineNumber(1364);    // compilenode string
      var string6751 = new GraceString("  callmethodflags(prelude, \"atModuleStart\", ");
      var opresult6753 = callmethodChecked(string6751, "++(1)", [1], string6749);
      // call case 4: self request
      onSelf = true;
      var call6754 = callmethodChecked(this, "out(1)", [1], opresult6753);
      if6728 = call6754;
    }
    setLineNumber(1367);    // compilenode string
    var string6756 = new GraceString("done");
    // call case 6: other requests
    var call6757 = callmethodChecked(var_o, "register:=(1)", [1], string6756);
    return call6757;
  };
  func6593.paramCounts = [1];
  this.methods["compiledialect(1)"] = func6593;
  func6593.definitionLine = 1337;
  func6593.definitionModule = "genc";
  setLineNumber(1369);    // compilenode method
  var func6758 = function(argcv) {    // method compileimport(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(1370);    // compilenode string
    var string6760 = new GraceString("");
    // call case 6: other requests
    var call6763 = callmethodChecked(var_o, "nameString", []);
    var string6765 = new GraceString(" as ");
    // call case 6: other requests
    var call6768 = callmethodChecked(var_o, "path", []);
    var string6770 = new GraceString("// Import of ");
    var opresult6772 = callmethodChecked(string6770, "++(1)", [1], call6768);
    var opresult6774 = callmethodChecked(opresult6772, "++(1)", [1], string6765);
    var opresult6776 = callmethodChecked(opresult6774, "++(1)", [1], call6763);
    var opresult6778 = callmethodChecked(opresult6776, "++(1)", [1], string6760);
    // call case 4: self request
    onSelf = true;
    var call6779 = callmethodChecked(this, "out(1)", [1], opresult6778);
    setLineNumber(1371);    // compilenode string
    var string6780 = new GraceString("");
    var var_snm = string6780;
    setLineNumber(1372);    // compilenode member
    // call case 6: other requests
    var call6783 = callmethodChecked(var_o, "path", []);
    var block6784 = new GraceBlock(this, 1372, 1);
    setLineNumber(1);    // compilenode identifier
    block6784.real = function(var_c) {
      var if6785 = GraceDone;
      setLineNumber(1373);    // compilenode string
      var string6786 = new GraceString("/");
      var opresult6789 = callmethodChecked(var_c, "==(1)", [1], string6786);
      if (Grace_isTrue(opresult6789)) {
        setLineNumber(1374);    // compilenode string
        var string6790 = new GraceString("");
        var_snm = string6790;
        if6785 = GraceDone;
      } else {
        setLineNumber(1376);    // compilenode identifier
        var opresult6793 = callmethodChecked(var_snm, "++(1)", [1], var_c);
        var_snm = opresult6793;
        if6785 = GraceDone;
      }
      return if6785;
    };
    // call case 5: prelude request
    var call6794 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call6783, block6784);
    setLineNumber(1379);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call6796 = callmethodChecked(this, "escapeident(1)", [1], var_snm);
    var_snm = call6796;
    setLineNumber(1380);    // compilenode string
    var string6798 = new GraceString("done");
    // call case 6: other requests
    var call6799 = callmethodChecked(var_o, "register:=(1)", [1], string6798);
    setLineNumber(1381);    // compilenode member
    // call case 6: other requests
    var call6802 = callmethodChecked(var_o, "nameString", []);
    // call case 4: self request
    onSelf = true;
    var call6803 = callmethodChecked(this, "escapeident(1)", [1], call6802);
    var var_nm = call6803;
    setLineNumber(1382);    // compilenode string
    var string6805 = new GraceString("module_");
    var opresult6807 = callmethodChecked(string6805, "++(1)", [1], var_snm);
    var var_modg = opresult6807;
    setLineNumber(1383);    // compilenode identifier
    // call case 6: other requests
    var call6809 = callmethodChecked(var_declaredvars, "push(1)", [1], var_nm);
    setLineNumber(1384);    // compilenode string
    var string6811 = new GraceString(";");
    var string6814 = new GraceString("Object ");
    var opresult6816 = callmethodChecked(string6814, "++(1)", [1], var_modg);
    var opresult6818 = callmethodChecked(opresult6816, "++(1)", [1], string6811);
    // call case 6: other requests
    var call6819 = callmethodChecked(var_globals, "push(1)", [1], opresult6818);
    setLineNumber(1385);    // compilenode string
    var string6821 = new GraceString(" == NULL)");
    var string6824 = new GraceString("  if (");
    var opresult6826 = callmethodChecked(string6824, "++(1)", [1], var_modg);
    var opresult6828 = callmethodChecked(opresult6826, "++(1)", [1], string6821);
    // call case 4: self request
    onSelf = true;
    var call6829 = callmethodChecked(this, "out(1)", [1], opresult6828);
    var if6830 = GraceDone;
    setLineNumber(1386);    // compilenode member
    // call case 6: other requests
    var call6833 = callmethodChecked(var_o, "path", []);
    // call case 6: other requests
    // call case 6: other requests
    var call6835 = callmethodChecked(var_xmodule, "dynamicCModules", []);
    var call6836 = callmethodChecked(call6835, "contains(1)", [1], call6833);
    if (Grace_isTrue(call6836)) {
      setLineNumber(1387);    // compilenode string
      var string6838 = new GraceString("\");");
      var string6841 = new GraceString(" = dlmodule(\"");
      var string6844 = new GraceString("    ");
      var opresult6846 = callmethodChecked(string6844, "++(1)", [1], var_modg);
      var opresult6848 = callmethodChecked(opresult6846, "++(1)", [1], string6841);
      var opresult6850 = callmethodChecked(opresult6848, "++(1)", [1], var_snm);
      var opresult6852 = callmethodChecked(opresult6850, "++(1)", [1], string6838);
      // call case 4: self request
      onSelf = true;
      var call6853 = callmethodChecked(this, "out(1)", [1], opresult6852);
      if6830 = call6853;
    } else {
      var if6854 = GraceDone;
      setLineNumber(1388);    // compilenode member
      // call case 6: other requests
      var call6857 = callmethodChecked(var_o, "path", []);
      // call case 6: other requests
      // call case 6: other requests
      var call6859 = callmethodChecked(var_xmodule, "builtInModules", []);
      var call6860 = callmethodChecked(call6859, "contains(1)", [1], call6857);
      if (Grace_isTrue(call6860)) {
        setLineNumber(1389);    // compilenode string
        var string6862 = new GraceString("_init();");
        var string6865 = new GraceString(" = ");
        var string6868 = new GraceString("    ");
        var opresult6870 = callmethodChecked(string6868, "++(1)", [1], var_modg);
        var opresult6872 = callmethodChecked(opresult6870, "++(1)", [1], string6865);
        var opresult6874 = callmethodChecked(opresult6872, "++(1)", [1], var_modg);
        var opresult6876 = callmethodChecked(opresult6874, "++(1)", [1], string6862);
        // call case 4: self request
        onSelf = true;
        var call6877 = callmethodChecked(this, "out(1)", [1], opresult6876);
        if6854 = call6877;
      } else {
        setLineNumber(1391);    // compilenode string
        var string6879 = new GraceString(");");
        var string6882 = new GraceString(" = LOAD_MODULE(");
        var string6885 = new GraceString("    ");
        var opresult6887 = callmethodChecked(string6885, "++(1)", [1], var_modg);
        var opresult6889 = callmethodChecked(opresult6887, "++(1)", [1], string6882);
        var opresult6891 = callmethodChecked(opresult6889, "++(1)", [1], var_snm);
        var opresult6893 = callmethodChecked(opresult6891, "++(1)", [1], string6879);
        // call case 4: self request
        onSelf = true;
        var call6894 = callmethodChecked(this, "out(1)", [1], opresult6893);
        if6854 = call6894;
      }
      if6830 = if6854;
    }
    setLineNumber(1394);    // compilenode string
    var string6896 = new GraceString(";");
    var string6899 = new GraceString(" = ");
    var string6902 = new GraceString("  *var_");
    var opresult6904 = callmethodChecked(string6902, "++(1)", [1], var_nm);
    var opresult6906 = callmethodChecked(opresult6904, "++(1)", [1], string6899);
    var opresult6908 = callmethodChecked(opresult6906, "++(1)", [1], var_modg);
    var opresult6910 = callmethodChecked(opresult6908, "++(1)", [1], string6896);
    // call case 4: self request
    onSelf = true;
    var call6911 = callmethodChecked(this, "out(1)", [1], opresult6910);
    var if6912 = GraceDone;
    setLineNumber(1395);    // compilenode identifier
    var opresult6915 = callmethodChecked(var_compilationDepth, "==(1)", [1], new GraceNum(1));
    if (Grace_isTrue(opresult6915)) {
      setLineNumber(1397);    // compilenode member
      // call case 6: other requests
      var call6917 = callmethodChecked(var_o, "value", []);
      var var_methodIdent = call6917;
      setLineNumber(1398);    // compilenode member
      // call case 6: other requests
      var call6920 = callmethodChecked(var_o, "line", []);
      // call case 6: other requests
      var call6921 = callmethodChecked(var_methodIdent, "line:=(1)", [1], call6920);
      setLineNumber(1399);    // compilenode member
      // call case 6: other requests
      var call6924 = callmethodChecked(var_o, "linePos", []);
      // call case 6: other requests
      var call6925 = callmethodChecked(var_methodIdent, "linePos:=(1)", [1], call6924);
      setLineNumber(1400);    // compilenode member
      // call case 6: other requests
      var call6930 = callmethodChecked(var_o, "nameString", []);
      // call case 6: other requests
      // call case 6: other requests
      var call6932 = callmethodChecked(var_ast, "signaturePart", []);
      var call6933 = callmethodChecked(call6932, "partName(1)", [1], call6930);
      var array6927 = new PrimitiveGraceList([call6933]);
      setLineNumber(1401);    // compilenode identifier
      var array6934 = new PrimitiveGraceList([var_methodIdent]);
      // call case 6: other requests
      var call6936 = callmethodChecked(var_o, "dtype", []);
      // call case 6: other requests
      setLineNumber(1400);    // compilenode member
      // call case 6: other requests
      var call6938 = callmethodChecked(var_ast, "methodNode", []);
      var call6939 = callmethodChecked(call6938, "new(3)", [3], array6927, array6934, call6936);
      var var_accessor = call6939;
      setLineNumber(1402);    // compilenode member
      // call case 6: other requests
      var call6942 = callmethodChecked(var_o, "line", []);
      // call case 6: other requests
      var call6943 = callmethodChecked(var_accessor, "line:=(1)", [1], call6942);
      setLineNumber(1403);    // compilenode member
      // call case 6: other requests
      var call6946 = callmethodChecked(var_o, "linePos", []);
      // call case 6: other requests
      var call6947 = callmethodChecked(var_accessor, "linePos:=(1)", [1], call6946);
      var if6948 = GraceDone;
      setLineNumber(1404);    // compilenode member
      // call case 6: other requests
      var call6950 = callmethodChecked(var_o, "isConfidential", []);
      if (Grace_isTrue(call6950)) {
        setLineNumber(1405);    // compilenode string
        var string6953 = new GraceString("confidential");
        // call case 6: other requests
        // call case 6: other requests
        var call6955 = callmethodChecked(var_ast, "identifierNode", []);
        var call6956 = callmethodChecked(call6955, "new(2)", [2], string6953, GraceFalse);
        // call case 6: other requests
        // call case 6: other requests
        var call6958 = callmethodChecked(var_accessor, "annotations", []);
        var call6959 = callmethodChecked(call6958, "push(1)", [1], call6956);
        if6948 = call6959;
      }
      if6912 = if6948;
    }
    setLineNumber(1409);    // compilenode string
    var string6961 = new GraceString("_init();");
    var string6964 = new GraceString("Object ");
    var opresult6966 = callmethodChecked(string6964, "++(1)", [1], var_modg);
    var opresult6968 = callmethodChecked(opresult6966, "++(1)", [1], string6961);
    // call case 6: other requests
    var call6969 = callmethodChecked(var_globals, "push(1)", [1], opresult6968);
    return call6969;
  };
  func6758.paramCounts = [1];
  this.methods["compileimport(1)"] = func6758;
  func6758.definitionLine = 1369;
  func6758.definitionModule = "genc";
  setLineNumber(1411);    // compilenode method
  var func6970 = function(argcv) {    // method compilereturn(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(1412);    // compilenode vardec
    var var_reg;
    var if6971 = GraceDone;
    setLineNumber(1414);    // compilenode block
    var block6972 = new GraceBlock(this, 1414, 0);
    block6972.real = function() {
      var string6974 = new GraceString("TailCall");
      // call case 6: other requests
      // call case 6: other requests
      var call6976 = callmethodChecked(var_util, "extensions", []);
      var call6977 = callmethodChecked(call6976, "contains(1)", [1], string6974);
      return call6977;
    };
    setLineNumber(1413);    // compilenode string
    var string6979 = new GraceString("call");
    // call case 6: other requests
    // call case 6: other requests
    var call6983 = callmethodChecked(var_o, "value", []);
    var call6984 = callmethodChecked(call6983, "kind", []);
    var opresult6986 = callmethodChecked(call6984, "==(1)", [1], string6979);
    var opresult6988 = callmethodChecked(opresult6986, "&&(1)", [1], block6972);
    if (Grace_isTrue(opresult6988)) {
      setLineNumber(1416);    // compilenode member
      // call case 6: other requests
      var call6991 = callmethodChecked(var_o, "value", []);
      // call case 4: self request
      onSelf = true;
      var call6992 = callmethodChecked(this, "compilecall(2)", [2], call6991, GraceTrue);
      setLineNumber(1417);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call6995 = callmethodChecked(var_o, "value", []);
      var call6996 = callmethodChecked(call6995, "register", []);
      var_reg = call6996;
      if6971 = GraceDone;
    } else {
      setLineNumber(1419);    // compilenode member
      // call case 6: other requests
      var call6999 = callmethodChecked(var_o, "value", []);
      // call case 4: self request
      onSelf = true;
      var call7000 = callmethodChecked(this, "compilenode(1)", [1], call6999);
      var_reg = call7000;
      if6971 = GraceDone;
    }
    var if7001 = GraceDone;
    setLineNumber(1421);    // compilenode identifier
    if (Grace_isTrue(var_inBlock)) {
      setLineNumber(1422);    // compilenode string
      var string7003 = new GraceString(");");
      var string7006 = new GraceString("  block_return(realself, ");
      var opresult7008 = callmethodChecked(string7006, "++(1)", [1], var_reg);
      var opresult7010 = callmethodChecked(opresult7008, "++(1)", [1], string7003);
      // call case 4: self request
      onSelf = true;
      var call7011 = callmethodChecked(this, "out(1)", [1], opresult7010);
      if7001 = call7011;
    } else {
      setLineNumber(1424);    // compilenode string
      var string7013 = new GraceString(";");
      var string7016 = new GraceString("  return ");
      var opresult7018 = callmethodChecked(string7016, "++(1)", [1], var_reg);
      var opresult7020 = callmethodChecked(opresult7018, "++(1)", [1], string7013);
      // call case 4: self request
      onSelf = true;
      var call7021 = callmethodChecked(this, "out(1)", [1], opresult7020);
      if7001 = call7021;
    }
    setLineNumber(1426);    // compilenode string
    var string7023 = new GraceString("undefined");
    // call case 6: other requests
    var call7024 = callmethodChecked(var_o, "register:=(1)", [1], string7023);
    return call7024;
  };
  func6970.paramCounts = [1];
  this.methods["compilereturn(1)"] = func6970;
  func6970.definitionLine = 1411;
  func6970.definitionModule = "genc";
  setLineNumber(1428);    // compilenode method
  var func7025 = function(argcv) {    // method compilePrint(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(1429);    // compilenode array
    var array7026 = new PrimitiveGraceList([]);
    var var_args = array7026;
    setLineNumber(1430);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    // call case 6: other requests
    var call7031 = callmethodChecked(var_o, "with", []);
    var call7032 = callmethodChecked(call7031, "first", []);
    var call7033 = callmethodChecked(call7032, "args", []);
    var block7034 = new GraceBlock(this, 1430, 1);
    setLineNumber(1);    // compilenode identifier
    block7034.real = function(var_prm) {
      setLineNumber(1431);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call7036 = callmethodChecked(this, "compilenode(1)", [1], var_prm);
      var var_r = call7036;
      setLineNumber(1432);    // compilenode identifier
      // call case 6: other requests
      var call7038 = callmethodChecked(var_args, "push(1)", [1], var_r);
      return call7038;
    };
    // call case 5: prelude request
    var call7039 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call7033, block7034);
    setLineNumber(1434);    // compilenode num
    var var_parami = new GraceNum(0);
    setLineNumber(1435);    // compilenode block
    var block7041 = new GraceBlock(this, 1435, 1);
    setLineNumber(1);    // compilenode identifier
    block7041.real = function(var_arg) {
      setLineNumber(1436);    // compilenode string
      var string7043 = new GraceString(";");
      var string7046 = new GraceString("] = ");
      var string7049 = new GraceString("  params[");
      var opresult7051 = callmethodChecked(string7049, "++(1)", [1], var_parami);
      var opresult7053 = callmethodChecked(opresult7051, "++(1)", [1], string7046);
      var opresult7055 = callmethodChecked(opresult7053, "++(1)", [1], var_arg);
      var opresult7057 = callmethodChecked(opresult7055, "++(1)", [1], string7043);
      // call case 4: self request
      onSelf = true;
      var call7058 = callmethodChecked(this, "out(1)", [1], opresult7057);
      setLineNumber(1437);    // compilenode identifier
      var opresult7061 = callmethodChecked(var_parami, "+(1)", [1], new GraceNum(1));
      var_parami = opresult7061;
      return GraceDone;
    };
    // call case 5: prelude request
    var call7062 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_args, block7041);
    setLineNumber(1440);    // compilenode string
    var string7064 = new GraceString(",  params);");
    // call case 6: other requests
    var call7067 = callmethodChecked(var_args, "size", []);
    setLineNumber(1439);    // compilenode string
    var string7069 = new GraceString(" = gracelib_print(NULL, ");
    var string7072 = new GraceString("  Object call");
    var opresult7074 = callmethodChecked(string7072, "++(1)", [1], var_auto__95__count);
    var opresult7076 = callmethodChecked(opresult7074, "++(1)", [1], string7069);
    var opresult7078 = callmethodChecked(opresult7076, "++(1)", [1], call7067);
    var opresult7080 = callmethodChecked(opresult7078, "++(1)", [1], string7064);
    // call case 4: self request
    onSelf = true;
    var call7081 = callmethodChecked(this, "out(1)", [1], opresult7080);
    setLineNumber(1441);    // compilenode string
    var string7084 = new GraceString("call");
    var opresult7086 = callmethodChecked(string7084, "++(1)", [1], var_auto__95__count);
    // call case 6: other requests
    var call7087 = callmethodChecked(var_o, "register:=(1)", [1], opresult7086);
    setLineNumber(1442);    // compilenode identifier
    var opresult7090 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult7090;
    return GraceDone;
  };
  func7025.paramCounts = [1];
  this.methods["compilePrint(1)"] = func7025;
  func7025.definitionLine = 1428;
  func7025.definitionModule = "genc";
  setLineNumber(1444);    // compilenode method
  var func7091 = function(argcv) {    // method compileNativeCode(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("genc");
    var if7092 = GraceDone;
    setLineNumber(1445);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call7096 = callmethodChecked(var_o, "with", []);
    var call7097 = callmethodChecked(call7096, "size", []);
    var opresult7099 = callmethodChecked(call7097, "\u2260(1)", [1], new GraceNum(2));
    if (Grace_isTrue(opresult7099)) {
      setLineNumber(1446);    // compilenode string
      var string7101 = new GraceString("method native()code takes two arguments");
      setLineNumber(1447);    // compilenode member
      // call case 6: other requests
      var call7103 = callmethodChecked(var_o, "line", []);
      // call case 6: other requests
      var call7105 = callmethodChecked(var_o, "linePos", []);
      // call case 6: other requests
      var call7108 = callmethodChecked(var_o, "linePos", []);
      var opresult7110 = callmethodChecked(call7108, "+(1)", [1], new GraceNum(5));
      // call case 6: other requests
      setLineNumber(1446);    // compilenode identifier
      var call7111 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], string7101, call7103, call7105, opresult7110);
      if7092 = call7111;
    }
    setLineNumber(1449);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    // call case 6: other requests
    // call case 6: other requests
    var call7116 = callmethodChecked(var_o, "with", []);
    var call7117 = callmethodChecked(call7116, "first", []);
    var call7118 = callmethodChecked(call7117, "args", []);
    var call7119 = callmethodChecked(call7118, "first", []);
    var var_param1 = call7119;
    var if7120 = GraceDone;
    setLineNumber(1450);    // compilenode string
    var string7121 = new GraceString("string");
    // call case 6: other requests
    var call7124 = callmethodChecked(var_param1, "kind", []);
    var opresult7126 = callmethodChecked(call7124, "\u2260(1)", [1], string7121);
    if (Grace_isTrue(opresult7126)) {
      setLineNumber(1451);    // compilenode string
      var string7128 = new GraceString("the first argument to native()code must be a string literal");
      setLineNumber(1452);    // compilenode member
      // call case 6: other requests
      var call7130 = callmethodChecked(var_param1, "line", []);
      // call case 6: other requests
      var call7132 = callmethodChecked(var_param1, "linePos", []);
      // call case 6: other requests
      var call7134 = callmethodChecked(var_param1, "linePos", []);
      // call case 6: other requests
      setLineNumber(1451);    // compilenode identifier
      var call7135 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], string7128, call7130, call7132, call7134);
      if7120 = call7135;
    }
    var if7136 = GraceDone;
    setLineNumber(1454);    // compilenode string
    var string7137 = new GraceString("c");
    // call case 6: other requests
    var call7140 = callmethodChecked(var_param1, "value", []);
    var opresult7142 = callmethodChecked(call7140, "\u2260(1)", [1], string7137);
    if (Grace_isTrue(opresult7142)) {
      setLineNumber(1455);    // compilenode string
      var string7144 = new GraceString("done");
      // call case 6: other requests
      var call7145 = callmethodChecked(var_o, "register:=(1)", [1], string7144);
      setLineNumber(1457);    // compilenode identifier
      return var_done;
    }
    setLineNumber(1458);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    // call case 6: other requests
    // call case 6: other requests
    var call7150 = callmethodChecked(var_o, "with", []);
    var call7151 = callmethodChecked(call7150, "second", []);
    var call7152 = callmethodChecked(call7151, "args", []);
    var call7153 = callmethodChecked(call7152, "first", []);
    var var_param2 = call7153;
    var if7154 = GraceDone;
    setLineNumber(1459);    // compilenode string
    var string7155 = new GraceString("string");
    // call case 6: other requests
    var call7158 = callmethodChecked(var_param2, "kind", []);
    var opresult7160 = callmethodChecked(call7158, "\u2260(1)", [1], string7155);
    if (Grace_isTrue(opresult7160)) {
      setLineNumber(1460);    // compilenode string
      var string7162 = new GraceString("the second argument to native()code must be a string literal");
      setLineNumber(1461);    // compilenode member
      // call case 6: other requests
      var call7164 = callmethodChecked(var_param2, "line", []);
      // call case 6: other requests
      setLineNumber(1460);    // compilenode identifier
      var call7165 = callmethodChecked(var_errormessages, "syntaxError(1)atLine(1)", [1, 1], string7162, call7164);
      if7154 = call7165;
    }
    setLineNumber(1463);    // compilenode member
    // call case 6: other requests
    var call7167 = callmethodChecked(var_param2, "value", []);
    var var_codeString = call7167;
    setLineNumber(1464);    // compilenode string
    var string7169 = new GraceString("");
    // call case 6: other requests
    var call7172 = callmethodChecked(var_o, "line", []);
    var string7174 = new GraceString("   // start native code from line ");
    var opresult7176 = callmethodChecked(string7174, "++(1)", [1], call7172);
    var opresult7178 = callmethodChecked(opresult7176, "++(1)", [1], string7169);
    // call case 4: self request
    onSelf = true;
    var call7179 = callmethodChecked(this, "out(1)", [1], opresult7178);
    setLineNumber(1465);    // compilenode string
    var string7181 = new GraceString("nat");
    var opresult7183 = callmethodChecked(string7181, "++(1)", [1], var_auto__95__count);
    var var_reg = opresult7183;
    setLineNumber(1466);    // compilenode identifier
    var opresult7186 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult7186;
    setLineNumber(1467);    // compilenode string
    var string7188 = new GraceString(";");
    var string7191 = new GraceString("  Object ");
    var opresult7193 = callmethodChecked(string7191, "++(1)", [1], var_reg);
    var opresult7195 = callmethodChecked(opresult7193, "++(1)", [1], string7188);
    // call case 4: self request
    onSelf = true;
    var call7196 = callmethodChecked(this, "out(1)", [1], opresult7195);
    setLineNumber(1468);    // compilenode string
    var string7198 = new GraceString("  { Object result = done;");
    // call case 4: self request
    onSelf = true;
    var call7199 = callmethodChecked(this, "out(1)", [1], string7198);
    setLineNumber(1469);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call7201 = callmethodChecked(this, "out(1)", [1], var_codeString);
    setLineNumber(1470);    // compilenode string
    var string7203 = new GraceString(" = result;");
    var string7206 = new GraceString("  ");
    var opresult7208 = callmethodChecked(string7206, "++(1)", [1], var_reg);
    var opresult7210 = callmethodChecked(opresult7208, "++(1)", [1], string7203);
    // call case 4: self request
    onSelf = true;
    var call7211 = callmethodChecked(this, "out(1)", [1], opresult7210);
    setLineNumber(1471);    // compilenode string
    var string7213 = new GraceString("  }");
    // call case 4: self request
    onSelf = true;
    var call7214 = callmethodChecked(this, "out(1)", [1], string7213);
    setLineNumber(1472);    // compilenode identifier
    // call case 6: other requests
    var call7216 = callmethodChecked(var_o, "register:=(1)", [1], var_reg);
    return call7216;
  };
  func7091.paramCounts = [1];
  this.methods["compileNativeCode(1)"] = func7091;
  func7091.definitionLine = 1444;
  func7091.definitionModule = "genc";
  setLineNumber(1475);    // compilenode method
  var func7217 = function(argcv) {    // method compilenum(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(1476);    // compilenode member
    // call case 6: other requests
    var call7219 = callmethodChecked(var_o, "value", []);
    var var_cnum = call7219;
    setLineNumber(1477);    // compilenode identifier
    var var_havedot = GraceFalse;
    setLineNumber(1478);    // compilenode block
    var block7221 = new GraceBlock(this, 1478, 1);
    setLineNumber(1);    // compilenode identifier
    block7221.real = function(var_c) {
      var if7222 = GraceDone;
      setLineNumber(1479);    // compilenode string
      var string7223 = new GraceString(".");
      var opresult7226 = callmethodChecked(var_c, "==(1)", [1], string7223);
      if (Grace_isTrue(opresult7226)) {
        setLineNumber(1480);    // compilenode identifier
        var_havedot = GraceTrue;
        if7222 = GraceDone;
      }
      return if7222;
    };
    // call case 5: prelude request
    var call7227 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_cnum, block7221);
    setLineNumber(1483);    // compilenode string
    var string7229 = new GraceString(");");
    var string7232 = new GraceString(" = alloc_Float64(");
    var string7235 = new GraceString("  Object num");
    var opresult7237 = callmethodChecked(string7235, "++(1)", [1], var_auto__95__count);
    var opresult7239 = callmethodChecked(opresult7237, "++(1)", [1], string7232);
    var opresult7241 = callmethodChecked(opresult7239, "++(1)", [1], var_cnum);
    var opresult7243 = callmethodChecked(opresult7241, "++(1)", [1], string7229);
    // call case 4: self request
    onSelf = true;
    var call7244 = callmethodChecked(this, "out(1)", [1], opresult7243);
    setLineNumber(1484);    // compilenode string
    var string7247 = new GraceString("num");
    var opresult7249 = callmethodChecked(string7247, "++(1)", [1], var_auto__95__count);
    // call case 6: other requests
    var call7250 = callmethodChecked(var_o, "register:=(1)", [1], opresult7249);
    setLineNumber(1485);    // compilenode identifier
    var opresult7253 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
    var_auto__95__count = opresult7253;
    return GraceDone;
  };
  func7217.paramCounts = [1];
  this.methods["compilenum(1)"] = func7217;
  func7217.definitionLine = 1475;
  func7217.definitionModule = "genc";
  setLineNumber(1487);    // compilenode method
  var func7254 = function(argcv) {    // method compilenode(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(1488);    // compilenode identifier
    var opresult7257 = callmethodChecked(var_compilationDepth, "+(1)", [1], new GraceNum(1));
    var_compilationDepth = opresult7257;
    var if7258 = GraceDone;
    setLineNumber(1489);    // compilenode member
    // call case 6: other requests
    var call7260 = callmethodChecked(var_o, "line", []);
    var opresult7263 = callmethodChecked(var_linenum, "\u2260(1)", [1], call7260);
    if (Grace_isTrue(opresult7263)) {
      setLineNumber(1490);    // compilenode member
      // call case 6: other requests
      var call7265 = callmethodChecked(var_o, "line", []);
      var_linenum = call7265;
      setLineNumber(1491);    // compilenode string
      var string7268 = new GraceString("// Begin line ");
      var opresult7270 = callmethodChecked(string7268, "++(1)", [1], var_linenum);
      // call case 4: self request
      onSelf = true;
      var call7271 = callmethodChecked(this, "out(1)", [1], opresult7270);
      setLineNumber(1492);    // compilenode string
      var string7273 = new GraceString(");");
      var string7276 = new GraceString("  setline(");
      var opresult7278 = callmethodChecked(string7276, "++(1)", [1], var_linenum);
      var opresult7280 = callmethodChecked(opresult7278, "++(1)", [1], string7273);
      // call case 4: self request
      onSelf = true;
      var call7281 = callmethodChecked(this, "out(1)", [1], opresult7280);
      setLineNumber(1493);    // compilenode string
      var string7283 = new GraceString("  setmodule(modulename);");
      // call case 4: self request
      onSelf = true;
      var call7284 = callmethodChecked(this, "out(1)", [1], string7283);
      setLineNumber(1494);    // compilenode string
      var string7286 = new GraceString("  setsource(originalSourceLines);");
      // call case 4: self request
      onSelf = true;
      var call7287 = callmethodChecked(this, "out(1)", [1], string7286);
      if7258 = call7287;
    }
    setLineNumber(1496);    // compilenode member
    // call case 6: other requests
    var call7289 = callmethodChecked(var_o, "kind", []);
    var var_oKind = call7289;
    setLineNumber(1497);    // compilenode string
    var string7291 = new GraceString(")");
    var string7294 = new GraceString(" node (depth = ");
    var string7297 = new GraceString("// starting to compile ");
    var opresult7299 = callmethodChecked(string7297, "++(1)", [1], var_oKind);
    var opresult7301 = callmethodChecked(opresult7299, "++(1)", [1], string7294);
    var opresult7303 = callmethodChecked(opresult7301, "++(1)", [1], var_compilationDepth);
    var opresult7305 = callmethodChecked(opresult7303, "++(1)", [1], string7291);
    // call case 4: self request
    onSelf = true;
    var call7306 = callmethodChecked(this, "out(1)", [1], opresult7305);
    var if7307 = GraceDone;
    setLineNumber(1498);    // compilenode string
    var string7308 = new GraceString("num");
    var opresult7311 = callmethodChecked(var_oKind, "==(1)", [1], string7308);
    if (Grace_isTrue(opresult7311)) {
      setLineNumber(1499);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call7313 = callmethodChecked(this, "compilenum(1)", [1], var_o);
      if7307 = call7313;
    } else {
      var if7314 = GraceDone;
      setLineNumber(1500);    // compilenode string
      var string7315 = new GraceString("string");
      var opresult7318 = callmethodChecked(var_oKind, "==(1)", [1], string7315);
      if (Grace_isTrue(opresult7318)) {
        setLineNumber(1501);    // compilenode member
        // call case 6: other requests
        var call7322 = callmethodChecked(var_o, "value", []);
        // call case 4: self request
        onSelf = true;
        var call7323 = callmethodChecked(this, "escapestring2(1)", [1], call7322);
        // call case 6: other requests
        var call7324 = callmethodChecked(var_o, "value:=(1)", [1], call7323);
        setLineNumber(1502);    // compilenode string
        var string7326 = new GraceString(" == NULL) {");
        var string7329 = new GraceString("  if (strlit");
        var opresult7331 = callmethodChecked(string7329, "++(1)", [1], var_auto__95__count);
        var opresult7333 = callmethodChecked(opresult7331, "++(1)", [1], string7326);
        // call case 4: self request
        onSelf = true;
        var call7334 = callmethodChecked(this, "out(1)", [1], opresult7333);
        setLineNumber(1503);    // compilenode string
        var string7336 = new GraceString("\");");
        // call case 6: other requests
        var call7339 = callmethodChecked(var_o, "value", []);
        var string7341 = new GraceString(" = alloc_String(\"");
        var string7344 = new GraceString("    strlit");
        var opresult7346 = callmethodChecked(string7344, "++(1)", [1], var_auto__95__count);
        var opresult7348 = callmethodChecked(opresult7346, "++(1)", [1], string7341);
        var opresult7350 = callmethodChecked(opresult7348, "++(1)", [1], call7339);
        var opresult7352 = callmethodChecked(opresult7350, "++(1)", [1], string7336);
        // call case 4: self request
        onSelf = true;
        var call7353 = callmethodChecked(this, "out(1)", [1], opresult7352);
        setLineNumber(1504);    // compilenode string
        var string7355 = new GraceString(");");
        var string7358 = new GraceString("    gc_root(strlit");
        var opresult7360 = callmethodChecked(string7358, "++(1)", [1], var_auto__95__count);
        var opresult7362 = callmethodChecked(opresult7360, "++(1)", [1], string7355);
        // call case 4: self request
        onSelf = true;
        var call7363 = callmethodChecked(this, "out(1)", [1], opresult7362);
        setLineNumber(1505);    // compilenode string
        var string7365 = new GraceString("  }");
        // call case 4: self request
        onSelf = true;
        var call7366 = callmethodChecked(this, "out(1)", [1], string7365);
        setLineNumber(1506);    // compilenode string
        var string7368 = new GraceString(";");
        var string7371 = new GraceString("static Object strlit");
        var opresult7373 = callmethodChecked(string7371, "++(1)", [1], var_auto__95__count);
        var opresult7375 = callmethodChecked(opresult7373, "++(1)", [1], string7368);
        // call case 6: other requests
        var call7376 = callmethodChecked(var_globals, "push(1)", [1], opresult7375);
        setLineNumber(1507);    // compilenode string
        var string7379 = new GraceString("strlit");
        var opresult7381 = callmethodChecked(string7379, "++(1)", [1], var_auto__95__count);
        // call case 6: other requests
        var call7382 = callmethodChecked(var_o, "register:=(1)", [1], opresult7381);
        setLineNumber(1508);    // compilenode identifier
        var opresult7385 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
        var_auto__95__count = opresult7385;
        if7314 = GraceDone;
      } else {
        var if7386 = GraceDone;
        setLineNumber(1509);    // compilenode string
        var string7387 = new GraceString("dialect");
        var opresult7390 = callmethodChecked(var_oKind, "==(1)", [1], string7387);
        if (Grace_isTrue(opresult7390)) {
          setLineNumber(1510);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call7392 = callmethodChecked(this, "compiledialect(1)", [1], var_o);
          if7386 = call7392;
        } else {
          var if7393 = GraceDone;
          setLineNumber(1511);    // compilenode string
          var string7394 = new GraceString("import");
          var opresult7397 = callmethodChecked(var_oKind, "==(1)", [1], string7394);
          if (Grace_isTrue(opresult7397)) {
            setLineNumber(1512);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call7399 = callmethodChecked(this, "compileimport(1)", [1], var_o);
            if7393 = call7399;
          } else {
            var if7400 = GraceDone;
            setLineNumber(1513);    // compilenode string
            var string7401 = new GraceString("return");
            var opresult7404 = callmethodChecked(var_oKind, "==(1)", [1], string7401);
            if (Grace_isTrue(opresult7404)) {
              setLineNumber(1514);    // compilenode identifier
              // call case 4: self request
              onSelf = true;
              var call7406 = callmethodChecked(this, "compilereturn(1)", [1], var_o);
              if7400 = call7406;
            } else {
              var if7407 = GraceDone;
              setLineNumber(1515);    // compilenode string
              var string7408 = new GraceString("generic");
              var opresult7411 = callmethodChecked(var_oKind, "==(1)", [1], string7408);
              if (Grace_isTrue(opresult7411)) {
                setLineNumber(1516);    // compilenode member
                // call case 6: other requests
                var call7415 = callmethodChecked(var_o, "value", []);
                // call case 4: self request
                onSelf = true;
                var call7416 = callmethodChecked(this, "compilenode(1)", [1], call7415);
                // call case 6: other requests
                var call7417 = callmethodChecked(var_o, "register:=(1)", [1], call7416);
                if7407 = call7417;
              } else {
                var if7418 = GraceDone;
                setLineNumber(1517);    // compilenode string
                var string7419 = new GraceString("identifier");
                var opresult7422 = callmethodChecked(var_oKind, "==(1)", [1], string7419);
                if (Grace_isTrue(opresult7422)) {
                  var if7423 = GraceDone;
                  setLineNumber(1518);    // compilenode string
                  var string7424 = new GraceString("false");
                  // call case 6: other requests
                  var call7427 = callmethodChecked(var_o, "value", []);
                  var opresult7429 = callmethodChecked(call7427, "==(1)", [1], string7424);
                  var string7431 = new GraceString("true");
                  // call case 6: other requests
                  var call7434 = callmethodChecked(var_o, "value", []);
                  var opresult7436 = callmethodChecked(call7434, "==(1)", [1], string7431);
                  var opresult7438 = callmethodChecked(opresult7436, "||(1)", [1], opresult7429);
                  if (Grace_isTrue(opresult7438)) {
                    setLineNumber(1519);    // compilenode num
                    var var_val = new GraceNum(0);
                    var if7439 = GraceDone;
                    setLineNumber(1520);    // compilenode string
                    var string7440 = new GraceString("true");
                    // call case 6: other requests
                    var call7443 = callmethodChecked(var_o, "value", []);
                    var opresult7445 = callmethodChecked(call7443, "==(1)", [1], string7440);
                    if (Grace_isTrue(opresult7445)) {
                      setLineNumber(1521);    // compilenode num
                      var_val = new GraceNum(1);
                      if7439 = GraceDone;
                    }
                    setLineNumber(1523);    // compilenode string
                    var string7447 = new GraceString(");");
                    var string7450 = new GraceString(" = alloc_Boolean(");
                    var opresult7452 = callmethodChecked(string7450, "++(1)", [1], var_val);
                    var opresult7454 = callmethodChecked(opresult7452, "++(1)", [1], string7447);
                    var string7457 = new GraceString("  Object bool");
                    var opresult7459 = callmethodChecked(string7457, "++(1)", [1], var_auto__95__count);
                    var opresult7461 = callmethodChecked(opresult7459, "++(1)", [1], opresult7454);
                    // call case 4: self request
                    onSelf = true;
                    var call7462 = callmethodChecked(this, "out(1)", [1], opresult7461);
                    setLineNumber(1524);    // compilenode string
                    var string7465 = new GraceString("bool");
                    var opresult7467 = callmethodChecked(string7465, "++(1)", [1], var_auto__95__count);
                    // call case 6: other requests
                    var call7468 = callmethodChecked(var_o, "register:=(1)", [1], opresult7467);
                    setLineNumber(1525);    // compilenode identifier
                    var opresult7471 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
                    var_auto__95__count = opresult7471;
                    if7423 = GraceDone;
                  } else {
                    setLineNumber(1527);    // compilenode identifier
                    // call case 4: self request
                    onSelf = true;
                    var call7473 = callmethodChecked(this, "compileidentifier(1)", [1], var_o);
                    if7423 = call7473;
                  }
                  if7418 = if7423;
                } else {
                  var if7474 = GraceDone;
                  setLineNumber(1529);    // compilenode string
                  var string7475 = new GraceString("defdec");
                  var opresult7478 = callmethodChecked(var_oKind, "==(1)", [1], string7475);
                  if (Grace_isTrue(opresult7478)) {
                    setLineNumber(1530);    // compilenode identifier
                    // call case 4: self request
                    onSelf = true;
                    var call7480 = callmethodChecked(this, "compiledefdec(1)", [1], var_o);
                    if7474 = call7480;
                  } else {
                    var if7481 = GraceDone;
                    setLineNumber(1531);    // compilenode string
                    var string7482 = new GraceString("vardec");
                    var opresult7485 = callmethodChecked(var_oKind, "==(1)", [1], string7482);
                    if (Grace_isTrue(opresult7485)) {
                      setLineNumber(1532);    // compilenode identifier
                      // call case 4: self request
                      onSelf = true;
                      var call7487 = callmethodChecked(this, "compilevardec(1)", [1], var_o);
                      if7481 = call7487;
                    } else {
                      var if7488 = GraceDone;
                      setLineNumber(1533);    // compilenode string
                      var string7489 = new GraceString("block");
                      var opresult7492 = callmethodChecked(var_oKind, "==(1)", [1], string7489);
                      if (Grace_isTrue(opresult7492)) {
                        setLineNumber(1534);    // compilenode identifier
                        // call case 4: self request
                        onSelf = true;
                        var call7494 = callmethodChecked(this, "compileblock(1)", [1], var_o);
                        if7488 = call7494;
                      } else {
                        var if7495 = GraceDone;
                        setLineNumber(1535);    // compilenode string
                        var string7496 = new GraceString("method");
                        var opresult7499 = callmethodChecked(var_oKind, "==(1)", [1], string7496);
                        if (Grace_isTrue(opresult7499)) {
                          setLineNumber(1536);    // compilenode string
                          var string7501 = new GraceString("self");
                          // call case 4: self request
                          onSelf = true;
                          var call7502 = callmethodChecked(this, "compilemethod(3)", [3], var_o, string7501, var_topLevelMethodPos);
                          setLineNumber(1537);    // compilenode identifier
                          var opresult7505 = callmethodChecked(var_topLevelMethodPos, "+(1)", [1], new GraceNum(1));
                          var_topLevelMethodPos = opresult7505;
                          if7495 = GraceDone;
                        } else {
                          var if7506 = GraceDone;
                          setLineNumber(1538);    // compilenode string
                          var string7507 = new GraceString("array");
                          var opresult7510 = callmethodChecked(var_oKind, "==(1)", [1], string7507);
                          if (Grace_isTrue(opresult7510)) {
                            setLineNumber(1539);    // compilenode identifier
                            // call case 4: self request
                            onSelf = true;
                            var call7512 = callmethodChecked(this, "compilearray(1)", [1], var_o);
                            if7506 = call7512;
                          } else {
                            var if7513 = GraceDone;
                            setLineNumber(1540);    // compilenode string
                            var string7514 = new GraceString("bind");
                            var opresult7517 = callmethodChecked(var_oKind, "==(1)", [1], string7514);
                            if (Grace_isTrue(opresult7517)) {
                              setLineNumber(1541);    // compilenode identifier
                              // call case 4: self request
                              onSelf = true;
                              var call7519 = callmethodChecked(this, "compilebind(1)", [1], var_o);
                              if7513 = call7519;
                            } else {
                              var if7520 = GraceDone;
                              setLineNumber(1542);    // compilenode string
                              var string7521 = new GraceString("if");
                              var opresult7524 = callmethodChecked(var_oKind, "==(1)", [1], string7521);
                              if (Grace_isTrue(opresult7524)) {
                                setLineNumber(1543);    // compilenode identifier
                                // call case 4: self request
                                onSelf = true;
                                var call7526 = callmethodChecked(this, "compileif(1)", [1], var_o);
                                if7520 = call7526;
                              } else {
                                var if7527 = GraceDone;
                                setLineNumber(1544);    // compilenode string
                                var string7528 = new GraceString("matchcase");
                                var opresult7531 = callmethodChecked(var_oKind, "==(1)", [1], string7528);
                                if (Grace_isTrue(opresult7531)) {
                                  setLineNumber(1545);    // compilenode identifier
                                  // call case 4: self request
                                  onSelf = true;
                                  var call7533 = callmethodChecked(this, "compilematchcase(1)", [1], var_o);
                                  if7527 = call7533;
                                } else {
                                  var if7534 = GraceDone;
                                  setLineNumber(1546);    // compilenode string
                                  var string7535 = new GraceString("trycatch");
                                  var opresult7538 = callmethodChecked(var_oKind, "==(1)", [1], string7535);
                                  if (Grace_isTrue(opresult7538)) {
                                    setLineNumber(1547);    // compilenode identifier
                                    // call case 4: self request
                                    onSelf = true;
                                    var call7540 = callmethodChecked(this, "compiletrycatch(1)", [1], var_o);
                                    if7534 = call7540;
                                  } else {
                                    var if7541 = GraceDone;
                                    setLineNumber(1548);    // compilenode string
                                    var string7542 = new GraceString("object");
                                    var opresult7545 = callmethodChecked(var_oKind, "==(1)", [1], string7542);
                                    if (Grace_isTrue(opresult7545)) {
                                      setLineNumber(1549);    // compilenode string
                                      var string7547 = new GraceString("self");
                                      // call case 4: self request
                                      onSelf = true;
                                      var call7548 = callmethodChecked(this, "compileobject(2)", [2], var_o, string7547);
                                      if7541 = call7548;
                                    } else {
                                      var if7549 = GraceDone;
                                      setLineNumber(1550);    // compilenode string
                                      var string7550 = new GraceString("typedec");
                                      var opresult7553 = callmethodChecked(var_oKind, "==(1)", [1], string7550);
                                      if (Grace_isTrue(opresult7553)) {
                                        setLineNumber(1551);    // compilenode identifier
                                        // call case 4: self request
                                        onSelf = true;
                                        var call7555 = callmethodChecked(this, "compiletypedec(1)", [1], var_o);
                                        if7549 = call7555;
                                      } else {
                                        var if7556 = GraceDone;
                                        setLineNumber(1552);    // compilenode string
                                        var string7557 = new GraceString("typeliteral");
                                        var opresult7560 = callmethodChecked(var_oKind, "==(1)", [1], string7557);
                                        if (Grace_isTrue(opresult7560)) {
                                          setLineNumber(1553);    // compilenode identifier
                                          // call case 4: self request
                                          onSelf = true;
                                          var call7562 = callmethodChecked(this, "compiletypeliteral(1)", [1], var_o);
                                          if7556 = call7562;
                                        } else {
                                          var if7563 = GraceDone;
                                          setLineNumber(1554);    // compilenode string
                                          var string7564 = new GraceString("member");
                                          var opresult7567 = callmethodChecked(var_oKind, "==(1)", [1], string7564);
                                          if (Grace_isTrue(opresult7567)) {
                                            setLineNumber(1555);    // compilenode identifier
                                            // call case 4: self request
                                            onSelf = true;
                                            var call7569 = callmethodChecked(this, "compilemember(1)", [1], var_o);
                                            if7563 = call7569;
                                          } else {
                                            var if7570 = GraceDone;
                                            setLineNumber(1556);    // compilenode string
                                            var string7571 = new GraceString("call");
                                            var opresult7574 = callmethodChecked(var_oKind, "==(1)", [1], string7571);
                                            if (Grace_isTrue(opresult7574)) {
                                              var if7575 = GraceDone;
                                              setLineNumber(1557);    // compilenode member
                                              // call case 6: other requests
                                              // call case 6: other requests
                                              var call7578 = callmethodChecked(var_o, "receiver", []);
                                              var call7579 = callmethodChecked(call7578, "isPrelude", []);
                                              if (Grace_isTrue(call7579)) {
                                                var if7580 = GraceDone;
                                                setLineNumber(1558);    // compilenode string
                                                var string7581 = new GraceString("print(1)");
                                                // call case 6: other requests
                                                var call7584 = callmethodChecked(var_o, "nameString", []);
                                                var opresult7586 = callmethodChecked(call7584, "==(1)", [1], string7581);
                                                if (Grace_isTrue(opresult7586)) {
                                                  setLineNumber(1559);    // compilenode identifier
                                                  // call case 4: self request
                                                  onSelf = true;
                                                  var call7588 = callmethodChecked(this, "compilePrint(1)", [1], var_o);
                                                  if7580 = call7588;
                                                } else {
                                                  var if7589 = GraceDone;
                                                  setLineNumber(1560);    // compilenode string
                                                  var string7590 = new GraceString("native(1)code(1)");
                                                  // call case 6: other requests
                                                  var call7593 = callmethodChecked(var_o, "nameString", []);
                                                  var opresult7595 = callmethodChecked(call7593, "==(1)", [1], string7590);
                                                  if (Grace_isTrue(opresult7595)) {
                                                    setLineNumber(1561);    // compilenode identifier
                                                    // call case 4: self request
                                                    onSelf = true;
                                                    var call7597 = callmethodChecked(this, "compileNativeCode(1)", [1], var_o);
                                                    if7589 = call7597;
                                                  } else {
                                                    setLineNumber(1563);    // compilenode identifier
                                                    // call case 4: self request
                                                    onSelf = true;
                                                    var call7599 = callmethodChecked(this, "compilecall(2)", [2], var_o, GraceFalse);
                                                    if7589 = call7599;
                                                  }
                                                  if7580 = if7589;
                                                }
                                                if7575 = if7580;
                                              } else {
                                                setLineNumber(1566);    // compilenode identifier
                                                // call case 4: self request
                                                onSelf = true;
                                                var call7601 = callmethodChecked(this, "compilecall(2)", [2], var_o, GraceFalse);
                                                if7575 = call7601;
                                              }
                                              if7570 = if7575;
                                            } else {
                                              var if7602 = GraceDone;
                                              setLineNumber(1568);    // compilenode string
                                              var string7603 = new GraceString("op");
                                              var opresult7606 = callmethodChecked(var_oKind, "==(1)", [1], string7603);
                                              if (Grace_isTrue(opresult7606)) {
                                                setLineNumber(1569);    // compilenode identifier
                                                // call case 4: self request
                                                onSelf = true;
                                                var call7608 = callmethodChecked(this, "compileop(1)", [1], var_o);
                                                if7602 = call7608;
                                              }
                                              if7570 = if7602;
                                            }
                                            if7563 = if7570;
                                          }
                                          if7556 = if7563;
                                        }
                                        if7549 = if7556;
                                      }
                                      if7541 = if7549;
                                    }
                                    if7534 = if7541;
                                  }
                                  if7527 = if7534;
                                }
                                if7520 = if7527;
                              }
                              if7513 = if7520;
                            }
                            if7506 = if7513;
                          }
                          if7495 = if7506;
                        }
                        if7488 = if7495;
                      }
                      if7481 = if7488;
                    }
                    if7474 = if7481;
                  }
                  if7418 = if7474;
                }
                if7407 = if7418;
              }
              if7400 = if7407;
            }
            if7393 = if7400;
          }
          if7386 = if7393;
        }
        if7314 = if7386;
      }
      if7307 = if7314;
    }
    setLineNumber(1571);    // compilenode string
    var string7610 = new GraceString(")");
    var string7613 = new GraceString(" (depth = ");
    // call case 6: other requests
    var call7616 = callmethodChecked(var_o, "register", []);
    var string7618 = new GraceString(" node returning ");
    var string7621 = new GraceString("// compiled ");
    var opresult7623 = callmethodChecked(string7621, "++(1)", [1], var_oKind);
    var opresult7625 = callmethodChecked(opresult7623, "++(1)", [1], string7618);
    var opresult7627 = callmethodChecked(opresult7625, "++(1)", [1], call7616);
    var opresult7629 = callmethodChecked(opresult7627, "++(1)", [1], string7613);
    var opresult7631 = callmethodChecked(opresult7629, "++(1)", [1], var_compilationDepth);
    var opresult7633 = callmethodChecked(opresult7631, "++(1)", [1], string7610);
    // call case 4: self request
    onSelf = true;
    var call7634 = callmethodChecked(this, "out(1)", [1], opresult7633);
    setLineNumber(1572);    // compilenode identifier
    var diff7637 = callmethodChecked(var_compilationDepth, "-(1)", [1], new GraceNum(1));
    var_compilationDepth = diff7637;
    setLineNumber(1573);    // compilenode member
    // call case 6: other requests
    var call7639 = callmethodChecked(var_o, "register", []);
    return call7639;
  };
  func7254.paramCounts = [1];
  this.methods["compilenode(1)"] = func7254;
  func7254.definitionLine = 1487;
  func7254.definitionModule = "genc";
  setLineNumber(1576);    // compilenode method
  var func7640 = function(argcv) {    // method compileDynamicModule(_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_fnBase = arguments[curarg];
    curarg++;
    var var_buildinfo = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(1579);    // compilenode string
    var string7641 = new GraceString("");
    var var_dlbit = string7641;
    setLineNumber(1580);    // compilenode string
    var string7642 = new GraceString("");
    var var_exportDynamicBit = string7642;
    setLineNumber(1581);    // compilenode string
    var string7643 = new GraceString("ld -ldl -o /dev/null 2>/dev/null");
    var var_cmd = string7643;
    var if7644 = GraceDone;
    setLineNumber(1582);    // compilenode identifier
    // call case 6: other requests
    var call7646 = callmethodChecked(var_io, "system(1)", [1], var_cmd);
    if (Grace_isTrue(call7646)) {
      setLineNumber(1583);    // compilenode string
      var string7647 = new GraceString("-ldl");
      var_dlbit = string7647;
      if7644 = GraceDone;
    }
    setLineNumber(1585);    // compilenode string
    var string7648 = new GraceString("ld -o /dev/null --export-dynamic -lc >/dev/null 2>&1");
    var_cmd = string7648;
    var if7649 = GraceDone;
    setLineNumber(1586);    // compilenode identifier
    // call case 6: other requests
    var call7651 = callmethodChecked(var_io, "system(1)", [1], var_cmd);
    if (Grace_isTrue(call7651)) {
      setLineNumber(1587);    // compilenode string
      var string7652 = new GraceString("-Wl,--export-dynamic");
      var_exportDynamicBit = string7652;
      if7649 = GraceDone;
    } else {
      setLineNumber(1589);    // compilenode string
      var string7653 = new GraceString("ld -o /dev/null -undefined dynamic_lookup -lc >/dev/null 2>&1");
      var_cmd = string7653;
      var if7654 = GraceDone;
      setLineNumber(1590);    // compilenode identifier
      // call case 6: other requests
      var call7656 = callmethodChecked(var_io, "system(1)", [1], var_cmd);
      if (Grace_isTrue(call7656)) {
        setLineNumber(1591);    // compilenode string
        var string7657 = new GraceString("-Wl,-undefined -Wl,dynamic_lookup");
        var_exportDynamicBit = string7657;
        if7654 = GraceDone;
      }
      if7649 = if7654;
    }
    setLineNumber(1596);    // compilenode string
    var string7658 = new GraceString(".c\" ");
    var string7661 = new GraceString(" \"");
    var string7664 = new GraceString("-fPIC ");
    var opresult7666 = callmethodChecked(string7664, "++(1)", [1], var_exportDynamicBit);
    var opresult7668 = callmethodChecked(opresult7666, "++(1)", [1], string7661);
    var opresult7670 = callmethodChecked(opresult7668, "++(1)", [1], var_fnBase);
    var opresult7672 = callmethodChecked(opresult7670, "++(1)", [1], string7658);
    setLineNumber(1595);    // compilenode string
    var string7674 = new GraceString(".gso\" ");
    var string7677 = new GraceString("\" -shared -o \"");
    // call case 6: other requests
    var call7680 = callmethodChecked(var_buildinfo, "includepath", []);
    var string7682 = new GraceString("\" -I\"");
    // call case 6: other requests
    var call7685 = callmethodChecked(var_sys, "execPath", []);
    var string7687 = new GraceString("-I\"");
    var opresult7689 = callmethodChecked(string7687, "++(1)", [1], call7685);
    var opresult7691 = callmethodChecked(opresult7689, "++(1)", [1], string7682);
    var opresult7693 = callmethodChecked(opresult7691, "++(1)", [1], call7680);
    var opresult7695 = callmethodChecked(opresult7693, "++(1)", [1], string7677);
    var opresult7697 = callmethodChecked(opresult7695, "++(1)", [1], var_fnBase);
    var opresult7699 = callmethodChecked(opresult7697, "++(1)", [1], string7674);
    setLineNumber(1594);    // compilenode string
    var string7701 = new GraceString("/../include\" ");
    // call case 6: other requests
    var call7704 = callmethodChecked(var_sys, "execPath", []);
    var string7706 = new GraceString("\" -I\"");
    // call case 6: other requests
    var call7709 = callmethodChecked(var_util, "gracelibPath", []);
    var string7711 = new GraceString("gcc -DDYNAMIC -g -I\"");
    var opresult7713 = callmethodChecked(string7711, "++(1)", [1], call7709);
    var opresult7715 = callmethodChecked(opresult7713, "++(1)", [1], string7706);
    var opresult7717 = callmethodChecked(opresult7715, "++(1)", [1], call7704);
    var opresult7719 = callmethodChecked(opresult7717, "++(1)", [1], string7701);
    var opresult7721 = callmethodChecked(opresult7719, "++(1)", [1], opresult7699);
    var opresult7723 = callmethodChecked(opresult7721, "++(1)", [1], opresult7672);
    var_cmd = opresult7723;
    var if7724 = GraceDone;
    setLineNumber(1597);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call7727 = callmethodChecked(var_io, "system(1)", [1], var_cmd);
    var call7728 = callmethodChecked(call7727, "not", []);
    if (Grace_isTrue(call7728)) {
      setLineNumber(1598);    // compilenode string
      var string7730 = new GraceString("Fatal error: Failed compiling dynamic module.\n");
      // call case 6: other requests
      // call case 6: other requests
      var call7732 = callmethodChecked(var_io, "error", []);
      var call7733 = callmethodChecked(call7732, "write(1)", [1], string7730);
      setLineNumber(1599);    // compilenode string
      var string7735 = new GraceString("\n");
      var string7738 = new GraceString("The failing command was\n");
      var opresult7740 = callmethodChecked(string7738, "++(1)", [1], var_cmd);
      var opresult7742 = callmethodChecked(opresult7740, "++(1)", [1], string7735);
      // call case 6: other requests
      // call case 6: other requests
      var call7744 = callmethodChecked(var_io, "error", []);
      var call7745 = callmethodChecked(call7744, "write(1)", [1], opresult7742);
      setLineNumber(1600);    // compilenode num
      // call case 6: other requests
      var call7747 = callmethodChecked(var_sys, "exit(1)", [1], new GraceNum(3));
      if7724 = call7747;
    }
    return if7724;
  };
  func7640.paramCounts = [2];
  this.methods["compileDynamicModule(2)"] = func7640;
  func7640.definitionLine = 1576;
  func7640.definitionModule = "genc";
  setLineNumber(1603);    // compilenode method
  var func7748 = function(argcv) {    // method compileStaticModule(_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_fnBase = arguments[curarg];
    curarg++;
    var var_buildinfo = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(1607);    // compilenode string
    var string7749 = new GraceString(".c\"");
    var string7752 = new GraceString(".gcn\" -c \"");
    var string7755 = new GraceString("\" -o \"");
    // call case 6: other requests
    var call7758 = callmethodChecked(var_buildinfo, "includepath", []);
    var string7760 = new GraceString("\" -I\"");
    // call case 6: other requests
    var call7763 = callmethodChecked(var_sys, "execPath", []);
    var string7765 = new GraceString("-I\"");
    var opresult7767 = callmethodChecked(string7765, "++(1)", [1], call7763);
    var opresult7769 = callmethodChecked(opresult7767, "++(1)", [1], string7760);
    var opresult7771 = callmethodChecked(opresult7769, "++(1)", [1], call7758);
    var opresult7773 = callmethodChecked(opresult7771, "++(1)", [1], string7755);
    var opresult7775 = callmethodChecked(opresult7773, "++(1)", [1], var_fnBase);
    var opresult7777 = callmethodChecked(opresult7775, "++(1)", [1], string7752);
    var opresult7779 = callmethodChecked(opresult7777, "++(1)", [1], var_fnBase);
    var opresult7781 = callmethodChecked(opresult7779, "++(1)", [1], string7749);
    setLineNumber(1606);    // compilenode string
    var string7783 = new GraceString("/../include\" ");
    // call case 6: other requests
    var call7786 = callmethodChecked(var_sys, "execPath", []);
    var string7788 = new GraceString("\" -I\"");
    // call case 6: other requests
    var call7791 = callmethodChecked(var_util, "gracelibPath", []);
    var string7793 = new GraceString("gcc -std=c99 -g -I\"");
    var opresult7795 = callmethodChecked(string7793, "++(1)", [1], call7791);
    var opresult7797 = callmethodChecked(opresult7795, "++(1)", [1], string7788);
    var opresult7799 = callmethodChecked(opresult7797, "++(1)", [1], call7786);
    var opresult7801 = callmethodChecked(opresult7799, "++(1)", [1], string7783);
    var opresult7803 = callmethodChecked(opresult7801, "++(1)", [1], opresult7781);
    var var_cmd = opresult7803;
    var if7804 = GraceDone;
    setLineNumber(1611);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call7807 = callmethodChecked(var_io, "system(1)", [1], var_cmd);
    var call7808 = callmethodChecked(call7807, "not", []);
    if (Grace_isTrue(call7808)) {
      setLineNumber(1612);    // compilenode string
      var string7810 = new GraceString(" failed.\n");
      var string7813 = new GraceString("Fatal error: C compilation of ");
      var opresult7815 = callmethodChecked(string7813, "++(1)", [1], var_modname);
      var opresult7817 = callmethodChecked(opresult7815, "++(1)", [1], string7810);
      // call case 6: other requests
      // call case 6: other requests
      var call7819 = callmethodChecked(var_io, "error", []);
      var call7820 = callmethodChecked(call7819, "write(1)", [1], opresult7817);
      setLineNumber(1613);    // compilenode string
      var string7822 = new GraceString("\n");
      var string7825 = new GraceString("The failing command was\n");
      var opresult7827 = callmethodChecked(string7825, "++(1)", [1], var_cmd);
      var opresult7829 = callmethodChecked(opresult7827, "++(1)", [1], string7822);
      // call case 6: other requests
      // call case 6: other requests
      var call7831 = callmethodChecked(var_io, "error", []);
      var call7832 = callmethodChecked(call7831, "write(1)", [1], opresult7829);
      setLineNumber(1614);    // compilenode num
      // call case 6: other requests
      var call7834 = callmethodChecked(var_sys, "exit(1)", [1], new GraceNum(3));
      if7804 = call7834;
    }
    return if7804;
  };
  func7748.paramCounts = [2];
  this.methods["compileStaticModule(2)"] = func7748;
  func7748.definitionLine = 1603;
  func7748.definitionModule = "genc";
  setLineNumber(1618);    // compilenode method
  var func7835 = function(argcv) {    // method linkExecutable(_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_fnBase = arguments[curarg];
    curarg++;
    var var_buildinfo = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(1619);    // compilenode string
    var string7837 = new GraceString("linking.");
    // call case 6: other requests
    var call7838 = callmethodChecked(var_util, "log_verbose(1)", [1], string7837);
    setLineNumber(1620);    // compilenode string
    var string7839 = new GraceString("");
    var var_dlbit = string7839;
    setLineNumber(1621);    // compilenode string
    var string7840 = new GraceString("");
    var var_exportDynamicBit = string7840;
    setLineNumber(1622);    // compilenode string
    var string7841 = new GraceString("ld -ldl -o /dev/null 2>/dev/null");
    var var_cmd = string7841;
    var if7842 = GraceDone;
    setLineNumber(1623);    // compilenode identifier
    // call case 6: other requests
    var call7844 = callmethodChecked(var_io, "system(1)", [1], var_cmd);
    if (Grace_isTrue(call7844)) {
      setLineNumber(1624);    // compilenode string
      var string7845 = new GraceString("-ldl");
      var_dlbit = string7845;
      if7842 = GraceDone;
    }
    setLineNumber(1626);    // compilenode string
    var string7846 = new GraceString("ld -o /dev/null --export-dynamic -lc >/dev/null 2>&1");
    var_cmd = string7846;
    var if7847 = GraceDone;
    setLineNumber(1627);    // compilenode identifier
    // call case 6: other requests
    var call7849 = callmethodChecked(var_io, "system(1)", [1], var_cmd);
    if (Grace_isTrue(call7849)) {
      setLineNumber(1628);    // compilenode string
      var string7850 = new GraceString("-Wl,--export-dynamic");
      var_exportDynamicBit = string7850;
      if7847 = GraceDone;
    }
    setLineNumber(1630);    // compilenode string
    var string7851 = new GraceString(".gcn\" ");
    var string7854 = new GraceString(" \"");
    var string7857 = new GraceString("\" -fPIC ");
    var string7860 = new GraceString("gcc -g -o \"");
    var opresult7862 = callmethodChecked(string7860, "++(1)", [1], var_fnBase);
    var opresult7864 = callmethodChecked(opresult7862, "++(1)", [1], string7857);
    var opresult7866 = callmethodChecked(opresult7864, "++(1)", [1], var_exportDynamicBit);
    var opresult7868 = callmethodChecked(opresult7866, "++(1)", [1], string7854);
    var opresult7870 = callmethodChecked(opresult7868, "++(1)", [1], var_fnBase);
    var opresult7872 = callmethodChecked(opresult7870, "++(1)", [1], string7851);
    var_cmd = opresult7872;
    var if7873 = GraceDone;
    setLineNumber(1632);    // compilenode string
    var string7875 = new GraceString("/gracelib.o");
    // call case 6: other requests
    var call7878 = callmethodChecked(var_util, "gracelibPath", []);
    var string7880 = new GraceString("");
    var opresult7882 = callmethodChecked(string7880, "++(1)", [1], call7878);
    var opresult7884 = callmethodChecked(opresult7882, "++(1)", [1], string7875);
    // call case 6: other requests
    var call7885 = callmethodChecked(var_io, "exists(1)", [1], opresult7884);
    if (Grace_isTrue(call7885)) {
      setLineNumber(1633);    // compilenode string
      var string7886 = new GraceString("/gracelib.o\" ");
      // call case 6: other requests
      var call7889 = callmethodChecked(var_util, "gracelibPath", []);
      var string7891 = new GraceString("\"");
      var opresult7893 = callmethodChecked(string7891, "++(1)", [1], call7889);
      var opresult7895 = callmethodChecked(opresult7893, "++(1)", [1], string7886);
      var opresult7898 = callmethodChecked(var_cmd, "++(1)", [1], opresult7895);
      var_cmd = opresult7898;
      if7873 = GraceDone;
    } else {
      var if7899 = GraceDone;
      setLineNumber(1634);    // compilenode string
      var string7901 = new GraceString("/gracelib.o");
      // call case 6: other requests
      var call7904 = callmethodChecked(var_buildinfo, "objectpath", []);
      var string7906 = new GraceString("");
      var opresult7908 = callmethodChecked(string7906, "++(1)", [1], call7904);
      var opresult7910 = callmethodChecked(opresult7908, "++(1)", [1], string7901);
      // call case 6: other requests
      var call7911 = callmethodChecked(var_io, "exists(1)", [1], opresult7910);
      if (Grace_isTrue(call7911)) {
        setLineNumber(1635);    // compilenode string
        var string7912 = new GraceString("/gracelib.o\" ");
        // call case 6: other requests
        var call7915 = callmethodChecked(var_buildinfo, "objectpath", []);
        var string7917 = new GraceString("\"");
        var opresult7919 = callmethodChecked(string7917, "++(1)", [1], call7915);
        var opresult7921 = callmethodChecked(opresult7919, "++(1)", [1], string7912);
        var opresult7924 = callmethodChecked(var_cmd, "++(1)", [1], opresult7921);
        var_cmd = opresult7924;
        if7899 = GraceDone;
      } else {
        var if7925 = GraceDone;
        setLineNumber(1636);    // compilenode string
        var string7927 = new GraceString("/gracelib.o");
        // call case 6: other requests
        var call7930 = callmethodChecked(var_util, "outDir", []);
        var string7932 = new GraceString("");
        var opresult7934 = callmethodChecked(string7932, "++(1)", [1], call7930);
        var opresult7936 = callmethodChecked(opresult7934, "++(1)", [1], string7927);
        // call case 6: other requests
        var call7937 = callmethodChecked(var_io, "exists(1)", [1], opresult7936);
        if (Grace_isTrue(call7937)) {
          setLineNumber(1637);    // compilenode string
          var string7938 = new GraceString("/gracelib.o\" ");
          // call case 6: other requests
          var call7941 = callmethodChecked(var_util, "outDir", []);
          var string7943 = new GraceString("\"");
          var opresult7945 = callmethodChecked(string7943, "++(1)", [1], call7941);
          var opresult7947 = callmethodChecked(opresult7945, "++(1)", [1], string7938);
          var opresult7950 = callmethodChecked(var_cmd, "++(1)", [1], opresult7947);
          var_cmd = opresult7950;
          if7925 = GraceDone;
        } else {
          var if7951 = GraceDone;
          setLineNumber(1638);    // compilenode string
          var string7953 = new GraceString("/gracelib.o");
          // call case 6: other requests
          var call7956 = callmethodChecked(var_util, "execDir", []);
          var string7958 = new GraceString("");
          var opresult7960 = callmethodChecked(string7958, "++(1)", [1], call7956);
          var opresult7962 = callmethodChecked(opresult7960, "++(1)", [1], string7953);
          // call case 6: other requests
          var call7963 = callmethodChecked(var_io, "exists(1)", [1], opresult7962);
          if (Grace_isTrue(call7963)) {
            setLineNumber(1639);    // compilenode string
            var string7964 = new GraceString("/gracelib.o\" ");
            // call case 6: other requests
            var call7967 = callmethodChecked(var_util, "execDir", []);
            var string7969 = new GraceString("\"");
            var opresult7971 = callmethodChecked(string7969, "++(1)", [1], call7967);
            var opresult7973 = callmethodChecked(opresult7971, "++(1)", [1], string7964);
            var opresult7976 = callmethodChecked(var_cmd, "++(1)", [1], opresult7973);
            var_cmd = opresult7976;
            if7951 = GraceDone;
          } else {
            setLineNumber(1641);    // compilenode string
            var string7978 = new GraceString("Unable to link: can't find file gracelib.o\n");
            // call case 6: other requests
            // call case 6: other requests
            var call7980 = callmethodChecked(var_io, "error", []);
            var call7981 = callmethodChecked(call7980, "write(1)", [1], string7978);
            setLineNumber(1642);    // compilenode num
            // call case 6: other requests
            var call7983 = callmethodChecked(var_sys, "exit(1)", [1], new GraceNum(3));
            if7951 = call7983;
          }
          if7925 = if7951;
        }
        if7899 = if7925;
      }
      if7873 = if7899;
    }
    setLineNumber(1646);    // compilenode member
    // call case 6: other requests
    var call7986 = callmethodChecked(var_imports, "linkfiles", []);
    var block7987 = new GraceBlock(this, 1646, 1);
    setLineNumber(1);    // compilenode identifier
    block7987.real = function(var_fn) {
      setLineNumber(1647);    // compilenode string
      var string7988 = new GraceString("\"");
      var string7991 = new GraceString(" \"");
      var string7994 = new GraceString("");
      var opresult7996 = callmethodChecked(string7994, "++(1)", [1], var_cmd);
      var opresult7998 = callmethodChecked(opresult7996, "++(1)", [1], string7991);
      var opresult8000 = callmethodChecked(opresult7998, "++(1)", [1], var_fn);
      var opresult8002 = callmethodChecked(opresult8000, "++(1)", [1], string7988);
      var_cmd = opresult8002;
      return GraceDone;
    };
    // call case 5: prelude request
    var call8003 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call7986, block7987);
    setLineNumber(1649);    // compilenode string
    var string8004 = new GraceString("");
    var string8007 = new GraceString(" -lm ");
    var string8010 = new GraceString("");
    var opresult8012 = callmethodChecked(string8010, "++(1)", [1], var_cmd);
    var opresult8014 = callmethodChecked(opresult8012, "++(1)", [1], string8007);
    var opresult8016 = callmethodChecked(opresult8014, "++(1)", [1], var_dlbit);
    var opresult8018 = callmethodChecked(opresult8016, "++(1)", [1], string8004);
    var_cmd = opresult8018;
    var if8019 = GraceDone;
    setLineNumber(1650);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call8022 = callmethodChecked(var_io, "system(1)", [1], var_cmd);
    var call8023 = callmethodChecked(call8022, "not", []);
    if (Grace_isTrue(call8023)) {
      setLineNumber(1651);    // compilenode string
      var string8025 = new GraceString(".\n");
      var string8028 = new GraceString("Fatal Error: Failed linking executable for ");
      var opresult8030 = callmethodChecked(string8028, "++(1)", [1], var_modname);
      var opresult8032 = callmethodChecked(opresult8030, "++(1)", [1], string8025);
      // call case 6: other requests
      // call case 6: other requests
      var call8034 = callmethodChecked(var_io, "error", []);
      var call8035 = callmethodChecked(call8034, "write(1)", [1], opresult8032);
      setLineNumber(1652);    // compilenode string
      var string8037 = new GraceString("\n");
      var string8040 = new GraceString("The failing command was\n");
      var opresult8042 = callmethodChecked(string8040, "++(1)", [1], var_cmd);
      var opresult8044 = callmethodChecked(opresult8042, "++(1)", [1], string8037);
      // call case 6: other requests
      // call case 6: other requests
      var call8046 = callmethodChecked(var_io, "error", []);
      var call8047 = callmethodChecked(call8046, "write(1)", [1], opresult8044);
      setLineNumber(1653);    // compilenode num
      // call case 6: other requests
      var call8049 = callmethodChecked(var_sys, "exit(1)", [1], new GraceNum(3));
      if8019 = call8049;
    }
    return if8019;
  };
  func7835.paramCounts = [2];
  this.methods["linkExecutable(2)"] = func7835;
  func7835.definitionLine = 1618;
  func7835.definitionModule = "genc";
  setLineNumber(1657);    // compilenode method
  var func8050 = function(argcv) {    // method implementAliasesAndExclusionsFor(_)inheriting(_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    var var_e = arguments[curarg];
    curarg++;
    var var_superobj = arguments[curarg];
    curarg++;
    setModuleName("genc");
    var if8051 = GraceDone;
    setLineNumber(1661);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call8054 = callmethodChecked(var_e, "exclusions", []);
    var call8055 = callmethodChecked(call8054, "isEmpty", []);
    // call case 6: other requests
    // call case 6: other requests
    var call8059 = callmethodChecked(var_e, "aliases", []);
    var call8060 = callmethodChecked(call8059, "isEmpty", []);
    var opresult8062 = callmethodChecked(call8060, "&&(1)", [1], call8055);
    if (Grace_isTrue(opresult8062)) {
      return var_done;
    }
    setLineNumber(1664);    // compilenode string
    var string8064 = new GraceString("by the C code generator.");
    setLineNumber(1663);    // compilenode string
    var string8066 = new GraceString("I'm sorry, aliases and exclusions are not yet supported ");
    var opresult8068 = callmethodChecked(string8066, "++(1)", [1], string8064);
    setLineNumber(1664);    // compilenode member
    // call case 6: other requests
    var call8070 = callmethodChecked(var_e, "line", []);
    // call case 6: other requests
    setLineNumber(1663);    // compilenode identifier
    var call8071 = callmethodChecked(var_errormessages, "error(1)atLine(1)", [1, 1], opresult8068, call8070);
    return call8071;
  };
  func8050.paramCounts = [1, 2];
  this.methods["implementAliasesAndExclusionsFor(1)inheriting(2)"] = func8050;
  func8050.definitionLine = 1657;
  func8050.definitionModule = "genc";
  setLineNumber(1667);    // compilenode method
  var func8072 = function(argcv) {    // method compile(_,_,_,_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_moduleObject = arguments[curarg];
    curarg++;
    var var_outfile = arguments[curarg];
    curarg++;
    var var_rm = arguments[curarg];
    curarg++;
    var var_bt = arguments[curarg];
    curarg++;
    var var_buildinfo = arguments[curarg];
    curarg++;
    setModuleName("genc");
    setLineNumber(1668);    // compilenode string
    var string8074 = new GraceString("generating C code.");
    // call case 6: other requests
    var call8075 = callmethodChecked(var_util, "log_verbose(1)", [1], string8074);
    setLineNumber(1669);    // compilenode member
    // call case 6: other requests
    var call8077 = callmethodChecked(var_sys, "argv", []);
    var var_argv = call8077;
    setLineNumber(1670);    // compilenode vardec
    var var_cmd;
    setLineNumber(1671);    // compilenode member
    // call case 6: other requests
    var call8079 = callmethodChecked(var_moduleObject, "value", []);
    var_values = call8079;
    var if8080 = GraceDone;
    setLineNumber(1672);    // compilenode string
    var string8082 = new GraceString("ExtendedLineups");
    // call case 6: other requests
    // call case 6: other requests
    var call8084 = callmethodChecked(var_util, "extensions", []);
    var call8085 = callmethodChecked(call8084, "contains(1)", [1], string8082);
    if (Grace_isTrue(call8085)) {
      setLineNumber(1673);    // compilenode string
      var string8086 = new GraceString("alloc_BuiltinList()");
      var_bracketConstructor = string8086;
      if8080 = GraceDone;
    }
    setLineNumber(1675);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call8088 = callmethodChecked(this, "countbindings(1)", [1], var_values);
    var opresult8091 = callmethodChecked(new GraceNum(2), "+(1)", [1], call8088);
    var var_nummethods = opresult8091;
    setLineNumber(1676);    // compilenode block
    var block8093 = new GraceBlock(this, 1676, 1);
    setLineNumber(1);    // compilenode identifier
    block8093.real = function(var_v) {
      var if8094 = GraceDone;
      setLineNumber(1677);    // compilenode string
      var string8095 = new GraceString("vardec");
      // call case 6: other requests
      var call8098 = callmethodChecked(var_v, "kind", []);
      var opresult8100 = callmethodChecked(call8098, "==(1)", [1], string8095);
      if (Grace_isTrue(opresult8100)) {
        setLineNumber(1678);    // compilenode identifier
        var opresult8103 = callmethodChecked(var_nummethods, "+(1)", [1], new GraceNum(1));
        var_nummethods = opresult8103;
        if8094 = GraceDone;
      } else {
        var if8104 = GraceDone;
        setLineNumber(1679);    // compilenode string
        var string8105 = new GraceString("method");
        // call case 6: other requests
        var call8108 = callmethodChecked(var_v, "kind", []);
        var opresult8110 = callmethodChecked(call8108, "==(1)", [1], string8105);
        if (Grace_isTrue(opresult8110)) {
          setLineNumber(1680);    // compilenode identifier
          var opresult8113 = callmethodChecked(var_nummethods, "+(1)", [1], new GraceNum(1));
          var_nummethods = opresult8113;
          var if8114 = GraceDone;
          setLineNumber(1681);    // compilenode member
          // call case 6: other requests
          var call8116 = callmethodChecked(var_v, "isFresh", []);
          if (Grace_isTrue(call8116)) {
            setLineNumber(1682);    // compilenode identifier
            var opresult8119 = callmethodChecked(var_nummethods, "+(1)", [1], new GraceNum(1));
            var_nummethods = opresult8119;
            if8114 = GraceDone;
          }
          if8104 = if8114;
        }
        if8094 = if8104;
      }
      return if8094;
    };
    // call case 5: prelude request
    var call8120 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_values, block8093);
    setLineNumber(1686);    // compilenode member
    // call case 6: other requests
    var call8122 = callmethodChecked(var_moduleObject, "name", []);
    var_modname = call8122;
    setLineNumber(1687);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call8124 = callmethodChecked(this, "escapeident(1)", [1], var_modname);
    var_escmodname = call8124;
    setLineNumber(1688);    // compilenode identifier
    var_runmode = var_rm;
    setLineNumber(1689);    // compilenode identifier
    var_buildtype = var_bt;
    setLineNumber(1690);    // compilenode string
    var string8126 = new GraceString("#include <gracelib.h>");
    // call case 4: self request
    onSelf = true;
    var call8127 = callmethodChecked(this, "outprint(1)", [1], string8126);
    setLineNumber(1691);    // compilenode string
    var string8129 = new GraceString("#include <stdlib.h>");
    // call case 4: self request
    onSelf = true;
    var call8130 = callmethodChecked(this, "outprint(1)", [1], string8129);
    setLineNumber(1692);    // compilenode string
    var string8132 = new GraceString("#include <math.h>");
    // call case 4: self request
    onSelf = true;
    var call8133 = callmethodChecked(this, "outprint(1)", [1], string8132);
    setLineNumber(1693);    // compilenode string
    var string8135 = new GraceString("#include <float.h>");
    // call case 4: self request
    onSelf = true;
    var call8136 = callmethodChecked(this, "outprint(1)", [1], string8135);
    var if8137 = GraceDone;
    setLineNumber(1694);    // compilenode call
    // call case 6: other requests
    var string8140 = new GraceString("NoMain");
    // call case 6: other requests
    // call case 6: other requests
    var call8142 = callmethodChecked(var_util, "extensions", []);
    var call8143 = callmethodChecked(call8142, "contains(1)", [1], string8140);
    var call8144 = callmethodChecked(call8143, "prefix!", [0]);
    if (Grace_isTrue(call8144)) {
      setLineNumber(1695);    // compilenode string
      var string8146 = new GraceString("#ifndef __CYGWIN__");
      // call case 4: self request
      onSelf = true;
      var call8147 = callmethodChecked(this, "outprint(1)", [1], string8146);
      setLineNumber(1696);    // compilenode string
      var string8149 = new GraceString("#pragma weak main");
      // call case 4: self request
      onSelf = true;
      var call8150 = callmethodChecked(this, "outprint(1)", [1], string8149);
      setLineNumber(1697);    // compilenode string
      var string8152 = new GraceString("#endif");
      // call case 4: self request
      onSelf = true;
      var call8153 = callmethodChecked(this, "outprint(1)", [1], string8152);
      if8137 = call8153;
    }
    setLineNumber(1699);    // compilenode string
    var string8155 = new GraceString("\";");
    // call case 6: other requests
    var call8158 = callmethodChecked(var_buildinfo, "gitrevision", []);
    var string8160 = new GraceString("static char compilerRevision[] = \"");
    var opresult8162 = callmethodChecked(string8160, "++(1)", [1], call8158);
    var opresult8164 = callmethodChecked(opresult8162, "++(1)", [1], string8155);
    // call case 4: self request
    onSelf = true;
    var call8165 = callmethodChecked(this, "outprint(1)", [1], opresult8164);
    setLineNumber(1700);    // compilenode string
    var string8167 = new GraceString("static Object undefined;");
    // call case 4: self request
    onSelf = true;
    var call8168 = callmethodChecked(this, "outprint(1)", [1], string8167);
    setLineNumber(1701);    // compilenode string
    var string8170 = new GraceString("extern Object done;");
    // call case 4: self request
    onSelf = true;
    var call8171 = callmethodChecked(this, "outprint(1)", [1], string8170);
    setLineNumber(1702);    // compilenode string
    var string8173 = new GraceString("extern Object _prelude;");
    // call case 4: self request
    onSelf = true;
    var call8174 = callmethodChecked(this, "outprint(1)", [1], string8173);
    setLineNumber(1703);    // compilenode string
    var string8176 = new GraceString("extern Object ObjectType;");
    // call case 4: self request
    onSelf = true;
    var call8177 = callmethodChecked(this, "outprint(1)", [1], string8176);
    setLineNumber(1704);    // compilenode string
    var string8179 = new GraceString("extern Object String;");
    // call case 4: self request
    onSelf = true;
    var call8180 = callmethodChecked(this, "outprint(1)", [1], string8179);
    setLineNumber(1705);    // compilenode string
    var string8182 = new GraceString("extern Object Number;");
    // call case 4: self request
    onSelf = true;
    var call8183 = callmethodChecked(this, "outprint(1)", [1], string8182);
    setLineNumber(1706);    // compilenode string
    var string8185 = new GraceString("extern Object Boolean;");
    // call case 4: self request
    onSelf = true;
    var call8186 = callmethodChecked(this, "outprint(1)", [1], string8185);
    setLineNumber(1707);    // compilenode string
    var string8188 = new GraceString("extern Object Dynamic;");
    // call case 4: self request
    onSelf = true;
    var call8189 = callmethodChecked(this, "outprint(1)", [1], string8188);
    setLineNumber(1708);    // compilenode string
    var string8191 = new GraceString("extern Object Unknown;");
    // call case 4: self request
    onSelf = true;
    var call8192 = callmethodChecked(this, "outprint(1)", [1], string8191);
    setLineNumber(1709);    // compilenode string
    var string8194 = new GraceString("extern Object Block;");
    // call case 4: self request
    onSelf = true;
    var call8195 = callmethodChecked(this, "outprint(1)", [1], string8194);
    setLineNumber(1710);    // compilenode string
    var string8197 = new GraceString("extern Object Done;");
    // call case 4: self request
    onSelf = true;
    var call8198 = callmethodChecked(this, "outprint(1)", [1], string8197);
    setLineNumber(1711);    // compilenode string
    var string8200 = new GraceString("extern Object Type;");
    // call case 4: self request
    onSelf = true;
    var call8201 = callmethodChecked(this, "outprint(1)", [1], string8200);
    setLineNumber(1712);    // compilenode string
    var string8203 = new GraceString("extern Object GraceDefaultObject;");
    // call case 4: self request
    onSelf = true;
    var call8204 = callmethodChecked(this, "outprint(1)", [1], string8203);
    setLineNumber(1713);    // compilenode string
    var string8206 = new GraceString("extern Object sourceObject;");
    // call case 4: self request
    onSelf = true;
    var call8207 = callmethodChecked(this, "outprint(1)", [1], string8206);
    setLineNumber(1714);    // compilenode string
    var string8209 = new GraceString("static Object type_Object;");
    // call case 4: self request
    onSelf = true;
    var call8210 = callmethodChecked(this, "outprint(1)", [1], string8209);
    setLineNumber(1715);    // compilenode string
    var string8212 = new GraceString("static Object type_String;");
    // call case 4: self request
    onSelf = true;
    var call8213 = callmethodChecked(this, "outprint(1)", [1], string8212);
    setLineNumber(1716);    // compilenode string
    var string8215 = new GraceString("static Object type_Number;");
    // call case 4: self request
    onSelf = true;
    var call8216 = callmethodChecked(this, "outprint(1)", [1], string8215);
    setLineNumber(1717);    // compilenode string
    var string8218 = new GraceString("static Object type_Boolean;");
    // call case 4: self request
    onSelf = true;
    var call8219 = callmethodChecked(this, "outprint(1)", [1], string8218);
    setLineNumber(1718);    // compilenode string
    var string8221 = new GraceString("static Object type_Block;");
    // call case 4: self request
    onSelf = true;
    var call8222 = callmethodChecked(this, "outprint(1)", [1], string8221);
    setLineNumber(1719);    // compilenode string
    var string8224 = new GraceString("static Object type_Done;");
    // call case 4: self request
    onSelf = true;
    var call8225 = callmethodChecked(this, "outprint(1)", [1], string8224);
    setLineNumber(1720);    // compilenode string
    var string8227 = new GraceString("static Object type_Type;");
    // call case 4: self request
    onSelf = true;
    var call8228 = callmethodChecked(this, "outprint(1)", [1], string8227);
    setLineNumber(1721);    // compilenode string
    var string8230 = new GraceString("static Object argv;");
    // call case 4: self request
    onSelf = true;
    var call8231 = callmethodChecked(this, "outprint(1)", [1], string8230);
    setLineNumber(1722);    // compilenode string
    var string8233 = new GraceString("static Object emptyclosure;");
    // call case 4: self request
    onSelf = true;
    var call8234 = callmethodChecked(this, "outprint(1)", [1], string8233);
    setLineNumber(1723);    // compilenode string
    var string8236 = new GraceString("static Object prelude;");
    // call case 4: self request
    onSelf = true;
    var call8237 = callmethodChecked(this, "outprint(1)", [1], string8236);
    setLineNumber(1724);    // compilenode string
    var string8239 = new GraceString("static int isTailObject = 0;");
    // call case 4: self request
    onSelf = true;
    var call8240 = callmethodChecked(this, "outprint(1)", [1], string8239);
    setLineNumber(1725);    // compilenode string
    var string8242 = new GraceString("static Object inheritingObject = NULL;");
    // call case 4: self request
    onSelf = true;
    var call8243 = callmethodChecked(this, "outprint(1)", [1], string8242);
    setLineNumber(1726);    // compilenode string
    var string8245 = new GraceString("\";");
    var string8248 = new GraceString("static const char modulename[] = \"");
    var opresult8250 = callmethodChecked(string8248, "++(1)", [1], var_modname);
    var opresult8252 = callmethodChecked(opresult8250, "++(1)", [1], string8245);
    // call case 4: self request
    onSelf = true;
    var call8253 = callmethodChecked(this, "outprint(1)", [1], opresult8252);
    setLineNumber(1727);    // compilenode string
    var string8255 = new GraceString("Object module_StandardPrelude_init();");
    // call case 4: self request
    onSelf = true;
    var call8256 = callmethodChecked(this, "outprint(1)", [1], string8255);
    setLineNumber(1728);    // compilenode string
    var string8258 = new GraceString("static char *originalSourceLines[] = {");
    // call case 4: self request
    onSelf = true;
    var call8259 = callmethodChecked(this, "outprint(1)", [1], string8258);
    setLineNumber(1729);    // compilenode member
    // call case 6: other requests
    var call8262 = callmethodChecked(var_util, "cLines", []);
    var block8263 = new GraceBlock(this, 1729, 1);
    setLineNumber(1);    // compilenode identifier
    block8263.real = function(var_l) {
      setLineNumber(1730);    // compilenode string
      var string8265 = new GraceString("\",");
      var string8268 = new GraceString("  \"");
      var opresult8270 = callmethodChecked(string8268, "++(1)", [1], var_l);
      var opresult8272 = callmethodChecked(opresult8270, "++(1)", [1], string8265);
      // call case 4: self request
      onSelf = true;
      var call8273 = callmethodChecked(this, "outprint(1)", [1], opresult8272);
      return call8273;
    };
    // call case 5: prelude request
    var call8274 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call8262, block8263);
    setLineNumber(1732);    // compilenode string
    var string8276 = new GraceString("  NULL\n};");
    // call case 4: self request
    onSelf = true;
    var call8277 = callmethodChecked(this, "outprint(1)", [1], string8276);
    setLineNumber(1733);    // compilenode string
    var string8279 = new GraceString("String");
    // call case 6: other requests
    var call8280 = callmethodChecked(var_topLevelTypes, "put(2)", [2], string8279, GraceTrue);
    setLineNumber(1734);    // compilenode string
    var string8282 = new GraceString("Number");
    // call case 6: other requests
    var call8283 = callmethodChecked(var_topLevelTypes, "put(2)", [2], string8282, GraceTrue);
    setLineNumber(1735);    // compilenode string
    var string8285 = new GraceString("Boolean");
    // call case 6: other requests
    var call8286 = callmethodChecked(var_topLevelTypes, "put(2)", [2], string8285, GraceTrue);
    setLineNumber(1736);    // compilenode string
    var string8288 = new GraceString("Done");
    // call case 6: other requests
    var call8289 = callmethodChecked(var_topLevelTypes, "put(2)", [2], string8288, GraceTrue);
    setLineNumber(1737);    // compilenode string
    var string8291 = new GraceString("Block");
    // call case 6: other requests
    var call8292 = callmethodChecked(var_topLevelTypes, "put(2)", [2], string8291, GraceTrue);
    setLineNumber(1738);    // compilenode string
    var string8294 = new GraceString("_init() {");
    var string8297 = new GraceString("Object module_");
    var opresult8299 = callmethodChecked(string8297, "++(1)", [1], var_escmodname);
    var opresult8301 = callmethodChecked(opresult8299, "++(1)", [1], string8294);
    // call case 4: self request
    onSelf = true;
    var call8302 = callmethodChecked(this, "out(1)", [1], opresult8301);
    setLineNumber(1739);    // compilenode string
    var string8304 = new GraceString("  int flags = 0;");
    // call case 4: self request
    onSelf = true;
    var call8305 = callmethodChecked(this, "out(1)", [1], string8304);
    setLineNumber(1740);    // compilenode string
    var string8307 = new GraceString("  int frame = gc_frame_new();");
    // call case 4: self request
    onSelf = true;
    var call8308 = callmethodChecked(this, "out(1)", [1], string8307);
    setLineNumber(1741);    // compilenode string
    var string8310 = new GraceString(");");
    var string8313 = new GraceString(", ");
    var string8316 = new GraceString("  Object self = alloc_obj2(");
    var opresult8318 = callmethodChecked(string8316, "++(1)", [1], var_nummethods);
    var opresult8320 = callmethodChecked(opresult8318, "++(1)", [1], string8313);
    var opresult8322 = callmethodChecked(opresult8320, "++(1)", [1], var_nummethods);
    var opresult8324 = callmethodChecked(opresult8322, "++(1)", [1], string8310);
    // call case 4: self request
    onSelf = true;
    var call8325 = callmethodChecked(this, "out(1)", [1], opresult8324);
    setLineNumber(1742);    // compilenode string
    var string8327 = new GraceString("  self->class->definitionModule = modulename;");
    // call case 4: self request
    onSelf = true;
    var call8328 = callmethodChecked(this, "out(1)", [1], string8327);
    setLineNumber(1743);    // compilenode string
    var string8330 = new GraceString("  gc_root(self);");
    // call case 4: self request
    onSelf = true;
    var call8331 = callmethodChecked(this, "out(1)", [1], string8330);
    var if8332 = GraceDone;
    setLineNumber(1744);    // compilenode string
    var string8334 = new GraceString("NativePrelude");
    // call case 6: other requests
    // call case 6: other requests
    var call8336 = callmethodChecked(var_util, "extensions", []);
    var call8337 = callmethodChecked(call8336, "contains(1)", [1], string8334);
    if (Grace_isTrue(call8337)) {
      setLineNumber(1745);    // compilenode string
      var string8339 = new GraceString("  prelude = grace_prelude();");
      // call case 4: self request
      onSelf = true;
      var call8340 = callmethodChecked(this, "out(1)", [1], string8339);
      setLineNumber(1746);    // compilenode string
      var string8342 = new GraceString("  adddatum2(self, grace_prelude(), 0);");
      // call case 4: self request
      onSelf = true;
      var call8343 = callmethodChecked(this, "out(1)", [1], string8342);
      setLineNumber(1747);    // compilenode string
      var string8345 = new GraceString("  Object ObjectType = alloc_ObjectType();");
      // call case 4: self request
      onSelf = true;
      var call8346 = callmethodChecked(this, "out(1)", [1], string8345);
      if8332 = call8346;
    } else {
      setLineNumber(1749);    // compilenode string
      var string8348 = new GraceString("  prelude = module_StandardPrelude_init();");
      // call case 4: self request
      onSelf = true;
      var call8349 = callmethodChecked(this, "out(1)", [1], string8348);
      setLineNumber(1750);    // compilenode string
      var string8351 = new GraceString("  adddatum2(self, prelude, 0);");
      // call case 4: self request
      onSelf = true;
      var call8352 = callmethodChecked(this, "out(1)", [1], string8351);
      if8332 = call8352;
    }
    setLineNumber(1752);    // compilenode string
    var string8354 = new GraceString("  addmethod2(self, \"outer\", &grace_userobj_outer);");
    // call case 4: self request
    onSelf = true;
    var call8355 = callmethodChecked(this, "out(1)", [1], string8354);
    setLineNumber(1753);    // compilenode string
    var string8357 = new GraceString("  setline(1);");
    // call case 4: self request
    onSelf = true;
    var call8358 = callmethodChecked(this, "out(1)", [1], string8357);
    setLineNumber(1754);    // compilenode string
    var string8360 = new GraceString("  setmodule(modulename);");
    // call case 4: self request
    onSelf = true;
    var call8361 = callmethodChecked(this, "out(1)", [1], string8360);
    setLineNumber(1755);    // compilenode string
    var string8363 = new GraceString("  setsource(originalSourceLines);");
    // call case 4: self request
    onSelf = true;
    var call8364 = callmethodChecked(this, "out(1)", [1], string8363);
    setLineNumber(1756);    // compilenode string
    var string8365 = new GraceString(">");
    var string8368 = new GraceString("Module<");
    var opresult8370 = callmethodChecked(string8368, "++(1)", [1], var_modname);
    var opresult8372 = callmethodChecked(opresult8370, "++(1)", [1], string8365);
    var var_modn = opresult8372;
    setLineNumber(1757);    // compilenode string
    var string8374 = new GraceString("\");");
    var string8377 = new GraceString("  setclassname(self, \"");
    var opresult8379 = callmethodChecked(string8377, "++(1)", [1], var_modn);
    var opresult8381 = callmethodChecked(opresult8379, "++(1)", [1], string8374);
    // call case 4: self request
    onSelf = true;
    var call8382 = callmethodChecked(this, "out(1)", [1], opresult8381);
    setLineNumber(1758);    // compilenode string
    var string8384 = new GraceString("  Object *var_MatchFailed = alloc_var();");
    // call case 4: self request
    onSelf = true;
    var call8385 = callmethodChecked(this, "out(1)", [1], string8384);
    setLineNumber(1759);    // compilenode string
    var string8387 = new GraceString("  *var_MatchFailed = alloc_MatchFailed();");
    // call case 4: self request
    onSelf = true;
    var call8388 = callmethodChecked(this, "out(1)", [1], string8387);
    setLineNumber(1760);    // compilenode string
    var string8390 = new GraceString("  Object *var_noSuchValue = alloc_var();");
    // call case 4: self request
    onSelf = true;
    var call8391 = callmethodChecked(this, "out(1)", [1], string8390);
    setLineNumber(1761);    // compilenode string
    var string8393 = new GraceString("  *var_noSuchValue = done;");
    // call case 4: self request
    onSelf = true;
    var call8394 = callmethodChecked(this, "out(1)", [1], string8393);
    setLineNumber(1762);    // compilenode string
    var string8396 = new GraceString("  Object *var_done = alloc_var();");
    // call case 4: self request
    onSelf = true;
    var call8397 = callmethodChecked(this, "out(1)", [1], string8396);
    setLineNumber(1763);    // compilenode string
    var string8399 = new GraceString("  *var_done = done;");
    // call case 4: self request
    onSelf = true;
    var call8400 = callmethodChecked(this, "out(1)", [1], string8399);
    setLineNumber(1764);    // compilenode string
    var string8402 = new GraceString("  Object *var_Object = alloc_var();");
    // call case 4: self request
    onSelf = true;
    var call8403 = callmethodChecked(this, "out(1)", [1], string8402);
    setLineNumber(1765);    // compilenode string
    var string8405 = new GraceString("  *var_Object = ObjectType;");
    // call case 4: self request
    onSelf = true;
    var call8406 = callmethodChecked(this, "out(1)", [1], string8405);
    setLineNumber(1766);    // compilenode string
    var string8408 = new GraceString("  type_Object = ObjectType;");
    // call case 4: self request
    onSelf = true;
    var call8409 = callmethodChecked(this, "out(1)", [1], string8408);
    setLineNumber(1767);    // compilenode string
    var string8411 = new GraceString("  Object *var_String = alloc_var();");
    // call case 4: self request
    onSelf = true;
    var call8412 = callmethodChecked(this, "out(1)", [1], string8411);
    setLineNumber(1768);    // compilenode string
    var string8414 = new GraceString("  *var_String = String;");
    // call case 4: self request
    onSelf = true;
    var call8415 = callmethodChecked(this, "out(1)", [1], string8414);
    setLineNumber(1769);    // compilenode string
    var string8417 = new GraceString("  type_String = String;");
    // call case 4: self request
    onSelf = true;
    var call8418 = callmethodChecked(this, "out(1)", [1], string8417);
    setLineNumber(1770);    // compilenode string
    var string8420 = new GraceString("  Object *var_Block = alloc_var();");
    // call case 4: self request
    onSelf = true;
    var call8421 = callmethodChecked(this, "out(1)", [1], string8420);
    setLineNumber(1771);    // compilenode string
    var string8423 = new GraceString("  *var_Block = Block;");
    // call case 4: self request
    onSelf = true;
    var call8424 = callmethodChecked(this, "out(1)", [1], string8423);
    setLineNumber(1772);    // compilenode string
    var string8426 = new GraceString("  type_Block = Block;");
    // call case 4: self request
    onSelf = true;
    var call8427 = callmethodChecked(this, "out(1)", [1], string8426);
    setLineNumber(1773);    // compilenode string
    var string8429 = new GraceString("  Object *var_Done = alloc_var();");
    // call case 4: self request
    onSelf = true;
    var call8430 = callmethodChecked(this, "out(1)", [1], string8429);
    setLineNumber(1774);    // compilenode string
    var string8432 = new GraceString("  *var_Done = Done;");
    // call case 4: self request
    onSelf = true;
    var call8433 = callmethodChecked(this, "out(1)", [1], string8432);
    setLineNumber(1775);    // compilenode string
    var string8435 = new GraceString("  type_Done = Done;");
    // call case 4: self request
    onSelf = true;
    var call8436 = callmethodChecked(this, "out(1)", [1], string8435);
    setLineNumber(1776);    // compilenode string
    var string8438 = new GraceString("  Object *var_Number = alloc_var();");
    // call case 4: self request
    onSelf = true;
    var call8439 = callmethodChecked(this, "out(1)", [1], string8438);
    setLineNumber(1777);    // compilenode string
    var string8441 = new GraceString("  *var_Number = Number;");
    // call case 4: self request
    onSelf = true;
    var call8442 = callmethodChecked(this, "out(1)", [1], string8441);
    setLineNumber(1778);    // compilenode string
    var string8444 = new GraceString("  type_Number = Number;");
    // call case 4: self request
    onSelf = true;
    var call8445 = callmethodChecked(this, "out(1)", [1], string8444);
    setLineNumber(1779);    // compilenode string
    var string8447 = new GraceString("  Object *var_Boolean = alloc_var();");
    // call case 4: self request
    onSelf = true;
    var call8448 = callmethodChecked(this, "out(1)", [1], string8447);
    setLineNumber(1780);    // compilenode string
    var string8450 = new GraceString("  *var_Boolean = Boolean;");
    // call case 4: self request
    onSelf = true;
    var call8451 = callmethodChecked(this, "out(1)", [1], string8450);
    setLineNumber(1781);    // compilenode string
    var string8453 = new GraceString("  type_Boolean = Boolean;");
    // call case 4: self request
    onSelf = true;
    var call8454 = callmethodChecked(this, "out(1)", [1], string8453);
    setLineNumber(1782);    // compilenode string
    var string8456 = new GraceString("  Object *var_Dynamic = alloc_var();");
    // call case 4: self request
    onSelf = true;
    var call8457 = callmethodChecked(this, "out(1)", [1], string8456);
    setLineNumber(1783);    // compilenode string
    var string8459 = new GraceString("  *var_Dynamic = Dynamic;");
    // call case 4: self request
    onSelf = true;
    var call8460 = callmethodChecked(this, "out(1)", [1], string8459);
    setLineNumber(1784);    // compilenode string
    var string8462 = new GraceString("  Object *var_Unknown = alloc_var();");
    // call case 4: self request
    onSelf = true;
    var call8463 = callmethodChecked(this, "out(1)", [1], string8462);
    setLineNumber(1785);    // compilenode string
    var string8465 = new GraceString("  *var_Unknown= Unknown;");
    // call case 4: self request
    onSelf = true;
    var call8466 = callmethodChecked(this, "out(1)", [1], string8465);
    setLineNumber(1786);    // compilenode string
    var string8468 = new GraceString("  Object *var_Type = alloc_var();");
    // call case 4: self request
    onSelf = true;
    var call8469 = callmethodChecked(this, "out(1)", [1], string8468);
    setLineNumber(1787);    // compilenode string
    var string8471 = new GraceString("  *var_Type = Type;");
    // call case 4: self request
    onSelf = true;
    var call8472 = callmethodChecked(this, "out(1)", [1], string8471);
    setLineNumber(1788);    // compilenode string
    var string8474 = new GraceString("  type_Done = Type;");
    // call case 4: self request
    onSelf = true;
    var call8475 = callmethodChecked(this, "out(1)", [1], string8474);
    setLineNumber(1789);    // compilenode string
    var string8477 = new GraceString("  Object *var__prelude = alloc_var();");
    // call case 4: self request
    onSelf = true;
    var call8478 = callmethodChecked(this, "out(1)", [1], string8477);
    setLineNumber(1790);    // compilenode string
    var string8480 = new GraceString("  *var__prelude = grace_prelude();");
    // call case 4: self request
    onSelf = true;
    var call8481 = callmethodChecked(this, "out(1)", [1], string8480);
    setLineNumber(1791);    // compilenode string
    var string8483 = new GraceString("  Object *var_prelude = alloc_var();");
    // call case 4: self request
    onSelf = true;
    var call8484 = callmethodChecked(this, "out(1)", [1], string8483);
    setLineNumber(1792);    // compilenode string
    var string8486 = new GraceString("  *var_prelude = prelude;");
    // call case 4: self request
    onSelf = true;
    var call8487 = callmethodChecked(this, "out(1)", [1], string8486);
    setLineNumber(1793);    // compilenode string
    var string8489 = new GraceString("  gc_root(*var_MatchFailed);");
    // call case 4: self request
    onSelf = true;
    var call8490 = callmethodChecked(this, "out(1)", [1], string8489);
    setLineNumber(1794);    // compilenode string
    var string8492 = new GraceString("  emptyclosure = createclosure(0, \"empty\");");
    // call case 4: self request
    onSelf = true;
    var call8493 = callmethodChecked(this, "out(1)", [1], string8492);
    setLineNumber(1795);    // compilenode string
    var string8495 = new GraceString("  gc_root(emptyclosure);");
    // call case 4: self request
    onSelf = true;
    var call8496 = callmethodChecked(this, "out(1)", [1], string8495);
    setLineNumber(1796);    // compilenode string
    var string8498 = new GraceString(", NULL);");
    var string8501 = new GraceString("  struct StackFrameObject *stackframe = alloc_StackFrame(");
    var opresult8503 = callmethodChecked(string8501, "++(1)", [1], var_nummethods);
    var opresult8505 = callmethodChecked(opresult8503, "++(1)", [1], string8498);
    // call case 4: self request
    onSelf = true;
    var call8506 = callmethodChecked(this, "out(1)", [1], opresult8505);
    setLineNumber(1797);    // compilenode string
    var string8508 = new GraceString("  gc_root((Object)stackframe);");
    // call case 4: self request
    onSelf = true;
    var call8509 = callmethodChecked(this, "out(1)", [1], string8508);
    setLineNumber(1798);    // compilenode string
    var string8511 = new GraceString("  pushstackframe(stackframe, \"module scope\");");
    // call case 4: self request
    onSelf = true;
    var call8512 = callmethodChecked(this, "out(1)", [1], string8511);
    setLineNumber(1799);    // compilenode string
    var string8514 = new GraceString("  Object *selfslot = &(stackframe->slots[0]);");
    // call case 4: self request
    onSelf = true;
    var call8515 = callmethodChecked(this, "out(1)", [1], string8514);
    setLineNumber(1800);    // compilenode string
    var string8517 = new GraceString("  *selfslot = self;");
    // call case 4: self request
    onSelf = true;
    var call8518 = callmethodChecked(this, "out(1)", [1], string8517);
    setLineNumber(1801);    // compilenode string
    var string8520 = new GraceString("  setframeelementname(stackframe, 0, \"self\");");
    // call case 4: self request
    onSelf = true;
    var call8521 = callmethodChecked(this, "out(1)", [1], string8520);
    setLineNumber(1802);    // compilenode string
    var string8523 = new GraceString("// end of preamble");
    // call case 4: self request
    onSelf = true;
    var call8524 = callmethodChecked(this, "out(1)", [1], string8523);
    setLineNumber(1803);    // compilenode identifier
    var var_tmpo = var_output;
    setLineNumber(1804);    // compilenode array
    var array8525 = new PrimitiveGraceList([]);
    var_output = array8525;
    setLineNumber(1805);    // compilenode num
    // call case 4: self request
    onSelf = true;
    var call8527 = callmethodChecked(this, "definebindings(2)", [2], var_values, new GraceNum(1));
    setLineNumber(1806);    // compilenode block
    var block8529 = new GraceBlock(this, 1806, 1);
    setLineNumber(1);    // compilenode identifier
    block8529.real = function(var_o) {
      var if8530 = GraceDone;
      setLineNumber(1807);    // compilenode string
      var string8531 = new GraceString("method");
      // call case 6: other requests
      var call8534 = callmethodChecked(var_o, "kind", []);
      var opresult8536 = callmethodChecked(call8534, "==(1)", [1], string8531);
      if (Grace_isTrue(opresult8536)) {
        setLineNumber(1808);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call8538 = callmethodChecked(this, "compilenode(1)", [1], var_o);
        if8530 = call8538;
      }
      var if8539 = GraceDone;
      setLineNumber(1810);    // compilenode string
      var string8540 = new GraceString("type");
      // call case 6: other requests
      var call8543 = callmethodChecked(var_o, "kind", []);
      var opresult8545 = callmethodChecked(call8543, "==(1)", [1], string8540);
      if (Grace_isTrue(opresult8545)) {
        setLineNumber(1811);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call8547 = callmethodChecked(this, "compilenode(1)", [1], var_o);
        setLineNumber(1812);    // compilenode member
        // call case 6: other requests
        var call8550 = callmethodChecked(var_o, "value", []);
        // call case 4: self request
        onSelf = true;
        var call8551 = callmethodChecked(this, "escapeident(1)", [1], call8550);
        var var_typeid = call8551;
        setLineNumber(1813);    // compilenode string
        var string8553 = new GraceString(";");
        var string8556 = new GraceString(" = *var_");
        var string8559 = new GraceString("type_");
        var opresult8561 = callmethodChecked(string8559, "++(1)", [1], var_typeid);
        var opresult8563 = callmethodChecked(opresult8561, "++(1)", [1], string8556);
        var opresult8565 = callmethodChecked(opresult8563, "++(1)", [1], var_typeid);
        var opresult8567 = callmethodChecked(opresult8565, "++(1)", [1], string8553);
        // call case 4: self request
        onSelf = true;
        var call8568 = callmethodChecked(this, "out(1)", [1], opresult8567);
        if8539 = call8568;
      }
      return if8539;
    };
    // call case 5: prelude request
    var call8569 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_values, block8529);
    var if8570 = GraceDone;
    setLineNumber(1816);    // compilenode string
    var string8571 = new GraceString("StandardPrelude");
    var opresult8574 = callmethodChecked(var_modname, "==(1)", [1], string8571);
    if (Grace_isTrue(opresult8574)) {
      setLineNumber(1818);    // compilenode string
      var string8576 = new GraceString("  self = setsuperobj(self, *var__prelude);");
      // call case 4: self request
      onSelf = true;
      var call8577 = callmethodChecked(this, "out(1)", [1], string8576);
      setLineNumber(1819);    // compilenode string
      var string8579 = new GraceString("  *selfslot = self;");
      // call case 4: self request
      onSelf = true;
      var call8580 = callmethodChecked(this, "out(1)", [1], string8579);
      if8570 = call8580;
    } else {
      setLineNumber(1821);    // compilenode block
      var block8582 = new GraceBlock(this, 1821, 1);
      setLineNumber(1);    // compilenode identifier
      block8582.real = function(var_o) {
        setLineNumber(1821);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call8584 = callmethodChecked(this, "compilenode(1)", [1], var_o);
        return call8584;
      };
      // call case 6: other requests
      var call8585 = callmethodChecked(var_moduleObject, "externalsDo(1)", [1], block8582);
      var if8586 = GraceDone;
      setLineNumber(1822);    // compilenode member
      // call case 6: other requests
      var call8588 = callmethodChecked(var_moduleObject, "superclass", []);
      var opresult8591 = callmethodChecked(GraceFalse, "\u2260(1)", [1], call8588);
      if (Grace_isTrue(opresult8591)) {
        setLineNumber(1823);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call8595 = callmethodChecked(var_moduleObject, "superclass", []);
        var call8596 = callmethodChecked(call8595, "value", []);
        // call case 4: self request
        onSelf = true;
        var call8597 = callmethodChecked(this, "compilenode(1)", [1], call8596);
        var var_superobj = call8597;
        setLineNumber(1824);    // compilenode string
        var string8599 = new GraceString(");");
        var string8602 = new GraceString("  self = setsuperobj(self, ");
        var opresult8604 = callmethodChecked(string8602, "++(1)", [1], var_superobj);
        var opresult8606 = callmethodChecked(opresult8604, "++(1)", [1], string8599);
        // call case 4: self request
        onSelf = true;
        var call8607 = callmethodChecked(this, "out(1)", [1], opresult8606);
        setLineNumber(1825);    // compilenode string
        var string8609 = new GraceString("  *selfslot = self;");
        // call case 4: self request
        onSelf = true;
        var call8610 = callmethodChecked(this, "out(1)", [1], string8609);
        setLineNumber(1827);    // compilenode member
        // call case 6: other requests
        var call8613 = callmethodChecked(var_moduleObject, "superclass", []);
        // call case 4: self request
        onSelf = true;
        var call8614 = callmethodChecked(this, "implementAliasesAndExclusionsFor(1)inheriting(2)", [1, 2], var_moduleObject, call8613, var_superobj);
        if8586 = call8614;
      }
      if8570 = if8586;
    }
    setLineNumber(1831);    // compilenode block
    var block8616 = new GraceBlock(this, 1831, 1);
    setLineNumber(1);    // compilenode identifier
    block8616.real = function(var_t) {
      setLineNumber(1833);    // compilenode string
      var string8618 = new GraceString("the C code generator.");
      setLineNumber(1832);    // compilenode string
      var string8620 = new GraceString("I'm sorry, trait usage is not yet supported by ");
      var opresult8622 = callmethodChecked(string8620, "++(1)", [1], string8618);
      setLineNumber(1833);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      // call case 6: other requests
      var call8626 = callmethodChecked(var_t, "line", []);
      var call8627 = callmethodChecked(call8626, "t", []);
      var call8628 = callmethodChecked(call8627, "linePos", []);
      // call case 6: other requests
      var call8631 = callmethodChecked(var_t, "linePos", []);
      var opresult8633 = callmethodChecked(call8631, "+(1)", [1], new GraceNum(3));
      // call case 6: other requests
      setLineNumber(1832);    // compilenode identifier
      var call8634 = callmethodChecked(var_errormessages, "error(1)atRange(2)", [1, 2], opresult8622, call8628, opresult8633);
      return call8634;
    };
    // call case 6: other requests
    setLineNumber(1831);    // compilenode member
    // call case 6: other requests
    var call8636 = callmethodChecked(var_moduleObject, "usedTraits", []);
    var call8637 = callmethodChecked(call8636, "do(1)", [1], block8616);
    setLineNumber(1836);    // compilenode block
    var block8639 = new GraceBlock(this, 1836, 1);
    setLineNumber(1);    // compilenode identifier
    block8639.real = function(var_o) {
      var if8640 = GraceDone;
      setLineNumber(1837);    // compilenode member
      // call case 6: other requests
      var call8642 = callmethodChecked(var_o, "isExternal", []);
      if (Grace_isTrue(call8642)) {
        var if8643 = GraceDone;
        setLineNumber(1838);    // compilenode string
        var string8644 = new GraceString("StandardPrelude");
        var opresult8647 = callmethodChecked(var_modname, "==(1)", [1], string8644);
        if (Grace_isTrue(opresult8647)) {
          setLineNumber(1839);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call8649 = callmethodChecked(this, "compilenode(1)", [1], var_o);
          if8643 = call8649;
        }
        if8640 = if8643;
      } else {
        var if8650 = GraceDone;
        setLineNumber(1843);    // compilenode string
        var string8651 = new GraceString("type");
        // call case 6: other requests
        var call8654 = callmethodChecked(var_o, "kind", []);
        var opresult8656 = callmethodChecked(call8654, "\u2260(1)", [1], string8651);
        var string8658 = new GraceString("method");
        // call case 6: other requests
        var call8661 = callmethodChecked(var_o, "kind", []);
        var opresult8663 = callmethodChecked(call8661, "\u2260(1)", [1], string8658);
        var opresult8665 = callmethodChecked(opresult8663, "&&(1)", [1], opresult8656);
        if (Grace_isTrue(opresult8665)) {
          setLineNumber(1844);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call8667 = callmethodChecked(this, "compilenode(1)", [1], var_o);
          if8650 = call8667;
        }
        if8640 = if8650;
      }
      return if8640;
    };
    // call case 6: other requests
    setLineNumber(1836);    // compilenode member
    // call case 6: other requests
    var call8669 = callmethodChecked(var_moduleObject, "value", []);
    var call8670 = callmethodChecked(call8669, "do(1)", [1], block8639);
    var if8671 = GraceDone;
    setLineNumber(1847);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call8674 = callmethodChecked(var_xmodule, "currentDialect", []);
    var call8675 = callmethodChecked(call8674, "hasAtEnd", []);
    if (Grace_isTrue(call8675)) {
      setLineNumber(1848);    // compilenode string
      var string8677 = new GraceString("  partcv[0] = 1;");
      // call case 4: self request
      onSelf = true;
      var call8678 = callmethodChecked(this, "out(1)", [1], string8677);
      setLineNumber(1849);    // compilenode string
      var string8680 = new GraceString("  params[0] = self;");
      // call case 4: self request
      onSelf = true;
      var call8681 = callmethodChecked(this, "out(1)", [1], string8680);
      setLineNumber(1851);    // compilenode string
      var string8683 = new GraceString("1, partcv, params, CFLAG_SELF);");
      setLineNumber(1850);    // compilenode string
      var string8685 = new GraceString("  callmethodflags(prelude, \"atModuleEnd\", ");
      var opresult8687 = callmethodChecked(string8685, "++(1)", [1], string8683);
      // call case 4: self request
      onSelf = true;
      var call8688 = callmethodChecked(this, "out(1)", [1], opresult8687);
      if8671 = call8688;
    }
    setLineNumber(1853);    // compilenode block
    var block8690 = new GraceBlock(this, 1853, 1);
    setLineNumber(1);    // compilenode identifier
    block8690.real = function(var_e) {
      setLineNumber(1854);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call8692 = callmethodChecked(this, "outprint(1)", [1], var_e);
      return call8692;
    };
    // call case 5: prelude request
    var call8693 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_globals, block8690);
    setLineNumber(1856);    // compilenode identifier
    var var_tmpo2 = var_output;
    setLineNumber(1857);    // compilenode identifier
    var_output = var_tmpo;
    setLineNumber(1858);    // compilenode string
    var string8695 = new GraceString("];");
    var string8698 = new GraceString("  Object params[");
    var opresult8700 = callmethodChecked(string8698, "++(1)", [1], var_paramsUsed);
    var opresult8702 = callmethodChecked(opresult8700, "++(1)", [1], string8695);
    // call case 4: self request
    onSelf = true;
    var call8703 = callmethodChecked(this, "out(1)", [1], opresult8702);
    setLineNumber(1859);    // compilenode string
    var string8705 = new GraceString("];");
    var string8708 = new GraceString("  int partcv[");
    var opresult8710 = callmethodChecked(string8708, "++(1)", [1], var_partsUsed);
    var opresult8712 = callmethodChecked(opresult8710, "++(1)", [1], string8705);
    // call case 4: self request
    onSelf = true;
    var call8713 = callmethodChecked(this, "out(1)", [1], opresult8712);
    setLineNumber(1860);    // compilenode block
    var block8715 = new GraceBlock(this, 1860, 1);
    setLineNumber(1);    // compilenode identifier
    block8715.real = function(var_l) {
      setLineNumber(1861);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call8717 = callmethodChecked(this, "out(1)", [1], var_l);
      return call8717;
    };
    // call case 5: prelude request
    var call8718 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_tmpo2, block8715);
    setLineNumber(1863);    // compilenode num
    var_paramsUsed = new GraceNum(1);
    setLineNumber(1864);    // compilenode num
    var_partsUsed = new GraceNum(1);
    setLineNumber(1865);    // compilenode string
    var string8720 = new GraceString("  gc_frame_end(frame);");
    // call case 4: self request
    onSelf = true;
    var call8721 = callmethodChecked(this, "out(1)", [1], string8720);
    setLineNumber(1866);    // compilenode string
    var string8723 = new GraceString("  return self;");
    // call case 4: self request
    onSelf = true;
    var call8724 = callmethodChecked(this, "out(1)", [1], string8723);
    setLineNumber(1867);    // compilenode string
    var string8726 = new GraceString("}");
    // call case 4: self request
    onSelf = true;
    var call8727 = callmethodChecked(this, "out(1)", [1], string8726);
    var if8728 = GraceDone;
    setLineNumber(1868);    // compilenode call
    // call case 6: other requests
    var string8731 = new GraceString("NoMain");
    // call case 6: other requests
    // call case 6: other requests
    var call8733 = callmethodChecked(var_util, "extensions", []);
    var call8734 = callmethodChecked(call8733, "contains(1)", [1], string8731);
    var call8735 = callmethodChecked(call8734, "prefix!", [0]);
    if (Grace_isTrue(call8735)) {
      setLineNumber(1869);    // compilenode string
      var string8737 = new GraceString("int main(int argc, char **argv) {");
      // call case 4: self request
      onSelf = true;
      var call8738 = callmethodChecked(this, "out(1)", [1], string8737);
      setLineNumber(1870);    // compilenode string
      var string8740 = new GraceString("  initprofiling();");
      // call case 4: self request
      onSelf = true;
      var call8741 = callmethodChecked(this, "out(1)", [1], string8740);
      var if8742 = GraceDone;
      setLineNumber(1871);    // compilenode string
      var string8744 = new GraceString("LogCallGraph");
      // call case 6: other requests
      // call case 6: other requests
      var call8746 = callmethodChecked(var_util, "extensions", []);
      var call8747 = callmethodChecked(call8746, "contains(1)", [1], string8744);
      if (Grace_isTrue(call8747)) {
        setLineNumber(1872);    // compilenode string
        var string8749 = new GraceString("LogCallGraph");
        // call case 6: other requests
        // call case 6: other requests
        var call8751 = callmethodChecked(var_util, "extensions", []);
        var call8752 = callmethodChecked(call8751, "get(1)", [1], string8749);
        var var_lcgfile = call8752;
        setLineNumber(1873);    // compilenode string
        var string8754 = new GraceString("\");");
        var string8757 = new GraceString("  enable_callgraph(\"");
        var opresult8759 = callmethodChecked(string8757, "++(1)", [1], var_lcgfile);
        var opresult8761 = callmethodChecked(opresult8759, "++(1)", [1], string8754);
        // call case 4: self request
        onSelf = true;
        var call8762 = callmethodChecked(this, "out(1)", [1], opresult8761);
        if8742 = call8762;
      }
      setLineNumber(1875);    // compilenode string
      var string8764 = new GraceString("\");");
      // call case 6: other requests
      var call8768 = callmethodChecked(var_sys, "execPath", []);
      // call case 6: other requests
      var call8769 = callmethodChecked(var_io, "realpath(1)", [1], call8768);
      var string8771 = new GraceString("  setCompilerModulePath(\"");
      var opresult8773 = callmethodChecked(string8771, "++(1)", [1], call8769);
      var opresult8775 = callmethodChecked(opresult8773, "++(1)", [1], string8764);
      // call case 4: self request
      onSelf = true;
      var call8776 = callmethodChecked(this, "out(1)", [1], opresult8775);
      var if8777 = GraceDone;
      setLineNumber(1876);    // compilenode string
      var string8778 = new GraceString("");
      // call case 6: other requests
      var call8781 = callmethodChecked(var_buildinfo, "modulepath", []);
      var opresult8783 = callmethodChecked(call8781, "\u2260(1)", [1], string8778);
      if (Grace_isTrue(opresult8783)) {
        setLineNumber(1877);    // compilenode string
        var string8785 = new GraceString("\");");
        // call case 6: other requests
        var call8788 = callmethodChecked(var_buildinfo, "modulepath", []);
        var string8790 = new GraceString("  setModulePath(\"");
        var opresult8792 = callmethodChecked(string8790, "++(1)", [1], call8788);
        var opresult8794 = callmethodChecked(opresult8792, "++(1)", [1], string8785);
        // call case 4: self request
        onSelf = true;
        var call8795 = callmethodChecked(this, "out(1)", [1], opresult8794);
        if8777 = call8795;
      }
      setLineNumber(1879);    // compilenode string
      var string8797 = new GraceString("  gracelib_argv(argv);");
      // call case 4: self request
      onSelf = true;
      var call8798 = callmethodChecked(this, "out(1)", [1], string8797);
      setLineNumber(1880);    // compilenode string
      var string8800 = new GraceString("  Object params[1];");
      // call case 4: self request
      onSelf = true;
      var call8801 = callmethodChecked(this, "out(1)", [1], string8800);
      setLineNumber(1881);    // compilenode string
      var string8803 = new GraceString("  undefined = alloc_Undefined();");
      // call case 4: self request
      onSelf = true;
      var call8804 = callmethodChecked(this, "out(1)", [1], string8803);
      setLineNumber(1882);    // compilenode string
      var string8806 = new GraceString("  done = alloc_done();");
      // call case 4: self request
      onSelf = true;
      var call8807 = callmethodChecked(this, "out(1)", [1], string8806);
      setLineNumber(1883);    // compilenode string
      var string8809 = new GraceString("  Object tmp_argv = alloc_BuiltinList();");
      // call case 4: self request
      onSelf = true;
      var call8810 = callmethodChecked(this, "out(1)", [1], string8809);
      setLineNumber(1884);    // compilenode string
      var string8812 = new GraceString("  gc_root(tmp_argv);");
      // call case 4: self request
      onSelf = true;
      var call8813 = callmethodChecked(this, "out(1)", [1], string8812);
      setLineNumber(1885);    // compilenode string
      var string8815 = new GraceString("  int partcv_push[] = {1};");
      // call case 4: self request
      onSelf = true;
      var call8816 = callmethodChecked(this, "out(1)", [1], string8815);
      setLineNumber(1886);    // compilenode string
      var string8818 = new GraceString("  int i; for (i=0; i<argc; i++) {");
      // call case 4: self request
      onSelf = true;
      var call8819 = callmethodChecked(this, "out(1)", [1], string8818);
      setLineNumber(1887);    // compilenode string
      var string8821 = new GraceString("    params[0] = alloc_String(argv[i]);");
      // call case 4: self request
      onSelf = true;
      var call8822 = callmethodChecked(this, "out(1)", [1], string8821);
      setLineNumber(1888);    // compilenode string
      var string8824 = new GraceString("    callmethodflags(tmp_argv, \"push(1)\", 1, partcv_push, params, CFLAG_SELF);");
      // call case 4: self request
      onSelf = true;
      var call8825 = callmethodChecked(this, "out(1)", [1], string8824);
      setLineNumber(1889);    // compilenode string
      var string8827 = new GraceString("  }");
      // call case 4: self request
      onSelf = true;
      var call8828 = callmethodChecked(this, "out(1)", [1], string8827);
      setLineNumber(1890);    // compilenode string
      var string8830 = new GraceString("  module_sys_init_argv(tmp_argv);");
      // call case 4: self request
      onSelf = true;
      var call8831 = callmethodChecked(this, "out(1)", [1], string8830);
      setLineNumber(1891);    // compilenode string
      var string8833 = new GraceString("_init();");
      var string8836 = new GraceString("  module_");
      var opresult8838 = callmethodChecked(string8836, "++(1)", [1], var_escmodname);
      var opresult8840 = callmethodChecked(opresult8838, "++(1)", [1], string8833);
      // call case 4: self request
      onSelf = true;
      var call8841 = callmethodChecked(this, "out(1)", [1], opresult8840);
      setLineNumber(1892);    // compilenode string
      var string8843 = new GraceString("  gracelib_stats();");
      // call case 4: self request
      onSelf = true;
      var call8844 = callmethodChecked(this, "out(1)", [1], string8843);
      setLineNumber(1893);    // compilenode string
      var string8846 = new GraceString("  return 0;");
      // call case 4: self request
      onSelf = true;
      var call8847 = callmethodChecked(this, "out(1)", [1], string8846);
      setLineNumber(1894);    // compilenode string
      var string8849 = new GraceString("}");
      // call case 4: self request
      onSelf = true;
      var call8850 = callmethodChecked(this, "out(1)", [1], string8849);
      if8728 = call8850;
    }
    setLineNumber(1896);    // compilenode block
    var block8852 = new GraceBlock(this, 1896, 1);
    setLineNumber(1);    // compilenode identifier
    block8852.real = function(var_x) {
      setLineNumber(1897);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call8854 = callmethodChecked(this, "outprint(1)", [1], var_x);
      return call8854;
    };
    // call case 5: prelude request
    var call8855 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_topOutput, block8852);
    setLineNumber(1899);    // compilenode block
    var block8857 = new GraceBlock(this, 1899, 1);
    setLineNumber(1);    // compilenode identifier
    block8857.real = function(var_x) {
      setLineNumber(1900);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call8859 = callmethodChecked(this, "outprint(1)", [1], var_x);
      return call8859;
    };
    // call case 5: prelude request
    var call8860 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_output, block8857);
    setLineNumber(1903);    // compilenode member
    // call case 6: other requests
    var call8863 = callmethodChecked(var_imports, "other", []);
    // call case 6: other requests
    var call8866 = callmethodChecked(var_imports, "static", []);
    var opresult8868 = callmethodChecked(call8866, "++(1)", [1], call8863);
    // call case 6: other requests
    var call8869 = callmethodChecked(var_moduleObject, "imports:=(1)", [1], opresult8868);
    setLineNumber(1904);    // compilenode identifier
    // call case 6: other requests
    var call8871 = callmethodChecked(var_xmodule, "writeGctForModule(1)", [1], var_moduleObject);
    setLineNumber(1906);    // compilenode member
    // call case 6: other requests
    var call8873 = callmethodChecked(var_outfile, "close", []);
    var if8874 = GraceDone;
    setLineNumber(1908);    // compilenode string
    var string8875 = new GraceString("make");
    var opresult8878 = callmethodChecked(var_runmode, "==(1)", [1], string8875);
    if (Grace_isTrue(opresult8878)) {
      setLineNumber(1909);    // compilenode string
      var string8880 = new GraceString("compiling C code.");
      // call case 6: other requests
      var call8881 = callmethodChecked(var_util, "log_verbose(1)", [1], string8880);
      setLineNumber(1910);    // compilenode member
      // call case 6: other requests
      var call8883 = callmethodChecked(var_outfile, "pathname", []);
      var var_ofpn = call8883;
      setLineNumber(1911);    // compilenode member
      // call case 6: other requests
      var call8885 = callmethodChecked(var_ofpn, "size", []);
      var var_ix = call8885;
      setLineNumber(1912);    // compilenode block
      var block8887 = new GraceBlock(this, 1912, 0);
      block8887.real = function() {
        var block8888 = new GraceBlock(this, 1912, 0);
        block8888.real = function() {
          var string8889 = new GraceString(".");
          // call case 6: other requests
          var call8892 = callmethodChecked(var_ofpn, "at(1)", [1], var_ix);
          var opresult8894 = callmethodChecked(call8892, "\u2260(1)", [1], string8889);
          return opresult8894;
        };
        var opresult8898 = callmethodChecked(var_ix, ">(1)", [1], new GraceNum(1));
        var opresult8900 = callmethodChecked(opresult8898, "&&(1)", [1], block8888);
        return opresult8900;
      };
      var block8901 = new GraceBlock(this, 1912, 0);
      block8901.real = function() {
        var diff8904 = callmethodChecked(var_ix, "-(1)", [1], new GraceNum(1));
        var_ix = diff8904;
        return GraceDone;
      };
      // call case 5: prelude request
      var call8905 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block8887, block8901);
      var if8906 = GraceDone;
      setLineNumber(1913);    // compilenode identifier
      var opresult8909 = callmethodChecked(var_ix, ">(1)", [1], new GraceNum(0));
      if (Grace_isTrue(opresult8909)) {
        setLineNumber(1914);    // compilenode identifier
        var diff8913 = callmethodChecked(var_ix, "-(1)", [1], new GraceNum(1));
        // call case 6: other requests
        var call8914 = callmethodChecked(var_ofpn, "substringFrom(1)to(1)", [1, 1], new GraceNum(1), diff8913);
        if8906 = call8914;
      } else {
        setLineNumber(1916);    // compilenode identifier
        if8906 = var_ofpn;
      }
      var var_ofpnBase = if8906;
      setLineNumber(1918);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call8916 = callmethodChecked(this, "compileStaticModule(2)", [2], var_ofpnBase, var_buildinfo);
      setLineNumber(1919);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call8918 = callmethodChecked(this, "compileDynamicModule(2)", [2], var_ofpnBase, var_buildinfo);
      var if8919 = GraceDone;
      setLineNumber(1920);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call8922 = callmethodChecked(var_util, "noexec", []);
      var call8923 = callmethodChecked(call8922, "not", []);
      if (Grace_isTrue(call8923)) {
        setLineNumber(1921);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call8925 = callmethodChecked(this, "linkExecutable(2)", [2], var_ofpnBase, var_buildinfo);
        if8919 = call8925;
      }
      setLineNumber(1923);    // compilenode string
      var string8927 = new GraceString("done.");
      // call case 6: other requests
      var call8928 = callmethodChecked(var_util, "log_verbose(1)", [1], string8927);
      var if8929 = GraceDone;
      setLineNumber(1924);    // compilenode string
      var string8930 = new GraceString("run");
      var opresult8933 = callmethodChecked(var_buildtype, "==(1)", [1], string8930);
      if (Grace_isTrue(opresult8933)) {
        var if8934 = GraceDone;
        setLineNumber(1925);    // compilenode string
        var string8935 = new GraceString("/");
        // call case 6: other requests
        var call8938 = callmethodChecked(var_ofpnBase, "first", []);
        var opresult8940 = callmethodChecked(call8938, "\u2260(1)", [1], string8935);
        if (Grace_isTrue(opresult8940)) {
          setLineNumber(1926);    // compilenode string
          var string8942 = new GraceString("./");
          var opresult8944 = callmethodChecked(string8942, "++(1)", [1], var_ofpnBase);
          var_cmd = opresult8944;
          if8934 = GraceDone;
        } else {
          setLineNumber(1928);    // compilenode identifier
          var_cmd = var_ofpnBase;
          if8934 = GraceDone;
        }
        setLineNumber(1930);    // compilenode member
        // call case 6: other requests
        var array8947 = new PrimitiveGraceList([]);
        // call case 6: other requests
        var call8948 = callmethodChecked(var_io, "spawn(2)", [2], var_cmd, array8947);
        var call8949 = callmethodChecked(call8948, "wait", []);
        var var_runExitCode = call8949;
        var if8950 = GraceDone;
        setLineNumber(1931);    // compilenode identifier
        var opresult8953 = callmethodChecked(var_runExitCode, "<(1)", [1], new GraceNum(0));
        if (Grace_isTrue(opresult8953)) {
          setLineNumber(1932);    // compilenode string
          var string8955 = new GraceString(".\n");
          // call case 6: other requests
          var call8958 = callmethodChecked(var_runExitCode, "prefix-", [0]);
          var string8960 = new GraceString(" exited with error ");
          var string8963 = new GraceString("minigrace: Program ");
          var opresult8965 = callmethodChecked(string8963, "++(1)", [1], var_modname);
          var opresult8967 = callmethodChecked(opresult8965, "++(1)", [1], string8960);
          var opresult8969 = callmethodChecked(opresult8967, "++(1)", [1], call8958);
          var opresult8971 = callmethodChecked(opresult8969, "++(1)", [1], string8955);
          // call case 6: other requests
          // call case 6: other requests
          var call8973 = callmethodChecked(var_io, "error", []);
          var call8974 = callmethodChecked(call8973, "write(1)", [1], opresult8971);
          setLineNumber(1933);    // compilenode num
          // call case 6: other requests
          var call8976 = callmethodChecked(var_sys, "exit(1)", [1], new GraceNum(4));
          if8950 = call8976;
        }
        if8929 = if8950;
      }
      if8874 = if8929;
    }
    return if8874;
  };
  func8072.paramCounts = [5];
  this.methods["compile(5)"] = func8072;
  func8072.definitionLine = 1667;
  func8072.definitionModule = "genc";
  setLineNumber(17);    // compilenode vardec
  var var_tmp;
  setLineNumber(1);    // compilenode method
  var func8977 = function(argcv) {    // method tmp
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genc");
    // tmp is a simple accessor - elide try ... catch
    setLineNumber(17);    // compilenode identifier
    return var_tmp;
  };
  func8977.paramCounts = [0];
  this.methods["tmp"] = func8977;
  func8977.definitionLine = 1;
  func8977.definitionModule = "genc";
  setLineNumber(1);    // compilenode method
  var func8978 = function(argcv) {    // method tmp:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genc");
    var_tmp = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func8978.paramCounts = [1];
  this.methods["tmp:=(1)"] = func8978;
  func8978.definitionLine = 1;
  func8978.definitionModule = "genc";
  this.methods["tmp"].debug = "var";
  setLineNumber(18);    // compilenode num
  var var_verbosity = new GraceNum(30);
  setLineNumber(1);    // compilenode method
  var func8979 = function(argcv) {    // method verbosity
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genc");
    // verbosity is a simple accessor - elide try ... catch
    setLineNumber(18);    // compilenode identifier
    return var_verbosity;
  };
  func8979.paramCounts = [0];
  this.methods["verbosity"] = func8979;
  func8979.definitionLine = 1;
  func8979.definitionModule = "genc";
  setLineNumber(1);    // compilenode method
  var func8980 = function(argcv) {    // method verbosity:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genc");
    var_verbosity = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func8980.paramCounts = [1];
  this.methods["verbosity:=(1)"] = func8980;
  func8980.definitionLine = 1;
  func8980.definitionModule = "genc";
  this.methods["verbosity"].debug = "var";
  setLineNumber(19);    // compilenode num
  var var_pad1 = new GraceNum(1);
  setLineNumber(1);    // compilenode method
  var func8981 = function(argcv) {    // method pad1
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genc");
    // pad1 is a simple accessor - elide try ... catch
    setLineNumber(19);    // compilenode identifier
    return var_pad1;
  };
  func8981.paramCounts = [0];
  this.methods["pad1"] = func8981;
  func8981.definitionLine = 1;
  func8981.definitionModule = "genc";
  setLineNumber(1);    // compilenode method
  var func8982 = function(argcv) {    // method pad1:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genc");
    var_pad1 = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func8982.paramCounts = [1];
  this.methods["pad1:=(1)"] = func8982;
  func8982.definitionLine = 1;
  func8982.definitionModule = "genc";
  this.methods["pad1"].debug = "var";
  setLineNumber(20);    // compilenode num
  var var_auto__95__count = new GraceNum(1);
  setLineNumber(1);    // compilenode method
  var func8983 = function(argcv) {    // method auto_count
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genc");
    // auto_count is a simple accessor - elide try ... catch
    setLineNumber(20);    // compilenode identifier
    return var_auto__95__count;
  };
  func8983.paramCounts = [0];
  this.methods["auto_count"] = func8983;
  func8983.definitionLine = 1;
  func8983.definitionModule = "genc";
  setLineNumber(1);    // compilenode method
  var func8984 = function(argcv) {    // method auto_count:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genc");
    var_auto__95__count = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func8984.paramCounts = [1];
  this.methods["auto_count:=(1)"] = func8984;
  func8984.definitionLine = 1;
  func8984.definitionModule = "genc";
  this.methods["auto_count"].debug = "var";
  setLineNumber(21);    // compilenode array
  var array8985 = new PrimitiveGraceList([]);
  var var_constants = array8985;
  setLineNumber(1);    // compilenode method
  var func8986 = function(argcv) {    // method constants
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genc");
    // constants is a simple accessor - elide try ... catch
    setLineNumber(21);    // compilenode identifier
    return var_constants;
  };
  func8986.paramCounts = [0];
  this.methods["constants"] = func8986;
  func8986.definitionLine = 1;
  func8986.definitionModule = "genc";
  setLineNumber(1);    // compilenode method
  var func8987 = function(argcv) {    // method constants:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genc");
    var_constants = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func8987.paramCounts = [1];
  this.methods["constants:=(1)"] = func8987;
  func8987.definitionLine = 1;
  func8987.definitionModule = "genc";
  this.methods["constants"].debug = "var";
  setLineNumber(22);    // compilenode array
  var array8988 = new PrimitiveGraceList([]);
  var var_globals = array8988;
  setLineNumber(1);    // compilenode method
  var func8989 = function(argcv) {    // method globals
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genc");
    // globals is a simple accessor - elide try ... catch
    setLineNumber(22);    // compilenode identifier
    return var_globals;
  };
  func8989.paramCounts = [0];
  this.methods["globals"] = func8989;
  func8989.definitionLine = 1;
  func8989.definitionModule = "genc";
  setLineNumber(1);    // compilenode method
  var func8990 = function(argcv) {    // method globals:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genc");
    var_globals = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func8990.paramCounts = [1];
  this.methods["globals:=(1)"] = func8990;
  func8990.definitionLine = 1;
  func8990.definitionModule = "genc";
  this.methods["globals"].debug = "var";
  setLineNumber(23);    // compilenode array
  var array8991 = new PrimitiveGraceList([]);
  var var_output = array8991;
  setLineNumber(1);    // compilenode method
  var func8992 = function(argcv) {    // method output
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genc");
    // output is a simple accessor - elide try ... catch
    setLineNumber(23);    // compilenode identifier
    return var_output;
  };
  func8992.paramCounts = [0];
  this.methods["output"] = func8992;
  func8992.definitionLine = 1;
  func8992.definitionModule = "genc";
  setLineNumber(1);    // compilenode method
  var func8993 = function(argcv) {    // method output:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genc");
    var_output = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func8993.paramCounts = [1];
  this.methods["output:=(1)"] = func8993;
  func8993.definitionLine = 1;
  func8993.definitionModule = "genc";
  this.methods["output"].debug = "var";
  setLineNumber(24);    // compilenode array
  var array8994 = new PrimitiveGraceList([]);
  var var_usedvars = array8994;
  setLineNumber(1);    // compilenode method
  var func8995 = function(argcv) {    // method usedvars
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genc");
    // usedvars is a simple accessor - elide try ... catch
    setLineNumber(24);    // compilenode identifier
    return var_usedvars;
  };
  func8995.paramCounts = [0];
  this.methods["usedvars"] = func8995;
  func8995.definitionLine = 1;
  func8995.definitionModule = "genc";
  setLineNumber(1);    // compilenode method
  var func8996 = function(argcv) {    // method usedvars:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genc");
    var_usedvars = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func8996.paramCounts = [1];
  this.methods["usedvars:=(1)"] = func8996;
  func8996.definitionLine = 1;
  func8996.definitionModule = "genc";
  this.methods["usedvars"].debug = "var";
  setLineNumber(25);    // compilenode array
  var array8997 = new PrimitiveGraceList([]);
  var var_declaredvars = array8997;
  setLineNumber(1);    // compilenode method
  var func8998 = function(argcv) {    // method declaredvars
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genc");
    // declaredvars is a simple accessor - elide try ... catch
    setLineNumber(25);    // compilenode identifier
    return var_declaredvars;
  };
  func8998.paramCounts = [0];
  this.methods["declaredvars"] = func8998;
  func8998.definitionLine = 1;
  func8998.definitionModule = "genc";
  setLineNumber(1);    // compilenode method
  var func8999 = function(argcv) {    // method declaredvars:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genc");
    var_declaredvars = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func8999.paramCounts = [1];
  this.methods["declaredvars:=(1)"] = func8999;
  func8999.definitionLine = 1;
  func8999.definitionModule = "genc";
  this.methods["declaredvars"].debug = "var";
  setLineNumber(26);    // compilenode string
  var string9000 = new GraceString("entry");
  var var_bblock = string9000;
  setLineNumber(1);    // compilenode method
  var func9001 = function(argcv) {    // method bblock
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genc");
    // bblock is a simple accessor - elide try ... catch
    setLineNumber(26);    // compilenode identifier
    return var_bblock;
  };
  func9001.paramCounts = [0];
  this.methods["bblock"] = func9001;
  func9001.definitionLine = 1;
  func9001.definitionModule = "genc";
  setLineNumber(1);    // compilenode method
  var func9002 = function(argcv) {    // method bblock:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genc");
    var_bblock = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func9002.paramCounts = [1];
  this.methods["bblock:=(1)"] = func9002;
  func9002.definitionLine = 1;
  func9002.definitionModule = "genc";
  this.methods["bblock"].debug = "var";
  setLineNumber(27);    // compilenode num
  var var_linenum = new GraceNum(0);
  setLineNumber(1);    // compilenode method
  var func9003 = function(argcv) {    // method linenum
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genc");
    // linenum is a simple accessor - elide try ... catch
    setLineNumber(27);    // compilenode identifier
    return var_linenum;
  };
  func9003.paramCounts = [0];
  this.methods["linenum"] = func9003;
  func9003.definitionLine = 1;
  func9003.definitionModule = "genc";
  setLineNumber(1);    // compilenode method
  var func9004 = function(argcv) {    // method linenum:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genc");
    var_linenum = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func9004.paramCounts = [1];
  this.methods["linenum:=(1)"] = func9004;
  func9004.definitionLine = 1;
  func9004.definitionModule = "genc";
  this.methods["linenum"].debug = "var";
  setLineNumber(28);    // compilenode array
  var array9005 = new PrimitiveGraceList([]);
  var var_values = array9005;
  setLineNumber(1);    // compilenode method
  var func9006 = function(argcv) {    // method values
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genc");
    // values is a simple accessor - elide try ... catch
    setLineNumber(28);    // compilenode identifier
    return var_values;
  };
  func9006.paramCounts = [0];
  this.methods["values"] = func9006;
  func9006.definitionLine = 1;
  func9006.definitionModule = "genc";
  setLineNumber(1);    // compilenode method
  var func9007 = function(argcv) {    // method values:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genc");
    var_values = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func9007.paramCounts = [1];
  this.methods["values:=(1)"] = func9007;
  func9007.definitionLine = 1;
  func9007.definitionModule = "genc";
  this.methods["values"].debug = "var";
  setLineNumber(29);    // compilenode string
  var string9008 = new GraceString("main");
  var var_modname = string9008;
  setLineNumber(1);    // compilenode method
  var func9009 = function(argcv) {    // method modname
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genc");
    // modname is a simple accessor - elide try ... catch
    setLineNumber(29);    // compilenode identifier
    return var_modname;
  };
  func9009.paramCounts = [0];
  this.methods["modname"] = func9009;
  func9009.definitionLine = 1;
  func9009.definitionModule = "genc";
  setLineNumber(1);    // compilenode method
  var func9010 = function(argcv) {    // method modname:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genc");
    var_modname = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func9010.paramCounts = [1];
  this.methods["modname:=(1)"] = func9010;
  func9010.definitionLine = 1;
  func9010.definitionModule = "genc";
  this.methods["modname"].debug = "var";
  setLineNumber(30);    // compilenode string
  var string9011 = new GraceString("main");
  var var_escmodname = string9011;
  setLineNumber(1);    // compilenode method
  var func9012 = function(argcv) {    // method escmodname
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genc");
    // escmodname is a simple accessor - elide try ... catch
    setLineNumber(30);    // compilenode identifier
    return var_escmodname;
  };
  func9012.paramCounts = [0];
  this.methods["escmodname"] = func9012;
  func9012.definitionLine = 1;
  func9012.definitionModule = "genc";
  setLineNumber(1);    // compilenode method
  var func9013 = function(argcv) {    // method escmodname:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genc");
    var_escmodname = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func9013.paramCounts = [1];
  this.methods["escmodname:=(1)"] = func9013;
  func9013.definitionLine = 1;
  func9013.definitionModule = "genc";
  this.methods["escmodname"].debug = "var";
  setLineNumber(31);    // compilenode string
  var string9014 = new GraceString("build");
  var var_runmode = string9014;
  setLineNumber(1);    // compilenode method
  var func9015 = function(argcv) {    // method runmode
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genc");
    // runmode is a simple accessor - elide try ... catch
    setLineNumber(31);    // compilenode identifier
    return var_runmode;
  };
  func9015.paramCounts = [0];
  this.methods["runmode"] = func9015;
  func9015.definitionLine = 1;
  func9015.definitionModule = "genc";
  setLineNumber(1);    // compilenode method
  var func9016 = function(argcv) {    // method runmode:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genc");
    var_runmode = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func9016.paramCounts = [1];
  this.methods["runmode:=(1)"] = func9016;
  func9016.definitionLine = 1;
  func9016.definitionModule = "genc";
  this.methods["runmode"].debug = "var";
  setLineNumber(32);    // compilenode string
  var string9017 = new GraceString("bc");
  var var_buildtype = string9017;
  setLineNumber(1);    // compilenode method
  var func9018 = function(argcv) {    // method buildtype
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genc");
    // buildtype is a simple accessor - elide try ... catch
    setLineNumber(32);    // compilenode identifier
    return var_buildtype;
  };
  func9018.paramCounts = [0];
  this.methods["buildtype"] = func9018;
  func9018.definitionLine = 1;
  func9018.definitionModule = "genc";
  setLineNumber(1);    // compilenode method
  var func9019 = function(argcv) {    // method buildtype:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genc");
    var_buildtype = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func9019.paramCounts = [1];
  this.methods["buildtype:=(1)"] = func9019;
  func9019.definitionLine = 1;
  func9019.definitionModule = "genc";
  this.methods["buildtype"].debug = "var";
  setLineNumber(33);    // compilenode identifier
  var var_inBlock = GraceFalse;
  setLineNumber(1);    // compilenode method
  var func9020 = function(argcv) {    // method inBlock
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genc");
    // inBlock is a simple accessor - elide try ... catch
    setLineNumber(33);    // compilenode identifier
    return var_inBlock;
  };
  func9020.paramCounts = [0];
  this.methods["inBlock"] = func9020;
  func9020.definitionLine = 1;
  func9020.definitionModule = "genc";
  setLineNumber(1);    // compilenode method
  var func9021 = function(argcv) {    // method inBlock:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genc");
    var_inBlock = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func9021.paramCounts = [1];
  this.methods["inBlock:=(1)"] = func9021;
  func9021.definitionLine = 1;
  func9021.definitionModule = "genc";
  this.methods["inBlock"].debug = "var";
  setLineNumber(34);    // compilenode num
  var var_paramsUsed = new GraceNum(1);
  setLineNumber(1);    // compilenode method
  var func9022 = function(argcv) {    // method paramsUsed
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genc");
    // paramsUsed is a simple accessor - elide try ... catch
    setLineNumber(34);    // compilenode identifier
    return var_paramsUsed;
  };
  func9022.paramCounts = [0];
  this.methods["paramsUsed"] = func9022;
  func9022.definitionLine = 1;
  func9022.definitionModule = "genc";
  setLineNumber(1);    // compilenode method
  var func9023 = function(argcv) {    // method paramsUsed:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genc");
    var_paramsUsed = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func9023.paramCounts = [1];
  this.methods["paramsUsed:=(1)"] = func9023;
  func9023.definitionLine = 1;
  func9023.definitionModule = "genc";
  this.methods["paramsUsed"].debug = "var";
  setLineNumber(35);    // compilenode num
  var var_partsUsed = new GraceNum(1);
  setLineNumber(1);    // compilenode method
  var func9024 = function(argcv) {    // method partsUsed
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genc");
    // partsUsed is a simple accessor - elide try ... catch
    setLineNumber(35);    // compilenode identifier
    return var_partsUsed;
  };
  func9024.paramCounts = [0];
  this.methods["partsUsed"] = func9024;
  func9024.definitionLine = 1;
  func9024.definitionModule = "genc";
  setLineNumber(1);    // compilenode method
  var func9025 = function(argcv) {    // method partsUsed:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genc");
    var_partsUsed = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func9025.paramCounts = [1];
  this.methods["partsUsed:=(1)"] = func9025;
  func9025.definitionLine = 1;
  func9025.definitionModule = "genc";
  this.methods["partsUsed"].debug = "var";
  setLineNumber(36);    // compilenode num
  var var_topLevelMethodPos = new GraceNum(1);
  setLineNumber(1);    // compilenode method
  var func9026 = function(argcv) {    // method topLevelMethodPos
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genc");
    // topLevelMethodPos is a simple accessor - elide try ... catch
    setLineNumber(36);    // compilenode identifier
    return var_topLevelMethodPos;
  };
  func9026.paramCounts = [0];
  this.methods["topLevelMethodPos"] = func9026;
  func9026.definitionLine = 1;
  func9026.definitionModule = "genc";
  setLineNumber(1);    // compilenode method
  var func9027 = function(argcv) {    // method topLevelMethodPos:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genc");
    var_topLevelMethodPos = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func9027.paramCounts = [1];
  this.methods["topLevelMethodPos:=(1)"] = func9027;
  func9027.definitionLine = 1;
  func9027.definitionModule = "genc";
  this.methods["topLevelMethodPos"].debug = "var";
  setLineNumber(37);    // compilenode array
  var array9028 = new PrimitiveGraceList([]);
  var var_topOutput = array9028;
  setLineNumber(1);    // compilenode method
  var func9029 = function(argcv) {    // method topOutput
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genc");
    // topOutput is a simple accessor - elide try ... catch
    setLineNumber(37);    // compilenode identifier
    return var_topOutput;
  };
  func9029.paramCounts = [0];
  this.methods["topOutput"] = func9029;
  func9029.definitionLine = 1;
  func9029.definitionModule = "genc";
  setLineNumber(1);    // compilenode method
  var func9030 = function(argcv) {    // method topOutput:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genc");
    var_topOutput = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func9030.paramCounts = [1];
  this.methods["topOutput:=(1)"] = func9030;
  func9030.definitionLine = 1;
  func9030.definitionModule = "genc";
  this.methods["topOutput"].debug = "var";
  setLineNumber(38);    // compilenode identifier
  var var_bottomOutput = var_output;
  setLineNumber(1);    // compilenode method
  var func9031 = function(argcv) {    // method bottomOutput
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genc");
    // bottomOutput is a simple accessor - elide try ... catch
    setLineNumber(38);    // compilenode identifier
    return var_bottomOutput;
  };
  func9031.paramCounts = [0];
  this.methods["bottomOutput"] = func9031;
  func9031.definitionLine = 1;
  func9031.definitionModule = "genc";
  setLineNumber(1);    // compilenode method
  var func9032 = function(argcv) {    // method bottomOutput:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genc");
    var_bottomOutput = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func9032.paramCounts = [1];
  this.methods["bottomOutput:=(1)"] = func9032;
  func9032.definitionLine = 1;
  func9032.definitionModule = "genc";
  this.methods["bottomOutput"].debug = "var";
  setLineNumber(39);    // compilenode num
  var var_compilationDepth = new GraceNum(0);
  setLineNumber(1);    // compilenode method
  var func9033 = function(argcv) {    // method compilationDepth
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genc");
    // compilationDepth is a simple accessor - elide try ... catch
    setLineNumber(39);    // compilenode identifier
    return var_compilationDepth;
  };
  func9033.paramCounts = [0];
  this.methods["compilationDepth"] = func9033;
  func9033.definitionLine = 1;
  func9033.definitionModule = "genc";
  setLineNumber(1);    // compilenode method
  var func9034 = function(argcv) {    // method compilationDepth:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genc");
    var_compilationDepth = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func9034.paramCounts = [1];
  this.methods["compilationDepth:=(1)"] = func9034;
  func9034.definitionLine = 1;
  func9034.definitionModule = "genc";
  this.methods["compilationDepth"].debug = "var";
  setLineNumber(40);    // compilenode member
  // call case 6: other requests
  var call9036 = callmethodChecked(var_map, "new", []);
  var var_topLevelTypes = call9036;
  setLineNumber(1);    // compilenode method
  var func9037 = function(argcv) {    // method topLevelTypes
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genc");
    // topLevelTypes is a simple accessor - elide try ... catch
    setLineNumber(40);    // compilenode identifier
    return var_topLevelTypes;
  };
  func9037.paramCounts = [0];
  this.methods["topLevelTypes"] = func9037;
  func9037.definitionLine = 1;
  func9037.definitionModule = "genc";
  this.methods["topLevelTypes"].debug = "def";
  setLineNumber(41);    // compilenode member
  // call case 6: other requests
  var call9039 = callmethodChecked(var_util, "requiredModules", []);
  var var_imports = call9039;
  setLineNumber(1);    // compilenode method
  var func9040 = function(argcv) {    // method imports
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genc");
    // imports is a simple accessor - elide try ... catch
    setLineNumber(41);    // compilenode identifier
    return var_imports;
  };
  func9040.paramCounts = [0];
  this.methods["imports"] = func9040;
  func9040.definitionLine = 1;
  func9040.definitionModule = "genc";
  this.methods["imports"].debug = "def";
  setLineNumber(42);    // compilenode string
  var string9041 = new GraceString("alloc_Lineup()");
  var var_bracketConstructor = string9041;
  setLineNumber(1);    // compilenode method
  var func9042 = function(argcv) {    // method bracketConstructor
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("genc");
    // bracketConstructor is a simple accessor - elide try ... catch
    setLineNumber(42);    // compilenode identifier
    return var_bracketConstructor;
  };
  func9042.paramCounts = [0];
  this.methods["bracketConstructor"] = func9042;
  func9042.definitionLine = 1;
  func9042.definitionModule = "genc";
  setLineNumber(1);    // compilenode method
  var func9043 = function(argcv) {    // method bracketConstructor:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("genc");
    var_bracketConstructor = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func9043.paramCounts = [1];
  this.methods["bracketConstructor:=(1)"] = func9043;
  func9043.definitionLine = 1;
  func9043.definitionModule = "genc";
  this.methods["bracketConstructor"].debug = "var";
  return this;
}
gracecode_genc.imports = ['ast', 'errormessages', 'io', 'mirrors', 'stringMap', 'sys', 'util', 'xmodule'];
if (typeof gctCache !== "undefined")
  gctCache['genc'] = "classes:\nconfidential:\nfresh-methods:\nmodules:\n ast\n errormessages\n identifierKinds\n io\n mirrors\n stringMap\n sys\n unixFilePath\n util\n xmodule\npath:\n genc\npublic:\n assembleArguments(2)\n beginblock(1)\n compile(5)\n compileArguments(2)\n compileDynamicModule(2)\n compileNativeCode(1)\n compileOtherRequest(4)\n compileOuterRequest(3)\n compilePreludeRequest(3)\n compilePrint(1)\n compileSelfOuterRequest(3)\n compileSelfRequest(3)\n compileStaticModule(2)\n compileSuperRequest(3)\n compilearray(1)\n compilebind(1)\n compileblock(1)\n compilecall(2)\n compiledefdec(1)\n compiledialect(1)\n compilefreshmethod(8)\n compileidentifier(1)\n compileif(1)\n compileifexpr(1)\n compileimport(1)\n compilematchcase(1)\n compilemember(1)\n compilemethod(3)\n compilemethodtypes(2)\n compilenode(1)\n compilenum(1)\n compileobjdefdec(3)\n compileobjdefdecdata(3)\n compileobjdefdecmeth(3)\n compileobject(2)\n compileobjouter(2)\n compileobjtypemeth(3)\n compileobjvardec(3)\n compileobjvardecdata(3)\n compileobjvardecmeth(3)\n compileop(1)\n compilereturn(1)\n compiletrycatch(1)\n compiletypedec(1)\n compiletypeliteral(1)\n compilevardec(1)\n countbindings(1)\n countnodebindings(1)\n definebindings(2)\n escapeident(1)\n escapestring(1)\n escapestring2(1)\n implementAliasesAndExclusionsFor(1)inheriting(2)\n linkExecutable(2)\n out(1)\n outprint(1)\n outswitchdown\n outswitchup\ntypes:\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["genc"] = [
    "#pragma ExtendedLineups",
    "import \"ast\" as ast",
    "import \"errormessages\" as errormessages",
    "import \"io\" as io",
    "import \"stringMap\" as map",
    "import \"mirrors\" as mirrors",
    "import \"sys\" as sys",
    "import \"util\" as util",
    "import \"xmodule\" as xmodule",
    "",
    "// genc produces C code from the AST, and optionally links and",
    "// compiles it to native code. Code that affects the way the compiler behaves",
    "// is in the \"compile\" method at the bottom. Other methods principally deal",
    "// with translating a single AST node to C, and parallel the AST and",
    "// parser.",
    "",
    "var tmp",
    "var verbosity := 30",
    "var pad1 := 1",
    "var auto_count := 1",
    "var constants := []",
    "var globals := []",
    "var output := []",
    "var usedvars := []",
    "var declaredvars := []",
    "var bblock := \"entry\"",
    "var linenum := 0",
    "var values := []",
    "var modname := \"main\"",
    "var escmodname := \"main\"",
    "var runmode := \"build\"",
    "var buildtype := \"bc\"",
    "var inBlock := false",
    "var paramsUsed := 1",
    "var partsUsed := 1",
    "var topLevelMethodPos := 1",
    "var topOutput := []",
    "var bottomOutput := output",
    "var compilationDepth := 0",
    "def topLevelTypes = map.new",
    "def imports = util.requiredModules",
    "var bracketConstructor := \"alloc_Lineup()\"",
    "",
    "method out(s) {",
    "    output.push(s)",
    "}",
    "method outprint(s) {",
    "    util.outprint(s)",
    "}",
    "method outswitchup {",
    "    output := topOutput",
    "}",
    "method outswitchdown {",
    "    output := bottomOutput",
    "}",
    "method countnodebindings(n) {",
    "    if (n.kind == \"if\") then {",
    "        countbindings(n.thenblock.body) + countbindings(n.elseblock.body)",
    "    } else {",
    "        0",
    "    }",
    "}",
    "method countbindings(l) {",
    "    var numslots := 0",
    "    for (l) do { n ->",
    "        def k = n.kind",
    "        if ((k == \"vardec\") || (k == \"defdec\") || (k == \"typedec\")) then {",
    "            numslots := numslots + 1",
    "        } elseif { n.kind == \"if\" } then {",
    "            numslots := numslots + countnodebindings(n)",
    "        }",
    "    }",
    "    numslots",
    "}",
    "method definebindings(l, slot') {",
    "    var slot := slot'",
    "    for (l) do { n ->",
    "        def k = n.kind",
    "        if ((k == \"vardec\") || (k == \"defdec\") || (k == \"typedec\")) then {",
    "            var tnm := \"\"",
    "            var snm := \"\"",
    "            if (n.name.kind == \"generic\") then {",
    "                tnm := escapeident(n.name.value.value)",
    "                snm := escapestring(n.name.value.value)",
    "            } else {  // identifier",
    "                tnm := escapeident(n.name.value)",
    "                snm := escapestring(n.name.value)",
    "            }",
    "            if (!declaredvars.contains(tnm)) then {",
    "                declaredvars.push(tnm)",
    "                out(\"  Object *var_{tnm} = &(stackframe->slots[{slot}]);\")",
    "                out(\"  setframeelementname(stackframe, {slot}, \\\"{snm}\\\");\")",
    "                slot := slot + 1",
    "            }",
    "        } elseif {k == \"if\"} then {",
    "            slot := definebindings(n.thenblock.body, slot)",
    "            slot := definebindings(n.elseblock.body, slot)",
    "            n.handledIdentifiers := true",
    "        } elseif {n.kind == \"import\"} then {",
    "            var tnm := escapeident(n.nameString)",
    "            out \"  Object *var_{tnm} = alloc_var();\"",
    "            // TODO: why is this different from a def?  Handle annotations!",
    "        }",
    "    }",
    "    slot",
    "}",
    "method beginblock(s) {",
    "    bblock := \"%\" ++ s",
    "    out(s ++ \":\")",
    "}",
    "method escapeident(s) {",
    "    var ns := \"\"",
    "    for (s) do { c ->",
    "        def o = c.ord",
    "        if (((o >= 65) && (o <= 90))",
    "            || ((o >= 97) && (o <= 122))",
    "            || ((o >= 48) && (o <= 57))",
    "            || (o == 95)) then {",
    "            ns := ns ++ c",
    "        } else {",
    "            ns := ns ++ \"_{o}_\"",
    "        }",
    "    }",
    "    ns",
    "}",
    "method escapestring(s) {",
    "    s._escape",
    "}",
    "method escapestring2(s) {",
    "    var ns := \"\"",
    "    var cd := 0",
    "    var ls := false",
    "    for (escapestring(s)) do { c->",
    "        if (ls && (c == \"\\\\\")) then {",
    "            ls := false",
    "            ns := ns ++ \"\\\\\\\\\"",
    "        } elseif { c == \"\\\\\" } then {",
    "            ls := true",
    "        } elseif { ls } then {",
    "            ns := ns ++ \"\\\"\\\"\\\\x\" ++ c",
    "            ls := false",
    "            cd := 2",
    "        } else {",
    "            ns := ns ++ c",
    "        }",
    "        if (cd == 1) then {",
    "            ns := ns ++ \"\\\"\\\"\"",
    "            cd := 0",
    "        } elseif { cd > 0 } then {",
    "            cd := cd - 1",
    "        }",
    "    }",
    "    ns",
    "}",
    "method compilearray(o) {",
    "    var myc := auto_count",
    "    auto_count := auto_count + 1",
    "    var r",
    "    out \"  Object array{myc} = {bracketConstructor};\"",
    "    out \"  gc_pause();\"",
    "    var i := 0",
    "    for (o.value) do {a ->",
    "        r := compilenode(a)",
    "        out(\"  params[0] = {r};\")",
    "        out(\"  partcv[0] = 1;\")",
    "        out(\"  callmethodflags(array{myc}, \\\"push(1)\\\", 1, partcv, params, CFLAG_SELF);\")",
    "        i := i + 1",
    "    }",
    "    out(\"  gc_unpause();\")",
    "    o.register := \"array\" ++ myc",
    "}",
    "method compilemember(o) {",
    "    // memberNodes represent a nullary method request.",
    "    o.generics := false         // because compilecall does generics incorrectly",
    "    compilecall(o, false)",
    "}",
    "method compileobjouter(selfr, outerRef) {",
    "    var myc := auto_count",
    "    auto_count := auto_count + 1",
    "    var nm := \"outer\"",
    "    var enm := escapestring2(nm)",
    "    out(\"// OBJECT OUTER DEC \" ++ enm)",
    "    out(\"  adddatum2({selfr}, {outerRef}, 0);\")",
    "    outprint(\"Object reader_{escmodname}_{enm}_{myc}\"",
    "        ++ \"(Object self, int nparams, int *argcv, \"",
    "        ++ \"Object* args, int flags) \\{\")",
    "    outprint(\"  struct UserObject *uo = (struct UserObject*)self;\")",
    "    outprint(\"  return uo->data[0];\")",
    "    outprint(\"\\}\")",
    "    out(\"  addmethodreal({selfr},\\\"outer\\\", &reader_{escmodname}_{enm}_{myc});\")",
    "}",
    "method compileobjtypemeth(o, selfr, pos) {",
    "    var myc := auto_count",
    "    auto_count := auto_count + 1",
    "    var nm := o.nameString",
    "    var enm := escapestring2(nm)",
    "    var inm := escapeident(nm)",
    "    outprint(\"Object reader_{escmodname}_{inm}_{myc}\"",
    "        ++ \"(Object self, int nparams, int *argcv, \"",
    "        ++ \"Object* args, int flags) \\{\")",
    "    var flags := \"MFLAG_DEF\"",
    "    for (o.annotations) do {ann->",
    "        if ((ann.kind == \"identifier\") && {ann.value == \"confidential\"}) then {",
    "            flags := \"{flags} | MFLAG_CONFIDENTIAL\"",
    "        }",
    "    }",
    "    outprint(\"  struct UserObject *uo = (struct UserObject *)self;\")",
    "    outprint(\"  return uo->data[{pos}];\")",
    "    outprint(\"\\}\")",
    "    out(\"  Method *reader{myc} = addmethodrealflags({selfr}, \\\"{enm}\\\",&reader_{escmodname}_{inm}_{myc}, {flags});\")",
    "    out(\"  reader{myc}->definitionModule = modulename;\")",
    "    out(\"  reader{myc}->definitionLine = {o.line};\")",
    "}",
    "method compileobjdefdecdata(o, selfr, pos) {",
    "    var val := \"undefined\"",
    "    if (false != o.value) then {",
    "        if (o.value.kind == \"object\") then {",
    "            compileobject(o.value, selfr)",
    "            val := o.value.register",
    "        } else {",
    "            val := compilenode(o.value)",
    "        }",
    "    }",
    "    out(\"  adddatum2({selfr}, {val}, {pos});\")",
    "    if (ast.findAnnotation(o, \"parent\")) then {",
    "        out(\"  ((struct UserObject *){selfr})->super = {val};\")",
    "    }",
    "}",
    "method compileobjdefdecmeth(o, selfr, pos) {",
    "    var myc := auto_count",
    "    auto_count := auto_count + 1",
    "    var nm := o.name.value",
    "    var enm := escapestring2(nm)",
    "    var inm := escapeident(nm)",
    "    outprint(\"Object reader_{escmodname}_{inm}_{myc}\"",
    "        ++ \"(Object self, int nparams, int *argcv, \"",
    "        ++ \"Object* args, int flags) \\{\")",
    "    var flags := \"MFLAG_DEF\"",
    "    var isPublic := false",
    "    for (o.annotations) do {ann->",
    "        if ((ann.kind == \"identifier\") && {ann.value == \"public\"}) then {",
    "            isPublic := true",
    "        }",
    "        if ((ann.kind == \"identifier\") && {ann.value == \"readable\"}) then {",
    "            isPublic := true",
    "        }",
    "    }",
    "    if (!isPublic) then {",
    "        flags := \"{flags} | MFLAG_CONFIDENTIAL\"",
    "    }",
    "    outprint(\"  struct UserObject *uo = (struct UserObject *)self;\")",
    "    outprint(\"  return uo->data[{pos}];\")",
    "    outprint(\"\\}\")",
    "    out(\"  Method *reader{myc} = addmethodrealflags({selfr}, \\\"{enm}\\\",&reader_{escmodname}_{inm}_{myc}, {flags});\")",
    "    out(\"  reader{myc}->definitionModule = modulename;\")",
    "    out(\"  reader{myc}->definitionLine = {o.line};\")",
    "}",
    "method compileobjdefdec(o, selfr, pos) {",
    "    var val := \"undefined\"",
    "    if (false != o.value) then {",
    "        if (o.value.kind == \"object\") then {",
    "            compileobject(o.value, selfr)",
    "            val := o.value.register",
    "        } else {",
    "            val := compilenode(o.value)",
    "        }",
    "    }",
    "    var myc := auto_count",
    "    auto_count := auto_count + 1",
    "    var nm := o.name.value",
    "    var enm := escapestring2(nm)",
    "    var inm := escapeident(nm)",
    "    out(\"// OBJECT CONST DEC \" ++ enm)",
    "    out(\"  adddatum2({selfr}, {val}, {pos});\")",
    "    outprint(\"Object reader_{escmodname}_{inm}_{myc}\"",
    "        ++ \"(Object self, int nparams, int *argcv, \"",
    "        ++ \"Object* args, int flags) \\{\")",
    "    outprint(\"  struct UserObject *uo = (struct UserObject *)self;\")",
    "    outprint(\"  return uo->data[{pos}];\")",
    "    outprint(\"\\}\")",
    "    out(\"  Method *reader{myc} = addmethodrealflags({selfr}, \\\"{enm}\\\",&reader_{escmodname}_{inm}_{myc}, MFLAG_DEF);\")",
    "}",
    "method compileobjvardecdata(o, selfr, pos) {",
    "    var val := \"undefined\"",
    "    if (false != o.value) then {",
    "        val := compilenode(o.value)",
    "    }",
    "    out(\"  adddatum2({selfr}, {val}, {pos});\")",
    "}",
    "method compileobjvardecmeth(o, selfr, pos) {",
    "    var myc := auto_count",
    "    auto_count := auto_count + 1",
    "    var nm := o.name.value",
    "    var enm := escapestring2(nm)",
    "    var inm := escapeident(nm)",
    "    outprint(\"Object reader_{escmodname}_{inm}_{myc}\"",
    "        ++ \"(Object self, int nparams, int *argcv, \"",
    "        ++ \"Object* args, int flags) \\{\")",
    "    var rflags := \"MFLAG_CONFIDENTIAL\"",
    "    var wflags := \"MFLAG_CONFIDENTIAL\"",
    "    for (o.annotations) do {ann->",
    "        if ((ann.kind == \"identifier\") && {ann.value == \"public\"}) then {",
    "            rflags := \"0\"",
    "            wflags := \"0\"",
    "        }",
    "        if ((ann.kind == \"identifier\") && {ann.value == \"readable\"}) then {",
    "            rflags := \"0\"",
    "        }",
    "        if ((ann.kind == \"identifier\") && {ann.value == \"writable\"}) then {",
    "            wflags := \"0\"",
    "        }",
    "    }",
    "    outprint(\"  struct UserObject *uo = (struct UserObject *)self;\")",
    "    outprint(\"  return uo->data[{pos}];\")",
    "    outprint(\"\\}\")",
    "    out(\"  Method *reader{myc} = addmethodrealflags({selfr}, \\\"{enm}\\\", &reader_{escmodname}_{inm}_{myc}, {rflags});\")",
    "    outprint(\"Object writer_{escmodname}_{inm}_{myc}\"",
    "        ++ \"(Object self, int nparams, int *argcv, \"",
    "        ++ \"Object* args, int flags) \\{\")",
    "    outprint(\"  struct UserObject *uo = (struct UserObject *)self;\")",
    "    outprint(\"  uo->data[{pos}] = args[0];\")",
    "    outprint(\"  return done;\");",
    "    outprint(\"\\}\")",
    "    out(\"  Method *writer{myc} = addmethodrealflags({selfr}, \\\"{enm}:=(1)\\\", &writer_{escmodname}_{inm}_{myc}, {wflags});\")",
    "    out(\"  reader{myc}->definitionModule = modulename;\")",
    "    out(\"  writer{myc}->definitionModule = modulename;\")",
    "    out(\"  reader{myc}->definitionLine = {o.line};\")",
    "    out(\"  writer{myc}->definitionLine = {o.line};\")",
    "}",
    "method compileobjvardec(o, selfr, pos) {",
    "    var val := \"undefined\"",
    "    if (false != o.value) then {",
    "        val := compilenode(o.value)",
    "    }",
    "    var myc := auto_count",
    "    auto_count := auto_count + 1",
    "    var nm := o.name.value",
    "    var enm := escapestring2(nm)",
    "    var inm := escapeident(nm)",
    "    out(\"// OBJECT VAR DEC \" ++ nm)",
    "    out(\"  adddatum2({selfr}, {val}, {pos});\")",
    "    outprint(\"Object reader_{escmodname}_{inm}_{myc}\"",
    "        ++ \"(Object self, int nparams, int *argcv, \"",
    "        ++ \"Object* args, int flags) \\{\")",
    "    outprint(\"  struct UserObject *uo = (struct UserObject *)self;\")",
    "    outprint(\"  return uo->data[{pos}];\")",
    "    outprint(\"\\}\")",
    "    out(\"  addmethodreal({selfr}, \\\"{enm}\\\",&reader_{escmodname}_{inm}_{myc});\")",
    "    outprint(\"Object writer_{escmodname}_{inm}_{myc}\"",
    "        ++ \"(Object self, int nparams, int *argcv, \"",
    "        ++ \"Object* args, int flags) \\{\")",
    "    outprint(\"  struct UserObject *uo = (struct UserObject *)self;\")",
    "    outprint(\"  uo->data[{pos}] = args[0];\")",
    "    outprint(\"  return done;\");",
    "    outprint(\"\\}\")",
    "    out(\"  addmethodreal({selfr}, \\\"{enm}:=(1)\\\", &writer_{escmodname}_{inm}_{myc});\")",
    "}",
    "method compileobject(o, outerRef) {",
    "    var origInBlock := inBlock",
    "    inBlock := false",
    "    var myc := auto_count",
    "    auto_count := auto_count + 1",
    "    var selfr := \"obj\" ++ myc",
    "    var numFields := 1",
    "    var numMethods := 0",
    "    var pos := 1",
    "    var superobj := false",
    "    out \"  Object inheritingObject{myc} = inheritingObject;\"",
    "    out \"  if (isTailObject) \\{\"",
    "    out \"    isTailObject = 0;\"",
    "    out \"    inheritingObject = NULL;\"",
    "    out \"  \\}\"",
    "    for (o.value) do { e ->",
    "        if (e.kind == \"vardec\") then {",
    "            numMethods := numMethods + 1",
    "        }",
    "        if (e.kind == \"method\") then {",
    "            if (e.isFresh) then {",
    "                numMethods := numMethods + 1",
    "                numFields := numFields + 1",
    "            }",
    "        }",
    "        numMethods := numMethods + 1",
    "        numFields := numFields + 1",
    "    }",
    "    if (numFields == 3) then {",
    "        numFields := 4",
    "    }",
    "    globals.push(\"static ClassData objclass{myc};\");",
    "    out(\"  Object \" ++ selfr ++ \" = alloc_userobj2({numMethods},\"",
    "        ++ \"{numFields}, objclass{myc});\")",
    "    out(\"  gc_frame_newslot({selfr});\")",
    "    if (o.name != \"object\") then {",
    "        out(\"if (objclass{myc} == NULL) \\{\")",
    "        out(\"  glfree({selfr}->class->name);\")",
    "        out(\"  {selfr}->class->name = \\\"{o.name}\\\";\")",
    "        out(\"\\}\")",
    "    }",
    "    compileobjouter(selfr, outerRef)",
    "    out(\"  Object oldself{myc} = self;\")",
    "    out(\"  struct StackFrameObject *oldstackframe{myc} = stackframe;\")",
    "    out(\"  stackframe = alloc_StackFrame(1, oldstackframe{myc});\")",
    "    out(\"  gc_frame_newslot((Object)stackframe);\")",
    "    out(\"  self = {selfr};\")",
    "    out(\"  Object *oldselfslot{myc} = selfslot;\")",
    "    out(\"  selfslot = &stackframe->slots[0];\")",
    "    out(\"  *selfslot = self;\")",
    "    out(\"  setframeelementname(stackframe, 0, \\\"self\\\");\")",
    "    out \"  Object thisouter{myc} = (*(struct UserObject *)self).data[0], lowerouter{myc} = thisouter{myc};\"",
    "    out \"  if (inheritingObject{myc}) \\{\"",
    "    out \"    struct UserObject *inho{myc} = (struct UserObject *)inheritingObject{myc};\"",
    "    out \"    while (inho{myc}->super != GraceDefaultObject) inho{myc} = (struct UserObject *)inho{myc}->super;\"",
    "    out \"    inho{myc}->super = {selfr};\"",
    "    out \"    self = inheritingObject{myc};\"",
    "    out \"    *selfslot = self;\"",
    "    out \"    lowerouter{myc} = (*(struct UserObject *)self).data[0];\"",
    "    out \"    (*(struct UserObject *)self).data[0] = thisouter{myc};\"",
    "    out \"  \\}\"",
    "    for (o.value) do { e ->",
    "        if (e.kind == \"method\") then {",
    "            compilemethod(e, selfr, pos)",
    "        } elseif { e.kind == \"vardec\" } then {",
    "            out(\"if (objclass{myc} == NULL) \\{\")",
    "            compileobjvardecmeth(e, selfr, pos)",
    "            out(\"\\}\")",
    "            out(\"{selfr}->flags |= OFLAG_MUTABLE;\")",
    "            out(\"adddatum2({selfr}, alloc_Undefined(), {pos});\")",
    "        } elseif { e.kind == \"defdec\" } then {",
    "            out(\"if (objclass{myc} == NULL) \\{\")",
    "            compileobjdefdecmeth(e, selfr, pos)",
    "            out(\"\\}\")",
    "            out(\"adddatum2({selfr}, alloc_Undefined(), {pos});\")",
    "        } elseif { e.kind == \"typedec\" } then {",
    "            out(\"if (objclass{myc} == NULL) \\{\")",
    "            compileobjtypemeth(e, selfr, pos)",
    "            out(\"\\}\")",
    "            out(\"adddatum2({selfr}, alloc_Undefined(), {pos});\")",
    "        } else {",
    "            pos := pos - 1",
    "        }",
    "        pos := pos + 1",
    "    }",
    "    pos := 1",
    "    ",
    "    def content = [ ]",
    "    if (false != o.superclass) then { content.add(o.superclass) }",
    "    o.usedTraits.do { t -> content.add(t) }",
    "    o.value.do { e -> content.add(e) }",
    "",
    "    content.do { e ->",
    "        out \"  sourceObject = {selfr};\"",
    "        if (e.kind == \"method\") then {",
    "        } elseif { e.kind == \"vardec\" } then {",
    "            compileobjvardecdata(e, selfr, pos)",
    "        } elseif { e.kind == \"defdec\" } then {",
    "            compileobjdefdecdata(e, selfr, pos)",
    "        } elseif { e.kind == \"typedec\" } then {",
    "            compileobjdefdecdata(e, selfr, pos)",
    "        } elseif { e.kind == \"inherits\" } then {",
    "            // The return value is irrelevant with factory inheritance,",
    "            // but we save it as super for the sake of \"inherits true\".",
    "            superobj := compilenode(e.value)",
    "            out \"  struct UserObject *{selfr}_uo = (struct UserObject *){selfr};\"",
    "            out \"  {selfr}_uo->super = {superobj};\"",
    "            implementAliasesAndExclusionsFor(o) inheriting(e, superobj)",
    "            pos := pos - 1",
    "        } else {",
    "            compilenode(e)",
    "            pos := pos - 1 // Compensate for below",
    "        }",
    "        pos := pos + 1",
    "    }",
    "    out(\"  objclass{myc} = {selfr}->class;\")",
    "    out(\"  objclass{myc}->definitionModule = modulename;\")",
    "    out(\"  objclass{myc}->definitionLine = {o.line};\")",
    "    out \"  (*(struct UserObject *)self).data[0] = lowerouter{myc};\"",
    "    out(\"  self = oldself{myc};\")",
    "    out(\"  selfslot = oldselfslot{myc};\")",
    "    out(\"  stackframe = oldstackframe{myc};\")",
    "    o.register := selfr",
    "    inBlock := origInBlock",
    "}",
    "method compileblock(o) {",
    "    def origInBlock = inBlock",
    "    inBlock := true",
    "    def myc = auto_count",
    "    auto_count := auto_count + 1",
    "    var obj := \"block{myc}\"",
    "    out(\"  Object {obj} = alloc_Block(NULL, NULL, \\\"{modname}\\\", {linenum});\")",
    "    out(\"  gc_frame_newslot({obj});\")",
    "    var applymeth := ast.methodNode.new([ast.signaturePart.partName(\"_apply\") params(o.params)], o.body, false)",
    "    applymeth.selfclosure := true",
    "    compilemethod(applymeth, obj, 0)",
    "    if (false != o.matchingPattern) then {",
    "        def pat = compilenode(o.matchingPattern)",
    "        out(\"((struct UserObject *){obj})->data[1] = {pat};\")",
    "    }",
    "    if (false != o.extraRuntimeData) then {",
    "        def erdmeth = ast.methodNode.new(",
    "            [ast.signaturePart.partName(\"extraRuntimeData\")],",
    "            [o.extraRuntimeData], false)",
    "        compilemethod(erdmeth, obj, 2)",
    "    }",
    "    // TODO: get rid of extraRuntimeData — it doesn't appear to be used.",
    "    o.register := obj",
    "    inBlock := origInBlock",
    "}",
    "method compiletypedec(o) {",
    "    def myc = auto_count",
    "    auto_count := auto_count + 1",
    "    def idName = if (o.name.kind == \"generic\") then {",
    "                        escapeident(o.name.value.value)",
    "                    } else {",
    "                        escapeident(o.name.value)",
    "                    }",
    "    out(\"// Type decl {o.name.value}\")",
    "    declaredvars.push(idName)",
    "    if (o.value.kind == \"typeliteral\") then {o.value.name := idName }",
    "    compilenode(o.value)",
    "    out(\"  *var_{idName} = {o.value.register};\")",
    "    o.register := \"done\"",
    "    if (compilationDepth == 1) then {",
    "        compilenode(ast.methodNode.new([ast.signaturePart.partName(o.nameString)],",
    "            [o.name], false))  // TODO: should be TypeType",
    "    }",
    "}",
    "method compiletypeliteral(o) {",
    "    def myc = auto_count",
    "    auto_count := auto_count + 1",
    "    out(\"//   Type literal \")",
    "    out(\"    Object type{myc} = alloc_Type(\\\"{o.name}\\\", {o.methods.size});\")",
    "    for (o.methods) do {meth->",
    "        def mnm = escapestring2(meth.nameString)",
    "        out(\"    add_Method((ClassData)type{myc}, \\\"{mnm}\\\", NULL);\")",
    "    }",
    "    // TODO: types in the type literal",
    "    o.register := \"type{myc}\"",
    "}",
    "method compilemethod(o, selfobj, pos) {",
    "    // How to deal with closures:",
    "    // Calculate body, find difference of usedvars/declaredvars, if closure",
    "    // then build as such. At top of method body bind var_x as usual, but",
    "    // set to pointer from the additional closure parameter.",
    "    out \"// method \\\"{o.canonicalName}\\\"\"",
    "    var origParamsUsed := paramsUsed",
    "    paramsUsed := 1",
    "    var origPartsUsed := partsUsed",
    "    partsUsed := 1",
    "    var origInBlock := inBlock",
    "    inBlock := o.selfclosure",
    "    var oldout := output",
    "    var oldbblock := bblock",
    "    var oldusedvars := usedvars",
    "    var olddeclaredvars := declaredvars",
    "    output := []",
    "    usedvars := []      // accumulates identifiers mentioned inside this method",
    "    declaredvars := []",
    "    var myc := auto_count",
    "    auto_count := auto_count + 1",
    "    def name = o.nameString",
    "    def escapedName = escapestring2(name)",
    "    var nm := name ++ myc",
    "    var numslots := 0",
    "    var slot := 0",
    "    var haveTypedParams := false",
    "    out(\"  int i;\")",
    "    out(\"  int curarg = 0;\")",
    "    out(\"  int pushcv[] = \\{1\\};\")",
    "    def npls = o.numParamLists",
    "    if ((!o.selfclosure) && (npls > 0)) then {",
    "        out \"  if (nparts < {npls} && args)\"",
    "        out(\"    graceRaise(RequestError(), \\\"missing argument list for {o.canonicalName} (probably \"",
    "            ++ \"reflection error): got %i lists, expected \"",
    "            ++ \"{npls}.\\\", nparts);\")",
    "    }",
    "    for (o.signature.indices) do { partnr ->",
    "        var part := o.signature.at(partnr)",
    "        for (part.params) do { param ->",
    "            var pn := escapeident(param.value)",
    "            out(\"  Object *var_{pn} = &(stackframe->slots[{slot}]);\")",
    "            out(\"  *var_{pn} = args[curarg];\")",
    "            out(\"  curarg++;\")",
    "            declaredvars.push(pn)",
    "            slot := slot + 1",
    "            numslots := numslots + 1",
    "            if (param.dtype != false) then {",
    "                if ((param.dtype.value != \"Unknown\")",
    "                    && ((param.dtype.kind == \"identifier\")",
    "                        || (param.dtype.kind == \"typeliteral\"))) then {",
    "                    haveTypedParams := true",
    "                }",
    "            }",
    "        }",
    "        if (!o.selfclosure && (part.params.size > 0)) then {",
    "            out \"  if (argcv && argcv[{partnr - 1}] != {part.params.size})\"",
    "            out \"    graceRaise(RequestError(), \\\"wrong number of arguments for part {part.canonicalName}\\\");\"",
    "        }",
    "    }",
    "    out(\"  Object *selfslot = &(stackframe->slots[{slot}]);\")",
    "    out(\"  *selfslot = self;\")",
    "    out(\"  setframeelementname(stackframe, 0, \\\"self\\\");\")",
    "    slot := slot + 1",
    "    numslots := numslots + 1",
    "    out \"  if (methodInheritingObject) curarg++;\"",
    "    if (o.typeParams != false) then {",
    "        out(\"// Start typeParams\")",
    "        o.typeParams.do {g->",
    "            var gn := escapeident(g.value)",
    "            declaredvars.push(gn)",
    "            out(\"  Object *var_{gn} = &(stackframe->slots[{slot}]);\")",
    "            slot := slot + 1",
    "            numslots := numslots + 1",
    "        }",
    "        out(\"  if (nparts == 1 + {o.signature.size} + (methodInheritingObject != NULL)) \\{\")",
    "        out(\"    if (argcv[nparts-1] < {o.typeParams.size}) \\{\")",
    "        out(\"      graceRaise(RequestError(), \\\"insufficient generic parameters\\\");\")",
    "        out(\"    \\}\")",
    "        o.typeParams.do {g->",
    "            var gn := escapeident(g.value)",
    "            out(\"    *var_{gn} = args[curarg++];\")",
    "        }",
    "        out(\"  \\} else \\{\")",
    "        o.typeParams.do {g->",
    "            var gn := escapeident(g.value)",
    "            out(\"    *var_{gn} = Unknown;\")",
    "        }",
    "        out(\"  \\}\")",
    "        out(\"// End typeParams\")",
    "    }",
    "    var ret := \"done\"",
    "    numslots := numslots + countbindings(o.body)",
    "    definebindings(o.body, slot)",
    "    var tailObject := false",
    "    var tco := false",
    "    if ((o.body.size > 0) && {o.body.last.kind == \"call\"}",
    "        && {util.extensions.contains(\"TailCall\")}) then {",
    "        tco := o.body.pop",
    "    }",
    "    if ((o.body.size > 0) && {o.body.last.kind == \"object\"}) then {",
    "        tailObject := o.body.pop       // remove tail object",
    "        if (tailObject.name == \"object\") then {",
    "            var selfName := selfobj",
    "            if (selfName.startsWith \"var_\") then {",
    "                selfName := selfName.substringFrom 5 to(selfName.size)",
    "            }",
    "            tailObject.name := selfobj ++ \".\" ++ o.nameString",
    "        }",
    "    }",
    "    for (o.body) do { l ->",
    "        ret := compilenode(l)",
    "    }",
    "    if (false != tailObject) then {",
    "        o.body.push(tailObject)        // put tail object back",
    "        out \"  isTailObject = 1;\"",
    "        out \"  inheritingObject = methodInheritingObject;\"",
    "        compileobject(tailObject, \"self\")",
    "        ret := tailObject.register",
    "    }",
    "    if (false != tco) then {",
    "        compilecall(tco, true)",
    "        ret := tco.register",
    "    }",
    "    out(\"  gc_frame_end(frame);\")",
    "    out(\"  return {ret};\")",
    "    out(\"\\}\")",
    "    // Now we've finished compiling the body of the method, we need to ",
    "    // construct the closure that makes the variables available.",
    "    var body := output",
    "    outswitchup",
    "    var closurevars := []",
    "    for (usedvars) do { u ->",
    "        var decl := false",
    "        for (declaredvars) do { d->",
    "            if (d == u) then {",
    "                decl := true",
    "            }",
    "        }",
    "        if (decl) then {",
    "            decl := decl",
    "        } else {",
    "            var found := false",
    "            for (closurevars) do { v ->",
    "                if (v == u) then {",
    "                    found := true",
    "                }",
    "            }",
    "            if (found) then {",
    "                found := found",
    "            } else {",
    "                closurevars.push(u)",
    "            }",
    "        }",
    "    }",
    "    if (o.selfclosure) then {",
    "        closurevars.push(\"self\")",
    "    }",
    "    var litname := escapeident(\"meth_{modname}_{escapestring2(nm)}\")",
    "    if (closurevars.size > 0) then {",
    "        if (o.selfclosure) then {",
    "            out(\"Object {litname}(Object realself, int nparts, int *argcv, \"",
    "                ++ \"Object *args, int32_t flags) \\{\")",
    "            out(\"  struct UserObject *uo = (struct UserObject*)realself;\")",
    "        } else {",
    "            out(\"Object {litname}(Object self, int nparts, int *argcv, Object *args, \"",
    "                ++ \"int32_t flags) \\{\")",
    "            out(\"  struct UserObject *uo = (struct UserObject*)self;\")",
    "        }",
    "        out(\"  Object closure = getdatum((Object)uo, {pos}, (flags>>24)&0xff);\")",
    "        out(\"  struct StackFrameObject *stackframe = alloc_StackFrame({numslots}, getclosureframe(closure));\")",
    "        out(\"  pushclosure(closure);\")",
    "    } else {",
    "        out(\"Object {litname}(Object self, int nparts, int *argcv, Object *args, \"",
    "            ++ \"int32_t flags) \\{\")",
    "        out(\"  struct StackFrameObject *stackframe = alloc_StackFrame({numslots}, NULL);\")",
    "        out(\"  pushclosure(NULL);\")",
    "    }",
    "    out(\"  pushstackframe(stackframe, \\\"{escapedName}\\\");\")",
    "    out(\"  int frame = gc_frame_new();\")",
    "    out(\"  gc_frame_newslot((Object)stackframe);\")",
    "    out \"  Object methodInheritingObject = NULL;\"",
    "    for (o.signature.indices) do { partnr ->",
    "        def part = o.signature.at(partnr)",
    "        if (part.params.size > 0) then {",
    "            out(\"  if (nparts > 0 && argcv[{partnr - 1}] < {part.params.size})\")",
    "            out(\"    graceRaise(RequestError(), \\\"insufficient arguments to method {o.canonicalName.quoted}\\\");\")",
    "        }",
    "    }",
    "    // We need to detect which parameters are used in a closure, and",
    "    // treat those specially. As params[] is stack-allocated, references",
    "    // to those variables would fail once the method was out of scope",
    "    // unless we copied them onto the heap.",
    "    var i := 0",
    "    def toremove = []",
    "    for (o.signature) do { part ->",
    "        for (part.params) do { p ->",
    "            var pn := escapeident(p.value)",
    "            if (closurevars.contains(pn)) then {",
    "                toremove.push(pn)",
    "            }",
    "        }",
    "    }",
    "    // APB: I believe that `toremove` is the list of enclosing",
    "    // variables that are shadowed by parameters.  This is unnecessary, ",
    "    // since it is syntactially illgeal for a parameter to have the",
    "    // same name as a variable in an enclosing scope.",
    "    def origclosurevars = closurevars",
    "    closurevars := []",
    "    for (origclosurevars) do {pn->",
    "        if (toremove.contains(pn)) then {",
    "            // Remove this one",
    "        } else {",
    "            closurevars.push(pn)",
    "        }",
    "    }",
    "    out(\"  Object params[{paramsUsed}];\")",
    "    out(\"  int partcv[{partsUsed}];\")",
    "    var j := 0",
    "    for (closurevars) do { cv ->",
    "        if (cv == \"self\") then {",
    "            out(\"  Object self = *(getfromclosure(closure, {j}));\")",
    "            out(\"  sourceObject = self;\")",
    "        } else {",
    "            out(\"  Object *var_{cv} = getfromclosure(closure, {j});\")",
    "        }",
    "        j := j + 1",
    "    }",
    "    for (body) do { l->",
    "        out(l)",
    "    }",
    "    outswitchdown",
    "    output := oldout",
    "    bblock := oldbblock",
    "    usedvars := oldusedvars",
    "    declaredvars := olddeclaredvars",
    "    for (closurevars) do { cv ->",
    "        if (cv != \"self\") then {",
    "            if ((usedvars.contains(cv)).not) then {",
    "                usedvars.push(cv)",
    "            }",
    "        }",
    "    }",
    "    if (selfobj == false) then {",
    "    } elseif { closurevars.size == 0 } then {",
    "        var uo2 := \"uo{myc}\"",
    "        out(\"  struct UserObject *{uo2} = (struct UserObject*){selfobj};\")",
    "        out(\"  {uo2}->data[{pos}] = emptyclosure;\")",
    "        out(\"  Method *meth_{litname} = addmethod2pos({selfobj}, \\\"{escapedName}\\\", &{litname}, {pos});\")",
    "        compilemethodtypes(litname, o)",
    "    } else {",
    "        out(\"  block_savedest({selfobj});\")",
    "        out(\"  Object closure\" ++ myc ++ \" = createclosure(\"",
    "            ++ closurevars.size ++ \", \\\"{escapedName}\\\");\")",
    "        out(\"  setclosureframe(closure{myc}, stackframe);\")",
    "        for (closurevars) do { v ->",
    "            if (v == \"self\") then {",
    "                out(\"  addtoclosure(closure{myc}, selfslot);\")",
    "                auto_count := auto_count + 1",
    "            } else {",
    "                out(\"  addtoclosure(closure{myc}, var_{v});\")",
    "            }",
    "        }",
    "        var uo := \"uo{myc}\"",
    "        out(\"  struct UserObject *{uo} = (struct UserObject*){selfobj};\")",
    "        out(\"  {uo}->data[{pos}] = (Object)closure{myc};\")",
    "        out(\"  Method *meth_{litname} = addmethod2pos({selfobj}, \\\"{escapedName}\\\", &{litname}, {pos});\")",
    "        compilemethodtypes(litname, o)",
    "    }",
    "    for (o.annotations) do {ann->",
    "        if ((ann.kind == \"identifier\") && {ann.value == \"confidential\"}) then {",
    "            out(\"  meth_{litname}->flags |= MFLAG_CONFIDENTIAL;\");",
    "        }",
    "    }",
    "    out(\"  meth_{litname}->definitionModule = modulename;\")",
    "    out(\"  meth_{litname}->definitionLine = {o.line};\")",
    "    if (o.isFresh) then {",
    "        compilefreshmethod(o, nm, body, closurevars, selfobj, pos, numslots,",
    "            oldout)",
    "    }",
    "    inBlock := origInBlock",
    "    paramsUsed := origParamsUsed",
    "    partsUsed := origPartsUsed",
    "} // end of compilemethod",
    "",
    "// Compiles the \"fresh\" method version of a method, when applicable.",
    "// This method is given a different name ending in `$object(1)`, with the final",
    "// parameter being the object into which to insert methods.",
    "method compilefreshmethod(o, nm, body, closurevars, selfobj, pos, numslots,",
    "        oldout) {",
    "    def myc = auto_count",
    "    auto_count := auto_count + 1",
    "    var litname := escapeident(\"meth_{modname}_{escapestring2(nm)}_object\")",
    "    def name = o.nameString ++ \"$object(1)\"",
    "    def escapedName = escapestring2(name)",
    "    outswitchup",
    "    if (closurevars.size > 0) then {",
    "        if (o.selfclosure) then {",
    "            out(\"Object {litname}(Object realself, int nparts, int *argcv, \"",
    "                ++ \"Object *args, int32_t flags) \\{\")",
    "            out(\"  struct UserObject *uo = (struct UserObject*)realself;\")",
    "        } else {",
    "            out(\"Object {litname}(Object self, int nparts, int *argcv, Object *args, \"",
    "                ++ \"int32_t flags) \\{\")",
    "            out(\"  struct UserObject *uo = (struct UserObject*)self;\")",
    "        }",
    "        out(\"  Object closure = getdatum((Object)uo, {pos}, (flags>>24)&0xff);\")",
    "        out(\"  struct StackFrameObject *stackframe = alloc_StackFrame({numslots}, getclosureframe(closure));\")",
    "        out(\"  pushclosure(closure);\")",
    "    } else {",
    "        out(\"Object {litname}(Object self, int nparts, int *argcv, Object *args, \"",
    "            ++ \"int32_t flags) \\{\")",
    "        out(\"  struct StackFrameObject *stackframe = alloc_StackFrame({numslots}, NULL);\")",
    "        out(\"  pushclosure(NULL);\")",
    "    }",
    "    out(\"  pushstackframe(stackframe, \\\"{escapedName}\\\");\")",
    "    out(\"  int frame = gc_frame_new();\")",
    "    out(\"  gc_frame_newslot((Object)stackframe);\")",
    "    var sumAccum := \"0\"",
    "    for (o.signature.indices) do { partnr ->",
    "        sumAccum := sumAccum ++ \" + argcv[{partnr - 1}]\"",
    "    }",
    "    out \"  Object methodInheritingObject = args[{sumAccum}];\"",
    "    for (o.signature.indices) do { partnr ->",
    "        def part = o.signature.at(partnr)",
    "        if (part.params.size > 0) then {",
    "            out(\"  if (nparts > 0 && argcv[{partnr - 1}] < {part.params.size})\")",
    "            out(\"    graceRaise(RequestError(), \\\"insufficient arguments for method {o.canonicalName}\\\");\")",
    "        }",
    "    }",
    "    out(\"  Object params[{paramsUsed}];\")",
    "    out(\"  int partcv[{partsUsed}];\")",
    "    var j := 0",
    "    for (closurevars) do { cv ->",
    "        if (cv == \"self\") then {",
    "            out(\"  Object self = *(getfromclosure(closure, {j}));\")",
    "            out(\"  sourceObject = self;\")",
    "        } else {",
    "            out(\"  Object *var_{cv} = getfromclosure(closure, {j});\")",
    "        }",
    "        j := j + 1",
    "    }",
    "    for (body) do { l->",
    "        out(l)",
    "    }",
    "    output := oldout",
    "    if (selfobj == false) then {",
    "    } elseif { closurevars.size == 0 } then {",
    "        out(\"  Method *meth_{litname} = addmethod2pos({selfobj}, \\\"{escapedName}\\\", &{litname}, {pos});\")",
    "        compilemethodtypes(litname, o)",
    "    } else {",
    "        out(\"  block_savedest({selfobj});\")",
    "        out(\"  Object closure\" ++ myc ++ \" = createclosure(\"",
    "            ++ closurevars.size ++ \", \\\"{escapedName}\\\");\")",
    "        out(\"  setclosureframe(closure{myc}, stackframe);\")",
    "        for (closurevars) do { v ->",
    "            if (v == \"self\") then {",
    "                out(\"  addtoclosure(closure{myc}, selfslot);\")",
    "                auto_count := auto_count + 1",
    "            } else {",
    "                out(\"  addtoclosure(closure{myc}, var_{v});\")",
    "            }",
    "        }",
    "        var uo := \"uo{myc}\"",
    "        out(\"  Method *meth_{litname} = addmethod2pos({selfobj}, \\\"{escapedName}\\\", &{litname}, {pos});\")",
    "    }",
    "    for (o.annotations) do {ann->",
    "        if ((ann.kind == \"identifier\") && {ann.value == \"confidential\"}) then {",
    "            out(\"  meth_{litname}->flags |= MFLAG_CONFIDENTIAL;\");",
    "        }",
    "    }",
    "    out(\"  meth_{litname}->definitionModule = modulename;\")",
    "    out(\"  meth_{litname}->definitionLine = {o.line};\")",
    "}",
    "method compilemethodtypes(litname, o) {",
    "    var argcv := \"  int argcv_{litname}[] = \\{\"",
    "    for (o.signature.indices) do { partnr ->",
    "        var part := o.signature.at(partnr)",
    "        argcv := argcv ++ part.params.size",
    "        if (partnr < o.signature.size) then {",
    "            argcv := argcv ++ \", \"",
    "        }",
    "    }",
    "    argcv := argcv ++ \"\\};\"",
    "    out(argcv)",
    "    out(\"  meth_{litname}->type = alloc_MethodType({o.signature.size}, argcv_{litname});\")",
    "    var pi := 0",
    "    for (o.signature) do { part ->",
    "        for (part.params) do { p ->",
    "            // We store information for static top-level types only:",
    "            // absent information is treated as Unknown (and unchecked).",
    "            if (false != p.dtype) then {",
    "                if ((p.dtype.kind == \"identifier\")",
    "                    || (p.dtype.kind == \"typeliteral\")) then {",
    "                    def typeid = escapeident(p.dtype.value)",
    "                    if (topLevelTypes.contains(typeid)) then {",
    "                        out(\"meth_{litname}->type->types[{pi}] \"",
    "                            ++ \"= type_{typeid};\")",
    "                        out(\"meth_{litname}->type->names[{pi}] \"",
    "                            ++ \"= \\\"{escapestring2(p.nameString)}\\\";\")",
    "                    }",
    "                }",
    "            }",
    "            pi := pi + 1",
    "        }",
    "    }",
    "}",
    "method compileifexpr(o) {",
    "    var myc := auto_count",
    "    auto_count := auto_count + 1",
    "    var cond := compilenode(o.value)",
    "    out(\"  Object if{myc} = done;\")",
    "    out(\"struct StackFrameObject *iftmpstackframe{myc} = stackframe;\")",
    "    out(\"  if (istrue({cond})) \\{\")",
    "    var numslots := countbindings(o.thenblock.body)",
    "    out(\"stackframe = alloc_StackFrame({numslots}, iftmpstackframe{myc});\")",
    "    out(\"gc_frame_newslot((Object)stackframe);\")",
    "    var tret := \"done\"",
    "    var fret := \"done\"",
    "    var tblock := \"ERROR\"",
    "    var fblock := \"ERROR\"",
    "    def thenList = o.thenblock.body",
    "    definebindings(thenList, 0)",
    "    for (thenList) do { l->",
    "        tret := compilenode(l)",
    "    }",
    "    out(\"    gc_frame_newslot({tret});\")",
    "    out(\"    if{myc} = {tret};\")",
    "    out(\"  \\} else \\{\")",
    "    def elseList = o.elseblock.body",
    "    if (elseList.size > 0) then {",
    "        numslots := countbindings(elseList)",
    "        out(\"  stackframe = alloc_StackFrame({numslots}, iftmpstackframe{myc});\")",
    "        out(\"  gc_frame_newslot((Object)stackframe);\")",
    "        definebindings(elseList, 0)",
    "        for (elseList) do { l->",
    "            fret := compilenode(l)",
    "        }",
    "        out(\"    gc_frame_newslot({fret});\")",
    "        out(\"    if{myc} = {fret};\")",
    "    }",
    "    out(\"  \\}\")",
    "    out(\"stackframe = iftmpstackframe{myc};\")",
    "    o.register := \"if\" ++ myc",
    "}",
    "method compileif(o) {",
    "    if (o.handledIdentifiers == false) then {",
    "        return compileifexpr(o)",
    "    }",
    "    var myc := auto_count",
    "    auto_count := auto_count + 1",
    "    var cond := compilenode(o.value)",
    "    out(\"  Object if{myc} = done;\")",
    "    out(\"  if (istrue({cond})) \\{\")",
    "    var tret := \"done\"",
    "    var fret := \"done\"",
    "    var tblock := \"ERROR\"",
    "    var fblock := \"ERROR\"",
    "    def thenList = o.thenblock.body",
    "    for (thenList) do { l->",
    "        tret := compilenode(l)",
    "    }",
    "    out(\"    gc_frame_newslot({tret});\")",
    "    out(\"    if{myc} = {tret};\")",
    "    out(\"  \\} else \\{\")",
    "    def elseList = o.elseblock.body",
    "    if (elseList.size > 0) then {",
    "        for (elseList) do { l->",
    "            fret := compilenode(l)",
    "        }",
    "        out(\"    gc_frame_newslot({fret});\")",
    "        out(\"    if{myc} = {fret};\")",
    "    }",
    "    out(\"  \\}\")",
    "    o.register := \"if\" ++ myc",
    "}",
    "method compileidentifier(o) {",
    "    var name := escapeident(o.value)",
    "    if (name == \"super\") then {",
    "        def sugg = errormessages.suggestion.new",
    "        sugg.replaceRange(o.linePos, o.linePos + 4)with \"self\" onLine(o.line)",
    "        errormessages.syntaxError(\"'super' can be used only to the \"",
    "                ++ \"left of the . in a method request. \"",
    "                ++ \"Use 'self' instead?\")",
    "            atRange(",
    "                o.line, o.linePos, o.linePos + 4)withSuggestion(sugg)",
    "    }",
    "    if (name == \"self\") then {",
    "        o.register := \"self\"",
    "    } elseif { name == \"__compilerRevision\" } then {",
    "        out(\"  Object var_val___compilerRevision\" ++ auto_count",
    "            ++ \" = alloc_String(compilerRevision);\")",
    "        o.register := \"var_val___compilerRevision\" ++ auto_count",
    "        auto_count := auto_count + 1",
    "    } elseif { name == \"_46__46__46_\" } then {",
    "        out(\"  Object ellipsis{auto_count} = alloc_ellipsis();\")",
    "        o.register := \"ellipsis{auto_count}\"",
    "        auto_count := auto_count + 1",
    "    } else {",
    "        name := escapestring2(name)",
    "        usedvars.push(name)",
    "        o.register := \"*var_{name}\"",
    "    }",
    "}",
    "method compilebind(o) {",
    "    def lhs = o.dest",
    "    if (lhs.isIdentifier) then {",
    "        def val = compilenode(o.value)",
    "        def nm = escapeident(lhs.value)",
    "        usedvars.push(nm)",
    "        out(\"  *var_{nm} = {val};\")",
    "        out(\"  if ({val} == undefined)\")",
    "        out(\"    graceRaise(ProgrammingError(), \\\"attempting to use an ininitilized variable\\\");\");",
    "        auto_count := auto_count + 1",
    "        o.register := \"done\"",
    "    } else {",
    "        ProgrammingError.raise \"bindNode {o} does not bind an indentifer\"",
    "    }",
    "}",
    "method compiledefdec(o) {",
    "    var nm",
    "    if (o.name.kind == \"generic\") then {",
    "        nm := escapeident(o.name.value.value)",
    "    } else {",
    "        nm := escapeident(o.name.value)",
    "    }",
    "    declaredvars.push(nm)",
    "    var val := compilenode(o.value)",
    "    out(\"  *var_{nm} = {val};\")",
    "    out(\"  if ({val} == undefined)\")",
    "    out(\"    graceRaise(ProgrammingError(), \\\"attempting to use an ininitilized variable\\\");\");",
    "    if (compilationDepth == 1) then {",
    "        compilenode(ast.methodNode.new([ast.signaturePart.partName(o.nameString)], [o.name], false))",
    "        if (ast.findAnnotation(o, \"parent\")) then {",
    "            out(\"  ((struct UserObject *)self)->super = {val};\")",
    "        }",
    "    }",
    "    o.register := \"done\"",
    "}",
    "method compilevardec(o) {",
    "    var nm := escapeident(o.name.value)",
    "    declaredvars.push(nm)",
    "    var val := o.value",
    "    var hadval := false",
    "    if (false != val) then {",
    "        val := compilenode(val)",
    "        hadval := true",
    "    } else {",
    "        val := \"undefined\"",
    "    }",
    "    out(\"  *var_{nm} = {val};\")",
    "    if (hadval) then {",
    "        out(\"  if ({val} == undefined)\")",
    "        out(\"    callmethod(done, \\\"assignment\\\", 0, NULL, NULL);\")",
    "    }",
    "    if (compilationDepth == 1) then {",
    "        compilenode(ast.methodNode.new( [ast.signaturePart.partName(o.nameString)], [o.name], false))",
    "        def paramId = ast.identifierNode.new(\"_var_assign_tmp\", false)",
    "        compilenode(ast.methodNode.new([ast.signaturePart.partName(o.nameString ++ \":=\") params( [paramId] )],",
    "            [ast.bindNode.new(o.name, paramId)], false))",
    "    }",
    "    o.register := \"done\"",
    "}",
    "method compiletrycatch(o) {",
    "    def myc = auto_count",
    "    auto_count := auto_count + 1",
    "    def cases = o.cases",
    "    if (o.cases.size > paramsUsed) then {",
    "        paramsUsed := o.cases.size",
    "    }",
    "    def mainblock = compilenode(o.value)",
    "    out(\"  int frame{myc} = gc_frame_new();\")",
    "    out(\"  gc_frame_newslot({mainblock});\")",
    "    var i := 0",
    "    def params = []",
    "    for (cases) do {c->",
    "        def e = compilenode(c)",
    "        out(\"  gc_frame_newslot({e});\")",
    "        params.push([i, e])",
    "        i := i + 1",
    "    }",
    "    var finally := \"NULL\"",
    "    if (false != o.finally) then {",
    "        finally := compilenode(o.finally)",
    "        out(\"  gc_frame_newslot({finally});\")",
    "    }",
    "    for (params) do {ie->",
    "        def idx = ie.first",
    "        def e = ie.second",
    "        out(\"  params[{idx}] = {e};\")",
    "    }",
    "    out \"  setline({o.line});\"",
    "    out(\"  Object catchres{myc} = tryCatch({mainblock}, params, {cases.size},\"",
    "        ++ \"{finally});\")",
    "    out(\"  gc_frame_end(frame{myc});\")",
    "    o.register := \"catchres\" ++ myc",
    "}",
    "method compilematchcase(o) {",
    "    def myc = auto_count",
    "    auto_count := auto_count + 1",
    "    def cases = o.cases",
    "    if (o.cases.size > paramsUsed) then {",
    "        paramsUsed := o.cases.size",
    "    }",
    "    def matchee = compilenode(o.value)",
    "    out(\"  int frame{myc} = gc_frame_new();\")",
    "    out(\"  gc_frame_newslot({matchee});\")",
    "    var i := 0",
    "    def params = []",
    "    for (cases) do {c->",
    "        def e = compilenode(c)",
    "        out(\"  gc_frame_newslot({e});\")",
    "        params.push([i, e])",
    "        i := i + 1",
    "    }",
    "    var elsecase := \"NULL\"",
    "    if (false != o.elsecase) then {",
    "        elsecase := compilenode(o.elsecase)",
    "        out(\"  gc_frame_newslot({elsecase});\")",
    "    }",
    "    for (params) do {ie->",
    "        def idx = ie.first",
    "        def e = ie.second",
    "        out(\"  params[{idx}] = {e};\")",
    "    }",
    "    out(\"  Object matchres{myc} = matchCase({matchee}, params, {cases.size},\"",
    "        ++ \"{elsecase});\")",
    "    out(\"  gc_frame_end(frame{myc});\")",
    "    o.register := \"matchres\" ++ myc",
    "}",
    "method compileop(o) {",
    "    def myc = auto_count",
    "    auto_count := auto_count + 1",
    "    var right := compilenode(o.right)",
    "    out(\"  int op_slot_right_{myc} = gc_frame_newslot({right});\")",
    "    auto_count := auto_count + 1",
    "    if ((o.left.kind == \"identifier\") && {o.left.value == \"super\"}) then {",
    "        def evl = escapestring2(o.nameString)",
    "        out(\"  params[0] = {right};\")",
    "        out(\"  partcv[0] = 1;\")",
    "        out(\"  Object opresult{myc} = callmethod4(self, \"",
    "            ++ \"\\\"{evl}\\\", 1, partcv, params, ((flags >> 24) & 0xff) + 1,\"",
    "            ++ \"CFLAG_SELF);\")",
    "        o.register := \"opresult{myc}\"",
    "        return true",
    "    }",
    "    var left := compilenode(o.left)",
    "    out(\"  int op_slot_left_{myc} = gc_frame_newslot({left});\")",
    "    if ((o.value == \"+\") || (o.value == \"*\") || (o.value == \"/\") ||",
    "        (o.value == \"-\") || (o.value == \"%\")) then {",
    "        var rnm := \"sum\"",
    "        if (o.value == \"*\") then {",
    "            rnm := \"prod\"",
    "        }",
    "        if (o.value == \"/\") then {",
    "            rnm := \"quotient\"",
    "        }",
    "        if (o.value == \"-\") then {",
    "            rnm := \"diff\"",
    "        }",
    "        if (o.value == \"%\") then {",
    "            rnm := \"modulus\"",
    "        }",
    "        out(\"  params[0] = {right};\")",
    "        out(\"  partcv[0] = 1;\")",
    "        out(\"  Object {rnm}{auto_count} = callmethod({left}, \\\"{o.nameString}\\\", \"",
    "            ++ \"1, partcv, params);\")",
    "        o.register := rnm ++ auto_count",
    "        auto_count := auto_count + 1",
    "    } else {",
    "        out(\"  params[0] = {right};\")",
    "        out(\"  partcv[0] = 1;\")",
    "        out(\"  Object opresult{auto_count} = \"",
    "            ++ \"callmethod({left}, \\\"{o.nameString.quoted}\\\", 1, partcv, params);\")",
    "        o.register := \"opresult\" ++ auto_count",
    "        auto_count := auto_count + 1",
    "    }",
    "}",
    "method compileArguments(o, args) {",
    "    var i := 0",
    "    for (o.with) do { part ->",
    "        for (part.args) do { p ->",
    "            var r := compilenode(p)",
    "            args.push(r)",
    "            out(\"  gc_frame_newslot({r});\")",
    "        }",
    "    }",
    "    if (args.size > paramsUsed) then {",
    "        paramsUsed := args.size",
    "    }",
    "    if (o.with.size > partsUsed) then {",
    "        partsUsed := o.with.size",
    "    }",
    "    var nparts := o.with.size",
    "    if (false != o.generics) then {",
    "        if (partsUsed == o.with.size) then {",
    "            partsUsed := partsUsed + 1",
    "        }",
    "        if (paramsUsed < (args.size + o.generics.size)) then {",
    "            paramsUsed := paramsUsed + o.generics.size",
    "        }",
    "        nparts := nparts + 1",
    "        out(\"  partcv[{o.with.size}] = {o.generics.size};\")",
    "        i := args.size",
    "        o.generics.do {g->",
    "            out(\"  params[{i}] = {compilenode(g)};\")",
    "            i := i + 1",
    "        }",
    "        i := 0",
    "    }",
    "    nparts",
    "}",
    "method assembleArguments(o, args) {",
    "    var i := 0",
    "    args.do { arg ->",
    "        out \"  params[{i}] = {arg};\"",
    "        i := i + 1",
    "    }",
    "    for (o.with.indices) do { partnr ->",
    "        out \"  partcv[{partnr - 1}] = {o.with.at(partnr).args.size};\"",
    "    }",
    "}",
    "method compileSuperRequest(o, args, nparts) {",
    "    out \"// call case 1: super request\"",
    "    assembleArguments(o, args)",
    "    def escapedName = escapestring2(o.nameString)",
    "    out(\"  Object call{auto_count} = callmethod4(self, \\\"{escapedName}\\\", \"",
    "        ++ \"{nparts}, partcv, params, ((flags >> 24) & 0xff) + 1, \"",
    "        ++ \"CFLAG_SELF);\")",
    "}",
    "method compileOuterRequest(o, args, nparts) {",
    "    out \"// call case 2: outer request\"",
    "    def ot = \"outer{auto_count}\"",
    "    out(\"  Object {ot} = callmethod3(self, \\\"outer\\\", \"",
    "        ++ \"0, 0, NULL, ((flags >> 24) & 0xff));\")",
    "    assembleArguments(o, args)",
    "    def escapedName = escapestring2(o.nameString)",
    "    out(\"  Object call{auto_count} = callmethodflags({ot}, \\\"{escapedName}\\\", \"",
    "        ++ \"{nparts}, partcv, params, CFLAG_SELF);\")",
    "}",
    "method compileSelfOuterRequest(o, args, nparts) {",
    "    out \"// call case 3: self.outer request\"",
    "    out(\"  Object call{auto_count} = callmethod3(self, \\\"outer\\\", \"",
    "        ++ \"0, 0, NULL, ((flags >> 24) & 0xff));\")",
    "}",
    "method compileSelfRequest(o, args, nparts) {",
    "    out \"// call case 4: self request\"",
    "    assembleArguments(o, args)",
    "    def escapedName = escapestring2(o.nameString)",
    "    out(\"  Object call{auto_count} = callmethodflags(self, \\\"{escapedName}\\\", \"",
    "        ++ \"{nparts}, partcv, params, CFLAG_SELF);\")",
    "}",
    "method compilePreludeRequest(o, args, nparts) {",
    "    out \"// call case 5: prelude request\"",
    "    assembleArguments(o, args)",
    "    def escapedName = escapestring2(o.nameString)",
    "    out(\"  Object call{auto_count} = callmethodflags(prelude, \\\"{escapedName}\\\", \"",
    "        ++ \"{nparts}, partcv, params, CFLAG_SELF);\")",
    "}",
    "method compileOtherRequest(o, args, nparts, tailcall) {",
    "    out \"// call case 6: other requests\"",
    "    def target = compilenode(o.receiver)",
    "    assembleArguments(o, args)",
    "    def escapedName = escapestring2(o.nameString)",
    "    def callFlags = if (o.isSelfRequest) then { \"CFLAG_SELF\" } else { \"0\" }",
    "    if (tailcall) then {",
    "        out(\"  Object call{auto_count} = tailcall({target}, \\\"{escapedName}\\\",\"",
    "            ++ \" {nparts}, partcv, params, {callFlags});\")",
    "    } else {",
    "        out(\"  Object call{auto_count} = callmethodflags({target}, \\\"{escapedName}\\\",\"",
    "            ++ \" {nparts}, partcv, params, {callFlags});\")",
    "    }",
    "}",
    "method compilecall(o, tailcall) {",
    "    def myc = auto_count",
    "    auto_count := auto_count + 1",
    "    out(\"  int callframe{myc} = gc_frame_new();\")",
    "    var args := []",
    "    def nparts = compileArguments(o, args)",
    "    def receiver = o.receiver",
    "    if (receiver.isSuper) then {",
    "        compileSuperRequest(o, args, nparts)",
    "    } elseif { receiver.isOuter } then {",
    "        compileOuterRequest(o, args, nparts)",
    "    } elseif { receiver.isSelf && { o.nameString == \"outer\" } } then {",
    "        compileSelfOuterRequest(o, args, nparts)",
    "    } elseif { receiver.isSelf } then {",
    "        compileSelfRequest(o, args, nparts)",
    "    } elseif { receiver.isPrelude } then {",
    "        compilePreludeRequest(o, args, nparts)",
    "    } else {",
    "        compileOtherRequest(o, args, nparts, tailcall)",
    "    }",
    "    out(\"  gc_frame_end(callframe{myc});\")",
    "    o.register := \"call\" ++ auto_count",
    "    auto_count := auto_count + 1",
    "}",
    "",
    "method compiledialect(o) {",
    "    out(\"// Dialect \\\"{o.value}\\\"\")",
    "    var snm := \"\"",
    "    for (o.value) do {c->",
    "        if (c == \"/\") then {",
    "            snm := \"\"",
    "        } else {",
    "            snm := snm ++ c",
    "        }",
    "    }",
    "    var fn := escapestring2(o.value)",
    "    var modg := \"module_\" ++ escapeident(snm)",
    "    out(\"  if ({modg} == NULL)\")",
    "    if (imports.static.contains(o.value)) then {",
    "        out(\"    {modg} = {modg}_init();\")",
    "    } else {",
    "        out(\"    {modg} = dlmodule(\\\"{fn}\\\");\")",
    "    }",
    "    out(\"  Object *var_dialect = alloc_var();\")",
    "    out(\"  *var_dialect = {modg};\")",
    "    out(\"  prelude = {modg};\")",
    "    globals.push(\"Object {modg}_init();\")",
    "    globals.push(\"Object {modg};\")",
    "    auto_count := auto_count + 1",
    "    if (xmodule.currentDialect.hasAtEnd) then {",
    "        out(\"  partcv[0] = 1;\")",
    "        out(\"  params[0] = alloc_String(\\\"{escapestring(modname)}\\\");\")",
    "        out(\"  callmethodflags(prelude, \\\"atModuleStart\\\", \"",
    "            ++ \"1, partcv, params, CFLAG_SELF);\")",
    "    }",
    "    o.register := \"done\"",
    "}",
    "method compileimport(o) {",
    "    out(\"// Import of {o.path} as {o.nameString}\")",
    "    var snm := \"\"",
    "    for (o.path) do {c->",
    "        if (c == \"/\") then {",
    "            snm := \"\"",
    "        } else {",
    "            snm := snm ++ c",
    "        }",
    "    }",
    "    snm := escapeident(snm)",
    "    o.register := \"done\"",
    "    var nm := escapeident(o.nameString)",
    "    var modg := \"module_\" ++ snm",
    "    declaredvars.push(nm)",
    "    globals.push(\"Object {modg};\")",
    "    out(\"  if ({modg} == NULL)\")",
    "    if (xmodule.dynamicCModules.contains(o.path)) then {",
    "        out \"    {modg} = dlmodule(\\\"{snm}\\\");\"",
    "    } elseif { xmodule.builtInModules.contains(o.path) } then {",
    "        out \"    {modg} = {modg}_init();\"",
    "    } else {",
    "        out \"    {modg} = LOAD_MODULE({snm});\"",
    "        // for later transformation by the C preproecessor",
    "    }",
    "    out(\"  *var_{nm} = {modg};\")",
    "    if (compilationDepth == 1) then {",
    "//      declaredvars.push(nm);",
    "        def methodIdent = o.value",
    "        methodIdent.line := o.line",
    "        methodIdent.linePos := o.linePos",
    "        def accessor = (ast.methodNode.new([ast.signaturePart.partName(o.nameString)],",
    "                        [methodIdent], o.dtype))",
    "        accessor.line := o.line",
    "        accessor.linePos := o.linePos",
    "        if ( o.isConfidential ) then {",
    "            accessor.annotations.push(ast.identifierNode.new(\"confidential\", false))",
    "        }",
    "//        compilenode(accessor)",
    "    }",
    "    globals.push(\"Object {modg}_init();\")",
    "}",
    "method compilereturn(o) {",
    "    var reg",
    "    if ((o.value.kind == \"call\") &&",
    "        {util.extensions.contains(\"TailCall\")}) then {",
    "        // Tail-call support",
    "        compilecall(o.value, true)",
    "        reg := o.value.register",
    "    } else {",
    "        reg := compilenode(o.value)",
    "    }",
    "    if (inBlock) then {",
    "        out(\"  block_return(realself, {reg});\")",
    "    } else {",
    "        out(\"  return {reg};\")",
    "    }",
    "    o.register := \"undefined\"",
    "}",
    "method compilePrint(o) {",
    "    var args := []",
    "    for (o.with.first.args) do { prm ->",
    "        var r := compilenode(prm)",
    "        args.push(r)",
    "    }",
    "    var parami := 0",
    "    for (args) do { arg ->",
    "        out(\"  params[{parami}] = {arg};\")",
    "        parami := parami + 1",
    "    }",
    "    out(\"  Object call{auto_count} = gracelib_print(NULL, \"",
    "          ++ args.size ++ \",  params);\")",
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
    "    if (param1.value != \"c\") then { ",
    "        o.register := \"done\"",
    "        return",
    "    }",
    "    def param2 = o.with.second.args.first",
    "    if (param2.kind != \"string\") then {",
    "        errormessages.syntaxError \"the second argument to native()code must be a string literal\"",
    "            atLine(param2.line)",
    "    }",
    "    def codeString = param2.value",
    "    out \"   // start native code from line {o.line}\"",
    "    def reg = \"nat\" ++ auto_count",
    "    auto_count := auto_count + 1",
    "    out \"  Object {reg};\"",
    "    out \"  \\{ Object result = done;\"",
    "    out(codeString)",
    "    out \"  {reg} = result;\"",
    "    out \"  }\"",
    "    o.register := reg",
    "}",
    "",
    "method compilenum(o) {",
    "    var cnum := o.value",
    "    var havedot := false",
    "    for (cnum) do {c->",
    "        if (c == \".\") then {",
    "            havedot := true",
    "        }",
    "    }",
    "    out(\"  Object num{auto_count} = alloc_Float64({cnum});\")",
    "    o.register := \"num\" ++ auto_count",
    "    auto_count := auto_count + 1",
    "}",
    "method compilenode(o) {",
    "    compilationDepth := compilationDepth + 1",
    "    if (linenum != o.line) then {",
    "        linenum := o.line",
    "        out(\"// Begin line \" ++ linenum)",
    "        out(\"  setline({linenum});\")",
    "        out(\"  setmodule(modulename);\")",
    "        out(\"  setsource(originalSourceLines);\")",
    "    }",
    "    def oKind = o.kind",
    "    out \"// starting to compile {oKind} node (depth = {compilationDepth})\"",
    "    if (oKind == \"num\") then {",
    "        compilenum(o)",
    "    } elseif { oKind == \"string\" } then {",
    "        o.value := escapestring2(o.value)",
    "        out(\"  if (strlit{auto_count} == NULL) \\{\")",
    "        out(\"    strlit{auto_count} = alloc_String(\\\"{o.value}\\\");\")",
    "        out(\"    gc_root(strlit{auto_count});\")",
    "        out(\"  \\}\")",
    "        globals.push(\"static Object strlit{auto_count};\")",
    "        o.register := \"strlit\" ++ auto_count",
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
    "        if ((o.value == \"true\") || (o.value == \"false\")) then {",
    "            var val := 0",
    "            if (o.value == \"true\") then {",
    "                val := 1",
    "            }",
    "            out(\"  Object bool\" ++ auto_count ++ \" = alloc_Boolean({val});\")",
    "            o.register := \"bool\" ++ auto_count",
    "            auto_count := auto_count + 1",
    "        } else {",
    "            compileidentifier(o)",
    "        }",
    "    } elseif { oKind == \"defdec\" } then {",
    "        compiledefdec(o)",
    "    } elseif { oKind == \"vardec\" } then {",
    "        compilevardec(o)",
    "    } elseif { oKind == \"block\" } then {",
    "        compileblock(o)",
    "    } elseif { oKind == \"method\" } then {",
    "        compilemethod(o, \"self\", topLevelMethodPos)",
    "        topLevelMethodPos := topLevelMethodPos + 1",
    "    } elseif { oKind == \"array\" } then {",
    "        compilearray(o)",
    "    } elseif { oKind == \"bind\" } then {",
    "        compilebind(o)",
    "    } elseif { oKind == \"if\" } then {",
    "        compileif(o)",
    "    } elseif { oKind == \"matchcase\" } then {",
    "        compilematchcase(o)",
    "    } elseif { oKind == \"trycatch\" } then {",
    "        compiletrycatch(o)",
    "    } elseif { oKind == \"object\" } then {",
    "        compileobject(o, \"self\")",
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
    "                compilecall(o, false)",
    "            }",
    "        } else {",
    "            compilecall(o, false)",
    "        }",
    "    } elseif { oKind == \"op\" } then {",
    "        compileop(o)",
    "    }",
    "    out \"// compiled {oKind} node returning {o.register} (depth = {compilationDepth})\"",
    "    compilationDepth := compilationDepth - 1",
    "    o.register",
    "}",
    "",
    "method compileDynamicModule(fnBase, buildinfo) {",
    "    // compile a dynamicly-linkable version as .gso",
    "//    util.log 50 verbose \"producing dynamic module {modname}.gso\"",
    "    var dlbit := \"\"",
    "    var exportDynamicBit := \"\"",
    "    var cmd := \"ld -ldl -o /dev/null 2>/dev/null\"",
    "    if (io.system(cmd)) then {",
    "        dlbit := \"-ldl\"",
    "    }",
    "    cmd := \"ld -o /dev/null --export-dynamic -lc >/dev/null 2>&1\"",
    "    if (io.system(cmd)) then {",
    "        exportDynamicBit := \"-Wl,--export-dynamic\"",
    "    } else {",
    "        cmd := \"ld -o /dev/null -undefined dynamic_lookup -lc >/dev/null 2>&1\"",
    "        if (io.system(cmd)) then {",
    "            exportDynamicBit := \"-Wl,-undefined -Wl,dynamic_lookup\"",
    "        }",
    "    }",
    "    cmd := \"gcc -DDYNAMIC -g -I\\\"{util.gracelibPath}\\\" -I\\\"{sys.execPath}/../include\\\" \" ++",
    "        \"-I\\\"{sys.execPath}\\\" -I\\\"{buildinfo.includepath}\\\" -shared -o \\\"{fnBase}.gso\\\" \" ++",
    "        \"-fPIC {exportDynamicBit} \\\"{fnBase}.c\\\" \"",
    "    if ((io.system(cmd)).not) then {",
    "        io.error.write(\"Fatal error: Failed compiling dynamic module.\\n\")",
    "        io.error.write(\"The failing command was\\n{cmd}\\n\")",
    "        sys.exit(3)",
    "    }",
    "}",
    "method compileStaticModule(fnBase, buildinfo) {",
    "    // compile a statically-linkable version as .gcn",
    "//    util.log 50 verbose \"producing static module {modname}.gcn\"",
    "    def cmd = \"gcc -std=c99 -g -I\\\"{util.gracelibPath}\\\" -I\\\"{sys.execPath}/../include\\\" \" ++",
    "        \"-I\\\"{sys.execPath}\\\" -I\\\"{buildinfo.includepath}\\\" -o \\\"{fnBase}.gcn\\\" -c \\\"{fnBase}.c\\\"\"",
    "        // -c          => don't run linker",
    "        // -o <file>   => names the output file",
    "    ",
    "    if ((io.system(cmd)).not) then {",
    "        io.error.write(\"Fatal error: C compilation of {modname} failed.\\n\")",
    "        io.error.write(\"The failing command was\\n{cmd}\\n\")",
    "        sys.exit(3)",
    "    }",
    "}",
    "",
    "method linkExecutable(fnBase, buildinfo) {",
    "    util.log_verbose \"linking.\"",
    "    var dlbit := \"\"",
    "    var exportDynamicBit := \"\"",
    "    var cmd := \"ld -ldl -o /dev/null 2>/dev/null\"",
    "    if (io.system(cmd)) then {",
    "        dlbit := \"-ldl\"",
    "    }",
    "    cmd := \"ld -o /dev/null --export-dynamic -lc >/dev/null 2>&1\"",
    "    if (io.system(cmd)) then {",
    "        exportDynamicBit := \"-Wl,--export-dynamic\"",
    "    }",
    "    cmd := \"gcc -g -o \\\"{fnBase}\\\" -fPIC {exportDynamicBit} \\\"{fnBase}.gcn\\\" \"",
    "",
    "    if (io.exists \"{util.gracelibPath}/gracelib.o\") then {",
    "        cmd := cmd ++ \"\\\"{util.gracelibPath}/gracelib.o\\\" \"",
    "    } elseif { io.exists \"{buildinfo.objectpath}/gracelib.o\" } then {",
    "        cmd := cmd ++ \"\\\"{buildinfo.objectpath}/gracelib.o\\\" \"",
    "    } elseif { io.exists \"{util.outDir}/gracelib.o\" } then {",
    "        cmd := cmd ++ \"\\\"{util.outDir}/gracelib.o\\\" \"",
    "    } elseif { io.exists \"{util.execDir}/gracelib.o\" } then {",
    "        cmd := cmd ++ \"\\\"{util.execDir}/gracelib.o\\\" \"",
    "    } else {",
    "        io.error.write(\"Unable to link: can't find file gracelib.o\\n\")",
    "        sys.exit(3)",
    "    }",
    "//    util.log 50 verbose \"linking with {cmd}\"",
    "",
    "    for (imports.linkfiles) do { fn ->",
    "        cmd := \"{cmd} \\\"{fn}\\\"\"",
    "    }",
    "    cmd := \"{cmd} -lm {dlbit}\"",
    "    if ((io.system(cmd)).not) then {",
    "        io.error.write(\"Fatal Error: Failed linking executable for {modname}.\\n\")",
    "        io.error.write(\"The failing command was\\n{cmd}\\n\")",
    "        sys.exit(3)",
    "    }",
    "}",
    "",
    "method implementAliasesAndExclusionsFor(o) inheriting(e, superobj) {",
    "    // o is an object node, and e an inherits node.  e has already been",
    "    // compiled into register superobj.",
    "    ",
    "    if (e.aliases.isEmpty && e.exclusions.isEmpty) then { return }",
    "",
    "    errormessages.error(\"I'm sorry, aliases and exclusions are not yet supported \" ++",
    "        \"by the C code generator.\") atLine (e.line)",
    "}",
    "",
    "method compile(moduleObject, outfile, rm, bt, buildinfo) {",
    "    util.log_verbose \"generating C code.\"",
    "    var argv := sys.argv",
    "    var cmd",
    "    values := moduleObject.value",
    "    if (util.extensions.contains \"ExtendedLineups\") then {",
    "        bracketConstructor := \"alloc_BuiltinList()\"",
    "    }",
    "    var nummethods := 2 + countbindings(values)",
    "    for (values) do { v->",
    "        if (v.kind == \"vardec\") then {",
    "            nummethods := nummethods + 1",
    "        } elseif { v.kind == \"method\" } then {",
    "            nummethods := nummethods + 1",
    "            if (v.isFresh) then {",
    "                nummethods := nummethods + 1",
    "            }",
    "        }",
    "    }",
    "    modname := moduleObject.name",
    "    escmodname := escapeident(modname)",
    "    runmode := rm",
    "    buildtype := bt",
    "    outprint(\"#include <gracelib.h>\")",
    "    outprint(\"#include <stdlib.h>\")",
    "    outprint(\"#include <math.h>\")",
    "    outprint(\"#include <float.h>\")",
    "    if (!util.extensions.contains(\"NoMain\")) then {",
    "        outprint \"#ifndef __CYGWIN__\"",
    "        outprint \"#pragma weak main\"",
    "        outprint \"#endif\"",
    "    }",
    "    outprint(\"static char compilerRevision[] = \\\"{buildinfo.gitrevision}\\\";\")",
    "    outprint(\"static Object undefined;\")",
    "    outprint(\"extern Object done;\")",
    "    outprint(\"extern Object _prelude;\")",
    "    outprint(\"extern Object ObjectType;\")",
    "    outprint(\"extern Object String;\")",
    "    outprint(\"extern Object Number;\")",
    "    outprint(\"extern Object Boolean;\")",
    "    outprint(\"extern Object Dynamic;\")",
    "    outprint(\"extern Object Unknown;\")",
    "    outprint(\"extern Object Block;\")",
    "    outprint(\"extern Object Done;\")",
    "    outprint(\"extern Object Type;\")",
    "    outprint(\"extern Object GraceDefaultObject;\")",
    "    outprint(\"extern Object sourceObject;\")",
    "    outprint(\"static Object type_Object;\")",
    "    outprint(\"static Object type_String;\")",
    "    outprint(\"static Object type_Number;\")",
    "    outprint(\"static Object type_Boolean;\")",
    "    outprint(\"static Object type_Block;\")",
    "    outprint(\"static Object type_Done;\")",
    "    outprint(\"static Object type_Type;\")",
    "    outprint(\"static Object argv;\")",
    "    outprint(\"static Object emptyclosure;\")",
    "    outprint(\"static Object prelude;\")",
    "    outprint(\"static int isTailObject = 0;\")",
    "    outprint(\"static Object inheritingObject = NULL;\")",
    "    outprint(\"static const char modulename[] = \\\"{modname}\\\";\");",
    "    outprint(\"Object module_StandardPrelude_init();\");",
    "    outprint(\"static char *originalSourceLines[] = \\{\")",
    "    for (util.cLines) do {l->",
    "        outprint(\"  \\\"{l}\\\",\")",
    "    }",
    "    outprint(\"  NULL\\n\\};\")",
    "    topLevelTypes.put(\"String\", true)",
    "    topLevelTypes.put(\"Number\", true)",
    "    topLevelTypes.put(\"Boolean\", true)",
    "    topLevelTypes.put(\"Done\", true)",
    "    topLevelTypes.put(\"Block\", true)",
    "    out(\"Object module_{escmodname}_init() \\{\")",
    "    out(\"  int flags = 0;\")",
    "    out(\"  int frame = gc_frame_new();\")",
    "    out(\"  Object self = alloc_obj2({nummethods}, {nummethods});\")",
    "    out \"  self->class->definitionModule = modulename;\"",
    "    out \"  gc_root(self);\"",
    "    if (util.extensions.contains(\"NativePrelude\")) then {",
    "        out \"  prelude = grace_prelude();\"",
    "        out \"  adddatum2(self, grace_prelude(), 0);\"",
    "        out \"  Object ObjectType = alloc_ObjectType();\"",
    "    } else {",
    "        out(\"  prelude = module_StandardPrelude_init();\")",
    "        out(\"  adddatum2(self, prelude, 0);\")",
    "    }",
    "    out(\"  addmethod2(self, \\\"outer\\\", &grace_userobj_outer);\")",
    "    out(\"  setline(1);\")",
    "    out(\"  setmodule(modulename);\")",
    "    out(\"  setsource(originalSourceLines);\")",
    "    var modn := \"Module<{modname}>\"",
    "    out(\"  setclassname(self, \\\"{modn}\\\");\")",
    "    out(\"  Object *var_MatchFailed = alloc_var();\")",
    "    out(\"  *var_MatchFailed = alloc_MatchFailed();\")",
    "    out(\"  Object *var_noSuchValue = alloc_var();\")",
    "    out(\"  *var_noSuchValue = done;\")",
    "    out(\"  Object *var_done = alloc_var();\")",
    "    out(\"  *var_done = done;\")",
    "    out(\"  Object *var_Object = alloc_var();\")",
    "    out(\"  *var_Object = ObjectType;\")",
    "    out(\"  type_Object = ObjectType;\")",
    "    out(\"  Object *var_String = alloc_var();\")",
    "    out(\"  *var_String = String;\")",
    "    out(\"  type_String = String;\")",
    "    out(\"  Object *var_Block = alloc_var();\")",
    "    out(\"  *var_Block = Block;\")",
    "    out(\"  type_Block = Block;\")",
    "    out(\"  Object *var_Done = alloc_var();\")",
    "    out(\"  *var_Done = Done;\")",
    "    out(\"  type_Done = Done;\")",
    "    out(\"  Object *var_Number = alloc_var();\")",
    "    out(\"  *var_Number = Number;\")",
    "    out(\"  type_Number = Number;\")",
    "    out(\"  Object *var_Boolean = alloc_var();\")",
    "    out(\"  *var_Boolean = Boolean;\")",
    "    out(\"  type_Boolean = Boolean;\")",
    "    out(\"  Object *var_Dynamic = alloc_var();\")",
    "    out(\"  *var_Dynamic = Dynamic;\")",
    "    out(\"  Object *var_Unknown = alloc_var();\")",
    "    out(\"  *var_Unknown= Unknown;\")",
    "    out(\"  Object *var_Type = alloc_var();\")",
    "    out(\"  *var_Type = Type;\")",
    "    out(\"  type_Done = Type;\")",
    "    out(\"  Object *var__prelude = alloc_var();\")",
    "    out(\"  *var__prelude = grace_prelude();\")",
    "    out(\"  Object *var_prelude = alloc_var();\")",
    "    out(\"  *var_prelude = prelude;\")",
    "    out(\"  gc_root(*var_MatchFailed);\")",
    "    out(\"  emptyclosure = createclosure(0, \\\"empty\\\");\")",
    "    out(\"  gc_root(emptyclosure);\")",
    "    out(\"  struct StackFrameObject *stackframe = alloc_StackFrame({nummethods}, NULL);\")",
    "    out(\"  gc_root((Object)stackframe);\")",
    "    out(\"  pushstackframe(stackframe, \\\"module scope\\\");\")",
    "    out(\"  Object *selfslot = &(stackframe->slots[0]);\")",
    "    out(\"  *selfslot = self;\")",
    "    out(\"  setframeelementname(stackframe, 0, \\\"self\\\");\")",
    "    out(\"// end of preamble\")",
    "    var tmpo := output",
    "    output := []",
    "    definebindings(values, 1)",
    "    for (values) do { o ->",
    "        if (o.kind == \"method\") then {",
    "            compilenode(o)",
    "        }",
    "        if (o.kind == \"type\") then {",
    "            compilenode(o)",
    "            def typeid = escapeident(o.value)",
    "            out(\"type_{typeid} = *var_{typeid};\")",
    "        }",
    "    }",
    "    if (modname == \"StandardPrelude\") then {",
    "    // this has the same effect as \"inherits _prelude\" in the source",
    "        out(\"  self = setsuperobj(self, *var__prelude);\")",
    "        out(\"  *selfslot = self;\")",
    "    } else {",
    "        moduleObject.externalsDo { o -> compilenode(o) }",
    "        if (false != moduleObject.superclass) then {",
    "            def superobj = compilenode(moduleObject.superclass.value)",
    "            out(\"  self = setsuperobj(self, {superobj});\")",
    "            out(\"  *selfslot = self;\")",
    "            implementAliasesAndExclusionsFor(moduleObject) ",
    "                inheriting(moduleObject.superclass, superobj)",
    "        }",
    "    }",
    "    ",
    "    moduleObject.usedTraits.do { t -> ",
    "        errormessages.error(\"I'm sorry, trait usage is not yet supported by \" ++",
    "              \"the C code generator.\") atRange(t.line. t.linePos, t.linePos + 3)",
    "    }",
    "",
    "    moduleObject.value.do { o ->",
    "        if (o.isExternal) then {",
    "            if (modname == \"StandardPrelude\") then {",
    "                compilenode(o)",
    "            } else {",
    "                // do nothing, because it was already compiled above",
    "            }",
    "        } elseif { (o.kind != \"method\") && (o.kind != \"type\") } then {",
    "            compilenode(o)",
    "        }",
    "    }",
    "    if (xmodule.currentDialect.hasAtEnd) then {",
    "        out(\"  partcv[0] = 1;\")",
    "        out(\"  params[0] = self;\")",
    "        out(\"  callmethodflags(prelude, \\\"atModuleEnd\\\", \"",
    "            ++ \"1, partcv, params, CFLAG_SELF);\")",
    "    }",
    "    for (globals) do {e->",
    "        outprint(e)",
    "    }",
    "    var tmpo2 := output",
    "    output := tmpo",
    "    out(\"  Object params[{paramsUsed}];\")",
    "    out(\"  int partcv[{partsUsed}];\")",
    "    for (tmpo2) do { l->",
    "        out(l)",
    "    }",
    "    paramsUsed := 1",
    "    partsUsed := 1",
    "    out(\"  gc_frame_end(frame);\")",
    "    out(\"  return self;\")",
    "    out(\"}\")",
    "    if (!util.extensions.contains(\"NoMain\")) then {",
    "        out(\"int main(int argc, char **argv) \\{\")",
    "        out(\"  initprofiling();\")",
    "        if (util.extensions.contains(\"LogCallGraph\")) then {",
    "            var lcgfile := util.extensions.get(\"LogCallGraph\")",
    "            out(\"  enable_callgraph(\\\"{lcgfile}\\\");\")",
    "        }",
    "        out(\"  setCompilerModulePath(\\\"{io.realpath(sys.execPath)}\\\");\")",
    "        if(buildinfo.modulepath != \"\") then {",
    "            out(\"  setModulePath(\\\"{buildinfo.modulepath}\\\");\")",
    "        }",
    "        out(\"  gracelib_argv(argv);\")",
    "        out(\"  Object params[1];\")",
    "        out(\"  undefined = alloc_Undefined();\")",
    "        out(\"  done = alloc_done();\")",
    "        out(\"  Object tmp_argv = alloc_BuiltinList();\")",
    "        out(\"  gc_root(tmp_argv);\")",
    "        out(\"  int partcv_push[] = \\{1\\};\")",
    "        out(\"  int i; for (i=0; i<argc; i++) \\{\")",
    "        out(\"    params[0] = alloc_String(argv[i]);\")",
    "        out(\"    callmethodflags(tmp_argv, \\\"push(1)\\\", 1, partcv_push, params, CFLAG_SELF);\")",
    "        out(\"  \\}\")",
    "        out(\"  module_sys_init_argv(tmp_argv);\")",
    "        out(\"  module_{escmodname}_init();\")",
    "        out(\"  gracelib_stats();\")",
    "        out(\"  return 0;\")",
    "        out(\"}\")",
    "    }",
    "    for (topOutput) do { x ->",
    "        outprint(x)",
    "    }",
    "    for (output) do { x ->",
    "        outprint(x)",
    "    }",
    "",
    "    moduleObject.imports := imports.static ++ imports.other",
    "    xmodule.writeGctForModule(moduleObject)",
    "        ",
    "    outfile.close",
    "",
    "    if (runmode == \"make\") then {",
    "        util.log_verbose \"compiling C code.\"",
    "        def ofpn = outfile.pathname",
    "        var ix := ofpn.size",
    "        while { (ix > 1) && {ofpn.at(ix) != \".\"} } do { ix := ix - 1 }",
    "        def ofpnBase = if (ix > 0) then { ",
    "                ofpn.substringFrom 1 to (ix-1)",
    "            } else {",
    "                ofpn",
    "            }",
    "        compileStaticModule(ofpnBase, buildinfo)",
    "        compileDynamicModule(ofpnBase, buildinfo)",
    "        if (util.noexec.not) then { ",
    "            linkExecutable(ofpnBase, buildinfo)",
    "        }",
    "        util.log_verbose \"done.\"",
    "        if (buildtype == \"run\") then {",
    "            if (ofpnBase.first != \"/\") then {",
    "                cmd := \"./\" ++ ofpnBase",
    "            } else {",
    "                cmd := ofpnBase",
    "            }",
    "            def runExitCode = io.spawn(cmd, []).wait",
    "            if (runExitCode < 0) then {",
    "                io.error.write \"minigrace: Program {modname} exited with error {-runExitCode}.\\n\"",
    "                sys.exit(4)",
    "            }",
    "        }",
    "    }",
    "}" ];
}
if (typeof global !== "undefined")
  global.gracecode_genc = gracecode_genc;
if (typeof window !== "undefined")
  window.gracecode_genc = gracecode_genc;
