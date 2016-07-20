"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_animation() {
  setModuleName("animation");
  this.definitionModule = "animation";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_animation_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_animation_outer0;
  setLineNumber(1);    // compilenode import
  // Import of timer as timer
  if (typeof gracecode_timer == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module timer'));
  var var_timer = do_import("timer", gracecode_timer);
  var func1 = function(argcv) {    // method timer
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("animation");
    // timer is a simple accessor - elide try ... catch
    return var_timer;
  };
  func1.paramCounts = [0];
  this.methods["timer"] = func1;
  func1.definitionLine = 1;
  func1.definitionModule = "animation";
  func1.debug = "import";
  func1.confidential = true;
  setModuleName("animation");
  setLineNumber(34);    // compilenode method
  var func2 = function(argcv) {    // method while(_)pausing(_)do(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_condition = arguments[curarg];
    curarg++;
    var var_pauseTime = arguments[curarg];
    curarg++;
    var var_block = arguments[curarg];
    curarg++;
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_BoolBlock, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in while (arg list 1), which corresponds to parameter condition, does not have " + 
                callmethod(var_BoolBlock, "asString", [0])._value + "."));
    curarg++;
    if (!Grace_isTrue(callmethod(var_Number, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in pausing (arg list 2), which corresponds to parameter pauseTime, does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    curarg++;
    if (!Grace_isTrue(callmethod(var_Procedure, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in do (arg list 3), which corresponds to parameter block, does not have " + 
                callmethod(var_Procedure, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("animation");
    setLineNumber(35);    // compilenode block
    var block4 = new GraceBlock(this, 35, 0);
    block4.real = function() {
      var if5 = GraceDone;
      setLineNumber(36);    // compilenode member
      // call case 6: other requests
      var call7 = callmethodChecked(var_condition, "apply", []);
      if (Grace_isTrue(call7)) {
        setLineNumber(37);    // compilenode member
        // call case 6: other requests
        var call9 = callmethodChecked(var_block, "apply", []);
        if5 = call9;
      } else {
        setLineNumber(39);    // compilenode identifier
        // call case 6: other requests
        var call11 = callmethodChecked(var_timer, "stop(1)", [1], var_id);
        if5 = call11;
      }
      return if5;
    };
    // call case 6: other requests
    setLineNumber(35);    // compilenode identifier
    var call12 = callmethodChecked(var_timer, "every(1)do(1)", [1, 1], var_pauseTime, block4);
    var var_id = call12;
    if (!Grace_isTrue(callmethod(var_Number, "match(1)", [1], var_id)))
      throw new GraceExceptionPacket(TypeErrorObject,
          new GraceString("value of def 'id' is not of type Number"));
    if (!Grace_isTrue(callmethod(var_Done, "match(1)", [1], GraceDone)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("result of method while(_)pausing(_)do(_) does not have " + 
                callmethod(var_Done, "asString", [0])._value + "."));
    return GraceDone;
  };
  func2.paramTypes = [];
  func2.paramTypes.push([]);
  func2.paramTypes.push([type_Number, "pauseTime"]);
  func2.paramTypes.push([]);
  func2.paramCounts = [1, 1, 1];
  this.methods["while(1)pausing(1)do(1)"] = func2;
  func2.definitionLine = 34;
  func2.definitionModule = "animation";
  setLineNumber(46);    // compilenode method
  var func13 = function(argcv) {    // method while(_)pausing(_)do(_)finally(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_condition = arguments[curarg];
    curarg++;
    var var_pauseTime = arguments[curarg];
    curarg++;
    var var_block = arguments[curarg];
    curarg++;
    var var_endBlock = arguments[curarg];
    curarg++;
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_BoolBlock, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in while (arg list 1), which corresponds to parameter condition, does not have " + 
                callmethod(var_BoolBlock, "asString", [0])._value + "."));
    curarg++;
    if (!Grace_isTrue(callmethod(var_Number, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in pausing (arg list 2), which corresponds to parameter pauseTime, does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    curarg++;
    if (!Grace_isTrue(callmethod(var_Procedure, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in do (arg list 3), which corresponds to parameter block, does not have " + 
                callmethod(var_Procedure, "asString", [0])._value + "."));
    curarg++;
    setLineNumber(47);    // compilenode identifier
    if (!Grace_isTrue(callmethod(var_Procedure, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in finally (arg list 4), which corresponds to parameter endBlock, does not have " + 
                callmethod(var_Procedure, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("animation");
    setLineNumber(48);    // compilenode block
    var block15 = new GraceBlock(this, 48, 0);
    block15.real = function() {
      var if16 = GraceDone;
      setLineNumber(49);    // compilenode member
      // call case 6: other requests
      var call18 = callmethodChecked(var_condition, "apply", []);
      if (Grace_isTrue(call18)) {
        setLineNumber(50);    // compilenode member
        // call case 6: other requests
        var call20 = callmethodChecked(var_block, "apply", []);
        if16 = call20;
      } else {
        setLineNumber(52);    // compilenode identifier
        // call case 6: other requests
        var call22 = callmethodChecked(var_timer, "stop(1)", [1], var_id);
        setLineNumber(53);    // compilenode member
        // call case 6: other requests
        var call24 = callmethodChecked(var_endBlock, "apply", []);
        if16 = call24;
      }
      return if16;
    };
    // call case 6: other requests
    setLineNumber(48);    // compilenode identifier
    var call25 = callmethodChecked(var_timer, "every(1)do(1)", [1, 1], var_pauseTime, block15);
    var var_id = call25;
    if (!Grace_isTrue(callmethod(var_Number, "match(1)", [1], var_id)))
      throw new GraceExceptionPacket(TypeErrorObject,
          new GraceString("value of def 'id' is not of type Number"));
    if (!Grace_isTrue(callmethod(var_Done, "match(1)", [1], GraceDone)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("result of method while(_)pausing(_)do(_)finally(_) does not have " + 
                callmethod(var_Done, "asString", [0])._value + "."));
    return GraceDone;
  };
  func13.paramTypes = [];
  func13.paramTypes.push([]);
  func13.paramTypes.push([type_Number, "pauseTime"]);
  func13.paramTypes.push([]);
  func13.paramTypes.push([]);
  func13.paramCounts = [1, 1, 1, 1];
  this.methods["while(1)pausing(1)do(1)finally(1)"] = func13;
  func13.definitionLine = 46;
  func13.definitionModule = "animation";
  setLineNumber(60);    // compilenode method
  var func26 = function(argcv) {    // method while(_)pauseVarying(_)do(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_condition = arguments[curarg];
    curarg++;
    var var_timeBlock = arguments[curarg];
    curarg++;
    var var_block = arguments[curarg];
    curarg++;
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_BoolBlock, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in while (arg list 1), which corresponds to parameter condition, does not have " + 
                callmethod(var_BoolBlock, "asString", [0])._value + "."));
    curarg++;
    curarg++;
    if (!Grace_isTrue(callmethod(var_Procedure, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in do (arg list 3), which corresponds to parameter block, does not have " + 
                callmethod(var_Procedure, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("animation");
    var if27 = GraceDone;
    setLineNumber(61);    // compilenode member
    // call case 6: other requests
    var call29 = callmethodChecked(var_condition, "apply", []);
    if (Grace_isTrue(call29)) {
      setLineNumber(62);    // compilenode member
      // call case 6: other requests
      var call31 = callmethodChecked(var_block, "apply", []);
      setLineNumber(63);    // compilenode member
      // call case 6: other requests
      var call34 = callmethodChecked(var_timeBlock, "apply", []);
      var block35 = new GraceBlock(this, 63, 0);
      block35.real = function() {
        setLineNumber(64);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call37 = callmethodChecked(this, "while(1)pauseVarying(1)do(1)", [1, 1, 1], var_condition, var_timeBlock, var_block);
        return call37;
      };
      // call case 6: other requests
      setLineNumber(63);    // compilenode identifier
      var call38 = callmethodChecked(var_timer, "after(1)do(1)", [1, 1], call34, block35);
      if27 = call38;
    }
    setLineNumber(61);    // return value
    if (!Grace_isTrue(callmethod(var_Done, "match(1)", [1], if27)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("result of method while(_)pauseVarying(_)do(_) does not have " + 
                callmethod(var_Done, "asString", [0])._value + "."));
    return if27;
  };
  func26.paramTypes = [];
  func26.paramTypes.push([]);
  func26.paramTypes.push([]);
  func26.paramTypes.push([]);
  func26.paramCounts = [1, 1, 1];
  this.methods["while(1)pauseVarying(1)do(1)"] = func26;
  func26.definitionLine = 60;
  func26.definitionModule = "animation";
  setLineNumber(71);    // compilenode method
  var func39 = function(argcv) {    // method for(_)pausing(_)do(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_range__39__ = arguments[curarg];
    curarg++;
    var var_pauseTime = arguments[curarg];
    curarg++;
    var var_block = arguments[curarg];
    curarg++;
    // Start type arguments
    var var_T = var_Unknown;
    if (argcv.length == 4) {
      if (argcv[3] !== 1) {
        throw new GraceExceptionPacket(ProgrammingErrorObject, 
            new GraceString("wrong number of type arguments for for(_)pausing(_)do(_)"));
      }
      var_T = arguments[curarg++];
    }
    // End type arguments
    // Start argument checking
    curarg = 1;
    // call case 5: prelude request
    var call41 = callmethodChecked(var_prelude, "Iterable", []);
    if (!Grace_isTrue(callmethod(call41, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in for (arg list 1), which corresponds to parameter range', does not have " + 
                callmethod(call41, "asString", [0])._value + "."));
    curarg++;
    if (!Grace_isTrue(callmethod(var_Number, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in pausing (arg list 2), which corresponds to parameter pauseTime, does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    curarg++;
    if (!Grace_isTrue(callmethod(var_Block, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in do (arg list 3), which corresponds to parameter block, does not have " + 
                callmethod(var_Block, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("animation");
    setLineNumber(72);    // compilenode member
    // call case 6: other requests
    var call43 = callmethodChecked(var_range__39__, "iterator", []);
    var var_it = call43;
    setLineNumber(73);    // compilenode block
    var block45 = new GraceBlock(this, 73, 0);
    block45.real = function() {
      // call case 6: other requests
      var call47 = callmethodChecked(var_it, "hasNext", []);
      return call47;
    };
    var block48 = new GraceBlock(this, 73, 0);
    block48.real = function() {
      // call case 6: other requests
      var call51 = callmethodChecked(var_it, "next", []);
      // call case 6: other requests
      var call52 = callmethodChecked(var_block, "apply(1)", [1], call51);
      return call52;
    };
    // call case 4: self request
    onSelf = true;
    var call53 = callmethodChecked(this, "while(1)pausing(1)do(1)", [1, 1, 1], block45, var_pauseTime, block48);
    if (!Grace_isTrue(callmethod(var_Done, "match(1)", [1], call53)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("result of method for(_)pausing(_)do(_) does not have " + 
                callmethod(var_Done, "asString", [0])._value + "."));
    return call53;
  };
  func39.paramTypes = [];
  func39.paramTypes.push([]);
  func39.paramTypes.push([type_Number, "pauseTime"]);
  func39.paramTypes.push([]);
  func39.paramCounts = [1, 1, 1];
  this.methods["for(1)pausing(1)do(1)"] = func39;
  func39.definitionLine = 71;
  func39.definitionModule = "animation";
  setLineNumber(79);    // compilenode method
  var func54 = function(argcv) {    // method for(_)pausing(_)do(_)finally(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_range__39__ = arguments[curarg];
    curarg++;
    var var_pauseTime = arguments[curarg];
    curarg++;
    var var_block = arguments[curarg];
    curarg++;
    var var_endBlock = arguments[curarg];
    curarg++;
    // Start type arguments
    var var_T = var_Unknown;
    if (argcv.length == 5) {
      if (argcv[4] !== 1) {
        throw new GraceExceptionPacket(ProgrammingErrorObject, 
            new GraceString("wrong number of type arguments for for(_)pausing(_)do(_)finally(_)"));
      }
      var_T = arguments[curarg++];
    }
    // End type arguments
    // Start argument checking
    curarg = 1;
    // call case 5: prelude request
    var call56 = callmethodChecked(var_prelude, "Iterable", []);
    if (!Grace_isTrue(callmethod(call56, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in for (arg list 1), which corresponds to parameter range', does not have " + 
                callmethod(call56, "asString", [0])._value + "."));
    curarg++;
    curarg++;
    if (!Grace_isTrue(callmethod(var_Block, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in do (arg list 3), which corresponds to parameter block, does not have " + 
                callmethod(var_Block, "asString", [0])._value + "."));
    curarg++;
    setLineNumber(80);    // compilenode identifier
    if (!Grace_isTrue(callmethod(var_Block, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in finally (arg list 4), which corresponds to parameter endBlock, does not have " + 
                callmethod(var_Block, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("animation");
    setLineNumber(81);    // compilenode member
    // call case 6: other requests
    var call58 = callmethodChecked(var_range__39__, "iterator", []);
    var var_it = call58;
    // call case 5: prelude request
    var call60 = callmethodChecked(var_prelude, "Iterator", []);
    if (!Grace_isTrue(callmethod(call60, "match(1)", [1], var_it)))
      throw new GraceExceptionPacket(TypeErrorObject,
          new GraceString("value of def 'it' is not of type Iterator<T>"));
    setLineNumber(82);    // compilenode block
    var block62 = new GraceBlock(this, 82, 0);
    block62.real = function() {
      // call case 6: other requests
      var call64 = callmethodChecked(var_it, "hasNext", []);
      return call64;
    };
    var block65 = new GraceBlock(this, 82, 0);
    block65.real = function() {
      // call case 6: other requests
      var call68 = callmethodChecked(var_it, "next", []);
      // call case 6: other requests
      var call69 = callmethodChecked(var_block, "apply(1)", [1], call68);
      return call69;
    };
    setLineNumber(83);    // compilenode identifier
    // call case 4: self request
    onSelf = true;
    var call70 = callmethodChecked(this, "while(1)pausing(1)do(1)finally(1)", [1, 1, 1, 1], block62, var_pauseTime, block65, var_endBlock);
    setLineNumber(82);    // return value
    if (!Grace_isTrue(callmethod(var_Done, "match(1)", [1], call70)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("result of method for(_)pausing(_)do(_)finally(_) does not have " + 
                callmethod(var_Done, "asString", [0])._value + "."));
    return call70;
  };
  func54.paramTypes = [];
  func54.paramTypes.push([]);
  func54.paramTypes.push([]);
  func54.paramTypes.push([]);
  func54.paramTypes.push([type_Block, "endBlock"]);
  func54.paramCounts = [1, 1, 1, 1];
  this.methods["for(1)pausing(1)do(1)finally(1)"] = func54;
  func54.definitionLine = 79;
  func54.definitionModule = "animation";
  setLineNumber(4);    // compilenode typedec
  // Type decl BoolBlock
  // call case 5: prelude request
  var call73 = callmethodChecked(var_prelude, "Block0", []);
  var var_BoolBlock = call73;
  setLineNumber(1);    // compilenode method
  var func74 = function(argcv) {    // method BoolBlock
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("animation");
    // BoolBlock is a simple accessor - elide try ... catch
    setLineNumber(4);    // compilenode identifier
    return var_BoolBlock;
  };
  func74.paramCounts = [0];
  this.methods["BoolBlock"] = func74;
  func74.definitionLine = 1;
  func74.definitionModule = "animation";
  setLineNumber(5);    // compilenode typedec
  // Type decl NumberBlock
  // call case 5: prelude request
  var call77 = callmethodChecked(var_prelude, "Block0", []);
  var var_NumberBlock = call77;
  setLineNumber(1);    // compilenode method
  var func78 = function(argcv) {    // method NumberBlock
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("animation");
    // NumberBlock is a simple accessor - elide try ... catch
    setLineNumber(5);    // compilenode identifier
    return var_NumberBlock;
  };
  func78.paramCounts = [0];
  this.methods["NumberBlock"] = func78;
  func78.definitionLine = 1;
  func78.definitionModule = "animation";
  setLineNumber(6);    // compilenode typedec
  // Type decl Procedure
  // call case 5: prelude request
  var call81 = callmethodChecked(var_prelude, "Block0", []);
  var var_Procedure = call81;
  setLineNumber(1);    // compilenode method
  var func82 = function(argcv) {    // method Procedure
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("animation");
    // Procedure is a simple accessor - elide try ... catch
    setLineNumber(6);    // compilenode identifier
    return var_Procedure;
  };
  func82.paramCounts = [0];
  this.methods["Procedure"] = func82;
  func82.definitionLine = 1;
  func82.definitionModule = "animation";
  setLineNumber(9);    // compilenode typedec
  // Type decl Animator
  //   Type literal 
  var type84 = new GraceType("Animator");
  type84.typeMethods.push("while(1)pausing(1)do(1)");
  type84.typeMethods.push("while(1)pausing(1)do(1)finally(1)");
  type84.typeMethods.push("while(1)pauseVarying(1)do(1)");
  type84.typeMethods.push("for(1)pausing(1)do(1)");
  type84.typeMethods.push("for(1)pausing(1)do(1)finally(1)");
  var var_Animator = type84;
  setLineNumber(1);    // compilenode method
  var func85 = function(argcv) {    // method Animator
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("animation");
    // Animator is a simple accessor - elide try ... catch
    setLineNumber(9);    // compilenode identifier
    return var_Animator;
  };
  func85.paramCounts = [0];
  this.methods["Animator"] = func85;
  func85.definitionLine = 1;
  func85.definitionModule = "animation";
  return this;
}
gracecode_animation.imports = ['timer'];
if (typeof gctCache !== "undefined")
  gctCache['animation'] = "classes:\nconfidential:\nfresh-methods:\nmethodtypes-of:Animator:\n 1 for(range' : Iterable<T>)pausing(pauseTime : Number)do(block : Block1<T, Done>) -> Done\n 1 for(range' : Iterable<T>)pausing(pauseTime : Number)do(block : Block1<T, Done>)finally(endBlock : Procedure) -> Done\n 1 while(condition : BoolBlock)pauseVarying(pauseTime : Number)do(block : Procedure) -> Done\n 1 while(condition : BoolBlock)pausing(pauseTime : Number)do(block : Procedure) -> Done\n 1 while(condition : BoolBlock)pausing(pauseTime : Number)do(block : Procedure)finally(endBlock : Procedure) -> Done\nmethodtypes-of:BoolBlock:\nmethodtypes-of:NumberBlock:\nmethodtypes-of:Procedure:\nmodules:\n timer\npath:\n animation\npublic:\n Animator\n BoolBlock\n NumberBlock\n Procedure\n for(1)pausing(1)do(1)\n for(1)pausing(1)do(1)finally(1)\n while(1)pauseVarying(1)do(1)\n while(1)pausing(1)do(1)\n while(1)pausing(1)do(1)finally(1)\ntypes:\n Animator\n BoolBlock\n NumberBlock\n Procedure\n";
if (typeof originalSourceLines !== "undefined") {
  originalSourceLines["animation"] = [
    "import \"timer\" as timer",
    "",
    "// type of a block that takes no parameters and returns a boolean",
    "type BoolBlock = Block0[[Boolean]]",
    "type NumberBlock = Block0[[Number]]",
    "type Procedure = Block0[[Done]]",
    "",
    "// type of object that can simulate parallel animations",
    "type Animator = {",
    "   // Repeatedly execute block while condition is true",
    "   while (condition: BoolBlock) pausing (pauseTime: Number) do (block: Procedure) -> Done",
    "",
    "   // Repeatedly execute block while condition is true, pausing pauseTime between iterations",
    "   // when condition fails, execute endBlock.",
    "   while (condition: BoolBlock) pausing (pauseTime: Number) do (block: Procedure) ",
    "                         finally (endBlock: Procedure) -> Done",
    "",
    "   // Repeatedly execute block while condition is true",
    "   // pausing variable amount of time (obtained by evaluating timeBlock) between iterations",
    "   // when condition fails, execute endBlock.",
    "   while (condition: BoolBlock) pauseVarying (pauseTime: Number) do (block: Procedure) -> Done",
    "",
    "   // Repeatedly execute block while condition is true",
    "   for[[T]] (range': Iterable[[T]]) pausing (pauseTime: Number) do (block: Block1[[T,Done]]) -> Done ",
    " ",
    "   // Repeatedly execute block while condition is true",
    "   // when condition fails, execute endBlock.",
    "   for[[T]] (range':Iterable[[T]]) pausing (pauseTime: Number) do (block:Block1[[T,Done]])",
    "                                      finally (endBlock: Procedure) -> Done",
    "",
    "}",
    "",
    "// Repeatedly execute block while condition is true",
    "method while(condition:BoolBlock) pausing (pauseTime:Number) do (block:Procedure) -> Done {",
    "  def id: Number = timer.every (pauseTime) do {",
    "     if (condition.apply) then {",
    "        block.apply",
    "     } else {",
    "        timer.stop (id)",
    "     }",
    "  }",
    "}",
    "",
    "// Repeatedly execute block while condition is true, pausing by pauseTime",
    "// between iterations. When condition fails, execute endBlock.",
    "method while (condition: BoolBlock) pausing (pauseTime: Number) do (block:Procedure) ",
    "                  finally (endBlock: Procedure) -> Done {",
    "  def id:Number = timer.every(pauseTime)do{",
    "     if(condition.apply) then {",
    "        block.apply",
    "     } else {",
    "        timer.stop(id)",
    "        endBlock.apply",
    "     }",
    "  }",
    "}",
    "",
    "// Repeatedly execute block while condition is true, pausing by pauseTime",
    "// between iterations. ",
    "method while(condition:BoolBlock) pauseVarying (timeBlock) do (block:Procedure)  -> Done {",
    "  if(condition.apply)then {",
    "     block.apply",
    "     timer.after(timeBlock.apply) do {",
    "         while (condition) pauseVarying (timeBlock) do (block)",
    "     }",
    "  }",
    "}",
    "",
    "// Repeatedly execute block for each value in range, pausing pauseTime between iterations.",
    "// block should take a numeric value as a parameter",
    "method for[[T]](range':Iterable[[T]]) pausing (pauseTime: Number) do (block:Block[[Number,Done]])-> Done {",
    "  def it = range'.iterator",
    "  while{it.hasNext} pausing (pauseTime) do {block.apply(it.next)}",
    "}",
    "",
    "// Repeatedly execute block for each value in range, pausing pauseTime between iterations.",
    "// block should take a numeric value as a parameter",
    "// when condition fails, execute endBlock.",
    "method for[[T]] (range':Iterable[[T]]) pausing (pauseTime) do (block: Block[[Number,Done]])",
    "             finally(endBlock:Block) -> Done {",
    "  def it: Iterator[[T]] = range'.iterator",
    "  while{it.hasNext} pausing (pauseTime) do {block.apply(it.next)}",
    "         finally(endBlock)",
    "}" ];
}
if (typeof global !== "undefined")
  global.gracecode_animation = gracecode_animation;
if (typeof window !== "undefined")
  window.gracecode_animation = gracecode_animation;
