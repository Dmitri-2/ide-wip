"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_stringMap() {
  setModuleName("stringMap");
  this.definitionModule = "stringMap";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_stringMap_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_stringMap_outer0;
  setLineNumber(15);    // compilenode method
  var func1 = function(argcv) {    // method new
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("stringMap");
    var obj2 = Grace_allocObject(GraceObject, "new");
    obj2.definitionModule = "stringMap";
    obj2.definitionLine = 15;
    obj2.outer = this;
    var reader_stringMap_outer3 = function() {
      return this.outer;
    };
    obj2.methods["outer"] = reader_stringMap_outer3;
    var obj_init_2 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj2;
      var func4 = function(argcv) {    // method size
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("stringMap");
        setLineNumber(26);    // compilenode call
           // start native code from line 26
        var result = GraceDone;
        var s = Object.keys(this.data.inner).length;
              return new GraceNum(s);
        var nat5 = result;
           // end native code insertion
        setLineNumber(28);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call7 = callmethodChecked(this, "elems", []);
        return call7;
      };
      func4.paramCounts = [0];
      obj2.methods["size"] = func4;
      func4.definitionLine = 24;
      func4.definitionModule = "stringMap";
      var func8 = function(argcv) {    // method put(_,_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_k = arguments[curarg];
        curarg++;
        var var_v = arguments[curarg];
        curarg++;
        setModuleName("stringMap");
        setLineNumber(34);    // compilenode call
           // start native code from line 34
        var result = GraceDone;
        this.data.inner[var_k._value] = var_v;
                        return this;
        var nat9 = result;
           // end native code insertion
        setLineNumber(36);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call11 = callmethodChecked(this, "findPosition(1)", [1], var_k);
        var var_t = call11;
        var if12 = GraceDone;
        setLineNumber(37);    // compilenode identifier
        // call case 6: other requests
        // call case 4: self request
        onSelf = true;
        var call15 = callmethodChecked(this, "inner", []);
        var call16 = callmethodChecked(call15, "at(1)", [1], var_t);
        var opresult19 = callmethodChecked(var_unused, "==(1)", [1], call16);
        if (Grace_isTrue(opresult19)) {
          setLineNumber(38);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call23 = callmethodChecked(this, "elems", []);
          var opresult25 = callmethodChecked(call23, "+(1)", [1], new GraceNum(1));
          // call case 4: self request
          onSelf = true;
          var call26 = callmethodChecked(this, "elems:=(1)", [1], opresult25);
          if12 = call26;
        }
        setLineNumber(40);    // compilenode identifier
        var opresult30 = callmethodChecked(var_k, "::(1)", [1], var_v);
        // call case 6: other requests
        // call case 4: self request
        onSelf = true;
        var call32 = callmethodChecked(this, "inner", []);
        var call33 = callmethodChecked(call32, "at(1)put(1)", [1, 1], var_t, opresult30);
        var if34 = GraceDone;
        setLineNumber(41);    // compilenode member
        // call case 6: other requests
        // call case 4: self request
        onSelf = true;
        var call38 = callmethodChecked(this, "inner", []);
        var call39 = callmethodChecked(call38, "size", []);
        var quotient41 = callmethodChecked(call39, "/(1)", [1], new GraceNum(2));
        // call case 4: self request
        onSelf = true;
        var call44 = callmethodChecked(this, "elems", []);
        var opresult46 = callmethodChecked(call44, ">(1)", [1], quotient41);
        if (Grace_isTrue(opresult46)) {
          setLineNumber(42);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call48 = callmethodChecked(this, "expand", []);
          if34 = call48;
        }
        setLineNumber(44);    // compilenode identifier
        return this;
      };
      func8.paramCounts = [2];
      obj2.methods["put(2)"] = func8;
      func8.definitionLine = 31;
      func8.definitionModule = "stringMap";
      var func49 = function(argcv) {    // method get(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_k = arguments[curarg];
        curarg++;
        setModuleName("stringMap");
        setLineNumber(49);    // compilenode call
           // start native code from line 49
        var result = GraceDone;
        if (this.data.inner.hasOwnProperty(var_k._value))
                return this.data.inner[var_k._value];
            var nso = callmethod(var___95__prelude, "NoSuchObject", [0]);
            var exceptionMsg = new GraceString("no value for key " + var_k._value);
            throw new GraceExceptionPacket(nso, exceptionMsg);
        var nat50 = result;
           // end native code insertion
        setLineNumber(54);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call52 = callmethodChecked(this, "findPosition(1)", [1], var_k);
        var var_t = call52;
        setLineNumber(55);    // compilenode identifier
        // call case 6: other requests
        // call case 4: self request
        onSelf = true;
        var call55 = callmethodChecked(this, "inner", []);
        var call56 = callmethodChecked(call55, "at(1)", [1], var_t);
        var var_c = call56;
        var if57 = GraceDone;
        setLineNumber(56);    // compilenode identifier
        var opresult60 = callmethodChecked(var_unused, "==(1)", [1], var_c);
        if (Grace_isTrue(opresult60)) {
          setLineNumber(57);    // compilenode string
          var string62 = new GraceString("");
          var string65 = new GraceString("no value for key ");
          var opresult67 = callmethodChecked(string65, "++(1)", [1], var_k);
          var opresult69 = callmethodChecked(opresult67, "++(1)", [1], string62);
          // call case 6: other requests
          // call case 5: prelude request
          var call71 = callmethodChecked(var_prelude, "NoSuchObject", []);
          var call72 = callmethodChecked(call71, "raise(1)", [1], opresult69);
          if57 = call72;
        }
        setLineNumber(59);    // compilenode member
        // call case 6: other requests
        var call74 = callmethodChecked(var_c, "value", []);
        return call74;
      };
      func49.paramCounts = [1];
      obj2.methods["get(1)"] = func49;
      func49.definitionLine = 46;
      func49.definitionModule = "stringMap";
      var func75 = function(argcv) {    // method get(_)ifAbsent(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_k = arguments[curarg];
        curarg++;
        var var_absentBlock = arguments[curarg];
        curarg++;
        setModuleName("stringMap");
        setLineNumber(64);    // compilenode call
           // start native code from line 64
        var result = GraceDone;
        if (this.data.inner.hasOwnProperty(var_k._value))
                return this.data.inner[var_k._value];
            return callmethod(var_absentBlock, "apply", [0]);
        var nat76 = result;
           // end native code insertion
        setLineNumber(67);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call78 = callmethodChecked(this, "findPosition(1)", [1], var_k);
        var var_t = call78;
        setLineNumber(68);    // compilenode identifier
        // call case 6: other requests
        // call case 4: self request
        onSelf = true;
        var call81 = callmethodChecked(this, "inner", []);
        var call82 = callmethodChecked(call81, "at(1)", [1], var_t);
        var var_c = call82;
        var if83 = GraceDone;
        setLineNumber(69);    // compilenode identifier
        var opresult86 = callmethodChecked(var_unused, "==(1)", [1], var_c);
        if (Grace_isTrue(opresult86)) {
          setLineNumber(70);    // compilenode member
          // call case 6: other requests
          var call88 = callmethodChecked(var_absentBlock, "apply", []);
          return call88;
        } else {
          setLineNumber(71);    // compilenode member
          // call case 6: other requests
          var call90 = callmethodChecked(var_c, "value", []);
          return call90;
        }
        return if83;
      };
      func75.paramCounts = [1, 1];
      obj2.methods["get(1)ifAbsent(1)"] = func75;
      func75.definitionLine = 61;
      func75.definitionModule = "stringMap";
      var func91 = function(argcv) {    // method contains(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_k = arguments[curarg];
        curarg++;
        setModuleName("stringMap");
        setLineNumber(75);    // compilenode call
           // start native code from line 75
        var result = GraceDone;
        if (this.data.inner.hasOwnProperty(var_k._value))
                return GraceTrue;
            else return GraceFalse;
        var nat92 = result;
           // end native code insertion
        setLineNumber(78);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call94 = callmethodChecked(this, "findPosition(1)", [1], var_k);
        var var_t = call94;
        var if95 = GraceDone;
        setLineNumber(79);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        // call case 4: self request
        onSelf = true;
        var call100 = callmethodChecked(this, "inner", []);
        var call101 = callmethodChecked(call100, "at(1)", [1], var_t);
        var call102 = callmethodChecked(call101, "key", []);
        var opresult104 = callmethodChecked(call102, "==(1)", [1], var_k);
        if (Grace_isTrue(opresult104)) {
          setLineNumber(80);    // compilenode identifier
          return GraceTrue;
        }
        setLineNumber(82);    // compilenode identifier
        return GraceFalse;
      };
      func91.paramCounts = [1];
      obj2.methods["contains(1)"] = func91;
      func91.definitionLine = 73;
      func91.definitionModule = "stringMap";
      var func105 = function(argcv) {    // method findPosition(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_x = arguments[curarg];
        curarg++;
        setModuleName("stringMap");
        setLineNumber(85);    // compilenode member
        // call case 6: other requests
        var call107 = callmethodChecked(var_x, "hash", []);
        var var_h = call107;
        setLineNumber(86);    // compilenode member
        // call case 6: other requests
        // call case 4: self request
        onSelf = true;
        var call110 = callmethodChecked(this, "inner", []);
        var call111 = callmethodChecked(call110, "size", []);
        var var_s = call111;
        setLineNumber(87);    // compilenode identifier
        var modulus114 = callmethodChecked(var_h, "%(1)", [1], var_s);
        var var_t = modulus114;
        setLineNumber(88);    // compilenode num
        var var_jump = new GraceNum(5);
        setLineNumber(89);    // compilenode block
        var block116 = new GraceBlock(this, 89, 0);
        block116.real = function() {
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call119 = callmethodChecked(this, "inner", []);
          var call120 = callmethodChecked(call119, "at(1)", [1], var_t);
          var opresult123 = callmethodChecked(var_unused, "\u2260(1)", [1], call120);
          return opresult123;
        };
        var block124 = new GraceBlock(this, 89, 0);
        block124.real = function() {
          var if125 = GraceDone;
          setLineNumber(90);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call130 = callmethodChecked(this, "inner", []);
          var call131 = callmethodChecked(call130, "at(1)", [1], var_t);
          var call132 = callmethodChecked(call131, "key", []);
          var opresult134 = callmethodChecked(call132, "==(1)", [1], var_x);
          if (Grace_isTrue(opresult134)) {
            setLineNumber(91);    // compilenode identifier
            throw new ReturnException(var_t, returnTarget);
          }
          var if135 = GraceDone;
          setLineNumber(93);    // compilenode identifier
          var opresult138 = callmethodChecked(var_jump, "\u2260(1)", [1], new GraceNum(0));
          if (Grace_isTrue(opresult138)) {
            setLineNumber(94);    // compilenode identifier
            var prod143 = callmethodChecked(var_t, "*(1)", [1], new GraceNum(3));
            var opresult145 = callmethodChecked(prod143, "+(1)", [1], new GraceNum(1));
            var modulus147 = callmethodChecked(opresult145, "%(1)", [1], var_s);
            var_t = modulus147;
            setLineNumber(95);    // compilenode identifier
            var diff150 = callmethodChecked(var_jump, "-(1)", [1], new GraceNum(1));
            var_jump = diff150;
            if135 = GraceDone;
          } else {
            setLineNumber(97);    // compilenode identifier
            var opresult154 = callmethodChecked(var_t, "+(1)", [1], new GraceNum(1));
            var modulus156 = callmethodChecked(opresult154, "%(1)", [1], var_s);
            var_t = modulus156;
            if135 = GraceDone;
          }
          return if135;
        };
        // call case 5: prelude request
        var call157 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block116, block124);
        setLineNumber(100);    // compilenode identifier
        return var_t;
      };
      func105.confidential = true;
      func105.paramCounts = [1];
      obj2.methods["findPosition(1)"] = func105;
      func105.definitionLine = 84;
      func105.definitionModule = "stringMap";
      var func158 = function(argcv) {    // method asString
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("stringMap");
        setLineNumber(103);    // compilenode call
           // start native code from line 103
        var result = GraceDone;
        var s = "";
            var inner = this.data.inner;
            var keys = Object.keys(inner);
            for (var ix = 0; ix < keys.length; ix++) {
                var key = keys[ix];
                if (s === "") {
                    s = key + "::";
                } else {
                    s = s + ", " + key + "::";
                }
                s = s + callmethod(inner[key], "asString", [0])._value;
            }
            s = "map.new[" + s + "]";
            return new GraceString(s);
        var nat159 = result;
           // end native code insertion
        setLineNumber(117);    // compilenode string
        var string160 = new GraceString("");
        var var_s = string160;
        setLineNumber(118);    // compilenode member
        // call case 6: other requests
        // call case 4: self request
        onSelf = true;
        var call165 = callmethodChecked(this, "inner", []);
        var call166 = callmethodChecked(call165, "size", []);
        var diff168 = callmethodChecked(call166, "-(1)", [1], new GraceNum(1));
        var opresult171 = callmethodChecked(new GraceNum(0), "..(1)", [1], diff168);
        var block172 = new GraceBlock(this, 118, 1);
        setLineNumber(1);    // compilenode identifier
        block172.real = function(var_i) {
          setLineNumber(119);    // compilenode identifier
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call175 = callmethodChecked(this, "inner", []);
          var call176 = callmethodChecked(call175, "at(1)", [1], var_i);
          var var_a = call176;
          var if177 = GraceDone;
          setLineNumber(120);    // compilenode identifier
          var opresult180 = callmethodChecked(var_a, "\u2260(1)", [1], var_unused);
          if (Grace_isTrue(opresult180)) {
            var if181 = GraceDone;
            setLineNumber(121);    // compilenode string
            var string182 = new GraceString("");
            var opresult185 = callmethodChecked(var_s, "==(1)", [1], string182);
            if (Grace_isTrue(opresult185)) {
              setLineNumber(122);    // compilenode string
              var string186 = new GraceString("");
              // call case 6: other requests
              var call189 = callmethodChecked(var_a, "value", []);
              var string191 = new GraceString("::");
              // call case 6: other requests
              var call194 = callmethodChecked(var_a, "key", []);
              var string196 = new GraceString("");
              var opresult198 = callmethodChecked(string196, "++(1)", [1], call194);
              var opresult200 = callmethodChecked(opresult198, "++(1)", [1], string191);
              var opresult202 = callmethodChecked(opresult200, "++(1)", [1], call189);
              var opresult204 = callmethodChecked(opresult202, "++(1)", [1], string186);
              var_s = opresult204;
              if181 = GraceDone;
            } else {
              setLineNumber(124);    // compilenode string
              var string205 = new GraceString("");
              // call case 6: other requests
              var call208 = callmethodChecked(var_a, "value", []);
              var string210 = new GraceString("::");
              // call case 6: other requests
              var call213 = callmethodChecked(var_a, "key", []);
              var string215 = new GraceString(", ");
              var opresult217 = callmethodChecked(string215, "++(1)", [1], call213);
              var opresult219 = callmethodChecked(opresult217, "++(1)", [1], string210);
              var opresult221 = callmethodChecked(opresult219, "++(1)", [1], call208);
              var opresult223 = callmethodChecked(opresult221, "++(1)", [1], string205);
              var opresult226 = callmethodChecked(var_s, "++(1)", [1], opresult223);
              var_s = opresult226;
              if181 = GraceDone;
            }
            if177 = if181;
          }
          return if177;
        };
        // call case 5: prelude request
        var call227 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], opresult171, block172);
        setLineNumber(128);    // compilenode string
        var string228 = new GraceString("]");
        var string231 = new GraceString("map.new[");
        var opresult233 = callmethodChecked(string231, "++(1)", [1], var_s);
        var opresult235 = callmethodChecked(opresult233, "++(1)", [1], string228);
        return opresult235;
      };
      func158.paramCounts = [0];
      obj2.methods["asString"] = func158;
      func158.definitionLine = 102;
      func158.definitionModule = "stringMap";
      var func236 = function(argcv) {    // method asDebugString
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("stringMap");
        setLineNumber(131);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call238 = callmethodChecked(this, "asString", []);
        return call238;
      };
      func236.paramCounts = [0];
      obj2.methods["asDebugString"] = func236;
      func236.definitionLine = 130;
      func236.definitionModule = "stringMap";
      var func239 = function(argcv) {    // method keysAndValuesDo(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_action = arguments[curarg];
        curarg++;
        setModuleName("stringMap");
        setLineNumber(135);    // compilenode call
           // start native code from line 135
        var result = GraceDone;
        var s = "";
            var inner = this.data.inner;
            var keys = Object.keys(inner);
            for (var ix = 0; ix < keys.length; ix++) {
                var key = keys[ix];
                callmethod(var_action, "apply(2)", [2], new GraceString(key), inner[key]);
            }
            return GraceDone;
        var nat240 = result;
           // end native code insertion
        setLineNumber(143);    // compilenode num
        var var_count = new GraceNum(1);
        setLineNumber(144);    // compilenode num
        var var_idx = new GraceNum(0);
        setLineNumber(145);    // compilenode block
        var block242 = new GraceBlock(this, 145, 0);
        block242.real = function() {
          // call case 4: self request
          onSelf = true;
          var call244 = callmethodChecked(this, "size", []);
          var opresult247 = callmethodChecked(var_count, "\u2264(1)", [1], call244);
          return opresult247;
        };
        var block248 = new GraceBlock(this, 145, 0);
        block248.real = function() {
          setLineNumber(146);    // compilenode block
          var block250 = new GraceBlock(this, 146, 0);
          block250.real = function() {
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call253 = callmethodChecked(this, "inner", []);
            var call254 = callmethodChecked(call253, "at(1)", [1], var_idx);
            var opresult257 = callmethodChecked(var_unused, "==(1)", [1], call254);
            return opresult257;
          };
          var block258 = new GraceBlock(this, 146, 0);
          block258.real = function() {
            setLineNumber(147);    // compilenode identifier
            var opresult261 = callmethodChecked(var_idx, "+(1)", [1], new GraceNum(1));
            var_idx = opresult261;
            return GraceDone;
          };
          // call case 5: prelude request
          var call262 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block250, block258);
          setLineNumber(149);    // compilenode identifier
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call265 = callmethodChecked(this, "inner", []);
          var call266 = callmethodChecked(call265, "at(1)", [1], var_idx);
          var var_a = call266;
          setLineNumber(150);    // compilenode member
          // call case 6: other requests
          var call269 = callmethodChecked(var_a, "key", []);
          // call case 6: other requests
          var call271 = callmethodChecked(var_a, "value", []);
          // call case 6: other requests
          var call272 = callmethodChecked(var_action, "apply(2)", [2], call269, call271);
          setLineNumber(151);    // compilenode identifier
          var opresult275 = callmethodChecked(var_count, "+(1)", [1], new GraceNum(1));
          var_count = opresult275;
          setLineNumber(152);    // compilenode identifier
          var opresult278 = callmethodChecked(var_idx, "+(1)", [1], new GraceNum(1));
          var_idx = opresult278;
          return GraceDone;
        };
        // call case 5: prelude request
        var call279 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block242, block248);
        return call279;
      };
      func239.paramCounts = [1];
      obj2.methods["keysAndValuesDo(1)"] = func239;
      func239.definitionLine = 133;
      func239.definitionModule = "stringMap";
      var func280 = function(argcv) {    // method do(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_action = arguments[curarg];
        curarg++;
        setModuleName("stringMap");
        setLineNumber(157);    // compilenode call
           // start native code from line 157
        var result = GraceDone;
        
            var inner = this.data.inner;
            var keys = Object.keys(inner);
            for (var ix = 0; ix < keys.length; ix++) {
                var key = keys[ix];
                callmethod(var_action, "apply(1)", [1], inner[key]);
            }
            return GraceDone;
        var nat281 = result;
           // end native code insertion
        setLineNumber(165);    // compilenode num
        var var_count = new GraceNum(1);
        setLineNumber(166);    // compilenode num
        var var_idx = new GraceNum(0);
        setLineNumber(167);    // compilenode block
        var block283 = new GraceBlock(this, 167, 0);
        block283.real = function() {
          // call case 4: self request
          onSelf = true;
          var call285 = callmethodChecked(this, "size", []);
          var opresult288 = callmethodChecked(var_count, "\u2264(1)", [1], call285);
          return opresult288;
        };
        var block289 = new GraceBlock(this, 167, 0);
        block289.real = function() {
          setLineNumber(168);    // compilenode block
          var block291 = new GraceBlock(this, 168, 0);
          block291.real = function() {
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call294 = callmethodChecked(this, "inner", []);
            var call295 = callmethodChecked(call294, "at(1)", [1], var_idx);
            var opresult298 = callmethodChecked(var_unused, "==(1)", [1], call295);
            return opresult298;
          };
          var block299 = new GraceBlock(this, 168, 0);
          block299.real = function() {
            setLineNumber(169);    // compilenode identifier
            var opresult302 = callmethodChecked(var_idx, "+(1)", [1], new GraceNum(1));
            var_idx = opresult302;
            return GraceDone;
          };
          // call case 5: prelude request
          var call303 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block291, block299);
          setLineNumber(171);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call308 = callmethodChecked(this, "inner", []);
          var call309 = callmethodChecked(call308, "at(1)", [1], var_idx);
          var call310 = callmethodChecked(call309, "value", []);
          // call case 6: other requests
          var call311 = callmethodChecked(var_action, "apply(1)", [1], call310);
          setLineNumber(172);    // compilenode identifier
          var opresult314 = callmethodChecked(var_count, "+(1)", [1], new GraceNum(1));
          var_count = opresult314;
          setLineNumber(173);    // compilenode identifier
          var opresult317 = callmethodChecked(var_idx, "+(1)", [1], new GraceNum(1));
          var_idx = opresult317;
          return GraceDone;
        };
        // call case 5: prelude request
        var call318 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block283, block289);
        return call318;
      };
      func280.paramCounts = [1];
      obj2.methods["do(1)"] = func280;
      func280.definitionLine = 155;
      func280.definitionModule = "stringMap";
      var func319 = function(argcv) {    // method keysDo(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_action = arguments[curarg];
        curarg++;
        setModuleName("stringMap");
        setLineNumber(178);    // compilenode call
           // start native code from line 178
        var result = GraceDone;
        
            var inner = this.data.inner;
            var keys = Object.keys(inner);
            for (var ix = 0; ix < keys.length; ix++) {
                var key = keys[ix];
                callmethod(var_action, "apply(1)", [1], new GraceString(key));
            }
            return GraceDone;
        var nat320 = result;
           // end native code insertion
        setLineNumber(186);    // compilenode num
        var var_count = new GraceNum(1);
        setLineNumber(187);    // compilenode num
        var var_idx = new GraceNum(0);
        setLineNumber(188);    // compilenode block
        var block322 = new GraceBlock(this, 188, 0);
        block322.real = function() {
          // call case 4: self request
          onSelf = true;
          var call324 = callmethodChecked(this, "size", []);
          var opresult327 = callmethodChecked(var_count, "\u2264(1)", [1], call324);
          return opresult327;
        };
        var block328 = new GraceBlock(this, 188, 0);
        block328.real = function() {
          setLineNumber(189);    // compilenode block
          var block330 = new GraceBlock(this, 189, 0);
          block330.real = function() {
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call333 = callmethodChecked(this, "inner", []);
            var call334 = callmethodChecked(call333, "at(1)", [1], var_idx);
            var opresult337 = callmethodChecked(var_unused, "==(1)", [1], call334);
            return opresult337;
          };
          var block338 = new GraceBlock(this, 189, 0);
          block338.real = function() {
            setLineNumber(190);    // compilenode identifier
            var opresult341 = callmethodChecked(var_idx, "+(1)", [1], new GraceNum(1));
            var_idx = opresult341;
            return GraceDone;
          };
          // call case 5: prelude request
          var call342 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block330, block338);
          setLineNumber(192);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call347 = callmethodChecked(this, "inner", []);
          var call348 = callmethodChecked(call347, "at(1)", [1], var_idx);
          var call349 = callmethodChecked(call348, "key", []);
          // call case 6: other requests
          var call350 = callmethodChecked(var_action, "apply(1)", [1], call349);
          setLineNumber(193);    // compilenode identifier
          var opresult353 = callmethodChecked(var_count, "+(1)", [1], new GraceNum(1));
          var_count = opresult353;
          setLineNumber(194);    // compilenode identifier
          var opresult356 = callmethodChecked(var_idx, "+(1)", [1], new GraceNum(1));
          var_idx = opresult356;
          return GraceDone;
        };
        // call case 5: prelude request
        var call357 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block322, block328);
        return call357;
      };
      func319.paramCounts = [1];
      obj2.methods["keysDo(1)"] = func319;
      func319.definitionLine = 177;
      func319.definitionModule = "stringMap";
      var func358 = function(argcv) {    // method valuesDo(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_action = arguments[curarg];
        curarg++;
        setModuleName("stringMap");
        setLineNumber(198);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call360 = callmethodChecked(this, "do(1)", [1], var_action);
        return call360;
      };
      func358.paramCounts = [1];
      obj2.methods["valuesDo(1)"] = func358;
      func358.definitionLine = 198;
      func358.definitionModule = "stringMap";
      var func361 = function(argcv) {    // method expand
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("stringMap");
        setLineNumber(201);    // compilenode member
        // call case 6: other requests
        // call case 4: self request
        onSelf = true;
        var call364 = callmethodChecked(this, "inner", []);
        var call365 = callmethodChecked(call364, "size", []);
        var var_c = call365;
        setLineNumber(202);    // compilenode identifier
        var prod368 = callmethodChecked(var_c, "*(1)", [1], new GraceNum(2));
        var var_n = prod368;
        setLineNumber(203);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call370 = callmethodChecked(this, "inner", []);
        var var_oldInner = call370;
        setLineNumber(204);    // compilenode identifier
        // call case 6: other requests
        // call case 5: prelude request
        var call374 = callmethodChecked(var_prelude, "primitiveArray", []);
        var call375 = callmethodChecked(call374, "new(1)", [1], var_n);
        // call case 4: self request
        onSelf = true;
        var call376 = callmethodChecked(this, "inner:=(1)", [1], call375);
        setLineNumber(205);    // compilenode member
        // call case 6: other requests
        // call case 4: self request
        onSelf = true;
        var call381 = callmethodChecked(this, "inner", []);
        var call382 = callmethodChecked(call381, "size", []);
        var diff384 = callmethodChecked(call382, "-(1)", [1], new GraceNum(1));
        var opresult387 = callmethodChecked(new GraceNum(0), "..(1)", [1], diff384);
        var block388 = new GraceBlock(this, 205, 1);
        setLineNumber(1);    // compilenode identifier
        block388.real = function(var_i) {
          setLineNumber(206);    // compilenode identifier
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call391 = callmethodChecked(this, "inner", []);
          var call392 = callmethodChecked(call391, "at(1)put(1)", [1, 1], var_i, var_unused);
          return call392;
        };
        // call case 5: prelude request
        var call393 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], opresult387, block388);
        setLineNumber(208);    // compilenode num
        // call case 4: self request
        onSelf = true;
        var call395 = callmethodChecked(this, "elems:=(1)", [1], new GraceNum(0));
        setLineNumber(209);    // compilenode member
        // call case 6: other requests
        var call399 = callmethodChecked(var_oldInner, "size", []);
        var diff401 = callmethodChecked(call399, "-(1)", [1], new GraceNum(1));
        var opresult404 = callmethodChecked(new GraceNum(0), "..(1)", [1], diff401);
        var block405 = new GraceBlock(this, 209, 1);
        setLineNumber(1);    // compilenode identifier
        block405.real = function(var_i) {
          setLineNumber(210);    // compilenode identifier
          // call case 6: other requests
          var call407 = callmethodChecked(var_oldInner, "at(1)", [1], var_i);
          var var_a = call407;
          var if408 = GraceDone;
          setLineNumber(211);    // compilenode identifier
          var opresult411 = callmethodChecked(var_a, "\u2260(1)", [1], var_unused);
          if (Grace_isTrue(opresult411)) {
            setLineNumber(212);    // compilenode member
            // call case 6: other requests
            var call414 = callmethodChecked(var_a, "key", []);
            // call case 6: other requests
            var call416 = callmethodChecked(var_a, "value", []);
            // call case 4: self request
            onSelf = true;
            var call417 = callmethodChecked(this, "put(2)", [2], call414, call416);
            if408 = call417;
          }
          return if408;
        };
        // call case 5: prelude request
        var call418 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], opresult404, block405);
        return call418;
      };
      func361.confidential = true;
      func361.paramCounts = [0];
      obj2.methods["expand"] = func361;
      func361.definitionLine = 200;
      func361.definitionModule = "stringMap";
      var func419 = function(argcv) {    // method asList
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("stringMap");
        setLineNumber(218);    // compilenode member
        // call case 5: prelude request
        var call421 = callmethodChecked(var_prelude, "emptyList", []);
        var var_result = call421;
        setLineNumber(219);    // compilenode call
           // start native code from line 219
        var result = GraceDone;
        
            var inner = this.data.inner;
            var keys = Object.keys(inner);
            for (var ix = 0; ix < keys.length; ix++) {
                var key = keys[ix];
                var keyStr = new GraceString(key);
                var binding = callmethod(GraceBindingClass(), "key(1)value(1)",
                                                    [1, 1], keyStr, inner[key]);
                callmethod(var_result, "add(1)", [1], binding);
            }
            return var_result;
        var nat422 = result;
           // end native code insertion
        setLineNumber(230);    // compilenode num
        var var_count = new GraceNum(1);
        setLineNumber(231);    // compilenode num
        var var_idx = new GraceNum(0);
        setLineNumber(232);    // compilenode block
        var block424 = new GraceBlock(this, 232, 0);
        block424.real = function() {
          // call case 4: self request
          onSelf = true;
          var call426 = callmethodChecked(this, "size", []);
          var opresult429 = callmethodChecked(var_count, "\u2264(1)", [1], call426);
          return opresult429;
        };
        var block430 = new GraceBlock(this, 232, 0);
        block430.real = function() {
          setLineNumber(233);    // compilenode block
          var block432 = new GraceBlock(this, 233, 0);
          block432.real = function() {
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call435 = callmethodChecked(this, "inner", []);
            var call436 = callmethodChecked(call435, "at(1)", [1], var_idx);
            var opresult439 = callmethodChecked(var_unused, "==(1)", [1], call436);
            return opresult439;
          };
          var block440 = new GraceBlock(this, 233, 0);
          block440.real = function() {
            setLineNumber(234);    // compilenode identifier
            var opresult443 = callmethodChecked(var_idx, "+(1)", [1], new GraceNum(1));
            var_idx = opresult443;
            return GraceDone;
          };
          // call case 5: prelude request
          var call444 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block432, block440);
          setLineNumber(236);    // compilenode identifier
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call448 = callmethodChecked(this, "inner", []);
          var call449 = callmethodChecked(call448, "at(1)", [1], var_idx);
          // call case 6: other requests
          var call450 = callmethodChecked(var_result, "add(1)", [1], call449);
          setLineNumber(237);    // compilenode identifier
          var opresult453 = callmethodChecked(var_count, "+(1)", [1], new GraceNum(1));
          var_count = opresult453;
          setLineNumber(238);    // compilenode identifier
          var opresult456 = callmethodChecked(var_idx, "+(1)", [1], new GraceNum(1));
          var_idx = opresult456;
          return GraceDone;
        };
        // call case 5: prelude request
        var call457 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block424, block430);
        setLineNumber(240);    // compilenode identifier
        return var_result;
      };
      func419.paramCounts = [0];
      obj2.methods["asList"] = func419;
      func419.definitionLine = 216;
      func419.definitionModule = "stringMap";
      setLineNumber(16);    // compilenode num
      obj2.data["elems"] = new GraceNum(0);
      var reader_stringMap_elems458 = function() {
        return this.data["elems"];
      };
      obj2.methods["elems"] = reader_stringMap_elems458;
      obj2.data["elems"] = new GraceNum(0);
      var writer_stringMap_elems458 = function(argcv, o) {
        this.data["elems"] = o;
        return GraceDone;
      };
      obj2.methods["elems:=(1)"] = writer_stringMap_elems458;
      reader_stringMap_elems458.confidential = true;
      writer_stringMap_elems458.confidential = true;
      obj2.mutable = true;
      setLineNumber(17);    // compilenode num
      // call case 6: other requests
      // call case 5: prelude request
      var call461 = callmethodChecked(var_prelude, "primitiveArray", []);
      var call462 = callmethodChecked(call461, "new(1)", [1], new GraceNum(4));
      obj2.data["inner"] = call462;
      var reader_stringMap_inner463 = function() {
        return this.data["inner"];
      };
      obj2.methods["inner"] = reader_stringMap_inner463;
      obj2.data["inner"] = call462;
      var writer_stringMap_inner463 = function(argcv, o) {
        this.data["inner"] = o;
        return GraceDone;
      };
      obj2.methods["inner:=(1)"] = writer_stringMap_inner463;
      reader_stringMap_inner463.confidential = true;
      writer_stringMap_inner463.confidential = true;
      obj2.mutable = true;
      setLineNumber(18);    // compilenode member
      // call case 6: other requests
      // call case 4: self request
      onSelf = true;
      var call468 = callmethodChecked(this, "inner", []);
      var call469 = callmethodChecked(call468, "size", []);
      var diff471 = callmethodChecked(call469, "-(1)", [1], new GraceNum(1));
      var opresult474 = callmethodChecked(new GraceNum(0), "..(1)", [1], diff471);
      var block475 = new GraceBlock(this, 18, 1);
      setLineNumber(1);    // compilenode identifier
      block475.real = function(var_i) {
        setLineNumber(19);    // compilenode identifier
        // call case 6: other requests
        // call case 4: self request
        onSelf = true;
        var call478 = callmethodChecked(this, "inner", []);
        var call479 = callmethodChecked(call478, "at(1)put(1)", [1, 1], var_i, var_unused);
        return call479;
      };
      // call case 5: prelude request
      var call480 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], opresult474, block475);
      setLineNumber(21);    // compilenode call
         // start native code from line 21
      var result = GraceDone;
      this.data.inner = { };
      var nat481 = result;
         // end native code insertion
      superDepth = origSuperDepth;
    };
    obj_init_2.apply(obj2, []);
    return obj2;
  };
  func1.paramCounts = [0];
  this.methods["new"] = func1;
  func1.definitionLine = 15;
  func1.definitionModule = "stringMap";
    var func482 = function(argcv) {    // method new$object(_)
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      // Start argument processing
      curarg = 1;
      // End argument processing
      setModuleName("stringMap");
      var returnTarget = invocationCount;
      invocationCount++;
      var obj483 = Grace_allocObject(GraceObject, "new");
      obj483.definitionModule = "stringMap";
      obj483.definitionLine = 15;
      var inho483 = inheritingObject;
      while (inho483.superobj) inho483 = inho483.superobj;
      inho483.superobj = obj483;
      obj483.data = inheritingObject.data;
      if (inheritingObject.hasOwnProperty('_value'))
        obj483._value = inheritingObject._value;
      obj483.outer = this;
      var reader_stringMap_outer484 = function() {
        return this.outer;
      };
      obj483.methods["outer"] = reader_stringMap_outer484;
      var obj_init_483 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj483;
        var func485 = function(argcv) {    // method size
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("stringMap");
          setLineNumber(26);    // compilenode call
             // start native code from line 26
          var result = GraceDone;
          var s = Object.keys(this.data.inner).length;
              return new GraceNum(s);
          var nat486 = result;
             // end native code insertion
          setLineNumber(28);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call488 = callmethodChecked(this, "elems", []);
          return call488;
        };
        func485.paramCounts = [0];
        obj483.methods["size"] = func485;
        func485.definitionLine = 24;
        func485.definitionModule = "stringMap";
        var func489 = function(argcv) {    // method put(_,_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_k = arguments[curarg];
          curarg++;
          var var_v = arguments[curarg];
          curarg++;
          setModuleName("stringMap");
          setLineNumber(34);    // compilenode call
             // start native code from line 34
          var result = GraceDone;
          this.data.inner[var_k._value] = var_v;
                        return this;
          var nat490 = result;
             // end native code insertion
          setLineNumber(36);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call492 = callmethodChecked(this, "findPosition(1)", [1], var_k);
          var var_t = call492;
          var if493 = GraceDone;
          setLineNumber(37);    // compilenode identifier
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call496 = callmethodChecked(this, "inner", []);
          var call497 = callmethodChecked(call496, "at(1)", [1], var_t);
          var opresult500 = callmethodChecked(var_unused, "==(1)", [1], call497);
          if (Grace_isTrue(opresult500)) {
            setLineNumber(38);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call504 = callmethodChecked(this, "elems", []);
            var opresult506 = callmethodChecked(call504, "+(1)", [1], new GraceNum(1));
            // call case 4: self request
            onSelf = true;
            var call507 = callmethodChecked(this, "elems:=(1)", [1], opresult506);
            if493 = call507;
          }
          setLineNumber(40);    // compilenode identifier
          var opresult511 = callmethodChecked(var_k, "::(1)", [1], var_v);
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call513 = callmethodChecked(this, "inner", []);
          var call514 = callmethodChecked(call513, "at(1)put(1)", [1, 1], var_t, opresult511);
          var if515 = GraceDone;
          setLineNumber(41);    // compilenode member
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call519 = callmethodChecked(this, "inner", []);
          var call520 = callmethodChecked(call519, "size", []);
          var quotient522 = callmethodChecked(call520, "/(1)", [1], new GraceNum(2));
          // call case 4: self request
          onSelf = true;
          var call525 = callmethodChecked(this, "elems", []);
          var opresult527 = callmethodChecked(call525, ">(1)", [1], quotient522);
          if (Grace_isTrue(opresult527)) {
            setLineNumber(42);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call529 = callmethodChecked(this, "expand", []);
            if515 = call529;
          }
          setLineNumber(44);    // compilenode identifier
          return this;
        };
        func489.paramCounts = [2];
        obj483.methods["put(2)"] = func489;
        func489.definitionLine = 31;
        func489.definitionModule = "stringMap";
        var func530 = function(argcv) {    // method get(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_k = arguments[curarg];
          curarg++;
          setModuleName("stringMap");
          setLineNumber(49);    // compilenode call
             // start native code from line 49
          var result = GraceDone;
          if (this.data.inner.hasOwnProperty(var_k._value))
                return this.data.inner[var_k._value];
            var nso = callmethod(var___95__prelude, "NoSuchObject", [0]);
            var exceptionMsg = new GraceString("no value for key " + var_k._value);
            throw new GraceExceptionPacket(nso, exceptionMsg);
          var nat531 = result;
             // end native code insertion
          setLineNumber(54);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call533 = callmethodChecked(this, "findPosition(1)", [1], var_k);
          var var_t = call533;
          setLineNumber(55);    // compilenode identifier
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call536 = callmethodChecked(this, "inner", []);
          var call537 = callmethodChecked(call536, "at(1)", [1], var_t);
          var var_c = call537;
          var if538 = GraceDone;
          setLineNumber(56);    // compilenode identifier
          var opresult541 = callmethodChecked(var_unused, "==(1)", [1], var_c);
          if (Grace_isTrue(opresult541)) {
            setLineNumber(57);    // compilenode string
            var string543 = new GraceString("");
            var string546 = new GraceString("no value for key ");
            var opresult548 = callmethodChecked(string546, "++(1)", [1], var_k);
            var opresult550 = callmethodChecked(opresult548, "++(1)", [1], string543);
            // call case 6: other requests
            // call case 5: prelude request
            var call552 = callmethodChecked(var_prelude, "NoSuchObject", []);
            var call553 = callmethodChecked(call552, "raise(1)", [1], opresult550);
            if538 = call553;
          }
          setLineNumber(59);    // compilenode member
          // call case 6: other requests
          var call555 = callmethodChecked(var_c, "value", []);
          return call555;
        };
        func530.paramCounts = [1];
        obj483.methods["get(1)"] = func530;
        func530.definitionLine = 46;
        func530.definitionModule = "stringMap";
        var func556 = function(argcv) {    // method get(_)ifAbsent(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_k = arguments[curarg];
          curarg++;
          var var_absentBlock = arguments[curarg];
          curarg++;
          setModuleName("stringMap");
          setLineNumber(64);    // compilenode call
             // start native code from line 64
          var result = GraceDone;
          if (this.data.inner.hasOwnProperty(var_k._value))
                return this.data.inner[var_k._value];
            return callmethod(var_absentBlock, "apply", [0]);
          var nat557 = result;
             // end native code insertion
          setLineNumber(67);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call559 = callmethodChecked(this, "findPosition(1)", [1], var_k);
          var var_t = call559;
          setLineNumber(68);    // compilenode identifier
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call562 = callmethodChecked(this, "inner", []);
          var call563 = callmethodChecked(call562, "at(1)", [1], var_t);
          var var_c = call563;
          var if564 = GraceDone;
          setLineNumber(69);    // compilenode identifier
          var opresult567 = callmethodChecked(var_unused, "==(1)", [1], var_c);
          if (Grace_isTrue(opresult567)) {
            setLineNumber(70);    // compilenode member
            // call case 6: other requests
            var call569 = callmethodChecked(var_absentBlock, "apply", []);
            return call569;
          } else {
            setLineNumber(71);    // compilenode member
            // call case 6: other requests
            var call571 = callmethodChecked(var_c, "value", []);
            return call571;
          }
          return if564;
        };
        func556.paramCounts = [1, 1];
        obj483.methods["get(1)ifAbsent(1)"] = func556;
        func556.definitionLine = 61;
        func556.definitionModule = "stringMap";
        var func572 = function(argcv) {    // method contains(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_k = arguments[curarg];
          curarg++;
          setModuleName("stringMap");
          setLineNumber(75);    // compilenode call
             // start native code from line 75
          var result = GraceDone;
          if (this.data.inner.hasOwnProperty(var_k._value))
                return GraceTrue;
            else return GraceFalse;
          var nat573 = result;
             // end native code insertion
          setLineNumber(78);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call575 = callmethodChecked(this, "findPosition(1)", [1], var_k);
          var var_t = call575;
          var if576 = GraceDone;
          setLineNumber(79);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call581 = callmethodChecked(this, "inner", []);
          var call582 = callmethodChecked(call581, "at(1)", [1], var_t);
          var call583 = callmethodChecked(call582, "key", []);
          var opresult585 = callmethodChecked(call583, "==(1)", [1], var_k);
          if (Grace_isTrue(opresult585)) {
            setLineNumber(80);    // compilenode identifier
            return GraceTrue;
          }
          setLineNumber(82);    // compilenode identifier
          return GraceFalse;
        };
        func572.paramCounts = [1];
        obj483.methods["contains(1)"] = func572;
        func572.definitionLine = 73;
        func572.definitionModule = "stringMap";
        var func586 = function(argcv) {    // method findPosition(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_x = arguments[curarg];
          curarg++;
          setModuleName("stringMap");
          setLineNumber(85);    // compilenode member
          // call case 6: other requests
          var call588 = callmethodChecked(var_x, "hash", []);
          var var_h = call588;
          setLineNumber(86);    // compilenode member
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call591 = callmethodChecked(this, "inner", []);
          var call592 = callmethodChecked(call591, "size", []);
          var var_s = call592;
          setLineNumber(87);    // compilenode identifier
          var modulus595 = callmethodChecked(var_h, "%(1)", [1], var_s);
          var var_t = modulus595;
          setLineNumber(88);    // compilenode num
          var var_jump = new GraceNum(5);
          setLineNumber(89);    // compilenode block
          var block597 = new GraceBlock(this, 89, 0);
          block597.real = function() {
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call600 = callmethodChecked(this, "inner", []);
            var call601 = callmethodChecked(call600, "at(1)", [1], var_t);
            var opresult604 = callmethodChecked(var_unused, "\u2260(1)", [1], call601);
            return opresult604;
          };
          var block605 = new GraceBlock(this, 89, 0);
          block605.real = function() {
            var if606 = GraceDone;
            setLineNumber(90);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call611 = callmethodChecked(this, "inner", []);
            var call612 = callmethodChecked(call611, "at(1)", [1], var_t);
            var call613 = callmethodChecked(call612, "key", []);
            var opresult615 = callmethodChecked(call613, "==(1)", [1], var_x);
            if (Grace_isTrue(opresult615)) {
              setLineNumber(91);    // compilenode identifier
              throw new ReturnException(var_t, returnTarget);
            }
            var if616 = GraceDone;
            setLineNumber(93);    // compilenode identifier
            var opresult619 = callmethodChecked(var_jump, "\u2260(1)", [1], new GraceNum(0));
            if (Grace_isTrue(opresult619)) {
              setLineNumber(94);    // compilenode identifier
              var prod624 = callmethodChecked(var_t, "*(1)", [1], new GraceNum(3));
              var opresult626 = callmethodChecked(prod624, "+(1)", [1], new GraceNum(1));
              var modulus628 = callmethodChecked(opresult626, "%(1)", [1], var_s);
              var_t = modulus628;
              setLineNumber(95);    // compilenode identifier
              var diff631 = callmethodChecked(var_jump, "-(1)", [1], new GraceNum(1));
              var_jump = diff631;
              if616 = GraceDone;
            } else {
              setLineNumber(97);    // compilenode identifier
              var opresult635 = callmethodChecked(var_t, "+(1)", [1], new GraceNum(1));
              var modulus637 = callmethodChecked(opresult635, "%(1)", [1], var_s);
              var_t = modulus637;
              if616 = GraceDone;
            }
            return if616;
          };
          // call case 5: prelude request
          var call638 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block597, block605);
          setLineNumber(100);    // compilenode identifier
          return var_t;
        };
        func586.confidential = true;
        func586.paramCounts = [1];
        obj483.methods["findPosition(1)"] = func586;
        func586.definitionLine = 84;
        func586.definitionModule = "stringMap";
        var func639 = function(argcv) {    // method asString
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("stringMap");
          setLineNumber(103);    // compilenode call
             // start native code from line 103
          var result = GraceDone;
          var s = "";
            var inner = this.data.inner;
            var keys = Object.keys(inner);
            for (var ix = 0; ix < keys.length; ix++) {
                var key = keys[ix];
                if (s === "") {
                    s = key + "::";
                } else {
                    s = s + ", " + key + "::";
                }
                s = s + callmethod(inner[key], "asString", [0])._value;
            }
            s = "map.new[" + s + "]";
            return new GraceString(s);
          var nat640 = result;
             // end native code insertion
          setLineNumber(117);    // compilenode string
          var string641 = new GraceString("");
          var var_s = string641;
          setLineNumber(118);    // compilenode member
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call646 = callmethodChecked(this, "inner", []);
          var call647 = callmethodChecked(call646, "size", []);
          var diff649 = callmethodChecked(call647, "-(1)", [1], new GraceNum(1));
          var opresult652 = callmethodChecked(new GraceNum(0), "..(1)", [1], diff649);
          var block653 = new GraceBlock(this, 118, 1);
          setLineNumber(1);    // compilenode identifier
          block653.real = function(var_i) {
            setLineNumber(119);    // compilenode identifier
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call656 = callmethodChecked(this, "inner", []);
            var call657 = callmethodChecked(call656, "at(1)", [1], var_i);
            var var_a = call657;
            var if658 = GraceDone;
            setLineNumber(120);    // compilenode identifier
            var opresult661 = callmethodChecked(var_a, "\u2260(1)", [1], var_unused);
            if (Grace_isTrue(opresult661)) {
              var if662 = GraceDone;
              setLineNumber(121);    // compilenode string
              var string663 = new GraceString("");
              var opresult666 = callmethodChecked(var_s, "==(1)", [1], string663);
              if (Grace_isTrue(opresult666)) {
                setLineNumber(122);    // compilenode string
                var string667 = new GraceString("");
                // call case 6: other requests
                var call670 = callmethodChecked(var_a, "value", []);
                var string672 = new GraceString("::");
                // call case 6: other requests
                var call675 = callmethodChecked(var_a, "key", []);
                var string677 = new GraceString("");
                var opresult679 = callmethodChecked(string677, "++(1)", [1], call675);
                var opresult681 = callmethodChecked(opresult679, "++(1)", [1], string672);
                var opresult683 = callmethodChecked(opresult681, "++(1)", [1], call670);
                var opresult685 = callmethodChecked(opresult683, "++(1)", [1], string667);
                var_s = opresult685;
                if662 = GraceDone;
              } else {
                setLineNumber(124);    // compilenode string
                var string686 = new GraceString("");
                // call case 6: other requests
                var call689 = callmethodChecked(var_a, "value", []);
                var string691 = new GraceString("::");
                // call case 6: other requests
                var call694 = callmethodChecked(var_a, "key", []);
                var string696 = new GraceString(", ");
                var opresult698 = callmethodChecked(string696, "++(1)", [1], call694);
                var opresult700 = callmethodChecked(opresult698, "++(1)", [1], string691);
                var opresult702 = callmethodChecked(opresult700, "++(1)", [1], call689);
                var opresult704 = callmethodChecked(opresult702, "++(1)", [1], string686);
                var opresult707 = callmethodChecked(var_s, "++(1)", [1], opresult704);
                var_s = opresult707;
                if662 = GraceDone;
              }
              if658 = if662;
            }
            return if658;
          };
          // call case 5: prelude request
          var call708 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], opresult652, block653);
          setLineNumber(128);    // compilenode string
          var string709 = new GraceString("]");
          var string712 = new GraceString("map.new[");
          var opresult714 = callmethodChecked(string712, "++(1)", [1], var_s);
          var opresult716 = callmethodChecked(opresult714, "++(1)", [1], string709);
          return opresult716;
        };
        func639.paramCounts = [0];
        obj483.methods["asString"] = func639;
        func639.definitionLine = 102;
        func639.definitionModule = "stringMap";
        var func717 = function(argcv) {    // method asDebugString
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("stringMap");
          setLineNumber(131);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call719 = callmethodChecked(this, "asString", []);
          return call719;
        };
        func717.paramCounts = [0];
        obj483.methods["asDebugString"] = func717;
        func717.definitionLine = 130;
        func717.definitionModule = "stringMap";
        var func720 = function(argcv) {    // method keysAndValuesDo(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_action = arguments[curarg];
          curarg++;
          setModuleName("stringMap");
          setLineNumber(135);    // compilenode call
             // start native code from line 135
          var result = GraceDone;
          var s = "";
            var inner = this.data.inner;
            var keys = Object.keys(inner);
            for (var ix = 0; ix < keys.length; ix++) {
                var key = keys[ix];
                callmethod(var_action, "apply(2)", [2], new GraceString(key), inner[key]);
            }
            return GraceDone;
          var nat721 = result;
             // end native code insertion
          setLineNumber(143);    // compilenode num
          var var_count = new GraceNum(1);
          setLineNumber(144);    // compilenode num
          var var_idx = new GraceNum(0);
          setLineNumber(145);    // compilenode block
          var block723 = new GraceBlock(this, 145, 0);
          block723.real = function() {
            // call case 4: self request
            onSelf = true;
            var call725 = callmethodChecked(this, "size", []);
            var opresult728 = callmethodChecked(var_count, "\u2264(1)", [1], call725);
            return opresult728;
          };
          var block729 = new GraceBlock(this, 145, 0);
          block729.real = function() {
            setLineNumber(146);    // compilenode block
            var block731 = new GraceBlock(this, 146, 0);
            block731.real = function() {
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call734 = callmethodChecked(this, "inner", []);
              var call735 = callmethodChecked(call734, "at(1)", [1], var_idx);
              var opresult738 = callmethodChecked(var_unused, "==(1)", [1], call735);
              return opresult738;
            };
            var block739 = new GraceBlock(this, 146, 0);
            block739.real = function() {
              setLineNumber(147);    // compilenode identifier
              var opresult742 = callmethodChecked(var_idx, "+(1)", [1], new GraceNum(1));
              var_idx = opresult742;
              return GraceDone;
            };
            // call case 5: prelude request
            var call743 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block731, block739);
            setLineNumber(149);    // compilenode identifier
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call746 = callmethodChecked(this, "inner", []);
            var call747 = callmethodChecked(call746, "at(1)", [1], var_idx);
            var var_a = call747;
            setLineNumber(150);    // compilenode member
            // call case 6: other requests
            var call750 = callmethodChecked(var_a, "key", []);
            // call case 6: other requests
            var call752 = callmethodChecked(var_a, "value", []);
            // call case 6: other requests
            var call753 = callmethodChecked(var_action, "apply(2)", [2], call750, call752);
            setLineNumber(151);    // compilenode identifier
            var opresult756 = callmethodChecked(var_count, "+(1)", [1], new GraceNum(1));
            var_count = opresult756;
            setLineNumber(152);    // compilenode identifier
            var opresult759 = callmethodChecked(var_idx, "+(1)", [1], new GraceNum(1));
            var_idx = opresult759;
            return GraceDone;
          };
          // call case 5: prelude request
          var call760 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block723, block729);
          return call760;
        };
        func720.paramCounts = [1];
        obj483.methods["keysAndValuesDo(1)"] = func720;
        func720.definitionLine = 133;
        func720.definitionModule = "stringMap";
        var func761 = function(argcv) {    // method do(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_action = arguments[curarg];
          curarg++;
          setModuleName("stringMap");
          setLineNumber(157);    // compilenode call
             // start native code from line 157
          var result = GraceDone;
          
            var inner = this.data.inner;
            var keys = Object.keys(inner);
            for (var ix = 0; ix < keys.length; ix++) {
                var key = keys[ix];
                callmethod(var_action, "apply(1)", [1], inner[key]);
            }
            return GraceDone;
          var nat762 = result;
             // end native code insertion
          setLineNumber(165);    // compilenode num
          var var_count = new GraceNum(1);
          setLineNumber(166);    // compilenode num
          var var_idx = new GraceNum(0);
          setLineNumber(167);    // compilenode block
          var block764 = new GraceBlock(this, 167, 0);
          block764.real = function() {
            // call case 4: self request
            onSelf = true;
            var call766 = callmethodChecked(this, "size", []);
            var opresult769 = callmethodChecked(var_count, "\u2264(1)", [1], call766);
            return opresult769;
          };
          var block770 = new GraceBlock(this, 167, 0);
          block770.real = function() {
            setLineNumber(168);    // compilenode block
            var block772 = new GraceBlock(this, 168, 0);
            block772.real = function() {
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call775 = callmethodChecked(this, "inner", []);
              var call776 = callmethodChecked(call775, "at(1)", [1], var_idx);
              var opresult779 = callmethodChecked(var_unused, "==(1)", [1], call776);
              return opresult779;
            };
            var block780 = new GraceBlock(this, 168, 0);
            block780.real = function() {
              setLineNumber(169);    // compilenode identifier
              var opresult783 = callmethodChecked(var_idx, "+(1)", [1], new GraceNum(1));
              var_idx = opresult783;
              return GraceDone;
            };
            // call case 5: prelude request
            var call784 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block772, block780);
            setLineNumber(171);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call789 = callmethodChecked(this, "inner", []);
            var call790 = callmethodChecked(call789, "at(1)", [1], var_idx);
            var call791 = callmethodChecked(call790, "value", []);
            // call case 6: other requests
            var call792 = callmethodChecked(var_action, "apply(1)", [1], call791);
            setLineNumber(172);    // compilenode identifier
            var opresult795 = callmethodChecked(var_count, "+(1)", [1], new GraceNum(1));
            var_count = opresult795;
            setLineNumber(173);    // compilenode identifier
            var opresult798 = callmethodChecked(var_idx, "+(1)", [1], new GraceNum(1));
            var_idx = opresult798;
            return GraceDone;
          };
          // call case 5: prelude request
          var call799 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block764, block770);
          return call799;
        };
        func761.paramCounts = [1];
        obj483.methods["do(1)"] = func761;
        func761.definitionLine = 155;
        func761.definitionModule = "stringMap";
        var func800 = function(argcv) {    // method keysDo(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_action = arguments[curarg];
          curarg++;
          setModuleName("stringMap");
          setLineNumber(178);    // compilenode call
             // start native code from line 178
          var result = GraceDone;
          
            var inner = this.data.inner;
            var keys = Object.keys(inner);
            for (var ix = 0; ix < keys.length; ix++) {
                var key = keys[ix];
                callmethod(var_action, "apply(1)", [1], new GraceString(key));
            }
            return GraceDone;
          var nat801 = result;
             // end native code insertion
          setLineNumber(186);    // compilenode num
          var var_count = new GraceNum(1);
          setLineNumber(187);    // compilenode num
          var var_idx = new GraceNum(0);
          setLineNumber(188);    // compilenode block
          var block803 = new GraceBlock(this, 188, 0);
          block803.real = function() {
            // call case 4: self request
            onSelf = true;
            var call805 = callmethodChecked(this, "size", []);
            var opresult808 = callmethodChecked(var_count, "\u2264(1)", [1], call805);
            return opresult808;
          };
          var block809 = new GraceBlock(this, 188, 0);
          block809.real = function() {
            setLineNumber(189);    // compilenode block
            var block811 = new GraceBlock(this, 189, 0);
            block811.real = function() {
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call814 = callmethodChecked(this, "inner", []);
              var call815 = callmethodChecked(call814, "at(1)", [1], var_idx);
              var opresult818 = callmethodChecked(var_unused, "==(1)", [1], call815);
              return opresult818;
            };
            var block819 = new GraceBlock(this, 189, 0);
            block819.real = function() {
              setLineNumber(190);    // compilenode identifier
              var opresult822 = callmethodChecked(var_idx, "+(1)", [1], new GraceNum(1));
              var_idx = opresult822;
              return GraceDone;
            };
            // call case 5: prelude request
            var call823 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block811, block819);
            setLineNumber(192);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call828 = callmethodChecked(this, "inner", []);
            var call829 = callmethodChecked(call828, "at(1)", [1], var_idx);
            var call830 = callmethodChecked(call829, "key", []);
            // call case 6: other requests
            var call831 = callmethodChecked(var_action, "apply(1)", [1], call830);
            setLineNumber(193);    // compilenode identifier
            var opresult834 = callmethodChecked(var_count, "+(1)", [1], new GraceNum(1));
            var_count = opresult834;
            setLineNumber(194);    // compilenode identifier
            var opresult837 = callmethodChecked(var_idx, "+(1)", [1], new GraceNum(1));
            var_idx = opresult837;
            return GraceDone;
          };
          // call case 5: prelude request
          var call838 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block803, block809);
          return call838;
        };
        func800.paramCounts = [1];
        obj483.methods["keysDo(1)"] = func800;
        func800.definitionLine = 177;
        func800.definitionModule = "stringMap";
        var func839 = function(argcv) {    // method valuesDo(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_action = arguments[curarg];
          curarg++;
          setModuleName("stringMap");
          setLineNumber(198);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call841 = callmethodChecked(this, "do(1)", [1], var_action);
          return call841;
        };
        func839.paramCounts = [1];
        obj483.methods["valuesDo(1)"] = func839;
        func839.definitionLine = 198;
        func839.definitionModule = "stringMap";
        var func842 = function(argcv) {    // method expand
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("stringMap");
          setLineNumber(201);    // compilenode member
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call845 = callmethodChecked(this, "inner", []);
          var call846 = callmethodChecked(call845, "size", []);
          var var_c = call846;
          setLineNumber(202);    // compilenode identifier
          var prod849 = callmethodChecked(var_c, "*(1)", [1], new GraceNum(2));
          var var_n = prod849;
          setLineNumber(203);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call851 = callmethodChecked(this, "inner", []);
          var var_oldInner = call851;
          setLineNumber(204);    // compilenode identifier
          // call case 6: other requests
          // call case 5: prelude request
          var call855 = callmethodChecked(var_prelude, "primitiveArray", []);
          var call856 = callmethodChecked(call855, "new(1)", [1], var_n);
          // call case 4: self request
          onSelf = true;
          var call857 = callmethodChecked(this, "inner:=(1)", [1], call856);
          setLineNumber(205);    // compilenode member
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call862 = callmethodChecked(this, "inner", []);
          var call863 = callmethodChecked(call862, "size", []);
          var diff865 = callmethodChecked(call863, "-(1)", [1], new GraceNum(1));
          var opresult868 = callmethodChecked(new GraceNum(0), "..(1)", [1], diff865);
          var block869 = new GraceBlock(this, 205, 1);
          setLineNumber(1);    // compilenode identifier
          block869.real = function(var_i) {
            setLineNumber(206);    // compilenode identifier
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call872 = callmethodChecked(this, "inner", []);
            var call873 = callmethodChecked(call872, "at(1)put(1)", [1, 1], var_i, var_unused);
            return call873;
          };
          // call case 5: prelude request
          var call874 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], opresult868, block869);
          setLineNumber(208);    // compilenode num
          // call case 4: self request
          onSelf = true;
          var call876 = callmethodChecked(this, "elems:=(1)", [1], new GraceNum(0));
          setLineNumber(209);    // compilenode member
          // call case 6: other requests
          var call880 = callmethodChecked(var_oldInner, "size", []);
          var diff882 = callmethodChecked(call880, "-(1)", [1], new GraceNum(1));
          var opresult885 = callmethodChecked(new GraceNum(0), "..(1)", [1], diff882);
          var block886 = new GraceBlock(this, 209, 1);
          setLineNumber(1);    // compilenode identifier
          block886.real = function(var_i) {
            setLineNumber(210);    // compilenode identifier
            // call case 6: other requests
            var call888 = callmethodChecked(var_oldInner, "at(1)", [1], var_i);
            var var_a = call888;
            var if889 = GraceDone;
            setLineNumber(211);    // compilenode identifier
            var opresult892 = callmethodChecked(var_a, "\u2260(1)", [1], var_unused);
            if (Grace_isTrue(opresult892)) {
              setLineNumber(212);    // compilenode member
              // call case 6: other requests
              var call895 = callmethodChecked(var_a, "key", []);
              // call case 6: other requests
              var call897 = callmethodChecked(var_a, "value", []);
              // call case 4: self request
              onSelf = true;
              var call898 = callmethodChecked(this, "put(2)", [2], call895, call897);
              if889 = call898;
            }
            return if889;
          };
          // call case 5: prelude request
          var call899 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], opresult885, block886);
          return call899;
        };
        func842.confidential = true;
        func842.paramCounts = [0];
        obj483.methods["expand"] = func842;
        func842.definitionLine = 200;
        func842.definitionModule = "stringMap";
        var func900 = function(argcv) {    // method asList
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("stringMap");
          setLineNumber(218);    // compilenode member
          // call case 5: prelude request
          var call902 = callmethodChecked(var_prelude, "emptyList", []);
          var var_result = call902;
          setLineNumber(219);    // compilenode call
             // start native code from line 219
          var result = GraceDone;
          
            var inner = this.data.inner;
            var keys = Object.keys(inner);
            for (var ix = 0; ix < keys.length; ix++) {
                var key = keys[ix];
                var keyStr = new GraceString(key);
                var binding = callmethod(GraceBindingClass(), "key(1)value(1)",
                                                    [1, 1], keyStr, inner[key]);
                callmethod(var_result, "add(1)", [1], binding);
            }
            return var_result;
          var nat903 = result;
             // end native code insertion
          setLineNumber(230);    // compilenode num
          var var_count = new GraceNum(1);
          setLineNumber(231);    // compilenode num
          var var_idx = new GraceNum(0);
          setLineNumber(232);    // compilenode block
          var block905 = new GraceBlock(this, 232, 0);
          block905.real = function() {
            // call case 4: self request
            onSelf = true;
            var call907 = callmethodChecked(this, "size", []);
            var opresult910 = callmethodChecked(var_count, "\u2264(1)", [1], call907);
            return opresult910;
          };
          var block911 = new GraceBlock(this, 232, 0);
          block911.real = function() {
            setLineNumber(233);    // compilenode block
            var block913 = new GraceBlock(this, 233, 0);
            block913.real = function() {
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call916 = callmethodChecked(this, "inner", []);
              var call917 = callmethodChecked(call916, "at(1)", [1], var_idx);
              var opresult920 = callmethodChecked(var_unused, "==(1)", [1], call917);
              return opresult920;
            };
            var block921 = new GraceBlock(this, 233, 0);
            block921.real = function() {
              setLineNumber(234);    // compilenode identifier
              var opresult924 = callmethodChecked(var_idx, "+(1)", [1], new GraceNum(1));
              var_idx = opresult924;
              return GraceDone;
            };
            // call case 5: prelude request
            var call925 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block913, block921);
            setLineNumber(236);    // compilenode identifier
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call929 = callmethodChecked(this, "inner", []);
            var call930 = callmethodChecked(call929, "at(1)", [1], var_idx);
            // call case 6: other requests
            var call931 = callmethodChecked(var_result, "add(1)", [1], call930);
            setLineNumber(237);    // compilenode identifier
            var opresult934 = callmethodChecked(var_count, "+(1)", [1], new GraceNum(1));
            var_count = opresult934;
            setLineNumber(238);    // compilenode identifier
            var opresult937 = callmethodChecked(var_idx, "+(1)", [1], new GraceNum(1));
            var_idx = opresult937;
            return GraceDone;
          };
          // call case 5: prelude request
          var call938 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block905, block911);
          setLineNumber(240);    // compilenode identifier
          return var_result;
        };
        func900.paramCounts = [0];
        obj483.methods["asList"] = func900;
        func900.definitionLine = 216;
        func900.definitionModule = "stringMap";
        setLineNumber(16);    // compilenode num
        obj483.data["elems"] = new GraceNum(0);
        var reader_stringMap_elems939 = function() {
          return this.data["elems"];
        };
        obj483.methods["elems"] = reader_stringMap_elems939;
        obj483.data["elems"] = new GraceNum(0);
        var writer_stringMap_elems939 = function(argcv, o) {
          this.data["elems"] = o;
          return GraceDone;
        };
        obj483.methods["elems:=(1)"] = writer_stringMap_elems939;
        reader_stringMap_elems939.confidential = true;
        writer_stringMap_elems939.confidential = true;
        obj483.mutable = true;
        setLineNumber(17);    // compilenode num
        // call case 6: other requests
        // call case 5: prelude request
        var call942 = callmethodChecked(var_prelude, "primitiveArray", []);
        var call943 = callmethodChecked(call942, "new(1)", [1], new GraceNum(4));
        obj483.data["inner"] = call943;
        var reader_stringMap_inner944 = function() {
          return this.data["inner"];
        };
        obj483.methods["inner"] = reader_stringMap_inner944;
        obj483.data["inner"] = call943;
        var writer_stringMap_inner944 = function(argcv, o) {
          this.data["inner"] = o;
          return GraceDone;
        };
        obj483.methods["inner:=(1)"] = writer_stringMap_inner944;
        reader_stringMap_inner944.confidential = true;
        writer_stringMap_inner944.confidential = true;
        obj483.mutable = true;
        setLineNumber(18);    // compilenode member
        // call case 6: other requests
        // call case 4: self request
        onSelf = true;
        var call949 = callmethodChecked(this, "inner", []);
        var call950 = callmethodChecked(call949, "size", []);
        var diff952 = callmethodChecked(call950, "-(1)", [1], new GraceNum(1));
        var opresult955 = callmethodChecked(new GraceNum(0), "..(1)", [1], diff952);
        var block956 = new GraceBlock(this, 18, 1);
        setLineNumber(1);    // compilenode identifier
        block956.real = function(var_i) {
          setLineNumber(19);    // compilenode identifier
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call959 = callmethodChecked(this, "inner", []);
          var call960 = callmethodChecked(call959, "at(1)put(1)", [1, 1], var_i, var_unused);
          return call960;
        };
        // call case 5: prelude request
        var call961 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], opresult955, block956);
        setLineNumber(21);    // compilenode call
           // start native code from line 21
        var result = GraceDone;
        this.data.inner = { };
        var nat962 = result;
           // end native code insertion
        superDepth = origSuperDepth;
      };
      obj_init_483.apply(inheritingObject, []);
      return obj483;
      };
      this.methods["new$object(1)"] = func482;
    setLineNumber(10);    // compilenode object
    var obj963 = Grace_allocObject(null, "unused");
    obj963.definitionModule = "stringMap";
    obj963.definitionLine = 10;
    obj963.outer = this;
    var reader_stringMap_outer964 = function() {
      return this.outer;
    };
    obj963.methods["outer"] = reader_stringMap_outer964;
    var obj_init_963 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj963;
      setLineNumber(11);    // compilenode string
      var string966 = new GraceString("unused");
      // call case 6: other requests
      // call case 5: prelude request
      var call968 = callmethodChecked(var_prelude, "Singleton", []);
      var call969 = callmethodChecked(call968, "named(1)$object(1)", [1, 1], string966, this);
      obj963.superobj = call969;
      if (call969.data) obj963.data = call969.data;
      if (call969.hasOwnProperty('_value'))
          obj963._value = call969._value;
      setLineNumber(12);    // compilenode identifier
      obj963.data["key"] = this;
      var reader_stringMap_key970 = function() {
        return this.data["key"];
      };
      reader_stringMap_key970.def = true;
      obj963.methods["key"] = reader_stringMap_key970;
      superDepth = origSuperDepth;
    };
    obj_init_963.apply(obj963, []);
    var var_unused = obj963;
    setLineNumber(1);    // compilenode method
    var func971 = function(argcv) {    // method unused
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      setModuleName("stringMap");
      // unused is a simple accessor - elide try ... catch
      setLineNumber(10);    // compilenode identifier
      return var_unused;
    };
    func971.paramCounts = [0];
    this.methods["unused"] = func971;
    func971.definitionLine = 1;
    func971.definitionModule = "stringMap";
    this.methods["unused"].debug = "def";
    return this;
  }
  gracecode_stringMap.imports = [];
  if (typeof gctCache !== "undefined")
    gctCache['stringMap'] = "classes:\nconfidential:\nfresh-methods:\n new\nfresh:new:\n asDebugString\n asList\n asString\n contains(1)\n do(1)\n elems\n expand\n findPosition(1)\n get(1)\n get(1)ifAbsent(1)\n inner\n keysAndValuesDo(1)\n keysDo(1)\n put(2)\n size\n valuesDo(1)\nmodules:\npath:\n stringMap\npublic:\n new\ntypes:\n";
  if (typeof originalSourceLines !== "undefined") {
    originalSourceLines["stringMap"] = [
      "// This module defines a class new that implements a mapping from strings to objects",
      "// Its interface is strange, but is designed to mimic that of mgcollecitons.map.new",
      "// For a general-purpose mapping obejct, use dictonary from standardGrace.",
      "//",
      "// The implementation for C is based on that from mgcollections; that for JS uses",
      "// native code, since hashing is built-in to JavaScript objects.",
      "// External iterators are not implemented.  Instead, the internal iterators",
      "// keysDo and valuesDo are provided.",
      "",
      "def unused = object {",
      "    inherits Singleton.named \"unused\"",
      "    def key is public = self",
      "}",
      "",
      "class new {",
      "    var elems := 0",
      "    var inner := primitiveArray.new(4)",
      "    for (0..(inner.size-1)) do {i->",
      "        inner.at(i)put(unused)",
      "    }",
      "    native \"js\" code ‹this.data.inner = { };›  ",
      "        // override the primitiveArray with an empty object",
      "",
      "    method size {",
      "        // The number of bindings that I contain.",
      "        native \"js\" code ‹var s = Object.keys(this.data.inner).length;",
      "              return new GraceNum(s);›",
      "        elems",
      "    }",
      "",
      "    method put(k, v) {",
      "        // binds the value v and the key k, which must be a String.",
      "        // Returns self, for chaining.",
      "        native \"js\" code ‹this.data.inner[var_k._value] = var_v;",
      "                        return this;›",
      "        var t := findPosition(k)",
      "        if (unused == inner.at(t)) then {",
      "            elems := elems + 1",
      "        }",
      "        inner.at(t)put(k::v)",
      "        if (elems > (inner.size / 2)) then {",
      "            expand",
      "        }",
      "        self",
      "    }",
      "    method get(k) {",
      "        // answers the value associated with the key k.  If there is none",
      "        // raises the NoSuchObject exception.",
      "        native \"js\" code ‹if (this.data.inner.hasOwnProperty(var_k._value))",
      "                return this.data.inner[var_k._value];",
      "            var nso = callmethod(var___95__prelude, \"NoSuchObject\", [0]);",
      "            var exceptionMsg = new GraceString(\"no value for key \" + var_k._value);",
      "            throw new GraceExceptionPacket(nso, exceptionMsg);›",
      "        var t := findPosition(k)",
      "        var c := inner.at(t)",
      "        if (unused == c) then {",
      "            NoSuchObject.raise \"no value for key {k}\"",
      "        }",
      "        return c.value",
      "    }",
      "    method get(k) ifAbsent (absentBlock) {",
      "        // answers the value associated with the key k.  If there is none",
      "        // evaluates absentBlock and returns its result.",
      "        native \"js\" code ‹if (this.data.inner.hasOwnProperty(var_k._value))",
      "                return this.data.inner[var_k._value];",
      "            return callmethod(var_absentBlock, \"apply\", [0]);›",
      "        var t := findPosition(k)",
      "        var c := inner.at(t)",
      "        if (unused == c)",
      "            then { return absentBlock.apply }",
      "            else { return c.value }",
      "    }",
      "    method contains(k) {",
      "        // true if I contain the key k",
      "        native \"js\" code ‹if (this.data.inner.hasOwnProperty(var_k._value))",
      "                return GraceTrue;",
      "            else return GraceFalse;›",
      "        var t := findPosition(k)",
      "        if (inner.at(t).key == k) then {",
      "            return true",
      "        }",
      "        return false",
      "    }",
      "    method findPosition(x) is confidential {",
      "        def h = x.hash",
      "        def s = inner.size",
      "        var t := h % s",
      "        var jump := 5",
      "        while { unused ≠ inner.at(t) } do {",
      "            if (inner.at(t).key == x) then {",
      "                return t",
      "            }",
      "            if (jump != 0) then {",
      "                t := (t * 3 + 1) % s",
      "                jump := jump - 1",
      "            } else {",
      "                t := (t + 1) % s",
      "            }",
      "        }",
      "        return t",
      "    }",
      "    method asString {",
      "        native \"js\" code ‹var s = \"\";",
      "            var inner = this.data.inner;",
      "            var keys = Object.keys(inner);",
      "            for (var ix = 0; ix < keys.length; ix++) {",
      "                var key = keys[ix];",
      "                if (s === \"\") {",
      "                    s = key + \"::\";",
      "                } else {",
      "                    s = s + \", \" + key + \"::\";",
      "                }",
      "                s = s + callmethod(inner[key], \"asString\", [0])._value;",
      "            }",
      "            s = \"map.new[\" + s + \"]\";",
      "            return new GraceString(s);›",
      "        var s := \"\"",
      "        for (0..(inner.size-1)) do {i->",
      "            def a = inner.at(i)",
      "            if (a != unused) then {",
      "                if (s == \"\") then {",
      "                    s := \"{a.key}::{a.value}\"",
      "                } else {",
      "                    s := s ++ \", {a.key}::{a.value}\"",
      "                }",
      "            }",
      "        }",
      "        \"map.new[\" ++ s ++ \"]\"",
      "    }",
      "    method asDebugString {",
      "        asString",
      "    }",
      "    method keysAndValuesDo(action) {",
      "        // internal iterator over my keys and values.",
      "        native \"js\" code ‹var s = \"\";",
      "            var inner = this.data.inner;",
      "            var keys = Object.keys(inner);",
      "            for (var ix = 0; ix < keys.length; ix++) {",
      "                var key = keys[ix];",
      "                callmethod(var_action, \"apply(2)\", [2], new GraceString(key), inner[key]);",
      "            }",
      "            return GraceDone;›",
      "        var count := 1",
      "        var idx := 0",
      "        while {count <= size} do {",
      "            while { unused == inner.at(idx) } do {",
      "                idx := idx + 1",
      "            }",
      "            def a = inner.at(idx)",
      "            action.apply(a.key, a.value)",
      "            count := count + 1",
      "            idx := idx + 1",
      "        }",
      "    }",
      "    method do(action) {",
      "        // internal iterator over my values.",
      "        native \"js\" code ‹",
      "            var inner = this.data.inner;",
      "            var keys = Object.keys(inner);",
      "            for (var ix = 0; ix < keys.length; ix++) {",
      "                var key = keys[ix];",
      "                callmethod(var_action, \"apply(1)\", [1], inner[key]);",
      "            }",
      "            return GraceDone;›",
      "        var count := 1",
      "        var idx := 0",
      "        while {count <= size} do {",
      "            while { unused == inner.at(idx) } do {",
      "                idx := idx + 1",
      "            }",
      "            action.apply (inner.at(idx).value)",
      "            count := count + 1",
      "            idx := idx + 1",
      "        }",
      "    }",
      "    ",
      "    method keysDo(action) {",
      "        native \"js\" code ‹",
      "            var inner = this.data.inner;",
      "            var keys = Object.keys(inner);",
      "            for (var ix = 0; ix < keys.length; ix++) {",
      "                var key = keys[ix];",
      "                callmethod(var_action, \"apply(1)\", [1], new GraceString(key));",
      "            }",
      "            return GraceDone;›",
      "        var count := 1",
      "        var idx := 0",
      "        while {count <= size} do {",
      "            while { unused == inner.at(idx) } do {",
      "                idx := idx + 1",
      "            }",
      "            action.apply (inner.at(idx).key)",
      "            count := count + 1",
      "            idx := idx + 1",
      "        }",
      "    }",
      "    ",
      "    method valuesDo(action) { do(action) }",
      "",
      "    method expand is confidential {",
      "        def c = inner.size",
      "        def n = c * 2",
      "        def oldInner = inner",
      "        inner := primitiveArray.new(n)",
      "        for (0..(inner.size-1)) do {i->",
      "            inner.at(i)put(unused)",
      "        }",
      "        elems := 0",
      "        for (0..(oldInner.size-1)) do {i->",
      "            def a = oldInner.at(i)",
      "            if (a != unused) then {",
      "                put(a.key, a.value)",
      "            }",
      "        }",
      "    }",
      "    method asList {",
      "        // the contents of this stringMap as a list of bindings",
      "        def result = emptyList",
      "        native \"js\" code ‹",
      "            var inner = this.data.inner;",
      "            var keys = Object.keys(inner);",
      "            for (var ix = 0; ix < keys.length; ix++) {",
      "                var key = keys[ix];",
      "                var keyStr = new GraceString(key);",
      "                var binding = callmethod(GraceBindingClass(), \"key(1)value(1)\",",
      "                                                    [1, 1], keyStr, inner[key]);",
      "                callmethod(var_result, \"add(1)\", [1], binding);",
      "            }",
      "            return var_result;›",
      "        var count := 1",
      "        var idx := 0",
      "        while {count <= size} do {",
      "            while { unused == inner.at(idx) } do {",
      "                idx := idx + 1",
      "            }",
      "            result.add (inner.at(idx))",
      "            count := count + 1",
      "            idx := idx + 1",
      "        }",
      "        result",
      "    }",
      "}" ];
  }
  if (typeof global !== "undefined")
    global.gracecode_stringMap = gracecode_stringMap;
  if (typeof window !== "undefined")
    window.gracecode_stringMap = gracecode_stringMap;
