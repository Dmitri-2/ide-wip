"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_option() {
  setModuleName("option");
  this.definitionModule = "option";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_option_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_option_outer0;
  setLineNumber(7);    // compilenode method
  var func1 = function(argcv) {    // method some(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_contents = arguments[curarg];
    curarg++;
    // Start type arguments
    var var_T = var_Unknown;
    if (argcv.length == 2) {
      if (argcv[1] !== 1) {
        throw new GraceExceptionPacket(ProgrammingErrorObject, 
            new GraceString("wrong number of type arguments for some(_)"));
      }
      var_T = arguments[curarg++];
    }
    // End type arguments
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_T, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in some (arg list 1), which corresponds to parameter contents, does not have " + 
                callmethod(var_T, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("option");
    var obj2 = Grace_allocObject(GraceObject, "some(_)");
    obj2.definitionModule = "option";
    obj2.definitionLine = 7;
    obj2.outer = this;
    var reader_option_outer3 = function() {
      return this.outer;
    };
    obj2.methods["outer"] = reader_option_outer3;
    var obj_init_2 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj2;
      var func4 = function(argcv) {    // method value
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("option");
        // value is a simple accessor - elide try ... catch
        setLineNumber(8);    // compilenode identifier
        return var_contents;
      };
      func4.paramCounts = [0];
      obj2.methods["value"] = func4;
      func4.definitionLine = 8;
      func4.definitionModule = "option";
      var func5 = function(argcv) {    // method do(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_action = arguments[curarg];
        curarg++;
        // Start argument checking
        curarg = 1;
        setLineNumber(9);    // compilenode member
        // call case 5: prelude request
        var call7 = callmethodChecked(var_prelude, "Block1", []);
        if (!Grace_isTrue(callmethod(call7, "match(1)",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in do (arg list 1), which corresponds to parameter action, does not have " + 
                    callmethod(call7, "asString", [0])._value + "."));
        curarg++;
        // End argument checking
        setModuleName("option");
        // call case 4: self request
        onSelf = true;
        var call10 = callmethodChecked(this, "value", []);
        // call case 6: other requests
        var call11 = callmethodChecked(var_action, "apply(1)", [1], call10);
        if (!Grace_isTrue(callmethod(var_Done, "match(1)", [1], call11)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method do(_) does not have " + 
                    callmethod(var_Done, "asString", [0])._value + "."));
        return call11;
      };
      func5.paramCounts = [1];
      obj2.methods["do(1)"] = func5;
      func5.definitionLine = 9;
      func5.definitionModule = "option";
      var func12 = function(argcv) {    // method isSome
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("option");
        // isSome is a simple accessor - elide try ... catch
        setLineNumber(10);    // compilenode identifier
        return GraceTrue;
      };
      func12.paramCounts = [0];
      obj2.methods["isSome"] = func12;
      func12.definitionLine = 10;
      func12.definitionModule = "option";
      var func13 = function(argcv) {    // method isNone
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("option");
        // isNone is a simple accessor - elide try ... catch
        setLineNumber(11);    // compilenode identifier
        return GraceFalse;
      };
      func13.paramCounts = [0];
      obj2.methods["isNone"] = func13;
      func13.definitionLine = 11;
      func13.definitionModule = "option";
      superDepth = origSuperDepth;
    };
    obj_init_2.apply(obj2, []);
    setLineNumber(7);    // return value
    if (!Grace_isTrue(callmethod(var_Option, "match(1)", [1], obj2)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("result of method some(_) does not have " + 
                callmethod(var_Option, "asString", [0])._value + "."));
    return obj2;
  };
  func1.paramTypes = [];
  func1.paramTypes.push([]);
  func1.paramCounts = [1];
  this.methods["some(1)"] = func1;
  func1.definitionLine = 7;
  func1.definitionModule = "option";
    var func14 = function(argcv) {    // method some(_)$object(_)
      var curarg = 1;
      var var_contents = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      // Start type arguments
      var var_T = var_Unknown;
      if (argcv.length == 3) {
        if (argcv[2] !== 1) {
          throw new GraceExceptionPacket(ProgrammingErrorObject, 
              new GraceString("wrong number of type arguments for {o.canonicalName}"));
        }
        var_T = arguments[curarg++];
      }
      // End type arguments
      // Start argument processing
      curarg = 1;
      if (!Grace_isTrue(callmethod(var_T, "match(1)",  [1], arguments[curarg])))
          throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("argument 1 in some (arg list 1), which corresponds to parameter contents, does not have " + 
                  callmethod(var_T, "asString", [0])._value + "."));
      curarg++;
      // End argument processing
      setModuleName("option");
      var returnTarget = invocationCount;
      invocationCount++;
      var obj15 = Grace_allocObject(GraceObject, "some(1)");
      obj15.definitionModule = "option";
      obj15.definitionLine = 7;
      var inho15 = inheritingObject;
      while (inho15.superobj) inho15 = inho15.superobj;
      inho15.superobj = obj15;
      obj15.data = inheritingObject.data;
      if (inheritingObject.hasOwnProperty('_value'))
        obj15._value = inheritingObject._value;
      obj15.outer = this;
      var reader_option_outer16 = function() {
        return this.outer;
      };
      obj15.methods["outer"] = reader_option_outer16;
      var obj_init_15 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj15;
        var func17 = function(argcv) {    // method value
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("option");
          // value is a simple accessor - elide try ... catch
          setLineNumber(8);    // compilenode identifier
          return var_contents;
        };
        func17.paramCounts = [0];
        obj15.methods["value"] = func17;
        func17.definitionLine = 8;
        func17.definitionModule = "option";
        var func18 = function(argcv) {    // method do(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_action = arguments[curarg];
          curarg++;
          // Start argument checking
          curarg = 1;
          setLineNumber(9);    // compilenode member
          // call case 5: prelude request
          var call20 = callmethodChecked(var_prelude, "Block1", []);
          if (!Grace_isTrue(callmethod(call20, "match(1)",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in do (arg list 1), which corresponds to parameter action, does not have " + 
                      callmethod(call20, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("option");
          // call case 4: self request
          onSelf = true;
          var call23 = callmethodChecked(this, "value", []);
          // call case 6: other requests
          var call24 = callmethodChecked(var_action, "apply(1)", [1], call23);
          if (!Grace_isTrue(callmethod(var_Done, "match(1)", [1], call24)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method do(_) does not have " + 
                      callmethod(var_Done, "asString", [0])._value + "."));
          return call24;
        };
        func18.paramCounts = [1];
        obj15.methods["do(1)"] = func18;
        func18.definitionLine = 9;
        func18.definitionModule = "option";
        var func25 = function(argcv) {    // method isSome
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("option");
          // isSome is a simple accessor - elide try ... catch
          setLineNumber(10);    // compilenode identifier
          return GraceTrue;
        };
        func25.paramCounts = [0];
        obj15.methods["isSome"] = func25;
        func25.definitionLine = 10;
        func25.definitionModule = "option";
        var func26 = function(argcv) {    // method isNone
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("option");
          // isNone is a simple accessor - elide try ... catch
          setLineNumber(11);    // compilenode identifier
          return GraceFalse;
        };
        func26.paramCounts = [0];
        obj15.methods["isNone"] = func26;
        func26.definitionLine = 11;
        func26.definitionModule = "option";
        superDepth = origSuperDepth;
      };
      obj_init_15.apply(inheritingObject, []);
      return obj15;
      };
      func14.paramTypes = [];
      func14.paramTypes.push([]);
      this.methods["some(1)$object(1)"] = func14;
    setLineNumber(13);    // compilenode method
    var func27 = function(argcv) {    // method none
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      // Start type arguments
      var var_T = var_Unknown;
      if (argcv.length == 2) {
        if (argcv[1] !== 1) {
          throw new GraceExceptionPacket(ProgrammingErrorObject, 
              new GraceString("wrong number of type arguments for none"));
        }
        var_T = arguments[curarg++];
      }
      // End type arguments
      setModuleName("option");
      var obj28 = Grace_allocObject(GraceObject, "none");
      obj28.definitionModule = "option";
      obj28.definitionLine = 13;
      obj28.outer = this;
      var reader_option_outer29 = function() {
        return this.outer;
      };
      obj28.methods["outer"] = reader_option_outer29;
      var obj_init_28 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj28;
        var func30 = function(argcv) {    // method value
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("option");
          setLineNumber(14);    // compilenode string
          var string32 = new GraceString("none has no value");
          // call case 6: other requests
          // call case 5: prelude request
          var call34 = callmethodChecked(var_prelude, "ProgrammingError", []);
          var call35 = callmethodChecked(call34, "raise(1)", [1], string32);
          if (!Grace_isTrue(callmethod(var_T, "match(1)", [1], call35)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method value does not have " + 
                      callmethod(var_T, "asString", [0])._value + "."));
          return call35;
        };
        func30.paramCounts = [0];
        obj28.methods["value"] = func30;
        func30.definitionLine = 14;
        func30.definitionModule = "option";
        var func36 = function(argcv) {    // method do(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_action = arguments[curarg];
          curarg++;
          // Start argument checking
          curarg = 1;
          setLineNumber(15);    // compilenode member
          // call case 5: prelude request
          var call38 = callmethodChecked(var_prelude, "Block1", []);
          if (!Grace_isTrue(callmethod(call38, "match(1)",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in do (arg list 1), which corresponds to parameter action, does not have " + 
                      callmethod(call38, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("option");
          // do(_) is a simple accessor - elide try ... catch
          return var_done;
        };
        func36.paramCounts = [1];
        obj28.methods["do(1)"] = func36;
        func36.definitionLine = 15;
        func36.definitionModule = "option";
        var func39 = function(argcv) {    // method isSome
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("option");
          // isSome is a simple accessor - elide try ... catch
          setLineNumber(16);    // compilenode identifier
          return GraceFalse;
        };
        func39.paramCounts = [0];
        obj28.methods["isSome"] = func39;
        func39.definitionLine = 16;
        func39.definitionModule = "option";
        var func40 = function(argcv) {    // method isNone
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("option");
          // isNone is a simple accessor - elide try ... catch
          setLineNumber(17);    // compilenode identifier
          return GraceTrue;
        };
        func40.paramCounts = [0];
        obj28.methods["isNone"] = func40;
        func40.definitionLine = 17;
        func40.definitionModule = "option";
        superDepth = origSuperDepth;
      };
      obj_init_28.apply(obj28, []);
      setLineNumber(13);    // return value
      if (!Grace_isTrue(callmethod(var_Option, "match(1)", [1], obj28)))
          throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("result of method none does not have " + 
                  callmethod(var_Option, "asString", [0])._value + "."));
      return obj28;
    };
    func27.paramCounts = [0];
    this.methods["none"] = func27;
    func27.definitionLine = 13;
    func27.definitionModule = "option";
      var func41 = function(argcv) {    // method none$object(_)
        var curarg = 1;
        var inheritingObject = arguments[curarg++];
        // Start type arguments
        var var_T = var_Unknown;
        if (argcv.length == 3) {
          if (argcv[2] !== 1) {
            throw new GraceExceptionPacket(ProgrammingErrorObject, 
                new GraceString("wrong number of type arguments for {o.canonicalName}"));
          }
          var_T = arguments[curarg++];
        }
        // End type arguments
        // Start argument processing
        curarg = 1;
        // End argument processing
        setModuleName("option");
        var returnTarget = invocationCount;
        invocationCount++;
        var obj42 = Grace_allocObject(GraceObject, "none");
        obj42.definitionModule = "option";
        obj42.definitionLine = 13;
        var inho42 = inheritingObject;
        while (inho42.superobj) inho42 = inho42.superobj;
        inho42.superobj = obj42;
        obj42.data = inheritingObject.data;
        if (inheritingObject.hasOwnProperty('_value'))
          obj42._value = inheritingObject._value;
        obj42.outer = this;
        var reader_option_outer43 = function() {
          return this.outer;
        };
        obj42.methods["outer"] = reader_option_outer43;
        var obj_init_42 = function() {
          var origSuperDepth = superDepth;
          superDepth = obj42;
          var func44 = function(argcv) {    // method value
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("option");
            setLineNumber(14);    // compilenode string
            var string46 = new GraceString("none has no value");
            // call case 6: other requests
            // call case 5: prelude request
            var call48 = callmethodChecked(var_prelude, "ProgrammingError", []);
            var call49 = callmethodChecked(call48, "raise(1)", [1], string46);
            if (!Grace_isTrue(callmethod(var_T, "match(1)", [1], call49)))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("result of method value does not have " + 
                        callmethod(var_T, "asString", [0])._value + "."));
            return call49;
          };
          func44.paramCounts = [0];
          obj42.methods["value"] = func44;
          func44.definitionLine = 14;
          func44.definitionModule = "option";
          var func50 = function(argcv) {    // method do(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_action = arguments[curarg];
            curarg++;
            // Start argument checking
            curarg = 1;
            setLineNumber(15);    // compilenode member
            // call case 5: prelude request
            var call52 = callmethodChecked(var_prelude, "Block1", []);
            if (!Grace_isTrue(callmethod(call52, "match(1)",  [1], arguments[curarg])))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("argument 1 in do (arg list 1), which corresponds to parameter action, does not have " + 
                        callmethod(call52, "asString", [0])._value + "."));
            curarg++;
            // End argument checking
            setModuleName("option");
            // do(_) is a simple accessor - elide try ... catch
            return var_done;
          };
          func50.paramCounts = [1];
          obj42.methods["do(1)"] = func50;
          func50.definitionLine = 15;
          func50.definitionModule = "option";
          var func53 = function(argcv) {    // method isSome
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("option");
            // isSome is a simple accessor - elide try ... catch
            setLineNumber(16);    // compilenode identifier
            return GraceFalse;
          };
          func53.paramCounts = [0];
          obj42.methods["isSome"] = func53;
          func53.definitionLine = 16;
          func53.definitionModule = "option";
          var func54 = function(argcv) {    // method isNone
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("option");
            // isNone is a simple accessor - elide try ... catch
            setLineNumber(17);    // compilenode identifier
            return GraceTrue;
          };
          func54.paramCounts = [0];
          obj42.methods["isNone"] = func54;
          func54.definitionLine = 17;
          func54.definitionModule = "option";
          superDepth = origSuperDepth;
        };
        obj_init_42.apply(inheritingObject, []);
        return obj42;
        };
        this.methods["none$object(1)"] = func41;
      setLineNumber(1);    // compilenode typedec
      // Type decl Option
      //   Type literal 
      var type56 = new GraceType("Option");
      type56.typeMethods.push("value");
      type56.typeMethods.push("do(1)");
      type56.typeMethods.push("isSome");
      type56.typeMethods.push("isNone");
      var var_Option = type56;
      var func57 = function(argcv) {    // method Option
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("option");
        // Option is a simple accessor - elide try ... catch
        return var_Option;
      };
      func57.paramCounts = [0];
      this.methods["Option"] = func57;
      func57.definitionLine = 1;
      func57.definitionModule = "option";
      return this;
    }
    gracecode_option.imports = [];
    if (typeof gctCache !== "undefined")
      gctCache['option'] = "classes:\nconfidential:\nfresh-methods:\n none\n some(1)\nfresh:none:\n do(1)\n isNone\n isSome\n value\nfresh:some(1):\n do(1)\n isNone\n isSome\n value\nmethodtypes-of:Option<T>:\n 1 do(action : Block1<T, Done>) -> Done\n 1 isNone -> Boolean\n 1 isSome -> Boolean\n 1 value -> T\nmodules:\npath:\n option\npublic:\n Option\n none\n some(1)\ntypes:\n Option\n";
    if (typeof originalSourceLines !== "undefined") {
      originalSourceLines["option"] = [
        "type Option⟦T⟧ = type {",
        "    value -> T",
        "    do(action:Block1⟦T, Done⟧) -> Done",
        "    isSome -> Boolean",
        "    isNone -> Boolean",
        "}",
        "class some⟦T⟧(contents:T) -> Option {",
        "    method value -> T { contents }",
        "    method do(action:Block1⟦T, Done⟧) -> Done { action.apply(value) }",
        "    method isSome -> Boolean { true }",
        "    method isNone -> Boolean { false }",
        "}",
        "class none⟦T⟧ -> Option {",
        "    method value -> T { ProgrammingError.raise \"none has no value\" }",
        "    method do(action:Block1⟦T, Done⟧) -> Done { done }",
        "    method isSome -> Boolean { false }",
        "    method isNone -> Boolean { true }",
        "}",
        "    " ];
    }
    if (typeof global !== "undefined")
      global.gracecode_option = gracecode_option;
    if (typeof window !== "undefined")
      window.gracecode_option = gracecode_option;
