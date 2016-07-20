"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_requireTypes() {
  setModuleName("requireTypes");
  this.definitionModule = "requireTypes";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_requireTypes_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_requireTypes_outer0;
  setLineNumber(1);    // compilenode import
  // Import of ast as ast
  if (typeof gracecode_ast == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module ast'));
  var var_ast = do_import("ast", gracecode_ast);
  var func1 = function(argcv) {    // method ast
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("requireTypes");
    // ast is a simple accessor - elide try ... catch
    return var_ast;
  };
  func1.paramCounts = [0];
  this.methods["ast"] = func1;
  func1.definitionLine = 1;
  func1.definitionModule = "requireTypes";
  func1.debug = "import";
  func1.confidential = true;
  setModuleName("requireTypes");
  setLineNumber(2);    // compilenode identifier
  // call case 5: prelude request
  var call3 = callmethodChecked(var_prelude, "methods$object(1)", [0, 1], this);
  this.superobj = call3;
  if (call3.data) this.data = call3.data;
  if (call3.hasOwnProperty('_value'))
      this._value = call3._value;
  setLineNumber(45);    // compilenode method
  var func4 = function(argcv) {    // method checker(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_values = arguments[curarg];
    curarg++;
    setModuleName("requireTypes");
    setLineNumber(46);    // compilenode string
    var string5 = new GraceString("starting checker");
    var call6 = Grace_print(string5);
    setLineNumber(47);    // compilenode block
    var block8 = new GraceBlock(this, 47, 1);
    setLineNumber(1);    // compilenode identifier
    block8.real = function(var_v) {
      setLineNumber(48);    // compilenode identifier
      // call case 6: other requests
      var call10 = callmethodChecked(var_v, "accept(1)", [1], var_staticVisitor);
      return call10;
    };
    // call case 5: prelude request
    var call11 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_values, block8);
    return call11;
  };
  func4.paramCounts = [1];
  this.methods["checker(1)"] = func4;
  func4.definitionLine = 45;
  func4.definitionModule = "requireTypes";
  setLineNumber(4);    // compilenode string
  var string13 = new GraceString("CheckerFailure");
  // call case 6: other requests
  // call case 5: prelude request
  var call15 = callmethodChecked(var_prelude, "Exception", []);
  var call16 = callmethodChecked(call15, "refine(1)", [1], string13);
  var var_CheckerFailure = call16;
  setLineNumber(1);    // compilenode method
  var func17 = function(argcv) {    // method CheckerFailure
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("requireTypes");
    // CheckerFailure is a simple accessor - elide try ... catch
    setLineNumber(4);    // compilenode identifier
    return var_CheckerFailure;
  };
  func17.paramCounts = [0];
  this.methods["CheckerFailure"] = func17;
  func17.definitionLine = 1;
  func17.definitionModule = "requireTypes";
  this.methods["CheckerFailure"].debug = "def";
  setLineNumber(5);    // compilenode object
  var obj18 = Grace_allocObject(null, "staticVisitor");
  obj18.definitionModule = "requireTypes";
  obj18.definitionLine = 5;
  obj18.outer = this;
  var reader_requireTypes_outer19 = function() {
    return this.outer;
  };
  obj18.methods["outer"] = reader_requireTypes_outer19;
  var obj_init_18 = function() {
    var origSuperDepth = superDepth;
    superDepth = obj18;
    var func20 = function(argcv) {    // method asString
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      setModuleName("requireTypes");
      setLineNumber(8);    // compilenode string
      var string21 = new GraceString("the requireTypes visitor");
      return string21;
    };
    func20.paramCounts = [0];
    obj18.methods["asString"] = func20;
    func20.definitionLine = 7;
    func20.definitionModule = "requireTypes";
    var func22 = function(argcv) {    // method visitDefDec(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_v = arguments[curarg];
      curarg++;
      setModuleName("requireTypes");
      setLineNumber(12);    // compilenode string
      var string23 = new GraceString("");
      // call case 6: other requests
      var call26 = callmethodChecked(var_v, "pretty(1)", [1], new GraceNum(0));
      var string28 = new GraceString("visiting def dec ");
      var opresult30 = callmethodChecked(string28, "++(1)", [1], call26);
      var opresult32 = callmethodChecked(opresult30, "++(1)", [1], string23);
      var call33 = Grace_print(opresult32);
      var if34 = GraceDone;
      setLineNumber(13);    // compilenode member
      // call case 6: other requests
      var call36 = callmethodChecked(var_v, "dtype", []);
      var opresult39 = callmethodChecked(GraceFalse, "==(1)", [1], call36);
      if (Grace_isTrue(opresult39)) {
        setLineNumber(15);    // compilenode string
        var string41 = new GraceString("'");
        // call case 6: other requests
        // call case 6: other requests
        var call45 = callmethodChecked(var_v, "name", []);
        var call46 = callmethodChecked(call45, "value", []);
        var string48 = new GraceString(" of def '");
        var opresult50 = callmethodChecked(string48, "++(1)", [1], call46);
        var opresult52 = callmethodChecked(opresult50, "++(1)", [1], string41);
        setLineNumber(14);    // compilenode string
        var string54 = new GraceString("no type given to declaration");
        var opresult56 = callmethodChecked(string54, "++(1)", [1], opresult52);
        setLineNumber(15);    // compilenode member
        // call case 6: other requests
        var call58 = callmethodChecked(var_v, "name", []);
        // call case 6: other requests
        setLineNumber(14);    // compilenode identifier
        var call59 = callmethodChecked(var_CheckerFailure, "raise(1)with(1)", [1, 1], opresult56, call58);
        if34 = call59;
      }
      return if34;
    };
    func22.paramCounts = [1];
    obj18.methods["visitDefDec(1)"] = func22;
    func22.definitionLine = 11;
    func22.definitionModule = "requireTypes";
    var func60 = function(argcv) {    // method visitVarDec(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_v = arguments[curarg];
      curarg++;
      setModuleName("requireTypes");
      var if61 = GraceDone;
      setLineNumber(19);    // compilenode member
      // call case 6: other requests
      var call63 = callmethodChecked(var_v, "dtype", []);
      var opresult66 = callmethodChecked(GraceFalse, "==(1)", [1], call63);
      if (Grace_isTrue(opresult66)) {
        setLineNumber(21);    // compilenode string
        var string68 = new GraceString("'");
        // call case 6: other requests
        // call case 6: other requests
        var call72 = callmethodChecked(var_v, "name", []);
        var call73 = callmethodChecked(call72, "value", []);
        var string75 = new GraceString(" of var '");
        var opresult77 = callmethodChecked(string75, "++(1)", [1], call73);
        var opresult79 = callmethodChecked(opresult77, "++(1)", [1], string68);
        setLineNumber(20);    // compilenode string
        var string81 = new GraceString("no type given to declaration");
        var opresult83 = callmethodChecked(string81, "++(1)", [1], opresult79);
        setLineNumber(21);    // compilenode member
        // call case 6: other requests
        var call85 = callmethodChecked(var_v, "name", []);
        // call case 6: other requests
        setLineNumber(20);    // compilenode identifier
        var call86 = callmethodChecked(var_CheckerFailure, "raise(1)with(1)", [1, 1], opresult83, call85);
        if61 = call86;
      }
      return if61;
    };
    func60.paramCounts = [1];
    obj18.methods["visitVarDec(1)"] = func60;
    func60.definitionLine = 18;
    func60.definitionModule = "requireTypes";
    var func87 = function(argcv) {    // method visitMethod(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_v = arguments[curarg];
      curarg++;
      setModuleName("requireTypes");
      setLineNumber(25);    // compilenode member
      // call case 6: other requests
      var call90 = callmethodChecked(var_v, "signature", []);
      var block91 = new GraceBlock(this, 25, 1);
      setLineNumber(1);    // compilenode identifier
      block91.real = function(var_p) {
        var if92 = GraceDone;
        setLineNumber(26);    // compilenode block
        var block93 = new GraceBlock(this, 26, 0);
        block93.real = function() {
          // call case 6: other requests
          var call95 = callmethodChecked(var_p, "dtype", []);
          var opresult98 = callmethodChecked(GraceFalse, "==(1)", [1], call95);
          // call case 6: other requests
          // call case 6: other requests
          var call102 = callmethodChecked(var_p, "wildcard", []);
          var call103 = callmethodChecked(call102, "not", []);
          var opresult105 = callmethodChecked(call103, "&&(1)", [1], opresult98);
          return opresult105;
        };
        // call case 6: other requests
        var call108 = callmethodChecked(var_p, "isIdentifier", []);
        var opresult110 = callmethodChecked(call108, "&&(1)", [1], block93);
        if (Grace_isTrue(opresult110)) {
          setLineNumber(28);    // compilenode string
          var string112 = new GraceString("'");
          // call case 6: other requests
          var call115 = callmethodChecked(var_p, "value", []);
          var string117 = new GraceString(" of parameter '");
          var opresult119 = callmethodChecked(string117, "++(1)", [1], call115);
          var opresult121 = callmethodChecked(opresult119, "++(1)", [1], string112);
          setLineNumber(27);    // compilenode string
          var string123 = new GraceString("no type given to declaration");
          var opresult125 = callmethodChecked(string123, "++(1)", [1], opresult121);
          setLineNumber(28);    // compilenode identifier
          // call case 6: other requests
          setLineNumber(27);    // compilenode identifier
          var call126 = callmethodChecked(var_CheckerFailure, "raise(1)with(1)", [1, 1], opresult125, var_p);
          if92 = call126;
        }
        return if92;
      };
      // call case 5: prelude request
      var call127 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call90, block91);
      var if128 = GraceDone;
      setLineNumber(31);    // compilenode member
      // call case 6: other requests
      var call130 = callmethodChecked(var_v, "dtype", []);
      var opresult133 = callmethodChecked(GraceFalse, "==(1)", [1], call130);
      if (Grace_isTrue(opresult133)) {
        setLineNumber(33);    // compilenode string
        var string135 = new GraceString("'");
        // call case 6: other requests
        // call case 6: other requests
        var call139 = callmethodChecked(var_v, "value", []);
        var call140 = callmethodChecked(call139, "value", []);
        var string142 = new GraceString(" of method '");
        var opresult144 = callmethodChecked(string142, "++(1)", [1], call140);
        var opresult146 = callmethodChecked(opresult144, "++(1)", [1], string135);
        setLineNumber(32);    // compilenode string
        var string148 = new GraceString("no return type given to declaration");
        var opresult150 = callmethodChecked(string148, "++(1)", [1], opresult146);
        setLineNumber(33);    // compilenode member
        // call case 6: other requests
        var call152 = callmethodChecked(var_v, "value", []);
        // call case 6: other requests
        setLineNumber(32);    // compilenode identifier
        var call153 = callmethodChecked(var_CheckerFailure, "raise(1)with(1)", [1, 1], opresult150, call152);
        if128 = call153;
      }
      return if128;
    };
    func87.paramCounts = [1];
    obj18.methods["visitMethod(1)"] = func87;
    func87.definitionLine = 24;
    func87.definitionModule = "requireTypes";
    var func154 = function(argcv) {    // method visitBlock(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_v = arguments[curarg];
      curarg++;
      setModuleName("requireTypes");
      setLineNumber(37);    // compilenode member
      // call case 6: other requests
      var call157 = callmethodChecked(var_v, "params", []);
      var block158 = new GraceBlock(this, 37, 1);
      setLineNumber(1);    // compilenode identifier
      block158.real = function(var_p) {
        var if159 = GraceDone;
        setLineNumber(38);    // compilenode block
        var block160 = new GraceBlock(this, 38, 0);
        block160.real = function() {
          // call case 6: other requests
          var call162 = callmethodChecked(var_p, "dtype", []);
          var opresult165 = callmethodChecked(GraceFalse, "==(1)", [1], call162);
          // call case 6: other requests
          // call case 6: other requests
          var call169 = callmethodChecked(var_p, "wildcard", []);
          var call170 = callmethodChecked(call169, "not", []);
          var opresult172 = callmethodChecked(call170, "&&(1)", [1], opresult165);
          return opresult172;
        };
        // call case 6: other requests
        var call175 = callmethodChecked(var_p, "isIdentifier", []);
        var opresult177 = callmethodChecked(call175, "&&(1)", [1], block160);
        if (Grace_isTrue(opresult177)) {
          setLineNumber(40);    // compilenode string
          var string179 = new GraceString("'");
          // call case 6: other requests
          var call182 = callmethodChecked(var_p, "value", []);
          var string184 = new GraceString(" of block parameter '");
          var opresult186 = callmethodChecked(string184, "++(1)", [1], call182);
          var opresult188 = callmethodChecked(opresult186, "++(1)", [1], string179);
          setLineNumber(39);    // compilenode string
          var string190 = new GraceString("no type given to declaration");
          var opresult192 = callmethodChecked(string190, "++(1)", [1], opresult188);
          setLineNumber(40);    // compilenode identifier
          // call case 6: other requests
          setLineNumber(39);    // compilenode identifier
          var call193 = callmethodChecked(var_CheckerFailure, "raise(1)with(1)", [1, 1], opresult192, var_p);
          if159 = call193;
        }
        return if159;
      };
      // call case 5: prelude request
      var call194 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call157, block158);
      return call194;
    };
    func154.paramCounts = [1];
    obj18.methods["visitBlock(1)"] = func154;
    func154.definitionLine = 36;
    func154.definitionModule = "requireTypes";
    setLineNumber(6);    // compilenode identifier
    // call case 6: other requests
    var call196 = callmethodChecked(var_ast, "baseVisitor$object(1)", [0, 1], this);
    obj18.superobj = call196;
    if (call196.data) obj18.data = call196.data;
    if (call196.hasOwnProperty('_value'))
        obj18._value = call196._value;
    superDepth = origSuperDepth;
  };
  obj_init_18.apply(obj18, []);
  var var_staticVisitor = obj18;
  setLineNumber(1);    // compilenode method
  var func197 = function(argcv) {    // method staticVisitor
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("requireTypes");
    // staticVisitor is a simple accessor - elide try ... catch
    setLineNumber(5);    // compilenode identifier
    return var_staticVisitor;
  };
  func197.paramCounts = [0];
  this.methods["staticVisitor"] = func197;
  func197.definitionLine = 1;
  func197.definitionModule = "requireTypes";
  this.methods["staticVisitor"].debug = "def";
  return this;
}
gracecode_requireTypes.imports = ['ast'];
if (typeof gctCache !== "undefined")
  gctCache['requireTypes'] = "classes:\nconfidential:\nfresh-methods:\nmodules:\n ast\n identifierKinds\n util\npath:\n requireTypes\npublic:\n AndPattern\n BaseType\n BasicPattern\n Binding\n BindingPattern\n Block0\n Block1\n Block2\n Block3\n BoundsError\n Cmd\n Collection\n ConcurrentModification\n Dictionary\n Enumerable\n ExceptionKind\n Expandable\n Extractable\n FailedMatch\n Fun\n Fun2\n Fun3\n Iterable\n Iterator\n IteratorExhausted\n List\n MatchAndDestructuringPattern\n MatchResult\n NoSuchObject\n OrPattern\n Pattern\n Point\n Proc\n Proc2\n Proc3\n RequestError\n Sequence\n Set\n Singleton\n SubobjectResponsibility\n SuccessfulMatch\n TypeIntersection\n TypeSubtraction\n TypeUnion\n TypeVariant\n UninitializedVariable\n VariablePattern\n WildcardPattern\n abstract\n alwaysEqual\n binding\n checker(1)\n collection\n collections\n dictionary(1)\n do(1)while(1)\n emptyDictionary\n emptyList\n emptySequence\n emptySet\n enumerable\n for(1)and(1)do(1)\n indexable\n list(1)\n max(2)\n methods\n min(2)\n point2Dx(1)y(1)\n range\n repeat(1)times(1)\n required\n sequence(1)\n set(1)\n valueOf(1)\ntypes:\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["requireTypes"] = [
    "import \"ast\" as ast",
    "inherits prelude.methods",
    "",
    "def CheckerFailure = Exception.refine \"CheckerFailure\"",
    "def staticVisitor = object {",
    "    inherits ast.baseVisitor",
    "    method asString {",
    "        \"the requireTypes visitor\"",
    "    }",
    "",
    "    method visitDefDec(v) is public {",
    "        print \"visiting def dec {v.pretty 0}\"",
    "        if (false == v.dtype) then {",
    "            CheckerFailure.raise (\"no type given to declaration\"",
    "                ++ \" of def '{v.name.value}'\") with (v.name)",
    "        }",
    "    }",
    "    method visitVarDec(v) is public {",
    "        if (false == v.dtype) then {",
    "            CheckerFailure.raise (\"no type given to declaration\"",
    "                ++ \" of var '{v.name.value}'\") with (v.name)",
    "        }",
    "    }",
    "    method visitMethod(v) is public {",
    "        for (v.signature) do {p ->",
    "            if (p.isIdentifier && {p.wildcard.not && (false == p.dtype)}) then {",
    "                CheckerFailure.raise (\"no type given to declaration\"",
    "                    ++ \" of parameter '{p.value}'\") with (p)",
    "            }",
    "        }",
    "        if (false == v.dtype) then {",
    "            CheckerFailure.raise (\"no return type given to declaration\"",
    "                ++ \" of method '{v.value.value}'\") with (v.value)",
    "        }",
    "    }",
    "    method visitBlock(v) is public {",
    "        for (v.params) do {p ->",
    "            if (p.isIdentifier && {p.wildcard.not && (false == p.dtype)}) then {",
    "                CheckerFailure.raise (\"no type given to declaration\"",
    "                    ++ \" of block parameter '{p.value}'\") with (p)",
    "            }",
    "        }",
    "    }",
    "}",
    "method checker(values) is public {",
    "    print \"starting checker\"",
    "    for (values) do {v->",
    "        v.accept(staticVisitor)",
    "    }",
    "}" ];
}
if (typeof global !== "undefined")
  global.gracecode_requireTypes = gracecode_requireTypes;
if (typeof window !== "undefined")
  window.gracecode_requireTypes = gracecode_requireTypes;
