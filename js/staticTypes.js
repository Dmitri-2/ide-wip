"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_staticTypes() {
  setModuleName("staticTypes");
  this.definitionModule = "staticTypes";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_staticTypes_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_staticTypes_outer0;
  setLineNumber(3);    // compilenode dialect
  // Dialect import of dialect
  var_prelude = do_import("dialect", gracecode_dialect);
  this.outer = var_prelude;
  setLineNumber(5);    // compilenode import
  // Import of ast as ast
  if (typeof gracecode_ast == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module ast'));
  var var_ast = do_import("ast", gracecode_ast);
  var func1 = function(argcv) {    // method ast
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("staticTypes");
    // ast is a simple accessor - elide try ... catch
    return var_ast;
  };
  func1.paramCounts = [0];
  this.methods["ast"] = func1;
  func1.definitionLine = 5;
  func1.definitionModule = "staticTypes";
  func1.debug = "import";
  func1.confidential = true;
  setModuleName("staticTypes");
  setLineNumber(6);    // compilenode import
  // Import of util as util
  if (typeof gracecode_util == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module util'));
  var var_util = do_import("util", gracecode_util);
  var func2 = function(argcv) {    // method util
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("staticTypes");
    // util is a simple accessor - elide try ... catch
    return var_util;
  };
  func2.paramCounts = [0];
  this.methods["util"] = func2;
  func2.definitionLine = 6;
  func2.definitionModule = "staticTypes";
  func2.debug = "import";
  func2.confidential = true;
  setModuleName("staticTypes");
  setLineNumber(8);    // compilenode identifier
  // call case 5: prelude request
  var call4 = callmethodChecked(var_prelude, "methods$object(1)", [0, 1], this);
  this.superobj = call4;
  if (call4.data) this.data = call4.data;
  if (call4.hasOwnProperty('_value'))
      this._value = call4._value;
  setLineNumber(50);    // compilenode method
  var func5 = function(argcv) {    // method mixPartNamed(_)parameters(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_name__39__ = arguments[curarg];
    curarg++;
    var var_parameters__39__ = arguments[curarg];
    curarg++;
    setModuleName("staticTypes");
    var obj6 = Grace_allocObject(GraceObject, "mixPartNamed(_)parameters(_)");
    obj6.definitionModule = "staticTypes";
    obj6.definitionLine = 50;
    obj6.outer = this;
    var reader_staticTypes_outer7 = function() {
      return this.outer;
    };
    obj6.methods["outer"] = reader_staticTypes_outer7;
    var obj_init_6 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj6;
      setLineNumber(52);    // compilenode identifier
      obj6.data["name"] = var_name__39__;
      var reader_staticTypes_name8 = function() {
        return this.data["name"];
      };
      reader_staticTypes_name8.def = true;
      obj6.methods["name"] = reader_staticTypes_name8;
      setLineNumber(53);    // compilenode identifier
      obj6.data["parameters"] = var_parameters__39__;
      var reader_staticTypes_parameters9 = function() {
        return this.data["parameters"];
      };
      reader_staticTypes_parameters9.def = true;
      obj6.methods["parameters"] = reader_staticTypes_parameters9;
      superDepth = origSuperDepth;
    };
    obj_init_6.apply(obj6, []);
    return obj6;
  };
  func5.paramTypes = [];
  func5.paramTypes.push([type_String, "name'"]);
  func5.paramTypes.push([]);
  func5.paramCounts = [1, 1];
  this.methods["mixPartNamed(1)parameters(1)"] = func5;
  func5.definitionLine = 50;
  func5.definitionModule = "staticTypes";
    var func10 = function(argcv) {    // method mixPartNamed(_)parameters(_)$object(_)
      var curarg = 1;
      var var_name__39__ = arguments[curarg];
      curarg++;
      var var_parameters__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      // Start argument processing
      curarg = 1;
      curarg++;
      curarg++;
      // End argument processing
      setModuleName("staticTypes");
      var returnTarget = invocationCount;
      invocationCount++;
      var obj11 = Grace_allocObject(GraceObject, "mixPartNamed(1)parameters(1)");
      obj11.definitionModule = "staticTypes";
      obj11.definitionLine = 50;
      var inho11 = inheritingObject;
      while (inho11.superobj) inho11 = inho11.superobj;
      inho11.superobj = obj11;
      obj11.data = inheritingObject.data;
      if (inheritingObject.hasOwnProperty('_value'))
        obj11._value = inheritingObject._value;
      obj11.outer = this;
      var reader_staticTypes_outer12 = function() {
        return this.outer;
      };
      obj11.methods["outer"] = reader_staticTypes_outer12;
      var obj_init_11 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj11;
        setLineNumber(52);    // compilenode identifier
        obj11.data["name"] = var_name__39__;
        var reader_staticTypes_name13 = function() {
          return this.data["name"];
        };
        reader_staticTypes_name13.def = true;
        obj11.methods["name"] = reader_staticTypes_name13;
        setLineNumber(53);    // compilenode identifier
        obj11.data["parameters"] = var_parameters__39__;
        var reader_staticTypes_parameters14 = function() {
          return this.data["parameters"];
        };
        reader_staticTypes_parameters14.def = true;
        obj11.methods["parameters"] = reader_staticTypes_parameters14;
        superDepth = origSuperDepth;
      };
      obj_init_11.apply(inheritingObject, []);
      return obj11;
      };
      func10.paramTypes = [];
      func10.paramTypes.push([type_String, "name'"]);
      func10.paramTypes.push([]);
      this.methods["mixPartNamed(1)parameters(1)$object(1)"] = func10;
    setLineNumber(616);    // compilenode method
    var func15 = function(argcv) {    // method addVar(_)ofType(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_name = arguments[curarg];
      curarg++;
      var var_oType = arguments[curarg];
      curarg++;
      setModuleName("staticTypes");
      setLineNumber(617);    // compilenode identifier
      // call case 6: other requests
      // call case 6: other requests
      // call case 5: prelude request
      var call19 = callmethodChecked(var_prelude, "scope", []);
      var call20 = callmethodChecked(call19, "variables", []);
      var call21 = callmethodChecked(call20, "at(1)put(1)", [1, 1], var_name, var_oType);
      setLineNumber(618);    // compilenode identifier
      // call case 6: other requests
      var call24 = callmethodChecked(var_aMethodType, "member(1)ofType(1)", [1, 1], var_name, var_oType);
      // call case 6: other requests
      // call case 6: other requests
      // call case 5: prelude request
      var call27 = callmethodChecked(var_prelude, "scope", []);
      var call28 = callmethodChecked(call27, "methods", []);
      var call29 = callmethodChecked(call28, "at(1)put(1)", [1, 1], var_name, call24);
      return call29;
    };
    func15.paramTypes = [];
    func15.paramTypes.push([type_String, "name"]);
    func15.paramTypes.push([]);
    func15.confidential = true;
    func15.paramCounts = [1, 1];
    this.methods["addVar(1)ofType(1)"] = func15;
    func15.definitionLine = 616;
    func15.definitionModule = "staticTypes";
    setLineNumber(679);    // compilenode method
    var func30 = function(argcv) {    // method check(_)against(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_req = arguments[curarg];
      curarg++;
      var var_meth = arguments[curarg];
      curarg++;
      setModuleName("staticTypes");
      setLineNumber(681);    // compilenode member
      // call case 6: other requests
      var call32 = callmethodChecked(var_meth, "name", []);
      var var_name = call32;
      setLineNumber(683);    // compilenode member
      // call case 6: other requests
      var call35 = callmethodChecked(var_meth, "signature", []);
      // call case 6: other requests
      var call37 = callmethodChecked(var_req, "with", []);
      var block38 = new GraceBlock(this, 683, 2);
      setLineNumber(1);    // compilenode identifier
      block38.real = function(var_part, var_args__39__) {
        setLineNumber(684);    // compilenode member
        // call case 6: other requests
        var call40 = callmethodChecked(var_part, "parameters", []);
        var var_params = call40;
        setLineNumber(685);    // compilenode member
        // call case 6: other requests
        var call42 = callmethodChecked(var_args__39__, "args", []);
        var var_args = call42;
        setLineNumber(687);    // compilenode member
        // call case 6: other requests
        var call44 = callmethodChecked(var_params, "size", []);
        var var_pSize = call44;
        setLineNumber(688);    // compilenode member
        // call case 6: other requests
        var call46 = callmethodChecked(var_args, "size", []);
        var var_aSize = call46;
        var if47 = GraceDone;
        setLineNumber(690);    // compilenode identifier
        var opresult50 = callmethodChecked(var_aSize, "\u2260(1)", [1], var_pSize);
        if (Grace_isTrue(opresult50)) {
          var if51 = GraceDone;
          setLineNumber(691);    // compilenode identifier
          var opresult54 = callmethodChecked(var_aSize, ">(1)", [1], var_pSize);
          if (Grace_isTrue(opresult54)) {
            var string55 = new GraceString("many");
            if51 = string55;
          } else {
            var string56 = new GraceString("few");
            if51 = string56;
          }
          var var_which = if51;
          var if57 = GraceDone;
          setLineNumber(692);    // compilenode identifier
          var opresult60 = callmethodChecked(var_aSize, ">(1)", [1], var_pSize);
          if (Grace_isTrue(opresult60)) {
            setLineNumber(693);    // compilenode identifier
            var opresult64 = callmethodChecked(var_pSize, "+(1)", [1], new GraceNum(1));
            // call case 6: other requests
            var call65 = callmethodChecked(var_args, "at(1)", [1], opresult64);
            if57 = call65;
          } else {
            setLineNumber(696);    // compilenode member
            // call case 6: other requests
            var call67 = callmethodChecked(var_req, "value", []);
            if57 = call67;
          }
          var var_where = if57;
          setLineNumber(701);    // compilenode string
          var string69 = new GraceString("");
          var string72 = new GraceString(" but got ");
          var string75 = new GraceString("', expected ");
          // call case 6: other requests
          var call78 = callmethodChecked(var_part, "name", []);
          var string80 = new GraceString("'");
          var opresult82 = callmethodChecked(string80, "++(1)", [1], call78);
          var opresult84 = callmethodChecked(opresult82, "++(1)", [1], string75);
          var opresult86 = callmethodChecked(opresult84, "++(1)", [1], var_pSize);
          var opresult88 = callmethodChecked(opresult86, "++(1)", [1], string72);
          var opresult90 = callmethodChecked(opresult88, "++(1)", [1], var_aSize);
          var opresult92 = callmethodChecked(opresult90, "++(1)", [1], string69);
          setLineNumber(700);    // compilenode string
          var string94 = new GraceString(" arguments to method part ");
          var string97 = new GraceString("too ");
          var opresult99 = callmethodChecked(string97, "++(1)", [1], var_which);
          var opresult101 = callmethodChecked(opresult99, "++(1)", [1], string94);
          var opresult103 = callmethodChecked(opresult101, "++(1)", [1], opresult92);
          setLineNumber(702);    // compilenode identifier
          // call case 6: other requests
          setLineNumber(699);    // compilenode identifier
          var call104 = callmethodChecked(var_RequestError, "raise(1)with(1)", [1, 1], opresult103, var_where);
          if47 = call104;
        }
        setLineNumber(705);    // compilenode block
        var block106 = new GraceBlock(this, 705, 2);
        setLineNumber(1);    // compilenode identifier
        block106.real = function(var_param, var_arg) {
          setLineNumber(706);    // compilenode member
          // call case 6: other requests
          var call108 = callmethodChecked(var_param, "typeAnnotation", []);
          var var_pType = call108;
          setLineNumber(707);    // compilenode identifier
          // call case 5: prelude request
          var call110 = callmethodChecked(var_prelude, "typeOf(1)", [1], var_arg);
          var var_aType = call110;
          var if111 = GraceDone;
          setLineNumber(709);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          // call case 5: prelude request
          var call115 = callmethodChecked(var_prelude, "typeOf(1)", [1], var_arg);
          var call116 = callmethodChecked(call115, "isSubtypeOf(1)", [1], var_pType);
          var call117 = callmethodChecked(call116, "not", []);
          if (Grace_isTrue(call117)) {
            setLineNumber(713);    // compilenode string
            var string119 = new GraceString("'");
            var string122 = new GraceString("method '");
            var opresult124 = callmethodChecked(string122, "++(1)", [1], var_name);
            var opresult126 = callmethodChecked(opresult124, "++(1)", [1], string119);
            setLineNumber(712);    // compilenode string
            var string128 = new GraceString("' in the ");
            var string131 = new GraceString("satisfy the type of parameter '");
            var opresult133 = callmethodChecked(string131, "++(1)", [1], var_param);
            var opresult135 = callmethodChecked(opresult133, "++(1)", [1], string128);
            setLineNumber(711);    // compilenode string
            var string137 = new GraceString("' does not ");
            var string140 = new GraceString("` of type '");
            // call case 6: other requests
            var call143 = callmethodChecked(var_arg, "toGrace(1)", [1], new GraceNum(0));
            var string145 = new GraceString("`");
            var opresult147 = callmethodChecked(string145, "++(1)", [1], call143);
            var opresult149 = callmethodChecked(opresult147, "++(1)", [1], string140);
            var opresult151 = callmethodChecked(opresult149, "++(1)", [1], var_aType);
            var opresult153 = callmethodChecked(opresult151, "++(1)", [1], string137);
            setLineNumber(710);    // compilenode string
            var string155 = new GraceString("the expression ");
            var opresult157 = callmethodChecked(string155, "++(1)", [1], opresult153);
            var opresult159 = callmethodChecked(opresult157, "++(1)", [1], opresult135);
            var opresult161 = callmethodChecked(opresult159, "++(1)", [1], opresult126);
            setLineNumber(713);    // compilenode identifier
            // call case 6: other requests
            setLineNumber(710);    // compilenode identifier
            var call162 = callmethodChecked(var_RequestError, "raise(1)with(1)", [1, 1], opresult161, var_arg);
            if111 = call162;
          }
          return if111;
        };
        // call case 5: prelude request
        var call163 = callmethodChecked(var_prelude, "for(1)and(1)do(1)", [1, 1, 1], var_params, var_args, block106);
        return call163;
      };
      // call case 5: prelude request
      var call164 = callmethodChecked(var_prelude, "for(1)and(1)do(1)", [1, 1, 1], call35, call37, block38);
      setLineNumber(718);    // compilenode member
      // call case 6: other requests
      var call166 = callmethodChecked(var_meth, "returnType", []);
      return call166;
    };
    func30.paramTypes = [];
    func30.paramTypes.push([]);
    func30.paramTypes.push([]);
    func30.confidential = true;
    func30.paramCounts = [1, 1];
    this.methods["check(1)against(1)"] = func30;
    func30.definitionLine = 679;
    func30.definitionModule = "staticTypes";
    setLineNumber(721);    // compilenode method
    var func167 = function(argcv) {    // method find(_)atScope(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_req = arguments[curarg];
      curarg++;
      var var_i = arguments[curarg];
      curarg++;
      setModuleName("staticTypes");
      var if168 = GraceDone;
      setLineNumber(722);    // compilenode identifier
      var opresult171 = callmethodChecked(var_i, "==(1)", [1], new GraceNum(0));
      if (Grace_isTrue(opresult171)) {
        setLineNumber(723);    // compilenode member
        // call case 6: other requests
        var call173 = callmethodChecked(var_objectType, "unknown", []);
        return call173;
      }
      setLineNumber(726);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      // call case 6: other requests
      // call case 6: other requests
      // call case 5: prelude request
      var call180 = callmethodChecked(var_prelude, "scope", []);
      var call181 = callmethodChecked(call180, "methods", []);
      var call182 = callmethodChecked(call181, "stack", []);
      var call183 = callmethodChecked(call182, "at(1)", [1], var_i);
      var call184 = callmethodChecked(call183, "values", []);
      // call case 6: other requests
      var call185 = callmethodChecked(var_objectType, "fromMethods(1)", [1], call184);
      var var_sType = call185;
      setLineNumber(728);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call190 = callmethodChecked(var_req, "value", []);
      var call191 = callmethodChecked(call190, "value", []);
      // call case 6: other requests
      var call192 = callmethodChecked(var_sType, "getMethod(1)", [1], call191);
      var cases186 = [];
      var block193 = new GraceBlock(this, 728, 0);
      block193.pattern = var_noSuchMethod;
      block193.real = function() {
        setLineNumber(729);    // compilenode identifier
        var diff197 = callmethodChecked(var_i, "-(1)", [1], new GraceNum(1));
        // call case 4: self request
        onSelf = true;
        var call198 = callmethodChecked(this, "find(1)atScope(1)", [1, 1], var_req, diff197);
        return call198;
      };
      cases186.push(block193);
      setLineNumber(730);    // compilenode block
      var block199 = new GraceBlock(this, 730, 1);
      setLineNumber(0);    // compilenode string
      var string202 = new GraceString("meth");
      // call case 6: other requests
      // call case 5: prelude request
      var call204 = callmethodChecked(var_prelude, "VariablePattern", []);
      var call205 = callmethodChecked(call204, "new(1)", [1], string202);
      setLineNumber(730);    // compilenode identifier
      // call case 6: other requests
      setLineNumber(0);    // compilenode member
      // call case 5: prelude request
      var call207 = callmethodChecked(var_prelude, "AndPattern", []);
      var call208 = callmethodChecked(call207, "new(2)", [2], call205, var_MethodType);
      block199.pattern = call208;
      setLineNumber(730);    // compilenode identifier
      block199.real = function(var_meth) {
        setLineNumber(731);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call210 = callmethodChecked(this, "check(1)against(1)", [1, 1], var_req, var_meth);
        return call210;
      };
      cases186.push(block199);
      setLineNumber(732);    // compilenode block
      var block211 = new GraceBlock(this, 732, 1);
      setLineNumber(1);    // compilenode identifier
      block211.real = function(var___95____95__16) {
        return GraceDone;
      };
      cases186.push(block211);
      setLineNumber(728);    // compilematchcase
      var matchres186 = matchCase(call192,cases186,false);
      setModuleName("staticTypes");
      return matchres186;
    };
    func167.paramTypes = [];
    func167.paramTypes.push([]);
    func167.paramTypes.push([type_Number, "i"]);
    func167.confidential = true;
    func167.paramCounts = [1, 1];
    this.methods["find(1)atScope(1)"] = func167;
    func167.definitionLine = 721;
    func167.definitionModule = "staticTypes";
    setLineNumber(903);    // compilenode method
    var func212 = function(argcv) {    // method check(_)matches(_)inMethod(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_node = arguments[curarg];
      curarg++;
      var var_eType = arguments[curarg];
      curarg++;
      var var_name = arguments[curarg];
      curarg++;
      setModuleName("staticTypes");
      setLineNumber(905);    // compilenode identifier
      // call case 5: prelude request
      var call214 = callmethodChecked(var_prelude, "typeOf(1)", [1], var_node);
      var var_aType = call214;
      var if215 = GraceDone;
      setLineNumber(906);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call218 = callmethodChecked(var_aType, "isSubtypeOf(1)", [1], var_eType);
      var call219 = callmethodChecked(call218, "not", []);
      if (Grace_isTrue(call219)) {
        setLineNumber(909);    // compilenode string
        var string221 = new GraceString("`");
        var string224 = new GraceString("`");
        var opresult226 = callmethodChecked(string224, "++(1)", [1], var_aType);
        var opresult228 = callmethodChecked(opresult226, "++(1)", [1], string221);
        setLineNumber(908);    // compilenode string
        var string230 = new GraceString("`, but returns an expression of type ");
        var string233 = new GraceString("type `");
        var opresult235 = callmethodChecked(string233, "++(1)", [1], var_eType);
        var opresult237 = callmethodChecked(opresult235, "++(1)", [1], string230);
        setLineNumber(907);    // compilenode string
        var string239 = new GraceString("` declares a result of ");
        var string242 = new GraceString("method `");
        var opresult244 = callmethodChecked(string242, "++(1)", [1], var_name);
        var opresult246 = callmethodChecked(opresult244, "++(1)", [1], string239);
        var opresult248 = callmethodChecked(opresult246, "++(1)", [1], opresult237);
        var opresult250 = callmethodChecked(opresult248, "++(1)", [1], opresult228);
        setLineNumber(909);    // compilenode identifier
        // call case 6: other requests
        setLineNumber(907);    // compilenode identifier
        var call251 = callmethodChecked(var_MethodError, "raise(1)with(1)", [1, 1], opresult250, var_node);
        if215 = call251;
      }
      return if215;
    };
    func212.paramTypes = [];
    func212.paramTypes.push([]);
    func212.paramTypes.push([]);
    func212.paramTypes.push([type_String, "name"]);
    func212.confidential = true;
    func212.paramCounts = [1, 1, 1];
    this.methods["check(1)matches(1)inMethod(1)"] = func212;
    func212.definitionLine = 903;
    func212.definitionModule = "staticTypes";
    setLineNumber(1060);    // compilenode method
    var func252 = function(argcv) {    // method outerAt(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_i = arguments[curarg];
      curarg++;
      setModuleName("staticTypes");
      var if253 = GraceDone;
      setLineNumber(1062);    // compilenode identifier
      var opresult256 = callmethodChecked(var_i, "\u2264(1)", [1], new GraceNum(1));
      if (Grace_isTrue(opresult256)) {
        setLineNumber(1063);    // compilenode member
        // call case 6: other requests
        var call258 = callmethodChecked(var_objectType, "unknown", []);
        return call258;
      }
      setLineNumber(1066);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      // call case 5: prelude request
      var call262 = callmethodChecked(var_prelude, "scope", []);
      var call263 = callmethodChecked(call262, "variables", []);
      var call264 = callmethodChecked(call263, "stack", []);
      var var_vStack = call264;
      setLineNumber(1067);    // compilenode identifier
      // call case 6: other requests
      var call266 = callmethodChecked(var_vStack, "at(1)", [1], var_i);
      var var_curr = call266;
      setLineNumber(1069);    // compilenode string
      var string268 = new GraceString("outer");
      var block269 = new GraceBlock(this, 1069, 1);
      setLineNumber(1);    // compilenode identifier
      block269.real = function(var_t) {
        setLineNumber(1069);    // compilenode identifier
        return var_t;
      };
      var block270 = new GraceBlock(this, 1069, 0);
      block270.real = function() {
        setLineNumber(1070);    // compilenode identifier
        var diff274 = callmethodChecked(var_i, "-(1)", [1], new GraceNum(1));
        // call case 4: self request
        onSelf = true;
        var call275 = callmethodChecked(this, "outerAt(1)", [1], diff274);
        var var_prev = call275;
        setLineNumber(1072);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        // call case 5: prelude request
        var call279 = callmethodChecked(var_prelude, "scope", []);
        var call280 = callmethodChecked(call279, "methods", []);
        var call281 = callmethodChecked(call280, "stack", []);
        var var_mStack = call281;
        setLineNumber(1074);    // compilenode identifier
        var diff285 = callmethodChecked(var_i, "-(1)", [1], new GraceNum(1));
        // call case 6: other requests
        var call286 = callmethodChecked(var_vStack, "at(1)", [1], diff285);
        var var_vars = call286;
        setLineNumber(1075);    // compilenode member
        // call case 6: other requests
        var diff291 = callmethodChecked(var_i, "-(1)", [1], new GraceNum(1));
        // call case 6: other requests
        var call292 = callmethodChecked(var_mStack, "at(1)", [1], diff291);
        var call293 = callmethodChecked(call292, "values", []);
        var var_meths = call293;
        setLineNumber(1077);    // compilenode identifier
        // call case 6: other requests
        var call295 = callmethodChecked(var_objectType, "fromMethods(1)", [1], var_meths);
        var var_oType = call295;
        setLineNumber(1078);    // compilenode string
        var string297 = new GraceString("outer");
        // call case 6: other requests
        var call298 = callmethodChecked(var_aMethodType, "member(1)ofType(1)", [1, 1], string297, var_oType);
        var var_mType = call298;
        setLineNumber(1080);    // compilenode string
        var string300 = new GraceString("outer");
        // call case 6: other requests
        var call301 = callmethodChecked(var_curr, "at(1)put(1)", [1, 1], string300, var_oType);
        setLineNumber(1081);    // compilenode string
        var string303 = new GraceString("outer");
        // call case 6: other requests
        // call case 6: other requests
        var call305 = callmethodChecked(var_mStack, "at(1)", [1], var_i);
        var call306 = callmethodChecked(call305, "at(1)put(1)", [1, 1], string303, var_mType);
        setLineNumber(1083);    // compilenode identifier
        return var_oType;
      };
      // call case 6: other requests
      setLineNumber(1069);    // compilenode identifier
      var call307 = callmethodChecked(var_curr, "atKey(1)do(1)else(1)", [1, 1, 1], string268, block269, block270);
      return call307;
    };
    func252.paramTypes = [];
    func252.paramTypes.push([type_Number, "i"]);
    func252.confidential = true;
    func252.paramCounts = [1];
    this.methods["outerAt(1)"] = func252;
    func252.definitionLine = 1060;
    func252.definitionModule = "staticTypes";
    setLineNumber(1090);    // compilenode method
    var func308 = function(argcv) {    // method processBody(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_body = arguments[curarg];
      curarg++;
      setModuleName("staticTypes");
      setLineNumber(1092);    // compilenode identifier
      // call case 4: self request
      onSelf = true;
      var call310 = callmethodChecked(this, "collectTypes(1)", [1], var_body);
      setLineNumber(1095);    // compilenode block
      var block311 = new GraceBlock(this, 1095, 0);
      block311.real = function() {
        // call case 6: other requests
        var call314 = callmethodChecked(var_body, "first", []);
        // call case 6: other requests
        // call case 5: prelude request
        var call316 = callmethodChecked(var_prelude, "Inherits", []);
        var call317 = callmethodChecked(call316, "match(1)", [1], call314);
        return call317;
      };
      // call case 6: other requests
      var call321 = callmethodChecked(var_body, "size", []);
      var opresult323 = callmethodChecked(call321, ">(1)", [1], new GraceNum(0));
      var opresult325 = callmethodChecked(opresult323, "&&(1)", [1], block311);
      var var_hasInherits = opresult325;
      var if326 = GraceDone;
      setLineNumber(1096);    // compilenode identifier
      if (Grace_isTrue(var_hasInherits)) {
        setLineNumber(1097);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call329 = callmethodChecked(var_body, "first", []);
        var call330 = callmethodChecked(call329, "value", []);
        var var_inheriting = call330;
        setLineNumber(1098);    // compilenode object
        var obj332 = Grace_allocObject(null, "object");
        obj332.definitionModule = "staticTypes";
        obj332.definitionLine = 1098;
        obj332.outer = this;
        var reader_staticTypes_outer333 = function() {
          return this.outer;
        };
        obj332.methods["outer"] = reader_staticTypes_outer333;
        var obj_init_332 = function() {
          var origSuperDepth = superDepth;
          superDepth = obj332;
          var func334 = function(argcv) {    // method visitIdentifier(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_ident = arguments[curarg];
            curarg++;
            setModuleName("staticTypes");
            var if335 = GraceDone;
            setLineNumber(1104);    // compilenode member
            // call case 6: other requests
            var call338 = callmethodChecked(var_ident, "value", []);
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call340 = callmethodChecked(this, "illegal", []);
            var call341 = callmethodChecked(call340, "contains(1)", [1], call338);
            if (Grace_isTrue(call341)) {
              setLineNumber(1106);    // compilenode string
              var string343 = new GraceString("in inheritance clause");
              setLineNumber(1105);    // compilenode string
              var string345 = new GraceString("` ");
              // call case 6: other requests
              var call348 = callmethodChecked(var_ident, "value", []);
              var string350 = new GraceString("reference to `");
              var opresult352 = callmethodChecked(string350, "++(1)", [1], call348);
              var opresult354 = callmethodChecked(opresult352, "++(1)", [1], string345);
              var opresult356 = callmethodChecked(opresult354, "++(1)", [1], string343);
              setLineNumber(1106);    // compilenode identifier
              // call case 6: other requests
              setLineNumber(1105);    // compilenode identifier
              var call357 = callmethodChecked(var_ObjectError, "raise(1)with(1)", [1, 1], opresult356, var_ident);
              if335 = call357;
            }
            return if335;
          };
          func334.paramCounts = [1];
          obj332.methods["visitIdentifier(1)"] = func334;
          func334.definitionLine = 1103;
          func334.definitionModule = "staticTypes";
          setLineNumber(1099);    // compilenode identifier
          // call case 6: other requests
          var call359 = callmethodChecked(var_ast, "baseVisitor$object(1)", [0, 1], this);
          obj332.superobj = call359;
          if (call359.data) obj332.data = call359.data;
          if (call359.hasOwnProperty('_value'))
              obj332._value = call359._value;
          setLineNumber(1101);    // compilenode string
          var string361 = new GraceString("self");
          var string362 = new GraceString("super");
          var array360 = new PrimitiveGraceList([string361, string362]);
          obj332.data["illegal"] = array360;
          var reader_staticTypes_illegal363 = function() {
            return this.data["illegal"];
          };
          reader_staticTypes_illegal363.def = true;
          reader_staticTypes_illegal363.confidential = true;
          obj332.methods["illegal"] = reader_staticTypes_illegal363;
          superDepth = origSuperDepth;
        };
        obj_init_332.apply(obj332, []);
        // call case 6: other requests
        setLineNumber(1098);    // compilenode identifier
        var call364 = callmethodChecked(var_inheriting, "accept(1)", [1], obj332);
        setLineNumber(1111);    // compilenode identifier
        // call case 5: prelude request
        var call366 = callmethodChecked(var_prelude, "typeOf(1)", [1], var_inheriting);
        if326 = call366;
      } else {
        setLineNumber(1113);    // compilenode member
        // call case 6: other requests
        var call368 = callmethodChecked(var_objectType, "base", []);
        if326 = call368;
      }
      var var_superType = if326;
      setLineNumber(1116);    // compilenode string
      var string370 = new GraceString("super");
      // call case 6: other requests
      // call case 6: other requests
      // call case 5: prelude request
      var call373 = callmethodChecked(var_prelude, "scope", []);
      var call374 = callmethodChecked(call373, "variables", []);
      var call375 = callmethodChecked(call374, "at(1)put(1)", [1, 1], string370, var_superType);
      var if376 = GraceDone;
      setLineNumber(1121);    // compilenode member
      // call case 6: other requests
      var call378 = callmethodChecked(var_superType, "isUnknown", []);
      if (Grace_isTrue(call378)) {
        setLineNumber(1122);    // compilenode string
        var string380 = new GraceString("Self");
        // call case 6: other requests
        // call case 6: other requests
        // call case 5: prelude request
        var call383 = callmethodChecked(var_prelude, "scope", []);
        var call384 = callmethodChecked(call383, "types", []);
        var call385 = callmethodChecked(call384, "at(1)put(1)", [1, 1], string380, var_superType);
        setLineNumber(1123);    // compilenode identifier
        if376 = var_superType;
      } else {
        setLineNumber(1126);    // compilenode array
        var array386 = new PrimitiveGraceList([]);
        var var_publicMethods = array386;
        setLineNumber(1127);    // compilenode array
        var array387 = new PrimitiveGraceList([]);
        var var_allMethods = array387;
        setLineNumber(1129);    // compilenode block
        var block389 = new GraceBlock(this, 1129, 1);
        setLineNumber(1);    // compilenode identifier
        block389.real = function(var_stmt) {
          setLineNumber(1130);    // compilenode identifier
          var cases390 = [];
          var block391 = new GraceBlock(this, 1130, 1);
          setLineNumber(1053);    // compilenode string
          var string394 = new GraceString("meth");
          // call case 6: other requests
          // call case 5: prelude request
          var call396 = callmethodChecked(var_prelude, "VariablePattern", []);
          var call397 = callmethodChecked(call396, "new(1)", [1], string394);
          setLineNumber(1130);    // compilenode member
          // call case 5: prelude request
          var call399 = callmethodChecked(var_prelude, "Method", []);
          // call case 6: other requests
          setLineNumber(1053);    // compilenode member
          // call case 5: prelude request
          var call401 = callmethodChecked(var_prelude, "AndPattern", []);
          var call402 = callmethodChecked(call401, "new(2)", [2], call397, call399);
          block391.pattern = call402;
          setLineNumber(1130);    // compilenode member
          // call case 5: prelude request
          var call404 = callmethodChecked(var_prelude, "Method", []);
          block391.real = function(var_meth) {
            setLineNumber(1131);    // compilenode identifier
            // call case 6: other requests
            var call406 = callmethodChecked(var_aMethodType, "fromNode(1)", [1], var_meth);
            var var_mType = call406;
            setLineNumber(1132);    // compilenode identifier
            // call case 6: other requests
            var call408 = callmethodChecked(var_allMethods, "push(1)", [1], var_mType);
            var if409 = GraceDone;
            setLineNumber(1133);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call411 = callmethodChecked(this, "isPublic(1)", [1], var_meth);
            if (Grace_isTrue(call411)) {
              setLineNumber(1134);    // compilenode identifier
              // call case 6: other requests
              var call413 = callmethodChecked(var_publicMethods, "push(1)", [1], var_mType);
              if409 = call413;
            }
            setLineNumber(1137);    // compilenode member
            // call case 6: other requests
            var call416 = callmethodChecked(var_mType, "name", []);
            // call case 6: other requests
            // call case 6: other requests
            // call case 5: prelude request
            var call419 = callmethodChecked(var_prelude, "scope", []);
            var call420 = callmethodChecked(call419, "methods", []);
            var call421 = callmethodChecked(call420, "at(1)put(1)", [1, 1], call416, var_mType);
            var if422 = GraceDone;
            setLineNumber(1138);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call424 = callmethodChecked(this, "isMember(1)", [1], var_mType);
            if (Grace_isTrue(call424)) {
              setLineNumber(1139);    // compilenode member
              // call case 6: other requests
              var call427 = callmethodChecked(var_mType, "name", []);
              // call case 6: other requests
              var call429 = callmethodChecked(var_mType, "returnType", []);
              // call case 6: other requests
              // call case 6: other requests
              // call case 5: prelude request
              var call432 = callmethodChecked(var_prelude, "scope", []);
              var call433 = callmethodChecked(call432, "variables", []);
              var call434 = callmethodChecked(call433, "at(1)put(1)", [1, 1], call427, call429);
              if422 = call434;
            }
            return if422;
          };
          cases390.push(block391);
          setLineNumber(1141);    // compilenode block
          var block435 = new GraceBlock(this, 1141, 1);
          setLineNumber(1053);    // compilenode string
          var string438 = new GraceString("defd");
          // call case 6: other requests
          // call case 5: prelude request
          var call440 = callmethodChecked(var_prelude, "VariablePattern", []);
          var call441 = callmethodChecked(call440, "new(1)", [1], string438);
          setLineNumber(1141);    // compilenode member
          // call case 5: prelude request
          var call443 = callmethodChecked(var_prelude, "Var", []);
          // call case 5: prelude request
          var call446 = callmethodChecked(var_prelude, "Def", []);
          var opresult448 = callmethodChecked(call446, "|(1)", [1], call443);
          // call case 6: other requests
          setLineNumber(1053);    // compilenode member
          // call case 5: prelude request
          var call450 = callmethodChecked(var_prelude, "AndPattern", []);
          var call451 = callmethodChecked(call450, "new(2)", [2], call441, opresult448);
          block435.pattern = call451;
          setLineNumber(1141);    // compilenode member
          // call case 5: prelude request
          var call453 = callmethodChecked(var_prelude, "Var", []);
          // call case 5: prelude request
          var call456 = callmethodChecked(var_prelude, "Def", []);
          var opresult458 = callmethodChecked(call456, "|(1)", [1], call453);
          block435.real = function(var_defd) {
            var if459 = GraceDone;
            setLineNumber(1142);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call461 = callmethodChecked(this, "isPublic(1)", [1], var_defd);
            if (Grace_isTrue(call461)) {
              setLineNumber(1143);    // compilenode identifier
              // call case 6: other requests
              var call463 = callmethodChecked(var_aMethodType, "fromNode(1)", [1], var_defd);
              var var_mType = call463;
              setLineNumber(1144);    // compilenode identifier
              // call case 6: other requests
              var call465 = callmethodChecked(var_allMethods, "push(1)", [1], var_mType);
              setLineNumber(1145);    // compilenode identifier
              // call case 6: other requests
              var call467 = callmethodChecked(var_publicMethods, "push(1)", [1], var_mType);
              if459 = call467;
            }
            return if459;
          };
          cases390.push(block435);
          setLineNumber(1147);    // compilenode block
          var block468 = new GraceBlock(this, 1147, 1);
          setLineNumber(1);    // compilenode identifier
          block468.real = function(var___95____95__22) {
            return GraceDone;
          };
          cases390.push(block468);
          setLineNumber(1130);    // compilematchcase
          var matchres390 = matchCase(var_stmt,cases390,false);
          setModuleName("staticTypes");
          return matchres390;
        };
        // call case 5: prelude request
        var call469 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_body, block389);
        setLineNumber(1150);    // compilenode string
        var string471 = new GraceString("Self");
        // call case 6: other requests
        var call473 = callmethodChecked(var_objectType, "fromMethods(1)", [1], var_allMethods);
        // call case 6: other requests
        // call case 6: other requests
        // call case 5: prelude request
        var call476 = callmethodChecked(var_prelude, "scope", []);
        var call477 = callmethodChecked(call476, "types", []);
        var call478 = callmethodChecked(call477, "at(1)put(1)", [1, 1], string471, call473);
        setLineNumber(1151);    // compilenode identifier
        // call case 6: other requests
        var call480 = callmethodChecked(var_objectType, "fromMethods(1)", [1], var_publicMethods);
        if376 = call480;
      }
      var var_publicType = if376;
      setLineNumber(1154);    // compilenode string
      var string482 = new GraceString("self");
      // call case 6: other requests
      // call case 6: other requests
      // call case 5: prelude request
      var call485 = callmethodChecked(var_prelude, "scope", []);
      var call486 = callmethodChecked(call485, "variables", []);
      var call487 = callmethodChecked(call486, "at(1)put(1)", [1, 1], string482, var_publicType);
      var if488 = GraceDone;
      setLineNumber(1157);    // compilenode identifier
      if (Grace_isTrue(var_hasInherits)) {
        setLineNumber(1158);    // compilenode member
        // call case 6: other requests
        var call490 = callmethodChecked(var_body, "size", []);
        var opresult493 = callmethodChecked(new GraceNum(2), "..(1)", [1], call490);
        if488 = opresult493;
      } else {
        setLineNumber(1160);    // compilenode member
        // call case 6: other requests
        var call495 = callmethodChecked(var_body, "indices", []);
        if488 = call495;
      }
      var var_indices = if488;
      setLineNumber(1163);    // compilenode block
      var block497 = new GraceBlock(this, 1163, 1);
      setLineNumber(1);    // compilenode identifier
      block497.real = function(var_i) {
        setLineNumber(1164);    // compilenode identifier
        // call case 6: other requests
        var call500 = callmethodChecked(var_body, "at(1)", [1], var_i);
        // call case 5: prelude request
        var call501 = callmethodChecked(var_prelude, "checkTypes(1)", [1], call500);
        return call501;
      };
      // call case 5: prelude request
      var call502 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_indices, block497);
      setLineNumber(1167);    // compilenode identifier
      return var_publicType;
    };
    func308.confidential = true;
    func308.paramCounts = [1];
    this.methods["processBody(1)"] = func308;
    func308.definitionLine = 1090;
    func308.definitionModule = "staticTypes";
    setLineNumber(1175);    // compilenode method
    var func503 = function(argcv) {    // method collectTypes(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_nodes = arguments[curarg];
      curarg++;
      setModuleName("staticTypes");
      setLineNumber(1176);    // compilenode array
      var array504 = new PrimitiveGraceList([]);
      var var_names = array504;
      setLineNumber(1177);    // compilenode array
      var array505 = new PrimitiveGraceList([]);
      var var_types = array505;
      setLineNumber(1178);    // compilenode array
      var array506 = new PrimitiveGraceList([]);
      var var_placeholders = array506;
      setLineNumber(1180);    // compilenode block
      var block508 = new GraceBlock(this, 1180, 1);
      setLineNumber(1);    // compilenode identifier
      block508.real = function(var_node) {
        setLineNumber(1181);    // compilenode identifier
        var cases509 = [];
        var block510 = new GraceBlock(this, 1181, 1);
        setLineNumber(1053);    // compilenode string
        var string513 = new GraceString("td");
        // call case 6: other requests
        // call case 5: prelude request
        var call515 = callmethodChecked(var_prelude, "VariablePattern", []);
        var call516 = callmethodChecked(call515, "new(1)", [1], string513);
        setLineNumber(1181);    // compilenode member
        // call case 5: prelude request
        var call518 = callmethodChecked(var_prelude, "TypeDeclaration", []);
        // call case 6: other requests
        setLineNumber(1053);    // compilenode member
        // call case 5: prelude request
        var call520 = callmethodChecked(var_prelude, "AndPattern", []);
        var call521 = callmethodChecked(call520, "new(2)", [2], call516, call518);
        block510.pattern = call521;
        setLineNumber(1181);    // compilenode member
        // call case 5: prelude request
        var call523 = callmethodChecked(var_prelude, "TypeDeclaration", []);
        block510.real = function(var_td) {
          var if524 = GraceDone;
          setLineNumber(1182);    // compilenode member
          // call case 6: other requests
          var call527 = callmethodChecked(var_td, "nameString", []);
          // call case 6: other requests
          var call528 = callmethodChecked(var_names, "contains(1)", [1], call527);
          if (Grace_isTrue(call528)) {
            setLineNumber(1184);    // compilenode string
            var string530 = new GraceString("the same name as another type in the same scope");
            setLineNumber(1183);    // compilenode string
            var string532 = new GraceString(" uses ");
            // call case 6: other requests
            var call535 = callmethodChecked(var_td, "nameString", []);
            var string537 = new GraceString("the type ");
            var opresult539 = callmethodChecked(string537, "++(1)", [1], call535);
            var opresult541 = callmethodChecked(opresult539, "++(1)", [1], string532);
            var opresult543 = callmethodChecked(opresult541, "++(1)", [1], string530);
            setLineNumber(1184);    // compilenode identifier
            // call case 6: other requests
            setLineNumber(1183);    // compilenode identifier
            var call544 = callmethodChecked(var_TypeDeclarationError, "raise(1)with(1)", [1, 1], opresult543, var_td);
            if524 = call544;
          }
          setLineNumber(1187);    // compilenode member
          // call case 6: other requests
          var call547 = callmethodChecked(var_td, "value", []);
          // call case 6: other requests
          var call548 = callmethodChecked(var_names, "push(1)", [1], call547);
          setLineNumber(1191);    // compilenode member
          // call case 6: other requests
          var call550 = callmethodChecked(var_objectType, "unknown", []);
          var var_placeholder = call550;
          setLineNumber(1192);    // compilenode identifier
          // call case 6: other requests
          var call552 = callmethodChecked(var_types, "push(1)", [1], var_td);
          setLineNumber(1193);    // compilenode identifier
          // call case 6: other requests
          var call554 = callmethodChecked(var_placeholders, "push(1)", [1], var_placeholder);
          setLineNumber(1194);    // compilenode member
          // call case 6: other requests
          var call557 = callmethodChecked(var_td, "nameString", []);
          // call case 6: other requests
          // call case 6: other requests
          // call case 5: prelude request
          var call560 = callmethodChecked(var_prelude, "scope", []);
          var call561 = callmethodChecked(call560, "types", []);
          var call562 = callmethodChecked(call561, "at(1)put(1)", [1, 1], call557, var_placeholder);
          return call562;
        };
        cases509.push(block510);
        setLineNumber(1195);    // compilenode block
        var block563 = new GraceBlock(this, 1195, 1);
        setLineNumber(1);    // compilenode identifier
        block563.real = function(var___95____95__23) {
          return GraceDone;
        };
        cases509.push(block563);
        setLineNumber(1181);    // compilematchcase
        var matchres509 = matchCase(var_node,cases509,false);
        setModuleName("staticTypes");
        return matchres509;
      };
      // call case 5: prelude request
      var call564 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_nodes, block508);
      setLineNumber(1198);    // compilenode block
      var block566 = new GraceBlock(this, 1198, 2);
      setLineNumber(1);    // compilenode identifier
      block566.real = function(var_td, var_ph) {
        setLineNumber(1199);    // compilenode identifier
        // call case 6: other requests
        var call568 = callmethodChecked(var_objectType, "fromDType(1)", [1], var_td);
        var var_oType = call568;
        setLineNumber(1200);    // compilenode identifier
        // call case 5: prelude request
        var call570 = callmethodChecked(var_prelude, "become(2)", [2], var_ph, var_oType);
        return call570;
      };
      // call case 5: prelude request
      var call571 = callmethodChecked(var_prelude, "for(1)and(1)do(1)", [1, 1, 1], var_types, var_placeholders, block566);
      return call571;
    };
    func503.confidential = true;
    func503.paramCounts = [1];
    this.methods["collectTypes(1)"] = func503;
    func503.definitionLine = 1175;
    func503.definitionModule = "staticTypes";
    setLineNumber(1206);    // compilenode method
    var func572 = function(argcv) {    // method isPublic(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_node = arguments[curarg];
      curarg++;
      setModuleName("staticTypes");
      setLineNumber(1207);    // compilenode identifier
      var cases573 = [];
      var block574 = new GraceBlock(this, 1207, 1);
      setLineNumber(1053);    // compilenode string
      var string577 = new GraceString("__24");
      // call case 6: other requests
      // call case 5: prelude request
      var call579 = callmethodChecked(var_prelude, "VariablePattern", []);
      var call580 = callmethodChecked(call579, "new(1)", [1], string577);
      setLineNumber(1207);    // compilenode member
      // call case 5: prelude request
      var call582 = callmethodChecked(var_prelude, "Method", []);
      // call case 6: other requests
      setLineNumber(1053);    // compilenode member
      // call case 5: prelude request
      var call584 = callmethodChecked(var_prelude, "AndPattern", []);
      var call585 = callmethodChecked(call584, "new(2)", [2], call580, call582);
      block574.pattern = call585;
      setLineNumber(1207);    // compilenode member
      // call case 5: prelude request
      var call587 = callmethodChecked(var_prelude, "Method", []);
      block574.real = function(var___95____95__24) {
        setLineNumber(1208);    // compilenode member
        // call case 6: other requests
        var call590 = callmethodChecked(var_node, "annotations", []);
        var block591 = new GraceBlock(this, 1208, 1);
        setLineNumber(1);    // compilenode identifier
        block591.real = function(var_ann) {
          var if592 = GraceDone;
          setLineNumber(1209);    // compilenode string
          var string593 = new GraceString("confidential");
          // call case 6: other requests
          var call596 = callmethodChecked(var_ann, "value", []);
          var opresult598 = callmethodChecked(call596, "==(1)", [1], string593);
          if (Grace_isTrue(opresult598)) {
            setLineNumber(1210);    // compilenode identifier
            throw new ReturnException(GraceFalse, returnTarget);
          }
          return if592;
        };
        // call case 5: prelude request
        var call599 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call590, block591);
        setLineNumber(1214);    // compilenode identifier
        return GraceTrue;
      };
      cases573.push(block574);
      setLineNumber(1215);    // compilenode block
      var block600 = new GraceBlock(this, 1215, 1);
      setLineNumber(1);    // compilenode identifier
      block600.real = function(var___95____95__25) {
        setLineNumber(1216);    // compilenode member
        // call case 6: other requests
        var call603 = callmethodChecked(var_node, "annotations", []);
        var block604 = new GraceBlock(this, 1216, 1);
        setLineNumber(1);    // compilenode identifier
        block604.real = function(var_ann) {
          var if605 = GraceDone;
          setLineNumber(1217);    // compilenode string
          var string606 = new GraceString("readable");
          // call case 6: other requests
          var call609 = callmethodChecked(var_ann, "value", []);
          var opresult611 = callmethodChecked(call609, "==(1)", [1], string606);
          var string613 = new GraceString("public");
          // call case 6: other requests
          var call616 = callmethodChecked(var_ann, "value", []);
          var opresult618 = callmethodChecked(call616, "==(1)", [1], string613);
          var opresult620 = callmethodChecked(opresult618, "||(1)", [1], opresult611);
          if (Grace_isTrue(opresult620)) {
            setLineNumber(1218);    // compilenode identifier
            throw new ReturnException(GraceTrue, returnTarget);
          }
          return if605;
        };
        // call case 5: prelude request
        var call621 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call603, block604);
        setLineNumber(1222);    // compilenode identifier
        return GraceFalse;
      };
      cases573.push(block600);
      setLineNumber(1207);    // compilematchcase
      var matchres573 = matchCase(var_node,cases573,false);
      setModuleName("staticTypes");
      return matchres573;
    };
    func572.confidential = true;
    func572.paramCounts = [1];
    this.methods["isPublic(1)"] = func572;
    func572.definitionLine = 1206;
    func572.definitionModule = "staticTypes";
    setLineNumber(1228);    // compilenode method
    var func622 = function(argcv) {    // method isMember(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_mType = arguments[curarg];
      curarg++;
      setModuleName("staticTypes");
      setLineNumber(1229);    // compilenode block
      var block623 = new GraceBlock(this, 1229, 0);
      block623.real = function() {
        setLineNumber(1230);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        // call case 6: other requests
        // call case 6: other requests
        var call629 = callmethodChecked(var_mType, "signature", []);
        var call630 = callmethodChecked(call629, "first", []);
        var call631 = callmethodChecked(call630, "parameters", []);
        var call632 = callmethodChecked(call631, "size", []);
        var opresult634 = callmethodChecked(call632, "==(1)", [1], new GraceNum(0));
        return opresult634;
      };
      setLineNumber(1229);    // compilenode member
      // call case 6: other requests
      // call case 6: other requests
      var call639 = callmethodChecked(var_mType, "signature", []);
      var call640 = callmethodChecked(call639, "size", []);
      var opresult642 = callmethodChecked(call640, "==(1)", [1], new GraceNum(1));
      var opresult644 = callmethodChecked(opresult642, "&&(1)", [1], block623);
      return opresult644;
    };
    func622.paramTypes = [];
    func622.paramTypes.push([]);
    func622.confidential = true;
    func622.paramCounts = [1];
    this.methods["isMember(1)"] = func622;
    func622.definitionLine = 1228;
    func622.definitionModule = "staticTypes";
    setLineNumber(1239);    // compilenode method
    var func645 = function(argcv) {    // method for(_)doWithBreak(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_a = arguments[curarg];
      curarg++;
      var var_bl = arguments[curarg];
      curarg++;
      setModuleName("staticTypes");
      setLineNumber(1240);    // compilenode block
      var block647 = new GraceBlock(this, 1240, 1);
      setLineNumber(1);    // compilenode identifier
      block647.real = function(var_e) {
        setLineNumber(1241);    // compilenode block
        var block649 = new GraceBlock(this, 1241, 0);
        block649.real = function() {
          setLineNumber(1243);    // compilenode identifier
          throw new ReturnException(var_done, returnTarget);
          return undefined;
        };
        // call case 6: other requests
        setLineNumber(1241);    // compilenode identifier
        var call650 = callmethodChecked(var_bl, "apply(2)", [2], var_e, block649);
        return call650;
      };
      // call case 5: prelude request
      var call651 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_a, block647);
      return call651;
    };
    func645.paramCounts = [1, 1];
    this.methods["for(1)doWithBreak(1)"] = func645;
    func645.definitionLine = 1239;
    func645.definitionModule = "staticTypes";
    setLineNumber(1248);    // compilenode method
    var func652 = function(argcv) {    // method for(_)doWithContinue(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_a = arguments[curarg];
      curarg++;
      var var_bl = arguments[curarg];
      curarg++;
      setModuleName("staticTypes");
      setLineNumber(1249);    // compilenode block
      var block654 = new GraceBlock(this, 1249, 1);
      setLineNumber(1);    // compilenode identifier
      block654.real = function(var_e) {
        setLineNumber(1250);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call656 = callmethodChecked(this, "continue'(2)", [2], var_e, var_bl);
        return call656;
      };
      // call case 5: prelude request
      var call657 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_a, block654);
      return call657;
    };
    func652.paramCounts = [1, 1];
    this.methods["for(1)doWithContinue(1)"] = func652;
    func652.definitionLine = 1248;
    func652.definitionModule = "staticTypes";
    setLineNumber(1254);    // compilenode method
    var func658 = function(argcv) {    // method continue'(_,_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_e = arguments[curarg];
      curarg++;
      var var_bl = arguments[curarg];
      curarg++;
      setModuleName("staticTypes");
      setLineNumber(1255);    // compilenode block
      var block660 = new GraceBlock(this, 1255, 0);
      block660.real = function() {
        setLineNumber(1257);    // compilenode identifier
        throw new ReturnException(var_done, returnTarget);
        return undefined;
      };
      // call case 6: other requests
      setLineNumber(1255);    // compilenode identifier
      var call661 = callmethodChecked(var_bl, "apply(2)", [2], var_e, block660);
      return call661;
    };
    func658.confidential = true;
    func658.paramCounts = [2];
    this.methods["continue'(2)"] = func658;
    func658.definitionLine = 1254;
    func658.definitionModule = "staticTypes";
    setLineNumber(1262);    // compilenode method
    var func662 = function(argcv) {    // method checker(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_nodes = arguments[curarg];
      curarg++;
      setModuleName("staticTypes");
      setLineNumber(1263);    // compilenode identifier
      // call case 5: prelude request
      var call664 = callmethodChecked(var_prelude, "check(1)", [1], var_nodes);
      return call664;
    };
    func662.paramCounts = [1];
    this.methods["checker(1)"] = func662;
    func662.definitionLine = 1262;
    func662.definitionModule = "staticTypes";
    setLineNumber(12);    // compilenode string
    var string666 = new GraceString("TypeError");
    // call case 6: other requests
    // call case 5: prelude request
    var call668 = callmethodChecked(var_prelude, "CheckerFailure", []);
    var call669 = callmethodChecked(call668, "refine(1)", [1], string666);
    var var_TypeError = call669;
    setLineNumber(1);    // compilenode method
    var func670 = function(argcv) {    // method TypeError
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      setModuleName("staticTypes");
      // TypeError is a simple accessor - elide try ... catch
      setLineNumber(12);    // compilenode identifier
      return var_TypeError;
    };
    func670.paramCounts = [0];
    this.methods["TypeError"] = func670;
    func670.definitionLine = 1;
    func670.definitionModule = "staticTypes";
    this.methods["TypeError"].debug = "def";
    setLineNumber(17);    // compilenode typedec
    // Type decl MethodType
    //   Type literal 
    var type672 = new GraceType("MethodType");
    type672.typeMethods.push("name");
    type672.typeMethods.push("signature");
    type672.typeMethods.push("returnType");
    type672.typeMethods.push("isSpecialisationOf(1)");
    var var_MethodType = type672;
    setLineNumber(1);    // compilenode method
    var func673 = function(argcv) {    // method MethodType
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      setModuleName("staticTypes");
      // MethodType is a simple accessor - elide try ... catch
      setLineNumber(17);    // compilenode identifier
      return var_MethodType;
    };
    func673.paramCounts = [0];
    this.methods["MethodType"] = func673;
    func673.definitionLine = 1;
    func673.definitionModule = "staticTypes";
    setLineNumber(24);    // compilenode typedec
    // Type decl Param
    //   Type literal 
    var type675 = new GraceType("Param");
    type675.typeMethods.push("name");
    type675.typeMethods.push("typeAnnotation");
    var var_Param = type675;
    setLineNumber(1);    // compilenode method
    var func676 = function(argcv) {    // method Param
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      setModuleName("staticTypes");
      // Param is a simple accessor - elide try ... catch
      setLineNumber(24);    // compilenode identifier
      return var_Param;
    };
    func676.paramCounts = [0];
    this.methods["Param"] = func676;
    func676.definitionLine = 1;
    func676.definitionModule = "staticTypes";
    setLineNumber(30);    // compilenode object
    var obj677 = Grace_allocObject(GraceObject, "aParam");
    obj677.definitionModule = "staticTypes";
    obj677.definitionLine = 30;
    obj677.outer = this;
    var reader_staticTypes_outer678 = function() {
      return this.outer;
    };
    obj677.methods["outer"] = reader_staticTypes_outer678;
    var obj_init_677 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj677;
      var func679 = function(argcv) {    // method withName(_)ofType(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_name__39__ = arguments[curarg];
        curarg++;
        var var_type__39__ = arguments[curarg];
        curarg++;
        setModuleName("staticTypes");
        setLineNumber(32);    // compilenode object
        var obj680 = Grace_allocObject(GraceObject, "aParam.withName(_)ofType(_)");
        obj680.definitionModule = "staticTypes";
        obj680.definitionLine = 32;
        obj680.outer = this;
        var reader_staticTypes_outer681 = function() {
          return this.outer;
        };
        obj680.methods["outer"] = reader_staticTypes_outer681;
        var obj_init_680 = function() {
          var origSuperDepth = superDepth;
          superDepth = obj680;
          var func682 = function(argcv) {    // method asString
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("staticTypes");
            setLineNumber(35);    // compilenode string
            var string683 = new GraceString("");
            // call case 4: self request
            onSelf = true;
            var call686 = callmethodChecked(this, "typeAnnotation", []);
            var string688 = new GraceString(":");
            // call case 4: self request
            onSelf = true;
            var call691 = callmethodChecked(this, "name", []);
            var string693 = new GraceString("");
            var opresult695 = callmethodChecked(string693, "++(1)", [1], call691);
            var opresult697 = callmethodChecked(opresult695, "++(1)", [1], string688);
            var opresult699 = callmethodChecked(opresult697, "++(1)", [1], call686);
            var opresult701 = callmethodChecked(opresult699, "++(1)", [1], string683);
            return opresult701;
          };
          func682.paramCounts = [0];
          obj680.methods["asString"] = func682;
          func682.definitionLine = 35;
          func682.definitionModule = "staticTypes";
          setLineNumber(33);    // compilenode identifier
          obj680.data["name"] = var_name__39__;
          var reader_staticTypes_name702 = function() {
            return this.data["name"];
          };
          reader_staticTypes_name702.def = true;
          obj680.methods["name"] = reader_staticTypes_name702;
          setLineNumber(34);    // compilenode identifier
          obj680.data["typeAnnotation"] = var_type__39__;
          var reader_staticTypes_typeAnnotation703 = function() {
            return this.data["typeAnnotation"];
          };
          reader_staticTypes_typeAnnotation703.def = true;
          obj680.methods["typeAnnotation"] = reader_staticTypes_typeAnnotation703;
          superDepth = origSuperDepth;
        };
        obj_init_680.apply(obj680, []);
        return obj680;
      };
      func679.paramTypes = [];
      func679.paramTypes.push([type_String, "name'"]);
      func679.paramTypes.push([]);
      func679.paramCounts = [1, 1];
      obj677.methods["withName(1)ofType(1)"] = func679;
      func679.definitionLine = 32;
      func679.definitionModule = "staticTypes";
        var func704 = function(argcv) {    // method withName(_)ofType(_)$object(_)
          var curarg = 1;
          var var_name__39__ = arguments[curarg];
          curarg++;
          var var_type__39__ = arguments[curarg];
          curarg++;
          var inheritingObject = arguments[curarg++];
          // Start argument processing
          curarg = 1;
          curarg++;
          curarg++;
          // End argument processing
          setModuleName("staticTypes");
          var returnTarget = invocationCount;
          invocationCount++;
          var obj705 = Grace_allocObject(GraceObject, "withName(1)ofType(1)");
          obj705.definitionModule = "staticTypes";
          obj705.definitionLine = 32;
          var inho705 = inheritingObject;
          while (inho705.superobj) inho705 = inho705.superobj;
          inho705.superobj = obj705;
          obj705.data = inheritingObject.data;
          if (inheritingObject.hasOwnProperty('_value'))
            obj705._value = inheritingObject._value;
          obj705.outer = this;
          var reader_staticTypes_outer706 = function() {
            return this.outer;
          };
          obj705.methods["outer"] = reader_staticTypes_outer706;
          var obj_init_705 = function() {
            var origSuperDepth = superDepth;
            superDepth = obj705;
            var func707 = function(argcv) {    // method asString
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("staticTypes");
              setLineNumber(35);    // compilenode string
              var string708 = new GraceString("");
              // call case 4: self request
              onSelf = true;
              var call711 = callmethodChecked(this, "typeAnnotation", []);
              var string713 = new GraceString(":");
              // call case 4: self request
              onSelf = true;
              var call716 = callmethodChecked(this, "name", []);
              var string718 = new GraceString("");
              var opresult720 = callmethodChecked(string718, "++(1)", [1], call716);
              var opresult722 = callmethodChecked(opresult720, "++(1)", [1], string713);
              var opresult724 = callmethodChecked(opresult722, "++(1)", [1], call711);
              var opresult726 = callmethodChecked(opresult724, "++(1)", [1], string708);
              return opresult726;
            };
            func707.paramCounts = [0];
            obj705.methods["asString"] = func707;
            func707.definitionLine = 35;
            func707.definitionModule = "staticTypes";
            setLineNumber(33);    // compilenode identifier
            obj705.data["name"] = var_name__39__;
            var reader_staticTypes_name727 = function() {
              return this.data["name"];
            };
            reader_staticTypes_name727.def = true;
            obj705.methods["name"] = reader_staticTypes_name727;
            setLineNumber(34);    // compilenode identifier
            obj705.data["typeAnnotation"] = var_type__39__;
            var reader_staticTypes_typeAnnotation728 = function() {
              return this.data["typeAnnotation"];
            };
            reader_staticTypes_typeAnnotation728.def = true;
            obj705.methods["typeAnnotation"] = reader_staticTypes_typeAnnotation728;
            superDepth = origSuperDepth;
          };
          obj_init_705.apply(inheritingObject, []);
          return obj705;
          };
          func704.paramTypes = [];
          func704.paramTypes.push([type_String, "name'"]);
          func704.paramTypes.push([]);
          obj677.methods["withName(1)ofType(1)$object(1)"] = func704;
        var func729 = function(argcv) {    // method ofType(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_type__39__ = arguments[curarg];
          curarg++;
          setModuleName("staticTypes");
          setLineNumber(40);    // compilenode string
          var string731 = new GraceString("_");
          // call case 4: self request
          onSelf = true;
          var call732 = callmethodChecked(this, "withName(1)ofType(1)", [1, 1], string731, var_type__39__);
          return call732;
        };
        func729.paramTypes = [];
        func729.paramTypes.push([type_Object, "type'"]);
        func729.paramCounts = [1];
        obj677.methods["ofType(1)"] = func729;
        func729.definitionLine = 39;
        func729.definitionModule = "staticTypes";
        superDepth = origSuperDepth;
      };
      obj_init_677.apply(obj677, []);
      var var_aParam = obj677;
      setLineNumber(1);    // compilenode method
      var func733 = function(argcv) {    // method aParam
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("staticTypes");
        // aParam is a simple accessor - elide try ... catch
        setLineNumber(30);    // compilenode identifier
        return var_aParam;
      };
      func733.paramCounts = [0];
      this.methods["aParam"] = func733;
      func733.definitionLine = 1;
      func733.definitionModule = "staticTypes";
      this.methods["aParam"].debug = "def";
      setLineNumber(44);    // compilenode typedec
      // Type decl MixPart
      //   Type literal 
      var type735 = new GraceType("MixPart");
      type735.typeMethods.push("name");
      type735.typeMethods.push("parameters");
      var var_MixPart = type735;
      setLineNumber(1);    // compilenode method
      var func736 = function(argcv) {    // method MixPart
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("staticTypes");
        // MixPart is a simple accessor - elide try ... catch
        setLineNumber(44);    // compilenode identifier
        return var_MixPart;
      };
      func736.paramCounts = [0];
      this.methods["MixPart"] = func736;
      func736.definitionLine = 1;
      func736.definitionModule = "staticTypes";
      setLineNumber(57);    // compilenode object
      var obj737 = Grace_allocObject(GraceObject, "aMethodType");
      obj737.definitionModule = "staticTypes";
      obj737.definitionLine = 57;
      obj737.outer = this;
      var reader_staticTypes_outer738 = function() {
        return this.outer;
      };
      obj737.methods["outer"] = reader_staticTypes_outer738;
      var obj_init_737 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj737;
        var func739 = function(argcv) {    // method signature(_)returnType(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_signature__39__ = arguments[curarg];
          curarg++;
          var var_rType = arguments[curarg];
          curarg++;
          setModuleName("staticTypes");
          setLineNumber(60);    // compilenode object
          var obj740 = Grace_allocObject(GraceObject, "aMethodType.signature(_)returnType(_)");
          obj740.definitionModule = "staticTypes";
          obj740.definitionLine = 60;
          obj740.outer = this;
          var reader_staticTypes_outer741 = function() {
            return this.outer;
          };
          obj740.methods["outer"] = reader_staticTypes_outer741;
          var obj_init_740 = function() {
            var origSuperDepth = superDepth;
            superDepth = obj740;
            var func742 = function(argcv) {    // method isSpecialisationOf(_)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_other = arguments[curarg];
              curarg++;
              setModuleName("staticTypes");
              var if743 = GraceDone;
              setLineNumber(95);    // compilenode identifier
              // call case 4: self request
              onSelf = true;
              var call745 = callmethodChecked(this, "isMe(1)", [1], var_other);
              if (Grace_isTrue(call745)) {
                setLineNumber(96);    // compilenode identifier
                return GraceTrue;
              }
              var if746 = GraceDone;
              setLineNumber(99);    // compilenode member
              // call case 6: other requests
              var call748 = callmethodChecked(var_other, "name", []);
              // call case 4: self request
              onSelf = true;
              var call751 = callmethodChecked(this, "name", []);
              var opresult753 = callmethodChecked(call751, "\u2260(1)", [1], call748);
              if (Grace_isTrue(opresult753)) {
                setLineNumber(100);    // compilenode identifier
                return GraceFalse;
              }
              var if754 = GraceDone;
              setLineNumber(103);    // compilenode member
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call757 = callmethodChecked(this, "signature", []);
              var call758 = callmethodChecked(call757, "size", []);
              // call case 6: other requests
              // call case 6: other requests
              var call762 = callmethodChecked(var_other, "signature", []);
              var call763 = callmethodChecked(call762, "size", []);
              var opresult765 = callmethodChecked(call763, "\u2260(1)", [1], call758);
              if (Grace_isTrue(opresult765)) {
                setLineNumber(104);    // compilenode identifier
                return GraceFalse;
              }
              setLineNumber(107);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call768 = callmethodChecked(this, "signature", []);
              // call case 6: other requests
              var call770 = callmethodChecked(var_other, "signature", []);
              var block771 = new GraceBlock(this, 107, 2);
              setLineNumber(1);    // compilenode identifier
              block771.real = function(var_part, var_part__39__) {
                var if772 = GraceDone;
                setLineNumber(108);    // compilenode member
                // call case 6: other requests
                var call774 = callmethodChecked(var_part__39__, "name", []);
                // call case 6: other requests
                var call777 = callmethodChecked(var_part, "name", []);
                var opresult779 = callmethodChecked(call777, "\u2260(1)", [1], call774);
                if (Grace_isTrue(opresult779)) {
                  setLineNumber(109);    // compilenode identifier
                  throw new ReturnException(GraceFalse, returnTarget);
                }
                setLineNumber(112);    // compilenode member
                // call case 6: other requests
                var call782 = callmethodChecked(var_part, "parameters", []);
                // call case 6: other requests
                var call784 = callmethodChecked(var_part__39__, "parameters", []);
                var block785 = new GraceBlock(this, 112, 2);
                setLineNumber(1);    // compilenode identifier
                block785.real = function(var_p, var_p__39__) {
                  setLineNumber(113);    // compilenode member
                  // call case 6: other requests
                  var call787 = callmethodChecked(var_p, "typeAnnotation", []);
                  var var_pt = call787;
                  setLineNumber(114);    // compilenode member
                  // call case 6: other requests
                  var call789 = callmethodChecked(var_p__39__, "typeAnnotation", []);
                  var var_pt__39__ = call789;
                  var if790 = GraceDone;
                  setLineNumber(117);    // compilenode member
                  // call case 6: other requests
                  // call case 6: other requests
                  var call793 = callmethodChecked(var_pt__39__, "isSubtypeOf(1)", [1], var_pt);
                  var call794 = callmethodChecked(call793, "not", []);
                  if (Grace_isTrue(call794)) {
                    setLineNumber(118);    // compilenode identifier
                    throw new ReturnException(GraceFalse, returnTarget);
                  }
                  return if790;
                };
                // call case 5: prelude request
                var call795 = callmethodChecked(var_prelude, "for(1)and(1)do(1)", [1, 1, 1], call782, call784, block785);
                return call795;
              };
              // call case 5: prelude request
              var call796 = callmethodChecked(var_prelude, "for(1)and(1)do(1)", [1, 1, 1], call768, call770, block771);
              setLineNumber(123);    // compilenode member
              // call case 6: other requests
              var call799 = callmethodChecked(var_other, "returnType", []);
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call801 = callmethodChecked(this, "returnType", []);
              var call802 = callmethodChecked(call801, "isSubtypeOf(1)", [1], call799);
              return call802;
            };
            func742.paramTypes = [];
            func742.paramTypes.push([]);
            func742.paramCounts = [1];
            obj740.methods["isSpecialisationOf(1)"] = func742;
            func742.definitionLine = 94;
            func742.definitionModule = "staticTypes";
            setLineNumber(62);    // compilenode identifier
            obj740.data["signature"] = var_signature__39__;
            var reader_staticTypes_signature803 = function() {
              return this.data["signature"];
            };
            reader_staticTypes_signature803.def = true;
            obj740.methods["signature"] = reader_staticTypes_signature803;
            setLineNumber(63);    // compilenode identifier
            obj740.data["returnType"] = var_rType;
            var reader_staticTypes_returnType804 = function() {
              return this.data["returnType"];
            };
            reader_staticTypes_returnType804.def = true;
            obj740.methods["returnType"] = reader_staticTypes_returnType804;
            setLineNumber(65);    // compilenode string
            var string805 = new GraceString("");
            obj740.data["name"] = string805;
            var reader_staticTypes_name806 = function() {
              return this.data["name"];
            };
            obj740.methods["name"] = reader_staticTypes_name806;
            obj740.data["name"] = string805;
            var writer_staticTypes_name806 = function(argcv, o) {
              this.data["name"] = o;
              return GraceDone;
            };
            obj740.methods["name:=(1)"] = writer_staticTypes_name806;
            writer_staticTypes_name806.confidential = true;
            obj740.mutable = true;
            setLineNumber(66);    // compilenode string
            var string807 = new GraceString("");
            obj740.data["show"] = string807;
            var reader_staticTypes_show808 = function() {
              return this.data["show"];
            };
            obj740.methods["show"] = reader_staticTypes_show808;
            obj740.data["show"] = string807;
            var writer_staticTypes_show808 = function(argcv, o) {
              this.data["show"] = o;
              return GraceDone;
            };
            obj740.methods["show:=(1)"] = writer_staticTypes_show808;
            reader_staticTypes_show808.confidential = true;
            writer_staticTypes_show808.confidential = true;
            obj740.mutable = true;
            setLineNumber(68);    // compilenode num
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call811 = callmethodChecked(this, "signature", []);
            var call812 = callmethodChecked(call811, "at(1)", [1], new GraceNum(1));
            obj740.data["fst"] = call812;
            var reader_staticTypes_fst813 = function() {
              return this.data["fst"];
            };
            reader_staticTypes_fst813.def = true;
            reader_staticTypes_fst813.confidential = true;
            obj740.methods["fst"] = reader_staticTypes_fst813;
            var if814 = GraceDone;
            setLineNumber(70);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call819 = callmethodChecked(this, "fst", []);
            var call820 = callmethodChecked(call819, "parameters", []);
            var call821 = callmethodChecked(call820, "size", []);
            var opresult823 = callmethodChecked(call821, "==(1)", [1], new GraceNum(0));
            if (Grace_isTrue(opresult823)) {
              setLineNumber(71);    // compilenode member
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call827 = callmethodChecked(this, "fst", []);
              var call828 = callmethodChecked(call827, "name", []);
              // call case 4: self request
              onSelf = true;
              var call829 = callmethodChecked(this, "name:=(1)", [1], call828);
              setLineNumber(72);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call832 = callmethodChecked(this, "name", []);
              // call case 4: self request
              onSelf = true;
              var call833 = callmethodChecked(this, "show:=(1)", [1], call832);
              if814 = call833;
            } else {
              setLineNumber(74);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call836 = callmethodChecked(this, "signature", []);
              var block837 = new GraceBlock(this, 74, 1);
              setLineNumber(1);    // compilenode identifier
              block837.real = function(var_part) {
                setLineNumber(75);    // compilenode string
                var string839 = new GraceString("()");
                // call case 6: other requests
                var call842 = callmethodChecked(var_part, "name", []);
                var string844 = new GraceString("");
                // call case 4: self request
                onSelf = true;
                var call847 = callmethodChecked(this, "name", []);
                var string849 = new GraceString("");
                var opresult851 = callmethodChecked(string849, "++(1)", [1], call847);
                var opresult853 = callmethodChecked(opresult851, "++(1)", [1], string844);
                var opresult855 = callmethodChecked(opresult853, "++(1)", [1], call842);
                var opresult857 = callmethodChecked(opresult855, "++(1)", [1], string839);
                // call case 4: self request
                onSelf = true;
                var call858 = callmethodChecked(this, "name:=(1)", [1], opresult857);
                setLineNumber(76);    // compilenode string
                var string860 = new GraceString("(");
                // call case 6: other requests
                var call863 = callmethodChecked(var_part, "name", []);
                var string865 = new GraceString("");
                // call case 4: self request
                onSelf = true;
                var call868 = callmethodChecked(this, "show", []);
                var string870 = new GraceString("");
                var opresult872 = callmethodChecked(string870, "++(1)", [1], call868);
                var opresult874 = callmethodChecked(opresult872, "++(1)", [1], string865);
                var opresult876 = callmethodChecked(opresult874, "++(1)", [1], call863);
                var opresult878 = callmethodChecked(opresult876, "++(1)", [1], string860);
                // call case 4: self request
                onSelf = true;
                var call879 = callmethodChecked(this, "show:=(1)", [1], opresult878);
                setLineNumber(77);    // compilenode identifier
                var var_once = GraceFalse;
                setLineNumber(78);    // compilenode member
                // call case 6: other requests
                var call882 = callmethodChecked(var_part, "parameters", []);
                var block883 = new GraceBlock(this, 78, 1);
                setLineNumber(1);    // compilenode identifier
                block883.real = function(var_param) {
                  var if884 = GraceDone;
                  setLineNumber(79);    // compilenode identifier
                  if (Grace_isTrue(var_once)) {
                    setLineNumber(80);    // compilenode string
                    var string886 = new GraceString(", ");
                    // call case 4: self request
                    onSelf = true;
                    var call889 = callmethodChecked(this, "show", []);
                    var string891 = new GraceString("");
                    var opresult893 = callmethodChecked(string891, "++(1)", [1], call889);
                    var opresult895 = callmethodChecked(opresult893, "++(1)", [1], string886);
                    // call case 4: self request
                    onSelf = true;
                    var call896 = callmethodChecked(this, "show:=(1)", [1], opresult895);
                    if884 = call896;
                  }
                  setLineNumber(82);    // compilenode string
                  var string898 = new GraceString("");
                  var string901 = new GraceString("");
                  // call case 4: self request
                  onSelf = true;
                  var call904 = callmethodChecked(this, "show", []);
                  var string906 = new GraceString("");
                  var opresult908 = callmethodChecked(string906, "++(1)", [1], call904);
                  var opresult910 = callmethodChecked(opresult908, "++(1)", [1], string901);
                  var opresult912 = callmethodChecked(opresult910, "++(1)", [1], var_param);
                  var opresult914 = callmethodChecked(opresult912, "++(1)", [1], string898);
                  // call case 4: self request
                  onSelf = true;
                  var call915 = callmethodChecked(this, "show:=(1)", [1], opresult914);
                  setLineNumber(83);    // compilenode identifier
                  var_once = GraceTrue;
                  return GraceDone;
                };
                // call case 5: prelude request
                var call916 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call882, block883);
                setLineNumber(85);    // compilenode string
                var string918 = new GraceString(")");
                // call case 4: self request
                onSelf = true;
                var call921 = callmethodChecked(this, "show", []);
                var string923 = new GraceString("");
                var opresult925 = callmethodChecked(string923, "++(1)", [1], call921);
                var opresult927 = callmethodChecked(opresult925, "++(1)", [1], string918);
                // call case 4: self request
                onSelf = true;
                var call928 = callmethodChecked(this, "show:=(1)", [1], opresult927);
                return call928;
              };
              // call case 5: prelude request
              var call929 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call836, block837);
              setLineNumber(88);    // compilenode member
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call935 = callmethodChecked(this, "name", []);
              var call936 = callmethodChecked(call935, "size", []);
              var diff938 = callmethodChecked(call936, "-(1)", [1], new GraceNum(2));
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call940 = callmethodChecked(this, "name", []);
              var call941 = callmethodChecked(call940, "substringFrom(1)to(1)", [1, 1], new GraceNum(1), diff938);
              // call case 4: self request
              onSelf = true;
              var call942 = callmethodChecked(this, "name:=(1)", [1], call941);
              if814 = call942;
            }
            setLineNumber(91);    // compilenode string
            var string944 = new GraceString("");
            // call case 4: self request
            onSelf = true;
            var call947 = callmethodChecked(this, "returnType", []);
            var string949 = new GraceString(" -> ");
            // call case 4: self request
            onSelf = true;
            var call952 = callmethodChecked(this, "show", []);
            var string954 = new GraceString("");
            var opresult956 = callmethodChecked(string954, "++(1)", [1], call952);
            var opresult958 = callmethodChecked(opresult956, "++(1)", [1], string949);
            var opresult960 = callmethodChecked(opresult958, "++(1)", [1], call947);
            var opresult962 = callmethodChecked(opresult960, "++(1)", [1], string944);
            // call case 4: self request
            onSelf = true;
            var call963 = callmethodChecked(this, "show:=(1)", [1], opresult962);
            setLineNumber(126);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call965 = callmethodChecked(this, "show", []);
            obj740.data["asString"] = call965;
            var reader_staticTypes_asString966 = function() {
              return this.data["asString"];
            };
            reader_staticTypes_asString966.def = true;
            obj740.methods["asString"] = reader_staticTypes_asString966;
            superDepth = origSuperDepth;
          };
          obj_init_740.apply(obj740, []);
          return obj740;
        };
        func739.paramTypes = [];
        func739.paramTypes.push([]);
        func739.paramTypes.push([]);
        func739.paramCounts = [1, 1];
        obj737.methods["signature(1)returnType(1)"] = func739;
        func739.definitionLine = 60;
        func739.definitionModule = "staticTypes";
          var func967 = function(argcv) {    // method signature(_)returnType(_)$object(_)
            var curarg = 1;
            var var_signature__39__ = arguments[curarg];
            curarg++;
            var var_rType = arguments[curarg];
            curarg++;
            var inheritingObject = arguments[curarg++];
            // Start argument processing
            curarg = 1;
            curarg++;
            curarg++;
            // End argument processing
            setModuleName("staticTypes");
            var returnTarget = invocationCount;
            invocationCount++;
            var obj968 = Grace_allocObject(GraceObject, "signature(1)returnType(1)");
            obj968.definitionModule = "staticTypes";
            obj968.definitionLine = 60;
            var inho968 = inheritingObject;
            while (inho968.superobj) inho968 = inho968.superobj;
            inho968.superobj = obj968;
            obj968.data = inheritingObject.data;
            if (inheritingObject.hasOwnProperty('_value'))
              obj968._value = inheritingObject._value;
            obj968.outer = this;
            var reader_staticTypes_outer969 = function() {
              return this.outer;
            };
            obj968.methods["outer"] = reader_staticTypes_outer969;
            var obj_init_968 = function() {
              var origSuperDepth = superDepth;
              superDepth = obj968;
              var func970 = function(argcv) {    // method isSpecialisationOf(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_other = arguments[curarg];
                curarg++;
                setModuleName("staticTypes");
                var if971 = GraceDone;
                setLineNumber(95);    // compilenode identifier
                // call case 4: self request
                onSelf = true;
                var call973 = callmethodChecked(this, "isMe(1)", [1], var_other);
                if (Grace_isTrue(call973)) {
                  setLineNumber(96);    // compilenode identifier
                  return GraceTrue;
                }
                var if974 = GraceDone;
                setLineNumber(99);    // compilenode member
                // call case 6: other requests
                var call976 = callmethodChecked(var_other, "name", []);
                // call case 4: self request
                onSelf = true;
                var call979 = callmethodChecked(this, "name", []);
                var opresult981 = callmethodChecked(call979, "\u2260(1)", [1], call976);
                if (Grace_isTrue(opresult981)) {
                  setLineNumber(100);    // compilenode identifier
                  return GraceFalse;
                }
                var if982 = GraceDone;
                setLineNumber(103);    // compilenode member
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call985 = callmethodChecked(this, "signature", []);
                var call986 = callmethodChecked(call985, "size", []);
                // call case 6: other requests
                // call case 6: other requests
                var call990 = callmethodChecked(var_other, "signature", []);
                var call991 = callmethodChecked(call990, "size", []);
                var opresult993 = callmethodChecked(call991, "\u2260(1)", [1], call986);
                if (Grace_isTrue(opresult993)) {
                  setLineNumber(104);    // compilenode identifier
                  return GraceFalse;
                }
                setLineNumber(107);    // compilenode member
                // call case 4: self request
                onSelf = true;
                var call996 = callmethodChecked(this, "signature", []);
                // call case 6: other requests
                var call998 = callmethodChecked(var_other, "signature", []);
                var block999 = new GraceBlock(this, 107, 2);
                setLineNumber(1);    // compilenode identifier
                block999.real = function(var_part, var_part__39__) {
                  var if1000 = GraceDone;
                  setLineNumber(108);    // compilenode member
                  // call case 6: other requests
                  var call1002 = callmethodChecked(var_part__39__, "name", []);
                  // call case 6: other requests
                  var call1005 = callmethodChecked(var_part, "name", []);
                  var opresult1007 = callmethodChecked(call1005, "\u2260(1)", [1], call1002);
                  if (Grace_isTrue(opresult1007)) {
                    setLineNumber(109);    // compilenode identifier
                    throw new ReturnException(GraceFalse, returnTarget);
                  }
                  setLineNumber(112);    // compilenode member
                  // call case 6: other requests
                  var call1010 = callmethodChecked(var_part, "parameters", []);
                  // call case 6: other requests
                  var call1012 = callmethodChecked(var_part__39__, "parameters", []);
                  var block1013 = new GraceBlock(this, 112, 2);
                  setLineNumber(1);    // compilenode identifier
                  block1013.real = function(var_p, var_p__39__) {
                    setLineNumber(113);    // compilenode member
                    // call case 6: other requests
                    var call1015 = callmethodChecked(var_p, "typeAnnotation", []);
                    var var_pt = call1015;
                    setLineNumber(114);    // compilenode member
                    // call case 6: other requests
                    var call1017 = callmethodChecked(var_p__39__, "typeAnnotation", []);
                    var var_pt__39__ = call1017;
                    var if1018 = GraceDone;
                    setLineNumber(117);    // compilenode member
                    // call case 6: other requests
                    // call case 6: other requests
                    var call1021 = callmethodChecked(var_pt__39__, "isSubtypeOf(1)", [1], var_pt);
                    var call1022 = callmethodChecked(call1021, "not", []);
                    if (Grace_isTrue(call1022)) {
                      setLineNumber(118);    // compilenode identifier
                      throw new ReturnException(GraceFalse, returnTarget);
                    }
                    return if1018;
                  };
                  // call case 5: prelude request
                  var call1023 = callmethodChecked(var_prelude, "for(1)and(1)do(1)", [1, 1, 1], call1010, call1012, block1013);
                  return call1023;
                };
                // call case 5: prelude request
                var call1024 = callmethodChecked(var_prelude, "for(1)and(1)do(1)", [1, 1, 1], call996, call998, block999);
                setLineNumber(123);    // compilenode member
                // call case 6: other requests
                var call1027 = callmethodChecked(var_other, "returnType", []);
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call1029 = callmethodChecked(this, "returnType", []);
                var call1030 = callmethodChecked(call1029, "isSubtypeOf(1)", [1], call1027);
                return call1030;
              };
              func970.paramTypes = [];
              func970.paramTypes.push([]);
              func970.paramCounts = [1];
              obj968.methods["isSpecialisationOf(1)"] = func970;
              func970.definitionLine = 94;
              func970.definitionModule = "staticTypes";
              setLineNumber(62);    // compilenode identifier
              obj968.data["signature"] = var_signature__39__;
              var reader_staticTypes_signature1031 = function() {
                return this.data["signature"];
              };
              reader_staticTypes_signature1031.def = true;
              obj968.methods["signature"] = reader_staticTypes_signature1031;
              setLineNumber(63);    // compilenode identifier
              obj968.data["returnType"] = var_rType;
              var reader_staticTypes_returnType1032 = function() {
                return this.data["returnType"];
              };
              reader_staticTypes_returnType1032.def = true;
              obj968.methods["returnType"] = reader_staticTypes_returnType1032;
              setLineNumber(65);    // compilenode string
              var string1033 = new GraceString("");
              obj968.data["name"] = string1033;
              var reader_staticTypes_name1034 = function() {
                return this.data["name"];
              };
              obj968.methods["name"] = reader_staticTypes_name1034;
              obj968.data["name"] = string1033;
              var writer_staticTypes_name1034 = function(argcv, o) {
                this.data["name"] = o;
                return GraceDone;
              };
              obj968.methods["name:=(1)"] = writer_staticTypes_name1034;
              writer_staticTypes_name1034.confidential = true;
              obj968.mutable = true;
              setLineNumber(66);    // compilenode string
              var string1035 = new GraceString("");
              obj968.data["show"] = string1035;
              var reader_staticTypes_show1036 = function() {
                return this.data["show"];
              };
              obj968.methods["show"] = reader_staticTypes_show1036;
              obj968.data["show"] = string1035;
              var writer_staticTypes_show1036 = function(argcv, o) {
                this.data["show"] = o;
                return GraceDone;
              };
              obj968.methods["show:=(1)"] = writer_staticTypes_show1036;
              reader_staticTypes_show1036.confidential = true;
              writer_staticTypes_show1036.confidential = true;
              obj968.mutable = true;
              setLineNumber(68);    // compilenode num
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call1039 = callmethodChecked(this, "signature", []);
              var call1040 = callmethodChecked(call1039, "at(1)", [1], new GraceNum(1));
              obj968.data["fst"] = call1040;
              var reader_staticTypes_fst1041 = function() {
                return this.data["fst"];
              };
              reader_staticTypes_fst1041.def = true;
              reader_staticTypes_fst1041.confidential = true;
              obj968.methods["fst"] = reader_staticTypes_fst1041;
              var if1042 = GraceDone;
              setLineNumber(70);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call1047 = callmethodChecked(this, "fst", []);
              var call1048 = callmethodChecked(call1047, "parameters", []);
              var call1049 = callmethodChecked(call1048, "size", []);
              var opresult1051 = callmethodChecked(call1049, "==(1)", [1], new GraceNum(0));
              if (Grace_isTrue(opresult1051)) {
                setLineNumber(71);    // compilenode member
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call1055 = callmethodChecked(this, "fst", []);
                var call1056 = callmethodChecked(call1055, "name", []);
                // call case 4: self request
                onSelf = true;
                var call1057 = callmethodChecked(this, "name:=(1)", [1], call1056);
                setLineNumber(72);    // compilenode member
                // call case 4: self request
                onSelf = true;
                var call1060 = callmethodChecked(this, "name", []);
                // call case 4: self request
                onSelf = true;
                var call1061 = callmethodChecked(this, "show:=(1)", [1], call1060);
                if1042 = call1061;
              } else {
                setLineNumber(74);    // compilenode member
                // call case 4: self request
                onSelf = true;
                var call1064 = callmethodChecked(this, "signature", []);
                var block1065 = new GraceBlock(this, 74, 1);
                setLineNumber(1);    // compilenode identifier
                block1065.real = function(var_part) {
                  setLineNumber(75);    // compilenode string
                  var string1067 = new GraceString("()");
                  // call case 6: other requests
                  var call1070 = callmethodChecked(var_part, "name", []);
                  var string1072 = new GraceString("");
                  // call case 4: self request
                  onSelf = true;
                  var call1075 = callmethodChecked(this, "name", []);
                  var string1077 = new GraceString("");
                  var opresult1079 = callmethodChecked(string1077, "++(1)", [1], call1075);
                  var opresult1081 = callmethodChecked(opresult1079, "++(1)", [1], string1072);
                  var opresult1083 = callmethodChecked(opresult1081, "++(1)", [1], call1070);
                  var opresult1085 = callmethodChecked(opresult1083, "++(1)", [1], string1067);
                  // call case 4: self request
                  onSelf = true;
                  var call1086 = callmethodChecked(this, "name:=(1)", [1], opresult1085);
                  setLineNumber(76);    // compilenode string
                  var string1088 = new GraceString("(");
                  // call case 6: other requests
                  var call1091 = callmethodChecked(var_part, "name", []);
                  var string1093 = new GraceString("");
                  // call case 4: self request
                  onSelf = true;
                  var call1096 = callmethodChecked(this, "show", []);
                  var string1098 = new GraceString("");
                  var opresult1100 = callmethodChecked(string1098, "++(1)", [1], call1096);
                  var opresult1102 = callmethodChecked(opresult1100, "++(1)", [1], string1093);
                  var opresult1104 = callmethodChecked(opresult1102, "++(1)", [1], call1091);
                  var opresult1106 = callmethodChecked(opresult1104, "++(1)", [1], string1088);
                  // call case 4: self request
                  onSelf = true;
                  var call1107 = callmethodChecked(this, "show:=(1)", [1], opresult1106);
                  setLineNumber(77);    // compilenode identifier
                  var var_once = GraceFalse;
                  setLineNumber(78);    // compilenode member
                  // call case 6: other requests
                  var call1110 = callmethodChecked(var_part, "parameters", []);
                  var block1111 = new GraceBlock(this, 78, 1);
                  setLineNumber(1);    // compilenode identifier
                  block1111.real = function(var_param) {
                    var if1112 = GraceDone;
                    setLineNumber(79);    // compilenode identifier
                    if (Grace_isTrue(var_once)) {
                      setLineNumber(80);    // compilenode string
                      var string1114 = new GraceString(", ");
                      // call case 4: self request
                      onSelf = true;
                      var call1117 = callmethodChecked(this, "show", []);
                      var string1119 = new GraceString("");
                      var opresult1121 = callmethodChecked(string1119, "++(1)", [1], call1117);
                      var opresult1123 = callmethodChecked(opresult1121, "++(1)", [1], string1114);
                      // call case 4: self request
                      onSelf = true;
                      var call1124 = callmethodChecked(this, "show:=(1)", [1], opresult1123);
                      if1112 = call1124;
                    }
                    setLineNumber(82);    // compilenode string
                    var string1126 = new GraceString("");
                    var string1129 = new GraceString("");
                    // call case 4: self request
                    onSelf = true;
                    var call1132 = callmethodChecked(this, "show", []);
                    var string1134 = new GraceString("");
                    var opresult1136 = callmethodChecked(string1134, "++(1)", [1], call1132);
                    var opresult1138 = callmethodChecked(opresult1136, "++(1)", [1], string1129);
                    var opresult1140 = callmethodChecked(opresult1138, "++(1)", [1], var_param);
                    var opresult1142 = callmethodChecked(opresult1140, "++(1)", [1], string1126);
                    // call case 4: self request
                    onSelf = true;
                    var call1143 = callmethodChecked(this, "show:=(1)", [1], opresult1142);
                    setLineNumber(83);    // compilenode identifier
                    var_once = GraceTrue;
                    return GraceDone;
                  };
                  // call case 5: prelude request
                  var call1144 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1110, block1111);
                  setLineNumber(85);    // compilenode string
                  var string1146 = new GraceString(")");
                  // call case 4: self request
                  onSelf = true;
                  var call1149 = callmethodChecked(this, "show", []);
                  var string1151 = new GraceString("");
                  var opresult1153 = callmethodChecked(string1151, "++(1)", [1], call1149);
                  var opresult1155 = callmethodChecked(opresult1153, "++(1)", [1], string1146);
                  // call case 4: self request
                  onSelf = true;
                  var call1156 = callmethodChecked(this, "show:=(1)", [1], opresult1155);
                  return call1156;
                };
                // call case 5: prelude request
                var call1157 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1064, block1065);
                setLineNumber(88);    // compilenode member
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call1163 = callmethodChecked(this, "name", []);
                var call1164 = callmethodChecked(call1163, "size", []);
                var diff1166 = callmethodChecked(call1164, "-(1)", [1], new GraceNum(2));
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call1168 = callmethodChecked(this, "name", []);
                var call1169 = callmethodChecked(call1168, "substringFrom(1)to(1)", [1, 1], new GraceNum(1), diff1166);
                // call case 4: self request
                onSelf = true;
                var call1170 = callmethodChecked(this, "name:=(1)", [1], call1169);
                if1042 = call1170;
              }
              setLineNumber(91);    // compilenode string
              var string1172 = new GraceString("");
              // call case 4: self request
              onSelf = true;
              var call1175 = callmethodChecked(this, "returnType", []);
              var string1177 = new GraceString(" -> ");
              // call case 4: self request
              onSelf = true;
              var call1180 = callmethodChecked(this, "show", []);
              var string1182 = new GraceString("");
              var opresult1184 = callmethodChecked(string1182, "++(1)", [1], call1180);
              var opresult1186 = callmethodChecked(opresult1184, "++(1)", [1], string1177);
              var opresult1188 = callmethodChecked(opresult1186, "++(1)", [1], call1175);
              var opresult1190 = callmethodChecked(opresult1188, "++(1)", [1], string1172);
              // call case 4: self request
              onSelf = true;
              var call1191 = callmethodChecked(this, "show:=(1)", [1], opresult1190);
              setLineNumber(126);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call1193 = callmethodChecked(this, "show", []);
              obj968.data["asString"] = call1193;
              var reader_staticTypes_asString1194 = function() {
                return this.data["asString"];
              };
              reader_staticTypes_asString1194.def = true;
              obj968.methods["asString"] = reader_staticTypes_asString1194;
              superDepth = origSuperDepth;
            };
            obj_init_968.apply(inheritingObject, []);
            return obj968;
            };
            func967.paramTypes = [];
            func967.paramTypes.push([]);
            func967.paramTypes.push([]);
            obj737.methods["signature(1)returnType(1)$object(1)"] = func967;
          var func1195 = function(argcv) {    // method member(_)ofType(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_name = arguments[curarg];
            curarg++;
            var var_rType = arguments[curarg];
            curarg++;
            setModuleName("staticTypes");
            setLineNumber(131);    // compilenode array
            var array1199 = new PrimitiveGraceList([]);
            // call case 6: other requests
            // call case 3: self.outer request
            var call1201 = callmethodChecked(superDepth, "outer", [0]);
            onSelf = true;
            var call1202 = callmethodChecked(call1201, "mixPartNamed(1)parameters(1)", [1, 1], var_name, array1199);
            var array1197 = new PrimitiveGraceList([call1202]);
            // call case 4: self request
            onSelf = true;
            var call1203 = callmethodChecked(this, "signature(1)returnType(1)", [1, 1], array1197, var_rType);
            return call1203;
          };
          func1195.paramTypes = [];
          func1195.paramTypes.push([type_String, "name"]);
          func1195.paramTypes.push([]);
          func1195.paramCounts = [1, 1];
          obj737.methods["member(1)ofType(1)"] = func1195;
          func1195.definitionLine = 130;
          func1195.definitionModule = "staticTypes";
          var func1204 = function(argcv) {    // method fromNode(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_node = arguments[curarg];
            curarg++;
            setModuleName("staticTypes");
            setLineNumber(138);    // compilenode identifier
            var cases1205 = [];
            var block1206 = new GraceBlock(this, 138, 1);
            setLineNumber(0);    // compilenode string
            var string1209 = new GraceString("meth");
            // call case 6: other requests
            // call case 5: prelude request
            var call1211 = callmethodChecked(var_prelude, "VariablePattern", []);
            var call1212 = callmethodChecked(call1211, "new(1)", [1], string1209);
            setLineNumber(138);    // compilenode member
            // call case 5: prelude request
            var call1214 = callmethodChecked(var_prelude, "MethodSignature", []);
            // call case 5: prelude request
            var call1217 = callmethodChecked(var_prelude, "Class", []);
            // call case 5: prelude request
            var call1220 = callmethodChecked(var_prelude, "Method", []);
            var opresult1222 = callmethodChecked(call1220, "|(1)", [1], call1217);
            var opresult1224 = callmethodChecked(opresult1222, "|(1)", [1], call1214);
            // call case 6: other requests
            setLineNumber(0);    // compilenode member
            // call case 5: prelude request
            var call1226 = callmethodChecked(var_prelude, "AndPattern", []);
            var call1227 = callmethodChecked(call1226, "new(2)", [2], call1212, opresult1224);
            block1206.pattern = call1227;
            setLineNumber(138);    // compilenode member
            // call case 5: prelude request
            var call1229 = callmethodChecked(var_prelude, "MethodSignature", []);
            // call case 5: prelude request
            var call1232 = callmethodChecked(var_prelude, "Class", []);
            // call case 5: prelude request
            var call1235 = callmethodChecked(var_prelude, "Method", []);
            var opresult1237 = callmethodChecked(call1235, "|(1)", [1], call1232);
            var opresult1239 = callmethodChecked(opresult1237, "|(1)", [1], call1229);
            block1206.real = function(var_meth) {
              setLineNumber(139);    // compilenode array
              var array1240 = new PrimitiveGraceList([]);
              var var_signature = array1240;
              setLineNumber(141);    // compilenode member
              // call case 6: other requests
              var call1243 = callmethodChecked(var_meth, "signature", []);
              var block1244 = new GraceBlock(this, 141, 1);
              setLineNumber(1);    // compilenode identifier
              block1244.real = function(var_part) {
                setLineNumber(142);    // compilenode array
                var array1245 = new PrimitiveGraceList([]);
                var var_params = array1245;
                setLineNumber(144);    // compilenode member
                // call case 6: other requests
                var call1248 = callmethodChecked(var_part, "params", []);
                var block1249 = new GraceBlock(this, 144, 1);
                setLineNumber(1);    // compilenode identifier
                block1249.real = function(var_param) {
                  setLineNumber(145);    // compilenode member
                  // call case 6: other requests
                  var call1253 = callmethodChecked(var_param, "value", []);
                  setLineNumber(146);    // compilenode member
                  // call case 6: other requests
                  var call1256 = callmethodChecked(var_param, "dtype", []);
                  // call case 6: other requests
                  var call1257 = callmethodChecked(var_objectType, "fromDType(1)", [1], call1256);
                  // call case 6: other requests
                  setLineNumber(145);    // compilenode identifier
                  var call1258 = callmethodChecked(var_aParam, "withName(1)ofType(1)", [1, 1], call1253, call1257);
                  // call case 6: other requests
                  var call1259 = callmethodChecked(var_params, "push(1)", [1], call1258);
                  return call1259;
                };
                // call case 5: prelude request
                var call1260 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1248, block1249);
                setLineNumber(149);    // compilenode member
                // call case 6: other requests
                var call1264 = callmethodChecked(var_part, "name", []);
                // call case 6: other requests
                // call case 3: self.outer request
                var call1266 = callmethodChecked(superDepth, "outer", [0]);
                onSelf = true;
                var call1267 = callmethodChecked(call1266, "mixPartNamed(1)parameters(1)", [1, 1], call1264, var_params);
                // call case 6: other requests
                var call1268 = callmethodChecked(var_signature, "push(1)", [1], call1267);
                return call1268;
              };
              // call case 5: prelude request
              var call1269 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1243, block1244);
              setLineNumber(152);    // compilenode identifier
              var cases1270 = [];
              var block1271 = new GraceBlock(this, 152, 1);
              setLineNumber(0);    // compilenode string
              var string1274 = new GraceString("m");
              // call case 6: other requests
              // call case 5: prelude request
              var call1276 = callmethodChecked(var_prelude, "VariablePattern", []);
              var call1277 = callmethodChecked(call1276, "new(1)", [1], string1274);
              setLineNumber(152);    // compilenode member
              // call case 5: prelude request
              var call1279 = callmethodChecked(var_prelude, "Class", []);
              // call case 5: prelude request
              var call1282 = callmethodChecked(var_prelude, "Method", []);
              var opresult1284 = callmethodChecked(call1282, "|(1)", [1], call1279);
              // call case 6: other requests
              setLineNumber(0);    // compilenode member
              // call case 5: prelude request
              var call1286 = callmethodChecked(var_prelude, "AndPattern", []);
              var call1287 = callmethodChecked(call1286, "new(2)", [2], call1277, opresult1284);
              block1271.pattern = call1287;
              setLineNumber(152);    // compilenode member
              // call case 5: prelude request
              var call1289 = callmethodChecked(var_prelude, "Class", []);
              // call case 5: prelude request
              var call1292 = callmethodChecked(var_prelude, "Method", []);
              var opresult1294 = callmethodChecked(call1292, "|(1)", [1], call1289);
              block1271.real = function(var_m) {
                setLineNumber(153);    // compilenode member
                // call case 6: other requests
                var call1296 = callmethodChecked(var_m, "dtype", []);
                return call1296;
              };
              cases1270.push(block1271);
              setLineNumber(154);    // compilenode block
              var block1297 = new GraceBlock(this, 154, 1);
              setLineNumber(0);    // compilenode string
              var string1300 = new GraceString("m");
              // call case 6: other requests
              // call case 5: prelude request
              var call1302 = callmethodChecked(var_prelude, "VariablePattern", []);
              var call1303 = callmethodChecked(call1302, "new(1)", [1], string1300);
              setLineNumber(154);    // compilenode member
              // call case 5: prelude request
              var call1305 = callmethodChecked(var_prelude, "MethodSignature", []);
              // call case 6: other requests
              setLineNumber(0);    // compilenode member
              // call case 5: prelude request
              var call1307 = callmethodChecked(var_prelude, "AndPattern", []);
              var call1308 = callmethodChecked(call1307, "new(2)", [2], call1303, call1305);
              block1297.pattern = call1308;
              setLineNumber(154);    // compilenode member
              // call case 5: prelude request
              var call1310 = callmethodChecked(var_prelude, "MethodSignature", []);
              block1297.real = function(var_m) {
                setLineNumber(155);    // compilenode member
                // call case 6: other requests
                var call1312 = callmethodChecked(var_meth, "rtype", []);
                return call1312;
              };
              cases1270.push(block1297);
              setLineNumber(156);    // compilenode block
              var block1313 = new GraceBlock(this, 156, 1);
              setLineNumber(1);    // compilenode identifier
              block1313.real = function(var___95____95__3) {
                return GraceDone;
              };
              cases1270.push(block1313);
              setLineNumber(152);    // compilematchcase
              var matchres1270 = matchCase(var_meth,cases1270,false);
              setModuleName("staticTypes");
              var var_rType = matchres1270;
              setLineNumber(159);    // compilenode identifier
              // call case 6: other requests
              var call1316 = callmethodChecked(var_objectType, "fromDType(1)", [1], var_rType);
              // call case 4: self request
              onSelf = true;
              var call1317 = callmethodChecked(this, "signature(1)returnType(1)", [1, 1], var_signature, call1316);
              throw new ReturnException(call1317, returnTarget);
              return undefined;
            };
            cases1205.push(block1206);
            setLineNumber(160);    // compilenode block
            var block1318 = new GraceBlock(this, 160, 1);
            setLineNumber(0);    // compilenode string
            var string1321 = new GraceString("defd");
            // call case 6: other requests
            // call case 5: prelude request
            var call1323 = callmethodChecked(var_prelude, "VariablePattern", []);
            var call1324 = callmethodChecked(call1323, "new(1)", [1], string1321);
            setLineNumber(160);    // compilenode member
            // call case 5: prelude request
            var call1326 = callmethodChecked(var_prelude, "Var", []);
            // call case 5: prelude request
            var call1329 = callmethodChecked(var_prelude, "Def", []);
            var opresult1331 = callmethodChecked(call1329, "|(1)", [1], call1326);
            // call case 6: other requests
            setLineNumber(0);    // compilenode member
            // call case 5: prelude request
            var call1333 = callmethodChecked(var_prelude, "AndPattern", []);
            var call1334 = callmethodChecked(call1333, "new(2)", [2], call1324, opresult1331);
            block1318.pattern = call1334;
            setLineNumber(160);    // compilenode member
            // call case 5: prelude request
            var call1336 = callmethodChecked(var_prelude, "Var", []);
            // call case 5: prelude request
            var call1339 = callmethodChecked(var_prelude, "Def", []);
            var opresult1341 = callmethodChecked(call1339, "|(1)", [1], call1336);
            block1318.real = function(var_defd) {
              setLineNumber(161);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              var call1346 = callmethodChecked(var_defd, "name", []);
              var call1347 = callmethodChecked(call1346, "value", []);
              var array1348 = new PrimitiveGraceList([]);
              // call case 6: other requests
              // call case 3: self.outer request
              var call1350 = callmethodChecked(superDepth, "outer", [0]);
              onSelf = true;
              var call1351 = callmethodChecked(call1350, "mixPartNamed(1)parameters(1)", [1, 1], call1347, array1348);
              var array1342 = new PrimitiveGraceList([call1351]);
              var var_signature = array1342;
              setLineNumber(162);    // compilenode member
              // call case 6: other requests
              var call1354 = callmethodChecked(var_defd, "dtype", []);
              // call case 6: other requests
              var call1355 = callmethodChecked(var_objectType, "fromDType(1)", [1], call1354);
              var var_dtype = call1355;
              setLineNumber(163);    // compilenode identifier
              // call case 4: self request
              onSelf = true;
              var call1357 = callmethodChecked(this, "signature(1)returnType(1)", [1, 1], var_signature, var_dtype);
              throw new ReturnException(call1357, returnTarget);
              return undefined;
            };
            cases1205.push(block1318);
            setLineNumber(164);    // compilenode block
            var block1358 = new GraceBlock(this, 164, 1);
            setLineNumber(1);    // compilenode identifier
            block1358.real = function(var___95____95__4) {
              setLineNumber(165);    // compilenode string
              var string1360 = new GraceString("unrecognised method node");
              // call case 6: other requests
              // call case 5: prelude request
              var call1362 = callmethodChecked(var_prelude, "Exception", []);
              var call1363 = callmethodChecked(call1362, "raise(1)with(1)", [1, 1], string1360, var_node);
              return call1363;
            };
            cases1205.push(block1358);
            setLineNumber(138);    // compilematchcase
            var matchres1205 = matchCase(var_node,cases1205,false);
            setModuleName("staticTypes");
            return matchres1205;
          };
          func1204.paramCounts = [1];
          obj737.methods["fromNode(1)"] = func1204;
          func1204.definitionLine = 137;
          func1204.definitionModule = "staticTypes";
          superDepth = origSuperDepth;
        };
        obj_init_737.apply(obj737, []);
        var var_aMethodType = obj737;
        setLineNumber(1);    // compilenode method
        var func1364 = function(argcv) {    // method aMethodType
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("staticTypes");
          // aMethodType is a simple accessor - elide try ... catch
          setLineNumber(57);    // compilenode identifier
          return var_aMethodType;
        };
        func1364.paramCounts = [0];
        this.methods["aMethodType"] = func1364;
        func1364.definitionLine = 1;
        func1364.definitionModule = "staticTypes";
        this.methods["aMethodType"].debug = "def";
        setLineNumber(174);    // compilenode string
        var string1366 = new GraceString("noSuchMethod");
        // call case 6: other requests
        // call case 5: prelude request
        var call1368 = callmethodChecked(var_prelude, "Singleton", []);
        var call1369 = callmethodChecked(call1368, "named(1)", [1], string1366);
        var var_noSuchMethod = call1369;
        setLineNumber(1);    // compilenode method
        var func1370 = function(argcv) {    // method noSuchMethod
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("staticTypes");
          // noSuchMethod is a simple accessor - elide try ... catch
          setLineNumber(174);    // compilenode identifier
          return var_noSuchMethod;
        };
        func1370.paramCounts = [0];
        this.methods["noSuchMethod"] = func1370;
        func1370.definitionLine = 1;
        func1370.definitionModule = "staticTypes";
        this.methods["noSuchMethod"].debug = "def";
        setLineNumber(176);    // compilenode typedec
        // Type decl ObjectType
        //   Type literal 
        var type1372 = new GraceType("ObjectType");
        type1372.typeMethods.push("methods");
        type1372.typeMethods.push("getMethod(1)");
        type1372.typeMethods.push("isUnknown");
        type1372.typeMethods.push("isSubtypeOf(1)");
        type1372.typeMethods.push("|(1)");
        type1372.typeMethods.push("&(1)");
        var var_ObjectType = type1372;
        setLineNumber(1);    // compilenode method
        var func1373 = function(argcv) {    // method ObjectType
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("staticTypes");
          // ObjectType is a simple accessor - elide try ... catch
          setLineNumber(176);    // compilenode identifier
          return var_ObjectType;
        };
        func1373.paramCounts = [0];
        this.methods["ObjectType"] = func1373;
        func1373.definitionLine = 1;
        func1373.definitionModule = "staticTypes";
        setLineNumber(191);    // compilenode object
        var obj1374 = Grace_allocObject(GraceObject, "objectType");
        obj1374.definitionModule = "staticTypes";
        obj1374.definitionLine = 191;
        obj1374.outer = this;
        var reader_staticTypes_outer1375 = function() {
          return this.outer;
        };
        obj1374.methods["outer"] = reader_staticTypes_outer1375;
        var obj_init_1374 = function() {
          var origSuperDepth = superDepth;
          superDepth = obj1374;
          var func1376 = function(argcv) {    // method fromMethods(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_methods__39__ = arguments[curarg];
            curarg++;
            setModuleName("staticTypes");
            setLineNumber(194);    // compilenode object
            var obj1377 = Grace_allocObject(GraceObject, "objectType.fromMethods(_)");
            obj1377.definitionModule = "staticTypes";
            obj1377.definitionLine = 194;
            obj1377.outer = this;
            var reader_staticTypes_outer1378 = function() {
              return this.outer;
            };
            obj1377.methods["outer"] = reader_staticTypes_outer1378;
            var obj_init_1377 = function() {
              var origSuperDepth = superDepth;
              superDepth = obj1377;
              var func1379 = function(argcv) {    // method getMethod(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_name = arguments[curarg];
                curarg++;
                setModuleName("staticTypes");
                setLineNumber(199);    // compilenode member
                // call case 4: self request
                onSelf = true;
                var call1382 = callmethodChecked(this, "methods", []);
                var block1383 = new GraceBlock(this, 199, 1);
                setLineNumber(1);    // compilenode identifier
                block1383.real = function(var_meth) {
                  var if1384 = GraceDone;
                  setLineNumber(200);    // compilenode member
                  // call case 6: other requests
                  var call1387 = callmethodChecked(var_meth, "name", []);
                  var opresult1389 = callmethodChecked(call1387, "==(1)", [1], var_name);
                  if (Grace_isTrue(opresult1389)) {
                    setLineNumber(201);    // compilenode identifier
                    throw new ReturnException(var_meth, returnTarget);
                  }
                  return if1384;
                };
                // call case 5: prelude request
                var call1390 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1382, block1383);
                setLineNumber(205);    // compilenode identifier
                return var_noSuchMethod;
              };
              func1379.paramTypes = [];
              func1379.paramTypes.push([type_String, "name"]);
              func1379.paramCounts = [1];
              obj1377.methods["getMethod(1)"] = func1379;
              func1379.definitionLine = 198;
              func1379.definitionModule = "staticTypes";
              var func1391 = function(argcv) {    // method isSubtypeOf(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_other = arguments[curarg];
                curarg++;
                setModuleName("staticTypes");
                var if1392 = GraceDone;
                setLineNumber(214);    // compilenode identifier
                // call case 4: self request
                onSelf = true;
                var call1394 = callmethodChecked(this, "isMe(1)", [1], var_other);
                if (Grace_isTrue(call1394)) {
                  setLineNumber(215);    // compilenode identifier
                  return GraceTrue;
                }
                var if1395 = GraceDone;
                setLineNumber(218);    // compilenode member
                // call case 6: other requests
                var call1397 = callmethodChecked(var_other, "isUnknown", []);
                if (Grace_isTrue(call1397)) {
                  setLineNumber(219);    // compilenode identifier
                  return GraceTrue;
                }
                var if1398 = GraceDone;
                setLineNumber(223);    // compilenode identifier
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call1401 = callmethodChecked(this, "currentlyTesting", []);
                var call1402 = callmethodChecked(call1401, "contains(1)", [1], var_other);
                if (Grace_isTrue(call1402)) {
                  setLineNumber(224);    // compilenode identifier
                  return GraceTrue;
                }
                setLineNumber(227);    // compilenode identifier
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call1405 = callmethodChecked(this, "currentlyTesting", []);
                var call1406 = callmethodChecked(call1405, "push(1)", [1], var_other);
                setLineNumber(229);    // compilenode member
                // call case 6: other requests
                var call1409 = callmethodChecked(var_other, "methods", []);
                var block1410 = new GraceBlock(this, 229, 2);
                setLineNumber(1);    // compilenode identifier
                block1410.real = function(var_a, var_continue) {
                  setLineNumber(230);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call1413 = callmethodChecked(this, "methods", []);
                  var block1414 = new GraceBlock(this, 230, 1);
                  setLineNumber(1);    // compilenode identifier
                  block1414.real = function(var_b) {
                    var if1415 = GraceDone;
                    setLineNumber(231);    // compilenode identifier
                    // call case 6: other requests
                    var call1417 = callmethodChecked(var_b, "isSpecialisationOf(1)", [1], var_a);
                    if (Grace_isTrue(call1417)) {
                      setLineNumber(232);    // compilenode member
                      // call case 6: other requests
                      var call1419 = callmethodChecked(var_continue, "apply", []);
                      if1415 = call1419;
                    }
                    return if1415;
                  };
                  // call case 5: prelude request
                  var call1420 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1413, block1414);
                  setLineNumber(236);    // compilenode member
                  // call case 6: other requests
                  // call case 4: self request
                  onSelf = true;
                  var call1423 = callmethodChecked(this, "currentlyTesting", []);
                  var call1424 = callmethodChecked(call1423, "pop", []);
                  setLineNumber(237);    // compilenode identifier
                  throw new ReturnException(GraceFalse, returnTarget);
                  return undefined;
                };
                // call case 6: other requests
                // call case 6: other requests
                // call case 3: self.outer request
                var call1427 = callmethodChecked(superDepth, "outer", [0]);
                var call1428 = callmethodChecked(call1427, "outer", []);
                onSelf = true;
                var call1429 = callmethodChecked(call1428, "for(1)doWithContinue(1)", [1, 1], call1409, block1410);
                setLineNumber(240);    // compilenode member
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call1432 = callmethodChecked(this, "currentlyTesting", []);
                var call1433 = callmethodChecked(call1432, "pop", []);
                setLineNumber(241);    // compilenode identifier
                return GraceTrue;
              };
              func1391.paramTypes = [];
              func1391.paramTypes.push([]);
              func1391.paramCounts = [1];
              obj1377.methods["isSubtypeOf(1)"] = func1391;
              func1391.definitionLine = 213;
              func1391.definitionModule = "staticTypes";
              var func1434 = function(argcv) {    // method |(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_other = arguments[curarg];
                curarg++;
                setModuleName("staticTypes");
                var if1435 = GraceDone;
                setLineNumber(245);    // compilenode identifier
                // call case 4: self request
                onSelf = true;
                var call1437 = callmethodChecked(this, "isMe(1)", [1], var_other);
                if (Grace_isTrue(call1437)) {
                  return this;
                }
                var if1438 = GraceDone;
                setLineNumber(246);    // compilenode member
                // call case 6: other requests
                var call1440 = callmethodChecked(var_other, "isUnknown", []);
                if (Grace_isTrue(call1440)) {
                  // call case 6: other requests
                  // call case 3: self.outer request
                  var call1443 = callmethodChecked(superDepth, "outer", [0]);
                  onSelf = true;
                  var call1444 = callmethodChecked(call1443, "unknown", []);
                  return call1444;
                }
                setLineNumber(248);    // compilenode array
                var array1445 = new PrimitiveGraceList([]);
                var var_combine = array1445;
                setLineNumber(250);    // compilenode member
                // call case 4: self request
                onSelf = true;
                var call1448 = callmethodChecked(this, "methods", []);
                var block1449 = new GraceBlock(this, 250, 2);
                setLineNumber(1);    // compilenode identifier
                block1449.real = function(var_meth, var_continue) {
                  setLineNumber(251);    // compilenode member
                  // call case 6: other requests
                  var call1452 = callmethodChecked(var_other, "methods", []);
                  var block1453 = new GraceBlock(this, 251, 1);
                  setLineNumber(1);    // compilenode identifier
                  block1453.real = function(var_meth__39__) {
                    var if1454 = GraceDone;
                    setLineNumber(252);    // compilenode member
                    // call case 6: other requests
                    var call1456 = callmethodChecked(var_meth__39__, "name", []);
                    // call case 6: other requests
                    var call1459 = callmethodChecked(var_meth, "name", []);
                    var opresult1461 = callmethodChecked(call1459, "==(1)", [1], call1456);
                    if (Grace_isTrue(opresult1461)) {
                      var if1462 = GraceDone;
                      setLineNumber(253);    // compilenode identifier
                      // call case 6: other requests
                      var call1464 = callmethodChecked(var_meth, "isSpecialisationOf(1)", [1], var_meth__39__);
                      if (Grace_isTrue(call1464)) {
                        setLineNumber(254);    // compilenode identifier
                        // call case 6: other requests
                        var call1466 = callmethodChecked(var_combine, "push(1)", [1], var_meth);
                        if1462 = call1466;
                      } else {
                        var if1467 = GraceDone;
                        setLineNumber(255);    // compilenode identifier
                        // call case 6: other requests
                        var call1469 = callmethodChecked(var_meth__39__, "isSpecialisationOf(1)", [1], var_meth);
                        if (Grace_isTrue(call1469)) {
                          setLineNumber(256);    // compilenode identifier
                          // call case 6: other requests
                          var call1471 = callmethodChecked(var_combine, "push(1)", [1], var_meth__39__);
                          if1467 = call1471;
                        } else {
                          setLineNumber(259);    // compilenode string
                          var string1473 = new GraceString("'");
                          var string1476 = new GraceString("' and '");
                          var string1479 = new GraceString("incompatible types '");
                          var opresult1481 = callmethodChecked(string1479, "++(1)", [1], this);
                          var opresult1483 = callmethodChecked(opresult1481, "++(1)", [1], string1476);
                          var opresult1485 = callmethodChecked(opresult1483, "++(1)", [1], var_other);
                          var opresult1487 = callmethodChecked(opresult1485, "++(1)", [1], string1473);
                          setLineNumber(258);    // compilenode string
                          var string1489 = new GraceString("cannot produce intersection of ");
                          var opresult1491 = callmethodChecked(string1489, "++(1)", [1], opresult1487);
                          // call case 6: other requests
                          var call1492 = callmethodChecked(var_TypeError, "raise(1)", [1], opresult1491);
                          if1467 = call1492;
                        }
                        if1462 = if1467;
                      }
                      setLineNumber(262);    // compilenode member
                      // call case 6: other requests
                      var call1494 = callmethodChecked(var_continue, "apply", []);
                      if1454 = call1494;
                    }
                    return if1454;
                  };
                  // call case 5: prelude request
                  var call1495 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1452, block1453);
                  return call1495;
                };
                // call case 6: other requests
                // call case 6: other requests
                // call case 3: self.outer request
                var call1498 = callmethodChecked(superDepth, "outer", [0]);
                var call1499 = callmethodChecked(call1498, "outer", []);
                onSelf = true;
                var call1500 = callmethodChecked(call1499, "for(1)doWithContinue(1)", [1, 1], call1448, block1449);
                setLineNumber(267);    // compilenode identifier
                var var_hack = var_objectType;
                setLineNumber(268);    // compilenode object
                var obj1501 = Grace_allocObject(null, "object");
                obj1501.definitionModule = "staticTypes";
                obj1501.definitionLine = 268;
                obj1501.outer = this;
                var reader_staticTypes_outer1502 = function() {
                  return this.outer;
                };
                obj1501.methods["outer"] = reader_staticTypes_outer1502;
                var obj_init_1501 = function() {
                  var origSuperDepth = superDepth;
                  superDepth = obj1501;
                  var func1503 = function(argcv) {    // method asString
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    setModuleName("staticTypes");
                    setLineNumber(272);    // compilenode string
                    var string1504 = new GraceString("");
                    var string1507 = new GraceString(" | ");
                    // call case 3: self.outer request
                    var call1510 = callmethodChecked(superDepth, "outer", [0]);
                    var string1512 = new GraceString("");
                    var opresult1514 = callmethodChecked(string1512, "++(1)", [1], call1510);
                    var opresult1516 = callmethodChecked(opresult1514, "++(1)", [1], string1507);
                    var opresult1518 = callmethodChecked(opresult1516, "++(1)", [1], var_other);
                    var opresult1520 = callmethodChecked(opresult1518, "++(1)", [1], string1504);
                    return opresult1520;
                  };
                  func1503.paramCounts = [0];
                  obj1501.methods["asString"] = func1503;
                  func1503.definitionLine = 271;
                  func1503.definitionModule = "staticTypes";
                  setLineNumber(269);    // compilenode identifier
                  // call case 6: other requests
                  var call1522 = callmethodChecked(var_hack, "fromMethods(1)$object(1)", [1, 1], var_combine, this);
                  obj1501.superobj = call1522;
                  if (call1522.data) obj1501.data = call1522.data;
                  if (call1522.hasOwnProperty('_value'))
                      obj1501._value = call1522._value;
                  superDepth = origSuperDepth;
                };
                obj_init_1501.apply(obj1501, []);
                return obj1501;
              };
              func1434.paramTypes = [];
              func1434.paramTypes.push([]);
              func1434.paramCounts = [1];
              obj1377.methods["|(1)"] = func1434;
              func1434.definitionLine = 244;
              func1434.definitionModule = "staticTypes";
              var func1523 = function(argcv) {    // method &(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_other = arguments[curarg];
                curarg++;
                setModuleName("staticTypes");
                var if1524 = GraceDone;
                setLineNumber(278);    // compilenode identifier
                // call case 4: self request
                onSelf = true;
                var call1526 = callmethodChecked(this, "isMe(1)", [1], var_other);
                if (Grace_isTrue(call1526)) {
                  return this;
                }
                var if1527 = GraceDone;
                setLineNumber(279);    // compilenode member
                // call case 6: other requests
                var call1529 = callmethodChecked(var_other, "isUnknown", []);
                if (Grace_isTrue(call1529)) {
                  // call case 6: other requests
                  // call case 3: self.outer request
                  var call1532 = callmethodChecked(superDepth, "outer", [0]);
                  onSelf = true;
                  var call1533 = callmethodChecked(call1532, "unknown", []);
                  return call1533;
                }
                setLineNumber(281);    // compilenode array
                var array1534 = new PrimitiveGraceList([]);
                var var_combine = array1534;
                setLineNumber(282);    // compilenode array
                var array1535 = new PrimitiveGraceList([]);
                var var_twice = array1535;
                setLineNumber(284);    // compilenode member
                // call case 4: self request
                onSelf = true;
                var call1538 = callmethodChecked(this, "methods", []);
                var block1539 = new GraceBlock(this, 284, 2);
                setLineNumber(1);    // compilenode identifier
                block1539.real = function(var_meth, var_continue) {
                  setLineNumber(285);    // compilenode member
                  // call case 6: other requests
                  var call1542 = callmethodChecked(var_other, "methods", []);
                  var block1543 = new GraceBlock(this, 285, 1);
                  setLineNumber(1);    // compilenode identifier
                  block1543.real = function(var_meth__39__) {
                    var if1544 = GraceDone;
                    setLineNumber(286);    // compilenode member
                    // call case 6: other requests
                    var call1546 = callmethodChecked(var_meth__39__, "name", []);
                    // call case 6: other requests
                    var call1549 = callmethodChecked(var_meth, "name", []);
                    var opresult1551 = callmethodChecked(call1549, "==(1)", [1], call1546);
                    if (Grace_isTrue(opresult1551)) {
                      var if1552 = GraceDone;
                      setLineNumber(287);    // compilenode identifier
                      // call case 6: other requests
                      var call1554 = callmethodChecked(var_meth, "isSpecialisationOf(1)", [1], var_meth__39__);
                      if (Grace_isTrue(call1554)) {
                        setLineNumber(288);    // compilenode identifier
                        // call case 6: other requests
                        var call1556 = callmethodChecked(var_combine, "push(1)", [1], var_meth);
                        if1552 = call1556;
                      } else {
                        var if1557 = GraceDone;
                        setLineNumber(289);    // compilenode identifier
                        // call case 6: other requests
                        var call1559 = callmethodChecked(var_meth__39__, "isSpecialisationOf(1)", [1], var_meth);
                        if (Grace_isTrue(call1559)) {
                          setLineNumber(290);    // compilenode identifier
                          // call case 6: other requests
                          var call1561 = callmethodChecked(var_combine, "push(1)", [1], var_meth__39__);
                          if1557 = call1561;
                        } else {
                          setLineNumber(293);    // compilenode string
                          var string1563 = new GraceString("'");
                          var string1566 = new GraceString("' and '");
                          var string1569 = new GraceString("incompatible types '");
                          var opresult1571 = callmethodChecked(string1569, "++(1)", [1], this);
                          var opresult1573 = callmethodChecked(opresult1571, "++(1)", [1], string1566);
                          var opresult1575 = callmethodChecked(opresult1573, "++(1)", [1], var_other);
                          var opresult1577 = callmethodChecked(opresult1575, "++(1)", [1], string1563);
                          setLineNumber(292);    // compilenode string
                          var string1579 = new GraceString("cannot produce union of ");
                          var opresult1581 = callmethodChecked(string1579, "++(1)", [1], opresult1577);
                          // call case 6: other requests
                          var call1582 = callmethodChecked(var_TypeError, "raise(1)", [1], opresult1581);
                          if1557 = call1582;
                        }
                        if1552 = if1557;
                      }
                      setLineNumber(296);    // compilenode member
                      // call case 6: other requests
                      var call1585 = callmethodChecked(var_meth, "name", []);
                      // call case 6: other requests
                      var call1586 = callmethodChecked(var_twice, "push(1)", [1], call1585);
                      setLineNumber(298);    // compilenode member
                      // call case 6: other requests
                      var call1588 = callmethodChecked(var_continue, "apply", []);
                      if1544 = call1588;
                    }
                    return if1544;
                  };
                  // call case 5: prelude request
                  var call1589 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1542, block1543);
                  setLineNumber(302);    // compilenode identifier
                  // call case 6: other requests
                  var call1591 = callmethodChecked(var_combine, "push(1)", [1], var_meth);
                  return call1591;
                };
                // call case 6: other requests
                // call case 6: other requests
                // call case 3: self.outer request
                var call1594 = callmethodChecked(superDepth, "outer", [0]);
                var call1595 = callmethodChecked(call1594, "outer", []);
                onSelf = true;
                var call1596 = callmethodChecked(call1595, "for(1)doWithContinue(1)", [1, 1], call1538, block1539);
                setLineNumber(305);    // compilenode member
                // call case 6: other requests
                var call1599 = callmethodChecked(var_other, "methods", []);
                var block1600 = new GraceBlock(this, 305, 1);
                setLineNumber(1);    // compilenode identifier
                block1600.real = function(var_meth) {
                  var if1601 = GraceDone;
                  setLineNumber(306);    // compilenode member
                  // call case 6: other requests
                  // call case 6: other requests
                  var call1605 = callmethodChecked(var_meth, "name", []);
                  // call case 6: other requests
                  var call1606 = callmethodChecked(var_twice, "contains(1)", [1], call1605);
                  var call1607 = callmethodChecked(call1606, "not", []);
                  if (Grace_isTrue(call1607)) {
                    setLineNumber(307);    // compilenode identifier
                    // call case 6: other requests
                    var call1609 = callmethodChecked(var_combine, "push(1)", [1], var_meth);
                    if1601 = call1609;
                  }
                  return if1601;
                };
                // call case 5: prelude request
                var call1610 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1599, block1600);
                setLineNumber(311);    // compilenode identifier
                var var_hack = var_objectType;
                setLineNumber(312);    // compilenode object
                var obj1611 = Grace_allocObject(null, "objectType.fromMethods(_).object");
                obj1611.definitionModule = "staticTypes";
                obj1611.definitionLine = 312;
                obj1611.outer = this;
                var reader_staticTypes_outer1612 = function() {
                  return this.outer;
                };
                obj1611.methods["outer"] = reader_staticTypes_outer1612;
                var obj_init_1611 = function() {
                  var origSuperDepth = superDepth;
                  superDepth = obj1611;
                  var func1613 = function(argcv) {    // method asString
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    setModuleName("staticTypes");
                    setLineNumber(316);    // compilenode string
                    var string1614 = new GraceString("");
                    var string1617 = new GraceString(" & ");
                    // call case 3: self.outer request
                    var call1620 = callmethodChecked(superDepth, "outer", [0]);
                    var string1622 = new GraceString("");
                    var opresult1624 = callmethodChecked(string1622, "++(1)", [1], call1620);
                    var opresult1626 = callmethodChecked(opresult1624, "++(1)", [1], string1617);
                    var opresult1628 = callmethodChecked(opresult1626, "++(1)", [1], var_other);
                    var opresult1630 = callmethodChecked(opresult1628, "++(1)", [1], string1614);
                    return opresult1630;
                  };
                  func1613.paramCounts = [0];
                  obj1611.methods["asString"] = func1613;
                  func1613.definitionLine = 315;
                  func1613.definitionModule = "staticTypes";
                  setLineNumber(313);    // compilenode identifier
                  // call case 6: other requests
                  var call1632 = callmethodChecked(var_hack, "fromMethods(1)$object(1)", [1, 1], var_combine, this);
                  obj1611.superobj = call1632;
                  if (call1632.data) obj1611.data = call1632.data;
                  if (call1632.hasOwnProperty('_value'))
                      obj1611._value = call1632._value;
                  superDepth = origSuperDepth;
                };
                obj_init_1611.apply(obj1611, []);
                return obj1611;
              };
              func1523.paramTypes = [];
              func1523.paramTypes.push([]);
              func1523.paramCounts = [1];
              obj1377.methods["&(1)"] = func1523;
              func1523.definitionLine = 277;
              func1523.definitionModule = "staticTypes";
                var func1633 = function(argcv) {    // method &(_)$object(_)
                  var curarg = 1;
                  var var_other = arguments[curarg];
                  curarg++;
                  var inheritingObject = arguments[curarg++];
                  // Start argument processing
                  curarg = 1;
                  curarg++;
                  // End argument processing
                  setModuleName("staticTypes");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var if1634 = GraceDone;
                  setLineNumber(278);    // compilenode identifier
                  // call case 4: self request
                  onSelf = true;
                  var call1636 = callmethodChecked(this, "isMe(1)", [1], var_other);
                  if (Grace_isTrue(call1636)) {
                    return this;
                  }
                  var if1637 = GraceDone;
                  setLineNumber(279);    // compilenode member
                  // call case 6: other requests
                  var call1639 = callmethodChecked(var_other, "isUnknown", []);
                  if (Grace_isTrue(call1639)) {
                    // call case 6: other requests
                    // call case 3: self.outer request
                    var call1642 = callmethodChecked(superDepth, "outer", [0]);
                    onSelf = true;
                    var call1643 = callmethodChecked(call1642, "unknown", []);
                    return call1643;
                  }
                  setLineNumber(281);    // compilenode array
                  var array1644 = new PrimitiveGraceList([]);
                  var var_combine = array1644;
                  setLineNumber(282);    // compilenode array
                  var array1645 = new PrimitiveGraceList([]);
                  var var_twice = array1645;
                  setLineNumber(284);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call1648 = callmethodChecked(this, "methods", []);
                  var block1649 = new GraceBlock(this, 284, 2);
                  setLineNumber(1);    // compilenode identifier
                  block1649.real = function(var_meth, var_continue) {
                    setLineNumber(285);    // compilenode member
                    // call case 6: other requests
                    var call1652 = callmethodChecked(var_other, "methods", []);
                    var block1653 = new GraceBlock(this, 285, 1);
                    setLineNumber(1);    // compilenode identifier
                    block1653.real = function(var_meth__39__) {
                      var if1654 = GraceDone;
                      setLineNumber(286);    // compilenode member
                      // call case 6: other requests
                      var call1656 = callmethodChecked(var_meth__39__, "name", []);
                      // call case 6: other requests
                      var call1659 = callmethodChecked(var_meth, "name", []);
                      var opresult1661 = callmethodChecked(call1659, "==(1)", [1], call1656);
                      if (Grace_isTrue(opresult1661)) {
                        var if1662 = GraceDone;
                        setLineNumber(287);    // compilenode identifier
                        // call case 6: other requests
                        var call1664 = callmethodChecked(var_meth, "isSpecialisationOf(1)", [1], var_meth__39__);
                        if (Grace_isTrue(call1664)) {
                          setLineNumber(288);    // compilenode identifier
                          // call case 6: other requests
                          var call1666 = callmethodChecked(var_combine, "push(1)", [1], var_meth);
                          if1662 = call1666;
                        } else {
                          var if1667 = GraceDone;
                          setLineNumber(289);    // compilenode identifier
                          // call case 6: other requests
                          var call1669 = callmethodChecked(var_meth__39__, "isSpecialisationOf(1)", [1], var_meth);
                          if (Grace_isTrue(call1669)) {
                            setLineNumber(290);    // compilenode identifier
                            // call case 6: other requests
                            var call1671 = callmethodChecked(var_combine, "push(1)", [1], var_meth__39__);
                            if1667 = call1671;
                          } else {
                            setLineNumber(293);    // compilenode string
                            var string1673 = new GraceString("'");
                            var string1676 = new GraceString("' and '");
                            var string1679 = new GraceString("incompatible types '");
                            var opresult1681 = callmethodChecked(string1679, "++(1)", [1], this);
                            var opresult1683 = callmethodChecked(opresult1681, "++(1)", [1], string1676);
                            var opresult1685 = callmethodChecked(opresult1683, "++(1)", [1], var_other);
                            var opresult1687 = callmethodChecked(opresult1685, "++(1)", [1], string1673);
                            setLineNumber(292);    // compilenode string
                            var string1689 = new GraceString("cannot produce union of ");
                            var opresult1691 = callmethodChecked(string1689, "++(1)", [1], opresult1687);
                            // call case 6: other requests
                            var call1692 = callmethodChecked(var_TypeError, "raise(1)", [1], opresult1691);
                            if1667 = call1692;
                          }
                          if1662 = if1667;
                        }
                        setLineNumber(296);    // compilenode member
                        // call case 6: other requests
                        var call1695 = callmethodChecked(var_meth, "name", []);
                        // call case 6: other requests
                        var call1696 = callmethodChecked(var_twice, "push(1)", [1], call1695);
                        setLineNumber(298);    // compilenode member
                        // call case 6: other requests
                        var call1698 = callmethodChecked(var_continue, "apply", []);
                        if1654 = call1698;
                      }
                      return if1654;
                    };
                    // call case 5: prelude request
                    var call1699 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1652, block1653);
                    setLineNumber(302);    // compilenode identifier
                    // call case 6: other requests
                    var call1701 = callmethodChecked(var_combine, "push(1)", [1], var_meth);
                    return call1701;
                  };
                  // call case 6: other requests
                  // call case 6: other requests
                  // call case 3: self.outer request
                  var call1704 = callmethodChecked(superDepth, "outer", [0]);
                  var call1705 = callmethodChecked(call1704, "outer", []);
                  onSelf = true;
                  var call1706 = callmethodChecked(call1705, "for(1)doWithContinue(1)", [1, 1], call1648, block1649);
                  setLineNumber(305);    // compilenode member
                  // call case 6: other requests
                  var call1709 = callmethodChecked(var_other, "methods", []);
                  var block1710 = new GraceBlock(this, 305, 1);
                  setLineNumber(1);    // compilenode identifier
                  block1710.real = function(var_meth) {
                    var if1711 = GraceDone;
                    setLineNumber(306);    // compilenode member
                    // call case 6: other requests
                    // call case 6: other requests
                    var call1715 = callmethodChecked(var_meth, "name", []);
                    // call case 6: other requests
                    var call1716 = callmethodChecked(var_twice, "contains(1)", [1], call1715);
                    var call1717 = callmethodChecked(call1716, "not", []);
                    if (Grace_isTrue(call1717)) {
                      setLineNumber(307);    // compilenode identifier
                      // call case 6: other requests
                      var call1719 = callmethodChecked(var_combine, "push(1)", [1], var_meth);
                      if1711 = call1719;
                    }
                    return if1711;
                  };
                  // call case 5: prelude request
                  var call1720 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1709, block1710);
                  setLineNumber(311);    // compilenode identifier
                  var var_hack = var_objectType;
                  var obj1721 = Grace_allocObject(null, "&(1)");
                  obj1721.definitionModule = "staticTypes";
                  obj1721.definitionLine = 312;
                  var inho1721 = inheritingObject;
                  while (inho1721.superobj) inho1721 = inho1721.superobj;
                  inho1721.superobj = obj1721;
                  obj1721.data = inheritingObject.data;
                  if (inheritingObject.hasOwnProperty('_value'))
                    obj1721._value = inheritingObject._value;
                  obj1721.outer = this;
                  var reader_staticTypes_outer1722 = function() {
                    return this.outer;
                  };
                  obj1721.methods["outer"] = reader_staticTypes_outer1722;
                  var obj_init_1721 = function() {
                    var origSuperDepth = superDepth;
                    superDepth = obj1721;
                    var func1723 = function(argcv) {    // method asString
                      var returnTarget = invocationCount;
                      invocationCount++;
                      var curarg = 1;
                      setModuleName("staticTypes");
                      setLineNumber(316);    // compilenode string
                      var string1724 = new GraceString("");
                      var string1727 = new GraceString(" & ");
                      // call case 3: self.outer request
                      var call1730 = callmethodChecked(superDepth, "outer", [0]);
                      var string1732 = new GraceString("");
                      var opresult1734 = callmethodChecked(string1732, "++(1)", [1], call1730);
                      var opresult1736 = callmethodChecked(opresult1734, "++(1)", [1], string1727);
                      var opresult1738 = callmethodChecked(opresult1736, "++(1)", [1], var_other);
                      var opresult1740 = callmethodChecked(opresult1738, "++(1)", [1], string1724);
                      return opresult1740;
                    };
                    func1723.paramCounts = [0];
                    obj1721.methods["asString"] = func1723;
                    func1723.definitionLine = 315;
                    func1723.definitionModule = "staticTypes";
                    setLineNumber(313);    // compilenode identifier
                    // call case 6: other requests
                    var call1742 = callmethodChecked(var_hack, "fromMethods(1)$object(1)", [1, 1], var_combine, this);
                    obj1721.superobj = call1742;
                    if (call1742.data) obj1721.data = call1742.data;
                    if (call1742.hasOwnProperty('_value'))
                        obj1721._value = call1742._value;
                    superDepth = origSuperDepth;
                  };
                  obj_init_1721.apply(inheritingObject, []);
                  return obj1721;
                  };
                  func1633.paramTypes = [];
                  func1633.paramTypes.push([]);
                  obj1377.methods["&(1)$object(1)"] = func1633;
                var func1743 = function(argcv) {    // method asString
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  setModuleName("staticTypes");
                  var if1744 = GraceDone;
                  setLineNumber(322);    // compilenode member
                  // call case 6: other requests
                  // call case 4: self request
                  onSelf = true;
                  var call1748 = callmethodChecked(this, "methods", []);
                  var call1749 = callmethodChecked(call1748, "size", []);
                  var opresult1751 = callmethodChecked(call1749, "==(1)", [1], new GraceNum(3));
                  if (Grace_isTrue(opresult1751)) {
                    setLineNumber(323);    // compilenode string
                    var string1752 = new GraceString("Object");
                    return string1752;
                  }
                  setLineNumber(326);    // compilenode string
                  var string1753 = new GraceString("{ ");
                  var var_out = string1753;
                  setLineNumber(328);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call1756 = callmethodChecked(this, "methods", []);
                  var block1757 = new GraceBlock(this, 328, 1);
                  setLineNumber(1);    // compilenode identifier
                  block1757.real = function(var_mtype) {
                    var if1758 = GraceDone;
                    setLineNumber(329);    // compilenode member
                    // call case 6: other requests
                    // call case 6: other requests
                    var call1762 = callmethodChecked(var_mtype, "name", []);
                    // call case 6: other requests
                    var string1764 = new GraceString("!=");
                    var string1765 = new GraceString("\u2260");
                    var string1766 = new GraceString("asString");
                    var string1767 = new GraceString("asDebugString");
                    var string1768 = new GraceString("::");
                    var array1763 = new PrimitiveGraceList([string1764, string1765, string1766, string1767, string1768]);
                    var call1769 = callmethodChecked(array1763, "contains(1)", [1], call1762);
                    var call1770 = callmethodChecked(call1769, "not", []);
                    if (Grace_isTrue(call1770)) {
                      setLineNumber(330);    // compilenode string
                      var string1771 = new GraceString("; ");
                      var string1774 = new GraceString("");
                      var string1777 = new GraceString("");
                      var opresult1779 = callmethodChecked(string1777, "++(1)", [1], var_out);
                      var opresult1781 = callmethodChecked(opresult1779, "++(1)", [1], string1774);
                      var opresult1783 = callmethodChecked(opresult1781, "++(1)", [1], var_mtype);
                      var opresult1785 = callmethodChecked(opresult1783, "++(1)", [1], string1771);
                      var_out = opresult1785;
                      if1758 = GraceDone;
                    }
                    return if1758;
                  };
                  // call case 5: prelude request
                  var call1786 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1756, block1757);
                  setLineNumber(334);    // compilenode string
                  var string1787 = new GraceString("}");
                  var string1790 = new GraceString("");
                  var opresult1792 = callmethodChecked(string1790, "++(1)", [1], var_out);
                  var opresult1794 = callmethodChecked(opresult1792, "++(1)", [1], string1787);
                  return opresult1794;
                };
                func1743.paramCounts = [0];
                obj1377.methods["asString"] = func1743;
                func1743.definitionLine = 321;
                func1743.definitionModule = "staticTypes";
                var if1796 = GraceDone;
                setLineNumber(195);    // compilenode member
                // call case 6: other requests
                // call case 3: self.outer request
                var call1799 = callmethodChecked(superDepth, "outer", [0]);
                onSelf = true;
                var call1800 = callmethodChecked(call1799, "unknown", []);
                // call case 6: other requests
                // call case 3: self.outer request
                var call1804 = callmethodChecked(superDepth, "outer", [0]);
                onSelf = true;
                var call1805 = callmethodChecked(call1804, "base", []);
                var opresult1807 = callmethodChecked(call1805, "==(1)", [1], call1800);
                if (Grace_isTrue(opresult1807)) {
                  setLineNumber(196);    // compilenode array
                  var array1808 = new PrimitiveGraceList([]);
                  if1796 = array1808;
                } else {
                  // call case 6: other requests
                  // call case 6: other requests
                  // call case 3: self.outer request
                  var call1812 = callmethodChecked(superDepth, "outer", [0]);
                  onSelf = true;
                  var call1813 = callmethodChecked(call1812, "base", []);
                  var call1814 = callmethodChecked(call1813, "methods", []);
                  if1796 = call1814;
                }
                var opresult1816 = callmethodChecked(if1796, "++(1)", [1], var_methods__39__);
                obj1377.data["methods"] = opresult1816;
                var reader_staticTypes_methods1817 = function() {
                  return this.data["methods"];
                };
                reader_staticTypes_methods1817.def = true;
                obj1377.methods["methods"] = reader_staticTypes_methods1817;
                setLineNumber(208);    // compilenode identifier
                obj1377.data["isUnknown"] = GraceFalse;
                var reader_staticTypes_isUnknown1818 = function() {
                  return this.data["isUnknown"];
                };
                reader_staticTypes_isUnknown1818.def = true;
                obj1377.methods["isUnknown"] = reader_staticTypes_isUnknown1818;
                setLineNumber(211);    // compilenode array
                var array1819 = new PrimitiveGraceList([]);
                obj1377.data["currentlyTesting"] = array1819;
                var reader_staticTypes_currentlyTesting1820 = function() {
                  return this.data["currentlyTesting"];
                };
                reader_staticTypes_currentlyTesting1820.def = true;
                reader_staticTypes_currentlyTesting1820.confidential = true;
                obj1377.methods["currentlyTesting"] = reader_staticTypes_currentlyTesting1820;
                superDepth = origSuperDepth;
              };
              obj_init_1377.apply(obj1377, []);
              return obj1377;
            };
            func1376.paramCounts = [1];
            obj1374.methods["fromMethods(1)"] = func1376;
            func1376.definitionLine = 194;
            func1376.definitionModule = "staticTypes";
              var func1821 = function(argcv) {    // method fromMethods(_)$object(_)
                var curarg = 1;
                var var_methods__39__ = arguments[curarg];
                curarg++;
                var inheritingObject = arguments[curarg++];
                // Start argument processing
                curarg = 1;
                curarg++;
                // End argument processing
                setModuleName("staticTypes");
                var returnTarget = invocationCount;
                invocationCount++;
                var obj1822 = Grace_allocObject(GraceObject, "fromMethods(1)");
                obj1822.definitionModule = "staticTypes";
                obj1822.definitionLine = 194;
                var inho1822 = inheritingObject;
                while (inho1822.superobj) inho1822 = inho1822.superobj;
                inho1822.superobj = obj1822;
                obj1822.data = inheritingObject.data;
                if (inheritingObject.hasOwnProperty('_value'))
                  obj1822._value = inheritingObject._value;
                obj1822.outer = this;
                var reader_staticTypes_outer1823 = function() {
                  return this.outer;
                };
                obj1822.methods["outer"] = reader_staticTypes_outer1823;
                var obj_init_1822 = function() {
                  var origSuperDepth = superDepth;
                  superDepth = obj1822;
                  var func1824 = function(argcv) {    // method getMethod(_)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_name = arguments[curarg];
                    curarg++;
                    setModuleName("staticTypes");
                    setLineNumber(199);    // compilenode member
                    // call case 4: self request
                    onSelf = true;
                    var call1827 = callmethodChecked(this, "methods", []);
                    var block1828 = new GraceBlock(this, 199, 1);
                    setLineNumber(1);    // compilenode identifier
                    block1828.real = function(var_meth) {
                      var if1829 = GraceDone;
                      setLineNumber(200);    // compilenode member
                      // call case 6: other requests
                      var call1832 = callmethodChecked(var_meth, "name", []);
                      var opresult1834 = callmethodChecked(call1832, "==(1)", [1], var_name);
                      if (Grace_isTrue(opresult1834)) {
                        setLineNumber(201);    // compilenode identifier
                        throw new ReturnException(var_meth, returnTarget);
                      }
                      return if1829;
                    };
                    // call case 5: prelude request
                    var call1835 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1827, block1828);
                    setLineNumber(205);    // compilenode identifier
                    return var_noSuchMethod;
                  };
                  func1824.paramTypes = [];
                  func1824.paramTypes.push([type_String, "name"]);
                  func1824.paramCounts = [1];
                  obj1822.methods["getMethod(1)"] = func1824;
                  func1824.definitionLine = 198;
                  func1824.definitionModule = "staticTypes";
                  var func1836 = function(argcv) {    // method isSubtypeOf(_)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_other = arguments[curarg];
                    curarg++;
                    setModuleName("staticTypes");
                    var if1837 = GraceDone;
                    setLineNumber(214);    // compilenode identifier
                    // call case 4: self request
                    onSelf = true;
                    var call1839 = callmethodChecked(this, "isMe(1)", [1], var_other);
                    if (Grace_isTrue(call1839)) {
                      setLineNumber(215);    // compilenode identifier
                      return GraceTrue;
                    }
                    var if1840 = GraceDone;
                    setLineNumber(218);    // compilenode member
                    // call case 6: other requests
                    var call1842 = callmethodChecked(var_other, "isUnknown", []);
                    if (Grace_isTrue(call1842)) {
                      setLineNumber(219);    // compilenode identifier
                      return GraceTrue;
                    }
                    var if1843 = GraceDone;
                    setLineNumber(223);    // compilenode identifier
                    // call case 6: other requests
                    // call case 4: self request
                    onSelf = true;
                    var call1846 = callmethodChecked(this, "currentlyTesting", []);
                    var call1847 = callmethodChecked(call1846, "contains(1)", [1], var_other);
                    if (Grace_isTrue(call1847)) {
                      setLineNumber(224);    // compilenode identifier
                      return GraceTrue;
                    }
                    setLineNumber(227);    // compilenode identifier
                    // call case 6: other requests
                    // call case 4: self request
                    onSelf = true;
                    var call1850 = callmethodChecked(this, "currentlyTesting", []);
                    var call1851 = callmethodChecked(call1850, "push(1)", [1], var_other);
                    setLineNumber(229);    // compilenode member
                    // call case 6: other requests
                    var call1854 = callmethodChecked(var_other, "methods", []);
                    var block1855 = new GraceBlock(this, 229, 2);
                    setLineNumber(1);    // compilenode identifier
                    block1855.real = function(var_a, var_continue) {
                      setLineNumber(230);    // compilenode member
                      // call case 4: self request
                      onSelf = true;
                      var call1858 = callmethodChecked(this, "methods", []);
                      var block1859 = new GraceBlock(this, 230, 1);
                      setLineNumber(1);    // compilenode identifier
                      block1859.real = function(var_b) {
                        var if1860 = GraceDone;
                        setLineNumber(231);    // compilenode identifier
                        // call case 6: other requests
                        var call1862 = callmethodChecked(var_b, "isSpecialisationOf(1)", [1], var_a);
                        if (Grace_isTrue(call1862)) {
                          setLineNumber(232);    // compilenode member
                          // call case 6: other requests
                          var call1864 = callmethodChecked(var_continue, "apply", []);
                          if1860 = call1864;
                        }
                        return if1860;
                      };
                      // call case 5: prelude request
                      var call1865 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1858, block1859);
                      setLineNumber(236);    // compilenode member
                      // call case 6: other requests
                      // call case 4: self request
                      onSelf = true;
                      var call1868 = callmethodChecked(this, "currentlyTesting", []);
                      var call1869 = callmethodChecked(call1868, "pop", []);
                      setLineNumber(237);    // compilenode identifier
                      throw new ReturnException(GraceFalse, returnTarget);
                      return undefined;
                    };
                    // call case 6: other requests
                    // call case 6: other requests
                    // call case 3: self.outer request
                    var call1872 = callmethodChecked(superDepth, "outer", [0]);
                    var call1873 = callmethodChecked(call1872, "outer", []);
                    onSelf = true;
                    var call1874 = callmethodChecked(call1873, "for(1)doWithContinue(1)", [1, 1], call1854, block1855);
                    setLineNumber(240);    // compilenode member
                    // call case 6: other requests
                    // call case 4: self request
                    onSelf = true;
                    var call1877 = callmethodChecked(this, "currentlyTesting", []);
                    var call1878 = callmethodChecked(call1877, "pop", []);
                    setLineNumber(241);    // compilenode identifier
                    return GraceTrue;
                  };
                  func1836.paramTypes = [];
                  func1836.paramTypes.push([]);
                  func1836.paramCounts = [1];
                  obj1822.methods["isSubtypeOf(1)"] = func1836;
                  func1836.definitionLine = 213;
                  func1836.definitionModule = "staticTypes";
                  var func1879 = function(argcv) {    // method |(_)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_other = arguments[curarg];
                    curarg++;
                    setModuleName("staticTypes");
                    var if1880 = GraceDone;
                    setLineNumber(245);    // compilenode identifier
                    // call case 4: self request
                    onSelf = true;
                    var call1882 = callmethodChecked(this, "isMe(1)", [1], var_other);
                    if (Grace_isTrue(call1882)) {
                      return this;
                    }
                    var if1883 = GraceDone;
                    setLineNumber(246);    // compilenode member
                    // call case 6: other requests
                    var call1885 = callmethodChecked(var_other, "isUnknown", []);
                    if (Grace_isTrue(call1885)) {
                      // call case 6: other requests
                      // call case 3: self.outer request
                      var call1888 = callmethodChecked(superDepth, "outer", [0]);
                      onSelf = true;
                      var call1889 = callmethodChecked(call1888, "unknown", []);
                      return call1889;
                    }
                    setLineNumber(248);    // compilenode array
                    var array1890 = new PrimitiveGraceList([]);
                    var var_combine = array1890;
                    setLineNumber(250);    // compilenode member
                    // call case 4: self request
                    onSelf = true;
                    var call1893 = callmethodChecked(this, "methods", []);
                    var block1894 = new GraceBlock(this, 250, 2);
                    setLineNumber(1);    // compilenode identifier
                    block1894.real = function(var_meth, var_continue) {
                      setLineNumber(251);    // compilenode member
                      // call case 6: other requests
                      var call1897 = callmethodChecked(var_other, "methods", []);
                      var block1898 = new GraceBlock(this, 251, 1);
                      setLineNumber(1);    // compilenode identifier
                      block1898.real = function(var_meth__39__) {
                        var if1899 = GraceDone;
                        setLineNumber(252);    // compilenode member
                        // call case 6: other requests
                        var call1901 = callmethodChecked(var_meth__39__, "name", []);
                        // call case 6: other requests
                        var call1904 = callmethodChecked(var_meth, "name", []);
                        var opresult1906 = callmethodChecked(call1904, "==(1)", [1], call1901);
                        if (Grace_isTrue(opresult1906)) {
                          var if1907 = GraceDone;
                          setLineNumber(253);    // compilenode identifier
                          // call case 6: other requests
                          var call1909 = callmethodChecked(var_meth, "isSpecialisationOf(1)", [1], var_meth__39__);
                          if (Grace_isTrue(call1909)) {
                            setLineNumber(254);    // compilenode identifier
                            // call case 6: other requests
                            var call1911 = callmethodChecked(var_combine, "push(1)", [1], var_meth);
                            if1907 = call1911;
                          } else {
                            var if1912 = GraceDone;
                            setLineNumber(255);    // compilenode identifier
                            // call case 6: other requests
                            var call1914 = callmethodChecked(var_meth__39__, "isSpecialisationOf(1)", [1], var_meth);
                            if (Grace_isTrue(call1914)) {
                              setLineNumber(256);    // compilenode identifier
                              // call case 6: other requests
                              var call1916 = callmethodChecked(var_combine, "push(1)", [1], var_meth__39__);
                              if1912 = call1916;
                            } else {
                              setLineNumber(259);    // compilenode string
                              var string1918 = new GraceString("'");
                              var string1921 = new GraceString("' and '");
                              var string1924 = new GraceString("incompatible types '");
                              var opresult1926 = callmethodChecked(string1924, "++(1)", [1], this);
                              var opresult1928 = callmethodChecked(opresult1926, "++(1)", [1], string1921);
                              var opresult1930 = callmethodChecked(opresult1928, "++(1)", [1], var_other);
                              var opresult1932 = callmethodChecked(opresult1930, "++(1)", [1], string1918);
                              setLineNumber(258);    // compilenode string
                              var string1934 = new GraceString("cannot produce intersection of ");
                              var opresult1936 = callmethodChecked(string1934, "++(1)", [1], opresult1932);
                              // call case 6: other requests
                              var call1937 = callmethodChecked(var_TypeError, "raise(1)", [1], opresult1936);
                              if1912 = call1937;
                            }
                            if1907 = if1912;
                          }
                          setLineNumber(262);    // compilenode member
                          // call case 6: other requests
                          var call1939 = callmethodChecked(var_continue, "apply", []);
                          if1899 = call1939;
                        }
                        return if1899;
                      };
                      // call case 5: prelude request
                      var call1940 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1897, block1898);
                      return call1940;
                    };
                    // call case 6: other requests
                    // call case 6: other requests
                    // call case 3: self.outer request
                    var call1943 = callmethodChecked(superDepth, "outer", [0]);
                    var call1944 = callmethodChecked(call1943, "outer", []);
                    onSelf = true;
                    var call1945 = callmethodChecked(call1944, "for(1)doWithContinue(1)", [1, 1], call1893, block1894);
                    setLineNumber(267);    // compilenode identifier
                    var var_hack = var_objectType;
                    setLineNumber(268);    // compilenode object
                    var obj1946 = Grace_allocObject(null, "object");
                    obj1946.definitionModule = "staticTypes";
                    obj1946.definitionLine = 268;
                    obj1946.outer = this;
                    var reader_staticTypes_outer1947 = function() {
                      return this.outer;
                    };
                    obj1946.methods["outer"] = reader_staticTypes_outer1947;
                    var obj_init_1946 = function() {
                      var origSuperDepth = superDepth;
                      superDepth = obj1946;
                      var func1948 = function(argcv) {    // method asString
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var curarg = 1;
                        setModuleName("staticTypes");
                        setLineNumber(272);    // compilenode string
                        var string1949 = new GraceString("");
                        var string1952 = new GraceString(" | ");
                        // call case 3: self.outer request
                        var call1955 = callmethodChecked(superDepth, "outer", [0]);
                        var string1957 = new GraceString("");
                        var opresult1959 = callmethodChecked(string1957, "++(1)", [1], call1955);
                        var opresult1961 = callmethodChecked(opresult1959, "++(1)", [1], string1952);
                        var opresult1963 = callmethodChecked(opresult1961, "++(1)", [1], var_other);
                        var opresult1965 = callmethodChecked(opresult1963, "++(1)", [1], string1949);
                        return opresult1965;
                      };
                      func1948.paramCounts = [0];
                      obj1946.methods["asString"] = func1948;
                      func1948.definitionLine = 271;
                      func1948.definitionModule = "staticTypes";
                      setLineNumber(269);    // compilenode identifier
                      // call case 6: other requests
                      var call1967 = callmethodChecked(var_hack, "fromMethods(1)$object(1)", [1, 1], var_combine, this);
                      obj1946.superobj = call1967;
                      if (call1967.data) obj1946.data = call1967.data;
                      if (call1967.hasOwnProperty('_value'))
                          obj1946._value = call1967._value;
                      superDepth = origSuperDepth;
                    };
                    obj_init_1946.apply(obj1946, []);
                    return obj1946;
                  };
                  func1879.paramTypes = [];
                  func1879.paramTypes.push([]);
                  func1879.paramCounts = [1];
                  obj1822.methods["|(1)"] = func1879;
                  func1879.definitionLine = 244;
                  func1879.definitionModule = "staticTypes";
                  var func1968 = function(argcv) {    // method &(_)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_other = arguments[curarg];
                    curarg++;
                    setModuleName("staticTypes");
                    var if1969 = GraceDone;
                    setLineNumber(278);    // compilenode identifier
                    // call case 4: self request
                    onSelf = true;
                    var call1971 = callmethodChecked(this, "isMe(1)", [1], var_other);
                    if (Grace_isTrue(call1971)) {
                      return this;
                    }
                    var if1972 = GraceDone;
                    setLineNumber(279);    // compilenode member
                    // call case 6: other requests
                    var call1974 = callmethodChecked(var_other, "isUnknown", []);
                    if (Grace_isTrue(call1974)) {
                      // call case 6: other requests
                      // call case 3: self.outer request
                      var call1977 = callmethodChecked(superDepth, "outer", [0]);
                      onSelf = true;
                      var call1978 = callmethodChecked(call1977, "unknown", []);
                      return call1978;
                    }
                    setLineNumber(281);    // compilenode array
                    var array1979 = new PrimitiveGraceList([]);
                    var var_combine = array1979;
                    setLineNumber(282);    // compilenode array
                    var array1980 = new PrimitiveGraceList([]);
                    var var_twice = array1980;
                    setLineNumber(284);    // compilenode member
                    // call case 4: self request
                    onSelf = true;
                    var call1983 = callmethodChecked(this, "methods", []);
                    var block1984 = new GraceBlock(this, 284, 2);
                    setLineNumber(1);    // compilenode identifier
                    block1984.real = function(var_meth, var_continue) {
                      setLineNumber(285);    // compilenode member
                      // call case 6: other requests
                      var call1987 = callmethodChecked(var_other, "methods", []);
                      var block1988 = new GraceBlock(this, 285, 1);
                      setLineNumber(1);    // compilenode identifier
                      block1988.real = function(var_meth__39__) {
                        var if1989 = GraceDone;
                        setLineNumber(286);    // compilenode member
                        // call case 6: other requests
                        var call1991 = callmethodChecked(var_meth__39__, "name", []);
                        // call case 6: other requests
                        var call1994 = callmethodChecked(var_meth, "name", []);
                        var opresult1996 = callmethodChecked(call1994, "==(1)", [1], call1991);
                        if (Grace_isTrue(opresult1996)) {
                          var if1997 = GraceDone;
                          setLineNumber(287);    // compilenode identifier
                          // call case 6: other requests
                          var call1999 = callmethodChecked(var_meth, "isSpecialisationOf(1)", [1], var_meth__39__);
                          if (Grace_isTrue(call1999)) {
                            setLineNumber(288);    // compilenode identifier
                            // call case 6: other requests
                            var call2001 = callmethodChecked(var_combine, "push(1)", [1], var_meth);
                            if1997 = call2001;
                          } else {
                            var if2002 = GraceDone;
                            setLineNumber(289);    // compilenode identifier
                            // call case 6: other requests
                            var call2004 = callmethodChecked(var_meth__39__, "isSpecialisationOf(1)", [1], var_meth);
                            if (Grace_isTrue(call2004)) {
                              setLineNumber(290);    // compilenode identifier
                              // call case 6: other requests
                              var call2006 = callmethodChecked(var_combine, "push(1)", [1], var_meth__39__);
                              if2002 = call2006;
                            } else {
                              setLineNumber(293);    // compilenode string
                              var string2008 = new GraceString("'");
                              var string2011 = new GraceString("' and '");
                              var string2014 = new GraceString("incompatible types '");
                              var opresult2016 = callmethodChecked(string2014, "++(1)", [1], this);
                              var opresult2018 = callmethodChecked(opresult2016, "++(1)", [1], string2011);
                              var opresult2020 = callmethodChecked(opresult2018, "++(1)", [1], var_other);
                              var opresult2022 = callmethodChecked(opresult2020, "++(1)", [1], string2008);
                              setLineNumber(292);    // compilenode string
                              var string2024 = new GraceString("cannot produce union of ");
                              var opresult2026 = callmethodChecked(string2024, "++(1)", [1], opresult2022);
                              // call case 6: other requests
                              var call2027 = callmethodChecked(var_TypeError, "raise(1)", [1], opresult2026);
                              if2002 = call2027;
                            }
                            if1997 = if2002;
                          }
                          setLineNumber(296);    // compilenode member
                          // call case 6: other requests
                          var call2030 = callmethodChecked(var_meth, "name", []);
                          // call case 6: other requests
                          var call2031 = callmethodChecked(var_twice, "push(1)", [1], call2030);
                          setLineNumber(298);    // compilenode member
                          // call case 6: other requests
                          var call2033 = callmethodChecked(var_continue, "apply", []);
                          if1989 = call2033;
                        }
                        return if1989;
                      };
                      // call case 5: prelude request
                      var call2034 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1987, block1988);
                      setLineNumber(302);    // compilenode identifier
                      // call case 6: other requests
                      var call2036 = callmethodChecked(var_combine, "push(1)", [1], var_meth);
                      return call2036;
                    };
                    // call case 6: other requests
                    // call case 6: other requests
                    // call case 3: self.outer request
                    var call2039 = callmethodChecked(superDepth, "outer", [0]);
                    var call2040 = callmethodChecked(call2039, "outer", []);
                    onSelf = true;
                    var call2041 = callmethodChecked(call2040, "for(1)doWithContinue(1)", [1, 1], call1983, block1984);
                    setLineNumber(305);    // compilenode member
                    // call case 6: other requests
                    var call2044 = callmethodChecked(var_other, "methods", []);
                    var block2045 = new GraceBlock(this, 305, 1);
                    setLineNumber(1);    // compilenode identifier
                    block2045.real = function(var_meth) {
                      var if2046 = GraceDone;
                      setLineNumber(306);    // compilenode member
                      // call case 6: other requests
                      // call case 6: other requests
                      var call2050 = callmethodChecked(var_meth, "name", []);
                      // call case 6: other requests
                      var call2051 = callmethodChecked(var_twice, "contains(1)", [1], call2050);
                      var call2052 = callmethodChecked(call2051, "not", []);
                      if (Grace_isTrue(call2052)) {
                        setLineNumber(307);    // compilenode identifier
                        // call case 6: other requests
                        var call2054 = callmethodChecked(var_combine, "push(1)", [1], var_meth);
                        if2046 = call2054;
                      }
                      return if2046;
                    };
                    // call case 5: prelude request
                    var call2055 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call2044, block2045);
                    setLineNumber(311);    // compilenode identifier
                    var var_hack = var_objectType;
                    setLineNumber(312);    // compilenode object
                    var obj2056 = Grace_allocObject(null, "&(1)");
                    obj2056.definitionModule = "staticTypes";
                    obj2056.definitionLine = 312;
                    obj2056.outer = this;
                    var reader_staticTypes_outer2057 = function() {
                      return this.outer;
                    };
                    obj2056.methods["outer"] = reader_staticTypes_outer2057;
                    var obj_init_2056 = function() {
                      var origSuperDepth = superDepth;
                      superDepth = obj2056;
                      var func2058 = function(argcv) {    // method asString
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var curarg = 1;
                        setModuleName("staticTypes");
                        setLineNumber(316);    // compilenode string
                        var string2059 = new GraceString("");
                        var string2062 = new GraceString(" & ");
                        // call case 3: self.outer request
                        var call2065 = callmethodChecked(superDepth, "outer", [0]);
                        var string2067 = new GraceString("");
                        var opresult2069 = callmethodChecked(string2067, "++(1)", [1], call2065);
                        var opresult2071 = callmethodChecked(opresult2069, "++(1)", [1], string2062);
                        var opresult2073 = callmethodChecked(opresult2071, "++(1)", [1], var_other);
                        var opresult2075 = callmethodChecked(opresult2073, "++(1)", [1], string2059);
                        return opresult2075;
                      };
                      func2058.paramCounts = [0];
                      obj2056.methods["asString"] = func2058;
                      func2058.definitionLine = 315;
                      func2058.definitionModule = "staticTypes";
                      setLineNumber(313);    // compilenode identifier
                      // call case 6: other requests
                      var call2077 = callmethodChecked(var_hack, "fromMethods(1)$object(1)", [1, 1], var_combine, this);
                      obj2056.superobj = call2077;
                      if (call2077.data) obj2056.data = call2077.data;
                      if (call2077.hasOwnProperty('_value'))
                          obj2056._value = call2077._value;
                      superDepth = origSuperDepth;
                    };
                    obj_init_2056.apply(obj2056, []);
                    return obj2056;
                  };
                  func1968.paramTypes = [];
                  func1968.paramTypes.push([]);
                  func1968.paramCounts = [1];
                  obj1822.methods["&(1)"] = func1968;
                  func1968.definitionLine = 277;
                  func1968.definitionModule = "staticTypes";
                    var func2078 = function(argcv) {    // method &(_)$object(_)
                      var curarg = 1;
                      var var_other = arguments[curarg];
                      curarg++;
                      var inheritingObject = arguments[curarg++];
                      // Start argument processing
                      curarg = 1;
                      curarg++;
                      // End argument processing
                      setModuleName("staticTypes");
                      var returnTarget = invocationCount;
                      invocationCount++;
                      var if2079 = GraceDone;
                      setLineNumber(278);    // compilenode identifier
                      // call case 4: self request
                      onSelf = true;
                      var call2081 = callmethodChecked(this, "isMe(1)", [1], var_other);
                      if (Grace_isTrue(call2081)) {
                        return this;
                      }
                      var if2082 = GraceDone;
                      setLineNumber(279);    // compilenode member
                      // call case 6: other requests
                      var call2084 = callmethodChecked(var_other, "isUnknown", []);
                      if (Grace_isTrue(call2084)) {
                        // call case 6: other requests
                        // call case 3: self.outer request
                        var call2087 = callmethodChecked(superDepth, "outer", [0]);
                        onSelf = true;
                        var call2088 = callmethodChecked(call2087, "unknown", []);
                        return call2088;
                      }
                      setLineNumber(281);    // compilenode array
                      var array2089 = new PrimitiveGraceList([]);
                      var var_combine = array2089;
                      setLineNumber(282);    // compilenode array
                      var array2090 = new PrimitiveGraceList([]);
                      var var_twice = array2090;
                      setLineNumber(284);    // compilenode member
                      // call case 4: self request
                      onSelf = true;
                      var call2093 = callmethodChecked(this, "methods", []);
                      var block2094 = new GraceBlock(this, 284, 2);
                      setLineNumber(1);    // compilenode identifier
                      block2094.real = function(var_meth, var_continue) {
                        setLineNumber(285);    // compilenode member
                        // call case 6: other requests
                        var call2097 = callmethodChecked(var_other, "methods", []);
                        var block2098 = new GraceBlock(this, 285, 1);
                        setLineNumber(1);    // compilenode identifier
                        block2098.real = function(var_meth__39__) {
                          var if2099 = GraceDone;
                          setLineNumber(286);    // compilenode member
                          // call case 6: other requests
                          var call2101 = callmethodChecked(var_meth__39__, "name", []);
                          // call case 6: other requests
                          var call2104 = callmethodChecked(var_meth, "name", []);
                          var opresult2106 = callmethodChecked(call2104, "==(1)", [1], call2101);
                          if (Grace_isTrue(opresult2106)) {
                            var if2107 = GraceDone;
                            setLineNumber(287);    // compilenode identifier
                            // call case 6: other requests
                            var call2109 = callmethodChecked(var_meth, "isSpecialisationOf(1)", [1], var_meth__39__);
                            if (Grace_isTrue(call2109)) {
                              setLineNumber(288);    // compilenode identifier
                              // call case 6: other requests
                              var call2111 = callmethodChecked(var_combine, "push(1)", [1], var_meth);
                              if2107 = call2111;
                            } else {
                              var if2112 = GraceDone;
                              setLineNumber(289);    // compilenode identifier
                              // call case 6: other requests
                              var call2114 = callmethodChecked(var_meth__39__, "isSpecialisationOf(1)", [1], var_meth);
                              if (Grace_isTrue(call2114)) {
                                setLineNumber(290);    // compilenode identifier
                                // call case 6: other requests
                                var call2116 = callmethodChecked(var_combine, "push(1)", [1], var_meth__39__);
                                if2112 = call2116;
                              } else {
                                setLineNumber(293);    // compilenode string
                                var string2118 = new GraceString("'");
                                var string2121 = new GraceString("' and '");
                                var string2124 = new GraceString("incompatible types '");
                                var opresult2126 = callmethodChecked(string2124, "++(1)", [1], this);
                                var opresult2128 = callmethodChecked(opresult2126, "++(1)", [1], string2121);
                                var opresult2130 = callmethodChecked(opresult2128, "++(1)", [1], var_other);
                                var opresult2132 = callmethodChecked(opresult2130, "++(1)", [1], string2118);
                                setLineNumber(292);    // compilenode string
                                var string2134 = new GraceString("cannot produce union of ");
                                var opresult2136 = callmethodChecked(string2134, "++(1)", [1], opresult2132);
                                // call case 6: other requests
                                var call2137 = callmethodChecked(var_TypeError, "raise(1)", [1], opresult2136);
                                if2112 = call2137;
                              }
                              if2107 = if2112;
                            }
                            setLineNumber(296);    // compilenode member
                            // call case 6: other requests
                            var call2140 = callmethodChecked(var_meth, "name", []);
                            // call case 6: other requests
                            var call2141 = callmethodChecked(var_twice, "push(1)", [1], call2140);
                            setLineNumber(298);    // compilenode member
                            // call case 6: other requests
                            var call2143 = callmethodChecked(var_continue, "apply", []);
                            if2099 = call2143;
                          }
                          return if2099;
                        };
                        // call case 5: prelude request
                        var call2144 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call2097, block2098);
                        setLineNumber(302);    // compilenode identifier
                        // call case 6: other requests
                        var call2146 = callmethodChecked(var_combine, "push(1)", [1], var_meth);
                        return call2146;
                      };
                      // call case 6: other requests
                      // call case 6: other requests
                      // call case 3: self.outer request
                      var call2149 = callmethodChecked(superDepth, "outer", [0]);
                      var call2150 = callmethodChecked(call2149, "outer", []);
                      onSelf = true;
                      var call2151 = callmethodChecked(call2150, "for(1)doWithContinue(1)", [1, 1], call2093, block2094);
                      setLineNumber(305);    // compilenode member
                      // call case 6: other requests
                      var call2154 = callmethodChecked(var_other, "methods", []);
                      var block2155 = new GraceBlock(this, 305, 1);
                      setLineNumber(1);    // compilenode identifier
                      block2155.real = function(var_meth) {
                        var if2156 = GraceDone;
                        setLineNumber(306);    // compilenode member
                        // call case 6: other requests
                        // call case 6: other requests
                        var call2160 = callmethodChecked(var_meth, "name", []);
                        // call case 6: other requests
                        var call2161 = callmethodChecked(var_twice, "contains(1)", [1], call2160);
                        var call2162 = callmethodChecked(call2161, "not", []);
                        if (Grace_isTrue(call2162)) {
                          setLineNumber(307);    // compilenode identifier
                          // call case 6: other requests
                          var call2164 = callmethodChecked(var_combine, "push(1)", [1], var_meth);
                          if2156 = call2164;
                        }
                        return if2156;
                      };
                      // call case 5: prelude request
                      var call2165 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call2154, block2155);
                      setLineNumber(311);    // compilenode identifier
                      var var_hack = var_objectType;
                      var obj2166 = Grace_allocObject(null, "&(1)");
                      obj2166.definitionModule = "staticTypes";
                      obj2166.definitionLine = 312;
                      var inho2166 = inheritingObject;
                      while (inho2166.superobj) inho2166 = inho2166.superobj;
                      inho2166.superobj = obj2166;
                      obj2166.data = inheritingObject.data;
                      if (inheritingObject.hasOwnProperty('_value'))
                        obj2166._value = inheritingObject._value;
                      obj2166.outer = this;
                      var reader_staticTypes_outer2167 = function() {
                        return this.outer;
                      };
                      obj2166.methods["outer"] = reader_staticTypes_outer2167;
                      var obj_init_2166 = function() {
                        var origSuperDepth = superDepth;
                        superDepth = obj2166;
                        var func2168 = function(argcv) {    // method asString
                          var returnTarget = invocationCount;
                          invocationCount++;
                          var curarg = 1;
                          setModuleName("staticTypes");
                          setLineNumber(316);    // compilenode string
                          var string2169 = new GraceString("");
                          var string2172 = new GraceString(" & ");
                          // call case 3: self.outer request
                          var call2175 = callmethodChecked(superDepth, "outer", [0]);
                          var string2177 = new GraceString("");
                          var opresult2179 = callmethodChecked(string2177, "++(1)", [1], call2175);
                          var opresult2181 = callmethodChecked(opresult2179, "++(1)", [1], string2172);
                          var opresult2183 = callmethodChecked(opresult2181, "++(1)", [1], var_other);
                          var opresult2185 = callmethodChecked(opresult2183, "++(1)", [1], string2169);
                          return opresult2185;
                        };
                        func2168.paramCounts = [0];
                        obj2166.methods["asString"] = func2168;
                        func2168.definitionLine = 315;
                        func2168.definitionModule = "staticTypes";
                        setLineNumber(313);    // compilenode identifier
                        // call case 6: other requests
                        var call2187 = callmethodChecked(var_hack, "fromMethods(1)$object(1)", [1, 1], var_combine, this);
                        obj2166.superobj = call2187;
                        if (call2187.data) obj2166.data = call2187.data;
                        if (call2187.hasOwnProperty('_value'))
                            obj2166._value = call2187._value;
                        superDepth = origSuperDepth;
                      };
                      obj_init_2166.apply(inheritingObject, []);
                      return obj2166;
                      };
                      func2078.paramTypes = [];
                      func2078.paramTypes.push([]);
                      obj1822.methods["&(1)$object(1)"] = func2078;
                    var func2188 = function(argcv) {    // method asString
                      var returnTarget = invocationCount;
                      invocationCount++;
                      var curarg = 1;
                      setModuleName("staticTypes");
                      var if2189 = GraceDone;
                      setLineNumber(322);    // compilenode member
                      // call case 6: other requests
                      // call case 4: self request
                      onSelf = true;
                      var call2193 = callmethodChecked(this, "methods", []);
                      var call2194 = callmethodChecked(call2193, "size", []);
                      var opresult2196 = callmethodChecked(call2194, "==(1)", [1], new GraceNum(3));
                      if (Grace_isTrue(opresult2196)) {
                        setLineNumber(323);    // compilenode string
                        var string2197 = new GraceString("Object");
                        return string2197;
                      }
                      setLineNumber(326);    // compilenode string
                      var string2198 = new GraceString("{ ");
                      var var_out = string2198;
                      setLineNumber(328);    // compilenode member
                      // call case 4: self request
                      onSelf = true;
                      var call2201 = callmethodChecked(this, "methods", []);
                      var block2202 = new GraceBlock(this, 328, 1);
                      setLineNumber(1);    // compilenode identifier
                      block2202.real = function(var_mtype) {
                        var if2203 = GraceDone;
                        setLineNumber(329);    // compilenode member
                        // call case 6: other requests
                        // call case 6: other requests
                        var call2207 = callmethodChecked(var_mtype, "name", []);
                        // call case 6: other requests
                        var string2209 = new GraceString("!=");
                        var string2210 = new GraceString("\u2260");
                        var string2211 = new GraceString("asString");
                        var string2212 = new GraceString("asDebugString");
                        var string2213 = new GraceString("::");
                        var array2208 = new PrimitiveGraceList([string2209, string2210, string2211, string2212, string2213]);
                        var call2214 = callmethodChecked(array2208, "contains(1)", [1], call2207);
                        var call2215 = callmethodChecked(call2214, "not", []);
                        if (Grace_isTrue(call2215)) {
                          setLineNumber(330);    // compilenode string
                          var string2216 = new GraceString("; ");
                          var string2219 = new GraceString("");
                          var string2222 = new GraceString("");
                          var opresult2224 = callmethodChecked(string2222, "++(1)", [1], var_out);
                          var opresult2226 = callmethodChecked(opresult2224, "++(1)", [1], string2219);
                          var opresult2228 = callmethodChecked(opresult2226, "++(1)", [1], var_mtype);
                          var opresult2230 = callmethodChecked(opresult2228, "++(1)", [1], string2216);
                          var_out = opresult2230;
                          if2203 = GraceDone;
                        }
                        return if2203;
                      };
                      // call case 5: prelude request
                      var call2231 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call2201, block2202);
                      setLineNumber(334);    // compilenode string
                      var string2232 = new GraceString("}");
                      var string2235 = new GraceString("");
                      var opresult2237 = callmethodChecked(string2235, "++(1)", [1], var_out);
                      var opresult2239 = callmethodChecked(opresult2237, "++(1)", [1], string2232);
                      return opresult2239;
                    };
                    func2188.paramCounts = [0];
                    obj1822.methods["asString"] = func2188;
                    func2188.definitionLine = 321;
                    func2188.definitionModule = "staticTypes";
                    var if2241 = GraceDone;
                    setLineNumber(195);    // compilenode member
                    // call case 6: other requests
                    // call case 3: self.outer request
                    var call2244 = callmethodChecked(superDepth, "outer", [0]);
                    onSelf = true;
                    var call2245 = callmethodChecked(call2244, "unknown", []);
                    // call case 6: other requests
                    // call case 3: self.outer request
                    var call2249 = callmethodChecked(superDepth, "outer", [0]);
                    onSelf = true;
                    var call2250 = callmethodChecked(call2249, "base", []);
                    var opresult2252 = callmethodChecked(call2250, "==(1)", [1], call2245);
                    if (Grace_isTrue(opresult2252)) {
                      setLineNumber(196);    // compilenode array
                      var array2253 = new PrimitiveGraceList([]);
                      if2241 = array2253;
                    } else {
                      // call case 6: other requests
                      // call case 6: other requests
                      // call case 3: self.outer request
                      var call2257 = callmethodChecked(superDepth, "outer", [0]);
                      onSelf = true;
                      var call2258 = callmethodChecked(call2257, "base", []);
                      var call2259 = callmethodChecked(call2258, "methods", []);
                      if2241 = call2259;
                    }
                    var opresult2261 = callmethodChecked(if2241, "++(1)", [1], var_methods__39__);
                    obj1822.data["methods"] = opresult2261;
                    var reader_staticTypes_methods2262 = function() {
                      return this.data["methods"];
                    };
                    reader_staticTypes_methods2262.def = true;
                    obj1822.methods["methods"] = reader_staticTypes_methods2262;
                    setLineNumber(208);    // compilenode identifier
                    obj1822.data["isUnknown"] = GraceFalse;
                    var reader_staticTypes_isUnknown2263 = function() {
                      return this.data["isUnknown"];
                    };
                    reader_staticTypes_isUnknown2263.def = true;
                    obj1822.methods["isUnknown"] = reader_staticTypes_isUnknown2263;
                    setLineNumber(211);    // compilenode array
                    var array2264 = new PrimitiveGraceList([]);
                    obj1822.data["currentlyTesting"] = array2264;
                    var reader_staticTypes_currentlyTesting2265 = function() {
                      return this.data["currentlyTesting"];
                    };
                    reader_staticTypes_currentlyTesting2265.def = true;
                    reader_staticTypes_currentlyTesting2265.confidential = true;
                    obj1822.methods["currentlyTesting"] = reader_staticTypes_currentlyTesting2265;
                    superDepth = origSuperDepth;
                  };
                  obj_init_1822.apply(inheritingObject, []);
                  return obj1822;
                  };
                  obj1374.methods["fromMethods(1)$object(1)"] = func1821;
                var func2266 = function(argcv) {    // method fromMethods(_)withName(_)
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  var var_methods__39__ = arguments[curarg];
                  curarg++;
                  var var_name = arguments[curarg];
                  curarg++;
                  setModuleName("staticTypes");
                  setLineNumber(338);    // compilenode object
                  var obj2267 = Grace_allocObject(null, "objectType.fromMethods(_)withName(_)");
                  obj2267.definitionModule = "staticTypes";
                  obj2267.definitionLine = 338;
                  obj2267.outer = this;
                  var reader_staticTypes_outer2268 = function() {
                    return this.outer;
                  };
                  obj2267.methods["outer"] = reader_staticTypes_outer2268;
                  var obj_init_2267 = function() {
                    var origSuperDepth = superDepth;
                    superDepth = obj2267;
                    var func2269 = function(argcv) {    // method asString
                      var returnTarget = invocationCount;
                      invocationCount++;
                      var curarg = 1;
                      setModuleName("staticTypes");
                      // asString is a simple accessor - elide try ... catch
                      setLineNumber(342);    // compilenode identifier
                      return var_name;
                    };
                    func2269.paramCounts = [0];
                    obj2267.methods["asString"] = func2269;
                    func2269.definitionLine = 342;
                    func2269.definitionModule = "staticTypes";
                    var func2270 = function(argcv) {    // method ==(_)
                      var returnTarget = invocationCount;
                      invocationCount++;
                      var curarg = 1;
                      var var_other = arguments[curarg];
                      curarg++;
                      setModuleName("staticTypes");
                      setLineNumber(343);    // compilenode identifier
                      // call case 4: self request
                      onSelf = true;
                      var call2272 = callmethodChecked(this, "isMe(1)", [1], var_other);
                      return call2272;
                    };
                    func2270.paramCounts = [1];
                    obj2267.methods["==(1)"] = func2270;
                    func2270.definitionLine = 343;
                    func2270.definitionModule = "staticTypes";
                    setLineNumber(340);    // compilenode identifier
                    // call case 6: other requests
                    setLineNumber(1053);    // compilenode member
                    // call case 3: self.outer request
                    var call2275 = callmethodChecked(superDepth, "outer", [0]);
                    onSelf = true;
                    var call2276 = callmethodChecked(call2275, "fromMethods(1)$object(1)", [1, 1], var_methods__39__, this);
                    obj2267.superobj = call2276;
                    if (call2276.data) obj2267.data = call2276.data;
                    if (call2276.hasOwnProperty('_value'))
                        obj2267._value = call2276._value;
                    superDepth = origSuperDepth;
                  };
                  obj_init_2267.apply(obj2267, []);
                  return obj2267;
                };
                func2266.paramTypes = [];
                func2266.paramTypes.push([]);
                func2266.paramTypes.push([type_String, "name"]);
                func2266.paramCounts = [1, 1];
                obj1374.methods["fromMethods(1)withName(1)"] = func2266;
                func2266.definitionLine = 338;
                func2266.definitionModule = "staticTypes";
                  var func2277 = function(argcv) {    // method fromMethods(_)withName(_)$object(_)
                    var curarg = 1;
                    var var_methods__39__ = arguments[curarg];
                    curarg++;
                    var var_name = arguments[curarg];
                    curarg++;
                    var inheritingObject = arguments[curarg++];
                    // Start argument processing
                    curarg = 1;
                    curarg++;
                    curarg++;
                    // End argument processing
                    setModuleName("staticTypes");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var obj2278 = Grace_allocObject(null, "fromMethods(1)withName(1)");
                    obj2278.definitionModule = "staticTypes";
                    obj2278.definitionLine = 338;
                    var inho2278 = inheritingObject;
                    while (inho2278.superobj) inho2278 = inho2278.superobj;
                    inho2278.superobj = obj2278;
                    obj2278.data = inheritingObject.data;
                    if (inheritingObject.hasOwnProperty('_value'))
                      obj2278._value = inheritingObject._value;
                    obj2278.outer = this;
                    var reader_staticTypes_outer2279 = function() {
                      return this.outer;
                    };
                    obj2278.methods["outer"] = reader_staticTypes_outer2279;
                    var obj_init_2278 = function() {
                      var origSuperDepth = superDepth;
                      superDepth = obj2278;
                      var func2280 = function(argcv) {    // method asString
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var curarg = 1;
                        setModuleName("staticTypes");
                        // asString is a simple accessor - elide try ... catch
                        setLineNumber(342);    // compilenode identifier
                        return var_name;
                      };
                      func2280.paramCounts = [0];
                      obj2278.methods["asString"] = func2280;
                      func2280.definitionLine = 342;
                      func2280.definitionModule = "staticTypes";
                      var func2281 = function(argcv) {    // method ==(_)
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var curarg = 1;
                        var var_other = arguments[curarg];
                        curarg++;
                        setModuleName("staticTypes");
                        setLineNumber(343);    // compilenode identifier
                        // call case 4: self request
                        onSelf = true;
                        var call2283 = callmethodChecked(this, "isMe(1)", [1], var_other);
                        return call2283;
                      };
                      func2281.paramCounts = [1];
                      obj2278.methods["==(1)"] = func2281;
                      func2281.definitionLine = 343;
                      func2281.definitionModule = "staticTypes";
                      setLineNumber(340);    // compilenode identifier
                      // call case 6: other requests
                      setLineNumber(1053);    // compilenode member
                      // call case 3: self.outer request
                      var call2286 = callmethodChecked(superDepth, "outer", [0]);
                      onSelf = true;
                      var call2287 = callmethodChecked(call2286, "fromMethods(1)$object(1)", [1, 1], var_methods__39__, this);
                      obj2278.superobj = call2287;
                      if (call2287.data) obj2278.data = call2287.data;
                      if (call2287.hasOwnProperty('_value'))
                          obj2278._value = call2287._value;
                      superDepth = origSuperDepth;
                    };
                    obj_init_2278.apply(inheritingObject, []);
                    return obj2278;
                    };
                    func2277.paramTypes = [];
                    func2277.paramTypes.push([]);
                    func2277.paramTypes.push([type_String, "name"]);
                    obj1374.methods["fromMethods(1)withName(1)$object(1)"] = func2277;
                  var func2288 = function(argcv) {    // method fromDType(_)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_dtype = arguments[curarg];
                    curarg++;
                    setModuleName("staticTypes");
                    setLineNumber(347);    // compilenode identifier
                    var cases2289 = [];
                    var block2290 = new GraceBlock(this, 347, 0);
                    block2290.pattern = GraceFalse;
                    block2290.real = function() {
                      setLineNumber(348);    // compilenode member
                      // call case 4: self request
                      onSelf = true;
                      var call2292 = callmethodChecked(this, "unknown", []);
                      return call2292;
                    };
                    cases2289.push(block2290);
                    setLineNumber(349);    // compilenode block
                    var block2293 = new GraceBlock(this, 349, 1);
                    setLineNumber(0);    // compilenode string
                    var string2296 = new GraceString("lit");
                    // call case 6: other requests
                    // call case 5: prelude request
                    var call2298 = callmethodChecked(var_prelude, "VariablePattern", []);
                    var call2299 = callmethodChecked(call2298, "new(1)", [1], string2296);
                    setLineNumber(349);    // compilenode member
                    // call case 5: prelude request
                    var call2301 = callmethodChecked(var_prelude, "TypeDeclaration", []);
                    // call case 6: other requests
                    setLineNumber(0);    // compilenode member
                    // call case 5: prelude request
                    var call2303 = callmethodChecked(var_prelude, "AndPattern", []);
                    var call2304 = callmethodChecked(call2303, "new(2)", [2], call2299, call2301);
                    block2293.pattern = call2304;
                    setLineNumber(349);    // compilenode member
                    // call case 5: prelude request
                    var call2306 = callmethodChecked(var_prelude, "TypeDeclaration", []);
                    block2293.real = function(var_lit) {
                      setLineNumber(352);    // compilenode member
                      // call case 4: self request
                      onSelf = true;
                      var call2308 = callmethodChecked(this, "unknown", []);
                      throw new ReturnException(call2308, returnTarget);
                      setLineNumber(353);    // compilenode member
                      // call case 6: other requests
                      var call2310 = callmethodChecked(var_lit, "intersectionTypes", []);
                      var var_intersection = call2310;
                      var if2311 = GraceDone;
                      setLineNumber(354);    // compilenode member
                      // call case 6: other requests
                      var call2314 = callmethodChecked(var_intersection, "size", []);
                      var opresult2316 = callmethodChecked(call2314, ">(1)", [1], new GraceNum(1));
                      if (Grace_isTrue(opresult2316)) {
                        setLineNumber(355);    // compilenode member
                        // call case 6: other requests
                        var call2319 = callmethodChecked(var_intersection, "first", []);
                        // call case 4: self request
                        onSelf = true;
                        var call2320 = callmethodChecked(this, "fromDType(1)", [1], call2319);
                        var var_oType = call2320;
                        setLineNumber(357);    // compilenode member
                        // call case 6: other requests
                        var call2324 = callmethodChecked(var_intersection, "size", []);
                        var diff2326 = callmethodChecked(call2324, "-(1)", [1], new GraceNum(1));
                        var opresult2329 = callmethodChecked(new GraceNum(2), "..(1)", [1], diff2326);
                        var block2330 = new GraceBlock(this, 357, 1);
                        setLineNumber(1);    // compilenode identifier
                        block2330.real = function(var_i) {
                          setLineNumber(358);    // compilenode identifier
                          // call case 6: other requests
                          var call2333 = callmethodChecked(var_intersection, "at(1)", [1], var_i);
                          // call case 4: self request
                          onSelf = true;
                          var call2334 = callmethodChecked(this, "fromDType(1)", [1], call2333);
                          var opresult2337 = callmethodChecked(var_oType, "&(1)", [1], call2334);
                          var_oType = opresult2337;
                          return GraceDone;
                        };
                        // call case 5: prelude request
                        var call2338 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], opresult2329, block2330);
                        var if2339 = GraceDone;
                        setLineNumber(361);    // compilenode member
                        // call case 6: other requests
                        var call2341 = callmethodChecked(var_lit, "value", []);
                        var opresult2344 = callmethodChecked(GraceFalse, "\u2260(1)", [1], call2341);
                        if (Grace_isTrue(opresult2344)) {
                          setLineNumber(362);    // compilenode object
                          var obj2345 = Grace_allocObject(null, "object");
                          obj2345.definitionModule = "staticTypes";
                          obj2345.definitionLine = 362;
                          obj2345.outer = this;
                          var reader_staticTypes_outer2346 = function() {
                            return this.outer;
                          };
                          obj2345.methods["outer"] = reader_staticTypes_outer2346;
                          var obj_init_2345 = function() {
                            var origSuperDepth = superDepth;
                            superDepth = obj2345;
                            var func2347 = function(argcv) {    // method asString
                              var returnTarget = invocationCount;
                              invocationCount++;
                              var curarg = 1;
                              setModuleName("staticTypes");
                              setLineNumber(366);    // compilenode member
                              // call case 6: other requests
                              var call2349 = callmethodChecked(var_lit, "value", []);
                              return call2349;
                            };
                            func2347.paramCounts = [0];
                            obj2345.methods["asString"] = func2347;
                            func2347.definitionLine = 366;
                            func2347.definitionModule = "staticTypes";
                            setLineNumber(364);    // compilenode member
                            // call case 6: other requests
                            var call2353 = callmethodChecked(var_intersection, "last", []);
                            // call case 6: other requests
                            // call case 3: self.outer request
                            var call2355 = callmethodChecked(superDepth, "outer", [0]);
                            onSelf = true;
                            var call2356 = callmethodChecked(call2355, "fromDType(1)", [1], call2353);
                            // call case 6: other requests
                            // call case 5: prelude request
                            var call2358 = callmethodChecked(var_prelude, "TypeIntersection", []);
                            var call2359 = callmethodChecked(call2358, "new(2)$object(1)", [2, 1], var_oType, call2356, this);
                            obj2345.superobj = call2359;
                            if (call2359.data) obj2345.data = call2359.data;
                            if (call2359.hasOwnProperty('_value'))
                                obj2345._value = call2359._value;
                            superDepth = origSuperDepth;
                          };
                          obj_init_2345.apply(obj2345, []);
                          if2339 = obj2345;
                        } else {
                          setLineNumber(369);    // compilenode member
                          // call case 6: other requests
                          var call2362 = callmethodChecked(var_intersection, "last", []);
                          // call case 4: self request
                          onSelf = true;
                          var call2363 = callmethodChecked(this, "fromDType(1)", [1], call2362);
                          var opresult2366 = callmethodChecked(var_oType, "&(1)", [1], call2363);
                          if2339 = opresult2366;
                        }
                        throw new ReturnException(if2339, returnTarget);
                      }
                      setLineNumber(373);    // compilenode member
                      // call case 6: other requests
                      var call2368 = callmethodChecked(var_lit, "unionTypes", []);
                      var var_union = call2368;
                      var if2369 = GraceDone;
                      setLineNumber(374);    // compilenode member
                      // call case 6: other requests
                      var call2372 = callmethodChecked(var_union, "size", []);
                      var opresult2374 = callmethodChecked(call2372, ">(1)", [1], new GraceNum(1));
                      if (Grace_isTrue(opresult2374)) {
                        setLineNumber(375);    // compilenode member
                        // call case 6: other requests
                        var call2377 = callmethodChecked(var_union, "first", []);
                        // call case 4: self request
                        onSelf = true;
                        var call2378 = callmethodChecked(this, "fromDType(1)", [1], call2377);
                        var var_oType = call2378;
                        setLineNumber(377);    // compilenode member
                        // call case 6: other requests
                        var call2382 = callmethodChecked(var_union, "size", []);
                        var diff2384 = callmethodChecked(call2382, "-(1)", [1], new GraceNum(1));
                        var opresult2387 = callmethodChecked(new GraceNum(2), "..(1)", [1], diff2384);
                        var block2388 = new GraceBlock(this, 377, 1);
                        setLineNumber(1);    // compilenode identifier
                        block2388.real = function(var_i) {
                          setLineNumber(378);    // compilenode identifier
                          // call case 6: other requests
                          var call2391 = callmethodChecked(var_union, "at(1)", [1], var_i);
                          // call case 4: self request
                          onSelf = true;
                          var call2392 = callmethodChecked(this, "fromDType(1)", [1], call2391);
                          var opresult2395 = callmethodChecked(var_oType, "|(1)", [1], call2392);
                          var_oType = opresult2395;
                          return GraceDone;
                        };
                        // call case 5: prelude request
                        var call2396 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], opresult2387, block2388);
                        var if2397 = GraceDone;
                        setLineNumber(381);    // compilenode member
                        // call case 6: other requests
                        var call2399 = callmethodChecked(var_lit, "value", []);
                        var opresult2402 = callmethodChecked(GraceFalse, "\u2260(1)", [1], call2399);
                        if (Grace_isTrue(opresult2402)) {
                          setLineNumber(382);    // compilenode object
                          var obj2403 = Grace_allocObject(null, "object");
                          obj2403.definitionModule = "staticTypes";
                          obj2403.definitionLine = 382;
                          obj2403.outer = this;
                          var reader_staticTypes_outer2404 = function() {
                            return this.outer;
                          };
                          obj2403.methods["outer"] = reader_staticTypes_outer2404;
                          var obj_init_2403 = function() {
                            var origSuperDepth = superDepth;
                            superDepth = obj2403;
                            setLineNumber(384);    // compilenode member
                            // call case 6: other requests
                            var call2408 = callmethodChecked(var_union, "last", []);
                            // call case 6: other requests
                            // call case 3: self.outer request
                            var call2410 = callmethodChecked(superDepth, "outer", [0]);
                            onSelf = true;
                            var call2411 = callmethodChecked(call2410, "fromDType(1)", [1], call2408);
                            // call case 6: other requests
                            // call case 5: prelude request
                            var call2413 = callmethodChecked(var_prelude, "TypeUnion", []);
                            var call2414 = callmethodChecked(call2413, "new(2)$object(1)", [2, 1], var_oType, call2411, this);
                            obj2403.superobj = call2414;
                            if (call2414.data) obj2403.data = call2414.data;
                            if (call2414.hasOwnProperty('_value'))
                                obj2403._value = call2414._value;
                            setLineNumber(385);    // compilenode member
                            // call case 6: other requests
                            var call2416 = callmethodChecked(var_lit, "value", []);
                            obj2403.data["asString"] = call2416;
                            var reader_staticTypes_asString2417 = function() {
                              return this.data["asString"];
                            };
                            reader_staticTypes_asString2417.def = true;
                            obj2403.methods["asString"] = reader_staticTypes_asString2417;
                            superDepth = origSuperDepth;
                          };
                          obj_init_2403.apply(obj2403, []);
                          if2397 = obj2403;
                        } else {
                          setLineNumber(388);    // compilenode member
                          // call case 6: other requests
                          var call2420 = callmethodChecked(var_union, "last", []);
                          // call case 4: self request
                          onSelf = true;
                          var call2421 = callmethodChecked(this, "fromDType(1)", [1], call2420);
                          var opresult2424 = callmethodChecked(var_oType, "|(1)", [1], call2421);
                          if2397 = opresult2424;
                        }
                        throw new ReturnException(if2397, returnTarget);
                      }
                      setLineNumber(392);    // compilenode array
                      var array2425 = new PrimitiveGraceList([]);
                      var var_meths = array2425;
                      setLineNumber(394);    // compilenode member
                      // call case 6: other requests
                      var call2428 = callmethodChecked(var_lit, "methods", []);
                      var block2429 = new GraceBlock(this, 394, 1);
                      setLineNumber(1);    // compilenode identifier
                      block2429.real = function(var_mType) {
                        setLineNumber(395);    // compilenode identifier
                        // call case 6: other requests
                        var call2432 = callmethodChecked(var_aMethodType, "fromNode(1)", [1], var_mType);
                        // call case 6: other requests
                        var call2433 = callmethodChecked(var_meths, "push(1)", [1], call2432);
                        return call2433;
                      };
                      // call case 5: prelude request
                      var call2434 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call2428, block2429);
                      var if2435 = GraceDone;
                      setLineNumber(398);    // compilenode block
                      var block2436 = new GraceBlock(this, 398, 0);
                      block2436.real = function() {
                        var string2437 = new GraceString("<");
                        // call case 6: other requests
                        // call case 6: other requests
                        var call2441 = callmethodChecked(var_lit, "value", []);
                        var call2442 = callmethodChecked(call2441, "at(1)", [1], new GraceNum(1));
                        var opresult2444 = callmethodChecked(call2442, "\u2260(1)", [1], string2437);
                        return opresult2444;
                      };
                      // call case 6: other requests
                      var call2448 = callmethodChecked(var_lit, "value", []);
                      var opresult2450 = callmethodChecked(call2448, "\u2260(1)", [1], GraceFalse);
                      var opresult2452 = callmethodChecked(opresult2450, "&&(1)", [1], block2436);
                      if (Grace_isTrue(opresult2452)) {
                        setLineNumber(399);    // compilenode member
                        // call case 6: other requests
                        var call2455 = callmethodChecked(var_lit, "value", []);
                        // call case 6: other requests
                        var call2456 = callmethodChecked(var_objectType, "fromMethods(1)withName(1)", [1, 1], var_meths, call2455);
                        if2435 = call2456;
                      } else {
                        setLineNumber(401);    // compilenode identifier
                        // call case 6: other requests
                        var call2458 = callmethodChecked(var_objectType, "fromMethods(1)", [1], var_meths);
                        if2435 = call2458;
                      }
                      return if2435;
                    };
                    cases2289.push(block2293);
                    setLineNumber(403);    // compilenode block
                    var block2459 = new GraceBlock(this, 403, 1);
                    setLineNumber(0);    // compilenode string
                    var string2462 = new GraceString("ident");
                    // call case 6: other requests
                    // call case 5: prelude request
                    var call2464 = callmethodChecked(var_prelude, "VariablePattern", []);
                    var call2465 = callmethodChecked(call2464, "new(1)", [1], string2462);
                    setLineNumber(403);    // compilenode member
                    // call case 5: prelude request
                    var call2467 = callmethodChecked(var_prelude, "Identifier", []);
                    // call case 6: other requests
                    setLineNumber(0);    // compilenode member
                    // call case 5: prelude request
                    var call2469 = callmethodChecked(var_prelude, "AndPattern", []);
                    var call2470 = callmethodChecked(call2469, "new(2)", [2], call2465, call2467);
                    block2459.pattern = call2470;
                    setLineNumber(403);    // compilenode member
                    // call case 5: prelude request
                    var call2472 = callmethodChecked(var_prelude, "Identifier", []);
                    block2459.real = function(var_ident) {
                      setLineNumber(404);    // compilenode identifier
                      // call case 6: other requests
                      var call2474 = callmethodChecked(var_objectType, "fromIdentifier(1)", [1], var_ident);
                      return call2474;
                    };
                    cases2289.push(block2459);
                    setLineNumber(405);    // compilenode block
                    var block2475 = new GraceBlock(this, 405, 1);
                    setLineNumber(0);    // compilenode string
                    var string2478 = new GraceString("generic");
                    // call case 6: other requests
                    // call case 5: prelude request
                    var call2480 = callmethodChecked(var_prelude, "VariablePattern", []);
                    var call2481 = callmethodChecked(call2480, "new(1)", [1], string2478);
                    setLineNumber(405);    // compilenode member
                    // call case 5: prelude request
                    var call2483 = callmethodChecked(var_prelude, "Generic", []);
                    // call case 6: other requests
                    setLineNumber(0);    // compilenode member
                    // call case 5: prelude request
                    var call2485 = callmethodChecked(var_prelude, "AndPattern", []);
                    var call2486 = callmethodChecked(call2485, "new(2)", [2], call2481, call2483);
                    block2475.pattern = call2486;
                    setLineNumber(405);    // compilenode member
                    // call case 5: prelude request
                    var call2488 = callmethodChecked(var_prelude, "Generic", []);
                    block2475.real = function(var_generic) {
                      setLineNumber(407);    // compilenode member
                      // call case 6: other requests
                      var call2491 = callmethodChecked(var_generic, "value", []);
                      // call case 6: other requests
                      var call2492 = callmethodChecked(var_objectType, "fromIdentifier(1)", [1], call2491);
                      return call2492;
                    };
                    cases2289.push(block2475);
                    setLineNumber(408);    // compilenode block
                    var block2493 = new GraceBlock(this, 408, 1);
                    setLineNumber(1);    // compilenode identifier
                    block2493.real = function(var___95____95__6) {
                      setLineNumber(409);    // compilenode string
                      var string2495 = new GraceString("");
                      // call case 6: other requests
                      var call2498 = callmethodChecked(var_dtype, "kind", []);
                      var string2500 = new GraceString("No case for node of kind ");
                      var opresult2502 = callmethodChecked(string2500, "++(1)", [1], call2498);
                      var opresult2504 = callmethodChecked(opresult2502, "++(1)", [1], string2495);
                      // call case 6: other requests
                      // call case 5: prelude request
                      var call2506 = callmethodChecked(var_prelude, "ProgrammingError", []);
                      var call2507 = callmethodChecked(call2506, "raise(1)with(1)", [1, 1], opresult2504, var_dtype);
                      return call2507;
                    };
                    cases2289.push(block2493);
                    setLineNumber(347);    // compilematchcase
                    var matchres2289 = matchCase(var_dtype,cases2289,false);
                    setModuleName("staticTypes");
                    return matchres2289;
                  };
                  func2288.paramCounts = [1];
                  obj1374.methods["fromDType(1)"] = func2288;
                  func2288.definitionLine = 346;
                  func2288.definitionModule = "staticTypes";
                  var func2508 = function(argcv) {    // method fromIdentifier(_)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_ident = arguments[curarg];
                    curarg++;
                    setModuleName("staticTypes");
                    setLineNumber(414);    // compilenode member
                    // call case 6: other requests
                    var call2511 = callmethodChecked(var_ident, "value", []);
                    var block2512 = new GraceBlock(this, 414, 0);
                    block2512.real = function() {
                      // call case 4: self request
                      onSelf = true;
                      var call2514 = callmethodChecked(this, "unknown", []);
                      return call2514;
                    };
                    // call case 6: other requests
                    // call case 6: other requests
                    // call case 5: prelude request
                    var call2517 = callmethodChecked(var_prelude, "scope", []);
                    var call2518 = callmethodChecked(call2517, "types", []);
                    var call2519 = callmethodChecked(call2518, "find(1)butIfMissing(1)", [1, 1], call2511, block2512);
                    return call2519;
                  };
                  func2508.paramCounts = [1];
                  obj1374.methods["fromIdentifier(1)"] = func2508;
                  func2508.definitionLine = 413;
                  func2508.definitionModule = "staticTypes";
                  var func2520 = function(argcv) {    // method fromBlock(_)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_block = arguments[curarg];
                    curarg++;
                    setModuleName("staticTypes");
                    setLineNumber(418);    // compilenode identifier
                    // call case 5: prelude request
                    var call2522 = callmethodChecked(var_prelude, "typeOf(1)", [1], var_block);
                    var var_bType = call2522;
                    var if2523 = GraceDone;
                    setLineNumber(420);    // compilenode member
                    // call case 6: other requests
                    var call2525 = callmethodChecked(var_bType, "isUnknown", []);
                    if (Grace_isTrue(call2525)) {
                      // call case 4: self request
                      onSelf = true;
                      var call2527 = callmethodChecked(this, "unknown", []);
                      return call2527;
                    }
                    setLineNumber(422);    // compilenode string
                    var string2529 = new GraceString("apply");
                    // call case 6: other requests
                    var call2530 = callmethodChecked(var_bType, "getMethod(1)", [1], string2529);
                    var var_apply = call2530;
                    setLineNumber(424);    // compilenode identifier
                    var cases2531 = [];
                    var block2532 = new GraceBlock(this, 424, 0);
                    block2532.pattern = var_noSuchMethod;
                    block2532.real = function() {
                      setLineNumber(426);    // compilenode string
                      var string2534 = new GraceString("' does not satisfy the type 'Block'");
                      var string2537 = new GraceString("type '");
                      var opresult2539 = callmethodChecked(string2537, "++(1)", [1], var_bType);
                      var opresult2541 = callmethodChecked(opresult2539, "++(1)", [1], string2534);
                      setLineNumber(425);    // compilenode string
                      var string2543 = new GraceString("` of ");
                      // call case 6: other requests
                      var call2546 = callmethodChecked(var_block, "toGrace(1)", [1], new GraceNum(0));
                      var string2548 = new GraceString("the expression `");
                      var opresult2550 = callmethodChecked(string2548, "++(1)", [1], call2546);
                      var opresult2552 = callmethodChecked(opresult2550, "++(1)", [1], string2543);
                      var opresult2554 = callmethodChecked(opresult2552, "++(1)", [1], opresult2541);
                      setLineNumber(426);    // compilenode identifier
                      // call case 6: other requests
                      setLineNumber(425);    // compilenode identifier
                      var call2555 = callmethodChecked(var_TypeError, "raise(1)with(1)", [1, 1], opresult2554, var_block);
                      return call2555;
                    };
                    cases2531.push(block2532);
                    setLineNumber(427);    // compilenode block
                    var block2556 = new GraceBlock(this, 427, 1);
                    setLineNumber(0);    // compilenode string
                    var string2559 = new GraceString("meth");
                    // call case 6: other requests
                    // call case 5: prelude request
                    var call2561 = callmethodChecked(var_prelude, "VariablePattern", []);
                    var call2562 = callmethodChecked(call2561, "new(1)", [1], string2559);
                    setLineNumber(427);    // compilenode identifier
                    // call case 6: other requests
                    setLineNumber(0);    // compilenode member
                    // call case 5: prelude request
                    var call2564 = callmethodChecked(var_prelude, "AndPattern", []);
                    var call2565 = callmethodChecked(call2564, "new(2)", [2], call2562, var_MethodType);
                    block2556.pattern = call2565;
                    setLineNumber(427);    // compilenode identifier
                    block2556.real = function(var_meth) {
                      setLineNumber(428);    // compilenode member
                      // call case 6: other requests
                      var call2567 = callmethodChecked(var_meth, "returnType", []);
                      throw new ReturnException(call2567, returnTarget);
                      return undefined;
                    };
                    cases2531.push(block2556);
                    setLineNumber(429);    // compilenode block
                    var block2568 = new GraceBlock(this, 429, 1);
                    setLineNumber(1);    // compilenode identifier
                    block2568.real = function(var___95____95__7) {
                      return GraceDone;
                    };
                    cases2531.push(block2568);
                    setLineNumber(424);    // compilematchcase
                    var matchres2531 = matchCase(var_apply,cases2531,false);
                    setModuleName("staticTypes");
                    return matchres2531;
                  };
                  func2520.paramCounts = [1];
                  obj1374.methods["fromBlock(1)"] = func2520;
                  func2520.definitionLine = 417;
                  func2520.definitionModule = "staticTypes";
                  var func2569 = function(argcv) {    // method fromBlockBody(_)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_body = arguments[curarg];
                    curarg++;
                    setModuleName("staticTypes");
                    var if2570 = GraceDone;
                    setLineNumber(433);    // compilenode member
                    // call case 6: other requests
                    var call2573 = callmethodChecked(var_body, "size", []);
                    var opresult2575 = callmethodChecked(call2573, "==(1)", [1], new GraceNum(0));
                    if (Grace_isTrue(opresult2575)) {
                      setLineNumber(434);    // compilenode member
                      // call case 6: other requests
                      var call2577 = callmethodChecked(var_objectType, "done", []);
                      if2570 = call2577;
                    } else {
                      setLineNumber(436);    // compilenode member
                      // call case 6: other requests
                      var call2580 = callmethodChecked(var_body, "last", []);
                      // call case 5: prelude request
                      var call2581 = callmethodChecked(var_prelude, "typeOf(1)", [1], call2580);
                      if2570 = call2581;
                    }
                    return if2570;
                  };
                  func2569.paramCounts = [1];
                  obj1374.methods["fromBlockBody(1)"] = func2569;
                  func2569.definitionLine = 432;
                  func2569.definitionModule = "staticTypes";
                  var func2582 = function(argcv) {    // method blockTaking(_)returning(_)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_params = arguments[curarg];
                    curarg++;
                    var var_rType = arguments[curarg];
                    curarg++;
                    setModuleName("staticTypes");
                    setLineNumber(453);    // compilenode string
                    var string2585 = new GraceString("apply");
                    // call case 6: other requests
                    // call case 3: self.outer request
                    var call2587 = callmethodChecked(superDepth, "outer", [0]);
                    onSelf = true;
                    var call2588 = callmethodChecked(call2587, "mixPartNamed(1)parameters(1)", [1, 1], string2585, var_params);
                    var array2583 = new PrimitiveGraceList([call2588]);
                    var var_signature = array2583;
                    setLineNumber(454);    // compilenode identifier
                    // call case 6: other requests
                    var call2591 = callmethodChecked(var_aMethodType, "signature(1)returnType(1)", [1, 1], var_signature, var_rType);
                    var array2589 = new PrimitiveGraceList([call2591]);
                    var var_meths = array2589;
                    setLineNumber(456);    // compilenode string
                    var string2593 = new GraceString("Block");
                    // call case 4: self request
                    onSelf = true;
                    var call2594 = callmethodChecked(this, "fromMethods(1)withName(1)", [1, 1], var_meths, string2593);
                    return call2594;
                  };
                  func2582.paramTypes = [];
                  func2582.paramTypes.push([]);
                  func2582.paramTypes.push([]);
                  func2582.paramCounts = [1, 1];
                  obj1374.methods["blockTaking(1)returning(1)"] = func2582;
                  func2582.definitionLine = 451;
                  func2582.definitionModule = "staticTypes";
                  var func2595 = function(argcv) {    // method blockReturning(_)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_rType = arguments[curarg];
                    curarg++;
                    setModuleName("staticTypes");
                    setLineNumber(460);    // compilenode array
                    var array2597 = new PrimitiveGraceList([]);
                    // call case 4: self request
                    onSelf = true;
                    var call2598 = callmethodChecked(this, "blockTaking(1)returning(1)", [1, 1], array2597, var_rType);
                    return call2598;
                  };
                  func2595.paramTypes = [];
                  func2595.paramTypes.push([]);
                  func2595.paramCounts = [1];
                  obj1374.methods["blockReturning(1)"] = func2595;
                  func2595.definitionLine = 459;
                  func2595.definitionModule = "staticTypes";
                  var func2599 = function(argcv) {    // method addTo(_)name(_)returns(_)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_oType = arguments[curarg];
                    curarg++;
                    var var_name__39__ = arguments[curarg];
                    curarg++;
                    var var_rType = arguments[curarg];
                    curarg++;
                    setModuleName("staticTypes");
                    setLineNumber(465);    // compilenode array
                    var array2602 = new PrimitiveGraceList([]);
                    // call case 6: other requests
                    // call case 3: self.outer request
                    var call2604 = callmethodChecked(superDepth, "outer", [0]);
                    onSelf = true;
                    var call2605 = callmethodChecked(call2604, "mixPartNamed(1)parameters(1)", [1, 1], var_name__39__, array2602);
                    var array2600 = new PrimitiveGraceList([call2605]);
                    var var_signature = array2600;
                    setLineNumber(466);    // compilenode identifier
                    // call case 6: other requests
                    var call2608 = callmethodChecked(var_aMethodType, "signature(1)returnType(1)", [1, 1], var_signature, var_rType);
                    // call case 6: other requests
                    // call case 6: other requests
                    var call2610 = callmethodChecked(var_oType, "methods", []);
                    var call2611 = callmethodChecked(call2610, "push(1)", [1], call2608);
                    return call2611;
                  };
                  func2599.paramTypes = [];
                  func2599.paramTypes.push([]);
                  func2599.paramTypes.push([type_String, "name'"]);
                  func2599.paramTypes.push([]);
                  func2599.confidential = true;
                  func2599.paramCounts = [1, 1, 1];
                  obj1374.methods["addTo(1)name(1)returns(1)"] = func2599;
                  func2599.definitionLine = 463;
                  func2599.definitionModule = "staticTypes";
                  var func2612 = function(argcv) {    // method addTo(_)name(_)params(_)returns(_)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_oType = arguments[curarg];
                    curarg++;
                    var var_name__39__ = arguments[curarg];
                    curarg++;
                    var var_ptypes = arguments[curarg];
                    curarg++;
                    var var_rType = arguments[curarg];
                    curarg++;
                    setModuleName("staticTypes");
                    setLineNumber(472);    // compilenode array
                    var array2613 = new PrimitiveGraceList([]);
                    var var_parameters = array2613;
                    setLineNumber(473);    // compilenode block
                    var block2615 = new GraceBlock(this, 473, 1);
                    setLineNumber(1);    // compilenode identifier
                    block2615.real = function(var_ptype) {
                      setLineNumber(474);    // compilenode identifier
                      // call case 6: other requests
                      var call2618 = callmethodChecked(var_aParam, "ofType(1)", [1], var_ptype);
                      // call case 6: other requests
                      var call2619 = callmethodChecked(var_parameters, "push(1)", [1], call2618);
                      return call2619;
                    };
                    // call case 5: prelude request
                    var call2620 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_ptypes, block2615);
                    setLineNumber(477);    // compilenode identifier
                    // call case 6: other requests
                    // call case 3: self.outer request
                    var call2624 = callmethodChecked(superDepth, "outer", [0]);
                    onSelf = true;
                    var call2625 = callmethodChecked(call2624, "mixPartNamed(1)parameters(1)", [1, 1], var_name__39__, var_parameters);
                    var array2621 = new PrimitiveGraceList([call2625]);
                    var var_signature = array2621;
                    setLineNumber(479);    // compilenode identifier
                    // call case 6: other requests
                    var call2628 = callmethodChecked(var_aMethodType, "signature(1)returnType(1)", [1, 1], var_signature, var_rType);
                    // call case 6: other requests
                    // call case 6: other requests
                    var call2630 = callmethodChecked(var_oType, "methods", []);
                    var call2631 = callmethodChecked(call2630, "push(1)", [1], call2628);
                    return call2631;
                  };
                  func2612.paramTypes = [];
                  func2612.paramTypes.push([]);
                  func2612.paramTypes.push([type_String, "name'"]);
                  func2612.paramTypes.push([]);
                  func2612.paramTypes.push([]);
                  func2612.confidential = true;
                  func2612.paramCounts = [1, 1, 1, 1];
                  obj1374.methods["addTo(1)name(1)params(1)returns(1)"] = func2612;
                  func2612.definitionLine = 469;
                  func2612.definitionModule = "staticTypes";
                  var func2632 = function(argcv) {    // method extend(_)with(_)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_this = arguments[curarg];
                    curarg++;
                    var var_that = arguments[curarg];
                    curarg++;
                    setModuleName("staticTypes");
                    setLineNumber(484);    // compilenode member
                    // call case 6: other requests
                    var call2635 = callmethodChecked(var_that, "methods", []);
                    var block2636 = new GraceBlock(this, 484, 1);
                    setLineNumber(1);    // compilenode identifier
                    block2636.real = function(var_mType) {
                      setLineNumber(485);    // compilenode identifier
                      // call case 6: other requests
                      // call case 6: other requests
                      var call2639 = callmethodChecked(var_this, "methods", []);
                      var call2640 = callmethodChecked(call2639, "push(1)", [1], var_mType);
                      return call2640;
                    };
                    // call case 5: prelude request
                    var call2641 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call2635, block2636);
                    return call2641;
                  };
                  func2632.paramTypes = [];
                  func2632.paramTypes.push([]);
                  func2632.paramTypes.push([]);
                  func2632.confidential = true;
                  func2632.paramCounts = [1, 1];
                  obj1374.methods["extend(1)with(1)"] = func2632;
                  func2632.definitionLine = 482;
                  func2632.definitionModule = "staticTypes";
                  var obj2642 = Grace_allocObject(GraceObject, "unknown");
                  obj2642.definitionModule = "staticTypes";
                  obj2642.definitionLine = 440;
                  obj2642.outer = obj1374;
                  var reader_staticTypes_outer2643 = function() {
                    return this.outer;
                  };
                  obj2642.methods["outer"] = reader_staticTypes_outer2643;
                  var obj_init_2642 = function() {
                    var origSuperDepth = superDepth;
                    superDepth = obj2642;
                    var func2644 = function(argcv) {    // method getMethod(_)
                      var returnTarget = invocationCount;
                      invocationCount++;
                      var curarg = 1;
                      var var___95____95__8 = arguments[curarg];
                      curarg++;
                      setModuleName("staticTypes");
                      // getMethod(_) is a simple accessor - elide try ... catch
                      setLineNumber(442);    // compilenode identifier
                      return var_noSuchMethod;
                    };
                    func2644.paramTypes = [];
                    func2644.paramTypes.push([type_String, "__8"]);
                    func2644.paramCounts = [1];
                    obj2642.methods["getMethod(1)"] = func2644;
                    func2644.definitionLine = 442;
                    func2644.definitionModule = "staticTypes";
                    var func2645 = function(argcv) {    // method isSubtypeOf(_)
                      var returnTarget = invocationCount;
                      invocationCount++;
                      var curarg = 1;
                      var var___95____95__9 = arguments[curarg];
                      curarg++;
                      setModuleName("staticTypes");
                      // isSubtypeOf(_) is a simple accessor - elide try ... catch
                      setLineNumber(444);    // compilenode identifier
                      return GraceTrue;
                    };
                    func2645.paramTypes = [];
                    func2645.paramTypes.push([]);
                    func2645.paramCounts = [1];
                    obj2642.methods["isSubtypeOf(1)"] = func2645;
                    func2645.definitionLine = 444;
                    func2645.definitionModule = "staticTypes";
                    var func2646 = function(argcv) {    // method |(_)
                      var returnTarget = invocationCount;
                      invocationCount++;
                      var curarg = 1;
                      var var___95____95__10 = arguments[curarg];
                      curarg++;
                      setModuleName("staticTypes");
                      setLineNumber(445);    // compilenode member
                      // call case 6: other requests
                      // call case 3: self.outer request
                      var call2649 = callmethodChecked(superDepth, "outer", [0]);
                      onSelf = true;
                      var call2650 = callmethodChecked(call2649, "unknown", []);
                      return call2650;
                    };
                    func2646.paramTypes = [];
                    func2646.paramTypes.push([]);
                    func2646.paramCounts = [1];
                    obj2642.methods["|(1)"] = func2646;
                    func2646.definitionLine = 445;
                    func2646.definitionModule = "staticTypes";
                    var func2651 = function(argcv) {    // method &(_)
                      var returnTarget = invocationCount;
                      invocationCount++;
                      var curarg = 1;
                      var var___95____95__11 = arguments[curarg];
                      curarg++;
                      setModuleName("staticTypes");
                      setLineNumber(446);    // compilenode member
                      // call case 6: other requests
                      // call case 3: self.outer request
                      var call2654 = callmethodChecked(superDepth, "outer", [0]);
                      onSelf = true;
                      var call2655 = callmethodChecked(call2654, "unknown", []);
                      return call2655;
                    };
                    func2651.paramTypes = [];
                    func2651.paramTypes.push([]);
                    func2651.paramCounts = [1];
                    obj2642.methods["&(1)"] = func2651;
                    func2651.definitionLine = 446;
                    func2651.definitionModule = "staticTypes";
                    var func2656 = function(argcv) {    // method ==(_)
                      var returnTarget = invocationCount;
                      invocationCount++;
                      var curarg = 1;
                      var var_other = arguments[curarg];
                      curarg++;
                      setModuleName("staticTypes");
                      setLineNumber(448);    // compilenode identifier
                      // call case 4: self request
                      onSelf = true;
                      var call2658 = callmethodChecked(this, "isMe(1)", [1], var_other);
                      return call2658;
                    };
                    func2656.paramCounts = [1];
                    obj2642.methods["==(1)"] = func2656;
                    func2656.definitionLine = 448;
                    func2656.definitionModule = "staticTypes";
                    setLineNumber(441);    // compilenode array
                    var array2659 = new PrimitiveGraceList([]);
                    obj2642.data["methods"] = array2659;
                    var reader_staticTypes_methods2660 = function() {
                      return this.data["methods"];
                    };
                    reader_staticTypes_methods2660.def = true;
                    obj2642.methods["methods"] = reader_staticTypes_methods2660;
                    setLineNumber(443);    // compilenode identifier
                    obj2642.data["isUnknown"] = GraceTrue;
                    var reader_staticTypes_isUnknown2661 = function() {
                      return this.data["isUnknown"];
                    };
                    reader_staticTypes_isUnknown2661.def = true;
                    obj2642.methods["isUnknown"] = reader_staticTypes_isUnknown2661;
                    setLineNumber(447);    // compilenode string
                    var string2662 = new GraceString("Unknown");
                    obj2642.data["asString"] = string2662;
                    var reader_staticTypes_asString2663 = function() {
                      return this.data["asString"];
                    };
                    reader_staticTypes_asString2663.def = true;
                    obj2642.methods["asString"] = reader_staticTypes_asString2663;
                    superDepth = origSuperDepth;
                  };
                  obj_init_2642.apply(obj2642, []);
                  obj1374.data["unknown"] = obj2642;
                  var reader_staticTypes_unknown2664 = function() {
                    return this.data["unknown"];
                  };
                  reader_staticTypes_unknown2664.def = true;
                  obj1374.methods["unknown"] = reader_staticTypes_unknown2664;
                  setLineNumber(489);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call2666 = callmethodChecked(this, "unknown", []);
                  obj1374.data["base"] = call2666;
                  var reader_staticTypes_base2667 = function() {
                    return this.data["base"];
                  };
                  obj1374.methods["base"] = reader_staticTypes_base2667;
                  obj1374.data["base"] = call2666;
                  var writer_staticTypes_base2667 = function(argcv, o) {
                    this.data["base"] = o;
                    return GraceDone;
                  };
                  obj1374.methods["base:=(1)"] = writer_staticTypes_base2667;
                  writer_staticTypes_base2667.confidential = true;
                  obj1374.mutable = true;
                  setLineNumber(490);    // compilenode array
                  var array2669 = new PrimitiveGraceList([]);
                  var string2670 = new GraceString("Done");
                  // call case 4: self request
                  onSelf = true;
                  var call2671 = callmethodChecked(this, "fromMethods(1)withName(1)", [1, 1], array2669, string2670);
                  obj1374.data["done"] = call2671;
                  var reader_staticTypes_done2672 = function() {
                    return this.data["done"];
                  };
                  reader_staticTypes_done2672.def = true;
                  obj1374.methods["done"] = reader_staticTypes_done2672;
                  setLineNumber(491);    // compilenode array
                  var array2675 = new PrimitiveGraceList([]);
                  var string2676 = new GraceString("Object");
                  // call case 4: self request
                  onSelf = true;
                  var call2677 = callmethodChecked(this, "fromMethods(1)withName(1)", [1, 1], array2675, string2676);
                  // call case 4: self request
                  onSelf = true;
                  var call2678 = callmethodChecked(this, "base:=(1)", [1], call2677);
                  setLineNumber(493);    // compilenode array
                  var array2680 = new PrimitiveGraceList([]);
                  var string2681 = new GraceString("Pattern");
                  // call case 4: self request
                  onSelf = true;
                  var call2682 = callmethodChecked(this, "fromMethods(1)withName(1)", [1, 1], array2680, string2681);
                  obj1374.data["pattern"] = call2682;
                  var reader_staticTypes_pattern2683 = function() {
                    return this.data["pattern"];
                  };
                  reader_staticTypes_pattern2683.def = true;
                  obj1374.methods["pattern"] = reader_staticTypes_pattern2683;
                  setLineNumber(494);    // compilenode array
                  var array2685 = new PrimitiveGraceList([]);
                  var string2686 = new GraceString("Iterator");
                  // call case 4: self request
                  onSelf = true;
                  var call2687 = callmethodChecked(this, "fromMethods(1)withName(1)", [1, 1], array2685, string2686);
                  obj1374.data["iterator"] = call2687;
                  var reader_staticTypes_iterator2688 = function() {
                    return this.data["iterator"];
                  };
                  reader_staticTypes_iterator2688.def = true;
                  obj1374.methods["iterator"] = reader_staticTypes_iterator2688;
                  setLineNumber(495);    // compilenode array
                  var array2690 = new PrimitiveGraceList([]);
                  var string2691 = new GraceString("Binding");
                  // call case 4: self request
                  onSelf = true;
                  var call2692 = callmethodChecked(this, "fromMethods(1)withName(1)", [1, 1], array2690, string2691);
                  obj1374.data["binding"] = call2692;
                  var reader_staticTypes_binding2693 = function() {
                    return this.data["binding"];
                  };
                  reader_staticTypes_binding2693.def = true;
                  obj1374.methods["binding"] = reader_staticTypes_binding2693;
                  setLineNumber(496);    // compilenode array
                  var array2695 = new PrimitiveGraceList([]);
                  var string2696 = new GraceString("Boolean");
                  // call case 4: self request
                  onSelf = true;
                  var call2697 = callmethodChecked(this, "fromMethods(1)withName(1)", [1, 1], array2695, string2696);
                  obj1374.data["boolean"] = call2697;
                  var reader_staticTypes_boolean2698 = function() {
                    return this.data["boolean"];
                  };
                  reader_staticTypes_boolean2698.def = true;
                  obj1374.methods["boolean"] = reader_staticTypes_boolean2698;
                  setLineNumber(497);    // compilenode array
                  var array2700 = new PrimitiveGraceList([]);
                  var string2701 = new GraceString("Number");
                  // call case 4: self request
                  onSelf = true;
                  var call2702 = callmethodChecked(this, "fromMethods(1)withName(1)", [1, 1], array2700, string2701);
                  obj1374.data["number"] = call2702;
                  var reader_staticTypes_number2703 = function() {
                    return this.data["number"];
                  };
                  reader_staticTypes_number2703.def = true;
                  obj1374.methods["number"] = reader_staticTypes_number2703;
                  setLineNumber(498);    // compilenode array
                  var array2705 = new PrimitiveGraceList([]);
                  var string2706 = new GraceString("String");
                  // call case 4: self request
                  onSelf = true;
                  var call2707 = callmethodChecked(this, "fromMethods(1)withName(1)", [1, 1], array2705, string2706);
                  obj1374.data["string"] = call2707;
                  var reader_staticTypes_string2708 = function() {
                    return this.data["string"];
                  };
                  reader_staticTypes_string2708.def = true;
                  obj1374.methods["string"] = reader_staticTypes_string2708;
                  setLineNumber(499);    // compilenode array
                  var array2710 = new PrimitiveGraceList([]);
                  var string2711 = new GraceString("List");
                  // call case 4: self request
                  onSelf = true;
                  var call2712 = callmethodChecked(this, "fromMethods(1)withName(1)", [1, 1], array2710, string2711);
                  obj1374.data["list"] = call2712;
                  var reader_staticTypes_list2713 = function() {
                    return this.data["list"];
                  };
                  reader_staticTypes_list2713.def = true;
                  obj1374.methods["list"] = reader_staticTypes_list2713;
                  setLineNumber(500);    // compilenode array
                  var array2715 = new PrimitiveGraceList([]);
                  var string2716 = new GraceString("Point");
                  // call case 4: self request
                  onSelf = true;
                  var call2717 = callmethodChecked(this, "fromMethods(1)withName(1)", [1, 1], array2715, string2716);
                  obj1374.data["point"] = call2717;
                  var reader_staticTypes_point2718 = function() {
                    return this.data["point"];
                  };
                  reader_staticTypes_point2718.def = true;
                  obj1374.methods["point"] = reader_staticTypes_point2718;
                  setLineNumber(502);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call2721 = callmethodChecked(this, "binding", []);
                  var string2722 = new GraceString("key");
                  // call case 4: self request
                  onSelf = true;
                  var call2724 = callmethodChecked(this, "base", []);
                  // call case 4: self request
                  onSelf = true;
                  var call2725 = callmethodChecked(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call2721, string2722, call2724);
                  setLineNumber(503);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call2728 = callmethodChecked(this, "binding", []);
                  var string2729 = new GraceString("value");
                  // call case 4: self request
                  onSelf = true;
                  var call2731 = callmethodChecked(this, "base", []);
                  // call case 4: self request
                  onSelf = true;
                  var call2732 = callmethodChecked(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call2728, string2729, call2731);
                  setLineNumber(505);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call2735 = callmethodChecked(this, "base", []);
                  var string2736 = new GraceString("\u2260");
                  // call case 4: self request
                  onSelf = true;
                  var call2739 = callmethodChecked(this, "base", []);
                  var array2737 = new PrimitiveGraceList([call2739]);
                  // call case 4: self request
                  onSelf = true;
                  var call2741 = callmethodChecked(this, "boolean", []);
                  // call case 4: self request
                  onSelf = true;
                  var call2742 = callmethodChecked(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call2735, string2736, array2737, call2741);
                  setLineNumber(506);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call2745 = callmethodChecked(this, "base", []);
                  var string2746 = new GraceString("asDebugString");
                  // call case 4: self request
                  onSelf = true;
                  var call2748 = callmethodChecked(this, "string", []);
                  // call case 4: self request
                  onSelf = true;
                  var call2749 = callmethodChecked(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call2745, string2746, call2748);
                  setLineNumber(507);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call2752 = callmethodChecked(this, "base", []);
                  var string2753 = new GraceString("asString");
                  // call case 4: self request
                  onSelf = true;
                  var call2755 = callmethodChecked(this, "string", []);
                  // call case 4: self request
                  onSelf = true;
                  var call2756 = callmethodChecked(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call2752, string2753, call2755);
                  setLineNumber(508);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call2759 = callmethodChecked(this, "base", []);
                  var string2760 = new GraceString("::");
                  // call case 4: self request
                  onSelf = true;
                  var call2762 = callmethodChecked(this, "binding", []);
                  // call case 4: self request
                  onSelf = true;
                  var call2763 = callmethodChecked(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call2759, string2760, call2762);
                  setLineNumber(509);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call2766 = callmethodChecked(this, "base", []);
                  var string2767 = new GraceString("emptyList");
                  // call case 4: self request
                  onSelf = true;
                  var call2769 = callmethodChecked(this, "list", []);
                  // call case 4: self request
                  onSelf = true;
                  var call2770 = callmethodChecked(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call2766, string2767, call2769);
                  setLineNumber(511);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call2773 = callmethodChecked(this, "pattern", []);
                  // call case 4: self request
                  onSelf = true;
                  var call2775 = callmethodChecked(this, "base", []);
                  // call case 4: self request
                  onSelf = true;
                  var call2776 = callmethodChecked(this, "extend(1)with(1)", [1, 1], call2773, call2775);
                  setLineNumber(512);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call2779 = callmethodChecked(this, "pattern", []);
                  var string2780 = new GraceString("match");
                  // call case 4: self request
                  onSelf = true;
                  var call2783 = callmethodChecked(this, "base", []);
                  var array2781 = new PrimitiveGraceList([call2783]);
                  // call case 4: self request
                  onSelf = true;
                  var call2785 = callmethodChecked(this, "unknown", []);
                  // call case 4: self request
                  onSelf = true;
                  var call2786 = callmethodChecked(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call2779, string2780, array2781, call2785);
                  setLineNumber(513);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call2789 = callmethodChecked(this, "pattern", []);
                  var string2790 = new GraceString("|");
                  // call case 4: self request
                  onSelf = true;
                  var call2793 = callmethodChecked(this, "pattern", []);
                  var array2791 = new PrimitiveGraceList([call2793]);
                  // call case 4: self request
                  onSelf = true;
                  var call2795 = callmethodChecked(this, "pattern", []);
                  // call case 4: self request
                  onSelf = true;
                  var call2796 = callmethodChecked(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call2789, string2790, array2791, call2795);
                  setLineNumber(514);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call2799 = callmethodChecked(this, "pattern", []);
                  var string2800 = new GraceString("&");
                  // call case 4: self request
                  onSelf = true;
                  var call2803 = callmethodChecked(this, "pattern", []);
                  var array2801 = new PrimitiveGraceList([call2803]);
                  // call case 4: self request
                  onSelf = true;
                  var call2805 = callmethodChecked(this, "pattern", []);
                  // call case 4: self request
                  onSelf = true;
                  var call2806 = callmethodChecked(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call2799, string2800, array2801, call2805);
                  setLineNumber(516);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call2809 = callmethodChecked(this, "iterator", []);
                  // call case 4: self request
                  onSelf = true;
                  var call2811 = callmethodChecked(this, "base", []);
                  // call case 4: self request
                  onSelf = true;
                  var call2812 = callmethodChecked(this, "extend(1)with(1)", [1, 1], call2809, call2811);
                  setLineNumber(517);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call2815 = callmethodChecked(this, "iterator", []);
                  var string2816 = new GraceString("hasNext");
                  // call case 4: self request
                  onSelf = true;
                  var call2818 = callmethodChecked(this, "boolean", []);
                  // call case 4: self request
                  onSelf = true;
                  var call2819 = callmethodChecked(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call2815, string2816, call2818);
                  setLineNumber(518);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call2822 = callmethodChecked(this, "iterator", []);
                  var string2823 = new GraceString("next");
                  // call case 4: self request
                  onSelf = true;
                  var call2825 = callmethodChecked(this, "unknown", []);
                  // call case 4: self request
                  onSelf = true;
                  var call2826 = callmethodChecked(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call2822, string2823, call2825);
                  setLineNumber(520);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call2832 = callmethodChecked(this, "unknown", []);
                  // call case 4: self request
                  onSelf = true;
                  var call2833 = callmethodChecked(this, "blockReturning(1)", [1], call2832);
                  // call case 6: other requests
                  var call2834 = callmethodChecked(var_aParam, "ofType(1)", [1], call2833);
                  var array2828 = new PrimitiveGraceList([call2834]);
                  setLineNumber(521);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call2836 = callmethodChecked(this, "base", []);
                  // call case 4: self request
                  onSelf = true;
                  var call2837 = callmethodChecked(this, "blockTaking(1)returning(1)", [1, 1], array2828, call2836);
                  obj1374.data["shortCircuit"] = call2837;
                  var reader_staticTypes_shortCircuit2838 = function() {
                    return this.data["shortCircuit"];
                  };
                  reader_staticTypes_shortCircuit2838.def = true;
                  reader_staticTypes_shortCircuit2838.confidential = true;
                  obj1374.methods["shortCircuit"] = reader_staticTypes_shortCircuit2838;
                  setLineNumber(522);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call2841 = callmethodChecked(this, "boolean", []);
                  // call case 4: self request
                  onSelf = true;
                  var call2843 = callmethodChecked(this, "base", []);
                  // call case 4: self request
                  onSelf = true;
                  var call2844 = callmethodChecked(this, "extend(1)with(1)", [1, 1], call2841, call2843);
                  setLineNumber(523);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call2847 = callmethodChecked(this, "boolean", []);
                  var string2848 = new GraceString("&&");
                  // call case 4: self request
                  onSelf = true;
                  var call2851 = callmethodChecked(this, "boolean", []);
                  var array2849 = new PrimitiveGraceList([call2851]);
                  // call case 4: self request
                  onSelf = true;
                  var call2853 = callmethodChecked(this, "boolean", []);
                  // call case 4: self request
                  onSelf = true;
                  var call2854 = callmethodChecked(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call2847, string2848, array2849, call2853);
                  setLineNumber(524);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call2857 = callmethodChecked(this, "boolean", []);
                  var string2858 = new GraceString("||");
                  // call case 4: self request
                  onSelf = true;
                  var call2861 = callmethodChecked(this, "boolean", []);
                  var array2859 = new PrimitiveGraceList([call2861]);
                  // call case 4: self request
                  onSelf = true;
                  var call2863 = callmethodChecked(this, "boolean", []);
                  // call case 4: self request
                  onSelf = true;
                  var call2864 = callmethodChecked(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call2857, string2858, array2859, call2863);
                  setLineNumber(525);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call2867 = callmethodChecked(this, "boolean", []);
                  var string2868 = new GraceString("prefix!");
                  // call case 4: self request
                  onSelf = true;
                  var call2870 = callmethodChecked(this, "boolean", []);
                  // call case 4: self request
                  onSelf = true;
                  var call2871 = callmethodChecked(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call2867, string2868, call2870);
                  setLineNumber(526);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call2874 = callmethodChecked(this, "boolean", []);
                  var string2875 = new GraceString("not");
                  // call case 4: self request
                  onSelf = true;
                  var call2877 = callmethodChecked(this, "boolean", []);
                  // call case 4: self request
                  onSelf = true;
                  var call2878 = callmethodChecked(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call2874, string2875, call2877);
                  setLineNumber(528);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call2881 = callmethodChecked(this, "number", []);
                  // call case 4: self request
                  onSelf = true;
                  var call2883 = callmethodChecked(this, "base", []);
                  // call case 4: self request
                  onSelf = true;
                  var call2884 = callmethodChecked(this, "extend(1)with(1)", [1, 1], call2881, call2883);
                  setLineNumber(529);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call2887 = callmethodChecked(this, "number", []);
                  var string2888 = new GraceString("+");
                  // call case 4: self request
                  onSelf = true;
                  var call2891 = callmethodChecked(this, "number", []);
                  var array2889 = new PrimitiveGraceList([call2891]);
                  // call case 4: self request
                  onSelf = true;
                  var call2893 = callmethodChecked(this, "number", []);
                  // call case 4: self request
                  onSelf = true;
                  var call2894 = callmethodChecked(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call2887, string2888, array2889, call2893);
                  setLineNumber(530);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call2897 = callmethodChecked(this, "number", []);
                  var string2898 = new GraceString("*");
                  // call case 4: self request
                  onSelf = true;
                  var call2901 = callmethodChecked(this, "number", []);
                  var array2899 = new PrimitiveGraceList([call2901]);
                  // call case 4: self request
                  onSelf = true;
                  var call2903 = callmethodChecked(this, "number", []);
                  // call case 4: self request
                  onSelf = true;
                  var call2904 = callmethodChecked(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call2897, string2898, array2899, call2903);
                  setLineNumber(531);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call2907 = callmethodChecked(this, "number", []);
                  var string2908 = new GraceString("-");
                  // call case 4: self request
                  onSelf = true;
                  var call2911 = callmethodChecked(this, "number", []);
                  var array2909 = new PrimitiveGraceList([call2911]);
                  // call case 4: self request
                  onSelf = true;
                  var call2913 = callmethodChecked(this, "number", []);
                  // call case 4: self request
                  onSelf = true;
                  var call2914 = callmethodChecked(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call2907, string2908, array2909, call2913);
                  setLineNumber(532);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call2917 = callmethodChecked(this, "number", []);
                  var string2918 = new GraceString("/");
                  // call case 4: self request
                  onSelf = true;
                  var call2921 = callmethodChecked(this, "number", []);
                  var array2919 = new PrimitiveGraceList([call2921]);
                  // call case 4: self request
                  onSelf = true;
                  var call2923 = callmethodChecked(this, "number", []);
                  // call case 4: self request
                  onSelf = true;
                  var call2924 = callmethodChecked(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call2917, string2918, array2919, call2923);
                  setLineNumber(533);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call2927 = callmethodChecked(this, "number", []);
                  var string2928 = new GraceString("^");
                  // call case 4: self request
                  onSelf = true;
                  var call2931 = callmethodChecked(this, "number", []);
                  var array2929 = new PrimitiveGraceList([call2931]);
                  // call case 4: self request
                  onSelf = true;
                  var call2933 = callmethodChecked(this, "number", []);
                  // call case 4: self request
                  onSelf = true;
                  var call2934 = callmethodChecked(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call2927, string2928, array2929, call2933);
                  setLineNumber(534);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call2937 = callmethodChecked(this, "number", []);
                  var string2938 = new GraceString("%");
                  // call case 4: self request
                  onSelf = true;
                  var call2941 = callmethodChecked(this, "number", []);
                  var array2939 = new PrimitiveGraceList([call2941]);
                  // call case 4: self request
                  onSelf = true;
                  var call2943 = callmethodChecked(this, "number", []);
                  // call case 4: self request
                  onSelf = true;
                  var call2944 = callmethodChecked(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call2937, string2938, array2939, call2943);
                  setLineNumber(535);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call2947 = callmethodChecked(this, "number", []);
                  var string2948 = new GraceString("\u00f7");
                  // call case 4: self request
                  onSelf = true;
                  var call2951 = callmethodChecked(this, "number", []);
                  var array2949 = new PrimitiveGraceList([call2951]);
                  // call case 4: self request
                  onSelf = true;
                  var call2953 = callmethodChecked(this, "number", []);
                  // call case 4: self request
                  onSelf = true;
                  var call2954 = callmethodChecked(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call2947, string2948, array2949, call2953);
                  setLineNumber(536);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call2957 = callmethodChecked(this, "number", []);
                  var string2958 = new GraceString("@");
                  // call case 4: self request
                  onSelf = true;
                  var call2961 = callmethodChecked(this, "number", []);
                  var array2959 = new PrimitiveGraceList([call2961]);
                  // call case 4: self request
                  onSelf = true;
                  var call2963 = callmethodChecked(this, "point", []);
                  // call case 4: self request
                  onSelf = true;
                  var call2964 = callmethodChecked(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call2957, string2958, array2959, call2963);
                  setLineNumber(537);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call2967 = callmethodChecked(this, "number", []);
                  var string2968 = new GraceString("hash");
                  // call case 4: self request
                  onSelf = true;
                  var call2970 = callmethodChecked(this, "string", []);
                  // call case 4: self request
                  onSelf = true;
                  var call2971 = callmethodChecked(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call2967, string2968, call2970);
                  setLineNumber(538);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call2974 = callmethodChecked(this, "number", []);
                  var string2975 = new GraceString("++");
                  // call case 4: self request
                  onSelf = true;
                  var call2978 = callmethodChecked(this, "base", []);
                  var array2976 = new PrimitiveGraceList([call2978]);
                  // call case 4: self request
                  onSelf = true;
                  var call2980 = callmethodChecked(this, "string", []);
                  // call case 4: self request
                  onSelf = true;
                  var call2981 = callmethodChecked(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call2974, string2975, array2976, call2980);
                  setLineNumber(539);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call2984 = callmethodChecked(this, "number", []);
                  var string2985 = new GraceString("<");
                  // call case 4: self request
                  onSelf = true;
                  var call2988 = callmethodChecked(this, "number", []);
                  var array2986 = new PrimitiveGraceList([call2988]);
                  // call case 4: self request
                  onSelf = true;
                  var call2990 = callmethodChecked(this, "boolean", []);
                  // call case 4: self request
                  onSelf = true;
                  var call2991 = callmethodChecked(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call2984, string2985, array2986, call2990);
                  setLineNumber(540);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call2994 = callmethodChecked(this, "number", []);
                  var string2995 = new GraceString(">");
                  // call case 4: self request
                  onSelf = true;
                  var call2998 = callmethodChecked(this, "number", []);
                  var array2996 = new PrimitiveGraceList([call2998]);
                  // call case 4: self request
                  onSelf = true;
                  var call3000 = callmethodChecked(this, "boolean", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3001 = callmethodChecked(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call2994, string2995, array2996, call3000);
                  setLineNumber(541);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call3004 = callmethodChecked(this, "number", []);
                  var string3005 = new GraceString("\u2264");
                  // call case 4: self request
                  onSelf = true;
                  var call3008 = callmethodChecked(this, "number", []);
                  var array3006 = new PrimitiveGraceList([call3008]);
                  // call case 4: self request
                  onSelf = true;
                  var call3010 = callmethodChecked(this, "boolean", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3011 = callmethodChecked(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call3004, string3005, array3006, call3010);
                  setLineNumber(542);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call3014 = callmethodChecked(this, "number", []);
                  var string3015 = new GraceString("\u2265");
                  // call case 4: self request
                  onSelf = true;
                  var call3018 = callmethodChecked(this, "number", []);
                  var array3016 = new PrimitiveGraceList([call3018]);
                  // call case 4: self request
                  onSelf = true;
                  var call3020 = callmethodChecked(this, "boolean", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3021 = callmethodChecked(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call3014, string3015, array3016, call3020);
                  setLineNumber(543);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call3024 = callmethodChecked(this, "number", []);
                  var string3025 = new GraceString("..");
                  // call case 4: self request
                  onSelf = true;
                  var call3028 = callmethodChecked(this, "number", []);
                  var array3026 = new PrimitiveGraceList([call3028]);
                  // call case 4: self request
                  onSelf = true;
                  var call3030 = callmethodChecked(this, "list", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3031 = callmethodChecked(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call3024, string3025, array3026, call3030);
                  setLineNumber(544);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call3034 = callmethodChecked(this, "number", []);
                  var string3035 = new GraceString("asInteger32");
                  // call case 4: self request
                  onSelf = true;
                  var call3037 = callmethodChecked(this, "number", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3038 = callmethodChecked(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call3034, string3035, call3037);
                  setLineNumber(545);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call3041 = callmethodChecked(this, "number", []);
                  var string3042 = new GraceString("prefix-");
                  // call case 4: self request
                  onSelf = true;
                  var call3044 = callmethodChecked(this, "number", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3045 = callmethodChecked(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call3041, string3042, call3044);
                  setLineNumber(546);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call3048 = callmethodChecked(this, "number", []);
                  var string3049 = new GraceString("inBase");
                  // call case 4: self request
                  onSelf = true;
                  var call3052 = callmethodChecked(this, "number", []);
                  var array3050 = new PrimitiveGraceList([call3052]);
                  // call case 4: self request
                  onSelf = true;
                  var call3054 = callmethodChecked(this, "number", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3055 = callmethodChecked(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call3048, string3049, array3050, call3054);
                  setLineNumber(547);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call3058 = callmethodChecked(this, "number", []);
                  var string3059 = new GraceString("truncated");
                  // call case 4: self request
                  onSelf = true;
                  var call3061 = callmethodChecked(this, "number", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3062 = callmethodChecked(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call3058, string3059, call3061);
                  setLineNumber(548);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call3065 = callmethodChecked(this, "number", []);
                  var string3066 = new GraceString("rounded");
                  // call case 4: self request
                  onSelf = true;
                  var call3068 = callmethodChecked(this, "number", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3069 = callmethodChecked(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call3065, string3066, call3068);
                  setLineNumber(549);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call3072 = callmethodChecked(this, "number", []);
                  var string3073 = new GraceString("prefix\u27e6");
                  // call case 4: self request
                  onSelf = true;
                  var call3075 = callmethodChecked(this, "pattern", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3076 = callmethodChecked(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call3072, string3073, call3075);
                  setLineNumber(550);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call3079 = callmethodChecked(this, "number", []);
                  var string3080 = new GraceString("prefix\u27e7");
                  // call case 4: self request
                  onSelf = true;
                  var call3082 = callmethodChecked(this, "pattern", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3083 = callmethodChecked(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call3079, string3080, call3082);
                  setLineNumber(552);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call3086 = callmethodChecked(this, "point", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3088 = callmethodChecked(this, "base", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3089 = callmethodChecked(this, "extend(1)with(1)", [1, 1], call3086, call3088);
                  setLineNumber(553);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call3092 = callmethodChecked(this, "point", []);
                  var string3093 = new GraceString("x");
                  // call case 4: self request
                  onSelf = true;
                  var call3095 = callmethodChecked(this, "number", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3096 = callmethodChecked(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call3092, string3093, call3095);
                  setLineNumber(554);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call3099 = callmethodChecked(this, "point", []);
                  var string3100 = new GraceString("y");
                  // call case 4: self request
                  onSelf = true;
                  var call3102 = callmethodChecked(this, "number", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3103 = callmethodChecked(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call3099, string3100, call3102);
                  setLineNumber(556);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call3106 = callmethodChecked(this, "string", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3108 = callmethodChecked(this, "base", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3109 = callmethodChecked(this, "extend(1)with(1)", [1, 1], call3106, call3108);
                  setLineNumber(557);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call3112 = callmethodChecked(this, "string", []);
                  var string3113 = new GraceString("++");
                  // call case 4: self request
                  onSelf = true;
                  var call3116 = callmethodChecked(this, "base", []);
                  var array3114 = new PrimitiveGraceList([call3116]);
                  // call case 4: self request
                  onSelf = true;
                  var call3118 = callmethodChecked(this, "string", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3119 = callmethodChecked(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call3112, string3113, array3114, call3118);
                  setLineNumber(558);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call3122 = callmethodChecked(this, "string", []);
                  var string3123 = new GraceString("at");
                  // call case 4: self request
                  onSelf = true;
                  var call3126 = callmethodChecked(this, "number", []);
                  var array3124 = new PrimitiveGraceList([call3126]);
                  // call case 4: self request
                  onSelf = true;
                  var call3128 = callmethodChecked(this, "string", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3129 = callmethodChecked(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call3122, string3123, array3124, call3128);
                  setLineNumber(559);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call3132 = callmethodChecked(this, "string", []);
                  var string3133 = new GraceString("iterator");
                  // call case 4: self request
                  onSelf = true;
                  var call3135 = callmethodChecked(this, "base", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3136 = callmethodChecked(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call3132, string3133, call3135);
                  setLineNumber(560);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call3139 = callmethodChecked(this, "string", []);
                  var string3140 = new GraceString("quoted");
                  // call case 4: self request
                  onSelf = true;
                  var call3142 = callmethodChecked(this, "string", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3143 = callmethodChecked(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call3139, string3140, call3142);
                  setLineNumber(561);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call3146 = callmethodChecked(this, "string", []);
                  var string3147 = new GraceString("size");
                  // call case 4: self request
                  onSelf = true;
                  var call3149 = callmethodChecked(this, "number", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3150 = callmethodChecked(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call3146, string3147, call3149);
                  setLineNumber(562);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call3153 = callmethodChecked(this, "string", []);
                  var string3154 = new GraceString("iterator");
                  // call case 4: self request
                  onSelf = true;
                  var call3156 = callmethodChecked(this, "iterator", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3157 = callmethodChecked(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call3153, string3154, call3156);
                  setLineNumber(563);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call3160 = callmethodChecked(this, "string", []);
                  var string3161 = new GraceString("ord");
                  // call case 4: self request
                  onSelf = true;
                  var call3163 = callmethodChecked(this, "number", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3164 = callmethodChecked(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call3160, string3161, call3163);
                  setLineNumber(564);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call3167 = callmethodChecked(this, "string", []);
                  var string3168 = new GraceString("substringFrom()to");
                  // call case 4: self request
                  onSelf = true;
                  var call3171 = callmethodChecked(this, "number", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3173 = callmethodChecked(this, "number", []);
                  var array3169 = new PrimitiveGraceList([call3171, call3173]);
                  // call case 4: self request
                  onSelf = true;
                  var call3175 = callmethodChecked(this, "string", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3176 = callmethodChecked(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call3167, string3168, array3169, call3175);
                  setLineNumber(565);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call3179 = callmethodChecked(this, "string", []);
                  var string3180 = new GraceString("replace()with");
                  // call case 4: self request
                  onSelf = true;
                  var call3183 = callmethodChecked(this, "string", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3185 = callmethodChecked(this, "string", []);
                  var array3181 = new PrimitiveGraceList([call3183, call3185]);
                  // call case 4: self request
                  onSelf = true;
                  var call3187 = callmethodChecked(this, "string", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3188 = callmethodChecked(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call3179, string3180, array3181, call3187);
                  setLineNumber(566);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call3191 = callmethodChecked(this, "string", []);
                  var string3192 = new GraceString("hash");
                  // call case 4: self request
                  onSelf = true;
                  var call3194 = callmethodChecked(this, "string", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3195 = callmethodChecked(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call3191, string3192, call3194);
                  setLineNumber(567);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call3198 = callmethodChecked(this, "string", []);
                  var string3199 = new GraceString("indices");
                  // call case 4: self request
                  onSelf = true;
                  var call3201 = callmethodChecked(this, "list", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3202 = callmethodChecked(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call3198, string3199, call3201);
                  setLineNumber(568);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call3205 = callmethodChecked(this, "string", []);
                  var string3206 = new GraceString("asNumber");
                  // call case 4: self request
                  onSelf = true;
                  var call3208 = callmethodChecked(this, "number", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3209 = callmethodChecked(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call3205, string3206, call3208);
                  setLineNumber(570);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call3214 = callmethodChecked(this, "unknown", []);
                  // call case 6: other requests
                  var call3215 = callmethodChecked(var_aParam, "ofType(1)", [1], call3214);
                  // call case 4: self request
                  onSelf = true;
                  var call3218 = callmethodChecked(this, "unknown", []);
                  // call case 6: other requests
                  var call3219 = callmethodChecked(var_aParam, "ofType(1)", [1], call3218);
                  var array3211 = new PrimitiveGraceList([call3215, call3219]);
                  setLineNumber(571);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call3221 = callmethodChecked(this, "unknown", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3222 = callmethodChecked(this, "blockTaking(1)returning(1)", [1, 1], array3211, call3221);
                  obj1374.data["fold"] = call3222;
                  var reader_staticTypes_fold3223 = function() {
                    return this.data["fold"];
                  };
                  reader_staticTypes_fold3223.def = true;
                  reader_staticTypes_fold3223.confidential = true;
                  obj1374.methods["fold"] = reader_staticTypes_fold3223;
                  setLineNumber(572);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call3226 = callmethodChecked(this, "list", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3228 = callmethodChecked(this, "base", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3229 = callmethodChecked(this, "extend(1)with(1)", [1, 1], call3226, call3228);
                  setLineNumber(573);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call3232 = callmethodChecked(this, "list", []);
                  var string3233 = new GraceString("at");
                  // call case 4: self request
                  onSelf = true;
                  var call3236 = callmethodChecked(this, "number", []);
                  var array3234 = new PrimitiveGraceList([call3236]);
                  // call case 4: self request
                  onSelf = true;
                  var call3238 = callmethodChecked(this, "unknown", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3239 = callmethodChecked(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call3232, string3233, array3234, call3238);
                  setLineNumber(574);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call3242 = callmethodChecked(this, "list", []);
                  var string3243 = new GraceString("at ()put");
                  // call case 4: self request
                  onSelf = true;
                  var call3246 = callmethodChecked(this, "number", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3248 = callmethodChecked(this, "unknown", []);
                  var array3244 = new PrimitiveGraceList([call3246, call3248]);
                  // call case 4: self request
                  onSelf = true;
                  var call3250 = callmethodChecked(this, "done", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3251 = callmethodChecked(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call3242, string3243, array3244, call3250);
                  setLineNumber(575);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call3254 = callmethodChecked(this, "list", []);
                  var string3255 = new GraceString("push");
                  // call case 4: self request
                  onSelf = true;
                  var call3258 = callmethodChecked(this, "unknown", []);
                  var array3256 = new PrimitiveGraceList([call3258]);
                  // call case 4: self request
                  onSelf = true;
                  var call3260 = callmethodChecked(this, "done", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3261 = callmethodChecked(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call3254, string3255, array3256, call3260);
                  setLineNumber(576);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call3264 = callmethodChecked(this, "list", []);
                  var string3265 = new GraceString("pop");
                  // call case 4: self request
                  onSelf = true;
                  var call3267 = callmethodChecked(this, "unknown", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3268 = callmethodChecked(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call3264, string3265, call3267);
                  setLineNumber(577);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call3271 = callmethodChecked(this, "list", []);
                  var string3272 = new GraceString("size");
                  // call case 4: self request
                  onSelf = true;
                  var call3274 = callmethodChecked(this, "number", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3275 = callmethodChecked(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call3271, string3272, call3274);
                  setLineNumber(578);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call3278 = callmethodChecked(this, "list", []);
                  var string3279 = new GraceString("iterator");
                  // call case 4: self request
                  onSelf = true;
                  var call3281 = callmethodChecked(this, "iterator", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3282 = callmethodChecked(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call3278, string3279, call3281);
                  setLineNumber(579);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call3285 = callmethodChecked(this, "list", []);
                  var string3286 = new GraceString("contains");
                  // call case 4: self request
                  onSelf = true;
                  var call3289 = callmethodChecked(this, "unknown", []);
                  var array3287 = new PrimitiveGraceList([call3289]);
                  // call case 4: self request
                  onSelf = true;
                  var call3291 = callmethodChecked(this, "boolean", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3292 = callmethodChecked(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call3285, string3286, array3287, call3291);
                  setLineNumber(580);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call3295 = callmethodChecked(this, "list", []);
                  var string3296 = new GraceString("indices");
                  // call case 4: self request
                  onSelf = true;
                  var call3298 = callmethodChecked(this, "list", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3299 = callmethodChecked(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call3295, string3296, call3298);
                  setLineNumber(581);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call3302 = callmethodChecked(this, "list", []);
                  var string3303 = new GraceString("first");
                  // call case 4: self request
                  onSelf = true;
                  var call3305 = callmethodChecked(this, "unknown", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3306 = callmethodChecked(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call3302, string3303, call3305);
                  setLineNumber(582);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call3309 = callmethodChecked(this, "list", []);
                  var string3310 = new GraceString("last");
                  // call case 4: self request
                  onSelf = true;
                  var call3312 = callmethodChecked(this, "unknown", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3313 = callmethodChecked(this, "addTo(1)name(1)returns(1)", [1, 1, 1], call3309, string3310, call3312);
                  setLineNumber(583);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call3316 = callmethodChecked(this, "list", []);
                  var string3317 = new GraceString("add");
                  // call case 4: self request
                  onSelf = true;
                  var call3320 = callmethodChecked(this, "unknown", []);
                  var array3318 = new PrimitiveGraceList([call3320]);
                  // call case 4: self request
                  onSelf = true;
                  var call3322 = callmethodChecked(this, "list", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3323 = callmethodChecked(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call3316, string3317, array3318, call3322);
                  setLineNumber(584);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call3326 = callmethodChecked(this, "list", []);
                  var string3327 = new GraceString("addFirst");
                  // call case 4: self request
                  onSelf = true;
                  var call3330 = callmethodChecked(this, "unknown", []);
                  var array3328 = new PrimitiveGraceList([call3330]);
                  // call case 4: self request
                  onSelf = true;
                  var call3332 = callmethodChecked(this, "list", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3333 = callmethodChecked(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call3326, string3327, array3328, call3332);
                  setLineNumber(585);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call3336 = callmethodChecked(this, "list", []);
                  var string3337 = new GraceString("addAll");
                  // call case 4: self request
                  onSelf = true;
                  var call3340 = callmethodChecked(this, "unknown", []);
                  var array3338 = new PrimitiveGraceList([call3340]);
                  // call case 4: self request
                  onSelf = true;
                  var call3342 = callmethodChecked(this, "list", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3343 = callmethodChecked(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call3336, string3337, array3338, call3342);
                  setLineNumber(586);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call3346 = callmethodChecked(this, "list", []);
                  var string3347 = new GraceString("++");
                  // call case 4: self request
                  onSelf = true;
                  var call3350 = callmethodChecked(this, "list", []);
                  var array3348 = new PrimitiveGraceList([call3350]);
                  // call case 4: self request
                  onSelf = true;
                  var call3352 = callmethodChecked(this, "list", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3353 = callmethodChecked(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call3346, string3347, array3348, call3352);
                  setLineNumber(587);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call3356 = callmethodChecked(this, "list", []);
                  var string3357 = new GraceString("fold()startingWith");
                  // call case 4: self request
                  onSelf = true;
                  var call3360 = callmethodChecked(this, "fold", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3362 = callmethodChecked(this, "unknown", []);
                  var array3358 = new PrimitiveGraceList([call3360, call3362]);
                  // call case 4: self request
                  onSelf = true;
                  var call3364 = callmethodChecked(this, "unknown", []);
                  // call case 4: self request
                  onSelf = true;
                  var call3365 = callmethodChecked(this, "addTo(1)name(1)params(1)returns(1)", [1, 1, 1, 1], call3356, string3357, array3358, call3364);
                  setLineNumber(589);    // compilenode string
                  var string3367 = new GraceString("Unknown");
                  // call case 4: self request
                  onSelf = true;
                  var call3369 = callmethodChecked(this, "unknown", []);
                  // call case 6: other requests
                  // call case 6: other requests
                  // call case 5: prelude request
                  var call3372 = callmethodChecked(var_prelude, "scope", []);
                  var call3373 = callmethodChecked(call3372, "types", []);
                  var call3374 = callmethodChecked(call3373, "at(1)put(1)", [1, 1], string3367, call3369);
                  setLineNumber(590);    // compilenode string
                  var string3376 = new GraceString("Done");
                  // call case 4: self request
                  onSelf = true;
                  var call3378 = callmethodChecked(this, "done", []);
                  // call case 6: other requests
                  // call case 6: other requests
                  // call case 5: prelude request
                  var call3381 = callmethodChecked(var_prelude, "scope", []);
                  var call3382 = callmethodChecked(call3381, "types", []);
                  var call3383 = callmethodChecked(call3382, "at(1)put(1)", [1, 1], string3376, call3378);
                  setLineNumber(591);    // compilenode string
                  var string3385 = new GraceString("Object");
                  // call case 4: self request
                  onSelf = true;
                  var call3387 = callmethodChecked(this, "base", []);
                  // call case 6: other requests
                  // call case 6: other requests
                  // call case 5: prelude request
                  var call3390 = callmethodChecked(var_prelude, "scope", []);
                  var call3391 = callmethodChecked(call3390, "types", []);
                  var call3392 = callmethodChecked(call3391, "at(1)put(1)", [1, 1], string3385, call3387);
                  setLineNumber(592);    // compilenode string
                  var string3394 = new GraceString("Pattern");
                  // call case 4: self request
                  onSelf = true;
                  var call3396 = callmethodChecked(this, "pattern", []);
                  // call case 6: other requests
                  // call case 6: other requests
                  // call case 5: prelude request
                  var call3399 = callmethodChecked(var_prelude, "scope", []);
                  var call3400 = callmethodChecked(call3399, "types", []);
                  var call3401 = callmethodChecked(call3400, "at(1)put(1)", [1, 1], string3394, call3396);
                  setLineNumber(593);    // compilenode string
                  var string3403 = new GraceString("Boolean");
                  // call case 4: self request
                  onSelf = true;
                  var call3405 = callmethodChecked(this, "boolean", []);
                  // call case 6: other requests
                  // call case 6: other requests
                  // call case 5: prelude request
                  var call3408 = callmethodChecked(var_prelude, "scope", []);
                  var call3409 = callmethodChecked(call3408, "types", []);
                  var call3410 = callmethodChecked(call3409, "at(1)put(1)", [1, 1], string3403, call3405);
                  setLineNumber(594);    // compilenode string
                  var string3412 = new GraceString("Number");
                  // call case 4: self request
                  onSelf = true;
                  var call3414 = callmethodChecked(this, "number", []);
                  // call case 6: other requests
                  // call case 6: other requests
                  // call case 5: prelude request
                  var call3417 = callmethodChecked(var_prelude, "scope", []);
                  var call3418 = callmethodChecked(call3417, "types", []);
                  var call3419 = callmethodChecked(call3418, "at(1)put(1)", [1, 1], string3412, call3414);
                  setLineNumber(595);    // compilenode string
                  var string3421 = new GraceString("String");
                  // call case 4: self request
                  onSelf = true;
                  var call3423 = callmethodChecked(this, "string", []);
                  // call case 6: other requests
                  // call case 6: other requests
                  // call case 5: prelude request
                  var call3426 = callmethodChecked(var_prelude, "scope", []);
                  var call3427 = callmethodChecked(call3426, "types", []);
                  var call3428 = callmethodChecked(call3427, "at(1)put(1)", [1, 1], string3421, call3423);
                  setLineNumber(596);    // compilenode string
                  var string3430 = new GraceString("List");
                  // call case 4: self request
                  onSelf = true;
                  var call3432 = callmethodChecked(this, "list", []);
                  // call case 6: other requests
                  // call case 6: other requests
                  // call case 5: prelude request
                  var call3435 = callmethodChecked(var_prelude, "scope", []);
                  var call3436 = callmethodChecked(call3435, "types", []);
                  var call3437 = callmethodChecked(call3436, "at(1)put(1)", [1, 1], string3430, call3432);
                  setLineNumber(597);    // compilenode string
                  var string3439 = new GraceString("Point");
                  // call case 4: self request
                  onSelf = true;
                  var call3441 = callmethodChecked(this, "point", []);
                  // call case 6: other requests
                  // call case 6: other requests
                  // call case 5: prelude request
                  var call3444 = callmethodChecked(var_prelude, "scope", []);
                  var call3445 = callmethodChecked(call3444, "types", []);
                  var call3446 = callmethodChecked(call3445, "at(1)put(1)", [1, 1], string3439, call3441);
                  setLineNumber(599);    // compilenode string
                  var string3448 = new GraceString("Unknown");
                  // call case 4: self request
                  onSelf = true;
                  var call3450 = callmethodChecked(this, "pattern", []);
                  // call case 6: other requests
                  // call case 3: self.outer request
                  var call3452 = callmethodChecked(superDepth, "outer", [0]);
                  onSelf = true;
                  var call3453 = callmethodChecked(call3452, "addVar(1)ofType(1)", [1, 1], string3448, call3450);
                  setLineNumber(600);    // compilenode string
                  var string3455 = new GraceString("Dynamic");
                  // call case 4: self request
                  onSelf = true;
                  var call3457 = callmethodChecked(this, "pattern", []);
                  // call case 6: other requests
                  // call case 3: self.outer request
                  var call3459 = callmethodChecked(superDepth, "outer", [0]);
                  onSelf = true;
                  var call3460 = callmethodChecked(call3459, "addVar(1)ofType(1)", [1, 1], string3455, call3457);
                  setLineNumber(601);    // compilenode string
                  var string3462 = new GraceString("Done");
                  // call case 4: self request
                  onSelf = true;
                  var call3464 = callmethodChecked(this, "pattern", []);
                  // call case 6: other requests
                  // call case 3: self.outer request
                  var call3466 = callmethodChecked(superDepth, "outer", [0]);
                  onSelf = true;
                  var call3467 = callmethodChecked(call3466, "addVar(1)ofType(1)", [1, 1], string3462, call3464);
                  setLineNumber(602);    // compilenode string
                  var string3469 = new GraceString("Object");
                  // call case 4: self request
                  onSelf = true;
                  var call3471 = callmethodChecked(this, "pattern", []);
                  // call case 6: other requests
                  // call case 3: self.outer request
                  var call3473 = callmethodChecked(superDepth, "outer", [0]);
                  onSelf = true;
                  var call3474 = callmethodChecked(call3473, "addVar(1)ofType(1)", [1, 1], string3469, call3471);
                  setLineNumber(603);    // compilenode string
                  var string3476 = new GraceString("Pattern");
                  // call case 4: self request
                  onSelf = true;
                  var call3478 = callmethodChecked(this, "pattern", []);
                  // call case 6: other requests
                  // call case 3: self.outer request
                  var call3480 = callmethodChecked(superDepth, "outer", [0]);
                  onSelf = true;
                  var call3481 = callmethodChecked(call3480, "addVar(1)ofType(1)", [1, 1], string3476, call3478);
                  setLineNumber(604);    // compilenode string
                  var string3483 = new GraceString("Boolean");
                  // call case 4: self request
                  onSelf = true;
                  var call3485 = callmethodChecked(this, "pattern", []);
                  // call case 6: other requests
                  // call case 3: self.outer request
                  var call3487 = callmethodChecked(superDepth, "outer", [0]);
                  onSelf = true;
                  var call3488 = callmethodChecked(call3487, "addVar(1)ofType(1)", [1, 1], string3483, call3485);
                  setLineNumber(605);    // compilenode string
                  var string3490 = new GraceString("Number");
                  // call case 4: self request
                  onSelf = true;
                  var call3492 = callmethodChecked(this, "pattern", []);
                  // call case 6: other requests
                  // call case 3: self.outer request
                  var call3494 = callmethodChecked(superDepth, "outer", [0]);
                  onSelf = true;
                  var call3495 = callmethodChecked(call3494, "addVar(1)ofType(1)", [1, 1], string3490, call3492);
                  setLineNumber(606);    // compilenode string
                  var string3497 = new GraceString("String");
                  // call case 4: self request
                  onSelf = true;
                  var call3499 = callmethodChecked(this, "pattern", []);
                  // call case 6: other requests
                  // call case 3: self.outer request
                  var call3501 = callmethodChecked(superDepth, "outer", [0]);
                  onSelf = true;
                  var call3502 = callmethodChecked(call3501, "addVar(1)ofType(1)", [1, 1], string3497, call3499);
                  setLineNumber(607);    // compilenode string
                  var string3504 = new GraceString("List");
                  // call case 4: self request
                  onSelf = true;
                  var call3506 = callmethodChecked(this, "pattern", []);
                  // call case 6: other requests
                  // call case 3: self.outer request
                  var call3508 = callmethodChecked(superDepth, "outer", [0]);
                  onSelf = true;
                  var call3509 = callmethodChecked(call3508, "addVar(1)ofType(1)", [1, 1], string3504, call3506);
                  setLineNumber(608);    // compilenode string
                  var string3511 = new GraceString("Point");
                  // call case 4: self request
                  onSelf = true;
                  var call3513 = callmethodChecked(this, "pattern", []);
                  // call case 6: other requests
                  // call case 3: self.outer request
                  var call3515 = callmethodChecked(superDepth, "outer", [0]);
                  onSelf = true;
                  var call3516 = callmethodChecked(call3515, "addVar(1)ofType(1)", [1, 1], string3511, call3513);
                  setLineNumber(610);    // compilenode string
                  var string3518 = new GraceString("done");
                  // call case 4: self request
                  onSelf = true;
                  var call3520 = callmethodChecked(this, "done", []);
                  // call case 6: other requests
                  // call case 3: self.outer request
                  var call3522 = callmethodChecked(superDepth, "outer", [0]);
                  onSelf = true;
                  var call3523 = callmethodChecked(call3522, "addVar(1)ofType(1)", [1, 1], string3518, call3520);
                  setLineNumber(611);    // compilenode string
                  var string3525 = new GraceString("true");
                  // call case 4: self request
                  onSelf = true;
                  var call3527 = callmethodChecked(this, "boolean", []);
                  // call case 6: other requests
                  // call case 3: self.outer request
                  var call3529 = callmethodChecked(superDepth, "outer", [0]);
                  onSelf = true;
                  var call3530 = callmethodChecked(call3529, "addVar(1)ofType(1)", [1, 1], string3525, call3527);
                  setLineNumber(612);    // compilenode string
                  var string3532 = new GraceString("false");
                  // call case 4: self request
                  onSelf = true;
                  var call3534 = callmethodChecked(this, "boolean", []);
                  // call case 6: other requests
                  // call case 3: self.outer request
                  var call3536 = callmethodChecked(superDepth, "outer", [0]);
                  onSelf = true;
                  var call3537 = callmethodChecked(call3536, "addVar(1)ofType(1)", [1, 1], string3532, call3534);
                  setLineNumber(613);    // compilenode string
                  var string3539 = new GraceString("emptyList");
                  // call case 4: self request
                  onSelf = true;
                  var call3541 = callmethodChecked(this, "list", []);
                  // call case 6: other requests
                  // call case 3: self.outer request
                  var call3543 = callmethodChecked(superDepth, "outer", [0]);
                  onSelf = true;
                  var call3544 = callmethodChecked(call3543, "addVar(1)ofType(1)", [1, 1], string3539, call3541);
                  superDepth = origSuperDepth;
                };
                obj_init_1374.apply(obj1374, []);
                var var_objectType = obj1374;
                setLineNumber(1);    // compilenode method
                var func3545 = function(argcv) {    // method objectType
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  setModuleName("staticTypes");
                  // objectType is a simple accessor - elide try ... catch
                  setLineNumber(191);    // compilenode identifier
                  return var_objectType;
                };
                func3545.paramCounts = [0];
                this.methods["objectType"] = func3545;
                func3545.definitionLine = 1;
                func3545.definitionModule = "staticTypes";
                this.methods["objectType"].debug = "def";
                setLineNumber(624);    // compilenode string
                var string3547 = new GraceString("ObjectError");
                // call case 6: other requests
                var call3548 = callmethodChecked(var_TypeError, "refine(1)", [1], string3547);
                var var_ObjectError = call3548;
                setLineNumber(1);    // compilenode method
                var func3549 = function(argcv) {    // method ObjectError
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  setModuleName("staticTypes");
                  // ObjectError is a simple accessor - elide try ... catch
                  setLineNumber(624);    // compilenode identifier
                  return var_ObjectError;
                };
                func3549.paramCounts = [0];
                this.methods["ObjectError"] = func3549;
                func3549.definitionLine = 1;
                func3549.definitionModule = "staticTypes";
                this.methods["ObjectError"].debug = "def";
                setLineNumber(626);    // compilenode block
                var block3551 = new GraceBlock(this, 626, 1);
                setLineNumber(0);    // compilenode string
                var string3554 = new GraceString("obj");
                // call case 6: other requests
                // call case 5: prelude request
                var call3556 = callmethodChecked(var_prelude, "VariablePattern", []);
                var call3557 = callmethodChecked(call3556, "new(1)", [1], string3554);
                setLineNumber(626);    // compilenode member
                // call case 5: prelude request
                var call3559 = callmethodChecked(var_prelude, "ObjectLiteral", []);
                // call case 6: other requests
                setLineNumber(0);    // compilenode member
                // call case 5: prelude request
                var call3561 = callmethodChecked(var_prelude, "AndPattern", []);
                var call3562 = callmethodChecked(call3561, "new(2)", [2], call3557, call3559);
                block3551.pattern = call3562;
                setLineNumber(626);    // compilenode member
                // call case 5: prelude request
                var call3564 = callmethodChecked(var_prelude, "ObjectLiteral", []);
                block3551.real = function(var_obj) {
                  setLineNumber(627);    // compilenode block
                  var block3566 = new GraceBlock(this, 627, 0);
                  block3566.real = function() {
                    // call case 6: other requests
                    var call3569 = callmethodChecked(var_obj, "value", []);
                    // call case 4: self request
                    onSelf = true;
                    var call3570 = callmethodChecked(this, "processBody(1)", [1], call3569);
                    return call3570;
                  };
                  // call case 6: other requests
                  // call case 5: prelude request
                  var call3572 = callmethodChecked(var_prelude, "scope", []);
                  var call3573 = callmethodChecked(call3572, "enter(1)", [1], block3566);
                  return call3573;
                };
                // call case 5: prelude request
                var call3574 = callmethodChecked(var_prelude, "rule(1)", [1], block3551);
                setLineNumber(633);    // compilenode block
                var block3576 = new GraceBlock(this, 633, 1);
                setLineNumber(0);    // compilenode string
                var string3579 = new GraceString("__12");
                // call case 6: other requests
                // call case 5: prelude request
                var call3581 = callmethodChecked(var_prelude, "VariablePattern", []);
                var call3582 = callmethodChecked(call3581, "new(1)", [1], string3579);
                setLineNumber(633);    // compilenode member
                // call case 5: prelude request
                var call3584 = callmethodChecked(var_prelude, "OctetsLiteral", []);
                // call case 5: prelude request
                var call3587 = callmethodChecked(var_prelude, "NumberLiteral", []);
                var opresult3589 = callmethodChecked(call3587, "|(1)", [1], call3584);
                // call case 6: other requests
                setLineNumber(0);    // compilenode member
                // call case 5: prelude request
                var call3591 = callmethodChecked(var_prelude, "AndPattern", []);
                var call3592 = callmethodChecked(call3591, "new(2)", [2], call3582, opresult3589);
                block3576.pattern = call3592;
                setLineNumber(633);    // compilenode member
                // call case 5: prelude request
                var call3594 = callmethodChecked(var_prelude, "OctetsLiteral", []);
                // call case 5: prelude request
                var call3597 = callmethodChecked(var_prelude, "NumberLiteral", []);
                var opresult3599 = callmethodChecked(call3597, "|(1)", [1], call3594);
                block3576.real = function(var___95____95__12) {
                  setLineNumber(634);    // compilenode member
                  // call case 6: other requests
                  var call3601 = callmethodChecked(var_objectType, "number", []);
                  return call3601;
                };
                // call case 5: prelude request
                var call3602 = callmethodChecked(var_prelude, "rule(1)", [1], block3576);
                setLineNumber(637);    // compilenode block
                var block3604 = new GraceBlock(this, 637, 1);
                setLineNumber(0);    // compilenode string
                var string3607 = new GraceString("__13");
                // call case 6: other requests
                // call case 5: prelude request
                var call3609 = callmethodChecked(var_prelude, "VariablePattern", []);
                var call3610 = callmethodChecked(call3609, "new(1)", [1], string3607);
                setLineNumber(637);    // compilenode member
                // call case 5: prelude request
                var call3612 = callmethodChecked(var_prelude, "StringLiteral", []);
                // call case 6: other requests
                setLineNumber(0);    // compilenode member
                // call case 5: prelude request
                var call3614 = callmethodChecked(var_prelude, "AndPattern", []);
                var call3615 = callmethodChecked(call3614, "new(2)", [2], call3610, call3612);
                block3604.pattern = call3615;
                setLineNumber(637);    // compilenode member
                // call case 5: prelude request
                var call3617 = callmethodChecked(var_prelude, "StringLiteral", []);
                block3604.real = function(var___95____95__13) {
                  setLineNumber(638);    // compilenode member
                  // call case 6: other requests
                  var call3619 = callmethodChecked(var_objectType, "string", []);
                  return call3619;
                };
                // call case 5: prelude request
                var call3620 = callmethodChecked(var_prelude, "rule(1)", [1], block3604);
                setLineNumber(641);    // compilenode block
                var block3622 = new GraceBlock(this, 641, 1);
                setLineNumber(0);    // compilenode string
                var string3625 = new GraceString("__14");
                // call case 6: other requests
                // call case 5: prelude request
                var call3627 = callmethodChecked(var_prelude, "VariablePattern", []);
                var call3628 = callmethodChecked(call3627, "new(1)", [1], string3625);
                setLineNumber(641);    // compilenode member
                // call case 5: prelude request
                var call3630 = callmethodChecked(var_prelude, "ArrayLiteral", []);
                // call case 6: other requests
                setLineNumber(0);    // compilenode member
                // call case 5: prelude request
                var call3632 = callmethodChecked(var_prelude, "AndPattern", []);
                var call3633 = callmethodChecked(call3632, "new(2)", [2], call3628, call3630);
                block3622.pattern = call3633;
                setLineNumber(641);    // compilenode member
                // call case 5: prelude request
                var call3635 = callmethodChecked(var_prelude, "ArrayLiteral", []);
                block3622.real = function(var___95____95__14) {
                  setLineNumber(642);    // compilenode member
                  // call case 6: other requests
                  var call3637 = callmethodChecked(var_objectType, "list", []);
                  return call3637;
                };
                // call case 5: prelude request
                var call3638 = callmethodChecked(var_prelude, "rule(1)", [1], block3622);
                setLineNumber(648);    // compilenode string
                var string3640 = new GraceString("RequestError");
                // call case 6: other requests
                var call3641 = callmethodChecked(var_TypeError, "refine(1)", [1], string3640);
                var var_RequestError = call3641;
                setLineNumber(1);    // compilenode method
                var func3642 = function(argcv) {    // method RequestError
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  setModuleName("staticTypes");
                  // RequestError is a simple accessor - elide try ... catch
                  setLineNumber(648);    // compilenode identifier
                  return var_RequestError;
                };
                func3642.paramCounts = [0];
                this.methods["RequestError"] = func3642;
                func3642.definitionLine = 1;
                func3642.definitionModule = "staticTypes";
                this.methods["RequestError"].debug = "def";
                setLineNumber(650);    // compilenode block
                var block3644 = new GraceBlock(this, 650, 1);
                setLineNumber(0);    // compilenode string
                var string3647 = new GraceString("req");
                // call case 6: other requests
                // call case 5: prelude request
                var call3649 = callmethodChecked(var_prelude, "VariablePattern", []);
                var call3650 = callmethodChecked(call3649, "new(1)", [1], string3647);
                setLineNumber(650);    // compilenode member
                // call case 5: prelude request
                var call3652 = callmethodChecked(var_prelude, "Request", []);
                // call case 6: other requests
                setLineNumber(0);    // compilenode member
                // call case 5: prelude request
                var call3654 = callmethodChecked(var_prelude, "AndPattern", []);
                var call3655 = callmethodChecked(call3654, "new(2)", [2], call3650, call3652);
                block3644.pattern = call3655;
                setLineNumber(650);    // compilenode member
                // call case 5: prelude request
                var call3657 = callmethodChecked(var_prelude, "Request", []);
                block3644.real = function(var_req) {
                  setLineNumber(651);    // compilenode member
                  // call case 6: other requests
                  var call3660 = callmethodChecked(var_req, "value", []);
                  var cases3658 = [];
                  var block3661 = new GraceBlock(this, 651, 1);
                  setLineNumber(0);    // compilenode string
                  var string3664 = new GraceString("memb");
                  // call case 6: other requests
                  // call case 5: prelude request
                  var call3666 = callmethodChecked(var_prelude, "VariablePattern", []);
                  var call3667 = callmethodChecked(call3666, "new(1)", [1], string3664);
                  setLineNumber(651);    // compilenode member
                  // call case 5: prelude request
                  var call3669 = callmethodChecked(var_prelude, "Member", []);
                  // call case 6: other requests
                  setLineNumber(0);    // compilenode member
                  // call case 5: prelude request
                  var call3671 = callmethodChecked(var_prelude, "AndPattern", []);
                  var call3672 = callmethodChecked(call3671, "new(2)", [2], call3667, call3669);
                  block3661.pattern = call3672;
                  setLineNumber(651);    // compilenode member
                  // call case 5: prelude request
                  var call3674 = callmethodChecked(var_prelude, "Member", []);
                  block3661.real = function(var_memb) {
                    setLineNumber(652);    // compilenode member
                    // call case 6: other requests
                    var call3676 = callmethodChecked(var_memb, "receiver", []);
                    var var_rec = call3676;
                    var if3677 = GraceDone;
                    setLineNumber(653);    // compilenode string
                    var string3678 = new GraceString("self");
                    // call case 6: other requests
                    var call3681 = callmethodChecked(var_rec, "value", []);
                    var opresult3683 = callmethodChecked(call3681, "==(1)", [1], string3678);
                    // call case 6: other requests
                    // call case 5: prelude request
                    var call3687 = callmethodChecked(var_prelude, "Identifier", []);
                    var call3688 = callmethodChecked(call3687, "match(1)", [1], var_rec);
                    var opresult3690 = callmethodChecked(call3688, "&&(1)", [1], opresult3683);
                    if (Grace_isTrue(opresult3690)) {
                      setLineNumber(654);    // compilenode string
                      var string3692 = new GraceString("Self");
                      var block3693 = new GraceBlock(this, 654, 0);
                      block3693.real = function() {
                        setLineNumber(655);    // compilenode string
                        var string3695 = new GraceString("type of self missing");
                        // call case 6: other requests
                        // call case 5: prelude request
                        var call3697 = callmethodChecked(var_prelude, "Exception", []);
                        var call3698 = callmethodChecked(call3697, "raise(1)with(1)", [1, 1], string3695, var_rec);
                        return call3698;
                      };
                      // call case 6: other requests
                      setLineNumber(654);    // compilenode member
                      // call case 6: other requests
                      // call case 5: prelude request
                      var call3701 = callmethodChecked(var_prelude, "scope", []);
                      var call3702 = callmethodChecked(call3701, "types", []);
                      var call3703 = callmethodChecked(call3702, "find(1)butIfMissing(1)", [1, 1], string3692, block3693);
                      if3677 = call3703;
                    } else {
                      setLineNumber(658);    // compilenode identifier
                      // call case 5: prelude request
                      var call3705 = callmethodChecked(var_prelude, "typeOf(1)", [1], var_rec);
                      if3677 = call3705;
                    }
                    var var_rType = if3677;
                    var if3706 = GraceDone;
                    setLineNumber(661);    // compilenode member
                    // call case 6: other requests
                    var call3708 = callmethodChecked(var_rType, "isUnknown", []);
                    if (Grace_isTrue(call3708)) {
                      setLineNumber(662);    // compilenode member
                      // call case 6: other requests
                      var call3710 = callmethodChecked(var_objectType, "unknown", []);
                      if3706 = call3710;
                    } else {
                      setLineNumber(664);    // compilenode member
                      // call case 6: other requests
                      var call3712 = callmethodChecked(var_memb, "value", []);
                      var var_name = call3712;
                      setLineNumber(666);    // compilenode identifier
                      // call case 6: other requests
                      var call3715 = callmethodChecked(var_rType, "getMethod(1)", [1], var_name);
                      var cases3713 = [];
                      setLineNumber(667);    // compilenode block
                      var block3716 = new GraceBlock(this, 667, 0);
                      block3716.pattern = var_noSuchMethod;
                      block3716.real = function() {
                        setLineNumber(669);    // compilenode string
                        var string3718 = new GraceString("`");
                        var string3721 = new GraceString("` of type `");
                        // call case 6: other requests
                        var call3724 = callmethodChecked(var_rec, "toGrace(1)", [1], new GraceNum(0));
                        var string3726 = new GraceString("`");
                        var opresult3728 = callmethodChecked(string3726, "++(1)", [1], call3724);
                        var opresult3730 = callmethodChecked(opresult3728, "++(1)", [1], string3721);
                        var opresult3732 = callmethodChecked(opresult3730, "++(1)", [1], var_rType);
                        var opresult3734 = callmethodChecked(opresult3732, "++(1)", [1], string3718);
                        setLineNumber(668);    // compilenode string
                        var string3736 = new GraceString("` in ");
                        var string3739 = new GraceString("no method `");
                        var opresult3741 = callmethodChecked(string3739, "++(1)", [1], var_name);
                        var opresult3743 = callmethodChecked(opresult3741, "++(1)", [1], string3736);
                        var opresult3745 = callmethodChecked(opresult3743, "++(1)", [1], opresult3734);
                        setLineNumber(669);    // compilenode identifier
                        // call case 6: other requests
                        setLineNumber(668);    // compilenode identifier
                        var call3746 = callmethodChecked(var_RequestError, "raise(1)with(1)", [1, 1], opresult3745, var_memb);
                        return call3746;
                      };
                      cases3713.push(block3716);
                      setLineNumber(670);    // compilenode block
                      var block3747 = new GraceBlock(this, 670, 1);
                      setLineNumber(0);    // compilenode string
                      var string3750 = new GraceString("meth");
                      // call case 6: other requests
                      // call case 5: prelude request
                      var call3752 = callmethodChecked(var_prelude, "VariablePattern", []);
                      var call3753 = callmethodChecked(call3752, "new(1)", [1], string3750);
                      setLineNumber(670);    // compilenode identifier
                      // call case 6: other requests
                      setLineNumber(0);    // compilenode member
                      // call case 5: prelude request
                      var call3755 = callmethodChecked(var_prelude, "AndPattern", []);
                      var call3756 = callmethodChecked(call3755, "new(2)", [2], call3753, var_MethodType);
                      block3747.pattern = call3756;
                      setLineNumber(670);    // compilenode identifier
                      block3747.real = function(var_meth) {
                        setLineNumber(671);    // compilenode identifier
                        // call case 4: self request
                        onSelf = true;
                        var call3758 = callmethodChecked(this, "check(1)against(1)", [1, 1], var_req, var_meth);
                        return call3758;
                      };
                      cases3713.push(block3747);
                      setLineNumber(666);    // compilematchcase
                      var matchres3713 = matchCase(call3715,cases3713,false);
                      setModuleName("staticTypes");
                      if3706 = matchres3713;
                    }
                    return if3706;
                  };
                  cases3658.push(block3661);
                  setLineNumber(674);    // compilenode block
                  var block3759 = new GraceBlock(this, 674, 1);
                  setLineNumber(0);    // compilenode string
                  var string3762 = new GraceString("ident");
                  // call case 6: other requests
                  // call case 5: prelude request
                  var call3764 = callmethodChecked(var_prelude, "VariablePattern", []);
                  var call3765 = callmethodChecked(call3764, "new(1)", [1], string3762);
                  setLineNumber(674);    // compilenode member
                  // call case 5: prelude request
                  var call3767 = callmethodChecked(var_prelude, "Identifier", []);
                  // call case 6: other requests
                  setLineNumber(0);    // compilenode member
                  // call case 5: prelude request
                  var call3769 = callmethodChecked(var_prelude, "AndPattern", []);
                  var call3770 = callmethodChecked(call3769, "new(2)", [2], call3765, call3767);
                  block3759.pattern = call3770;
                  setLineNumber(674);    // compilenode member
                  // call case 5: prelude request
                  var call3772 = callmethodChecked(var_prelude, "Identifier", []);
                  block3759.real = function(var_ident) {
                    setLineNumber(675);    // compilenode member
                    // call case 6: other requests
                    // call case 6: other requests
                    // call case 6: other requests
                    // call case 5: prelude request
                    var call3778 = callmethodChecked(var_prelude, "scope", []);
                    var call3779 = callmethodChecked(call3778, "methods", []);
                    var call3780 = callmethodChecked(call3779, "stack", []);
                    var call3781 = callmethodChecked(call3780, "size", []);
                    // call case 4: self request
                    onSelf = true;
                    var call3782 = callmethodChecked(this, "find(1)atScope(1)", [1, 1], var_req, call3781);
                    return call3782;
                  };
                  cases3658.push(block3759);
                  setLineNumber(676);    // compilenode block
                  var block3783 = new GraceBlock(this, 676, 1);
                  setLineNumber(1);    // compilenode identifier
                  block3783.real = function(var___95____95__15) {
                    return GraceDone;
                  };
                  cases3658.push(block3783);
                  setLineNumber(651);    // compilematchcase
                  var matchres3658 = matchCase(call3660,cases3658,false);
                  setModuleName("staticTypes");
                  return matchres3658;
                };
                // call case 5: prelude request
                var call3784 = callmethodChecked(var_prelude, "rule(1)", [1], block3644);
                setLineNumber(735);    // compilenode block
                var block3786 = new GraceBlock(this, 735, 1);
                setLineNumber(0);    // compilenode string
                var string3789 = new GraceString("memb");
                // call case 6: other requests
                // call case 5: prelude request
                var call3791 = callmethodChecked(var_prelude, "VariablePattern", []);
                var call3792 = callmethodChecked(call3791, "new(1)", [1], string3789);
                setLineNumber(735);    // compilenode member
                // call case 5: prelude request
                var call3794 = callmethodChecked(var_prelude, "Member", []);
                // call case 6: other requests
                setLineNumber(0);    // compilenode member
                // call case 5: prelude request
                var call3796 = callmethodChecked(var_prelude, "AndPattern", []);
                var call3797 = callmethodChecked(call3796, "new(2)", [2], call3792, call3794);
                block3786.pattern = call3797;
                setLineNumber(735);    // compilenode member
                // call case 5: prelude request
                var call3799 = callmethodChecked(var_prelude, "Member", []);
                block3786.real = function(var_memb) {
                  setLineNumber(736);    // compilenode object
                  var obj3803 = Grace_allocObject(GraceObject, "object");
                  obj3803.definitionModule = "staticTypes";
                  obj3803.definitionLine = 736;
                  obj3803.outer = this;
                  var reader_staticTypes_outer3804 = function() {
                    return this.outer;
                  };
                  obj3803.methods["outer"] = reader_staticTypes_outer3804;
                  var obj_init_3803 = function() {
                    var origSuperDepth = superDepth;
                    superDepth = obj3803;
                    setLineNumber(737);    // compilenode member
                    // call case 6: other requests
                    var call3806 = callmethodChecked(var_memb, "value", []);
                    obj3803.data["name"] = call3806;
                    var reader_staticTypes_name3807 = function() {
                      return this.data["name"];
                    };
                    reader_staticTypes_name3807.def = true;
                    obj3803.methods["name"] = reader_staticTypes_name3807;
                    setLineNumber(738);    // compilenode array
                    var array3808 = new PrimitiveGraceList([]);
                    obj3803.data["args"] = array3808;
                    var reader_staticTypes_args3809 = function() {
                      return this.data["args"];
                    };
                    reader_staticTypes_args3809.def = true;
                    obj3803.methods["args"] = reader_staticTypes_args3809;
                    superDepth = origSuperDepth;
                  };
                  obj_init_3803.apply(obj3803, []);
                  var array3802 = new PrimitiveGraceList([obj3803]);
                  // call case 6: other requests
                  setLineNumber(736);    // compilenode member
                  // call case 6: other requests
                  var call3811 = callmethodChecked(var_ast, "callNode", []);
                  var call3812 = callmethodChecked(call3811, "new(2)", [2], var_memb, array3802);
                  // call case 5: prelude request
                  var call3813 = callmethodChecked(var_prelude, "typeOf(1)", [1], call3812);
                  return call3813;
                };
                // call case 5: prelude request
                var call3814 = callmethodChecked(var_prelude, "rule(1)", [1], block3786);
                setLineNumber(742);    // compilenode block
                var block3816 = new GraceBlock(this, 742, 1);
                setLineNumber(0);    // compilenode string
                var string3819 = new GraceString("op");
                // call case 6: other requests
                // call case 5: prelude request
                var call3821 = callmethodChecked(var_prelude, "VariablePattern", []);
                var call3822 = callmethodChecked(call3821, "new(1)", [1], string3819);
                setLineNumber(742);    // compilenode member
                // call case 5: prelude request
                var call3824 = callmethodChecked(var_prelude, "Operator", []);
                // call case 6: other requests
                setLineNumber(0);    // compilenode member
                // call case 5: prelude request
                var call3826 = callmethodChecked(var_prelude, "AndPattern", []);
                var call3827 = callmethodChecked(call3826, "new(2)", [2], call3822, call3824);
                block3816.pattern = call3827;
                setLineNumber(742);    // compilenode member
                // call case 5: prelude request
                var call3829 = callmethodChecked(var_prelude, "Operator", []);
                block3816.real = function(var_op) {
                  setLineNumber(743);    // compilenode member
                  // call case 6: other requests
                  var call3831 = callmethodChecked(var_op, "left", []);
                  var var_rec = call3831;
                  setLineNumber(744);    // compilenode identifier
                  // call case 5: prelude request
                  var call3833 = callmethodChecked(var_prelude, "typeOf(1)", [1], var_rec);
                  var var_rType = call3833;
                  var if3834 = GraceDone;
                  setLineNumber(746);    // compilenode member
                  // call case 6: other requests
                  var call3836 = callmethodChecked(var_rType, "isUnknown", []);
                  if (Grace_isTrue(call3836)) {
                    setLineNumber(747);    // compilenode member
                    // call case 6: other requests
                    var call3838 = callmethodChecked(var_objectType, "unknown", []);
                    if3834 = call3838;
                  } else {
                    setLineNumber(749);    // compilenode member
                    // call case 6: other requests
                    var call3840 = callmethodChecked(var_op, "value", []);
                    var var_name = call3840;
                    setLineNumber(751);    // compilenode identifier
                    // call case 6: other requests
                    var call3843 = callmethodChecked(var_rType, "getMethod(1)", [1], var_name);
                    var cases3841 = [];
                    var block3844 = new GraceBlock(this, 751, 0);
                    block3844.pattern = var_noSuchMethod;
                    block3844.real = function() {
                      setLineNumber(753);    // compilenode string
                      var string3846 = new GraceString("'");
                      var string3849 = new GraceString("` of type '");
                      // call case 6: other requests
                      var call3852 = callmethodChecked(var_rec, "toGrace(1)", [1], new GraceNum(0));
                      var string3854 = new GraceString("`");
                      var opresult3856 = callmethodChecked(string3854, "++(1)", [1], call3852);
                      var opresult3858 = callmethodChecked(opresult3856, "++(1)", [1], string3849);
                      var opresult3860 = callmethodChecked(opresult3858, "++(1)", [1], var_rType);
                      var opresult3862 = callmethodChecked(opresult3860, "++(1)", [1], string3846);
                      setLineNumber(752);    // compilenode string
                      var string3864 = new GraceString("' in ");
                      var string3867 = new GraceString("no method '");
                      var opresult3869 = callmethodChecked(string3867, "++(1)", [1], var_name);
                      var opresult3871 = callmethodChecked(opresult3869, "++(1)", [1], string3864);
                      var opresult3873 = callmethodChecked(opresult3871, "++(1)", [1], opresult3862);
                      setLineNumber(753);    // compilenode identifier
                      // call case 6: other requests
                      setLineNumber(752);    // compilenode identifier
                      var call3874 = callmethodChecked(var_RequestError, "raise(1)with(1)", [1, 1], opresult3873, var_op);
                      return call3874;
                    };
                    cases3841.push(block3844);
                    setLineNumber(754);    // compilenode block
                    var block3875 = new GraceBlock(this, 754, 1);
                    setLineNumber(0);    // compilenode string
                    var string3878 = new GraceString("meth");
                    // call case 6: other requests
                    // call case 5: prelude request
                    var call3880 = callmethodChecked(var_prelude, "VariablePattern", []);
                    var call3881 = callmethodChecked(call3880, "new(1)", [1], string3878);
                    setLineNumber(754);    // compilenode identifier
                    // call case 6: other requests
                    setLineNumber(0);    // compilenode member
                    // call case 5: prelude request
                    var call3883 = callmethodChecked(var_prelude, "AndPattern", []);
                    var call3884 = callmethodChecked(call3883, "new(2)", [2], call3881, var_MethodType);
                    block3875.pattern = call3884;
                    setLineNumber(754);    // compilenode identifier
                    block3875.real = function(var_meth) {
                      setLineNumber(755);    // compilenode member
                      // call case 6: other requests
                      var call3886 = callmethodChecked(var_op, "right", []);
                      var var_arg = call3886;
                      setLineNumber(756);    // compilenode member
                      // call case 6: other requests
                      // call case 6: other requests
                      // call case 6: other requests
                      var call3890 = callmethodChecked(var_meth, "signature", []);
                      var call3891 = callmethodChecked(call3890, "first", []);
                      var call3892 = callmethodChecked(call3891, "parameters", []);
                      var var_params = call3892;
                      var if3893 = GraceDone;
                      setLineNumber(758);    // compilenode member
                      // call case 6: other requests
                      var call3896 = callmethodChecked(var_params, "size", []);
                      var opresult3898 = callmethodChecked(call3896, "==(1)", [1], new GraceNum(0));
                      if (Grace_isTrue(opresult3898)) {
                        setLineNumber(760);    // compilenode string
                        var string3900 = new GraceString("` is missing its parameter");
                        var string3903 = new GraceString("`");
                        var opresult3905 = callmethodChecked(string3903, "++(1)", [1], var_name);
                        var opresult3907 = callmethodChecked(opresult3905, "++(1)", [1], string3900);
                        setLineNumber(759);    // compilenode string
                        var string3909 = new GraceString("the definition of operator ");
                        var opresult3911 = callmethodChecked(string3909, "++(1)", [1], opresult3907);
                        setLineNumber(760);    // compilenode identifier
                        // call case 6: other requests
                        setLineNumber(759);    // compilenode identifier
                        var call3912 = callmethodChecked(var_RequestError, "raise(1)with(1)", [1, 1], opresult3911, var_op);
                        if3893 = call3912;
                      }
                      setLineNumber(763);    // compilenode member
                      // call case 6: other requests
                      var call3914 = callmethodChecked(var_params, "first", []);
                      var var_param = call3914;
                      setLineNumber(764);    // compilenode member
                      // call case 6: other requests
                      var call3916 = callmethodChecked(var_param, "typeAnnotation", []);
                      var var_pType = call3916;
                      var if3917 = GraceDone;
                      setLineNumber(766);    // compilenode member
                      // call case 6: other requests
                      // call case 6: other requests
                      // call case 5: prelude request
                      var call3921 = callmethodChecked(var_prelude, "typeOf(1)", [1], var_arg);
                      var call3922 = callmethodChecked(call3921, "isSubtypeOf(1)", [1], var_pType);
                      var call3923 = callmethodChecked(call3922, "not", []);
                      if (Grace_isTrue(call3923)) {
                        setLineNumber(769);    // compilenode string
                        var string3925 = new GraceString("`");
                        var string3928 = new GraceString("` in the method `");
                        var string3931 = new GraceString("parameter `");
                        var opresult3933 = callmethodChecked(string3931, "++(1)", [1], var_param);
                        var opresult3935 = callmethodChecked(opresult3933, "++(1)", [1], string3928);
                        var opresult3937 = callmethodChecked(opresult3935, "++(1)", [1], var_name);
                        var opresult3939 = callmethodChecked(opresult3937, "++(1)", [1], string3925);
                        setLineNumber(768);    // compilenode string
                        var string3941 = new GraceString("` does not satisfy the type of ");
                        // call case 6: other requests
                        var call3944 = callmethodChecked(var_arg, "toGrace(1)", [1], new GraceNum(0));
                        var string3946 = new GraceString("`");
                        var opresult3948 = callmethodChecked(string3946, "++(1)", [1], call3944);
                        var opresult3950 = callmethodChecked(opresult3948, "++(1)", [1], string3941);
                        setLineNumber(767);    // compilenode string
                        var string3952 = new GraceString("the expression ");
                        var opresult3954 = callmethodChecked(string3952, "++(1)", [1], opresult3950);
                        var opresult3956 = callmethodChecked(opresult3954, "++(1)", [1], opresult3939);
                        setLineNumber(769);    // compilenode identifier
                        // call case 6: other requests
                        setLineNumber(767);    // compilenode identifier
                        var call3957 = callmethodChecked(var_RequestError, "raise(1)with(1)", [1, 1], opresult3956, var_arg);
                        if3917 = call3957;
                      }
                      setLineNumber(772);    // compilenode member
                      // call case 6: other requests
                      var call3959 = callmethodChecked(var_meth, "returnType", []);
                      return call3959;
                    };
                    cases3841.push(block3875);
                    setLineNumber(773);    // compilenode block
                    var block3960 = new GraceBlock(this, 773, 1);
                    setLineNumber(1);    // compilenode identifier
                    block3960.real = function(var___95____95__17) {
                      return GraceDone;
                    };
                    cases3841.push(block3960);
                    setLineNumber(751);    // compilematchcase
                    var matchres3841 = matchCase(call3843,cases3841,false);
                    setModuleName("staticTypes");
                    if3834 = matchres3841;
                  }
                  return if3834;
                };
                // call case 5: prelude request
                var call3961 = callmethodChecked(var_prelude, "rule(1)", [1], block3816);
                setLineNumber(780);    // compilenode block
                var block3963 = new GraceBlock(this, 780, 1);
                setLineNumber(0);    // compilenode string
                var string3966 = new GraceString("req");
                // call case 6: other requests
                // call case 5: prelude request
                var call3968 = callmethodChecked(var_prelude, "VariablePattern", []);
                var call3969 = callmethodChecked(call3968, "new(1)", [1], string3966);
                setLineNumber(780);    // compilenode member
                // call case 5: prelude request
                var call3971 = callmethodChecked(var_prelude, "If", []);
                // call case 6: other requests
                setLineNumber(0);    // compilenode member
                // call case 5: prelude request
                var call3973 = callmethodChecked(var_prelude, "AndPattern", []);
                var call3974 = callmethodChecked(call3973, "new(2)", [2], call3969, call3971);
                block3963.pattern = call3974;
                setLineNumber(780);    // compilenode member
                // call case 5: prelude request
                var call3976 = callmethodChecked(var_prelude, "If", []);
                block3963.real = function(var_req) {
                  setLineNumber(781);    // compilenode member
                  // call case 6: other requests
                  var call3978 = callmethodChecked(var_req, "value", []);
                  var var_cond = call3978;
                  var if3979 = GraceDone;
                  setLineNumber(782);    // compilenode member
                  // call case 6: other requests
                  // call case 6: other requests
                  var call3983 = callmethodChecked(var_objectType, "boolean", []);
                  // call case 6: other requests
                  // call case 5: prelude request
                  var call3985 = callmethodChecked(var_prelude, "typeOf(1)", [1], var_cond);
                  var call3986 = callmethodChecked(call3985, "isSubtypeOf(1)", [1], call3983);
                  var call3987 = callmethodChecked(call3986, "not", []);
                  if (Grace_isTrue(call3987)) {
                    setLineNumber(784);    // compilenode string
                    var string3989 = new GraceString("conform to type `Boolean`.");
                    setLineNumber(783);    // compilenode string
                    var string3991 = new GraceString("` does not ");
                    // call case 6: other requests
                    var call3994 = callmethodChecked(var_cond, "toGrace(1)", [1], new GraceNum(0));
                    var string3996 = new GraceString("the condition `");
                    var opresult3998 = callmethodChecked(string3996, "++(1)", [1], call3994);
                    var opresult4000 = callmethodChecked(opresult3998, "++(1)", [1], string3991);
                    var opresult4002 = callmethodChecked(opresult4000, "++(1)", [1], string3989);
                    setLineNumber(784);    // compilenode identifier
                    // call case 6: other requests
                    setLineNumber(783);    // compilenode identifier
                    var call4003 = callmethodChecked(var_RequestError, "raise(1)with(1)", [1, 1], opresult4002, var_cond);
                    if3979 = call4003;
                  }
                  setLineNumber(787);    // compilenode member
                  // call case 6: other requests
                  var call4006 = callmethodChecked(var_req, "thenblock", []);
                  // call case 6: other requests
                  var call4007 = callmethodChecked(var_objectType, "fromBlock(1)", [1], call4006);
                  var var_then = call4007;
                  setLineNumber(789);    // compilenode member
                  // call case 6: other requests
                  var call4010 = callmethodChecked(var_req, "elseblock", []);
                  // call case 6: other requests
                  var call4011 = callmethodChecked(var_objectType, "fromBlock(1)", [1], call4010);
                  var var_else = call4011;
                  setLineNumber(791);    // compilenode identifier
                  var opresult4014 = callmethodChecked(var_then, "|(1)", [1], var_else);
                  return opresult4014;
                };
                // call case 5: prelude request
                var call4015 = callmethodChecked(var_prelude, "rule(1)", [1], block3963);
                setLineNumber(794);    // compilenode block
                var block4017 = new GraceBlock(this, 794, 1);
                setLineNumber(0);    // compilenode string
                var string4020 = new GraceString("req");
                // call case 6: other requests
                // call case 5: prelude request
                var call4022 = callmethodChecked(var_prelude, "VariablePattern", []);
                var call4023 = callmethodChecked(call4022, "new(1)", [1], string4020);
                setLineNumber(794);    // compilenode member
                // call case 5: prelude request
                var call4025 = callmethodChecked(var_prelude, "MatchCase", []);
                // call case 6: other requests
                setLineNumber(0);    // compilenode member
                // call case 5: prelude request
                var call4027 = callmethodChecked(var_prelude, "AndPattern", []);
                var call4028 = callmethodChecked(call4027, "new(2)", [2], call4023, call4025);
                block4017.pattern = call4028;
                setLineNumber(794);    // compilenode member
                // call case 5: prelude request
                var call4030 = callmethodChecked(var_prelude, "MatchCase", []);
                block4017.real = function(var_req) {
                  setLineNumber(795);    // compilenode member
                  // call case 6: other requests
                  var call4032 = callmethodChecked(var_req, "cases", []);
                  var var_cases = call4032;
                  setLineNumber(796);    // compilenode identifier
                  var var_union = var_done;
                  setLineNumber(798);    // compilenode block
                  var block4034 = new GraceBlock(this, 798, 1);
                  setLineNumber(1);    // compilenode identifier
                  block4034.real = function(var_case) {
                    setLineNumber(799);    // compilenode identifier
                    // call case 6: other requests
                    var call4036 = callmethodChecked(var_objectType, "fromBlock(1)", [1], var_case);
                    var var_cType = call4036;
                    var if4037 = GraceDone;
                    setLineNumber(800);    // compilenode identifier
                    var opresult4040 = callmethodChecked(var_done, "==(1)", [1], var_union);
                    if (Grace_isTrue(opresult4040)) {
                      setLineNumber(801);    // compilenode identifier
                      if4037 = var_cType;
                    } else {
                      setLineNumber(803);    // compilenode identifier
                      var opresult4043 = callmethodChecked(var_union, "|(1)", [1], var_cType);
                      if4037 = opresult4043;
                    }
                    var_union = if4037;
                    return GraceDone;
                  };
                  // call case 5: prelude request
                  var call4044 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_cases, block4034);
                  setLineNumber(806);    // compilenode identifier
                  return var_union;
                };
                // call case 5: prelude request
                var call4045 = callmethodChecked(var_prelude, "rule(1)", [1], block4017);
                setLineNumber(809);    // compilenode block
                var block4047 = new GraceBlock(this, 809, 1);
                setLineNumber(0);    // compilenode string
                var string4050 = new GraceString("req");
                // call case 6: other requests
                // call case 5: prelude request
                var call4052 = callmethodChecked(var_prelude, "VariablePattern", []);
                var call4053 = callmethodChecked(call4052, "new(1)", [1], string4050);
                setLineNumber(809);    // compilenode member
                // call case 5: prelude request
                var call4055 = callmethodChecked(var_prelude, "TryCatch", []);
                // call case 6: other requests
                setLineNumber(0);    // compilenode member
                // call case 5: prelude request
                var call4057 = callmethodChecked(var_prelude, "AndPattern", []);
                var call4058 = callmethodChecked(call4057, "new(2)", [2], call4053, call4055);
                block4047.pattern = call4058;
                setLineNumber(809);    // compilenode member
                // call case 5: prelude request
                var call4060 = callmethodChecked(var_prelude, "TryCatch", []);
                block4047.real = function(var_req) {
                  setLineNumber(810);    // compilenode member
                  // call case 6: other requests
                  var call4063 = callmethodChecked(var_req, "value", []);
                  var cases4061 = [];
                  var block4064 = new GraceBlock(this, 810, 1);
                  setLineNumber(0);    // compilenode string
                  var string4067 = new GraceString("bl");
                  // call case 6: other requests
                  // call case 5: prelude request
                  var call4069 = callmethodChecked(var_prelude, "VariablePattern", []);
                  var call4070 = callmethodChecked(call4069, "new(1)", [1], string4067);
                  setLineNumber(810);    // compilenode member
                  // call case 5: prelude request
                  var call4072 = callmethodChecked(var_prelude, "BlockLiteral", []);
                  // call case 6: other requests
                  setLineNumber(0);    // compilenode member
                  // call case 5: prelude request
                  var call4074 = callmethodChecked(var_prelude, "AndPattern", []);
                  var call4075 = callmethodChecked(call4074, "new(2)", [2], call4070, call4072);
                  block4064.pattern = call4075;
                  setLineNumber(810);    // compilenode member
                  // call case 5: prelude request
                  var call4077 = callmethodChecked(var_prelude, "BlockLiteral", []);
                  block4064.real = function(var_bl) {
                    setLineNumber(811);    // compilenode member
                    // call case 6: other requests
                    var call4079 = callmethodChecked(var_bl, "params", []);
                    var var_params = call4079;
                    var if4080 = GraceDone;
                    setLineNumber(812);    // compilenode member
                    // call case 6: other requests
                    var call4083 = callmethodChecked(var_params, "size", []);
                    var opresult4085 = callmethodChecked(call4083, ">(1)", [1], new GraceNum(0));
                    if (Grace_isTrue(opresult4085)) {
                      setLineNumber(813);    // compilenode string
                      var string4087 = new GraceString("too many parameters for try block");
                      // call case 6: other requests
                      var call4088 = callmethodChecked(var_RequestError, "raise(1)with(1)", [1, 1], string4087, var_bl);
                      if4080 = call4088;
                    }
                    return if4080;
                  };
                  cases4061.push(block4064);
                  setLineNumber(815);    // compilenode block
                  var block4089 = new GraceBlock(this, 815, 1);
                  setLineNumber(1);    // compilenode identifier
                  block4089.real = function(var___95____95__18) {
                    return GraceDone;
                  };
                  cases4061.push(block4089);
                  setLineNumber(810);    // compilematchcase
                  var matchres4061 = matchCase(call4063,cases4061,false);
                  setModuleName("staticTypes");
                  setLineNumber(817);    // compilenode member
                  // call case 6: other requests
                  var call4092 = callmethodChecked(var_req, "cases", []);
                  var block4093 = new GraceBlock(this, 817, 1);
                  setLineNumber(1);    // compilenode identifier
                  block4093.real = function(var_eachCase) {
                    setLineNumber(818);    // compilenode identifier
                    var cases4094 = [];
                    var block4095 = new GraceBlock(this, 818, 1);
                    setLineNumber(0);    // compilenode string
                    var string4098 = new GraceString("bl");
                    // call case 6: other requests
                    // call case 5: prelude request
                    var call4100 = callmethodChecked(var_prelude, "VariablePattern", []);
                    var call4101 = callmethodChecked(call4100, "new(1)", [1], string4098);
                    setLineNumber(818);    // compilenode member
                    // call case 5: prelude request
                    var call4103 = callmethodChecked(var_prelude, "BlockLiteral", []);
                    // call case 6: other requests
                    setLineNumber(0);    // compilenode member
                    // call case 5: prelude request
                    var call4105 = callmethodChecked(var_prelude, "AndPattern", []);
                    var call4106 = callmethodChecked(call4105, "new(2)", [2], call4101, call4103);
                    block4095.pattern = call4106;
                    setLineNumber(818);    // compilenode member
                    // call case 5: prelude request
                    var call4108 = callmethodChecked(var_prelude, "BlockLiteral", []);
                    block4095.real = function(var_bl) {
                      setLineNumber(819);    // compilenode member
                      // call case 6: other requests
                      var call4110 = callmethodChecked(var_bl, "params", []);
                      var var_params = call4110;
                      var if4111 = GraceDone;
                      setLineNumber(820);    // compilenode member
                      // call case 6: other requests
                      var call4114 = callmethodChecked(var_params, "size", []);
                      var opresult4116 = callmethodChecked(call4114, "\u2260(1)", [1], new GraceNum(1));
                      if (Grace_isTrue(opresult4116)) {
                        var if4117 = GraceDone;
                        setLineNumber(821);    // compilenode member
                        // call case 6: other requests
                        var call4120 = callmethodChecked(var_params, "size", []);
                        var opresult4122 = callmethodChecked(call4120, "==(1)", [1], new GraceNum(0));
                        if (Grace_isTrue(opresult4122)) {
                          setLineNumber(822);    // compilenode string
                          var string4123 = new GraceString("not enough");
                          if4117 = string4123;
                        } else {
                          var string4124 = new GraceString("too many");
                          if4117 = string4124;
                        }
                        var var_which = if4117;
                        setLineNumber(824);    // compilenode string
                        var string4126 = new GraceString(" parameters for catch block");
                        var string4129 = new GraceString("");
                        var opresult4131 = callmethodChecked(string4129, "++(1)", [1], var_which);
                        var opresult4133 = callmethodChecked(opresult4131, "++(1)", [1], string4126);
                        // call case 6: other requests
                        var call4134 = callmethodChecked(var_RequestError, "raise(1)with(1)", [1, 1], opresult4133, var_bl);
                        if4111 = call4134;
                      }
                      return if4111;
                    };
                    cases4094.push(block4095);
                    setLineNumber(826);    // compilenode block
                    var block4135 = new GraceBlock(this, 826, 1);
                    setLineNumber(1);    // compilenode identifier
                    block4135.real = function(var___95____95__19) {
                      return GraceDone;
                    };
                    cases4094.push(block4135);
                    setLineNumber(818);    // compilematchcase
                    var matchres4094 = matchCase(var_eachCase,cases4094,false);
                    setModuleName("staticTypes");
                    return matchres4094;
                  };
                  // call case 5: prelude request
                  var call4136 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call4092, block4093);
                  var if4137 = GraceDone;
                  setLineNumber(829);    // compilenode member
                  // call case 6: other requests
                  var call4139 = callmethodChecked(var_req, "finally", []);
                  var opresult4142 = callmethodChecked(GraceFalse, "\u2260(1)", [1], call4139);
                  if (Grace_isTrue(opresult4142)) {
                    setLineNumber(830);    // compilenode member
                    // call case 6: other requests
                    var call4145 = callmethodChecked(var_req, "finally", []);
                    var cases4143 = [];
                    var block4146 = new GraceBlock(this, 830, 1);
                    setLineNumber(0);    // compilenode string
                    var string4149 = new GraceString("bl");
                    // call case 6: other requests
                    // call case 5: prelude request
                    var call4151 = callmethodChecked(var_prelude, "VariablePattern", []);
                    var call4152 = callmethodChecked(call4151, "new(1)", [1], string4149);
                    setLineNumber(830);    // compilenode member
                    // call case 5: prelude request
                    var call4154 = callmethodChecked(var_prelude, "BlockLiteral", []);
                    // call case 6: other requests
                    setLineNumber(0);    // compilenode member
                    // call case 5: prelude request
                    var call4156 = callmethodChecked(var_prelude, "AndPattern", []);
                    var call4157 = callmethodChecked(call4156, "new(2)", [2], call4152, call4154);
                    block4146.pattern = call4157;
                    setLineNumber(830);    // compilenode member
                    // call case 5: prelude request
                    var call4159 = callmethodChecked(var_prelude, "BlockLiteral", []);
                    block4146.real = function(var_bl) {
                      setLineNumber(831);    // compilenode member
                      // call case 6: other requests
                      var call4161 = callmethodChecked(var_bl, "params", []);
                      var var_params = call4161;
                      var if4162 = GraceDone;
                      setLineNumber(832);    // compilenode member
                      // call case 6: other requests
                      var call4165 = callmethodChecked(var_params, "size", []);
                      var opresult4167 = callmethodChecked(call4165, ">(1)", [1], new GraceNum(0));
                      if (Grace_isTrue(opresult4167)) {
                        setLineNumber(833);    // compilenode string
                        var string4169 = new GraceString("too many parameters to finally");
                        // call case 6: other requests
                        var call4170 = callmethodChecked(var_RequestError, "raise(1)with(1)", [1, 1], string4169, var_bl);
                        if4162 = call4170;
                      }
                      return if4162;
                    };
                    cases4143.push(block4146);
                    setLineNumber(835);    // compilenode block
                    var block4171 = new GraceBlock(this, 835, 1);
                    setLineNumber(1);    // compilenode identifier
                    block4171.real = function(var___95____95__20) {
                      return GraceDone;
                    };
                    cases4143.push(block4171);
                    setLineNumber(830);    // compilematchcase
                    var matchres4143 = matchCase(call4145,cases4143,false);
                    setModuleName("staticTypes");
                    if4137 = matchres4143;
                  }
                  setLineNumber(838);    // compilenode member
                  // call case 6: other requests
                  var call4173 = callmethodChecked(var_objectType, "done", []);
                  return call4173;
                };
                // call case 5: prelude request
                var call4174 = callmethodChecked(var_prelude, "rule(1)", [1], block4047);
                setLineNumber(844);    // compilenode string
                var string4176 = new GraceString("MethodError");
                // call case 6: other requests
                var call4177 = callmethodChecked(var_TypeError, "refine(1)", [1], string4176);
                var var_MethodError = call4177;
                setLineNumber(1);    // compilenode method
                var func4178 = function(argcv) {    // method MethodError
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  setModuleName("staticTypes");
                  // MethodError is a simple accessor - elide try ... catch
                  setLineNumber(844);    // compilenode identifier
                  return var_MethodError;
                };
                func4178.paramCounts = [0];
                this.methods["MethodError"] = func4178;
                func4178.definitionLine = 1;
                func4178.definitionModule = "staticTypes";
                this.methods["MethodError"].debug = "def";
                setLineNumber(846);    // compilenode block
                var block4180 = new GraceBlock(this, 846, 1);
                setLineNumber(0);    // compilenode string
                var string4183 = new GraceString("meth");
                // call case 6: other requests
                // call case 5: prelude request
                var call4185 = callmethodChecked(var_prelude, "VariablePattern", []);
                var call4186 = callmethodChecked(call4185, "new(1)", [1], string4183);
                setLineNumber(846);    // compilenode member
                // call case 5: prelude request
                var call4188 = callmethodChecked(var_prelude, "Method", []);
                // call case 6: other requests
                setLineNumber(0);    // compilenode member
                // call case 5: prelude request
                var call4190 = callmethodChecked(var_prelude, "AndPattern", []);
                var call4191 = callmethodChecked(call4190, "new(2)", [2], call4186, call4188);
                block4180.pattern = call4191;
                setLineNumber(846);    // compilenode member
                // call case 5: prelude request
                var call4193 = callmethodChecked(var_prelude, "Method", []);
                block4180.real = function(var_meth) {
                  setLineNumber(847);    // compilenode member
                  // call case 6: other requests
                  // call case 6: other requests
                  var call4196 = callmethodChecked(var_meth, "value", []);
                  var call4197 = callmethodChecked(call4196, "value", []);
                  var var_name = call4197;
                  setLineNumber(848);    // compilenode identifier
                  // call case 6: other requests
                  var call4199 = callmethodChecked(var_aMethodType, "fromNode(1)", [1], var_meth);
                  var var_mType = call4199;
                  setLineNumber(849);    // compilenode member
                  // call case 6: other requests
                  var call4201 = callmethodChecked(var_mType, "returnType", []);
                  var var_returnType = call4201;
                  setLineNumber(851);    // compilenode block
                  var block4203 = new GraceBlock(this, 851, 0);
                  block4203.real = function() {
                    setLineNumber(852);    // compilenode member
                    // call case 6: other requests
                    var call4206 = callmethodChecked(var_meth, "signature", []);
                    var block4207 = new GraceBlock(this, 852, 1);
                    setLineNumber(1);    // compilenode identifier
                    block4207.real = function(var_part) {
                      setLineNumber(853);    // compilenode member
                      // call case 6: other requests
                      var call4210 = callmethodChecked(var_part, "params", []);
                      var block4211 = new GraceBlock(this, 853, 1);
                      setLineNumber(1);    // compilenode identifier
                      block4211.real = function(var_param) {
                        setLineNumber(854);    // compilenode member
                        // call case 6: other requests
                        var call4214 = callmethodChecked(var_param, "value", []);
                        setLineNumber(855);    // compilenode member
                        // call case 6: other requests
                        var call4217 = callmethodChecked(var_param, "dtype", []);
                        // call case 6: other requests
                        var call4218 = callmethodChecked(var_objectType, "fromDType(1)", [1], call4217);
                        // call case 6: other requests
                        setLineNumber(854);    // compilenode member
                        // call case 6: other requests
                        // call case 5: prelude request
                        var call4221 = callmethodChecked(var_prelude, "scope", []);
                        var call4222 = callmethodChecked(call4221, "variables", []);
                        var call4223 = callmethodChecked(call4222, "at(1)put(1)", [1, 1], call4214, call4218);
                        return call4223;
                      };
                      // call case 5: prelude request
                      var call4224 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call4210, block4211);
                      return call4224;
                    };
                    // call case 5: prelude request
                    var call4225 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call4206, block4207);
                    setLineNumber(859);    // compilenode member
                    // call case 6: other requests
                    var call4228 = callmethodChecked(var_meth, "body", []);
                    // call case 4: self request
                    onSelf = true;
                    var call4229 = callmethodChecked(this, "collectTypes(1)", [1], call4228);
                    setLineNumber(861);    // compilenode member
                    // call case 6: other requests
                    var call4232 = callmethodChecked(var_meth, "body", []);
                    var block4233 = new GraceBlock(this, 861, 1);
                    setLineNumber(1);    // compilenode identifier
                    block4233.real = function(var_stmt) {
                      setLineNumber(862);    // compilenode identifier
                      // call case 5: prelude request
                      var call4235 = callmethodChecked(var_prelude, "checkTypes(1)", [1], var_stmt);
                      setLineNumber(864);    // compilenode object
                      var obj4237 = Grace_allocObject(null, "object");
                      obj4237.definitionModule = "staticTypes";
                      obj4237.definitionLine = 864;
                      obj4237.outer = this;
                      var reader_staticTypes_outer4238 = function() {
                        return this.outer;
                      };
                      obj4237.methods["outer"] = reader_staticTypes_outer4238;
                      var obj_init_4237 = function() {
                        var origSuperDepth = superDepth;
                        superDepth = obj4237;
                        var func4239 = function(argcv) {    // method visitReturn(_)
                          var returnTarget = invocationCount;
                          invocationCount++;
                          var curarg = 1;
                          var var_ret = arguments[curarg];
                          curarg++;
                          setModuleName("staticTypes");
                          setLineNumber(868);    // compilenode member
                          // call case 6: other requests
                          var call4242 = callmethodChecked(var_ret, "value", []);
                          // call case 6: other requests
                          // call case 3: self.outer request
                          var call4244 = callmethodChecked(superDepth, "outer", [0]);
                          onSelf = true;
                          var call4245 = callmethodChecked(call4244, "check(1)matches(1)inMethod(1)", [1, 1, 1], call4242, var_returnType, var_name);
                          setLineNumber(869);    // compilenode identifier
                          return GraceFalse;
                        };
                        func4239.paramCounts = [1];
                        obj4237.methods["visitReturn(1)"] = func4239;
                        func4239.definitionLine = 867;
                        func4239.definitionModule = "staticTypes";
                        var func4246 = function(argcv) {    // method visitMethod(_)
                          var returnTarget = invocationCount;
                          invocationCount++;
                          var curarg = 1;
                          var var_node = arguments[curarg];
                          curarg++;
                          setModuleName("staticTypes");
                          // visitMethod(_) is a simple accessor - elide try ... catch
                          setLineNumber(873);    // compilenode identifier
                          return GraceFalse;
                        };
                        func4246.paramCounts = [1];
                        obj4237.methods["visitMethod(1)"] = func4246;
                        func4246.definitionLine = 872;
                        func4246.definitionModule = "staticTypes";
                        setLineNumber(865);    // compilenode identifier
                        // call case 6: other requests
                        var call4248 = callmethodChecked(var_ast, "baseVisitor$object(1)", [0, 1], this);
                        obj4237.superobj = call4248;
                        if (call4248.data) obj4237.data = call4248.data;
                        if (call4248.hasOwnProperty('_value'))
                            obj4237._value = call4248._value;
                        superDepth = origSuperDepth;
                      };
                      obj_init_4237.apply(obj4237, []);
                      // call case 6: other requests
                      setLineNumber(864);    // compilenode identifier
                      var call4249 = callmethodChecked(var_stmt, "accept(1)", [1], obj4237);
                      return call4249;
                    };
                    // call case 5: prelude request
                    var call4250 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call4232, block4233);
                    var if4251 = GraceDone;
                    setLineNumber(878);    // compilenode member
                    // call case 6: other requests
                    // call case 6: other requests
                    var call4255 = callmethodChecked(var_meth, "body", []);
                    var call4256 = callmethodChecked(call4255, "size", []);
                    var opresult4258 = callmethodChecked(call4256, "==(1)", [1], new GraceNum(0));
                    if (Grace_isTrue(opresult4258)) {
                      var if4259 = GraceDone;
                      setLineNumber(879);    // compilenode member
                      // call case 6: other requests
                      // call case 6: other requests
                      // call case 6: other requests
                      var call4263 = callmethodChecked(var_objectType, "done", []);
                      var call4264 = callmethodChecked(call4263, "isSubtypeOf(1)", [1], var_returnType);
                      var call4265 = callmethodChecked(call4264, "not", []);
                      if (Grace_isTrue(call4265)) {
                        setLineNumber(881);    // compilenode string
                        var string4267 = new GraceString("', but has no body");
                        var string4270 = new GraceString("result of type '");
                        var opresult4272 = callmethodChecked(string4270, "++(1)", [1], var_returnType);
                        var opresult4274 = callmethodChecked(opresult4272, "++(1)", [1], string4267);
                        setLineNumber(880);    // compilenode string
                        var string4276 = new GraceString("` declares a ");
                        var string4279 = new GraceString("method `");
                        var opresult4281 = callmethodChecked(string4279, "++(1)", [1], var_name);
                        var opresult4283 = callmethodChecked(opresult4281, "++(1)", [1], string4276);
                        var opresult4285 = callmethodChecked(opresult4283, "++(1)", [1], opresult4274);
                        setLineNumber(881);    // compilenode identifier
                        // call case 6: other requests
                        setLineNumber(880);    // compilenode identifier
                        var call4286 = callmethodChecked(var_MethodError, "raise(1)with(1)", [1, 1], opresult4285, var_meth);
                        if4259 = call4286;
                      }
                      if4251 = if4259;
                    } else {
                      setLineNumber(884);    // compilenode member
                      // call case 6: other requests
                      // call case 6: other requests
                      var call4289 = callmethodChecked(var_meth, "body", []);
                      var call4290 = callmethodChecked(call4289, "last", []);
                      var var_lastNode = call4290;
                      var if4291 = GraceDone;
                      setLineNumber(885);    // compilenode member
                      // call case 6: other requests
                      // call case 6: other requests
                      // call case 5: prelude request
                      var call4295 = callmethodChecked(var_prelude, "Return", []);
                      var call4296 = callmethodChecked(call4295, "match(1)", [1], var_lastNode);
                      var call4297 = callmethodChecked(call4296, "not", []);
                      if (Grace_isTrue(call4297)) {
                        setLineNumber(886);    // compilenode identifier
                        // call case 5: prelude request
                        var call4299 = callmethodChecked(var_prelude, "typeOf(1)", [1], var_lastNode);
                        var var_lastType = call4299;
                        var if4300 = GraceDone;
                        setLineNumber(887);    // compilenode member
                        // call case 6: other requests
                        // call case 6: other requests
                        var call4303 = callmethodChecked(var_lastType, "isSubtypeOf(1)", [1], var_returnType);
                        var call4304 = callmethodChecked(call4303, "not", []);
                        if (Grace_isTrue(call4304)) {
                          setLineNumber(890);    // compilenode string
                          var string4306 = new GraceString("`");
                          var string4309 = new GraceString("expression of type `");
                          var opresult4311 = callmethodChecked(string4309, "++(1)", [1], var_lastType);
                          var opresult4313 = callmethodChecked(opresult4311, "++(1)", [1], string4306);
                          setLineNumber(889);    // compilenode string
                          var string4315 = new GraceString("`, but returns an ");
                          var string4318 = new GraceString("result of type `");
                          var opresult4320 = callmethodChecked(string4318, "++(1)", [1], var_returnType);
                          var opresult4322 = callmethodChecked(opresult4320, "++(1)", [1], string4315);
                          setLineNumber(888);    // compilenode string
                          var string4324 = new GraceString("` declares a ");
                          var string4327 = new GraceString("method `");
                          var opresult4329 = callmethodChecked(string4327, "++(1)", [1], var_name);
                          var opresult4331 = callmethodChecked(opresult4329, "++(1)", [1], string4324);
                          var opresult4333 = callmethodChecked(opresult4331, "++(1)", [1], opresult4322);
                          var opresult4335 = callmethodChecked(opresult4333, "++(1)", [1], opresult4313);
                          setLineNumber(890);    // compilenode identifier
                          // call case 6: other requests
                          setLineNumber(888);    // compilenode identifier
                          var call4336 = callmethodChecked(var_MethodError, "raise(1)with(1)", [1, 1], opresult4335, var_lastNode);
                          if4300 = call4336;
                        }
                        if4291 = if4300;
                      }
                      if4251 = if4291;
                    }
                    return if4251;
                  };
                  // call case 6: other requests
                  setLineNumber(851);    // compilenode member
                  // call case 5: prelude request
                  var call4338 = callmethodChecked(var_prelude, "scope", []);
                  var call4339 = callmethodChecked(call4338, "enter(1)", [1], block4203);
                  var if4340 = GraceDone;
                  setLineNumber(896);    // compilenode identifier
                  // call case 4: self request
                  onSelf = true;
                  var call4342 = callmethodChecked(this, "isMember(1)", [1], var_mType);
                  if (Grace_isTrue(call4342)) {
                    setLineNumber(897);    // compilenode identifier
                    // call case 6: other requests
                    // call case 6: other requests
                    // call case 5: prelude request
                    var call4346 = callmethodChecked(var_prelude, "scope", []);
                    var call4347 = callmethodChecked(call4346, "variables", []);
                    var call4348 = callmethodChecked(call4347, "at(1)put(1)", [1, 1], var_name, var_returnType);
                    if4340 = call4348;
                  }
                  setLineNumber(900);    // compilenode identifier
                  // call case 6: other requests
                  // call case 6: other requests
                  // call case 5: prelude request
                  var call4352 = callmethodChecked(var_prelude, "scope", []);
                  var call4353 = callmethodChecked(call4352, "methods", []);
                  var call4354 = callmethodChecked(call4353, "at(1)put(1)", [1, 1], var_name, var_mType);
                  return call4354;
                };
                // call case 5: prelude request
                var call4355 = callmethodChecked(var_prelude, "rule(1)", [1], block4180);
                setLineNumber(916);    // compilenode string
                var string4357 = new GraceString("ClassError");
                // call case 6: other requests
                var call4358 = callmethodChecked(var_TypeError, "refine(1)", [1], string4357);
                var var_ClassError = call4358;
                setLineNumber(1);    // compilenode method
                var func4359 = function(argcv) {    // method ClassError
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  setModuleName("staticTypes");
                  // ClassError is a simple accessor - elide try ... catch
                  setLineNumber(916);    // compilenode identifier
                  return var_ClassError;
                };
                func4359.paramCounts = [0];
                this.methods["ClassError"] = func4359;
                func4359.definitionLine = 1;
                func4359.definitionModule = "staticTypes";
                this.methods["ClassError"].debug = "def";
                setLineNumber(918);    // compilenode block
                var block4361 = new GraceBlock(this, 918, 1);
                setLineNumber(0);    // compilenode string
                var string4364 = new GraceString("cls");
                // call case 6: other requests
                // call case 5: prelude request
                var call4366 = callmethodChecked(var_prelude, "VariablePattern", []);
                var call4367 = callmethodChecked(call4366, "new(1)", [1], string4364);
                setLineNumber(918);    // compilenode member
                // call case 5: prelude request
                var call4369 = callmethodChecked(var_prelude, "Class", []);
                // call case 6: other requests
                setLineNumber(0);    // compilenode member
                // call case 5: prelude request
                var call4371 = callmethodChecked(var_prelude, "AndPattern", []);
                var call4372 = callmethodChecked(call4371, "new(2)", [2], call4367, call4369);
                block4361.pattern = call4372;
                setLineNumber(918);    // compilenode member
                // call case 5: prelude request
                var call4374 = callmethodChecked(var_prelude, "Class", []);
                block4361.real = function(var_cls) {
                  setLineNumber(919);    // compilenode member
                  // call case 6: other requests
                  // call case 6: other requests
                  var call4377 = callmethodChecked(var_cls, "name", []);
                  var call4378 = callmethodChecked(call4377, "value", []);
                  var var_name = call4378;
                  setLineNumber(920);    // compilenode member
                  // call case 6: other requests
                  var call4381 = callmethodChecked(var_cls, "dtype", []);
                  // call case 6: other requests
                  var call4382 = callmethodChecked(var_objectType, "fromDType(1)", [1], call4381);
                  var var_dType = call4382;
                  setLineNumber(921);    // compilenode block
                  var block4384 = new GraceBlock(this, 921, 0);
                  block4384.real = function() {
                    setLineNumber(922);    // compilenode member
                    // call case 6: other requests
                    var call4387 = callmethodChecked(var_cls, "signature", []);
                    var block4388 = new GraceBlock(this, 922, 1);
                    setLineNumber(1);    // compilenode identifier
                    block4388.real = function(var_part) {
                      setLineNumber(923);    // compilenode member
                      // call case 6: other requests
                      var call4391 = callmethodChecked(var_part, "params", []);
                      var block4392 = new GraceBlock(this, 923, 1);
                      setLineNumber(1);    // compilenode identifier
                      block4392.real = function(var_param) {
                        setLineNumber(924);    // compilenode member
                        // call case 6: other requests
                        var call4395 = callmethodChecked(var_param, "value", []);
                        setLineNumber(925);    // compilenode member
                        // call case 6: other requests
                        var call4398 = callmethodChecked(var_param, "dtype", []);
                        // call case 6: other requests
                        var call4399 = callmethodChecked(var_objectType, "fromDType(1)", [1], call4398);
                        // call case 6: other requests
                        setLineNumber(924);    // compilenode member
                        // call case 6: other requests
                        // call case 5: prelude request
                        var call4402 = callmethodChecked(var_prelude, "scope", []);
                        var call4403 = callmethodChecked(call4402, "variables", []);
                        var call4404 = callmethodChecked(call4403, "at(1)put(1)", [1, 1], call4395, call4399);
                        return call4404;
                      };
                      // call case 5: prelude request
                      var call4405 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call4391, block4392);
                      return call4405;
                    };
                    // call case 5: prelude request
                    var call4406 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call4387, block4388);
                    setLineNumber(929);    // compilenode member
                    // call case 6: other requests
                    var call4409 = callmethodChecked(var_cls, "value", []);
                    // call case 4: self request
                    onSelf = true;
                    var call4410 = callmethodChecked(this, "processBody(1)", [1], call4409);
                    var var_aType = call4410;
                    var if4411 = GraceDone;
                    setLineNumber(930);    // compilenode member
                    // call case 6: other requests
                    var call4413 = callmethodChecked(var_aType, "isUnknown", []);
                    if (Grace_isTrue(call4413)) {
                      setLineNumber(931);    // compilenode member
                      // call case 6: other requests
                      var call4415 = callmethodChecked(var_objectType, "unknown", []);
                      if4411 = call4415;
                    } else {
                      var if4416 = GraceDone;
                      setLineNumber(933);    // compilenode member
                      // call case 6: other requests
                      // call case 6: other requests
                      var call4419 = callmethodChecked(var_aType, "isSubtypeOf(1)", [1], var_dType);
                      var call4420 = callmethodChecked(call4419, "not", []);
                      if (Grace_isTrue(call4420)) {
                        setLineNumber(936);    // compilenode string
                        var string4422 = new GraceString("`");
                        var string4425 = new GraceString("`");
                        var opresult4427 = callmethodChecked(string4425, "++(1)", [1], var_aType);
                        var opresult4429 = callmethodChecked(opresult4427, "++(1)", [1], string4422);
                        setLineNumber(935);    // compilenode string
                        var string4431 = new GraceString("`, but constructs an object of type ");
                        var string4434 = new GraceString("of type `");
                        var opresult4436 = callmethodChecked(string4434, "++(1)", [1], var_dType);
                        var opresult4438 = callmethodChecked(opresult4436, "++(1)", [1], string4431);
                        setLineNumber(934);    // compilenode string
                        var string4440 = new GraceString("` declares a result ");
                        var string4443 = new GraceString("class `");
                        var opresult4445 = callmethodChecked(string4443, "++(1)", [1], var_name);
                        var opresult4447 = callmethodChecked(opresult4445, "++(1)", [1], string4440);
                        var opresult4449 = callmethodChecked(opresult4447, "++(1)", [1], opresult4438);
                        var opresult4451 = callmethodChecked(opresult4449, "++(1)", [1], opresult4429);
                        setLineNumber(936);    // compilenode identifier
                        // call case 6: other requests
                        setLineNumber(934);    // compilenode identifier
                        var call4452 = callmethodChecked(var_ClassError, "raise(1)with(1)", [1, 1], opresult4451, var_cls);
                        if4416 = call4452;
                      }
                      setLineNumber(939);    // compilenode identifier
                      if4411 = var_aType;
                    }
                    return if4411;
                  };
                  // call case 6: other requests
                  setLineNumber(921);    // compilenode member
                  // call case 5: prelude request
                  var call4454 = callmethodChecked(var_prelude, "scope", []);
                  var call4455 = callmethodChecked(call4454, "enter(1)", [1], block4384);
                  var var_cType = call4455;
                  setLineNumber(944);    // compilenode identifier
                  // call case 6: other requests
                  var call4460 = callmethodChecked(var_aMethodType, "fromNode(1)", [1], var_cls);
                  var array4458 = new PrimitiveGraceList([call4460]);
                  // call case 6: other requests
                  var call4461 = callmethodChecked(var_objectType, "fromMethods(1)", [1], array4458);
                  // call case 6: other requests
                  setLineNumber(943);    // compilenode member
                  // call case 6: other requests
                  // call case 5: prelude request
                  var call4464 = callmethodChecked(var_prelude, "scope", []);
                  var call4465 = callmethodChecked(call4464, "variables", []);
                  var call4466 = callmethodChecked(call4465, "at(1)put(1)", [1, 1], var_name, call4461);
                  var if4467 = GraceDone;
                  setLineNumber(946);    // compilenode member
                  // call case 6: other requests
                  var call4469 = callmethodChecked(var_dType, "isUnknown", []);
                  if (Grace_isTrue(call4469)) {
                    setLineNumber(948);    // compilenode identifier
                    if4467 = var_cType;
                  } else {
                    setLineNumber(950);    // compilenode identifier
                    if4467 = var_dType;
                  }
                  return if4467;
                };
                // call case 5: prelude request
                var call4470 = callmethodChecked(var_prelude, "rule(1)", [1], block4361);
                setLineNumber(957);    // compilenode string
                var string4472 = new GraceString("DefError");
                // call case 6: other requests
                var call4473 = callmethodChecked(var_TypeError, "refine(1)", [1], string4472);
                var var_DefError = call4473;
                setLineNumber(1);    // compilenode method
                var func4474 = function(argcv) {    // method DefError
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  setModuleName("staticTypes");
                  // DefError is a simple accessor - elide try ... catch
                  setLineNumber(957);    // compilenode identifier
                  return var_DefError;
                };
                func4474.paramCounts = [0];
                this.methods["DefError"] = func4474;
                func4474.definitionLine = 1;
                func4474.definitionModule = "staticTypes";
                this.methods["DefError"].debug = "def";
                setLineNumber(959);    // compilenode block
                var block4476 = new GraceBlock(this, 959, 1);
                setLineNumber(0);    // compilenode string
                var string4479 = new GraceString("defd");
                // call case 6: other requests
                // call case 5: prelude request
                var call4481 = callmethodChecked(var_prelude, "VariablePattern", []);
                var call4482 = callmethodChecked(call4481, "new(1)", [1], string4479);
                setLineNumber(959);    // compilenode member
                // call case 5: prelude request
                var call4484 = callmethodChecked(var_prelude, "Var", []);
                // call case 5: prelude request
                var call4487 = callmethodChecked(var_prelude, "Def", []);
                var opresult4489 = callmethodChecked(call4487, "|(1)", [1], call4484);
                // call case 6: other requests
                setLineNumber(0);    // compilenode member
                // call case 5: prelude request
                var call4491 = callmethodChecked(var_prelude, "AndPattern", []);
                var call4492 = callmethodChecked(call4491, "new(2)", [2], call4482, opresult4489);
                block4476.pattern = call4492;
                setLineNumber(959);    // compilenode member
                // call case 5: prelude request
                var call4494 = callmethodChecked(var_prelude, "Var", []);
                // call case 5: prelude request
                var call4497 = callmethodChecked(var_prelude, "Def", []);
                var opresult4499 = callmethodChecked(call4497, "|(1)", [1], call4494);
                block4476.real = function(var_defd) {
                  setLineNumber(960);    // compilenode member
                  // call case 6: other requests
                  var call4502 = callmethodChecked(var_defd, "dtype", []);
                  // call case 6: other requests
                  var call4503 = callmethodChecked(var_objectType, "fromDType(1)", [1], call4502);
                  var var_defType = call4503;
                  setLineNumber(962);    // compilenode member
                  // call case 6: other requests
                  var call4505 = callmethodChecked(var_defd, "value", []);
                  var var_value = call4505;
                  var if4506 = GraceDone;
                  setLineNumber(964);    // compilenode identifier
                  var opresult4509 = callmethodChecked(var_value, "\u2260(1)", [1], GraceFalse);
                  if (Grace_isTrue(opresult4509)) {
                    setLineNumber(965);    // compilenode identifier
                    // call case 5: prelude request
                    var call4511 = callmethodChecked(var_prelude, "typeOf(1)", [1], var_value);
                    var var_vType = call4511;
                    var if4512 = GraceDone;
                    setLineNumber(967);    // compilenode string
                    var string4513 = new GraceString("defdec");
                    // call case 6: other requests
                    var call4516 = callmethodChecked(var_defd, "kind", []);
                    var opresult4518 = callmethodChecked(call4516, "==(1)", [1], string4513);
                    // call case 6: other requests
                    var call4521 = callmethodChecked(var_defType, "isUnknown", []);
                    var opresult4523 = callmethodChecked(call4521, "&&(1)", [1], opresult4518);
                    if (Grace_isTrue(opresult4523)) {
                      setLineNumber(968);    // compilenode identifier
                      var_defType = var_vType;
                      if4512 = GraceDone;
                    }
                    var if4524 = GraceDone;
                    setLineNumber(971);    // compilenode member
                    // call case 6: other requests
                    // call case 6: other requests
                    var call4527 = callmethodChecked(var_vType, "isSubtypeOf(1)", [1], var_defType);
                    var call4528 = callmethodChecked(call4527, "not", []);
                    if (Grace_isTrue(call4528)) {
                      setLineNumber(974);    // compilenode string
                      var string4530 = new GraceString("`");
                      var string4533 = new GraceString("annotation `");
                      var opresult4535 = callmethodChecked(string4533, "++(1)", [1], var_defType);
                      var opresult4537 = callmethodChecked(opresult4535, "++(1)", [1], string4530);
                      setLineNumber(973);    // compilenode string
                      var string4539 = new GraceString(" ");
                      // call case 6: other requests
                      var call4542 = callmethodChecked(var_defd, "kind", []);
                      var string4544 = new GraceString("` does not satisfy the type of ");
                      var string4547 = new GraceString("`");
                      var opresult4549 = callmethodChecked(string4547, "++(1)", [1], var_vType);
                      var opresult4551 = callmethodChecked(opresult4549, "++(1)", [1], string4544);
                      var opresult4553 = callmethodChecked(opresult4551, "++(1)", [1], call4542);
                      var opresult4555 = callmethodChecked(opresult4553, "++(1)", [1], string4539);
                      setLineNumber(972);    // compilenode string
                      var string4557 = new GraceString("` of type ");
                      // call case 6: other requests
                      var call4560 = callmethodChecked(var_value, "toGrace(1)", [1], new GraceNum(0));
                      var string4562 = new GraceString("the expression `");
                      var opresult4564 = callmethodChecked(string4562, "++(1)", [1], call4560);
                      var opresult4566 = callmethodChecked(opresult4564, "++(1)", [1], string4557);
                      var opresult4568 = callmethodChecked(opresult4566, "++(1)", [1], opresult4555);
                      var opresult4570 = callmethodChecked(opresult4568, "++(1)", [1], opresult4537);
                      setLineNumber(974);    // compilenode identifier
                      // call case 6: other requests
                      setLineNumber(972);    // compilenode identifier
                      var call4571 = callmethodChecked(var_DefError, "raise(1)with(1)", [1, 1], opresult4570, var_value);
                      if4524 = call4571;
                    }
                    if4506 = if4524;
                  }
                  setLineNumber(978);    // compilenode member
                  // call case 6: other requests
                  // call case 6: other requests
                  var call4574 = callmethodChecked(var_defd, "name", []);
                  var call4575 = callmethodChecked(call4574, "value", []);
                  var var_name = call4575;
                  setLineNumber(979);    // compilenode identifier
                  // call case 6: other requests
                  // call case 6: other requests
                  // call case 5: prelude request
                  var call4579 = callmethodChecked(var_prelude, "scope", []);
                  var call4580 = callmethodChecked(call4579, "variables", []);
                  var call4581 = callmethodChecked(call4580, "at(1)put(1)", [1, 1], var_name, var_defType);
                  setLineNumber(981);    // compilenode member
                  // call case 6: other requests
                  var call4584 = callmethodChecked(var_defd, "annotations", []);
                  var block4585 = new GraceBlock(this, 981, 1);
                  setLineNumber(1);    // compilenode identifier
                  block4585.real = function(var_ann) {
                    var if4586 = GraceDone;
                    setLineNumber(982);    // compilenode string
                    var string4587 = new GraceString("public");
                    // call case 6: other requests
                    var call4590 = callmethodChecked(var_ann, "value", []);
                    var opresult4592 = callmethodChecked(call4590, "==(1)", [1], string4587);
                    if (Grace_isTrue(opresult4592)) {
                      setLineNumber(983);    // compilenode identifier
                      // call case 6: other requests
                      var call4595 = callmethodChecked(var_aMethodType, "member(1)ofType(1)", [1, 1], var_name, var_defType);
                      // call case 6: other requests
                      // call case 6: other requests
                      // call case 5: prelude request
                      var call4598 = callmethodChecked(var_prelude, "scope", []);
                      var call4599 = callmethodChecked(call4598, "methods", []);
                      var call4600 = callmethodChecked(call4599, "at(1)put(1)", [1, 1], var_name, call4595);
                      var if4601 = GraceDone;
                      setLineNumber(985);    // compilenode string
                      var string4602 = new GraceString("vardec");
                      // call case 6: other requests
                      var call4605 = callmethodChecked(var_defd, "kind", []);
                      var opresult4607 = callmethodChecked(call4605, "==(1)", [1], string4602);
                      if (Grace_isTrue(opresult4607)) {
                        setLineNumber(986);    // compilenode string
                        var string4608 = new GraceString(":=");
                        var opresult4611 = callmethodChecked(var_name, "++(1)", [1], string4608);
                        var var_name__39__ = opresult4611;
                        setLineNumber(987);    // compilenode identifier
                        // call case 6: other requests
                        var call4613 = callmethodChecked(var_aParam, "withName(1)ofType(1)", [1, 1], var_name, var_defType);
                        var var_param = call4613;
                        setLineNumber(988);    // compilenode identifier
                        var array4616 = new PrimitiveGraceList([var_param]);
                        // call case 4: self request
                        onSelf = true;
                        var call4617 = callmethodChecked(this, "mixPartNamed(1)parameters(1)", [1, 1], var_name__39__, array4616);
                        var array4614 = new PrimitiveGraceList([call4617]);
                        var var_sig = array4614;
                        setLineNumber(991);    // compilenode member
                        // call case 6: other requests
                        var call4621 = callmethodChecked(var_objectType, "done", []);
                        // call case 6: other requests
                        var call4622 = callmethodChecked(var_aMethodType, "signature(1)returnType(1)", [1, 1], var_sig, call4621);
                        // call case 6: other requests
                        setLineNumber(990);    // compilenode member
                        // call case 6: other requests
                        // call case 5: prelude request
                        var call4625 = callmethodChecked(var_prelude, "scope", []);
                        var call4626 = callmethodChecked(call4625, "methods", []);
                        var call4627 = callmethodChecked(call4626, "at(1)put(1)", [1, 1], var_name__39__, call4622);
                        if4601 = call4627;
                      }
                      setLineNumber(995);    // compilenode identifier
                      throw new ReturnException(var_done, returnTarget);
                    }
                    return if4586;
                  };
                  // call case 5: prelude request
                  var call4628 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call4584, block4585);
                  return call4628;
                };
                // call case 5: prelude request
                var call4629 = callmethodChecked(var_prelude, "rule(1)", [1], block4476);
                setLineNumber(999);    // compilenode block
                var block4631 = new GraceBlock(this, 999, 1);
                setLineNumber(0);    // compilenode string
                var string4634 = new GraceString("bind");
                // call case 6: other requests
                // call case 5: prelude request
                var call4636 = callmethodChecked(var_prelude, "VariablePattern", []);
                var call4637 = callmethodChecked(call4636, "new(1)", [1], string4634);
                setLineNumber(999);    // compilenode member
                // call case 5: prelude request
                var call4639 = callmethodChecked(var_prelude, "Bind", []);
                // call case 6: other requests
                setLineNumber(0);    // compilenode member
                // call case 5: prelude request
                var call4641 = callmethodChecked(var_prelude, "AndPattern", []);
                var call4642 = callmethodChecked(call4641, "new(2)", [2], call4637, call4639);
                block4631.pattern = call4642;
                setLineNumber(999);    // compilenode member
                // call case 5: prelude request
                var call4644 = callmethodChecked(var_prelude, "Bind", []);
                block4631.real = function(var_bind) {
                  setLineNumber(1000);    // compilenode member
                  // call case 6: other requests
                  var call4646 = callmethodChecked(var_bind, "dest", []);
                  var var_dest = call4646;
                  setLineNumber(1001);    // compilenode identifier
                  // call case 5: prelude request
                  var call4648 = callmethodChecked(var_prelude, "typeOf(1)", [1], var_dest);
                  var var_dType = call4648;
                  setLineNumber(1003);    // compilenode member
                  // call case 6: other requests
                  var call4650 = callmethodChecked(var_bind, "value", []);
                  var var_value = call4650;
                  setLineNumber(1004);    // compilenode identifier
                  // call case 5: prelude request
                  var call4652 = callmethodChecked(var_prelude, "typeOf(1)", [1], var_value);
                  var var_vType = call4652;
                  var if4653 = GraceDone;
                  setLineNumber(1006);    // compilenode member
                  // call case 6: other requests
                  // call case 6: other requests
                  var call4656 = callmethodChecked(var_vType, "isSubtypeOf(1)", [1], var_dType);
                  var call4657 = callmethodChecked(call4656, "not", []);
                  if (Grace_isTrue(call4657)) {
                    setLineNumber(1009);    // compilenode string
                    var string4659 = new GraceString("`");
                    // call case 6: other requests
                    var call4662 = callmethodChecked(var_dest, "toGrace(1)", [1], new GraceNum(0));
                    var string4664 = new GraceString("`");
                    var opresult4666 = callmethodChecked(string4664, "++(1)", [1], call4662);
                    var opresult4668 = callmethodChecked(opresult4666, "++(1)", [1], string4659);
                    setLineNumber(1008);    // compilenode string
                    var string4670 = new GraceString("` of ");
                    var string4673 = new GraceString("` does not satisfy the type `");
                    var string4676 = new GraceString("`");
                    var opresult4678 = callmethodChecked(string4676, "++(1)", [1], var_vType);
                    var opresult4680 = callmethodChecked(opresult4678, "++(1)", [1], string4673);
                    var opresult4682 = callmethodChecked(opresult4680, "++(1)", [1], var_dType);
                    var opresult4684 = callmethodChecked(opresult4682, "++(1)", [1], string4670);
                    setLineNumber(1007);    // compilenode string
                    var string4686 = new GraceString("` of type ");
                    // call case 6: other requests
                    var call4689 = callmethodChecked(var_value, "toGrace(1)", [1], new GraceNum(0));
                    var string4691 = new GraceString("the expression `");
                    var opresult4693 = callmethodChecked(string4691, "++(1)", [1], call4689);
                    var opresult4695 = callmethodChecked(opresult4693, "++(1)", [1], string4686);
                    var opresult4697 = callmethodChecked(opresult4695, "++(1)", [1], opresult4684);
                    var opresult4699 = callmethodChecked(opresult4697, "++(1)", [1], opresult4668);
                    setLineNumber(1009);    // compilenode identifier
                    // call case 6: other requests
                    setLineNumber(1007);    // compilenode identifier
                    var call4700 = callmethodChecked(var_DefError, "raise(1)with(1)", [1, 1], opresult4699, var_value);
                    if4653 = call4700;
                  }
                  return if4653;
                };
                // call case 5: prelude request
                var call4701 = callmethodChecked(var_prelude, "rule(1)", [1], block4631);
                setLineNumber(1016);    // compilenode block
                var block4703 = new GraceBlock(this, 1016, 1);
                setLineNumber(0);    // compilenode string
                var string4706 = new GraceString("imp");
                // call case 6: other requests
                // call case 5: prelude request
                var call4708 = callmethodChecked(var_prelude, "VariablePattern", []);
                var call4709 = callmethodChecked(call4708, "new(1)", [1], string4706);
                setLineNumber(1016);    // compilenode member
                // call case 5: prelude request
                var call4711 = callmethodChecked(var_prelude, "Import", []);
                // call case 6: other requests
                setLineNumber(0);    // compilenode member
                // call case 5: prelude request
                var call4713 = callmethodChecked(var_prelude, "AndPattern", []);
                var call4714 = callmethodChecked(call4713, "new(2)", [2], call4709, call4711);
                block4703.pattern = call4714;
                setLineNumber(1016);    // compilenode member
                // call case 5: prelude request
                var call4716 = callmethodChecked(var_prelude, "Import", []);
                block4703.real = function(var_imp) {
                  setLineNumber(1017);    // compilenode member
                  // call case 6: other requests
                  var call4719 = callmethodChecked(var_imp, "nameString", []);
                  // call case 6: other requests
                  var call4721 = callmethodChecked(var_objectType, "unknown", []);
                  // call case 6: other requests
                  // call case 6: other requests
                  // call case 5: prelude request
                  var call4724 = callmethodChecked(var_prelude, "scope", []);
                  var call4725 = callmethodChecked(call4724, "variables", []);
                  var call4726 = callmethodChecked(call4725, "at(1)put(1)", [1, 1], call4719, call4721);
                  return call4726;
                };
                // call case 5: prelude request
                var call4727 = callmethodChecked(var_prelude, "rule(1)", [1], block4703);
                setLineNumber(1023);    // compilenode block
                var block4729 = new GraceBlock(this, 1023, 1);
                setLineNumber(0);    // compilenode string
                var string4732 = new GraceString("block");
                // call case 6: other requests
                // call case 5: prelude request
                var call4734 = callmethodChecked(var_prelude, "VariablePattern", []);
                var call4735 = callmethodChecked(call4734, "new(1)", [1], string4732);
                setLineNumber(1023);    // compilenode member
                // call case 5: prelude request
                var call4737 = callmethodChecked(var_prelude, "BlockLiteral", []);
                // call case 6: other requests
                setLineNumber(0);    // compilenode member
                // call case 5: prelude request
                var call4739 = callmethodChecked(var_prelude, "AndPattern", []);
                var call4740 = callmethodChecked(call4739, "new(2)", [2], call4735, call4737);
                block4729.pattern = call4740;
                setLineNumber(1023);    // compilenode member
                // call case 5: prelude request
                var call4742 = callmethodChecked(var_prelude, "BlockLiteral", []);
                block4729.real = function(var_block) {
                  setLineNumber(1024);    // compilenode member
                  // call case 6: other requests
                  var call4744 = callmethodChecked(var_block, "body", []);
                  var var_body = call4744;
                  setLineNumber(1026);    // compilenode block
                  var block4746 = new GraceBlock(this, 1026, 0);
                  block4746.real = function() {
                    setLineNumber(1027);    // compilenode member
                    // call case 6: other requests
                    var call4749 = callmethodChecked(var_block, "params", []);
                    var block4750 = new GraceBlock(this, 1027, 1);
                    setLineNumber(1);    // compilenode identifier
                    block4750.real = function(var_param) {
                      setLineNumber(1028);    // compilenode member
                      // call case 6: other requests
                      var call4753 = callmethodChecked(var_param, "value", []);
                      setLineNumber(1029);    // compilenode member
                      // call case 6: other requests
                      var call4756 = callmethodChecked(var_param, "dtype", []);
                      // call case 6: other requests
                      var call4757 = callmethodChecked(var_objectType, "fromDType(1)", [1], call4756);
                      // call case 6: other requests
                      setLineNumber(1028);    // compilenode member
                      // call case 6: other requests
                      // call case 5: prelude request
                      var call4760 = callmethodChecked(var_prelude, "scope", []);
                      var call4761 = callmethodChecked(call4760, "variables", []);
                      var call4762 = callmethodChecked(call4761, "at(1)put(1)", [1, 1], call4753, call4757);
                      return call4762;
                    };
                    // call case 5: prelude request
                    var call4763 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call4749, block4750);
                    setLineNumber(1032);    // compilenode identifier
                    // call case 4: self request
                    onSelf = true;
                    var call4765 = callmethodChecked(this, "collectTypes(1)", [1], var_body);
                    setLineNumber(1034);    // compilenode block
                    var block4767 = new GraceBlock(this, 1034, 1);
                    setLineNumber(1);    // compilenode identifier
                    block4767.real = function(var_stmt) {
                      setLineNumber(1035);    // compilenode identifier
                      // call case 5: prelude request
                      var call4769 = callmethodChecked(var_prelude, "checkTypes(1)", [1], var_stmt);
                      return call4769;
                    };
                    // call case 5: prelude request
                    var call4770 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_body, block4767);
                    return call4770;
                  };
                  // call case 6: other requests
                  setLineNumber(1026);    // compilenode member
                  // call case 5: prelude request
                  var call4772 = callmethodChecked(var_prelude, "scope", []);
                  var call4773 = callmethodChecked(call4772, "enter(1)", [1], block4746);
                  setLineNumber(1039);    // compilenode array
                  var array4774 = new PrimitiveGraceList([]);
                  var var_parameters = array4774;
                  setLineNumber(1040);    // compilenode member
                  // call case 6: other requests
                  var call4777 = callmethodChecked(var_block, "params", []);
                  var block4778 = new GraceBlock(this, 1040, 1);
                  setLineNumber(1);    // compilenode identifier
                  block4778.real = function(var_param) {
                    setLineNumber(1041);    // compilenode member
                    // call case 6: other requests
                    var call4782 = callmethodChecked(var_param, "value", []);
                    setLineNumber(1042);    // compilenode member
                    // call case 6: other requests
                    var call4785 = callmethodChecked(var_param, "dtype", []);
                    // call case 6: other requests
                    var call4786 = callmethodChecked(var_objectType, "fromDType(1)", [1], call4785);
                    // call case 6: other requests
                    setLineNumber(1041);    // compilenode identifier
                    var call4787 = callmethodChecked(var_aParam, "withName(1)ofType(1)", [1, 1], call4782, call4786);
                    // call case 6: other requests
                    var call4788 = callmethodChecked(var_parameters, "push(1)", [1], call4787);
                    return call4788;
                  };
                  // call case 5: prelude request
                  var call4789 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call4777, block4778);
                  setLineNumber(1046);    // compilenode identifier
                  // call case 6: other requests
                  var call4792 = callmethodChecked(var_objectType, "fromBlockBody(1)", [1], var_body);
                  // call case 6: other requests
                  setLineNumber(1045);    // compilenode identifier
                  var call4793 = callmethodChecked(var_objectType, "blockTaking(1)returning(1)", [1, 1], var_parameters, call4792);
                  return call4793;
                };
                // call case 5: prelude request
                var call4794 = callmethodChecked(var_prelude, "rule(1)", [1], block4729);
                setLineNumber(1052);    // compilenode block
                var block4796 = new GraceBlock(this, 1052, 1);
                setLineNumber(1053);    // compilenode string
                var string4799 = new GraceString("ident");
                // call case 6: other requests
                // call case 5: prelude request
                var call4801 = callmethodChecked(var_prelude, "VariablePattern", []);
                var call4802 = callmethodChecked(call4801, "new(1)", [1], string4799);
                setLineNumber(1052);    // compilenode member
                // call case 5: prelude request
                var call4804 = callmethodChecked(var_prelude, "Identifier", []);
                // call case 6: other requests
                setLineNumber(1053);    // compilenode member
                // call case 5: prelude request
                var call4806 = callmethodChecked(var_prelude, "AndPattern", []);
                var call4807 = callmethodChecked(call4806, "new(2)", [2], call4802, call4804);
                block4796.pattern = call4807;
                setLineNumber(1052);    // compilenode member
                // call case 5: prelude request
                var call4809 = callmethodChecked(var_prelude, "Identifier", []);
                block4796.real = function(var_ident) {
                  setLineNumber(1053);    // compilenode member
                  // call case 6: other requests
                  var call4812 = callmethodChecked(var_ident, "value", []);
                  var cases4810 = [];
                  var block4813 = new GraceBlock(this, 1053, 0);
                  var string4814 = new GraceString("outer");
                  block4813.pattern = string4814;
                  block4813.real = function() {
                    setLineNumber(1054);    // compilenode member
                    // call case 6: other requests
                    // call case 5: prelude request
                    var call4818 = callmethodChecked(var_prelude, "scope", []);
                    var call4819 = callmethodChecked(call4818, "size", []);
                    // call case 4: self request
                    onSelf = true;
                    var call4820 = callmethodChecked(this, "outerAt(1)", [1], call4819);
                    return call4820;
                  };
                  cases4810.push(block4813);
                  setLineNumber(1055);    // compilenode block
                  var block4821 = new GraceBlock(this, 1055, 1);
                  setLineNumber(1);    // compilenode identifier
                  block4821.real = function(var___95____95__21) {
                    setLineNumber(1056);    // compilenode member
                    // call case 6: other requests
                    var call4824 = callmethodChecked(var_ident, "value", []);
                    var block4825 = new GraceBlock(this, 1056, 0);
                    block4825.real = function() {
                      // call case 6: other requests
                      var call4827 = callmethodChecked(var_objectType, "unknown", []);
                      return call4827;
                    };
                    // call case 6: other requests
                    // call case 6: other requests
                    // call case 5: prelude request
                    var call4830 = callmethodChecked(var_prelude, "scope", []);
                    var call4831 = callmethodChecked(call4830, "variables", []);
                    var call4832 = callmethodChecked(call4831, "find(1)butIfMissing(1)", [1, 1], call4824, block4825);
                    return call4832;
                  };
                  cases4810.push(block4821);
                  setLineNumber(1053);    // compilematchcase
                  var matchres4810 = matchCase(call4812,cases4810,false);
                  setModuleName("staticTypes");
                  return matchres4810;
                };
                // call case 5: prelude request
                var call4833 = callmethodChecked(var_prelude, "rule(1)", [1], block4796);
                setLineNumber(1171);    // compilenode string
                var string4835 = new GraceString("TypeDeclarationError");
                // call case 6: other requests
                var call4836 = callmethodChecked(var_TypeError, "refine(1)", [1], string4835);
                var var_TypeDeclarationError = call4836;
                setLineNumber(1);    // compilenode method
                var func4837 = function(argcv) {    // method TypeDeclarationError
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  setModuleName("staticTypes");
                  // TypeDeclarationError is a simple accessor - elide try ... catch
                  setLineNumber(1171);    // compilenode identifier
                  return var_TypeDeclarationError;
                };
                func4837.paramCounts = [0];
                this.methods["TypeDeclarationError"] = func4837;
                func4837.definitionLine = 1;
                func4837.definitionModule = "staticTypes";
                this.methods["TypeDeclarationError"].debug = "def";
                setLineNumber(1266);    // compilenode object
                var obj4838 = Grace_allocObject(GraceObject, "thisDialect");
                obj4838.definitionModule = "staticTypes";
                obj4838.definitionLine = 1266;
                obj4838.outer = this;
                var reader_staticTypes_outer4839 = function() {
                  return this.outer;
                };
                obj4838.methods["outer"] = reader_staticTypes_outer4839;
                var obj_init_4838 = function() {
                  var origSuperDepth = superDepth;
                  superDepth = obj4838;
                  var func4840 = function(argcv) {    // method parseChecker(_)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_moduleObj = arguments[curarg];
                    curarg++;
                    setModuleName("staticTypes");
                    setLineNumber(1267);    // compilenode identifier
                    // call case 5: prelude request
                    var call4842 = callmethodChecked(var_prelude, "check(1)", [1], var_moduleObj);
                    return call4842;
                  };
                  func4840.paramCounts = [1];
                  obj4838.methods["parseChecker(1)"] = func4840;
                  func4840.definitionLine = 1267;
                  func4840.definitionModule = "staticTypes";
                  var func4843 = function(argcv) {    // method astChecker(_)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_moduleObj = arguments[curarg];
                    curarg++;
                    setModuleName("staticTypes");
                    setLineNumber(1268);    // compilenode identifier
                    // call case 5: prelude request
                    var call4845 = callmethodChecked(var_prelude, "check(1)", [1], var_moduleObj);
                    return call4845;
                  };
                  func4843.paramCounts = [1];
                  obj4838.methods["astChecker(1)"] = func4843;
                  func4843.definitionLine = 1268;
                  func4843.definitionModule = "staticTypes";
                  var func4846 = function(argcv) {    // method atStart
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    setModuleName("staticTypes");
                    setLineNumber(1269);    // compilenode string
                    var string4847 = new GraceString("module start");
                    var call4848 = Grace_print(string4847);
                    return call4848;
                  };
                  func4846.paramCounts = [0];
                  obj4838.methods["atStart"] = func4846;
                  func4846.definitionLine = 1269;
                  func4846.definitionModule = "staticTypes";
                  var func4849 = function(argcv) {    // method atEnd
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    setModuleName("staticTypes");
                    setLineNumber(1270);    // compilenode string
                    var string4850 = new GraceString("module end");
                    var call4851 = Grace_print(string4850);
                    return call4851;
                  };
                  func4849.paramCounts = [0];
                  obj4838.methods["atEnd"] = func4849;
                  func4849.definitionLine = 1270;
                  func4849.definitionModule = "staticTypes";
                  superDepth = origSuperDepth;
                };
                obj_init_4838.apply(obj4838, []);
                var var_thisDialect = obj4838;
                setLineNumber(1);    // compilenode method
                var func4852 = function(argcv) {    // method thisDialect
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  setModuleName("staticTypes");
                  // thisDialect is a simple accessor - elide try ... catch
                  setLineNumber(1266);    // compilenode identifier
                  return var_thisDialect;
                };
                func4852.paramCounts = [0];
                this.methods["thisDialect"] = func4852;
                func4852.definitionLine = 1;
                func4852.definitionModule = "staticTypes";
                this.methods["thisDialect"].debug = "def";
                return this;
              }
              gracecode_staticTypes.imports = ['ast', 'dialect', 'util'];
              if (typeof gctCache !== "undefined")
                gctCache['staticTypes'] = "classes:\n aMethodType\n aParam\n objectType\nconfidential:\n addVar(1)ofType(1)\n check(1)against(1)\n check(1)matches(1)inMethod(1)\n collectTypes(1)\n continue'(2)\n find(1)atScope(1)\n isMember(1)\n isPublic(1)\n outerAt(1)\n processBody(1)\nconstructors-of:aMethodType:\n signature(1)returnType(1)\nconstructors-of:aParam:\n withName(1)ofType(1)\nconstructors-of:objectType:\n fromMethods(1)\n fromMethods(1)withName(1)\ndialect:\n dialect\nfresh-methods:\n mixPartNamed(1)parameters(1)\nfresh:mixPartNamed(1)parameters(1):\n name\n parameters\nmethods-of:aMethodType.signature(1)returnType(1):\n asString\n fst\n isSpecialisationOf(1)\n name\n returnType\n show\n signature\nmethods-of:aParam.withName(1)ofType(1):\n asString\n name\n typeAnnotation\nmethods-of:objectType.fromMethods(1):\n &(1)\n asString\n currentlyTesting\n getMethod(1)\n isSubtypeOf(1)\n isUnknown\n methods\n |(1)\nmethods-of:objectType.fromMethods(1)withName(1):\n &(1)\n ::(1)\n ==(1)\n asDebugString\n asString\n basicAsString\n currentlyTesting\n getMethod(1)\n isMe(1)\n isSubtypeOf(1)\n isUnknown\n methods\n |(1)\n \u2260(1)\nmethodtypes-of:MethodType:\n 1 isSpecialisationOf(other : MethodType) -> Boolean\n 1 name -> String\n 1 returnType -> ObjectType\n 1 signature -> List<MixPart>\nmethodtypes-of:MixPart:\n 1 name -> String\n 1 parameters -> List<Param>\nmethodtypes-of:ObjectType:\n 1 &(other : ObjectType) -> ObjectType\n 1 getMethod(name : String) -> MethodType | noSuchMethod\n 1 isSubtypeOf(other : ObjectType) -> Boolean\n 1 isUnknown -> Boolean\n 1 methods -> List<MethodType>\n 1 |(other : ObjectType) -> ObjectType\nmethodtypes-of:Param:\n 1 name -> String\n 1 typeAnnotation -> ObjectType\nmodules:\n ast\n dialect\n errormessages\n identifierKinds\n io\n sys\n util\npath:\n staticTypes\npublic:\n MethodType\n MixPart\n ObjectType\n Param\n TypeError\n checker(1)\n for(1)doWithBreak(1)\n for(1)doWithContinue(1)\n mixPartNamed(1)parameters(1)\n thisDialect\ntypes:\n MethodType\n MixPart\n ObjectType\n Param\n";
              if (typeof originalSourceLines !== "undefined") {
                originalSourceLines["staticTypes"] = [
                  "#pragma noTypeChecks",
                  "#pragma ExtendedLineups",
                  "dialect \"dialect\"",
                  "",
                  "import \"ast\" as ast",
                  "import \"util\" as util",
                  "",
                  "inherits prelude.methods",
                  "",
                  "// Type error.",
                  "",
                  "def TypeError is public = CheckerFailure.refine \"TypeError\"",
                  "",
                  "// Method signature information consisting of the name, list of MixParts,",
                  "// return type and info on what types it specializes.",
                  "",
                  "type MethodType = {",
                  "    name -> String",
                  "    signature -> List⟦MixPart⟧",
                  "    returnType -> ObjectType",
                  "    isSpecialisationOf (other: MethodType) -> Boolean",
                  "}",
                  "",
                  "type Param = {",
                  "    name -> String",
                  "    typeAnnotation -> ObjectType",
                  "}",
                  "",
                  "// factory method to create parameters with given name and type",
                  "def aParam = object {",
                  "    // create parameter with name': type'",
                  "    class withName (name': String) ofType (type': ObjectType) -> Param {",
                  "        def name: String is public = name'",
                  "        def typeAnnotation: ObjectType is public = type'",
                  "        method asString is override { \"{name}:{typeAnnotation}\" }",
                  "    }",
                  "",
                  "    // create parameter with type', but use wildcard as name",
                  "    method ofType (type': Object) -> Param {",
                  "        withName \"_\" ofType (type')",
                  "    }",
                  "}",
                  "",
                  "type MixPart = {",
                  "    name -> String",
                  "    parameters -> List⟦Param⟧",
                  "}",
                  "",
                  "// create a mixPart from name and list of parameters ",
                  "class mixPartNamed (name': String)",
                  "        parameters (parameters': List⟦Param⟧) -> MixPart {",
                  "    def name: String is public = name'",
                  "    def parameters: List⟦Param⟧ is public = parameters'",
                  "}",
                  "",
                  "// A factory object to create method types",
                  "def aMethodType = object {",
                  "    // create method type from signature and return type",
                  "    // The name is constructed by gluing together part names",
                  "    class signature (signature': List⟦MixPart⟧)",
                  "          returnType (rType: ObjectType)-> MethodType {",
                  "        def signature: List⟦MixPart⟧ is public = signature'",
                  "        def returnType: ObjectType is public = rType",
                  "",
                  "        var name: String is readable:= \"\"",
                  "        var show: String:= \"\"",
                  "",
                  "        def fst = signature.at (1)",
                  "",
                  "        if (fst.parameters.size == 0) then {",
                  "            name:= fst.name",
                  "            show:= name",
                  "        } else {",
                  "            for (signature) do { part ->",
                  "                name:= \"{name}{part.name}()\"",
                  "                show:= \"{show}{part.name}(\"",
                  "                var once:= false",
                  "                for (part.parameters) do { param ->",
                  "                    if (once) then {",
                  "                        show:= \"{show}, \"",
                  "                    }",
                  "                    show:= \"{show}{param}\"",
                  "                    once:= true",
                  "                }",
                  "                show:= \"{show})\"",
                  "            }",
                  "",
                  "            name:= name.substringFrom (1) to (name.size - 2)",
                  "        }",
                  "",
                  "        show:= \"{show} -> {returnType}\"",
                  "",
                  "        // Determines if this method is a specialisation of the given one.",
                  "        method isSpecialisationOf (other: MethodType) -> Boolean {",
                  "            if (self.isMe(other)) then {",
                  "                return true",
                  "            }",
                  "",
                  "            if (name != other.name) then {",
                  "                return false",
                  "            }",
                  "",
                  "            if (other.signature.size != signature.size) then {",
                  "                return false",
                  "            }",
                  "",
                  "            for (signature) and (other.signature) do { part, part' ->",
                  "                if (part.name != part'.name) then {",
                  "                    return false",
                  "                }",
                  "",
                  "                for (part.parameters) and (part'.parameters) do { p, p' ->",
                  "                    def pt = p.typeAnnotation",
                  "                    def pt' = p'.typeAnnotation",
                  "",
                  "                    // Contravariant in parameter types.",
                  "                    if (pt'.isSubtypeOf (pt).not) then {",
                  "                        return false",
                  "                    }",
                  "                }",
                  "            }",
                  "",
                  "            return returnType.isSubtypeOf (other.returnType)",
                  "        }",
                  "",
                  "        def asString: String is public, override = show",
                  "    }",
                  "",
                  "    // create method type for methods without parameters",
                  "    method member (name: String) ofType (rType: ObjectType) -> MethodType {",
                  "        signature ([mixPartNamed (name) parameters [ ] ]) returnType (rType)",
                  "    }",
                  "",
                  "    // create method type from a node",
                  "    // Do obvious thing if method, class, or method signature",
                  "    // If it is a def or var, create method to return value",
                  "    method fromNode (node) -> MethodType {",
                  "        match (node) case { meth: Method | Class | MethodSignature ->",
                  "            def signature = []",
                  "",
                  "            for (meth.signature) do { part ->",
                  "                def params = []",
                  "",
                  "                for (part.params) do { param ->",
                  "                    params.push (aParam.withName (param.value)",
                  "                        ofType (objectType.fromDType (param.dtype)))",
                  "                }",
                  "",
                  "                signature.push (mixPartNamed (part.name) parameters (params))",
                  "            }",
                  "",
                  "            def rType = match (meth) case { m: Method | Class ->",
                  "                            m.dtype",
                  "                        } case { m: MethodSignature ->",
                  "                            meth.rtype",
                  "                        } case { _ -> }",
                  "",
                  "            return signature (signature)",
                  "                returnType (objectType.fromDType (rType))",
                  "        } case { defd: Def | Var ->",
                  "            def signature = [mixPartNamed (defd.name.value) parameters [ ] ]",
                  "            def dtype = objectType.fromDType (defd.dtype)",
                  "            return signature (signature) returnType (dtype)",
                  "        } case { _ ->",
                  "            prelude.Exception.raise \"unrecognised method node\" with (node)",
                  "        }",
                  "    }",
                  "",
                  "}",
                  "",
                  "",
                  "// Object type information.",
                  "",
                  "def noSuchMethod = Singleton.named \"noSuchMethod\"",
                  "",
                  "type ObjectType = {",
                  "    // return list of methods",
                  "    methods -> List⟦MethodType⟧",
                  "    // return method type matching name, if it exists",
                  "    getMethod (name: String) -> MethodType | noSuchMethod",
                  "    // return whether type is unknown",
                  "    isUnknown -> Boolean",
                  "    // return if type is subytpe of other",
                  "    isSubtypeOf (other: ObjectType) -> Boolean",
                  "    // create new types using |, &",
                  "    |(other: ObjectType) -> ObjectType",
                  "    &(other: ObjectType) -> ObjectType",
                  "}",
                  "",
                  "// Factory for creating object types",
                  "def objectType = object {",
                  "",
                  "    // return object type built from methods'",
                  "    class fromMethods (methods': List⟦MethodType⟧) -> ObjectType {",
                  "        def methods: List⟦MethodType⟧ is public = if (base == unknown)",
                  "            then { [] } else { base.methods } ++ methods'",
                  "",
                  "        method getMethod (name: String) -> MethodType | noSuchMethod {",
                  "            for (methods) do { meth ->",
                  "                if (meth.name == name) then {",
                  "                    return meth",
                  "                }",
                  "            }",
                  "",
                  "            return noSuchMethod",
                  "        }",
                  "",
                  "        def isUnknown: Boolean is public = false",
                  "",
                  "        // Necessary to prevent infinite loops of subtype testing.",
                  "        def currentlyTesting = []",
                  "",
                  "        method isSubtypeOf (other: ObjectType) -> Boolean {",
                  "            if (self.isMe(other)) then {",
                  "                return true",
                  "            }",
                  "",
                  "            if (other.isUnknown) then {",
                  "                return true",
                  "            }",
                  "",
                  "            // If this test is already being performed, assume it succeeds.",
                  "            if (currentlyTesting.contains (other)) then {",
                  "                return true",
                  "            }",
                  "",
                  "            currentlyTesting.push (other)",
                  "",
                  "            for (other.methods) doWithContinue { a, continue ->",
                  "                for (methods) do { b ->",
                  "                    if (b.isSpecialisationOf (a)) then {",
                  "                        continue.apply",
                  "                    }",
                  "                }",
                  "",
                  "                currentlyTesting.pop",
                  "                return false",
                  "            }",
                  "",
                  "            currentlyTesting.pop",
                  "            return true",
                  "        }",
                  "",
                  "        method |(other: ObjectType) -> ObjectType {",
                  "            if (self.isMe(other)) then { return self }",
                  "            if (other.isUnknown) then { return unknown }",
                  "",
                  "            def combine = []",
                  "",
                  "            for (methods) doWithContinue { meth, continue ->",
                  "                for (other.methods) do { meth'->",
                  "                    if (meth.name == meth'.name) then {",
                  "                        if (meth.isSpecialisationOf (meth')) then {",
                  "                            combine.push (meth)",
                  "                        } elseif { meth'.isSpecialisationOf (meth) } then {",
                  "                            combine.push (meth')",
                  "                        } else {",
                  "                            TypeError.raise (\"cannot produce intersection of \" ++",
                  "                                \"incompatible types '{self}' and '{other}'\")",
                  "                        }",
                  "",
                  "                        continue.apply",
                  "                    }",
                  "                }",
                  "            }",
                  "",
                  "            def hack = objectType",
                  "            return object {",
                  "                inherits hack.fromMethods (combine)",
                  "",
                  "                method asString -> String is override {",
                  "                    \"{outer} | {other}\"",
                  "                }",
                  "            }",
                  "        }",
                  "",
                  "        method &(other: ObjectType) -> ObjectType {",
                  "            if (self.isMe(other)) then { return self }",
                  "            if (other.isUnknown) then { return unknown }",
                  "",
                  "            def combine = []",
                  "            def twice = []",
                  "",
                  "            for (methods) doWithContinue { meth, continue ->",
                  "                for (other.methods) do { meth' ->",
                  "                    if (meth.name == meth'.name) then {",
                  "                        if (meth.isSpecialisationOf (meth')) then {",
                  "                            combine.push (meth)",
                  "                        } elseif { meth'.isSpecialisationOf (meth) } then {",
                  "                            combine.push (meth')",
                  "                        } else {",
                  "                            TypeError.raise (\"cannot produce union of \" ++",
                  "                                \"incompatible types '{self}' and '{other}'\")",
                  "                        }",
                  "",
                  "                        twice.push (meth.name)",
                  "",
                  "                        continue.apply",
                  "                    }",
                  "                }",
                  "",
                  "                combine.push (meth)",
                  "            }",
                  "",
                  "            for (other.methods) do { meth ->",
                  "                if (twice.contains (meth.name).not) then {",
                  "                    combine.push (meth)",
                  "                }",
                  "            }",
                  "",
                  "            def hack = objectType",
                  "            object {",
                  "                inherits hack.fromMethods (combine)",
                  "",
                  "                method asString -> String is override {",
                  "                    \"{outer} & {other}\"",
                  "                }",
                  "            }",
                  "        }",
                  "",
                  "        method asString -> String is override {",
                  "            if (methods.size == 3) then {",
                  "                return \"Object\"",
                  "            }",
                  "",
                  "            var out:= \"\\{ \"",
                  "",
                  "            for (methods) do { mtype ->",
                  "                if ([\"!=\", \"≠\", \"asString\", \"asDebugString\", \"::\"].contains (mtype.name).not) then {",
                  "                    out:= \"{out}{mtype}; \"",
                  "                }",
                  "            }",
                  "",
                  "            return \"{out}\\}\"",
                  "        }",
                  "    }",
                  "",
                  "    class fromMethods (methods': List⟦MethodType⟧)",
                  "            withName (name: String) -> ObjectType {",
                  "        inherits fromMethods (methods')",
                  "",
                  "        method asString is override { name }",
                  "        method ==(other) { self.isMe(other) }",
                  "    }",
                  "",
                  "    method fromDType (dtype) -> ObjectType {",
                  "        match (dtype) case { (false) ->",
                  "            unknown",
                  "        } case { lit: TypeDeclaration ->",
                  "//        TODO: re-write this code to understand the syntax of type expressions",
                  "//          and type declarations, which are not the same!",
                  "            return unknown",
                  "            def intersection = lit.intersectionTypes",
                  "            if (intersection.size > 1) then {",
                  "                var oType:= fromDType (intersection.first)",
                  "",
                  "                for (2..(intersection.size - 1)) do { i ->",
                  "                    oType:= oType & fromDType (intersection.at (i))",
                  "                }",
                  "",
                  "                return if (false ≠ lit.value) then {",
                  "                    object {",
                  "//                        inherits oType & fromDType (intersection.last)",
                  "                        inherits TypeIntersection.new (oType, fromDType (intersection.last))",
                  "",
                  "                        method asString is override { lit.value }",
                  "                    }",
                  "                } else {",
                  "                    oType & fromDType (intersection.last)",
                  "                }",
                  "            }",
                  "",
                  "            def union = lit.unionTypes",
                  "            if (union.size > 1) then {",
                  "                var oType:= fromDType (union.first)",
                  "",
                  "                for (2..(union.size - 1)) do { i ->",
                  "                    oType:= oType | fromDType (union.at (i))",
                  "                }",
                  "",
                  "                return if (false ≠ lit.value) then {",
                  "                    object {",
                  "//                        inherits oType | fromDType (union.last)",
                  "                        inherits TypeUnion.new (oType, fromDType (union.last))",
                  "                        def asString: String is public, override = lit.value",
                  "                    }",
                  "                } else {",
                  "                    oType | fromDType (union.last)",
                  "                }",
                  "            }",
                  "",
                  "            def meths = []",
                  "",
                  "            for (lit.methods) do { mType ->",
                  "                meths.push (aMethodType.fromNode (mType))",
                  "            }",
                  "",
                  "            if ((lit.value != false) && { lit.value.at (1) != \"<\" }) then {",
                  "                objectType.fromMethods (meths) withName (lit.value)",
                  "            } else {",
                  "                objectType.fromMethods (meths)",
                  "            }",
                  "        } case { ident: Identifier ->",
                  "            objectType.fromIdentifier (ident)",
                  "        } case { generic: Generic ->",
                  "//            TODO: figure out what to do here!",
                  "            objectType.fromIdentifier (generic.value)",
                  "        } case { _ ->",
                  "            ProgrammingError.raise \"No case for node of kind {dtype.kind}\" with (dtype)",
                  "        }",
                  "    }",
                  "",
                  "    method fromIdentifier (ident: Identifier) -> ObjectType {",
                  "        scope.types.find (ident.value) butIfMissing { unknown }",
                  "    }",
                  "",
                  "    method fromBlock (block) -> ObjectType {",
                  "        def bType = typeOf (block)",
                  "",
                  "        if (bType.isUnknown) then { return unknown }",
                  "",
                  "        def apply = bType.getMethod \"apply\"",
                  "",
                  "        match (apply) case { (noSuchMethod) ->",
                  "            TypeError.raise (\"the expression `{block.toGrace (0)}` of \" ++",
                  "                \"type '{bType}' does not satisfy the type 'Block'\") with (block)",
                  "        } case { meth: MethodType ->",
                  "            return meth.returnType",
                  "        } case { _ -> }",
                  "    }",
                  "",
                  "    method fromBlockBody (body) -> ObjectType {",
                  "        if (body.size == 0) then {",
                  "            objectType.done",
                  "        } else {",
                  "            typeOf (body.last)",
                  "        }",
                  "    }",
                  "",
                  "    def unknown:ObjectType is public = object {",
                  "        def methods is public = []",
                  "        method getMethod (_: String) -> noSuchMethod { noSuchMethod }",
                  "        def isUnknown: Boolean is public = true",
                  "        method isSubtypeOf (_: ObjectType) -> Boolean { true }",
                  "        method |(_: ObjectType) -> unknown { unknown }",
                  "        method &(_: ObjectType) -> unknown { unknown }",
                  "        def asString: String is public, override = \"Unknown\"",
                  "        method ==(other) { self.isMe(other) }",
                  "    }",
                  "",
                  "    method blockTaking (params: List⟦Parameter⟧)",
                  "            returning (rType: ObjectType) -> ObjectType {",
                  "        def signature = [mixPartNamed \"apply\" parameters (params)]",
                  "        def meths = [aMethodType.signature (signature) returnType (rType)]",
                  "",
                  "        fromMethods (meths) withName \"Block\"",
                  "    }",
                  "",
                  "    method blockReturning (rType: ObjectType) -> ObjectType {",
                  "        blockTaking [ ] returning (rType)",
                  "    }",
                  "",
                  "    method addTo (oType: ObjectType) name (name': String)",
                  "            returns (rType: ObjectType) -> Done is confidential {",
                  "        def signature = [mixPartNamed (name') parameters [ ] ]",
                  "        oType.methods.push (aMethodType.signature (signature) returnType (rType))",
                  "    }",
                  "",
                  "    method addTo (oType: ObjectType) name (name': String)",
                  "            params (ptypes: Iterable⟦ObjectType⟧) returns (rType: ObjectType)",
                  "            -> Done is confidential {",
                  "        def parameters = []",
                  "        for (ptypes) do { ptype ->",
                  "            parameters.push (aParam.ofType (ptype))",
                  "        }",
                  "",
                  "        def signature = [mixPartNamed (name') parameters (parameters)]",
                  "",
                  "        oType.methods.push (aMethodType.signature (signature) returnType (rType))",
                  "    }",
                  "",
                  "    method extend (this: ObjectType) with (that: ObjectType)",
                  "            -> Done is confidential {",
                  "        for (that.methods) do { mType ->",
                  "            this.methods.push (mType)",
                  "        }",
                  "    }",
                  "",
                  "    var base: ObjectType is readable := unknown     // to avoid a circularity",
                  "    def done: ObjectType is public = fromMethods [ ] withName \"Done\"",
                  "    base := fromMethods [ ] withName \"Object\"",
                  "",
                  "    def pattern: ObjectType is public = fromMethods [ ] withName \"Pattern\"",
                  "    def iterator: ObjectType is public = fromMethods [ ] withName \"Iterator\"",
                  "    def binding: ObjectType is public = fromMethods [ ] withName \"Binding\"",
                  "    def boolean: ObjectType is public = fromMethods [ ] withName \"Boolean\"",
                  "    def number: ObjectType is public = fromMethods [ ] withName \"Number\"",
                  "    def string: ObjectType is public = fromMethods [ ] withName \"String\"",
                  "    def list: ObjectType is public = fromMethods [ ] withName \"List\"",
                  "    def point: ObjectType is public = fromMethods [ ] withName \"Point\"",
                  "",
                  "    addTo (binding) name \"key\" returns (base)",
                  "    addTo (binding) name \"value\" returns (base)",
                  "",
                  "    addTo (base) name \"≠\" params [base] returns (boolean)",
                  "    addTo (base) name \"asDebugString\" returns (string)",
                  "    addTo (base) name \"asString\" returns (string)",
                  "    addTo (base) name \"::\" returns (binding)",
                  "    addTo (base) name \"emptyList\" returns (list)",
                  "",
                  "    extend (pattern) with (base)",
                  "    addTo (pattern) name \"match\" params [base] returns (unknown)",
                  "    addTo (pattern) name \"|\" params [pattern] returns (pattern)",
                  "    addTo (pattern) name \"&\" params [pattern] returns (pattern)",
                  "",
                  "    extend (iterator) with (base)",
                  "    addTo (iterator) name \"hasNext\" returns (boolean)",
                  "    addTo (iterator) name \"next\" returns (unknown)",
                  "",
                  "    def shortCircuit = blockTaking ([aParam.ofType (blockReturning (unknown))])",
                  "        returning (base)",
                  "    extend (boolean) with (base)",
                  "    addTo (boolean) name \"&&\" params [boolean] returns (boolean)",
                  "    addTo (boolean) name \"||\" params [boolean] returns (boolean)",
                  "    addTo (boolean) name \"prefix!\" returns (boolean)",
                  "    addTo (boolean) name \"not\" returns (boolean)",
                  "",
                  "    extend (number) with (base)",
                  "    addTo (number) name \"+\" params [number] returns (number)",
                  "    addTo (number) name \"*\" params [number] returns (number)",
                  "    addTo (number) name \"-\" params [number] returns (number)",
                  "    addTo (number) name \"/\" params [number] returns (number)",
                  "    addTo (number) name \"^\" params [number] returns (number)",
                  "    addTo (number) name \"%\" params [number] returns (number)",
                  "    addTo (number) name \"÷\" params [number] returns (number)",
                  "    addTo (number) name \"@\" params [number] returns (point)",
                  "    addTo (number) name \"hash\" returns (string)",
                  "    addTo (number) name \"++\" params [base] returns (string)",
                  "    addTo (number) name \"<\" params [number] returns (boolean)",
                  "    addTo (number) name \">\" params [number] returns (boolean)",
                  "    addTo (number) name \"≤\" params [number] returns (boolean)",
                  "    addTo (number) name \"≥\" params [number] returns (boolean)",
                  "    addTo (number) name \"..\" params [number] returns (list)",
                  "    addTo (number) name \"asInteger32\" returns (number)",
                  "    addTo (number) name \"prefix-\" returns (number)",
                  "    addTo (number) name \"inBase\" params [number] returns (number)",
                  "    addTo (number) name \"truncated\" returns (number)",
                  "    addTo (number) name \"rounded\" returns (number)",
                  "    addTo (number) name \"prefix⟦\" returns (pattern)",
                  "    addTo (number) name \"prefix⟧\" returns (pattern)",
                  "",
                  "    extend (point) with (base)",
                  "    addTo (point) name \"x\" returns (number)",
                  "    addTo (point) name \"y\" returns (number)",
                  "",
                  "    extend (string) with (base)",
                  "    addTo (string) name \"++\" params [base] returns (string)",
                  "    addTo (string) name \"at\" params [number] returns (string)",
                  "    addTo (string) name \"iterator\" returns (base)",
                  "    addTo (string) name \"quoted\" returns (string)",
                  "    addTo (string) name \"size\" returns (number)",
                  "    addTo (string) name \"iterator\" returns (iterator)",
                  "    addTo (string) name \"ord\" returns (number)",
                  "    addTo (string) name \"substringFrom()to\" params [number, number] returns (string)",
                  "    addTo (string) name \"replace()with\" params [string, string] returns (string)",
                  "    addTo (string) name \"hash\" returns (string)",
                  "    addTo (string) name \"indices\" returns (list)",
                  "    addTo (string) name \"asNumber\" returns (number)",
                  "",
                  "    def fold = blockTaking ([aParam.ofType (unknown), aParam.ofType (unknown)])",
                  "        returning (unknown)",
                  "    extend (list) with (base)",
                  "    addTo (list) name \"at\" params [number] returns (unknown)",
                  "    addTo (list) name \"at ()put\" params [number, unknown] returns (done)",
                  "    addTo (list) name \"push\" params [unknown] returns (done)",
                  "    addTo (list) name \"pop\" returns (unknown)",
                  "    addTo (list) name \"size\" returns (number)",
                  "    addTo (list) name \"iterator\" returns (iterator)",
                  "    addTo (list) name \"contains\" params [unknown] returns (boolean)",
                  "    addTo (list) name \"indices\" returns (list)",
                  "    addTo (list) name \"first\" returns (unknown)",
                  "    addTo (list) name \"last\" returns (unknown)",
                  "    addTo (list) name \"add\" params [unknown] returns (list)",
                  "    addTo (list) name \"addFirst\" params [unknown] returns (list)",
                  "    addTo (list) name \"addAll\" params [unknown] returns (list)",
                  "    addTo (list) name \"++\" params [list] returns (list)",
                  "    addTo (list) name \"fold()startingWith\" params [fold, unknown] returns (unknown)",
                  "",
                  "    scope.types.at \"Unknown\" put (unknown)",
                  "    scope.types.at \"Done\" put (done)",
                  "    scope.types.at \"Object\" put (base)",
                  "    scope.types.at \"Pattern\" put (pattern)",
                  "    scope.types.at \"Boolean\" put (boolean)",
                  "    scope.types.at \"Number\" put (number)",
                  "    scope.types.at \"String\" put (string)",
                  "    scope.types.at \"List\" put (list)",
                  "    scope.types.at \"Point\" put (point)",
                  "",
                  "    addVar \"Unknown\" ofType (pattern)",
                  "    addVar \"Dynamic\" ofType (pattern)",
                  "    addVar \"Done\" ofType (pattern)",
                  "    addVar \"Object\" ofType (pattern)",
                  "    addVar \"Pattern\" ofType (pattern)",
                  "    addVar \"Boolean\" ofType (pattern)",
                  "    addVar \"Number\" ofType (pattern)",
                  "    addVar \"String\" ofType (pattern)",
                  "    addVar \"List\" ofType (pattern)",
                  "    addVar \"Point\" ofType (pattern)",
                  "",
                  "    addVar \"done\" ofType (self.done)",
                  "    addVar \"true\" ofType (boolean)",
                  "    addVar \"false\" ofType (boolean)",
                  "    addVar \"emptyList\" ofType (list)",
                  "}",
                  "",
                  "method addVar (name: String) ofType (oType: ObjectType) is confidential {",
                  "    scope.variables.at (name) put (oType)",
                  "    scope.methods.at (name) put (aMethodType.member (name) ofType (oType))",
                  "}",
                  "",
                  "",
                  "// Object literals.",
                  "",
                  "def ObjectError = TypeError.refine \"ObjectError\"",
                  "",
                  "rule { obj: ObjectLiteral ->",
                  "    scope.enter { processBody (obj.value) }",
                  "}",
                  "",
                  "",
                  "// Simple literals.",
                  "",
                  "rule { _: NumberLiteral | OctetsLiteral ->",
                  "    objectType.number",
                  "}",
                  "",
                  "rule { _: StringLiteral ->",
                  "    objectType.string",
                  "}",
                  "",
                  "rule { _: ArrayLiteral ->",
                  "    objectType.list",
                  "}",
                  "",
                  "",
                  "// Method requests.",
                  "",
                  "def RequestError = TypeError.refine \"RequestError\"",
                  "",
                  "rule { req: Request ->",
                  "    match (req.value) case { memb: Member ->",
                  "        def rec = memb.receiver",
                  "        def rType = if (Identifier.match (rec) && (rec.value == \"self\")) then {",
                  "            scope.types.find \"Self\" butIfMissing {",
                  "                prelude.Exception.raise \"type of self missing\" with (rec)",
                  "            }",
                  "        } else {",
                  "            typeOf (rec)",
                  "        }",
                  "",
                  "        if (rType.isUnknown) then {",
                  "            objectType.unknown",
                  "        } else {",
                  "            def name = memb.value",
                  "",
                  "            match (rType.getMethod (name))",
                  "                case { (noSuchMethod) ->",
                  "                    RequestError.raise (\"no method `{name}` in \" ++",
                  "                        \"`{rec.toGrace (0)}` of type `{rType}`\") with (memb)",
                  "                } case { meth: MethodType ->",
                  "                    check (req) against (meth)",
                  "                }",
                  "        }",
                  "    } case { ident: Identifier ->",
                  "        find (req) atScope (scope.methods.stack.size)",
                  "    } case { _ -> }",
                  "}",
                  "",
                  "method check (req: Request)",
                  "        against (meth: MethodType) -> ObjectType is confidential {",
                  "    def name = meth.name",
                  "",
                  "    for (meth.signature) and (req.with) do { part, args' ->",
                  "        def params = part.parameters",
                  "        def args   = args'.args",
                  "",
                  "        def pSize = params.size",
                  "        def aSize = args.size",
                  "",
                  "        if (aSize != pSize) then {",
                  "            def which = if (aSize > pSize) then { \"many\" } else { \"few\" }",
                  "            def where = if (aSize > pSize) then {",
                  "                args.at (pSize + 1)",
                  "            } else {",
                  "                // Can we get beyond the final argument?",
                  "                req.value",
                  "            }",
                  "",
                  "            RequestError",
                  "                .raise (\"too {which} arguments to method part \" ++",
                  "                    \"'{part.name}', expected {pSize} but got {aSize}\")",
                  "                    with (where)",
                  "        }",
                  "",
                  "        for (params) and (args) do { param, arg ->",
                  "            def pType = param.typeAnnotation",
                  "            def aType = typeOf (arg)",
                  "",
                  "            if (typeOf (arg).isSubtypeOf (pType).not) then {",
                  "                RequestError.raise (\"the expression \" ++",
                  "                    \"`{arg.toGrace (0)}` of type '{aType}' does not \" ++",
                  "                    \"satisfy the type of parameter '{param}' in the \" ++",
                  "                    \"method '{name}'\") with (arg)",
                  "            }",
                  "        }",
                  "    }",
                  "",
                  "    return meth.returnType",
                  "}",
                  "",
                  "method find (req: Request) atScope (i: Number) -> ObjectType is confidential {",
                  "    if (i == 0) then {",
                  "        return objectType.unknown",
                  "    }",
                  "",
                  "    def sType = objectType.fromMethods (scope.methods.stack.at (i).values)",
                  "",
                  "    return match (sType.getMethod (req.value.value)) case { (noSuchMethod) ->",
                  "        find (req) atScope (i - 1)",
                  "    } case { meth: MethodType ->",
                  "        check (req) against (meth)",
                  "    } case { _ -> }",
                  "}",
                  "",
                  "rule { memb: Member ->",
                  "    typeOf (ast.callNode.new (memb, [object {",
                  "        def name is public = memb.value",
                  "        def args is public = []",
                  "    }]))",
                  "}",
                  "",
                  "rule { op: Operator ->",
                  "    def rec = op.left",
                  "    def rType = typeOf (rec)",
                  "",
                  "    if (rType.isUnknown) then {",
                  "        objectType.unknown",
                  "    } else {",
                  "        def name = op.value",
                  "",
                  "        match (rType.getMethod (name)) case { (noSuchMethod) ->",
                  "            RequestError.raise (\"no method '{name}' in \" ++",
                  "                \"`{rec.toGrace (0)}` of type '{rType}'\") with (op)",
                  "        } case { meth: MethodType ->",
                  "            def arg = op.right",
                  "            def params = meth.signature.first.parameters",
                  "",
                  "            if (params.size == 0) then {",
                  "                RequestError.raise (\"the definition of operator \" ++",
                  "                    \"`{name}` is missing its parameter\") with (op)",
                  "            }",
                  "",
                  "            def param = params.first",
                  "            def pType = param.typeAnnotation",
                  "",
                  "            if (typeOf (arg).isSubtypeOf (pType).not) then {",
                  "                RequestError.raise (\"the expression \" ++",
                  "                    \"`{arg.toGrace 0}` does not satisfy the type of \" ++",
                  "                    \"parameter `{param}` in the method `{name}`\") with (arg)",
                  "            }",
                  "",
                  "            meth.returnType",
                  "        } case { _ -> }",
                  "    }",
                  "}",
                  "",
                  "",
                  "// Special cases.",
                  "",
                  "rule { req: If ->",
                  "    def cond = req.value",
                  "    if (typeOf (cond).isSubtypeOf (objectType.boolean).not) then {",
                  "        RequestError.raise (\"the condition `{cond.toGrace 0}` does not \" ++",
                  "            \"conform to type `Boolean`.\") with (cond)",
                  "    }",
                  "",
                  "    def then = objectType.fromBlock (req.thenblock)",
                  "",
                  "    def else = objectType.fromBlock (req.elseblock)",
                  "",
                  "    then | else",
                  "}",
                  "",
                  "rule { req: MatchCase ->",
                  "    def cases = req.cases",
                  "    var union := done",
                  "",
                  "    for (cases) do { case ->",
                  "        def cType = objectType.fromBlock (case)",
                  "        union := if (done == union) then {",
                  "            cType",
                  "        } else {",
                  "            union | cType",
                  "        }",
                  "    }",
                  "    union",
                  "}",
                  "",
                  "rule { req: TryCatch ->",
                  "    match (req.value) case { bl: BlockLiteral ->",
                  "        def params = bl.params",
                  "        if (params.size > 0) then {",
                  "            RequestError.raise \"too many parameters for try block\" with (bl)",
                  "        }",
                  "    } case { _ -> }",
                  "",
                  "    for (req.cases) do { eachCase ->",
                  "        match (eachCase) case { bl: BlockLiteral ->",
                  "            def params = bl.params",
                  "            if (params.size != 1) then {",
                  "                def which = if (params.size == 0)",
                  "                    then { \"not enough\" } else { \"too many\" }",
                  "",
                  "                RequestError.raise \"{which} parameters for catch block\" with (bl)",
                  "            }",
                  "        } case { _ -> }",
                  "    }",
                  "",
                  "    if (false ≠ req.finally) then {",
                  "        match (req.finally) case { bl: BlockLiteral ->",
                  "            def params = bl.params",
                  "            if (params.size > 0) then {",
                  "                RequestError.raise \"too many parameters to finally\" with (bl)",
                  "            }",
                  "        } case { _ -> }",
                  "    }",
                  "",
                  "    objectType.done",
                  "}",
                  "",
                  "",
                  "// Method declaration.",
                  "",
                  "def MethodError = TypeError.refine \"MethodError\"",
                  "",
                  "rule { meth: Method ->",
                  "    def name = meth.value.value",
                  "    def mType = aMethodType.fromNode (meth)",
                  "    def returnType = mType.returnType",
                  "",
                  "    scope.enter {",
                  "        for (meth.signature) do { part ->",
                  "            for (part.params) do { param ->",
                  "                scope.variables.at (param.value)",
                  "                    put (objectType.fromDType (param.dtype))",
                  "            }",
                  "        }",
                  "",
                  "        collectTypes (meth.body)",
                  "",
                  "        for (meth.body) do { stmt ->",
                  "            checkTypes (stmt)",
                  "",
                  "            stmt.accept (object {",
                  "                inherits ast.baseVisitor",
                  "",
                  "                method visitReturn (ret) is override {",
                  "                    check (ret.value) matches (returnType) inMethod (name)",
                  "                    return false",
                  "                }",
                  "",
                  "                method visitMethod (node) is override {",
                  "                    false",
                  "                }",
                  "            })",
                  "        }",
                  "",
                  "        if (meth.body.size == 0) then {",
                  "            if (objectType.done.isSubtypeOf (returnType).not) then {",
                  "                MethodError.raise (\"method `{name}` declares a \" ++",
                  "                    \"result of type '{returnType}', but has no body\") with (meth)",
                  "            }",
                  "        } else {",
                  "            def lastNode = meth.body.last",
                  "            if (Return.match (lastNode).not) then {",
                  "                def lastType = typeOf (lastNode)",
                  "                if (lastType.isSubtypeOf (returnType).not) then {",
                  "                    MethodError.raise (\"method `{name}` declares a \" ++",
                  "                        \"result of type `{returnType}`, but returns an \" ++",
                  "                        \"expression of type `{lastType}`\") with (lastNode)",
                  "                }",
                  "            }",
                  "        }",
                  "    }",
                  "",
                  "    if (isMember (mType)) then {",
                  "        scope.variables.at (name) put (returnType)",
                  "    }",
                  "",
                  "    scope.methods.at (name) put (mType)",
                  "}",
                  "",
                  "method check (node) matches (eType: ObjectType)",
                  "        inMethod (name: String) -> Done is confidential {",
                  "    def aType = typeOf (node)",
                  "    if (aType.isSubtypeOf (eType).not) then {",
                  "        MethodError.raise (\"method `{name}` declares a result of \" ++",
                  "            \"type `{eType}`, but returns an expression of type \" ++",
                  "            \"`{aType}`\") with (node)",
                  "    }",
                  "}",
                  "",
                  "",
                  "// Class declaration.",
                  "",
                  "def ClassError = TypeError.refine \"ClassError\"",
                  "",
                  "rule { cls: Class ->",
                  "    def name = cls.name.value",
                  "    def dType = objectType.fromDType (cls.dtype)",
                  "    def cType = scope.enter {",
                  "        for (cls.signature) do { part ->",
                  "            for (part.params) do { param ->",
                  "                scope.variables.at (param.value)",
                  "                    put (objectType.fromDType (param.dtype))",
                  "            }",
                  "        }",
                  "",
                  "        def aType = processBody (cls.value)",
                  "        if (aType.isUnknown) then {",
                  "            objectType.unknown",
                  "        } else {",
                  "            if (aType.isSubtypeOf (dType).not) then {",
                  "                ClassError.raise (\"class `{name}` declares a result \" ++",
                  "                    \"of type `{dType}`, but constructs an object of type \" ++",
                  "                    \"`{aType}`\") with (cls)",
                  "            }",
                  "",
                  "            aType",
                  "        }",
                  "    }",
                  "",
                  "    scope.variables.at (name)",
                  "        put (objectType.fromMethods ([aMethodType.fromNode (cls)]))",
                  "",
                  "    if (dType.isUnknown) then {",
                  "        // Class type inference.",
                  "        cType",
                  "    } else {",
                  "        dType",
                  "    }",
                  "}",
                  "",
                  "",
                  "// Def and var declarations.",
                  "",
                  "def DefError = TypeError.refine \"DefError\"",
                  "",
                  "rule { defd: Def | Var ->",
                  "    var defType:= objectType.fromDType (defd.dtype)",
                  "",
                  "    def value = defd.value",
                  "",
                  "    if (value != false) then {",
                  "        def vType = typeOf (value)",
                  "",
                  "        if (defType.isUnknown && (defd.kind == \"defdec\")) then {",
                  "            defType:= vType",
                  "        }",
                  "",
                  "        if (vType.isSubtypeOf (defType).not) then {",
                  "            DefError.raise (\"the expression `{value.toGrace 0}` of type \" ++",
                  "                \"`{vType}` does not satisfy the type of {defd.kind} \" ++",
                  "                \"annotation `{defType}`\") with (value)",
                  "        }",
                  "    }",
                  "",
                  "    def name = defd.name.value",
                  "    scope.variables.at (name) put (defType)",
                  "",
                  "    for (defd.annotations) do { ann ->",
                  "        if (ann.value == \"public\") then {",
                  "            scope.methods.at (name) put (aMethodType.member (name) ofType (defType))",
                  "",
                  "            if (defd.kind == \"vardec\") then {",
                  "                def name' = name ++ \":=\"",
                  "                def param = aParam.withName (name) ofType (defType)",
                  "                def sig = [mixPartNamed (name') parameters ([param])]",
                  "",
                  "                scope.methods.at (name')",
                  "                    put (aMethodType.signature (sig) returnType (objectType.done))",
                  "            }",
                  "",
                  "            return",
                  "        }",
                  "    }",
                  "}",
                  "",
                  "rule { bind: Bind ->",
                  "    def dest = bind.dest",
                  "    def dType = typeOf (dest)",
                  "",
                  "    def value = bind.value",
                  "    def vType = typeOf (value)",
                  "",
                  "    if (vType.isSubtypeOf (dType).not) then {",
                  "        DefError.raise (\"the expression `{value.toGrace 0}` of type \" ++",
                  "            \"`{vType}` does not satisfy the type `{dType}` of \" ++",
                  "            \"`{dest.toGrace 0}`\") with (value)",
                  "    }",
                  "}",
                  "",
                  "",
                  "// Import declarations.",
                  "",
                  "rule { imp: Import ->",
                  "    scope.variables.at (imp.nameString) put (objectType.unknown)",
                  "}",
                  "",
                  "",
                  "// Block expressions.",
                  "",
                  "rule { block: BlockLiteral ->",
                  "    def body = block.body",
                  "",
                  "    scope.enter {",
                  "        for (block.params) do { param ->",
                  "            scope.variables.at (param.value)",
                  "                put (objectType.fromDType (param.dtype))",
                  "        }",
                  "",
                  "        collectTypes (body)",
                  "",
                  "        for (body) do { stmt ->",
                  "            checkTypes (stmt)",
                  "        }",
                  "    }",
                  "",
                  "    def parameters = []",
                  "    for (block.params) do { param ->",
                  "        parameters.push (aParam.withName (param.value)",
                  "            ofType (objectType.fromDType (param.dtype)))",
                  "    }",
                  "",
                  "    objectType.blockTaking (parameters)",
                  "        returning (objectType.fromBlockBody (body))",
                  "}",
                  "",
                  "",
                  "// Identifier references.",
                  "",
                  "rule { ident: Identifier ->",
                  "    match (ident.value) case { \"outer\" ->",
                  "        outerAt (scope.size)",
                  "    } case { _ ->",
                  "        scope.variables.find (ident.value) butIfMissing { objectType.unknown }",
                  "    }",
                  "}",
                  "",
                  "method outerAt (i: Number) -> ObjectType is confidential {",
                  "    // Required to cope with not knowing the prelude.",
                  "    if (i <= 1) then {",
                  "        return objectType.unknown",
                  "    }",
                  "",
                  "    def vStack = scope.variables.stack",
                  "    def curr = vStack.at (i)",
                  "",
                  "    return curr.atKey \"outer\" do { t -> t } else {",
                  "        def prev = outerAt (i - 1)",
                  "",
                  "        def mStack = scope.methods.stack",
                  "",
                  "        def vars = vStack.at (i - 1)",
                  "        def meths = mStack.at (i - 1).values",
                  "",
                  "        def oType = objectType.fromMethods (meths)",
                  "        def mType = aMethodType.member \"outer\" ofType (oType)",
                  "",
                  "        curr.at \"outer\" put (oType)",
                  "        mStack.at (i).at \"outer\" put (mType)",
                  "",
                  "        oType",
                  "    }",
                  "}",
                  "",
                  "",
                  "// Typing methods.",
                  "",
                  "method processBody (body: List) -> ObjectType is confidential {",
                  "    // Collect the declarative types directly in the object body.",
                  "    collectTypes (body)",
                  "",
                  "    // Inheritance typing.",
                  "    def hasInherits = (body.size > 0) && { Inherits.match (body.first) }",
                  "    def superType = if (hasInherits) then {",
                  "        def inheriting = body.first.value",
                  "        inheriting.accept (object {",
                  "            inherits ast.baseVisitor",
                  "",
                  "            def illegal = [\"self\", \"super\"]",
                  "",
                  "            method visitIdentifier (ident) {",
                  "                if (illegal.contains (ident.value)) then {",
                  "                    ObjectError.raise (\"reference to `{ident.value}` \" ++",
                  "                        \"in inheritance clause\") with (ident)",
                  "                }",
                  "            }",
                  "        })",
                  "",
                  "        typeOf (inheriting)",
                  "    } else {",
                  "        objectType.base",
                  "    }",
                  "",
                  "    scope.variables.at \"super\" put (superType)",
                  "",
                  "    // If the super type is unknown, then we can't know anything about the",
                  "    // self type.  TODO We actually can, because an object cannot have two",
                  "    // methods with the same name.",
                  "    def publicType = if (superType.isUnknown) then {",
                  "        scope.types.at \"Self\" put (superType)",
                  "        superType",
                  "    } else {",
                  "        // Collect the method types to add the two self types.",
                  "        def publicMethods = []",
                  "        def allMethods = []",
                  "",
                  "        for (body) do { stmt ->",
                  "            match (stmt) case { meth: Method ->",
                  "                def mType = aMethodType.fromNode (meth)",
                  "                allMethods.push (mType)",
                  "                if (isPublic (meth)) then {",
                  "                    publicMethods.push (mType)",
                  "                }",
                  "",
                  "                scope.methods.at (mType.name) put (mType)",
                  "                if (isMember (mType)) then {",
                  "                    scope.variables.at (mType.name) put (mType.returnType)",
                  "                }",
                  "            } case { defd: Def | Var ->",
                  "                if (isPublic (defd)) then {",
                  "                    def mType = aMethodType.fromNode (defd)",
                  "                    allMethods.push (mType)",
                  "                    publicMethods.push (mType)",
                  "                }",
                  "            } case { _ -> }",
                  "        }",
                  "",
                  "        scope.types.at \"Self\" put (objectType.fromMethods (allMethods))",
                  "        objectType.fromMethods (publicMethods)",
                  "    }",
                  "",
                  "    scope.variables.at \"self\" put (publicType)",
                  "",
                  "    // Type-check the object body.",
                  "    def indices = if (hasInherits) then {",
                  "        2..body.size",
                  "    } else {",
                  "        body.indices",
                  "    }",
                  "",
                  "    for (indices) do { i ->",
                  "        checkTypes (body.at (i))",
                  "    }",
                  "",
                  "    return publicType",
                  "}",
                  "",
                  "",
                  "def TypeDeclarationError = TypeError.refine \"TypeDeclarationError\"",
                  "",
                  "// The first pass over a body, collecting all type declarations so that they can",
                  "// reference one another declaratively.",
                  "method collectTypes (nodes: List) -> Done is confidential {",
                  "    def names = []",
                  "    def types = []",
                  "    def placeholders = []",
                  "",
                  "    for (nodes) do { node ->",
                  "        match (node) case { td: TypeDeclaration ->",
                  "            if (names.contains (td.nameString)) then {",
                  "                TypeDeclarationError.raise (\"the type {td.nameString} uses \" ++",
                  "                    \"the same name as another type in the same scope\") with (td)",
                  "            }",
                  "",
                  "            names.push (td.value)",
                  "",
                  "            // In order to allow the types to be declarative, the scope needs",
                  "            // to be populated by placeholder types first.",
                  "            def placeholder = objectType.unknown",
                  "            types.push (td)",
                  "            placeholders.push (placeholder)",
                  "            scope.types.at (td.nameString) put (placeholder)",
                  "        } case { _ -> }",
                  "    }",
                  "",
                  "    for (types) and (placeholders) do { td, ph ->",
                  "        def oType = objectType.fromDType (td)",
                  "        prelude.become (ph, oType)",
                  "    }",
                  "}",
                  "",
                  "",
                  "// Determines if a node is publicly available.",
                  "method isPublic (node: Method | Def | Var) -> Boolean is confidential {",
                  "    match (node) case { _: Method ->",
                  "        for (node.annotations) do { ann ->",
                  "            if (ann.value == \"confidential\") then {",
                  "                return false",
                  "            }",
                  "        }",
                  "",
                  "        true",
                  "    } case { _ ->",
                  "        for (node.annotations) do { ann ->",
                  "            if ((ann.value == \"public\") || (ann.value == \"readable\")) then {",
                  "                return true",
                  "            }",
                  "        }",
                  "",
                  "        false",
                  "    }",
                  "}",
                  "",
                  "",
                  "// Determines if a method will be accessed as a member.",
                  "method isMember (mType: MethodType) -> Boolean is confidential {",
                  "    (mType.signature.size == 1) && {",
                  "        mType.signature.first.parameters.size == 0",
                  "    }",
                  "}",
                  "",
                  "",
                  "// Helper methods.",
                  "",
                  "",
                  "// For loop with break.",
                  "method for (a) doWithBreak (bl) -> Done {",
                  "    for (a) do { e ->",
                  "        bl.apply (e, {",
                  "            return",
                  "        })",
                  "    }",
                  "}",
                  "",
                  "// For loop with continue.",
                  "method for (a) doWithContinue (bl) -> Done {",
                  "    for (a) do { e ->",
                  "        continue'(e, bl)",
                  "    }",
                  "}",
                  "",
                  "method continue'(e, bl) -> Done is confidential {",
                  "    bl.apply (e, {",
                  "        return",
                  "    })",
                  "}",
                  "",
                  "",
                  "// Run the type rules.",
                  "method checker (nodes) {",
                  "    check (nodes)",
                  "}",
                  "",
                  "def thisDialect is public = object {",
                  "    method parseChecker (moduleObj) { check (moduleObj) }",
                  "    method astChecker (moduleObj) { check (moduleObj) }",
                  "    method atStart { print \"module start\" }",
                  "    method atEnd { print \"module end\" }",
                  "}" ];
              }
              if (typeof global !== "undefined")
                global.gracecode_staticTypes = gracecode_staticTypes;
              if (typeof window !== "undefined")
                window.gracecode_staticTypes = gracecode_staticTypes;
