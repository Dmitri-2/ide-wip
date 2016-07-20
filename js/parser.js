"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_parser() {
  setModuleName("parser");
  this.definitionModule = "parser";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_parser_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_parser_outer0;
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
    setModuleName("parser");
    // io is a simple accessor - elide try ... catch
    return var_io;
  };
  func1.paramCounts = [0];
  this.methods["io"] = func1;
  func1.definitionLine = 2;
  func1.definitionModule = "parser";
  func1.debug = "import";
  func1.confidential = true;
  setModuleName("parser");
  setLineNumber(3);    // compilenode import
  // Import of ast as ast
  if (typeof gracecode_ast == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module ast'));
  var var_ast = do_import("ast", gracecode_ast);
  var func2 = function(argcv) {    // method ast
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    // ast is a simple accessor - elide try ... catch
    return var_ast;
  };
  func2.paramCounts = [0];
  this.methods["ast"] = func2;
  func2.definitionLine = 3;
  func2.definitionModule = "parser";
  func2.debug = "import";
  func2.confidential = true;
  setModuleName("parser");
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
    setModuleName("parser");
    // util is a simple accessor - elide try ... catch
    return var_util;
  };
  func3.paramCounts = [0];
  this.methods["util"] = func3;
  func3.definitionLine = 4;
  func3.definitionModule = "parser";
  func3.debug = "import";
  func3.confidential = true;
  setModuleName("parser");
  setLineNumber(5);    // compilenode import
  // Import of errormessages as errormessages
  if (typeof gracecode_errormessages == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module errormessages'));
  var var_errormessages = do_import("errormessages", gracecode_errormessages);
  var func4 = function(argcv) {    // method errormessages
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    // errormessages is a simple accessor - elide try ... catch
    return var_errormessages;
  };
  func4.paramCounts = [0];
  this.methods["errormessages"] = func4;
  func4.definitionLine = 5;
  func4.definitionModule = "parser";
  func4.debug = "import";
  func4.confidential = true;
  setModuleName("parser");
  setLineNumber(37);    // compilenode method
  var func5 = function(argcv) {    // method noteBlank
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    setLineNumber(38);    // compilenode member
    // call case 6: other requests
    var call8 = callmethodChecked(var_sym, "line", []);
    var diff10 = callmethodChecked(call8, "-(1)", [1], new GraceNum(1));
    var_blankLocation = diff10;
    return GraceDone;
  };
  func5.paramCounts = [0];
  this.methods["noteBlank"] = func5;
  func5.definitionLine = 37;
  func5.definitionModule = "parser";
  setLineNumber(43);    // compilenode method
  var func11 = function(argcv) {    // method next
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    var if12 = GraceDone;
    setLineNumber(47);    // compilenode member
    // call case 6: other requests
    var call15 = callmethodChecked(var_tokens, "size", []);
    var opresult17 = callmethodChecked(call15, ">(1)", [1], new GraceNum(0));
    if (Grace_isTrue(opresult17)) {
      setLineNumber(48);    // compilenode identifier
      var_lastToken = var_sym;
      setLineNumber(49);    // compilenode member
      // call case 6: other requests
      var call19 = callmethodChecked(var_lastToken, "line", []);
      var_lastLine = call19;
      setLineNumber(50);    // compilenode member
      // call case 6: other requests
      var call21 = callmethodChecked(var_lastToken, "indent", []);
      var_lastIndent = call21;
      setLineNumber(51);    // compilenode member
      // call case 6: other requests
      var call23 = callmethodChecked(var_tokens, "poll", []);
      var_sym = call23;
      var if24 = GraceDone;
      setLineNumber(52);    // compilenode identifier
      var opresult27 = callmethodChecked(var_lastLine, "+(1)", [1], new GraceNum(1));
      // call case 6: other requests
      var call30 = callmethodChecked(var_sym, "line", []);
      var opresult32 = callmethodChecked(call30, ">(1)", [1], opresult27);
      if (Grace_isTrue(opresult32)) {
        // call case 4: self request
        onSelf = true;
        var call34 = callmethodChecked(this, "noteBlank", []);
        if24 = call34;
      }
      setLineNumber(53);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call36 = callmethodChecked(this, "pushComments", []);
      setLineNumber(54);    // compilenode member
      // call case 6: other requests
      var call39 = callmethodChecked(var_sym, "line", []);
      // call case 6: other requests
      var call41 = callmethodChecked(var_sym, "linePos", []);
      // call case 6: other requests
      var call42 = callmethodChecked(var_util, "setPosition(2)", [2], call39, call41);
      if12 = call42;
    } else {
      setLineNumber(57);    // compilenode string
      var string44 = new GraceString("This is often caused by a missing '}'");
      setLineNumber(56);    // compilenode string
      var string46 = new GraceString("unexpectedly found the end of the input. ");
      var opresult48 = callmethodChecked(string46, "++(1)", [1], string44);
      setLineNumber(58);    // compilenode member
      // call case 6: other requests
      var call50 = callmethodChecked(var_sym, "line", []);
      // call case 6: other requests
      var call52 = callmethodChecked(var_sym, "linePos", []);
      // call case 6: other requests
      var call54 = callmethodChecked(var_sym, "linePos", []);
      // call case 6: other requests
      setLineNumber(56);    // compilenode identifier
      var call55 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], opresult48, call50, call52, call54);
      if12 = call55;
    }
    return if12;
  };
  func11.paramCounts = [0];
  this.methods["next"] = func11;
  func11.definitionLine = 43;
  func11.definitionModule = "parser";
  setLineNumber(63);    // compilenode method
  var func56 = function(argcv) {    // method findNextToken(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_tokenMatcher = arguments[curarg];
    curarg++;
    setModuleName("parser");
    var if57 = GraceDone;
    setLineNumber(67);    // compilenode identifier
    // call case 6: other requests
    var call59 = callmethodChecked(var_tokenMatcher, "apply(1)", [1], var_sym);
    if (Grace_isTrue(call59)) {
      setLineNumber(68);    // compilenode identifier
      return var_sym;
    }
    setLineNumber(70);    // compilenode identifier
    var var_nextTok = GraceFalse;
    setLineNumber(71);    // compilenode identifier
    var var_n = var_sym;
    setLineNumber(72);    // compilenode block
    var block61 = new GraceBlock(this, 72, 0);
    block61.real = function() {
      var block62 = new GraceBlock(this, 72, 0);
      block62.real = function() {
        // call case 6: other requests
        var call64 = callmethodChecked(var_lastToken, "indent", []);
        // call case 6: other requests
        var call67 = callmethodChecked(var_n, "indent", []);
        var opresult69 = callmethodChecked(call67, "\u2265(1)", [1], call64);
        return opresult69;
      };
      var block71 = new GraceBlock(this, 72, 0);
      block71.real = function() {
        var opresult74 = callmethodChecked(GraceFalse, "==(1)", [1], var_nextTok);
        return opresult74;
      };
      var opresult78 = callmethodChecked(GraceFalse, "\u2260(1)", [1], var_n);
      var opresult80 = callmethodChecked(opresult78, "&&(1)", [1], block71);
      var opresult82 = callmethodChecked(opresult80, "&&(1)", [1], block62);
      return opresult82;
    };
    var block83 = new GraceBlock(this, 72, 0);
    block83.real = function() {
      var if84 = GraceDone;
      setLineNumber(73);    // compilenode identifier
      // call case 6: other requests
      var call86 = callmethodChecked(var_tokenMatcher, "apply(1)", [1], var_n);
      if (Grace_isTrue(call86)) {
        setLineNumber(74);    // compilenode identifier
        var_nextTok = var_n;
        if84 = GraceDone;
      }
      setLineNumber(76);    // compilenode member
      // call case 6: other requests
      var call88 = callmethodChecked(var_n, "next", []);
      var_n = call88;
      return GraceDone;
    };
    // call case 5: prelude request
    var call89 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block61, block83);
    setLineNumber(78);    // compilenode identifier
    return var_nextTok;
  };
  func56.paramCounts = [1];
  this.methods["findNextToken(1)"] = func56;
  func56.definitionLine = 63;
  func56.definitionModule = "parser";
  setLineNumber(81);    // compilenode method
  var func90 = function(argcv) {    // method findNextTokenIndentedAt(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_tok = arguments[curarg];
    curarg++;
    setModuleName("parser");
    var if91 = GraceDone;
    setLineNumber(82);    // compilenode string
    var string92 = new GraceString("eof");
    // call case 6: other requests
    var call95 = callmethodChecked(var_sym, "kind", []);
    var opresult97 = callmethodChecked(call95, "==(1)", [1], string92);
    // call case 6: other requests
    var call100 = callmethodChecked(var_tok, "indent", []);
    // call case 6: other requests
    var call103 = callmethodChecked(var_sym, "indent", []);
    var opresult105 = callmethodChecked(call103, "\u2264(1)", [1], call100);
    // call case 6: other requests
    var call108 = callmethodChecked(var_tok, "line", []);
    // call case 6: other requests
    var call111 = callmethodChecked(var_sym, "line", []);
    var opresult113 = callmethodChecked(call111, ">(1)", [1], call108);
    var opresult115 = callmethodChecked(opresult113, "&&(1)", [1], opresult105);
    var opresult117 = callmethodChecked(opresult115, "||(1)", [1], opresult97);
    if (Grace_isTrue(opresult117)) {
      setLineNumber(83);    // compilenode identifier
      return var_sym;
    }
    setLineNumber(85);    // compilenode identifier
    var var_nextTok = GraceFalse;
    setLineNumber(86);    // compilenode identifier
    var var_n = var_sym;
    setLineNumber(87);    // compilenode block
    var block119 = new GraceBlock(this, 87, 0);
    block119.real = function() {
      var block120 = new GraceBlock(this, 87, 0);
      block120.real = function() {
        var opresult123 = callmethodChecked(GraceFalse, "==(1)", [1], var_nextTok);
        return opresult123;
      };
      var opresult127 = callmethodChecked(GraceFalse, "\u2260(1)", [1], var_n);
      var opresult129 = callmethodChecked(opresult127, "&&(1)", [1], block120);
      return opresult129;
    };
    var block130 = new GraceBlock(this, 87, 0);
    block130.real = function() {
      var if131 = GraceDone;
      setLineNumber(88);    // compilenode string
      var string132 = new GraceString("eof");
      // call case 6: other requests
      var call135 = callmethodChecked(var_sym, "kind", []);
      var opresult137 = callmethodChecked(call135, "==(1)", [1], string132);
      // call case 6: other requests
      var call140 = callmethodChecked(var_tok, "indent", []);
      // call case 6: other requests
      var call143 = callmethodChecked(var_n, "indent", []);
      var opresult145 = callmethodChecked(call143, "\u2264(1)", [1], call140);
      // call case 6: other requests
      var call148 = callmethodChecked(var_tok, "line", []);
      // call case 6: other requests
      var call151 = callmethodChecked(var_n, "line", []);
      var opresult153 = callmethodChecked(call151, ">(1)", [1], call148);
      var opresult155 = callmethodChecked(opresult153, "&&(1)", [1], opresult145);
      var opresult157 = callmethodChecked(opresult155, "||(1)", [1], opresult137);
      if (Grace_isTrue(opresult157)) {
        setLineNumber(89);    // compilenode identifier
        var_nextTok = var_n;
        if131 = GraceDone;
      }
      setLineNumber(91);    // compilenode member
      // call case 6: other requests
      var call159 = callmethodChecked(var_n, "next", []);
      var_n = call159;
      return GraceDone;
    };
    // call case 5: prelude request
    var call160 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block119, block130);
    setLineNumber(93);    // compilenode identifier
    return var_nextTok;
  };
  func90.paramCounts = [1];
  this.methods["findNextTokenIndentedAt(1)"] = func90;
  func90.definitionLine = 81;
  func90.definitionModule = "parser";
  setLineNumber(96);    // compilenode method
  var func161 = function(argcv) {    // method findNextValidToken(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_validFollowTokens = arguments[curarg];
    curarg++;
    setModuleName("parser");
    setLineNumber(98);    // compilenode string
    var string164 = new GraceString("dot");
    var string165 = new GraceString("comma");
    var string166 = new GraceString("colon");
    var string167 = new GraceString("rparen");
    setLineNumber(99);    // compilenode string
    var string168 = new GraceString("rbrace");
    var string169 = new GraceString("rsquare");
    var string170 = new GraceString("arrow");
    var string171 = new GraceString("bind");
    var array163 = new PrimitiveGraceList([string164, string165, string166, string167, string168, string169, string170, string171]);
    // call case 5: prelude request
    var call172 = callmethodChecked(var_prelude, "set(1)", [1], array163);
    var var_invalidTokens = call172;
    setLineNumber(100);    // compilenode identifier
    var var_validToken = var_sym;
    setLineNumber(101);    // compilenode block
    var block174 = new GraceBlock(this, 101, 0);
    block174.real = function() {
      var string175 = new GraceString("eof");
      // call case 6: other requests
      var call178 = callmethodChecked(var_validToken, "kind", []);
      var opresult180 = callmethodChecked(call178, "\u2260(1)", [1], string175);
      return opresult180;
    };
    var block181 = new GraceBlock(this, 101, 0);
    block181.real = function() {
      var if182 = GraceDone;
      setLineNumber(103);    // compilenode member
      // call case 6: other requests
      var call185 = callmethodChecked(var_validToken, "kind", []);
      // call case 6: other requests
      var call186 = callmethodChecked(var_validFollowTokens, "contains(1)", [1], call185);
      if (Grace_isTrue(call186)) {
        setLineNumber(104);    // compilenode identifier
        throw new ReturnException(var_validToken, returnTarget);
      }
      var if187 = GraceDone;
      setLineNumber(107);    // compilenode call
      // call case 6: other requests
      // call case 6: other requests
      var call191 = callmethodChecked(var_validToken, "kind", []);
      // call case 6: other requests
      var call192 = callmethodChecked(var_invalidTokens, "contains(1)", [1], call191);
      var call193 = callmethodChecked(call192, "prefix!", [0]);
      if (Grace_isTrue(call193)) {
        setLineNumber(108);    // compilenode identifier
        throw new ReturnException(var_validToken, returnTarget);
      }
      setLineNumber(111);    // compilenode member
      // call case 6: other requests
      var call195 = callmethodChecked(var_validToken, "next", []);
      var_validToken = call195;
      return GraceDone;
    };
    // call case 5: prelude request
    var call196 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block174, block181);
    setLineNumber(113);    // compilenode identifier
    return var_validToken;
  };
  func161.paramCounts = [1];
  this.methods["findNextValidToken(1)"] = func161;
  func161.definitionLine = 96;
  func161.definitionModule = "parser";
  setLineNumber(121);    // compilenode method
  var func197 = function(argcv) {    // method findClosingBrace(_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_token = arguments[curarg];
    curarg++;
    var var_inserted = arguments[curarg];
    curarg++;
    setModuleName("parser");
    setLineNumber(122);    // compilenode identifier
    var var_n = var_sym;
    var if198 = GraceDone;
    setLineNumber(123);    // compilenode identifier
    if (Grace_isTrue(var_inserted)) {
      if198 = new GraceNum(1);
    } else {
      if198 = new GraceNum(0);
    }
    var var_numOpening = if198;
    setLineNumber(124);    // compilenode num
    var var_numClosing = new GraceNum(0);
    setLineNumber(125);    // compilenode object
    var obj199 = Grace_allocObject(GraceObject, "result");
    obj199.definitionModule = "parser";
    obj199.definitionLine = 125;
    obj199.outer = this;
    var reader_parser_outer200 = function() {
      return this.outer;
    };
    obj199.methods["outer"] = reader_parser_outer200;
    var obj_init_199 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj199;
      obj199.data["found"] = undefined;
      var reader_parser_found201 = function() {
        return this.data["found"];
      };
      obj199.methods["found"] = reader_parser_found201;
      obj199.data["found"] = undefined;
      var writer_parser_found201 = function(argcv, o) {
        this.data["found"] = o;
        return GraceDone;
      };
      obj199.methods["found:=(1)"] = writer_parser_found201;
      obj199.mutable = true;
      obj199.data["tok"] = undefined;
      var reader_parser_tok202 = function() {
        return this.data["tok"];
      };
      obj199.methods["tok"] = reader_parser_tok202;
      obj199.data["tok"] = undefined;
      var writer_parser_tok202 = function(argcv, o) {
        this.data["tok"] = o;
        return GraceDone;
      };
      obj199.methods["tok:=(1)"] = writer_parser_tok202;
      obj199.mutable = true;
      superDepth = origSuperDepth;
    };
    obj_init_199.apply(obj199, []);
    var var_result = obj199;
    setLineNumber(130);    // compilenode block
    var block204 = new GraceBlock(this, 130, 0);
    block204.real = function() {
      // call case 6: other requests
      var call206 = callmethodChecked(var_token, "line", []);
      // call case 6: other requests
      var call209 = callmethodChecked(var_n, "line", []);
      var opresult211 = callmethodChecked(call209, "==(1)", [1], call206);
      var string213 = new GraceString("eof");
      // call case 6: other requests
      var call216 = callmethodChecked(var_n, "kind", []);
      var opresult218 = callmethodChecked(call216, "\u2260(1)", [1], string213);
      var opresult220 = callmethodChecked(opresult218, "&&(1)", [1], opresult211);
      return opresult220;
    };
    var block221 = new GraceBlock(this, 130, 0);
    block221.real = function() {
      var if222 = GraceDone;
      setLineNumber(131);    // compilenode string
      var string223 = new GraceString("lbrace");
      // call case 6: other requests
      var call226 = callmethodChecked(var_n, "kind", []);
      var opresult228 = callmethodChecked(call226, "==(1)", [1], string223);
      if (Grace_isTrue(opresult228)) {
        var opresult231 = callmethodChecked(var_numOpening, "+(1)", [1], new GraceNum(1));
        var_numOpening = opresult231;
        if222 = GraceDone;
      } else {
        var if232 = GraceDone;
        setLineNumber(132);    // compilenode string
        var string233 = new GraceString("rbrace");
        // call case 6: other requests
        var call236 = callmethodChecked(var_n, "kind", []);
        var opresult238 = callmethodChecked(call236, "==(1)", [1], string233);
        if (Grace_isTrue(opresult238)) {
          var opresult241 = callmethodChecked(var_numClosing, "+(1)", [1], new GraceNum(1));
          var_numClosing = opresult241;
          if232 = GraceDone;
        }
        if222 = if232;
      }
      setLineNumber(133);    // compilenode member
      // call case 6: other requests
      var call243 = callmethodChecked(var_n, "next", []);
      var_n = call243;
      return GraceDone;
    };
    // call case 5: prelude request
    var call244 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block204, block221);
    setLineNumber(136);    // compilenode block
    var block246 = new GraceBlock(this, 136, 0);
    block246.real = function() {
      // call case 6: other requests
      var call248 = callmethodChecked(var_token, "indent", []);
      // call case 6: other requests
      var call251 = callmethodChecked(var_n, "indent", []);
      var opresult253 = callmethodChecked(call251, ">(1)", [1], call248);
      var string255 = new GraceString("eof");
      // call case 6: other requests
      var call258 = callmethodChecked(var_n, "kind", []);
      var opresult260 = callmethodChecked(call258, "\u2260(1)", [1], string255);
      var opresult262 = callmethodChecked(opresult260, "&&(1)", [1], opresult253);
      return opresult262;
    };
    var block263 = new GraceBlock(this, 136, 0);
    block263.real = function() {
      var if264 = GraceDone;
      setLineNumber(137);    // compilenode string
      var string265 = new GraceString("lbrace");
      // call case 6: other requests
      var call268 = callmethodChecked(var_n, "kind", []);
      var opresult270 = callmethodChecked(call268, "==(1)", [1], string265);
      if (Grace_isTrue(opresult270)) {
        setLineNumber(138);    // compilenode identifier
        var opresult273 = callmethodChecked(var_numOpening, "+(1)", [1], new GraceNum(1));
        var_numOpening = opresult273;
        if264 = GraceDone;
      } else {
        var if274 = GraceDone;
        setLineNumber(139);    // compilenode string
        var string275 = new GraceString("rbrace");
        // call case 6: other requests
        var call278 = callmethodChecked(var_n, "kind", []);
        var opresult280 = callmethodChecked(call278, "==(1)", [1], string275);
        if (Grace_isTrue(opresult280)) {
          setLineNumber(140);    // compilenode identifier
          var opresult283 = callmethodChecked(var_numClosing, "+(1)", [1], new GraceNum(1));
          var_numClosing = opresult283;
          if274 = GraceDone;
        }
        if264 = if274;
      }
      setLineNumber(142);    // compilenode member
      // call case 6: other requests
      var call285 = callmethodChecked(var_n, "next", []);
      var_n = call285;
      return GraceDone;
    };
    // call case 5: prelude request
    var call286 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block246, block263);
    var if287 = GraceDone;
    setLineNumber(144);    // compilenode string
    var string288 = new GraceString("rbrace");
    // call case 6: other requests
    var call291 = callmethodChecked(var_n, "kind", []);
    var opresult293 = callmethodChecked(call291, "==(1)", [1], string288);
    if (Grace_isTrue(opresult293)) {
      setLineNumber(145);    // compilenode identifier
      // call case 6: other requests
      var call295 = callmethodChecked(var_result, "found:=(1)", [1], GraceTrue);
      setLineNumber(146);    // compilenode identifier
      // call case 6: other requests
      var call297 = callmethodChecked(var_result, "tok:=(1)", [1], var_n);
      if287 = call297;
    } else {
      var if298 = GraceDone;
      setLineNumber(147);    // compilenode identifier
      var opresult301 = callmethodChecked(var_numOpening, "==(1)", [1], var_numClosing);
      var string303 = new GraceString("rbrace");
      // call case 6: other requests
      // call case 6: other requests
      var call307 = callmethodChecked(var_n, "prev", []);
      var call308 = callmethodChecked(call307, "kind", []);
      var opresult310 = callmethodChecked(call308, "==(1)", [1], string303);
      var opresult312 = callmethodChecked(opresult310, "&&(1)", [1], opresult301);
      if (Grace_isTrue(opresult312)) {
        setLineNumber(149);    // compilenode identifier
        // call case 6: other requests
        var call314 = callmethodChecked(var_result, "found:=(1)", [1], GraceTrue);
        setLineNumber(150);    // compilenode member
        // call case 6: other requests
        var call317 = callmethodChecked(var_n, "prev", []);
        // call case 6: other requests
        var call318 = callmethodChecked(var_result, "tok:=(1)", [1], call317);
        if298 = call318;
      } else {
        setLineNumber(152);    // compilenode identifier
        // call case 6: other requests
        var call320 = callmethodChecked(var_result, "found:=(1)", [1], GraceFalse);
        setLineNumber(153);    // compilenode member
        // call case 6: other requests
        var call323 = callmethodChecked(var_n, "prev", []);
        // call case 6: other requests
        var call324 = callmethodChecked(var_result, "tok:=(1)", [1], call323);
        if298 = call324;
      }
      if287 = if298;
    }
    setLineNumber(155);    // compilenode identifier
    return var_result;
  };
  func197.paramCounts = [2];
  this.methods["findClosingBrace(2)"] = func197;
  func197.definitionLine = 121;
  func197.definitionModule = "parser";
  setLineNumber(159);    // compilenode method
  var func325 = function(argcv) {    // method accept(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_t = arguments[curarg];
    curarg++;
    setModuleName("parser");
    setLineNumber(162);    // compilenode member
    // call case 6: other requests
    var call328 = callmethodChecked(var_sym, "kind", []);
    var opresult330 = callmethodChecked(call328, "==(1)", [1], var_t);
    return opresult330;
  };
  func325.paramCounts = [1];
  this.methods["accept(1)"] = func325;
  func325.definitionLine = 159;
  func325.definitionModule = "parser";
  setLineNumber(165);    // compilenode method
  var func331 = function(argcv) {    // method acceptKeyword(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_kw = arguments[curarg];
    curarg++;
    setModuleName("parser");
    var if332 = GraceDone;
    setLineNumber(166);    // compilenode string
    var string333 = new GraceString("keyword");
    // call case 6: other requests
    var call336 = callmethodChecked(var_sym, "kind", []);
    var opresult338 = callmethodChecked(call336, "\u2260(1)", [1], string333);
    if (Grace_isTrue(opresult338)) {
      return GraceFalse;
    }
    setLineNumber(167);    // compilenode member
    // call case 6: other requests
    var call341 = callmethodChecked(var_sym, "value", []);
    var opresult343 = callmethodChecked(call341, "==(1)", [1], var_kw);
    return opresult343;
  };
  func331.paramCounts = [1];
  this.methods["acceptKeyword(1)"] = func331;
  func331.definitionLine = 165;
  func331.definitionModule = "parser";
  setLineNumber(170);    // compilenode method
  var func344 = function(argcv) {    // method acceptSameLine(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_t = arguments[curarg];
    curarg++;
    setModuleName("parser");
    setLineNumber(176);    // compilenode member
    // call case 6: other requests
    var call347 = callmethodChecked(var_sym, "indent", []);
    var opresult349 = callmethodChecked(call347, ">(1)", [1], var_lastIndent);
    // call case 6: other requests
    var call352 = callmethodChecked(var_sym, "line", []);
    var opresult355 = callmethodChecked(var_lastLine, "==(1)", [1], call352);
    var opresult357 = callmethodChecked(opresult355, "||(1)", [1], opresult349);
    setLineNumber(175);    // compilenode member
    // call case 6: other requests
    var call361 = callmethodChecked(var_sym, "kind", []);
    var opresult363 = callmethodChecked(call361, "==(1)", [1], var_t);
    var opresult365 = callmethodChecked(opresult363, "&&(1)", [1], opresult357);
    return opresult365;
  };
  func344.paramCounts = [1];
  this.methods["acceptSameLine(1)"] = func344;
  func344.definitionLine = 170;
  func344.definitionModule = "parser";
  setLineNumber(178);    // compilenode method
  var func366 = function(argcv) {    // method acceptWithoutSpaces(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_t = arguments[curarg];
    curarg++;
    setModuleName("parser");
    setLineNumber(183);    // compilenode member
    // call case 6: other requests
    var call368 = callmethodChecked(var_lastToken, "size", []);
    // call case 6: other requests
    var call371 = callmethodChecked(var_lastToken, "linePos", []);
    var opresult373 = callmethodChecked(call371, "+(1)", [1], call368);
    // call case 6: other requests
    var call376 = callmethodChecked(var_sym, "linePos", []);
    var opresult378 = callmethodChecked(call376, "==(1)", [1], opresult373);
    // call case 6: other requests
    var call381 = callmethodChecked(var_sym, "line", []);
    var opresult384 = callmethodChecked(var_lastLine, "==(1)", [1], call381);
    setLineNumber(182);    // compilenode member
    // call case 6: other requests
    var call388 = callmethodChecked(var_sym, "kind", []);
    var opresult390 = callmethodChecked(call388, "==(1)", [1], var_t);
    var opresult392 = callmethodChecked(opresult390, "&&(1)", [1], opresult384);
    var opresult394 = callmethodChecked(opresult392, "&&(1)", [1], opresult378);
    return opresult394;
  };
  func366.paramCounts = [1];
  this.methods["acceptWithoutSpaces(1)"] = func366;
  func366.definitionLine = 178;
  func366.definitionModule = "parser";
  setLineNumber(185);    // compilenode method
  var func395 = function(argcv) {    // method acceptAfterSpaces(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_t = arguments[curarg];
    curarg++;
    setModuleName("parser");
    var if396 = GraceDone;
    setLineNumber(189);    // compilenode member
    // call case 6: other requests
    var call399 = callmethodChecked(var_sym, "kind", []);
    var opresult401 = callmethodChecked(call399, "\u2260(1)", [1], var_t);
    if (Grace_isTrue(opresult401)) {
      return GraceFalse;
    }
    var if402 = GraceDone;
    setLineNumber(190);    // compilenode member
    // call case 6: other requests
    var call404 = callmethodChecked(var_sym, "line", []);
    var opresult407 = callmethodChecked(var_lastLine, "==(1)", [1], call404);
    if (Grace_isTrue(opresult407)) {
      setLineNumber(191);    // compilenode member
      // call case 6: other requests
      var call409 = callmethodChecked(var_lastToken, "size", []);
      // call case 6: other requests
      var call412 = callmethodChecked(var_lastToken, "linePos", []);
      var opresult414 = callmethodChecked(call412, "+(1)", [1], call409);
      // call case 6: other requests
      var call417 = callmethodChecked(var_sym, "linePos", []);
      var opresult419 = callmethodChecked(call417, "\u2260(1)", [1], opresult414);
      return opresult419;
    }
    setLineNumber(193);    // compilenode member
    // call case 6: other requests
    var call422 = callmethodChecked(var_sym, "indent", []);
    var opresult424 = callmethodChecked(call422, "+(1)", [1], new GraceNum(1));
    // call case 6: other requests
    var call427 = callmethodChecked(var_sym, "linePos", []);
    var opresult429 = callmethodChecked(call427, "==(1)", [1], opresult424);
    return opresult429;
  };
  func395.paramCounts = [1];
  this.methods["acceptAfterSpaces(1)"] = func395;
  func395.definitionLine = 185;
  func395.definitionModule = "parser";
  setLineNumber(195);    // compilenode method
  var func430 = function(argcv) {    // method accept(_)onLineOf(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_t = arguments[curarg];
    curarg++;
    var var_other = arguments[curarg];
    curarg++;
    setModuleName("parser");
    setLineNumber(200);    // compilenode member
    // call case 6: other requests
    var call432 = callmethodChecked(var_other, "indent", []);
    // call case 6: other requests
    var call435 = callmethodChecked(var_sym, "indent", []);
    var opresult437 = callmethodChecked(call435, ">(1)", [1], call432);
    setLineNumber(199);    // compilenode member
    // call case 6: other requests
    var call440 = callmethodChecked(var_sym, "line", []);
    // call case 6: other requests
    var call443 = callmethodChecked(var_other, "line", []);
    var opresult445 = callmethodChecked(call443, "==(1)", [1], call440);
    var opresult447 = callmethodChecked(opresult445, "||(1)", [1], opresult437);
    // call case 6: other requests
    var call451 = callmethodChecked(var_sym, "kind", []);
    var opresult453 = callmethodChecked(call451, "==(1)", [1], var_t);
    var opresult455 = callmethodChecked(opresult453, "&&(1)", [1], opresult447);
    return opresult455;
  };
  func430.paramCounts = [1, 1];
  this.methods["accept(1)onLineOf(1)"] = func430;
  func430.definitionLine = 195;
  func430.definitionModule = "parser";
  setLineNumber(202);    // compilenode method
  var func456 = function(argcv) {    // method acceptAfterSpaces(_)onLineOf(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_t = arguments[curarg];
    curarg++;
    var var_other = arguments[curarg];
    curarg++;
    setModuleName("parser");
    var if457 = GraceDone;
    setLineNumber(207);    // compilenode member
    // call case 6: other requests
    var call460 = callmethodChecked(var_sym, "kind", []);
    var opresult462 = callmethodChecked(call460, "\u2260(1)", [1], var_t);
    if (Grace_isTrue(opresult462)) {
      return GraceFalse;
    }
    var if463 = GraceDone;
    setLineNumber(208);    // compilenode member
    // call case 6: other requests
    var call465 = callmethodChecked(var_other, "line", []);
    // call case 6: other requests
    var call468 = callmethodChecked(var_sym, "line", []);
    var opresult470 = callmethodChecked(call468, "==(1)", [1], call465);
    if (Grace_isTrue(opresult470)) {
      setLineNumber(209);    // compilenode member
      // call case 6: other requests
      var call472 = callmethodChecked(var_lastToken, "size", []);
      // call case 6: other requests
      var call475 = callmethodChecked(var_lastToken, "linePos", []);
      var opresult477 = callmethodChecked(call475, "+(1)", [1], call472);
      // call case 6: other requests
      var call480 = callmethodChecked(var_sym, "linePos", []);
      var opresult482 = callmethodChecked(call480, "\u2260(1)", [1], opresult477);
      return opresult482;
    } else {
      setLineNumber(211);    // compilenode member
      // call case 6: other requests
      var call485 = callmethodChecked(var_sym, "indent", []);
      var opresult487 = callmethodChecked(call485, "+(1)", [1], new GraceNum(1));
      // call case 6: other requests
      var call490 = callmethodChecked(var_sym, "linePos", []);
      var opresult492 = callmethodChecked(call490, "==(1)", [1], opresult487);
      return opresult492;
    }
    return if463;
  };
  func456.paramCounts = [1, 1];
  this.methods["acceptAfterSpaces(1)onLineOf(1)"] = func456;
  func456.definitionLine = 202;
  func456.definitionModule = "parser";
  setLineNumber(214);    // compilenode method
  var func493 = function(argcv) {    // method accept(_)onLineOfLastOr(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_t = arguments[curarg];
    curarg++;
    var var_other = arguments[curarg];
    curarg++;
    setModuleName("parser");
    setLineNumber(218);    // compilenode member
    // call case 6: other requests
    var call495 = callmethodChecked(var_sym, "line", []);
    // call case 6: other requests
    var call498 = callmethodChecked(var_lastToken, "line", []);
    var opresult500 = callmethodChecked(call498, "==(1)", [1], call495);
    // call case 6: other requests
    var call503 = callmethodChecked(var_other, "indent", []);
    // call case 6: other requests
    var call506 = callmethodChecked(var_sym, "indent", []);
    var opresult508 = callmethodChecked(call506, ">(1)", [1], call503);
    setLineNumber(217);    // compilenode member
    // call case 6: other requests
    var call511 = callmethodChecked(var_sym, "line", []);
    // call case 6: other requests
    var call514 = callmethodChecked(var_other, "line", []);
    var opresult516 = callmethodChecked(call514, "==(1)", [1], call511);
    var opresult518 = callmethodChecked(opresult516, "||(1)", [1], opresult508);
    var opresult520 = callmethodChecked(opresult518, "||(1)", [1], opresult500);
    // call case 6: other requests
    var call524 = callmethodChecked(var_sym, "kind", []);
    var opresult526 = callmethodChecked(call524, "==(1)", [1], var_t);
    var opresult528 = callmethodChecked(opresult526, "&&(1)", [1], opresult520);
    return opresult528;
  };
  func493.paramCounts = [1, 1];
  this.methods["accept(1)onLineOfLastOr(1)"] = func493;
  func493.definitionLine = 214;
  func493.definitionModule = "parser";
  setLineNumber(220);    // compilenode method
  var func529 = function(argcv) {    // method acceptArgumentOnLineOf(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_tok = arguments[curarg];
    curarg++;
    setModuleName("parser");
    var if530 = GraceDone;
    setLineNumber(222);    // compilenode string
    var string532 = new GraceString("string");
    // call case 4: self request
    onSelf = true;
    var call533 = callmethodChecked(this, "accept(1)onLineOf(1)", [1, 1], string532, var_tok);
    if (Grace_isTrue(call533)) {
      return GraceTrue;
    }
    var if534 = GraceDone;
    setLineNumber(223);    // compilenode string
    var string536 = new GraceString("num");
    // call case 4: self request
    onSelf = true;
    var call537 = callmethodChecked(this, "accept(1)onLineOf(1)", [1, 1], string536, var_tok);
    if (Grace_isTrue(call537)) {
      return GraceTrue;
    }
    var if538 = GraceDone;
    setLineNumber(224);    // compilenode string
    var string540 = new GraceString("lbrace");
    // call case 4: self request
    onSelf = true;
    var call541 = callmethodChecked(this, "accept(1)onLineOf(1)", [1, 1], string540, var_tok);
    if (Grace_isTrue(call541)) {
      return GraceTrue;
    }
    var if542 = GraceDone;
    setLineNumber(225);    // compilenode string
    var string544 = new GraceString("lsquare");
    // call case 4: self request
    onSelf = true;
    var call545 = callmethodChecked(this, "acceptAfterSpaces(1)onLineOf(1)", [1, 1], string544, var_tok);
    if (Grace_isTrue(call545)) {
      return GraceTrue;
    }
    var if546 = GraceDone;
    setLineNumber(226);    // compilenode string
    var string548 = new GraceString("identifier");
    // call case 4: self request
    onSelf = true;
    var call549 = callmethodChecked(this, "accept(1)onLineOf(1)", [1, 1], string548, var_tok);
    if (Grace_isTrue(call549)) {
      setLineNumber(227);    // compilenode string
      var string550 = new GraceString("false");
      // call case 6: other requests
      var call553 = callmethodChecked(var_sym, "value", []);
      var opresult555 = callmethodChecked(call553, "==(1)", [1], string550);
      var string557 = new GraceString("true");
      // call case 6: other requests
      var call560 = callmethodChecked(var_sym, "value", []);
      var opresult562 = callmethodChecked(call560, "==(1)", [1], string557);
      var opresult564 = callmethodChecked(opresult562, "||(1)", [1], opresult555);
      return opresult564;
    }
    setLineNumber(229);    // compilenode identifier
    return GraceFalse;
  };
  func529.paramCounts = [1];
  this.methods["acceptArgumentOnLineOf(1)"] = func529;
  func529.definitionLine = 220;
  func529.definitionModule = "parser";
  setLineNumber(231);    // compilenode method
  var func565 = function(argcv) {    // method tokenOnSameLine
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    setLineNumber(233);    // compilenode member
    // call case 6: other requests
    var call568 = callmethodChecked(var_sym, "indent", []);
    var opresult570 = callmethodChecked(call568, ">(1)", [1], var_lastIndent);
    // call case 6: other requests
    var call573 = callmethodChecked(var_sym, "line", []);
    var opresult576 = callmethodChecked(var_lastLine, "==(1)", [1], call573);
    var opresult578 = callmethodChecked(opresult576, "||(1)", [1], opresult570);
    return opresult578;
  };
  func565.paramCounts = [0];
  this.methods["tokenOnSameLine"] = func565;
  func565.definitionLine = 231;
  func565.definitionModule = "parser";
  setLineNumber(235);    // compilenode method
  var func579 = function(argcv) {    // method didConsume(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_aParsingBlock = arguments[curarg];
    curarg++;
    setModuleName("parser");
    setLineNumber(237);    // compilenode member
    // call case 6: other requests
    var call581 = callmethodChecked(var_tokens, "size", []);
    var var_sz = call581;
    setLineNumber(238);    // compilenode member
    // call case 6: other requests
    var call583 = callmethodChecked(var_aParsingBlock, "apply", []);
    setLineNumber(239);    // compilenode member
    // call case 6: other requests
    var call586 = callmethodChecked(var_tokens, "size", []);
    var opresult588 = callmethodChecked(call586, "\u2260(1)", [1], var_sz);
    return opresult588;
  };
  func579.paramCounts = [1];
  this.methods["didConsume(1)"] = func579;
  func579.definitionLine = 235;
  func579.definitionModule = "parser";
  setLineNumber(241);    // compilenode method
  var func589 = function(argcv) {    // method ifConsume(_)then(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_ablock = arguments[curarg];
    curarg++;
    var var_tblock = arguments[curarg];
    curarg++;
    setModuleName("parser");
    setLineNumber(243);    // compilenode member
    // call case 6: other requests
    var call591 = callmethodChecked(var_tokens, "size", []);
    var var_sz = call591;
    setLineNumber(244);    // compilenode member
    // call case 6: other requests
    var call593 = callmethodChecked(var_ablock, "apply", []);
    var if594 = GraceDone;
    setLineNumber(245);    // compilenode member
    // call case 6: other requests
    var call597 = callmethodChecked(var_tokens, "size", []);
    var opresult599 = callmethodChecked(call597, "\u2260(1)", [1], var_sz);
    if (Grace_isTrue(opresult599)) {
      setLineNumber(246);    // compilenode member
      // call case 6: other requests
      var call601 = callmethodChecked(var_tblock, "apply", []);
      if594 = call601;
    }
    return if594;
  };
  func589.paramCounts = [1, 1];
  this.methods["ifConsume(1)then(1)"] = func589;
  func589.definitionLine = 241;
  func589.definitionModule = "parser";
  setLineNumber(251);    // compilenode method
  var func602 = function(argcv) {    // method pushnum
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    setLineNumber(252);    // compilenode member
    // call case 6: other requests
    var call605 = callmethodChecked(var_sym, "value", []);
    // call case 6: other requests
    // call case 6: other requests
    var call607 = callmethodChecked(var_ast, "numNode", []);
    var call608 = callmethodChecked(call607, "new(1)", [1], call605);
    var var_o = call608;
    setLineNumber(253);    // compilenode identifier
    // call case 6: other requests
    var call610 = callmethodChecked(var_values, "push(1)", [1], var_o);
    setLineNumber(254);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call612 = callmethodChecked(this, "next", []);
    return call612;
  };
  func602.paramCounts = [0];
  this.methods["pushnum"] = func602;
  func602.definitionLine = 251;
  func602.definitionModule = "parser";
  setLineNumber(258);    // compilenode method
  var func613 = function(argcv) {    // method pushstring
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    setLineNumber(259);    // compilenode member
    // call case 6: other requests
    var call616 = callmethodChecked(var_sym, "value", []);
    // call case 6: other requests
    // call case 6: other requests
    var call618 = callmethodChecked(var_ast, "stringNode", []);
    var call619 = callmethodChecked(call618, "new(1)", [1], call616);
    var var_o = call619;
    setLineNumber(260);    // compilenode identifier
    // call case 6: other requests
    var call621 = callmethodChecked(var_values, "push(1)", [1], var_o);
    setLineNumber(261);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call623 = callmethodChecked(this, "next", []);
    return call623;
  };
  func613.paramCounts = [0];
  this.methods["pushstring"] = func613;
  func613.definitionLine = 258;
  func613.definitionModule = "parser";
  setLineNumber(266);    // compilenode method
  var func624 = function(argcv) {    // method pushidentifier
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    setLineNumber(267);    // compilenode member
    // call case 6: other requests
    var call627 = callmethodChecked(var_sym, "line", []);
    // call case 6: other requests
    var call629 = callmethodChecked(var_sym, "linePos", []);
    // call case 6: other requests
    var call630 = callmethodChecked(var_util, "setPosition(2)", [2], call627, call629);
    setLineNumber(268);    // compilenode member
    // call case 6: other requests
    var call633 = callmethodChecked(var_sym, "value", []);
    // call case 6: other requests
    // call case 6: other requests
    var call635 = callmethodChecked(var_ast, "identifierNode", []);
    var call636 = callmethodChecked(call635, "new(2)", [2], call633, GraceFalse);
    var var_o = call636;
    var if637 = GraceDone;
    setLineNumber(269);    // compilenode string
    var string638 = new GraceString("_");
    // call case 6: other requests
    var call641 = callmethodChecked(var_o, "value", []);
    var opresult643 = callmethodChecked(call641, "==(1)", [1], string638);
    if (Grace_isTrue(opresult643)) {
      setLineNumber(270);    // compilenode string
      var string646 = new GraceString("__");
      var opresult648 = callmethodChecked(string646, "++(1)", [1], var_auto__95__count);
      // call case 6: other requests
      var call649 = callmethodChecked(var_o, "value:=(1)", [1], opresult648);
      setLineNumber(271);    // compilenode identifier
      // call case 6: other requests
      var call651 = callmethodChecked(var_o, "wildcard:=(1)", [1], GraceTrue);
      setLineNumber(272);    // compilenode identifier
      var opresult654 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
      var_auto__95__count = opresult654;
      if637 = GraceDone;
    }
    setLineNumber(274);    // compilenode identifier
    // call case 6: other requests
    var call656 = callmethodChecked(var_values, "push(1)", [1], var_o);
    setLineNumber(275);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call658 = callmethodChecked(this, "next", []);
    return call658;
  };
  func624.paramCounts = [0];
  this.methods["pushidentifier"] = func624;
  func624.definitionLine = 266;
  func624.definitionModule = "parser";
  setLineNumber(278);    // compilenode method
  var func659 = function(argcv) {    // method checkAnnotation(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_ann = arguments[curarg];
    curarg++;
    setModuleName("parser");
    var if660 = GraceDone;
    setLineNumber(279);    // compilenode string
    var string661 = new GraceString("call");
    // call case 6: other requests
    var call664 = callmethodChecked(var_ann, "kind", []);
    var opresult666 = callmethodChecked(call664, "==(1)", [1], string661);
    if (Grace_isTrue(opresult666)) {
      setLineNumber(280);    // compilenode member
      // call case 6: other requests
      var call669 = callmethodChecked(var_ann, "with", []);
      var block670 = new GraceBlock(this, 280, 1);
      setLineNumber(1);    // compilenode identifier
      block670.real = function(var_p) {
        setLineNumber(281);    // compilenode member
        // call case 6: other requests
        var call673 = callmethodChecked(var_p, "args", []);
        var block674 = new GraceBlock(this, 281, 1);
        setLineNumber(1);    // compilenode identifier
        block674.real = function(var_a) {
          var if675 = GraceDone;
          setLineNumber(282);    // compilenode block
          var block676 = new GraceBlock(this, 282, 0);
          block676.real = function() {
            // call case 6: other requests
            var call678 = callmethodChecked(var_a, "dtype", []);
            var opresult681 = callmethodChecked(GraceFalse, "\u2260(1)", [1], call678);
            return opresult681;
          };
          var string683 = new GraceString("identifier");
          // call case 6: other requests
          var call686 = callmethodChecked(var_a, "kind", []);
          var opresult688 = callmethodChecked(call686, "==(1)", [1], string683);
          var opresult690 = callmethodChecked(opresult688, "&&(1)", [1], block676);
          if (Grace_isTrue(opresult690)) {
            setLineNumber(283);    // compilenode identifier
            var var_tok = var_sym;
            setLineNumber(285);    // compilenode block
            var block692 = new GraceBlock(this, 285, 0);
            block692.real = function() {
              var string693 = new GraceString(":");
              // call case 6: other requests
              var call696 = callmethodChecked(var_tok, "value", []);
              var opresult698 = callmethodChecked(call696, "\u2260(1)", [1], string693);
              return opresult698;
            };
            var block699 = new GraceBlock(this, 285, 0);
            block699.real = function() {
              // call case 6: other requests
              var call701 = callmethodChecked(var_tok, "prev", []);
              var_tok = call701;
              return GraceDone;
            };
            // call case 5: prelude request
            var call702 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block692, block699);
            setLineNumber(286);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call705 = callmethodChecked(var_errormessages, "suggestion", []);
            var call706 = callmethodChecked(call705, "new", []);
            var var_suggestion = call706;
            setLineNumber(287);    // compilenode member
            // call case 6: other requests
            var call709 = callmethodChecked(var_tok, "next", []);
            // call case 6: other requests
            var call710 = callmethodChecked(var_suggestion, "deleteTokenRange(2)leading(1)trailing(1)", [2, 1, 1], var_tok, call709, GraceTrue, GraceFalse);
            setLineNumber(288);    // compilenode string
            var string712 = new GraceString("an argument to an annotation cannot have a type.");
            setLineNumber(289);    // compilenode member
            // call case 6: other requests
            var call714 = callmethodChecked(var_tok, "line", []);
            // call case 6: other requests
            var call716 = callmethodChecked(var_tok, "linePos", []);
            // call case 6: other requests
            // call case 6: other requests
            var call720 = callmethodChecked(var_tok, "next", []);
            var call721 = callmethodChecked(call720, "size", []);
            // call case 6: other requests
            // call case 6: other requests
            var call725 = callmethodChecked(var_tok, "next", []);
            var call726 = callmethodChecked(call725, "linePos", []);
            var opresult728 = callmethodChecked(call726, "+(1)", [1], call721);
            var diff730 = callmethodChecked(opresult728, "-(1)", [1], new GraceNum(1));
            // call case 6: other requests
            setLineNumber(288);    // compilenode identifier
            var call731 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)withSuggestion(1)", [1, 3, 1], string712, call714, call716, diff730, var_suggestion);
            if675 = call731;
          }
          return if675;
        };
        // call case 5: prelude request
        var call732 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call673, block674);
        return call732;
      };
      // call case 5: prelude request
      var call733 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call669, block670);
      if660 = call733;
    }
    setLineNumber(294);    // compilenode identifier
    return var_ann;
  };
  func659.paramCounts = [1];
  this.methods["checkAnnotation(1)"] = func659;
  func659.definitionLine = 278;
  func659.definitionModule = "parser";
  setLineNumber(296);    // compilenode method
  var func734 = function(argcv) {    // method doannotation
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    var if735 = GraceDone;
    setLineNumber(297);    // compilenode member
    // call case 6: other requests
    var string738 = new GraceString("is");
    // call case 4: self request
    onSelf = true;
    var call739 = callmethodChecked(this, "acceptKeyword(1)", [1], string738);
    var call740 = callmethodChecked(call739, "not", []);
    if (Grace_isTrue(call740)) {
      setLineNumber(298);    // compilenode identifier
      return GraceFalse;
    }
    setLineNumber(300);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call742 = callmethodChecked(this, "next", []);
    setLineNumber(301);    // compilenode array
    var array743 = new PrimitiveGraceList([]);
    var var_anns = array743;
    var if744 = GraceDone;
    setLineNumber(302);    // compilenode member
    // call case 6: other requests
    var block747 = new GraceBlock(this, 302, 0);
    block747.real = function() {
      // call case 4: self request
      onSelf = true;
      var call749 = callmethodChecked(this, "expression(1)", [1], var_noBlocks);
      return call749;
    };
    // call case 4: self request
    onSelf = true;
    var call750 = callmethodChecked(this, "didConsume(1)", [1], block747);
    var call751 = callmethodChecked(call750, "not", []);
    if (Grace_isTrue(call751)) {
      setLineNumber(303);    // compilenode array
      var array752 = new PrimitiveGraceList([]);
      var var_suggestions = array752;
      setLineNumber(304);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call755 = callmethodChecked(var_errormessages, "suggestion", []);
      var call756 = callmethodChecked(call755, "new", []);
      var var_suggestion = call756;
      setLineNumber(305);    // compilenode string
      var string759 = new GraceString("bind");
      var array758 = new PrimitiveGraceList([string759]);
      // call case 4: self request
      onSelf = true;
      var call760 = callmethodChecked(this, "findNextValidToken(1)", [1], array758);
      var var_nextTok = call760;
      var if761 = GraceDone;
      setLineNumber(306);    // compilenode identifier
      var opresult764 = callmethodChecked(var_nextTok, "==(1)", [1], var_sym);
      if (Grace_isTrue(opresult764)) {
        setLineNumber(307);    // compilenode string
        var string766 = new GraceString(" \u00abannotation\u00bb");
        // call case 6: other requests
        var call767 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string766, var_lastToken);
        if761 = call767;
      } else {
        setLineNumber(309);    // compilenode member
        // call case 6: other requests
        var call770 = callmethodChecked(var_nextTok, "prev", []);
        var string771 = new GraceString(" \u00abannotation\u00bb");
        // call case 6: other requests
        var call772 = callmethodChecked(var_suggestion, "replaceTokenRange(2)leading(1)trailing(1)with(1)", [2, 1, 1, 1], var_sym, call770, GraceTrue, GraceFalse, string771);
        if761 = call772;
      }
      setLineNumber(311);    // compilenode identifier
      // call case 6: other requests
      var call774 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
      setLineNumber(312);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call777 = callmethodChecked(var_errormessages, "suggestion", []);
      var call778 = callmethodChecked(call777, "new", []);
      var_suggestion = call778;
      setLineNumber(313);    // compilenode member
      // call case 6: other requests
      var call781 = callmethodChecked(var_nextTok, "prev", []);
      // call case 6: other requests
      var call782 = callmethodChecked(var_suggestion, "deleteTokenRange(2)leading(1)trailing(1)", [2, 1, 1], var_lastToken, call781, GraceTrue, GraceFalse);
      setLineNumber(314);    // compilenode identifier
      // call case 6: other requests
      var call784 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
      setLineNumber(315);    // compilenode string
      var string786 = new GraceString("one or more annotations separated by commas must follow 'is'.");
      setLineNumber(316);    // compilenode member
      // call case 6: other requests
      var call788 = callmethodChecked(var_lastToken, "line", []);
      // call case 6: other requests
      var call791 = callmethodChecked(var_lastToken, "size", []);
      // call case 6: other requests
      var call794 = callmethodChecked(var_lastToken, "linePos", []);
      var opresult796 = callmethodChecked(call794, "+(1)", [1], call791);
      var opresult798 = callmethodChecked(opresult796, "+(1)", [1], new GraceNum(1));
      setLineNumber(317);    // compilenode identifier
      // call case 6: other requests
      setLineNumber(315);    // compilenode identifier
      var call799 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(2)withSuggestions(1)", [1, 2, 1], string786, call788, opresult798, var_suggestions);
      if744 = call799;
    }
    setLineNumber(319);    // compilenode block
    var block801 = new GraceBlock(this, 319, 0);
    block801.real = function() {
      var string803 = new GraceString("comma");
      // call case 4: self request
      onSelf = true;
      var call804 = callmethodChecked(this, "accept(1)", [1], string803);
      return call804;
    };
    var block805 = new GraceBlock(this, 319, 0);
    block805.real = function() {
      setLineNumber(320);    // compilenode member
      // call case 6: other requests
      var call809 = callmethodChecked(var_values, "pop", []);
      // call case 4: self request
      onSelf = true;
      var call810 = callmethodChecked(this, "checkAnnotation(1)", [1], call809);
      // call case 6: other requests
      var call811 = callmethodChecked(var_anns, "push(1)", [1], call810);
      setLineNumber(321);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call813 = callmethodChecked(this, "next", []);
      var if814 = GraceDone;
      setLineNumber(322);    // compilenode member
      // call case 6: other requests
      var block817 = new GraceBlock(this, 322, 0);
      block817.real = function() {
        // call case 4: self request
        onSelf = true;
        var call819 = callmethodChecked(this, "expression(1)", [1], var_noBlocks);
        return call819;
      };
      // call case 4: self request
      onSelf = true;
      var call820 = callmethodChecked(this, "didConsume(1)", [1], block817);
      var call821 = callmethodChecked(call820, "not", []);
      if (Grace_isTrue(call821)) {
        setLineNumber(323);    // compilenode array
        var array822 = new PrimitiveGraceList([]);
        var var_suggestions = array822;
        setLineNumber(324);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call825 = callmethodChecked(var_errormessages, "suggestion", []);
        var call826 = callmethodChecked(call825, "new", []);
        var var_suggestion = call826;
        setLineNumber(325);    // compilenode string
        var string829 = new GraceString("bind");
        var array828 = new PrimitiveGraceList([string829]);
        // call case 4: self request
        onSelf = true;
        var call830 = callmethodChecked(this, "findNextValidToken(1)", [1], array828);
        var var_nextTok = call830;
        var if831 = GraceDone;
        setLineNumber(326);    // compilenode identifier
        var opresult834 = callmethodChecked(var_nextTok, "==(1)", [1], var_sym);
        if (Grace_isTrue(opresult834)) {
          setLineNumber(327);    // compilenode string
          var string836 = new GraceString(" \u00abannotation\u00bb");
          // call case 6: other requests
          var call837 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string836, var_lastToken);
          if831 = call837;
        } else {
          setLineNumber(329);    // compilenode member
          // call case 6: other requests
          var call840 = callmethodChecked(var_nextTok, "prev", []);
          var string841 = new GraceString(" \u00abannotation\u00bb");
          // call case 6: other requests
          var call842 = callmethodChecked(var_suggestion, "replaceTokenRange(2)leading(1)trailing(1)with(1)", [2, 1, 1, 1], var_sym, call840, GraceTrue, GraceFalse, string841);
          if831 = call842;
        }
        setLineNumber(331);    // compilenode identifier
        // call case 6: other requests
        var call844 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
        setLineNumber(332);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call847 = callmethodChecked(var_errormessages, "suggestion", []);
        var call848 = callmethodChecked(call847, "new", []);
        var_suggestion = call848;
        setLineNumber(333);    // compilenode member
        // call case 6: other requests
        var call851 = callmethodChecked(var_nextTok, "prev", []);
        // call case 6: other requests
        var call852 = callmethodChecked(var_suggestion, "deleteTokenRange(2)leading(1)trailing(1)", [2, 1, 1], var_lastToken, call851, GraceTrue, GraceFalse);
        setLineNumber(334);    // compilenode identifier
        // call case 6: other requests
        var call854 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
        setLineNumber(335);    // compilenode string
        var string856 = new GraceString("one or more annotations separated by commas must follow 'is'.");
        setLineNumber(336);    // compilenode member
        // call case 6: other requests
        var call858 = callmethodChecked(var_lastToken, "line", []);
        // call case 6: other requests
        var call861 = callmethodChecked(var_lastToken, "size", []);
        // call case 6: other requests
        var call864 = callmethodChecked(var_lastToken, "linePos", []);
        var opresult866 = callmethodChecked(call864, "+(1)", [1], call861);
        var opresult868 = callmethodChecked(opresult866, "+(1)", [1], new GraceNum(1));
        setLineNumber(337);    // compilenode identifier
        // call case 6: other requests
        setLineNumber(335);    // compilenode identifier
        var call869 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(2)withSuggestions(1)", [1, 2, 1], string856, call858, opresult868, var_suggestions);
        if814 = call869;
      }
      return if814;
    };
    // call case 5: prelude request
    var call870 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block801, block805);
    setLineNumber(340);    // compilenode member
    // call case 6: other requests
    var call874 = callmethodChecked(var_values, "pop", []);
    // call case 4: self request
    onSelf = true;
    var call875 = callmethodChecked(this, "checkAnnotation(1)", [1], call874);
    // call case 6: other requests
    var call876 = callmethodChecked(var_anns, "push(1)", [1], call875);
    setLineNumber(341);    // compilenode identifier
    return var_anns;
  };
  func734.paramCounts = [0];
  this.methods["doannotation"] = func734;
  func734.definitionLine = 296;
  func734.definitionModule = "parser";
  setLineNumber(344);    // compilenode method
  var func877 = function(argcv) {    // method blank
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    var if878 = GraceDone;
    setLineNumber(345);    // compilenode identifier
    var opresult881 = callmethodChecked(var_blankLocation, "==(1)", [1], new GraceNum(0));
    if (Grace_isTrue(opresult881)) {
      var if882 = GraceDone;
      setLineNumber(346);    // compilenode member
      // call case 6: other requests
      var call885 = callmethodChecked(var_lastToken, "line", []);
      var opresult887 = callmethodChecked(call885, "+(1)", [1], new GraceNum(1));
      // call case 6: other requests
      var call890 = callmethodChecked(var_sym, "line", []);
      var opresult892 = callmethodChecked(call890, "\u2264(1)", [1], opresult887);
      if (Grace_isTrue(opresult892)) {
        return var_done;
      }
      var if893 = GraceDone;
      setLineNumber(347);    // compilenode member
      // call case 6: other requests
      var call896 = callmethodChecked(var_previousCommentToken, "line", []);
      var opresult898 = callmethodChecked(call896, "+(1)", [1], new GraceNum(1));
      // call case 6: other requests
      var call901 = callmethodChecked(var_sym, "line", []);
      var opresult903 = callmethodChecked(call901, "\u2264(1)", [1], opresult898);
      if (Grace_isTrue(opresult903)) {
        return var_done;
      }
      if878 = if893;
    }
    setLineNumber(349);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call905 = callmethodChecked(this, "pushComments", []);
    var if906 = GraceDone;
    setLineNumber(351);    // compilenode block
    var block907 = new GraceBlock(this, 351, 0);
    block907.real = function() {
      var string908 = new GraceString("blank");
      // call case 6: other requests
      // call case 6: other requests
      var call912 = callmethodChecked(var_values, "last", []);
      var call913 = callmethodChecked(call912, "kind", []);
      var opresult915 = callmethodChecked(call913, "\u2260(1)", [1], string908);
      return opresult915;
    };
    // call case 6: other requests
    var call919 = callmethodChecked(var_values, "size", []);
    var opresult921 = callmethodChecked(call919, ">(1)", [1], new GraceNum(0));
    var opresult923 = callmethodChecked(opresult921, "&&(1)", [1], block907);
    setLineNumber(350);    // compilenode member
    // call case 6: other requests
    var call927 = callmethodChecked(var_values, "size", []);
    var opresult929 = callmethodChecked(call927, "==(1)", [1], new GraceNum(0));
    var opresult931 = callmethodChecked(opresult929, "||(1)", [1], opresult923);
    if (Grace_isTrue(opresult931)) {
      var if932 = GraceDone;
      setLineNumber(352);    // compilenode identifier
      var opresult935 = callmethodChecked(var_blankLocation, ">(1)", [1], new GraceNum(0));
      if (Grace_isTrue(opresult935)) {
        setLineNumber(353);    // compilenode num
        // call case 6: other requests
        var call937 = callmethodChecked(var_util, "setPosition(2)", [2], var_blankLocation, new GraceNum(0));
        setLineNumber(354);    // compilenode num
        var_blankLocation = new GraceNum(0);
        if932 = GraceDone;
      } else {
        setLineNumber(356);    // compilenode member
        // call case 6: other requests
        var call941 = callmethodChecked(var_sym, "line", []);
        var diff943 = callmethodChecked(call941, "-(1)", [1], new GraceNum(1));
        // call case 6: other requests
        var call944 = callmethodChecked(var_util, "setPosition(2)", [2], diff943, new GraceNum(0));
        if932 = call944;
      }
      setLineNumber(358);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call948 = callmethodChecked(var_ast, "blankNode", []);
      var call949 = callmethodChecked(call948, "new", []);
      // call case 6: other requests
      var call950 = callmethodChecked(var_values, "push(1)", [1], call949);
      if906 = call950;
    }
    return if906;
  };
  func877.paramCounts = [0];
  this.methods["blank"] = func877;
  func877.definitionLine = 344;
  func877.definitionModule = "parser";
  setLineNumber(362);    // compilenode method
  var func951 = function(argcv) {    // method dotypeterm
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    var if952 = GraceDone;
    setLineNumber(363);    // compilenode string
    var string954 = new GraceString("identifier");
    // call case 4: self request
    onSelf = true;
    var call955 = callmethodChecked(this, "accept(1)", [1], string954);
    if (Grace_isTrue(call955)) {
      setLineNumber(364);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call957 = callmethodChecked(this, "pushidentifier", []);
      setLineNumber(365);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call959 = callmethodChecked(this, "generic", []);
      setLineNumber(366);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call961 = callmethodChecked(this, "dotrest(1)", [1], var_noBlocks);
      if952 = call961;
    } else {
      var if962 = GraceDone;
      setLineNumber(368);    // compilenode string
      var string964 = new GraceString("type");
      // call case 4: self request
      onSelf = true;
      var call965 = callmethodChecked(this, "acceptKeyword(1)", [1], string964);
      if (Grace_isTrue(call965)) {
        setLineNumber(369);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call967 = callmethodChecked(this, "dotypeLiteral", []);
        if962 = call967;
      }
      if952 = if962;
    }
    return if952;
  };
  func951.paramCounts = [0];
  this.methods["dotypeterm"] = func951;
  func951.definitionLine = 362;
  func951.definitionModule = "parser";
  setLineNumber(374);    // compilenode method
  var func968 = function(argcv) {    // method typeexpression
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    setLineNumber(375);    // compilenode member
    // call case 6: other requests
    var call970 = callmethodChecked(var_values, "size", []);
    var var_sz = call970;
    var if971 = GraceDone;
    setLineNumber(376);    // compilenode string
    var string973 = new GraceString("lparen");
    // call case 4: self request
    onSelf = true;
    var call974 = callmethodChecked(this, "accept(1)", [1], string973);
    if (Grace_isTrue(call974)) {
      setLineNumber(377);    // compilenode identifier
      var var_prevStatementToken = var_statementToken;
      setLineNumber(378);    // compilenode identifier
      var_statementToken = var_sym;
      setLineNumber(379);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call976 = callmethodChecked(this, "next", []);
      var if977 = GraceDone;
      setLineNumber(380);    // compilenode member
      // call case 6: other requests
      var block980 = new GraceBlock(this, 380, 0);
      block980.real = function() {
        // call case 4: self request
        onSelf = true;
        var call982 = callmethodChecked(this, "typeexpression", []);
        return call982;
      };
      // call case 4: self request
      onSelf = true;
      var call983 = callmethodChecked(this, "didConsume(1)", [1], block980);
      var call984 = callmethodChecked(call983, "not", []);
      if (Grace_isTrue(call984)) {
        setLineNumber(381);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call987 = callmethodChecked(var_errormessages, "suggestion", []);
        var call988 = callmethodChecked(call987, "new", []);
        var var_suggestion = call988;
        setLineNumber(382);    // compilenode string
        var string991 = new GraceString("rparen");
        var array990 = new PrimitiveGraceList([string991]);
        // call case 4: self request
        onSelf = true;
        var call992 = callmethodChecked(this, "findNextValidToken(1)", [1], array990);
        var var_nextTok = call992;
        var if993 = GraceDone;
        setLineNumber(383);    // compilenode identifier
        var opresult996 = callmethodChecked(var_nextTok, "==(1)", [1], var_sym);
        if (Grace_isTrue(opresult996)) {
          setLineNumber(384);    // compilenode string
          var string998 = new GraceString("\u00abtype expression\u00bb");
          // call case 6: other requests
          var call999 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string998, var_lastToken);
          if993 = call999;
        } else {
          setLineNumber(386);    // compilenode member
          // call case 6: other requests
          var call1002 = callmethodChecked(var_nextTok, "prev", []);
          setLineNumber(387);    // compilenode string
          var string1003 = new GraceString("\u00abtype expression\u00bb");
          // call case 6: other requests
          setLineNumber(386);    // compilenode identifier
          var call1004 = callmethodChecked(var_suggestion, "replaceTokenRange(2)leading(1)trailing(1)with(1)", [2, 1, 1, 1], var_sym, call1002, GraceTrue, GraceFalse, string1003);
          if993 = call1004;
        }
        setLineNumber(389);    // compilenode string
        var string1006 = new GraceString("parentheses must contain a valid type expression.");
        setLineNumber(390);    // compilenode member
        // call case 6: other requests
        var call1008 = callmethodChecked(var_sym, "line", []);
        // call case 6: other requests
        var call1010 = callmethodChecked(var_sym, "linePos", []);
        // call case 6: other requests
        setLineNumber(389);    // compilenode identifier
        var call1011 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string1006, call1008, call1010, var_suggestion);
        if977 = call1011;
      }
      var if1012 = GraceDone;
      setLineNumber(392);    // compilenode string
      var string1013 = new GraceString("rparen");
      // call case 6: other requests
      var call1016 = callmethodChecked(var_sym, "kind", []);
      var opresult1018 = callmethodChecked(call1016, "\u2260(1)", [1], string1013);
      if (Grace_isTrue(opresult1018)) {
        setLineNumber(393);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call1020 = callmethodChecked(this, "checkBadOperators", []);
        setLineNumber(394);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call1023 = callmethodChecked(var_errormessages, "suggestion", []);
        var call1024 = callmethodChecked(call1023, "new", []);
        var var_suggestion = call1024;
        setLineNumber(395);    // compilenode string
        var string1026 = new GraceString(")");
        // call case 6: other requests
        var call1027 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string1026, var_lastToken);
        setLineNumber(396);    // compilenode string
        var string1029 = new GraceString("a type expression beginning with a '(' must end with a ')'.");
        setLineNumber(397);    // compilenode member
        // call case 6: other requests
        var call1031 = callmethodChecked(var_lastToken, "line", []);
        // call case 6: other requests
        var call1033 = callmethodChecked(var_lastToken, "size", []);
        // call case 6: other requests
        var call1036 = callmethodChecked(var_lastToken, "linePos", []);
        var opresult1038 = callmethodChecked(call1036, "+(1)", [1], call1033);
        setLineNumber(398);    // compilenode identifier
        // call case 6: other requests
        setLineNumber(396);    // compilenode identifier
        var call1039 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(2)withSuggestion(1)", [1, 2, 1], string1029, call1031, opresult1038, var_suggestion);
        if1012 = call1039;
      }
      setLineNumber(400);    // compilenode identifier
      var_statementToken = var_prevStatementToken;
      setLineNumber(401);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call1041 = callmethodChecked(this, "next", []);
      if971 = call1041;
    } else {
      setLineNumber(403);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call1043 = callmethodChecked(this, "dotypeterm", []);
      if971 = call1043;
    }
    var if1044 = GraceDone;
    setLineNumber(405);    // compilenode member
    // call case 6: other requests
    var call1047 = callmethodChecked(var_values, "size", []);
    var opresult1049 = callmethodChecked(call1047, ">(1)", [1], var_sz);
    if (Grace_isTrue(opresult1049)) {
      setLineNumber(406);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call1051 = callmethodChecked(this, "dotrest(1)", [1], var_noBlocks);
      setLineNumber(407);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call1053 = callmethodChecked(this, "typeexpressionrest", []);
      if1044 = call1053;
    }
    return if1044;
  };
  func968.paramCounts = [0];
  this.methods["typeexpression"] = func968;
  func968.definitionLine = 374;
  func968.definitionModule = "parser";
  setLineNumber(413);    // compilenode method
  var func1054 = function(argcv) {    // method newIf(_,_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_cond = arguments[curarg];
    curarg++;
    var var_thenList = arguments[curarg];
    curarg++;
    var var_elseList = arguments[curarg];
    curarg++;
    setModuleName("parser");
    setLineNumber(414);    // compilenode member
    // call case 5: prelude request
    var call1057 = callmethodChecked(var_prelude, "emptySequence", []);
    // call case 6: other requests
    // call case 6: other requests
    var call1059 = callmethodChecked(var_ast, "blockNode", []);
    var call1060 = callmethodChecked(call1059, "new(2)", [2], call1057, var_thenList);
    var var_thenBlock = call1060;
    setLineNumber(415);    // compilenode member
    // call case 5: prelude request
    var call1063 = callmethodChecked(var_prelude, "emptySequence", []);
    // call case 6: other requests
    // call case 6: other requests
    var call1065 = callmethodChecked(var_ast, "blockNode", []);
    var call1066 = callmethodChecked(call1065, "new(2)", [2], call1063, var_elseList);
    var var_elseBlock = call1066;
    setLineNumber(416);    // compilenode identifier
    // call case 6: other requests
    // call case 6: other requests
    var call1069 = callmethodChecked(var_ast, "ifNode", []);
    var call1070 = callmethodChecked(call1069, "new(3)", [3], var_cond, var_thenBlock, var_elseBlock);
    return call1070;
  };
  func1054.paramCounts = [3];
  this.methods["newIf(3)"] = func1054;
  func1054.definitionLine = 413;
  func1054.definitionModule = "parser";
  setLineNumber(419);    // compilenode method
  var func1071 = function(argcv) {    // method block
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    var if1072 = GraceDone;
    setLineNumber(421);    // compilenode string
    var string1074 = new GraceString("lbrace");
    // call case 4: self request
    onSelf = true;
    var call1075 = callmethodChecked(this, "accept(1)", [1], string1074);
    if (Grace_isTrue(call1075)) {
      setLineNumber(422);    // compilenode identifier
      var var_btok = var_sym;
      setLineNumber(423);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call1077 = callmethodChecked(this, "next", []);
      setLineNumber(424);    // compilenode identifier
      var opresult1080 = callmethodChecked(var_statementIndent, "+(1)", [1], new GraceNum(2));
      var var_minInd = opresult1080;
      setLineNumber(425);    // compilenode identifier
      var var_startIndent = var_statementIndent;
      setLineNumber(426);    // compilenode vardec
      var var_expr1;
      setLineNumber(427);    // compilenode identifier
      var var_s = var_sym;
      setLineNumber(428);    // compilenode vardec
      var var_tmp;
      setLineNumber(429);    // compilenode array
      var array1081 = new PrimitiveGraceList([]);
      var var_params = array1081;
      setLineNumber(430);    // compilenode array
      var array1082 = new PrimitiveGraceList([]);
      var var_body = array1082;
      setLineNumber(431);    // compilenode identifier
      var var_havearrow = GraceTrue;
      setLineNumber(432);    // compilenode identifier
      var var_found = GraceFalse;
      setLineNumber(433);    // compilenode num
      var var_i = new GraceNum(0);
      setLineNumber(434);    // compilenode identifier
      var var_isMatchingBlock = GraceFalse;
      setLineNumber(435);    // compilenode identifier
      var_statementToken = var_sym;
      var if1083 = GraceDone;
      setLineNumber(436);    // compilenode string
      var string1084 = new GraceString("lparen");
      // call case 6: other requests
      var call1087 = callmethodChecked(var_sym, "kind", []);
      var opresult1089 = callmethodChecked(call1087, "==(1)", [1], string1084);
      if (Grace_isTrue(opresult1089)) {
        setLineNumber(437);    // compilenode identifier
        var_isMatchingBlock = GraceTrue;
        if1083 = GraceDone;
      }
      setLineNumber(441);    // compilenode block
      var block1091 = new GraceBlock(this, 441, 0);
      block1091.real = function() {
        // call case 4: self request
        onSelf = true;
        var call1093 = callmethodChecked(this, "expression(1)", [1], var_blocksOK);
        return call1093;
      };
      var block1094 = new GraceBlock(this, 441, 0);
      block1094.real = function() {
        var if1095 = GraceDone;
        setLineNumber(442);    // compilenode string
        var string1097 = new GraceString("colon");
        // call case 4: self request
        onSelf = true;
        var call1098 = callmethodChecked(this, "accept(1)", [1], string1097);
        var string1101 = new GraceString("arrow");
        // call case 4: self request
        onSelf = true;
        var call1102 = callmethodChecked(this, "accept(1)", [1], string1101);
        var string1105 = new GraceString("comma");
        // call case 4: self request
        onSelf = true;
        var call1106 = callmethodChecked(this, "accept(1)", [1], string1105);
        var opresult1108 = callmethodChecked(call1106, "||(1)", [1], call1102);
        var opresult1110 = callmethodChecked(opresult1108, "||(1)", [1], call1098);
        if (Grace_isTrue(opresult1110)) {
          setLineNumber(444);    // compilenode member
          // call case 6: other requests
          var call1112 = callmethodChecked(var_values, "pop", []);
          var_expr1 = call1112;
          var if1113 = GraceDone;
          setLineNumber(445);    // compilenode string
          var string1115 = new GraceString("colon");
          // call case 4: self request
          onSelf = true;
          var call1116 = callmethodChecked(this, "accept(1)", [1], string1115);
          if (Grace_isTrue(call1116)) {
            setLineNumber(448);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call1118 = callmethodChecked(this, "next", []);
            setLineNumber(449);    // compilenode identifier
            var_braceIsType = GraceTrue;
            var if1119 = GraceDone;
            setLineNumber(450);    // compilenode member
            // call case 6: other requests
            var block1122 = new GraceBlock(this, 450, 0);
            block1122.real = function() {
              // call case 4: self request
              onSelf = true;
              var call1124 = callmethodChecked(this, "expression(1)", [1], var_blocksOK);
              return call1124;
            };
            // call case 4: self request
            onSelf = true;
            var call1125 = callmethodChecked(this, "didConsume(1)", [1], block1122);
            var call1126 = callmethodChecked(call1125, "not", []);
            if (Grace_isTrue(call1126)) {
              setLineNumber(451);    // compilenode array
              var array1127 = new PrimitiveGraceList([]);
              var var_suggestions = array1127;
              setLineNumber(452);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              var call1130 = callmethodChecked(var_errormessages, "suggestion", []);
              var call1131 = callmethodChecked(call1130, "new", []);
              var var_suggestion = call1131;
              setLineNumber(453);    // compilenode string
              var string1134 = new GraceString("arrow");
              var string1135 = new GraceString("rbrace");
              var array1133 = new PrimitiveGraceList([string1134, string1135]);
              // call case 4: self request
              onSelf = true;
              var call1136 = callmethodChecked(this, "findNextValidToken(1)", [1], array1133);
              var var_nextTok = call1136;
              var if1137 = GraceDone;
              setLineNumber(454);    // compilenode identifier
              var opresult1140 = callmethodChecked(var_nextTok, "==(1)", [1], var_sym);
              if (Grace_isTrue(opresult1140)) {
                setLineNumber(455);    // compilenode string
                var string1142 = new GraceString(" \u00abexpression\u00bb");
                // call case 6: other requests
                var call1143 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string1142, var_lastToken);
                if1137 = call1143;
              } else {
                setLineNumber(457);    // compilenode member
                // call case 6: other requests
                var call1146 = callmethodChecked(var_nextTok, "prev", []);
                var string1147 = new GraceString(" \u00abexpression\u00bb");
                // call case 6: other requests
                var call1148 = callmethodChecked(var_suggestion, "replaceTokenRange(2)leading(1)trailing(1)with(1)", [2, 1, 1, 1], var_sym, call1146, GraceTrue, GraceFalse, string1147);
                if1137 = call1148;
              }
              setLineNumber(459);    // compilenode identifier
              // call case 6: other requests
              var call1150 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
              setLineNumber(460);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              var call1153 = callmethodChecked(var_errormessages, "suggestion", []);
              var call1154 = callmethodChecked(call1153, "new", []);
              var_suggestion = call1154;
              setLineNumber(461);    // compilenode member
              // call case 6: other requests
              var call1157 = callmethodChecked(var_nextTok, "prev", []);
              // call case 6: other requests
              var call1158 = callmethodChecked(var_suggestion, "deleteTokenRange(2)leading(1)trailing(1)", [2, 1, 1], var_lastToken, call1157, GraceTrue, GraceFalse);
              setLineNumber(462);    // compilenode identifier
              // call case 6: other requests
              var call1160 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
              setLineNumber(463);    // compilenode string
              var string1162 = new GraceString("a block must have an expression after the ':'.");
              setLineNumber(464);    // compilenode member
              // call case 6: other requests
              var call1164 = callmethodChecked(var_sym, "line", []);
              // call case 6: other requests
              var call1166 = callmethodChecked(var_sym, "linePos", []);
              setLineNumber(465);    // compilenode identifier
              // call case 6: other requests
              setLineNumber(463);    // compilenode identifier
              var call1167 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestions(1)", [1, 2, 1], string1162, call1164, call1166, var_suggestions);
              if1119 = call1167;
            }
            setLineNumber(467);    // compilenode identifier
            var_braceIsType = GraceFalse;
            setLineNumber(468);    // compilenode member
            // call case 6: other requests
            var call1170 = callmethodChecked(var_values, "pop", []);
            // call case 6: other requests
            var call1171 = callmethodChecked(var_expr1, "dtype:=(1)", [1], call1170);
            if1113 = call1171;
          }
          setLineNumber(470);    // compilenode identifier
          // call case 6: other requests
          var call1173 = callmethodChecked(var_params, "push(1)", [1], var_expr1);
          var if1174 = GraceDone;
          setLineNumber(471);    // compilenode member
          // call case 6: other requests
          var call1176 = callmethodChecked(var_expr1, "isIdentifier", []);
          // call case 6: other requests
          var call1179 = callmethodChecked(var_isMatchingBlock, "not", []);
          var opresult1181 = callmethodChecked(call1179, "&&(1)", [1], call1176);
          if (Grace_isTrue(opresult1181)) {
            setLineNumber(472);    // compilenode identifier
            // call case 6: other requests
            var call1183 = callmethodChecked(var_expr1, "isBindingOccurrence:=(1)", [1], GraceTrue);
            if1174 = call1183;
          } else {
            setLineNumber(474);    // compilenode identifier
            var_isMatchingBlock = GraceTrue;
            if1174 = GraceDone;
          }
          var if1184 = GraceDone;
          setLineNumber(476);    // compilenode block
          var block1185 = new GraceBlock(this, 476, 0);
          block1185.real = function() {
            var string1187 = new GraceString("comma");
            // call case 4: self request
            onSelf = true;
            var call1188 = callmethodChecked(this, "accept(1)", [1], string1187);
            return call1188;
          };
          var opresult1191 = callmethodChecked(var_isMatchingBlock, "&&(1)", [1], block1185);
          if (Grace_isTrue(opresult1191)) {
            setLineNumber(477);    // compilenode array
            var array1192 = new PrimitiveGraceList([]);
            var var_suggestions = array1192;
            setLineNumber(478);    // compilenode vardec
            var var_suggestion;
            setLineNumber(479);    // compilenode block
            var block1194 = new GraceBlock(this, 479, 1);
            setLineNumber(1);    // compilenode identifier
            block1194.real = function(var_t) {
              setLineNumber(479);    // compilenode string
              var string1195 = new GraceString("arrow");
              // call case 6: other requests
              var call1198 = callmethodChecked(var_t, "kind", []);
              var opresult1200 = callmethodChecked(call1198, "==(1)", [1], string1195);
              return opresult1200;
            };
            // call case 4: self request
            onSelf = true;
            var call1201 = callmethodChecked(this, "findNextToken(1)", [1], block1194);
            var var_arrow = call1201;
            var if1202 = GraceDone;
            setLineNumber(480);    // compilenode identifier
            var opresult1205 = callmethodChecked(GraceFalse, "\u2260(1)", [1], var_arrow);
            if (Grace_isTrue(opresult1205)) {
              setLineNumber(481);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              var call1208 = callmethodChecked(var_errormessages, "suggestion", []);
              var call1209 = callmethodChecked(call1208, "new", []);
              var_suggestion = call1209;
              setLineNumber(482);    // compilenode member
              // call case 6: other requests
              var call1212 = callmethodChecked(var_arrow, "prev", []);
              // call case 6: other requests
              var call1213 = callmethodChecked(var_suggestion, "deleteTokenRange(2)", [2], var_sym, call1212);
              setLineNumber(483);    // compilenode identifier
              // call case 6: other requests
              var call1215 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
              if1202 = call1215;
            }
            setLineNumber(485);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call1218 = callmethodChecked(var_errormessages, "suggestion", []);
            var call1219 = callmethodChecked(call1218, "new", []);
            var_suggestion = call1219;
            setLineNumber(486);    // compilenode string
            var string1221 = new GraceString(" |");
            // call case 6: other requests
            var call1222 = callmethodChecked(var_suggestion, "replaceToken(1)leading(1)trailing(1)with(1)", [1, 1, 1, 1], var_sym, GraceTrue, GraceFalse, string1221);
            setLineNumber(487);    // compilenode identifier
            // call case 6: other requests
            var call1224 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
            setLineNumber(488);    // compilenode string
            var string1226 = new GraceString("a matching block may only have one parameter.");
            setLineNumber(489);    // compilenode member
            // call case 6: other requests
            var call1228 = callmethodChecked(var_sym, "line", []);
            // call case 6: other requests
            var call1230 = callmethodChecked(var_sym, "linePos", []);
            // call case 6: other requests
            var call1232 = callmethodChecked(var_sym, "linePos", []);
            // call case 6: other requests
            setLineNumber(488);    // compilenode identifier
            var call1233 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)withSuggestions(1)", [1, 3, 1], string1226, call1228, call1230, call1232, var_suggestions);
            if1184 = call1233;
          }
          setLineNumber(491);    // compilenode block
          var block1235 = new GraceBlock(this, 491, 0);
          block1235.real = function() {
            var string1237 = new GraceString("comma");
            // call case 4: self request
            onSelf = true;
            var call1238 = callmethodChecked(this, "accept(1)", [1], string1237);
            return call1238;
          };
          var block1239 = new GraceBlock(this, 491, 0);
          block1239.real = function() {
            setLineNumber(493);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call1241 = callmethodChecked(this, "next", []);
            setLineNumber(494);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call1243 = callmethodChecked(this, "pushidentifier", []);
            setLineNumber(495);    // compilenode member
            // call case 6: other requests
            var call1245 = callmethodChecked(var_values, "pop", []);
            var_expr1 = call1245;
            setLineNumber(496);    // compilenode identifier
            // call case 6: other requests
            var call1247 = callmethodChecked(var_expr1, "isBindingOccurrence:=(1)", [1], GraceTrue);
            setLineNumber(497);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call1250 = callmethodChecked(this, "optionalTypeAnnotation", []);
            // call case 6: other requests
            var call1251 = callmethodChecked(var_expr1, "dtype:=(1)", [1], call1250);
            setLineNumber(498);    // compilenode identifier
            // call case 6: other requests
            var call1253 = callmethodChecked(var_params, "push(1)", [1], var_expr1);
            return call1253;
          };
          // call case 5: prelude request
          var call1254 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block1235, block1239);
          var if1255 = GraceDone;
          setLineNumber(500);    // compilenode member
          // call case 6: other requests
          var string1258 = new GraceString("arrow");
          // call case 4: self request
          onSelf = true;
          var call1259 = callmethodChecked(this, "accept(1)", [1], string1258);
          var call1260 = callmethodChecked(call1259, "not", []);
          if (Grace_isTrue(call1260)) {
            setLineNumber(501);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call1263 = callmethodChecked(var_errormessages, "suggestion", []);
            var call1264 = callmethodChecked(call1263, "new", []);
            var var_suggestion = call1264;
            var if1265 = GraceDone;
            setLineNumber(502);    // compilenode string
            var string1266 = new GraceString("=");
            // call case 6: other requests
            var call1269 = callmethodChecked(var_sym, "value", []);
            var opresult1271 = callmethodChecked(call1269, "==(1)", [1], string1266);
            var string1273 = new GraceString("bind");
            // call case 6: other requests
            var call1276 = callmethodChecked(var_sym, "kind", []);
            var opresult1278 = callmethodChecked(call1276, "==(1)", [1], string1273);
            var opresult1280 = callmethodChecked(opresult1278, "||(1)", [1], opresult1271);
            if (Grace_isTrue(opresult1280)) {
              setLineNumber(503);    // compilenode string
              var string1282 = new GraceString("->");
              // call case 6: other requests
              var call1283 = callmethodChecked(var_suggestion, "replaceToken(1)with(1)", [1, 1], var_sym, string1282);
              if1265 = call1283;
            } else {
              setLineNumber(505);    // compilenode string
              var string1285 = new GraceString(" ->");
              // call case 6: other requests
              var call1286 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string1285, var_lastToken);
              if1265 = call1286;
            }
            setLineNumber(507);    // compilenode string
            var string1288 = new GraceString("a block must have one or more parameters followed by '->' and an expression.");
            setLineNumber(508);    // compilenode member
            // call case 6: other requests
            var call1290 = callmethodChecked(var_sym, "line", []);
            // call case 6: other requests
            var call1292 = callmethodChecked(var_sym, "linePos", []);
            // call case 6: other requests
            setLineNumber(507);    // compilenode identifier
            var call1293 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string1288, call1290, call1292, var_suggestion);
            if1255 = call1293;
          }
          setLineNumber(510);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call1295 = callmethodChecked(this, "next", []);
          if1095 = call1295;
        } else {
          var if1296 = GraceDone;
          setLineNumber(511);    // compilenode string
          var string1298 = new GraceString("semicolon");
          // call case 4: self request
          onSelf = true;
          var call1299 = callmethodChecked(this, "accept(1)", [1], string1298);
          if (Grace_isTrue(call1299)) {
            setLineNumber(512);    // compilenode member
            // call case 6: other requests
            var call1302 = callmethodChecked(var_values, "pop", []);
            // call case 6: other requests
            var call1303 = callmethodChecked(var_body, "push(1)", [1], call1302);
            setLineNumber(513);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call1305 = callmethodChecked(this, "next", []);
            var if1306 = GraceDone;
            setLineNumber(514);    // compilenode string
            var string1308 = new GraceString("semicolon");
            // call case 4: self request
            onSelf = true;
            var call1309 = callmethodChecked(this, "accept(1)", [1], string1308);
            if (Grace_isTrue(call1309)) {
              setLineNumber(515);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call1311 = callmethodChecked(this, "next", []);
              var if1312 = GraceDone;
              setLineNumber(516);    // compilenode member
              // call case 6: other requests
              var call1314 = callmethodChecked(var_lastToken, "line", []);
              // call case 6: other requests
              var call1317 = callmethodChecked(var_sym, "line", []);
              var opresult1319 = callmethodChecked(call1317, "==(1)", [1], call1314);
              if (Grace_isTrue(opresult1319)) {
                setLineNumber(517);    // compilenode identifier
                var_indentFreePass = GraceTrue;
                if1312 = GraceDone;
              }
              if1306 = if1312;
            }
            if1296 = if1306;
          } else {
            var if1320 = GraceDone;
            setLineNumber(523);    // compilenode string
            var string1322 = new GraceString("bind");
            // call case 4: self request
            onSelf = true;
            var call1323 = callmethodChecked(this, "accept(1)", [1], string1322);
            setLineNumber(522);    // compilenode string
            var string1325 = new GraceString("index");
            // call case 6: other requests
            // call case 6: other requests
            var call1329 = callmethodChecked(var_values, "last", []);
            var call1330 = callmethodChecked(call1329, "kind", []);
            var opresult1332 = callmethodChecked(call1330, "==(1)", [1], string1325);
            setLineNumber(521);    // compilenode string
            var string1334 = new GraceString("identifier");
            // call case 6: other requests
            // call case 6: other requests
            var call1338 = callmethodChecked(var_values, "last", []);
            var call1339 = callmethodChecked(call1338, "kind", []);
            var opresult1341 = callmethodChecked(call1339, "==(1)", [1], string1334);
            setLineNumber(520);    // compilenode string
            var string1343 = new GraceString("member");
            // call case 6: other requests
            // call case 6: other requests
            var call1347 = callmethodChecked(var_values, "last", []);
            var call1348 = callmethodChecked(call1347, "kind", []);
            var opresult1350 = callmethodChecked(call1348, "==(1)", [1], string1343);
            var opresult1352 = callmethodChecked(opresult1350, "||(1)", [1], opresult1341);
            var opresult1354 = callmethodChecked(opresult1352, "||(1)", [1], opresult1332);
            var opresult1356 = callmethodChecked(opresult1354, "&&(1)", [1], call1323);
            if (Grace_isTrue(opresult1356)) {
              setLineNumber(524);    // compilenode member
              // call case 6: other requests
              var call1358 = callmethodChecked(var_values, "pop", []);
              var var_lhs = call1358;
              setLineNumber(525);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call1360 = callmethodChecked(this, "next", []);
              var if1361 = GraceDone;
              setLineNumber(526);    // compilenode member
              // call case 6: other requests
              var block1364 = new GraceBlock(this, 526, 0);
              block1364.real = function() {
                // call case 4: self request
                onSelf = true;
                var call1366 = callmethodChecked(this, "expression(1)", [1], var_blocksOK);
                return call1366;
              };
              // call case 4: self request
              onSelf = true;
              var call1367 = callmethodChecked(this, "didConsume(1)", [1], block1364);
              var call1368 = callmethodChecked(call1367, "not", []);
              if (Grace_isTrue(call1368)) {
                setLineNumber(527);    // compilenode array
                var array1369 = new PrimitiveGraceList([]);
                var var_suggestions = array1369;
                setLineNumber(528);    // compilenode member
                // call case 6: other requests
                // call case 6: other requests
                var call1372 = callmethodChecked(var_errormessages, "suggestion", []);
                var call1373 = callmethodChecked(call1372, "new", []);
                var var_suggestion = call1373;
                setLineNumber(529);    // compilenode string
                var string1376 = new GraceString("rbrace");
                var array1375 = new PrimitiveGraceList([string1376]);
                // call case 4: self request
                onSelf = true;
                var call1377 = callmethodChecked(this, "findNextValidToken(1)", [1], array1375);
                var var_nextTok = call1377;
                var if1378 = GraceDone;
                setLineNumber(530);    // compilenode identifier
                var opresult1381 = callmethodChecked(var_nextTok, "==(1)", [1], var_sym);
                if (Grace_isTrue(opresult1381)) {
                  setLineNumber(531);    // compilenode string
                  var string1383 = new GraceString(" \u00abexpression\u00bb");
                  // call case 6: other requests
                  var call1384 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string1383, var_lastToken);
                  if1378 = call1384;
                } else {
                  setLineNumber(533);    // compilenode member
                  // call case 6: other requests
                  var call1387 = callmethodChecked(var_nextTok, "prev", []);
                  var string1388 = new GraceString(" \u00abexpression\u00bb");
                  // call case 6: other requests
                  var call1389 = callmethodChecked(var_suggestion, "replaceTokenRange(2)leading(1)trailing(1)with(1)", [2, 1, 1, 1], var_sym, call1387, GraceTrue, GraceFalse, string1388);
                  if1378 = call1389;
                }
                setLineNumber(535);    // compilenode identifier
                // call case 6: other requests
                var call1391 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
                setLineNumber(536);    // compilenode member
                // call case 6: other requests
                // call case 6: other requests
                var call1394 = callmethodChecked(var_errormessages, "suggestion", []);
                var call1395 = callmethodChecked(call1394, "new", []);
                var_suggestion = call1395;
                setLineNumber(537);    // compilenode member
                // call case 6: other requests
                var call1398 = callmethodChecked(var_nextTok, "prev", []);
                // call case 6: other requests
                var call1399 = callmethodChecked(var_suggestion, "deleteTokenRange(2)leading(1)trailing(1)", [2, 1, 1], var_lastToken, call1398, GraceTrue, GraceFalse);
                setLineNumber(538);    // compilenode identifier
                // call case 6: other requests
                var call1401 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
                setLineNumber(539);    // compilenode string
                var string1403 = new GraceString("a valid expression must follow ':='.");
                setLineNumber(540);    // compilenode member
                // call case 6: other requests
                var call1405 = callmethodChecked(var_sym, "line", []);
                // call case 6: other requests
                var call1407 = callmethodChecked(var_sym, "linePos", []);
                // call case 6: other requests
                setLineNumber(539);    // compilenode identifier
                var call1408 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestions(1)", [1, 2, 1], string1403, call1405, call1407, var_suggestions);
                if1361 = call1408;
              }
              setLineNumber(542);    // compilenode member
              // call case 6: other requests
              var call1410 = callmethodChecked(var_values, "pop", []);
              var var_rhs = call1410;
              setLineNumber(543);    // compilenode member
              // call case 6: other requests
              var call1413 = callmethodChecked(var_btok, "line", []);
              // call case 6: other requests
              var call1415 = callmethodChecked(var_btok, "linePos", []);
              // call case 6: other requests
              var call1416 = callmethodChecked(var_util, "setPosition(2)", [2], call1413, call1415);
              setLineNumber(544);    // compilenode identifier
              // call case 6: other requests
              // call case 6: other requests
              var call1420 = callmethodChecked(var_ast, "bindNode", []);
              var call1421 = callmethodChecked(call1420, "new(2)", [2], var_lhs, var_rhs);
              // call case 6: other requests
              var call1422 = callmethodChecked(var_body, "push(1)", [1], call1421);
              var if1423 = GraceDone;
              setLineNumber(545);    // compilenode string
              var string1425 = new GraceString("semicolon");
              // call case 4: self request
              onSelf = true;
              var call1426 = callmethodChecked(this, "accept(1)", [1], string1425);
              if (Grace_isTrue(call1426)) {
                setLineNumber(546);    // compilenode member
                // call case 4: self request
                onSelf = true;
                var call1428 = callmethodChecked(this, "next", []);
                var if1429 = GraceDone;
                setLineNumber(547);    // compilenode member
                // call case 6: other requests
                var call1431 = callmethodChecked(var_lastToken, "line", []);
                // call case 6: other requests
                var call1434 = callmethodChecked(var_sym, "line", []);
                var opresult1436 = callmethodChecked(call1434, "==(1)", [1], call1431);
                if (Grace_isTrue(opresult1436)) {
                  setLineNumber(548);    // compilenode identifier
                  var_indentFreePass = GraceTrue;
                  if1429 = GraceDone;
                }
                if1423 = if1429;
              }
              if1320 = if1423;
            } else {
              setLineNumber(552);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call1438 = callmethodChecked(this, "checkUnexpectedTokenAfterStatement", []);
              setLineNumber(553);    // compilenode member
              // call case 6: other requests
              var call1441 = callmethodChecked(var_values, "pop", []);
              // call case 6: other requests
              var call1442 = callmethodChecked(var_body, "push(1)", [1], call1441);
              if1320 = call1442;
            }
            if1296 = if1320;
          }
          if1095 = if1296;
        }
        return if1095;
      };
      // call case 4: self request
      onSelf = true;
      var call1443 = callmethodChecked(this, "ifConsume(1)then(1)", [1, 1], block1091, block1094);
      var if1444 = GraceDone;
      setLineNumber(556);    // compilenode string
      var string1446 = new GraceString("arrow");
      // call case 4: self request
      onSelf = true;
      var call1447 = callmethodChecked(this, "accept(1)", [1], string1446);
      if (Grace_isTrue(call1447)) {
        setLineNumber(557);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call1449 = callmethodChecked(this, "next", []);
        if1444 = call1449;
      }
      var if1450 = GraceDone;
      setLineNumber(559);    // compilenode member
      // call case 6: other requests
      var call1452 = callmethodChecked(var_lastToken, "line", []);
      // call case 6: other requests
      var call1455 = callmethodChecked(var_sym, "line", []);
      var opresult1457 = callmethodChecked(call1455, "==(1)", [1], call1452);
      if (Grace_isTrue(opresult1457)) {
        setLineNumber(560);    // compilenode member
        // call case 6: other requests
        var call1460 = callmethodChecked(var_sym, "linePos", []);
        var diff1462 = callmethodChecked(call1460, "-(1)", [1], new GraceNum(1));
        var_minIndentLevel = diff1462;
        if1450 = GraceDone;
      } else {
        setLineNumber(562);    // compilenode identifier
        var_minIndentLevel = var_minInd;
        if1450 = GraceDone;
      }
      setLineNumber(564);    // compilenode block
      var block1464 = new GraceBlock(this, 564, 0);
      block1464.real = function() {
        // call case 6: other requests
        var string1467 = new GraceString("rbrace");
        // call case 4: self request
        onSelf = true;
        var call1468 = callmethodChecked(this, "accept(1)", [1], string1467);
        var call1469 = callmethodChecked(call1468, "not", []);
        return call1469;
      };
      var block1470 = new GraceBlock(this, 564, 0);
      block1470.real = function() {
        var if1471 = GraceDone;
        setLineNumber(566);    // compilenode member
        // call case 6: other requests
        var block1474 = new GraceBlock(this, 566, 0);
        block1474.real = function() {
          // call case 4: self request
          onSelf = true;
          var call1476 = callmethodChecked(this, "statement", []);
          return call1476;
        };
        // call case 4: self request
        onSelf = true;
        var call1477 = callmethodChecked(this, "didConsume(1)", [1], block1474);
        var call1478 = callmethodChecked(call1477, "not", []);
        if (Grace_isTrue(call1478)) {
          setLineNumber(567);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call1481 = callmethodChecked(var_errormessages, "suggestion", []);
          var call1482 = callmethodChecked(call1481, "new", []);
          var var_suggestion = call1482;
          setLineNumber(568);    // compilenode string
          var string1484 = new GraceString("}");
          // call case 6: other requests
          var call1485 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string1484, var_lastToken);
          setLineNumber(569);    // compilenode string
          var string1487 = new GraceString("a block must end with a '}'.");
          setLineNumber(570);    // compilenode member
          // call case 6: other requests
          var call1489 = callmethodChecked(var_sym, "line", []);
          // call case 6: other requests
          var call1491 = callmethodChecked(var_sym, "linePos", []);
          // call case 6: other requests
          setLineNumber(569);    // compilenode identifier
          var call1492 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string1487, call1489, call1491, var_suggestion);
          if1471 = call1492;
        }
        setLineNumber(572);    // compilenode member
        // call case 6: other requests
        var call1494 = callmethodChecked(var_values, "pop", []);
        var_tmp = call1494;
        setLineNumber(573);    // compilenode identifier
        // call case 6: other requests
        var call1496 = callmethodChecked(var_body, "push(1)", [1], var_tmp);
        return call1496;
      };
      // call case 5: prelude request
      var call1497 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block1464, block1470);
      setLineNumber(575);    // compilenode identifier
      var diff1500 = callmethodChecked(var_minInd, "-(1)", [1], new GraceNum(2));
      var_minIndentLevel = diff1500;
      setLineNumber(576);    // compilenode identifier
      var_statementIndent = var_startIndent;
      setLineNumber(577);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call1502 = callmethodChecked(this, "next", []);
      setLineNumber(578);    // compilenode member
      // call case 6: other requests
      var call1505 = callmethodChecked(var_btok, "line", []);
      // call case 6: other requests
      var call1507 = callmethodChecked(var_btok, "linePos", []);
      // call case 6: other requests
      var call1508 = callmethodChecked(var_util, "setPosition(2)", [2], call1505, call1507);
      setLineNumber(579);    // compilenode identifier
      // call case 6: other requests
      // call case 6: other requests
      var call1511 = callmethodChecked(var_ast, "blockNode", []);
      var call1512 = callmethodChecked(call1511, "new(2)", [2], var_params, var_body);
      var var_o = call1512;
      var if1513 = GraceDone;
      setLineNumber(580);    // compilenode identifier
      if (Grace_isTrue(var_isMatchingBlock)) {
        var if1514 = GraceDone;
        setLineNumber(581);    // compilenode member
        // call case 6: other requests
        var call1517 = callmethodChecked(var_params, "size", []);
        var opresult1519 = callmethodChecked(call1517, ">(1)", [1], new GraceNum(0));
        if (Grace_isTrue(opresult1519)) {
          setLineNumber(582);    // compilenode member
          // call case 6: other requests
          var call1522 = callmethodChecked(var_params, "first", []);
          // call case 6: other requests
          var call1523 = callmethodChecked(var_o, "matchingPattern:=(1)", [1], call1522);
          if1514 = call1523;
        }
        if1513 = if1514;
      }
      setLineNumber(585);    // compilenode identifier
      // call case 6: other requests
      var call1525 = callmethodChecked(var_values, "push(1)", [1], var_o);
      if1072 = call1525;
    }
    return if1072;
  };
  func1071.paramCounts = [0];
  this.methods["block"] = func1071;
  func1071.definitionLine = 419;
  func1071.definitionModule = "parser";
  setLineNumber(592);    // compilenode method
  var func1526 = function(argcv) {    // method doif
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    var if1527 = GraceDone;
    setLineNumber(593);    // compilenode string
    var string1528 = new GraceString("if");
    // call case 6: other requests
    var call1531 = callmethodChecked(var_sym, "value", []);
    var opresult1533 = callmethodChecked(call1531, "==(1)", [1], string1528);
    var string1536 = new GraceString("identifier");
    // call case 4: self request
    onSelf = true;
    var call1537 = callmethodChecked(this, "accept(1)", [1], string1536);
    var opresult1539 = callmethodChecked(call1537, "&&(1)", [1], opresult1533);
    if (Grace_isTrue(opresult1539)) {
      setLineNumber(594);    // compilenode identifier
      var var_btok = var_sym;
      setLineNumber(595);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call1541 = callmethodChecked(this, "next", []);
      var if1542 = GraceDone;
      setLineNumber(596);    // compilenode block
      var block1543 = new GraceBlock(this, 596, 0);
      block1543.real = function() {
        var string1544 = new GraceString("lbrace");
        // call case 6: other requests
        var call1547 = callmethodChecked(var_sym, "kind", []);
        var opresult1549 = callmethodChecked(call1547, "==(1)", [1], string1544);
        return opresult1549;
      };
      var string1551 = new GraceString("lparen");
      // call case 6: other requests
      var call1554 = callmethodChecked(var_sym, "kind", []);
      var opresult1556 = callmethodChecked(call1554, "==(1)", [1], string1551);
      var opresult1558 = callmethodChecked(opresult1556, "||(1)", [1], block1543);
      if (Grace_isTrue(opresult1558)) {
        setLineNumber(597);    // compilenode member
        // call case 6: other requests
        var call1560 = callmethodChecked(var_sym, "value", []);
        if1542 = call1560;
      } else {
        var string1561 = new GraceString("-missing-");
        if1542 = string1561;
      }
      var var_opener = if1542;
      var if1562 = GraceDone;
      setLineNumber(598);    // compilenode string
      var string1563 = new GraceString("(");
      var opresult1566 = callmethodChecked(var_opener, "==(1)", [1], string1563);
      if (Grace_isTrue(opresult1566)) {
        var string1567 = new GraceString(")");
        if1562 = string1567;
      } else {
        var if1568 = GraceDone;
        setLineNumber(599);    // compilenode string
        var string1569 = new GraceString("{");
        var opresult1572 = callmethodChecked(var_opener, "==(1)", [1], string1569);
        if (Grace_isTrue(opresult1572)) {
          var string1573 = new GraceString("}");
          if1568 = string1573;
        } else {
          var string1574 = new GraceString("-nothing-");
          if1568 = string1574;
        }
        if1562 = if1568;
      }
      var var_closer = if1562;
      var if1575 = GraceDone;
      setLineNumber(600);    // compilenode string
      var string1576 = new GraceString("-missing-");
      var opresult1579 = callmethodChecked(var_opener, "==(1)", [1], string1576);
      if (Grace_isTrue(opresult1579)) {
        setLineNumber(601);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call1582 = callmethodChecked(var_errormessages, "suggestion", []);
        var call1583 = callmethodChecked(call1582, "new", []);
        var var_suggestion = call1583;
        setLineNumber(603);    // compilenode block
        var block1585 = new GraceBlock(this, 603, 1);
        setLineNumber(1);    // compilenode identifier
        block1585.real = function(var_t) {
          setLineNumber(605);    // compilenode string
          var string1586 = new GraceString("then");
          // call case 6: other requests
          var call1589 = callmethodChecked(var_t, "value", []);
          var opresult1591 = callmethodChecked(call1589, "==(1)", [1], string1586);
          var string1593 = new GraceString("identifier");
          // call case 6: other requests
          var call1596 = callmethodChecked(var_t, "kind", []);
          var opresult1598 = callmethodChecked(call1596, "==(1)", [1], string1593);
          var opresult1600 = callmethodChecked(opresult1598, "&&(1)", [1], opresult1591);
          setLineNumber(604);    // compilenode string
          var string1602 = new GraceString("lbrace");
          // call case 6: other requests
          var call1605 = callmethodChecked(var_t, "kind", []);
          var opresult1607 = callmethodChecked(call1605, "==(1)", [1], string1602);
          var string1609 = new GraceString("rbrace");
          // call case 6: other requests
          var call1612 = callmethodChecked(var_t, "kind", []);
          var opresult1614 = callmethodChecked(call1612, "==(1)", [1], string1609);
          var string1616 = new GraceString("rparen");
          // call case 6: other requests
          var call1619 = callmethodChecked(var_t, "kind", []);
          var opresult1621 = callmethodChecked(call1619, "==(1)", [1], string1616);
          var opresult1623 = callmethodChecked(opresult1621, "||(1)", [1], opresult1614);
          var opresult1625 = callmethodChecked(opresult1623, "||(1)", [1], opresult1607);
          var opresult1627 = callmethodChecked(opresult1625, "||(1)", [1], opresult1600);
          setLineNumber(603);    // compilenode member
          // call case 6: other requests
          var call1630 = callmethodChecked(var_btok, "line", []);
          // call case 6: other requests
          var call1633 = callmethodChecked(var_t, "line", []);
          var opresult1635 = callmethodChecked(call1633, "==(1)", [1], call1630);
          var opresult1637 = callmethodChecked(opresult1635, "&&(1)", [1], opresult1627);
          return opresult1637;
        };
        // call case 4: self request
        onSelf = true;
        var call1638 = callmethodChecked(this, "findNextToken(1)", [1], block1585);
        var var_nextTok = call1638;
        var if1639 = GraceDone;
        setLineNumber(606);    // compilenode identifier
        var opresult1642 = callmethodChecked(GraceFalse, "==(1)", [1], var_nextTok);
        if (Grace_isTrue(opresult1642)) {
          setLineNumber(607);    // compilenode string
          var string1644 = new GraceString(" (\u00abcondition\u00bb) then {");
          // call case 6: other requests
          var call1645 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string1644, var_btok);
          if1639 = call1645;
        } else {
          var if1646 = GraceDone;
          setLineNumber(608);    // compilenode string
          var string1647 = new GraceString("rparen");
          // call case 6: other requests
          var call1650 = callmethodChecked(var_nextTok, "kind", []);
          var opresult1652 = callmethodChecked(call1650, "==(1)", [1], string1647);
          if (Grace_isTrue(opresult1652)) {
            var if1653 = GraceDone;
            setLineNumber(609);    // compilenode identifier
            var opresult1656 = callmethodChecked(var_nextTok, "==(1)", [1], var_sym);
            if (Grace_isTrue(opresult1656)) {
              setLineNumber(610);    // compilenode string
              var string1658 = new GraceString("(\u00abcondition\u00bb");
              // call case 6: other requests
              var call1659 = callmethodChecked(var_suggestion, "insert(1)beforeToken(1)", [1, 1], string1658, var_sym);
              if1653 = call1659;
            } else {
              setLineNumber(612);    // compilenode string
              var string1661 = new GraceString("(");
              // call case 6: other requests
              var call1662 = callmethodChecked(var_suggestion, "insert(1)beforeToken(1)", [1, 1], string1661, var_sym);
              if1653 = call1662;
            }
            if1646 = if1653;
          } else {
            var if1663 = GraceDone;
            setLineNumber(614);    // compilenode string
            var string1664 = new GraceString("lbrace");
            // call case 6: other requests
            var call1667 = callmethodChecked(var_nextTok, "kind", []);
            var opresult1669 = callmethodChecked(call1667, "==(1)", [1], string1664);
            if (Grace_isTrue(opresult1669)) {
              var if1670 = GraceDone;
              setLineNumber(615);    // compilenode identifier
              var opresult1673 = callmethodChecked(var_nextTok, "==(1)", [1], var_sym);
              if (Grace_isTrue(opresult1673)) {
                setLineNumber(616);    // compilenode string
                var string1675 = new GraceString(" (\u00abcondition\u00bb) then");
                // call case 6: other requests
                var call1676 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string1675, var_btok);
                if1670 = call1676;
              } else {
                setLineNumber(618);    // compilenode string
                var string1678 = new GraceString("(");
                // call case 6: other requests
                var call1679 = callmethodChecked(var_suggestion, "insert(1)beforeToken(1)", [1, 1], string1678, var_sym);
                setLineNumber(619);    // compilenode string
                var string1681 = new GraceString(") then");
                // call case 6: other requests
                var call1683 = callmethodChecked(var_nextTok, "prev", []);
                // call case 6: other requests
                var call1684 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)andTrailingSpace(1)", [1, 1, 1], string1681, call1683, GraceTrue);
                if1670 = call1684;
              }
              if1663 = if1670;
            } else {
              var if1685 = GraceDone;
              setLineNumber(621);    // compilenode string
              var string1686 = new GraceString("identifier");
              // call case 6: other requests
              var call1689 = callmethodChecked(var_nextTok, "kind", []);
              var opresult1691 = callmethodChecked(call1689, "==(1)", [1], string1686);
              if (Grace_isTrue(opresult1691)) {
                var if1692 = GraceDone;
                setLineNumber(622);    // compilenode identifier
                var opresult1695 = callmethodChecked(var_nextTok, "==(1)", [1], var_sym);
                if (Grace_isTrue(opresult1695)) {
                  setLineNumber(623);    // compilenode string
                  var string1697 = new GraceString("(\u00abcondition\u00bb) ");
                  // call case 6: other requests
                  var call1698 = callmethodChecked(var_suggestion, "insert(1)beforeToken(1)", [1, 1], string1697, var_sym);
                  if1692 = call1698;
                } else {
                  setLineNumber(625);    // compilenode string
                  var string1700 = new GraceString("(");
                  // call case 6: other requests
                  var call1701 = callmethodChecked(var_suggestion, "insert(1)beforeToken(1)", [1, 1], string1700, var_sym);
                  setLineNumber(626);    // compilenode string
                  var string1703 = new GraceString(")");
                  // call case 6: other requests
                  var call1705 = callmethodChecked(var_nextTok, "prev", []);
                  // call case 6: other requests
                  var call1706 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)andTrailingSpace(1)", [1, 1, 1], string1703, call1705, GraceTrue);
                  if1692 = call1706;
                }
                if1685 = if1692;
              }
              if1663 = if1685;
            }
            if1646 = if1663;
          }
          if1639 = if1646;
        }
        setLineNumber(630);    // compilenode string
        var string1708 = new GraceString("in parentheses or braces after the 'if'.");
        setLineNumber(629);    // compilenode string
        var string1710 = new GraceString("an if statement must have a condition ");
        var opresult1712 = callmethodChecked(string1710, "++(1)", [1], string1708);
        setLineNumber(631);    // compilenode member
        // call case 6: other requests
        var call1714 = callmethodChecked(var_sym, "line", []);
        // call case 6: other requests
        var call1716 = callmethodChecked(var_sym, "linePos", []);
        // call case 6: other requests
        setLineNumber(629);    // compilenode identifier
        var call1717 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], opresult1712, call1714, call1716, var_suggestion);
        if1575 = call1717;
      }
      setLineNumber(633);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call1719 = callmethodChecked(this, "next", []);
      var if1720 = GraceDone;
      setLineNumber(634);    // compilenode member
      // call case 6: other requests
      var block1723 = new GraceBlock(this, 634, 0);
      block1723.real = function() {
        // call case 4: self request
        onSelf = true;
        var call1725 = callmethodChecked(this, "expression(1)", [1], var_blocksOK);
        return call1725;
      };
      // call case 4: self request
      onSelf = true;
      var call1726 = callmethodChecked(this, "didConsume(1)", [1], block1723);
      var call1727 = callmethodChecked(call1726, "not", []);
      if (Grace_isTrue(call1727)) {
        setLineNumber(635);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call1730 = callmethodChecked(var_errormessages, "suggestion", []);
        var call1731 = callmethodChecked(call1730, "new", []);
        var var_suggestion = call1731;
        setLineNumber(637);    // compilenode block
        var block1733 = new GraceBlock(this, 637, 1);
        setLineNumber(1);    // compilenode identifier
        block1733.real = function(var_t) {
          setLineNumber(637);    // compilenode string
          var string1734 = new GraceString("rparen");
          // call case 6: other requests
          var call1737 = callmethodChecked(var_t, "kind", []);
          var opresult1739 = callmethodChecked(call1737, "==(1)", [1], string1734);
          // call case 6: other requests
          var call1742 = callmethodChecked(var_lastToken, "line", []);
          // call case 6: other requests
          var call1745 = callmethodChecked(var_t, "line", []);
          var opresult1747 = callmethodChecked(call1745, "==(1)", [1], call1742);
          var opresult1749 = callmethodChecked(opresult1747, "&&(1)", [1], opresult1739);
          return opresult1749;
        };
        // call case 4: self request
        onSelf = true;
        var call1750 = callmethodChecked(this, "findNextToken(1)", [1], block1733);
        var var_nextTok = call1750;
        var if1751 = GraceDone;
        setLineNumber(638);    // compilenode identifier
        var opresult1754 = callmethodChecked(GraceFalse, "==(1)", [1], var_nextTok);
        if (Grace_isTrue(opresult1754)) {
          setLineNumber(639);    // compilenode string
          var string1757 = new GraceString("rparen");
          var array1756 = new PrimitiveGraceList([string1757]);
          // call case 4: self request
          onSelf = true;
          var call1758 = callmethodChecked(this, "findNextValidToken(1)", [1], array1756);
          var_nextTok = call1758;
          var if1759 = GraceDone;
          setLineNumber(640);    // compilenode identifier
          var opresult1762 = callmethodChecked(var_nextTok, "==(1)", [1], var_sym);
          if (Grace_isTrue(opresult1762)) {
            setLineNumber(641);    // compilenode string
            var string1764 = new GraceString("\u00abexpression\u00bb) then {");
            // call case 6: other requests
            var call1765 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string1764, var_lastToken);
            if1759 = call1765;
          } else {
            setLineNumber(643);    // compilenode member
            // call case 6: other requests
            var call1768 = callmethodChecked(var_nextTok, "prev", []);
            setLineNumber(644);    // compilenode string
            var string1769 = new GraceString("\u00abexpression\u00bb) then {");
            // call case 6: other requests
            setLineNumber(643);    // compilenode identifier
            var call1770 = callmethodChecked(var_suggestion, "replaceTokenRange(2)leading(1)trailing(1)with(1)", [2, 1, 1, 1], var_sym, call1768, GraceTrue, GraceFalse, string1769);
            if1759 = call1770;
          }
          setLineNumber(647);    // compilenode string
          var string1772 = new GraceString("condition in parentheses or braces after the 'if'.");
          setLineNumber(646);    // compilenode string
          var string1774 = new GraceString("an if statement must have a ");
          var opresult1776 = callmethodChecked(string1774, "++(1)", [1], string1772);
          setLineNumber(648);    // compilenode member
          // call case 6: other requests
          var call1778 = callmethodChecked(var_sym, "line", []);
          // call case 6: other requests
          var call1780 = callmethodChecked(var_sym, "linePos", []);
          setLineNumber(649);    // compilenode identifier
          // call case 6: other requests
          setLineNumber(646);    // compilenode identifier
          var call1781 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], opresult1776, call1778, call1780, var_suggestion);
          if1751 = call1781;
        } else {
          var if1782 = GraceDone;
          setLineNumber(651);    // compilenode identifier
          var opresult1785 = callmethodChecked(var_nextTok, "==(1)", [1], var_sym);
          if (Grace_isTrue(opresult1785)) {
            setLineNumber(652);    // compilenode string
            var string1787 = new GraceString("\u00abexpression\u00bb");
            // call case 6: other requests
            var call1788 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string1787, var_lastToken);
            setLineNumber(654);    // compilenode string
            var string1790 = new GraceString("condition in parentheses or braces after the 'if'.");
            setLineNumber(653);    // compilenode string
            var string1792 = new GraceString("an if statement must have a ");
            var opresult1794 = callmethodChecked(string1792, "++(1)", [1], string1790);
            setLineNumber(655);    // compilenode member
            // call case 6: other requests
            var call1796 = callmethodChecked(var_sym, "line", []);
            // call case 6: other requests
            var call1798 = callmethodChecked(var_sym, "linePos", []);
            setLineNumber(656);    // compilenode identifier
            // call case 6: other requests
            setLineNumber(653);    // compilenode identifier
            var call1799 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], opresult1794, call1796, call1798, var_suggestion);
            if1782 = call1799;
          } else {
            setLineNumber(658);    // compilenode member
            // call case 6: other requests
            var call1802 = callmethodChecked(var_nextTok, "prev", []);
            setLineNumber(659);    // compilenode string
            var string1803 = new GraceString("\u00abexpression\u00bb");
            // call case 6: other requests
            setLineNumber(658);    // compilenode identifier
            var call1804 = callmethodChecked(var_suggestion, "replaceTokenRange(2)leading(1)trailing(1)with(1)", [2, 1, 1, 1], var_sym, call1802, GraceFalse, GraceTrue, string1803);
            setLineNumber(661);    // compilenode string
            var string1806 = new GraceString("condition in parentheses or braces after the 'if'.");
            setLineNumber(660);    // compilenode string
            var string1808 = new GraceString("an if statement must have a ");
            var opresult1810 = callmethodChecked(string1808, "++(1)", [1], string1806);
            setLineNumber(662);    // compilenode member
            // call case 6: other requests
            var call1812 = callmethodChecked(var_sym, "line", []);
            // call case 6: other requests
            var call1814 = callmethodChecked(var_sym, "linePos", []);
            // call case 6: other requests
            var call1817 = callmethodChecked(var_nextTok, "linePos", []);
            var diff1819 = callmethodChecked(call1817, "-(1)", [1], new GraceNum(1));
            setLineNumber(663);    // compilenode identifier
            // call case 6: other requests
            setLineNumber(660);    // compilenode identifier
            var call1820 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)withSuggestion(1)", [1, 3, 1], opresult1810, call1812, call1814, diff1819, var_suggestion);
            if1782 = call1820;
          }
          if1751 = if1782;
        }
        if1720 = if1751;
      }
      var if1821 = GraceDone;
      setLineNumber(667);    // compilenode member
      // call case 6: other requests
      var call1824 = callmethodChecked(var_sym, "value", []);
      var opresult1826 = callmethodChecked(call1824, "\u2260(1)", [1], var_closer);
      if (Grace_isTrue(opresult1826)) {
        setLineNumber(668);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call1828 = callmethodChecked(this, "checkBadOperators", []);
        setLineNumber(669);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call1831 = callmethodChecked(var_errormessages, "suggestion", []);
        var call1832 = callmethodChecked(call1831, "new", []);
        var var_suggestion = call1832;
        setLineNumber(670);    // compilenode string
        var string1834 = new GraceString(")");
        // call case 6: other requests
        var call1835 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string1834, var_lastToken);
        setLineNumber(672);    // compilenode string
        var string1837 = new GraceString("'.");
        var string1840 = new GraceString("' must end with a '");
        var string1843 = new GraceString("'");
        var opresult1845 = callmethodChecked(string1843, "++(1)", [1], var_opener);
        var opresult1847 = callmethodChecked(opresult1845, "++(1)", [1], string1840);
        var opresult1849 = callmethodChecked(opresult1847, "++(1)", [1], var_closer);
        var opresult1851 = callmethodChecked(opresult1849, "++(1)", [1], string1837);
        setLineNumber(671);    // compilenode string
        var string1853 = new GraceString("an expression beginning with a ");
        var opresult1855 = callmethodChecked(string1853, "++(1)", [1], opresult1851);
        setLineNumber(673);    // compilenode member
        // call case 6: other requests
        var call1857 = callmethodChecked(var_lastToken, "line", []);
        // call case 6: other requests
        var call1859 = callmethodChecked(var_lastToken, "size", []);
        // call case 6: other requests
        var call1862 = callmethodChecked(var_lastToken, "linePos", []);
        var opresult1864 = callmethodChecked(call1862, "+(1)", [1], call1859);
        setLineNumber(674);    // compilenode identifier
        // call case 6: other requests
        setLineNumber(671);    // compilenode identifier
        var call1865 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], opresult1855, call1857, opresult1864, var_suggestion);
        if1821 = call1865;
      }
      setLineNumber(676);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call1867 = callmethodChecked(this, "next", []);
      setLineNumber(677);    // compilenode member
      // call case 6: other requests
      var call1869 = callmethodChecked(var_values, "pop", []);
      var var_cond = call1869;
      setLineNumber(678);    // compilenode array
      var array1870 = new PrimitiveGraceList([]);
      var var_body = array1870;
      setLineNumber(686);    // compilenode array
      var array1871 = new PrimitiveGraceList([]);
      var var_elseblock = array1871;
      setLineNumber(687);    // compilenode identifier
      var var_curelse = var_elseblock;
      setLineNumber(688);    // compilenode vardec
      var var_v;
      setLineNumber(689);    // compilenode identifier
      var var_localMin = var_minIndentLevel;
      setLineNumber(690);    // compilenode identifier
      var var_localStatementIndent = var_statementIndent;
      setLineNumber(691);    // compilenode identifier
      var opresult1874 = callmethodChecked(var_statementIndent, "+(1)", [1], new GraceNum(2));
      var var_minInd = opresult1874;
      var if1875 = GraceDone;
      setLineNumber(692);    // compilenode string
      var string1876 = new GraceString("then");
      // call case 6: other requests
      var call1879 = callmethodChecked(var_sym, "value", []);
      var opresult1881 = callmethodChecked(call1879, "==(1)", [1], string1876);
      var string1884 = new GraceString("identifier");
      // call case 4: self request
      onSelf = true;
      var call1885 = callmethodChecked(this, "accept(1)", [1], string1884);
      var opresult1887 = callmethodChecked(call1885, "&&(1)", [1], opresult1881);
      if (Grace_isTrue(opresult1887)) {
        setLineNumber(693);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call1889 = callmethodChecked(this, "next", []);
        var if1890 = GraceDone;
        setLineNumber(694);    // compilenode string
        var string1891 = new GraceString("lbrace");
        // call case 6: other requests
        var call1894 = callmethodChecked(var_sym, "kind", []);
        var opresult1896 = callmethodChecked(call1894, "\u2260(1)", [1], string1891);
        if (Grace_isTrue(opresult1896)) {
          setLineNumber(695);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call1899 = callmethodChecked(var_errormessages, "suggestion", []);
          var call1900 = callmethodChecked(call1899, "new", []);
          var var_suggestion = call1900;
          setLineNumber(696);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call1902 = callmethodChecked(this, "findClosingBrace(2)", [2], var_btok, GraceTrue);
          var var_closingBrace = call1902;
          var if1903 = GraceDone;
          setLineNumber(697);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call1906 = callmethodChecked(var_closingBrace, "found", []);
          var call1907 = callmethodChecked(call1906, "not", []);
          if (Grace_isTrue(call1907)) {
            var if1908 = GraceDone;
            setLineNumber(698);    // compilenode member
            // call case 6: other requests
            var call1911 = callmethodChecked(var_closingBrace, "tok", []);
            var opresult1913 = callmethodChecked(call1911, "==(1)", [1], var_lastToken);
            if (Grace_isTrue(opresult1913)) {
              setLineNumber(699);    // compilenode string
              var string1915 = new GraceString("then {}");
              // call case 6: other requests
              var call1916 = callmethodChecked(var_suggestion, "replaceToken(1)leading(1)trailing(1)with(1)", [1, 1, 1, 1], var_lastToken, GraceFalse, GraceTrue, string1915);
              if1908 = call1916;
            } else {
              setLineNumber(701);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              var call1921 = callmethodChecked(var_closingBrace, "tok", []);
              var call1922 = callmethodChecked(call1921, "line", []);
              var opresult1924 = callmethodChecked(call1922, "+(1)", [1], new GraceNum(0.1));
              var string1925 = new GraceString("}");
              // call case 6: other requests
              var call1926 = callmethodChecked(var_suggestion, "addLine(2)", [2], opresult1924, string1925);
              setLineNumber(702);    // compilenode string
              var string1928 = new GraceString("then {");
              // call case 6: other requests
              var call1929 = callmethodChecked(var_suggestion, "replaceToken(1)leading(1)trailing(1)with(1)", [1, 1, 1, 1], var_lastToken, GraceFalse, GraceTrue, string1928);
              if1908 = call1929;
            }
            if1903 = if1908;
          } else {
            setLineNumber(705);    // compilenode string
            var string1931 = new GraceString("then {");
            // call case 6: other requests
            var call1932 = callmethodChecked(var_suggestion, "replaceToken(1)leading(1)trailing(1)with(1)", [1, 1, 1, 1], var_lastToken, GraceFalse, GraceTrue, string1931);
            if1903 = call1932;
          }
          setLineNumber(707);    // compilenode string
          var string1934 = new GraceString("an if statement must have a '{' after the 'then'.");
          setLineNumber(708);    // compilenode member
          // call case 6: other requests
          var call1936 = callmethodChecked(var_lastToken, "line", []);
          // call case 6: other requests
          var call1938 = callmethodChecked(var_lastToken, "size", []);
          // call case 6: other requests
          var call1941 = callmethodChecked(var_lastToken, "linePos", []);
          var opresult1943 = callmethodChecked(call1941, "+(1)", [1], call1938);
          // call case 6: other requests
          setLineNumber(707);    // compilenode identifier
          var call1944 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string1934, call1936, opresult1943, var_suggestion);
          if1890 = call1944;
        }
        setLineNumber(710);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call1946 = callmethodChecked(this, "next", []);
        var if1947 = GraceDone;
        setLineNumber(711);    // compilenode member
        // call case 6: other requests
        var call1949 = callmethodChecked(var_lastToken, "line", []);
        // call case 6: other requests
        var call1952 = callmethodChecked(var_sym, "line", []);
        var opresult1954 = callmethodChecked(call1952, "==(1)", [1], call1949);
        if (Grace_isTrue(opresult1954)) {
          setLineNumber(712);    // compilenode member
          // call case 6: other requests
          var call1957 = callmethodChecked(var_sym, "linePos", []);
          var diff1959 = callmethodChecked(call1957, "-(1)", [1], new GraceNum(1));
          var_minIndentLevel = diff1959;
          if1947 = GraceDone;
        } else {
          setLineNumber(714);    // compilenode identifier
          var_minIndentLevel = var_minInd;
          if1947 = GraceDone;
        }
        setLineNumber(716);    // compilenode block
        var block1961 = new GraceBlock(this, 716, 0);
        block1961.real = function() {
          // call case 6: other requests
          var string1964 = new GraceString("rbrace");
          // call case 4: self request
          onSelf = true;
          var call1965 = callmethodChecked(this, "accept(1)", [1], string1964);
          var call1966 = callmethodChecked(call1965, "not", []);
          return call1966;
        };
        var block1967 = new GraceBlock(this, 716, 0);
        block1967.real = function() {
          var if1968 = GraceDone;
          setLineNumber(717);    // compilenode member
          // call case 6: other requests
          var block1971 = new GraceBlock(this, 717, 0);
          block1971.real = function() {
            // call case 4: self request
            onSelf = true;
            var call1973 = callmethodChecked(this, "statement", []);
            return call1973;
          };
          // call case 4: self request
          onSelf = true;
          var call1974 = callmethodChecked(this, "didConsume(1)", [1], block1971);
          var call1975 = callmethodChecked(call1974, "not", []);
          if (Grace_isTrue(call1975)) {
            setLineNumber(718);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call1978 = callmethodChecked(var_errormessages, "suggestion", []);
            var call1979 = callmethodChecked(call1978, "new", []);
            var var_suggestion = call1979;
            setLineNumber(719);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call1981 = callmethodChecked(this, "findClosingBrace(2)", [2], var_btok, GraceFalse);
            var var_closingBrace = call1981;
            var if1982 = GraceDone;
            setLineNumber(720);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call1985 = callmethodChecked(var_closingBrace, "found", []);
            var call1986 = callmethodChecked(call1985, "not", []);
            if (Grace_isTrue(call1986)) {
              var if1987 = GraceDone;
              setLineNumber(721);    // compilenode member
              // call case 6: other requests
              var call1990 = callmethodChecked(var_closingBrace, "tok", []);
              var opresult1992 = callmethodChecked(call1990, "==(1)", [1], var_lastToken);
              if (Grace_isTrue(opresult1992)) {
                setLineNumber(722);    // compilenode string
                var string1994 = new GraceString("}");
                // call case 6: other requests
                var call1995 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string1994, var_lastToken);
                if1987 = call1995;
              } else {
                setLineNumber(724);    // compilenode member
                // call case 6: other requests
                // call case 6: other requests
                var call2000 = callmethodChecked(var_closingBrace, "tok", []);
                var call2001 = callmethodChecked(call2000, "line", []);
                var opresult2003 = callmethodChecked(call2001, "+(1)", [1], new GraceNum(0.1));
                var string2004 = new GraceString("}");
                // call case 6: other requests
                var call2005 = callmethodChecked(var_suggestion, "addLine(2)", [2], opresult2003, string2004);
                if1987 = call2005;
              }
              if1982 = if1987;
            }
            setLineNumber(727);    // compilenode identifier
            // call case 6: other requests
            var call2007 = callmethodChecked(var_suggestion, "deleteToken(1)", [1], var_sym);
            setLineNumber(728);    // compilenode string
            var string2009 = new GraceString("an if statement must end with a '}'.");
            setLineNumber(729);    // compilenode member
            // call case 6: other requests
            var call2011 = callmethodChecked(var_sym, "line", []);
            // call case 6: other requests
            var call2013 = callmethodChecked(var_sym, "linePos", []);
            // call case 6: other requests
            setLineNumber(728);    // compilenode identifier
            var call2014 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string2009, call2011, call2013, var_suggestion);
            if1968 = call2014;
          }
          setLineNumber(731);    // compilenode member
          // call case 6: other requests
          var call2016 = callmethodChecked(var_values, "pop", []);
          var_v = call2016;
          setLineNumber(732);    // compilenode identifier
          // call case 6: other requests
          var call2018 = callmethodChecked(var_body, "push(1)", [1], var_v);
          return call2018;
        };
        // call case 5: prelude request
        var call2019 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block1961, block1967);
        setLineNumber(734);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call2021 = callmethodChecked(this, "next", []);
        setLineNumber(735);    // compilenode vardec
        var var_econd;
        setLineNumber(736);    // compilenode vardec
        var var_eif;
        setLineNumber(737);    // compilenode vardec
        var var_newelse;
        setLineNumber(738);    // compilenode vardec
        var var_ebody;
        setLineNumber(739);    // compilenode block
        var block2023 = new GraceBlock(this, 739, 0);
        block2023.real = function() {
          var string2024 = new GraceString("elseif");
          // call case 6: other requests
          var call2027 = callmethodChecked(var_sym, "value", []);
          var opresult2029 = callmethodChecked(call2027, "==(1)", [1], string2024);
          var string2032 = new GraceString("identifier");
          // call case 4: self request
          onSelf = true;
          var call2033 = callmethodChecked(this, "accept(1)", [1], string2032);
          var opresult2035 = callmethodChecked(call2033, "&&(1)", [1], opresult2029);
          return opresult2035;
        };
        var block2036 = new GraceBlock(this, 739, 0);
        block2036.real = function() {
          setLineNumber(743);    // compilenode identifier
          var_statementToken = var_sym;
          setLineNumber(744);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call2038 = callmethodChecked(this, "next", []);
          var if2039 = GraceDone;
          setLineNumber(745);    // compilenode block
          var block2040 = new GraceBlock(this, 745, 0);
          block2040.real = function() {
            var string2041 = new GraceString("lbrace");
            // call case 6: other requests
            var call2044 = callmethodChecked(var_sym, "kind", []);
            var opresult2046 = callmethodChecked(call2044, "==(1)", [1], string2041);
            return opresult2046;
          };
          var string2048 = new GraceString("lparen");
          // call case 6: other requests
          var call2051 = callmethodChecked(var_sym, "kind", []);
          var opresult2053 = callmethodChecked(call2051, "==(1)", [1], string2048);
          var opresult2055 = callmethodChecked(opresult2053, "||(1)", [1], block2040);
          if (Grace_isTrue(opresult2055)) {
            setLineNumber(746);    // compilenode member
            // call case 6: other requests
            var call2057 = callmethodChecked(var_sym, "value", []);
            if2039 = call2057;
          } else {
            var string2058 = new GraceString("-missing-");
            if2039 = string2058;
          }
          var var_elopener = if2039;
          var if2059 = GraceDone;
          setLineNumber(747);    // compilenode string
          var string2060 = new GraceString("(");
          var opresult2063 = callmethodChecked(var_elopener, "==(1)", [1], string2060);
          if (Grace_isTrue(opresult2063)) {
            var string2064 = new GraceString(")");
            if2059 = string2064;
          } else {
            var if2065 = GraceDone;
            setLineNumber(748);    // compilenode string
            var string2066 = new GraceString("{");
            var opresult2069 = callmethodChecked(var_elopener, "==(1)", [1], string2066);
            if (Grace_isTrue(opresult2069)) {
              var string2070 = new GraceString("}");
              if2065 = string2070;
            } else {
              var string2071 = new GraceString("-nothing-");
              if2065 = string2071;
            }
            if2059 = if2065;
          }
          var var_elcloser = if2059;
          var if2072 = GraceDone;
          setLineNumber(749);    // compilenode string
          var string2073 = new GraceString("-missing-");
          var opresult2076 = callmethodChecked(var_elopener, "==(1)", [1], string2073);
          if (Grace_isTrue(opresult2076)) {
            setLineNumber(750);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call2079 = callmethodChecked(var_errormessages, "suggestion", []);
            var call2080 = callmethodChecked(call2079, "new", []);
            var var_suggestion = call2080;
            setLineNumber(752);    // compilenode block
            var block2082 = new GraceBlock(this, 752, 1);
            setLineNumber(1);    // compilenode identifier
            block2082.real = function(var_t) {
              setLineNumber(754);    // compilenode string
              var string2083 = new GraceString("then");
              // call case 6: other requests
              var call2086 = callmethodChecked(var_t, "value", []);
              var opresult2088 = callmethodChecked(call2086, "==(1)", [1], string2083);
              var string2090 = new GraceString("identifier");
              // call case 6: other requests
              var call2093 = callmethodChecked(var_t, "kind", []);
              var opresult2095 = callmethodChecked(call2093, "==(1)", [1], string2090);
              var opresult2097 = callmethodChecked(opresult2095, "&&(1)", [1], opresult2088);
              setLineNumber(753);    // compilenode string
              var string2099 = new GraceString("lbrace");
              // call case 6: other requests
              var call2102 = callmethodChecked(var_t, "kind", []);
              var opresult2104 = callmethodChecked(call2102, "==(1)", [1], string2099);
              var string2106 = new GraceString("rbrace");
              // call case 6: other requests
              var call2109 = callmethodChecked(var_t, "kind", []);
              var opresult2111 = callmethodChecked(call2109, "==(1)", [1], string2106);
              var string2113 = new GraceString("rparen");
              // call case 6: other requests
              var call2116 = callmethodChecked(var_t, "kind", []);
              var opresult2118 = callmethodChecked(call2116, "==(1)", [1], string2113);
              var opresult2120 = callmethodChecked(opresult2118, "||(1)", [1], opresult2111);
              var opresult2122 = callmethodChecked(opresult2120, "||(1)", [1], opresult2104);
              var opresult2124 = callmethodChecked(opresult2122, "||(1)", [1], opresult2097);
              setLineNumber(752);    // compilenode member
              // call case 6: other requests
              var call2127 = callmethodChecked(var_statementToken, "line", []);
              // call case 6: other requests
              var call2130 = callmethodChecked(var_t, "line", []);
              var opresult2132 = callmethodChecked(call2130, "==(1)", [1], call2127);
              var opresult2134 = callmethodChecked(opresult2132, "&&(1)", [1], opresult2124);
              return opresult2134;
            };
            // call case 4: self request
            onSelf = true;
            var call2135 = callmethodChecked(this, "findNextToken(1)", [1], block2082);
            var var_nextTok = call2135;
            var if2136 = GraceDone;
            setLineNumber(755);    // compilenode identifier
            var opresult2139 = callmethodChecked(GraceFalse, "==(1)", [1], var_nextTok);
            if (Grace_isTrue(opresult2139)) {
              setLineNumber(756);    // compilenode string
              var string2141 = new GraceString(" (\u00abexpression\u00bb) then {");
              // call case 6: other requests
              var call2142 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string2141, var_statementToken);
              if2136 = call2142;
            } else {
              var if2143 = GraceDone;
              setLineNumber(757);    // compilenode string
              var string2144 = new GraceString("rparen");
              // call case 6: other requests
              var call2147 = callmethodChecked(var_nextTok, "kind", []);
              var opresult2149 = callmethodChecked(call2147, "==(1)", [1], string2144);
              if (Grace_isTrue(opresult2149)) {
                var if2150 = GraceDone;
                setLineNumber(758);    // compilenode identifier
                var opresult2153 = callmethodChecked(var_nextTok, "==(1)", [1], var_sym);
                if (Grace_isTrue(opresult2153)) {
                  setLineNumber(759);    // compilenode string
                  var string2155 = new GraceString("(\u00abexpression\u00bb");
                  // call case 6: other requests
                  var call2156 = callmethodChecked(var_suggestion, "insert(1)beforeToken(1)", [1, 1], string2155, var_sym);
                  if2150 = call2156;
                } else {
                  setLineNumber(761);    // compilenode string
                  var string2158 = new GraceString("(");
                  // call case 6: other requests
                  var call2159 = callmethodChecked(var_suggestion, "insert(1)beforeToken(1)", [1, 1], string2158, var_sym);
                  if2150 = call2159;
                }
                if2143 = if2150;
              } else {
                var if2160 = GraceDone;
                setLineNumber(763);    // compilenode string
                var string2161 = new GraceString("lbrace");
                // call case 6: other requests
                var call2164 = callmethodChecked(var_nextTok, "kind", []);
                var opresult2166 = callmethodChecked(call2164, "==(1)", [1], string2161);
                if (Grace_isTrue(opresult2166)) {
                  var if2167 = GraceDone;
                  setLineNumber(764);    // compilenode identifier
                  var opresult2170 = callmethodChecked(var_nextTok, "==(1)", [1], var_sym);
                  if (Grace_isTrue(opresult2170)) {
                    setLineNumber(765);    // compilenode string
                    var string2172 = new GraceString(" (\u00abexpression\u00bb) then");
                    // call case 6: other requests
                    var call2173 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string2172, var_statementToken);
                    if2167 = call2173;
                  } else {
                    setLineNumber(767);    // compilenode string
                    var string2175 = new GraceString("(");
                    // call case 6: other requests
                    var call2176 = callmethodChecked(var_suggestion, "insert(1)beforeToken(1)", [1, 1], string2175, var_sym);
                    setLineNumber(768);    // compilenode string
                    var string2178 = new GraceString(") then");
                    // call case 6: other requests
                    var call2180 = callmethodChecked(var_nextTok, "prev", []);
                    // call case 6: other requests
                    var call2181 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)andTrailingSpace(1)", [1, 1, 1], string2178, call2180, GraceTrue);
                    if2167 = call2181;
                  }
                  if2160 = if2167;
                } else {
                  var if2182 = GraceDone;
                  setLineNumber(770);    // compilenode string
                  var string2183 = new GraceString("identifier");
                  // call case 6: other requests
                  var call2186 = callmethodChecked(var_nextTok, "kind", []);
                  var opresult2188 = callmethodChecked(call2186, "==(1)", [1], string2183);
                  if (Grace_isTrue(opresult2188)) {
                    var if2189 = GraceDone;
                    setLineNumber(771);    // compilenode identifier
                    var opresult2192 = callmethodChecked(var_nextTok, "==(1)", [1], var_sym);
                    if (Grace_isTrue(opresult2192)) {
                      setLineNumber(772);    // compilenode string
                      var string2194 = new GraceString("(\u00abexpression\u00bb) ");
                      // call case 6: other requests
                      var call2195 = callmethodChecked(var_suggestion, "insert(1)beforeToken(1)", [1, 1], string2194, var_sym);
                      if2189 = call2195;
                    } else {
                      setLineNumber(774);    // compilenode string
                      var string2197 = new GraceString("(");
                      // call case 6: other requests
                      var call2198 = callmethodChecked(var_suggestion, "insert(1)beforeToken(1)", [1, 1], string2197, var_sym);
                      setLineNumber(775);    // compilenode string
                      var string2200 = new GraceString(")");
                      // call case 6: other requests
                      var call2202 = callmethodChecked(var_nextTok, "prev", []);
                      // call case 6: other requests
                      var call2203 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)andTrailingSpace(1)", [1, 1, 1], string2200, call2202, GraceTrue);
                      if2189 = call2203;
                    }
                    if2182 = if2189;
                  }
                  if2160 = if2182;
                }
                if2143 = if2160;
              }
              if2136 = if2143;
            }
            setLineNumber(779);    // compilenode string
            var string2205 = new GraceString("condition in parentheses or braces after the 'elseif'.");
            setLineNumber(778);    // compilenode string
            var string2207 = new GraceString("an elseif statement must have a ");
            var opresult2209 = callmethodChecked(string2207, "++(1)", [1], string2205);
            setLineNumber(780);    // compilenode member
            // call case 6: other requests
            var call2211 = callmethodChecked(var_sym, "line", []);
            // call case 6: other requests
            var call2213 = callmethodChecked(var_sym, "linePos", []);
            setLineNumber(781);    // compilenode identifier
            // call case 6: other requests
            setLineNumber(778);    // compilenode identifier
            var call2214 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], opresult2209, call2211, call2213, var_suggestion);
            if2072 = call2214;
          }
          setLineNumber(783);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call2216 = callmethodChecked(this, "next", []);
          var if2217 = GraceDone;
          setLineNumber(784);    // compilenode member
          // call case 6: other requests
          var block2220 = new GraceBlock(this, 784, 0);
          block2220.real = function() {
            // call case 4: self request
            onSelf = true;
            var call2222 = callmethodChecked(this, "expression(1)", [1], var_blocksOK);
            return call2222;
          };
          // call case 4: self request
          onSelf = true;
          var call2223 = callmethodChecked(this, "didConsume(1)", [1], block2220);
          var call2224 = callmethodChecked(call2223, "not", []);
          if (Grace_isTrue(call2224)) {
            setLineNumber(785);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call2227 = callmethodChecked(var_errormessages, "suggestion", []);
            var call2228 = callmethodChecked(call2227, "new", []);
            var var_suggestion = call2228;
            setLineNumber(787);    // compilenode block
            var block2230 = new GraceBlock(this, 787, 1);
            setLineNumber(1);    // compilenode identifier
            block2230.real = function(var_t) {
              setLineNumber(788);    // compilenode string
              var string2231 = new GraceString("rbrace");
              // call case 6: other requests
              var call2234 = callmethodChecked(var_t, "kind", []);
              var opresult2236 = callmethodChecked(call2234, "==(1)", [1], string2231);
              var string2238 = new GraceString("rparen");
              // call case 6: other requests
              var call2241 = callmethodChecked(var_t, "kind", []);
              var opresult2243 = callmethodChecked(call2241, "==(1)", [1], string2238);
              var opresult2245 = callmethodChecked(opresult2243, "||(1)", [1], opresult2236);
              setLineNumber(787);    // compilenode member
              // call case 6: other requests
              var call2248 = callmethodChecked(var_lastToken, "line", []);
              // call case 6: other requests
              var call2251 = callmethodChecked(var_t, "line", []);
              var opresult2253 = callmethodChecked(call2251, "==(1)", [1], call2248);
              var opresult2255 = callmethodChecked(opresult2253, "&&(1)", [1], opresult2245);
              return opresult2255;
            };
            // call case 4: self request
            onSelf = true;
            var call2256 = callmethodChecked(this, "findNextToken(1)", [1], block2230);
            var var_nextTok = call2256;
            var if2257 = GraceDone;
            setLineNumber(789);    // compilenode identifier
            var opresult2260 = callmethodChecked(GraceFalse, "==(1)", [1], var_nextTok);
            if (Grace_isTrue(opresult2260)) {
              setLineNumber(790);    // compilenode string
              var string2263 = new GraceString("rparen");
              var array2262 = new PrimitiveGraceList([string2263]);
              // call case 4: self request
              onSelf = true;
              var call2264 = callmethodChecked(this, "findNextValidToken(1)", [1], array2262);
              var_nextTok = call2264;
              var if2265 = GraceDone;
              setLineNumber(791);    // compilenode identifier
              var opresult2268 = callmethodChecked(var_nextTok, "==(1)", [1], var_sym);
              if (Grace_isTrue(opresult2268)) {
                setLineNumber(792);    // compilenode string
                var string2270 = new GraceString("\u00abexpression\u00bb) then {");
                // call case 6: other requests
                var call2271 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string2270, var_lastToken);
                if2265 = call2271;
              } else {
                setLineNumber(794);    // compilenode member
                // call case 6: other requests
                var call2274 = callmethodChecked(var_nextTok, "prev", []);
                var string2275 = new GraceString("\u00abexpression\u00bb) then {");
                // call case 6: other requests
                var call2276 = callmethodChecked(var_suggestion, "replaceTokenRange(2)leading(1)trailing(1)with(1)", [2, 1, 1, 1], var_sym, call2274, GraceTrue, GraceFalse, string2275);
                if2265 = call2276;
              }
              setLineNumber(796);    // compilenode string
              var string2278 = new GraceString("an elseif statement must have an expression in parentheses or braces after the 'elseif'.");
              setLineNumber(797);    // compilenode member
              // call case 6: other requests
              var call2280 = callmethodChecked(var_sym, "line", []);
              // call case 6: other requests
              var call2282 = callmethodChecked(var_sym, "linePos", []);
              // call case 6: other requests
              setLineNumber(796);    // compilenode identifier
              var call2283 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string2278, call2280, call2282, var_suggestion);
              if2257 = call2283;
            } else {
              var if2284 = GraceDone;
              setLineNumber(799);    // compilenode identifier
              var opresult2287 = callmethodChecked(var_nextTok, "==(1)", [1], var_sym);
              if (Grace_isTrue(opresult2287)) {
                setLineNumber(800);    // compilenode string
                var string2289 = new GraceString("\u00abexpression\u00bb");
                // call case 6: other requests
                var call2290 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string2289, var_lastToken);
                setLineNumber(801);    // compilenode string
                var string2292 = new GraceString("an elseif statement must have an expression in parentheses or braces after the 'elseif'.");
                setLineNumber(802);    // compilenode member
                // call case 6: other requests
                var call2294 = callmethodChecked(var_sym, "line", []);
                // call case 6: other requests
                var call2296 = callmethodChecked(var_sym, "linePos", []);
                // call case 6: other requests
                setLineNumber(801);    // compilenode identifier
                var call2297 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string2292, call2294, call2296, var_suggestion);
                if2284 = call2297;
              } else {
                setLineNumber(805);    // compilenode member
                // call case 6: other requests
                var call2300 = callmethodChecked(var_nextTok, "prev", []);
                var string2301 = new GraceString("\u00abexpression\u00bb");
                // call case 6: other requests
                var call2302 = callmethodChecked(var_suggestion, "replaceTokenRange(2)leading(1)trailing(1)with(1)", [2, 1, 1, 1], var_sym, call2300, GraceFalse, GraceTrue, string2301);
                setLineNumber(806);    // compilenode string
                var string2304 = new GraceString("4: An elseif statement must have an expression in parentheses or braces after the 'elseif'.");
                setLineNumber(807);    // compilenode member
                // call case 6: other requests
                var call2306 = callmethodChecked(var_sym, "line", []);
                // call case 6: other requests
                var call2308 = callmethodChecked(var_sym, "linePos", []);
                // call case 6: other requests
                var call2311 = callmethodChecked(var_nextTok, "linePos", []);
                var diff2313 = callmethodChecked(call2311, "-(1)", [1], new GraceNum(1));
                // call case 6: other requests
                setLineNumber(806);    // compilenode identifier
                var call2314 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)withSuggestion(1)", [1, 3, 1], string2304, call2306, call2308, diff2313, var_suggestion);
                if2284 = call2314;
              }
              if2257 = if2284;
            }
            if2217 = if2257;
          }
          var if2315 = GraceDone;
          setLineNumber(811);    // compilenode member
          // call case 6: other requests
          var call2318 = callmethodChecked(var_sym, "value", []);
          var opresult2320 = callmethodChecked(call2318, "\u2260(1)", [1], var_elcloser);
          if (Grace_isTrue(opresult2320)) {
            setLineNumber(812);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call2322 = callmethodChecked(this, "checkBadOperators", []);
            setLineNumber(813);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call2325 = callmethodChecked(var_errormessages, "suggestion", []);
            var call2326 = callmethodChecked(call2325, "new", []);
            var var_suggestion = call2326;
            setLineNumber(814);    // compilenode string
            var string2328 = new GraceString(")");
            // call case 6: other requests
            var call2329 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string2328, var_lastToken);
            setLineNumber(816);    // compilenode string
            var string2331 = new GraceString("'.");
            var string2334 = new GraceString("' must end with a '");
            var string2337 = new GraceString("'");
            var opresult2339 = callmethodChecked(string2337, "++(1)", [1], var_elopener);
            var opresult2341 = callmethodChecked(opresult2339, "++(1)", [1], string2334);
            var opresult2343 = callmethodChecked(opresult2341, "++(1)", [1], var_elcloser);
            var opresult2345 = callmethodChecked(opresult2343, "++(1)", [1], string2331);
            setLineNumber(815);    // compilenode string
            var string2347 = new GraceString("an expression beginning with a ");
            var opresult2349 = callmethodChecked(string2347, "++(1)", [1], opresult2345);
            setLineNumber(817);    // compilenode member
            // call case 6: other requests
            var call2351 = callmethodChecked(var_lastToken, "line", []);
            // call case 6: other requests
            var call2353 = callmethodChecked(var_lastToken, "size", []);
            // call case 6: other requests
            var call2356 = callmethodChecked(var_lastToken, "linePos", []);
            var opresult2358 = callmethodChecked(call2356, "+(1)", [1], call2353);
            setLineNumber(818);    // compilenode identifier
            // call case 6: other requests
            setLineNumber(815);    // compilenode identifier
            var call2359 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], opresult2349, call2351, opresult2358, var_suggestion);
            if2315 = call2359;
          }
          setLineNumber(820);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call2361 = callmethodChecked(this, "next", []);
          setLineNumber(821);    // compilenode member
          // call case 6: other requests
          var call2363 = callmethodChecked(var_values, "pop", []);
          var_econd = call2363;
          var if2364 = GraceDone;
          setLineNumber(823);    // compilenode string
          var string2365 = new GraceString("then");
          // call case 6: other requests
          var call2368 = callmethodChecked(var_sym, "value", []);
          var opresult2370 = callmethodChecked(call2368, "==(1)", [1], string2365);
          setLineNumber(822);    // compilenode string
          var string2373 = new GraceString("identifier");
          // call case 4: self request
          onSelf = true;
          var call2374 = callmethodChecked(this, "accept(1)", [1], string2373);
          var opresult2376 = callmethodChecked(call2374, "&&(1)", [1], opresult2370);
          if (Grace_isTrue(opresult2376)) {
            setLineNumber(824);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call2378 = callmethodChecked(this, "next", []);
            setLineNumber(825);    // compilenode array
            var array2379 = new PrimitiveGraceList([]);
            var_ebody = array2379;
            if2364 = GraceDone;
          } else {
            setLineNumber(827);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call2382 = callmethodChecked(var_errormessages, "suggestion", []);
            var call2383 = callmethodChecked(call2382, "new", []);
            var var_suggestion = call2383;
            var if2384 = GraceDone;
            setLineNumber(828);    // compilenode string
            var string2385 = new GraceString("lbrace");
            // call case 6: other requests
            var call2388 = callmethodChecked(var_sym, "kind", []);
            var opresult2390 = callmethodChecked(call2388, "==(1)", [1], string2385);
            if (Grace_isTrue(opresult2390)) {
              setLineNumber(829);    // compilenode identifier
              // call case 4: self request
              onSelf = true;
              var call2392 = callmethodChecked(this, "findClosingBrace(2)", [2], var_statementToken, GraceFalse);
              var var_closingBrace = call2392;
              var if2393 = GraceDone;
              setLineNumber(830);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              var call2396 = callmethodChecked(var_closingBrace, "found", []);
              var call2397 = callmethodChecked(call2396, "not", []);
              if (Grace_isTrue(call2397)) {
                var if2398 = GraceDone;
                setLineNumber(831);    // compilenode member
                // call case 6: other requests
                var call2401 = callmethodChecked(var_closingBrace, "tok", []);
                var opresult2403 = callmethodChecked(call2401, "==(1)", [1], var_sym);
                if (Grace_isTrue(opresult2403)) {
                  setLineNumber(832);    // compilenode string
                  var string2405 = new GraceString(" then {}");
                  // call case 6: other requests
                  var call2406 = callmethodChecked(var_suggestion, "replaceToken(1)leading(1)trailing(1)with(1)", [1, 1, 1, 1], var_sym, GraceTrue, GraceFalse, string2405);
                  if2398 = call2406;
                } else {
                  setLineNumber(834);    // compilenode string
                  var string2408 = new GraceString(" then {");
                  // call case 6: other requests
                  var call2409 = callmethodChecked(var_suggestion, "replaceToken(1)leading(1)trailing(1)with(1)", [1, 1, 1, 1], var_sym, GraceTrue, GraceFalse, string2408);
                  setLineNumber(835);    // compilenode member
                  // call case 6: other requests
                  // call case 6: other requests
                  var call2414 = callmethodChecked(var_closingBrace, "tok", []);
                  var call2415 = callmethodChecked(call2414, "line", []);
                  var opresult2417 = callmethodChecked(call2415, "+(1)", [1], new GraceNum(0.1));
                  var string2418 = new GraceString("}");
                  // call case 6: other requests
                  var call2419 = callmethodChecked(var_suggestion, "addLine(2)", [2], opresult2417, string2418);
                  if2398 = call2419;
                }
                if2393 = if2398;
              } else {
                setLineNumber(838);    // compilenode string
                var string2421 = new GraceString(" then {");
                // call case 6: other requests
                var call2422 = callmethodChecked(var_suggestion, "replaceToken(1)leading(1)trailing(1)with(1)", [1, 1, 1, 1], var_sym, GraceTrue, GraceFalse, string2421);
                if2393 = call2422;
              }
              if2384 = if2393;
            } else {
              setLineNumber(841);    // compilenode identifier
              // call case 4: self request
              onSelf = true;
              var call2424 = callmethodChecked(this, "findClosingBrace(2)", [2], var_statementToken, GraceTrue);
              var var_closingBrace = call2424;
              var if2425 = GraceDone;
              setLineNumber(842);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              var call2428 = callmethodChecked(var_closingBrace, "found", []);
              var call2429 = callmethodChecked(call2428, "not", []);
              if (Grace_isTrue(call2429)) {
                var if2430 = GraceDone;
                setLineNumber(843);    // compilenode member
                // call case 6: other requests
                var call2433 = callmethodChecked(var_closingBrace, "tok", []);
                var opresult2435 = callmethodChecked(call2433, "==(1)", [1], var_lastToken);
                if (Grace_isTrue(opresult2435)) {
                  setLineNumber(844);    // compilenode string
                  var string2437 = new GraceString(" then {}");
                  // call case 6: other requests
                  var call2438 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string2437, var_lastToken);
                  if2430 = call2438;
                } else {
                  setLineNumber(846);    // compilenode string
                  var string2440 = new GraceString(" then {");
                  // call case 6: other requests
                  var call2441 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string2440, var_lastToken);
                  setLineNumber(847);    // compilenode member
                  // call case 6: other requests
                  // call case 6: other requests
                  var call2446 = callmethodChecked(var_closingBrace, "tok", []);
                  var call2447 = callmethodChecked(call2446, "line", []);
                  var opresult2449 = callmethodChecked(call2447, "+(1)", [1], new GraceNum(0.1));
                  var string2450 = new GraceString("}");
                  // call case 6: other requests
                  var call2451 = callmethodChecked(var_suggestion, "addLine(2)", [2], opresult2449, string2450);
                  if2430 = call2451;
                }
                if2425 = if2430;
              } else {
                setLineNumber(850);    // compilenode string
                var string2453 = new GraceString(" then {");
                // call case 6: other requests
                var call2454 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string2453, var_lastToken);
                if2425 = call2454;
              }
              if2384 = if2425;
            }
            setLineNumber(853);    // compilenode string
            var string2456 = new GraceString("an elseif statement must have 'then' after the expression in parentheses.");
            setLineNumber(854);    // compilenode member
            // call case 6: other requests
            var call2458 = callmethodChecked(var_sym, "line", []);
            // call case 6: other requests
            var call2460 = callmethodChecked(var_sym, "linePos", []);
            // call case 6: other requests
            setLineNumber(853);    // compilenode identifier
            var call2461 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string2456, call2458, call2460, var_suggestion);
            if2364 = call2461;
          }
          var if2462 = GraceDone;
          setLineNumber(856);    // compilenode string
          var string2463 = new GraceString("lbrace");
          // call case 6: other requests
          var call2466 = callmethodChecked(var_sym, "kind", []);
          var opresult2468 = callmethodChecked(call2466, "\u2260(1)", [1], string2463);
          if (Grace_isTrue(opresult2468)) {
            setLineNumber(857);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call2471 = callmethodChecked(var_errormessages, "suggestion", []);
            var call2472 = callmethodChecked(call2471, "new", []);
            var var_suggestion = call2472;
            setLineNumber(858);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call2474 = callmethodChecked(this, "findClosingBrace(2)", [2], var_btok, GraceTrue);
            var var_closingBrace = call2474;
            var if2475 = GraceDone;
            setLineNumber(859);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call2478 = callmethodChecked(var_closingBrace, "found", []);
            var call2479 = callmethodChecked(call2478, "not", []);
            if (Grace_isTrue(call2479)) {
              var if2480 = GraceDone;
              setLineNumber(860);    // compilenode member
              // call case 6: other requests
              var call2483 = callmethodChecked(var_closingBrace, "tok", []);
              var opresult2485 = callmethodChecked(call2483, "==(1)", [1], var_lastToken);
              if (Grace_isTrue(opresult2485)) {
                setLineNumber(861);    // compilenode string
                var string2487 = new GraceString("then {}");
                // call case 6: other requests
                var call2488 = callmethodChecked(var_suggestion, "replaceToken(1)leading(1)trailing(1)with(1)", [1, 1, 1, 1], var_lastToken, GraceFalse, GraceTrue, string2487);
                if2480 = call2488;
              } else {
                setLineNumber(863);    // compilenode member
                // call case 6: other requests
                // call case 6: other requests
                var call2493 = callmethodChecked(var_closingBrace, "tok", []);
                var call2494 = callmethodChecked(call2493, "line", []);
                var opresult2496 = callmethodChecked(call2494, "+(1)", [1], new GraceNum(0.1));
                var string2497 = new GraceString("}");
                // call case 6: other requests
                var call2498 = callmethodChecked(var_suggestion, "addLine(2)", [2], opresult2496, string2497);
                setLineNumber(864);    // compilenode string
                var string2500 = new GraceString("then {");
                // call case 6: other requests
                var call2501 = callmethodChecked(var_suggestion, "replaceToken(1)leading(1)trailing(1)with(1)", [1, 1, 1, 1], var_lastToken, GraceFalse, GraceTrue, string2500);
                if2480 = call2501;
              }
              if2475 = if2480;
            } else {
              setLineNumber(867);    // compilenode string
              var string2503 = new GraceString("then {");
              // call case 6: other requests
              var call2504 = callmethodChecked(var_suggestion, "replaceToken(1)leading(1)trailing(1)with(1)", [1, 1, 1, 1], var_lastToken, GraceFalse, GraceTrue, string2503);
              if2475 = call2504;
            }
            setLineNumber(869);    // compilenode string
            var string2506 = new GraceString("an elseif statement must have a '{' after the 'then'.");
            setLineNumber(870);    // compilenode member
            // call case 6: other requests
            var call2508 = callmethodChecked(var_lastToken, "line", []);
            // call case 6: other requests
            var call2510 = callmethodChecked(var_lastToken, "size", []);
            // call case 6: other requests
            var call2513 = callmethodChecked(var_lastToken, "linePos", []);
            var opresult2515 = callmethodChecked(call2513, "+(1)", [1], call2510);
            // call case 6: other requests
            setLineNumber(869);    // compilenode identifier
            var call2516 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string2506, call2508, opresult2515, var_suggestion);
            if2462 = call2516;
          }
          setLineNumber(872);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call2518 = callmethodChecked(this, "next", []);
          var if2519 = GraceDone;
          setLineNumber(873);    // compilenode member
          // call case 6: other requests
          var call2521 = callmethodChecked(var_lastToken, "line", []);
          // call case 6: other requests
          var call2524 = callmethodChecked(var_sym, "line", []);
          var opresult2526 = callmethodChecked(call2524, "==(1)", [1], call2521);
          if (Grace_isTrue(opresult2526)) {
            setLineNumber(874);    // compilenode member
            // call case 6: other requests
            var call2529 = callmethodChecked(var_sym, "linePos", []);
            var diff2531 = callmethodChecked(call2529, "-(1)", [1], new GraceNum(1));
            var_minIndentLevel = diff2531;
            if2519 = GraceDone;
          } else {
            setLineNumber(876);    // compilenode identifier
            var_minIndentLevel = var_minInd;
            if2519 = GraceDone;
          }
          setLineNumber(878);    // compilenode block
          var block2533 = new GraceBlock(this, 878, 0);
          block2533.real = function() {
            // call case 6: other requests
            var string2536 = new GraceString("rbrace");
            // call case 4: self request
            onSelf = true;
            var call2537 = callmethodChecked(this, "accept(1)", [1], string2536);
            var call2538 = callmethodChecked(call2537, "not", []);
            return call2538;
          };
          var block2539 = new GraceBlock(this, 878, 0);
          block2539.real = function() {
            var if2540 = GraceDone;
            setLineNumber(879);    // compilenode member
            // call case 6: other requests
            var block2543 = new GraceBlock(this, 879, 0);
            block2543.real = function() {
              // call case 4: self request
              onSelf = true;
              var call2545 = callmethodChecked(this, "statement", []);
              return call2545;
            };
            // call case 4: self request
            onSelf = true;
            var call2546 = callmethodChecked(this, "didConsume(1)", [1], block2543);
            var call2547 = callmethodChecked(call2546, "not", []);
            if (Grace_isTrue(call2547)) {
              setLineNumber(880);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              var call2550 = callmethodChecked(var_errormessages, "suggestion", []);
              var call2551 = callmethodChecked(call2550, "new", []);
              var var_suggestion = call2551;
              setLineNumber(881);    // compilenode identifier
              // call case 4: self request
              onSelf = true;
              var call2553 = callmethodChecked(this, "findClosingBrace(2)", [2], var_btok, GraceFalse);
              var var_closingBrace = call2553;
              var if2554 = GraceDone;
              setLineNumber(882);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              var call2557 = callmethodChecked(var_closingBrace, "found", []);
              var call2558 = callmethodChecked(call2557, "not", []);
              if (Grace_isTrue(call2558)) {
                var if2559 = GraceDone;
                setLineNumber(883);    // compilenode member
                // call case 6: other requests
                var call2562 = callmethodChecked(var_closingBrace, "tok", []);
                var opresult2564 = callmethodChecked(call2562, "==(1)", [1], var_lastToken);
                if (Grace_isTrue(opresult2564)) {
                  setLineNumber(884);    // compilenode string
                  var string2566 = new GraceString("}");
                  // call case 6: other requests
                  var call2567 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string2566, var_lastToken);
                  if2559 = call2567;
                } else {
                  setLineNumber(886);    // compilenode member
                  // call case 6: other requests
                  // call case 6: other requests
                  var call2572 = callmethodChecked(var_closingBrace, "tok", []);
                  var call2573 = callmethodChecked(call2572, "line", []);
                  var opresult2575 = callmethodChecked(call2573, "+(1)", [1], new GraceNum(0.1));
                  var string2576 = new GraceString("}");
                  // call case 6: other requests
                  var call2577 = callmethodChecked(var_suggestion, "addLine(2)", [2], opresult2575, string2576);
                  if2559 = call2577;
                }
                if2554 = if2559;
              }
              setLineNumber(889);    // compilenode identifier
              // call case 6: other requests
              var call2579 = callmethodChecked(var_suggestion, "deleteToken(1)", [1], var_sym);
              setLineNumber(890);    // compilenode string
              var string2581 = new GraceString("an elseif statement must end with a '}'.");
              setLineNumber(891);    // compilenode member
              // call case 6: other requests
              var call2583 = callmethodChecked(var_sym, "line", []);
              // call case 6: other requests
              var call2585 = callmethodChecked(var_sym, "linePos", []);
              // call case 6: other requests
              setLineNumber(890);    // compilenode identifier
              var call2586 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string2581, call2583, call2585, var_suggestion);
              if2540 = call2586;
            }
            setLineNumber(893);    // compilenode member
            // call case 6: other requests
            var call2588 = callmethodChecked(var_values, "pop", []);
            var_v = call2588;
            setLineNumber(894);    // compilenode identifier
            // call case 6: other requests
            var call2590 = callmethodChecked(var_ebody, "push(1)", [1], var_v);
            return call2590;
          };
          // call case 5: prelude request
          var call2591 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block2533, block2539);
          setLineNumber(896);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call2593 = callmethodChecked(this, "next", []);
          setLineNumber(897);    // compilenode array
          var array2594 = new PrimitiveGraceList([]);
          var_newelse = array2594;
          setLineNumber(898);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call2596 = callmethodChecked(this, "newIf(3)", [3], var_econd, var_ebody, var_newelse);
          var_eif = call2596;
          setLineNumber(901);    // compilenode identifier
          // call case 6: other requests
          var call2598 = callmethodChecked(var_curelse, "push(1)", [1], var_eif);
          setLineNumber(904);    // compilenode identifier
          var_curelse = var_newelse;
          return GraceDone;
        };
        // call case 5: prelude request
        var call2599 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block2023, block2036);
        var if2600 = GraceDone;
        setLineNumber(906);    // compilenode string
        var string2601 = new GraceString("else");
        // call case 6: other requests
        var call2604 = callmethodChecked(var_sym, "value", []);
        var opresult2606 = callmethodChecked(call2604, "==(1)", [1], string2601);
        var string2609 = new GraceString("identifier");
        // call case 4: self request
        onSelf = true;
        var call2610 = callmethodChecked(this, "accept(1)", [1], string2609);
        var opresult2612 = callmethodChecked(call2610, "&&(1)", [1], opresult2606);
        if (Grace_isTrue(opresult2612)) {
          setLineNumber(907);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call2614 = callmethodChecked(this, "next", []);
          var if2615 = GraceDone;
          setLineNumber(908);    // compilenode string
          var string2616 = new GraceString("lbrace");
          // call case 6: other requests
          var call2619 = callmethodChecked(var_sym, "kind", []);
          var opresult2621 = callmethodChecked(call2619, "\u2260(1)", [1], string2616);
          if (Grace_isTrue(opresult2621)) {
            setLineNumber(909);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call2624 = callmethodChecked(var_errormessages, "suggestion", []);
            var call2625 = callmethodChecked(call2624, "new", []);
            var var_suggestion = call2625;
            setLineNumber(910);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call2627 = callmethodChecked(this, "findClosingBrace(2)", [2], var_btok, GraceTrue);
            var var_closingBrace = call2627;
            var if2628 = GraceDone;
            setLineNumber(911);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call2631 = callmethodChecked(var_closingBrace, "found", []);
            var call2632 = callmethodChecked(call2631, "not", []);
            if (Grace_isTrue(call2632)) {
              var if2633 = GraceDone;
              setLineNumber(912);    // compilenode member
              // call case 6: other requests
              var call2636 = callmethodChecked(var_closingBrace, "tok", []);
              var opresult2638 = callmethodChecked(call2636, "==(1)", [1], var_lastToken);
              if (Grace_isTrue(opresult2638)) {
                setLineNumber(913);    // compilenode string
                var string2640 = new GraceString("else {}");
                // call case 6: other requests
                var call2641 = callmethodChecked(var_suggestion, "replaceToken(1)leading(1)trailing(1)with(1)", [1, 1, 1, 1], var_lastToken, GraceFalse, GraceTrue, string2640);
                if2633 = call2641;
              } else {
                setLineNumber(915);    // compilenode member
                // call case 6: other requests
                // call case 6: other requests
                var call2646 = callmethodChecked(var_closingBrace, "tok", []);
                var call2647 = callmethodChecked(call2646, "line", []);
                var opresult2649 = callmethodChecked(call2647, "+(1)", [1], new GraceNum(0.1));
                var string2650 = new GraceString("}");
                // call case 6: other requests
                var call2651 = callmethodChecked(var_suggestion, "addLine(2)", [2], opresult2649, string2650);
                setLineNumber(916);    // compilenode string
                var string2653 = new GraceString("else {");
                // call case 6: other requests
                var call2654 = callmethodChecked(var_suggestion, "replaceToken(1)leading(1)trailing(1)with(1)", [1, 1, 1, 1], var_lastToken, GraceFalse, GraceTrue, string2653);
                if2633 = call2654;
              }
              if2628 = if2633;
            } else {
              setLineNumber(919);    // compilenode string
              var string2656 = new GraceString("else {");
              // call case 6: other requests
              var call2657 = callmethodChecked(var_suggestion, "replaceToken(1)leading(1)trailing(1)with(1)", [1, 1, 1, 1], var_lastToken, GraceFalse, GraceTrue, string2656);
              if2628 = call2657;
            }
            setLineNumber(921);    // compilenode string
            var string2659 = new GraceString("an else statement must have a '{' after the 'else'.");
            setLineNumber(922);    // compilenode member
            // call case 6: other requests
            var call2661 = callmethodChecked(var_lastToken, "line", []);
            // call case 6: other requests
            var call2663 = callmethodChecked(var_lastToken, "size", []);
            // call case 6: other requests
            var call2666 = callmethodChecked(var_lastToken, "linePos", []);
            var opresult2668 = callmethodChecked(call2666, "+(1)", [1], call2663);
            // call case 6: other requests
            setLineNumber(921);    // compilenode identifier
            var call2669 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string2659, call2661, opresult2668, var_suggestion);
            if2615 = call2669;
          }
          setLineNumber(924);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call2671 = callmethodChecked(this, "next", []);
          var if2672 = GraceDone;
          setLineNumber(927);    // compilenode member
          // call case 6: other requests
          var call2674 = callmethodChecked(var_lastToken, "line", []);
          // call case 6: other requests
          var call2677 = callmethodChecked(var_sym, "line", []);
          var opresult2679 = callmethodChecked(call2677, "==(1)", [1], call2674);
          if (Grace_isTrue(opresult2679)) {
            setLineNumber(928);    // compilenode member
            // call case 6: other requests
            var call2682 = callmethodChecked(var_sym, "linePos", []);
            var diff2684 = callmethodChecked(call2682, "-(1)", [1], new GraceNum(1));
            var_minIndentLevel = diff2684;
            if2672 = GraceDone;
          } else {
            setLineNumber(930);    // compilenode identifier
            var_minIndentLevel = var_minInd;
            if2672 = GraceDone;
          }
          setLineNumber(932);    // compilenode block
          var block2686 = new GraceBlock(this, 932, 0);
          block2686.real = function() {
            // call case 6: other requests
            var string2689 = new GraceString("rbrace");
            // call case 4: self request
            onSelf = true;
            var call2690 = callmethodChecked(this, "accept(1)", [1], string2689);
            var call2691 = callmethodChecked(call2690, "not", []);
            return call2691;
          };
          var block2692 = new GraceBlock(this, 932, 0);
          block2692.real = function() {
            var if2693 = GraceDone;
            setLineNumber(933);    // compilenode member
            // call case 6: other requests
            var block2696 = new GraceBlock(this, 933, 0);
            block2696.real = function() {
              // call case 4: self request
              onSelf = true;
              var call2698 = callmethodChecked(this, "statement", []);
              return call2698;
            };
            // call case 4: self request
            onSelf = true;
            var call2699 = callmethodChecked(this, "didConsume(1)", [1], block2696);
            var call2700 = callmethodChecked(call2699, "not", []);
            if (Grace_isTrue(call2700)) {
              setLineNumber(934);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              var call2703 = callmethodChecked(var_errormessages, "suggestion", []);
              var call2704 = callmethodChecked(call2703, "new", []);
              var var_suggestion = call2704;
              setLineNumber(935);    // compilenode identifier
              // call case 4: self request
              onSelf = true;
              var call2706 = callmethodChecked(this, "findClosingBrace(2)", [2], var_btok, GraceFalse);
              var var_closingBrace = call2706;
              var if2707 = GraceDone;
              setLineNumber(936);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              var call2710 = callmethodChecked(var_closingBrace, "found", []);
              var call2711 = callmethodChecked(call2710, "not", []);
              if (Grace_isTrue(call2711)) {
                var if2712 = GraceDone;
                setLineNumber(937);    // compilenode member
                // call case 6: other requests
                var call2715 = callmethodChecked(var_closingBrace, "tok", []);
                var opresult2717 = callmethodChecked(call2715, "==(1)", [1], var_lastToken);
                if (Grace_isTrue(opresult2717)) {
                  setLineNumber(938);    // compilenode string
                  var string2719 = new GraceString("}");
                  // call case 6: other requests
                  var call2720 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string2719, var_lastToken);
                  if2712 = call2720;
                } else {
                  setLineNumber(940);    // compilenode member
                  // call case 6: other requests
                  // call case 6: other requests
                  var call2725 = callmethodChecked(var_closingBrace, "tok", []);
                  var call2726 = callmethodChecked(call2725, "line", []);
                  var opresult2728 = callmethodChecked(call2726, "+(1)", [1], new GraceNum(0.1));
                  var string2729 = new GraceString("}");
                  // call case 6: other requests
                  var call2730 = callmethodChecked(var_suggestion, "addLine(2)", [2], opresult2728, string2729);
                  if2712 = call2730;
                }
                if2707 = if2712;
              }
              setLineNumber(943);    // compilenode identifier
              // call case 6: other requests
              var call2732 = callmethodChecked(var_suggestion, "deleteToken(1)", [1], var_sym);
              setLineNumber(944);    // compilenode string
              var string2734 = new GraceString("an else statement must end with a '}'.");
              setLineNumber(945);    // compilenode member
              // call case 6: other requests
              var call2736 = callmethodChecked(var_sym, "line", []);
              // call case 6: other requests
              var call2738 = callmethodChecked(var_sym, "linePos", []);
              // call case 6: other requests
              setLineNumber(944);    // compilenode identifier
              var call2739 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string2734, call2736, call2738, var_suggestion);
              if2693 = call2739;
            }
            setLineNumber(947);    // compilenode member
            // call case 6: other requests
            var call2741 = callmethodChecked(var_values, "pop", []);
            var_v = call2741;
            setLineNumber(948);    // compilenode identifier
            // call case 6: other requests
            var call2743 = callmethodChecked(var_curelse, "push(1)", [1], var_v);
            return call2743;
          };
          // call case 5: prelude request
          var call2744 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block2686, block2692);
          setLineNumber(950);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call2746 = callmethodChecked(this, "next", []);
          if2600 = call2746;
        }
        setLineNumber(952);    // compilenode member
        // call case 6: other requests
        var call2749 = callmethodChecked(var_btok, "line", []);
        // call case 6: other requests
        var call2751 = callmethodChecked(var_btok, "linePos", []);
        // call case 6: other requests
        var call2752 = callmethodChecked(var_util, "setPosition(2)", [2], call2749, call2751);
        setLineNumber(953);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call2754 = callmethodChecked(this, "newIf(3)", [3], var_cond, var_body, var_elseblock);
        var var_o = call2754;
        setLineNumber(954);    // compilenode identifier
        // call case 6: other requests
        var call2756 = callmethodChecked(var_values, "push(1)", [1], var_o);
        if1875 = call2756;
      } else {
        setLineNumber(957);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call2759 = callmethodChecked(var_errormessages, "suggestion", []);
        var call2760 = callmethodChecked(call2759, "new", []);
        var var_suggestion = call2760;
        var if2761 = GraceDone;
        setLineNumber(958);    // compilenode string
        var string2762 = new GraceString("lbrace");
        // call case 6: other requests
        var call2765 = callmethodChecked(var_sym, "kind", []);
        var opresult2767 = callmethodChecked(call2765, "==(1)", [1], string2762);
        if (Grace_isTrue(opresult2767)) {
          setLineNumber(959);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call2769 = callmethodChecked(this, "findClosingBrace(2)", [2], var_btok, GraceFalse);
          var var_closingBrace = call2769;
          var if2770 = GraceDone;
          setLineNumber(960);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call2773 = callmethodChecked(var_closingBrace, "found", []);
          var call2774 = callmethodChecked(call2773, "not", []);
          if (Grace_isTrue(call2774)) {
            var if2775 = GraceDone;
            setLineNumber(961);    // compilenode member
            // call case 6: other requests
            var call2778 = callmethodChecked(var_closingBrace, "tok", []);
            var opresult2780 = callmethodChecked(call2778, "==(1)", [1], var_sym);
            if (Grace_isTrue(opresult2780)) {
              setLineNumber(962);    // compilenode string
              var string2782 = new GraceString(" then {}");
              // call case 6: other requests
              var call2783 = callmethodChecked(var_suggestion, "replaceToken(1)leading(1)trailing(1)with(1)", [1, 1, 1, 1], var_sym, GraceTrue, GraceFalse, string2782);
              if2775 = call2783;
            } else {
              setLineNumber(964);    // compilenode string
              var string2785 = new GraceString(" then {");
              // call case 6: other requests
              var call2786 = callmethodChecked(var_suggestion, "replaceToken(1)leading(1)trailing(1)with(1)", [1, 1, 1, 1], var_sym, GraceTrue, GraceFalse, string2785);
              setLineNumber(965);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              var call2791 = callmethodChecked(var_closingBrace, "tok", []);
              var call2792 = callmethodChecked(call2791, "line", []);
              var opresult2794 = callmethodChecked(call2792, "+(1)", [1], new GraceNum(0.1));
              var string2795 = new GraceString("}");
              // call case 6: other requests
              var call2796 = callmethodChecked(var_suggestion, "addLine(2)", [2], opresult2794, string2795);
              if2775 = call2796;
            }
            if2770 = if2775;
          } else {
            setLineNumber(968);    // compilenode string
            var string2798 = new GraceString(" then {");
            // call case 6: other requests
            var call2799 = callmethodChecked(var_suggestion, "replaceToken(1)leading(1)trailing(1)with(1)", [1, 1, 1, 1], var_sym, GraceTrue, GraceFalse, string2798);
            if2770 = call2799;
          }
          if2761 = if2770;
        } else {
          setLineNumber(971);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call2801 = callmethodChecked(this, "findClosingBrace(2)", [2], var_btok, GraceTrue);
          var var_closingBrace = call2801;
          var if2802 = GraceDone;
          setLineNumber(972);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call2805 = callmethodChecked(var_closingBrace, "found", []);
          var call2806 = callmethodChecked(call2805, "not", []);
          if (Grace_isTrue(call2806)) {
            var if2807 = GraceDone;
            setLineNumber(973);    // compilenode member
            // call case 6: other requests
            var call2810 = callmethodChecked(var_closingBrace, "tok", []);
            var opresult2812 = callmethodChecked(call2810, "==(1)", [1], var_lastToken);
            if (Grace_isTrue(opresult2812)) {
              setLineNumber(974);    // compilenode string
              var string2814 = new GraceString(" then {}");
              // call case 6: other requests
              var call2815 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string2814, var_lastToken);
              if2807 = call2815;
            } else {
              setLineNumber(976);    // compilenode string
              var string2817 = new GraceString(" then {");
              // call case 6: other requests
              var call2818 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string2817, var_lastToken);
              setLineNumber(977);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              var call2823 = callmethodChecked(var_closingBrace, "tok", []);
              var call2824 = callmethodChecked(call2823, "line", []);
              var opresult2826 = callmethodChecked(call2824, "+(1)", [1], new GraceNum(0.1));
              var string2827 = new GraceString("}");
              // call case 6: other requests
              var call2828 = callmethodChecked(var_suggestion, "addLine(2)", [2], opresult2826, string2827);
              if2807 = call2828;
            }
            if2802 = if2807;
          } else {
            setLineNumber(980);    // compilenode string
            var string2830 = new GraceString(" then {");
            // call case 6: other requests
            var call2831 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string2830, var_lastToken);
            if2802 = call2831;
          }
          if2761 = if2802;
        }
        setLineNumber(984);    // compilenode string
        var string2833 = new GraceString("the condition in parentheses.");
        setLineNumber(983);    // compilenode string
        var string2835 = new GraceString("an if statement must have 'then' after ");
        var opresult2837 = callmethodChecked(string2835, "++(1)", [1], string2833);
        setLineNumber(985);    // compilenode member
        // call case 6: other requests
        var call2839 = callmethodChecked(var_sym, "line", []);
        // call case 6: other requests
        var call2841 = callmethodChecked(var_sym, "linePos", []);
        // call case 6: other requests
        setLineNumber(983);    // compilenode identifier
        var call2842 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], opresult2837, call2839, call2841, var_suggestion);
        if1875 = call2842;
      }
      setLineNumber(987);    // compilenode identifier
      var_minIndentLevel = var_localMin;
      setLineNumber(988);    // compilenode identifier
      var_statementIndent = var_localStatementIndent;
      if1527 = GraceDone;
    }
    return if1527;
  };
  func1526.paramCounts = [0];
  this.methods["doif"] = func1526;
  func1526.definitionLine = 592;
  func1526.definitionModule = "parser";
  setLineNumber(994);    // compilenode method
  var func2843 = function(argcv) {    // method identifier
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    var if2844 = GraceDone;
    setLineNumber(995);    // compilenode string
    var string2846 = new GraceString("identifier");
    // call case 4: self request
    onSelf = true;
    var call2847 = callmethodChecked(this, "accept(1)", [1], string2846);
    if (Grace_isTrue(call2847)) {
      var if2848 = GraceDone;
      setLineNumber(996);    // compilenode string
      var string2849 = new GraceString("if");
      // call case 6: other requests
      var call2852 = callmethodChecked(var_sym, "value", []);
      var opresult2854 = callmethodChecked(call2852, "==(1)", [1], string2849);
      if (Grace_isTrue(opresult2854)) {
        setLineNumber(997);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call2856 = callmethodChecked(this, "doif", []);
        if2848 = call2856;
      } else {
        setLineNumber(999);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call2858 = callmethodChecked(this, "pushidentifier", []);
        if2848 = call2858;
      }
      if2844 = if2848;
    }
    return if2844;
  };
  func2843.paramCounts = [0];
  this.methods["identifier"] = func2843;
  func2843.definitionLine = 994;
  func2843.definitionModule = "parser";
  setLineNumber(1004);    // compilenode method
  var func2859 = function(argcv) {    // method prefixop
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    var if2860 = GraceDone;
    setLineNumber(1005);    // compilenode string
    var string2862 = new GraceString("op");
    // call case 4: self request
    onSelf = true;
    var call2863 = callmethodChecked(this, "accept(1)", [1], string2862);
    if (Grace_isTrue(call2863)) {
      setLineNumber(1006);    // compilenode member
      // call case 6: other requests
      var call2865 = callmethodChecked(var_sym, "value", []);
      var var_op = call2865;
      setLineNumber(1007);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call2867 = callmethodChecked(this, "next", []);
      var if2868 = GraceDone;
      setLineNumber(1008);    // compilenode string
      var string2870 = new GraceString("lparen");
      // call case 4: self request
      onSelf = true;
      var call2871 = callmethodChecked(this, "accept(1)", [1], string2870);
      if (Grace_isTrue(call2871)) {
        setLineNumber(1009);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call2873 = callmethodChecked(this, "next", []);
        var if2874 = GraceDone;
        setLineNumber(1010);    // compilenode member
        // call case 6: other requests
        var block2877 = new GraceBlock(this, 1010, 0);
        block2877.real = function() {
          // call case 4: self request
          onSelf = true;
          var call2879 = callmethodChecked(this, "expression(1)", [1], var_blocksOK);
          return call2879;
        };
        // call case 4: self request
        onSelf = true;
        var call2880 = callmethodChecked(this, "didConsume(1)", [1], block2877);
        var call2881 = callmethodChecked(call2880, "not", []);
        if (Grace_isTrue(call2881)) {
          setLineNumber(1011);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call2884 = callmethodChecked(var_errormessages, "suggestion", []);
          var call2885 = callmethodChecked(call2884, "new", []);
          var var_suggestion = call2885;
          setLineNumber(1012);    // compilenode string
          var string2888 = new GraceString("rparen");
          var array2887 = new PrimitiveGraceList([string2888]);
          // call case 4: self request
          onSelf = true;
          var call2889 = callmethodChecked(this, "findNextValidToken(1)", [1], array2887);
          var var_nextTok = call2889;
          var if2890 = GraceDone;
          setLineNumber(1013);    // compilenode identifier
          var opresult2893 = callmethodChecked(var_nextTok, "==(1)", [1], var_sym);
          if (Grace_isTrue(opresult2893)) {
            setLineNumber(1014);    // compilenode string
            var string2895 = new GraceString("\u00abexpression\u00bb");
            // call case 6: other requests
            var call2896 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string2895, var_lastToken);
            if2890 = call2896;
          } else {
            setLineNumber(1016);    // compilenode member
            // call case 6: other requests
            var call2899 = callmethodChecked(var_nextTok, "prev", []);
            var string2900 = new GraceString("\u00abexpression\u00bb");
            // call case 6: other requests
            var call2901 = callmethodChecked(var_suggestion, "replaceTokenRange(2)leading(1)trailing(1)with(1)", [2, 1, 1, 1], var_sym, call2899, GraceTrue, GraceFalse, string2900);
            if2890 = call2901;
          }
          setLineNumber(1018);    // compilenode string
          var string2903 = new GraceString("parentheses must contain a valid expression.");
          setLineNumber(1019);    // compilenode member
          // call case 6: other requests
          var call2905 = callmethodChecked(var_sym, "line", []);
          // call case 6: other requests
          var call2907 = callmethodChecked(var_sym, "linePos", []);
          // call case 6: other requests
          setLineNumber(1018);    // compilenode identifier
          var call2908 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string2903, call2905, call2907, var_suggestion);
          if2874 = call2908;
        }
        var if2909 = GraceDone;
        setLineNumber(1021);    // compilenode string
        var string2910 = new GraceString("rparen");
        // call case 6: other requests
        var call2913 = callmethodChecked(var_sym, "kind", []);
        var opresult2915 = callmethodChecked(call2913, "\u2260(1)", [1], string2910);
        if (Grace_isTrue(opresult2915)) {
          setLineNumber(1022);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call2917 = callmethodChecked(this, "checkBadOperators", []);
          setLineNumber(1023);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call2920 = callmethodChecked(var_errormessages, "suggestion", []);
          var call2921 = callmethodChecked(call2920, "new", []);
          var var_suggestion = call2921;
          setLineNumber(1024);    // compilenode string
          var string2923 = new GraceString(")");
          // call case 6: other requests
          var call2924 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string2923, var_lastToken);
          setLineNumber(1025);    // compilenode string
          var string2926 = new GraceString("an expression beginning with a '(' must end with a ')'.");
          setLineNumber(1026);    // compilenode member
          // call case 6: other requests
          var call2928 = callmethodChecked(var_lastToken, "line", []);
          // call case 6: other requests
          var call2930 = callmethodChecked(var_lastToken, "size", []);
          // call case 6: other requests
          var call2933 = callmethodChecked(var_lastToken, "linePos", []);
          var opresult2935 = callmethodChecked(call2933, "+(1)", [1], call2930);
          // call case 6: other requests
          setLineNumber(1025);    // compilenode identifier
          var call2936 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string2926, call2928, opresult2935, var_suggestion);
          if2909 = call2936;
        }
        setLineNumber(1028);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call2938 = callmethodChecked(this, "next", []);
        if2868 = call2938;
      } else {
        var if2939 = GraceDone;
        setLineNumber(1030);    // compilenode member
        // call case 6: other requests
        var block2942 = new GraceBlock(this, 1030, 0);
        block2942.real = function() {
          // call case 4: self request
          onSelf = true;
          var call2944 = callmethodChecked(this, "term", []);
          return call2944;
        };
        // call case 4: self request
        onSelf = true;
        var call2945 = callmethodChecked(this, "didConsume(1)", [1], block2942);
        var call2946 = callmethodChecked(call2945, "not", []);
        if (Grace_isTrue(call2946)) {
          setLineNumber(1031);    // compilenode array
          var array2947 = new PrimitiveGraceList([]);
          var var_suggestions = array2947;
          setLineNumber(1032);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call2950 = callmethodChecked(var_errormessages, "suggestion", []);
          var call2951 = callmethodChecked(call2950, "new", []);
          var var_suggestion = call2951;
          setLineNumber(1033);    // compilenode string
          var string2954 = new GraceString("rparen");
          var array2953 = new PrimitiveGraceList([string2954]);
          // call case 4: self request
          onSelf = true;
          var call2955 = callmethodChecked(this, "findNextValidToken(1)", [1], array2953);
          var var_nextTok = call2955;
          var if2956 = GraceDone;
          setLineNumber(1034);    // compilenode identifier
          var opresult2959 = callmethodChecked(var_nextTok, "==(1)", [1], var_sym);
          if (Grace_isTrue(opresult2959)) {
            setLineNumber(1035);    // compilenode string
            var string2961 = new GraceString("\u00abexpression\u00bb");
            // call case 6: other requests
            var call2962 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string2961, var_lastToken);
            if2956 = call2962;
          } else {
            setLineNumber(1037);    // compilenode member
            // call case 6: other requests
            var call2965 = callmethodChecked(var_nextTok, "prev", []);
            var string2966 = new GraceString("\u00abexpression\u00bb");
            // call case 6: other requests
            var call2967 = callmethodChecked(var_suggestion, "replaceTokenRange(2)leading(1)trailing(1)with(1)", [2, 1, 1, 1], var_sym, call2965, GraceTrue, GraceFalse, string2966);
            if2956 = call2967;
          }
          setLineNumber(1039);    // compilenode identifier
          // call case 6: other requests
          var call2969 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
          var if2970 = GraceDone;
          setLineNumber(1040);    // compilenode string
          var string2971 = new GraceString("bind");
          // call case 6: other requests
          // call case 6: other requests
          var call2975 = callmethodChecked(var_lastToken, "prev", []);
          var call2976 = callmethodChecked(call2975, "kind", []);
          var opresult2978 = callmethodChecked(call2976, "==(1)", [1], string2971);
          if (Grace_isTrue(opresult2978)) {
            setLineNumber(1041);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call2981 = callmethodChecked(var_errormessages, "suggestion", []);
            var call2982 = callmethodChecked(call2981, "new", []);
            var_suggestion = call2982;
            setLineNumber(1042);    // compilenode member
            // call case 6: other requests
            var call2985 = callmethodChecked(var_nextTok, "prev", []);
            // call case 6: other requests
            var call2986 = callmethodChecked(var_suggestion, "deleteTokenRange(2)leading(1)trailing(1)", [2, 1, 1], var_lastToken, call2985, GraceTrue, GraceFalse);
            setLineNumber(1043);    // compilenode member
            // call case 6: other requests
            var call2989 = callmethodChecked(var_lastToken, "prev", []);
            // call case 6: other requests
            var call2990 = callmethodChecked(var_suggestion, "deleteToken(1)leading(1)trailing(1)", [1, 1, 1], call2989, GraceTrue, GraceFalse);
            setLineNumber(1044);    // compilenode identifier
            // call case 6: other requests
            var call2992 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
            if2970 = call2992;
          }
          setLineNumber(1046);    // compilenode string
          var string2994 = new GraceString("a prefix operator must be followed by an expression.");
          setLineNumber(1047);    // compilenode member
          // call case 6: other requests
          var call2996 = callmethodChecked(var_lastToken, "line", []);
          // call case 6: other requests
          var call2998 = callmethodChecked(var_lastToken, "size", []);
          // call case 6: other requests
          var call3001 = callmethodChecked(var_lastToken, "linePos", []);
          var opresult3003 = callmethodChecked(call3001, "+(1)", [1], call2998);
          // call case 6: other requests
          setLineNumber(1046);    // compilenode identifier
          var call3004 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestions(1)", [1, 2, 1], string2994, call2996, opresult3003, var_suggestions);
          if2939 = call3004;
        }
        if2868 = if2939;
      }
      setLineNumber(1050);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call3006 = callmethodChecked(this, "dotrest(1)", [1], var_blocksOK);
      setLineNumber(1051);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call3008 = callmethodChecked(this, "callrest(1)", [1], var_blocksOK);
      setLineNumber(1052);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call3010 = callmethodChecked(this, "postfixsquare", []);
      setLineNumber(1053);    // compilenode member
      // call case 6: other requests
      var call3012 = callmethodChecked(var_values, "pop", []);
      var var_rcvr = call3012;
      setLineNumber(1055);    // compilenode string
      var string3017 = new GraceString("prefix");
      var opresult3019 = callmethodChecked(string3017, "++(1)", [1], var_op);
      var array3020 = new PrimitiveGraceList([]);
      // call case 6: other requests
      // call case 6: other requests
      var call3022 = callmethodChecked(var_ast, "requestPart", []);
      var call3023 = callmethodChecked(call3022, "request(1)withArgs(1)", [1, 1], opresult3019, array3020);
      var array3014 = new PrimitiveGraceList([call3023]);
      // call case 6: other requests
      setLineNumber(1054);    // compilenode member
      // call case 6: other requests
      var call3025 = callmethodChecked(var_ast, "callNode", []);
      var call3026 = callmethodChecked(call3025, "new(2)", [2], var_rcvr, array3014);
      var var_call = call3026;
      setLineNumber(1056);    // compilenode identifier
      // call case 6: other requests
      var call3028 = callmethodChecked(var_values, "push(1)", [1], var_call);
      if2860 = call3028;
    }
    return if2860;
  };
  func2859.paramCounts = [0];
  this.methods["prefixop"] = func2859;
  func2859.definitionLine = 1004;
  func2859.definitionModule = "parser";
  setLineNumber(1060);    // compilenode method
  var func3029 = function(argcv) {    // method generic
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    var if3030 = GraceDone;
    setLineNumber(1061);    // compilenode string
    var string3032 = new GraceString("lgeneric");
    // call case 4: self request
    onSelf = true;
    var call3033 = callmethodChecked(this, "accept(1)", [1], string3032);
    if (Grace_isTrue(call3033)) {
      setLineNumber(1062);    // compilenode member
      // call case 6: other requests
      var call3035 = callmethodChecked(var_values, "pop", []);
      var var_id = call3035;
      setLineNumber(1063);    // compilenode array
      var array3036 = new PrimitiveGraceList([]);
      var var_gens = array3036;
      setLineNumber(1064);    // compilenode identifier
      var var_startToken = var_sym;
      setLineNumber(1065);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call3038 = callmethodChecked(this, "next", []);
      setLineNumber(1066);    // compilenode block
      var block3040 = new GraceBlock(this, 1066, 0);
      block3040.real = function() {
        var string3042 = new GraceString("identifier");
        // call case 4: self request
        onSelf = true;
        var call3043 = callmethodChecked(this, "accept(1)", [1], string3042);
        return call3043;
      };
      var block3044 = new GraceBlock(this, 1066, 0);
      block3044.real = function() {
        setLineNumber(1067);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call3046 = callmethodChecked(this, "identifier", []);
        setLineNumber(1068);    // compilenode block
        var block3048 = new GraceBlock(this, 1068, 0);
        block3048.real = function() {
          var string3050 = new GraceString("dot");
          // call case 4: self request
          onSelf = true;
          var call3051 = callmethodChecked(this, "accept(1)", [1], string3050);
          return call3051;
        };
        var block3052 = new GraceBlock(this, 1068, 0);
        block3052.real = function() {
          setLineNumber(1069);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call3054 = callmethodChecked(this, "next", []);
          setLineNumber(1070);    // compilenode member
          // call case 6: other requests
          var call3056 = callmethodChecked(var_values, "pop", []);
          var var_memberIn = call3056;
          var if3057 = GraceDone;
          setLineNumber(1071);    // compilenode string
          var string3058 = new GraceString("identifier");
          // call case 6: other requests
          var call3061 = callmethodChecked(var_sym, "kind", []);
          var opresult3063 = callmethodChecked(call3061, "\u2260(1)", [1], string3058);
          if (Grace_isTrue(opresult3063)) {
            setLineNumber(1072);    // compilenode array
            var array3064 = new PrimitiveGraceList([]);
            var var_suggestions = array3064;
            setLineNumber(1073);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call3067 = callmethodChecked(var_errormessages, "suggestion", []);
            var call3068 = callmethodChecked(call3067, "new", []);
            var var_suggestion = call3068;
            setLineNumber(1074);    // compilenode string
            var string3070 = new GraceString("\u00abtype name\u00bb");
            // call case 6: other requests
            var call3071 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string3070, var_lastToken);
            setLineNumber(1075);    // compilenode identifier
            // call case 6: other requests
            var call3073 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
            setLineNumber(1076);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call3076 = callmethodChecked(var_errormessages, "suggestion", []);
            var call3077 = callmethodChecked(call3076, "new", []);
            var_suggestion = call3077;
            setLineNumber(1077);    // compilenode identifier
            // call case 6: other requests
            var call3079 = callmethodChecked(var_suggestion, "deleteToken(1)", [1], var_lastToken);
            setLineNumber(1078);    // compilenode identifier
            // call case 6: other requests
            var call3081 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
            setLineNumber(1079);    // compilenode string
            var string3083 = new GraceString("a type name must follow the '.'.");
            setLineNumber(1080);    // compilenode member
            // call case 6: other requests
            var call3085 = callmethodChecked(var_lastToken, "line", []);
            // call case 6: other requests
            var call3088 = callmethodChecked(var_lastToken, "linePos", []);
            var opresult3090 = callmethodChecked(call3088, "+(1)", [1], new GraceNum(1));
            // call case 6: other requests
            setLineNumber(1079);    // compilenode identifier
            var call3091 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestions(1)", [1, 2, 1], string3083, call3085, opresult3090, var_suggestions);
            if3057 = call3091;
          }
          setLineNumber(1082);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call3093 = callmethodChecked(this, "identifier", []);
          setLineNumber(1083);    // compilenode member
          // call case 6: other requests
          var call3095 = callmethodChecked(var_values, "pop", []);
          var var_memberName = call3095;
          setLineNumber(1084);    // compilenode member
          // call case 6: other requests
          var call3098 = callmethodChecked(var_memberName, "value", []);
          // call case 6: other requests
          // call case 6: other requests
          var call3100 = callmethodChecked(var_ast, "memberNode", []);
          var call3101 = callmethodChecked(call3100, "new(2)", [2], call3098, var_memberIn);
          var var_memberNd = call3101;
          setLineNumber(1085);    // compilenode member
          // call case 6: other requests
          var call3104 = callmethodChecked(var_memberName, "line", []);
          // call case 6: other requests
          var call3105 = callmethodChecked(var_memberNd, "line:=(1)", [1], call3104);
          setLineNumber(1086);    // compilenode member
          // call case 6: other requests
          var call3108 = callmethodChecked(var_memberName, "linePos", []);
          // call case 6: other requests
          var call3109 = callmethodChecked(var_memberNd, "linePos:=(1)", [1], call3108);
          setLineNumber(1087);    // compilenode identifier
          // call case 6: other requests
          var call3111 = callmethodChecked(var_values, "push(1)", [1], var_memberNd);
          return call3111;
        };
        // call case 5: prelude request
        var call3112 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block3048, block3052);
        setLineNumber(1089);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call3114 = callmethodChecked(this, "generic", []);
        setLineNumber(1090);    // compilenode member
        // call case 6: other requests
        var call3117 = callmethodChecked(var_values, "pop", []);
        // call case 6: other requests
        var call3118 = callmethodChecked(var_gens, "push(1)", [1], call3117);
        var if3119 = GraceDone;
        setLineNumber(1091);    // compilenode string
        var string3121 = new GraceString("comma");
        // call case 4: self request
        onSelf = true;
        var call3122 = callmethodChecked(this, "accept(1)", [1], string3121);
        if (Grace_isTrue(call3122)) {
          setLineNumber(1092);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call3124 = callmethodChecked(this, "next", []);
          if3119 = call3124;
        } else {
          var if3125 = GraceDone;
          setLineNumber(1094);    // compilenode string
          var string3126 = new GraceString("rgeneric");
          // call case 6: other requests
          var call3129 = callmethodChecked(var_sym, "kind", []);
          var opresult3131 = callmethodChecked(call3129, "\u2260(1)", [1], string3126);
          if (Grace_isTrue(opresult3131)) {
            setLineNumber(1095);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call3134 = callmethodChecked(var_errormessages, "suggestion", []);
            var call3135 = callmethodChecked(call3134, "new", []);
            var var_suggestion = call3135;
            setLineNumber(1096);    // compilenode string
            var string3137 = new GraceString(">");
            // call case 6: other requests
            var call3138 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string3137, var_lastToken);
            setLineNumber(1097);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call3141 = callmethodChecked(var_errormessages, "suggestion", []);
            var call3142 = callmethodChecked(call3141, "new", []);
            var var_suggestion2 = call3142;
            setLineNumber(1098);    // compilenode string
            var string3144 = new GraceString(" ");
            // call case 6: other requests
            var call3145 = callmethodChecked(var_suggestion2, "insert(1)beforeToken(1)", [1, 1], string3144, var_startToken);
            setLineNumber(1099);    // compilenode identifier
            var array3146 = new PrimitiveGraceList([var_suggestion, var_suggestion2]);
            var var_suggestions = array3146;
            setLineNumber(1100);    // compilenode string
            var string3148 = new GraceString("a type containing a '<' must end with a '>', or the '<' operator must have a space before it.");
            setLineNumber(1101);    // compilenode member
            // call case 6: other requests
            var call3150 = callmethodChecked(var_lastToken, "line", []);
            // call case 6: other requests
            var call3152 = callmethodChecked(var_lastToken, "size", []);
            // call case 6: other requests
            var call3155 = callmethodChecked(var_lastToken, "linePos", []);
            var opresult3157 = callmethodChecked(call3155, "+(1)", [1], call3152);
            setLineNumber(1102);    // compilenode identifier
            // call case 6: other requests
            setLineNumber(1100);    // compilenode identifier
            var call3158 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestions(1)", [1, 2, 1], string3148, call3150, opresult3157, var_suggestions);
            if3125 = call3158;
          }
          if3119 = if3125;
        }
        return if3119;
      };
      // call case 5: prelude request
      var call3159 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block3040, block3044);
      var if3160 = GraceDone;
      setLineNumber(1106);    // compilenode string
      var string3161 = new GraceString("rgeneric");
      // call case 6: other requests
      var call3164 = callmethodChecked(var_sym, "kind", []);
      var opresult3166 = callmethodChecked(call3164, "\u2260(1)", [1], string3161);
      if (Grace_isTrue(opresult3166)) {
        setLineNumber(1107);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call3169 = callmethodChecked(var_errormessages, "suggestion", []);
        var call3170 = callmethodChecked(call3169, "new", []);
        var var_suggestion = call3170;
        setLineNumber(1108);    // compilenode string
        var string3172 = new GraceString(">");
        // call case 6: other requests
        var call3173 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string3172, var_lastToken);
        setLineNumber(1109);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call3176 = callmethodChecked(var_errormessages, "suggestion", []);
        var call3177 = callmethodChecked(call3176, "new", []);
        var var_suggestion2 = call3177;
        setLineNumber(1110);    // compilenode string
        var string3179 = new GraceString(" ");
        // call case 6: other requests
        var call3180 = callmethodChecked(var_suggestion2, "insert(1)beforeToken(1)", [1, 1], string3179, var_startToken);
        setLineNumber(1111);    // compilenode identifier
        var array3181 = new PrimitiveGraceList([var_suggestion, var_suggestion2]);
        var var_suggestions = array3181;
        setLineNumber(1112);    // compilenode string
        var string3183 = new GraceString("a type containing a '<' must end with a '>', or the '<' operator must have a space before it.");
        setLineNumber(1113);    // compilenode member
        // call case 6: other requests
        var call3185 = callmethodChecked(var_lastToken, "line", []);
        // call case 6: other requests
        var call3187 = callmethodChecked(var_lastToken, "size", []);
        // call case 6: other requests
        var call3190 = callmethodChecked(var_lastToken, "linePos", []);
        var opresult3192 = callmethodChecked(call3190, "+(1)", [1], call3187);
        setLineNumber(1114);    // compilenode identifier
        // call case 6: other requests
        setLineNumber(1112);    // compilenode identifier
        var call3193 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestions(1)", [1, 2, 1], string3183, call3185, opresult3192, var_suggestions);
        if3160 = call3193;
      }
      setLineNumber(1116);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call3195 = callmethodChecked(this, "next", []);
      setLineNumber(1117);    // compilenode identifier
      // call case 6: other requests
      // call case 6: other requests
      var call3199 = callmethodChecked(var_ast, "genericNode", []);
      var call3200 = callmethodChecked(call3199, "new(2)", [2], var_id, var_gens);
      // call case 6: other requests
      var call3201 = callmethodChecked(var_values, "push(1)", [1], call3200);
      if3030 = call3201;
    }
    return if3030;
  };
  func3029.paramCounts = [0];
  this.methods["generic"] = func3029;
  func3029.definitionLine = 1060;
  func3029.definitionModule = "parser";
  setLineNumber(1120);    // compilenode method
  var func3202 = function(argcv) {    // method trycatch
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    var if3203 = GraceDone;
    setLineNumber(1121);    // compilenode call
    // call case 6: other requests
    var string3205 = new GraceString("try");
    // call case 6: other requests
    var call3208 = callmethodChecked(var_sym, "value", []);
    var opresult3210 = callmethodChecked(call3208, "==(1)", [1], string3205);
    var string3213 = new GraceString("identifier");
    // call case 4: self request
    onSelf = true;
    var call3214 = callmethodChecked(this, "accept(1)", [1], string3213);
    var opresult3216 = callmethodChecked(call3214, "&&(1)", [1], opresult3210);
    var call3217 = callmethodChecked(opresult3216, "prefix!", [0]);
    if (Grace_isTrue(call3217)) {
      setLineNumber(1122);    // compilenode num
      return new GraceNum(0);
    }
    setLineNumber(1124);    // compilenode identifier
    var var_localmin = var_minIndentLevel;
    setLineNumber(1125);    // compilenode identifier
    var var_catchTok = var_sym;
    setLineNumber(1126);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call3219 = callmethodChecked(this, "next", []);
    var if3220 = GraceDone;
    setLineNumber(1127);    // compilenode string
    var string3222 = new GraceString("lbrace");
    // call case 4: self request
    onSelf = true;
    var call3223 = callmethodChecked(this, "accept(1)", [1], string3222);
    if (Grace_isTrue(call3223)) {
      setLineNumber(1128);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call3225 = callmethodChecked(this, "block", []);
      if3220 = call3225;
    } else {
      var if3226 = GraceDone;
      setLineNumber(1130);    // compilenode string
      var string3227 = new GraceString("lparen");
      // call case 6: other requests
      var call3230 = callmethodChecked(var_sym, "kind", []);
      var opresult3232 = callmethodChecked(call3230, "\u2260(1)", [1], string3227);
      if (Grace_isTrue(opresult3232)) {
        setLineNumber(1131);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call3235 = callmethodChecked(var_errormessages, "suggestion", []);
        var call3236 = callmethodChecked(call3235, "new", []);
        var var_suggestion = call3236;
        setLineNumber(1133);    // compilenode block
        var block3238 = new GraceBlock(this, 1133, 1);
        setLineNumber(1);    // compilenode identifier
        block3238.real = function(var_t) {
          setLineNumber(1135);    // compilenode string
          var string3239 = new GraceString("catch");
          // call case 6: other requests
          var call3242 = callmethodChecked(var_t, "value", []);
          var opresult3244 = callmethodChecked(call3242, "==(1)", [1], string3239);
          var string3246 = new GraceString("identifier");
          // call case 6: other requests
          var call3249 = callmethodChecked(var_t, "kind", []);
          var opresult3251 = callmethodChecked(call3249, "==(1)", [1], string3246);
          var opresult3253 = callmethodChecked(opresult3251, "&&(1)", [1], opresult3244);
          setLineNumber(1134);    // compilenode member
          // call case 6: other requests
          var call3256 = callmethodChecked(var_catchTok, "line", []);
          // call case 6: other requests
          var call3259 = callmethodChecked(var_t, "line", []);
          var opresult3261 = callmethodChecked(call3259, "==(1)", [1], call3256);
          var string3263 = new GraceString("rparen");
          // call case 6: other requests
          var call3266 = callmethodChecked(var_t, "kind", []);
          var opresult3268 = callmethodChecked(call3266, "==(1)", [1], string3263);
          var opresult3270 = callmethodChecked(opresult3268, "&&(1)", [1], opresult3261);
          setLineNumber(1133);    // compilenode string
          var string3272 = new GraceString("rbrace");
          // call case 6: other requests
          var call3275 = callmethodChecked(var_t, "kind", []);
          var opresult3277 = callmethodChecked(call3275, "==(1)", [1], string3272);
          var opresult3279 = callmethodChecked(opresult3277, "||(1)", [1], opresult3270);
          var opresult3281 = callmethodChecked(opresult3279, "||(1)", [1], opresult3253);
          return opresult3281;
        };
        // call case 4: self request
        onSelf = true;
        var call3282 = callmethodChecked(this, "findNextToken(1)", [1], block3238);
        var var_nextTok = call3282;
        var if3283 = GraceDone;
        setLineNumber(1136);    // compilenode identifier
        var opresult3286 = callmethodChecked(GraceFalse, "==(1)", [1], var_nextTok);
        if (Grace_isTrue(opresult3286)) {
          setLineNumber(1137);    // compilenode string
          var string3288 = new GraceString(" {}");
          // call case 6: other requests
          var call3289 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string3288, var_catchTok);
          if3283 = call3289;
        } else {
          var if3290 = GraceDone;
          setLineNumber(1138);    // compilenode string
          var string3291 = new GraceString("rbrace");
          // call case 6: other requests
          var call3294 = callmethodChecked(var_nextTok, "kind", []);
          var opresult3296 = callmethodChecked(call3294, "==(1)", [1], string3291);
          if (Grace_isTrue(opresult3296)) {
            setLineNumber(1139);    // compilenode string
            var string3298 = new GraceString(" {");
            // call case 6: other requests
            var call3299 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string3298, var_catchTok);
            if3290 = call3299;
          } else {
            var if3300 = GraceDone;
            setLineNumber(1140);    // compilenode string
            var string3301 = new GraceString("rparen");
            // call case 6: other requests
            var call3304 = callmethodChecked(var_nextTok, "kind", []);
            var opresult3306 = callmethodChecked(call3304, "==(1)", [1], string3301);
            if (Grace_isTrue(opresult3306)) {
              var if3307 = GraceDone;
              setLineNumber(1141);    // compilenode identifier
              var opresult3310 = callmethodChecked(var_nextTok, "==(1)", [1], var_sym);
              if (Grace_isTrue(opresult3310)) {
                setLineNumber(1142);    // compilenode string
                var string3312 = new GraceString("(\u00abexpression\u00bb");
                // call case 6: other requests
                var call3313 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)andTrailingSpace(1)", [1, 1, 1], string3312, var_lastToken, GraceTrue);
                if3307 = call3313;
              } else {
                setLineNumber(1144);    // compilenode string
                var string3315 = new GraceString("(");
                // call case 6: other requests
                var call3316 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)andTrailingSpace(1)", [1, 1, 1], string3315, var_lastToken, GraceTrue);
                if3307 = call3316;
              }
              if3300 = if3307;
            } else {
              var if3317 = GraceDone;
              setLineNumber(1146);    // compilenode string
              var string3318 = new GraceString("identifier");
              // call case 6: other requests
              var call3321 = callmethodChecked(var_nextTok, "kind", []);
              var opresult3323 = callmethodChecked(call3321, "==(1)", [1], string3318);
              if (Grace_isTrue(opresult3323)) {
                setLineNumber(1147);    // compilenode string
                var string3325 = new GraceString(" {");
                // call case 6: other requests
                var call3326 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string3325, var_catchTok);
                setLineNumber(1148);    // compilenode string
                var string3328 = new GraceString("} ");
                // call case 6: other requests
                var call3329 = callmethodChecked(var_suggestion, "insert(1)beforeToken(1)", [1, 1], string3328, var_nextTok);
                if3317 = call3329;
              }
              if3300 = if3317;
            }
            if3290 = if3300;
          }
          if3283 = if3290;
        }
        setLineNumber(1150);    // compilenode string
        var string3331 = new GraceString("a catch statement must have either a block or an expression in parentheses after the 'catch'.");
        setLineNumber(1151);    // compilenode member
        // call case 6: other requests
        var call3333 = callmethodChecked(var_catchTok, "line", []);
        // call case 6: other requests
        var call3336 = callmethodChecked(var_catchTok, "size", []);
        // call case 6: other requests
        var call3339 = callmethodChecked(var_catchTok, "linePos", []);
        var opresult3341 = callmethodChecked(call3339, "+(1)", [1], call3336);
        var opresult3343 = callmethodChecked(opresult3341, "+(1)", [1], new GraceNum(1));
        // call case 6: other requests
        setLineNumber(1150);    // compilenode identifier
        var call3344 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string3331, call3333, opresult3343, var_suggestion);
        if3226 = call3344;
      }
      setLineNumber(1153);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call3346 = callmethodChecked(this, "next", []);
      var if3347 = GraceDone;
      setLineNumber(1154);    // compilenode member
      // call case 6: other requests
      var block3350 = new GraceBlock(this, 1154, 0);
      block3350.real = function() {
        // call case 4: self request
        onSelf = true;
        var call3352 = callmethodChecked(this, "expression(1)", [1], var_blocksOK);
        return call3352;
      };
      // call case 4: self request
      onSelf = true;
      var call3353 = callmethodChecked(this, "didConsume(1)", [1], block3350);
      var call3354 = callmethodChecked(call3353, "not", []);
      if (Grace_isTrue(call3354)) {
        setLineNumber(1155);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call3357 = callmethodChecked(var_errormessages, "suggestion", []);
        var call3358 = callmethodChecked(call3357, "new", []);
        var var_suggestion = call3358;
        setLineNumber(1156);    // compilenode string
        var string3361 = new GraceString("rparen");
        var array3360 = new PrimitiveGraceList([string3361]);
        // call case 4: self request
        onSelf = true;
        var call3362 = callmethodChecked(this, "findNextValidToken(1)", [1], array3360);
        var var_nextTok = call3362;
        var if3363 = GraceDone;
        setLineNumber(1157);    // compilenode identifier
        var opresult3366 = callmethodChecked(var_nextTok, "==(1)", [1], var_sym);
        if (Grace_isTrue(opresult3366)) {
          setLineNumber(1158);    // compilenode string
          var string3368 = new GraceString("\u00abexpression\u00bb");
          // call case 6: other requests
          var call3369 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string3368, var_lastToken);
          if3363 = call3369;
        } else {
          setLineNumber(1160);    // compilenode member
          // call case 6: other requests
          var call3372 = callmethodChecked(var_nextTok, "prev", []);
          var string3373 = new GraceString("\u00abexpression\u00bb");
          // call case 6: other requests
          var call3374 = callmethodChecked(var_suggestion, "replaceTokenRange(2)leading(1)trailing(1)with(1)", [2, 1, 1, 1], var_sym, call3372, GraceTrue, GraceFalse, string3373);
          if3363 = call3374;
        }
        setLineNumber(1162);    // compilenode string
        var string3376 = new GraceString("a catch statement must have either a block or an expression in parentheses after the 'catch'.");
        setLineNumber(1163);    // compilenode member
        // call case 6: other requests
        var call3378 = callmethodChecked(var_sym, "line", []);
        // call case 6: other requests
        var call3380 = callmethodChecked(var_sym, "linePos", []);
        // call case 6: other requests
        setLineNumber(1162);    // compilenode identifier
        var call3381 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string3376, call3378, call3380, var_suggestion);
        if3347 = call3381;
      }
      var if3382 = GraceDone;
      setLineNumber(1165);    // compilenode string
      var string3383 = new GraceString("rparen");
      // call case 6: other requests
      var call3386 = callmethodChecked(var_sym, "kind", []);
      var opresult3388 = callmethodChecked(call3386, "\u2260(1)", [1], string3383);
      if (Grace_isTrue(opresult3388)) {
        setLineNumber(1166);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call3390 = callmethodChecked(this, "checkBadOperators", []);
        setLineNumber(1167);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call3393 = callmethodChecked(var_errormessages, "suggestion", []);
        var call3394 = callmethodChecked(call3393, "new", []);
        var var_suggestion = call3394;
        setLineNumber(1168);    // compilenode string
        var string3396 = new GraceString(")");
        // call case 6: other requests
        var call3397 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string3396, var_lastToken);
        setLineNumber(1169);    // compilenode string
        var string3399 = new GraceString("an expression beginning with a '(' must end with a ')'.");
        setLineNumber(1170);    // compilenode member
        // call case 6: other requests
        var call3401 = callmethodChecked(var_lastToken, "line", []);
        // call case 6: other requests
        var call3403 = callmethodChecked(var_lastToken, "size", []);
        // call case 6: other requests
        var call3406 = callmethodChecked(var_lastToken, "linePos", []);
        var opresult3408 = callmethodChecked(call3406, "+(1)", [1], call3403);
        // call case 6: other requests
        setLineNumber(1169);    // compilenode identifier
        var call3409 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string3399, call3401, opresult3408, var_suggestion);
        if3382 = call3409;
      }
      setLineNumber(1172);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call3411 = callmethodChecked(this, "next", []);
      if3220 = call3411;
    }
    setLineNumber(1174);    // compilenode member
    // call case 6: other requests
    var call3413 = callmethodChecked(var_values, "pop", []);
    var var_mainblock = call3413;
    setLineNumber(1175);    // compilenode array
    var array3414 = new PrimitiveGraceList([]);
    var var_cases = array3414;
    setLineNumber(1176);    // compilenode identifier
    var var_finally = GraceFalse;
    setLineNumber(1177);    // compilenode block
    var block3416 = new GraceBlock(this, 1177, 0);
    block3416.real = function() {
      var string3417 = new GraceString("catch");
      // call case 6: other requests
      var call3420 = callmethodChecked(var_sym, "value", []);
      var opresult3422 = callmethodChecked(call3420, "==(1)", [1], string3417);
      var string3425 = new GraceString("identifier");
      // call case 4: self request
      onSelf = true;
      var call3426 = callmethodChecked(this, "accept(1)", [1], string3425);
      var opresult3428 = callmethodChecked(call3426, "&&(1)", [1], opresult3422);
      return opresult3428;
    };
    var block3429 = new GraceBlock(this, 1177, 0);
    block3429.real = function() {
      setLineNumber(1178);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call3431 = callmethodChecked(this, "next", []);
      var if3432 = GraceDone;
      setLineNumber(1179);    // compilenode string
      var string3434 = new GraceString("lbrace");
      // call case 4: self request
      onSelf = true;
      var call3435 = callmethodChecked(this, "accept(1)", [1], string3434);
      if (Grace_isTrue(call3435)) {
        setLineNumber(1180);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call3437 = callmethodChecked(this, "block", []);
        if3432 = call3437;
      } else {
        var if3438 = GraceDone;
        setLineNumber(1181);    // compilenode string
        var string3440 = new GraceString("lparen");
        // call case 4: self request
        onSelf = true;
        var call3441 = callmethodChecked(this, "accept(1)", [1], string3440);
        if (Grace_isTrue(call3441)) {
          setLineNumber(1182);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call3443 = callmethodChecked(this, "next", []);
          var if3444 = GraceDone;
          setLineNumber(1183);    // compilenode member
          // call case 6: other requests
          var block3447 = new GraceBlock(this, 1183, 0);
          block3447.real = function() {
            // call case 4: self request
            onSelf = true;
            var call3449 = callmethodChecked(this, "expression(1)", [1], var_blocksOK);
            return call3449;
          };
          // call case 4: self request
          onSelf = true;
          var call3450 = callmethodChecked(this, "didConsume(1)", [1], block3447);
          var call3451 = callmethodChecked(call3450, "not", []);
          if (Grace_isTrue(call3451)) {
            setLineNumber(1184);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call3454 = callmethodChecked(var_errormessages, "suggestion", []);
            var call3455 = callmethodChecked(call3454, "new", []);
            var var_suggestion = call3455;
            setLineNumber(1185);    // compilenode string
            var string3458 = new GraceString("rparen");
            var array3457 = new PrimitiveGraceList([string3458]);
            // call case 4: self request
            onSelf = true;
            var call3459 = callmethodChecked(this, "findNextValidToken(1)", [1], array3457);
            var var_nextTok = call3459;
            var if3460 = GraceDone;
            setLineNumber(1186);    // compilenode identifier
            var opresult3463 = callmethodChecked(var_nextTok, "==(1)", [1], var_sym);
            if (Grace_isTrue(opresult3463)) {
              setLineNumber(1187);    // compilenode string
              var string3465 = new GraceString("\u00abexpression\u00bb");
              // call case 6: other requests
              var call3466 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string3465, var_lastToken);
              if3460 = call3466;
            } else {
              setLineNumber(1189);    // compilenode member
              // call case 6: other requests
              var call3469 = callmethodChecked(var_nextTok, "prev", []);
              var string3470 = new GraceString("\u00abexpression\u00bb");
              // call case 6: other requests
              var call3471 = callmethodChecked(var_suggestion, "replaceTokenRange(2)leading(1)trailing(1)with(1)", [2, 1, 1, 1], var_sym, call3469, GraceTrue, GraceFalse, string3470);
              if3460 = call3471;
            }
            setLineNumber(1191);    // compilenode string
            var string3473 = new GraceString("a try-catch statement must have either a matching block or an expression in parentheses after the 'catch'.");
            setLineNumber(1192);    // compilenode member
            // call case 6: other requests
            var call3475 = callmethodChecked(var_sym, "line", []);
            // call case 6: other requests
            var call3477 = callmethodChecked(var_sym, "linePos", []);
            // call case 6: other requests
            setLineNumber(1191);    // compilenode identifier
            var call3478 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string3473, call3475, call3477, var_suggestion);
            if3444 = call3478;
          }
          var if3479 = GraceDone;
          setLineNumber(1194);    // compilenode string
          var string3480 = new GraceString("rparen");
          // call case 6: other requests
          var call3483 = callmethodChecked(var_sym, "kind", []);
          var opresult3485 = callmethodChecked(call3483, "\u2260(1)", [1], string3480);
          if (Grace_isTrue(opresult3485)) {
            setLineNumber(1195);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call3487 = callmethodChecked(this, "checkBadOperators", []);
            setLineNumber(1196);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call3490 = callmethodChecked(var_errormessages, "suggestion", []);
            var call3491 = callmethodChecked(call3490, "new", []);
            var var_suggestion = call3491;
            setLineNumber(1197);    // compilenode string
            var string3493 = new GraceString(")");
            // call case 6: other requests
            var call3494 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string3493, var_lastToken);
            setLineNumber(1198);    // compilenode string
            var string3496 = new GraceString("an expression beginning with a '(' must end with a ')'.");
            setLineNumber(1199);    // compilenode member
            // call case 6: other requests
            var call3498 = callmethodChecked(var_lastToken, "line", []);
            // call case 6: other requests
            var call3500 = callmethodChecked(var_lastToken, "size", []);
            // call case 6: other requests
            var call3503 = callmethodChecked(var_lastToken, "linePos", []);
            var opresult3505 = callmethodChecked(call3503, "+(1)", [1], call3500);
            // call case 6: other requests
            setLineNumber(1198);    // compilenode identifier
            var call3506 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string3496, call3498, opresult3505, var_suggestion);
            if3479 = call3506;
          }
          setLineNumber(1201);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call3508 = callmethodChecked(this, "next", []);
          if3438 = call3508;
        } else {
          setLineNumber(1203);    // compilenode array
          var array3509 = new PrimitiveGraceList([]);
          var var_suggestions = array3509;
          setLineNumber(1204);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call3511 = callmethodChecked(this, "findNextTokenIndentedAt(1)", [1], var_lastToken);
          var var_nextTok = call3511;
          setLineNumber(1205);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call3514 = callmethodChecked(var_errormessages, "suggestion", []);
          var call3515 = callmethodChecked(call3514, "new", []);
          var var_suggestion = call3515;
          var if3516 = GraceDone;
          setLineNumber(1206);    // compilenode identifier
          var opresult3519 = callmethodChecked(GraceFalse, "==(1)", [1], var_nextTok);
          if (Grace_isTrue(opresult3519)) {
            setLineNumber(1207);    // compilenode string
            var string3521 = new GraceString(" }");
            // call case 6: other requests
            var call3523 = callmethodChecked(var_tokens, "last", []);
            // call case 6: other requests
            var call3524 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string3521, call3523);
            setLineNumber(1208);    // compilenode string
            var string3526 = new GraceString(" {");
            // call case 6: other requests
            var call3527 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string3526, var_lastToken);
            setLineNumber(1209);    // compilenode identifier
            // call case 6: other requests
            var call3529 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
            if3516 = call3529;
          } else {
            var if3530 = GraceDone;
            setLineNumber(1210);    // compilenode identifier
            var opresult3533 = callmethodChecked(var_nextTok, "==(1)", [1], var_sym);
            if (Grace_isTrue(opresult3533)) {
              setLineNumber(1211);    // compilenode string
              var string3535 = new GraceString(" (\u00abexpression\u00bb)");
              // call case 6: other requests
              var call3536 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string3535, var_lastToken);
              setLineNumber(1212);    // compilenode identifier
              // call case 6: other requests
              var call3538 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
              setLineNumber(1213);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              var call3541 = callmethodChecked(var_errormessages, "suggestion", []);
              var call3542 = callmethodChecked(call3541, "new", []);
              var_suggestion = call3542;
              setLineNumber(1214);    // compilenode string
              var string3544 = new GraceString(" { \u00abmatch expression\u00bb }");
              // call case 6: other requests
              var call3545 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string3544, var_lastToken);
              setLineNumber(1215);    // compilenode identifier
              // call case 6: other requests
              var call3547 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
              if3530 = call3547;
            } else {
              setLineNumber(1217);    // compilenode string
              var string3549 = new GraceString(" }");
              // call case 6: other requests
              var call3551 = callmethodChecked(var_nextTok, "prev", []);
              // call case 6: other requests
              var call3552 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string3549, call3551);
              setLineNumber(1218);    // compilenode string
              var string3554 = new GraceString(" {");
              // call case 6: other requests
              var call3555 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string3554, var_lastToken);
              setLineNumber(1219);    // compilenode identifier
              // call case 6: other requests
              var call3557 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
              if3530 = call3557;
            }
            if3516 = if3530;
          }
          setLineNumber(1221);    // compilenode string
          var string3559 = new GraceString("a try-catch statement must have either a matching block or an expression in parentheses after the 'catch'.");
          setLineNumber(1222);    // compilenode member
          // call case 6: other requests
          var call3561 = callmethodChecked(var_sym, "line", []);
          // call case 6: other requests
          var call3563 = callmethodChecked(var_sym, "linePos", []);
          // call case 6: other requests
          setLineNumber(1221);    // compilenode identifier
          var call3564 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestions(1)", [1, 2, 1], string3559, call3561, call3563, var_suggestions);
          if3438 = call3564;
        }
        if3432 = if3438;
      }
      setLineNumber(1224);    // compilenode member
      // call case 6: other requests
      var call3567 = callmethodChecked(var_values, "pop", []);
      // call case 6: other requests
      var call3568 = callmethodChecked(var_cases, "push(1)", [1], call3567);
      return call3568;
    };
    // call case 5: prelude request
    var call3569 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block3416, block3429);
    var if3570 = GraceDone;
    setLineNumber(1226);    // compilenode string
    var string3571 = new GraceString("case");
    // call case 6: other requests
    var call3574 = callmethodChecked(var_sym, "value", []);
    var opresult3576 = callmethodChecked(call3574, "==(1)", [1], string3571);
    var string3579 = new GraceString("identifier");
    // call case 4: self request
    onSelf = true;
    var call3580 = callmethodChecked(this, "accept(1)onLineOf(1)", [1, 1], string3579, var_catchTok);
    var opresult3582 = callmethodChecked(call3580, "&&(1)", [1], opresult3576);
    if (Grace_isTrue(opresult3582)) {
      setLineNumber(1227);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call3585 = callmethodChecked(var_errormessages, "suggestion", []);
      var call3586 = callmethodChecked(call3585, "new", []);
      var var_suggestion = call3586;
      setLineNumber(1228);    // compilenode string
      var string3588 = new GraceString("catch");
      // call case 6: other requests
      var call3589 = callmethodChecked(var_suggestion, "replaceToken(1)with(1)", [1, 1], var_sym, string3588);
      setLineNumber(1231);    // compilenode string
      var string3591 = new GraceString("are no 'case' blocks.");
      setLineNumber(1230);    // compilenode string
      var string3593 = new GraceString("'try' and then zero or more 'catch' blocks; there ");
      setLineNumber(1229);    // compilenode string
      var string3595 = new GraceString("a try-catch statement starts with a ");
      var opresult3597 = callmethodChecked(string3595, "++(1)", [1], string3593);
      var opresult3599 = callmethodChecked(opresult3597, "++(1)", [1], string3591);
      setLineNumber(1232);    // compilenode member
      // call case 6: other requests
      var call3601 = callmethodChecked(var_sym, "line", []);
      // call case 6: other requests
      var call3603 = callmethodChecked(var_sym, "linePos", []);
      // call case 6: other requests
      var call3606 = callmethodChecked(var_sym, "linePos", []);
      var opresult3608 = callmethodChecked(call3606, "+(1)", [1], new GraceNum(3));
      setLineNumber(1233);    // compilenode identifier
      // call case 6: other requests
      setLineNumber(1229);    // compilenode identifier
      var call3609 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)withSuggestion(1)", [1, 3, 1], opresult3599, call3601, call3603, opresult3608, var_suggestion);
      if3570 = call3609;
    }
    var if3610 = GraceDone;
    setLineNumber(1235);    // compilenode string
    var string3611 = new GraceString("finally");
    // call case 6: other requests
    var call3614 = callmethodChecked(var_sym, "value", []);
    var opresult3616 = callmethodChecked(call3614, "==(1)", [1], string3611);
    var string3619 = new GraceString("identifier");
    // call case 4: self request
    onSelf = true;
    var call3620 = callmethodChecked(this, "accept(1)", [1], string3619);
    var opresult3622 = callmethodChecked(call3620, "&&(1)", [1], opresult3616);
    if (Grace_isTrue(opresult3622)) {
      setLineNumber(1236);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call3624 = callmethodChecked(this, "next", []);
      var if3625 = GraceDone;
      setLineNumber(1237);    // compilenode string
      var string3627 = new GraceString("lbrace");
      // call case 4: self request
      onSelf = true;
      var call3628 = callmethodChecked(this, "accept(1)", [1], string3627);
      if (Grace_isTrue(call3628)) {
        setLineNumber(1238);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call3630 = callmethodChecked(this, "block", []);
        if3625 = call3630;
      } else {
        var if3631 = GraceDone;
        setLineNumber(1239);    // compilenode string
        var string3633 = new GraceString("lparen");
        // call case 4: self request
        onSelf = true;
        var call3634 = callmethodChecked(this, "accept(1)", [1], string3633);
        if (Grace_isTrue(call3634)) {
          setLineNumber(1240);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call3636 = callmethodChecked(this, "next", []);
          var if3637 = GraceDone;
          setLineNumber(1241);    // compilenode member
          // call case 6: other requests
          var block3640 = new GraceBlock(this, 1241, 0);
          block3640.real = function() {
            // call case 4: self request
            onSelf = true;
            var call3642 = callmethodChecked(this, "expression(1)", [1], var_blocksOK);
            return call3642;
          };
          // call case 4: self request
          onSelf = true;
          var call3643 = callmethodChecked(this, "didConsume(1)", [1], block3640);
          var call3644 = callmethodChecked(call3643, "not", []);
          if (Grace_isTrue(call3644)) {
            setLineNumber(1242);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call3647 = callmethodChecked(var_errormessages, "suggestion", []);
            var call3648 = callmethodChecked(call3647, "new", []);
            var var_suggestion = call3648;
            setLineNumber(1243);    // compilenode string
            var string3651 = new GraceString("rparen");
            var array3650 = new PrimitiveGraceList([string3651]);
            // call case 4: self request
            onSelf = true;
            var call3652 = callmethodChecked(this, "findNextValidToken(1)", [1], array3650);
            var var_nextTok = call3652;
            var if3653 = GraceDone;
            setLineNumber(1244);    // compilenode identifier
            var opresult3656 = callmethodChecked(var_nextTok, "==(1)", [1], var_sym);
            if (Grace_isTrue(opresult3656)) {
              setLineNumber(1245);    // compilenode string
              var string3658 = new GraceString("\u00abexpression\u00bb");
              // call case 6: other requests
              var call3659 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string3658, var_lastToken);
              if3653 = call3659;
            } else {
              setLineNumber(1247);    // compilenode member
              // call case 6: other requests
              var call3662 = callmethodChecked(var_nextTok, "prev", []);
              var string3663 = new GraceString("\u00abexpression\u00bb");
              // call case 6: other requests
              var call3664 = callmethodChecked(var_suggestion, "replaceTokenRange(2)leading(1)trailing(1)with(1)", [2, 1, 1, 1], var_sym, call3662, GraceTrue, GraceFalse, string3663);
              if3653 = call3664;
            }
            setLineNumber(1249);    // compilenode string
            var string3666 = new GraceString("a catch statement must have either a block or an expression in parentheses after the 'finally'.");
            setLineNumber(1250);    // compilenode member
            // call case 6: other requests
            var call3668 = callmethodChecked(var_sym, "line", []);
            // call case 6: other requests
            var call3670 = callmethodChecked(var_sym, "linePos", []);
            // call case 6: other requests
            setLineNumber(1249);    // compilenode identifier
            var call3671 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string3666, call3668, call3670, var_suggestion);
            if3637 = call3671;
          }
          var if3672 = GraceDone;
          setLineNumber(1252);    // compilenode string
          var string3673 = new GraceString("rparen");
          // call case 6: other requests
          var call3676 = callmethodChecked(var_sym, "kind", []);
          var opresult3678 = callmethodChecked(call3676, "\u2260(1)", [1], string3673);
          if (Grace_isTrue(opresult3678)) {
            setLineNumber(1253);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call3680 = callmethodChecked(this, "checkBadOperators", []);
            setLineNumber(1254);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call3683 = callmethodChecked(var_errormessages, "suggestion", []);
            var call3684 = callmethodChecked(call3683, "new", []);
            var var_suggestion = call3684;
            setLineNumber(1255);    // compilenode string
            var string3686 = new GraceString(")");
            // call case 6: other requests
            var call3687 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string3686, var_lastToken);
            setLineNumber(1256);    // compilenode string
            var string3689 = new GraceString("an expression beginning with a '(' must end with a ')'.");
            setLineNumber(1257);    // compilenode member
            // call case 6: other requests
            var call3691 = callmethodChecked(var_lastToken, "line", []);
            // call case 6: other requests
            var call3693 = callmethodChecked(var_lastToken, "size", []);
            // call case 6: other requests
            var call3696 = callmethodChecked(var_lastToken, "linePos", []);
            var opresult3698 = callmethodChecked(call3696, "+(1)", [1], call3693);
            // call case 6: other requests
            setLineNumber(1256);    // compilenode identifier
            var call3699 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string3689, call3691, opresult3698, var_suggestion);
            if3672 = call3699;
          }
          setLineNumber(1259);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call3701 = callmethodChecked(this, "next", []);
          if3631 = call3701;
        } else {
          setLineNumber(1261);    // compilenode array
          var array3702 = new PrimitiveGraceList([]);
          var var_suggestions = array3702;
          setLineNumber(1262);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call3704 = callmethodChecked(this, "findNextTokenIndentedAt(1)", [1], var_lastToken);
          var var_nextTok = call3704;
          setLineNumber(1263);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call3707 = callmethodChecked(var_errormessages, "suggestion", []);
          var call3708 = callmethodChecked(call3707, "new", []);
          var var_suggestion = call3708;
          var if3709 = GraceDone;
          setLineNumber(1264);    // compilenode identifier
          var opresult3712 = callmethodChecked(GraceFalse, "==(1)", [1], var_nextTok);
          if (Grace_isTrue(opresult3712)) {
            setLineNumber(1265);    // compilenode string
            var string3714 = new GraceString(" }");
            // call case 6: other requests
            var call3716 = callmethodChecked(var_tokens, "first", []);
            // call case 6: other requests
            var call3717 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string3714, call3716);
            setLineNumber(1266);    // compilenode string
            var string3719 = new GraceString(" {");
            // call case 6: other requests
            var call3720 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string3719, var_lastToken);
            setLineNumber(1267);    // compilenode identifier
            // call case 6: other requests
            var call3722 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
            if3709 = call3722;
          } else {
            var if3723 = GraceDone;
            setLineNumber(1268);    // compilenode identifier
            var opresult3726 = callmethodChecked(var_nextTok, "==(1)", [1], var_sym);
            if (Grace_isTrue(opresult3726)) {
              setLineNumber(1269);    // compilenode string
              var string3728 = new GraceString(" (\u00abexpression\u00bb)");
              // call case 6: other requests
              var call3729 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string3728, var_lastToken);
              setLineNumber(1270);    // compilenode identifier
              // call case 6: other requests
              var call3731 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
              setLineNumber(1271);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              var call3734 = callmethodChecked(var_errormessages, "suggestion", []);
              var call3735 = callmethodChecked(call3734, "new", []);
              var_suggestion = call3735;
              setLineNumber(1272);    // compilenode string
              var string3737 = new GraceString(" { \u00abexpression\u00bb }");
              // call case 6: other requests
              var call3738 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string3737, var_lastToken);
              setLineNumber(1273);    // compilenode identifier
              // call case 6: other requests
              var call3740 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
              if3723 = call3740;
            } else {
              setLineNumber(1275);    // compilenode string
              var string3742 = new GraceString(" }");
              // call case 6: other requests
              var call3744 = callmethodChecked(var_nextTok, "prev", []);
              // call case 6: other requests
              var call3745 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string3742, call3744);
              setLineNumber(1276);    // compilenode string
              var string3747 = new GraceString(" {");
              // call case 6: other requests
              var call3748 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string3747, var_lastToken);
              setLineNumber(1277);    // compilenode identifier
              // call case 6: other requests
              var call3750 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
              if3723 = call3750;
            }
            if3709 = if3723;
          }
          setLineNumber(1279);    // compilenode string
          var string3752 = new GraceString("a try-finally statement must have either a block or an expression in parentheses after the 'finally'.");
          setLineNumber(1280);    // compilenode member
          // call case 6: other requests
          var call3754 = callmethodChecked(var_sym, "line", []);
          // call case 6: other requests
          var call3756 = callmethodChecked(var_sym, "linePos", []);
          // call case 6: other requests
          setLineNumber(1279);    // compilenode identifier
          var call3757 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestions(1)", [1, 2, 1], string3752, call3754, call3756, var_suggestions);
          if3631 = call3757;
        }
        if3625 = if3631;
      }
      setLineNumber(1282);    // compilenode member
      // call case 6: other requests
      var call3759 = callmethodChecked(var_values, "pop", []);
      var_finally = call3759;
      if3610 = GraceDone;
    }
    setLineNumber(1284);    // compilenode member
    // call case 6: other requests
    var call3762 = callmethodChecked(var_catchTok, "line", []);
    // call case 6: other requests
    var call3764 = callmethodChecked(var_catchTok, "linePos", []);
    // call case 6: other requests
    var call3765 = callmethodChecked(var_util, "setPosition(2)", [2], call3762, call3764);
    setLineNumber(1285);    // compilenode identifier
    // call case 6: other requests
    // call case 6: other requests
    var call3769 = callmethodChecked(var_ast, "tryCatchNode", []);
    var call3770 = callmethodChecked(call3769, "new(3)", [3], var_mainblock, var_cases, var_finally);
    // call case 6: other requests
    var call3771 = callmethodChecked(var_values, "push(1)", [1], call3770);
    setLineNumber(1286);    // compilenode identifier
    var_minIndentLevel = var_localmin;
    return GraceDone;
  };
  func3202.paramCounts = [0];
  this.methods["trycatch"] = func3202;
  func3202.definitionLine = 1120;
  func3202.definitionModule = "parser";
  setLineNumber(1288);    // compilenode method
  var func3772 = function(argcv) {    // method matchcase
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    var if3773 = GraceDone;
    setLineNumber(1289);    // compilenode call
    // call case 6: other requests
    var string3775 = new GraceString("match");
    // call case 6: other requests
    var call3778 = callmethodChecked(var_sym, "value", []);
    var opresult3780 = callmethodChecked(call3778, "==(1)", [1], string3775);
    var string3783 = new GraceString("identifier");
    // call case 4: self request
    onSelf = true;
    var call3784 = callmethodChecked(this, "accept(1)", [1], string3783);
    var opresult3786 = callmethodChecked(call3784, "&&(1)", [1], opresult3780);
    var call3787 = callmethodChecked(opresult3786, "prefix!", [0]);
    if (Grace_isTrue(call3787)) {
      setLineNumber(1290);    // compilenode num
      return new GraceNum(0);
    }
    setLineNumber(1292);    // compilenode identifier
    var var_localmin = var_minIndentLevel;
    setLineNumber(1293);    // compilenode identifier
    var var_matchTok = var_sym;
    setLineNumber(1294);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call3789 = callmethodChecked(this, "next", []);
    var if3790 = GraceDone;
    setLineNumber(1295);    // compilenode string
    var string3791 = new GraceString("lparen");
    // call case 6: other requests
    var call3794 = callmethodChecked(var_sym, "kind", []);
    var opresult3796 = callmethodChecked(call3794, "\u2260(1)", [1], string3791);
    if (Grace_isTrue(opresult3796)) {
      setLineNumber(1296);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call3799 = callmethodChecked(var_errormessages, "suggestion", []);
      var call3800 = callmethodChecked(call3799, "new", []);
      var var_suggestion = call3800;
      setLineNumber(1298);    // compilenode block
      var block3802 = new GraceBlock(this, 1298, 1);
      setLineNumber(1);    // compilenode identifier
      block3802.real = function(var_t) {
        setLineNumber(1299);    // compilenode string
        var string3803 = new GraceString("case");
        // call case 6: other requests
        var call3806 = callmethodChecked(var_t, "value", []);
        var opresult3808 = callmethodChecked(call3806, "==(1)", [1], string3803);
        var string3810 = new GraceString("identifier");
        // call case 6: other requests
        var call3813 = callmethodChecked(var_t, "kind", []);
        var opresult3815 = callmethodChecked(call3813, "==(1)", [1], string3810);
        var opresult3817 = callmethodChecked(opresult3815, "&&(1)", [1], opresult3808);
        setLineNumber(1298);    // compilenode member
        // call case 6: other requests
        var call3820 = callmethodChecked(var_matchTok, "line", []);
        // call case 6: other requests
        var call3823 = callmethodChecked(var_t, "line", []);
        var opresult3825 = callmethodChecked(call3823, "==(1)", [1], call3820);
        var string3827 = new GraceString("rparen");
        // call case 6: other requests
        var call3830 = callmethodChecked(var_t, "kind", []);
        var opresult3832 = callmethodChecked(call3830, "==(1)", [1], string3827);
        var opresult3834 = callmethodChecked(opresult3832, "&&(1)", [1], opresult3825);
        var opresult3836 = callmethodChecked(opresult3834, "||(1)", [1], opresult3817);
        return opresult3836;
      };
      // call case 4: self request
      onSelf = true;
      var call3837 = callmethodChecked(this, "findNextToken(1)", [1], block3802);
      var var_nextTok = call3837;
      var if3838 = GraceDone;
      setLineNumber(1300);    // compilenode identifier
      var opresult3841 = callmethodChecked(GraceFalse, "==(1)", [1], var_nextTok);
      if (Grace_isTrue(opresult3841)) {
        setLineNumber(1301);    // compilenode string
        var string3843 = new GraceString("(\u00abexpression\u00bb)");
        // call case 6: other requests
        var call3844 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string3843, var_matchTok);
        if3838 = call3844;
      } else {
        var if3845 = GraceDone;
        setLineNumber(1302);    // compilenode string
        var string3846 = new GraceString("rparen");
        // call case 6: other requests
        var call3849 = callmethodChecked(var_nextTok, "kind", []);
        var opresult3851 = callmethodChecked(call3849, "==(1)", [1], string3846);
        if (Grace_isTrue(opresult3851)) {
          var if3852 = GraceDone;
          setLineNumber(1303);    // compilenode identifier
          var opresult3855 = callmethodChecked(var_nextTok, "==(1)", [1], var_sym);
          if (Grace_isTrue(opresult3855)) {
            setLineNumber(1304);    // compilenode string
            var string3857 = new GraceString("(\u00abexpression\u00bb");
            // call case 6: other requests
            var call3858 = callmethodChecked(var_suggestion, "insert(1)beforeToken(1)", [1, 1], string3857, var_sym);
            if3852 = call3858;
          } else {
            setLineNumber(1306);    // compilenode string
            var string3860 = new GraceString("(");
            // call case 6: other requests
            var call3861 = callmethodChecked(var_suggestion, "insert(1)beforeToken(1)", [1, 1], string3860, var_sym);
            if3852 = call3861;
          }
          if3845 = if3852;
        } else {
          var if3862 = GraceDone;
          setLineNumber(1308);    // compilenode string
          var string3863 = new GraceString("identifier");
          // call case 6: other requests
          var call3866 = callmethodChecked(var_nextTok, "kind", []);
          var opresult3868 = callmethodChecked(call3866, "==(1)", [1], string3863);
          if (Grace_isTrue(opresult3868)) {
            setLineNumber(1309);    // compilenode string
            var string3870 = new GraceString("(");
            // call case 6: other requests
            var call3871 = callmethodChecked(var_suggestion, "insert(1)beforeToken(1)", [1, 1], string3870, var_sym);
            setLineNumber(1310);    // compilenode string
            var string3873 = new GraceString(")");
            // call case 6: other requests
            var call3875 = callmethodChecked(var_nextTok, "prev", []);
            // call case 6: other requests
            var call3876 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)andTrailingSpace(1)", [1, 1, 1], string3873, call3875, GraceTrue);
            if3862 = call3876;
          }
          if3845 = if3862;
        }
        if3838 = if3845;
      }
      setLineNumber(1312);    // compilenode string
      var string3878 = new GraceString("a match statement must have an expression in parentheses after the 'match'.");
      setLineNumber(1313);    // compilenode member
      // call case 6: other requests
      var call3880 = callmethodChecked(var_matchTok, "line", []);
      // call case 6: other requests
      var call3882 = callmethodChecked(var_matchTok, "size", []);
      // call case 6: other requests
      var call3885 = callmethodChecked(var_matchTok, "linePos", []);
      var opresult3887 = callmethodChecked(call3885, "+(1)", [1], call3882);
      // call case 6: other requests
      setLineNumber(1312);    // compilenode identifier
      var call3888 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string3878, call3880, opresult3887, var_suggestion);
      if3790 = call3888;
    }
    setLineNumber(1315);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call3890 = callmethodChecked(this, "next", []);
    var if3891 = GraceDone;
    setLineNumber(1316);    // compilenode member
    // call case 6: other requests
    var block3894 = new GraceBlock(this, 1316, 0);
    block3894.real = function() {
      // call case 4: self request
      onSelf = true;
      var call3896 = callmethodChecked(this, "expression(1)", [1], var_blocksOK);
      return call3896;
    };
    // call case 4: self request
    onSelf = true;
    var call3897 = callmethodChecked(this, "didConsume(1)", [1], block3894);
    var call3898 = callmethodChecked(call3897, "not", []);
    if (Grace_isTrue(call3898)) {
      setLineNumber(1317);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call3901 = callmethodChecked(var_errormessages, "suggestion", []);
      var call3902 = callmethodChecked(call3901, "new", []);
      var var_suggestion = call3902;
      setLineNumber(1318);    // compilenode string
      var string3905 = new GraceString("rparen");
      var array3904 = new PrimitiveGraceList([string3905]);
      // call case 4: self request
      onSelf = true;
      var call3906 = callmethodChecked(this, "findNextValidToken(1)", [1], array3904);
      var var_nextTok = call3906;
      var if3907 = GraceDone;
      setLineNumber(1319);    // compilenode identifier
      var opresult3910 = callmethodChecked(var_nextTok, "==(1)", [1], var_sym);
      if (Grace_isTrue(opresult3910)) {
        setLineNumber(1320);    // compilenode string
        var string3912 = new GraceString("\u00abexpression\u00bb");
        // call case 6: other requests
        var call3913 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string3912, var_lastToken);
        if3907 = call3913;
      } else {
        setLineNumber(1322);    // compilenode member
        // call case 6: other requests
        var call3916 = callmethodChecked(var_nextTok, "prev", []);
        var string3917 = new GraceString("\u00abexpression\u00bb");
        // call case 6: other requests
        var call3918 = callmethodChecked(var_suggestion, "replaceTokenRange(2)leading(1)trailing(1)with(1)", [2, 1, 1, 1], var_sym, call3916, GraceTrue, GraceFalse, string3917);
        if3907 = call3918;
      }
      setLineNumber(1324);    // compilenode string
      var string3920 = new GraceString("a match statement must have an expression in parentheses after the 'match'.");
      setLineNumber(1325);    // compilenode member
      // call case 6: other requests
      var call3922 = callmethodChecked(var_sym, "line", []);
      // call case 6: other requests
      var call3924 = callmethodChecked(var_sym, "linePos", []);
      // call case 6: other requests
      setLineNumber(1324);    // compilenode identifier
      var call3925 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string3920, call3922, call3924, var_suggestion);
      if3891 = call3925;
    }
    setLineNumber(1327);    // compilenode member
    // call case 6: other requests
    var call3927 = callmethodChecked(var_values, "pop", []);
    var var_matchee = call3927;
    var if3928 = GraceDone;
    setLineNumber(1328);    // compilenode string
    var string3929 = new GraceString("rparen");
    // call case 6: other requests
    var call3932 = callmethodChecked(var_sym, "kind", []);
    var opresult3934 = callmethodChecked(call3932, "\u2260(1)", [1], string3929);
    if (Grace_isTrue(opresult3934)) {
      setLineNumber(1329);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call3936 = callmethodChecked(this, "checkBadOperators", []);
      setLineNumber(1330);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call3939 = callmethodChecked(var_errormessages, "suggestion", []);
      var call3940 = callmethodChecked(call3939, "new", []);
      var var_suggestion = call3940;
      setLineNumber(1331);    // compilenode string
      var string3942 = new GraceString(")");
      // call case 6: other requests
      var call3943 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string3942, var_lastToken);
      setLineNumber(1332);    // compilenode string
      var string3945 = new GraceString("an expression beginning with a '(' must end with a ')'.");
      setLineNumber(1333);    // compilenode member
      // call case 6: other requests
      var call3947 = callmethodChecked(var_lastToken, "line", []);
      // call case 6: other requests
      var call3949 = callmethodChecked(var_lastToken, "size", []);
      // call case 6: other requests
      var call3952 = callmethodChecked(var_lastToken, "linePos", []);
      var opresult3954 = callmethodChecked(call3952, "+(1)", [1], call3949);
      // call case 6: other requests
      setLineNumber(1332);    // compilenode identifier
      var call3955 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string3945, call3947, opresult3954, var_suggestion);
      if3928 = call3955;
    }
    setLineNumber(1335);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call3957 = callmethodChecked(this, "next", []);
    setLineNumber(1336);    // compilenode array
    var array3958 = new PrimitiveGraceList([]);
    var var_cases = array3958;
    setLineNumber(1337);    // compilenode identifier
    var var_elsecase = GraceFalse;
    setLineNumber(1338);    // compilenode block
    var block3960 = new GraceBlock(this, 1338, 0);
    block3960.real = function() {
      var string3961 = new GraceString("case");
      // call case 6: other requests
      var call3964 = callmethodChecked(var_sym, "value", []);
      var opresult3966 = callmethodChecked(call3964, "==(1)", [1], string3961);
      var string3969 = new GraceString("identifier");
      // call case 4: self request
      onSelf = true;
      var call3970 = callmethodChecked(this, "accept(1)", [1], string3969);
      var opresult3972 = callmethodChecked(call3970, "&&(1)", [1], opresult3966);
      return opresult3972;
    };
    var block3973 = new GraceBlock(this, 1338, 0);
    block3973.real = function() {
      setLineNumber(1339);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call3975 = callmethodChecked(this, "next", []);
      var if3976 = GraceDone;
      setLineNumber(1340);    // compilenode string
      var string3978 = new GraceString("lbrace");
      // call case 4: self request
      onSelf = true;
      var call3979 = callmethodChecked(this, "accept(1)", [1], string3978);
      if (Grace_isTrue(call3979)) {
        setLineNumber(1341);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call3981 = callmethodChecked(this, "block", []);
        if3976 = call3981;
      } else {
        var if3982 = GraceDone;
        setLineNumber(1342);    // compilenode string
        var string3984 = new GraceString("lparen");
        // call case 4: self request
        onSelf = true;
        var call3985 = callmethodChecked(this, "accept(1)", [1], string3984);
        if (Grace_isTrue(call3985)) {
          setLineNumber(1343);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call3987 = callmethodChecked(this, "next", []);
          var if3988 = GraceDone;
          setLineNumber(1344);    // compilenode member
          // call case 6: other requests
          var block3991 = new GraceBlock(this, 1344, 0);
          block3991.real = function() {
            // call case 4: self request
            onSelf = true;
            var call3993 = callmethodChecked(this, "expression(1)", [1], var_blocksOK);
            return call3993;
          };
          // call case 4: self request
          onSelf = true;
          var call3994 = callmethodChecked(this, "didConsume(1)", [1], block3991);
          var call3995 = callmethodChecked(call3994, "not", []);
          if (Grace_isTrue(call3995)) {
            setLineNumber(1345);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call3998 = callmethodChecked(var_errormessages, "suggestion", []);
            var call3999 = callmethodChecked(call3998, "new", []);
            var var_suggestion = call3999;
            setLineNumber(1346);    // compilenode string
            var string4002 = new GraceString("rparen");
            var array4001 = new PrimitiveGraceList([string4002]);
            // call case 4: self request
            onSelf = true;
            var call4003 = callmethodChecked(this, "findNextValidToken(1)", [1], array4001);
            var var_nextTok = call4003;
            var if4004 = GraceDone;
            setLineNumber(1347);    // compilenode identifier
            var opresult4007 = callmethodChecked(var_nextTok, "==(1)", [1], var_sym);
            if (Grace_isTrue(opresult4007)) {
              setLineNumber(1348);    // compilenode string
              var string4009 = new GraceString("\u00abexpression\u00bb");
              // call case 6: other requests
              var call4010 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string4009, var_lastToken);
              if4004 = call4010;
            } else {
              setLineNumber(1350);    // compilenode member
              // call case 6: other requests
              var call4013 = callmethodChecked(var_nextTok, "prev", []);
              var string4014 = new GraceString("\u00abexpression\u00bb");
              // call case 6: other requests
              var call4015 = callmethodChecked(var_suggestion, "replaceTokenRange(2)leading(1)trailing(1)with(1)", [2, 1, 1, 1], var_sym, call4013, GraceTrue, GraceFalse, string4014);
              if4004 = call4015;
            }
            setLineNumber(1352);    // compilenode string
            var string4017 = new GraceString("a match statement must have either a matching block or an expression in parentheses after the 'case'.");
            setLineNumber(1353);    // compilenode member
            // call case 6: other requests
            var call4019 = callmethodChecked(var_sym, "line", []);
            // call case 6: other requests
            var call4021 = callmethodChecked(var_sym, "linePos", []);
            // call case 6: other requests
            setLineNumber(1352);    // compilenode identifier
            var call4022 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string4017, call4019, call4021, var_suggestion);
            if3988 = call4022;
          }
          var if4023 = GraceDone;
          setLineNumber(1355);    // compilenode string
          var string4024 = new GraceString("rparen");
          // call case 6: other requests
          var call4027 = callmethodChecked(var_sym, "kind", []);
          var opresult4029 = callmethodChecked(call4027, "\u2260(1)", [1], string4024);
          if (Grace_isTrue(opresult4029)) {
            setLineNumber(1356);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call4031 = callmethodChecked(this, "checkBadOperators", []);
            setLineNumber(1357);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call4034 = callmethodChecked(var_errormessages, "suggestion", []);
            var call4035 = callmethodChecked(call4034, "new", []);
            var var_suggestion = call4035;
            setLineNumber(1358);    // compilenode string
            var string4037 = new GraceString(")");
            // call case 6: other requests
            var call4038 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string4037, var_lastToken);
            setLineNumber(1359);    // compilenode string
            var string4040 = new GraceString("an expression beginning with a '(' must end with a ')'.");
            setLineNumber(1360);    // compilenode member
            // call case 6: other requests
            var call4042 = callmethodChecked(var_lastToken, "line", []);
            // call case 6: other requests
            var call4044 = callmethodChecked(var_lastToken, "size", []);
            // call case 6: other requests
            var call4047 = callmethodChecked(var_lastToken, "linePos", []);
            var opresult4049 = callmethodChecked(call4047, "+(1)", [1], call4044);
            // call case 6: other requests
            setLineNumber(1359);    // compilenode identifier
            var call4050 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string4040, call4042, opresult4049, var_suggestion);
            if4023 = call4050;
          }
          setLineNumber(1362);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call4052 = callmethodChecked(this, "next", []);
          if3982 = call4052;
        } else {
          setLineNumber(1364);    // compilenode array
          var array4053 = new PrimitiveGraceList([]);
          var var_suggestions = array4053;
          setLineNumber(1365);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call4055 = callmethodChecked(this, "findNextTokenIndentedAt(1)", [1], var_lastToken);
          var var_nextTok = call4055;
          setLineNumber(1366);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call4058 = callmethodChecked(var_errormessages, "suggestion", []);
          var call4059 = callmethodChecked(call4058, "new", []);
          var var_suggestion = call4059;
          var if4060 = GraceDone;
          setLineNumber(1367);    // compilenode identifier
          var opresult4063 = callmethodChecked(GraceFalse, "==(1)", [1], var_nextTok);
          if (Grace_isTrue(opresult4063)) {
            setLineNumber(1368);    // compilenode string
            var string4065 = new GraceString(" }");
            // call case 6: other requests
            var call4067 = callmethodChecked(var_tokens, "last", []);
            // call case 6: other requests
            var call4068 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string4065, call4067);
            setLineNumber(1369);    // compilenode string
            var string4070 = new GraceString(" {");
            // call case 6: other requests
            var call4071 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string4070, var_lastToken);
            setLineNumber(1370);    // compilenode identifier
            // call case 6: other requests
            var call4073 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
            if4060 = call4073;
          } else {
            var if4074 = GraceDone;
            setLineNumber(1371);    // compilenode identifier
            var opresult4077 = callmethodChecked(var_nextTok, "==(1)", [1], var_sym);
            if (Grace_isTrue(opresult4077)) {
              setLineNumber(1372);    // compilenode string
              var string4079 = new GraceString(" (\u00abexpression\u00bb)");
              // call case 6: other requests
              var call4080 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string4079, var_lastToken);
              setLineNumber(1373);    // compilenode identifier
              // call case 6: other requests
              var call4082 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
              setLineNumber(1374);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              var call4085 = callmethodChecked(var_errormessages, "suggestion", []);
              var call4086 = callmethodChecked(call4085, "new", []);
              var_suggestion = call4086;
              setLineNumber(1375);    // compilenode string
              var string4088 = new GraceString(" { \u00abmatch expression\u00bb }");
              // call case 6: other requests
              var call4089 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string4088, var_lastToken);
              setLineNumber(1376);    // compilenode identifier
              // call case 6: other requests
              var call4091 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
              if4074 = call4091;
            } else {
              setLineNumber(1378);    // compilenode string
              var string4093 = new GraceString(" }");
              // call case 6: other requests
              var call4095 = callmethodChecked(var_nextTok, "prev", []);
              // call case 6: other requests
              var call4096 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string4093, call4095);
              setLineNumber(1379);    // compilenode string
              var string4098 = new GraceString(" {");
              // call case 6: other requests
              var call4099 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string4098, var_lastToken);
              setLineNumber(1380);    // compilenode identifier
              // call case 6: other requests
              var call4101 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
              if4074 = call4101;
            }
            if4060 = if4074;
          }
          setLineNumber(1382);    // compilenode string
          var string4103 = new GraceString("a match statement must have either a matching block or an expression in parentheses after the 'case'.");
          setLineNumber(1383);    // compilenode member
          // call case 6: other requests
          var call4105 = callmethodChecked(var_sym, "line", []);
          // call case 6: other requests
          var call4107 = callmethodChecked(var_sym, "linePos", []);
          // call case 6: other requests
          setLineNumber(1382);    // compilenode identifier
          var call4108 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestions(1)", [1, 2, 1], string4103, call4105, call4107, var_suggestions);
          if3982 = call4108;
        }
        if3976 = if3982;
      }
      setLineNumber(1385);    // compilenode member
      // call case 6: other requests
      var call4111 = callmethodChecked(var_values, "pop", []);
      // call case 6: other requests
      var call4112 = callmethodChecked(var_cases, "push(1)", [1], call4111);
      return call4112;
    };
    // call case 5: prelude request
    var call4113 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block3960, block3973);
    setLineNumber(1387);    // compilenode member
    // call case 6: other requests
    var call4116 = callmethodChecked(var_matchTok, "line", []);
    // call case 6: other requests
    var call4118 = callmethodChecked(var_matchTok, "linePos", []);
    // call case 6: other requests
    var call4119 = callmethodChecked(var_util, "setPosition(2)", [2], call4116, call4118);
    setLineNumber(1388);    // compilenode identifier
    // call case 6: other requests
    // call case 6: other requests
    var call4123 = callmethodChecked(var_ast, "matchCaseNode", []);
    var call4124 = callmethodChecked(call4123, "new(3)", [3], var_matchee, var_cases, var_elsecase);
    // call case 6: other requests
    var call4125 = callmethodChecked(var_values, "push(1)", [1], call4124);
    setLineNumber(1389);    // compilenode identifier
    var_minIndentLevel = var_localmin;
    return GraceDone;
  };
  func3772.paramCounts = [0];
  this.methods["matchcase"] = func3772;
  func3772.definitionLine = 1288;
  func3772.definitionModule = "parser";
  setLineNumber(1393);    // compilenode method
  var func4126 = function(argcv) {    // method term
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    setLineNumber(1394);    // compilenode member
    // call case 6: other requests
    var call4129 = callmethodChecked(var_sym, "line", []);
    // call case 6: other requests
    var call4131 = callmethodChecked(var_sym, "linePos", []);
    // call case 6: other requests
    var call4132 = callmethodChecked(var_util, "setPosition(2)", [2], call4129, call4131);
    var if4133 = GraceDone;
    setLineNumber(1395);    // compilenode string
    var string4135 = new GraceString("num");
    // call case 4: self request
    onSelf = true;
    var call4136 = callmethodChecked(this, "accept(1)", [1], string4135);
    if (Grace_isTrue(call4136)) {
      setLineNumber(1396);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call4138 = callmethodChecked(this, "pushnum", []);
      if4133 = call4138;
    } else {
      var if4139 = GraceDone;
      setLineNumber(1397);    // compilenode string
      var string4141 = new GraceString("string");
      // call case 4: self request
      onSelf = true;
      var call4142 = callmethodChecked(this, "accept(1)", [1], string4141);
      if (Grace_isTrue(call4142)) {
        setLineNumber(1398);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call4144 = callmethodChecked(this, "pushstring", []);
        if4139 = call4144;
      } else {
        var if4145 = GraceDone;
        setLineNumber(1399);    // compilenode string
        var string4146 = new GraceString("match");
        // call case 6: other requests
        var call4149 = callmethodChecked(var_sym, "value", []);
        var opresult4151 = callmethodChecked(call4149, "==(1)", [1], string4146);
        var string4154 = new GraceString("identifier");
        // call case 4: self request
        onSelf = true;
        var call4155 = callmethodChecked(this, "accept(1)", [1], string4154);
        var opresult4157 = callmethodChecked(call4155, "&&(1)", [1], opresult4151);
        if (Grace_isTrue(opresult4157)) {
          setLineNumber(1400);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call4159 = callmethodChecked(this, "matchcase", []);
          if4145 = call4159;
        } else {
          var if4160 = GraceDone;
          setLineNumber(1401);    // compilenode string
          var string4161 = new GraceString("try");
          // call case 6: other requests
          var call4164 = callmethodChecked(var_sym, "value", []);
          var opresult4166 = callmethodChecked(call4164, "==(1)", [1], string4161);
          var string4169 = new GraceString("identifier");
          // call case 4: self request
          onSelf = true;
          var call4170 = callmethodChecked(this, "accept(1)", [1], string4169);
          var opresult4172 = callmethodChecked(call4170, "&&(1)", [1], opresult4166);
          if (Grace_isTrue(opresult4172)) {
            setLineNumber(1402);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call4174 = callmethodChecked(this, "trycatch", []);
            if4160 = call4174;
          } else {
            var if4175 = GraceDone;
            setLineNumber(1403);    // compilenode string
            var string4177 = new GraceString("identifier");
            // call case 4: self request
            onSelf = true;
            var call4178 = callmethodChecked(this, "accept(1)", [1], string4177);
            if (Grace_isTrue(call4178)) {
              setLineNumber(1404);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call4180 = callmethodChecked(this, "identifier", []);
              if4175 = call4180;
            } else {
              var if4181 = GraceDone;
              setLineNumber(1405);    // compilenode string
              var string4183 = new GraceString("object");
              // call case 4: self request
              onSelf = true;
              var call4184 = callmethodChecked(this, "acceptKeyword(1)", [1], string4183);
              if (Grace_isTrue(call4184)) {
                setLineNumber(1406);    // compilenode member
                // call case 4: self request
                onSelf = true;
                var call4186 = callmethodChecked(this, "doobject", []);
                if4181 = call4186;
              } else {
                var if4187 = GraceDone;
                setLineNumber(1407);    // compilenode string
                var string4189 = new GraceString("type");
                // call case 4: self request
                onSelf = true;
                var call4190 = callmethodChecked(this, "acceptKeyword(1)", [1], string4189);
                if (Grace_isTrue(call4190)) {
                  setLineNumber(1408);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call4192 = callmethodChecked(this, "dotypeLiteral", []);
                  if4187 = call4192;
                } else {
                  var if4193 = GraceDone;
                  setLineNumber(1409);    // compilenode string
                  var string4195 = new GraceString("lbrace");
                  // call case 4: self request
                  onSelf = true;
                  var call4196 = callmethodChecked(this, "accept(1)", [1], string4195);
                  if (Grace_isTrue(call4196)) {
                    setLineNumber(1410);    // compilenode member
                    // call case 4: self request
                    onSelf = true;
                    var call4198 = callmethodChecked(this, "block", []);
                    if4193 = call4198;
                  } else {
                    var if4199 = GraceDone;
                    setLineNumber(1411);    // compilenode string
                    var string4201 = new GraceString("lsquare");
                    // call case 4: self request
                    onSelf = true;
                    var call4202 = callmethodChecked(this, "acceptAfterSpaces(1)", [1], string4201);
                    if (Grace_isTrue(call4202)) {
                      setLineNumber(1412);    // compilenode member
                      // call case 4: self request
                      onSelf = true;
                      var call4204 = callmethodChecked(this, "doarray", []);
                      if4199 = call4204;
                    } else {
                      var if4205 = GraceDone;
                      setLineNumber(1413);    // compilenode string
                      var string4207 = new GraceString("lsquare");
                      // call case 4: self request
                      onSelf = true;
                      var call4208 = callmethodChecked(this, "accept(1)", [1], string4207);
                      var string4210 = new GraceString("identifier");
                      // call case 6: other requests
                      var call4213 = callmethodChecked(var_lastToken, "kind", []);
                      var opresult4215 = callmethodChecked(call4213, "\u2260(1)", [1], string4210);
                      var opresult4217 = callmethodChecked(opresult4215, "&&(1)", [1], call4208);
                      if (Grace_isTrue(opresult4217)) {
                        setLineNumber(1414);    // compilenode member
                        // call case 4: self request
                        onSelf = true;
                        var call4219 = callmethodChecked(this, "doarray", []);
                        if4205 = call4219;
                      } else {
                        var if4220 = GraceDone;
                        setLineNumber(1415);    // compilenode string
                        var string4222 = new GraceString("op");
                        // call case 4: self request
                        onSelf = true;
                        var call4223 = callmethodChecked(this, "accept(1)", [1], string4222);
                        if (Grace_isTrue(call4223)) {
                          setLineNumber(1417);    // compilenode member
                          // call case 4: self request
                          onSelf = true;
                          var call4225 = callmethodChecked(this, "prefixop", []);
                          if4220 = call4225;
                        }
                        if4205 = if4220;
                      }
                      if4199 = if4205;
                    }
                    if4193 = if4199;
                  }
                  if4187 = if4193;
                }
                if4181 = if4187;
              }
              if4175 = if4181;
            }
            if4160 = if4175;
          }
          if4145 = if4160;
        }
        if4139 = if4145;
      }
      if4133 = if4139;
    }
    return if4133;
  };
  func4126.paramCounts = [0];
  this.methods["term"] = func4126;
  func4126.definitionLine = 1393;
  func4126.definitionModule = "parser";
  setLineNumber(1425);    // compilenode method
  var func4226 = function(argcv) {    // method expression(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_acceptBlocks = arguments[curarg];
    curarg++;
    setModuleName("parser");
    setLineNumber(1426);    // compilenode member
    // call case 6: other requests
    var call4228 = callmethodChecked(var_values, "size", []);
    var var_sz = call4228;
    setLineNumber(1427);    // compilenode member
    // call case 6: other requests
    var call4231 = callmethodChecked(var_sym, "line", []);
    // call case 6: other requests
    var call4233 = callmethodChecked(var_sym, "linePos", []);
    // call case 6: other requests
    var call4234 = callmethodChecked(var_util, "setPosition(2)", [2], call4231, call4233);
    var if4235 = GraceDone;
    setLineNumber(1428);    // compilenode string
    var string4237 = new GraceString("lparen");
    // call case 4: self request
    onSelf = true;
    var call4238 = callmethodChecked(this, "accept(1)", [1], string4237);
    if (Grace_isTrue(call4238)) {
      setLineNumber(1429);    // compilenode identifier
      var var_tmpStatementToken = var_statementToken;
      setLineNumber(1430);    // compilenode identifier
      var_statementToken = var_sym;
      setLineNumber(1431);    // compilenode member
      // call case 6: other requests
      var call4241 = callmethodChecked(var_sym, "line", []);
      // call case 6: other requests
      var call4243 = callmethodChecked(var_sym, "linePos", []);
      // call case 6: other requests
      var call4244 = callmethodChecked(var_util, "setPosition(2)", [2], call4241, call4243);
      setLineNumber(1432);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call4246 = callmethodChecked(this, "next", []);
      var if4247 = GraceDone;
      setLineNumber(1433);    // compilenode member
      // call case 6: other requests
      var block4250 = new GraceBlock(this, 1433, 0);
      block4250.real = function() {
        // call case 4: self request
        onSelf = true;
        var call4252 = callmethodChecked(this, "expression(1)", [1], var_acceptBlocks);
        return call4252;
      };
      // call case 4: self request
      onSelf = true;
      var call4253 = callmethodChecked(this, "didConsume(1)", [1], block4250);
      var call4254 = callmethodChecked(call4253, "not", []);
      if (Grace_isTrue(call4254)) {
        setLineNumber(1434);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call4257 = callmethodChecked(var_errormessages, "suggestion", []);
        var call4258 = callmethodChecked(call4257, "new", []);
        var var_suggestion = call4258;
        setLineNumber(1435);    // compilenode string
        var string4261 = new GraceString("rparen");
        var array4260 = new PrimitiveGraceList([string4261]);
        // call case 4: self request
        onSelf = true;
        var call4262 = callmethodChecked(this, "findNextValidToken(1)", [1], array4260);
        var var_nextTok = call4262;
        var if4263 = GraceDone;
        setLineNumber(1436);    // compilenode identifier
        var opresult4266 = callmethodChecked(var_nextTok, "==(1)", [1], var_sym);
        if (Grace_isTrue(opresult4266)) {
          setLineNumber(1437);    // compilenode string
          var string4268 = new GraceString("\u00abexpression\u00bb");
          // call case 6: other requests
          var call4269 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string4268, var_lastToken);
          if4263 = call4269;
        } else {
          setLineNumber(1439);    // compilenode member
          // call case 6: other requests
          var call4272 = callmethodChecked(var_nextTok, "prev", []);
          setLineNumber(1440);    // compilenode string
          var string4273 = new GraceString("\u00abexpression\u00bb");
          // call case 6: other requests
          setLineNumber(1439);    // compilenode identifier
          var call4274 = callmethodChecked(var_suggestion, "replaceTokenRange(2)leading(1)trailing(1)with(1)", [2, 1, 1, 1], var_sym, call4272, GraceTrue, GraceFalse, string4273);
          if4263 = call4274;
        }
        setLineNumber(1442);    // compilenode string
        var string4276 = new GraceString("parentheses must contain a valid expression.");
        setLineNumber(1443);    // compilenode member
        // call case 6: other requests
        var call4278 = callmethodChecked(var_sym, "line", []);
        // call case 6: other requests
        var call4280 = callmethodChecked(var_sym, "linePos", []);
        // call case 6: other requests
        setLineNumber(1442);    // compilenode identifier
        var call4281 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string4276, call4278, call4280, var_suggestion);
        if4247 = call4281;
      }
      var if4282 = GraceDone;
      setLineNumber(1445);    // compilenode string
      var string4283 = new GraceString("rparen");
      // call case 6: other requests
      var call4286 = callmethodChecked(var_sym, "kind", []);
      var opresult4288 = callmethodChecked(call4286, "\u2260(1)", [1], string4283);
      if (Grace_isTrue(opresult4288)) {
        setLineNumber(1446);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call4290 = callmethodChecked(this, "checkBadOperators", []);
        setLineNumber(1447);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call4293 = callmethodChecked(var_errormessages, "suggestion", []);
        var call4294 = callmethodChecked(call4293, "new", []);
        var var_suggestion = call4294;
        setLineNumber(1448);    // compilenode string
        var string4296 = new GraceString(")");
        // call case 6: other requests
        var call4297 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string4296, var_lastToken);
        setLineNumber(1449);    // compilenode string
        var string4299 = new GraceString("an expression beginning with a '(' must end with a ')'.");
        setLineNumber(1450);    // compilenode member
        // call case 6: other requests
        var call4301 = callmethodChecked(var_lastToken, "line", []);
        // call case 6: other requests
        var call4303 = callmethodChecked(var_lastToken, "size", []);
        // call case 6: other requests
        var call4306 = callmethodChecked(var_lastToken, "linePos", []);
        var opresult4308 = callmethodChecked(call4306, "+(1)", [1], call4303);
        setLineNumber(1451);    // compilenode identifier
        // call case 6: other requests
        setLineNumber(1449);    // compilenode identifier
        var call4309 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string4299, call4301, opresult4308, var_suggestion);
        if4282 = call4309;
      }
      setLineNumber(1453);    // compilenode identifier
      var_statementToken = var_tmpStatementToken;
      setLineNumber(1454);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call4311 = callmethodChecked(this, "next", []);
      if4235 = call4311;
    } else {
      setLineNumber(1456);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call4313 = callmethodChecked(this, "term", []);
      if4235 = call4313;
    }
    var if4314 = GraceDone;
    setLineNumber(1458);    // compilenode member
    // call case 6: other requests
    var call4317 = callmethodChecked(var_values, "size", []);
    var opresult4319 = callmethodChecked(call4317, ">(1)", [1], var_sz);
    if (Grace_isTrue(opresult4319)) {
      setLineNumber(1459);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call4321 = callmethodChecked(this, "dotrest(1)", [1], var_acceptBlocks);
      setLineNumber(1460);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call4323 = callmethodChecked(this, "callrest(1)", [1], var_acceptBlocks);
      setLineNumber(1461);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call4325 = callmethodChecked(this, "postfixsquare", []);
      setLineNumber(1462);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call4327 = callmethodChecked(this, "valueexpressionrest", []);
      if4314 = call4327;
    }
    return if4314;
  };
  func4226.paramCounts = [1];
  this.methods["expression(1)"] = func4226;
  func4226.definitionLine = 1425;
  func4226.definitionModule = "parser";
  setLineNumber(1468);    // compilenode method
  var func4328 = function(argcv) {    // method postfixsquare
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    var if4329 = GraceDone;
    setLineNumber(1469);    // compilenode string
    var string4331 = new GraceString("lsquare");
    // call case 4: self request
    onSelf = true;
    var call4332 = callmethodChecked(this, "acceptWithoutSpaces(1)", [1], string4331);
    if (Grace_isTrue(call4332)) {
      setLineNumber(1470);    // compilenode identifier
      var var_opening = var_sym;
      setLineNumber(1471);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call4334 = callmethodChecked(this, "next", []);
      setLineNumber(1472);    // compilenode member
      // call case 6: other requests
      var call4336 = callmethodChecked(var_values, "pop", []);
      var var_expr = call4336;
      var if4337 = GraceDone;
      setLineNumber(1473);    // compilenode member
      // call case 6: other requests
      var block4340 = new GraceBlock(this, 1473, 0);
      block4340.real = function() {
        // call case 4: self request
        onSelf = true;
        var call4342 = callmethodChecked(this, "expression(1)", [1], var_blocksOK);
        return call4342;
      };
      // call case 4: self request
      onSelf = true;
      var call4343 = callmethodChecked(this, "didConsume(1)", [1], block4340);
      var call4344 = callmethodChecked(call4343, "not", []);
      if (Grace_isTrue(call4344)) {
        setLineNumber(1474);    // compilenode array
        var array4345 = new PrimitiveGraceList([]);
        var var_suggestions = array4345;
        setLineNumber(1475);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call4348 = callmethodChecked(var_errormessages, "suggestion", []);
        var call4349 = callmethodChecked(call4348, "new", []);
        var var_suggestion = call4349;
        setLineNumber(1476);    // compilenode string
        var string4352 = new GraceString("rsquare");
        var array4351 = new PrimitiveGraceList([string4352]);
        // call case 4: self request
        onSelf = true;
        var call4353 = callmethodChecked(this, "findNextValidToken(1)", [1], array4351);
        var var_nextTok = call4353;
        var if4354 = GraceDone;
        setLineNumber(1477);    // compilenode identifier
        var opresult4357 = callmethodChecked(var_nextTok, "==(1)", [1], var_sym);
        if (Grace_isTrue(opresult4357)) {
          setLineNumber(1478);    // compilenode string
          var string4359 = new GraceString("\u00abindex\u00bb");
          // call case 6: other requests
          var call4360 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string4359, var_lastToken);
          if4354 = call4360;
        } else {
          setLineNumber(1480);    // compilenode member
          // call case 6: other requests
          var call4363 = callmethodChecked(var_nextTok, "prev", []);
          var string4364 = new GraceString("\u00abindex\u00bb");
          // call case 6: other requests
          var call4365 = callmethodChecked(var_suggestion, "replaceTokenRange(2)leading(1)trailing(1)with(1)", [2, 1, 1, 1], var_sym, call4363, GraceTrue, GraceFalse, string4364);
          if4354 = call4365;
        }
        setLineNumber(1482);    // compilenode identifier
        // call case 6: other requests
        var call4367 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
        var if4368 = GraceDone;
        setLineNumber(1483);    // compilenode string
        var string4369 = new GraceString("rsquare");
        // call case 6: other requests
        var call4372 = callmethodChecked(var_nextTok, "kind", []);
        var opresult4374 = callmethodChecked(call4372, "==(1)", [1], string4369);
        if (Grace_isTrue(opresult4374)) {
          setLineNumber(1484);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call4377 = callmethodChecked(var_errormessages, "suggestion", []);
          var call4378 = callmethodChecked(call4377, "new", []);
          var_suggestion = call4378;
          setLineNumber(1485);    // compilenode identifier
          // call case 6: other requests
          var call4380 = callmethodChecked(var_suggestion, "deleteTokenRange(2)leading(1)trailing(1)", [2, 1, 1], var_lastToken, var_nextTok, GraceTrue, GraceFalse);
          setLineNumber(1486);    // compilenode identifier
          // call case 6: other requests
          var call4382 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
          if4368 = call4382;
        }
        setLineNumber(1488);    // compilenode string
        var string4384 = new GraceString("a '[' in an expression must be followed by another expression and a ']'.");
        setLineNumber(1489);    // compilenode member
        // call case 6: other requests
        var call4386 = callmethodChecked(var_sym, "line", []);
        // call case 6: other requests
        var call4388 = callmethodChecked(var_sym, "linePos", []);
        // call case 6: other requests
        setLineNumber(1488);    // compilenode identifier
        var call4389 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestions(1)", [1, 2, 1], string4384, call4386, call4388, var_suggestions);
        if4337 = call4389;
      }
      var if4390 = GraceDone;
      setLineNumber(1491);    // compilenode string
      var string4391 = new GraceString("rsquare");
      // call case 6: other requests
      var call4394 = callmethodChecked(var_sym, "kind", []);
      var opresult4396 = callmethodChecked(call4394, "\u2260(1)", [1], string4391);
      if (Grace_isTrue(opresult4396)) {
        setLineNumber(1492);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call4399 = callmethodChecked(var_errormessages, "suggestion", []);
        var call4400 = callmethodChecked(call4399, "new", []);
        var var_suggestion = call4400;
        setLineNumber(1493);    // compilenode string
        var string4402 = new GraceString("]");
        // call case 6: other requests
        var call4403 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string4402, var_lastToken);
        setLineNumber(1494);    // compilenode string
        var string4405 = new GraceString("a '[' in an expression must be followed by another expression and a ']'.");
        setLineNumber(1495);    // compilenode member
        // call case 6: other requests
        var call4407 = callmethodChecked(var_lastToken, "line", []);
        // call case 6: other requests
        var call4409 = callmethodChecked(var_lastToken, "size", []);
        // call case 6: other requests
        var call4412 = callmethodChecked(var_lastToken, "linePos", []);
        var opresult4414 = callmethodChecked(call4412, "+(1)", [1], call4409);
        // call case 6: other requests
        setLineNumber(1494);    // compilenode identifier
        var call4415 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string4405, call4407, opresult4414, var_suggestion);
        if4390 = call4415;
      }
      setLineNumber(1498);    // compilenode string
      var string4417 = new GraceString("For a Lineup, add a space.  For an indexing operation, use `at(_)` or `at(_)put(_)`.");
      setLineNumber(1497);    // compilenode string
      var string4419 = new GraceString("'[ ... ]' without preceeding space is no longer part of Grace. ");
      var opresult4421 = callmethodChecked(string4419, "++(1)", [1], string4417);
      setLineNumber(1499);    // compilenode member
      // call case 6: other requests
      var call4423 = callmethodChecked(var_opening, "line", []);
      // call case 6: other requests
      var call4425 = callmethodChecked(var_opening, "linePos", []);
      // call case 6: other requests
      setLineNumber(1497);    // compilenode identifier
      var call4426 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)", [1, 2], opresult4421, call4423, call4425);
      if4329 = call4426;
    }
    return if4329;
  };
  func4328.paramCounts = [0];
  this.methods["postfixsquare"] = func4328;
  func4328.definitionLine = 1468;
  func4328.definitionModule = "parser";
  setLineNumber(1506);    // compilenode method
  var func4427 = function(argcv) {    // method oprec(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_o = arguments[curarg];
    curarg++;
    setModuleName("parser");
    var if4428 = GraceDone;
    setLineNumber(1507);    // compilenode string
    var string4429 = new GraceString("*");
    var opresult4432 = callmethodChecked(var_o, "==(1)", [1], string4429);
    if (Grace_isTrue(opresult4432)) {
      setLineNumber(1508);    // compilenode num
      return new GraceNum(10);
    } else {
      var if4433 = GraceDone;
      setLineNumber(1509);    // compilenode string
      var string4434 = new GraceString("/");
      var opresult4437 = callmethodChecked(var_o, "==(1)", [1], string4434);
      if (Grace_isTrue(opresult4437)) {
        setLineNumber(1510);    // compilenode num
        return new GraceNum(10);
      }
      if4428 = if4433;
    }
    setLineNumber(1512);    // compilenode num
    return new GraceNum(5);
  };
  func4427.paramCounts = [1];
  this.methods["oprec(1)"] = func4427;
  func4427.definitionLine = 1506;
  func4427.definitionModule = "parser";
  setLineNumber(1516);    // compilenode method
  var func4438 = function(argcv) {    // method toprec(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_ops = arguments[curarg];
    curarg++;
    setModuleName("parser");
    var if4439 = GraceDone;
    setLineNumber(1517);    // compilenode member
    // call case 6: other requests
    var call4442 = callmethodChecked(var_ops, "size", []);
    var opresult4444 = callmethodChecked(call4442, ">(1)", [1], new GraceNum(0));
    if (Grace_isTrue(opresult4444)) {
      setLineNumber(1518);    // compilenode member
      // call case 6: other requests
      var call4446 = callmethodChecked(var_ops, "last", []);
      var var_o = call4446;
      setLineNumber(1519);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call4448 = callmethodChecked(this, "oprec(1)", [1], var_o);
      return call4448;
    }
    setLineNumber(1521);    // compilenode num
    return new GraceNum(0);
  };
  func4438.paramCounts = [1];
  this.methods["toprec(1)"] = func4438;
  func4438.definitionLine = 1516;
  func4438.definitionModule = "parser";
  setLineNumber(1525);    // compilenode method
  var func4449 = function(argcv) {    // method typeexpressionrest
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    var if4450 = GraceDone;
    setLineNumber(1526);    // compilenode string
    var string4452 = new GraceString("op");
    // call case 4: self request
    onSelf = true;
    var call4453 = callmethodChecked(this, "acceptSameLine(1)", [1], string4452);
    if (Grace_isTrue(call4453)) {
      setLineNumber(1527);    // compilenode string
      var string4455 = new GraceString("type expression");
      var block4456 = new GraceBlock(this, 1527, 0);
      block4456.real = function() {
        // call case 4: self request
        onSelf = true;
        var call4458 = callmethodChecked(this, "typeexpression", []);
        return call4458;
      };
      // call case 4: self request
      onSelf = true;
      var call4459 = callmethodChecked(this, "expressionrest(1)recursingWith(1)blocks(1)", [1, 1, 1], string4455, block4456, var_noBlocks);
      if4450 = call4459;
    }
    return if4450;
  };
  func4449.paramCounts = [0];
  this.methods["typeexpressionrest"] = func4449;
  func4449.definitionLine = 1525;
  func4449.definitionModule = "parser";
  setLineNumber(1531);    // compilenode method
  var func4460 = function(argcv) {    // method valueexpressionrest
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    var if4461 = GraceDone;
    setLineNumber(1532);    // compilenode string
    var string4463 = new GraceString("op");
    // call case 4: self request
    onSelf = true;
    var call4464 = callmethodChecked(this, "accept(1)", [1], string4463);
    if (Grace_isTrue(call4464)) {
      setLineNumber(1533);    // compilenode string
      var string4466 = new GraceString("expression");
      var block4467 = new GraceBlock(this, 1533, 0);
      block4467.real = function() {
        // call case 4: self request
        onSelf = true;
        var call4469 = callmethodChecked(this, "expression(1)", [1], var_blocksOK);
        return call4469;
      };
      // call case 4: self request
      onSelf = true;
      var call4470 = callmethodChecked(this, "expressionrest(1)recursingWith(1)blocks(1)", [1, 1, 1], string4466, block4467, var_blocksOK);
      if4461 = call4470;
    }
    return if4461;
  };
  func4460.paramCounts = [0];
  this.methods["valueexpressionrest"] = func4460;
  func4460.definitionLine = 1531;
  func4460.definitionModule = "parser";
  setLineNumber(1537);    // compilenode method
  var func4471 = function(argcv) {    // method expressionrest(_)recursingWith(_)blocks(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_name = arguments[curarg];
    curarg++;
    var var_recurse = arguments[curarg];
    curarg++;
    var var_acceptBlocks = arguments[curarg];
    curarg++;
    setModuleName("parser");
    setLineNumber(1543);    // compilenode array
    var array4472 = new PrimitiveGraceList([]);
    var var_terms = array4472;
    setLineNumber(1544);    // compilenode array
    var array4473 = new PrimitiveGraceList([]);
    var var_ops = array4473;
    setLineNumber(1545);    // compilenode vardec
    var var_o;
    setLineNumber(1546);    // compilenode vardec
    var var_o2;
    setLineNumber(1547);    // compilenode vardec
    var var_tmp2;
    setLineNumber(1548);    // compilenode member
    // call case 6: other requests
    var call4475 = callmethodChecked(var_values, "pop", []);
    var var_tmp = call4475;
    setLineNumber(1549);    // compilenode identifier
    // call case 6: other requests
    var call4477 = callmethodChecked(var_terms, "push(1)", [1], var_tmp);
    setLineNumber(1550);    // compilenode vardec
    var var_prec;
    setLineNumber(1551);    // compilenode identifier
    var var_allarith = GraceTrue;
    setLineNumber(1552);    // compilenode num
    var var_opcount = new GraceNum(0);
    setLineNumber(1553);    // compilenode string
    var string4478 = new GraceString("");
    var var_opdtype = string4478;
    setLineNumber(1554);    // compilenode block
    var block4480 = new GraceBlock(this, 1554, 0);
    block4480.real = function() {
      setLineNumber(1555);    // compilenode block
      var block4481 = new GraceBlock(this, 1555, 0);
      block4481.real = function() {
        var string4482 = new GraceString("=");
        // call case 6: other requests
        var call4485 = callmethodChecked(var_sym, "value", []);
        var opresult4487 = callmethodChecked(call4485, "\u2260(1)", [1], string4482);
        return opresult4487;
      };
      setLineNumber(1554);    // compilenode string
      var string4490 = new GraceString("op");
      // call case 4: self request
      onSelf = true;
      var call4491 = callmethodChecked(this, "accept(1)onLineOfLastOr(1)", [1, 1], string4490, var_statementToken);
      var opresult4493 = callmethodChecked(call4491, "&&(1)", [1], block4481);
      return opresult4493;
    };
    setLineNumber(1555);    // compilenode block
    var block4494 = new GraceBlock(this, 1555, 0);
    block4494.real = function() {
      setLineNumber(1556);    // compilenode identifier
      var opresult4497 = callmethodChecked(var_opcount, "+(1)", [1], new GraceNum(1));
      var_opcount = opresult4497;
      setLineNumber(1557);    // compilenode member
      // call case 6: other requests
      var call4499 = callmethodChecked(var_sym, "value", []);
      var_o = call4499;
      setLineNumber(1558);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call4501 = callmethodChecked(this, "next", []);
      setLineNumber(1559);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call4503 = callmethodChecked(this, "oprec(1)", [1], var_o);
      var_prec = call4503;
      var if4504 = GraceDone;
      setLineNumber(1560);    // compilenode string
      var string4505 = new GraceString("-");
      var opresult4508 = callmethodChecked(var_o, "\u2260(1)", [1], string4505);
      var string4510 = new GraceString("+");
      var opresult4513 = callmethodChecked(var_o, "\u2260(1)", [1], string4510);
      var string4515 = new GraceString("/");
      var opresult4518 = callmethodChecked(var_o, "\u2260(1)", [1], string4515);
      var string4520 = new GraceString("*");
      var opresult4523 = callmethodChecked(var_o, "\u2260(1)", [1], string4520);
      var opresult4525 = callmethodChecked(opresult4523, "&&(1)", [1], opresult4518);
      var opresult4527 = callmethodChecked(opresult4525, "&&(1)", [1], opresult4513);
      var opresult4529 = callmethodChecked(opresult4527, "&&(1)", [1], opresult4508);
      if (Grace_isTrue(opresult4529)) {
        setLineNumber(1561);    // compilenode identifier
        var_allarith = GraceFalse;
        if4504 = GraceDone;
      }
      var if4530 = GraceDone;
      setLineNumber(1563);    // compilenode member
      // call case 6: other requests
      var call4532 = callmethodChecked(var_allarith, "not", []);
      var opresult4536 = callmethodChecked(var_opdtype, "\u2260(1)", [1], var_o);
      var string4538 = new GraceString("");
      var opresult4541 = callmethodChecked(var_opdtype, "\u2260(1)", [1], string4538);
      var opresult4543 = callmethodChecked(opresult4541, "&&(1)", [1], opresult4536);
      var opresult4545 = callmethodChecked(opresult4543, "&&(1)", [1], call4532);
      if (Grace_isTrue(opresult4545)) {
        setLineNumber(1567);    // compilenode array
        var array4546 = new PrimitiveGraceList([]);
        var var_suggestions = array4546;
        setLineNumber(1568);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call4549 = callmethodChecked(var_errormessages, "suggestion", []);
        var call4550 = callmethodChecked(call4549, "new", []);
        var var_suggestion = call4550;
        setLineNumber(1569);    // compilenode string
        var string4552 = new GraceString(")");
        // call case 6: other requests
        var call4553 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string4552, var_sym);
        setLineNumber(1570);    // compilenode string
        var string4555 = new GraceString("(");
        // call case 6: other requests
        var call4557 = callmethodChecked(var_lastToken, "prev", []);
        // call case 6: other requests
        var call4558 = callmethodChecked(var_suggestion, "insert(1)beforeToken(1)", [1, 1], string4555, call4557);
        setLineNumber(1571);    // compilenode identifier
        // call case 6: other requests
        var call4560 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
        setLineNumber(1572);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call4563 = callmethodChecked(var_errormessages, "suggestion", []);
        var call4564 = callmethodChecked(call4563, "new", []);
        var_suggestion = call4564;
        setLineNumber(1573);    // compilenode string
        var string4566 = new GraceString(")");
        // call case 6: other requests
        var call4568 = callmethodChecked(var_lastToken, "prev", []);
        // call case 6: other requests
        var call4569 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string4566, call4568);
        setLineNumber(1574);    // compilenode string
        var string4571 = new GraceString("(");
        // call case 6: other requests
        // call case 6: other requests
        // call case 6: other requests
        var call4575 = callmethodChecked(var_lastToken, "prev", []);
        var call4576 = callmethodChecked(call4575, "prev", []);
        var call4577 = callmethodChecked(call4576, "prev", []);
        // call case 6: other requests
        var call4578 = callmethodChecked(var_suggestion, "insert(1)beforeToken(1)", [1, 1], string4571, call4577);
        setLineNumber(1575);    // compilenode identifier
        // call case 6: other requests
        var call4580 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
        setLineNumber(1576);    // compilenode string
        var string4582 = new GraceString("an expression containing both arithmetic and non-arithmetic operators requires parentheses.");
        setLineNumber(1577);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call4585 = callmethodChecked(var_lastToken, "prev", []);
        var call4586 = callmethodChecked(call4585, "line", []);
        // call case 6: other requests
        // call case 6: other requests
        var call4589 = callmethodChecked(var_lastToken, "prev", []);
        var call4590 = callmethodChecked(call4589, "linePos", []);
        // call case 6: other requests
        setLineNumber(1576);    // compilenode identifier
        var call4591 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestions(1)", [1, 2, 1], string4582, call4586, call4590, var_suggestions);
        if4530 = call4591;
      }
      setLineNumber(1579);    // compilenode identifier
      var_opdtype = var_o;
      setLineNumber(1580);    // compilenode block
      var block4593 = new GraceBlock(this, 1580, 0);
      block4593.real = function() {
        // call case 4: self request
        onSelf = true;
        var call4595 = callmethodChecked(this, "toprec(1)", [1], var_ops);
        var opresult4598 = callmethodChecked(var_prec, "\u2264(1)", [1], call4595);
        // call case 6: other requests
        var call4602 = callmethodChecked(var_ops, "size", []);
        var opresult4604 = callmethodChecked(call4602, ">(1)", [1], new GraceNum(0));
        var opresult4606 = callmethodChecked(opresult4604, "&&(1)", [1], opresult4598);
        return opresult4606;
      };
      var block4607 = new GraceBlock(this, 1580, 0);
      block4607.real = function() {
        setLineNumber(1586);    // compilenode member
        // call case 6: other requests
        var call4609 = callmethodChecked(var_ops, "pop", []);
        var_o2 = call4609;
        setLineNumber(1587);    // compilenode member
        // call case 6: other requests
        var call4611 = callmethodChecked(var_terms, "pop", []);
        var_tmp2 = call4611;
        setLineNumber(1588);    // compilenode member
        // call case 6: other requests
        var call4613 = callmethodChecked(var_terms, "pop", []);
        var_tmp = call4613;
        setLineNumber(1589);    // compilenode member
        // call case 6: other requests
        var call4616 = callmethodChecked(var_tmp, "line", []);
        // call case 6: other requests
        var call4618 = callmethodChecked(var_tmp, "linePos", []);
        // call case 6: other requests
        var call4619 = callmethodChecked(var_util, "setPosition(2)", [2], call4616, call4618);
        setLineNumber(1590);    // compilenode identifier
        // call case 6: other requests
        // call case 6: other requests
        var call4622 = callmethodChecked(var_ast, "opNode", []);
        var call4623 = callmethodChecked(call4622, "new(3)", [3], var_o2, var_tmp, var_tmp2);
        var_tmp = call4623;
        setLineNumber(1591);    // compilenode identifier
        // call case 6: other requests
        var call4625 = callmethodChecked(var_terms, "push(1)", [1], var_tmp);
        return call4625;
      };
      // call case 5: prelude request
      var call4626 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block4593, block4607);
      setLineNumber(1593);    // compilenode identifier
      // call case 6: other requests
      var call4628 = callmethodChecked(var_ops, "push(1)", [1], var_o);
      var if4629 = GraceDone;
      setLineNumber(1594);    // compilenode string
      var string4631 = new GraceString("lparen");
      // call case 4: self request
      onSelf = true;
      var call4632 = callmethodChecked(this, "accept(1)", [1], string4631);
      if (Grace_isTrue(call4632)) {
        setLineNumber(1601);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call4634 = callmethodChecked(this, "next", []);
        var if4635 = GraceDone;
        setLineNumber(1602);    // compilenode member
        // call case 6: other requests
        // call case 4: self request
        onSelf = true;
        var call4638 = callmethodChecked(this, "didConsume(1)", [1], var_recurse);
        var call4639 = callmethodChecked(call4638, "not", []);
        if (Grace_isTrue(call4639)) {
          setLineNumber(1603);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call4642 = callmethodChecked(var_errormessages, "suggestion", []);
          var call4643 = callmethodChecked(call4642, "new", []);
          var var_suggestion = call4643;
          setLineNumber(1604);    // compilenode string
          var string4646 = new GraceString("rparen");
          var array4645 = new PrimitiveGraceList([string4646]);
          // call case 4: self request
          onSelf = true;
          var call4647 = callmethodChecked(this, "findNextValidToken(1)", [1], array4645);
          var var_nextTok = call4647;
          var if4648 = GraceDone;
          setLineNumber(1605);    // compilenode identifier
          var opresult4651 = callmethodChecked(var_nextTok, "==(1)", [1], var_sym);
          if (Grace_isTrue(opresult4651)) {
            setLineNumber(1606);    // compilenode string
            var string4653 = new GraceString("\u00bb");
            var string4656 = new GraceString("\u00ab");
            var opresult4658 = callmethodChecked(string4656, "++(1)", [1], var_name);
            var opresult4660 = callmethodChecked(opresult4658, "++(1)", [1], string4653);
            // call case 6: other requests
            var call4661 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], opresult4660, var_lastToken);
            if4648 = call4661;
          } else {
            setLineNumber(1608);    // compilenode member
            // call case 6: other requests
            var call4664 = callmethodChecked(var_nextTok, "prev", []);
            var string4665 = new GraceString("\u00bb");
            var string4668 = new GraceString("\u00ab");
            var opresult4670 = callmethodChecked(string4668, "++(1)", [1], var_name);
            var opresult4672 = callmethodChecked(opresult4670, "++(1)", [1], string4665);
            // call case 6: other requests
            var call4673 = callmethodChecked(var_suggestion, "replaceTokenRange(2)leading(1)trailing(1)with(1)", [2, 1, 1, 1], var_sym, call4664, GraceTrue, GraceFalse, opresult4672);
            if4648 = call4673;
          }
          setLineNumber(1610);    // compilenode string
          var string4675 = new GraceString(".");
          var string4678 = new GraceString("parentheses must contain a valid ");
          var opresult4680 = callmethodChecked(string4678, "++(1)", [1], var_name);
          var opresult4682 = callmethodChecked(opresult4680, "++(1)", [1], string4675);
          setLineNumber(1611);    // compilenode member
          // call case 6: other requests
          var call4684 = callmethodChecked(var_sym, "line", []);
          // call case 6: other requests
          var call4686 = callmethodChecked(var_sym, "linePos", []);
          // call case 6: other requests
          setLineNumber(1610);    // compilenode identifier
          var call4687 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], opresult4682, call4684, call4686, var_suggestion);
          if4635 = call4687;
        }
        var if4688 = GraceDone;
        setLineNumber(1613);    // compilenode string
        var string4689 = new GraceString("rparen");
        // call case 6: other requests
        var call4692 = callmethodChecked(var_sym, "kind", []);
        var opresult4694 = callmethodChecked(call4692, "\u2260(1)", [1], string4689);
        if (Grace_isTrue(opresult4694)) {
          setLineNumber(1614);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call4696 = callmethodChecked(this, "checkBadOperators", []);
          setLineNumber(1615);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call4699 = callmethodChecked(var_errormessages, "suggestion", []);
          var call4700 = callmethodChecked(call4699, "new", []);
          var var_suggestion = call4700;
          setLineNumber(1616);    // compilenode string
          var string4702 = new GraceString(")");
          // call case 6: other requests
          var call4703 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string4702, var_lastToken);
          setLineNumber(1617);    // compilenode string
          var string4705 = new GraceString("an expression beginning with a '(' must end with a ')'.");
          setLineNumber(1618);    // compilenode member
          // call case 6: other requests
          var call4707 = callmethodChecked(var_lastToken, "line", []);
          // call case 6: other requests
          var call4709 = callmethodChecked(var_lastToken, "size", []);
          // call case 6: other requests
          var call4712 = callmethodChecked(var_lastToken, "linePos", []);
          var opresult4714 = callmethodChecked(call4712, "+(1)", [1], call4709);
          // call case 6: other requests
          setLineNumber(1617);    // compilenode identifier
          var call4715 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string4705, call4707, opresult4714, var_suggestion);
          if4688 = call4715;
        }
        setLineNumber(1620);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call4717 = callmethodChecked(this, "next", []);
        if4629 = call4717;
      } else {
        var if4718 = GraceDone;
        setLineNumber(1622);    // compilenode call
        // call case 6: other requests
        // call case 4: self request
        onSelf = true;
        var call4721 = callmethodChecked(this, "tokenOnSameLine", []);
        var call4722 = callmethodChecked(call4721, "prefix!", [0]);
        if (Grace_isTrue(call4722)) {
          setLineNumber(1623);    // compilenode array
          var array4723 = new PrimitiveGraceList([]);
          var var_suggestions = array4723;
          setLineNumber(1624);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call4726 = callmethodChecked(var_errormessages, "suggestion", []);
          var call4727 = callmethodChecked(call4726, "new", []);
          var var_suggestion = call4727;
          setLineNumber(1625);    // compilenode identifier
          // call case 6: other requests
          var call4729 = callmethodChecked(var_suggestion, "deleteToken(1)leading(1)trailing(1)", [1, 1, 1], var_lastToken, GraceTrue, GraceFalse);
          setLineNumber(1626);    // compilenode identifier
          // call case 6: other requests
          var call4731 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
          setLineNumber(1627);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call4734 = callmethodChecked(var_errormessages, "suggestion", []);
          var call4735 = callmethodChecked(call4734, "new", []);
          var_suggestion = call4735;
          setLineNumber(1628);    // compilenode string
          var string4737 = new GraceString("\u00bb");
          var string4740 = new GraceString(" \u00ab");
          var opresult4742 = callmethodChecked(string4740, "++(1)", [1], var_name);
          var opresult4744 = callmethodChecked(opresult4742, "++(1)", [1], string4737);
          // call case 6: other requests
          var call4745 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], opresult4744, var_lastToken);
          setLineNumber(1629);    // compilenode identifier
          // call case 6: other requests
          var call4747 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
          setLineNumber(1630);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call4750 = callmethodChecked(var_errormessages, "suggestion", []);
          var call4751 = callmethodChecked(call4750, "new", []);
          var_suggestion = call4751;
          setLineNumber(1631);    // compilenode member
          // call case 6: other requests
          var call4755 = callmethodChecked(var_sym, "line", []);
          // call case 6: other requests
          // call case 6: other requests
          var call4757 = callmethodChecked(var_util, "lines", []);
          var call4758 = callmethodChecked(call4757, "at(1)", [1], call4755);
          var string4760 = new GraceString(" ");
          var opresult4762 = callmethodChecked(string4760, "++(1)", [1], call4758);
          // call case 6: other requests
          var call4763 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], opresult4762, var_lastToken);
          setLineNumber(1632);    // compilenode member
          // call case 6: other requests
          var call4766 = callmethodChecked(var_sym, "line", []);
          // call case 6: other requests
          var call4767 = callmethodChecked(var_suggestion, "deleteLine(1)", [1], call4766);
          setLineNumber(1633);    // compilenode identifier
          // call case 6: other requests
          var call4769 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
          setLineNumber(1634);    // compilenode string
          var string4771 = new GraceString("'. This is often caused by a new line in the middle of an expression.");
          // call case 6: other requests
          var call4774 = callmethodChecked(var_lastToken, "value", []);
          var string4776 = new GraceString("a valid expression must follow '");
          var opresult4778 = callmethodChecked(string4776, "++(1)", [1], call4774);
          var opresult4780 = callmethodChecked(opresult4778, "++(1)", [1], string4771);
          setLineNumber(1635);    // compilenode member
          // call case 6: other requests
          var call4782 = callmethodChecked(var_lastToken, "line", []);
          // call case 6: other requests
          var call4784 = callmethodChecked(var_lastToken, "size", []);
          // call case 6: other requests
          var call4787 = callmethodChecked(var_lastToken, "linePos", []);
          var opresult4789 = callmethodChecked(call4787, "+(1)", [1], call4784);
          // call case 6: other requests
          setLineNumber(1634);    // compilenode identifier
          var call4790 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestions(1)", [1, 2, 1], opresult4780, call4782, opresult4789, var_suggestions);
          if4718 = call4790;
        }
        var if4791 = GraceDone;
        setLineNumber(1637);    // compilenode member
        // call case 6: other requests
        var block4794 = new GraceBlock(this, 1637, 0);
        block4794.real = function() {
          // call case 4: self request
          onSelf = true;
          var call4796 = callmethodChecked(this, "term", []);
          return call4796;
        };
        // call case 4: self request
        onSelf = true;
        var call4797 = callmethodChecked(this, "didConsume(1)", [1], block4794);
        var call4798 = callmethodChecked(call4797, "not", []);
        if (Grace_isTrue(call4798)) {
          setLineNumber(1638);    // compilenode array
          var array4799 = new PrimitiveGraceList([]);
          var var_suggestions = array4799;
          setLineNumber(1639);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call4802 = callmethodChecked(var_errormessages, "suggestion", []);
          var call4803 = callmethodChecked(call4802, "new", []);
          var var_suggestion = call4803;
          setLineNumber(1640);    // compilenode string
          var string4806 = new GraceString("comma");
          var string4807 = new GraceString("rparen");
          var string4808 = new GraceString("rsquare");
          var string4809 = new GraceString("rbrace");
          var array4805 = new PrimitiveGraceList([string4806, string4807, string4808, string4809]);
          // call case 4: self request
          onSelf = true;
          var call4810 = callmethodChecked(this, "findNextValidToken(1)", [1], array4805);
          var var_nextTok = call4810;
          var if4811 = GraceDone;
          setLineNumber(1641);    // compilenode identifier
          var opresult4814 = callmethodChecked(var_nextTok, "==(1)", [1], var_sym);
          if (Grace_isTrue(opresult4814)) {
            setLineNumber(1642);    // compilenode string
            var string4816 = new GraceString("\u00bb");
            var string4819 = new GraceString(" \u00ab");
            var opresult4821 = callmethodChecked(string4819, "++(1)", [1], var_name);
            var opresult4823 = callmethodChecked(opresult4821, "++(1)", [1], string4816);
            // call case 6: other requests
            var call4824 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], opresult4823, var_lastToken);
            if4811 = call4824;
          } else {
            setLineNumber(1644);    // compilenode member
            // call case 6: other requests
            var call4827 = callmethodChecked(var_nextTok, "prev", []);
            var string4828 = new GraceString("\u00bb");
            var string4831 = new GraceString(" \u00ab");
            var opresult4833 = callmethodChecked(string4831, "++(1)", [1], var_name);
            var opresult4835 = callmethodChecked(opresult4833, "++(1)", [1], string4828);
            // call case 6: other requests
            var call4836 = callmethodChecked(var_suggestion, "replaceTokenRange(2)leading(1)trailing(1)with(1)", [2, 1, 1, 1], var_sym, call4827, GraceTrue, GraceFalse, opresult4835);
            if4811 = call4836;
          }
          setLineNumber(1646);    // compilenode identifier
          // call case 6: other requests
          var call4838 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
          setLineNumber(1647);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call4841 = callmethodChecked(var_errormessages, "suggestion", []);
          var call4842 = callmethodChecked(call4841, "new", []);
          var_suggestion = call4842;
          setLineNumber(1648);    // compilenode member
          // call case 6: other requests
          var call4845 = callmethodChecked(var_nextTok, "prev", []);
          // call case 6: other requests
          var call4846 = callmethodChecked(var_suggestion, "deleteTokenRange(2)leading(1)trailing(1)", [2, 1, 1], var_lastToken, call4845, GraceTrue, GraceFalse);
          setLineNumber(1649);    // compilenode identifier
          // call case 6: other requests
          var call4848 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
          setLineNumber(1650);    // compilenode string
          var string4850 = new GraceString("'. This is often caused by a new line in the middle of an expression.");
          // call case 6: other requests
          var call4853 = callmethodChecked(var_lastToken, "value", []);
          var string4855 = new GraceString(" must follow '");
          var string4858 = new GraceString("a valid ");
          var opresult4860 = callmethodChecked(string4858, "++(1)", [1], var_name);
          var opresult4862 = callmethodChecked(opresult4860, "++(1)", [1], string4855);
          var opresult4864 = callmethodChecked(opresult4862, "++(1)", [1], call4853);
          var opresult4866 = callmethodChecked(opresult4864, "++(1)", [1], string4850);
          setLineNumber(1651);    // compilenode member
          // call case 6: other requests
          var call4868 = callmethodChecked(var_lastToken, "line", []);
          // call case 6: other requests
          var call4870 = callmethodChecked(var_lastToken, "size", []);
          // call case 6: other requests
          var call4873 = callmethodChecked(var_lastToken, "linePos", []);
          var opresult4875 = callmethodChecked(call4873, "+(1)", [1], call4870);
          // call case 6: other requests
          setLineNumber(1650);    // compilenode identifier
          var call4876 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestions(1)", [1, 2, 1], opresult4866, call4868, opresult4875, var_suggestions);
          if4791 = call4876;
        }
        if4629 = if4791;
      }
      setLineNumber(1659);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call4878 = callmethodChecked(this, "dotrest(1)", [1], var_acceptBlocks);
      setLineNumber(1660);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call4880 = callmethodChecked(this, "callrest(1)", [1], var_acceptBlocks);
      setLineNumber(1661);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call4882 = callmethodChecked(this, "postfixsquare", []);
      setLineNumber(1662);    // compilenode member
      // call case 6: other requests
      var call4884 = callmethodChecked(var_values, "pop", []);
      var_tmp = call4884;
      setLineNumber(1663);    // compilenode identifier
      // call case 6: other requests
      var call4886 = callmethodChecked(var_terms, "push(1)", [1], var_tmp);
      return call4886;
    };
    // call case 5: prelude request
    var call4887 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block4480, block4494);
    setLineNumber(1665);    // compilenode block
    var block4889 = new GraceBlock(this, 1665, 0);
    block4889.real = function() {
      // call case 6: other requests
      var call4892 = callmethodChecked(var_ops, "size", []);
      var opresult4894 = callmethodChecked(call4892, ">(1)", [1], new GraceNum(0));
      return opresult4894;
    };
    var block4895 = new GraceBlock(this, 1665, 0);
    block4895.real = function() {
      setLineNumber(1667);    // compilenode member
      // call case 6: other requests
      var call4897 = callmethodChecked(var_ops, "pop", []);
      var_o = call4897;
      setLineNumber(1668);    // compilenode member
      // call case 6: other requests
      var call4899 = callmethodChecked(var_terms, "pop", []);
      var_tmp2 = call4899;
      setLineNumber(1669);    // compilenode member
      // call case 6: other requests
      var call4901 = callmethodChecked(var_terms, "pop", []);
      var_tmp = call4901;
      setLineNumber(1670);    // compilenode member
      // call case 6: other requests
      var call4904 = callmethodChecked(var_tmp, "line", []);
      // call case 6: other requests
      var call4906 = callmethodChecked(var_tmp, "linePos", []);
      // call case 6: other requests
      var call4907 = callmethodChecked(var_util, "setPosition(2)", [2], call4904, call4906);
      setLineNumber(1671);    // compilenode identifier
      // call case 6: other requests
      // call case 6: other requests
      var call4910 = callmethodChecked(var_ast, "opNode", []);
      var call4911 = callmethodChecked(call4910, "new(3)", [3], var_o, var_tmp, var_tmp2);
      var_tmp = call4911;
      setLineNumber(1672);    // compilenode identifier
      // call case 6: other requests
      var call4913 = callmethodChecked(var_terms, "push(1)", [1], var_tmp);
      return call4913;
    };
    // call case 5: prelude request
    var call4914 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block4889, block4895);
    setLineNumber(1674);    // compilenode member
    // call case 6: other requests
    var call4916 = callmethodChecked(var_terms, "pop", []);
    var_tmp = call4916;
    setLineNumber(1675);    // compilenode identifier
    // call case 6: other requests
    var call4918 = callmethodChecked(var_values, "push(1)", [1], var_tmp);
    var if4919 = GraceDone;
    setLineNumber(1676);    // compilenode member
    // call case 6: other requests
    var call4922 = callmethodChecked(var_terms, "size", []);
    var opresult4924 = callmethodChecked(call4922, ">(1)", [1], new GraceNum(0));
    if (Grace_isTrue(opresult4924)) {
      setLineNumber(1677);    // compilenode string
      var string4926 = new GraceString("values left on term stack.");
      // call case 6: other requests
      var call4928 = callmethodChecked(var_sym, "line", []);
      // call case 6: other requests
      var call4930 = callmethodChecked(var_sym, "linePos", []);
      // call case 6: other requests
      var call4931 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)", [1, 2], string4926, call4928, call4930);
      if4919 = call4931;
    }
    return if4919;
  };
  func4471.paramCounts = [1, 1, 1];
  this.methods["expressionrest(1)recursingWith(1)blocks(1)"] = func4471;
  func4471.definitionLine = 1537;
  func4471.definitionModule = "parser";
  setLineNumber(1684);    // compilenode method
  var func4932 = function(argcv) {    // method dotrest(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_acceptBlocks = arguments[curarg];
    curarg++;
    setModuleName("parser");
    var if4933 = GraceDone;
    setLineNumber(1685);    // compilenode string
    var string4935 = new GraceString("dot");
    // call case 4: self request
    onSelf = true;
    var call4936 = callmethodChecked(this, "acceptSameLine(1)", [1], string4935);
    if (Grace_isTrue(call4936)) {
      setLineNumber(1686);    // compilenode member
      // call case 6: other requests
      var call4939 = callmethodChecked(var_sym, "line", []);
      // call case 6: other requests
      var call4941 = callmethodChecked(var_sym, "linePos", []);
      // call case 6: other requests
      var call4942 = callmethodChecked(var_util, "setPosition(2)", [2], call4939, call4941);
      setLineNumber(1687);    // compilenode member
      // call case 6: other requests
      var call4944 = callmethodChecked(var_values, "pop", []);
      var var_lookuptarget = call4944;
      setLineNumber(1688);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call4946 = callmethodChecked(this, "next", []);
      var if4947 = GraceDone;
      setLineNumber(1689);    // compilenode string
      var string4949 = new GraceString("identifier");
      // call case 4: self request
      onSelf = true;
      var call4950 = callmethodChecked(this, "accept(1)", [1], string4949);
      if (Grace_isTrue(call4950)) {
        setLineNumber(1690);    // compilenode member
        // call case 6: other requests
        var call4953 = callmethodChecked(var_sym, "line", []);
        // call case 6: other requests
        var call4955 = callmethodChecked(var_sym, "linePos", []);
        // call case 6: other requests
        var call4956 = callmethodChecked(var_util, "setPosition(2)", [2], call4953, call4955);
        setLineNumber(1691);    // compilenode member
        // call case 6: other requests
        var call4959 = callmethodChecked(var_sym, "value", []);
        // call case 6: other requests
        // call case 6: other requests
        var call4961 = callmethodChecked(var_ast, "memberNode", []);
        var call4962 = callmethodChecked(call4961, "new(2)", [2], call4959, var_lookuptarget);
        var var_dro = call4962;
        setLineNumber(1692);    // compilenode identifier
        // call case 6: other requests
        var call4964 = callmethodChecked(var_values, "push(1)", [1], var_dro);
        setLineNumber(1693);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call4966 = callmethodChecked(this, "next", []);
        var if4967 = GraceDone;
        setLineNumber(1694);    // compilenode string
        var string4969 = new GraceString("dot");
        // call case 4: self request
        onSelf = true;
        var call4970 = callmethodChecked(this, "accept(1)", [1], string4969);
        if (Grace_isTrue(call4970)) {
          setLineNumber(1695);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call4972 = callmethodChecked(this, "dotrest(1)", [1], var_acceptBlocks);
          if4967 = call4972;
        } else {
          var if4973 = GraceDone;
          setLineNumber(1698);    // compilenode string
          var string4975 = new GraceString("lgeneric");
          // call case 4: self request
          onSelf = true;
          var call4976 = callmethodChecked(this, "accept(1)", [1], string4975);
          setLineNumber(1697);    // compilenode string
          var string4979 = new GraceString("lsquare");
          // call case 4: self request
          onSelf = true;
          var call4980 = callmethodChecked(this, "accept(1)", [1], string4979);
          var string4983 = new GraceString("string");
          // call case 4: self request
          onSelf = true;
          var call4984 = callmethodChecked(this, "accept(1)", [1], string4983);
          var string4987 = new GraceString("num");
          // call case 4: self request
          onSelf = true;
          var call4988 = callmethodChecked(this, "accept(1)", [1], string4987);
          setLineNumber(1696);    // compilenode string
          var string4991 = new GraceString("lbrace");
          // call case 4: self request
          onSelf = true;
          var call4992 = callmethodChecked(this, "accept(1)", [1], string4991);
          var opresult4995 = callmethodChecked(var_acceptBlocks, "&&(1)", [1], call4992);
          var string4998 = new GraceString("lparen");
          // call case 4: self request
          onSelf = true;
          var call4999 = callmethodChecked(this, "accept(1)", [1], string4998);
          var opresult5001 = callmethodChecked(call4999, "||(1)", [1], opresult4995);
          var opresult5003 = callmethodChecked(opresult5001, "||(1)", [1], call4988);
          var opresult5005 = callmethodChecked(opresult5003, "||(1)", [1], call4984);
          var opresult5007 = callmethodChecked(opresult5005, "||(1)", [1], call4980);
          var opresult5009 = callmethodChecked(opresult5007, "||(1)", [1], call4976);
          if (Grace_isTrue(opresult5009)) {
            setLineNumber(1699);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call5011 = callmethodChecked(this, "callrest(1)", [1], var_acceptBlocks);
            if4973 = call5011;
          }
          if4967 = if4973;
        }
        if4947 = if4967;
      } else {
        setLineNumber(1702);    // compilenode array
        var array5012 = new PrimitiveGraceList([]);
        var var_suggestions = array5012;
        setLineNumber(1703);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call5015 = callmethodChecked(var_errormessages, "suggestion", []);
        var call5016 = callmethodChecked(call5015, "new", []);
        var var_suggestion = call5016;
        setLineNumber(1704);    // compilenode identifier
        // call case 6: other requests
        var call5018 = callmethodChecked(var_suggestion, "deleteToken(1)", [1], var_lastToken);
        setLineNumber(1705);    // compilenode identifier
        // call case 6: other requests
        var call5020 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
        setLineNumber(1706);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call5023 = callmethodChecked(var_errormessages, "suggestion", []);
        var call5024 = callmethodChecked(call5023, "new", []);
        var_suggestion = call5024;
        setLineNumber(1707);    // compilenode string
        var string5026 = new GraceString("\u00abmethod name\u00bb");
        // call case 6: other requests
        var call5027 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string5026, var_lastToken);
        setLineNumber(1708);    // compilenode identifier
        // call case 6: other requests
        var call5029 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
        setLineNumber(1709);    // compilenode string
        var string5031 = new GraceString("a field or method name must follow a '.'.");
        setLineNumber(1710);    // compilenode member
        // call case 6: other requests
        var call5033 = callmethodChecked(var_sym, "line", []);
        // call case 6: other requests
        var call5035 = callmethodChecked(var_sym, "linePos", []);
        // call case 6: other requests
        setLineNumber(1709);    // compilenode identifier
        var call5036 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestions(1)", [1, 2, 1], string5031, call5033, call5035, var_suggestions);
        if4947 = call5036;
      }
      if4933 = if4947;
    }
    return if4933;
  };
  func4932.paramCounts = [1];
  this.methods["dotrest(1)"] = func4932;
  func4932.definitionLine = 1684;
  func4932.definitionModule = "parser";
  setLineNumber(1718);    // compilenode method
  var func5037 = function(argcv) {    // method callrest(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_acceptBlocks = arguments[curarg];
    curarg++;
    setModuleName("parser");
    var if5038 = GraceDone;
    setLineNumber(1719);    // compilenode member
    // call case 6: other requests
    var call5041 = callmethodChecked(var_values, "size", []);
    var opresult5043 = callmethodChecked(call5041, "==(1)", [1], new GraceNum(0));
    if (Grace_isTrue(opresult5043)) {
      setLineNumber(1720);    // compilenode num
      return new GraceNum(0);
    }
    setLineNumber(1722);    // compilenode member
    // call case 6: other requests
    var call5045 = callmethodChecked(var_values, "pop", []);
    var var_meth = call5045;
    var if5046 = GraceDone;
    setLineNumber(1723);    // compilenode string
    var string5047 = new GraceString("identifier");
    // call case 6: other requests
    var call5050 = callmethodChecked(var_meth, "kind", []);
    var opresult5052 = callmethodChecked(call5050, "\u2260(1)", [1], string5047);
    if (Grace_isTrue(opresult5052)) {
      var if5053 = GraceDone;
      setLineNumber(1724);    // compilenode string
      var string5054 = new GraceString("member");
      // call case 6: other requests
      var call5057 = callmethodChecked(var_meth, "kind", []);
      var opresult5059 = callmethodChecked(call5057, "\u2260(1)", [1], string5054);
      if (Grace_isTrue(opresult5059)) {
        setLineNumber(1725);    // compilenode identifier
        // call case 6: other requests
        var call5061 = callmethodChecked(var_values, "push(1)", [1], var_meth);
        setLineNumber(1726);    // compilenode num
        return new GraceNum(0);
      }
      if5046 = if5053;
    }
    setLineNumber(1729);    // compilenode member
    // call case 6: other requests
    var call5063 = callmethodChecked(var_meth, "line", []);
    var var_lnum = call5063;
    setLineNumber(1730);    // compilenode member
    // call case 6: other requests
    var call5065 = callmethodChecked(var_meth, "linePos", []);
    var var_lpos = call5065;
    setLineNumber(1731);    // compilenode member
    // call case 6: other requests
    var call5067 = callmethodChecked(var_meth, "nameString", []);
    var var_methn = call5067;
    setLineNumber(1732);    // compilenode identifier
    var var_btok = var_sym;
    setLineNumber(1733);    // compilenode member
    // call case 6: other requests
    var call5070 = callmethodChecked(var_sym, "line", []);
    // call case 6: other requests
    var call5072 = callmethodChecked(var_sym, "linePos", []);
    // call case 6: other requests
    var call5073 = callmethodChecked(var_util, "setPosition(2)", [2], call5070, call5072);
    setLineNumber(1734);    // compilenode array
    var array5074 = new PrimitiveGraceList([]);
    var var_signature = array5074;
    setLineNumber(1735);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call5077 = callmethodChecked(var_ast, "requestPart", []);
    var call5078 = callmethodChecked(call5077, "new", []);
    var var_part = call5078;
    setLineNumber(1736);    // compilenode identifier
    // call case 6: other requests
    var call5080 = callmethodChecked(var_signature, "push(1)", [1], var_part);
    setLineNumber(1737);    // compilenode identifier
    var var_hadcall = GraceFalse;
    setLineNumber(1738);    // compilenode identifier
    var var_tok = var_lastToken;
    setLineNumber(1739);    // compilenode identifier
    var var_startInd = var_minIndentLevel;
    setLineNumber(1740);    // compilenode identifier
    var var_genericIdents = GraceFalse;
    var if5081 = GraceDone;
    setLineNumber(1741);    // compilenode string
    var string5083 = new GraceString("lgeneric");
    // call case 4: self request
    onSelf = true;
    var call5084 = callmethodChecked(this, "acceptSameLine(1)", [1], string5083);
    if (Grace_isTrue(call5084)) {
      setLineNumber(1742);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call5086 = callmethodChecked(this, "typeArgs", []);
      var_genericIdents = call5086;
      if5081 = GraceDone;
    }
    var if5087 = GraceDone;
    setLineNumber(1744);    // compilenode string
    var string5089 = new GraceString("lparen");
    // call case 4: self request
    onSelf = true;
    var call5090 = callmethodChecked(this, "acceptSameLine(1)", [1], string5089);
    if (Grace_isTrue(call5090)) {
      setLineNumber(1745);    // compilenode member
      // call case 6: other requests
      var call5093 = callmethodChecked(var_sym, "line", []);
      // call case 6: other requests
      var call5094 = callmethodChecked(var_part, "line:=(1)", [1], call5093);
      setLineNumber(1746);    // compilenode member
      // call case 6: other requests
      var call5097 = callmethodChecked(var_sym, "linePos", []);
      // call case 6: other requests
      var call5098 = callmethodChecked(var_part, "linePos:=(1)", [1], call5097);
      setLineNumber(1747);    // compilenode identifier
      // call case 6: other requests
      var call5100 = callmethodChecked(var_part, "name:=(1)", [1], var_methn);
      setLineNumber(1748);    // compilenode identifier
      var_tok = var_sym;
      setLineNumber(1749);    // compilenode identifier
      var_hadcall = GraceTrue;
      setLineNumber(1750);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call5102 = callmethodChecked(this, "parenthesizedArg(1)", [1], var_part);
      if5087 = call5102;
    } else {
      var if5103 = GraceDone;
      setLineNumber(1751);    // compilenode block
      var block5104 = new GraceBlock(this, 1751, 0);
      block5104.real = function() {
        var string5106 = new GraceString("lbrace");
        // call case 4: self request
        onSelf = true;
        var call5107 = callmethodChecked(this, "accept(1)onLineOf(1)", [1, 1], string5106, var_tok);
        return call5107;
      };
      // call case 6: other requests
      var call5110 = callmethodChecked(var_acceptBlocks, "not", []);
      var opresult5112 = callmethodChecked(call5110, "&&(1)", [1], block5104);
      if (Grace_isTrue(opresult5112)) {
        setLineNumber(1752);    // compilenode identifier
        // call case 6: other requests
        var call5114 = callmethodChecked(var_values, "push(1)", [1], var_meth);
        if5103 = call5114;
      } else {
        var if5115 = GraceDone;
        setLineNumber(1753);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call5117 = callmethodChecked(this, "acceptArgumentOnLineOf(1)", [1], var_tok);
        if (Grace_isTrue(call5117)) {
          setLineNumber(1754);    // compilenode identifier
          var_tok = var_sym;
          setLineNumber(1755);    // compilenode identifier
          var_hadcall = GraceTrue;
          setLineNumber(1756);    // compilenode identifier
          // call case 6: other requests
          var call5119 = callmethodChecked(var_part, "name:=(1)", [1], var_methn);
          setLineNumber(1757);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call5121 = callmethodChecked(this, "term", []);
          setLineNumber(1758);    // compilenode member
          // call case 6: other requests
          var call5123 = callmethodChecked(var_values, "pop", []);
          var var_ar = call5123;
          setLineNumber(1759);    // compilenode identifier
          // call case 6: other requests
          // call case 6: other requests
          var call5126 = callmethodChecked(var_part, "args", []);
          var call5127 = callmethodChecked(call5126, "push(1)", [1], var_ar);
          if5115 = call5127;
        } else {
          var if5128 = GraceDone;
          setLineNumber(1760);    // compilenode string
          var string5129 = new GraceString("identifier");
          // call case 6: other requests
          var call5132 = callmethodChecked(var_meth, "kind", []);
          var opresult5134 = callmethodChecked(call5132, "==(1)", [1], string5129);
          if (Grace_isTrue(opresult5134)) {
            setLineNumber(1761);    // compilenode identifier
            // call case 6: other requests
            var call5136 = callmethodChecked(var_values, "push(1)", [1], var_meth);
            if5128 = call5136;
          } else {
            var if5137 = GraceDone;
            setLineNumber(1762);    // compilenode string
            var string5138 = new GraceString("member");
            // call case 6: other requests
            var call5141 = callmethodChecked(var_meth, "kind", []);
            var opresult5143 = callmethodChecked(call5141, "==(1)", [1], string5138);
            if (Grace_isTrue(opresult5143)) {
              setLineNumber(1763);    // compilenode member
              // call case 6: other requests
              var call5145 = callmethodChecked(var_meth, "receiver", []);
              var var_root = call5145;
              setLineNumber(1764);    // compilenode identifier
              var var_outroot = var_meth;
              setLineNumber(1765);    // compilenode block
              var block5147 = new GraceBlock(this, 1765, 0);
              block5147.real = function() {
                var string5148 = new GraceString("member");
                // call case 6: other requests
                var call5151 = callmethodChecked(var_root, "kind", []);
                var opresult5153 = callmethodChecked(call5151, "==(1)", [1], string5148);
                return opresult5153;
              };
              var block5154 = new GraceBlock(this, 1765, 0);
              block5154.real = function() {
                setLineNumber(1766);    // compilenode identifier
                var_outroot = var_root;
                setLineNumber(1767);    // compilenode member
                // call case 6: other requests
                var call5156 = callmethodChecked(var_root, "receiver", []);
                var_root = call5156;
                return GraceDone;
              };
              // call case 5: prelude request
              var call5157 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block5147, block5154);
              var if5158 = GraceDone;
              setLineNumber(1769);    // compilenode string
              var string5159 = new GraceString("identifier");
              // call case 6: other requests
              var call5162 = callmethodChecked(var_root, "kind", []);
              var opresult5164 = callmethodChecked(call5162, "==(1)", [1], string5159);
              if (Grace_isTrue(opresult5164)) {
                setLineNumber(1770);    // compilenode identifier
                // call case 6: other requests
                var call5166 = callmethodChecked(var_values, "push(1)", [1], var_meth);
                if5158 = call5166;
              } else {
                setLineNumber(1772);    // compilenode identifier
                // call case 6: other requests
                var call5168 = callmethodChecked(var_meth, "generics:=(1)", [1], var_genericIdents);
                setLineNumber(1773);    // compilenode identifier
                // call case 6: other requests
                var call5170 = callmethodChecked(var_values, "push(1)", [1], var_meth);
                if5158 = call5170;
              }
              if5137 = if5158;
            }
            if5128 = if5137;
          }
          if5115 = if5128;
        }
        if5103 = if5115;
      }
      if5087 = if5103;
    }
    var if5171 = GraceDone;
    setLineNumber(1776);    // compilenode identifier
    if (Grace_isTrue(var_hadcall)) {
      var if5172 = GraceDone;
      setLineNumber(1777);    // compilenode string
      var string5174 = new GraceString("identifier");
      // call case 4: self request
      onSelf = true;
      var call5175 = callmethodChecked(this, "accept(1)onLineOfLastOr(1)", [1, 1], string5174, var_tok);
      if (Grace_isTrue(call5175)) {
        setLineNumber(1779);    // compilenode identifier
        // call case 6: other requests
        // call case 6: other requests
        var call5178 = callmethodChecked(var_ast, "identifierNode", []);
        var call5179 = callmethodChecked(call5178, "new(2)", [2], var_methn, GraceFalse);
        var var_meth__39__ = call5179;
        setLineNumber(1780);    // compilenode identifier
        // call case 6: other requests
        var call5181 = callmethodChecked(var_meth__39__, "line:=(1)", [1], var_lnum);
        setLineNumber(1781);    // compilenode identifier
        // call case 6: other requests
        var call5183 = callmethodChecked(var_meth__39__, "linePos:=(1)", [1], var_lpos);
        setLineNumber(1782);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call5185 = callmethodChecked(this, "callmprest(3)", [3], var_meth__39__, var_signature, var_tok);
        var_methn = call5185;
        var if5186 = GraceDone;
        setLineNumber(1783);    // compilenode string
        var string5187 = new GraceString("member");
        // call case 6: other requests
        var call5190 = callmethodChecked(var_meth, "kind", []);
        var opresult5192 = callmethodChecked(call5190, "==(1)", [1], string5187);
        if (Grace_isTrue(opresult5192)) {
          setLineNumber(1787);    // compilenode member
          // call case 6: other requests
          var call5195 = callmethodChecked(var_methn, "value", []);
          // call case 6: other requests
          var call5197 = callmethodChecked(var_meth, "receiver", []);
          // call case 6: other requests
          // call case 6: other requests
          var call5199 = callmethodChecked(var_ast, "memberNode", []);
          var call5200 = callmethodChecked(call5199, "new(2)", [2], call5195, call5197);
          var_meth = call5200;
          setLineNumber(1788);    // compilenode member
          // call case 6: other requests
          var call5203 = callmethodChecked(var_methn, "line", []);
          // call case 6: other requests
          var call5204 = callmethodChecked(var_meth, "line:=(1)", [1], call5203);
          setLineNumber(1789);    // compilenode member
          // call case 6: other requests
          var call5207 = callmethodChecked(var_methn, "linePos", []);
          // call case 6: other requests
          var call5208 = callmethodChecked(var_meth, "linePos:=(1)", [1], call5207);
          if5186 = call5208;
        } else {
          setLineNumber(1791);    // compilenode identifier
          var_meth = var_methn;
          if5186 = GraceDone;
        }
        if5172 = if5186;
      }
      setLineNumber(1794);    // compilenode identifier
      // call case 6: other requests
      var call5210 = callmethodChecked(var_util, "setline(1)", [1], var_lnum);
      var if5211 = GraceDone;
      setLineNumber(1795);    // compilenode member
      // call case 6: other requests
      var call5213 = callmethodChecked(var_meth, "isIdentifier", []);
      if (Grace_isTrue(call5213)) {
        setLineNumber(1796);    // compilenode member
        // call case 6: other requests
        var call5215 = callmethodChecked(var_ast, "implicit", []);
        var_meth = call5215;
        if5211 = GraceDone;
      } else {
        setLineNumber(1798);    // compilenode member
        // call case 6: other requests
        var call5217 = callmethodChecked(var_meth, "receiver", []);
        var_meth = call5217;
        if5211 = GraceDone;
      }
      setLineNumber(1801);    // compilenode identifier
      // call case 6: other requests
      // call case 6: other requests
      var call5220 = callmethodChecked(var_ast, "callNode", []);
      var call5221 = callmethodChecked(call5220, "new(2)", [2], var_meth, var_signature);
      var var_call = call5221;
      setLineNumber(1802);    // compilenode identifier
      // call case 6: other requests
      var call5223 = callmethodChecked(var_call, "generics:=(1)", [1], var_genericIdents);
      setLineNumber(1803);    // compilenode identifier
      // call case 6: other requests
      var call5225 = callmethodChecked(var_values, "push(1)", [1], var_call);
      if5171 = call5225;
    } else {
      var if5226 = GraceDone;
      setLineNumber(1804);    // compilenode identifier
      var opresult5229 = callmethodChecked(GraceFalse, "\u2260(1)", [1], var_genericIdents);
      if (Grace_isTrue(opresult5229)) {
        setLineNumber(1805);    // compilenode identifier
        // call case 6: other requests
        var call5231 = callmethodChecked(var_meth, "generics:=(1)", [1], var_genericIdents);
        if5226 = call5231;
      }
      if5171 = if5226;
    }
    setLineNumber(1807);    // compilenode identifier
    var_minIndentLevel = var_startInd;
    setLineNumber(1808);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call5233 = callmethodChecked(this, "dotrest(1)", [1], var_acceptBlocks);
    return call5233;
  };
  func5037.paramCounts = [1];
  this.methods["callrest(1)"] = func5037;
  func5037.definitionLine = 1718;
  func5037.definitionModule = "parser";
  setLineNumber(1811);    // compilenode method
  var func5234 = function(argcv) {    // method parenthesizedArg(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_part = arguments[curarg];
    curarg++;
    setModuleName("parser");
    setLineNumber(1812);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call5236 = callmethodChecked(this, "next", []);
    setLineNumber(1813);    // compilenode block
    var block5238 = new GraceBlock(this, 1813, 0);
    block5238.real = function() {
      // call case 4: self request
      onSelf = true;
      var call5240 = callmethodChecked(this, "expression(1)", [1], var_blocksOK);
      return call5240;
    };
    var block5241 = new GraceBlock(this, 1813, 0);
    block5241.real = function() {
      var if5242 = GraceDone;
      setLineNumber(1815);    // compilenode string
      var string5244 = new GraceString("colon");
      // call case 4: self request
      onSelf = true;
      var call5245 = callmethodChecked(this, "accept(1)", [1], string5244);
      if (Grace_isTrue(call5245)) {
        setLineNumber(1816);    // compilenode member
        // call case 6: other requests
        var call5247 = callmethodChecked(var_values, "pop", []);
        var var_expr = call5247;
        var if5248 = GraceDone;
        setLineNumber(1817);    // compilenode string
        var string5249 = new GraceString("identifier");
        // call case 6: other requests
        var call5252 = callmethodChecked(var_expr, "kind", []);
        var opresult5254 = callmethodChecked(call5252, "\u2260(1)", [1], string5249);
        if (Grace_isTrue(opresult5254)) {
          setLineNumber(1818);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call5257 = callmethodChecked(var_errormessages, "suggestion", []);
          var call5258 = callmethodChecked(call5257, "new", []);
          var var_suggestion = call5258;
          var if5259 = GraceDone;
          setLineNumber(1819);    // compilenode string
          var string5260 = new GraceString("identifier");
          // call case 6: other requests
          // call case 6: other requests
          var call5264 = callmethodChecked(var_sym, "next", []);
          var call5265 = callmethodChecked(call5264, "kind", []);
          var opresult5267 = callmethodChecked(call5265, "==(1)", [1], string5260);
          if (Grace_isTrue(opresult5267)) {
            setLineNumber(1820);    // compilenode member
            // call case 6: other requests
            var call5270 = callmethodChecked(var_sym, "next", []);
            // call case 6: other requests
            var call5271 = callmethodChecked(var_suggestion, "deleteTokenRange(2)leading(1)trailing(1)", [2, 1, 1], var_sym, call5270, GraceTrue, GraceFalse);
            setLineNumber(1821);    // compilenode string
            var string5273 = new GraceString("only variables and constants may be followed by a ':' and a type.");
            setLineNumber(1822);    // compilenode member
            // call case 6: other requests
            var call5275 = callmethodChecked(var_sym, "line", []);
            // call case 6: other requests
            var call5277 = callmethodChecked(var_sym, "linePos", []);
            // call case 6: other requests
            // call case 6: other requests
            var call5281 = callmethodChecked(var_sym, "next", []);
            var call5282 = callmethodChecked(call5281, "size", []);
            // call case 6: other requests
            // call case 6: other requests
            var call5286 = callmethodChecked(var_sym, "next", []);
            var call5287 = callmethodChecked(call5286, "linePos", []);
            var opresult5289 = callmethodChecked(call5287, "+(1)", [1], call5282);
            var diff5291 = callmethodChecked(opresult5289, "-(1)", [1], new GraceNum(1));
            // call case 6: other requests
            setLineNumber(1821);    // compilenode identifier
            var call5292 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)withSuggestion(1)", [1, 3, 1], string5273, call5275, call5277, diff5291, var_suggestion);
            if5259 = call5292;
          } else {
            setLineNumber(1824);    // compilenode identifier
            // call case 6: other requests
            var call5294 = callmethodChecked(var_suggestion, "deleteToken(1)leading(1)trailing(1)", [1, 1, 1], var_sym, GraceTrue, GraceFalse);
            setLineNumber(1825);    // compilenode string
            var string5296 = new GraceString("only variables and constants may be followed by a ':' and a type.");
            setLineNumber(1826);    // compilenode member
            // call case 6: other requests
            var call5298 = callmethodChecked(var_sym, "line", []);
            // call case 6: other requests
            var call5300 = callmethodChecked(var_sym, "linePos", []);
            // call case 6: other requests
            var call5302 = callmethodChecked(var_sym, "linePos", []);
            // call case 6: other requests
            setLineNumber(1825);    // compilenode identifier
            var call5303 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)withSuggestion(1)", [1, 3, 1], string5296, call5298, call5300, call5302, var_suggestion);
            if5259 = call5303;
          }
          if5248 = if5259;
        }
        setLineNumber(1829);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call5305 = callmethodChecked(this, "next", []);
        var if5306 = GraceDone;
        setLineNumber(1830);    // compilenode member
        // call case 6: other requests
        var block5309 = new GraceBlock(this, 1830, 0);
        block5309.real = function() {
          // call case 4: self request
          onSelf = true;
          var call5311 = callmethodChecked(this, "expression(1)", [1], var_blocksOK);
          return call5311;
        };
        // call case 4: self request
        onSelf = true;
        var call5312 = callmethodChecked(this, "didConsume(1)", [1], block5309);
        var call5313 = callmethodChecked(call5312, "not", []);
        if (Grace_isTrue(call5313)) {
          setLineNumber(1831);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call5315 = callmethodChecked(this, "checkBadTypeLiteral", []);
          setLineNumber(1832);    // compilenode array
          var array5316 = new PrimitiveGraceList([]);
          var var_suggestions = array5316;
          setLineNumber(1833);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call5319 = callmethodChecked(var_errormessages, "suggestion", []);
          var call5320 = callmethodChecked(call5319, "new", []);
          var var_suggestion = call5320;
          setLineNumber(1834);    // compilenode string
          var string5323 = new GraceString("rparen");
          var array5322 = new PrimitiveGraceList([string5323]);
          // call case 4: self request
          onSelf = true;
          var call5324 = callmethodChecked(this, "findNextValidToken(1)", [1], array5322);
          var var_nextTok = call5324;
          var if5325 = GraceDone;
          setLineNumber(1835);    // compilenode identifier
          var opresult5328 = callmethodChecked(var_nextTok, "==(1)", [1], var_sym);
          if (Grace_isTrue(opresult5328)) {
            setLineNumber(1836);    // compilenode string
            var string5330 = new GraceString(" \u00abtype name\u00bb");
            // call case 6: other requests
            var call5331 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string5330, var_lastToken);
            if5325 = call5331;
          } else {
            setLineNumber(1838);    // compilenode member
            // call case 6: other requests
            var call5334 = callmethodChecked(var_nextTok, "prev", []);
            var string5335 = new GraceString(" \u00abtype name\u00bb");
            // call case 6: other requests
            var call5336 = callmethodChecked(var_suggestion, "replaceTokenRange(2)leading(1)trailing(1)with(1)", [2, 1, 1, 1], var_sym, call5334, GraceTrue, GraceFalse, string5335);
            if5325 = call5336;
          }
          setLineNumber(1840);    // compilenode identifier
          // call case 6: other requests
          var call5338 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
          setLineNumber(1841);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call5341 = callmethodChecked(var_errormessages, "suggestion", []);
          var call5342 = callmethodChecked(call5341, "new", []);
          var_suggestion = call5342;
          setLineNumber(1842);    // compilenode member
          // call case 6: other requests
          var call5345 = callmethodChecked(var_nextTok, "prev", []);
          // call case 6: other requests
          var call5346 = callmethodChecked(var_suggestion, "deleteTokenRange(2)leading(1)trailing(1)", [2, 1, 1], var_lastToken, call5345, GraceTrue, GraceFalse);
          setLineNumber(1843);    // compilenode identifier
          // call case 6: other requests
          var call5348 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
          setLineNumber(1844);    // compilenode string
          var string5350 = new GraceString("a type name or type expression must follow ':'.");
          setLineNumber(1845);    // compilenode member
          // call case 6: other requests
          var call5352 = callmethodChecked(var_sym, "line", []);
          // call case 6: other requests
          var call5354 = callmethodChecked(var_sym, "linePos", []);
          // call case 6: other requests
          setLineNumber(1844);    // compilenode identifier
          var call5355 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestions(1)", [1, 2, 1], string5350, call5352, call5354, var_suggestions);
          if5306 = call5355;
        }
        setLineNumber(1847);    // compilenode member
        // call case 6: other requests
        var call5358 = callmethodChecked(var_values, "pop", []);
        // call case 6: other requests
        var call5359 = callmethodChecked(var_expr, "dtype:=(1)", [1], call5358);
        setLineNumber(1848);    // compilenode identifier
        // call case 6: other requests
        var call5361 = callmethodChecked(var_values, "push(1)", [1], var_expr);
        if5242 = call5361;
      }
      setLineNumber(1850);    // compilenode block
      var block5363 = new GraceBlock(this, 1850, 0);
      block5363.real = function() {
        var string5365 = new GraceString("comma");
        // call case 4: self request
        onSelf = true;
        var call5366 = callmethodChecked(this, "accept(1)", [1], string5365);
        return call5366;
      };
      var block5367 = new GraceBlock(this, 1850, 0);
      block5367.real = function() {
        setLineNumber(1851);    // compilenode member
        // call case 6: other requests
        var call5370 = callmethodChecked(var_values, "pop", []);
        // call case 6: other requests
        // call case 6: other requests
        var call5372 = callmethodChecked(var_part, "args", []);
        var call5373 = callmethodChecked(call5372, "push(1)", [1], call5370);
        setLineNumber(1852);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call5375 = callmethodChecked(this, "next", []);
        var if5376 = GraceDone;
        setLineNumber(1853);    // compilenode member
        // call case 6: other requests
        var block5379 = new GraceBlock(this, 1853, 0);
        block5379.real = function() {
          // call case 4: self request
          onSelf = true;
          var call5381 = callmethodChecked(this, "expression(1)", [1], var_blocksOK);
          return call5381;
        };
        // call case 4: self request
        onSelf = true;
        var call5382 = callmethodChecked(this, "didConsume(1)", [1], block5379);
        var call5383 = callmethodChecked(call5382, "not", []);
        if (Grace_isTrue(call5383)) {
          setLineNumber(1854);    // compilenode array
          var array5384 = new PrimitiveGraceList([]);
          var var_suggestions = array5384;
          setLineNumber(1855);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call5387 = callmethodChecked(var_errormessages, "suggestion", []);
          var call5388 = callmethodChecked(call5387, "new", []);
          var var_suggestion = call5388;
          setLineNumber(1856);    // compilenode string
          var string5391 = new GraceString("rparen");
          var array5390 = new PrimitiveGraceList([string5391]);
          // call case 4: self request
          onSelf = true;
          var call5392 = callmethodChecked(this, "findNextValidToken(1)", [1], array5390);
          var var_nextTok = call5392;
          var if5393 = GraceDone;
          setLineNumber(1857);    // compilenode identifier
          var opresult5396 = callmethodChecked(var_nextTok, "==(1)", [1], var_sym);
          if (Grace_isTrue(opresult5396)) {
            setLineNumber(1858);    // compilenode string
            var string5398 = new GraceString(" \u00abexpression\u00bb");
            // call case 6: other requests
            var call5399 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string5398, var_lastToken);
            if5393 = call5399;
          } else {
            setLineNumber(1860);    // compilenode member
            // call case 6: other requests
            var call5402 = callmethodChecked(var_nextTok, "prev", []);
            var string5403 = new GraceString(" \u00abexpression\u00bb");
            // call case 6: other requests
            var call5404 = callmethodChecked(var_suggestion, "replaceTokenRange(2)leading(1)trailing(1)with(1)", [2, 1, 1, 1], var_sym, call5402, GraceTrue, GraceFalse, string5403);
            if5393 = call5404;
          }
          setLineNumber(1862);    // compilenode identifier
          // call case 6: other requests
          var call5406 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
          setLineNumber(1863);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call5409 = callmethodChecked(var_errormessages, "suggestion", []);
          var call5410 = callmethodChecked(call5409, "new", []);
          var_suggestion = call5410;
          setLineNumber(1864);    // compilenode member
          // call case 6: other requests
          var call5413 = callmethodChecked(var_nextTok, "prev", []);
          // call case 6: other requests
          var call5414 = callmethodChecked(var_suggestion, "deleteTokenRange(2)leading(1)trailing(1)", [2, 1, 1], var_lastToken, call5413, GraceTrue, GraceFalse);
          setLineNumber(1865);    // compilenode identifier
          // call case 6: other requests
          var call5416 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
          setLineNumber(1866);    // compilenode string
          var string5418 = new GraceString("a method request must have an expression after a ','.");
          setLineNumber(1867);    // compilenode member
          // call case 6: other requests
          var call5420 = callmethodChecked(var_sym, "line", []);
          // call case 6: other requests
          var call5422 = callmethodChecked(var_sym, "linePos", []);
          // call case 6: other requests
          setLineNumber(1866);    // compilenode identifier
          var call5423 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestions(1)", [1, 2, 1], string5418, call5420, call5422, var_suggestions);
          if5376 = call5423;
        }
        var if5424 = GraceDone;
        setLineNumber(1870);    // compilenode string
        var string5426 = new GraceString("colon");
        // call case 4: self request
        onSelf = true;
        var call5427 = callmethodChecked(this, "accept(1)", [1], string5426);
        if (Grace_isTrue(call5427)) {
          setLineNumber(1871);    // compilenode member
          // call case 6: other requests
          var call5429 = callmethodChecked(var_values, "pop", []);
          var var_arg = call5429;
          var if5430 = GraceDone;
          setLineNumber(1872);    // compilenode string
          var string5431 = new GraceString("identifier");
          // call case 6: other requests
          var call5434 = callmethodChecked(var_arg, "kind", []);
          var opresult5436 = callmethodChecked(call5434, "\u2260(1)", [1], string5431);
          if (Grace_isTrue(opresult5436)) {
            setLineNumber(1873);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call5439 = callmethodChecked(var_errormessages, "suggestion", []);
            var call5440 = callmethodChecked(call5439, "new", []);
            var var_suggestion = call5440;
            var if5441 = GraceDone;
            setLineNumber(1874);    // compilenode string
            var string5442 = new GraceString("identifier");
            // call case 6: other requests
            // call case 6: other requests
            var call5446 = callmethodChecked(var_sym, "next", []);
            var call5447 = callmethodChecked(call5446, "kind", []);
            var opresult5449 = callmethodChecked(call5447, "==(1)", [1], string5442);
            if (Grace_isTrue(opresult5449)) {
              setLineNumber(1875);    // compilenode member
              // call case 6: other requests
              var call5452 = callmethodChecked(var_sym, "next", []);
              // call case 6: other requests
              var call5453 = callmethodChecked(var_suggestion, "deleteTokenRange(2)leading(1)trailing(1)", [2, 1, 1], var_sym, call5452, GraceTrue, GraceFalse);
              setLineNumber(1876);    // compilenode string
              var string5455 = new GraceString("only declarations may be followed by a ':' and a type.");
              setLineNumber(1877);    // compilenode member
              // call case 6: other requests
              var call5457 = callmethodChecked(var_sym, "line", []);
              // call case 6: other requests
              var call5459 = callmethodChecked(var_sym, "linePos", []);
              // call case 6: other requests
              // call case 6: other requests
              var call5463 = callmethodChecked(var_sym, "next", []);
              var call5464 = callmethodChecked(call5463, "size", []);
              // call case 6: other requests
              // call case 6: other requests
              var call5468 = callmethodChecked(var_sym, "next", []);
              var call5469 = callmethodChecked(call5468, "linePos", []);
              var opresult5471 = callmethodChecked(call5469, "+(1)", [1], call5464);
              var diff5473 = callmethodChecked(opresult5471, "-(1)", [1], new GraceNum(1));
              // call case 6: other requests
              setLineNumber(1876);    // compilenode identifier
              var call5474 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)withSuggestion(1)", [1, 3, 1], string5455, call5457, call5459, diff5473, var_suggestion);
              if5441 = call5474;
            } else {
              setLineNumber(1879);    // compilenode identifier
              // call case 6: other requests
              var call5476 = callmethodChecked(var_suggestion, "deleteToken(1)", [1], var_sym);
              setLineNumber(1880);    // compilenode string
              var string5478 = new GraceString("only declarations may be followed by a ':' and a type.");
              setLineNumber(1881);    // compilenode member
              // call case 6: other requests
              var call5480 = callmethodChecked(var_sym, "line", []);
              // call case 6: other requests
              var call5482 = callmethodChecked(var_sym, "linePos", []);
              // call case 6: other requests
              var call5484 = callmethodChecked(var_sym, "linePos", []);
              // call case 6: other requests
              setLineNumber(1880);    // compilenode identifier
              var call5485 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)withSuggestion(1)", [1, 3, 1], string5478, call5480, call5482, call5484, var_suggestion);
              if5441 = call5485;
            }
            if5430 = if5441;
          }
          setLineNumber(1884);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call5487 = callmethodChecked(this, "next", []);
          var if5488 = GraceDone;
          setLineNumber(1885);    // compilenode member
          // call case 6: other requests
          var block5491 = new GraceBlock(this, 1885, 0);
          block5491.real = function() {
            // call case 4: self request
            onSelf = true;
            var call5493 = callmethodChecked(this, "expression(1)", [1], var_blocksOK);
            return call5493;
          };
          // call case 4: self request
          onSelf = true;
          var call5494 = callmethodChecked(this, "didConsume(1)", [1], block5491);
          var call5495 = callmethodChecked(call5494, "not", []);
          if (Grace_isTrue(call5495)) {
            setLineNumber(1886);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call5497 = callmethodChecked(this, "checkBadTypeLiteral", []);
            setLineNumber(1887);    // compilenode array
            var array5498 = new PrimitiveGraceList([]);
            var var_suggestions = array5498;
            setLineNumber(1888);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call5501 = callmethodChecked(var_errormessages, "suggestion", []);
            var call5502 = callmethodChecked(call5501, "new", []);
            var var_suggestion = call5502;
            setLineNumber(1889);    // compilenode string
            var string5505 = new GraceString("rparen");
            var array5504 = new PrimitiveGraceList([string5505]);
            // call case 4: self request
            onSelf = true;
            var call5506 = callmethodChecked(this, "findNextValidToken(1)", [1], array5504);
            var var_nextTok = call5506;
            var if5507 = GraceDone;
            setLineNumber(1890);    // compilenode identifier
            var opresult5510 = callmethodChecked(var_nextTok, "==(1)", [1], var_sym);
            if (Grace_isTrue(opresult5510)) {
              setLineNumber(1891);    // compilenode string
              var string5512 = new GraceString(" \u00abtype name\u00bb");
              // call case 6: other requests
              var call5513 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string5512, var_lastToken);
              if5507 = call5513;
            } else {
              setLineNumber(1893);    // compilenode member
              // call case 6: other requests
              var call5516 = callmethodChecked(var_nextTok, "prev", []);
              var string5517 = new GraceString(" \u00abtype name\u00bb");
              // call case 6: other requests
              var call5518 = callmethodChecked(var_suggestion, "replaceTokenRange(2)leading(1)trailing(1)with(1)", [2, 1, 1, 1], var_sym, call5516, GraceTrue, GraceFalse, string5517);
              if5507 = call5518;
            }
            setLineNumber(1895);    // compilenode identifier
            // call case 6: other requests
            var call5520 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
            setLineNumber(1896);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call5523 = callmethodChecked(var_errormessages, "suggestion", []);
            var call5524 = callmethodChecked(call5523, "new", []);
            var_suggestion = call5524;
            setLineNumber(1897);    // compilenode member
            // call case 6: other requests
            var call5527 = callmethodChecked(var_nextTok, "prev", []);
            // call case 6: other requests
            var call5528 = callmethodChecked(var_suggestion, "deleteTokenRange(2)leading(1)trailing(1)", [2, 1, 1], var_lastToken, call5527, GraceTrue, GraceFalse);
            setLineNumber(1898);    // compilenode identifier
            // call case 6: other requests
            var call5530 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
            setLineNumber(1899);    // compilenode string
            var string5532 = new GraceString("a type name or type expression must follow ':'.");
            setLineNumber(1900);    // compilenode member
            // call case 6: other requests
            var call5534 = callmethodChecked(var_sym, "line", []);
            // call case 6: other requests
            var call5536 = callmethodChecked(var_sym, "linePos", []);
            // call case 6: other requests
            setLineNumber(1899);    // compilenode identifier
            var call5537 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestions(1)", [1, 2, 1], string5532, call5534, call5536, var_suggestions);
            if5488 = call5537;
          }
          setLineNumber(1902);    // compilenode member
          // call case 6: other requests
          var call5540 = callmethodChecked(var_values, "pop", []);
          // call case 6: other requests
          var call5541 = callmethodChecked(var_arg, "dtype:=(1)", [1], call5540);
          setLineNumber(1903);    // compilenode identifier
          // call case 6: other requests
          var call5543 = callmethodChecked(var_values, "push(1)", [1], var_arg);
          if5424 = call5543;
        }
        return if5424;
      };
      // call case 5: prelude request
      var call5544 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block5363, block5367);
      setLineNumber(1906);    // compilenode member
      // call case 6: other requests
      var call5547 = callmethodChecked(var_values, "pop", []);
      // call case 6: other requests
      // call case 6: other requests
      var call5549 = callmethodChecked(var_part, "args", []);
      var call5550 = callmethodChecked(call5549, "push(1)", [1], call5547);
      return call5550;
    };
    // call case 4: self request
    onSelf = true;
    var call5551 = callmethodChecked(this, "ifConsume(1)then(1)", [1, 1], block5238, block5241);
    var if5552 = GraceDone;
    setLineNumber(1908);    // compilenode string
    var string5553 = new GraceString("rparen");
    // call case 6: other requests
    var call5556 = callmethodChecked(var_sym, "kind", []);
    var opresult5558 = callmethodChecked(call5556, "\u2260(1)", [1], string5553);
    if (Grace_isTrue(opresult5558)) {
      setLineNumber(1909);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call5560 = callmethodChecked(this, "checkBadOperators", []);
      setLineNumber(1910);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call5563 = callmethodChecked(var_errormessages, "suggestion", []);
      var call5564 = callmethodChecked(call5563, "new", []);
      var var_suggestion = call5564;
      setLineNumber(1911);    // compilenode string
      var string5566 = new GraceString(")");
      // call case 6: other requests
      var call5567 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string5566, var_lastToken);
      setLineNumber(1912);    // compilenode string
      var string5569 = new GraceString("a method request beginning with a '(' must end with a ')'.");
      setLineNumber(1913);    // compilenode member
      // call case 6: other requests
      var call5571 = callmethodChecked(var_lastToken, "line", []);
      // call case 6: other requests
      var call5573 = callmethodChecked(var_lastToken, "size", []);
      // call case 6: other requests
      var call5576 = callmethodChecked(var_lastToken, "linePos", []);
      var opresult5578 = callmethodChecked(call5576, "+(1)", [1], call5573);
      // call case 6: other requests
      setLineNumber(1912);    // compilenode identifier
      var call5579 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string5569, call5571, opresult5578, var_suggestion);
      if5552 = call5579;
    }
    var if5580 = GraceDone;
    setLineNumber(1915);    // compilenode member
    // call case 6: other requests
    var call5582 = callmethodChecked(var_part, "line", []);
    // call case 6: other requests
    var call5585 = callmethodChecked(var_sym, "line", []);
    var opresult5587 = callmethodChecked(call5585, "==(1)", [1], call5582);
    if (Grace_isTrue(opresult5587)) {
      setLineNumber(1916);    // compilenode member
      // call case 6: other requests
      var call5590 = callmethodChecked(var_part, "linePos", []);
      // call case 6: other requests
      var call5593 = callmethodChecked(var_sym, "linePos", []);
      var diff5595 = callmethodChecked(call5593, "-(1)", [1], call5590);
      // call case 6: other requests
      var call5596 = callmethodChecked(var_part, "lineLength:=(1)", [1], diff5595);
      if5580 = call5596;
    }
    setLineNumber(1918);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call5598 = callmethodChecked(this, "next", []);
    return call5598;
  };
  func5234.paramCounts = [1];
  this.methods["parenthesizedArg(1)"] = func5234;
  func5234.definitionLine = 1811;
  func5234.definitionModule = "parser";
  setLineNumber(1921);    // compilenode method
  var func5599 = function(argcv) {    // method typeArgs
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    setLineNumber(1923);    // compilenode identifier
    var var_startToken = var_sym;
    setLineNumber(1924);    // compilenode array
    var array5600 = new PrimitiveGraceList([]);
    var var_args = array5600;
    var if5601 = GraceDone;
    setLineNumber(1925);    // compilenode string
    var string5602 = new GraceString("lgeneric");
    // call case 6: other requests
    var call5605 = callmethodChecked(var_sym, "kind", []);
    var opresult5607 = callmethodChecked(call5605, "\u2260(1)", [1], string5602);
    if (Grace_isTrue(opresult5607)) {
      return var_args;
    }
    setLineNumber(1926);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call5609 = callmethodChecked(this, "next", []);
    setLineNumber(1927);    // compilenode block
    var block5611 = new GraceBlock(this, 1927, 0);
    block5611.real = function() {
      var block5613 = new GraceBlock(this, 1927, 0);
      block5613.real = function() {
        // call case 4: self request
        onSelf = true;
        var call5615 = callmethodChecked(this, "typeArg", []);
        return call5615;
      };
      // call case 4: self request
      onSelf = true;
      var call5616 = callmethodChecked(this, "didConsume(1)", [1], block5613);
      return call5616;
    };
    var block5617 = new GraceBlock(this, 1927, 0);
    block5617.real = function() {
      setLineNumber(1928);    // compilenode member
      // call case 6: other requests
      var call5620 = callmethodChecked(var_values, "pop", []);
      // call case 6: other requests
      var call5621 = callmethodChecked(var_args, "add(1)", [1], call5620);
      var if5622 = GraceDone;
      setLineNumber(1929);    // compilenode string
      var string5623 = new GraceString("comma");
      // call case 6: other requests
      var call5626 = callmethodChecked(var_sym, "kind", []);
      var opresult5628 = callmethodChecked(call5626, "==(1)", [1], string5623);
      if (Grace_isTrue(opresult5628)) {
        // call case 4: self request
        onSelf = true;
        var call5630 = callmethodChecked(this, "next", []);
        if5622 = call5630;
      }
      return if5622;
    };
    // call case 5: prelude request
    var call5631 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block5611, block5617);
    var if5632 = GraceDone;
    setLineNumber(1931);    // compilenode string
    var string5633 = new GraceString("rgeneric");
    // call case 6: other requests
    var call5636 = callmethodChecked(var_sym, "kind", []);
    var opresult5638 = callmethodChecked(call5636, "\u2260(1)", [1], string5633);
    if (Grace_isTrue(opresult5638)) {
      setLineNumber(1932);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call5641 = callmethodChecked(var_errormessages, "suggestion", []);
      var call5642 = callmethodChecked(call5641, "new", []);
      var var_suggestion = call5642;
      setLineNumber(1933);    // compilenode string
      var string5644 = new GraceString(">");
      // call case 6: other requests
      var call5645 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string5644, var_lastToken);
      setLineNumber(1934);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call5648 = callmethodChecked(var_errormessages, "suggestion", []);
      var call5649 = callmethodChecked(call5648, "new", []);
      var var_suggestion2 = call5649;
      setLineNumber(1935);    // compilenode string
      var string5651 = new GraceString(" ");
      // call case 6: other requests
      var call5652 = callmethodChecked(var_suggestion2, "insert(1)beforeToken(1)", [1, 1], string5651, var_startToken);
      setLineNumber(1936);    // compilenode identifier
      var array5653 = new PrimitiveGraceList([var_suggestion, var_suggestion2]);
      var var_suggestions = array5653;
      setLineNumber(1938);    // compilenode string
      var string5655 = new GraceString("If '<' is intended as an operator, precede it by a space.");
      setLineNumber(1937);    // compilenode string
      var string5657 = new GraceString("a method request containing a '<' must have a matching '>'. ");
      var opresult5659 = callmethodChecked(string5657, "++(1)", [1], string5655);
      setLineNumber(1939);    // compilenode member
      // call case 6: other requests
      var call5661 = callmethodChecked(var_lastToken, "line", []);
      // call case 6: other requests
      var call5663 = callmethodChecked(var_lastToken, "size", []);
      // call case 6: other requests
      var call5666 = callmethodChecked(var_lastToken, "linePos", []);
      var opresult5668 = callmethodChecked(call5666, "+(1)", [1], call5663);
      setLineNumber(1940);    // compilenode identifier
      // call case 6: other requests
      setLineNumber(1937);    // compilenode identifier
      var call5669 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestions(1)", [1, 2, 1], opresult5659, call5661, opresult5668, var_suggestions);
      if5632 = call5669;
    }
    setLineNumber(1942);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call5671 = callmethodChecked(this, "next", []);
    setLineNumber(1943);    // compilenode identifier
    return var_args;
  };
  func5599.paramCounts = [0];
  this.methods["typeArgs"] = func5599;
  func5599.definitionLine = 1921;
  func5599.definitionModule = "parser";
  setLineNumber(1946);    // compilenode method
  var func5672 = function(argcv) {    // method typeArg
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    var if5673 = GraceDone;
    setLineNumber(1950);    // compilenode string
    var string5675 = new GraceString("identifier");
    // call case 4: self request
    onSelf = true;
    var call5676 = callmethodChecked(this, "accept(1)", [1], string5675);
    if (Grace_isTrue(call5676)) {
      setLineNumber(1951);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call5678 = callmethodChecked(this, "identifier", []);
      var if5679 = GraceDone;
      setLineNumber(1952);    // compilenode string
      var string5680 = new GraceString("lgeneric");
      // call case 6: other requests
      var call5683 = callmethodChecked(var_sym, "kind", []);
      var opresult5685 = callmethodChecked(call5683, "==(1)", [1], string5680);
      if (Grace_isTrue(opresult5685)) {
        setLineNumber(1953);    // compilenode member
        // call case 6: other requests
        var call5689 = callmethodChecked(var_values, "pop", []);
        // call case 4: self request
        onSelf = true;
        var call5691 = callmethodChecked(this, "typeArgs", []);
        // call case 6: other requests
        // call case 6: other requests
        var call5693 = callmethodChecked(var_ast, "genericNode", []);
        var call5694 = callmethodChecked(call5693, "new(2)", [2], call5689, call5691);
        // call case 6: other requests
        var call5695 = callmethodChecked(var_values, "push(1)", [1], call5694);
        if5679 = call5695;
      }
      if5673 = if5679;
    } else {
      var if5696 = GraceDone;
      setLineNumber(1957);    // compilenode block
      var block5698 = new GraceBlock(this, 1957, 0);
      block5698.real = function() {
        // call case 4: self request
        onSelf = true;
        var call5700 = callmethodChecked(this, "dotypeLiteral", []);
        return call5700;
      };
      // call case 4: self request
      onSelf = true;
      var call5701 = callmethodChecked(this, "didConsume(1)", [1], block5698);
      if (Grace_isTrue(call5701)) {
      }
      if5673 = if5696;
    }
    return if5673;
  };
  func5672.paramCounts = [0];
  this.methods["typeArg"] = func5672;
  func5672.definitionLine = 1946;
  func5672.definitionModule = "parser";
  setLineNumber(1962);    // compilenode method
  var func5702 = function(argcv) {    // method callmprest(_,_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_meth = arguments[curarg];
    curarg++;
    var var_signature = arguments[curarg];
    curarg++;
    var var_tok = arguments[curarg];
    curarg++;
    setModuleName("parser");
    setLineNumber(1967);    // compilenode member
    // call case 6: other requests
    var call5704 = callmethodChecked(var_meth, "value", []);
    var var_methname = call5704;
    setLineNumber(1968);    // compilenode vardec
    var var_nxt;
    setLineNumber(1969);    // compilenode member
    // call case 6: other requests
    var call5706 = callmethodChecked(var_meth, "linePos", []);
    var var_lp = call5706;
    setLineNumber(1970);    // compilenode vardec
    var var_part;
    setLineNumber(1971);    // compilenode block
    var block5708 = new GraceBlock(this, 1971, 0);
    block5708.real = function() {
      setLineNumber(1972);    // compilenode string
      var string5710 = new GraceString("identifier");
      // call case 4: self request
      onSelf = true;
      var call5711 = callmethodChecked(this, "accept(1)onLineOf(1)", [1, 1], string5710, var_lastToken);
      setLineNumber(1971);    // compilenode string
      var string5714 = new GraceString("identifier");
      // call case 4: self request
      onSelf = true;
      var call5715 = callmethodChecked(this, "accept(1)onLineOf(1)", [1, 1], string5714, var_tok);
      var opresult5717 = callmethodChecked(call5715, "||(1)", [1], call5711);
      return opresult5717;
    };
    setLineNumber(1972);    // compilenode block
    var block5718 = new GraceBlock(this, 1972, 0);
    block5718.real = function() {
      setLineNumber(1975);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call5721 = callmethodChecked(var_ast, "requestPart", []);
      var call5722 = callmethodChecked(call5721, "new", []);
      var_part = call5722;
      setLineNumber(1976);    // compilenode identifier
      // call case 6: other requests
      var call5724 = callmethodChecked(var_signature, "push(1)", [1], var_part);
      setLineNumber(1977);    // compilenode string
      var string5725 = new GraceString("()");
      var opresult5728 = callmethodChecked(var_methname, "++(1)", [1], string5725);
      var_methname = opresult5728;
      setLineNumber(1978);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call5730 = callmethodChecked(this, "pushidentifier", []);
      setLineNumber(1979);    // compilenode member
      // call case 6: other requests
      var call5732 = callmethodChecked(var_values, "pop", []);
      var_nxt = call5732;
      setLineNumber(1980);    // compilenode member
      // call case 6: other requests
      var call5734 = callmethodChecked(var_nxt, "value", []);
      var opresult5737 = callmethodChecked(var_methname, "++(1)", [1], call5734);
      var_methname = opresult5737;
      setLineNumber(1981);    // compilenode member
      // call case 6: other requests
      var call5740 = callmethodChecked(var_nxt, "value", []);
      // call case 6: other requests
      var call5741 = callmethodChecked(var_part, "name:=(1)", [1], call5740);
      setLineNumber(1982);    // compilenode identifier
      var var_isTerm = GraceFalse;
      var if5742 = GraceDone;
      setLineNumber(1983);    // compilenode string
      var string5744 = new GraceString("lparen");
      // call case 4: self request
      onSelf = true;
      var call5745 = callmethodChecked(this, "accept(1)", [1], string5744);
      if (Grace_isTrue(call5745)) {
        setLineNumber(1984);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call5747 = callmethodChecked(this, "next", []);
        if5742 = call5747;
      } else {
        var if5748 = GraceDone;
        setLineNumber(1985);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call5750 = callmethodChecked(this, "acceptArgumentOnLineOf(1)", [1], var_lastToken);
        if (Grace_isTrue(call5750)) {
          setLineNumber(1986);    // compilenode identifier
          var_isTerm = GraceTrue;
          if5748 = GraceDone;
        } else {
          setLineNumber(1988);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call5753 = callmethodChecked(var_errormessages, "suggestion", []);
          var call5754 = callmethodChecked(call5753, "new", []);
          var var_suggestion = call5754;
          var if5755 = GraceDone;
          setLineNumber(1989);    // compilenode string
          var string5756 = new GraceString("identifier");
          // call case 6: other requests
          var call5759 = callmethodChecked(var_sym, "kind", []);
          var opresult5761 = callmethodChecked(call5759, "==(1)", [1], string5756);
          if (Grace_isTrue(opresult5761)) {
            setLineNumber(1990);    // compilenode string
            var string5763 = new GraceString(")");
            // call case 6: other requests
            var call5766 = callmethodChecked(var_sym, "value", []);
            var string5768 = new GraceString("(");
            var opresult5770 = callmethodChecked(string5768, "++(1)", [1], call5766);
            var opresult5772 = callmethodChecked(opresult5770, "++(1)", [1], string5763);
            // call case 6: other requests
            var call5773 = callmethodChecked(var_suggestion, "replaceToken(1)leading(1)trailing(1)with(1)", [1, 1, 1, 1], var_sym, GraceTrue, GraceFalse, opresult5772);
            var if5774 = GraceDone;
            setLineNumber(1991);    // compilenode string
            var string5775 = new GraceString("while()do");
            var opresult5778 = callmethodChecked(var_methname, "==(1)", [1], string5775);
            if (Grace_isTrue(opresult5778)) {
              setLineNumber(1992);    // compilenode string
              var string5780 = new GraceString("a while loop must have either a loop body in braces, or a block in parentheses.");
              setLineNumber(1993);    // compilenode member
              // call case 6: other requests
              var call5782 = callmethodChecked(var_sym, "line", []);
              // call case 6: other requests
              var call5784 = callmethodChecked(var_sym, "linePos", []);
              // call case 6: other requests
              setLineNumber(1992);    // compilenode identifier
              var call5785 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string5780, call5782, call5784, var_suggestion);
              if5774 = call5785;
            } else {
              var if5786 = GraceDone;
              setLineNumber(1994);    // compilenode string
              var string5787 = new GraceString("for()do");
              var opresult5790 = callmethodChecked(var_methname, "==(1)", [1], string5787);
              if (Grace_isTrue(opresult5790)) {
                setLineNumber(1995);    // compilenode string
                var string5792 = new GraceString("a for loop must have either a loop body in braces, or a block in parentheses.");
                setLineNumber(1996);    // compilenode member
                // call case 6: other requests
                var call5794 = callmethodChecked(var_sym, "line", []);
                // call case 6: other requests
                var call5796 = callmethodChecked(var_sym, "linePos", []);
                // call case 6: other requests
                setLineNumber(1995);    // compilenode identifier
                var call5797 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string5792, call5794, call5796, var_suggestion);
                if5786 = call5797;
              }
              if5774 = if5786;
            }
            setLineNumber(1998);    // compilenode string
            var string5799 = new GraceString("each argument list in a multi-part method request must be parenthesized, unless it is self-delimiting.");
            setLineNumber(1999);    // compilenode member
            // call case 6: other requests
            var call5801 = callmethodChecked(var_sym, "line", []);
            // call case 6: other requests
            var call5803 = callmethodChecked(var_sym, "linePos", []);
            // call case 6: other requests
            setLineNumber(1998);    // compilenode identifier
            var call5804 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string5799, call5801, call5803, var_suggestion);
            if5755 = call5804;
          } else {
            var if5805 = GraceDone;
            setLineNumber(2001);    // compilenode string
            var string5806 = new GraceString("while()do");
            var opresult5809 = callmethodChecked(var_methname, "==(1)", [1], string5806);
            if (Grace_isTrue(opresult5809)) {
              setLineNumber(2002);    // compilenode string
              var string5811 = new GraceString(" {}");
              // call case 6: other requests
              var call5812 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string5811, var_lastToken);
              setLineNumber(2003);    // compilenode string
              var string5814 = new GraceString("a while loop must have a body.");
              setLineNumber(2004);    // compilenode member
              // call case 6: other requests
              var call5816 = callmethodChecked(var_sym, "line", []);
              // call case 6: other requests
              var call5818 = callmethodChecked(var_sym, "linePos", []);
              // call case 6: other requests
              setLineNumber(2003);    // compilenode identifier
              var call5819 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string5814, call5816, call5818, var_suggestion);
              if5805 = call5819;
            } else {
              var if5820 = GraceDone;
              setLineNumber(2005);    // compilenode string
              var string5821 = new GraceString("for()do");
              var opresult5824 = callmethodChecked(var_methname, "==(1)", [1], string5821);
              if (Grace_isTrue(opresult5824)) {
                setLineNumber(2006);    // compilenode string
                var string5826 = new GraceString(" {}");
                // call case 6: other requests
                var call5827 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string5826, var_lastToken);
                setLineNumber(2007);    // compilenode string
                var string5829 = new GraceString("a for loop must have a body.");
                setLineNumber(2008);    // compilenode member
                // call case 6: other requests
                var call5831 = callmethodChecked(var_sym, "line", []);
                // call case 6: other requests
                var call5833 = callmethodChecked(var_sym, "linePos", []);
                // call case 6: other requests
                setLineNumber(2007);    // compilenode identifier
                var call5834 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string5829, call5831, call5833, var_suggestion);
                if5820 = call5834;
              } else {
                setLineNumber(2010);    // compilenode string
                var string5836 = new GraceString("()");
                // call case 6: other requests
                var call5837 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string5836, var_lastToken);
                setLineNumber(2011);    // compilenode string
                var string5839 = new GraceString("a multi-part method request must end with '()'.");
                setLineNumber(2012);    // compilenode member
                // call case 6: other requests
                var call5841 = callmethodChecked(var_sym, "line", []);
                // call case 6: other requests
                var call5843 = callmethodChecked(var_sym, "linePos", []);
                // call case 6: other requests
                setLineNumber(2011);    // compilenode identifier
                var call5844 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string5839, call5841, call5843, var_suggestion);
                if5820 = call5844;
              }
              if5805 = if5820;
            }
            if5755 = if5805;
          }
          if5748 = if5755;
        }
        if5742 = if5748;
      }
      setLineNumber(2016);    // compilenode string
      var string5846 = new GraceString("rparen");
      // call case 4: self request
      onSelf = true;
      var call5847 = callmethodChecked(this, "accept(1)", [1], string5846);
      var var_isEmpty = call5847;
      var if5848 = GraceDone;
      setLineNumber(2017);    // compilenode identifier
      if (Grace_isTrue(var_isTerm)) {
        setLineNumber(2018);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call5850 = callmethodChecked(this, "term", []);
        if5848 = call5850;
      } else {
        var if5851 = GraceDone;
        setLineNumber(2020);    // compilenode string
        var string5852 = new GraceString("rparen");
        // call case 6: other requests
        var call5855 = callmethodChecked(var_sym, "kind", []);
        var opresult5857 = callmethodChecked(call5855, "\u2260(1)", [1], string5852);
        if (Grace_isTrue(opresult5857)) {
          var if5858 = GraceDone;
          setLineNumber(2021);    // compilenode member
          // call case 6: other requests
          var block5861 = new GraceBlock(this, 2021, 0);
          block5861.real = function() {
            // call case 4: self request
            onSelf = true;
            var call5863 = callmethodChecked(this, "expression(1)", [1], var_blocksOK);
            return call5863;
          };
          // call case 4: self request
          onSelf = true;
          var call5864 = callmethodChecked(this, "didConsume(1)", [1], block5861);
          var call5865 = callmethodChecked(call5864, "not", []);
          if (Grace_isTrue(call5865)) {
            setLineNumber(2022);    // compilenode array
            var array5866 = new PrimitiveGraceList([]);
            var var_suggestions = array5866;
            setLineNumber(2023);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call5869 = callmethodChecked(var_errormessages, "suggestion", []);
            var call5870 = callmethodChecked(call5869, "new", []);
            var var_suggestion = call5870;
            setLineNumber(2024);    // compilenode string
            var string5873 = new GraceString("rparen");
            var array5872 = new PrimitiveGraceList([string5873]);
            // call case 4: self request
            onSelf = true;
            var call5874 = callmethodChecked(this, "findNextValidToken(1)", [1], array5872);
            var var_nextTok = call5874;
            var if5875 = GraceDone;
            setLineNumber(2025);    // compilenode identifier
            var opresult5878 = callmethodChecked(var_nextTok, "==(1)", [1], var_sym);
            if (Grace_isTrue(opresult5878)) {
              setLineNumber(2026);    // compilenode string
              var string5880 = new GraceString("\u00abexpression\u00bb");
              // call case 6: other requests
              var call5881 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string5880, var_lastToken);
              if5875 = call5881;
            } else {
              setLineNumber(2028);    // compilenode member
              // call case 6: other requests
              var call5884 = callmethodChecked(var_nextTok, "prev", []);
              var string5885 = new GraceString("\u00abexpression\u00bb");
              // call case 6: other requests
              var call5886 = callmethodChecked(var_suggestion, "replaceTokenRange(2)leading(1)trailing(1)with(1)", [2, 1, 1, 1], var_sym, call5884, GraceTrue, GraceFalse, string5885);
              setLineNumber(2029);    // compilenode identifier
              // call case 6: other requests
              var call5888 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
              setLineNumber(2030);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              var call5891 = callmethodChecked(var_errormessages, "suggestion", []);
              var call5892 = callmethodChecked(call5891, "new", []);
              var_suggestion = call5892;
              setLineNumber(2031);    // compilenode member
              // call case 6: other requests
              var call5895 = callmethodChecked(var_nextTok, "prev", []);
              // call case 6: other requests
              var call5896 = callmethodChecked(var_suggestion, "deleteTokenRange(2)leading(1)trailing(1)", [2, 1, 1], var_sym, call5895, GraceTrue, GraceFalse);
              if5875 = call5896;
            }
            setLineNumber(2033);    // compilenode identifier
            // call case 6: other requests
            var call5898 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
            setLineNumber(2034);    // compilenode string
            var string5900 = new GraceString("a method request must have an expression or a ')' after a '('.");
            setLineNumber(2035);    // compilenode member
            // call case 6: other requests
            var call5902 = callmethodChecked(var_sym, "line", []);
            // call case 6: other requests
            var call5904 = callmethodChecked(var_sym, "linePos", []);
            // call case 6: other requests
            setLineNumber(2034);    // compilenode identifier
            var call5905 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestions(1)", [1, 2, 1], string5900, call5902, call5904, var_suggestions);
            if5858 = call5905;
          }
          if5851 = if5858;
        }
        setLineNumber(2038);    // compilenode block
        var block5907 = new GraceBlock(this, 2038, 0);
        block5907.real = function() {
          var string5909 = new GraceString("comma");
          // call case 4: self request
          onSelf = true;
          var call5910 = callmethodChecked(this, "accept(1)", [1], string5909);
          return call5910;
        };
        var block5911 = new GraceBlock(this, 2038, 0);
        block5911.real = function() {
          setLineNumber(2039);    // compilenode member
          // call case 6: other requests
          var call5913 = callmethodChecked(var_values, "pop", []);
          var_nxt = call5913;
          setLineNumber(2040);    // compilenode identifier
          // call case 6: other requests
          // call case 6: other requests
          var call5916 = callmethodChecked(var_part, "args", []);
          var call5917 = callmethodChecked(call5916, "push(1)", [1], var_nxt);
          setLineNumber(2041);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call5919 = callmethodChecked(this, "next", []);
          var if5920 = GraceDone;
          setLineNumber(2042);    // compilenode member
          // call case 6: other requests
          var block5923 = new GraceBlock(this, 2042, 0);
          block5923.real = function() {
            // call case 4: self request
            onSelf = true;
            var call5925 = callmethodChecked(this, "expression(1)", [1], var_blocksOK);
            return call5925;
          };
          // call case 4: self request
          onSelf = true;
          var call5926 = callmethodChecked(this, "didConsume(1)", [1], block5923);
          var call5927 = callmethodChecked(call5926, "not", []);
          if (Grace_isTrue(call5927)) {
            setLineNumber(2043);    // compilenode array
            var array5928 = new PrimitiveGraceList([]);
            var var_suggestions = array5928;
            setLineNumber(2044);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call5931 = callmethodChecked(var_errormessages, "suggestion", []);
            var call5932 = callmethodChecked(call5931, "new", []);
            var var_suggestion = call5932;
            setLineNumber(2045);    // compilenode string
            var string5935 = new GraceString("rparen");
            var array5934 = new PrimitiveGraceList([string5935]);
            // call case 4: self request
            onSelf = true;
            var call5936 = callmethodChecked(this, "findNextValidToken(1)", [1], array5934);
            var var_nextTok = call5936;
            var if5937 = GraceDone;
            setLineNumber(2046);    // compilenode identifier
            var opresult5940 = callmethodChecked(var_nextTok, "==(1)", [1], var_sym);
            if (Grace_isTrue(opresult5940)) {
              setLineNumber(2047);    // compilenode string
              var string5942 = new GraceString(" \u00abexpression\u00bb");
              // call case 6: other requests
              var call5943 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string5942, var_lastToken);
              if5937 = call5943;
            } else {
              setLineNumber(2049);    // compilenode member
              // call case 6: other requests
              var call5946 = callmethodChecked(var_nextTok, "prev", []);
              var string5947 = new GraceString(" \u00abexpression\u00bb");
              // call case 6: other requests
              var call5948 = callmethodChecked(var_suggestion, "replaceTokenRange(2)leading(1)trailing(1)with(1)", [2, 1, 1, 1], var_sym, call5946, GraceTrue, GraceFalse, string5947);
              if5937 = call5948;
            }
            setLineNumber(2051);    // compilenode identifier
            // call case 6: other requests
            var call5950 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
            setLineNumber(2052);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call5953 = callmethodChecked(var_errormessages, "suggestion", []);
            var call5954 = callmethodChecked(call5953, "new", []);
            var_suggestion = call5954;
            setLineNumber(2053);    // compilenode member
            // call case 6: other requests
            var call5957 = callmethodChecked(var_nextTok, "prev", []);
            // call case 6: other requests
            var call5958 = callmethodChecked(var_suggestion, "deleteTokenRange(2)leading(1)trailing(1)", [2, 1, 1], var_lastToken, call5957, GraceTrue, GraceFalse);
            setLineNumber(2054);    // compilenode identifier
            // call case 6: other requests
            var call5960 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
            setLineNumber(2055);    // compilenode string
            var string5962 = new GraceString("a method request must have an expression after a ','.");
            setLineNumber(2056);    // compilenode member
            // call case 6: other requests
            var call5964 = callmethodChecked(var_sym, "line", []);
            // call case 6: other requests
            var call5966 = callmethodChecked(var_sym, "linePos", []);
            // call case 6: other requests
            setLineNumber(2055);    // compilenode identifier
            var call5967 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestions(1)", [1, 2, 1], string5962, call5964, call5966, var_suggestions);
            if5920 = call5967;
          }
          return if5920;
        };
        // call case 5: prelude request
        var call5968 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block5907, block5911);
        if5848 = call5968;
      }
      var if5969 = GraceDone;
      setLineNumber(2060);    // compilenode call
      // call case 6: other requests
      var call5971 = callmethodChecked(var_isEmpty, "prefix!", [0]);
      if (Grace_isTrue(call5971)) {
        setLineNumber(2061);    // compilenode member
        // call case 6: other requests
        var call5973 = callmethodChecked(var_values, "pop", []);
        var_nxt = call5973;
        setLineNumber(2062);    // compilenode identifier
        // call case 6: other requests
        // call case 6: other requests
        var call5976 = callmethodChecked(var_part, "args", []);
        var call5977 = callmethodChecked(call5976, "push(1)", [1], var_nxt);
        if5969 = call5977;
      }
      var if5978 = GraceDone;
      setLineNumber(2064);    // compilenode member
      // call case 6: other requests
      var call5980 = callmethodChecked(var_isTerm, "not", []);
      if (Grace_isTrue(call5980)) {
        var if5981 = GraceDone;
        setLineNumber(2065);    // compilenode string
        var string5982 = new GraceString("rparen");
        // call case 6: other requests
        var call5985 = callmethodChecked(var_sym, "kind", []);
        var opresult5987 = callmethodChecked(call5985, "\u2260(1)", [1], string5982);
        if (Grace_isTrue(opresult5987)) {
          setLineNumber(2066);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call5989 = callmethodChecked(this, "checkBadOperators", []);
          setLineNumber(2067);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call5992 = callmethodChecked(var_errormessages, "suggestion", []);
          var call5993 = callmethodChecked(call5992, "new", []);
          var var_suggestion = call5993;
          setLineNumber(2068);    // compilenode string
          var string5995 = new GraceString(")");
          // call case 6: other requests
          var call5996 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string5995, var_lastToken);
          setLineNumber(2069);    // compilenode string
          var string5998 = new GraceString("a part of a multi-part method request beginning with a '(' must end with a ')'.");
          setLineNumber(2070);    // compilenode member
          // call case 6: other requests
          var call6000 = callmethodChecked(var_lastToken, "line", []);
          // call case 6: other requests
          var call6002 = callmethodChecked(var_lastToken, "size", []);
          // call case 6: other requests
          var call6005 = callmethodChecked(var_lastToken, "linePos", []);
          var opresult6007 = callmethodChecked(call6005, "+(1)", [1], call6002);
          // call case 6: other requests
          setLineNumber(2069);    // compilenode identifier
          var call6008 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string5998, call6000, opresult6007, var_suggestion);
          if5981 = call6008;
        }
        if5978 = if5981;
      }
      var if6009 = GraceDone;
      setLineNumber(2073);    // compilenode member
      // call case 6: other requests
      var call6011 = callmethodChecked(var_isTerm, "not", []);
      var string6014 = new GraceString("rparen");
      // call case 4: self request
      onSelf = true;
      var call6015 = callmethodChecked(this, "accept(1)", [1], string6014);
      var opresult6017 = callmethodChecked(call6015, "&&(1)", [1], call6011);
      if (Grace_isTrue(opresult6017)) {
        setLineNumber(2074);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call6019 = callmethodChecked(this, "next", []);
        if6009 = call6019;
      }
      return if6009;
    };
    // call case 5: prelude request
    var call6020 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block5708, block5718);
    setLineNumber(2077);    // compilenode identifier
    // call case 6: other requests
    // call case 6: other requests
    var call6023 = callmethodChecked(var_ast, "identifierNode", []);
    var call6024 = callmethodChecked(call6023, "new(2)", [2], var_methname, GraceFalse);
    var var_meth__39__ = call6024;
    setLineNumber(2078);    // compilenode member
    // call case 6: other requests
    var call6027 = callmethodChecked(var_meth, "line", []);
    // call case 6: other requests
    var call6028 = callmethodChecked(var_meth__39__, "line:=(1)", [1], call6027);
    setLineNumber(2079);    // compilenode member
    // call case 6: other requests
    var call6031 = callmethodChecked(var_meth, "linePos", []);
    // call case 6: other requests
    var call6032 = callmethodChecked(var_meth__39__, "linePos:=(1)", [1], call6031);
    setLineNumber(2080);    // compilenode identifier
    return var_meth__39__;
  };
  func5702.paramCounts = [3];
  this.methods["callmprest(3)"] = func5702;
  func5702.definitionLine = 1962;
  func5702.definitionModule = "parser";
  setLineNumber(2084);    // compilenode method
  var func6033 = function(argcv) {    // method defdec
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    var if6034 = GraceDone;
    setLineNumber(2085);    // compilenode string
    var string6036 = new GraceString("def");
    // call case 4: self request
    onSelf = true;
    var call6037 = callmethodChecked(this, "acceptKeyword(1)", [1], string6036);
    if (Grace_isTrue(call6037)) {
      setLineNumber(2086);    // compilenode member
      // call case 6: other requests
      var call6039 = callmethodChecked(var_sym, "line", []);
      var var_line = call6039;
      setLineNumber(2087);    // compilenode member
      // call case 6: other requests
      var call6041 = callmethodChecked(var_sym, "linePos", []);
      var var_pos = call6041;
      setLineNumber(2088);    // compilenode identifier
      var var_defTok = var_sym;
      setLineNumber(2089);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call6043 = callmethodChecked(this, "next", []);
      var if6044 = GraceDone;
      setLineNumber(2090);    // compilenode string
      var string6045 = new GraceString("identifier");
      // call case 6: other requests
      var call6048 = callmethodChecked(var_sym, "kind", []);
      var opresult6050 = callmethodChecked(call6048, "\u2260(1)", [1], string6045);
      if (Grace_isTrue(opresult6050)) {
        setLineNumber(2091);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call6053 = callmethodChecked(var_errormessages, "suggestion", []);
        var call6054 = callmethodChecked(call6053, "new", []);
        var var_suggestion = call6054;
        setLineNumber(2092);    // compilenode block
        var block6056 = new GraceBlock(this, 2092, 1);
        setLineNumber(1);    // compilenode identifier
        block6056.real = function(var_t) {
          setLineNumber(2093);    // compilenode member
          // call case 6: other requests
          var call6058 = callmethodChecked(var_sym, "line", []);
          // call case 6: other requests
          var call6061 = callmethodChecked(var_t, "line", []);
          var opresult6063 = callmethodChecked(call6061, "==(1)", [1], call6058);
          var string6065 = new GraceString("=");
          // call case 6: other requests
          var call6068 = callmethodChecked(var_t, "value", []);
          var opresult6070 = callmethodChecked(call6068, "==(1)", [1], string6065);
          setLineNumber(2092);    // compilenode string
          var string6072 = new GraceString("op");
          // call case 6: other requests
          var call6075 = callmethodChecked(var_t, "kind", []);
          var opresult6077 = callmethodChecked(call6075, "==(1)", [1], string6072);
          var opresult6079 = callmethodChecked(opresult6077, "&&(1)", [1], opresult6070);
          var opresult6081 = callmethodChecked(opresult6079, "&&(1)", [1], opresult6063);
          return opresult6081;
        };
        // call case 4: self request
        onSelf = true;
        var call6082 = callmethodChecked(this, "findNextToken(1)", [1], block6056);
        var var_nextToken = call6082;
        var if6083 = GraceDone;
        setLineNumber(2094);    // compilenode identifier
        var opresult6086 = callmethodChecked(GraceFalse, "==(1)", [1], var_nextToken);
        if (Grace_isTrue(opresult6086)) {
          setLineNumber(2095);    // compilenode string
          var string6088 = new GraceString(" \u00abname\u00bb =");
          // call case 6: other requests
          var call6089 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string6088, var_lastToken);
          if6083 = call6089;
        } else {
          var if6090 = GraceDone;
          setLineNumber(2096);    // compilenode identifier
          var opresult6093 = callmethodChecked(var_nextToken, "==(1)", [1], var_sym);
          if (Grace_isTrue(opresult6093)) {
            setLineNumber(2097);    // compilenode string
            var string6095 = new GraceString(" \u00abname\u00bb");
            // call case 6: other requests
            var call6096 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string6095, var_lastToken);
            if6090 = call6096;
          } else {
            setLineNumber(2099);    // compilenode member
            // call case 6: other requests
            var call6099 = callmethodChecked(var_nextToken, "prev", []);
            setLineNumber(2100);    // compilenode string
            var string6100 = new GraceString("\u00abname\u00bb ");
            // call case 6: other requests
            setLineNumber(2099);    // compilenode identifier
            var call6101 = callmethodChecked(var_suggestion, "replaceTokenRange(2)leading(1)trailing(1)with(1)", [2, 1, 1, 1], var_sym, call6099, GraceFalse, GraceTrue, string6100);
            if6090 = call6101;
          }
          if6083 = if6090;
        }
        setLineNumber(2103);    // compilenode string
        var string6103 = new GraceString("and a value after the 'def'.");
        setLineNumber(2102);    // compilenode string
        var string6105 = new GraceString("a definition must have a name, '=', ");
        var opresult6107 = callmethodChecked(string6105, "++(1)", [1], string6103);
        setLineNumber(2103);    // compilenode member
        // call case 6: other requests
        var call6109 = callmethodChecked(var_sym, "line", []);
        // call case 6: other requests
        var call6111 = callmethodChecked(var_sym, "linePos", []);
        setLineNumber(2104);    // compilenode identifier
        // call case 6: other requests
        setLineNumber(2102);    // compilenode identifier
        var call6112 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], opresult6107, call6109, call6111, var_suggestion);
        if6044 = call6112;
      }
      setLineNumber(2106);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call6114 = callmethodChecked(this, "pushidentifier", []);
      setLineNumber(2107);    // compilenode identifier
      var var_val = GraceFalse;
      setLineNumber(2108);    // compilenode member
      // call case 6: other requests
      var call6116 = callmethodChecked(var_values, "pop", []);
      var var_name = call6116;
      setLineNumber(2109);    // compilenode identifier
      // call case 6: other requests
      var call6118 = callmethodChecked(var_name, "isBindingOccurrence:=(1)", [1], GraceTrue);
      setLineNumber(2110);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call6120 = callmethodChecked(this, "optionalTypeAnnotation", []);
      var var_dtype = call6120;
      setLineNumber(2111);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call6122 = callmethodChecked(this, "doannotation", []);
      var var_anns = call6122;
      var if6123 = GraceDone;
      setLineNumber(2112);    // compilenode string
      var string6124 = new GraceString("=");
      // call case 6: other requests
      var call6127 = callmethodChecked(var_sym, "value", []);
      var opresult6129 = callmethodChecked(call6127, "==(1)", [1], string6124);
      var string6132 = new GraceString("op");
      // call case 4: self request
      onSelf = true;
      var call6133 = callmethodChecked(this, "accept(1)", [1], string6132);
      var opresult6135 = callmethodChecked(call6133, "&&(1)", [1], opresult6129);
      if (Grace_isTrue(opresult6135)) {
        setLineNumber(2113);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call6137 = callmethodChecked(this, "next", []);
        var if6138 = GraceDone;
        setLineNumber(2114);    // compilenode member
        // call case 6: other requests
        var block6141 = new GraceBlock(this, 2114, 0);
        block6141.real = function() {
          // call case 4: self request
          onSelf = true;
          var call6143 = callmethodChecked(this, "expression(1)", [1], var_blocksOK);
          return call6143;
        };
        // call case 4: self request
        onSelf = true;
        var call6144 = callmethodChecked(this, "didConsume(1)", [1], block6141);
        var call6145 = callmethodChecked(call6144, "not", []);
        if (Grace_isTrue(call6145)) {
          setLineNumber(2115);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call6148 = callmethodChecked(var_errormessages, "suggestion", []);
          var call6149 = callmethodChecked(call6148, "new", []);
          var var_suggestion = call6149;
          setLineNumber(2116);    // compilenode array
          var array6151 = new PrimitiveGraceList([]);
          // call case 4: self request
          onSelf = true;
          var call6152 = callmethodChecked(this, "findNextValidToken(1)", [1], array6151);
          var var_nextTok = call6152;
          var if6153 = GraceDone;
          setLineNumber(2117);    // compilenode identifier
          var opresult6156 = callmethodChecked(var_nextTok, "==(1)", [1], var_sym);
          if (Grace_isTrue(opresult6156)) {
            setLineNumber(2118);    // compilenode string
            var string6158 = new GraceString(" \u00abexpression\u00bb");
            // call case 6: other requests
            var call6159 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string6158, var_lastToken);
            if6153 = call6159;
          } else {
            setLineNumber(2120);    // compilenode member
            // call case 6: other requests
            var call6162 = callmethodChecked(var_nextTok, "prev", []);
            setLineNumber(2121);    // compilenode string
            var string6163 = new GraceString(" \u00abexpression\u00bb");
            // call case 6: other requests
            setLineNumber(2120);    // compilenode identifier
            var call6164 = callmethodChecked(var_suggestion, "replaceTokenRange(2)leading(1)trailing(1)with(1)", [2, 1, 1, 1], var_sym, call6162, GraceTrue, GraceFalse, string6163);
            if6153 = call6164;
          }
          setLineNumber(2123);    // compilenode string
          var string6166 = new GraceString("a definition must have a value after the '='.");
          setLineNumber(2124);    // compilenode member
          // call case 6: other requests
          var call6168 = callmethodChecked(var_lastToken, "line", []);
          // call case 6: other requests
          var call6170 = callmethodChecked(var_lastToken, "size", []);
          // call case 6: other requests
          var call6173 = callmethodChecked(var_lastToken, "linePos", []);
          var opresult6175 = callmethodChecked(call6173, "+(1)", [1], call6170);
          setLineNumber(2125);    // compilenode identifier
          // call case 6: other requests
          setLineNumber(2123);    // compilenode identifier
          var call6176 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string6166, call6168, opresult6175, var_suggestion);
          if6138 = call6176;
        }
        setLineNumber(2127);    // compilenode member
        // call case 6: other requests
        var call6178 = callmethodChecked(var_values, "pop", []);
        var_val = call6178;
        if6123 = GraceDone;
      } else {
        var if6179 = GraceDone;
        setLineNumber(2128);    // compilenode string
        var string6181 = new GraceString("bind");
        // call case 4: self request
        onSelf = true;
        var call6182 = callmethodChecked(this, "accept(1)", [1], string6181);
        if (Grace_isTrue(call6182)) {
          setLineNumber(2129);    // compilenode array
          var array6183 = new PrimitiveGraceList([]);
          var var_suggestions = array6183;
          setLineNumber(2130);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call6186 = callmethodChecked(var_errormessages, "suggestion", []);
          var call6187 = callmethodChecked(call6186, "new", []);
          var var_suggestion = call6187;
          setLineNumber(2131);    // compilenode string
          var string6189 = new GraceString("=");
          // call case 6: other requests
          var call6190 = callmethodChecked(var_suggestion, "replaceToken(1)with(1)", [1, 1], var_sym, string6189);
          setLineNumber(2132);    // compilenode identifier
          // call case 6: other requests
          var call6192 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
          setLineNumber(2133);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call6195 = callmethodChecked(var_errormessages, "suggestion", []);
          var call6196 = callmethodChecked(call6195, "new", []);
          var_suggestion = call6196;
          setLineNumber(2134);    // compilenode string
          var string6198 = new GraceString("var");
          // call case 6: other requests
          var call6199 = callmethodChecked(var_suggestion, "replaceToken(1)with(1)", [1, 1], var_defTok, string6198);
          setLineNumber(2135);    // compilenode identifier
          // call case 6: other requests
          var call6201 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
          setLineNumber(2137);    // compilenode string
          var string6203 = new GraceString("A variable declaration uses 'var' and ':='.");
          setLineNumber(2136);    // compilenode string
          var string6205 = new GraceString("a definition must use '=' instead of ':='. ");
          var opresult6207 = callmethodChecked(string6205, "++(1)", [1], string6203);
          setLineNumber(2138);    // compilenode member
          // call case 6: other requests
          var call6209 = callmethodChecked(var_sym, "line", []);
          // call case 6: other requests
          var call6211 = callmethodChecked(var_sym, "linePos", []);
          // call case 6: other requests
          var call6214 = callmethodChecked(var_sym, "linePos", []);
          var opresult6216 = callmethodChecked(call6214, "+(1)", [1], new GraceNum(1));
          // call case 6: other requests
          setLineNumber(2136);    // compilenode identifier
          var call6217 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)withSuggestions(1)", [1, 3, 1], opresult6207, call6209, call6211, opresult6216, var_suggestions);
          if6179 = call6217;
        } else {
          setLineNumber(2140);    // compilenode array
          var array6218 = new PrimitiveGraceList([]);
          var var_suggestions = array6218;
          setLineNumber(2141);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call6221 = callmethodChecked(var_errormessages, "suggestion", []);
          var call6222 = callmethodChecked(call6221, "new", []);
          var var_suggestion = call6222;
          setLineNumber(2142);    // compilenode string
          var string6224 = new GraceString(" = \u00abexpression\u00bb");
          // call case 6: other requests
          var call6225 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string6224, var_lastToken);
          setLineNumber(2143);    // compilenode identifier
          // call case 6: other requests
          var call6227 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
          setLineNumber(2144);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call6230 = callmethodChecked(var_errormessages, "suggestion", []);
          var call6231 = callmethodChecked(call6230, "new", []);
          var_suggestion = call6231;
          setLineNumber(2145);    // compilenode string
          var string6233 = new GraceString("var");
          // call case 6: other requests
          var call6234 = callmethodChecked(var_suggestion, "replaceToken(1)with(1)", [1, 1], var_defTok, string6233);
          setLineNumber(2146);    // compilenode identifier
          // call case 6: other requests
          var call6236 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
          setLineNumber(2148);    // compilenode string
          var string6238 = new GraceString("A variable declaration does not require a value but uses 'var', not 'def'.");
          setLineNumber(2147);    // compilenode string
          var string6240 = new GraceString("a definition must have '=' and a value after the name. ");
          var opresult6242 = callmethodChecked(string6240, "++(1)", [1], string6238);
          setLineNumber(2149);    // compilenode member
          // call case 6: other requests
          var call6244 = callmethodChecked(var_sym, "line", []);
          // call case 6: other requests
          var call6246 = callmethodChecked(var_sym, "linePos", []);
          // call case 6: other requests
          setLineNumber(2147);    // compilenode identifier
          var call6247 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestions(1)", [1, 2, 1], opresult6242, call6244, call6246, var_suggestions);
          if6179 = call6247;
        }
        if6123 = if6179;
      }
      setLineNumber(2151);    // compilenode member
      // call case 6: other requests
      var call6250 = callmethodChecked(var_defTok, "line", []);
      // call case 6: other requests
      var call6252 = callmethodChecked(var_defTok, "linePos", []);
      // call case 6: other requests
      var call6253 = callmethodChecked(var_util, "setPosition(2)", [2], call6250, call6252);
      setLineNumber(2152);    // compilenode identifier
      // call case 6: other requests
      // call case 6: other requests
      var call6256 = callmethodChecked(var_ast, "defDecNode", []);
      var call6257 = callmethodChecked(call6256, "new(3)", [3], var_name, var_val, var_dtype);
      var var_o = call6257;
      var if6258 = GraceDone;
      setLineNumber(2153);    // compilenode identifier
      var opresult6261 = callmethodChecked(GraceFalse, "\u2260(1)", [1], var_anns);
      if (Grace_isTrue(opresult6261)) {
        // call case 6: other requests
        // call case 6: other requests
        var call6264 = callmethodChecked(var_o, "annotations", []);
        var call6265 = callmethodChecked(call6264, "addAll(1)", [1], var_anns);
        if6258 = call6265;
      }
      setLineNumber(2154);    // compilenode identifier
      // call case 6: other requests
      var call6267 = callmethodChecked(var_o, "startToken:=(1)", [1], var_defTok);
      setLineNumber(2155);    // compilenode identifier
      // call case 6: other requests
      var call6269 = callmethodChecked(var_values, "push(1)", [1], var_o);
      setLineNumber(2156);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call6271 = callmethodChecked(this, "reconcileComments", []);
      if6034 = call6271;
    }
    return if6034;
  };
  func6033.paramCounts = [0];
  this.methods["defdec"] = func6033;
  func6033.definitionLine = 2084;
  func6033.definitionModule = "parser";
  setLineNumber(2161);    // compilenode method
  var func6272 = function(argcv) {    // method vardec
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    var if6273 = GraceDone;
    setLineNumber(2162);    // compilenode string
    var string6275 = new GraceString("var");
    // call case 4: self request
    onSelf = true;
    var call6276 = callmethodChecked(this, "acceptKeyword(1)", [1], string6275);
    if (Grace_isTrue(call6276)) {
      setLineNumber(2163);    // compilenode member
      // call case 6: other requests
      var call6278 = callmethodChecked(var_sym, "line", []);
      var var_line = call6278;
      setLineNumber(2164);    // compilenode member
      // call case 6: other requests
      var call6280 = callmethodChecked(var_sym, "linePos", []);
      var var_pos = call6280;
      setLineNumber(2165);    // compilenode identifier
      var var_varTok = var_sym;
      setLineNumber(2166);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call6282 = callmethodChecked(this, "next", []);
      var if6283 = GraceDone;
      setLineNumber(2167);    // compilenode string
      var string6284 = new GraceString("identifier");
      // call case 6: other requests
      var call6287 = callmethodChecked(var_sym, "kind", []);
      var opresult6289 = callmethodChecked(call6287, "\u2260(1)", [1], string6284);
      if (Grace_isTrue(opresult6289)) {
        setLineNumber(2168);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call6292 = callmethodChecked(var_errormessages, "suggestion", []);
        var call6293 = callmethodChecked(call6292, "new", []);
        var var_suggestion = call6293;
        setLineNumber(2169);    // compilenode block
        var block6295 = new GraceBlock(this, 2169, 1);
        setLineNumber(1);    // compilenode identifier
        block6295.real = function(var_t) {
          setLineNumber(2170);    // compilenode member
          // call case 6: other requests
          var call6297 = callmethodChecked(var_sym, "line", []);
          // call case 6: other requests
          var call6300 = callmethodChecked(var_t, "line", []);
          var opresult6302 = callmethodChecked(call6300, "==(1)", [1], call6297);
          setLineNumber(2169);    // compilenode string
          var string6304 = new GraceString("bind");
          // call case 6: other requests
          var call6307 = callmethodChecked(var_t, "kind", []);
          var opresult6309 = callmethodChecked(call6307, "==(1)", [1], string6304);
          var opresult6311 = callmethodChecked(opresult6309, "&&(1)", [1], opresult6302);
          return opresult6311;
        };
        // call case 4: self request
        onSelf = true;
        var call6312 = callmethodChecked(this, "findNextToken(1)", [1], block6295);
        var var_nextToken = call6312;
        var if6313 = GraceDone;
        setLineNumber(2171);    // compilenode block
        var block6314 = new GraceBlock(this, 2171, 0);
        block6314.real = function() {
          var opresult6317 = callmethodChecked(var_nextToken, "==(1)", [1], var_sym);
          return opresult6317;
        };
        var opresult6321 = callmethodChecked(GraceFalse, "==(1)", [1], var_nextToken);
        var opresult6323 = callmethodChecked(opresult6321, "||(1)", [1], block6314);
        if (Grace_isTrue(opresult6323)) {
          setLineNumber(2172);    // compilenode string
          var string6325 = new GraceString(" \u00abname\u00bb");
          // call case 6: other requests
          var call6326 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string6325, var_lastToken);
          if6313 = call6326;
        } else {
          setLineNumber(2174);    // compilenode member
          // call case 6: other requests
          var call6329 = callmethodChecked(var_nextToken, "prev", []);
          setLineNumber(2175);    // compilenode string
          var string6330 = new GraceString("\u00abname\u00bb ");
          // call case 6: other requests
          setLineNumber(2174);    // compilenode identifier
          var call6331 = callmethodChecked(var_suggestion, "replaceTokenRange(2)leading(1)trailing(1)with(1)", [2, 1, 1, 1], var_sym, call6329, GraceFalse, GraceTrue, string6330);
          if6313 = call6331;
        }
        setLineNumber(2177);    // compilenode string
        var string6333 = new GraceString("a variable declaration must have a name after the 'var'.");
        setLineNumber(2178);    // compilenode member
        // call case 6: other requests
        var call6335 = callmethodChecked(var_sym, "line", []);
        // call case 6: other requests
        var call6337 = callmethodChecked(var_sym, "linePos", []);
        // call case 6: other requests
        setLineNumber(2177);    // compilenode identifier
        var call6338 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string6333, call6335, call6337, var_suggestion);
        if6283 = call6338;
      }
      setLineNumber(2180);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call6340 = callmethodChecked(this, "pushidentifier", []);
      setLineNumber(2181);    // compilenode identifier
      var var_val = GraceFalse;
      setLineNumber(2182);    // compilenode member
      // call case 6: other requests
      var call6342 = callmethodChecked(var_values, "pop", []);
      var var_name = call6342;
      setLineNumber(2183);    // compilenode identifier
      // call case 6: other requests
      var call6344 = callmethodChecked(var_name, "isBindingOccurrence:=(1)", [1], GraceTrue);
      setLineNumber(2184);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call6346 = callmethodChecked(this, "optionalTypeAnnotation", []);
      var var_dtype = call6346;
      setLineNumber(2185);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call6348 = callmethodChecked(this, "doannotation", []);
      var var_anns = call6348;
      var if6349 = GraceDone;
      setLineNumber(2186);    // compilenode string
      var string6351 = new GraceString("bind");
      // call case 4: self request
      onSelf = true;
      var call6352 = callmethodChecked(this, "accept(1)", [1], string6351);
      if (Grace_isTrue(call6352)) {
        setLineNumber(2187);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call6354 = callmethodChecked(this, "next", []);
        var if6355 = GraceDone;
        setLineNumber(2188);    // compilenode member
        // call case 6: other requests
        var block6358 = new GraceBlock(this, 2188, 0);
        block6358.real = function() {
          // call case 4: self request
          onSelf = true;
          var call6360 = callmethodChecked(this, "expression(1)", [1], var_blocksOK);
          return call6360;
        };
        // call case 4: self request
        onSelf = true;
        var call6361 = callmethodChecked(this, "didConsume(1)", [1], block6358);
        var call6362 = callmethodChecked(call6361, "not", []);
        if (Grace_isTrue(call6362)) {
          setLineNumber(2189);    // compilenode array
          var array6363 = new PrimitiveGraceList([]);
          var var_suggestions = array6363;
          setLineNumber(2190);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call6366 = callmethodChecked(var_errormessages, "suggestion", []);
          var call6367 = callmethodChecked(call6366, "new", []);
          var var_suggestion = call6367;
          setLineNumber(2191);    // compilenode array
          var array6369 = new PrimitiveGraceList([]);
          // call case 4: self request
          onSelf = true;
          var call6370 = callmethodChecked(this, "findNextValidToken(1)", [1], array6369);
          var var_nextTok = call6370;
          var if6371 = GraceDone;
          setLineNumber(2192);    // compilenode identifier
          var opresult6374 = callmethodChecked(var_nextTok, "==(1)", [1], var_sym);
          if (Grace_isTrue(opresult6374)) {
            setLineNumber(2193);    // compilenode string
            var string6376 = new GraceString(" \u00abexpression\u00bb");
            // call case 6: other requests
            var call6377 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string6376, var_lastToken);
            if6371 = call6377;
          } else {
            setLineNumber(2195);    // compilenode member
            // call case 6: other requests
            var call6380 = callmethodChecked(var_nextTok, "prev", []);
            setLineNumber(2196);    // compilenode string
            var string6381 = new GraceString(" \u00abexpression\u00bb");
            // call case 6: other requests
            setLineNumber(2195);    // compilenode identifier
            var call6382 = callmethodChecked(var_suggestion, "replaceTokenRange(2)leading(1)trailing(1)with(1)", [2, 1, 1, 1], var_sym, call6380, GraceTrue, GraceFalse, string6381);
            if6371 = call6382;
          }
          setLineNumber(2198);    // compilenode identifier
          // call case 6: other requests
          var call6384 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
          setLineNumber(2199);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call6387 = callmethodChecked(var_errormessages, "suggestion", []);
          var call6388 = callmethodChecked(call6387, "new", []);
          var_suggestion = call6388;
          setLineNumber(2200);    // compilenode member
          // call case 6: other requests
          var call6391 = callmethodChecked(var_nextTok, "prev", []);
          // call case 6: other requests
          var call6392 = callmethodChecked(var_suggestion, "deleteTokenRange(2)leading(1)trailing(1)", [2, 1, 1], var_lastToken, call6391, GraceTrue, GraceFalse);
          setLineNumber(2201);    // compilenode identifier
          // call case 6: other requests
          var call6394 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
          setLineNumber(2203);    // compilenode string
          var string6396 = new GraceString("A variable without a value can be declared with 'var' followed only by the variable name.");
          setLineNumber(2202);    // compilenode string
          var string6398 = new GraceString("a variable declaration must have a value after the ':='. ");
          var opresult6400 = callmethodChecked(string6398, "++(1)", [1], string6396);
          setLineNumber(2204);    // compilenode member
          // call case 6: other requests
          var call6402 = callmethodChecked(var_lastToken, "line", []);
          // call case 6: other requests
          var call6404 = callmethodChecked(var_lastToken, "size", []);
          // call case 6: other requests
          var call6407 = callmethodChecked(var_lastToken, "linePos", []);
          var opresult6409 = callmethodChecked(call6407, "+(1)", [1], call6404);
          // call case 6: other requests
          setLineNumber(2202);    // compilenode identifier
          var call6410 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestions(1)", [1, 2, 1], opresult6400, call6402, opresult6409, var_suggestions);
          if6355 = call6410;
        }
        setLineNumber(2206);    // compilenode member
        // call case 6: other requests
        var call6412 = callmethodChecked(var_values, "pop", []);
        var_val = call6412;
        if6349 = GraceDone;
      } else {
        var if6413 = GraceDone;
        setLineNumber(2208);    // compilenode string
        var string6414 = new GraceString("=");
        // call case 6: other requests
        var call6417 = callmethodChecked(var_sym, "value", []);
        var opresult6419 = callmethodChecked(call6417, "==(1)", [1], string6414);
        var string6422 = new GraceString("op");
        // call case 4: self request
        onSelf = true;
        var call6423 = callmethodChecked(this, "accept(1)", [1], string6422);
        var opresult6425 = callmethodChecked(call6423, "&&(1)", [1], opresult6419);
        if (Grace_isTrue(opresult6425)) {
          setLineNumber(2209);    // compilenode array
          var array6426 = new PrimitiveGraceList([]);
          var var_suggestions = array6426;
          setLineNumber(2210);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call6429 = callmethodChecked(var_errormessages, "suggestion", []);
          var call6430 = callmethodChecked(call6429, "new", []);
          var var_suggestion = call6430;
          setLineNumber(2211);    // compilenode string
          var string6432 = new GraceString(":=");
          // call case 6: other requests
          var call6433 = callmethodChecked(var_suggestion, "replaceToken(1)with(1)", [1, 1], var_sym, string6432);
          setLineNumber(2212);    // compilenode identifier
          // call case 6: other requests
          var call6435 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
          setLineNumber(2213);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call6438 = callmethodChecked(var_errormessages, "suggestion", []);
          var call6439 = callmethodChecked(call6438, "new", []);
          var_suggestion = call6439;
          setLineNumber(2214);    // compilenode string
          var string6441 = new GraceString("def");
          // call case 6: other requests
          var call6442 = callmethodChecked(var_suggestion, "replaceToken(1)with(1)", [1, 1], var_varTok, string6441);
          setLineNumber(2215);    // compilenode identifier
          // call case 6: other requests
          var call6444 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
          setLineNumber(2216);    // compilenode string
          var string6446 = new GraceString("a variable declaration must use ':=' instead of '='. A definition uses 'def' and '='.");
          setLineNumber(2217);    // compilenode member
          // call case 6: other requests
          var call6448 = callmethodChecked(var_sym, "line", []);
          // call case 6: other requests
          var call6450 = callmethodChecked(var_sym, "linePos", []);
          // call case 6: other requests
          var call6452 = callmethodChecked(var_sym, "linePos", []);
          setLineNumber(2218);    // compilenode identifier
          // call case 6: other requests
          setLineNumber(2216);    // compilenode identifier
          var call6453 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)withSuggestions(1)", [1, 3, 1], string6446, call6448, call6450, call6452, var_suggestions);
          if6413 = call6453;
        }
        if6349 = if6413;
      }
      setLineNumber(2221);    // compilenode identifier
      // call case 6: other requests
      var call6455 = callmethodChecked(var_util, "setPosition(2)", [2], var_line, var_pos);
      setLineNumber(2222);    // compilenode identifier
      // call case 6: other requests
      // call case 6: other requests
      var call6458 = callmethodChecked(var_ast, "varDecNode", []);
      var call6459 = callmethodChecked(call6458, "new(3)", [3], var_name, var_val, var_dtype);
      var var_o = call6459;
      var if6460 = GraceDone;
      setLineNumber(2223);    // compilenode identifier
      var opresult6463 = callmethodChecked(GraceFalse, "\u2260(1)", [1], var_anns);
      if (Grace_isTrue(opresult6463)) {
        // call case 6: other requests
        // call case 6: other requests
        var call6466 = callmethodChecked(var_o, "annotations", []);
        var call6467 = callmethodChecked(call6466, "addAll(1)", [1], var_anns);
        if6460 = call6467;
      }
      setLineNumber(2224);    // compilenode identifier
      // call case 6: other requests
      var call6469 = callmethodChecked(var_values, "push(1)", [1], var_o);
      setLineNumber(2225);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call6471 = callmethodChecked(this, "reconcileComments", []);
      if6273 = call6471;
    }
    return if6273;
  };
  func6272.paramCounts = [0];
  this.methods["vardec"] = func6272;
  func6272.definitionLine = 2161;
  func6272.definitionModule = "parser";
  setLineNumber(2230);    // compilenode method
  var func6472 = function(argcv) {    // method doarray
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    var if6473 = GraceDone;
    setLineNumber(2231);    // compilenode string
    var string6475 = new GraceString("lsquare");
    // call case 4: self request
    onSelf = true;
    var call6476 = callmethodChecked(this, "accept(1)", [1], string6475);
    if (Grace_isTrue(call6476)) {
      setLineNumber(2232);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call6478 = callmethodChecked(this, "next", []);
      setLineNumber(2233);    // compilenode vardec
      var var_tmp;
      setLineNumber(2234);    // compilenode array
      var array6479 = new PrimitiveGraceList([]);
      var var_params = array6479;
      setLineNumber(2235);    // compilenode block
      var block6481 = new GraceBlock(this, 2235, 0);
      block6481.real = function() {
        // call case 4: self request
        onSelf = true;
        var call6483 = callmethodChecked(this, "expression(1)", [1], var_blocksOK);
        return call6483;
      };
      var block6484 = new GraceBlock(this, 2235, 0);
      block6484.real = function() {
        setLineNumber(2236);    // compilenode block
        var block6486 = new GraceBlock(this, 2236, 0);
        block6486.real = function() {
          var string6488 = new GraceString("comma");
          // call case 4: self request
          onSelf = true;
          var call6489 = callmethodChecked(this, "accept(1)", [1], string6488);
          return call6489;
        };
        var block6490 = new GraceBlock(this, 2236, 0);
        block6490.real = function() {
          setLineNumber(2237);    // compilenode member
          // call case 6: other requests
          var call6492 = callmethodChecked(var_values, "pop", []);
          var_tmp = call6492;
          setLineNumber(2238);    // compilenode identifier
          // call case 6: other requests
          var call6494 = callmethodChecked(var_params, "push(1)", [1], var_tmp);
          setLineNumber(2239);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call6496 = callmethodChecked(this, "next", []);
          var if6497 = GraceDone;
          setLineNumber(2240);    // compilenode member
          // call case 6: other requests
          var block6500 = new GraceBlock(this, 2240, 0);
          block6500.real = function() {
            // call case 4: self request
            onSelf = true;
            var call6502 = callmethodChecked(this, "expression(1)", [1], var_blocksOK);
            return call6502;
          };
          // call case 4: self request
          onSelf = true;
          var call6503 = callmethodChecked(this, "didConsume(1)", [1], block6500);
          var call6504 = callmethodChecked(call6503, "not", []);
          if (Grace_isTrue(call6504)) {
            setLineNumber(2241);    // compilenode array
            var array6505 = new PrimitiveGraceList([]);
            var var_suggestions = array6505;
            setLineNumber(2242);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call6508 = callmethodChecked(var_errormessages, "suggestion", []);
            var call6509 = callmethodChecked(call6508, "new", []);
            var var_suggestion = call6509;
            setLineNumber(2243);    // compilenode string
            var string6512 = new GraceString("rsquare");
            var array6511 = new PrimitiveGraceList([string6512]);
            // call case 4: self request
            onSelf = true;
            var call6513 = callmethodChecked(this, "findNextValidToken(1)", [1], array6511);
            var var_nextTok = call6513;
            var if6514 = GraceDone;
            setLineNumber(2244);    // compilenode identifier
            var opresult6517 = callmethodChecked(var_nextTok, "==(1)", [1], var_sym);
            if (Grace_isTrue(opresult6517)) {
              setLineNumber(2245);    // compilenode string
              var string6519 = new GraceString(" \u00abexpression\u00bb");
              // call case 6: other requests
              var call6520 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string6519, var_lastToken);
              if6514 = call6520;
            } else {
              setLineNumber(2247);    // compilenode member
              // call case 6: other requests
              var call6523 = callmethodChecked(var_nextTok, "prev", []);
              var string6524 = new GraceString(" \u00abexpression\u00bb");
              // call case 6: other requests
              var call6525 = callmethodChecked(var_suggestion, "replaceTokenRange(2)leading(1)trailing(1)with(1)", [2, 1, 1, 1], var_sym, call6523, GraceTrue, GraceFalse, string6524);
              if6514 = call6525;
            }
            setLineNumber(2249);    // compilenode identifier
            // call case 6: other requests
            var call6527 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
            setLineNumber(2250);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call6530 = callmethodChecked(var_errormessages, "suggestion", []);
            var call6531 = callmethodChecked(call6530, "new", []);
            var_suggestion = call6531;
            setLineNumber(2251);    // compilenode member
            // call case 6: other requests
            var call6534 = callmethodChecked(var_nextTok, "prev", []);
            // call case 6: other requests
            var call6535 = callmethodChecked(var_suggestion, "deleteTokenRange(2)leading(1)trailing(1)", [2, 1, 1], var_lastToken, call6534, GraceTrue, GraceFalse);
            setLineNumber(2252);    // compilenode identifier
            // call case 6: other requests
            var call6537 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
            setLineNumber(2253);    // compilenode string
            var string6539 = new GraceString("a Lineup must contain zero or more expressions separated by commas.");
            setLineNumber(2254);    // compilenode member
            // call case 6: other requests
            var call6541 = callmethodChecked(var_sym, "line", []);
            // call case 6: other requests
            var call6543 = callmethodChecked(var_sym, "linePos", []);
            // call case 6: other requests
            setLineNumber(2253);    // compilenode identifier
            var call6544 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestions(1)", [1, 2, 1], string6539, call6541, call6543, var_suggestions);
            if6497 = call6544;
          }
          return if6497;
        };
        // call case 5: prelude request
        var call6545 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block6486, block6490);
        setLineNumber(2257);    // compilenode member
        // call case 6: other requests
        var call6547 = callmethodChecked(var_values, "pop", []);
        var_tmp = call6547;
        setLineNumber(2258);    // compilenode identifier
        // call case 6: other requests
        var call6549 = callmethodChecked(var_params, "push(1)", [1], var_tmp);
        return call6549;
      };
      // call case 4: self request
      onSelf = true;
      var call6550 = callmethodChecked(this, "ifConsume(1)then(1)", [1, 1], block6481, block6484);
      var if6551 = GraceDone;
      setLineNumber(2260);    // compilenode string
      var string6552 = new GraceString("rsquare");
      // call case 6: other requests
      var call6555 = callmethodChecked(var_sym, "kind", []);
      var opresult6557 = callmethodChecked(call6555, "\u2260(1)", [1], string6552);
      if (Grace_isTrue(opresult6557)) {
        setLineNumber(2261);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call6560 = callmethodChecked(var_errormessages, "suggestion", []);
        var call6561 = callmethodChecked(call6560, "new", []);
        var var_suggestion = call6561;
        setLineNumber(2262);    // compilenode string
        var string6563 = new GraceString("]");
        // call case 6: other requests
        var call6564 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string6563, var_lastToken);
        setLineNumber(2263);    // compilenode string
        var string6566 = new GraceString("a Lineup beginning with a '[' must end with a ']'.");
        setLineNumber(2264);    // compilenode member
        // call case 6: other requests
        var call6568 = callmethodChecked(var_lastToken, "line", []);
        // call case 6: other requests
        var call6570 = callmethodChecked(var_lastToken, "size", []);
        // call case 6: other requests
        var call6573 = callmethodChecked(var_lastToken, "linePos", []);
        var opresult6575 = callmethodChecked(call6573, "+(1)", [1], call6570);
        // call case 6: other requests
        setLineNumber(2263);    // compilenode identifier
        var call6576 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string6566, call6568, opresult6575, var_suggestion);
        if6551 = call6576;
      }
      setLineNumber(2266);    // compilenode identifier
      // call case 6: other requests
      // call case 6: other requests
      var call6579 = callmethodChecked(var_ast, "arrayNode", []);
      var call6580 = callmethodChecked(call6579, "new(1)", [1], var_params);
      var var_o = call6580;
      setLineNumber(2267);    // compilenode identifier
      // call case 6: other requests
      var call6582 = callmethodChecked(var_values, "push(1)", [1], var_o);
      setLineNumber(2268);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call6584 = callmethodChecked(this, "next", []);
      if6473 = call6584;
    }
    return if6473;
  };
  func6472.paramCounts = [0];
  this.methods["doarray"] = func6472;
  func6472.definitionLine = 2230;
  func6472.definitionModule = "parser";
  setLineNumber(2273);    // compilenode method
  var func6585 = function(argcv) {    // method dodialect
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    var if6586 = GraceDone;
    setLineNumber(2274);    // compilenode string
    var string6588 = new GraceString("dialect");
    // call case 4: self request
    onSelf = true;
    var call6589 = callmethodChecked(this, "acceptKeyword(1)", [1], string6588);
    if (Grace_isTrue(call6589)) {
      setLineNumber(2275);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call6591 = callmethodChecked(this, "next", []);
      var if6592 = GraceDone;
      setLineNumber(2276);    // compilenode string
      var string6593 = new GraceString("string");
      // call case 6: other requests
      var call6596 = callmethodChecked(var_sym, "kind", []);
      var opresult6598 = callmethodChecked(call6596, "\u2260(1)", [1], string6593);
      if (Grace_isTrue(opresult6598)) {
        setLineNumber(2277);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call6601 = callmethodChecked(var_errormessages, "suggestion", []);
        var call6602 = callmethodChecked(call6601, "new", []);
        var var_suggestion = call6602;
        setLineNumber(2278);    // compilenode vardec
        var var_errorPos;
        var if6603 = GraceDone;
        setLineNumber(2279);    // compilenode member
        // call case 6: other requests
        var call6605 = callmethodChecked(var_lastToken, "line", []);
        // call case 6: other requests
        var call6608 = callmethodChecked(var_sym, "line", []);
        var opresult6610 = callmethodChecked(call6608, "==(1)", [1], call6605);
        var string6612 = new GraceString("identifier");
        // call case 6: other requests
        var call6615 = callmethodChecked(var_sym, "kind", []);
        var opresult6617 = callmethodChecked(call6615, "==(1)", [1], string6612);
        var opresult6619 = callmethodChecked(opresult6617, "&&(1)", [1], opresult6610);
        if (Grace_isTrue(opresult6619)) {
          setLineNumber(2280);    // compilenode string
          var string6621 = new GraceString("\"");
          // call case 6: other requests
          var call6624 = callmethodChecked(var_sym, "value", []);
          var string6626 = new GraceString("\"");
          var opresult6628 = callmethodChecked(string6626, "++(1)", [1], call6624);
          var opresult6630 = callmethodChecked(opresult6628, "++(1)", [1], string6621);
          // call case 6: other requests
          var call6631 = callmethodChecked(var_suggestion, "replaceToken(1)with(1)", [1, 1], var_sym, opresult6630);
          setLineNumber(2281);    // compilenode member
          // call case 6: other requests
          var call6633 = callmethodChecked(var_sym, "linePos", []);
          var_errorPos = call6633;
          if6603 = GraceDone;
        } else {
          setLineNumber(2283);    // compilenode string
          var string6635 = new GraceString(" \"\u00abdialect name\u00bb\"");
          // call case 6: other requests
          var call6636 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string6635, var_lastToken);
          setLineNumber(2284);    // compilenode member
          // call case 6: other requests
          var call6639 = callmethodChecked(var_lastToken, "size", []);
          // call case 6: other requests
          var call6642 = callmethodChecked(var_lastToken, "linePos", []);
          var opresult6644 = callmethodChecked(call6642, "+(1)", [1], call6639);
          var opresult6646 = callmethodChecked(opresult6644, "+(1)", [1], new GraceNum(1));
          var_errorPos = opresult6646;
          if6603 = GraceDone;
        }
        setLineNumber(2286);    // compilenode string
        var string6648 = new GraceString("a dialect statement must have the name of the dialect in quotes after the 'dialect'.");
        setLineNumber(2287);    // compilenode member
        // call case 6: other requests
        var call6650 = callmethodChecked(var_lastToken, "line", []);
        // call case 6: other requests
        setLineNumber(2286);    // compilenode identifier
        var call6651 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string6648, call6650, var_errorPos, var_suggestion);
        if6592 = call6651;
      }
      setLineNumber(2289);    // compilenode member
      // call case 6: other requests
      var call6655 = callmethodChecked(var_sym, "value", []);
      // call case 6: other requests
      // call case 6: other requests
      var call6657 = callmethodChecked(var_ast, "dialectNode", []);
      var call6658 = callmethodChecked(call6657, "new(1)", [1], call6655);
      // call case 6: other requests
      var call6659 = callmethodChecked(var_values, "push(1)", [1], call6658);
      setLineNumber(2290);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call6661 = callmethodChecked(this, "next", []);
      if6586 = call6661;
    }
    return if6586;
  };
  func6585.paramCounts = [0];
  this.methods["dodialect"] = func6585;
  func6585.definitionLine = 2273;
  func6585.definitionModule = "parser";
  setLineNumber(2294);    // compilenode method
  var func6662 = function(argcv) {    // method inheritsOrUses
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    var if6663 = GraceDone;
    setLineNumber(2297);    // compilenode call
    // call case 6: other requests
    var string6666 = new GraceString("keyword");
    // call case 4: self request
    onSelf = true;
    var call6667 = callmethodChecked(this, "accept(1)", [1], string6666);
    var call6668 = callmethodChecked(call6667, "prefix!", [0]);
    if (Grace_isTrue(call6668)) {
      return var_done;
    }
    var if6669 = GraceDone;
    setLineNumber(2298);    // compilenode string
    var string6670 = new GraceString("use");
    // call case 6: other requests
    var call6673 = callmethodChecked(var_sym, "value", []);
    var opresult6675 = callmethodChecked(call6673, "==(1)", [1], string6670);
    var string6677 = new GraceString("inherit");
    // call case 6: other requests
    var call6680 = callmethodChecked(var_sym, "value", []);
    var opresult6682 = callmethodChecked(call6680, "==(1)", [1], string6677);
    var string6684 = new GraceString("inherits");
    // call case 6: other requests
    var call6687 = callmethodChecked(var_sym, "value", []);
    var opresult6689 = callmethodChecked(call6687, "==(1)", [1], string6684);
    var opresult6691 = callmethodChecked(opresult6689, "||(1)", [1], opresult6682);
    var opresult6693 = callmethodChecked(opresult6691, "||(1)", [1], opresult6675);
    if (Grace_isTrue(opresult6693)) {
      setLineNumber(2299);    // compilenode identifier
      var var_btok = var_sym;
      setLineNumber(2300);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call6695 = callmethodChecked(this, "checkIndent", []);
      setLineNumber(2301);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call6697 = callmethodChecked(this, "next", []);
      var if6698 = GraceDone;
      setLineNumber(2302);    // compilenode member
      // call case 6: other requests
      var block6701 = new GraceBlock(this, 2302, 0);
      block6701.real = function() {
        // call case 4: self request
        onSelf = true;
        var call6703 = callmethodChecked(this, "expression(1)", [1], var_noBlocks);
        return call6703;
      };
      // call case 4: self request
      onSelf = true;
      var call6704 = callmethodChecked(this, "didConsume(1)", [1], block6701);
      var call6705 = callmethodChecked(call6704, "not", []);
      if (Grace_isTrue(call6705)) {
        setLineNumber(2303);    // compilenode array
        var array6706 = new PrimitiveGraceList([]);
        var var_suggestions = array6706;
        setLineNumber(2304);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call6709 = callmethodChecked(var_errormessages, "suggestion", []);
        var call6710 = callmethodChecked(call6709, "new", []);
        var var_suggestion = call6710;
        setLineNumber(2305);    // compilenode string
        var string6713 = new GraceString("rsquare");
        var array6712 = new PrimitiveGraceList([string6713]);
        // call case 4: self request
        onSelf = true;
        var call6714 = callmethodChecked(this, "findNextValidToken(1)", [1], array6712);
        var var_nextTok = call6714;
        var if6715 = GraceDone;
        setLineNumber(2306);    // compilenode identifier
        var opresult6718 = callmethodChecked(var_nextTok, "==(1)", [1], var_sym);
        if (Grace_isTrue(opresult6718)) {
          setLineNumber(2307);    // compilenode string
          var string6720 = new GraceString(" \u00abparent\u00bb");
          // call case 6: other requests
          var call6721 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string6720, var_lastToken);
          if6715 = call6721;
        } else {
          setLineNumber(2309);    // compilenode member
          // call case 6: other requests
          var call6724 = callmethodChecked(var_nextTok, "prev", []);
          var string6725 = new GraceString(" \u00abparent\u00bb");
          // call case 6: other requests
          var call6726 = callmethodChecked(var_suggestion, "replaceTokenRange(2)leading(1)trailing(1)with(1)", [2, 1, 1, 1], var_sym, call6724, GraceTrue, GraceFalse, string6725);
          if6715 = call6726;
        }
        setLineNumber(2311);    // compilenode identifier
        // call case 6: other requests
        var call6728 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
        setLineNumber(2312);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call6731 = callmethodChecked(var_errormessages, "suggestion", []);
        var call6732 = callmethodChecked(call6731, "new", []);
        var_suggestion = call6732;
        setLineNumber(2313);    // compilenode member
        // call case 6: other requests
        var call6735 = callmethodChecked(var_nextTok, "prev", []);
        // call case 6: other requests
        var call6736 = callmethodChecked(var_suggestion, "deleteTokenRange(2)leading(1)trailing(1)", [2, 1, 1], var_lastToken, call6735, GraceTrue, GraceFalse);
        setLineNumber(2314);    // compilenode identifier
        // call case 6: other requests
        var call6738 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
        setLineNumber(2315);    // compilenode string
        var string6739 = new GraceString(" keyword must be followed by an expression that creates ");
        // call case 6: other requests
        var call6742 = callmethodChecked(var_btok, "value", []);
        var string6744 = new GraceString("The ");
        var opresult6746 = callmethodChecked(string6744, "++(1)", [1], call6742);
        var opresult6748 = callmethodChecked(opresult6746, "++(1)", [1], string6739);
        var var_msg = opresult6748;
        var if6749 = GraceDone;
        setLineNumber(2316);    // compilenode string
        var string6750 = new GraceString("use");
        // call case 6: other requests
        var call6753 = callmethodChecked(var_btok, "value", []);
        var opresult6755 = callmethodChecked(call6753, "==(1)", [1], string6750);
        if (Grace_isTrue(opresult6755)) {
          setLineNumber(2317);    // compilenode string
          var string6756 = new GraceString("the trait being used.");
          var opresult6759 = callmethodChecked(var_msg, "++(1)", [1], string6756);
          var_msg = opresult6759;
          if6749 = GraceDone;
        } else {
          setLineNumber(2319);    // compilenode string
          var string6760 = new GraceString("the object being inherited.");
          var opresult6763 = callmethodChecked(var_msg, "++(1)", [1], string6760);
          var_msg = opresult6763;
          if6749 = GraceDone;
        }
        setLineNumber(2322);    // compilenode member
        // call case 6: other requests
        var call6766 = callmethodChecked(var_lastToken, "line", []);
        // call case 6: other requests
        var call6769 = callmethodChecked(var_lastToken, "size", []);
        // call case 6: other requests
        var call6772 = callmethodChecked(var_lastToken, "linePos", []);
        var opresult6774 = callmethodChecked(call6772, "+(1)", [1], call6769);
        var opresult6776 = callmethodChecked(opresult6774, "+(1)", [1], new GraceNum(1));
        setLineNumber(2323);    // compilenode identifier
        // call case 6: other requests
        setLineNumber(2321);    // compilenode identifier
        var call6777 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestions(1)", [1, 2, 1], var_msg, call6766, opresult6776, var_suggestions);
        if6698 = call6777;
      }
      setLineNumber(2325);    // compilenode member
      // call case 6: other requests
      var call6780 = callmethodChecked(var_btok, "line", []);
      // call case 6: other requests
      var call6782 = callmethodChecked(var_btok, "linePos", []);
      // call case 6: other requests
      var call6783 = callmethodChecked(var_util, "setPosition(2)", [2], call6780, call6782);
      setLineNumber(2326);    // compilenode member
      // call case 6: other requests
      var call6786 = callmethodChecked(var_values, "pop", []);
      // call case 6: other requests
      // call case 6: other requests
      var call6788 = callmethodChecked(var_ast, "inheritsNode", []);
      var call6789 = callmethodChecked(call6788, "new(1)", [1], call6786);
      var var_inhNode = call6789;
      var if6790 = GraceDone;
      setLineNumber(2327);    // compilenode string
      var string6791 = new GraceString("use");
      // call case 6: other requests
      var call6794 = callmethodChecked(var_btok, "value", []);
      var opresult6796 = callmethodChecked(call6794, "==(1)", [1], string6791);
      if (Grace_isTrue(opresult6796)) {
        setLineNumber(2328);    // compilenode identifier
        // call case 6: other requests
        var call6798 = callmethodChecked(var_inhNode, "isUse:=(1)", [1], GraceTrue);
        if6790 = call6798;
      }
      setLineNumber(2330);    // compilenode block
      var block6800 = new GraceBlock(this, 2330, 0);
      block6800.real = function() {
        // call case 4: self request
        onSelf = true;
        var call6802 = callmethodChecked(this, "inheritsModifier(1)onLineOf(1)", [1, 1], var_inhNode, var_btok);
        return call6802;
      };
      var block6803 = new GraceBlock(this, 2330, 0);
      block6803.real = function() {
        return GraceDone;
      };
      // call case 5: prelude request
      var call6804 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block6800, block6803);
      setLineNumber(2331);    // compilenode identifier
      // call case 6: other requests
      var call6806 = callmethodChecked(var_values, "push(1)", [1], var_inhNode);
      if6669 = call6806;
    }
    return if6669;
  };
  func6662.paramCounts = [0];
  this.methods["inheritsOrUses"] = func6662;
  func6662.definitionLine = 2294;
  func6662.definitionModule = "parser";
  setLineNumber(2335);    // compilenode method
  var func6807 = function(argcv) {    // method inheritsModifier(_)onLineOf(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_node = arguments[curarg];
    curarg++;
    var var_startToken = arguments[curarg];
    curarg++;
    setModuleName("parser");
    var if6808 = GraceDone;
    setLineNumber(2337);    // compilenode call
    // call case 6: other requests
    var string6811 = new GraceString("keyword");
    // call case 4: self request
    onSelf = true;
    var call6812 = callmethodChecked(this, "accept(1)onLineOf(1)", [1, 1], string6811, var_startToken);
    var call6813 = callmethodChecked(call6812, "prefix!", [0]);
    if (Grace_isTrue(call6813)) {
      setLineNumber(2338);    // compilenode identifier
      return GraceFalse;
    }
    var if6814 = GraceDone;
    setLineNumber(2340);    // compilenode string
    var string6815 = new GraceString("alias");
    // call case 6: other requests
    var call6818 = callmethodChecked(var_sym, "value", []);
    var opresult6820 = callmethodChecked(call6818, "==(1)", [1], string6815);
    if (Grace_isTrue(opresult6820)) {
      setLineNumber(2341);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call6822 = callmethodChecked(this, "parseAlias(1)", [1], var_node);
      if6814 = call6822;
    } else {
      var if6823 = GraceDone;
      setLineNumber(2342);    // compilenode string
      var string6824 = new GraceString("exclude");
      // call case 6: other requests
      var call6827 = callmethodChecked(var_sym, "value", []);
      var opresult6829 = callmethodChecked(call6827, "==(1)", [1], string6824);
      if (Grace_isTrue(opresult6829)) {
        setLineNumber(2343);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call6831 = callmethodChecked(this, "parseExclude(1)", [1], var_node);
        if6823 = call6831;
      } else {
        setLineNumber(2345);    // compilenode identifier
        if6823 = GraceFalse;
      }
      if6814 = if6823;
    }
    return if6814;
  };
  func6807.paramCounts = [1, 1];
  this.methods["inheritsModifier(1)onLineOf(1)"] = func6807;
  func6807.definitionLine = 2335;
  func6807.definitionModule = "parser";
  setLineNumber(2349);    // compilenode method
  var func6832 = function(argcv) {    // method parseAlias(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_node = arguments[curarg];
    curarg++;
    setModuleName("parser");
    setLineNumber(2350);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call6834 = callmethodChecked(this, "next", []);
    setLineNumber(2351);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call6836 = callmethodChecked(this, "methodsignature(1)", [1], GraceTrue);
    var var_newMeth = call6836;
    var if6837 = GraceDone;
    setLineNumber(2352);    // compilenode string
    var string6838 = new GraceString("=");
    // call case 6: other requests
    var call6841 = callmethodChecked(var_sym, "value", []);
    var opresult6843 = callmethodChecked(call6841, "==(1)", [1], string6838);
    var string6846 = new GraceString("op");
    // call case 4: self request
    onSelf = true;
    var call6847 = callmethodChecked(this, "accept(1)", [1], string6846);
    var opresult6849 = callmethodChecked(call6847, "&&(1)", [1], opresult6843);
    if (Grace_isTrue(opresult6849)) {
      setLineNumber(2353);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call6851 = callmethodChecked(this, "next", []);
      setLineNumber(2354);    // compilenode member
      // call case 6: other requests
      // call case 4: self request
      onSelf = true;
      var call6854 = callmethodChecked(this, "methodsignature(1)", [1], GraceTrue);
      var call6855 = callmethodChecked(call6854, "appliedOccurence", []);
      var var_oldMeth = call6855;
      var if6856 = GraceDone;
      setLineNumber(2355);    // compilenode member
      // call case 6: other requests
      var call6858 = callmethodChecked(var_oldMeth, "numParams", []);
      // call case 6: other requests
      var call6861 = callmethodChecked(var_newMeth, "numParams", []);
      var opresult6863 = callmethodChecked(call6861, "\u2260(1)", [1], call6858);
      if (Grace_isTrue(opresult6863)) {
        setLineNumber(2356);    // compilenode string
        var string6865 = new GraceString("a method and its alias must have the same number of parameters");
        setLineNumber(2357);    // compilenode member
        // call case 6: other requests
        var call6867 = callmethodChecked(var_newMeth, "line", []);
        // call case 6: other requests
        var call6869 = callmethodChecked(var_newMeth, "linePos", []);
        // call case 6: other requests
        var call6871 = callmethodChecked(var_oldMeth, "endPos", []);
        // call case 6: other requests
        setLineNumber(2356);    // compilenode identifier
        var call6872 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], string6865, call6867, call6869, call6871);
        if6856 = call6872;
      }
      setLineNumber(2359);    // compilenode member
      // call case 6: other requests
      var call6875 = callmethodChecked(var_newMeth, "asIdentifier", []);
      // call case 6: other requests
      var call6877 = callmethodChecked(var_oldMeth, "asIdentifier", []);
      // call case 6: other requests
      var call6878 = callmethodChecked(var_node, "addAlias(1)for(1)", [1, 1], call6875, call6877);
      if6837 = call6878;
    } else {
      setLineNumber(2362);    // compilenode string
      var string6880 = new GraceString("'\u2039newMethodName\u203a = \u2039oldMethodName\u203a'");
      setLineNumber(2361);    // compilenode string
      var string6882 = new GraceString("an alias modifier must take the form ");
      var opresult6884 = callmethodChecked(string6882, "++(1)", [1], string6880);
      setLineNumber(2363);    // compilenode member
      // call case 6: other requests
      var call6886 = callmethodChecked(var_lastToken, "line", []);
      // call case 6: other requests
      var call6888 = callmethodChecked(var_lastToken, "size", []);
      // call case 6: other requests
      var call6891 = callmethodChecked(var_lastToken, "linePos", []);
      var opresult6893 = callmethodChecked(call6891, "+(1)", [1], call6888);
      // call case 6: other requests
      setLineNumber(2361);    // compilenode identifier
      var call6894 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)", [1, 2], opresult6884, call6886, opresult6893);
      if6837 = call6894;
    }
    setLineNumber(2365);    // compilenode identifier
    return GraceTrue;
  };
  func6832.paramCounts = [1];
  this.methods["parseAlias(1)"] = func6832;
  func6832.definitionLine = 2349;
  func6832.definitionModule = "parser";
  setLineNumber(2367);    // compilenode method
  var func6895 = function(argcv) {    // method parseExclude(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_node = arguments[curarg];
    curarg++;
    setModuleName("parser");
    setLineNumber(2368);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call6897 = callmethodChecked(this, "next", []);
    setLineNumber(2369);    // compilenode member
    // call case 6: other requests
    // call case 4: self request
    onSelf = true;
    var call6900 = callmethodChecked(this, "methodsignature(1)", [1], GraceTrue);
    var call6901 = callmethodChecked(call6900, "appliedOccurence", []);
    var var_excludedMeth = call6901;
    setLineNumber(2370);    // compilenode member
    // call case 6: other requests
    var call6904 = callmethodChecked(var_excludedMeth, "asIdentifier", []);
    // call case 6: other requests
    var call6905 = callmethodChecked(var_node, "addExclusion(1)", [1], call6904);
    setLineNumber(2371);    // compilenode identifier
    return GraceTrue;
  };
  func6895.paramCounts = [1];
  this.methods["parseExclude(1)"] = func6895;
  func6895.definitionLine = 2367;
  func6895.definitionModule = "parser";
  setLineNumber(2374);    // compilenode method
  var func6906 = function(argcv) {    // method doobject
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    var if6907 = GraceDone;
    setLineNumber(2378);    // compilenode string
    var string6909 = new GraceString("object");
    // call case 4: self request
    onSelf = true;
    var call6910 = callmethodChecked(this, "acceptKeyword(1)", [1], string6909);
    if (Grace_isTrue(call6910)) {
      setLineNumber(2379);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call6912 = callmethodChecked(this, "next", []);
      setLineNumber(2380);    // compilenode string
      var string6914 = new GraceString("an object constructor");
      setLineNumber(2381);    // compilenode string
      var string6915 = new GraceString("'object'");
      // call case 4: self request
      onSelf = true;
      var call6916 = callmethodChecked(this, "parseObjectConstructorBody(1)startingWith(1)after(1)", [1, 1, 1], string6914, var_lastToken, string6915);
      if6907 = call6916;
    }
    return if6907;
  };
  func6906.paramCounts = [0];
  this.methods["doobject"] = func6906;
  func6906.definitionLine = 2374;
  func6906.definitionModule = "parser";
  setLineNumber(2385);    // compilenode method
  var func6917 = function(argcv) {    // method parseObjectConstructorBody(_)startingWith(_)after(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_constructName = arguments[curarg];
    curarg++;
    var var_btok = arguments[curarg];
    curarg++;
    var var_prev = arguments[curarg];
    curarg++;
    setModuleName("parser");
    setLineNumber(2390);    // compilenode identifier
    var var_localMinIndentLevel = var_minIndentLevel;
    setLineNumber(2391);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call6919 = callmethodChecked(this, "doannotation", []);
    var var_anns = call6919;
    var if6920 = GraceDone;
    setLineNumber(2392);    // compilenode string
    var string6921 = new GraceString("lbrace");
    // call case 6: other requests
    var call6924 = callmethodChecked(var_sym, "kind", []);
    var opresult6926 = callmethodChecked(call6924, "\u2260(1)", [1], string6921);
    if (Grace_isTrue(opresult6926)) {
      setLineNumber(2393);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call6929 = callmethodChecked(var_errormessages, "suggestion", []);
      var call6930 = callmethodChecked(call6929, "new", []);
      var var_suggestion = call6930;
      setLineNumber(2394);    // compilenode block
      var block6932 = new GraceBlock(this, 2394, 1);
      setLineNumber(1);    // compilenode identifier
      block6932.real = function(var_t) {
        setLineNumber(2394);    // compilenode string
        var string6933 = new GraceString("rbrace");
        // call case 6: other requests
        var call6936 = callmethodChecked(var_t, "kind", []);
        var opresult6938 = callmethodChecked(call6936, "==(1)", [1], string6933);
        return opresult6938;
      };
      // call case 4: self request
      onSelf = true;
      var call6939 = callmethodChecked(this, "findNextToken(1)", [1], block6932);
      var var_nextTok = call6939;
      var if6940 = GraceDone;
      setLineNumber(2395);    // compilenode identifier
      var opresult6943 = callmethodChecked(GraceFalse, "==(1)", [1], var_nextTok);
      if (Grace_isTrue(opresult6943)) {
        setLineNumber(2396);    // compilenode string
        var string6945 = new GraceString(" {}");
        // call case 6: other requests
        var call6946 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string6945, var_lastToken);
        if6940 = call6946;
      } else {
        setLineNumber(2398);    // compilenode string
        var string6948 = new GraceString(" {");
        // call case 6: other requests
        var call6949 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string6948, var_lastToken);
        if6940 = call6949;
      }
      setLineNumber(2400);    // compilenode string
      var string6951 = new GraceString(".");
      var string6954 = new GraceString(" must have a '{' after the ");
      var string6957 = new GraceString("");
      var opresult6959 = callmethodChecked(string6957, "++(1)", [1], var_constructName);
      var opresult6961 = callmethodChecked(opresult6959, "++(1)", [1], string6954);
      var opresult6963 = callmethodChecked(opresult6961, "++(1)", [1], var_prev);
      var opresult6965 = callmethodChecked(opresult6963, "++(1)", [1], string6951);
      setLineNumber(2401);    // compilenode member
      // call case 6: other requests
      var call6967 = callmethodChecked(var_lastToken, "line", []);
      // call case 6: other requests
      var call6969 = callmethodChecked(var_lastToken, "size", []);
      // call case 6: other requests
      var call6972 = callmethodChecked(var_lastToken, "linePos", []);
      var opresult6974 = callmethodChecked(call6972, "+(1)", [1], call6969);
      setLineNumber(2402);    // compilenode identifier
      // call case 6: other requests
      setLineNumber(2400);    // compilenode identifier
      var call6975 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], opresult6965, call6967, opresult6974, var_suggestion);
      if6920 = call6975;
    }
    setLineNumber(2404);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call6977 = callmethodChecked(this, "next", []);
    var if6978 = GraceDone;
    setLineNumber(2405);    // compilenode member
    // call case 6: other requests
    var call6980 = callmethodChecked(var_statementToken, "line", []);
    // call case 6: other requests
    var call6983 = callmethodChecked(var_sym, "line", []);
    var opresult6985 = callmethodChecked(call6983, "==(1)", [1], call6980);
    if (Grace_isTrue(opresult6985)) {
      setLineNumber(2406);    // compilenode member
      // call case 6: other requests
      var call6988 = callmethodChecked(var_sym, "linePos", []);
      var diff6990 = callmethodChecked(call6988, "-(1)", [1], new GraceNum(2));
      var_minIndentLevel = diff6990;
      if6978 = GraceDone;
    } else {
      setLineNumber(2408);    // compilenode member
      // call case 6: other requests
      var call6993 = callmethodChecked(var_statementToken, "indent", []);
      var opresult6995 = callmethodChecked(call6993, "+(1)", [1], new GraceNum(2));
      var_minIndentLevel = opresult6995;
      if6978 = GraceDone;
    }
    setLineNumber(2410);    // compilenode array
    var array6996 = new PrimitiveGraceList([]);
    var var_body = array6996;
    setLineNumber(2411);    // compilenode identifier
    var var_superObject = GraceFalse;
    setLineNumber(2412);    // compilenode array
    var array6997 = new PrimitiveGraceList([]);
    var var_usedTraits = array6997;
    setLineNumber(2413);    // compilenode identifier
    var var_inPreamble = GraceTrue;
    setLineNumber(2414);    // compilenode block
    var block6999 = new GraceBlock(this, 2414, 0);
    block6999.real = function() {
      var block7000 = new GraceBlock(this, 2414, 0);
      block7000.real = function() {
        var string7001 = new GraceString("eof");
        // call case 6: other requests
        var call7004 = callmethodChecked(var_sym, "kind", []);
        var opresult7006 = callmethodChecked(call7004, "\u2260(1)", [1], string7001);
        return opresult7006;
      };
      // call case 6: other requests
      var string7010 = new GraceString("rbrace");
      // call case 4: self request
      onSelf = true;
      var call7011 = callmethodChecked(this, "accept(1)", [1], string7010);
      var call7012 = callmethodChecked(call7011, "not", []);
      var opresult7014 = callmethodChecked(call7012, "&&(1)", [1], block7000);
      return opresult7014;
    };
    var block7015 = new GraceBlock(this, 2414, 0);
    block7015.real = function() {
      var if7016 = GraceDone;
      setLineNumber(2415);    // compilenode block
      var block7018 = new GraceBlock(this, 2415, 0);
      block7018.real = function() {
        // call case 4: self request
        onSelf = true;
        var call7020 = callmethodChecked(this, "inheritsOrUses", []);
        return call7020;
      };
      // call case 4: self request
      onSelf = true;
      var call7021 = callmethodChecked(this, "didConsume(1)", [1], block7018);
      if (Grace_isTrue(call7021)) {
        setLineNumber(2416);    // compilenode member
        // call case 6: other requests
        var call7023 = callmethodChecked(var_values, "pop", []);
        var var_parentNode = call7023;
        var if7024 = GraceDone;
        setLineNumber(2417);    // compilenode identifier
        if (Grace_isTrue(var_inPreamble)) {
          var if7025 = GraceDone;
          setLineNumber(2418);    // compilenode member
          // call case 6: other requests
          var call7027 = callmethodChecked(var_parentNode, "isUse", []);
          if (Grace_isTrue(call7027)) {
            setLineNumber(2419);    // compilenode identifier
            // call case 6: other requests
            var call7029 = callmethodChecked(var_usedTraits, "add(1)", [1], var_parentNode);
            if7025 = call7029;
          } else {
            var if7030 = GraceDone;
            setLineNumber(2420);    // compilenode member
            // call case 6: other requests
            var call7032 = callmethodChecked(var_usedTraits, "isEmpty", []);
            if (Grace_isTrue(call7032)) {
              setLineNumber(2421);    // compilenode identifier
              var_superObject = var_parentNode;
              if7030 = GraceDone;
            } else {
              setLineNumber(2424);    // compilenode string
              var string7034 = new GraceString("");
              var string7037 = new GraceString("before 'use' in ");
              var opresult7039 = callmethodChecked(string7037, "++(1)", [1], var_constructName);
              var opresult7041 = callmethodChecked(opresult7039, "++(1)", [1], string7034);
              setLineNumber(2423);    // compilenode string
              var string7043 = new GraceString("'inherit' must come ");
              var opresult7045 = callmethodChecked(string7043, "++(1)", [1], opresult7041);
              setLineNumber(2425);    // compilenode member
              // call case 6: other requests
              var call7047 = callmethodChecked(var_parentNode, "line", []);
              // call case 6: other requests
              var call7049 = callmethodChecked(var_parentNode, "linePos", []);
              setLineNumber(2426);    // compilenode member
              // call case 6: other requests
              var call7052 = callmethodChecked(var_parentNode, "linePos", []);
              var opresult7054 = callmethodChecked(call7052, "+(1)", [1], new GraceNum(7));
              // call case 6: other requests
              setLineNumber(2423);    // compilenode identifier
              var call7055 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], opresult7045, call7047, call7049, opresult7054);
              if7030 = call7055;
            }
            if7025 = if7030;
          }
          if7024 = if7025;
        } else {
          setLineNumber(2430);    // compilenode string
          var string7057 = new GraceString("");
          var string7060 = new GraceString("come at the start of ");
          var opresult7062 = callmethodChecked(string7060, "++(1)", [1], var_constructName);
          var opresult7064 = callmethodChecked(opresult7062, "++(1)", [1], string7057);
          setLineNumber(2429);    // compilenode string
          var string7066 = new GraceString("' must ");
          // call case 6: other requests
          var call7069 = callmethodChecked(var_parentNode, "statementName", []);
          var string7071 = new GraceString("'");
          var opresult7073 = callmethodChecked(string7071, "++(1)", [1], call7069);
          var opresult7075 = callmethodChecked(opresult7073, "++(1)", [1], string7066);
          var opresult7077 = callmethodChecked(opresult7075, "++(1)", [1], opresult7064);
          setLineNumber(2431);    // compilenode member
          // call case 6: other requests
          var call7079 = callmethodChecked(var_parentNode, "line", []);
          // call case 6: other requests
          var call7081 = callmethodChecked(var_parentNode, "linePos", []);
          setLineNumber(2432);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call7084 = callmethodChecked(var_parentNode, "statementName", []);
          var call7085 = callmethodChecked(call7084, "size", []);
          // call case 6: other requests
          var call7088 = callmethodChecked(var_parentNode, "linePos", []);
          var opresult7090 = callmethodChecked(call7088, "+(1)", [1], call7085);
          // call case 6: other requests
          setLineNumber(2429);    // compilenode identifier
          var call7091 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], opresult7077, call7079, call7081, opresult7090);
          if7024 = call7091;
        }
        if7016 = if7024;
      } else {
        var if7092 = GraceDone;
        setLineNumber(2434);    // compilenode block
        var block7094 = new GraceBlock(this, 2434, 0);
        block7094.real = function() {
          // call case 4: self request
          onSelf = true;
          var call7096 = callmethodChecked(this, "methoddec", []);
          return call7096;
        };
        // call case 4: self request
        onSelf = true;
        var call7097 = callmethodChecked(this, "didConsume(1)", [1], block7094);
        if (Grace_isTrue(call7097)) {
          setLineNumber(2435);    // compilenode identifier
          var_inPreamble = GraceFalse;
          setLineNumber(2436);    // compilenode member
          // call case 6: other requests
          var call7100 = callmethodChecked(var_values, "pop", []);
          // call case 6: other requests
          var call7101 = callmethodChecked(var_body, "push(1)", [1], call7100);
          if7092 = call7101;
        } else {
          var if7102 = GraceDone;
          setLineNumber(2437);    // compilenode block
          var block7104 = new GraceBlock(this, 2437, 0);
          block7104.real = function() {
            // call case 4: self request
            onSelf = true;
            var call7106 = callmethodChecked(this, "statement", []);
            return call7106;
          };
          // call case 4: self request
          onSelf = true;
          var call7107 = callmethodChecked(this, "didConsume(1)", [1], block7104);
          if (Grace_isTrue(call7107)) {
            setLineNumber(2438);    // compilenode identifier
            var_inPreamble = GraceFalse;
            setLineNumber(2439);    // compilenode member
            // call case 6: other requests
            var call7110 = callmethodChecked(var_values, "pop", []);
            // call case 6: other requests
            var call7111 = callmethodChecked(var_body, "push(1)", [1], call7110);
            if7102 = call7111;
          } else {
            setLineNumber(2442);    // compilenode string
            var string7113 = new GraceString("");
            var string7116 = new GraceString("of of ");
            var opresult7118 = callmethodChecked(string7116, "++(1)", [1], var_constructName);
            var opresult7120 = callmethodChecked(opresult7118, "++(1)", [1], string7113);
            setLineNumber(2441);    // compilenode string
            var string7122 = new GraceString("' in body ");
            // call case 6: other requests
            var call7125 = callmethodChecked(var_sym, "value", []);
            var string7127 = new GraceString("unexpected symbol '");
            var opresult7129 = callmethodChecked(string7127, "++(1)", [1], call7125);
            var opresult7131 = callmethodChecked(opresult7129, "++(1)", [1], string7122);
            var opresult7133 = callmethodChecked(opresult7131, "++(1)", [1], opresult7120);
            setLineNumber(2443);    // compilenode member
            // call case 6: other requests
            var call7135 = callmethodChecked(var_sym, "line", []);
            // call case 6: other requests
            var call7137 = callmethodChecked(var_sym, "linePos", []);
            // call case 6: other requests
            // call case 6: other requests
            var call7141 = callmethodChecked(var_sym, "value", []);
            var call7142 = callmethodChecked(call7141, "size", []);
            // call case 6: other requests
            var call7145 = callmethodChecked(var_sym, "linePos", []);
            var opresult7147 = callmethodChecked(call7145, "+(1)", [1], call7142);
            var diff7149 = callmethodChecked(opresult7147, "-(1)", [1], new GraceNum(1));
            // call case 6: other requests
            setLineNumber(2441);    // compilenode identifier
            var call7150 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], opresult7133, call7135, call7137, diff7149);
            if7102 = call7150;
          }
          if7092 = if7102;
        }
        if7016 = if7092;
      }
      return if7016;
    };
    // call case 5: prelude request
    var call7151 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block6999, block7015);
    setLineNumber(2446);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call7153 = callmethodChecked(this, "next", []);
    setLineNumber(2447);    // compilenode member
    // call case 6: other requests
    var call7156 = callmethodChecked(var_btok, "line", []);
    // call case 6: other requests
    var call7158 = callmethodChecked(var_btok, "linePos", []);
    // call case 6: other requests
    var call7159 = callmethodChecked(var_util, "setPosition(2)", [2], call7156, call7158);
    setLineNumber(2448);    // compilenode identifier
    // call case 6: other requests
    // call case 6: other requests
    var call7162 = callmethodChecked(var_ast, "objectNode", []);
    var call7163 = callmethodChecked(call7162, "new(2)", [2], var_body, var_superObject);
    var var_objNode = call7163;
    var if7164 = GraceDone;
    setLineNumber(2449);    // compilenode identifier
    var opresult7167 = callmethodChecked(GraceFalse, "\u2260(1)", [1], var_anns);
    if (Grace_isTrue(opresult7167)) {
      // call case 6: other requests
      // call case 6: other requests
      var call7170 = callmethodChecked(var_objNode, "annotations", []);
      var call7171 = callmethodChecked(call7170, "addAll(1)", [1], var_anns);
      if7164 = call7171;
    }
    setLineNumber(2450);    // compilenode identifier
    // call case 6: other requests
    var call7173 = callmethodChecked(var_objNode, "usedTraits:=(1)", [1], var_usedTraits);
    setLineNumber(2451);    // compilenode identifier
    // call case 6: other requests
    var call7175 = callmethodChecked(var_values, "push(1)", [1], var_objNode);
    setLineNumber(2452);    // compilenode identifier
    var_minIndentLevel = var_localMinIndentLevel;
    return GraceDone;
  };
  func6917.paramCounts = [1, 1, 1];
  this.methods["parseObjectConstructorBody(1)startingWith(1)after(1)"] = func6917;
  func6917.definitionLine = 2385;
  func6917.definitionModule = "parser";
  setLineNumber(2455);    // compilenode method
  var func7176 = function(argcv) {    // method doclass
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    setLineNumber(2484);    // compilenode identifier
    var var_btok = var_sym;
    setLineNumber(2485);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call7178 = callmethodChecked(this, "next", []);
    setLineNumber(2486);    // compilenode identifier
    var var_localMinIndentLevel = var_minIndentLevel;
    var if7179 = GraceDone;
    setLineNumber(2487);    // compilenode string
    var string7180 = new GraceString("identifier");
    // call case 6: other requests
    var call7183 = callmethodChecked(var_sym, "kind", []);
    var opresult7185 = callmethodChecked(call7183, "\u2260(1)", [1], string7180);
    if (Grace_isTrue(opresult7185)) {
      setLineNumber(2488);    // compilenode array
      var array7186 = new PrimitiveGraceList([]);
      var var_suggestions = array7186;
      var if7187 = GraceDone;
      setLineNumber(2489);    // compilenode string
      var string7188 = new GraceString("lbrace");
      // call case 6: other requests
      var call7191 = callmethodChecked(var_sym, "kind", []);
      var opresult7193 = callmethodChecked(call7191, "==(1)", [1], string7188);
      if (Grace_isTrue(opresult7193)) {
        setLineNumber(2490);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call7196 = callmethodChecked(var_errormessages, "suggestion", []);
        var call7197 = callmethodChecked(call7196, "new", []);
        var var_suggestion = call7197;
        setLineNumber(2491);    // compilenode string
        var string7199 = new GraceString(" \u00abclass name\u00bb.new");
        // call case 6: other requests
        var call7200 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string7199, var_lastToken);
        setLineNumber(2492);    // compilenode identifier
        // call case 6: other requests
        var call7202 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
        setLineNumber(2493);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call7205 = callmethodChecked(var_errormessages, "suggestion", []);
        var call7206 = callmethodChecked(call7205, "new", []);
        var_suggestion = call7206;
        setLineNumber(2494);    // compilenode string
        var string7208 = new GraceString("object");
        // call case 6: other requests
        var call7209 = callmethodChecked(var_suggestion, "replaceToken(1)with(1)", [1, 1], var_lastToken, string7208);
        setLineNumber(2495);    // compilenode identifier
        // call case 6: other requests
        var call7211 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
        if7187 = call7211;
      } else {
        setLineNumber(2497);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call7214 = callmethodChecked(var_errormessages, "suggestion", []);
        var call7215 = callmethodChecked(call7214, "new", []);
        var var_suggestion = call7215;
        setLineNumber(2498);    // compilenode string
        var string7217 = new GraceString(" \u00abclass name\u00bb.new {}");
        // call case 6: other requests
        var call7218 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string7217, var_lastToken);
        setLineNumber(2499);    // compilenode identifier
        // call case 6: other requests
        var call7220 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
        if7187 = call7220;
      }
      setLineNumber(2501);    // compilenode string
      var string7222 = new GraceString("a class must have a name after the 'class'.");
      setLineNumber(2502);    // compilenode member
      // call case 6: other requests
      var call7224 = callmethodChecked(var_lastToken, "line", []);
      // call case 6: other requests
      var call7227 = callmethodChecked(var_lastToken, "size", []);
      // call case 6: other requests
      var call7230 = callmethodChecked(var_lastToken, "linePos", []);
      var opresult7232 = callmethodChecked(call7230, "+(1)", [1], call7227);
      var opresult7234 = callmethodChecked(opresult7232, "+(1)", [1], new GraceNum(1));
      // call case 6: other requests
      setLineNumber(2501);    // compilenode identifier
      var call7235 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestions(1)", [1, 2, 1], string7222, call7224, opresult7234, var_suggestions);
      if7179 = call7235;
    }
    setLineNumber(2504);    // compilenode identifier
    var var_objName = GraceFalse;
    var if7236 = GraceDone;
    setLineNumber(2505);    // compilenode string
    var string7237 = new GraceString("dot");
    // call case 6: other requests
    // call case 6: other requests
    var call7241 = callmethodChecked(var_tokens, "first", []);
    var call7242 = callmethodChecked(call7241, "kind", []);
    var opresult7244 = callmethodChecked(call7242, "==(1)", [1], string7237);
    if (Grace_isTrue(opresult7244)) {
      setLineNumber(2506);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call7246 = callmethodChecked(this, "pushidentifier", []);
      setLineNumber(2507);    // compilenode member
      // call case 6: other requests
      var call7248 = callmethodChecked(var_values, "pop", []);
      var_objName = call7248;
      setLineNumber(2508);    // compilenode identifier
      // call case 6: other requests
      var call7250 = callmethodChecked(var_objName, "isBindingOccurrence:=(1)", [1], GraceTrue);
      setLineNumber(2509);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call7252 = callmethodChecked(this, "next", []);
      if7236 = call7252;
    }
    setLineNumber(2511);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call7254 = callmethodChecked(this, "methodsignature(1)", [1], GraceFalse);
    var var_meth = call7254;
    setLineNumber(2512);    // compilenode identifier
    // call case 6: other requests
    var call7256 = callmethodChecked(var_meth, "setPositionFrom(1)", [1], var_btok);
    setLineNumber(2513);    // compilenode string
    var string7258 = new GraceString("a class");
    var string7259 = new GraceString("method header");
    // call case 4: self request
    onSelf = true;
    var call7260 = callmethodChecked(this, "parseObjectConstructorBody(1)startingWith(1)after(1)", [1, 1, 1], string7258, var_btok, string7259);
    setLineNumber(2514);    // compilenode member
    // call case 6: other requests
    var call7262 = callmethodChecked(var_values, "pop", []);
    var var_objNode = call7262;
    setLineNumber(2515);    // compilenode identifier
    var array7264 = new PrimitiveGraceList([var_objNode]);
    // call case 6: other requests
    var call7265 = callmethodChecked(var_meth, "body:=(1)", [1], array7264);
    setLineNumber(2516);    // compilenode identifier
    // call case 6: other requests
    var call7267 = callmethodChecked(var_meth, "usesClassSyntax:=(1)", [1], GraceTrue);
    setLineNumber(2517);    // compilenode member
    // call case 6: other requests
    var call7270 = callmethodChecked(var_objNode, "annotations", []);
    // call case 6: other requests
    // call case 6: other requests
    var call7272 = callmethodChecked(var_meth, "annotations", []);
    var call7273 = callmethodChecked(call7272, "addAll(1)", [1], call7270);
    var if7274 = GraceDone;
    setLineNumber(2519);    // compilenode identifier
    var opresult7277 = callmethodChecked(GraceFalse, "\u2260(1)", [1], var_objName);
    if (Grace_isTrue(opresult7277)) {
      setLineNumber(2520);    // compilenode member
      // call case 6: other requests
      var call7280 = callmethodChecked(var_meth, "canonicalName", []);
      var string7282 = new GraceString(".");
      // call case 6: other requests
      var call7285 = callmethodChecked(var_objName, "nameString", []);
      var opresult7287 = callmethodChecked(call7285, "++(1)", [1], string7282);
      var opresult7289 = callmethodChecked(opresult7287, "++(1)", [1], call7280);
      // call case 6: other requests
      var call7290 = callmethodChecked(var_objNode, "name:=(1)", [1], opresult7289);
      setLineNumber(2521);    // compilenode string
      var string7293 = new GraceString("");
      // call case 6: other requests
      var call7296 = callmethodChecked(var_objName, "nameString", []);
      var string7298 = new GraceString("class ");
      var opresult7300 = callmethodChecked(string7298, "++(1)", [1], call7296);
      var opresult7302 = callmethodChecked(opresult7300, "++(1)", [1], string7293);
      // call case 6: other requests
      // call case 6: other requests
      var call7304 = callmethodChecked(var_ast, "stringNode", []);
      var call7305 = callmethodChecked(call7304, "new(1)", [1], opresult7302);
      var array7291 = new PrimitiveGraceList([call7305]);
      var var_asStringBody = array7291;
      setLineNumber(2522);    // compilenode string
      var string7308 = new GraceString("asString");
      // call case 6: other requests
      // call case 6: other requests
      var call7310 = callmethodChecked(var_ast, "signaturePart", []);
      var call7311 = callmethodChecked(call7310, "partName(1)", [1], string7308);
      var array7306 = new PrimitiveGraceList([call7311]);
      var var_signature = array7306;
      setLineNumber(2523);    // compilenode identifier
      // call case 6: other requests
      // call case 6: other requests
      var call7314 = callmethodChecked(var_ast, "methodNode", []);
      var call7315 = callmethodChecked(call7314, "new(3)", [3], var_signature, var_asStringBody, GraceFalse);
      var var_asStringMeth = call7315;
      setLineNumber(2524);    // compilenode identifier
      var array7316 = new PrimitiveGraceList([var_meth, var_asStringMeth]);
      var var_metaBody = array7316;
      setLineNumber(2525);    // compilenode string
      var string7318 = new GraceString("");
      // call case 6: other requests
      var call7321 = callmethodChecked(var_objName, "nameString", []);
      var string7323 = new GraceString("class ");
      var opresult7325 = callmethodChecked(string7323, "++(1)", [1], call7321);
      var opresult7327 = callmethodChecked(opresult7325, "++(1)", [1], string7318);
      // call case 6: other requests
      // call case 6: other requests
      var call7329 = callmethodChecked(var_ast, "objectNode", []);
      var call7330 = callmethodChecked(call7329, "body(1)named(1)", [1, 1], var_metaBody, opresult7327);
      var var_metaObj = call7330;
      setLineNumber(2526);    // compilenode member
      // call case 6: other requests
      var call7333 = callmethodChecked(var_ast, "unknownType", []);
      // call case 6: other requests
      // call case 6: other requests
      var call7335 = callmethodChecked(var_ast, "defDecNode", []);
      var call7336 = callmethodChecked(call7335, "new(3)", [3], var_objName, var_metaObj, call7333);
      var var_defDec = call7336;
      setLineNumber(2527);    // compilenode identifier
      // call case 6: other requests
      var call7338 = callmethodChecked(var_defDec, "startToken:=(1)", [1], var_btok);
      setLineNumber(2528);    // compilenode string
      var string7341 = new GraceString("public");
      // call case 6: other requests
      // call case 6: other requests
      var call7343 = callmethodChecked(var_ast, "identifierNode", []);
      var call7344 = callmethodChecked(call7343, "new(2)", [2], string7341, GraceFalse);
      // call case 6: other requests
      // call case 6: other requests
      var call7346 = callmethodChecked(var_defDec, "annotations", []);
      var call7347 = callmethodChecked(call7346, "add(1)", [1], call7344);
      setLineNumber(2529);    // compilenode identifier
      // call case 6: other requests
      var call7349 = callmethodChecked(var_values, "push(1)", [1], var_defDec);
      if7274 = call7349;
    } else {
      setLineNumber(2531);    // compilenode member
      // call case 6: other requests
      var call7352 = callmethodChecked(var_meth, "canonicalName", []);
      // call case 6: other requests
      var call7353 = callmethodChecked(var_objNode, "name:=(1)", [1], call7352);
      var if7354 = GraceDone;
      setLineNumber(2532);    // compilenode string
      var string7355 = new GraceString("class");
      // call case 6: other requests
      var call7358 = callmethodChecked(var_btok, "value", []);
      var opresult7360 = callmethodChecked(call7358, "==(1)", [1], string7355);
      if (Grace_isTrue(opresult7360)) {
        setLineNumber(2533);    // compilenode identifier
        // call case 6: other requests
        var call7362 = callmethodChecked(var_objNode, "inClass:=(1)", [1], GraceTrue);
        if7354 = call7362;
      } else {
        var if7363 = GraceDone;
        setLineNumber(2534);    // compilenode string
        var string7364 = new GraceString("trait");
        // call case 6: other requests
        var call7367 = callmethodChecked(var_btok, "value", []);
        var opresult7369 = callmethodChecked(call7367, "==(1)", [1], string7364);
        if (Grace_isTrue(opresult7369)) {
          setLineNumber(2535);    // compilenode identifier
          // call case 6: other requests
          var call7371 = callmethodChecked(var_objNode, "inTrait:=(1)", [1], GraceTrue);
          if7363 = call7371;
        }
        if7354 = if7363;
      }
      setLineNumber(2537);    // compilenode identifier
      // call case 6: other requests
      var call7373 = callmethodChecked(var_values, "push(1)", [1], var_meth);
      if7274 = call7373;
    }
    setLineNumber(2539);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call7375 = callmethodChecked(this, "reconcileComments", []);
    setLineNumber(2540);    // compilenode identifier
    var_minIndentLevel = var_localMinIndentLevel;
    return GraceDone;
  };
  func7176.paramCounts = [0];
  this.methods["doclass"] = func7176;
  func7176.definitionLine = 2455;
  func7176.definitionModule = "parser";
  setLineNumber(2543);    // compilenode method
  var func7376 = function(argcv) {    // method dofactoryMethod
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    var if7377 = GraceDone;
    setLineNumber(2546);    // compilenode block
    var block7378 = new GraceBlock(this, 2546, 0);
    block7378.real = function() {
      setLineNumber(2547);    // compilenode string
      var string7379 = new GraceString("method");
      // call case 6: other requests
      // call case 6: other requests
      var call7383 = callmethodChecked(var_tokens, "first", []);
      var call7384 = callmethodChecked(call7383, "value", []);
      var opresult7386 = callmethodChecked(call7384, "==(1)", [1], string7379);
      return opresult7386;
    };
    setLineNumber(2545);    // compilenode block
    var block7388 = new GraceBlock(this, 2545, 0);
    block7388.real = function() {
      setLineNumber(2546);    // compilenode string
      var string7389 = new GraceString("keyword");
      // call case 6: other requests
      // call case 6: other requests
      var call7393 = callmethodChecked(var_tokens, "first", []);
      var call7394 = callmethodChecked(call7393, "kind", []);
      var opresult7396 = callmethodChecked(call7394, "==(1)", [1], string7389);
      return opresult7396;
    };
    setLineNumber(2545);    // compilenode string
    var string7399 = new GraceString("factory");
    // call case 4: self request
    onSelf = true;
    var call7400 = callmethodChecked(this, "acceptKeyword(1)", [1], string7399);
    var opresult7402 = callmethodChecked(call7400, "&&(1)", [1], block7388);
    var opresult7404 = callmethodChecked(opresult7402, "&&(1)", [1], block7378);
    if (Grace_isTrue(opresult7404)) {
      setLineNumber(2548);    // compilenode identifier
      var var_btok = var_sym;
      setLineNumber(2549);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call7406 = callmethodChecked(this, "next", []);
      setLineNumber(2550);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call7408 = callmethodChecked(this, "next", []);
      setLineNumber(2551);    // compilenode identifier
      var var_localMinIndentLevel = var_minIndentLevel;
      var if7409 = GraceDone;
      setLineNumber(2552);    // compilenode string
      var string7410 = new GraceString("identifier");
      // call case 6: other requests
      var call7413 = callmethodChecked(var_sym, "kind", []);
      var opresult7415 = callmethodChecked(call7413, "\u2260(1)", [1], string7410);
      if (Grace_isTrue(opresult7415)) {
        setLineNumber(2553);    // compilenode array
        var array7416 = new PrimitiveGraceList([]);
        var var_suggestions = array7416;
        var if7417 = GraceDone;
        setLineNumber(2554);    // compilenode string
        var string7418 = new GraceString("lbrace");
        // call case 6: other requests
        var call7421 = callmethodChecked(var_sym, "kind", []);
        var opresult7423 = callmethodChecked(call7421, "==(1)", [1], string7418);
        if (Grace_isTrue(opresult7423)) {
          setLineNumber(2555);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call7426 = callmethodChecked(var_errormessages, "suggestion", []);
          var call7427 = callmethodChecked(call7426, "new", []);
          var var_suggestion = call7427;
          setLineNumber(2556);    // compilenode string
          var string7429 = new GraceString(" \u00abmethod name\u00bb");
          // call case 6: other requests
          var call7430 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string7429, var_lastToken);
          setLineNumber(2557);    // compilenode identifier
          // call case 6: other requests
          var call7432 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
          setLineNumber(2558);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call7435 = callmethodChecked(var_errormessages, "suggestion", []);
          var call7436 = callmethodChecked(call7435, "new", []);
          var_suggestion = call7436;
          setLineNumber(2559);    // compilenode string
          var string7438 = new GraceString("object");
          // call case 6: other requests
          var call7439 = callmethodChecked(var_suggestion, "replaceToken(1)with(1)", [1, 1], var_lastToken, string7438);
          setLineNumber(2560);    // compilenode identifier
          // call case 6: other requests
          var call7441 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
          if7417 = call7441;
        } else {
          setLineNumber(2562);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call7444 = callmethodChecked(var_errormessages, "suggestion", []);
          var call7445 = callmethodChecked(call7444, "new", []);
          var var_suggestion = call7445;
          setLineNumber(2563);    // compilenode string
          var string7447 = new GraceString(" \u00abmethod name\u00bb {}");
          // call case 6: other requests
          var call7448 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string7447, var_lastToken);
          setLineNumber(2564);    // compilenode identifier
          // call case 6: other requests
          var call7450 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
          if7417 = call7450;
        }
        setLineNumber(2566);    // compilenode string
        var string7452 = new GraceString("a factory method must have a name after the 'method'.");
        setLineNumber(2567);    // compilenode member
        // call case 6: other requests
        var call7454 = callmethodChecked(var_lastToken, "line", []);
        // call case 6: other requests
        var call7457 = callmethodChecked(var_lastToken, "size", []);
        // call case 6: other requests
        var call7460 = callmethodChecked(var_lastToken, "linePos", []);
        var opresult7462 = callmethodChecked(call7460, "+(1)", [1], call7457);
        var opresult7464 = callmethodChecked(opresult7462, "+(1)", [1], new GraceNum(1));
        setLineNumber(2568);    // compilenode identifier
        // call case 6: other requests
        setLineNumber(2566);    // compilenode identifier
        var call7465 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestions(1)", [1, 2, 1], string7452, call7454, opresult7464, var_suggestions);
        if7409 = call7465;
      }
      setLineNumber(2570);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call7467 = callmethodChecked(this, "methodsignature(1)", [1], GraceFalse);
      var var_meth = call7467;
      setLineNumber(2571);    // compilenode string
      var string7469 = new GraceString("a factory method");
      var string7470 = new GraceString("method header");
      // call case 4: self request
      onSelf = true;
      var call7471 = callmethodChecked(this, "parseObjectConstructorBody(1)startingWith(1)after(1)", [1, 1, 1], string7469, var_btok, string7470);
      setLineNumber(2572);    // compilenode member
      // call case 6: other requests
      var call7473 = callmethodChecked(var_values, "pop", []);
      var var_objNode = call7473;
      setLineNumber(2573);    // compilenode member
      // call case 6: other requests
      var call7476 = callmethodChecked(var_meth, "nameString", []);
      // call case 6: other requests
      var call7477 = callmethodChecked(var_objNode, "name:=(1)", [1], call7476);
      setLineNumber(2574);    // compilenode member
      // call case 6: other requests
      var call7480 = callmethodChecked(var_btok, "line", []);
      // call case 6: other requests
      var call7482 = callmethodChecked(var_btok, "linePos", []);
      // call case 6: other requests
      var call7483 = callmethodChecked(var_util, "setPosition(2)", [2], call7480, call7482);
      setLineNumber(2575);    // compilenode identifier
      var array7485 = new PrimitiveGraceList([var_objNode]);
      // call case 6: other requests
      var call7486 = callmethodChecked(var_meth, "body:=(1)", [1], array7485);
      setLineNumber(2576);    // compilenode member
      // call case 6: other requests
      var call7489 = callmethodChecked(var_objNode, "annotations", []);
      // call case 6: other requests
      // call case 6: other requests
      var call7491 = callmethodChecked(var_meth, "annotations", []);
      var call7492 = callmethodChecked(call7491, "addAll(1)", [1], call7489);
      setLineNumber(2580);    // compilenode identifier
      // call case 6: other requests
      var call7494 = callmethodChecked(var_values, "push(1)", [1], var_meth);
      setLineNumber(2581);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call7496 = callmethodChecked(this, "reconcileComments", []);
      setLineNumber(2582);    // compilenode identifier
      var_minIndentLevel = var_localMinIndentLevel;
      if7377 = GraceDone;
    }
    return if7377;
  };
  func7376.paramCounts = [0];
  this.methods["dofactoryMethod"] = func7376;
  func7376.definitionLine = 2543;
  func7376.definitionModule = "parser";
  setLineNumber(2586);    // compilenode method
  var func7497 = function(argcv) {    // method methoddec
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    var if7498 = GraceDone;
    setLineNumber(2589);    // compilenode string
    var string7500 = new GraceString("method");
    // call case 4: self request
    onSelf = true;
    var call7501 = callmethodChecked(this, "acceptKeyword(1)", [1], string7500);
    if (Grace_isTrue(call7501)) {
      setLineNumber(2590);    // compilenode identifier
      var var_btok = var_sym;
      setLineNumber(2591);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call7503 = callmethodChecked(this, "checkIndent", []);
      setLineNumber(2592);    // compilenode identifier
      var_statementToken = var_sym;
      setLineNumber(2593);    // compilenode identifier
      var var_stok = var_sym;
      setLineNumber(2594);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call7505 = callmethodChecked(this, "next", []);
      setLineNumber(2595);    // compilenode identifier
      // call case 6: other requests
      // call case 4: self request
      onSelf = true;
      var call7508 = callmethodChecked(this, "methodsignature(1)", [1], GraceFalse);
      var call7509 = callmethodChecked(call7508, "setPositionFrom(1)", [1], var_btok);
      var var_methNode = call7509;
      setLineNumber(2596);    // compilenode array
      var array7510 = new PrimitiveGraceList([]);
      var var_body = array7510;
      setLineNumber(2597);    // compilenode vardec
      var var_localMin;
      setLineNumber(2598);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call7512 = callmethodChecked(this, "doannotation", []);
      var var_anns = call7512;
      var if7513 = GraceDone;
      setLineNumber(2599);    // compilenode string
      var string7515 = new GraceString("lbrace");
      // call case 4: self request
      onSelf = true;
      var call7516 = callmethodChecked(this, "accept(1)", [1], string7515);
      if (Grace_isTrue(call7516)) {
        setLineNumber(2600);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call7518 = callmethodChecked(this, "next", []);
        setLineNumber(2601);    // compilenode identifier
        var_localMin = var_minIndentLevel;
        var if7519 = GraceDone;
        setLineNumber(2602);    // compilenode member
        // call case 6: other requests
        var call7521 = callmethodChecked(var_stok, "line", []);
        // call case 6: other requests
        var call7524 = callmethodChecked(var_sym, "line", []);
        var opresult7526 = callmethodChecked(call7524, "==(1)", [1], call7521);
        if (Grace_isTrue(opresult7526)) {
          setLineNumber(2603);    // compilenode member
          // call case 6: other requests
          var call7529 = callmethodChecked(var_sym, "linePos", []);
          var diff7531 = callmethodChecked(call7529, "-(1)", [1], new GraceNum(1));
          var_minIndentLevel = diff7531;
          if7519 = GraceDone;
        } else {
          setLineNumber(2605);    // compilenode member
          // call case 6: other requests
          var call7534 = callmethodChecked(var_stok, "indent", []);
          var opresult7536 = callmethodChecked(call7534, "+(1)", [1], new GraceNum(1));
          var_minIndentLevel = opresult7536;
          if7519 = GraceDone;
        }
        setLineNumber(2607);    // compilenode object
        var obj7538 = Grace_allocObject(GraceObject, "object");
        obj7538.definitionModule = "parser";
        obj7538.definitionLine = 2607;
        obj7538.outer = this;
        var reader_parser_outer7539 = function() {
          return this.outer;
        };
        obj7538.methods["outer"] = reader_parser_outer7539;
        var obj_init_7538 = function() {
          var origSuperDepth = superDepth;
          superDepth = obj7538;
          setLineNumber(2608);    // compilenode string
          var string7540 = new GraceString("lbrace");
          obj7538.data["kind"] = string7540;
          var reader_parser_kind7541 = function() {
            return this.data["kind"];
          };
          reader_parser_kind7541.def = true;
          obj7538.methods["kind"] = reader_parser_kind7541;
          setLineNumber(2609);    // compilenode string
          var string7542 = new GraceString("");
          obj7538.data["register"] = string7542;
          var reader_parser_register7543 = function() {
            return this.data["register"];
          };
          obj7538.methods["register"] = reader_parser_register7543;
          obj7538.data["register"] = string7542;
          var writer_parser_register7543 = function(argcv, o) {
            this.data["register"] = o;
            return GraceDone;
          };
          obj7538.methods["register:=(1)"] = writer_parser_register7543;
          obj7538.mutable = true;
          superDepth = origSuperDepth;
        };
        obj_init_7538.apply(obj7538, []);
        // call case 6: other requests
        setLineNumber(2607);    // compilenode identifier
        var call7544 = callmethodChecked(var_values, "push(1)", [1], obj7538);
        setLineNumber(2611);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call7546 = callmethodChecked(this, "statement", []);
        setLineNumber(2612);    // compilenode member
        // call case 6: other requests
        var call7548 = callmethodChecked(var_values, "pop", []);
        var var_s = call7548;
        setLineNumber(2613);    // compilenode block
        var block7550 = new GraceBlock(this, 2613, 0);
        block7550.real = function() {
          var string7551 = new GraceString("lbrace");
          // call case 6: other requests
          var call7554 = callmethodChecked(var_s, "kind", []);
          var opresult7556 = callmethodChecked(call7554, "\u2260(1)", [1], string7551);
          return opresult7556;
        };
        var block7557 = new GraceBlock(this, 2613, 0);
        block7557.real = function() {
          setLineNumber(2617);    // compilenode identifier
          // call case 6: other requests
          var call7559 = callmethodChecked(var_body, "push(1)", [1], var_s);
          setLineNumber(2618);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call7561 = callmethodChecked(this, "statement", []);
          setLineNumber(2619);    // compilenode member
          // call case 6: other requests
          var call7563 = callmethodChecked(var_values, "pop", []);
          var_s = call7563;
          return GraceDone;
        };
        // call case 5: prelude request
        var call7564 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block7550, block7557);
        var if7565 = GraceDone;
        setLineNumber(2621);    // compilenode string
        var string7566 = new GraceString("rbrace");
        // call case 6: other requests
        var call7569 = callmethodChecked(var_sym, "kind", []);
        var opresult7571 = callmethodChecked(call7569, "\u2260(1)", [1], string7566);
        if (Grace_isTrue(opresult7571)) {
          setLineNumber(2622);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call7574 = callmethodChecked(var_errormessages, "suggestion", []);
          var call7575 = callmethodChecked(call7574, "new", []);
          var var_suggestion = call7575;
          setLineNumber(2623);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call7577 = callmethodChecked(this, "findClosingBrace(2)", [2], var_btok, GraceFalse);
          var var_closingBrace = call7577;
          var if7578 = GraceDone;
          setLineNumber(2624);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call7581 = callmethodChecked(var_closingBrace, "found", []);
          var call7582 = callmethodChecked(call7581, "not", []);
          if (Grace_isTrue(call7582)) {
            var if7583 = GraceDone;
            setLineNumber(2625);    // compilenode member
            // call case 6: other requests
            var call7586 = callmethodChecked(var_closingBrace, "tok", []);
            var opresult7588 = callmethodChecked(call7586, "==(1)", [1], var_sym);
            if (Grace_isTrue(opresult7588)) {
              setLineNumber(2626);    // compilenode string
              var string7590 = new GraceString("}");
              // call case 6: other requests
              var call7591 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string7590, var_lastToken);
              if7583 = call7591;
            } else {
              setLineNumber(2628);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              var call7596 = callmethodChecked(var_closingBrace, "tok", []);
              var call7597 = callmethodChecked(call7596, "line", []);
              var opresult7599 = callmethodChecked(call7597, "+(1)", [1], new GraceNum(0.1));
              var string7600 = new GraceString("}");
              // call case 6: other requests
              var call7601 = callmethodChecked(var_suggestion, "addLine(2)", [2], opresult7599, string7600);
              if7583 = call7601;
            }
            if7578 = if7583;
          }
          setLineNumber(2631);    // compilenode identifier
          // call case 6: other requests
          var call7603 = callmethodChecked(var_suggestion, "deleteToken(1)", [1], var_sym);
          setLineNumber(2632);    // compilenode string
          var string7605 = new GraceString("a method must end with a '}'.");
          setLineNumber(2633);    // compilenode member
          // call case 6: other requests
          var call7607 = callmethodChecked(var_sym, "line", []);
          // call case 6: other requests
          var call7609 = callmethodChecked(var_sym, "linePos", []);
          // call case 6: other requests
          setLineNumber(2632);    // compilenode identifier
          var call7610 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string7605, call7607, call7609, var_suggestion);
          if7565 = call7610;
        }
        setLineNumber(2635);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call7612 = callmethodChecked(this, "next", []);
        setLineNumber(2636);    // compilenode identifier
        var_minIndentLevel = var_localMin;
        if7513 = GraceDone;
      } else {
        setLineNumber(2638);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call7615 = callmethodChecked(var_errormessages, "suggestion", []);
        var call7616 = callmethodChecked(call7615, "new", []);
        var var_suggestion = call7616;
        setLineNumber(2639);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call7618 = callmethodChecked(this, "findClosingBrace(2)", [2], var_btok, GraceTrue);
        var var_closingBrace = call7618;
        var if7619 = GraceDone;
        setLineNumber(2640);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call7622 = callmethodChecked(var_closingBrace, "found", []);
        var call7623 = callmethodChecked(call7622, "not", []);
        if (Grace_isTrue(call7623)) {
          var if7624 = GraceDone;
          setLineNumber(2641);    // compilenode member
          // call case 6: other requests
          var call7627 = callmethodChecked(var_closingBrace, "tok", []);
          var opresult7629 = callmethodChecked(call7627, "==(1)", [1], var_lastToken);
          if (Grace_isTrue(opresult7629)) {
            setLineNumber(2642);    // compilenode string
            var string7631 = new GraceString(" {}");
            // call case 6: other requests
            var call7632 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)andTrailingSpace(1)", [1, 1, 1], string7631, var_lastToken, GraceTrue);
            if7624 = call7632;
          } else {
            setLineNumber(2644);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call7637 = callmethodChecked(var_closingBrace, "tok", []);
            var call7638 = callmethodChecked(call7637, "line", []);
            var opresult7640 = callmethodChecked(call7638, "+(1)", [1], new GraceNum(0.1));
            var string7641 = new GraceString("}");
            // call case 6: other requests
            var call7642 = callmethodChecked(var_suggestion, "addLine(2)", [2], opresult7640, string7641);
            setLineNumber(2645);    // compilenode string
            var string7644 = new GraceString(" {");
            // call case 6: other requests
            var call7645 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)andTrailingSpace(1)", [1, 1, 1], string7644, var_lastToken, GraceTrue);
            if7624 = call7645;
          }
          if7619 = if7624;
        } else {
          setLineNumber(2648);    // compilenode string
          var string7647 = new GraceString(" {");
          // call case 6: other requests
          var call7648 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)andTrailingSpace(1)", [1, 1, 1], string7647, var_lastToken, GraceTrue);
          if7619 = call7648;
        }
        setLineNumber(2650);    // compilenode string
        var string7650 = new GraceString("a method must have a '{' after the name.");
        setLineNumber(2651);    // compilenode member
        // call case 6: other requests
        var call7652 = callmethodChecked(var_lastToken, "line", []);
        // call case 6: other requests
        var call7654 = callmethodChecked(var_lastToken, "size", []);
        // call case 6: other requests
        var call7657 = callmethodChecked(var_lastToken, "linePos", []);
        var opresult7659 = callmethodChecked(call7657, "+(1)", [1], call7654);
        // call case 6: other requests
        setLineNumber(2650);    // compilenode identifier
        var call7660 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string7650, call7652, opresult7659, var_suggestion);
        if7513 = call7660;
      }
      setLineNumber(2653);    // compilenode identifier
      // call case 6: other requests
      var call7662 = callmethodChecked(var_methNode, "body:=(1)", [1], var_body);
      setLineNumber(2654);    // compilenode member
      // call case 6: other requests
      var call7665 = callmethodChecked(var_btok, "line", []);
      // call case 6: other requests
      var call7666 = callmethodChecked(var_util, "setline(1)", [1], call7665);
      var if7667 = GraceDone;
      setLineNumber(2655);    // compilenode identifier
      var opresult7670 = callmethodChecked(GraceFalse, "\u2260(1)", [1], var_anns);
      if (Grace_isTrue(opresult7670)) {
        // call case 6: other requests
        // call case 6: other requests
        var call7673 = callmethodChecked(var_methNode, "annotations", []);
        var call7674 = callmethodChecked(call7673, "addAll(1)", [1], var_anns);
        if7667 = call7674;
      }
      setLineNumber(2656);    // compilenode identifier
      // call case 6: other requests
      var call7676 = callmethodChecked(var_values, "push(1)", [1], var_methNode);
      setLineNumber(2657);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call7678 = callmethodChecked(this, "reconcileComments", []);
      if7498 = call7678;
    }
    return if7498;
  };
  func7497.paramCounts = [0];
  this.methods["methoddec"] = func7497;
  func7497.definitionLine = 2586;
  func7497.definitionModule = "parser";
  setLineNumber(2662);    // compilenode method
  var func7679 = function(argcv) {    // method methodDecRest(_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_tm = arguments[curarg];
    curarg++;
    var var_sameline = arguments[curarg];
    curarg++;
    setModuleName("parser");
    setLineNumber(2669);    // compilenode member
    // call case 6: other requests
    var call7681 = callmethodChecked(var_tm, "signature", []);
    var var_signature = call7681;
    setLineNumber(2670);    // compilenode block
    var block7683 = new GraceBlock(this, 2670, 0);
    block7683.real = function() {
      var string7685 = new GraceString("identifier");
      // call case 4: self request
      onSelf = true;
      var call7686 = callmethodChecked(this, "acceptSameLine(1)", [1], string7685);
      var string7689 = new GraceString("identifier");
      // call case 4: self request
      onSelf = true;
      var call7690 = callmethodChecked(this, "accept(1)", [1], string7689);
      // call case 6: other requests
      var call7693 = callmethodChecked(var_sameline, "prefix!", [0]);
      var opresult7695 = callmethodChecked(call7693, "&&(1)", [1], call7690);
      var opresult7697 = callmethodChecked(opresult7695, "||(1)", [1], call7686);
      return opresult7697;
    };
    var block7698 = new GraceBlock(this, 2670, 0);
    block7698.real = function() {
      setLineNumber(2671);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call7700 = callmethodChecked(this, "pushidentifier", []);
      setLineNumber(2672);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call7704 = callmethodChecked(var_values, "pop", []);
      var call7705 = callmethodChecked(call7704, "nameString", []);
      // call case 6: other requests
      // call case 6: other requests
      var call7707 = callmethodChecked(var_ast, "signaturePart", []);
      var call7708 = callmethodChecked(call7707, "partName(1)", [1], call7705);
      var var_part = call7708;
      var if7709 = GraceDone;
      setLineNumber(2673);    // compilenode member
      // call case 6: other requests
      var string7712 = new GraceString("lparen");
      // call case 4: self request
      onSelf = true;
      var call7713 = callmethodChecked(this, "accept(1)", [1], string7712);
      var call7714 = callmethodChecked(call7713, "not", []);
      if (Grace_isTrue(call7714)) {
        setLineNumber(2674);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call7717 = callmethodChecked(var_errormessages, "suggestion", []);
        var call7718 = callmethodChecked(call7717, "new", []);
        var var_suggestion = call7718;
        setLineNumber(2675);    // compilenode string
        var string7720 = new GraceString("()");
        // call case 6: other requests
        var call7721 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string7720, var_lastToken);
        setLineNumber(2677);    // compilenode string
        var string7723 = new GraceString("parameter lists must have parentheses around each parameter list.");
        setLineNumber(2676);    // compilenode string
        var string7725 = new GraceString("the declaration of a method with multiple ");
        var opresult7727 = callmethodChecked(string7725, "++(1)", [1], string7723);
        setLineNumber(2678);    // compilenode member
        // call case 6: other requests
        var call7729 = callmethodChecked(var_sym, "line", []);
        // call case 6: other requests
        var call7731 = callmethodChecked(var_sym, "linePos", []);
        // call case 6: other requests
        setLineNumber(2676);    // compilenode identifier
        var call7732 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], opresult7727, call7729, call7731, var_suggestion);
        if7709 = call7732;
      }
      setLineNumber(2680);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call7734 = callmethodChecked(this, "next", []);
      setLineNumber(2681);    // compilenode identifier
      var var_comma = GraceFalse;
      setLineNumber(2682);    // compilenode block
      var block7736 = new GraceBlock(this, 2682, 0);
      block7736.real = function() {
        setLineNumber(2683);    // compilenode string
        var string7737 = new GraceString("*");
        // call case 6: other requests
        var call7740 = callmethodChecked(var_sym, "value", []);
        var opresult7742 = callmethodChecked(call7740, "==(1)", [1], string7737);
        var string7745 = new GraceString("op");
        // call case 4: self request
        onSelf = true;
        var call7746 = callmethodChecked(this, "accept(1)", [1], string7745);
        var opresult7748 = callmethodChecked(call7746, "&&(1)", [1], opresult7742);
        setLineNumber(2682);    // compilenode string
        var string7751 = new GraceString("identifier");
        // call case 4: self request
        onSelf = true;
        var call7752 = callmethodChecked(this, "accept(1)", [1], string7751);
        var opresult7754 = callmethodChecked(call7752, "||(1)", [1], opresult7748);
        return opresult7754;
      };
      setLineNumber(2683);    // compilenode block
      var block7755 = new GraceBlock(this, 2683, 0);
      block7755.real = function() {
        var if7756 = GraceDone;
        setLineNumber(2684);    // compilenode string
        var string7758 = new GraceString("op");
        // call case 4: self request
        onSelf = true;
        var call7759 = callmethodChecked(this, "accept(1)", [1], string7758);
        if (Grace_isTrue(call7759)) {
          setLineNumber(2685);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call7761 = callmethodChecked(this, "next", []);
          setLineNumber(2686);    // compilenode string
          var string7763 = new GraceString(" an Iterable.");
          // call case 6: other requests
          var call7766 = callmethodChecked(var_sym, "value", []);
          var string7768 = new GraceString("variable length parameters (parameters prefixed by '*') are no longer part of Grace.  Consider making ");
          var opresult7770 = callmethodChecked(string7768, "++(1)", [1], call7766);
          var opresult7772 = callmethodChecked(opresult7770, "++(1)", [1], string7763);
          setLineNumber(2687);    // compilenode member
          // call case 6: other requests
          var call7774 = callmethodChecked(var_lastToken, "line", []);
          // call case 6: other requests
          var call7776 = callmethodChecked(var_lastToken, "linePos", []);
          // call case 6: other requests
          setLineNumber(2686);    // compilenode identifier
          var call7777 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)", [1, 2], opresult7772, call7774, call7776);
          if7756 = call7777;
        }
        setLineNumber(2689);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call7779 = callmethodChecked(this, "pushidentifier", []);
        setLineNumber(2690);    // compilenode member
        // call case 6: other requests
        var call7781 = callmethodChecked(var_values, "pop", []);
        var var_nxt = call7781;
        setLineNumber(2691);    // compilenode identifier
        // call case 6: other requests
        var call7783 = callmethodChecked(var_nxt, "isBindingOccurrence:=(1)", [1], GraceTrue);
        setLineNumber(2692);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call7786 = callmethodChecked(this, "optionalTypeAnnotation", []);
        // call case 6: other requests
        var call7787 = callmethodChecked(var_nxt, "dtype:=(1)", [1], call7786);
        setLineNumber(2693);    // compilenode identifier
        // call case 6: other requests
        // call case 6: other requests
        var call7790 = callmethodChecked(var_part, "params", []);
        var call7791 = callmethodChecked(call7790, "push(1)", [1], var_nxt);
        var if7792 = GraceDone;
        setLineNumber(2694);    // compilenode string
        var string7794 = new GraceString("comma");
        // call case 4: self request
        onSelf = true;
        var call7795 = callmethodChecked(this, "accept(1)", [1], string7794);
        if (Grace_isTrue(call7795)) {
          setLineNumber(2695);    // compilenode identifier
          var_comma = var_sym;
          setLineNumber(2696);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call7797 = callmethodChecked(this, "next", []);
          if7792 = call7797;
        }
        return if7792;
      };
      // call case 5: prelude request
      var call7798 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block7736, block7755);
      var if7799 = GraceDone;
      setLineNumber(2699);    // compilenode string
      var string7800 = new GraceString("rparen");
      // call case 6: other requests
      var call7803 = callmethodChecked(var_sym, "kind", []);
      var opresult7805 = callmethodChecked(call7803, "\u2260(1)", [1], string7800);
      if (Grace_isTrue(opresult7805)) {
        setLineNumber(2700);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call7808 = callmethodChecked(var_errormessages, "suggestion", []);
        var call7809 = callmethodChecked(call7808, "new", []);
        var var_suggestion = call7809;
        setLineNumber(2701);    // compilenode string
        var string7811 = new GraceString(")");
        // call case 6: other requests
        var call7812 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string7811, var_lastToken);
        setLineNumber(2702);    // compilenode string
        var string7814 = new GraceString("a part of a multi-part method beginning with a '(' must end with a ')'.");
        setLineNumber(2703);    // compilenode member
        // call case 6: other requests
        var call7816 = callmethodChecked(var_lastToken, "line", []);
        // call case 6: other requests
        var call7818 = callmethodChecked(var_lastToken, "size", []);
        // call case 6: other requests
        var call7821 = callmethodChecked(var_lastToken, "linePos", []);
        var opresult7823 = callmethodChecked(call7821, "+(1)", [1], call7818);
        // call case 6: other requests
        setLineNumber(2702);    // compilenode identifier
        var call7824 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string7814, call7816, opresult7823, var_suggestion);
        if7799 = call7824;
      }
      setLineNumber(2705);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call7826 = callmethodChecked(this, "next", []);
      setLineNumber(2706);    // compilenode identifier
      // call case 6: other requests
      var call7828 = callmethodChecked(var_signature, "push(1)", [1], var_part);
      return call7828;
    };
    // call case 5: prelude request
    var call7829 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block7683, block7698);
    return call7829;
  };
  func7679.paramCounts = [2];
  this.methods["methodDecRest(2)"] = func7679;
  func7679.definitionLine = 2662;
  func7679.definitionModule = "parser";
  setLineNumber(2710);    // compilenode method
  var func7830 = function(argcv) {    // method optionalTypeAnnotation
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    var if7831 = GraceDone;
    setLineNumber(2713);    // compilenode string
    var string7833 = new GraceString("colon");
    // call case 4: self request
    onSelf = true;
    var call7834 = callmethodChecked(this, "accept(1)", [1], string7833);
    if (Grace_isTrue(call7834)) {
      setLineNumber(2714);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call7836 = callmethodChecked(this, "next", []);
      var if7837 = GraceDone;
      setLineNumber(2715);    // compilenode block
      var block7839 = new GraceBlock(this, 2715, 0);
      block7839.real = function() {
        // call case 4: self request
        onSelf = true;
        var call7841 = callmethodChecked(this, "typeexpression", []);
        return call7841;
      };
      // call case 4: self request
      onSelf = true;
      var call7842 = callmethodChecked(this, "didConsume(1)", [1], block7839);
      if (Grace_isTrue(call7842)) {
        setLineNumber(2716);    // compilenode member
        // call case 6: other requests
        var call7844 = callmethodChecked(var_values, "pop", []);
        if7837 = call7844;
      } else {
        setLineNumber(2718);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call7846 = callmethodChecked(this, "checkBadTypeLiteral", []);
        setLineNumber(2719);    // compilenode array
        var array7847 = new PrimitiveGraceList([]);
        var var_suggestions = array7847;
        setLineNumber(2720);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call7850 = callmethodChecked(var_errormessages, "suggestion", []);
        var call7851 = callmethodChecked(call7850, "new", []);
        var var_suggestion = call7851;
        setLineNumber(2721);    // compilenode string
        var string7853 = new GraceString(" \u00abtype name\u00bb");
        // call case 6: other requests
        var call7854 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string7853, var_lastToken);
        setLineNumber(2722);    // compilenode identifier
        // call case 6: other requests
        var call7856 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
        setLineNumber(2723);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call7859 = callmethodChecked(var_errormessages, "suggestion", []);
        var call7860 = callmethodChecked(call7859, "new", []);
        var_suggestion = call7860;
        setLineNumber(2724);    // compilenode identifier
        // call case 6: other requests
        var call7862 = callmethodChecked(var_suggestion, "deleteToken(1)leading(1)trailing(1)", [1, 1, 1], var_lastToken, GraceTrue, GraceFalse);
        setLineNumber(2725);    // compilenode identifier
        // call case 6: other requests
        var call7864 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
        setLineNumber(2726);    // compilenode string
        var string7866 = new GraceString("a type name or type expression must follow ':'.");
        setLineNumber(2727);    // compilenode member
        // call case 6: other requests
        var call7868 = callmethodChecked(var_sym, "line", []);
        // call case 6: other requests
        var call7870 = callmethodChecked(var_sym, "linePos", []);
        // call case 6: other requests
        setLineNumber(2726);    // compilenode identifier
        var call7871 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestions(1)", [1, 2, 1], string7866, call7868, call7870, var_suggestions);
        if7837 = call7871;
      }
      if7831 = if7837;
    } else {
      setLineNumber(2730);    // compilenode identifier
      if7831 = GraceFalse;
    }
    return if7831;
  };
  func7830.paramCounts = [0];
  this.methods["optionalTypeAnnotation"] = func7830;
  func7830.definitionLine = 2710;
  func7830.definitionModule = "parser";
  setLineNumber(2734);    // compilenode method
  var func7872 = function(argcv) {    // method methodsignature(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_sameline = arguments[curarg];
    curarg++;
    setModuleName("parser");
    var if7873 = GraceDone;
    setLineNumber(2736);    // compilenode string
    var string7874 = new GraceString("lsquare");
    // call case 6: other requests
    var call7877 = callmethodChecked(var_sym, "kind", []);
    var opresult7879 = callmethodChecked(call7877, "\u2260(1)", [1], string7874);
    var string7881 = new GraceString("op");
    // call case 6: other requests
    var call7884 = callmethodChecked(var_sym, "kind", []);
    var opresult7886 = callmethodChecked(call7884, "\u2260(1)", [1], string7881);
    var string7888 = new GraceString("identifier");
    // call case 6: other requests
    var call7891 = callmethodChecked(var_sym, "kind", []);
    var opresult7893 = callmethodChecked(call7891, "\u2260(1)", [1], string7888);
    var opresult7895 = callmethodChecked(opresult7893, "&&(1)", [1], opresult7886);
    var opresult7897 = callmethodChecked(opresult7895, "&&(1)", [1], opresult7879);
    if (Grace_isTrue(opresult7897)) {
      setLineNumber(2737);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call7900 = callmethodChecked(var_errormessages, "suggestion", []);
      var call7901 = callmethodChecked(call7900, "new", []);
      var var_suggestion = call7901;
      setLineNumber(2738);    // compilenode string
      var string7903 = new GraceString(" \u00abmethod name\u00bb");
      // call case 6: other requests
      var call7904 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string7903, var_lastToken);
      setLineNumber(2739);    // compilenode string
      var string7906 = new GraceString("a method name must start with an identifier, or be an operator.");
      setLineNumber(2740);    // compilenode member
      // call case 6: other requests
      var call7908 = callmethodChecked(var_lastToken, "line", []);
      // call case 6: other requests
      var call7911 = callmethodChecked(var_lastToken, "size", []);
      // call case 6: other requests
      var call7914 = callmethodChecked(var_lastToken, "linePos", []);
      var opresult7916 = callmethodChecked(call7914, "+(1)", [1], call7911);
      var opresult7918 = callmethodChecked(opresult7916, "+(1)", [1], new GraceNum(1));
      setLineNumber(2741);    // compilenode identifier
      // call case 6: other requests
      setLineNumber(2739);    // compilenode identifier
      var call7919 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string7906, call7908, opresult7918, var_suggestion);
      if7873 = call7919;
    }
    setLineNumber(2743);    // compilenode identifier
    var var_startToken = var_sym;
    setLineNumber(2744);    // compilenode member
    // call case 6: other requests
    var call7922 = callmethodChecked(var_startToken, "value", []);
    // call case 6: other requests
    // call case 6: other requests
    var call7924 = callmethodChecked(var_ast, "signaturePart", []);
    var call7925 = callmethodChecked(call7924, "partName(1)", [1], call7922);
    var var_part = call7925;
    setLineNumber(2745);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call7927 = callmethodChecked(this, "next", []);
    setLineNumber(2746);    // compilenode identifier
    var array7929 = new PrimitiveGraceList([var_part]);
    var array7930 = new PrimitiveGraceList([]);
    // call case 6: other requests
    // call case 6: other requests
    var call7932 = callmethodChecked(var_ast, "methodNode", []);
    var call7933 = callmethodChecked(call7932, "new(3)", [3], array7929, array7930, GraceFalse);
    var var_result = call7933;
    var if7934 = GraceDone;
    setLineNumber(2747);    // compilenode block
    var block7935 = new GraceBlock(this, 2747, 0);
    block7935.real = function() {
      var string7936 = new GraceString("rsquare");
      // call case 6: other requests
      var call7939 = callmethodChecked(var_sym, "kind", []);
      var opresult7941 = callmethodChecked(call7939, "==(1)", [1], string7936);
      return opresult7941;
    };
    var string7943 = new GraceString("[");
    // call case 6: other requests
    var call7946 = callmethodChecked(var_startToken, "value", []);
    var opresult7948 = callmethodChecked(call7946, "==(1)", [1], string7943);
    var opresult7950 = callmethodChecked(opresult7948, "&&(1)", [1], block7935);
    if (Grace_isTrue(opresult7950)) {
      setLineNumber(2748);    // compilenode string
      var string7952 = new GraceString("methods named '[]' and '[]:=' are no longer part of Grace.");
      setLineNumber(2749);    // compilenode member
      // call case 6: other requests
      var call7954 = callmethodChecked(var_lastToken, "line", []);
      // call case 6: other requests
      var call7956 = callmethodChecked(var_lastToken, "linePos", []);
      // call case 6: other requests
      var call7958 = callmethodChecked(var_sym, "linePos", []);
      // call case 6: other requests
      setLineNumber(2748);    // compilenode identifier
      var call7959 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], string7952, call7954, call7956, call7958);
      if7934 = call7959;
    }
    var if7960 = GraceDone;
    setLineNumber(2751);    // compilenode string
    var string7962 = new GraceString("lgeneric");
    // call case 4: self request
    onSelf = true;
    var call7963 = callmethodChecked(this, "accept(1)", [1], string7962);
    if (Grace_isTrue(call7963)) {
      // call case 4: self request
      onSelf = true;
      var call7966 = callmethodChecked(this, "typeparameters", []);
      // call case 6: other requests
      var call7967 = callmethodChecked(var_result, "typeParams:=(1)", [1], call7966);
      if7960 = call7967;
    }
    var if7968 = GraceDone;
    setLineNumber(2752);    // compilenode string
    var string7970 = new GraceString("bind");
    // call case 4: self request
    onSelf = true;
    var call7971 = callmethodChecked(this, "accept(1)", [1], string7970);
    if (Grace_isTrue(call7971)) {
      setLineNumber(2753);    // compilenode string
      var string7973 = new GraceString(":=");
      // call case 6: other requests
      var call7976 = callmethodChecked(var_part, "name", []);
      var opresult7978 = callmethodChecked(call7976, "++(1)", [1], string7973);
      // call case 6: other requests
      var call7979 = callmethodChecked(var_part, "name:=(1)", [1], opresult7978);
      setLineNumber(2754);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call7981 = callmethodChecked(this, "next", []);
      if7968 = call7981;
    } else {
      var if7982 = GraceDone;
      setLineNumber(2755);    // compilenode string
      var string7983 = new GraceString("prefix");
      // call case 6: other requests
      var call7986 = callmethodChecked(var_startToken, "value", []);
      var opresult7988 = callmethodChecked(call7986, "==(1)", [1], string7983);
      var string7991 = new GraceString("op");
      // call case 4: self request
      onSelf = true;
      var call7992 = callmethodChecked(this, "accept(1)", [1], string7991);
      var opresult7994 = callmethodChecked(call7992, "&&(1)", [1], opresult7988);
      if (Grace_isTrue(opresult7994)) {
        setLineNumber(2756);    // compilenode member
        // call case 6: other requests
        var call7997 = callmethodChecked(var_sym, "value", []);
        // call case 6: other requests
        var call8000 = callmethodChecked(var_part, "name", []);
        var opresult8002 = callmethodChecked(call8000, "++(1)", [1], call7997);
        // call case 6: other requests
        var call8003 = callmethodChecked(var_part, "name:=(1)", [1], opresult8002);
        setLineNumber(2757);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call8005 = callmethodChecked(this, "next", []);
        if7982 = call8005;
      }
      if7968 = if7982;
    }
    var if8006 = GraceDone;
    setLineNumber(2759);    // compilenode string
    var string8008 = new GraceString("lparen");
    // call case 4: self request
    onSelf = true;
    var call8009 = callmethodChecked(this, "accept(1)", [1], string8008);
    if (Grace_isTrue(call8009)) {
      setLineNumber(2760);    // compilenode identifier
      var var_lparen = var_sym;
      setLineNumber(2761);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call8011 = callmethodChecked(this, "next", []);
      setLineNumber(2762);    // compilenode vardec
      var var_id;
      setLineNumber(2763);    // compilenode identifier
      var var_comma = GraceFalse;
      setLineNumber(2764);    // compilenode block
      var block8013 = new GraceBlock(this, 2764, 0);
      block8013.real = function() {
        setLineNumber(2765);    // compilenode string
        var string8014 = new GraceString("*");
        // call case 6: other requests
        var call8017 = callmethodChecked(var_sym, "value", []);
        var opresult8019 = callmethodChecked(call8017, "==(1)", [1], string8014);
        var string8022 = new GraceString("op");
        // call case 4: self request
        onSelf = true;
        var call8023 = callmethodChecked(this, "accept(1)", [1], string8022);
        var opresult8025 = callmethodChecked(call8023, "&&(1)", [1], opresult8019);
        setLineNumber(2764);    // compilenode string
        var string8028 = new GraceString("identifier");
        // call case 4: self request
        onSelf = true;
        var call8029 = callmethodChecked(this, "accept(1)", [1], string8028);
        var opresult8031 = callmethodChecked(call8029, "||(1)", [1], opresult8025);
        return opresult8031;
      };
      setLineNumber(2765);    // compilenode block
      var block8032 = new GraceBlock(this, 2765, 0);
      block8032.real = function() {
        var if8033 = GraceDone;
        setLineNumber(2768);    // compilenode string
        var string8035 = new GraceString("op");
        // call case 4: self request
        onSelf = true;
        var call8036 = callmethodChecked(this, "accept(1)", [1], string8035);
        if (Grace_isTrue(call8036)) {
          setLineNumber(2769);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call8038 = callmethodChecked(this, "next", []);
          setLineNumber(2770);    // compilenode string
          var string8040 = new GraceString(" an Iterable.");
          // call case 6: other requests
          var call8043 = callmethodChecked(var_sym, "value", []);
          var string8045 = new GraceString("variable length parameters (parameters prefixed by '*') are no longer part of Grace.  Consider making ");
          var opresult8047 = callmethodChecked(string8045, "++(1)", [1], call8043);
          var opresult8049 = callmethodChecked(opresult8047, "++(1)", [1], string8040);
          setLineNumber(2771);    // compilenode member
          // call case 6: other requests
          var call8051 = callmethodChecked(var_lastToken, "line", []);
          // call case 6: other requests
          var call8053 = callmethodChecked(var_lastToken, "linePos", []);
          // call case 6: other requests
          setLineNumber(2770);    // compilenode identifier
          var call8054 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)", [1, 2], opresult8049, call8051, call8053);
          if8033 = call8054;
        }
        setLineNumber(2773);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call8056 = callmethodChecked(this, "pushidentifier", []);
        setLineNumber(2774);    // compilenode member
        // call case 6: other requests
        var call8058 = callmethodChecked(var_values, "pop", []);
        var_id = call8058;
        setLineNumber(2775);    // compilenode identifier
        // call case 6: other requests
        var call8060 = callmethodChecked(var_id, "isBindingOccurrence:=(1)", [1], GraceTrue);
        setLineNumber(2776);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call8063 = callmethodChecked(this, "optionalTypeAnnotation", []);
        // call case 6: other requests
        var call8064 = callmethodChecked(var_id, "dtype:=(1)", [1], call8063);
        setLineNumber(2777);    // compilenode identifier
        // call case 6: other requests
        // call case 6: other requests
        var call8067 = callmethodChecked(var_part, "params", []);
        var call8068 = callmethodChecked(call8067, "push(1)", [1], var_id);
        var if8069 = GraceDone;
        setLineNumber(2778);    // compilenode string
        var string8071 = new GraceString("comma");
        // call case 4: self request
        onSelf = true;
        var call8072 = callmethodChecked(this, "accept(1)", [1], string8071);
        if (Grace_isTrue(call8072)) {
          setLineNumber(2779);    // compilenode identifier
          var_comma = var_sym;
          setLineNumber(2780);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call8074 = callmethodChecked(this, "next", []);
          if8069 = call8074;
        } else {
          var if8075 = GraceDone;
          setLineNumber(2781);    // compilenode string
          var string8076 = new GraceString("rparen");
          // call case 6: other requests
          var call8079 = callmethodChecked(var_sym, "kind", []);
          var opresult8081 = callmethodChecked(call8079, "\u2260(1)", [1], string8076);
          if (Grace_isTrue(opresult8081)) {
            var if8082 = GraceDone;
            setLineNumber(2782);    // compilenode string
            var string8083 = new GraceString("rparen");
            // call case 6: other requests
            var call8086 = callmethodChecked(var_sym, "kind", []);
            var opresult8088 = callmethodChecked(call8086, "\u2260(1)", [1], string8083);
            if (Grace_isTrue(opresult8088)) {
              setLineNumber(2783);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              var call8091 = callmethodChecked(var_errormessages, "suggestion", []);
              var call8092 = callmethodChecked(call8091, "new", []);
              var var_suggestion = call8092;
              setLineNumber(2784);    // compilenode string
              var string8094 = new GraceString(")");
              // call case 6: other requests
              var call8095 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string8094, var_lastToken);
              setLineNumber(2785);    // compilenode string
              var string8097 = new GraceString("a part of a method beginning with a '(' must end with a ')'.");
              setLineNumber(2786);    // compilenode member
              // call case 6: other requests
              var call8099 = callmethodChecked(var_lastToken, "line", []);
              // call case 6: other requests
              var call8101 = callmethodChecked(var_lastToken, "size", []);
              // call case 6: other requests
              var call8104 = callmethodChecked(var_lastToken, "linePos", []);
              var opresult8106 = callmethodChecked(call8104, "+(1)", [1], call8101);
              // call case 6: other requests
              setLineNumber(2785);    // compilenode identifier
              var call8107 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string8097, call8099, opresult8106, var_suggestion);
              if8082 = call8107;
            }
            if8075 = if8082;
          }
          if8069 = if8075;
        }
        return if8069;
      };
      // call case 5: prelude request
      var call8108 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block8013, block8032);
      var if8109 = GraceDone;
      setLineNumber(2790);    // compilenode string
      var string8110 = new GraceString("rparen");
      // call case 6: other requests
      var call8113 = callmethodChecked(var_sym, "kind", []);
      var opresult8115 = callmethodChecked(call8113, "\u2260(1)", [1], string8110);
      if (Grace_isTrue(opresult8115)) {
        setLineNumber(2791);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call8118 = callmethodChecked(var_errormessages, "suggestion", []);
        var call8119 = callmethodChecked(call8118, "new", []);
        var var_suggestion = call8119;
        setLineNumber(2792);    // compilenode block
        var block8121 = new GraceBlock(this, 2792, 1);
        setLineNumber(1);    // compilenode identifier
        block8121.real = function(var_t) {
          setLineNumber(2792);    // compilenode member
          // call case 6: other requests
          var call8123 = callmethodChecked(var_lastToken, "line", []);
          // call case 6: other requests
          var call8126 = callmethodChecked(var_t, "line", []);
          var opresult8128 = callmethodChecked(call8126, "==(1)", [1], call8123);
          var string8130 = new GraceString("rparen");
          // call case 6: other requests
          var call8133 = callmethodChecked(var_t, "kind", []);
          var opresult8135 = callmethodChecked(call8133, "==(1)", [1], string8130);
          var opresult8137 = callmethodChecked(opresult8135, "&&(1)", [1], opresult8128);
          return opresult8137;
        };
        // call case 4: self request
        onSelf = true;
        var call8138 = callmethodChecked(this, "findNextToken(1)", [1], block8121);
        var var_rparen = call8138;
        var if8139 = GraceDone;
        setLineNumber(2793);    // compilenode identifier
        var opresult8142 = callmethodChecked(GraceFalse, "==(1)", [1], var_rparen);
        if (Grace_isTrue(opresult8142)) {
          setLineNumber(2794);    // compilenode string
          var string8144 = new GraceString(")");
          // call case 6: other requests
          var call8145 = callmethodChecked(var_suggestion, "replaceToken(1)with(1)", [1, 1], var_lastToken, string8144);
          if8139 = call8145;
        } else {
          setLineNumber(2796);    // compilenode identifier
          // call case 6: other requests
          var call8147 = callmethodChecked(var_suggestion, "deleteToken(1)", [1], var_sym);
          if8139 = call8147;
        }
        setLineNumber(2798);    // compilenode string
        var string8149 = new GraceString("a part of a method beginning with a '(' must end with a ')'.");
        setLineNumber(2799);    // compilenode member
        // call case 6: other requests
        var call8151 = callmethodChecked(var_lastToken, "line", []);
        // call case 6: other requests
        var call8153 = callmethodChecked(var_lastToken, "linePos", []);
        // call case 6: other requests
        var call8155 = callmethodChecked(var_lastToken, "linePos", []);
        // call case 6: other requests
        setLineNumber(2798);    // compilenode identifier
        var call8156 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)withSuggestion(1)", [1, 3, 1], string8149, call8151, call8153, call8155, var_suggestion);
        if8109 = call8156;
      }
      var if8157 = GraceDone;
      setLineNumber(2801);    // compilenode member
      // call case 6: other requests
      var call8159 = callmethodChecked(var_part, "line", []);
      // call case 6: other requests
      var call8162 = callmethodChecked(var_sym, "line", []);
      var opresult8164 = callmethodChecked(call8162, "==(1)", [1], call8159);
      if (Grace_isTrue(opresult8164)) {
        setLineNumber(2802);    // compilenode member
        // call case 6: other requests
        var call8167 = callmethodChecked(var_part, "linePos", []);
        // call case 6: other requests
        var call8170 = callmethodChecked(var_sym, "linePos", []);
        var diff8172 = callmethodChecked(call8170, "-(1)", [1], call8167);
        // call case 6: other requests
        var call8173 = callmethodChecked(var_part, "lineLength:=(1)", [1], diff8172);
        if8157 = call8173;
      }
      setLineNumber(2804);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call8175 = callmethodChecked(this, "next", []);
      var if8176 = GraceDone;
      setLineNumber(2806);    // compilenode string
      var string8178 = new GraceString("identifier");
      // call case 4: self request
      onSelf = true;
      var call8179 = callmethodChecked(this, "acceptSameLine(1)", [1], string8178);
      setLineNumber(2805);    // compilenode string
      var string8182 = new GraceString("identifier");
      // call case 4: self request
      onSelf = true;
      var call8183 = callmethodChecked(this, "accept(1)", [1], string8182);
      // call case 6: other requests
      var call8186 = callmethodChecked(var_sameline, "prefix!", [0]);
      var opresult8188 = callmethodChecked(call8186, "&&(1)", [1], call8183);
      var opresult8190 = callmethodChecked(opresult8188, "||(1)", [1], call8179);
      if (Grace_isTrue(opresult8190)) {
        setLineNumber(2809);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call8192 = callmethodChecked(this, "methodDecRest(2)", [2], var_result, var_sameline);
        if8176 = call8192;
      }
      if8006 = if8176;
    }
    var if8193 = GraceDone;
    setLineNumber(2812);    // compilenode string
    var string8195 = new GraceString("arrow");
    // call case 4: self request
    onSelf = true;
    var call8196 = callmethodChecked(this, "accept(1)", [1], string8195);
    if (Grace_isTrue(call8196)) {
      setLineNumber(2814);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call8198 = callmethodChecked(this, "next", []);
      setLineNumber(2815);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call8200 = callmethodChecked(this, "typeexpression", []);
      setLineNumber(2816);    // compilenode member
      // call case 6: other requests
      var call8203 = callmethodChecked(var_values, "pop", []);
      // call case 6: other requests
      var call8204 = callmethodChecked(var_result, "dtype:=(1)", [1], call8203);
      if8193 = call8204;
    }
    setLineNumber(2818);    // compilenode identifier
    return var_result;
  };
  func7872.paramCounts = [1];
  this.methods["methodsignature(1)"] = func7872;
  func7872.definitionLine = 2734;
  func7872.definitionModule = "parser";
  setLineNumber(2821);    // compilenode method
  var func8205 = function(argcv) {    // method typeparameters
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    setLineNumber(2822);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call8207 = callmethodChecked(this, "next", []);
    setLineNumber(2823);    // compilenode array
    var array8208 = new PrimitiveGraceList([]);
    var var_typeIds = array8208;
    setLineNumber(2824);    // compilenode block
    var block8210 = new GraceBlock(this, 2824, 0);
    block8210.real = function() {
      var string8212 = new GraceString("identifier");
      // call case 4: self request
      onSelf = true;
      var call8213 = callmethodChecked(this, "accept(1)", [1], string8212);
      return call8213;
    };
    var block8214 = new GraceBlock(this, 2824, 0);
    block8214.real = function() {
      setLineNumber(2825);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call8216 = callmethodChecked(this, "identifier", []);
      setLineNumber(2826);    // compilenode member
      // call case 6: other requests
      var call8218 = callmethodChecked(var_values, "pop", []);
      var var_id = call8218;
      setLineNumber(2827);    // compilenode identifier
      // call case 6: other requests
      var call8220 = callmethodChecked(var_id, "isBindingOccurrence:=(1)", [1], GraceTrue);
      setLineNumber(2828);    // compilenode identifier
      // call case 6: other requests
      var call8222 = callmethodChecked(var_typeIds, "push(1)", [1], var_id);
      var if8223 = GraceDone;
      setLineNumber(2829);    // compilenode string
      var string8225 = new GraceString("comma");
      // call case 4: self request
      onSelf = true;
      var call8226 = callmethodChecked(this, "accept(1)", [1], string8225);
      if (Grace_isTrue(call8226)) {
        setLineNumber(2830);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call8228 = callmethodChecked(this, "next", []);
        if8223 = call8228;
      }
      return if8223;
    };
    // call case 5: prelude request
    var call8229 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block8210, block8214);
    setLineNumber(2833);    // compilenode block
    var block8231 = new GraceBlock(this, 2833, 1);
    setLineNumber(1);    // compilenode identifier
    block8231.real = function(var_each) {
      setLineNumber(2833);    // compilenode identifier
      // call case 6: other requests
      var call8233 = callmethodChecked(var_each, "isBindingOccurrence:=(1)", [1], GraceTrue);
      return call8233;
    };
    // call case 6: other requests
    var call8234 = callmethodChecked(var_typeIds, "do(1)", [1], block8231);
    setLineNumber(2834);    // compilenode identifier
    // call case 6: other requests
    // call case 6: other requests
    var call8237 = callmethodChecked(var_ast, "typeParametersNode", []);
    var call8238 = callmethodChecked(call8237, "new(1)", [1], var_typeIds);
    var var_result = call8238;
    var if8239 = GraceDone;
    setLineNumber(2835);    // compilenode string
    var string8240 = new GraceString("rgeneric");
    // call case 6: other requests
    var call8243 = callmethodChecked(var_sym, "kind", []);
    var opresult8245 = callmethodChecked(call8243, "\u2260(1)", [1], string8240);
    if (Grace_isTrue(opresult8245)) {
      setLineNumber(2836);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call8248 = callmethodChecked(var_errormessages, "suggestion", []);
      var call8249 = callmethodChecked(call8248, "new", []);
      var var_suggestion = call8249;
      setLineNumber(2837);    // compilenode string
      var string8251 = new GraceString(">");
      // call case 6: other requests
      var call8252 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string8251, var_lastToken);
      setLineNumber(2838);    // compilenode string
      var string8254 = new GraceString("a list of type parameters starting with '<' must end with '>'.");
      setLineNumber(2839);    // compilenode member
      // call case 6: other requests
      var call8256 = callmethodChecked(var_lastToken, "line", []);
      // call case 6: other requests
      var call8258 = callmethodChecked(var_lastToken, "size", []);
      // call case 6: other requests
      var call8261 = callmethodChecked(var_lastToken, "linePos", []);
      var opresult8263 = callmethodChecked(call8261, "+(1)", [1], call8258);
      // call case 6: other requests
      setLineNumber(2838);    // compilenode identifier
      var call8264 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string8254, call8256, opresult8263, var_suggestion);
      if8239 = call8264;
    }
    setLineNumber(2841);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call8266 = callmethodChecked(this, "next", []);
    setLineNumber(2842);    // compilenode identifier
    return var_result;
  };
  func8205.paramCounts = [0];
  this.methods["typeparameters"] = func8205;
  func8205.definitionLine = 2821;
  func8205.definitionModule = "parser";
  setLineNumber(2845);    // compilenode method
  var func8267 = function(argcv) {    // method doimport
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    var if8268 = GraceDone;
    setLineNumber(2848);    // compilenode string
    var string8270 = new GraceString("import");
    // call case 4: self request
    onSelf = true;
    var call8271 = callmethodChecked(this, "acceptKeyword(1)", [1], string8270);
    if (Grace_isTrue(call8271)) {
      setLineNumber(2849);    // compilenode member
      // call case 6: other requests
      var call8273 = callmethodChecked(var_sym, "line", []);
      var var_importline = call8273;
      setLineNumber(2850);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call8275 = callmethodChecked(this, "next", []);
      var if8276 = GraceDone;
      setLineNumber(2851);    // compilenode string
      var string8277 = new GraceString("string");
      // call case 6: other requests
      var call8280 = callmethodChecked(var_sym, "kind", []);
      var opresult8282 = callmethodChecked(call8280, "\u2260(1)", [1], string8277);
      if (Grace_isTrue(opresult8282)) {
        setLineNumber(2852);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call8285 = callmethodChecked(var_errormessages, "suggestion", []);
        var call8286 = callmethodChecked(call8285, "new", []);
        var var_suggestion = call8286;
        setLineNumber(2853);    // compilenode vardec
        var var_errorPos;
        var if8287 = GraceDone;
        setLineNumber(2854);    // compilenode member
        // call case 6: other requests
        var call8289 = callmethodChecked(var_lastToken, "line", []);
        // call case 6: other requests
        var call8292 = callmethodChecked(var_sym, "line", []);
        var opresult8294 = callmethodChecked(call8292, "==(1)", [1], call8289);
        var string8296 = new GraceString("identifier");
        // call case 6: other requests
        var call8299 = callmethodChecked(var_sym, "kind", []);
        var opresult8301 = callmethodChecked(call8299, "==(1)", [1], string8296);
        var opresult8303 = callmethodChecked(opresult8301, "&&(1)", [1], opresult8294);
        if (Grace_isTrue(opresult8303)) {
          setLineNumber(2855);    // compilenode string
          var string8305 = new GraceString("\"");
          // call case 6: other requests
          var call8308 = callmethodChecked(var_sym, "value", []);
          var string8310 = new GraceString("\"");
          var opresult8312 = callmethodChecked(string8310, "++(1)", [1], call8308);
          var opresult8314 = callmethodChecked(opresult8312, "++(1)", [1], string8305);
          // call case 6: other requests
          var call8315 = callmethodChecked(var_suggestion, "replaceToken(1)with(1)", [1, 1], var_sym, opresult8314);
          setLineNumber(2856);    // compilenode member
          // call case 6: other requests
          var call8317 = callmethodChecked(var_sym, "linePos", []);
          var_errorPos = call8317;
          if8287 = GraceDone;
        } else {
          setLineNumber(2858);    // compilenode string
          var string8319 = new GraceString(" \"\u00abmodule name\u00bb\"");
          // call case 6: other requests
          var call8320 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string8319, var_lastToken);
          setLineNumber(2859);    // compilenode member
          // call case 6: other requests
          var call8323 = callmethodChecked(var_lastToken, "size", []);
          // call case 6: other requests
          var call8326 = callmethodChecked(var_lastToken, "linePos", []);
          var opresult8328 = callmethodChecked(call8326, "+(1)", [1], call8323);
          var opresult8330 = callmethodChecked(opresult8328, "+(1)", [1], new GraceNum(1));
          var_errorPos = opresult8330;
          if8287 = GraceDone;
        }
        setLineNumber(2861);    // compilenode string
        var string8332 = new GraceString("an import statement must have the name of the module in quotes, 'as', and an identifier after 'import'.");
        setLineNumber(2862);    // compilenode member
        // call case 6: other requests
        var call8334 = callmethodChecked(var_lastToken, "line", []);
        // call case 6: other requests
        setLineNumber(2861);    // compilenode identifier
        var call8335 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string8332, call8334, var_errorPos, var_suggestion);
        if8276 = call8335;
      }
      setLineNumber(2864);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call8337 = callmethodChecked(this, "pushstring", []);
      setLineNumber(2865);    // compilenode member
      // call case 6: other requests
      var call8339 = callmethodChecked(var_values, "pop", []);
      var var_p = call8339;
      var if8340 = GraceDone;
      setLineNumber(2866);    // compilenode string
      var string8341 = new GraceString("as");
      // call case 6: other requests
      var call8344 = callmethodChecked(var_sym, "value", []);
      var opresult8346 = callmethodChecked(call8344, "\u2260(1)", [1], string8341);
      var string8348 = new GraceString("identifier");
      // call case 6: other requests
      var call8351 = callmethodChecked(var_sym, "kind", []);
      var opresult8353 = callmethodChecked(call8351, "\u2260(1)", [1], string8348);
      var opresult8355 = callmethodChecked(opresult8353, "||(1)", [1], opresult8346);
      if (Grace_isTrue(opresult8355)) {
        setLineNumber(2867);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call8358 = callmethodChecked(var_errormessages, "suggestion", []);
        var call8359 = callmethodChecked(call8358, "new", []);
        var var_suggestion = call8359;
        var if8360 = GraceDone;
        setLineNumber(2868);    // compilenode member
        // call case 6: other requests
        var call8362 = callmethodChecked(var_lastToken, "line", []);
        // call case 6: other requests
        var call8365 = callmethodChecked(var_sym, "line", []);
        var opresult8367 = callmethodChecked(call8365, "==(1)", [1], call8362);
        var string8369 = new GraceString("identifier");
        // call case 6: other requests
        var call8372 = callmethodChecked(var_sym, "kind", []);
        var opresult8374 = callmethodChecked(call8372, "==(1)", [1], string8369);
        var opresult8376 = callmethodChecked(opresult8374, "&&(1)", [1], opresult8367);
        if (Grace_isTrue(opresult8376)) {
          setLineNumber(2869);    // compilenode string
          var string8378 = new GraceString(" as");
          // call case 6: other requests
          var call8379 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string8378, var_lastToken);
          if8360 = call8379;
        } else {
          setLineNumber(2871);    // compilenode string
          var string8381 = new GraceString("");
          // call case 6: other requests
          var call8384 = callmethodChecked(var_p, "value", []);
          var string8386 = new GraceString(" as ");
          var opresult8388 = callmethodChecked(string8386, "++(1)", [1], call8384);
          var opresult8390 = callmethodChecked(opresult8388, "++(1)", [1], string8381);
          // call case 6: other requests
          var call8391 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], opresult8390, var_lastToken);
          if8360 = call8391;
        }
        setLineNumber(2873);    // compilenode string
        var string8393 = new GraceString("an import statement must have 'as', and an identifier after the name of the module in quotes.");
        setLineNumber(2874);    // compilenode member
        // call case 6: other requests
        var call8395 = callmethodChecked(var_lastToken, "line", []);
        // call case 6: other requests
        var call8398 = callmethodChecked(var_lastToken, "size", []);
        // call case 6: other requests
        var call8401 = callmethodChecked(var_lastToken, "linePos", []);
        var opresult8403 = callmethodChecked(call8401, "+(1)", [1], call8398);
        var opresult8405 = callmethodChecked(opresult8403, "+(1)", [1], new GraceNum(1));
        // call case 6: other requests
        setLineNumber(2873);    // compilenode identifier
        var call8406 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string8393, call8395, opresult8405, var_suggestion);
        if8340 = call8406;
      }
      setLineNumber(2876);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call8408 = callmethodChecked(this, "next", []);
      var if8409 = GraceDone;
      setLineNumber(2877);    // compilenode string
      var string8410 = new GraceString("identifier");
      // call case 6: other requests
      var call8413 = callmethodChecked(var_sym, "kind", []);
      var opresult8415 = callmethodChecked(call8413, "\u2260(1)", [1], string8410);
      if (Grace_isTrue(opresult8415)) {
        setLineNumber(2878);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call8418 = callmethodChecked(var_errormessages, "suggestion", []);
        var call8419 = callmethodChecked(call8418, "new", []);
        var var_suggestion = call8419;
        setLineNumber(2879);    // compilenode vardec
        var var_errorPos;
        var if8420 = GraceDone;
        setLineNumber(2880);    // compilenode member
        // call case 6: other requests
        var call8422 = callmethodChecked(var_lastToken, "line", []);
        // call case 6: other requests
        var call8425 = callmethodChecked(var_sym, "line", []);
        var opresult8427 = callmethodChecked(call8425, "==(1)", [1], call8422);
        var string8429 = new GraceString("string");
        // call case 6: other requests
        var call8432 = callmethodChecked(var_sym, "kind", []);
        var opresult8434 = callmethodChecked(call8432, "==(1)", [1], string8429);
        var opresult8436 = callmethodChecked(opresult8434, "&&(1)", [1], opresult8427);
        if (Grace_isTrue(opresult8436)) {
          setLineNumber(2881);    // compilenode string
          var string8438 = new GraceString("");
          // call case 6: other requests
          var call8441 = callmethodChecked(var_sym, "value", []);
          var string8443 = new GraceString("");
          var opresult8445 = callmethodChecked(string8443, "++(1)", [1], call8441);
          var opresult8447 = callmethodChecked(opresult8445, "++(1)", [1], string8438);
          // call case 6: other requests
          var call8448 = callmethodChecked(var_suggestion, "replaceToken(1)with(1)", [1, 1], var_sym, opresult8447);
          setLineNumber(2882);    // compilenode member
          // call case 6: other requests
          var call8450 = callmethodChecked(var_sym, "linePos", []);
          var_errorPos = call8450;
          if8420 = GraceDone;
        } else {
          setLineNumber(2884);    // compilenode string
          var string8452 = new GraceString("");
          // call case 6: other requests
          var call8455 = callmethodChecked(var_p, "value", []);
          var string8457 = new GraceString(" ");
          var opresult8459 = callmethodChecked(string8457, "++(1)", [1], call8455);
          var opresult8461 = callmethodChecked(opresult8459, "++(1)", [1], string8452);
          // call case 6: other requests
          var call8462 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], opresult8461, var_lastToken);
          setLineNumber(2885);    // compilenode member
          // call case 6: other requests
          var call8465 = callmethodChecked(var_lastToken, "size", []);
          // call case 6: other requests
          var call8468 = callmethodChecked(var_lastToken, "linePos", []);
          var opresult8470 = callmethodChecked(call8468, "+(1)", [1], call8465);
          var opresult8472 = callmethodChecked(opresult8470, "+(1)", [1], new GraceNum(1));
          var_errorPos = opresult8472;
          if8420 = GraceDone;
        }
        setLineNumber(2887);    // compilenode string
        var string8474 = new GraceString("an import statement must have an identifier after 'as'.");
        setLineNumber(2888);    // compilenode member
        // call case 6: other requests
        var call8476 = callmethodChecked(var_lastToken, "line", []);
        // call case 6: other requests
        setLineNumber(2887);    // compilenode identifier
        var call8477 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string8474, call8476, var_errorPos, var_suggestion);
        if8409 = call8477;
      }
      setLineNumber(2890);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call8479 = callmethodChecked(this, "pushidentifier", []);
      setLineNumber(2891);    // compilenode member
      // call case 6: other requests
      var call8481 = callmethodChecked(var_values, "pop", []);
      var var_name = call8481;
      setLineNumber(2892);    // compilenode identifier
      // call case 6: other requests
      var call8483 = callmethodChecked(var_name, "isBindingOccurrence:=(1)", [1], GraceTrue);
      setLineNumber(2893);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call8485 = callmethodChecked(this, "optionalTypeAnnotation", []);
      var var_dtype = call8485;
      setLineNumber(2894);    // compilenode identifier
      // call case 6: other requests
      var call8487 = callmethodChecked(var_util, "setline(1)", [1], var_importline);
      setLineNumber(2895);    // compilenode member
      // call case 6: other requests
      var call8490 = callmethodChecked(var_p, "value", []);
      // call case 6: other requests
      // call case 6: other requests
      var call8492 = callmethodChecked(var_ast, "importNode", []);
      var call8493 = callmethodChecked(call8492, "new(3)", [3], call8490, var_name, var_dtype);
      var var_o = call8493;
      setLineNumber(2896);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call8495 = callmethodChecked(this, "doannotation", []);
      var var_anns = call8495;
      var if8496 = GraceDone;
      setLineNumber(2897);    // compilenode identifier
      var opresult8499 = callmethodChecked(GraceFalse, "\u2260(1)", [1], var_anns);
      if (Grace_isTrue(opresult8499)) {
        // call case 6: other requests
        // call case 6: other requests
        var call8502 = callmethodChecked(var_o, "annotations", []);
        var call8503 = callmethodChecked(call8502, "addAll(1)", [1], var_anns);
        if8496 = call8503;
      }
      setLineNumber(2898);    // compilenode identifier
      // call case 6: other requests
      var call8505 = callmethodChecked(var_values, "push(1)", [1], var_o);
      setLineNumber(2899);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call8507 = callmethodChecked(this, "reconcileComments", []);
      if8268 = call8507;
    }
    return if8268;
  };
  func8267.paramCounts = [0];
  this.methods["doimport"] = func8267;
  func8267.definitionLine = 2845;
  func8267.definitionModule = "parser";
  setLineNumber(2903);    // compilenode method
  var func8508 = function(argcv) {    // method doreturn
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    var if8509 = GraceDone;
    setLineNumber(2905);    // compilenode string
    var string8511 = new GraceString("return");
    // call case 4: self request
    onSelf = true;
    var call8512 = callmethodChecked(this, "acceptKeyword(1)", [1], string8511);
    if (Grace_isTrue(call8512)) {
      setLineNumber(2906);    // compilenode identifier
      var var_retTok = var_sym;
      setLineNumber(2907);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call8514 = callmethodChecked(this, "next", []);
      setLineNumber(2908);    // compilenode vardec
      var var_retval;
      var if8515 = GraceDone;
      setLineNumber(2909);    // compilenode block
      var block8516 = new GraceBlock(this, 2909, 0);
      block8516.real = function() {
        // call case 6: other requests
        var string8519 = new GraceString("rbrace");
        // call case 4: self request
        onSelf = true;
        var call8520 = callmethodChecked(this, "accept(1)", [1], string8519);
        var call8521 = callmethodChecked(call8520, "not", []);
        return call8521;
      };
      // call case 4: self request
      onSelf = true;
      var call8524 = callmethodChecked(this, "tokenOnSameLine", []);
      var opresult8526 = callmethodChecked(call8524, "&&(1)", [1], block8516);
      if (Grace_isTrue(opresult8526)) {
        var if8527 = GraceDone;
        setLineNumber(2910);    // compilenode member
        // call case 6: other requests
        var block8530 = new GraceBlock(this, 2910, 0);
        block8530.real = function() {
          // call case 4: self request
          onSelf = true;
          var call8532 = callmethodChecked(this, "expression(1)", [1], var_blocksOK);
          return call8532;
        };
        // call case 4: self request
        onSelf = true;
        var call8533 = callmethodChecked(this, "didConsume(1)", [1], block8530);
        var call8534 = callmethodChecked(call8533, "not", []);
        if (Grace_isTrue(call8534)) {
          setLineNumber(2911);    // compilenode array
          var array8535 = new PrimitiveGraceList([]);
          var var_suggestions = array8535;
          setLineNumber(2912);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call8538 = callmethodChecked(var_errormessages, "suggestion", []);
          var call8539 = callmethodChecked(call8538, "new", []);
          var var_suggestion = call8539;
          setLineNumber(2913);    // compilenode string
          var string8542 = new GraceString("rbrace");
          var array8541 = new PrimitiveGraceList([string8542]);
          // call case 4: self request
          onSelf = true;
          var call8543 = callmethodChecked(this, "findNextValidToken(1)", [1], array8541);
          var var_nextTok = call8543;
          var if8544 = GraceDone;
          setLineNumber(2914);    // compilenode identifier
          var opresult8547 = callmethodChecked(var_nextTok, "==(1)", [1], var_sym);
          if (Grace_isTrue(opresult8547)) {
            setLineNumber(2915);    // compilenode string
            var string8549 = new GraceString(" \u00abexpression\u00bb");
            // call case 6: other requests
            var call8550 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string8549, var_lastToken);
            setLineNumber(2916);    // compilenode identifier
            // call case 6: other requests
            var call8552 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
            setLineNumber(2917);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call8555 = callmethodChecked(var_errormessages, "suggestion", []);
            var call8556 = callmethodChecked(call8555, "new", []);
            var_suggestion = call8556;
            setLineNumber(2918);    // compilenode identifier
            // call case 6: other requests
            var call8558 = callmethodChecked(var_suggestion, "deleteToken(1)leading(1)trailing(1)", [1, 1, 1], var_sym, GraceTrue, GraceFalse);
            if8544 = call8558;
          } else {
            setLineNumber(2920);    // compilenode member
            // call case 6: other requests
            var call8561 = callmethodChecked(var_nextTok, "prev", []);
            var string8562 = new GraceString(" \u00abexpression\u00bb");
            // call case 6: other requests
            var call8563 = callmethodChecked(var_suggestion, "replaceTokenRange(2)leading(1)trailing(1)with(1)", [2, 1, 1, 1], var_sym, call8561, GraceTrue, GraceFalse, string8562);
            setLineNumber(2921);    // compilenode identifier
            // call case 6: other requests
            var call8565 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
            setLineNumber(2922);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call8568 = callmethodChecked(var_errormessages, "suggestion", []);
            var call8569 = callmethodChecked(call8568, "new", []);
            var_suggestion = call8569;
            setLineNumber(2923);    // compilenode member
            // call case 6: other requests
            var call8572 = callmethodChecked(var_nextTok, "prev", []);
            // call case 6: other requests
            var call8573 = callmethodChecked(var_suggestion, "deleteTokenRange(2)leading(1)trailing(1)", [2, 1, 1], var_sym, call8572, GraceTrue, GraceFalse);
            if8544 = call8573;
          }
          setLineNumber(2925);    // compilenode identifier
          // call case 6: other requests
          var call8575 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
          setLineNumber(2926);    // compilenode string
          var string8577 = new GraceString("a return statement must have either an expression or a new-line after 'return'.");
          setLineNumber(2927);    // compilenode member
          // call case 6: other requests
          var call8579 = callmethodChecked(var_sym, "line", []);
          // call case 6: other requests
          var call8581 = callmethodChecked(var_sym, "linePos", []);
          // call case 6: other requests
          var call8584 = callmethodChecked(var_sym, "size", []);
          // call case 6: other requests
          var call8587 = callmethodChecked(var_sym, "linePos", []);
          var opresult8589 = callmethodChecked(call8587, "+(1)", [1], call8584);
          var diff8591 = callmethodChecked(opresult8589, "-(1)", [1], new GraceNum(1));
          // call case 6: other requests
          setLineNumber(2926);    // compilenode identifier
          var call8592 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)withSuggestions(1)", [1, 3, 1], string8577, call8579, call8581, diff8591, var_suggestions);
          if8527 = call8592;
        }
        setLineNumber(2929);    // compilenode member
        // call case 6: other requests
        var call8594 = callmethodChecked(var_values, "pop", []);
        var_retval = call8594;
        if8515 = GraceDone;
      } else {
        setLineNumber(2931);    // compilenode string
        var string8596 = new GraceString("done");
        // call case 6: other requests
        // call case 6: other requests
        var call8598 = callmethodChecked(var_ast, "identifierNode", []);
        var call8599 = callmethodChecked(call8598, "new(2)", [2], string8596, GraceFalse);
        var_retval = call8599;
        if8515 = GraceDone;
      }
      setLineNumber(2933);    // compilenode member
      // call case 6: other requests
      var call8602 = callmethodChecked(var_retTok, "line", []);
      // call case 6: other requests
      var call8604 = callmethodChecked(var_retTok, "linePos", []);
      // call case 6: other requests
      var call8605 = callmethodChecked(var_util, "setPosition(2)", [2], call8602, call8604);
      setLineNumber(2934);    // compilenode identifier
      // call case 6: other requests
      // call case 6: other requests
      var call8608 = callmethodChecked(var_ast, "returnNode", []);
      var call8609 = callmethodChecked(call8608, "new(1)", [1], var_retval);
      var var_o = call8609;
      setLineNumber(2935);    // compilenode identifier
      // call case 6: other requests
      var call8611 = callmethodChecked(var_values, "push(1)", [1], var_o);
      if8509 = call8611;
    }
    return if8509;
  };
  func8508.paramCounts = [0];
  this.methods["doreturn"] = func8508;
  func8508.definitionLine = 2903;
  func8508.definitionModule = "parser";
  setLineNumber(2939);    // compilenode method
  var func8612 = function(argcv) {    // method domethodtype
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    setLineNumber(2941);    // compilenode identifier
    var var_methodTypeTok = var_sym;
    setLineNumber(2942);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call8614 = callmethodChecked(this, "methodsignature(1)", [1], GraceTrue);
    var var_methNode = call8614;
    setLineNumber(2943);    // compilenode member
    // call case 6: other requests
    var call8616 = callmethodChecked(var_methNode, "dtype", []);
    var var_dtype = call8616;
    var if8617 = GraceDone;
    setLineNumber(2944);    // compilenode member
    // call case 6: other requests
    var call8619 = callmethodChecked(var_methNode, "dtype", []);
    var opresult8622 = callmethodChecked(GraceFalse, "==(1)", [1], call8619);
    if (Grace_isTrue(opresult8622)) {
      setLineNumber(2945);    // compilenode string
      var string8624 = new GraceString("Done");
      // call case 6: other requests
      // call case 6: other requests
      var call8626 = callmethodChecked(var_ast, "identifierNode", []);
      var call8627 = callmethodChecked(call8626, "new(2)", [2], string8624, GraceFalse);
      var_dtype = call8627;
      if8617 = GraceDone;
    }
    setLineNumber(2948);    // compilenode identifier
    // call case 6: other requests
    setLineNumber(2947);    // compilenode member
    // call case 6: other requests
    var call8631 = callmethodChecked(var_methNode, "signature", []);
    // call case 6: other requests
    // call case 6: other requests
    var call8633 = callmethodChecked(var_ast, "methodTypeNode", []);
    var call8634 = callmethodChecked(call8633, "new(2)", [2], call8631, var_dtype);
    var call8635 = callmethodChecked(call8634, "setPositionFrom(1)", [1], var_methodTypeTok);
    var var_o = call8635;
    setLineNumber(2949);    // compilenode member
    // call case 6: other requests
    var call8638 = callmethodChecked(var_methNode, "typeParams", []);
    // call case 6: other requests
    var call8639 = callmethodChecked(var_o, "typeParams:=(1)", [1], call8638);
    setLineNumber(2950);    // compilenode identifier
    // call case 6: other requests
    var call8641 = callmethodChecked(var_values, "push(1)", [1], var_o);
    setLineNumber(2951);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call8643 = callmethodChecked(this, "reconcileComments", []);
    var if8644 = GraceDone;
    setLineNumber(2952);    // compilenode string
    var string8646 = new GraceString("semicolon");
    // call case 4: self request
    onSelf = true;
    var call8647 = callmethodChecked(this, "accept(1)", [1], string8646);
    if (Grace_isTrue(call8647)) {
      setLineNumber(2953);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call8649 = callmethodChecked(this, "next", []);
      if8644 = call8649;
    } else {
      var if8650 = GraceDone;
      setLineNumber(2955);    // compilenode call
      // call case 6: other requests
      var string8653 = new GraceString("rbrace");
      // call case 4: self request
      onSelf = true;
      var call8654 = callmethodChecked(this, "accept(1)", [1], string8653);
      var call8655 = callmethodChecked(call8654, "prefix!", [0]);
      if (Grace_isTrue(call8655)) {
        var if8656 = GraceDone;
        setLineNumber(2956);    // compilenode member
        // call case 6: other requests
        var call8658 = callmethodChecked(var_sym, "line", []);
        // call case 6: other requests
        var call8661 = callmethodChecked(var_lastToken, "line", []);
        var opresult8663 = callmethodChecked(call8661, "==(1)", [1], call8658);
        if (Grace_isTrue(opresult8663)) {
          setLineNumber(2957);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call8666 = callmethodChecked(var_errormessages, "suggestion", []);
          var call8667 = callmethodChecked(call8666, "new", []);
          var var_suggestion = call8667;
          setLineNumber(2958);    // compilenode member
          // call case 6: other requests
          var call8669 = callmethodChecked(var_sym, "value", []);
          // call case 6: other requests
          var call8674 = callmethodChecked(var_lastToken, "linePos", []);
          var diff8676 = callmethodChecked(call8674, "-(1)", [1], new GraceNum(1));
          // call case 6: other requests
          // call case 6: other requests
          var call8679 = callmethodChecked(var_sym, "line", []);
          // call case 6: other requests
          // call case 6: other requests
          var call8681 = callmethodChecked(var_util, "lines", []);
          var call8682 = callmethodChecked(call8681, "at(1)", [1], call8679);
          var call8683 = callmethodChecked(call8682, "substringFrom(1)to(1)", [1, 1], new GraceNum(1), diff8676);
          var opresult8685 = callmethodChecked(call8683, "++(1)", [1], call8669);
          var var_newLine = opresult8685;
          setLineNumber(2959);    // compilenode member
          // call case 6: other requests
          var call8689 = callmethodChecked(var_sym, "line", []);
          var opresult8691 = callmethodChecked(call8689, "+(1)", [1], new GraceNum(0.1));
          // call case 6: other requests
          var call8692 = callmethodChecked(var_suggestion, "addLine(2)", [2], opresult8691, var_newLine);
          setLineNumber(2960);    // compilenode identifier
          // call case 6: other requests
          var call8694 = callmethodChecked(var_suggestion, "deleteToken(1)leading(1)trailing(1)", [1, 1, 1], var_sym, GraceTrue, GraceTrue);
          setLineNumber(2961);    // compilenode string
          var string8696 = new GraceString("methods in a type literal must be on separate lines, or separated by semicolons.");
          setLineNumber(2962);    // compilenode member
          // call case 6: other requests
          var call8698 = callmethodChecked(var_sym, "line", []);
          // call case 6: other requests
          var call8700 = callmethodChecked(var_sym, "linePos", []);
          // call case 6: other requests
          setLineNumber(2961);    // compilenode identifier
          var call8701 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string8696, call8698, call8700, var_suggestion);
          if8656 = call8701;
        }
        if8650 = if8656;
      }
      if8644 = if8650;
    }
    return if8644;
  };
  func8612.paramCounts = [0];
  this.methods["domethodtype"] = func8612;
  func8612.definitionLine = 2939;
  func8612.definitionModule = "parser";
  setLineNumber(2968);    // compilenode method
  var func8702 = function(argcv) {    // method dotypeLiteral
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    setLineNumber(2970);    // compilenode identifier
    var var_typeLiteralTok = var_sym;
    var if8703 = GraceDone;
    setLineNumber(2971);    // compilenode string
    var string8705 = new GraceString("type");
    // call case 4: self request
    onSelf = true;
    var call8706 = callmethodChecked(this, "acceptKeyword(1)", [1], string8705);
    if (Grace_isTrue(call8706)) {
      setLineNumber(2972);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call8708 = callmethodChecked(this, "next", []);
      var if8709 = GraceDone;
      setLineNumber(2973);    // compilenode call
      // call case 6: other requests
      var string8712 = new GraceString("lbrace");
      // call case 4: self request
      onSelf = true;
      var call8713 = callmethodChecked(this, "accept(1)", [1], string8712);
      var call8714 = callmethodChecked(call8713, "prefix!", [0]);
      if (Grace_isTrue(call8714)) {
        setLineNumber(2974);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call8717 = callmethodChecked(var_errormessages, "suggestion", []);
        var call8718 = callmethodChecked(call8717, "new", []);
        var var_suggestion = call8718;
        setLineNumber(2975);    // compilenode string
        var string8720 = new GraceString("{");
        // call case 6: other requests
        var call8721 = callmethodChecked(var_suggestion, "replaceToken(1)with(1)", [1, 1], var_sym, string8720);
        setLineNumber(2976);    // compilenode string
        var string8723 = new GraceString("type literals must open with a brace.");
        setLineNumber(2977);    // compilenode member
        // call case 6: other requests
        var call8725 = callmethodChecked(var_sym, "line", []);
        // call case 6: other requests
        var call8727 = callmethodChecked(var_sym, "linePos", []);
        // call case 6: other requests
        setLineNumber(2976);    // compilenode identifier
        var call8728 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string8723, call8725, call8727, var_suggestion);
        setLineNumber(2979);    // compilenode identifier
        return var_done;
      }
      if8703 = if8709;
    }
    var if8729 = GraceDone;
    setLineNumber(2981);    // compilenode string
    var string8731 = new GraceString("lbrace");
    // call case 4: self request
    onSelf = true;
    var call8732 = callmethodChecked(this, "accept(1)", [1], string8731);
    if (Grace_isTrue(call8732)) {
      setLineNumber(2982);    // compilenode array
      var array8733 = new PrimitiveGraceList([]);
      var var_meths = array8733;
      setLineNumber(2983);    // compilenode array
      var array8734 = new PrimitiveGraceList([]);
      var var_types = array8734;
      setLineNumber(2984);    // compilenode identifier
      var var_mc = var_auto__95__count;
      setLineNumber(2985);    // compilenode identifier
      var opresult8737 = callmethodChecked(var_auto__95__count, "+(1)", [1], new GraceNum(1));
      var_auto__95__count = opresult8737;
      setLineNumber(2986);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call8739 = callmethodChecked(this, "next", []);
      setLineNumber(2987);    // compilenode block
      var block8741 = new GraceBlock(this, 2987, 0);
      block8741.real = function() {
        // call case 6: other requests
        var string8744 = new GraceString("rbrace");
        // call case 4: self request
        onSelf = true;
        var call8745 = callmethodChecked(this, "accept(1)", [1], string8744);
        var call8746 = callmethodChecked(call8745, "not", []);
        return call8746;
      };
      var block8747 = new GraceBlock(this, 2987, 0);
      block8747.real = function() {
        var if8748 = GraceDone;
        setLineNumber(2988);    // compilenode string
        var string8750 = new GraceString("type");
        // call case 4: self request
        onSelf = true;
        var call8751 = callmethodChecked(this, "acceptKeyword(1)", [1], string8750);
        if (Grace_isTrue(call8751)) {
          setLineNumber(2989);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call8753 = callmethodChecked(this, "typedec", []);
          setLineNumber(2990);    // compilenode member
          // call case 6: other requests
          var call8756 = callmethodChecked(var_values, "pop", []);
          // call case 6: other requests
          var call8757 = callmethodChecked(var_types, "push(1)", [1], call8756);
          if8748 = call8757;
        } else {
          setLineNumber(2992);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call8759 = callmethodChecked(this, "domethodtype", []);
          setLineNumber(2993);    // compilenode member
          // call case 6: other requests
          var call8762 = callmethodChecked(var_values, "pop", []);
          // call case 6: other requests
          var call8763 = callmethodChecked(var_meths, "push(1)", [1], call8762);
          if8748 = call8763;
        }
        return if8748;
      };
      // call case 5: prelude request
      var call8764 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block8741, block8747);
      setLineNumber(2996);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call8766 = callmethodChecked(this, "next", []);
      setLineNumber(2997);    // compilenode member
      // call case 6: other requests
      var call8769 = callmethodChecked(var_typeLiteralTok, "line", []);
      // call case 6: other requests
      var call8771 = callmethodChecked(var_typeLiteralTok, "linePos", []);
      // call case 6: other requests
      var call8772 = callmethodChecked(var_util, "setPosition(2)", [2], call8769, call8771);
      setLineNumber(2998);    // compilenode identifier
      // call case 6: other requests
      // call case 6: other requests
      var call8775 = callmethodChecked(var_ast, "typeLiteralNode", []);
      var call8776 = callmethodChecked(call8775, "new(2)", [2], var_meths, var_types);
      var var_t = call8776;
      setLineNumber(2999);    // compilenode identifier
      // call case 6: other requests
      var call8778 = callmethodChecked(var_values, "push(1)", [1], var_t);
      if8729 = call8778;
    }
    return if8729;
  };
  func8702.paramCounts = [0];
  this.methods["dotypeLiteral"] = func8702;
  func8702.definitionLine = 2968;
  func8702.definitionModule = "parser";
  setLineNumber(3003);    // compilenode method
  var func8779 = function(argcv) {    // method typedec
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    var if8780 = GraceDone;
    setLineNumber(3005);    // compilenode string
    var string8782 = new GraceString("type");
    // call case 4: self request
    onSelf = true;
    var call8783 = callmethodChecked(this, "acceptKeyword(1)", [1], string8782);
    if (Grace_isTrue(call8783)) {
      setLineNumber(3006);    // compilenode member
      // call case 6: other requests
      var call8785 = callmethodChecked(var_sym, "line", []);
      var var_line = call8785;
      setLineNumber(3007);    // compilenode member
      // call case 6: other requests
      var call8787 = callmethodChecked(var_sym, "linePos", []);
      var var_pos = call8787;
      setLineNumber(3008);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call8789 = callmethodChecked(this, "next", []);
      var if8790 = GraceDone;
      setLineNumber(3009);    // compilenode string
      var string8791 = new GraceString("identifier");
      // call case 6: other requests
      var call8794 = callmethodChecked(var_sym, "kind", []);
      var opresult8796 = callmethodChecked(call8794, "\u2260(1)", [1], string8791);
      if (Grace_isTrue(opresult8796)) {
        setLineNumber(3010);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call8799 = callmethodChecked(var_errormessages, "suggestion", []);
        var call8800 = callmethodChecked(call8799, "new", []);
        var var_suggestion = call8800;
        setLineNumber(3011);    // compilenode string
        var string8802 = new GraceString(" \u00abtype name\u00bb");
        // call case 6: other requests
        var call8803 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string8802, var_lastToken);
        setLineNumber(3012);    // compilenode string
        var string8805 = new GraceString("a type declaration must have a name after the 'type'.");
        setLineNumber(3013);    // compilenode member
        // call case 6: other requests
        var call8807 = callmethodChecked(var_lastToken, "line", []);
        // call case 6: other requests
        var call8810 = callmethodChecked(var_lastToken, "size", []);
        // call case 6: other requests
        var call8813 = callmethodChecked(var_lastToken, "linePos", []);
        var opresult8815 = callmethodChecked(call8813, "+(1)", [1], call8810);
        var opresult8817 = callmethodChecked(opresult8815, "+(1)", [1], new GraceNum(1));
        // call case 6: other requests
        setLineNumber(3012);    // compilenode identifier
        var call8818 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string8805, call8807, opresult8817, var_suggestion);
        if8790 = call8818;
      }
      setLineNumber(3015);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call8820 = callmethodChecked(this, "pushidentifier", []);
      setLineNumber(3016);    // compilenode identifier
      // call case 6: other requests
      var call8822 = callmethodChecked(var_util, "setPosition(2)", [2], var_line, var_pos);
      setLineNumber(3017);    // compilenode member
      // call case 6: other requests
      var call8825 = callmethodChecked(var_values, "pop", []);
      // call case 6: other requests
      // call case 6: other requests
      var call8827 = callmethodChecked(var_ast, "typeDecNode", []);
      var call8828 = callmethodChecked(call8827, "new(2)", [2], call8825, GraceFalse);
      var var_nt = call8828;
      var if8829 = GraceDone;
      setLineNumber(3018);    // compilenode string
      var string8831 = new GraceString("lgeneric");
      // call case 4: self request
      onSelf = true;
      var call8832 = callmethodChecked(this, "accept(1)", [1], string8831);
      if (Grace_isTrue(call8832)) {
        // call case 4: self request
        onSelf = true;
        var call8835 = callmethodChecked(this, "typeparameters", []);
        // call case 6: other requests
        var call8836 = callmethodChecked(var_nt, "typeParams:=(1)", [1], call8835);
        if8829 = call8836;
      }
      setLineNumber(3019);    // compilenode identifier
      // call case 6: other requests
      // call case 6: other requests
      var call8839 = callmethodChecked(var_nt, "name", []);
      var call8840 = callmethodChecked(call8839, "isBindingOccurrence:=(1)", [1], GraceTrue);
      setLineNumber(3020);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call8842 = callmethodChecked(this, "doannotation", []);
      var var_anns = call8842;
      var if8843 = GraceDone;
      setLineNumber(3021);    // compilenode string
      var string8844 = new GraceString("=");
      // call case 6: other requests
      var call8847 = callmethodChecked(var_sym, "value", []);
      var opresult8849 = callmethodChecked(call8847, "\u2260(1)", [1], string8844);
      var string8851 = new GraceString("op");
      // call case 6: other requests
      var call8854 = callmethodChecked(var_sym, "kind", []);
      var opresult8856 = callmethodChecked(call8854, "\u2260(1)", [1], string8851);
      var opresult8858 = callmethodChecked(opresult8856, "||(1)", [1], opresult8849);
      if (Grace_isTrue(opresult8858)) {
        setLineNumber(3022);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call8861 = callmethodChecked(var_errormessages, "suggestion", []);
        var call8862 = callmethodChecked(call8861, "new", []);
        var var_suggestion = call8862;
        setLineNumber(3023);    // compilenode block
        var block8864 = new GraceBlock(this, 3023, 1);
        setLineNumber(1);    // compilenode identifier
        block8864.real = function(var_t) {
          setLineNumber(3023);    // compilenode string
          var string8865 = new GraceString("lbrace");
          // call case 6: other requests
          var call8868 = callmethodChecked(var_t, "kind", []);
          var opresult8870 = callmethodChecked(call8868, "==(1)", [1], string8865);
          return opresult8870;
        };
        // call case 4: self request
        onSelf = true;
        var call8871 = callmethodChecked(this, "findNextToken(1)", [1], block8864);
        var var_nextTok = call8871;
        var if8872 = GraceDone;
        setLineNumber(3024);    // compilenode block
        var block8873 = new GraceBlock(this, 3024, 0);
        block8873.real = function() {
          var opresult8876 = callmethodChecked(var_nextTok, "==(1)", [1], var_sym);
          return opresult8876;
        };
        var opresult8880 = callmethodChecked(GraceFalse, "==(1)", [1], var_nextTok);
        var opresult8882 = callmethodChecked(opresult8880, "||(1)", [1], block8873);
        if (Grace_isTrue(opresult8882)) {
          setLineNumber(3025);    // compilenode string
          var string8884 = new GraceString(" =");
          // call case 6: other requests
          var call8885 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string8884, var_lastToken);
          if8872 = call8885;
        } else {
          setLineNumber(3027);    // compilenode member
          // call case 6: other requests
          var call8888 = callmethodChecked(var_nextTok, "prev", []);
          var string8889 = new GraceString("=");
          // call case 6: other requests
          var call8890 = callmethodChecked(var_suggestion, "replaceTokenRange(2)with(1)", [2, 1], var_sym, call8888, string8889);
          if8872 = call8890;
        }
        setLineNumber(3029);    // compilenode string
        var string8892 = new GraceString("a type declaration must have an '=' after the type name.");
        setLineNumber(3030);    // compilenode member
        // call case 6: other requests
        var call8894 = callmethodChecked(var_lastToken, "line", []);
        // call case 6: other requests
        var call8897 = callmethodChecked(var_lastToken, "size", []);
        // call case 6: other requests
        var call8900 = callmethodChecked(var_lastToken, "linePos", []);
        var opresult8902 = callmethodChecked(call8900, "+(1)", [1], call8897);
        var opresult8904 = callmethodChecked(opresult8902, "+(1)", [1], new GraceNum(1));
        setLineNumber(3031);    // compilenode identifier
        // call case 6: other requests
        setLineNumber(3029);    // compilenode identifier
        var call8905 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestion(1)", [1, 2, 1], string8892, call8894, opresult8904, var_suggestion);
        if8843 = call8905;
      }
      setLineNumber(3033);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call8907 = callmethodChecked(this, "next", []);
      var if8908 = GraceDone;
      setLineNumber(3035);    // compilenode string
      var string8910 = new GraceString("lbrace");
      // call case 4: self request
      onSelf = true;
      var call8911 = callmethodChecked(this, "accept(1)", [1], string8910);
      if (Grace_isTrue(call8911)) {
        setLineNumber(3036);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call8913 = callmethodChecked(this, "dotypeLiteral", []);
        if8908 = call8913;
      } else {
        setLineNumber(3038);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call8915 = callmethodChecked(this, "expression(1)", [1], var_noBlocks);
        if8908 = call8915;
      }
      setLineNumber(3040);    // compilenode member
      // call case 6: other requests
      var call8918 = callmethodChecked(var_values, "pop", []);
      // call case 6: other requests
      var call8919 = callmethodChecked(var_nt, "value:=(1)", [1], call8918);
      var if8920 = GraceDone;
      setLineNumber(3041);    // compilenode identifier
      var opresult8923 = callmethodChecked(GraceFalse, "\u2260(1)", [1], var_anns);
      if (Grace_isTrue(opresult8923)) {
        setLineNumber(3042);    // compilenode identifier
        // call case 6: other requests
        // call case 6: other requests
        var call8926 = callmethodChecked(var_nt, "annotations", []);
        var call8927 = callmethodChecked(call8926, "addAll(1)", [1], var_anns);
        if8920 = call8927;
      }
      setLineNumber(3044);    // compilenode identifier
      // call case 6: other requests
      var call8929 = callmethodChecked(var_values, "push(1)", [1], var_nt);
      setLineNumber(3045);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call8931 = callmethodChecked(this, "reconcileComments", []);
      if8780 = call8931;
    }
    return if8780;
  };
  func8779.paramCounts = [0];
  this.methods["typedec"] = func8779;
  func8779.definitionLine = 3003;
  func8779.definitionModule = "parser";
  setLineNumber(3049);    // compilenode method
  var func8932 = function(argcv) {    // method checkIndent
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    var if8933 = GraceDone;
    setLineNumber(3050);    // compilenode identifier
    if (Grace_isTrue(var_indentFreePass)) {
      setLineNumber(3051);    // compilenode identifier
      var_indentFreePass = GraceFalse;
      if8933 = GraceDone;
    } else {
      var if8934 = GraceDone;
      setLineNumber(3052);    // compilenode string
      var string8935 = new GraceString("semicolon");
      // call case 6: other requests
      var call8938 = callmethodChecked(var_sym, "kind", []);
      var opresult8940 = callmethodChecked(call8938, "==(1)", [1], string8935);
      if (Grace_isTrue(opresult8940)) {
      } else {
        var if8941 = GraceDone;
        setLineNumber(3055);    // compilenode string
        var string8942 = new GraceString("rsquare");
        // call case 6: other requests
        var call8945 = callmethodChecked(var_sym, "kind", []);
        var opresult8947 = callmethodChecked(call8945, "==(1)", [1], string8942);
        setLineNumber(3054);    // compilenode string
        var string8949 = new GraceString("rparen");
        // call case 6: other requests
        var call8952 = callmethodChecked(var_sym, "kind", []);
        var opresult8954 = callmethodChecked(call8952, "==(1)", [1], string8949);
        var string8956 = new GraceString("rbrace");
        // call case 6: other requests
        var call8959 = callmethodChecked(var_sym, "kind", []);
        var opresult8961 = callmethodChecked(call8959, "==(1)", [1], string8956);
        var opresult8963 = callmethodChecked(opresult8961, "||(1)", [1], opresult8954);
        var opresult8965 = callmethodChecked(opresult8963, "||(1)", [1], opresult8947);
        if (Grace_isTrue(opresult8965)) {
        } else {
          var if8966 = GraceDone;
          setLineNumber(3057);    // compilenode string
          var string8967 = new GraceString("eof");
          // call case 6: other requests
          var call8970 = callmethodChecked(var_sym, "kind", []);
          var opresult8972 = callmethodChecked(call8970, "==(1)", [1], string8967);
          if (Grace_isTrue(opresult8972)) {
          } else {
            var if8973 = GraceDone;
            setLineNumber(3058);    // compilenode member
            // call case 6: other requests
            var call8976 = callmethodChecked(var_sym, "indent", []);
            var opresult8978 = callmethodChecked(call8976, "<(1)", [1], var_minIndentLevel);
            if (Grace_isTrue(opresult8978)) {
              var if8979 = GraceDone;
              setLineNumber(3059);    // compilenode member
              // call case 6: other requests
              var call8983 = callmethodChecked(var_sym, "linePos", []);
              var diff8985 = callmethodChecked(call8983, "-(1)", [1], new GraceNum(1));
              var opresult8987 = callmethodChecked(diff8985, "\u2260(1)", [1], var_minIndentLevel);
              if (Grace_isTrue(opresult8987)) {
                setLineNumber(3060);    // compilenode array
                var array8988 = new PrimitiveGraceList([]);
                var var_suggestions = array8988;
                setLineNumber(3061);    // compilenode member
                // call case 6: other requests
                // call case 6: other requests
                var call8991 = callmethodChecked(var_errormessages, "suggestion", []);
                var call8992 = callmethodChecked(call8991, "new", []);
                var var_suggestion = call8992;
                setLineNumber(3062);    // compilenode member
                // call case 6: other requests
                var call8996 = callmethodChecked(var_sym, "linePos", []);
                var diff8998 = callmethodChecked(call8996, "-(1)", [1], new GraceNum(1));
                var diff9001 = callmethodChecked(var_minIndentLevel, "-(1)", [1], diff8998);
                var opresult9004 = callmethodChecked(new GraceNum(1), "..(1)", [1], diff9001);
                var block9005 = new GraceBlock(this, 3062, 1);
                setLineNumber(1);    // compilenode identifier
                block9005.real = function(var___95____95__0) {
                  setLineNumber(3063);    // compilenode string
                  var string9007 = new GraceString(" ");
                  // call case 6: other requests
                  var call9009 = callmethodChecked(var_sym, "line", []);
                  // call case 6: other requests
                  var call9010 = callmethodChecked(var_suggestion, "insert(1)atPosition(1)onLine(1)", [1, 1, 1], string9007, new GraceNum(1), call9009);
                  return call9010;
                };
                // call case 5: prelude request
                var call9011 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], opresult9004, block9005);
                setLineNumber(3065);    // compilenode identifier
                // call case 6: other requests
                var call9013 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
                setLineNumber(3066);    // compilenode member
                // call case 6: other requests
                // call case 6: other requests
                var call9016 = callmethodChecked(var_errormessages, "suggestion", []);
                var call9017 = callmethodChecked(call9016, "new", []);
                var_suggestion = call9017;
                setLineNumber(3068);    // compilenode identifier
                var var_tok = var_lastToken;
                setLineNumber(3069);    // compilenode block
                var block9019 = new GraceBlock(this, 3069, 0);
                block9019.real = function() {
                  // call case 6: other requests
                  var call9022 = callmethodChecked(var_tok, "indent", []);
                  var opresult9024 = callmethodChecked(call9022, "\u2265(1)", [1], var_minIndentLevel);
                  // call case 6: other requests
                  var call9028 = callmethodChecked(var_tok, "indent", []);
                  var opresult9030 = callmethodChecked(call9028, "+(1)", [1], new GraceNum(1));
                  // call case 6: other requests
                  var call9033 = callmethodChecked(var_tok, "linePos", []);
                  var opresult9035 = callmethodChecked(call9033, "\u2260(1)", [1], opresult9030);
                  var opresult9037 = callmethodChecked(opresult9035, "||(1)", [1], opresult9024);
                  return opresult9037;
                };
                var block9038 = new GraceBlock(this, 3069, 0);
                block9038.real = function() {
                  setLineNumber(3070);    // compilenode member
                  // call case 6: other requests
                  var call9040 = callmethodChecked(var_tok, "prev", []);
                  var_tok = call9040;
                  return GraceDone;
                };
                // call case 5: prelude request
                var call9041 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block9019, block9038);
                setLineNumber(3072);    // compilenode string
                var string9042 = new GraceString("");
                var var_line = string9042;
                setLineNumber(3073);    // compilenode member
                // call case 6: other requests
                var call9045 = callmethodChecked(var_tok, "indent", []);
                var opresult9048 = callmethodChecked(new GraceNum(1), "..(1)", [1], call9045);
                var block9049 = new GraceBlock(this, 3073, 1);
                setLineNumber(1);    // compilenode identifier
                block9049.real = function(var___95____95__1) {
                  setLineNumber(3074);    // compilenode string
                  var string9050 = new GraceString(" ");
                  var opresult9053 = callmethodChecked(var_line, "++(1)", [1], string9050);
                  var_line = opresult9053;
                  return GraceDone;
                };
                // call case 5: prelude request
                var call9054 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], opresult9048, block9049);
                setLineNumber(3076);    // compilenode string
                var string9055 = new GraceString("}");
                var opresult9058 = callmethodChecked(var_line, "++(1)", [1], string9055);
                var_line = opresult9058;
                setLineNumber(3077);    // compilenode member
                // call case 6: other requests
                var call9062 = callmethodChecked(var_sym, "line", []);
                var diff9064 = callmethodChecked(call9062, "-(1)", [1], new GraceNum(0.9));
                // call case 6: other requests
                var call9065 = callmethodChecked(var_suggestion, "addLine(2)", [2], diff9064, var_line);
                setLineNumber(3078);    // compilenode identifier
                // call case 6: other requests
                var call9067 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
                setLineNumber(3080);    // compilenode string
                var string9069 = new GraceString(". This is often caused by a missing '}'.");
                var string9072 = new GraceString("at least ");
                var opresult9074 = callmethodChecked(string9072, "++(1)", [1], var_minIndentLevel);
                var opresult9076 = callmethodChecked(opresult9074, "++(1)", [1], string9069);
                setLineNumber(3079);    // compilenode string
                var string9078 = new GraceString("the indentation for this line must be ");
                var opresult9080 = callmethodChecked(string9078, "++(1)", [1], opresult9076);
                setLineNumber(3081);    // compilenode member
                // call case 6: other requests
                var call9082 = callmethodChecked(var_sym, "line", []);
                // call case 6: other requests
                var call9084 = callmethodChecked(var_sym, "linePos", []);
                // call case 6: other requests
                setLineNumber(3079);    // compilenode identifier
                var call9085 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestions(1)", [1, 2, 1], opresult9080, call9082, call9084, var_suggestions);
                if8979 = call9085;
              }
              if8973 = if8979;
            } else {
              var if9086 = GraceDone;
              setLineNumber(3083);    // compilenode identifier
              var opresult9089 = callmethodChecked(var_minIndentLevel, "+(1)", [1], new GraceNum(1));
              // call case 6: other requests
              var call9092 = callmethodChecked(var_sym, "indent", []);
              var opresult9094 = callmethodChecked(call9092, ">(1)", [1], opresult9089);
              if (Grace_isTrue(opresult9094)) {
                setLineNumber(3084);    // compilenode member
                // call case 6: other requests
                var call9096 = callmethodChecked(var_sym, "indent", []);
                var_minIndentLevel = call9096;
                if9086 = GraceDone;
              } else {
                var if9097 = GraceDone;
                setLineNumber(3085);    // compilenode member
                // call case 6: other requests
                // call case 6: other requests
                var call9102 = callmethodChecked(var_sym, "indent", []);
                var diff9104 = callmethodChecked(call9102, "-(1)", [1], var_lastIndent);
                var call9105 = callmethodChecked(diff9104, "abs", []);
                var opresult9107 = callmethodChecked(call9105, "==(1)", [1], new GraceNum(1));
                if (Grace_isTrue(opresult9107)) {
                  setLineNumber(3086);    // compilenode string
                  var string9108 = new GraceString("the indentation for this line can't differ ");
                  var var_m1 = string9108;
                  setLineNumber(3087);    // compilenode string
                  var string9109 = new GraceString("from that of the previous line by 1.\n  To start a block, or ");
                  var var_m2 = string9109;
                  setLineNumber(3088);    // compilenode string
                  var string9110 = new GraceString("to signal a continuation line, increase the indent by 2 or more. ");
                  var var_m3 = string9110;
                  setLineNumber(3089);    // compilenode string
                  var string9111 = new GraceString("To end a block, or end the continuation, decrease the indent ");
                  var var_m4 = string9111;
                  setLineNumber(3090);    // compilenode string
                  var string9112 = new GraceString("to the prior level. Otherwise, use the same indent as the previous line.");
                  var var_m5 = string9112;
                  setLineNumber(3091);    // compilenode identifier
                  var opresult9118 = callmethodChecked(var_m1, "++(1)", [1], var_m2);
                  var opresult9120 = callmethodChecked(opresult9118, "++(1)", [1], var_m3);
                  var opresult9122 = callmethodChecked(opresult9120, "++(1)", [1], var_m4);
                  var opresult9124 = callmethodChecked(opresult9122, "++(1)", [1], var_m5);
                  var var_msg = opresult9124;
                  setLineNumber(3092);    // compilenode member
                  // call case 6: other requests
                  var call9127 = callmethodChecked(var_sym, "line", []);
                  // call case 6: other requests
                  var call9129 = callmethodChecked(var_sym, "linePos", []);
                  // call case 6: other requests
                  var call9130 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)", [1, 2], var_msg, call9127, call9129);
                  if9097 = call9130;
                }
                if9086 = if9097;
              }
              if8973 = if9086;
            }
            if8966 = if8973;
          }
          if8941 = if8966;
        }
        if8934 = if8941;
      }
      if8933 = if8934;
    }
    return if8933;
  };
  func8932.paramCounts = [0];
  this.methods["checkIndent"] = func8932;
  func8932.definitionLine = 3049;
  func8932.definitionModule = "parser";
  setLineNumber(3096);    // compilenode method
  var func9131 = function(argcv) {    // method statement
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    setLineNumber(3103);    // compilenode member
    // call case 6: other requests
    var call9133 = callmethodChecked(var_sym, "indent", []);
    var_statementIndent = call9133;
    setLineNumber(3104);    // compilenode identifier
    var_statementToken = var_sym;
    setLineNumber(3105);    // compilenode identifier
    var var_btok = var_sym;
    setLineNumber(3106);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call9135 = callmethodChecked(this, "checkIndent", []);
    var if9136 = GraceDone;
    setLineNumber(3107);    // compilenode string
    var string9138 = new GraceString("keyword");
    // call case 4: self request
    onSelf = true;
    var call9139 = callmethodChecked(this, "accept(1)", [1], string9138);
    if (Grace_isTrue(call9139)) {
      var if9140 = GraceDone;
      setLineNumber(3108);    // compilenode string
      var string9141 = new GraceString("var");
      // call case 6: other requests
      var call9144 = callmethodChecked(var_sym, "value", []);
      var opresult9146 = callmethodChecked(call9144, "==(1)", [1], string9141);
      if (Grace_isTrue(opresult9146)) {
        setLineNumber(3109);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call9148 = callmethodChecked(this, "vardec", []);
        if9140 = call9148;
      } else {
        var if9149 = GraceDone;
        setLineNumber(3110);    // compilenode string
        var string9150 = new GraceString("def");
        // call case 6: other requests
        var call9153 = callmethodChecked(var_sym, "value", []);
        var opresult9155 = callmethodChecked(call9153, "==(1)", [1], string9150);
        if (Grace_isTrue(opresult9155)) {
          setLineNumber(3111);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call9157 = callmethodChecked(this, "defdec", []);
          if9149 = call9157;
        } else {
          var if9158 = GraceDone;
          setLineNumber(3112);    // compilenode string
          var string9159 = new GraceString("import");
          // call case 6: other requests
          var call9162 = callmethodChecked(var_sym, "value", []);
          var opresult9164 = callmethodChecked(call9162, "==(1)", [1], string9159);
          if (Grace_isTrue(opresult9164)) {
            setLineNumber(3113);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call9166 = callmethodChecked(this, "doimport", []);
            if9158 = call9166;
          } else {
            var if9167 = GraceDone;
            setLineNumber(3114);    // compilenode string
            var string9168 = new GraceString("dialect");
            // call case 6: other requests
            var call9171 = callmethodChecked(var_sym, "value", []);
            var opresult9173 = callmethodChecked(call9171, "==(1)", [1], string9168);
            if (Grace_isTrue(opresult9173)) {
              setLineNumber(3115);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call9175 = callmethodChecked(this, "dodialect", []);
              if9167 = call9175;
            } else {
              var if9176 = GraceDone;
              setLineNumber(3116);    // compilenode string
              var string9177 = new GraceString("type");
              // call case 6: other requests
              var call9180 = callmethodChecked(var_sym, "value", []);
              var opresult9182 = callmethodChecked(call9180, "==(1)", [1], string9177);
              if (Grace_isTrue(opresult9182)) {
                setLineNumber(3117);    // compilenode member
                // call case 4: self request
                onSelf = true;
                var call9184 = callmethodChecked(this, "typedec", []);
                if9176 = call9184;
              } else {
                var if9185 = GraceDone;
                setLineNumber(3118);    // compilenode string
                var string9186 = new GraceString("class");
                // call case 6: other requests
                var call9189 = callmethodChecked(var_sym, "value", []);
                var opresult9191 = callmethodChecked(call9189, "==(1)", [1], string9186);
                if (Grace_isTrue(opresult9191)) {
                  setLineNumber(3119);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call9193 = callmethodChecked(this, "doclass", []);
                  if9185 = call9193;
                } else {
                  var if9194 = GraceDone;
                  setLineNumber(3120);    // compilenode string
                  var string9195 = new GraceString("trait");
                  // call case 6: other requests
                  var call9198 = callmethodChecked(var_sym, "value", []);
                  var opresult9200 = callmethodChecked(call9198, "==(1)", [1], string9195);
                  if (Grace_isTrue(opresult9200)) {
                    setLineNumber(3121);    // compilenode member
                    // call case 4: self request
                    onSelf = true;
                    var call9202 = callmethodChecked(this, "doclass", []);
                    if9194 = call9202;
                  } else {
                    var if9203 = GraceDone;
                    setLineNumber(3122);    // compilenode string
                    var string9204 = new GraceString("factory");
                    // call case 6: other requests
                    var call9207 = callmethodChecked(var_sym, "value", []);
                    var opresult9209 = callmethodChecked(call9207, "==(1)", [1], string9204);
                    if (Grace_isTrue(opresult9209)) {
                      setLineNumber(3123);    // compilenode member
                      // call case 4: self request
                      onSelf = true;
                      var call9211 = callmethodChecked(this, "dofactoryMethod", []);
                      if9203 = call9211;
                    } else {
                      var if9212 = GraceDone;
                      setLineNumber(3124);    // compilenode string
                      var string9213 = new GraceString("return");
                      // call case 6: other requests
                      var call9216 = callmethodChecked(var_sym, "value", []);
                      var opresult9218 = callmethodChecked(call9216, "==(1)", [1], string9213);
                      if (Grace_isTrue(opresult9218)) {
                        setLineNumber(3125);    // compilenode member
                        // call case 4: self request
                        onSelf = true;
                        var call9220 = callmethodChecked(this, "doreturn", []);
                        if9212 = call9220;
                      } else {
                        setLineNumber(3127);    // compilenode identifier
                        // call case 4: self request
                        onSelf = true;
                        var call9222 = callmethodChecked(this, "expression(1)", [1], var_blocksOK);
                        if9212 = call9222;
                      }
                      if9203 = if9212;
                    }
                    if9194 = if9203;
                  }
                  if9185 = if9194;
                }
                if9176 = if9185;
              }
              if9167 = if9176;
            }
            if9158 = if9167;
          }
          if9149 = if9158;
        }
        if9140 = if9149;
      }
      if9136 = if9140;
    } else {
      setLineNumber(3130);    // compilenode block
      var block9224 = new GraceBlock(this, 3130, 0);
      block9224.real = function() {
        // call case 4: self request
        onSelf = true;
        var call9226 = callmethodChecked(this, "expression(1)", [1], var_blocksOK);
        return call9226;
      };
      var block9227 = new GraceBlock(this, 3130, 0);
      block9227.real = function() {
        var if9228 = GraceDone;
        setLineNumber(3134);    // compilenode string
        var string9230 = new GraceString("bind");
        // call case 4: self request
        onSelf = true;
        var call9231 = callmethodChecked(this, "accept(1)", [1], string9230);
        setLineNumber(3133);    // compilenode string
        var string9233 = new GraceString("index");
        // call case 6: other requests
        // call case 6: other requests
        var call9237 = callmethodChecked(var_values, "last", []);
        var call9238 = callmethodChecked(call9237, "kind", []);
        var opresult9240 = callmethodChecked(call9238, "==(1)", [1], string9233);
        setLineNumber(3132);    // compilenode string
        var string9242 = new GraceString("member");
        // call case 6: other requests
        // call case 6: other requests
        var call9246 = callmethodChecked(var_values, "last", []);
        var call9247 = callmethodChecked(call9246, "kind", []);
        var opresult9249 = callmethodChecked(call9247, "==(1)", [1], string9242);
        setLineNumber(3131);    // compilenode string
        var string9251 = new GraceString("identifier");
        // call case 6: other requests
        // call case 6: other requests
        var call9255 = callmethodChecked(var_values, "last", []);
        var call9256 = callmethodChecked(call9255, "kind", []);
        var opresult9258 = callmethodChecked(call9256, "==(1)", [1], string9251);
        var opresult9260 = callmethodChecked(opresult9258, "||(1)", [1], opresult9249);
        var opresult9262 = callmethodChecked(opresult9260, "||(1)", [1], opresult9240);
        var opresult9264 = callmethodChecked(opresult9262, "&&(1)", [1], call9231);
        if (Grace_isTrue(opresult9264)) {
          setLineNumber(3135);    // compilenode member
          // call case 6: other requests
          var call9266 = callmethodChecked(var_values, "pop", []);
          var var_dest = call9266;
          var if9267 = GraceDone;
          setLineNumber(3136);    // compilenode string
          var string9268 = new GraceString("lbrace");
          // call case 6: other requests
          var call9271 = callmethodChecked(var_dest, "kind", []);
          var opresult9273 = callmethodChecked(call9271, "==(1)", [1], string9268);
          if (Grace_isTrue(opresult9273)) {
            setLineNumber(3137);    // compilenode string
            var string9274 = new GraceString("");
            // call case 6: other requests
            var call9277 = callmethodChecked(var_sym, "line", []);
            var string9279 = new GraceString(", sym.line = ");
            var string9282 = new GraceString("sym = ");
            var opresult9284 = callmethodChecked(string9282, "++(1)", [1], var_sym);
            var opresult9286 = callmethodChecked(opresult9284, "++(1)", [1], string9279);
            var opresult9288 = callmethodChecked(opresult9286, "++(1)", [1], call9277);
            var opresult9290 = callmethodChecked(opresult9288, "++(1)", [1], string9274);
            var call9291 = Grace_print(opresult9290);
            setLineNumber(3138);    // compilenode string
            var string9293 = new GraceString("popped lbrace token while parsing statement");
            // call case 6: other requests
            // call case 5: prelude request
            var call9295 = callmethodChecked(var_prelude, "ProgrammingError", []);
            var call9296 = callmethodChecked(call9295, "raise(1)", [1], string9293);
            if9267 = call9296;
          }
          setLineNumber(3140);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call9298 = callmethodChecked(this, "next", []);
          var if9299 = GraceDone;
          setLineNumber(3141);    // compilenode member
          // call case 6: other requests
          var block9302 = new GraceBlock(this, 3141, 0);
          block9302.real = function() {
            // call case 4: self request
            onSelf = true;
            var call9304 = callmethodChecked(this, "expression(1)", [1], var_blocksOK);
            return call9304;
          };
          // call case 4: self request
          onSelf = true;
          var call9305 = callmethodChecked(this, "didConsume(1)", [1], block9302);
          var call9306 = callmethodChecked(call9305, "not", []);
          if (Grace_isTrue(call9306)) {
            setLineNumber(3142);    // compilenode array
            var array9307 = new PrimitiveGraceList([]);
            var var_suggestions = array9307;
            setLineNumber(3143);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call9310 = callmethodChecked(var_errormessages, "suggestion", []);
            var call9311 = callmethodChecked(call9310, "new", []);
            var var_suggestion = call9311;
            setLineNumber(3144);    // compilenode string
            var string9314 = new GraceString("rbrace");
            var array9313 = new PrimitiveGraceList([string9314]);
            // call case 4: self request
            onSelf = true;
            var call9315 = callmethodChecked(this, "findNextValidToken(1)", [1], array9313);
            var var_nextTok = call9315;
            var if9316 = GraceDone;
            setLineNumber(3145);    // compilenode identifier
            var opresult9319 = callmethodChecked(var_nextTok, "==(1)", [1], var_sym);
            if (Grace_isTrue(opresult9319)) {
              setLineNumber(3146);    // compilenode string
              var string9321 = new GraceString(" \u00abexpression\u00bb");
              // call case 6: other requests
              var call9322 = callmethodChecked(var_suggestion, "insert(1)afterToken(1)", [1, 1], string9321, var_lastToken);
              if9316 = call9322;
            } else {
              setLineNumber(3148);    // compilenode member
              // call case 6: other requests
              var call9325 = callmethodChecked(var_nextTok, "prev", []);
              var string9326 = new GraceString(" \u00abexpression\u00bb");
              // call case 6: other requests
              var call9327 = callmethodChecked(var_suggestion, "replaceTokenRange(2)leading(1)trailing(1)with(1)", [2, 1, 1, 1], var_sym, call9325, GraceTrue, GraceFalse, string9326);
              if9316 = call9327;
            }
            setLineNumber(3150);    // compilenode identifier
            // call case 6: other requests
            var call9329 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
            setLineNumber(3151);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call9332 = callmethodChecked(var_errormessages, "suggestion", []);
            var call9333 = callmethodChecked(call9332, "new", []);
            var_suggestion = call9333;
            setLineNumber(3152);    // compilenode member
            // call case 6: other requests
            var call9336 = callmethodChecked(var_nextTok, "prev", []);
            // call case 6: other requests
            var call9337 = callmethodChecked(var_suggestion, "deleteTokenRange(2)leading(1)trailing(1)", [2, 1, 1], var_lastToken, call9336, GraceTrue, GraceFalse);
            setLineNumber(3153);    // compilenode identifier
            // call case 6: other requests
            var call9339 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
            setLineNumber(3154);    // compilenode string
            var string9341 = new GraceString("a valid expression must follow ':='.");
            setLineNumber(3155);    // compilenode member
            // call case 6: other requests
            var call9343 = callmethodChecked(var_sym, "line", []);
            // call case 6: other requests
            var call9345 = callmethodChecked(var_sym, "linePos", []);
            // call case 6: other requests
            setLineNumber(3154);    // compilenode identifier
            var call9346 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestions(1)", [1, 2, 1], string9341, call9343, call9345, var_suggestions);
            if9299 = call9346;
          }
          setLineNumber(3157);    // compilenode member
          // call case 6: other requests
          var call9348 = callmethodChecked(var_values, "pop", []);
          var var_val = call9348;
          setLineNumber(3158);    // compilenode member
          // call case 6: other requests
          var call9351 = callmethodChecked(var_btok, "line", []);
          // call case 6: other requests
          var call9353 = callmethodChecked(var_btok, "linePos", []);
          // call case 6: other requests
          var call9354 = callmethodChecked(var_util, "setPosition(2)", [2], call9351, call9353);
          setLineNumber(3159);    // compilenode identifier
          // call case 6: other requests
          // call case 6: other requests
          var call9357 = callmethodChecked(var_ast, "bindNode", []);
          var call9358 = callmethodChecked(call9357, "new(2)", [2], var_dest, var_val);
          var var_o = call9358;
          setLineNumber(3160);    // compilenode identifier
          // call case 6: other requests
          var call9360 = callmethodChecked(var_values, "push(1)", [1], var_o);
          if9228 = call9360;
        }
        return if9228;
      };
      // call case 4: self request
      onSelf = true;
      var call9361 = callmethodChecked(this, "ifConsume(1)then(1)", [1, 1], block9224, block9227);
      if9136 = call9361;
    }
    setLineNumber(3164);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call9363 = callmethodChecked(this, "reconcileComments", []);
    var if9364 = GraceDone;
    setLineNumber(3165);    // compilenode string
    var string9366 = new GraceString("eof");
    // call case 4: self request
    onSelf = true;
    var call9367 = callmethodChecked(this, "accept(1)", [1], string9366);
    if (Grace_isTrue(call9367)) {
      setLineNumber(3166);    // compilenode identifier
      return GraceTrue;
    }
    var if9368 = GraceDone;
    setLineNumber(3168);    // compilenode string
    var string9370 = new GraceString("semicolon");
    // call case 4: self request
    onSelf = true;
    var call9371 = callmethodChecked(this, "accept(1)", [1], string9370);
    if (Grace_isTrue(call9371)) {
      setLineNumber(3169);    // compilenode member
      // call case 6: other requests
      var call9373 = callmethodChecked(var_sym, "line", []);
      var var_oldLine = call9373;
      setLineNumber(3170);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call9375 = callmethodChecked(this, "next", []);
      var if9376 = GraceDone;
      setLineNumber(3171);    // compilenode member
      // call case 6: other requests
      var call9379 = callmethodChecked(var_sym, "line", []);
      var opresult9381 = callmethodChecked(call9379, "==(1)", [1], var_oldLine);
      if (Grace_isTrue(opresult9381)) {
        setLineNumber(3172);    // compilenode identifier
        var_indentFreePass = GraceTrue;
        if9376 = GraceDone;
      }
      if9368 = if9376;
    } else {
      setLineNumber(3175);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call9383 = callmethodChecked(this, "checkUnexpectedTokenAfterStatement", []);
      if9368 = call9383;
    }
    return if9368;
  };
  func9131.paramCounts = [0];
  this.methods["statement"] = func9131;
  func9131.definitionLine = 3096;
  func9131.definitionModule = "parser";
  setLineNumber(3179);    // compilenode method
  var func9384 = function(argcv) {    // method pushComments
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    var if9385 = GraceDone;
    setLineNumber(3185);    // compilenode call
    // call case 6: other requests
    var string9388 = new GraceString("comment");
    // call case 4: self request
    onSelf = true;
    var call9389 = callmethodChecked(this, "accept(1)", [1], string9388);
    var call9390 = callmethodChecked(call9389, "prefix!", [0]);
    if (Grace_isTrue(call9390)) {
      return var_done;
    }
    setLineNumber(3186);    // compilenode member
    // call case 6: other requests
    var call9393 = callmethodChecked(var_sym, "line", []);
    // call case 6: other requests
    var call9395 = callmethodChecked(var_sym, "linePos", []);
    // call case 6: other requests
    var call9396 = callmethodChecked(var_util, "setPosition(2)", [2], call9393, call9395);
    setLineNumber(3187);    // compilenode member
    // call case 6: other requests
    var call9399 = callmethodChecked(var_sym, "value", []);
    // call case 6: other requests
    // call case 6: other requests
    var call9401 = callmethodChecked(var_ast, "commentNode", []);
    var call9402 = callmethodChecked(call9401, "new(1)", [1], call9399);
    var var_o = call9402;
    var if9403 = GraceDone;
    setLineNumber(3188);    // compilenode string
    var string9404 = new GraceString("comment");
    // call case 6: other requests
    var call9407 = callmethodChecked(var_lastToken, "kind", []);
    var opresult9409 = callmethodChecked(call9407, "\u2260(1)", [1], string9404);
    // call case 6: other requests
    var call9412 = callmethodChecked(var_sym, "line", []);
    // call case 6: other requests
    var call9415 = callmethodChecked(var_lastToken, "line", []);
    var opresult9417 = callmethodChecked(call9415, "==(1)", [1], call9412);
    var opresult9419 = callmethodChecked(opresult9417, "&&(1)", [1], opresult9409);
    if (Grace_isTrue(opresult9419)) {
      setLineNumber(3189);    // compilenode identifier
      // call case 6: other requests
      var call9421 = callmethodChecked(var_o, "isPartialLine:=(1)", [1], GraceTrue);
      if9403 = call9421;
    } else {
      var if9422 = GraceDone;
      setLineNumber(3190);    // compilenode member
      // call case 6: other requests
      var call9425 = callmethodChecked(var_sym, "line", []);
      var diff9427 = callmethodChecked(call9425, "-(1)", [1], new GraceNum(1));
      // call case 6: other requests
      var call9430 = callmethodChecked(var_lastToken, "line", []);
      var opresult9432 = callmethodChecked(call9430, "<(1)", [1], diff9427);
      if (Grace_isTrue(opresult9432)) {
        setLineNumber(3191);    // compilenode identifier
        // call case 6: other requests
        var call9434 = callmethodChecked(var_o, "isPreceededByBlankLine:=(1)", [1], GraceTrue);
        if9422 = call9434;
      }
      if9403 = if9422;
    }
    setLineNumber(3193);    // compilenode identifier
    // call case 6: other requests
    var call9436 = callmethodChecked(var_comments, "push(1)", [1], var_o);
    setLineNumber(3194);    // compilenode block
    var block9438 = new GraceBlock(this, 3194, 0);
    block9438.real = function() {
      setLineNumber(3195);    // compilenode identifier
      var_previousCommentToken = var_sym;
      setLineNumber(3196);    // compilenode member
      // call case 6: other requests
      var call9440 = callmethodChecked(var_tokens, "poll", []);
      var_sym = call9440;
      var if9441 = GraceDone;
      setLineNumber(3197);    // compilenode member
      // call case 6: other requests
      var call9444 = callmethodChecked(var_previousCommentToken, "line", []);
      var opresult9446 = callmethodChecked(call9444, "+(1)", [1], new GraceNum(1));
      // call case 6: other requests
      var call9449 = callmethodChecked(var_sym, "line", []);
      var opresult9451 = callmethodChecked(call9449, ">(1)", [1], opresult9446);
      if (Grace_isTrue(opresult9451)) {
        // call case 4: self request
        onSelf = true;
        var call9453 = callmethodChecked(this, "noteBlank", []);
        if9441 = call9453;
      }
      setLineNumber(3198);    // compilenode string
      var string9455 = new GraceString("comment");
      // call case 4: self request
      onSelf = true;
      var call9456 = callmethodChecked(this, "accept(1)", [1], string9455);
      return call9456;
    };
    setLineNumber(3199);    // compilenode block
    var block9457 = new GraceBlock(this, 3199, 0);
    block9457.real = function() {
      setLineNumber(3200);    // compilenode member
      // call case 6: other requests
      var call9460 = callmethodChecked(var_sym, "line", []);
      // call case 6: other requests
      var call9462 = callmethodChecked(var_sym, "linePos", []);
      // call case 6: other requests
      var call9463 = callmethodChecked(var_util, "setPosition(2)", [2], call9460, call9462);
      setLineNumber(3201);    // compilenode member
      // call case 6: other requests
      var call9466 = callmethodChecked(var_sym, "value", []);
      // call case 6: other requests
      // call case 6: other requests
      var call9468 = callmethodChecked(var_ast, "commentNode", []);
      var call9469 = callmethodChecked(call9468, "new(1)", [1], call9466);
      var_o = call9469;
      var if9470 = GraceDone;
      setLineNumber(3202);    // compilenode member
      // call case 6: other requests
      var call9473 = callmethodChecked(var_sym, "line", []);
      var diff9475 = callmethodChecked(call9473, "-(1)", [1], new GraceNum(1));
      // call case 6: other requests
      // call case 6: other requests
      var call9479 = callmethodChecked(var_comments, "last", []);
      var call9480 = callmethodChecked(call9479, "endLine", []);
      var opresult9482 = callmethodChecked(call9480, "==(1)", [1], diff9475);
      if (Grace_isTrue(opresult9482)) {
        setLineNumber(3203);    // compilenode identifier
        // call case 6: other requests
        // call case 6: other requests
        var call9485 = callmethodChecked(var_comments, "last", []);
        var call9486 = callmethodChecked(call9485, "extendCommentUsing(1)", [1], var_o);
        if9470 = call9486;
      } else {
        setLineNumber(3205);    // compilenode identifier
        // call case 6: other requests
        var call9488 = callmethodChecked(var_comments, "push(1)", [1], var_o);
        var if9489 = GraceDone;
        setLineNumber(3206);    // compilenode member
        // call case 6: other requests
        var call9492 = callmethodChecked(var_sym, "line", []);
        var diff9494 = callmethodChecked(call9492, "-(1)", [1], new GraceNum(1));
        // call case 6: other requests
        var call9497 = callmethodChecked(var_lastToken, "line", []);
        var opresult9499 = callmethodChecked(call9497, "<(1)", [1], diff9494);
        if (Grace_isTrue(opresult9499)) {
          setLineNumber(3207);    // compilenode identifier
          // call case 6: other requests
          var call9501 = callmethodChecked(var_o, "isPreceededByBlankLine:=(1)", [1], GraceTrue);
          if9489 = call9501;
        }
        if9470 = if9489;
      }
      return if9470;
    };
    // call case 5: prelude request
    var call9502 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block9438, block9457);
    return call9502;
  };
  func9384.paramCounts = [0];
  this.methods["pushComments"] = func9384;
  func9384.definitionLine = 3179;
  func9384.definitionModule = "parser";
  setLineNumber(3213);    // compilenode method
  var func9503 = function(argcv) {    // method reconcileComments
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    setLineNumber(3219);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call9505 = callmethodChecked(this, "pushComments", []);
    var if9506 = GraceDone;
    setLineNumber(3220);    // compilenode member
    // call case 6: other requests
    var call9508 = callmethodChecked(var_values, "isEmpty", []);
    if (Grace_isTrue(call9508)) {
      setLineNumber(3221);    // compilenode identifier
      if9506 = var_moduleObject;
    } else {
      setLineNumber(3223);    // compilenode member
      // call case 6: other requests
      var call9510 = callmethodChecked(var_values, "last", []);
      if9506 = call9510;
    }
    var var_node = if9506;
    var if9511 = GraceDone;
    setLineNumber(3225);    // compilenode string
    var string9512 = new GraceString("lbrace");
    // call case 6: other requests
    var call9515 = callmethodChecked(var_node, "kind", []);
    var opresult9517 = callmethodChecked(call9515, "==(1)", [1], string9512);
    if (Grace_isTrue(opresult9517)) {
      setLineNumber(3229);    // compilenode identifier
      return var_done;
    }
    setLineNumber(3230);    // compilenode member
    // call case 6: other requests
    var call9519 = callmethodChecked(var_node, "line", []);
    var var_oLine = call9519;
    setLineNumber(3231);    // compilenode member
    // call case 5: prelude request
    var call9521 = callmethodChecked(var_prelude, "emptyList", []);
    var var_preComments = call9521;
    setLineNumber(3232);    // compilenode member
    // call case 5: prelude request
    var call9523 = callmethodChecked(var_prelude, "emptyList", []);
    var var_postComments = call9523;
    setLineNumber(3234);    // compilenode member
    // call case 6: other requests
    var call9525 = callmethodChecked(var_comments, "size", []);
    var var_ix = call9525;
    setLineNumber(3235);    // compilenode block
    var block9527 = new GraceBlock(this, 3235, 0);
    block9527.real = function() {
      var opresult9530 = callmethodChecked(var_ix, ">(1)", [1], new GraceNum(0));
      return opresult9530;
    };
    var block9531 = new GraceBlock(this, 3235, 0);
    block9531.real = function() {
      setLineNumber(3236);    // compilenode identifier
      // call case 6: other requests
      var call9533 = callmethodChecked(var_comments, "at(1)", [1], var_ix);
      var var_each = call9533;
      setLineNumber(3237);    // compilenode identifier
      var opresult9536 = callmethodChecked(var_oLine, "+(1)", [1], new GraceNum(1));
      // call case 6: other requests
      var call9539 = callmethodChecked(var_each, "line", []);
      var opresult9541 = callmethodChecked(call9539, "==(1)", [1], opresult9536);
      // call case 6: other requests
      var call9545 = callmethodChecked(var_each, "line", []);
      var opresult9547 = callmethodChecked(call9545, "==(1)", [1], var_oLine);
      var opresult9549 = callmethodChecked(opresult9547, "||(1)", [1], opresult9541);
      var var_isPostComment = opresult9549;
      setLineNumber(3238);    // compilenode identifier
      var diff9552 = callmethodChecked(var_oLine, "-(1)", [1], new GraceNum(1));
      // call case 6: other requests
      var call9555 = callmethodChecked(var_each, "endLine", []);
      var opresult9557 = callmethodChecked(call9555, "==(1)", [1], diff9552);
      // call case 6: other requests
      var call9560 = callmethodChecked(var_each, "isPreceededByBlankLine", []);
      var opresult9562 = callmethodChecked(call9560, "&&(1)", [1], opresult9557);
      var var_isPreComment = opresult9562;
      var if9563 = GraceDone;
      setLineNumber(3239);    // compilenode identifier
      if (Grace_isTrue(var_isPostComment)) {
        setLineNumber(3240);    // compilenode identifier
        // call case 6: other requests
        var call9566 = callmethodChecked(var_comments, "removeAt(1)", [1], var_ix);
        // call case 6: other requests
        var call9567 = callmethodChecked(var_postComments, "push(1)", [1], call9566);
        if9563 = call9567;
      } else {
        var if9568 = GraceDone;
        setLineNumber(3241);    // compilenode identifier
        if (Grace_isTrue(var_isPreComment)) {
          setLineNumber(3242);    // compilenode identifier
          // call case 6: other requests
          var call9571 = callmethodChecked(var_comments, "removeAt(1)", [1], var_ix);
          // call case 6: other requests
          var call9572 = callmethodChecked(var_preComments, "addFirst(1)", [1], call9571);
          if9568 = call9572;
        } else {
          var if9573 = GraceDone;
          setLineNumber(3243);    // compilenode identifier
          var diff9576 = callmethodChecked(var_oLine, "-(1)", [1], new GraceNum(1));
          // call case 6: other requests
          var call9579 = callmethodChecked(var_each, "endLine", []);
          var opresult9581 = callmethodChecked(call9579, "<(1)", [1], diff9576);
          if (Grace_isTrue(opresult9581)) {
            setLineNumber(3244);    // compilenode num
            var_ix = new GraceNum(0);
            if9573 = GraceDone;
          }
          if9568 = if9573;
        }
        if9563 = if9568;
      }
      setLineNumber(3246);    // compilenode identifier
      var diff9584 = callmethodChecked(var_ix, "-(1)", [1], new GraceNum(1));
      var_ix = diff9584;
      return GraceDone;
    };
    // call case 5: prelude request
    var call9585 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block9527, block9531);
    setLineNumber(3249);    // compilenode member
    // call case 6: other requests
    var call9587 = callmethodChecked(var_postComments, "size", []);
    var var_postSz = call9587;
    setLineNumber(3250);    // compilenode member
    // call case 6: other requests
    var call9589 = callmethodChecked(var_preComments, "size", []);
    var var_preSz = call9589;
    var if9590 = GraceDone;
    setLineNumber(3252);    // compilenode identifier
    var opresult9593 = callmethodChecked(var_preSz, ">(1)", [1], new GraceNum(1));
    var opresult9597 = callmethodChecked(var_postSz, ">(1)", [1], new GraceNum(1));
    var opresult9599 = callmethodChecked(opresult9597, "&&(1)", [1], opresult9593);
    if (Grace_isTrue(opresult9599)) {
      setLineNumber(3253);    // compilenode string
      var string9601 = new GraceString("\n");
      // call case 6: other requests
      // call case 6: other requests
      var call9605 = callmethodChecked(var_preComments, "last", []);
      var call9606 = callmethodChecked(call9605, "value", []);
      var opresult9608 = callmethodChecked(call9606, "++(1)", [1], string9601);
      // call case 6: other requests
      // call case 6: other requests
      var call9610 = callmethodChecked(var_preComments, "last", []);
      var call9611 = callmethodChecked(call9610, "value:=(1)", [1], opresult9608);
      if9590 = call9611;
    }
    setLineNumber(3255);    // compilenode identifier
    // call case 6: other requests
    var call9613 = callmethodChecked(var_node, "addComments(1)", [1], var_preComments);
    setLineNumber(3256);    // compilenode identifier
    // call case 6: other requests
    var call9615 = callmethodChecked(var_node, "addComments(1)", [1], var_postComments);
    return call9615;
  };
  func9503.paramCounts = [0];
  this.methods["reconcileComments"] = func9503;
  func9503.definitionLine = 3213;
  func9503.definitionModule = "parser";
  setLineNumber(3259);    // compilenode method
  var func9616 = function(argcv) {    // method checkBadOperators
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    var if9617 = GraceDone;
    setLineNumber(3260);    // compilenode string
    var string9618 = new GraceString("=");
    // call case 6: other requests
    var call9621 = callmethodChecked(var_sym, "value", []);
    var opresult9623 = callmethodChecked(call9621, "==(1)", [1], string9618);
    if (Grace_isTrue(opresult9623)) {
      setLineNumber(3261);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call9626 = callmethodChecked(var_errormessages, "suggestion", []);
      var call9627 = callmethodChecked(call9626, "new", []);
      var var_sugg = call9627;
      setLineNumber(3262);    // compilenode string
      var string9629 = new GraceString("=");
      // call case 6: other requests
      var call9630 = callmethodChecked(var_sugg, "insert(1)afterToken(1)", [1, 1], string9629, var_sym);
      setLineNumber(3263);    // compilenode string
      var string9632 = new GraceString("use '==' to test equality, not '='.");
      setLineNumber(3264);    // compilenode member
      // call case 6: other requests
      var call9634 = callmethodChecked(var_sym, "line", []);
      // call case 6: other requests
      var call9636 = callmethodChecked(var_sym, "linePos", []);
      // call case 6: other requests
      var call9638 = callmethodChecked(var_sym, "linePos", []);
      setLineNumber(3265);    // compilenode identifier
      // call case 6: other requests
      setLineNumber(3263);    // compilenode identifier
      var call9639 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)withSuggestion(1)", [1, 3, 1], string9632, call9634, call9636, call9638, var_sugg);
      if9617 = call9639;
    }
    var if9640 = GraceDone;
    setLineNumber(3267);    // compilenode string
    var string9641 = new GraceString("rgeneric");
    // call case 6: other requests
    var call9644 = callmethodChecked(var_sym, "kind", []);
    var opresult9646 = callmethodChecked(call9644, "==(1)", [1], string9641);
    if (Grace_isTrue(opresult9646)) {
      setLineNumber(3268);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call9649 = callmethodChecked(var_errormessages, "suggestion", []);
      var call9650 = callmethodChecked(call9649, "new", []);
      var var_sugg = call9650;
      setLineNumber(3269);    // compilenode string
      var string9652 = new GraceString(" ");
      // call case 6: other requests
      var call9653 = callmethodChecked(var_sugg, "insert(1)beforeToken(1)", [1, 1], string9652, var_sym);
      setLineNumber(3270);    // compilenode string
      var string9655 = new GraceString("the '>' operator must be preceded by a space.");
      setLineNumber(3271);    // compilenode member
      // call case 6: other requests
      var call9657 = callmethodChecked(var_sym, "line", []);
      // call case 6: other requests
      var call9659 = callmethodChecked(var_sym, "linePos", []);
      // call case 6: other requests
      var call9661 = callmethodChecked(var_sym, "linePos", []);
      setLineNumber(3272);    // compilenode identifier
      // call case 6: other requests
      setLineNumber(3270);    // compilenode identifier
      var call9662 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)withSuggestion(1)", [1, 3, 1], string9655, call9657, call9659, call9661, var_sugg);
      if9640 = call9662;
    }
    return if9640;
  };
  func9616.paramCounts = [0];
  this.methods["checkBadOperators"] = func9616;
  func9616.definitionLine = 3259;
  func9616.definitionModule = "parser";
  setLineNumber(3276);    // compilenode method
  var func9663 = function(argcv) {    // method checkBadTypeLiteral
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    var if9664 = GraceDone;
    setLineNumber(3277);    // compilenode string
    var string9665 = new GraceString("lbrace");
    // call case 6: other requests
    var call9668 = callmethodChecked(var_sym, "kind", []);
    var opresult9670 = callmethodChecked(call9668, "==(1)", [1], string9665);
    if (Grace_isTrue(opresult9670)) {
      setLineNumber(3278);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call9673 = callmethodChecked(var_errormessages, "suggestion", []);
      var call9674 = callmethodChecked(call9673, "new", []);
      var var_sugg = call9674;
      setLineNumber(3279);    // compilenode string
      var string9676 = new GraceString("type ");
      // call case 6: other requests
      var call9677 = callmethodChecked(var_sugg, "insert(1)beforeToken(1)", [1, 1], string9676, var_sym);
      setLineNumber(3280);    // compilenode string
      var string9679 = new GraceString("type literals must start with the keyword 'type'.");
      setLineNumber(3281);    // compilenode member
      // call case 6: other requests
      var call9681 = callmethodChecked(var_sym, "line", []);
      // call case 6: other requests
      var call9683 = callmethodChecked(var_sym, "linePos", []);
      // call case 6: other requests
      var call9685 = callmethodChecked(var_sym, "linePos", []);
      setLineNumber(3282);    // compilenode identifier
      // call case 6: other requests
      setLineNumber(3280);    // compilenode identifier
      var call9686 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)withSuggestion(1)", [1, 3, 1], string9679, call9681, call9683, call9685, var_sugg);
      if9664 = call9686;
    }
    return if9664;
  };
  func9663.paramCounts = [0];
  this.methods["checkBadTypeLiteral"] = func9663;
  func9663.definitionLine = 3276;
  func9663.definitionModule = "parser";
  setLineNumber(3286);    // compilenode method
  var func9687 = function(argcv) {    // method checkUnexpectedTokenAfterStatement
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    var if9688 = GraceDone;
    setLineNumber(3287);    // compilenode member
    // call case 6: other requests
    var call9690 = callmethodChecked(var_lastToken, "line", []);
    // call case 6: other requests
    var call9693 = callmethodChecked(var_sym, "line", []);
    var opresult9695 = callmethodChecked(call9693, "==(1)", [1], call9690);
    if (Grace_isTrue(opresult9695)) {
      var if9696 = GraceDone;
      setLineNumber(3289);    // compilenode string
      var string9697 = new GraceString("identifier");
      // call case 6: other requests
      var call9700 = callmethodChecked(var_lastToken, "kind", []);
      var opresult9702 = callmethodChecked(call9700, "==(1)", [1], string9697);
      setLineNumber(3288);    // compilenode string
      var string9704 = new GraceString("=");
      // call case 6: other requests
      var call9707 = callmethodChecked(var_sym, "value", []);
      var opresult9709 = callmethodChecked(call9707, "==(1)", [1], string9704);
      var string9711 = new GraceString("op");
      // call case 6: other requests
      var call9714 = callmethodChecked(var_sym, "kind", []);
      var opresult9716 = callmethodChecked(call9714, "==(1)", [1], string9711);
      var opresult9718 = callmethodChecked(opresult9716, "&&(1)", [1], opresult9709);
      var opresult9720 = callmethodChecked(opresult9718, "&&(1)", [1], opresult9702);
      if (Grace_isTrue(opresult9720)) {
        setLineNumber(3290);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call9723 = callmethodChecked(var_errormessages, "suggestion", []);
        var call9724 = callmethodChecked(call9723, "new", []);
        var var_sugg = call9724;
        setLineNumber(3291);    // compilenode array
        var array9725 = new PrimitiveGraceList([]);
        var var_suggestions = array9725;
        setLineNumber(3292);    // compilenode string
        var string9727 = new GraceString(":=");
        // call case 6: other requests
        var call9728 = callmethodChecked(var_sugg, "replaceToken(1)leading(1)trailing(1)with(1)", [1, 1, 1, 1], var_sym, GraceFalse, GraceFalse, string9727);
        setLineNumber(3293);    // compilenode identifier
        // call case 6: other requests
        var call9730 = callmethodChecked(var_suggestions, "push(1)", [1], var_sugg);
        setLineNumber(3294);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call9733 = callmethodChecked(var_errormessages, "suggestion", []);
        var call9734 = callmethodChecked(call9733, "new", []);
        var var_sugg2 = call9734;
        setLineNumber(3295);    // compilenode string
        var string9736 = new GraceString("==");
        // call case 6: other requests
        var call9737 = callmethodChecked(var_sugg2, "replaceToken(1)leading(1)trailing(1)with(1)", [1, 1, 1, 1], var_sym, GraceFalse, GraceFalse, string9736);
        setLineNumber(3296);    // compilenode identifier
        // call case 6: other requests
        var call9739 = callmethodChecked(var_suggestions, "push(1)", [1], var_sugg2);
        setLineNumber(3297);    // compilenode string
        var string9741 = new GraceString("assignment uses ':=', not '='.");
        setLineNumber(3298);    // compilenode member
        // call case 6: other requests
        var call9743 = callmethodChecked(var_sym, "line", []);
        // call case 6: other requests
        var call9745 = callmethodChecked(var_sym, "linePos", []);
        // call case 6: other requests
        var call9747 = callmethodChecked(var_sym, "linePos", []);
        setLineNumber(3299);    // compilenode identifier
        // call case 6: other requests
        setLineNumber(3297);    // compilenode identifier
        var call9748 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)withSuggestions(1)", [1, 3, 1], string9741, call9743, call9745, call9747, var_suggestions);
        if9696 = call9748;
      }
      var if9749 = GraceDone;
      setLineNumber(3301);    // compilenode string
      var string9750 = new GraceString("rgeneric");
      // call case 6: other requests
      var call9753 = callmethodChecked(var_sym, "kind", []);
      var opresult9755 = callmethodChecked(call9753, "==(1)", [1], string9750);
      if (Grace_isTrue(opresult9755)) {
        setLineNumber(3302);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call9758 = callmethodChecked(var_errormessages, "suggestion", []);
        var call9759 = callmethodChecked(call9758, "new", []);
        var var_sugg = call9759;
        setLineNumber(3303);    // compilenode string
        var string9761 = new GraceString(" ");
        // call case 6: other requests
        var call9763 = callmethodChecked(var_sym, "linePos", []);
        // call case 6: other requests
        var call9765 = callmethodChecked(var_sym, "line", []);
        // call case 6: other requests
        var call9766 = callmethodChecked(var_sugg, "insert(1)atPosition(1)onLine(1)", [1, 1, 1], string9761, call9763, call9765);
        setLineNumber(3305);    // compilenode string
        var string9768 = new GraceString("The '>' operator must have a space before it.");
        setLineNumber(3306);    // compilenode member
        // call case 6: other requests
        var call9770 = callmethodChecked(var_sym, "line", []);
        // call case 6: other requests
        var call9772 = callmethodChecked(var_sym, "linePos", []);
        // call case 6: other requests
        var call9774 = callmethodChecked(var_sym, "linePos", []);
        setLineNumber(3307);    // compilenode identifier
        // call case 6: other requests
        setLineNumber(3304);    // compilenode identifier
        var call9775 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)withSuggestion(1)", [1, 3, 1], string9768, call9770, call9772, call9774, var_sugg);
        if9749 = call9775;
      }
      var if9776 = GraceDone;
      setLineNumber(3309);    // compilenode string
      var string9777 = new GraceString("rbrace");
      // call case 6: other requests
      var call9780 = callmethodChecked(var_sym, "kind", []);
      var opresult9782 = callmethodChecked(call9780, "\u2260(1)", [1], string9777);
      if (Grace_isTrue(opresult9782)) {
        setLineNumber(3310);    // compilenode array
        var array9783 = new PrimitiveGraceList([]);
        var var_suggestions = array9783;
        setLineNumber(3311);    // compilenode vardec
        var var_suggestion;
        var if9784 = GraceDone;
        setLineNumber(3312);    // compilenode block
        var block9785 = new GraceBlock(this, 3312, 0);
        block9785.real = function() {
          var string9786 = new GraceString("identifier");
          // call case 6: other requests
          var call9789 = callmethodChecked(var_sym, "kind", []);
          var opresult9791 = callmethodChecked(call9789, "==(1)", [1], string9786);
          return opresult9791;
        };
        var block9793 = new GraceBlock(this, 3312, 0);
        block9793.real = function() {
          var block9794 = new GraceBlock(this, 3312, 0);
          block9794.real = function() {
            var string9795 = new GraceString("member");
            // call case 6: other requests
            // call case 6: other requests
            var call9799 = callmethodChecked(var_values, "last", []);
            var call9800 = callmethodChecked(call9799, "kind", []);
            var opresult9802 = callmethodChecked(call9800, "==(1)", [1], string9795);
            return opresult9802;
          };
          var string9804 = new GraceString("identifier");
          // call case 6: other requests
          // call case 6: other requests
          var call9808 = callmethodChecked(var_values, "last", []);
          var call9809 = callmethodChecked(call9808, "kind", []);
          var opresult9811 = callmethodChecked(call9809, "==(1)", [1], string9804);
          var opresult9813 = callmethodChecked(opresult9811, "||(1)", [1], block9794);
          return opresult9813;
        };
        // call case 6: other requests
        var call9817 = callmethodChecked(var_values, "size", []);
        var opresult9819 = callmethodChecked(call9817, ">(1)", [1], new GraceNum(0));
        var opresult9821 = callmethodChecked(opresult9819, "&&(1)", [1], block9793);
        var opresult9823 = callmethodChecked(opresult9821, "&&(1)", [1], block9785);
        if (Grace_isTrue(opresult9823)) {
          setLineNumber(3313);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call9826 = callmethodChecked(var_errormessages, "suggestion", []);
          var call9827 = callmethodChecked(call9826, "new", []);
          var_suggestion = call9827;
          setLineNumber(3314);    // compilenode string
          var string9829 = new GraceString(")");
          // call case 6: other requests
          var call9832 = callmethodChecked(var_sym, "value", []);
          var string9834 = new GraceString("(");
          var opresult9836 = callmethodChecked(string9834, "++(1)", [1], call9832);
          var opresult9838 = callmethodChecked(opresult9836, "++(1)", [1], string9829);
          // call case 6: other requests
          var call9839 = callmethodChecked(var_suggestion, "replaceToken(1)leading(1)trailing(1)with(1)", [1, 1, 1, 1], var_sym, GraceTrue, GraceFalse, opresult9838);
          setLineNumber(3315);    // compilenode identifier
          // call case 6: other requests
          var call9841 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
          var if9842 = GraceDone;
          setLineNumber(3316);    // compilenode member
          // call case 6: other requests
          var call9844 = callmethodChecked(var_sym, "next", []);
          var opresult9847 = callmethodChecked(GraceFalse, "\u2260(1)", [1], call9844);
          if (Grace_isTrue(opresult9847)) {
            setLineNumber(3317);    // compilenode member
            // call case 6: other requests
            var call9849 = callmethodChecked(var_sym, "next", []);
            var var_n = call9849;
            var if9850 = GraceDone;
            setLineNumber(3318);    // compilenode member
            // call case 6: other requests
            var call9852 = callmethodChecked(var_sym, "line", []);
            // call case 6: other requests
            var call9855 = callmethodChecked(var_n, "line", []);
            var opresult9857 = callmethodChecked(call9855, "==(1)", [1], call9852);
            if (Grace_isTrue(opresult9857)) {
              setLineNumber(3319);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              var call9860 = callmethodChecked(var_errormessages, "suggestion", []);
              var call9861 = callmethodChecked(call9860, "new", []);
              var_suggestion = call9861;
              setLineNumber(3320);    // compilenode string
              var string9863 = new GraceString("");
              // call case 6: other requests
              var call9866 = callmethodChecked(var_sym, "value", []);
              var string9868 = new GraceString("(");
              var opresult9870 = callmethodChecked(string9868, "++(1)", [1], call9866);
              var opresult9872 = callmethodChecked(opresult9870, "++(1)", [1], string9863);
              // call case 6: other requests
              var call9873 = callmethodChecked(var_suggestion, "replaceToken(1)leading(1)trailing(1)with(1)", [1, 1, 1, 1], var_sym, GraceTrue, GraceFalse, opresult9872);
              setLineNumber(3321);    // compilenode string
              var string9875 = new GraceString(")");
              // call case 6: other requests
              var call9877 = callmethodChecked(var_sym, "line", []);
              // call case 6: other requests
              var call9878 = callmethodChecked(var_suggestion, "append(1)onLine(1)", [1, 1], string9875, call9877);
              setLineNumber(3322);    // compilenode identifier
              // call case 6: other requests
              var call9880 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
              if9850 = call9880;
            }
            if9842 = if9850;
          }
          var if9881 = GraceDone;
          setLineNumber(3325);    // compilenode string
          var string9882 = new GraceString("identifier");
          // call case 6: other requests
          // call case 6: other requests
          var call9886 = callmethodChecked(var_values, "last", []);
          var call9887 = callmethodChecked(call9886, "kind", []);
          var opresult9889 = callmethodChecked(call9887, "==(1)", [1], string9882);
          if (Grace_isTrue(opresult9889)) {
            setLineNumber(3326);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call9892 = callmethodChecked(var_errormessages, "suggestion", []);
            var call9893 = callmethodChecked(call9892, "new", []);
            var_suggestion = call9893;
            setLineNumber(3327);    // compilenode string
            var string9895 = new GraceString("\"");
            // call case 6: other requests
            var call9898 = callmethodChecked(var_sym, "value", []);
            var string9900 = new GraceString("\"");
            var opresult9902 = callmethodChecked(string9900, "++(1)", [1], call9898);
            var opresult9904 = callmethodChecked(opresult9902, "++(1)", [1], string9895);
            // call case 6: other requests
            var call9905 = callmethodChecked(var_suggestion, "replaceToken(1)leading(1)trailing(1)with(1)", [1, 1, 1, 1], var_sym, GraceFalse, GraceFalse, opresult9904);
            setLineNumber(3328);    // compilenode identifier
            // call case 6: other requests
            var call9907 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
            if9881 = call9907;
          }
          if9784 = if9881;
        }
        setLineNumber(3331);    // compilenode string
        var string9910 = new GraceString("rbrace");
        var array9909 = new PrimitiveGraceList([string9910]);
        // call case 4: self request
        onSelf = true;
        var call9911 = callmethodChecked(this, "findNextValidToken(1)", [1], array9909);
        var var_nextTok = call9911;
        var if9912 = GraceDone;
        setLineNumber(3332);    // compilenode identifier
        var opresult9915 = callmethodChecked(var_nextTok, "==(1)", [1], var_sym);
        if (Grace_isTrue(opresult9915)) {
          setLineNumber(3333);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call9918 = callmethodChecked(var_errormessages, "suggestion", []);
          var call9919 = callmethodChecked(call9918, "new", []);
          var_suggestion = call9919;
          setLineNumber(3334);    // compilenode member
          // call case 6: other requests
          var call9922 = callmethodChecked(var_lastToken, "line", []);
          // call case 6: other requests
          var call9926 = callmethodChecked(var_lastToken, "size", []);
          // call case 6: other requests
          var call9929 = callmethodChecked(var_lastToken, "linePos", []);
          var opresult9931 = callmethodChecked(call9929, "+(1)", [1], call9926);
          var diff9933 = callmethodChecked(opresult9931, "-(1)", [1], new GraceNum(1));
          // call case 6: other requests
          // call case 6: other requests
          var call9936 = callmethodChecked(var_lastToken, "line", []);
          // call case 6: other requests
          // call case 6: other requests
          var call9938 = callmethodChecked(var_util, "lines", []);
          var call9939 = callmethodChecked(call9938, "at(1)", [1], call9936);
          var call9940 = callmethodChecked(call9939, "substringFrom(1)to(1)", [1, 1], new GraceNum(1), diff9933);
          // call case 6: other requests
          var call9941 = callmethodChecked(var_suggestion, "addLine(2)", [2], call9922, call9940);
          setLineNumber(3335);    // compilenode member
          // call case 6: other requests
          var call9944 = callmethodChecked(var_sym, "linePos", []);
          // call case 6: other requests
          // call case 6: other requests
          var call9948 = callmethodChecked(var_sym, "line", []);
          // call case 6: other requests
          // call case 6: other requests
          var call9950 = callmethodChecked(var_util, "lines", []);
          var call9951 = callmethodChecked(call9950, "at(1)", [1], call9948);
          var call9952 = callmethodChecked(call9951, "size", []);
          // call case 6: other requests
          // call case 6: other requests
          var call9955 = callmethodChecked(var_sym, "line", []);
          // call case 6: other requests
          // call case 6: other requests
          var call9957 = callmethodChecked(var_util, "lines", []);
          var call9958 = callmethodChecked(call9957, "at(1)", [1], call9955);
          var call9959 = callmethodChecked(call9958, "substringFrom(1)to(1)", [1, 1], call9944, call9952);
          var var_newLine = call9959;
          setLineNumber(3336);    // compilenode member
          // call case 6: other requests
          var call9963 = callmethodChecked(var_lastToken, "line", []);
          var opresult9965 = callmethodChecked(call9963, "+(1)", [1], new GraceNum(0.1));
          // call case 6: other requests
          var call9966 = callmethodChecked(var_suggestion, "addLine(2)", [2], opresult9965, var_newLine);
          setLineNumber(3337);    // compilenode identifier
          // call case 6: other requests
          var call9968 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
          if9912 = call9968;
        } else {
          setLineNumber(3339);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call9971 = callmethodChecked(var_errormessages, "suggestion", []);
          var call9972 = callmethodChecked(call9971, "new", []);
          var_suggestion = call9972;
          setLineNumber(3340);    // compilenode member
          // call case 6: other requests
          var call9975 = callmethodChecked(var_nextTok, "prev", []);
          // call case 6: other requests
          var call9976 = callmethodChecked(var_suggestion, "deleteTokenRange(2)leading(1)trailing(1)", [2, 1, 1], var_sym, call9975, GraceTrue, GraceFalse);
          setLineNumber(3341);    // compilenode identifier
          // call case 6: other requests
          var call9978 = callmethodChecked(var_suggestions, "push(1)", [1], var_suggestion);
          if9912 = call9978;
        }
        setLineNumber(3343);    // compilenode string
        var string9980 = new GraceString("multiple statements must be separated by a newline or a semicolon. This is often caused by missing parentheses.");
        setLineNumber(3344);    // compilenode member
        // call case 6: other requests
        var call9982 = callmethodChecked(var_sym, "line", []);
        // call case 6: other requests
        var call9984 = callmethodChecked(var_sym, "linePos", []);
        // call case 6: other requests
        setLineNumber(3343);    // compilenode identifier
        var call9985 = callmethodChecked(var_errormessages, "syntaxError(1)atPosition(2)withSuggestions(1)", [1, 2, 1], string9980, call9982, call9984, var_suggestions);
        if9776 = call9985;
      }
      if9688 = if9776;
    }
    return if9688;
  };
  func9687.paramCounts = [0];
  this.methods["checkUnexpectedTokenAfterStatement"] = func9687;
  func9687.definitionLine = 3286;
  func9687.definitionModule = "parser";
  setLineNumber(3350);    // compilenode method
  var func9986 = function(argcv) {    // method parse(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_toks = arguments[curarg];
    curarg++;
    setModuleName("parser");
    setLineNumber(3354);    // compilenode string
    var string9988 = new GraceString("parsing.");
    // call case 6: other requests
    var call9989 = callmethodChecked(var_util, "log_verbose(1)", [1], string9988);
    setLineNumber(3355);    // compilenode member
    // call case 6: other requests
    var call9992 = callmethodChecked(var_util, "modname", []);
    // call case 6: other requests
    // call case 6: other requests
    var call9994 = callmethodChecked(var_ast, "moduleNode", []);
    var call9995 = callmethodChecked(call9994, "body(1)named(1)", [1, 1], var_values, call9992);
    var_moduleObject = call9995;
    var if9996 = GraceDone;
    setLineNumber(3357);    // compilenode member
    // call case 6: other requests
    var call9999 = callmethodChecked(var_toks, "size", []);
    var opresult10001 = callmethodChecked(call9999, "==(1)", [1], new GraceNum(0));
    if (Grace_isTrue(opresult10001)) {
      setLineNumber(3358);    // compilenode identifier
      return var_moduleObject;
    }
    setLineNumber(3360);    // compilenode identifier
    var_tokens = var_toks;
    setLineNumber(3361);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call10003 = callmethodChecked(this, "next", []);
    var if10004 = GraceDone;
    setLineNumber(3362);    // compilenode member
    // call case 6: other requests
    var call10007 = callmethodChecked(var_sym, "indent", []);
    var opresult10009 = callmethodChecked(call10007, ">(1)", [1], new GraceNum(0));
    if (Grace_isTrue(opresult10009)) {
      setLineNumber(3363);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call10012 = callmethodChecked(var_errormessages, "suggestion", []);
      var call10013 = callmethodChecked(call10012, "new", []);
      var var_sugg = call10013;
      setLineNumber(3364);    // compilenode member
      // call case 6: other requests
      var call10016 = callmethodChecked(var_sym, "indent", []);
      // call case 6: other requests
      var call10018 = callmethodChecked(var_sym, "line", []);
      // call case 6: other requests
      var call10019 = callmethodChecked(var_sugg, "deleteRange(2)onLine(1)", [2, 1], new GraceNum(1), call10016, call10018);
      setLineNumber(3365);    // compilenode string
      var string10021 = new GraceString("the first line must not be indented.");
      setLineNumber(3366);    // compilenode member
      // call case 6: other requests
      var call10023 = callmethodChecked(var_sym, "line", []);
      // call case 6: other requests
      var call10025 = callmethodChecked(var_sym, "indent", []);
      setLineNumber(3367);    // compilenode identifier
      // call case 6: other requests
      setLineNumber(3365);    // compilenode identifier
      var call10026 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)withSuggestion(1)", [1, 3, 1], string10021, call10023, new GraceNum(1), call10025, var_sugg);
      if10004 = call10026;
    }
    setLineNumber(3369);    // compilenode member
    // call case 6: other requests
    var call10028 = callmethodChecked(var_tokens, "size", []);
    var var_oldlength = call10028;
    setLineNumber(3370);    // compilenode block
    var block10030 = new GraceBlock(this, 3370, 0);
    block10030.real = function() {
      // call case 6: other requests
      var call10033 = callmethodChecked(var_tokens, "size", []);
      var opresult10035 = callmethodChecked(call10033, ">(1)", [1], new GraceNum(0));
      return opresult10035;
    };
    var block10036 = new GraceBlock(this, 3370, 0);
    block10036.real = function() {
      setLineNumber(3371);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call10038 = callmethodChecked(this, "blank", []);
      setLineNumber(3372);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call10040 = callmethodChecked(this, "methoddec", []);
      setLineNumber(3373);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call10042 = callmethodChecked(this, "blank", []);
      setLineNumber(3374);    // compilenode block
      var block10044 = new GraceBlock(this, 3374, 0);
      block10044.real = function() {
        // call case 4: self request
        onSelf = true;
        var call10046 = callmethodChecked(this, "inheritsOrUses", []);
        return call10046;
      };
      var block10047 = new GraceBlock(this, 3374, 0);
      block10047.real = function() {
        setLineNumber(3375);    // compilenode member
        // call case 6: other requests
        var call10049 = callmethodChecked(var_values, "pop", []);
        var var_parentNode = call10049;
        var if10050 = GraceDone;
        setLineNumber(3376);    // compilenode member
        // call case 6: other requests
        var call10052 = callmethodChecked(var_parentNode, "isUse", []);
        if (Grace_isTrue(call10052)) {
          setLineNumber(3377);    // compilenode identifier
          // call case 6: other requests
          // call case 6: other requests
          var call10055 = callmethodChecked(var_moduleObject, "usedTraits", []);
          var call10056 = callmethodChecked(call10055, "add(1)", [1], var_parentNode);
          if10050 = call10056;
        } else {
          var if10057 = GraceDone;
          setLineNumber(3378);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call10060 = callmethodChecked(var_moduleObject, "usedTraits", []);
          var call10061 = callmethodChecked(call10060, "isEmpty", []);
          if (Grace_isTrue(call10061)) {
            setLineNumber(3379);    // compilenode identifier
            // call case 6: other requests
            var call10063 = callmethodChecked(var_moduleObject, "superclass:=(1)", [1], var_parentNode);
            if10057 = call10063;
          } else {
            setLineNumber(3382);    // compilenode string
            var string10065 = new GraceString("before 'use' in a module.");
            setLineNumber(3381);    // compilenode string
            var string10067 = new GraceString("'inherit' must come ");
            var opresult10069 = callmethodChecked(string10067, "++(1)", [1], string10065);
            setLineNumber(3383);    // compilenode member
            // call case 6: other requests
            var call10071 = callmethodChecked(var_parentNode, "line", []);
            // call case 6: other requests
            var call10073 = callmethodChecked(var_parentNode, "linePos", []);
            setLineNumber(3384);    // compilenode member
            // call case 6: other requests
            var call10076 = callmethodChecked(var_parentNode, "linePos", []);
            var opresult10078 = callmethodChecked(call10076, "+(1)", [1], new GraceNum(7));
            // call case 6: other requests
            setLineNumber(3381);    // compilenode identifier
            var call10079 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)", [1, 3], opresult10069, call10071, call10073, opresult10078);
            if10057 = call10079;
          }
          if10050 = if10057;
        }
        return if10050;
      };
      // call case 4: self request
      onSelf = true;
      var call10080 = callmethodChecked(this, "ifConsume(1)then(1)", [1, 1], block10044, block10047);
      setLineNumber(3387);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call10082 = callmethodChecked(this, "blank", []);
      setLineNumber(3388);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call10084 = callmethodChecked(this, "statement", []);
      setLineNumber(3389);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call10086 = callmethodChecked(this, "blank", []);
      var if10087 = GraceDone;
      setLineNumber(3390);    // compilenode member
      // call case 6: other requests
      var call10090 = callmethodChecked(var_tokens, "size", []);
      var opresult10092 = callmethodChecked(call10090, "==(1)", [1], var_oldlength);
      if (Grace_isTrue(opresult10092)) {
        setLineNumber(3391);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call10095 = callmethodChecked(var_errormessages, "suggestion", []);
        var call10096 = callmethodChecked(call10095, "new", []);
        var var_suggestion = call10096;
        setLineNumber(3392);    // compilenode identifier
        // call case 6: other requests
        var call10098 = callmethodChecked(var_suggestion, "deleteToken(1)", [1], var_sym);
        setLineNumber(3394);    // compilenode string
        var string10100 = new GraceString("caused by an extra '}', ')', or ']'.");
        setLineNumber(3393);    // compilenode string
        var string10102 = new GraceString("invalid statement. This is often ");
        var opresult10104 = callmethodChecked(string10102, "++(1)", [1], string10100);
        setLineNumber(3395);    // compilenode member
        // call case 6: other requests
        var call10106 = callmethodChecked(var_sym, "line", []);
        // call case 6: other requests
        var call10108 = callmethodChecked(var_sym, "linePos", []);
        // call case 6: other requests
        var call10111 = callmethodChecked(var_sym, "size", []);
        // call case 6: other requests
        var call10114 = callmethodChecked(var_sym, "linePos", []);
        var opresult10116 = callmethodChecked(call10114, "+(1)", [1], call10111);
        var diff10118 = callmethodChecked(opresult10116, "-(1)", [1], new GraceNum(1));
        setLineNumber(3396);    // compilenode identifier
        // call case 6: other requests
        setLineNumber(3393);    // compilenode identifier
        var call10119 = callmethodChecked(var_errormessages, "syntaxError(1)atRange(3)withSuggestion(1)", [1, 3, 1], opresult10104, call10106, call10108, diff10118, var_suggestion);
        if10087 = call10119;
      }
      setLineNumber(3398);    // compilenode member
      // call case 6: other requests
      var call10121 = callmethodChecked(var_tokens, "size", []);
      var_oldlength = call10121;
      return GraceDone;
    };
    // call case 5: prelude request
    var call10122 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block10030, block10036);
    setLineNumber(3400);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call10124 = callmethodChecked(this, "blank", []);
    setLineNumber(3401);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call10126 = callmethodChecked(this, "statement", []);
    setLineNumber(3402);    // compilenode member
    // call case 4: self request
    onSelf = true;
    var call10128 = callmethodChecked(this, "blank", []);
    setLineNumber(3403);    // compilenode identifier
    return var_moduleObject;
  };
  func9986.paramCounts = [1];
  this.methods["parse(1)"] = func9986;
  func9986.definitionLine = 3350;
  func9986.definitionModule = "parser";
  setLineNumber(7);    // compilenode num
  var var_blankLocation = new GraceNum(0);
  setLineNumber(1);    // compilenode method
  var func10129 = function(argcv) {    // method blankLocation
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    // blankLocation is a simple accessor - elide try ... catch
    setLineNumber(7);    // compilenode identifier
    return var_blankLocation;
  };
  func10129.paramCounts = [0];
  this.methods["blankLocation"] = func10129;
  func10129.definitionLine = 1;
  func10129.definitionModule = "parser";
  setLineNumber(1);    // compilenode method
  var func10130 = function(argcv) {    // method blankLocation:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("parser");
    var_blankLocation = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func10130.paramCounts = [1];
  this.methods["blankLocation:=(1)"] = func10130;
  func10130.definitionLine = 1;
  func10130.definitionModule = "parser";
  this.methods["blankLocation"].debug = "var";
  setLineNumber(8);    // compilenode num
  var var_lastLine = new GraceNum(0);
  setLineNumber(1);    // compilenode method
  var func10131 = function(argcv) {    // method lastLine
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    // lastLine is a simple accessor - elide try ... catch
    setLineNumber(8);    // compilenode identifier
    return var_lastLine;
  };
  func10131.paramCounts = [0];
  this.methods["lastLine"] = func10131;
  func10131.definitionLine = 1;
  func10131.definitionModule = "parser";
  setLineNumber(1);    // compilenode method
  var func10132 = function(argcv) {    // method lastLine:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("parser");
    var_lastLine = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func10132.paramCounts = [1];
  this.methods["lastLine:=(1)"] = func10132;
  func10132.definitionLine = 1;
  func10132.definitionModule = "parser";
  this.methods["lastLine"].debug = "var";
  setLineNumber(9);    // compilenode num
  var var_lastIndent = new GraceNum(0);
  setLineNumber(1);    // compilenode method
  var func10133 = function(argcv) {    // method lastIndent
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    // lastIndent is a simple accessor - elide try ... catch
    setLineNumber(9);    // compilenode identifier
    return var_lastIndent;
  };
  func10133.paramCounts = [0];
  this.methods["lastIndent"] = func10133;
  func10133.definitionLine = 1;
  func10133.definitionModule = "parser";
  setLineNumber(1);    // compilenode method
  var func10134 = function(argcv) {    // method lastIndent:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("parser");
    var_lastIndent = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func10134.paramCounts = [1];
  this.methods["lastIndent:=(1)"] = func10134;
  func10134.definitionLine = 1;
  func10134.definitionModule = "parser";
  this.methods["lastIndent"].debug = "var";
  setLineNumber(10);    // compilenode identifier
  var var_indentFreePass = GraceFalse;
  setLineNumber(1);    // compilenode method
  var func10135 = function(argcv) {    // method indentFreePass
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    // indentFreePass is a simple accessor - elide try ... catch
    setLineNumber(10);    // compilenode identifier
    return var_indentFreePass;
  };
  func10135.paramCounts = [0];
  this.methods["indentFreePass"] = func10135;
  func10135.definitionLine = 1;
  func10135.definitionModule = "parser";
  setLineNumber(1);    // compilenode method
  var func10136 = function(argcv) {    // method indentFreePass:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("parser");
    var_indentFreePass = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func10136.paramCounts = [1];
  this.methods["indentFreePass:=(1)"] = func10136;
  func10136.definitionLine = 1;
  func10136.definitionModule = "parser";
  this.methods["indentFreePass"].debug = "var";
  setLineNumber(11);    // compilenode num
  var var_minIndentLevel = new GraceNum(0);
  setLineNumber(1);    // compilenode method
  var func10137 = function(argcv) {    // method minIndentLevel
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    // minIndentLevel is a simple accessor - elide try ... catch
    setLineNumber(11);    // compilenode identifier
    return var_minIndentLevel;
  };
  func10137.paramCounts = [0];
  this.methods["minIndentLevel"] = func10137;
  func10137.definitionLine = 1;
  func10137.definitionModule = "parser";
  setLineNumber(1);    // compilenode method
  var func10138 = function(argcv) {    // method minIndentLevel:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("parser");
    var_minIndentLevel = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func10138.paramCounts = [1];
  this.methods["minIndentLevel:=(1)"] = func10138;
  func10138.definitionLine = 1;
  func10138.definitionModule = "parser";
  this.methods["minIndentLevel"].debug = "var";
  setLineNumber(12);    // compilenode num
  var var_statementIndent = new GraceNum(0);
  setLineNumber(1);    // compilenode method
  var func10139 = function(argcv) {    // method statementIndent
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    // statementIndent is a simple accessor - elide try ... catch
    setLineNumber(12);    // compilenode identifier
    return var_statementIndent;
  };
  func10139.paramCounts = [0];
  this.methods["statementIndent"] = func10139;
  func10139.definitionLine = 1;
  func10139.definitionModule = "parser";
  setLineNumber(1);    // compilenode method
  var func10140 = function(argcv) {    // method statementIndent:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("parser");
    var_statementIndent = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func10140.paramCounts = [1];
  this.methods["statementIndent:=(1)"] = func10140;
  func10140.definitionLine = 1;
  func10140.definitionModule = "parser";
  this.methods["statementIndent"].debug = "var";
  setLineNumber(13);    // compilenode identifier
  var var_tokens = GraceFalse;
  setLineNumber(1);    // compilenode method
  var func10141 = function(argcv) {    // method tokens
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    // tokens is a simple accessor - elide try ... catch
    setLineNumber(13);    // compilenode identifier
    return var_tokens;
  };
  func10141.paramCounts = [0];
  this.methods["tokens"] = func10141;
  func10141.definitionLine = 1;
  func10141.definitionModule = "parser";
  setLineNumber(1);    // compilenode method
  var func10142 = function(argcv) {    // method tokens:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("parser");
    var_tokens = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func10142.paramCounts = [1];
  this.methods["tokens:=(1)"] = func10142;
  func10142.definitionLine = 1;
  func10142.definitionModule = "parser";
  this.methods["tokens"].debug = "var";
  setLineNumber(14);    // compilenode array
  var array10143 = new PrimitiveGraceList([]);
  var var_values = array10143;
  setLineNumber(1);    // compilenode method
  var func10144 = function(argcv) {    // method values
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    // values is a simple accessor - elide try ... catch
    setLineNumber(14);    // compilenode identifier
    return var_values;
  };
  func10144.paramCounts = [0];
  this.methods["values"] = func10144;
  func10144.definitionLine = 1;
  func10144.definitionModule = "parser";
  setLineNumber(1);    // compilenode method
  var func10145 = function(argcv) {    // method values:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("parser");
    var_values = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func10145.paramCounts = [1];
  this.methods["values:=(1)"] = func10145;
  func10145.definitionLine = 1;
  func10145.definitionModule = "parser";
  this.methods["values"].debug = "var";
  setLineNumber(15);    // compilenode vardec
  var var_moduleObject;
  setLineNumber(1);    // compilenode method
  var func10146 = function(argcv) {    // method moduleObject
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    // moduleObject is a simple accessor - elide try ... catch
    setLineNumber(15);    // compilenode identifier
    return var_moduleObject;
  };
  func10146.paramCounts = [0];
  this.methods["moduleObject"] = func10146;
  func10146.definitionLine = 1;
  func10146.definitionModule = "parser";
  setLineNumber(1);    // compilenode method
  var func10147 = function(argcv) {    // method moduleObject:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("parser");
    var_moduleObject = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func10147.paramCounts = [1];
  this.methods["moduleObject:=(1)"] = func10147;
  func10147.definitionLine = 1;
  func10147.definitionModule = "parser";
  this.methods["moduleObject"].debug = "var";
  setLineNumber(16);    // compilenode member
  // call case 5: prelude request
  var call10149 = callmethodChecked(var_prelude, "emptyList", []);
  var var_comments = call10149;
  setLineNumber(1);    // compilenode method
  var func10150 = function(argcv) {    // method comments
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    // comments is a simple accessor - elide try ... catch
    setLineNumber(16);    // compilenode identifier
    return var_comments;
  };
  func10150.paramCounts = [0];
  this.methods["comments"] = func10150;
  func10150.definitionLine = 1;
  func10150.definitionModule = "parser";
  setLineNumber(1);    // compilenode method
  var func10151 = function(argcv) {    // method comments:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("parser");
    var_comments = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func10151.paramCounts = [1];
  this.methods["comments:=(1)"] = func10151;
  func10151.definitionLine = 1;
  func10151.definitionModule = "parser";
  this.methods["comments"].debug = "var";
  setLineNumber(17);    // compilenode num
  var var_auto__95__count = new GraceNum(0);
  setLineNumber(1);    // compilenode method
  var func10152 = function(argcv) {    // method auto_count
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    // auto_count is a simple accessor - elide try ... catch
    setLineNumber(17);    // compilenode identifier
    return var_auto__95__count;
  };
  func10152.paramCounts = [0];
  this.methods["auto_count"] = func10152;
  func10152.definitionLine = 1;
  func10152.definitionModule = "parser";
  setLineNumber(1);    // compilenode method
  var func10153 = function(argcv) {    // method auto_count:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("parser");
    var_auto__95__count = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func10153.paramCounts = [1];
  this.methods["auto_count:=(1)"] = func10153;
  func10153.definitionLine = 1;
  func10153.definitionModule = "parser";
  this.methods["auto_count"].debug = "var";
  setLineNumber(18);    // compilenode identifier
  var var_noBlocks = GraceFalse;
  setLineNumber(1);    // compilenode method
  var func10154 = function(argcv) {    // method noBlocks
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    // noBlocks is a simple accessor - elide try ... catch
    setLineNumber(18);    // compilenode identifier
    return var_noBlocks;
  };
  func10154.paramCounts = [0];
  this.methods["noBlocks"] = func10154;
  func10154.definitionLine = 1;
  func10154.definitionModule = "parser";
  this.methods["noBlocks"].debug = "def";
  setLineNumber(19);    // compilenode identifier
  var var_blocksOK = GraceTrue;
  setLineNumber(1);    // compilenode method
  var func10155 = function(argcv) {    // method blocksOK
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    // blocksOK is a simple accessor - elide try ... catch
    setLineNumber(19);    // compilenode identifier
    return var_blocksOK;
  };
  func10155.paramCounts = [0];
  this.methods["blocksOK"] = func10155;
  func10155.definitionLine = 1;
  func10155.definitionModule = "parser";
  this.methods["blocksOK"].debug = "def";
  setLineNumber(20);    // compilenode identifier
  var var_braceIsType = GraceFalse;
  setLineNumber(1);    // compilenode method
  var func10156 = function(argcv) {    // method braceIsType
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    // braceIsType is a simple accessor - elide try ... catch
    setLineNumber(20);    // compilenode identifier
    return var_braceIsType;
  };
  func10156.paramCounts = [0];
  this.methods["braceIsType"] = func10156;
  func10156.definitionLine = 1;
  func10156.definitionModule = "parser";
  setLineNumber(1);    // compilenode method
  var func10157 = function(argcv) {    // method braceIsType:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("parser");
    var_braceIsType = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func10157.paramCounts = [1];
  this.methods["braceIsType:=(1)"] = func10157;
  func10157.definitionLine = 1;
  func10157.definitionModule = "parser";
  this.methods["braceIsType"].debug = "var";
  setLineNumber(23);    // compilenode object
  var obj10158 = Grace_allocObject(GraceObject, "object");
  obj10158.definitionModule = "parser";
  obj10158.definitionLine = 23;
  obj10158.outer = this;
  var reader_parser_outer10159 = function() {
    return this.outer;
  };
  obj10158.methods["outer"] = reader_parser_outer10159;
  var obj_init_10158 = function() {
    var origSuperDepth = superDepth;
    superDepth = obj10158;
    setLineNumber(24);    // compilenode string
    var string10160 = new GraceString("start");
    obj10158.data["kind"] = string10160;
    var reader_parser_kind10161 = function() {
      return this.data["kind"];
    };
    reader_parser_kind10161.def = true;
    obj10158.methods["kind"] = reader_parser_kind10161;
    setLineNumber(25);    // compilenode num
    obj10158.data["line"] = new GraceNum(0);
    var reader_parser_line10162 = function() {
      return this.data["line"];
    };
    reader_parser_line10162.def = true;
    obj10158.methods["line"] = reader_parser_line10162;
    setLineNumber(26);    // compilenode num
    obj10158.data["linePos"] = new GraceNum(0);
    var reader_parser_linePos10163 = function() {
      return this.data["linePos"];
    };
    reader_parser_linePos10163.def = true;
    obj10158.methods["linePos"] = reader_parser_linePos10163;
    setLineNumber(27);    // compilenode num
    obj10158.data["indent"] = new GraceNum(0);
    var reader_parser_indent10164 = function() {
      return this.data["indent"];
    };
    reader_parser_indent10164.def = true;
    obj10158.methods["indent"] = reader_parser_indent10164;
    setLineNumber(28);    // compilenode string
    var string10165 = new GraceString("");
    obj10158.data["value"] = string10165;
    var reader_parser_value10166 = function() {
      return this.data["value"];
    };
    reader_parser_value10166.def = true;
    obj10158.methods["value"] = reader_parser_value10166;
    setLineNumber(29);    // compilenode num
    obj10158.data["size"] = new GraceNum(0);
    var reader_parser_size10167 = function() {
      return this.data["size"];
    };
    reader_parser_size10167.def = true;
    obj10158.methods["size"] = reader_parser_size10167;
    superDepth = origSuperDepth;
  };
  obj_init_10158.apply(obj10158, []);
  var var_sym = obj10158;
  setLineNumber(1);    // compilenode method
  var func10168 = function(argcv) {    // method sym
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    // sym is a simple accessor - elide try ... catch
    setLineNumber(23);    // compilenode identifier
    return var_sym;
  };
  func10168.paramCounts = [0];
  this.methods["sym"] = func10168;
  func10168.definitionLine = 1;
  func10168.definitionModule = "parser";
  setLineNumber(1);    // compilenode method
  var func10169 = function(argcv) {    // method sym:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("parser");
    var_sym = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func10169.paramCounts = [1];
  this.methods["sym:=(1)"] = func10169;
  func10169.definitionLine = 1;
  func10169.definitionModule = "parser";
  this.methods["sym"].debug = "var";
  setLineNumber(32);    // compilenode identifier
  var var_lastToken = var_sym;
  setLineNumber(1);    // compilenode method
  var func10170 = function(argcv) {    // method lastToken
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    // lastToken is a simple accessor - elide try ... catch
    setLineNumber(32);    // compilenode identifier
    return var_lastToken;
  };
  func10170.paramCounts = [0];
  this.methods["lastToken"] = func10170;
  func10170.definitionLine = 1;
  func10170.definitionModule = "parser";
  setLineNumber(1);    // compilenode method
  var func10171 = function(argcv) {    // method lastToken:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("parser");
    var_lastToken = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func10171.paramCounts = [1];
  this.methods["lastToken:=(1)"] = func10171;
  func10171.definitionLine = 1;
  func10171.definitionModule = "parser";
  this.methods["lastToken"].debug = "var";
  setLineNumber(33);    // compilenode identifier
  var var_previousCommentToken = var_lastToken;
  setLineNumber(1);    // compilenode method
  var func10172 = function(argcv) {    // method previousCommentToken
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    // previousCommentToken is a simple accessor - elide try ... catch
    setLineNumber(33);    // compilenode identifier
    return var_previousCommentToken;
  };
  func10172.paramCounts = [0];
  this.methods["previousCommentToken"] = func10172;
  func10172.definitionLine = 1;
  func10172.definitionModule = "parser";
  setLineNumber(1);    // compilenode method
  var func10173 = function(argcv) {    // method previousCommentToken:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("parser");
    var_previousCommentToken = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func10173.paramCounts = [1];
  this.methods["previousCommentToken:=(1)"] = func10173;
  func10173.definitionLine = 1;
  func10173.definitionModule = "parser";
  this.methods["previousCommentToken"].debug = "var";
  setLineNumber(34);    // compilenode identifier
  var var_statementToken = var_lastToken;
  setLineNumber(1);    // compilenode method
  var func10174 = function(argcv) {    // method statementToken
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    // statementToken is a simple accessor - elide try ... catch
    setLineNumber(34);    // compilenode identifier
    return var_statementToken;
  };
  func10174.paramCounts = [0];
  this.methods["statementToken"] = func10174;
  func10174.definitionLine = 1;
  func10174.definitionModule = "parser";
  setLineNumber(1);    // compilenode method
  var func10175 = function(argcv) {    // method statementToken:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("parser");
    var_statementToken = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func10175.paramCounts = [1];
  this.methods["statementToken:=(1)"] = func10175;
  func10175.definitionLine = 1;
  func10175.definitionModule = "parser";
  this.methods["statementToken"].debug = "var";
  setLineNumber(35);    // compilenode identifier
  var var_comment = GraceFalse;
  setLineNumber(1);    // compilenode method
  var func10176 = function(argcv) {    // method comment
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    // comment is a simple accessor - elide try ... catch
    setLineNumber(35);    // compilenode identifier
    return var_comment;
  };
  func10176.paramCounts = [0];
  this.methods["comment"] = func10176;
  func10176.definitionLine = 1;
  func10176.definitionModule = "parser";
  setLineNumber(1);    // compilenode method
  var func10177 = function(argcv) {    // method comment:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("parser");
    var_comment = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func10177.paramCounts = [1];
  this.methods["comment:=(1)"] = func10177;
  func10177.definitionLine = 1;
  func10177.definitionModule = "parser";
  this.methods["comment"].debug = "var";
  setLineNumber(41);    // compilenode identifier
  var var_firstCallOfNext = GraceTrue;
  setLineNumber(1);    // compilenode method
  var func10178 = function(argcv) {    // method firstCallOfNext
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("parser");
    // firstCallOfNext is a simple accessor - elide try ... catch
    setLineNumber(41);    // compilenode identifier
    return var_firstCallOfNext;
  };
  func10178.paramCounts = [0];
  this.methods["firstCallOfNext"] = func10178;
  func10178.definitionLine = 1;
  func10178.definitionModule = "parser";
  setLineNumber(1);    // compilenode method
  var func10179 = function(argcv) {    // method firstCallOfNext:=(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    setModuleName("parser");
    var_firstCallOfNext = var___95__var__95__assign__95__tmp;
    return GraceDone;
  };
  func10179.paramCounts = [1];
  this.methods["firstCallOfNext:=(1)"] = func10179;
  func10179.definitionLine = 1;
  func10179.definitionModule = "parser";
  this.methods["firstCallOfNext"].debug = "var";
  return this;
}
gracecode_parser.imports = ['ast', 'errormessages', 'io', 'util'];
if (typeof gctCache !== "undefined")
  gctCache['parser'] = "classes:\nconfidential:\nfresh-methods:\nmodules:\n ast\n errormessages\n identifierKinds\n io\n sys\n util\npath:\n parser\npublic:\n accept(1)\n accept(1)onLineOf(1)\n accept(1)onLineOfLastOr(1)\n acceptAfterSpaces(1)\n acceptAfterSpaces(1)onLineOf(1)\n acceptArgumentOnLineOf(1)\n acceptKeyword(1)\n acceptSameLine(1)\n acceptWithoutSpaces(1)\n blank\n block\n callmprest(3)\n callrest(1)\n checkAnnotation(1)\n checkBadOperators\n checkBadTypeLiteral\n checkIndent\n checkUnexpectedTokenAfterStatement\n defdec\n didConsume(1)\n doannotation\n doarray\n doclass\n dodialect\n dofactoryMethod\n doif\n doimport\n domethodtype\n doobject\n doreturn\n dotrest(1)\n dotypeLiteral\n dotypeterm\n expression(1)\n expressionrest(1)recursingWith(1)blocks(1)\n findClosingBrace(2)\n findNextToken(1)\n findNextTokenIndentedAt(1)\n findNextValidToken(1)\n generic\n identifier\n ifConsume(1)then(1)\n inheritsModifier(1)onLineOf(1)\n inheritsOrUses\n matchcase\n methodDecRest(2)\n methoddec\n methodsignature(1)\n newIf(3)\n next\n noteBlank\n oprec(1)\n optionalTypeAnnotation\n parenthesizedArg(1)\n parse(1)\n parseAlias(1)\n parseExclude(1)\n parseObjectConstructorBody(1)startingWith(1)after(1)\n postfixsquare\n prefixop\n pushComments\n pushidentifier\n pushnum\n pushstring\n reconcileComments\n statement\n term\n tokenOnSameLine\n toprec(1)\n trycatch\n typeArg\n typeArgs\n typedec\n typeexpression\n typeexpressionrest\n typeparameters\n valueexpressionrest\n vardec\ntypes:\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["parser"] = [
    "#pragma ExtendedLineups",
    "import \"io\" as io",
    "import \"ast\" as ast",
    "import \"util\" as util",
    "import \"errormessages\" as errormessages",
    "",
    "var blankLocation := 0",
    "var lastLine := 0",
    "var lastIndent := 0",
    "var indentFreePass := false",
    "var minIndentLevel := 0",
    "var statementIndent := 0",
    "var tokens := false",
    "var values := [ ]",
    "var moduleObject",
    "var comments := emptyList   // so we can request `removeAt`",
    "var auto_count := 0",
    "def noBlocks = false",
    "def blocksOK = true",
    "var braceIsType := false",
    "",
    "// sym is a module-level field containing the current token",
    "var sym := object {",
    "    def kind is public = \"start\"",
    "    def line is public = 0",
    "    def linePos is public = 0",
    "    def indent is public = 0",
    "    def value is public = \"\"",
    "    def size is public = 0",
    "}",
    "",
    "var lastToken := sym",
    "var previousCommentToken := lastToken",
    "var statementToken := lastToken     // the token starting the current statement",
    "var comment := false",
    "",
    "method noteBlank {",
    "    blankLocation := sym.line - 1",
    "}",
    "",
    "var firstCallOfNext := true",
    "",
    "method next {",
    "    // Advance to the next token in the stream, assigning it to sym.",
    "    // Put the position in the input into util module variables.",
    "",
    "    if (tokens.size > 0) then {",
    "        lastToken := sym",
    "        lastLine := lastToken.line",
    "        lastIndent := lastToken.indent",
    "        sym := tokens.poll",
    "        if (sym.line > (lastLine + 1)) then { noteBlank }",
    "        pushComments",
    "        util.setPosition(sym.line, sym.linePos)",
    "    } else {",
    "        errormessages.syntaxError(\"unexpectedly found the end of the input. \" ",
    "            ++ \"This is often caused by a missing '\\}'\")",
    "            atRange(sym.line, sym.linePos, sym.linePos)",
    "    }",
    "}",
    "",
    "",
    "method findNextToken(tokenMatcher) {",
    "    // Search for the next token for which the given block returns true.",
    "    // Used for generating suggestions.",
    "",
    "    if (tokenMatcher.apply(sym)) then {",
    "        return sym",
    "    }",
    "    var nextTok := false",
    "    var n := sym",
    "    while {(false != n) && { false == nextTok } && { n.indent >= lastToken.indent }} do {",
    "        if(tokenMatcher.apply(n)) then {",
    "            nextTok := n",
    "        }",
    "        n := n.next",
    "    }",
    "    nextTok",
    "}",
    "",
    "method findNextTokenIndentedAt(tok) {",
    "    if(((sym.line > tok.line) && (sym.indent <= tok.indent)) || (sym.kind == \"eof\")) then {",
    "        return sym",
    "    }",
    "    var nextTok := false",
    "    var n := sym",
    "    while {(false != n) && { false == nextTok }} do {",
    "        if(((n.line > tok.line) && (n.indent <= tok.indent)) || (sym.kind == \"eof\")) then {",
    "            nextTok := n",
    "        }",
    "        n := n.next",
    "    }",
    "    nextTok",
    "}",
    "",
    "method findNextValidToken(validFollowTokens) {",
    "    // Tokens that cannot start an expression.",
    "    def invalidTokens = set [\"dot\", \"comma\", \"colon\", \"rparen\",",
    "            \"rbrace\", \"rsquare\", \"arrow\", \"bind\"];",
    "    var validToken := sym",
    "    while {validToken.kind != \"eof\"} do {",
    "        // If the token is a valid follow token, then return that token.",
    "        if(validFollowTokens.contains(validToken.kind)) then {",
    "            return validToken",
    "        }",
    "        // If the token is not an invalid token for starting an expression, return that token.",
    "        if(!invalidTokens.contains(validToken.kind)) then {",
    "            return validToken",
    "        }",
    "        // The token is invalid, go to the next one.",
    "        validToken := validToken.next",
    "    }",
    "    return validToken",
    "}",
    "",
    "// Finds the closing brace for token (that is the beginning of a control",
    "// structure) -- an opening brace. Returns an object with two fields: found",
    "// and tok. If a closing brace is found, found is set to true, and tok is set to",
    "// the closing brace. Otherwise found is set to false, and tok is set to the",
    "// token that the closing brace should appear after.",
    "method findClosingBrace(token, inserted) {",
    "    var n := sym",
    "    var numOpening := if(inserted) then {1} else {0}",
    "    var numClosing := 0",
    "    def result = object {",
    "        var found is public",
    "        var tok is public",
    "    }",
    "    // Skip all tokens on the same line first.",
    "    while {(n.kind != \"eof\") && (n.line == token.line)} do {",
    "        if(n.kind == \"lbrace\") then { numOpening := numOpening + 1 }",
    "        elseif { n.kind == \"rbrace\" } then { numClosing := numClosing + 1 }",
    "        n := n.next",
    "    }",
    "    // Skip all tokens that have greater indent than the target closing brace.",
    "    while {(n.kind != \"eof\") && (n.indent > token.indent)} do {",
    "        if (n.kind == \"lbrace\") then {",
    "            numOpening := numOpening + 1",
    "        } elseif { n.kind == \"rbrace\" } then {",
    "            numClosing := numClosing + 1 ",
    "        }",
    "        n := n.next",
    "    }",
    "    if (n.kind == \"rbrace\") then {",
    "        result.found := true",
    "        result.tok := n",
    "    } elseif {(n.prev.kind == \"rbrace\") && (numOpening == numClosing)} then {",
    "        // Check that the number of opening and closing braces matches.",
    "        result.found := true",
    "        result.tok := n.prev",
    "    } else {",
    "        result.found := false",
    "        result.tok := n.prev",
    "    }",
    "    result",
    "}",
    "",
    "",
    "method accept(t) {",
    "    // True if the current token has kind t, where",
    "    // t is \"num\", \"string\", \"method\", etc.",
    "    sym.kind == t",
    "}",
    "",
    "method acceptKeyword (kw) {",
    "    if (sym.kind != \"keyword\") then { return false }",
    "    return sym.value == kw",
    "}",
    "",
    "method acceptSameLine (t) {",
    "    // True if the current token is a t, and it is on the same logical",
    "    // line (either because it's on the same physical line, or because",
    "    // it's on an indented continuation line).",
    "",
    "    (sym.kind == t) && ",
    "        ((lastLine == sym.line) || (sym.indent > lastIndent))",
    "}",
    "method acceptWithoutSpaces (t) {",
    "    // True if the current token is a t, and follows the previous token",
    "    // without any intervening spaces or continuation lines.",
    "",
    "    (sym.kind == t) && ",
    "        (lastLine == sym.line) && (sym.linePos == (lastToken.linePos + lastToken.size))",
    "}",
    "method acceptAfterSpaces (t) {",
    "    // True if the current token is a t, and is separated from the previous token",
    "    // by one or more spaces, or a continuation line.",
    "",
    "    if (sym.kind != t) then { return false }",
    "    if (lastLine == sym.line) then {",
    "        return sym.linePos != (lastToken.linePos + lastToken.size)",
    "    }",
    "    return sym.linePos == (sym.indent + 1)",
    "}",
    "method accept (t) onLineOf (other) {",
    "    // True if the current token is a t, and it is on the same logical",
    "    // line as other (either because it's on the same physical",
    "    // line, or because it's on an indented continuation line).",
    "    (sym.kind == t) && ((other.line == sym.line) ||",
    "        (sym.indent > other.indent))",
    "}",
    "method acceptAfterSpaces (t) onLineOf (other) {",
    "    // True if the current token is a t, is on the same logical line as other,",
    "    // and is separated from the previous token by one or more spaces, ",
    "    // or a continuation line.",
    "",
    "    if (sym.kind != t) then { return false }",
    "    if (sym.line == other.line) then {",
    "        return sym.linePos != (lastToken.linePos + lastToken.size)",
    "    } else {",
    "        return sym.linePos == (sym.indent + 1)",
    "    }",
    "}",
    "method accept (t) onLineOfLastOr (other) {",
    "    // True if the current token is a t, and it is on the same logical",
    "    // line as the last token, or the other token.",
    "    (sym.kind == t) && (((other.line == sym.line) ||",
    "        (sym.indent > other.indent)) || (lastToken.line == sym.line))",
    "}",
    "method acceptArgumentOnLineOf(tok) {",
    "    // True if the current token can start an argument to a request",
    "    if (accept \"string\" onLineOf(tok)) then { return true }",
    "    if (accept \"num\" onLineOf(tok)) then { return true }",
    "    if (accept \"lbrace\" onLineOf(tok)) then { return true }",
    "    if (acceptAfterSpaces \"lsquare\" onLineOf(tok)) then { return true }",
    "    if (accept \"identifier\" onLineOf(tok)) then { ",
    "        return (sym.value == \"true\") || (sym.value == \"false\")",
    "    }",
    "    return false",
    "}",
    "method tokenOnSameLine {",
    "    // True if there is a token on the current logical line",
    "    (lastLine == sym.line) || (sym.indent > lastIndent)",
    "}",
    "method didConsume(aParsingBlock) {",
    "    // True if executing aParsingBlock consumes at least one token.",
    "    var sz := tokens.size",
    "    aParsingBlock.apply",
    "    tokens.size != sz",
    "}",
    "method ifConsume(ablock)then(tblock) {",
    "    // If ablock consumes at least one token, execute tblock.",
    "    var sz := tokens.size",
    "    ablock.apply",
    "    if (tokens.size != sz) then {",
    "        tblock.apply",
    "    }",
    "}",
    "",
    "// Push the current token onto the output stack as a number",
    "method pushnum {",
    "    var o := ast.numNode.new(sym.value)",
    "    values.push(o)",
    "    next",
    "}",
    "",
    "// Push the current token onto the output stack as a string",
    "method pushstring {",
    "    var o := ast.stringNode.new(sym.value)",
    "    values.push(o)",
    "    next",
    "}",
    "",
    "// Push the current token onto the output stack as an identifier.",
    "// false means that this identifier has not been assigned a dtype (yet).",
    "method pushidentifier {",
    "    util.setPosition(sym.line, sym.linePos)",
    "    var o := ast.identifierNode.new(sym.value, false)",
    "    if (o.value == \"_\") then {",
    "        o.value := \"__\" ++ auto_count",
    "        o.wildcard := true",
    "        auto_count := auto_count + 1",
    "    }",
    "    values.push(o)",
    "    next",
    "}",
    "",
    "method checkAnnotation(ann) {",
    "    if (ann.kind == \"call\") then {",
    "        for (ann.with) do {p->",
    "            for (p.args) do {a->",
    "                if ((a.kind == \"identifier\") && {false != a.dtype}) then {",
    "                    var tok := sym",
    "                    // Look back from the current token to try and find the tokens that cause this error.",
    "                    while {tok.value != \":\"} do { tok := tok.prev }",
    "                    def suggestion = errormessages.suggestion.new",
    "                    suggestion.deleteTokenRange(tok, tok.next)leading(true)trailing(false)",
    "                    errormessages.syntaxError(\"an argument to an annotation cannot have a type.\")atRange(",
    "                        tok.line, tok.linePos, tok.next.linePos + tok.next.size - 1)withSuggestion(suggestion)",
    "                }",
    "            }",
    "        }",
    "    }",
    "    ann",
    "}",
    "method doannotation {",
    "    if (acceptKeyword \"is\" .not) then {",
    "        return false",
    "    }",
    "    next",
    "    def anns = [ ]",
    "    if(didConsume({expression(noBlocks)}).not) then {",
    "        def suggestions = [ ]",
    "        var suggestion := errormessages.suggestion.new",
    "        def nextTok = findNextValidToken( [\"bind\"] )",
    "        if(nextTok == sym) then {",
    "            suggestion.insert(\" «annotation»\")afterToken(lastToken)",
    "        } else {",
    "            suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\" «annotation»\")",
    "        }",
    "        suggestions.push(suggestion)",
    "        suggestion := errormessages.suggestion.new",
    "        suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)",
    "        suggestions.push(suggestion)",
    "        errormessages.syntaxError(\"one or more annotations separated by commas must follow 'is'.\")",
    "            atRange(lastToken.line, lastToken.linePos + lastToken.size + 1)",
    "            withSuggestions(suggestions)",
    "    }",
    "    while {accept(\"comma\")} do {",
    "        anns.push(checkAnnotation(values.pop))",
    "        next",
    "        if(didConsume({expression(noBlocks)}).not) then {",
    "            def suggestions = [ ]",
    "            var suggestion := errormessages.suggestion.new",
    "            def nextTok = findNextValidToken( [\"bind\"] )",
    "            if(nextTok == sym) then {",
    "                suggestion.insert(\" «annotation»\")afterToken(lastToken)",
    "            } else {",
    "                suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\" «annotation»\")",
    "            }",
    "            suggestions.push(suggestion)",
    "            suggestion := errormessages.suggestion.new",
    "            suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)",
    "            suggestions.push(suggestion)",
    "            errormessages.syntaxError(\"one or more annotations separated by commas must follow 'is'.\")",
    "                atRange(lastToken.line, lastToken.linePos + lastToken.size + 1)",
    "                withSuggestions(suggestions)",
    "        }",
    "    }",
    "    anns.push(checkAnnotation(values.pop))",
    "    anns",
    "}",
    "",
    "method blank {",
    "    if (blankLocation == 0) then {",
    "        if ( sym.line <= (lastToken.line + 1) ) then { return }",
    "        if ( sym.line <= (previousCommentToken.line + 1) ) then { return }",
    "    }",
    "    pushComments",
    "    if ((values.size == 0) || ",
    "            ((values.size > 0) && { values.last.kind != \"blank\" })) then {",
    "        if (blankLocation > 0) then {",
    "            util.setPosition(blankLocation, 0)",
    "            blankLocation := 0",
    "        } else {",
    "            util.setPosition(sym.line - 1, 0)",
    "        }",
    "        values.push(ast.blankNode.new)",
    "    }",
    "}",
    "",
    "method dotypeterm {",
    "    if (accept \"identifier\") then {",
    "        pushidentifier",
    "        generic",
    "        dotrest(noBlocks)",
    "    } else {",
    "        if (acceptKeyword \"type\") then {",
    "            dotypeLiteral",
    "        }",
    "    }",
    "}",
    "",
    "method typeexpression {",
    "    var sz := values.size",
    "    if (accept \"lparen\") then {",
    "        def prevStatementToken = statementToken",
    "        statementToken := sym",
    "        next",
    "        if(didConsume({typeexpression}).not) then {",
    "            def suggestion = errormessages.suggestion.new",
    "            def nextTok = findNextValidToken( [\"rparen\"] )",
    "            if (nextTok == sym) then {",
    "                suggestion.insert(\"«type expression»\")afterToken(lastToken)",
    "            } else {",
    "                suggestion.replaceTokenRange(sym, nextTok.prev) leading (true)",
    "                    trailing(false) with \"«type expression»\"",
    "            }",
    "            errormessages.syntaxError \"parentheses must contain a valid type expression.\"",
    "                atPosition(sym.line, sym.linePos) withSuggestion(suggestion)",
    "        }",
    "        if(sym.kind != \"rparen\") then {",
    "            checkBadOperators",
    "            def suggestion = errormessages.suggestion.new",
    "            suggestion.insert(\")\")afterToken(lastToken)",
    "            errormessages.syntaxError \"a type expression beginning with a '(' must end with a ')'.\"",
    "                atRange(lastToken.line, lastToken.linePos + lastToken.size)",
    "                withSuggestion(suggestion)",
    "        }",
    "        statementToken := prevStatementToken",
    "        next",
    "    } else {",
    "        dotypeterm",
    "    }",
    "    if (values.size > sz) then {",
    "        dotrest(noBlocks)",
    "        typeexpressionrest",
    "    }",
    "    // TODO: check that the expression doesn't contain requests or var references.",
    "    // This has to happen in the identifier resolution phase.",
    "}",
    "",
    "method newIf(cond, thenList, elseList) {",
    "    def thenBlock = ast.blockNode.new(emptySequence, thenList)",
    "    def elseBlock = ast.blockNode.new(emptySequence, elseList)",
    "    ast.ifNode.new(cond, thenBlock, elseBlock)",
    "}",
    "",
    "method block {",
    "    // parse a block",
    "    if (accept \"lbrace\") then {",
    "        def btok = sym",
    "        next",
    "        var minInd := statementIndent + 2",
    "        var startIndent := statementIndent",
    "        var expr1",
    "        var s := sym",
    "        var tmp",
    "        var params := [ ]",
    "        var body := [ ]",
    "        var havearrow := true",
    "        var found := false",
    "        var i := 0",
    "        var isMatchingBlock := false",
    "        statementToken := sym",
    "        if (sym.kind == \"lparen\") then {",
    "            isMatchingBlock := true",
    "        }",
    "        // Parsing the expression ‹(a)› will return an identifierNode‹a› .",
    "        // The paren lets us distinguish parameter ‹a› from pattern ‹(a)› .",
    "        ifConsume {expression(blocksOK)} then {",
    "            if (accept(\"comma\") || accept(\"arrow\") || accept(\"colon\")) then {",
    "                // This block has parameters or patterns",
    "                expr1 := values.pop",
    "                if (accept \"colon\") then {",
    "                    // We allow an expression here for the case of v : T",
    "                    // patterns, where T may be \"Pair(hd, tl)\" or similar.",
    "                    next",
    "                    braceIsType := true",
    "                    if(didConsume({expression(blocksOK)}).not) then {",
    "                        def suggestions = [ ]",
    "                        var suggestion := errormessages.suggestion.new",
    "                        def nextTok = findNextValidToken( [\"arrow\", \"rbrace\"] )",
    "                        if(nextTok == sym) then {",
    "                            suggestion.insert(\" «expression»\")afterToken(lastToken)",
    "                        } else {",
    "                            suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\" «expression»\")",
    "                        }",
    "                        suggestions.push(suggestion)",
    "                        suggestion := errormessages.suggestion.new",
    "                        suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)",
    "                        suggestions.push(suggestion)",
    "                        errormessages.syntaxError(\"a block must have an expression after the ':'.\")",
    "                            atPosition(sym.line, sym.linePos)",
    "                            withSuggestions(suggestions)",
    "                    }",
    "                    braceIsType := false",
    "                    expr1.dtype := values.pop",
    "                }",
    "                params.push(expr1)",
    "                if (isMatchingBlock.not && expr1.isIdentifier) then {",
    "                    expr1.isBindingOccurrence := true",
    "                } else {",
    "                    isMatchingBlock := true",
    "                }",
    "                if (isMatchingBlock && {accept(\"comma\")}) then {",
    "                    def suggestions = [ ]",
    "                    var suggestion",
    "                    def arrow = findNextToken({ t -> t.kind == \"arrow\" })",
    "                    if(false != arrow) then {",
    "                        suggestion := errormessages.suggestion.new",
    "                        suggestion.deleteTokenRange(sym, arrow.prev)",
    "                        suggestions.push(suggestion)",
    "                    }",
    "                    suggestion := errormessages.suggestion.new",
    "                    suggestion.replaceToken(sym)leading(true)trailing(false)with(\" |\")",
    "                    suggestions.push(suggestion)",
    "                    errormessages.syntaxError(\"a matching block may only have one parameter.\")atRange(",
    "                        sym.line, sym.linePos, sym.linePos)withSuggestions(suggestions)",
    "                }",
    "                while {accept(\"comma\")} do {",
    "                    // Keep doing the above for the rest of the parameters.",
    "                    next",
    "                    pushidentifier",
    "                    expr1 := values.pop",
    "                    expr1.isBindingOccurrence := true",
    "                    expr1.dtype := optionalTypeAnnotation",
    "                    params.push(expr1)",
    "                }",
    "                if ((accept(\"arrow\")).not) then {",
    "                    def suggestion = errormessages.suggestion.new",
    "                    if((sym.kind == \"bind\") || (sym.value == \"=\")) then {",
    "                        suggestion.replaceToken(sym)with(\"->\")",
    "                    } else {",
    "                        suggestion.insert(\" ->\")afterToken(lastToken)",
    "                    }",
    "                    errormessages.syntaxError(\"a block must have one or more parameters followed by '->' and an expression.\")",
    "                        atPosition(sym.line, sym.linePos) withSuggestion(suggestion)",
    "                }",
    "                next",
    "            } elseif { accept \"semicolon\" } then {",
    "                body.push(values.pop)",
    "                next",
    "                if (accept \"semicolon\") then {",
    "                    next",
    "                    if (sym.line == lastToken.line) then {",
    "                        indentFreePass := true",
    "                    }",
    "                }",
    "            } elseif { ((values.last.kind == \"member\")",
    "                        || (values.last.kind == \"identifier\")",
    "                        || (values.last.kind == \"index\"))",
    "                        && accept(\"bind\") } then {",
    "                var lhs := values.pop",
    "                next",
    "                if(didConsume({expression(blocksOK)}).not) then {",
    "                    def suggestions = [ ]",
    "                    var suggestion := errormessages.suggestion.new",
    "                    def nextTok = findNextValidToken( [\"rbrace\"] )",
    "                    if(nextTok == sym) then {",
    "                        suggestion.insert(\" «expression»\")afterToken(lastToken)",
    "                    } else {",
    "                        suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\" «expression»\")",
    "                    }",
    "                    suggestions.push(suggestion)",
    "                    suggestion := errormessages.suggestion.new",
    "                    suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)",
    "                    suggestions.push(suggestion)",
    "                    errormessages.syntaxError(\"a valid expression must follow ':='.\")",
    "                        atPosition(sym.line, sym.linePos) withSuggestions(suggestions)",
    "                }",
    "                var rhs := values.pop",
    "                util.setPosition(btok.line, btok.linePos)",
    "                body.push(ast.bindNode.new(lhs, rhs))",
    "                if (accept \"semicolon\") then {",
    "                    next",
    "                    if (sym.line == lastToken.line) then {",
    "                        indentFreePass := true",
    "                    }",
    "                }",
    "            } else {",
    "                checkUnexpectedTokenAfterStatement",
    "                body.push(values.pop)",
    "            }",
    "        }",
    "        if (accept \"arrow\") then {",
    "            next",
    "        }",
    "        if (sym.line == lastToken.line) then {",
    "            minIndentLevel := sym.linePos - 1",
    "        } else {",
    "            minIndentLevel := minInd",
    "        }",
    "        while {(accept(\"rbrace\")).not} do {",
    "            // Take the body of the block",
    "            if(didConsume({statement}).not) then {",
    "                def suggestion = errormessages.suggestion.new",
    "                suggestion.insert(\"}\")afterToken(lastToken)",
    "                errormessages.syntaxError(\"a block must end with a '}'.\")",
    "                    atPosition(sym.line, sym.linePos) withSuggestion(suggestion)",
    "            }",
    "            tmp := values.pop",
    "            body.push(tmp)",
    "        }",
    "        minIndentLevel := minInd - 2",
    "        statementIndent := startIndent",
    "        next",
    "        util.setPosition(btok.line, btok.linePos)",
    "        var o := ast.blockNode.new(params, body)",
    "        if (isMatchingBlock) then {",
    "            if (params.size > 0) then {",
    "                o.matchingPattern := params.first",
    "            }",
    "        }",
    "        values.push(o)",
    "    }",
    "}",
    "",
    "// Accept an \"if\" statement. This is a special syntactic case, rather",
    "// than just a call with a multi-part method name - it might be possible",
    "// to change that and compensate later on.",
    "method doif {",
    "    if (accept(\"identifier\") && (sym.value == \"if\")) then {",
    "        def btok = sym",
    "        next",
    "        def opener = if ((sym.kind == \"lparen\") || {sym.kind == \"lbrace\"})",
    "                        then { sym.value } else { \"-missing-\" }",
    "        def closer = if (opener == \"(\") then { \")\" }",
    "                        else { if (opener == \"\\{\") then { \"\\}\" } else { \"-nothing-\" } }",
    "        if (opener == \"-missing-\") then {",
    "            def suggestion = errormessages.suggestion.new",
    "            // Look ahead for a rparen or then.",
    "            def nextTok = findNextToken({ t -> (t.line == btok.line)",
    "                && ((t.kind == \"rparen\") || (t.kind == \"rbrace\") || (t.kind == \"lbrace\")",
    "                || ((t.kind == \"identifier\") && (t.value == \"then\"))) })",
    "            if (false == nextTok) then {",
    "                suggestion.insert(\" («condition») then \\{\")afterToken(btok)",
    "            } elseif { nextTok.kind == \"rparen\" } then {",
    "                if(nextTok == sym) then {",
    "                    suggestion.insert(\"(«condition»\")beforeToken(sym)",
    "                } else {",
    "                    suggestion.insert(\"(\")beforeToken(sym)",
    "                }",
    "            } elseif { nextTok.kind == \"lbrace\" } then {",
    "                if(nextTok == sym) then {",
    "                    suggestion.insert(\" («condition») then\")afterToken(btok)",
    "                } else {",
    "                    suggestion.insert(\"(\")beforeToken(sym)",
    "                    suggestion.insert(\") then\")afterToken(nextTok.prev)andTrailingSpace(true)",
    "                }",
    "            } elseif { nextTok.kind == \"identifier\" } then {",
    "                if(nextTok == sym) then {",
    "                    suggestion.insert(\"(«condition») \")beforeToken(sym)",
    "                } else {",
    "                    suggestion.insert(\"(\")beforeToken(sym)",
    "                    suggestion.insert(\")\")afterToken(nextTok.prev)andTrailingSpace(true)",
    "                }",
    "            }",
    "            errormessages.syntaxError(\"an if statement must have a condition \" ++",
    "                \"in parentheses or braces after the 'if'.\")",
    "                atPosition(sym.line, sym.linePos) withSuggestion(suggestion)",
    "        }",
    "        next",
    "        if (didConsume({expression(blocksOK)}).not) then {",
    "            def suggestion = errormessages.suggestion.new",
    "            // Look ahead for a rparen.",
    "            var nextTok := findNextToken({ t -> (t.line == lastToken.line) && (t.kind == \"rparen\") })",
    "            if (false == nextTok) then {",
    "                nextTok := findNextValidToken( [\"rparen\"] )",
    "                if(nextTok == sym) then {",
    "                    suggestion.insert(\"«expression») then \\{\")afterToken(lastToken)",
    "                } else {",
    "                    suggestion.replaceTokenRange(sym, nextTok.prev)",
    "                          leading(true)trailing(false)with(\"«expression») then \\{\")",
    "                }",
    "                errormessages.syntaxError(\"an if statement must have a \" ++",
    "                      \"condition in parentheses or braces after the 'if'.\")",
    "                      atPosition(sym.line, sym.linePos)",
    "                      withSuggestion(suggestion)",
    "            } else {",
    "                if(nextTok == sym) then {",
    "                    suggestion.insert(\"«expression»\")afterToken(lastToken)",
    "                    errormessages.syntaxError(\"an if statement must have a \" ++",
    "                        \"condition in parentheses or braces after the 'if'.\")",
    "                        atPosition(sym.line, sym.linePos)",
    "                        withSuggestion(suggestion)",
    "                } else {",
    "                    suggestion.replaceTokenRange(sym, nextTok.prev)",
    "                        leading(false)trailing(true)with(\"«expression»\")",
    "                    errormessages.syntaxError(\"an if statement must have a \" ++",
    "                        \"condition in parentheses or braces after the 'if'.\")",
    "                        atRange(sym.line, sym.linePos, nextTok.linePos - 1)",
    "                        withSuggestion(suggestion)",
    "                }",
    "            }",
    "        }",
    "        if (sym.value != closer) then {",
    "            checkBadOperators",
    "            def suggestion = errormessages.suggestion.new",
    "            suggestion.insert(\")\")afterToken(lastToken)",
    "            errormessages.syntaxError(\"an expression beginning with a \"++",
    "                  \"'{opener}' must end with a '{closer}'.\")",
    "                  atPosition(lastToken.line, lastToken.linePos + lastToken.size)",
    "                  withSuggestion(suggestion)",
    "        }",
    "        next",
    "        var cond := values.pop",
    "        var body := []",
    "",
    "        // These two are for else/elseif handling. elseif is turned into",
    "        // nested if statements for the AST, so curelse points to the",
    "        // most deeply-nested of those (where any eventual \"else\" block's",
    "        // statements will go). elseblock contains the statements of the",
    "        // top-level \"else\" block - if there are any elseifs, that",
    "        // consists of only one statement, another if.",
    "        var elseblock := []",
    "        var curelse := elseblock",
    "        var v",
    "        def localMin = minIndentLevel",
    "        def localStatementIndent = statementIndent",
    "        var minInd := statementIndent + 2",
    "        if (accept(\"identifier\") && (sym.value == \"then\")) then {",
    "            next",
    "            if(sym.kind != \"lbrace\") then {",
    "                def suggestion = errormessages.suggestion.new",
    "                def closingBrace = findClosingBrace(btok, true)",
    "                if (closingBrace.found.not) then {",
    "                    if(closingBrace.tok == lastToken) then {",
    "                        suggestion.replaceToken(lastToken)leading(false)trailing(true)with(\"then \\{}\")",
    "                    } else {",
    "                        suggestion.addLine(closingBrace.tok.line + 0.1, \"}\")",
    "                        suggestion.replaceToken(lastToken)leading(false)trailing(true)with(\"then \\{\")",
    "                    }",
    "                } else {",
    "                    suggestion.replaceToken(lastToken)leading(false)trailing(true)with(\"then \\{\")",
    "                }",
    "                errormessages.syntaxError(\"an if statement must have a '\\{' after the 'then'.\")atPosition(",
    "                    lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)",
    "            }",
    "            next",
    "            if (sym.line == lastToken.line) then {",
    "                minIndentLevel := sym.linePos - 1",
    "            } else {",
    "                minIndentLevel := minInd",
    "            }",
    "            while {(accept(\"rbrace\")).not} do {",
    "                if(didConsume({statement}).not) then {",
    "                    def suggestion = errormessages.suggestion.new",
    "                    def closingBrace = findClosingBrace(btok, false)",
    "                    if (closingBrace.found.not) then {",
    "                        if(closingBrace.tok == lastToken) then {",
    "                            suggestion.insert(\"}\")afterToken(lastToken)",
    "                        } else {",
    "                            suggestion.addLine(closingBrace.tok.line + 0.1, \"}\")",
    "                        }",
    "                    }",
    "                    suggestion.deleteToken(sym)",
    "                    errormessages.syntaxError(\"an if statement must end with a '}'.\")atPosition(",
    "                        sym.line, sym.linePos)withSuggestion(suggestion)",
    "                }",
    "                v := values.pop",
    "                body.push(v)",
    "            }",
    "            next",
    "            var econd",
    "            var eif",
    "            var newelse",
    "            var ebody",
    "            while {accept(\"identifier\") && (sym.value == \"elseif\")} do {",
    "                // Currently, the parser just accepts arbitrarily many",
    "                // \"elseifs\", turning them into ifs inside the else.",
    "                // TODO: allow blocks after elseif to contain a sequence of expressions.",
    "                statementToken := sym",
    "                next",
    "                def elopener = if ((sym.kind == \"lparen\") || {sym.kind == \"lbrace\"})",
    "                                then { sym.value } else { \"-missing-\" }",
    "                def elcloser = if (elopener == \"(\") then { \")\" }",
    "                                else { if (elopener == \"\\{\") then { \"\\}\" } else { \"-nothing-\" } }",
    "                if (elopener == \"-missing-\") then {",
    "                    def suggestion = errormessages.suggestion.new",
    "                    // Look ahead for a rparen or then.",
    "                    def nextTok = findNextToken({ t -> (t.line == statementToken.line)",
    "                        && ((t.kind == \"rparen\") || (t.kind == \"rbrace\") || (t.kind == \"lbrace\")",
    "                        || ((t.kind == \"identifier\") && (t.value == \"then\"))) })",
    "                    if(false == nextTok) then {",
    "                        suggestion.insert(\" («expression») then \\{\")afterToken(statementToken)",
    "                    } elseif { nextTok.kind == \"rparen\" } then {",
    "                        if(nextTok == sym) then {",
    "                            suggestion.insert(\"(«expression»\")beforeToken(sym)",
    "                        } else {",
    "                            suggestion.insert(\"(\")beforeToken(sym)",
    "                        }",
    "                    } elseif { nextTok.kind == \"lbrace\" } then {",
    "                        if(nextTok == sym) then {",
    "                            suggestion.insert(\" («expression») then\")afterToken(statementToken)",
    "                        } else {",
    "                            suggestion.insert(\"(\")beforeToken(sym)",
    "                            suggestion.insert(\") then\")afterToken(nextTok.prev)andTrailingSpace(true)",
    "                        }",
    "                    } elseif { nextTok.kind == \"identifier\" } then {",
    "                        if(nextTok == sym) then {",
    "                            suggestion.insert(\"(«expression») \")beforeToken(sym)",
    "                        } else {",
    "                            suggestion.insert(\"(\")beforeToken(sym)",
    "                            suggestion.insert(\")\")afterToken(nextTok.prev)andTrailingSpace(true)",
    "                        }",
    "                    }",
    "                    errormessages.syntaxError(\"an elseif statement must have a \" ++",
    "                          \"condition in parentheses or braces after the 'elseif'.\")",
    "                          atPosition(sym.line, sym.linePos)",
    "                          withSuggestion(suggestion)",
    "                }",
    "                next",
    "                if(didConsume({expression(blocksOK)}).not) then {",
    "                    def suggestion = errormessages.suggestion.new",
    "                    // Look ahead for a rparen or then.",
    "                    var nextTok := findNextToken({ t -> (t.line == lastToken.line) && ",
    "                        ((t.kind == \"rparen\") || (t.kind == \"rbrace\"))})",
    "                    if(false == nextTok) then {",
    "                        nextTok := findNextValidToken( [\"rparen\"] )",
    "                        if(nextTok == sym) then {",
    "                            suggestion.insert(\"«expression») then \\{\")afterToken(lastToken)",
    "                        } else {",
    "                            suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\"«expression») then \\{\")",
    "                        }",
    "                        errormessages.syntaxError(\"an elseif statement must have an expression in parentheses or braces after the 'elseif'.\")atPosition(",
    "                            sym.line, sym.linePos)withSuggestion(suggestion)",
    "                    } else {",
    "                        if(nextTok == sym) then {",
    "                            suggestion.insert(\"«expression»\")afterToken(lastToken)",
    "                            errormessages.syntaxError(\"an elseif statement must have an expression in parentheses or braces after the 'elseif'.\")atPosition(",
    "                                sym.line, sym.linePos)withSuggestion(suggestion)",
    "                        } else {",
    "                            //checkInvalidExpression",
    "                            suggestion.replaceTokenRange(sym, nextTok.prev)leading(false)trailing(true)with(\"«expression»\")",
    "                            errormessages.syntaxError(\"4: An elseif statement must have an expression in parentheses or braces after the 'elseif'.\")atRange(",
    "                                sym.line, sym.linePos, nextTok.linePos - 1)withSuggestion(suggestion)",
    "                        }",
    "                    }",
    "                }",
    "                if(sym.value != elcloser) then {",
    "                    checkBadOperators",
    "                    def suggestion = errormessages.suggestion.new",
    "                    suggestion.insert(\")\")afterToken(lastToken)",
    "                    errormessages.syntaxError(\"an expression beginning with a \" ++",
    "                        \"'{elopener}' must end with a '{elcloser}'.\")",
    "                        atPosition(lastToken.line, lastToken.linePos + lastToken.size)",
    "                        withSuggestion(suggestion)",
    "                }",
    "                next",
    "                econd := values.pop",
    "                if ((accept(\"identifier\") &&",
    "                    (sym.value == \"then\"))) then {",
    "                    next",
    "                    ebody := []",
    "                } else {",
    "                    def suggestion = errormessages.suggestion.new",
    "                    if(sym.kind == \"lbrace\") then {",
    "                        def closingBrace = findClosingBrace(statementToken, false)",
    "                        if(closingBrace.found.not) then {",
    "                            if(closingBrace.tok == sym) then {",
    "                                suggestion.replaceToken(sym)leading(true)trailing(false)with(\" then \\{}\")",
    "                            } else {",
    "                                suggestion.replaceToken(sym)leading(true)trailing(false)with(\" then \\{\")",
    "                                suggestion.addLine(closingBrace.tok.line + 0.1, \"}\")",
    "                            }",
    "                        } else {",
    "                            suggestion.replaceToken(sym)leading(true)trailing(false)with(\" then \\{\")",
    "                        }",
    "                    } else {",
    "                        def closingBrace = findClosingBrace(statementToken, true)",
    "                        if(closingBrace.found.not) then {",
    "                            if(closingBrace.tok == lastToken) then {",
    "                                suggestion.insert(\" then \\{}\")afterToken(lastToken)",
    "                            } else {",
    "                                suggestion.insert(\" then \\{\")afterToken(lastToken)",
    "                                suggestion.addLine(closingBrace.tok.line + 0.1, \"}\")",
    "                            }",
    "                        } else {",
    "                            suggestion.insert(\" then \\{\")afterToken(lastToken)",
    "                        }",
    "                    }",
    "                    errormessages.syntaxError(\"an elseif statement must have 'then' after the expression in parentheses.\")atPosition(",
    "                        sym.line, sym.linePos)withSuggestion(suggestion)",
    "                }",
    "                if(sym.kind != \"lbrace\") then {",
    "                    def suggestion = errormessages.suggestion.new",
    "                    def closingBrace = findClosingBrace(btok, true)",
    "                    if(closingBrace.found.not) then {",
    "                        if(closingBrace.tok == lastToken) then {",
    "                            suggestion.replaceToken(lastToken)leading(false)trailing(true)with(\"then \\{}\")",
    "                        } else {",
    "                            suggestion.addLine(closingBrace.tok.line + 0.1, \"}\")",
    "                            suggestion.replaceToken(lastToken)leading(false)trailing(true)with(\"then \\{\")",
    "                        }",
    "                    } else {",
    "                        suggestion.replaceToken(lastToken)leading(false)trailing(true)with(\"then \\{\")",
    "                    }",
    "                    errormessages.syntaxError(\"an elseif statement must have a '\\{' after the 'then'.\")atPosition(",
    "                        lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)",
    "                }",
    "                next",
    "                if (sym.line == lastToken.line) then {",
    "                    minIndentLevel := sym.linePos - 1",
    "                } else {",
    "                    minIndentLevel := minInd",
    "                }",
    "                while {(accept(\"rbrace\")).not} do {",
    "                    if(didConsume({statement}).not) then {",
    "                        def suggestion = errormessages.suggestion.new",
    "                        def closingBrace = findClosingBrace(btok, false)",
    "                        if(closingBrace.found.not) then {",
    "                            if(closingBrace.tok == lastToken) then {",
    "                                suggestion.insert(\"}\")afterToken(lastToken)",
    "                            } else {",
    "                                suggestion.addLine(closingBrace.tok.line + 0.1, \"}\")",
    "                            }",
    "                        }",
    "                        suggestion.deleteToken(sym)",
    "                        errormessages.syntaxError(\"an elseif statement must end with a '}'.\")atPosition(",
    "                            sym.line, sym.linePos)withSuggestion(suggestion)",
    "                    }",
    "                    v := values.pop",
    "                    ebody.push(v)",
    "                }",
    "                next",
    "                newelse := []",
    "                eif := newIf(econd, ebody, newelse)",
    "                // Construct the inner \"if\" AST node, and then push it",
    "                // inside the current \"else\" block.",
    "                curelse.push(eif)",
    "                // Update curelse to point to the new, empty, nested",
    "                // else block.",
    "                curelse := newelse",
    "            }",
    "            if (accept(\"identifier\") && (sym.value == \"else\")) then {",
    "                next",
    "                if(sym.kind != \"lbrace\") then {",
    "                    def suggestion = errormessages.suggestion.new",
    "                    def closingBrace = findClosingBrace(btok, true)",
    "                    if(closingBrace.found.not) then {",
    "                        if(closingBrace.tok == lastToken) then {",
    "                            suggestion.replaceToken(lastToken)leading(false)trailing(true)with(\"else \\{}\")",
    "                        } else {",
    "                            suggestion.addLine(closingBrace.tok.line + 0.1, \"}\")",
    "                            suggestion.replaceToken(lastToken)leading(false)trailing(true)with(\"else \\{\")",
    "                        }",
    "                    } else {",
    "                        suggestion.replaceToken(lastToken)leading(false)trailing(true)with(\"else \\{\")",
    "                    }",
    "                    errormessages.syntaxError(\"an else statement must have a '\\{' after the 'else'.\")atPosition(",
    "                        lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)",
    "                }",
    "                next",
    "                // Just take all the statements and put them into",
    "                // curelse.",
    "                if (sym.line == lastToken.line) then {",
    "                    minIndentLevel := sym.linePos - 1",
    "                } else {",
    "                    minIndentLevel := minInd",
    "                }",
    "                while {(accept(\"rbrace\")).not} do {",
    "                    if(didConsume({statement}).not) then {",
    "                        def suggestion = errormessages.suggestion.new",
    "                        def closingBrace = findClosingBrace(btok, false)",
    "                        if(closingBrace.found.not) then {",
    "                            if(closingBrace.tok == lastToken) then {",
    "                                suggestion.insert(\"}\")afterToken(lastToken)",
    "                            } else {",
    "                                suggestion.addLine(closingBrace.tok.line + 0.1, \"}\")",
    "                            }",
    "                        }",
    "                        suggestion.deleteToken(sym)",
    "                        errormessages.syntaxError(\"an else statement must end with a '}'.\")atPosition(",
    "                            sym.line, sym.linePos)withSuggestion(suggestion)",
    "                    }",
    "                    v := values.pop",
    "                    curelse.push(v)",
    "                }",
    "                next",
    "            }",
    "            util.setPosition(btok.line, btok.linePos)",
    "            var o := newIf(cond, body, elseblock)",
    "            values.push(o)",
    "        } else {",
    "            // Raise an error here, or it will spin nastily forever.",
    "            def suggestion = errormessages.suggestion.new",
    "            if(sym.kind == \"lbrace\") then {",
    "                def closingBrace = findClosingBrace(btok, false)",
    "                if(closingBrace.found.not) then {",
    "                    if(closingBrace.tok == sym) then {",
    "                        suggestion.replaceToken(sym)leading(true)trailing(false)with(\" then \\{}\")",
    "                    } else {",
    "                        suggestion.replaceToken(sym)leading(true)trailing(false)with(\" then \\{\")",
    "                        suggestion.addLine(closingBrace.tok.line + 0.1, \"}\")",
    "                    }",
    "                } else {",
    "                    suggestion.replaceToken(sym)leading(true)trailing(false)with(\" then \\{\")",
    "                }",
    "            } else {",
    "                def closingBrace = findClosingBrace(btok, true)",
    "                if(closingBrace.found.not) then {",
    "                    if(closingBrace.tok == lastToken) then {",
    "                        suggestion.insert(\" then \\{}\")afterToken(lastToken)",
    "                    } else {",
    "                        suggestion.insert(\" then \\{\")afterToken(lastToken)",
    "                        suggestion.addLine(closingBrace.tok.line + 0.1, \"}\")",
    "                    }",
    "                } else {",
    "                    suggestion.insert(\" then \\{\")afterToken(lastToken)",
    "                }",
    "            }",
    "            errormessages.syntaxError(\"an if statement must have 'then' after \" ++",
    "                  \"the condition in parentheses.\")",
    "                  atPosition(sym.line, sym.linePos) withSuggestion(suggestion)",
    "        }",
    "        minIndentLevel := localMin",
    "        statementIndent := localStatementIndent",
    "    }",
    "}",
    "",
    "// Accept an identifier. Handle \"if\" specially by",
    "// passing it to the method above.",
    "method identifier {",
    "    if (accept \"identifier\") then {",
    "        if (sym.value == \"if\") then {",
    "            doif",
    "        } else {",
    "            pushidentifier",
    "        }",
    "    }",
    "}",
    "",
    "method prefixop {",
    "    if (accept \"op\") then {",
    "        var op := sym.value",
    "        next",
    "        if (accept \"lparen\") then {",
    "            next",
    "            if(didConsume({expression(blocksOK)}).not) then {",
    "                def suggestion = errormessages.suggestion.new",
    "                def nextTok = findNextValidToken( [\"rparen\"] )",
    "                if(nextTok == sym) then {",
    "                    suggestion.insert(\"«expression»\")afterToken(lastToken)",
    "                } else {",
    "                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\"«expression»\")",
    "                }",
    "                errormessages.syntaxError(\"parentheses must contain a valid expression.\")atPosition(",
    "                    sym.line, sym.linePos)withSuggestion(suggestion)",
    "            }",
    "            if(sym.kind != \"rparen\") then {",
    "                checkBadOperators",
    "                def suggestion = errormessages.suggestion.new",
    "                suggestion.insert(\")\")afterToken(lastToken)",
    "                errormessages.syntaxError(\"an expression beginning with a '(' must end with a ')'.\")atPosition(",
    "                    lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)",
    "            }",
    "            next",
    "        } else {",
    "            if(didConsume({term}).not) then {",
    "                def suggestions = [ ]",
    "                var suggestion := errormessages.suggestion.new",
    "                def nextTok = findNextValidToken( [\"rparen\"] )",
    "                if(nextTok == sym) then {",
    "                    suggestion.insert(\"«expression»\")afterToken(lastToken)",
    "                } else {",
    "                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\"«expression»\")",
    "                }",
    "                suggestions.push(suggestion)",
    "                if(lastToken.prev.kind == \"bind\") then {",
    "                    suggestion := errormessages.suggestion.new",
    "                    suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)",
    "                    suggestion.deleteToken(lastToken.prev)leading(true)trailing(false)",
    "                    suggestions.push(suggestion)",
    "                }",
    "                errormessages.syntaxError(\"a prefix operator must be followed by an expression.\")atPosition(",
    "                    lastToken.line, lastToken.linePos + lastToken.size)withSuggestions(suggestions)",
    "            }",
    "        }",
    "        dotrest(blocksOK)",
    "        callrest(blocksOK)",
    "        postfixsquare",
    "        def rcvr = values.pop",
    "        def call = ast.callNode.new(rcvr,",
    "            [ ast.requestPart.request(\"prefix\" ++ op) withArgs( [] ) ] )",
    "        values.push(call)",
    "    }",
    "}",
    "",
    "method generic {",
    "    if (accept \"lgeneric\") then {",
    "        def id = values.pop",
    "        def gens = [ ]",
    "        def startToken = sym",
    "        next",
    "        while {accept(\"identifier\")} do {",
    "            identifier",
    "            while {accept(\"dot\")} do {",
    "                next",
    "                def memberIn = values.pop",
    "                if(sym.kind != \"identifier\") then {",
    "                    def suggestions = [ ]",
    "                    var suggestion := errormessages.suggestion.new",
    "                    suggestion.insert(\"«type name»\")afterToken(lastToken)",
    "                    suggestions.push(suggestion)",
    "                    suggestion := errormessages.suggestion.new",
    "                    suggestion.deleteToken(lastToken)",
    "                    suggestions.push(suggestion)",
    "                    errormessages.syntaxError(\"a type name must follow the '.'.\")atPosition(",
    "                        lastToken.line, lastToken.linePos + 1)withSuggestions(suggestions)",
    "                }",
    "                identifier",
    "                def memberName = values.pop",
    "                def memberNd = ast.memberNode.new(memberName.value, memberIn)",
    "                memberNd.line := memberName.line",
    "                memberNd.linePos := memberName.linePos",
    "                values.push(memberNd)",
    "            }",
    "            generic",
    "            gens.push(values.pop)",
    "            if (accept \"comma\") then {",
    "                next",
    "            } else {",
    "                if(sym.kind != \"rgeneric\") then {",
    "                    def suggestion = errormessages.suggestion.new",
    "                    suggestion.insert(\">\")afterToken(lastToken)",
    "                    def suggestion2 = errormessages.suggestion.new",
    "                    suggestion2.insert(\" \")beforeToken(startToken)",
    "                    def suggestions = [suggestion, suggestion2]",
    "                    errormessages.syntaxError(\"a type containing a '<' must end with a '>', or the '<' operator must have a space before it.\")atPosition(",
    "                            lastToken.line, lastToken.linePos + lastToken.size)",
    "                        withSuggestions(suggestions)",
    "                }",
    "            }",
    "        }",
    "        if(sym.kind != \"rgeneric\") then {",
    "            def suggestion = errormessages.suggestion.new",
    "            suggestion.insert(\">\")afterToken(lastToken)",
    "            def suggestion2 = errormessages.suggestion.new",
    "            suggestion2.insert(\" \")beforeToken(startToken)",
    "            def suggestions = [suggestion, suggestion2]",
    "            errormessages.syntaxError(\"a type containing a '<' must end with a '>', or the '<' operator must have a space before it.\")atPosition(",
    "                    lastToken.line, lastToken.linePos + lastToken.size)",
    "                withSuggestions(suggestions)",
    "        }",
    "        next",
    "        values.push(ast.genericNode.new(id, gens))",
    "    }",
    "}",
    "method trycatch {",
    "    if (!(accept(\"identifier\") && (sym.value == \"try\"))) then {",
    "        return 0",
    "    }",
    "    def localmin = minIndentLevel",
    "    def catchTok = sym",
    "    next",
    "    if (accept \"lbrace\") then {",
    "        block",
    "    } else {",
    "        if(sym.kind != \"lparen\") then {",
    "            def suggestion = errormessages.suggestion.new",
    "            // Look ahead for a rbrace, rparen, or catch.",
    "            def nextTok = findNextToken({ t -> (t.kind == \"rbrace\")",
    "                || ((t.kind == \"rparen\") && (t.line == catchTok.line))",
    "                || ((t.kind == \"identifier\") && (t.value == \"catch\")) })",
    "            if(false == nextTok) then {",
    "                suggestion.insert(\" \\{}\")afterToken(catchTok)",
    "            } elseif { nextTok.kind == \"rbrace\" } then {",
    "                suggestion.insert(\" \\{\")afterToken(catchTok)",
    "            } elseif { nextTok.kind == \"rparen\" } then {",
    "                if(nextTok == sym) then {",
    "                    suggestion.insert(\"(«expression»\")afterToken(lastToken)andTrailingSpace(true)",
    "                } else {",
    "                    suggestion.insert(\"(\")afterToken(lastToken)andTrailingSpace(true)",
    "                }",
    "            } elseif { nextTok.kind == \"identifier\" } then {",
    "                suggestion.insert(\" \\{\")afterToken(catchTok)",
    "                suggestion.insert(\"\\} \")beforeToken(nextTok)",
    "            }",
    "            errormessages.syntaxError(\"a catch statement must have either a block or an expression in parentheses after the 'catch'.\")atPosition(",
    "                catchTok.line, catchTok.linePos + catchTok.size + 1)withSuggestion(suggestion)",
    "        }",
    "        next",
    "        if(didConsume({expression(blocksOK)}).not) then {",
    "            def suggestion = errormessages.suggestion.new",
    "            def nextTok = findNextValidToken( [\"rparen\"] )",
    "            if(nextTok == sym) then {",
    "                suggestion.insert(\"«expression»\")afterToken(lastToken)",
    "            } else {",
    "                suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\"«expression»\")",
    "            }",
    "            errormessages.syntaxError(\"a catch statement must have either a block or an expression in parentheses after the 'catch'.\")atPosition(",
    "                sym.line, sym.linePos)withSuggestion(suggestion)",
    "        }",
    "        if(sym.kind != \"rparen\") then {",
    "            checkBadOperators",
    "            def suggestion = errormessages.suggestion.new",
    "            suggestion.insert(\")\")afterToken(lastToken)",
    "            errormessages.syntaxError(\"an expression beginning with a '(' must end with a ')'.\")atPosition(",
    "                lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)",
    "        }",
    "        next",
    "    }",
    "    def mainblock = values.pop",
    "    def cases = []",
    "    var finally := false",
    "    while {accept(\"identifier\") && (sym.value == \"catch\")} do {",
    "        next",
    "        if (accept \"lbrace\") then {",
    "            block",
    "        } elseif { accept \"lparen\" } then {",
    "            next",
    "            if(didConsume({expression(blocksOK)}).not) then {",
    "                def suggestion = errormessages.suggestion.new",
    "                def nextTok = findNextValidToken( [\"rparen\"] )",
    "                if(nextTok == sym) then {",
    "                    suggestion.insert(\"«expression»\")afterToken(lastToken)",
    "                } else {",
    "                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\"«expression»\")",
    "                }",
    "                errormessages.syntaxError(\"a try-catch statement must have either a matching block or an expression in parentheses after the 'catch'.\")atPosition(",
    "                    sym.line, sym.linePos)withSuggestion(suggestion)",
    "            }",
    "            if(sym.kind != \"rparen\") then {",
    "                checkBadOperators",
    "                def suggestion = errormessages.suggestion.new",
    "                suggestion.insert(\")\")afterToken(lastToken)",
    "                errormessages.syntaxError(\"an expression beginning with a '(' must end with a ')'.\")atPosition(",
    "                    lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)",
    "            }",
    "            next",
    "        } else {",
    "            def suggestions = [ ]",
    "            def nextTok = findNextTokenIndentedAt(lastToken)",
    "            var suggestion := errormessages.suggestion.new",
    "            if(false == nextTok) then {",
    "                suggestion.insert(\" }\")afterToken(tokens.last)",
    "                suggestion.insert(\" \\{\")afterToken(lastToken)",
    "                suggestions.push(suggestion)",
    "            } elseif { nextTok == sym } then {",
    "                suggestion.insert(\" («expression»)\")afterToken(lastToken)",
    "                suggestions.push(suggestion)",
    "                suggestion := errormessages.suggestion.new",
    "                suggestion.insert(\" \\{ «match expression» }\")afterToken(lastToken)",
    "                suggestions.push(suggestion)",
    "            } else {",
    "                suggestion.insert(\" }\")afterToken(nextTok.prev)",
    "                suggestion.insert(\" \\{\")afterToken(lastToken)",
    "                suggestions.push(suggestion)",
    "            }",
    "            errormessages.syntaxError(\"a try-catch statement must have either a matching block or an expression in parentheses after the 'catch'.\")atPosition(",
    "                sym.line, sym.linePos)withSuggestions(suggestions)",
    "        }",
    "        cases.push(values.pop)",
    "    }",
    "    if (accept(\"identifier\")onLineOf(catchTok) && (sym.value == \"case\")) then {",
    "        def suggestion = errormessages.suggestion.new",
    "        suggestion.replaceToken(sym)with(\"catch\")",
    "        errormessages.syntaxError(\"a try-catch statement starts with a \"",
    "                ++ \"'try' and then zero or more 'catch' blocks; there \"",
    "                ++ \"are no 'case' blocks.\")",
    "            atRange(sym.line, sym.linePos, sym.linePos + 3)",
    "            withSuggestion(suggestion)",
    "    }",
    "    if (accept(\"identifier\") && (sym.value == \"finally\")) then {",
    "        next",
    "        if (accept \"lbrace\") then {",
    "            block",
    "        } elseif { accept \"lparen\" } then {",
    "            next",
    "            if(didConsume({expression(blocksOK)}).not) then {",
    "                def suggestion = errormessages.suggestion.new",
    "                def nextTok = findNextValidToken( [\"rparen\"] )",
    "                if(nextTok == sym) then {",
    "                    suggestion.insert(\"«expression»\")afterToken(lastToken)",
    "                } else {",
    "                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\"«expression»\")",
    "                }",
    "                errormessages.syntaxError(\"a catch statement must have either a block or an expression in parentheses after the 'finally'.\")atPosition(",
    "                    sym.line, sym.linePos)withSuggestion(suggestion)",
    "            }",
    "            if(sym.kind != \"rparen\") then {",
    "                checkBadOperators",
    "                def suggestion = errormessages.suggestion.new",
    "                suggestion.insert(\")\")afterToken(lastToken)",
    "                errormessages.syntaxError(\"an expression beginning with a '(' must end with a ')'.\")atPosition(",
    "                    lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)",
    "            }",
    "            next",
    "        } else {",
    "            def suggestions = [ ]",
    "            def nextTok = findNextTokenIndentedAt(lastToken)",
    "            var suggestion := errormessages.suggestion.new",
    "            if(false == nextTok) then {",
    "                suggestion.insert(\" }\")afterToken(tokens.first)",
    "                suggestion.insert(\" \\{\")afterToken(lastToken)",
    "                suggestions.push(suggestion)",
    "            } elseif { nextTok == sym } then {",
    "                suggestion.insert(\" («expression»)\")afterToken(lastToken)",
    "                suggestions.push(suggestion)",
    "                suggestion := errormessages.suggestion.new",
    "                suggestion.insert(\" \\{ «expression» }\")afterToken(lastToken)",
    "                suggestions.push(suggestion)",
    "            } else {",
    "                suggestion.insert(\" }\")afterToken(nextTok.prev)",
    "                suggestion.insert(\" \\{\")afterToken(lastToken)",
    "                suggestions.push(suggestion)",
    "            }",
    "            errormessages.syntaxError(\"a try-finally statement must have either a block or an expression in parentheses after the 'finally'.\")atPosition(",
    "                sym.line, sym.linePos)withSuggestions(suggestions)",
    "        }",
    "        finally := values.pop",
    "    }",
    "    util.setPosition(catchTok.line, catchTok.linePos)",
    "    values.push(ast.tryCatchNode.new(mainblock, cases, finally))",
    "    minIndentLevel := localmin",
    "}",
    "method matchcase {",
    "    if (!(accept(\"identifier\") && (sym.value == \"match\"))) then {",
    "        return 0",
    "    }",
    "    def localmin = minIndentLevel",
    "    def matchTok = sym",
    "    next",
    "    if(sym.kind != \"lparen\") then {",
    "        def suggestion = errormessages.suggestion.new",
    "        // Look ahead for a rparen or case.",
    "        def nextTok = findNextToken({ t -> ((t.kind == \"rparen\") && (t.line == matchTok.line))",
    "            || ((t.kind == \"identifier\") && (t.value == \"case\")) })",
    "        if(false == nextTok) then {",
    "            suggestion.insert(\"(«expression»)\")afterToken(matchTok)",
    "        } elseif { nextTok.kind == \"rparen\" } then {",
    "            if(nextTok == sym) then {",
    "                suggestion.insert(\"(«expression»\")beforeToken(sym)",
    "            } else {",
    "                suggestion.insert(\"(\")beforeToken(sym)",
    "            }",
    "        } elseif { nextTok.kind == \"identifier\" } then {",
    "            suggestion.insert(\"(\")beforeToken(sym)",
    "            suggestion.insert(\")\")afterToken(nextTok.prev)andTrailingSpace(true)",
    "        }",
    "        errormessages.syntaxError(\"a match statement must have an expression in parentheses after the 'match'.\")atPosition(",
    "            matchTok.line, matchTok.linePos + matchTok.size)withSuggestion(suggestion)",
    "    }",
    "    next",
    "    if(didConsume({expression(blocksOK)}).not) then {",
    "        def suggestion = errormessages.suggestion.new",
    "        def nextTok = findNextValidToken( [\"rparen\"] )",
    "        if(nextTok == sym) then {",
    "            suggestion.insert(\"«expression»\")afterToken(lastToken)",
    "        } else {",
    "            suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\"«expression»\")",
    "        }",
    "        errormessages.syntaxError(\"a match statement must have an expression in parentheses after the 'match'.\")atPosition(",
    "            sym.line, sym.linePos)withSuggestion(suggestion)",
    "    }",
    "    def matchee = values.pop",
    "    if(sym.kind != \"rparen\") then {",
    "        checkBadOperators",
    "        def suggestion = errormessages.suggestion.new",
    "        suggestion.insert(\")\")afterToken(lastToken)",
    "        errormessages.syntaxError(\"an expression beginning with a '(' must end with a ')'.\")atPosition(",
    "            lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)",
    "    }",
    "    next",
    "    def cases = []",
    "    var elsecase := false",
    "    while {accept(\"identifier\") && (sym.value == \"case\")} do {",
    "        next",
    "        if (accept \"lbrace\") then {",
    "            block",
    "        } elseif { accept \"lparen\" } then {",
    "            next",
    "            if(didConsume({expression(blocksOK)}).not) then {",
    "                def suggestion = errormessages.suggestion.new",
    "                def nextTok = findNextValidToken( [\"rparen\"] )",
    "                if(nextTok == sym) then {",
    "                    suggestion.insert(\"«expression»\")afterToken(lastToken)",
    "                } else {",
    "                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\"«expression»\")",
    "                }",
    "                errormessages.syntaxError(\"a match statement must have either a matching block or an expression in parentheses after the 'case'.\")atPosition(",
    "                    sym.line, sym.linePos)withSuggestion(suggestion)",
    "            }",
    "            if(sym.kind != \"rparen\") then {",
    "                checkBadOperators",
    "                def suggestion = errormessages.suggestion.new",
    "                suggestion.insert(\")\")afterToken(lastToken)",
    "                errormessages.syntaxError(\"an expression beginning with a '(' must end with a ')'.\")atPosition(",
    "                    lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)",
    "            }",
    "            next",
    "        } else {",
    "            def suggestions = [ ]",
    "            def nextTok = findNextTokenIndentedAt(lastToken)",
    "            var suggestion := errormessages.suggestion.new",
    "            if(false == nextTok) then {",
    "                suggestion.insert(\" }\")afterToken(tokens.last)",
    "                suggestion.insert(\" \\{\")afterToken(lastToken)",
    "                suggestions.push(suggestion)",
    "            } elseif { nextTok == sym } then {",
    "                suggestion.insert(\" («expression»)\")afterToken(lastToken)",
    "                suggestions.push(suggestion)",
    "                suggestion := errormessages.suggestion.new",
    "                suggestion.insert(\" \\{ «match expression» }\")afterToken(lastToken)",
    "                suggestions.push(suggestion)",
    "            } else {",
    "                suggestion.insert(\" }\")afterToken(nextTok.prev)",
    "                suggestion.insert(\" \\{\")afterToken(lastToken)",
    "                suggestions.push(suggestion)",
    "            }",
    "            errormessages.syntaxError(\"a match statement must have either a matching block or an expression in parentheses after the 'case'.\")atPosition(",
    "                sym.line, sym.linePos)withSuggestions(suggestions)",
    "        }",
    "        cases.push(values.pop)",
    "    }",
    "    util.setPosition(matchTok.line, matchTok.linePos)",
    "    values.push(ast.matchCaseNode.new(matchee, cases, elsecase))",
    "    minIndentLevel := localmin",
    "}",
    "// Accept a term. Terms consist only of single syntactic units and",
    "// do not contain any operators or parentheses, unlike expression.",
    "method term {",
    "    util.setPosition(sym.line, sym.linePos)",
    "    if (accept \"num\") then {",
    "        pushnum",
    "    } elseif { accept \"string\" } then {",
    "        pushstring",
    "    } elseif { accept \"identifier\" && (sym.value == \"match\") } then {",
    "        matchcase",
    "    } elseif { accept(\"identifier\") && (sym.value == \"try\") } then {",
    "        trycatch",
    "    } elseif { accept \"identifier\" } then {",
    "        identifier",
    "    } elseif { acceptKeyword \"object\" } then {",
    "        doobject",
    "    } elseif { acceptKeyword \"type\" } then {",
    "        dotypeLiteral",
    "    } elseif { accept \"lbrace\" } then {",
    "        block",
    "    } elseif { acceptAfterSpaces \"lsquare\" } then {",
    "        doarray",
    "    } elseif { (lastToken.kind != \"identifier\") && (accept \"lsquare\") } then {",
    "        doarray",
    "    } elseif { accept \"op\" } then {",
    "        // Prefix operator",
    "        prefixop",
    "    }",
    "}",
    "",
    "// Accept an expression. Expressions may consist of parenthesised",
    "// subexpressions or terms, which may be followed by method invocations",
    "// (dotrest), postcircumfix square brackets, the rest of a method call,",
    "// or an operator expression.",
    "method expression(acceptBlocks) {",
    "    var sz := values.size",
    "    util.setPosition(sym.line, sym.linePos)",
    "    if (accept \"lparen\") then {",
    "        def tmpStatementToken = statementToken",
    "        statementToken := sym",
    "        util.setPosition(sym.line, sym.linePos)",
    "        next",
    "        if (didConsume{expression(acceptBlocks)}.not) then {",
    "            def suggestion = errormessages.suggestion.new",
    "            def nextTok = findNextValidToken( [\"rparen\"] )",
    "            if(nextTok == sym) then {",
    "                suggestion.insert(\"«expression»\")afterToken(lastToken)",
    "            } else {",
    "                suggestion.replaceTokenRange(sym, nextTok.prev)",
    "                      leading(true)trailing(false)with(\"«expression»\")",
    "            }",
    "            errormessages.syntaxError(\"parentheses must contain a valid expression.\")atPosition(",
    "                sym.line, sym.linePos)withSuggestion(suggestion)",
    "        }",
    "        if(sym.kind != \"rparen\") then {",
    "            checkBadOperators",
    "            def suggestion = errormessages.suggestion.new",
    "            suggestion.insert(\")\")afterToken(lastToken)",
    "            errormessages.syntaxError(\"an expression beginning with a '(' must end with a ')'.\")",
    "                  atPosition(lastToken.line, lastToken.linePos + lastToken.size)",
    "                  withSuggestion(suggestion)",
    "        }",
    "        statementToken := tmpStatementToken",
    "        next",
    "    } else {",
    "        term",
    "    }",
    "    if (values.size > sz) then {",
    "        dotrest(acceptBlocks)",
    "        callrest(acceptBlocks)",
    "        postfixsquare",
    "        valueexpressionrest",
    "    }",
    "}",
    "",
    "// Accept postcircumfix square brackets (as in x[y]) and replace the",
    "// preceding expression with an index node into itself.",
    "method postfixsquare {",
    "    if (acceptWithoutSpaces(\"lsquare\")) then {",
    "        def opening = sym",
    "        next",
    "        def expr = values.pop",
    "        if(didConsume({expression(blocksOK)}).not) then {",
    "            def suggestions = [ ]",
    "            var suggestion := errormessages.suggestion.new",
    "            def nextTok = findNextValidToken( [\"rsquare\"] )",
    "            if(nextTok == sym) then {",
    "                suggestion.insert(\"«index»\")afterToken(lastToken)",
    "            } else {",
    "                suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\"«index»\")",
    "            }",
    "            suggestions.push(suggestion)",
    "            if(nextTok.kind == \"rsquare\") then {",
    "                suggestion := errormessages.suggestion.new",
    "                suggestion.deleteTokenRange(lastToken, nextTok)leading(true)trailing(false)",
    "                suggestions.push(suggestion)",
    "            }",
    "            errormessages.syntaxError(\"a '[' in an expression must be followed by another expression and a ']'.\")atPosition(",
    "                sym.line, sym.linePos)withSuggestions(suggestions)",
    "        }",
    "        if(sym.kind != \"rsquare\") then {",
    "            def suggestion = errormessages.suggestion.new",
    "            suggestion.insert(\"]\")afterToken(lastToken)",
    "            errormessages.syntaxError(\"a '[' in an expression must be followed by another expression and a ']'.\")atPosition(",
    "                lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)",
    "        }",
    "        errormessages.syntaxError(\"'[ ... ]' without preceeding space is no longer part of Grace. \" ++",
    "            \"For a Lineup, add a space.  For an indexing operation, use `at(_)` or `at(_)put(_)`.\")",
    "                atPosition(opening.line, opening.linePos)",
    "    }",
    "}",
    "",
    "// Calculate the precedence of an operator. In this case, only",
    "// multiplication and division have nontrivial precedence. Used in",
    "// expressionrest.",
    "method oprec(o) {",
    "    if (o == \"*\") then {",
    "        return 10",
    "    } elseif { o == \"/\" } then {",
    "        return 10",
    "    }",
    "    return 5",
    "}",
    "",
    "// Return the precedence of the operator at the top of the \"ops\" stack.",
    "method toprec(ops) {",
    "    if (ops.size > 0) then {",
    "        var o := ops.last",
    "        return oprec(o)",
    "    }",
    "    0",
    "}",
    "",
    "",
    "method typeexpressionrest {",
    "    if (acceptSameLine(\"op\")) then {",
    "        expressionrest \"type expression\" recursingWith {typeexpression} blocks (noBlocks)",
    "    }",
    "}",
    "",
    "method valueexpressionrest {",
    "    if (accept \"op\") then {",
    "        expressionrest \"expression\" recursingWith {expression(blocksOK)} blocks (blocksOK)",
    "    }",
    "}",
    "",
    "method expressionrest(name) recursingWith (recurse) blocks (acceptBlocks) {",
    "    // Process the rest of an operator expression using the shunting-yard",
    "    // algorithm. This method uses the oprec and toprec methods above to",
    "    // ensure the correct precedence, and treats all operators as",
    "    // left-associative.  It is parametrised so that it",
    "    // can be used for both type- and value- expressions.",
    "    var terms := [] // List of operands yet to be used",
    "    var ops := [] // Operator stack",
    "    var o",
    "    var o2",
    "    var tmp2",
    "    var tmp := values.pop",
    "    terms.push(tmp)",
    "    var prec",
    "    var allarith := true // Consists only of arithmetic operators",
    "    var opcount := 0",
    "    var opdtype := \"\" // The single operator being used in this expression",
    "    while {accept(\"op\")onLineOfLastOr(statementToken) && ",
    "            {sym.value != \"=\"}} do {",
    "        opcount := opcount + 1",
    "        o := sym.value",
    "        next",
    "        prec := oprec(o)",
    "        if ((o != \"*\") && (o != \"/\") && (o != \"+\") && (o != \"-\")) then {",
    "            allarith := false",
    "        }",
    "        if ((opdtype != \"\") && (opdtype != o) && (allarith.not)) then {",
    "            // If: this is not the first operator, it is not the same",
    "            // as the last operator, and the expression has not been",
    "            // entirely arithmetic, raise a syntax error.",
    "            def suggestions = [ ]",
    "            var suggestion := errormessages.suggestion.new",
    "            suggestion.insert(\")\")afterToken(sym)",
    "            suggestion.insert(\"(\")beforeToken(lastToken.prev)",
    "            suggestions.push(suggestion)",
    "            suggestion := errormessages.suggestion.new",
    "            suggestion.insert(\")\")afterToken(lastToken.prev)",
    "            suggestion.insert(\"(\")beforeToken(lastToken.prev.prev.prev)",
    "            suggestions.push(suggestion)",
    "            errormessages.syntaxError(\"an expression containing both arithmetic and non-arithmetic operators requires parentheses.\")atPosition(",
    "                lastToken.prev.line, lastToken.prev.linePos)withSuggestions(suggestions)",
    "        }",
    "        opdtype := o",
    "        while {(ops.size > 0) && (prec <= toprec(ops))} do {",
    "            // Do the shunting: for as long as the current operator",
    "            // has lesser or equal precedence than the one on the",
    "            // top of the stack, take the operator off the stack and",
    "            // replace its two operands with the combined operator node.",
    "            // This corresponds to left-associative operators only.",
    "            o2 := ops.pop",
    "            tmp2 := terms.pop",
    "            tmp := terms.pop",
    "            util.setPosition(tmp.line, tmp.linePos)",
    "            tmp := ast.opNode.new(o2, tmp, tmp2)",
    "            terms.push(tmp)",
    "        }",
    "        ops.push(o)",
    "        if (accept \"lparen\") then {",
    "            // When a parenthesis is found, take an expression from",
    "            // *within* the parentheses and add it to the stack. Do",
    "            // not delegate entirely to expression, because it will",
    "            // then consume all the following operators and break",
    "            // precedence. Possibly parenthesised expressions could",
    "            // be allowed in term above?",
    "            next",
    "            if(didConsume(recurse).not) then {",
    "                def suggestion = errormessages.suggestion.new",
    "                def nextTok = findNextValidToken( [\"rparen\"] )",
    "                if(nextTok == sym) then {",
    "                    suggestion.insert(\"«{name}»\")afterToken(lastToken)",
    "                } else {",
    "                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\"«{name}»\")",
    "                }",
    "                errormessages.syntaxError(\"parentheses must contain a valid {name}.\")atPosition(",
    "                    sym.line, sym.linePos)withSuggestion(suggestion)",
    "            }",
    "            if(sym.kind != \"rparen\") then {",
    "                checkBadOperators",
    "                def suggestion = errormessages.suggestion.new",
    "                suggestion.insert(\")\")afterToken(lastToken)",
    "                errormessages.syntaxError(\"an expression beginning with a '(' must end with a ')'.\")atPosition(",
    "                    lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)",
    "            }",
    "            next",
    "        } else {",
    "            if (!tokenOnSameLine) then {",
    "                def suggestions = [ ]",
    "                var suggestion := errormessages.suggestion.new",
    "                suggestion.deleteToken(lastToken)leading(true)trailing(false)",
    "                suggestions.push(suggestion)",
    "                suggestion := errormessages.suggestion.new",
    "                suggestion.insert(\" «{name}»\")afterToken(lastToken)",
    "                suggestions.push(suggestion)",
    "                suggestion := errormessages.suggestion.new",
    "                suggestion.insert(\" \" ++ util.lines.at(sym.line))afterToken(lastToken)",
    "                suggestion.deleteLine(sym.line)",
    "                suggestions.push(suggestion)",
    "                errormessages.syntaxError(\"a valid expression must follow '{lastToken.value}'. This is often caused by a new line in the middle of an expression.\")atPosition(",
    "                    lastToken.line, lastToken.linePos + lastToken.size)withSuggestions(suggestions)",
    "            }",
    "            if(didConsume({term}).not) then {",
    "                def suggestions = [ ]",
    "                var suggestion := errormessages.suggestion.new",
    "                def nextTok = findNextValidToken( [\"comma\", \"rparen\", \"rsquare\", \"rbrace\"] )",
    "                if(nextTok == sym) then {",
    "                    suggestion.insert(\" «{name}»\")afterToken(lastToken)",
    "                } else {",
    "                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\" «{name}»\")",
    "                }",
    "                suggestions.push(suggestion)",
    "                suggestion := errormessages.suggestion.new",
    "                suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)",
    "                suggestions.push(suggestion)",
    "                errormessages.syntaxError(\"a valid {name} must follow '{lastToken.value}'. This is often caused by a new line in the middle of an expression.\")atPosition(",
    "                    lastToken.line, lastToken.linePos + lastToken.size)withSuggestions(suggestions)",
    "            }",
    "        }",
    "",
    "        // Regardless of where the last value came from, it may have",
    "        // method invocations, indexes, or method call happening to it,",
    "        // which should be applied and the result put into the operands",
    "        // list.",
    "        dotrest(acceptBlocks)",
    "        callrest(acceptBlocks)",
    "        postfixsquare",
    "        tmp := values.pop",
    "        terms.push(tmp)",
    "    }",
    "    while {ops.size > 0} do {",
    "        // Shunt off any remaining operators at the end",
    "        o := ops.pop",
    "        tmp2 := terms.pop",
    "        tmp := terms.pop",
    "        util.setPosition(tmp.line, tmp.linePos)",
    "        tmp := ast.opNode.new(o, tmp, tmp2)",
    "        terms.push(tmp)",
    "    }",
    "    tmp := terms.pop",
    "    values.push(tmp)",
    "    if (terms.size > 0) then {",
    "        errormessages.syntaxError(\"values left on term stack.\")atPosition(sym.line, sym.linePos)",
    "    }",
    "}",
    "",
    "// Accept a member lookup with \".\". This consumes the dot and",
    "// a following identifier, and will pass along to further lookups or",
    "// method calls on the result.",
    "method dotrest(acceptBlocks) {",
    "    if (acceptSameLine(\"dot\")) then {",
    "        util.setPosition(sym.line, sym.linePos)",
    "        var lookuptarget := values.pop",
    "        next",
    "        if (accept \"identifier\") then {",
    "            util.setPosition(sym.line, sym.linePos)",
    "            var dro := ast.memberNode.new(sym.value, lookuptarget)",
    "            values.push(dro)",
    "            next",
    "            if (accept \"dot\") then {",
    "                dotrest(acceptBlocks)",
    "            } elseif { accept \"lparen\" || (acceptBlocks && accept \"lbrace\")",
    "                  || accept(\"num\") || accept(\"string\") || accept(\"lsquare\")",
    "                  || accept(\"lgeneric\") } then {",
    "                callrest(acceptBlocks)",
    "            }",
    "        } else {",
    "            def suggestions = [ ]",
    "            var suggestion := errormessages.suggestion.new",
    "            suggestion.deleteToken(lastToken)",
    "            suggestions.push(suggestion)",
    "            suggestion := errormessages.suggestion.new",
    "            suggestion.insert(\"«method name»\")afterToken(lastToken)",
    "            suggestions.push(suggestion)",
    "            errormessages.syntaxError(\"a field or method name must follow a '.'.\")atPosition(",
    "                sym.line, sym.linePos)withSuggestions(suggestions)",
    "        }",
    "    }",
    "}",
    "",
    "// Accept a method invocation indicated by parentheses. Unparenthesised",
    "// method calls are left as \"member\" AST nodes and processed correctly at",
    "// a later stage.",
    "method callrest(acceptBlocks) {",
    "    if (values.size == 0) then {",
    "        return 0",
    "    }",
    "    var meth := values.pop",
    "    if (meth.kind != \"identifier\") then {",
    "        if (meth.kind != \"member\") then {",
    "            values.push(meth)",
    "            return 0",
    "        }",
    "    }",
    "    def lnum = meth.line",
    "    def lpos = meth.linePos",
    "    var methn := meth.nameString",
    "    def btok = sym",
    "    util.setPosition(sym.line, sym.linePos)",
    "    var signature := []",
    "    var part := ast.requestPart.new",
    "    signature.push(part)",
    "    var hadcall := false",
    "    var tok := lastToken",
    "    var startInd := minIndentLevel",
    "    var genericIdents := false",
    "    if (acceptSameLine \"lgeneric\") then {",
    "        genericIdents := typeArgs",
    "    }",
    "    if (acceptSameLine(\"lparen\")) then {",
    "        part.line := sym.line",
    "        part.linePos := sym.linePos",
    "        part.name := methn",
    "        tok := sym",
    "        hadcall := true",
    "        parenthesizedArg(part)",
    "    } elseif { acceptBlocks.not && {accept(\"lbrace\")onLineOf(tok)} } then {",
    "        values.push(meth)",
    "    } elseif { acceptArgumentOnLineOf(tok) } then {",
    "        tok := sym",
    "        hadcall := true",
    "        part.name := methn",
    "        term",
    "        var ar := values.pop",
    "        part.args.push(ar)",
    "    } elseif { meth.kind == \"identifier\" } then {",
    "        values.push(meth)",
    "    } elseif { meth.kind == \"member\" } then {",
    "        var root := meth.receiver",
    "        var outroot := meth",
    "        while {root.kind == \"member\"} do {",
    "            outroot := root",
    "            root := root.receiver",
    "        }",
    "        if (root.kind == \"identifier\") then {",
    "            values.push(meth)",
    "        } else {",
    "            meth.generics := genericIdents",
    "            values.push(meth)",
    "        }",
    "    }",
    "    if (hadcall) then {",
    "        if (accept(\"identifier\")onLineOfLastOr(tok)) then {",
    "            // Multi-part method name",
    "            def meth' = ast.identifierNode.new(methn, false)",
    "            meth'.line := lnum",
    "            meth'.linePos := lpos",
    "            methn := callmprest(meth', signature, tok)",
    "            if (meth.kind == \"member\") then {",
    "                // callmprest loses this information, so restore",
    "                // the member lookup (for x.between(3)and(10)-type",
    "                // calls).",
    "                meth := ast.memberNode.new(methn.value, meth.receiver)",
    "                meth.line := methn.line",
    "                meth.linePos := methn.linePos",
    "            } else {",
    "                meth := methn",
    "            }",
    "        }",
    "        util.setline(lnum)",
    "        if (meth.isIdentifier) then {",
    "            meth := ast.implicit",
    "        } else {",
    "            meth := meth.receiver     // because the final \"with\" part duplicates",
    "                                // first part of the method name",
    "        }",
    "        def call = ast.callNode.new(meth, signature)",
    "        call.generics := genericIdents",
    "        values.push(call)",
    "    } elseif {false != genericIdents} then {",
    "        meth.generics := genericIdents",
    "    }",
    "    minIndentLevel := startInd",
    "    dotrest(acceptBlocks)",
    "}",
    "",
    "method parenthesizedArg(part) {",
    "    next",
    "    ifConsume {expression(blocksOK)} then {",
    "        // For matching blocks - same as below",
    "        if (accept \"colon\") then {",
    "            def expr = values.pop",
    "            if (expr.kind != \"identifier\") then {",
    "                def suggestion = errormessages.suggestion.new",
    "                if(sym.next.kind == \"identifier\") then {",
    "                    suggestion.deleteTokenRange(sym, sym.next)leading(true)trailing(false)",
    "                    errormessages.syntaxError(\"only variables and constants may be followed by a ':' and a type.\")atRange(",
    "                        sym.line, sym.linePos, sym.next.linePos + sym.next.size - 1)withSuggestion(suggestion)",
    "                } else {",
    "                    suggestion.deleteToken(sym)leading(true)trailing(false)",
    "                    errormessages.syntaxError(\"only variables and constants may be followed by a ':' and a type.\")atRange(",
    "                        sym.line, sym.linePos, sym.linePos)withSuggestion(suggestion)",
    "                }",
    "            }",
    "            next",
    "            if(didConsume({expression(blocksOK)}).not) then {",
    "                checkBadTypeLiteral",
    "                def suggestions = [ ]",
    "                var suggestion := errormessages.suggestion.new",
    "                def nextTok = findNextValidToken( [\"rparen\"] )",
    "                if(nextTok == sym) then {",
    "                    suggestion.insert(\" «type name»\")afterToken(lastToken)",
    "                } else {",
    "                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\" «type name»\")",
    "                }",
    "                suggestions.push(suggestion)",
    "                suggestion := errormessages.suggestion.new",
    "                suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)",
    "                suggestions.push(suggestion)",
    "                errormessages.syntaxError(\"a type name or type expression must follow ':'.\")atPosition(",
    "                    sym.line, sym.linePos)withSuggestions(suggestions)",
    "            }",
    "            expr.dtype := values.pop",
    "            values.push(expr)",
    "        }",
    "        while {accept(\"comma\")} do {",
    "            part.args.push(values.pop)",
    "            next",
    "            if(didConsume({expression(blocksOK)}).not) then {",
    "                def suggestions = [ ]",
    "                var suggestion := errormessages.suggestion.new",
    "                def nextTok = findNextValidToken( [\"rparen\"] )",
    "                if(nextTok == sym) then {",
    "                    suggestion.insert(\" «expression»\")afterToken(lastToken)",
    "                } else {",
    "                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\" «expression»\")",
    "                }",
    "                suggestions.push(suggestion)",
    "                suggestion := errormessages.suggestion.new",
    "                suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)",
    "                suggestions.push(suggestion)",
    "                errormessages.syntaxError(\"a method request must have an expression after a ','.\")atPosition(",
    "                    sym.line, sym.linePos)withSuggestions(suggestions)",
    "            }",
    "            // For matching blocks - same as above",
    "            if (accept \"colon\") then {",
    "                def arg = values.pop",
    "                if (arg.kind != \"identifier\") then {",
    "                    def suggestion = errormessages.suggestion.new",
    "                    if(sym.next.kind == \"identifier\") then {",
    "                        suggestion.deleteTokenRange(sym, sym.next)leading(true)trailing(false)",
    "                        errormessages.syntaxError(\"only declarations may be followed by a ':' and a type.\")atRange(",
    "                            sym.line, sym.linePos, sym.next.linePos + sym.next.size - 1)withSuggestion(suggestion)",
    "                    } else {",
    "                        suggestion.deleteToken(sym)",
    "                        errormessages.syntaxError(\"only declarations may be followed by a ':' and a type.\")atRange(",
    "                            sym.line, sym.linePos, sym.linePos)withSuggestion(suggestion)",
    "                    }",
    "                }",
    "                next",
    "                if(didConsume({expression(blocksOK)}).not) then {",
    "                    checkBadTypeLiteral",
    "                    def suggestions = [ ]",
    "                    var suggestion := errormessages.suggestion.new",
    "                    def nextTok = findNextValidToken( [\"rparen\"] )",
    "                    if(nextTok == sym) then {",
    "                        suggestion.insert(\" «type name»\")afterToken(lastToken)",
    "                    } else {",
    "                        suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\" «type name»\")",
    "                    }",
    "                    suggestions.push(suggestion)",
    "                    suggestion := errormessages.suggestion.new",
    "                    suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)",
    "                    suggestions.push(suggestion)",
    "                    errormessages.syntaxError(\"a type name or type expression must follow ':'.\")atPosition(",
    "                        sym.line, sym.linePos)withSuggestions(suggestions)",
    "                }",
    "                arg.dtype := values.pop",
    "                values.push(arg)",
    "            }",
    "        }",
    "        part.args.push(values.pop)",
    "    }",
    "    if(sym.kind != \"rparen\") then {",
    "        checkBadOperators",
    "        def suggestion = errormessages.suggestion.new",
    "        suggestion.insert(\")\")afterToken(lastToken)",
    "        errormessages.syntaxError(\"a method request beginning with a '(' must end with a ')'.\")atPosition(",
    "            lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)",
    "    }",
    "    if (sym.line == part.line) then {",
    "        part.lineLength := sym.linePos - part.linePos",
    "    }",
    "    next",
    "}",
    "",
    "method typeArgs {",
    "    // Parse one or more type arguments, if present, and answer them as a list.",
    "    def startToken = sym",
    "    def args = [ ]",
    "    if (sym.kind != \"lgeneric\") then { return args }",
    "    next",
    "    while {didConsume{typeArg}} do {",
    "        args.add(values.pop)",
    "        if (sym.kind == \"comma\") then { next }",
    "    }",
    "    if(sym.kind != \"rgeneric\") then {",
    "        def suggestion = errormessages.suggestion.new",
    "        suggestion.insert(\">\")afterToken(lastToken)",
    "        def suggestion2 = errormessages.suggestion.new",
    "        suggestion2.insert(\" \")beforeToken(startToken)",
    "        def suggestions = [suggestion, suggestion2]",
    "        errormessages.syntaxError(\"a method request containing a '<' must have a matching '>'. \"",
    "            ++ \"If '<' is intended as an operator, precede it by a space.\")",
    "            atPosition(lastToken.line, lastToken.linePos + lastToken.size)",
    "            withSuggestions(suggestions)",
    "    }",
    "    next",
    "    return args",
    "}",
    "",
    "method typeArg {",
    "    // Parses a single type argument, and leave it on the values stack.",
    "    // TODO: 'identifier' could be a dotted identifier, ",
    "    //        or perhaps a type expression?",
    "    if (accept \"identifier\") then {",
    "        identifier",
    "        if (sym.kind == \"lgeneric\") then {",
    "            values.push(ast.genericNode.new(values.pop, typeArgs))",
    "        } else {",
    "            // values.push(values.pop)",
    "        }",
    "    } elseif {didConsume{dotypeLiteral}} then {",
    "        // values.push(values.pop)",
    "    }",
    "}",
    "",
    "method callmprest(meth, signature, tok) {",
    "    // Parses the rest of a multi-part method name.",
    "    // meth is an identifierNode representing the first part of the name.",
    "    // Returns a new identifierNode, representing the full method name,",
    "    // and updates signature.params with the parsed arguments.",
    "    var methname := meth.value",
    "    var nxt",
    "    var lp := meth.linePos",
    "    var part",
    "    while {accept(\"identifier\")onLineOf(tok)",
    "           || accept(\"identifier\")onLineOf(lastToken)} do {",
    "        // Each word must start on the same line as the preceding parameter",
    "        // ended.",
    "        part := ast.requestPart.new",
    "        signature.push(part)",
    "        methname := methname ++ \"()\"",
    "        pushidentifier",
    "        nxt := values.pop",
    "        methname := methname ++ nxt.value",
    "        part.name := nxt.value",
    "        var isTerm := false",
    "        if (accept \"lparen\") then {",
    "            next    // skip over the `(`",
    "        } elseif { acceptArgumentOnLineOf(lastToken) } then {",
    "            isTerm := true",
    "        } else {",
    "            def suggestion = errormessages.suggestion.new",
    "            if(sym.kind == \"identifier\") then {",
    "                suggestion.replaceToken(sym)leading(true)trailing(false)with(\"({sym.value})\")",
    "                if(methname == \"while()do\") then {",
    "                    errormessages.syntaxError(\"a while loop must have either a loop body in braces, or a block in parentheses.\")atPosition(",
    "                        sym.line, sym.linePos)withSuggestion(suggestion)",
    "                } elseif { methname == \"for()do\" } then {",
    "                    errormessages.syntaxError(\"a for loop must have either a loop body in braces, or a block in parentheses.\")atPosition(",
    "                        sym.line, sym.linePos)withSuggestion(suggestion)",
    "                }",
    "                errormessages.syntaxError(\"each argument list in a multi-part method request must be parenthesized, unless it is self-delimiting.\")atPosition(",
    "                    sym.line, sym.linePos)withSuggestion(suggestion)",
    "            } else {",
    "                if (methname == \"while()do\") then {",
    "                    suggestion.insert(\" \\{}\")afterToken(lastToken)",
    "                    errormessages.syntaxError(\"a while loop must have a body.\")atPosition(",
    "                        sym.line, sym.linePos)withSuggestion(suggestion)",
    "                } elseif { methname == \"for()do\" } then {",
    "                    suggestion.insert(\" \\{}\")afterToken(lastToken)",
    "                    errormessages.syntaxError(\"a for loop must have a body.\")atPosition(",
    "                        sym.line, sym.linePos)withSuggestion(suggestion)",
    "                } else {",
    "                    suggestion.insert(\"()\")afterToken(lastToken)",
    "                    errormessages.syntaxError(\"a multi-part method request must end with '()'.\")atPosition(",
    "                        sym.line, sym.linePos)withSuggestion(suggestion)",
    "                }",
    "            }",
    "        }",
    "        def isEmpty = accept \"rparen\"",
    "        if (isTerm) then {",
    "            term",
    "        } else {",
    "            if(sym.kind != \"rparen\") then {",
    "                if(didConsume({expression(blocksOK)}).not) then {",
    "                    def suggestions = [ ]",
    "                    var suggestion := errormessages.suggestion.new",
    "                    def nextTok = findNextValidToken( [\"rparen\"] )",
    "                    if(nextTok == sym) then {",
    "                        suggestion.insert(\"«expression»\")afterToken(lastToken)",
    "                    } else {",
    "                        suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\"«expression»\")",
    "                        suggestions.push(suggestion)",
    "                        suggestion := errormessages.suggestion.new",
    "                        suggestion.deleteTokenRange(sym, nextTok.prev)leading(true)trailing(false)",
    "                    }",
    "                    suggestions.push(suggestion)",
    "                    errormessages.syntaxError(\"a method request must have an expression or a ')' after a '('.\")atPosition(",
    "                        sym.line, sym.linePos)withSuggestions(suggestions)",
    "                }",
    "            }",
    "            while {accept(\"comma\")} do {",
    "                nxt := values.pop",
    "                part.args.push(nxt)",
    "                next",
    "                if(didConsume({expression(blocksOK)}).not) then {",
    "                    def suggestions = [ ]",
    "                    var suggestion := errormessages.suggestion.new",
    "                    def nextTok = findNextValidToken( [\"rparen\"] )",
    "                    if(nextTok == sym) then {",
    "                        suggestion.insert(\" «expression»\")afterToken(lastToken)",
    "                    } else {",
    "                        suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\" «expression»\")",
    "                    }",
    "                    suggestions.push(suggestion)",
    "                    suggestion := errormessages.suggestion.new",
    "                    suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)",
    "                    suggestions.push(suggestion)",
    "                    errormessages.syntaxError(\"a method request must have an expression after a ','.\")atPosition(",
    "                        sym.line, sym.linePos)withSuggestions(suggestions)",
    "                }",
    "            }",
    "        }",
    "        if (!isEmpty) then {",
    "            nxt := values.pop",
    "            part.args.push(nxt)",
    "        }",
    "        if (isTerm.not) then {",
    "            if(sym.kind != \"rparen\") then {",
    "                checkBadOperators",
    "                def suggestion = errormessages.suggestion.new",
    "                suggestion.insert(\")\")afterToken(lastToken)",
    "                errormessages.syntaxError(\"a part of a multi-part method request beginning with a '(' must end with a ')'.\")atPosition(",
    "                    lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)",
    "            }",
    "        }",
    "        if (accept(\"rparen\") && isTerm.not) then {",
    "            next",
    "        }",
    "    }",
    "    def meth' = ast.identifierNode.new(methname, false)",
    "    meth'.line := meth.line",
    "    meth'.linePos := meth.linePos",
    "    meth'",
    "}",
    "",
    "// Accept a const declaration",
    "method defdec {",
    "    if (acceptKeyword \"def\") then {",
    "        def line = sym.line",
    "        def pos = sym.linePos",
    "        def defTok = sym",
    "        next",
    "        if(sym.kind != \"identifier\") then {",
    "            def suggestion = errormessages.suggestion.new",
    "            def nextToken = findNextToken({ t -> (t.kind == \"op\")",
    "                && (t.value == \"=\") && (t.line == sym.line)})",
    "            if (false == nextToken) then {",
    "                suggestion.insert(\" «name» =\")afterToken(lastToken)",
    "            } elseif { nextToken == sym } then {",
    "                suggestion.insert(\" «name»\")afterToken(lastToken)",
    "            } else {",
    "                suggestion.replaceTokenRange(sym, nextToken.prev)",
    "                      leading(false)trailing(true)with(\"«name» \")",
    "            }",
    "            errormessages.syntaxError(\"a definition must have a name, '=', \" ++",
    "                  \"and a value after the 'def'.\") atPosition(sym.line, sym.linePos)",
    "                  withSuggestion(suggestion)",
    "        }",
    "        pushidentifier",
    "        var val := false",
    "        var name := values.pop",
    "        name.isBindingOccurrence := true",
    "        var dtype := optionalTypeAnnotation",
    "        def anns = doannotation",
    "        if (accept(\"op\") && (sym.value == \"=\")) then {",
    "            next",
    "            if(didConsume({expression(blocksOK)}).not) then {",
    "                def suggestion = errormessages.suggestion.new",
    "                def nextTok = findNextValidToken( [ ] )",
    "                if(nextTok == sym) then {",
    "                    suggestion.insert(\" «expression»\")afterToken(lastToken)",
    "                } else {",
    "                    suggestion.replaceTokenRange(sym, nextTok.prev)",
    "                          leading(true)trailing(false)with(\" «expression»\")",
    "                }",
    "                errormessages.syntaxError(\"a definition must have a value after the '='.\")",
    "                      atPosition(lastToken.line, lastToken.linePos + lastToken.size)",
    "                      withSuggestion(suggestion)",
    "            }",
    "            val := values.pop",
    "        } elseif { accept \"bind\" } then {",
    "            def suggestions = [ ]",
    "            var suggestion := errormessages.suggestion.new",
    "            suggestion.replaceToken(sym)with(\"=\")",
    "            suggestions.push(suggestion)",
    "            suggestion := errormessages.suggestion.new",
    "            suggestion.replaceToken(defTok)with(\"var\")",
    "            suggestions.push(suggestion)",
    "            errormessages.syntaxError(\"a definition must use '=' instead of ':='. \" ++",
    "                \"A variable declaration uses 'var' and ':='.\")atRange(",
    "                sym.line, sym.linePos, sym.linePos + 1) withSuggestions(suggestions)",
    "        } else {",
    "            def suggestions = [ ]",
    "            var suggestion := errormessages.suggestion.new",
    "            suggestion.insert(\" = «expression»\")afterToken(lastToken)",
    "            suggestions.push(suggestion)",
    "            suggestion := errormessages.suggestion.new",
    "            suggestion.replaceToken(defTok)with(\"var\")",
    "            suggestions.push(suggestion)",
    "            errormessages.syntaxError(\"a definition must have '=' and a value after the name. \"",
    "                ++ \"A variable declaration does not require a value but uses 'var', not 'def'.\")",
    "                atPosition(sym.line, sym.linePos) withSuggestions(suggestions)",
    "        }",
    "        util.setPosition(defTok.line, defTok.linePos)",
    "        var o := ast.defDecNode.new(name, val, dtype)",
    "        if (false != anns) then { o.annotations.addAll(anns) }",
    "        o.startToken := defTok",
    "        values.push(o)",
    "        reconcileComments",
    "    }",
    "}",
    "",
    "// Accept a var declaration",
    "method vardec {",
    "    if (acceptKeyword \"var\") then {",
    "        def line = sym.line",
    "        def pos = sym.linePos",
    "        def varTok = sym",
    "        next",
    "        if(sym.kind != \"identifier\") then {",
    "            def suggestion = errormessages.suggestion.new",
    "            def nextToken = findNextToken({ t -> (t.kind == \"bind\")",
    "                && (t.line == sym.line)})",
    "            if ((false == nextToken) || {nextToken == sym}) then {",
    "                suggestion.insert(\" «name»\")afterToken(lastToken)",
    "            } else {",
    "                suggestion.replaceTokenRange(sym, nextToken.prev)",
    "                      leading(false)trailing(true)with(\"«name» \")",
    "            }",
    "            errormessages.syntaxError \"a variable declaration must have a name after the 'var'.\"",
    "                  atPosition(sym.line, sym.linePos) withSuggestion(suggestion)",
    "        }",
    "        pushidentifier",
    "        var val := false",
    "        var name := values.pop",
    "        name.isBindingOccurrence := true",
    "        def dtype = optionalTypeAnnotation",
    "        def anns = doannotation",
    "        if (accept \"bind\") then {",
    "            next",
    "            if(didConsume({expression(blocksOK)}).not) then {",
    "                def suggestions = [ ]",
    "                var suggestion := errormessages.suggestion.new",
    "                def nextTok = findNextValidToken( [ ] )",
    "                if(nextTok == sym) then {",
    "                    suggestion.insert(\" «expression»\")afterToken(lastToken)",
    "                } else {",
    "                    suggestion.replaceTokenRange(sym, nextTok.prev)",
    "                          leading(true)trailing(false)with(\" «expression»\")",
    "                }",
    "                suggestions.push(suggestion)",
    "                suggestion := errormessages.suggestion.new",
    "                suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)",
    "                suggestions.push(suggestion)",
    "                errormessages.syntaxError(\"a variable declaration must have a value after the ':='. \"",
    "                    ++ \"A variable without a value can be declared with 'var' followed only by the variable name.\")atPosition(",
    "                    lastToken.line, lastToken.linePos + lastToken.size)withSuggestions(suggestions)",
    "            }",
    "            val := values.pop",
    "        } else {",
    "            if (accept(\"op\") && (sym.value == \"=\")) then {",
    "                def suggestions = [ ]",
    "                var suggestion := errormessages.suggestion.new",
    "                suggestion.replaceToken(sym)with(\":=\")",
    "                suggestions.push(suggestion)",
    "                suggestion := errormessages.suggestion.new",
    "                suggestion.replaceToken(varTok)with(\"def\")",
    "                suggestions.push(suggestion)",
    "                errormessages.syntaxError(\"a variable declaration must use ':=' instead of '='. A definition uses 'def' and '='.\")",
    "                    atRange(sym.line, sym.linePos, sym.linePos)",
    "                    withSuggestions(suggestions)",
    "            }",
    "        }",
    "        util.setPosition(line, pos)",
    "        def o = ast.varDecNode.new(name, val, dtype)",
    "        if (false != anns) then { o.annotations.addAll(anns) }",
    "        values.push(o)",
    "        reconcileComments",
    "    }",
    "}",
    "",
    "// Accept a square-bracketed list literal like [1,2,3].",
    "method doarray {",
    "    if (accept \"lsquare\") then {",
    "        next",
    "        var tmp",
    "        var params := []",
    "        ifConsume {expression(blocksOK)} then {",
    "            while {accept(\"comma\")} do {",
    "                tmp := values.pop",
    "                params.push(tmp)",
    "                next",
    "                if(didConsume({expression(blocksOK)}).not) then {",
    "                    def suggestions = [ ]",
    "                    var suggestion := errormessages.suggestion.new",
    "                    def nextTok = findNextValidToken( [\"rsquare\"] )",
    "                    if(nextTok == sym) then {",
    "                        suggestion.insert(\" «expression»\")afterToken(lastToken)",
    "                    } else {",
    "                        suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\" «expression»\")",
    "                    }",
    "                    suggestions.push(suggestion)",
    "                    suggestion := errormessages.suggestion.new",
    "                    suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)",
    "                    suggestions.push(suggestion)",
    "                    errormessages.syntaxError(\"a Lineup must contain zero or more expressions separated by commas.\")",
    "                        atPosition(sym.line, sym.linePos) withSuggestions(suggestions)",
    "                }",
    "            }",
    "            tmp := values.pop",
    "            params.push(tmp)",
    "        }",
    "        if(sym.kind != \"rsquare\") then {",
    "            def suggestion = errormessages.suggestion.new",
    "            suggestion.insert(\"]\")afterToken(lastToken)",
    "            errormessages.syntaxError(\"a Lineup beginning with a '[' must end with a ']'.\")atPosition(",
    "                lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)",
    "        }",
    "        var o := ast.arrayNode.new(params)",
    "        values.push(o)",
    "        next",
    "    }",
    "}",
    "",
    "// Accept \"dialect \"X\"\"",
    "method dodialect {",
    "    if (acceptKeyword \"dialect\") then {",
    "        next",
    "        if(sym.kind != \"string\") then {",
    "            def suggestion = errormessages.suggestion.new",
    "            var errorPos",
    "            if((sym.kind == \"identifier\") && (sym.line == lastToken.line)) then {",
    "                suggestion.replaceToken(sym)with(\"\\\"{sym.value}\\\"\")",
    "                errorPos := sym.linePos",
    "            } else {",
    "                suggestion.insert(\" \\\"«dialect name»\\\"\")afterToken(lastToken)",
    "                errorPos := lastToken.linePos + lastToken.size + 1",
    "            }",
    "            errormessages.syntaxError(\"a dialect statement must have the name of the dialect in quotes after the 'dialect'.\")atPosition(",
    "                lastToken.line, errorPos)withSuggestion(suggestion)",
    "        }",
    "        values.push(ast.dialectNode.new(sym.value))",
    "        next",
    "    }",
    "}",
    "",
    "method inheritsOrUses {",
    "    // Parses \"inherit «object expression»\"",
    "",
    "    if (! accept \"keyword\") then { return }",
    "    if ((sym.value == \"inherits\") || (sym.value == \"inherit\") || (sym.value == \"use\")) then {",
    "        def btok = sym",
    "        checkIndent",
    "        next",
    "        if(didConsume({expression(noBlocks)}).not) then {",
    "            def suggestions = [ ]",
    "            var suggestion := errormessages.suggestion.new",
    "            def nextTok = findNextValidToken( [\"rsquare\"] )",
    "            if(nextTok == sym) then {",
    "                suggestion.insert(\" «parent»\")afterToken(lastToken)",
    "            } else {",
    "                suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\" «parent»\")",
    "            }",
    "            suggestions.push(suggestion)",
    "            suggestion := errormessages.suggestion.new",
    "            suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)",
    "            suggestions.push(suggestion)",
    "            var msg := \"The {btok.value} keyword must be followed by an expression that creates \"",
    "            if (btok.value == \"use\") then {",
    "                msg := msg ++ \"the trait being used.\"",
    "            } else {",
    "                msg := msg ++ \"the object being inherited.\"",
    "            }",
    "            errormessages.syntaxError(msg)",
    "                atPosition(lastToken.line, lastToken.linePos + lastToken.size + 1)",
    "                withSuggestions(suggestions)",
    "        }",
    "        util.setPosition(btok.line, btok.linePos)",
    "        def inhNode = ast.inheritsNode.new(values.pop)",
    "        if (btok.value == \"use\") then {",
    "            inhNode.isUse := true",
    "        }",
    "        while { inheritsModifier(inhNode) onLineOf(btok) } do { }",
    "        values.push(inhNode)",
    "    }",
    "}",
    "",
    "method inheritsModifier(node) onLineOf(startToken) {",
    "    // parse an alias or excludes modifier on an `inherits` clause",
    "    if (! accept \"keyword\" onLineOf(startToken) ) then { ",
    "        return false",
    "    }",
    "    if (sym.value == \"alias\") then { ",
    "        parseAlias(node) ",
    "    } elseif {sym.value == \"exclude\"} then {",
    "        parseExclude(node)",
    "    } else {",
    "        false",
    "    }",
    "}",
    "",
    "method parseAlias(node) {",
    "    next    // skip the alias keyword",
    "    def newMeth = methodsignature(true)",
    "    if (accept \"op\" && (sym.value == \"=\")) then {",
    "        next",
    "        def oldMeth = methodsignature(true).appliedOccurence",
    "        if (newMeth.numParams ≠ oldMeth.numParams) then {",
    "            errormessages.syntaxError \"a method and its alias must have the same number of parameters\"",
    "                atRange (newMeth.line, newMeth.linePos, oldMeth.endPos)",
    "        }",
    "        node.addAlias (newMeth.asIdentifier) for (oldMeth.asIdentifier)",
    "    } else {",
    "        errormessages.syntaxError (\"an alias modifier must take the form \" ++",
    "            \"'‹newMethodName› = ‹oldMethodName›'\")",
    "            atPosition (lastToken.line, lastToken.linePos + lastToken.size)",
    "    }",
    "    return true",
    "}",
    "method parseExclude(node) {",
    "    next    // skip the exclude keyword",
    "    def excludedMeth = methodsignature(true).appliedOccurence",
    "    node.addExclusion (excludedMeth.asIdentifier)",
    "    return true",
    "}",
    "",
    "method doobject {",
    "    // Parse an object constructor.",
    "    // this method is called doobject because \"object\" is a keyword",
    "",
    "    if (acceptKeyword \"object\") then {",
    "        next",
    "        parseObjectConstructorBody \"an object constructor\" ",
    "            startingWith (lastToken) after \"'object'\"",
    "    }",
    "}",
    "",
    "method parseObjectConstructorBody(constructName) startingWith (btok) after (prev) {",
    "    // Parse the body of an object constructor, leaving the node on the",
    "    // values stack.  Common code for parsing object, class, and factory method",
    "    // bodies; constructName says which, so that error messages are correct.",
    "    // btok is the keyword token that started the construct: class, object, or trait.",
    "    def localMinIndentLevel = minIndentLevel",
    "    def anns = doannotation",
    "    if (sym.kind != \"lbrace\") then {",
    "        def suggestion = errormessages.suggestion.new",
    "        def nextTok = findNextToken { t -> t.kind == \"rbrace\" }",
    "        if (false == nextTok) then {",
    "            suggestion.insert(\" \\{}\")afterToken(lastToken)",
    "        } else {",
    "            suggestion.insert(\" \\{\")afterToken(lastToken)",
    "        }",
    "        errormessages.syntaxError \"{constructName} must have a '\\{' after the {prev}.\"",
    "            atPosition(lastToken.line, lastToken.linePos + lastToken.size)",
    "            withSuggestion(suggestion)",
    "    }",
    "    next",
    "    if (sym.line == statementToken.line) then {",
    "        minIndentLevel := sym.linePos - 2",
    "    } else {",
    "        minIndentLevel := statementToken.indent + 2",
    "    }",
    "    def body = []",
    "    var superObject := false",
    "    def usedTraits = []",
    "    var inPreamble := true  // => processing inherit and use statements",
    "    while {(accept(\"rbrace\")).not && {sym.kind != \"eof\"}} do {",
    "        if (didConsume {inheritsOrUses}) then {",
    "            def parentNode = values.pop",
    "            if (inPreamble) then {",
    "                if (parentNode.isUse) then {",
    "                    usedTraits.add(parentNode)",
    "                } elseif { usedTraits.isEmpty } then {",
    "                    superObject := parentNode",
    "                } else {",
    "                    errormessages.syntaxError(\"'inherit' must come \" ++",
    "                        \"before 'use' in {constructName}\")",
    "                        atRange(parentNode.line, parentNode.linePos,",
    "                        parentNode.linePos + 7)",
    "                }",
    "            } else {",
    "                errormessages.syntaxError(\"'{parentNode.statementName}' must \" ++",
    "                    \"come at the start of {constructName}\")",
    "                    atRange(parentNode.line, parentNode.linePos,",
    "                            parentNode.linePos + parentNode.statementName.size)",
    "            }",
    "        } elseif { didConsume {methoddec} } then {",
    "            inPreamble := false",
    "            body.push(values.pop)",
    "        } elseif { didConsume {statement} } then {",
    "            inPreamble := false",
    "            body.push(values.pop)",
    "        } else {",
    "            errormessages.syntaxError(\"unexpected symbol '{sym.value}' in body \" ++",
    "                \"of of {constructName}\")",
    "                atRange(sym.line, sym.linePos, sym.linePos + sym.value.size - 1)",
    "        }",
    "    }",
    "    next",
    "    util.setPosition(btok.line, btok.linePos)",
    "    def objNode = ast.objectNode.new(body, superObject)",
    "    if (false != anns) then { objNode.annotations.addAll(anns) }",
    "    objNode.usedTraits := usedTraits",
    "    values.push(objNode)",
    "    minIndentLevel := localMinIndentLevel",
    "}",
    "",
    "method doclass {",
    "    // Accepts a class declaration with or without a `dot`",
    "    // Class declarations were formerly of the form:",
    "    //",
    "    //   class objName.methodName (param1, param2) {",
    "    //     inherits <expr>",
    "    //     var x",
    "    //     method y(z) { ... }",
    "    // }",
    "    // Now they are of the form:",
    "    //",
    "    // class methodName (param1, param2) {",
    "    //     inherits <expr>",
    "    //     var x",
    "    //     method y(z) { ... }",
    "    // }",
    "    // The old \"dotted\" form is compiled into a defDecNode that contains",
    "    // an objectNode that contains the class method and an asString method.",
    "    // The current form is compiled into a methodNode that contains",
    "    // an objectNode, i.e., it is treated as syntactic sugar for",
    "    //",
    "    // method methodName (param1, param2) {",
    "    //     object {",
    "    //         inherits <expr>",
    "    //         var x",
    "    //         method y(z) { ... }",
    "    //     }",
    "    // }",
    "",
    "    def btok = sym",
    "    next",
    "    def localMinIndentLevel = minIndentLevel",
    "    if(sym.kind != \"identifier\") then {",
    "        def suggestions = [ ]",
    "        if(sym.kind == \"lbrace\") then {",
    "            var suggestion := errormessages.suggestion.new",
    "            suggestion.insert(\" «class name».new\")afterToken(lastToken)",
    "            suggestions.push(suggestion)",
    "            suggestion := errormessages.suggestion.new",
    "            suggestion.replaceToken(lastToken)with(\"object\")",
    "            suggestions.push(suggestion)",
    "        } else {",
    "            def suggestion = errormessages.suggestion.new",
    "            suggestion.insert(\" «class name».new \\{}\")afterToken(lastToken)",
    "            suggestions.push(suggestion)",
    "        }",
    "        errormessages.syntaxError(\"a class must have a name after the 'class'.\")atPosition(",
    "            lastToken.line, lastToken.linePos + lastToken.size + 1)withSuggestions(suggestions)",
    "    }",
    "    var objName := false",
    "    if (tokens.first.kind == \"dot\") then {",
    "        pushidentifier // the name of the class object",
    "        objName := values.pop",
    "        objName.isBindingOccurrence := true",
    "        next    // skip over the dot",
    "    }",
    "    def meth = methodsignature(false)",
    "    meth.setPositionFrom(btok)",
    "    parseObjectConstructorBody \"a class\" startingWith (btok) after \"method header\"",
    "    def objNode = values.pop",
    "    meth.body := [objNode]",
    "    meth.usesClassSyntax := true",
    "    meth.annotations.addAll(objNode.annotations)  // TODO: sort this out!",
    "    // see comment in dofactoryMethod",
    "    if (false != objName) then {   // deal with (deprecated) dotted class",
    "        objNode.name := objName.nameString ++ \".\" ++ meth.canonicalName",
    "        def asStringBody = [ ast.stringNode.new(\"class {objName.nameString}\") ]",
    "        def signature = [ ast.signaturePart.partName \"asString\" ]",
    "        def asStringMeth = ast.methodNode.new(signature, asStringBody, false)",
    "        def metaBody = [meth, asStringMeth]",
    "        def metaObj = ast.objectNode.body (metaBody) named \"class {objName.nameString}\"",
    "        def defDec = ast.defDecNode.new(objName, metaObj, ast.unknownType)",
    "        defDec.startToken := btok",
    "        defDec.annotations.add(ast.identifierNode.new(\"public\", false))",
    "        values.push(defDec)",
    "    } else {",
    "        objNode.name := meth.canonicalName",
    "        if (btok.value == \"class\") then {",
    "            objNode.inClass := true",
    "        } elseif { btok.value == \"trait\" } then {",
    "            objNode.inTrait := true",
    "        }",
    "        values.push(meth)",
    "    }",
    "    reconcileComments",
    "    minIndentLevel := localMinIndentLevel",
    "}",
    "",
    "method dofactoryMethod {",
    "    // Accept a factory method declaration",
    "    if ((acceptKeyword \"factory\") && {",
    "            tokens.first.kind == \"keyword\"} && {",
    "            tokens.first.value == \"method\"}) then {",
    "        def btok = sym",
    "        next",
    "        next",
    "        def localMinIndentLevel = minIndentLevel",
    "        if (sym.kind != \"identifier\") then {",
    "            def suggestions = [ ]",
    "            if(sym.kind == \"lbrace\") then {",
    "                var suggestion := errormessages.suggestion.new",
    "                suggestion.insert(\" «method name»\")afterToken(lastToken)",
    "                suggestions.push(suggestion)",
    "                suggestion := errormessages.suggestion.new",
    "                suggestion.replaceToken(lastToken)with(\"object\")",
    "                suggestions.push(suggestion)",
    "            } else {",
    "                def suggestion = errormessages.suggestion.new",
    "                suggestion.insert(\" «method name» \\{}\")afterToken(lastToken)",
    "                suggestions.push(suggestion)",
    "            }",
    "            errormessages.syntaxError \"a factory method must have a name after the 'method'.\"",
    "                atPosition (lastToken.line, lastToken.linePos + lastToken.size + 1)",
    "                withSuggestions (suggestions)",
    "        }",
    "        var meth := methodsignature(false)",
    "        parseObjectConstructorBody \"a factory method\" startingWith (btok) after \"method header\"",
    "        def objNode = values.pop",
    "        objNode.name := meth.nameString",
    "        util.setPosition(btok.line, btok.linePos)",
    "        meth.body := [objNode]",
    "        meth.annotations.addAll(objNode.annotations)  // TODO: sort this out!",
    "        // In a class or factory method declaration, there is just one place",
    "        // for annotations.  These might include annotations on the method (such",
    "        // as confidential), and annotations on the object (such as imutable)",
    "        values.push(meth)",
    "        reconcileComments",
    "        minIndentLevel := localMinIndentLevel",
    "    }",
    "}",
    "",
    "method methoddec {",
    "    // Parse a method declaration",
    "",
    "    if (acceptKeyword \"method\") then {",
    "        def btok = sym",
    "        checkIndent",
    "        statementToken := sym",
    "        var stok := sym",
    "        next",
    "        def methNode = methodsignature(false).setPositionFrom(btok)",
    "        def body = []",
    "        var localMin",
    "        def anns = doannotation",
    "        if (accept \"lbrace\") then {",
    "            next",
    "            localMin := minIndentLevel",
    "            if (sym.line == stok.line) then {",
    "                minIndentLevel := sym.linePos - 1",
    "            } else {",
    "                minIndentLevel := stok.indent + 1",
    "            }",
    "            values.push(object {",
    "                def kind is public = \"lbrace\"",
    "                var register is public := \"\"",
    "            })  // a dummy token to mark the position in the values stack",
    "            statement",
    "            var s := values.pop",
    "            while {s.kind != \"lbrace\"} do {",
    "                // The body is a sequence of statements, and",
    "                // the method ends when no further statement",
    "                // is found.",
    "                body.push(s)",
    "                statement",
    "                s := values.pop",
    "            }",
    "            if(sym.kind != \"rbrace\") then {",
    "                def suggestion = errormessages.suggestion.new",
    "                def closingBrace = findClosingBrace(btok, false)",
    "                if(closingBrace.found.not) then {",
    "                    if(closingBrace.tok == sym) then {",
    "                        suggestion.insert(\"}\")afterToken(lastToken)",
    "                    } else {",
    "                        suggestion.addLine(closingBrace.tok.line + 0.1, \"}\")",
    "                    }",
    "                }",
    "                suggestion.deleteToken(sym)",
    "                errormessages.syntaxError(\"a method must end with a '}'.\")atPosition(",
    "                    sym.line, sym.linePos)withSuggestion(suggestion)",
    "            }",
    "            next",
    "            minIndentLevel := localMin",
    "        } else {",
    "            def suggestion = errormessages.suggestion.new",
    "            def closingBrace = findClosingBrace(btok, true)",
    "            if(closingBrace.found.not) then {",
    "                if(closingBrace.tok == lastToken) then {",
    "                    suggestion.insert(\" \\{}\")afterToken(lastToken)andTrailingSpace(true)",
    "                } else {",
    "                    suggestion.addLine(closingBrace.tok.line + 0.1, \"}\")",
    "                    suggestion.insert(\" \\{\")afterToken(lastToken)andTrailingSpace(true)",
    "                }",
    "            } else {",
    "                suggestion.insert(\" \\{\")afterToken(lastToken)andTrailingSpace(true)",
    "            }",
    "            errormessages.syntaxError(\"a method must have a '\\{' after the name.\")atPosition(",
    "                lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)",
    "        }",
    "        methNode.body := body",
    "        util.setline(btok.line)",
    "        if (false != anns) then { methNode.annotations.addAll(anns) }",
    "        values.push(methNode)",
    "        reconcileComments",
    "    }",
    "}",
    "",
    "",
    "method methodDecRest(tm, sameline) {",
    "    // Process the remainder of a method header. These follow",
    "    // mostly the same rules as calls, but aren't strictly enforced to be on",
    "    // a single line (because they are ended by \"{\"). ",
    "    //",
    "    // tm is a methodNode.  This method modifies tm.params in place.",
    "",
    "    var signature := tm.signature",
    "    while {(!sameline && accept(\"identifier\")) || acceptSameLine(\"identifier\")} do {",
    "        pushidentifier",
    "        def part = ast.signaturePart.partName(values.pop.nameString)",
    "        if ((accept(\"lparen\")).not) then {",
    "            def suggestion = errormessages.suggestion.new",
    "            suggestion.insert(\"()\")afterToken(lastToken)",
    "            errormessages.syntaxError(\"the declaration of a method with multiple \" ++",
    "                  \"parameter lists must have parentheses around each parameter list.\")",
    "                  atPosition(sym.line, sym.linePos)withSuggestion(suggestion)",
    "        }",
    "        next",
    "        var comma := false",
    "        while {accept(\"identifier\")",
    "                || (accept(\"op\") && (sym.value == \"*\"))} do {",
    "            if (accept \"op\") then {",
    "                next",
    "                errormessages.syntaxError(\"variable length parameters (parameters prefixed by '*') are no longer part of Grace.  Consider making {sym.value} an Iterable.\")",
    "                    atPosition(lastToken.line, lastToken.linePos)",
    "            }",
    "            pushidentifier",
    "            def nxt = values.pop",
    "            nxt.isBindingOccurrence := true",
    "            nxt.dtype := optionalTypeAnnotation",
    "            part.params.push(nxt)",
    "            if (accept \"comma\") then {",
    "                comma := sym",
    "                next",
    "            }",
    "        }",
    "        if(sym.kind != \"rparen\") then {",
    "            def suggestion = errormessages.suggestion.new",
    "            suggestion.insert(\")\")afterToken(lastToken)",
    "            errormessages.syntaxError(\"a part of a multi-part method beginning with a '(' must end with a ')'.\")atPosition(",
    "                lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)",
    "        }",
    "        next",
    "        signature.push(part)",
    "    }",
    "}",
    "",
    "method optionalTypeAnnotation {",
    "    // Accept a type annotation if present.",
    "    // Returns the type, or false if there is no annotation",
    "    if (accept \"colon\") then {",
    "        next",
    "        if (didConsume { typeexpression }) then {",
    "            values.pop",
    "        } else {",
    "            checkBadTypeLiteral",
    "            def suggestions = [ ]",
    "            var suggestion := errormessages.suggestion.new",
    "            suggestion.insert(\" «type name»\")afterToken(lastToken)",
    "            suggestions.push(suggestion)",
    "            suggestion := errormessages.suggestion.new",
    "            suggestion.deleteToken(lastToken)leading(true)trailing(false)",
    "            suggestions.push(suggestion)",
    "            errormessages.syntaxError(\"a type name or type expression must follow ':'.\")atPosition(",
    "                sym.line, sym.linePos)withSuggestions(suggestions)",
    "        }",
    "    } else {",
    "        false",
    "    }",
    "}",
    "",
    "method methodsignature(sameline) {",
    "    // Accept a method signature",
    "    if((sym.kind != \"identifier\") && (sym.kind != \"op\") && (sym.kind != \"lsquare\")) then {",
    "        def suggestion = errormessages.suggestion.new",
    "        suggestion.insert(\" «method name»\")afterToken(lastToken)",
    "        errormessages.syntaxError(\"a method name must start with an identifier, or be an operator.\")",
    "            atPosition(lastToken.line, lastToken.linePos + lastToken.size + 1)",
    "                withSuggestion(suggestion)",
    "    }",
    "    def startToken = sym",
    "    def part = ast.signaturePart.partName(startToken.value)",
    "    next",
    "    def result = ast.methodNode.new( [ part ], [], false)",
    "    if ((startToken.value == \"[\") && {sym.kind == \"rsquare\"}) then {",
    "        errormessages.syntaxError(\"methods named '[]' and '[]:=' are no longer part of Grace.\")",
    "            atRange(lastToken.line, lastToken.linePos, sym.linePos)",
    "    }",
    "    if (accept \"lgeneric\") then { result.typeParams := typeparameters }",
    "    if (accept \"bind\") then {",
    "        part.name := part.name ++ \":=\"",
    "        next",
    "    } elseif { accept \"op\"  && (startToken.value == \"prefix\") } then {",
    "        part.name := part.name ++ sym.value",
    "        next",
    "    }",
    "    if (accept \"lparen\") then {",
    "        def lparen = sym",
    "        next",
    "        var id",
    "        var comma := false",
    "        while {accept(\"identifier\") ||",
    "                (accept(\"op\") && (sym.value == \"*\"))} do {",
    "            // Parse the parameter list, including optional dtype",
    "            // annotations.",
    "            if (accept \"op\") then {",
    "                next",
    "                errormessages.syntaxError(\"variable length parameters (parameters prefixed by '*') are no longer part of Grace.  Consider making {sym.value} an Iterable.\")",
    "                    atPosition(lastToken.line, lastToken.linePos)",
    "            }",
    "            pushidentifier",
    "            id := values.pop",
    "            id.isBindingOccurrence := true",
    "            id.dtype := optionalTypeAnnotation",
    "            part.params.push(id)",
    "            if (accept \"comma\") then {",
    "                comma := sym",
    "                next",
    "            } elseif { sym.kind != \"rparen\" } then {",
    "                if(sym.kind != \"rparen\") then {",
    "                    def suggestion = errormessages.suggestion.new",
    "                    suggestion.insert(\")\")afterToken(lastToken)",
    "                    errormessages.syntaxError(\"a part of a method beginning with a '(' must end with a ')'.\")atPosition(",
    "                        lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)",
    "                }",
    "            }",
    "        }",
    "        if(sym.kind != \"rparen\") then {",
    "            def suggestion = errormessages.suggestion.new",
    "            def rparen = findNextToken({ t -> (t.kind == \"rparen\") && (t.line == lastToken.line) })",
    "            if(false == rparen) then {",
    "                suggestion.replaceToken(lastToken)with(\")\")",
    "            } else {",
    "                suggestion.deleteToken(sym)",
    "            }",
    "            errormessages.syntaxError(\"a part of a method beginning with a '(' must end with a ')'.\")atRange(",
    "                lastToken.line, lastToken.linePos, lastToken.linePos)withSuggestion(suggestion)",
    "        }",
    "        if (sym.line == part.line) then {",
    "            part.lineLength := sym.linePos - part.linePos",
    "        }",
    "        next",
    "        if ((!sameline && accept(\"identifier\")) ||",
    "            acceptSameLine(\"identifier\")) then {",
    "            // The presence of an identifier here means",
    "            // a multi-part method name.",
    "            methodDecRest(result, sameline)",
    "        }",
    "    }",
    "    if (accept \"arrow\") then {",
    "        // Return dtype",
    "        next",
    "        typeexpression",
    "        result.dtype := values.pop",
    "    }",
    "    result",
    "}",
    "",
    "method typeparameters {",
    "    next",
    "    def typeIds = [ ]",
    "    while {accept(\"identifier\")} do {",
    "        identifier",
    "        def id = values.pop",
    "        id.isBindingOccurrence := true",
    "        typeIds.push(id)",
    "        if (accept \"comma\") then {",
    "            next",
    "        }",
    "    }",
    "    typeIds.do { each -> each.isBindingOccurrence := true }",
    "    def result = ast.typeParametersNode.new(typeIds)",
    "    if(sym.kind != \"rgeneric\") then {",
    "        def suggestion = errormessages.suggestion.new",
    "        suggestion.insert(\">\")afterToken(lastToken)",
    "        errormessages.syntaxError(\"a list of type parameters starting with '<' must end with '>'.\")atPosition(",
    "            lastToken.line, lastToken.linePos + lastToken.size)withSuggestion(suggestion)",
    "    }",
    "    next",
    "    result",
    "}",
    "",
    "method doimport {",
    "    // Accept an import statement, which has the form",
    "    //      import ‹string› as ‹identifier›:‹type expression› is ‹annotation›",
    "    if (acceptKeyword \"import\") then {",
    "        def importline = sym.line",
    "        next",
    "        if(sym.kind != \"string\") then {",
    "            var suggestion := errormessages.suggestion.new",
    "            var errorPos",
    "            if((sym.kind == \"identifier\") && (sym.line == lastToken.line)) then {",
    "                suggestion.replaceToken(sym)with(\"\\\"{sym.value}\\\"\")",
    "                errorPos := sym.linePos",
    "            } else {",
    "                suggestion.insert(\" \\\"«module name»\\\"\")afterToken(lastToken)",
    "                errorPos := lastToken.linePos + lastToken.size + 1",
    "            }",
    "            errormessages.syntaxError(\"an import statement must have the name of the module in quotes, 'as', and an identifier after 'import'.\")atPosition(",
    "                lastToken.line, errorPos)withSuggestion(suggestion)",
    "        }",
    "        pushstring",
    "        def p = values.pop",
    "        if((sym.kind != \"identifier\") || (sym.value != \"as\")) then {",
    "            var suggestion := errormessages.suggestion.new",
    "            if((sym.kind == \"identifier\") && (sym.line == lastToken.line)) then {",
    "                suggestion.insert(\" as\")afterToken(lastToken)",
    "            } else {",
    "                suggestion.insert(\" as {p.value}\")afterToken(lastToken)",
    "            }",
    "            errormessages.syntaxError(\"an import statement must have 'as', and an identifier after the name of the module in quotes.\")atPosition(",
    "                lastToken.line, lastToken.linePos + lastToken.size + 1)withSuggestion(suggestion)",
    "        }",
    "        next",
    "        if(sym.kind != \"identifier\") then {",
    "            var suggestion := errormessages.suggestion.new",
    "            var errorPos",
    "            if((sym.kind == \"string\") && (sym.line == lastToken.line)) then {",
    "                suggestion.replaceToken(sym)with(\"{sym.value}\")",
    "                errorPos := sym.linePos",
    "            } else {",
    "                suggestion.insert(\" {p.value}\")afterToken(lastToken)",
    "                errorPos := lastToken.linePos + lastToken.size + 1",
    "            }",
    "            errormessages.syntaxError(\"an import statement must have an identifier after 'as'.\")atPosition(",
    "                lastToken.line, errorPos)withSuggestion(suggestion)",
    "        }",
    "        pushidentifier",
    "        def name = values.pop",
    "        name.isBindingOccurrence := true",
    "        def dtype = optionalTypeAnnotation",
    "        util.setline(importline)",
    "        def o = ast.importNode.new(p.value, name, dtype)",
    "        def anns = doannotation",
    "        if (false != anns) then { o.annotations.addAll(anns) }",
    "        values.push(o)",
    "        reconcileComments",
    "    }",
    "}",
    "",
    "method doreturn {",
    "    // Accept a return statement; 'return' is followed by an optional expression.",
    "    if (acceptKeyword \"return\") then {",
    "        def retTok = sym",
    "        next",
    "        var retval",
    "        if ((tokenOnSameLine) && {accept(\"rbrace\").not}) then {",
    "            if(didConsume({expression(blocksOK)}).not) then {",
    "                def suggestions = [ ]",
    "                var suggestion := errormessages.suggestion.new",
    "                def nextTok = findNextValidToken( [\"rbrace\"] )",
    "                if(nextTok == sym) then {",
    "                    suggestion.insert(\" «expression»\")afterToken(lastToken)",
    "                    suggestions.push(suggestion)",
    "                    suggestion := errormessages.suggestion.new",
    "                    suggestion.deleteToken(sym)leading(true)trailing(false)",
    "                } else {",
    "                    suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\" «expression»\")",
    "                    suggestions.push(suggestion)",
    "                    suggestion := errormessages.suggestion.new",
    "                    suggestion.deleteTokenRange(sym, nextTok.prev)leading(true)trailing(false)",
    "                }",
    "                suggestions.push(suggestion)",
    "                errormessages.syntaxError(\"a return statement must have either an expression or a new-line after 'return'.\")atRange(",
    "                    sym.line, sym.linePos, sym.linePos + sym.size - 1)withSuggestions(suggestions)",
    "            }",
    "            retval := values.pop",
    "        } else {",
    "            retval := ast.identifierNode.new(\"done\", false)",
    "        }",
    "        util.setPosition(retTok.line, retTok.linePos)",
    "        var o := ast.returnNode.new(retval)",
    "        values.push(o)",
    "    }",
    "}",
    "",
    "method domethodtype {",
    "    // parses a method in a type literal",
    "    def methodTypeTok = sym",
    "    var methNode := methodsignature(true)",
    "    var dtype := methNode.dtype",
    "    if (false == methNode.dtype) then {",
    "        dtype := ast.identifierNode.new(\"Done\", false)",
    "    }",
    "    def o = ast.methodTypeNode.new(methNode.signature, dtype)",
    "                                            .setPositionFrom(methodTypeTok)",
    "    o.typeParams := methNode.typeParams",
    "    values.push(o)",
    "    reconcileComments",
    "    if (accept \"semicolon\") then {",
    "        next",
    "    } else {",
    "        if (!accept(\"rbrace\")) then {",
    "            if (lastToken.line == sym.line) then {",
    "                def suggestion = errormessages.suggestion.new",
    "                def newLine = util.lines.at(sym.line).substringFrom(1)to(lastToken.linePos - 1) ++ sym.value",
    "                suggestion.addLine(sym.line + 0.1, newLine)",
    "                suggestion.deleteToken(sym)leading(true)trailing(true)",
    "                errormessages.syntaxError(\"methods in a type literal must be on separate lines, or separated by semicolons.\")atPosition(",
    "                    sym.line, sym.linePos)withSuggestion(suggestion)",
    "            }",
    "        }",
    "    }",
    "}",
    "",
    "method dotypeLiteral {",
    "    // parses a type literal between braces, with optional leading 'type' keyword.",
    "    def typeLiteralTok = sym",
    "    if (acceptKeyword \"type\") then {",
    "        next",
    "        if (!accept(\"lbrace\")) then {",
    "            def suggestion = errormessages.suggestion.new",
    "            suggestion.replaceToken(sym) with(\"\\{\")",
    "            errormessages.syntaxError \"type literals must open with a brace.\"",
    "                atPosition(sym.line, sym.linePos) withSuggestion(suggestion)",
    "            return",
    "        }",
    "    }",
    "    if (accept \"lbrace\") then {",
    "        def meths = []",
    "        def types = []",
    "        def mc = auto_count",
    "        auto_count := auto_count + 1",
    "        next",
    "        while {accept(\"rbrace\").not} do {",
    "            if (acceptKeyword \"type\") then {",
    "                typedec",
    "                types.push(values.pop)",
    "            } else {",
    "                domethodtype",
    "                meths.push(values.pop)",
    "            }",
    "        }",
    "        next",
    "        util.setPosition(typeLiteralTok.line, typeLiteralTok.linePos)",
    "        def t = ast.typeLiteralNode.new(meths, types)",
    "        values.push(t)",
    "    }",
    "}",
    "",
    "method typedec {",
    "    // Accept a declaration: 'type = <type expression>'",
    "    if (acceptKeyword \"type\") then {",
    "        def line = sym.line",
    "        def pos = sym.linePos",
    "        next",
    "        if(sym.kind != \"identifier\") then {",
    "            def suggestion = errormessages.suggestion.new",
    "            suggestion.insert(\" «type name»\")afterToken(lastToken)",
    "            errormessages.syntaxError(\"a type declaration must have a name after the 'type'.\")atPosition(",
    "                lastToken.line, lastToken.linePos + lastToken.size + 1)withSuggestion(suggestion)",
    "        }",
    "        pushidentifier",
    "        util.setPosition(line, pos)",
    "        def nt = ast.typeDecNode.new(values.pop, false)",
    "        if (accept \"lgeneric\") then { nt.typeParams := typeparameters }",
    "        nt.name.isBindingOccurrence := true",
    "        def anns = doannotation",
    "        if((sym.kind != \"op\") || (sym.value != \"=\")) then {",
    "            var suggestion := errormessages.suggestion.new",
    "            def nextTok = findNextToken({ t -> t.kind == \"lbrace\" })",
    "            if ((false == nextTok) || {nextTok == sym}) then {",
    "                suggestion.insert(\" =\")afterToken(lastToken)",
    "            } else {",
    "                suggestion.replaceTokenRange(sym, nextTok.prev)with(\"=\")",
    "            }",
    "            errormessages.syntaxError \"a type declaration must have an '=' after the type name.\"",
    "                  atPosition(lastToken.line, lastToken.linePos + lastToken.size + 1)",
    "                  withSuggestion(suggestion)",
    "        }",
    "        next",
    "        // Special case for type Literals without leading 'type' keyword.",
    "        if (accept \"lbrace\") then {",
    "            dotypeLiteral",
    "        } else {",
    "            expression(noBlocks)",
    "        }",
    "        nt.value := values.pop",
    "        if (false != anns) then {",
    "            nt.annotations.addAll(anns)",
    "        }",
    "        values.push(nt)",
    "        reconcileComments",
    "    }",
    "}",
    "",
    "method checkIndent {",
    "    if (indentFreePass) then {",
    "        indentFreePass := false",
    "    } elseif { sym.kind == \"semicolon\" } then {",
    "        // pass",
    "    } elseif {(sym.kind == \"rbrace\") || (sym.kind == \"rparen\")",
    "          || (sym.kind == \"rsquare\")} then {",
    "        // pass",
    "    } elseif { sym.kind == \"eof\" } then {",
    "    } elseif { sym.indent < minIndentLevel } then {",
    "        if ((sym.linePos - 1) != minIndentLevel) then {",
    "            def suggestions = [ ]",
    "            var suggestion := errormessages.suggestion.new",
    "            for(1..(minIndentLevel - (sym.linePos - 1))) do { _ ->",
    "                suggestion.insert \" \" atPosition 1 onLine(sym.line)",
    "            }",
    "            suggestions.push(suggestion)",
    "            suggestion := errormessages.suggestion.new",
    "            // Find the indent level for the opening brace.",
    "            var tok := lastToken",
    "            while {(tok.linePos != (tok.indent + 1)) || (tok.indent >= minIndentLevel)} do { ",
    "                tok := tok.prev ",
    "            }",
    "            var line := \"\"",
    "            for(1..(tok.indent)) do { _ ->",
    "                line := line ++ \" \"",
    "            }",
    "            line := line ++ \"}\"",
    "            suggestion.addLine(sym.line - 0.9, line)",
    "            suggestions.push(suggestion)",
    "            errormessages.syntaxError(\"the indentation for this line must be \" ++",
    "                  \"at least {minIndentLevel}. This is often caused by a missing '}'.\")",
    "                  atPosition(sym.line, sym.linePos)withSuggestions(suggestions)",
    "        }",
    "    } elseif { sym.indent > (minIndentLevel + 1) } then {",
    "        minIndentLevel := sym.indent",
    "    } elseif { (sym.indent - lastIndent).abs == 1 } then {",
    "        def m1 = \"the indentation for this line can't differ \"",
    "        def m2 = \"from that of the previous line by 1.\\n  To start a block, or \"",
    "        def m3 = \"to signal a continuation line, increase the indent by 2 or more. \"",
    "        def m4 = \"To end a block, or end the continuation, decrease the indent \"",
    "        def m5 = \"to the prior level. Otherwise, use the same indent as the previous line.\"",
    "        def msg = m1 ++ m2 ++ m3 ++ m4 ++ m5",
    "        errormessages.syntaxError(msg) atPosition(sym.line, sym.linePos)",
    "    }",
    "}",
    "",
    "method statement {",
    "    // Accept a statement. A statement is any of the above that may exist",
    "    // at the top level, and includes expressions.",
    "    // A statement may also be a bind statement x := y, which creates a",
    "    // bind AST node out of the expressions on either side (which at this point",
    "    // can be any arbitrary expression).",
    "",
    "    statementIndent := sym.indent",
    "    statementToken := sym",
    "    def btok = sym",
    "    checkIndent",
    "    if (accept \"keyword\") then {",
    "        if (sym.value == \"var\") then {",
    "            vardec",
    "        } elseif { sym.value == \"def\" } then {",
    "            defdec",
    "        } elseif { sym.value == \"import\" } then {",
    "            doimport",
    "        } elseif { sym.value == \"dialect\" } then {",
    "            dodialect",
    "        } elseif { sym.value == \"type\" } then {",
    "            typedec",
    "        } elseif { sym.value == \"class\" } then {",
    "            doclass",
    "        } elseif { sym.value == \"trait\" } then {",
    "            doclass",
    "        } elseif { sym.value == \"factory\" } then {",
    "            dofactoryMethod",
    "        } elseif { sym.value == \"return\" } then {",
    "            doreturn",
    "        } else {",
    "            expression(blocksOK)",
    "        }",
    "    } else {",
    "        ifConsume {expression(blocksOK)} then {",
    "            if (((values.last.kind == \"identifier\")",
    "                || (values.last.kind == \"member\")",
    "                || (values.last.kind == \"index\"))",
    "                && accept(\"bind\")) then {",
    "                var dest := values.pop",
    "                if (dest.kind == \"lbrace\") then {",
    "                    print \"sym = {sym}, sym.line = {sym.line}\"",
    "                    ProgrammingError.raise \"popped lbrace token while parsing statement\"",
    "                }",
    "                next",
    "                if(didConsume({expression(blocksOK)}).not) then {",
    "                    def suggestions = [ ]",
    "                    var suggestion := errormessages.suggestion.new",
    "                    def nextTok = findNextValidToken( [\"rbrace\"] )",
    "                    if(nextTok == sym) then {",
    "                        suggestion.insert(\" «expression»\")afterToken(lastToken)",
    "                    } else {",
    "                        suggestion.replaceTokenRange(sym, nextTok.prev)leading(true)trailing(false)with(\" «expression»\")",
    "                    }",
    "                    suggestions.push(suggestion)",
    "                    suggestion := errormessages.suggestion.new",
    "                    suggestion.deleteTokenRange(lastToken, nextTok.prev)leading(true)trailing(false)",
    "                    suggestions.push(suggestion)",
    "                    errormessages.syntaxError(\"a valid expression must follow ':='.\")atPosition(",
    "                        sym.line, sym.linePos)withSuggestions(suggestions)",
    "                }",
    "                var val := values.pop",
    "                util.setPosition(btok.line, btok.linePos)",
    "                var o := ast.bindNode.new(dest, val)",
    "                values.push(o)",
    "            }",
    "        }",
    "    }",
    "    reconcileComments",
    "    if (accept \"eof\") then {",
    "        return true",
    "    }",
    "    if (accept \"semicolon\") then {",
    "        def oldLine = sym.line",
    "        next",
    "        if (sym.line == oldLine) then {",
    "            indentFreePass := true",
    "        }",
    "    } else {",
    "        checkUnexpectedTokenAfterStatement",
    "    }",
    "}",
    "",
    "method pushComments {",
    "    // Push a comment onto the comments stack as a commentNode. If",
    "    // there are consecutive comments following, deal with them all.",
    "    // Adjacent comments extend the first; a break of a blank line",
    "    // starts a new comment node.",
    "",
    "    if ( ! accept \"comment\" ) then { return }",
    "    util.setPosition(sym.line, sym.linePos)",
    "    var o := ast.commentNode.new(sym.value)",
    "    if ((lastToken.line == sym.line) && (lastToken.kind != \"comment\")) then {",
    "        o.isPartialLine := true",
    "    } elseif { lastToken.line < (sym.line - 1) } then {",
    "        o.isPreceededByBlankLine := true",
    "    }",
    "    comments.push(o)",
    "    while { ",
    "        previousCommentToken := sym",
    "        sym := tokens.poll",
    "        if (sym.line > (previousCommentToken.line + 1)) then { noteBlank }",
    "        accept \"comment\"",
    "    } do {",
    "        util.setPosition(sym.line, sym.linePos)",
    "        o := ast.commentNode.new(sym.value)",
    "        if ( comments.last.endLine == (sym.line - 1) ) then {",
    "            comments.last.extendCommentUsing(o)",
    "        } else {",
    "            comments.push(o)",
    "            if ( lastToken.line < (sym.line - 1) ) then {",
    "                o.isPreceededByBlankLine := true",
    "            }",
    "        }",
    "    }",
    "}",
    "",
    "method reconcileComments {",
    "    // Should be requested after a new node that represents a \"syntactic unit\"",
    "    // to which comments can be attached is pushed onto `values`",
    "    // Finds comments associated with that node, remove thems from comments",
    "    // stack, and puts them in that node's comments attribute.",
    "",
    "    pushComments",
    "    def node = if (values.isEmpty) then {",
    "        moduleObject ",
    "    } else {",
    "        values.last",
    "    }",
    "    if (node.kind == \"lbrace\") then {",
    "        // lbrace nodes are not AST nodes.  They are used to mark the stack for",
    "        // nested expressions.  Hence, no comments should be attached to them.",
    "        return",
    "    }",
    "    def oLine = node.line",
    "    def preComments = emptyList",
    "    def postComments = emptyList",
    "",
    "    var ix := comments.size",
    "    while { ix > 0 } do {",
    "        def each = comments.at(ix)",
    "        def isPostComment = (each.line == oLine) || (each.line == (oLine+1))",
    "        def isPreComment = each.isPreceededByBlankLine && (each.endLine == (oLine-1))",
    "        if (isPostComment) then {",
    "            postComments.push(comments.removeAt(ix))",
    "        } elseif { isPreComment } then {",
    "            preComments.addFirst(comments.removeAt(ix))",
    "        } elseif { each.endLine < (oLine-1) } then {",
    "            ix := 0     // exit from while",
    "        }",
    "        ix := ix - 1",
    "    }",
    "",
    "    def postSz = postComments.size",
    "    def preSz = preComments.size",
    "",
    "    if ((postSz > 1) && (preSz > 1)) then {",
    "        preComments.last.value := preComments.last.value ++ \"\\n\"",
    "    }",
    "    node.addComments(preComments)",
    "    node.addComments(postComments)",
    "}",
    "",
    "method checkBadOperators {",
    "    if (sym.value == \"=\") then {",
    "        def sugg = errormessages.suggestion.new",
    "        sugg.insert(\"=\")afterToken(sym)",
    "        errormessages.syntaxError(\"use '==' to test equality, not '='.\")",
    "            atRange(sym.line, sym.linePos, sym.linePos)",
    "            withSuggestion(sugg)",
    "    }",
    "    if (sym.kind == \"rgeneric\") then {",
    "        def sugg = errormessages.suggestion.new",
    "        sugg.insert(\" \")beforeToken(sym)",
    "        errormessages.syntaxError(\"the '>' operator must be preceded by a space.\")",
    "            atRange(sym.line, sym.linePos, sym.linePos)",
    "            withSuggestion(sugg)",
    "    }",
    "}",
    "",
    "method checkBadTypeLiteral {",
    "    if (sym.kind == \"lbrace\") then {",
    "        def sugg = errormessages.suggestion.new",
    "        sugg.insert(\"type \") beforeToken(sym)",
    "        errormessages.syntaxError(\"type literals must start with the keyword 'type'.\")",
    "            atRange(sym.line, sym.linePos, sym.linePos)",
    "            withSuggestion(sugg)",
    "    }",
    "}",
    "",
    "method checkUnexpectedTokenAfterStatement {",
    "    if (sym.line == lastToken.line) then {",
    "        if ((sym.kind == \"op\") && (sym.value == \"=\")",
    "            && (lastToken.kind == \"identifier\")) then {",
    "            def sugg = errormessages.suggestion.new",
    "            def suggestions = [ ]",
    "            sugg.replaceToken(sym)leading(false)trailing(false)with(\":=\")",
    "            suggestions.push(sugg)",
    "            def sugg2 = errormessages.suggestion.new",
    "            sugg2.replaceToken(sym)leading(false)trailing(false)with \"==\"",
    "            suggestions.push(sugg2)",
    "            errormessages.syntaxError(\"assignment uses ':=', not '='.\")",
    "                atRange(sym.line, sym.linePos, sym.linePos)",
    "                withSuggestions (suggestions)",
    "        }",
    "        if (sym.kind == \"rgeneric\") then {",
    "            def sugg = errormessages.suggestion.new",
    "            sugg.insert(\" \")atPosition(sym.linePos)onLine(sym.line)",
    "            errormessages.syntaxError(",
    "                    \"The '>' operator must have a space before it.\")",
    "                atRange(sym.line, sym.linePos, sym.linePos)",
    "                withSuggestion(sugg)",
    "        }",
    "        if (sym.kind != \"rbrace\") then {",
    "            def suggestions = [ ]",
    "            var suggestion",
    "            if ( (values.size > 0) && { (values.last.kind == \"identifier\") || { values.last.kind == \"member\" }} && { sym.kind == \"identifier\" } ) then {",
    "                suggestion := errormessages.suggestion.new",
    "                suggestion.replaceToken(sym)leading(true)trailing(false)with(\"({sym.value})\")",
    "                suggestions.push(suggestion)",
    "                if (false != sym.next) then {",
    "                    def n = sym.next",
    "                    if (n.line == sym.line) then {",
    "                        suggestion := errormessages.suggestion.new",
    "                        suggestion.replaceToken(sym)leading(true)trailing(false)with(\"({sym.value}\")",
    "                        suggestion.append \")\" onLine(sym.line)",
    "                        suggestions.push(suggestion)",
    "                    }",
    "                }",
    "                if (values.last.kind == \"identifier\") then {",
    "                    suggestion := errormessages.suggestion.new",
    "                    suggestion.replaceToken(sym)leading(false)trailing(false)with(\"\\\"{sym.value}\\\"\")",
    "                    suggestions.push(suggestion)",
    "                }",
    "            }",
    "            def nextTok = findNextValidToken( [\"rbrace\"] )",
    "            if(nextTok == sym) then {",
    "                suggestion := errormessages.suggestion.new",
    "                suggestion.addLine(lastToken.line, util.lines.at(lastToken.line).substringFrom(1)to(lastToken.linePos + lastToken.size - 1))",
    "                def newLine = util.lines.at(sym.line).substringFrom(sym.linePos)to(util.lines.at(sym.line).size)",
    "                suggestion.addLine(lastToken.line + 0.1, newLine)",
    "                suggestions.push(suggestion)",
    "            } else {",
    "                suggestion := errormessages.suggestion.new",
    "                suggestion.deleteTokenRange(sym, nextTok.prev)leading(true)trailing(false)",
    "                suggestions.push(suggestion)",
    "            }",
    "            errormessages.syntaxError(\"multiple statements must be separated by a newline or a semicolon. This is often caused by missing parentheses.\")atPosition(",
    "                sym.line, sym.linePos)withSuggestions(suggestions)",
    "        }",
    "    }",
    "}",
    "",
    "",
    "method parse(toks) {",
    "    // Parse the given list of tokens, toks, returning an AST moduleNode",
    "    // corresponding to it.",
    "",
    "    util.log_verbose \"parsing.\"",
    "    moduleObject := ast.moduleNode.body(values) named (util.modname)",
    "",
    "    if (toks.size == 0) then {",
    "        return moduleObject",
    "    }",
    "    tokens := toks",
    "    next",
    "    if (sym.indent > 0) then {",
    "        def sugg = errormessages.suggestion.new",
    "        sugg.deleteRange(1, sym.indent) onLine(sym.line)",
    "        errormessages.syntaxError \"the first line must not be indented.\"",
    "            atRange(sym.line, 1, sym.indent)",
    "            withSuggestion(sugg)",
    "    }",
    "    var oldlength := tokens.size",
    "    while {tokens.size > 0} do {",
    "        blank",
    "        methoddec",
    "        blank",
    "        ifConsume { inheritsOrUses } then {",
    "            def parentNode = values.pop",
    "            if (parentNode.isUse) then {",
    "                moduleObject.usedTraits.add(parentNode)",
    "            } elseif { moduleObject.usedTraits.isEmpty } then {",
    "                moduleObject.superclass := parentNode",
    "            } else {",
    "                errormessages.syntaxError(\"'inherit' must come \" ++",
    "                    \"before 'use' in a module.\")",
    "                    atRange(parentNode.line, parentNode.linePos,",
    "                    parentNode.linePos + 7)",
    "            }",
    "        }",
    "        blank",
    "        statement",
    "        blank",
    "        if (tokens.size == oldlength) then {",
    "            def suggestion = errormessages.suggestion.new",
    "            suggestion.deleteToken(sym)",
    "            errormessages.syntaxError(\"invalid statement. This is often \" ++",
    "                \"caused by an extra '}', ')', or ']'.\")",
    "                atRange(sym.line, sym.linePos, sym.linePos + sym.size - 1)",
    "                withSuggestion(suggestion)",
    "        }",
    "        oldlength := tokens.size",
    "    }",
    "    blank",
    "    statement",
    "    blank",
    "    return moduleObject",
    "}" ];
}
if (typeof global !== "undefined")
  global.gracecode_parser = gracecode_parser;
if (typeof window !== "undefined")
  window.gracecode_parser = gracecode_parser;
