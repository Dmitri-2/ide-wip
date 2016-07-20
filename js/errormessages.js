"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_errormessages() {
  setModuleName("errormessages");
  this.definitionModule = "errormessages";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_errormessages_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_errormessages_outer0;
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
    setModuleName("errormessages");
    // io is a simple accessor - elide try ... catch
    return var_io;
  };
  func1.paramCounts = [0];
  this.methods["io"] = func1;
  func1.definitionLine = 2;
  func1.definitionModule = "errormessages";
  func1.debug = "import";
  func1.confidential = true;
  setModuleName("errormessages");
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
    setModuleName("errormessages");
    // sys is a simple accessor - elide try ... catch
    return var_sys;
  };
  func2.paramCounts = [0];
  this.methods["sys"] = func2;
  func2.definitionLine = 3;
  func2.definitionModule = "errormessages";
  func2.debug = "import";
  func2.confidential = true;
  setModuleName("errormessages");
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
    setModuleName("errormessages");
    // util is a simple accessor - elide try ... catch
    return var_util;
  };
  func3.paramCounts = [0];
  this.methods["util"] = func3;
  func3.definitionLine = 4;
  func3.definitionModule = "errormessages";
  func3.debug = "import";
  func3.confidential = true;
  setModuleName("errormessages");
  setLineNumber(280);    // compilenode method
  var func4 = function(argcv) {    // method name(_)matches(_)within(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_p = arguments[curarg];
    curarg++;
    var var_t = arguments[curarg];
    curarg++;
    var var_k = arguments[curarg];
    curarg++;
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_String, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in name (arg list 1), which corresponds to parameter p, does not have " + 
                callmethod(var_String, "asString", [0])._value + "."));
    curarg++;
    if (!Grace_isTrue(callmethod(var_String, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in matches (arg list 2), which corresponds to parameter t, does not have " + 
                callmethod(var_String, "asString", [0])._value + "."));
    curarg++;
    if (!Grace_isTrue(callmethod(var_Number, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in within (arg list 3), which corresponds to parameter k, does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("errormessages");
    setLineNumber(301);    // compilenode member
    // call case 6: other requests
    var call6 = callmethodChecked(var_p, "size", []);
    var var_m = call6;
    setLineNumber(302);    // compilenode member
    // call case 6: other requests
    var call8 = callmethodChecked(var_t, "size", []);
    var var_n = call8;
    var if9 = GraceDone;
    setLineNumber(303);    // compilenode identifier
    var opresult12 = callmethodChecked(var_k, "\u2265(1)", [1], var_m);
    if (Grace_isTrue(opresult12)) {
      return var_m;
    }
    setLineNumber(304);    // compilenode identifier
    var diff16 = callmethodChecked(var_n, "-(1)", [1], new GraceNum(1));
    var diff19 = callmethodChecked(var_m, "-(1)", [1], new GraceNum(1));
    // call case 4: self request
    onSelf = true;
    var call20 = callmethodChecked(this, "min3(3)", [3], var_k, diff16, diff19);
    var var_k__39__ = call20;
    setLineNumber(305);    // compilenode identifier
    var opresult23 = callmethodChecked(var_k__39__, "+(1)", [1], new GraceNum(1));
    var var_top = opresult23;
    setLineNumber(307);    // compilenode member
    // call case 5: prelude request
    var call25 = callmethodChecked(var_prelude, "emptyList", []);
    var var_h = call25;
    setLineNumber(308);    // compilenode num
    var opresult29 = callmethodChecked(new GraceNum(0), "..(1)", [1], var_m);
    var block30 = new GraceBlock(this, 308, 1);
    setLineNumber(1);    // compilenode identifier
    block30.real = function(var_i) {
      setLineNumber(308);    // compilenode identifier
      var opresult34 = callmethodChecked(var_i, "+(1)", [1], new GraceNum(1));
      var opresult37 = callmethodChecked(var_i, "+(1)", [1], new GraceNum(1));
      // call case 6: other requests
      var call38 = callmethodChecked(var_h, "at(1)put(1)", [1, 1], opresult34, opresult37);
      return call38;
    };
    // call case 5: prelude request
    var call39 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], opresult29, block30);
    setLineNumber(309);    // compilenode block
    var block41 = new GraceBlock(this, 309, 0);
    block41.real = function() {
      setLineNumber(310);    // compilenode num
      var opresult45 = callmethodChecked(new GraceNum(1), "..(1)", [1], var_n);
      var block46 = new GraceBlock(this, 310, 1);
      setLineNumber(1);    // compilenode identifier
      block46.real = function(var_j) {
        setLineNumber(311);    // compilenode num
        var var_c = new GraceNum(0);
        setLineNumber(312);    // compilenode num
        var opresult50 = callmethodChecked(new GraceNum(1), "..(1)", [1], var_top);
        var block51 = new GraceBlock(this, 312, 1);
        setLineNumber(1);    // compilenode identifier
        block51.real = function(var_i) {
          var if52 = GraceDone;
          setLineNumber(313);    // compilenode identifier
          // call case 6: other requests
          var call54 = callmethodChecked(var_t, "at(1)", [1], var_j);
          // call case 6: other requests
          var call57 = callmethodChecked(var_p, "at(1)", [1], var_i);
          var opresult59 = callmethodChecked(call57, "==(1)", [1], call54);
          if (Grace_isTrue(opresult59)) {
            setLineNumber(314);    // compilenode identifier
            if52 = var_c;
          } else {
            setLineNumber(316);    // compilenode identifier
            // call case 6: other requests
            var call63 = callmethodChecked(var_h, "at(1)", [1], var_i);
            var opresult67 = callmethodChecked(var_i, "+(1)", [1], new GraceNum(1));
            // call case 6: other requests
            var call68 = callmethodChecked(var_h, "at(1)", [1], opresult67);
            // call case 4: self request
            onSelf = true;
            var call69 = callmethodChecked(this, "min3(3)", [3], call63, call68, var_c);
            var opresult71 = callmethodChecked(call69, "+(1)", [1], new GraceNum(1));
            if52 = opresult71;
          }
          var var_e = if52;
          setLineNumber(318);    // compilenode identifier
          var opresult75 = callmethodChecked(var_i, "+(1)", [1], new GraceNum(1));
          // call case 6: other requests
          var call76 = callmethodChecked(var_h, "at(1)", [1], opresult75);
          var_c = call76;
          setLineNumber(319);    // compilenode identifier
          var opresult80 = callmethodChecked(var_i, "+(1)", [1], new GraceNum(1));
          // call case 6: other requests
          var call81 = callmethodChecked(var_h, "at(1)put(1)", [1, 1], opresult80, var_e);
          return call81;
        };
        // call case 5: prelude request
        var call82 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], opresult50, block51);
        setLineNumber(321);    // compilenode block
        var block84 = new GraceBlock(this, 321, 0);
        block84.real = function() {
          var block85 = new GraceBlock(this, 321, 0);
          block85.real = function() {
            var opresult90 = callmethodChecked(var_top, "+(1)", [1], new GraceNum(1));
            // call case 6: other requests
            var call91 = callmethodChecked(var_h, "at(1)", [1], opresult90);
            var opresult93 = callmethodChecked(call91, ">(1)", [1], var_k__39__);
            return opresult93;
          };
          var opresult97 = callmethodChecked(var_top, "\u2265(1)", [1], new GraceNum(0));
          var opresult99 = callmethodChecked(opresult97, "&&(1)", [1], block85);
          return opresult99;
        };
        var block100 = new GraceBlock(this, 321, 0);
        block100.real = function() {
          var diff103 = callmethodChecked(var_top, "-(1)", [1], new GraceNum(1));
          var_top = diff103;
          return GraceDone;
        };
        // call case 5: prelude request
        var call104 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block84, block100);
        var if105 = GraceDone;
        setLineNumber(322);    // compilenode identifier
        var opresult108 = callmethodChecked(var_top, "==(1)", [1], var_m);
        if (Grace_isTrue(opresult108)) {
          setLineNumber(323);    // compilenode identifier
          throw new ReturnException(var_j, returnTarget);
        } else {
          setLineNumber(325);    // compilenode identifier
          var opresult111 = callmethodChecked(var_top, "+(1)", [1], new GraceNum(1));
          var_top = opresult111;
          if105 = GraceDone;
        }
        return if105;
      };
      // call case 5: prelude request
      var call112 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], opresult45, block46);
      return call112;
    };
    var cases40 = [];
    setLineNumber(328);    // compilenode block
    var block113 = new GraceBlock(this, 328, 1);
    setLineNumber(0);    // compilenode string
    var string116 = new GraceString("e");
    // call case 6: other requests
    // call case 5: prelude request
    var call118 = callmethodChecked(var_prelude, "VariablePattern", []);
    var call119 = callmethodChecked(call118, "new(1)", [1], string116);
    setLineNumber(328);    // compilenode member
    // call case 5: prelude request
    var call121 = callmethodChecked(var_prelude, "BoundsError", []);
    // call case 6: other requests
    setLineNumber(0);    // compilenode member
    // call case 5: prelude request
    var call123 = callmethodChecked(var_prelude, "AndPattern", []);
    var call124 = callmethodChecked(call123, "new(2)", [2], call119, call121);
    block113.pattern = call124;
    setLineNumber(328);    // compilenode member
    // call case 5: prelude request
    var call126 = callmethodChecked(var_prelude, "BoundsError", []);
    block113.paramTypes = [call126];
    block113.real = function(var_e) {
      throw new ReturnException(new GraceNum(0), returnTarget);
      return undefined;
    };
    cases40.push(block113);
    setLineNumber(309);    // compiletrycatch
    var catchres40 = tryCatch(block41,cases40,false);
    setModuleName("errormessages");
    setLineNumber(329);    // compilenode num
    return new GraceNum(0);
  };
  func4.paramTypes = [];
  func4.paramTypes.push([type_String, "p"]);
  func4.paramTypes.push([type_String, "t"]);
  func4.paramTypes.push([type_Number, "k"]);
  func4.paramCounts = [1, 1, 1];
  this.methods["name(1)matches(1)within(1)"] = func4;
  func4.definitionLine = 280;
  func4.definitionModule = "errormessages";
  setLineNumber(332);    // compilenode method
  var func127 = function(argcv) {    // method min3(_,_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_a = arguments[curarg];
    curarg++;
    var var_b = arguments[curarg];
    curarg++;
    var var_c = arguments[curarg];
    curarg++;
    setModuleName("errormessages");
    var if128 = GraceDone;
    setLineNumber(333);    // compilenode identifier
    var opresult131 = callmethodChecked(var_a, "<(1)", [1], var_b);
    if (Grace_isTrue(opresult131)) {
      if128 = var_a;
    } else {
      if128 = var_b;
    }
    var var_sf = if128;
    var if132 = GraceDone;
    setLineNumber(334);    // compilenode identifier
    var opresult135 = callmethodChecked(var_sf, "<(1)", [1], var_c);
    if (Grace_isTrue(opresult135)) {
      if132 = var_sf;
    } else {
      if132 = var_c;
    }
    return if132;
  };
  func127.confidential = true;
  func127.paramCounts = [3];
  this.methods["min3(3)"] = func127;
  func127.definitionLine = 332;
  func127.definitionModule = "errormessages";
  setLineNumber(339);    // compilenode method
  var func136 = function(argcv) {    // method syntaxError(_)atRange(_,_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_message = arguments[curarg];
    curarg++;
    var var_errlinenum = arguments[curarg];
    curarg++;
    var var_startpos = arguments[curarg];
    curarg++;
    var var_endpos = arguments[curarg];
    curarg++;
    setModuleName("errormessages");
    setLineNumber(340);    // compilenode array
    var array138 = new PrimitiveGraceList([]);
    // call case 4: self request
    onSelf = true;
    var call139 = callmethodChecked(this, "syntaxError(1)atRange(3)withSuggestions(1)", [1, 3, 1], var_message, var_errlinenum, var_startpos, var_endpos, array138);
    return call139;
  };
  func136.paramCounts = [1, 3];
  this.methods["syntaxError(1)atRange(3)"] = func136;
  func136.definitionLine = 339;
  func136.definitionModule = "errormessages";
  setLineNumber(343);    // compilenode method
  var func140 = function(argcv) {    // method syntaxError(_)atRange(_,_,_)withSuggestion(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_message = arguments[curarg];
    curarg++;
    var var_errlinenum = arguments[curarg];
    curarg++;
    var var_startpos = arguments[curarg];
    curarg++;
    var var_endpos = arguments[curarg];
    curarg++;
    var var_suggestion__39__ = arguments[curarg];
    curarg++;
    setModuleName("errormessages");
    setLineNumber(344);    // compilenode identifier
    var array142 = new PrimitiveGraceList([var_suggestion__39__]);
    // call case 4: self request
    onSelf = true;
    var call143 = callmethodChecked(this, "syntaxError(1)atRange(3)withSuggestions(1)", [1, 3, 1], var_message, var_errlinenum, var_startpos, var_endpos, array142);
    return call143;
  };
  func140.paramCounts = [1, 3, 1];
  this.methods["syntaxError(1)atRange(3)withSuggestion(1)"] = func140;
  func140.definitionLine = 343;
  func140.definitionModule = "errormessages";
  setLineNumber(347);    // compilenode method
  var func144 = function(argcv) {    // method syntaxError(_)atRange(_,_,_)withSuggestions(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_message = arguments[curarg];
    curarg++;
    var var_errlinenum = arguments[curarg];
    curarg++;
    var var_startpos = arguments[curarg];
    curarg++;
    var var_endpos = arguments[curarg];
    curarg++;
    var var_suggestions = arguments[curarg];
    curarg++;
    setModuleName("errormessages");
    var if145 = GraceDone;
    setLineNumber(348);    // compilenode identifier
    var opresult148 = callmethodChecked(var_startpos, "==(1)", [1], var_endpos);
    if (Grace_isTrue(opresult148)) {
      // call case 6: other requests
      var call150 = callmethodChecked(var_startpos, "asString", []);
      if145 = call150;
    } else {
      var string151 = new GraceString("");
      var string154 = new GraceString("-");
      var string157 = new GraceString("");
      var opresult159 = callmethodChecked(string157, "++(1)", [1], var_startpos);
      var opresult161 = callmethodChecked(opresult159, "++(1)", [1], string154);
      var opresult163 = callmethodChecked(opresult161, "++(1)", [1], var_endpos);
      var opresult165 = callmethodChecked(opresult163, "++(1)", [1], string151);
      if145 = opresult165;
    }
    var var_loc = if145;
    setLineNumber(349);    // compilenode string
    var string166 = new GraceString("----");
    var var_arr = string166;
    setLineNumber(350);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call170 = callmethodChecked(var_errlinenum, "asString", []);
    var call171 = callmethodChecked(call170, "size", []);
    var opresult174 = callmethodChecked(var_startpos, "+(1)", [1], call171);
    var opresult177 = callmethodChecked(new GraceNum(2), "..(1)", [1], opresult174);
    var block178 = new GraceBlock(this, 350, 1);
    setLineNumber(1);    // compilenode identifier
    block178.real = function(var___95____95__0) {
      setLineNumber(351);    // compilenode string
      var string179 = new GraceString("-");
      var opresult182 = callmethodChecked(var_arr, "++(1)", [1], string179);
      var_arr = opresult182;
      return GraceDone;
    };
    // call case 5: prelude request
    var call183 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], opresult177, block178);
    setLineNumber(353);    // compilenode identifier
    var opresult187 = callmethodChecked(var_startpos, "..(1)", [1], var_endpos);
    var block188 = new GraceBlock(this, 353, 1);
    setLineNumber(1);    // compilenode identifier
    block188.real = function(var___95____95__1) {
      setLineNumber(354);    // compilenode string
      var string189 = new GraceString("^");
      var opresult192 = callmethodChecked(var_arr, "++(1)", [1], string189);
      var_arr = opresult192;
      return GraceDone;
    };
    // call case 5: prelude request
    var call193 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], opresult187, block188);
    setLineNumber(356);    // compilenode string
    var string195 = new GraceString("");
    var string198 = new GraceString(":");
    var opresult200 = callmethodChecked(string198, "++(1)", [1], var_loc);
    var opresult202 = callmethodChecked(opresult200, "++(1)", [1], string195);
    // call case 6: other requests
    var call203 = callmethodChecked(var_util, "syntaxError(6)", [6], var_message, var_errlinenum, opresult202, var_arr, GraceFalse, var_suggestions);
    return call203;
  };
  func144.paramCounts = [1, 3, 1];
  this.methods["syntaxError(1)atRange(3)withSuggestions(1)"] = func144;
  func144.definitionLine = 347;
  func144.definitionModule = "errormessages";
  setLineNumber(359);    // compilenode method
  var func204 = function(argcv) {    // method error(_)atRange(_,_,_)withSuggestions(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_message = arguments[curarg];
    curarg++;
    var var_errlinenum = arguments[curarg];
    curarg++;
    var var_startpos = arguments[curarg];
    curarg++;
    var var_endpos = arguments[curarg];
    curarg++;
    var var_suggestions = arguments[curarg];
    curarg++;
    setModuleName("errormessages");
    var if205 = GraceDone;
    setLineNumber(360);    // compilenode identifier
    var opresult208 = callmethodChecked(var_startpos, "==(1)", [1], var_endpos);
    if (Grace_isTrue(opresult208)) {
      // call case 6: other requests
      var call210 = callmethodChecked(var_startpos, "asString", []);
      if205 = call210;
    } else {
      var string211 = new GraceString("");
      var string214 = new GraceString("-");
      var string217 = new GraceString("");
      var opresult219 = callmethodChecked(string217, "++(1)", [1], var_startpos);
      var opresult221 = callmethodChecked(opresult219, "++(1)", [1], string214);
      var opresult223 = callmethodChecked(opresult221, "++(1)", [1], var_endpos);
      var opresult225 = callmethodChecked(opresult223, "++(1)", [1], string211);
      if205 = opresult225;
    }
    var var_loc = if205;
    setLineNumber(361);    // compilenode string
    var string226 = new GraceString("----");
    var var_arr = string226;
    setLineNumber(362);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call230 = callmethodChecked(var_errlinenum, "asString", []);
    var call231 = callmethodChecked(call230, "size", []);
    var opresult234 = callmethodChecked(var_startpos, "+(1)", [1], call231);
    var opresult237 = callmethodChecked(new GraceNum(2), "..(1)", [1], opresult234);
    var block238 = new GraceBlock(this, 362, 1);
    setLineNumber(1);    // compilenode identifier
    block238.real = function(var___95____95__2) {
      setLineNumber(363);    // compilenode string
      var string239 = new GraceString("-");
      var opresult242 = callmethodChecked(var_arr, "++(1)", [1], string239);
      var_arr = opresult242;
      return GraceDone;
    };
    // call case 5: prelude request
    var call243 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], opresult237, block238);
    setLineNumber(365);    // compilenode identifier
    var opresult247 = callmethodChecked(var_startpos, "..(1)", [1], var_endpos);
    var block248 = new GraceBlock(this, 365, 1);
    setLineNumber(1);    // compilenode identifier
    block248.real = function(var___95____95__3) {
      setLineNumber(366);    // compilenode string
      var string249 = new GraceString("^");
      var opresult252 = callmethodChecked(var_arr, "++(1)", [1], string249);
      var_arr = opresult252;
      return GraceDone;
    };
    // call case 5: prelude request
    var call253 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], opresult247, block248);
    setLineNumber(368);    // compilenode string
    var string255 = new GraceString("");
    var string258 = new GraceString(":");
    var opresult260 = callmethodChecked(string258, "++(1)", [1], var_loc);
    var opresult262 = callmethodChecked(opresult260, "++(1)", [1], string255);
    // call case 6: other requests
    var call263 = callmethodChecked(var_util, "generalError(6)", [6], var_message, var_errlinenum, opresult262, var_arr, GraceFalse, var_suggestions);
    return call263;
  };
  func204.paramCounts = [1, 3, 1];
  this.methods["error(1)atRange(3)withSuggestions(1)"] = func204;
  func204.definitionLine = 359;
  func204.definitionModule = "errormessages";
  setLineNumber(371);    // compilenode method
  var func264 = function(argcv) {    // method error(_)atRange(_,_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_message = arguments[curarg];
    curarg++;
    var var_errlinenum = arguments[curarg];
    curarg++;
    var var_startpos = arguments[curarg];
    curarg++;
    var var_endpos = arguments[curarg];
    curarg++;
    setModuleName("errormessages");
    setLineNumber(372);    // compilenode array
    var array266 = new PrimitiveGraceList([]);
    // call case 4: self request
    onSelf = true;
    var call267 = callmethodChecked(this, "error(1)atRange(3)withSuggestions(1)", [1, 3, 1], var_message, var_errlinenum, var_startpos, var_endpos, array266);
    return call267;
  };
  func264.paramCounts = [1, 3];
  this.methods["error(1)atRange(3)"] = func264;
  func264.definitionLine = 371;
  func264.definitionModule = "errormessages";
  setLineNumber(375);    // compilenode method
  var func268 = function(argcv) {    // method syntaxError(_)atPosition(_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_message = arguments[curarg];
    curarg++;
    var var_errlinenum = arguments[curarg];
    curarg++;
    var var_errpos = arguments[curarg];
    curarg++;
    setModuleName("errormessages");
    setLineNumber(376);    // compilenode array
    var array270 = new PrimitiveGraceList([]);
    // call case 4: self request
    onSelf = true;
    var call271 = callmethodChecked(this, "syntaxError(1)atPosition(2)withSuggestions(1)", [1, 2, 1], var_message, var_errlinenum, var_errpos, array270);
    return call271;
  };
  func268.paramCounts = [1, 2];
  this.methods["syntaxError(1)atPosition(2)"] = func268;
  func268.definitionLine = 375;
  func268.definitionModule = "errormessages";
  setLineNumber(379);    // compilenode method
  var func272 = function(argcv) {    // method error(_)atPosition(_,_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_message = arguments[curarg];
    curarg++;
    var var_errlinenum = arguments[curarg];
    curarg++;
    var var_errpos = arguments[curarg];
    curarg++;
    setModuleName("errormessages");
    setLineNumber(380);    // compilenode array
    var array274 = new PrimitiveGraceList([]);
    // call case 4: self request
    onSelf = true;
    var call275 = callmethodChecked(this, "error(1)atPosition(2)withSuggestions(1)", [1, 2, 1], var_message, var_errlinenum, var_errpos, array274);
    return call275;
  };
  func272.paramCounts = [1, 2];
  this.methods["error(1)atPosition(2)"] = func272;
  func272.definitionLine = 379;
  func272.definitionModule = "errormessages";
  setLineNumber(383);    // compilenode method
  var func276 = function(argcv) {    // method syntaxError(_)atPosition(_,_)withSuggestion(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_message = arguments[curarg];
    curarg++;
    var var_errlinenum = arguments[curarg];
    curarg++;
    var var_errpos = arguments[curarg];
    curarg++;
    var var_suggestion__39__ = arguments[curarg];
    curarg++;
    setModuleName("errormessages");
    setLineNumber(384);    // compilenode identifier
    var array278 = new PrimitiveGraceList([var_suggestion__39__]);
    // call case 4: self request
    onSelf = true;
    var call279 = callmethodChecked(this, "syntaxError(1)atPosition(2)withSuggestions(1)", [1, 2, 1], var_message, var_errlinenum, var_errpos, array278);
    return call279;
  };
  func276.paramCounts = [1, 2, 1];
  this.methods["syntaxError(1)atPosition(2)withSuggestion(1)"] = func276;
  func276.definitionLine = 383;
  func276.definitionModule = "errormessages";
  setLineNumber(387);    // compilenode method
  var func280 = function(argcv) {    // method syntaxError(_)atPosition(_,_)withSuggestions(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_message = arguments[curarg];
    curarg++;
    var var_errlinenum = arguments[curarg];
    curarg++;
    var var_errpos = arguments[curarg];
    curarg++;
    var var_suggestions = arguments[curarg];
    curarg++;
    setModuleName("errormessages");
    setLineNumber(388);    // compilenode string
    var string281 = new GraceString("----");
    var var_arr = string281;
    setLineNumber(389);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call285 = callmethodChecked(var_errlinenum, "asString", []);
    var call286 = callmethodChecked(call285, "size", []);
    var opresult289 = callmethodChecked(var_errpos, "+(1)", [1], call286);
    var opresult292 = callmethodChecked(new GraceNum(2), "..(1)", [1], opresult289);
    var block293 = new GraceBlock(this, 389, 1);
    setLineNumber(1);    // compilenode identifier
    block293.real = function(var___95____95__4) {
      setLineNumber(390);    // compilenode string
      var string294 = new GraceString("-");
      var opresult297 = callmethodChecked(var_arr, "++(1)", [1], string294);
      var_arr = opresult297;
      return GraceDone;
    };
    // call case 5: prelude request
    var call298 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], opresult292, block293);
    setLineNumber(392);    // compilenode string
    var string299 = new GraceString("^");
    var opresult302 = callmethodChecked(var_arr, "++(1)", [1], string299);
    var_arr = opresult302;
    setLineNumber(393);    // compilenode string
    var string304 = new GraceString(")");
    var string307 = new GraceString(":(");
    var opresult309 = callmethodChecked(string307, "++(1)", [1], var_errpos);
    var opresult311 = callmethodChecked(opresult309, "++(1)", [1], string304);
    // call case 6: other requests
    var call312 = callmethodChecked(var_util, "syntaxError(6)", [6], var_message, var_errlinenum, opresult311, var_arr, GraceFalse, var_suggestions);
    return call312;
  };
  func280.paramCounts = [1, 2, 1];
  this.methods["syntaxError(1)atPosition(2)withSuggestions(1)"] = func280;
  func280.definitionLine = 387;
  func280.definitionModule = "errormessages";
  setLineNumber(396);    // compilenode method
  var func313 = function(argcv) {    // method error(_)atPosition(_,_)withSuggestions(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_message = arguments[curarg];
    curarg++;
    var var_errlinenum = arguments[curarg];
    curarg++;
    var var_errpos = arguments[curarg];
    curarg++;
    var var_suggestions = arguments[curarg];
    curarg++;
    setModuleName("errormessages");
    setLineNumber(398);    // compilenode string
    var string314 = new GraceString("----");
    var var_arr = string314;
    setLineNumber(399);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call318 = callmethodChecked(var_errlinenum, "asString", []);
    var call319 = callmethodChecked(call318, "size", []);
    var opresult322 = callmethodChecked(var_errpos, "+(1)", [1], call319);
    var opresult325 = callmethodChecked(new GraceNum(2), "..(1)", [1], opresult322);
    var block326 = new GraceBlock(this, 399, 1);
    setLineNumber(1);    // compilenode identifier
    block326.real = function(var___95____95__5) {
      setLineNumber(400);    // compilenode string
      var string327 = new GraceString("-");
      var opresult330 = callmethodChecked(var_arr, "++(1)", [1], string327);
      var_arr = opresult330;
      return GraceDone;
    };
    // call case 5: prelude request
    var call331 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], opresult325, block326);
    setLineNumber(402);    // compilenode string
    var string332 = new GraceString("^");
    var opresult335 = callmethodChecked(var_arr, "++(1)", [1], string332);
    var_arr = opresult335;
    setLineNumber(403);    // compilenode string
    var string337 = new GraceString(")");
    var string340 = new GraceString(":(");
    var opresult342 = callmethodChecked(string340, "++(1)", [1], var_errpos);
    var opresult344 = callmethodChecked(opresult342, "++(1)", [1], string337);
    // call case 6: other requests
    var call345 = callmethodChecked(var_util, "generalError(6)", [6], var_message, var_errlinenum, opresult344, var_arr, GraceFalse, var_suggestions);
    return call345;
  };
  func313.paramCounts = [1, 2, 1];
  this.methods["error(1)atPosition(2)withSuggestions(1)"] = func313;
  func313.definitionLine = 396;
  func313.definitionModule = "errormessages";
  setLineNumber(406);    // compilenode method
  var func346 = function(argcv) {    // method error(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_message = arguments[curarg];
    curarg++;
    setModuleName("errormessages");
    setLineNumber(407);    // compilenode string
    var string348 = new GraceString("");
    var string349 = new GraceString("");
    var array350 = new PrimitiveGraceList([]);
    // call case 6: other requests
    var call351 = callmethodChecked(var_util, "generalError(6)", [6], var_message, new GraceNum(0), string348, string349, GraceFalse, array350);
    return call351;
  };
  func346.paramCounts = [1];
  this.methods["error(1)"] = func346;
  func346.definitionLine = 406;
  func346.definitionModule = "errormessages";
  setLineNumber(410);    // compilenode method
  var func352 = function(argcv) {    // method error(_)atLine(_)withSuggestions(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_message = arguments[curarg];
    curarg++;
    var var_errlinenum = arguments[curarg];
    curarg++;
    var var_suggestions = arguments[curarg];
    curarg++;
    setModuleName("errormessages");
    setLineNumber(411);    // compilenode string
    var string353 = new GraceString("----");
    var var_arr = string353;
    setLineNumber(412);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call357 = callmethodChecked(var_errlinenum, "asString", []);
    var call358 = callmethodChecked(call357, "size", []);
    var opresult361 = callmethodChecked(new GraceNum(1), "..(1)", [1], call358);
    var block362 = new GraceBlock(this, 412, 1);
    setLineNumber(1);    // compilenode identifier
    block362.real = function(var___95____95__6) {
      setLineNumber(413);    // compilenode string
      var string363 = new GraceString("-");
      var opresult366 = callmethodChecked(var_arr, "++(1)", [1], string363);
      var_arr = opresult366;
      return GraceDone;
    };
    // call case 5: prelude request
    var call367 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], opresult361, block362);
    setLineNumber(415);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    // call case 6: other requests
    var call372 = callmethodChecked(var_util, "lines", []);
    var call373 = callmethodChecked(call372, "at(1)", [1], var_errlinenum);
    var call374 = callmethodChecked(call373, "size", []);
    var opresult377 = callmethodChecked(new GraceNum(1), "..(1)", [1], call374);
    var block378 = new GraceBlock(this, 415, 1);
    setLineNumber(1);    // compilenode identifier
    block378.real = function(var___95____95__7) {
      setLineNumber(416);    // compilenode string
      var string379 = new GraceString("^");
      var opresult382 = callmethodChecked(var_arr, "++(1)", [1], string379);
      var_arr = opresult382;
      return GraceDone;
    };
    // call case 5: prelude request
    var call383 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], opresult377, block378);
    setLineNumber(418);    // compilenode string
    var string385 = new GraceString("");
    // call case 6: other requests
    var call386 = callmethodChecked(var_util, "generalError(6)", [6], var_message, var_errlinenum, string385, var_arr, GraceFalse, var_suggestions);
    return call386;
  };
  func352.paramCounts = [1, 1, 1];
  this.methods["error(1)atLine(1)withSuggestions(1)"] = func352;
  func352.definitionLine = 410;
  func352.definitionModule = "errormessages";
  setLineNumber(421);    // compilenode method
  var func387 = function(argcv) {    // method error(_)atLine(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_message = arguments[curarg];
    curarg++;
    var var_errlinenum = arguments[curarg];
    curarg++;
    setModuleName("errormessages");
    setLineNumber(422);    // compilenode array
    var array389 = new PrimitiveGraceList([]);
    // call case 4: self request
    onSelf = true;
    var call390 = callmethodChecked(this, "error(1)atLine(1)withSuggestions(1)", [1, 1, 1], var_message, var_errlinenum, array389);
    return call390;
  };
  func387.paramCounts = [1, 1];
  this.methods["error(1)atLine(1)"] = func387;
  func387.definitionLine = 421;
  func387.definitionModule = "errormessages";
  setLineNumber(425);    // compilenode method
  var func391 = function(argcv) {    // method syntaxError(_)atLine(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_message = arguments[curarg];
    curarg++;
    var var_errlinenum = arguments[curarg];
    curarg++;
    setModuleName("errormessages");
    setLineNumber(426);    // compilenode array
    var array393 = new PrimitiveGraceList([]);
    // call case 4: self request
    onSelf = true;
    var call394 = callmethodChecked(this, "syntaxError(1)atLine(1)withSuggestions(1)", [1, 1, 1], var_message, var_errlinenum, array393);
    return call394;
  };
  func391.paramCounts = [1, 1];
  this.methods["syntaxError(1)atLine(1)"] = func391;
  func391.definitionLine = 425;
  func391.definitionModule = "errormessages";
  setLineNumber(429);    // compilenode method
  var func395 = function(argcv) {    // method syntaxError(_)atLine(_)withSuggestion(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_message = arguments[curarg];
    curarg++;
    var var_errlinenum = arguments[curarg];
    curarg++;
    var var_suggestion__39__ = arguments[curarg];
    curarg++;
    setModuleName("errormessages");
    setLineNumber(430);    // compilenode identifier
    var array397 = new PrimitiveGraceList([var_suggestion__39__]);
    // call case 4: self request
    onSelf = true;
    var call398 = callmethodChecked(this, "syntaxError(1)atLine(1)withSuggestions(1)", [1, 1, 1], var_message, var_errlinenum, array397);
    return call398;
  };
  func395.paramCounts = [1, 1, 1];
  this.methods["syntaxError(1)atLine(1)withSuggestion(1)"] = func395;
  func395.definitionLine = 429;
  func395.definitionModule = "errormessages";
  setLineNumber(433);    // compilenode method
  var func399 = function(argcv) {    // method syntaxError(_)atLine(_)withSuggestions(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_message = arguments[curarg];
    curarg++;
    var var_errlinenum = arguments[curarg];
    curarg++;
    var var_suggestions = arguments[curarg];
    curarg++;
    setModuleName("errormessages");
    setLineNumber(434);    // compilenode string
    var string400 = new GraceString("----");
    var var_arr = string400;
    setLineNumber(435);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    var call404 = callmethodChecked(var_errlinenum, "asString", []);
    var call405 = callmethodChecked(call404, "size", []);
    var opresult408 = callmethodChecked(new GraceNum(1), "..(1)", [1], call405);
    var block409 = new GraceBlock(this, 435, 1);
    setLineNumber(1);    // compilenode identifier
    block409.real = function(var___95____95__8) {
      setLineNumber(436);    // compilenode string
      var string410 = new GraceString("-");
      var opresult413 = callmethodChecked(var_arr, "++(1)", [1], string410);
      var_arr = opresult413;
      return GraceDone;
    };
    // call case 5: prelude request
    var call414 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], opresult408, block409);
    setLineNumber(438);    // compilenode member
    // call case 6: other requests
    // call case 6: other requests
    // call case 6: other requests
    var call419 = callmethodChecked(var_util, "lines", []);
    var call420 = callmethodChecked(call419, "at(1)", [1], var_errlinenum);
    var call421 = callmethodChecked(call420, "size", []);
    var opresult424 = callmethodChecked(new GraceNum(1), "..(1)", [1], call421);
    var block425 = new GraceBlock(this, 438, 1);
    setLineNumber(1);    // compilenode identifier
    block425.real = function(var___95____95__9) {
      setLineNumber(439);    // compilenode string
      var string426 = new GraceString("^");
      var opresult429 = callmethodChecked(var_arr, "++(1)", [1], string426);
      var_arr = opresult429;
      return GraceDone;
    };
    // call case 5: prelude request
    var call430 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], opresult424, block425);
    setLineNumber(441);    // compilenode string
    var string432 = new GraceString("");
    // call case 6: other requests
    var call433 = callmethodChecked(var_util, "syntaxError(6)", [6], var_message, var_errlinenum, string432, var_arr, GraceFalse, var_suggestions);
    return call433;
  };
  func399.paramCounts = [1, 1, 1];
  this.methods["syntaxError(1)atLine(1)withSuggestions(1)"] = func399;
  func399.definitionLine = 433;
  func399.definitionModule = "errormessages";
  setLineNumber(13);    // compilenode object
  var obj434 = Grace_allocObject(GraceObject, "suggestion");
  obj434.definitionModule = "errormessages";
  obj434.definitionLine = 13;
  obj434.outer = this;
  var reader_errormessages_outer435 = function() {
    return this.outer;
  };
  obj434.methods["outer"] = reader_errormessages_outer435;
  var obj_init_434 = function() {
    var origSuperDepth = superDepth;
    superDepth = obj434;
    var func436 = function(argcv) {    // method new
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      setModuleName("errormessages");
      setLineNumber(14);    // compilenode object
      var obj437 = Grace_allocObject(GraceObject, "suggestion.new");
      obj437.definitionModule = "errormessages";
      obj437.definitionLine = 14;
      obj437.outer = this;
      var reader_errormessages_outer438 = function() {
        return this.outer;
      };
      obj437.methods["outer"] = reader_errormessages_outer438;
      var obj_init_437 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj437;
        var func439 = function(argcv) {    // method replaceRange(_,_)with(_)onLine(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_start = arguments[curarg];
          curarg++;
          var var_end = arguments[curarg];
          curarg++;
          var var_s = arguments[curarg];
          curarg++;
          var var_lineNumber = arguments[curarg];
          curarg++;
          setModuleName("errormessages");
          setLineNumber(24);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call441 = callmethodChecked(this, "getLine(1)", [1], var_lineNumber);
          var var_line = call441;
          var if442 = GraceDone;
          setLineNumber(25);    // compilenode identifier
          var opresult445 = callmethodChecked(var_start, "==(1)", [1], new GraceNum(1));
          if (Grace_isTrue(opresult445)) {
            setLineNumber(26);    // compilenode identifier
            var opresult450 = callmethodChecked(var_end, "+(1)", [1], new GraceNum(1));
            // call case 6: other requests
            var call452 = callmethodChecked(var_line, "size", []);
            // call case 6: other requests
            var call453 = callmethodChecked(var_line, "substringFrom(1)to(1)", [1, 1], opresult450, call452);
            var opresult456 = callmethodChecked(var_s, "++(1)", [1], call453);
            // call case 4: self request
            onSelf = true;
            var call457 = callmethodChecked(this, "addLine(2)", [2], var_lineNumber, opresult456);
            if442 = call457;
          } else {
            setLineNumber(29);    // compilenode identifier
            var opresult462 = callmethodChecked(var_end, "+(1)", [1], new GraceNum(1));
            // call case 6: other requests
            var call464 = callmethodChecked(var_line, "size", []);
            // call case 6: other requests
            var call465 = callmethodChecked(var_line, "substringFrom(1)to(1)", [1, 1], opresult462, call464);
            setLineNumber(28);    // compilenode identifier
            var diff471 = callmethodChecked(var_start, "-(1)", [1], new GraceNum(1));
            // call case 6: other requests
            var call472 = callmethodChecked(var_line, "substringFrom(1)to(1)", [1, 1], new GraceNum(1), diff471);
            var opresult474 = callmethodChecked(call472, "++(1)", [1], var_s);
            var opresult476 = callmethodChecked(opresult474, "++(1)", [1], call465);
            // call case 4: self request
            onSelf = true;
            var call477 = callmethodChecked(this, "addLine(2)", [2], var_lineNumber, opresult476);
            if442 = call477;
          }
          return if442;
        };
        func439.paramCounts = [2, 1, 1];
        obj437.methods["replaceRange(2)with(1)onLine(1)"] = func439;
        func439.definitionLine = 23;
        func439.definitionModule = "errormessages";
        var func478 = function(argcv) {    // method replaceChar(_)with(_)onLine(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_pos = arguments[curarg];
          curarg++;
          var var_s = arguments[curarg];
          curarg++;
          var var_lineNumber = arguments[curarg];
          curarg++;
          setModuleName("errormessages");
          setLineNumber(34);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call480 = callmethodChecked(this, "replaceRange(2)with(1)onLine(1)", [2, 1, 1], var_pos, var_pos, var_s, var_lineNumber);
          return call480;
        };
        func478.paramCounts = [1, 1, 1];
        obj437.methods["replaceChar(1)with(1)onLine(1)"] = func478;
        func478.definitionLine = 33;
        func478.definitionModule = "errormessages";
        var func481 = function(argcv) {    // method replaceUntil(_)with(_)onLine(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_until = arguments[curarg];
          curarg++;
          var var_s = arguments[curarg];
          curarg++;
          var var_lineNumber = arguments[curarg];
          curarg++;
          setModuleName("errormessages");
          setLineNumber(38);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call483 = callmethodChecked(this, "getLine(1)", [1], var_lineNumber);
          var var_line = call483;
          setLineNumber(39);    // compilenode member
          // call case 6: other requests
          var call485 = callmethodChecked(var_until, "size", []);
          var var_len = call485;
          setLineNumber(40);    // compilenode member
          // call case 6: other requests
          var call488 = callmethodChecked(var_line, "size", []);
          var opresult491 = callmethodChecked(new GraceNum(1), "..(1)", [1], call488);
          var block492 = new GraceBlock(this, 40, 1);
          setLineNumber(1);    // compilenode identifier
          block492.real = function(var_i) {
            var if493 = GraceDone;
            setLineNumber(41);    // compilenode identifier
            var opresult499 = callmethodChecked(var_i, "+(1)", [1], var_len);
            var diff501 = callmethodChecked(opresult499, "-(1)", [1], new GraceNum(1));
            // call case 6: other requests
            var call502 = callmethodChecked(var_line, "substringFrom(1)to(1)", [1, 1], var_i, diff501);
            var opresult504 = callmethodChecked(call502, "==(1)", [1], var_until);
            if (Grace_isTrue(opresult504)) {
              setLineNumber(42);    // compilenode identifier
              var opresult509 = callmethodChecked(var_i, "+(1)", [1], var_len);
              var diff511 = callmethodChecked(opresult509, "-(1)", [1], new GraceNum(1));
              // call case 4: self request
              onSelf = true;
              var call512 = callmethodChecked(this, "replaceRange(2)with(1)onLine(1)", [2, 1, 1], new GraceNum(1), diff511, var_s, var_lineNumber);
              setLineNumber(43);    // compilenode identifier
              throw new ReturnException(GraceTrue, returnTarget);
            }
            return if493;
          };
          // call case 5: prelude request
          var call513 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], opresult491, block492);
          setLineNumber(46);    // compilenode identifier
          return GraceFalse;
        };
        func481.paramCounts = [1, 1, 1];
        obj437.methods["replaceUntil(1)with(1)onLine(1)"] = func481;
        func481.definitionLine = 37;
        func481.definitionModule = "errormessages";
        var func514 = function(argcv) {    // method deleteRange(_,_)onLine(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_start = arguments[curarg];
          curarg++;
          var var_end = arguments[curarg];
          curarg++;
          var var_lineNumber = arguments[curarg];
          curarg++;
          setModuleName("errormessages");
          setLineNumber(50);    // compilenode identifier
          var var_start__39__ = var_start;
          setLineNumber(51);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call516 = callmethodChecked(this, "getLine(1)", [1], var_lineNumber);
          var var_line = call516;
          var if517 = GraceDone;
          setLineNumber(52);    // compilenode member
          // call case 6: other requests
          var call519 = callmethodChecked(var_line, "size", []);
          var opresult522 = callmethodChecked(var_end, "==(1)", [1], call519);
          var opresult526 = callmethodChecked(var_start__39__, ">(1)", [1], new GraceNum(1));
          var opresult528 = callmethodChecked(opresult526, "&&(1)", [1], opresult522);
          if (Grace_isTrue(opresult528)) {
            setLineNumber(54);    // compilenode identifier
            var var_indent = GraceTrue;
            setLineNumber(55);    // compilenode identifier
            var diff532 = callmethodChecked(var_start__39__, "-(1)", [1], new GraceNum(1));
            var opresult535 = callmethodChecked(new GraceNum(1), "..(1)", [1], diff532);
            var block536 = new GraceBlock(this, 55, 1);
            setLineNumber(1);    // compilenode identifier
            block536.real = function(var_i) {
              var if537 = GraceDone;
              setLineNumber(56);    // compilenode string
              var string538 = new GraceString(" ");
              // call case 6: other requests
              var call541 = callmethodChecked(var_line, "at(1)", [1], var_i);
              var opresult543 = callmethodChecked(call541, "\u2260(1)", [1], string538);
              if (Grace_isTrue(opresult543)) {
                setLineNumber(57);    // compilenode identifier
                var_indent = GraceFalse;
                if537 = GraceDone;
              }
              return if537;
            };
            // call case 5: prelude request
            var call544 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], opresult535, block536);
            var if545 = GraceDone;
            setLineNumber(60);    // compilenode identifier
            var opresult548 = callmethodChecked(var_indent, "==(1)", [1], GraceTrue);
            if (Grace_isTrue(opresult548)) {
              setLineNumber(61);    // compilenode num
              var_start__39__ = new GraceNum(1);
              if545 = GraceDone;
            }
            if517 = if545;
          }
          setLineNumber(64);    // compilenode string
          var string550 = new GraceString("");
          // call case 4: self request
          onSelf = true;
          var call551 = callmethodChecked(this, "replaceRange(2)with(1)onLine(1)", [2, 1, 1], var_start__39__, var_end, string550, var_lineNumber);
          return call551;
        };
        func514.paramCounts = [2, 1];
        obj437.methods["deleteRange(2)onLine(1)"] = func514;
        func514.definitionLine = 49;
        func514.definitionModule = "errormessages";
        var func552 = function(argcv) {    // method deleteChar(_)onLine(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_pos = arguments[curarg];
          curarg++;
          var var_lineNumber = arguments[curarg];
          curarg++;
          setModuleName("errormessages");
          setLineNumber(68);    // compilenode string
          var string554 = new GraceString("");
          // call case 4: self request
          onSelf = true;
          var call555 = callmethodChecked(this, "replaceRange(2)with(1)onLine(1)", [2, 1, 1], var_pos, var_pos, string554, var_lineNumber);
          return call555;
        };
        func552.paramCounts = [1, 1];
        obj437.methods["deleteChar(1)onLine(1)"] = func552;
        func552.definitionLine = 67;
        func552.definitionModule = "errormessages";
        var func556 = function(argcv) {    // method append(_)onLine(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_s = arguments[curarg];
          curarg++;
          var var_lineNumber = arguments[curarg];
          curarg++;
          setModuleName("errormessages");
          setLineNumber(72);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call558 = callmethodChecked(this, "getLine(1)", [1], var_lineNumber);
          var var_line = call558;
          setLineNumber(73);    // compilenode identifier
          var opresult562 = callmethodChecked(var_line, "++(1)", [1], var_s);
          // call case 4: self request
          onSelf = true;
          var call563 = callmethodChecked(this, "addLine(2)", [2], var_lineNumber, opresult562);
          return call563;
        };
        func556.paramCounts = [1, 1];
        obj437.methods["append(1)onLine(1)"] = func556;
        func556.definitionLine = 71;
        func556.definitionModule = "errormessages";
        var func564 = function(argcv) {    // method insert(_)atPosition(_)onLine(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_s = arguments[curarg];
          curarg++;
          var var_pos = arguments[curarg];
          curarg++;
          var var_lineNumber = arguments[curarg];
          curarg++;
          setModuleName("errormessages");
          setLineNumber(77);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call566 = callmethodChecked(this, "getLine(1)", [1], var_lineNumber);
          var var_line = call566;
          var if567 = GraceDone;
          setLineNumber(78);    // compilenode identifier
          var opresult570 = callmethodChecked(var_pos, "==(1)", [1], new GraceNum(1));
          if (Grace_isTrue(opresult570)) {
            setLineNumber(79);    // compilenode identifier
            var opresult574 = callmethodChecked(var_s, "++(1)", [1], var_line);
            // call case 4: self request
            onSelf = true;
            var call575 = callmethodChecked(this, "addLine(2)", [2], var_lineNumber, opresult574);
            if567 = call575;
          } else {
            setLineNumber(82);    // compilenode member
            // call case 6: other requests
            var call579 = callmethodChecked(var_line, "size", []);
            // call case 6: other requests
            var call580 = callmethodChecked(var_line, "substringFrom(1)to(1)", [1, 1], var_pos, call579);
            setLineNumber(81);    // compilenode identifier
            var diff586 = callmethodChecked(var_pos, "-(1)", [1], new GraceNum(1));
            // call case 6: other requests
            var call587 = callmethodChecked(var_line, "substringFrom(1)to(1)", [1, 1], new GraceNum(1), diff586);
            var opresult589 = callmethodChecked(call587, "++(1)", [1], var_s);
            var opresult591 = callmethodChecked(opresult589, "++(1)", [1], call580);
            // call case 4: self request
            onSelf = true;
            var call592 = callmethodChecked(this, "addLine(2)", [2], var_lineNumber, opresult591);
            if567 = call592;
          }
          return if567;
        };
        func564.paramCounts = [1, 1, 1];
        obj437.methods["insert(1)atPosition(1)onLine(1)"] = func564;
        func564.definitionLine = 76;
        func564.definitionModule = "errormessages";
        var func593 = function(argcv) {    // method getTokenStart(_)includeLeadingSpace(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_token = arguments[curarg];
          curarg++;
          var var_includeLeading = arguments[curarg];
          curarg++;
          setModuleName("errormessages");
          setLineNumber(91);    // compilenode member
          // call case 6: other requests
          var call595 = callmethodChecked(var_token, "linePos", []);
          var var_start = call595;
          var if596 = GraceDone;
          setLineNumber(93);    // compilenode identifier
          var opresult599 = callmethodChecked(var_includeLeading, "==(1)", [1], GraceTrue);
          if (Grace_isTrue(opresult599)) {
            var if600 = GraceDone;
            setLineNumber(94);    // compilenode block
            var block601 = new GraceBlock(this, 94, 0);
            block601.real = function() {
              // call case 6: other requests
              var call603 = callmethodChecked(var_token, "line", []);
              // call case 6: other requests
              // call case 6: other requests
              var call607 = callmethodChecked(var_token, "prev", []);
              var call608 = callmethodChecked(call607, "line", []);
              var opresult610 = callmethodChecked(call608, "==(1)", [1], call603);
              return opresult610;
            };
            // call case 6: other requests
            var call614 = callmethodChecked(var_token, "prev", []);
            var opresult616 = callmethodChecked(call614, "\u2260(1)", [1], GraceFalse);
            var opresult618 = callmethodChecked(opresult616, "&&(1)", [1], block601);
            if (Grace_isTrue(opresult618)) {
              setLineNumber(95);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              var call621 = callmethodChecked(var_token, "prev", []);
              var call622 = callmethodChecked(call621, "size", []);
              // call case 6: other requests
              // call case 6: other requests
              var call626 = callmethodChecked(var_token, "prev", []);
              var call627 = callmethodChecked(call626, "linePos", []);
              var opresult629 = callmethodChecked(call627, "+(1)", [1], call622);
              var_start = opresult629;
              if600 = GraceDone;
            }
            if596 = if600;
          }
          var if630 = GraceDone;
          setLineNumber(99);    // compilenode member
          // call case 6: other requests
          var call633 = callmethodChecked(var_token, "indent", []);
          var opresult635 = callmethodChecked(call633, "+(1)", [1], new GraceNum(1));
          // call case 6: other requests
          var call638 = callmethodChecked(var_token, "linePos", []);
          var opresult640 = callmethodChecked(call638, "==(1)", [1], opresult635);
          if (Grace_isTrue(opresult640)) {
            var if641 = GraceDone;
            setLineNumber(100);    // compilenode block
            var block642 = new GraceBlock(this, 100, 0);
            block642.real = function() {
              // call case 6: other requests
              var call644 = callmethodChecked(var_token, "line", []);
              // call case 6: other requests
              // call case 6: other requests
              var call648 = callmethodChecked(var_token, "next", []);
              var call649 = callmethodChecked(call648, "line", []);
              var opresult651 = callmethodChecked(call649, "\u2260(1)", [1], call644);
              return opresult651;
            };
            // call case 6: other requests
            var call655 = callmethodChecked(var_token, "next", []);
            var opresult657 = callmethodChecked(call655, "==(1)", [1], GraceFalse);
            var opresult659 = callmethodChecked(opresult657, "||(1)", [1], block642);
            if (Grace_isTrue(opresult659)) {
              setLineNumber(101);    // compilenode num
              var_start = new GraceNum(1);
              if641 = GraceDone;
            }
            if630 = if641;
          }
          setLineNumber(104);    // compilenode identifier
          return var_start;
        };
        func593.paramCounts = [1, 1];
        obj437.methods["getTokenStart(1)includeLeadingSpace(1)"] = func593;
        func593.definitionLine = 90;
        func593.definitionModule = "errormessages";
        var func660 = function(argcv) {    // method getTokenEnd(_)includeTrailingSpace(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_token = arguments[curarg];
          curarg++;
          var var_includeTrailing = arguments[curarg];
          curarg++;
          setModuleName("errormessages");
          setLineNumber(108);    // compilenode member
          // call case 6: other requests
          var call663 = callmethodChecked(var_token, "size", []);
          // call case 6: other requests
          var call666 = callmethodChecked(var_token, "linePos", []);
          var opresult668 = callmethodChecked(call666, "+(1)", [1], call663);
          var diff670 = callmethodChecked(opresult668, "-(1)", [1], new GraceNum(1));
          var var_end = diff670;
          var if671 = GraceDone;
          setLineNumber(110);    // compilenode identifier
          var opresult674 = callmethodChecked(var_includeTrailing, "==(1)", [1], GraceTrue);
          if (Grace_isTrue(opresult674)) {
            var if675 = GraceDone;
            setLineNumber(111);    // compilenode block
            var block676 = new GraceBlock(this, 111, 0);
            block676.real = function() {
              // call case 6: other requests
              var call678 = callmethodChecked(var_token, "line", []);
              // call case 6: other requests
              // call case 6: other requests
              var call682 = callmethodChecked(var_token, "next", []);
              var call683 = callmethodChecked(call682, "line", []);
              var opresult685 = callmethodChecked(call683, "==(1)", [1], call678);
              return opresult685;
            };
            // call case 6: other requests
            var call689 = callmethodChecked(var_token, "next", []);
            var opresult691 = callmethodChecked(call689, "\u2260(1)", [1], GraceFalse);
            var opresult693 = callmethodChecked(opresult691, "&&(1)", [1], block676);
            if (Grace_isTrue(opresult693)) {
              setLineNumber(112);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              var call697 = callmethodChecked(var_token, "next", []);
              var call698 = callmethodChecked(call697, "linePos", []);
              var diff700 = callmethodChecked(call698, "-(1)", [1], new GraceNum(1));
              var_end = diff700;
              if675 = GraceDone;
            } else {
              setLineNumber(114);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              var call704 = callmethodChecked(var_token, "line", []);
              // call case 4: self request
              onSelf = true;
              var call705 = callmethodChecked(this, "getLine(1)", [1], call704);
              var call706 = callmethodChecked(call705, "size", []);
              var_end = call706;
              if675 = GraceDone;
            }
            if671 = if675;
          }
          setLineNumber(117);    // compilenode identifier
          return var_end;
        };
        func660.paramCounts = [1, 1];
        obj437.methods["getTokenEnd(1)includeTrailingSpace(1)"] = func660;
        func660.definitionLine = 107;
        func660.definitionModule = "errormessages";
        var func707 = function(argcv) {    // method replaceToken(_)leading(_)trailing(_)with(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_token = arguments[curarg];
          curarg++;
          var var_replaceLeading = arguments[curarg];
          curarg++;
          var var_replaceTrailing = arguments[curarg];
          curarg++;
          var var_s = arguments[curarg];
          curarg++;
          setModuleName("errormessages");
          setLineNumber(121);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call709 = callmethodChecked(this, "getTokenStart(1)includeLeadingSpace(1)", [1, 1], var_token, var_replaceLeading);
          var var_start = call709;
          setLineNumber(122);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call711 = callmethodChecked(this, "getTokenEnd(1)includeTrailingSpace(1)", [1, 1], var_token, var_replaceTrailing);
          var var_end = call711;
          setLineNumber(123);    // compilenode member
          // call case 6: other requests
          var call714 = callmethodChecked(var_token, "line", []);
          // call case 4: self request
          onSelf = true;
          var call715 = callmethodChecked(this, "replaceRange(2)with(1)onLine(1)", [2, 1, 1], var_start, var_end, var_s, call714);
          return call715;
        };
        func707.paramCounts = [1, 1, 1, 1];
        obj437.methods["replaceToken(1)leading(1)trailing(1)with(1)"] = func707;
        func707.definitionLine = 120;
        func707.definitionModule = "errormessages";
        var func716 = function(argcv) {    // method replaceToken(_)with(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_token = arguments[curarg];
          curarg++;
          var var_s = arguments[curarg];
          curarg++;
          setModuleName("errormessages");
          setLineNumber(127);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call718 = callmethodChecked(this, "replaceToken(1)leading(1)trailing(1)with(1)", [1, 1, 1, 1], var_token, GraceFalse, GraceFalse, var_s);
          return call718;
        };
        func716.paramCounts = [1, 1];
        obj437.methods["replaceToken(1)with(1)"] = func716;
        func716.definitionLine = 126;
        func716.definitionModule = "errormessages";
        var func719 = function(argcv) {    // method replaceTokenRange(_,_)leading(_)trailing(_)with(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_start = arguments[curarg];
          curarg++;
          var var_end = arguments[curarg];
          curarg++;
          var var_replaceLeading = arguments[curarg];
          curarg++;
          var var_replaceTrailing = arguments[curarg];
          curarg++;
          var var_s = arguments[curarg];
          curarg++;
          setModuleName("errormessages");
          var if720 = GraceDone;
          setLineNumber(131);    // compilenode identifier
          var opresult723 = callmethodChecked(var_start, "==(1)", [1], var_end);
          if (Grace_isTrue(opresult723)) {
            setLineNumber(132);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call725 = callmethodChecked(this, "replaceToken(1)leading(1)trailing(1)with(1)", [1, 1, 1, 1], var_start, var_replaceLeading, var_replaceTrailing, var_s);
            if720 = call725;
          } else {
            setLineNumber(135);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call727 = callmethodChecked(this, "getTokenStart(1)includeLeadingSpace(1)", [1, 1], var_start, var_replaceLeading);
            var var_insertPos = call727;
            setLineNumber(136);    // compilenode member
            // call case 6: other requests
            var call730 = callmethodChecked(var_start, "indent", []);
            // call case 6: other requests
            // call case 6: other requests
            var call733 = callmethodChecked(var_start, "line", []);
            // call case 4: self request
            onSelf = true;
            var call734 = callmethodChecked(this, "getLine(1)", [1], call733);
            var call735 = callmethodChecked(call734, "substringFrom(1)to(1)", [1, 1], new GraceNum(1), call730);
            var var_indent = call735;
            setLineNumber(137);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call737 = callmethodChecked(this, "deleteTokenRange(2)leading(1)trailing(1)", [2, 1, 1], var_start, var_end, var_replaceLeading, var_replaceTrailing);
            var if738 = GraceDone;
            setLineNumber(139);    // compilenode string
            var string739 = new GraceString("");
            // call case 6: other requests
            var call743 = callmethodChecked(var_start, "line", []);
            // call case 4: self request
            onSelf = true;
            var call744 = callmethodChecked(this, "getLine(1)", [1], call743);
            var opresult746 = callmethodChecked(call744, "==(1)", [1], string739);
            if (Grace_isTrue(opresult746)) {
              setLineNumber(140);    // compilenode identifier
              var opresult750 = callmethodChecked(var_indent, "++(1)", [1], var_s);
              // call case 6: other requests
              var call752 = callmethodChecked(var_start, "line", []);
              // call case 4: self request
              onSelf = true;
              var call753 = callmethodChecked(this, "insert(1)atPosition(1)onLine(1)", [1, 1, 1], opresult750, var_insertPos, call752);
              if738 = call753;
            } else {
              setLineNumber(142);    // compilenode member
              // call case 6: other requests
              var call756 = callmethodChecked(var_start, "line", []);
              // call case 4: self request
              onSelf = true;
              var call757 = callmethodChecked(this, "insert(1)atPosition(1)onLine(1)", [1, 1, 1], var_s, var_insertPos, call756);
              if738 = call757;
            }
            if720 = if738;
          }
          return if720;
        };
        func719.paramCounts = [2, 1, 1, 1];
        obj437.methods["replaceTokenRange(2)leading(1)trailing(1)with(1)"] = func719;
        func719.definitionLine = 130;
        func719.definitionModule = "errormessages";
        var func758 = function(argcv) {    // method replaceTokenRange(_,_)with(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_start = arguments[curarg];
          curarg++;
          var var_end = arguments[curarg];
          curarg++;
          var var_s = arguments[curarg];
          curarg++;
          setModuleName("errormessages");
          setLineNumber(148);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call760 = callmethodChecked(this, "replaceTokenRange(2)leading(1)trailing(1)with(1)", [2, 1, 1, 1], var_start, var_end, GraceFalse, GraceFalse, var_s);
          return call760;
        };
        func758.paramCounts = [2, 1];
        obj437.methods["replaceTokenRange(2)with(1)"] = func758;
        func758.definitionLine = 147;
        func758.definitionModule = "errormessages";
        var func761 = function(argcv) {    // method deleteToken(_)leading(_)trailing(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_token = arguments[curarg];
          curarg++;
          var var_deleteLeading = arguments[curarg];
          curarg++;
          var var_deleteTrailing = arguments[curarg];
          curarg++;
          setModuleName("errormessages");
          setLineNumber(153);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call763 = callmethodChecked(this, "getTokenStart(1)includeLeadingSpace(1)", [1, 1], var_token, var_deleteLeading);
          var var_start = call763;
          setLineNumber(154);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call765 = callmethodChecked(this, "getTokenEnd(1)includeTrailingSpace(1)", [1, 1], var_token, var_deleteTrailing);
          var var_end = call765;
          setLineNumber(155);    // compilenode member
          // call case 6: other requests
          var call768 = callmethodChecked(var_token, "line", []);
          // call case 4: self request
          onSelf = true;
          var call769 = callmethodChecked(this, "deleteRange(2)onLine(1)", [2, 1], var_start, var_end, call768);
          return call769;
        };
        func761.paramCounts = [1, 1, 1];
        obj437.methods["deleteToken(1)leading(1)trailing(1)"] = func761;
        func761.definitionLine = 152;
        func761.definitionModule = "errormessages";
        var func770 = function(argcv) {    // method deleteToken(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_token = arguments[curarg];
          curarg++;
          setModuleName("errormessages");
          setLineNumber(159);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call772 = callmethodChecked(this, "deleteToken(1)leading(1)trailing(1)", [1, 1, 1], var_token, GraceFalse, GraceFalse);
          return call772;
        };
        func770.paramCounts = [1];
        obj437.methods["deleteToken(1)"] = func770;
        func770.definitionLine = 158;
        func770.definitionModule = "errormessages";
        var func773 = function(argcv) {    // method deleteTokenRange(_,_)leading(_)trailing(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_start = arguments[curarg];
          curarg++;
          var var_end = arguments[curarg];
          curarg++;
          var var_deleteLeading = arguments[curarg];
          curarg++;
          var var_deleteTrailing = arguments[curarg];
          curarg++;
          setModuleName("errormessages");
          var if774 = GraceDone;
          setLineNumber(164);    // compilenode identifier
          var opresult777 = callmethodChecked(var_start, "==(1)", [1], var_end);
          if (Grace_isTrue(opresult777)) {
            setLineNumber(165);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call779 = callmethodChecked(this, "deleteToken(1)leading(1)trailing(1)", [1, 1, 1], var_start, var_deleteLeading, var_deleteTrailing);
            if774 = call779;
          } else {
            setLineNumber(167);    // compilenode member
            // call case 6: other requests
            var call781 = callmethodChecked(var_start, "line", []);
            var var_line = call781;
            setLineNumber(168);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call783 = callmethodChecked(this, "getTokenStart(1)includeLeadingSpace(1)", [1, 1], var_start, var_deleteLeading);
            var var_startPos = call783;
            setLineNumber(169);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call785 = callmethodChecked(this, "getTokenEnd(1)includeTrailingSpace(1)", [1, 1], var_start, var_deleteTrailing);
            var var_endPos = call785;
            setLineNumber(170);    // compilenode member
            // call case 6: other requests
            var call787 = callmethodChecked(var_start, "next", []);
            var var_tok = call787;
            setLineNumber(171);    // compilenode block
            var block789 = new GraceBlock(this, 171, 0);
            block789.real = function() {
              var opresult792 = callmethodChecked(var_tok, "\u2260(1)", [1], var_end);
              return opresult792;
            };
            var block793 = new GraceBlock(this, 171, 0);
            block793.real = function() {
              var if794 = GraceDone;
              setLineNumber(172);    // compilenode member
              // call case 6: other requests
              var call797 = callmethodChecked(var_tok, "line", []);
              var opresult799 = callmethodChecked(call797, "\u2260(1)", [1], var_line);
              if (Grace_isTrue(opresult799)) {
                setLineNumber(173);    // compilenode identifier
                // call case 4: self request
                onSelf = true;
                var call801 = callmethodChecked(this, "deleteRange(2)onLine(1)", [2, 1], var_startPos, var_endPos, var_line);
                setLineNumber(174);    // compilenode member
                // call case 6: other requests
                var call803 = callmethodChecked(var_tok, "line", []);
                var_line = call803;
                setLineNumber(175);    // compilenode identifier
                // call case 4: self request
                onSelf = true;
                var call805 = callmethodChecked(this, "getTokenStart(1)includeLeadingSpace(1)", [1, 1], var_tok, var_deleteLeading);
                var_startPos = call805;
                if794 = GraceDone;
              }
              setLineNumber(177);    // compilenode identifier
              // call case 4: self request
              onSelf = true;
              var call807 = callmethodChecked(this, "getTokenEnd(1)includeTrailingSpace(1)", [1, 1], var_tok, var_deleteTrailing);
              var_endPos = call807;
              setLineNumber(178);    // compilenode member
              // call case 6: other requests
              var call809 = callmethodChecked(var_tok, "next", []);
              var_tok = call809;
              return GraceDone;
            };
            // call case 5: prelude request
            var call810 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block789, block793);
            var if811 = GraceDone;
            setLineNumber(180);    // compilenode member
            // call case 6: other requests
            var call814 = callmethodChecked(var_end, "line", []);
            var opresult816 = callmethodChecked(call814, "\u2260(1)", [1], var_line);
            if (Grace_isTrue(opresult816)) {
              setLineNumber(181);    // compilenode identifier
              // call case 4: self request
              onSelf = true;
              var call818 = callmethodChecked(this, "deleteRange(2)onLine(1)", [2, 1], var_startPos, var_endPos, var_line);
              if811 = call818;
            }
            setLineNumber(183);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call820 = callmethodChecked(this, "getTokenEnd(1)includeTrailingSpace(1)", [1, 1], var_end, var_deleteTrailing);
            var_endPos = call820;
            setLineNumber(184);    // compilenode member
            // call case 6: other requests
            var call823 = callmethodChecked(var_end, "line", []);
            // call case 4: self request
            onSelf = true;
            var call824 = callmethodChecked(this, "deleteRange(2)onLine(1)", [2, 1], var_startPos, var_endPos, call823);
            if774 = call824;
          }
          return if774;
        };
        func773.paramCounts = [2, 1, 1];
        obj437.methods["deleteTokenRange(2)leading(1)trailing(1)"] = func773;
        func773.definitionLine = 163;
        func773.definitionModule = "errormessages";
        var func825 = function(argcv) {    // method deleteTokenRange(_,_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_start = arguments[curarg];
          curarg++;
          var var_end = arguments[curarg];
          curarg++;
          setModuleName("errormessages");
          setLineNumber(189);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call827 = callmethodChecked(this, "deleteTokenRange(2)leading(1)trailing(1)", [2, 1, 1], var_start, var_end, GraceFalse, GraceFalse);
          return call827;
        };
        func825.paramCounts = [2];
        obj437.methods["deleteTokenRange(2)"] = func825;
        func825.definitionLine = 188;
        func825.definitionModule = "errormessages";
        var func828 = function(argcv) {    // method deleteLine(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_lineNumber = arguments[curarg];
          curarg++;
          setModuleName("errormessages");
          setLineNumber(193);    // compilenode string
          var string830 = new GraceString("");
          // call case 4: self request
          onSelf = true;
          var call831 = callmethodChecked(this, "addLine(2)", [2], var_lineNumber, string830);
          return call831;
        };
        func828.paramCounts = [1];
        obj437.methods["deleteLine(1)"] = func828;
        func828.definitionLine = 192;
        func828.definitionModule = "errormessages";
        var func832 = function(argcv) {    // method insert(_)afterToken(_)andTrailingSpace(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_s = arguments[curarg];
          curarg++;
          var var_token = arguments[curarg];
          curarg++;
          var var_afterTrailing = arguments[curarg];
          curarg++;
          setModuleName("errormessages");
          setLineNumber(197);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call835 = callmethodChecked(this, "getTokenEnd(1)includeTrailingSpace(1)", [1, 1], var_token, var_afterTrailing);
          var opresult837 = callmethodChecked(call835, "+(1)", [1], new GraceNum(1));
          var var_pos = opresult837;
          setLineNumber(198);    // compilenode member
          // call case 6: other requests
          var call840 = callmethodChecked(var_token, "line", []);
          // call case 4: self request
          onSelf = true;
          var call841 = callmethodChecked(this, "insert(1)atPosition(1)onLine(1)", [1, 1, 1], var_s, var_pos, call840);
          return call841;
        };
        func832.paramCounts = [1, 1, 1];
        obj437.methods["insert(1)afterToken(1)andTrailingSpace(1)"] = func832;
        func832.definitionLine = 196;
        func832.definitionModule = "errormessages";
        var func842 = function(argcv) {    // method insert(_)afterToken(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_s = arguments[curarg];
          curarg++;
          var var_token = arguments[curarg];
          curarg++;
          setModuleName("errormessages");
          setLineNumber(202);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call844 = callmethodChecked(this, "insert(1)afterToken(1)andTrailingSpace(1)", [1, 1, 1], var_s, var_token, GraceFalse);
          return call844;
        };
        func842.paramCounts = [1, 1];
        obj437.methods["insert(1)afterToken(1)"] = func842;
        func842.definitionLine = 201;
        func842.definitionModule = "errormessages";
        var func845 = function(argcv) {    // method insert(_)beforeToken(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_s = arguments[curarg];
          curarg++;
          var var_token = arguments[curarg];
          curarg++;
          setModuleName("errormessages");
          setLineNumber(206);    // compilenode member
          // call case 6: other requests
          var call848 = callmethodChecked(var_token, "linePos", []);
          // call case 6: other requests
          var call850 = callmethodChecked(var_token, "line", []);
          // call case 4: self request
          onSelf = true;
          var call851 = callmethodChecked(this, "insert(1)atPosition(1)onLine(1)", [1, 1, 1], var_s, call848, call850);
          return call851;
        };
        func845.paramCounts = [1, 1];
        obj437.methods["insert(1)beforeToken(1)"] = func845;
        func845.definitionLine = 205;
        func845.definitionModule = "errormessages";
        var func852 = function(argcv) {    // method insertNewLine(_)after(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_line = arguments[curarg];
          curarg++;
          var var_lineNumber = arguments[curarg];
          curarg++;
          setModuleName("errormessages");
          setLineNumber(211);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call854 = callmethodChecked(this, "addLine(2)", [2], var_lineNumber, var_line);
          return call854;
        };
        func852.paramCounts = [1, 1];
        obj437.methods["insertNewLine(1)after(1)"] = func852;
        func852.definitionLine = 210;
        func852.definitionModule = "errormessages";
        var func855 = function(argcv) {    // method addLine(_,_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_lineNumber = arguments[curarg];
          curarg++;
          var var_line = arguments[curarg];
          curarg++;
          setModuleName("errormessages");
          setLineNumber(217);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call857 = callmethodChecked(this, "findLine(1)", [1], var_lineNumber);
          var var_i = call857;
          var if858 = GraceDone;
          setLineNumber(218);    // compilenode identifier
          var opresult861 = callmethodChecked(var_i, "\u2260(1)", [1], GraceFalse);
          if (Grace_isTrue(opresult861)) {
            setLineNumber(219);    // compilenode identifier
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call864 = callmethodChecked(this, "lines", []);
            var call865 = callmethodChecked(call864, "at(1)put(1)", [1, 1], var_i, var_line);
            if858 = call865;
          } else {
            setLineNumber(222);    // compilenode identifier
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call868 = callmethodChecked(this, "lineNumbers", []);
            var call869 = callmethodChecked(call868, "push(1)", [1], var_lineNumber);
            setLineNumber(223);    // compilenode identifier
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call872 = callmethodChecked(this, "lines", []);
            var call873 = callmethodChecked(call872, "push(1)", [1], var_line);
            var if874 = GraceDone;
            setLineNumber(224);    // compilenode member
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call878 = callmethodChecked(this, "lines", []);
            var call879 = callmethodChecked(call878, "size", []);
            var opresult881 = callmethodChecked(call879, ">(1)", [1], new GraceNum(1));
            if (Grace_isTrue(opresult881)) {
              setLineNumber(226);    // compilenode member
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call884 = callmethodChecked(this, "lines", []);
              var call885 = callmethodChecked(call884, "size", []);
              var_i = call885;
              setLineNumber(227);    // compilenode block
              var block887 = new GraceBlock(this, 227, 0);
              block887.real = function() {
                var block888 = new GraceBlock(this, 227, 0);
                block888.real = function() {
                  var diff892 = callmethodChecked(var_i, "-(1)", [1], new GraceNum(1));
                  // call case 6: other requests
                  // call case 4: self request
                  onSelf = true;
                  var call894 = callmethodChecked(this, "lineNumbers", []);
                  var call895 = callmethodChecked(call894, "at(1)", [1], diff892);
                  var opresult898 = callmethodChecked(var_lineNumber, "<(1)", [1], call895);
                  return opresult898;
                };
                var opresult902 = callmethodChecked(var_i, ">(1)", [1], new GraceNum(1));
                var opresult904 = callmethodChecked(opresult902, "&&(1)", [1], block888);
                return opresult904;
              };
              var block905 = new GraceBlock(this, 227, 0);
              block905.real = function() {
                setLineNumber(228);    // compilenode identifier
                var diff910 = callmethodChecked(var_i, "-(1)", [1], new GraceNum(1));
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call912 = callmethodChecked(this, "lineNumbers", []);
                var call913 = callmethodChecked(call912, "at(1)", [1], diff910);
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call915 = callmethodChecked(this, "lineNumbers", []);
                var call916 = callmethodChecked(call915, "at(1)put(1)", [1, 1], var_i, call913);
                setLineNumber(229);    // compilenode identifier
                var diff921 = callmethodChecked(var_i, "-(1)", [1], new GraceNum(1));
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call923 = callmethodChecked(this, "lines", []);
                var call924 = callmethodChecked(call923, "at(1)", [1], diff921);
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call926 = callmethodChecked(this, "lines", []);
                var call927 = callmethodChecked(call926, "at(1)put(1)", [1, 1], var_i, call924);
                setLineNumber(230);    // compilenode identifier
                var diff930 = callmethodChecked(var_i, "-(1)", [1], new GraceNum(1));
                var_i = diff930;
                return GraceDone;
              };
              // call case 5: prelude request
              var call931 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block887, block905);
              setLineNumber(232);    // compilenode identifier
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call934 = callmethodChecked(this, "lineNumbers", []);
              var call935 = callmethodChecked(call934, "at(1)put(1)", [1, 1], var_i, var_lineNumber);
              setLineNumber(233);    // compilenode identifier
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call938 = callmethodChecked(this, "lines", []);
              var call939 = callmethodChecked(call938, "at(1)put(1)", [1, 1], var_i, var_line);
              if874 = call939;
            }
            if858 = if874;
          }
          return if858;
        };
        func855.paramCounts = [2];
        obj437.methods["addLine(2)"] = func855;
        func855.definitionLine = 216;
        func855.definitionModule = "errormessages";
        var func940 = function(argcv) {    // method findLine(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_lineNumber = arguments[curarg];
          curarg++;
          setModuleName("errormessages");
          setLineNumber(241);    // compilenode member
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call944 = callmethodChecked(this, "lineNumbers", []);
          var call945 = callmethodChecked(call944, "indices", []);
          var block946 = new GraceBlock(this, 241, 1);
          setLineNumber(1);    // compilenode identifier
          block946.real = function(var_i) {
            var if947 = GraceDone;
            setLineNumber(242);    // compilenode identifier
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call951 = callmethodChecked(this, "lineNumbers", []);
            var call952 = callmethodChecked(call951, "at(1)", [1], var_i);
            var opresult954 = callmethodChecked(call952, "==(1)", [1], var_lineNumber);
            if (Grace_isTrue(opresult954)) {
              setLineNumber(243);    // compilenode identifier
              throw new ReturnException(var_i, returnTarget);
            }
            return if947;
          };
          // call case 5: prelude request
          var call955 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call945, block946);
          setLineNumber(246);    // compilenode identifier
          return GraceFalse;
        };
        func940.confidential = true;
        func940.paramCounts = [1];
        obj437.methods["findLine(1)"] = func940;
        func940.definitionLine = 240;
        func940.definitionModule = "errormessages";
        var func956 = function(argcv) {    // method getLine(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_lineNumber = arguments[curarg];
          curarg++;
          setModuleName("errormessages");
          setLineNumber(252);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call958 = callmethodChecked(this, "findLine(1)", [1], var_lineNumber);
          var var_i = call958;
          var if959 = GraceDone;
          setLineNumber(253);    // compilenode identifier
          var opresult962 = callmethodChecked(var_i, "==(1)", [1], GraceFalse);
          if (Grace_isTrue(opresult962)) {
            setLineNumber(254);    // compilenode identifier
            // call case 6: other requests
            // call case 6: other requests
            var call965 = callmethodChecked(var_util, "lines", []);
            var call966 = callmethodChecked(call965, "at(1)", [1], var_lineNumber);
            if959 = call966;
          } else {
            setLineNumber(256);    // compilenode identifier
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call969 = callmethodChecked(this, "lines", []);
            var call970 = callmethodChecked(call969, "at(1)", [1], var_i);
            if959 = call970;
          }
          return if959;
        };
        func956.confidential = true;
        func956.paramCounts = [1];
        obj437.methods["getLine(1)"] = func956;
        func956.definitionLine = 251;
        func956.definitionModule = "errormessages";
        var func971 = function(argcv) {    // method print
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("errormessages");
          setLineNumber(261);    // compilenode member
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call975 = callmethodChecked(this, "lines", []);
          var call976 = callmethodChecked(call975, "size", []);
          var opresult979 = callmethodChecked(new GraceNum(1), "..(1)", [1], call976);
          var block980 = new GraceBlock(this, 261, 1);
          setLineNumber(1);    // compilenode identifier
          block980.real = function(var_i) {
            var if981 = GraceDone;
            setLineNumber(262);    // compilenode block
            var block982 = new GraceBlock(this, 262, 0);
            block982.real = function() {
              var diff987 = callmethodChecked(var_i, "-(1)", [1], new GraceNum(1));
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call989 = callmethodChecked(this, "lineNumbers", []);
              var call990 = callmethodChecked(call989, "at(1)", [1], diff987);
              var opresult992 = callmethodChecked(call990, "+(1)", [1], new GraceNum(1));
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call996 = callmethodChecked(this, "lineNumbers", []);
              var call997 = callmethodChecked(call996, "at(1)", [1], var_i);
              var opresult999 = callmethodChecked(call997, ">(1)", [1], opresult992);
              return opresult999;
            };
            var opresult1003 = callmethodChecked(var_i, ">(1)", [1], new GraceNum(1));
            var opresult1005 = callmethodChecked(opresult1003, "&&(1)", [1], block982);
            if (Grace_isTrue(opresult1005)) {
              setLineNumber(263);    // compilenode string
              var string1006 = new GraceString("");
              var var_s = string1006;
              setLineNumber(264);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              var diff1013 = callmethodChecked(var_i, "-(1)", [1], new GraceNum(1));
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call1015 = callmethodChecked(this, "lineNumbers", []);
              var call1016 = callmethodChecked(call1015, "at(1)", [1], diff1013);
              var call1017 = callmethodChecked(call1016, "asString", []);
              var call1018 = callmethodChecked(call1017, "size", []);
              var opresult1021 = callmethodChecked(new GraceNum(1), "..(1)", [1], call1018);
              var block1022 = new GraceBlock(this, 264, 0);
              block1022.real = function() {
                setLineNumber(265);    // compilenode string
                var string1023 = new GraceString(" ");
                var opresult1026 = callmethodChecked(var_s, "++(1)", [1], string1023);
                var_s = opresult1026;
                return GraceDone;
              };
              // call case 5: prelude request
              var call1027 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], opresult1021, block1022);
              setLineNumber(267);    // compilenode string
              var string1029 = new GraceString("...\n");
              var string1032 = new GraceString("    ");
              var opresult1034 = callmethodChecked(string1032, "++(1)", [1], var_s);
              var opresult1036 = callmethodChecked(opresult1034, "++(1)", [1], string1029);
              // call case 6: other requests
              // call case 6: other requests
              var call1038 = callmethodChecked(var_io, "error", []);
              var call1039 = callmethodChecked(call1038, "write(1)", [1], opresult1036);
              if981 = call1039;
            }
            var if1040 = GraceDone;
            setLineNumber(270);    // compilenode identifier
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call1043 = callmethodChecked(this, "lineNumbers", []);
            var call1044 = callmethodChecked(call1043, "at(1)", [1], var_i);
            // call case 6: other requests
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call1049 = callmethodChecked(this, "lineNumbers", []);
            var call1050 = callmethodChecked(call1049, "at(1)", [1], var_i);
            var call1051 = callmethodChecked(call1050, "truncated", []);
            var opresult1053 = callmethodChecked(call1051, "\u2260(1)", [1], call1044);
            if (Grace_isTrue(opresult1053)) {
              setLineNumber(271);    // compilenode string
              var string1055 = new GraceString("\n");
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call1059 = callmethodChecked(this, "lines", []);
              var call1060 = callmethodChecked(call1059, "at(1)", [1], var_i);
              var string1062 = new GraceString(": ");
              // call case 6: other requests
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call1067 = callmethodChecked(this, "lineNumbers", []);
              var call1068 = callmethodChecked(call1067, "at(1)", [1], var_i);
              var call1069 = callmethodChecked(call1068, "truncated", []);
              var string1071 = new GraceString(" *");
              var opresult1073 = callmethodChecked(string1071, "++(1)", [1], call1069);
              var opresult1075 = callmethodChecked(opresult1073, "++(1)", [1], string1062);
              var opresult1077 = callmethodChecked(opresult1075, "++(1)", [1], call1060);
              var opresult1079 = callmethodChecked(opresult1077, "++(1)", [1], string1055);
              // call case 6: other requests
              // call case 6: other requests
              var call1081 = callmethodChecked(var_io, "error", []);
              var call1082 = callmethodChecked(call1081, "write(1)", [1], opresult1079);
              if1040 = call1082;
            } else {
              setLineNumber(273);    // compilenode string
              var string1084 = new GraceString("\n");
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call1088 = callmethodChecked(this, "lines", []);
              var call1089 = callmethodChecked(call1088, "at(1)", [1], var_i);
              var string1091 = new GraceString(": ");
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call1095 = callmethodChecked(this, "lineNumbers", []);
              var call1096 = callmethodChecked(call1095, "at(1)", [1], var_i);
              var string1098 = new GraceString("  ");
              var opresult1100 = callmethodChecked(string1098, "++(1)", [1], call1096);
              var opresult1102 = callmethodChecked(opresult1100, "++(1)", [1], string1091);
              var opresult1104 = callmethodChecked(opresult1102, "++(1)", [1], call1089);
              var opresult1106 = callmethodChecked(opresult1104, "++(1)", [1], string1084);
              // call case 6: other requests
              // call case 6: other requests
              var call1108 = callmethodChecked(var_io, "error", []);
              var call1109 = callmethodChecked(call1108, "write(1)", [1], opresult1106);
              if1040 = call1109;
            }
            return if1040;
          };
          // call case 5: prelude request
          var call1110 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], opresult979, block980);
          return call1110;
        };
        func971.paramCounts = [0];
        obj437.methods["print"] = func971;
        func971.definitionLine = 260;
        func971.definitionModule = "errormessages";
        setLineNumber(15);    // compilenode array
        var array1111 = new PrimitiveGraceList([]);
        obj437.data["lineNumbers"] = array1111;
        var reader_errormessages_lineNumbers1112 = function() {
          return this.data["lineNumbers"];
        };
        reader_errormessages_lineNumbers1112.def = true;
        reader_errormessages_lineNumbers1112.confidential = true;
        obj437.methods["lineNumbers"] = reader_errormessages_lineNumbers1112;
        setLineNumber(16);    // compilenode array
        var array1113 = new PrimitiveGraceList([]);
        obj437.data["lines"] = array1113;
        var reader_errormessages_lines1114 = function() {
          return this.data["lines"];
        };
        reader_errormessages_lines1114.def = true;
        reader_errormessages_lines1114.confidential = true;
        obj437.methods["lines"] = reader_errormessages_lines1114;
        superDepth = origSuperDepth;
      };
      obj_init_437.apply(obj437, []);
      return obj437;
    };
    func436.paramCounts = [0];
    obj434.methods["new"] = func436;
    func436.definitionLine = 14;
    func436.definitionModule = "errormessages";
      var func1115 = function(argcv) {    // method new$object(_)
        var curarg = 1;
        var inheritingObject = arguments[curarg++];
        // Start argument processing
        curarg = 1;
        // End argument processing
        setModuleName("errormessages");
        var returnTarget = invocationCount;
        invocationCount++;
        var obj1116 = Grace_allocObject(GraceObject, "new");
        obj1116.definitionModule = "errormessages";
        obj1116.definitionLine = 14;
        var inho1116 = inheritingObject;
        while (inho1116.superobj) inho1116 = inho1116.superobj;
        inho1116.superobj = obj1116;
        obj1116.data = inheritingObject.data;
        if (inheritingObject.hasOwnProperty('_value'))
          obj1116._value = inheritingObject._value;
        obj1116.outer = this;
        var reader_errormessages_outer1117 = function() {
          return this.outer;
        };
        obj1116.methods["outer"] = reader_errormessages_outer1117;
        var obj_init_1116 = function() {
          var origSuperDepth = superDepth;
          superDepth = obj1116;
          var func1118 = function(argcv) {    // method replaceRange(_,_)with(_)onLine(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_start = arguments[curarg];
            curarg++;
            var var_end = arguments[curarg];
            curarg++;
            var var_s = arguments[curarg];
            curarg++;
            var var_lineNumber = arguments[curarg];
            curarg++;
            setModuleName("errormessages");
            setLineNumber(24);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call1120 = callmethodChecked(this, "getLine(1)", [1], var_lineNumber);
            var var_line = call1120;
            var if1121 = GraceDone;
            setLineNumber(25);    // compilenode identifier
            var opresult1124 = callmethodChecked(var_start, "==(1)", [1], new GraceNum(1));
            if (Grace_isTrue(opresult1124)) {
              setLineNumber(26);    // compilenode identifier
              var opresult1129 = callmethodChecked(var_end, "+(1)", [1], new GraceNum(1));
              // call case 6: other requests
              var call1131 = callmethodChecked(var_line, "size", []);
              // call case 6: other requests
              var call1132 = callmethodChecked(var_line, "substringFrom(1)to(1)", [1, 1], opresult1129, call1131);
              var opresult1135 = callmethodChecked(var_s, "++(1)", [1], call1132);
              // call case 4: self request
              onSelf = true;
              var call1136 = callmethodChecked(this, "addLine(2)", [2], var_lineNumber, opresult1135);
              if1121 = call1136;
            } else {
              setLineNumber(29);    // compilenode identifier
              var opresult1141 = callmethodChecked(var_end, "+(1)", [1], new GraceNum(1));
              // call case 6: other requests
              var call1143 = callmethodChecked(var_line, "size", []);
              // call case 6: other requests
              var call1144 = callmethodChecked(var_line, "substringFrom(1)to(1)", [1, 1], opresult1141, call1143);
              setLineNumber(28);    // compilenode identifier
              var diff1150 = callmethodChecked(var_start, "-(1)", [1], new GraceNum(1));
              // call case 6: other requests
              var call1151 = callmethodChecked(var_line, "substringFrom(1)to(1)", [1, 1], new GraceNum(1), diff1150);
              var opresult1153 = callmethodChecked(call1151, "++(1)", [1], var_s);
              var opresult1155 = callmethodChecked(opresult1153, "++(1)", [1], call1144);
              // call case 4: self request
              onSelf = true;
              var call1156 = callmethodChecked(this, "addLine(2)", [2], var_lineNumber, opresult1155);
              if1121 = call1156;
            }
            return if1121;
          };
          func1118.paramCounts = [2, 1, 1];
          obj1116.methods["replaceRange(2)with(1)onLine(1)"] = func1118;
          func1118.definitionLine = 23;
          func1118.definitionModule = "errormessages";
          var func1157 = function(argcv) {    // method replaceChar(_)with(_)onLine(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_pos = arguments[curarg];
            curarg++;
            var var_s = arguments[curarg];
            curarg++;
            var var_lineNumber = arguments[curarg];
            curarg++;
            setModuleName("errormessages");
            setLineNumber(34);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call1159 = callmethodChecked(this, "replaceRange(2)with(1)onLine(1)", [2, 1, 1], var_pos, var_pos, var_s, var_lineNumber);
            return call1159;
          };
          func1157.paramCounts = [1, 1, 1];
          obj1116.methods["replaceChar(1)with(1)onLine(1)"] = func1157;
          func1157.definitionLine = 33;
          func1157.definitionModule = "errormessages";
          var func1160 = function(argcv) {    // method replaceUntil(_)with(_)onLine(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_until = arguments[curarg];
            curarg++;
            var var_s = arguments[curarg];
            curarg++;
            var var_lineNumber = arguments[curarg];
            curarg++;
            setModuleName("errormessages");
            setLineNumber(38);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call1162 = callmethodChecked(this, "getLine(1)", [1], var_lineNumber);
            var var_line = call1162;
            setLineNumber(39);    // compilenode member
            // call case 6: other requests
            var call1164 = callmethodChecked(var_until, "size", []);
            var var_len = call1164;
            setLineNumber(40);    // compilenode member
            // call case 6: other requests
            var call1167 = callmethodChecked(var_line, "size", []);
            var opresult1170 = callmethodChecked(new GraceNum(1), "..(1)", [1], call1167);
            var block1171 = new GraceBlock(this, 40, 1);
            setLineNumber(1);    // compilenode identifier
            block1171.real = function(var_i) {
              var if1172 = GraceDone;
              setLineNumber(41);    // compilenode identifier
              var opresult1178 = callmethodChecked(var_i, "+(1)", [1], var_len);
              var diff1180 = callmethodChecked(opresult1178, "-(1)", [1], new GraceNum(1));
              // call case 6: other requests
              var call1181 = callmethodChecked(var_line, "substringFrom(1)to(1)", [1, 1], var_i, diff1180);
              var opresult1183 = callmethodChecked(call1181, "==(1)", [1], var_until);
              if (Grace_isTrue(opresult1183)) {
                setLineNumber(42);    // compilenode identifier
                var opresult1188 = callmethodChecked(var_i, "+(1)", [1], var_len);
                var diff1190 = callmethodChecked(opresult1188, "-(1)", [1], new GraceNum(1));
                // call case 4: self request
                onSelf = true;
                var call1191 = callmethodChecked(this, "replaceRange(2)with(1)onLine(1)", [2, 1, 1], new GraceNum(1), diff1190, var_s, var_lineNumber);
                setLineNumber(43);    // compilenode identifier
                throw new ReturnException(GraceTrue, returnTarget);
              }
              return if1172;
            };
            // call case 5: prelude request
            var call1192 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], opresult1170, block1171);
            setLineNumber(46);    // compilenode identifier
            return GraceFalse;
          };
          func1160.paramCounts = [1, 1, 1];
          obj1116.methods["replaceUntil(1)with(1)onLine(1)"] = func1160;
          func1160.definitionLine = 37;
          func1160.definitionModule = "errormessages";
          var func1193 = function(argcv) {    // method deleteRange(_,_)onLine(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_start = arguments[curarg];
            curarg++;
            var var_end = arguments[curarg];
            curarg++;
            var var_lineNumber = arguments[curarg];
            curarg++;
            setModuleName("errormessages");
            setLineNumber(50);    // compilenode identifier
            var var_start__39__ = var_start;
            setLineNumber(51);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call1195 = callmethodChecked(this, "getLine(1)", [1], var_lineNumber);
            var var_line = call1195;
            var if1196 = GraceDone;
            setLineNumber(52);    // compilenode member
            // call case 6: other requests
            var call1198 = callmethodChecked(var_line, "size", []);
            var opresult1201 = callmethodChecked(var_end, "==(1)", [1], call1198);
            var opresult1205 = callmethodChecked(var_start__39__, ">(1)", [1], new GraceNum(1));
            var opresult1207 = callmethodChecked(opresult1205, "&&(1)", [1], opresult1201);
            if (Grace_isTrue(opresult1207)) {
              setLineNumber(54);    // compilenode identifier
              var var_indent = GraceTrue;
              setLineNumber(55);    // compilenode identifier
              var diff1211 = callmethodChecked(var_start__39__, "-(1)", [1], new GraceNum(1));
              var opresult1214 = callmethodChecked(new GraceNum(1), "..(1)", [1], diff1211);
              var block1215 = new GraceBlock(this, 55, 1);
              setLineNumber(1);    // compilenode identifier
              block1215.real = function(var_i) {
                var if1216 = GraceDone;
                setLineNumber(56);    // compilenode string
                var string1217 = new GraceString(" ");
                // call case 6: other requests
                var call1220 = callmethodChecked(var_line, "at(1)", [1], var_i);
                var opresult1222 = callmethodChecked(call1220, "\u2260(1)", [1], string1217);
                if (Grace_isTrue(opresult1222)) {
                  setLineNumber(57);    // compilenode identifier
                  var_indent = GraceFalse;
                  if1216 = GraceDone;
                }
                return if1216;
              };
              // call case 5: prelude request
              var call1223 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], opresult1214, block1215);
              var if1224 = GraceDone;
              setLineNumber(60);    // compilenode identifier
              var opresult1227 = callmethodChecked(var_indent, "==(1)", [1], GraceTrue);
              if (Grace_isTrue(opresult1227)) {
                setLineNumber(61);    // compilenode num
                var_start__39__ = new GraceNum(1);
                if1224 = GraceDone;
              }
              if1196 = if1224;
            }
            setLineNumber(64);    // compilenode string
            var string1229 = new GraceString("");
            // call case 4: self request
            onSelf = true;
            var call1230 = callmethodChecked(this, "replaceRange(2)with(1)onLine(1)", [2, 1, 1], var_start__39__, var_end, string1229, var_lineNumber);
            return call1230;
          };
          func1193.paramCounts = [2, 1];
          obj1116.methods["deleteRange(2)onLine(1)"] = func1193;
          func1193.definitionLine = 49;
          func1193.definitionModule = "errormessages";
          var func1231 = function(argcv) {    // method deleteChar(_)onLine(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_pos = arguments[curarg];
            curarg++;
            var var_lineNumber = arguments[curarg];
            curarg++;
            setModuleName("errormessages");
            setLineNumber(68);    // compilenode string
            var string1233 = new GraceString("");
            // call case 4: self request
            onSelf = true;
            var call1234 = callmethodChecked(this, "replaceRange(2)with(1)onLine(1)", [2, 1, 1], var_pos, var_pos, string1233, var_lineNumber);
            return call1234;
          };
          func1231.paramCounts = [1, 1];
          obj1116.methods["deleteChar(1)onLine(1)"] = func1231;
          func1231.definitionLine = 67;
          func1231.definitionModule = "errormessages";
          var func1235 = function(argcv) {    // method append(_)onLine(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_s = arguments[curarg];
            curarg++;
            var var_lineNumber = arguments[curarg];
            curarg++;
            setModuleName("errormessages");
            setLineNumber(72);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call1237 = callmethodChecked(this, "getLine(1)", [1], var_lineNumber);
            var var_line = call1237;
            setLineNumber(73);    // compilenode identifier
            var opresult1241 = callmethodChecked(var_line, "++(1)", [1], var_s);
            // call case 4: self request
            onSelf = true;
            var call1242 = callmethodChecked(this, "addLine(2)", [2], var_lineNumber, opresult1241);
            return call1242;
          };
          func1235.paramCounts = [1, 1];
          obj1116.methods["append(1)onLine(1)"] = func1235;
          func1235.definitionLine = 71;
          func1235.definitionModule = "errormessages";
          var func1243 = function(argcv) {    // method insert(_)atPosition(_)onLine(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_s = arguments[curarg];
            curarg++;
            var var_pos = arguments[curarg];
            curarg++;
            var var_lineNumber = arguments[curarg];
            curarg++;
            setModuleName("errormessages");
            setLineNumber(77);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call1245 = callmethodChecked(this, "getLine(1)", [1], var_lineNumber);
            var var_line = call1245;
            var if1246 = GraceDone;
            setLineNumber(78);    // compilenode identifier
            var opresult1249 = callmethodChecked(var_pos, "==(1)", [1], new GraceNum(1));
            if (Grace_isTrue(opresult1249)) {
              setLineNumber(79);    // compilenode identifier
              var opresult1253 = callmethodChecked(var_s, "++(1)", [1], var_line);
              // call case 4: self request
              onSelf = true;
              var call1254 = callmethodChecked(this, "addLine(2)", [2], var_lineNumber, opresult1253);
              if1246 = call1254;
            } else {
              setLineNumber(82);    // compilenode member
              // call case 6: other requests
              var call1258 = callmethodChecked(var_line, "size", []);
              // call case 6: other requests
              var call1259 = callmethodChecked(var_line, "substringFrom(1)to(1)", [1, 1], var_pos, call1258);
              setLineNumber(81);    // compilenode identifier
              var diff1265 = callmethodChecked(var_pos, "-(1)", [1], new GraceNum(1));
              // call case 6: other requests
              var call1266 = callmethodChecked(var_line, "substringFrom(1)to(1)", [1, 1], new GraceNum(1), diff1265);
              var opresult1268 = callmethodChecked(call1266, "++(1)", [1], var_s);
              var opresult1270 = callmethodChecked(opresult1268, "++(1)", [1], call1259);
              // call case 4: self request
              onSelf = true;
              var call1271 = callmethodChecked(this, "addLine(2)", [2], var_lineNumber, opresult1270);
              if1246 = call1271;
            }
            return if1246;
          };
          func1243.paramCounts = [1, 1, 1];
          obj1116.methods["insert(1)atPosition(1)onLine(1)"] = func1243;
          func1243.definitionLine = 76;
          func1243.definitionModule = "errormessages";
          var func1272 = function(argcv) {    // method getTokenStart(_)includeLeadingSpace(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_token = arguments[curarg];
            curarg++;
            var var_includeLeading = arguments[curarg];
            curarg++;
            setModuleName("errormessages");
            setLineNumber(91);    // compilenode member
            // call case 6: other requests
            var call1274 = callmethodChecked(var_token, "linePos", []);
            var var_start = call1274;
            var if1275 = GraceDone;
            setLineNumber(93);    // compilenode identifier
            var opresult1278 = callmethodChecked(var_includeLeading, "==(1)", [1], GraceTrue);
            if (Grace_isTrue(opresult1278)) {
              var if1279 = GraceDone;
              setLineNumber(94);    // compilenode block
              var block1280 = new GraceBlock(this, 94, 0);
              block1280.real = function() {
                // call case 6: other requests
                var call1282 = callmethodChecked(var_token, "line", []);
                // call case 6: other requests
                // call case 6: other requests
                var call1286 = callmethodChecked(var_token, "prev", []);
                var call1287 = callmethodChecked(call1286, "line", []);
                var opresult1289 = callmethodChecked(call1287, "==(1)", [1], call1282);
                return opresult1289;
              };
              // call case 6: other requests
              var call1293 = callmethodChecked(var_token, "prev", []);
              var opresult1295 = callmethodChecked(call1293, "\u2260(1)", [1], GraceFalse);
              var opresult1297 = callmethodChecked(opresult1295, "&&(1)", [1], block1280);
              if (Grace_isTrue(opresult1297)) {
                setLineNumber(95);    // compilenode member
                // call case 6: other requests
                // call case 6: other requests
                var call1300 = callmethodChecked(var_token, "prev", []);
                var call1301 = callmethodChecked(call1300, "size", []);
                // call case 6: other requests
                // call case 6: other requests
                var call1305 = callmethodChecked(var_token, "prev", []);
                var call1306 = callmethodChecked(call1305, "linePos", []);
                var opresult1308 = callmethodChecked(call1306, "+(1)", [1], call1301);
                var_start = opresult1308;
                if1279 = GraceDone;
              }
              if1275 = if1279;
            }
            var if1309 = GraceDone;
            setLineNumber(99);    // compilenode member
            // call case 6: other requests
            var call1312 = callmethodChecked(var_token, "indent", []);
            var opresult1314 = callmethodChecked(call1312, "+(1)", [1], new GraceNum(1));
            // call case 6: other requests
            var call1317 = callmethodChecked(var_token, "linePos", []);
            var opresult1319 = callmethodChecked(call1317, "==(1)", [1], opresult1314);
            if (Grace_isTrue(opresult1319)) {
              var if1320 = GraceDone;
              setLineNumber(100);    // compilenode block
              var block1321 = new GraceBlock(this, 100, 0);
              block1321.real = function() {
                // call case 6: other requests
                var call1323 = callmethodChecked(var_token, "line", []);
                // call case 6: other requests
                // call case 6: other requests
                var call1327 = callmethodChecked(var_token, "next", []);
                var call1328 = callmethodChecked(call1327, "line", []);
                var opresult1330 = callmethodChecked(call1328, "\u2260(1)", [1], call1323);
                return opresult1330;
              };
              // call case 6: other requests
              var call1334 = callmethodChecked(var_token, "next", []);
              var opresult1336 = callmethodChecked(call1334, "==(1)", [1], GraceFalse);
              var opresult1338 = callmethodChecked(opresult1336, "||(1)", [1], block1321);
              if (Grace_isTrue(opresult1338)) {
                setLineNumber(101);    // compilenode num
                var_start = new GraceNum(1);
                if1320 = GraceDone;
              }
              if1309 = if1320;
            }
            setLineNumber(104);    // compilenode identifier
            return var_start;
          };
          func1272.paramCounts = [1, 1];
          obj1116.methods["getTokenStart(1)includeLeadingSpace(1)"] = func1272;
          func1272.definitionLine = 90;
          func1272.definitionModule = "errormessages";
          var func1339 = function(argcv) {    // method getTokenEnd(_)includeTrailingSpace(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_token = arguments[curarg];
            curarg++;
            var var_includeTrailing = arguments[curarg];
            curarg++;
            setModuleName("errormessages");
            setLineNumber(108);    // compilenode member
            // call case 6: other requests
            var call1342 = callmethodChecked(var_token, "size", []);
            // call case 6: other requests
            var call1345 = callmethodChecked(var_token, "linePos", []);
            var opresult1347 = callmethodChecked(call1345, "+(1)", [1], call1342);
            var diff1349 = callmethodChecked(opresult1347, "-(1)", [1], new GraceNum(1));
            var var_end = diff1349;
            var if1350 = GraceDone;
            setLineNumber(110);    // compilenode identifier
            var opresult1353 = callmethodChecked(var_includeTrailing, "==(1)", [1], GraceTrue);
            if (Grace_isTrue(opresult1353)) {
              var if1354 = GraceDone;
              setLineNumber(111);    // compilenode block
              var block1355 = new GraceBlock(this, 111, 0);
              block1355.real = function() {
                // call case 6: other requests
                var call1357 = callmethodChecked(var_token, "line", []);
                // call case 6: other requests
                // call case 6: other requests
                var call1361 = callmethodChecked(var_token, "next", []);
                var call1362 = callmethodChecked(call1361, "line", []);
                var opresult1364 = callmethodChecked(call1362, "==(1)", [1], call1357);
                return opresult1364;
              };
              // call case 6: other requests
              var call1368 = callmethodChecked(var_token, "next", []);
              var opresult1370 = callmethodChecked(call1368, "\u2260(1)", [1], GraceFalse);
              var opresult1372 = callmethodChecked(opresult1370, "&&(1)", [1], block1355);
              if (Grace_isTrue(opresult1372)) {
                setLineNumber(112);    // compilenode member
                // call case 6: other requests
                // call case 6: other requests
                var call1376 = callmethodChecked(var_token, "next", []);
                var call1377 = callmethodChecked(call1376, "linePos", []);
                var diff1379 = callmethodChecked(call1377, "-(1)", [1], new GraceNum(1));
                var_end = diff1379;
                if1354 = GraceDone;
              } else {
                setLineNumber(114);    // compilenode member
                // call case 6: other requests
                // call case 6: other requests
                var call1383 = callmethodChecked(var_token, "line", []);
                // call case 4: self request
                onSelf = true;
                var call1384 = callmethodChecked(this, "getLine(1)", [1], call1383);
                var call1385 = callmethodChecked(call1384, "size", []);
                var_end = call1385;
                if1354 = GraceDone;
              }
              if1350 = if1354;
            }
            setLineNumber(117);    // compilenode identifier
            return var_end;
          };
          func1339.paramCounts = [1, 1];
          obj1116.methods["getTokenEnd(1)includeTrailingSpace(1)"] = func1339;
          func1339.definitionLine = 107;
          func1339.definitionModule = "errormessages";
          var func1386 = function(argcv) {    // method replaceToken(_)leading(_)trailing(_)with(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_token = arguments[curarg];
            curarg++;
            var var_replaceLeading = arguments[curarg];
            curarg++;
            var var_replaceTrailing = arguments[curarg];
            curarg++;
            var var_s = arguments[curarg];
            curarg++;
            setModuleName("errormessages");
            setLineNumber(121);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call1388 = callmethodChecked(this, "getTokenStart(1)includeLeadingSpace(1)", [1, 1], var_token, var_replaceLeading);
            var var_start = call1388;
            setLineNumber(122);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call1390 = callmethodChecked(this, "getTokenEnd(1)includeTrailingSpace(1)", [1, 1], var_token, var_replaceTrailing);
            var var_end = call1390;
            setLineNumber(123);    // compilenode member
            // call case 6: other requests
            var call1393 = callmethodChecked(var_token, "line", []);
            // call case 4: self request
            onSelf = true;
            var call1394 = callmethodChecked(this, "replaceRange(2)with(1)onLine(1)", [2, 1, 1], var_start, var_end, var_s, call1393);
            return call1394;
          };
          func1386.paramCounts = [1, 1, 1, 1];
          obj1116.methods["replaceToken(1)leading(1)trailing(1)with(1)"] = func1386;
          func1386.definitionLine = 120;
          func1386.definitionModule = "errormessages";
          var func1395 = function(argcv) {    // method replaceToken(_)with(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_token = arguments[curarg];
            curarg++;
            var var_s = arguments[curarg];
            curarg++;
            setModuleName("errormessages");
            setLineNumber(127);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call1397 = callmethodChecked(this, "replaceToken(1)leading(1)trailing(1)with(1)", [1, 1, 1, 1], var_token, GraceFalse, GraceFalse, var_s);
            return call1397;
          };
          func1395.paramCounts = [1, 1];
          obj1116.methods["replaceToken(1)with(1)"] = func1395;
          func1395.definitionLine = 126;
          func1395.definitionModule = "errormessages";
          var func1398 = function(argcv) {    // method replaceTokenRange(_,_)leading(_)trailing(_)with(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_start = arguments[curarg];
            curarg++;
            var var_end = arguments[curarg];
            curarg++;
            var var_replaceLeading = arguments[curarg];
            curarg++;
            var var_replaceTrailing = arguments[curarg];
            curarg++;
            var var_s = arguments[curarg];
            curarg++;
            setModuleName("errormessages");
            var if1399 = GraceDone;
            setLineNumber(131);    // compilenode identifier
            var opresult1402 = callmethodChecked(var_start, "==(1)", [1], var_end);
            if (Grace_isTrue(opresult1402)) {
              setLineNumber(132);    // compilenode identifier
              // call case 4: self request
              onSelf = true;
              var call1404 = callmethodChecked(this, "replaceToken(1)leading(1)trailing(1)with(1)", [1, 1, 1, 1], var_start, var_replaceLeading, var_replaceTrailing, var_s);
              if1399 = call1404;
            } else {
              setLineNumber(135);    // compilenode identifier
              // call case 4: self request
              onSelf = true;
              var call1406 = callmethodChecked(this, "getTokenStart(1)includeLeadingSpace(1)", [1, 1], var_start, var_replaceLeading);
              var var_insertPos = call1406;
              setLineNumber(136);    // compilenode member
              // call case 6: other requests
              var call1409 = callmethodChecked(var_start, "indent", []);
              // call case 6: other requests
              // call case 6: other requests
              var call1412 = callmethodChecked(var_start, "line", []);
              // call case 4: self request
              onSelf = true;
              var call1413 = callmethodChecked(this, "getLine(1)", [1], call1412);
              var call1414 = callmethodChecked(call1413, "substringFrom(1)to(1)", [1, 1], new GraceNum(1), call1409);
              var var_indent = call1414;
              setLineNumber(137);    // compilenode identifier
              // call case 4: self request
              onSelf = true;
              var call1416 = callmethodChecked(this, "deleteTokenRange(2)leading(1)trailing(1)", [2, 1, 1], var_start, var_end, var_replaceLeading, var_replaceTrailing);
              var if1417 = GraceDone;
              setLineNumber(139);    // compilenode string
              var string1418 = new GraceString("");
              // call case 6: other requests
              var call1422 = callmethodChecked(var_start, "line", []);
              // call case 4: self request
              onSelf = true;
              var call1423 = callmethodChecked(this, "getLine(1)", [1], call1422);
              var opresult1425 = callmethodChecked(call1423, "==(1)", [1], string1418);
              if (Grace_isTrue(opresult1425)) {
                setLineNumber(140);    // compilenode identifier
                var opresult1429 = callmethodChecked(var_indent, "++(1)", [1], var_s);
                // call case 6: other requests
                var call1431 = callmethodChecked(var_start, "line", []);
                // call case 4: self request
                onSelf = true;
                var call1432 = callmethodChecked(this, "insert(1)atPosition(1)onLine(1)", [1, 1, 1], opresult1429, var_insertPos, call1431);
                if1417 = call1432;
              } else {
                setLineNumber(142);    // compilenode member
                // call case 6: other requests
                var call1435 = callmethodChecked(var_start, "line", []);
                // call case 4: self request
                onSelf = true;
                var call1436 = callmethodChecked(this, "insert(1)atPosition(1)onLine(1)", [1, 1, 1], var_s, var_insertPos, call1435);
                if1417 = call1436;
              }
              if1399 = if1417;
            }
            return if1399;
          };
          func1398.paramCounts = [2, 1, 1, 1];
          obj1116.methods["replaceTokenRange(2)leading(1)trailing(1)with(1)"] = func1398;
          func1398.definitionLine = 130;
          func1398.definitionModule = "errormessages";
          var func1437 = function(argcv) {    // method replaceTokenRange(_,_)with(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_start = arguments[curarg];
            curarg++;
            var var_end = arguments[curarg];
            curarg++;
            var var_s = arguments[curarg];
            curarg++;
            setModuleName("errormessages");
            setLineNumber(148);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call1439 = callmethodChecked(this, "replaceTokenRange(2)leading(1)trailing(1)with(1)", [2, 1, 1, 1], var_start, var_end, GraceFalse, GraceFalse, var_s);
            return call1439;
          };
          func1437.paramCounts = [2, 1];
          obj1116.methods["replaceTokenRange(2)with(1)"] = func1437;
          func1437.definitionLine = 147;
          func1437.definitionModule = "errormessages";
          var func1440 = function(argcv) {    // method deleteToken(_)leading(_)trailing(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_token = arguments[curarg];
            curarg++;
            var var_deleteLeading = arguments[curarg];
            curarg++;
            var var_deleteTrailing = arguments[curarg];
            curarg++;
            setModuleName("errormessages");
            setLineNumber(153);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call1442 = callmethodChecked(this, "getTokenStart(1)includeLeadingSpace(1)", [1, 1], var_token, var_deleteLeading);
            var var_start = call1442;
            setLineNumber(154);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call1444 = callmethodChecked(this, "getTokenEnd(1)includeTrailingSpace(1)", [1, 1], var_token, var_deleteTrailing);
            var var_end = call1444;
            setLineNumber(155);    // compilenode member
            // call case 6: other requests
            var call1447 = callmethodChecked(var_token, "line", []);
            // call case 4: self request
            onSelf = true;
            var call1448 = callmethodChecked(this, "deleteRange(2)onLine(1)", [2, 1], var_start, var_end, call1447);
            return call1448;
          };
          func1440.paramCounts = [1, 1, 1];
          obj1116.methods["deleteToken(1)leading(1)trailing(1)"] = func1440;
          func1440.definitionLine = 152;
          func1440.definitionModule = "errormessages";
          var func1449 = function(argcv) {    // method deleteToken(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_token = arguments[curarg];
            curarg++;
            setModuleName("errormessages");
            setLineNumber(159);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call1451 = callmethodChecked(this, "deleteToken(1)leading(1)trailing(1)", [1, 1, 1], var_token, GraceFalse, GraceFalse);
            return call1451;
          };
          func1449.paramCounts = [1];
          obj1116.methods["deleteToken(1)"] = func1449;
          func1449.definitionLine = 158;
          func1449.definitionModule = "errormessages";
          var func1452 = function(argcv) {    // method deleteTokenRange(_,_)leading(_)trailing(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_start = arguments[curarg];
            curarg++;
            var var_end = arguments[curarg];
            curarg++;
            var var_deleteLeading = arguments[curarg];
            curarg++;
            var var_deleteTrailing = arguments[curarg];
            curarg++;
            setModuleName("errormessages");
            var if1453 = GraceDone;
            setLineNumber(164);    // compilenode identifier
            var opresult1456 = callmethodChecked(var_start, "==(1)", [1], var_end);
            if (Grace_isTrue(opresult1456)) {
              setLineNumber(165);    // compilenode identifier
              // call case 4: self request
              onSelf = true;
              var call1458 = callmethodChecked(this, "deleteToken(1)leading(1)trailing(1)", [1, 1, 1], var_start, var_deleteLeading, var_deleteTrailing);
              if1453 = call1458;
            } else {
              setLineNumber(167);    // compilenode member
              // call case 6: other requests
              var call1460 = callmethodChecked(var_start, "line", []);
              var var_line = call1460;
              setLineNumber(168);    // compilenode identifier
              // call case 4: self request
              onSelf = true;
              var call1462 = callmethodChecked(this, "getTokenStart(1)includeLeadingSpace(1)", [1, 1], var_start, var_deleteLeading);
              var var_startPos = call1462;
              setLineNumber(169);    // compilenode identifier
              // call case 4: self request
              onSelf = true;
              var call1464 = callmethodChecked(this, "getTokenEnd(1)includeTrailingSpace(1)", [1, 1], var_start, var_deleteTrailing);
              var var_endPos = call1464;
              setLineNumber(170);    // compilenode member
              // call case 6: other requests
              var call1466 = callmethodChecked(var_start, "next", []);
              var var_tok = call1466;
              setLineNumber(171);    // compilenode block
              var block1468 = new GraceBlock(this, 171, 0);
              block1468.real = function() {
                var opresult1471 = callmethodChecked(var_tok, "\u2260(1)", [1], var_end);
                return opresult1471;
              };
              var block1472 = new GraceBlock(this, 171, 0);
              block1472.real = function() {
                var if1473 = GraceDone;
                setLineNumber(172);    // compilenode member
                // call case 6: other requests
                var call1476 = callmethodChecked(var_tok, "line", []);
                var opresult1478 = callmethodChecked(call1476, "\u2260(1)", [1], var_line);
                if (Grace_isTrue(opresult1478)) {
                  setLineNumber(173);    // compilenode identifier
                  // call case 4: self request
                  onSelf = true;
                  var call1480 = callmethodChecked(this, "deleteRange(2)onLine(1)", [2, 1], var_startPos, var_endPos, var_line);
                  setLineNumber(174);    // compilenode member
                  // call case 6: other requests
                  var call1482 = callmethodChecked(var_tok, "line", []);
                  var_line = call1482;
                  setLineNumber(175);    // compilenode identifier
                  // call case 4: self request
                  onSelf = true;
                  var call1484 = callmethodChecked(this, "getTokenStart(1)includeLeadingSpace(1)", [1, 1], var_tok, var_deleteLeading);
                  var_startPos = call1484;
                  if1473 = GraceDone;
                }
                setLineNumber(177);    // compilenode identifier
                // call case 4: self request
                onSelf = true;
                var call1486 = callmethodChecked(this, "getTokenEnd(1)includeTrailingSpace(1)", [1, 1], var_tok, var_deleteTrailing);
                var_endPos = call1486;
                setLineNumber(178);    // compilenode member
                // call case 6: other requests
                var call1488 = callmethodChecked(var_tok, "next", []);
                var_tok = call1488;
                return GraceDone;
              };
              // call case 5: prelude request
              var call1489 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block1468, block1472);
              var if1490 = GraceDone;
              setLineNumber(180);    // compilenode member
              // call case 6: other requests
              var call1493 = callmethodChecked(var_end, "line", []);
              var opresult1495 = callmethodChecked(call1493, "\u2260(1)", [1], var_line);
              if (Grace_isTrue(opresult1495)) {
                setLineNumber(181);    // compilenode identifier
                // call case 4: self request
                onSelf = true;
                var call1497 = callmethodChecked(this, "deleteRange(2)onLine(1)", [2, 1], var_startPos, var_endPos, var_line);
                if1490 = call1497;
              }
              setLineNumber(183);    // compilenode identifier
              // call case 4: self request
              onSelf = true;
              var call1499 = callmethodChecked(this, "getTokenEnd(1)includeTrailingSpace(1)", [1, 1], var_end, var_deleteTrailing);
              var_endPos = call1499;
              setLineNumber(184);    // compilenode member
              // call case 6: other requests
              var call1502 = callmethodChecked(var_end, "line", []);
              // call case 4: self request
              onSelf = true;
              var call1503 = callmethodChecked(this, "deleteRange(2)onLine(1)", [2, 1], var_startPos, var_endPos, call1502);
              if1453 = call1503;
            }
            return if1453;
          };
          func1452.paramCounts = [2, 1, 1];
          obj1116.methods["deleteTokenRange(2)leading(1)trailing(1)"] = func1452;
          func1452.definitionLine = 163;
          func1452.definitionModule = "errormessages";
          var func1504 = function(argcv) {    // method deleteTokenRange(_,_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_start = arguments[curarg];
            curarg++;
            var var_end = arguments[curarg];
            curarg++;
            setModuleName("errormessages");
            setLineNumber(189);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call1506 = callmethodChecked(this, "deleteTokenRange(2)leading(1)trailing(1)", [2, 1, 1], var_start, var_end, GraceFalse, GraceFalse);
            return call1506;
          };
          func1504.paramCounts = [2];
          obj1116.methods["deleteTokenRange(2)"] = func1504;
          func1504.definitionLine = 188;
          func1504.definitionModule = "errormessages";
          var func1507 = function(argcv) {    // method deleteLine(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_lineNumber = arguments[curarg];
            curarg++;
            setModuleName("errormessages");
            setLineNumber(193);    // compilenode string
            var string1509 = new GraceString("");
            // call case 4: self request
            onSelf = true;
            var call1510 = callmethodChecked(this, "addLine(2)", [2], var_lineNumber, string1509);
            return call1510;
          };
          func1507.paramCounts = [1];
          obj1116.methods["deleteLine(1)"] = func1507;
          func1507.definitionLine = 192;
          func1507.definitionModule = "errormessages";
          var func1511 = function(argcv) {    // method insert(_)afterToken(_)andTrailingSpace(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_s = arguments[curarg];
            curarg++;
            var var_token = arguments[curarg];
            curarg++;
            var var_afterTrailing = arguments[curarg];
            curarg++;
            setModuleName("errormessages");
            setLineNumber(197);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call1514 = callmethodChecked(this, "getTokenEnd(1)includeTrailingSpace(1)", [1, 1], var_token, var_afterTrailing);
            var opresult1516 = callmethodChecked(call1514, "+(1)", [1], new GraceNum(1));
            var var_pos = opresult1516;
            setLineNumber(198);    // compilenode member
            // call case 6: other requests
            var call1519 = callmethodChecked(var_token, "line", []);
            // call case 4: self request
            onSelf = true;
            var call1520 = callmethodChecked(this, "insert(1)atPosition(1)onLine(1)", [1, 1, 1], var_s, var_pos, call1519);
            return call1520;
          };
          func1511.paramCounts = [1, 1, 1];
          obj1116.methods["insert(1)afterToken(1)andTrailingSpace(1)"] = func1511;
          func1511.definitionLine = 196;
          func1511.definitionModule = "errormessages";
          var func1521 = function(argcv) {    // method insert(_)afterToken(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_s = arguments[curarg];
            curarg++;
            var var_token = arguments[curarg];
            curarg++;
            setModuleName("errormessages");
            setLineNumber(202);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call1523 = callmethodChecked(this, "insert(1)afterToken(1)andTrailingSpace(1)", [1, 1, 1], var_s, var_token, GraceFalse);
            return call1523;
          };
          func1521.paramCounts = [1, 1];
          obj1116.methods["insert(1)afterToken(1)"] = func1521;
          func1521.definitionLine = 201;
          func1521.definitionModule = "errormessages";
          var func1524 = function(argcv) {    // method insert(_)beforeToken(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_s = arguments[curarg];
            curarg++;
            var var_token = arguments[curarg];
            curarg++;
            setModuleName("errormessages");
            setLineNumber(206);    // compilenode member
            // call case 6: other requests
            var call1527 = callmethodChecked(var_token, "linePos", []);
            // call case 6: other requests
            var call1529 = callmethodChecked(var_token, "line", []);
            // call case 4: self request
            onSelf = true;
            var call1530 = callmethodChecked(this, "insert(1)atPosition(1)onLine(1)", [1, 1, 1], var_s, call1527, call1529);
            return call1530;
          };
          func1524.paramCounts = [1, 1];
          obj1116.methods["insert(1)beforeToken(1)"] = func1524;
          func1524.definitionLine = 205;
          func1524.definitionModule = "errormessages";
          var func1531 = function(argcv) {    // method insertNewLine(_)after(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_line = arguments[curarg];
            curarg++;
            var var_lineNumber = arguments[curarg];
            curarg++;
            setModuleName("errormessages");
            setLineNumber(211);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call1533 = callmethodChecked(this, "addLine(2)", [2], var_lineNumber, var_line);
            return call1533;
          };
          func1531.paramCounts = [1, 1];
          obj1116.methods["insertNewLine(1)after(1)"] = func1531;
          func1531.definitionLine = 210;
          func1531.definitionModule = "errormessages";
          var func1534 = function(argcv) {    // method addLine(_,_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_lineNumber = arguments[curarg];
            curarg++;
            var var_line = arguments[curarg];
            curarg++;
            setModuleName("errormessages");
            setLineNumber(217);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call1536 = callmethodChecked(this, "findLine(1)", [1], var_lineNumber);
            var var_i = call1536;
            var if1537 = GraceDone;
            setLineNumber(218);    // compilenode identifier
            var opresult1540 = callmethodChecked(var_i, "\u2260(1)", [1], GraceFalse);
            if (Grace_isTrue(opresult1540)) {
              setLineNumber(219);    // compilenode identifier
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call1543 = callmethodChecked(this, "lines", []);
              var call1544 = callmethodChecked(call1543, "at(1)put(1)", [1, 1], var_i, var_line);
              if1537 = call1544;
            } else {
              setLineNumber(222);    // compilenode identifier
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call1547 = callmethodChecked(this, "lineNumbers", []);
              var call1548 = callmethodChecked(call1547, "push(1)", [1], var_lineNumber);
              setLineNumber(223);    // compilenode identifier
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call1551 = callmethodChecked(this, "lines", []);
              var call1552 = callmethodChecked(call1551, "push(1)", [1], var_line);
              var if1553 = GraceDone;
              setLineNumber(224);    // compilenode member
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call1557 = callmethodChecked(this, "lines", []);
              var call1558 = callmethodChecked(call1557, "size", []);
              var opresult1560 = callmethodChecked(call1558, ">(1)", [1], new GraceNum(1));
              if (Grace_isTrue(opresult1560)) {
                setLineNumber(226);    // compilenode member
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call1563 = callmethodChecked(this, "lines", []);
                var call1564 = callmethodChecked(call1563, "size", []);
                var_i = call1564;
                setLineNumber(227);    // compilenode block
                var block1566 = new GraceBlock(this, 227, 0);
                block1566.real = function() {
                  var block1567 = new GraceBlock(this, 227, 0);
                  block1567.real = function() {
                    var diff1571 = callmethodChecked(var_i, "-(1)", [1], new GraceNum(1));
                    // call case 6: other requests
                    // call case 4: self request
                    onSelf = true;
                    var call1573 = callmethodChecked(this, "lineNumbers", []);
                    var call1574 = callmethodChecked(call1573, "at(1)", [1], diff1571);
                    var opresult1577 = callmethodChecked(var_lineNumber, "<(1)", [1], call1574);
                    return opresult1577;
                  };
                  var opresult1581 = callmethodChecked(var_i, ">(1)", [1], new GraceNum(1));
                  var opresult1583 = callmethodChecked(opresult1581, "&&(1)", [1], block1567);
                  return opresult1583;
                };
                var block1584 = new GraceBlock(this, 227, 0);
                block1584.real = function() {
                  setLineNumber(228);    // compilenode identifier
                  var diff1589 = callmethodChecked(var_i, "-(1)", [1], new GraceNum(1));
                  // call case 6: other requests
                  // call case 4: self request
                  onSelf = true;
                  var call1591 = callmethodChecked(this, "lineNumbers", []);
                  var call1592 = callmethodChecked(call1591, "at(1)", [1], diff1589);
                  // call case 6: other requests
                  // call case 4: self request
                  onSelf = true;
                  var call1594 = callmethodChecked(this, "lineNumbers", []);
                  var call1595 = callmethodChecked(call1594, "at(1)put(1)", [1, 1], var_i, call1592);
                  setLineNumber(229);    // compilenode identifier
                  var diff1600 = callmethodChecked(var_i, "-(1)", [1], new GraceNum(1));
                  // call case 6: other requests
                  // call case 4: self request
                  onSelf = true;
                  var call1602 = callmethodChecked(this, "lines", []);
                  var call1603 = callmethodChecked(call1602, "at(1)", [1], diff1600);
                  // call case 6: other requests
                  // call case 4: self request
                  onSelf = true;
                  var call1605 = callmethodChecked(this, "lines", []);
                  var call1606 = callmethodChecked(call1605, "at(1)put(1)", [1, 1], var_i, call1603);
                  setLineNumber(230);    // compilenode identifier
                  var diff1609 = callmethodChecked(var_i, "-(1)", [1], new GraceNum(1));
                  var_i = diff1609;
                  return GraceDone;
                };
                // call case 5: prelude request
                var call1610 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block1566, block1584);
                setLineNumber(232);    // compilenode identifier
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call1613 = callmethodChecked(this, "lineNumbers", []);
                var call1614 = callmethodChecked(call1613, "at(1)put(1)", [1, 1], var_i, var_lineNumber);
                setLineNumber(233);    // compilenode identifier
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call1617 = callmethodChecked(this, "lines", []);
                var call1618 = callmethodChecked(call1617, "at(1)put(1)", [1, 1], var_i, var_line);
                if1553 = call1618;
              }
              if1537 = if1553;
            }
            return if1537;
          };
          func1534.paramCounts = [2];
          obj1116.methods["addLine(2)"] = func1534;
          func1534.definitionLine = 216;
          func1534.definitionModule = "errormessages";
          var func1619 = function(argcv) {    // method findLine(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_lineNumber = arguments[curarg];
            curarg++;
            setModuleName("errormessages");
            setLineNumber(241);    // compilenode member
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call1623 = callmethodChecked(this, "lineNumbers", []);
            var call1624 = callmethodChecked(call1623, "indices", []);
            var block1625 = new GraceBlock(this, 241, 1);
            setLineNumber(1);    // compilenode identifier
            block1625.real = function(var_i) {
              var if1626 = GraceDone;
              setLineNumber(242);    // compilenode identifier
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call1630 = callmethodChecked(this, "lineNumbers", []);
              var call1631 = callmethodChecked(call1630, "at(1)", [1], var_i);
              var opresult1633 = callmethodChecked(call1631, "==(1)", [1], var_lineNumber);
              if (Grace_isTrue(opresult1633)) {
                setLineNumber(243);    // compilenode identifier
                throw new ReturnException(var_i, returnTarget);
              }
              return if1626;
            };
            // call case 5: prelude request
            var call1634 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1624, block1625);
            setLineNumber(246);    // compilenode identifier
            return GraceFalse;
          };
          func1619.confidential = true;
          func1619.paramCounts = [1];
          obj1116.methods["findLine(1)"] = func1619;
          func1619.definitionLine = 240;
          func1619.definitionModule = "errormessages";
          var func1635 = function(argcv) {    // method getLine(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_lineNumber = arguments[curarg];
            curarg++;
            setModuleName("errormessages");
            setLineNumber(252);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call1637 = callmethodChecked(this, "findLine(1)", [1], var_lineNumber);
            var var_i = call1637;
            var if1638 = GraceDone;
            setLineNumber(253);    // compilenode identifier
            var opresult1641 = callmethodChecked(var_i, "==(1)", [1], GraceFalse);
            if (Grace_isTrue(opresult1641)) {
              setLineNumber(254);    // compilenode identifier
              // call case 6: other requests
              // call case 6: other requests
              var call1644 = callmethodChecked(var_util, "lines", []);
              var call1645 = callmethodChecked(call1644, "at(1)", [1], var_lineNumber);
              if1638 = call1645;
            } else {
              setLineNumber(256);    // compilenode identifier
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call1648 = callmethodChecked(this, "lines", []);
              var call1649 = callmethodChecked(call1648, "at(1)", [1], var_i);
              if1638 = call1649;
            }
            return if1638;
          };
          func1635.confidential = true;
          func1635.paramCounts = [1];
          obj1116.methods["getLine(1)"] = func1635;
          func1635.definitionLine = 251;
          func1635.definitionModule = "errormessages";
          var func1650 = function(argcv) {    // method print
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("errormessages");
            setLineNumber(261);    // compilenode member
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call1654 = callmethodChecked(this, "lines", []);
            var call1655 = callmethodChecked(call1654, "size", []);
            var opresult1658 = callmethodChecked(new GraceNum(1), "..(1)", [1], call1655);
            var block1659 = new GraceBlock(this, 261, 1);
            setLineNumber(1);    // compilenode identifier
            block1659.real = function(var_i) {
              var if1660 = GraceDone;
              setLineNumber(262);    // compilenode block
              var block1661 = new GraceBlock(this, 262, 0);
              block1661.real = function() {
                var diff1666 = callmethodChecked(var_i, "-(1)", [1], new GraceNum(1));
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call1668 = callmethodChecked(this, "lineNumbers", []);
                var call1669 = callmethodChecked(call1668, "at(1)", [1], diff1666);
                var opresult1671 = callmethodChecked(call1669, "+(1)", [1], new GraceNum(1));
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call1675 = callmethodChecked(this, "lineNumbers", []);
                var call1676 = callmethodChecked(call1675, "at(1)", [1], var_i);
                var opresult1678 = callmethodChecked(call1676, ">(1)", [1], opresult1671);
                return opresult1678;
              };
              var opresult1682 = callmethodChecked(var_i, ">(1)", [1], new GraceNum(1));
              var opresult1684 = callmethodChecked(opresult1682, "&&(1)", [1], block1661);
              if (Grace_isTrue(opresult1684)) {
                setLineNumber(263);    // compilenode string
                var string1685 = new GraceString("");
                var var_s = string1685;
                setLineNumber(264);    // compilenode member
                // call case 6: other requests
                // call case 6: other requests
                var diff1692 = callmethodChecked(var_i, "-(1)", [1], new GraceNum(1));
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call1694 = callmethodChecked(this, "lineNumbers", []);
                var call1695 = callmethodChecked(call1694, "at(1)", [1], diff1692);
                var call1696 = callmethodChecked(call1695, "asString", []);
                var call1697 = callmethodChecked(call1696, "size", []);
                var opresult1700 = callmethodChecked(new GraceNum(1), "..(1)", [1], call1697);
                var block1701 = new GraceBlock(this, 264, 0);
                block1701.real = function() {
                  setLineNumber(265);    // compilenode string
                  var string1702 = new GraceString(" ");
                  var opresult1705 = callmethodChecked(var_s, "++(1)", [1], string1702);
                  var_s = opresult1705;
                  return GraceDone;
                };
                // call case 5: prelude request
                var call1706 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], opresult1700, block1701);
                setLineNumber(267);    // compilenode string
                var string1708 = new GraceString("...\n");
                var string1711 = new GraceString("    ");
                var opresult1713 = callmethodChecked(string1711, "++(1)", [1], var_s);
                var opresult1715 = callmethodChecked(opresult1713, "++(1)", [1], string1708);
                // call case 6: other requests
                // call case 6: other requests
                var call1717 = callmethodChecked(var_io, "error", []);
                var call1718 = callmethodChecked(call1717, "write(1)", [1], opresult1715);
                if1660 = call1718;
              }
              var if1719 = GraceDone;
              setLineNumber(270);    // compilenode identifier
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call1722 = callmethodChecked(this, "lineNumbers", []);
              var call1723 = callmethodChecked(call1722, "at(1)", [1], var_i);
              // call case 6: other requests
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call1728 = callmethodChecked(this, "lineNumbers", []);
              var call1729 = callmethodChecked(call1728, "at(1)", [1], var_i);
              var call1730 = callmethodChecked(call1729, "truncated", []);
              var opresult1732 = callmethodChecked(call1730, "\u2260(1)", [1], call1723);
              if (Grace_isTrue(opresult1732)) {
                setLineNumber(271);    // compilenode string
                var string1734 = new GraceString("\n");
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call1738 = callmethodChecked(this, "lines", []);
                var call1739 = callmethodChecked(call1738, "at(1)", [1], var_i);
                var string1741 = new GraceString(": ");
                // call case 6: other requests
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call1746 = callmethodChecked(this, "lineNumbers", []);
                var call1747 = callmethodChecked(call1746, "at(1)", [1], var_i);
                var call1748 = callmethodChecked(call1747, "truncated", []);
                var string1750 = new GraceString(" *");
                var opresult1752 = callmethodChecked(string1750, "++(1)", [1], call1748);
                var opresult1754 = callmethodChecked(opresult1752, "++(1)", [1], string1741);
                var opresult1756 = callmethodChecked(opresult1754, "++(1)", [1], call1739);
                var opresult1758 = callmethodChecked(opresult1756, "++(1)", [1], string1734);
                // call case 6: other requests
                // call case 6: other requests
                var call1760 = callmethodChecked(var_io, "error", []);
                var call1761 = callmethodChecked(call1760, "write(1)", [1], opresult1758);
                if1719 = call1761;
              } else {
                setLineNumber(273);    // compilenode string
                var string1763 = new GraceString("\n");
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call1767 = callmethodChecked(this, "lines", []);
                var call1768 = callmethodChecked(call1767, "at(1)", [1], var_i);
                var string1770 = new GraceString(": ");
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call1774 = callmethodChecked(this, "lineNumbers", []);
                var call1775 = callmethodChecked(call1774, "at(1)", [1], var_i);
                var string1777 = new GraceString("  ");
                var opresult1779 = callmethodChecked(string1777, "++(1)", [1], call1775);
                var opresult1781 = callmethodChecked(opresult1779, "++(1)", [1], string1770);
                var opresult1783 = callmethodChecked(opresult1781, "++(1)", [1], call1768);
                var opresult1785 = callmethodChecked(opresult1783, "++(1)", [1], string1763);
                // call case 6: other requests
                // call case 6: other requests
                var call1787 = callmethodChecked(var_io, "error", []);
                var call1788 = callmethodChecked(call1787, "write(1)", [1], opresult1785);
                if1719 = call1788;
              }
              return if1719;
            };
            // call case 5: prelude request
            var call1789 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], opresult1658, block1659);
            return call1789;
          };
          func1650.paramCounts = [0];
          obj1116.methods["print"] = func1650;
          func1650.definitionLine = 260;
          func1650.definitionModule = "errormessages";
          setLineNumber(15);    // compilenode array
          var array1790 = new PrimitiveGraceList([]);
          obj1116.data["lineNumbers"] = array1790;
          var reader_errormessages_lineNumbers1791 = function() {
            return this.data["lineNumbers"];
          };
          reader_errormessages_lineNumbers1791.def = true;
          reader_errormessages_lineNumbers1791.confidential = true;
          obj1116.methods["lineNumbers"] = reader_errormessages_lineNumbers1791;
          setLineNumber(16);    // compilenode array
          var array1792 = new PrimitiveGraceList([]);
          obj1116.data["lines"] = array1792;
          var reader_errormessages_lines1793 = function() {
            return this.data["lines"];
          };
          reader_errormessages_lines1793.def = true;
          reader_errormessages_lines1793.confidential = true;
          obj1116.methods["lines"] = reader_errormessages_lines1793;
          superDepth = origSuperDepth;
        };
        obj_init_1116.apply(inheritingObject, []);
        return obj1116;
        };
        obj434.methods["new$object(1)"] = func1115;
      superDepth = origSuperDepth;
    };
    obj_init_434.apply(obj434, []);
    var var_suggestion = obj434;
    setLineNumber(1);    // compilenode method
    var func1794 = function(argcv) {    // method suggestion
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      setModuleName("errormessages");
      // suggestion is a simple accessor - elide try ... catch
      setLineNumber(13);    // compilenode identifier
      return var_suggestion;
    };
    func1794.paramCounts = [0];
    this.methods["suggestion"] = func1794;
    func1794.definitionLine = 1;
    func1794.definitionModule = "errormessages";
    this.methods["suggestion"].debug = "def";
    return this;
  }
  gracecode_errormessages.imports = ['io', 'sys', 'util'];
  if (typeof gctCache !== "undefined")
    gctCache['errormessages'] = "classes:\n suggestion\nconfidential:\n min3(3)\nconstructors-of:suggestion:\n new\nfresh-methods:\nmethods-of:suggestion.new:\n addLine(2)\n append(1)onLine(1)\n deleteChar(1)onLine(1)\n deleteLine(1)\n deleteRange(2)onLine(1)\n deleteToken(1)\n deleteToken(1)leading(1)trailing(1)\n deleteTokenRange(2)\n deleteTokenRange(2)leading(1)trailing(1)\n findLine(1)\n getLine(1)\n getTokenEnd(1)includeTrailingSpace(1)\n getTokenStart(1)includeLeadingSpace(1)\n insert(1)afterToken(1)\n insert(1)afterToken(1)andTrailingSpace(1)\n insert(1)atPosition(1)onLine(1)\n insert(1)beforeToken(1)\n insertNewLine(1)after(1)\n lineNumbers\n lines\n print\n replaceChar(1)with(1)onLine(1)\n replaceRange(2)with(1)onLine(1)\n replaceToken(1)leading(1)trailing(1)with(1)\n replaceToken(1)with(1)\n replaceTokenRange(2)leading(1)trailing(1)with(1)\n replaceTokenRange(2)with(1)\n replaceUntil(1)with(1)onLine(1)\nmodules:\n io\n sys\n util\npath:\n errormessages\npublic:\n error(1)\n error(1)atLine(1)\n error(1)atLine(1)withSuggestions(1)\n error(1)atPosition(2)\n error(1)atPosition(2)withSuggestions(1)\n error(1)atRange(3)\n error(1)atRange(3)withSuggestions(1)\n name(1)matches(1)within(1)\n suggestion\n syntaxError(1)atLine(1)\n syntaxError(1)atLine(1)withSuggestion(1)\n syntaxError(1)atLine(1)withSuggestions(1)\n syntaxError(1)atPosition(2)\n syntaxError(1)atPosition(2)withSuggestion(1)\n syntaxError(1)atPosition(2)withSuggestions(1)\n syntaxError(1)atRange(3)\n syntaxError(1)atRange(3)withSuggestion(1)\n syntaxError(1)atRange(3)withSuggestions(1)\ntypes:\n";
  if (typeof originalSourceLines !== "undefined") {
    originalSourceLines["errormessages"] = [
      "#pragma ExtendedLineups",
      "import \"io\" as io",
      "import \"sys\" as sys",
      "import \"util\" as util",
      "",
      "// Contains modified lines used as suggestions for error messages.",
      "// When a line is added using one of the utility methods such as",
      "// insert()afterToken()onLine(), the line is copied from util.lines to the",
      "// internal lines array in the suggestion, and when a line that is already in",
      "// the array is modified, the internal lines array is updated.",
      "// There is no sorting of the order of the lines at any point, so",
      "// lines must be added in ascending order.",
      "def suggestion is public = object {",
      "  class new {",
      "    def lineNumbers is confidential = []",
      "    def lines is confidential = []",
      "",
      "    // Methods that deal with inserting/replacing/deleting character positions",
      "    // and ranges. These methods are usually called by lexing error messages",
      "    // due to lack of access to tokens, and by insert/replace/delete methods",
      "    // that operate on tokens.",
      "",
      "    method replaceRange(start, end)with(s)onLine(lineNumber) {",
      "        def line = getLine(lineNumber)",
      "        if(start == 1) then {",
      "            addLine(lineNumber, s ++ line.substringFrom(end + 1)to(line.size))",
      "        } else {",
      "            addLine(lineNumber, line.substringFrom(1)to(start - 1)",
      "                ++ s ++ line.substringFrom(end + 1)to(line.size))",
      "        }",
      "    }",
      "",
      "    method replaceChar(pos)with(s)onLine(lineNumber) {",
      "        replaceRange(pos, pos)with(s)onLine(lineNumber)",
      "    }",
      "",
      "    method replaceUntil(until)with(s)onLine(lineNumber) {",
      "        def line = getLine(lineNumber)",
      "        def len = until.size",
      "        for (1..line.size) do {i->",
      "            if (line.substringFrom(i)to(i + len - 1) == until) then {",
      "                replaceRange(1, i + len - 1)with(s)onLine(lineNumber)",
      "                return true",
      "            }",
      "        }",
      "        return false",
      "    }",
      "",
      "    method deleteRange(start, end)onLine(lineNumber) {",
      "        var start' := start",
      "        def line = getLine(lineNumber)",
      "        if((start' > 1) && (end == line.size)) then {",
      "            // Check for removing the whole line, then remove the indent also.",
      "            var indent := true",
      "            for(1..(start'-1)) do { i ->",
      "                if(line.at(i) != \" \") then {",
      "                    indent := false",
      "                }",
      "            }",
      "            if(indent == true) then {",
      "                start' := 1",
      "            }",
      "        }",
      "        replaceRange(start', end)with(\"\")onLine(lineNumber)",
      "    }",
      "",
      "    method deleteChar(pos)onLine(lineNumber) {",
      "        replaceRange(pos, pos)with(\"\")onLine(lineNumber)",
      "    }",
      "",
      "    method append(s)onLine(lineNumber) {",
      "        def line = getLine(lineNumber)",
      "        addLine(lineNumber, line ++ s)",
      "    }",
      "",
      "    method insert(s)atPosition(pos)onLine(lineNumber) {",
      "        def line = getLine(lineNumber)",
      "        if(pos == 1) then {",
      "            addLine(lineNumber, s ++ line)",
      "        } else {",
      "            addLine(lineNumber, line.substringFrom(1)to(pos - 1) ++ s",
      "                ++ line.substringFrom(pos)to(line.size))",
      "        }",
      "    }",
      "",
      "    // Methods that deal with inserting/replacing/deleteing tokens or ranges of",
      "    // tokens. These methods call the underlying methods that operate on",
      "    // characters.",
      "",
      "    method getTokenStart(token)includeLeadingSpace(includeLeading) {",
      "        var start := token.linePos",
      "        // Include leading whitespace.",
      "        if(includeLeading == true) then {",
      "            if((token.prev != false) && ({token.prev.line == token.line})) then {",
      "                start := token.prev.linePos + token.prev.size",
      "            }",
      "        }",
      "        // Include indentation if this is the only token on the line.",
      "        if(token.linePos == (token.indent + 1)) then {",
      "            if ((token.next == false) || {token.next.line != token.line}) then {",
      "                start := 1",
      "            }",
      "        }",
      "        start",
      "    }",
      "",
      "    method getTokenEnd(token)includeTrailingSpace(includeTrailing) {",
      "        var end := token.linePos + token.size - 1",
      "        // Include trailing space.",
      "        if(includeTrailing == true) then {",
      "            if((token.next != false) && ({token.next.line == token.line})) then {",
      "                end := token.next.linePos - 1;",
      "            } else {",
      "                end := getLine(token.line).size",
      "            }",
      "        }",
      "        end",
      "    }",
      "",
      "    method replaceToken(token)leading(replaceLeading)trailing(replaceTrailing)with(s) {",
      "        def start = getTokenStart(token)includeLeadingSpace(replaceLeading)",
      "        def end = getTokenEnd(token)includeTrailingSpace(replaceTrailing)",
      "        replaceRange(start, end)with(s)onLine(token.line)",
      "    }",
      "",
      "    method replaceToken(token)with(s) {",
      "        replaceToken(token)leading(false)trailing(false)with(s)",
      "    }",
      "",
      "    method replaceTokenRange(start, end)leading(replaceLeading)trailing(replaceTrailing)with(s) {",
      "        if(start == end) then {",
      "            replaceToken(start)leading(replaceLeading)trailing(replaceTrailing)with(s)",
      "        } else {",
      "            // Get the ident and position now in case deleteTokenRange changes it.",
      "            def insertPos = getTokenStart(start)includeLeadingSpace(replaceLeading)",
      "            def indent = getLine(start.line).substringFrom(1)to(start.indent)",
      "            deleteTokenRange(start, end)leading(replaceLeading)trailing(replaceTrailing)",
      "            // If delete token range deleted the indent, then add it back.",
      "            if(getLine(start.line) == \"\") then {",
      "                insert(indent ++ s)atPosition(insertPos)onLine(start.line)",
      "            } else {",
      "                insert(s)atPosition(insertPos)onLine(start.line)",
      "            }",
      "        }",
      "    }",
      "",
      "    method replaceTokenRange(start, end)with(s) {",
      "        replaceTokenRange(start, end)leading(false)trailing(false)with(s)",
      "    }",
      "",
      "    // Deletes a token, and optionally leading and/or trailing spaces.",
      "    method deleteToken(token)leading(deleteLeading)trailing(deleteTrailing) {",
      "        def start = getTokenStart(token)includeLeadingSpace(deleteLeading)",
      "        def end = getTokenEnd(token)includeTrailingSpace(deleteTrailing)",
      "        deleteRange(start, end)onLine(token.line)",
      "    }",
      "",
      "    method deleteToken(token) {",
      "        deleteToken(token)leading(false)trailing(false)",
      "    }",
      "",
      "    // Deletes a range of tokens, and optionally leading and/or trailing spaces.",
      "    method deleteTokenRange(start, end)leading(deleteLeading)trailing(deleteTrailing) {",
      "        if(start == end) then {",
      "            deleteToken(start)leading(deleteLeading)trailing(deleteTrailing)",
      "        } else {",
      "            var line := start.line",
      "            var startPos := getTokenStart(start)includeLeadingSpace(deleteLeading)",
      "            var endPos := getTokenEnd(start)includeTrailingSpace(deleteTrailing)",
      "            var tok := start.next",
      "            while {tok != end} do {",
      "                if(tok.line != line) then {",
      "                    deleteRange(startPos, endPos)onLine(line)",
      "                    line := tok.line",
      "                    startPos := getTokenStart(tok)includeLeadingSpace(deleteLeading)",
      "                }",
      "                endPos := getTokenEnd(tok)includeTrailingSpace(deleteTrailing)",
      "                tok := tok.next",
      "            }",
      "            if(end.line != line) then {",
      "                deleteRange(startPos, endPos)onLine(line)",
      "            }",
      "            endPos := getTokenEnd(end)includeTrailingSpace(deleteTrailing)",
      "            deleteRange(startPos, endPos)onLine(end.line)",
      "        }",
      "    }",
      "",
      "    method deleteTokenRange(start, end) {",
      "        deleteTokenRange(start, end)leading(false)trailing(false)",
      "    }",
      "",
      "    method deleteLine(lineNumber) {",
      "        addLine(lineNumber, \"\")",
      "    }",
      "",
      "    method insert(s)afterToken(token)andTrailingSpace(afterTrailing) {",
      "        def pos = getTokenEnd(token)includeTrailingSpace(afterTrailing) + 1",
      "        insert(s)atPosition(pos)onLine(token.line)",
      "    }",
      "",
      "    method insert(s)afterToken(token) {",
      "        insert(s)afterToken(token)andTrailingSpace(false)",
      "    }",
      "",
      "    method insert(s)beforeToken(token) {",
      "        insert(s)atPosition(token.linePos)onLine(token.line)",
      "    }",
      "",
      "    // Insert a new line. This stores the line with the same number as the line it comes after.",
      "    method insertNewLine(line)after(lineNumber) {",
      "        addLine(lineNumber, line)",
      "    }",
      "",
      "    // Manually add a line to the suggestion. This will overwrite any previous",
      "    // changes that may have been made to this line.",
      "    method addLine(lineNumber, line) {",
      "        var i := findLine(lineNumber)",
      "        if(i != false) then {",
      "            lines.at(i)put(line)",
      "        } else {",
      "            // Add new lines to make the list big enough.",
      "            lineNumbers.push(lineNumber)",
      "            lines.push(line)",
      "            if (lines.size > 1) then {",
      "                // Re-order the list.",
      "                i := lines.size",
      "                while {(i > 1) && {lineNumber < lineNumbers.at(i - 1)}} do {",
      "                    lineNumbers.at(i) put(lineNumbers.at(i - 1))",
      "                    lines.at(i) put (lines.at(i - 1))",
      "                    i := i - 1",
      "                }",
      "                lineNumbers.at(i) put (lineNumber)",
      "                lines.at(i) put (line)",
      "            }",
      "        }",
      "    }",
      "",
      "    // Internal method used to find the index of a line in the lines array.",
      "    // Returns false if the line is not found.",
      "    method findLine(lineNumber) is confidential {",
      "        for(lineNumbers.indices) do { i ->",
      "            if(lineNumbers.at(i) == lineNumber) then {",
      "                return i",
      "            }",
      "        }",
      "        false",
      "    }",
      "",
      "    // Internal method used to get the contents of a line so far.",
      "    // If the line is not part of this suggestion then it gets the unmodified line.",
      "    method getLine(lineNumber) is confidential {",
      "        def i = findLine(lineNumber)",
      "        if(i == false) then {",
      "            util.lines.at(lineNumber)",
      "        } else {",
      "            lines.at(i)",
      "        }",
      "    }",
      "",
      "    method print {",
      "        for(1..lines.size) do { i ->",
      "            if((i > 1) && {(lineNumbers.at(i) > (lineNumbers.at(i-1) + 1))}) then {",
      "                var s := \"\"",
      "                for(1..lineNumbers.at(i-1).asString.size) do {",
      "                    s := s ++ \" \"",
      "                }",
      "                io.error.write(\"    {s}...\\n\")",
      "            }",
      "            // Handle insertion of new lines.",
      "            if(lineNumbers.at(i).truncated != lineNumbers.at(i)) then {",
      "                io.error.write(\" *{lineNumbers.at(i).truncated}: {lines.at(i)}\\n\")",
      "            } else {",
      "                io.error.write(\"  {lineNumbers.at(i)}: {lines.at(i)}\\n\")",
      "            }",
      "        }",
      "    }",
      "  }",
      "}",
      "",
      "method name (p:String) matches (t:String) within (k:Number) {",
      "    // This is algorithm EDP from Jokinen, Jorma, Tarhio and Ukkinen:",
      "    // \"A comparison of Approximate String Matching Algorithms\"",
      "    // Software—Practice and Experience Vol 1(1), January 1988, pp.1–19",
      "    //",
      "    // Implements the \"Enhanced Dynamic Programming\" (EDP) algorithm for",
      "    // approximate string matching.  If pattern p matches text t within",
      "    // an edit distance ≤ k, this method returns j, the index of the highest",
      "    // character of t involved in the match.  Its time compelxity is O(k*|p|).",
      "    //",
      "    // The algorithm builds a dynamic progarmming table D such that",
      "    // D[i,j] is the minimum edit distance between p[1] p[2] ... p[i]",
      "    // and any substring of t ending at t[j].   However, it isn't necessary",
      "    // to store the whole table D.  Because D[i,j] depends on only D[i-1, j],",
      "    // D[i-1, j-1] and D[i, j-1], we can store only the current",
      "    // column, which we do in h, and the value of D[i-1,j-1], which is",
      "    // cached in c.  Moreover, since we are not interested in edit",
      "    // distances > k, it's only necessary to evalue the elments of the table",
      "    // around the diagonal.",
      "",
      "",
      "    def m = p.size",
      "    def n = t.size",
      "    if (k >= m) then { return m }  // trivial case",
      "    def k' = min3(k, n-1, m-1)",
      "    var top := k' + 1  // the location where the topmost diagonal under",
      "                       // threshold intersects the current column",
      "    def h = emptyList",
      "    for (0..m) do { i -> h.at(i+1) put(i+1) }",
      "    try {",
      "        for (1..n) do { j ->",
      "            var c := 0",
      "            for (1..top) do { i ->",
      "                def e = if (p.at(i) == t.at(j)) then {",
      "                    c",
      "                } else {",
      "                    min3(h.at(i), h.at(i+1), c) + 1",
      "                }",
      "                c := h.at(i+1)",
      "                h.at(i+1) put (e)",
      "            }",
      "            while { (top >= 0) && {h.at(top+1) > k'} } do { top := top - 1 }",
      "            if (top == m) then {",
      "                return j    // the last character of t that was used in the match",
      "            } else {",
      "                top := top + 1",
      "            }",
      "        }",
      "    } catch { e:BoundsError -> return 0 }   // if the code is buggy, don't crash",
      "    return 0            // there was no match",
      "}",
      "",
      "method min3(a, b, c) is confidential {",
      "    def sf = if (a < b) then { a } else { b }",
      "    if (sf < c) then { sf } else { c }",
      "}",
      "",
      "",
      "// Methods to actually display an error message and suggestions, then exit.",
      "method syntaxError(message)atRange(errlinenum, startpos, endpos) {",
      "    syntaxError(message)atRange(errlinenum, startpos, endpos)withSuggestions([])",
      "}",
      "",
      "method syntaxError(message)atRange(errlinenum, startpos, endpos)withSuggestion(suggestion') {",
      "    syntaxError(message)atRange(errlinenum, startpos, endpos)withSuggestions([suggestion'])",
      "}",
      "",
      "method syntaxError(message)atRange(errlinenum, startpos, endpos)withSuggestions(suggestions) {",
      "    var loc := if(startpos == endpos) then {startpos.asString} else { \"{startpos}-{endpos}\" }",
      "    var arr := \"----\"",
      "    for (2..(startpos + errlinenum.asString.size)) do { _ ->",
      "        arr := arr ++ \"-\"",
      "    }",
      "    for (startpos..endpos) do { _ ->",
      "        arr := arr ++ \"^\"",
      "    }",
      "    util.syntaxError(message, errlinenum, \":{loc}\", arr, false, suggestions)",
      "}",
      "",
      "method error(message)atRange(errlinenum, startpos, endpos)withSuggestions(suggestions) {",
      "    var loc := if(startpos == endpos) then {startpos.asString} else { \"{startpos}-{endpos}\" }",
      "    var arr := \"----\"",
      "    for (2..(startpos + errlinenum.asString.size)) do { _ ->",
      "        arr := arr ++ \"-\"",
      "    }",
      "    for (startpos..endpos) do { _ ->",
      "        arr := arr ++ \"^\"",
      "    }",
      "    util.generalError(message, errlinenum, \":{loc}\", arr, false, suggestions)",
      "}",
      "",
      "method error(message) atRange(errlinenum, startpos, endpos) {",
      "    error (message) atRange(errlinenum, startpos, endpos) withSuggestions([])",
      "}",
      "",
      "method syntaxError(message)atPosition(errlinenum, errpos) {",
      "    syntaxError(message)atPosition(errlinenum, errpos)withSuggestions([])",
      "}",
      "",
      "method error(message) atPosition(errlinenum, errpos) {",
      "    error(message) atPosition(errlinenum, errpos) withSuggestions([])",
      "}",
      "",
      "method syntaxError(message)atPosition(errlinenum, errpos)withSuggestion(suggestion') {",
      "    syntaxError(message)atPosition(errlinenum, errpos)withSuggestions([suggestion'])",
      "}",
      "",
      "method syntaxError(message)atPosition(errlinenum, errpos)withSuggestions(suggestions) {",
      "    var arr := \"----\"",
      "    for (2..(errpos + errlinenum.asString.size)) do { _ ->",
      "        arr := arr ++ \"-\"",
      "    }",
      "    arr := arr ++ \"^\"",
      "    util.syntaxError(message, errlinenum, \":({errpos})\", arr, false, suggestions)",
      "}",
      "",
      "method error(message) atPosition(errlinenum, errpos)",
      "        withSuggestions(suggestions) {",
      "    var arr := \"----\"",
      "    for (2..(errpos + errlinenum.asString.size)) do { _ ->",
      "        arr := arr ++ \"-\"",
      "    }",
      "    arr := arr ++ \"^\"",
      "    util.generalError(message, errlinenum, \":({errpos})\", arr, false, suggestions)",
      "}",
      "",
      "method error(message) {",
      "    util.generalError(message, 0, \"\", \"\", false, [])",
      "}",
      "",
      "method error(message)atLine(errlinenum)withSuggestions(suggestions) {",
      "    var arr := \"----\"",
      "    for (1..errlinenum.asString.size) do { _ ->",
      "        arr := arr ++ \"-\"",
      "    }",
      "    for (1..util.lines.at(errlinenum).size) do { _ ->",
      "        arr := arr ++ \"^\"",
      "    }",
      "    util.generalError(message, errlinenum, \"\", arr, false, suggestions)",
      "}",
      "",
      "method error(message)atLine(errlinenum) {",
      "    error(message)atLine(errlinenum)withSuggestions([])",
      "}",
      "",
      "method syntaxError(message)atLine(errlinenum) {",
      "    syntaxError(message)atLine(errlinenum)withSuggestions([])",
      "}",
      "",
      "method syntaxError(message)atLine(errlinenum)withSuggestion(suggestion') {",
      "    syntaxError(message)atLine(errlinenum)withSuggestions([suggestion'])",
      "}",
      "",
      "method syntaxError(message)atLine(errlinenum)withSuggestions(suggestions) {",
      "    var arr := \"----\"",
      "    for (1..errlinenum.asString.size) do { _ ->",
      "        arr := arr ++ \"-\"",
      "    }",
      "    for (1..util.lines.at(errlinenum).size) do { _ ->",
      "        arr := arr ++ \"^\"",
      "    }",
      "    util.syntaxError(message, errlinenum, \"\", arr, false, suggestions)",
      "}" ];
  }
  if (typeof global !== "undefined")
    global.gracecode_errormessages = gracecode_errormessages;
  if (typeof window !== "undefined")
    window.gracecode_errormessages = gracecode_errormessages;
