"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_unixFilePath() {
  setModuleName("unixFilePath");
  this.definitionModule = "unixFilePath";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_unixFilePath_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_unixFilePath_outer0;
  setLineNumber(1);    // compilenode import
  // Import of io as io
  if (typeof gracecode_io == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module io'));
  var var_io = do_import("io", gracecode_io);
  var func1 = function(argcv) {    // method io
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("unixFilePath");
    // io is a simple accessor - elide try ... catch
    return var_io;
  };
  func1.paramCounts = [0];
  this.methods["io"] = func1;
  func1.definitionLine = 1;
  func1.definitionModule = "unixFilePath";
  func1.debug = "import";
  func1.confidential = true;
  setModuleName("unixFilePath");
  setLineNumber(3);    // compilenode method
  var func2 = function(argcv) {    // method null
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("unixFilePath");
    var obj3 = Grace_allocObject(GraceObject, "null");
    obj3.definitionModule = "unixFilePath";
    obj3.definitionLine = 3;
    obj3.outer = this;
    var reader_unixFilePath_outer4 = function() {
      return this.outer;
    };
    obj3.methods["outer"] = reader_unixFilePath_outer4;
    var obj_init_3 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj3;
      var func5 = function(argcv) {    // method asString
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("unixFilePath");
        setLineNumber(15);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call7 = callmethodChecked(this, "extension", []);
        // call case 4: self request
        onSelf = true;
        var call10 = callmethodChecked(this, "base", []);
        // call case 4: self request
        onSelf = true;
        var call13 = callmethodChecked(this, "dir", []);
        var opresult15 = callmethodChecked(call13, "++(1)", [1], call10);
        var opresult17 = callmethodChecked(opresult15, "++(1)", [1], call7);
        return opresult17;
      };
      func5.paramCounts = [0];
      obj3.methods["asString"] = func5;
      func5.definitionLine = 15;
      func5.definitionModule = "unixFilePath";
      var func18 = function(argcv) {    // method shortName
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("unixFilePath");
        setLineNumber(18);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call20 = callmethodChecked(this, "extension", []);
        // call case 4: self request
        onSelf = true;
        var call23 = callmethodChecked(this, "base", []);
        var opresult25 = callmethodChecked(call23, "++(1)", [1], call20);
        return opresult25;
      };
      func18.paramCounts = [0];
      obj3.methods["shortName"] = func18;
      func18.definitionLine = 18;
      func18.definitionModule = "unixFilePath";
      var func26 = function(argcv) {    // method asDebugString
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("unixFilePath");
        setLineNumber(21);    // compilenode string
        var string27 = new GraceString("]");
        // call case 4: self request
        onSelf = true;
        var call30 = callmethodChecked(this, "extension", []);
        var string32 = new GraceString("|");
        // call case 4: self request
        onSelf = true;
        var call35 = callmethodChecked(this, "base", []);
        var string37 = new GraceString("|");
        // call case 4: self request
        onSelf = true;
        var call40 = callmethodChecked(this, "dir", []);
        var string42 = new GraceString("unixFilePath[");
        var opresult44 = callmethodChecked(string42, "++(1)", [1], call40);
        var opresult46 = callmethodChecked(opresult44, "++(1)", [1], string37);
        var opresult48 = callmethodChecked(opresult46, "++(1)", [1], call35);
        var opresult50 = callmethodChecked(opresult48, "++(1)", [1], string32);
        var opresult52 = callmethodChecked(opresult50, "++(1)", [1], call30);
        var opresult54 = callmethodChecked(opresult52, "++(1)", [1], string27);
        return opresult54;
      };
      func26.paramCounts = [0];
      obj3.methods["asDebugString"] = func26;
      func26.definitionLine = 21;
      func26.definitionModule = "unixFilePath";
      var func55 = function(argcv) {    // method directory
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("unixFilePath");
        var if56 = GraceDone;
        setLineNumber(26);    // compilenode string
        var string57 = new GraceString("");
        // call case 4: self request
        onSelf = true;
        var call60 = callmethodChecked(this, "dir", []);
        var opresult62 = callmethodChecked(call60, "==(1)", [1], string57);
        if (Grace_isTrue(opresult62)) {
          var string63 = new GraceString("./");
          if56 = string63;
        } else {
          // call case 4: self request
          onSelf = true;
          var call65 = callmethodChecked(this, "dir", []);
          if56 = call65;
        }
        return if56;
      };
      func55.paramCounts = [0];
      obj3.methods["directory"] = func55;
      func55.definitionLine = 24;
      func55.definitionModule = "unixFilePath";
      var func66 = function(argcv) {    // method directory:=(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_d = arguments[curarg];
        curarg++;
        setModuleName("unixFilePath");
        setLineNumber(31);    // compilenode identifier
        var var_newDir = var_d;
        var if67 = GraceDone;
        setLineNumber(32);    // compilenode string
        var string68 = new GraceString("");
        var opresult71 = callmethodChecked(var_newDir, "==(1)", [1], string68);
        if (Grace_isTrue(opresult71)) {
          setLineNumber(33);    // compilenode string
          var string73 = new GraceString("");
          // call case 4: self request
          onSelf = true;
          var call74 = callmethodChecked(this, "dir:=(1)", [1], string73);
          setLineNumber(35);    // compilenode identifier
          return var_done;
        }
        var if75 = GraceDone;
        setLineNumber(36);    // compilenode string
        var string76 = new GraceString("/");
        // call case 6: other requests
        var call80 = callmethodChecked(var_newDir, "size", []);
        // call case 6: other requests
        var call81 = callmethodChecked(var_newDir, "at(1)", [1], call80);
        var opresult83 = callmethodChecked(call81, "\u2260(1)", [1], string76);
        if (Grace_isTrue(opresult83)) {
          setLineNumber(37);    // compilenode string
          var string84 = new GraceString("/");
          var opresult87 = callmethodChecked(var_newDir, "++(1)", [1], string84);
          var_newDir = opresult87;
          if75 = GraceDone;
        }
        var if88 = GraceDone;
        setLineNumber(39);    // compilenode string
        var string89 = new GraceString("./");
        var opresult92 = callmethodChecked(var_newDir, "==(1)", [1], string89);
        if (Grace_isTrue(opresult92)) {
          var string93 = new GraceString("");
          var_newDir = string93;
          if88 = GraceDone;
        }
        setLineNumber(40);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call95 = callmethodChecked(this, "dir:=(1)", [1], var_newDir);
        return call95;
      };
      func66.paramCounts = [1];
      obj3.methods["directory:=(1)"] = func66;
      func66.definitionLine = 29;
      func66.definitionModule = "unixFilePath";
      var func96 = function(argcv) {    // method setDirectory(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_d = arguments[curarg];
        curarg++;
        setModuleName("unixFilePath");
        setLineNumber(44);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call98 = callmethodChecked(this, "directory:=(1)", [1], var_d);
        setLineNumber(45);    // compilenode identifier
        return this;
      };
      func96.paramCounts = [1];
      obj3.methods["setDirectory(1)"] = func96;
      func96.definitionLine = 42;
      func96.definitionModule = "unixFilePath";
      var func99 = function(argcv) {    // method setBase(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_b = arguments[curarg];
        curarg++;
        setModuleName("unixFilePath");
        setLineNumber(49);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call101 = callmethodChecked(this, "base:=(1)", [1], var_b);
        setLineNumber(50);    // compilenode identifier
        return this;
      };
      func99.paramCounts = [1];
      obj3.methods["setBase(1)"] = func99;
      func99.definitionLine = 47;
      func99.definitionModule = "unixFilePath";
      var func102 = function(argcv) {    // method setExtension(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_e = arguments[curarg];
        curarg++;
        setModuleName("unixFilePath");
        var if103 = GraceDone;
        setLineNumber(54);    // compilenode string
        var string104 = new GraceString(".");
        // call case 6: other requests
        var call107 = callmethodChecked(var_e, "first", []);
        var opresult109 = callmethodChecked(call107, "==(1)", [1], string104);
        if (Grace_isTrue(opresult109)) {
          setLineNumber(55);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call111 = callmethodChecked(this, "extension:=(1)", [1], var_e);
          if103 = call111;
        } else {
          setLineNumber(57);    // compilenode string
          var string114 = new GraceString(".");
          var opresult116 = callmethodChecked(string114, "++(1)", [1], var_e);
          // call case 4: self request
          onSelf = true;
          var call117 = callmethodChecked(this, "extension:=(1)", [1], opresult116);
          if103 = call117;
        }
        setLineNumber(59);    // compilenode identifier
        return this;
      };
      func102.paramCounts = [1];
      obj3.methods["setExtension(1)"] = func102;
      func102.definitionLine = 52;
      func102.definitionModule = "unixFilePath";
      var func118 = function(argcv) {    // method exists
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("unixFilePath");
        setLineNumber(63);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call121 = callmethodChecked(this, "asString", []);
        // call case 6: other requests
        var call122 = callmethodChecked(var_io, "exists(1)", [1], call121);
        if (!Grace_isTrue(callmethod(var_Boolean, "match(1)", [1], call122)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method exists does not have " + 
                    callmethod(var_Boolean, "asString", [0])._value + "."));
        return call122;
      };
      func118.paramCounts = [0];
      obj3.methods["exists"] = func118;
      func118.definitionLine = 61;
      func118.definitionModule = "unixFilePath";
      var func123 = function(argcv) {    // method newer(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_other = arguments[curarg];
        curarg++;
        setModuleName("unixFilePath");
        setLineNumber(67);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call126 = callmethodChecked(this, "asString", []);
        // call case 6: other requests
        var call128 = callmethodChecked(var_other, "asString", []);
        // call case 6: other requests
        var call129 = callmethodChecked(var_io, "newer(2)", [2], call126, call128);
        if (!Grace_isTrue(callmethod(var_Boolean, "match(1)", [1], call129)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method newer(_) does not have " + 
                    callmethod(var_Boolean, "asString", [0])._value + "."));
        return call129;
      };
      func123.paramCounts = [1];
      obj3.methods["newer(1)"] = func123;
      func123.definitionLine = 65;
      func123.definitionModule = "unixFilePath";
      var func130 = function(argcv) {    // method copy
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("unixFilePath");
        setLineNumber(72);    // compilenode member
        // call case 6: other requests
        // call case 3: self.outer request
        var call133 = callmethodChecked(superDepth, "outer", [0]);
        onSelf = true;
        var call134 = callmethodChecked(call133, "null", []);
        var var_p = call134;
        setLineNumber(73);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call137 = callmethodChecked(this, "directory", []);
        // call case 6: other requests
        var call138 = callmethodChecked(var_p, "directory:=(1)", [1], call137);
        setLineNumber(74);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call141 = callmethodChecked(this, "base", []);
        // call case 6: other requests
        var call142 = callmethodChecked(var_p, "base:=(1)", [1], call141);
        setLineNumber(75);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call145 = callmethodChecked(this, "extension", []);
        // call case 6: other requests
        var call146 = callmethodChecked(var_p, "extension:=(1)", [1], call145);
        setLineNumber(76);    // compilenode identifier
        return var_p;
      };
      func130.paramCounts = [0];
      obj3.methods["copy"] = func130;
      func130.definitionLine = 70;
      func130.definitionModule = "unixFilePath";
      var func147 = function(argcv) {    // method ==(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_other = arguments[curarg];
        curarg++;
        setModuleName("unixFilePath");
        var if148 = GraceDone;
        setLineNumber(81);    // compilenode member
        // call case 6: other requests
        var call150 = callmethodChecked(var_other, "directory", []);
        // call case 4: self request
        onSelf = true;
        var call153 = callmethodChecked(this, "directory", []);
        var opresult155 = callmethodChecked(call153, "\u2260(1)", [1], call150);
        if (Grace_isTrue(opresult155)) {
          return GraceFalse;
        }
        var if156 = GraceDone;
        setLineNumber(82);    // compilenode member
        // call case 6: other requests
        var call158 = callmethodChecked(var_other, "base", []);
        // call case 4: self request
        onSelf = true;
        var call161 = callmethodChecked(this, "base", []);
        var opresult163 = callmethodChecked(call161, "\u2260(1)", [1], call158);
        if (Grace_isTrue(opresult163)) {
          return GraceFalse;
        }
        var if164 = GraceDone;
        setLineNumber(83);    // compilenode member
        // call case 6: other requests
        var call166 = callmethodChecked(var_other, "extension", []);
        // call case 4: self request
        onSelf = true;
        var call169 = callmethodChecked(this, "extension", []);
        var opresult171 = callmethodChecked(call169, "\u2260(1)", [1], call166);
        if (Grace_isTrue(opresult171)) {
          return GraceFalse;
        }
        setLineNumber(84);    // compilenode identifier
        return GraceTrue;
      };
      func147.paramCounts = [1];
      obj3.methods["==(1)"] = func147;
      func147.definitionLine = 79;
      func147.definitionModule = "unixFilePath";
      setLineNumber(6);    // compilenode string
      var string172 = new GraceString("");
      obj3.data["dir"] = string172;
      var reader_unixFilePath_dir173 = function() {
        return this.data["dir"];
      };
      obj3.methods["dir"] = reader_unixFilePath_dir173;
      obj3.data["dir"] = string172;
      var writer_unixFilePath_dir173 = function(argcv, o) {
        this.data["dir"] = o;
        return GraceDone;
      };
      obj3.methods["dir:=(1)"] = writer_unixFilePath_dir173;
      reader_unixFilePath_dir173.confidential = true;
      writer_unixFilePath_dir173.confidential = true;
      obj3.mutable = true;
      setLineNumber(9);    // compilenode string
      var string174 = new GraceString("");
      obj3.data["base"] = string174;
      var reader_unixFilePath_base175 = function() {
        return this.data["base"];
      };
      obj3.methods["base"] = reader_unixFilePath_base175;
      obj3.data["base"] = string174;
      var writer_unixFilePath_base175 = function(argcv, o) {
        this.data["base"] = o;
        return GraceDone;
      };
      obj3.methods["base:=(1)"] = writer_unixFilePath_base175;
      obj3.mutable = true;
      setLineNumber(12);    // compilenode string
      var string176 = new GraceString("");
      obj3.data["extension"] = string176;
      var reader_unixFilePath_extension177 = function() {
        return this.data["extension"];
      };
      obj3.methods["extension"] = reader_unixFilePath_extension177;
      obj3.data["extension"] = string176;
      var writer_unixFilePath_extension177 = function(argcv, o) {
        this.data["extension"] = o;
        return GraceDone;
      };
      obj3.methods["extension:=(1)"] = writer_unixFilePath_extension177;
      obj3.mutable = true;
      superDepth = origSuperDepth;
    };
    obj_init_3.apply(obj3, []);
    return obj3;
  };
  func2.paramCounts = [0];
  this.methods["null"] = func2;
  func2.definitionLine = 3;
  func2.definitionModule = "unixFilePath";
    var func178 = function(argcv) {    // method null$object(_)
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      // Start argument processing
      curarg = 1;
      // End argument processing
      setModuleName("unixFilePath");
      var returnTarget = invocationCount;
      invocationCount++;
      var obj179 = Grace_allocObject(GraceObject, "null");
      obj179.definitionModule = "unixFilePath";
      obj179.definitionLine = 3;
      var inho179 = inheritingObject;
      while (inho179.superobj) inho179 = inho179.superobj;
      inho179.superobj = obj179;
      obj179.data = inheritingObject.data;
      if (inheritingObject.hasOwnProperty('_value'))
        obj179._value = inheritingObject._value;
      obj179.outer = this;
      var reader_unixFilePath_outer180 = function() {
        return this.outer;
      };
      obj179.methods["outer"] = reader_unixFilePath_outer180;
      var obj_init_179 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj179;
        var func181 = function(argcv) {    // method asString
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("unixFilePath");
          setLineNumber(15);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call183 = callmethodChecked(this, "extension", []);
          // call case 4: self request
          onSelf = true;
          var call186 = callmethodChecked(this, "base", []);
          // call case 4: self request
          onSelf = true;
          var call189 = callmethodChecked(this, "dir", []);
          var opresult191 = callmethodChecked(call189, "++(1)", [1], call186);
          var opresult193 = callmethodChecked(opresult191, "++(1)", [1], call183);
          return opresult193;
        };
        func181.paramCounts = [0];
        obj179.methods["asString"] = func181;
        func181.definitionLine = 15;
        func181.definitionModule = "unixFilePath";
        var func194 = function(argcv) {    // method shortName
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("unixFilePath");
          setLineNumber(18);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call196 = callmethodChecked(this, "extension", []);
          // call case 4: self request
          onSelf = true;
          var call199 = callmethodChecked(this, "base", []);
          var opresult201 = callmethodChecked(call199, "++(1)", [1], call196);
          return opresult201;
        };
        func194.paramCounts = [0];
        obj179.methods["shortName"] = func194;
        func194.definitionLine = 18;
        func194.definitionModule = "unixFilePath";
        var func202 = function(argcv) {    // method asDebugString
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("unixFilePath");
          setLineNumber(21);    // compilenode string
          var string203 = new GraceString("]");
          // call case 4: self request
          onSelf = true;
          var call206 = callmethodChecked(this, "extension", []);
          var string208 = new GraceString("|");
          // call case 4: self request
          onSelf = true;
          var call211 = callmethodChecked(this, "base", []);
          var string213 = new GraceString("|");
          // call case 4: self request
          onSelf = true;
          var call216 = callmethodChecked(this, "dir", []);
          var string218 = new GraceString("unixFilePath[");
          var opresult220 = callmethodChecked(string218, "++(1)", [1], call216);
          var opresult222 = callmethodChecked(opresult220, "++(1)", [1], string213);
          var opresult224 = callmethodChecked(opresult222, "++(1)", [1], call211);
          var opresult226 = callmethodChecked(opresult224, "++(1)", [1], string208);
          var opresult228 = callmethodChecked(opresult226, "++(1)", [1], call206);
          var opresult230 = callmethodChecked(opresult228, "++(1)", [1], string203);
          return opresult230;
        };
        func202.paramCounts = [0];
        obj179.methods["asDebugString"] = func202;
        func202.definitionLine = 21;
        func202.definitionModule = "unixFilePath";
        var func231 = function(argcv) {    // method directory
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("unixFilePath");
          var if232 = GraceDone;
          setLineNumber(26);    // compilenode string
          var string233 = new GraceString("");
          // call case 4: self request
          onSelf = true;
          var call236 = callmethodChecked(this, "dir", []);
          var opresult238 = callmethodChecked(call236, "==(1)", [1], string233);
          if (Grace_isTrue(opresult238)) {
            var string239 = new GraceString("./");
            if232 = string239;
          } else {
            // call case 4: self request
            onSelf = true;
            var call241 = callmethodChecked(this, "dir", []);
            if232 = call241;
          }
          return if232;
        };
        func231.paramCounts = [0];
        obj179.methods["directory"] = func231;
        func231.definitionLine = 24;
        func231.definitionModule = "unixFilePath";
        var func242 = function(argcv) {    // method directory:=(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_d = arguments[curarg];
          curarg++;
          setModuleName("unixFilePath");
          setLineNumber(31);    // compilenode identifier
          var var_newDir = var_d;
          var if243 = GraceDone;
          setLineNumber(32);    // compilenode string
          var string244 = new GraceString("");
          var opresult247 = callmethodChecked(var_newDir, "==(1)", [1], string244);
          if (Grace_isTrue(opresult247)) {
            setLineNumber(33);    // compilenode string
            var string249 = new GraceString("");
            // call case 4: self request
            onSelf = true;
            var call250 = callmethodChecked(this, "dir:=(1)", [1], string249);
            setLineNumber(35);    // compilenode identifier
            return var_done;
          }
          var if251 = GraceDone;
          setLineNumber(36);    // compilenode string
          var string252 = new GraceString("/");
          // call case 6: other requests
          var call256 = callmethodChecked(var_newDir, "size", []);
          // call case 6: other requests
          var call257 = callmethodChecked(var_newDir, "at(1)", [1], call256);
          var opresult259 = callmethodChecked(call257, "\u2260(1)", [1], string252);
          if (Grace_isTrue(opresult259)) {
            setLineNumber(37);    // compilenode string
            var string260 = new GraceString("/");
            var opresult263 = callmethodChecked(var_newDir, "++(1)", [1], string260);
            var_newDir = opresult263;
            if251 = GraceDone;
          }
          var if264 = GraceDone;
          setLineNumber(39);    // compilenode string
          var string265 = new GraceString("./");
          var opresult268 = callmethodChecked(var_newDir, "==(1)", [1], string265);
          if (Grace_isTrue(opresult268)) {
            var string269 = new GraceString("");
            var_newDir = string269;
            if264 = GraceDone;
          }
          setLineNumber(40);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call271 = callmethodChecked(this, "dir:=(1)", [1], var_newDir);
          return call271;
        };
        func242.paramCounts = [1];
        obj179.methods["directory:=(1)"] = func242;
        func242.definitionLine = 29;
        func242.definitionModule = "unixFilePath";
        var func272 = function(argcv) {    // method setDirectory(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_d = arguments[curarg];
          curarg++;
          setModuleName("unixFilePath");
          setLineNumber(44);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call274 = callmethodChecked(this, "directory:=(1)", [1], var_d);
          setLineNumber(45);    // compilenode identifier
          return this;
        };
        func272.paramCounts = [1];
        obj179.methods["setDirectory(1)"] = func272;
        func272.definitionLine = 42;
        func272.definitionModule = "unixFilePath";
        var func275 = function(argcv) {    // method setBase(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_b = arguments[curarg];
          curarg++;
          setModuleName("unixFilePath");
          setLineNumber(49);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call277 = callmethodChecked(this, "base:=(1)", [1], var_b);
          setLineNumber(50);    // compilenode identifier
          return this;
        };
        func275.paramCounts = [1];
        obj179.methods["setBase(1)"] = func275;
        func275.definitionLine = 47;
        func275.definitionModule = "unixFilePath";
        var func278 = function(argcv) {    // method setExtension(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_e = arguments[curarg];
          curarg++;
          setModuleName("unixFilePath");
          var if279 = GraceDone;
          setLineNumber(54);    // compilenode string
          var string280 = new GraceString(".");
          // call case 6: other requests
          var call283 = callmethodChecked(var_e, "first", []);
          var opresult285 = callmethodChecked(call283, "==(1)", [1], string280);
          if (Grace_isTrue(opresult285)) {
            setLineNumber(55);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call287 = callmethodChecked(this, "extension:=(1)", [1], var_e);
            if279 = call287;
          } else {
            setLineNumber(57);    // compilenode string
            var string290 = new GraceString(".");
            var opresult292 = callmethodChecked(string290, "++(1)", [1], var_e);
            // call case 4: self request
            onSelf = true;
            var call293 = callmethodChecked(this, "extension:=(1)", [1], opresult292);
            if279 = call293;
          }
          setLineNumber(59);    // compilenode identifier
          return this;
        };
        func278.paramCounts = [1];
        obj179.methods["setExtension(1)"] = func278;
        func278.definitionLine = 52;
        func278.definitionModule = "unixFilePath";
        var func294 = function(argcv) {    // method exists
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("unixFilePath");
          setLineNumber(63);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call297 = callmethodChecked(this, "asString", []);
          // call case 6: other requests
          var call298 = callmethodChecked(var_io, "exists(1)", [1], call297);
          if (!Grace_isTrue(callmethod(var_Boolean, "match(1)", [1], call298)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method exists does not have " + 
                      callmethod(var_Boolean, "asString", [0])._value + "."));
          return call298;
        };
        func294.paramCounts = [0];
        obj179.methods["exists"] = func294;
        func294.definitionLine = 61;
        func294.definitionModule = "unixFilePath";
        var func299 = function(argcv) {    // method newer(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_other = arguments[curarg];
          curarg++;
          setModuleName("unixFilePath");
          setLineNumber(67);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call302 = callmethodChecked(this, "asString", []);
          // call case 6: other requests
          var call304 = callmethodChecked(var_other, "asString", []);
          // call case 6: other requests
          var call305 = callmethodChecked(var_io, "newer(2)", [2], call302, call304);
          if (!Grace_isTrue(callmethod(var_Boolean, "match(1)", [1], call305)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method newer(_) does not have " + 
                      callmethod(var_Boolean, "asString", [0])._value + "."));
          return call305;
        };
        func299.paramCounts = [1];
        obj179.methods["newer(1)"] = func299;
        func299.definitionLine = 65;
        func299.definitionModule = "unixFilePath";
        var func306 = function(argcv) {    // method copy
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("unixFilePath");
          setLineNumber(72);    // compilenode member
          // call case 6: other requests
          // call case 3: self.outer request
          var call309 = callmethodChecked(superDepth, "outer", [0]);
          onSelf = true;
          var call310 = callmethodChecked(call309, "null", []);
          var var_p = call310;
          setLineNumber(73);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call313 = callmethodChecked(this, "directory", []);
          // call case 6: other requests
          var call314 = callmethodChecked(var_p, "directory:=(1)", [1], call313);
          setLineNumber(74);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call317 = callmethodChecked(this, "base", []);
          // call case 6: other requests
          var call318 = callmethodChecked(var_p, "base:=(1)", [1], call317);
          setLineNumber(75);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call321 = callmethodChecked(this, "extension", []);
          // call case 6: other requests
          var call322 = callmethodChecked(var_p, "extension:=(1)", [1], call321);
          setLineNumber(76);    // compilenode identifier
          return var_p;
        };
        func306.paramCounts = [0];
        obj179.methods["copy"] = func306;
        func306.definitionLine = 70;
        func306.definitionModule = "unixFilePath";
        var func323 = function(argcv) {    // method ==(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_other = arguments[curarg];
          curarg++;
          setModuleName("unixFilePath");
          var if324 = GraceDone;
          setLineNumber(81);    // compilenode member
          // call case 6: other requests
          var call326 = callmethodChecked(var_other, "directory", []);
          // call case 4: self request
          onSelf = true;
          var call329 = callmethodChecked(this, "directory", []);
          var opresult331 = callmethodChecked(call329, "\u2260(1)", [1], call326);
          if (Grace_isTrue(opresult331)) {
            return GraceFalse;
          }
          var if332 = GraceDone;
          setLineNumber(82);    // compilenode member
          // call case 6: other requests
          var call334 = callmethodChecked(var_other, "base", []);
          // call case 4: self request
          onSelf = true;
          var call337 = callmethodChecked(this, "base", []);
          var opresult339 = callmethodChecked(call337, "\u2260(1)", [1], call334);
          if (Grace_isTrue(opresult339)) {
            return GraceFalse;
          }
          var if340 = GraceDone;
          setLineNumber(83);    // compilenode member
          // call case 6: other requests
          var call342 = callmethodChecked(var_other, "extension", []);
          // call case 4: self request
          onSelf = true;
          var call345 = callmethodChecked(this, "extension", []);
          var opresult347 = callmethodChecked(call345, "\u2260(1)", [1], call342);
          if (Grace_isTrue(opresult347)) {
            return GraceFalse;
          }
          setLineNumber(84);    // compilenode identifier
          return GraceTrue;
        };
        func323.paramCounts = [1];
        obj179.methods["==(1)"] = func323;
        func323.definitionLine = 79;
        func323.definitionModule = "unixFilePath";
        setLineNumber(6);    // compilenode string
        var string348 = new GraceString("");
        obj179.data["dir"] = string348;
        var reader_unixFilePath_dir349 = function() {
          return this.data["dir"];
        };
        obj179.methods["dir"] = reader_unixFilePath_dir349;
        obj179.data["dir"] = string348;
        var writer_unixFilePath_dir349 = function(argcv, o) {
          this.data["dir"] = o;
          return GraceDone;
        };
        obj179.methods["dir:=(1)"] = writer_unixFilePath_dir349;
        reader_unixFilePath_dir349.confidential = true;
        writer_unixFilePath_dir349.confidential = true;
        obj179.mutable = true;
        setLineNumber(9);    // compilenode string
        var string350 = new GraceString("");
        obj179.data["base"] = string350;
        var reader_unixFilePath_base351 = function() {
          return this.data["base"];
        };
        obj179.methods["base"] = reader_unixFilePath_base351;
        obj179.data["base"] = string350;
        var writer_unixFilePath_base351 = function(argcv, o) {
          this.data["base"] = o;
          return GraceDone;
        };
        obj179.methods["base:=(1)"] = writer_unixFilePath_base351;
        obj179.mutable = true;
        setLineNumber(12);    // compilenode string
        var string352 = new GraceString("");
        obj179.data["extension"] = string352;
        var reader_unixFilePath_extension353 = function() {
          return this.data["extension"];
        };
        obj179.methods["extension"] = reader_unixFilePath_extension353;
        obj179.data["extension"] = string352;
        var writer_unixFilePath_extension353 = function(argcv, o) {
          this.data["extension"] = o;
          return GraceDone;
        };
        obj179.methods["extension:=(1)"] = writer_unixFilePath_extension353;
        obj179.mutable = true;
        superDepth = origSuperDepth;
      };
      obj_init_179.apply(inheritingObject, []);
      return obj179;
      };
      this.methods["null$object(1)"] = func178;
    setLineNumber(88);    // compilenode method
    var func354 = function(argcv) {    // method withDirectory(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_d = arguments[curarg];
      curarg++;
      setModuleName("unixFilePath");
      setLineNumber(89);    // compilenode identifier
      // call case 6: other requests
      // call case 4: self request
      onSelf = true;
      var call357 = callmethodChecked(this, "null", []);
      var call358 = callmethodChecked(call357, "setDirectory(1)", [1], var_d);
      return call358;
    };
    func354.paramCounts = [1];
    this.methods["withDirectory(1)"] = func354;
    func354.definitionLine = 88;
    func354.definitionModule = "unixFilePath";
    setLineNumber(92);    // compilenode method
    var func359 = function(argcv) {    // method withBase(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_b = arguments[curarg];
      curarg++;
      setModuleName("unixFilePath");
      setLineNumber(93);    // compilenode identifier
      // call case 6: other requests
      // call case 4: self request
      onSelf = true;
      var call362 = callmethodChecked(this, "null", []);
      var call363 = callmethodChecked(call362, "setBase(1)", [1], var_b);
      return call363;
    };
    func359.paramCounts = [1];
    this.methods["withBase(1)"] = func359;
    func359.definitionLine = 92;
    func359.definitionModule = "unixFilePath";
    setLineNumber(96);    // compilenode method
    var func364 = function(argcv) {    // method withExtension(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_e = arguments[curarg];
      curarg++;
      setModuleName("unixFilePath");
      setLineNumber(97);    // compilenode identifier
      // call case 6: other requests
      // call case 4: self request
      onSelf = true;
      var call367 = callmethodChecked(this, "null", []);
      var call368 = callmethodChecked(call367, "setExtension(1)", [1], var_e);
      return call368;
    };
    func364.paramCounts = [1];
    this.methods["withExtension(1)"] = func364;
    func364.definitionLine = 96;
    func364.definitionModule = "unixFilePath";
    setLineNumber(100);    // compilenode method
    var func369 = function(argcv) {    // method withDirectory(_)base(_)extension(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_d = arguments[curarg];
      curarg++;
      var var_b = arguments[curarg];
      curarg++;
      var var_e = arguments[curarg];
      curarg++;
      setModuleName("unixFilePath");
      setLineNumber(102);    // compilenode identifier
      // call case 6: other requests
      // call case 6: other requests
      // call case 6: other requests
      // call case 4: self request
      onSelf = true;
      var call374 = callmethodChecked(this, "null", []);
      var call375 = callmethodChecked(call374, "setDirectory(1)", [1], var_d);
      var call376 = callmethodChecked(call375, "setBase(1)", [1], var_b);
      var call377 = callmethodChecked(call376, "setExtension(1)", [1], var_e);
      return call377;
    };
    func369.paramCounts = [1, 1, 1];
    this.methods["withDirectory(1)base(1)extension(1)"] = func369;
    func369.definitionLine = 100;
    func369.definitionModule = "unixFilePath";
    setLineNumber(105);    // compilenode method
    var func378 = function(argcv) {    // method fromString(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_s = arguments[curarg];
      curarg++;
      setModuleName("unixFilePath");
      setLineNumber(107);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call380 = callmethodChecked(this, "null", []);
      var var_p = call380;
      setLineNumber(108);    // compilenode num
      var var_slashPosn = new GraceNum(0);
      setLineNumber(109);    // compilenode member
      // call case 6: other requests
      var call382 = callmethodChecked(var_s, "size", []);
      var var_sSize = call382;
      setLineNumber(110);    // compilenode identifier
      var var_ix = var_sSize;
      setLineNumber(111);    // compilenode block
      var block384 = new GraceBlock(this, 111, 0);
      block384.real = function() {
        var opresult387 = callmethodChecked(var_ix, ">(1)", [1], new GraceNum(0));
        var opresult391 = callmethodChecked(var_slashPosn, "==(1)", [1], new GraceNum(0));
        var opresult393 = callmethodChecked(opresult391, "&&(1)", [1], opresult387);
        return opresult393;
      };
      var block394 = new GraceBlock(this, 111, 0);
      block394.real = function() {
        var if395 = GraceDone;
        setLineNumber(112);    // compilenode string
        var string396 = new GraceString("/");
        // call case 6: other requests
        var call399 = callmethodChecked(var_s, "at(1)", [1], var_ix);
        var opresult401 = callmethodChecked(call399, "==(1)", [1], string396);
        if (Grace_isTrue(opresult401)) {
          setLineNumber(113);    // compilenode identifier
          var_slashPosn = var_ix;
          if395 = GraceDone;
        } else {
          setLineNumber(115);    // compilenode identifier
          var diff404 = callmethodChecked(var_ix, "-(1)", [1], new GraceNum(1));
          var_ix = diff404;
          if395 = GraceDone;
        }
        return if395;
      };
      // call case 5: prelude request
      var call405 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block384, block394);
      setLineNumber(118);    // compilenode identifier
      // call case 6: other requests
      var call408 = callmethodChecked(var_s, "substringFrom(1)to(1)", [1, 1], new GraceNum(1), var_slashPosn);
      // call case 6: other requests
      var call409 = callmethodChecked(var_p, "directory:=(1)", [1], call408);
      setLineNumber(119);    // compilenode identifier
      var opresult412 = callmethodChecked(var_sSize, "+(1)", [1], new GraceNum(1));
      var var_dotPosn = opresult412;
      setLineNumber(120);    // compilenode identifier
      var_ix = var_sSize;
      setLineNumber(121);    // compilenode block
      var block414 = new GraceBlock(this, 121, 0);
      block414.real = function() {
        var opresult417 = callmethodChecked(var_ix, ">(1)", [1], var_slashPosn);
        var opresult421 = callmethodChecked(var_dotPosn, ">(1)", [1], var_sSize);
        var opresult423 = callmethodChecked(opresult421, "&&(1)", [1], opresult417);
        return opresult423;
      };
      var block424 = new GraceBlock(this, 121, 0);
      block424.real = function() {
        var if425 = GraceDone;
        setLineNumber(122);    // compilenode string
        var string426 = new GraceString(".");
        // call case 6: other requests
        var call429 = callmethodChecked(var_s, "at(1)", [1], var_ix);
        var opresult431 = callmethodChecked(call429, "==(1)", [1], string426);
        if (Grace_isTrue(opresult431)) {
          setLineNumber(123);    // compilenode identifier
          var_dotPosn = var_ix;
          if425 = GraceDone;
        } else {
          setLineNumber(125);    // compilenode identifier
          var diff434 = callmethodChecked(var_ix, "-(1)", [1], new GraceNum(1));
          var_ix = diff434;
          if425 = GraceDone;
        }
        return if425;
      };
      // call case 5: prelude request
      var call435 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block414, block424);
      var if436 = GraceDone;
      setLineNumber(128);    // compilenode identifier
      var opresult439 = callmethodChecked(var_dotPosn, "\u2264(1)", [1], var_sSize);
      if (Grace_isTrue(opresult439)) {
        setLineNumber(129);    // compilenode identifier
        // call case 6: other requests
        var call442 = callmethodChecked(var_s, "substringFrom(1)to(1)", [1, 1], var_dotPosn, var_sSize);
        // call case 6: other requests
        var call443 = callmethodChecked(var_p, "extension:=(1)", [1], call442);
        if436 = call443;
      }
      setLineNumber(131);    // compilenode identifier
      var opresult448 = callmethodChecked(var_slashPosn, "+(1)", [1], new GraceNum(1));
      var diff451 = callmethodChecked(var_dotPosn, "-(1)", [1], new GraceNum(1));
      // call case 6: other requests
      var call452 = callmethodChecked(var_s, "substringFrom(1)to(1)", [1, 1], opresult448, diff451);
      // call case 6: other requests
      var call453 = callmethodChecked(var_p, "base:=(1)", [1], call452);
      setLineNumber(132);    // compilenode identifier
      return var_p;
    };
    func378.paramCounts = [1];
    this.methods["fromString(1)"] = func378;
    func378.definitionLine = 105;
    func378.definitionModule = "unixFilePath";
    setLineNumber(135);    // compilenode method
    var func454 = function(argcv) {    // method split(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_pathString = arguments[curarg];
      curarg++;
      setModuleName("unixFilePath");
      setLineNumber(138);    // compilenode member
      // call case 5: prelude request
      var call456 = callmethodChecked(var_prelude, "emptyList", []);
      var var_locations = call456;
      setLineNumber(139);    // compilenode num
      var var_ix = new GraceNum(1);
      setLineNumber(140);    // compilenode num
      var var_ox = new GraceNum(1);
      setLineNumber(141);    // compilenode member
      // call case 6: other requests
      var call458 = callmethodChecked(var_pathString, "size", []);
      var var_pss = call458;
      setLineNumber(142);    // compilenode block
      var block460 = new GraceBlock(this, 142, 0);
      block460.real = function() {
        var opresult463 = callmethodChecked(var_ox, "\u2264(1)", [1], var_pss);
        return opresult463;
      };
      var block464 = new GraceBlock(this, 142, 0);
      block464.real = function() {
        setLineNumber(143);    // compilenode block
        var block466 = new GraceBlock(this, 143, 0);
        block466.real = function() {
          var block467 = new GraceBlock(this, 143, 0);
          block467.real = function() {
            var string468 = new GraceString(":");
            // call case 6: other requests
            var call471 = callmethodChecked(var_pathString, "at(1)", [1], var_ox);
            var opresult473 = callmethodChecked(call471, "\u2260(1)", [1], string468);
            return opresult473;
          };
          var opresult477 = callmethodChecked(var_ox, "\u2264(1)", [1], var_pss);
          var opresult479 = callmethodChecked(opresult477, "&&(1)", [1], block467);
          return opresult479;
        };
        var block480 = new GraceBlock(this, 143, 0);
        block480.real = function() {
          setLineNumber(144);    // compilenode identifier
          var opresult483 = callmethodChecked(var_ox, "+(1)", [1], new GraceNum(1));
          var_ox = opresult483;
          return GraceDone;
        };
        // call case 5: prelude request
        var call484 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block466, block480);
        setLineNumber(146);    // compilenode identifier
        var diff488 = callmethodChecked(var_ox, "-(1)", [1], new GraceNum(1));
        // call case 6: other requests
        var call489 = callmethodChecked(var_pathString, "substringFrom(1)to(1)", [1, 1], var_ix, diff488);
        var var_item = call489;
        var if490 = GraceDone;
        setLineNumber(147);    // compilenode string
        var string491 = new GraceString("/");
        // call case 6: other requests
        var call495 = callmethodChecked(var_item, "size", []);
        // call case 6: other requests
        var call496 = callmethodChecked(var_item, "at(1)", [1], call495);
        var opresult498 = callmethodChecked(call496, "\u2260(1)", [1], string491);
        if (Grace_isTrue(opresult498)) {
          var string499 = new GraceString("/");
          var opresult502 = callmethodChecked(var_item, "++(1)", [1], string499);
          var_item = opresult502;
          if490 = GraceDone;
        }
        setLineNumber(148);    // compilenode identifier
        // call case 6: other requests
        var call504 = callmethodChecked(var_locations, "addLast(1)", [1], var_item);
        setLineNumber(149);    // compilenode identifier
        var opresult507 = callmethodChecked(var_ox, "+(1)", [1], new GraceNum(1));
        var_ix = opresult507;
        setLineNumber(150);    // compilenode identifier
        var_ox = var_ix;
        return GraceDone;
      };
      // call case 5: prelude request
      var call508 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block460, block464);
      setLineNumber(152);    // compilenode identifier
      return var_locations;
    };
    func454.paramCounts = [1];
    this.methods["split(1)"] = func454;
    func454.definitionLine = 135;
    func454.definitionModule = "unixFilePath";
    setLineNumber(155);    // compilenode method
    var func509 = function(argcv) {    // method file(_)onPath(_)otherwise(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_name = arguments[curarg];
      curarg++;
      var var_pathString = arguments[curarg];
      curarg++;
      var var_action = arguments[curarg];
      curarg++;
      setModuleName("unixFilePath");
      setLineNumber(156);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call511 = callmethodChecked(this, "split(1)", [1], var_pathString);
      var var_locations = call511;
      setLineNumber(157);    // compilenode member
      // call case 6: other requests
      var call513 = callmethodChecked(var_name, "copy", []);
      var var_candidate = call513;
      setLineNumber(158);    // compilenode member
      // call case 6: other requests
      var call515 = callmethodChecked(var_name, "dir", []);
      var var_originalDir = call515;
      var if516 = GraceDone;
      setLineNumber(159);    // compilenode string
      var string517 = new GraceString("/");
      // call case 6: other requests
      var call520 = callmethodChecked(var_originalDir, "first", []);
      var opresult522 = callmethodChecked(call520, "==(1)", [1], string517);
      if (Grace_isTrue(opresult522)) {
        var if523 = GraceDone;
        setLineNumber(160);    // compilenode member
        // call case 6: other requests
        var call525 = callmethodChecked(var_candidate, "exists", []);
        if (Grace_isTrue(call525)) {
          setLineNumber(161);    // compilenode identifier
          return var_candidate;
        } else {
          setLineNumber(163);    // compilenode string
          var string527 = new GraceString("");
          // call case 6: other requests
          var call528 = callmethodChecked(var_action, "apply(1)", [1], string527);
          return call528;
        }
        if516 = if523;
      }
      setLineNumber(166);    // compilenode block
      var block530 = new GraceBlock(this, 166, 1);
      setLineNumber(1);    // compilenode identifier
      block530.real = function(var_each) {
        setLineNumber(167);    // compilenode identifier
        var opresult534 = callmethodChecked(var_each, "++(1)", [1], var_originalDir);
        // call case 6: other requests
        var call535 = callmethodChecked(var_candidate, "setDirectory(1)", [1], opresult534);
        var if536 = GraceDone;
        setLineNumber(168);    // compilenode member
        // call case 6: other requests
        var call538 = callmethodChecked(var_candidate, "exists", []);
        if (Grace_isTrue(call538)) {
          setLineNumber(169);    // compilenode identifier
          throw new ReturnException(var_candidate, returnTarget);
        }
        return if536;
      };
      // call case 6: other requests
      setLineNumber(166);    // compilenode identifier
      var call539 = callmethodChecked(var_locations, "do(1)", [1], block530);
      setLineNumber(172);    // compilenode identifier
      // call case 6: other requests
      var call541 = callmethodChecked(var_action, "apply(1)", [1], var_locations);
      return call541;
    };
    func509.paramCounts = [1, 1, 1];
    this.methods["file(1)onPath(1)otherwise(1)"] = func509;
    func509.definitionLine = 155;
    func509.definitionModule = "unixFilePath";
    return this;
  }
  gracecode_unixFilePath.imports = ['io'];
  if (typeof gctCache !== "undefined")
    gctCache['unixFilePath'] = "classes:\nconfidential:\nfresh-methods:\n null\nfresh:null:\n ==(1)\n asDebugString\n asString\n base\n copy\n dir\n directory\n directory:=(1)\n exists\n extension\n newer(1)\n setBase(1)\n setDirectory(1)\n setExtension(1)\n shortName\nmodules:\n io\npath:\n unixFilePath\npublic:\n file(1)onPath(1)otherwise(1)\n fromString(1)\n null\n split(1)\n withBase(1)\n withDirectory(1)\n withDirectory(1)base(1)extension(1)\n withExtension(1)\ntypes:\n";
  if (typeof originalSourceLines !== "undefined") {
    originalSourceLines["unixFilePath"] = [
      "import \"io\" as io",
      "",
      "class null {",
      "    // creates a unixFilePath with empty components",
      "",
      "    var dir := \"\"",
      "    // the directory part; \"\" if in current directory",
      "",
      "    var base is public := \"\"",
      "    // the base part of the file name (without an extension)",
      "",
      "    var extension is public := \"\"",
      "    // the extension (like `.grace`) , including the `.`",
      "",
      "    method asString { dir ++ base ++ extension }",
      "    // the whole file name as a string",
      "",
      "    method shortName { base ++ extension }",
      "    // the file name without the directory part",
      "",
      "    method asDebugString { \"unixFilePath[{dir}|{base}|{extension}]\" }",
      "    // for debugging; shows the division into parts",
      "",
      "    method directory {",
      "    // the directory part; \"./\" if in current directory",
      "        if (dir == \"\") then { \"./\" } else { dir }",
      "    }",
      "",
      "    method directory:=(d) {",
      "    // set the directory part",
      "        var newDir := d",
      "        if (newDir == \"\") then {",
      "            dir := \"\"",
      "            return",
      "        }",
      "        if (newDir.at(newDir.size) != \"/\") then {",
      "            newDir := newDir ++ \"/\"",
      "        }",
      "        if (newDir == \"./\") then { newDir := \"\" }",
      "        dir := newDir",
      "    }",
      "    method setDirectory(d) {",
      "    // set the directory part; answers self for chaining",
      "        directory := d",
      "        self",
      "    }",
      "    method setBase(b) {",
      "    // set the base part; answers self for chaining",
      "        base := b",
      "        self",
      "    }",
      "    method setExtension(e) {",
      "    // set the extension; answers self for chaining",
      "        if (e.first == \".\") then {",
      "            extension := e",
      "        } else {",
      "            extension := \".\" ++ e",
      "        }",
      "        self",
      "    }",
      "    method exists -> Boolean {",
      "    // true if his file exists",
      "        io.exists(self.asString)",
      "    }",
      "    method newer(other) -> Boolean {",
      "    // true if this file is newer than other",
      "        io.newer(self.asString, other.asString)",
      "    }",
      "",
      "    method copy {",
      "    // a copy of this filePath",
      "        def p = null",
      "        p.directory := directory",
      "        p.base := base",
      "        p.extension := extension",
      "        p",
      "    }",
      "",
      "    method == (other) {",
      "    // am I equal to other?",
      "        if (directory != other.directory) then { return false }",
      "        if (base != other.base) then { return false }",
      "        if (extension != other.extension) then { return false }",
      "        return true",
      "    }",
      "}",
      "",
      "method withDirectory(d) {",
      "    null.setDirectory(d)",
      "}",
      "",
      "method withBase(b) {",
      "    null.setBase(b)",
      "}",
      "",
      "method withExtension(e) {",
      "    null.setExtension(e)",
      "}",
      "",
      "method withDirectory(d) base(b) extension(e) {",
      "    // creates a unixFilePath with directory d, base b and extension e",
      "    null.setDirectory(d).setBase(b).setExtension(e)",
      "}",
      "",
      "method fromString(s) {",
      "    // parses the filename s into components and answers the approriate unixFilePath",
      "    def p = null",
      "    var slashPosn := 0",
      "    def sSize = s.size",
      "    var ix := sSize",
      "    while { (slashPosn == 0) && (ix > 0) } do {",
      "        if (s.at(ix) == \"/\") then {",
      "            slashPosn := ix",
      "        } else {",
      "            ix := ix - 1",
      "        }",
      "    }",
      "    p.directory := s.substringFrom 1 to (slashPosn)",
      "    var dotPosn := sSize + 1",
      "    ix := sSize",
      "    while { (dotPosn > sSize) && (ix > slashPosn) } do {",
      "        if (s.at(ix) == \".\") then {",
      "            dotPosn := ix",
      "        } else {",
      "            ix := ix - 1",
      "        }",
      "    }",
      "    if (dotPosn <= sSize) then {",
      "        p.extension := s.substringFrom (dotPosn) to (sSize)",
      "    }",
      "    p.base := s.substringFrom (slashPosn + 1) to (dotPosn - 1)",
      "    p",
      "}",
      "",
      "method split(pathString) -> List<String> {",
      "    // splits pathString, assumed to be a Unix PATH containing items separated",
      "    // by colons, into a List of items.  Ensures that each item ends with /",
      "    def locations = emptyList",
      "    var ix := 1",
      "    var ox := 1",
      "    def pss = pathString.size",
      "    while { ox <= pss } do {",
      "        while { (ox <= pss) && {pathString.at(ox) != \":\"} } do {",
      "            ox := ox + 1",
      "        }",
      "        var item := pathString.substringFrom(ix) to(ox-1)",
      "        if (item.at(item.size) != \"/\") then { item := item ++ \"/\" }",
      "        locations.addLast (item)",
      "        ix := ox + 1",
      "        ox := ix",
      "    }",
      "    return locations",
      "}",
      "",
      "method file(name) onPath(pathString) otherwise(action) {",
      "    def locations = split(pathString)",
      "    def candidate = name.copy",
      "    def originalDir = name.dir",
      "    if (originalDir.first == \"/\") then {",
      "        if (candidate.exists) then {",
      "            return candidate",
      "        } else {",
      "            return action.apply \"\"",
      "        }",
      "    }",
      "    locations.do { each ->",
      "        candidate.setDirectory(each ++ originalDir)",
      "        if ( candidate.exists ) then {",
      "            return candidate",
      "        }",
      "    }",
      "    action.apply(locations)",
      "}" ];
  }
  if (typeof global !== "undefined")
    global.gracecode_unixFilePath = gracecode_unixFilePath;
  if (typeof window !== "undefined")
    window.gracecode_unixFilePath = gracecode_unixFilePath;
