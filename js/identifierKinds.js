"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_identifierKinds() {
  setModuleName("identifierKinds");
  this.definitionModule = "identifierKinds";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_identifierKinds_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_identifierKinds_outer0;
  setLineNumber(13);    // compilenode method
  var func1 = function(argcv) {    // method kindConstant(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_name = arguments[curarg];
    curarg++;
    setModuleName("identifierKinds");
    var obj2 = Grace_allocObject(GraceObject, "kindConstant(_)");
    obj2.definitionModule = "identifierKinds";
    obj2.definitionLine = 13;
    obj2.outer = this;
    var reader_identifierKinds_outer3 = function() {
      return this.outer;
    };
    obj2.methods["outer"] = reader_identifierKinds_outer3;
    var obj_init_2 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj2;
      var func4 = function(argcv) {    // method asString
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierKinds");
        // asString is a simple accessor - elide try ... catch
        setLineNumber(14);    // compilenode identifier
        return var_name;
      };
      func4.paramCounts = [0];
      obj2.methods["asString"] = func4;
      func4.definitionLine = 14;
      func4.definitionModule = "identifierKinds";
      var func5 = function(argcv) {    // method isParameter
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierKinds");
        // isParameter is a simple accessor - elide try ... catch
        setLineNumber(15);    // compilenode identifier
        return GraceFalse;
      };
      func5.paramCounts = [0];
      obj2.methods["isParameter"] = func5;
      func5.definitionLine = 15;
      func5.definitionModule = "identifierKinds";
      var func6 = function(argcv) {    // method isAssignable
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierKinds");
        // isAssignable is a simple accessor - elide try ... catch
        setLineNumber(16);    // compilenode identifier
        return GraceFalse;
      };
      func6.paramCounts = [0];
      obj2.methods["isAssignable"] = func6;
      func6.definitionLine = 16;
      func6.definitionModule = "identifierKinds";
      var func7 = function(argcv) {    // method isImplicit
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierKinds");
        // isImplicit is a simple accessor - elide try ... catch
        setLineNumber(17);    // compilenode identifier
        return GraceFalse;
      };
      func7.paramCounts = [0];
      obj2.methods["isImplicit"] = func7;
      func7.definitionLine = 17;
      func7.definitionModule = "identifierKinds";
      var func8 = function(argcv) {    // method forUsers
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierKinds");
        // forUsers is a simple accessor - elide try ... catch
        setLineNumber(18);    // compilenode identifier
        return GraceTrue;
      };
      func8.paramCounts = [0];
      obj2.methods["forUsers"] = func8;
      func8.definitionLine = 18;
      func8.definitionModule = "identifierKinds";
      var func9 = function(argcv) {    // method fromParent
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierKinds");
        // fromParent is a simple accessor - elide try ... catch
        setLineNumber(19);    // compilenode identifier
        return GraceFalse;
      };
      func9.paramCounts = [0];
      obj2.methods["fromParent"] = func9;
      func9.definitionLine = 19;
      func9.definitionModule = "identifierKinds";
      var func10 = function(argcv) {    // method forGct
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierKinds");
        // forGct is a simple accessor - elide try ... catch
        setLineNumber(20);    // compilenode identifier
        return GraceTrue;
      };
      func10.paramCounts = [0];
      obj2.methods["forGct"] = func10;
      func10.definitionLine = 20;
      func10.definitionModule = "identifierKinds";
      var func11 = function(argcv) {    // method ==(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_other = arguments[curarg];
        curarg++;
        setModuleName("identifierKinds");
        setLineNumber(21);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call13 = callmethodChecked(this, "isMe(1)", [1], var_other);
        return call13;
      };
      func11.paramCounts = [1];
      obj2.methods["==(1)"] = func11;
      func11.definitionLine = 21;
      func11.definitionModule = "identifierKinds";
      superDepth = origSuperDepth;
    };
    obj_init_2.apply(obj2, []);
    return obj2;
  };
  func1.paramCounts = [1];
  this.methods["kindConstant(1)"] = func1;
  func1.definitionLine = 13;
  func1.definitionModule = "identifierKinds";
    var func14 = function(argcv) {    // method kindConstant(_)$object(_)
      var curarg = 1;
      var var_name = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      // Start argument processing
      curarg = 1;
      curarg++;
      // End argument processing
      setModuleName("identifierKinds");
      var returnTarget = invocationCount;
      invocationCount++;
      var obj15 = Grace_allocObject(GraceObject, "kindConstant(1)");
      obj15.definitionModule = "identifierKinds";
      obj15.definitionLine = 13;
      var inho15 = inheritingObject;
      while (inho15.superobj) inho15 = inho15.superobj;
      inho15.superobj = obj15;
      obj15.data = inheritingObject.data;
      if (inheritingObject.hasOwnProperty('_value'))
        obj15._value = inheritingObject._value;
      obj15.outer = this;
      var reader_identifierKinds_outer16 = function() {
        return this.outer;
      };
      obj15.methods["outer"] = reader_identifierKinds_outer16;
      var obj_init_15 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj15;
        var func17 = function(argcv) {    // method asString
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("identifierKinds");
          // asString is a simple accessor - elide try ... catch
          setLineNumber(14);    // compilenode identifier
          return var_name;
        };
        func17.paramCounts = [0];
        obj15.methods["asString"] = func17;
        func17.definitionLine = 14;
        func17.definitionModule = "identifierKinds";
        var func18 = function(argcv) {    // method isParameter
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("identifierKinds");
          // isParameter is a simple accessor - elide try ... catch
          setLineNumber(15);    // compilenode identifier
          return GraceFalse;
        };
        func18.paramCounts = [0];
        obj15.methods["isParameter"] = func18;
        func18.definitionLine = 15;
        func18.definitionModule = "identifierKinds";
        var func19 = function(argcv) {    // method isAssignable
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("identifierKinds");
          // isAssignable is a simple accessor - elide try ... catch
          setLineNumber(16);    // compilenode identifier
          return GraceFalse;
        };
        func19.paramCounts = [0];
        obj15.methods["isAssignable"] = func19;
        func19.definitionLine = 16;
        func19.definitionModule = "identifierKinds";
        var func20 = function(argcv) {    // method isImplicit
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("identifierKinds");
          // isImplicit is a simple accessor - elide try ... catch
          setLineNumber(17);    // compilenode identifier
          return GraceFalse;
        };
        func20.paramCounts = [0];
        obj15.methods["isImplicit"] = func20;
        func20.definitionLine = 17;
        func20.definitionModule = "identifierKinds";
        var func21 = function(argcv) {    // method forUsers
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("identifierKinds");
          // forUsers is a simple accessor - elide try ... catch
          setLineNumber(18);    // compilenode identifier
          return GraceTrue;
        };
        func21.paramCounts = [0];
        obj15.methods["forUsers"] = func21;
        func21.definitionLine = 18;
        func21.definitionModule = "identifierKinds";
        var func22 = function(argcv) {    // method fromParent
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("identifierKinds");
          // fromParent is a simple accessor - elide try ... catch
          setLineNumber(19);    // compilenode identifier
          return GraceFalse;
        };
        func22.paramCounts = [0];
        obj15.methods["fromParent"] = func22;
        func22.definitionLine = 19;
        func22.definitionModule = "identifierKinds";
        var func23 = function(argcv) {    // method forGct
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("identifierKinds");
          // forGct is a simple accessor - elide try ... catch
          setLineNumber(20);    // compilenode identifier
          return GraceTrue;
        };
        func23.paramCounts = [0];
        obj15.methods["forGct"] = func23;
        func23.definitionLine = 20;
        func23.definitionModule = "identifierKinds";
        var func24 = function(argcv) {    // method ==(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_other = arguments[curarg];
          curarg++;
          setModuleName("identifierKinds");
          setLineNumber(21);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call26 = callmethodChecked(this, "isMe(1)", [1], var_other);
          return call26;
        };
        func24.paramCounts = [1];
        obj15.methods["==(1)"] = func24;
        func24.definitionLine = 21;
        func24.definitionModule = "identifierKinds";
        superDepth = origSuperDepth;
      };
      obj_init_15.apply(inheritingObject, []);
      return obj15;
      };
      this.methods["kindConstant(1)$object(1)"] = func14;
    setLineNumber(4);    // compilenode typedec
    // Type decl T
    //   Type literal 
    var type28 = new GraceType("T");
    type28.typeMethods.push("isParameter");
    type28.typeMethods.push("isAssignable");
    type28.typeMethods.push("isImplicit");
    type28.typeMethods.push("forUsers");
    type28.typeMethods.push("fromParent");
    type28.typeMethods.push("==(1)");
    var var_T = type28;
    setLineNumber(1);    // compilenode method
    var func29 = function(argcv) {    // method T
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      setModuleName("identifierKinds");
      // T is a simple accessor - elide try ... catch
      setLineNumber(4);    // compilenode identifier
      return var_T;
    };
    func29.paramCounts = [0];
    this.methods["T"] = func29;
    func29.definitionLine = 1;
    func29.definitionModule = "identifierKinds";
    setLineNumber(24);    // compilenode string
    var string31 = new GraceString("undefined");
    // call case 4: self request
    onSelf = true;
    var call32 = callmethodChecked(this, "kindConstant(1)", [1], string31);
    var var_undefined = call32;
    setLineNumber(1);    // compilenode method
    var func33 = function(argcv) {    // method undefined
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      setModuleName("identifierKinds");
      // undefined is a simple accessor - elide try ... catch
      setLineNumber(24);    // compilenode identifier
      return var_undefined;
    };
    func33.paramCounts = [0];
    this.methods["undefined"] = func33;
    func33.definitionLine = 1;
    func33.definitionModule = "identifierKinds";
    this.methods["undefined"].debug = "def";
    setLineNumber(25);    // compilenode string
    var string35 = new GraceString("defdec");
    // call case 4: self request
    onSelf = true;
    var call36 = callmethodChecked(this, "kindConstant(1)", [1], string35);
    var var_defdec = call36;
    setLineNumber(1);    // compilenode method
    var func37 = function(argcv) {    // method defdec
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      setModuleName("identifierKinds");
      // defdec is a simple accessor - elide try ... catch
      setLineNumber(25);    // compilenode identifier
      return var_defdec;
    };
    func37.paramCounts = [0];
    this.methods["defdec"] = func37;
    func37.definitionLine = 1;
    func37.definitionModule = "identifierKinds";
    this.methods["defdec"].debug = "def";
    setLineNumber(26);    // compilenode string
    var string39 = new GraceString("method");
    // call case 4: self request
    onSelf = true;
    var call40 = callmethodChecked(this, "kindConstant(1)", [1], string39);
    var var_methdec = call40;
    setLineNumber(1);    // compilenode method
    var func41 = function(argcv) {    // method methdec
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      setModuleName("identifierKinds");
      // methdec is a simple accessor - elide try ... catch
      setLineNumber(26);    // compilenode identifier
      return var_methdec;
    };
    func41.paramCounts = [0];
    this.methods["methdec"] = func41;
    func41.definitionLine = 1;
    func41.definitionModule = "identifierKinds";
    this.methods["methdec"].debug = "def";
    setLineNumber(27);    // compilenode string
    var string43 = new GraceString("typedec");
    // call case 4: self request
    onSelf = true;
    var call44 = callmethodChecked(this, "kindConstant(1)", [1], string43);
    var var_typedec = call44;
    setLineNumber(1);    // compilenode method
    var func45 = function(argcv) {    // method typedec
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      setModuleName("identifierKinds");
      // typedec is a simple accessor - elide try ... catch
      setLineNumber(27);    // compilenode identifier
      return var_typedec;
    };
    func45.paramCounts = [0];
    this.methods["typedec"] = func45;
    func45.definitionLine = 1;
    func45.definitionModule = "identifierKinds";
    this.methods["typedec"].debug = "def";
    setLineNumber(28);    // compilenode object
    var obj46 = Grace_allocObject(null, "selfDef");
    obj46.definitionModule = "identifierKinds";
    obj46.definitionLine = 28;
    obj46.outer = this;
    var reader_identifierKinds_outer47 = function() {
      return this.outer;
    };
    obj46.methods["outer"] = reader_identifierKinds_outer47;
    var obj_init_46 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj46;
      var func48 = function(argcv) {    // method isImplicit
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierKinds");
        // isImplicit is a simple accessor - elide try ... catch
        setLineNumber(30);    // compilenode identifier
        return GraceTrue;
      };
      func48.paramCounts = [0];
      obj46.methods["isImplicit"] = func48;
      func48.definitionLine = 30;
      func48.definitionModule = "identifierKinds";
      var func49 = function(argcv) {    // method forUsers
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierKinds");
        // forUsers is a simple accessor - elide try ... catch
        setLineNumber(31);    // compilenode identifier
        return GraceFalse;
      };
      func49.paramCounts = [0];
      obj46.methods["forUsers"] = func49;
      func49.definitionLine = 31;
      func49.definitionModule = "identifierKinds";
      var func50 = function(argcv) {    // method forGct
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierKinds");
        // forGct is a simple accessor - elide try ... catch
        setLineNumber(32);    // compilenode identifier
        return GraceFalse;
      };
      func50.paramCounts = [0];
      obj46.methods["forGct"] = func50;
      func50.definitionLine = 32;
      func50.definitionModule = "identifierKinds";
      setLineNumber(29);    // compilenode string
      var string52 = new GraceString("selfDef");
      setLineNumber(0);    // compilenode identifier
      // call case 6: other requests
      // call case 3: self.outer request
      var call54 = callmethodChecked(superDepth, "outer", [0]);
      onSelf = true;
      var call55 = callmethodChecked(call54, "kindConstant(1)$object(1)", [1, 1], string52, this);
      obj46.superobj = call55;
      if (call55.data) obj46.data = call55.data;
      if (call55.hasOwnProperty('_value'))
          obj46._value = call55._value;
      superDepth = origSuperDepth;
    };
    obj_init_46.apply(obj46, []);
    var var_selfDef = obj46;
    setLineNumber(1);    // compilenode method
    var func56 = function(argcv) {    // method selfDef
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      setModuleName("identifierKinds");
      // selfDef is a simple accessor - elide try ... catch
      setLineNumber(28);    // compilenode identifier
      return var_selfDef;
    };
    func56.paramCounts = [0];
    this.methods["selfDef"] = func56;
    func56.definitionLine = 1;
    func56.definitionModule = "identifierKinds";
    this.methods["selfDef"].debug = "def";
    setLineNumber(34);    // compilenode object
    var obj57 = Grace_allocObject(null, "fromTrait");
    obj57.definitionModule = "identifierKinds";
    obj57.definitionLine = 34;
    obj57.outer = this;
    var reader_identifierKinds_outer58 = function() {
      return this.outer;
    };
    obj57.methods["outer"] = reader_identifierKinds_outer58;
    var obj_init_57 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj57;
      var func59 = function(argcv) {    // method isImplicit
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierKinds");
        // isImplicit is a simple accessor - elide try ... catch
        setLineNumber(36);    // compilenode identifier
        return GraceTrue;
      };
      func59.paramCounts = [0];
      obj57.methods["isImplicit"] = func59;
      func59.definitionLine = 36;
      func59.definitionModule = "identifierKinds";
      var func60 = function(argcv) {    // method fromParent
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierKinds");
        // fromParent is a simple accessor - elide try ... catch
        setLineNumber(37);    // compilenode identifier
        return GraceTrue;
      };
      func60.paramCounts = [0];
      obj57.methods["fromParent"] = func60;
      func60.definitionLine = 37;
      func60.definitionModule = "identifierKinds";
      setLineNumber(35);    // compilenode string
      var string62 = new GraceString("from a trait");
      setLineNumber(0);    // compilenode identifier
      // call case 6: other requests
      // call case 3: self.outer request
      var call64 = callmethodChecked(superDepth, "outer", [0]);
      onSelf = true;
      var call65 = callmethodChecked(call64, "kindConstant(1)$object(1)", [1, 1], string62, this);
      obj57.superobj = call65;
      if (call65.data) obj57.data = call65.data;
      if (call65.hasOwnProperty('_value'))
          obj57._value = call65._value;
      superDepth = origSuperDepth;
    };
    obj_init_57.apply(obj57, []);
    var var_fromTrait = obj57;
    setLineNumber(1);    // compilenode method
    var func66 = function(argcv) {    // method fromTrait
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      setModuleName("identifierKinds");
      // fromTrait is a simple accessor - elide try ... catch
      setLineNumber(34);    // compilenode identifier
      return var_fromTrait;
    };
    func66.paramCounts = [0];
    this.methods["fromTrait"] = func66;
    func66.definitionLine = 1;
    func66.definitionModule = "identifierKinds";
    this.methods["fromTrait"].debug = "def";
    setLineNumber(39);    // compilenode object
    var obj67 = Grace_allocObject(null, "inherited");
    obj67.definitionModule = "identifierKinds";
    obj67.definitionLine = 39;
    obj67.outer = this;
    var reader_identifierKinds_outer68 = function() {
      return this.outer;
    };
    obj67.methods["outer"] = reader_identifierKinds_outer68;
    var obj_init_67 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj67;
      var func69 = function(argcv) {    // method isImplicit
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierKinds");
        // isImplicit is a simple accessor - elide try ... catch
        setLineNumber(41);    // compilenode identifier
        return GraceTrue;
      };
      func69.paramCounts = [0];
      obj67.methods["isImplicit"] = func69;
      func69.definitionLine = 41;
      func69.definitionModule = "identifierKinds";
      var func70 = function(argcv) {    // method fromParent
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierKinds");
        // fromParent is a simple accessor - elide try ... catch
        setLineNumber(42);    // compilenode identifier
        return GraceTrue;
      };
      func70.paramCounts = [0];
      obj67.methods["fromParent"] = func70;
      func70.definitionLine = 42;
      func70.definitionModule = "identifierKinds";
      setLineNumber(40);    // compilenode string
      var string72 = new GraceString("inherited");
      setLineNumber(0);    // compilenode identifier
      // call case 6: other requests
      // call case 3: self.outer request
      var call74 = callmethodChecked(superDepth, "outer", [0]);
      onSelf = true;
      var call75 = callmethodChecked(call74, "kindConstant(1)$object(1)", [1, 1], string72, this);
      obj67.superobj = call75;
      if (call75.data) obj67.data = call75.data;
      if (call75.hasOwnProperty('_value'))
          obj67._value = call75._value;
      superDepth = origSuperDepth;
    };
    obj_init_67.apply(obj67, []);
    var var_inherited = obj67;
    setLineNumber(1);    // compilenode method
    var func76 = function(argcv) {    // method inherited
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      setModuleName("identifierKinds");
      // inherited is a simple accessor - elide try ... catch
      setLineNumber(39);    // compilenode identifier
      return var_inherited;
    };
    func76.paramCounts = [0];
    this.methods["inherited"] = func76;
    func76.definitionLine = 1;
    func76.definitionModule = "identifierKinds";
    this.methods["inherited"].debug = "def";
    setLineNumber(44);    // compilenode object
    var obj77 = Grace_allocObject(null, "vardec");
    obj77.definitionModule = "identifierKinds";
    obj77.definitionLine = 44;
    obj77.outer = this;
    var reader_identifierKinds_outer78 = function() {
      return this.outer;
    };
    obj77.methods["outer"] = reader_identifierKinds_outer78;
    var obj_init_77 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj77;
      var func79 = function(argcv) {    // method isAssignable
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierKinds");
        // isAssignable is a simple accessor - elide try ... catch
        setLineNumber(46);    // compilenode identifier
        return GraceTrue;
      };
      func79.paramCounts = [0];
      obj77.methods["isAssignable"] = func79;
      func79.definitionLine = 46;
      func79.definitionModule = "identifierKinds";
      setLineNumber(45);    // compilenode string
      var string81 = new GraceString("vardec");
      setLineNumber(0);    // compilenode identifier
      // call case 6: other requests
      // call case 3: self.outer request
      var call83 = callmethodChecked(superDepth, "outer", [0]);
      onSelf = true;
      var call84 = callmethodChecked(call83, "kindConstant(1)$object(1)", [1, 1], string81, this);
      obj77.superobj = call84;
      if (call84.data) obj77.data = call84.data;
      if (call84.hasOwnProperty('_value'))
          obj77._value = call84._value;
      superDepth = origSuperDepth;
    };
    obj_init_77.apply(obj77, []);
    var var_vardec = obj77;
    setLineNumber(1);    // compilenode method
    var func85 = function(argcv) {    // method vardec
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      setModuleName("identifierKinds");
      // vardec is a simple accessor - elide try ... catch
      setLineNumber(44);    // compilenode identifier
      return var_vardec;
    };
    func85.paramCounts = [0];
    this.methods["vardec"] = func85;
    func85.definitionLine = 1;
    func85.definitionModule = "identifierKinds";
    this.methods["vardec"].debug = "def";
    setLineNumber(48);    // compilenode object
    var obj86 = Grace_allocObject(null, "parameter");
    obj86.definitionModule = "identifierKinds";
    obj86.definitionLine = 48;
    obj86.outer = this;
    var reader_identifierKinds_outer87 = function() {
      return this.outer;
    };
    obj86.methods["outer"] = reader_identifierKinds_outer87;
    var obj_init_86 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj86;
      var func88 = function(argcv) {    // method isParameter
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierKinds");
        // isParameter is a simple accessor - elide try ... catch
        setLineNumber(50);    // compilenode identifier
        return GraceTrue;
      };
      func88.paramCounts = [0];
      obj86.methods["isParameter"] = func88;
      func88.definitionLine = 50;
      func88.definitionModule = "identifierKinds";
      setLineNumber(49);    // compilenode string
      var string90 = new GraceString("parameter");
      setLineNumber(0);    // compilenode identifier
      // call case 6: other requests
      // call case 3: self.outer request
      var call92 = callmethodChecked(superDepth, "outer", [0]);
      onSelf = true;
      var call93 = callmethodChecked(call92, "kindConstant(1)$object(1)", [1, 1], string90, this);
      obj86.superobj = call93;
      if (call93.data) obj86.data = call93.data;
      if (call93.hasOwnProperty('_value'))
          obj86._value = call93._value;
      superDepth = origSuperDepth;
    };
    obj_init_86.apply(obj86, []);
    var var_parameter = obj86;
    setLineNumber(1);    // compilenode method
    var func94 = function(argcv) {    // method parameter
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      setModuleName("identifierKinds");
      // parameter is a simple accessor - elide try ... catch
      setLineNumber(48);    // compilenode identifier
      return var_parameter;
    };
    func94.paramCounts = [0];
    this.methods["parameter"] = func94;
    func94.definitionLine = 1;
    func94.definitionModule = "identifierKinds";
    this.methods["parameter"].debug = "def";
    setLineNumber(52);    // compilenode object
    var obj95 = Grace_allocObject(null, "typeparam");
    obj95.definitionModule = "identifierKinds";
    obj95.definitionLine = 52;
    obj95.outer = this;
    var reader_identifierKinds_outer96 = function() {
      return this.outer;
    };
    obj95.methods["outer"] = reader_identifierKinds_outer96;
    var obj_init_95 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj95;
      var func97 = function(argcv) {    // method isParameter
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierKinds");
        // isParameter is a simple accessor - elide try ... catch
        setLineNumber(54);    // compilenode identifier
        return GraceTrue;
      };
      func97.paramCounts = [0];
      obj95.methods["isParameter"] = func97;
      func97.definitionLine = 54;
      func97.definitionModule = "identifierKinds";
      setLineNumber(53);    // compilenode string
      var string99 = new GraceString("typeparam");
      setLineNumber(0);    // compilenode identifier
      // call case 6: other requests
      // call case 3: self.outer request
      var call101 = callmethodChecked(superDepth, "outer", [0]);
      onSelf = true;
      var call102 = callmethodChecked(call101, "kindConstant(1)$object(1)", [1, 1], string99, this);
      obj95.superobj = call102;
      if (call102.data) obj95.data = call102.data;
      if (call102.hasOwnProperty('_value'))
          obj95._value = call102._value;
      superDepth = origSuperDepth;
    };
    obj_init_95.apply(obj95, []);
    var var_typeparam = obj95;
    setLineNumber(1);    // compilenode method
    var func103 = function(argcv) {    // method typeparam
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      setModuleName("identifierKinds");
      // typeparam is a simple accessor - elide try ... catch
      setLineNumber(52);    // compilenode identifier
      return var_typeparam;
    };
    func103.paramCounts = [0];
    this.methods["typeparam"] = func103;
    func103.definitionLine = 1;
    func103.definitionModule = "identifierKinds";
    this.methods["typeparam"].debug = "def";
    setLineNumber(56);    // compilenode object
    var obj104 = Grace_allocObject(null, "graceObjectMethod");
    obj104.definitionModule = "identifierKinds";
    obj104.definitionLine = 56;
    obj104.outer = this;
    var reader_identifierKinds_outer105 = function() {
      return this.outer;
    };
    obj104.methods["outer"] = reader_identifierKinds_outer105;
    var obj_init_104 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj104;
      var func106 = function(argcv) {    // method isImplicit
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierKinds");
        // isImplicit is a simple accessor - elide try ... catch
        setLineNumber(58);    // compilenode identifier
        return GraceTrue;
      };
      func106.paramCounts = [0];
      obj104.methods["isImplicit"] = func106;
      func106.definitionLine = 58;
      func106.definitionModule = "identifierKinds";
      var func107 = function(argcv) {    // method forUsers
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierKinds");
        // forUsers is a simple accessor - elide try ... catch
        setLineNumber(59);    // compilenode identifier
        return GraceFalse;
      };
      func107.paramCounts = [0];
      obj104.methods["forUsers"] = func107;
      func107.definitionLine = 59;
      func107.definitionModule = "identifierKinds";
      var func108 = function(argcv) {    // method fromParent
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierKinds");
        // fromParent is a simple accessor - elide try ... catch
        setLineNumber(60);    // compilenode identifier
        return GraceTrue;
      };
      func108.paramCounts = [0];
      obj104.methods["fromParent"] = func108;
      func108.definitionLine = 60;
      func108.definitionModule = "identifierKinds";
      var func109 = function(argcv) {    // method forGct
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("identifierKinds");
        // forGct is a simple accessor - elide try ... catch
        setLineNumber(61);    // compilenode identifier
        return GraceFalse;
      };
      func109.paramCounts = [0];
      obj104.methods["forGct"] = func109;
      func109.definitionLine = 61;
      func109.definitionModule = "identifierKinds";
      setLineNumber(57);    // compilenode string
      var string111 = new GraceString("from graceObject");
      setLineNumber(0);    // compilenode identifier
      // call case 6: other requests
      // call case 3: self.outer request
      var call113 = callmethodChecked(superDepth, "outer", [0]);
      onSelf = true;
      var call114 = callmethodChecked(call113, "kindConstant(1)$object(1)", [1, 1], string111, this);
      obj104.superobj = call114;
      if (call114.data) obj104.data = call114.data;
      if (call114.hasOwnProperty('_value'))
          obj104._value = call114._value;
      superDepth = origSuperDepth;
    };
    obj_init_104.apply(obj104, []);
    var var_graceObjectMethod = obj104;
    setLineNumber(1);    // compilenode method
    var func115 = function(argcv) {    // method graceObjectMethod
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      setModuleName("identifierKinds");
      // graceObjectMethod is a simple accessor - elide try ... catch
      setLineNumber(56);    // compilenode identifier
      return var_graceObjectMethod;
    };
    func115.paramCounts = [0];
    this.methods["graceObjectMethod"] = func115;
    func115.definitionLine = 1;
    func115.definitionModule = "identifierKinds";
    this.methods["graceObjectMethod"].debug = "def";
    return this;
  }
  gracecode_identifierKinds.imports = [];
  if (typeof gctCache !== "undefined")
    gctCache['identifierKinds'] = "classes:\nconfidential:\nfresh-methods:\n kindConstant(1)\nfresh:kindConstant(1):\n ==(1)\n asString\n forGct\n forUsers\n fromParent\n isAssignable\n isImplicit\n isParameter\nmethodtypes-of:T:\n 1 ==(o : T) -> Boolean\n 1 forUsers -> Boolean\n 1 fromParent -> Boolean\n 1 isAssignable -> Boolean\n 1 isImplicit -> Boolean\n 1 isParameter -> Boolean\nmodules:\npath:\n identifierKinds\npublic:\n T\n kindConstant(1)\ntypes:\n T\n";
  if (typeof originalSourceLines !== "undefined") {
    originalSourceLines["identifierKinds"] = [
      "// Constants distinguishing between different kinds of identifier.",
      "// Defines observers for their properties.",
      "",
      "type T = type {",
      "    isParameter -> Boolean",
      "    isAssignable -> Boolean",
      "    isImplicit -> Boolean",
      "    forUsers -> Boolean",
      "    fromParent -> Boolean",
      "    ==(o:T) -> Boolean",
      "}",
      "",
      "class kindConstant(name) {",
      "    method asString { name }",
      "    method isParameter { false }",
      "    method isAssignable { false }",
      "    method isImplicit { false }",
      "    method forUsers { true }",
      "    method fromParent { false }",
      "    method forGct { true }",
      "    method ==(other) { self.isMe(other) }",
      "}",
      "",
      "def undefined = kindConstant \"undefined\"",
      "def defdec = kindConstant \"defdec\"",
      "def methdec = kindConstant \"method\"",
      "def typedec = kindConstant \"typedec\"",
      "def selfDef = object {",
      "    inherits kindConstant \"selfDef\"",
      "    method isImplicit { true }",
      "    method forUsers { false }",
      "    method forGct { false }",
      "}",
      "def fromTrait = object {",
      "    inherits kindConstant \"from a trait\"",
      "    method isImplicit { true }",
      "    method fromParent { true }",
      "}",
      "def inherited = object {",
      "    inherits kindConstant \"inherited\"",
      "    method isImplicit { true }",
      "    method fromParent { true }",
      "}",
      "def vardec = object {",
      "    inherits kindConstant \"vardec\"",
      "    method isAssignable { true }",
      "}",
      "def parameter = object {",
      "    inherits kindConstant \"parameter\"",
      "    method isParameter { true }",
      "}",
      "def typeparam = object {",
      "    inherits kindConstant \"typeparam\"",
      "    method isParameter { true }",
      "}",
      "def graceObjectMethod = object {",
      "    inherits kindConstant \"from graceObject\"",
      "    method isImplicit { true }",
      "    method forUsers { false }",
      "    method fromParent { true }",
      "    method forGct { false }",
      "}" ];
  }
  if (typeof global !== "undefined")
    global.gracecode_identifierKinds = gracecode_identifierKinds;
  if (typeof window !== "undefined")
    window.gracecode_identifierKinds = gracecode_identifierKinds;
