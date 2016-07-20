"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_dialect() {
  setModuleName("dialect");
  this.definitionModule = "dialect";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_dialect_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_dialect_outer0;
  setLineNumber(2);    // compilenode import
  // Import of errormessages as errormessages
  if (typeof gracecode_errormessages == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module errormessages'));
  var var_errormessages = do_import("errormessages", gracecode_errormessages);
  var func1 = function(argcv) {    // method errormessages
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("dialect");
    // errormessages is a simple accessor - elide try ... catch
    return var_errormessages;
  };
  func1.paramCounts = [0];
  this.methods["errormessages"] = func1;
  func1.definitionLine = 2;
  func1.definitionModule = "dialect";
  func1.debug = "import";
  func1.confidential = true;
  setModuleName("dialect");
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
    setModuleName("dialect");
    // ast is a simple accessor - elide try ... catch
    return var_ast;
  };
  func2.paramCounts = [0];
  this.methods["ast"] = func2;
  func2.definitionLine = 3;
  func2.definitionModule = "dialect";
  func2.debug = "import";
  func2.confidential = true;
  setModuleName("dialect");
  setLineNumber(5);    // compilenode identifier
  // call case 5: prelude request
  var call4 = callmethodChecked(var_prelude, "methods$object(1)", [0, 1], this);
  this.superobj = call4;
  if (call4.data) this.data = call4.data;
  if (call4.hasOwnProperty('_value'))
      this._value = call4._value;
  setLineNumber(14);    // compilenode method
  var func5 = function(argcv) {    // method entryFrom(_)to(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_key__39__ = arguments[curarg];
    curarg++;
    var var_value__39__ = arguments[curarg];
    curarg++;
    setModuleName("dialect");
    var obj6 = Grace_allocObject(GraceObject, "entryFrom(_)to(_)");
    obj6.definitionModule = "dialect";
    obj6.definitionLine = 14;
    obj6.outer = this;
    var reader_dialect_outer7 = function() {
      return this.outer;
    };
    obj6.methods["outer"] = reader_dialect_outer7;
    var obj_init_6 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj6;
      setLineNumber(15);    // compilenode identifier
      obj6.data["key"] = var_key__39__;
      var reader_dialect_key8 = function() {
        return this.data["key"];
      };
      reader_dialect_key8.def = true;
      obj6.methods["key"] = reader_dialect_key8;
      setLineNumber(16);    // compilenode identifier
      obj6.data["value"] = var_value__39__;
      var reader_dialect_value9 = function() {
        return this.data["value"];
      };
      obj6.methods["value"] = reader_dialect_value9;
      obj6.data["value"] = var_value__39__;
      var writer_dialect_value9 = function(argcv, o) {
        this.data["value"] = o;
        return GraceDone;
      };
      obj6.methods["value:=(1)"] = writer_dialect_value9;
      obj6.mutable = true;
      superDepth = origSuperDepth;
    };
    obj_init_6.apply(obj6, []);
    return obj6;
  };
  func5.confidential = true;
  func5.paramCounts = [1, 1];
  this.methods["entryFrom(1)to(1)"] = func5;
  func5.definitionLine = 14;
  func5.definitionModule = "dialect";
    var func10 = function(argcv) {    // method entryFrom(_)to(_)$object(_)
      var curarg = 1;
      var var_key__39__ = arguments[curarg];
      curarg++;
      var var_value__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      // Start argument processing
      curarg = 1;
      curarg++;
      curarg++;
      // End argument processing
      setModuleName("dialect");
      var returnTarget = invocationCount;
      invocationCount++;
      var obj11 = Grace_allocObject(GraceObject, "entryFrom(1)to(1)");
      obj11.definitionModule = "dialect";
      obj11.definitionLine = 14;
      var inho11 = inheritingObject;
      while (inho11.superobj) inho11 = inho11.superobj;
      inho11.superobj = obj11;
      obj11.data = inheritingObject.data;
      if (inheritingObject.hasOwnProperty('_value'))
        obj11._value = inheritingObject._value;
      obj11.outer = this;
      var reader_dialect_outer12 = function() {
        return this.outer;
      };
      obj11.methods["outer"] = reader_dialect_outer12;
      var obj_init_11 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj11;
        setLineNumber(15);    // compilenode identifier
        obj11.data["key"] = var_key__39__;
        var reader_dialect_key13 = function() {
          return this.data["key"];
        };
        reader_dialect_key13.def = true;
        obj11.methods["key"] = reader_dialect_key13;
        setLineNumber(16);    // compilenode identifier
        obj11.data["value"] = var_value__39__;
        var reader_dialect_value14 = function() {
          return this.data["value"];
        };
        obj11.methods["value"] = reader_dialect_value14;
        obj11.data["value"] = var_value__39__;
        var writer_dialect_value14 = function(argcv, o) {
          this.data["value"] = o;
          return GraceDone;
        };
        obj11.methods["value:=(1)"] = writer_dialect_value14;
        obj11.mutable = true;
        superDepth = origSuperDepth;
      };
      obj_init_11.apply(inheritingObject, []);
      return obj11;
      };
      func10.confidential = true;
      this.methods["entryFrom(1)to(1)$object(1)"] = func10;
    setLineNumber(19);    // compilenode method
    var func15 = function(argcv) {    // method aMutableMap
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      setModuleName("dialect");
      var obj16 = Grace_allocObject(GraceObject, "aMutableMap");
      obj16.definitionModule = "dialect";
      obj16.definitionLine = 19;
      obj16.outer = this;
      var reader_dialect_outer17 = function() {
        return this.outer;
      };
      obj16.methods["outer"] = reader_dialect_outer17;
      var obj_init_16 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj16;
        var func18 = function(argcv) {    // method isEmpty
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("dialect");
          setLineNumber(23);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call21 = callmethodChecked(this, "size", []);
          var opresult23 = callmethodChecked(call21, "==(1)", [1], new GraceNum(0));
          if (!Grace_isTrue(callmethod(var_Boolean, "match(1)", [1], opresult23)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method isEmpty does not have " + 
                      callmethod(var_Boolean, "asString", [0])._value + "."));
          return opresult23;
        };
        func18.paramCounts = [0];
        obj16.methods["isEmpty"] = func18;
        func18.definitionLine = 23;
        func18.definitionModule = "dialect";
        var func24 = function(argcv) {    // method size
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("dialect");
          setLineNumber(25);    // compilenode member
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call27 = callmethodChecked(this, "entries", []);
          var call28 = callmethodChecked(call27, "size", []);
          if (!Grace_isTrue(callmethod(var_Number, "match(1)", [1], call28)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method size does not have " + 
                      callmethod(var_Number, "asString", [0])._value + "."));
          return call28;
        };
        func24.paramCounts = [0];
        obj16.methods["size"] = func24;
        func24.definitionLine = 25;
        func24.definitionModule = "dialect";
        var func29 = function(argcv) {    // method at(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_key = arguments[curarg];
          curarg++;
          setModuleName("dialect");
          setLineNumber(28);    // compilenode block
          var block31 = new GraceBlock(this, 28, 1);
          setLineNumber(1);    // compilenode identifier
          block31.real = function(var_value) {
            setLineNumber(28);    // compilenode identifier
            throw new ReturnException(var_value, returnTarget);
            return undefined;
          };
          // call case 4: self request
          onSelf = true;
          var call32 = callmethodChecked(this, "atKey(1)do(1)", [1, 1], var_key, block31);
          setLineNumber(30);    // compilenode string
          var string34 = new GraceString(" in aMutableMap");
          var string37 = new GraceString("no key ");
          var opresult39 = callmethodChecked(string37, "++(1)", [1], var_key);
          var opresult41 = callmethodChecked(opresult39, "++(1)", [1], string34);
          // call case 6: other requests
          // call case 6: other requests
          // call case 3: self.outer request
          var call44 = callmethodChecked(superDepth, "outer", [0]);
          onSelf = true;
          var call45 = callmethodChecked(call44, "NoSuchObject", []);
          var call46 = callmethodChecked(call45, "raise(1)", [1], opresult41);
          return call46;
        };
        func29.paramCounts = [1];
        obj16.methods["at(1)"] = func29;
        func29.definitionLine = 27;
        func29.definitionModule = "dialect";
        var func47 = function(argcv) {    // method at(_)put(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_key = arguments[curarg];
          curarg++;
          var var_value = arguments[curarg];
          curarg++;
          setModuleName("dialect");
          setLineNumber(34);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call50 = callmethodChecked(this, "entries", []);
          var block51 = new GraceBlock(this, 34, 1);
          setLineNumber(1);    // compilenode identifier
          block51.real = function(var_entry) {
            var if52 = GraceDone;
            setLineNumber(35);    // compilenode member
            // call case 6: other requests
            var call55 = callmethodChecked(var_entry, "key", []);
            var opresult57 = callmethodChecked(call55, "==(1)", [1], var_key);
            if (Grace_isTrue(opresult57)) {
              setLineNumber(36);    // compilenode identifier
              // call case 6: other requests
              var call59 = callmethodChecked(var_entry, "value:=(1)", [1], var_value);
              setLineNumber(37);    // compilenode identifier
              throw new ReturnException(var_done, returnTarget);
            }
            return if52;
          };
          // call case 5: prelude request
          var call60 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call50, block51);
          setLineNumber(41);    // compilenode identifier
          // call case 6: other requests
          // call case 3: self.outer request
          var call64 = callmethodChecked(superDepth, "outer", [0]);
          onSelf = true;
          var call65 = callmethodChecked(call64, "entryFrom(1)to(1)", [1, 1], var_key, var_value);
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call67 = callmethodChecked(this, "entries", []);
          var call68 = callmethodChecked(call67, "push(1)", [1], call65);
          if (!Grace_isTrue(callmethod(var_Done, "match(1)", [1], call68)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method at(_)put(_) does not have " + 
                      callmethod(var_Done, "asString", [0])._value + "."));
          return call68;
        };
        func47.paramCounts = [1, 1];
        obj16.methods["at(1)put(1)"] = func47;
        func47.definitionLine = 33;
        func47.definitionModule = "dialect";
        var func69 = function(argcv) {    // method keys
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("dialect");
          setLineNumber(45);    // compilenode array
          var array70 = new PrimitiveGraceList([]);
          var var_keys__39__ = array70;
          setLineNumber(47);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call73 = callmethodChecked(this, "entries", []);
          var block74 = new GraceBlock(this, 47, 1);
          setLineNumber(1);    // compilenode identifier
          block74.real = function(var_entry) {
            setLineNumber(48);    // compilenode member
            // call case 6: other requests
            var call77 = callmethodChecked(var_entry, "key", []);
            // call case 6: other requests
            var call78 = callmethodChecked(var_keys__39__, "push(1)", [1], call77);
            return call78;
          };
          // call case 5: prelude request
          var call79 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call73, block74);
          setLineNumber(51);    // compilenode identifier
          return var_keys__39__;
        };
        func69.paramCounts = [0];
        obj16.methods["keys"] = func69;
        func69.definitionLine = 44;
        func69.definitionModule = "dialect";
        var func80 = function(argcv) {    // method values
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("dialect");
          setLineNumber(55);    // compilenode array
          var array81 = new PrimitiveGraceList([]);
          var var_values__39__ = array81;
          setLineNumber(57);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call84 = callmethodChecked(this, "entries", []);
          var block85 = new GraceBlock(this, 57, 1);
          setLineNumber(1);    // compilenode identifier
          block85.real = function(var_entry) {
            setLineNumber(58);    // compilenode member
            // call case 6: other requests
            var call88 = callmethodChecked(var_entry, "value", []);
            // call case 6: other requests
            var call89 = callmethodChecked(var_values__39__, "push(1)", [1], call88);
            return call89;
          };
          // call case 5: prelude request
          var call90 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call84, block85);
          setLineNumber(61);    // compilenode identifier
          return var_values__39__;
        };
        func80.paramCounts = [0];
        obj16.methods["values"] = func80;
        func80.definitionLine = 54;
        func80.definitionModule = "dialect";
        var func91 = function(argcv) {    // method containsKey(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_key = arguments[curarg];
          curarg++;
          setModuleName("dialect");
          setLineNumber(65);    // compilenode block
          var block93 = new GraceBlock(this, 65, 1);
          setLineNumber(1);    // compilenode identifier
          block93.real = function(var___95____95__0) {
            setLineNumber(65);    // compilenode identifier
            throw new ReturnException(GraceTrue, returnTarget);
            return undefined;
          };
          // call case 4: self request
          onSelf = true;
          var call94 = callmethodChecked(this, "atKey(1)do(1)", [1, 1], var_key, block93);
          setLineNumber(67);    // compilenode identifier
          return GraceFalse;
        };
        func91.paramCounts = [1];
        obj16.methods["containsKey(1)"] = func91;
        func91.definitionLine = 64;
        func91.definitionModule = "dialect";
        var func95 = function(argcv) {    // method atKey(_)do(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_key = arguments[curarg];
          curarg++;
          var var_block = arguments[curarg];
          curarg++;
          setModuleName("dialect");
          setLineNumber(71);    // compilenode block
          var block97 = new GraceBlock(this, 71, 0);
          block97.real = function() {
            return GraceDone;
          };
          // call case 4: self request
          onSelf = true;
          var call98 = callmethodChecked(this, "atKey(1)do(1)else(1)", [1, 1, 1], var_key, var_block, block97);
          setLineNumber(73);    // compilenode identifier
          return var_done;
        };
        func95.paramCounts = [1, 1];
        obj16.methods["atKey(1)do(1)"] = func95;
        func95.definitionLine = 70;
        func95.definitionModule = "dialect";
        var func99 = function(argcv) {    // method atKey(_)do(_)else(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_key = arguments[curarg];
          curarg++;
          var var_block = arguments[curarg];
          curarg++;
          var var_block__39__ = arguments[curarg];
          curarg++;
          setModuleName("dialect");
          setLineNumber(76);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call102 = callmethodChecked(this, "entries", []);
          var block103 = new GraceBlock(this, 76, 1);
          setLineNumber(1);    // compilenode identifier
          block103.real = function(var_entry) {
            var if104 = GraceDone;
            setLineNumber(77);    // compilenode member
            // call case 6: other requests
            var call107 = callmethodChecked(var_entry, "key", []);
            var opresult109 = callmethodChecked(call107, "==(1)", [1], var_key);
            if (Grace_isTrue(opresult109)) {
              setLineNumber(78);    // compilenode member
              // call case 6: other requests
              var call112 = callmethodChecked(var_entry, "value", []);
              // call case 6: other requests
              var call113 = callmethodChecked(var_block, "apply(1)", [1], call112);
              throw new ReturnException(call113, returnTarget);
            }
            return if104;
          };
          // call case 5: prelude request
          var call114 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call102, block103);
          setLineNumber(82);    // compilenode member
          // call case 6: other requests
          var call116 = callmethodChecked(var_block__39__, "apply", []);
          return call116;
        };
        func99.paramCounts = [1, 1, 1];
        obj16.methods["atKey(1)do(1)else(1)"] = func99;
        func99.definitionLine = 75;
        func99.definitionModule = "dialect";
        var func117 = function(argcv) {    // method asString
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("dialect");
          var if118 = GraceDone;
          setLineNumber(86);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call120 = callmethodChecked(this, "isEmpty", []);
          if (Grace_isTrue(call120)) {
            setLineNumber(87);    // compilenode string
            var string121 = new GraceString("{}");
            return string121;
          }
          setLineNumber(90);    // compilenode string
          var string122 = new GraceString("{");
          var var_out = string122;
          setLineNumber(92);    // compilenode identifier
          var var_once = GraceFalse;
          setLineNumber(93);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call125 = callmethodChecked(this, "entries", []);
          var block126 = new GraceBlock(this, 93, 1);
          setLineNumber(1);    // compilenode identifier
          block126.real = function(var_entry) {
            var if127 = GraceDone;
            setLineNumber(94);    // compilenode identifier
            if (Grace_isTrue(var_once)) {
              setLineNumber(95);    // compilenode string
              var string128 = new GraceString(",");
              var string131 = new GraceString("");
              var opresult133 = callmethodChecked(string131, "++(1)", [1], var_out);
              var opresult135 = callmethodChecked(opresult133, "++(1)", [1], string128);
              var_out = opresult135;
              if127 = GraceDone;
            }
            setLineNumber(97);    // compilenode string
            var string136 = new GraceString("");
            // call case 6: other requests
            var call139 = callmethodChecked(var_entry, "value", []);
            var string141 = new GraceString(" => ");
            // call case 6: other requests
            var call144 = callmethodChecked(var_entry, "key", []);
            var string146 = new GraceString(" ");
            var string149 = new GraceString("");
            var opresult151 = callmethodChecked(string149, "++(1)", [1], var_out);
            var opresult153 = callmethodChecked(opresult151, "++(1)", [1], string146);
            var opresult155 = callmethodChecked(opresult153, "++(1)", [1], call144);
            var opresult157 = callmethodChecked(opresult155, "++(1)", [1], string141);
            var opresult159 = callmethodChecked(opresult157, "++(1)", [1], call139);
            var opresult161 = callmethodChecked(opresult159, "++(1)", [1], string136);
            var_out = opresult161;
            setLineNumber(98);    // compilenode identifier
            var_once = GraceTrue;
            return GraceDone;
          };
          // call case 5: prelude request
          var call162 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call125, block126);
          setLineNumber(101);    // compilenode string
          var string163 = new GraceString(" }");
          var string166 = new GraceString("");
          var opresult168 = callmethodChecked(string166, "++(1)", [1], var_out);
          var opresult170 = callmethodChecked(opresult168, "++(1)", [1], string163);
          return opresult170;
        };
        func117.paramCounts = [0];
        obj16.methods["asString"] = func117;
        func117.definitionLine = 85;
        func117.definitionModule = "dialect";
        setLineNumber(21);    // compilenode array
        var array171 = new PrimitiveGraceList([]);
        obj16.data["entries"] = array171;
        var reader_dialect_entries172 = function() {
          return this.data["entries"];
        };
        reader_dialect_entries172.def = true;
        reader_dialect_entries172.confidential = true;
        obj16.methods["entries"] = reader_dialect_entries172;
        superDepth = origSuperDepth;
      };
      obj_init_16.apply(obj16, []);
      return obj16;
    };
    func15.paramCounts = [0];
    this.methods["aMutableMap"] = func15;
    func15.definitionLine = 19;
    func15.definitionModule = "dialect";
      var func173 = function(argcv) {    // method aMutableMap$object(_)
        var curarg = 1;
        var inheritingObject = arguments[curarg++];
        // Start argument processing
        curarg = 1;
        // End argument processing
        setModuleName("dialect");
        var returnTarget = invocationCount;
        invocationCount++;
        var obj174 = Grace_allocObject(GraceObject, "aMutableMap");
        obj174.definitionModule = "dialect";
        obj174.definitionLine = 19;
        var inho174 = inheritingObject;
        while (inho174.superobj) inho174 = inho174.superobj;
        inho174.superobj = obj174;
        obj174.data = inheritingObject.data;
        if (inheritingObject.hasOwnProperty('_value'))
          obj174._value = inheritingObject._value;
        obj174.outer = this;
        var reader_dialect_outer175 = function() {
          return this.outer;
        };
        obj174.methods["outer"] = reader_dialect_outer175;
        var obj_init_174 = function() {
          var origSuperDepth = superDepth;
          superDepth = obj174;
          var func176 = function(argcv) {    // method isEmpty
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("dialect");
            setLineNumber(23);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call179 = callmethodChecked(this, "size", []);
            var opresult181 = callmethodChecked(call179, "==(1)", [1], new GraceNum(0));
            if (!Grace_isTrue(callmethod(var_Boolean, "match(1)", [1], opresult181)))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("result of method isEmpty does not have " + 
                        callmethod(var_Boolean, "asString", [0])._value + "."));
            return opresult181;
          };
          func176.paramCounts = [0];
          obj174.methods["isEmpty"] = func176;
          func176.definitionLine = 23;
          func176.definitionModule = "dialect";
          var func182 = function(argcv) {    // method size
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("dialect");
            setLineNumber(25);    // compilenode member
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call185 = callmethodChecked(this, "entries", []);
            var call186 = callmethodChecked(call185, "size", []);
            if (!Grace_isTrue(callmethod(var_Number, "match(1)", [1], call186)))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("result of method size does not have " + 
                        callmethod(var_Number, "asString", [0])._value + "."));
            return call186;
          };
          func182.paramCounts = [0];
          obj174.methods["size"] = func182;
          func182.definitionLine = 25;
          func182.definitionModule = "dialect";
          var func187 = function(argcv) {    // method at(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            setModuleName("dialect");
            setLineNumber(28);    // compilenode block
            var block189 = new GraceBlock(this, 28, 1);
            setLineNumber(1);    // compilenode identifier
            block189.real = function(var_value) {
              setLineNumber(28);    // compilenode identifier
              throw new ReturnException(var_value, returnTarget);
              return undefined;
            };
            // call case 4: self request
            onSelf = true;
            var call190 = callmethodChecked(this, "atKey(1)do(1)", [1, 1], var_key, block189);
            setLineNumber(30);    // compilenode string
            var string192 = new GraceString(" in aMutableMap");
            var string195 = new GraceString("no key ");
            var opresult197 = callmethodChecked(string195, "++(1)", [1], var_key);
            var opresult199 = callmethodChecked(opresult197, "++(1)", [1], string192);
            // call case 6: other requests
            // call case 6: other requests
            // call case 3: self.outer request
            var call202 = callmethodChecked(superDepth, "outer", [0]);
            onSelf = true;
            var call203 = callmethodChecked(call202, "NoSuchObject", []);
            var call204 = callmethodChecked(call203, "raise(1)", [1], opresult199);
            return call204;
          };
          func187.paramCounts = [1];
          obj174.methods["at(1)"] = func187;
          func187.definitionLine = 27;
          func187.definitionModule = "dialect";
          var func205 = function(argcv) {    // method at(_)put(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            var var_value = arguments[curarg];
            curarg++;
            setModuleName("dialect");
            setLineNumber(34);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call208 = callmethodChecked(this, "entries", []);
            var block209 = new GraceBlock(this, 34, 1);
            setLineNumber(1);    // compilenode identifier
            block209.real = function(var_entry) {
              var if210 = GraceDone;
              setLineNumber(35);    // compilenode member
              // call case 6: other requests
              var call213 = callmethodChecked(var_entry, "key", []);
              var opresult215 = callmethodChecked(call213, "==(1)", [1], var_key);
              if (Grace_isTrue(opresult215)) {
                setLineNumber(36);    // compilenode identifier
                // call case 6: other requests
                var call217 = callmethodChecked(var_entry, "value:=(1)", [1], var_value);
                setLineNumber(37);    // compilenode identifier
                throw new ReturnException(var_done, returnTarget);
              }
              return if210;
            };
            // call case 5: prelude request
            var call218 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call208, block209);
            setLineNumber(41);    // compilenode identifier
            // call case 6: other requests
            // call case 3: self.outer request
            var call222 = callmethodChecked(superDepth, "outer", [0]);
            onSelf = true;
            var call223 = callmethodChecked(call222, "entryFrom(1)to(1)", [1, 1], var_key, var_value);
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call225 = callmethodChecked(this, "entries", []);
            var call226 = callmethodChecked(call225, "push(1)", [1], call223);
            if (!Grace_isTrue(callmethod(var_Done, "match(1)", [1], call226)))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("result of method at(_)put(_) does not have " + 
                        callmethod(var_Done, "asString", [0])._value + "."));
            return call226;
          };
          func205.paramCounts = [1, 1];
          obj174.methods["at(1)put(1)"] = func205;
          func205.definitionLine = 33;
          func205.definitionModule = "dialect";
          var func227 = function(argcv) {    // method keys
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("dialect");
            setLineNumber(45);    // compilenode array
            var array228 = new PrimitiveGraceList([]);
            var var_keys__39__ = array228;
            setLineNumber(47);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call231 = callmethodChecked(this, "entries", []);
            var block232 = new GraceBlock(this, 47, 1);
            setLineNumber(1);    // compilenode identifier
            block232.real = function(var_entry) {
              setLineNumber(48);    // compilenode member
              // call case 6: other requests
              var call235 = callmethodChecked(var_entry, "key", []);
              // call case 6: other requests
              var call236 = callmethodChecked(var_keys__39__, "push(1)", [1], call235);
              return call236;
            };
            // call case 5: prelude request
            var call237 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call231, block232);
            setLineNumber(51);    // compilenode identifier
            return var_keys__39__;
          };
          func227.paramCounts = [0];
          obj174.methods["keys"] = func227;
          func227.definitionLine = 44;
          func227.definitionModule = "dialect";
          var func238 = function(argcv) {    // method values
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("dialect");
            setLineNumber(55);    // compilenode array
            var array239 = new PrimitiveGraceList([]);
            var var_values__39__ = array239;
            setLineNumber(57);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call242 = callmethodChecked(this, "entries", []);
            var block243 = new GraceBlock(this, 57, 1);
            setLineNumber(1);    // compilenode identifier
            block243.real = function(var_entry) {
              setLineNumber(58);    // compilenode member
              // call case 6: other requests
              var call246 = callmethodChecked(var_entry, "value", []);
              // call case 6: other requests
              var call247 = callmethodChecked(var_values__39__, "push(1)", [1], call246);
              return call247;
            };
            // call case 5: prelude request
            var call248 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call242, block243);
            setLineNumber(61);    // compilenode identifier
            return var_values__39__;
          };
          func238.paramCounts = [0];
          obj174.methods["values"] = func238;
          func238.definitionLine = 54;
          func238.definitionModule = "dialect";
          var func249 = function(argcv) {    // method containsKey(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            setModuleName("dialect");
            setLineNumber(65);    // compilenode block
            var block251 = new GraceBlock(this, 65, 1);
            setLineNumber(1);    // compilenode identifier
            block251.real = function(var___95____95__0) {
              setLineNumber(65);    // compilenode identifier
              throw new ReturnException(GraceTrue, returnTarget);
              return undefined;
            };
            // call case 4: self request
            onSelf = true;
            var call252 = callmethodChecked(this, "atKey(1)do(1)", [1, 1], var_key, block251);
            setLineNumber(67);    // compilenode identifier
            return GraceFalse;
          };
          func249.paramCounts = [1];
          obj174.methods["containsKey(1)"] = func249;
          func249.definitionLine = 64;
          func249.definitionModule = "dialect";
          var func253 = function(argcv) {    // method atKey(_)do(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            var var_block = arguments[curarg];
            curarg++;
            setModuleName("dialect");
            setLineNumber(71);    // compilenode block
            var block255 = new GraceBlock(this, 71, 0);
            block255.real = function() {
              return GraceDone;
            };
            // call case 4: self request
            onSelf = true;
            var call256 = callmethodChecked(this, "atKey(1)do(1)else(1)", [1, 1, 1], var_key, var_block, block255);
            setLineNumber(73);    // compilenode identifier
            return var_done;
          };
          func253.paramCounts = [1, 1];
          obj174.methods["atKey(1)do(1)"] = func253;
          func253.definitionLine = 70;
          func253.definitionModule = "dialect";
          var func257 = function(argcv) {    // method atKey(_)do(_)else(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            var var_block = arguments[curarg];
            curarg++;
            var var_block__39__ = arguments[curarg];
            curarg++;
            setModuleName("dialect");
            setLineNumber(76);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call260 = callmethodChecked(this, "entries", []);
            var block261 = new GraceBlock(this, 76, 1);
            setLineNumber(1);    // compilenode identifier
            block261.real = function(var_entry) {
              var if262 = GraceDone;
              setLineNumber(77);    // compilenode member
              // call case 6: other requests
              var call265 = callmethodChecked(var_entry, "key", []);
              var opresult267 = callmethodChecked(call265, "==(1)", [1], var_key);
              if (Grace_isTrue(opresult267)) {
                setLineNumber(78);    // compilenode member
                // call case 6: other requests
                var call270 = callmethodChecked(var_entry, "value", []);
                // call case 6: other requests
                var call271 = callmethodChecked(var_block, "apply(1)", [1], call270);
                throw new ReturnException(call271, returnTarget);
              }
              return if262;
            };
            // call case 5: prelude request
            var call272 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call260, block261);
            setLineNumber(82);    // compilenode member
            // call case 6: other requests
            var call274 = callmethodChecked(var_block__39__, "apply", []);
            return call274;
          };
          func257.paramCounts = [1, 1, 1];
          obj174.methods["atKey(1)do(1)else(1)"] = func257;
          func257.definitionLine = 75;
          func257.definitionModule = "dialect";
          var func275 = function(argcv) {    // method asString
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("dialect");
            var if276 = GraceDone;
            setLineNumber(86);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call278 = callmethodChecked(this, "isEmpty", []);
            if (Grace_isTrue(call278)) {
              setLineNumber(87);    // compilenode string
              var string279 = new GraceString("{}");
              return string279;
            }
            setLineNumber(90);    // compilenode string
            var string280 = new GraceString("{");
            var var_out = string280;
            setLineNumber(92);    // compilenode identifier
            var var_once = GraceFalse;
            setLineNumber(93);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call283 = callmethodChecked(this, "entries", []);
            var block284 = new GraceBlock(this, 93, 1);
            setLineNumber(1);    // compilenode identifier
            block284.real = function(var_entry) {
              var if285 = GraceDone;
              setLineNumber(94);    // compilenode identifier
              if (Grace_isTrue(var_once)) {
                setLineNumber(95);    // compilenode string
                var string286 = new GraceString(",");
                var string289 = new GraceString("");
                var opresult291 = callmethodChecked(string289, "++(1)", [1], var_out);
                var opresult293 = callmethodChecked(opresult291, "++(1)", [1], string286);
                var_out = opresult293;
                if285 = GraceDone;
              }
              setLineNumber(97);    // compilenode string
              var string294 = new GraceString("");
              // call case 6: other requests
              var call297 = callmethodChecked(var_entry, "value", []);
              var string299 = new GraceString(" => ");
              // call case 6: other requests
              var call302 = callmethodChecked(var_entry, "key", []);
              var string304 = new GraceString(" ");
              var string307 = new GraceString("");
              var opresult309 = callmethodChecked(string307, "++(1)", [1], var_out);
              var opresult311 = callmethodChecked(opresult309, "++(1)", [1], string304);
              var opresult313 = callmethodChecked(opresult311, "++(1)", [1], call302);
              var opresult315 = callmethodChecked(opresult313, "++(1)", [1], string299);
              var opresult317 = callmethodChecked(opresult315, "++(1)", [1], call297);
              var opresult319 = callmethodChecked(opresult317, "++(1)", [1], string294);
              var_out = opresult319;
              setLineNumber(98);    // compilenode identifier
              var_once = GraceTrue;
              return GraceDone;
            };
            // call case 5: prelude request
            var call320 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call283, block284);
            setLineNumber(101);    // compilenode string
            var string321 = new GraceString(" }");
            var string324 = new GraceString("");
            var opresult326 = callmethodChecked(string324, "++(1)", [1], var_out);
            var opresult328 = callmethodChecked(opresult326, "++(1)", [1], string321);
            return opresult328;
          };
          func275.paramCounts = [0];
          obj174.methods["asString"] = func275;
          func275.definitionLine = 85;
          func275.definitionModule = "dialect";
          setLineNumber(21);    // compilenode array
          var array329 = new PrimitiveGraceList([]);
          obj174.data["entries"] = array329;
          var reader_dialect_entries330 = function() {
            return this.data["entries"];
          };
          reader_dialect_entries330.def = true;
          reader_dialect_entries330.confidential = true;
          obj174.methods["entries"] = reader_dialect_entries330;
          superDepth = origSuperDepth;
        };
        obj_init_174.apply(inheritingObject, []);
        return obj174;
        };
        this.methods["aMutableMap$object(1)"] = func173;
      setLineNumber(117);    // compilenode method
      var func331 = function(argcv) {    // method rule(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_block = arguments[curarg];
        curarg++;
        setModuleName("dialect");
        setLineNumber(118);    // compilenode identifier
        // call case 6: other requests
        var call333 = callmethodChecked(var_rules, "push(1)", [1], var_block);
        if (!Grace_isTrue(callmethod(var_Done, "match(1)", [1], call333)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method rule(_) does not have " + 
                    callmethod(var_Done, "asString", [0])._value + "."));
        return call333;
      };
      func331.paramCounts = [1];
      this.methods["rule(1)"] = func331;
      func331.definitionLine = 117;
      func331.definitionModule = "dialect";
      setLineNumber(125);    // compilenode method
      var func334 = function(argcv) {    // method fail(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_message = arguments[curarg];
        curarg++;
        setModuleName("dialect");
        setLineNumber(126);    // compilenode object
        var obj336 = Grace_allocObject(GraceObject, "object");
        obj336.definitionModule = "dialect";
        obj336.definitionLine = 126;
        obj336.outer = this;
        var reader_dialect_outer337 = function() {
          return this.outer;
        };
        obj336.methods["outer"] = reader_dialect_outer337;
        var obj_init_336 = function() {
          var origSuperDepth = superDepth;
          superDepth = obj336;
          setLineNumber(127);    // compilenode identifier
          obj336.data["line"] = var_currentLine;
          var reader_dialect_line338 = function() {
            return this.data["line"];
          };
          reader_dialect_line338.def = true;
          obj336.methods["line"] = reader_dialect_line338;
          setLineNumber(128);    // compilenode num
          obj336.data["linePos"] = new GraceNum(1);
          var reader_dialect_linePos339 = function() {
            return this.data["linePos"];
          };
          reader_dialect_linePos339.def = true;
          obj336.methods["linePos"] = reader_dialect_linePos339;
          superDepth = origSuperDepth;
        };
        obj_init_336.apply(obj336, []);
        // call case 6: other requests
        setLineNumber(126);    // compilenode identifier
        var call340 = callmethodChecked(var_CheckerFailure, "raise(1)with(1)", [1, 1], var_message, obj336);
        return call340;
      };
      func334.paramCounts = [1];
      this.methods["fail(1)"] = func334;
      func334.definitionLine = 125;
      func334.definitionModule = "dialect";
      setLineNumber(131);    // compilenode method
      var func341 = function(argcv) {    // method fail(_)at(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_message = arguments[curarg];
        curarg++;
        var var_p = arguments[curarg];
        curarg++;
        setModuleName("dialect");
        setLineNumber(132);    // compilenode identifier
        // call case 6: other requests
        var call343 = callmethodChecked(var_CheckerFailure, "raise(1)with(1)", [1, 1], var_message, var_p);
        return call343;
      };
      func341.paramCounts = [1, 1];
      this.methods["fail(1)at(1)"] = func341;
      func341.definitionLine = 131;
      func341.definitionModule = "dialect";
      setLineNumber(134);    // compilenode method
      var func344 = function(argcv) {    // method fail(_)from(_)to(_)suggest(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_message = arguments[curarg];
        curarg++;
        var var_startPos = arguments[curarg];
        curarg++;
        var var_endPos = arguments[curarg];
        curarg++;
        var var_sugg = arguments[curarg];
        curarg++;
        setModuleName("dialect");
        setLineNumber(135);    // compilenode object
        var obj345 = Grace_allocObject(GraceObject, "o");
        obj345.definitionModule = "dialect";
        obj345.definitionLine = 135;
        obj345.outer = this;
        var reader_dialect_outer346 = function() {
          return this.outer;
        };
        obj345.methods["outer"] = reader_dialect_outer346;
        var obj_init_345 = function() {
          var origSuperDepth = superDepth;
          superDepth = obj345;
          setLineNumber(136);    // compilenode identifier
          obj345.data["line"] = var_currentLine;
          var reader_dialect_line347 = function() {
            return this.data["line"];
          };
          reader_dialect_line347.def = true;
          obj345.methods["line"] = reader_dialect_line347;
          setLineNumber(137);    // compilenode identifier
          obj345.data["posStart"] = var_startPos;
          var reader_dialect_posStart348 = function() {
            return this.data["posStart"];
          };
          reader_dialect_posStart348.def = true;
          obj345.methods["posStart"] = reader_dialect_posStart348;
          setLineNumber(138);    // compilenode identifier
          obj345.data["posEnd"] = var_endPos;
          var reader_dialect_posEnd349 = function() {
            return this.data["posEnd"];
          };
          reader_dialect_posEnd349.def = true;
          obj345.methods["posEnd"] = reader_dialect_posEnd349;
          setLineNumber(139);    // compilenode identifier
          var array350 = new PrimitiveGraceList([var_sugg]);
          obj345.data["suggestions"] = array350;
          var reader_dialect_suggestions351 = function() {
            return this.data["suggestions"];
          };
          reader_dialect_suggestions351.def = true;
          obj345.methods["suggestions"] = reader_dialect_suggestions351;
          superDepth = origSuperDepth;
        };
        obj_init_345.apply(obj345, []);
        var var_o = obj345;
        setLineNumber(141);    // compilenode identifier
        // call case 6: other requests
        var call353 = callmethodChecked(var_CheckerFailure, "raise(1)with(1)", [1, 1], var_message, var_o);
        return call353;
      };
      func344.paramCounts = [1, 1, 1, 1];
      this.methods["fail(1)from(1)to(1)suggest(1)"] = func344;
      func344.definitionLine = 134;
      func344.definitionModule = "dialect";
      setLineNumber(143);    // compilenode method
      var func354 = function(argcv) {    // method fail(_)from(_)to(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_message = arguments[curarg];
        curarg++;
        var var_startPos = arguments[curarg];
        curarg++;
        var var_endPos = arguments[curarg];
        curarg++;
        setModuleName("dialect");
        setLineNumber(144);    // compilenode object
        var obj355 = Grace_allocObject(GraceObject, "o");
        obj355.definitionModule = "dialect";
        obj355.definitionLine = 144;
        obj355.outer = this;
        var reader_dialect_outer356 = function() {
          return this.outer;
        };
        obj355.methods["outer"] = reader_dialect_outer356;
        var obj_init_355 = function() {
          var origSuperDepth = superDepth;
          superDepth = obj355;
          setLineNumber(145);    // compilenode identifier
          obj355.data["line"] = var_currentLine;
          var reader_dialect_line357 = function() {
            return this.data["line"];
          };
          reader_dialect_line357.def = true;
          obj355.methods["line"] = reader_dialect_line357;
          setLineNumber(146);    // compilenode identifier
          obj355.data["posStart"] = var_startPos;
          var reader_dialect_posStart358 = function() {
            return this.data["posStart"];
          };
          reader_dialect_posStart358.def = true;
          obj355.methods["posStart"] = reader_dialect_posStart358;
          setLineNumber(147);    // compilenode identifier
          obj355.data["posEnd"] = var_endPos;
          var reader_dialect_posEnd359 = function() {
            return this.data["posEnd"];
          };
          reader_dialect_posEnd359.def = true;
          obj355.methods["posEnd"] = reader_dialect_posEnd359;
          setLineNumber(148);    // compilenode array
          var array360 = new PrimitiveGraceList([]);
          obj355.data["suggestions"] = array360;
          var reader_dialect_suggestions361 = function() {
            return this.data["suggestions"];
          };
          reader_dialect_suggestions361.def = true;
          obj355.methods["suggestions"] = reader_dialect_suggestions361;
          superDepth = origSuperDepth;
        };
        obj_init_355.apply(obj355, []);
        var var_o = obj355;
        setLineNumber(150);    // compilenode identifier
        // call case 6: other requests
        var call363 = callmethodChecked(var_CheckerFailure, "raise(1)with(1)", [1, 1], var_message, var_o);
        return call363;
      };
      func354.paramCounts = [1, 1, 1];
      this.methods["fail(1)from(1)to(1)"] = func354;
      func354.definitionLine = 143;
      func354.definitionModule = "dialect";
      setLineNumber(152);    // compilenode method
      var func364 = function(argcv) {    // method fail(_)when(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_msg = arguments[curarg];
        curarg++;
        var var_pat = arguments[curarg];
        curarg++;
        setModuleName("dialect");
        setLineNumber(153);    // compilenode block
        var block366 = new GraceBlock(this, 153, 1);
        setLineNumber(1);    // compilenode identifier
        block366.real = function(var_x) {
          setLineNumber(154);    // compilenode identifier
          // call case 6: other requests
          var call368 = callmethodChecked(var_pat, "match(1)", [1], var_x);
          var var_mat = call368;
          var if369 = GraceDone;
          setLineNumber(155);    // compilenode block
          var block370 = new GraceBlock(this, 155, 0);
          block370.real = function() {
            // call case 6: other requests
            var call372 = callmethodChecked(var_mat, "result", []);
            return call372;
          };
          var opresult375 = callmethodChecked(var_mat, "&&(1)", [1], block370);
          if (Grace_isTrue(opresult375)) {
            setLineNumber(156);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call377 = callmethodChecked(this, "fail(1)", [1], var_msg);
            if369 = call377;
          }
          return if369;
        };
        // call case 4: self request
        onSelf = true;
        var call378 = callmethodChecked(this, "rule(1)", [1], block366);
        return call378;
      };
      func364.paramCounts = [1, 1];
      this.methods["fail(1)when(1)"] = func364;
      func364.definitionLine = 152;
      func364.definitionModule = "dialect";
      setLineNumber(160);    // compilenode method
      var func379 = function(argcv) {    // method createSuggestion
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("dialect");
        setLineNumber(161);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call382 = callmethodChecked(var_errormessages, "suggestion", []);
        var call383 = callmethodChecked(call382, "new", []);
        return call383;
      };
      func379.paramCounts = [0];
      this.methods["createSuggestion"] = func379;
      func379.definitionLine = 160;
      func379.definitionModule = "dialect";
      setLineNumber(163);    // compilenode method
      var func384 = function(argcv) {    // method when(_)error(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_pat = arguments[curarg];
        curarg++;
        var var_msg = arguments[curarg];
        curarg++;
        setModuleName("dialect");
        setLineNumber(164);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call386 = callmethodChecked(this, "fail(1)when(1)", [1, 1], var_msg, var_pat);
        return call386;
      };
      func384.paramCounts = [1, 1];
      this.methods["when(1)error(1)"] = func384;
      func384.definitionLine = 163;
      func384.definitionModule = "dialect";
      setLineNumber(169);    // compilenode method
      var func387 = function(argcv) {    // method stackOfKind(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_kind = arguments[curarg];
        curarg++;
        // Start argument checking
        curarg = 1;
        if (!Grace_isTrue(callmethod(var_String, "match(1)",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in stackOfKind (arg list 1), which corresponds to parameter kind, does not have " + 
                    callmethod(var_String, "asString", [0])._value + "."));
        curarg++;
        // End argument checking
        setModuleName("dialect");
        var obj388 = Grace_allocObject(GraceObject, "stackOfKind(_)");
        obj388.definitionModule = "dialect";
        obj388.definitionLine = 169;
        obj388.outer = this;
        var reader_dialect_outer389 = function() {
          return this.outer;
        };
        obj388.methods["outer"] = reader_dialect_outer389;
        var obj_init_388 = function() {
          var origSuperDepth = superDepth;
          superDepth = obj388;
          var func390 = function(argcv) {    // method at(_)put(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_name = arguments[curarg];
            curarg++;
            var var_value = arguments[curarg];
            curarg++;
            // Start argument checking
            curarg = 1;
            setLineNumber(172);    // compilenode identifier
            if (!Grace_isTrue(callmethod(var_String, "match(1)",  [1], arguments[curarg])))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("argument 1 in at (arg list 1), which corresponds to parameter name, does not have " + 
                        callmethod(var_String, "asString", [0])._value + "."));
            curarg++;
            curarg++;
            // End argument checking
            setModuleName("dialect");
            setLineNumber(173);    // compilenode identifier
            // call case 6: other requests
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call394 = callmethodChecked(this, "stack", []);
            var call395 = callmethodChecked(call394, "last", []);
            var call396 = callmethodChecked(call395, "at(1)put(1)", [1, 1], var_name, var_value);
            if (!Grace_isTrue(callmethod(var_Done, "match(1)", [1], call396)))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("result of method at(_)put(_) does not have " + 
                        callmethod(var_Done, "asString", [0])._value + "."));
            return call396;
          };
          func390.paramTypes = [];
          func390.paramTypes.push([type_String, "name"]);
          func390.paramTypes.push([]);
          func390.paramCounts = [1, 1];
          obj388.methods["at(1)put(1)"] = func390;
          func390.definitionLine = 172;
          func390.definitionModule = "dialect";
          var func397 = function(argcv) {    // method find(_)butIfMissing(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_name = arguments[curarg];
            curarg++;
            var var_bl = arguments[curarg];
            curarg++;
            // Start argument checking
            curarg = 1;
            setLineNumber(176);    // compilenode identifier
            if (!Grace_isTrue(callmethod(var_String, "match(1)",  [1], arguments[curarg])))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("argument 1 in find (arg list 1), which corresponds to parameter name, does not have " + 
                        callmethod(var_String, "asString", [0])._value + "."));
            curarg++;
            curarg++;
            // End argument checking
            setModuleName("dialect");
            setLineNumber(177);    // compilenode member
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call400 = callmethodChecked(this, "stack", []);
            var call401 = callmethodChecked(call400, "size", []);
            var var_i = call401;
            setLineNumber(178);    // compilenode block
            var block403 = new GraceBlock(this, 178, 0);
            block403.real = function() {
              var opresult406 = callmethodChecked(var_i, ">(1)", [1], new GraceNum(0));
              return opresult406;
            };
            var block407 = new GraceBlock(this, 178, 0);
            block407.real = function() {
              setLineNumber(179);    // compilenode block
              var block409 = new GraceBlock(this, 179, 1);
              setLineNumber(1);    // compilenode identifier
              block409.real = function(var_value) {
                setLineNumber(180);    // compilenode identifier
                throw new ReturnException(var_value, returnTarget);
                return undefined;
              };
              // call case 6: other requests
              setLineNumber(179);    // compilenode identifier
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call412 = callmethodChecked(this, "stack", []);
              var call413 = callmethodChecked(call412, "at(1)", [1], var_i);
              var call414 = callmethodChecked(call413, "atKey(1)do(1)", [1, 1], var_name, block409);
              setLineNumber(183);    // compilenode identifier
              var diff417 = callmethodChecked(var_i, "-(1)", [1], new GraceNum(1));
              var_i = diff417;
              return GraceDone;
            };
            // call case 5: prelude request
            var call418 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block403, block407);
            setLineNumber(186);    // compilenode member
            // call case 6: other requests
            var call420 = callmethodChecked(var_bl, "apply", []);
            return call420;
          };
          func397.paramTypes = [];
          func397.paramTypes.push([type_String, "name"]);
          func397.paramTypes.push([]);
          func397.paramCounts = [1, 1];
          obj388.methods["find(1)butIfMissing(1)"] = func397;
          func397.definitionLine = 176;
          func397.definitionModule = "dialect";
          setLineNumber(170);    // compilenode member
          // call case 6: other requests
          // call case 3: self.outer request
          var call424 = callmethodChecked(superDepth, "outer", [0]);
          onSelf = true;
          var call425 = callmethodChecked(call424, "aMutableMap", []);
          var array421 = new PrimitiveGraceList([call425]);
          obj388.data["stack"] = array421;
          var reader_dialect_stack426 = function() {
            return this.data["stack"];
          };
          reader_dialect_stack426.def = true;
          obj388.methods["stack"] = reader_dialect_stack426;
          superDepth = origSuperDepth;
        };
        obj_init_388.apply(obj388, []);
        return obj388;
      };
      func387.paramTypes = [];
      func387.paramTypes.push([type_String, "kind"]);
      func387.confidential = true;
      func387.paramCounts = [1];
      this.methods["stackOfKind(1)"] = func387;
      func387.definitionLine = 169;
      func387.definitionModule = "dialect";
        var func427 = function(argcv) {    // method stackOfKind(_)$object(_)
          var curarg = 1;
          var var_kind = arguments[curarg];
          curarg++;
          var inheritingObject = arguments[curarg++];
          // Start argument processing
          curarg = 1;
          setLineNumber(169);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_String, "match(1)",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in stackOfKind (arg list 1), which corresponds to parameter kind, does not have " + 
                      callmethod(var_String, "asString", [0])._value + "."));
          curarg++;
          // End argument processing
          setModuleName("dialect");
          var returnTarget = invocationCount;
          invocationCount++;
          var obj428 = Grace_allocObject(GraceObject, "stackOfKind(1)");
          obj428.definitionModule = "dialect";
          obj428.definitionLine = 169;
          var inho428 = inheritingObject;
          while (inho428.superobj) inho428 = inho428.superobj;
          inho428.superobj = obj428;
          obj428.data = inheritingObject.data;
          if (inheritingObject.hasOwnProperty('_value'))
            obj428._value = inheritingObject._value;
          obj428.outer = this;
          var reader_dialect_outer429 = function() {
            return this.outer;
          };
          obj428.methods["outer"] = reader_dialect_outer429;
          var obj_init_428 = function() {
            var origSuperDepth = superDepth;
            superDepth = obj428;
            var func430 = function(argcv) {    // method at(_)put(_)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_name = arguments[curarg];
              curarg++;
              var var_value = arguments[curarg];
              curarg++;
              // Start argument checking
              curarg = 1;
              setLineNumber(172);    // compilenode identifier
              if (!Grace_isTrue(callmethod(var_String, "match(1)",  [1], arguments[curarg])))
                  throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("argument 1 in at (arg list 1), which corresponds to parameter name, does not have " + 
                          callmethod(var_String, "asString", [0])._value + "."));
              curarg++;
              curarg++;
              // End argument checking
              setModuleName("dialect");
              setLineNumber(173);    // compilenode identifier
              // call case 6: other requests
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call434 = callmethodChecked(this, "stack", []);
              var call435 = callmethodChecked(call434, "last", []);
              var call436 = callmethodChecked(call435, "at(1)put(1)", [1, 1], var_name, var_value);
              if (!Grace_isTrue(callmethod(var_Done, "match(1)", [1], call436)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("result of method at(_)put(_) does not have " + 
                          callmethod(var_Done, "asString", [0])._value + "."));
              return call436;
            };
            func430.paramTypes = [];
            func430.paramTypes.push([type_String, "name"]);
            func430.paramTypes.push([]);
            func430.paramCounts = [1, 1];
            obj428.methods["at(1)put(1)"] = func430;
            func430.definitionLine = 172;
            func430.definitionModule = "dialect";
            var func437 = function(argcv) {    // method find(_)butIfMissing(_)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_name = arguments[curarg];
              curarg++;
              var var_bl = arguments[curarg];
              curarg++;
              // Start argument checking
              curarg = 1;
              setLineNumber(176);    // compilenode identifier
              if (!Grace_isTrue(callmethod(var_String, "match(1)",  [1], arguments[curarg])))
                  throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("argument 1 in find (arg list 1), which corresponds to parameter name, does not have " + 
                          callmethod(var_String, "asString", [0])._value + "."));
              curarg++;
              curarg++;
              // End argument checking
              setModuleName("dialect");
              setLineNumber(177);    // compilenode member
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call440 = callmethodChecked(this, "stack", []);
              var call441 = callmethodChecked(call440, "size", []);
              var var_i = call441;
              setLineNumber(178);    // compilenode block
              var block443 = new GraceBlock(this, 178, 0);
              block443.real = function() {
                var opresult446 = callmethodChecked(var_i, ">(1)", [1], new GraceNum(0));
                return opresult446;
              };
              var block447 = new GraceBlock(this, 178, 0);
              block447.real = function() {
                setLineNumber(179);    // compilenode block
                var block449 = new GraceBlock(this, 179, 1);
                setLineNumber(1);    // compilenode identifier
                block449.real = function(var_value) {
                  setLineNumber(180);    // compilenode identifier
                  throw new ReturnException(var_value, returnTarget);
                  return undefined;
                };
                // call case 6: other requests
                setLineNumber(179);    // compilenode identifier
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call452 = callmethodChecked(this, "stack", []);
                var call453 = callmethodChecked(call452, "at(1)", [1], var_i);
                var call454 = callmethodChecked(call453, "atKey(1)do(1)", [1, 1], var_name, block449);
                setLineNumber(183);    // compilenode identifier
                var diff457 = callmethodChecked(var_i, "-(1)", [1], new GraceNum(1));
                var_i = diff457;
                return GraceDone;
              };
              // call case 5: prelude request
              var call458 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block443, block447);
              setLineNumber(186);    // compilenode member
              // call case 6: other requests
              var call460 = callmethodChecked(var_bl, "apply", []);
              return call460;
            };
            func437.paramTypes = [];
            func437.paramTypes.push([type_String, "name"]);
            func437.paramTypes.push([]);
            func437.paramCounts = [1, 1];
            obj428.methods["find(1)butIfMissing(1)"] = func437;
            func437.definitionLine = 176;
            func437.definitionModule = "dialect";
            setLineNumber(170);    // compilenode member
            // call case 6: other requests
            // call case 3: self.outer request
            var call464 = callmethodChecked(superDepth, "outer", [0]);
            onSelf = true;
            var call465 = callmethodChecked(call464, "aMutableMap", []);
            var array461 = new PrimitiveGraceList([call465]);
            obj428.data["stack"] = array461;
            var reader_dialect_stack466 = function() {
              return this.data["stack"];
            };
            reader_dialect_stack466.def = true;
            obj428.methods["stack"] = reader_dialect_stack466;
            superDepth = origSuperDepth;
          };
          obj_init_428.apply(inheritingObject, []);
          return obj428;
          };
          func427.paramTypes = [];
          func427.paramTypes.push([type_String, "kind"]);
          func427.confidential = true;
          this.methods["stackOfKind(1)$object(1)"] = func427;
        setLineNumber(219);    // compilenode method
        var func467 = function(argcv) {    // method checkTypes(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_node = arguments[curarg];
          curarg++;
          setModuleName("dialect");
          setLineNumber(220);    // compilenode identifier
          // call case 6: other requests
          var call469 = callmethodChecked(var_node, "accept(1)", [1], var_astVisitor);
          return call469;
        };
        func467.paramCounts = [1];
        this.methods["checkTypes(1)"] = func467;
        func467.definitionLine = 219;
        func467.definitionModule = "dialect";
        setLineNumber(223);    // compilenode method
        var func470 = function(argcv) {    // method typeOf(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_node = arguments[curarg];
          curarg++;
          setModuleName("dialect");
          setLineNumber(224);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call472 = callmethodChecked(this, "checkTypes(1)", [1], var_node);
          setLineNumber(225);    // compilenode block
          var block474 = new GraceBlock(this, 225, 1);
          setLineNumber(1);    // compilenode identifier
          block474.real = function(var_value) {
            setLineNumber(225);    // compilenode identifier
            throw new ReturnException(var_value, returnTarget);
            return undefined;
          };
          // call case 6: other requests
          var call475 = callmethodChecked(var_cache, "atKey(1)do(1)", [1, 1], var_node, block474);
          setLineNumber(226);    // compilenode string
          var string477 = new GraceString("cannot type non-expression");
          // call case 6: other requests
          var call478 = callmethodChecked(var_CheckerFailure, "raise(1)with(1)", [1, 1], string477, var_node);
          return call478;
        };
        func470.paramCounts = [1];
        this.methods["typeOf(1)"] = func470;
        func470.definitionLine = 223;
        func470.definitionModule = "dialect";
        setLineNumber(229);    // compilenode method
        var func479 = function(argcv) {    // method runRules(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_node = arguments[curarg];
          curarg++;
          setModuleName("dialect");
          setLineNumber(232);    // compilenode block
          var block481 = new GraceBlock(this, 232, 1);
          setLineNumber(1);    // compilenode identifier
          block481.real = function(var_value) {
            setLineNumber(232);    // compilenode identifier
            throw new ReturnException(var_value, returnTarget);
            return undefined;
          };
          // call case 6: other requests
          var call482 = callmethodChecked(var_cache, "atKey(1)do(1)", [1, 1], var_node, block481);
          setLineNumber(233);    // compilenode member
          // call case 6: other requests
          var call484 = callmethodChecked(var_node, "line", []);
          var_currentLine = call484;
          setLineNumber(235);    // compilenode identifier
          // call case 6: other requests
          // call case 5: prelude request
          var call487 = callmethodChecked(var_prelude, "FailedMatch", []);
          var call488 = callmethodChecked(call487, "new(1)", [1], var_node);
          var var_result = call488;
          setLineNumber(236);    // compilenode block
          var block490 = new GraceBlock(this, 236, 1);
          setLineNumber(1);    // compilenode identifier
          block490.real = function(var_each) {
            setLineNumber(237);    // compilenode identifier
            // call case 6: other requests
            var call492 = callmethodChecked(var_each, "match(1)", [1], var_node);
            var var_matched = call492;
            var if493 = GraceDone;
            setLineNumber(238);    // compilenode identifier
            if (Grace_isTrue(var_matched)) {
              setLineNumber(239);    // compilenode member
              // call case 6: other requests
              var call495 = callmethodChecked(var_matched, "result", []);
              var_result = call495;
              setLineNumber(240);    // compilenode identifier
              // call case 6: other requests
              var call497 = callmethodChecked(var_cache, "at(1)put(1)", [1, 1], var_node, var_result);
              if493 = call497;
            }
            return if493;
          };
          // call case 5: prelude request
          var call498 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_rules, block490);
          setLineNumber(243);    // compilenode identifier
          return var_result;
        };
        func479.paramCounts = [1];
        this.methods["runRules(1)"] = func479;
        func479.definitionLine = 229;
        func479.definitionModule = "dialect";
        setLineNumber(250);    // compilenode method
        var func499 = function(argcv) {    // method check(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_nodes = arguments[curarg];
          curarg++;
          setModuleName("dialect");
          setLineNumber(252);    // compilenode identifier
          // call case 6: other requests
          // call case 6: other requests
          // call case 6: other requests
          var call503 = callmethodChecked(var_ast, "objectNode", []);
          var call504 = callmethodChecked(call503, "new(2)", [2], var_nodes, GraceFalse);
          var call505 = callmethodChecked(call504, "accept(1)", [1], var_astVisitor);
          if (!Grace_isTrue(callmethod(var_Done, "match(1)", [1], call505)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method check(_) does not have " + 
                      callmethod(var_Done, "asString", [0])._value + "."));
          return call505;
        };
        func499.paramCounts = [1];
        this.methods["check(1)"] = func499;
        func499.definitionLine = 250;
        func499.definitionModule = "dialect";
        setLineNumber(257);    // compilenode method
        var func506 = function(argcv) {    // method aPatternMatchingNode(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_kind = arguments[curarg];
          curarg++;
          // Start argument checking
          curarg = 1;
          if (!Grace_isTrue(callmethod(var_String, "match(1)",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in aPatternMatchingNode (arg list 1), which corresponds to parameter kind, does not have " + 
                      callmethod(var_String, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("dialect");
          var obj507 = Grace_allocObject(null, "aPatternMatchingNode(_)");
          obj507.definitionModule = "dialect";
          obj507.definitionLine = 257;
          obj507.outer = this;
          var reader_dialect_outer508 = function() {
            return this.outer;
          };
          obj507.methods["outer"] = reader_dialect_outer508;
          var obj_init_507 = function() {
            var origSuperDepth = superDepth;
            superDepth = obj507;
            var func509 = function(argcv) {    // method match(_)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_obj = arguments[curarg];
              curarg++;
              // Start argument checking
              curarg = 1;
              setLineNumber(260);    // compilenode identifier
              if (!Grace_isTrue(callmethod(var_Object, "match(1)",  [1], arguments[curarg])))
                  throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("argument 1 in match (arg list 1), which corresponds to parameter obj, does not have " + 
                          callmethod(var_Object, "asString", [0])._value + "."));
              curarg++;
              // End argument checking
              setModuleName("dialect");
              setLineNumber(261);    // compilenode identifier
              var cases510 = [];
              setLineNumber(262);    // compilenode block
              var block511 = new GraceBlock(this, 262, 1);
              setLineNumber(0);    // compilenode string
              var string514 = new GraceString("node");
              // call case 6: other requests
              // call case 5: prelude request
              var call516 = callmethodChecked(var_prelude, "VariablePattern", []);
              var call517 = callmethodChecked(call516, "new(1)", [1], string514);
              setLineNumber(262);    // compilenode identifier
              // call case 6: other requests
              setLineNumber(0);    // compilenode member
              // call case 5: prelude request
              var call519 = callmethodChecked(var_prelude, "AndPattern", []);
              var call520 = callmethodChecked(call519, "new(2)", [2], call517, var_AstNode);
              block511.pattern = call520;
              setLineNumber(262);    // compilenode identifier
              block511.paramTypes = [var_AstNode];
              block511.real = function(var_node) {
                var if521 = GraceDone;
                setLineNumber(263);    // compilenode member
                // call case 6: other requests
                var call523 = callmethodChecked(var_node, "kind", []);
                var opresult526 = callmethodChecked(var_kind, "==(1)", [1], call523);
                if (Grace_isTrue(opresult526)) {
                  setLineNumber(264);    // compilenode array
                  var array528 = new PrimitiveGraceList([]);
                  // call case 6: other requests
                  // call case 5: prelude request
                  var call530 = callmethodChecked(var_prelude, "SuccessfulMatch", []);
                  var call531 = callmethodChecked(call530, "new(2)", [2], var_node, array528);
                  if521 = call531;
                } else {
                  setLineNumber(266);    // compilenode identifier
                  // call case 6: other requests
                  // call case 5: prelude request
                  var call534 = callmethodChecked(var_prelude, "FailedMatch", []);
                  var call535 = callmethodChecked(call534, "new(1)", [1], var_node);
                  if521 = call535;
                }
                return if521;
              };
              cases510.push(block511);
              setLineNumber(268);    // compilenode block
              var block536 = new GraceBlock(this, 268, 1);
              setLineNumber(1);    // compilenode identifier
              block536.real = function(var___95____95__2) {
                setLineNumber(268);    // compilenode identifier
                // call case 6: other requests
                // call case 5: prelude request
                var call539 = callmethodChecked(var_prelude, "FailedMatch", []);
                var call540 = callmethodChecked(call539, "new(1)", [1], var_obj);
                return call540;
              };
              cases510.push(block536);
              setLineNumber(261);    // compilematchcase
              var matchres510 = matchCase(var_obj,cases510,false);
              setModuleName("dialect");
              return matchres510;
            };
            func509.paramTypes = [];
            func509.paramTypes.push([type_Object, "obj"]);
            func509.paramCounts = [1];
            obj507.methods["match(1)"] = func509;
            func509.definitionLine = 260;
            func509.definitionModule = "dialect";
            setLineNumber(258);    // compilenode identifier
            // call case 6: other requests
            // call case 6: other requests
            // call case 3: self.outer request
            var call544 = callmethodChecked(superDepth, "outer", [0]);
            onSelf = true;
            var call545 = callmethodChecked(call544, "BasicPattern", []);
            var call546 = callmethodChecked(call545, "new$object(1)", [0, 1], this);
            obj507.superobj = call546;
            if (call546.data) obj507.data = call546.data;
            if (call546.hasOwnProperty('_value'))
                obj507._value = call546._value;
            superDepth = origSuperDepth;
          };
          obj_init_507.apply(obj507, []);
          setLineNumber(257);    // compilenode member
          // call case 5: prelude request
          var call548 = callmethodChecked(var_prelude, "Pattern", []);
          if (!Grace_isTrue(callmethod(call548, "match(1)", [1], obj507)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method aPatternMatchingNode(_) does not have " + 
                      callmethod(call548, "asString", [0])._value + "."));
          return obj507;
        };
        func506.paramTypes = [];
        func506.paramTypes.push([type_String, "kind"]);
        func506.paramCounts = [1];
        this.methods["aPatternMatchingNode(1)"] = func506;
        func506.definitionLine = 257;
        func506.definitionModule = "dialect";
          var func549 = function(argcv) {    // method aPatternMatchingNode(_)$object(_)
            var curarg = 1;
            var var_kind = arguments[curarg];
            curarg++;
            var inheritingObject = arguments[curarg++];
            // Start argument processing
            curarg = 1;
            if (!Grace_isTrue(callmethod(var_String, "match(1)",  [1], arguments[curarg])))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("argument 1 in aPatternMatchingNode (arg list 1), which corresponds to parameter kind, does not have " + 
                        callmethod(var_String, "asString", [0])._value + "."));
            curarg++;
            // End argument processing
            setModuleName("dialect");
            var returnTarget = invocationCount;
            invocationCount++;
            var obj550 = Grace_allocObject(null, "aPatternMatchingNode(1)");
            obj550.definitionModule = "dialect";
            obj550.definitionLine = 257;
            var inho550 = inheritingObject;
            while (inho550.superobj) inho550 = inho550.superobj;
            inho550.superobj = obj550;
            obj550.data = inheritingObject.data;
            if (inheritingObject.hasOwnProperty('_value'))
              obj550._value = inheritingObject._value;
            obj550.outer = this;
            var reader_dialect_outer551 = function() {
              return this.outer;
            };
            obj550.methods["outer"] = reader_dialect_outer551;
            var obj_init_550 = function() {
              var origSuperDepth = superDepth;
              superDepth = obj550;
              var func552 = function(argcv) {    // method match(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_obj = arguments[curarg];
                curarg++;
                // Start argument checking
                curarg = 1;
                setLineNumber(260);    // compilenode identifier
                if (!Grace_isTrue(callmethod(var_Object, "match(1)",  [1], arguments[curarg])))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("argument 1 in match (arg list 1), which corresponds to parameter obj, does not have " + 
                            callmethod(var_Object, "asString", [0])._value + "."));
                curarg++;
                // End argument checking
                setModuleName("dialect");
                setLineNumber(261);    // compilenode identifier
                var cases553 = [];
                setLineNumber(262);    // compilenode block
                var block554 = new GraceBlock(this, 262, 1);
                setLineNumber(0);    // compilenode string
                var string557 = new GraceString("node");
                // call case 6: other requests
                // call case 5: prelude request
                var call559 = callmethodChecked(var_prelude, "VariablePattern", []);
                var call560 = callmethodChecked(call559, "new(1)", [1], string557);
                setLineNumber(262);    // compilenode identifier
                // call case 6: other requests
                setLineNumber(0);    // compilenode member
                // call case 5: prelude request
                var call562 = callmethodChecked(var_prelude, "AndPattern", []);
                var call563 = callmethodChecked(call562, "new(2)", [2], call560, var_AstNode);
                block554.pattern = call563;
                setLineNumber(262);    // compilenode identifier
                block554.paramTypes = [var_AstNode];
                block554.real = function(var_node) {
                  var if564 = GraceDone;
                  setLineNumber(263);    // compilenode member
                  // call case 6: other requests
                  var call566 = callmethodChecked(var_node, "kind", []);
                  var opresult569 = callmethodChecked(var_kind, "==(1)", [1], call566);
                  if (Grace_isTrue(opresult569)) {
                    setLineNumber(264);    // compilenode array
                    var array571 = new PrimitiveGraceList([]);
                    // call case 6: other requests
                    // call case 5: prelude request
                    var call573 = callmethodChecked(var_prelude, "SuccessfulMatch", []);
                    var call574 = callmethodChecked(call573, "new(2)", [2], var_node, array571);
                    if564 = call574;
                  } else {
                    setLineNumber(266);    // compilenode identifier
                    // call case 6: other requests
                    // call case 5: prelude request
                    var call577 = callmethodChecked(var_prelude, "FailedMatch", []);
                    var call578 = callmethodChecked(call577, "new(1)", [1], var_node);
                    if564 = call578;
                  }
                  return if564;
                };
                cases553.push(block554);
                setLineNumber(268);    // compilenode block
                var block579 = new GraceBlock(this, 268, 1);
                setLineNumber(1);    // compilenode identifier
                block579.real = function(var___95____95__2) {
                  setLineNumber(268);    // compilenode identifier
                  // call case 6: other requests
                  // call case 5: prelude request
                  var call582 = callmethodChecked(var_prelude, "FailedMatch", []);
                  var call583 = callmethodChecked(call582, "new(1)", [1], var_obj);
                  return call583;
                };
                cases553.push(block579);
                setLineNumber(261);    // compilematchcase
                var matchres553 = matchCase(var_obj,cases553,false);
                setModuleName("dialect");
                return matchres553;
              };
              func552.paramTypes = [];
              func552.paramTypes.push([type_Object, "obj"]);
              func552.paramCounts = [1];
              obj550.methods["match(1)"] = func552;
              func552.definitionLine = 260;
              func552.definitionModule = "dialect";
              setLineNumber(258);    // compilenode identifier
              // call case 6: other requests
              // call case 6: other requests
              // call case 3: self.outer request
              var call587 = callmethodChecked(superDepth, "outer", [0]);
              onSelf = true;
              var call588 = callmethodChecked(call587, "BasicPattern", []);
              var call589 = callmethodChecked(call588, "new$object(1)", [0, 1], this);
              obj550.superobj = call589;
              if (call589.data) obj550.data = call589.data;
              if (call589.hasOwnProperty('_value'))
                  obj550._value = call589._value;
              superDepth = origSuperDepth;
            };
            obj_init_550.apply(inheritingObject, []);
            return obj550;
            };
            func549.paramTypes = [];
            func549.paramTypes.push([type_String, "kind"]);
            this.methods["aPatternMatchingNode(1)$object(1)"] = func549;
          setLineNumber(303);    // compilenode method
          var func590 = function(argcv) {    // method RequestOf(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_methodName = arguments[curarg];
            curarg++;
            // Start argument checking
            curarg = 1;
            if (!Grace_isTrue(callmethod(var_String, "match(1)",  [1], arguments[curarg])))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("argument 1 in RequestOf (arg list 1), which corresponds to parameter methodName, does not have " + 
                        callmethod(var_String, "asString", [0])._value + "."));
            curarg++;
            // End argument checking
            setModuleName("dialect");
            var obj591 = Grace_allocObject(null, "RequestOf(_)");
            obj591.definitionModule = "dialect";
            obj591.definitionLine = 303;
            obj591.outer = this;
            var reader_dialect_outer592 = function() {
              return this.outer;
            };
            obj591.methods["outer"] = reader_dialect_outer592;
            var obj_init_591 = function() {
              var origSuperDepth = superDepth;
              superDepth = obj591;
              var func593 = function(argcv) {    // method match(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_obj = arguments[curarg];
                curarg++;
                // Start argument checking
                curarg = 1;
                setLineNumber(307);    // compilenode identifier
                if (!Grace_isTrue(callmethod(var_Object, "match(1)",  [1], arguments[curarg])))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("argument 1 in match (arg list 1), which corresponds to parameter obj, does not have " + 
                            callmethod(var_Object, "asString", [0])._value + "."));
                curarg++;
                // End argument checking
                setModuleName("dialect");
                setLineNumber(308);    // compilenode identifier
                var cases594 = [];
                setLineNumber(309);    // compilenode block
                var block595 = new GraceBlock(this, 309, 1);
                setLineNumber(0);    // compilenode string
                var string598 = new GraceString("node");
                // call case 6: other requests
                // call case 5: prelude request
                var call600 = callmethodChecked(var_prelude, "VariablePattern", []);
                var call601 = callmethodChecked(call600, "new(1)", [1], string598);
                setLineNumber(309);    // compilenode identifier
                // call case 6: other requests
                setLineNumber(0);    // compilenode member
                // call case 5: prelude request
                var call603 = callmethodChecked(var_prelude, "AndPattern", []);
                var call604 = callmethodChecked(call603, "new(2)", [2], call601, var_AstNode);
                block595.pattern = call604;
                setLineNumber(309);    // compilenode identifier
                block595.paramTypes = [var_AstNode];
                block595.real = function(var_node) {
                  var if605 = GraceDone;
                  setLineNumber(310);    // compilenode block
                  var block606 = new GraceBlock(this, 310, 0);
                  block606.real = function() {
                    setLineNumber(311);    // compilenode member
                    // call case 6: other requests
                    // call case 6: other requests
                    var call610 = callmethodChecked(var_node, "value", []);
                    var call611 = callmethodChecked(call610, "value", []);
                    var opresult613 = callmethodChecked(call611, "==(1)", [1], var_methodName);
                    return opresult613;
                  };
                  setLineNumber(310);    // compilenode string
                  var string615 = new GraceString("call");
                  // call case 6: other requests
                  var call618 = callmethodChecked(var_node, "kind", []);
                  var opresult620 = callmethodChecked(call618, "==(1)", [1], string615);
                  var opresult622 = callmethodChecked(opresult620, "&&(1)", [1], block606);
                  if (Grace_isTrue(opresult622)) {
                    setLineNumber(313);    // compilenode identifier
                    // call case 4: self request
                    onSelf = true;
                    var call625 = callmethodChecked(this, "makeBindings(1)", [1], var_node);
                    // call case 6: other requests
                    // call case 5: prelude request
                    var call627 = callmethodChecked(var_prelude, "Successfulmatch", []);
                    var call628 = callmethodChecked(call627, "new(2)", [2], var_node, call625);
                    if605 = call628;
                  } else {
                    setLineNumber(315);    // compilenode identifier
                    // call case 6: other requests
                    // call case 5: prelude request
                    var call631 = callmethodChecked(var_prelude, "Failedmatch", []);
                    var call632 = callmethodChecked(call631, "new(1)", [1], var_node);
                    if605 = call632;
                  }
                  return if605;
                };
                cases594.push(block595);
                setLineNumber(317);    // compilenode block
                var block633 = new GraceBlock(this, 317, 1);
                setLineNumber(1);    // compilenode identifier
                block633.real = function(var___95____95__3) {
                  setLineNumber(317);    // compilenode identifier
                  // call case 6: other requests
                  // call case 5: prelude request
                  var call636 = callmethodChecked(var_prelude, "Failedmatch", []);
                  var call637 = callmethodChecked(call636, "new(1)", [1], var_obj);
                  return call637;
                };
                cases594.push(block633);
                setLineNumber(308);    // compilematchcase
                var matchres594 = matchCase(var_obj,cases594,false);
                setModuleName("dialect");
                return matchres594;
              };
              func593.paramTypes = [];
              func593.paramTypes.push([type_Object, "obj"]);
              func593.paramCounts = [1];
              obj591.methods["match(1)"] = func593;
              func593.definitionLine = 307;
              func593.definitionModule = "dialect";
              var func638 = function(argcv) {    // method makeBindings(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                setModuleName("dialect");
                setLineNumber(321);    // compilenode array
                var array639 = new PrimitiveGraceList([]);
                return array639;
              };
              func638.paramCounts = [1];
              obj591.methods["makeBindings(1)"] = func638;
              func638.definitionLine = 321;
              func638.definitionModule = "dialect";
              setLineNumber(305);    // compilenode identifier
              // call case 6: other requests
              // call case 5: prelude request
              var call642 = callmethodChecked(var_prelude, "BasicPattern", []);
              var call643 = callmethodChecked(call642, "new$object(1)", [0, 1], this);
              obj591.superobj = call643;
              if (call643.data) obj591.data = call643.data;
              if (call643.hasOwnProperty('_value'))
                  obj591._value = call643._value;
              superDepth = origSuperDepth;
            };
            obj_init_591.apply(obj591, []);
            setLineNumber(303);    // compilenode member
            // call case 5: prelude request
            var call645 = callmethodChecked(var_prelude, "Pattern", []);
            if (!Grace_isTrue(callmethod(call645, "match(1)", [1], obj591)))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("result of method RequestOf(_) does not have " + 
                        callmethod(call645, "asString", [0])._value + "."));
            return obj591;
          };
          func590.paramTypes = [];
          func590.paramTypes.push([type_String, "methodName"]);
          func590.paramCounts = [1];
          this.methods["RequestOf(1)"] = func590;
          func590.definitionLine = 303;
          func590.definitionModule = "dialect";
            var func646 = function(argcv) {    // method RequestOf(_)$object(_)
              var curarg = 1;
              var var_methodName = arguments[curarg];
              curarg++;
              var inheritingObject = arguments[curarg++];
              // Start argument processing
              curarg = 1;
              if (!Grace_isTrue(callmethod(var_String, "match(1)",  [1], arguments[curarg])))
                  throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("argument 1 in RequestOf (arg list 1), which corresponds to parameter methodName, does not have " + 
                          callmethod(var_String, "asString", [0])._value + "."));
              curarg++;
              // End argument processing
              setModuleName("dialect");
              var returnTarget = invocationCount;
              invocationCount++;
              var obj647 = Grace_allocObject(null, "RequestOf(1)");
              obj647.definitionModule = "dialect";
              obj647.definitionLine = 303;
              var inho647 = inheritingObject;
              while (inho647.superobj) inho647 = inho647.superobj;
              inho647.superobj = obj647;
              obj647.data = inheritingObject.data;
              if (inheritingObject.hasOwnProperty('_value'))
                obj647._value = inheritingObject._value;
              obj647.outer = this;
              var reader_dialect_outer648 = function() {
                return this.outer;
              };
              obj647.methods["outer"] = reader_dialect_outer648;
              var obj_init_647 = function() {
                var origSuperDepth = superDepth;
                superDepth = obj647;
                var func649 = function(argcv) {    // method match(_)
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  var var_obj = arguments[curarg];
                  curarg++;
                  // Start argument checking
                  curarg = 1;
                  setLineNumber(307);    // compilenode identifier
                  if (!Grace_isTrue(callmethod(var_Object, "match(1)",  [1], arguments[curarg])))
                      throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("argument 1 in match (arg list 1), which corresponds to parameter obj, does not have " + 
                              callmethod(var_Object, "asString", [0])._value + "."));
                  curarg++;
                  // End argument checking
                  setModuleName("dialect");
                  setLineNumber(308);    // compilenode identifier
                  var cases650 = [];
                  setLineNumber(309);    // compilenode block
                  var block651 = new GraceBlock(this, 309, 1);
                  setLineNumber(0);    // compilenode string
                  var string654 = new GraceString("node");
                  // call case 6: other requests
                  // call case 5: prelude request
                  var call656 = callmethodChecked(var_prelude, "VariablePattern", []);
                  var call657 = callmethodChecked(call656, "new(1)", [1], string654);
                  setLineNumber(309);    // compilenode identifier
                  // call case 6: other requests
                  setLineNumber(0);    // compilenode member
                  // call case 5: prelude request
                  var call659 = callmethodChecked(var_prelude, "AndPattern", []);
                  var call660 = callmethodChecked(call659, "new(2)", [2], call657, var_AstNode);
                  block651.pattern = call660;
                  setLineNumber(309);    // compilenode identifier
                  block651.paramTypes = [var_AstNode];
                  block651.real = function(var_node) {
                    var if661 = GraceDone;
                    setLineNumber(310);    // compilenode block
                    var block662 = new GraceBlock(this, 310, 0);
                    block662.real = function() {
                      setLineNumber(311);    // compilenode member
                      // call case 6: other requests
                      // call case 6: other requests
                      var call666 = callmethodChecked(var_node, "value", []);
                      var call667 = callmethodChecked(call666, "value", []);
                      var opresult669 = callmethodChecked(call667, "==(1)", [1], var_methodName);
                      return opresult669;
                    };
                    setLineNumber(310);    // compilenode string
                    var string671 = new GraceString("call");
                    // call case 6: other requests
                    var call674 = callmethodChecked(var_node, "kind", []);
                    var opresult676 = callmethodChecked(call674, "==(1)", [1], string671);
                    var opresult678 = callmethodChecked(opresult676, "&&(1)", [1], block662);
                    if (Grace_isTrue(opresult678)) {
                      setLineNumber(313);    // compilenode identifier
                      // call case 4: self request
                      onSelf = true;
                      var call681 = callmethodChecked(this, "makeBindings(1)", [1], var_node);
                      // call case 6: other requests
                      // call case 5: prelude request
                      var call683 = callmethodChecked(var_prelude, "Successfulmatch", []);
                      var call684 = callmethodChecked(call683, "new(2)", [2], var_node, call681);
                      if661 = call684;
                    } else {
                      setLineNumber(315);    // compilenode identifier
                      // call case 6: other requests
                      // call case 5: prelude request
                      var call687 = callmethodChecked(var_prelude, "Failedmatch", []);
                      var call688 = callmethodChecked(call687, "new(1)", [1], var_node);
                      if661 = call688;
                    }
                    return if661;
                  };
                  cases650.push(block651);
                  setLineNumber(317);    // compilenode block
                  var block689 = new GraceBlock(this, 317, 1);
                  setLineNumber(1);    // compilenode identifier
                  block689.real = function(var___95____95__3) {
                    setLineNumber(317);    // compilenode identifier
                    // call case 6: other requests
                    // call case 5: prelude request
                    var call692 = callmethodChecked(var_prelude, "Failedmatch", []);
                    var call693 = callmethodChecked(call692, "new(1)", [1], var_obj);
                    return call693;
                  };
                  cases650.push(block689);
                  setLineNumber(308);    // compilematchcase
                  var matchres650 = matchCase(var_obj,cases650,false);
                  setModuleName("dialect");
                  return matchres650;
                };
                func649.paramTypes = [];
                func649.paramTypes.push([type_Object, "obj"]);
                func649.paramCounts = [1];
                obj647.methods["match(1)"] = func649;
                func649.definitionLine = 307;
                func649.definitionModule = "dialect";
                var func694 = function(argcv) {    // method makeBindings(_)
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  var var_node = arguments[curarg];
                  curarg++;
                  setModuleName("dialect");
                  setLineNumber(321);    // compilenode array
                  var array695 = new PrimitiveGraceList([]);
                  return array695;
                };
                func694.paramCounts = [1];
                obj647.methods["makeBindings(1)"] = func694;
                func694.definitionLine = 321;
                func694.definitionModule = "dialect";
                setLineNumber(305);    // compilenode identifier
                // call case 6: other requests
                // call case 5: prelude request
                var call698 = callmethodChecked(var_prelude, "BasicPattern", []);
                var call699 = callmethodChecked(call698, "new$object(1)", [0, 1], this);
                obj647.superobj = call699;
                if (call699.data) obj647.data = call699.data;
                if (call699.hasOwnProperty('_value'))
                    obj647._value = call699._value;
                superDepth = origSuperDepth;
              };
              obj_init_647.apply(inheritingObject, []);
              return obj647;
              };
              func646.paramTypes = [];
              func646.paramTypes.push([type_String, "methodName"]);
              this.methods["RequestOf(1)$object(1)"] = func646;
            setLineNumber(327);    // compilenode method
            var func700 = function(argcv) {    // method whileCond(_)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_node = arguments[curarg];
              curarg++;
              setModuleName("dialect");
              setLineNumber(330);    // compilenode member
              // call case 6: other requests
              var call702 = callmethodChecked(var_node, "with", []);
              var var_sig = call702;
              setLineNumber(331);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              // call case 6: other requests
              var call706 = callmethodChecked(var_sig, "first", []);
              var call707 = callmethodChecked(call706, "args", []);
              var call708 = callmethodChecked(call707, "first", []);
              return call708;
            };
            func700.paramCounts = [1];
            this.methods["whileCond(1)"] = func700;
            func700.definitionLine = 327;
            func700.definitionModule = "dialect";
            setLineNumber(334);    // compilenode method
            var func709 = function(argcv) {    // method whileBody(_)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_node = arguments[curarg];
              curarg++;
              setModuleName("dialect");
              setLineNumber(337);    // compilenode member
              // call case 6: other requests
              var call711 = callmethodChecked(var_node, "with", []);
              var var_sig = call711;
              setLineNumber(338);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              // call case 6: other requests
              var call715 = callmethodChecked(var_sig, "second", []);
              var call716 = callmethodChecked(call715, "args", []);
              var call717 = callmethodChecked(call716, "first", []);
              return call717;
            };
            func709.paramCounts = [1];
            this.methods["whileBody(1)"] = func709;
            func709.definitionLine = 334;
            func709.definitionModule = "dialect";
            setLineNumber(341);    // compilenode method
            var func718 = function(argcv) {    // method forCollection(_)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_node = arguments[curarg];
              curarg++;
              setModuleName("dialect");
              setLineNumber(344);    // compilenode member
              // call case 6: other requests
              var call720 = callmethodChecked(var_node, "with", []);
              var var_sig = call720;
              setLineNumber(345);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              // call case 6: other requests
              var call724 = callmethodChecked(var_sig, "first", []);
              var call725 = callmethodChecked(call724, "args", []);
              var call726 = callmethodChecked(call725, "first", []);
              return call726;
            };
            func718.paramCounts = [1];
            this.methods["forCollection(1)"] = func718;
            func718.definitionLine = 341;
            func718.definitionModule = "dialect";
            setLineNumber(348);    // compilenode method
            var func727 = function(argcv) {    // method forBody(_)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_node = arguments[curarg];
              curarg++;
              setModuleName("dialect");
              setLineNumber(351);    // compilenode member
              // call case 6: other requests
              var call729 = callmethodChecked(var_node, "with", []);
              var var_sig = call729;
              setLineNumber(352);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              // call case 6: other requests
              var call733 = callmethodChecked(var_sig, "second", []);
              var call734 = callmethodChecked(call733, "args", []);
              var call735 = callmethodChecked(call734, "first", []);
              return call735;
            };
            func727.paramCounts = [1];
            this.methods["forBody(1)"] = func727;
            func727.definitionLine = 348;
            func727.definitionModule = "dialect";
            setLineNumber(9);    // compilenode string
            var string737 = new GraceString("CheckerFailure");
            // call case 6: other requests
            // call case 5: prelude request
            var call739 = callmethodChecked(var_prelude, "Exception", []);
            var call740 = callmethodChecked(call739, "refine(1)", [1], string737);
            var var_CheckerFailure = call740;
            setLineNumber(1);    // compilenode method
            var func741 = function(argcv) {    // method CheckerFailure
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("dialect");
              // CheckerFailure is a simple accessor - elide try ... catch
              setLineNumber(9);    // compilenode identifier
              return var_CheckerFailure;
            };
            func741.paramCounts = [0];
            this.methods["CheckerFailure"] = func741;
            func741.definitionLine = 1;
            func741.definitionModule = "dialect";
            this.methods["CheckerFailure"].debug = "def";
            setLineNumber(111);    // compilenode array
            var array742 = new PrimitiveGraceList([]);
            var var_rules = array742;
            setLineNumber(1);    // compilenode method
            var func743 = function(argcv) {    // method rules
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("dialect");
              // rules is a simple accessor - elide try ... catch
              setLineNumber(111);    // compilenode identifier
              return var_rules;
            };
            func743.paramCounts = [0];
            this.methods["rules"] = func743;
            func743.definitionLine = 1;
            func743.definitionModule = "dialect";
            this.methods["rules"].debug = "def";
            setLineNumber(114);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call745 = callmethodChecked(this, "aMutableMap", []);
            var var_cache = call745;
            setLineNumber(1);    // compilenode method
            var func746 = function(argcv) {    // method cache
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("dialect");
              // cache is a simple accessor - elide try ... catch
              setLineNumber(114);    // compilenode identifier
              return var_cache;
            };
            func746.paramCounts = [0];
            this.methods["cache"] = func746;
            func746.definitionLine = 1;
            func746.definitionModule = "dialect";
            this.methods["cache"].debug = "def";
            setLineNumber(124);    // compilenode num
            var var_currentLine = new GraceNum(0);
            setLineNumber(1);    // compilenode method
            var func747 = function(argcv) {    // method currentLine
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("dialect");
              // currentLine is a simple accessor - elide try ... catch
              setLineNumber(124);    // compilenode identifier
              return var_currentLine;
            };
            func747.paramCounts = [0];
            this.methods["currentLine"] = func747;
            func747.definitionLine = 1;
            func747.definitionModule = "dialect";
            setLineNumber(1);    // compilenode method
            var func748 = function(argcv) {    // method currentLine:=(_)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var___95__var__95__assign__95__tmp = arguments[curarg];
              curarg++;
              setModuleName("dialect");
              var_currentLine = var___95__var__95__assign__95__tmp;
              return GraceDone;
            };
            func748.paramCounts = [1];
            this.methods["currentLine:=(1)"] = func748;
            func748.definitionLine = 1;
            func748.definitionModule = "dialect";
            this.methods["currentLine"].debug = "var";
            setLineNumber(191);    // compilenode object
            var obj749 = Grace_allocObject(GraceObject, "scope");
            obj749.definitionModule = "dialect";
            obj749.definitionLine = 191;
            obj749.outer = this;
            var reader_dialect_outer750 = function() {
              return this.outer;
            };
            obj749.methods["outer"] = reader_dialect_outer750;
            var obj_init_749 = function() {
              var origSuperDepth = superDepth;
              superDepth = obj749;
              var func751 = function(argcv) {    // method size
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                setModuleName("dialect");
                setLineNumber(197);    // compilenode member
                // call case 6: other requests
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call755 = callmethodChecked(this, "variables", []);
                var call756 = callmethodChecked(call755, "stack", []);
                var call757 = callmethodChecked(call756, "size", []);
                if (!Grace_isTrue(callmethod(var_Number, "match(1)", [1], call757)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method size does not have " + 
                            callmethod(var_Number, "asString", [0])._value + "."));
                return call757;
              };
              func751.paramCounts = [0];
              obj749.methods["size"] = func751;
              func751.definitionLine = 196;
              func751.definitionModule = "dialect";
              var func758 = function(argcv) {    // method enter(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_bl = arguments[curarg];
                curarg++;
                setModuleName("dialect");
                setLineNumber(201);    // compilenode member
                // call case 6: other requests
                // call case 3: self.outer request
                var call762 = callmethodChecked(superDepth, "outer", [0]);
                onSelf = true;
                var call763 = callmethodChecked(call762, "aMutableMap", []);
                // call case 6: other requests
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call766 = callmethodChecked(this, "variables", []);
                var call767 = callmethodChecked(call766, "stack", []);
                var call768 = callmethodChecked(call767, "push(1)", [1], call763);
                setLineNumber(202);    // compilenode member
                // call case 6: other requests
                // call case 3: self.outer request
                var call772 = callmethodChecked(superDepth, "outer", [0]);
                onSelf = true;
                var call773 = callmethodChecked(call772, "aMutableMap", []);
                // call case 6: other requests
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call776 = callmethodChecked(this, "methods", []);
                var call777 = callmethodChecked(call776, "stack", []);
                var call778 = callmethodChecked(call777, "push(1)", [1], call773);
                setLineNumber(203);    // compilenode member
                // call case 6: other requests
                // call case 3: self.outer request
                var call782 = callmethodChecked(superDepth, "outer", [0]);
                onSelf = true;
                var call783 = callmethodChecked(call782, "aMutableMap", []);
                // call case 6: other requests
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call786 = callmethodChecked(this, "types", []);
                var call787 = callmethodChecked(call786, "stack", []);
                var call788 = callmethodChecked(call787, "push(1)", [1], call783);
                setLineNumber(205);    // compilenode member
                // call case 6: other requests
                var call790 = callmethodChecked(var_bl, "apply", []);
                var var_result = call790;
                setLineNumber(207);    // compilenode member
                // call case 6: other requests
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call794 = callmethodChecked(this, "variables", []);
                var call795 = callmethodChecked(call794, "stack", []);
                var call796 = callmethodChecked(call795, "pop", []);
                setLineNumber(208);    // compilenode member
                // call case 6: other requests
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call800 = callmethodChecked(this, "methods", []);
                var call801 = callmethodChecked(call800, "stack", []);
                var call802 = callmethodChecked(call801, "pop", []);
                setLineNumber(209);    // compilenode member
                // call case 6: other requests
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call806 = callmethodChecked(this, "types", []);
                var call807 = callmethodChecked(call806, "stack", []);
                var call808 = callmethodChecked(call807, "pop", []);
                setLineNumber(211);    // compilenode identifier
                return var_result;
              };
              func758.paramCounts = [1];
              obj749.methods["enter(1)"] = func758;
              func758.definitionLine = 200;
              func758.definitionModule = "dialect";
              var func809 = function(argcv) {    // method asString
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                setModuleName("dialect");
                setLineNumber(215);    // compilenode string
                var string810 = new GraceString(">");
                // call case 4: self request
                onSelf = true;
                var call813 = callmethodChecked(this, "size", []);
                var string815 = new GraceString("scope<");
                var opresult817 = callmethodChecked(string815, "++(1)", [1], call813);
                var opresult819 = callmethodChecked(opresult817, "++(1)", [1], string810);
                if (!Grace_isTrue(callmethod(var_String, "match(1)", [1], opresult819)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method asString does not have " + 
                            callmethod(var_String, "asString", [0])._value + "."));
                return opresult819;
              };
              func809.paramCounts = [0];
              obj749.methods["asString"] = func809;
              func809.definitionLine = 214;
              func809.definitionModule = "dialect";
              setLineNumber(192);    // compilenode string
              var string821 = new GraceString("variable");
              // call case 6: other requests
              setLineNumber(169);    // compilenode member
              // call case 3: self.outer request
              var call823 = callmethodChecked(superDepth, "outer", [0]);
              onSelf = true;
              var call824 = callmethodChecked(call823, "stackOfKind(1)", [1], string821);
              obj749.data["variables"] = call824;
              var reader_dialect_variables825 = function() {
                return this.data["variables"];
              };
              reader_dialect_variables825.def = true;
              obj749.methods["variables"] = reader_dialect_variables825;
              setLineNumber(193);    // compilenode string
              var string827 = new GraceString("method");
              // call case 6: other requests
              setLineNumber(192);    // compilenode member
              // call case 3: self.outer request
              var call829 = callmethodChecked(superDepth, "outer", [0]);
              onSelf = true;
              var call830 = callmethodChecked(call829, "stackOfKind(1)", [1], string827);
              obj749.data["methods"] = call830;
              var reader_dialect_methods831 = function() {
                return this.data["methods"];
              };
              reader_dialect_methods831.def = true;
              obj749.methods["methods"] = reader_dialect_methods831;
              setLineNumber(194);    // compilenode string
              var string833 = new GraceString("type");
              // call case 6: other requests
              setLineNumber(193);    // compilenode member
              // call case 3: self.outer request
              var call835 = callmethodChecked(superDepth, "outer", [0]);
              onSelf = true;
              var call836 = callmethodChecked(call835, "stackOfKind(1)", [1], string833);
              obj749.data["types"] = call836;
              var reader_dialect_types837 = function() {
                return this.data["types"];
              };
              reader_dialect_types837.def = true;
              obj749.methods["types"] = reader_dialect_types837;
              superDepth = origSuperDepth;
            };
            obj_init_749.apply(obj749, []);
            var var_scope = obj749;
            setLineNumber(1);    // compilenode method
            var func838 = function(argcv) {    // method scope
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("dialect");
              // scope is a simple accessor - elide try ... catch
              setLineNumber(191);    // compilenode identifier
              return var_scope;
            };
            func838.paramCounts = [0];
            this.methods["scope"] = func838;
            func838.definitionLine = 1;
            func838.definitionModule = "dialect";
            this.methods["scope"].debug = "def";
            setLineNumber(255);    // compilenode typedec
            // Type decl AstNode
            //   Type literal 
            var type840 = new GraceType("AstNode");
            type840.typeMethods.push("kind");
            var var_AstNode = type840;
            setLineNumber(1);    // compilenode method
            var func841 = function(argcv) {    // method AstNode
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("dialect");
              // AstNode is a simple accessor - elide try ... catch
              setLineNumber(255);    // compilenode identifier
              return var_AstNode;
            };
            func841.paramCounts = [0];
            this.methods["AstNode"] = func841;
            func841.definitionLine = 1;
            func841.definitionModule = "dialect";
            setLineNumber(272);    // compilenode string
            var string843 = new GraceString("if");
            // call case 4: self request
            onSelf = true;
            var call844 = callmethodChecked(this, "aPatternMatchingNode(1)", [1], string843);
            var var_If = call844;
            setLineNumber(1);    // compilenode method
            var func845 = function(argcv) {    // method If
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("dialect");
              // If is a simple accessor - elide try ... catch
              setLineNumber(272);    // compilenode identifier
              return var_If;
            };
            func845.paramCounts = [0];
            this.methods["If"] = func845;
            func845.definitionLine = 1;
            func845.definitionModule = "dialect";
            this.methods["If"].debug = "def";
            setLineNumber(273);    // compilenode string
            var string847 = new GraceString("block");
            // call case 4: self request
            onSelf = true;
            var call848 = callmethodChecked(this, "aPatternMatchingNode(1)", [1], string847);
            var var_BlockLiteral = call848;
            setLineNumber(1);    // compilenode method
            var func849 = function(argcv) {    // method BlockLiteral
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("dialect");
              // BlockLiteral is a simple accessor - elide try ... catch
              setLineNumber(273);    // compilenode identifier
              return var_BlockLiteral;
            };
            func849.paramCounts = [0];
            this.methods["BlockLiteral"] = func849;
            func849.definitionLine = 1;
            func849.definitionModule = "dialect";
            this.methods["BlockLiteral"].debug = "def";
            setLineNumber(274);    // compilenode string
            var string851 = new GraceString("matchcase");
            // call case 4: self request
            onSelf = true;
            var call852 = callmethodChecked(this, "aPatternMatchingNode(1)", [1], string851);
            var var_MatchCase = call852;
            setLineNumber(1);    // compilenode method
            var func853 = function(argcv) {    // method MatchCase
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("dialect");
              // MatchCase is a simple accessor - elide try ... catch
              setLineNumber(274);    // compilenode identifier
              return var_MatchCase;
            };
            func853.paramCounts = [0];
            this.methods["MatchCase"] = func853;
            func853.definitionLine = 1;
            func853.definitionModule = "dialect";
            this.methods["MatchCase"].debug = "def";
            setLineNumber(275);    // compilenode string
            var string855 = new GraceString("trycatch");
            // call case 4: self request
            onSelf = true;
            var call856 = callmethodChecked(this, "aPatternMatchingNode(1)", [1], string855);
            var var_TryCatch = call856;
            setLineNumber(1);    // compilenode method
            var func857 = function(argcv) {    // method TryCatch
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("dialect");
              // TryCatch is a simple accessor - elide try ... catch
              setLineNumber(275);    // compilenode identifier
              return var_TryCatch;
            };
            func857.paramCounts = [0];
            this.methods["TryCatch"] = func857;
            func857.definitionLine = 1;
            func857.definitionModule = "dialect";
            this.methods["TryCatch"].debug = "def";
            setLineNumber(276);    // compilenode string
            var string859 = new GraceString("methodtype");
            // call case 4: self request
            onSelf = true;
            var call860 = callmethodChecked(this, "aPatternMatchingNode(1)", [1], string859);
            var var_MethodSignature = call860;
            setLineNumber(1);    // compilenode method
            var func861 = function(argcv) {    // method MethodSignature
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("dialect");
              // MethodSignature is a simple accessor - elide try ... catch
              setLineNumber(276);    // compilenode identifier
              return var_MethodSignature;
            };
            func861.paramCounts = [0];
            this.methods["MethodSignature"] = func861;
            func861.definitionLine = 1;
            func861.definitionModule = "dialect";
            this.methods["MethodSignature"].debug = "def";
            setLineNumber(277);    // compilenode string
            var string863 = new GraceString("typeliteral");
            // call case 4: self request
            onSelf = true;
            var call864 = callmethodChecked(this, "aPatternMatchingNode(1)", [1], string863);
            var var_TypeLiteral = call864;
            setLineNumber(1);    // compilenode method
            var func865 = function(argcv) {    // method TypeLiteral
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("dialect");
              // TypeLiteral is a simple accessor - elide try ... catch
              setLineNumber(277);    // compilenode identifier
              return var_TypeLiteral;
            };
            func865.paramCounts = [0];
            this.methods["TypeLiteral"] = func865;
            func865.definitionLine = 1;
            func865.definitionModule = "dialect";
            this.methods["TypeLiteral"].debug = "def";
            setLineNumber(278);    // compilenode string
            var string867 = new GraceString("typedec");
            // call case 4: self request
            onSelf = true;
            var call868 = callmethodChecked(this, "aPatternMatchingNode(1)", [1], string867);
            var var_TypeDeclaration = call868;
            setLineNumber(1);    // compilenode method
            var func869 = function(argcv) {    // method TypeDeclaration
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("dialect");
              // TypeDeclaration is a simple accessor - elide try ... catch
              setLineNumber(278);    // compilenode identifier
              return var_TypeDeclaration;
            };
            func869.paramCounts = [0];
            this.methods["TypeDeclaration"] = func869;
            func869.definitionLine = 1;
            func869.definitionModule = "dialect";
            this.methods["TypeDeclaration"].debug = "def";
            setLineNumber(279);    // compilenode string
            var string871 = new GraceString("dtype");
            // call case 4: self request
            onSelf = true;
            var call872 = callmethodChecked(this, "aPatternMatchingNode(1)", [1], string871);
            var var_TypeAnnotation = call872;
            setLineNumber(1);    // compilenode method
            var func873 = function(argcv) {    // method TypeAnnotation
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("dialect");
              // TypeAnnotation is a simple accessor - elide try ... catch
              setLineNumber(279);    // compilenode identifier
              return var_TypeAnnotation;
            };
            func873.paramCounts = [0];
            this.methods["TypeAnnotation"] = func873;
            func873.definitionLine = 1;
            func873.definitionModule = "dialect";
            this.methods["TypeAnnotation"].debug = "def";
            setLineNumber(280);    // compilenode string
            var string875 = new GraceString("method");
            // call case 4: self request
            onSelf = true;
            var call876 = callmethodChecked(this, "aPatternMatchingNode(1)", [1], string875);
            var var_Method = call876;
            setLineNumber(1);    // compilenode method
            var func877 = function(argcv) {    // method Method
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("dialect");
              // Method is a simple accessor - elide try ... catch
              setLineNumber(280);    // compilenode identifier
              return var_Method;
            };
            func877.paramCounts = [0];
            this.methods["Method"] = func877;
            func877.definitionLine = 1;
            func877.definitionModule = "dialect";
            this.methods["Method"].debug = "def";
            setLineNumber(281);    // compilenode string
            var string879 = new GraceString("parameter");
            // call case 4: self request
            onSelf = true;
            var call880 = callmethodChecked(this, "aPatternMatchingNode(1)", [1], string879);
            var var_Parameter = call880;
            setLineNumber(1);    // compilenode method
            var func881 = function(argcv) {    // method Parameter
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("dialect");
              // Parameter is a simple accessor - elide try ... catch
              setLineNumber(281);    // compilenode identifier
              return var_Parameter;
            };
            func881.paramCounts = [0];
            this.methods["Parameter"] = func881;
            func881.definitionLine = 1;
            func881.definitionModule = "dialect";
            this.methods["Parameter"].debug = "def";
            setLineNumber(282);    // compilenode string
            var string883 = new GraceString("call");
            // call case 4: self request
            onSelf = true;
            var call884 = callmethodChecked(this, "aPatternMatchingNode(1)", [1], string883);
            var var_Request = call884;
            setLineNumber(1);    // compilenode method
            var func885 = function(argcv) {    // method Request
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("dialect");
              // Request is a simple accessor - elide try ... catch
              setLineNumber(282);    // compilenode identifier
              return var_Request;
            };
            func885.paramCounts = [0];
            this.methods["Request"] = func885;
            func885.definitionLine = 1;
            func885.definitionModule = "dialect";
            this.methods["Request"].debug = "def";
            setLineNumber(283);    // compilenode string
            var string887 = new GraceString("class");
            // call case 4: self request
            onSelf = true;
            var call888 = callmethodChecked(this, "aPatternMatchingNode(1)", [1], string887);
            var var_Class = call888;
            setLineNumber(1);    // compilenode method
            var func889 = function(argcv) {    // method Class
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("dialect");
              // Class is a simple accessor - elide try ... catch
              setLineNumber(283);    // compilenode identifier
              return var_Class;
            };
            func889.paramCounts = [0];
            this.methods["Class"] = func889;
            func889.definitionLine = 1;
            func889.definitionModule = "dialect";
            this.methods["Class"].debug = "def";
            setLineNumber(284);    // compilenode string
            var string891 = new GraceString("object");
            // call case 4: self request
            onSelf = true;
            var call892 = callmethodChecked(this, "aPatternMatchingNode(1)", [1], string891);
            var var_ObjectLiteral = call892;
            setLineNumber(1);    // compilenode method
            var func893 = function(argcv) {    // method ObjectLiteral
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("dialect");
              // ObjectLiteral is a simple accessor - elide try ... catch
              setLineNumber(284);    // compilenode identifier
              return var_ObjectLiteral;
            };
            func893.paramCounts = [0];
            this.methods["ObjectLiteral"] = func893;
            func893.definitionLine = 1;
            func893.definitionModule = "dialect";
            this.methods["ObjectLiteral"].debug = "def";
            setLineNumber(285);    // compilenode string
            var string895 = new GraceString("array");
            // call case 4: self request
            onSelf = true;
            var call896 = callmethodChecked(this, "aPatternMatchingNode(1)", [1], string895);
            var var_ArrayLiteral = call896;
            setLineNumber(1);    // compilenode method
            var func897 = function(argcv) {    // method ArrayLiteral
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("dialect");
              // ArrayLiteral is a simple accessor - elide try ... catch
              setLineNumber(285);    // compilenode identifier
              return var_ArrayLiteral;
            };
            func897.paramCounts = [0];
            this.methods["ArrayLiteral"] = func897;
            func897.definitionLine = 1;
            func897.definitionModule = "dialect";
            this.methods["ArrayLiteral"].debug = "def";
            setLineNumber(286);    // compilenode string
            var string899 = new GraceString("member");
            // call case 4: self request
            onSelf = true;
            var call900 = callmethodChecked(this, "aPatternMatchingNode(1)", [1], string899);
            var var_Member = call900;
            setLineNumber(1);    // compilenode method
            var func901 = function(argcv) {    // method Member
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("dialect");
              // Member is a simple accessor - elide try ... catch
              setLineNumber(286);    // compilenode identifier
              return var_Member;
            };
            func901.paramCounts = [0];
            this.methods["Member"] = func901;
            func901.definitionLine = 1;
            func901.definitionModule = "dialect";
            this.methods["Member"].debug = "def";
            setLineNumber(287);    // compilenode string
            var string903 = new GraceString("generic");
            // call case 4: self request
            onSelf = true;
            var call904 = callmethodChecked(this, "aPatternMatchingNode(1)", [1], string903);
            var var_Generic = call904;
            setLineNumber(1);    // compilenode method
            var func905 = function(argcv) {    // method Generic
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("dialect");
              // Generic is a simple accessor - elide try ... catch
              setLineNumber(287);    // compilenode identifier
              return var_Generic;
            };
            func905.paramCounts = [0];
            this.methods["Generic"] = func905;
            func905.definitionLine = 1;
            func905.definitionModule = "dialect";
            this.methods["Generic"].debug = "def";
            setLineNumber(288);    // compilenode string
            var string907 = new GraceString("identifier");
            // call case 4: self request
            onSelf = true;
            var call908 = callmethodChecked(this, "aPatternMatchingNode(1)", [1], string907);
            var var_Identifier = call908;
            setLineNumber(1);    // compilenode method
            var func909 = function(argcv) {    // method Identifier
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("dialect");
              // Identifier is a simple accessor - elide try ... catch
              setLineNumber(288);    // compilenode identifier
              return var_Identifier;
            };
            func909.paramCounts = [0];
            this.methods["Identifier"] = func909;
            func909.definitionLine = 1;
            func909.definitionModule = "dialect";
            this.methods["Identifier"].debug = "def";
            setLineNumber(289);    // compilenode string
            var string911 = new GraceString("octets");
            // call case 4: self request
            onSelf = true;
            var call912 = callmethodChecked(this, "aPatternMatchingNode(1)", [1], string911);
            var var_OctetsLiteral = call912;
            setLineNumber(1);    // compilenode method
            var func913 = function(argcv) {    // method OctetsLiteral
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("dialect");
              // OctetsLiteral is a simple accessor - elide try ... catch
              setLineNumber(289);    // compilenode identifier
              return var_OctetsLiteral;
            };
            func913.paramCounts = [0];
            this.methods["OctetsLiteral"] = func913;
            func913.definitionLine = 1;
            func913.definitionModule = "dialect";
            this.methods["OctetsLiteral"].debug = "def";
            setLineNumber(290);    // compilenode string
            var string915 = new GraceString("string");
            // call case 4: self request
            onSelf = true;
            var call916 = callmethodChecked(this, "aPatternMatchingNode(1)", [1], string915);
            var var_StringLiteral = call916;
            setLineNumber(1);    // compilenode method
            var func917 = function(argcv) {    // method StringLiteral
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("dialect");
              // StringLiteral is a simple accessor - elide try ... catch
              setLineNumber(290);    // compilenode identifier
              return var_StringLiteral;
            };
            func917.paramCounts = [0];
            this.methods["StringLiteral"] = func917;
            func917.definitionLine = 1;
            func917.definitionModule = "dialect";
            this.methods["StringLiteral"].debug = "def";
            setLineNumber(291);    // compilenode string
            var string919 = new GraceString("num");
            // call case 4: self request
            onSelf = true;
            var call920 = callmethodChecked(this, "aPatternMatchingNode(1)", [1], string919);
            var var_NumberLiteral = call920;
            setLineNumber(1);    // compilenode method
            var func921 = function(argcv) {    // method NumberLiteral
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("dialect");
              // NumberLiteral is a simple accessor - elide try ... catch
              setLineNumber(291);    // compilenode identifier
              return var_NumberLiteral;
            };
            func921.paramCounts = [0];
            this.methods["NumberLiteral"] = func921;
            func921.definitionLine = 1;
            func921.definitionModule = "dialect";
            this.methods["NumberLiteral"].debug = "def";
            setLineNumber(292);    // compilenode string
            var string923 = new GraceString("op");
            // call case 4: self request
            onSelf = true;
            var call924 = callmethodChecked(this, "aPatternMatchingNode(1)", [1], string923);
            var var_Operator = call924;
            setLineNumber(1);    // compilenode method
            var func925 = function(argcv) {    // method Operator
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("dialect");
              // Operator is a simple accessor - elide try ... catch
              setLineNumber(292);    // compilenode identifier
              return var_Operator;
            };
            func925.paramCounts = [0];
            this.methods["Operator"] = func925;
            func925.definitionLine = 1;
            func925.definitionModule = "dialect";
            this.methods["Operator"].debug = "def";
            setLineNumber(293);    // compilenode string
            var string927 = new GraceString("bind");
            // call case 4: self request
            onSelf = true;
            var call928 = callmethodChecked(this, "aPatternMatchingNode(1)", [1], string927);
            var var_Bind = call928;
            setLineNumber(1);    // compilenode method
            var func929 = function(argcv) {    // method Bind
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("dialect");
              // Bind is a simple accessor - elide try ... catch
              setLineNumber(293);    // compilenode identifier
              return var_Bind;
            };
            func929.paramCounts = [0];
            this.methods["Bind"] = func929;
            func929.definitionLine = 1;
            func929.definitionModule = "dialect";
            this.methods["Bind"].debug = "def";
            setLineNumber(294);    // compilenode string
            var string931 = new GraceString("defdec");
            // call case 4: self request
            onSelf = true;
            var call932 = callmethodChecked(this, "aPatternMatchingNode(1)", [1], string931);
            var var_Def = call932;
            setLineNumber(1);    // compilenode method
            var func933 = function(argcv) {    // method Def
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("dialect");
              // Def is a simple accessor - elide try ... catch
              setLineNumber(294);    // compilenode identifier
              return var_Def;
            };
            func933.paramCounts = [0];
            this.methods["Def"] = func933;
            func933.definitionLine = 1;
            func933.definitionModule = "dialect";
            this.methods["Def"].debug = "def";
            setLineNumber(295);    // compilenode string
            var string935 = new GraceString("vardec");
            // call case 4: self request
            onSelf = true;
            var call936 = callmethodChecked(this, "aPatternMatchingNode(1)", [1], string935);
            var var_Var = call936;
            setLineNumber(1);    // compilenode method
            var func937 = function(argcv) {    // method Var
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("dialect");
              // Var is a simple accessor - elide try ... catch
              setLineNumber(295);    // compilenode identifier
              return var_Var;
            };
            func937.paramCounts = [0];
            this.methods["Var"] = func937;
            func937.definitionLine = 1;
            func937.definitionModule = "dialect";
            this.methods["Var"].debug = "def";
            setLineNumber(296);    // compilenode string
            var string939 = new GraceString("import");
            // call case 4: self request
            onSelf = true;
            var call940 = callmethodChecked(this, "aPatternMatchingNode(1)", [1], string939);
            var var_Import = call940;
            setLineNumber(1);    // compilenode method
            var func941 = function(argcv) {    // method Import
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("dialect");
              // Import is a simple accessor - elide try ... catch
              setLineNumber(296);    // compilenode identifier
              return var_Import;
            };
            func941.paramCounts = [0];
            this.methods["Import"] = func941;
            func941.definitionLine = 1;
            func941.definitionModule = "dialect";
            this.methods["Import"].debug = "def";
            setLineNumber(297);    // compilenode string
            var string943 = new GraceString("dialect");
            // call case 4: self request
            onSelf = true;
            var call944 = callmethodChecked(this, "aPatternMatchingNode(1)", [1], string943);
            var var_Dialect = call944;
            setLineNumber(1);    // compilenode method
            var func945 = function(argcv) {    // method Dialect
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("dialect");
              // Dialect is a simple accessor - elide try ... catch
              setLineNumber(297);    // compilenode identifier
              return var_Dialect;
            };
            func945.paramCounts = [0];
            this.methods["Dialect"] = func945;
            func945.definitionLine = 1;
            func945.definitionModule = "dialect";
            this.methods["Dialect"].debug = "def";
            setLineNumber(298);    // compilenode string
            var string947 = new GraceString("return");
            // call case 4: self request
            onSelf = true;
            var call948 = callmethodChecked(this, "aPatternMatchingNode(1)", [1], string947);
            var var_Return = call948;
            setLineNumber(1);    // compilenode method
            var func949 = function(argcv) {    // method Return
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("dialect");
              // Return is a simple accessor - elide try ... catch
              setLineNumber(298);    // compilenode identifier
              return var_Return;
            };
            func949.paramCounts = [0];
            this.methods["Return"] = func949;
            func949.definitionLine = 1;
            func949.definitionModule = "dialect";
            this.methods["Return"].debug = "def";
            setLineNumber(299);    // compilenode string
            var string951 = new GraceString("inherits");
            // call case 4: self request
            onSelf = true;
            var call952 = callmethodChecked(this, "aPatternMatchingNode(1)", [1], string951);
            var var_Inherits = call952;
            setLineNumber(1);    // compilenode method
            var func953 = function(argcv) {    // method Inherits
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("dialect");
              // Inherits is a simple accessor - elide try ... catch
              setLineNumber(299);    // compilenode identifier
              return var_Inherits;
            };
            func953.paramCounts = [0];
            this.methods["Inherits"] = func953;
            func953.definitionLine = 1;
            func953.definitionModule = "dialect";
            this.methods["Inherits"].debug = "def";
            setLineNumber(324);    // compilenode string
            var string955 = new GraceString("while()do");
            // call case 4: self request
            onSelf = true;
            var call956 = callmethodChecked(this, "RequestOf(1)", [1], string955);
            var var_WhileRequest = call956;
            setLineNumber(1);    // compilenode method
            var func957 = function(argcv) {    // method WhileRequest
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("dialect");
              // WhileRequest is a simple accessor - elide try ... catch
              setLineNumber(324);    // compilenode identifier
              return var_WhileRequest;
            };
            func957.paramCounts = [0];
            this.methods["WhileRequest"] = func957;
            func957.definitionLine = 1;
            func957.definitionModule = "dialect";
            this.methods["WhileRequest"].debug = "def";
            setLineNumber(325);    // compilenode string
            var string959 = new GraceString("for()do");
            // call case 4: self request
            onSelf = true;
            var call960 = callmethodChecked(this, "RequestOf(1)", [1], string959);
            var var_ForRequest = call960;
            setLineNumber(1);    // compilenode method
            var func961 = function(argcv) {    // method ForRequest
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("dialect");
              // ForRequest is a simple accessor - elide try ... catch
              setLineNumber(325);    // compilenode identifier
              return var_ForRequest;
            };
            func961.paramCounts = [0];
            this.methods["ForRequest"] = func961;
            func961.definitionLine = 1;
            func961.definitionModule = "dialect";
            this.methods["ForRequest"].debug = "def";
            setLineNumber(355);    // compilenode object
            var obj962 = Grace_allocObject(null, "astVisitor");
            obj962.definitionModule = "dialect";
            obj962.definitionLine = 355;
            obj962.outer = this;
            var reader_dialect_outer963 = function() {
              return this.outer;
            };
            obj962.methods["outer"] = reader_dialect_outer963;
            var obj_init_962 = function() {
              var origSuperDepth = superDepth;
              superDepth = obj962;
              var func964 = function(argcv) {    // method checkMatch(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                setModuleName("dialect");
                setLineNumber(359);    // compilenode identifier
                // call case 6: other requests
                // call case 3: self.outer request
                var call967 = callmethodChecked(superDepth, "outer", [0]);
                onSelf = true;
                var call968 = callmethodChecked(call967, "runRules(1)", [1], var_node);
                setLineNumber(360);    // compilenode identifier
                return GraceTrue;
              };
              func964.paramCounts = [1];
              obj962.methods["checkMatch(1)"] = func964;
              func964.definitionLine = 358;
              func964.definitionModule = "dialect";
              var func969 = function(argcv) {    // method visitIf(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                setModuleName("dialect");
                setLineNumber(364);    // compilenode identifier
                // call case 4: self request
                onSelf = true;
                var call971 = callmethodChecked(this, "checkMatch(1)", [1], var_node);
                if (!Grace_isTrue(callmethod(var_Boolean, "match(1)", [1], call971)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitIf(_) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return call971;
              };
              func969.paramCounts = [1];
              obj962.methods["visitIf(1)"] = func969;
              func969.definitionLine = 363;
              func969.definitionModule = "dialect";
              var func972 = function(argcv) {    // method visitBlock(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                setModuleName("dialect");
                setLineNumber(368);    // compilenode identifier
                // call case 6: other requests
                // call case 3: self.outer request
                var call975 = callmethodChecked(superDepth, "outer", [0]);
                onSelf = true;
                var call976 = callmethodChecked(call975, "runRules(1)", [1], var_node);
                setLineNumber(370);    // compilenode member
                // call case 6: other requests
                var call979 = callmethodChecked(var_node, "params", []);
                var block980 = new GraceBlock(this, 370, 1);
                setLineNumber(1);    // compilenode identifier
                block980.real = function(var_param) {
                  setLineNumber(371);    // compilenode identifier
                  // call case 6: other requests
                  var call983 = callmethodChecked(var_aParameter, "fromNode(1)", [1], var_param);
                  // call case 6: other requests
                  // call case 3: self.outer request
                  var call985 = callmethodChecked(superDepth, "outer", [0]);
                  onSelf = true;
                  var call986 = callmethodChecked(call985, "runRules(1)", [1], call983);
                  return call986;
                };
                // call case 5: prelude request
                var call987 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call979, block980);
                setLineNumber(374);    // compilenode member
                // call case 6: other requests
                var call990 = callmethodChecked(var_node, "body", []);
                var block991 = new GraceBlock(this, 374, 1);
                setLineNumber(1);    // compilenode identifier
                block991.real = function(var_stmt) {
                  setLineNumber(375);    // compilenode identifier
                  // call case 6: other requests
                  var call993 = callmethodChecked(var_stmt, "accept(1)", [1], this);
                  return call993;
                };
                // call case 5: prelude request
                var call994 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call990, block991);
                setLineNumber(378);    // compilenode identifier
                return GraceFalse;
              };
              func972.paramCounts = [1];
              obj962.methods["visitBlock(1)"] = func972;
              func972.definitionLine = 367;
              func972.definitionModule = "dialect";
              var func995 = function(argcv) {    // method visitMatchCase(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                setModuleName("dialect");
                setLineNumber(382);    // compilenode identifier
                // call case 4: self request
                onSelf = true;
                var call997 = callmethodChecked(this, "checkMatch(1)", [1], var_node);
                if (!Grace_isTrue(callmethod(var_Boolean, "match(1)", [1], call997)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitMatchCase(_) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return call997;
              };
              func995.paramCounts = [1];
              obj962.methods["visitMatchCase(1)"] = func995;
              func995.definitionLine = 381;
              func995.definitionModule = "dialect";
              var func998 = function(argcv) {    // method visitTryCatch(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                setModuleName("dialect");
                setLineNumber(386);    // compilenode identifier
                // call case 4: self request
                onSelf = true;
                var call1000 = callmethodChecked(this, "checkMatch(1)", [1], var_node);
                if (!Grace_isTrue(callmethod(var_Boolean, "match(1)", [1], call1000)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitTryCatch(_) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return call1000;
              };
              func998.paramCounts = [1];
              obj962.methods["visitTryCatch(1)"] = func998;
              func998.definitionLine = 385;
              func998.definitionModule = "dialect";
              var func1001 = function(argcv) {    // method visitMethodType(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                setModuleName("dialect");
                setLineNumber(390);    // compilenode identifier
                // call case 6: other requests
                // call case 3: self.outer request
                var call1004 = callmethodChecked(superDepth, "outer", [0]);
                onSelf = true;
                var call1005 = callmethodChecked(call1004, "runRules(1)", [1], var_node);
                setLineNumber(392);    // compilenode member
                // call case 6: other requests
                var call1008 = callmethodChecked(var_node, "signature", []);
                var block1009 = new GraceBlock(this, 392, 1);
                setLineNumber(1);    // compilenode identifier
                block1009.real = function(var_part) {
                  setLineNumber(393);    // compilenode member
                  // call case 6: other requests
                  var call1012 = callmethodChecked(var_part, "params", []);
                  var block1013 = new GraceBlock(this, 393, 1);
                  setLineNumber(1);    // compilenode identifier
                  block1013.real = function(var_param) {
                    setLineNumber(394);    // compilenode identifier
                    // call case 6: other requests
                    var call1016 = callmethodChecked(var_aParameter, "fromNode(1)", [1], var_param);
                    // call case 6: other requests
                    // call case 3: self.outer request
                    var call1018 = callmethodChecked(superDepth, "outer", [0]);
                    onSelf = true;
                    var call1019 = callmethodChecked(call1018, "runRules(1)", [1], call1016);
                    return call1019;
                  };
                  // call case 5: prelude request
                  var call1020 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1012, block1013);
                  return call1020;
                };
                // call case 5: prelude request
                var call1021 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1008, block1009);
                setLineNumber(398);    // compilenode identifier
                return GraceFalse;
              };
              func1001.paramCounts = [1];
              obj962.methods["visitMethodType(1)"] = func1001;
              func1001.definitionLine = 389;
              func1001.definitionModule = "dialect";
              var func1022 = function(argcv) {    // method visitType(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                setModuleName("dialect");
                setLineNumber(402);    // compilenode identifier
                // call case 4: self request
                onSelf = true;
                var call1024 = callmethodChecked(this, "checkMatch(1)", [1], var_node);
                if (!Grace_isTrue(callmethod(var_Boolean, "match(1)", [1], call1024)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitType(_) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return call1024;
              };
              func1022.paramCounts = [1];
              obj962.methods["visitType(1)"] = func1022;
              func1022.definitionLine = 401;
              func1022.definitionModule = "dialect";
              var func1025 = function(argcv) {    // method visitMethod(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                setModuleName("dialect");
                setLineNumber(406);    // compilenode identifier
                // call case 6: other requests
                // call case 3: self.outer request
                var call1028 = callmethodChecked(superDepth, "outer", [0]);
                onSelf = true;
                var call1029 = callmethodChecked(call1028, "runRules(1)", [1], var_node);
                setLineNumber(408);    // compilenode member
                // call case 6: other requests
                var call1032 = callmethodChecked(var_node, "signature", []);
                var block1033 = new GraceBlock(this, 408, 1);
                setLineNumber(1);    // compilenode identifier
                block1033.real = function(var_part) {
                  setLineNumber(409);    // compilenode member
                  // call case 6: other requests
                  var call1036 = callmethodChecked(var_part, "params", []);
                  var block1037 = new GraceBlock(this, 409, 1);
                  setLineNumber(1);    // compilenode identifier
                  block1037.real = function(var_param) {
                    setLineNumber(410);    // compilenode identifier
                    // call case 6: other requests
                    var call1040 = callmethodChecked(var_aParameter, "fromNode(1)", [1], var_param);
                    // call case 6: other requests
                    // call case 3: self.outer request
                    var call1042 = callmethodChecked(superDepth, "outer", [0]);
                    onSelf = true;
                    var call1043 = callmethodChecked(call1042, "runRules(1)", [1], call1040);
                    return call1043;
                  };
                  // call case 5: prelude request
                  var call1044 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1036, block1037);
                  return call1044;
                };
                // call case 5: prelude request
                var call1045 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1032, block1033);
                setLineNumber(414);    // compilenode member
                // call case 6: other requests
                var call1048 = callmethodChecked(var_node, "body", []);
                var block1049 = new GraceBlock(this, 414, 1);
                setLineNumber(1);    // compilenode identifier
                block1049.real = function(var_stmt) {
                  setLineNumber(415);    // compilenode identifier
                  // call case 6: other requests
                  var call1051 = callmethodChecked(var_stmt, "accept(1)", [1], this);
                  return call1051;
                };
                // call case 5: prelude request
                var call1052 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1048, block1049);
                setLineNumber(418);    // compilenode identifier
                return GraceFalse;
              };
              func1025.paramCounts = [1];
              obj962.methods["visitMethod(1)"] = func1025;
              func1025.definitionLine = 405;
              func1025.definitionModule = "dialect";
              var func1053 = function(argcv) {    // method visitCall(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                setModuleName("dialect");
                setLineNumber(422);    // compilenode identifier
                // call case 4: self request
                onSelf = true;
                var call1055 = callmethodChecked(this, "checkMatch(1)", [1], var_node);
                setLineNumber(424);    // compilenode member
                // call case 6: other requests
                var call1058 = callmethodChecked(var_node, "value", []);
                var cases1056 = [];
                var block1059 = new GraceBlock(this, 424, 1);
                setLineNumber(0);    // compilenode string
                var string1062 = new GraceString("memb");
                // call case 6: other requests
                // call case 5: prelude request
                var call1064 = callmethodChecked(var_prelude, "VariablePattern", []);
                var call1065 = callmethodChecked(call1064, "new(1)", [1], string1062);
                setLineNumber(424);    // compilenode identifier
                // call case 6: other requests
                setLineNumber(0);    // compilenode member
                // call case 5: prelude request
                var call1067 = callmethodChecked(var_prelude, "AndPattern", []);
                var call1068 = callmethodChecked(call1067, "new(2)", [2], call1065, var_Member);
                block1059.pattern = call1068;
                setLineNumber(424);    // compilenode identifier
                block1059.paramTypes = [var_Member];
                block1059.real = function(var_memb) {
                  setLineNumber(425);    // compilenode identifier
                  // call case 6: other requests
                  // call case 6: other requests
                  var call1071 = callmethodChecked(var_memb, "receiver", []);
                  var call1072 = callmethodChecked(call1071, "accept(1)", [1], this);
                  return call1072;
                };
                cases1056.push(block1059);
                setLineNumber(426);    // compilenode block
                var block1073 = new GraceBlock(this, 426, 1);
                setLineNumber(1);    // compilenode identifier
                block1073.real = function(var___95____95__4) {
                  return GraceDone;
                };
                cases1056.push(block1073);
                setLineNumber(424);    // compilematchcase
                var matchres1056 = matchCase(call1058,cases1056,false);
                setModuleName("dialect");
                setLineNumber(428);    // compilenode member
                // call case 6: other requests
                var call1076 = callmethodChecked(var_node, "with", []);
                var block1077 = new GraceBlock(this, 428, 1);
                setLineNumber(1);    // compilenode identifier
                block1077.real = function(var_part) {
                  setLineNumber(429);    // compilenode member
                  // call case 6: other requests
                  var call1080 = callmethodChecked(var_part, "args", []);
                  var block1081 = new GraceBlock(this, 429, 1);
                  setLineNumber(1);    // compilenode identifier
                  block1081.real = function(var_arg) {
                    setLineNumber(430);    // compilenode identifier
                    // call case 6: other requests
                    var call1083 = callmethodChecked(var_arg, "accept(1)", [1], this);
                    return call1083;
                  };
                  // call case 5: prelude request
                  var call1084 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1080, block1081);
                  return call1084;
                };
                // call case 5: prelude request
                var call1085 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1076, block1077);
                setLineNumber(434);    // compilenode identifier
                return GraceFalse;
              };
              func1053.paramCounts = [1];
              obj962.methods["visitCall(1)"] = func1053;
              func1053.definitionLine = 421;
              func1053.definitionModule = "dialect";
              var func1086 = function(argcv) {    // method visitObject(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                setModuleName("dialect");
                setLineNumber(438);    // compilenode identifier
                // call case 4: self request
                onSelf = true;
                var call1088 = callmethodChecked(this, "checkMatch(1)", [1], var_node);
                if (!Grace_isTrue(callmethod(var_Boolean, "match(1)", [1], call1088)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitObject(_) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return call1088;
              };
              func1086.paramCounts = [1];
              obj962.methods["visitObject(1)"] = func1086;
              func1086.definitionLine = 437;
              func1086.definitionModule = "dialect";
              var func1089 = function(argcv) {    // method visitArray(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                setModuleName("dialect");
                setLineNumber(442);    // compilenode identifier
                // call case 4: self request
                onSelf = true;
                var call1091 = callmethodChecked(this, "checkMatch(1)", [1], var_node);
                if (!Grace_isTrue(callmethod(var_Boolean, "match(1)", [1], call1091)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitArray(_) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return call1091;
              };
              func1089.paramCounts = [1];
              obj962.methods["visitArray(1)"] = func1089;
              func1089.definitionLine = 441;
              func1089.definitionModule = "dialect";
              var func1092 = function(argcv) {    // method visitMember(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                setModuleName("dialect");
                setLineNumber(446);    // compilenode identifier
                // call case 4: self request
                onSelf = true;
                var call1094 = callmethodChecked(this, "checkMatch(1)", [1], var_node);
                if (!Grace_isTrue(callmethod(var_Boolean, "match(1)", [1], call1094)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitMember(_) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return call1094;
              };
              func1092.paramCounts = [1];
              obj962.methods["visitMember(1)"] = func1092;
              func1092.definitionLine = 445;
              func1092.definitionModule = "dialect";
              var func1095 = function(argcv) {    // method visitGeneric(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                setModuleName("dialect");
                setLineNumber(450);    // compilenode identifier
                // call case 4: self request
                onSelf = true;
                var call1097 = callmethodChecked(this, "checkMatch(1)", [1], var_node);
                if (!Grace_isTrue(callmethod(var_Boolean, "match(1)", [1], call1097)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitGeneric(_) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return call1097;
              };
              func1095.paramCounts = [1];
              obj962.methods["visitGeneric(1)"] = func1095;
              func1095.definitionLine = 449;
              func1095.definitionModule = "dialect";
              var func1098 = function(argcv) {    // method visitIdentifier(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                setModuleName("dialect");
                setLineNumber(454);    // compilenode identifier
                // call case 4: self request
                onSelf = true;
                var call1100 = callmethodChecked(this, "checkMatch(1)", [1], var_node);
                if (!Grace_isTrue(callmethod(var_Boolean, "match(1)", [1], call1100)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitIdentifier(_) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return call1100;
              };
              func1098.paramCounts = [1];
              obj962.methods["visitIdentifier(1)"] = func1098;
              func1098.definitionLine = 453;
              func1098.definitionModule = "dialect";
              var func1101 = function(argcv) {    // method visitOctets(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                setModuleName("dialect");
                setLineNumber(458);    // compilenode identifier
                // call case 4: self request
                onSelf = true;
                var call1103 = callmethodChecked(this, "checkMatch(1)", [1], var_node);
                if (!Grace_isTrue(callmethod(var_Boolean, "match(1)", [1], call1103)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitOctets(_) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return call1103;
              };
              func1101.paramCounts = [1];
              obj962.methods["visitOctets(1)"] = func1101;
              func1101.definitionLine = 457;
              func1101.definitionModule = "dialect";
              var func1104 = function(argcv) {    // method visitString(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                setModuleName("dialect");
                setLineNumber(462);    // compilenode identifier
                // call case 4: self request
                onSelf = true;
                var call1106 = callmethodChecked(this, "checkMatch(1)", [1], var_node);
                if (!Grace_isTrue(callmethod(var_Boolean, "match(1)", [1], call1106)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitString(_) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return call1106;
              };
              func1104.paramCounts = [1];
              obj962.methods["visitString(1)"] = func1104;
              func1104.definitionLine = 461;
              func1104.definitionModule = "dialect";
              var func1107 = function(argcv) {    // method visitNum(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                setModuleName("dialect");
                setLineNumber(466);    // compilenode identifier
                // call case 4: self request
                onSelf = true;
                var call1109 = callmethodChecked(this, "checkMatch(1)", [1], var_node);
                if (!Grace_isTrue(callmethod(var_Boolean, "match(1)", [1], call1109)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitNum(_) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return call1109;
              };
              func1107.paramCounts = [1];
              obj962.methods["visitNum(1)"] = func1107;
              func1107.definitionLine = 465;
              func1107.definitionModule = "dialect";
              var func1110 = function(argcv) {    // method visitOp(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                setModuleName("dialect");
                setLineNumber(470);    // compilenode identifier
                // call case 4: self request
                onSelf = true;
                var call1112 = callmethodChecked(this, "checkMatch(1)", [1], var_node);
                if (!Grace_isTrue(callmethod(var_Boolean, "match(1)", [1], call1112)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitOp(_) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return call1112;
              };
              func1110.paramCounts = [1];
              obj962.methods["visitOp(1)"] = func1110;
              func1110.definitionLine = 469;
              func1110.definitionModule = "dialect";
              var func1113 = function(argcv) {    // method visitBind(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                setModuleName("dialect");
                setLineNumber(474);    // compilenode identifier
                // call case 4: self request
                onSelf = true;
                var call1115 = callmethodChecked(this, "checkMatch(1)", [1], var_node);
                if (!Grace_isTrue(callmethod(var_Boolean, "match(1)", [1], call1115)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitBind(_) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return call1115;
              };
              func1113.paramCounts = [1];
              obj962.methods["visitBind(1)"] = func1113;
              func1113.definitionLine = 473;
              func1113.definitionModule = "dialect";
              var func1116 = function(argcv) {    // method visitDefDec(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                setModuleName("dialect");
                setLineNumber(478);    // compilenode identifier
                // call case 4: self request
                onSelf = true;
                var call1118 = callmethodChecked(this, "checkMatch(1)", [1], var_node);
                if (!Grace_isTrue(callmethod(var_Boolean, "match(1)", [1], call1118)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitDefDec(_) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return call1118;
              };
              func1116.paramCounts = [1];
              obj962.methods["visitDefDec(1)"] = func1116;
              func1116.definitionLine = 477;
              func1116.definitionModule = "dialect";
              var func1119 = function(argcv) {    // method visitVarDec(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                setModuleName("dialect");
                setLineNumber(482);    // compilenode identifier
                // call case 4: self request
                onSelf = true;
                var call1121 = callmethodChecked(this, "checkMatch(1)", [1], var_node);
                if (!Grace_isTrue(callmethod(var_Boolean, "match(1)", [1], call1121)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitVarDec(_) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return call1121;
              };
              func1119.paramCounts = [1];
              obj962.methods["visitVarDec(1)"] = func1119;
              func1119.definitionLine = 481;
              func1119.definitionModule = "dialect";
              var func1122 = function(argcv) {    // method visitImport(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                setModuleName("dialect");
                setLineNumber(486);    // compilenode identifier
                // call case 4: self request
                onSelf = true;
                var call1124 = callmethodChecked(this, "checkMatch(1)", [1], var_node);
                if (!Grace_isTrue(callmethod(var_Boolean, "match(1)", [1], call1124)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitImport(_) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return call1124;
              };
              func1122.paramCounts = [1];
              obj962.methods["visitImport(1)"] = func1122;
              func1122.definitionLine = 485;
              func1122.definitionModule = "dialect";
              var func1125 = function(argcv) {    // method visitReturn(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                setModuleName("dialect");
                setLineNumber(490);    // compilenode identifier
                // call case 4: self request
                onSelf = true;
                var call1127 = callmethodChecked(this, "checkMatch(1)", [1], var_node);
                if (!Grace_isTrue(callmethod(var_Boolean, "match(1)", [1], call1127)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitReturn(_) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return call1127;
              };
              func1125.paramCounts = [1];
              obj962.methods["visitReturn(1)"] = func1125;
              func1125.definitionLine = 489;
              func1125.definitionModule = "dialect";
              var func1128 = function(argcv) {    // method visitInherits(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                setModuleName("dialect");
                setLineNumber(494);    // compilenode identifier
                // call case 4: self request
                onSelf = true;
                var call1130 = callmethodChecked(this, "checkMatch(1)", [1], var_node);
                if (!Grace_isTrue(callmethod(var_Boolean, "match(1)", [1], call1130)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitInherits(_) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return call1130;
              };
              func1128.paramCounts = [1];
              obj962.methods["visitInherits(1)"] = func1128;
              func1128.definitionLine = 493;
              func1128.definitionModule = "dialect";
              var func1131 = function(argcv) {    // method visitDialect(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                setModuleName("dialect");
                setLineNumber(498);    // compilenode identifier
                // call case 4: self request
                onSelf = true;
                var call1133 = callmethodChecked(this, "checkMatch(1)", [1], var_node);
                if (!Grace_isTrue(callmethod(var_Boolean, "match(1)", [1], call1133)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitDialect(_) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return call1133;
              };
              func1131.paramCounts = [1];
              obj962.methods["visitDialect(1)"] = func1131;
              func1131.definitionLine = 497;
              func1131.definitionModule = "dialect";
              setLineNumber(356);    // compilenode identifier
              // call case 6: other requests
              var call1135 = callmethodChecked(var_ast, "baseVisitor$object(1)", [0, 1], this);
              obj962.superobj = call1135;
              if (call1135.data) obj962.data = call1135.data;
              if (call1135.hasOwnProperty('_value'))
                  obj962._value = call1135._value;
              superDepth = origSuperDepth;
            };
            obj_init_962.apply(obj962, []);
            var var_astVisitor = obj962;
            setLineNumber(1);    // compilenode method
            var func1136 = function(argcv) {    // method astVisitor
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("dialect");
              // astVisitor is a simple accessor - elide try ... catch
              setLineNumber(355);    // compilenode identifier
              return var_astVisitor;
            };
            func1136.paramCounts = [0];
            this.methods["astVisitor"] = func1136;
            func1136.definitionLine = 1;
            func1136.definitionModule = "dialect";
            this.methods["astVisitor"].debug = "def";
            setLineNumber(503);    // compilenode object
            var obj1137 = Grace_allocObject(GraceObject, "aTypeAnnotation");
            obj1137.definitionModule = "dialect";
            obj1137.definitionLine = 503;
            obj1137.outer = this;
            var reader_dialect_outer1138 = function() {
              return this.outer;
            };
            obj1137.methods["outer"] = reader_dialect_outer1138;
            var obj_init_1137 = function() {
              var origSuperDepth = superDepth;
              superDepth = obj1137;
              var func1139 = function(argcv) {    // method fromNode(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_node = arguments[curarg];
                curarg++;
                setModuleName("dialect");
                setLineNumber(504);    // compilenode object
                var obj1140 = Grace_allocObject(GraceObject, "aTypeAnnotation.fromNode(_)");
                obj1140.definitionModule = "dialect";
                obj1140.definitionLine = 504;
                obj1140.outer = this;
                var reader_dialect_outer1141 = function() {
                  return this.outer;
                };
                obj1140.methods["outer"] = reader_dialect_outer1141;
                var obj_init_1140 = function() {
                  var origSuperDepth = superDepth;
                  superDepth = obj1140;
                  var func1142 = function(argcv) {    // method ==(_)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_o = arguments[curarg];
                    curarg++;
                    setModuleName("dialect");
                    setLineNumber(509);    // compilenode identifier
                    // call case 4: self request
                    onSelf = true;
                    var call1144 = callmethodChecked(this, "isMe(1)", [1], var_o);
                    return call1144;
                  };
                  func1142.paramCounts = [1];
                  obj1140.methods["==(1)"] = func1142;
                  func1142.definitionLine = 509;
                  func1142.definitionModule = "dialect";
                  setLineNumber(505);    // compilenode string
                  var string1145 = new GraceString("dtype");
                  obj1140.data["kind"] = string1145;
                  var reader_dialect_kind1146 = function() {
                    return this.data["kind"];
                  };
                  reader_dialect_kind1146.def = true;
                  obj1140.methods["kind"] = reader_dialect_kind1146;
                  setLineNumber(506);    // compilenode identifier
                  obj1140.data["value"] = var_node;
                  var reader_dialect_value1147 = function() {
                    return this.data["value"];
                  };
                  reader_dialect_value1147.def = true;
                  obj1140.methods["value"] = reader_dialect_value1147;
                  setLineNumber(507);    // compilenode member
                  // call case 6: other requests
                  var call1149 = callmethodChecked(var_node, "line", []);
                  obj1140.data["line"] = call1149;
                  var reader_dialect_line1150 = function() {
                    return this.data["line"];
                  };
                  reader_dialect_line1150.def = true;
                  obj1140.methods["line"] = reader_dialect_line1150;
                  setLineNumber(508);    // compilenode member
                  // call case 6: other requests
                  var call1152 = callmethodChecked(var_node, "linePos", []);
                  obj1140.data["linePos"] = call1152;
                  var reader_dialect_linePos1153 = function() {
                    return this.data["linePos"];
                  };
                  reader_dialect_linePos1153.def = true;
                  obj1140.methods["linePos"] = reader_dialect_linePos1153;
                  superDepth = origSuperDepth;
                };
                obj_init_1140.apply(obj1140, []);
                setLineNumber(504);    // return value
                if (!Grace_isTrue(callmethod(var_TypeAnnotation, "match(1)", [1], obj1140)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method fromNode(_) does not have " + 
                            callmethod(var_TypeAnnotation, "asString", [0])._value + "."));
                return obj1140;
              };
              func1139.paramCounts = [1];
              obj1137.methods["fromNode(1)"] = func1139;
              func1139.definitionLine = 504;
              func1139.definitionModule = "dialect";
                var func1154 = function(argcv) {    // method fromNode(_)$object(_)
                  var curarg = 1;
                  var var_node = arguments[curarg];
                  curarg++;
                  var inheritingObject = arguments[curarg++];
                  // Start argument processing
                  curarg = 1;
                  curarg++;
                  // End argument processing
                  setModuleName("dialect");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var obj1155 = Grace_allocObject(GraceObject, "fromNode(1)");
                  obj1155.definitionModule = "dialect";
                  obj1155.definitionLine = 504;
                  var inho1155 = inheritingObject;
                  while (inho1155.superobj) inho1155 = inho1155.superobj;
                  inho1155.superobj = obj1155;
                  obj1155.data = inheritingObject.data;
                  if (inheritingObject.hasOwnProperty('_value'))
                    obj1155._value = inheritingObject._value;
                  obj1155.outer = this;
                  var reader_dialect_outer1156 = function() {
                    return this.outer;
                  };
                  obj1155.methods["outer"] = reader_dialect_outer1156;
                  var obj_init_1155 = function() {
                    var origSuperDepth = superDepth;
                    superDepth = obj1155;
                    var func1157 = function(argcv) {    // method ==(_)
                      var returnTarget = invocationCount;
                      invocationCount++;
                      var curarg = 1;
                      var var_o = arguments[curarg];
                      curarg++;
                      setModuleName("dialect");
                      setLineNumber(509);    // compilenode identifier
                      // call case 4: self request
                      onSelf = true;
                      var call1159 = callmethodChecked(this, "isMe(1)", [1], var_o);
                      return call1159;
                    };
                    func1157.paramCounts = [1];
                    obj1155.methods["==(1)"] = func1157;
                    func1157.definitionLine = 509;
                    func1157.definitionModule = "dialect";
                    setLineNumber(505);    // compilenode string
                    var string1160 = new GraceString("dtype");
                    obj1155.data["kind"] = string1160;
                    var reader_dialect_kind1161 = function() {
                      return this.data["kind"];
                    };
                    reader_dialect_kind1161.def = true;
                    obj1155.methods["kind"] = reader_dialect_kind1161;
                    setLineNumber(506);    // compilenode identifier
                    obj1155.data["value"] = var_node;
                    var reader_dialect_value1162 = function() {
                      return this.data["value"];
                    };
                    reader_dialect_value1162.def = true;
                    obj1155.methods["value"] = reader_dialect_value1162;
                    setLineNumber(507);    // compilenode member
                    // call case 6: other requests
                    var call1164 = callmethodChecked(var_node, "line", []);
                    obj1155.data["line"] = call1164;
                    var reader_dialect_line1165 = function() {
                      return this.data["line"];
                    };
                    reader_dialect_line1165.def = true;
                    obj1155.methods["line"] = reader_dialect_line1165;
                    setLineNumber(508);    // compilenode member
                    // call case 6: other requests
                    var call1167 = callmethodChecked(var_node, "linePos", []);
                    obj1155.data["linePos"] = call1167;
                    var reader_dialect_linePos1168 = function() {
                      return this.data["linePos"];
                    };
                    reader_dialect_linePos1168.def = true;
                    obj1155.methods["linePos"] = reader_dialect_linePos1168;
                    superDepth = origSuperDepth;
                  };
                  obj_init_1155.apply(inheritingObject, []);
                  return obj1155;
                  };
                  obj1137.methods["fromNode(1)$object(1)"] = func1154;
                superDepth = origSuperDepth;
              };
              obj_init_1137.apply(obj1137, []);
              var var_aTypeAnnotation = obj1137;
              setLineNumber(1);    // compilenode method
              var func1169 = function(argcv) {    // method aTypeAnnotation
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                setModuleName("dialect");
                // aTypeAnnotation is a simple accessor - elide try ... catch
                setLineNumber(503);    // compilenode identifier
                return var_aTypeAnnotation;
              };
              func1169.paramCounts = [0];
              this.methods["aTypeAnnotation"] = func1169;
              func1169.definitionLine = 1;
              func1169.definitionModule = "dialect";
              this.methods["aTypeAnnotation"].debug = "def";
              setLineNumber(513);    // compilenode object
              var obj1170 = Grace_allocObject(GraceObject, "aParameter");
              obj1170.definitionModule = "dialect";
              obj1170.definitionLine = 513;
              obj1170.outer = this;
              var reader_dialect_outer1171 = function() {
                return this.outer;
              };
              obj1170.methods["outer"] = reader_dialect_outer1171;
              var obj_init_1170 = function() {
                var origSuperDepth = superDepth;
                superDepth = obj1170;
                var func1172 = function(argcv) {    // method fromNode(_)
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  var var_node = arguments[curarg];
                  curarg++;
                  setModuleName("dialect");
                  setLineNumber(514);    // compilenode object
                  var obj1173 = Grace_allocObject(GraceObject, "aParameter.fromNode(_)");
                  obj1173.definitionModule = "dialect";
                  obj1173.definitionLine = 514;
                  obj1173.outer = this;
                  var reader_dialect_outer1174 = function() {
                    return this.outer;
                  };
                  obj1173.methods["outer"] = reader_dialect_outer1174;
                  var obj_init_1173 = function() {
                    var origSuperDepth = superDepth;
                    superDepth = obj1173;
                    var func1175 = function(argcv) {    // method ==(_)
                      var returnTarget = invocationCount;
                      invocationCount++;
                      var curarg = 1;
                      var var_o = arguments[curarg];
                      curarg++;
                      setModuleName("dialect");
                      setLineNumber(520);    // compilenode identifier
                      // call case 4: self request
                      onSelf = true;
                      var call1177 = callmethodChecked(this, "isMe(1)", [1], var_o);
                      return call1177;
                    };
                    func1175.paramCounts = [1];
                    obj1173.methods["==(1)"] = func1175;
                    func1175.definitionLine = 520;
                    func1175.definitionModule = "dialect";
                    setLineNumber(515);    // compilenode string
                    var string1178 = new GraceString("parameter");
                    obj1173.data["kind"] = string1178;
                    var reader_dialect_kind1179 = function() {
                      return this.data["kind"];
                    };
                    reader_dialect_kind1179.def = true;
                    obj1173.methods["kind"] = reader_dialect_kind1179;
                    setLineNumber(516);    // compilenode member
                    // call case 6: other requests
                    var call1181 = callmethodChecked(var_node, "value", []);
                    obj1173.data["value"] = call1181;
                    var reader_dialect_value1182 = function() {
                      return this.data["value"];
                    };
                    reader_dialect_value1182.def = true;
                    obj1173.methods["value"] = reader_dialect_value1182;
                    setLineNumber(517);    // compilenode member
                    // call case 6: other requests
                    var call1184 = callmethodChecked(var_node, "dtype", []);
                    obj1173.data["dtype"] = call1184;
                    var reader_dialect_dtype1185 = function() {
                      return this.data["dtype"];
                    };
                    reader_dialect_dtype1185.def = true;
                    obj1173.methods["dtype"] = reader_dialect_dtype1185;
                    setLineNumber(518);    // compilenode member
                    // call case 6: other requests
                    var call1187 = callmethodChecked(var_node, "line", []);
                    obj1173.data["line"] = call1187;
                    var reader_dialect_line1188 = function() {
                      return this.data["line"];
                    };
                    reader_dialect_line1188.def = true;
                    obj1173.methods["line"] = reader_dialect_line1188;
                    setLineNumber(519);    // compilenode member
                    // call case 6: other requests
                    var call1190 = callmethodChecked(var_node, "linePos", []);
                    obj1173.data["linePos"] = call1190;
                    var reader_dialect_linePos1191 = function() {
                      return this.data["linePos"];
                    };
                    reader_dialect_linePos1191.def = true;
                    obj1173.methods["linePos"] = reader_dialect_linePos1191;
                    superDepth = origSuperDepth;
                  };
                  obj_init_1173.apply(obj1173, []);
                  setLineNumber(514);    // return value
                  if (!Grace_isTrue(callmethod(var_Parameter, "match(1)", [1], obj1173)))
                      throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("result of method fromNode(_) does not have " + 
                              callmethod(var_Parameter, "asString", [0])._value + "."));
                  return obj1173;
                };
                func1172.paramCounts = [1];
                obj1170.methods["fromNode(1)"] = func1172;
                func1172.definitionLine = 514;
                func1172.definitionModule = "dialect";
                  var func1192 = function(argcv) {    // method fromNode(_)$object(_)
                    var curarg = 1;
                    var var_node = arguments[curarg];
                    curarg++;
                    var inheritingObject = arguments[curarg++];
                    // Start argument processing
                    curarg = 1;
                    curarg++;
                    // End argument processing
                    setModuleName("dialect");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var obj1193 = Grace_allocObject(GraceObject, "fromNode(1)");
                    obj1193.definitionModule = "dialect";
                    obj1193.definitionLine = 514;
                    var inho1193 = inheritingObject;
                    while (inho1193.superobj) inho1193 = inho1193.superobj;
                    inho1193.superobj = obj1193;
                    obj1193.data = inheritingObject.data;
                    if (inheritingObject.hasOwnProperty('_value'))
                      obj1193._value = inheritingObject._value;
                    obj1193.outer = this;
                    var reader_dialect_outer1194 = function() {
                      return this.outer;
                    };
                    obj1193.methods["outer"] = reader_dialect_outer1194;
                    var obj_init_1193 = function() {
                      var origSuperDepth = superDepth;
                      superDepth = obj1193;
                      var func1195 = function(argcv) {    // method ==(_)
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var curarg = 1;
                        var var_o = arguments[curarg];
                        curarg++;
                        setModuleName("dialect");
                        setLineNumber(520);    // compilenode identifier
                        // call case 4: self request
                        onSelf = true;
                        var call1197 = callmethodChecked(this, "isMe(1)", [1], var_o);
                        return call1197;
                      };
                      func1195.paramCounts = [1];
                      obj1193.methods["==(1)"] = func1195;
                      func1195.definitionLine = 520;
                      func1195.definitionModule = "dialect";
                      setLineNumber(515);    // compilenode string
                      var string1198 = new GraceString("parameter");
                      obj1193.data["kind"] = string1198;
                      var reader_dialect_kind1199 = function() {
                        return this.data["kind"];
                      };
                      reader_dialect_kind1199.def = true;
                      obj1193.methods["kind"] = reader_dialect_kind1199;
                      setLineNumber(516);    // compilenode member
                      // call case 6: other requests
                      var call1201 = callmethodChecked(var_node, "value", []);
                      obj1193.data["value"] = call1201;
                      var reader_dialect_value1202 = function() {
                        return this.data["value"];
                      };
                      reader_dialect_value1202.def = true;
                      obj1193.methods["value"] = reader_dialect_value1202;
                      setLineNumber(517);    // compilenode member
                      // call case 6: other requests
                      var call1204 = callmethodChecked(var_node, "dtype", []);
                      obj1193.data["dtype"] = call1204;
                      var reader_dialect_dtype1205 = function() {
                        return this.data["dtype"];
                      };
                      reader_dialect_dtype1205.def = true;
                      obj1193.methods["dtype"] = reader_dialect_dtype1205;
                      setLineNumber(518);    // compilenode member
                      // call case 6: other requests
                      var call1207 = callmethodChecked(var_node, "line", []);
                      obj1193.data["line"] = call1207;
                      var reader_dialect_line1208 = function() {
                        return this.data["line"];
                      };
                      reader_dialect_line1208.def = true;
                      obj1193.methods["line"] = reader_dialect_line1208;
                      setLineNumber(519);    // compilenode member
                      // call case 6: other requests
                      var call1210 = callmethodChecked(var_node, "linePos", []);
                      obj1193.data["linePos"] = call1210;
                      var reader_dialect_linePos1211 = function() {
                        return this.data["linePos"];
                      };
                      reader_dialect_linePos1211.def = true;
                      obj1193.methods["linePos"] = reader_dialect_linePos1211;
                      superDepth = origSuperDepth;
                    };
                    obj_init_1193.apply(inheritingObject, []);
                    return obj1193;
                    };
                    obj1170.methods["fromNode(1)$object(1)"] = func1192;
                  superDepth = origSuperDepth;
                };
                obj_init_1170.apply(obj1170, []);
                var var_aParameter = obj1170;
                setLineNumber(1);    // compilenode method
                var func1212 = function(argcv) {    // method aParameter
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  setModuleName("dialect");
                  // aParameter is a simple accessor - elide try ... catch
                  setLineNumber(513);    // compilenode identifier
                  return var_aParameter;
                };
                func1212.paramCounts = [0];
                this.methods["aParameter"] = func1212;
                func1212.definitionLine = 1;
                func1212.definitionModule = "dialect";
                this.methods["aParameter"].debug = "def";
                return this;
              }
              gracecode_dialect.imports = ['ast', 'errormessages'];
              if (typeof gctCache !== "undefined")
                gctCache['dialect'] = "classes:\n aParameter\n aTypeAnnotation\nconfidential:\n entryFrom(1)to(1)\n stackOfKind(1)\nconstructors-of:aParameter:\n fromNode(1)\nconstructors-of:aTypeAnnotation:\n fromNode(1)\nfresh-methods:\n RequestOf(1)\n aMutableMap\n aPatternMatchingNode(1)\n entryFrom(1)to(1)\n stackOfKind(1)\nfresh:RequestOf(1):\n &(1)\n makeBindings(1)\n match(1)\n |(1)\nfresh:aMutableMap:\n asString\n at(1)\n at(1)put(1)\n atKey(1)do(1)\n atKey(1)do(1)else(1)\n containsKey(1)\n entries\n isEmpty\n keys\n size\n values\nfresh:aPatternMatchingNode(1):\n match(1)\nfresh:entryFrom(1)to(1):\n key\n value\nfresh:stackOfKind(1):\n at(1)put(1)\n find(1)butIfMissing(1)\n stack\nmethods-of:aParameter.fromNode(1):\n ==(1)\n dtype\n kind\n line\n linePos\n value\nmethods-of:aTypeAnnotation.fromNode(1):\n ==(1)\n kind\n line\n linePos\n value\nmethodtypes-of:AstNode:\n 1 kind -> String\nmodules:\n ast\n errormessages\n identifierKinds\n io\n sys\n util\npath:\n dialect\npublic:\n AndPattern\n ArrayLiteral\n AstNode\n BaseType\n BasicPattern\n Bind\n Binding\n BindingPattern\n Block0\n Block1\n Block2\n Block3\n BlockLiteral\n BoundsError\n CheckerFailure\n Class\n Cmd\n Collection\n ConcurrentModification\n Def\n Dialect\n Dictionary\n Enumerable\n ExceptionKind\n Expandable\n Extractable\n FailedMatch\n ForRequest\n Fun\n Fun2\n Fun3\n Generic\n Identifier\n If\n Import\n Inherits\n Iterable\n Iterator\n IteratorExhausted\n List\n MatchAndDestructuringPattern\n MatchCase\n MatchResult\n Member\n Method\n MethodSignature\n NoSuchObject\n NumberLiteral\n ObjectLiteral\n OctetsLiteral\n Operator\n OrPattern\n Parameter\n Pattern\n Point\n Proc\n Proc2\n Proc3\n Request\n RequestError\n RequestOf(1)\n Return\n Sequence\n Set\n Singleton\n StringLiteral\n SubobjectResponsibility\n SuccessfulMatch\n TryCatch\n TypeAnnotation\n TypeDeclaration\n TypeIntersection\n TypeLiteral\n TypeSubtraction\n TypeUnion\n TypeVariant\n UninitializedVariable\n Var\n VariablePattern\n WhileRequest\n WildcardPattern\n aMutableMap\n aPatternMatchingNode(1)\n abstract\n alwaysEqual\n binding\n check(1)\n checkTypes(1)\n collection\n collections\n createSuggestion\n dictionary(1)\n do(1)while(1)\n emptyDictionary\n emptyList\n emptySequence\n emptySet\n enumerable\n fail(1)\n fail(1)at(1)\n fail(1)from(1)to(1)\n fail(1)from(1)to(1)suggest(1)\n fail(1)when(1)\n for(1)and(1)do(1)\n forBody(1)\n forCollection(1)\n indexable\n list(1)\n max(2)\n methods\n min(2)\n point2Dx(1)y(1)\n range\n repeat(1)times(1)\n required\n rule(1)\n runRules(1)\n scope\n sequence(1)\n set(1)\n typeOf(1)\n valueOf(1)\n when(1)error(1)\n whileBody(1)\n whileCond(1)\ntypes:\n AstNode\n";
              if (typeof originalSourceLines !== "undefined") {
                originalSourceLines["dialect"] = [
                  "#pragma ExtendedLineups",
                  "import \"errormessages\" as errormessages",
                  "import \"ast\" as ast",
                  "",
                  "inherits prelude.methods",
                  "",
                  "// Checker error",
                  "",
                  "def CheckerFailure is public = Exception.refine \"CheckerFailure\"",
                  "",
                  "",
                  "// Helper Map",
                  "",
                  "class entryFrom(key') to(value') is confidential {",
                  "    def key is public = key'",
                  "    var value is public := value'",
                  "}",
                  "",
                  "class aMutableMap {",
                  "",
                  "    def entries = []",
                  "",
                  "    method isEmpty -> Boolean { size == 0 }",
                  "",
                  "    method size -> Number { entries.size }",
                  "",
                  "    method at(key) {",
                  "        atKey(key) do { value -> return value }",
                  "",
                  "        NoSuchObject.raise \"no key {key} in aMutableMap\"",
                  "    }",
                  "",
                  "    method at(key) put(value) -> Done {",
                  "        for(entries) do { entry ->",
                  "            if(entry.key == key) then {",
                  "                entry.value := value",
                  "                return done",
                  "            }",
                  "        }",
                  "",
                  "        entries.push(entryFrom(key) to(value))",
                  "    }",
                  "",
                  "    method keys -> List {",
                  "        def keys' = []",
                  "",
                  "        for(entries) do { entry ->",
                  "            keys'.push(entry.key)",
                  "        }",
                  "",
                  "        return keys'",
                  "    }",
                  "",
                  "    method values -> List {",
                  "        def values' = []",
                  "",
                  "        for(entries) do { entry ->",
                  "            values'.push(entry.value)",
                  "        }",
                  "",
                  "        return values'",
                  "    }",
                  "",
                  "    method containsKey(key) -> Boolean {",
                  "        atKey(key) do { _ -> return true }",
                  "",
                  "        return false",
                  "    }",
                  "",
                  "    method atKey(key) do(block) -> Done {",
                  "        atKey(key) do(block) else {}",
                  "        return",
                  "    }",
                  "",
                  "    method atKey(key) do(block) else(block') {",
                  "        for(entries) do { entry ->",
                  "            if(entry.key == key) then {",
                  "                return block.apply(entry.value)",
                  "            }",
                  "        }",
                  "",
                  "        return block'.apply",
                  "    }",
                  "",
                  "    method asString -> String is override {",
                  "        if(isEmpty) then {",
                  "            return \"\\{\\}\"",
                  "        }",
                  "",
                  "        var out := \"\\{\"",
                  "",
                  "        var once := false",
                  "        for(entries) do { entry ->",
                  "            if(once) then {",
                  "                out := \"{out},\"",
                  "            }",
                  "            out := \"{out} {entry.key} => {entry.value}\"",
                  "            once := true",
                  "        }",
                  "",
                  "        return \"{out} \\}\"",
                  "    }",
                  "",
                  "}",
                  "",
                  "",
                  "",
                  "// Rules",
                  "",
                  "// The defined type rules.",
                  "def rules = []",
                  "",
                  "// The cached type assignments.",
                  "def cache = aMutableMap",
                  "",
                  "// Creates a new type rule.",
                  "method rule(block) -> Done {",
                  "    rules.push(block)",
                  "}",
                  "",
                  "// Short fail-with-message",
                  "",
                  "// Will be updated with each node examined",
                  "var currentLine := 0",
                  "method fail(message) {",
                  "    CheckerFailure.raise (message) with (object {",
                  "        def line is public = currentLine",
                  "        def linePos is public = 1",
                  "    })",
                  "}",
                  "method fail(message)at(p) {",
                  "    CheckerFailure.raise (message) with (p)",
                  "}",
                  "method fail(message)from(startPos)to(endPos)suggest(sugg) {",
                  "    def o = object {",
                  "        def line is public = currentLine",
                  "        def posStart is public = startPos",
                  "        def posEnd is public = endPos",
                  "        def suggestions is public = [sugg]",
                  "    }",
                  "    CheckerFailure.raise (message) with (o)",
                  "}",
                  "method fail(message)from(startPos)to(endPos) {",
                  "    def o = object {",
                  "        def line is public = currentLine",
                  "        def posStart is public = startPos",
                  "        def posEnd is public = endPos",
                  "        def suggestions is public = []",
                  "    }",
                  "    CheckerFailure.raise (message) with (o)",
                  "}",
                  "method fail(msg)when(pat) {",
                  "    rule { x ->",
                  "        def mat = pat.match(x)",
                  "        if (mat && {mat.result}) then {",
                  "            fail(msg)",
                  "        }",
                  "    }",
                  "}",
                  "method createSuggestion {",
                  "    errormessages.suggestion.new",
                  "}",
                  "method when(pat)error(msg) {",
                  "    fail(msg)when(pat)",
                  "}",
                  "",
                  "// Scope",
                  "",
                  "class stackOfKind(kind : String) is confidential {",
                  "    def stack is public = [aMutableMap]",
                  "",
                  "    method at(name : String) put(value) -> Done {",
                  "        stack.last.at(name) put(value)",
                  "    }",
                  "",
                  "    method find(name : String) butIfMissing(bl) {",
                  "        var i := stack.size",
                  "        while { i > 0 } do {",
                  "            stack.at(i).atKey(name) do { value ->",
                  "                return value",
                  "            }",
                  "",
                  "            i := i - 1",
                  "        }",
                  "",
                  "        return bl.apply",
                  "    }",
                  "",
                  "}",
                  "",
                  "def scope is public = object {",
                  "    def variables is public = stackOfKind(\"variable\")",
                  "    def methods is public = stackOfKind(\"method\")",
                  "    def types is public = stackOfKind(\"type\")",
                  "",
                  "    method size -> Number {",
                  "        variables.stack.size",
                  "    }",
                  "",
                  "    method enter(bl) {",
                  "        variables.stack.push(aMutableMap)",
                  "        methods.stack.push(aMutableMap)",
                  "        types.stack.push(aMutableMap)",
                  "",
                  "        def result = bl.apply",
                  "",
                  "        variables.stack.pop",
                  "        methods.stack.pop",
                  "        types.stack.pop",
                  "",
                  "        return result",
                  "    }",
                  "",
                  "    method asString -> String is override {",
                  "        \"scope<{size}>\"",
                  "    }",
                  "}",
                  "",
                  "method checkTypes(node) {",
                  "    node.accept(astVisitor)",
                  "}",
                  "",
                  "method typeOf(node) {",
                  "    checkTypes(node)",
                  "    cache.atKey(node) do { value -> return value }",
                  "    CheckerFailure.raise \"cannot type non-expression\" with (node)",
                  "}",
                  "",
                  "method runRules(node) {",
                  "    // apply all rules to node; returns the last SuccessfulMatch.",
                  "    // if there is no successful match, returns FailedMatch(node).",
                  "    cache.atKey(node) do { value -> return value }",
                  "    currentLine := node.line",
                  "",
                  "    var result := prelude.FailedMatch.new(node)",
                  "    for(rules) do { each ->",
                  "        def matched = each.match(node)",
                  "        if(matched) then {",
                  "            result := matched.result",
                  "            cache.at(node) put(result)",
                  "        }",
                  "    }",
                  "    return result",
                  "}",
                  "",
                  "",
                  "// Type checker",
                  "",
                  "// Checks the defined rules on the given AST.",
                  "method check(nodes) -> Done {",
                  "    // Runs the check on the module object.",
                  "    ast.objectNode.new(nodes, false).accept(astVisitor)",
                  "}",
                  "",
                  "type AstNode = { kind -> String }",
                  "",
                  "class aPatternMatchingNode(kind : String) -> prelude.Pattern {",
                  "    inherits BasicPattern.new",
                  "",
                  "    method match(obj : Object) {",
                  "        match(obj) ",
                  "          case { node : AstNode ->",
                  "            if(kind == node.kind) then {",
                  "                prelude.SuccessfulMatch.new(node, [])",
                  "            } else {",
                  "                prelude.FailedMatch.new(node)",
                  "            }",
                  "          } case { _ -> prelude.FailedMatch.new(obj) }",
                  "    }",
                  "}",
                  "",
                  "def If is public = aPatternMatchingNode \"if\"",
                  "def BlockLiteral is public = aPatternMatchingNode \"block\"",
                  "def MatchCase is public = aPatternMatchingNode \"matchcase\"",
                  "def TryCatch is public = aPatternMatchingNode \"trycatch\"",
                  "def MethodSignature is public = aPatternMatchingNode \"methodtype\"",
                  "def TypeLiteral is public = aPatternMatchingNode \"typeliteral\"",
                  "def TypeDeclaration is public = aPatternMatchingNode \"typedec\"",
                  "def TypeAnnotation is public = aPatternMatchingNode \"dtype\"",
                  "def Method is public = aPatternMatchingNode \"method\"",
                  "def Parameter is public = aPatternMatchingNode \"parameter\"",
                  "def Request is public = aPatternMatchingNode \"call\"",
                  "def Class is public = aPatternMatchingNode \"class\"",
                  "def ObjectLiteral is public = aPatternMatchingNode \"object\"",
                  "def ArrayLiteral is public = aPatternMatchingNode \"array\"",
                  "def Member is public = aPatternMatchingNode \"member\"",
                  "def Generic is public = aPatternMatchingNode \"generic\"",
                  "def Identifier is public = aPatternMatchingNode \"identifier\"",
                  "def OctetsLiteral is public = aPatternMatchingNode \"octets\"",
                  "def StringLiteral is public = aPatternMatchingNode \"string\"",
                  "def NumberLiteral is public = aPatternMatchingNode \"num\"",
                  "def Operator is public = aPatternMatchingNode \"op\"",
                  "def Bind is public = aPatternMatchingNode \"bind\"",
                  "def Def is public = aPatternMatchingNode \"defdec\"",
                  "def Var is public = aPatternMatchingNode \"vardec\"",
                  "def Import is public = aPatternMatchingNode \"import\"",
                  "def Dialect is public = aPatternMatchingNode \"dialect\"",
                  "def Return is public = aPatternMatchingNode \"return\"",
                  "def Inherits is public = aPatternMatchingNode \"inherits\"",
                  "",
                  "// Special requests patterns.",
                  "",
                  "class RequestOf(methodName:String) -> prelude.Pattern {",
                  "",
                  "    inherits prelude.BasicPattern.new",
                  "",
                  "    method match(obj : Object) {",
                  "        match(obj) ",
                  "          case { node : AstNode ->",
                  "            if((node.kind == \"call\") && {",
                  "                node.value.value == methodName",
                  "            }) then {",
                  "                prelude.Successfulmatch.new(node, makeBindings(node))",
                  "            } else {",
                  "                prelude.Failedmatch.new(node)",
                  "            }",
                  "          } case { _ -> prelude.Failedmatch.new(obj)",
                  "          }",
                  "    }",
                  "",
                  "    method makeBindings(node) { [] }",
                  "}",
                  "",
                  "def WhileRequest is public = RequestOf \"while()do\"",
                  "def ForRequest is public = RequestOf \"for()do\"",
                  "",
                  "method whileCond(node) {",
                  "    // answers the condition expression from node, which must be a",
                  "    // a callNode calling \"while(_)do(_)\"",
                  "    def sig = node.with",
                  "    sig.first.args.first",
                  "}",
                  "",
                  "method whileBody(node) {",
                  "    // answers the body expression from node, which must be a",
                  "    // a callNode calling \"while(_)do(_)\"",
                  "    def sig = node.with",
                  "    sig.second.args.first",
                  "}",
                  "",
                  "method forCollection(node) {",
                  "    // answers the collection expression from node, which must be a",
                  "    // a callNode calling \"for(_)do(_)\"",
                  "    def sig = node.with",
                  "    sig.first.args.first",
                  "}",
                  "",
                  "method forBody(node) {",
                  "    // answers the body expression from node, which must be a",
                  "    // a callNode calling \"for(_)do(_)\"",
                  "    def sig = node.with",
                  "    sig.second.args.first",
                  "}",
                  "",
                  "def astVisitor = object {",
                  "    inherits ast.baseVisitor",
                  "",
                  "    method checkMatch(node) -> Boolean {",
                  "        runRules(node)",
                  "        return true",
                  "    }",
                  "",
                  "    method visitIf(node) -> Boolean {",
                  "        checkMatch(node)",
                  "    }",
                  "",
                  "    method visitBlock(node) -> Boolean {",
                  "        runRules(node)",
                  "",
                  "        for(node.params) do { param ->",
                  "            runRules(aParameter.fromNode(param))",
                  "        }",
                  "",
                  "        for(node.body) do { stmt ->",
                  "            stmt.accept(self)",
                  "        }",
                  "",
                  "        return false",
                  "    }",
                  "",
                  "    method visitMatchCase(node) -> Boolean {",
                  "        checkMatch(node)",
                  "    }",
                  "",
                  "    method visitTryCatch(node) -> Boolean {",
                  "        checkMatch(node)",
                  "    }",
                  "",
                  "    method visitMethodType(node) -> Boolean {",
                  "        runRules(node)",
                  "",
                  "        for(node.signature) do { part ->",
                  "            for(part.params) do { param ->",
                  "                runRules(aParameter.fromNode(param))",
                  "            }",
                  "        }",
                  "",
                  "        return false",
                  "    }",
                  "",
                  "    method visitType(node) -> Boolean {",
                  "        checkMatch(node)",
                  "    }",
                  "",
                  "    method visitMethod(node) -> Boolean {",
                  "        runRules(node)",
                  "",
                  "        for(node.signature) do { part ->",
                  "            for(part.params) do { param ->",
                  "                runRules(aParameter.fromNode(param))",
                  "            }",
                  "        }",
                  "",
                  "        for(node.body) do { stmt ->",
                  "            stmt.accept(self)",
                  "        }",
                  "",
                  "        return false",
                  "    }",
                  "",
                  "    method visitCall(node) -> Boolean {",
                  "        checkMatch(node)",
                  "",
                  "        match(node.value) case { memb : Member ->",
                  "            memb.receiver.accept(self)",
                  "        } case { _ -> }",
                  "",
                  "        for(node.with) do { part ->",
                  "            for(part.args) do { arg ->",
                  "                arg.accept(self)",
                  "            }",
                  "        }",
                  "",
                  "        return false",
                  "    }",
                  "",
                  "    method visitObject(node) -> Boolean {",
                  "        checkMatch(node)",
                  "    }",
                  "",
                  "    method visitArray(node) -> Boolean {",
                  "        checkMatch(node)",
                  "    }",
                  "",
                  "    method visitMember(node) -> Boolean {",
                  "        checkMatch(node)",
                  "    }",
                  "",
                  "    method visitGeneric(node) -> Boolean {",
                  "        checkMatch(node)",
                  "    }",
                  "",
                  "    method visitIdentifier(node) -> Boolean {",
                  "        checkMatch(node)",
                  "    }",
                  "",
                  "    method visitOctets(node) -> Boolean {",
                  "        checkMatch(node)",
                  "    }",
                  "",
                  "    method visitString(node) -> Boolean {",
                  "        checkMatch(node)",
                  "    }",
                  "",
                  "    method visitNum(node) -> Boolean {",
                  "        checkMatch(node)",
                  "    }",
                  "",
                  "    method visitOp(node) -> Boolean {",
                  "        checkMatch(node)",
                  "    }",
                  "",
                  "    method visitBind(node) -> Boolean {",
                  "        checkMatch(node)",
                  "    }",
                  "",
                  "    method visitDefDec(node) -> Boolean {",
                  "        checkMatch(node)",
                  "    }",
                  "",
                  "    method visitVarDec(node) -> Boolean {",
                  "        checkMatch(node)",
                  "    }",
                  "",
                  "    method visitImport(node) -> Boolean {",
                  "        checkMatch(node)",
                  "    }",
                  "",
                  "    method visitReturn(node) -> Boolean {",
                  "        checkMatch(node)",
                  "    }",
                  "",
                  "    method visitInherits(node) -> Boolean {",
                  "        checkMatch(node)",
                  "    }",
                  "",
                  "    method visitDialect(node) -> Boolean {",
                  "        checkMatch(node)",
                  "    }",
                  "",
                  "}",
                  "",
                  "def aTypeAnnotation is confidential = object {",
                  "    class fromNode(node) -> TypeAnnotation {",
                  "        def kind is public = \"dtype\"",
                  "        def value is public = node",
                  "        def line is public = node.line",
                  "        def linePos is public = node.linePos",
                  "        method == (o) { self.isMe(o) }",
                  "    }",
                  "}",
                  "",
                  "def aParameter is confidential = object {",
                  "    class fromNode(node) -> Parameter {",
                  "        def kind is public = \"parameter\"",
                  "        def value is public = node.value",
                  "        def dtype is public = node.dtype",
                  "        def line is public = node.line",
                  "        def linePos is public = node.linePos",
                  "        method == (o) { self.isMe(o) }",
                  "    }",
                  "}",
                  "" ];
              }
              if (typeof global !== "undefined")
                global.gracecode_dialect = gracecode_dialect;
              if (typeof window !== "undefined")
                window.gracecode_dialect = gracecode_dialect;
