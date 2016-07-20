"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_date() {
  setModuleName("date");
  this.definitionModule = "date";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_date_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_date_outer0;
  setLineNumber(27);    // compilenode method
  var func1 = function(argcv) {    // method basic
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("date");
    var obj2 = Grace_allocObject(GraceTrait, "basic");
    obj2.definitionModule = "date";
    obj2.definitionLine = 27;
    obj2.outer = this;
    var reader_date_outer3 = function() {
      return this.outer;
    };
    obj2.methods["outer"] = reader_date_outer3;
    var obj_init_2 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj2;
      var func4 = function(argcv) {    // method year
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("date");
        setLineNumber(31);    // compilenode call
           // start native code from line 31
        var result = GraceDone;
        return new GraceNum(this.data.value.getFullYear())
        var nat5 = result;
           // end native code insertion
        if (!Grace_isTrue(callmethod(var_Number, "match(1)", [1], nat5)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method year does not have " + 
                    callmethod(var_Number, "asString", [0])._value + "."));
        return nat5;
      };
      func4.paramCounts = [0];
      obj2.methods["year"] = func4;
      func4.definitionLine = 29;
      func4.definitionModule = "date";
      var func6 = function(argcv) {    // method month
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("date");
        setLineNumber(35);    // compilenode call
           // start native code from line 35
        var result = GraceDone;
        return new GraceNum(this.data.value.getMonth() + 1)
        var nat7 = result;
           // end native code insertion
        if (!Grace_isTrue(callmethod(var_Number, "match(1)", [1], nat7)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method month does not have " + 
                    callmethod(var_Number, "asString", [0])._value + "."));
        return nat7;
      };
      func6.paramCounts = [0];
      obj2.methods["month"] = func6;
      func6.definitionLine = 33;
      func6.definitionModule = "date";
      var func8 = function(argcv) {    // method date
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("date");
        setLineNumber(39);    // compilenode call
           // start native code from line 39
        var result = GraceDone;
        return new GraceNum(this.data.value.getDate())
        var nat9 = result;
           // end native code insertion
        if (!Grace_isTrue(callmethod(var_Number, "match(1)", [1], nat9)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method date does not have " + 
                    callmethod(var_Number, "asString", [0])._value + "."));
        return nat9;
      };
      func8.paramCounts = [0];
      obj2.methods["date"] = func8;
      func8.definitionLine = 37;
      func8.definitionModule = "date";
      var func10 = function(argcv) {    // method day
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("date");
        setLineNumber(43);    // compilenode call
           // start native code from line 43
        var result = GraceDone;
        return new GraceNum(this.data.value.getDay() + 1)
        var nat11 = result;
           // end native code insertion
        if (!Grace_isTrue(callmethod(var_Number, "match(1)", [1], nat11)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method day does not have " + 
                    callmethod(var_Number, "asString", [0])._value + "."));
        return nat11;
      };
      func10.paramCounts = [0];
      obj2.methods["day"] = func10;
      func10.definitionLine = 41;
      func10.definitionModule = "date";
      var func12 = function(argcv) {    // method hour
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("date");
        setLineNumber(47);    // compilenode call
           // start native code from line 47
        var result = GraceDone;
        return new GraceNum(this.data.value.getHours())
        var nat13 = result;
           // end native code insertion
        if (!Grace_isTrue(callmethod(var_Number, "match(1)", [1], nat13)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method hour does not have " + 
                    callmethod(var_Number, "asString", [0])._value + "."));
        return nat13;
      };
      func12.paramCounts = [0];
      obj2.methods["hour"] = func12;
      func12.definitionLine = 45;
      func12.definitionModule = "date";
      var func14 = function(argcv) {    // method minute
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("date");
        setLineNumber(51);    // compilenode call
           // start native code from line 51
        var result = GraceDone;
        return new GraceNum(this.data.value.getMinutes())
        var nat15 = result;
           // end native code insertion
        if (!Grace_isTrue(callmethod(var_Number, "match(1)", [1], nat15)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method minute does not have " + 
                    callmethod(var_Number, "asString", [0])._value + "."));
        return nat15;
      };
      func14.paramCounts = [0];
      obj2.methods["minute"] = func14;
      func14.definitionLine = 49;
      func14.definitionModule = "date";
      var func16 = function(argcv) {    // method second
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("date");
        setLineNumber(55);    // compilenode call
           // start native code from line 55
        var result = GraceDone;
        return new GraceNum(this.data.value.getSeconds())
        var nat17 = result;
           // end native code insertion
        if (!Grace_isTrue(callmethod(var_Number, "match(1)", [1], nat17)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method second does not have " + 
                    callmethod(var_Number, "asString", [0])._value + "."));
        return nat17;
      };
      func16.paramCounts = [0];
      obj2.methods["second"] = func16;
      func16.definitionLine = 53;
      func16.definitionModule = "date";
      var func18 = function(argcv) {    // method millisecond
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("date");
        setLineNumber(59);    // compilenode call
           // start native code from line 59
        var result = GraceDone;
        return new GraceNum(this.data.value.getMilliseconds())
        var nat19 = result;
           // end native code insertion
        if (!Grace_isTrue(callmethod(var_Number, "match(1)", [1], nat19)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method millisecond does not have " + 
                    callmethod(var_Number, "asString", [0])._value + "."));
        return nat19;
      };
      func18.paramCounts = [0];
      obj2.methods["millisecond"] = func18;
      func18.definitionLine = 57;
      func18.definitionModule = "date";
      var func20 = function(argcv) {    // method asString
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("date");
        setLineNumber(62);    // compilenode call
           // start native code from line 62
        var result = GraceDone;
        return new GraceString(this.data.value.toString())
        var nat21 = result;
           // end native code insertion
        if (!Grace_isTrue(callmethod(var_String, "match(1)", [1], nat21)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method asString does not have " + 
                    callmethod(var_String, "asString", [0])._value + "."));
        return nat21;
      };
      func20.paramCounts = [0];
      obj2.methods["asString"] = func20;
      func20.definitionLine = 61;
      func20.definitionModule = "date";
      var func22 = function(argcv) {    // method asDateString
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("date");
        setLineNumber(65);    // compilenode call
           // start native code from line 65
        var result = GraceDone;
        return new GraceString(this.data.value.toDateString())
        var nat23 = result;
           // end native code insertion
        if (!Grace_isTrue(callmethod(var_String, "match(1)", [1], nat23)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method asDateString does not have " + 
                    callmethod(var_String, "asString", [0])._value + "."));
        return nat23;
      };
      func22.paramCounts = [0];
      obj2.methods["asDateString"] = func22;
      func22.definitionLine = 64;
      func22.definitionModule = "date";
      var func24 = function(argcv) {    // method asTimeString
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("date");
        setLineNumber(68);    // compilenode call
           // start native code from line 68
        var result = GraceDone;
        return new GraceString(this.data.value.toTimeString())
        var nat25 = result;
           // end native code insertion
        if (!Grace_isTrue(callmethod(var_String, "match(1)", [1], nat25)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method asTimeString does not have " + 
                    callmethod(var_String, "asString", [0])._value + "."));
        return nat25;
      };
      func24.paramCounts = [0];
      obj2.methods["asTimeString"] = func24;
      func24.definitionLine = 67;
      func24.definitionModule = "date";
      var func26 = function(argcv) {    // method asIsoString
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("date");
        setLineNumber(71);    // compilenode call
           // start native code from line 71
        var result = GraceDone;
        return new GraceString(this.data.value.toISOString())
        var nat27 = result;
           // end native code insertion
        if (!Grace_isTrue(callmethod(var_String, "match(1)", [1], nat27)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method asIsoString does not have " + 
                    callmethod(var_String, "asString", [0])._value + "."));
        return nat27;
      };
      func26.paramCounts = [0];
      obj2.methods["asIsoString"] = func26;
      func26.definitionLine = 70;
      func26.definitionModule = "date";
      var func28 = function(argcv) {    // method asMilliseconds
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("date");
        setLineNumber(75);    // compilenode call
           // start native code from line 75
        var result = GraceDone;
        return new GraceNum(this.data.value.getTime())
        var nat29 = result;
           // end native code insertion
        if (!Grace_isTrue(callmethod(var_Number, "match(1)", [1], nat29)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method asMilliseconds does not have " + 
                    callmethod(var_Number, "asString", [0])._value + "."));
        return nat29;
      };
      func28.paramCounts = [0];
      obj2.methods["asMilliseconds"] = func28;
      func28.definitionLine = 73;
      func28.definitionModule = "date";
      var func30 = function(argcv) {    // method +(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_other = arguments[curarg];
        curarg++;
        // Start argument checking
        curarg = 1;
        setLineNumber(77);    // compilenode identifier
        if (!Grace_isTrue(callmethod(var_Date, "match(1)",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in + (arg list 1), which corresponds to parameter other, does not have " + 
                    callmethod(var_Date, "asString", [0])._value + "."));
        curarg++;
        // End argument checking
        setModuleName("date");
        setLineNumber(78);    // compilenode member
        // call case 6: other requests
        var call33 = callmethodChecked(var_other, "asMilliseconds", []);
        // call case 4: self request
        onSelf = true;
        var call36 = callmethodChecked(this, "asMilliseconds", []);
        var opresult38 = callmethodChecked(call36, "+(1)", [1], call33);
        // call case 6: other requests
        // call case 3: self.outer request
        var call40 = callmethodChecked(superDepth, "outer", [0]);
        onSelf = true;
        var call41 = callmethodChecked(call40, "milliseconds(1)", [1], opresult38);
        if (!Grace_isTrue(callmethod(var_Date, "match(1)", [1], call41)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method +(_) does not have " + 
                    callmethod(var_Date, "asString", [0])._value + "."));
        return call41;
      };
      func30.paramTypes = [];
      func30.paramTypes.push([]);
      func30.paramCounts = [1];
      obj2.methods["+(1)"] = func30;
      func30.definitionLine = 77;
      func30.definitionModule = "date";
      var func42 = function(argcv) {    // method -(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_other = arguments[curarg];
        curarg++;
        // Start argument checking
        curarg = 1;
        setLineNumber(80);    // compilenode identifier
        if (!Grace_isTrue(callmethod(var_Date, "match(1)",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in - (arg list 1), which corresponds to parameter other, does not have " + 
                    callmethod(var_Date, "asString", [0])._value + "."));
        curarg++;
        // End argument checking
        setModuleName("date");
        setLineNumber(81);    // compilenode member
        // call case 6: other requests
        var call45 = callmethodChecked(var_other, "asMilliseconds", []);
        // call case 4: self request
        onSelf = true;
        var call48 = callmethodChecked(this, "asMilliseconds", []);
        var diff50 = callmethodChecked(call48, "-(1)", [1], call45);
        // call case 6: other requests
        // call case 3: self.outer request
        var call52 = callmethodChecked(superDepth, "outer", [0]);
        onSelf = true;
        var call53 = callmethodChecked(call52, "milliseconds(1)", [1], diff50);
        if (!Grace_isTrue(callmethod(var_Date, "match(1)", [1], call53)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method -(_) does not have " + 
                    callmethod(var_Date, "asString", [0])._value + "."));
        return call53;
      };
      func42.paramTypes = [];
      func42.paramTypes.push([]);
      func42.paramCounts = [1];
      obj2.methods["-(1)"] = func42;
      func42.definitionLine = 80;
      func42.definitionModule = "date";
      var func54 = function(argcv) {    // method *(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_factor = arguments[curarg];
        curarg++;
        // Start argument checking
        curarg = 1;
        setLineNumber(83);    // compilenode identifier
        if (!Grace_isTrue(callmethod(var_Number, "match(1)",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in * (arg list 1), which corresponds to parameter factor, does not have " + 
                    callmethod(var_Number, "asString", [0])._value + "."));
        curarg++;
        // End argument checking
        setModuleName("date");
        setLineNumber(84);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call58 = callmethodChecked(this, "asMilliseconds", []);
        var prod60 = callmethodChecked(call58, "*(1)", [1], var_factor);
        // call case 6: other requests
        // call case 3: self.outer request
        var call62 = callmethodChecked(superDepth, "outer", [0]);
        onSelf = true;
        var call63 = callmethodChecked(call62, "milliseconds(1)", [1], prod60);
        if (!Grace_isTrue(callmethod(var_Date, "match(1)", [1], call63)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method *(_) does not have " + 
                    callmethod(var_Date, "asString", [0])._value + "."));
        return call63;
      };
      func54.paramTypes = [];
      func54.paramTypes.push([type_Number, "factor"]);
      func54.paramCounts = [1];
      obj2.methods["*(1)"] = func54;
      func54.definitionLine = 83;
      func54.definitionModule = "date";
      var func64 = function(argcv) {    // method reverseTimesNumber(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_factor = arguments[curarg];
        curarg++;
        // Start argument checking
        curarg = 1;
        setLineNumber(86);    // compilenode identifier
        if (!Grace_isTrue(callmethod(var_Number, "match(1)",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in reverseTimesNumber (arg list 1), which corresponds to parameter factor, does not have " + 
                    callmethod(var_Number, "asString", [0])._value + "."));
        curarg++;
        // End argument checking
        setModuleName("date");
        setLineNumber(87);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call67 = callmethodChecked(this, "asMilliseconds", []);
        var prod70 = callmethodChecked(var_factor, "*(1)", [1], call67);
        // call case 6: other requests
        // call case 3: self.outer request
        var call72 = callmethodChecked(superDepth, "outer", [0]);
        onSelf = true;
        var call73 = callmethodChecked(call72, "milliseconds(1)", [1], prod70);
        if (!Grace_isTrue(callmethod(var_Date, "match(1)", [1], call73)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method reverseTimesNumber(_) does not have " + 
                    callmethod(var_Date, "asString", [0])._value + "."));
        return call73;
      };
      func64.paramTypes = [];
      func64.paramTypes.push([type_Number, "factor"]);
      func64.paramCounts = [1];
      obj2.methods["reverseTimesNumber(1)"] = func64;
      func64.definitionLine = 86;
      func64.definitionModule = "date";
      var func74 = function(argcv) {    // method ==(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_other = arguments[curarg];
        curarg++;
        // Start argument checking
        curarg = 1;
        setLineNumber(89);    // compilenode identifier
        if (!Grace_isTrue(callmethod(var_Date, "match(1)",  [1], arguments[curarg])))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("argument 1 in == (arg list 1), which corresponds to parameter other, does not have " + 
                    callmethod(var_Date, "asString", [0])._value + "."));
        curarg++;
        // End argument checking
        setModuleName("date");
        setLineNumber(90);    // compilenode member
        // call case 6: other requests
        var call76 = callmethodChecked(var_other, "asMilliseconds", []);
        // call case 4: self request
        onSelf = true;
        var call79 = callmethodChecked(this, "asMilliseconds", []);
        var opresult81 = callmethodChecked(call79, "==(1)", [1], call76);
        if (!Grace_isTrue(callmethod(var_Boolean, "match(1)", [1], opresult81)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method ==(_) does not have " + 
                    callmethod(var_Boolean, "asString", [0])._value + "."));
        return opresult81;
      };
      func74.paramTypes = [];
      func74.paramTypes.push([]);
      func74.paramCounts = [1];
      obj2.methods["==(1)"] = func74;
      func74.definitionLine = 89;
      func74.definitionModule = "date";
      superDepth = origSuperDepth;
    };
    obj_init_2.apply(obj2, []);
    return obj2;
  };
  func1.paramCounts = [0];
  this.methods["basic"] = func1;
  func1.definitionLine = 27;
  func1.definitionModule = "date";
    var func82 = function(argcv) {    // method basic$object(_)
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      // Start argument processing
      curarg = 1;
      // End argument processing
      setModuleName("date");
      var returnTarget = invocationCount;
      invocationCount++;
      var obj83 = Grace_allocObject(GraceTrait, "basic");
      obj83.definitionModule = "date";
      obj83.definitionLine = 27;
      var inho83 = inheritingObject;
      while (inho83.superobj) inho83 = inho83.superobj;
      inho83.superobj = obj83;
      obj83.data = inheritingObject.data;
      if (inheritingObject.hasOwnProperty('_value'))
        obj83._value = inheritingObject._value;
      obj83.outer = this;
      var reader_date_outer84 = function() {
        return this.outer;
      };
      obj83.methods["outer"] = reader_date_outer84;
      var obj_init_83 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj83;
        var func85 = function(argcv) {    // method year
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("date");
          setLineNumber(31);    // compilenode call
             // start native code from line 31
          var result = GraceDone;
          return new GraceNum(this.data.value.getFullYear())
          var nat86 = result;
             // end native code insertion
          if (!Grace_isTrue(callmethod(var_Number, "match(1)", [1], nat86)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method year does not have " + 
                      callmethod(var_Number, "asString", [0])._value + "."));
          return nat86;
        };
        func85.paramCounts = [0];
        obj83.methods["year"] = func85;
        func85.definitionLine = 29;
        func85.definitionModule = "date";
        var func87 = function(argcv) {    // method month
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("date");
          setLineNumber(35);    // compilenode call
             // start native code from line 35
          var result = GraceDone;
          return new GraceNum(this.data.value.getMonth() + 1)
          var nat88 = result;
             // end native code insertion
          if (!Grace_isTrue(callmethod(var_Number, "match(1)", [1], nat88)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method month does not have " + 
                      callmethod(var_Number, "asString", [0])._value + "."));
          return nat88;
        };
        func87.paramCounts = [0];
        obj83.methods["month"] = func87;
        func87.definitionLine = 33;
        func87.definitionModule = "date";
        var func89 = function(argcv) {    // method date
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("date");
          setLineNumber(39);    // compilenode call
             // start native code from line 39
          var result = GraceDone;
          return new GraceNum(this.data.value.getDate())
          var nat90 = result;
             // end native code insertion
          if (!Grace_isTrue(callmethod(var_Number, "match(1)", [1], nat90)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method date does not have " + 
                      callmethod(var_Number, "asString", [0])._value + "."));
          return nat90;
        };
        func89.paramCounts = [0];
        obj83.methods["date"] = func89;
        func89.definitionLine = 37;
        func89.definitionModule = "date";
        var func91 = function(argcv) {    // method day
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("date");
          setLineNumber(43);    // compilenode call
             // start native code from line 43
          var result = GraceDone;
          return new GraceNum(this.data.value.getDay() + 1)
          var nat92 = result;
             // end native code insertion
          if (!Grace_isTrue(callmethod(var_Number, "match(1)", [1], nat92)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method day does not have " + 
                      callmethod(var_Number, "asString", [0])._value + "."));
          return nat92;
        };
        func91.paramCounts = [0];
        obj83.methods["day"] = func91;
        func91.definitionLine = 41;
        func91.definitionModule = "date";
        var func93 = function(argcv) {    // method hour
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("date");
          setLineNumber(47);    // compilenode call
             // start native code from line 47
          var result = GraceDone;
          return new GraceNum(this.data.value.getHours())
          var nat94 = result;
             // end native code insertion
          if (!Grace_isTrue(callmethod(var_Number, "match(1)", [1], nat94)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method hour does not have " + 
                      callmethod(var_Number, "asString", [0])._value + "."));
          return nat94;
        };
        func93.paramCounts = [0];
        obj83.methods["hour"] = func93;
        func93.definitionLine = 45;
        func93.definitionModule = "date";
        var func95 = function(argcv) {    // method minute
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("date");
          setLineNumber(51);    // compilenode call
             // start native code from line 51
          var result = GraceDone;
          return new GraceNum(this.data.value.getMinutes())
          var nat96 = result;
             // end native code insertion
          if (!Grace_isTrue(callmethod(var_Number, "match(1)", [1], nat96)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method minute does not have " + 
                      callmethod(var_Number, "asString", [0])._value + "."));
          return nat96;
        };
        func95.paramCounts = [0];
        obj83.methods["minute"] = func95;
        func95.definitionLine = 49;
        func95.definitionModule = "date";
        var func97 = function(argcv) {    // method second
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("date");
          setLineNumber(55);    // compilenode call
             // start native code from line 55
          var result = GraceDone;
          return new GraceNum(this.data.value.getSeconds())
          var nat98 = result;
             // end native code insertion
          if (!Grace_isTrue(callmethod(var_Number, "match(1)", [1], nat98)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method second does not have " + 
                      callmethod(var_Number, "asString", [0])._value + "."));
          return nat98;
        };
        func97.paramCounts = [0];
        obj83.methods["second"] = func97;
        func97.definitionLine = 53;
        func97.definitionModule = "date";
        var func99 = function(argcv) {    // method millisecond
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("date");
          setLineNumber(59);    // compilenode call
             // start native code from line 59
          var result = GraceDone;
          return new GraceNum(this.data.value.getMilliseconds())
          var nat100 = result;
             // end native code insertion
          if (!Grace_isTrue(callmethod(var_Number, "match(1)", [1], nat100)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method millisecond does not have " + 
                      callmethod(var_Number, "asString", [0])._value + "."));
          return nat100;
        };
        func99.paramCounts = [0];
        obj83.methods["millisecond"] = func99;
        func99.definitionLine = 57;
        func99.definitionModule = "date";
        var func101 = function(argcv) {    // method asString
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("date");
          setLineNumber(62);    // compilenode call
             // start native code from line 62
          var result = GraceDone;
          return new GraceString(this.data.value.toString())
          var nat102 = result;
             // end native code insertion
          if (!Grace_isTrue(callmethod(var_String, "match(1)", [1], nat102)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method asString does not have " + 
                      callmethod(var_String, "asString", [0])._value + "."));
          return nat102;
        };
        func101.paramCounts = [0];
        obj83.methods["asString"] = func101;
        func101.definitionLine = 61;
        func101.definitionModule = "date";
        var func103 = function(argcv) {    // method asDateString
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("date");
          setLineNumber(65);    // compilenode call
             // start native code from line 65
          var result = GraceDone;
          return new GraceString(this.data.value.toDateString())
          var nat104 = result;
             // end native code insertion
          if (!Grace_isTrue(callmethod(var_String, "match(1)", [1], nat104)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method asDateString does not have " + 
                      callmethod(var_String, "asString", [0])._value + "."));
          return nat104;
        };
        func103.paramCounts = [0];
        obj83.methods["asDateString"] = func103;
        func103.definitionLine = 64;
        func103.definitionModule = "date";
        var func105 = function(argcv) {    // method asTimeString
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("date");
          setLineNumber(68);    // compilenode call
             // start native code from line 68
          var result = GraceDone;
          return new GraceString(this.data.value.toTimeString())
          var nat106 = result;
             // end native code insertion
          if (!Grace_isTrue(callmethod(var_String, "match(1)", [1], nat106)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method asTimeString does not have " + 
                      callmethod(var_String, "asString", [0])._value + "."));
          return nat106;
        };
        func105.paramCounts = [0];
        obj83.methods["asTimeString"] = func105;
        func105.definitionLine = 67;
        func105.definitionModule = "date";
        var func107 = function(argcv) {    // method asIsoString
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("date");
          setLineNumber(71);    // compilenode call
             // start native code from line 71
          var result = GraceDone;
          return new GraceString(this.data.value.toISOString())
          var nat108 = result;
             // end native code insertion
          if (!Grace_isTrue(callmethod(var_String, "match(1)", [1], nat108)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method asIsoString does not have " + 
                      callmethod(var_String, "asString", [0])._value + "."));
          return nat108;
        };
        func107.paramCounts = [0];
        obj83.methods["asIsoString"] = func107;
        func107.definitionLine = 70;
        func107.definitionModule = "date";
        var func109 = function(argcv) {    // method asMilliseconds
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("date");
          setLineNumber(75);    // compilenode call
             // start native code from line 75
          var result = GraceDone;
          return new GraceNum(this.data.value.getTime())
          var nat110 = result;
             // end native code insertion
          if (!Grace_isTrue(callmethod(var_Number, "match(1)", [1], nat110)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method asMilliseconds does not have " + 
                      callmethod(var_Number, "asString", [0])._value + "."));
          return nat110;
        };
        func109.paramCounts = [0];
        obj83.methods["asMilliseconds"] = func109;
        func109.definitionLine = 73;
        func109.definitionModule = "date";
        var func111 = function(argcv) {    // method +(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_other = arguments[curarg];
          curarg++;
          // Start argument checking
          curarg = 1;
          setLineNumber(77);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Date, "match(1)",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in + (arg list 1), which corresponds to parameter other, does not have " + 
                      callmethod(var_Date, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("date");
          setLineNumber(78);    // compilenode member
          // call case 6: other requests
          var call114 = callmethodChecked(var_other, "asMilliseconds", []);
          // call case 4: self request
          onSelf = true;
          var call117 = callmethodChecked(this, "asMilliseconds", []);
          var opresult119 = callmethodChecked(call117, "+(1)", [1], call114);
          // call case 6: other requests
          // call case 3: self.outer request
          var call121 = callmethodChecked(superDepth, "outer", [0]);
          onSelf = true;
          var call122 = callmethodChecked(call121, "milliseconds(1)", [1], opresult119);
          if (!Grace_isTrue(callmethod(var_Date, "match(1)", [1], call122)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method +(_) does not have " + 
                      callmethod(var_Date, "asString", [0])._value + "."));
          return call122;
        };
        func111.paramTypes = [];
        func111.paramTypes.push([]);
        func111.paramCounts = [1];
        obj83.methods["+(1)"] = func111;
        func111.definitionLine = 77;
        func111.definitionModule = "date";
        var func123 = function(argcv) {    // method -(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_other = arguments[curarg];
          curarg++;
          // Start argument checking
          curarg = 1;
          setLineNumber(80);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Date, "match(1)",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in - (arg list 1), which corresponds to parameter other, does not have " + 
                      callmethod(var_Date, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("date");
          setLineNumber(81);    // compilenode member
          // call case 6: other requests
          var call126 = callmethodChecked(var_other, "asMilliseconds", []);
          // call case 4: self request
          onSelf = true;
          var call129 = callmethodChecked(this, "asMilliseconds", []);
          var diff131 = callmethodChecked(call129, "-(1)", [1], call126);
          // call case 6: other requests
          // call case 3: self.outer request
          var call133 = callmethodChecked(superDepth, "outer", [0]);
          onSelf = true;
          var call134 = callmethodChecked(call133, "milliseconds(1)", [1], diff131);
          if (!Grace_isTrue(callmethod(var_Date, "match(1)", [1], call134)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method -(_) does not have " + 
                      callmethod(var_Date, "asString", [0])._value + "."));
          return call134;
        };
        func123.paramTypes = [];
        func123.paramTypes.push([]);
        func123.paramCounts = [1];
        obj83.methods["-(1)"] = func123;
        func123.definitionLine = 80;
        func123.definitionModule = "date";
        var func135 = function(argcv) {    // method *(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_factor = arguments[curarg];
          curarg++;
          // Start argument checking
          curarg = 1;
          setLineNumber(83);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Number, "match(1)",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in * (arg list 1), which corresponds to parameter factor, does not have " + 
                      callmethod(var_Number, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("date");
          setLineNumber(84);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call139 = callmethodChecked(this, "asMilliseconds", []);
          var prod141 = callmethodChecked(call139, "*(1)", [1], var_factor);
          // call case 6: other requests
          // call case 3: self.outer request
          var call143 = callmethodChecked(superDepth, "outer", [0]);
          onSelf = true;
          var call144 = callmethodChecked(call143, "milliseconds(1)", [1], prod141);
          if (!Grace_isTrue(callmethod(var_Date, "match(1)", [1], call144)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method *(_) does not have " + 
                      callmethod(var_Date, "asString", [0])._value + "."));
          return call144;
        };
        func135.paramTypes = [];
        func135.paramTypes.push([type_Number, "factor"]);
        func135.paramCounts = [1];
        obj83.methods["*(1)"] = func135;
        func135.definitionLine = 83;
        func135.definitionModule = "date";
        var func145 = function(argcv) {    // method reverseTimesNumber(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_factor = arguments[curarg];
          curarg++;
          // Start argument checking
          curarg = 1;
          setLineNumber(86);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Number, "match(1)",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in reverseTimesNumber (arg list 1), which corresponds to parameter factor, does not have " + 
                      callmethod(var_Number, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("date");
          setLineNumber(87);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call148 = callmethodChecked(this, "asMilliseconds", []);
          var prod151 = callmethodChecked(var_factor, "*(1)", [1], call148);
          // call case 6: other requests
          // call case 3: self.outer request
          var call153 = callmethodChecked(superDepth, "outer", [0]);
          onSelf = true;
          var call154 = callmethodChecked(call153, "milliseconds(1)", [1], prod151);
          if (!Grace_isTrue(callmethod(var_Date, "match(1)", [1], call154)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method reverseTimesNumber(_) does not have " + 
                      callmethod(var_Date, "asString", [0])._value + "."));
          return call154;
        };
        func145.paramTypes = [];
        func145.paramTypes.push([type_Number, "factor"]);
        func145.paramCounts = [1];
        obj83.methods["reverseTimesNumber(1)"] = func145;
        func145.definitionLine = 86;
        func145.definitionModule = "date";
        var func155 = function(argcv) {    // method ==(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_other = arguments[curarg];
          curarg++;
          // Start argument checking
          curarg = 1;
          setLineNumber(89);    // compilenode identifier
          if (!Grace_isTrue(callmethod(var_Date, "match(1)",  [1], arguments[curarg])))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("argument 1 in == (arg list 1), which corresponds to parameter other, does not have " + 
                      callmethod(var_Date, "asString", [0])._value + "."));
          curarg++;
          // End argument checking
          setModuleName("date");
          setLineNumber(90);    // compilenode member
          // call case 6: other requests
          var call157 = callmethodChecked(var_other, "asMilliseconds", []);
          // call case 4: self request
          onSelf = true;
          var call160 = callmethodChecked(this, "asMilliseconds", []);
          var opresult162 = callmethodChecked(call160, "==(1)", [1], call157);
          if (!Grace_isTrue(callmethod(var_Boolean, "match(1)", [1], opresult162)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("result of method ==(_) does not have " + 
                      callmethod(var_Boolean, "asString", [0])._value + "."));
          return opresult162;
        };
        func155.paramTypes = [];
        func155.paramTypes.push([]);
        func155.paramCounts = [1];
        obj83.methods["==(1)"] = func155;
        func155.definitionLine = 89;
        func155.definitionModule = "date";
        superDepth = origSuperDepth;
      };
      obj_init_83.apply(inheritingObject, []);
      return obj83;
      };
      this.methods["basic$object(1)"] = func82;
    setLineNumber(94);    // compilenode method
    var func163 = function(argcv) {    // method milliseconds(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_n = arguments[curarg];
      curarg++;
      setModuleName("date");
      var obj164 = Grace_allocObject(null, "milliseconds(_)");
      obj164.definitionModule = "date";
      obj164.definitionLine = 94;
      obj164.outer = this;
      var reader_date_outer165 = function() {
        return this.outer;
      };
      obj164.methods["outer"] = reader_date_outer165;
      var obj_init_164 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj164;
        setLineNumber(96);    // compilenode identifier
        // call case 6: other requests
        // call case 3: self.outer request
        var call168 = callmethodChecked(superDepth, "outer", [0]);
        var call169 = callmethodChecked(call168, "basic$object(1)", [0, 1], this);
        obj164.superobj = call169;
        if (call169.data) obj164.data = call169.data;
        if (call169.hasOwnProperty('_value'))
            obj164._value = call169._value;
        setLineNumber(97);    // compilenode call
           // start native code from line 97
        var result = GraceDone;
        result = new Date(var_n._value)
        var nat170 = result;
           // end native code insertion
        obj164.data["value"] = nat170;
        var reader_date_value171 = function() {
          return this.data["value"];
        };
        reader_date_value171.def = true;
        reader_date_value171.confidential = true;
        obj164.methods["value"] = reader_date_value171;
        superDepth = origSuperDepth;
      };
      obj_init_164.apply(obj164, []);
      setLineNumber(94);    // return value
      if (!Grace_isTrue(callmethod(var_Date, "match(1)", [1], obj164)))
          throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("result of method milliseconds(_) does not have " + 
                  callmethod(var_Date, "asString", [0])._value + "."));
      return obj164;
    };
    func163.paramCounts = [1];
    this.methods["milliseconds(1)"] = func163;
    func163.definitionLine = 94;
    func163.definitionModule = "date";
      var func172 = function(argcv) {    // method milliseconds(_)$object(_)
        var curarg = 1;
        var var_n = arguments[curarg];
        curarg++;
        var inheritingObject = arguments[curarg++];
        // Start argument processing
        curarg = 1;
        curarg++;
        // End argument processing
        setModuleName("date");
        var returnTarget = invocationCount;
        invocationCount++;
        var obj173 = Grace_allocObject(null, "milliseconds(1)");
        obj173.definitionModule = "date";
        obj173.definitionLine = 94;
        var inho173 = inheritingObject;
        while (inho173.superobj) inho173 = inho173.superobj;
        inho173.superobj = obj173;
        obj173.data = inheritingObject.data;
        if (inheritingObject.hasOwnProperty('_value'))
          obj173._value = inheritingObject._value;
        obj173.outer = this;
        var reader_date_outer174 = function() {
          return this.outer;
        };
        obj173.methods["outer"] = reader_date_outer174;
        var obj_init_173 = function() {
          var origSuperDepth = superDepth;
          superDepth = obj173;
          setLineNumber(96);    // compilenode identifier
          // call case 6: other requests
          // call case 3: self.outer request
          var call177 = callmethodChecked(superDepth, "outer", [0]);
          var call178 = callmethodChecked(call177, "basic$object(1)", [0, 1], this);
          obj173.superobj = call178;
          if (call178.data) obj173.data = call178.data;
          if (call178.hasOwnProperty('_value'))
              obj173._value = call178._value;
          setLineNumber(97);    // compilenode call
             // start native code from line 97
          var result = GraceDone;
          result = new Date(var_n._value)
          var nat179 = result;
             // end native code insertion
          obj173.data["value"] = nat179;
          var reader_date_value180 = function() {
            return this.data["value"];
          };
          reader_date_value180.def = true;
          reader_date_value180.confidential = true;
          obj173.methods["value"] = reader_date_value180;
          superDepth = origSuperDepth;
        };
        obj_init_173.apply(inheritingObject, []);
        return obj173;
        };
        this.methods["milliseconds(1)$object(1)"] = func172;
      setLineNumber(100);    // compilenode method
      var func181 = function(argcv) {    // method seconds(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_n = arguments[curarg];
        curarg++;
        setModuleName("date");
        setLineNumber(102);    // compilenode num
        var prod185 = callmethodChecked(new GraceNum(1000), "*(1)", [1], var_n);
        // call case 4: self request
        onSelf = true;
        var call186 = callmethodChecked(this, "milliseconds(1)", [1], prod185);
        if (!Grace_isTrue(callmethod(var_Date, "match(1)", [1], call186)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method seconds(_) does not have " + 
                    callmethod(var_Date, "asString", [0])._value + "."));
        return call186;
      };
      func181.paramCounts = [1];
      this.methods["seconds(1)"] = func181;
      func181.definitionLine = 100;
      func181.definitionModule = "date";
      setLineNumber(105);    // compilenode method
      var func187 = function(argcv) {    // method minutes(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_n = arguments[curarg];
        curarg++;
        setModuleName("date");
        setLineNumber(106);    // compilenode num
        var prod191 = callmethodChecked(new GraceNum(60), "*(1)", [1], var_n);
        // call case 4: self request
        onSelf = true;
        var call192 = callmethodChecked(this, "seconds(1)", [1], prod191);
        if (!Grace_isTrue(callmethod(var_Date, "match(1)", [1], call192)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method minutes(_) does not have " + 
                    callmethod(var_Date, "asString", [0])._value + "."));
        return call192;
      };
      func187.paramCounts = [1];
      this.methods["minutes(1)"] = func187;
      func187.definitionLine = 105;
      func187.definitionModule = "date";
      setLineNumber(109);    // compilenode method
      var func193 = function(argcv) {    // method hours(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_n = arguments[curarg];
        curarg++;
        setModuleName("date");
        setLineNumber(110);    // compilenode num
        var prod197 = callmethodChecked(new GraceNum(60), "*(1)", [1], var_n);
        // call case 4: self request
        onSelf = true;
        var call198 = callmethodChecked(this, "minutes(1)", [1], prod197);
        if (!Grace_isTrue(callmethod(var_Date, "match(1)", [1], call198)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method hours(_) does not have " + 
                    callmethod(var_Date, "asString", [0])._value + "."));
        return call198;
      };
      func193.paramCounts = [1];
      this.methods["hours(1)"] = func193;
      func193.definitionLine = 109;
      func193.definitionModule = "date";
      setLineNumber(113);    // compilenode method
      var func199 = function(argcv) {    // method days(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_n = arguments[curarg];
        curarg++;
        setModuleName("date");
        setLineNumber(114);    // compilenode num
        var prod203 = callmethodChecked(new GraceNum(24), "*(1)", [1], var_n);
        // call case 4: self request
        onSelf = true;
        var call204 = callmethodChecked(this, "hours(1)", [1], prod203);
        if (!Grace_isTrue(callmethod(var_Date, "match(1)", [1], call204)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method days(_) does not have " + 
                    callmethod(var_Date, "asString", [0])._value + "."));
        return call204;
      };
      func199.paramCounts = [1];
      this.methods["days(1)"] = func199;
      func199.definitionLine = 113;
      func199.definitionModule = "date";
      setLineNumber(117);    // compilenode method
      var func205 = function(argcv) {    // method weeks(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_n = arguments[curarg];
        curarg++;
        setModuleName("date");
        setLineNumber(118);    // compilenode num
        var prod209 = callmethodChecked(new GraceNum(7), "*(1)", [1], var_n);
        // call case 4: self request
        onSelf = true;
        var call210 = callmethodChecked(this, "days(1)", [1], prod209);
        if (!Grace_isTrue(callmethod(var_Date, "match(1)", [1], call210)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method weeks(_) does not have " + 
                    callmethod(var_Date, "asString", [0])._value + "."));
        return call210;
      };
      func205.paramCounts = [1];
      this.methods["weeks(1)"] = func205;
      func205.definitionLine = 117;
      func205.definitionModule = "date";
      setLineNumber(121);    // compilenode method
      var func211 = function(argcv) {    // method timeZoneOffset
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("date");
        setLineNumber(123);    // compilenode call
           // start native code from line 123
        var result = GraceDone;
        return new GraceNum(new Date().getTimezoneOffset())
        var nat212 = result;
           // end native code insertion
        if (!Grace_isTrue(callmethod(var_Number, "match(1)", [1], nat212)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method timeZoneOffset does not have " + 
                    callmethod(var_Number, "asString", [0])._value + "."));
        return nat212;
      };
      func211.paramCounts = [0];
      this.methods["timeZoneOffset"] = func211;
      func211.definitionLine = 121;
      func211.definitionModule = "date";
      setLineNumber(126);    // compilenode method
      var func213 = function(argcv) {    // method now
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("date");
        var obj214 = Grace_allocObject(null, "now");
        obj214.definitionModule = "date";
        obj214.definitionLine = 126;
        obj214.outer = this;
        var reader_date_outer215 = function() {
          return this.outer;
        };
        obj214.methods["outer"] = reader_date_outer215;
        var obj_init_214 = function() {
          var origSuperDepth = superDepth;
          superDepth = obj214;
          setLineNumber(127);    // compilenode identifier
          // call case 6: other requests
          // call case 3: self.outer request
          var call218 = callmethodChecked(superDepth, "outer", [0]);
          var call219 = callmethodChecked(call218, "basic$object(1)", [0, 1], this);
          obj214.superobj = call219;
          if (call219.data) obj214.data = call219.data;
          if (call219.hasOwnProperty('_value'))
              obj214._value = call219._value;
          setLineNumber(128);    // compilenode call
             // start native code from line 128
          var result = GraceDone;
          result = new Date()
          var nat220 = result;
             // end native code insertion
          obj214.data["value"] = nat220;
          var reader_date_value221 = function() {
            return this.data["value"];
          };
          reader_date_value221.def = true;
          reader_date_value221.confidential = true;
          obj214.methods["value"] = reader_date_value221;
          superDepth = origSuperDepth;
        };
        obj_init_214.apply(obj214, []);
        return obj214;
      };
      func213.paramCounts = [0];
      this.methods["now"] = func213;
      func213.definitionLine = 126;
      func213.definitionModule = "date";
        var func222 = function(argcv) {    // method now$object(_)
          var curarg = 1;
          var inheritingObject = arguments[curarg++];
          // Start argument processing
          curarg = 1;
          // End argument processing
          setModuleName("date");
          var returnTarget = invocationCount;
          invocationCount++;
          var obj223 = Grace_allocObject(null, "now");
          obj223.definitionModule = "date";
          obj223.definitionLine = 126;
          var inho223 = inheritingObject;
          while (inho223.superobj) inho223 = inho223.superobj;
          inho223.superobj = obj223;
          obj223.data = inheritingObject.data;
          if (inheritingObject.hasOwnProperty('_value'))
            obj223._value = inheritingObject._value;
          obj223.outer = this;
          var reader_date_outer224 = function() {
            return this.outer;
          };
          obj223.methods["outer"] = reader_date_outer224;
          var obj_init_223 = function() {
            var origSuperDepth = superDepth;
            superDepth = obj223;
            setLineNumber(127);    // compilenode identifier
            // call case 6: other requests
            // call case 3: self.outer request
            var call227 = callmethodChecked(superDepth, "outer", [0]);
            var call228 = callmethodChecked(call227, "basic$object(1)", [0, 1], this);
            obj223.superobj = call228;
            if (call228.data) obj223.data = call228.data;
            if (call228.hasOwnProperty('_value'))
                obj223._value = call228._value;
            setLineNumber(128);    // compilenode call
               // start native code from line 128
            var result = GraceDone;
            result = new Date()
            var nat229 = result;
               // end native code insertion
            obj223.data["value"] = nat229;
            var reader_date_value230 = function() {
              return this.data["value"];
            };
            reader_date_value230.def = true;
            reader_date_value230.confidential = true;
            obj223.methods["value"] = reader_date_value230;
            superDepth = origSuperDepth;
          };
          obj_init_223.apply(inheritingObject, []);
          return obj223;
          };
          this.methods["now$object(1)"] = func222;
        setLineNumber(131);    // compilenode method
        var func231 = function(argcv) {    // method fromString(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_dateString = arguments[curarg];
          curarg++;
          setModuleName("date");
          var obj232 = Grace_allocObject(null, "fromString(_)");
          obj232.definitionModule = "date";
          obj232.definitionLine = 131;
          obj232.outer = this;
          var reader_date_outer233 = function() {
            return this.outer;
          };
          obj232.methods["outer"] = reader_date_outer233;
          var obj_init_232 = function() {
            var origSuperDepth = superDepth;
            superDepth = obj232;
            setLineNumber(132);    // compilenode identifier
            // call case 6: other requests
            // call case 3: self.outer request
            var call236 = callmethodChecked(superDepth, "outer", [0]);
            var call237 = callmethodChecked(call236, "basic$object(1)", [0, 1], this);
            obj232.superobj = call237;
            if (call237.data) obj232.data = call237.data;
            if (call237.hasOwnProperty('_value'))
                obj232._value = call237._value;
            setLineNumber(133);    // compilenode call
               // start native code from line 133
            var result = GraceDone;
            result = new Date(var_dateString._value)
            var nat238 = result;
               // end native code insertion
            obj232.data["value"] = nat238;
            var reader_date_value239 = function() {
              return this.data["value"];
            };
            reader_date_value239.def = true;
            reader_date_value239.confidential = true;
            obj232.methods["value"] = reader_date_value239;
            superDepth = origSuperDepth;
          };
          obj_init_232.apply(obj232, []);
          return obj232;
        };
        func231.paramCounts = [1];
        this.methods["fromString(1)"] = func231;
        func231.definitionLine = 131;
        func231.definitionModule = "date";
          var func240 = function(argcv) {    // method fromString(_)$object(_)
            var curarg = 1;
            var var_dateString = arguments[curarg];
            curarg++;
            var inheritingObject = arguments[curarg++];
            // Start argument processing
            curarg = 1;
            curarg++;
            // End argument processing
            setModuleName("date");
            var returnTarget = invocationCount;
            invocationCount++;
            var obj241 = Grace_allocObject(null, "fromString(1)");
            obj241.definitionModule = "date";
            obj241.definitionLine = 131;
            var inho241 = inheritingObject;
            while (inho241.superobj) inho241 = inho241.superobj;
            inho241.superobj = obj241;
            obj241.data = inheritingObject.data;
            if (inheritingObject.hasOwnProperty('_value'))
              obj241._value = inheritingObject._value;
            obj241.outer = this;
            var reader_date_outer242 = function() {
              return this.outer;
            };
            obj241.methods["outer"] = reader_date_outer242;
            var obj_init_241 = function() {
              var origSuperDepth = superDepth;
              superDepth = obj241;
              setLineNumber(132);    // compilenode identifier
              // call case 6: other requests
              // call case 3: self.outer request
              var call245 = callmethodChecked(superDepth, "outer", [0]);
              var call246 = callmethodChecked(call245, "basic$object(1)", [0, 1], this);
              obj241.superobj = call246;
              if (call246.data) obj241.data = call246.data;
              if (call246.hasOwnProperty('_value'))
                  obj241._value = call246._value;
              setLineNumber(133);    // compilenode call
                 // start native code from line 133
              var result = GraceDone;
              result = new Date(var_dateString._value)
              var nat247 = result;
                 // end native code insertion
              obj241.data["value"] = nat247;
              var reader_date_value248 = function() {
                return this.data["value"];
              };
              reader_date_value248.def = true;
              reader_date_value248.confidential = true;
              obj241.methods["value"] = reader_date_value248;
              superDepth = origSuperDepth;
            };
            obj_init_241.apply(inheritingObject, []);
            return obj241;
            };
            this.methods["fromString(1)$object(1)"] = func240;
          setLineNumber(1);    // compilenode typedec
          // Type decl Date
          //   Type literal 
          var type250 = new GraceType("Date");
          type250.typeMethods.push("year");
          type250.typeMethods.push("month");
          type250.typeMethods.push("date");
          type250.typeMethods.push("day");
          type250.typeMethods.push("hour");
          type250.typeMethods.push("minute");
          type250.typeMethods.push("second");
          type250.typeMethods.push("asString");
          type250.typeMethods.push("asDateString");
          type250.typeMethods.push("asTimeString");
          type250.typeMethods.push("asIsoString");
          type250.typeMethods.push("==(1)");
          var var_Date = type250;
          var func251 = function(argcv) {    // method Date
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("date");
            // Date is a simple accessor - elide try ... catch
            return var_Date;
          };
          func251.paramCounts = [0];
          this.methods["Date"] = func251;
          func251.definitionLine = 1;
          func251.definitionModule = "date";
          return this;
        }
        gracecode_date.imports = [];
        if (typeof gctCache !== "undefined")
          gctCache['date'] = "classes:\nconfidential:\nfresh-methods:\n basic\n fromString(1)\n milliseconds(1)\n now\nfresh:basic:\n *(1)\n +(1)\n -(1)\n ==(1)\n asDateString\n asIsoString\n asMilliseconds\n asString\n asTimeString\n date\n day\n hour\n millisecond\n minute\n month\n reverseTimesNumber(1)\n second\n year\nfresh:fromString(1):\n *(1)\n +(1)\n -(1)\n ::(1)\n ==(1)\n asDateString\n asDebugString\n asIsoString\n asMilliseconds\n asString\n asTimeString\n basicAsString\n date\n day\n hour\n isMe(1)\n millisecond\n minute\n month\n reverseTimesNumber(1)\n second\n value\n year\n \u2260(1)\nfresh:milliseconds(1):\n *(1)\n +(1)\n -(1)\n ::(1)\n ==(1)\n asDateString\n asDebugString\n asIsoString\n asMilliseconds\n asString\n asTimeString\n basicAsString\n date\n day\n hour\n isMe(1)\n millisecond\n minute\n month\n reverseTimesNumber(1)\n second\n value\n year\n \u2260(1)\nfresh:now:\n *(1)\n +(1)\n -(1)\n ::(1)\n ==(1)\n asDateString\n asDebugString\n asIsoString\n asMilliseconds\n asString\n asTimeString\n basicAsString\n date\n day\n hour\n isMe(1)\n millisecond\n minute\n month\n reverseTimesNumber(1)\n second\n value\n year\n \u2260(1)\nmethodtypes-of:Date:\n 1 ==(other : Date) -> Boolean\n 1 asDateString -> String\n 1 asIsoString -> String\n 1 asString -> String\n 1 asTimeString -> String\n 1 date -> Number\n 1 day -> Number\n 1 hour -> Number\n 1 minute -> Number\n 1 month -> Number\n 1 second -> Number\n 1 year -> Number\nmodules:\npath:\n date\npublic:\n Date\n basic\n days(1)\n fromString(1)\n hours(1)\n milliseconds(1)\n minutes(1)\n now\n seconds(1)\n timeZoneOffset\n weeks(1)\ntypes:\n Date\n";
        if (typeof originalSourceLines !== "undefined") {
          originalSourceLines["date"] = [
            "type Date = type {",
            "    year -> Number",
            "        // the year, e.g., 2016",
            "    month -> Number",
            "        // the month, e.g, for 1 for January, 4 for April",
            "    date -> Number",
            "        // the day of the month, from 1 to 31",
            "    day -> Number",
            "        // the day of the week, e.g. 1 for Sunday, 1 for Monday",
            "    hour -> Number",
            "        // the hour of the day, e.g. 16 for 4 pm",
            "    minute -> Number",
            "        // the minute past the hour, e.g. 49 for 4:49 pm",
            "    second -> Number",
            "        // the second past the minute, e.g. 33 for 4:49:32 pm",
            "    asString -> String",
            "        // a sttring representation of this date and time",
            "    asDateString -> String",
            "        // a sttring representation of just date part ",
            "    asTimeString -> String",
            "        // a sttring representation of just the time part",
            "    asIsoString -> String",
            "        // a string representation that complies with ISO 8601",
            "    == (other:Date) -> Boolean",
            "}",
            "",
            "trait basic {",
            "    // all in local time",
            "    method year -> Number {",
            "        // the year, e.g., 2016",
            "        native \"js\" code \"return new GraceNum(this.data.value.getFullYear())\"",
            "    }",
            "    method month -> Number {",
            "        // the month, e.g, for 1 for January, 4 for April",
            "        native \"js\" code \"return new GraceNum(this.data.value.getMonth() + 1)\"",
            "    }",
            "    method date -> Number {",
            "        // the day of the month, from 1 to 31",
            "        native \"js\" code \"return new GraceNum(this.data.value.getDate())\"",
            "    }",
            "    method day -> Number {",
            "        // the day of the week, e.g. 1 for Sunday, 2 for Monday",
            "        native \"js\" code \"return new GraceNum(this.data.value.getDay() + 1)\"",
            "    }",
            "    method hour -> Number {",
            "        // the hour of the day, e.g. 16 for 4 pm",
            "        native \"js\" code \"return new GraceNum(this.data.value.getHours())\"",
            "    }",
            "    method minute -> Number {",
            "        // the minute past the hour, e.g. 49 for 4:49 pm",
            "        native \"js\" code \"return new GraceNum(this.data.value.getMinutes())\"",
            "    }",
            "    method second -> Number {",
            "        // the second past the minute, e.g. 33 for 4:49:33 pm",
            "        native \"js\" code \"return new GraceNum(this.data.value.getSeconds())\"",
            "    }",
            "    method millisecond -> Number {",
            "        // the second past the minute, e.g. 33 for 4:49:33 pm",
            "        native \"js\" code \"return new GraceNum(this.data.value.getMilliseconds())\"",
            "    }    ",
            "    method asString -> String {",
            "        native \"js\" code \"return new GraceString(this.data.value.toString())\"",
            "    }",
            "    method asDateString -> String {",
            "        native \"js\" code \"return new GraceString(this.data.value.toDateString())\"",
            "    }",
            "    method asTimeString -> String {",
            "        native \"js\" code \"return new GraceString(this.data.value.toTimeString())\"",
            "    }",
            "    method asIsoString -> String {",
            "        native \"js\" code \"return new GraceString(this.data.value.toISOString())\"",
            "    }",
            "    method asMilliseconds -> Number {",
            "        // date as milliseconds since the epoch",
            "        native \"js\" code \"return new GraceNum(this.data.value.getTime())\"",
            "    }",
            "    method + (other:Date) -> Date {",
            "        milliseconds(self.asMilliseconds + other.asMilliseconds)",
            "    }",
            "    method - (other:Date) -> Date {",
            "        milliseconds(self.asMilliseconds - other.asMilliseconds)",
            "    }    ",
            "    method * (factor:Number) -> Date {",
            "        milliseconds(self.asMilliseconds * factor)",
            "    }    ",
            "    method reverseTimesNumber (factor:Number) -> Date {",
            "        milliseconds(factor * self.asMilliseconds)",
            "    }",
            "    method == (other:Date) -> Boolean {",
            "        self.asMilliseconds == other.asMilliseconds",
            "    }",
            "}",
            "",
            "class milliseconds(n) -> Date {",
            "    // n milliseconds since the epoch ",
            "    inherit basic",
            "    def value = native \"js\" code \"result = new Date(var_n._value)\"",
            "}",
            "    ",
            "method seconds(n) -> Date {",
            "    // n seconds in milliseconds",
            "    milliseconds(1000 * n)",
            "}",
            "",
            "method minutes(n) -> Date {",
            "    seconds(60 * n)",
            "}",
            "",
            "method hours(n) -> Date {",
            "    minutes(60 * n)",
            "}",
            "",
            "method days(n) -> Date {",
            "    hours(24 * n)",
            "}",
            "",
            "method weeks(n) -> Date {",
            "    days(7 * n)",
            "}    ",
            "",
            "method timeZoneOffset -> Number {",
            "    // the offset between local time and UTC, in munites.",
            "    native \"js\" code \"return new GraceNum(new Date().getTimezoneOffset())\"",
            "}",
            "",
            "class now {",
            "    inherit basic",
            "    def value = native \"js\" code \"result = new Date()\"",
            "}",
            "",
            "class fromString(dateString) {",
            "    inherit basic",
            "    def value = native \"js\" code \"result = new Date(var_dateString._value)\"",
            "}",
            "",
            "    " ];
        }
        if (typeof global !== "undefined")
          global.gracecode_date = gracecode_date;
        if (typeof window !== "undefined")
          window.gracecode_date = gracecode_date;
