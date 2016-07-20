"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_gracedoc() {
  setModuleName("gracedoc");
  this.definitionModule = "gracedoc";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_gracedoc_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_gracedoc_outer0;
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
    setModuleName("gracedoc");
    // ast is a simple accessor - elide try ... catch
    return var_ast;
  };
  func1.paramCounts = [0];
  this.methods["ast"] = func1;
  func1.definitionLine = 1;
  func1.definitionModule = "gracedoc";
  func1.debug = "import";
  func1.confidential = true;
  setModuleName("gracedoc");
  setLineNumber(2);    // compilenode import
  // Import of parser as parser
  if (typeof gracecode_parser == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module parser'));
  var var_parser = do_import("parser", gracecode_parser);
  var func2 = function(argcv) {    // method parser
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("gracedoc");
    // parser is a simple accessor - elide try ... catch
    return var_parser;
  };
  func2.paramCounts = [0];
  this.methods["parser"] = func2;
  func2.definitionLine = 2;
  func2.definitionModule = "gracedoc";
  func2.debug = "import";
  func2.confidential = true;
  setModuleName("gracedoc");
  setLineNumber(3);    // compilenode import
  // Import of lexer as lexer
  if (typeof gracecode_lexer == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module lexer'));
  var var_lexer = do_import("lexer", gracecode_lexer);
  var func3 = function(argcv) {    // method lexer
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("gracedoc");
    // lexer is a simple accessor - elide try ... catch
    return var_lexer;
  };
  func3.paramCounts = [0];
  this.methods["lexer"] = func3;
  func3.definitionLine = 3;
  func3.definitionModule = "gracedoc";
  func3.debug = "import";
  func3.confidential = true;
  setModuleName("gracedoc");
  setLineNumber(4);    // compilenode import
  // Import of io as io
  if (typeof gracecode_io == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module io'));
  var var_io = do_import("io", gracecode_io);
  var func4 = function(argcv) {    // method io
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("gracedoc");
    // io is a simple accessor - elide try ... catch
    return var_io;
  };
  func4.paramCounts = [0];
  this.methods["io"] = func4;
  func4.definitionLine = 4;
  func4.definitionModule = "gracedoc";
  func4.debug = "import";
  func4.confidential = true;
  setModuleName("gracedoc");
  setLineNumber(5);    // compilenode import
  // Import of sys as sys
  if (typeof gracecode_sys == 'undefined')
    throw new GraceExceptionPacket(EnvironmentExceptionObject, 
      new GraceString('could not find module sys'));
  var var_sys = do_import("sys", gracecode_sys);
  var func5 = function(argcv) {    // method sys
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("gracedoc");
    // sys is a simple accessor - elide try ... catch
    return var_sys;
  };
  func5.paramCounts = [0];
  this.methods["sys"] = func5;
  func5.definitionLine = 5;
  func5.definitionModule = "gracedoc";
  func5.debug = "import";
  func5.confidential = true;
  setModuleName("gracedoc");
  setLineNumber(15);    // compilenode method
  var func6 = function(argcv) {    // method parseArguments
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("gracedoc");
    setLineNumber(16);    // compilenode member
    // call case 6: other requests
    var call8 = callmethodChecked(var_sys, "argv", []);
    var var_args = call8;
    var if9 = GraceDone;
    setLineNumber(17);    // compilenode member
    // call case 6: other requests
    var call12 = callmethodChecked(var_args, "size", []);
    var opresult14 = callmethodChecked(call12, ">(1)", [1], new GraceNum(1));
    if (Grace_isTrue(opresult14)) {
      setLineNumber(18);    // compilenode member
      // call case 6: other requests
      var call16 = callmethodChecked(var_args, "indices", []);
      var var_indices = call16;
      setLineNumber(19);    // compilenode identifier
      var var_skip = GraceTrue;
      setLineNumber(20);    // compilenode block
      var block18 = new GraceBlock(this, 20, 1);
      setLineNumber(1);    // compilenode identifier
      block18.real = function(var_i) {
        setLineNumber(21);    // compilenode identifier
        // call case 6: other requests
        var call20 = callmethodChecked(var_args, "at(1)", [1], var_i);
        var var_arg = call20;
        var if21 = GraceDone;
        setLineNumber(22);    // compilenode string
        var string22 = new GraceString("-");
        // call case 6: other requests
        var call25 = callmethodChecked(var_arg, "at(1)", [1], new GraceNum(1));
        var opresult27 = callmethodChecked(call25, "==(1)", [1], string22);
        if (Grace_isTrue(opresult27)) {
          setLineNumber(23);    // compilenode identifier
          var cases28 = [];
          setLineNumber(24);    // compilenode block
          var block29 = new GraceBlock(this, 24, 0);
          var string30 = new GraceString("-i");
          block29.pattern = string30;
          block29.real = function() {
            var if31 = GraceDone;
            setLineNumber(25);    // compilenode identifier
            var opresult34 = callmethodChecked(var_i, "+(1)", [1], new GraceNum(1));
            // call case 6: other requests
            var call37 = callmethodChecked(var_args, "size", []);
            var opresult39 = callmethodChecked(call37, "<(1)", [1], opresult34);
            if (Grace_isTrue(opresult39)) {
              setLineNumber(26);    // compilenode string
              var string41 = new GraceString("gracedoc: -i requires an argument.\n");
              // call case 6: other requests
              // call case 6: other requests
              var call43 = callmethodChecked(var_io, "error", []);
              var call44 = callmethodChecked(call43, "write(1)", [1], string41);
              setLineNumber(27);    // compilenode num
              // call case 6: other requests
              var call46 = callmethodChecked(var_sys, "exit(1)", [1], new GraceNum(1));
              if31 = call46;
            }
            setLineNumber(29);    // compilenode identifier
            var_skip = GraceTrue;
            setLineNumber(30);    // compilenode identifier
            var opresult51 = callmethodChecked(var_i, "+(1)", [1], new GraceNum(1));
            // call case 6: other requests
            var call52 = callmethodChecked(var_args, "at(1)", [1], opresult51);
            // call case 6: other requests
            var call53 = callmethodChecked(var_settings, "inputdir:=(1)", [1], call52);
            return call53;
          };
          cases28.push(block29);
          setLineNumber(31);    // compilenode block
          var block54 = new GraceBlock(this, 31, 0);
          var string55 = new GraceString("-o");
          block54.pattern = string55;
          block54.real = function() {
            var if56 = GraceDone;
            setLineNumber(32);    // compilenode identifier
            var opresult59 = callmethodChecked(var_i, "+(1)", [1], new GraceNum(1));
            // call case 6: other requests
            var call62 = callmethodChecked(var_args, "size", []);
            var opresult64 = callmethodChecked(call62, "<(1)", [1], opresult59);
            if (Grace_isTrue(opresult64)) {
              setLineNumber(33);    // compilenode string
              var string66 = new GraceString("gracedoc: -o requires an argument.\n");
              // call case 6: other requests
              // call case 6: other requests
              var call68 = callmethodChecked(var_io, "error", []);
              var call69 = callmethodChecked(call68, "write(1)", [1], string66);
              setLineNumber(34);    // compilenode num
              // call case 6: other requests
              var call71 = callmethodChecked(var_sys, "exit(1)", [1], new GraceNum(1));
              if56 = call71;
            }
            setLineNumber(36);    // compilenode identifier
            var_skip = GraceTrue;
            setLineNumber(37);    // compilenode identifier
            var opresult76 = callmethodChecked(var_i, "+(1)", [1], new GraceNum(1));
            // call case 6: other requests
            var call77 = callmethodChecked(var_args, "at(1)", [1], opresult76);
            // call case 6: other requests
            var call78 = callmethodChecked(var_settings, "outputdir:=(1)", [1], call77);
            return call78;
          };
          cases28.push(block54);
          setLineNumber(38);    // compilenode block
          var block79 = new GraceBlock(this, 38, 0);
          var string80 = new GraceString("-v");
          block79.pattern = string80;
          block79.real = function() {
            var if81 = GraceDone;
            setLineNumber(39);    // compilenode identifier
            var opresult84 = callmethodChecked(var_i, "+(1)", [1], new GraceNum(1));
            // call case 6: other requests
            var call87 = callmethodChecked(var_args, "size", []);
            var opresult89 = callmethodChecked(call87, "<(1)", [1], opresult84);
            if (Grace_isTrue(opresult89)) {
              setLineNumber(40);    // compilenode string
              var string91 = new GraceString("gracedoc: -v requires an argument.\n");
              // call case 6: other requests
              // call case 6: other requests
              var call93 = callmethodChecked(var_io, "error", []);
              var call94 = callmethodChecked(call93, "write(1)", [1], string91);
              setLineNumber(41);    // compilenode num
              // call case 6: other requests
              var call96 = callmethodChecked(var_sys, "exit(1)", [1], new GraceNum(1));
              if81 = call96;
            }
            setLineNumber(43);    // compilenode identifier
            var_skip = GraceTrue;
            setLineNumber(44);    // compilenode member
            // call case 6: other requests
            var opresult102 = callmethodChecked(var_i, "+(1)", [1], new GraceNum(1));
            // call case 6: other requests
            var call103 = callmethodChecked(var_args, "at(1)", [1], opresult102);
            var call104 = callmethodChecked(call103, "asNumber", []);
            // call case 6: other requests
            var call105 = callmethodChecked(var_settings, "verbosity:=(1)", [1], call104);
            return call105;
          };
          cases28.push(block79);
          setLineNumber(45);    // compilenode block
          var block106 = new GraceBlock(this, 45, 0);
          var string107 = new GraceString("--publiconly");
          block106.pattern = string107;
          block106.real = function() {
            setLineNumber(46);    // compilenode identifier
            // call case 6: other requests
            var call109 = callmethodChecked(var_settings, "publicOnly:=(1)", [1], GraceTrue);
            return call109;
          };
          cases28.push(block106);
          setLineNumber(47);    // compilenode block
          var block110 = new GraceBlock(this, 47, 0);
          var string111 = new GraceString("--help");
          block110.pattern = string111;
          block110.real = function() {
            setLineNumber(48);    // compilenode string
            var string112 = new GraceString(" -i <path> -o <path> [-v <level>] [--help] [--publiconly]");
            // call case 6: other requests
            var call115 = callmethodChecked(var_args, "at(1)", [1], new GraceNum(1));
            var string117 = new GraceString("Usage: ");
            var opresult119 = callmethodChecked(string117, "++(1)", [1], call115);
            var opresult121 = callmethodChecked(opresult119, "++(1)", [1], string112);
            var call122 = Grace_print(opresult121);
            setLineNumber(49);    // compilenode string
            var string123 = new GraceString("  -i <path>      The directory to process (contains .grace files)");
            var call124 = Grace_print(string123);
            setLineNumber(50);    // compilenode string
            var string125 = new GraceString("  -o <path>      The directory to contain the generated HTML files");
            var call126 = Grace_print(string125);
            setLineNumber(51);    // compilenode string
            var string127 = new GraceString("  [-v <level>]   Optional. Level of detail in output (0 = none, 1 = some, 2 = all); default is 0");
            var call128 = Grace_print(string127);
            setLineNumber(52);    // compilenode string
            var string129 = new GraceString("  [--publiconly] Optional. If set, only public methods are documented and public ");
            var call130 = Grace_print(string129);
            setLineNumber(53);    // compilenode string
            var string131 = new GraceString("                 variables are listed as methods. Default is off.");
            var call132 = Grace_print(string131);
            setLineNumber(54);    // compilenode string
            var string133 = new GraceString("  [--help]       Optional. Print this usage information.");
            var call134 = Grace_print(string133);
            return call134;
          };
          cases28.push(block110);
          setLineNumber(55);    // compilenode block
          var block135 = new GraceBlock(this, 55, 1);
          setLineNumber(1);    // compilenode identifier
          block135.real = function(var___95____95__0) {
            setLineNumber(56);    // compilenode string
            var string137 = new GraceString(".\n");
            var string140 = new GraceString("gracedoc: Invalid argument ");
            var opresult142 = callmethodChecked(string140, "++(1)", [1], var_arg);
            var opresult144 = callmethodChecked(opresult142, "++(1)", [1], string137);
            // call case 6: other requests
            // call case 6: other requests
            var call146 = callmethodChecked(var_io, "error", []);
            var call147 = callmethodChecked(call146, "write(1)", [1], opresult144);
            return call147;
          };
          cases28.push(block135);
          setLineNumber(23);    // compilematchcase
          var matchres28 = matchCase(var_arg,cases28,false);
          setModuleName("gracedoc");
          if21 = matchres28;
        } else {
          var if148 = GraceDone;
          setLineNumber(59);    // compilenode identifier
          var opresult151 = callmethodChecked(var_skip, "==(1)", [1], GraceTrue);
          if (Grace_isTrue(opresult151)) {
            setLineNumber(60);    // compilenode identifier
            var_skip = GraceFalse;
            if148 = GraceDone;
          } else {
            setLineNumber(62);    // compilenode string
            var string153 = new GraceString(". Arguments must start with a -.\n");
            var string156 = new GraceString("gracedoc: Invalid argument ");
            var opresult158 = callmethodChecked(string156, "++(1)", [1], var_arg);
            var opresult160 = callmethodChecked(opresult158, "++(1)", [1], string153);
            // call case 6: other requests
            // call case 6: other requests
            var call162 = callmethodChecked(var_io, "error", []);
            var call163 = callmethodChecked(call162, "write(1)", [1], opresult160);
            setLineNumber(63);    // compilenode num
            // call case 6: other requests
            var call165 = callmethodChecked(var_sys, "exit(1)", [1], new GraceNum(1));
            if148 = call165;
          }
          if21 = if148;
        }
        return if21;
      };
      // call case 5: prelude request
      var call166 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_indices, block18);
      var if167 = GraceDone;
      setLineNumber(67);    // compilenode string
      var string168 = new GraceString("");
      // call case 6: other requests
      var call171 = callmethodChecked(var_settings, "outputdir", []);
      var opresult173 = callmethodChecked(call171, "==(1)", [1], string168);
      var string175 = new GraceString("");
      // call case 6: other requests
      var call178 = callmethodChecked(var_settings, "inputdir", []);
      var opresult180 = callmethodChecked(call178, "==(1)", [1], string175);
      var opresult182 = callmethodChecked(opresult180, "||(1)", [1], opresult173);
      if (Grace_isTrue(opresult182)) {
        setLineNumber(68);    // compilenode string
        var string184 = new GraceString("gracedoc: Both the -i and -o arguments are required.\n");
        // call case 6: other requests
        // call case 6: other requests
        var call186 = callmethodChecked(var_io, "error", []);
        var call187 = callmethodChecked(call186, "write(1)", [1], string184);
        setLineNumber(69);    // compilenode num
        // call case 6: other requests
        var call189 = callmethodChecked(var_sys, "exit(1)", [1], new GraceNum(1));
        if167 = call189;
      }
      if9 = if167;
    } else {
      setLineNumber(72);    // compilenode string
      var string191 = new GraceString("gracedoc: Both the -i and -o arguments are required.\n");
      // call case 6: other requests
      // call case 6: other requests
      var call193 = callmethodChecked(var_io, "error", []);
      var call194 = callmethodChecked(call193, "write(1)", [1], string191);
      setLineNumber(73);    // compilenode num
      // call case 6: other requests
      var call196 = callmethodChecked(var_sys, "exit(1)", [1], new GraceNum(1));
      if9 = call196;
    }
    return if9;
  };
  func6.paramCounts = [0];
  this.methods["parseArguments"] = func6;
  func6.definitionLine = 15;
  func6.definitionModule = "gracedoc";
  setLineNumber(115);    // compilenode method
  var func197 = function(argcv) {    // method trim(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_c = arguments[curarg];
    curarg++;
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_String, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in trim (arg list 1), which corresponds to parameter c, does not have " + 
                callmethod(var_String, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("gracedoc");
    setLineNumber(116);    // compilenode num
    var var_start = new GraceNum(1);
    setLineNumber(117);    // compilenode member
    // call case 6: other requests
    var call199 = callmethodChecked(var_c, "size", []);
    var var_end = call199;
    setLineNumber(118);    // compilenode block
    var block201 = new GraceBlock(this, 118, 0);
    block201.real = function() {
      var string202 = new GraceString(" ");
      // call case 6: other requests
      var call205 = callmethodChecked(var_c, "at(1)", [1], var_start);
      var opresult207 = callmethodChecked(call205, "==(1)", [1], string202);
      return opresult207;
    };
    var block208 = new GraceBlock(this, 118, 0);
    block208.real = function() {
      var opresult211 = callmethodChecked(var_start, "+(1)", [1], new GraceNum(1));
      var_start = opresult211;
      return GraceDone;
    };
    // call case 5: prelude request
    var call212 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block201, block208);
    setLineNumber(119);    // compilenode block
    var block214 = new GraceBlock(this, 119, 0);
    block214.real = function() {
      var string215 = new GraceString(" ");
      // call case 6: other requests
      var call218 = callmethodChecked(var_c, "at(1)", [1], var_end);
      var opresult220 = callmethodChecked(call218, "==(1)", [1], string215);
      return opresult220;
    };
    var block221 = new GraceBlock(this, 119, 0);
    block221.real = function() {
      var diff224 = callmethodChecked(var_end, "-(1)", [1], new GraceNum(1));
      var_end = diff224;
      return GraceDone;
    };
    // call case 5: prelude request
    var call225 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block214, block221);
    setLineNumber(120);    // compilenode identifier
    // call case 6: other requests
    var call227 = callmethodChecked(var_c, "substringFrom(1)to(1)", [1, 1], var_start, var_end);
    return call227;
  };
  func197.paramTypes = [];
  func197.paramTypes.push([type_String, "c"]);
  func197.paramCounts = [1];
  this.methods["trim(1)"] = func197;
  func197.definitionLine = 115;
  func197.definitionModule = "gracedoc";
  setLineNumber(123);    // compilenode method
  var func228 = function(argcv) {    // method indent(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_n = arguments[curarg];
    curarg++;
    // Start argument checking
    curarg = 1;
    if (!Grace_isTrue(callmethod(var_Number, "match(1)",  [1], arguments[curarg])))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("argument 1 in indent (arg list 1), which corresponds to parameter n, does not have " + 
                callmethod(var_Number, "asString", [0])._value + "."));
    curarg++;
    // End argument checking
    setModuleName("gracedoc");
    var if229 = GraceDone;
    setLineNumber(125);    // compilenode identifier
    var opresult232 = callmethodChecked(var_n, "==(1)", [1], new GraceNum(0));
    if (Grace_isTrue(opresult232)) {
      var string233 = new GraceString("");
      return string233;
    } else {
      var if234 = GraceDone;
      setLineNumber(126);    // compilenode identifier
      var opresult237 = callmethodChecked(var_n, "==(1)", [1], new GraceNum(1));
      if (Grace_isTrue(opresult237)) {
        var string238 = new GraceString("    ");
        return string238;
      } else {
        var if239 = GraceDone;
        setLineNumber(127);    // compilenode identifier
        var opresult242 = callmethodChecked(var_n, "==(1)", [1], new GraceNum(2));
        if (Grace_isTrue(opresult242)) {
          var string243 = new GraceString("        ");
          return string243;
        } else {
          var if244 = GraceDone;
          setLineNumber(128);    // compilenode identifier
          var opresult247 = callmethodChecked(var_n, "==(1)", [1], new GraceNum(3));
          if (Grace_isTrue(opresult247)) {
            var string248 = new GraceString("            ");
            return string248;
          } else {
            var if249 = GraceDone;
            setLineNumber(129);    // compilenode identifier
            var opresult252 = callmethodChecked(var_n, "==(1)", [1], new GraceNum(4));
            if (Grace_isTrue(opresult252)) {
              var string253 = new GraceString("                ");
              return string253;
            } else {
              var if254 = GraceDone;
              setLineNumber(130);    // compilenode identifier
              var opresult257 = callmethodChecked(var_n, "==(1)", [1], new GraceNum(5));
              if (Grace_isTrue(opresult257)) {
                var string258 = new GraceString("                    ");
                return string258;
              } else {
                var if259 = GraceDone;
                setLineNumber(131);    // compilenode identifier
                var opresult262 = callmethodChecked(var_n, "==(1)", [1], new GraceNum(6));
                if (Grace_isTrue(opresult262)) {
                  var string263 = new GraceString("                        ");
                  return string263;
                } else {
                  var if264 = GraceDone;
                  setLineNumber(132);    // compilenode identifier
                  var opresult267 = callmethodChecked(var_n, "==(1)", [1], new GraceNum(7));
                  if (Grace_isTrue(opresult267)) {
                    var string268 = new GraceString("                            ");
                    return string268;
                  } else {
                    var if269 = GraceDone;
                    setLineNumber(133);    // compilenode identifier
                    var opresult272 = callmethodChecked(var_n, "==(1)", [1], new GraceNum(8));
                    if (Grace_isTrue(opresult272)) {
                      var string273 = new GraceString("                                ");
                      return string273;
                    } else {
                      setLineNumber(134);    // compilenode string
                      var string274 = new GraceString("                                    ");
                      return string274;
                    }
                    if264 = if269;
                  }
                  if259 = if264;
                }
                if254 = if259;
              }
              if249 = if254;
            }
            if244 = if249;
          }
          if239 = if244;
        }
        if234 = if239;
      }
      if229 = if234;
    }
    setLineNumber(125);    // return value
    if (!Grace_isTrue(callmethod(var_String, "match(1)", [1], if229)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("result of method indent(_) does not have " + 
                callmethod(var_String, "asString", [0])._value + "."));
    return if229;
  };
  func228.paramTypes = [];
  func228.paramTypes.push([type_Number, "n"]);
  func228.paramCounts = [1];
  this.methods["indent(1)"] = func228;
  func228.definitionLine = 123;
  func228.definitionModule = "gracedoc";
  setLineNumber(137);    // compilenode method
  var func275 = function(argcv) {    // method autoindent(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_input = arguments[curarg];
    curarg++;
    setModuleName("gracedoc");
    setLineNumber(138);    // compilenode string
    var string278 = new GraceString("link");
    var string279 = new GraceString("td");
    var string280 = new GraceString("meta");
    var string281 = new GraceString("style");
    var string282 = new GraceString("title");
    setLineNumber(139);    // compilenode string
    var string283 = new GraceString("table");
    var string284 = new GraceString("div");
    var string285 = new GraceString("tr");
    var string286 = new GraceString("th");
    var string287 = new GraceString("iframe");
    var string288 = new GraceString("script");
    var string289 = new GraceString("section");
    var string290 = new GraceString("h1");
    var string291 = new GraceString("h2");
    setLineNumber(140);    // compilenode string
    var string292 = new GraceString("h3");
    var string293 = new GraceString("h4");
    var string294 = new GraceString("h5");
    var string295 = new GraceString("h6");
    var string296 = new GraceString("ul");
    var string297 = new GraceString("li");
    var string298 = new GraceString("html");
    var string299 = new GraceString("body");
    var string300 = new GraceString("head");
    var string301 = new GraceString("hr");
    var array277 = new Lineup([string278, string279, string280, string281, string282, string283, string284, string285, string286, string287, string288, string289, string290, string291, string292, string293, string294, string295, string296, string297, string298, string299, string300, string301]);
    // call case 5: prelude request
    var call302 = callmethodChecked(var_prelude, "set(1)", [1], array277);
    var var_indentedtags = call302;
    setLineNumber(141);    // compilenode string
    var string305 = new GraceString("a");
    var string306 = new GraceString("span");
    var string307 = new GraceString("td");
    var string308 = new GraceString("th");
    var string309 = new GraceString("li");
    var string310 = new GraceString("h1");
    setLineNumber(142);    // compilenode string
    var string311 = new GraceString("h2");
    var string312 = new GraceString("h3");
    var string313 = new GraceString("h4");
    var string314 = new GraceString("h5");
    var string315 = new GraceString("h6");
    var string316 = new GraceString("title");
    var string317 = new GraceString("script");
    var string318 = new GraceString("b");
    var string319 = new GraceString("i");
    var string320 = new GraceString("em");
    setLineNumber(143);    // compilenode string
    var string321 = new GraceString("strong");
    var array304 = new Lineup([string305, string306, string307, string308, string309, string310, string311, string312, string313, string314, string315, string316, string317, string318, string319, string320, string321]);
    // call case 5: prelude request
    var call322 = callmethodChecked(var_prelude, "set(1)", [1], array304);
    var var_samelineclosingtags = call322;
    setLineNumber(144);    // compilenode num
    var var_stack = new GraceNum(0);
    if (!Grace_isTrue(callmethod(var_Number, "match(1)", [1], var_stack)))
      throw new GraceExceptionPacket(TypeErrorObject,
          new GraceString("initial value of var 'stack' is not of type Number"));
    setLineNumber(145);    // compilenode member
    // call case 6: other requests
    var call324 = callmethodChecked(var_input, "length", []);
    var var_inputSize = call324;
    setLineNumber(146);    // compilenode string
    var string325 = new GraceString("");
    var var_output = string325;
    setLineNumber(147);    // compilenode vardec
    var var_char1;
    setLineNumber(148);    // compilenode vardec
    var var_char2;
    setLineNumber(149);    // compilenode num
    var var_cidx = new GraceNum(1);
    setLineNumber(150);    // compilenode vardec
    var var_tagName;
    setLineNumber(151);    // compilenode block
    var block327 = new GraceBlock(this, 151, 0);
    block327.real = function() {
      var opresult330 = callmethodChecked(var_cidx, "\u2264(1)", [1], var_inputSize);
      return opresult330;
    };
    var block331 = new GraceBlock(this, 151, 0);
    block331.real = function() {
      setLineNumber(152);    // compilenode string
      var string332 = new GraceString("");
      var_tagName = string332;
      setLineNumber(153);    // compilenode identifier
      // call case 6: other requests
      var call334 = callmethodChecked(var_input, "at(1)", [1], var_cidx);
      var_char1 = call334;
      setLineNumber(154);    // compilenode identifier
      var opresult338 = callmethodChecked(var_cidx, "+(1)", [1], new GraceNum(1));
      // call case 6: other requests
      var call339 = callmethodChecked(var_input, "at(1)", [1], opresult338);
      var_char2 = call339;
      var if340 = GraceDone;
      setLineNumber(155);    // compilenode string
      var string341 = new GraceString("<");
      var opresult344 = callmethodChecked(var_char1, "==(1)", [1], string341);
      if (Grace_isTrue(opresult344)) {
        var if345 = GraceDone;
        setLineNumber(156);    // compilenode string
        var string346 = new GraceString("/");
        var opresult349 = callmethodChecked(var_char2, "\u2260(1)", [1], string346);
        if (Grace_isTrue(opresult349)) {
          setLineNumber(158);    // compilenode identifier
          var opresult352 = callmethodChecked(var_cidx, "+(1)", [1], new GraceNum(1));
          var var_idx = opresult352;
          setLineNumber(159);    // compilenode block
          var block354 = new GraceBlock(this, 159, 0);
          block354.real = function() {
            var string355 = new GraceString(">");
            // call case 6: other requests
            var call358 = callmethodChecked(var_input, "at(1)", [1], var_idx);
            var opresult360 = callmethodChecked(call358, "\u2260(1)", [1], string355);
            var string362 = new GraceString(" ");
            // call case 6: other requests
            var call365 = callmethodChecked(var_input, "at(1)", [1], var_idx);
            var opresult367 = callmethodChecked(call365, "\u2260(1)", [1], string362);
            var opresult369 = callmethodChecked(opresult367, "&&(1)", [1], opresult360);
            return opresult369;
          };
          var block370 = new GraceBlock(this, 159, 0);
          block370.real = function() {
            setLineNumber(160);    // compilenode identifier
            // call case 6: other requests
            var call372 = callmethodChecked(var_input, "at(1)", [1], var_idx);
            var opresult375 = callmethodChecked(var_tagName, "++(1)", [1], call372);
            var_tagName = opresult375;
            setLineNumber(161);    // compilenode identifier
            var opresult378 = callmethodChecked(var_idx, "+(1)", [1], new GraceNum(1));
            var_idx = opresult378;
            return GraceDone;
          };
          // call case 5: prelude request
          var call379 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block354, block370);
          var if380 = GraceDone;
          setLineNumber(163);    // compilenode identifier
          // call case 6: other requests
          var call382 = callmethodChecked(var_indentedtags, "contains(1)", [1], var_tagName);
          if (Grace_isTrue(call382)) {
            var if383 = GraceDone;
            setLineNumber(164);    // compilenode string
            var string384 = new GraceString("html");
            var opresult387 = callmethodChecked(var_tagName, "\u2260(1)", [1], string384);
            if (Grace_isTrue(opresult387)) {
              setLineNumber(165);    // compilenode string
              var string388 = new GraceString("\n");
              var opresult391 = callmethodChecked(var_output, "++(1)", [1], string388);
              var_output = opresult391;
              if383 = GraceDone;
            }
            setLineNumber(167);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call393 = callmethodChecked(this, "indent(1)", [1], var_stack);
            var opresult396 = callmethodChecked(var_output, "++(1)", [1], call393);
            var_output = opresult396;
            setLineNumber(168);    // compilenode identifier
            var opresult399 = callmethodChecked(var_stack, "+(1)", [1], new GraceNum(1));
            var_stack = opresult399;
            if380 = GraceDone;
          }
          if345 = if380;
        } else {
          setLineNumber(172);    // compilenode identifier
          var opresult402 = callmethodChecked(var_cidx, "+(1)", [1], new GraceNum(2));
          var var_idx = opresult402;
          setLineNumber(173);    // compilenode block
          var block404 = new GraceBlock(this, 173, 0);
          block404.real = function() {
            var string405 = new GraceString(">");
            // call case 6: other requests
            var call408 = callmethodChecked(var_input, "at(1)", [1], var_idx);
            var opresult410 = callmethodChecked(call408, "\u2260(1)", [1], string405);
            return opresult410;
          };
          var block411 = new GraceBlock(this, 173, 0);
          block411.real = function() {
            setLineNumber(174);    // compilenode identifier
            // call case 6: other requests
            var call413 = callmethodChecked(var_input, "at(1)", [1], var_idx);
            var opresult416 = callmethodChecked(var_tagName, "++(1)", [1], call413);
            var_tagName = opresult416;
            setLineNumber(175);    // compilenode identifier
            var opresult419 = callmethodChecked(var_idx, "+(1)", [1], new GraceNum(1));
            var_idx = opresult419;
            return GraceDone;
          };
          // call case 5: prelude request
          var call420 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block404, block411);
          var if421 = GraceDone;
          setLineNumber(177);    // compilenode identifier
          // call case 6: other requests
          var call423 = callmethodChecked(var_indentedtags, "contains(1)", [1], var_tagName);
          if (Grace_isTrue(call423)) {
            setLineNumber(178);    // compilenode identifier
            var diff426 = callmethodChecked(var_stack, "-(1)", [1], new GraceNum(1));
            var_stack = diff426;
            var if427 = GraceDone;
            setLineNumber(179);    // compilenode call
            // call case 6: other requests
            // call case 6: other requests
            var call430 = callmethodChecked(var_samelineclosingtags, "contains(1)", [1], var_tagName);
            var call431 = callmethodChecked(call430, "prefix!", [0]);
            if (Grace_isTrue(call431)) {
              setLineNumber(180);    // compilenode identifier
              // call case 4: self request
              onSelf = true;
              var call433 = callmethodChecked(this, "indent(1)", [1], var_stack);
              var string435 = new GraceString("\n");
              var opresult438 = callmethodChecked(var_output, "++(1)", [1], string435);
              var opresult440 = callmethodChecked(opresult438, "++(1)", [1], call433);
              var_output = opresult440;
              if427 = GraceDone;
            }
            if421 = if427;
          }
          if345 = if421;
        }
        if340 = if345;
      } else {
        var if441 = GraceDone;
        setLineNumber(184);    // compilenode string
        var string442 = new GraceString(">");
        var opresult445 = callmethodChecked(var_char2, "==(1)", [1], string442);
        var string447 = new GraceString("/");
        var opresult450 = callmethodChecked(var_char1, "==(1)", [1], string447);
        var opresult452 = callmethodChecked(opresult450, "&&(1)", [1], opresult445);
        if (Grace_isTrue(opresult452)) {
          setLineNumber(186);    // compilenode identifier
          var diff455 = callmethodChecked(var_stack, "-(1)", [1], new GraceNum(1));
          var_stack = diff455;
          if441 = GraceDone;
        }
        if340 = if441;
      }
      setLineNumber(188);    // compilenode identifier
      var opresult458 = callmethodChecked(var_output, "++(1)", [1], var_char1);
      var_output = opresult458;
      setLineNumber(189);    // compilenode identifier
      var opresult461 = callmethodChecked(var_cidx, "+(1)", [1], new GraceNum(1));
      var_cidx = opresult461;
      return GraceDone;
    };
    // call case 5: prelude request
    var call462 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block327, block331);
    setLineNumber(191);    // compilenode identifier
    return var_output;
  };
  func275.paramCounts = [1];
  this.methods["autoindent(1)"] = func275;
  func275.definitionLine = 137;
  func275.definitionModule = "gracedoc";
  setLineNumber(194);    // compilenode method
  var func463 = function(argcv) {    // method directoryBuilderForFile(_)outTo(_)as(_)
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    var var_in = arguments[curarg];
    curarg++;
    var var_dir = arguments[curarg];
    curarg++;
    var var_pageType = arguments[curarg];
    curarg++;
    setModuleName("gracedoc");
    var obj464 = Grace_allocObject(null, "directoryBuilderForFile(_)outTo(_)as(_)");
    obj464.definitionModule = "gracedoc";
    obj464.definitionLine = 194;
    obj464.outer = this;
    var reader_gracedoc_outer465 = function() {
      return this.outer;
    };
    obj464.methods["outer"] = reader_gracedoc_outer465;
    var obj_init_464 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj464;
      var func466 = function(argcv) {    // method generate
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("gracedoc");
        setLineNumber(211);    // compilenode vardec
        var var_outfile;
        var if467 = GraceDone;
        setLineNumber(212);    // compilenode call
        // call case 6: other requests
        var string470 = new GraceString("");
        // call case 6: other requests
        var call473 = callmethodChecked(var_settings, "outputdir", []);
        var string475 = new GraceString("");
        var opresult477 = callmethodChecked(string475, "++(1)", [1], call473);
        var opresult479 = callmethodChecked(opresult477, "++(1)", [1], string470);
        // call case 6: other requests
        var call480 = callmethodChecked(var_io, "exists(1)", [1], opresult479);
        var call481 = callmethodChecked(call480, "prefix!", [0]);
        if (Grace_isTrue(call481)) {
          var string483 = new GraceString("");
          // call case 6: other requests
          var call486 = callmethodChecked(var_settings, "outputdir", []);
          var string488 = new GraceString("mkdir ");
          var opresult490 = callmethodChecked(string488, "++(1)", [1], call486);
          var opresult492 = callmethodChecked(opresult490, "++(1)", [1], string483);
          // call case 6: other requests
          var call493 = callmethodChecked(var_io, "system(1)", [1], opresult492);
          if467 = call493;
        }
        var if494 = GraceDone;
        setLineNumber(213);    // compilenode call
        // call case 6: other requests
        var string497 = new GraceString("");
        // call case 4: self request
        onSelf = true;
        var call500 = callmethodChecked(this, "outdir", []);
        var string502 = new GraceString("/");
        // call case 6: other requests
        var call505 = callmethodChecked(var_settings, "outputdir", []);
        var string507 = new GraceString("");
        var opresult509 = callmethodChecked(string507, "++(1)", [1], call505);
        var opresult511 = callmethodChecked(opresult509, "++(1)", [1], string502);
        var opresult513 = callmethodChecked(opresult511, "++(1)", [1], call500);
        var opresult515 = callmethodChecked(opresult513, "++(1)", [1], string497);
        // call case 6: other requests
        var call516 = callmethodChecked(var_io, "exists(1)", [1], opresult515);
        var call517 = callmethodChecked(call516, "prefix!", [0]);
        if (Grace_isTrue(call517)) {
          var string519 = new GraceString("");
          // call case 4: self request
          onSelf = true;
          var call522 = callmethodChecked(this, "outdir", []);
          var string524 = new GraceString("/");
          // call case 6: other requests
          var call527 = callmethodChecked(var_settings, "outputdir", []);
          var string529 = new GraceString("mkdir ");
          var opresult531 = callmethodChecked(string529, "++(1)", [1], call527);
          var opresult533 = callmethodChecked(opresult531, "++(1)", [1], string524);
          var opresult535 = callmethodChecked(opresult533, "++(1)", [1], call522);
          var opresult537 = callmethodChecked(opresult535, "++(1)", [1], string519);
          // call case 6: other requests
          var call538 = callmethodChecked(var_io, "system(1)", [1], opresult537);
          if494 = call538;
        }
        var if539 = GraceDone;
        setLineNumber(214);    // compilenode call
        // call case 6: other requests
        var string542 = new GraceString("/classes");
        // call case 4: self request
        onSelf = true;
        var call545 = callmethodChecked(this, "outdir", []);
        var string547 = new GraceString("/");
        // call case 6: other requests
        var call550 = callmethodChecked(var_settings, "outputdir", []);
        var string552 = new GraceString("");
        var opresult554 = callmethodChecked(string552, "++(1)", [1], call550);
        var opresult556 = callmethodChecked(opresult554, "++(1)", [1], string547);
        var opresult558 = callmethodChecked(opresult556, "++(1)", [1], call545);
        var opresult560 = callmethodChecked(opresult558, "++(1)", [1], string542);
        // call case 6: other requests
        var call561 = callmethodChecked(var_io, "exists(1)", [1], opresult560);
        var call562 = callmethodChecked(call561, "prefix!", [0]);
        if (Grace_isTrue(call562)) {
          setLineNumber(215);    // compilenode string
          var string564 = new GraceString("/classes");
          // call case 4: self request
          onSelf = true;
          var call567 = callmethodChecked(this, "outdir", []);
          var string569 = new GraceString("/");
          // call case 6: other requests
          var call572 = callmethodChecked(var_settings, "outputdir", []);
          var string574 = new GraceString("mkdir ");
          var opresult576 = callmethodChecked(string574, "++(1)", [1], call572);
          var opresult578 = callmethodChecked(opresult576, "++(1)", [1], string569);
          var opresult580 = callmethodChecked(opresult578, "++(1)", [1], call567);
          var opresult582 = callmethodChecked(opresult580, "++(1)", [1], string564);
          // call case 6: other requests
          var call583 = callmethodChecked(var_io, "system(1)", [1], opresult582);
          if539 = call583;
        }
        var if584 = GraceDone;
        setLineNumber(217);    // compilenode call
        // call case 6: other requests
        var string587 = new GraceString("/types");
        // call case 4: self request
        onSelf = true;
        var call590 = callmethodChecked(this, "outdir", []);
        var string592 = new GraceString("/");
        // call case 6: other requests
        var call595 = callmethodChecked(var_settings, "outputdir", []);
        var string597 = new GraceString("");
        var opresult599 = callmethodChecked(string597, "++(1)", [1], call595);
        var opresult601 = callmethodChecked(opresult599, "++(1)", [1], string592);
        var opresult603 = callmethodChecked(opresult601, "++(1)", [1], call590);
        var opresult605 = callmethodChecked(opresult603, "++(1)", [1], string587);
        // call case 6: other requests
        var call606 = callmethodChecked(var_io, "exists(1)", [1], opresult605);
        var call607 = callmethodChecked(call606, "prefix!", [0]);
        if (Grace_isTrue(call607)) {
          setLineNumber(218);    // compilenode string
          var string609 = new GraceString("/types");
          // call case 4: self request
          onSelf = true;
          var call612 = callmethodChecked(this, "outdir", []);
          var string614 = new GraceString("/");
          // call case 6: other requests
          var call617 = callmethodChecked(var_settings, "outputdir", []);
          var string619 = new GraceString("mkdir ");
          var opresult621 = callmethodChecked(string619, "++(1)", [1], call617);
          var opresult623 = callmethodChecked(opresult621, "++(1)", [1], string614);
          var opresult625 = callmethodChecked(opresult623, "++(1)", [1], call612);
          var opresult627 = callmethodChecked(opresult625, "++(1)", [1], string609);
          // call case 6: other requests
          var call628 = callmethodChecked(var_io, "system(1)", [1], opresult627);
          if584 = call628;
        }
        var if629 = GraceDone;
        setLineNumber(220);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call631 = callmethodChecked(this, "isOnClassPage", []);
        if (Grace_isTrue(call631)) {
          setLineNumber(221);    // compilenode string
          var string633 = new GraceString(".html");
          // call case 4: self request
          onSelf = true;
          var call636 = callmethodChecked(this, "pageName", []);
          var string638 = new GraceString("/classes/");
          // call case 4: self request
          onSelf = true;
          var call641 = callmethodChecked(this, "outdir", []);
          var string643 = new GraceString("/");
          // call case 6: other requests
          var call646 = callmethodChecked(var_settings, "outputdir", []);
          var string648 = new GraceString("");
          var opresult650 = callmethodChecked(string648, "++(1)", [1], call646);
          var opresult652 = callmethodChecked(opresult650, "++(1)", [1], string643);
          var opresult654 = callmethodChecked(opresult652, "++(1)", [1], call641);
          var opresult656 = callmethodChecked(opresult654, "++(1)", [1], string638);
          var opresult658 = callmethodChecked(opresult656, "++(1)", [1], call636);
          var opresult660 = callmethodChecked(opresult658, "++(1)", [1], string633);
          var string661 = new GraceString("w");
          // call case 6: other requests
          var call662 = callmethodChecked(var_io, "open(2)", [2], opresult660, string661);
          var_outfile = call662;
          if629 = GraceDone;
        } else {
          var if663 = GraceDone;
          setLineNumber(222);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call665 = callmethodChecked(this, "isOnTypePage", []);
          if (Grace_isTrue(call665)) {
            setLineNumber(223);    // compilenode string
            var string667 = new GraceString(".html");
            // call case 4: self request
            onSelf = true;
            var call670 = callmethodChecked(this, "pageName", []);
            var string672 = new GraceString("/types/");
            // call case 4: self request
            onSelf = true;
            var call675 = callmethodChecked(this, "outdir", []);
            var string677 = new GraceString("/");
            // call case 6: other requests
            var call680 = callmethodChecked(var_settings, "outputdir", []);
            var string682 = new GraceString("");
            var opresult684 = callmethodChecked(string682, "++(1)", [1], call680);
            var opresult686 = callmethodChecked(opresult684, "++(1)", [1], string677);
            var opresult688 = callmethodChecked(opresult686, "++(1)", [1], call675);
            var opresult690 = callmethodChecked(opresult688, "++(1)", [1], string672);
            var opresult692 = callmethodChecked(opresult690, "++(1)", [1], call670);
            var opresult694 = callmethodChecked(opresult692, "++(1)", [1], string667);
            var string695 = new GraceString("w");
            // call case 6: other requests
            var call696 = callmethodChecked(var_io, "open(2)", [2], opresult694, string695);
            var_outfile = call696;
            if663 = GraceDone;
          } else {
            setLineNumber(225);    // compilenode string
            var string698 = new GraceString(".html");
            // call case 4: self request
            onSelf = true;
            var call701 = callmethodChecked(this, "pageName", []);
            var string703 = new GraceString("/");
            // call case 4: self request
            onSelf = true;
            var call706 = callmethodChecked(this, "outdir", []);
            var string708 = new GraceString("/");
            // call case 6: other requests
            var call711 = callmethodChecked(var_settings, "outputdir", []);
            var string713 = new GraceString("");
            var opresult715 = callmethodChecked(string713, "++(1)", [1], call711);
            var opresult717 = callmethodChecked(opresult715, "++(1)", [1], string708);
            var opresult719 = callmethodChecked(opresult717, "++(1)", [1], call706);
            var opresult721 = callmethodChecked(opresult719, "++(1)", [1], string703);
            var opresult723 = callmethodChecked(opresult721, "++(1)", [1], call701);
            var opresult725 = callmethodChecked(opresult723, "++(1)", [1], string698);
            var string726 = new GraceString("w");
            // call case 6: other requests
            var call727 = callmethodChecked(var_io, "open(2)", [2], opresult725, string726);
            var_outfile = call727;
            if663 = GraceDone;
          }
          if629 = if663;
        }
        setLineNumber(227);    // compilenode string
        var string729 = new GraceString("TEMPORARY");
        // call case 6: other requests
        var call730 = callmethodChecked(var_outfile, "write(1)", [1], string729);
        setLineNumber(228);    // compilenode member
        // call case 6: other requests
        var call732 = callmethodChecked(var_outfile, "close", []);
        var if733 = GraceDone;
        setLineNumber(230);    // compilenode call
        // call case 6: other requests
        // call case 4: self request
        onSelf = true;
        var call736 = callmethodChecked(this, "isOnTypePage", []);
        var call737 = callmethodChecked(call736, "prefix!", [0]);
        // call case 6: other requests
        // call case 4: self request
        onSelf = true;
        var call741 = callmethodChecked(this, "isOnClassPage", []);
        var call742 = callmethodChecked(call741, "prefix!", [0]);
        var opresult744 = callmethodChecked(call742, "&&(1)", [1], call737);
        if (Grace_isTrue(opresult744)) {
          setLineNumber(232);    // compilenode string
          var string745 = new GraceString(" -- https://github.com/reid47/gracedoc -->\n");
          // call case 6: other requests
          var call748 = callmethodChecked(var_settings, "version", []);
          var string750 = new GraceString("<!-- generated by Gracedoc, v");
          var opresult752 = callmethodChecked(string750, "++(1)", [1], call748);
          var opresult754 = callmethodChecked(opresult752, "++(1)", [1], string745);
          var var_out = opresult754;
          setLineNumber(233);    // compilenode string
          var string755 = new GraceString("<!DOCTYPE html>\n<html>");
          var opresult758 = callmethodChecked(var_out, "++(1)", [1], string755);
          var_out = opresult758;
          setLineNumber(234);    // compilenode string
          var string759 = new GraceString("<head>");
          var opresult762 = callmethodChecked(var_out, "++(1)", [1], string759);
          var_out = opresult762;
          setLineNumber(235);    // compilenode string
          var string763 = new GraceString("<title>Modules | GraceDocs</title>");
          var opresult766 = callmethodChecked(var_out, "++(1)", [1], string763);
          var_out = opresult766;
          setLineNumber(236);    // compilenode string
          var string767 = new GraceString("<meta charset=\"UTF-8\" />");
          var opresult770 = callmethodChecked(var_out, "++(1)", [1], string767);
          var_out = opresult770;
          setLineNumber(237);    // compilenode string
          var string771 = new GraceString("<link rel=\"stylesheet\" href=\"gracedoc.css\">");
          var opresult774 = callmethodChecked(var_out, "++(1)", [1], string771);
          var_out = opresult774;
          setLineNumber(238);    // compilenode string
          var string775 = new GraceString("<script type='text/javascript' src=\"gracedoc.js\"></script>");
          var opresult778 = callmethodChecked(var_out, "++(1)", [1], string775);
          var_out = opresult778;
          setLineNumber(239);    // compilenode string
          var string779 = new GraceString("</head>");
          var opresult782 = callmethodChecked(var_out, "++(1)", [1], string779);
          var_out = opresult782;
          setLineNumber(240);    // compilenode string
          var string783 = new GraceString("<body>");
          var opresult786 = callmethodChecked(var_out, "++(1)", [1], string783);
          var_out = opresult786;
          setLineNumber(241);    // compilenode string
          var string787 = new GraceString("<div class='list-container'>");
          var opresult790 = callmethodChecked(var_out, "++(1)", [1], string787);
          var_out = opresult790;
          setLineNumber(242);    // compilenode string
          var string791 = new GraceString("<h5>Modules</h5><ul>");
          var opresult794 = callmethodChecked(var_out, "++(1)", [1], string791);
          var_out = opresult794;
          setLineNumber(243);    // compilenode member
          // call case 6: other requests
          var call797 = callmethodChecked(var_settings, "outputdir", []);
          // call case 6: other requests
          var call798 = callmethodChecked(var_io, "listdir(1)", [1], call797);
          var var_modules = call798;
          setLineNumber(244);    // compilenode member
          // call case 6: other requests
          var call800 = callmethodChecked(var_modules, "iterator", []);
          var var_modit = call800;
          setLineNumber(245);    // compilenode block
          var block802 = new GraceBlock(this, 245, 0);
          block802.real = function() {
            // call case 6: other requests
            var call804 = callmethodChecked(var_modit, "hasNext", []);
            return call804;
          };
          var block805 = new GraceBlock(this, 245, 0);
          block805.real = function() {
            setLineNumber(246);    // compilenode member
            // call case 6: other requests
            var call807 = callmethodChecked(var_modit, "next", []);
            var var_mod = call807;
            var if808 = GraceDone;
            setLineNumber(247);    // compilenode string
            var string809 = new GraceString("inputs");
            var opresult812 = callmethodChecked(var_mod, "\u2260(1)", [1], string809);
            var string814 = new GraceString("404.html");
            var opresult817 = callmethodChecked(var_mod, "\u2260(1)", [1], string814);
            var string819 = new GraceString("modules.html");
            var opresult822 = callmethodChecked(var_mod, "\u2260(1)", [1], string819);
            var string824 = new GraceString("index.html");
            var opresult827 = callmethodChecked(var_mod, "\u2260(1)", [1], string824);
            // call case 6: other requests
            var string831 = new GraceString(".js");
            // call case 6: other requests
            var call832 = callmethodChecked(var_mod, "endsWith(1)", [1], string831);
            var call833 = callmethodChecked(call832, "prefix!", [0]);
            // call case 6: other requests
            var string837 = new GraceString(".css");
            // call case 6: other requests
            var call838 = callmethodChecked(var_mod, "endsWith(1)", [1], string837);
            var call839 = callmethodChecked(call838, "prefix!", [0]);
            var string843 = new GraceString(".");
            // call case 6: other requests
            var call844 = callmethodChecked(var_mod, "startsWith(1)", [1], string843);
            var opresult846 = callmethodChecked(call844, "==(1)", [1], GraceFalse);
            var opresult848 = callmethodChecked(opresult846, "&&(1)", [1], call839);
            var opresult850 = callmethodChecked(opresult848, "&&(1)", [1], call833);
            var opresult852 = callmethodChecked(opresult850, "&&(1)", [1], opresult827);
            var opresult854 = callmethodChecked(opresult852, "&&(1)", [1], opresult822);
            var opresult856 = callmethodChecked(opresult854, "&&(1)", [1], opresult817);
            var opresult858 = callmethodChecked(opresult856, "&&(1)", [1], opresult812);
            if (Grace_isTrue(opresult858)) {
              setLineNumber(248);    // compilenode string
              var string859 = new GraceString("</a></li>");
              var string862 = new GraceString(".html' target='mainFrame'>");
              var string865 = new GraceString("/");
              var string868 = new GraceString("');\">&#9654;</span><a href='");
              var string871 = new GraceString("' onclick=\"toggleContents('");
              var string874 = new GraceString("<li><span class='arrow-button-toggle' id='arrow-button-");
              var opresult876 = callmethodChecked(string874, "++(1)", [1], var_mod);
              var opresult878 = callmethodChecked(opresult876, "++(1)", [1], string871);
              var opresult880 = callmethodChecked(opresult878, "++(1)", [1], var_mod);
              var opresult882 = callmethodChecked(opresult880, "++(1)", [1], string868);
              var opresult884 = callmethodChecked(opresult882, "++(1)", [1], var_mod);
              var opresult886 = callmethodChecked(opresult884, "++(1)", [1], string865);
              var opresult888 = callmethodChecked(opresult886, "++(1)", [1], var_mod);
              var opresult890 = callmethodChecked(opresult888, "++(1)", [1], string862);
              var opresult892 = callmethodChecked(opresult890, "++(1)", [1], var_mod);
              var opresult894 = callmethodChecked(opresult892, "++(1)", [1], string859);
              var opresult897 = callmethodChecked(var_out, "++(1)", [1], opresult894);
              var_out = opresult897;
              setLineNumber(250);    // compilenode string
              var string898 = new GraceString("' style='display:none;'>");
              var string901 = new GraceString("<div class='contents-list' id='contents-");
              var opresult903 = callmethodChecked(string901, "++(1)", [1], var_mod);
              var opresult905 = callmethodChecked(opresult903, "++(1)", [1], string898);
              var opresult908 = callmethodChecked(var_out, "++(1)", [1], opresult905);
              var_out = opresult908;
              setLineNumber(252);    // compilenode string
              var string909 = new GraceString("<h6>Types</h6><ul>");
              var opresult912 = callmethodChecked(var_out, "++(1)", [1], string909);
              var_out = opresult912;
              setLineNumber(253);    // compilenode string
              var string914 = new GraceString("/types");
              var string917 = new GraceString("/");
              // call case 6: other requests
              var call920 = callmethodChecked(var_settings, "outputdir", []);
              var string922 = new GraceString("");
              var opresult924 = callmethodChecked(string922, "++(1)", [1], call920);
              var opresult926 = callmethodChecked(opresult924, "++(1)", [1], string917);
              var opresult928 = callmethodChecked(opresult926, "++(1)", [1], var_mod);
              var opresult930 = callmethodChecked(opresult928, "++(1)", [1], string914);
              // call case 6: other requests
              var call931 = callmethodChecked(var_io, "listdir(1)", [1], opresult930);
              var var_types = call931;
              setLineNumber(254);    // compilenode member
              // call case 6: other requests
              var call933 = callmethodChecked(var_types, "iterator", []);
              var var_typit = call933;
              setLineNumber(255);    // compilenode block
              var block935 = new GraceBlock(this, 255, 0);
              block935.real = function() {
                // call case 6: other requests
                var call937 = callmethodChecked(var_typit, "hasNext", []);
                return call937;
              };
              var block938 = new GraceBlock(this, 255, 0);
              block938.real = function() {
                setLineNumber(256);    // compilenode member
                // call case 6: other requests
                var call940 = callmethodChecked(var_typit, "next", []);
                var var_typ = call940;
                setLineNumber(257);    // compilenode member
                // call case 6: other requests
                var call944 = callmethodChecked(var_typ, "size", []);
                var diff946 = callmethodChecked(call944, "-(1)", [1], new GraceNum(5));
                // call case 6: other requests
                var call947 = callmethodChecked(var_typ, "substringFrom(1)to(1)", [1, 1], new GraceNum(1), diff946);
                var_typ = call947;
                var if948 = GraceDone;
                setLineNumber(258);    // compilenode string
                var string949 = new GraceString("contents.html");
                var opresult952 = callmethodChecked(var_typ, "\u2260(1)", [1], string949);
                var string956 = new GraceString(".");
                // call case 6: other requests
                var call957 = callmethodChecked(var_typ, "startsWith(1)", [1], string956);
                var opresult959 = callmethodChecked(call957, "==(1)", [1], GraceFalse);
                var opresult961 = callmethodChecked(opresult959, "&&(1)", [1], opresult952);
                if (Grace_isTrue(opresult961)) {
                  setLineNumber(259);    // compilenode string
                  var string962 = new GraceString("</a></li>");
                  var string965 = new GraceString(".html' target='mainFrame'>");
                  var string968 = new GraceString("/types/");
                  var string971 = new GraceString("<li><a href='");
                  var opresult973 = callmethodChecked(string971, "++(1)", [1], var_mod);
                  var opresult975 = callmethodChecked(opresult973, "++(1)", [1], string968);
                  var opresult977 = callmethodChecked(opresult975, "++(1)", [1], var_typ);
                  var opresult979 = callmethodChecked(opresult977, "++(1)", [1], string965);
                  var opresult981 = callmethodChecked(opresult979, "++(1)", [1], var_typ);
                  var opresult983 = callmethodChecked(opresult981, "++(1)", [1], string962);
                  var opresult986 = callmethodChecked(var_out, "++(1)", [1], opresult983);
                  var_out = opresult986;
                  if948 = GraceDone;
                }
                return if948;
              };
              // call case 5: prelude request
              var call987 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block935, block938);
              setLineNumber(262);    // compilenode string
              var string988 = new GraceString("</ul>");
              var opresult991 = callmethodChecked(var_out, "++(1)", [1], string988);
              var_out = opresult991;
              setLineNumber(264);    // compilenode string
              var string992 = new GraceString("<h6>Classes</h6><ul>");
              var opresult995 = callmethodChecked(var_out, "++(1)", [1], string992);
              var_out = opresult995;
              setLineNumber(265);    // compilenode string
              var string997 = new GraceString("/classes");
              var string1000 = new GraceString("/");
              // call case 6: other requests
              var call1003 = callmethodChecked(var_settings, "outputdir", []);
              var string1005 = new GraceString("");
              var opresult1007 = callmethodChecked(string1005, "++(1)", [1], call1003);
              var opresult1009 = callmethodChecked(opresult1007, "++(1)", [1], string1000);
              var opresult1011 = callmethodChecked(opresult1009, "++(1)", [1], var_mod);
              var opresult1013 = callmethodChecked(opresult1011, "++(1)", [1], string997);
              // call case 6: other requests
              var call1014 = callmethodChecked(var_io, "listdir(1)", [1], opresult1013);
              var var_clss = call1014;
              setLineNumber(266);    // compilenode member
              // call case 6: other requests
              var call1016 = callmethodChecked(var_clss, "iterator", []);
              var var_clsit = call1016;
              setLineNumber(267);    // compilenode block
              var block1018 = new GraceBlock(this, 267, 0);
              block1018.real = function() {
                // call case 6: other requests
                var call1020 = callmethodChecked(var_clsit, "hasNext", []);
                return call1020;
              };
              var block1021 = new GraceBlock(this, 267, 0);
              block1021.real = function() {
                setLineNumber(268);    // compilenode member
                // call case 6: other requests
                var call1023 = callmethodChecked(var_clsit, "next", []);
                var var_cls = call1023;
                setLineNumber(269);    // compilenode member
                // call case 6: other requests
                var call1027 = callmethodChecked(var_cls, "size", []);
                var diff1029 = callmethodChecked(call1027, "-(1)", [1], new GraceNum(5));
                // call case 6: other requests
                var call1030 = callmethodChecked(var_cls, "substringFrom(1)to(1)", [1, 1], new GraceNum(1), diff1029);
                var_cls = call1030;
                var if1031 = GraceDone;
                setLineNumber(270);    // compilenode string
                var string1032 = new GraceString("contents.html");
                var opresult1035 = callmethodChecked(var_cls, "\u2260(1)", [1], string1032);
                var string1039 = new GraceString(".");
                // call case 6: other requests
                var call1040 = callmethodChecked(var_cls, "startsWith(1)", [1], string1039);
                var opresult1042 = callmethodChecked(call1040, "==(1)", [1], GraceFalse);
                var opresult1044 = callmethodChecked(opresult1042, "&&(1)", [1], opresult1035);
                if (Grace_isTrue(opresult1044)) {
                  setLineNumber(271);    // compilenode string
                  var string1045 = new GraceString("</a></li>");
                  var string1048 = new GraceString(".html' target='mainFrame'>");
                  var string1051 = new GraceString("/classes/");
                  var string1054 = new GraceString("<li><a href='");
                  var opresult1056 = callmethodChecked(string1054, "++(1)", [1], var_mod);
                  var opresult1058 = callmethodChecked(opresult1056, "++(1)", [1], string1051);
                  var opresult1060 = callmethodChecked(opresult1058, "++(1)", [1], var_cls);
                  var opresult1062 = callmethodChecked(opresult1060, "++(1)", [1], string1048);
                  var opresult1064 = callmethodChecked(opresult1062, "++(1)", [1], var_cls);
                  var opresult1066 = callmethodChecked(opresult1064, "++(1)", [1], string1045);
                  var opresult1069 = callmethodChecked(var_out, "++(1)", [1], opresult1066);
                  var_out = opresult1069;
                  if1031 = GraceDone;
                }
                return if1031;
              };
              // call case 5: prelude request
              var call1070 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block1018, block1021);
              setLineNumber(274);    // compilenode string
              var string1071 = new GraceString("</ul>");
              var opresult1074 = callmethodChecked(var_out, "++(1)", [1], string1071);
              var_out = opresult1074;
              setLineNumber(276);    // compilenode string
              var string1075 = new GraceString("</div>");
              var opresult1078 = callmethodChecked(var_out, "++(1)", [1], string1075);
              var_out = opresult1078;
              if808 = GraceDone;
            }
            return if808;
          };
          // call case 5: prelude request
          var call1079 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block802, block805);
          setLineNumber(279);    // compilenode string
          var string1080 = new GraceString("</ul></div></body>");
          var opresult1083 = callmethodChecked(var_out, "++(1)", [1], string1080);
          var_out = opresult1083;
          setLineNumber(280);    // compilenode string
          var string1084 = new GraceString("</html>");
          var opresult1087 = callmethodChecked(var_out, "++(1)", [1], string1084);
          var_out = opresult1087;
          setLineNumber(281);    // compilenode string
          var string1089 = new GraceString("/modules.html");
          // call case 6: other requests
          var call1092 = callmethodChecked(var_settings, "outputdir", []);
          var string1094 = new GraceString("");
          var opresult1096 = callmethodChecked(string1094, "++(1)", [1], call1092);
          var opresult1098 = callmethodChecked(opresult1096, "++(1)", [1], string1089);
          var string1099 = new GraceString("w");
          // call case 6: other requests
          var call1100 = callmethodChecked(var_io, "open(2)", [2], opresult1098, string1099);
          var var_moduleslistfile = call1100;
          setLineNumber(282);    // compilenode identifier
          // call case 6: other requests
          // call case 3: self.outer request
          var call1104 = callmethodChecked(superDepth, "outer", [0]);
          onSelf = true;
          var call1105 = callmethodChecked(call1104, "autoindent(1)", [1], var_out);
          // call case 6: other requests
          var call1106 = callmethodChecked(var_moduleslistfile, "write(1)", [1], call1105);
          setLineNumber(283);    // compilenode member
          // call case 6: other requests
          var call1108 = callmethodChecked(var_moduleslistfile, "close", []);
          if733 = call1108;
        }
        return if733;
      };
      func466.paramCounts = [0];
      obj464.methods["generate"] = func466;
      func466.definitionLine = 210;
      func466.definitionModule = "gracedoc";
      var func1109 = function(argcv) {    // method visitTypeDec(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_o = arguments[curarg];
        curarg++;
        setModuleName("gracedoc");
        var if1110 = GraceDone;
        setLineNumber(288);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call1113 = callmethodChecked(this, "isOnTypePage", []);
        var opresult1115 = callmethodChecked(call1113, "==(1)", [1], GraceFalse);
        if (Grace_isTrue(opresult1115)) {
          setLineNumber(289);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call1119 = callmethodChecked(var_o, "name", []);
          var call1120 = callmethodChecked(call1119, "value", []);
          // call case 4: self request
          onSelf = true;
          var call1122 = callmethodChecked(this, "outdir", []);
          var string1123 = new GraceString("type");
          // call case 6: other requests
          // call case 3: self.outer request
          var call1125 = callmethodChecked(superDepth, "outer", [0]);
          onSelf = true;
          var call1126 = callmethodChecked(call1125, "directoryBuilderForFile(1)outTo(1)as(1)", [1, 1, 1], call1120, call1122, string1123);
          var var_typeVis = call1126;
          setLineNumber(290);    // compilenode identifier
          // call case 6: other requests
          var call1128 = callmethodChecked(var_o, "accept(1)", [1], var_typeVis);
          setLineNumber(291);    // compilenode member
          // call case 6: other requests
          var call1130 = callmethodChecked(var_typeVis, "generate", []);
          setLineNumber(292);    // compilenode identifier
          return GraceFalse;
        }
        setLineNumber(294);    // compilenode identifier
        return GraceTrue;
      };
      func1109.paramCounts = [1];
      obj464.methods["visitTypeDec(1)"] = func1109;
      func1109.definitionLine = 287;
      func1109.definitionModule = "gracedoc";
      var func1131 = function(argcv) {    // method visitMethod(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_m = arguments[curarg];
        curarg++;
        setModuleName("gracedoc");
        var if1132 = GraceDone;
        setLineNumber(298);    // compilenode member
        // call case 6: other requests
        // call case 6: other requests
        var call1135 = callmethodChecked(var_m, "isClass", []);
        var call1136 = callmethodChecked(call1135, "not", []);
        if (Grace_isTrue(call1136)) {
          return GraceFalse;
        }
        var if1137 = GraceDone;
        setLineNumber(299);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call1140 = callmethodChecked(this, "isOnClassPage", []);
        var opresult1142 = callmethodChecked(call1140, "==(1)", [1], GraceFalse);
        if (Grace_isTrue(opresult1142)) {
          setLineNumber(300);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call1145 = callmethodChecked(var_m, "body", []);
          var call1146 = callmethodChecked(call1145, "last", []);
          var var_o = call1146;
          var if1147 = GraceDone;
          setLineNumber(301);    // compilenode member
          // call case 6: other requests
          var call1150 = callmethodChecked(var_o, "superclass", []);
          var opresult1152 = callmethodChecked(call1150, "\u2260(1)", [1], GraceFalse);
          if (Grace_isTrue(opresult1152)) {
            setLineNumber(302);    // compilenode identifier
            // call case 6: other requests
            // call case 6: other requests
            var call1155 = callmethodChecked(var_o, "superclass", []);
            var call1156 = callmethodChecked(call1155, "accept(1)", [1], this);
            if1147 = call1156;
          }
          setLineNumber(304);    // compilenode member
          // call case 6: other requests
          var call1159 = callmethodChecked(var_o, "name", []);
          // call case 4: self request
          onSelf = true;
          var call1161 = callmethodChecked(this, "outdir", []);
          var string1162 = new GraceString("class");
          // call case 6: other requests
          // call case 3: self.outer request
          var call1164 = callmethodChecked(superDepth, "outer", [0]);
          onSelf = true;
          var call1165 = callmethodChecked(call1164, "directoryBuilderForFile(1)outTo(1)as(1)", [1, 1, 1], call1159, call1161, string1162);
          var var_classVis = call1165;
          setLineNumber(305);    // compilenode identifier
          // call case 6: other requests
          var call1167 = callmethodChecked(var_o, "accept(1)", [1], var_classVis);
          setLineNumber(306);    // compilenode member
          // call case 6: other requests
          var call1169 = callmethodChecked(var_classVis, "generate", []);
          setLineNumber(307);    // compilenode identifier
          return GraceFalse;
        }
        setLineNumber(309);    // compilenode identifier
        return GraceTrue;
      };
      func1131.paramCounts = [1];
      obj464.methods["visitMethod(1)"] = func1131;
      func1131.definitionLine = 297;
      func1131.definitionModule = "gracedoc";
      setLineNumber(195);    // compilenode identifier
      // call case 6: other requests
      var call1171 = callmethodChecked(var_ast, "baseVisitor$object(1)", [0, 1], this);
      obj464.superobj = call1171;
      if (call1171.data) obj464.data = call1171.data;
      if (call1171.hasOwnProperty('_value'))
          obj464._value = call1171._value;
      setLineNumber(197);    // compilenode identifier
      obj464.data["isOnClassPage"] = GraceFalse;
      var reader_gracedoc_isOnClassPage1172 = function() {
        return this.data["isOnClassPage"];
      };
      obj464.methods["isOnClassPage"] = reader_gracedoc_isOnClassPage1172;
      obj464.data["isOnClassPage"] = GraceFalse;
      var writer_gracedoc_isOnClassPage1172 = function(argcv, o) {
        this.data["isOnClassPage"] = o;
        return GraceDone;
      };
      obj464.methods["isOnClassPage:=(1)"] = writer_gracedoc_isOnClassPage1172;
      reader_gracedoc_isOnClassPage1172.confidential = true;
      writer_gracedoc_isOnClassPage1172.confidential = true;
      obj464.mutable = true;
      setLineNumber(198);    // compilenode identifier
      obj464.data["isOnTypePage"] = GraceFalse;
      var reader_gracedoc_isOnTypePage1173 = function() {
        return this.data["isOnTypePage"];
      };
      obj464.methods["isOnTypePage"] = reader_gracedoc_isOnTypePage1173;
      obj464.data["isOnTypePage"] = GraceFalse;
      var writer_gracedoc_isOnTypePage1173 = function(argcv, o) {
        this.data["isOnTypePage"] = o;
        return GraceDone;
      };
      obj464.methods["isOnTypePage:=(1)"] = writer_gracedoc_isOnTypePage1173;
      reader_gracedoc_isOnTypePage1173.confidential = true;
      writer_gracedoc_isOnTypePage1173.confidential = true;
      obj464.mutable = true;
      var if1174 = GraceDone;
      setLineNumber(199);    // compilenode string
      var string1175 = new GraceString("class");
      var opresult1178 = callmethodChecked(var_pageType, "==(1)", [1], string1175);
      if (Grace_isTrue(opresult1178)) {
        // call case 4: self request
        onSelf = true;
        var call1180 = callmethodChecked(this, "isOnClassPage:=(1)", [1], GraceTrue);
        if1174 = call1180;
      } else {
        var if1181 = GraceDone;
        setLineNumber(200);    // compilenode string
        var string1182 = new GraceString("type");
        var opresult1185 = callmethodChecked(var_pageType, "==(1)", [1], string1182);
        if (Grace_isTrue(opresult1185)) {
          // call case 4: self request
          onSelf = true;
          var call1187 = callmethodChecked(this, "isOnTypePage:=(1)", [1], GraceTrue);
          if1181 = call1187;
        }
        if1174 = if1181;
      }
      var if1188 = GraceDone;
      setLineNumber(202);    // compilenode member
      // call case 6: other requests
      var string1191 = new GraceString(".grace");
      // call case 6: other requests
      var call1192 = callmethodChecked(var_in, "endsWith(1)", [1], string1191);
      var call1193 = callmethodChecked(call1192, "not", []);
      if (Grace_isTrue(call1193)) {
        if1188 = var_in;
      } else {
        setLineNumber(203);    // compilenode member
        // call case 6: other requests
        var call1197 = callmethodChecked(var_in, "size", []);
        var diff1199 = callmethodChecked(call1197, "-(1)", [1], new GraceNum(6));
        // call case 6: other requests
        var call1200 = callmethodChecked(var_in, "substringFrom(1)to(1)", [1, 1], new GraceNum(0), diff1199);
        if1188 = call1200;
      }
      obj464.data["pageName"] = if1188;
      var reader_gracedoc_pageName1201 = function() {
        return this.data["pageName"];
      };
      reader_gracedoc_pageName1201.def = true;
      reader_gracedoc_pageName1201.confidential = true;
      obj464.methods["pageName"] = reader_gracedoc_pageName1201;
      var if1202 = GraceDone;
      setLineNumber(204);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call1204 = callmethodChecked(this, "isOnTypePage", []);
      if (Grace_isTrue(call1204)) {
        var string1205 = new GraceString("");
        // call case 4: self request
        onSelf = true;
        var call1208 = callmethodChecked(this, "pageName", []);
        var string1210 = new GraceString("Type: ");
        var opresult1212 = callmethodChecked(string1210, "++(1)", [1], call1208);
        var opresult1214 = callmethodChecked(opresult1212, "++(1)", [1], string1205);
        if1202 = opresult1214;
      } else {
        var if1215 = GraceDone;
        setLineNumber(205);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call1217 = callmethodChecked(this, "isOnClassPage", []);
        if (Grace_isTrue(call1217)) {
          var string1218 = new GraceString("");
          // call case 4: self request
          onSelf = true;
          var call1221 = callmethodChecked(this, "pageName", []);
          var string1223 = new GraceString("Class: ");
          var opresult1225 = callmethodChecked(string1223, "++(1)", [1], call1221);
          var opresult1227 = callmethodChecked(opresult1225, "++(1)", [1], string1218);
          if1215 = opresult1227;
        } else {
          setLineNumber(206);    // compilenode string
          var string1228 = new GraceString("");
          // call case 4: self request
          onSelf = true;
          var call1231 = callmethodChecked(this, "pageName", []);
          var string1233 = new GraceString("Module: ");
          var opresult1235 = callmethodChecked(string1233, "++(1)", [1], call1231);
          var opresult1237 = callmethodChecked(opresult1235, "++(1)", [1], string1228);
          if1215 = opresult1237;
        }
        if1202 = if1215;
      }
      obj464.data["title"] = if1202;
      var reader_gracedoc_title1238 = function() {
        return this.data["title"];
      };
      reader_gracedoc_title1238.def = true;
      reader_gracedoc_title1238.confidential = true;
      obj464.methods["title"] = reader_gracedoc_title1238;
      var if1239 = GraceDone;
      setLineNumber(208);    // compilenode member
      // call case 4: self request
      onSelf = true;
      var call1241 = callmethodChecked(this, "isOnTypePage", []);
      // call case 4: self request
      onSelf = true;
      var call1244 = callmethodChecked(this, "isOnClassPage", []);
      var opresult1246 = callmethodChecked(call1244, "||(1)", [1], call1241);
      if (Grace_isTrue(opresult1246)) {
        if1239 = var_dir;
      } else {
        // call case 4: self request
        onSelf = true;
        var call1248 = callmethodChecked(this, "pageName", []);
        if1239 = call1248;
      }
      obj464.data["outdir"] = if1239;
      var reader_gracedoc_outdir1249 = function() {
        return this.data["outdir"];
      };
      reader_gracedoc_outdir1249.def = true;
      reader_gracedoc_outdir1249.confidential = true;
      obj464.methods["outdir"] = reader_gracedoc_outdir1249;
      superDepth = origSuperDepth;
    };
    obj_init_464.apply(obj464, []);
    return obj464;
  };
  func463.paramCounts = [1, 1, 1];
  this.methods["directoryBuilderForFile(1)outTo(1)as(1)"] = func463;
  func463.definitionLine = 194;
  func463.definitionModule = "gracedoc";
    var func1250 = function(argcv) {    // method directoryBuilderForFile(_)outTo(_)as(_)$object(_)
      var curarg = 1;
      var var_in = arguments[curarg];
      curarg++;
      var var_dir = arguments[curarg];
      curarg++;
      var var_pageType = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      // Start argument processing
      curarg = 1;
      curarg++;
      curarg++;
      curarg++;
      // End argument processing
      setModuleName("gracedoc");
      var returnTarget = invocationCount;
      invocationCount++;
      var obj1251 = Grace_allocObject(null, "directoryBuilderForFile(1)outTo(1)as(1)");
      obj1251.definitionModule = "gracedoc";
      obj1251.definitionLine = 194;
      var inho1251 = inheritingObject;
      while (inho1251.superobj) inho1251 = inho1251.superobj;
      inho1251.superobj = obj1251;
      obj1251.data = inheritingObject.data;
      if (inheritingObject.hasOwnProperty('_value'))
        obj1251._value = inheritingObject._value;
      obj1251.outer = this;
      var reader_gracedoc_outer1252 = function() {
        return this.outer;
      };
      obj1251.methods["outer"] = reader_gracedoc_outer1252;
      var obj_init_1251 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj1251;
        var func1253 = function(argcv) {    // method generate
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("gracedoc");
          setLineNumber(211);    // compilenode vardec
          var var_outfile;
          var if1254 = GraceDone;
          setLineNumber(212);    // compilenode call
          // call case 6: other requests
          var string1257 = new GraceString("");
          // call case 6: other requests
          var call1260 = callmethodChecked(var_settings, "outputdir", []);
          var string1262 = new GraceString("");
          var opresult1264 = callmethodChecked(string1262, "++(1)", [1], call1260);
          var opresult1266 = callmethodChecked(opresult1264, "++(1)", [1], string1257);
          // call case 6: other requests
          var call1267 = callmethodChecked(var_io, "exists(1)", [1], opresult1266);
          var call1268 = callmethodChecked(call1267, "prefix!", [0]);
          if (Grace_isTrue(call1268)) {
            var string1270 = new GraceString("");
            // call case 6: other requests
            var call1273 = callmethodChecked(var_settings, "outputdir", []);
            var string1275 = new GraceString("mkdir ");
            var opresult1277 = callmethodChecked(string1275, "++(1)", [1], call1273);
            var opresult1279 = callmethodChecked(opresult1277, "++(1)", [1], string1270);
            // call case 6: other requests
            var call1280 = callmethodChecked(var_io, "system(1)", [1], opresult1279);
            if1254 = call1280;
          }
          var if1281 = GraceDone;
          setLineNumber(213);    // compilenode call
          // call case 6: other requests
          var string1284 = new GraceString("");
          // call case 4: self request
          onSelf = true;
          var call1287 = callmethodChecked(this, "outdir", []);
          var string1289 = new GraceString("/");
          // call case 6: other requests
          var call1292 = callmethodChecked(var_settings, "outputdir", []);
          var string1294 = new GraceString("");
          var opresult1296 = callmethodChecked(string1294, "++(1)", [1], call1292);
          var opresult1298 = callmethodChecked(opresult1296, "++(1)", [1], string1289);
          var opresult1300 = callmethodChecked(opresult1298, "++(1)", [1], call1287);
          var opresult1302 = callmethodChecked(opresult1300, "++(1)", [1], string1284);
          // call case 6: other requests
          var call1303 = callmethodChecked(var_io, "exists(1)", [1], opresult1302);
          var call1304 = callmethodChecked(call1303, "prefix!", [0]);
          if (Grace_isTrue(call1304)) {
            var string1306 = new GraceString("");
            // call case 4: self request
            onSelf = true;
            var call1309 = callmethodChecked(this, "outdir", []);
            var string1311 = new GraceString("/");
            // call case 6: other requests
            var call1314 = callmethodChecked(var_settings, "outputdir", []);
            var string1316 = new GraceString("mkdir ");
            var opresult1318 = callmethodChecked(string1316, "++(1)", [1], call1314);
            var opresult1320 = callmethodChecked(opresult1318, "++(1)", [1], string1311);
            var opresult1322 = callmethodChecked(opresult1320, "++(1)", [1], call1309);
            var opresult1324 = callmethodChecked(opresult1322, "++(1)", [1], string1306);
            // call case 6: other requests
            var call1325 = callmethodChecked(var_io, "system(1)", [1], opresult1324);
            if1281 = call1325;
          }
          var if1326 = GraceDone;
          setLineNumber(214);    // compilenode call
          // call case 6: other requests
          var string1329 = new GraceString("/classes");
          // call case 4: self request
          onSelf = true;
          var call1332 = callmethodChecked(this, "outdir", []);
          var string1334 = new GraceString("/");
          // call case 6: other requests
          var call1337 = callmethodChecked(var_settings, "outputdir", []);
          var string1339 = new GraceString("");
          var opresult1341 = callmethodChecked(string1339, "++(1)", [1], call1337);
          var opresult1343 = callmethodChecked(opresult1341, "++(1)", [1], string1334);
          var opresult1345 = callmethodChecked(opresult1343, "++(1)", [1], call1332);
          var opresult1347 = callmethodChecked(opresult1345, "++(1)", [1], string1329);
          // call case 6: other requests
          var call1348 = callmethodChecked(var_io, "exists(1)", [1], opresult1347);
          var call1349 = callmethodChecked(call1348, "prefix!", [0]);
          if (Grace_isTrue(call1349)) {
            setLineNumber(215);    // compilenode string
            var string1351 = new GraceString("/classes");
            // call case 4: self request
            onSelf = true;
            var call1354 = callmethodChecked(this, "outdir", []);
            var string1356 = new GraceString("/");
            // call case 6: other requests
            var call1359 = callmethodChecked(var_settings, "outputdir", []);
            var string1361 = new GraceString("mkdir ");
            var opresult1363 = callmethodChecked(string1361, "++(1)", [1], call1359);
            var opresult1365 = callmethodChecked(opresult1363, "++(1)", [1], string1356);
            var opresult1367 = callmethodChecked(opresult1365, "++(1)", [1], call1354);
            var opresult1369 = callmethodChecked(opresult1367, "++(1)", [1], string1351);
            // call case 6: other requests
            var call1370 = callmethodChecked(var_io, "system(1)", [1], opresult1369);
            if1326 = call1370;
          }
          var if1371 = GraceDone;
          setLineNumber(217);    // compilenode call
          // call case 6: other requests
          var string1374 = new GraceString("/types");
          // call case 4: self request
          onSelf = true;
          var call1377 = callmethodChecked(this, "outdir", []);
          var string1379 = new GraceString("/");
          // call case 6: other requests
          var call1382 = callmethodChecked(var_settings, "outputdir", []);
          var string1384 = new GraceString("");
          var opresult1386 = callmethodChecked(string1384, "++(1)", [1], call1382);
          var opresult1388 = callmethodChecked(opresult1386, "++(1)", [1], string1379);
          var opresult1390 = callmethodChecked(opresult1388, "++(1)", [1], call1377);
          var opresult1392 = callmethodChecked(opresult1390, "++(1)", [1], string1374);
          // call case 6: other requests
          var call1393 = callmethodChecked(var_io, "exists(1)", [1], opresult1392);
          var call1394 = callmethodChecked(call1393, "prefix!", [0]);
          if (Grace_isTrue(call1394)) {
            setLineNumber(218);    // compilenode string
            var string1396 = new GraceString("/types");
            // call case 4: self request
            onSelf = true;
            var call1399 = callmethodChecked(this, "outdir", []);
            var string1401 = new GraceString("/");
            // call case 6: other requests
            var call1404 = callmethodChecked(var_settings, "outputdir", []);
            var string1406 = new GraceString("mkdir ");
            var opresult1408 = callmethodChecked(string1406, "++(1)", [1], call1404);
            var opresult1410 = callmethodChecked(opresult1408, "++(1)", [1], string1401);
            var opresult1412 = callmethodChecked(opresult1410, "++(1)", [1], call1399);
            var opresult1414 = callmethodChecked(opresult1412, "++(1)", [1], string1396);
            // call case 6: other requests
            var call1415 = callmethodChecked(var_io, "system(1)", [1], opresult1414);
            if1371 = call1415;
          }
          var if1416 = GraceDone;
          setLineNumber(220);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call1418 = callmethodChecked(this, "isOnClassPage", []);
          if (Grace_isTrue(call1418)) {
            setLineNumber(221);    // compilenode string
            var string1420 = new GraceString(".html");
            // call case 4: self request
            onSelf = true;
            var call1423 = callmethodChecked(this, "pageName", []);
            var string1425 = new GraceString("/classes/");
            // call case 4: self request
            onSelf = true;
            var call1428 = callmethodChecked(this, "outdir", []);
            var string1430 = new GraceString("/");
            // call case 6: other requests
            var call1433 = callmethodChecked(var_settings, "outputdir", []);
            var string1435 = new GraceString("");
            var opresult1437 = callmethodChecked(string1435, "++(1)", [1], call1433);
            var opresult1439 = callmethodChecked(opresult1437, "++(1)", [1], string1430);
            var opresult1441 = callmethodChecked(opresult1439, "++(1)", [1], call1428);
            var opresult1443 = callmethodChecked(opresult1441, "++(1)", [1], string1425);
            var opresult1445 = callmethodChecked(opresult1443, "++(1)", [1], call1423);
            var opresult1447 = callmethodChecked(opresult1445, "++(1)", [1], string1420);
            var string1448 = new GraceString("w");
            // call case 6: other requests
            var call1449 = callmethodChecked(var_io, "open(2)", [2], opresult1447, string1448);
            var_outfile = call1449;
            if1416 = GraceDone;
          } else {
            var if1450 = GraceDone;
            setLineNumber(222);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call1452 = callmethodChecked(this, "isOnTypePage", []);
            if (Grace_isTrue(call1452)) {
              setLineNumber(223);    // compilenode string
              var string1454 = new GraceString(".html");
              // call case 4: self request
              onSelf = true;
              var call1457 = callmethodChecked(this, "pageName", []);
              var string1459 = new GraceString("/types/");
              // call case 4: self request
              onSelf = true;
              var call1462 = callmethodChecked(this, "outdir", []);
              var string1464 = new GraceString("/");
              // call case 6: other requests
              var call1467 = callmethodChecked(var_settings, "outputdir", []);
              var string1469 = new GraceString("");
              var opresult1471 = callmethodChecked(string1469, "++(1)", [1], call1467);
              var opresult1473 = callmethodChecked(opresult1471, "++(1)", [1], string1464);
              var opresult1475 = callmethodChecked(opresult1473, "++(1)", [1], call1462);
              var opresult1477 = callmethodChecked(opresult1475, "++(1)", [1], string1459);
              var opresult1479 = callmethodChecked(opresult1477, "++(1)", [1], call1457);
              var opresult1481 = callmethodChecked(opresult1479, "++(1)", [1], string1454);
              var string1482 = new GraceString("w");
              // call case 6: other requests
              var call1483 = callmethodChecked(var_io, "open(2)", [2], opresult1481, string1482);
              var_outfile = call1483;
              if1450 = GraceDone;
            } else {
              setLineNumber(225);    // compilenode string
              var string1485 = new GraceString(".html");
              // call case 4: self request
              onSelf = true;
              var call1488 = callmethodChecked(this, "pageName", []);
              var string1490 = new GraceString("/");
              // call case 4: self request
              onSelf = true;
              var call1493 = callmethodChecked(this, "outdir", []);
              var string1495 = new GraceString("/");
              // call case 6: other requests
              var call1498 = callmethodChecked(var_settings, "outputdir", []);
              var string1500 = new GraceString("");
              var opresult1502 = callmethodChecked(string1500, "++(1)", [1], call1498);
              var opresult1504 = callmethodChecked(opresult1502, "++(1)", [1], string1495);
              var opresult1506 = callmethodChecked(opresult1504, "++(1)", [1], call1493);
              var opresult1508 = callmethodChecked(opresult1506, "++(1)", [1], string1490);
              var opresult1510 = callmethodChecked(opresult1508, "++(1)", [1], call1488);
              var opresult1512 = callmethodChecked(opresult1510, "++(1)", [1], string1485);
              var string1513 = new GraceString("w");
              // call case 6: other requests
              var call1514 = callmethodChecked(var_io, "open(2)", [2], opresult1512, string1513);
              var_outfile = call1514;
              if1450 = GraceDone;
            }
            if1416 = if1450;
          }
          setLineNumber(227);    // compilenode string
          var string1516 = new GraceString("TEMPORARY");
          // call case 6: other requests
          var call1517 = callmethodChecked(var_outfile, "write(1)", [1], string1516);
          setLineNumber(228);    // compilenode member
          // call case 6: other requests
          var call1519 = callmethodChecked(var_outfile, "close", []);
          var if1520 = GraceDone;
          setLineNumber(230);    // compilenode call
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call1523 = callmethodChecked(this, "isOnTypePage", []);
          var call1524 = callmethodChecked(call1523, "prefix!", [0]);
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call1528 = callmethodChecked(this, "isOnClassPage", []);
          var call1529 = callmethodChecked(call1528, "prefix!", [0]);
          var opresult1531 = callmethodChecked(call1529, "&&(1)", [1], call1524);
          if (Grace_isTrue(opresult1531)) {
            setLineNumber(232);    // compilenode string
            var string1532 = new GraceString(" -- https://github.com/reid47/gracedoc -->\n");
            // call case 6: other requests
            var call1535 = callmethodChecked(var_settings, "version", []);
            var string1537 = new GraceString("<!-- generated by Gracedoc, v");
            var opresult1539 = callmethodChecked(string1537, "++(1)", [1], call1535);
            var opresult1541 = callmethodChecked(opresult1539, "++(1)", [1], string1532);
            var var_out = opresult1541;
            setLineNumber(233);    // compilenode string
            var string1542 = new GraceString("<!DOCTYPE html>\n<html>");
            var opresult1545 = callmethodChecked(var_out, "++(1)", [1], string1542);
            var_out = opresult1545;
            setLineNumber(234);    // compilenode string
            var string1546 = new GraceString("<head>");
            var opresult1549 = callmethodChecked(var_out, "++(1)", [1], string1546);
            var_out = opresult1549;
            setLineNumber(235);    // compilenode string
            var string1550 = new GraceString("<title>Modules | GraceDocs</title>");
            var opresult1553 = callmethodChecked(var_out, "++(1)", [1], string1550);
            var_out = opresult1553;
            setLineNumber(236);    // compilenode string
            var string1554 = new GraceString("<meta charset=\"UTF-8\" />");
            var opresult1557 = callmethodChecked(var_out, "++(1)", [1], string1554);
            var_out = opresult1557;
            setLineNumber(237);    // compilenode string
            var string1558 = new GraceString("<link rel=\"stylesheet\" href=\"gracedoc.css\">");
            var opresult1561 = callmethodChecked(var_out, "++(1)", [1], string1558);
            var_out = opresult1561;
            setLineNumber(238);    // compilenode string
            var string1562 = new GraceString("<script type='text/javascript' src=\"gracedoc.js\"></script>");
            var opresult1565 = callmethodChecked(var_out, "++(1)", [1], string1562);
            var_out = opresult1565;
            setLineNumber(239);    // compilenode string
            var string1566 = new GraceString("</head>");
            var opresult1569 = callmethodChecked(var_out, "++(1)", [1], string1566);
            var_out = opresult1569;
            setLineNumber(240);    // compilenode string
            var string1570 = new GraceString("<body>");
            var opresult1573 = callmethodChecked(var_out, "++(1)", [1], string1570);
            var_out = opresult1573;
            setLineNumber(241);    // compilenode string
            var string1574 = new GraceString("<div class='list-container'>");
            var opresult1577 = callmethodChecked(var_out, "++(1)", [1], string1574);
            var_out = opresult1577;
            setLineNumber(242);    // compilenode string
            var string1578 = new GraceString("<h5>Modules</h5><ul>");
            var opresult1581 = callmethodChecked(var_out, "++(1)", [1], string1578);
            var_out = opresult1581;
            setLineNumber(243);    // compilenode member
            // call case 6: other requests
            var call1584 = callmethodChecked(var_settings, "outputdir", []);
            // call case 6: other requests
            var call1585 = callmethodChecked(var_io, "listdir(1)", [1], call1584);
            var var_modules = call1585;
            setLineNumber(244);    // compilenode member
            // call case 6: other requests
            var call1587 = callmethodChecked(var_modules, "iterator", []);
            var var_modit = call1587;
            setLineNumber(245);    // compilenode block
            var block1589 = new GraceBlock(this, 245, 0);
            block1589.real = function() {
              // call case 6: other requests
              var call1591 = callmethodChecked(var_modit, "hasNext", []);
              return call1591;
            };
            var block1592 = new GraceBlock(this, 245, 0);
            block1592.real = function() {
              setLineNumber(246);    // compilenode member
              // call case 6: other requests
              var call1594 = callmethodChecked(var_modit, "next", []);
              var var_mod = call1594;
              var if1595 = GraceDone;
              setLineNumber(247);    // compilenode string
              var string1596 = new GraceString("inputs");
              var opresult1599 = callmethodChecked(var_mod, "\u2260(1)", [1], string1596);
              var string1601 = new GraceString("404.html");
              var opresult1604 = callmethodChecked(var_mod, "\u2260(1)", [1], string1601);
              var string1606 = new GraceString("modules.html");
              var opresult1609 = callmethodChecked(var_mod, "\u2260(1)", [1], string1606);
              var string1611 = new GraceString("index.html");
              var opresult1614 = callmethodChecked(var_mod, "\u2260(1)", [1], string1611);
              // call case 6: other requests
              var string1618 = new GraceString(".js");
              // call case 6: other requests
              var call1619 = callmethodChecked(var_mod, "endsWith(1)", [1], string1618);
              var call1620 = callmethodChecked(call1619, "prefix!", [0]);
              // call case 6: other requests
              var string1624 = new GraceString(".css");
              // call case 6: other requests
              var call1625 = callmethodChecked(var_mod, "endsWith(1)", [1], string1624);
              var call1626 = callmethodChecked(call1625, "prefix!", [0]);
              var string1630 = new GraceString(".");
              // call case 6: other requests
              var call1631 = callmethodChecked(var_mod, "startsWith(1)", [1], string1630);
              var opresult1633 = callmethodChecked(call1631, "==(1)", [1], GraceFalse);
              var opresult1635 = callmethodChecked(opresult1633, "&&(1)", [1], call1626);
              var opresult1637 = callmethodChecked(opresult1635, "&&(1)", [1], call1620);
              var opresult1639 = callmethodChecked(opresult1637, "&&(1)", [1], opresult1614);
              var opresult1641 = callmethodChecked(opresult1639, "&&(1)", [1], opresult1609);
              var opresult1643 = callmethodChecked(opresult1641, "&&(1)", [1], opresult1604);
              var opresult1645 = callmethodChecked(opresult1643, "&&(1)", [1], opresult1599);
              if (Grace_isTrue(opresult1645)) {
                setLineNumber(248);    // compilenode string
                var string1646 = new GraceString("</a></li>");
                var string1649 = new GraceString(".html' target='mainFrame'>");
                var string1652 = new GraceString("/");
                var string1655 = new GraceString("');\">&#9654;</span><a href='");
                var string1658 = new GraceString("' onclick=\"toggleContents('");
                var string1661 = new GraceString("<li><span class='arrow-button-toggle' id='arrow-button-");
                var opresult1663 = callmethodChecked(string1661, "++(1)", [1], var_mod);
                var opresult1665 = callmethodChecked(opresult1663, "++(1)", [1], string1658);
                var opresult1667 = callmethodChecked(opresult1665, "++(1)", [1], var_mod);
                var opresult1669 = callmethodChecked(opresult1667, "++(1)", [1], string1655);
                var opresult1671 = callmethodChecked(opresult1669, "++(1)", [1], var_mod);
                var opresult1673 = callmethodChecked(opresult1671, "++(1)", [1], string1652);
                var opresult1675 = callmethodChecked(opresult1673, "++(1)", [1], var_mod);
                var opresult1677 = callmethodChecked(opresult1675, "++(1)", [1], string1649);
                var opresult1679 = callmethodChecked(opresult1677, "++(1)", [1], var_mod);
                var opresult1681 = callmethodChecked(opresult1679, "++(1)", [1], string1646);
                var opresult1684 = callmethodChecked(var_out, "++(1)", [1], opresult1681);
                var_out = opresult1684;
                setLineNumber(250);    // compilenode string
                var string1685 = new GraceString("' style='display:none;'>");
                var string1688 = new GraceString("<div class='contents-list' id='contents-");
                var opresult1690 = callmethodChecked(string1688, "++(1)", [1], var_mod);
                var opresult1692 = callmethodChecked(opresult1690, "++(1)", [1], string1685);
                var opresult1695 = callmethodChecked(var_out, "++(1)", [1], opresult1692);
                var_out = opresult1695;
                setLineNumber(252);    // compilenode string
                var string1696 = new GraceString("<h6>Types</h6><ul>");
                var opresult1699 = callmethodChecked(var_out, "++(1)", [1], string1696);
                var_out = opresult1699;
                setLineNumber(253);    // compilenode string
                var string1701 = new GraceString("/types");
                var string1704 = new GraceString("/");
                // call case 6: other requests
                var call1707 = callmethodChecked(var_settings, "outputdir", []);
                var string1709 = new GraceString("");
                var opresult1711 = callmethodChecked(string1709, "++(1)", [1], call1707);
                var opresult1713 = callmethodChecked(opresult1711, "++(1)", [1], string1704);
                var opresult1715 = callmethodChecked(opresult1713, "++(1)", [1], var_mod);
                var opresult1717 = callmethodChecked(opresult1715, "++(1)", [1], string1701);
                // call case 6: other requests
                var call1718 = callmethodChecked(var_io, "listdir(1)", [1], opresult1717);
                var var_types = call1718;
                setLineNumber(254);    // compilenode member
                // call case 6: other requests
                var call1720 = callmethodChecked(var_types, "iterator", []);
                var var_typit = call1720;
                setLineNumber(255);    // compilenode block
                var block1722 = new GraceBlock(this, 255, 0);
                block1722.real = function() {
                  // call case 6: other requests
                  var call1724 = callmethodChecked(var_typit, "hasNext", []);
                  return call1724;
                };
                var block1725 = new GraceBlock(this, 255, 0);
                block1725.real = function() {
                  setLineNumber(256);    // compilenode member
                  // call case 6: other requests
                  var call1727 = callmethodChecked(var_typit, "next", []);
                  var var_typ = call1727;
                  setLineNumber(257);    // compilenode member
                  // call case 6: other requests
                  var call1731 = callmethodChecked(var_typ, "size", []);
                  var diff1733 = callmethodChecked(call1731, "-(1)", [1], new GraceNum(5));
                  // call case 6: other requests
                  var call1734 = callmethodChecked(var_typ, "substringFrom(1)to(1)", [1, 1], new GraceNum(1), diff1733);
                  var_typ = call1734;
                  var if1735 = GraceDone;
                  setLineNumber(258);    // compilenode string
                  var string1736 = new GraceString("contents.html");
                  var opresult1739 = callmethodChecked(var_typ, "\u2260(1)", [1], string1736);
                  var string1743 = new GraceString(".");
                  // call case 6: other requests
                  var call1744 = callmethodChecked(var_typ, "startsWith(1)", [1], string1743);
                  var opresult1746 = callmethodChecked(call1744, "==(1)", [1], GraceFalse);
                  var opresult1748 = callmethodChecked(opresult1746, "&&(1)", [1], opresult1739);
                  if (Grace_isTrue(opresult1748)) {
                    setLineNumber(259);    // compilenode string
                    var string1749 = new GraceString("</a></li>");
                    var string1752 = new GraceString(".html' target='mainFrame'>");
                    var string1755 = new GraceString("/types/");
                    var string1758 = new GraceString("<li><a href='");
                    var opresult1760 = callmethodChecked(string1758, "++(1)", [1], var_mod);
                    var opresult1762 = callmethodChecked(opresult1760, "++(1)", [1], string1755);
                    var opresult1764 = callmethodChecked(opresult1762, "++(1)", [1], var_typ);
                    var opresult1766 = callmethodChecked(opresult1764, "++(1)", [1], string1752);
                    var opresult1768 = callmethodChecked(opresult1766, "++(1)", [1], var_typ);
                    var opresult1770 = callmethodChecked(opresult1768, "++(1)", [1], string1749);
                    var opresult1773 = callmethodChecked(var_out, "++(1)", [1], opresult1770);
                    var_out = opresult1773;
                    if1735 = GraceDone;
                  }
                  return if1735;
                };
                // call case 5: prelude request
                var call1774 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block1722, block1725);
                setLineNumber(262);    // compilenode string
                var string1775 = new GraceString("</ul>");
                var opresult1778 = callmethodChecked(var_out, "++(1)", [1], string1775);
                var_out = opresult1778;
                setLineNumber(264);    // compilenode string
                var string1779 = new GraceString("<h6>Classes</h6><ul>");
                var opresult1782 = callmethodChecked(var_out, "++(1)", [1], string1779);
                var_out = opresult1782;
                setLineNumber(265);    // compilenode string
                var string1784 = new GraceString("/classes");
                var string1787 = new GraceString("/");
                // call case 6: other requests
                var call1790 = callmethodChecked(var_settings, "outputdir", []);
                var string1792 = new GraceString("");
                var opresult1794 = callmethodChecked(string1792, "++(1)", [1], call1790);
                var opresult1796 = callmethodChecked(opresult1794, "++(1)", [1], string1787);
                var opresult1798 = callmethodChecked(opresult1796, "++(1)", [1], var_mod);
                var opresult1800 = callmethodChecked(opresult1798, "++(1)", [1], string1784);
                // call case 6: other requests
                var call1801 = callmethodChecked(var_io, "listdir(1)", [1], opresult1800);
                var var_clss = call1801;
                setLineNumber(266);    // compilenode member
                // call case 6: other requests
                var call1803 = callmethodChecked(var_clss, "iterator", []);
                var var_clsit = call1803;
                setLineNumber(267);    // compilenode block
                var block1805 = new GraceBlock(this, 267, 0);
                block1805.real = function() {
                  // call case 6: other requests
                  var call1807 = callmethodChecked(var_clsit, "hasNext", []);
                  return call1807;
                };
                var block1808 = new GraceBlock(this, 267, 0);
                block1808.real = function() {
                  setLineNumber(268);    // compilenode member
                  // call case 6: other requests
                  var call1810 = callmethodChecked(var_clsit, "next", []);
                  var var_cls = call1810;
                  setLineNumber(269);    // compilenode member
                  // call case 6: other requests
                  var call1814 = callmethodChecked(var_cls, "size", []);
                  var diff1816 = callmethodChecked(call1814, "-(1)", [1], new GraceNum(5));
                  // call case 6: other requests
                  var call1817 = callmethodChecked(var_cls, "substringFrom(1)to(1)", [1, 1], new GraceNum(1), diff1816);
                  var_cls = call1817;
                  var if1818 = GraceDone;
                  setLineNumber(270);    // compilenode string
                  var string1819 = new GraceString("contents.html");
                  var opresult1822 = callmethodChecked(var_cls, "\u2260(1)", [1], string1819);
                  var string1826 = new GraceString(".");
                  // call case 6: other requests
                  var call1827 = callmethodChecked(var_cls, "startsWith(1)", [1], string1826);
                  var opresult1829 = callmethodChecked(call1827, "==(1)", [1], GraceFalse);
                  var opresult1831 = callmethodChecked(opresult1829, "&&(1)", [1], opresult1822);
                  if (Grace_isTrue(opresult1831)) {
                    setLineNumber(271);    // compilenode string
                    var string1832 = new GraceString("</a></li>");
                    var string1835 = new GraceString(".html' target='mainFrame'>");
                    var string1838 = new GraceString("/classes/");
                    var string1841 = new GraceString("<li><a href='");
                    var opresult1843 = callmethodChecked(string1841, "++(1)", [1], var_mod);
                    var opresult1845 = callmethodChecked(opresult1843, "++(1)", [1], string1838);
                    var opresult1847 = callmethodChecked(opresult1845, "++(1)", [1], var_cls);
                    var opresult1849 = callmethodChecked(opresult1847, "++(1)", [1], string1835);
                    var opresult1851 = callmethodChecked(opresult1849, "++(1)", [1], var_cls);
                    var opresult1853 = callmethodChecked(opresult1851, "++(1)", [1], string1832);
                    var opresult1856 = callmethodChecked(var_out, "++(1)", [1], opresult1853);
                    var_out = opresult1856;
                    if1818 = GraceDone;
                  }
                  return if1818;
                };
                // call case 5: prelude request
                var call1857 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block1805, block1808);
                setLineNumber(274);    // compilenode string
                var string1858 = new GraceString("</ul>");
                var opresult1861 = callmethodChecked(var_out, "++(1)", [1], string1858);
                var_out = opresult1861;
                setLineNumber(276);    // compilenode string
                var string1862 = new GraceString("</div>");
                var opresult1865 = callmethodChecked(var_out, "++(1)", [1], string1862);
                var_out = opresult1865;
                if1595 = GraceDone;
              }
              return if1595;
            };
            // call case 5: prelude request
            var call1866 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block1589, block1592);
            setLineNumber(279);    // compilenode string
            var string1867 = new GraceString("</ul></div></body>");
            var opresult1870 = callmethodChecked(var_out, "++(1)", [1], string1867);
            var_out = opresult1870;
            setLineNumber(280);    // compilenode string
            var string1871 = new GraceString("</html>");
            var opresult1874 = callmethodChecked(var_out, "++(1)", [1], string1871);
            var_out = opresult1874;
            setLineNumber(281);    // compilenode string
            var string1876 = new GraceString("/modules.html");
            // call case 6: other requests
            var call1879 = callmethodChecked(var_settings, "outputdir", []);
            var string1881 = new GraceString("");
            var opresult1883 = callmethodChecked(string1881, "++(1)", [1], call1879);
            var opresult1885 = callmethodChecked(opresult1883, "++(1)", [1], string1876);
            var string1886 = new GraceString("w");
            // call case 6: other requests
            var call1887 = callmethodChecked(var_io, "open(2)", [2], opresult1885, string1886);
            var var_moduleslistfile = call1887;
            setLineNumber(282);    // compilenode identifier
            // call case 6: other requests
            // call case 3: self.outer request
            var call1891 = callmethodChecked(superDepth, "outer", [0]);
            onSelf = true;
            var call1892 = callmethodChecked(call1891, "autoindent(1)", [1], var_out);
            // call case 6: other requests
            var call1893 = callmethodChecked(var_moduleslistfile, "write(1)", [1], call1892);
            setLineNumber(283);    // compilenode member
            // call case 6: other requests
            var call1895 = callmethodChecked(var_moduleslistfile, "close", []);
            if1520 = call1895;
          }
          return if1520;
        };
        func1253.paramCounts = [0];
        obj1251.methods["generate"] = func1253;
        func1253.definitionLine = 210;
        func1253.definitionModule = "gracedoc";
        var func1896 = function(argcv) {    // method visitTypeDec(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_o = arguments[curarg];
          curarg++;
          setModuleName("gracedoc");
          var if1897 = GraceDone;
          setLineNumber(288);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call1900 = callmethodChecked(this, "isOnTypePage", []);
          var opresult1902 = callmethodChecked(call1900, "==(1)", [1], GraceFalse);
          if (Grace_isTrue(opresult1902)) {
            setLineNumber(289);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call1906 = callmethodChecked(var_o, "name", []);
            var call1907 = callmethodChecked(call1906, "value", []);
            // call case 4: self request
            onSelf = true;
            var call1909 = callmethodChecked(this, "outdir", []);
            var string1910 = new GraceString("type");
            // call case 6: other requests
            // call case 3: self.outer request
            var call1912 = callmethodChecked(superDepth, "outer", [0]);
            onSelf = true;
            var call1913 = callmethodChecked(call1912, "directoryBuilderForFile(1)outTo(1)as(1)", [1, 1, 1], call1907, call1909, string1910);
            var var_typeVis = call1913;
            setLineNumber(290);    // compilenode identifier
            // call case 6: other requests
            var call1915 = callmethodChecked(var_o, "accept(1)", [1], var_typeVis);
            setLineNumber(291);    // compilenode member
            // call case 6: other requests
            var call1917 = callmethodChecked(var_typeVis, "generate", []);
            setLineNumber(292);    // compilenode identifier
            return GraceFalse;
          }
          setLineNumber(294);    // compilenode identifier
          return GraceTrue;
        };
        func1896.paramCounts = [1];
        obj1251.methods["visitTypeDec(1)"] = func1896;
        func1896.definitionLine = 287;
        func1896.definitionModule = "gracedoc";
        var func1918 = function(argcv) {    // method visitMethod(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_m = arguments[curarg];
          curarg++;
          setModuleName("gracedoc");
          var if1919 = GraceDone;
          setLineNumber(298);    // compilenode member
          // call case 6: other requests
          // call case 6: other requests
          var call1922 = callmethodChecked(var_m, "isClass", []);
          var call1923 = callmethodChecked(call1922, "not", []);
          if (Grace_isTrue(call1923)) {
            return GraceFalse;
          }
          var if1924 = GraceDone;
          setLineNumber(299);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call1927 = callmethodChecked(this, "isOnClassPage", []);
          var opresult1929 = callmethodChecked(call1927, "==(1)", [1], GraceFalse);
          if (Grace_isTrue(opresult1929)) {
            setLineNumber(300);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            var call1932 = callmethodChecked(var_m, "body", []);
            var call1933 = callmethodChecked(call1932, "last", []);
            var var_o = call1933;
            var if1934 = GraceDone;
            setLineNumber(301);    // compilenode member
            // call case 6: other requests
            var call1937 = callmethodChecked(var_o, "superclass", []);
            var opresult1939 = callmethodChecked(call1937, "\u2260(1)", [1], GraceFalse);
            if (Grace_isTrue(opresult1939)) {
              setLineNumber(302);    // compilenode identifier
              // call case 6: other requests
              // call case 6: other requests
              var call1942 = callmethodChecked(var_o, "superclass", []);
              var call1943 = callmethodChecked(call1942, "accept(1)", [1], this);
              if1934 = call1943;
            }
            setLineNumber(304);    // compilenode member
            // call case 6: other requests
            var call1946 = callmethodChecked(var_o, "name", []);
            // call case 4: self request
            onSelf = true;
            var call1948 = callmethodChecked(this, "outdir", []);
            var string1949 = new GraceString("class");
            // call case 6: other requests
            // call case 3: self.outer request
            var call1951 = callmethodChecked(superDepth, "outer", [0]);
            onSelf = true;
            var call1952 = callmethodChecked(call1951, "directoryBuilderForFile(1)outTo(1)as(1)", [1, 1, 1], call1946, call1948, string1949);
            var var_classVis = call1952;
            setLineNumber(305);    // compilenode identifier
            // call case 6: other requests
            var call1954 = callmethodChecked(var_o, "accept(1)", [1], var_classVis);
            setLineNumber(306);    // compilenode member
            // call case 6: other requests
            var call1956 = callmethodChecked(var_classVis, "generate", []);
            setLineNumber(307);    // compilenode identifier
            return GraceFalse;
          }
          setLineNumber(309);    // compilenode identifier
          return GraceTrue;
        };
        func1918.paramCounts = [1];
        obj1251.methods["visitMethod(1)"] = func1918;
        func1918.definitionLine = 297;
        func1918.definitionModule = "gracedoc";
        setLineNumber(195);    // compilenode identifier
        // call case 6: other requests
        var call1958 = callmethodChecked(var_ast, "baseVisitor$object(1)", [0, 1], this);
        obj1251.superobj = call1958;
        if (call1958.data) obj1251.data = call1958.data;
        if (call1958.hasOwnProperty('_value'))
            obj1251._value = call1958._value;
        setLineNumber(197);    // compilenode identifier
        obj1251.data["isOnClassPage"] = GraceFalse;
        var reader_gracedoc_isOnClassPage1959 = function() {
          return this.data["isOnClassPage"];
        };
        obj1251.methods["isOnClassPage"] = reader_gracedoc_isOnClassPage1959;
        obj1251.data["isOnClassPage"] = GraceFalse;
        var writer_gracedoc_isOnClassPage1959 = function(argcv, o) {
          this.data["isOnClassPage"] = o;
          return GraceDone;
        };
        obj1251.methods["isOnClassPage:=(1)"] = writer_gracedoc_isOnClassPage1959;
        reader_gracedoc_isOnClassPage1959.confidential = true;
        writer_gracedoc_isOnClassPage1959.confidential = true;
        obj1251.mutable = true;
        setLineNumber(198);    // compilenode identifier
        obj1251.data["isOnTypePage"] = GraceFalse;
        var reader_gracedoc_isOnTypePage1960 = function() {
          return this.data["isOnTypePage"];
        };
        obj1251.methods["isOnTypePage"] = reader_gracedoc_isOnTypePage1960;
        obj1251.data["isOnTypePage"] = GraceFalse;
        var writer_gracedoc_isOnTypePage1960 = function(argcv, o) {
          this.data["isOnTypePage"] = o;
          return GraceDone;
        };
        obj1251.methods["isOnTypePage:=(1)"] = writer_gracedoc_isOnTypePage1960;
        reader_gracedoc_isOnTypePage1960.confidential = true;
        writer_gracedoc_isOnTypePage1960.confidential = true;
        obj1251.mutable = true;
        var if1961 = GraceDone;
        setLineNumber(199);    // compilenode string
        var string1962 = new GraceString("class");
        var opresult1965 = callmethodChecked(var_pageType, "==(1)", [1], string1962);
        if (Grace_isTrue(opresult1965)) {
          // call case 4: self request
          onSelf = true;
          var call1967 = callmethodChecked(this, "isOnClassPage:=(1)", [1], GraceTrue);
          if1961 = call1967;
        } else {
          var if1968 = GraceDone;
          setLineNumber(200);    // compilenode string
          var string1969 = new GraceString("type");
          var opresult1972 = callmethodChecked(var_pageType, "==(1)", [1], string1969);
          if (Grace_isTrue(opresult1972)) {
            // call case 4: self request
            onSelf = true;
            var call1974 = callmethodChecked(this, "isOnTypePage:=(1)", [1], GraceTrue);
            if1968 = call1974;
          }
          if1961 = if1968;
        }
        var if1975 = GraceDone;
        setLineNumber(202);    // compilenode member
        // call case 6: other requests
        var string1978 = new GraceString(".grace");
        // call case 6: other requests
        var call1979 = callmethodChecked(var_in, "endsWith(1)", [1], string1978);
        var call1980 = callmethodChecked(call1979, "not", []);
        if (Grace_isTrue(call1980)) {
          if1975 = var_in;
        } else {
          setLineNumber(203);    // compilenode member
          // call case 6: other requests
          var call1984 = callmethodChecked(var_in, "size", []);
          var diff1986 = callmethodChecked(call1984, "-(1)", [1], new GraceNum(6));
          // call case 6: other requests
          var call1987 = callmethodChecked(var_in, "substringFrom(1)to(1)", [1, 1], new GraceNum(0), diff1986);
          if1975 = call1987;
        }
        obj1251.data["pageName"] = if1975;
        var reader_gracedoc_pageName1988 = function() {
          return this.data["pageName"];
        };
        reader_gracedoc_pageName1988.def = true;
        reader_gracedoc_pageName1988.confidential = true;
        obj1251.methods["pageName"] = reader_gracedoc_pageName1988;
        var if1989 = GraceDone;
        setLineNumber(204);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call1991 = callmethodChecked(this, "isOnTypePage", []);
        if (Grace_isTrue(call1991)) {
          var string1992 = new GraceString("");
          // call case 4: self request
          onSelf = true;
          var call1995 = callmethodChecked(this, "pageName", []);
          var string1997 = new GraceString("Type: ");
          var opresult1999 = callmethodChecked(string1997, "++(1)", [1], call1995);
          var opresult2001 = callmethodChecked(opresult1999, "++(1)", [1], string1992);
          if1989 = opresult2001;
        } else {
          var if2002 = GraceDone;
          setLineNumber(205);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call2004 = callmethodChecked(this, "isOnClassPage", []);
          if (Grace_isTrue(call2004)) {
            var string2005 = new GraceString("");
            // call case 4: self request
            onSelf = true;
            var call2008 = callmethodChecked(this, "pageName", []);
            var string2010 = new GraceString("Class: ");
            var opresult2012 = callmethodChecked(string2010, "++(1)", [1], call2008);
            var opresult2014 = callmethodChecked(opresult2012, "++(1)", [1], string2005);
            if2002 = opresult2014;
          } else {
            setLineNumber(206);    // compilenode string
            var string2015 = new GraceString("");
            // call case 4: self request
            onSelf = true;
            var call2018 = callmethodChecked(this, "pageName", []);
            var string2020 = new GraceString("Module: ");
            var opresult2022 = callmethodChecked(string2020, "++(1)", [1], call2018);
            var opresult2024 = callmethodChecked(opresult2022, "++(1)", [1], string2015);
            if2002 = opresult2024;
          }
          if1989 = if2002;
        }
        obj1251.data["title"] = if1989;
        var reader_gracedoc_title2025 = function() {
          return this.data["title"];
        };
        reader_gracedoc_title2025.def = true;
        reader_gracedoc_title2025.confidential = true;
        obj1251.methods["title"] = reader_gracedoc_title2025;
        var if2026 = GraceDone;
        setLineNumber(208);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call2028 = callmethodChecked(this, "isOnTypePage", []);
        // call case 4: self request
        onSelf = true;
        var call2031 = callmethodChecked(this, "isOnClassPage", []);
        var opresult2033 = callmethodChecked(call2031, "||(1)", [1], call2028);
        if (Grace_isTrue(opresult2033)) {
          if2026 = var_dir;
        } else {
          // call case 4: self request
          onSelf = true;
          var call2035 = callmethodChecked(this, "pageName", []);
          if2026 = call2035;
        }
        obj1251.data["outdir"] = if2026;
        var reader_gracedoc_outdir2036 = function() {
          return this.data["outdir"];
        };
        reader_gracedoc_outdir2036.def = true;
        reader_gracedoc_outdir2036.confidential = true;
        obj1251.methods["outdir"] = reader_gracedoc_outdir2036;
        superDepth = origSuperDepth;
      };
      obj_init_1251.apply(inheritingObject, []);
      return obj1251;
      };
      this.methods["directoryBuilderForFile(1)outTo(1)as(1)$object(1)"] = func1250;
    setLineNumber(1243);    // compilenode method
    var func2037 = function(argcv) {    // method formatComments(_)rowClass(_)colspan(_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_astNode = arguments[curarg];
      curarg++;
      var var_rowClassName = arguments[curarg];
      curarg++;
      var var_n = arguments[curarg];
      curarg++;
      setModuleName("gracedoc");
      setLineNumber(1244);    // compilenode string
      var string2038 = new GraceString("");
      var var_t = string2038;
      var if2039 = GraceDone;
      setLineNumber(1245);    // compilenode member
      // call case 6: other requests
      var call2041 = callmethodChecked(var_astNode, "comments", []);
      var opresult2044 = callmethodChecked(GraceFalse, "\u2260(1)", [1], call2041);
      if (Grace_isTrue(opresult2044)) {
        setLineNumber(1246);    // compilenode string
        var string2045 = new GraceString("'>");
        var string2048 = new GraceString("'><td colspan='");
        var string2051 = new GraceString("<tr class='");
        var opresult2053 = callmethodChecked(string2051, "++(1)", [1], var_rowClassName);
        var opresult2055 = callmethodChecked(opresult2053, "++(1)", [1], string2048);
        var opresult2057 = callmethodChecked(opresult2055, "++(1)", [1], var_n);
        var opresult2059 = callmethodChecked(opresult2057, "++(1)", [1], string2045);
        var opresult2062 = callmethodChecked(var_t, "++(1)", [1], opresult2059);
        var_t = opresult2062;
        setLineNumber(1247);    // compilenode string
        var string2063 = new GraceString("\n");
        // call case 6: other requests
        // call case 6: other requests
        var call2067 = callmethodChecked(var_astNode, "comments", []);
        var call2068 = callmethodChecked(call2067, "value", []);
        var opresult2071 = callmethodChecked(var_t, "++(1)", [1], call2068);
        var opresult2073 = callmethodChecked(opresult2071, "++(1)", [1], string2063);
        var_t = opresult2073;
        setLineNumber(1248);    // compilenode string
        var string2074 = new GraceString("</td></tr>");
        var opresult2077 = callmethodChecked(var_t, "++(1)", [1], string2074);
        var_t = opresult2077;
        if2039 = GraceDone;
      }
      setLineNumber(1250);    // return value
      if (!Grace_isTrue(callmethod(var_String, "match(1)", [1], var_t)))
          throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("result of method formatComments(_)rowClass(_)colspan(_) does not have " + 
                  callmethod(var_String, "asString", [0])._value + "."));
      return var_t;
    };
    func2037.paramCounts = [1, 1, 1];
    this.methods["formatComments(1)rowClass(1)colspan(1)"] = func2037;
    func2037.definitionLine = 1243;
    func2037.definitionModule = "gracedoc";
    setLineNumber(7);    // compilenode object
    var obj2078 = Grace_allocObject(GraceObject, "settings");
    obj2078.definitionModule = "gracedoc";
    obj2078.definitionLine = 7;
    obj2078.outer = this;
    var reader_gracedoc_outer2079 = function() {
      return this.outer;
    };
    obj2078.methods["outer"] = reader_gracedoc_outer2079;
    var obj_init_2078 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj2078;
      setLineNumber(8);    // compilenode string
      var string2080 = new GraceString("");
      obj2078.data["inputdir"] = string2080;
      var reader_gracedoc_inputdir2081 = function() {
        return this.data["inputdir"];
      };
      obj2078.methods["inputdir"] = reader_gracedoc_inputdir2081;
      obj2078.data["inputdir"] = string2080;
      var writer_gracedoc_inputdir2081 = function(argcv, o) {
        this.data["inputdir"] = o;
        return GraceDone;
      };
      obj2078.methods["inputdir:=(1)"] = writer_gracedoc_inputdir2081;
      if (!Grace_isTrue(callmethod(var_String, "match(1)", [1], string2080)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("initial value of var 'inputdir' is not of type String"));
      obj2078.mutable = true;
      setLineNumber(9);    // compilenode string
      var string2082 = new GraceString("");
      obj2078.data["outputdir"] = string2082;
      var reader_gracedoc_outputdir2083 = function() {
        return this.data["outputdir"];
      };
      obj2078.methods["outputdir"] = reader_gracedoc_outputdir2083;
      obj2078.data["outputdir"] = string2082;
      var writer_gracedoc_outputdir2083 = function(argcv, o) {
        this.data["outputdir"] = o;
        return GraceDone;
      };
      obj2078.methods["outputdir:=(1)"] = writer_gracedoc_outputdir2083;
      if (!Grace_isTrue(callmethod(var_String, "match(1)", [1], string2082)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("initial value of var 'outputdir' is not of type String"));
      obj2078.mutable = true;
      setLineNumber(10);    // compilenode num
      obj2078.data["verbosity"] = new GraceNum(0);
      var reader_gracedoc_verbosity2084 = function() {
        return this.data["verbosity"];
      };
      obj2078.methods["verbosity"] = reader_gracedoc_verbosity2084;
      obj2078.data["verbosity"] = new GraceNum(0);
      var writer_gracedoc_verbosity2084 = function(argcv, o) {
        this.data["verbosity"] = o;
        return GraceDone;
      };
      obj2078.methods["verbosity:=(1)"] = writer_gracedoc_verbosity2084;
      if (!Grace_isTrue(callmethod(var_Number, "match(1)", [1], new GraceNum(0))))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("initial value of var 'verbosity' is not of type Number"));
      obj2078.mutable = true;
      setLineNumber(11);    // compilenode identifier
      obj2078.data["publicOnly"] = GraceFalse;
      var reader_gracedoc_publicOnly2085 = function() {
        return this.data["publicOnly"];
      };
      obj2078.methods["publicOnly"] = reader_gracedoc_publicOnly2085;
      obj2078.data["publicOnly"] = GraceFalse;
      var writer_gracedoc_publicOnly2085 = function(argcv, o) {
        this.data["publicOnly"] = o;
        return GraceDone;
      };
      obj2078.methods["publicOnly:=(1)"] = writer_gracedoc_publicOnly2085;
      if (!Grace_isTrue(callmethod(var_Boolean, "match(1)", [1], GraceFalse)))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("initial value of var 'publicOnly' is not of type Boolean"));
      obj2078.mutable = true;
      setLineNumber(12);    // compilenode num
      obj2078.data["version"] = new GraceNum(1.1);
      var reader_gracedoc_version2086 = function() {
        return this.data["version"];
      };
      reader_gracedoc_version2086.def = true;
      obj2078.methods["version"] = reader_gracedoc_version2086;
      if (!Grace_isTrue(callmethod(var_Number, "match(1)", [1], new GraceNum(1.1))))
        throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("value of def 'version' is not of type Number"));
      superDepth = origSuperDepth;
    };
    obj_init_2078.apply(obj2078, []);
    var var_settings = obj2078;
    setLineNumber(1);    // compilenode method
    var func2087 = function(argcv) {    // method settings
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      setModuleName("gracedoc");
      // settings is a simple accessor - elide try ... catch
      setLineNumber(7);    // compilenode identifier
      return var_settings;
    };
    func2087.paramCounts = [0];
    this.methods["settings"] = func2087;
    func2087.definitionLine = 1;
    func2087.definitionModule = "gracedoc";
    this.methods["settings"].debug = "def";
    setLineNumber(77);    // compilenode typedec
    // Type decl Section
    //   Type literal 
    var type2089 = new GraceType("Section");
    type2089.typeMethods.push("html");
    type2089.typeMethods.push("isEmpty");
    type2089.typeMethods.push("insert");
    var var_Section = type2089;
    setLineNumber(1);    // compilenode method
    var func2090 = function(argcv) {    // method Section
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      setModuleName("gracedoc");
      // Section is a simple accessor - elide try ... catch
      setLineNumber(77);    // compilenode identifier
      return var_Section;
    };
    func2090.paramCounts = [0];
    this.methods["Section"] = func2090;
    func2090.definitionLine = 1;
    func2090.definitionModule = "gracedoc";
    setLineNumber(83);    // compilenode object
    var obj2091 = Grace_allocObject(GraceObject, "section");
    obj2091.definitionModule = "gracedoc";
    obj2091.definitionLine = 83;
    obj2091.outer = this;
    var reader_gracedoc_outer2092 = function() {
      return this.outer;
    };
    obj2091.methods["outer"] = reader_gracedoc_outer2092;
    var obj_init_2091 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj2091;
      var func2093 = function(argcv) {    // method withTemplate(_)andCursorAt(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_html__39__ = arguments[curarg];
        curarg++;
        var var_idx = arguments[curarg];
        curarg++;
        setModuleName("gracedoc");
        var obj2094 = Grace_allocObject(GraceObject, "section.section.withTemplate(_)andCursorAt(_)");
        obj2094.definitionModule = "gracedoc";
        obj2094.definitionLine = 83;
        obj2094.outer = this;
        var reader_gracedoc_outer2095 = function() {
          return this.outer;
        };
        obj2094.methods["outer"] = reader_gracedoc_outer2095;
        var obj_init_2094 = function() {
          var origSuperDepth = superDepth;
          superDepth = obj2094;
          var func2096 = function(argcv) {    // method addElement(_)withText(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_n = arguments[curarg];
            curarg++;
            var var_t = arguments[curarg];
            curarg++;
            // Start argument checking
            curarg = 1;
            setLineNumber(88);    // compilenode identifier
            if (!Grace_isTrue(callmethod(var_String, "match(1)",  [1], arguments[curarg])))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("argument 1 in addElement (arg list 1), which corresponds to parameter n, does not have " + 
                        callmethod(var_String, "asString", [0])._value + "."));
            curarg++;
            if (!Grace_isTrue(callmethod(var_String, "match(1)",  [1], arguments[curarg])))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("argument 1 in withText (arg list 2), which corresponds to parameter t, does not have " + 
                        callmethod(var_String, "asString", [0])._value + "."));
            curarg++;
            // End argument checking
            setModuleName("gracedoc");
            setLineNumber(89);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call2098 = callmethodChecked(this, "hasContent:=(1)", [1], GraceTrue);
            setLineNumber(90);    // compilenode identifier
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call2101 = callmethodChecked(this, "elts", []);
            var call2102 = callmethodChecked(call2101, "at(1)put(1)", [1, 1], var_n, var_t);
            return call2102;
          };
          func2096.paramTypes = [];
          func2096.paramTypes.push([type_String, "n"]);
          func2096.paramTypes.push([type_String, "t"]);
          func2096.paramCounts = [1, 1];
          obj2094.methods["addElement(1)withText(1)"] = func2096;
          func2096.definitionLine = 88;
          func2096.definitionModule = "gracedoc";
          var func2103 = function(argcv) {    // method insert(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_t = arguments[curarg];
            curarg++;
            // Start argument checking
            curarg = 1;
            setLineNumber(92);    // compilenode identifier
            if (!Grace_isTrue(callmethod(var_String, "match(1)",  [1], arguments[curarg])))
                throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("argument 1 in insert (arg list 1), which corresponds to parameter t, does not have " + 
                        callmethod(var_String, "asString", [0])._value + "."));
            curarg++;
            // End argument checking
            setModuleName("gracedoc");
            setLineNumber(93);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call2105 = callmethodChecked(this, "hasContent:=(1)", [1], GraceTrue);
            setLineNumber(94);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call2108 = callmethodChecked(this, "cursor", []);
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call2110 = callmethodChecked(this, "html", []);
            var call2111 = callmethodChecked(call2110, "substringFrom(1)to(1)", [1, 1], new GraceNum(1), call2108);
            var var_begin = call2111;
            setLineNumber(95);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call2115 = callmethodChecked(this, "cursor", []);
            var opresult2117 = callmethodChecked(call2115, "+(1)", [1], new GraceNum(1));
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call2120 = callmethodChecked(this, "html", []);
            var call2121 = callmethodChecked(call2120, "size", []);
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call2123 = callmethodChecked(this, "html", []);
            var call2124 = callmethodChecked(call2123, "substringFrom(1)to(1)", [1, 1], opresult2117, call2121);
            var var_end = call2124;
            setLineNumber(96);    // compilenode string
            var string2126 = new GraceString("");
            var string2129 = new GraceString("");
            var string2132 = new GraceString("");
            var string2135 = new GraceString("");
            var opresult2137 = callmethodChecked(string2135, "++(1)", [1], var_begin);
            var opresult2139 = callmethodChecked(opresult2137, "++(1)", [1], string2132);
            var opresult2141 = callmethodChecked(opresult2139, "++(1)", [1], var_t);
            var opresult2143 = callmethodChecked(opresult2141, "++(1)", [1], string2129);
            var opresult2145 = callmethodChecked(opresult2143, "++(1)", [1], var_end);
            var opresult2147 = callmethodChecked(opresult2145, "++(1)", [1], string2126);
            // call case 4: self request
            onSelf = true;
            var call2148 = callmethodChecked(this, "html:=(1)", [1], opresult2147);
            setLineNumber(97);    // compilenode member
            // call case 6: other requests
            var call2151 = callmethodChecked(var_t, "size", []);
            // call case 4: self request
            onSelf = true;
            var call2154 = callmethodChecked(this, "cursor", []);
            var opresult2156 = callmethodChecked(call2154, "+(1)", [1], call2151);
            // call case 4: self request
            onSelf = true;
            var call2157 = callmethodChecked(this, "cursor:=(1)", [1], opresult2156);
            return call2157;
          };
          func2103.paramTypes = [];
          func2103.paramTypes.push([type_String, "t"]);
          func2103.paramCounts = [1];
          obj2094.methods["insert(1)"] = func2103;
          func2103.definitionLine = 92;
          func2103.definitionModule = "gracedoc";
          var func2158 = function(argcv) {    // method alphabetize
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("gracedoc");
            setLineNumber(100);    // compilenode member
            // call case 6: other requests
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call2162 = callmethodChecked(this, "elts", []);
            var call2163 = callmethodChecked(call2162, "keys", []);
            var call2164 = callmethodChecked(call2163, "sorted", []);
            var var_alpha = call2164;
            setLineNumber(101);    // compilenode num
            var var_numElts = new GraceNum(0);
            setLineNumber(102);    // compilenode block
            var block2166 = new GraceBlock(this, 102, 1);
            setLineNumber(1);    // compilenode identifier
            block2166.real = function(var_k) {
              setLineNumber(103);    // compilenode vardec
              var var_rowClass;
              var if2167 = GraceDone;
              setLineNumber(104);    // compilenode identifier
              var modulus2171 = callmethodChecked(var_numElts, "%(1)", [1], new GraceNum(2));
              var opresult2173 = callmethodChecked(modulus2171, "==(1)", [1], new GraceNum(0));
              if (Grace_isTrue(opresult2173)) {
                setLineNumber(105);    // compilenode string
                var string2174 = new GraceString("row-even");
                var_rowClass = string2174;
                if2167 = GraceDone;
              } else {
                setLineNumber(106);    // compilenode string
                var string2175 = new GraceString("row-odd");
                var_rowClass = string2175;
                if2167 = GraceDone;
              }
              setLineNumber(107);    // compilenode string
              var string2178 = new GraceString("class='placeholder'");
              setLineNumber(108);    // compilenode string
              var string2179 = new GraceString("'");
              var string2182 = new GraceString("class='");
              var opresult2184 = callmethodChecked(string2182, "++(1)", [1], var_rowClass);
              var opresult2186 = callmethodChecked(opresult2184, "++(1)", [1], string2179);
              // call case 6: other requests
              setLineNumber(107);    // compilenode identifier
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call2189 = callmethodChecked(this, "elts", []);
              var call2190 = callmethodChecked(call2189, "at(1)", [1], var_k);
              var call2191 = callmethodChecked(call2190, "replace(1)with(1)", [1, 1], string2178, opresult2186);
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call2193 = callmethodChecked(this, "elts", []);
              var call2194 = callmethodChecked(call2193, "at(1)put(1)", [1, 1], var_k, call2191);
              setLineNumber(109);    // compilenode identifier
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call2198 = callmethodChecked(this, "elts", []);
              var call2199 = callmethodChecked(call2198, "at(1)", [1], var_k);
              // call case 4: self request
              onSelf = true;
              var call2200 = callmethodChecked(this, "insert(1)", [1], call2199);
              setLineNumber(110);    // compilenode identifier
              var opresult2203 = callmethodChecked(var_numElts, "+(1)", [1], new GraceNum(1));
              var_numElts = opresult2203;
              return GraceDone;
            };
            // call case 5: prelude request
            var call2204 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_alpha, block2166);
            return call2204;
          };
          func2158.paramCounts = [0];
          obj2094.methods["alphabetize"] = func2158;
          func2158.definitionLine = 99;
          func2158.definitionModule = "gracedoc";
          setLineNumber(84);    // compilenode identifier
          obj2094.data["html"] = var_html__39__;
          var reader_gracedoc_html2205 = function() {
            return this.data["html"];
          };
          obj2094.methods["html"] = reader_gracedoc_html2205;
          obj2094.data["html"] = var_html__39__;
          var writer_gracedoc_html2205 = function(argcv, o) {
            this.data["html"] = o;
            return GraceDone;
          };
          obj2094.methods["html:=(1)"] = writer_gracedoc_html2205;
          writer_gracedoc_html2205.confidential = true;
          if (!Grace_isTrue(callmethod(var_String, "match(1)", [1], var_html__39__)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("initial value of var 'html' is not of type String"));
          obj2094.mutable = true;
          setLineNumber(85);    // compilenode identifier
          obj2094.data["hasContent"] = GraceFalse;
          var reader_gracedoc_hasContent2206 = function() {
            return this.data["hasContent"];
          };
          obj2094.methods["hasContent"] = reader_gracedoc_hasContent2206;
          obj2094.data["hasContent"] = GraceFalse;
          var writer_gracedoc_hasContent2206 = function(argcv, o) {
            this.data["hasContent"] = o;
            return GraceDone;
          };
          obj2094.methods["hasContent:=(1)"] = writer_gracedoc_hasContent2206;
          writer_gracedoc_hasContent2206.confidential = true;
          obj2094.mutable = true;
          setLineNumber(86);    // compilenode identifier
          obj2094.data["cursor"] = var_idx;
          var reader_gracedoc_cursor2207 = function() {
            return this.data["cursor"];
          };
          obj2094.methods["cursor"] = reader_gracedoc_cursor2207;
          obj2094.data["cursor"] = var_idx;
          var writer_gracedoc_cursor2207 = function(argcv, o) {
            this.data["cursor"] = o;
            return GraceDone;
          };
          obj2094.methods["cursor:=(1)"] = writer_gracedoc_cursor2207;
          reader_gracedoc_cursor2207.confidential = true;
          writer_gracedoc_cursor2207.confidential = true;
          if (!Grace_isTrue(callmethod(var_Number, "match(1)", [1], var_idx)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("initial value of var 'cursor' is not of type Number"));
          obj2094.mutable = true;
          setLineNumber(87);    // compilenode array
          var array2209 = new Lineup([]);
          // call case 5: prelude request
          var call2210 = callmethodChecked(var_prelude, "dictionary(1)", [1], array2209);
          obj2094.data["elts"] = call2210;
          var reader_gracedoc_elts2211 = function() {
            return this.data["elts"];
          };
          obj2094.methods["elts"] = reader_gracedoc_elts2211;
          obj2094.data["elts"] = call2210;
          var writer_gracedoc_elts2211 = function(argcv, o) {
            this.data["elts"] = o;
            return GraceDone;
          };
          obj2094.methods["elts:=(1)"] = writer_gracedoc_elts2211;
          obj2094.mutable = true;
          superDepth = origSuperDepth;
        };
        obj_init_2094.apply(obj2094, []);
        setLineNumber(83);    // return value
        if (!Grace_isTrue(callmethod(var_Section, "match(1)", [1], obj2094)))
            throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("result of method withTemplate(_)andCursorAt(_) does not have " + 
                    callmethod(var_Section, "asString", [0])._value + "."));
        return obj2094;
      };
      func2093.paramCounts = [1, 1];
      obj2091.methods["withTemplate(1)andCursorAt(1)"] = func2093;
      func2093.definitionLine = 83;
      func2093.definitionModule = "gracedoc";
        var func2212 = function(argcv) {    // method withTemplate(_)andCursorAt(_)$object(_)
          var curarg = 1;
          var var_html__39__ = arguments[curarg];
          curarg++;
          var var_idx = arguments[curarg];
          curarg++;
          var inheritingObject = arguments[curarg++];
          // Start argument processing
          curarg = 1;
          curarg++;
          curarg++;
          // End argument processing
          setModuleName("gracedoc");
          var returnTarget = invocationCount;
          invocationCount++;
          var obj2213 = Grace_allocObject(GraceObject, "withTemplate(1)andCursorAt(1)");
          obj2213.definitionModule = "gracedoc";
          obj2213.definitionLine = 83;
          var inho2213 = inheritingObject;
          while (inho2213.superobj) inho2213 = inho2213.superobj;
          inho2213.superobj = obj2213;
          obj2213.data = inheritingObject.data;
          if (inheritingObject.hasOwnProperty('_value'))
            obj2213._value = inheritingObject._value;
          obj2213.outer = this;
          var reader_gracedoc_outer2214 = function() {
            return this.outer;
          };
          obj2213.methods["outer"] = reader_gracedoc_outer2214;
          var obj_init_2213 = function() {
            var origSuperDepth = superDepth;
            superDepth = obj2213;
            var func2215 = function(argcv) {    // method addElement(_)withText(_)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_n = arguments[curarg];
              curarg++;
              var var_t = arguments[curarg];
              curarg++;
              // Start argument checking
              curarg = 1;
              setLineNumber(88);    // compilenode identifier
              if (!Grace_isTrue(callmethod(var_String, "match(1)",  [1], arguments[curarg])))
                  throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("argument 1 in addElement (arg list 1), which corresponds to parameter n, does not have " + 
                          callmethod(var_String, "asString", [0])._value + "."));
              curarg++;
              if (!Grace_isTrue(callmethod(var_String, "match(1)",  [1], arguments[curarg])))
                  throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("argument 1 in withText (arg list 2), which corresponds to parameter t, does not have " + 
                          callmethod(var_String, "asString", [0])._value + "."));
              curarg++;
              // End argument checking
              setModuleName("gracedoc");
              setLineNumber(89);    // compilenode identifier
              // call case 4: self request
              onSelf = true;
              var call2217 = callmethodChecked(this, "hasContent:=(1)", [1], GraceTrue);
              setLineNumber(90);    // compilenode identifier
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call2220 = callmethodChecked(this, "elts", []);
              var call2221 = callmethodChecked(call2220, "at(1)put(1)", [1, 1], var_n, var_t);
              return call2221;
            };
            func2215.paramTypes = [];
            func2215.paramTypes.push([type_String, "n"]);
            func2215.paramTypes.push([type_String, "t"]);
            func2215.paramCounts = [1, 1];
            obj2213.methods["addElement(1)withText(1)"] = func2215;
            func2215.definitionLine = 88;
            func2215.definitionModule = "gracedoc";
            var func2222 = function(argcv) {    // method insert(_)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_t = arguments[curarg];
              curarg++;
              // Start argument checking
              curarg = 1;
              setLineNumber(92);    // compilenode identifier
              if (!Grace_isTrue(callmethod(var_String, "match(1)",  [1], arguments[curarg])))
                  throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("argument 1 in insert (arg list 1), which corresponds to parameter t, does not have " + 
                          callmethod(var_String, "asString", [0])._value + "."));
              curarg++;
              // End argument checking
              setModuleName("gracedoc");
              setLineNumber(93);    // compilenode identifier
              // call case 4: self request
              onSelf = true;
              var call2224 = callmethodChecked(this, "hasContent:=(1)", [1], GraceTrue);
              setLineNumber(94);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call2227 = callmethodChecked(this, "cursor", []);
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call2229 = callmethodChecked(this, "html", []);
              var call2230 = callmethodChecked(call2229, "substringFrom(1)to(1)", [1, 1], new GraceNum(1), call2227);
              var var_begin = call2230;
              setLineNumber(95);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call2234 = callmethodChecked(this, "cursor", []);
              var opresult2236 = callmethodChecked(call2234, "+(1)", [1], new GraceNum(1));
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call2239 = callmethodChecked(this, "html", []);
              var call2240 = callmethodChecked(call2239, "size", []);
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call2242 = callmethodChecked(this, "html", []);
              var call2243 = callmethodChecked(call2242, "substringFrom(1)to(1)", [1, 1], opresult2236, call2240);
              var var_end = call2243;
              setLineNumber(96);    // compilenode string
              var string2245 = new GraceString("");
              var string2248 = new GraceString("");
              var string2251 = new GraceString("");
              var string2254 = new GraceString("");
              var opresult2256 = callmethodChecked(string2254, "++(1)", [1], var_begin);
              var opresult2258 = callmethodChecked(opresult2256, "++(1)", [1], string2251);
              var opresult2260 = callmethodChecked(opresult2258, "++(1)", [1], var_t);
              var opresult2262 = callmethodChecked(opresult2260, "++(1)", [1], string2248);
              var opresult2264 = callmethodChecked(opresult2262, "++(1)", [1], var_end);
              var opresult2266 = callmethodChecked(opresult2264, "++(1)", [1], string2245);
              // call case 4: self request
              onSelf = true;
              var call2267 = callmethodChecked(this, "html:=(1)", [1], opresult2266);
              setLineNumber(97);    // compilenode member
              // call case 6: other requests
              var call2270 = callmethodChecked(var_t, "size", []);
              // call case 4: self request
              onSelf = true;
              var call2273 = callmethodChecked(this, "cursor", []);
              var opresult2275 = callmethodChecked(call2273, "+(1)", [1], call2270);
              // call case 4: self request
              onSelf = true;
              var call2276 = callmethodChecked(this, "cursor:=(1)", [1], opresult2275);
              return call2276;
            };
            func2222.paramTypes = [];
            func2222.paramTypes.push([type_String, "t"]);
            func2222.paramCounts = [1];
            obj2213.methods["insert(1)"] = func2222;
            func2222.definitionLine = 92;
            func2222.definitionModule = "gracedoc";
            var func2277 = function(argcv) {    // method alphabetize
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("gracedoc");
              setLineNumber(100);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call2281 = callmethodChecked(this, "elts", []);
              var call2282 = callmethodChecked(call2281, "keys", []);
              var call2283 = callmethodChecked(call2282, "sorted", []);
              var var_alpha = call2283;
              setLineNumber(101);    // compilenode num
              var var_numElts = new GraceNum(0);
              setLineNumber(102);    // compilenode block
              var block2285 = new GraceBlock(this, 102, 1);
              setLineNumber(1);    // compilenode identifier
              block2285.real = function(var_k) {
                setLineNumber(103);    // compilenode vardec
                var var_rowClass;
                var if2286 = GraceDone;
                setLineNumber(104);    // compilenode identifier
                var modulus2290 = callmethodChecked(var_numElts, "%(1)", [1], new GraceNum(2));
                var opresult2292 = callmethodChecked(modulus2290, "==(1)", [1], new GraceNum(0));
                if (Grace_isTrue(opresult2292)) {
                  setLineNumber(105);    // compilenode string
                  var string2293 = new GraceString("row-even");
                  var_rowClass = string2293;
                  if2286 = GraceDone;
                } else {
                  setLineNumber(106);    // compilenode string
                  var string2294 = new GraceString("row-odd");
                  var_rowClass = string2294;
                  if2286 = GraceDone;
                }
                setLineNumber(107);    // compilenode string
                var string2297 = new GraceString("class='placeholder'");
                setLineNumber(108);    // compilenode string
                var string2298 = new GraceString("'");
                var string2301 = new GraceString("class='");
                var opresult2303 = callmethodChecked(string2301, "++(1)", [1], var_rowClass);
                var opresult2305 = callmethodChecked(opresult2303, "++(1)", [1], string2298);
                // call case 6: other requests
                setLineNumber(107);    // compilenode identifier
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call2308 = callmethodChecked(this, "elts", []);
                var call2309 = callmethodChecked(call2308, "at(1)", [1], var_k);
                var call2310 = callmethodChecked(call2309, "replace(1)with(1)", [1, 1], string2297, opresult2305);
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call2312 = callmethodChecked(this, "elts", []);
                var call2313 = callmethodChecked(call2312, "at(1)put(1)", [1, 1], var_k, call2310);
                setLineNumber(109);    // compilenode identifier
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call2317 = callmethodChecked(this, "elts", []);
                var call2318 = callmethodChecked(call2317, "at(1)", [1], var_k);
                // call case 4: self request
                onSelf = true;
                var call2319 = callmethodChecked(this, "insert(1)", [1], call2318);
                setLineNumber(110);    // compilenode identifier
                var opresult2322 = callmethodChecked(var_numElts, "+(1)", [1], new GraceNum(1));
                var_numElts = opresult2322;
                return GraceDone;
              };
              // call case 5: prelude request
              var call2323 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_alpha, block2285);
              return call2323;
            };
            func2277.paramCounts = [0];
            obj2213.methods["alphabetize"] = func2277;
            func2277.definitionLine = 99;
            func2277.definitionModule = "gracedoc";
            setLineNumber(84);    // compilenode identifier
            obj2213.data["html"] = var_html__39__;
            var reader_gracedoc_html2324 = function() {
              return this.data["html"];
            };
            obj2213.methods["html"] = reader_gracedoc_html2324;
            obj2213.data["html"] = var_html__39__;
            var writer_gracedoc_html2324 = function(argcv, o) {
              this.data["html"] = o;
              return GraceDone;
            };
            obj2213.methods["html:=(1)"] = writer_gracedoc_html2324;
            writer_gracedoc_html2324.confidential = true;
            if (!Grace_isTrue(callmethod(var_String, "match(1)", [1], var_html__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("initial value of var 'html' is not of type String"));
            obj2213.mutable = true;
            setLineNumber(85);    // compilenode identifier
            obj2213.data["hasContent"] = GraceFalse;
            var reader_gracedoc_hasContent2325 = function() {
              return this.data["hasContent"];
            };
            obj2213.methods["hasContent"] = reader_gracedoc_hasContent2325;
            obj2213.data["hasContent"] = GraceFalse;
            var writer_gracedoc_hasContent2325 = function(argcv, o) {
              this.data["hasContent"] = o;
              return GraceDone;
            };
            obj2213.methods["hasContent:=(1)"] = writer_gracedoc_hasContent2325;
            writer_gracedoc_hasContent2325.confidential = true;
            obj2213.mutable = true;
            setLineNumber(86);    // compilenode identifier
            obj2213.data["cursor"] = var_idx;
            var reader_gracedoc_cursor2326 = function() {
              return this.data["cursor"];
            };
            obj2213.methods["cursor"] = reader_gracedoc_cursor2326;
            obj2213.data["cursor"] = var_idx;
            var writer_gracedoc_cursor2326 = function(argcv, o) {
              this.data["cursor"] = o;
              return GraceDone;
            };
            obj2213.methods["cursor:=(1)"] = writer_gracedoc_cursor2326;
            reader_gracedoc_cursor2326.confidential = true;
            writer_gracedoc_cursor2326.confidential = true;
            if (!Grace_isTrue(callmethod(var_Number, "match(1)", [1], var_idx)))
              throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("initial value of var 'cursor' is not of type Number"));
            obj2213.mutable = true;
            setLineNumber(87);    // compilenode array
            var array2328 = new Lineup([]);
            // call case 5: prelude request
            var call2329 = callmethodChecked(var_prelude, "dictionary(1)", [1], array2328);
            obj2213.data["elts"] = call2329;
            var reader_gracedoc_elts2330 = function() {
              return this.data["elts"];
            };
            obj2213.methods["elts"] = reader_gracedoc_elts2330;
            obj2213.data["elts"] = call2329;
            var writer_gracedoc_elts2330 = function(argcv, o) {
              this.data["elts"] = o;
              return GraceDone;
            };
            obj2213.methods["elts:=(1)"] = writer_gracedoc_elts2330;
            obj2213.mutable = true;
            superDepth = origSuperDepth;
          };
          obj_init_2213.apply(inheritingObject, []);
          return obj2213;
          };
          obj2091.methods["withTemplate(1)andCursorAt(1)$object(1)"] = func2212;
        var func2331 = function(argcv) {    // method asString
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("gracedoc");
          setLineNumber(83);    // compilenode string
          var string2332 = new GraceString("class section");
          return string2332;
        };
        func2331.paramCounts = [0];
        obj2091.methods["asString"] = func2331;
        func2331.definitionLine = 83;
        func2331.definitionModule = "gracedoc";
        superDepth = origSuperDepth;
      };
      obj_init_2091.apply(obj2091, []);
      var var_section = obj2091;
      setLineNumber(1);    // compilenode method
      var func2333 = function(argcv) {    // method section
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("gracedoc");
        // section is a simple accessor - elide try ... catch
        setLineNumber(83);    // compilenode identifier
        return var_section;
      };
      func2333.paramCounts = [0];
      this.methods["section"] = func2333;
      func2333.definitionLine = 1;
      func2333.definitionModule = "gracedoc";
      this.methods["section"].debug = "def";
      setLineNumber(314);    // compilenode object
      var obj2334 = Grace_allocObject(GraceObject, "graceDocVisitor");
      obj2334.definitionModule = "gracedoc";
      obj2334.definitionLine = 314;
      obj2334.outer = this;
      var reader_gracedoc_outer2335 = function() {
        return this.outer;
      };
      obj2334.methods["outer"] = reader_gracedoc_outer2335;
      var obj_init_2334 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj2334;
        var func2336 = function(argcv) {    // method createFrom(_)outTo(_)as(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_in = arguments[curarg];
          curarg++;
          var var_dir = arguments[curarg];
          curarg++;
          var var_pageType = arguments[curarg];
          curarg++;
          setModuleName("gracedoc");
          var obj2337 = Grace_allocObject(null, "graceDocVisitor.graceDocVisitor.createFrom(_)outTo(_)as(_)");
          obj2337.definitionModule = "gracedoc";
          obj2337.definitionLine = 314;
          obj2337.outer = this;
          var reader_gracedoc_outer2338 = function() {
            return this.outer;
          };
          obj2337.methods["outer"] = reader_gracedoc_outer2338;
          var obj_init_2337 = function() {
            var origSuperDepth = superDepth;
            superDepth = obj2337;
            var func2339 = function(argcv) {    // method getTypeLink(_)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_v = arguments[curarg];
              curarg++;
              // Start argument checking
              curarg = 1;
              setLineNumber(342);    // compilenode identifier
              if (!Grace_isTrue(callmethod(var_String, "match(1)",  [1], arguments[curarg])))
                  throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("argument 1 in getTypeLink (arg list 1), which corresponds to parameter v, does not have " + 
                          callmethod(var_String, "asString", [0])._value + "."));
              curarg++;
              // End argument checking
              setModuleName("gracedoc");
              setLineNumber(343);    // compilenode string
              var string2340 = new GraceString(".html");
              var string2343 = new GraceString("");
              var opresult2345 = callmethodChecked(string2343, "++(1)", [1], var_v);
              var opresult2347 = callmethodChecked(opresult2345, "++(1)", [1], string2340);
              var var_filename = opresult2347;
              setLineNumber(344);    // compilenode string
              var string2348 = new GraceString("<a href='");
              var var_out = string2348;
              var if2349 = GraceDone;
              setLineNumber(346);    // compilenode string
              var string2351 = new GraceString("");
              var string2354 = new GraceString("/types/");
              // call case 4: self request
              onSelf = true;
              var call2357 = callmethodChecked(this, "outdir", []);
              var string2359 = new GraceString("/");
              // call case 6: other requests
              var call2362 = callmethodChecked(var_settings, "outputdir", []);
              var string2364 = new GraceString("");
              var opresult2366 = callmethodChecked(string2364, "++(1)", [1], call2362);
              var opresult2368 = callmethodChecked(opresult2366, "++(1)", [1], string2359);
              var opresult2370 = callmethodChecked(opresult2368, "++(1)", [1], call2357);
              var opresult2372 = callmethodChecked(opresult2370, "++(1)", [1], string2354);
              var opresult2374 = callmethodChecked(opresult2372, "++(1)", [1], var_filename);
              var opresult2376 = callmethodChecked(opresult2374, "++(1)", [1], string2351);
              // call case 6: other requests
              var call2377 = callmethodChecked(var_io, "exists(1)", [1], opresult2376);
              if (Grace_isTrue(call2377)) {
                var if2378 = GraceDone;
                setLineNumber(347);    // compilenode member
                // call case 4: self request
                onSelf = true;
                var call2380 = callmethodChecked(this, "isOnTypePage", []);
                if (Grace_isTrue(call2380)) {
                  setLineNumber(348);    // compilenode string
                  var string2381 = new GraceString("");
                  var string2384 = new GraceString("");
                  var opresult2386 = callmethodChecked(string2384, "++(1)", [1], var_filename);
                  var opresult2388 = callmethodChecked(opresult2386, "++(1)", [1], string2381);
                  var opresult2391 = callmethodChecked(var_out, "++(1)", [1], opresult2388);
                  var_out = opresult2391;
                  if2378 = GraceDone;
                } else {
                  var if2392 = GraceDone;
                  setLineNumber(349);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call2394 = callmethodChecked(this, "isOnClassPage", []);
                  if (Grace_isTrue(call2394)) {
                    setLineNumber(350);    // compilenode string
                    var string2395 = new GraceString("");
                    var string2398 = new GraceString("../types/");
                    var opresult2400 = callmethodChecked(string2398, "++(1)", [1], var_filename);
                    var opresult2402 = callmethodChecked(opresult2400, "++(1)", [1], string2395);
                    var opresult2405 = callmethodChecked(var_out, "++(1)", [1], opresult2402);
                    var_out = opresult2405;
                    if2392 = GraceDone;
                  } else {
                    setLineNumber(352);    // compilenode string
                    var string2406 = new GraceString("");
                    var string2409 = new GraceString("types/");
                    var opresult2411 = callmethodChecked(string2409, "++(1)", [1], var_filename);
                    var opresult2413 = callmethodChecked(opresult2411, "++(1)", [1], string2406);
                    var opresult2416 = callmethodChecked(var_out, "++(1)", [1], opresult2413);
                    var_out = opresult2416;
                    if2392 = GraceDone;
                  }
                  if2378 = if2392;
                }
                if2349 = if2378;
              } else {
                var if2417 = GraceDone;
                setLineNumber(355);    // compilenode string
                var string2419 = new GraceString("");
                var string2422 = new GraceString("/imported/types/");
                // call case 6: other requests
                var call2425 = callmethodChecked(var_settings, "outputdir", []);
                var string2427 = new GraceString("");
                var opresult2429 = callmethodChecked(string2427, "++(1)", [1], call2425);
                var opresult2431 = callmethodChecked(opresult2429, "++(1)", [1], string2422);
                var opresult2433 = callmethodChecked(opresult2431, "++(1)", [1], var_filename);
                var opresult2435 = callmethodChecked(opresult2433, "++(1)", [1], string2419);
                // call case 6: other requests
                var call2436 = callmethodChecked(var_io, "exists(1)", [1], opresult2435);
                if (Grace_isTrue(call2436)) {
                  var if2437 = GraceDone;
                  setLineNumber(356);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call2439 = callmethodChecked(this, "isOnClassPage", []);
                  // call case 4: self request
                  onSelf = true;
                  var call2442 = callmethodChecked(this, "isOnTypePage", []);
                  var opresult2444 = callmethodChecked(call2442, "||(1)", [1], call2439);
                  if (Grace_isTrue(opresult2444)) {
                    setLineNumber(357);    // compilenode string
                    var string2445 = new GraceString("");
                    var string2448 = new GraceString("../../imported/types/");
                    var opresult2450 = callmethodChecked(string2448, "++(1)", [1], var_filename);
                    var opresult2452 = callmethodChecked(opresult2450, "++(1)", [1], string2445);
                    var opresult2455 = callmethodChecked(var_out, "++(1)", [1], opresult2452);
                    var_out = opresult2455;
                    if2437 = GraceDone;
                  } else {
                    setLineNumber(359);    // compilenode string
                    var string2456 = new GraceString("");
                    var string2459 = new GraceString("../imported/types/");
                    var opresult2461 = callmethodChecked(string2459, "++(1)", [1], var_filename);
                    var opresult2463 = callmethodChecked(opresult2461, "++(1)", [1], string2456);
                    var opresult2466 = callmethodChecked(var_out, "++(1)", [1], opresult2463);
                    var_out = opresult2466;
                    if2437 = GraceDone;
                  }
                  if2417 = if2437;
                } else {
                  var if2467 = GraceDone;
                  setLineNumber(362);    // compilenode string
                  var string2469 = new GraceString("");
                  var string2472 = new GraceString("/gracelib/types/");
                  // call case 6: other requests
                  var call2475 = callmethodChecked(var_settings, "outputdir", []);
                  var string2477 = new GraceString("");
                  var opresult2479 = callmethodChecked(string2477, "++(1)", [1], call2475);
                  var opresult2481 = callmethodChecked(opresult2479, "++(1)", [1], string2472);
                  var opresult2483 = callmethodChecked(opresult2481, "++(1)", [1], var_filename);
                  var opresult2485 = callmethodChecked(opresult2483, "++(1)", [1], string2469);
                  // call case 6: other requests
                  var call2486 = callmethodChecked(var_io, "exists(1)", [1], opresult2485);
                  if (Grace_isTrue(call2486)) {
                    var if2487 = GraceDone;
                    setLineNumber(363);    // compilenode member
                    // call case 4: self request
                    onSelf = true;
                    var call2489 = callmethodChecked(this, "isOnClassPage", []);
                    // call case 4: self request
                    onSelf = true;
                    var call2492 = callmethodChecked(this, "isOnTypePage", []);
                    var opresult2494 = callmethodChecked(call2492, "||(1)", [1], call2489);
                    if (Grace_isTrue(opresult2494)) {
                      setLineNumber(364);    // compilenode string
                      var string2495 = new GraceString("");
                      var string2498 = new GraceString("../../gracelib/types/");
                      var opresult2500 = callmethodChecked(string2498, "++(1)", [1], var_filename);
                      var opresult2502 = callmethodChecked(opresult2500, "++(1)", [1], string2495);
                      var opresult2505 = callmethodChecked(var_out, "++(1)", [1], opresult2502);
                      var_out = opresult2505;
                      if2487 = GraceDone;
                    } else {
                      setLineNumber(366);    // compilenode string
                      var string2506 = new GraceString("");
                      var string2509 = new GraceString("../gracelib/types/");
                      var opresult2511 = callmethodChecked(string2509, "++(1)", [1], var_filename);
                      var opresult2513 = callmethodChecked(opresult2511, "++(1)", [1], string2506);
                      var opresult2516 = callmethodChecked(var_out, "++(1)", [1], opresult2513);
                      var_out = opresult2516;
                      if2487 = GraceDone;
                    }
                    if2467 = if2487;
                  } else {
                    setLineNumber(369);    // compilenode string
                    var string2517 = new GraceString("");
                    var var_dots = string2517;
                    var if2518 = GraceDone;
                    setLineNumber(370);    // compilenode member
                    // call case 4: self request
                    onSelf = true;
                    var call2520 = callmethodChecked(this, "isOnTypePage", []);
                    // call case 4: self request
                    onSelf = true;
                    var call2523 = callmethodChecked(this, "isOnClassPage", []);
                    var opresult2525 = callmethodChecked(call2523, "||(1)", [1], call2520);
                    if (Grace_isTrue(opresult2525)) {
                      setLineNumber(371);    // compilenode string
                      var string2526 = new GraceString("../../");
                      var_dots = string2526;
                      if2518 = GraceDone;
                    } else {
                      setLineNumber(373);    // compilenode string
                      var string2527 = new GraceString("../");
                      var_dots = string2527;
                      if2518 = GraceDone;
                    }
                    setLineNumber(375);    // compilenode string
                    var string2528 = new GraceString("404.html");
                    var string2531 = new GraceString("");
                    var opresult2533 = callmethodChecked(string2531, "++(1)", [1], var_dots);
                    var opresult2535 = callmethodChecked(opresult2533, "++(1)", [1], string2528);
                    var opresult2538 = callmethodChecked(var_out, "++(1)", [1], opresult2535);
                    var_out = opresult2538;
                    if2467 = GraceDone;
                  }
                  if2417 = if2467;
                }
                if2349 = if2417;
              }
              setLineNumber(377);    // compilenode string
              var string2539 = new GraceString("</a>");
              var string2542 = new GraceString("'>");
              var opresult2544 = callmethodChecked(string2542, "++(1)", [1], var_v);
              var opresult2546 = callmethodChecked(opresult2544, "++(1)", [1], string2539);
              var opresult2549 = callmethodChecked(var_out, "++(1)", [1], opresult2546);
              var_out = opresult2549;
              setLineNumber(378);    // compilenode identifier
              return var_out;
            };
            func2339.paramTypes = [];
            func2339.paramTypes.push([type_String, "v"]);
            func2339.confidential = true;
            func2339.paramCounts = [1];
            obj2337.methods["getTypeLink(1)"] = func2339;
            func2339.definitionLine = 342;
            func2339.definitionModule = "gracedoc";
            var func2550 = function(argcv) {    // method getClassLink(_)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_c = arguments[curarg];
              curarg++;
              // Start argument checking
              curarg = 1;
              setLineNumber(381);    // compilenode identifier
              if (!Grace_isTrue(callmethod(var_String, "match(1)",  [1], arguments[curarg])))
                  throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("argument 1 in getClassLink (arg list 1), which corresponds to parameter c, does not have " + 
                          callmethod(var_String, "asString", [0])._value + "."));
              curarg++;
              // End argument checking
              setModuleName("gracedoc");
              setLineNumber(382);    // compilenode string
              var string2551 = new GraceString(".html");
              var string2554 = new GraceString("");
              var opresult2556 = callmethodChecked(string2554, "++(1)", [1], var_c);
              var opresult2558 = callmethodChecked(opresult2556, "++(1)", [1], string2551);
              var var_filename = opresult2558;
              setLineNumber(383);    // compilenode string
              var string2559 = new GraceString("<a href='");
              var var_out = string2559;
              var if2560 = GraceDone;
              setLineNumber(385);    // compilenode string
              var string2562 = new GraceString("");
              var string2565 = new GraceString("/classes/");
              // call case 4: self request
              onSelf = true;
              var call2568 = callmethodChecked(this, "outdir", []);
              var string2570 = new GraceString("/");
              // call case 6: other requests
              var call2573 = callmethodChecked(var_settings, "outputdir", []);
              var string2575 = new GraceString("");
              var opresult2577 = callmethodChecked(string2575, "++(1)", [1], call2573);
              var opresult2579 = callmethodChecked(opresult2577, "++(1)", [1], string2570);
              var opresult2581 = callmethodChecked(opresult2579, "++(1)", [1], call2568);
              var opresult2583 = callmethodChecked(opresult2581, "++(1)", [1], string2565);
              var opresult2585 = callmethodChecked(opresult2583, "++(1)", [1], var_filename);
              var opresult2587 = callmethodChecked(opresult2585, "++(1)", [1], string2562);
              // call case 6: other requests
              var call2588 = callmethodChecked(var_io, "exists(1)", [1], opresult2587);
              if (Grace_isTrue(call2588)) {
                var if2589 = GraceDone;
                setLineNumber(386);    // compilenode member
                // call case 4: self request
                onSelf = true;
                var call2591 = callmethodChecked(this, "isOnClassPage", []);
                if (Grace_isTrue(call2591)) {
                  setLineNumber(387);    // compilenode string
                  var string2592 = new GraceString("");
                  var string2595 = new GraceString("");
                  var opresult2597 = callmethodChecked(string2595, "++(1)", [1], var_filename);
                  var opresult2599 = callmethodChecked(opresult2597, "++(1)", [1], string2592);
                  var opresult2602 = callmethodChecked(var_out, "++(1)", [1], opresult2599);
                  var_out = opresult2602;
                  if2589 = GraceDone;
                } else {
                  var if2603 = GraceDone;
                  setLineNumber(388);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call2605 = callmethodChecked(this, "isOnTypePage", []);
                  if (Grace_isTrue(call2605)) {
                    setLineNumber(389);    // compilenode string
                    var string2606 = new GraceString("");
                    var string2609 = new GraceString("../classes/");
                    var opresult2611 = callmethodChecked(string2609, "++(1)", [1], var_filename);
                    var opresult2613 = callmethodChecked(opresult2611, "++(1)", [1], string2606);
                    var opresult2616 = callmethodChecked(var_out, "++(1)", [1], opresult2613);
                    var_out = opresult2616;
                    if2603 = GraceDone;
                  } else {
                    setLineNumber(391);    // compilenode string
                    var string2617 = new GraceString("");
                    var string2620 = new GraceString("classes/");
                    var opresult2622 = callmethodChecked(string2620, "++(1)", [1], var_filename);
                    var opresult2624 = callmethodChecked(opresult2622, "++(1)", [1], string2617);
                    var opresult2627 = callmethodChecked(var_out, "++(1)", [1], opresult2624);
                    var_out = opresult2627;
                    if2603 = GraceDone;
                  }
                  if2589 = if2603;
                }
                if2560 = if2589;
              } else {
                var if2628 = GraceDone;
                setLineNumber(394);    // compilenode string
                var string2630 = new GraceString("");
                var string2633 = new GraceString("/imported/classes/");
                // call case 6: other requests
                var call2636 = callmethodChecked(var_settings, "outputdir", []);
                var string2638 = new GraceString("");
                var opresult2640 = callmethodChecked(string2638, "++(1)", [1], call2636);
                var opresult2642 = callmethodChecked(opresult2640, "++(1)", [1], string2633);
                var opresult2644 = callmethodChecked(opresult2642, "++(1)", [1], var_filename);
                var opresult2646 = callmethodChecked(opresult2644, "++(1)", [1], string2630);
                // call case 6: other requests
                var call2647 = callmethodChecked(var_io, "exists(1)", [1], opresult2646);
                if (Grace_isTrue(call2647)) {
                  var if2648 = GraceDone;
                  setLineNumber(395);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call2650 = callmethodChecked(this, "isOnClassPage", []);
                  // call case 4: self request
                  onSelf = true;
                  var call2653 = callmethodChecked(this, "isOnTypePage", []);
                  var opresult2655 = callmethodChecked(call2653, "||(1)", [1], call2650);
                  if (Grace_isTrue(opresult2655)) {
                    setLineNumber(396);    // compilenode string
                    var string2656 = new GraceString("");
                    var string2659 = new GraceString("../../imported/classes/");
                    var opresult2661 = callmethodChecked(string2659, "++(1)", [1], var_filename);
                    var opresult2663 = callmethodChecked(opresult2661, "++(1)", [1], string2656);
                    var opresult2666 = callmethodChecked(var_out, "++(1)", [1], opresult2663);
                    var_out = opresult2666;
                    if2648 = GraceDone;
                  } else {
                    setLineNumber(398);    // compilenode string
                    var string2667 = new GraceString("");
                    var string2670 = new GraceString("../imported/classes/");
                    var opresult2672 = callmethodChecked(string2670, "++(1)", [1], var_filename);
                    var opresult2674 = callmethodChecked(opresult2672, "++(1)", [1], string2667);
                    var opresult2677 = callmethodChecked(var_out, "++(1)", [1], opresult2674);
                    var_out = opresult2677;
                    if2648 = GraceDone;
                  }
                  if2628 = if2648;
                } else {
                  var if2678 = GraceDone;
                  setLineNumber(401);    // compilenode string
                  var string2680 = new GraceString("");
                  var string2683 = new GraceString("/gracelib/classes/");
                  // call case 6: other requests
                  var call2686 = callmethodChecked(var_settings, "outputdir", []);
                  var string2688 = new GraceString("");
                  var opresult2690 = callmethodChecked(string2688, "++(1)", [1], call2686);
                  var opresult2692 = callmethodChecked(opresult2690, "++(1)", [1], string2683);
                  var opresult2694 = callmethodChecked(opresult2692, "++(1)", [1], var_filename);
                  var opresult2696 = callmethodChecked(opresult2694, "++(1)", [1], string2680);
                  // call case 6: other requests
                  var call2697 = callmethodChecked(var_io, "exists(1)", [1], opresult2696);
                  if (Grace_isTrue(call2697)) {
                    var if2698 = GraceDone;
                    setLineNumber(402);    // compilenode member
                    // call case 4: self request
                    onSelf = true;
                    var call2700 = callmethodChecked(this, "isOnClassPage", []);
                    // call case 4: self request
                    onSelf = true;
                    var call2703 = callmethodChecked(this, "isOnTypePage", []);
                    var opresult2705 = callmethodChecked(call2703, "||(1)", [1], call2700);
                    if (Grace_isTrue(opresult2705)) {
                      setLineNumber(403);    // compilenode string
                      var string2706 = new GraceString("");
                      var string2709 = new GraceString("../../gracelib/classes/");
                      var opresult2711 = callmethodChecked(string2709, "++(1)", [1], var_filename);
                      var opresult2713 = callmethodChecked(opresult2711, "++(1)", [1], string2706);
                      var opresult2716 = callmethodChecked(var_out, "++(1)", [1], opresult2713);
                      var_out = opresult2716;
                      if2698 = GraceDone;
                    } else {
                      setLineNumber(405);    // compilenode string
                      var string2717 = new GraceString("");
                      var string2720 = new GraceString("../gracelib/classes/");
                      var opresult2722 = callmethodChecked(string2720, "++(1)", [1], var_filename);
                      var opresult2724 = callmethodChecked(opresult2722, "++(1)", [1], string2717);
                      var opresult2727 = callmethodChecked(var_out, "++(1)", [1], opresult2724);
                      var_out = opresult2727;
                      if2698 = GraceDone;
                    }
                    if2678 = if2698;
                  } else {
                    setLineNumber(408);    // compilenode string
                    var string2728 = new GraceString("");
                    var var_dots = string2728;
                    var if2729 = GraceDone;
                    setLineNumber(409);    // compilenode member
                    // call case 4: self request
                    onSelf = true;
                    var call2731 = callmethodChecked(this, "isOnTypePage", []);
                    // call case 4: self request
                    onSelf = true;
                    var call2734 = callmethodChecked(this, "isOnClassPage", []);
                    var opresult2736 = callmethodChecked(call2734, "||(1)", [1], call2731);
                    if (Grace_isTrue(opresult2736)) {
                      setLineNumber(410);    // compilenode string
                      var string2737 = new GraceString("../../");
                      var_dots = string2737;
                      if2729 = GraceDone;
                    } else {
                      setLineNumber(412);    // compilenode string
                      var string2738 = new GraceString("../");
                      var_dots = string2738;
                      if2729 = GraceDone;
                    }
                    setLineNumber(414);    // compilenode string
                    var string2739 = new GraceString("404.html");
                    var string2742 = new GraceString("");
                    var opresult2744 = callmethodChecked(string2742, "++(1)", [1], var_dots);
                    var opresult2746 = callmethodChecked(opresult2744, "++(1)", [1], string2739);
                    var opresult2749 = callmethodChecked(var_out, "++(1)", [1], opresult2746);
                    var_out = opresult2749;
                    if2678 = GraceDone;
                  }
                  if2628 = if2678;
                }
                if2560 = if2628;
              }
              setLineNumber(416);    // compilenode string
              var string2750 = new GraceString("</a>");
              var string2753 = new GraceString("'>");
              var opresult2755 = callmethodChecked(string2753, "++(1)", [1], var_c);
              var opresult2757 = callmethodChecked(opresult2755, "++(1)", [1], string2750);
              var opresult2760 = callmethodChecked(var_out, "++(1)", [1], opresult2757);
              var_out = opresult2760;
              setLineNumber(417);    // compilenode identifier
              return var_out;
            };
            func2550.paramTypes = [];
            func2550.paramTypes.push([type_String, "c"]);
            func2550.confidential = true;
            func2550.paramCounts = [1];
            obj2337.methods["getClassLink(1)"] = func2550;
            func2550.definitionLine = 381;
            func2550.definitionModule = "gracedoc";
            var func2761 = function(argcv) {    // method buildTemplate
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("gracedoc");
              setLineNumber(421);    // compilenode num
              var var_cursor = new GraceNum(0);
              setLineNumber(422);    // compilenode string
              var string2762 = new GraceString(" -- https://github.com/reid47/gracedoc -->\n");
              // call case 6: other requests
              var call2765 = callmethodChecked(var_settings, "version", []);
              var string2767 = new GraceString("<!-- generated by Gracedoc, v");
              var opresult2769 = callmethodChecked(string2767, "++(1)", [1], call2765);
              var opresult2771 = callmethodChecked(opresult2769, "++(1)", [1], string2762);
              var var_out = opresult2771;
              setLineNumber(423);    // compilenode string
              var string2772 = new GraceString("<!DOCTYPE html>\n<html>");
              var opresult2775 = callmethodChecked(var_out, "++(1)", [1], string2772);
              var_out = opresult2775;
              setLineNumber(424);    // compilenode string
              var string2776 = new GraceString("<head>");
              var opresult2779 = callmethodChecked(var_out, "++(1)", [1], string2776);
              var_out = opresult2779;
              setLineNumber(425);    // compilenode string
              var string2780 = new GraceString(" | GraceDocs</title>");
              // call case 4: self request
              onSelf = true;
              var call2783 = callmethodChecked(this, "title", []);
              var string2785 = new GraceString("<title>");
              var opresult2787 = callmethodChecked(string2785, "++(1)", [1], call2783);
              var opresult2789 = callmethodChecked(opresult2787, "++(1)", [1], string2780);
              var opresult2792 = callmethodChecked(var_out, "++(1)", [1], opresult2789);
              var_out = opresult2792;
              setLineNumber(426);    // compilenode string
              var string2793 = new GraceString("<meta charset=\"UTF-8\" />");
              var opresult2796 = callmethodChecked(var_out, "++(1)", [1], string2793);
              var_out = opresult2796;
              setLineNumber(427);    // compilenode vardec
              var var_cssDir;
              var if2797 = GraceDone;
              setLineNumber(428);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call2799 = callmethodChecked(this, "isOnTypePage", []);
              // call case 4: self request
              onSelf = true;
              var call2802 = callmethodChecked(this, "isOnClassPage", []);
              var opresult2804 = callmethodChecked(call2802, "||(1)", [1], call2799);
              if (Grace_isTrue(opresult2804)) {
                var string2805 = new GraceString("../../gracedoc.css");
                var_cssDir = string2805;
                if2797 = GraceDone;
              } else {
                setLineNumber(429);    // compilenode string
                var string2806 = new GraceString("../gracedoc.css");
                var_cssDir = string2806;
                if2797 = GraceDone;
              }
              setLineNumber(430);    // compilenode string
              var string2807 = new GraceString("\" />");
              var string2810 = new GraceString("<link rel=\"stylesheet\" href=\"");
              var opresult2812 = callmethodChecked(string2810, "++(1)", [1], var_cssDir);
              var opresult2814 = callmethodChecked(opresult2812, "++(1)", [1], string2807);
              var opresult2817 = callmethodChecked(var_out, "++(1)", [1], opresult2814);
              var_out = opresult2817;
              setLineNumber(431);    // compilenode string
              var string2818 = new GraceString("</head>");
              var opresult2821 = callmethodChecked(var_out, "++(1)", [1], string2818);
              var_out = opresult2821;
              setLineNumber(432);    // compilenode string
              var string2822 = new GraceString("<body>");
              var opresult2825 = callmethodChecked(var_out, "++(1)", [1], string2822);
              var_out = opresult2825;
              setLineNumber(433);    // compilenode string
              var string2826 = new GraceString("");
              // call case 4: self request
              onSelf = true;
              var call2829 = callmethodChecked(this, "title", []);
              var string2831 = new GraceString("<div class='header'><span class='header-left'>");
              var opresult2833 = callmethodChecked(string2831, "++(1)", [1], call2829);
              var opresult2835 = callmethodChecked(opresult2833, "++(1)", [1], string2826);
              var opresult2838 = callmethodChecked(var_out, "++(1)", [1], opresult2835);
              var_out = opresult2838;
              setLineNumber(434);    // compilenode member
              // call case 6: other requests
              var call2840 = callmethodChecked(var_out, "size", []);
              var_cursor = call2840;
              setLineNumber(435);    // compilenode string
              var string2841 = new GraceString("</span><span class='header-right'>GraceDocs</span></div>");
              var opresult2844 = callmethodChecked(var_out, "++(1)", [1], string2841);
              var_out = opresult2844;
              setLineNumber(436);    // compilenode string
              var string2845 = new GraceString("<div class='container'>");
              var opresult2848 = callmethodChecked(var_out, "++(1)", [1], string2845);
              var_out = opresult2848;
              setLineNumber(437);    // compilenode identifier
              // call case 6: other requests
              var call2851 = callmethodChecked(var_section, "withTemplate(1)andCursorAt(1)", [1, 1], var_out, var_cursor);
              // call case 4: self request
              onSelf = true;
              var call2852 = callmethodChecked(this, "headerSection:=(1)", [1], call2851);
              setLineNumber(439);    // compilenode num
              var_cursor = new GraceNum(0);
              setLineNumber(440);    // compilenode string
              var string2853 = new GraceString("<section id='top-description'>");
              var_out = string2853;
              setLineNumber(441);    // compilenode string
              var string2854 = new GraceString("<div class='top-box'>");
              var opresult2857 = callmethodChecked(var_out, "++(1)", [1], string2854);
              var_out = opresult2857;
              setLineNumber(442);    // compilenode member
              // call case 6: other requests
              var call2859 = callmethodChecked(var_out, "size", []);
              var_cursor = call2859;
              setLineNumber(443);    // compilenode string
              var string2860 = new GraceString("</div>");
              var opresult2863 = callmethodChecked(var_out, "++(1)", [1], string2860);
              var_out = opresult2863;
              setLineNumber(444);    // compilenode string
              var string2864 = new GraceString("</section>");
              var opresult2867 = callmethodChecked(var_out, "++(1)", [1], string2864);
              var_out = opresult2867;
              setLineNumber(445);    // compilenode identifier
              // call case 6: other requests
              var call2870 = callmethodChecked(var_section, "withTemplate(1)andCursorAt(1)", [1, 1], var_out, var_cursor);
              // call case 4: self request
              onSelf = true;
              var call2871 = callmethodChecked(this, "topDescSection:=(1)", [1], call2870);
              setLineNumber(447);    // compilenode num
              var_cursor = new GraceNum(0);
              setLineNumber(448);    // compilenode string
              var string2872 = new GraceString("<section id='fields'>");
              var_out = string2872;
              setLineNumber(449);    // compilenode string
              var string2873 = new GraceString("<h4>Fields</h4>");
              var opresult2876 = callmethodChecked(var_out, "++(1)", [1], string2873);
              var_out = opresult2876;
              setLineNumber(450);    // compilenode string
              var string2877 = new GraceString("<table>");
              var opresult2880 = callmethodChecked(var_out, "++(1)", [1], string2877);
              var_out = opresult2880;
              setLineNumber(451);    // compilenode string
              var string2881 = new GraceString("<tr><th></th><th>Field name</th><th>Type (if given)</th></tr>");
              var opresult2884 = callmethodChecked(var_out, "++(1)", [1], string2881);
              var_out = opresult2884;
              setLineNumber(452);    // compilenode member
              // call case 6: other requests
              var call2886 = callmethodChecked(var_out, "size", []);
              var_cursor = call2886;
              setLineNumber(453);    // compilenode string
              var string2887 = new GraceString("</table>");
              var opresult2890 = callmethodChecked(var_out, "++(1)", [1], string2887);
              var_out = opresult2890;
              setLineNumber(454);    // compilenode string
              var string2891 = new GraceString("</section>");
              var opresult2894 = callmethodChecked(var_out, "++(1)", [1], string2891);
              var_out = opresult2894;
              setLineNumber(455);    // compilenode identifier
              // call case 6: other requests
              var call2897 = callmethodChecked(var_section, "withTemplate(1)andCursorAt(1)", [1, 1], var_out, var_cursor);
              // call case 4: self request
              onSelf = true;
              var call2898 = callmethodChecked(this, "fieldsSection:=(1)", [1], call2897);
              setLineNumber(457);    // compilenode num
              var_cursor = new GraceNum(0);
              setLineNumber(458);    // compilenode string
              var string2899 = new GraceString("<section id='methodtypes'>");
              var_out = string2899;
              setLineNumber(459);    // compilenode string
              var string2900 = new GraceString("<h4>Added methods</h4>");
              var opresult2903 = callmethodChecked(var_out, "++(1)", [1], string2900);
              var_out = opresult2903;
              setLineNumber(460);    // compilenode string
              var string2904 = new GraceString("<table>");
              var opresult2907 = callmethodChecked(var_out, "++(1)", [1], string2904);
              var_out = opresult2907;
              setLineNumber(461);    // compilenode string
              var string2908 = new GraceString("<tr><th>Method signature</th><th>Return type</th></tr>");
              var opresult2911 = callmethodChecked(var_out, "++(1)", [1], string2908);
              var_out = opresult2911;
              setLineNumber(462);    // compilenode member
              // call case 6: other requests
              var call2913 = callmethodChecked(var_out, "size", []);
              var_cursor = call2913;
              setLineNumber(463);    // compilenode string
              var string2914 = new GraceString("</table>");
              var opresult2917 = callmethodChecked(var_out, "++(1)", [1], string2914);
              var_out = opresult2917;
              setLineNumber(464);    // compilenode string
              var string2918 = new GraceString("</section>");
              var opresult2921 = callmethodChecked(var_out, "++(1)", [1], string2918);
              var_out = opresult2921;
              setLineNumber(465);    // compilenode identifier
              // call case 6: other requests
              var call2924 = callmethodChecked(var_section, "withTemplate(1)andCursorAt(1)", [1, 1], var_out, var_cursor);
              // call case 4: self request
              onSelf = true;
              var call2925 = callmethodChecked(this, "methodtypesSection:=(1)", [1], call2924);
              setLineNumber(467);    // compilenode num
              var_cursor = new GraceNum(0);
              setLineNumber(468);    // compilenode string
              var string2926 = new GraceString("<section id='types'>");
              var_out = string2926;
              setLineNumber(469);    // compilenode string
              var string2927 = new GraceString("<h4>Types</h4>");
              var opresult2930 = callmethodChecked(var_out, "++(1)", [1], string2927);
              var_out = opresult2930;
              setLineNumber(470);    // compilenode string
              var string2931 = new GraceString("<table>");
              var opresult2934 = callmethodChecked(var_out, "++(1)", [1], string2931);
              var_out = opresult2934;
              setLineNumber(471);    // compilenode string
              var string2935 = new GraceString("<tr><th>Type name</th></tr>");
              var opresult2938 = callmethodChecked(var_out, "++(1)", [1], string2935);
              var_out = opresult2938;
              setLineNumber(472);    // compilenode member
              // call case 6: other requests
              var call2940 = callmethodChecked(var_out, "size", []);
              var_cursor = call2940;
              setLineNumber(473);    // compilenode string
              var string2941 = new GraceString("</table>");
              var opresult2944 = callmethodChecked(var_out, "++(1)", [1], string2941);
              var_out = opresult2944;
              setLineNumber(474);    // compilenode string
              var string2945 = new GraceString("</section>");
              var opresult2948 = callmethodChecked(var_out, "++(1)", [1], string2945);
              var_out = opresult2948;
              setLineNumber(475);    // compilenode identifier
              // call case 6: other requests
              var call2951 = callmethodChecked(var_section, "withTemplate(1)andCursorAt(1)", [1, 1], var_out, var_cursor);
              // call case 4: self request
              onSelf = true;
              var call2952 = callmethodChecked(this, "typesSection:=(1)", [1], call2951);
              setLineNumber(477);    // compilenode num
              var_cursor = new GraceNum(0);
              setLineNumber(478);    // compilenode string
              var string2953 = new GraceString("<section id='classes'>");
              var_out = string2953;
              setLineNumber(479);    // compilenode string
              var string2954 = new GraceString("<h4>Classes</h4>");
              var opresult2957 = callmethodChecked(var_out, "++(1)", [1], string2954);
              var_out = opresult2957;
              setLineNumber(480);    // compilenode string
              var string2958 = new GraceString("<table>");
              var opresult2961 = callmethodChecked(var_out, "++(1)", [1], string2958);
              var_out = opresult2961;
              setLineNumber(481);    // compilenode string
              var string2962 = new GraceString("<tr><th>Class name & constructor</th></tr>");
              var opresult2965 = callmethodChecked(var_out, "++(1)", [1], string2962);
              var_out = opresult2965;
              setLineNumber(482);    // compilenode member
              // call case 6: other requests
              var call2967 = callmethodChecked(var_out, "size", []);
              var_cursor = call2967;
              setLineNumber(483);    // compilenode string
              var string2968 = new GraceString("</table>");
              var opresult2971 = callmethodChecked(var_out, "++(1)", [1], string2968);
              var_out = opresult2971;
              setLineNumber(484);    // compilenode string
              var string2972 = new GraceString("</section>");
              var opresult2975 = callmethodChecked(var_out, "++(1)", [1], string2972);
              var_out = opresult2975;
              setLineNumber(485);    // compilenode identifier
              // call case 6: other requests
              var call2978 = callmethodChecked(var_section, "withTemplate(1)andCursorAt(1)", [1, 1], var_out, var_cursor);
              // call case 4: self request
              onSelf = true;
              var call2979 = callmethodChecked(this, "classesSection:=(1)", [1], call2978);
              setLineNumber(487);    // compilenode num
              var_cursor = new GraceNum(0);
              setLineNumber(488);    // compilenode string
              var string2980 = new GraceString("<section id='methods'>");
              var_out = string2980;
              setLineNumber(489);    // compilenode string
              var string2981 = new GraceString("<h4>Methods</h4>");
              var opresult2984 = callmethodChecked(var_out, "++(1)", [1], string2981);
              var_out = opresult2984;
              setLineNumber(490);    // compilenode string
              var string2985 = new GraceString("<table>");
              var opresult2988 = callmethodChecked(var_out, "++(1)", [1], string2985);
              var_out = opresult2988;
              setLineNumber(491);    // compilenode string
              var string2989 = new GraceString("<tr><th>Method signature</th><th>Return type</th></tr>");
              var opresult2992 = callmethodChecked(var_out, "++(1)", [1], string2989);
              var_out = opresult2992;
              setLineNumber(492);    // compilenode member
              // call case 6: other requests
              var call2994 = callmethodChecked(var_out, "size", []);
              var_cursor = call2994;
              setLineNumber(493);    // compilenode string
              var string2995 = new GraceString("</table>");
              var opresult2998 = callmethodChecked(var_out, "++(1)", [1], string2995);
              var_out = opresult2998;
              setLineNumber(494);    // compilenode string
              var string2999 = new GraceString("</section>");
              var opresult3002 = callmethodChecked(var_out, "++(1)", [1], string2999);
              var_out = opresult3002;
              setLineNumber(495);    // compilenode identifier
              // call case 6: other requests
              var call3005 = callmethodChecked(var_section, "withTemplate(1)andCursorAt(1)", [1, 1], var_out, var_cursor);
              // call case 4: self request
              onSelf = true;
              var call3006 = callmethodChecked(this, "methodsSection:=(1)", [1], call3005);
              setLineNumber(497);    // compilenode num
              var_cursor = new GraceNum(0);
              setLineNumber(498);    // compilenode string
              var string3007 = new GraceString("</div></body>");
              var_out = string3007;
              setLineNumber(499);    // compilenode string
              var string3008 = new GraceString("</html>");
              var opresult3011 = callmethodChecked(var_out, "++(1)", [1], string3008);
              var_out = opresult3011;
              setLineNumber(500);    // compilenode identifier
              // call case 6: other requests
              var call3014 = callmethodChecked(var_section, "withTemplate(1)andCursorAt(1)", [1, 1], var_out, var_cursor);
              // call case 4: self request
              onSelf = true;
              var call3015 = callmethodChecked(this, "footerSection:=(1)", [1], call3014);
              return call3015;
            };
            func2761.confidential = true;
            func2761.paramCounts = [0];
            obj2337.methods["buildTemplate"] = func2761;
            func2761.definitionLine = 420;
            func2761.definitionModule = "gracedoc";
            var func3016 = function(argcv) {    // method build404
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("gracedoc");
              setLineNumber(504);    // compilenode string
              var string3017 = new GraceString(" -- https://github.com/reid47/gracedoc -->\n");
              // call case 6: other requests
              var call3020 = callmethodChecked(var_settings, "version", []);
              var string3022 = new GraceString("<!-- generated by Gracedoc, v");
              var opresult3024 = callmethodChecked(string3022, "++(1)", [1], call3020);
              var opresult3026 = callmethodChecked(opresult3024, "++(1)", [1], string3017);
              var var_out = opresult3026;
              setLineNumber(505);    // compilenode string
              var string3027 = new GraceString("<!DOCTYPE html>\n<html>");
              var opresult3030 = callmethodChecked(var_out, "++(1)", [1], string3027);
              var_out = opresult3030;
              setLineNumber(506);    // compilenode string
              var string3031 = new GraceString("<head><title>404 - Page not found | GraceDocs</title></head>");
              var opresult3034 = callmethodChecked(var_out, "++(1)", [1], string3031);
              var_out = opresult3034;
              setLineNumber(507);    // compilenode string
              var string3035 = new GraceString("<body><div id='message-404'>404 - Page not found</div></body>");
              var opresult3038 = callmethodChecked(var_out, "++(1)", [1], string3035);
              var_out = opresult3038;
              setLineNumber(508);    // compilenode string
              var string3039 = new GraceString("</html>");
              var opresult3042 = callmethodChecked(var_out, "++(1)", [1], string3039);
              var_out = opresult3042;
              setLineNumber(509);    // compilenode string
              var string3044 = new GraceString("/404.html");
              // call case 6: other requests
              var call3047 = callmethodChecked(var_settings, "outputdir", []);
              var string3049 = new GraceString("");
              var opresult3051 = callmethodChecked(string3049, "++(1)", [1], call3047);
              var opresult3053 = callmethodChecked(opresult3051, "++(1)", [1], string3044);
              var string3054 = new GraceString("w");
              // call case 6: other requests
              var call3055 = callmethodChecked(var_io, "open(2)", [2], opresult3053, string3054);
              var var_file404 = call3055;
              setLineNumber(510);    // compilenode identifier
              // call case 6: other requests
              // call case 6: other requests
              // call case 3: self.outer request
              var call3060 = callmethodChecked(superDepth, "outer", [0]);
              var call3061 = callmethodChecked(call3060, "outer", []);
              onSelf = true;
              var call3062 = callmethodChecked(call3061, "autoindent(1)", [1], var_out);
              // call case 6: other requests
              var call3063 = callmethodChecked(var_file404, "write(1)", [1], call3062);
              setLineNumber(511);    // compilenode member
              // call case 6: other requests
              var call3065 = callmethodChecked(var_file404, "close", []);
              return call3065;
            };
            func3016.paramCounts = [0];
            obj2337.methods["build404"] = func3016;
            func3016.definitionLine = 503;
            func3016.definitionModule = "gracedoc";
            var func3066 = function(argcv) {    // method buildindex
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("gracedoc");
              setLineNumber(515);    // compilenode string
              var string3067 = new GraceString(" -- https://github.com/reid47/gracedoc -->\n");
              // call case 6: other requests
              var call3070 = callmethodChecked(var_settings, "version", []);
              var string3072 = new GraceString("<!-- generated by Gracedoc, v");
              var opresult3074 = callmethodChecked(string3072, "++(1)", [1], call3070);
              var opresult3076 = callmethodChecked(opresult3074, "++(1)", [1], string3067);
              var var_out = opresult3076;
              setLineNumber(516);    // compilenode string
              var string3077 = new GraceString("<!DOCTYPE html>\n<html lang=\"en\">");
              var opresult3080 = callmethodChecked(var_out, "++(1)", [1], string3077);
              var_out = opresult3080;
              setLineNumber(517);    // compilenode string
              var string3081 = new GraceString("<head>");
              var opresult3084 = callmethodChecked(var_out, "++(1)", [1], string3081);
              var_out = opresult3084;
              setLineNumber(518);    // compilenode string
              var string3085 = new GraceString("<title>GraceDocs</title>");
              var opresult3088 = callmethodChecked(var_out, "++(1)", [1], string3085);
              var_out = opresult3088;
              setLineNumber(519);    // compilenode string
              var string3089 = new GraceString("<link rel=\"stylesheet\" href=\"graceDoc.css\">");
              var opresult3092 = callmethodChecked(var_out, "++(1)", [1], string3089);
              var_out = opresult3092;
              setLineNumber(520);    // compilenode string
              var string3093 = new GraceString("</head>");
              var opresult3096 = callmethodChecked(var_out, "++(1)", [1], string3093);
              var_out = opresult3096;
              setLineNumber(521);    // compilenode string
              var string3097 = new GraceString("<body>");
              var opresult3100 = callmethodChecked(var_out, "++(1)", [1], string3097);
              var_out = opresult3100;
              setLineNumber(522);    // compilenode string
              var string3101 = new GraceString("<iframe id=\"frame-sidebar\" src=\"modules.html\" name=\"moduleFrame\"></iframe>");
              var opresult3104 = callmethodChecked(var_out, "++(1)", [1], string3101);
              var_out = opresult3104;
              setLineNumber(523);    // compilenode string
              var string3105 = new GraceString("<iframe id=\"frame-main\" src=\"\" name=\"mainFrame\"></iframe>");
              var opresult3108 = callmethodChecked(var_out, "++(1)", [1], string3105);
              var_out = opresult3108;
              setLineNumber(524);    // compilenode string
              var string3109 = new GraceString("</body>");
              var opresult3112 = callmethodChecked(var_out, "++(1)", [1], string3109);
              var_out = opresult3112;
              setLineNumber(525);    // compilenode string
              var string3113 = new GraceString("</html>");
              var opresult3116 = callmethodChecked(var_out, "++(1)", [1], string3113);
              var_out = opresult3116;
              setLineNumber(526);    // compilenode string
              var string3118 = new GraceString("/index.html");
              // call case 6: other requests
              var call3121 = callmethodChecked(var_settings, "outputdir", []);
              var string3123 = new GraceString("");
              var opresult3125 = callmethodChecked(string3123, "++(1)", [1], call3121);
              var opresult3127 = callmethodChecked(opresult3125, "++(1)", [1], string3118);
              var string3128 = new GraceString("w");
              // call case 6: other requests
              var call3129 = callmethodChecked(var_io, "open(2)", [2], opresult3127, string3128);
              var var_fileindex = call3129;
              setLineNumber(527);    // compilenode identifier
              // call case 6: other requests
              // call case 6: other requests
              // call case 3: self.outer request
              var call3134 = callmethodChecked(superDepth, "outer", [0]);
              var call3135 = callmethodChecked(call3134, "outer", []);
              onSelf = true;
              var call3136 = callmethodChecked(call3135, "autoindent(1)", [1], var_out);
              // call case 6: other requests
              var call3137 = callmethodChecked(var_fileindex, "write(1)", [1], call3136);
              setLineNumber(528);    // compilenode member
              // call case 6: other requests
              var call3139 = callmethodChecked(var_fileindex, "close", []);
              return call3139;
            };
            func3066.paramCounts = [0];
            obj2337.methods["buildindex"] = func3066;
            func3066.definitionLine = 514;
            func3066.definitionModule = "gracedoc";
            var func3140 = function(argcv) {    // method buildjs
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("gracedoc");
              setLineNumber(532);    // compilenode string
              var string3141 = new GraceString("function toggleContents(eltid) {\n    var elt = document.getElementById('contents-'+eltid)\n    var arrow = document.getElementById('arrow-button-'+eltid)\n    if (elt.style.display == 'none') {\n        elt.style.display = 'block';\n        arrow.innerHTML = '&#9660';\n    } else {\n        elt.style.display = 'none';\n        arrow.innerHTML = '&#9654';\n    }\n}");
              var var_out = string3141;
              setLineNumber(543);    // compilenode string
              var string3143 = new GraceString("/gracedoc.js");
              // call case 6: other requests
              var call3146 = callmethodChecked(var_settings, "outputdir", []);
              var string3148 = new GraceString("");
              var opresult3150 = callmethodChecked(string3148, "++(1)", [1], call3146);
              var opresult3152 = callmethodChecked(opresult3150, "++(1)", [1], string3143);
              var string3153 = new GraceString("w");
              // call case 6: other requests
              var call3154 = callmethodChecked(var_io, "open(2)", [2], opresult3152, string3153);
              var var_filejs = call3154;
              setLineNumber(544);    // compilenode identifier
              // call case 6: other requests
              var call3156 = callmethodChecked(var_filejs, "write(1)", [1], var_out);
              setLineNumber(545);    // compilenode member
              // call case 6: other requests
              var call3158 = callmethodChecked(var_filejs, "close", []);
              return call3158;
            };
            func3140.paramCounts = [0];
            obj2337.methods["buildjs"] = func3140;
            func3140.definitionLine = 531;
            func3140.definitionModule = "gracedoc";
            var func3159 = function(argcv) {    // method buildcss
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("gracedoc");
              setLineNumber(549);    // compilenode string
              var string3160 = new GraceString("@import url(http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,700);\n\n* {\n    margin: 0px;\n    padding: 0px;\n}\n\nbody {\n    font-size: 16px;\n    font-family: 'Open Sans', Helvetica, Arial, sans-serif;\n}\n\na, a:visited {\n    color: #00d;\n}\n\n.header {\n    height: 50px;\n    line-height: 50px;\n    padding: 0px 20px;\n    font-weight: bold;\n    background-color: rgb(0,80,105);\n    border-bottom: 2px solid #333;\n    font-size: 20px;\n    color: #fff;\n}\n\n.header-left {\n    float: left;\n}\n\n.header-right {\n    float: right;\n}\n\n.description {\n    font-style: italic;\n    font-size: 14px;\n}\n\n.container {\n    padding: 20px;\n}\n\nsection {\n    border: 1px solid #079;\n    border-radius: 0px;\n}\n\nsection > h4 {\n    margin: 0px;\n    background-color: rgb(80,160,185);\n    padding: 5px 10px;\n}\n\nsection + section {\n    margin-top: 20px;\n}\n\ntable {\n    margin: 0px;\n    width: 100%;\n    border-collapse: collapse;\n    table-layout: fixed;\n}\n\nth {\n    text-align: left;\n    background: rgb(130,200,215);\n    color: rgb(0,80,105);\n    font-size: 10px;\n    padding: 5px 10px;\n    border-bottom: 1px solid #079;\n}\n\ntd {\n    padding: 10px;\n    word-wrap: break-word;\n}\n\n.row-odd { background-color: #eeeeee; }\n.row-odd + tr.description {\n    background-color: #eeeeee;\n}\n\n.row-even { background-color: #ffffff; }\n.row-even + tr.description {\n    background-color: #ffffff;\n}\n\ntr.description > td {\n    padding-top: 0px;\n}\n.code, code {\n    font-family: Monaco, monospace;\n}\n.description {\n    font-size: 14px;\n    width: 50%;\n}\n.parameter-type {\n    font-family: Monaco, monospace;\n}\n.type-name {\n    font-family: Monaco, monospace;\n    font-weight: bold;\n}\n.method-name {\n    font-weight: bold;\n}\n.class-name {\n    font-weight: bold;\n}\n.identifier-name {\n    font-family: Monaco, monospace;\n    font-weight: bold;\n}\n\n/* MODULES LIST */\n\n.list-container h5 {\n    font-size: 16px;\n    background-color: rgb(0,80,105);\n    color: #ffffff;\n    padding: 5px 10px;\n}\n\n.list-container h6 {\n    font-size: 12px;\n    margin: 0px;\n    color: #000;\n    padding: 0px 5px;\n}\n\n.list-container ul {\n    padding: 5px 10px 10px 10px;\n}\n.list-container li {\n    list-style-type: none;\n}\n\niframe {\n    border: none;\n}\n\n#frame-sidebar {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 20%;\n    height: 100%;\n}\n\n#frame-main {\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 80%;\n    height: 100%;\n    border-left: 4px solid #bbb\n}\n\n.contents-list {\n    background: #e0e8f0;\n    padding: 10px 5px 5px 5px;\n    margin-left: 20px;\n    margin-right: 20px;\n    font-size: 14px;\n}\n\n.arrow-button-toggle {\n    font-family: monospace;\n    font-size: 14px;\n    color: rgb(0,0,105);\n    cursor: pointer;\n    width: 20px;\n    display: inline-block;\n}\n\n.top-box {\n    word-wrap: break-word;\n    margin: 20px;\n}\n\n.top-box hr {\n    margin: 10px 0;\n    border: 1px solid #079;\n}\n\n.headline {\n    font-size: 18px;\n}\n\n.quiet {\n    color: #888;\n    font-size: 14px;\n}");
              var var_out = string3160;
              setLineNumber(746);    // compilenode string
              var string3162 = new GraceString("/gracedoc.css");
              // call case 6: other requests
              var call3165 = callmethodChecked(var_settings, "outputdir", []);
              var string3167 = new GraceString("");
              var opresult3169 = callmethodChecked(string3167, "++(1)", [1], call3165);
              var opresult3171 = callmethodChecked(opresult3169, "++(1)", [1], string3162);
              var string3172 = new GraceString("w");
              // call case 6: other requests
              var call3173 = callmethodChecked(var_io, "open(2)", [2], opresult3171, string3172);
              var var_filecss = call3173;
              setLineNumber(747);    // compilenode identifier
              // call case 6: other requests
              var call3175 = callmethodChecked(var_filecss, "write(1)", [1], var_out);
              setLineNumber(748);    // compilenode member
              // call case 6: other requests
              var call3177 = callmethodChecked(var_filecss, "close", []);
              return call3177;
            };
            func3159.paramCounts = [0];
            obj2337.methods["buildcss"] = func3159;
            func3159.definitionLine = 548;
            func3159.definitionModule = "gracedoc";
            var func3178 = function(argcv) {    // method generate
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("gracedoc");
              var if3179 = GraceDone;
              setLineNumber(752);    // compilenode member
              // call case 6: other requests
              var call3182 = callmethodChecked(var_settings, "verbosity", []);
              var opresult3184 = callmethodChecked(call3182, ">(1)", [1], new GraceNum(1));
              if (Grace_isTrue(opresult3184)) {
                var string3185 = new GraceString(")");
                // call case 6: other requests
                var call3188 = callmethodChecked(var_sys, "elapsedTime", []);
                var string3190 = new GraceString(" - starting to assemble HTML (");
                // call case 4: self request
                onSelf = true;
                var call3193 = callmethodChecked(this, "title", []);
                var string3195 = new GraceString("On ");
                var opresult3197 = callmethodChecked(string3195, "++(1)", [1], call3193);
                var opresult3199 = callmethodChecked(opresult3197, "++(1)", [1], string3190);
                var opresult3201 = callmethodChecked(opresult3199, "++(1)", [1], call3188);
                var opresult3203 = callmethodChecked(opresult3201, "++(1)", [1], string3185);
                var call3204 = Grace_print(opresult3203);
                if3179 = call3204;
              }
              setLineNumber(754);    // compilenode vardec
              var var_outfile;
              setLineNumber(755);    // compilenode string
              var string3205 = new GraceString("");
              var var_output = string3205;
              var if3206 = GraceDone;
              setLineNumber(756);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call3208 = callmethodChecked(this, "isOnClassPage", []);
              if (Grace_isTrue(call3208)) {
                setLineNumber(757);    // compilenode string
                var string3210 = new GraceString(".html");
                // call case 4: self request
                onSelf = true;
                var call3213 = callmethodChecked(this, "pageName", []);
                var string3215 = new GraceString("/classes/");
                // call case 4: self request
                onSelf = true;
                var call3218 = callmethodChecked(this, "outdir", []);
                var string3220 = new GraceString("/");
                // call case 6: other requests
                var call3223 = callmethodChecked(var_settings, "outputdir", []);
                var string3225 = new GraceString("");
                var opresult3227 = callmethodChecked(string3225, "++(1)", [1], call3223);
                var opresult3229 = callmethodChecked(opresult3227, "++(1)", [1], string3220);
                var opresult3231 = callmethodChecked(opresult3229, "++(1)", [1], call3218);
                var opresult3233 = callmethodChecked(opresult3231, "++(1)", [1], string3215);
                var opresult3235 = callmethodChecked(opresult3233, "++(1)", [1], call3213);
                var opresult3237 = callmethodChecked(opresult3235, "++(1)", [1], string3210);
                var string3238 = new GraceString("w");
                // call case 6: other requests
                var call3239 = callmethodChecked(var_io, "open(2)", [2], opresult3237, string3238);
                var_outfile = call3239;
                if3206 = GraceDone;
              } else {
                var if3240 = GraceDone;
                setLineNumber(758);    // compilenode member
                // call case 4: self request
                onSelf = true;
                var call3242 = callmethodChecked(this, "isOnTypePage", []);
                if (Grace_isTrue(call3242)) {
                  setLineNumber(759);    // compilenode string
                  var string3244 = new GraceString(".html");
                  // call case 4: self request
                  onSelf = true;
                  var call3247 = callmethodChecked(this, "pageName", []);
                  var string3249 = new GraceString("/types/");
                  // call case 4: self request
                  onSelf = true;
                  var call3252 = callmethodChecked(this, "outdir", []);
                  var string3254 = new GraceString("/");
                  // call case 6: other requests
                  var call3257 = callmethodChecked(var_settings, "outputdir", []);
                  var string3259 = new GraceString("");
                  var opresult3261 = callmethodChecked(string3259, "++(1)", [1], call3257);
                  var opresult3263 = callmethodChecked(opresult3261, "++(1)", [1], string3254);
                  var opresult3265 = callmethodChecked(opresult3263, "++(1)", [1], call3252);
                  var opresult3267 = callmethodChecked(opresult3265, "++(1)", [1], string3249);
                  var opresult3269 = callmethodChecked(opresult3267, "++(1)", [1], call3247);
                  var opresult3271 = callmethodChecked(opresult3269, "++(1)", [1], string3244);
                  var string3272 = new GraceString("w");
                  // call case 6: other requests
                  var call3273 = callmethodChecked(var_io, "open(2)", [2], opresult3271, string3272);
                  var_outfile = call3273;
                  if3240 = GraceDone;
                } else {
                  setLineNumber(761);    // compilenode string
                  var string3275 = new GraceString(".html");
                  // call case 4: self request
                  onSelf = true;
                  var call3278 = callmethodChecked(this, "pageName", []);
                  var string3280 = new GraceString("/");
                  // call case 4: self request
                  onSelf = true;
                  var call3283 = callmethodChecked(this, "outdir", []);
                  var string3285 = new GraceString("/");
                  // call case 6: other requests
                  var call3288 = callmethodChecked(var_settings, "outputdir", []);
                  var string3290 = new GraceString("");
                  var opresult3292 = callmethodChecked(string3290, "++(1)", [1], call3288);
                  var opresult3294 = callmethodChecked(opresult3292, "++(1)", [1], string3285);
                  var opresult3296 = callmethodChecked(opresult3294, "++(1)", [1], call3283);
                  var opresult3298 = callmethodChecked(opresult3296, "++(1)", [1], string3280);
                  var opresult3300 = callmethodChecked(opresult3298, "++(1)", [1], call3278);
                  var opresult3302 = callmethodChecked(opresult3300, "++(1)", [1], string3275);
                  var string3303 = new GraceString("w");
                  // call case 6: other requests
                  var call3304 = callmethodChecked(var_io, "open(2)", [2], opresult3302, string3303);
                  var_outfile = call3304;
                  if3240 = GraceDone;
                }
                if3206 = if3240;
              }
              setLineNumber(763);    // compilenode member
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call3307 = callmethodChecked(this, "headerSection", []);
              var call3308 = callmethodChecked(call3307, "html", []);
              var opresult3311 = callmethodChecked(var_output, "++(1)", [1], call3308);
              var_output = opresult3311;
              var if3312 = GraceDone;
              setLineNumber(764);    // compilenode member
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call3315 = callmethodChecked(this, "topDescSection", []);
              var call3316 = callmethodChecked(call3315, "hasContent", []);
              if (Grace_isTrue(call3316)) {
                setLineNumber(765);    // compilenode member
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call3319 = callmethodChecked(this, "topDescSection", []);
                var call3320 = callmethodChecked(call3319, "html", []);
                var opresult3323 = callmethodChecked(var_output, "++(1)", [1], call3320);
                var_output = opresult3323;
                if3312 = GraceDone;
              }
              var if3324 = GraceDone;
              setLineNumber(767);    // compilenode member
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call3327 = callmethodChecked(this, "fieldsSection", []);
              var call3328 = callmethodChecked(call3327, "hasContent", []);
              if (Grace_isTrue(call3328)) {
                setLineNumber(768);    // compilenode member
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call3331 = callmethodChecked(this, "fieldsSection", []);
                var call3332 = callmethodChecked(call3331, "alphabetize", []);
                setLineNumber(769);    // compilenode member
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call3335 = callmethodChecked(this, "fieldsSection", []);
                var call3336 = callmethodChecked(call3335, "html", []);
                var opresult3339 = callmethodChecked(var_output, "++(1)", [1], call3336);
                var_output = opresult3339;
                if3324 = GraceDone;
              }
              var if3340 = GraceDone;
              setLineNumber(771);    // compilenode member
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call3343 = callmethodChecked(this, "methodtypesSection", []);
              var call3344 = callmethodChecked(call3343, "hasContent", []);
              if (Grace_isTrue(call3344)) {
                setLineNumber(772);    // compilenode member
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call3347 = callmethodChecked(this, "methodtypesSection", []);
                var call3348 = callmethodChecked(call3347, "alphabetize", []);
                setLineNumber(773);    // compilenode member
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call3351 = callmethodChecked(this, "methodtypesSection", []);
                var call3352 = callmethodChecked(call3351, "html", []);
                var opresult3355 = callmethodChecked(var_output, "++(1)", [1], call3352);
                var_output = opresult3355;
                if3340 = GraceDone;
              }
              var if3356 = GraceDone;
              setLineNumber(775);    // compilenode member
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call3359 = callmethodChecked(this, "typesSection", []);
              var call3360 = callmethodChecked(call3359, "hasContent", []);
              if (Grace_isTrue(call3360)) {
                setLineNumber(776);    // compilenode member
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call3363 = callmethodChecked(this, "typesSection", []);
                var call3364 = callmethodChecked(call3363, "alphabetize", []);
                setLineNumber(777);    // compilenode member
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call3367 = callmethodChecked(this, "typesSection", []);
                var call3368 = callmethodChecked(call3367, "html", []);
                var opresult3371 = callmethodChecked(var_output, "++(1)", [1], call3368);
                var_output = opresult3371;
                if3356 = GraceDone;
              }
              var if3372 = GraceDone;
              setLineNumber(779);    // compilenode member
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call3375 = callmethodChecked(this, "classesSection", []);
              var call3376 = callmethodChecked(call3375, "hasContent", []);
              if (Grace_isTrue(call3376)) {
                setLineNumber(780);    // compilenode member
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call3379 = callmethodChecked(this, "classesSection", []);
                var call3380 = callmethodChecked(call3379, "alphabetize", []);
                setLineNumber(781);    // compilenode member
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call3383 = callmethodChecked(this, "classesSection", []);
                var call3384 = callmethodChecked(call3383, "html", []);
                var opresult3387 = callmethodChecked(var_output, "++(1)", [1], call3384);
                var_output = opresult3387;
                if3372 = GraceDone;
              }
              var if3388 = GraceDone;
              setLineNumber(783);    // compilenode member
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call3391 = callmethodChecked(this, "methodsSection", []);
              var call3392 = callmethodChecked(call3391, "hasContent", []);
              if (Grace_isTrue(call3392)) {
                setLineNumber(784);    // compilenode member
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call3395 = callmethodChecked(this, "methodsSection", []);
                var call3396 = callmethodChecked(call3395, "alphabetize", []);
                setLineNumber(785);    // compilenode member
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call3399 = callmethodChecked(this, "methodsSection", []);
                var call3400 = callmethodChecked(call3399, "html", []);
                var opresult3403 = callmethodChecked(var_output, "++(1)", [1], call3400);
                var_output = opresult3403;
                if3388 = GraceDone;
              }
              setLineNumber(787);    // compilenode member
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call3406 = callmethodChecked(this, "footerSection", []);
              var call3407 = callmethodChecked(call3406, "html", []);
              var opresult3410 = callmethodChecked(var_output, "++(1)", [1], call3407);
              var_output = opresult3410;
              setLineNumber(788);    // compilenode identifier
              // call case 6: other requests
              // call case 6: other requests
              // call case 3: self.outer request
              var call3414 = callmethodChecked(superDepth, "outer", [0]);
              var call3415 = callmethodChecked(call3414, "outer", []);
              onSelf = true;
              var call3416 = callmethodChecked(call3415, "autoindent(1)", [1], var_output);
              var_output = call3416;
              setLineNumber(789);    // compilenode identifier
              // call case 6: other requests
              var call3418 = callmethodChecked(var_outfile, "write(1)", [1], var_output);
              setLineNumber(790);    // compilenode member
              // call case 6: other requests
              var call3420 = callmethodChecked(var_outfile, "close", []);
              var if3421 = GraceDone;
              setLineNumber(791);    // compilenode member
              // call case 6: other requests
              var call3424 = callmethodChecked(var_settings, "verbosity", []);
              var opresult3426 = callmethodChecked(call3424, ">(1)", [1], new GraceNum(1));
              if (Grace_isTrue(opresult3426)) {
                var string3427 = new GraceString(")");
                // call case 6: other requests
                var call3430 = callmethodChecked(var_sys, "elapsedTime", []);
                var string3432 = new GraceString(" - file written (");
                // call case 4: self request
                onSelf = true;
                var call3435 = callmethodChecked(this, "title", []);
                var string3437 = new GraceString("On ");
                var opresult3439 = callmethodChecked(string3437, "++(1)", [1], call3435);
                var opresult3441 = callmethodChecked(opresult3439, "++(1)", [1], string3432);
                var opresult3443 = callmethodChecked(opresult3441, "++(1)", [1], call3430);
                var opresult3445 = callmethodChecked(opresult3443, "++(1)", [1], string3427);
                var call3446 = Grace_print(opresult3445);
                if3421 = call3446;
              }
              return if3421;
            };
            func3178.paramCounts = [0];
            obj2337.methods["generate"] = func3178;
            func3178.definitionLine = 751;
            func3178.definitionModule = "gracedoc";
            var func3447 = function(argcv) {    // method visitMethodType(_)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_o = arguments[curarg];
              curarg++;
              setModuleName("gracedoc");
              var if3448 = GraceDone;
              setLineNumber(795);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call3450 = callmethodChecked(this, "isOnTypePage", []);
              if (Grace_isTrue(call3450)) {
                setLineNumber(796);    // compilenode string
                var string3451 = new GraceString("<tr class='placeholder'><td><code>");
                var var_t = string3451;
                setLineNumber(797);    // compilenode string
                var string3452 = new GraceString("");
                var var_n = string3452;
                setLineNumber(798);    // compilenode member
                // call case 6: other requests
                var call3455 = callmethodChecked(var_o, "signature", []);
                var block3456 = new GraceBlock(this, 798, 1);
                setLineNumber(1);    // compilenode identifier
                block3456.real = function(var_part) {
                  setLineNumber(799);    // compilenode string
                  var string3457 = new GraceString("</span>");
                  // call case 6: other requests
                  var call3460 = callmethodChecked(var_part, "name", []);
                  var string3462 = new GraceString("<span class='method-name'>");
                  var opresult3465 = callmethodChecked(var_t, "++(1)", [1], string3462);
                  var opresult3467 = callmethodChecked(opresult3465, "++(1)", [1], call3460);
                  var opresult3469 = callmethodChecked(opresult3467, "++(1)", [1], string3457);
                  var_t = opresult3469;
                  setLineNumber(800);    // compilenode member
                  // call case 6: other requests
                  var call3471 = callmethodChecked(var_part, "name", []);
                  var opresult3474 = callmethodChecked(var_n, "++(1)", [1], call3471);
                  var_n = opresult3474;
                  var if3475 = GraceDone;
                  setLineNumber(801);    // compilenode member
                  // call case 6: other requests
                  // call case 6: other requests
                  var call3478 = callmethodChecked(var_o, "signature", []);
                  var call3479 = callmethodChecked(call3478, "last", []);
                  var opresult3482 = callmethodChecked(var_part, "\u2260(1)", [1], call3479);
                  if (Grace_isTrue(opresult3482)) {
                    var string3483 = new GraceString("()");
                    var opresult3486 = callmethodChecked(var_n, "++(1)", [1], string3483);
                    var_n = opresult3486;
                    if3475 = GraceDone;
                  }
                  var if3487 = GraceDone;
                  setLineNumber(802);    // compilenode member
                  // call case 6: other requests
                  // call case 6: other requests
                  var call3491 = callmethodChecked(var_part, "params", []);
                  var call3492 = callmethodChecked(call3491, "size", []);
                  var opresult3494 = callmethodChecked(call3492, ">(1)", [1], new GraceNum(0));
                  if (Grace_isTrue(opresult3494)) {
                    setLineNumber(803);    // compilenode string
                    var string3495 = new GraceString("(");
                    var opresult3498 = callmethodChecked(var_t, "++(1)", [1], string3495);
                    var_t = opresult3498;
                    setLineNumber(804);    // compilenode member
                    // call case 6: other requests
                    var call3501 = callmethodChecked(var_part, "params", []);
                    var block3502 = new GraceBlock(this, 804, 1);
                    setLineNumber(1);    // compilenode identifier
                    block3502.real = function(var_param) {
                      var if3503 = GraceDone;
                      setLineNumber(805);    // compilenode member
                      // call case 6: other requests
                      var call3506 = callmethodChecked(var_param, "dtype", []);
                      var opresult3508 = callmethodChecked(call3506, "\u2260(1)", [1], GraceFalse);
                      if (Grace_isTrue(opresult3508)) {
                        setLineNumber(806);    // compilenode string
                        var string3509 = new GraceString("</span>");
                        // call case 6: other requests
                        var call3512 = callmethodChecked(var_param, "nameString", []);
                        var string3514 = new GraceString("<span class='parameter-name'>");
                        var opresult3517 = callmethodChecked(var_t, "++(1)", [1], string3514);
                        var opresult3519 = callmethodChecked(opresult3517, "++(1)", [1], call3512);
                        var opresult3521 = callmethodChecked(opresult3519, "++(1)", [1], string3509);
                        var_t = opresult3521;
                        setLineNumber(807);    // compilenode string
                        var string3522 = new GraceString(":");
                        var opresult3525 = callmethodChecked(var_t, "++(1)", [1], string3522);
                        var_t = opresult3525;
                        var if3526 = GraceDone;
                        setLineNumber(808);    // compilenode string
                        var string3527 = new GraceString("identifier");
                        // call case 6: other requests
                        // call case 6: other requests
                        var call3531 = callmethodChecked(var_param, "dtype", []);
                        var call3532 = callmethodChecked(call3531, "kind", []);
                        var opresult3534 = callmethodChecked(call3532, "==(1)", [1], string3527);
                        if (Grace_isTrue(opresult3534)) {
                          setLineNumber(809);    // compilenode member
                          // call case 6: other requests
                          // call case 6: other requests
                          var call3538 = callmethodChecked(var_param, "dtype", []);
                          var call3539 = callmethodChecked(call3538, "value", []);
                          // call case 4: self request
                          onSelf = true;
                          var call3540 = callmethodChecked(this, "getTypeLink(1)", [1], call3539);
                          var opresult3543 = callmethodChecked(var_t, "++(1)", [1], call3540);
                          var_t = opresult3543;
                          if3526 = GraceDone;
                        } else {
                          var if3544 = GraceDone;
                          setLineNumber(810);    // compilenode string
                          var string3545 = new GraceString("generic");
                          // call case 6: other requests
                          // call case 6: other requests
                          var call3549 = callmethodChecked(var_param, "dtype", []);
                          var call3550 = callmethodChecked(call3549, "kind", []);
                          var opresult3552 = callmethodChecked(call3550, "==(1)", [1], string3545);
                          if (Grace_isTrue(opresult3552)) {
                            setLineNumber(811);    // compilenode string
                            var string3553 = new GraceString("&lt;");
                            // call case 6: other requests
                            // call case 6: other requests
                            // call case 6: other requests
                            var call3559 = callmethodChecked(var_param, "dtype", []);
                            var call3560 = callmethodChecked(call3559, "value", []);
                            var call3561 = callmethodChecked(call3560, "value", []);
                            // call case 4: self request
                            onSelf = true;
                            var call3562 = callmethodChecked(this, "getTypeLink(1)", [1], call3561);
                            var opresult3565 = callmethodChecked(var_t, "++(1)", [1], call3562);
                            var opresult3567 = callmethodChecked(opresult3565, "++(1)", [1], string3553);
                            var_t = opresult3567;
                            setLineNumber(812);    // compilenode block
                            var block3569 = new GraceBlock(this, 812, 1);
                            setLineNumber(1);    // compilenode identifier
                            block3569.real = function(var_each) {
                              setLineNumber(812);    // compilenode string
                              var string3570 = new GraceString("");
                              // call case 6: other requests
                              var call3574 = callmethodChecked(var_each, "value", []);
                              // call case 4: self request
                              onSelf = true;
                              var call3575 = callmethodChecked(this, "getTypeLink(1)", [1], call3574);
                              var string3577 = new GraceString("");
                              var string3580 = new GraceString("");
                              var opresult3582 = callmethodChecked(string3580, "++(1)", [1], var_t);
                              var opresult3584 = callmethodChecked(opresult3582, "++(1)", [1], string3577);
                              var opresult3586 = callmethodChecked(opresult3584, "++(1)", [1], call3575);
                              var opresult3588 = callmethodChecked(opresult3586, "++(1)", [1], string3570);
                              var_t = opresult3588;
                              return GraceDone;
                            };
                            var block3589 = new GraceBlock(this, 812, 0);
                            block3589.real = function() {
                              var string3590 = new GraceString(", ");
                              var opresult3593 = callmethodChecked(var_t, "++(1)", [1], string3590);
                              var_t = opresult3593;
                              return GraceDone;
                            };
                            // call case 6: other requests
                            // call case 6: other requests
                            // call case 6: other requests
                            var call3596 = callmethodChecked(var_param, "dtype", []);
                            var call3597 = callmethodChecked(call3596, "args", []);
                            var call3598 = callmethodChecked(call3597, "do(1)separatedBy(1)", [1, 1], block3569, block3589);
                            setLineNumber(813);    // compilenode string
                            var string3599 = new GraceString("&gt;");
                            var opresult3602 = callmethodChecked(var_t, "++(1)", [1], string3599);
                            var_t = opresult3602;
                            if3544 = GraceDone;
                          }
                          if3526 = if3544;
                        }
                        if3503 = if3526;
                      } else {
                        setLineNumber(816);    // compilenode string
                        var string3603 = new GraceString("</span>");
                        // call case 6: other requests
                        var call3606 = callmethodChecked(var_param, "nameString", []);
                        var string3608 = new GraceString("<span class='parameter-name'>");
                        var opresult3611 = callmethodChecked(var_t, "++(1)", [1], string3608);
                        var opresult3613 = callmethodChecked(opresult3611, "++(1)", [1], call3606);
                        var opresult3615 = callmethodChecked(opresult3613, "++(1)", [1], string3603);
                        var_t = opresult3615;
                        if3503 = GraceDone;
                      }
                      var if3616 = GraceDone;
                      setLineNumber(818);    // compilenode member
                      // call case 6: other requests
                      // call case 6: other requests
                      var call3619 = callmethodChecked(var_part, "params", []);
                      var call3620 = callmethodChecked(call3619, "last", []);
                      var opresult3623 = callmethodChecked(var_param, "\u2260(1)", [1], call3620);
                      // call case 6: other requests
                      // call case 6: other requests
                      var call3628 = callmethodChecked(var_part, "params", []);
                      var call3629 = callmethodChecked(call3628, "size", []);
                      var opresult3631 = callmethodChecked(call3629, ">(1)", [1], new GraceNum(1));
                      var opresult3633 = callmethodChecked(opresult3631, "&&(1)", [1], opresult3623);
                      if (Grace_isTrue(opresult3633)) {
                        setLineNumber(819);    // compilenode string
                        var string3634 = new GraceString(", ");
                        var opresult3637 = callmethodChecked(var_t, "++(1)", [1], string3634);
                        var_t = opresult3637;
                        if3616 = GraceDone;
                      }
                      return if3616;
                    };
                    // call case 5: prelude request
                    var call3638 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call3501, block3502);
                    setLineNumber(822);    // compilenode string
                    var string3639 = new GraceString(")");
                    var opresult3642 = callmethodChecked(var_t, "++(1)", [1], string3639);
                    var_t = opresult3642;
                    if3487 = GraceDone;
                  }
                  return if3487;
                };
                // call case 5: prelude request
                var call3643 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call3455, block3456);
                setLineNumber(825);    // compilenode string
                var string3644 = new GraceString("</code></td>");
                var opresult3647 = callmethodChecked(var_t, "++(1)", [1], string3644);
                var_t = opresult3647;
                setLineNumber(826);    // compilenode string
                var string3648 = new GraceString("<td><code>");
                var opresult3651 = callmethodChecked(var_t, "++(1)", [1], string3648);
                var_t = opresult3651;
                var if3652 = GraceDone;
                setLineNumber(827);    // compilenode member
                // call case 6: other requests
                var call3655 = callmethodChecked(var_o, "rtype", []);
                var opresult3657 = callmethodChecked(call3655, "\u2260(1)", [1], GraceFalse);
                if (Grace_isTrue(opresult3657)) {
                  var if3658 = GraceDone;
                  setLineNumber(828);    // compilenode string
                  var string3659 = new GraceString("identifier");
                  // call case 6: other requests
                  // call case 6: other requests
                  var call3663 = callmethodChecked(var_o, "rtype", []);
                  var call3664 = callmethodChecked(call3663, "kind", []);
                  var opresult3666 = callmethodChecked(call3664, "==(1)", [1], string3659);
                  if (Grace_isTrue(opresult3666)) {
                    setLineNumber(829);    // compilenode member
                    // call case 6: other requests
                    // call case 6: other requests
                    var call3670 = callmethodChecked(var_o, "rtype", []);
                    var call3671 = callmethodChecked(call3670, "value", []);
                    // call case 4: self request
                    onSelf = true;
                    var call3672 = callmethodChecked(this, "getTypeLink(1)", [1], call3671);
                    var opresult3675 = callmethodChecked(var_t, "++(1)", [1], call3672);
                    var_t = opresult3675;
                    if3658 = GraceDone;
                  } else {
                    var if3676 = GraceDone;
                    setLineNumber(830);    // compilenode string
                    var string3677 = new GraceString("generic");
                    // call case 6: other requests
                    // call case 6: other requests
                    var call3681 = callmethodChecked(var_o, "rtype", []);
                    var call3682 = callmethodChecked(call3681, "kind", []);
                    var opresult3684 = callmethodChecked(call3682, "==(1)", [1], string3677);
                    if (Grace_isTrue(opresult3684)) {
                      setLineNumber(831);    // compilenode string
                      var string3685 = new GraceString("&lt;");
                      // call case 6: other requests
                      // call case 6: other requests
                      // call case 6: other requests
                      var call3691 = callmethodChecked(var_o, "rtype", []);
                      var call3692 = callmethodChecked(call3691, "value", []);
                      var call3693 = callmethodChecked(call3692, "value", []);
                      // call case 4: self request
                      onSelf = true;
                      var call3694 = callmethodChecked(this, "getTypeLink(1)", [1], call3693);
                      var opresult3697 = callmethodChecked(var_t, "++(1)", [1], call3694);
                      var opresult3699 = callmethodChecked(opresult3697, "++(1)", [1], string3685);
                      var_t = opresult3699;
                      setLineNumber(832);    // compilenode block
                      var block3701 = new GraceBlock(this, 832, 1);
                      setLineNumber(1);    // compilenode identifier
                      block3701.real = function(var_each) {
                        setLineNumber(832);    // compilenode string
                        var string3702 = new GraceString("");
                        // call case 6: other requests
                        var call3706 = callmethodChecked(var_each, "value", []);
                        // call case 4: self request
                        onSelf = true;
                        var call3707 = callmethodChecked(this, "getTypeLink(1)", [1], call3706);
                        var string3709 = new GraceString("");
                        var string3712 = new GraceString("");
                        var opresult3714 = callmethodChecked(string3712, "++(1)", [1], var_t);
                        var opresult3716 = callmethodChecked(opresult3714, "++(1)", [1], string3709);
                        var opresult3718 = callmethodChecked(opresult3716, "++(1)", [1], call3707);
                        var opresult3720 = callmethodChecked(opresult3718, "++(1)", [1], string3702);
                        var_t = opresult3720;
                        return GraceDone;
                      };
                      var block3721 = new GraceBlock(this, 832, 0);
                      block3721.real = function() {
                        var string3722 = new GraceString(", ");
                        var opresult3725 = callmethodChecked(var_t, "++(1)", [1], string3722);
                        var_t = opresult3725;
                        return GraceDone;
                      };
                      // call case 6: other requests
                      // call case 6: other requests
                      // call case 6: other requests
                      var call3728 = callmethodChecked(var_o, "rtype", []);
                      var call3729 = callmethodChecked(call3728, "args", []);
                      var call3730 = callmethodChecked(call3729, "do(1)separatedBy(1)", [1, 1], block3701, block3721);
                      setLineNumber(833);    // compilenode string
                      var string3731 = new GraceString("&gt;");
                      var opresult3734 = callmethodChecked(var_t, "++(1)", [1], string3731);
                      var_t = opresult3734;
                      if3676 = GraceDone;
                    }
                    if3658 = if3676;
                  }
                  if3652 = if3658;
                } else {
                  setLineNumber(836);    // compilenode string
                  var string3735 = new GraceString("Done");
                  var opresult3738 = callmethodChecked(var_t, "++(1)", [1], string3735);
                  var_t = opresult3738;
                  if3652 = GraceDone;
                }
                setLineNumber(838);    // compilenode string
                var string3739 = new GraceString("</code></td></tr>");
                var opresult3742 = callmethodChecked(var_t, "++(1)", [1], string3739);
                var_t = opresult3742;
                setLineNumber(839);    // compilenode string
                var string3744 = new GraceString("description");
                // call case 6: other requests
                // call case 6: other requests
                // call case 3: self.outer request
                var call3747 = callmethodChecked(superDepth, "outer", [0]);
                var call3748 = callmethodChecked(call3747, "outer", []);
                onSelf = true;
                var call3749 = callmethodChecked(call3748, "formatComments(1)rowClass(1)colspan(1)", [1, 1, 1], var_o, string3744, new GraceNum(2));
                var opresult3752 = callmethodChecked(var_t, "++(1)", [1], call3749);
                var_t = opresult3752;
                setLineNumber(840);    // compilenode identifier
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call3755 = callmethodChecked(this, "methodtypesSection", []);
                var call3756 = callmethodChecked(call3755, "addElement(1)withText(1)", [1, 1], var_n, var_t);
                setLineNumber(841);    // compilenode identifier
                return GraceFalse;
              } else {
                setLineNumber(843);    // compilenode identifier
                return GraceTrue;
              }
              setLineNumber(795);    // return value
              if (!Grace_isTrue(callmethod(var_Boolean, "match(1)", [1], if3448)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("result of method visitMethodType(_) does not have " + 
                          callmethod(var_Boolean, "asString", [0])._value + "."));
              return if3448;
            };
            func3447.paramCounts = [1];
            obj2337.methods["visitMethodType(1)"] = func3447;
            func3447.definitionLine = 794;
            func3447.definitionModule = "gracedoc";
            var func3757 = function(argcv) {    // method visitTypeDec(_)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_o = arguments[curarg];
              curarg++;
              setModuleName("gracedoc");
              var if3758 = GraceDone;
              setLineNumber(848);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call3761 = callmethodChecked(this, "isOnTypePage", []);
              var opresult3763 = callmethodChecked(call3761, "==(1)", [1], GraceFalse);
              if (Grace_isTrue(opresult3763)) {
                setLineNumber(849);    // compilenode string
                var string3764 = new GraceString("<tr class='placeholder'>");
                var var_t = string3764;
                setLineNumber(850);    // compilenode member
                // call case 6: other requests
                // call case 6: other requests
                var call3767 = callmethodChecked(var_o, "name", []);
                var call3768 = callmethodChecked(call3767, "value", []);
                var var_n = call3768;
                setLineNumber(851);    // compilenode string
                var string3769 = new GraceString("");
                // call case 6: other requests
                // call case 6: other requests
                var call3774 = callmethodChecked(var_o, "name", []);
                var call3775 = callmethodChecked(call3774, "value", []);
                // call case 4: self request
                onSelf = true;
                var call3776 = callmethodChecked(this, "getTypeLink(1)", [1], call3775);
                var string3778 = new GraceString("<td class='type-name'>");
                var opresult3780 = callmethodChecked(string3778, "++(1)", [1], call3776);
                var opresult3782 = callmethodChecked(opresult3780, "++(1)", [1], string3769);
                var opresult3785 = callmethodChecked(var_t, "++(1)", [1], opresult3782);
                var_t = opresult3785;
                var if3786 = GraceDone;
                setLineNumber(852);    // compilenode member
                // call case 6: other requests
                var call3788 = callmethodChecked(var_o, "typeParams", []);
                var opresult3791 = callmethodChecked(GraceFalse, "\u2260(1)", [1], call3788);
                if (Grace_isTrue(opresult3791)) {
                  setLineNumber(853);    // compilenode string
                  var string3792 = new GraceString("&lt;");
                  var opresult3795 = callmethodChecked(var_t, "++(1)", [1], string3792);
                  var_t = opresult3795;
                  setLineNumber(854);    // compilenode member
                  // call case 6: other requests
                  // call case 6: other requests
                  var call3799 = callmethodChecked(var_o, "typeParams", []);
                  var call3800 = callmethodChecked(call3799, "params", []);
                  var block3801 = new GraceBlock(this, 854, 1);
                  setLineNumber(1);    // compilenode identifier
                  block3801.real = function(var_g) {
                    setLineNumber(855);    // compilenode member
                    // call case 6: other requests
                    var call3803 = callmethodChecked(var_g, "nameString", []);
                    var opresult3806 = callmethodChecked(var_t, "++(1)", [1], call3803);
                    var_t = opresult3806;
                    var if3807 = GraceDone;
                    setLineNumber(856);    // compilenode member
                    // call case 6: other requests
                    // call case 6: other requests
                    // call case 6: other requests
                    var call3811 = callmethodChecked(var_o, "typeParams", []);
                    var call3812 = callmethodChecked(call3811, "params", []);
                    var call3813 = callmethodChecked(call3812, "last", []);
                    var opresult3816 = callmethodChecked(var_g, "\u2260(1)", [1], call3813);
                    if (Grace_isTrue(opresult3816)) {
                      var string3817 = new GraceString(", ");
                      var opresult3820 = callmethodChecked(var_t, "++(1)", [1], string3817);
                      var_t = opresult3820;
                      if3807 = GraceDone;
                    }
                    return if3807;
                  };
                  // call case 5: prelude request
                  var call3821 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call3800, block3801);
                  setLineNumber(858);    // compilenode string
                  var string3822 = new GraceString("&gt;");
                  var opresult3825 = callmethodChecked(var_t, "++(1)", [1], string3822);
                  var_t = opresult3825;
                  if3786 = GraceDone;
                }
                setLineNumber(860);    // compilenode string
                var string3826 = new GraceString("</td></tr>");
                var opresult3829 = callmethodChecked(var_t, "++(1)", [1], string3826);
                var_t = opresult3829;
                setLineNumber(862);    // compilenode string
                var string3831 = new GraceString("");
                // call case 6: other requests
                // call case 6: other requests
                var call3835 = callmethodChecked(var_o, "name", []);
                var call3836 = callmethodChecked(call3835, "value", []);
                var string3838 = new GraceString("");
                var opresult3840 = callmethodChecked(string3838, "++(1)", [1], call3836);
                var opresult3842 = callmethodChecked(opresult3840, "++(1)", [1], string3831);
                var string3843 = new GraceString("");
                // call case 4: self request
                onSelf = true;
                var call3846 = callmethodChecked(this, "outdir", []);
                var string3848 = new GraceString("");
                var opresult3850 = callmethodChecked(string3848, "++(1)", [1], call3846);
                var opresult3852 = callmethodChecked(opresult3850, "++(1)", [1], string3843);
                var string3853 = new GraceString("type");
                // call case 6: other requests
                var call3854 = callmethodChecked(var_graceDocVisitor, "createFrom(1)outTo(1)as(1)", [1, 1, 1], opresult3842, opresult3852, string3853);
                var var_typeVis = call3854;
                setLineNumber(863);    // compilenode identifier
                // call case 6: other requests
                var call3856 = callmethodChecked(var_o, "accept(1)", [1], var_typeVis);
                setLineNumber(864);    // compilenode member
                // call case 6: other requests
                var call3858 = callmethodChecked(var_typeVis, "generate", []);
                setLineNumber(865);    // compilenode string
                var string3860 = new GraceString("description");
                // call case 6: other requests
                // call case 6: other requests
                // call case 3: self.outer request
                var call3863 = callmethodChecked(superDepth, "outer", [0]);
                var call3864 = callmethodChecked(call3863, "outer", []);
                onSelf = true;
                var call3865 = callmethodChecked(call3864, "formatComments(1)rowClass(1)colspan(1)", [1, 1, 1], var_o, string3860, new GraceNum(1));
                var opresult3868 = callmethodChecked(var_t, "++(1)", [1], call3865);
                var_t = opresult3868;
                setLineNumber(866);    // compilenode identifier
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call3871 = callmethodChecked(this, "typesSection", []);
                var call3872 = callmethodChecked(call3871, "addElement(1)withText(1)", [1, 1], var_n, var_t);
                setLineNumber(867);    // compilenode identifier
                return GraceFalse;
              } else {
                setLineNumber(869);    // compilenode string
                var string3873 = new GraceString("");
                // call case 6: other requests
                // call case 6: other requests
                var call3877 = callmethodChecked(var_o, "name", []);
                var call3878 = callmethodChecked(call3877, "value", []);
                var string3880 = new GraceString("<span class='headline'><b><code>");
                var opresult3882 = callmethodChecked(string3880, "++(1)", [1], call3878);
                var opresult3884 = callmethodChecked(opresult3882, "++(1)", [1], string3873);
                var var_t = opresult3884;
                var if3885 = GraceDone;
                setLineNumber(870);    // compilenode member
                // call case 6: other requests
                var call3887 = callmethodChecked(var_o, "typeParams", []);
                var opresult3890 = callmethodChecked(GraceFalse, "\u2260(1)", [1], call3887);
                if (Grace_isTrue(opresult3890)) {
                  setLineNumber(871);    // compilenode string
                  var string3891 = new GraceString("&lt;");
                  var opresult3894 = callmethodChecked(var_t, "++(1)", [1], string3891);
                  var_t = opresult3894;
                  setLineNumber(872);    // compilenode member
                  // call case 6: other requests
                  // call case 6: other requests
                  var call3898 = callmethodChecked(var_o, "typeParams", []);
                  var call3899 = callmethodChecked(call3898, "params", []);
                  var block3900 = new GraceBlock(this, 872, 1);
                  setLineNumber(1);    // compilenode identifier
                  block3900.real = function(var_g) {
                    setLineNumber(873);    // compilenode member
                    // call case 6: other requests
                    var call3902 = callmethodChecked(var_g, "nameString", []);
                    var opresult3905 = callmethodChecked(var_t, "++(1)", [1], call3902);
                    var_t = opresult3905;
                    var if3906 = GraceDone;
                    setLineNumber(874);    // compilenode member
                    // call case 6: other requests
                    // call case 6: other requests
                    // call case 6: other requests
                    var call3910 = callmethodChecked(var_o, "typeParams", []);
                    var call3911 = callmethodChecked(call3910, "params", []);
                    var call3912 = callmethodChecked(call3911, "last", []);
                    var opresult3915 = callmethodChecked(var_g, "\u2260(1)", [1], call3912);
                    if (Grace_isTrue(opresult3915)) {
                      var string3916 = new GraceString(", ");
                      var opresult3919 = callmethodChecked(var_t, "++(1)", [1], string3916);
                      var_t = opresult3919;
                      if3906 = GraceDone;
                    }
                    return if3906;
                  };
                  // call case 5: prelude request
                  var call3920 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call3899, block3900);
                  setLineNumber(876);    // compilenode string
                  var string3921 = new GraceString("&gt;");
                  var opresult3924 = callmethodChecked(var_t, "++(1)", [1], string3921);
                  var_t = opresult3924;
                  if3885 = GraceDone;
                }
                setLineNumber(878);    // compilenode string
                var string3925 = new GraceString("</b> = ");
                var opresult3928 = callmethodChecked(var_t, "++(1)", [1], string3925);
                var_t = opresult3928;
                setLineNumber(879);    // compilenode string
                var string3929 = new GraceString("");
                var var_temp = string3929;
                setLineNumber(880);    // compilenode array
                var array3931 = new Lineup([]);
                // call case 5: prelude request
                var call3932 = callmethodChecked(var_prelude, "list(1)", [1], array3931);
                var var_ops = call3932;
                setLineNumber(881);    // compilenode array
                var array3934 = new Lineup([]);
                // call case 5: prelude request
                var call3935 = callmethodChecked(var_prelude, "list(1)", [1], array3934);
                var var_tps = call3935;
                setLineNumber(882);    // compilenode member
                // call case 6: other requests
                var call3937 = callmethodChecked(var_o, "value", []);
                var var_node = call3937;
                var if3938 = GraceDone;
                setLineNumber(884);    // compilenode string
                var string3939 = new GraceString("op");
                // call case 6: other requests
                var call3942 = callmethodChecked(var_node, "kind", []);
                var opresult3944 = callmethodChecked(call3942, "==(1)", [1], string3939);
                if (Grace_isTrue(opresult3944)) {
                  setLineNumber(885);    // compilenode block
                  var block3946 = new GraceBlock(this, 885, 0);
                  block3946.real = function() {
                    var string3947 = new GraceString("op");
                    // call case 6: other requests
                    var call3950 = callmethodChecked(var_node, "kind", []);
                    var opresult3952 = callmethodChecked(call3950, "==(1)", [1], string3947);
                    return opresult3952;
                  };
                  var block3953 = new GraceBlock(this, 885, 0);
                  block3953.real = function() {
                    setLineNumber(886);    // compilenode member
                    // call case 6: other requests
                    var call3956 = callmethodChecked(var_node, "value", []);
                    // call case 6: other requests
                    var call3957 = callmethodChecked(var_ops, "push(1)", [1], call3956);
                    var if3958 = GraceDone;
                    setLineNumber(887);    // compilenode string
                    var string3959 = new GraceString("identifier");
                    // call case 6: other requests
                    // call case 6: other requests
                    var call3963 = callmethodChecked(var_node, "right", []);
                    var call3964 = callmethodChecked(call3963, "kind", []);
                    var opresult3966 = callmethodChecked(call3964, "==(1)", [1], string3959);
                    var string3968 = new GraceString("identifier");
                    // call case 6: other requests
                    // call case 6: other requests
                    var call3972 = callmethodChecked(var_node, "left", []);
                    var call3973 = callmethodChecked(call3972, "kind", []);
                    var opresult3975 = callmethodChecked(call3973, "==(1)", [1], string3968);
                    var opresult3977 = callmethodChecked(opresult3975, "&&(1)", [1], opresult3966);
                    if (Grace_isTrue(opresult3977)) {
                      setLineNumber(888);    // compilenode string
                      var string3978 = new GraceString("");
                      // call case 6: other requests
                      // call case 6: other requests
                      var call3983 = callmethodChecked(var_node, "right", []);
                      var call3984 = callmethodChecked(call3983, "value", []);
                      // call case 4: self request
                      onSelf = true;
                      var call3985 = callmethodChecked(this, "getTypeLink(1)", [1], call3984);
                      var string3987 = new GraceString(" ");
                      // call case 6: other requests
                      var call3990 = callmethodChecked(var_ops, "pop", []);
                      var string3992 = new GraceString(" ");
                      // call case 6: other requests
                      // call case 6: other requests
                      var call3997 = callmethodChecked(var_node, "left", []);
                      var call3998 = callmethodChecked(call3997, "value", []);
                      // call case 4: self request
                      onSelf = true;
                      var call3999 = callmethodChecked(this, "getTypeLink(1)", [1], call3998);
                      var string4001 = new GraceString("");
                      var opresult4003 = callmethodChecked(string4001, "++(1)", [1], call3999);
                      var opresult4005 = callmethodChecked(opresult4003, "++(1)", [1], string3992);
                      var opresult4007 = callmethodChecked(opresult4005, "++(1)", [1], call3990);
                      var opresult4009 = callmethodChecked(opresult4007, "++(1)", [1], string3987);
                      var opresult4011 = callmethodChecked(opresult4009, "++(1)", [1], call3985);
                      var opresult4013 = callmethodChecked(opresult4011, "++(1)", [1], string3978);
                      var_temp = opresult4013;
                      if3958 = GraceDone;
                    } else {
                      var if4014 = GraceDone;
                      setLineNumber(889);    // compilenode string
                      var string4015 = new GraceString("identifier");
                      // call case 6: other requests
                      // call case 6: other requests
                      var call4019 = callmethodChecked(var_node, "right", []);
                      var call4020 = callmethodChecked(call4019, "kind", []);
                      var opresult4022 = callmethodChecked(call4020, "==(1)", [1], string4015);
                      if (Grace_isTrue(opresult4022)) {
                        setLineNumber(890);    // compilenode member
                        // call case 6: other requests
                        // call case 6: other requests
                        var call4026 = callmethodChecked(var_node, "right", []);
                        var call4027 = callmethodChecked(call4026, "value", []);
                        // call case 6: other requests
                        var call4028 = callmethodChecked(var_tps, "push(1)", [1], call4027);
                        if4014 = call4028;
                      } else {
                        var if4029 = GraceDone;
                        setLineNumber(891);    // compilenode string
                        var string4030 = new GraceString("identifier");
                        // call case 6: other requests
                        // call case 6: other requests
                        var call4034 = callmethodChecked(var_node, "left", []);
                        var call4035 = callmethodChecked(call4034, "kind", []);
                        var opresult4037 = callmethodChecked(call4035, "==(1)", [1], string4030);
                        if (Grace_isTrue(opresult4037)) {
                          setLineNumber(892);    // compilenode string
                          var string4038 = new GraceString("");
                          // call case 6: other requests
                          var call4041 = callmethodChecked(var_ops, "pop", []);
                          var string4043 = new GraceString(" ");
                          // call case 6: other requests
                          // call case 6: other requests
                          var call4048 = callmethodChecked(var_node, "left", []);
                          var call4049 = callmethodChecked(call4048, "value", []);
                          // call case 4: self request
                          onSelf = true;
                          var call4050 = callmethodChecked(this, "getTypeLink(1)", [1], call4049);
                          var string4052 = new GraceString("");
                          var opresult4054 = callmethodChecked(string4052, "++(1)", [1], call4050);
                          var opresult4056 = callmethodChecked(opresult4054, "++(1)", [1], string4043);
                          var opresult4058 = callmethodChecked(opresult4056, "++(1)", [1], call4041);
                          var opresult4060 = callmethodChecked(opresult4058, "++(1)", [1], string4038);
                          var_temp = opresult4060;
                          if4029 = GraceDone;
                        } else {
                          var if4061 = GraceDone;
                          setLineNumber(893);    // compilenode string
                          var string4062 = new GraceString("member");
                          // call case 6: other requests
                          // call case 6: other requests
                          var call4066 = callmethodChecked(var_node, "left", []);
                          var call4067 = callmethodChecked(call4066, "kind", []);
                          var opresult4069 = callmethodChecked(call4067, "==(1)", [1], string4062);
                          if (Grace_isTrue(opresult4069)) {
                            setLineNumber(894);    // compilenode string
                            var string4070 = new GraceString("");
                            // call case 6: other requests
                            var call4073 = callmethodChecked(var_ops, "pop", []);
                            var string4075 = new GraceString(" ");
                            var opresult4077 = callmethodChecked(string4075, "++(1)", [1], call4073);
                            var opresult4079 = callmethodChecked(opresult4077, "++(1)", [1], string4070);
                            var string4082 = new GraceString("");
                            // call case 6: other requests
                            // call case 6: other requests
                            var call4086 = callmethodChecked(var_node, "left", []);
                            var call4087 = callmethodChecked(call4086, "value", []);
                            var string4089 = new GraceString(".");
                            // call case 6: other requests
                            // call case 6: other requests
                            // call case 6: other requests
                            var call4094 = callmethodChecked(var_node, "left", []);
                            var call4095 = callmethodChecked(call4094, "receiver", []);
                            var call4096 = callmethodChecked(call4095, "value", []);
                            var string4098 = new GraceString("");
                            var opresult4100 = callmethodChecked(string4098, "++(1)", [1], call4096);
                            var opresult4102 = callmethodChecked(opresult4100, "++(1)", [1], string4089);
                            var opresult4104 = callmethodChecked(opresult4102, "++(1)", [1], call4087);
                            var opresult4106 = callmethodChecked(opresult4104, "++(1)", [1], string4082);
                            // call case 4: self request
                            onSelf = true;
                            var call4107 = callmethodChecked(this, "getTypeLink(1)", [1], opresult4106);
                            var opresult4109 = callmethodChecked(call4107, "++(1)", [1], opresult4079);
                            var_temp = opresult4109;
                            if4061 = GraceDone;
                          } else {
                            var if4110 = GraceDone;
                            setLineNumber(895);    // compilenode string
                            var string4111 = new GraceString("member");
                            // call case 6: other requests
                            // call case 6: other requests
                            var call4115 = callmethodChecked(var_node, "right", []);
                            var call4116 = callmethodChecked(call4115, "kind", []);
                            var opresult4118 = callmethodChecked(call4116, "==(1)", [1], string4111);
                            if (Grace_isTrue(opresult4118)) {
                              setLineNumber(896);    // compilenode string
                              var string4120 = new GraceString("");
                              // call case 6: other requests
                              // call case 6: other requests
                              var call4124 = callmethodChecked(var_node, "left", []);
                              var call4125 = callmethodChecked(call4124, "value", []);
                              var string4127 = new GraceString(".");
                              // call case 6: other requests
                              // call case 6: other requests
                              // call case 6: other requests
                              var call4132 = callmethodChecked(var_node, "left", []);
                              var call4133 = callmethodChecked(call4132, "receiver", []);
                              var call4134 = callmethodChecked(call4133, "value", []);
                              var string4136 = new GraceString("");
                              var opresult4138 = callmethodChecked(string4136, "++(1)", [1], call4134);
                              var opresult4140 = callmethodChecked(opresult4138, "++(1)", [1], string4127);
                              var opresult4142 = callmethodChecked(opresult4140, "++(1)", [1], call4125);
                              var opresult4144 = callmethodChecked(opresult4142, "++(1)", [1], string4120);
                              // call case 6: other requests
                              var call4145 = callmethodChecked(var_tps, "push(1)", [1], opresult4144);
                              if4110 = call4145;
                            }
                            if4061 = if4110;
                          }
                          if4029 = if4061;
                        }
                        if4014 = if4029;
                      }
                      if3958 = if4014;
                    }
                    setLineNumber(898);    // compilenode member
                    // call case 6: other requests
                    var call4147 = callmethodChecked(var_node, "left", []);
                    var_node = call4147;
                    return GraceDone;
                  };
                  // call case 5: prelude request
                  var call4148 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block3946, block3953);
                  setLineNumber(900);    // compilenode block
                  var block4150 = new GraceBlock(this, 900, 0);
                  block4150.real = function() {
                    // call case 6: other requests
                    var call4153 = callmethodChecked(var_ops, "size", []);
                    var opresult4155 = callmethodChecked(call4153, ">(1)", [1], new GraceNum(0));
                    // call case 6: other requests
                    var call4159 = callmethodChecked(var_tps, "size", []);
                    var opresult4161 = callmethodChecked(call4159, ">(1)", [1], new GraceNum(0));
                    var opresult4163 = callmethodChecked(opresult4161, "&&(1)", [1], opresult4155);
                    return opresult4163;
                  };
                  var block4164 = new GraceBlock(this, 900, 0);
                  block4164.real = function() {
                    setLineNumber(901);    // compilenode member
                    // call case 6: other requests
                    var call4166 = callmethodChecked(var_tps, "pop", []);
                    var var_p = call4166;
                    setLineNumber(902);    // compilenode string
                    var string4167 = new GraceString("");
                    // call case 6: other requests
                    var call4171 = callmethodChecked(var_p, "value", []);
                    // call case 4: self request
                    onSelf = true;
                    var call4172 = callmethodChecked(this, "getTypeLink(1)", [1], call4171);
                    var string4174 = new GraceString(" ");
                    // call case 6: other requests
                    var call4177 = callmethodChecked(var_ops, "pop", []);
                    var string4179 = new GraceString(" ");
                    var string4182 = new GraceString("");
                    var opresult4184 = callmethodChecked(string4182, "++(1)", [1], var_temp);
                    var opresult4186 = callmethodChecked(opresult4184, "++(1)", [1], string4179);
                    var opresult4188 = callmethodChecked(opresult4186, "++(1)", [1], call4177);
                    var opresult4190 = callmethodChecked(opresult4188, "++(1)", [1], string4174);
                    var opresult4192 = callmethodChecked(opresult4190, "++(1)", [1], call4172);
                    var opresult4194 = callmethodChecked(opresult4192, "++(1)", [1], string4167);
                    var_temp = opresult4194;
                    return GraceDone;
                  };
                  // call case 5: prelude request
                  var call4195 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block4150, block4164);
                  var if4196 = GraceDone;
                  setLineNumber(904);    // compilenode member
                  // call case 6: other requests
                  var call4199 = callmethodChecked(var_ops, "size", []);
                  var opresult4201 = callmethodChecked(call4199, ">(1)", [1], new GraceNum(0));
                  if (Grace_isTrue(opresult4201)) {
                    setLineNumber(905);    // compilenode string
                    var string4202 = new GraceString("");
                    // call case 6: other requests
                    var call4205 = callmethodChecked(var_ops, "pop", []);
                    var string4207 = new GraceString(" ");
                    var string4210 = new GraceString("");
                    var opresult4212 = callmethodChecked(string4210, "++(1)", [1], var_temp);
                    var opresult4214 = callmethodChecked(opresult4212, "++(1)", [1], string4207);
                    var opresult4216 = callmethodChecked(opresult4214, "++(1)", [1], call4205);
                    var opresult4218 = callmethodChecked(opresult4216, "++(1)", [1], string4202);
                    var_temp = opresult4218;
                    if4196 = GraceDone;
                  }
                  setLineNumber(907);    // compilenode string
                  var string4219 = new GraceString(" type ");
                  var opresult4223 = callmethodChecked(var_t, "++(1)", [1], var_temp);
                  var opresult4225 = callmethodChecked(opresult4223, "++(1)", [1], string4219);
                  var_t = opresult4225;
                  setLineNumber(908);    // compilenode string
                  var string4226 = new GraceString("{ <span class='quiet'>...added methods below...</span> }");
                  var opresult4229 = callmethodChecked(var_t, "++(1)", [1], string4226);
                  var_t = opresult4229;
                  if3938 = GraceDone;
                } else {
                  var if4230 = GraceDone;
                  setLineNumber(909);    // compilenode string
                  var string4231 = new GraceString("typeliteral");
                  // call case 6: other requests
                  var call4234 = callmethodChecked(var_node, "kind", []);
                  var opresult4236 = callmethodChecked(call4234, "==(1)", [1], string4231);
                  if (Grace_isTrue(opresult4236)) {
                    setLineNumber(910);    // compilenode string
                    var string4237 = new GraceString(" type ");
                    var opresult4241 = callmethodChecked(var_t, "++(1)", [1], var_temp);
                    var opresult4243 = callmethodChecked(opresult4241, "++(1)", [1], string4237);
                    var_t = opresult4243;
                    setLineNumber(911);    // compilenode string
                    var string4244 = new GraceString("{ <span class='quiet'>...added methods below...</span> }");
                    var opresult4247 = callmethodChecked(var_t, "++(1)", [1], string4244);
                    var_t = opresult4247;
                    if4230 = GraceDone;
                  } else {
                    var if4248 = GraceDone;
                    setLineNumber(912);    // compilenode string
                    var string4249 = new GraceString("identifier");
                    // call case 6: other requests
                    var call4252 = callmethodChecked(var_node, "kind", []);
                    var opresult4254 = callmethodChecked(call4252, "==(1)", [1], string4249);
                    if (Grace_isTrue(opresult4254)) {
                      setLineNumber(913);    // compilenode member
                      // call case 6: other requests
                      var call4257 = callmethodChecked(var_node, "value", []);
                      // call case 4: self request
                      onSelf = true;
                      var call4258 = callmethodChecked(this, "getTypeLink(1)", [1], call4257);
                      var string4260 = new GraceString(" ");
                      var opresult4263 = callmethodChecked(var_t, "++(1)", [1], string4260);
                      var opresult4265 = callmethodChecked(opresult4263, "++(1)", [1], call4258);
                      var_t = opresult4265;
                      var if4266 = GraceDone;
                      setLineNumber(914);    // compilenode member
                      // call case 6: other requests
                      var call4269 = callmethodChecked(var_node, "generics", []);
                      var opresult4271 = callmethodChecked(call4269, "\u2260(1)", [1], GraceFalse);
                      if (Grace_isTrue(opresult4271)) {
                        setLineNumber(915);    // compilenode string
                        var string4272 = new GraceString("&lt;");
                        var opresult4275 = callmethodChecked(var_t, "++(1)", [1], string4272);
                        var_t = opresult4275;
                        setLineNumber(916);    // compilenode member
                        // call case 6: other requests
                        var call4278 = callmethodChecked(var_node, "generics", []);
                        var block4279 = new GraceBlock(this, 916, 1);
                        setLineNumber(1);    // compilenode identifier
                        block4279.real = function(var_g) {
                          setLineNumber(917);    // compilenode member
                          // call case 6: other requests
                          var call4281 = callmethodChecked(var_g, "value", []);
                          var opresult4284 = callmethodChecked(var_t, "++(1)", [1], call4281);
                          var_t = opresult4284;
                          var if4285 = GraceDone;
                          setLineNumber(918);    // compilenode member
                          // call case 6: other requests
                          // call case 6: other requests
                          var call4288 = callmethodChecked(var_node, "generics", []);
                          var call4289 = callmethodChecked(call4288, "last", []);
                          var opresult4292 = callmethodChecked(var_g, "\u2260(1)", [1], call4289);
                          if (Grace_isTrue(opresult4292)) {
                            var string4293 = new GraceString(", ");
                            var opresult4296 = callmethodChecked(var_t, "++(1)", [1], string4293);
                            var_t = opresult4296;
                            if4285 = GraceDone;
                          }
                          return if4285;
                        };
                        // call case 5: prelude request
                        var call4297 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call4278, block4279);
                        setLineNumber(920);    // compilenode string
                        var string4298 = new GraceString("&gt;");
                        var opresult4301 = callmethodChecked(var_t, "++(1)", [1], string4298);
                        var_t = opresult4301;
                        if4266 = GraceDone;
                      }
                      if4248 = if4266;
                    } else {
                      var if4302 = GraceDone;
                      setLineNumber(922);    // compilenode string
                      var string4303 = new GraceString("member");
                      // call case 6: other requests
                      var call4306 = callmethodChecked(var_node, "kind", []);
                      var opresult4308 = callmethodChecked(call4306, "==(1)", [1], string4303);
                      if (Grace_isTrue(opresult4308)) {
                        setLineNumber(923);    // compilenode string
                        var string4310 = new GraceString("");
                        // call case 6: other requests
                        var call4313 = callmethodChecked(var_node, "value", []);
                        var string4315 = new GraceString(".");
                        // call case 6: other requests
                        // call case 6: other requests
                        var call4319 = callmethodChecked(var_node, "receiver", []);
                        var call4320 = callmethodChecked(call4319, "value", []);
                        var string4322 = new GraceString("");
                        var opresult4324 = callmethodChecked(string4322, "++(1)", [1], call4320);
                        var opresult4326 = callmethodChecked(opresult4324, "++(1)", [1], string4315);
                        var opresult4328 = callmethodChecked(opresult4326, "++(1)", [1], call4313);
                        var opresult4330 = callmethodChecked(opresult4328, "++(1)", [1], string4310);
                        // call case 4: self request
                        onSelf = true;
                        var call4331 = callmethodChecked(this, "getTypeLink(1)", [1], opresult4330);
                        var opresult4334 = callmethodChecked(var_t, "++(1)", [1], call4331);
                        var_t = opresult4334;
                        var if4335 = GraceDone;
                        setLineNumber(924);    // compilenode member
                        // call case 6: other requests
                        var call4338 = callmethodChecked(var_node, "generics", []);
                        var opresult4340 = callmethodChecked(call4338, "\u2260(1)", [1], GraceFalse);
                        if (Grace_isTrue(opresult4340)) {
                          setLineNumber(925);    // compilenode string
                          var string4341 = new GraceString("&lt;");
                          var opresult4344 = callmethodChecked(var_t, "++(1)", [1], string4341);
                          var_t = opresult4344;
                          setLineNumber(926);    // compilenode member
                          // call case 6: other requests
                          var call4347 = callmethodChecked(var_node, "generics", []);
                          var block4348 = new GraceBlock(this, 926, 1);
                          setLineNumber(1);    // compilenode identifier
                          block4348.real = function(var_g) {
                            setLineNumber(927);    // compilenode member
                            // call case 6: other requests
                            var call4350 = callmethodChecked(var_g, "value", []);
                            var opresult4353 = callmethodChecked(var_t, "++(1)", [1], call4350);
                            var_t = opresult4353;
                            var if4354 = GraceDone;
                            setLineNumber(928);    // compilenode member
                            // call case 6: other requests
                            // call case 6: other requests
                            var call4357 = callmethodChecked(var_node, "generics", []);
                            var call4358 = callmethodChecked(call4357, "last", []);
                            var opresult4361 = callmethodChecked(var_g, "\u2260(1)", [1], call4358);
                            if (Grace_isTrue(opresult4361)) {
                              var string4362 = new GraceString(", ");
                              var opresult4365 = callmethodChecked(var_t, "++(1)", [1], string4362);
                              var_t = opresult4365;
                              if4354 = GraceDone;
                            }
                            return if4354;
                          };
                          // call case 5: prelude request
                          var call4366 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call4347, block4348);
                          setLineNumber(930);    // compilenode string
                          var string4367 = new GraceString("&gt;");
                          var opresult4370 = callmethodChecked(var_t, "++(1)", [1], string4367);
                          var_t = opresult4370;
                          if4335 = GraceDone;
                        }
                        if4302 = if4335;
                      }
                      if4248 = if4302;
                    }
                    if4230 = if4248;
                  }
                  if3938 = if4230;
                }
                setLineNumber(933);    // compilenode string
                var string4371 = new GraceString("</code></span>");
                var opresult4374 = callmethodChecked(var_t, "++(1)", [1], string4371);
                var_t = opresult4374;
                setLineNumber(934);    // compilenode string
                var string4375 = new GraceString("<hr />");
                var opresult4378 = callmethodChecked(var_t, "++(1)", [1], string4375);
                var_t = opresult4378;
                setLineNumber(935);    // compilenode string
                var string4380 = new GraceString("top-box-description");
                // call case 6: other requests
                // call case 6: other requests
                // call case 3: self.outer request
                var call4383 = callmethodChecked(superDepth, "outer", [0]);
                var call4384 = callmethodChecked(call4383, "outer", []);
                onSelf = true;
                var call4385 = callmethodChecked(call4384, "formatComments(1)rowClass(1)colspan(1)", [1, 1, 1], var_o, string4380, new GraceNum(1));
                var opresult4388 = callmethodChecked(var_t, "++(1)", [1], call4385);
                var_t = opresult4388;
                setLineNumber(936);    // compilenode identifier
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call4391 = callmethodChecked(this, "topDescSection", []);
                var call4392 = callmethodChecked(call4391, "insert(1)", [1], var_t);
                setLineNumber(937);    // compilenode identifier
                return GraceTrue;
              }
              setLineNumber(848);    // return value
              if (!Grace_isTrue(callmethod(var_Boolean, "match(1)", [1], if3758)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("result of method visitTypeDec(_) does not have " + 
                          callmethod(var_Boolean, "asString", [0])._value + "."));
              return if3758;
            };
            func3757.paramCounts = [1];
            obj2337.methods["visitTypeDec(1)"] = func3757;
            func3757.definitionLine = 847;
            func3757.definitionModule = "gracedoc";
            var func4393 = function(argcv) {    // method visitMethod(_)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_o = arguments[curarg];
              curarg++;
              setModuleName("gracedoc");
              var if4394 = GraceDone;
              setLineNumber(943);    // compilenode member
              // call case 6: other requests
              var call4396 = callmethodChecked(var_o, "isConfidential", []);
              // call case 6: other requests
              var call4399 = callmethodChecked(var_settings, "publicOnly", []);
              var opresult4401 = callmethodChecked(call4399, "&&(1)", [1], call4396);
              if (Grace_isTrue(opresult4401)) {
                return GraceFalse;
              }
              var if4402 = GraceDone;
              setLineNumber(944);    // compilenode member
              // call case 6: other requests
              var call4404 = callmethodChecked(var_o, "isClass", []);
              if (Grace_isTrue(call4404)) {
                setLineNumber(945);    // compilenode identifier
                // call case 4: self request
                onSelf = true;
                var call4406 = callmethodChecked(this, "doClassMethod(1)", [1], var_o);
                return call4406;
              }
              setLineNumber(947);    // compilenode string
              var string4407 = new GraceString("<tr class='placeholder'><td><code>");
              var var_t = string4407;
              setLineNumber(948);    // compilenode string
              var string4408 = new GraceString("");
              var var_n = string4408;
              setLineNumber(949);    // compilenode member
              // call case 6: other requests
              var call4411 = callmethodChecked(var_o, "signature", []);
              var block4412 = new GraceBlock(this, 949, 1);
              setLineNumber(1);    // compilenode identifier
              block4412.real = function(var_part) {
                setLineNumber(950);    // compilenode string
                var string4413 = new GraceString("</span>");
                // call case 6: other requests
                var call4416 = callmethodChecked(var_part, "name", []);
                var string4418 = new GraceString("<span class='method-name'>");
                var opresult4421 = callmethodChecked(var_t, "++(1)", [1], string4418);
                var opresult4423 = callmethodChecked(opresult4421, "++(1)", [1], call4416);
                var opresult4425 = callmethodChecked(opresult4423, "++(1)", [1], string4413);
                var_t = opresult4425;
                setLineNumber(951);    // compilenode member
                // call case 6: other requests
                var call4427 = callmethodChecked(var_part, "name", []);
                var opresult4430 = callmethodChecked(var_n, "++(1)", [1], call4427);
                var_n = opresult4430;
                var if4431 = GraceDone;
                setLineNumber(952);    // compilenode member
                // call case 6: other requests
                // call case 6: other requests
                var call4434 = callmethodChecked(var_o, "signature", []);
                var call4435 = callmethodChecked(call4434, "last", []);
                var opresult4438 = callmethodChecked(var_part, "\u2260(1)", [1], call4435);
                if (Grace_isTrue(opresult4438)) {
                  var string4439 = new GraceString("()");
                  var opresult4442 = callmethodChecked(var_n, "++(1)", [1], string4439);
                  var_n = opresult4442;
                  if4431 = GraceDone;
                }
                var if4443 = GraceDone;
                setLineNumber(953);    // compilenode member
                // call case 6: other requests
                // call case 6: other requests
                var call4447 = callmethodChecked(var_part, "params", []);
                var call4448 = callmethodChecked(call4447, "size", []);
                var opresult4450 = callmethodChecked(call4448, ">(1)", [1], new GraceNum(0));
                if (Grace_isTrue(opresult4450)) {
                  setLineNumber(954);    // compilenode string
                  var string4451 = new GraceString("(");
                  var opresult4454 = callmethodChecked(var_t, "++(1)", [1], string4451);
                  var_t = opresult4454;
                  setLineNumber(955);    // compilenode member
                  // call case 6: other requests
                  var call4457 = callmethodChecked(var_part, "params", []);
                  var block4458 = new GraceBlock(this, 955, 1);
                  setLineNumber(1);    // compilenode identifier
                  block4458.real = function(var_param) {
                    var if4459 = GraceDone;
                    setLineNumber(956);    // compilenode member
                    // call case 6: other requests
                    var call4462 = callmethodChecked(var_param, "dtype", []);
                    var opresult4464 = callmethodChecked(call4462, "\u2260(1)", [1], GraceFalse);
                    if (Grace_isTrue(opresult4464)) {
                      setLineNumber(957);    // compilenode string
                      var string4465 = new GraceString("</span>");
                      // call case 6: other requests
                      var call4468 = callmethodChecked(var_param, "nameString", []);
                      var string4470 = new GraceString("<span class='parameter-name'>");
                      var opresult4473 = callmethodChecked(var_t, "++(1)", [1], string4470);
                      var opresult4475 = callmethodChecked(opresult4473, "++(1)", [1], call4468);
                      var opresult4477 = callmethodChecked(opresult4475, "++(1)", [1], string4465);
                      var_t = opresult4477;
                      setLineNumber(959);    // compilenode string
                      var string4478 = new GraceString(":<span class='parameter-type'>");
                      var opresult4481 = callmethodChecked(var_t, "++(1)", [1], string4478);
                      var_t = opresult4481;
                      var if4482 = GraceDone;
                      setLineNumber(960);    // compilenode string
                      var string4483 = new GraceString("identifier");
                      // call case 6: other requests
                      // call case 6: other requests
                      var call4487 = callmethodChecked(var_param, "dtype", []);
                      var call4488 = callmethodChecked(call4487, "kind", []);
                      var opresult4490 = callmethodChecked(call4488, "==(1)", [1], string4483);
                      if (Grace_isTrue(opresult4490)) {
                        setLineNumber(961);    // compilenode member
                        // call case 6: other requests
                        // call case 6: other requests
                        var call4494 = callmethodChecked(var_param, "dtype", []);
                        var call4495 = callmethodChecked(call4494, "value", []);
                        // call case 4: self request
                        onSelf = true;
                        var call4496 = callmethodChecked(this, "getTypeLink(1)", [1], call4495);
                        var opresult4499 = callmethodChecked(var_t, "++(1)", [1], call4496);
                        var_t = opresult4499;
                        if4482 = GraceDone;
                      } else {
                        var if4500 = GraceDone;
                        setLineNumber(962);    // compilenode string
                        var string4501 = new GraceString("generic");
                        // call case 6: other requests
                        // call case 6: other requests
                        var call4505 = callmethodChecked(var_param, "dtype", []);
                        var call4506 = callmethodChecked(call4505, "kind", []);
                        var opresult4508 = callmethodChecked(call4506, "==(1)", [1], string4501);
                        if (Grace_isTrue(opresult4508)) {
                          setLineNumber(963);    // compilenode string
                          var string4509 = new GraceString("&lt;");
                          // call case 6: other requests
                          // call case 6: other requests
                          // call case 6: other requests
                          var call4515 = callmethodChecked(var_param, "dtype", []);
                          var call4516 = callmethodChecked(call4515, "value", []);
                          var call4517 = callmethodChecked(call4516, "value", []);
                          // call case 4: self request
                          onSelf = true;
                          var call4518 = callmethodChecked(this, "getTypeLink(1)", [1], call4517);
                          var opresult4521 = callmethodChecked(var_t, "++(1)", [1], call4518);
                          var opresult4523 = callmethodChecked(opresult4521, "++(1)", [1], string4509);
                          var_t = opresult4523;
                          setLineNumber(964);    // compilenode block
                          var block4525 = new GraceBlock(this, 964, 1);
                          setLineNumber(1);    // compilenode identifier
                          block4525.real = function(var_each) {
                            setLineNumber(964);    // compilenode string
                            var string4526 = new GraceString("");
                            // call case 6: other requests
                            var call4530 = callmethodChecked(var_each, "value", []);
                            // call case 4: self request
                            onSelf = true;
                            var call4531 = callmethodChecked(this, "getTypeLink(1)", [1], call4530);
                            var string4533 = new GraceString("");
                            var string4536 = new GraceString("");
                            var opresult4538 = callmethodChecked(string4536, "++(1)", [1], var_t);
                            var opresult4540 = callmethodChecked(opresult4538, "++(1)", [1], string4533);
                            var opresult4542 = callmethodChecked(opresult4540, "++(1)", [1], call4531);
                            var opresult4544 = callmethodChecked(opresult4542, "++(1)", [1], string4526);
                            var_t = opresult4544;
                            return GraceDone;
                          };
                          var block4545 = new GraceBlock(this, 964, 0);
                          block4545.real = function() {
                            var string4546 = new GraceString(", ");
                            var opresult4549 = callmethodChecked(var_t, "++(1)", [1], string4546);
                            var_t = opresult4549;
                            return GraceDone;
                          };
                          // call case 6: other requests
                          // call case 6: other requests
                          // call case 6: other requests
                          var call4552 = callmethodChecked(var_param, "dtype", []);
                          var call4553 = callmethodChecked(call4552, "args", []);
                          var call4554 = callmethodChecked(call4553, "do(1)separatedBy(1)", [1, 1], block4525, block4545);
                          setLineNumber(965);    // compilenode string
                          var string4555 = new GraceString("&gt;");
                          var opresult4558 = callmethodChecked(var_t, "++(1)", [1], string4555);
                          var_t = opresult4558;
                          if4500 = GraceDone;
                        }
                        if4482 = if4500;
                      }
                      setLineNumber(967);    // compilenode string
                      var string4559 = new GraceString("</span>");
                      var opresult4562 = callmethodChecked(var_t, "++(1)", [1], string4559);
                      var_t = opresult4562;
                      if4459 = GraceDone;
                    } else {
                      setLineNumber(970);    // compilenode string
                      var string4563 = new GraceString("</span>");
                      // call case 6: other requests
                      var call4566 = callmethodChecked(var_param, "nameString", []);
                      var string4568 = new GraceString("<span class='parameter-name'>");
                      var opresult4571 = callmethodChecked(var_t, "++(1)", [1], string4568);
                      var opresult4573 = callmethodChecked(opresult4571, "++(1)", [1], call4566);
                      var opresult4575 = callmethodChecked(opresult4573, "++(1)", [1], string4563);
                      var_t = opresult4575;
                      if4459 = GraceDone;
                    }
                    var if4576 = GraceDone;
                    setLineNumber(972);    // compilenode member
                    // call case 6: other requests
                    // call case 6: other requests
                    var call4579 = callmethodChecked(var_part, "params", []);
                    var call4580 = callmethodChecked(call4579, "last", []);
                    var opresult4583 = callmethodChecked(var_param, "\u2260(1)", [1], call4580);
                    // call case 6: other requests
                    // call case 6: other requests
                    var call4588 = callmethodChecked(var_part, "params", []);
                    var call4589 = callmethodChecked(call4588, "size", []);
                    var opresult4591 = callmethodChecked(call4589, ">(1)", [1], new GraceNum(1));
                    var opresult4593 = callmethodChecked(opresult4591, "&&(1)", [1], opresult4583);
                    if (Grace_isTrue(opresult4593)) {
                      setLineNumber(973);    // compilenode string
                      var string4594 = new GraceString(", ");
                      var opresult4597 = callmethodChecked(var_t, "++(1)", [1], string4594);
                      var_t = opresult4597;
                      if4576 = GraceDone;
                    }
                    return if4576;
                  };
                  // call case 5: prelude request
                  var call4598 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call4457, block4458);
                  setLineNumber(976);    // compilenode string
                  var string4599 = new GraceString(")");
                  var opresult4602 = callmethodChecked(var_t, "++(1)", [1], string4599);
                  var_t = opresult4602;
                  if4443 = GraceDone;
                }
                return if4443;
              };
              // call case 5: prelude request
              var call4603 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call4411, block4412);
              setLineNumber(979);    // compilenode string
              var string4604 = new GraceString("</code></td>");
              var opresult4607 = callmethodChecked(var_t, "++(1)", [1], string4604);
              var_t = opresult4607;
              setLineNumber(980);    // compilenode string
              var string4608 = new GraceString("<td><code>");
              var opresult4611 = callmethodChecked(var_t, "++(1)", [1], string4608);
              var_t = opresult4611;
              var if4612 = GraceDone;
              setLineNumber(981);    // compilenode member
              // call case 6: other requests
              var call4615 = callmethodChecked(var_o, "dtype", []);
              var opresult4617 = callmethodChecked(call4615, "\u2260(1)", [1], GraceFalse);
              if (Grace_isTrue(opresult4617)) {
                setLineNumber(982);    // compilenode member
                // call case 6: other requests
                // call case 6: other requests
                var call4621 = callmethodChecked(var_o, "dtype", []);
                var call4622 = callmethodChecked(call4621, "value", []);
                // call case 4: self request
                onSelf = true;
                var call4623 = callmethodChecked(this, "getTypeLink(1)", [1], call4622);
                var opresult4626 = callmethodChecked(var_t, "++(1)", [1], call4623);
                var_t = opresult4626;
                if4612 = GraceDone;
              } else {
                setLineNumber(984);    // compilenode string
                var string4628 = new GraceString("Done");
                // call case 4: self request
                onSelf = true;
                var call4629 = callmethodChecked(this, "getTypeLink(1)", [1], string4628);
                var opresult4632 = callmethodChecked(var_t, "++(1)", [1], call4629);
                var_t = opresult4632;
                if4612 = GraceDone;
              }
              setLineNumber(986);    // compilenode string
              var string4633 = new GraceString("</code></td></tr>");
              var opresult4636 = callmethodChecked(var_t, "++(1)", [1], string4633);
              var_t = opresult4636;
              setLineNumber(987);    // compilenode string
              var string4638 = new GraceString("description");
              // call case 6: other requests
              // call case 6: other requests
              // call case 3: self.outer request
              var call4641 = callmethodChecked(superDepth, "outer", [0]);
              var call4642 = callmethodChecked(call4641, "outer", []);
              onSelf = true;
              var call4643 = callmethodChecked(call4642, "formatComments(1)rowClass(1)colspan(1)", [1, 1, 1], var_o, string4638, new GraceNum(2));
              var opresult4646 = callmethodChecked(var_t, "++(1)", [1], call4643);
              var_t = opresult4646;
              setLineNumber(988);    // compilenode identifier
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call4649 = callmethodChecked(this, "methodsSection", []);
              var call4650 = callmethodChecked(call4649, "addElement(1)withText(1)", [1, 1], var_n, var_t);
              setLineNumber(989);    // compilenode identifier
              return GraceFalse;
            };
            func4393.paramCounts = [1];
            obj2337.methods["visitMethod(1)"] = func4393;
            func4393.definitionLine = 941;
            func4393.definitionModule = "gracedoc";
            var func4651 = function(argcv) {    // method doClassMethod(_)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_m = arguments[curarg];
              curarg++;
              setModuleName("gracedoc");
              setLineNumber(993);    // compilenode member
              // call case 6: other requests
              // call case 6: other requests
              var call4654 = callmethodChecked(var_m, "body", []);
              var call4655 = callmethodChecked(call4654, "last", []);
              var var_o = call4655;
              var if4656 = GraceDone;
              setLineNumber(995);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call4659 = callmethodChecked(this, "isOnClassPage", []);
              var opresult4661 = callmethodChecked(call4659, "==(1)", [1], GraceFalse);
              if (Grace_isTrue(opresult4661)) {
                setLineNumber(996);    // compilenode string
                var string4662 = new GraceString("<tr class='placeholder'>");
                var var_t = string4662;
                setLineNumber(997);    // compilenode member
                // call case 6: other requests
                var call4664 = callmethodChecked(var_m, "nameString", []);
                var var_n = call4664;
                setLineNumber(998);    // compilenode string
                var string4665 = new GraceString("</span>");
                // call case 4: self request
                onSelf = true;
                var call4668 = callmethodChecked(this, "getClassLink(1)", [1], var_n);
                var string4670 = new GraceString("<td><code><span class='class-name'>");
                var opresult4672 = callmethodChecked(string4670, "++(1)", [1], call4668);
                var opresult4674 = callmethodChecked(opresult4672, "++(1)", [1], string4665);
                var opresult4677 = callmethodChecked(var_t, "++(1)", [1], opresult4674);
                var_t = opresult4677;
                setLineNumber(999);    // compilenode string
                var string4678 = new GraceString(".");
                var opresult4681 = callmethodChecked(var_t, "++(1)", [1], string4678);
                var_t = opresult4681;
                setLineNumber(1000);    // compilenode block
                var block4683 = new GraceBlock(this, 1000, 1);
                setLineNumber(1);    // compilenode identifier
                block4683.real = function(var_part) {
                  setLineNumber(1001);    // compilenode string
                  var string4684 = new GraceString("</span>");
                  // call case 6: other requests
                  var call4687 = callmethodChecked(var_part, "name", []);
                  var string4689 = new GraceString("<span class='method-name'>");
                  var opresult4691 = callmethodChecked(string4689, "++(1)", [1], call4687);
                  var opresult4693 = callmethodChecked(opresult4691, "++(1)", [1], string4684);
                  var opresult4696 = callmethodChecked(var_t, "++(1)", [1], opresult4693);
                  var_t = opresult4696;
                  var if4697 = GraceDone;
                  setLineNumber(1002);    // compilenode member
                  // call case 6: other requests
                  // call case 6: other requests
                  var call4701 = callmethodChecked(var_part, "params", []);
                  var call4702 = callmethodChecked(call4701, "size", []);
                  var opresult4704 = callmethodChecked(call4702, ">(1)", [1], new GraceNum(0));
                  if (Grace_isTrue(opresult4704)) {
                    setLineNumber(1003);    // compilenode string
                    var string4705 = new GraceString("(");
                    var opresult4708 = callmethodChecked(var_t, "++(1)", [1], string4705);
                    var_t = opresult4708;
                    setLineNumber(1004);    // compilenode member
                    // call case 6: other requests
                    var call4711 = callmethodChecked(var_part, "params", []);
                    var block4712 = new GraceBlock(this, 1004, 1);
                    setLineNumber(1);    // compilenode identifier
                    block4712.real = function(var_param) {
                      var if4713 = GraceDone;
                      setLineNumber(1005);    // compilenode member
                      // call case 6: other requests
                      var call4716 = callmethodChecked(var_param, "dtype", []);
                      var opresult4718 = callmethodChecked(call4716, "\u2260(1)", [1], GraceFalse);
                      if (Grace_isTrue(opresult4718)) {
                        setLineNumber(1006);    // compilenode string
                        var string4719 = new GraceString("</span>");
                        // call case 6: other requests
                        var call4722 = callmethodChecked(var_param, "value", []);
                        var string4724 = new GraceString("<span class='parameter-name'>");
                        var opresult4727 = callmethodChecked(var_t, "++(1)", [1], string4724);
                        var opresult4729 = callmethodChecked(opresult4727, "++(1)", [1], call4722);
                        var opresult4731 = callmethodChecked(opresult4729, "++(1)", [1], string4719);
                        var_t = opresult4731;
                        setLineNumber(1007);    // compilenode string
                        var string4732 = new GraceString("</span>");
                        // call case 6: other requests
                        // call case 6: other requests
                        var call4737 = callmethodChecked(var_param, "dtype", []);
                        var call4738 = callmethodChecked(call4737, "nameString", []);
                        // call case 4: self request
                        onSelf = true;
                        var call4739 = callmethodChecked(this, "getTypeLink(1)", [1], call4738);
                        var string4741 = new GraceString(":<span class='parameter-type'>");
                        var opresult4744 = callmethodChecked(var_t, "++(1)", [1], string4741);
                        var opresult4746 = callmethodChecked(opresult4744, "++(1)", [1], call4739);
                        var opresult4748 = callmethodChecked(opresult4746, "++(1)", [1], string4732);
                        var_t = opresult4748;
                        if4713 = GraceDone;
                      } else {
                        setLineNumber(1009);    // compilenode string
                        var string4749 = new GraceString("</span>");
                        // call case 6: other requests
                        var call4752 = callmethodChecked(var_param, "value", []);
                        var string4754 = new GraceString("<span class='parameter-name'>");
                        var opresult4757 = callmethodChecked(var_t, "++(1)", [1], string4754);
                        var opresult4759 = callmethodChecked(opresult4757, "++(1)", [1], call4752);
                        var opresult4761 = callmethodChecked(opresult4759, "++(1)", [1], string4749);
                        var_t = opresult4761;
                        if4713 = GraceDone;
                      }
                      var if4762 = GraceDone;
                      setLineNumber(1011);    // compilenode member
                      // call case 6: other requests
                      // call case 6: other requests
                      var call4765 = callmethodChecked(var_part, "params", []);
                      var call4766 = callmethodChecked(call4765, "last", []);
                      var opresult4769 = callmethodChecked(var_param, "\u2260(1)", [1], call4766);
                      // call case 6: other requests
                      // call case 6: other requests
                      var call4774 = callmethodChecked(var_part, "params", []);
                      var call4775 = callmethodChecked(call4774, "size", []);
                      var opresult4777 = callmethodChecked(call4775, ">(1)", [1], new GraceNum(1));
                      var opresult4779 = callmethodChecked(opresult4777, "&&(1)", [1], opresult4769);
                      if (Grace_isTrue(opresult4779)) {
                        setLineNumber(1012);    // compilenode string
                        var string4780 = new GraceString(", ");
                        var opresult4783 = callmethodChecked(var_t, "++(1)", [1], string4780);
                        var_t = opresult4783;
                        if4762 = GraceDone;
                      }
                      return if4762;
                    };
                    // call case 5: prelude request
                    var call4784 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call4711, block4712);
                    setLineNumber(1015);    // compilenode string
                    var string4785 = new GraceString(")");
                    var opresult4788 = callmethodChecked(var_t, "++(1)", [1], string4785);
                    var_t = opresult4788;
                    if4697 = GraceDone;
                  }
                  return if4697;
                };
                // call case 6: other requests
                setLineNumber(1000);    // compilenode member
                // call case 6: other requests
                var call4790 = callmethodChecked(var_m, "signature", []);
                var call4791 = callmethodChecked(call4790, "do(1)", [1], block4683);
                var if4792 = GraceDone;
                setLineNumber(1019);    // compilenode member
                // call case 6: other requests
                var call4795 = callmethodChecked(var_m, "dtype", []);
                var opresult4797 = callmethodChecked(call4795, "\u2260(1)", [1], GraceFalse);
                if (Grace_isTrue(opresult4797)) {
                  setLineNumber(1020);    // compilenode string
                  var string4798 = new GraceString(" -> ");
                  var opresult4801 = callmethodChecked(var_t, "++(1)", [1], string4798);
                  var_t = opresult4801;
                  var if4802 = GraceDone;
                  setLineNumber(1021);    // compilenode string
                  var string4803 = new GraceString("identifier");
                  // call case 6: other requests
                  // call case 6: other requests
                  var call4807 = callmethodChecked(var_m, "dtype", []);
                  var call4808 = callmethodChecked(call4807, "kind", []);
                  var opresult4810 = callmethodChecked(call4808, "==(1)", [1], string4803);
                  if (Grace_isTrue(opresult4810)) {
                    setLineNumber(1022);    // compilenode member
                    // call case 6: other requests
                    // call case 6: other requests
                    var call4814 = callmethodChecked(var_m, "dtype", []);
                    var call4815 = callmethodChecked(call4814, "value", []);
                    // call case 4: self request
                    onSelf = true;
                    var call4816 = callmethodChecked(this, "getTypeLink(1)", [1], call4815);
                    var opresult4819 = callmethodChecked(var_t, "++(1)", [1], call4816);
                    var_t = opresult4819;
                    if4802 = GraceDone;
                  } else {
                    var if4820 = GraceDone;
                    setLineNumber(1023);    // compilenode string
                    var string4821 = new GraceString("generic");
                    // call case 6: other requests
                    // call case 6: other requests
                    var call4825 = callmethodChecked(var_m, "dtype", []);
                    var call4826 = callmethodChecked(call4825, "kind", []);
                    var opresult4828 = callmethodChecked(call4826, "==(1)", [1], string4821);
                    if (Grace_isTrue(opresult4828)) {
                      setLineNumber(1024);    // compilenode string
                      var string4829 = new GraceString("&lt;");
                      // call case 6: other requests
                      // call case 6: other requests
                      // call case 6: other requests
                      var call4835 = callmethodChecked(var_m, "dtype", []);
                      var call4836 = callmethodChecked(call4835, "value", []);
                      var call4837 = callmethodChecked(call4836, "value", []);
                      // call case 4: self request
                      onSelf = true;
                      var call4838 = callmethodChecked(this, "getTypeLink(1)", [1], call4837);
                      var opresult4841 = callmethodChecked(var_t, "++(1)", [1], call4838);
                      var opresult4843 = callmethodChecked(opresult4841, "++(1)", [1], string4829);
                      var_t = opresult4843;
                      setLineNumber(1025);    // compilenode block
                      var block4845 = new GraceBlock(this, 1025, 1);
                      setLineNumber(1);    // compilenode identifier
                      block4845.real = function(var_each) {
                        setLineNumber(1025);    // compilenode string
                        var string4846 = new GraceString("");
                        // call case 6: other requests
                        var call4850 = callmethodChecked(var_each, "value", []);
                        // call case 4: self request
                        onSelf = true;
                        var call4851 = callmethodChecked(this, "getTypeLink(1)", [1], call4850);
                        var string4853 = new GraceString("");
                        var string4856 = new GraceString("");
                        var opresult4858 = callmethodChecked(string4856, "++(1)", [1], var_t);
                        var opresult4860 = callmethodChecked(opresult4858, "++(1)", [1], string4853);
                        var opresult4862 = callmethodChecked(opresult4860, "++(1)", [1], call4851);
                        var opresult4864 = callmethodChecked(opresult4862, "++(1)", [1], string4846);
                        var_t = opresult4864;
                        return GraceDone;
                      };
                      var block4865 = new GraceBlock(this, 1025, 0);
                      block4865.real = function() {
                        var string4866 = new GraceString(", ");
                        var opresult4869 = callmethodChecked(var_t, "++(1)", [1], string4866);
                        var_t = opresult4869;
                        return GraceDone;
                      };
                      // call case 6: other requests
                      // call case 6: other requests
                      // call case 6: other requests
                      var call4872 = callmethodChecked(var_m, "dtype", []);
                      var call4873 = callmethodChecked(call4872, "args", []);
                      var call4874 = callmethodChecked(call4873, "do(1)separatedBy(1)", [1, 1], block4845, block4865);
                      setLineNumber(1026);    // compilenode string
                      var string4875 = new GraceString("&gt;");
                      var opresult4878 = callmethodChecked(var_t, "++(1)", [1], string4875);
                      var_t = opresult4878;
                      if4820 = GraceDone;
                    }
                    if4802 = if4820;
                  }
                  if4792 = if4802;
                }
                setLineNumber(1029);    // compilenode string
                var string4879 = new GraceString("</code></td></tr>");
                var opresult4882 = callmethodChecked(var_t, "++(1)", [1], string4879);
                var_t = opresult4882;
                var if4883 = GraceDone;
                setLineNumber(1031);    // compilenode member
                // call case 6: other requests
                var call4886 = callmethodChecked(var_o, "superclass", []);
                var opresult4888 = callmethodChecked(call4886, "\u2260(1)", [1], GraceFalse);
                if (Grace_isTrue(opresult4888)) {
                  setLineNumber(1032);    // compilenode identifier
                  // call case 6: other requests
                  // call case 6: other requests
                  var call4891 = callmethodChecked(var_o, "superclass", []);
                  var call4892 = callmethodChecked(call4891, "accept(1)", [1], this);
                  if4883 = call4892;
                }
                setLineNumber(1035);    // compilenode member
                // call case 4: self request
                onSelf = true;
                var call4895 = callmethodChecked(this, "outdir", []);
                var string4896 = new GraceString("class");
                // call case 6: other requests
                var call4897 = callmethodChecked(var_graceDocVisitor, "createFrom(1)outTo(1)as(1)", [1, 1, 1], var_n, call4895, string4896);
                var var_classVis = call4897;
                setLineNumber(1036);    // compilenode identifier
                // call case 6: other requests
                var call4899 = callmethodChecked(var_o, "accept(1)", [1], var_classVis);
                setLineNumber(1037);    // compilenode member
                // call case 6: other requests
                var call4901 = callmethodChecked(var_classVis, "generate", []);
                setLineNumber(1038);    // compilenode string
                var string4903 = new GraceString("top-box-description");
                // call case 6: other requests
                // call case 6: other requests
                // call case 3: self.outer request
                var call4906 = callmethodChecked(superDepth, "outer", [0]);
                var call4907 = callmethodChecked(call4906, "outer", []);
                onSelf = true;
                var call4908 = callmethodChecked(call4907, "formatComments(1)rowClass(1)colspan(1)", [1, 1, 1], var_o, string4903, new GraceNum(1));
                var opresult4911 = callmethodChecked(var_t, "++(1)", [1], call4908);
                var_t = opresult4911;
                setLineNumber(1039);    // compilenode identifier
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call4914 = callmethodChecked(this, "classesSection", []);
                var call4915 = callmethodChecked(call4914, "addElement(1)withText(1)", [1, 1], var_n, var_t);
                setLineNumber(1040);    // compilenode identifier
                return GraceFalse;
              } else {
                setLineNumber(1042);    // compilenode string
                var string4916 = new GraceString("</b>.");
                // call case 6: other requests
                var call4919 = callmethodChecked(var_o, "name", []);
                var string4921 = new GraceString("<span class='headline'><code><b>");
                var opresult4923 = callmethodChecked(string4921, "++(1)", [1], call4919);
                var opresult4925 = callmethodChecked(opresult4923, "++(1)", [1], string4916);
                var var_t = opresult4925;
                setLineNumber(1044);    // compilenode member
                // call case 6: other requests
                var call4928 = callmethodChecked(var_m, "signature", []);
                var block4929 = new GraceBlock(this, 1044, 1);
                setLineNumber(1);    // compilenode identifier
                block4929.real = function(var_part) {
                  setLineNumber(1045);    // compilenode string
                  var string4930 = new GraceString("</b>");
                  // call case 6: other requests
                  var call4933 = callmethodChecked(var_part, "name", []);
                  var string4935 = new GraceString("<b>");
                  var opresult4937 = callmethodChecked(string4935, "++(1)", [1], call4933);
                  var opresult4939 = callmethodChecked(opresult4937, "++(1)", [1], string4930);
                  var opresult4942 = callmethodChecked(var_t, "++(1)", [1], opresult4939);
                  var_t = opresult4942;
                  var if4943 = GraceDone;
                  setLineNumber(1046);    // compilenode member
                  // call case 6: other requests
                  // call case 6: other requests
                  var call4947 = callmethodChecked(var_part, "params", []);
                  var call4948 = callmethodChecked(call4947, "size", []);
                  var opresult4950 = callmethodChecked(call4948, ">(1)", [1], new GraceNum(0));
                  if (Grace_isTrue(opresult4950)) {
                    setLineNumber(1047);    // compilenode string
                    var string4951 = new GraceString("(");
                    var opresult4954 = callmethodChecked(var_t, "++(1)", [1], string4951);
                    var_t = opresult4954;
                    setLineNumber(1048);    // compilenode member
                    // call case 6: other requests
                    var call4957 = callmethodChecked(var_part, "params", []);
                    var block4958 = new GraceBlock(this, 1048, 1);
                    setLineNumber(1);    // compilenode identifier
                    block4958.real = function(var_param) {
                      var if4959 = GraceDone;
                      setLineNumber(1049);    // compilenode member
                      // call case 6: other requests
                      var call4962 = callmethodChecked(var_param, "dtype", []);
                      var opresult4964 = callmethodChecked(call4962, "\u2260(1)", [1], GraceFalse);
                      if (Grace_isTrue(opresult4964)) {
                        setLineNumber(1050);    // compilenode member
                        // call case 6: other requests
                        var call4966 = callmethodChecked(var_param, "value", []);
                        var opresult4969 = callmethodChecked(var_t, "++(1)", [1], call4966);
                        var_t = opresult4969;
                        setLineNumber(1051);    // compilenode member
                        // call case 6: other requests
                        // call case 6: other requests
                        var call4973 = callmethodChecked(var_param, "dtype", []);
                        var call4974 = callmethodChecked(call4973, "value", []);
                        // call case 4: self request
                        onSelf = true;
                        var call4975 = callmethodChecked(this, "getTypeLink(1)", [1], call4974);
                        var string4977 = new GraceString(":");
                        var opresult4980 = callmethodChecked(var_t, "++(1)", [1], string4977);
                        var opresult4982 = callmethodChecked(opresult4980, "++(1)", [1], call4975);
                        var_t = opresult4982;
                        if4959 = GraceDone;
                      } else {
                        setLineNumber(1053);    // compilenode member
                        // call case 6: other requests
                        var call4984 = callmethodChecked(var_param, "value", []);
                        var opresult4987 = callmethodChecked(var_t, "++(1)", [1], call4984);
                        var_t = opresult4987;
                        if4959 = GraceDone;
                      }
                      var if4988 = GraceDone;
                      setLineNumber(1055);    // compilenode member
                      // call case 6: other requests
                      // call case 6: other requests
                      var call4992 = callmethodChecked(var_part, "params", []);
                      var call4993 = callmethodChecked(call4992, "size", []);
                      // call case 6: other requests
                      // call case 6: other requests
                      var call4995 = callmethodChecked(var_part, "params", []);
                      var call4996 = callmethodChecked(call4995, "at(1)", [1], call4993);
                      var opresult4999 = callmethodChecked(var_param, "\u2260(1)", [1], call4996);
                      // call case 6: other requests
                      // call case 6: other requests
                      var call5004 = callmethodChecked(var_part, "params", []);
                      var call5005 = callmethodChecked(call5004, "size", []);
                      var opresult5007 = callmethodChecked(call5005, ">(1)", [1], new GraceNum(1));
                      var opresult5009 = callmethodChecked(opresult5007, "&&(1)", [1], opresult4999);
                      if (Grace_isTrue(opresult5009)) {
                        setLineNumber(1056);    // compilenode string
                        var string5010 = new GraceString(", ");
                        var opresult5013 = callmethodChecked(var_t, "++(1)", [1], string5010);
                        var_t = opresult5013;
                        if4988 = GraceDone;
                      }
                      return if4988;
                    };
                    // call case 5: prelude request
                    var call5014 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call4957, block4958);
                    setLineNumber(1059);    // compilenode string
                    var string5015 = new GraceString(")");
                    var opresult5018 = callmethodChecked(var_t, "++(1)", [1], string5015);
                    var_t = opresult5018;
                    if4943 = GraceDone;
                  }
                  return if4943;
                };
                // call case 5: prelude request
                var call5019 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call4928, block4929);
                var if5020 = GraceDone;
                setLineNumber(1063);    // compilenode member
                // call case 6: other requests
                var call5023 = callmethodChecked(var_m, "dtype", []);
                var opresult5025 = callmethodChecked(call5023, "\u2260(1)", [1], GraceFalse);
                if (Grace_isTrue(opresult5025)) {
                  setLineNumber(1064);    // compilenode string
                  var string5026 = new GraceString(" -> ");
                  var opresult5029 = callmethodChecked(var_t, "++(1)", [1], string5026);
                  var_t = opresult5029;
                  var if5030 = GraceDone;
                  setLineNumber(1065);    // compilenode string
                  var string5031 = new GraceString("identifier");
                  // call case 6: other requests
                  // call case 6: other requests
                  var call5035 = callmethodChecked(var_m, "dtype", []);
                  var call5036 = callmethodChecked(call5035, "kind", []);
                  var opresult5038 = callmethodChecked(call5036, "==(1)", [1], string5031);
                  if (Grace_isTrue(opresult5038)) {
                    setLineNumber(1066);    // compilenode member
                    // call case 6: other requests
                    // call case 6: other requests
                    var call5042 = callmethodChecked(var_m, "dtype", []);
                    var call5043 = callmethodChecked(call5042, "value", []);
                    // call case 4: self request
                    onSelf = true;
                    var call5044 = callmethodChecked(this, "getTypeLink(1)", [1], call5043);
                    var opresult5047 = callmethodChecked(var_t, "++(1)", [1], call5044);
                    var_t = opresult5047;
                    if5030 = GraceDone;
                  } else {
                    var if5048 = GraceDone;
                    setLineNumber(1067);    // compilenode string
                    var string5049 = new GraceString("generic");
                    // call case 6: other requests
                    // call case 6: other requests
                    var call5053 = callmethodChecked(var_m, "dtype", []);
                    var call5054 = callmethodChecked(call5053, "kind", []);
                    var opresult5056 = callmethodChecked(call5054, "==(1)", [1], string5049);
                    if (Grace_isTrue(opresult5056)) {
                      setLineNumber(1068);    // compilenode string
                      var string5057 = new GraceString("&lt;");
                      // call case 6: other requests
                      // call case 6: other requests
                      // call case 6: other requests
                      var call5063 = callmethodChecked(var_m, "dtype", []);
                      var call5064 = callmethodChecked(call5063, "value", []);
                      var call5065 = callmethodChecked(call5064, "value", []);
                      // call case 4: self request
                      onSelf = true;
                      var call5066 = callmethodChecked(this, "getTypeLink(1)", [1], call5065);
                      var opresult5069 = callmethodChecked(var_t, "++(1)", [1], call5066);
                      var opresult5071 = callmethodChecked(opresult5069, "++(1)", [1], string5057);
                      var_t = opresult5071;
                      setLineNumber(1069);    // compilenode block
                      var block5073 = new GraceBlock(this, 1069, 1);
                      setLineNumber(1);    // compilenode identifier
                      block5073.real = function(var_each) {
                        setLineNumber(1069);    // compilenode string
                        var string5074 = new GraceString("");
                        // call case 6: other requests
                        var call5078 = callmethodChecked(var_each, "value", []);
                        // call case 4: self request
                        onSelf = true;
                        var call5079 = callmethodChecked(this, "getTypeLink(1)", [1], call5078);
                        var string5081 = new GraceString("");
                        var string5084 = new GraceString("");
                        var opresult5086 = callmethodChecked(string5084, "++(1)", [1], var_t);
                        var opresult5088 = callmethodChecked(opresult5086, "++(1)", [1], string5081);
                        var opresult5090 = callmethodChecked(opresult5088, "++(1)", [1], call5079);
                        var opresult5092 = callmethodChecked(opresult5090, "++(1)", [1], string5074);
                        var_t = opresult5092;
                        return GraceDone;
                      };
                      var block5093 = new GraceBlock(this, 1069, 0);
                      block5093.real = function() {
                        var string5094 = new GraceString(", ");
                        var opresult5097 = callmethodChecked(var_t, "++(1)", [1], string5094);
                        var_t = opresult5097;
                        return GraceDone;
                      };
                      // call case 6: other requests
                      // call case 6: other requests
                      // call case 6: other requests
                      var call5100 = callmethodChecked(var_m, "dtype", []);
                      var call5101 = callmethodChecked(call5100, "args", []);
                      var call5102 = callmethodChecked(call5101, "do(1)separatedBy(1)", [1, 1], block5073, block5093);
                      setLineNumber(1070);    // compilenode string
                      var string5103 = new GraceString("&gt;");
                      var opresult5106 = callmethodChecked(var_t, "++(1)", [1], string5103);
                      var_t = opresult5106;
                      if5048 = GraceDone;
                    }
                    if5030 = if5048;
                  }
                  if5020 = if5030;
                }
                setLineNumber(1074);    // compilenode string
                var string5107 = new GraceString("</code></span><hr />");
                var opresult5110 = callmethodChecked(var_t, "++(1)", [1], string5107);
                var_t = opresult5110;
                setLineNumber(1075);    // compilenode string
                var string5112 = new GraceString("top-box-description");
                // call case 6: other requests
                // call case 6: other requests
                // call case 3: self.outer request
                var call5115 = callmethodChecked(superDepth, "outer", [0]);
                var call5116 = callmethodChecked(call5115, "outer", []);
                onSelf = true;
                var call5117 = callmethodChecked(call5116, "formatComments(1)rowClass(1)colspan(1)", [1, 1, 1], var_o, string5112, new GraceNum(1));
                var opresult5120 = callmethodChecked(var_t, "++(1)", [1], call5117);
                var_t = opresult5120;
                setLineNumber(1076);    // compilenode identifier
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call5123 = callmethodChecked(this, "topDescSection", []);
                var call5124 = callmethodChecked(call5123, "insert(1)", [1], var_t);
                setLineNumber(1077);    // compilenode identifier
                return GraceTrue;
              }
              setLineNumber(995);    // return value
              if (!Grace_isTrue(callmethod(var_Boolean, "match(1)", [1], if4656)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("result of method doClassMethod(_) does not have " + 
                          callmethod(var_Boolean, "asString", [0])._value + "."));
              return if4656;
            };
            func4651.paramCounts = [1];
            obj2337.methods["doClassMethod(1)"] = func4651;
            func4651.definitionLine = 992;
            func4651.definitionModule = "gracedoc";
            var func5125 = function(argcv) {    // method visitDefDec(_)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_o = arguments[curarg];
              curarg++;
              setModuleName("gracedoc");
              var if5126 = GraceDone;
              setLineNumber(1082);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call5129 = callmethodChecked(this, "isOnClassPage", []);
              var opresult5131 = callmethodChecked(call5129, "==(1)", [1], GraceTrue);
              if (Grace_isTrue(opresult5131)) {
                var if5132 = GraceDone;
                setLineNumber(1083);    // compilenode call
                // call case 6: other requests
                // call case 6: other requests
                var call5135 = callmethodChecked(var_settings, "publicOnly", []);
                var call5136 = callmethodChecked(call5135, "prefix!", [0]);
                if (Grace_isTrue(call5136)) {
                  setLineNumber(1084);    // compilenode member
                  // call case 6: other requests
                  // call case 6: other requests
                  var call5139 = callmethodChecked(var_o, "name", []);
                  var call5140 = callmethodChecked(call5139, "value", []);
                  var var_n = call5140;
                  setLineNumber(1085);    // compilenode string
                  var string5141 = new GraceString("");
                  // call case 6: other requests
                  // call case 6: other requests
                  var call5145 = callmethodChecked(var_o, "name", []);
                  var call5146 = callmethodChecked(call5145, "value", []);
                  var string5148 = new GraceString("<tr class='placeholder'><td><code>def</code></td><td class='identifier-name'>");
                  var opresult5150 = callmethodChecked(string5148, "++(1)", [1], call5146);
                  var opresult5152 = callmethodChecked(opresult5150, "++(1)", [1], string5141);
                  var var_t = opresult5152;
                  setLineNumber(1086);    // compilenode string
                  var string5153 = new GraceString("</td><td><code>");
                  var opresult5156 = callmethodChecked(var_t, "++(1)", [1], string5153);
                  var_t = opresult5156;
                  var if5157 = GraceDone;
                  setLineNumber(1087);    // compilenode member
                  // call case 6: other requests
                  var call5160 = callmethodChecked(var_o, "dtype", []);
                  var opresult5162 = callmethodChecked(call5160, "\u2260(1)", [1], GraceFalse);
                  if (Grace_isTrue(opresult5162)) {
                    var if5163 = GraceDone;
                    setLineNumber(1088);    // compilenode string
                    var string5164 = new GraceString("identifier");
                    // call case 6: other requests
                    // call case 6: other requests
                    var call5168 = callmethodChecked(var_o, "dtype", []);
                    var call5169 = callmethodChecked(call5168, "kind", []);
                    var opresult5171 = callmethodChecked(call5169, "==(1)", [1], string5164);
                    if (Grace_isTrue(opresult5171)) {
                      setLineNumber(1089);    // compilenode member
                      // call case 6: other requests
                      // call case 6: other requests
                      var call5175 = callmethodChecked(var_o, "dtype", []);
                      var call5176 = callmethodChecked(call5175, "value", []);
                      // call case 4: self request
                      onSelf = true;
                      var call5177 = callmethodChecked(this, "getTypeLink(1)", [1], call5176);
                      var opresult5180 = callmethodChecked(var_t, "++(1)", [1], call5177);
                      var_t = opresult5180;
                      if5163 = GraceDone;
                    } else {
                      var if5181 = GraceDone;
                      setLineNumber(1090);    // compilenode string
                      var string5182 = new GraceString("generic");
                      // call case 6: other requests
                      // call case 6: other requests
                      var call5186 = callmethodChecked(var_o, "dtype", []);
                      var call5187 = callmethodChecked(call5186, "kind", []);
                      var opresult5189 = callmethodChecked(call5187, "==(1)", [1], string5182);
                      if (Grace_isTrue(opresult5189)) {
                        setLineNumber(1091);    // compilenode string
                        var string5190 = new GraceString("&lt;");
                        // call case 6: other requests
                        // call case 6: other requests
                        // call case 6: other requests
                        var call5196 = callmethodChecked(var_o, "dtype", []);
                        var call5197 = callmethodChecked(call5196, "value", []);
                        var call5198 = callmethodChecked(call5197, "value", []);
                        // call case 4: self request
                        onSelf = true;
                        var call5199 = callmethodChecked(this, "getTypeLink(1)", [1], call5198);
                        var opresult5202 = callmethodChecked(var_t, "++(1)", [1], call5199);
                        var opresult5204 = callmethodChecked(opresult5202, "++(1)", [1], string5190);
                        var_t = opresult5204;
                        setLineNumber(1092);    // compilenode block
                        var block5206 = new GraceBlock(this, 1092, 1);
                        setLineNumber(1);    // compilenode identifier
                        block5206.real = function(var_each) {
                          setLineNumber(1092);    // compilenode string
                          var string5207 = new GraceString("");
                          // call case 6: other requests
                          var call5211 = callmethodChecked(var_each, "value", []);
                          // call case 4: self request
                          onSelf = true;
                          var call5212 = callmethodChecked(this, "getTypeLink(1)", [1], call5211);
                          var string5214 = new GraceString("");
                          var string5217 = new GraceString("");
                          var opresult5219 = callmethodChecked(string5217, "++(1)", [1], var_t);
                          var opresult5221 = callmethodChecked(opresult5219, "++(1)", [1], string5214);
                          var opresult5223 = callmethodChecked(opresult5221, "++(1)", [1], call5212);
                          var opresult5225 = callmethodChecked(opresult5223, "++(1)", [1], string5207);
                          var_t = opresult5225;
                          return GraceDone;
                        };
                        var block5226 = new GraceBlock(this, 1092, 0);
                        block5226.real = function() {
                          var string5227 = new GraceString(", ");
                          var opresult5230 = callmethodChecked(var_t, "++(1)", [1], string5227);
                          var_t = opresult5230;
                          return GraceDone;
                        };
                        // call case 6: other requests
                        // call case 6: other requests
                        // call case 6: other requests
                        var call5233 = callmethodChecked(var_o, "dtype", []);
                        var call5234 = callmethodChecked(call5233, "args", []);
                        var call5235 = callmethodChecked(call5234, "do(1)separatedBy(1)", [1, 1], block5206, block5226);
                        setLineNumber(1093);    // compilenode string
                        var string5236 = new GraceString("&gt;");
                        var opresult5239 = callmethodChecked(var_t, "++(1)", [1], string5236);
                        var_t = opresult5239;
                        if5181 = GraceDone;
                      }
                      if5163 = if5181;
                    }
                    if5157 = if5163;
                  }
                  setLineNumber(1096);    // compilenode string
                  var string5240 = new GraceString("</code></td></tr>");
                  var opresult5243 = callmethodChecked(var_t, "++(1)", [1], string5240);
                  var_t = opresult5243;
                  setLineNumber(1097);    // compilenode string
                  var string5245 = new GraceString("description");
                  // call case 6: other requests
                  // call case 6: other requests
                  // call case 3: self.outer request
                  var call5248 = callmethodChecked(superDepth, "outer", [0]);
                  var call5249 = callmethodChecked(call5248, "outer", []);
                  onSelf = true;
                  var call5250 = callmethodChecked(call5249, "formatComments(1)rowClass(1)colspan(1)", [1, 1, 1], var_o, string5245, new GraceNum(3));
                  var opresult5253 = callmethodChecked(var_t, "++(1)", [1], call5250);
                  var_t = opresult5253;
                  setLineNumber(1098);    // compilenode identifier
                  // call case 6: other requests
                  // call case 4: self request
                  onSelf = true;
                  var call5256 = callmethodChecked(this, "fieldsSection", []);
                  var call5257 = callmethodChecked(call5256, "addElement(1)withText(1)", [1, 1], var_n, var_t);
                  if5132 = call5257;
                } else {
                  var if5258 = GraceDone;
                  setLineNumber(1102);    // compilenode member
                  // call case 6: other requests
                  var call5260 = callmethodChecked(var_o, "isReadable", []);
                  if (Grace_isTrue(call5260)) {
                    setLineNumber(1104);    // compilenode member
                    // call case 6: other requests
                    // call case 6: other requests
                    var call5263 = callmethodChecked(var_o, "name", []);
                    var call5264 = callmethodChecked(call5263, "value", []);
                    var var_n = call5264;
                    setLineNumber(1105);    // compilenode string
                    var string5265 = new GraceString("");
                    // call case 6: other requests
                    // call case 6: other requests
                    var call5269 = callmethodChecked(var_o, "name", []);
                    var call5270 = callmethodChecked(call5269, "value", []);
                    var string5272 = new GraceString("<tr class='placeholder'><td class='identifier-name'>");
                    var opresult5274 = callmethodChecked(string5272, "++(1)", [1], call5270);
                    var opresult5276 = callmethodChecked(opresult5274, "++(1)", [1], string5265);
                    var var_t = opresult5276;
                    setLineNumber(1106);    // compilenode string
                    var string5277 = new GraceString("</td><td><code>");
                    var opresult5280 = callmethodChecked(var_t, "++(1)", [1], string5277);
                    var_t = opresult5280;
                    var if5281 = GraceDone;
                    setLineNumber(1107);    // compilenode member
                    // call case 6: other requests
                    var call5284 = callmethodChecked(var_o, "dtype", []);
                    var opresult5286 = callmethodChecked(call5284, "\u2260(1)", [1], GraceFalse);
                    if (Grace_isTrue(opresult5286)) {
                      var if5287 = GraceDone;
                      setLineNumber(1108);    // compilenode string
                      var string5288 = new GraceString("identifier");
                      // call case 6: other requests
                      // call case 6: other requests
                      var call5292 = callmethodChecked(var_o, "dtype", []);
                      var call5293 = callmethodChecked(call5292, "kind", []);
                      var opresult5295 = callmethodChecked(call5293, "==(1)", [1], string5288);
                      if (Grace_isTrue(opresult5295)) {
                        setLineNumber(1109);    // compilenode member
                        // call case 6: other requests
                        // call case 6: other requests
                        var call5299 = callmethodChecked(var_o, "dtype", []);
                        var call5300 = callmethodChecked(call5299, "value", []);
                        // call case 4: self request
                        onSelf = true;
                        var call5301 = callmethodChecked(this, "getTypeLink(1)", [1], call5300);
                        var opresult5304 = callmethodChecked(var_t, "++(1)", [1], call5301);
                        var_t = opresult5304;
                        if5287 = GraceDone;
                      } else {
                        var if5305 = GraceDone;
                        setLineNumber(1110);    // compilenode string
                        var string5306 = new GraceString("generic");
                        // call case 6: other requests
                        // call case 6: other requests
                        var call5310 = callmethodChecked(var_o, "dtype", []);
                        var call5311 = callmethodChecked(call5310, "kind", []);
                        var opresult5313 = callmethodChecked(call5311, "==(1)", [1], string5306);
                        if (Grace_isTrue(opresult5313)) {
                          setLineNumber(1111);    // compilenode string
                          var string5314 = new GraceString("&lt;");
                          // call case 6: other requests
                          // call case 6: other requests
                          // call case 6: other requests
                          var call5320 = callmethodChecked(var_o, "dtype", []);
                          var call5321 = callmethodChecked(call5320, "value", []);
                          var call5322 = callmethodChecked(call5321, "value", []);
                          // call case 4: self request
                          onSelf = true;
                          var call5323 = callmethodChecked(this, "getTypeLink(1)", [1], call5322);
                          var opresult5326 = callmethodChecked(var_t, "++(1)", [1], call5323);
                          var opresult5328 = callmethodChecked(opresult5326, "++(1)", [1], string5314);
                          var_t = opresult5328;
                          setLineNumber(1112);    // compilenode block
                          var block5330 = new GraceBlock(this, 1112, 1);
                          setLineNumber(1);    // compilenode identifier
                          block5330.real = function(var_each) {
                            setLineNumber(1112);    // compilenode string
                            var string5331 = new GraceString("");
                            // call case 6: other requests
                            var call5335 = callmethodChecked(var_each, "value", []);
                            // call case 4: self request
                            onSelf = true;
                            var call5336 = callmethodChecked(this, "getTypeLink(1)", [1], call5335);
                            var string5338 = new GraceString("");
                            var string5341 = new GraceString("");
                            var opresult5343 = callmethodChecked(string5341, "++(1)", [1], var_t);
                            var opresult5345 = callmethodChecked(opresult5343, "++(1)", [1], string5338);
                            var opresult5347 = callmethodChecked(opresult5345, "++(1)", [1], call5336);
                            var opresult5349 = callmethodChecked(opresult5347, "++(1)", [1], string5331);
                            var_t = opresult5349;
                            return GraceDone;
                          };
                          var block5350 = new GraceBlock(this, 1112, 0);
                          block5350.real = function() {
                            var string5351 = new GraceString(", ");
                            var opresult5354 = callmethodChecked(var_t, "++(1)", [1], string5351);
                            var_t = opresult5354;
                            return GraceDone;
                          };
                          // call case 6: other requests
                          // call case 6: other requests
                          // call case 6: other requests
                          var call5357 = callmethodChecked(var_o, "dtype", []);
                          var call5358 = callmethodChecked(call5357, "args", []);
                          var call5359 = callmethodChecked(call5358, "do(1)separatedBy(1)", [1, 1], block5330, block5350);
                          setLineNumber(1113);    // compilenode string
                          var string5360 = new GraceString("&gt;");
                          var opresult5363 = callmethodChecked(var_t, "++(1)", [1], string5360);
                          var_t = opresult5363;
                          if5305 = GraceDone;
                        }
                        if5287 = if5305;
                      }
                      if5281 = if5287;
                    }
                    setLineNumber(1116);    // compilenode string
                    var string5364 = new GraceString("</code></td></tr>");
                    var opresult5367 = callmethodChecked(var_t, "++(1)", [1], string5364);
                    var_t = opresult5367;
                    setLineNumber(1117);    // compilenode string
                    var string5369 = new GraceString("description");
                    // call case 6: other requests
                    // call case 6: other requests
                    // call case 3: self.outer request
                    var call5372 = callmethodChecked(superDepth, "outer", [0]);
                    var call5373 = callmethodChecked(call5372, "outer", []);
                    onSelf = true;
                    var call5374 = callmethodChecked(call5373, "formatComments(1)rowClass(1)colspan(1)", [1, 1, 1], var_o, string5369, new GraceNum(2));
                    var opresult5377 = callmethodChecked(var_t, "++(1)", [1], call5374);
                    var_t = opresult5377;
                    setLineNumber(1118);    // compilenode identifier
                    // call case 6: other requests
                    // call case 4: self request
                    onSelf = true;
                    var call5380 = callmethodChecked(this, "methodsSection", []);
                    var call5381 = callmethodChecked(call5380, "addElement(1)withText(1)", [1, 1], var_n, var_t);
                    if5258 = call5381;
                  }
                  if5132 = if5258;
                }
                setLineNumber(1121);    // compilenode identifier
                return GraceFalse;
              } else {
                var if5382 = GraceDone;
                setLineNumber(1123);    // compilenode call
                // call case 6: other requests
                // call case 6: other requests
                var call5385 = callmethodChecked(var_settings, "publicOnly", []);
                var call5386 = callmethodChecked(call5385, "prefix!", [0]);
                if (Grace_isTrue(call5386)) {
                  setLineNumber(1124);    // compilenode member
                  // call case 6: other requests
                  // call case 6: other requests
                  var call5389 = callmethodChecked(var_o, "name", []);
                  var call5390 = callmethodChecked(call5389, "value", []);
                  var var_n = call5390;
                  setLineNumber(1125);    // compilenode string
                  var string5391 = new GraceString("");
                  // call case 6: other requests
                  // call case 6: other requests
                  var call5395 = callmethodChecked(var_o, "name", []);
                  var call5396 = callmethodChecked(call5395, "value", []);
                  var string5398 = new GraceString("<tr class='placeholder'><td><code>def</code></td><td class='identifier-name'>");
                  var opresult5400 = callmethodChecked(string5398, "++(1)", [1], call5396);
                  var opresult5402 = callmethodChecked(opresult5400, "++(1)", [1], string5391);
                  var var_t = opresult5402;
                  setLineNumber(1126);    // compilenode string
                  var string5403 = new GraceString("</td><td><code>");
                  var opresult5406 = callmethodChecked(var_t, "++(1)", [1], string5403);
                  var_t = opresult5406;
                  var if5407 = GraceDone;
                  setLineNumber(1127);    // compilenode member
                  // call case 6: other requests
                  var call5410 = callmethodChecked(var_o, "dtype", []);
                  var opresult5412 = callmethodChecked(call5410, "\u2260(1)", [1], GraceFalse);
                  if (Grace_isTrue(opresult5412)) {
                    var if5413 = GraceDone;
                    setLineNumber(1128);    // compilenode string
                    var string5414 = new GraceString("identifier");
                    // call case 6: other requests
                    // call case 6: other requests
                    var call5418 = callmethodChecked(var_o, "dtype", []);
                    var call5419 = callmethodChecked(call5418, "kind", []);
                    var opresult5421 = callmethodChecked(call5419, "==(1)", [1], string5414);
                    if (Grace_isTrue(opresult5421)) {
                      setLineNumber(1129);    // compilenode member
                      // call case 6: other requests
                      // call case 6: other requests
                      var call5425 = callmethodChecked(var_o, "dtype", []);
                      var call5426 = callmethodChecked(call5425, "value", []);
                      // call case 4: self request
                      onSelf = true;
                      var call5427 = callmethodChecked(this, "getTypeLink(1)", [1], call5426);
                      var opresult5430 = callmethodChecked(var_t, "++(1)", [1], call5427);
                      var_t = opresult5430;
                      if5413 = GraceDone;
                    } else {
                      var if5431 = GraceDone;
                      setLineNumber(1130);    // compilenode string
                      var string5432 = new GraceString("generic");
                      // call case 6: other requests
                      // call case 6: other requests
                      var call5436 = callmethodChecked(var_o, "dtype", []);
                      var call5437 = callmethodChecked(call5436, "kind", []);
                      var opresult5439 = callmethodChecked(call5437, "==(1)", [1], string5432);
                      if (Grace_isTrue(opresult5439)) {
                        setLineNumber(1131);    // compilenode string
                        var string5440 = new GraceString("&lt;");
                        // call case 6: other requests
                        // call case 6: other requests
                        // call case 6: other requests
                        var call5446 = callmethodChecked(var_o, "dtype", []);
                        var call5447 = callmethodChecked(call5446, "value", []);
                        var call5448 = callmethodChecked(call5447, "value", []);
                        // call case 4: self request
                        onSelf = true;
                        var call5449 = callmethodChecked(this, "getTypeLink(1)", [1], call5448);
                        var opresult5452 = callmethodChecked(var_t, "++(1)", [1], call5449);
                        var opresult5454 = callmethodChecked(opresult5452, "++(1)", [1], string5440);
                        var_t = opresult5454;
                        setLineNumber(1132);    // compilenode block
                        var block5456 = new GraceBlock(this, 1132, 1);
                        setLineNumber(1);    // compilenode identifier
                        block5456.real = function(var_each) {
                          setLineNumber(1132);    // compilenode string
                          var string5457 = new GraceString("");
                          // call case 6: other requests
                          var call5460 = callmethodChecked(var_each, "value", []);
                          var string5462 = new GraceString("");
                          var string5465 = new GraceString("");
                          var opresult5467 = callmethodChecked(string5465, "++(1)", [1], var_t);
                          var opresult5469 = callmethodChecked(opresult5467, "++(1)", [1], string5462);
                          var opresult5471 = callmethodChecked(opresult5469, "++(1)", [1], call5460);
                          var opresult5473 = callmethodChecked(opresult5471, "++(1)", [1], string5457);
                          var_t = opresult5473;
                          return GraceDone;
                        };
                        var block5474 = new GraceBlock(this, 1132, 0);
                        block5474.real = function() {
                          var string5475 = new GraceString(", ");
                          var opresult5478 = callmethodChecked(var_t, "++(1)", [1], string5475);
                          var_t = opresult5478;
                          return GraceDone;
                        };
                        // call case 6: other requests
                        // call case 6: other requests
                        // call case 6: other requests
                        var call5481 = callmethodChecked(var_o, "dtype", []);
                        var call5482 = callmethodChecked(call5481, "args", []);
                        var call5483 = callmethodChecked(call5482, "do(1)separatedBy(1)", [1, 1], block5456, block5474);
                        setLineNumber(1133);    // compilenode string
                        var string5484 = new GraceString("&gt;");
                        var opresult5487 = callmethodChecked(var_t, "++(1)", [1], string5484);
                        var_t = opresult5487;
                        if5431 = GraceDone;
                      }
                      if5413 = if5431;
                    }
                    if5407 = if5413;
                  }
                  setLineNumber(1136);    // compilenode string
                  var string5488 = new GraceString("</code></td></tr>");
                  var opresult5491 = callmethodChecked(var_t, "++(1)", [1], string5488);
                  var_t = opresult5491;
                  setLineNumber(1137);    // compilenode string
                  var string5493 = new GraceString("description");
                  // call case 6: other requests
                  // call case 6: other requests
                  // call case 3: self.outer request
                  var call5496 = callmethodChecked(superDepth, "outer", [0]);
                  var call5497 = callmethodChecked(call5496, "outer", []);
                  onSelf = true;
                  var call5498 = callmethodChecked(call5497, "formatComments(1)rowClass(1)colspan(1)", [1, 1, 1], var_o, string5493, new GraceNum(3));
                  var opresult5501 = callmethodChecked(var_t, "++(1)", [1], call5498);
                  var_t = opresult5501;
                  setLineNumber(1138);    // compilenode identifier
                  // call case 6: other requests
                  // call case 4: self request
                  onSelf = true;
                  var call5504 = callmethodChecked(this, "fieldsSection", []);
                  var call5505 = callmethodChecked(call5504, "addElement(1)withText(1)", [1, 1], var_n, var_t);
                  if5382 = call5505;
                } else {
                  var if5506 = GraceDone;
                  setLineNumber(1142);    // compilenode member
                  // call case 6: other requests
                  var call5508 = callmethodChecked(var_o, "isReadable", []);
                  if (Grace_isTrue(call5508)) {
                    setLineNumber(1143);    // compilenode string
                    var string5509 = new GraceString("");
                    // call case 6: other requests
                    // call case 6: other requests
                    var call5513 = callmethodChecked(var_o, "name", []);
                    var call5514 = callmethodChecked(call5513, "value", []);
                    var string5516 = new GraceString("<tr class='placeholder'><td class='identifier-name'>");
                    var opresult5518 = callmethodChecked(string5516, "++(1)", [1], call5514);
                    var opresult5520 = callmethodChecked(opresult5518, "++(1)", [1], string5509);
                    var var_t = opresult5520;
                    setLineNumber(1144);    // compilenode member
                    // call case 6: other requests
                    // call case 6: other requests
                    var call5523 = callmethodChecked(var_o, "name", []);
                    var call5524 = callmethodChecked(call5523, "value", []);
                    var var_n = call5524;
                    setLineNumber(1145);    // compilenode string
                    var string5525 = new GraceString("</td><td><code>");
                    var opresult5528 = callmethodChecked(var_t, "++(1)", [1], string5525);
                    var_t = opresult5528;
                    var if5529 = GraceDone;
                    setLineNumber(1146);    // compilenode member
                    // call case 6: other requests
                    var call5532 = callmethodChecked(var_o, "dtype", []);
                    var opresult5534 = callmethodChecked(call5532, "\u2260(1)", [1], GraceFalse);
                    if (Grace_isTrue(opresult5534)) {
                      var if5535 = GraceDone;
                      setLineNumber(1147);    // compilenode string
                      var string5536 = new GraceString("identifier");
                      // call case 6: other requests
                      // call case 6: other requests
                      var call5540 = callmethodChecked(var_o, "dtype", []);
                      var call5541 = callmethodChecked(call5540, "kind", []);
                      var opresult5543 = callmethodChecked(call5541, "==(1)", [1], string5536);
                      if (Grace_isTrue(opresult5543)) {
                        setLineNumber(1148);    // compilenode member
                        // call case 6: other requests
                        // call case 6: other requests
                        var call5547 = callmethodChecked(var_o, "dtype", []);
                        var call5548 = callmethodChecked(call5547, "value", []);
                        // call case 4: self request
                        onSelf = true;
                        var call5549 = callmethodChecked(this, "getTypeLink(1)", [1], call5548);
                        var opresult5552 = callmethodChecked(var_t, "++(1)", [1], call5549);
                        var_t = opresult5552;
                        if5535 = GraceDone;
                      } else {
                        var if5553 = GraceDone;
                        setLineNumber(1149);    // compilenode string
                        var string5554 = new GraceString("generic");
                        // call case 6: other requests
                        // call case 6: other requests
                        var call5558 = callmethodChecked(var_o, "dtype", []);
                        var call5559 = callmethodChecked(call5558, "kind", []);
                        var opresult5561 = callmethodChecked(call5559, "==(1)", [1], string5554);
                        if (Grace_isTrue(opresult5561)) {
                          setLineNumber(1150);    // compilenode string
                          var string5562 = new GraceString("&lt;");
                          // call case 6: other requests
                          // call case 6: other requests
                          // call case 6: other requests
                          var call5568 = callmethodChecked(var_o, "dtype", []);
                          var call5569 = callmethodChecked(call5568, "value", []);
                          var call5570 = callmethodChecked(call5569, "value", []);
                          // call case 4: self request
                          onSelf = true;
                          var call5571 = callmethodChecked(this, "getTypeLink(1)", [1], call5570);
                          var opresult5574 = callmethodChecked(var_t, "++(1)", [1], call5571);
                          var opresult5576 = callmethodChecked(opresult5574, "++(1)", [1], string5562);
                          var_t = opresult5576;
                          setLineNumber(1151);    // compilenode block
                          var block5578 = new GraceBlock(this, 1151, 1);
                          setLineNumber(1);    // compilenode identifier
                          block5578.real = function(var_each) {
                            setLineNumber(1151);    // compilenode string
                            var string5579 = new GraceString("");
                            // call case 6: other requests
                            var call5583 = callmethodChecked(var_each, "value", []);
                            // call case 4: self request
                            onSelf = true;
                            var call5584 = callmethodChecked(this, "getTypeLink(1)", [1], call5583);
                            var string5586 = new GraceString("");
                            var string5589 = new GraceString("");
                            var opresult5591 = callmethodChecked(string5589, "++(1)", [1], var_t);
                            var opresult5593 = callmethodChecked(opresult5591, "++(1)", [1], string5586);
                            var opresult5595 = callmethodChecked(opresult5593, "++(1)", [1], call5584);
                            var opresult5597 = callmethodChecked(opresult5595, "++(1)", [1], string5579);
                            var_t = opresult5597;
                            return GraceDone;
                          };
                          var block5598 = new GraceBlock(this, 1151, 0);
                          block5598.real = function() {
                            var string5599 = new GraceString(", ");
                            var opresult5602 = callmethodChecked(var_t, "++(1)", [1], string5599);
                            var_t = opresult5602;
                            return GraceDone;
                          };
                          // call case 6: other requests
                          // call case 6: other requests
                          // call case 6: other requests
                          var call5605 = callmethodChecked(var_o, "dtype", []);
                          var call5606 = callmethodChecked(call5605, "args", []);
                          var call5607 = callmethodChecked(call5606, "do(1)separatedBy(1)", [1, 1], block5578, block5598);
                          setLineNumber(1152);    // compilenode string
                          var string5608 = new GraceString("&gt;");
                          var opresult5611 = callmethodChecked(var_t, "++(1)", [1], string5608);
                          var_t = opresult5611;
                          if5553 = GraceDone;
                        }
                        if5535 = if5553;
                      }
                      if5529 = if5535;
                    }
                    setLineNumber(1155);    // compilenode string
                    var string5612 = new GraceString("</code></td></tr>");
                    var opresult5615 = callmethodChecked(var_t, "++(1)", [1], string5612);
                    var_t = opresult5615;
                    setLineNumber(1156);    // compilenode string
                    var string5617 = new GraceString("description");
                    // call case 6: other requests
                    // call case 6: other requests
                    // call case 3: self.outer request
                    var call5620 = callmethodChecked(superDepth, "outer", [0]);
                    var call5621 = callmethodChecked(call5620, "outer", []);
                    onSelf = true;
                    var call5622 = callmethodChecked(call5621, "formatComments(1)rowClass(1)colspan(1)", [1, 1, 1], var_o, string5617, new GraceNum(2));
                    var opresult5625 = callmethodChecked(var_t, "++(1)", [1], call5622);
                    var_t = opresult5625;
                    setLineNumber(1157);    // compilenode identifier
                    // call case 6: other requests
                    // call case 4: self request
                    onSelf = true;
                    var call5628 = callmethodChecked(this, "methodsSection", []);
                    var call5629 = callmethodChecked(call5628, "addElement(1)withText(1)", [1, 1], var_n, var_t);
                    if5506 = call5629;
                  }
                  if5382 = if5506;
                }
                setLineNumber(1160);    // compilenode identifier
                return GraceFalse;
              }
              setLineNumber(1082);    // return value
              if (!Grace_isTrue(callmethod(var_Boolean, "match(1)", [1], if5126)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("result of method visitDefDec(_) does not have " + 
                          callmethod(var_Boolean, "asString", [0])._value + "."));
              return if5126;
            };
            func5125.paramCounts = [1];
            obj2337.methods["visitDefDec(1)"] = func5125;
            func5125.definitionLine = 1081;
            func5125.definitionModule = "gracedoc";
            var func5630 = function(argcv) {    // method visitVarDec(_)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_o = arguments[curarg];
              curarg++;
              setModuleName("gracedoc");
              setLineNumber(1165);    // compilenode member
              // call case 6: other requests
              var call5632 = callmethodChecked(var_o, "nameString", []);
              var var_n = call5632;
              var if5633 = GraceDone;
              setLineNumber(1166);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call5636 = callmethodChecked(this, "isOnClassPage", []);
              var opresult5638 = callmethodChecked(call5636, "==(1)", [1], GraceTrue);
              if (Grace_isTrue(opresult5638)) {
                var if5639 = GraceDone;
                setLineNumber(1167);    // compilenode call
                // call case 6: other requests
                // call case 6: other requests
                var call5642 = callmethodChecked(var_settings, "publicOnly", []);
                var call5643 = callmethodChecked(call5642, "prefix!", [0]);
                if (Grace_isTrue(call5643)) {
                  setLineNumber(1168);    // compilenode string
                  var string5644 = new GraceString("");
                  // call case 6: other requests
                  // call case 6: other requests
                  var call5648 = callmethodChecked(var_o, "name", []);
                  var call5649 = callmethodChecked(call5648, "value", []);
                  var string5651 = new GraceString("<tr class='placeholder'><td><code>var</code></td><td class='identifier-name'>");
                  var opresult5653 = callmethodChecked(string5651, "++(1)", [1], call5649);
                  var opresult5655 = callmethodChecked(opresult5653, "++(1)", [1], string5644);
                  var var_t = opresult5655;
                  setLineNumber(1169);    // compilenode string
                  var string5656 = new GraceString("</td><td><code>");
                  var opresult5659 = callmethodChecked(var_t, "++(1)", [1], string5656);
                  var_t = opresult5659;
                  var if5660 = GraceDone;
                  setLineNumber(1170);    // compilenode member
                  // call case 6: other requests
                  var call5663 = callmethodChecked(var_o, "dtype", []);
                  var opresult5665 = callmethodChecked(call5663, "\u2260(1)", [1], GraceFalse);
                  if (Grace_isTrue(opresult5665)) {
                    setLineNumber(1171);    // compilenode string
                    var string5666 = new GraceString("");
                    // call case 6: other requests
                    // call case 6: other requests
                    var call5671 = callmethodChecked(var_o, "dtype", []);
                    var call5672 = callmethodChecked(call5671, "value", []);
                    // call case 4: self request
                    onSelf = true;
                    var call5673 = callmethodChecked(this, "getTypeLink(1)", [1], call5672);
                    var string5675 = new GraceString("");
                    var opresult5677 = callmethodChecked(string5675, "++(1)", [1], call5673);
                    var opresult5679 = callmethodChecked(opresult5677, "++(1)", [1], string5666);
                    var opresult5682 = callmethodChecked(var_t, "++(1)", [1], opresult5679);
                    var_t = opresult5682;
                    if5660 = GraceDone;
                  }
                  setLineNumber(1173);    // compilenode string
                  var string5683 = new GraceString("</code></td></tr>");
                  var opresult5686 = callmethodChecked(var_t, "++(1)", [1], string5683);
                  var_t = opresult5686;
                  setLineNumber(1174);    // compilenode string
                  var string5688 = new GraceString("description");
                  // call case 6: other requests
                  // call case 6: other requests
                  // call case 3: self.outer request
                  var call5691 = callmethodChecked(superDepth, "outer", [0]);
                  var call5692 = callmethodChecked(call5691, "outer", []);
                  onSelf = true;
                  var call5693 = callmethodChecked(call5692, "formatComments(1)rowClass(1)colspan(1)", [1, 1, 1], var_o, string5688, new GraceNum(3));
                  var opresult5696 = callmethodChecked(var_t, "++(1)", [1], call5693);
                  var_t = opresult5696;
                  setLineNumber(1175);    // compilenode identifier
                  // call case 6: other requests
                  // call case 4: self request
                  onSelf = true;
                  var call5699 = callmethodChecked(this, "fieldsSection", []);
                  var call5700 = callmethodChecked(call5699, "addElement(1)withText(1)", [1, 1], var_n, var_t);
                  if5639 = call5700;
                } else {
                  var if5701 = GraceDone;
                  setLineNumber(1177);    // compilenode member
                  // call case 6: other requests
                  var call5703 = callmethodChecked(var_o, "isReadable", []);
                  if (Grace_isTrue(call5703)) {
                    setLineNumber(1178);    // compilenode string
                    var string5704 = new GraceString("");
                    // call case 6: other requests
                    // call case 6: other requests
                    var call5708 = callmethodChecked(var_o, "name", []);
                    var call5709 = callmethodChecked(call5708, "value", []);
                    var string5711 = new GraceString("<tr class='placeholder'><td class='identifier-name'>");
                    var opresult5713 = callmethodChecked(string5711, "++(1)", [1], call5709);
                    var opresult5715 = callmethodChecked(opresult5713, "++(1)", [1], string5704);
                    var var_t = opresult5715;
                    setLineNumber(1179);    // compilenode string
                    var string5716 = new GraceString("</td><td>");
                    var opresult5719 = callmethodChecked(var_t, "++(1)", [1], string5716);
                    var_t = opresult5719;
                    var if5720 = GraceDone;
                    setLineNumber(1180);    // compilenode member
                    // call case 6: other requests
                    var call5723 = callmethodChecked(var_o, "dtype", []);
                    var opresult5725 = callmethodChecked(call5723, "\u2260(1)", [1], GraceFalse);
                    if (Grace_isTrue(opresult5725)) {
                      setLineNumber(1181);    // compilenode string
                      var string5726 = new GraceString("");
                      // call case 6: other requests
                      // call case 6: other requests
                      var call5731 = callmethodChecked(var_o, "dtype", []);
                      var call5732 = callmethodChecked(call5731, "value", []);
                      // call case 4: self request
                      onSelf = true;
                      var call5733 = callmethodChecked(this, "getTypeLink(1)", [1], call5732);
                      var string5735 = new GraceString("");
                      var opresult5737 = callmethodChecked(string5735, "++(1)", [1], call5733);
                      var opresult5739 = callmethodChecked(opresult5737, "++(1)", [1], string5726);
                      var opresult5742 = callmethodChecked(var_t, "++(1)", [1], opresult5739);
                      var_t = opresult5742;
                      if5720 = GraceDone;
                    }
                    setLineNumber(1183);    // compilenode string
                    var string5743 = new GraceString("</code></td></tr>");
                    var opresult5746 = callmethodChecked(var_t, "++(1)", [1], string5743);
                    var_t = opresult5746;
                    setLineNumber(1184);    // compilenode string
                    var string5748 = new GraceString("description");
                    // call case 6: other requests
                    // call case 6: other requests
                    // call case 3: self.outer request
                    var call5751 = callmethodChecked(superDepth, "outer", [0]);
                    var call5752 = callmethodChecked(call5751, "outer", []);
                    onSelf = true;
                    var call5753 = callmethodChecked(call5752, "formatComments(1)rowClass(1)colspan(1)", [1, 1, 1], var_o, string5748, new GraceNum(2));
                    var opresult5756 = callmethodChecked(var_t, "++(1)", [1], call5753);
                    var_t = opresult5756;
                    setLineNumber(1185);    // compilenode identifier
                    // call case 6: other requests
                    // call case 4: self request
                    onSelf = true;
                    var call5759 = callmethodChecked(this, "methodsSection", []);
                    var call5760 = callmethodChecked(call5759, "addElement(1)withText(1)", [1, 1], var_n, var_t);
                    if5701 = call5760;
                  }
                  var if5761 = GraceDone;
                  setLineNumber(1187);    // compilenode member
                  // call case 6: other requests
                  var call5763 = callmethodChecked(var_o, "isWritable", []);
                  if (Grace_isTrue(call5763)) {
                    setLineNumber(1188);    // compilenode string
                    var string5764 = new GraceString(":=</span>");
                    // call case 6: other requests
                    // call case 6: other requests
                    var call5768 = callmethodChecked(var_o, "name", []);
                    var call5769 = callmethodChecked(call5768, "value", []);
                    var string5771 = new GraceString("<tr class='placeholder'><td><code><span class='method-name'>");
                    var opresult5773 = callmethodChecked(string5771, "++(1)", [1], call5769);
                    var opresult5775 = callmethodChecked(opresult5773, "++(1)", [1], string5764);
                    var var_t = opresult5775;
                    var if5776 = GraceDone;
                    setLineNumber(1189);    // compilenode member
                    // call case 6: other requests
                    var call5779 = callmethodChecked(var_o, "dtype", []);
                    var opresult5781 = callmethodChecked(call5779, "\u2260(1)", [1], GraceFalse);
                    if (Grace_isTrue(opresult5781)) {
                      setLineNumber(1190);    // compilenode string
                      var string5782 = new GraceString(")");
                      // call case 6: other requests
                      // call case 6: other requests
                      var call5787 = callmethodChecked(var_o, "dtype", []);
                      var call5788 = callmethodChecked(call5787, "value", []);
                      // call case 4: self request
                      onSelf = true;
                      var call5789 = callmethodChecked(this, "getTypeLink(1)", [1], call5788);
                      var string5791 = new GraceString("(_:");
                      var opresult5793 = callmethodChecked(string5791, "++(1)", [1], call5789);
                      var opresult5795 = callmethodChecked(opresult5793, "++(1)", [1], string5782);
                      var opresult5798 = callmethodChecked(var_t, "++(1)", [1], opresult5795);
                      var_t = opresult5798;
                      if5776 = GraceDone;
                    }
                    setLineNumber(1192);    // compilenode string
                    var string5799 = new GraceString("</code></td><td><code>Done</code></td></tr>");
                    var opresult5802 = callmethodChecked(var_t, "++(1)", [1], string5799);
                    var_t = opresult5802;
                    setLineNumber(1193);    // compilenode string
                    var string5803 = new GraceString("</td></tr>");
                    var string5806 = new GraceString("<tr class='description'><td colspan='2'>Updates ");
                    var opresult5808 = callmethodChecked(string5806, "++(1)", [1], var_n);
                    var opresult5810 = callmethodChecked(opresult5808, "++(1)", [1], string5803);
                    var opresult5813 = callmethodChecked(var_t, "++(1)", [1], opresult5810);
                    var_t = opresult5813;
                    setLineNumber(1194);    // compilenode string
                    var string5815 = new GraceString(":=");
                    var opresult5818 = callmethodChecked(var_n, "++(1)", [1], string5815);
                    // call case 6: other requests
                    // call case 4: self request
                    onSelf = true;
                    var call5820 = callmethodChecked(this, "methodsSection", []);
                    var call5821 = callmethodChecked(call5820, "addElement(1)withText(1)", [1, 1], opresult5818, var_t);
                    if5761 = call5821;
                  }
                  if5639 = if5761;
                }
                setLineNumber(1197);    // compilenode identifier
                return GraceFalse;
              } else {
                var if5822 = GraceDone;
                setLineNumber(1199);    // compilenode call
                // call case 6: other requests
                // call case 6: other requests
                var call5825 = callmethodChecked(var_settings, "publicOnly", []);
                var call5826 = callmethodChecked(call5825, "prefix!", [0]);
                if (Grace_isTrue(call5826)) {
                  setLineNumber(1200);    // compilenode string
                  var string5827 = new GraceString("");
                  // call case 6: other requests
                  // call case 6: other requests
                  var call5831 = callmethodChecked(var_o, "name", []);
                  var call5832 = callmethodChecked(call5831, "value", []);
                  var string5834 = new GraceString("<tr class='placeholder'><td><code>var</code></td><td class='identifier-name'>");
                  var opresult5836 = callmethodChecked(string5834, "++(1)", [1], call5832);
                  var opresult5838 = callmethodChecked(opresult5836, "++(1)", [1], string5827);
                  var var_t = opresult5838;
                  setLineNumber(1201);    // compilenode string
                  var string5839 = new GraceString("</td><td><code>");
                  var opresult5842 = callmethodChecked(var_t, "++(1)", [1], string5839);
                  var_t = opresult5842;
                  var if5843 = GraceDone;
                  setLineNumber(1202);    // compilenode member
                  // call case 6: other requests
                  var call5846 = callmethodChecked(var_o, "dtype", []);
                  var opresult5848 = callmethodChecked(call5846, "\u2260(1)", [1], GraceFalse);
                  if (Grace_isTrue(opresult5848)) {
                    setLineNumber(1203);    // compilenode string
                    var string5849 = new GraceString("");
                    // call case 6: other requests
                    // call case 6: other requests
                    var call5854 = callmethodChecked(var_o, "dtype", []);
                    var call5855 = callmethodChecked(call5854, "value", []);
                    // call case 4: self request
                    onSelf = true;
                    var call5856 = callmethodChecked(this, "getTypeLink(1)", [1], call5855);
                    var string5858 = new GraceString("");
                    var opresult5860 = callmethodChecked(string5858, "++(1)", [1], call5856);
                    var opresult5862 = callmethodChecked(opresult5860, "++(1)", [1], string5849);
                    var opresult5865 = callmethodChecked(var_t, "++(1)", [1], opresult5862);
                    var_t = opresult5865;
                    if5843 = GraceDone;
                  }
                  setLineNumber(1205);    // compilenode string
                  var string5866 = new GraceString("</code></td></tr>");
                  var opresult5869 = callmethodChecked(var_t, "++(1)", [1], string5866);
                  var_t = opresult5869;
                  setLineNumber(1206);    // compilenode string
                  var string5871 = new GraceString("description");
                  // call case 6: other requests
                  // call case 6: other requests
                  // call case 3: self.outer request
                  var call5874 = callmethodChecked(superDepth, "outer", [0]);
                  var call5875 = callmethodChecked(call5874, "outer", []);
                  onSelf = true;
                  var call5876 = callmethodChecked(call5875, "formatComments(1)rowClass(1)colspan(1)", [1, 1, 1], var_o, string5871, new GraceNum(3));
                  var opresult5879 = callmethodChecked(var_t, "++(1)", [1], call5876);
                  var_t = opresult5879;
                  setLineNumber(1207);    // compilenode identifier
                  // call case 6: other requests
                  // call case 4: self request
                  onSelf = true;
                  var call5882 = callmethodChecked(this, "fieldsSection", []);
                  var call5883 = callmethodChecked(call5882, "addElement(1)withText(1)", [1, 1], var_n, var_t);
                  if5822 = call5883;
                } else {
                  var if5884 = GraceDone;
                  setLineNumber(1209);    // compilenode member
                  // call case 6: other requests
                  var call5886 = callmethodChecked(var_o, "isReadable", []);
                  if (Grace_isTrue(call5886)) {
                    setLineNumber(1210);    // compilenode string
                    var string5887 = new GraceString("");
                    // call case 6: other requests
                    // call case 6: other requests
                    var call5891 = callmethodChecked(var_o, "name", []);
                    var call5892 = callmethodChecked(call5891, "value", []);
                    var string5894 = new GraceString("<tr class='placeholder'><td class='identifier-name'>");
                    var opresult5896 = callmethodChecked(string5894, "++(1)", [1], call5892);
                    var opresult5898 = callmethodChecked(opresult5896, "++(1)", [1], string5887);
                    var var_t = opresult5898;
                    setLineNumber(1211);    // compilenode string
                    var string5899 = new GraceString("</td><td><code>");
                    var opresult5902 = callmethodChecked(var_t, "++(1)", [1], string5899);
                    var_t = opresult5902;
                    var if5903 = GraceDone;
                    setLineNumber(1212);    // compilenode member
                    // call case 6: other requests
                    var call5906 = callmethodChecked(var_o, "dtype", []);
                    var opresult5908 = callmethodChecked(call5906, "\u2260(1)", [1], GraceFalse);
                    if (Grace_isTrue(opresult5908)) {
                      setLineNumber(1213);    // compilenode string
                      var string5909 = new GraceString("");
                      // call case 6: other requests
                      // call case 6: other requests
                      var call5914 = callmethodChecked(var_o, "dtype", []);
                      var call5915 = callmethodChecked(call5914, "value", []);
                      // call case 4: self request
                      onSelf = true;
                      var call5916 = callmethodChecked(this, "getTypeLink(1)", [1], call5915);
                      var string5918 = new GraceString("");
                      var opresult5920 = callmethodChecked(string5918, "++(1)", [1], call5916);
                      var opresult5922 = callmethodChecked(opresult5920, "++(1)", [1], string5909);
                      var opresult5925 = callmethodChecked(var_t, "++(1)", [1], opresult5922);
                      var_t = opresult5925;
                      if5903 = GraceDone;
                    }
                    setLineNumber(1215);    // compilenode string
                    var string5926 = new GraceString("</code></td></tr>");
                    var opresult5929 = callmethodChecked(var_t, "++(1)", [1], string5926);
                    var_t = opresult5929;
                    setLineNumber(1216);    // compilenode string
                    var string5931 = new GraceString("description");
                    // call case 6: other requests
                    // call case 6: other requests
                    // call case 3: self.outer request
                    var call5934 = callmethodChecked(superDepth, "outer", [0]);
                    var call5935 = callmethodChecked(call5934, "outer", []);
                    onSelf = true;
                    var call5936 = callmethodChecked(call5935, "formatComments(1)rowClass(1)colspan(1)", [1, 1, 1], var_o, string5931, new GraceNum(2));
                    var opresult5939 = callmethodChecked(var_t, "++(1)", [1], call5936);
                    var_t = opresult5939;
                    setLineNumber(1217);    // compilenode identifier
                    // call case 6: other requests
                    // call case 4: self request
                    onSelf = true;
                    var call5942 = callmethodChecked(this, "methodsSection", []);
                    var call5943 = callmethodChecked(call5942, "addElement(1)withText(1)", [1, 1], var_n, var_t);
                    if5884 = call5943;
                  }
                  var if5944 = GraceDone;
                  setLineNumber(1219);    // compilenode member
                  // call case 6: other requests
                  var call5946 = callmethodChecked(var_o, "isWritable", []);
                  if (Grace_isTrue(call5946)) {
                    setLineNumber(1220);    // compilenode string
                    var string5947 = new GraceString(":=</span>");
                    var string5950 = new GraceString("<tr class='placeholder'><td><code><span class='method-name'>");
                    var opresult5952 = callmethodChecked(string5950, "++(1)", [1], var_n);
                    var opresult5954 = callmethodChecked(opresult5952, "++(1)", [1], string5947);
                    var var_t = opresult5954;
                    var if5955 = GraceDone;
                    setLineNumber(1221);    // compilenode member
                    // call case 6: other requests
                    var call5958 = callmethodChecked(var_o, "dtype", []);
                    var opresult5960 = callmethodChecked(call5958, "\u2260(1)", [1], GraceFalse);
                    if (Grace_isTrue(opresult5960)) {
                      setLineNumber(1222);    // compilenode string
                      var string5961 = new GraceString(")");
                      // call case 6: other requests
                      // call case 6: other requests
                      var call5966 = callmethodChecked(var_o, "dtype", []);
                      var call5967 = callmethodChecked(call5966, "value", []);
                      // call case 4: self request
                      onSelf = true;
                      var call5968 = callmethodChecked(this, "getTypeLink(1)", [1], call5967);
                      var string5970 = new GraceString("(_:");
                      var opresult5972 = callmethodChecked(string5970, "++(1)", [1], call5968);
                      var opresult5974 = callmethodChecked(opresult5972, "++(1)", [1], string5961);
                      var opresult5977 = callmethodChecked(var_t, "++(1)", [1], opresult5974);
                      var_t = opresult5977;
                      if5955 = GraceDone;
                    }
                    setLineNumber(1224);    // compilenode string
                    var string5978 = new GraceString("</code></td><td><code>Done</code></td></tr>");
                    var opresult5981 = callmethodChecked(var_t, "++(1)", [1], string5978);
                    var_t = opresult5981;
                    setLineNumber(1225);    // compilenode string
                    var string5982 = new GraceString("</td></tr>");
                    var string5985 = new GraceString("<tr class='description'><td colspan='2'>Updates ");
                    var opresult5987 = callmethodChecked(string5985, "++(1)", [1], var_n);
                    var opresult5989 = callmethodChecked(opresult5987, "++(1)", [1], string5982);
                    var opresult5992 = callmethodChecked(var_t, "++(1)", [1], opresult5989);
                    var_t = opresult5992;
                    setLineNumber(1226);    // compilenode string
                    var string5994 = new GraceString(":=");
                    var string5997 = new GraceString("");
                    var opresult5999 = callmethodChecked(string5997, "++(1)", [1], var_n);
                    var opresult6001 = callmethodChecked(opresult5999, "++(1)", [1], string5994);
                    // call case 6: other requests
                    // call case 4: self request
                    onSelf = true;
                    var call6003 = callmethodChecked(this, "methodsSection", []);
                    var call6004 = callmethodChecked(call6003, "addElement(1)withText(1)", [1, 1], opresult6001, var_t);
                    if5944 = call6004;
                  }
                  if5822 = if5944;
                }
                setLineNumber(1229);    // compilenode identifier
                return GraceFalse;
              }
              setLineNumber(1166);    // return value
              if (!Grace_isTrue(callmethod(var_Boolean, "match(1)", [1], if5633)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("result of method visitVarDec(_) does not have " + 
                          callmethod(var_Boolean, "asString", [0])._value + "."));
              return if5633;
            };
            func5630.paramCounts = [1];
            obj2337.methods["visitVarDec(1)"] = func5630;
            func5630.definitionLine = 1164;
            func5630.definitionModule = "gracedoc";
            var func6005 = function(argcv) {    // method visitInherits(_)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_o = arguments[curarg];
              curarg++;
              setModuleName("gracedoc");
              setLineNumber(1237);    // compilenode identifier
              return GraceTrue;
            };
            func6005.paramCounts = [1];
            obj2337.methods["visitInherits(1)"] = func6005;
            func6005.definitionLine = 1233;
            func6005.definitionModule = "gracedoc";
            setLineNumber(315);    // compilenode identifier
            // call case 6: other requests
            var call6007 = callmethodChecked(var_ast, "baseVisitor$object(1)", [0, 1], this);
            obj2337.superobj = call6007;
            if (call6007.data) obj2337.data = call6007.data;
            if (call6007.hasOwnProperty('_value'))
                obj2337._value = call6007._value;
            setLineNumber(317);    // compilenode identifier
            obj2337.data["isOnClassPage"] = GraceFalse;
            var reader_gracedoc_isOnClassPage6008 = function() {
              return this.data["isOnClassPage"];
            };
            obj2337.methods["isOnClassPage"] = reader_gracedoc_isOnClassPage6008;
            obj2337.data["isOnClassPage"] = GraceFalse;
            var writer_gracedoc_isOnClassPage6008 = function(argcv, o) {
              this.data["isOnClassPage"] = o;
              return GraceDone;
            };
            obj2337.methods["isOnClassPage:=(1)"] = writer_gracedoc_isOnClassPage6008;
            reader_gracedoc_isOnClassPage6008.confidential = true;
            writer_gracedoc_isOnClassPage6008.confidential = true;
            obj2337.mutable = true;
            setLineNumber(318);    // compilenode identifier
            obj2337.data["isOnTypePage"] = GraceFalse;
            var reader_gracedoc_isOnTypePage6009 = function() {
              return this.data["isOnTypePage"];
            };
            obj2337.methods["isOnTypePage"] = reader_gracedoc_isOnTypePage6009;
            obj2337.data["isOnTypePage"] = GraceFalse;
            var writer_gracedoc_isOnTypePage6009 = function(argcv, o) {
              this.data["isOnTypePage"] = o;
              return GraceDone;
            };
            obj2337.methods["isOnTypePage:=(1)"] = writer_gracedoc_isOnTypePage6009;
            reader_gracedoc_isOnTypePage6009.confidential = true;
            writer_gracedoc_isOnTypePage6009.confidential = true;
            obj2337.mutable = true;
            var if6010 = GraceDone;
            setLineNumber(319);    // compilenode string
            var string6011 = new GraceString("class");
            var opresult6014 = callmethodChecked(var_pageType, "==(1)", [1], string6011);
            if (Grace_isTrue(opresult6014)) {
              // call case 4: self request
              onSelf = true;
              var call6016 = callmethodChecked(this, "isOnClassPage:=(1)", [1], GraceTrue);
              if6010 = call6016;
            } else {
              var if6017 = GraceDone;
              setLineNumber(320);    // compilenode string
              var string6018 = new GraceString("type");
              var opresult6021 = callmethodChecked(var_pageType, "==(1)", [1], string6018);
              if (Grace_isTrue(opresult6021)) {
                // call case 4: self request
                onSelf = true;
                var call6023 = callmethodChecked(this, "isOnTypePage:=(1)", [1], GraceTrue);
                if6017 = call6023;
              }
              if6010 = if6017;
            }
            var if6024 = GraceDone;
            setLineNumber(322);    // compilenode member
            // call case 6: other requests
            var string6027 = new GraceString(".grace");
            // call case 6: other requests
            var call6028 = callmethodChecked(var_in, "endsWith(1)", [1], string6027);
            var call6029 = callmethodChecked(call6028, "not", []);
            if (Grace_isTrue(call6029)) {
              if6024 = var_in;
            } else {
              setLineNumber(323);    // compilenode member
              // call case 6: other requests
              var call6033 = callmethodChecked(var_in, "size", []);
              var diff6035 = callmethodChecked(call6033, "-(1)", [1], new GraceNum(6));
              // call case 6: other requests
              var call6036 = callmethodChecked(var_in, "substringFrom(1)to(1)", [1, 1], new GraceNum(0), diff6035);
              if6024 = call6036;
            }
            obj2337.data["pageName"] = if6024;
            var reader_gracedoc_pageName6037 = function() {
              return this.data["pageName"];
            };
            reader_gracedoc_pageName6037.def = true;
            reader_gracedoc_pageName6037.confidential = true;
            obj2337.methods["pageName"] = reader_gracedoc_pageName6037;
            var if6038 = GraceDone;
            setLineNumber(324);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call6040 = callmethodChecked(this, "isOnTypePage", []);
            if (Grace_isTrue(call6040)) {
              var string6041 = new GraceString("");
              // call case 4: self request
              onSelf = true;
              var call6044 = callmethodChecked(this, "pageName", []);
              var string6046 = new GraceString("Type: ");
              var opresult6048 = callmethodChecked(string6046, "++(1)", [1], call6044);
              var opresult6050 = callmethodChecked(opresult6048, "++(1)", [1], string6041);
              if6038 = opresult6050;
            } else {
              var if6051 = GraceDone;
              setLineNumber(325);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call6053 = callmethodChecked(this, "isOnClassPage", []);
              if (Grace_isTrue(call6053)) {
                var string6054 = new GraceString("");
                // call case 4: self request
                onSelf = true;
                var call6057 = callmethodChecked(this, "pageName", []);
                var string6059 = new GraceString("Class: ");
                var opresult6061 = callmethodChecked(string6059, "++(1)", [1], call6057);
                var opresult6063 = callmethodChecked(opresult6061, "++(1)", [1], string6054);
                if6051 = opresult6063;
              } else {
                setLineNumber(326);    // compilenode string
                var string6064 = new GraceString("");
                // call case 4: self request
                onSelf = true;
                var call6067 = callmethodChecked(this, "pageName", []);
                var string6069 = new GraceString("Module: ");
                var opresult6071 = callmethodChecked(string6069, "++(1)", [1], call6067);
                var opresult6073 = callmethodChecked(opresult6071, "++(1)", [1], string6064);
                if6051 = opresult6073;
              }
              if6038 = if6051;
            }
            obj2337.data["title"] = if6038;
            var reader_gracedoc_title6074 = function() {
              return this.data["title"];
            };
            reader_gracedoc_title6074.def = true;
            reader_gracedoc_title6074.confidential = true;
            obj2337.methods["title"] = reader_gracedoc_title6074;
            obj2337.data["headerSection"] = undefined;
            var reader_gracedoc_headerSection6075 = function() {
              return this.data["headerSection"];
            };
            obj2337.methods["headerSection"] = reader_gracedoc_headerSection6075;
            obj2337.data["headerSection"] = undefined;
            var writer_gracedoc_headerSection6075 = function(argcv, o) {
              this.data["headerSection"] = o;
              return GraceDone;
            };
            obj2337.methods["headerSection:=(1)"] = writer_gracedoc_headerSection6075;
            reader_gracedoc_headerSection6075.confidential = true;
            writer_gracedoc_headerSection6075.confidential = true;
            obj2337.mutable = true;
            obj2337.data["methodsSection"] = undefined;
            var reader_gracedoc_methodsSection6076 = function() {
              return this.data["methodsSection"];
            };
            obj2337.methods["methodsSection"] = reader_gracedoc_methodsSection6076;
            obj2337.data["methodsSection"] = undefined;
            var writer_gracedoc_methodsSection6076 = function(argcv, o) {
              this.data["methodsSection"] = o;
              return GraceDone;
            };
            obj2337.methods["methodsSection:=(1)"] = writer_gracedoc_methodsSection6076;
            reader_gracedoc_methodsSection6076.confidential = true;
            writer_gracedoc_methodsSection6076.confidential = true;
            obj2337.mutable = true;
            obj2337.data["typesSection"] = undefined;
            var reader_gracedoc_typesSection6077 = function() {
              return this.data["typesSection"];
            };
            obj2337.methods["typesSection"] = reader_gracedoc_typesSection6077;
            obj2337.data["typesSection"] = undefined;
            var writer_gracedoc_typesSection6077 = function(argcv, o) {
              this.data["typesSection"] = o;
              return GraceDone;
            };
            obj2337.methods["typesSection:=(1)"] = writer_gracedoc_typesSection6077;
            reader_gracedoc_typesSection6077.confidential = true;
            writer_gracedoc_typesSection6077.confidential = true;
            obj2337.mutable = true;
            obj2337.data["fieldsSection"] = undefined;
            var reader_gracedoc_fieldsSection6078 = function() {
              return this.data["fieldsSection"];
            };
            obj2337.methods["fieldsSection"] = reader_gracedoc_fieldsSection6078;
            obj2337.data["fieldsSection"] = undefined;
            var writer_gracedoc_fieldsSection6078 = function(argcv, o) {
              this.data["fieldsSection"] = o;
              return GraceDone;
            };
            obj2337.methods["fieldsSection:=(1)"] = writer_gracedoc_fieldsSection6078;
            reader_gracedoc_fieldsSection6078.confidential = true;
            writer_gracedoc_fieldsSection6078.confidential = true;
            obj2337.mutable = true;
            obj2337.data["classesSection"] = undefined;
            var reader_gracedoc_classesSection6079 = function() {
              return this.data["classesSection"];
            };
            obj2337.methods["classesSection"] = reader_gracedoc_classesSection6079;
            obj2337.data["classesSection"] = undefined;
            var writer_gracedoc_classesSection6079 = function(argcv, o) {
              this.data["classesSection"] = o;
              return GraceDone;
            };
            obj2337.methods["classesSection:=(1)"] = writer_gracedoc_classesSection6079;
            reader_gracedoc_classesSection6079.confidential = true;
            writer_gracedoc_classesSection6079.confidential = true;
            obj2337.mutable = true;
            obj2337.data["footerSection"] = undefined;
            var reader_gracedoc_footerSection6080 = function() {
              return this.data["footerSection"];
            };
            obj2337.methods["footerSection"] = reader_gracedoc_footerSection6080;
            obj2337.data["footerSection"] = undefined;
            var writer_gracedoc_footerSection6080 = function(argcv, o) {
              this.data["footerSection"] = o;
              return GraceDone;
            };
            obj2337.methods["footerSection:=(1)"] = writer_gracedoc_footerSection6080;
            reader_gracedoc_footerSection6080.confidential = true;
            writer_gracedoc_footerSection6080.confidential = true;
            obj2337.mutable = true;
            obj2337.data["methodtypesSection"] = undefined;
            var reader_gracedoc_methodtypesSection6081 = function() {
              return this.data["methodtypesSection"];
            };
            obj2337.methods["methodtypesSection"] = reader_gracedoc_methodtypesSection6081;
            obj2337.data["methodtypesSection"] = undefined;
            var writer_gracedoc_methodtypesSection6081 = function(argcv, o) {
              this.data["methodtypesSection"] = o;
              return GraceDone;
            };
            obj2337.methods["methodtypesSection:=(1)"] = writer_gracedoc_methodtypesSection6081;
            reader_gracedoc_methodtypesSection6081.confidential = true;
            writer_gracedoc_methodtypesSection6081.confidential = true;
            obj2337.mutable = true;
            obj2337.data["topDescSection"] = undefined;
            var reader_gracedoc_topDescSection6082 = function() {
              return this.data["topDescSection"];
            };
            obj2337.methods["topDescSection"] = reader_gracedoc_topDescSection6082;
            obj2337.data["topDescSection"] = undefined;
            var writer_gracedoc_topDescSection6082 = function(argcv, o) {
              this.data["topDescSection"] = o;
              return GraceDone;
            };
            obj2337.methods["topDescSection:=(1)"] = writer_gracedoc_topDescSection6082;
            reader_gracedoc_topDescSection6082.confidential = true;
            writer_gracedoc_topDescSection6082.confidential = true;
            obj2337.mutable = true;
            var if6083 = GraceDone;
            setLineNumber(337);    // compilenode member
            // call case 6: other requests
            var call6086 = callmethodChecked(var_settings, "verbosity", []);
            var opresult6088 = callmethodChecked(call6086, ">(1)", [1], new GraceNum(1));
            if (Grace_isTrue(opresult6088)) {
              var string6089 = new GraceString(")");
              // call case 6: other requests
              var call6092 = callmethodChecked(var_sys, "elapsedTime", []);
              var string6094 = new GraceString(" - graceDocVisitor created... (");
              // call case 4: self request
              onSelf = true;
              var call6097 = callmethodChecked(this, "title", []);
              var string6099 = new GraceString("On ");
              var opresult6101 = callmethodChecked(string6099, "++(1)", [1], call6097);
              var opresult6103 = callmethodChecked(opresult6101, "++(1)", [1], string6094);
              var opresult6105 = callmethodChecked(opresult6103, "++(1)", [1], call6092);
              var opresult6107 = callmethodChecked(opresult6105, "++(1)", [1], string6089);
              var call6108 = Grace_print(opresult6107);
              if6083 = call6108;
            }
            var if6109 = GraceDone;
            setLineNumber(339);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call6111 = callmethodChecked(this, "isOnTypePage", []);
            // call case 4: self request
            onSelf = true;
            var call6114 = callmethodChecked(this, "isOnClassPage", []);
            var opresult6116 = callmethodChecked(call6114, "||(1)", [1], call6111);
            if (Grace_isTrue(opresult6116)) {
              if6109 = var_dir;
            } else {
              // call case 4: self request
              onSelf = true;
              var call6118 = callmethodChecked(this, "pageName", []);
              if6109 = call6118;
            }
            obj2337.data["outdir"] = if6109;
            var reader_gracedoc_outdir6119 = function() {
              return this.data["outdir"];
            };
            reader_gracedoc_outdir6119.def = true;
            reader_gracedoc_outdir6119.confidential = true;
            obj2337.methods["outdir"] = reader_gracedoc_outdir6119;
            setLineNumber(340);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call6121 = callmethodChecked(this, "buildTemplate", []);
            superDepth = origSuperDepth;
          };
          obj_init_2337.apply(obj2337, []);
          return obj2337;
        };
        func2336.paramCounts = [1, 1, 1];
        obj2334.methods["createFrom(1)outTo(1)as(1)"] = func2336;
        func2336.definitionLine = 314;
        func2336.definitionModule = "gracedoc";
          var func6122 = function(argcv) {    // method createFrom(_)outTo(_)as(_)$object(_)
            var curarg = 1;
            var var_in = arguments[curarg];
            curarg++;
            var var_dir = arguments[curarg];
            curarg++;
            var var_pageType = arguments[curarg];
            curarg++;
            var inheritingObject = arguments[curarg++];
            // Start argument processing
            curarg = 1;
            curarg++;
            curarg++;
            curarg++;
            // End argument processing
            setModuleName("gracedoc");
            var returnTarget = invocationCount;
            invocationCount++;
            var obj6123 = Grace_allocObject(null, "createFrom(1)outTo(1)as(1)");
            obj6123.definitionModule = "gracedoc";
            obj6123.definitionLine = 314;
            var inho6123 = inheritingObject;
            while (inho6123.superobj) inho6123 = inho6123.superobj;
            inho6123.superobj = obj6123;
            obj6123.data = inheritingObject.data;
            if (inheritingObject.hasOwnProperty('_value'))
              obj6123._value = inheritingObject._value;
            obj6123.outer = this;
            var reader_gracedoc_outer6124 = function() {
              return this.outer;
            };
            obj6123.methods["outer"] = reader_gracedoc_outer6124;
            var obj_init_6123 = function() {
              var origSuperDepth = superDepth;
              superDepth = obj6123;
              var func6125 = function(argcv) {    // method getTypeLink(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_v = arguments[curarg];
                curarg++;
                // Start argument checking
                curarg = 1;
                setLineNumber(342);    // compilenode identifier
                if (!Grace_isTrue(callmethod(var_String, "match(1)",  [1], arguments[curarg])))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("argument 1 in getTypeLink (arg list 1), which corresponds to parameter v, does not have " + 
                            callmethod(var_String, "asString", [0])._value + "."));
                curarg++;
                // End argument checking
                setModuleName("gracedoc");
                setLineNumber(343);    // compilenode string
                var string6126 = new GraceString(".html");
                var string6129 = new GraceString("");
                var opresult6131 = callmethodChecked(string6129, "++(1)", [1], var_v);
                var opresult6133 = callmethodChecked(opresult6131, "++(1)", [1], string6126);
                var var_filename = opresult6133;
                setLineNumber(344);    // compilenode string
                var string6134 = new GraceString("<a href='");
                var var_out = string6134;
                var if6135 = GraceDone;
                setLineNumber(346);    // compilenode string
                var string6137 = new GraceString("");
                var string6140 = new GraceString("/types/");
                // call case 4: self request
                onSelf = true;
                var call6143 = callmethodChecked(this, "outdir", []);
                var string6145 = new GraceString("/");
                // call case 6: other requests
                var call6148 = callmethodChecked(var_settings, "outputdir", []);
                var string6150 = new GraceString("");
                var opresult6152 = callmethodChecked(string6150, "++(1)", [1], call6148);
                var opresult6154 = callmethodChecked(opresult6152, "++(1)", [1], string6145);
                var opresult6156 = callmethodChecked(opresult6154, "++(1)", [1], call6143);
                var opresult6158 = callmethodChecked(opresult6156, "++(1)", [1], string6140);
                var opresult6160 = callmethodChecked(opresult6158, "++(1)", [1], var_filename);
                var opresult6162 = callmethodChecked(opresult6160, "++(1)", [1], string6137);
                // call case 6: other requests
                var call6163 = callmethodChecked(var_io, "exists(1)", [1], opresult6162);
                if (Grace_isTrue(call6163)) {
                  var if6164 = GraceDone;
                  setLineNumber(347);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call6166 = callmethodChecked(this, "isOnTypePage", []);
                  if (Grace_isTrue(call6166)) {
                    setLineNumber(348);    // compilenode string
                    var string6167 = new GraceString("");
                    var string6170 = new GraceString("");
                    var opresult6172 = callmethodChecked(string6170, "++(1)", [1], var_filename);
                    var opresult6174 = callmethodChecked(opresult6172, "++(1)", [1], string6167);
                    var opresult6177 = callmethodChecked(var_out, "++(1)", [1], opresult6174);
                    var_out = opresult6177;
                    if6164 = GraceDone;
                  } else {
                    var if6178 = GraceDone;
                    setLineNumber(349);    // compilenode member
                    // call case 4: self request
                    onSelf = true;
                    var call6180 = callmethodChecked(this, "isOnClassPage", []);
                    if (Grace_isTrue(call6180)) {
                      setLineNumber(350);    // compilenode string
                      var string6181 = new GraceString("");
                      var string6184 = new GraceString("../types/");
                      var opresult6186 = callmethodChecked(string6184, "++(1)", [1], var_filename);
                      var opresult6188 = callmethodChecked(opresult6186, "++(1)", [1], string6181);
                      var opresult6191 = callmethodChecked(var_out, "++(1)", [1], opresult6188);
                      var_out = opresult6191;
                      if6178 = GraceDone;
                    } else {
                      setLineNumber(352);    // compilenode string
                      var string6192 = new GraceString("");
                      var string6195 = new GraceString("types/");
                      var opresult6197 = callmethodChecked(string6195, "++(1)", [1], var_filename);
                      var opresult6199 = callmethodChecked(opresult6197, "++(1)", [1], string6192);
                      var opresult6202 = callmethodChecked(var_out, "++(1)", [1], opresult6199);
                      var_out = opresult6202;
                      if6178 = GraceDone;
                    }
                    if6164 = if6178;
                  }
                  if6135 = if6164;
                } else {
                  var if6203 = GraceDone;
                  setLineNumber(355);    // compilenode string
                  var string6205 = new GraceString("");
                  var string6208 = new GraceString("/imported/types/");
                  // call case 6: other requests
                  var call6211 = callmethodChecked(var_settings, "outputdir", []);
                  var string6213 = new GraceString("");
                  var opresult6215 = callmethodChecked(string6213, "++(1)", [1], call6211);
                  var opresult6217 = callmethodChecked(opresult6215, "++(1)", [1], string6208);
                  var opresult6219 = callmethodChecked(opresult6217, "++(1)", [1], var_filename);
                  var opresult6221 = callmethodChecked(opresult6219, "++(1)", [1], string6205);
                  // call case 6: other requests
                  var call6222 = callmethodChecked(var_io, "exists(1)", [1], opresult6221);
                  if (Grace_isTrue(call6222)) {
                    var if6223 = GraceDone;
                    setLineNumber(356);    // compilenode member
                    // call case 4: self request
                    onSelf = true;
                    var call6225 = callmethodChecked(this, "isOnClassPage", []);
                    // call case 4: self request
                    onSelf = true;
                    var call6228 = callmethodChecked(this, "isOnTypePage", []);
                    var opresult6230 = callmethodChecked(call6228, "||(1)", [1], call6225);
                    if (Grace_isTrue(opresult6230)) {
                      setLineNumber(357);    // compilenode string
                      var string6231 = new GraceString("");
                      var string6234 = new GraceString("../../imported/types/");
                      var opresult6236 = callmethodChecked(string6234, "++(1)", [1], var_filename);
                      var opresult6238 = callmethodChecked(opresult6236, "++(1)", [1], string6231);
                      var opresult6241 = callmethodChecked(var_out, "++(1)", [1], opresult6238);
                      var_out = opresult6241;
                      if6223 = GraceDone;
                    } else {
                      setLineNumber(359);    // compilenode string
                      var string6242 = new GraceString("");
                      var string6245 = new GraceString("../imported/types/");
                      var opresult6247 = callmethodChecked(string6245, "++(1)", [1], var_filename);
                      var opresult6249 = callmethodChecked(opresult6247, "++(1)", [1], string6242);
                      var opresult6252 = callmethodChecked(var_out, "++(1)", [1], opresult6249);
                      var_out = opresult6252;
                      if6223 = GraceDone;
                    }
                    if6203 = if6223;
                  } else {
                    var if6253 = GraceDone;
                    setLineNumber(362);    // compilenode string
                    var string6255 = new GraceString("");
                    var string6258 = new GraceString("/gracelib/types/");
                    // call case 6: other requests
                    var call6261 = callmethodChecked(var_settings, "outputdir", []);
                    var string6263 = new GraceString("");
                    var opresult6265 = callmethodChecked(string6263, "++(1)", [1], call6261);
                    var opresult6267 = callmethodChecked(opresult6265, "++(1)", [1], string6258);
                    var opresult6269 = callmethodChecked(opresult6267, "++(1)", [1], var_filename);
                    var opresult6271 = callmethodChecked(opresult6269, "++(1)", [1], string6255);
                    // call case 6: other requests
                    var call6272 = callmethodChecked(var_io, "exists(1)", [1], opresult6271);
                    if (Grace_isTrue(call6272)) {
                      var if6273 = GraceDone;
                      setLineNumber(363);    // compilenode member
                      // call case 4: self request
                      onSelf = true;
                      var call6275 = callmethodChecked(this, "isOnClassPage", []);
                      // call case 4: self request
                      onSelf = true;
                      var call6278 = callmethodChecked(this, "isOnTypePage", []);
                      var opresult6280 = callmethodChecked(call6278, "||(1)", [1], call6275);
                      if (Grace_isTrue(opresult6280)) {
                        setLineNumber(364);    // compilenode string
                        var string6281 = new GraceString("");
                        var string6284 = new GraceString("../../gracelib/types/");
                        var opresult6286 = callmethodChecked(string6284, "++(1)", [1], var_filename);
                        var opresult6288 = callmethodChecked(opresult6286, "++(1)", [1], string6281);
                        var opresult6291 = callmethodChecked(var_out, "++(1)", [1], opresult6288);
                        var_out = opresult6291;
                        if6273 = GraceDone;
                      } else {
                        setLineNumber(366);    // compilenode string
                        var string6292 = new GraceString("");
                        var string6295 = new GraceString("../gracelib/types/");
                        var opresult6297 = callmethodChecked(string6295, "++(1)", [1], var_filename);
                        var opresult6299 = callmethodChecked(opresult6297, "++(1)", [1], string6292);
                        var opresult6302 = callmethodChecked(var_out, "++(1)", [1], opresult6299);
                        var_out = opresult6302;
                        if6273 = GraceDone;
                      }
                      if6253 = if6273;
                    } else {
                      setLineNumber(369);    // compilenode string
                      var string6303 = new GraceString("");
                      var var_dots = string6303;
                      var if6304 = GraceDone;
                      setLineNumber(370);    // compilenode member
                      // call case 4: self request
                      onSelf = true;
                      var call6306 = callmethodChecked(this, "isOnTypePage", []);
                      // call case 4: self request
                      onSelf = true;
                      var call6309 = callmethodChecked(this, "isOnClassPage", []);
                      var opresult6311 = callmethodChecked(call6309, "||(1)", [1], call6306);
                      if (Grace_isTrue(opresult6311)) {
                        setLineNumber(371);    // compilenode string
                        var string6312 = new GraceString("../../");
                        var_dots = string6312;
                        if6304 = GraceDone;
                      } else {
                        setLineNumber(373);    // compilenode string
                        var string6313 = new GraceString("../");
                        var_dots = string6313;
                        if6304 = GraceDone;
                      }
                      setLineNumber(375);    // compilenode string
                      var string6314 = new GraceString("404.html");
                      var string6317 = new GraceString("");
                      var opresult6319 = callmethodChecked(string6317, "++(1)", [1], var_dots);
                      var opresult6321 = callmethodChecked(opresult6319, "++(1)", [1], string6314);
                      var opresult6324 = callmethodChecked(var_out, "++(1)", [1], opresult6321);
                      var_out = opresult6324;
                      if6253 = GraceDone;
                    }
                    if6203 = if6253;
                  }
                  if6135 = if6203;
                }
                setLineNumber(377);    // compilenode string
                var string6325 = new GraceString("</a>");
                var string6328 = new GraceString("'>");
                var opresult6330 = callmethodChecked(string6328, "++(1)", [1], var_v);
                var opresult6332 = callmethodChecked(opresult6330, "++(1)", [1], string6325);
                var opresult6335 = callmethodChecked(var_out, "++(1)", [1], opresult6332);
                var_out = opresult6335;
                setLineNumber(378);    // compilenode identifier
                return var_out;
              };
              func6125.paramTypes = [];
              func6125.paramTypes.push([type_String, "v"]);
              func6125.confidential = true;
              func6125.paramCounts = [1];
              obj6123.methods["getTypeLink(1)"] = func6125;
              func6125.definitionLine = 342;
              func6125.definitionModule = "gracedoc";
              var func6336 = function(argcv) {    // method getClassLink(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_c = arguments[curarg];
                curarg++;
                // Start argument checking
                curarg = 1;
                setLineNumber(381);    // compilenode identifier
                if (!Grace_isTrue(callmethod(var_String, "match(1)",  [1], arguments[curarg])))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("argument 1 in getClassLink (arg list 1), which corresponds to parameter c, does not have " + 
                            callmethod(var_String, "asString", [0])._value + "."));
                curarg++;
                // End argument checking
                setModuleName("gracedoc");
                setLineNumber(382);    // compilenode string
                var string6337 = new GraceString(".html");
                var string6340 = new GraceString("");
                var opresult6342 = callmethodChecked(string6340, "++(1)", [1], var_c);
                var opresult6344 = callmethodChecked(opresult6342, "++(1)", [1], string6337);
                var var_filename = opresult6344;
                setLineNumber(383);    // compilenode string
                var string6345 = new GraceString("<a href='");
                var var_out = string6345;
                var if6346 = GraceDone;
                setLineNumber(385);    // compilenode string
                var string6348 = new GraceString("");
                var string6351 = new GraceString("/classes/");
                // call case 4: self request
                onSelf = true;
                var call6354 = callmethodChecked(this, "outdir", []);
                var string6356 = new GraceString("/");
                // call case 6: other requests
                var call6359 = callmethodChecked(var_settings, "outputdir", []);
                var string6361 = new GraceString("");
                var opresult6363 = callmethodChecked(string6361, "++(1)", [1], call6359);
                var opresult6365 = callmethodChecked(opresult6363, "++(1)", [1], string6356);
                var opresult6367 = callmethodChecked(opresult6365, "++(1)", [1], call6354);
                var opresult6369 = callmethodChecked(opresult6367, "++(1)", [1], string6351);
                var opresult6371 = callmethodChecked(opresult6369, "++(1)", [1], var_filename);
                var opresult6373 = callmethodChecked(opresult6371, "++(1)", [1], string6348);
                // call case 6: other requests
                var call6374 = callmethodChecked(var_io, "exists(1)", [1], opresult6373);
                if (Grace_isTrue(call6374)) {
                  var if6375 = GraceDone;
                  setLineNumber(386);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call6377 = callmethodChecked(this, "isOnClassPage", []);
                  if (Grace_isTrue(call6377)) {
                    setLineNumber(387);    // compilenode string
                    var string6378 = new GraceString("");
                    var string6381 = new GraceString("");
                    var opresult6383 = callmethodChecked(string6381, "++(1)", [1], var_filename);
                    var opresult6385 = callmethodChecked(opresult6383, "++(1)", [1], string6378);
                    var opresult6388 = callmethodChecked(var_out, "++(1)", [1], opresult6385);
                    var_out = opresult6388;
                    if6375 = GraceDone;
                  } else {
                    var if6389 = GraceDone;
                    setLineNumber(388);    // compilenode member
                    // call case 4: self request
                    onSelf = true;
                    var call6391 = callmethodChecked(this, "isOnTypePage", []);
                    if (Grace_isTrue(call6391)) {
                      setLineNumber(389);    // compilenode string
                      var string6392 = new GraceString("");
                      var string6395 = new GraceString("../classes/");
                      var opresult6397 = callmethodChecked(string6395, "++(1)", [1], var_filename);
                      var opresult6399 = callmethodChecked(opresult6397, "++(1)", [1], string6392);
                      var opresult6402 = callmethodChecked(var_out, "++(1)", [1], opresult6399);
                      var_out = opresult6402;
                      if6389 = GraceDone;
                    } else {
                      setLineNumber(391);    // compilenode string
                      var string6403 = new GraceString("");
                      var string6406 = new GraceString("classes/");
                      var opresult6408 = callmethodChecked(string6406, "++(1)", [1], var_filename);
                      var opresult6410 = callmethodChecked(opresult6408, "++(1)", [1], string6403);
                      var opresult6413 = callmethodChecked(var_out, "++(1)", [1], opresult6410);
                      var_out = opresult6413;
                      if6389 = GraceDone;
                    }
                    if6375 = if6389;
                  }
                  if6346 = if6375;
                } else {
                  var if6414 = GraceDone;
                  setLineNumber(394);    // compilenode string
                  var string6416 = new GraceString("");
                  var string6419 = new GraceString("/imported/classes/");
                  // call case 6: other requests
                  var call6422 = callmethodChecked(var_settings, "outputdir", []);
                  var string6424 = new GraceString("");
                  var opresult6426 = callmethodChecked(string6424, "++(1)", [1], call6422);
                  var opresult6428 = callmethodChecked(opresult6426, "++(1)", [1], string6419);
                  var opresult6430 = callmethodChecked(opresult6428, "++(1)", [1], var_filename);
                  var opresult6432 = callmethodChecked(opresult6430, "++(1)", [1], string6416);
                  // call case 6: other requests
                  var call6433 = callmethodChecked(var_io, "exists(1)", [1], opresult6432);
                  if (Grace_isTrue(call6433)) {
                    var if6434 = GraceDone;
                    setLineNumber(395);    // compilenode member
                    // call case 4: self request
                    onSelf = true;
                    var call6436 = callmethodChecked(this, "isOnClassPage", []);
                    // call case 4: self request
                    onSelf = true;
                    var call6439 = callmethodChecked(this, "isOnTypePage", []);
                    var opresult6441 = callmethodChecked(call6439, "||(1)", [1], call6436);
                    if (Grace_isTrue(opresult6441)) {
                      setLineNumber(396);    // compilenode string
                      var string6442 = new GraceString("");
                      var string6445 = new GraceString("../../imported/classes/");
                      var opresult6447 = callmethodChecked(string6445, "++(1)", [1], var_filename);
                      var opresult6449 = callmethodChecked(opresult6447, "++(1)", [1], string6442);
                      var opresult6452 = callmethodChecked(var_out, "++(1)", [1], opresult6449);
                      var_out = opresult6452;
                      if6434 = GraceDone;
                    } else {
                      setLineNumber(398);    // compilenode string
                      var string6453 = new GraceString("");
                      var string6456 = new GraceString("../imported/classes/");
                      var opresult6458 = callmethodChecked(string6456, "++(1)", [1], var_filename);
                      var opresult6460 = callmethodChecked(opresult6458, "++(1)", [1], string6453);
                      var opresult6463 = callmethodChecked(var_out, "++(1)", [1], opresult6460);
                      var_out = opresult6463;
                      if6434 = GraceDone;
                    }
                    if6414 = if6434;
                  } else {
                    var if6464 = GraceDone;
                    setLineNumber(401);    // compilenode string
                    var string6466 = new GraceString("");
                    var string6469 = new GraceString("/gracelib/classes/");
                    // call case 6: other requests
                    var call6472 = callmethodChecked(var_settings, "outputdir", []);
                    var string6474 = new GraceString("");
                    var opresult6476 = callmethodChecked(string6474, "++(1)", [1], call6472);
                    var opresult6478 = callmethodChecked(opresult6476, "++(1)", [1], string6469);
                    var opresult6480 = callmethodChecked(opresult6478, "++(1)", [1], var_filename);
                    var opresult6482 = callmethodChecked(opresult6480, "++(1)", [1], string6466);
                    // call case 6: other requests
                    var call6483 = callmethodChecked(var_io, "exists(1)", [1], opresult6482);
                    if (Grace_isTrue(call6483)) {
                      var if6484 = GraceDone;
                      setLineNumber(402);    // compilenode member
                      // call case 4: self request
                      onSelf = true;
                      var call6486 = callmethodChecked(this, "isOnClassPage", []);
                      // call case 4: self request
                      onSelf = true;
                      var call6489 = callmethodChecked(this, "isOnTypePage", []);
                      var opresult6491 = callmethodChecked(call6489, "||(1)", [1], call6486);
                      if (Grace_isTrue(opresult6491)) {
                        setLineNumber(403);    // compilenode string
                        var string6492 = new GraceString("");
                        var string6495 = new GraceString("../../gracelib/classes/");
                        var opresult6497 = callmethodChecked(string6495, "++(1)", [1], var_filename);
                        var opresult6499 = callmethodChecked(opresult6497, "++(1)", [1], string6492);
                        var opresult6502 = callmethodChecked(var_out, "++(1)", [1], opresult6499);
                        var_out = opresult6502;
                        if6484 = GraceDone;
                      } else {
                        setLineNumber(405);    // compilenode string
                        var string6503 = new GraceString("");
                        var string6506 = new GraceString("../gracelib/classes/");
                        var opresult6508 = callmethodChecked(string6506, "++(1)", [1], var_filename);
                        var opresult6510 = callmethodChecked(opresult6508, "++(1)", [1], string6503);
                        var opresult6513 = callmethodChecked(var_out, "++(1)", [1], opresult6510);
                        var_out = opresult6513;
                        if6484 = GraceDone;
                      }
                      if6464 = if6484;
                    } else {
                      setLineNumber(408);    // compilenode string
                      var string6514 = new GraceString("");
                      var var_dots = string6514;
                      var if6515 = GraceDone;
                      setLineNumber(409);    // compilenode member
                      // call case 4: self request
                      onSelf = true;
                      var call6517 = callmethodChecked(this, "isOnTypePage", []);
                      // call case 4: self request
                      onSelf = true;
                      var call6520 = callmethodChecked(this, "isOnClassPage", []);
                      var opresult6522 = callmethodChecked(call6520, "||(1)", [1], call6517);
                      if (Grace_isTrue(opresult6522)) {
                        setLineNumber(410);    // compilenode string
                        var string6523 = new GraceString("../../");
                        var_dots = string6523;
                        if6515 = GraceDone;
                      } else {
                        setLineNumber(412);    // compilenode string
                        var string6524 = new GraceString("../");
                        var_dots = string6524;
                        if6515 = GraceDone;
                      }
                      setLineNumber(414);    // compilenode string
                      var string6525 = new GraceString("404.html");
                      var string6528 = new GraceString("");
                      var opresult6530 = callmethodChecked(string6528, "++(1)", [1], var_dots);
                      var opresult6532 = callmethodChecked(opresult6530, "++(1)", [1], string6525);
                      var opresult6535 = callmethodChecked(var_out, "++(1)", [1], opresult6532);
                      var_out = opresult6535;
                      if6464 = GraceDone;
                    }
                    if6414 = if6464;
                  }
                  if6346 = if6414;
                }
                setLineNumber(416);    // compilenode string
                var string6536 = new GraceString("</a>");
                var string6539 = new GraceString("'>");
                var opresult6541 = callmethodChecked(string6539, "++(1)", [1], var_c);
                var opresult6543 = callmethodChecked(opresult6541, "++(1)", [1], string6536);
                var opresult6546 = callmethodChecked(var_out, "++(1)", [1], opresult6543);
                var_out = opresult6546;
                setLineNumber(417);    // compilenode identifier
                return var_out;
              };
              func6336.paramTypes = [];
              func6336.paramTypes.push([type_String, "c"]);
              func6336.confidential = true;
              func6336.paramCounts = [1];
              obj6123.methods["getClassLink(1)"] = func6336;
              func6336.definitionLine = 381;
              func6336.definitionModule = "gracedoc";
              var func6547 = function(argcv) {    // method buildTemplate
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                setModuleName("gracedoc");
                setLineNumber(421);    // compilenode num
                var var_cursor = new GraceNum(0);
                setLineNumber(422);    // compilenode string
                var string6548 = new GraceString(" -- https://github.com/reid47/gracedoc -->\n");
                // call case 6: other requests
                var call6551 = callmethodChecked(var_settings, "version", []);
                var string6553 = new GraceString("<!-- generated by Gracedoc, v");
                var opresult6555 = callmethodChecked(string6553, "++(1)", [1], call6551);
                var opresult6557 = callmethodChecked(opresult6555, "++(1)", [1], string6548);
                var var_out = opresult6557;
                setLineNumber(423);    // compilenode string
                var string6558 = new GraceString("<!DOCTYPE html>\n<html>");
                var opresult6561 = callmethodChecked(var_out, "++(1)", [1], string6558);
                var_out = opresult6561;
                setLineNumber(424);    // compilenode string
                var string6562 = new GraceString("<head>");
                var opresult6565 = callmethodChecked(var_out, "++(1)", [1], string6562);
                var_out = opresult6565;
                setLineNumber(425);    // compilenode string
                var string6566 = new GraceString(" | GraceDocs</title>");
                // call case 4: self request
                onSelf = true;
                var call6569 = callmethodChecked(this, "title", []);
                var string6571 = new GraceString("<title>");
                var opresult6573 = callmethodChecked(string6571, "++(1)", [1], call6569);
                var opresult6575 = callmethodChecked(opresult6573, "++(1)", [1], string6566);
                var opresult6578 = callmethodChecked(var_out, "++(1)", [1], opresult6575);
                var_out = opresult6578;
                setLineNumber(426);    // compilenode string
                var string6579 = new GraceString("<meta charset=\"UTF-8\" />");
                var opresult6582 = callmethodChecked(var_out, "++(1)", [1], string6579);
                var_out = opresult6582;
                setLineNumber(427);    // compilenode vardec
                var var_cssDir;
                var if6583 = GraceDone;
                setLineNumber(428);    // compilenode member
                // call case 4: self request
                onSelf = true;
                var call6585 = callmethodChecked(this, "isOnTypePage", []);
                // call case 4: self request
                onSelf = true;
                var call6588 = callmethodChecked(this, "isOnClassPage", []);
                var opresult6590 = callmethodChecked(call6588, "||(1)", [1], call6585);
                if (Grace_isTrue(opresult6590)) {
                  var string6591 = new GraceString("../../gracedoc.css");
                  var_cssDir = string6591;
                  if6583 = GraceDone;
                } else {
                  setLineNumber(429);    // compilenode string
                  var string6592 = new GraceString("../gracedoc.css");
                  var_cssDir = string6592;
                  if6583 = GraceDone;
                }
                setLineNumber(430);    // compilenode string
                var string6593 = new GraceString("\" />");
                var string6596 = new GraceString("<link rel=\"stylesheet\" href=\"");
                var opresult6598 = callmethodChecked(string6596, "++(1)", [1], var_cssDir);
                var opresult6600 = callmethodChecked(opresult6598, "++(1)", [1], string6593);
                var opresult6603 = callmethodChecked(var_out, "++(1)", [1], opresult6600);
                var_out = opresult6603;
                setLineNumber(431);    // compilenode string
                var string6604 = new GraceString("</head>");
                var opresult6607 = callmethodChecked(var_out, "++(1)", [1], string6604);
                var_out = opresult6607;
                setLineNumber(432);    // compilenode string
                var string6608 = new GraceString("<body>");
                var opresult6611 = callmethodChecked(var_out, "++(1)", [1], string6608);
                var_out = opresult6611;
                setLineNumber(433);    // compilenode string
                var string6612 = new GraceString("");
                // call case 4: self request
                onSelf = true;
                var call6615 = callmethodChecked(this, "title", []);
                var string6617 = new GraceString("<div class='header'><span class='header-left'>");
                var opresult6619 = callmethodChecked(string6617, "++(1)", [1], call6615);
                var opresult6621 = callmethodChecked(opresult6619, "++(1)", [1], string6612);
                var opresult6624 = callmethodChecked(var_out, "++(1)", [1], opresult6621);
                var_out = opresult6624;
                setLineNumber(434);    // compilenode member
                // call case 6: other requests
                var call6626 = callmethodChecked(var_out, "size", []);
                var_cursor = call6626;
                setLineNumber(435);    // compilenode string
                var string6627 = new GraceString("</span><span class='header-right'>GraceDocs</span></div>");
                var opresult6630 = callmethodChecked(var_out, "++(1)", [1], string6627);
                var_out = opresult6630;
                setLineNumber(436);    // compilenode string
                var string6631 = new GraceString("<div class='container'>");
                var opresult6634 = callmethodChecked(var_out, "++(1)", [1], string6631);
                var_out = opresult6634;
                setLineNumber(437);    // compilenode identifier
                // call case 6: other requests
                var call6637 = callmethodChecked(var_section, "withTemplate(1)andCursorAt(1)", [1, 1], var_out, var_cursor);
                // call case 4: self request
                onSelf = true;
                var call6638 = callmethodChecked(this, "headerSection:=(1)", [1], call6637);
                setLineNumber(439);    // compilenode num
                var_cursor = new GraceNum(0);
                setLineNumber(440);    // compilenode string
                var string6639 = new GraceString("<section id='top-description'>");
                var_out = string6639;
                setLineNumber(441);    // compilenode string
                var string6640 = new GraceString("<div class='top-box'>");
                var opresult6643 = callmethodChecked(var_out, "++(1)", [1], string6640);
                var_out = opresult6643;
                setLineNumber(442);    // compilenode member
                // call case 6: other requests
                var call6645 = callmethodChecked(var_out, "size", []);
                var_cursor = call6645;
                setLineNumber(443);    // compilenode string
                var string6646 = new GraceString("</div>");
                var opresult6649 = callmethodChecked(var_out, "++(1)", [1], string6646);
                var_out = opresult6649;
                setLineNumber(444);    // compilenode string
                var string6650 = new GraceString("</section>");
                var opresult6653 = callmethodChecked(var_out, "++(1)", [1], string6650);
                var_out = opresult6653;
                setLineNumber(445);    // compilenode identifier
                // call case 6: other requests
                var call6656 = callmethodChecked(var_section, "withTemplate(1)andCursorAt(1)", [1, 1], var_out, var_cursor);
                // call case 4: self request
                onSelf = true;
                var call6657 = callmethodChecked(this, "topDescSection:=(1)", [1], call6656);
                setLineNumber(447);    // compilenode num
                var_cursor = new GraceNum(0);
                setLineNumber(448);    // compilenode string
                var string6658 = new GraceString("<section id='fields'>");
                var_out = string6658;
                setLineNumber(449);    // compilenode string
                var string6659 = new GraceString("<h4>Fields</h4>");
                var opresult6662 = callmethodChecked(var_out, "++(1)", [1], string6659);
                var_out = opresult6662;
                setLineNumber(450);    // compilenode string
                var string6663 = new GraceString("<table>");
                var opresult6666 = callmethodChecked(var_out, "++(1)", [1], string6663);
                var_out = opresult6666;
                setLineNumber(451);    // compilenode string
                var string6667 = new GraceString("<tr><th></th><th>Field name</th><th>Type (if given)</th></tr>");
                var opresult6670 = callmethodChecked(var_out, "++(1)", [1], string6667);
                var_out = opresult6670;
                setLineNumber(452);    // compilenode member
                // call case 6: other requests
                var call6672 = callmethodChecked(var_out, "size", []);
                var_cursor = call6672;
                setLineNumber(453);    // compilenode string
                var string6673 = new GraceString("</table>");
                var opresult6676 = callmethodChecked(var_out, "++(1)", [1], string6673);
                var_out = opresult6676;
                setLineNumber(454);    // compilenode string
                var string6677 = new GraceString("</section>");
                var opresult6680 = callmethodChecked(var_out, "++(1)", [1], string6677);
                var_out = opresult6680;
                setLineNumber(455);    // compilenode identifier
                // call case 6: other requests
                var call6683 = callmethodChecked(var_section, "withTemplate(1)andCursorAt(1)", [1, 1], var_out, var_cursor);
                // call case 4: self request
                onSelf = true;
                var call6684 = callmethodChecked(this, "fieldsSection:=(1)", [1], call6683);
                setLineNumber(457);    // compilenode num
                var_cursor = new GraceNum(0);
                setLineNumber(458);    // compilenode string
                var string6685 = new GraceString("<section id='methodtypes'>");
                var_out = string6685;
                setLineNumber(459);    // compilenode string
                var string6686 = new GraceString("<h4>Added methods</h4>");
                var opresult6689 = callmethodChecked(var_out, "++(1)", [1], string6686);
                var_out = opresult6689;
                setLineNumber(460);    // compilenode string
                var string6690 = new GraceString("<table>");
                var opresult6693 = callmethodChecked(var_out, "++(1)", [1], string6690);
                var_out = opresult6693;
                setLineNumber(461);    // compilenode string
                var string6694 = new GraceString("<tr><th>Method signature</th><th>Return type</th></tr>");
                var opresult6697 = callmethodChecked(var_out, "++(1)", [1], string6694);
                var_out = opresult6697;
                setLineNumber(462);    // compilenode member
                // call case 6: other requests
                var call6699 = callmethodChecked(var_out, "size", []);
                var_cursor = call6699;
                setLineNumber(463);    // compilenode string
                var string6700 = new GraceString("</table>");
                var opresult6703 = callmethodChecked(var_out, "++(1)", [1], string6700);
                var_out = opresult6703;
                setLineNumber(464);    // compilenode string
                var string6704 = new GraceString("</section>");
                var opresult6707 = callmethodChecked(var_out, "++(1)", [1], string6704);
                var_out = opresult6707;
                setLineNumber(465);    // compilenode identifier
                // call case 6: other requests
                var call6710 = callmethodChecked(var_section, "withTemplate(1)andCursorAt(1)", [1, 1], var_out, var_cursor);
                // call case 4: self request
                onSelf = true;
                var call6711 = callmethodChecked(this, "methodtypesSection:=(1)", [1], call6710);
                setLineNumber(467);    // compilenode num
                var_cursor = new GraceNum(0);
                setLineNumber(468);    // compilenode string
                var string6712 = new GraceString("<section id='types'>");
                var_out = string6712;
                setLineNumber(469);    // compilenode string
                var string6713 = new GraceString("<h4>Types</h4>");
                var opresult6716 = callmethodChecked(var_out, "++(1)", [1], string6713);
                var_out = opresult6716;
                setLineNumber(470);    // compilenode string
                var string6717 = new GraceString("<table>");
                var opresult6720 = callmethodChecked(var_out, "++(1)", [1], string6717);
                var_out = opresult6720;
                setLineNumber(471);    // compilenode string
                var string6721 = new GraceString("<tr><th>Type name</th></tr>");
                var opresult6724 = callmethodChecked(var_out, "++(1)", [1], string6721);
                var_out = opresult6724;
                setLineNumber(472);    // compilenode member
                // call case 6: other requests
                var call6726 = callmethodChecked(var_out, "size", []);
                var_cursor = call6726;
                setLineNumber(473);    // compilenode string
                var string6727 = new GraceString("</table>");
                var opresult6730 = callmethodChecked(var_out, "++(1)", [1], string6727);
                var_out = opresult6730;
                setLineNumber(474);    // compilenode string
                var string6731 = new GraceString("</section>");
                var opresult6734 = callmethodChecked(var_out, "++(1)", [1], string6731);
                var_out = opresult6734;
                setLineNumber(475);    // compilenode identifier
                // call case 6: other requests
                var call6737 = callmethodChecked(var_section, "withTemplate(1)andCursorAt(1)", [1, 1], var_out, var_cursor);
                // call case 4: self request
                onSelf = true;
                var call6738 = callmethodChecked(this, "typesSection:=(1)", [1], call6737);
                setLineNumber(477);    // compilenode num
                var_cursor = new GraceNum(0);
                setLineNumber(478);    // compilenode string
                var string6739 = new GraceString("<section id='classes'>");
                var_out = string6739;
                setLineNumber(479);    // compilenode string
                var string6740 = new GraceString("<h4>Classes</h4>");
                var opresult6743 = callmethodChecked(var_out, "++(1)", [1], string6740);
                var_out = opresult6743;
                setLineNumber(480);    // compilenode string
                var string6744 = new GraceString("<table>");
                var opresult6747 = callmethodChecked(var_out, "++(1)", [1], string6744);
                var_out = opresult6747;
                setLineNumber(481);    // compilenode string
                var string6748 = new GraceString("<tr><th>Class name & constructor</th></tr>");
                var opresult6751 = callmethodChecked(var_out, "++(1)", [1], string6748);
                var_out = opresult6751;
                setLineNumber(482);    // compilenode member
                // call case 6: other requests
                var call6753 = callmethodChecked(var_out, "size", []);
                var_cursor = call6753;
                setLineNumber(483);    // compilenode string
                var string6754 = new GraceString("</table>");
                var opresult6757 = callmethodChecked(var_out, "++(1)", [1], string6754);
                var_out = opresult6757;
                setLineNumber(484);    // compilenode string
                var string6758 = new GraceString("</section>");
                var opresult6761 = callmethodChecked(var_out, "++(1)", [1], string6758);
                var_out = opresult6761;
                setLineNumber(485);    // compilenode identifier
                // call case 6: other requests
                var call6764 = callmethodChecked(var_section, "withTemplate(1)andCursorAt(1)", [1, 1], var_out, var_cursor);
                // call case 4: self request
                onSelf = true;
                var call6765 = callmethodChecked(this, "classesSection:=(1)", [1], call6764);
                setLineNumber(487);    // compilenode num
                var_cursor = new GraceNum(0);
                setLineNumber(488);    // compilenode string
                var string6766 = new GraceString("<section id='methods'>");
                var_out = string6766;
                setLineNumber(489);    // compilenode string
                var string6767 = new GraceString("<h4>Methods</h4>");
                var opresult6770 = callmethodChecked(var_out, "++(1)", [1], string6767);
                var_out = opresult6770;
                setLineNumber(490);    // compilenode string
                var string6771 = new GraceString("<table>");
                var opresult6774 = callmethodChecked(var_out, "++(1)", [1], string6771);
                var_out = opresult6774;
                setLineNumber(491);    // compilenode string
                var string6775 = new GraceString("<tr><th>Method signature</th><th>Return type</th></tr>");
                var opresult6778 = callmethodChecked(var_out, "++(1)", [1], string6775);
                var_out = opresult6778;
                setLineNumber(492);    // compilenode member
                // call case 6: other requests
                var call6780 = callmethodChecked(var_out, "size", []);
                var_cursor = call6780;
                setLineNumber(493);    // compilenode string
                var string6781 = new GraceString("</table>");
                var opresult6784 = callmethodChecked(var_out, "++(1)", [1], string6781);
                var_out = opresult6784;
                setLineNumber(494);    // compilenode string
                var string6785 = new GraceString("</section>");
                var opresult6788 = callmethodChecked(var_out, "++(1)", [1], string6785);
                var_out = opresult6788;
                setLineNumber(495);    // compilenode identifier
                // call case 6: other requests
                var call6791 = callmethodChecked(var_section, "withTemplate(1)andCursorAt(1)", [1, 1], var_out, var_cursor);
                // call case 4: self request
                onSelf = true;
                var call6792 = callmethodChecked(this, "methodsSection:=(1)", [1], call6791);
                setLineNumber(497);    // compilenode num
                var_cursor = new GraceNum(0);
                setLineNumber(498);    // compilenode string
                var string6793 = new GraceString("</div></body>");
                var_out = string6793;
                setLineNumber(499);    // compilenode string
                var string6794 = new GraceString("</html>");
                var opresult6797 = callmethodChecked(var_out, "++(1)", [1], string6794);
                var_out = opresult6797;
                setLineNumber(500);    // compilenode identifier
                // call case 6: other requests
                var call6800 = callmethodChecked(var_section, "withTemplate(1)andCursorAt(1)", [1, 1], var_out, var_cursor);
                // call case 4: self request
                onSelf = true;
                var call6801 = callmethodChecked(this, "footerSection:=(1)", [1], call6800);
                return call6801;
              };
              func6547.confidential = true;
              func6547.paramCounts = [0];
              obj6123.methods["buildTemplate"] = func6547;
              func6547.definitionLine = 420;
              func6547.definitionModule = "gracedoc";
              var func6802 = function(argcv) {    // method build404
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                setModuleName("gracedoc");
                setLineNumber(504);    // compilenode string
                var string6803 = new GraceString(" -- https://github.com/reid47/gracedoc -->\n");
                // call case 6: other requests
                var call6806 = callmethodChecked(var_settings, "version", []);
                var string6808 = new GraceString("<!-- generated by Gracedoc, v");
                var opresult6810 = callmethodChecked(string6808, "++(1)", [1], call6806);
                var opresult6812 = callmethodChecked(opresult6810, "++(1)", [1], string6803);
                var var_out = opresult6812;
                setLineNumber(505);    // compilenode string
                var string6813 = new GraceString("<!DOCTYPE html>\n<html>");
                var opresult6816 = callmethodChecked(var_out, "++(1)", [1], string6813);
                var_out = opresult6816;
                setLineNumber(506);    // compilenode string
                var string6817 = new GraceString("<head><title>404 - Page not found | GraceDocs</title></head>");
                var opresult6820 = callmethodChecked(var_out, "++(1)", [1], string6817);
                var_out = opresult6820;
                setLineNumber(507);    // compilenode string
                var string6821 = new GraceString("<body><div id='message-404'>404 - Page not found</div></body>");
                var opresult6824 = callmethodChecked(var_out, "++(1)", [1], string6821);
                var_out = opresult6824;
                setLineNumber(508);    // compilenode string
                var string6825 = new GraceString("</html>");
                var opresult6828 = callmethodChecked(var_out, "++(1)", [1], string6825);
                var_out = opresult6828;
                setLineNumber(509);    // compilenode string
                var string6830 = new GraceString("/404.html");
                // call case 6: other requests
                var call6833 = callmethodChecked(var_settings, "outputdir", []);
                var string6835 = new GraceString("");
                var opresult6837 = callmethodChecked(string6835, "++(1)", [1], call6833);
                var opresult6839 = callmethodChecked(opresult6837, "++(1)", [1], string6830);
                var string6840 = new GraceString("w");
                // call case 6: other requests
                var call6841 = callmethodChecked(var_io, "open(2)", [2], opresult6839, string6840);
                var var_file404 = call6841;
                setLineNumber(510);    // compilenode identifier
                // call case 6: other requests
                // call case 6: other requests
                // call case 3: self.outer request
                var call6846 = callmethodChecked(superDepth, "outer", [0]);
                var call6847 = callmethodChecked(call6846, "outer", []);
                onSelf = true;
                var call6848 = callmethodChecked(call6847, "autoindent(1)", [1], var_out);
                // call case 6: other requests
                var call6849 = callmethodChecked(var_file404, "write(1)", [1], call6848);
                setLineNumber(511);    // compilenode member
                // call case 6: other requests
                var call6851 = callmethodChecked(var_file404, "close", []);
                return call6851;
              };
              func6802.paramCounts = [0];
              obj6123.methods["build404"] = func6802;
              func6802.definitionLine = 503;
              func6802.definitionModule = "gracedoc";
              var func6852 = function(argcv) {    // method buildindex
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                setModuleName("gracedoc");
                setLineNumber(515);    // compilenode string
                var string6853 = new GraceString(" -- https://github.com/reid47/gracedoc -->\n");
                // call case 6: other requests
                var call6856 = callmethodChecked(var_settings, "version", []);
                var string6858 = new GraceString("<!-- generated by Gracedoc, v");
                var opresult6860 = callmethodChecked(string6858, "++(1)", [1], call6856);
                var opresult6862 = callmethodChecked(opresult6860, "++(1)", [1], string6853);
                var var_out = opresult6862;
                setLineNumber(516);    // compilenode string
                var string6863 = new GraceString("<!DOCTYPE html>\n<html lang=\"en\">");
                var opresult6866 = callmethodChecked(var_out, "++(1)", [1], string6863);
                var_out = opresult6866;
                setLineNumber(517);    // compilenode string
                var string6867 = new GraceString("<head>");
                var opresult6870 = callmethodChecked(var_out, "++(1)", [1], string6867);
                var_out = opresult6870;
                setLineNumber(518);    // compilenode string
                var string6871 = new GraceString("<title>GraceDocs</title>");
                var opresult6874 = callmethodChecked(var_out, "++(1)", [1], string6871);
                var_out = opresult6874;
                setLineNumber(519);    // compilenode string
                var string6875 = new GraceString("<link rel=\"stylesheet\" href=\"graceDoc.css\">");
                var opresult6878 = callmethodChecked(var_out, "++(1)", [1], string6875);
                var_out = opresult6878;
                setLineNumber(520);    // compilenode string
                var string6879 = new GraceString("</head>");
                var opresult6882 = callmethodChecked(var_out, "++(1)", [1], string6879);
                var_out = opresult6882;
                setLineNumber(521);    // compilenode string
                var string6883 = new GraceString("<body>");
                var opresult6886 = callmethodChecked(var_out, "++(1)", [1], string6883);
                var_out = opresult6886;
                setLineNumber(522);    // compilenode string
                var string6887 = new GraceString("<iframe id=\"frame-sidebar\" src=\"modules.html\" name=\"moduleFrame\"></iframe>");
                var opresult6890 = callmethodChecked(var_out, "++(1)", [1], string6887);
                var_out = opresult6890;
                setLineNumber(523);    // compilenode string
                var string6891 = new GraceString("<iframe id=\"frame-main\" src=\"\" name=\"mainFrame\"></iframe>");
                var opresult6894 = callmethodChecked(var_out, "++(1)", [1], string6891);
                var_out = opresult6894;
                setLineNumber(524);    // compilenode string
                var string6895 = new GraceString("</body>");
                var opresult6898 = callmethodChecked(var_out, "++(1)", [1], string6895);
                var_out = opresult6898;
                setLineNumber(525);    // compilenode string
                var string6899 = new GraceString("</html>");
                var opresult6902 = callmethodChecked(var_out, "++(1)", [1], string6899);
                var_out = opresult6902;
                setLineNumber(526);    // compilenode string
                var string6904 = new GraceString("/index.html");
                // call case 6: other requests
                var call6907 = callmethodChecked(var_settings, "outputdir", []);
                var string6909 = new GraceString("");
                var opresult6911 = callmethodChecked(string6909, "++(1)", [1], call6907);
                var opresult6913 = callmethodChecked(opresult6911, "++(1)", [1], string6904);
                var string6914 = new GraceString("w");
                // call case 6: other requests
                var call6915 = callmethodChecked(var_io, "open(2)", [2], opresult6913, string6914);
                var var_fileindex = call6915;
                setLineNumber(527);    // compilenode identifier
                // call case 6: other requests
                // call case 6: other requests
                // call case 3: self.outer request
                var call6920 = callmethodChecked(superDepth, "outer", [0]);
                var call6921 = callmethodChecked(call6920, "outer", []);
                onSelf = true;
                var call6922 = callmethodChecked(call6921, "autoindent(1)", [1], var_out);
                // call case 6: other requests
                var call6923 = callmethodChecked(var_fileindex, "write(1)", [1], call6922);
                setLineNumber(528);    // compilenode member
                // call case 6: other requests
                var call6925 = callmethodChecked(var_fileindex, "close", []);
                return call6925;
              };
              func6852.paramCounts = [0];
              obj6123.methods["buildindex"] = func6852;
              func6852.definitionLine = 514;
              func6852.definitionModule = "gracedoc";
              var func6926 = function(argcv) {    // method buildjs
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                setModuleName("gracedoc");
                setLineNumber(532);    // compilenode string
                var string6927 = new GraceString("function toggleContents(eltid) {\n    var elt = document.getElementById('contents-'+eltid)\n    var arrow = document.getElementById('arrow-button-'+eltid)\n    if (elt.style.display == 'none') {\n        elt.style.display = 'block';\n        arrow.innerHTML = '&#9660';\n    } else {\n        elt.style.display = 'none';\n        arrow.innerHTML = '&#9654';\n    }\n}");
                var var_out = string6927;
                setLineNumber(543);    // compilenode string
                var string6929 = new GraceString("/gracedoc.js");
                // call case 6: other requests
                var call6932 = callmethodChecked(var_settings, "outputdir", []);
                var string6934 = new GraceString("");
                var opresult6936 = callmethodChecked(string6934, "++(1)", [1], call6932);
                var opresult6938 = callmethodChecked(opresult6936, "++(1)", [1], string6929);
                var string6939 = new GraceString("w");
                // call case 6: other requests
                var call6940 = callmethodChecked(var_io, "open(2)", [2], opresult6938, string6939);
                var var_filejs = call6940;
                setLineNumber(544);    // compilenode identifier
                // call case 6: other requests
                var call6942 = callmethodChecked(var_filejs, "write(1)", [1], var_out);
                setLineNumber(545);    // compilenode member
                // call case 6: other requests
                var call6944 = callmethodChecked(var_filejs, "close", []);
                return call6944;
              };
              func6926.paramCounts = [0];
              obj6123.methods["buildjs"] = func6926;
              func6926.definitionLine = 531;
              func6926.definitionModule = "gracedoc";
              var func6945 = function(argcv) {    // method buildcss
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                setModuleName("gracedoc");
                setLineNumber(549);    // compilenode string
                var string6946 = new GraceString("@import url(http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,700);\n\n* {\n    margin: 0px;\n    padding: 0px;\n}\n\nbody {\n    font-size: 16px;\n    font-family: 'Open Sans', Helvetica, Arial, sans-serif;\n}\n\na, a:visited {\n    color: #00d;\n}\n\n.header {\n    height: 50px;\n    line-height: 50px;\n    padding: 0px 20px;\n    font-weight: bold;\n    background-color: rgb(0,80,105);\n    border-bottom: 2px solid #333;\n    font-size: 20px;\n    color: #fff;\n}\n\n.header-left {\n    float: left;\n}\n\n.header-right {\n    float: right;\n}\n\n.description {\n    font-style: italic;\n    font-size: 14px;\n}\n\n.container {\n    padding: 20px;\n}\n\nsection {\n    border: 1px solid #079;\n    border-radius: 0px;\n}\n\nsection > h4 {\n    margin: 0px;\n    background-color: rgb(80,160,185);\n    padding: 5px 10px;\n}\n\nsection + section {\n    margin-top: 20px;\n}\n\ntable {\n    margin: 0px;\n    width: 100%;\n    border-collapse: collapse;\n    table-layout: fixed;\n}\n\nth {\n    text-align: left;\n    background: rgb(130,200,215);\n    color: rgb(0,80,105);\n    font-size: 10px;\n    padding: 5px 10px;\n    border-bottom: 1px solid #079;\n}\n\ntd {\n    padding: 10px;\n    word-wrap: break-word;\n}\n\n.row-odd { background-color: #eeeeee; }\n.row-odd + tr.description {\n    background-color: #eeeeee;\n}\n\n.row-even { background-color: #ffffff; }\n.row-even + tr.description {\n    background-color: #ffffff;\n}\n\ntr.description > td {\n    padding-top: 0px;\n}\n.code, code {\n    font-family: Monaco, monospace;\n}\n.description {\n    font-size: 14px;\n    width: 50%;\n}\n.parameter-type {\n    font-family: Monaco, monospace;\n}\n.type-name {\n    font-family: Monaco, monospace;\n    font-weight: bold;\n}\n.method-name {\n    font-weight: bold;\n}\n.class-name {\n    font-weight: bold;\n}\n.identifier-name {\n    font-family: Monaco, monospace;\n    font-weight: bold;\n}\n\n/* MODULES LIST */\n\n.list-container h5 {\n    font-size: 16px;\n    background-color: rgb(0,80,105);\n    color: #ffffff;\n    padding: 5px 10px;\n}\n\n.list-container h6 {\n    font-size: 12px;\n    margin: 0px;\n    color: #000;\n    padding: 0px 5px;\n}\n\n.list-container ul {\n    padding: 5px 10px 10px 10px;\n}\n.list-container li {\n    list-style-type: none;\n}\n\niframe {\n    border: none;\n}\n\n#frame-sidebar {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 20%;\n    height: 100%;\n}\n\n#frame-main {\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 80%;\n    height: 100%;\n    border-left: 4px solid #bbb\n}\n\n.contents-list {\n    background: #e0e8f0;\n    padding: 10px 5px 5px 5px;\n    margin-left: 20px;\n    margin-right: 20px;\n    font-size: 14px;\n}\n\n.arrow-button-toggle {\n    font-family: monospace;\n    font-size: 14px;\n    color: rgb(0,0,105);\n    cursor: pointer;\n    width: 20px;\n    display: inline-block;\n}\n\n.top-box {\n    word-wrap: break-word;\n    margin: 20px;\n}\n\n.top-box hr {\n    margin: 10px 0;\n    border: 1px solid #079;\n}\n\n.headline {\n    font-size: 18px;\n}\n\n.quiet {\n    color: #888;\n    font-size: 14px;\n}");
                var var_out = string6946;
                setLineNumber(746);    // compilenode string
                var string6948 = new GraceString("/gracedoc.css");
                // call case 6: other requests
                var call6951 = callmethodChecked(var_settings, "outputdir", []);
                var string6953 = new GraceString("");
                var opresult6955 = callmethodChecked(string6953, "++(1)", [1], call6951);
                var opresult6957 = callmethodChecked(opresult6955, "++(1)", [1], string6948);
                var string6958 = new GraceString("w");
                // call case 6: other requests
                var call6959 = callmethodChecked(var_io, "open(2)", [2], opresult6957, string6958);
                var var_filecss = call6959;
                setLineNumber(747);    // compilenode identifier
                // call case 6: other requests
                var call6961 = callmethodChecked(var_filecss, "write(1)", [1], var_out);
                setLineNumber(748);    // compilenode member
                // call case 6: other requests
                var call6963 = callmethodChecked(var_filecss, "close", []);
                return call6963;
              };
              func6945.paramCounts = [0];
              obj6123.methods["buildcss"] = func6945;
              func6945.definitionLine = 548;
              func6945.definitionModule = "gracedoc";
              var func6964 = function(argcv) {    // method generate
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                setModuleName("gracedoc");
                var if6965 = GraceDone;
                setLineNumber(752);    // compilenode member
                // call case 6: other requests
                var call6968 = callmethodChecked(var_settings, "verbosity", []);
                var opresult6970 = callmethodChecked(call6968, ">(1)", [1], new GraceNum(1));
                if (Grace_isTrue(opresult6970)) {
                  var string6971 = new GraceString(")");
                  // call case 6: other requests
                  var call6974 = callmethodChecked(var_sys, "elapsedTime", []);
                  var string6976 = new GraceString(" - starting to assemble HTML (");
                  // call case 4: self request
                  onSelf = true;
                  var call6979 = callmethodChecked(this, "title", []);
                  var string6981 = new GraceString("On ");
                  var opresult6983 = callmethodChecked(string6981, "++(1)", [1], call6979);
                  var opresult6985 = callmethodChecked(opresult6983, "++(1)", [1], string6976);
                  var opresult6987 = callmethodChecked(opresult6985, "++(1)", [1], call6974);
                  var opresult6989 = callmethodChecked(opresult6987, "++(1)", [1], string6971);
                  var call6990 = Grace_print(opresult6989);
                  if6965 = call6990;
                }
                setLineNumber(754);    // compilenode vardec
                var var_outfile;
                setLineNumber(755);    // compilenode string
                var string6991 = new GraceString("");
                var var_output = string6991;
                var if6992 = GraceDone;
                setLineNumber(756);    // compilenode member
                // call case 4: self request
                onSelf = true;
                var call6994 = callmethodChecked(this, "isOnClassPage", []);
                if (Grace_isTrue(call6994)) {
                  setLineNumber(757);    // compilenode string
                  var string6996 = new GraceString(".html");
                  // call case 4: self request
                  onSelf = true;
                  var call6999 = callmethodChecked(this, "pageName", []);
                  var string7001 = new GraceString("/classes/");
                  // call case 4: self request
                  onSelf = true;
                  var call7004 = callmethodChecked(this, "outdir", []);
                  var string7006 = new GraceString("/");
                  // call case 6: other requests
                  var call7009 = callmethodChecked(var_settings, "outputdir", []);
                  var string7011 = new GraceString("");
                  var opresult7013 = callmethodChecked(string7011, "++(1)", [1], call7009);
                  var opresult7015 = callmethodChecked(opresult7013, "++(1)", [1], string7006);
                  var opresult7017 = callmethodChecked(opresult7015, "++(1)", [1], call7004);
                  var opresult7019 = callmethodChecked(opresult7017, "++(1)", [1], string7001);
                  var opresult7021 = callmethodChecked(opresult7019, "++(1)", [1], call6999);
                  var opresult7023 = callmethodChecked(opresult7021, "++(1)", [1], string6996);
                  var string7024 = new GraceString("w");
                  // call case 6: other requests
                  var call7025 = callmethodChecked(var_io, "open(2)", [2], opresult7023, string7024);
                  var_outfile = call7025;
                  if6992 = GraceDone;
                } else {
                  var if7026 = GraceDone;
                  setLineNumber(758);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call7028 = callmethodChecked(this, "isOnTypePage", []);
                  if (Grace_isTrue(call7028)) {
                    setLineNumber(759);    // compilenode string
                    var string7030 = new GraceString(".html");
                    // call case 4: self request
                    onSelf = true;
                    var call7033 = callmethodChecked(this, "pageName", []);
                    var string7035 = new GraceString("/types/");
                    // call case 4: self request
                    onSelf = true;
                    var call7038 = callmethodChecked(this, "outdir", []);
                    var string7040 = new GraceString("/");
                    // call case 6: other requests
                    var call7043 = callmethodChecked(var_settings, "outputdir", []);
                    var string7045 = new GraceString("");
                    var opresult7047 = callmethodChecked(string7045, "++(1)", [1], call7043);
                    var opresult7049 = callmethodChecked(opresult7047, "++(1)", [1], string7040);
                    var opresult7051 = callmethodChecked(opresult7049, "++(1)", [1], call7038);
                    var opresult7053 = callmethodChecked(opresult7051, "++(1)", [1], string7035);
                    var opresult7055 = callmethodChecked(opresult7053, "++(1)", [1], call7033);
                    var opresult7057 = callmethodChecked(opresult7055, "++(1)", [1], string7030);
                    var string7058 = new GraceString("w");
                    // call case 6: other requests
                    var call7059 = callmethodChecked(var_io, "open(2)", [2], opresult7057, string7058);
                    var_outfile = call7059;
                    if7026 = GraceDone;
                  } else {
                    setLineNumber(761);    // compilenode string
                    var string7061 = new GraceString(".html");
                    // call case 4: self request
                    onSelf = true;
                    var call7064 = callmethodChecked(this, "pageName", []);
                    var string7066 = new GraceString("/");
                    // call case 4: self request
                    onSelf = true;
                    var call7069 = callmethodChecked(this, "outdir", []);
                    var string7071 = new GraceString("/");
                    // call case 6: other requests
                    var call7074 = callmethodChecked(var_settings, "outputdir", []);
                    var string7076 = new GraceString("");
                    var opresult7078 = callmethodChecked(string7076, "++(1)", [1], call7074);
                    var opresult7080 = callmethodChecked(opresult7078, "++(1)", [1], string7071);
                    var opresult7082 = callmethodChecked(opresult7080, "++(1)", [1], call7069);
                    var opresult7084 = callmethodChecked(opresult7082, "++(1)", [1], string7066);
                    var opresult7086 = callmethodChecked(opresult7084, "++(1)", [1], call7064);
                    var opresult7088 = callmethodChecked(opresult7086, "++(1)", [1], string7061);
                    var string7089 = new GraceString("w");
                    // call case 6: other requests
                    var call7090 = callmethodChecked(var_io, "open(2)", [2], opresult7088, string7089);
                    var_outfile = call7090;
                    if7026 = GraceDone;
                  }
                  if6992 = if7026;
                }
                setLineNumber(763);    // compilenode member
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call7093 = callmethodChecked(this, "headerSection", []);
                var call7094 = callmethodChecked(call7093, "html", []);
                var opresult7097 = callmethodChecked(var_output, "++(1)", [1], call7094);
                var_output = opresult7097;
                var if7098 = GraceDone;
                setLineNumber(764);    // compilenode member
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call7101 = callmethodChecked(this, "topDescSection", []);
                var call7102 = callmethodChecked(call7101, "hasContent", []);
                if (Grace_isTrue(call7102)) {
                  setLineNumber(765);    // compilenode member
                  // call case 6: other requests
                  // call case 4: self request
                  onSelf = true;
                  var call7105 = callmethodChecked(this, "topDescSection", []);
                  var call7106 = callmethodChecked(call7105, "html", []);
                  var opresult7109 = callmethodChecked(var_output, "++(1)", [1], call7106);
                  var_output = opresult7109;
                  if7098 = GraceDone;
                }
                var if7110 = GraceDone;
                setLineNumber(767);    // compilenode member
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call7113 = callmethodChecked(this, "fieldsSection", []);
                var call7114 = callmethodChecked(call7113, "hasContent", []);
                if (Grace_isTrue(call7114)) {
                  setLineNumber(768);    // compilenode member
                  // call case 6: other requests
                  // call case 4: self request
                  onSelf = true;
                  var call7117 = callmethodChecked(this, "fieldsSection", []);
                  var call7118 = callmethodChecked(call7117, "alphabetize", []);
                  setLineNumber(769);    // compilenode member
                  // call case 6: other requests
                  // call case 4: self request
                  onSelf = true;
                  var call7121 = callmethodChecked(this, "fieldsSection", []);
                  var call7122 = callmethodChecked(call7121, "html", []);
                  var opresult7125 = callmethodChecked(var_output, "++(1)", [1], call7122);
                  var_output = opresult7125;
                  if7110 = GraceDone;
                }
                var if7126 = GraceDone;
                setLineNumber(771);    // compilenode member
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call7129 = callmethodChecked(this, "methodtypesSection", []);
                var call7130 = callmethodChecked(call7129, "hasContent", []);
                if (Grace_isTrue(call7130)) {
                  setLineNumber(772);    // compilenode member
                  // call case 6: other requests
                  // call case 4: self request
                  onSelf = true;
                  var call7133 = callmethodChecked(this, "methodtypesSection", []);
                  var call7134 = callmethodChecked(call7133, "alphabetize", []);
                  setLineNumber(773);    // compilenode member
                  // call case 6: other requests
                  // call case 4: self request
                  onSelf = true;
                  var call7137 = callmethodChecked(this, "methodtypesSection", []);
                  var call7138 = callmethodChecked(call7137, "html", []);
                  var opresult7141 = callmethodChecked(var_output, "++(1)", [1], call7138);
                  var_output = opresult7141;
                  if7126 = GraceDone;
                }
                var if7142 = GraceDone;
                setLineNumber(775);    // compilenode member
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call7145 = callmethodChecked(this, "typesSection", []);
                var call7146 = callmethodChecked(call7145, "hasContent", []);
                if (Grace_isTrue(call7146)) {
                  setLineNumber(776);    // compilenode member
                  // call case 6: other requests
                  // call case 4: self request
                  onSelf = true;
                  var call7149 = callmethodChecked(this, "typesSection", []);
                  var call7150 = callmethodChecked(call7149, "alphabetize", []);
                  setLineNumber(777);    // compilenode member
                  // call case 6: other requests
                  // call case 4: self request
                  onSelf = true;
                  var call7153 = callmethodChecked(this, "typesSection", []);
                  var call7154 = callmethodChecked(call7153, "html", []);
                  var opresult7157 = callmethodChecked(var_output, "++(1)", [1], call7154);
                  var_output = opresult7157;
                  if7142 = GraceDone;
                }
                var if7158 = GraceDone;
                setLineNumber(779);    // compilenode member
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call7161 = callmethodChecked(this, "classesSection", []);
                var call7162 = callmethodChecked(call7161, "hasContent", []);
                if (Grace_isTrue(call7162)) {
                  setLineNumber(780);    // compilenode member
                  // call case 6: other requests
                  // call case 4: self request
                  onSelf = true;
                  var call7165 = callmethodChecked(this, "classesSection", []);
                  var call7166 = callmethodChecked(call7165, "alphabetize", []);
                  setLineNumber(781);    // compilenode member
                  // call case 6: other requests
                  // call case 4: self request
                  onSelf = true;
                  var call7169 = callmethodChecked(this, "classesSection", []);
                  var call7170 = callmethodChecked(call7169, "html", []);
                  var opresult7173 = callmethodChecked(var_output, "++(1)", [1], call7170);
                  var_output = opresult7173;
                  if7158 = GraceDone;
                }
                var if7174 = GraceDone;
                setLineNumber(783);    // compilenode member
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call7177 = callmethodChecked(this, "methodsSection", []);
                var call7178 = callmethodChecked(call7177, "hasContent", []);
                if (Grace_isTrue(call7178)) {
                  setLineNumber(784);    // compilenode member
                  // call case 6: other requests
                  // call case 4: self request
                  onSelf = true;
                  var call7181 = callmethodChecked(this, "methodsSection", []);
                  var call7182 = callmethodChecked(call7181, "alphabetize", []);
                  setLineNumber(785);    // compilenode member
                  // call case 6: other requests
                  // call case 4: self request
                  onSelf = true;
                  var call7185 = callmethodChecked(this, "methodsSection", []);
                  var call7186 = callmethodChecked(call7185, "html", []);
                  var opresult7189 = callmethodChecked(var_output, "++(1)", [1], call7186);
                  var_output = opresult7189;
                  if7174 = GraceDone;
                }
                setLineNumber(787);    // compilenode member
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call7192 = callmethodChecked(this, "footerSection", []);
                var call7193 = callmethodChecked(call7192, "html", []);
                var opresult7196 = callmethodChecked(var_output, "++(1)", [1], call7193);
                var_output = opresult7196;
                setLineNumber(788);    // compilenode identifier
                // call case 6: other requests
                // call case 6: other requests
                // call case 3: self.outer request
                var call7200 = callmethodChecked(superDepth, "outer", [0]);
                var call7201 = callmethodChecked(call7200, "outer", []);
                onSelf = true;
                var call7202 = callmethodChecked(call7201, "autoindent(1)", [1], var_output);
                var_output = call7202;
                setLineNumber(789);    // compilenode identifier
                // call case 6: other requests
                var call7204 = callmethodChecked(var_outfile, "write(1)", [1], var_output);
                setLineNumber(790);    // compilenode member
                // call case 6: other requests
                var call7206 = callmethodChecked(var_outfile, "close", []);
                var if7207 = GraceDone;
                setLineNumber(791);    // compilenode member
                // call case 6: other requests
                var call7210 = callmethodChecked(var_settings, "verbosity", []);
                var opresult7212 = callmethodChecked(call7210, ">(1)", [1], new GraceNum(1));
                if (Grace_isTrue(opresult7212)) {
                  var string7213 = new GraceString(")");
                  // call case 6: other requests
                  var call7216 = callmethodChecked(var_sys, "elapsedTime", []);
                  var string7218 = new GraceString(" - file written (");
                  // call case 4: self request
                  onSelf = true;
                  var call7221 = callmethodChecked(this, "title", []);
                  var string7223 = new GraceString("On ");
                  var opresult7225 = callmethodChecked(string7223, "++(1)", [1], call7221);
                  var opresult7227 = callmethodChecked(opresult7225, "++(1)", [1], string7218);
                  var opresult7229 = callmethodChecked(opresult7227, "++(1)", [1], call7216);
                  var opresult7231 = callmethodChecked(opresult7229, "++(1)", [1], string7213);
                  var call7232 = Grace_print(opresult7231);
                  if7207 = call7232;
                }
                return if7207;
              };
              func6964.paramCounts = [0];
              obj6123.methods["generate"] = func6964;
              func6964.definitionLine = 751;
              func6964.definitionModule = "gracedoc";
              var func7233 = function(argcv) {    // method visitMethodType(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_o = arguments[curarg];
                curarg++;
                setModuleName("gracedoc");
                var if7234 = GraceDone;
                setLineNumber(795);    // compilenode member
                // call case 4: self request
                onSelf = true;
                var call7236 = callmethodChecked(this, "isOnTypePage", []);
                if (Grace_isTrue(call7236)) {
                  setLineNumber(796);    // compilenode string
                  var string7237 = new GraceString("<tr class='placeholder'><td><code>");
                  var var_t = string7237;
                  setLineNumber(797);    // compilenode string
                  var string7238 = new GraceString("");
                  var var_n = string7238;
                  setLineNumber(798);    // compilenode member
                  // call case 6: other requests
                  var call7241 = callmethodChecked(var_o, "signature", []);
                  var block7242 = new GraceBlock(this, 798, 1);
                  setLineNumber(1);    // compilenode identifier
                  block7242.real = function(var_part) {
                    setLineNumber(799);    // compilenode string
                    var string7243 = new GraceString("</span>");
                    // call case 6: other requests
                    var call7246 = callmethodChecked(var_part, "name", []);
                    var string7248 = new GraceString("<span class='method-name'>");
                    var opresult7251 = callmethodChecked(var_t, "++(1)", [1], string7248);
                    var opresult7253 = callmethodChecked(opresult7251, "++(1)", [1], call7246);
                    var opresult7255 = callmethodChecked(opresult7253, "++(1)", [1], string7243);
                    var_t = opresult7255;
                    setLineNumber(800);    // compilenode member
                    // call case 6: other requests
                    var call7257 = callmethodChecked(var_part, "name", []);
                    var opresult7260 = callmethodChecked(var_n, "++(1)", [1], call7257);
                    var_n = opresult7260;
                    var if7261 = GraceDone;
                    setLineNumber(801);    // compilenode member
                    // call case 6: other requests
                    // call case 6: other requests
                    var call7264 = callmethodChecked(var_o, "signature", []);
                    var call7265 = callmethodChecked(call7264, "last", []);
                    var opresult7268 = callmethodChecked(var_part, "\u2260(1)", [1], call7265);
                    if (Grace_isTrue(opresult7268)) {
                      var string7269 = new GraceString("()");
                      var opresult7272 = callmethodChecked(var_n, "++(1)", [1], string7269);
                      var_n = opresult7272;
                      if7261 = GraceDone;
                    }
                    var if7273 = GraceDone;
                    setLineNumber(802);    // compilenode member
                    // call case 6: other requests
                    // call case 6: other requests
                    var call7277 = callmethodChecked(var_part, "params", []);
                    var call7278 = callmethodChecked(call7277, "size", []);
                    var opresult7280 = callmethodChecked(call7278, ">(1)", [1], new GraceNum(0));
                    if (Grace_isTrue(opresult7280)) {
                      setLineNumber(803);    // compilenode string
                      var string7281 = new GraceString("(");
                      var opresult7284 = callmethodChecked(var_t, "++(1)", [1], string7281);
                      var_t = opresult7284;
                      setLineNumber(804);    // compilenode member
                      // call case 6: other requests
                      var call7287 = callmethodChecked(var_part, "params", []);
                      var block7288 = new GraceBlock(this, 804, 1);
                      setLineNumber(1);    // compilenode identifier
                      block7288.real = function(var_param) {
                        var if7289 = GraceDone;
                        setLineNumber(805);    // compilenode member
                        // call case 6: other requests
                        var call7292 = callmethodChecked(var_param, "dtype", []);
                        var opresult7294 = callmethodChecked(call7292, "\u2260(1)", [1], GraceFalse);
                        if (Grace_isTrue(opresult7294)) {
                          setLineNumber(806);    // compilenode string
                          var string7295 = new GraceString("</span>");
                          // call case 6: other requests
                          var call7298 = callmethodChecked(var_param, "nameString", []);
                          var string7300 = new GraceString("<span class='parameter-name'>");
                          var opresult7303 = callmethodChecked(var_t, "++(1)", [1], string7300);
                          var opresult7305 = callmethodChecked(opresult7303, "++(1)", [1], call7298);
                          var opresult7307 = callmethodChecked(opresult7305, "++(1)", [1], string7295);
                          var_t = opresult7307;
                          setLineNumber(807);    // compilenode string
                          var string7308 = new GraceString(":");
                          var opresult7311 = callmethodChecked(var_t, "++(1)", [1], string7308);
                          var_t = opresult7311;
                          var if7312 = GraceDone;
                          setLineNumber(808);    // compilenode string
                          var string7313 = new GraceString("identifier");
                          // call case 6: other requests
                          // call case 6: other requests
                          var call7317 = callmethodChecked(var_param, "dtype", []);
                          var call7318 = callmethodChecked(call7317, "kind", []);
                          var opresult7320 = callmethodChecked(call7318, "==(1)", [1], string7313);
                          if (Grace_isTrue(opresult7320)) {
                            setLineNumber(809);    // compilenode member
                            // call case 6: other requests
                            // call case 6: other requests
                            var call7324 = callmethodChecked(var_param, "dtype", []);
                            var call7325 = callmethodChecked(call7324, "value", []);
                            // call case 4: self request
                            onSelf = true;
                            var call7326 = callmethodChecked(this, "getTypeLink(1)", [1], call7325);
                            var opresult7329 = callmethodChecked(var_t, "++(1)", [1], call7326);
                            var_t = opresult7329;
                            if7312 = GraceDone;
                          } else {
                            var if7330 = GraceDone;
                            setLineNumber(810);    // compilenode string
                            var string7331 = new GraceString("generic");
                            // call case 6: other requests
                            // call case 6: other requests
                            var call7335 = callmethodChecked(var_param, "dtype", []);
                            var call7336 = callmethodChecked(call7335, "kind", []);
                            var opresult7338 = callmethodChecked(call7336, "==(1)", [1], string7331);
                            if (Grace_isTrue(opresult7338)) {
                              setLineNumber(811);    // compilenode string
                              var string7339 = new GraceString("&lt;");
                              // call case 6: other requests
                              // call case 6: other requests
                              // call case 6: other requests
                              var call7345 = callmethodChecked(var_param, "dtype", []);
                              var call7346 = callmethodChecked(call7345, "value", []);
                              var call7347 = callmethodChecked(call7346, "value", []);
                              // call case 4: self request
                              onSelf = true;
                              var call7348 = callmethodChecked(this, "getTypeLink(1)", [1], call7347);
                              var opresult7351 = callmethodChecked(var_t, "++(1)", [1], call7348);
                              var opresult7353 = callmethodChecked(opresult7351, "++(1)", [1], string7339);
                              var_t = opresult7353;
                              setLineNumber(812);    // compilenode block
                              var block7355 = new GraceBlock(this, 812, 1);
                              setLineNumber(1);    // compilenode identifier
                              block7355.real = function(var_each) {
                                setLineNumber(812);    // compilenode string
                                var string7356 = new GraceString("");
                                // call case 6: other requests
                                var call7360 = callmethodChecked(var_each, "value", []);
                                // call case 4: self request
                                onSelf = true;
                                var call7361 = callmethodChecked(this, "getTypeLink(1)", [1], call7360);
                                var string7363 = new GraceString("");
                                var string7366 = new GraceString("");
                                var opresult7368 = callmethodChecked(string7366, "++(1)", [1], var_t);
                                var opresult7370 = callmethodChecked(opresult7368, "++(1)", [1], string7363);
                                var opresult7372 = callmethodChecked(opresult7370, "++(1)", [1], call7361);
                                var opresult7374 = callmethodChecked(opresult7372, "++(1)", [1], string7356);
                                var_t = opresult7374;
                                return GraceDone;
                              };
                              var block7375 = new GraceBlock(this, 812, 0);
                              block7375.real = function() {
                                var string7376 = new GraceString(", ");
                                var opresult7379 = callmethodChecked(var_t, "++(1)", [1], string7376);
                                var_t = opresult7379;
                                return GraceDone;
                              };
                              // call case 6: other requests
                              // call case 6: other requests
                              // call case 6: other requests
                              var call7382 = callmethodChecked(var_param, "dtype", []);
                              var call7383 = callmethodChecked(call7382, "args", []);
                              var call7384 = callmethodChecked(call7383, "do(1)separatedBy(1)", [1, 1], block7355, block7375);
                              setLineNumber(813);    // compilenode string
                              var string7385 = new GraceString("&gt;");
                              var opresult7388 = callmethodChecked(var_t, "++(1)", [1], string7385);
                              var_t = opresult7388;
                              if7330 = GraceDone;
                            }
                            if7312 = if7330;
                          }
                          if7289 = if7312;
                        } else {
                          setLineNumber(816);    // compilenode string
                          var string7389 = new GraceString("</span>");
                          // call case 6: other requests
                          var call7392 = callmethodChecked(var_param, "nameString", []);
                          var string7394 = new GraceString("<span class='parameter-name'>");
                          var opresult7397 = callmethodChecked(var_t, "++(1)", [1], string7394);
                          var opresult7399 = callmethodChecked(opresult7397, "++(1)", [1], call7392);
                          var opresult7401 = callmethodChecked(opresult7399, "++(1)", [1], string7389);
                          var_t = opresult7401;
                          if7289 = GraceDone;
                        }
                        var if7402 = GraceDone;
                        setLineNumber(818);    // compilenode member
                        // call case 6: other requests
                        // call case 6: other requests
                        var call7405 = callmethodChecked(var_part, "params", []);
                        var call7406 = callmethodChecked(call7405, "last", []);
                        var opresult7409 = callmethodChecked(var_param, "\u2260(1)", [1], call7406);
                        // call case 6: other requests
                        // call case 6: other requests
                        var call7414 = callmethodChecked(var_part, "params", []);
                        var call7415 = callmethodChecked(call7414, "size", []);
                        var opresult7417 = callmethodChecked(call7415, ">(1)", [1], new GraceNum(1));
                        var opresult7419 = callmethodChecked(opresult7417, "&&(1)", [1], opresult7409);
                        if (Grace_isTrue(opresult7419)) {
                          setLineNumber(819);    // compilenode string
                          var string7420 = new GraceString(", ");
                          var opresult7423 = callmethodChecked(var_t, "++(1)", [1], string7420);
                          var_t = opresult7423;
                          if7402 = GraceDone;
                        }
                        return if7402;
                      };
                      // call case 5: prelude request
                      var call7424 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call7287, block7288);
                      setLineNumber(822);    // compilenode string
                      var string7425 = new GraceString(")");
                      var opresult7428 = callmethodChecked(var_t, "++(1)", [1], string7425);
                      var_t = opresult7428;
                      if7273 = GraceDone;
                    }
                    return if7273;
                  };
                  // call case 5: prelude request
                  var call7429 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call7241, block7242);
                  setLineNumber(825);    // compilenode string
                  var string7430 = new GraceString("</code></td>");
                  var opresult7433 = callmethodChecked(var_t, "++(1)", [1], string7430);
                  var_t = opresult7433;
                  setLineNumber(826);    // compilenode string
                  var string7434 = new GraceString("<td><code>");
                  var opresult7437 = callmethodChecked(var_t, "++(1)", [1], string7434);
                  var_t = opresult7437;
                  var if7438 = GraceDone;
                  setLineNumber(827);    // compilenode member
                  // call case 6: other requests
                  var call7441 = callmethodChecked(var_o, "rtype", []);
                  var opresult7443 = callmethodChecked(call7441, "\u2260(1)", [1], GraceFalse);
                  if (Grace_isTrue(opresult7443)) {
                    var if7444 = GraceDone;
                    setLineNumber(828);    // compilenode string
                    var string7445 = new GraceString("identifier");
                    // call case 6: other requests
                    // call case 6: other requests
                    var call7449 = callmethodChecked(var_o, "rtype", []);
                    var call7450 = callmethodChecked(call7449, "kind", []);
                    var opresult7452 = callmethodChecked(call7450, "==(1)", [1], string7445);
                    if (Grace_isTrue(opresult7452)) {
                      setLineNumber(829);    // compilenode member
                      // call case 6: other requests
                      // call case 6: other requests
                      var call7456 = callmethodChecked(var_o, "rtype", []);
                      var call7457 = callmethodChecked(call7456, "value", []);
                      // call case 4: self request
                      onSelf = true;
                      var call7458 = callmethodChecked(this, "getTypeLink(1)", [1], call7457);
                      var opresult7461 = callmethodChecked(var_t, "++(1)", [1], call7458);
                      var_t = opresult7461;
                      if7444 = GraceDone;
                    } else {
                      var if7462 = GraceDone;
                      setLineNumber(830);    // compilenode string
                      var string7463 = new GraceString("generic");
                      // call case 6: other requests
                      // call case 6: other requests
                      var call7467 = callmethodChecked(var_o, "rtype", []);
                      var call7468 = callmethodChecked(call7467, "kind", []);
                      var opresult7470 = callmethodChecked(call7468, "==(1)", [1], string7463);
                      if (Grace_isTrue(opresult7470)) {
                        setLineNumber(831);    // compilenode string
                        var string7471 = new GraceString("&lt;");
                        // call case 6: other requests
                        // call case 6: other requests
                        // call case 6: other requests
                        var call7477 = callmethodChecked(var_o, "rtype", []);
                        var call7478 = callmethodChecked(call7477, "value", []);
                        var call7479 = callmethodChecked(call7478, "value", []);
                        // call case 4: self request
                        onSelf = true;
                        var call7480 = callmethodChecked(this, "getTypeLink(1)", [1], call7479);
                        var opresult7483 = callmethodChecked(var_t, "++(1)", [1], call7480);
                        var opresult7485 = callmethodChecked(opresult7483, "++(1)", [1], string7471);
                        var_t = opresult7485;
                        setLineNumber(832);    // compilenode block
                        var block7487 = new GraceBlock(this, 832, 1);
                        setLineNumber(1);    // compilenode identifier
                        block7487.real = function(var_each) {
                          setLineNumber(832);    // compilenode string
                          var string7488 = new GraceString("");
                          // call case 6: other requests
                          var call7492 = callmethodChecked(var_each, "value", []);
                          // call case 4: self request
                          onSelf = true;
                          var call7493 = callmethodChecked(this, "getTypeLink(1)", [1], call7492);
                          var string7495 = new GraceString("");
                          var string7498 = new GraceString("");
                          var opresult7500 = callmethodChecked(string7498, "++(1)", [1], var_t);
                          var opresult7502 = callmethodChecked(opresult7500, "++(1)", [1], string7495);
                          var opresult7504 = callmethodChecked(opresult7502, "++(1)", [1], call7493);
                          var opresult7506 = callmethodChecked(opresult7504, "++(1)", [1], string7488);
                          var_t = opresult7506;
                          return GraceDone;
                        };
                        var block7507 = new GraceBlock(this, 832, 0);
                        block7507.real = function() {
                          var string7508 = new GraceString(", ");
                          var opresult7511 = callmethodChecked(var_t, "++(1)", [1], string7508);
                          var_t = opresult7511;
                          return GraceDone;
                        };
                        // call case 6: other requests
                        // call case 6: other requests
                        // call case 6: other requests
                        var call7514 = callmethodChecked(var_o, "rtype", []);
                        var call7515 = callmethodChecked(call7514, "args", []);
                        var call7516 = callmethodChecked(call7515, "do(1)separatedBy(1)", [1, 1], block7487, block7507);
                        setLineNumber(833);    // compilenode string
                        var string7517 = new GraceString("&gt;");
                        var opresult7520 = callmethodChecked(var_t, "++(1)", [1], string7517);
                        var_t = opresult7520;
                        if7462 = GraceDone;
                      }
                      if7444 = if7462;
                    }
                    if7438 = if7444;
                  } else {
                    setLineNumber(836);    // compilenode string
                    var string7521 = new GraceString("Done");
                    var opresult7524 = callmethodChecked(var_t, "++(1)", [1], string7521);
                    var_t = opresult7524;
                    if7438 = GraceDone;
                  }
                  setLineNumber(838);    // compilenode string
                  var string7525 = new GraceString("</code></td></tr>");
                  var opresult7528 = callmethodChecked(var_t, "++(1)", [1], string7525);
                  var_t = opresult7528;
                  setLineNumber(839);    // compilenode string
                  var string7530 = new GraceString("description");
                  // call case 6: other requests
                  // call case 6: other requests
                  // call case 3: self.outer request
                  var call7533 = callmethodChecked(superDepth, "outer", [0]);
                  var call7534 = callmethodChecked(call7533, "outer", []);
                  onSelf = true;
                  var call7535 = callmethodChecked(call7534, "formatComments(1)rowClass(1)colspan(1)", [1, 1, 1], var_o, string7530, new GraceNum(2));
                  var opresult7538 = callmethodChecked(var_t, "++(1)", [1], call7535);
                  var_t = opresult7538;
                  setLineNumber(840);    // compilenode identifier
                  // call case 6: other requests
                  // call case 4: self request
                  onSelf = true;
                  var call7541 = callmethodChecked(this, "methodtypesSection", []);
                  var call7542 = callmethodChecked(call7541, "addElement(1)withText(1)", [1, 1], var_n, var_t);
                  setLineNumber(841);    // compilenode identifier
                  return GraceFalse;
                } else {
                  setLineNumber(843);    // compilenode identifier
                  return GraceTrue;
                }
                setLineNumber(795);    // return value
                if (!Grace_isTrue(callmethod(var_Boolean, "match(1)", [1], if7234)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitMethodType(_) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return if7234;
              };
              func7233.paramCounts = [1];
              obj6123.methods["visitMethodType(1)"] = func7233;
              func7233.definitionLine = 794;
              func7233.definitionModule = "gracedoc";
              var func7543 = function(argcv) {    // method visitTypeDec(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_o = arguments[curarg];
                curarg++;
                setModuleName("gracedoc");
                var if7544 = GraceDone;
                setLineNumber(848);    // compilenode member
                // call case 4: self request
                onSelf = true;
                var call7547 = callmethodChecked(this, "isOnTypePage", []);
                var opresult7549 = callmethodChecked(call7547, "==(1)", [1], GraceFalse);
                if (Grace_isTrue(opresult7549)) {
                  setLineNumber(849);    // compilenode string
                  var string7550 = new GraceString("<tr class='placeholder'>");
                  var var_t = string7550;
                  setLineNumber(850);    // compilenode member
                  // call case 6: other requests
                  // call case 6: other requests
                  var call7553 = callmethodChecked(var_o, "name", []);
                  var call7554 = callmethodChecked(call7553, "value", []);
                  var var_n = call7554;
                  setLineNumber(851);    // compilenode string
                  var string7555 = new GraceString("");
                  // call case 6: other requests
                  // call case 6: other requests
                  var call7560 = callmethodChecked(var_o, "name", []);
                  var call7561 = callmethodChecked(call7560, "value", []);
                  // call case 4: self request
                  onSelf = true;
                  var call7562 = callmethodChecked(this, "getTypeLink(1)", [1], call7561);
                  var string7564 = new GraceString("<td class='type-name'>");
                  var opresult7566 = callmethodChecked(string7564, "++(1)", [1], call7562);
                  var opresult7568 = callmethodChecked(opresult7566, "++(1)", [1], string7555);
                  var opresult7571 = callmethodChecked(var_t, "++(1)", [1], opresult7568);
                  var_t = opresult7571;
                  var if7572 = GraceDone;
                  setLineNumber(852);    // compilenode member
                  // call case 6: other requests
                  var call7574 = callmethodChecked(var_o, "typeParams", []);
                  var opresult7577 = callmethodChecked(GraceFalse, "\u2260(1)", [1], call7574);
                  if (Grace_isTrue(opresult7577)) {
                    setLineNumber(853);    // compilenode string
                    var string7578 = new GraceString("&lt;");
                    var opresult7581 = callmethodChecked(var_t, "++(1)", [1], string7578);
                    var_t = opresult7581;
                    setLineNumber(854);    // compilenode member
                    // call case 6: other requests
                    // call case 6: other requests
                    var call7585 = callmethodChecked(var_o, "typeParams", []);
                    var call7586 = callmethodChecked(call7585, "params", []);
                    var block7587 = new GraceBlock(this, 854, 1);
                    setLineNumber(1);    // compilenode identifier
                    block7587.real = function(var_g) {
                      setLineNumber(855);    // compilenode member
                      // call case 6: other requests
                      var call7589 = callmethodChecked(var_g, "nameString", []);
                      var opresult7592 = callmethodChecked(var_t, "++(1)", [1], call7589);
                      var_t = opresult7592;
                      var if7593 = GraceDone;
                      setLineNumber(856);    // compilenode member
                      // call case 6: other requests
                      // call case 6: other requests
                      // call case 6: other requests
                      var call7597 = callmethodChecked(var_o, "typeParams", []);
                      var call7598 = callmethodChecked(call7597, "params", []);
                      var call7599 = callmethodChecked(call7598, "last", []);
                      var opresult7602 = callmethodChecked(var_g, "\u2260(1)", [1], call7599);
                      if (Grace_isTrue(opresult7602)) {
                        var string7603 = new GraceString(", ");
                        var opresult7606 = callmethodChecked(var_t, "++(1)", [1], string7603);
                        var_t = opresult7606;
                        if7593 = GraceDone;
                      }
                      return if7593;
                    };
                    // call case 5: prelude request
                    var call7607 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call7586, block7587);
                    setLineNumber(858);    // compilenode string
                    var string7608 = new GraceString("&gt;");
                    var opresult7611 = callmethodChecked(var_t, "++(1)", [1], string7608);
                    var_t = opresult7611;
                    if7572 = GraceDone;
                  }
                  setLineNumber(860);    // compilenode string
                  var string7612 = new GraceString("</td></tr>");
                  var opresult7615 = callmethodChecked(var_t, "++(1)", [1], string7612);
                  var_t = opresult7615;
                  setLineNumber(862);    // compilenode string
                  var string7617 = new GraceString("");
                  // call case 6: other requests
                  // call case 6: other requests
                  var call7621 = callmethodChecked(var_o, "name", []);
                  var call7622 = callmethodChecked(call7621, "value", []);
                  var string7624 = new GraceString("");
                  var opresult7626 = callmethodChecked(string7624, "++(1)", [1], call7622);
                  var opresult7628 = callmethodChecked(opresult7626, "++(1)", [1], string7617);
                  var string7629 = new GraceString("");
                  // call case 4: self request
                  onSelf = true;
                  var call7632 = callmethodChecked(this, "outdir", []);
                  var string7634 = new GraceString("");
                  var opresult7636 = callmethodChecked(string7634, "++(1)", [1], call7632);
                  var opresult7638 = callmethodChecked(opresult7636, "++(1)", [1], string7629);
                  var string7639 = new GraceString("type");
                  // call case 6: other requests
                  var call7640 = callmethodChecked(var_graceDocVisitor, "createFrom(1)outTo(1)as(1)", [1, 1, 1], opresult7628, opresult7638, string7639);
                  var var_typeVis = call7640;
                  setLineNumber(863);    // compilenode identifier
                  // call case 6: other requests
                  var call7642 = callmethodChecked(var_o, "accept(1)", [1], var_typeVis);
                  setLineNumber(864);    // compilenode member
                  // call case 6: other requests
                  var call7644 = callmethodChecked(var_typeVis, "generate", []);
                  setLineNumber(865);    // compilenode string
                  var string7646 = new GraceString("description");
                  // call case 6: other requests
                  // call case 6: other requests
                  // call case 3: self.outer request
                  var call7649 = callmethodChecked(superDepth, "outer", [0]);
                  var call7650 = callmethodChecked(call7649, "outer", []);
                  onSelf = true;
                  var call7651 = callmethodChecked(call7650, "formatComments(1)rowClass(1)colspan(1)", [1, 1, 1], var_o, string7646, new GraceNum(1));
                  var opresult7654 = callmethodChecked(var_t, "++(1)", [1], call7651);
                  var_t = opresult7654;
                  setLineNumber(866);    // compilenode identifier
                  // call case 6: other requests
                  // call case 4: self request
                  onSelf = true;
                  var call7657 = callmethodChecked(this, "typesSection", []);
                  var call7658 = callmethodChecked(call7657, "addElement(1)withText(1)", [1, 1], var_n, var_t);
                  setLineNumber(867);    // compilenode identifier
                  return GraceFalse;
                } else {
                  setLineNumber(869);    // compilenode string
                  var string7659 = new GraceString("");
                  // call case 6: other requests
                  // call case 6: other requests
                  var call7663 = callmethodChecked(var_o, "name", []);
                  var call7664 = callmethodChecked(call7663, "value", []);
                  var string7666 = new GraceString("<span class='headline'><b><code>");
                  var opresult7668 = callmethodChecked(string7666, "++(1)", [1], call7664);
                  var opresult7670 = callmethodChecked(opresult7668, "++(1)", [1], string7659);
                  var var_t = opresult7670;
                  var if7671 = GraceDone;
                  setLineNumber(870);    // compilenode member
                  // call case 6: other requests
                  var call7673 = callmethodChecked(var_o, "typeParams", []);
                  var opresult7676 = callmethodChecked(GraceFalse, "\u2260(1)", [1], call7673);
                  if (Grace_isTrue(opresult7676)) {
                    setLineNumber(871);    // compilenode string
                    var string7677 = new GraceString("&lt;");
                    var opresult7680 = callmethodChecked(var_t, "++(1)", [1], string7677);
                    var_t = opresult7680;
                    setLineNumber(872);    // compilenode member
                    // call case 6: other requests
                    // call case 6: other requests
                    var call7684 = callmethodChecked(var_o, "typeParams", []);
                    var call7685 = callmethodChecked(call7684, "params", []);
                    var block7686 = new GraceBlock(this, 872, 1);
                    setLineNumber(1);    // compilenode identifier
                    block7686.real = function(var_g) {
                      setLineNumber(873);    // compilenode member
                      // call case 6: other requests
                      var call7688 = callmethodChecked(var_g, "nameString", []);
                      var opresult7691 = callmethodChecked(var_t, "++(1)", [1], call7688);
                      var_t = opresult7691;
                      var if7692 = GraceDone;
                      setLineNumber(874);    // compilenode member
                      // call case 6: other requests
                      // call case 6: other requests
                      // call case 6: other requests
                      var call7696 = callmethodChecked(var_o, "typeParams", []);
                      var call7697 = callmethodChecked(call7696, "params", []);
                      var call7698 = callmethodChecked(call7697, "last", []);
                      var opresult7701 = callmethodChecked(var_g, "\u2260(1)", [1], call7698);
                      if (Grace_isTrue(opresult7701)) {
                        var string7702 = new GraceString(", ");
                        var opresult7705 = callmethodChecked(var_t, "++(1)", [1], string7702);
                        var_t = opresult7705;
                        if7692 = GraceDone;
                      }
                      return if7692;
                    };
                    // call case 5: prelude request
                    var call7706 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call7685, block7686);
                    setLineNumber(876);    // compilenode string
                    var string7707 = new GraceString("&gt;");
                    var opresult7710 = callmethodChecked(var_t, "++(1)", [1], string7707);
                    var_t = opresult7710;
                    if7671 = GraceDone;
                  }
                  setLineNumber(878);    // compilenode string
                  var string7711 = new GraceString("</b> = ");
                  var opresult7714 = callmethodChecked(var_t, "++(1)", [1], string7711);
                  var_t = opresult7714;
                  setLineNumber(879);    // compilenode string
                  var string7715 = new GraceString("");
                  var var_temp = string7715;
                  setLineNumber(880);    // compilenode array
                  var array7717 = new Lineup([]);
                  // call case 5: prelude request
                  var call7718 = callmethodChecked(var_prelude, "list(1)", [1], array7717);
                  var var_ops = call7718;
                  setLineNumber(881);    // compilenode array
                  var array7720 = new Lineup([]);
                  // call case 5: prelude request
                  var call7721 = callmethodChecked(var_prelude, "list(1)", [1], array7720);
                  var var_tps = call7721;
                  setLineNumber(882);    // compilenode member
                  // call case 6: other requests
                  var call7723 = callmethodChecked(var_o, "value", []);
                  var var_node = call7723;
                  var if7724 = GraceDone;
                  setLineNumber(884);    // compilenode string
                  var string7725 = new GraceString("op");
                  // call case 6: other requests
                  var call7728 = callmethodChecked(var_node, "kind", []);
                  var opresult7730 = callmethodChecked(call7728, "==(1)", [1], string7725);
                  if (Grace_isTrue(opresult7730)) {
                    setLineNumber(885);    // compilenode block
                    var block7732 = new GraceBlock(this, 885, 0);
                    block7732.real = function() {
                      var string7733 = new GraceString("op");
                      // call case 6: other requests
                      var call7736 = callmethodChecked(var_node, "kind", []);
                      var opresult7738 = callmethodChecked(call7736, "==(1)", [1], string7733);
                      return opresult7738;
                    };
                    var block7739 = new GraceBlock(this, 885, 0);
                    block7739.real = function() {
                      setLineNumber(886);    // compilenode member
                      // call case 6: other requests
                      var call7742 = callmethodChecked(var_node, "value", []);
                      // call case 6: other requests
                      var call7743 = callmethodChecked(var_ops, "push(1)", [1], call7742);
                      var if7744 = GraceDone;
                      setLineNumber(887);    // compilenode string
                      var string7745 = new GraceString("identifier");
                      // call case 6: other requests
                      // call case 6: other requests
                      var call7749 = callmethodChecked(var_node, "right", []);
                      var call7750 = callmethodChecked(call7749, "kind", []);
                      var opresult7752 = callmethodChecked(call7750, "==(1)", [1], string7745);
                      var string7754 = new GraceString("identifier");
                      // call case 6: other requests
                      // call case 6: other requests
                      var call7758 = callmethodChecked(var_node, "left", []);
                      var call7759 = callmethodChecked(call7758, "kind", []);
                      var opresult7761 = callmethodChecked(call7759, "==(1)", [1], string7754);
                      var opresult7763 = callmethodChecked(opresult7761, "&&(1)", [1], opresult7752);
                      if (Grace_isTrue(opresult7763)) {
                        setLineNumber(888);    // compilenode string
                        var string7764 = new GraceString("");
                        // call case 6: other requests
                        // call case 6: other requests
                        var call7769 = callmethodChecked(var_node, "right", []);
                        var call7770 = callmethodChecked(call7769, "value", []);
                        // call case 4: self request
                        onSelf = true;
                        var call7771 = callmethodChecked(this, "getTypeLink(1)", [1], call7770);
                        var string7773 = new GraceString(" ");
                        // call case 6: other requests
                        var call7776 = callmethodChecked(var_ops, "pop", []);
                        var string7778 = new GraceString(" ");
                        // call case 6: other requests
                        // call case 6: other requests
                        var call7783 = callmethodChecked(var_node, "left", []);
                        var call7784 = callmethodChecked(call7783, "value", []);
                        // call case 4: self request
                        onSelf = true;
                        var call7785 = callmethodChecked(this, "getTypeLink(1)", [1], call7784);
                        var string7787 = new GraceString("");
                        var opresult7789 = callmethodChecked(string7787, "++(1)", [1], call7785);
                        var opresult7791 = callmethodChecked(opresult7789, "++(1)", [1], string7778);
                        var opresult7793 = callmethodChecked(opresult7791, "++(1)", [1], call7776);
                        var opresult7795 = callmethodChecked(opresult7793, "++(1)", [1], string7773);
                        var opresult7797 = callmethodChecked(opresult7795, "++(1)", [1], call7771);
                        var opresult7799 = callmethodChecked(opresult7797, "++(1)", [1], string7764);
                        var_temp = opresult7799;
                        if7744 = GraceDone;
                      } else {
                        var if7800 = GraceDone;
                        setLineNumber(889);    // compilenode string
                        var string7801 = new GraceString("identifier");
                        // call case 6: other requests
                        // call case 6: other requests
                        var call7805 = callmethodChecked(var_node, "right", []);
                        var call7806 = callmethodChecked(call7805, "kind", []);
                        var opresult7808 = callmethodChecked(call7806, "==(1)", [1], string7801);
                        if (Grace_isTrue(opresult7808)) {
                          setLineNumber(890);    // compilenode member
                          // call case 6: other requests
                          // call case 6: other requests
                          var call7812 = callmethodChecked(var_node, "right", []);
                          var call7813 = callmethodChecked(call7812, "value", []);
                          // call case 6: other requests
                          var call7814 = callmethodChecked(var_tps, "push(1)", [1], call7813);
                          if7800 = call7814;
                        } else {
                          var if7815 = GraceDone;
                          setLineNumber(891);    // compilenode string
                          var string7816 = new GraceString("identifier");
                          // call case 6: other requests
                          // call case 6: other requests
                          var call7820 = callmethodChecked(var_node, "left", []);
                          var call7821 = callmethodChecked(call7820, "kind", []);
                          var opresult7823 = callmethodChecked(call7821, "==(1)", [1], string7816);
                          if (Grace_isTrue(opresult7823)) {
                            setLineNumber(892);    // compilenode string
                            var string7824 = new GraceString("");
                            // call case 6: other requests
                            var call7827 = callmethodChecked(var_ops, "pop", []);
                            var string7829 = new GraceString(" ");
                            // call case 6: other requests
                            // call case 6: other requests
                            var call7834 = callmethodChecked(var_node, "left", []);
                            var call7835 = callmethodChecked(call7834, "value", []);
                            // call case 4: self request
                            onSelf = true;
                            var call7836 = callmethodChecked(this, "getTypeLink(1)", [1], call7835);
                            var string7838 = new GraceString("");
                            var opresult7840 = callmethodChecked(string7838, "++(1)", [1], call7836);
                            var opresult7842 = callmethodChecked(opresult7840, "++(1)", [1], string7829);
                            var opresult7844 = callmethodChecked(opresult7842, "++(1)", [1], call7827);
                            var opresult7846 = callmethodChecked(opresult7844, "++(1)", [1], string7824);
                            var_temp = opresult7846;
                            if7815 = GraceDone;
                          } else {
                            var if7847 = GraceDone;
                            setLineNumber(893);    // compilenode string
                            var string7848 = new GraceString("member");
                            // call case 6: other requests
                            // call case 6: other requests
                            var call7852 = callmethodChecked(var_node, "left", []);
                            var call7853 = callmethodChecked(call7852, "kind", []);
                            var opresult7855 = callmethodChecked(call7853, "==(1)", [1], string7848);
                            if (Grace_isTrue(opresult7855)) {
                              setLineNumber(894);    // compilenode string
                              var string7856 = new GraceString("");
                              // call case 6: other requests
                              var call7859 = callmethodChecked(var_ops, "pop", []);
                              var string7861 = new GraceString(" ");
                              var opresult7863 = callmethodChecked(string7861, "++(1)", [1], call7859);
                              var opresult7865 = callmethodChecked(opresult7863, "++(1)", [1], string7856);
                              var string7868 = new GraceString("");
                              // call case 6: other requests
                              // call case 6: other requests
                              var call7872 = callmethodChecked(var_node, "left", []);
                              var call7873 = callmethodChecked(call7872, "value", []);
                              var string7875 = new GraceString(".");
                              // call case 6: other requests
                              // call case 6: other requests
                              // call case 6: other requests
                              var call7880 = callmethodChecked(var_node, "left", []);
                              var call7881 = callmethodChecked(call7880, "receiver", []);
                              var call7882 = callmethodChecked(call7881, "value", []);
                              var string7884 = new GraceString("");
                              var opresult7886 = callmethodChecked(string7884, "++(1)", [1], call7882);
                              var opresult7888 = callmethodChecked(opresult7886, "++(1)", [1], string7875);
                              var opresult7890 = callmethodChecked(opresult7888, "++(1)", [1], call7873);
                              var opresult7892 = callmethodChecked(opresult7890, "++(1)", [1], string7868);
                              // call case 4: self request
                              onSelf = true;
                              var call7893 = callmethodChecked(this, "getTypeLink(1)", [1], opresult7892);
                              var opresult7895 = callmethodChecked(call7893, "++(1)", [1], opresult7865);
                              var_temp = opresult7895;
                              if7847 = GraceDone;
                            } else {
                              var if7896 = GraceDone;
                              setLineNumber(895);    // compilenode string
                              var string7897 = new GraceString("member");
                              // call case 6: other requests
                              // call case 6: other requests
                              var call7901 = callmethodChecked(var_node, "right", []);
                              var call7902 = callmethodChecked(call7901, "kind", []);
                              var opresult7904 = callmethodChecked(call7902, "==(1)", [1], string7897);
                              if (Grace_isTrue(opresult7904)) {
                                setLineNumber(896);    // compilenode string
                                var string7906 = new GraceString("");
                                // call case 6: other requests
                                // call case 6: other requests
                                var call7910 = callmethodChecked(var_node, "left", []);
                                var call7911 = callmethodChecked(call7910, "value", []);
                                var string7913 = new GraceString(".");
                                // call case 6: other requests
                                // call case 6: other requests
                                // call case 6: other requests
                                var call7918 = callmethodChecked(var_node, "left", []);
                                var call7919 = callmethodChecked(call7918, "receiver", []);
                                var call7920 = callmethodChecked(call7919, "value", []);
                                var string7922 = new GraceString("");
                                var opresult7924 = callmethodChecked(string7922, "++(1)", [1], call7920);
                                var opresult7926 = callmethodChecked(opresult7924, "++(1)", [1], string7913);
                                var opresult7928 = callmethodChecked(opresult7926, "++(1)", [1], call7911);
                                var opresult7930 = callmethodChecked(opresult7928, "++(1)", [1], string7906);
                                // call case 6: other requests
                                var call7931 = callmethodChecked(var_tps, "push(1)", [1], opresult7930);
                                if7896 = call7931;
                              }
                              if7847 = if7896;
                            }
                            if7815 = if7847;
                          }
                          if7800 = if7815;
                        }
                        if7744 = if7800;
                      }
                      setLineNumber(898);    // compilenode member
                      // call case 6: other requests
                      var call7933 = callmethodChecked(var_node, "left", []);
                      var_node = call7933;
                      return GraceDone;
                    };
                    // call case 5: prelude request
                    var call7934 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block7732, block7739);
                    setLineNumber(900);    // compilenode block
                    var block7936 = new GraceBlock(this, 900, 0);
                    block7936.real = function() {
                      // call case 6: other requests
                      var call7939 = callmethodChecked(var_ops, "size", []);
                      var opresult7941 = callmethodChecked(call7939, ">(1)", [1], new GraceNum(0));
                      // call case 6: other requests
                      var call7945 = callmethodChecked(var_tps, "size", []);
                      var opresult7947 = callmethodChecked(call7945, ">(1)", [1], new GraceNum(0));
                      var opresult7949 = callmethodChecked(opresult7947, "&&(1)", [1], opresult7941);
                      return opresult7949;
                    };
                    var block7950 = new GraceBlock(this, 900, 0);
                    block7950.real = function() {
                      setLineNumber(901);    // compilenode member
                      // call case 6: other requests
                      var call7952 = callmethodChecked(var_tps, "pop", []);
                      var var_p = call7952;
                      setLineNumber(902);    // compilenode string
                      var string7953 = new GraceString("");
                      // call case 6: other requests
                      var call7957 = callmethodChecked(var_p, "value", []);
                      // call case 4: self request
                      onSelf = true;
                      var call7958 = callmethodChecked(this, "getTypeLink(1)", [1], call7957);
                      var string7960 = new GraceString(" ");
                      // call case 6: other requests
                      var call7963 = callmethodChecked(var_ops, "pop", []);
                      var string7965 = new GraceString(" ");
                      var string7968 = new GraceString("");
                      var opresult7970 = callmethodChecked(string7968, "++(1)", [1], var_temp);
                      var opresult7972 = callmethodChecked(opresult7970, "++(1)", [1], string7965);
                      var opresult7974 = callmethodChecked(opresult7972, "++(1)", [1], call7963);
                      var opresult7976 = callmethodChecked(opresult7974, "++(1)", [1], string7960);
                      var opresult7978 = callmethodChecked(opresult7976, "++(1)", [1], call7958);
                      var opresult7980 = callmethodChecked(opresult7978, "++(1)", [1], string7953);
                      var_temp = opresult7980;
                      return GraceDone;
                    };
                    // call case 5: prelude request
                    var call7981 = callmethodChecked(var_prelude, "while(1)do(1)", [1, 1], block7936, block7950);
                    var if7982 = GraceDone;
                    setLineNumber(904);    // compilenode member
                    // call case 6: other requests
                    var call7985 = callmethodChecked(var_ops, "size", []);
                    var opresult7987 = callmethodChecked(call7985, ">(1)", [1], new GraceNum(0));
                    if (Grace_isTrue(opresult7987)) {
                      setLineNumber(905);    // compilenode string
                      var string7988 = new GraceString("");
                      // call case 6: other requests
                      var call7991 = callmethodChecked(var_ops, "pop", []);
                      var string7993 = new GraceString(" ");
                      var string7996 = new GraceString("");
                      var opresult7998 = callmethodChecked(string7996, "++(1)", [1], var_temp);
                      var opresult8000 = callmethodChecked(opresult7998, "++(1)", [1], string7993);
                      var opresult8002 = callmethodChecked(opresult8000, "++(1)", [1], call7991);
                      var opresult8004 = callmethodChecked(opresult8002, "++(1)", [1], string7988);
                      var_temp = opresult8004;
                      if7982 = GraceDone;
                    }
                    setLineNumber(907);    // compilenode string
                    var string8005 = new GraceString(" type ");
                    var opresult8009 = callmethodChecked(var_t, "++(1)", [1], var_temp);
                    var opresult8011 = callmethodChecked(opresult8009, "++(1)", [1], string8005);
                    var_t = opresult8011;
                    setLineNumber(908);    // compilenode string
                    var string8012 = new GraceString("{ <span class='quiet'>...added methods below...</span> }");
                    var opresult8015 = callmethodChecked(var_t, "++(1)", [1], string8012);
                    var_t = opresult8015;
                    if7724 = GraceDone;
                  } else {
                    var if8016 = GraceDone;
                    setLineNumber(909);    // compilenode string
                    var string8017 = new GraceString("typeliteral");
                    // call case 6: other requests
                    var call8020 = callmethodChecked(var_node, "kind", []);
                    var opresult8022 = callmethodChecked(call8020, "==(1)", [1], string8017);
                    if (Grace_isTrue(opresult8022)) {
                      setLineNumber(910);    // compilenode string
                      var string8023 = new GraceString(" type ");
                      var opresult8027 = callmethodChecked(var_t, "++(1)", [1], var_temp);
                      var opresult8029 = callmethodChecked(opresult8027, "++(1)", [1], string8023);
                      var_t = opresult8029;
                      setLineNumber(911);    // compilenode string
                      var string8030 = new GraceString("{ <span class='quiet'>...added methods below...</span> }");
                      var opresult8033 = callmethodChecked(var_t, "++(1)", [1], string8030);
                      var_t = opresult8033;
                      if8016 = GraceDone;
                    } else {
                      var if8034 = GraceDone;
                      setLineNumber(912);    // compilenode string
                      var string8035 = new GraceString("identifier");
                      // call case 6: other requests
                      var call8038 = callmethodChecked(var_node, "kind", []);
                      var opresult8040 = callmethodChecked(call8038, "==(1)", [1], string8035);
                      if (Grace_isTrue(opresult8040)) {
                        setLineNumber(913);    // compilenode member
                        // call case 6: other requests
                        var call8043 = callmethodChecked(var_node, "value", []);
                        // call case 4: self request
                        onSelf = true;
                        var call8044 = callmethodChecked(this, "getTypeLink(1)", [1], call8043);
                        var string8046 = new GraceString(" ");
                        var opresult8049 = callmethodChecked(var_t, "++(1)", [1], string8046);
                        var opresult8051 = callmethodChecked(opresult8049, "++(1)", [1], call8044);
                        var_t = opresult8051;
                        var if8052 = GraceDone;
                        setLineNumber(914);    // compilenode member
                        // call case 6: other requests
                        var call8055 = callmethodChecked(var_node, "generics", []);
                        var opresult8057 = callmethodChecked(call8055, "\u2260(1)", [1], GraceFalse);
                        if (Grace_isTrue(opresult8057)) {
                          setLineNumber(915);    // compilenode string
                          var string8058 = new GraceString("&lt;");
                          var opresult8061 = callmethodChecked(var_t, "++(1)", [1], string8058);
                          var_t = opresult8061;
                          setLineNumber(916);    // compilenode member
                          // call case 6: other requests
                          var call8064 = callmethodChecked(var_node, "generics", []);
                          var block8065 = new GraceBlock(this, 916, 1);
                          setLineNumber(1);    // compilenode identifier
                          block8065.real = function(var_g) {
                            setLineNumber(917);    // compilenode member
                            // call case 6: other requests
                            var call8067 = callmethodChecked(var_g, "value", []);
                            var opresult8070 = callmethodChecked(var_t, "++(1)", [1], call8067);
                            var_t = opresult8070;
                            var if8071 = GraceDone;
                            setLineNumber(918);    // compilenode member
                            // call case 6: other requests
                            // call case 6: other requests
                            var call8074 = callmethodChecked(var_node, "generics", []);
                            var call8075 = callmethodChecked(call8074, "last", []);
                            var opresult8078 = callmethodChecked(var_g, "\u2260(1)", [1], call8075);
                            if (Grace_isTrue(opresult8078)) {
                              var string8079 = new GraceString(", ");
                              var opresult8082 = callmethodChecked(var_t, "++(1)", [1], string8079);
                              var_t = opresult8082;
                              if8071 = GraceDone;
                            }
                            return if8071;
                          };
                          // call case 5: prelude request
                          var call8083 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call8064, block8065);
                          setLineNumber(920);    // compilenode string
                          var string8084 = new GraceString("&gt;");
                          var opresult8087 = callmethodChecked(var_t, "++(1)", [1], string8084);
                          var_t = opresult8087;
                          if8052 = GraceDone;
                        }
                        if8034 = if8052;
                      } else {
                        var if8088 = GraceDone;
                        setLineNumber(922);    // compilenode string
                        var string8089 = new GraceString("member");
                        // call case 6: other requests
                        var call8092 = callmethodChecked(var_node, "kind", []);
                        var opresult8094 = callmethodChecked(call8092, "==(1)", [1], string8089);
                        if (Grace_isTrue(opresult8094)) {
                          setLineNumber(923);    // compilenode string
                          var string8096 = new GraceString("");
                          // call case 6: other requests
                          var call8099 = callmethodChecked(var_node, "value", []);
                          var string8101 = new GraceString(".");
                          // call case 6: other requests
                          // call case 6: other requests
                          var call8105 = callmethodChecked(var_node, "receiver", []);
                          var call8106 = callmethodChecked(call8105, "value", []);
                          var string8108 = new GraceString("");
                          var opresult8110 = callmethodChecked(string8108, "++(1)", [1], call8106);
                          var opresult8112 = callmethodChecked(opresult8110, "++(1)", [1], string8101);
                          var opresult8114 = callmethodChecked(opresult8112, "++(1)", [1], call8099);
                          var opresult8116 = callmethodChecked(opresult8114, "++(1)", [1], string8096);
                          // call case 4: self request
                          onSelf = true;
                          var call8117 = callmethodChecked(this, "getTypeLink(1)", [1], opresult8116);
                          var opresult8120 = callmethodChecked(var_t, "++(1)", [1], call8117);
                          var_t = opresult8120;
                          var if8121 = GraceDone;
                          setLineNumber(924);    // compilenode member
                          // call case 6: other requests
                          var call8124 = callmethodChecked(var_node, "generics", []);
                          var opresult8126 = callmethodChecked(call8124, "\u2260(1)", [1], GraceFalse);
                          if (Grace_isTrue(opresult8126)) {
                            setLineNumber(925);    // compilenode string
                            var string8127 = new GraceString("&lt;");
                            var opresult8130 = callmethodChecked(var_t, "++(1)", [1], string8127);
                            var_t = opresult8130;
                            setLineNumber(926);    // compilenode member
                            // call case 6: other requests
                            var call8133 = callmethodChecked(var_node, "generics", []);
                            var block8134 = new GraceBlock(this, 926, 1);
                            setLineNumber(1);    // compilenode identifier
                            block8134.real = function(var_g) {
                              setLineNumber(927);    // compilenode member
                              // call case 6: other requests
                              var call8136 = callmethodChecked(var_g, "value", []);
                              var opresult8139 = callmethodChecked(var_t, "++(1)", [1], call8136);
                              var_t = opresult8139;
                              var if8140 = GraceDone;
                              setLineNumber(928);    // compilenode member
                              // call case 6: other requests
                              // call case 6: other requests
                              var call8143 = callmethodChecked(var_node, "generics", []);
                              var call8144 = callmethodChecked(call8143, "last", []);
                              var opresult8147 = callmethodChecked(var_g, "\u2260(1)", [1], call8144);
                              if (Grace_isTrue(opresult8147)) {
                                var string8148 = new GraceString(", ");
                                var opresult8151 = callmethodChecked(var_t, "++(1)", [1], string8148);
                                var_t = opresult8151;
                                if8140 = GraceDone;
                              }
                              return if8140;
                            };
                            // call case 5: prelude request
                            var call8152 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call8133, block8134);
                            setLineNumber(930);    // compilenode string
                            var string8153 = new GraceString("&gt;");
                            var opresult8156 = callmethodChecked(var_t, "++(1)", [1], string8153);
                            var_t = opresult8156;
                            if8121 = GraceDone;
                          }
                          if8088 = if8121;
                        }
                        if8034 = if8088;
                      }
                      if8016 = if8034;
                    }
                    if7724 = if8016;
                  }
                  setLineNumber(933);    // compilenode string
                  var string8157 = new GraceString("</code></span>");
                  var opresult8160 = callmethodChecked(var_t, "++(1)", [1], string8157);
                  var_t = opresult8160;
                  setLineNumber(934);    // compilenode string
                  var string8161 = new GraceString("<hr />");
                  var opresult8164 = callmethodChecked(var_t, "++(1)", [1], string8161);
                  var_t = opresult8164;
                  setLineNumber(935);    // compilenode string
                  var string8166 = new GraceString("top-box-description");
                  // call case 6: other requests
                  // call case 6: other requests
                  // call case 3: self.outer request
                  var call8169 = callmethodChecked(superDepth, "outer", [0]);
                  var call8170 = callmethodChecked(call8169, "outer", []);
                  onSelf = true;
                  var call8171 = callmethodChecked(call8170, "formatComments(1)rowClass(1)colspan(1)", [1, 1, 1], var_o, string8166, new GraceNum(1));
                  var opresult8174 = callmethodChecked(var_t, "++(1)", [1], call8171);
                  var_t = opresult8174;
                  setLineNumber(936);    // compilenode identifier
                  // call case 6: other requests
                  // call case 4: self request
                  onSelf = true;
                  var call8177 = callmethodChecked(this, "topDescSection", []);
                  var call8178 = callmethodChecked(call8177, "insert(1)", [1], var_t);
                  setLineNumber(937);    // compilenode identifier
                  return GraceTrue;
                }
                setLineNumber(848);    // return value
                if (!Grace_isTrue(callmethod(var_Boolean, "match(1)", [1], if7544)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitTypeDec(_) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return if7544;
              };
              func7543.paramCounts = [1];
              obj6123.methods["visitTypeDec(1)"] = func7543;
              func7543.definitionLine = 847;
              func7543.definitionModule = "gracedoc";
              var func8179 = function(argcv) {    // method visitMethod(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_o = arguments[curarg];
                curarg++;
                setModuleName("gracedoc");
                var if8180 = GraceDone;
                setLineNumber(943);    // compilenode member
                // call case 6: other requests
                var call8182 = callmethodChecked(var_o, "isConfidential", []);
                // call case 6: other requests
                var call8185 = callmethodChecked(var_settings, "publicOnly", []);
                var opresult8187 = callmethodChecked(call8185, "&&(1)", [1], call8182);
                if (Grace_isTrue(opresult8187)) {
                  return GraceFalse;
                }
                var if8188 = GraceDone;
                setLineNumber(944);    // compilenode member
                // call case 6: other requests
                var call8190 = callmethodChecked(var_o, "isClass", []);
                if (Grace_isTrue(call8190)) {
                  setLineNumber(945);    // compilenode identifier
                  // call case 4: self request
                  onSelf = true;
                  var call8192 = callmethodChecked(this, "doClassMethod(1)", [1], var_o);
                  return call8192;
                }
                setLineNumber(947);    // compilenode string
                var string8193 = new GraceString("<tr class='placeholder'><td><code>");
                var var_t = string8193;
                setLineNumber(948);    // compilenode string
                var string8194 = new GraceString("");
                var var_n = string8194;
                setLineNumber(949);    // compilenode member
                // call case 6: other requests
                var call8197 = callmethodChecked(var_o, "signature", []);
                var block8198 = new GraceBlock(this, 949, 1);
                setLineNumber(1);    // compilenode identifier
                block8198.real = function(var_part) {
                  setLineNumber(950);    // compilenode string
                  var string8199 = new GraceString("</span>");
                  // call case 6: other requests
                  var call8202 = callmethodChecked(var_part, "name", []);
                  var string8204 = new GraceString("<span class='method-name'>");
                  var opresult8207 = callmethodChecked(var_t, "++(1)", [1], string8204);
                  var opresult8209 = callmethodChecked(opresult8207, "++(1)", [1], call8202);
                  var opresult8211 = callmethodChecked(opresult8209, "++(1)", [1], string8199);
                  var_t = opresult8211;
                  setLineNumber(951);    // compilenode member
                  // call case 6: other requests
                  var call8213 = callmethodChecked(var_part, "name", []);
                  var opresult8216 = callmethodChecked(var_n, "++(1)", [1], call8213);
                  var_n = opresult8216;
                  var if8217 = GraceDone;
                  setLineNumber(952);    // compilenode member
                  // call case 6: other requests
                  // call case 6: other requests
                  var call8220 = callmethodChecked(var_o, "signature", []);
                  var call8221 = callmethodChecked(call8220, "last", []);
                  var opresult8224 = callmethodChecked(var_part, "\u2260(1)", [1], call8221);
                  if (Grace_isTrue(opresult8224)) {
                    var string8225 = new GraceString("()");
                    var opresult8228 = callmethodChecked(var_n, "++(1)", [1], string8225);
                    var_n = opresult8228;
                    if8217 = GraceDone;
                  }
                  var if8229 = GraceDone;
                  setLineNumber(953);    // compilenode member
                  // call case 6: other requests
                  // call case 6: other requests
                  var call8233 = callmethodChecked(var_part, "params", []);
                  var call8234 = callmethodChecked(call8233, "size", []);
                  var opresult8236 = callmethodChecked(call8234, ">(1)", [1], new GraceNum(0));
                  if (Grace_isTrue(opresult8236)) {
                    setLineNumber(954);    // compilenode string
                    var string8237 = new GraceString("(");
                    var opresult8240 = callmethodChecked(var_t, "++(1)", [1], string8237);
                    var_t = opresult8240;
                    setLineNumber(955);    // compilenode member
                    // call case 6: other requests
                    var call8243 = callmethodChecked(var_part, "params", []);
                    var block8244 = new GraceBlock(this, 955, 1);
                    setLineNumber(1);    // compilenode identifier
                    block8244.real = function(var_param) {
                      var if8245 = GraceDone;
                      setLineNumber(956);    // compilenode member
                      // call case 6: other requests
                      var call8248 = callmethodChecked(var_param, "dtype", []);
                      var opresult8250 = callmethodChecked(call8248, "\u2260(1)", [1], GraceFalse);
                      if (Grace_isTrue(opresult8250)) {
                        setLineNumber(957);    // compilenode string
                        var string8251 = new GraceString("</span>");
                        // call case 6: other requests
                        var call8254 = callmethodChecked(var_param, "nameString", []);
                        var string8256 = new GraceString("<span class='parameter-name'>");
                        var opresult8259 = callmethodChecked(var_t, "++(1)", [1], string8256);
                        var opresult8261 = callmethodChecked(opresult8259, "++(1)", [1], call8254);
                        var opresult8263 = callmethodChecked(opresult8261, "++(1)", [1], string8251);
                        var_t = opresult8263;
                        setLineNumber(959);    // compilenode string
                        var string8264 = new GraceString(":<span class='parameter-type'>");
                        var opresult8267 = callmethodChecked(var_t, "++(1)", [1], string8264);
                        var_t = opresult8267;
                        var if8268 = GraceDone;
                        setLineNumber(960);    // compilenode string
                        var string8269 = new GraceString("identifier");
                        // call case 6: other requests
                        // call case 6: other requests
                        var call8273 = callmethodChecked(var_param, "dtype", []);
                        var call8274 = callmethodChecked(call8273, "kind", []);
                        var opresult8276 = callmethodChecked(call8274, "==(1)", [1], string8269);
                        if (Grace_isTrue(opresult8276)) {
                          setLineNumber(961);    // compilenode member
                          // call case 6: other requests
                          // call case 6: other requests
                          var call8280 = callmethodChecked(var_param, "dtype", []);
                          var call8281 = callmethodChecked(call8280, "value", []);
                          // call case 4: self request
                          onSelf = true;
                          var call8282 = callmethodChecked(this, "getTypeLink(1)", [1], call8281);
                          var opresult8285 = callmethodChecked(var_t, "++(1)", [1], call8282);
                          var_t = opresult8285;
                          if8268 = GraceDone;
                        } else {
                          var if8286 = GraceDone;
                          setLineNumber(962);    // compilenode string
                          var string8287 = new GraceString("generic");
                          // call case 6: other requests
                          // call case 6: other requests
                          var call8291 = callmethodChecked(var_param, "dtype", []);
                          var call8292 = callmethodChecked(call8291, "kind", []);
                          var opresult8294 = callmethodChecked(call8292, "==(1)", [1], string8287);
                          if (Grace_isTrue(opresult8294)) {
                            setLineNumber(963);    // compilenode string
                            var string8295 = new GraceString("&lt;");
                            // call case 6: other requests
                            // call case 6: other requests
                            // call case 6: other requests
                            var call8301 = callmethodChecked(var_param, "dtype", []);
                            var call8302 = callmethodChecked(call8301, "value", []);
                            var call8303 = callmethodChecked(call8302, "value", []);
                            // call case 4: self request
                            onSelf = true;
                            var call8304 = callmethodChecked(this, "getTypeLink(1)", [1], call8303);
                            var opresult8307 = callmethodChecked(var_t, "++(1)", [1], call8304);
                            var opresult8309 = callmethodChecked(opresult8307, "++(1)", [1], string8295);
                            var_t = opresult8309;
                            setLineNumber(964);    // compilenode block
                            var block8311 = new GraceBlock(this, 964, 1);
                            setLineNumber(1);    // compilenode identifier
                            block8311.real = function(var_each) {
                              setLineNumber(964);    // compilenode string
                              var string8312 = new GraceString("");
                              // call case 6: other requests
                              var call8316 = callmethodChecked(var_each, "value", []);
                              // call case 4: self request
                              onSelf = true;
                              var call8317 = callmethodChecked(this, "getTypeLink(1)", [1], call8316);
                              var string8319 = new GraceString("");
                              var string8322 = new GraceString("");
                              var opresult8324 = callmethodChecked(string8322, "++(1)", [1], var_t);
                              var opresult8326 = callmethodChecked(opresult8324, "++(1)", [1], string8319);
                              var opresult8328 = callmethodChecked(opresult8326, "++(1)", [1], call8317);
                              var opresult8330 = callmethodChecked(opresult8328, "++(1)", [1], string8312);
                              var_t = opresult8330;
                              return GraceDone;
                            };
                            var block8331 = new GraceBlock(this, 964, 0);
                            block8331.real = function() {
                              var string8332 = new GraceString(", ");
                              var opresult8335 = callmethodChecked(var_t, "++(1)", [1], string8332);
                              var_t = opresult8335;
                              return GraceDone;
                            };
                            // call case 6: other requests
                            // call case 6: other requests
                            // call case 6: other requests
                            var call8338 = callmethodChecked(var_param, "dtype", []);
                            var call8339 = callmethodChecked(call8338, "args", []);
                            var call8340 = callmethodChecked(call8339, "do(1)separatedBy(1)", [1, 1], block8311, block8331);
                            setLineNumber(965);    // compilenode string
                            var string8341 = new GraceString("&gt;");
                            var opresult8344 = callmethodChecked(var_t, "++(1)", [1], string8341);
                            var_t = opresult8344;
                            if8286 = GraceDone;
                          }
                          if8268 = if8286;
                        }
                        setLineNumber(967);    // compilenode string
                        var string8345 = new GraceString("</span>");
                        var opresult8348 = callmethodChecked(var_t, "++(1)", [1], string8345);
                        var_t = opresult8348;
                        if8245 = GraceDone;
                      } else {
                        setLineNumber(970);    // compilenode string
                        var string8349 = new GraceString("</span>");
                        // call case 6: other requests
                        var call8352 = callmethodChecked(var_param, "nameString", []);
                        var string8354 = new GraceString("<span class='parameter-name'>");
                        var opresult8357 = callmethodChecked(var_t, "++(1)", [1], string8354);
                        var opresult8359 = callmethodChecked(opresult8357, "++(1)", [1], call8352);
                        var opresult8361 = callmethodChecked(opresult8359, "++(1)", [1], string8349);
                        var_t = opresult8361;
                        if8245 = GraceDone;
                      }
                      var if8362 = GraceDone;
                      setLineNumber(972);    // compilenode member
                      // call case 6: other requests
                      // call case 6: other requests
                      var call8365 = callmethodChecked(var_part, "params", []);
                      var call8366 = callmethodChecked(call8365, "last", []);
                      var opresult8369 = callmethodChecked(var_param, "\u2260(1)", [1], call8366);
                      // call case 6: other requests
                      // call case 6: other requests
                      var call8374 = callmethodChecked(var_part, "params", []);
                      var call8375 = callmethodChecked(call8374, "size", []);
                      var opresult8377 = callmethodChecked(call8375, ">(1)", [1], new GraceNum(1));
                      var opresult8379 = callmethodChecked(opresult8377, "&&(1)", [1], opresult8369);
                      if (Grace_isTrue(opresult8379)) {
                        setLineNumber(973);    // compilenode string
                        var string8380 = new GraceString(", ");
                        var opresult8383 = callmethodChecked(var_t, "++(1)", [1], string8380);
                        var_t = opresult8383;
                        if8362 = GraceDone;
                      }
                      return if8362;
                    };
                    // call case 5: prelude request
                    var call8384 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call8243, block8244);
                    setLineNumber(976);    // compilenode string
                    var string8385 = new GraceString(")");
                    var opresult8388 = callmethodChecked(var_t, "++(1)", [1], string8385);
                    var_t = opresult8388;
                    if8229 = GraceDone;
                  }
                  return if8229;
                };
                // call case 5: prelude request
                var call8389 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call8197, block8198);
                setLineNumber(979);    // compilenode string
                var string8390 = new GraceString("</code></td>");
                var opresult8393 = callmethodChecked(var_t, "++(1)", [1], string8390);
                var_t = opresult8393;
                setLineNumber(980);    // compilenode string
                var string8394 = new GraceString("<td><code>");
                var opresult8397 = callmethodChecked(var_t, "++(1)", [1], string8394);
                var_t = opresult8397;
                var if8398 = GraceDone;
                setLineNumber(981);    // compilenode member
                // call case 6: other requests
                var call8401 = callmethodChecked(var_o, "dtype", []);
                var opresult8403 = callmethodChecked(call8401, "\u2260(1)", [1], GraceFalse);
                if (Grace_isTrue(opresult8403)) {
                  setLineNumber(982);    // compilenode member
                  // call case 6: other requests
                  // call case 6: other requests
                  var call8407 = callmethodChecked(var_o, "dtype", []);
                  var call8408 = callmethodChecked(call8407, "value", []);
                  // call case 4: self request
                  onSelf = true;
                  var call8409 = callmethodChecked(this, "getTypeLink(1)", [1], call8408);
                  var opresult8412 = callmethodChecked(var_t, "++(1)", [1], call8409);
                  var_t = opresult8412;
                  if8398 = GraceDone;
                } else {
                  setLineNumber(984);    // compilenode string
                  var string8414 = new GraceString("Done");
                  // call case 4: self request
                  onSelf = true;
                  var call8415 = callmethodChecked(this, "getTypeLink(1)", [1], string8414);
                  var opresult8418 = callmethodChecked(var_t, "++(1)", [1], call8415);
                  var_t = opresult8418;
                  if8398 = GraceDone;
                }
                setLineNumber(986);    // compilenode string
                var string8419 = new GraceString("</code></td></tr>");
                var opresult8422 = callmethodChecked(var_t, "++(1)", [1], string8419);
                var_t = opresult8422;
                setLineNumber(987);    // compilenode string
                var string8424 = new GraceString("description");
                // call case 6: other requests
                // call case 6: other requests
                // call case 3: self.outer request
                var call8427 = callmethodChecked(superDepth, "outer", [0]);
                var call8428 = callmethodChecked(call8427, "outer", []);
                onSelf = true;
                var call8429 = callmethodChecked(call8428, "formatComments(1)rowClass(1)colspan(1)", [1, 1, 1], var_o, string8424, new GraceNum(2));
                var opresult8432 = callmethodChecked(var_t, "++(1)", [1], call8429);
                var_t = opresult8432;
                setLineNumber(988);    // compilenode identifier
                // call case 6: other requests
                // call case 4: self request
                onSelf = true;
                var call8435 = callmethodChecked(this, "methodsSection", []);
                var call8436 = callmethodChecked(call8435, "addElement(1)withText(1)", [1, 1], var_n, var_t);
                setLineNumber(989);    // compilenode identifier
                return GraceFalse;
              };
              func8179.paramCounts = [1];
              obj6123.methods["visitMethod(1)"] = func8179;
              func8179.definitionLine = 941;
              func8179.definitionModule = "gracedoc";
              var func8437 = function(argcv) {    // method doClassMethod(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_m = arguments[curarg];
                curarg++;
                setModuleName("gracedoc");
                setLineNumber(993);    // compilenode member
                // call case 6: other requests
                // call case 6: other requests
                var call8440 = callmethodChecked(var_m, "body", []);
                var call8441 = callmethodChecked(call8440, "last", []);
                var var_o = call8441;
                var if8442 = GraceDone;
                setLineNumber(995);    // compilenode member
                // call case 4: self request
                onSelf = true;
                var call8445 = callmethodChecked(this, "isOnClassPage", []);
                var opresult8447 = callmethodChecked(call8445, "==(1)", [1], GraceFalse);
                if (Grace_isTrue(opresult8447)) {
                  setLineNumber(996);    // compilenode string
                  var string8448 = new GraceString("<tr class='placeholder'>");
                  var var_t = string8448;
                  setLineNumber(997);    // compilenode member
                  // call case 6: other requests
                  var call8450 = callmethodChecked(var_m, "nameString", []);
                  var var_n = call8450;
                  setLineNumber(998);    // compilenode string
                  var string8451 = new GraceString("</span>");
                  // call case 4: self request
                  onSelf = true;
                  var call8454 = callmethodChecked(this, "getClassLink(1)", [1], var_n);
                  var string8456 = new GraceString("<td><code><span class='class-name'>");
                  var opresult8458 = callmethodChecked(string8456, "++(1)", [1], call8454);
                  var opresult8460 = callmethodChecked(opresult8458, "++(1)", [1], string8451);
                  var opresult8463 = callmethodChecked(var_t, "++(1)", [1], opresult8460);
                  var_t = opresult8463;
                  setLineNumber(999);    // compilenode string
                  var string8464 = new GraceString(".");
                  var opresult8467 = callmethodChecked(var_t, "++(1)", [1], string8464);
                  var_t = opresult8467;
                  setLineNumber(1000);    // compilenode block
                  var block8469 = new GraceBlock(this, 1000, 1);
                  setLineNumber(1);    // compilenode identifier
                  block8469.real = function(var_part) {
                    setLineNumber(1001);    // compilenode string
                    var string8470 = new GraceString("</span>");
                    // call case 6: other requests
                    var call8473 = callmethodChecked(var_part, "name", []);
                    var string8475 = new GraceString("<span class='method-name'>");
                    var opresult8477 = callmethodChecked(string8475, "++(1)", [1], call8473);
                    var opresult8479 = callmethodChecked(opresult8477, "++(1)", [1], string8470);
                    var opresult8482 = callmethodChecked(var_t, "++(1)", [1], opresult8479);
                    var_t = opresult8482;
                    var if8483 = GraceDone;
                    setLineNumber(1002);    // compilenode member
                    // call case 6: other requests
                    // call case 6: other requests
                    var call8487 = callmethodChecked(var_part, "params", []);
                    var call8488 = callmethodChecked(call8487, "size", []);
                    var opresult8490 = callmethodChecked(call8488, ">(1)", [1], new GraceNum(0));
                    if (Grace_isTrue(opresult8490)) {
                      setLineNumber(1003);    // compilenode string
                      var string8491 = new GraceString("(");
                      var opresult8494 = callmethodChecked(var_t, "++(1)", [1], string8491);
                      var_t = opresult8494;
                      setLineNumber(1004);    // compilenode member
                      // call case 6: other requests
                      var call8497 = callmethodChecked(var_part, "params", []);
                      var block8498 = new GraceBlock(this, 1004, 1);
                      setLineNumber(1);    // compilenode identifier
                      block8498.real = function(var_param) {
                        var if8499 = GraceDone;
                        setLineNumber(1005);    // compilenode member
                        // call case 6: other requests
                        var call8502 = callmethodChecked(var_param, "dtype", []);
                        var opresult8504 = callmethodChecked(call8502, "\u2260(1)", [1], GraceFalse);
                        if (Grace_isTrue(opresult8504)) {
                          setLineNumber(1006);    // compilenode string
                          var string8505 = new GraceString("</span>");
                          // call case 6: other requests
                          var call8508 = callmethodChecked(var_param, "value", []);
                          var string8510 = new GraceString("<span class='parameter-name'>");
                          var opresult8513 = callmethodChecked(var_t, "++(1)", [1], string8510);
                          var opresult8515 = callmethodChecked(opresult8513, "++(1)", [1], call8508);
                          var opresult8517 = callmethodChecked(opresult8515, "++(1)", [1], string8505);
                          var_t = opresult8517;
                          setLineNumber(1007);    // compilenode string
                          var string8518 = new GraceString("</span>");
                          // call case 6: other requests
                          // call case 6: other requests
                          var call8523 = callmethodChecked(var_param, "dtype", []);
                          var call8524 = callmethodChecked(call8523, "nameString", []);
                          // call case 4: self request
                          onSelf = true;
                          var call8525 = callmethodChecked(this, "getTypeLink(1)", [1], call8524);
                          var string8527 = new GraceString(":<span class='parameter-type'>");
                          var opresult8530 = callmethodChecked(var_t, "++(1)", [1], string8527);
                          var opresult8532 = callmethodChecked(opresult8530, "++(1)", [1], call8525);
                          var opresult8534 = callmethodChecked(opresult8532, "++(1)", [1], string8518);
                          var_t = opresult8534;
                          if8499 = GraceDone;
                        } else {
                          setLineNumber(1009);    // compilenode string
                          var string8535 = new GraceString("</span>");
                          // call case 6: other requests
                          var call8538 = callmethodChecked(var_param, "value", []);
                          var string8540 = new GraceString("<span class='parameter-name'>");
                          var opresult8543 = callmethodChecked(var_t, "++(1)", [1], string8540);
                          var opresult8545 = callmethodChecked(opresult8543, "++(1)", [1], call8538);
                          var opresult8547 = callmethodChecked(opresult8545, "++(1)", [1], string8535);
                          var_t = opresult8547;
                          if8499 = GraceDone;
                        }
                        var if8548 = GraceDone;
                        setLineNumber(1011);    // compilenode member
                        // call case 6: other requests
                        // call case 6: other requests
                        var call8551 = callmethodChecked(var_part, "params", []);
                        var call8552 = callmethodChecked(call8551, "last", []);
                        var opresult8555 = callmethodChecked(var_param, "\u2260(1)", [1], call8552);
                        // call case 6: other requests
                        // call case 6: other requests
                        var call8560 = callmethodChecked(var_part, "params", []);
                        var call8561 = callmethodChecked(call8560, "size", []);
                        var opresult8563 = callmethodChecked(call8561, ">(1)", [1], new GraceNum(1));
                        var opresult8565 = callmethodChecked(opresult8563, "&&(1)", [1], opresult8555);
                        if (Grace_isTrue(opresult8565)) {
                          setLineNumber(1012);    // compilenode string
                          var string8566 = new GraceString(", ");
                          var opresult8569 = callmethodChecked(var_t, "++(1)", [1], string8566);
                          var_t = opresult8569;
                          if8548 = GraceDone;
                        }
                        return if8548;
                      };
                      // call case 5: prelude request
                      var call8570 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call8497, block8498);
                      setLineNumber(1015);    // compilenode string
                      var string8571 = new GraceString(")");
                      var opresult8574 = callmethodChecked(var_t, "++(1)", [1], string8571);
                      var_t = opresult8574;
                      if8483 = GraceDone;
                    }
                    return if8483;
                  };
                  // call case 6: other requests
                  setLineNumber(1000);    // compilenode member
                  // call case 6: other requests
                  var call8576 = callmethodChecked(var_m, "signature", []);
                  var call8577 = callmethodChecked(call8576, "do(1)", [1], block8469);
                  var if8578 = GraceDone;
                  setLineNumber(1019);    // compilenode member
                  // call case 6: other requests
                  var call8581 = callmethodChecked(var_m, "dtype", []);
                  var opresult8583 = callmethodChecked(call8581, "\u2260(1)", [1], GraceFalse);
                  if (Grace_isTrue(opresult8583)) {
                    setLineNumber(1020);    // compilenode string
                    var string8584 = new GraceString(" -> ");
                    var opresult8587 = callmethodChecked(var_t, "++(1)", [1], string8584);
                    var_t = opresult8587;
                    var if8588 = GraceDone;
                    setLineNumber(1021);    // compilenode string
                    var string8589 = new GraceString("identifier");
                    // call case 6: other requests
                    // call case 6: other requests
                    var call8593 = callmethodChecked(var_m, "dtype", []);
                    var call8594 = callmethodChecked(call8593, "kind", []);
                    var opresult8596 = callmethodChecked(call8594, "==(1)", [1], string8589);
                    if (Grace_isTrue(opresult8596)) {
                      setLineNumber(1022);    // compilenode member
                      // call case 6: other requests
                      // call case 6: other requests
                      var call8600 = callmethodChecked(var_m, "dtype", []);
                      var call8601 = callmethodChecked(call8600, "value", []);
                      // call case 4: self request
                      onSelf = true;
                      var call8602 = callmethodChecked(this, "getTypeLink(1)", [1], call8601);
                      var opresult8605 = callmethodChecked(var_t, "++(1)", [1], call8602);
                      var_t = opresult8605;
                      if8588 = GraceDone;
                    } else {
                      var if8606 = GraceDone;
                      setLineNumber(1023);    // compilenode string
                      var string8607 = new GraceString("generic");
                      // call case 6: other requests
                      // call case 6: other requests
                      var call8611 = callmethodChecked(var_m, "dtype", []);
                      var call8612 = callmethodChecked(call8611, "kind", []);
                      var opresult8614 = callmethodChecked(call8612, "==(1)", [1], string8607);
                      if (Grace_isTrue(opresult8614)) {
                        setLineNumber(1024);    // compilenode string
                        var string8615 = new GraceString("&lt;");
                        // call case 6: other requests
                        // call case 6: other requests
                        // call case 6: other requests
                        var call8621 = callmethodChecked(var_m, "dtype", []);
                        var call8622 = callmethodChecked(call8621, "value", []);
                        var call8623 = callmethodChecked(call8622, "value", []);
                        // call case 4: self request
                        onSelf = true;
                        var call8624 = callmethodChecked(this, "getTypeLink(1)", [1], call8623);
                        var opresult8627 = callmethodChecked(var_t, "++(1)", [1], call8624);
                        var opresult8629 = callmethodChecked(opresult8627, "++(1)", [1], string8615);
                        var_t = opresult8629;
                        setLineNumber(1025);    // compilenode block
                        var block8631 = new GraceBlock(this, 1025, 1);
                        setLineNumber(1);    // compilenode identifier
                        block8631.real = function(var_each) {
                          setLineNumber(1025);    // compilenode string
                          var string8632 = new GraceString("");
                          // call case 6: other requests
                          var call8636 = callmethodChecked(var_each, "value", []);
                          // call case 4: self request
                          onSelf = true;
                          var call8637 = callmethodChecked(this, "getTypeLink(1)", [1], call8636);
                          var string8639 = new GraceString("");
                          var string8642 = new GraceString("");
                          var opresult8644 = callmethodChecked(string8642, "++(1)", [1], var_t);
                          var opresult8646 = callmethodChecked(opresult8644, "++(1)", [1], string8639);
                          var opresult8648 = callmethodChecked(opresult8646, "++(1)", [1], call8637);
                          var opresult8650 = callmethodChecked(opresult8648, "++(1)", [1], string8632);
                          var_t = opresult8650;
                          return GraceDone;
                        };
                        var block8651 = new GraceBlock(this, 1025, 0);
                        block8651.real = function() {
                          var string8652 = new GraceString(", ");
                          var opresult8655 = callmethodChecked(var_t, "++(1)", [1], string8652);
                          var_t = opresult8655;
                          return GraceDone;
                        };
                        // call case 6: other requests
                        // call case 6: other requests
                        // call case 6: other requests
                        var call8658 = callmethodChecked(var_m, "dtype", []);
                        var call8659 = callmethodChecked(call8658, "args", []);
                        var call8660 = callmethodChecked(call8659, "do(1)separatedBy(1)", [1, 1], block8631, block8651);
                        setLineNumber(1026);    // compilenode string
                        var string8661 = new GraceString("&gt;");
                        var opresult8664 = callmethodChecked(var_t, "++(1)", [1], string8661);
                        var_t = opresult8664;
                        if8606 = GraceDone;
                      }
                      if8588 = if8606;
                    }
                    if8578 = if8588;
                  }
                  setLineNumber(1029);    // compilenode string
                  var string8665 = new GraceString("</code></td></tr>");
                  var opresult8668 = callmethodChecked(var_t, "++(1)", [1], string8665);
                  var_t = opresult8668;
                  var if8669 = GraceDone;
                  setLineNumber(1031);    // compilenode member
                  // call case 6: other requests
                  var call8672 = callmethodChecked(var_o, "superclass", []);
                  var opresult8674 = callmethodChecked(call8672, "\u2260(1)", [1], GraceFalse);
                  if (Grace_isTrue(opresult8674)) {
                    setLineNumber(1032);    // compilenode identifier
                    // call case 6: other requests
                    // call case 6: other requests
                    var call8677 = callmethodChecked(var_o, "superclass", []);
                    var call8678 = callmethodChecked(call8677, "accept(1)", [1], this);
                    if8669 = call8678;
                  }
                  setLineNumber(1035);    // compilenode member
                  // call case 4: self request
                  onSelf = true;
                  var call8681 = callmethodChecked(this, "outdir", []);
                  var string8682 = new GraceString("class");
                  // call case 6: other requests
                  var call8683 = callmethodChecked(var_graceDocVisitor, "createFrom(1)outTo(1)as(1)", [1, 1, 1], var_n, call8681, string8682);
                  var var_classVis = call8683;
                  setLineNumber(1036);    // compilenode identifier
                  // call case 6: other requests
                  var call8685 = callmethodChecked(var_o, "accept(1)", [1], var_classVis);
                  setLineNumber(1037);    // compilenode member
                  // call case 6: other requests
                  var call8687 = callmethodChecked(var_classVis, "generate", []);
                  setLineNumber(1038);    // compilenode string
                  var string8689 = new GraceString("top-box-description");
                  // call case 6: other requests
                  // call case 6: other requests
                  // call case 3: self.outer request
                  var call8692 = callmethodChecked(superDepth, "outer", [0]);
                  var call8693 = callmethodChecked(call8692, "outer", []);
                  onSelf = true;
                  var call8694 = callmethodChecked(call8693, "formatComments(1)rowClass(1)colspan(1)", [1, 1, 1], var_o, string8689, new GraceNum(1));
                  var opresult8697 = callmethodChecked(var_t, "++(1)", [1], call8694);
                  var_t = opresult8697;
                  setLineNumber(1039);    // compilenode identifier
                  // call case 6: other requests
                  // call case 4: self request
                  onSelf = true;
                  var call8700 = callmethodChecked(this, "classesSection", []);
                  var call8701 = callmethodChecked(call8700, "addElement(1)withText(1)", [1, 1], var_n, var_t);
                  setLineNumber(1040);    // compilenode identifier
                  return GraceFalse;
                } else {
                  setLineNumber(1042);    // compilenode string
                  var string8702 = new GraceString("</b>.");
                  // call case 6: other requests
                  var call8705 = callmethodChecked(var_o, "name", []);
                  var string8707 = new GraceString("<span class='headline'><code><b>");
                  var opresult8709 = callmethodChecked(string8707, "++(1)", [1], call8705);
                  var opresult8711 = callmethodChecked(opresult8709, "++(1)", [1], string8702);
                  var var_t = opresult8711;
                  setLineNumber(1044);    // compilenode member
                  // call case 6: other requests
                  var call8714 = callmethodChecked(var_m, "signature", []);
                  var block8715 = new GraceBlock(this, 1044, 1);
                  setLineNumber(1);    // compilenode identifier
                  block8715.real = function(var_part) {
                    setLineNumber(1045);    // compilenode string
                    var string8716 = new GraceString("</b>");
                    // call case 6: other requests
                    var call8719 = callmethodChecked(var_part, "name", []);
                    var string8721 = new GraceString("<b>");
                    var opresult8723 = callmethodChecked(string8721, "++(1)", [1], call8719);
                    var opresult8725 = callmethodChecked(opresult8723, "++(1)", [1], string8716);
                    var opresult8728 = callmethodChecked(var_t, "++(1)", [1], opresult8725);
                    var_t = opresult8728;
                    var if8729 = GraceDone;
                    setLineNumber(1046);    // compilenode member
                    // call case 6: other requests
                    // call case 6: other requests
                    var call8733 = callmethodChecked(var_part, "params", []);
                    var call8734 = callmethodChecked(call8733, "size", []);
                    var opresult8736 = callmethodChecked(call8734, ">(1)", [1], new GraceNum(0));
                    if (Grace_isTrue(opresult8736)) {
                      setLineNumber(1047);    // compilenode string
                      var string8737 = new GraceString("(");
                      var opresult8740 = callmethodChecked(var_t, "++(1)", [1], string8737);
                      var_t = opresult8740;
                      setLineNumber(1048);    // compilenode member
                      // call case 6: other requests
                      var call8743 = callmethodChecked(var_part, "params", []);
                      var block8744 = new GraceBlock(this, 1048, 1);
                      setLineNumber(1);    // compilenode identifier
                      block8744.real = function(var_param) {
                        var if8745 = GraceDone;
                        setLineNumber(1049);    // compilenode member
                        // call case 6: other requests
                        var call8748 = callmethodChecked(var_param, "dtype", []);
                        var opresult8750 = callmethodChecked(call8748, "\u2260(1)", [1], GraceFalse);
                        if (Grace_isTrue(opresult8750)) {
                          setLineNumber(1050);    // compilenode member
                          // call case 6: other requests
                          var call8752 = callmethodChecked(var_param, "value", []);
                          var opresult8755 = callmethodChecked(var_t, "++(1)", [1], call8752);
                          var_t = opresult8755;
                          setLineNumber(1051);    // compilenode member
                          // call case 6: other requests
                          // call case 6: other requests
                          var call8759 = callmethodChecked(var_param, "dtype", []);
                          var call8760 = callmethodChecked(call8759, "value", []);
                          // call case 4: self request
                          onSelf = true;
                          var call8761 = callmethodChecked(this, "getTypeLink(1)", [1], call8760);
                          var string8763 = new GraceString(":");
                          var opresult8766 = callmethodChecked(var_t, "++(1)", [1], string8763);
                          var opresult8768 = callmethodChecked(opresult8766, "++(1)", [1], call8761);
                          var_t = opresult8768;
                          if8745 = GraceDone;
                        } else {
                          setLineNumber(1053);    // compilenode member
                          // call case 6: other requests
                          var call8770 = callmethodChecked(var_param, "value", []);
                          var opresult8773 = callmethodChecked(var_t, "++(1)", [1], call8770);
                          var_t = opresult8773;
                          if8745 = GraceDone;
                        }
                        var if8774 = GraceDone;
                        setLineNumber(1055);    // compilenode member
                        // call case 6: other requests
                        // call case 6: other requests
                        var call8778 = callmethodChecked(var_part, "params", []);
                        var call8779 = callmethodChecked(call8778, "size", []);
                        // call case 6: other requests
                        // call case 6: other requests
                        var call8781 = callmethodChecked(var_part, "params", []);
                        var call8782 = callmethodChecked(call8781, "at(1)", [1], call8779);
                        var opresult8785 = callmethodChecked(var_param, "\u2260(1)", [1], call8782);
                        // call case 6: other requests
                        // call case 6: other requests
                        var call8790 = callmethodChecked(var_part, "params", []);
                        var call8791 = callmethodChecked(call8790, "size", []);
                        var opresult8793 = callmethodChecked(call8791, ">(1)", [1], new GraceNum(1));
                        var opresult8795 = callmethodChecked(opresult8793, "&&(1)", [1], opresult8785);
                        if (Grace_isTrue(opresult8795)) {
                          setLineNumber(1056);    // compilenode string
                          var string8796 = new GraceString(", ");
                          var opresult8799 = callmethodChecked(var_t, "++(1)", [1], string8796);
                          var_t = opresult8799;
                          if8774 = GraceDone;
                        }
                        return if8774;
                      };
                      // call case 5: prelude request
                      var call8800 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call8743, block8744);
                      setLineNumber(1059);    // compilenode string
                      var string8801 = new GraceString(")");
                      var opresult8804 = callmethodChecked(var_t, "++(1)", [1], string8801);
                      var_t = opresult8804;
                      if8729 = GraceDone;
                    }
                    return if8729;
                  };
                  // call case 5: prelude request
                  var call8805 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call8714, block8715);
                  var if8806 = GraceDone;
                  setLineNumber(1063);    // compilenode member
                  // call case 6: other requests
                  var call8809 = callmethodChecked(var_m, "dtype", []);
                  var opresult8811 = callmethodChecked(call8809, "\u2260(1)", [1], GraceFalse);
                  if (Grace_isTrue(opresult8811)) {
                    setLineNumber(1064);    // compilenode string
                    var string8812 = new GraceString(" -> ");
                    var opresult8815 = callmethodChecked(var_t, "++(1)", [1], string8812);
                    var_t = opresult8815;
                    var if8816 = GraceDone;
                    setLineNumber(1065);    // compilenode string
                    var string8817 = new GraceString("identifier");
                    // call case 6: other requests
                    // call case 6: other requests
                    var call8821 = callmethodChecked(var_m, "dtype", []);
                    var call8822 = callmethodChecked(call8821, "kind", []);
                    var opresult8824 = callmethodChecked(call8822, "==(1)", [1], string8817);
                    if (Grace_isTrue(opresult8824)) {
                      setLineNumber(1066);    // compilenode member
                      // call case 6: other requests
                      // call case 6: other requests
                      var call8828 = callmethodChecked(var_m, "dtype", []);
                      var call8829 = callmethodChecked(call8828, "value", []);
                      // call case 4: self request
                      onSelf = true;
                      var call8830 = callmethodChecked(this, "getTypeLink(1)", [1], call8829);
                      var opresult8833 = callmethodChecked(var_t, "++(1)", [1], call8830);
                      var_t = opresult8833;
                      if8816 = GraceDone;
                    } else {
                      var if8834 = GraceDone;
                      setLineNumber(1067);    // compilenode string
                      var string8835 = new GraceString("generic");
                      // call case 6: other requests
                      // call case 6: other requests
                      var call8839 = callmethodChecked(var_m, "dtype", []);
                      var call8840 = callmethodChecked(call8839, "kind", []);
                      var opresult8842 = callmethodChecked(call8840, "==(1)", [1], string8835);
                      if (Grace_isTrue(opresult8842)) {
                        setLineNumber(1068);    // compilenode string
                        var string8843 = new GraceString("&lt;");
                        // call case 6: other requests
                        // call case 6: other requests
                        // call case 6: other requests
                        var call8849 = callmethodChecked(var_m, "dtype", []);
                        var call8850 = callmethodChecked(call8849, "value", []);
                        var call8851 = callmethodChecked(call8850, "value", []);
                        // call case 4: self request
                        onSelf = true;
                        var call8852 = callmethodChecked(this, "getTypeLink(1)", [1], call8851);
                        var opresult8855 = callmethodChecked(var_t, "++(1)", [1], call8852);
                        var opresult8857 = callmethodChecked(opresult8855, "++(1)", [1], string8843);
                        var_t = opresult8857;
                        setLineNumber(1069);    // compilenode block
                        var block8859 = new GraceBlock(this, 1069, 1);
                        setLineNumber(1);    // compilenode identifier
                        block8859.real = function(var_each) {
                          setLineNumber(1069);    // compilenode string
                          var string8860 = new GraceString("");
                          // call case 6: other requests
                          var call8864 = callmethodChecked(var_each, "value", []);
                          // call case 4: self request
                          onSelf = true;
                          var call8865 = callmethodChecked(this, "getTypeLink(1)", [1], call8864);
                          var string8867 = new GraceString("");
                          var string8870 = new GraceString("");
                          var opresult8872 = callmethodChecked(string8870, "++(1)", [1], var_t);
                          var opresult8874 = callmethodChecked(opresult8872, "++(1)", [1], string8867);
                          var opresult8876 = callmethodChecked(opresult8874, "++(1)", [1], call8865);
                          var opresult8878 = callmethodChecked(opresult8876, "++(1)", [1], string8860);
                          var_t = opresult8878;
                          return GraceDone;
                        };
                        var block8879 = new GraceBlock(this, 1069, 0);
                        block8879.real = function() {
                          var string8880 = new GraceString(", ");
                          var opresult8883 = callmethodChecked(var_t, "++(1)", [1], string8880);
                          var_t = opresult8883;
                          return GraceDone;
                        };
                        // call case 6: other requests
                        // call case 6: other requests
                        // call case 6: other requests
                        var call8886 = callmethodChecked(var_m, "dtype", []);
                        var call8887 = callmethodChecked(call8886, "args", []);
                        var call8888 = callmethodChecked(call8887, "do(1)separatedBy(1)", [1, 1], block8859, block8879);
                        setLineNumber(1070);    // compilenode string
                        var string8889 = new GraceString("&gt;");
                        var opresult8892 = callmethodChecked(var_t, "++(1)", [1], string8889);
                        var_t = opresult8892;
                        if8834 = GraceDone;
                      }
                      if8816 = if8834;
                    }
                    if8806 = if8816;
                  }
                  setLineNumber(1074);    // compilenode string
                  var string8893 = new GraceString("</code></span><hr />");
                  var opresult8896 = callmethodChecked(var_t, "++(1)", [1], string8893);
                  var_t = opresult8896;
                  setLineNumber(1075);    // compilenode string
                  var string8898 = new GraceString("top-box-description");
                  // call case 6: other requests
                  // call case 6: other requests
                  // call case 3: self.outer request
                  var call8901 = callmethodChecked(superDepth, "outer", [0]);
                  var call8902 = callmethodChecked(call8901, "outer", []);
                  onSelf = true;
                  var call8903 = callmethodChecked(call8902, "formatComments(1)rowClass(1)colspan(1)", [1, 1, 1], var_o, string8898, new GraceNum(1));
                  var opresult8906 = callmethodChecked(var_t, "++(1)", [1], call8903);
                  var_t = opresult8906;
                  setLineNumber(1076);    // compilenode identifier
                  // call case 6: other requests
                  // call case 4: self request
                  onSelf = true;
                  var call8909 = callmethodChecked(this, "topDescSection", []);
                  var call8910 = callmethodChecked(call8909, "insert(1)", [1], var_t);
                  setLineNumber(1077);    // compilenode identifier
                  return GraceTrue;
                }
                setLineNumber(995);    // return value
                if (!Grace_isTrue(callmethod(var_Boolean, "match(1)", [1], if8442)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method doClassMethod(_) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return if8442;
              };
              func8437.paramCounts = [1];
              obj6123.methods["doClassMethod(1)"] = func8437;
              func8437.definitionLine = 992;
              func8437.definitionModule = "gracedoc";
              var func8911 = function(argcv) {    // method visitDefDec(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_o = arguments[curarg];
                curarg++;
                setModuleName("gracedoc");
                var if8912 = GraceDone;
                setLineNumber(1082);    // compilenode member
                // call case 4: self request
                onSelf = true;
                var call8915 = callmethodChecked(this, "isOnClassPage", []);
                var opresult8917 = callmethodChecked(call8915, "==(1)", [1], GraceTrue);
                if (Grace_isTrue(opresult8917)) {
                  var if8918 = GraceDone;
                  setLineNumber(1083);    // compilenode call
                  // call case 6: other requests
                  // call case 6: other requests
                  var call8921 = callmethodChecked(var_settings, "publicOnly", []);
                  var call8922 = callmethodChecked(call8921, "prefix!", [0]);
                  if (Grace_isTrue(call8922)) {
                    setLineNumber(1084);    // compilenode member
                    // call case 6: other requests
                    // call case 6: other requests
                    var call8925 = callmethodChecked(var_o, "name", []);
                    var call8926 = callmethodChecked(call8925, "value", []);
                    var var_n = call8926;
                    setLineNumber(1085);    // compilenode string
                    var string8927 = new GraceString("");
                    // call case 6: other requests
                    // call case 6: other requests
                    var call8931 = callmethodChecked(var_o, "name", []);
                    var call8932 = callmethodChecked(call8931, "value", []);
                    var string8934 = new GraceString("<tr class='placeholder'><td><code>def</code></td><td class='identifier-name'>");
                    var opresult8936 = callmethodChecked(string8934, "++(1)", [1], call8932);
                    var opresult8938 = callmethodChecked(opresult8936, "++(1)", [1], string8927);
                    var var_t = opresult8938;
                    setLineNumber(1086);    // compilenode string
                    var string8939 = new GraceString("</td><td><code>");
                    var opresult8942 = callmethodChecked(var_t, "++(1)", [1], string8939);
                    var_t = opresult8942;
                    var if8943 = GraceDone;
                    setLineNumber(1087);    // compilenode member
                    // call case 6: other requests
                    var call8946 = callmethodChecked(var_o, "dtype", []);
                    var opresult8948 = callmethodChecked(call8946, "\u2260(1)", [1], GraceFalse);
                    if (Grace_isTrue(opresult8948)) {
                      var if8949 = GraceDone;
                      setLineNumber(1088);    // compilenode string
                      var string8950 = new GraceString("identifier");
                      // call case 6: other requests
                      // call case 6: other requests
                      var call8954 = callmethodChecked(var_o, "dtype", []);
                      var call8955 = callmethodChecked(call8954, "kind", []);
                      var opresult8957 = callmethodChecked(call8955, "==(1)", [1], string8950);
                      if (Grace_isTrue(opresult8957)) {
                        setLineNumber(1089);    // compilenode member
                        // call case 6: other requests
                        // call case 6: other requests
                        var call8961 = callmethodChecked(var_o, "dtype", []);
                        var call8962 = callmethodChecked(call8961, "value", []);
                        // call case 4: self request
                        onSelf = true;
                        var call8963 = callmethodChecked(this, "getTypeLink(1)", [1], call8962);
                        var opresult8966 = callmethodChecked(var_t, "++(1)", [1], call8963);
                        var_t = opresult8966;
                        if8949 = GraceDone;
                      } else {
                        var if8967 = GraceDone;
                        setLineNumber(1090);    // compilenode string
                        var string8968 = new GraceString("generic");
                        // call case 6: other requests
                        // call case 6: other requests
                        var call8972 = callmethodChecked(var_o, "dtype", []);
                        var call8973 = callmethodChecked(call8972, "kind", []);
                        var opresult8975 = callmethodChecked(call8973, "==(1)", [1], string8968);
                        if (Grace_isTrue(opresult8975)) {
                          setLineNumber(1091);    // compilenode string
                          var string8976 = new GraceString("&lt;");
                          // call case 6: other requests
                          // call case 6: other requests
                          // call case 6: other requests
                          var call8982 = callmethodChecked(var_o, "dtype", []);
                          var call8983 = callmethodChecked(call8982, "value", []);
                          var call8984 = callmethodChecked(call8983, "value", []);
                          // call case 4: self request
                          onSelf = true;
                          var call8985 = callmethodChecked(this, "getTypeLink(1)", [1], call8984);
                          var opresult8988 = callmethodChecked(var_t, "++(1)", [1], call8985);
                          var opresult8990 = callmethodChecked(opresult8988, "++(1)", [1], string8976);
                          var_t = opresult8990;
                          setLineNumber(1092);    // compilenode block
                          var block8992 = new GraceBlock(this, 1092, 1);
                          setLineNumber(1);    // compilenode identifier
                          block8992.real = function(var_each) {
                            setLineNumber(1092);    // compilenode string
                            var string8993 = new GraceString("");
                            // call case 6: other requests
                            var call8997 = callmethodChecked(var_each, "value", []);
                            // call case 4: self request
                            onSelf = true;
                            var call8998 = callmethodChecked(this, "getTypeLink(1)", [1], call8997);
                            var string9000 = new GraceString("");
                            var string9003 = new GraceString("");
                            var opresult9005 = callmethodChecked(string9003, "++(1)", [1], var_t);
                            var opresult9007 = callmethodChecked(opresult9005, "++(1)", [1], string9000);
                            var opresult9009 = callmethodChecked(opresult9007, "++(1)", [1], call8998);
                            var opresult9011 = callmethodChecked(opresult9009, "++(1)", [1], string8993);
                            var_t = opresult9011;
                            return GraceDone;
                          };
                          var block9012 = new GraceBlock(this, 1092, 0);
                          block9012.real = function() {
                            var string9013 = new GraceString(", ");
                            var opresult9016 = callmethodChecked(var_t, "++(1)", [1], string9013);
                            var_t = opresult9016;
                            return GraceDone;
                          };
                          // call case 6: other requests
                          // call case 6: other requests
                          // call case 6: other requests
                          var call9019 = callmethodChecked(var_o, "dtype", []);
                          var call9020 = callmethodChecked(call9019, "args", []);
                          var call9021 = callmethodChecked(call9020, "do(1)separatedBy(1)", [1, 1], block8992, block9012);
                          setLineNumber(1093);    // compilenode string
                          var string9022 = new GraceString("&gt;");
                          var opresult9025 = callmethodChecked(var_t, "++(1)", [1], string9022);
                          var_t = opresult9025;
                          if8967 = GraceDone;
                        }
                        if8949 = if8967;
                      }
                      if8943 = if8949;
                    }
                    setLineNumber(1096);    // compilenode string
                    var string9026 = new GraceString("</code></td></tr>");
                    var opresult9029 = callmethodChecked(var_t, "++(1)", [1], string9026);
                    var_t = opresult9029;
                    setLineNumber(1097);    // compilenode string
                    var string9031 = new GraceString("description");
                    // call case 6: other requests
                    // call case 6: other requests
                    // call case 3: self.outer request
                    var call9034 = callmethodChecked(superDepth, "outer", [0]);
                    var call9035 = callmethodChecked(call9034, "outer", []);
                    onSelf = true;
                    var call9036 = callmethodChecked(call9035, "formatComments(1)rowClass(1)colspan(1)", [1, 1, 1], var_o, string9031, new GraceNum(3));
                    var opresult9039 = callmethodChecked(var_t, "++(1)", [1], call9036);
                    var_t = opresult9039;
                    setLineNumber(1098);    // compilenode identifier
                    // call case 6: other requests
                    // call case 4: self request
                    onSelf = true;
                    var call9042 = callmethodChecked(this, "fieldsSection", []);
                    var call9043 = callmethodChecked(call9042, "addElement(1)withText(1)", [1, 1], var_n, var_t);
                    if8918 = call9043;
                  } else {
                    var if9044 = GraceDone;
                    setLineNumber(1102);    // compilenode member
                    // call case 6: other requests
                    var call9046 = callmethodChecked(var_o, "isReadable", []);
                    if (Grace_isTrue(call9046)) {
                      setLineNumber(1104);    // compilenode member
                      // call case 6: other requests
                      // call case 6: other requests
                      var call9049 = callmethodChecked(var_o, "name", []);
                      var call9050 = callmethodChecked(call9049, "value", []);
                      var var_n = call9050;
                      setLineNumber(1105);    // compilenode string
                      var string9051 = new GraceString("");
                      // call case 6: other requests
                      // call case 6: other requests
                      var call9055 = callmethodChecked(var_o, "name", []);
                      var call9056 = callmethodChecked(call9055, "value", []);
                      var string9058 = new GraceString("<tr class='placeholder'><td class='identifier-name'>");
                      var opresult9060 = callmethodChecked(string9058, "++(1)", [1], call9056);
                      var opresult9062 = callmethodChecked(opresult9060, "++(1)", [1], string9051);
                      var var_t = opresult9062;
                      setLineNumber(1106);    // compilenode string
                      var string9063 = new GraceString("</td><td><code>");
                      var opresult9066 = callmethodChecked(var_t, "++(1)", [1], string9063);
                      var_t = opresult9066;
                      var if9067 = GraceDone;
                      setLineNumber(1107);    // compilenode member
                      // call case 6: other requests
                      var call9070 = callmethodChecked(var_o, "dtype", []);
                      var opresult9072 = callmethodChecked(call9070, "\u2260(1)", [1], GraceFalse);
                      if (Grace_isTrue(opresult9072)) {
                        var if9073 = GraceDone;
                        setLineNumber(1108);    // compilenode string
                        var string9074 = new GraceString("identifier");
                        // call case 6: other requests
                        // call case 6: other requests
                        var call9078 = callmethodChecked(var_o, "dtype", []);
                        var call9079 = callmethodChecked(call9078, "kind", []);
                        var opresult9081 = callmethodChecked(call9079, "==(1)", [1], string9074);
                        if (Grace_isTrue(opresult9081)) {
                          setLineNumber(1109);    // compilenode member
                          // call case 6: other requests
                          // call case 6: other requests
                          var call9085 = callmethodChecked(var_o, "dtype", []);
                          var call9086 = callmethodChecked(call9085, "value", []);
                          // call case 4: self request
                          onSelf = true;
                          var call9087 = callmethodChecked(this, "getTypeLink(1)", [1], call9086);
                          var opresult9090 = callmethodChecked(var_t, "++(1)", [1], call9087);
                          var_t = opresult9090;
                          if9073 = GraceDone;
                        } else {
                          var if9091 = GraceDone;
                          setLineNumber(1110);    // compilenode string
                          var string9092 = new GraceString("generic");
                          // call case 6: other requests
                          // call case 6: other requests
                          var call9096 = callmethodChecked(var_o, "dtype", []);
                          var call9097 = callmethodChecked(call9096, "kind", []);
                          var opresult9099 = callmethodChecked(call9097, "==(1)", [1], string9092);
                          if (Grace_isTrue(opresult9099)) {
                            setLineNumber(1111);    // compilenode string
                            var string9100 = new GraceString("&lt;");
                            // call case 6: other requests
                            // call case 6: other requests
                            // call case 6: other requests
                            var call9106 = callmethodChecked(var_o, "dtype", []);
                            var call9107 = callmethodChecked(call9106, "value", []);
                            var call9108 = callmethodChecked(call9107, "value", []);
                            // call case 4: self request
                            onSelf = true;
                            var call9109 = callmethodChecked(this, "getTypeLink(1)", [1], call9108);
                            var opresult9112 = callmethodChecked(var_t, "++(1)", [1], call9109);
                            var opresult9114 = callmethodChecked(opresult9112, "++(1)", [1], string9100);
                            var_t = opresult9114;
                            setLineNumber(1112);    // compilenode block
                            var block9116 = new GraceBlock(this, 1112, 1);
                            setLineNumber(1);    // compilenode identifier
                            block9116.real = function(var_each) {
                              setLineNumber(1112);    // compilenode string
                              var string9117 = new GraceString("");
                              // call case 6: other requests
                              var call9121 = callmethodChecked(var_each, "value", []);
                              // call case 4: self request
                              onSelf = true;
                              var call9122 = callmethodChecked(this, "getTypeLink(1)", [1], call9121);
                              var string9124 = new GraceString("");
                              var string9127 = new GraceString("");
                              var opresult9129 = callmethodChecked(string9127, "++(1)", [1], var_t);
                              var opresult9131 = callmethodChecked(opresult9129, "++(1)", [1], string9124);
                              var opresult9133 = callmethodChecked(opresult9131, "++(1)", [1], call9122);
                              var opresult9135 = callmethodChecked(opresult9133, "++(1)", [1], string9117);
                              var_t = opresult9135;
                              return GraceDone;
                            };
                            var block9136 = new GraceBlock(this, 1112, 0);
                            block9136.real = function() {
                              var string9137 = new GraceString(", ");
                              var opresult9140 = callmethodChecked(var_t, "++(1)", [1], string9137);
                              var_t = opresult9140;
                              return GraceDone;
                            };
                            // call case 6: other requests
                            // call case 6: other requests
                            // call case 6: other requests
                            var call9143 = callmethodChecked(var_o, "dtype", []);
                            var call9144 = callmethodChecked(call9143, "args", []);
                            var call9145 = callmethodChecked(call9144, "do(1)separatedBy(1)", [1, 1], block9116, block9136);
                            setLineNumber(1113);    // compilenode string
                            var string9146 = new GraceString("&gt;");
                            var opresult9149 = callmethodChecked(var_t, "++(1)", [1], string9146);
                            var_t = opresult9149;
                            if9091 = GraceDone;
                          }
                          if9073 = if9091;
                        }
                        if9067 = if9073;
                      }
                      setLineNumber(1116);    // compilenode string
                      var string9150 = new GraceString("</code></td></tr>");
                      var opresult9153 = callmethodChecked(var_t, "++(1)", [1], string9150);
                      var_t = opresult9153;
                      setLineNumber(1117);    // compilenode string
                      var string9155 = new GraceString("description");
                      // call case 6: other requests
                      // call case 6: other requests
                      // call case 3: self.outer request
                      var call9158 = callmethodChecked(superDepth, "outer", [0]);
                      var call9159 = callmethodChecked(call9158, "outer", []);
                      onSelf = true;
                      var call9160 = callmethodChecked(call9159, "formatComments(1)rowClass(1)colspan(1)", [1, 1, 1], var_o, string9155, new GraceNum(2));
                      var opresult9163 = callmethodChecked(var_t, "++(1)", [1], call9160);
                      var_t = opresult9163;
                      setLineNumber(1118);    // compilenode identifier
                      // call case 6: other requests
                      // call case 4: self request
                      onSelf = true;
                      var call9166 = callmethodChecked(this, "methodsSection", []);
                      var call9167 = callmethodChecked(call9166, "addElement(1)withText(1)", [1, 1], var_n, var_t);
                      if9044 = call9167;
                    }
                    if8918 = if9044;
                  }
                  setLineNumber(1121);    // compilenode identifier
                  return GraceFalse;
                } else {
                  var if9168 = GraceDone;
                  setLineNumber(1123);    // compilenode call
                  // call case 6: other requests
                  // call case 6: other requests
                  var call9171 = callmethodChecked(var_settings, "publicOnly", []);
                  var call9172 = callmethodChecked(call9171, "prefix!", [0]);
                  if (Grace_isTrue(call9172)) {
                    setLineNumber(1124);    // compilenode member
                    // call case 6: other requests
                    // call case 6: other requests
                    var call9175 = callmethodChecked(var_o, "name", []);
                    var call9176 = callmethodChecked(call9175, "value", []);
                    var var_n = call9176;
                    setLineNumber(1125);    // compilenode string
                    var string9177 = new GraceString("");
                    // call case 6: other requests
                    // call case 6: other requests
                    var call9181 = callmethodChecked(var_o, "name", []);
                    var call9182 = callmethodChecked(call9181, "value", []);
                    var string9184 = new GraceString("<tr class='placeholder'><td><code>def</code></td><td class='identifier-name'>");
                    var opresult9186 = callmethodChecked(string9184, "++(1)", [1], call9182);
                    var opresult9188 = callmethodChecked(opresult9186, "++(1)", [1], string9177);
                    var var_t = opresult9188;
                    setLineNumber(1126);    // compilenode string
                    var string9189 = new GraceString("</td><td><code>");
                    var opresult9192 = callmethodChecked(var_t, "++(1)", [1], string9189);
                    var_t = opresult9192;
                    var if9193 = GraceDone;
                    setLineNumber(1127);    // compilenode member
                    // call case 6: other requests
                    var call9196 = callmethodChecked(var_o, "dtype", []);
                    var opresult9198 = callmethodChecked(call9196, "\u2260(1)", [1], GraceFalse);
                    if (Grace_isTrue(opresult9198)) {
                      var if9199 = GraceDone;
                      setLineNumber(1128);    // compilenode string
                      var string9200 = new GraceString("identifier");
                      // call case 6: other requests
                      // call case 6: other requests
                      var call9204 = callmethodChecked(var_o, "dtype", []);
                      var call9205 = callmethodChecked(call9204, "kind", []);
                      var opresult9207 = callmethodChecked(call9205, "==(1)", [1], string9200);
                      if (Grace_isTrue(opresult9207)) {
                        setLineNumber(1129);    // compilenode member
                        // call case 6: other requests
                        // call case 6: other requests
                        var call9211 = callmethodChecked(var_o, "dtype", []);
                        var call9212 = callmethodChecked(call9211, "value", []);
                        // call case 4: self request
                        onSelf = true;
                        var call9213 = callmethodChecked(this, "getTypeLink(1)", [1], call9212);
                        var opresult9216 = callmethodChecked(var_t, "++(1)", [1], call9213);
                        var_t = opresult9216;
                        if9199 = GraceDone;
                      } else {
                        var if9217 = GraceDone;
                        setLineNumber(1130);    // compilenode string
                        var string9218 = new GraceString("generic");
                        // call case 6: other requests
                        // call case 6: other requests
                        var call9222 = callmethodChecked(var_o, "dtype", []);
                        var call9223 = callmethodChecked(call9222, "kind", []);
                        var opresult9225 = callmethodChecked(call9223, "==(1)", [1], string9218);
                        if (Grace_isTrue(opresult9225)) {
                          setLineNumber(1131);    // compilenode string
                          var string9226 = new GraceString("&lt;");
                          // call case 6: other requests
                          // call case 6: other requests
                          // call case 6: other requests
                          var call9232 = callmethodChecked(var_o, "dtype", []);
                          var call9233 = callmethodChecked(call9232, "value", []);
                          var call9234 = callmethodChecked(call9233, "value", []);
                          // call case 4: self request
                          onSelf = true;
                          var call9235 = callmethodChecked(this, "getTypeLink(1)", [1], call9234);
                          var opresult9238 = callmethodChecked(var_t, "++(1)", [1], call9235);
                          var opresult9240 = callmethodChecked(opresult9238, "++(1)", [1], string9226);
                          var_t = opresult9240;
                          setLineNumber(1132);    // compilenode block
                          var block9242 = new GraceBlock(this, 1132, 1);
                          setLineNumber(1);    // compilenode identifier
                          block9242.real = function(var_each) {
                            setLineNumber(1132);    // compilenode string
                            var string9243 = new GraceString("");
                            // call case 6: other requests
                            var call9246 = callmethodChecked(var_each, "value", []);
                            var string9248 = new GraceString("");
                            var string9251 = new GraceString("");
                            var opresult9253 = callmethodChecked(string9251, "++(1)", [1], var_t);
                            var opresult9255 = callmethodChecked(opresult9253, "++(1)", [1], string9248);
                            var opresult9257 = callmethodChecked(opresult9255, "++(1)", [1], call9246);
                            var opresult9259 = callmethodChecked(opresult9257, "++(1)", [1], string9243);
                            var_t = opresult9259;
                            return GraceDone;
                          };
                          var block9260 = new GraceBlock(this, 1132, 0);
                          block9260.real = function() {
                            var string9261 = new GraceString(", ");
                            var opresult9264 = callmethodChecked(var_t, "++(1)", [1], string9261);
                            var_t = opresult9264;
                            return GraceDone;
                          };
                          // call case 6: other requests
                          // call case 6: other requests
                          // call case 6: other requests
                          var call9267 = callmethodChecked(var_o, "dtype", []);
                          var call9268 = callmethodChecked(call9267, "args", []);
                          var call9269 = callmethodChecked(call9268, "do(1)separatedBy(1)", [1, 1], block9242, block9260);
                          setLineNumber(1133);    // compilenode string
                          var string9270 = new GraceString("&gt;");
                          var opresult9273 = callmethodChecked(var_t, "++(1)", [1], string9270);
                          var_t = opresult9273;
                          if9217 = GraceDone;
                        }
                        if9199 = if9217;
                      }
                      if9193 = if9199;
                    }
                    setLineNumber(1136);    // compilenode string
                    var string9274 = new GraceString("</code></td></tr>");
                    var opresult9277 = callmethodChecked(var_t, "++(1)", [1], string9274);
                    var_t = opresult9277;
                    setLineNumber(1137);    // compilenode string
                    var string9279 = new GraceString("description");
                    // call case 6: other requests
                    // call case 6: other requests
                    // call case 3: self.outer request
                    var call9282 = callmethodChecked(superDepth, "outer", [0]);
                    var call9283 = callmethodChecked(call9282, "outer", []);
                    onSelf = true;
                    var call9284 = callmethodChecked(call9283, "formatComments(1)rowClass(1)colspan(1)", [1, 1, 1], var_o, string9279, new GraceNum(3));
                    var opresult9287 = callmethodChecked(var_t, "++(1)", [1], call9284);
                    var_t = opresult9287;
                    setLineNumber(1138);    // compilenode identifier
                    // call case 6: other requests
                    // call case 4: self request
                    onSelf = true;
                    var call9290 = callmethodChecked(this, "fieldsSection", []);
                    var call9291 = callmethodChecked(call9290, "addElement(1)withText(1)", [1, 1], var_n, var_t);
                    if9168 = call9291;
                  } else {
                    var if9292 = GraceDone;
                    setLineNumber(1142);    // compilenode member
                    // call case 6: other requests
                    var call9294 = callmethodChecked(var_o, "isReadable", []);
                    if (Grace_isTrue(call9294)) {
                      setLineNumber(1143);    // compilenode string
                      var string9295 = new GraceString("");
                      // call case 6: other requests
                      // call case 6: other requests
                      var call9299 = callmethodChecked(var_o, "name", []);
                      var call9300 = callmethodChecked(call9299, "value", []);
                      var string9302 = new GraceString("<tr class='placeholder'><td class='identifier-name'>");
                      var opresult9304 = callmethodChecked(string9302, "++(1)", [1], call9300);
                      var opresult9306 = callmethodChecked(opresult9304, "++(1)", [1], string9295);
                      var var_t = opresult9306;
                      setLineNumber(1144);    // compilenode member
                      // call case 6: other requests
                      // call case 6: other requests
                      var call9309 = callmethodChecked(var_o, "name", []);
                      var call9310 = callmethodChecked(call9309, "value", []);
                      var var_n = call9310;
                      setLineNumber(1145);    // compilenode string
                      var string9311 = new GraceString("</td><td><code>");
                      var opresult9314 = callmethodChecked(var_t, "++(1)", [1], string9311);
                      var_t = opresult9314;
                      var if9315 = GraceDone;
                      setLineNumber(1146);    // compilenode member
                      // call case 6: other requests
                      var call9318 = callmethodChecked(var_o, "dtype", []);
                      var opresult9320 = callmethodChecked(call9318, "\u2260(1)", [1], GraceFalse);
                      if (Grace_isTrue(opresult9320)) {
                        var if9321 = GraceDone;
                        setLineNumber(1147);    // compilenode string
                        var string9322 = new GraceString("identifier");
                        // call case 6: other requests
                        // call case 6: other requests
                        var call9326 = callmethodChecked(var_o, "dtype", []);
                        var call9327 = callmethodChecked(call9326, "kind", []);
                        var opresult9329 = callmethodChecked(call9327, "==(1)", [1], string9322);
                        if (Grace_isTrue(opresult9329)) {
                          setLineNumber(1148);    // compilenode member
                          // call case 6: other requests
                          // call case 6: other requests
                          var call9333 = callmethodChecked(var_o, "dtype", []);
                          var call9334 = callmethodChecked(call9333, "value", []);
                          // call case 4: self request
                          onSelf = true;
                          var call9335 = callmethodChecked(this, "getTypeLink(1)", [1], call9334);
                          var opresult9338 = callmethodChecked(var_t, "++(1)", [1], call9335);
                          var_t = opresult9338;
                          if9321 = GraceDone;
                        } else {
                          var if9339 = GraceDone;
                          setLineNumber(1149);    // compilenode string
                          var string9340 = new GraceString("generic");
                          // call case 6: other requests
                          // call case 6: other requests
                          var call9344 = callmethodChecked(var_o, "dtype", []);
                          var call9345 = callmethodChecked(call9344, "kind", []);
                          var opresult9347 = callmethodChecked(call9345, "==(1)", [1], string9340);
                          if (Grace_isTrue(opresult9347)) {
                            setLineNumber(1150);    // compilenode string
                            var string9348 = new GraceString("&lt;");
                            // call case 6: other requests
                            // call case 6: other requests
                            // call case 6: other requests
                            var call9354 = callmethodChecked(var_o, "dtype", []);
                            var call9355 = callmethodChecked(call9354, "value", []);
                            var call9356 = callmethodChecked(call9355, "value", []);
                            // call case 4: self request
                            onSelf = true;
                            var call9357 = callmethodChecked(this, "getTypeLink(1)", [1], call9356);
                            var opresult9360 = callmethodChecked(var_t, "++(1)", [1], call9357);
                            var opresult9362 = callmethodChecked(opresult9360, "++(1)", [1], string9348);
                            var_t = opresult9362;
                            setLineNumber(1151);    // compilenode block
                            var block9364 = new GraceBlock(this, 1151, 1);
                            setLineNumber(1);    // compilenode identifier
                            block9364.real = function(var_each) {
                              setLineNumber(1151);    // compilenode string
                              var string9365 = new GraceString("");
                              // call case 6: other requests
                              var call9369 = callmethodChecked(var_each, "value", []);
                              // call case 4: self request
                              onSelf = true;
                              var call9370 = callmethodChecked(this, "getTypeLink(1)", [1], call9369);
                              var string9372 = new GraceString("");
                              var string9375 = new GraceString("");
                              var opresult9377 = callmethodChecked(string9375, "++(1)", [1], var_t);
                              var opresult9379 = callmethodChecked(opresult9377, "++(1)", [1], string9372);
                              var opresult9381 = callmethodChecked(opresult9379, "++(1)", [1], call9370);
                              var opresult9383 = callmethodChecked(opresult9381, "++(1)", [1], string9365);
                              var_t = opresult9383;
                              return GraceDone;
                            };
                            var block9384 = new GraceBlock(this, 1151, 0);
                            block9384.real = function() {
                              var string9385 = new GraceString(", ");
                              var opresult9388 = callmethodChecked(var_t, "++(1)", [1], string9385);
                              var_t = opresult9388;
                              return GraceDone;
                            };
                            // call case 6: other requests
                            // call case 6: other requests
                            // call case 6: other requests
                            var call9391 = callmethodChecked(var_o, "dtype", []);
                            var call9392 = callmethodChecked(call9391, "args", []);
                            var call9393 = callmethodChecked(call9392, "do(1)separatedBy(1)", [1, 1], block9364, block9384);
                            setLineNumber(1152);    // compilenode string
                            var string9394 = new GraceString("&gt;");
                            var opresult9397 = callmethodChecked(var_t, "++(1)", [1], string9394);
                            var_t = opresult9397;
                            if9339 = GraceDone;
                          }
                          if9321 = if9339;
                        }
                        if9315 = if9321;
                      }
                      setLineNumber(1155);    // compilenode string
                      var string9398 = new GraceString("</code></td></tr>");
                      var opresult9401 = callmethodChecked(var_t, "++(1)", [1], string9398);
                      var_t = opresult9401;
                      setLineNumber(1156);    // compilenode string
                      var string9403 = new GraceString("description");
                      // call case 6: other requests
                      // call case 6: other requests
                      // call case 3: self.outer request
                      var call9406 = callmethodChecked(superDepth, "outer", [0]);
                      var call9407 = callmethodChecked(call9406, "outer", []);
                      onSelf = true;
                      var call9408 = callmethodChecked(call9407, "formatComments(1)rowClass(1)colspan(1)", [1, 1, 1], var_o, string9403, new GraceNum(2));
                      var opresult9411 = callmethodChecked(var_t, "++(1)", [1], call9408);
                      var_t = opresult9411;
                      setLineNumber(1157);    // compilenode identifier
                      // call case 6: other requests
                      // call case 4: self request
                      onSelf = true;
                      var call9414 = callmethodChecked(this, "methodsSection", []);
                      var call9415 = callmethodChecked(call9414, "addElement(1)withText(1)", [1, 1], var_n, var_t);
                      if9292 = call9415;
                    }
                    if9168 = if9292;
                  }
                  setLineNumber(1160);    // compilenode identifier
                  return GraceFalse;
                }
                setLineNumber(1082);    // return value
                if (!Grace_isTrue(callmethod(var_Boolean, "match(1)", [1], if8912)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitDefDec(_) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return if8912;
              };
              func8911.paramCounts = [1];
              obj6123.methods["visitDefDec(1)"] = func8911;
              func8911.definitionLine = 1081;
              func8911.definitionModule = "gracedoc";
              var func9416 = function(argcv) {    // method visitVarDec(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_o = arguments[curarg];
                curarg++;
                setModuleName("gracedoc");
                setLineNumber(1165);    // compilenode member
                // call case 6: other requests
                var call9418 = callmethodChecked(var_o, "nameString", []);
                var var_n = call9418;
                var if9419 = GraceDone;
                setLineNumber(1166);    // compilenode member
                // call case 4: self request
                onSelf = true;
                var call9422 = callmethodChecked(this, "isOnClassPage", []);
                var opresult9424 = callmethodChecked(call9422, "==(1)", [1], GraceTrue);
                if (Grace_isTrue(opresult9424)) {
                  var if9425 = GraceDone;
                  setLineNumber(1167);    // compilenode call
                  // call case 6: other requests
                  // call case 6: other requests
                  var call9428 = callmethodChecked(var_settings, "publicOnly", []);
                  var call9429 = callmethodChecked(call9428, "prefix!", [0]);
                  if (Grace_isTrue(call9429)) {
                    setLineNumber(1168);    // compilenode string
                    var string9430 = new GraceString("");
                    // call case 6: other requests
                    // call case 6: other requests
                    var call9434 = callmethodChecked(var_o, "name", []);
                    var call9435 = callmethodChecked(call9434, "value", []);
                    var string9437 = new GraceString("<tr class='placeholder'><td><code>var</code></td><td class='identifier-name'>");
                    var opresult9439 = callmethodChecked(string9437, "++(1)", [1], call9435);
                    var opresult9441 = callmethodChecked(opresult9439, "++(1)", [1], string9430);
                    var var_t = opresult9441;
                    setLineNumber(1169);    // compilenode string
                    var string9442 = new GraceString("</td><td><code>");
                    var opresult9445 = callmethodChecked(var_t, "++(1)", [1], string9442);
                    var_t = opresult9445;
                    var if9446 = GraceDone;
                    setLineNumber(1170);    // compilenode member
                    // call case 6: other requests
                    var call9449 = callmethodChecked(var_o, "dtype", []);
                    var opresult9451 = callmethodChecked(call9449, "\u2260(1)", [1], GraceFalse);
                    if (Grace_isTrue(opresult9451)) {
                      setLineNumber(1171);    // compilenode string
                      var string9452 = new GraceString("");
                      // call case 6: other requests
                      // call case 6: other requests
                      var call9457 = callmethodChecked(var_o, "dtype", []);
                      var call9458 = callmethodChecked(call9457, "value", []);
                      // call case 4: self request
                      onSelf = true;
                      var call9459 = callmethodChecked(this, "getTypeLink(1)", [1], call9458);
                      var string9461 = new GraceString("");
                      var opresult9463 = callmethodChecked(string9461, "++(1)", [1], call9459);
                      var opresult9465 = callmethodChecked(opresult9463, "++(1)", [1], string9452);
                      var opresult9468 = callmethodChecked(var_t, "++(1)", [1], opresult9465);
                      var_t = opresult9468;
                      if9446 = GraceDone;
                    }
                    setLineNumber(1173);    // compilenode string
                    var string9469 = new GraceString("</code></td></tr>");
                    var opresult9472 = callmethodChecked(var_t, "++(1)", [1], string9469);
                    var_t = opresult9472;
                    setLineNumber(1174);    // compilenode string
                    var string9474 = new GraceString("description");
                    // call case 6: other requests
                    // call case 6: other requests
                    // call case 3: self.outer request
                    var call9477 = callmethodChecked(superDepth, "outer", [0]);
                    var call9478 = callmethodChecked(call9477, "outer", []);
                    onSelf = true;
                    var call9479 = callmethodChecked(call9478, "formatComments(1)rowClass(1)colspan(1)", [1, 1, 1], var_o, string9474, new GraceNum(3));
                    var opresult9482 = callmethodChecked(var_t, "++(1)", [1], call9479);
                    var_t = opresult9482;
                    setLineNumber(1175);    // compilenode identifier
                    // call case 6: other requests
                    // call case 4: self request
                    onSelf = true;
                    var call9485 = callmethodChecked(this, "fieldsSection", []);
                    var call9486 = callmethodChecked(call9485, "addElement(1)withText(1)", [1, 1], var_n, var_t);
                    if9425 = call9486;
                  } else {
                    var if9487 = GraceDone;
                    setLineNumber(1177);    // compilenode member
                    // call case 6: other requests
                    var call9489 = callmethodChecked(var_o, "isReadable", []);
                    if (Grace_isTrue(call9489)) {
                      setLineNumber(1178);    // compilenode string
                      var string9490 = new GraceString("");
                      // call case 6: other requests
                      // call case 6: other requests
                      var call9494 = callmethodChecked(var_o, "name", []);
                      var call9495 = callmethodChecked(call9494, "value", []);
                      var string9497 = new GraceString("<tr class='placeholder'><td class='identifier-name'>");
                      var opresult9499 = callmethodChecked(string9497, "++(1)", [1], call9495);
                      var opresult9501 = callmethodChecked(opresult9499, "++(1)", [1], string9490);
                      var var_t = opresult9501;
                      setLineNumber(1179);    // compilenode string
                      var string9502 = new GraceString("</td><td>");
                      var opresult9505 = callmethodChecked(var_t, "++(1)", [1], string9502);
                      var_t = opresult9505;
                      var if9506 = GraceDone;
                      setLineNumber(1180);    // compilenode member
                      // call case 6: other requests
                      var call9509 = callmethodChecked(var_o, "dtype", []);
                      var opresult9511 = callmethodChecked(call9509, "\u2260(1)", [1], GraceFalse);
                      if (Grace_isTrue(opresult9511)) {
                        setLineNumber(1181);    // compilenode string
                        var string9512 = new GraceString("");
                        // call case 6: other requests
                        // call case 6: other requests
                        var call9517 = callmethodChecked(var_o, "dtype", []);
                        var call9518 = callmethodChecked(call9517, "value", []);
                        // call case 4: self request
                        onSelf = true;
                        var call9519 = callmethodChecked(this, "getTypeLink(1)", [1], call9518);
                        var string9521 = new GraceString("");
                        var opresult9523 = callmethodChecked(string9521, "++(1)", [1], call9519);
                        var opresult9525 = callmethodChecked(opresult9523, "++(1)", [1], string9512);
                        var opresult9528 = callmethodChecked(var_t, "++(1)", [1], opresult9525);
                        var_t = opresult9528;
                        if9506 = GraceDone;
                      }
                      setLineNumber(1183);    // compilenode string
                      var string9529 = new GraceString("</code></td></tr>");
                      var opresult9532 = callmethodChecked(var_t, "++(1)", [1], string9529);
                      var_t = opresult9532;
                      setLineNumber(1184);    // compilenode string
                      var string9534 = new GraceString("description");
                      // call case 6: other requests
                      // call case 6: other requests
                      // call case 3: self.outer request
                      var call9537 = callmethodChecked(superDepth, "outer", [0]);
                      var call9538 = callmethodChecked(call9537, "outer", []);
                      onSelf = true;
                      var call9539 = callmethodChecked(call9538, "formatComments(1)rowClass(1)colspan(1)", [1, 1, 1], var_o, string9534, new GraceNum(2));
                      var opresult9542 = callmethodChecked(var_t, "++(1)", [1], call9539);
                      var_t = opresult9542;
                      setLineNumber(1185);    // compilenode identifier
                      // call case 6: other requests
                      // call case 4: self request
                      onSelf = true;
                      var call9545 = callmethodChecked(this, "methodsSection", []);
                      var call9546 = callmethodChecked(call9545, "addElement(1)withText(1)", [1, 1], var_n, var_t);
                      if9487 = call9546;
                    }
                    var if9547 = GraceDone;
                    setLineNumber(1187);    // compilenode member
                    // call case 6: other requests
                    var call9549 = callmethodChecked(var_o, "isWritable", []);
                    if (Grace_isTrue(call9549)) {
                      setLineNumber(1188);    // compilenode string
                      var string9550 = new GraceString(":=</span>");
                      // call case 6: other requests
                      // call case 6: other requests
                      var call9554 = callmethodChecked(var_o, "name", []);
                      var call9555 = callmethodChecked(call9554, "value", []);
                      var string9557 = new GraceString("<tr class='placeholder'><td><code><span class='method-name'>");
                      var opresult9559 = callmethodChecked(string9557, "++(1)", [1], call9555);
                      var opresult9561 = callmethodChecked(opresult9559, "++(1)", [1], string9550);
                      var var_t = opresult9561;
                      var if9562 = GraceDone;
                      setLineNumber(1189);    // compilenode member
                      // call case 6: other requests
                      var call9565 = callmethodChecked(var_o, "dtype", []);
                      var opresult9567 = callmethodChecked(call9565, "\u2260(1)", [1], GraceFalse);
                      if (Grace_isTrue(opresult9567)) {
                        setLineNumber(1190);    // compilenode string
                        var string9568 = new GraceString(")");
                        // call case 6: other requests
                        // call case 6: other requests
                        var call9573 = callmethodChecked(var_o, "dtype", []);
                        var call9574 = callmethodChecked(call9573, "value", []);
                        // call case 4: self request
                        onSelf = true;
                        var call9575 = callmethodChecked(this, "getTypeLink(1)", [1], call9574);
                        var string9577 = new GraceString("(_:");
                        var opresult9579 = callmethodChecked(string9577, "++(1)", [1], call9575);
                        var opresult9581 = callmethodChecked(opresult9579, "++(1)", [1], string9568);
                        var opresult9584 = callmethodChecked(var_t, "++(1)", [1], opresult9581);
                        var_t = opresult9584;
                        if9562 = GraceDone;
                      }
                      setLineNumber(1192);    // compilenode string
                      var string9585 = new GraceString("</code></td><td><code>Done</code></td></tr>");
                      var opresult9588 = callmethodChecked(var_t, "++(1)", [1], string9585);
                      var_t = opresult9588;
                      setLineNumber(1193);    // compilenode string
                      var string9589 = new GraceString("</td></tr>");
                      var string9592 = new GraceString("<tr class='description'><td colspan='2'>Updates ");
                      var opresult9594 = callmethodChecked(string9592, "++(1)", [1], var_n);
                      var opresult9596 = callmethodChecked(opresult9594, "++(1)", [1], string9589);
                      var opresult9599 = callmethodChecked(var_t, "++(1)", [1], opresult9596);
                      var_t = opresult9599;
                      setLineNumber(1194);    // compilenode string
                      var string9601 = new GraceString(":=");
                      var opresult9604 = callmethodChecked(var_n, "++(1)", [1], string9601);
                      // call case 6: other requests
                      // call case 4: self request
                      onSelf = true;
                      var call9606 = callmethodChecked(this, "methodsSection", []);
                      var call9607 = callmethodChecked(call9606, "addElement(1)withText(1)", [1, 1], opresult9604, var_t);
                      if9547 = call9607;
                    }
                    if9425 = if9547;
                  }
                  setLineNumber(1197);    // compilenode identifier
                  return GraceFalse;
                } else {
                  var if9608 = GraceDone;
                  setLineNumber(1199);    // compilenode call
                  // call case 6: other requests
                  // call case 6: other requests
                  var call9611 = callmethodChecked(var_settings, "publicOnly", []);
                  var call9612 = callmethodChecked(call9611, "prefix!", [0]);
                  if (Grace_isTrue(call9612)) {
                    setLineNumber(1200);    // compilenode string
                    var string9613 = new GraceString("");
                    // call case 6: other requests
                    // call case 6: other requests
                    var call9617 = callmethodChecked(var_o, "name", []);
                    var call9618 = callmethodChecked(call9617, "value", []);
                    var string9620 = new GraceString("<tr class='placeholder'><td><code>var</code></td><td class='identifier-name'>");
                    var opresult9622 = callmethodChecked(string9620, "++(1)", [1], call9618);
                    var opresult9624 = callmethodChecked(opresult9622, "++(1)", [1], string9613);
                    var var_t = opresult9624;
                    setLineNumber(1201);    // compilenode string
                    var string9625 = new GraceString("</td><td><code>");
                    var opresult9628 = callmethodChecked(var_t, "++(1)", [1], string9625);
                    var_t = opresult9628;
                    var if9629 = GraceDone;
                    setLineNumber(1202);    // compilenode member
                    // call case 6: other requests
                    var call9632 = callmethodChecked(var_o, "dtype", []);
                    var opresult9634 = callmethodChecked(call9632, "\u2260(1)", [1], GraceFalse);
                    if (Grace_isTrue(opresult9634)) {
                      setLineNumber(1203);    // compilenode string
                      var string9635 = new GraceString("");
                      // call case 6: other requests
                      // call case 6: other requests
                      var call9640 = callmethodChecked(var_o, "dtype", []);
                      var call9641 = callmethodChecked(call9640, "value", []);
                      // call case 4: self request
                      onSelf = true;
                      var call9642 = callmethodChecked(this, "getTypeLink(1)", [1], call9641);
                      var string9644 = new GraceString("");
                      var opresult9646 = callmethodChecked(string9644, "++(1)", [1], call9642);
                      var opresult9648 = callmethodChecked(opresult9646, "++(1)", [1], string9635);
                      var opresult9651 = callmethodChecked(var_t, "++(1)", [1], opresult9648);
                      var_t = opresult9651;
                      if9629 = GraceDone;
                    }
                    setLineNumber(1205);    // compilenode string
                    var string9652 = new GraceString("</code></td></tr>");
                    var opresult9655 = callmethodChecked(var_t, "++(1)", [1], string9652);
                    var_t = opresult9655;
                    setLineNumber(1206);    // compilenode string
                    var string9657 = new GraceString("description");
                    // call case 6: other requests
                    // call case 6: other requests
                    // call case 3: self.outer request
                    var call9660 = callmethodChecked(superDepth, "outer", [0]);
                    var call9661 = callmethodChecked(call9660, "outer", []);
                    onSelf = true;
                    var call9662 = callmethodChecked(call9661, "formatComments(1)rowClass(1)colspan(1)", [1, 1, 1], var_o, string9657, new GraceNum(3));
                    var opresult9665 = callmethodChecked(var_t, "++(1)", [1], call9662);
                    var_t = opresult9665;
                    setLineNumber(1207);    // compilenode identifier
                    // call case 6: other requests
                    // call case 4: self request
                    onSelf = true;
                    var call9668 = callmethodChecked(this, "fieldsSection", []);
                    var call9669 = callmethodChecked(call9668, "addElement(1)withText(1)", [1, 1], var_n, var_t);
                    if9608 = call9669;
                  } else {
                    var if9670 = GraceDone;
                    setLineNumber(1209);    // compilenode member
                    // call case 6: other requests
                    var call9672 = callmethodChecked(var_o, "isReadable", []);
                    if (Grace_isTrue(call9672)) {
                      setLineNumber(1210);    // compilenode string
                      var string9673 = new GraceString("");
                      // call case 6: other requests
                      // call case 6: other requests
                      var call9677 = callmethodChecked(var_o, "name", []);
                      var call9678 = callmethodChecked(call9677, "value", []);
                      var string9680 = new GraceString("<tr class='placeholder'><td class='identifier-name'>");
                      var opresult9682 = callmethodChecked(string9680, "++(1)", [1], call9678);
                      var opresult9684 = callmethodChecked(opresult9682, "++(1)", [1], string9673);
                      var var_t = opresult9684;
                      setLineNumber(1211);    // compilenode string
                      var string9685 = new GraceString("</td><td><code>");
                      var opresult9688 = callmethodChecked(var_t, "++(1)", [1], string9685);
                      var_t = opresult9688;
                      var if9689 = GraceDone;
                      setLineNumber(1212);    // compilenode member
                      // call case 6: other requests
                      var call9692 = callmethodChecked(var_o, "dtype", []);
                      var opresult9694 = callmethodChecked(call9692, "\u2260(1)", [1], GraceFalse);
                      if (Grace_isTrue(opresult9694)) {
                        setLineNumber(1213);    // compilenode string
                        var string9695 = new GraceString("");
                        // call case 6: other requests
                        // call case 6: other requests
                        var call9700 = callmethodChecked(var_o, "dtype", []);
                        var call9701 = callmethodChecked(call9700, "value", []);
                        // call case 4: self request
                        onSelf = true;
                        var call9702 = callmethodChecked(this, "getTypeLink(1)", [1], call9701);
                        var string9704 = new GraceString("");
                        var opresult9706 = callmethodChecked(string9704, "++(1)", [1], call9702);
                        var opresult9708 = callmethodChecked(opresult9706, "++(1)", [1], string9695);
                        var opresult9711 = callmethodChecked(var_t, "++(1)", [1], opresult9708);
                        var_t = opresult9711;
                        if9689 = GraceDone;
                      }
                      setLineNumber(1215);    // compilenode string
                      var string9712 = new GraceString("</code></td></tr>");
                      var opresult9715 = callmethodChecked(var_t, "++(1)", [1], string9712);
                      var_t = opresult9715;
                      setLineNumber(1216);    // compilenode string
                      var string9717 = new GraceString("description");
                      // call case 6: other requests
                      // call case 6: other requests
                      // call case 3: self.outer request
                      var call9720 = callmethodChecked(superDepth, "outer", [0]);
                      var call9721 = callmethodChecked(call9720, "outer", []);
                      onSelf = true;
                      var call9722 = callmethodChecked(call9721, "formatComments(1)rowClass(1)colspan(1)", [1, 1, 1], var_o, string9717, new GraceNum(2));
                      var opresult9725 = callmethodChecked(var_t, "++(1)", [1], call9722);
                      var_t = opresult9725;
                      setLineNumber(1217);    // compilenode identifier
                      // call case 6: other requests
                      // call case 4: self request
                      onSelf = true;
                      var call9728 = callmethodChecked(this, "methodsSection", []);
                      var call9729 = callmethodChecked(call9728, "addElement(1)withText(1)", [1, 1], var_n, var_t);
                      if9670 = call9729;
                    }
                    var if9730 = GraceDone;
                    setLineNumber(1219);    // compilenode member
                    // call case 6: other requests
                    var call9732 = callmethodChecked(var_o, "isWritable", []);
                    if (Grace_isTrue(call9732)) {
                      setLineNumber(1220);    // compilenode string
                      var string9733 = new GraceString(":=</span>");
                      var string9736 = new GraceString("<tr class='placeholder'><td><code><span class='method-name'>");
                      var opresult9738 = callmethodChecked(string9736, "++(1)", [1], var_n);
                      var opresult9740 = callmethodChecked(opresult9738, "++(1)", [1], string9733);
                      var var_t = opresult9740;
                      var if9741 = GraceDone;
                      setLineNumber(1221);    // compilenode member
                      // call case 6: other requests
                      var call9744 = callmethodChecked(var_o, "dtype", []);
                      var opresult9746 = callmethodChecked(call9744, "\u2260(1)", [1], GraceFalse);
                      if (Grace_isTrue(opresult9746)) {
                        setLineNumber(1222);    // compilenode string
                        var string9747 = new GraceString(")");
                        // call case 6: other requests
                        // call case 6: other requests
                        var call9752 = callmethodChecked(var_o, "dtype", []);
                        var call9753 = callmethodChecked(call9752, "value", []);
                        // call case 4: self request
                        onSelf = true;
                        var call9754 = callmethodChecked(this, "getTypeLink(1)", [1], call9753);
                        var string9756 = new GraceString("(_:");
                        var opresult9758 = callmethodChecked(string9756, "++(1)", [1], call9754);
                        var opresult9760 = callmethodChecked(opresult9758, "++(1)", [1], string9747);
                        var opresult9763 = callmethodChecked(var_t, "++(1)", [1], opresult9760);
                        var_t = opresult9763;
                        if9741 = GraceDone;
                      }
                      setLineNumber(1224);    // compilenode string
                      var string9764 = new GraceString("</code></td><td><code>Done</code></td></tr>");
                      var opresult9767 = callmethodChecked(var_t, "++(1)", [1], string9764);
                      var_t = opresult9767;
                      setLineNumber(1225);    // compilenode string
                      var string9768 = new GraceString("</td></tr>");
                      var string9771 = new GraceString("<tr class='description'><td colspan='2'>Updates ");
                      var opresult9773 = callmethodChecked(string9771, "++(1)", [1], var_n);
                      var opresult9775 = callmethodChecked(opresult9773, "++(1)", [1], string9768);
                      var opresult9778 = callmethodChecked(var_t, "++(1)", [1], opresult9775);
                      var_t = opresult9778;
                      setLineNumber(1226);    // compilenode string
                      var string9780 = new GraceString(":=");
                      var string9783 = new GraceString("");
                      var opresult9785 = callmethodChecked(string9783, "++(1)", [1], var_n);
                      var opresult9787 = callmethodChecked(opresult9785, "++(1)", [1], string9780);
                      // call case 6: other requests
                      // call case 4: self request
                      onSelf = true;
                      var call9789 = callmethodChecked(this, "methodsSection", []);
                      var call9790 = callmethodChecked(call9789, "addElement(1)withText(1)", [1, 1], opresult9787, var_t);
                      if9730 = call9790;
                    }
                    if9608 = if9730;
                  }
                  setLineNumber(1229);    // compilenode identifier
                  return GraceFalse;
                }
                setLineNumber(1166);    // return value
                if (!Grace_isTrue(callmethod(var_Boolean, "match(1)", [1], if9419)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("result of method visitVarDec(_) does not have " + 
                            callmethod(var_Boolean, "asString", [0])._value + "."));
                return if9419;
              };
              func9416.paramCounts = [1];
              obj6123.methods["visitVarDec(1)"] = func9416;
              func9416.definitionLine = 1164;
              func9416.definitionModule = "gracedoc";
              var func9791 = function(argcv) {    // method visitInherits(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_o = arguments[curarg];
                curarg++;
                setModuleName("gracedoc");
                setLineNumber(1237);    // compilenode identifier
                return GraceTrue;
              };
              func9791.paramCounts = [1];
              obj6123.methods["visitInherits(1)"] = func9791;
              func9791.definitionLine = 1233;
              func9791.definitionModule = "gracedoc";
              setLineNumber(315);    // compilenode identifier
              // call case 6: other requests
              var call9793 = callmethodChecked(var_ast, "baseVisitor$object(1)", [0, 1], this);
              obj6123.superobj = call9793;
              if (call9793.data) obj6123.data = call9793.data;
              if (call9793.hasOwnProperty('_value'))
                  obj6123._value = call9793._value;
              setLineNumber(317);    // compilenode identifier
              obj6123.data["isOnClassPage"] = GraceFalse;
              var reader_gracedoc_isOnClassPage9794 = function() {
                return this.data["isOnClassPage"];
              };
              obj6123.methods["isOnClassPage"] = reader_gracedoc_isOnClassPage9794;
              obj6123.data["isOnClassPage"] = GraceFalse;
              var writer_gracedoc_isOnClassPage9794 = function(argcv, o) {
                this.data["isOnClassPage"] = o;
                return GraceDone;
              };
              obj6123.methods["isOnClassPage:=(1)"] = writer_gracedoc_isOnClassPage9794;
              reader_gracedoc_isOnClassPage9794.confidential = true;
              writer_gracedoc_isOnClassPage9794.confidential = true;
              obj6123.mutable = true;
              setLineNumber(318);    // compilenode identifier
              obj6123.data["isOnTypePage"] = GraceFalse;
              var reader_gracedoc_isOnTypePage9795 = function() {
                return this.data["isOnTypePage"];
              };
              obj6123.methods["isOnTypePage"] = reader_gracedoc_isOnTypePage9795;
              obj6123.data["isOnTypePage"] = GraceFalse;
              var writer_gracedoc_isOnTypePage9795 = function(argcv, o) {
                this.data["isOnTypePage"] = o;
                return GraceDone;
              };
              obj6123.methods["isOnTypePage:=(1)"] = writer_gracedoc_isOnTypePage9795;
              reader_gracedoc_isOnTypePage9795.confidential = true;
              writer_gracedoc_isOnTypePage9795.confidential = true;
              obj6123.mutable = true;
              var if9796 = GraceDone;
              setLineNumber(319);    // compilenode string
              var string9797 = new GraceString("class");
              var opresult9800 = callmethodChecked(var_pageType, "==(1)", [1], string9797);
              if (Grace_isTrue(opresult9800)) {
                // call case 4: self request
                onSelf = true;
                var call9802 = callmethodChecked(this, "isOnClassPage:=(1)", [1], GraceTrue);
                if9796 = call9802;
              } else {
                var if9803 = GraceDone;
                setLineNumber(320);    // compilenode string
                var string9804 = new GraceString("type");
                var opresult9807 = callmethodChecked(var_pageType, "==(1)", [1], string9804);
                if (Grace_isTrue(opresult9807)) {
                  // call case 4: self request
                  onSelf = true;
                  var call9809 = callmethodChecked(this, "isOnTypePage:=(1)", [1], GraceTrue);
                  if9803 = call9809;
                }
                if9796 = if9803;
              }
              var if9810 = GraceDone;
              setLineNumber(322);    // compilenode member
              // call case 6: other requests
              var string9813 = new GraceString(".grace");
              // call case 6: other requests
              var call9814 = callmethodChecked(var_in, "endsWith(1)", [1], string9813);
              var call9815 = callmethodChecked(call9814, "not", []);
              if (Grace_isTrue(call9815)) {
                if9810 = var_in;
              } else {
                setLineNumber(323);    // compilenode member
                // call case 6: other requests
                var call9819 = callmethodChecked(var_in, "size", []);
                var diff9821 = callmethodChecked(call9819, "-(1)", [1], new GraceNum(6));
                // call case 6: other requests
                var call9822 = callmethodChecked(var_in, "substringFrom(1)to(1)", [1, 1], new GraceNum(0), diff9821);
                if9810 = call9822;
              }
              obj6123.data["pageName"] = if9810;
              var reader_gracedoc_pageName9823 = function() {
                return this.data["pageName"];
              };
              reader_gracedoc_pageName9823.def = true;
              reader_gracedoc_pageName9823.confidential = true;
              obj6123.methods["pageName"] = reader_gracedoc_pageName9823;
              var if9824 = GraceDone;
              setLineNumber(324);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call9826 = callmethodChecked(this, "isOnTypePage", []);
              if (Grace_isTrue(call9826)) {
                var string9827 = new GraceString("");
                // call case 4: self request
                onSelf = true;
                var call9830 = callmethodChecked(this, "pageName", []);
                var string9832 = new GraceString("Type: ");
                var opresult9834 = callmethodChecked(string9832, "++(1)", [1], call9830);
                var opresult9836 = callmethodChecked(opresult9834, "++(1)", [1], string9827);
                if9824 = opresult9836;
              } else {
                var if9837 = GraceDone;
                setLineNumber(325);    // compilenode member
                // call case 4: self request
                onSelf = true;
                var call9839 = callmethodChecked(this, "isOnClassPage", []);
                if (Grace_isTrue(call9839)) {
                  var string9840 = new GraceString("");
                  // call case 4: self request
                  onSelf = true;
                  var call9843 = callmethodChecked(this, "pageName", []);
                  var string9845 = new GraceString("Class: ");
                  var opresult9847 = callmethodChecked(string9845, "++(1)", [1], call9843);
                  var opresult9849 = callmethodChecked(opresult9847, "++(1)", [1], string9840);
                  if9837 = opresult9849;
                } else {
                  setLineNumber(326);    // compilenode string
                  var string9850 = new GraceString("");
                  // call case 4: self request
                  onSelf = true;
                  var call9853 = callmethodChecked(this, "pageName", []);
                  var string9855 = new GraceString("Module: ");
                  var opresult9857 = callmethodChecked(string9855, "++(1)", [1], call9853);
                  var opresult9859 = callmethodChecked(opresult9857, "++(1)", [1], string9850);
                  if9837 = opresult9859;
                }
                if9824 = if9837;
              }
              obj6123.data["title"] = if9824;
              var reader_gracedoc_title9860 = function() {
                return this.data["title"];
              };
              reader_gracedoc_title9860.def = true;
              reader_gracedoc_title9860.confidential = true;
              obj6123.methods["title"] = reader_gracedoc_title9860;
              obj6123.data["headerSection"] = undefined;
              var reader_gracedoc_headerSection9861 = function() {
                return this.data["headerSection"];
              };
              obj6123.methods["headerSection"] = reader_gracedoc_headerSection9861;
              obj6123.data["headerSection"] = undefined;
              var writer_gracedoc_headerSection9861 = function(argcv, o) {
                this.data["headerSection"] = o;
                return GraceDone;
              };
              obj6123.methods["headerSection:=(1)"] = writer_gracedoc_headerSection9861;
              reader_gracedoc_headerSection9861.confidential = true;
              writer_gracedoc_headerSection9861.confidential = true;
              obj6123.mutable = true;
              obj6123.data["methodsSection"] = undefined;
              var reader_gracedoc_methodsSection9862 = function() {
                return this.data["methodsSection"];
              };
              obj6123.methods["methodsSection"] = reader_gracedoc_methodsSection9862;
              obj6123.data["methodsSection"] = undefined;
              var writer_gracedoc_methodsSection9862 = function(argcv, o) {
                this.data["methodsSection"] = o;
                return GraceDone;
              };
              obj6123.methods["methodsSection:=(1)"] = writer_gracedoc_methodsSection9862;
              reader_gracedoc_methodsSection9862.confidential = true;
              writer_gracedoc_methodsSection9862.confidential = true;
              obj6123.mutable = true;
              obj6123.data["typesSection"] = undefined;
              var reader_gracedoc_typesSection9863 = function() {
                return this.data["typesSection"];
              };
              obj6123.methods["typesSection"] = reader_gracedoc_typesSection9863;
              obj6123.data["typesSection"] = undefined;
              var writer_gracedoc_typesSection9863 = function(argcv, o) {
                this.data["typesSection"] = o;
                return GraceDone;
              };
              obj6123.methods["typesSection:=(1)"] = writer_gracedoc_typesSection9863;
              reader_gracedoc_typesSection9863.confidential = true;
              writer_gracedoc_typesSection9863.confidential = true;
              obj6123.mutable = true;
              obj6123.data["fieldsSection"] = undefined;
              var reader_gracedoc_fieldsSection9864 = function() {
                return this.data["fieldsSection"];
              };
              obj6123.methods["fieldsSection"] = reader_gracedoc_fieldsSection9864;
              obj6123.data["fieldsSection"] = undefined;
              var writer_gracedoc_fieldsSection9864 = function(argcv, o) {
                this.data["fieldsSection"] = o;
                return GraceDone;
              };
              obj6123.methods["fieldsSection:=(1)"] = writer_gracedoc_fieldsSection9864;
              reader_gracedoc_fieldsSection9864.confidential = true;
              writer_gracedoc_fieldsSection9864.confidential = true;
              obj6123.mutable = true;
              obj6123.data["classesSection"] = undefined;
              var reader_gracedoc_classesSection9865 = function() {
                return this.data["classesSection"];
              };
              obj6123.methods["classesSection"] = reader_gracedoc_classesSection9865;
              obj6123.data["classesSection"] = undefined;
              var writer_gracedoc_classesSection9865 = function(argcv, o) {
                this.data["classesSection"] = o;
                return GraceDone;
              };
              obj6123.methods["classesSection:=(1)"] = writer_gracedoc_classesSection9865;
              reader_gracedoc_classesSection9865.confidential = true;
              writer_gracedoc_classesSection9865.confidential = true;
              obj6123.mutable = true;
              obj6123.data["footerSection"] = undefined;
              var reader_gracedoc_footerSection9866 = function() {
                return this.data["footerSection"];
              };
              obj6123.methods["footerSection"] = reader_gracedoc_footerSection9866;
              obj6123.data["footerSection"] = undefined;
              var writer_gracedoc_footerSection9866 = function(argcv, o) {
                this.data["footerSection"] = o;
                return GraceDone;
              };
              obj6123.methods["footerSection:=(1)"] = writer_gracedoc_footerSection9866;
              reader_gracedoc_footerSection9866.confidential = true;
              writer_gracedoc_footerSection9866.confidential = true;
              obj6123.mutable = true;
              obj6123.data["methodtypesSection"] = undefined;
              var reader_gracedoc_methodtypesSection9867 = function() {
                return this.data["methodtypesSection"];
              };
              obj6123.methods["methodtypesSection"] = reader_gracedoc_methodtypesSection9867;
              obj6123.data["methodtypesSection"] = undefined;
              var writer_gracedoc_methodtypesSection9867 = function(argcv, o) {
                this.data["methodtypesSection"] = o;
                return GraceDone;
              };
              obj6123.methods["methodtypesSection:=(1)"] = writer_gracedoc_methodtypesSection9867;
              reader_gracedoc_methodtypesSection9867.confidential = true;
              writer_gracedoc_methodtypesSection9867.confidential = true;
              obj6123.mutable = true;
              obj6123.data["topDescSection"] = undefined;
              var reader_gracedoc_topDescSection9868 = function() {
                return this.data["topDescSection"];
              };
              obj6123.methods["topDescSection"] = reader_gracedoc_topDescSection9868;
              obj6123.data["topDescSection"] = undefined;
              var writer_gracedoc_topDescSection9868 = function(argcv, o) {
                this.data["topDescSection"] = o;
                return GraceDone;
              };
              obj6123.methods["topDescSection:=(1)"] = writer_gracedoc_topDescSection9868;
              reader_gracedoc_topDescSection9868.confidential = true;
              writer_gracedoc_topDescSection9868.confidential = true;
              obj6123.mutable = true;
              var if9869 = GraceDone;
              setLineNumber(337);    // compilenode member
              // call case 6: other requests
              var call9872 = callmethodChecked(var_settings, "verbosity", []);
              var opresult9874 = callmethodChecked(call9872, ">(1)", [1], new GraceNum(1));
              if (Grace_isTrue(opresult9874)) {
                var string9875 = new GraceString(")");
                // call case 6: other requests
                var call9878 = callmethodChecked(var_sys, "elapsedTime", []);
                var string9880 = new GraceString(" - graceDocVisitor created... (");
                // call case 4: self request
                onSelf = true;
                var call9883 = callmethodChecked(this, "title", []);
                var string9885 = new GraceString("On ");
                var opresult9887 = callmethodChecked(string9885, "++(1)", [1], call9883);
                var opresult9889 = callmethodChecked(opresult9887, "++(1)", [1], string9880);
                var opresult9891 = callmethodChecked(opresult9889, "++(1)", [1], call9878);
                var opresult9893 = callmethodChecked(opresult9891, "++(1)", [1], string9875);
                var call9894 = Grace_print(opresult9893);
                if9869 = call9894;
              }
              var if9895 = GraceDone;
              setLineNumber(339);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call9897 = callmethodChecked(this, "isOnTypePage", []);
              // call case 4: self request
              onSelf = true;
              var call9900 = callmethodChecked(this, "isOnClassPage", []);
              var opresult9902 = callmethodChecked(call9900, "||(1)", [1], call9897);
              if (Grace_isTrue(opresult9902)) {
                if9895 = var_dir;
              } else {
                // call case 4: self request
                onSelf = true;
                var call9904 = callmethodChecked(this, "pageName", []);
                if9895 = call9904;
              }
              obj6123.data["outdir"] = if9895;
              var reader_gracedoc_outdir9905 = function() {
                return this.data["outdir"];
              };
              reader_gracedoc_outdir9905.def = true;
              reader_gracedoc_outdir9905.confidential = true;
              obj6123.methods["outdir"] = reader_gracedoc_outdir9905;
              setLineNumber(340);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call9907 = callmethodChecked(this, "buildTemplate", []);
              superDepth = origSuperDepth;
            };
            obj_init_6123.apply(inheritingObject, []);
            return obj6123;
            };
            obj2334.methods["createFrom(1)outTo(1)as(1)$object(1)"] = func6122;
          var func9908 = function(argcv) {    // method asString
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("gracedoc");
            setLineNumber(314);    // compilenode string
            var string9909 = new GraceString("class graceDocVisitor");
            return string9909;
          };
          func9908.paramCounts = [0];
          obj2334.methods["asString"] = func9908;
          func9908.definitionLine = 314;
          func9908.definitionModule = "gracedoc";
          superDepth = origSuperDepth;
        };
        obj_init_2334.apply(obj2334, []);
        var var_graceDocVisitor = obj2334;
        setLineNumber(1);    // compilenode method
        var func9910 = function(argcv) {    // method graceDocVisitor
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("gracedoc");
          // graceDocVisitor is a simple accessor - elide try ... catch
          setLineNumber(314);    // compilenode identifier
          return var_graceDocVisitor;
        };
        func9910.paramCounts = [0];
        this.methods["graceDocVisitor"] = func9910;
        func9910.definitionLine = 1;
        func9910.definitionModule = "gracedoc";
        this.methods["graceDocVisitor"].debug = "def";
        setLineNumber(1253);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call9912 = callmethodChecked(this, "parseArguments", []);
        setLineNumber(1255);    // compilenode vardec
        var var_file;
        setLineNumber(1);    // compilenode method
        var func9913 = function(argcv) {    // method file
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("gracedoc");
          // file is a simple accessor - elide try ... catch
          setLineNumber(1255);    // compilenode identifier
          return var_file;
        };
        func9913.paramCounts = [0];
        this.methods["file"] = func9913;
        func9913.definitionLine = 1;
        func9913.definitionModule = "gracedoc";
        setLineNumber(1);    // compilenode method
        var func9914 = function(argcv) {    // method file:=(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var___95__var__95__assign__95__tmp = arguments[curarg];
          curarg++;
          setModuleName("gracedoc");
          var_file = var___95__var__95__assign__95__tmp;
          return GraceDone;
        };
        func9914.paramCounts = [1];
        this.methods["file:=(1)"] = func9914;
        func9914.definitionLine = 1;
        func9914.definitionModule = "gracedoc";
        this.methods["file"].debug = "var";
        setLineNumber(1256);    // compilenode vardec
        var var_dbv;
        setLineNumber(1);    // compilenode method
        var func9915 = function(argcv) {    // method dbv
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("gracedoc");
          // dbv is a simple accessor - elide try ... catch
          setLineNumber(1256);    // compilenode identifier
          return var_dbv;
        };
        func9915.paramCounts = [0];
        this.methods["dbv"] = func9915;
        func9915.definitionLine = 1;
        func9915.definitionModule = "gracedoc";
        setLineNumber(1);    // compilenode method
        var func9916 = function(argcv) {    // method dbv:=(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var___95__var__95__assign__95__tmp = arguments[curarg];
          curarg++;
          setModuleName("gracedoc");
          var_dbv = var___95__var__95__assign__95__tmp;
          return GraceDone;
        };
        func9916.paramCounts = [1];
        this.methods["dbv:=(1)"] = func9916;
        func9916.definitionLine = 1;
        func9916.definitionModule = "gracedoc";
        this.methods["dbv"].debug = "var";
        setLineNumber(1257);    // compilenode vardec
        var var_gdv;
        setLineNumber(1);    // compilenode method
        var func9917 = function(argcv) {    // method gdv
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("gracedoc");
          // gdv is a simple accessor - elide try ... catch
          setLineNumber(1257);    // compilenode identifier
          return var_gdv;
        };
        func9917.paramCounts = [0];
        this.methods["gdv"] = func9917;
        func9917.definitionLine = 1;
        func9917.definitionModule = "gracedoc";
        setLineNumber(1);    // compilenode method
        var func9918 = function(argcv) {    // method gdv:=(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var___95__var__95__assign__95__tmp = arguments[curarg];
          curarg++;
          setModuleName("gracedoc");
          var_gdv = var___95__var__95__assign__95__tmp;
          return GraceDone;
        };
        func9918.paramCounts = [1];
        this.methods["gdv:=(1)"] = func9918;
        func9918.definitionLine = 1;
        func9918.definitionModule = "gracedoc";
        this.methods["gdv"].debug = "var";
        setLineNumber(1258);    // compilenode vardec
        var var_modulename;
        setLineNumber(1);    // compilenode method
        var func9919 = function(argcv) {    // method modulename
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("gracedoc");
          // modulename is a simple accessor - elide try ... catch
          setLineNumber(1258);    // compilenode identifier
          return var_modulename;
        };
        func9919.paramCounts = [0];
        this.methods["modulename"] = func9919;
        func9919.definitionLine = 1;
        func9919.definitionModule = "gracedoc";
        setLineNumber(1);    // compilenode method
        var func9920 = function(argcv) {    // method modulename:=(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var___95__var__95__assign__95__tmp = arguments[curarg];
          curarg++;
          setModuleName("gracedoc");
          var_modulename = var___95__var__95__assign__95__tmp;
          return GraceDone;
        };
        func9920.paramCounts = [1];
        this.methods["modulename:=(1)"] = func9920;
        func9920.definitionLine = 1;
        func9920.definitionModule = "gracedoc";
        this.methods["modulename"].debug = "var";
        setLineNumber(1259);    // compilenode vardec
        var var_counter;
        setLineNumber(1);    // compilenode method
        var func9921 = function(argcv) {    // method counter
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("gracedoc");
          // counter is a simple accessor - elide try ... catch
          setLineNumber(1259);    // compilenode identifier
          return var_counter;
        };
        func9921.paramCounts = [0];
        this.methods["counter"] = func9921;
        func9921.definitionLine = 1;
        func9921.definitionModule = "gracedoc";
        setLineNumber(1);    // compilenode method
        var func9922 = function(argcv) {    // method counter:=(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var___95__var__95__assign__95__tmp = arguments[curarg];
          curarg++;
          setModuleName("gracedoc");
          var_counter = var___95__var__95__assign__95__tmp;
          return GraceDone;
        };
        func9922.paramCounts = [1];
        this.methods["counter:=(1)"] = func9922;
        func9922.definitionLine = 1;
        func9922.definitionModule = "gracedoc";
        this.methods["counter"].debug = "var";
        setLineNumber(1261);    // compilenode member
        // call case 6: other requests
        var call9925 = callmethodChecked(var_settings, "inputdir", []);
        // call case 6: other requests
        var call9926 = callmethodChecked(var_io, "listdir(1)", [1], call9925);
        var var_allModules = call9926;
        setLineNumber(1);    // compilenode method
        var func9927 = function(argcv) {    // method allModules
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("gracedoc");
          // allModules is a simple accessor - elide try ... catch
          setLineNumber(1261);    // compilenode identifier
          return var_allModules;
        };
        func9927.paramCounts = [0];
        this.methods["allModules"] = func9927;
        func9927.definitionLine = 1;
        func9927.definitionModule = "gracedoc";
        setLineNumber(1);    // compilenode method
        var func9928 = function(argcv) {    // method allModules:=(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var___95__var__95__assign__95__tmp = arguments[curarg];
          curarg++;
          setModuleName("gracedoc");
          var_allModules = var___95__var__95__assign__95__tmp;
          return GraceDone;
        };
        func9928.paramCounts = [1];
        this.methods["allModules:=(1)"] = func9928;
        func9928.definitionLine = 1;
        func9928.definitionModule = "gracedoc";
        this.methods["allModules"].debug = "var";
        setLineNumber(1262);    // compilenode array
        var array9930 = new Lineup([]);
        // call case 5: prelude request
        var call9931 = callmethodChecked(var_prelude, "dictionary(1)", [1], array9930);
        var var_parsedFiles = call9931;
        setLineNumber(1);    // compilenode method
        var func9932 = function(argcv) {    // method parsedFiles
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("gracedoc");
          // parsedFiles is a simple accessor - elide try ... catch
          setLineNumber(1262);    // compilenode identifier
          return var_parsedFiles;
        };
        func9932.paramCounts = [0];
        this.methods["parsedFiles"] = func9932;
        func9932.definitionLine = 1;
        func9932.definitionModule = "gracedoc";
        setLineNumber(1);    // compilenode method
        var func9933 = function(argcv) {    // method parsedFiles:=(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var___95__var__95__assign__95__tmp = arguments[curarg];
          curarg++;
          setModuleName("gracedoc");
          var_parsedFiles = var___95__var__95__assign__95__tmp;
          return GraceDone;
        };
        func9933.paramCounts = [1];
        this.methods["parsedFiles:=(1)"] = func9933;
        func9933.definitionLine = 1;
        func9933.definitionModule = "gracedoc";
        this.methods["parsedFiles"].debug = "var";
        setLineNumber(1263);    // compilenode identifier
        var var_inputWasFound = GraceFalse;
        setLineNumber(1);    // compilenode method
        var func9934 = function(argcv) {    // method inputWasFound
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("gracedoc");
          // inputWasFound is a simple accessor - elide try ... catch
          setLineNumber(1263);    // compilenode identifier
          return var_inputWasFound;
        };
        func9934.paramCounts = [0];
        this.methods["inputWasFound"] = func9934;
        func9934.definitionLine = 1;
        func9934.definitionModule = "gracedoc";
        setLineNumber(1);    // compilenode method
        var func9935 = function(argcv) {    // method inputWasFound:=(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var___95__var__95__assign__95__tmp = arguments[curarg];
          curarg++;
          setModuleName("gracedoc");
          var_inputWasFound = var___95__var__95__assign__95__tmp;
          return GraceDone;
        };
        func9935.paramCounts = [1];
        this.methods["inputWasFound:=(1)"] = func9935;
        func9935.definitionLine = 1;
        func9935.definitionModule = "gracedoc";
        this.methods["inputWasFound"].debug = "var";
        setLineNumber(1266);    // compilenode num
        var_counter = new GraceNum(1);
        setLineNumber(1267);    // compilenode block
        var block9937 = new GraceBlock(this, 1267, 1);
        setLineNumber(1);    // compilenode identifier
        block9937.real = function(var_filename) {
          var if9938 = GraceDone;
          setLineNumber(1268);    // compilenode string
          var string9940 = new GraceString(".grace");
          // call case 6: other requests
          var call9941 = callmethodChecked(var_filename, "endsWith(1)", [1], string9940);
          if (Grace_isTrue(call9941)) {
            setLineNumber(1269);    // compilenode string
            var string9943 = new GraceString("");
            var string9946 = new GraceString("/");
            // call case 6: other requests
            var call9949 = callmethodChecked(var_settings, "inputdir", []);
            var string9951 = new GraceString("");
            var opresult9953 = callmethodChecked(string9951, "++(1)", [1], call9949);
            var opresult9955 = callmethodChecked(opresult9953, "++(1)", [1], string9946);
            var opresult9957 = callmethodChecked(opresult9955, "++(1)", [1], var_filename);
            var opresult9959 = callmethodChecked(opresult9957, "++(1)", [1], string9943);
            var string9960 = new GraceString("r");
            // call case 6: other requests
            var call9961 = callmethodChecked(var_io, "open(2)", [2], opresult9959, string9960);
            var_file = call9961;
            var if9962 = GraceDone;
            setLineNumber(1270);    // compilenode member
            // call case 6: other requests
            var call9965 = callmethodChecked(var_settings, "verbosity", []);
            var opresult9967 = callmethodChecked(call9965, ">(1)", [1], new GraceNum(0));
            if (Grace_isTrue(opresult9967)) {
              var string9968 = new GraceString(")");
              // call case 6: other requests
              var call9971 = callmethodChecked(var_sys, "elapsedTime", []);
              var string9973 = new GraceString(" - lexing... (");
              var string9976 = new GraceString("On ");
              var opresult9978 = callmethodChecked(string9976, "++(1)", [1], var_filename);
              var opresult9980 = callmethodChecked(opresult9978, "++(1)", [1], string9973);
              var opresult9982 = callmethodChecked(opresult9980, "++(1)", [1], call9971);
              var opresult9984 = callmethodChecked(opresult9982, "++(1)", [1], string9968);
              var call9985 = Grace_print(opresult9984);
              if9962 = call9985;
            }
            setLineNumber(1271);    // compilenode identifier
            // call case 6: other requests
            // call case 6: other requests
            var call9988 = callmethodChecked(var_lexer, "new", []);
            var call9989 = callmethodChecked(call9988, "lexfile(1)", [1], var_file);
            var var_tokens = call9989;
            var if9990 = GraceDone;
            setLineNumber(1272);    // compilenode member
            // call case 6: other requests
            var call9993 = callmethodChecked(var_settings, "verbosity", []);
            var opresult9995 = callmethodChecked(call9993, ">(1)", [1], new GraceNum(0));
            if (Grace_isTrue(opresult9995)) {
              var string9996 = new GraceString(")");
              // call case 6: other requests
              var call9999 = callmethodChecked(var_sys, "elapsedTime", []);
              var string10001 = new GraceString(" - done lexing... (");
              var string10004 = new GraceString("On ");
              var opresult10006 = callmethodChecked(string10004, "++(1)", [1], var_filename);
              var opresult10008 = callmethodChecked(opresult10006, "++(1)", [1], string10001);
              var opresult10010 = callmethodChecked(opresult10008, "++(1)", [1], call9999);
              var opresult10012 = callmethodChecked(opresult10010, "++(1)", [1], string9996);
              var call10013 = Grace_print(opresult10012);
              if9990 = call10013;
            }
            var if10014 = GraceDone;
            setLineNumber(1273);    // compilenode member
            // call case 6: other requests
            var call10017 = callmethodChecked(var_settings, "verbosity", []);
            var opresult10019 = callmethodChecked(call10017, ">(1)", [1], new GraceNum(0));
            if (Grace_isTrue(opresult10019)) {
              var string10020 = new GraceString(")");
              // call case 6: other requests
              var call10023 = callmethodChecked(var_sys, "elapsedTime", []);
              var string10025 = new GraceString(" - parsing... (");
              var string10028 = new GraceString("On ");
              var opresult10030 = callmethodChecked(string10028, "++(1)", [1], var_filename);
              var opresult10032 = callmethodChecked(opresult10030, "++(1)", [1], string10025);
              var opresult10034 = callmethodChecked(opresult10032, "++(1)", [1], call10023);
              var opresult10036 = callmethodChecked(opresult10034, "++(1)", [1], string10020);
              var call10037 = Grace_print(opresult10036);
              if10014 = call10037;
            }
            setLineNumber(1275);    // compilenode identifier
            // call case 6: other requests
            var call10040 = callmethodChecked(var_parser, "parse(1)", [1], var_tokens);
            // call case 6: other requests
            var call10041 = callmethodChecked(var_parsedFiles, "at(1)put(1)", [1, 1], var_counter, call10040);
            var if10042 = GraceDone;
            setLineNumber(1277);    // compilenode member
            // call case 6: other requests
            var call10045 = callmethodChecked(var_settings, "verbosity", []);
            var opresult10047 = callmethodChecked(call10045, ">(1)", [1], new GraceNum(0));
            if (Grace_isTrue(opresult10047)) {
              var string10048 = new GraceString(")");
              // call case 6: other requests
              var call10051 = callmethodChecked(var_sys, "elapsedTime", []);
              var string10053 = new GraceString(" - done parsing... (");
              var string10056 = new GraceString("On ");
              var opresult10058 = callmethodChecked(string10056, "++(1)", [1], var_filename);
              var opresult10060 = callmethodChecked(opresult10058, "++(1)", [1], string10053);
              var opresult10062 = callmethodChecked(opresult10060, "++(1)", [1], call10051);
              var opresult10064 = callmethodChecked(opresult10062, "++(1)", [1], string10048);
              var call10065 = Grace_print(opresult10064);
              if10042 = call10065;
            }
            setLineNumber(1278);    // compilenode identifier
            var opresult10068 = callmethodChecked(var_counter, "+(1)", [1], new GraceNum(1));
            var_counter = opresult10068;
            setLineNumber(1279);    // compilenode identifier
            var_inputWasFound = GraceTrue;
            setLineNumber(1280);    // compilenode member
            // call case 6: other requests
            var call10070 = callmethodChecked(var_file, "close", []);
            if9938 = call10070;
          }
          return if9938;
        };
        // call case 5: prelude request
        var call10071 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_allModules, block9937);
        var if10072 = GraceDone;
        setLineNumber(1284);    // compilenode call
        // call case 6: other requests
        var call10074 = callmethodChecked(var_inputWasFound, "prefix!", [0]);
        if (Grace_isTrue(call10074)) {
          setLineNumber(1285);    // compilenode string
          var string10076 = new GraceString("gracedoc: Input error - no Grace files found in the input directory.");
          // call case 6: other requests
          // call case 6: other requests
          var call10078 = callmethodChecked(var_io, "error", []);
          var call10079 = callmethodChecked(call10078, "write(1)", [1], string10076);
          setLineNumber(1286);    // compilenode string
          var string10081 = new GraceString("          Either the directory doesn't exist, or it doesn't contain any files.");
          // call case 6: other requests
          // call case 6: other requests
          var call10083 = callmethodChecked(var_io, "error", []);
          var call10084 = callmethodChecked(call10083, "write(1)", [1], string10081);
          setLineNumber(1287);    // compilenode string
          var string10086 = new GraceString("          Directories should be named relative to the ./minigrace executable.");
          // call case 6: other requests
          // call case 6: other requests
          var call10088 = callmethodChecked(var_io, "error", []);
          var call10089 = callmethodChecked(call10088, "write(1)", [1], string10086);
          setLineNumber(1288);    // compilenode num
          // call case 6: other requests
          var call10091 = callmethodChecked(var_sys, "exit(1)", [1], new GraceNum(1));
          if10072 = call10091;
        }
        setLineNumber(1292);    // compilenode num
        var_counter = new GraceNum(1);
        setLineNumber(1293);    // compilenode block
        var block10093 = new GraceBlock(this, 1293, 1);
        setLineNumber(1);    // compilenode identifier
        block10093.real = function(var_filename) {
          var if10094 = GraceDone;
          setLineNumber(1294);    // compilenode string
          var string10096 = new GraceString(".grace");
          // call case 6: other requests
          var call10097 = callmethodChecked(var_filename, "endsWith(1)", [1], string10096);
          if (Grace_isTrue(call10097)) {
            var if10098 = GraceDone;
            setLineNumber(1295);    // compilenode member
            // call case 6: other requests
            var call10101 = callmethodChecked(var_settings, "verbosity", []);
            var opresult10103 = callmethodChecked(call10101, ">(1)", [1], new GraceNum(0));
            if (Grace_isTrue(opresult10103)) {
              var string10104 = new GraceString(")");
              // call case 6: other requests
              var call10107 = callmethodChecked(var_sys, "elapsedTime", []);
              var string10109 = new GraceString(" - building directories... (");
              var string10112 = new GraceString("On ");
              var opresult10114 = callmethodChecked(string10112, "++(1)", [1], var_filename);
              var opresult10116 = callmethodChecked(opresult10114, "++(1)", [1], string10109);
              var opresult10118 = callmethodChecked(opresult10116, "++(1)", [1], call10107);
              var opresult10120 = callmethodChecked(opresult10118, "++(1)", [1], string10104);
              var call10121 = Grace_print(opresult10120);
              if10098 = call10121;
            }
            setLineNumber(1296);    // compilenode member
            // call case 6: other requests
            var call10125 = callmethodChecked(var_filename, "size", []);
            var diff10127 = callmethodChecked(call10125, "-(1)", [1], new GraceNum(6));
            // call case 6: other requests
            var call10128 = callmethodChecked(var_filename, "substringFrom(1)to(1)", [1, 1], new GraceNum(1), diff10127);
            var_modulename = call10128;
            setLineNumber(1297);    // compilenode identifier
            // call case 6: other requests
            var call10130 = callmethodChecked(var_parsedFiles, "at(1)", [1], var_counter);
            var var_moduleObject = call10130;
            setLineNumber(1298);    // compilenode string
            var string10132 = new GraceString("module");
            // call case 4: self request
            onSelf = true;
            var call10133 = callmethodChecked(this, "directoryBuilderForFile(1)outTo(1)as(1)", [1, 1, 1], var_filename, var_modulename, string10132);
            var_dbv = call10133;
            setLineNumber(1299);    // compilenode identifier
            // call case 6: other requests
            var call10135 = callmethodChecked(var_moduleObject, "accept(1)", [1], var_dbv);
            setLineNumber(1300);    // compilenode member
            // call case 6: other requests
            var call10137 = callmethodChecked(var_dbv, "generate", []);
            var if10138 = GraceDone;
            setLineNumber(1301);    // compilenode member
            // call case 6: other requests
            var call10141 = callmethodChecked(var_settings, "verbosity", []);
            var opresult10143 = callmethodChecked(call10141, ">(1)", [1], new GraceNum(0));
            if (Grace_isTrue(opresult10143)) {
              var string10144 = new GraceString(")");
              // call case 6: other requests
              var call10147 = callmethodChecked(var_sys, "elapsedTime", []);
              var string10149 = new GraceString(" - directories built... (");
              var string10152 = new GraceString("On ");
              var opresult10154 = callmethodChecked(string10152, "++(1)", [1], var_filename);
              var opresult10156 = callmethodChecked(opresult10154, "++(1)", [1], string10149);
              var opresult10158 = callmethodChecked(opresult10156, "++(1)", [1], call10147);
              var opresult10160 = callmethodChecked(opresult10158, "++(1)", [1], string10144);
              var call10161 = Grace_print(opresult10160);
              if10138 = call10161;
            }
            setLineNumber(1302);    // compilenode identifier
            var opresult10164 = callmethodChecked(var_counter, "+(1)", [1], new GraceNum(1));
            var_counter = opresult10164;
            if10094 = GraceDone;
          }
          return if10094;
        };
        // call case 5: prelude request
        var call10165 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_allModules, block10093);
        setLineNumber(1307);    // compilenode num
        var_counter = new GraceNum(1);
        setLineNumber(1308);    // compilenode block
        var block10167 = new GraceBlock(this, 1308, 1);
        setLineNumber(1);    // compilenode identifier
        block10167.real = function(var_filename) {
          var if10168 = GraceDone;
          setLineNumber(1309);    // compilenode string
          var string10170 = new GraceString(".grace");
          // call case 6: other requests
          var call10171 = callmethodChecked(var_filename, "endsWith(1)", [1], string10170);
          if (Grace_isTrue(call10171)) {
            var if10172 = GraceDone;
            setLineNumber(1310);    // compilenode member
            // call case 6: other requests
            var call10175 = callmethodChecked(var_settings, "verbosity", []);
            var opresult10177 = callmethodChecked(call10175, ">(1)", [1], new GraceNum(0));
            if (Grace_isTrue(opresult10177)) {
              var string10178 = new GraceString(")");
              // call case 6: other requests
              var call10181 = callmethodChecked(var_sys, "elapsedTime", []);
              var string10183 = new GraceString(" - generating GraceDocs... (");
              var string10186 = new GraceString("On ");
              var opresult10188 = callmethodChecked(string10186, "++(1)", [1], var_filename);
              var opresult10190 = callmethodChecked(opresult10188, "++(1)", [1], string10183);
              var opresult10192 = callmethodChecked(opresult10190, "++(1)", [1], call10181);
              var opresult10194 = callmethodChecked(opresult10192, "++(1)", [1], string10178);
              var call10195 = Grace_print(opresult10194);
              if10172 = call10195;
            }
            setLineNumber(1311);    // compilenode member
            // call case 6: other requests
            var call10199 = callmethodChecked(var_filename, "size", []);
            var diff10201 = callmethodChecked(call10199, "-(1)", [1], new GraceNum(6));
            // call case 6: other requests
            var call10202 = callmethodChecked(var_filename, "substringFrom(1)to(1)", [1, 1], new GraceNum(1), diff10201);
            var_modulename = call10202;
            setLineNumber(1312);    // compilenode identifier
            // call case 6: other requests
            var call10204 = callmethodChecked(var_parsedFiles, "at(1)", [1], var_counter);
            var var_moduleObject = call10204;
            setLineNumber(1313);    // compilenode string
            var string10206 = new GraceString("module");
            // call case 6: other requests
            var call10207 = callmethodChecked(var_graceDocVisitor, "createFrom(1)outTo(1)as(1)", [1, 1, 1], var_filename, var_modulename, string10206);
            var_gdv = call10207;
            setLineNumber(1314);    // compilenode identifier
            // call case 6: other requests
            var call10209 = callmethodChecked(var_moduleObject, "accept(1)", [1], var_gdv);
            setLineNumber(1315);    // compilenode member
            // call case 6: other requests
            var call10211 = callmethodChecked(var_gdv, "generate", []);
            setLineNumber(1316);    // compilenode member
            // call case 6: other requests
            var call10213 = callmethodChecked(var_gdv, "buildindex", []);
            setLineNumber(1317);    // compilenode member
            // call case 6: other requests
            var call10215 = callmethodChecked(var_gdv, "buildcss", []);
            setLineNumber(1318);    // compilenode member
            // call case 6: other requests
            var call10217 = callmethodChecked(var_gdv, "buildjs", []);
            setLineNumber(1319);    // compilenode member
            // call case 6: other requests
            var call10219 = callmethodChecked(var_gdv, "build404", []);
            var if10220 = GraceDone;
            setLineNumber(1320);    // compilenode member
            // call case 6: other requests
            var call10223 = callmethodChecked(var_settings, "verbosity", []);
            var opresult10225 = callmethodChecked(call10223, ">(1)", [1], new GraceNum(0));
            if (Grace_isTrue(opresult10225)) {
              var string10226 = new GraceString(")");
              // call case 6: other requests
              var call10229 = callmethodChecked(var_sys, "elapsedTime", []);
              var string10231 = new GraceString(" - done! (");
              var string10234 = new GraceString("On ");
              var opresult10236 = callmethodChecked(string10234, "++(1)", [1], var_filename);
              var opresult10238 = callmethodChecked(opresult10236, "++(1)", [1], string10231);
              var opresult10240 = callmethodChecked(opresult10238, "++(1)", [1], call10229);
              var opresult10242 = callmethodChecked(opresult10240, "++(1)", [1], string10226);
              var call10243 = Grace_print(opresult10242);
              if10220 = call10243;
            }
            setLineNumber(1321);    // compilenode identifier
            var opresult10246 = callmethodChecked(var_counter, "+(1)", [1], new GraceNum(1));
            var_counter = opresult10246;
            if10168 = GraceDone;
          }
          return if10168;
        };
        // call case 5: prelude request
        var call10247 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], var_allModules, block10167);
        return this;
      }
      gracecode_gracedoc.imports = ['ast', 'io', 'lexer', 'parser', 'sys'];
      if (typeof gctCache !== "undefined")
        gctCache['gracedoc'] = "classes:\n graceDocVisitor\n section\nconfidential:\nconstructors-of:graceDocVisitor:\n createFrom(1)outTo(1)as(1)\nconstructors-of:section:\n withTemplate(1)andCursorAt(1)\nfresh-methods:\n directoryBuilderForFile(1)outTo(1)as(1)\nfresh:directoryBuilderForFile(1)outTo(1)as(1):\n asString\n generate\n isOnClassPage\n isOnTypePage\n outdir\n pageName\n title\n visitArray(1)\n visitArray(1)up(1)\n visitBind(1)\n visitBind(1)up(1)\n visitBlank(1)\n visitBlank(1)up(1)\n visitBlock(1)\n visitBlock(1)up(1)\n visitCall(1)\n visitCall(1)up(1)\n visitComment(1)\n visitComment(1)up(1)\n visitDefDec(1)\n visitDefDec(1)up(1)\n visitDialect(1)\n visitDialect(1)up(1)\n visitGeneric(1)\n visitGeneric(1)up(1)\n visitIdentifier(1)\n visitIdentifier(1)up(1)\n visitIf(1)\n visitIf(1)up(1)\n visitImplicit(1)\n visitImplicit(1)up(1)\n visitImport(1)\n visitImport(1)up(1)\n visitInherits(1)\n visitInherits(1)up(1)\n visitMatchCase(1)\n visitMatchCase(1)up(1)\n visitMember(1)\n visitMember(1)up(1)\n visitMethod(1)\n visitMethod(1)up(1)\n visitMethodType(1)\n visitMethodType(1)up(1)\n visitModule(1)\n visitModule(1)up(1)\n visitNum(1)\n visitNum(1)up(1)\n visitObject(1)\n visitObject(1)up(1)\n visitOp(1)\n visitOp(1)up(1)\n visitReturn(1)\n visitReturn(1)up(1)\n visitSignaturePart(1)\n visitSignaturePart(1)up(1)\n visitString(1)\n visitString(1)up(1)\n visitTryCatch(1)\n visitTryCatch(1)up(1)\n visitTypeDec(1)\n visitTypeDec(1)up(1)\n visitTypeLiteral(1)\n visitTypeLiteral(1)up(1)\n visitTypeParameters(1)\n visitTypeParameters(1)up(1)\n visitVarDec(1)\n visitVarDec(1)up(1)\nmethods-of:graceDocVisitor.createFrom(1)outTo(1)as(1):\n asString\n build404\n buildTemplate\n buildcss\n buildindex\n buildjs\n classesSection\n doClassMethod(1)\n fieldsSection\n footerSection\n generate\n getClassLink(1)\n getTypeLink(1)\n headerSection\n isOnClassPage\n isOnTypePage\n methodsSection\n methodtypesSection\n outdir\n pageName\n title\n topDescSection\n typesSection\n visitArray(1)\n visitArray(1)up(1)\n visitBind(1)\n visitBind(1)up(1)\n visitBlank(1)\n visitBlank(1)up(1)\n visitBlock(1)\n visitBlock(1)up(1)\n visitCall(1)\n visitCall(1)up(1)\n visitComment(1)\n visitComment(1)up(1)\n visitDefDec(1)\n visitDefDec(1)up(1)\n visitDialect(1)\n visitDialect(1)up(1)\n visitGeneric(1)\n visitGeneric(1)up(1)\n visitIdentifier(1)\n visitIdentifier(1)up(1)\n visitIf(1)\n visitIf(1)up(1)\n visitImplicit(1)\n visitImplicit(1)up(1)\n visitImport(1)\n visitImport(1)up(1)\n visitInherits(1)\n visitInherits(1)up(1)\n visitMatchCase(1)\n visitMatchCase(1)up(1)\n visitMember(1)\n visitMember(1)up(1)\n visitMethod(1)\n visitMethod(1)up(1)\n visitMethodType(1)\n visitMethodType(1)up(1)\n visitModule(1)\n visitModule(1)up(1)\n visitNum(1)\n visitNum(1)up(1)\n visitObject(1)\n visitObject(1)up(1)\n visitOp(1)\n visitOp(1)up(1)\n visitReturn(1)\n visitReturn(1)up(1)\n visitSignaturePart(1)\n visitSignaturePart(1)up(1)\n visitString(1)\n visitString(1)up(1)\n visitTryCatch(1)\n visitTryCatch(1)up(1)\n visitTypeDec(1)\n visitTypeDec(1)up(1)\n visitTypeLiteral(1)\n visitTypeLiteral(1)up(1)\n visitTypeParameters(1)\n visitTypeParameters(1)up(1)\n visitVarDec(1)\n visitVarDec(1)up(1)\nmethods-of:section.withTemplate(1)andCursorAt(1):\n addElement(1)withText(1)\n alphabetize\n cursor\n elts\n hasContent\n html\n insert(1)\nmethodtypes-of:Section:\n 1 html -> String\n 1 insert -> Done\n 1 isEmpty -> Boolean\nmodules:\n ast\n errormessages\n identifierKinds\n io\n lexer\n parser\n stringMap\n sys\n unicode\n util\npath:\n gracedoc\npublic:\n Section\n autoindent(1)\n directoryBuilderForFile(1)outTo(1)as(1)\n formatComments(1)rowClass(1)colspan(1)\n graceDocVisitor\n indent(1)\n parseArguments\n section\n trim(1)\ntypes:\n Section\n";
      if (typeof originalSourceLines !== "undefined") {
        originalSourceLines["gracedoc"] = [
          "import \"ast\" as ast",
          "import \"parser\" as parser",
          "import \"lexer\" as lexer",
          "import \"io\" as io",
          "import \"sys\" as sys",
          "",
          "def settings = object {",
          "    var inputdir:String is public := \"\"",
          "    var outputdir:String is public := \"\"",
          "    var verbosity:Number is public := 0",
          "    var publicOnly:Boolean is public := false",
          "    def version:Number is public = 1.1",
          "}",
          "",
          "method parseArguments {",
          "    def args = sys.argv",
          "    if (args.size > 1) then {",
          "        def indices = args.indices",
          "        var skip := true",
          "        for (indices) do { i ->",
          "            def arg = args.at(i)",
          "            if (arg.at(1)==\"-\") then {",
          "                match (arg)",
          "                    case { \"-i\" ->",
          "                        if (args.size < (i+1)) then {",
          "                            io.error.write \"gracedoc: -i requires an argument.\\n\"",
          "                            sys.exit(1)",
          "                        }",
          "                        skip := true",
          "                        settings.inputdir := args.at(i+1)",
          "                    } case { \"-o\" ->",
          "                        if (args.size < (i+1)) then {",
          "                            io.error.write \"gracedoc: -o requires an argument.\\n\"",
          "                            sys.exit(1)",
          "                        }",
          "                        skip := true",
          "                        settings.outputdir := args.at(i+1)",
          "                    } case { \"-v\" ->",
          "                        if (args.size < (i+1)) then {",
          "                            io.error.write \"gracedoc: -v requires an argument.\\n\"",
          "                            sys.exit(1)",
          "                        }",
          "                        skip := true",
          "                        settings.verbosity := args.at(i+1).asNumber",
          "                    } case { \"--publiconly\" ->",
          "                        settings.publicOnly := true",
          "                    } case { \"--help\" ->",
          "                        print \"Usage: {args.at(1)} -i <path> -o <path> [-v <level>] [--help] [--publiconly]\"",
          "                        print \"  -i <path>      The directory to process (contains .grace files)\"",
          "                        print \"  -o <path>      The directory to contain the generated HTML files\"",
          "                        print \"  [-v <level>]   Optional. Level of detail in output (0 = none, 1 = some, 2 = all); default is 0\"",
          "                        print \"  [--publiconly] Optional. If set, only public methods are documented and public \"",
          "                        print \"                 variables are listed as methods. Default is off.\"",
          "                        print \"  [--help]       Optional. Print this usage information.\"",
          "                    } case { _ ->",
          "                        io.error.write \"gracedoc: Invalid argument {arg}.\\n\"",
          "                    }",
          "            } else {",
          "                if (skip == true) then {",
          "                    skip := false",
          "                } else {",
          "                    io.error.write \"gracedoc: Invalid argument {arg}. Arguments must start with a -.\\n\"",
          "                    sys.exit(1)",
          "                }",
          "            }",
          "        }",
          "        if ((settings.inputdir==\"\") || (settings.outputdir==\"\")) then {",
          "            io.error.write \"gracedoc: Both the -i and -o arguments are required.\\n\"",
          "            sys.exit(1)",
          "        }",
          "    } else {",
          "        io.error.write \"gracedoc: Both the -i and -o arguments are required.\\n\"",
          "        sys.exit(1)",
          "    }",
          "}",
          "",
          "type Section = type {",
          "    html -> String",
          "    isEmpty -> Boolean",
          "    insert -> Done",
          "}",
          "",
          "class section.withTemplate(html')andCursorAt(idx) -> Section {",
          "    var html:String is readable := html'",
          "    var hasContent is readable := false",
          "    var cursor:Number is confidential := idx",
          "    var elts is public := dictionary []",
          "    method addElement(n:String)withText(t:String) {",
          "        hasContent := true",
          "        elts.at(n)put(t)",
          "    }",
          "    method insert(t:String) {",
          "        hasContent := true",
          "        def begin = html.substringFrom(1)to(cursor)",
          "        def end = html.substringFrom(cursor+1)to(html.size)",
          "        html := \"{begin}{t}{end}\"",
          "        cursor := cursor + t.size",
          "    }",
          "    method alphabetize {",
          "        var alpha := elts.keys.sorted",
          "        var numElts := 0",
          "        for (alpha) do { k ->",
          "            var rowClass",
          "            if ((numElts % 2) == 0)",
          "                then { rowClass := \"row-even\" }",
          "                else { rowClass := \"row-odd\" }",
          "            elts.at(k)put(elts.at(k).replace(\"class='placeholder'\")",
          "                                        with(\"class='{rowClass}'\"))",
          "            insert(elts.at(k))",
          "            numElts := numElts + 1",
          "        }",
          "    }",
          "}",
          "",
          "method trim(c:String) -> String {",
          "    var start := 1",
          "    var end := c.size",
          "    while { c.at(start) == \" \" } do { start := start + 1 }",
          "    while { c.at(end) == \" \" } do { end := end - 1 }",
          "    return c.substringFrom(start)to(end)",
          "}",
          "",
          "method indent(n:Number) -> String {",
          "    //unrolled for optimization",
          "    if (n==0) then { return \"\" }",
          "    elseif (n==1) then { return \"    \" }",
          "    elseif (n==2) then { return \"        \" }",
          "    elseif (n==3) then { return \"            \" }",
          "    elseif (n==4) then { return \"                \" }",
          "    elseif (n==5) then { return \"                    \" }",
          "    elseif (n==6) then { return \"                        \" }",
          "    elseif (n==7) then { return \"                            \" }",
          "    elseif (n==8) then { return \"                                \" }",
          "    else { return \"                                    \"}",
          "}",
          "",
          "method autoindent(input) {",
          "    def indentedtags = set [\"link\", \"td\", \"meta\", \"style\", \"title\",",
          "        \"table\", \"div\", \"tr\", \"th\", \"iframe\", \"script\", \"section\", \"h1\", \"h2\",",
          "        \"h3\", \"h4\", \"h5\", \"h6\", \"ul\", \"li\", \"html\", \"body\", \"head\", \"hr\" ]",
          "    def samelineclosingtags = set [\"a\", \"span\", \"td\", \"th\", \"li\", \"h1\",",
          "        \"h2\", \"h3\", \"h4\", \"h5\", \"h6\", \"title\", \"script\", \"b\", \"i\", \"em\",",
          "        \"strong\"]",
          "    var stack:Number := 0",
          "    def inputSize = input.length",
          "    var output := \"\"",
          "    var char1",
          "    var char2",
          "    var cidx := 1",
          "    var tagName",
          "    while { cidx <= inputSize } do {",
          "        tagName := \"\"",
          "        char1 := input.at(cidx)",
          "        char2 := input.at(cidx+1)",
          "        if (char1==\"<\") then {",
          "            if (char2!=\"/\") then {",
          "                //OPENING TAG",
          "                var idx := cidx + 1",
          "                while {(input.at(idx)!=\" \") && (input.at(idx)!=\">\")} do {",
          "                    tagName := tagName ++ input.at(idx)",
          "                    idx := idx + 1",
          "                }",
          "                if (indentedtags.contains(tagName)) then {",
          "                    if (tagName != \"html\") then {",
          "                        output := output ++ \"\\n\"",
          "                    }",
          "                    output := output ++ indent(stack)",
          "                    stack := stack + 1",
          "                }",
          "            } else {",
          "                //CLOSING TAG",
          "                var idx := cidx + 2",
          "                while {input.at(idx)!=\">\"} do {",
          "                    tagName := tagName ++ input.at(idx)",
          "                    idx := idx + 1",
          "                }",
          "                if (indentedtags.contains(tagName)) then {",
          "                    stack := stack - 1",
          "                    if (!samelineclosingtags.contains(tagName)) then {",
          "                        output := output ++ \"\\n\" ++ indent(stack)",
          "                    }",
          "                }",
          "            }",
          "        } elseif ((char1==\"/\") && (char2==\">\")) then {",
          "            //ABBREVIATED CLOSING TAG",
          "            stack := stack - 1",
          "        }",
          "        output := output ++ char1",
          "        cidx := cidx + 1",
          "    }",
          "    return output",
          "}",
          "",
          "class directoryBuilderForFile(in) outTo (dir) as (pageType) {",
          "    inherits ast.baseVisitor",
          "",
          "    var isOnClassPage := false",
          "    var isOnTypePage := false",
          "    if (pageType==\"class\") then { isOnClassPage := true }",
          "    elseif (pageType==\"type\") then { isOnTypePage := true }",
          "",
          "    def pageName = if (in.endsWith(\".grace\").not) then { in }",
          "                   else { in.substringFrom(0)to(in.size - 6) }",
          "    def title = if (isOnTypePage) then { \"Type: {pageName}\" }",
          "                elseif (isOnClassPage) then { \"Class: {pageName}\" }",
          "                else { \"Module: {pageName}\" }",
          "",
          "    def outdir = if (isOnClassPage || isOnTypePage) then { dir } else { pageName }",
          "",
          "    method generate is public {",
          "        var outfile",
          "        if (!io.exists(\"{settings.outputdir}\")) then { io.system(\"mkdir {settings.outputdir}\") }",
          "        if (!io.exists(\"{settings.outputdir}/{outdir}\")) then { io.system(\"mkdir {settings.outputdir}/{outdir}\") }",
          "        if (!io.exists(\"{settings.outputdir}/{outdir}/classes\")) then {",
          "            io.system(\"mkdir {settings.outputdir}/{outdir}/classes\")",
          "        }",
          "        if (!io.exists(\"{settings.outputdir}/{outdir}/types\")) then {",
          "            io.system(\"mkdir {settings.outputdir}/{outdir}/types\")",
          "        }",
          "        if (isOnClassPage) then {",
          "            outfile := io.open(\"{settings.outputdir}/{outdir}/classes/{pageName}.html\", \"w\")",
          "        } elseif (isOnTypePage) then {",
          "            outfile := io.open(\"{settings.outputdir}/{outdir}/types/{pageName}.html\", \"w\")",
          "        } else {",
          "            outfile := io.open(\"{settings.outputdir}/{outdir}/{pageName}.html\", \"w\")",
          "        }",
          "        outfile.write(\"TEMPORARY\")",
          "        outfile.close",
          "",
          "        if (!isOnClassPage && !isOnTypePage) then {",
          "            // Rebuild the modules list with contents",
          "            var out := \"<!-- generated by Gracedoc, v{settings.version} -- https://github.com/reid47/gracedoc -->\\n\"",
          "            out := out ++ \"<!DOCTYPE html>\\n<html>\"",
          "            out := out ++ \"<head>\"",
          "            out := out ++ \"<title>Modules | GraceDocs</title>\"",
          "            out := out ++ \"<meta charset=\\\"UTF-8\\\" />\"",
          "            out := out ++ \"<link rel=\\\"stylesheet\\\" href=\\\"gracedoc.css\\\">\"",
          "            out := out ++ \"<script type='text/javascript' src=\\\"gracedoc.js\\\"></script>\"",
          "            out := out ++ \"</head>\"",
          "            out := out ++ \"<body>\"",
          "            out := out ++ \"<div class='list-container'>\"",
          "            out := out ++ \"<h5>Modules</h5><ul>\"",
          "            var modules := io.listdir(settings.outputdir)",
          "            def modit = modules.iterator",
          "            while {modit.hasNext} do {",
          "                var mod := modit.next",
          "                if ((mod.startsWith(\".\")==false) && (!mod.endsWith(\".css\")) && (!mod.endsWith(\".js\")) && (mod != \"index.html\") && (mod != \"modules.html\") && (mod != \"404.html\") && (mod != \"inputs\")) then {",
          "                    out := out ++ \"<li><span class='arrow-button-toggle' id='arrow-button-{mod}' onclick=\\\"toggleContents('{mod}');\\\">&#9654;</span><a href='{mod}/{mod}.html' target='mainFrame'>{mod}</a></li>\"",
          "",
          "                    out := out ++ \"<div class='contents-list' id='contents-{mod}' style='display:none;'>\"",
          "",
          "                    out := out ++ \"<h6>Types</h6><ul>\"",
          "                    var types := io.listdir(\"{settings.outputdir}/{mod}/types\")",
          "                    def typit = types.iterator",
          "                    while {typit.hasNext} do {",
          "                        var typ := typit.next",
          "                        typ := typ.substringFrom(1)to(typ.size - 5)",
          "                        if ((typ.startsWith(\".\")==false) && (typ != \"contents.html\")) then {",
          "                            out := out ++ \"<li><a href='{mod}/types/{typ}.html' target='mainFrame'>{typ}</a></li>\"",
          "                        }",
          "                    }",
          "                    out := out ++ \"</ul>\"",
          "",
          "                    out := out ++ \"<h6>Classes</h6><ul>\"",
          "                    var clss := io.listdir(\"{settings.outputdir}/{mod}/classes\")",
          "                    def clsit = clss.iterator",
          "                    while {clsit.hasNext} do {",
          "                        var cls := clsit.next",
          "                        cls := cls.substringFrom(1)to(cls.size - 5)",
          "                        if ((cls.startsWith(\".\")==false) && (cls != \"contents.html\")) then {",
          "                            out := out ++ \"<li><a href='{mod}/classes/{cls}.html' target='mainFrame'>{cls}</a></li>\"",
          "                        }",
          "                    }",
          "                    out := out ++ \"</ul>\"",
          "",
          "                    out := out ++ \"</div>\"",
          "                }",
          "            }",
          "            out := out ++ \"</ul></div></body>\"",
          "            out := out ++ \"</html>\"",
          "            var moduleslistfile := io.open(\"{settings.outputdir}/modules.html\", \"w\")",
          "            moduleslistfile.write(autoindent(out))",
          "            moduleslistfile.close",
          "        }",
          "    }",
          "",
          "    method visitTypeDec(o) -> Boolean {",
          "        if (isOnTypePage == false) then {",
          "            def typeVis = directoryBuilderForFile (o.name.value) outTo (outdir) as \"type\"",
          "            o.accept(typeVis)",
          "            typeVis.generate",
          "            return false",
          "        }",
          "        return true",
          "    }",
          "",
          "    method visitMethod(m) -> Boolean {",
          "        if (m.isClass.not) then { return false }",
          "        if (isOnClassPage == false) then {",
          "            def o = m.body.last",
          "            if (o.superclass != false) then {",
          "                o.superclass.accept(self)",
          "            }",
          "            def classVis = directoryBuilderForFile (o.name) outTo (outdir) as \"class\"",
          "            o.accept(classVis)",
          "            classVis.generate",
          "            return false",
          "        }",
          "        return true",
          "    }",
          "}",
          "",
          "",
          "class graceDocVisitor.createFrom(in) outTo (dir) as (pageType) {",
          "    inherits ast.baseVisitor",
          "",
          "    var isOnClassPage := false",
          "    var isOnTypePage := false",
          "    if (pageType==\"class\") then { isOnClassPage := true }",
          "    elseif (pageType==\"type\") then { isOnTypePage := true }",
          "",
          "    def pageName = if (in.endsWith(\".grace\").not) then { in }",
          "                   else { in.substringFrom(0)to(in.size - 6) }",
          "    def title = if (isOnTypePage) then { \"Type: {pageName}\" }",
          "                elseif (isOnClassPage) then { \"Class: {pageName}\" }",
          "                else { \"Module: {pageName}\" }",
          "    var headerSection",
          "    var methodsSection",
          "    var typesSection",
          "    var fieldsSection",
          "    var classesSection",
          "    var footerSection",
          "    var methodtypesSection",
          "    var topDescSection",
          "",
          "    //debugging",
          "    if (settings.verbosity > 1) then { print \"On {title} - graceDocVisitor created... ({sys.elapsedTime})\" }",
          "",
          "    def outdir = if (isOnClassPage || isOnTypePage) then { dir } else { pageName }",
          "    buildTemplate",
          "",
          "    method getTypeLink(v:String) is confidential {",
          "        def filename = \"{v}.html\"",
          "        var out := \"<a href='\"",
          "        //first, check current module's types directory for filename",
          "        if (io.exists(\"{settings.outputdir}/{outdir}/types/{filename}\")) then {",
          "            if (isOnTypePage) then {",
          "                out := out ++ \"{filename}\"",
          "            } elseif (isOnClassPage) then {",
          "                out := out ++ \"../types/{filename}\"",
          "            } else {",
          "                out := out ++ \"types/{filename}\"",
          "            }",
          "        //if not found, check imported module directories",
          "        } elseif (io.exists(\"{settings.outputdir}/imported/types/{filename}\")) then {",
          "            if (isOnTypePage || isOnClassPage) then {",
          "                out := out ++ \"../../imported/types/{filename}\"",
          "            } else {",
          "                out := out ++ \"../imported/types/{filename}\"",
          "            }",
          "        //if not found, check gracelib types",
          "        } elseif (io.exists(\"{settings.outputdir}/gracelib/types/{filename}\")) then {",
          "            if (isOnTypePage || isOnClassPage) then {",
          "                out := out ++ \"../../gracelib/types/{filename}\"",
          "            } else {",
          "                out := out ++ \"../gracelib/types/{filename}\"",
          "            }",
          "        } else {",
          "            var dots := \"\"",
          "            if (isOnClassPage || isOnTypePage) then {",
          "                dots := \"../../\"",
          "            } else {",
          "                dots := \"../\"",
          "            }",
          "            out := out ++ \"{dots}404.html\"",
          "        }",
          "        out := out ++ \"'>{v}</a>\"",
          "        return out",
          "    }",
          "",
          "    method getClassLink(c:String) is confidential {",
          "        def filename = \"{c}.html\"",
          "        var out := \"<a href='\"",
          "        //first, check current module's class directory for filename",
          "        if (io.exists(\"{settings.outputdir}/{outdir}/classes/{filename}\")) then {",
          "            if (isOnClassPage) then {",
          "                out := out ++ \"{filename}\"",
          "            } elseif (isOnTypePage) then {",
          "                out := out ++ \"../classes/{filename}\"",
          "            } else {",
          "                out := out ++ \"classes/{filename}\"",
          "            }",
          "        //if not found, check imported module directories",
          "        } elseif (io.exists(\"{settings.outputdir}/imported/classes/{filename}\")) then {",
          "            if (isOnTypePage || isOnClassPage) then {",
          "                out := out ++ \"../../imported/classes/{filename}\"",
          "            } else {",
          "                out := out ++ \"../imported/classes/{filename}\"",
          "            }",
          "        //if not found, check gracelib classes",
          "        } elseif (io.exists(\"{settings.outputdir}/gracelib/classes/{filename}\")) then {",
          "            if (isOnTypePage || isOnClassPage) then {",
          "                out := out ++ \"../../gracelib/classes/{filename}\"",
          "            } else {",
          "                out := out ++ \"../gracelib/classes/{filename}\"",
          "            }",
          "        } else {",
          "            var dots := \"\"",
          "            if (isOnClassPage || isOnTypePage) then {",
          "                dots := \"../../\"",
          "            } else {",
          "                dots := \"../\"",
          "            }",
          "            out := out ++ \"{dots}404.html\"",
          "        }",
          "        out := out ++ \"'>{c}</a>\"",
          "        return out",
          "    }",
          "",
          "    method buildTemplate is confidential {",
          "        var cursor := 0",
          "        var out := \"<!-- generated by Gracedoc, v{settings.version} -- https://github.com/reid47/gracedoc -->\\n\"",
          "        out := out ++ \"<!DOCTYPE html>\\n<html>\"",
          "        out := out ++ \"<head>\"",
          "        out := out ++ \"<title>{title} | GraceDocs</title>\"",
          "        out := out ++ \"<meta charset=\\\"UTF-8\\\" />\"",
          "        var cssDir",
          "        if (isOnClassPage || isOnTypePage) then { cssDir := \"../../gracedoc.css\" }",
          "        else { cssDir := \"../gracedoc.css\" }",
          "        out := out ++ \"<link rel=\\\"stylesheet\\\" href=\\\"{cssDir}\\\" />\"",
          "        out := out ++ \"</head>\"",
          "        out := out ++ \"<body>\"",
          "        out := out ++ \"<div class='header'><span class='header-left'>{title}\"",
          "        cursor := out.size",
          "        out := out ++ \"</span><span class='header-right'>GraceDocs</span></div>\"",
          "        out := out ++ \"<div class='container'>\"",
          "        headerSection := section.withTemplate(out)andCursorAt(cursor)",
          "",
          "        cursor := 0",
          "        out := \"<section id='top-description'>\"",
          "        out := out ++ \"<div class='top-box'>\"",
          "        cursor := out.size",
          "        out := out ++ \"</div>\"",
          "        out := out ++ \"</section>\"",
          "        topDescSection := section.withTemplate(out)andCursorAt(cursor)",
          "",
          "        cursor := 0",
          "        out := \"<section id='fields'>\"",
          "        out := out ++ \"<h4>Fields</h4>\"",
          "        out := out ++ \"<table>\"",
          "        out := out ++ \"<tr><th></th><th>Field name</th><th>Type (if given)</th></tr>\"",
          "        cursor := out.size",
          "        out := out ++ \"</table>\"",
          "        out := out ++ \"</section>\"",
          "        fieldsSection := section.withTemplate(out)andCursorAt(cursor)",
          "",
          "        cursor := 0",
          "        out := \"<section id='methodtypes'>\"",
          "        out := out ++ \"<h4>Added methods</h4>\"",
          "        out := out ++ \"<table>\"",
          "        out := out ++ \"<tr><th>Method signature</th><th>Return type</th></tr>\"",
          "        cursor := out.size",
          "        out := out ++ \"</table>\"",
          "        out := out ++ \"</section>\"",
          "        methodtypesSection := section.withTemplate(out)andCursorAt(cursor)",
          "",
          "        cursor := 0",
          "        out := \"<section id='types'>\"",
          "        out := out ++ \"<h4>Types</h4>\"",
          "        out := out ++ \"<table>\"",
          "        out := out ++ \"<tr><th>Type name</th></tr>\"",
          "        cursor := out.size",
          "        out := out ++ \"</table>\"",
          "        out := out ++ \"</section>\"",
          "        typesSection := section.withTemplate(out)andCursorAt(cursor)",
          "",
          "        cursor := 0",
          "        out := \"<section id='classes'>\"",
          "        out := out ++ \"<h4>Classes</h4>\"",
          "        out := out ++ \"<table>\"",
          "        out := out ++ \"<tr><th>Class name & constructor</th></tr>\"",
          "        cursor := out.size",
          "        out := out ++ \"</table>\"",
          "        out := out ++ \"</section>\"",
          "        classesSection := section.withTemplate(out)andCursorAt(cursor)",
          "",
          "        cursor := 0",
          "        out := \"<section id='methods'>\"",
          "        out := out ++ \"<h4>Methods</h4>\"",
          "        out := out ++ \"<table>\"",
          "        out := out ++ \"<tr><th>Method signature</th><th>Return type</th></tr>\"",
          "        cursor := out.size",
          "        out := out ++ \"</table>\"",
          "        out := out ++ \"</section>\"",
          "        methodsSection := section.withTemplate(out)andCursorAt(cursor)",
          "",
          "        cursor := 0",
          "        out := \"</div></body>\"",
          "        out := out ++ \"</html>\"",
          "        footerSection := section.withTemplate(out)andCursorAt(cursor)",
          "    }",
          "",
          "    method build404 {",
          "        var out := \"<!-- generated by Gracedoc, v{settings.version} -- https://github.com/reid47/gracedoc -->\\n\"",
          "        out := out ++ \"<!DOCTYPE html>\\n<html>\"",
          "        out := out ++ \"<head><title>404 - Page not found | GraceDocs</title></head>\"",
          "        out := out ++ \"<body><div id='message-404'>404 - Page not found</div></body>\"",
          "        out := out ++ \"</html>\"",
          "        var file404 := io.open(\"{settings.outputdir}/404.html\", \"w\")",
          "        file404.write(autoindent(out))",
          "        file404.close",
          "    }",
          "",
          "    method buildindex {",
          "        var out := \"<!-- generated by Gracedoc, v{settings.version} -- https://github.com/reid47/gracedoc -->\\n\"",
          "        out := out ++ \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\"",
          "        out := out ++ \"<head>\"",
          "        out := out ++ \"<title>GraceDocs</title>\"",
          "        out := out ++ \"<link rel=\\\"stylesheet\\\" href=\\\"graceDoc.css\\\">\"",
          "        out := out ++ \"</head>\"",
          "        out := out ++ \"<body>\"",
          "        out := out ++ \"<iframe id=\\\"frame-sidebar\\\" src=\\\"modules.html\\\" name=\\\"moduleFrame\\\"></iframe>\"",
          "        out := out ++ \"<iframe id=\\\"frame-main\\\" src=\\\"\\\" name=\\\"mainFrame\\\"></iframe>\"",
          "        out := out ++ \"</body>\"",
          "        out := out ++ \"</html>\"",
          "        var fileindex := io.open(\"{settings.outputdir}/index.html\", \"w\")",
          "        fileindex.write(autoindent(out))",
          "        fileindex.close",
          "    }",
          "",
          "    method buildjs {",
          "        var out := ‹function toggleContents(eltid) {",
          "    var elt = document.getElementById('contents-'+eltid)",
          "    var arrow = document.getElementById('arrow-button-'+eltid)",
          "    if (elt.style.display == 'none') {",
          "        elt.style.display = 'block';",
          "        arrow.innerHTML = '&#9660';",
          "    } else {",
          "        elt.style.display = 'none';",
          "        arrow.innerHTML = '&#9654';",
          "    }",
          "}›",
          "        var filejs := io.open(\"{settings.outputdir}/gracedoc.js\", \"w\")",
          "        filejs.write(out)",
          "        filejs.close",
          "    }",
          "",
          "    method buildcss {",
          "        var out := ‹@import url(http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,700);",
          "",
          "* {",
          "    margin: 0px;",
          "    padding: 0px;",
          "}",
          "",
          "body {",
          "    font-size: 16px;",
          "    font-family: 'Open Sans', Helvetica, Arial, sans-serif;",
          "}",
          "",
          "a, a:visited {",
          "    color: #00d;",
          "}",
          "",
          ".header {",
          "    height: 50px;",
          "    line-height: 50px;",
          "    padding: 0px 20px;",
          "    font-weight: bold;",
          "    background-color: rgb(0,80,105);",
          "    border-bottom: 2px solid #333;",
          "    font-size: 20px;",
          "    color: #fff;",
          "}",
          "",
          ".header-left {",
          "    float: left;",
          "}",
          "",
          ".header-right {",
          "    float: right;",
          "}",
          "",
          ".description {",
          "    font-style: italic;",
          "    font-size: 14px;",
          "}",
          "",
          ".container {",
          "    padding: 20px;",
          "}",
          "",
          "section {",
          "    border: 1px solid #079;",
          "    border-radius: 0px;",
          "}",
          "",
          "section > h4 {",
          "    margin: 0px;",
          "    background-color: rgb(80,160,185);",
          "    padding: 5px 10px;",
          "}",
          "",
          "section + section {",
          "    margin-top: 20px;",
          "}",
          "",
          "table {",
          "    margin: 0px;",
          "    width: 100%;",
          "    border-collapse: collapse;",
          "    table-layout: fixed;",
          "}",
          "",
          "th {",
          "    text-align: left;",
          "    background: rgb(130,200,215);",
          "    color: rgb(0,80,105);",
          "    font-size: 10px;",
          "    padding: 5px 10px;",
          "    border-bottom: 1px solid #079;",
          "}",
          "",
          "td {",
          "    padding: 10px;",
          "    word-wrap: break-word;",
          "}",
          "",
          ".row-odd { background-color: #eeeeee; }",
          ".row-odd + tr.description {",
          "    background-color: #eeeeee;",
          "}",
          "",
          ".row-even { background-color: #ffffff; }",
          ".row-even + tr.description {",
          "    background-color: #ffffff;",
          "}",
          "",
          "tr.description > td {",
          "    padding-top: 0px;",
          "}",
          ".code, code {",
          "    font-family: Monaco, monospace;",
          "}",
          ".description {",
          "    font-size: 14px;",
          "    width: 50%;",
          "}",
          ".parameter-type {",
          "    font-family: Monaco, monospace;",
          "}",
          ".type-name {",
          "    font-family: Monaco, monospace;",
          "    font-weight: bold;",
          "}",
          ".method-name {",
          "    font-weight: bold;",
          "}",
          ".class-name {",
          "    font-weight: bold;",
          "}",
          ".identifier-name {",
          "    font-family: Monaco, monospace;",
          "    font-weight: bold;",
          "}",
          "",
          "/* MODULES LIST */",
          "",
          ".list-container h5 {",
          "    font-size: 16px;",
          "    background-color: rgb(0,80,105);",
          "    color: #ffffff;",
          "    padding: 5px 10px;",
          "}",
          "",
          ".list-container h6 {",
          "    font-size: 12px;",
          "    margin: 0px;",
          "    color: #000;",
          "    padding: 0px 5px;",
          "}",
          "",
          ".list-container ul {",
          "    padding: 5px 10px 10px 10px;",
          "}",
          ".list-container li {",
          "    list-style-type: none;",
          "}",
          "",
          "iframe {",
          "    border: none;",
          "}",
          "",
          "#frame-sidebar {",
          "    position: absolute;",
          "    left: 0;",
          "    top: 0;",
          "    width: 20%;",
          "    height: 100%;",
          "}",
          "",
          "#frame-main {",
          "    position: absolute;",
          "    right: 0;",
          "    top: 0;",
          "    width: 80%;",
          "    height: 100%;",
          "    border-left: 4px solid #bbb",
          "}",
          "",
          ".contents-list {",
          "    background: #e0e8f0;",
          "    padding: 10px 5px 5px 5px;",
          "    margin-left: 20px;",
          "    margin-right: 20px;",
          "    font-size: 14px;",
          "}",
          "",
          ".arrow-button-toggle {",
          "    font-family: monospace;",
          "    font-size: 14px;",
          "    color: rgb(0,0,105);",
          "    cursor: pointer;",
          "    width: 20px;",
          "    display: inline-block;",
          "}",
          "",
          ".top-box {",
          "    word-wrap: break-word;",
          "    margin: 20px;",
          "}",
          "",
          ".top-box hr {",
          "    margin: 10px 0;",
          "    border: 1px solid #079;",
          "}",
          "",
          ".headline {",
          "    font-size: 18px;",
          "}",
          "",
          ".quiet {",
          "    color: #888;",
          "    font-size: 14px;",
          "}›",
          "        var filecss := io.open(\"{settings.outputdir}/gracedoc.css\", \"w\")",
          "        filecss.write(out)",
          "        filecss.close",
          "    }",
          "",
          "    method generate is public {",
          "        if (settings.verbosity > 1) then { print \"On {title} - starting to assemble HTML ({sys.elapsedTime})\" }",
          "",
          "        var outfile",
          "        var output := \"\"",
          "        if (isOnClassPage) then {",
          "            outfile := io.open(\"{settings.outputdir}/{outdir}/classes/{pageName}.html\", \"w\")",
          "        } elseif (isOnTypePage) then {",
          "            outfile := io.open(\"{settings.outputdir}/{outdir}/types/{pageName}.html\", \"w\")",
          "        } else {",
          "            outfile := io.open(\"{settings.outputdir}/{outdir}/{pageName}.html\", \"w\")",
          "        }",
          "        output := output ++ headerSection.html",
          "        if (topDescSection.hasContent) then {",
          "            output := output ++ topDescSection.html",
          "        }",
          "        if (fieldsSection.hasContent) then {",
          "            fieldsSection.alphabetize",
          "            output := output ++ fieldsSection.html",
          "        }",
          "        if (methodtypesSection.hasContent) then {",
          "            methodtypesSection.alphabetize",
          "            output := output ++ methodtypesSection.html",
          "        }",
          "        if (typesSection.hasContent) then {",
          "            typesSection.alphabetize",
          "            output := output ++ typesSection.html",
          "        }",
          "        if (classesSection.hasContent) then {",
          "            classesSection.alphabetize",
          "            output := output ++ classesSection.html",
          "        }",
          "        if (methodsSection.hasContent) then {",
          "            methodsSection.alphabetize",
          "            output := output ++ methodsSection.html",
          "        }",
          "        output := output ++ footerSection.html",
          "        output := autoindent(output)",
          "        outfile.write(output)",
          "        outfile.close",
          "        if (settings.verbosity > 1) then { print \"On {title} - file written ({sys.elapsedTime})\" }",
          "    }",
          "",
          "    method visitMethodType(o) -> Boolean {",
          "        if (isOnTypePage) then {",
          "            var t := \"<tr class='placeholder'><td><code>\"",
          "            var n := \"\"",
          "            for (o.signature) do { part ->",
          "                t := t ++ \"<span class='method-name'>\" ++ part.name ++ \"</span>\"",
          "                n := n ++ part.name",
          "                if (part != o.signature.last) then { n := n ++ \"()\" }",
          "                if (part.params.size > 0) then {",
          "                    t := t ++ \"(\"",
          "                    for (part.params) do { param ->",
          "                        if (param.dtype != false) then {",
          "                            t := t ++ \"<span class='parameter-name'>\" ++ param.nameString ++ \"</span>\"",
          "                            t := t ++ \":\"",
          "                            if (param.dtype.kind == \"identifier\") then {",
          "                                t := t ++ getTypeLink(param.dtype.value)",
          "                            } elseif (param.dtype.kind == \"generic\") then {",
          "                                t := t ++ getTypeLink(param.dtype.value.value) ++ \"&lt;\"",
          "                                param.dtype.args.do { each -> t := \"{t}{getTypeLink(each.value)}\" } separatedBy { t := t ++ \", \" }",
          "                                t := t ++ \"&gt;\"",
          "                            }",
          "                        } else {",
          "                            t := t ++ \"<span class='parameter-name'>\" ++ param.nameString ++ \"</span>\"",
          "                        }",
          "                        if ((part.params.size > 1) && (param != part.params.last)) then {",
          "                            t := t ++ \", \"",
          "                        }",
          "                    }",
          "                    t := t ++ \")\"",
          "                }",
          "            }",
          "            t := t ++ \"</code></td>\"",
          "            t := t ++ \"<td><code>\"",
          "            if (o.rtype != false) then {",
          "                if (o.rtype.kind == \"identifier\") then {",
          "                    t := t ++ getTypeLink(o.rtype.value)",
          "                } elseif (o.rtype.kind == \"generic\") then {",
          "                    t := t ++ getTypeLink(o.rtype.value.value) ++ \"&lt;\"",
          "                    o.rtype.args.do { each -> t := \"{t}{getTypeLink(each.value)}\" } separatedBy { t := t ++ \", \" }",
          "                    t := t ++ \"&gt;\"",
          "                }",
          "            } else {",
          "                t := t ++ \"Done\"",
          "            }",
          "            t := t ++ \"</code></td></tr>\"",
          "            t := t ++ (formatComments(o) rowClass \"description\" colspan 2)",
          "            methodtypesSection.addElement(n)withText(t)",
          "            return false",
          "        } else {",
          "            return true",
          "        }",
          "    }",
          "",
          "    method visitTypeDec(o) -> Boolean {",
          "        if (isOnTypePage == false) then {",
          "            var t := \"<tr class='placeholder'>\"",
          "            def n = o.name.value",
          "            t := t ++ \"<td class='type-name'>{getTypeLink(o.name.value)}\"",
          "            if (false != o.typeParams) then {",
          "                t := t ++ \"&lt;\"",
          "                for (o.typeParams.params) do { g ->",
          "                    t := t ++ g.nameString",
          "                    if (g != o.typeParams.params.last) then { t := t ++ \", \" }",
          "                }",
          "                t := t ++ \"&gt;\"",
          "            }",
          "            t := t ++ \"</td></tr>\"",
          "",
          "            def typeVis = graceDocVisitor.createFrom(\"{o.name.value}\")outTo(\"{outdir}\")as(\"type\")",
          "            o.accept(typeVis)",
          "            typeVis.generate",
          "            t := t ++ formatComments(o) rowClass \"description\" colspan 1",
          "            typesSection.addElement(n)withText(t)",
          "            return false",
          "        } else {",
          "            var t := \"<span class='headline'><b><code>{o.name.value}\"",
          "            if (false != o.typeParams) then {",
          "                t := t ++ \"&lt;\"",
          "                for (o.typeParams.params) do { g->",
          "                    t := t ++ g.nameString",
          "                    if (g != o.typeParams.params.last) then { t := t ++ \", \" }",
          "                }",
          "                t := t ++ \"&gt;\"",
          "            }",
          "            t := t ++ \"</b> = \"",
          "            var temp := \"\"",
          "            var ops := list []",
          "            var tps := list []",
          "            var node := o.value",
          "",
          "            if (node.kind == \"op\") then {",
          "                while {node.kind == \"op\"} do {",
          "                    ops.push(node.value)",
          "                    if ((node.left.kind == \"identifier\") && (node.right.kind == \"identifier\")) then {",
          "                        temp := \"{getTypeLink(node.left.value)} {ops.pop} {getTypeLink(node.right.value)}\"",
          "                    } elseif (node.right.kind == \"identifier\") then {",
          "                        tps.push(node.right.value)",
          "                    } elseif (node.left.kind == \"identifier\") then {",
          "                        temp := \"{getTypeLink(node.left.value)} {ops.pop}\"",
          "                    } elseif (node.left.kind == \"member\") then {",
          "                        temp := getTypeLink(\"{node.left.receiver.value}.{node.left.value}\") ++ \" {ops.pop}\"",
          "                    } elseif (node.right.kind == \"member\") then {",
          "                        tps.push(\"{node.left.receiver.value}.{node.left.value}\")",
          "                    }",
          "                    node := node.left",
          "                }",
          "                while {(tps.size > 0) && (ops.size > 0)} do {",
          "                    def p = tps.pop",
          "                    temp := \"{temp} {ops.pop} {getTypeLink(p.value)}\"",
          "                }",
          "                if (ops.size > 0) then {",
          "                    temp := \"{temp} {ops.pop}\"",
          "                }",
          "                t := t ++ temp ++ \" type \"",
          "                t := t ++ \"\\{ <span class='quiet'>...added methods below...</span> \\}\"",
          "            } elseif (node.kind == \"typeliteral\") then {",
          "                t := t ++ temp ++ \" type \"",
          "                t := t ++ \"\\{ <span class='quiet'>...added methods below...</span> \\}\"",
          "            } elseif (node.kind == \"identifier\") then {",
          "                t := t ++ \" \" ++ getTypeLink(node.value)",
          "                if (node.generics != false) then {",
          "                    t := t ++ \"&lt;\"",
          "                    for (node.generics) do { g->",
          "                        t := t ++ g.value",
          "                        if (g != node.generics.last) then { t := t ++ \", \" }",
          "                    }",
          "                    t := t ++ \"&gt;\"",
          "                }",
          "            } elseif (node.kind == \"member\") then {",
          "                t := t ++ getTypeLink(\"{node.receiver.value}.{node.value}\")",
          "                if (node.generics != false) then {",
          "                    t := t ++ \"&lt;\"",
          "                    for (node.generics) do { g->",
          "                        t := t ++ g.value",
          "                        if (g != node.generics.last) then { t := t ++ \", \" }",
          "                    }",
          "                    t := t ++ \"&gt;\"",
          "                }",
          "            }",
          "            t := t ++ \"</code></span>\"",
          "            t := t ++ \"<hr />\"",
          "            t := t ++ formatComments(o) rowClass \"top-box-description\" colspan 1",
          "            topDescSection.insert(t)",
          "            return true",
          "        }",
          "    }",
          "",
          "    method visitMethod(o) -> Boolean {",
          "",
          "        if (settings.publicOnly && o.isConfidential) then { return false }",
          "        if (o.isClass) then {",
          "            return doClassMethod(o)",
          "        }",
          "        var t := \"<tr class='placeholder'><td><code>\"",
          "        var n := \"\"",
          "        for (o.signature) do { part ->",
          "            t := t ++ \"<span class='method-name'>\" ++ part.name ++ \"</span>\"",
          "            n := n ++ part.name",
          "            if (part != o.signature.last) then { n := n ++ \"()\" }",
          "            if (part.params.size > 0) then {",
          "                t := t ++ \"(\"",
          "                for (part.params) do { param ->",
          "                    if (param.dtype != false) then {",
          "                        t := t ++ \"<span class='parameter-name'>\" ++ param.nameString ++ \"</span>\"",
          "",
          "                        t := t ++ \":<span class='parameter-type'>\"",
          "                        if (param.dtype.kind == \"identifier\") then {",
          "                            t := t ++ getTypeLink(param.dtype.value)",
          "                        } elseif (param.dtype.kind == \"generic\") then {",
          "                            t := t ++ getTypeLink(param.dtype.value.value) ++ \"&lt;\"",
          "                            param.dtype.args.do { each -> t := \"{t}{getTypeLink(each.value)}\" } separatedBy { t := t ++ \", \" }",
          "                            t := t ++ \"&gt;\"",
          "                        }",
          "                        t := t ++ \"</span>\"",
          "                        //t := t ++ \":<span class='parameter-type'>\" ++ getTypeLink(param.dtype.value) ++ \"</span>\"",
          "                    } else {",
          "                        t := t ++ \"<span class='parameter-name'>\" ++ param.nameString ++ \"</span>\"",
          "                    }",
          "                    if ((part.params.size > 1) && (param != part.params.last)) then {",
          "                        t := t ++ \", \"",
          "                    }",
          "                }",
          "                t := t ++ \")\"",
          "            }",
          "        }",
          "        t := t ++ \"</code></td>\"",
          "        t := t ++ \"<td><code>\"",
          "        if (o.dtype != false) then {",
          "            t := t ++ getTypeLink(o.dtype.value)",
          "        } else {",
          "            t := t ++ getTypeLink(\"Done\")",
          "        }",
          "        t := t ++ \"</code></td></tr>\"",
          "        t := t ++ formatComments(o) rowClass \"description\" colspan 2",
          "        methodsSection.addElement(n)withText(t)",
          "        return false",
          "    }",
          "",
          "    method doClassMethod(m) -> Boolean {",
          "        def o = m.body.last",
          "",
          "        if (isOnClassPage == false) then {",
          "            var t := \"<tr class='placeholder'>\"",
          "            def n = m.nameString",
          "            t := t ++ \"<td><code><span class='class-name'>{getClassLink(n)}</span>\"",
          "            t := t ++ \".\"",
          "            m.signature.do { part ->",
          "                t := t ++ \"<span class='method-name'>{part.name}</span>\"",
          "                if (part.params.size > 0) then {",
          "                    t := t ++ \"(\"",
          "                    for(part.params) do { param ->",
          "                        if (param.dtype != false) then {",
          "                            t := t ++ \"<span class='parameter-name'>\" ++ param.value ++ \"</span>\"",
          "                            t := t ++ \":<span class='parameter-type'>\" ++ getTypeLink(param.dtype.nameString) ++ \"</span>\"",
          "                        } else {",
          "                            t := t ++ \"<span class='parameter-name'>\" ++ param.value ++ \"</span>\"",
          "                        }",
          "                        if ((part.params.size > 1) && (param != part.params.last)) then {",
          "                            t := t ++ \", \"",
          "                        }",
          "                    }",
          "                    t := t ++ \")\"",
          "                }",
          "            }",
          "",
          "            if (m.dtype != false) then {",
          "                t := t ++ \" -> \"",
          "                if (m.dtype.kind == \"identifier\") then {",
          "                    t := t ++ getTypeLink(m.dtype.value)",
          "                } elseif (m.dtype.kind == \"generic\") then {",
          "                    t := t ++ getTypeLink(m.dtype.value.value) ++ \"&lt;\"",
          "                    m.dtype.args.do { each -> t := \"{t}{getTypeLink(each.value)}\" } separatedBy { t := t ++ \", \" }",
          "                    t := t ++ \"&gt;\"",
          "                }",
          "            }",
          "            t := t ++ \"</code></td></tr>\"",
          "",
          "            if(o.superclass != false) then {",
          "                o.superclass.accept(self)",
          "            }",
          "",
          "            def classVis = graceDocVisitor.createFrom(n) outTo (outdir) as \"class\"",
          "            o.accept(classVis)",
          "            classVis.generate",
          "            t := t ++ formatComments(o) rowClass \"top-box-description\" colspan 1",
          "            classesSection.addElement(n) withText(t)",
          "            return false",
          "          } else {",
          "            var t := \"<span class='headline'><code><b>{o.name}</b>.\"",
          "",
          "            for(m.signature) do { part ->",
          "                t := t ++ \"<b>{part.name}</b>\"",
          "                if (part.params.size > 0) then {",
          "                    t := t ++ \"(\"",
          "                    for(part.params) do { param ->",
          "                        if (param.dtype != false) then {",
          "                            t := t ++ param.value",
          "                            t := t ++ \":\" ++ getTypeLink(param.dtype.value)",
          "                        } else {",
          "                            t := t ++ param.value",
          "                        }",
          "                        if ((part.params.size > 1) && (param != part.params.at(part.params.size))) then {",
          "                            t := t ++ \", \"",
          "                        }",
          "                    }",
          "                    t := t ++ \")\"",
          "                }",
          "            }",
          "",
          "            if (m.dtype != false) then {",
          "                t := t ++ \" -> \"",
          "                if (m.dtype.kind == \"identifier\") then {",
          "                    t := t ++ getTypeLink(m.dtype.value)",
          "                } elseif (m.dtype.kind == \"generic\") then {",
          "                    t := t ++ getTypeLink(m.dtype.value.value) ++ \"&lt;\"",
          "                    m.dtype.args.do { each -> t := \"{t}{getTypeLink(each.value)}\" } separatedBy { t := t ++ \", \" }",
          "                    t := t ++ \"&gt;\"",
          "                }",
          "            }",
          "",
          "            t := t ++ \"</code></span><hr />\"",
          "            t := t ++ formatComments(o) rowClass \"top-box-description\" colspan 1",
          "            topDescSection.insert(t)",
          "            return true",
          "        }",
          "    }",
          "",
          "    method visitDefDec(o) -> Boolean {",
          "        if (isOnClassPage == true) then {",
          "            if (!settings.publicOnly) then {",
          "                def n = o.name.value",
          "                var t := \"<tr class='placeholder'><td><code>def</code></td><td class='identifier-name'>{o.name.value}\"",
          "                t := t ++ \"</td><td><code>\"",
          "                if (o.dtype != false) then {",
          "                    if (o.dtype.kind == \"identifier\") then {",
          "                        t := t ++ getTypeLink(o.dtype.value)",
          "                    } elseif (o.dtype.kind == \"generic\") then {",
          "                        t := t ++ getTypeLink(o.dtype.value.value) ++ \"&lt;\"",
          "                        o.dtype.args.do { each -> t := \"{t}{getTypeLink(each.value)}\" } separatedBy { t := t ++ \", \" }",
          "                        t := t ++ \"&gt;\"",
          "                    }",
          "                }",
          "                t := t ++ \"</code></td></tr>\"",
          "                t := t ++ formatComments(o) rowClass \"description\" colspan 3",
          "                fieldsSection.addElement(n) withText(t)",
          "",
          "            } else {",
          "                //in publicOnly mode, readable defs should show up as getter methods",
          "                if (o.isReadable) then {",
          "                    //FIXME: if isOnTypePage, then ???",
          "                    def n = o.name.value",
          "                    var t := \"<tr class='placeholder'><td class='identifier-name'>{o.name.value}\"",
          "                    t := t ++ \"</td><td><code>\"",
          "                    if (o.dtype != false) then {",
          "                        if (o.dtype.kind == \"identifier\") then {",
          "                            t := t ++ getTypeLink(o.dtype.value)",
          "                        } elseif (o.dtype.kind == \"generic\") then {",
          "                            t := t ++ getTypeLink(o.dtype.value.value) ++ \"&lt;\"",
          "                            o.dtype.args.do { each -> t := \"{t}{getTypeLink(each.value)}\" } separatedBy { t := t ++ \", \" }",
          "                            t := t ++ \"&gt;\"",
          "                        }",
          "                    }",
          "                    t := t ++ \"</code></td></tr>\"",
          "                    t := t ++ formatComments(o) rowClass \"description\" colspan 2",
          "                    methodsSection.addElement(n)withText(t)",
          "                }",
          "            }",
          "            return false",
          "        } else {",
          "            if (!settings.publicOnly) then {",
          "                def n = o.name.value",
          "                var t := \"<tr class='placeholder'><td><code>def</code></td><td class='identifier-name'>{o.name.value}\"",
          "                t := t ++ \"</td><td><code>\"",
          "                if (o.dtype != false) then {",
          "                    if (o.dtype.kind == \"identifier\") then {",
          "                        t := t ++ getTypeLink(o.dtype.value)",
          "                    } elseif (o.dtype.kind == \"generic\") then {",
          "                        t := t ++ getTypeLink(o.dtype.value.value) ++ \"&lt;\"",
          "                        o.dtype.args.do { each -> t := \"{t}{each.value}\" } separatedBy { t := t ++ \", \" }",
          "                        t := t ++ \"&gt;\"",
          "                    }",
          "                }",
          "                t := t ++ \"</code></td></tr>\"",
          "                t := t ++ formatComments(o) rowClass \"description\" colspan 3",
          "                fieldsSection.addElement(n)withText(t)",
          "",
          "            } else {",
          "                //in publicOnly mode, readable defs should show up as getter methods",
          "                if (o.isReadable) then {",
          "                    var t := \"<tr class='placeholder'><td class='identifier-name'>{o.name.value}\"",
          "                    def n = o.name.value",
          "                    t := t ++ \"</td><td><code>\"",
          "                    if (o.dtype != false) then {",
          "                        if (o.dtype.kind == \"identifier\") then {",
          "                            t := t ++ getTypeLink(o.dtype.value)",
          "                        } elseif (o.dtype.kind == \"generic\") then {",
          "                            t := t ++ getTypeLink(o.dtype.value.value) ++ \"&lt;\"",
          "                            o.dtype.args.do { each -> t := \"{t}{getTypeLink(each.value)}\" } separatedBy { t := t ++ \", \" }",
          "                            t := t ++ \"&gt;\"",
          "                        }",
          "                    }",
          "                    t := t ++ \"</code></td></tr>\"",
          "                    t := t ++ formatComments(o) rowClass \"description\" colspan 2",
          "                    methodsSection.addElement(n)withText(t)",
          "                }",
          "            }",
          "            return false",
          "        }",
          "    }",
          "",
          "    method visitVarDec(o) -> Boolean {",
          "        def n = o.nameString",
          "        if (isOnClassPage == true) then {",
          "            if (!settings.publicOnly) then {",
          "                var t := \"<tr class='placeholder'><td><code>var</code></td><td class='identifier-name'>{o.name.value}\"",
          "                t := t ++ \"</td><td><code>\"",
          "                if (o.dtype != false) then {",
          "                    t := t ++ \"{getTypeLink(o.dtype.value)}\"",
          "                }",
          "                t := t ++ \"</code></td></tr>\"",
          "                t := t ++ formatComments(o) rowClass \"description\" colspan 3",
          "                fieldsSection.addElement(n)withText(t)",
          "            } else {",
          "                if (o.isReadable) then {",
          "                    var t := \"<tr class='placeholder'><td class='identifier-name'>{o.name.value}\"",
          "                    t := t ++ \"</td><td>\"",
          "                    if (o.dtype != false) then {",
          "                        t := t ++ \"{getTypeLink(o.dtype.value)}\"",
          "                    }",
          "                    t := t ++ \"</code></td></tr>\"",
          "                    t := t ++ formatComments(o) rowClass \"description\" colspan 2",
          "                    methodsSection.addElement(n)withText(t)",
          "                }",
          "                if (o.isWritable) then {",
          "                    var t := \"<tr class='placeholder'><td><code><span class='method-name'>{o.name.value}:=</span>\"",
          "                    if (o.dtype != false) then {",
          "                        t := t ++ \"(_:{getTypeLink(o.dtype.value)})\"",
          "                    }",
          "                    t := t ++ \"</code></td><td><code>Done</code></td></tr>\"",
          "                    t := t ++ \"<tr class='description'><td colspan='2'>Updates {n}</td></tr>\"",
          "                    methodsSection.addElement(n++\":=\")withText(t)",
          "                }",
          "            }",
          "            return false",
          "        } else {",
          "            if (!settings.publicOnly) then {",
          "                var t := \"<tr class='placeholder'><td><code>var</code></td><td class='identifier-name'>{o.name.value}\"",
          "                t := t ++ \"</td><td><code>\"",
          "                if (o.dtype != false) then {",
          "                    t := t ++ \"{getTypeLink(o.dtype.value)}\"",
          "                }",
          "                t := t ++ \"</code></td></tr>\"",
          "                t := t ++ formatComments(o) rowClass \"description\" colspan 3",
          "                fieldsSection.addElement(n)withText(t)",
          "            } else {",
          "                if (o.isReadable) then {",
          "                    var t := \"<tr class='placeholder'><td class='identifier-name'>{o.name.value}\"",
          "                    t := t ++ \"</td><td><code>\"",
          "                    if (o.dtype != false) then {",
          "                        t := t ++ \"{getTypeLink(o.dtype.value)}\"",
          "                    }",
          "                    t := t ++ \"</code></td></tr>\"",
          "                    t := t ++ formatComments(o) rowClass \"description\" colspan 2",
          "                    methodsSection.addElement(n)withText(t)",
          "                }",
          "                if (o.isWritable) then {",
          "                    var t := \"<tr class='placeholder'><td><code><span class='method-name'>{n}:=</span>\"",
          "                    if (o.dtype != false) then {",
          "                        t := t ++ \"(_:{getTypeLink(o.dtype.value)})\"",
          "                    }",
          "                    t := t ++ \"</code></td><td><code>Done</code></td></tr>\"",
          "                    t := t ++ \"<tr class='description'><td colspan='2'>Updates {n}</td></tr>\"",
          "                    methodsSection.addElement \"{n}:=\" withText(t)",
          "                }",
          "            }",
          "            return false",
          "        }",
          "    }",
          "",
          "    method visitInherits(o) -> Boolean {",
          "        //if (isOnClassPage) then {",
          "",
          "        //} else {",
          "            return true",
          "        //}",
          "    }",
          "",
          "}",
          "",
          "method formatComments(astNode) rowClass (rowClassName) colspan (n) -> String {",
          "    var t := \"\"",
          "    if (false != astNode.comments) then {",
          "        t := t ++ \"<tr class='{rowClassName}'><td colspan='{n}'>\"",
          "        t := t ++ astNode.comments.value ++ \"\\n\"",
          "        t := t ++ \"</td></tr>\"",
          "    }",
          "    t",
          "}",
          "",
          "parseArguments",
          "",
          "var file",
          "var dbv",
          "var gdv",
          "var modulename",
          "var counter",
          "",
          "var allModules := io.listdir(settings.inputdir)",
          "var parsedFiles := dictionary []",
          "var inputWasFound := false",
          "",
          "//LEX AND PARSE ALL INPUT FILES",
          "counter := 1",
          "for (allModules) do { filename ->",
          "    if (filename.endsWith(\".grace\")) then {",
          "        file := io.open(\"{settings.inputdir}/{filename}\", \"r\")",
          "        if (settings.verbosity > 0) then { print \"On {filename} - lexing... ({sys.elapsedTime})\" }",
          "        var tokens := lexer.new.lexfile(file)",
          "        if (settings.verbosity > 0) then { print \"On {filename} - done lexing... ({sys.elapsedTime})\" }",
          "        if (settings.verbosity > 0) then { print \"On {filename} - parsing... ({sys.elapsedTime})\" }",
          "        //var values := parser.parse(tokens)",
          "        parsedFiles.at(counter)put(parser.parse(tokens))",
          "",
          "        if (settings.verbosity > 0) then { print \"On {filename} - done parsing... ({sys.elapsedTime})\" }",
          "        counter := counter + 1",
          "        inputWasFound := true",
          "        file.close",
          "    }",
          "}",
          "",
          "if (!inputWasFound) then {",
          "    io.error.write \"gracedoc: Input error - no Grace files found in the input directory.\"",
          "    io.error.write \"          Either the directory doesn't exist, or it doesn't contain any files.\"",
          "    io.error.write \"          Directories should be named relative to the ./minigrace executable.\"",
          "    sys.exit(1)",
          "}",
          "",
          "//BUILD DIRECTORY STRUCTURE",
          "counter := 1",
          "for (allModules) do { filename ->",
          "    if (filename.endsWith(\".grace\")) then {",
          "        if (settings.verbosity > 0) then { print \"On {filename} - building directories... ({sys.elapsedTime})\" }",
          "        modulename := filename.substringFrom(1)to(filename.size - 6)",
          "        def moduleObject = parsedFiles.at(counter)",
          "        dbv := directoryBuilderForFile(filename) outTo (modulename) as \"module\"",
          "        moduleObject.accept(dbv)",
          "        dbv.generate",
          "        if (settings.verbosity > 0) then { print \"On {filename} - directories built... ({sys.elapsedTime})\" }",
          "        counter := counter + 1",
          "    }",
          "}",
          "",
          "//GENERATE ACTUAL HTML PAGES",
          "counter := 1",
          "for (allModules) do { filename ->",
          "    if (filename.endsWith(\".grace\")) then {",
          "        if (settings.verbosity > 0) then { print \"On {filename} - generating GraceDocs... ({sys.elapsedTime})\" }",
          "        modulename := filename.substringFrom(1)to(filename.size - 6)",
          "        def moduleObject = parsedFiles.at (counter)",
          "        gdv := graceDocVisitor.createFrom(filename) outTo (modulename) as \"module\"",
          "        moduleObject.accept(gdv)",
          "        gdv.generate",
          "        gdv.buildindex",
          "        gdv.buildcss",
          "        gdv.buildjs",
          "        gdv.build404",
          "        if (settings.verbosity > 0) then { print \"On {filename} - done! ({sys.elapsedTime})\" }",
          "        counter := counter + 1",
          "    }",
          "}" ];
      }
      if (typeof global !== "undefined")
        global.gracecode_gracedoc = gracecode_gracedoc;
      if (typeof window !== "undefined")
        window.gracecode_gracedoc = gracecode_gracedoc;
