"use strict";
var___95__prelude = do_import("StandardPrelude", gracecode_StandardPrelude);
function gracecode_createJsGraphicsWrapper() {
  setModuleName("createJsGraphicsWrapper");
  this.definitionModule = "createJsGraphicsWrapper";
  this.definitionLine = 0;
  var var_prelude = var___95__prelude;
  this.outer = var_prelude;
  var reader_createJsGraphicsWrapper_outer0 = function() {
    return this.outer;
  };
  this.methods["outer"] = reader_createJsGraphicsWrapper_outer0;
  setLineNumber(1);    // compilenode method
  var func1 = function(argcv) {    // method eventListener
    var returnTarget = invocationCount;
    invocationCount++;
    var curarg = 1;
    setModuleName("createJsGraphicsWrapper");
    var obj2 = Grace_allocObject(GraceObject, "eventListener");
    obj2.definitionModule = "createJsGraphicsWrapper";
    obj2.definitionLine = 1;
    obj2.outer = this;
    var reader_createJsGraphicsWrapper_outer3 = function() {
      return this.outer;
    };
    obj2.methods["outer"] = reader_createJsGraphicsWrapper_outer3;
    var obj_init_2 = function() {
      var origSuperDepth = superDepth;
      superDepth = obj2;
      var func4 = function(argcv) {    // method onClick(_,_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_x = arguments[curarg];
        curarg++;
        var var_y = arguments[curarg];
        curarg++;
        setModuleName("createJsGraphicsWrapper");
        setLineNumber(11);    // compilenode identifier
        var opresult8 = callmethodChecked(var_x, "@(1)", [1], var_y);
        // call case 4: self request
        onSelf = true;
        var call9 = callmethodChecked(this, "mouseLocation':=(1)", [1], opresult8);
        setLineNumber(12);    // compilenode member
        // call case 6: other requests
        // call case 4: self request
        onSelf = true;
        var call12 = callmethodChecked(this, "clickBlock", []);
        var call13 = callmethodChecked(call12, "apply", []);
        return call13;
      };
      func4.paramCounts = [2];
      obj2.methods["onClick(2)"] = func4;
      func4.definitionLine = 10;
      func4.definitionModule = "createJsGraphicsWrapper";
      var func14 = function(argcv) {    // method mouseLocation
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("createJsGraphicsWrapper");
        setLineNumber(16);    // compilenode member
        // call case 4: self request
        onSelf = true;
        var call16 = callmethodChecked(this, "mouseLocation'", []);
        return call16;
      };
      func14.paramCounts = [0];
      obj2.methods["mouseLocation"] = func14;
      func14.definitionLine = 15;
      func14.definitionModule = "createJsGraphicsWrapper";
      var func17 = function(argcv) {    // method onClick:=(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_block = arguments[curarg];
        curarg++;
        setModuleName("createJsGraphicsWrapper");
        setLineNumber(20);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call19 = callmethodChecked(this, "clickBlock:=(1)", [1], var_block);
        return call19;
      };
      func17.paramCounts = [1];
      obj2.methods["onClick:=(1)"] = func17;
      func17.definitionLine = 19;
      func17.definitionModule = "createJsGraphicsWrapper";
      var func20 = function(argcv) {    // method onMouseUp(_,_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_x = arguments[curarg];
        curarg++;
        var var_y = arguments[curarg];
        curarg++;
        setModuleName("createJsGraphicsWrapper");
        setLineNumber(24);    // compilenode identifier
        var opresult24 = callmethodChecked(var_x, "@(1)", [1], var_y);
        // call case 4: self request
        onSelf = true;
        var call25 = callmethodChecked(this, "mouseLocation':=(1)", [1], opresult24);
        setLineNumber(25);    // compilenode member
        // call case 6: other requests
        // call case 4: self request
        onSelf = true;
        var call28 = callmethodChecked(this, "mouseUpBlock", []);
        var call29 = callmethodChecked(call28, "apply", []);
        return call29;
      };
      func20.paramCounts = [2];
      obj2.methods["onMouseUp(2)"] = func20;
      func20.definitionLine = 23;
      func20.definitionModule = "createJsGraphicsWrapper";
      var func30 = function(argcv) {    // method onMouseUp:=(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_block = arguments[curarg];
        curarg++;
        setModuleName("createJsGraphicsWrapper");
        setLineNumber(29);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call32 = callmethodChecked(this, "mouseUpBlock:=(1)", [1], var_block);
        return call32;
      };
      func30.paramCounts = [1];
      obj2.methods["onMouseUp:=(1)"] = func30;
      func30.definitionLine = 28;
      func30.definitionModule = "createJsGraphicsWrapper";
      var func33 = function(argcv) {    // method onMouseDown(_,_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_x = arguments[curarg];
        curarg++;
        var var_y = arguments[curarg];
        curarg++;
        setModuleName("createJsGraphicsWrapper");
        setLineNumber(33);    // compilenode identifier
        var opresult37 = callmethodChecked(var_x, "@(1)", [1], var_y);
        // call case 4: self request
        onSelf = true;
        var call38 = callmethodChecked(this, "mouseLocation':=(1)", [1], opresult37);
        setLineNumber(34);    // compilenode member
        // call case 6: other requests
        // call case 4: self request
        onSelf = true;
        var call41 = callmethodChecked(this, "mouseDownBlock", []);
        var call42 = callmethodChecked(call41, "apply", []);
        return call42;
      };
      func33.paramCounts = [2];
      obj2.methods["onMouseDown(2)"] = func33;
      func33.definitionLine = 32;
      func33.definitionModule = "createJsGraphicsWrapper";
      var func43 = function(argcv) {    // method onMouseDown:=(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_block = arguments[curarg];
        curarg++;
        setModuleName("createJsGraphicsWrapper");
        setLineNumber(38);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call45 = callmethodChecked(this, "mouseDownBlock:=(1)", [1], var_block);
        return call45;
      };
      func43.paramCounts = [1];
      obj2.methods["onMouseDown:=(1)"] = func43;
      func43.definitionLine = 37;
      func43.definitionModule = "createJsGraphicsWrapper";
      var func46 = function(argcv) {    // method onMouseOver(_,_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_x = arguments[curarg];
        curarg++;
        var var_y = arguments[curarg];
        curarg++;
        setModuleName("createJsGraphicsWrapper");
        setLineNumber(42);    // compilenode identifier
        var opresult50 = callmethodChecked(var_x, "@(1)", [1], var_y);
        // call case 4: self request
        onSelf = true;
        var call51 = callmethodChecked(this, "mouseLocation':=(1)", [1], opresult50);
        setLineNumber(43);    // compilenode member
        // call case 6: other requests
        // call case 4: self request
        onSelf = true;
        var call54 = callmethodChecked(this, "mouseOverBlock", []);
        var call55 = callmethodChecked(call54, "apply", []);
        return call55;
      };
      func46.paramCounts = [2];
      obj2.methods["onMouseOver(2)"] = func46;
      func46.definitionLine = 41;
      func46.definitionModule = "createJsGraphicsWrapper";
      var func56 = function(argcv) {    // method onMouseOver:=(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_block = arguments[curarg];
        curarg++;
        setModuleName("createJsGraphicsWrapper");
        setLineNumber(47);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call58 = callmethodChecked(this, "mouseOverBlock:=(1)", [1], var_block);
        return call58;
      };
      func56.paramCounts = [1];
      obj2.methods["onMouseOver:=(1)"] = func56;
      func56.definitionLine = 46;
      func56.definitionModule = "createJsGraphicsWrapper";
      var func59 = function(argcv) {    // method onPressMove(_,_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_x = arguments[curarg];
        curarg++;
        var var_y = arguments[curarg];
        curarg++;
        setModuleName("createJsGraphicsWrapper");
        setLineNumber(51);    // compilenode identifier
        var opresult63 = callmethodChecked(var_x, "@(1)", [1], var_y);
        // call case 4: self request
        onSelf = true;
        var call64 = callmethodChecked(this, "mouseLocation':=(1)", [1], opresult63);
        setLineNumber(52);    // compilenode member
        // call case 6: other requests
        // call case 4: self request
        onSelf = true;
        var call67 = callmethodChecked(this, "pressMoveBlock", []);
        var call68 = callmethodChecked(call67, "apply", []);
        return call68;
      };
      func59.paramCounts = [2];
      obj2.methods["onPressMove(2)"] = func59;
      func59.definitionLine = 50;
      func59.definitionModule = "createJsGraphicsWrapper";
      var func69 = function(argcv) {    // method onPressMove:=(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_block = arguments[curarg];
        curarg++;
        setModuleName("createJsGraphicsWrapper");
        setLineNumber(56);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call71 = callmethodChecked(this, "pressMoveBlock:=(1)", [1], var_block);
        return call71;
      };
      func69.paramCounts = [1];
      obj2.methods["onPressMove:=(1)"] = func69;
      func69.definitionLine = 55;
      func69.definitionModule = "createJsGraphicsWrapper";
      var func72 = function(argcv) {    // method onMouseExit
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("createJsGraphicsWrapper");
        setLineNumber(60);    // compilenode member
        // call case 6: other requests
        // call case 4: self request
        onSelf = true;
        var call75 = callmethodChecked(this, "mouseExitBlock", []);
        var call76 = callmethodChecked(call75, "apply", []);
        return call76;
      };
      func72.paramCounts = [0];
      obj2.methods["onMouseExit"] = func72;
      func72.definitionLine = 59;
      func72.definitionModule = "createJsGraphicsWrapper";
      var func77 = function(argcv) {    // method onMouseExit:=(_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_block = arguments[curarg];
        curarg++;
        setModuleName("createJsGraphicsWrapper");
        setLineNumber(64);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call79 = callmethodChecked(this, "mouseExitBlock:=(1)", [1], var_block);
        return call79;
      };
      func77.paramCounts = [1];
      obj2.methods["onMouseExit:=(1)"] = func77;
      func77.definitionLine = 63;
      func77.definitionModule = "createJsGraphicsWrapper";
      var func80 = function(argcv) {    // method addMouseUpListener(_,_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_obj = arguments[curarg];
        curarg++;
        var var_listener = arguments[curarg];
        curarg++;
        setModuleName("createJsGraphicsWrapper");
        setLineNumber(68);    // compilenode call
           // start native code from line 68
        var result = GraceDone;
        
              var obj = var_obj;
              obj.on("pressup", function(event) {
                  minigrace.trapErrors(function() {
                      callmethod(var_listener, "onMouseUp", [2], new GraceNum(event.stageX),
                      new GraceNum(event.stageY));
            });
        });
        
        var nat81 = result;
           // end native code insertion
        return nat81;
      };
      func80.paramCounts = [2];
      obj2.methods["addMouseUpListener(2)"] = func80;
      func80.definitionLine = 67;
      func80.definitionModule = "createJsGraphicsWrapper";
      var func82 = function(argcv) {    // method addMouseDownListener(_,_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_obj = arguments[curarg];
        curarg++;
        var var_listener = arguments[curarg];
        curarg++;
        setModuleName("createJsGraphicsWrapper");
        setLineNumber(80);    // compilenode call
           // start native code from line 80
        var result = GraceDone;
        
              var obj = var_obj;
              obj.on("pressup", function(event) {
                  minigrace.trapErrors(function() {
                      callmethod(var_listener, "onMouseDown", [2], new GraceNum(event.stageX),
                      new GraceNum(event.stageY));
            });
        });
        
        var nat83 = result;
           // end native code insertion
        return nat83;
      };
      func82.paramCounts = [2];
      obj2.methods["addMouseDownListener(2)"] = func82;
      func82.definitionLine = 79;
      func82.definitionModule = "createJsGraphicsWrapper";
      var func84 = function(argcv) {    // method addMouseOverListener(_,_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_obj = arguments[curarg];
        curarg++;
        var var_listener = arguments[curarg];
        curarg++;
        setModuleName("createJsGraphicsWrapper");
        setLineNumber(92);    // compilenode call
           // start native code from line 92
        var result = GraceDone;
        
              var obj = var_obj;
              obj.on("mouseover", function(event) {
                  minigrace.trapErrors(function() {
                      callmethod(var_listener, "onMouseOver", [2], new GraceNum(event.stageX),
                      new GraceNum(event.stageY));
            });
        });
        
        var nat85 = result;
           // end native code insertion
        return nat85;
      };
      func84.paramCounts = [2];
      obj2.methods["addMouseOverListener(2)"] = func84;
      func84.definitionLine = 91;
      func84.definitionModule = "createJsGraphicsWrapper";
      var func86 = function(argcv) {    // method addClickListener(_,_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_obj = arguments[curarg];
        curarg++;
        var var_listener = arguments[curarg];
        curarg++;
        setModuleName("createJsGraphicsWrapper");
        setLineNumber(104);    // compilenode call
           // start native code from line 104
        var result = GraceDone;
        
              var shape = var_obj;
              shape.on("click", function(event) {
                  minigrace.trapErrors(function() {
                      callmethod(var_listener, "onClick", [2], new GraceNum(event.stageX),
                      new GraceNum(event.stageY));
            });
        });
        
        var nat87 = result;
           // end native code insertion
        return nat87;
      };
      func86.paramCounts = [2];
      obj2.methods["addClickListener(2)"] = func86;
      func86.definitionLine = 103;
      func86.definitionModule = "createJsGraphicsWrapper";
      var func88 = function(argcv) {    // method addPressMoveListener(_,_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_obj = arguments[curarg];
        curarg++;
        var var_listener = arguments[curarg];
        curarg++;
        setModuleName("createJsGraphicsWrapper");
        setLineNumber(116);    // compilenode call
           // start native code from line 116
        var result = GraceDone;
        
              var shape = var_obj;
              shape.on("pressmove", function(event) {
                  minigrace.trapErrors(function() {
                      callmethod(var_listener, "onPressMove", [2], new GraceNum(event.stageX),
                      new GraceNum(event.stageY));
            });
        });
        
        var nat89 = result;
           // end native code insertion
        return nat89;
      };
      func88.paramCounts = [2];
      obj2.methods["addPressMoveListener(2)"] = func88;
      func88.definitionLine = 115;
      func88.definitionModule = "createJsGraphicsWrapper";
      var func90 = function(argcv) {    // method addStageDownListener(_,_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_stage = arguments[curarg];
        curarg++;
        var var_listener = arguments[curarg];
        curarg++;
        setModuleName("createJsGraphicsWrapper");
        setLineNumber(128);    // compilenode call
           // start native code from line 128
        var result = GraceDone;
        
              var_stage.on("stagemousedown", function(event) {
                  minigrace.trapErrors(function() {
                      callmethod(var_listener, "onMouseDown", [2], new GraceNum(event.stageX),
                      new GraceNum(event.stageY));
            });
        });
        
        var nat91 = result;
           // end native code insertion
        return nat91;
      };
      func90.paramCounts = [2];
      obj2.methods["addStageDownListener(2)"] = func90;
      func90.definitionLine = 127;
      func90.definitionModule = "createJsGraphicsWrapper";
      var func92 = function(argcv) {    // method addStageUpListener(_,_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_stage = arguments[curarg];
        curarg++;
        var var_listener = arguments[curarg];
        curarg++;
        setModuleName("createJsGraphicsWrapper");
        setLineNumber(139);    // compilenode call
           // start native code from line 139
        var result = GraceDone;
        
              var_stage.on("stagemouseup", function(event) {
                  minigrace.trapErrors(function() {
                      callmethod(var_listener, "onMouseUp", [2], new GraceNum(event.stageX),
                      new GraceNum(event.stageY));
            });
        });
        
        var nat93 = result;
           // end native code insertion
        return nat93;
      };
      func92.paramCounts = [2];
      obj2.methods["addStageUpListener(2)"] = func92;
      func92.definitionLine = 138;
      func92.definitionModule = "createJsGraphicsWrapper";
      var func94 = function(argcv) {    // method addMouseExitListener(_,_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_stage = arguments[curarg];
        curarg++;
        var var_listener = arguments[curarg];
        curarg++;
        setModuleName("createJsGraphicsWrapper");
        setLineNumber(150);    // compilenode call
           // start native code from line 150
        var result = GraceDone;
        
              var_stage.on("mouseleave", function(event) {
                  minigrace.trapErrors(function() {
                      callmethod(var_listener, "onMouseExit", [0]);
            });
        });
        
        var nat95 = result;
           // end native code insertion
        return nat95;
      };
      func94.paramCounts = [2];
      obj2.methods["addMouseExitListener(2)"] = func94;
      func94.definitionLine = 149;
      func94.definitionModule = "createJsGraphicsWrapper";
      var func96 = function(argcv) {    // method addStageMouseMoveListener(_,_)
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        var var_stage = arguments[curarg];
        curarg++;
        var var_listener = arguments[curarg];
        curarg++;
        setModuleName("createJsGraphicsWrapper");
        setLineNumber(160);    // compilenode call
           // start native code from line 160
        var result = GraceDone;
        
              var_stage.on("stagemousemove", function(event) {
                  minigrace.trapErrors(function() {
                      callmethod(var_listener, "onMouseOver", [2], new GraceNum(event.stageX),
                      new GraceNum(event.stageY));
            });
        });
        
        var nat97 = result;
           // end native code insertion
        return nat97;
      };
      func96.paramCounts = [2];
      obj2.methods["addStageMouseMoveListener(2)"] = func96;
      func96.definitionLine = 159;
      func96.definitionModule = "createJsGraphicsWrapper";
      setLineNumber(2);    // compilenode block
      var block98 = new GraceBlock(this, 2, 0);
      block98.real = function() {
        return GraceDone;
      };
      obj2.data["clickBlock"] = block98;
      var reader_createJsGraphicsWrapper_clickBlock99 = function() {
        return this.data["clickBlock"];
      };
      obj2.methods["clickBlock"] = reader_createJsGraphicsWrapper_clickBlock99;
      obj2.data["clickBlock"] = block98;
      var writer_createJsGraphicsWrapper_clickBlock99 = function(argcv, o) {
        this.data["clickBlock"] = o;
        return GraceDone;
      };
      obj2.methods["clickBlock:=(1)"] = writer_createJsGraphicsWrapper_clickBlock99;
      reader_createJsGraphicsWrapper_clickBlock99.confidential = true;
      writer_createJsGraphicsWrapper_clickBlock99.confidential = true;
      obj2.mutable = true;
      setLineNumber(3);    // compilenode block
      var block100 = new GraceBlock(this, 3, 0);
      block100.real = function() {
        return GraceDone;
      };
      obj2.data["mouseUpBlock"] = block100;
      var reader_createJsGraphicsWrapper_mouseUpBlock101 = function() {
        return this.data["mouseUpBlock"];
      };
      obj2.methods["mouseUpBlock"] = reader_createJsGraphicsWrapper_mouseUpBlock101;
      obj2.data["mouseUpBlock"] = block100;
      var writer_createJsGraphicsWrapper_mouseUpBlock101 = function(argcv, o) {
        this.data["mouseUpBlock"] = o;
        return GraceDone;
      };
      obj2.methods["mouseUpBlock:=(1)"] = writer_createJsGraphicsWrapper_mouseUpBlock101;
      reader_createJsGraphicsWrapper_mouseUpBlock101.confidential = true;
      writer_createJsGraphicsWrapper_mouseUpBlock101.confidential = true;
      obj2.mutable = true;
      setLineNumber(4);    // compilenode block
      var block102 = new GraceBlock(this, 4, 0);
      block102.real = function() {
        return GraceDone;
      };
      obj2.data["mouseDownBlock"] = block102;
      var reader_createJsGraphicsWrapper_mouseDownBlock103 = function() {
        return this.data["mouseDownBlock"];
      };
      obj2.methods["mouseDownBlock"] = reader_createJsGraphicsWrapper_mouseDownBlock103;
      obj2.data["mouseDownBlock"] = block102;
      var writer_createJsGraphicsWrapper_mouseDownBlock103 = function(argcv, o) {
        this.data["mouseDownBlock"] = o;
        return GraceDone;
      };
      obj2.methods["mouseDownBlock:=(1)"] = writer_createJsGraphicsWrapper_mouseDownBlock103;
      reader_createJsGraphicsWrapper_mouseDownBlock103.confidential = true;
      writer_createJsGraphicsWrapper_mouseDownBlock103.confidential = true;
      obj2.mutable = true;
      setLineNumber(5);    // compilenode block
      var block104 = new GraceBlock(this, 5, 0);
      block104.real = function() {
        return GraceDone;
      };
      obj2.data["pressMoveBlock"] = block104;
      var reader_createJsGraphicsWrapper_pressMoveBlock105 = function() {
        return this.data["pressMoveBlock"];
      };
      obj2.methods["pressMoveBlock"] = reader_createJsGraphicsWrapper_pressMoveBlock105;
      obj2.data["pressMoveBlock"] = block104;
      var writer_createJsGraphicsWrapper_pressMoveBlock105 = function(argcv, o) {
        this.data["pressMoveBlock"] = o;
        return GraceDone;
      };
      obj2.methods["pressMoveBlock:=(1)"] = writer_createJsGraphicsWrapper_pressMoveBlock105;
      reader_createJsGraphicsWrapper_pressMoveBlock105.confidential = true;
      writer_createJsGraphicsWrapper_pressMoveBlock105.confidential = true;
      obj2.mutable = true;
      setLineNumber(6);    // compilenode block
      var block106 = new GraceBlock(this, 6, 0);
      block106.real = function() {
        return GraceDone;
      };
      obj2.data["mouseOverBlock"] = block106;
      var reader_createJsGraphicsWrapper_mouseOverBlock107 = function() {
        return this.data["mouseOverBlock"];
      };
      obj2.methods["mouseOverBlock"] = reader_createJsGraphicsWrapper_mouseOverBlock107;
      obj2.data["mouseOverBlock"] = block106;
      var writer_createJsGraphicsWrapper_mouseOverBlock107 = function(argcv, o) {
        this.data["mouseOverBlock"] = o;
        return GraceDone;
      };
      obj2.methods["mouseOverBlock:=(1)"] = writer_createJsGraphicsWrapper_mouseOverBlock107;
      reader_createJsGraphicsWrapper_mouseOverBlock107.confidential = true;
      writer_createJsGraphicsWrapper_mouseOverBlock107.confidential = true;
      obj2.mutable = true;
      setLineNumber(7);    // compilenode block
      var block108 = new GraceBlock(this, 7, 0);
      block108.real = function() {
        return GraceDone;
      };
      obj2.data["mouseExitBlock"] = block108;
      var reader_createJsGraphicsWrapper_mouseExitBlock109 = function() {
        return this.data["mouseExitBlock"];
      };
      obj2.methods["mouseExitBlock"] = reader_createJsGraphicsWrapper_mouseExitBlock109;
      obj2.data["mouseExitBlock"] = block108;
      var writer_createJsGraphicsWrapper_mouseExitBlock109 = function(argcv, o) {
        this.data["mouseExitBlock"] = o;
        return GraceDone;
      };
      obj2.methods["mouseExitBlock:=(1)"] = writer_createJsGraphicsWrapper_mouseExitBlock109;
      reader_createJsGraphicsWrapper_mouseExitBlock109.confidential = true;
      writer_createJsGraphicsWrapper_mouseExitBlock109.confidential = true;
      obj2.mutable = true;
      setLineNumber(8);    // compilenode num
      var opresult112 = callmethodChecked(new GraceNum(0), "@(1)", [1], new GraceNum(0));
      obj2.data["mouseLocation'"] = opresult112;
      var reader_createJsGraphicsWrapper_mouseLocation__39__113 = function() {
        return this.data["mouseLocation'"];
      };
      obj2.methods["mouseLocation'"] = reader_createJsGraphicsWrapper_mouseLocation__39__113;
      obj2.data["mouseLocation'"] = opresult112;
      var writer_createJsGraphicsWrapper_mouseLocation__39__113 = function(argcv, o) {
        this.data["mouseLocation'"] = o;
        return GraceDone;
      };
      obj2.methods["mouseLocation':=(1)"] = writer_createJsGraphicsWrapper_mouseLocation__39__113;
      reader_createJsGraphicsWrapper_mouseLocation__39__113.confidential = true;
      writer_createJsGraphicsWrapper_mouseLocation__39__113.confidential = true;
      obj2.mutable = true;
      superDepth = origSuperDepth;
    };
    obj_init_2.apply(obj2, []);
    return obj2;
  };
  func1.paramCounts = [0];
  this.methods["eventListener"] = func1;
  func1.definitionLine = 1;
  func1.definitionModule = "createJsGraphicsWrapper";
    var func114 = function(argcv) {    // method eventListener$object(_)
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      // Start argument processing
      curarg = 1;
      // End argument processing
      setModuleName("createJsGraphicsWrapper");
      var returnTarget = invocationCount;
      invocationCount++;
      var obj115 = Grace_allocObject(GraceObject, "eventListener");
      obj115.definitionModule = "createJsGraphicsWrapper";
      obj115.definitionLine = 1;
      var inho115 = inheritingObject;
      while (inho115.superobj) inho115 = inho115.superobj;
      inho115.superobj = obj115;
      obj115.data = inheritingObject.data;
      if (inheritingObject.hasOwnProperty('_value'))
        obj115._value = inheritingObject._value;
      obj115.outer = this;
      var reader_createJsGraphicsWrapper_outer116 = function() {
        return this.outer;
      };
      obj115.methods["outer"] = reader_createJsGraphicsWrapper_outer116;
      var obj_init_115 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj115;
        var func117 = function(argcv) {    // method onClick(_,_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_x = arguments[curarg];
          curarg++;
          var var_y = arguments[curarg];
          curarg++;
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(11);    // compilenode identifier
          var opresult121 = callmethodChecked(var_x, "@(1)", [1], var_y);
          // call case 4: self request
          onSelf = true;
          var call122 = callmethodChecked(this, "mouseLocation':=(1)", [1], opresult121);
          setLineNumber(12);    // compilenode member
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call125 = callmethodChecked(this, "clickBlock", []);
          var call126 = callmethodChecked(call125, "apply", []);
          return call126;
        };
        func117.paramCounts = [2];
        obj115.methods["onClick(2)"] = func117;
        func117.definitionLine = 10;
        func117.definitionModule = "createJsGraphicsWrapper";
        var func127 = function(argcv) {    // method mouseLocation
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(16);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call129 = callmethodChecked(this, "mouseLocation'", []);
          return call129;
        };
        func127.paramCounts = [0];
        obj115.methods["mouseLocation"] = func127;
        func127.definitionLine = 15;
        func127.definitionModule = "createJsGraphicsWrapper";
        var func130 = function(argcv) {    // method onClick:=(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_block = arguments[curarg];
          curarg++;
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(20);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call132 = callmethodChecked(this, "clickBlock:=(1)", [1], var_block);
          return call132;
        };
        func130.paramCounts = [1];
        obj115.methods["onClick:=(1)"] = func130;
        func130.definitionLine = 19;
        func130.definitionModule = "createJsGraphicsWrapper";
        var func133 = function(argcv) {    // method onMouseUp(_,_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_x = arguments[curarg];
          curarg++;
          var var_y = arguments[curarg];
          curarg++;
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(24);    // compilenode identifier
          var opresult137 = callmethodChecked(var_x, "@(1)", [1], var_y);
          // call case 4: self request
          onSelf = true;
          var call138 = callmethodChecked(this, "mouseLocation':=(1)", [1], opresult137);
          setLineNumber(25);    // compilenode member
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call141 = callmethodChecked(this, "mouseUpBlock", []);
          var call142 = callmethodChecked(call141, "apply", []);
          return call142;
        };
        func133.paramCounts = [2];
        obj115.methods["onMouseUp(2)"] = func133;
        func133.definitionLine = 23;
        func133.definitionModule = "createJsGraphicsWrapper";
        var func143 = function(argcv) {    // method onMouseUp:=(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_block = arguments[curarg];
          curarg++;
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(29);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call145 = callmethodChecked(this, "mouseUpBlock:=(1)", [1], var_block);
          return call145;
        };
        func143.paramCounts = [1];
        obj115.methods["onMouseUp:=(1)"] = func143;
        func143.definitionLine = 28;
        func143.definitionModule = "createJsGraphicsWrapper";
        var func146 = function(argcv) {    // method onMouseDown(_,_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_x = arguments[curarg];
          curarg++;
          var var_y = arguments[curarg];
          curarg++;
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(33);    // compilenode identifier
          var opresult150 = callmethodChecked(var_x, "@(1)", [1], var_y);
          // call case 4: self request
          onSelf = true;
          var call151 = callmethodChecked(this, "mouseLocation':=(1)", [1], opresult150);
          setLineNumber(34);    // compilenode member
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call154 = callmethodChecked(this, "mouseDownBlock", []);
          var call155 = callmethodChecked(call154, "apply", []);
          return call155;
        };
        func146.paramCounts = [2];
        obj115.methods["onMouseDown(2)"] = func146;
        func146.definitionLine = 32;
        func146.definitionModule = "createJsGraphicsWrapper";
        var func156 = function(argcv) {    // method onMouseDown:=(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_block = arguments[curarg];
          curarg++;
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(38);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call158 = callmethodChecked(this, "mouseDownBlock:=(1)", [1], var_block);
          return call158;
        };
        func156.paramCounts = [1];
        obj115.methods["onMouseDown:=(1)"] = func156;
        func156.definitionLine = 37;
        func156.definitionModule = "createJsGraphicsWrapper";
        var func159 = function(argcv) {    // method onMouseOver(_,_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_x = arguments[curarg];
          curarg++;
          var var_y = arguments[curarg];
          curarg++;
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(42);    // compilenode identifier
          var opresult163 = callmethodChecked(var_x, "@(1)", [1], var_y);
          // call case 4: self request
          onSelf = true;
          var call164 = callmethodChecked(this, "mouseLocation':=(1)", [1], opresult163);
          setLineNumber(43);    // compilenode member
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call167 = callmethodChecked(this, "mouseOverBlock", []);
          var call168 = callmethodChecked(call167, "apply", []);
          return call168;
        };
        func159.paramCounts = [2];
        obj115.methods["onMouseOver(2)"] = func159;
        func159.definitionLine = 41;
        func159.definitionModule = "createJsGraphicsWrapper";
        var func169 = function(argcv) {    // method onMouseOver:=(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_block = arguments[curarg];
          curarg++;
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(47);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call171 = callmethodChecked(this, "mouseOverBlock:=(1)", [1], var_block);
          return call171;
        };
        func169.paramCounts = [1];
        obj115.methods["onMouseOver:=(1)"] = func169;
        func169.definitionLine = 46;
        func169.definitionModule = "createJsGraphicsWrapper";
        var func172 = function(argcv) {    // method onPressMove(_,_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_x = arguments[curarg];
          curarg++;
          var var_y = arguments[curarg];
          curarg++;
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(51);    // compilenode identifier
          var opresult176 = callmethodChecked(var_x, "@(1)", [1], var_y);
          // call case 4: self request
          onSelf = true;
          var call177 = callmethodChecked(this, "mouseLocation':=(1)", [1], opresult176);
          setLineNumber(52);    // compilenode member
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call180 = callmethodChecked(this, "pressMoveBlock", []);
          var call181 = callmethodChecked(call180, "apply", []);
          return call181;
        };
        func172.paramCounts = [2];
        obj115.methods["onPressMove(2)"] = func172;
        func172.definitionLine = 50;
        func172.definitionModule = "createJsGraphicsWrapper";
        var func182 = function(argcv) {    // method onPressMove:=(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_block = arguments[curarg];
          curarg++;
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(56);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call184 = callmethodChecked(this, "pressMoveBlock:=(1)", [1], var_block);
          return call184;
        };
        func182.paramCounts = [1];
        obj115.methods["onPressMove:=(1)"] = func182;
        func182.definitionLine = 55;
        func182.definitionModule = "createJsGraphicsWrapper";
        var func185 = function(argcv) {    // method onMouseExit
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(60);    // compilenode member
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call188 = callmethodChecked(this, "mouseExitBlock", []);
          var call189 = callmethodChecked(call188, "apply", []);
          return call189;
        };
        func185.paramCounts = [0];
        obj115.methods["onMouseExit"] = func185;
        func185.definitionLine = 59;
        func185.definitionModule = "createJsGraphicsWrapper";
        var func190 = function(argcv) {    // method onMouseExit:=(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_block = arguments[curarg];
          curarg++;
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(64);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call192 = callmethodChecked(this, "mouseExitBlock:=(1)", [1], var_block);
          return call192;
        };
        func190.paramCounts = [1];
        obj115.methods["onMouseExit:=(1)"] = func190;
        func190.definitionLine = 63;
        func190.definitionModule = "createJsGraphicsWrapper";
        var func193 = function(argcv) {    // method addMouseUpListener(_,_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_obj = arguments[curarg];
          curarg++;
          var var_listener = arguments[curarg];
          curarg++;
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(68);    // compilenode call
             // start native code from line 68
          var result = GraceDone;
          
              var obj = var_obj;
              obj.on("pressup", function(event) {
                  minigrace.trapErrors(function() {
                      callmethod(var_listener, "onMouseUp", [2], new GraceNum(event.stageX),
                      new GraceNum(event.stageY));
            });
        });
        
          var nat194 = result;
             // end native code insertion
          return nat194;
        };
        func193.paramCounts = [2];
        obj115.methods["addMouseUpListener(2)"] = func193;
        func193.definitionLine = 67;
        func193.definitionModule = "createJsGraphicsWrapper";
        var func195 = function(argcv) {    // method addMouseDownListener(_,_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_obj = arguments[curarg];
          curarg++;
          var var_listener = arguments[curarg];
          curarg++;
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(80);    // compilenode call
             // start native code from line 80
          var result = GraceDone;
          
              var obj = var_obj;
              obj.on("pressup", function(event) {
                  minigrace.trapErrors(function() {
                      callmethod(var_listener, "onMouseDown", [2], new GraceNum(event.stageX),
                      new GraceNum(event.stageY));
            });
        });
        
          var nat196 = result;
             // end native code insertion
          return nat196;
        };
        func195.paramCounts = [2];
        obj115.methods["addMouseDownListener(2)"] = func195;
        func195.definitionLine = 79;
        func195.definitionModule = "createJsGraphicsWrapper";
        var func197 = function(argcv) {    // method addMouseOverListener(_,_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_obj = arguments[curarg];
          curarg++;
          var var_listener = arguments[curarg];
          curarg++;
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(92);    // compilenode call
             // start native code from line 92
          var result = GraceDone;
          
              var obj = var_obj;
              obj.on("mouseover", function(event) {
                  minigrace.trapErrors(function() {
                      callmethod(var_listener, "onMouseOver", [2], new GraceNum(event.stageX),
                      new GraceNum(event.stageY));
            });
        });
        
          var nat198 = result;
             // end native code insertion
          return nat198;
        };
        func197.paramCounts = [2];
        obj115.methods["addMouseOverListener(2)"] = func197;
        func197.definitionLine = 91;
        func197.definitionModule = "createJsGraphicsWrapper";
        var func199 = function(argcv) {    // method addClickListener(_,_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_obj = arguments[curarg];
          curarg++;
          var var_listener = arguments[curarg];
          curarg++;
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(104);    // compilenode call
             // start native code from line 104
          var result = GraceDone;
          
              var shape = var_obj;
              shape.on("click", function(event) {
                  minigrace.trapErrors(function() {
                      callmethod(var_listener, "onClick", [2], new GraceNum(event.stageX),
                      new GraceNum(event.stageY));
            });
        });
        
          var nat200 = result;
             // end native code insertion
          return nat200;
        };
        func199.paramCounts = [2];
        obj115.methods["addClickListener(2)"] = func199;
        func199.definitionLine = 103;
        func199.definitionModule = "createJsGraphicsWrapper";
        var func201 = function(argcv) {    // method addPressMoveListener(_,_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_obj = arguments[curarg];
          curarg++;
          var var_listener = arguments[curarg];
          curarg++;
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(116);    // compilenode call
             // start native code from line 116
          var result = GraceDone;
          
              var shape = var_obj;
              shape.on("pressmove", function(event) {
                  minigrace.trapErrors(function() {
                      callmethod(var_listener, "onPressMove", [2], new GraceNum(event.stageX),
                      new GraceNum(event.stageY));
            });
        });
        
          var nat202 = result;
             // end native code insertion
          return nat202;
        };
        func201.paramCounts = [2];
        obj115.methods["addPressMoveListener(2)"] = func201;
        func201.definitionLine = 115;
        func201.definitionModule = "createJsGraphicsWrapper";
        var func203 = function(argcv) {    // method addStageDownListener(_,_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_stage = arguments[curarg];
          curarg++;
          var var_listener = arguments[curarg];
          curarg++;
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(128);    // compilenode call
             // start native code from line 128
          var result = GraceDone;
          
              var_stage.on("stagemousedown", function(event) {
                  minigrace.trapErrors(function() {
                      callmethod(var_listener, "onMouseDown", [2], new GraceNum(event.stageX),
                      new GraceNum(event.stageY));
            });
        });
        
          var nat204 = result;
             // end native code insertion
          return nat204;
        };
        func203.paramCounts = [2];
        obj115.methods["addStageDownListener(2)"] = func203;
        func203.definitionLine = 127;
        func203.definitionModule = "createJsGraphicsWrapper";
        var func205 = function(argcv) {    // method addStageUpListener(_,_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_stage = arguments[curarg];
          curarg++;
          var var_listener = arguments[curarg];
          curarg++;
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(139);    // compilenode call
             // start native code from line 139
          var result = GraceDone;
          
              var_stage.on("stagemouseup", function(event) {
                  minigrace.trapErrors(function() {
                      callmethod(var_listener, "onMouseUp", [2], new GraceNum(event.stageX),
                      new GraceNum(event.stageY));
            });
        });
        
          var nat206 = result;
             // end native code insertion
          return nat206;
        };
        func205.paramCounts = [2];
        obj115.methods["addStageUpListener(2)"] = func205;
        func205.definitionLine = 138;
        func205.definitionModule = "createJsGraphicsWrapper";
        var func207 = function(argcv) {    // method addMouseExitListener(_,_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_stage = arguments[curarg];
          curarg++;
          var var_listener = arguments[curarg];
          curarg++;
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(150);    // compilenode call
             // start native code from line 150
          var result = GraceDone;
          
              var_stage.on("mouseleave", function(event) {
                  minigrace.trapErrors(function() {
                      callmethod(var_listener, "onMouseExit", [0]);
            });
        });
        
          var nat208 = result;
             // end native code insertion
          return nat208;
        };
        func207.paramCounts = [2];
        obj115.methods["addMouseExitListener(2)"] = func207;
        func207.definitionLine = 149;
        func207.definitionModule = "createJsGraphicsWrapper";
        var func209 = function(argcv) {    // method addStageMouseMoveListener(_,_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_stage = arguments[curarg];
          curarg++;
          var var_listener = arguments[curarg];
          curarg++;
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(160);    // compilenode call
             // start native code from line 160
          var result = GraceDone;
          
              var_stage.on("stagemousemove", function(event) {
                  minigrace.trapErrors(function() {
                      callmethod(var_listener, "onMouseOver", [2], new GraceNum(event.stageX),
                      new GraceNum(event.stageY));
            });
        });
        
          var nat210 = result;
             // end native code insertion
          return nat210;
        };
        func209.paramCounts = [2];
        obj115.methods["addStageMouseMoveListener(2)"] = func209;
        func209.definitionLine = 159;
        func209.definitionModule = "createJsGraphicsWrapper";
        setLineNumber(2);    // compilenode block
        var block211 = new GraceBlock(this, 2, 0);
        block211.real = function() {
          return GraceDone;
        };
        obj115.data["clickBlock"] = block211;
        var reader_createJsGraphicsWrapper_clickBlock212 = function() {
          return this.data["clickBlock"];
        };
        obj115.methods["clickBlock"] = reader_createJsGraphicsWrapper_clickBlock212;
        obj115.data["clickBlock"] = block211;
        var writer_createJsGraphicsWrapper_clickBlock212 = function(argcv, o) {
          this.data["clickBlock"] = o;
          return GraceDone;
        };
        obj115.methods["clickBlock:=(1)"] = writer_createJsGraphicsWrapper_clickBlock212;
        reader_createJsGraphicsWrapper_clickBlock212.confidential = true;
        writer_createJsGraphicsWrapper_clickBlock212.confidential = true;
        obj115.mutable = true;
        setLineNumber(3);    // compilenode block
        var block213 = new GraceBlock(this, 3, 0);
        block213.real = function() {
          return GraceDone;
        };
        obj115.data["mouseUpBlock"] = block213;
        var reader_createJsGraphicsWrapper_mouseUpBlock214 = function() {
          return this.data["mouseUpBlock"];
        };
        obj115.methods["mouseUpBlock"] = reader_createJsGraphicsWrapper_mouseUpBlock214;
        obj115.data["mouseUpBlock"] = block213;
        var writer_createJsGraphicsWrapper_mouseUpBlock214 = function(argcv, o) {
          this.data["mouseUpBlock"] = o;
          return GraceDone;
        };
        obj115.methods["mouseUpBlock:=(1)"] = writer_createJsGraphicsWrapper_mouseUpBlock214;
        reader_createJsGraphicsWrapper_mouseUpBlock214.confidential = true;
        writer_createJsGraphicsWrapper_mouseUpBlock214.confidential = true;
        obj115.mutable = true;
        setLineNumber(4);    // compilenode block
        var block215 = new GraceBlock(this, 4, 0);
        block215.real = function() {
          return GraceDone;
        };
        obj115.data["mouseDownBlock"] = block215;
        var reader_createJsGraphicsWrapper_mouseDownBlock216 = function() {
          return this.data["mouseDownBlock"];
        };
        obj115.methods["mouseDownBlock"] = reader_createJsGraphicsWrapper_mouseDownBlock216;
        obj115.data["mouseDownBlock"] = block215;
        var writer_createJsGraphicsWrapper_mouseDownBlock216 = function(argcv, o) {
          this.data["mouseDownBlock"] = o;
          return GraceDone;
        };
        obj115.methods["mouseDownBlock:=(1)"] = writer_createJsGraphicsWrapper_mouseDownBlock216;
        reader_createJsGraphicsWrapper_mouseDownBlock216.confidential = true;
        writer_createJsGraphicsWrapper_mouseDownBlock216.confidential = true;
        obj115.mutable = true;
        setLineNumber(5);    // compilenode block
        var block217 = new GraceBlock(this, 5, 0);
        block217.real = function() {
          return GraceDone;
        };
        obj115.data["pressMoveBlock"] = block217;
        var reader_createJsGraphicsWrapper_pressMoveBlock218 = function() {
          return this.data["pressMoveBlock"];
        };
        obj115.methods["pressMoveBlock"] = reader_createJsGraphicsWrapper_pressMoveBlock218;
        obj115.data["pressMoveBlock"] = block217;
        var writer_createJsGraphicsWrapper_pressMoveBlock218 = function(argcv, o) {
          this.data["pressMoveBlock"] = o;
          return GraceDone;
        };
        obj115.methods["pressMoveBlock:=(1)"] = writer_createJsGraphicsWrapper_pressMoveBlock218;
        reader_createJsGraphicsWrapper_pressMoveBlock218.confidential = true;
        writer_createJsGraphicsWrapper_pressMoveBlock218.confidential = true;
        obj115.mutable = true;
        setLineNumber(6);    // compilenode block
        var block219 = new GraceBlock(this, 6, 0);
        block219.real = function() {
          return GraceDone;
        };
        obj115.data["mouseOverBlock"] = block219;
        var reader_createJsGraphicsWrapper_mouseOverBlock220 = function() {
          return this.data["mouseOverBlock"];
        };
        obj115.methods["mouseOverBlock"] = reader_createJsGraphicsWrapper_mouseOverBlock220;
        obj115.data["mouseOverBlock"] = block219;
        var writer_createJsGraphicsWrapper_mouseOverBlock220 = function(argcv, o) {
          this.data["mouseOverBlock"] = o;
          return GraceDone;
        };
        obj115.methods["mouseOverBlock:=(1)"] = writer_createJsGraphicsWrapper_mouseOverBlock220;
        reader_createJsGraphicsWrapper_mouseOverBlock220.confidential = true;
        writer_createJsGraphicsWrapper_mouseOverBlock220.confidential = true;
        obj115.mutable = true;
        setLineNumber(7);    // compilenode block
        var block221 = new GraceBlock(this, 7, 0);
        block221.real = function() {
          return GraceDone;
        };
        obj115.data["mouseExitBlock"] = block221;
        var reader_createJsGraphicsWrapper_mouseExitBlock222 = function() {
          return this.data["mouseExitBlock"];
        };
        obj115.methods["mouseExitBlock"] = reader_createJsGraphicsWrapper_mouseExitBlock222;
        obj115.data["mouseExitBlock"] = block221;
        var writer_createJsGraphicsWrapper_mouseExitBlock222 = function(argcv, o) {
          this.data["mouseExitBlock"] = o;
          return GraceDone;
        };
        obj115.methods["mouseExitBlock:=(1)"] = writer_createJsGraphicsWrapper_mouseExitBlock222;
        reader_createJsGraphicsWrapper_mouseExitBlock222.confidential = true;
        writer_createJsGraphicsWrapper_mouseExitBlock222.confidential = true;
        obj115.mutable = true;
        setLineNumber(8);    // compilenode num
        var opresult225 = callmethodChecked(new GraceNum(0), "@(1)", [1], new GraceNum(0));
        obj115.data["mouseLocation'"] = opresult225;
        var reader_createJsGraphicsWrapper_mouseLocation__39__226 = function() {
          return this.data["mouseLocation'"];
        };
        obj115.methods["mouseLocation'"] = reader_createJsGraphicsWrapper_mouseLocation__39__226;
        obj115.data["mouseLocation'"] = opresult225;
        var writer_createJsGraphicsWrapper_mouseLocation__39__226 = function(argcv, o) {
          this.data["mouseLocation'"] = o;
          return GraceDone;
        };
        obj115.methods["mouseLocation':=(1)"] = writer_createJsGraphicsWrapper_mouseLocation__39__226;
        reader_createJsGraphicsWrapper_mouseLocation__39__226.confidential = true;
        writer_createJsGraphicsWrapper_mouseLocation__39__226.confidential = true;
        obj115.mutable = true;
        superDepth = origSuperDepth;
      };
      obj_init_115.apply(inheritingObject, []);
      return obj115;
      };
      this.methods["eventListener$object(1)"] = func114;
    setLineNumber(171);    // compilenode method
    var func227 = function(argcv) {    // method stage(_,_)
      var returnTarget = invocationCount;
      invocationCount++;
      var curarg = 1;
      var var_width__39__ = arguments[curarg];
      curarg++;
      var var_height__39__ = arguments[curarg];
      curarg++;
      setModuleName("createJsGraphicsWrapper");
      var obj228 = Grace_allocObject(GraceObject, "stage(_,_)");
      obj228.definitionModule = "createJsGraphicsWrapper";
      obj228.definitionLine = 171;
      obj228.outer = this;
      var reader_createJsGraphicsWrapper_outer229 = function() {
        return this.outer;
      };
      obj228.methods["outer"] = reader_createJsGraphicsWrapper_outer229;
      var obj_init_228 = function() {
        var origSuperDepth = superDepth;
        superDepth = obj228;
        var func230 = function(argcv) {    // method new(_,_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_width = arguments[curarg];
          curarg++;
          var var_height = arguments[curarg];
          curarg++;
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(181);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call232 = callmethodChecked(this, "clearTimeout", []);
          setLineNumber(182);    // compilenode call
             // start native code from line 182
          var result = GraceDone;
          
              var width = var_width._value;
              var height = var_height._value;
              var size = "height=" + height.toString() + ",width=" + width.toString()
              var canvas = document.getElementById("graphics");
              var ctx = canvas.getContext("2d");
              ctx.setTransform(1, 0, 0, 1, 0, 0);
              ctx.clearRect(0, 0, canvas.width, canvas,height);
              var stage = new createjs.Stage(canvas);
              createjs.Ticker.removeAllEventListeners();
              stage.enableDOMEvents(true);
              canvas.setAttribute('tabindex','0');
              canvas.focus();
              canvas = stage.canvas;
              this.stage = stage
              return stage;
        
          var nat233 = result;
             // end native code insertion
          return nat233;
        };
        func230.paramCounts = [2];
        obj228.methods["new(2)"] = func230;
        func230.definitionLine = 180;
        func230.definitionModule = "createJsGraphicsWrapper";
        var func234 = function(argcv) {    // method createClearButton(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_myStage = arguments[curarg];
          curarg++;
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(202);    // compilenode call
             // start native code from line 202
          var result = GraceDone;
          
              var stage = this.data.mystage;
              var container = new createjs.Container();
              var text = new createjs.Text("clear", "12px Arial", "black");
              text.x = 5;
              text.y = 3;
              container.x = stage.canvas.width - 35;
              var rect = new createjs.Shape();
              rect.graphics.beginFill("lightgrey").drawRect(0, 0, 35, 20);
              container.addChild(rect);
              container.addChild(text);
              container.addEventListener("click", function(event) {
                  stage.removeAllEventListeners();
                  stage.removeAllChildren();
                  stage.enableDOMEvents(false);
                  stage.update();
                  callmethod(var_myStage, "clearTimeout", [0]);
                  createjs.Ticker.removeAllEventListeners();
        });
        stage.addChild(container);
        stage.update();
        
          var nat235 = result;
             // end native code insertion
          return nat235;
        };
        func234.paramCounts = [1];
        obj228.methods["createClearButton(1)"] = func234;
        func234.definitionLine = 201;
        func234.definitionModule = "createJsGraphicsWrapper";
        var func236 = function(argcv) {    // method mouseLocation
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(227);    // compilenode member
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call239 = callmethodChecked(this, "stageListener", []);
          var call240 = callmethodChecked(call239, "mouseLocation", []);
          return call240;
        };
        func236.paramCounts = [0];
        obj228.methods["mouseLocation"] = func236;
        func236.definitionLine = 226;
        func236.definitionModule = "createJsGraphicsWrapper";
        var func241 = function(argcv) {    // method add(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_shape = arguments[curarg];
          curarg++;
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(231);    // compilenode member
          // call case 6: other requests
          var call244 = callmethodChecked(var_shape, "createJsGraphics", []);
          // call case 4: self request
          onSelf = true;
          var call245 = callmethodChecked(this, "createJsGraphics:=(1)", [1], call244);
          setLineNumber(232);    // compilenode call
             // start native code from line 232
          var result = GraceDone;
          
              this.data.mystage.addChild(this.data.createJsGraphics);
        
          var nat246 = result;
             // end native code insertion
          return nat246;
        };
        func241.paramCounts = [1];
        obj228.methods["add(1)"] = func241;
        func241.definitionLine = 230;
        func241.definitionModule = "createJsGraphicsWrapper";
        var func247 = function(argcv) {    // method removeChild(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_shape = arguments[curarg];
          curarg++;
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(237);    // compilenode member
          // call case 6: other requests
          var call250 = callmethodChecked(var_shape, "createJsGraphics", []);
          // call case 4: self request
          onSelf = true;
          var call251 = callmethodChecked(this, "createJsGraphics:=(1)", [1], call250);
          setLineNumber(238);    // compilenode call
             // start native code from line 238
          var result = GraceDone;
          
              this.data.mystage.removeChild(this.data.createJsGraphics);
        
          var nat252 = result;
             // end native code insertion
          return nat252;
        };
        func247.paramCounts = [1];
        obj228.methods["removeChild(1)"] = func247;
        func247.definitionLine = 236;
        func247.definitionModule = "createJsGraphicsWrapper";
        var func253 = function(argcv) {    // method removeAllEventListeners
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(242);    // compilenode call
             // start native code from line 242
          var result = GraceDone;
           this.data.mystage.removeAllEventListeners(); 
          var nat254 = result;
             // end native code insertion
          return nat254;
        };
        func253.paramCounts = [0];
        obj228.methods["removeAllEventListeners"] = func253;
        func253.definitionLine = 242;
        func253.definitionModule = "createJsGraphicsWrapper";
        var func255 = function(argcv) {    // method update
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(244);    // compilenode call
             // start native code from line 244
          var result = GraceDone;
          
              this.data.mystage.update();
        
          var nat256 = result;
             // end native code insertion
          return nat256;
        };
        func255.paramCounts = [0];
        obj228.methods["update"] = func255;
        func255.definitionLine = 243;
        func255.definitionModule = "createJsGraphicsWrapper";
        var func257 = function(argcv) {    // method removeAllChildren
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(250);    // compilenode call
             // start native code from line 250
          var result = GraceDone;
          
              this.data.mystage.removeAllChildren();
        
          var nat258 = result;
             // end native code insertion
          return nat258;
        };
        func257.paramCounts = [0];
        obj228.methods["removeAllChildren"] = func257;
        func257.definitionLine = 249;
        func257.definitionModule = "createJsGraphicsWrapper";
        var func259 = function(argcv) {    // method addStageDownListener(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_block = arguments[curarg];
          curarg++;
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(256);    // compilenode identifier
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call262 = callmethodChecked(this, "stageListener", []);
          var call263 = callmethodChecked(call262, "onMouseDown:=(1)", [1], var_block);
          setLineNumber(257);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call266 = callmethodChecked(this, "mystage", []);
          // call case 4: self request
          onSelf = true;
          var call268 = callmethodChecked(this, "stageListener", []);
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call270 = callmethodChecked(this, "stageListener", []);
          var call271 = callmethodChecked(call270, "addStageDownListener(2)", [2], call266, call268);
          return call271;
        };
        func259.paramCounts = [1];
        obj228.methods["addStageDownListener(1)"] = func259;
        func259.definitionLine = 255;
        func259.definitionModule = "createJsGraphicsWrapper";
        var func272 = function(argcv) {    // method addStageUpListener(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_block = arguments[curarg];
          curarg++;
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(261);    // compilenode identifier
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call275 = callmethodChecked(this, "stageListener", []);
          var call276 = callmethodChecked(call275, "onMouseUp:=(1)", [1], var_block);
          setLineNumber(262);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call279 = callmethodChecked(this, "mystage", []);
          // call case 4: self request
          onSelf = true;
          var call281 = callmethodChecked(this, "stageListener", []);
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call283 = callmethodChecked(this, "stageListener", []);
          var call284 = callmethodChecked(call283, "addStageUpListener(2)", [2], call279, call281);
          return call284;
        };
        func272.paramCounts = [1];
        obj228.methods["addStageUpListener(1)"] = func272;
        func272.definitionLine = 260;
        func272.definitionModule = "createJsGraphicsWrapper";
        var func285 = function(argcv) {    // method addMouseExitListener(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_block = arguments[curarg];
          curarg++;
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(266);    // compilenode identifier
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call288 = callmethodChecked(this, "stageListener", []);
          var call289 = callmethodChecked(call288, "onMouseExit:=(1)", [1], var_block);
          setLineNumber(267);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call292 = callmethodChecked(this, "mystage", []);
          // call case 4: self request
          onSelf = true;
          var call294 = callmethodChecked(this, "stageListener", []);
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call296 = callmethodChecked(this, "stageListener", []);
          var call297 = callmethodChecked(call296, "addMouseExitListener(2)", [2], call292, call294);
          return call297;
        };
        func285.paramCounts = [1];
        obj228.methods["addMouseExitListener(1)"] = func285;
        func285.definitionLine = 265;
        func285.definitionModule = "createJsGraphicsWrapper";
        var func298 = function(argcv) {    // method addStageMouseMoveListener(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_block = arguments[curarg];
          curarg++;
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(271);    // compilenode identifier
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call301 = callmethodChecked(this, "stageListener", []);
          var call302 = callmethodChecked(call301, "onMouseOver:=(1)", [1], var_block);
          setLineNumber(272);    // compilenode member
          // call case 4: self request
          onSelf = true;
          var call305 = callmethodChecked(this, "mystage", []);
          // call case 4: self request
          onSelf = true;
          var call307 = callmethodChecked(this, "stageListener", []);
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call309 = callmethodChecked(this, "stageListener", []);
          var call310 = callmethodChecked(call309, "addStageMouseMoveListener(2)", [2], call305, call307);
          return call310;
        };
        func298.paramCounts = [1];
        obj228.methods["addStageMouseMoveListener(1)"] = func298;
        func298.definitionLine = 270;
        func298.definitionModule = "createJsGraphicsWrapper";
        var func311 = function(argcv) {    // method enableMouseOver(_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_frequency = arguments[curarg];
          curarg++;
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(276);    // compilenode call
             // start native code from line 276
          var result = GraceDone;
          
              var freq = var_frequency._value
              this.data.mystage.enableMouseOver(freq);
        
          var nat312 = result;
             // end native code insertion
          return nat312;
        };
        func311.paramCounts = [1];
        obj228.methods["enableMouseOver(1)"] = func311;
        func311.definitionLine = 275;
        func311.definitionModule = "createJsGraphicsWrapper";
        var func313 = function(argcv) {    // method timedEvent
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(283);    // compilenode member
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call316 = callmethodChecked(this, "timedEventBlock", []);
          var call317 = callmethodChecked(call316, "apply", []);
          return call317;
        };
        func313.paramCounts = [0];
        obj228.methods["timedEvent"] = func313;
        func313.definitionLine = 282;
        func313.definitionModule = "createJsGraphicsWrapper";
        var func318 = function(argcv) {    // method tickEvent
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(287);    // compilenode member
          // call case 6: other requests
          // call case 4: self request
          onSelf = true;
          var call321 = callmethodChecked(this, "tickerBlock", []);
          var call322 = callmethodChecked(call321, "apply", []);
          return call322;
        };
        func318.paramCounts = [0];
        obj228.methods["tickEvent"] = func318;
        func318.definitionLine = 286;
        func318.definitionModule = "createJsGraphicsWrapper";
        var func323 = function(argcv) {    // method setTimeout(_,_,_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_block = arguments[curarg];
          curarg++;
          var var_time = arguments[curarg];
          curarg++;
          var var_myStage = arguments[curarg];
          curarg++;
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(291);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call325 = callmethodChecked(this, "timedEventBlock:=(1)", [1], var_block);
          setLineNumber(292);    // compilenode call
             // start native code from line 292
          var result = GraceDone;
          var t = setTimeout(function() {
            callmethod(var_myStage, "timedEvent", [0]);
        }, var_time._value);
        this.data.jsTimeout = t;
          var nat326 = result;
             // end native code insertion
          return nat326;
        };
        func323.paramCounts = [3];
        obj228.methods["setTimeout(3)"] = func323;
        func323.definitionLine = 290;
        func323.definitionModule = "createJsGraphicsWrapper";
        var func327 = function(argcv) {    // method clearTimeout
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(299);    // compilenode call
             // start native code from line 299
          var result = GraceDone;
          
              var timeout = this.data.jsTimeout
              clearTimeout(timeout);
        
          var nat328 = result;
             // end native code insertion
          return nat328;
        };
        func327.paramCounts = [0];
        obj228.methods["clearTimeout"] = func327;
        func327.definitionLine = 298;
        func327.definitionModule = "createJsGraphicsWrapper";
        var func329 = function(argcv) {    // method setTicker(_,_,_)
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          var var_block = arguments[curarg];
          curarg++;
          var var_fps = arguments[curarg];
          curarg++;
          var var_myStage = arguments[curarg];
          curarg++;
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(306);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call331 = callmethodChecked(this, "tickerBlock:=(1)", [1], var_block);
          setLineNumber(307);    // compilenode call
             // start native code from line 307
          var result = GraceDone;
          
              createjs.Ticker.on("tick", function(event) {
                  callmethod(var_myStage, "tickEvent", [0]);
        });
        createjs.Ticker.setFPS(var_fps._value);
              
          var nat332 = result;
             // end native code insertion
          return nat332;
        };
        func329.paramCounts = [3];
        obj228.methods["setTicker(3)"] = func329;
        func329.definitionLine = 305;
        func329.definitionModule = "createJsGraphicsWrapper";
        var func333 = function(argcv) {    // method clearTicker
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("createJsGraphicsWrapper");
          setLineNumber(316);    // compilenode call
             // start native code from line 316
          var result = GraceDone;
          
              createjs.Ticker.removeAllEventListeners();
        
          var nat334 = result;
             // end native code insertion
          return nat334;
        };
        func333.paramCounts = [0];
        obj228.methods["clearTicker"] = func333;
        func333.definitionLine = 315;
        func333.definitionModule = "createJsGraphicsWrapper";
        setLineNumber(172);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call336 = callmethodChecked(this, "new(2)", [2], var_width__39__, var_height__39__);
        obj228.data["mystage"] = call336;
        var reader_createJsGraphicsWrapper_mystage337 = function() {
          return this.data["mystage"];
        };
        obj228.methods["mystage"] = reader_createJsGraphicsWrapper_mystage337;
        obj228.data["mystage"] = call336;
        var writer_createJsGraphicsWrapper_mystage337 = function(argcv, o) {
          this.data["mystage"] = o;
          return GraceDone;
        };
        obj228.methods["mystage:=(1)"] = writer_createJsGraphicsWrapper_mystage337;
        reader_createJsGraphicsWrapper_mystage337.confidential = true;
        writer_createJsGraphicsWrapper_mystage337.confidential = true;
        obj228.mutable = true;
        setLineNumber(173);    // compilenode identifier
        // call case 4: self request
        onSelf = true;
        var call339 = callmethodChecked(this, "createClearButton(1)", [1], this);
        obj228.data["createJsGraphics"] = undefined;
        var reader_createJsGraphicsWrapper_createJsGraphics340 = function() {
          return this.data["createJsGraphics"];
        };
        obj228.methods["createJsGraphics"] = reader_createJsGraphicsWrapper_createJsGraphics340;
        obj228.data["createJsGraphics"] = undefined;
        var writer_createJsGraphicsWrapper_createJsGraphics340 = function(argcv, o) {
          this.data["createJsGraphics"] = o;
          return GraceDone;
        };
        obj228.methods["createJsGraphics:=(1)"] = writer_createJsGraphicsWrapper_createJsGraphics340;
        reader_createJsGraphicsWrapper_createJsGraphics340.confidential = true;
        writer_createJsGraphicsWrapper_createJsGraphics340.confidential = true;
        obj228.mutable = true;
        setLineNumber(175);    // compilenode member
        // call case 6: other requests
        // call case 3: self.outer request
        var call343 = callmethodChecked(superDepth, "outer", [0]);
        onSelf = true;
        var call344 = callmethodChecked(call343, "eventListener", []);
        obj228.data["stageListener"] = call344;
        var reader_createJsGraphicsWrapper_stageListener345 = function() {
          return this.data["stageListener"];
        };
        obj228.methods["stageListener"] = reader_createJsGraphicsWrapper_stageListener345;
        obj228.data["stageListener"] = call344;
        var writer_createJsGraphicsWrapper_stageListener345 = function(argcv, o) {
          this.data["stageListener"] = o;
          return GraceDone;
        };
        obj228.methods["stageListener:=(1)"] = writer_createJsGraphicsWrapper_stageListener345;
        reader_createJsGraphicsWrapper_stageListener345.confidential = true;
        writer_createJsGraphicsWrapper_stageListener345.confidential = true;
        obj228.mutable = true;
        setLineNumber(176);    // compilenode block
        var block346 = new GraceBlock(this, 176, 0);
        block346.real = function() {
          return GraceDone;
        };
        obj228.data["timedEventBlock"] = block346;
        var reader_createJsGraphicsWrapper_timedEventBlock347 = function() {
          return this.data["timedEventBlock"];
        };
        obj228.methods["timedEventBlock"] = reader_createJsGraphicsWrapper_timedEventBlock347;
        obj228.data["timedEventBlock"] = block346;
        var writer_createJsGraphicsWrapper_timedEventBlock347 = function(argcv, o) {
          this.data["timedEventBlock"] = o;
          return GraceDone;
        };
        obj228.methods["timedEventBlock:=(1)"] = writer_createJsGraphicsWrapper_timedEventBlock347;
        reader_createJsGraphicsWrapper_timedEventBlock347.confidential = true;
        writer_createJsGraphicsWrapper_timedEventBlock347.confidential = true;
        obj228.mutable = true;
        obj228.data["jsTimeout"] = undefined;
        var reader_createJsGraphicsWrapper_jsTimeout348 = function() {
          return this.data["jsTimeout"];
        };
        obj228.methods["jsTimeout"] = reader_createJsGraphicsWrapper_jsTimeout348;
        obj228.data["jsTimeout"] = undefined;
        var writer_createJsGraphicsWrapper_jsTimeout348 = function(argcv, o) {
          this.data["jsTimeout"] = o;
          return GraceDone;
        };
        obj228.methods["jsTimeout:=(1)"] = writer_createJsGraphicsWrapper_jsTimeout348;
        reader_createJsGraphicsWrapper_jsTimeout348.confidential = true;
        writer_createJsGraphicsWrapper_jsTimeout348.confidential = true;
        obj228.mutable = true;
        setLineNumber(178);    // compilenode block
        var block349 = new GraceBlock(this, 178, 0);
        block349.real = function() {
          return GraceDone;
        };
        obj228.data["tickerBlock"] = block349;
        var reader_createJsGraphicsWrapper_tickerBlock350 = function() {
          return this.data["tickerBlock"];
        };
        obj228.methods["tickerBlock"] = reader_createJsGraphicsWrapper_tickerBlock350;
        obj228.data["tickerBlock"] = block349;
        var writer_createJsGraphicsWrapper_tickerBlock350 = function(argcv, o) {
          this.data["tickerBlock"] = o;
          return GraceDone;
        };
        obj228.methods["tickerBlock:=(1)"] = writer_createJsGraphicsWrapper_tickerBlock350;
        reader_createJsGraphicsWrapper_tickerBlock350.confidential = true;
        writer_createJsGraphicsWrapper_tickerBlock350.confidential = true;
        obj228.mutable = true;
        superDepth = origSuperDepth;
      };
      obj_init_228.apply(obj228, []);
      return obj228;
    };
    func227.paramCounts = [2];
    this.methods["stage(2)"] = func227;
    func227.definitionLine = 171;
    func227.definitionModule = "createJsGraphicsWrapper";
      var func351 = function(argcv) {    // method stage(_,_)$object(_)
        var curarg = 1;
        var var_width__39__ = arguments[curarg];
        curarg++;
        var var_height__39__ = arguments[curarg];
        curarg++;
        var inheritingObject = arguments[curarg++];
        // Start argument processing
        curarg = 1;
        curarg++;
        curarg++;
        // End argument processing
        setModuleName("createJsGraphicsWrapper");
        var returnTarget = invocationCount;
        invocationCount++;
        var obj352 = Grace_allocObject(GraceObject, "stage(2)");
        obj352.definitionModule = "createJsGraphicsWrapper";
        obj352.definitionLine = 171;
        var inho352 = inheritingObject;
        while (inho352.superobj) inho352 = inho352.superobj;
        inho352.superobj = obj352;
        obj352.data = inheritingObject.data;
        if (inheritingObject.hasOwnProperty('_value'))
          obj352._value = inheritingObject._value;
        obj352.outer = this;
        var reader_createJsGraphicsWrapper_outer353 = function() {
          return this.outer;
        };
        obj352.methods["outer"] = reader_createJsGraphicsWrapper_outer353;
        var obj_init_352 = function() {
          var origSuperDepth = superDepth;
          superDepth = obj352;
          var func354 = function(argcv) {    // method new(_,_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_width = arguments[curarg];
            curarg++;
            var var_height = arguments[curarg];
            curarg++;
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(181);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call356 = callmethodChecked(this, "clearTimeout", []);
            setLineNumber(182);    // compilenode call
               // start native code from line 182
            var result = GraceDone;
            
              var width = var_width._value;
              var height = var_height._value;
              var size = "height=" + height.toString() + ",width=" + width.toString()
              var canvas = document.getElementById("graphics");
              var ctx = canvas.getContext("2d");
              ctx.setTransform(1, 0, 0, 1, 0, 0);
              ctx.clearRect(0, 0, canvas.width, canvas,height);
              var stage = new createjs.Stage(canvas);
              createjs.Ticker.removeAllEventListeners();
              stage.enableDOMEvents(true);
              canvas.setAttribute('tabindex','0');
              canvas.focus();
              canvas = stage.canvas;
              this.stage = stage
              return stage;
        
            var nat357 = result;
               // end native code insertion
            return nat357;
          };
          func354.paramCounts = [2];
          obj352.methods["new(2)"] = func354;
          func354.definitionLine = 180;
          func354.definitionModule = "createJsGraphicsWrapper";
          var func358 = function(argcv) {    // method createClearButton(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_myStage = arguments[curarg];
            curarg++;
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(202);    // compilenode call
               // start native code from line 202
            var result = GraceDone;
            
              var stage = this.data.mystage;
              var container = new createjs.Container();
              var text = new createjs.Text("clear", "12px Arial", "black");
              text.x = 5;
              text.y = 3;
              container.x = stage.canvas.width - 35;
              var rect = new createjs.Shape();
              rect.graphics.beginFill("lightgrey").drawRect(0, 0, 35, 20);
              container.addChild(rect);
              container.addChild(text);
              container.addEventListener("click", function(event) {
                  stage.removeAllEventListeners();
                  stage.removeAllChildren();
                  stage.enableDOMEvents(false);
                  stage.update();
                  callmethod(var_myStage, "clearTimeout", [0]);
                  createjs.Ticker.removeAllEventListeners();
        });
        stage.addChild(container);
        stage.update();
        
            var nat359 = result;
               // end native code insertion
            return nat359;
          };
          func358.paramCounts = [1];
          obj352.methods["createClearButton(1)"] = func358;
          func358.definitionLine = 201;
          func358.definitionModule = "createJsGraphicsWrapper";
          var func360 = function(argcv) {    // method mouseLocation
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(227);    // compilenode member
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call363 = callmethodChecked(this, "stageListener", []);
            var call364 = callmethodChecked(call363, "mouseLocation", []);
            return call364;
          };
          func360.paramCounts = [0];
          obj352.methods["mouseLocation"] = func360;
          func360.definitionLine = 226;
          func360.definitionModule = "createJsGraphicsWrapper";
          var func365 = function(argcv) {    // method add(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_shape = arguments[curarg];
            curarg++;
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(231);    // compilenode member
            // call case 6: other requests
            var call368 = callmethodChecked(var_shape, "createJsGraphics", []);
            // call case 4: self request
            onSelf = true;
            var call369 = callmethodChecked(this, "createJsGraphics:=(1)", [1], call368);
            setLineNumber(232);    // compilenode call
               // start native code from line 232
            var result = GraceDone;
            
              this.data.mystage.addChild(this.data.createJsGraphics);
        
            var nat370 = result;
               // end native code insertion
            return nat370;
          };
          func365.paramCounts = [1];
          obj352.methods["add(1)"] = func365;
          func365.definitionLine = 230;
          func365.definitionModule = "createJsGraphicsWrapper";
          var func371 = function(argcv) {    // method removeChild(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_shape = arguments[curarg];
            curarg++;
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(237);    // compilenode member
            // call case 6: other requests
            var call374 = callmethodChecked(var_shape, "createJsGraphics", []);
            // call case 4: self request
            onSelf = true;
            var call375 = callmethodChecked(this, "createJsGraphics:=(1)", [1], call374);
            setLineNumber(238);    // compilenode call
               // start native code from line 238
            var result = GraceDone;
            
              this.data.mystage.removeChild(this.data.createJsGraphics);
        
            var nat376 = result;
               // end native code insertion
            return nat376;
          };
          func371.paramCounts = [1];
          obj352.methods["removeChild(1)"] = func371;
          func371.definitionLine = 236;
          func371.definitionModule = "createJsGraphicsWrapper";
          var func377 = function(argcv) {    // method removeAllEventListeners
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(242);    // compilenode call
               // start native code from line 242
            var result = GraceDone;
             this.data.mystage.removeAllEventListeners(); 
            var nat378 = result;
               // end native code insertion
            return nat378;
          };
          func377.paramCounts = [0];
          obj352.methods["removeAllEventListeners"] = func377;
          func377.definitionLine = 242;
          func377.definitionModule = "createJsGraphicsWrapper";
          var func379 = function(argcv) {    // method update
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(244);    // compilenode call
               // start native code from line 244
            var result = GraceDone;
            
              this.data.mystage.update();
        
            var nat380 = result;
               // end native code insertion
            return nat380;
          };
          func379.paramCounts = [0];
          obj352.methods["update"] = func379;
          func379.definitionLine = 243;
          func379.definitionModule = "createJsGraphicsWrapper";
          var func381 = function(argcv) {    // method removeAllChildren
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(250);    // compilenode call
               // start native code from line 250
            var result = GraceDone;
            
              this.data.mystage.removeAllChildren();
        
            var nat382 = result;
               // end native code insertion
            return nat382;
          };
          func381.paramCounts = [0];
          obj352.methods["removeAllChildren"] = func381;
          func381.definitionLine = 249;
          func381.definitionModule = "createJsGraphicsWrapper";
          var func383 = function(argcv) {    // method addStageDownListener(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_block = arguments[curarg];
            curarg++;
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(256);    // compilenode identifier
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call386 = callmethodChecked(this, "stageListener", []);
            var call387 = callmethodChecked(call386, "onMouseDown:=(1)", [1], var_block);
            setLineNumber(257);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call390 = callmethodChecked(this, "mystage", []);
            // call case 4: self request
            onSelf = true;
            var call392 = callmethodChecked(this, "stageListener", []);
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call394 = callmethodChecked(this, "stageListener", []);
            var call395 = callmethodChecked(call394, "addStageDownListener(2)", [2], call390, call392);
            return call395;
          };
          func383.paramCounts = [1];
          obj352.methods["addStageDownListener(1)"] = func383;
          func383.definitionLine = 255;
          func383.definitionModule = "createJsGraphicsWrapper";
          var func396 = function(argcv) {    // method addStageUpListener(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_block = arguments[curarg];
            curarg++;
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(261);    // compilenode identifier
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call399 = callmethodChecked(this, "stageListener", []);
            var call400 = callmethodChecked(call399, "onMouseUp:=(1)", [1], var_block);
            setLineNumber(262);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call403 = callmethodChecked(this, "mystage", []);
            // call case 4: self request
            onSelf = true;
            var call405 = callmethodChecked(this, "stageListener", []);
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call407 = callmethodChecked(this, "stageListener", []);
            var call408 = callmethodChecked(call407, "addStageUpListener(2)", [2], call403, call405);
            return call408;
          };
          func396.paramCounts = [1];
          obj352.methods["addStageUpListener(1)"] = func396;
          func396.definitionLine = 260;
          func396.definitionModule = "createJsGraphicsWrapper";
          var func409 = function(argcv) {    // method addMouseExitListener(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_block = arguments[curarg];
            curarg++;
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(266);    // compilenode identifier
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call412 = callmethodChecked(this, "stageListener", []);
            var call413 = callmethodChecked(call412, "onMouseExit:=(1)", [1], var_block);
            setLineNumber(267);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call416 = callmethodChecked(this, "mystage", []);
            // call case 4: self request
            onSelf = true;
            var call418 = callmethodChecked(this, "stageListener", []);
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call420 = callmethodChecked(this, "stageListener", []);
            var call421 = callmethodChecked(call420, "addMouseExitListener(2)", [2], call416, call418);
            return call421;
          };
          func409.paramCounts = [1];
          obj352.methods["addMouseExitListener(1)"] = func409;
          func409.definitionLine = 265;
          func409.definitionModule = "createJsGraphicsWrapper";
          var func422 = function(argcv) {    // method addStageMouseMoveListener(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_block = arguments[curarg];
            curarg++;
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(271);    // compilenode identifier
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call425 = callmethodChecked(this, "stageListener", []);
            var call426 = callmethodChecked(call425, "onMouseOver:=(1)", [1], var_block);
            setLineNumber(272);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call429 = callmethodChecked(this, "mystage", []);
            // call case 4: self request
            onSelf = true;
            var call431 = callmethodChecked(this, "stageListener", []);
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call433 = callmethodChecked(this, "stageListener", []);
            var call434 = callmethodChecked(call433, "addStageMouseMoveListener(2)", [2], call429, call431);
            return call434;
          };
          func422.paramCounts = [1];
          obj352.methods["addStageMouseMoveListener(1)"] = func422;
          func422.definitionLine = 270;
          func422.definitionModule = "createJsGraphicsWrapper";
          var func435 = function(argcv) {    // method enableMouseOver(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_frequency = arguments[curarg];
            curarg++;
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(276);    // compilenode call
               // start native code from line 276
            var result = GraceDone;
            
              var freq = var_frequency._value
              this.data.mystage.enableMouseOver(freq);
        
            var nat436 = result;
               // end native code insertion
            return nat436;
          };
          func435.paramCounts = [1];
          obj352.methods["enableMouseOver(1)"] = func435;
          func435.definitionLine = 275;
          func435.definitionModule = "createJsGraphicsWrapper";
          var func437 = function(argcv) {    // method timedEvent
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(283);    // compilenode member
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call440 = callmethodChecked(this, "timedEventBlock", []);
            var call441 = callmethodChecked(call440, "apply", []);
            return call441;
          };
          func437.paramCounts = [0];
          obj352.methods["timedEvent"] = func437;
          func437.definitionLine = 282;
          func437.definitionModule = "createJsGraphicsWrapper";
          var func442 = function(argcv) {    // method tickEvent
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(287);    // compilenode member
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call445 = callmethodChecked(this, "tickerBlock", []);
            var call446 = callmethodChecked(call445, "apply", []);
            return call446;
          };
          func442.paramCounts = [0];
          obj352.methods["tickEvent"] = func442;
          func442.definitionLine = 286;
          func442.definitionModule = "createJsGraphicsWrapper";
          var func447 = function(argcv) {    // method setTimeout(_,_,_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_block = arguments[curarg];
            curarg++;
            var var_time = arguments[curarg];
            curarg++;
            var var_myStage = arguments[curarg];
            curarg++;
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(291);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call449 = callmethodChecked(this, "timedEventBlock:=(1)", [1], var_block);
            setLineNumber(292);    // compilenode call
               // start native code from line 292
            var result = GraceDone;
            var t = setTimeout(function() {
            callmethod(var_myStage, "timedEvent", [0]);
        }, var_time._value);
        this.data.jsTimeout = t;
            var nat450 = result;
               // end native code insertion
            return nat450;
          };
          func447.paramCounts = [3];
          obj352.methods["setTimeout(3)"] = func447;
          func447.definitionLine = 290;
          func447.definitionModule = "createJsGraphicsWrapper";
          var func451 = function(argcv) {    // method clearTimeout
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(299);    // compilenode call
               // start native code from line 299
            var result = GraceDone;
            
              var timeout = this.data.jsTimeout
              clearTimeout(timeout);
        
            var nat452 = result;
               // end native code insertion
            return nat452;
          };
          func451.paramCounts = [0];
          obj352.methods["clearTimeout"] = func451;
          func451.definitionLine = 298;
          func451.definitionModule = "createJsGraphicsWrapper";
          var func453 = function(argcv) {    // method setTicker(_,_,_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_block = arguments[curarg];
            curarg++;
            var var_fps = arguments[curarg];
            curarg++;
            var var_myStage = arguments[curarg];
            curarg++;
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(306);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call455 = callmethodChecked(this, "tickerBlock:=(1)", [1], var_block);
            setLineNumber(307);    // compilenode call
               // start native code from line 307
            var result = GraceDone;
            
              createjs.Ticker.on("tick", function(event) {
                  callmethod(var_myStage, "tickEvent", [0]);
        });
        createjs.Ticker.setFPS(var_fps._value);
              
            var nat456 = result;
               // end native code insertion
            return nat456;
          };
          func453.paramCounts = [3];
          obj352.methods["setTicker(3)"] = func453;
          func453.definitionLine = 305;
          func453.definitionModule = "createJsGraphicsWrapper";
          var func457 = function(argcv) {    // method clearTicker
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(316);    // compilenode call
               // start native code from line 316
            var result = GraceDone;
            
              createjs.Ticker.removeAllEventListeners();
        
            var nat458 = result;
               // end native code insertion
            return nat458;
          };
          func457.paramCounts = [0];
          obj352.methods["clearTicker"] = func457;
          func457.definitionLine = 315;
          func457.definitionModule = "createJsGraphicsWrapper";
          setLineNumber(172);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call460 = callmethodChecked(this, "new(2)", [2], var_width__39__, var_height__39__);
          obj352.data["mystage"] = call460;
          var reader_createJsGraphicsWrapper_mystage461 = function() {
            return this.data["mystage"];
          };
          obj352.methods["mystage"] = reader_createJsGraphicsWrapper_mystage461;
          obj352.data["mystage"] = call460;
          var writer_createJsGraphicsWrapper_mystage461 = function(argcv, o) {
            this.data["mystage"] = o;
            return GraceDone;
          };
          obj352.methods["mystage:=(1)"] = writer_createJsGraphicsWrapper_mystage461;
          reader_createJsGraphicsWrapper_mystage461.confidential = true;
          writer_createJsGraphicsWrapper_mystage461.confidential = true;
          obj352.mutable = true;
          setLineNumber(173);    // compilenode identifier
          // call case 4: self request
          onSelf = true;
          var call463 = callmethodChecked(this, "createClearButton(1)", [1], this);
          obj352.data["createJsGraphics"] = undefined;
          var reader_createJsGraphicsWrapper_createJsGraphics464 = function() {
            return this.data["createJsGraphics"];
          };
          obj352.methods["createJsGraphics"] = reader_createJsGraphicsWrapper_createJsGraphics464;
          obj352.data["createJsGraphics"] = undefined;
          var writer_createJsGraphicsWrapper_createJsGraphics464 = function(argcv, o) {
            this.data["createJsGraphics"] = o;
            return GraceDone;
          };
          obj352.methods["createJsGraphics:=(1)"] = writer_createJsGraphicsWrapper_createJsGraphics464;
          reader_createJsGraphicsWrapper_createJsGraphics464.confidential = true;
          writer_createJsGraphicsWrapper_createJsGraphics464.confidential = true;
          obj352.mutable = true;
          setLineNumber(175);    // compilenode member
          // call case 6: other requests
          // call case 3: self.outer request
          var call467 = callmethodChecked(superDepth, "outer", [0]);
          onSelf = true;
          var call468 = callmethodChecked(call467, "eventListener", []);
          obj352.data["stageListener"] = call468;
          var reader_createJsGraphicsWrapper_stageListener469 = function() {
            return this.data["stageListener"];
          };
          obj352.methods["stageListener"] = reader_createJsGraphicsWrapper_stageListener469;
          obj352.data["stageListener"] = call468;
          var writer_createJsGraphicsWrapper_stageListener469 = function(argcv, o) {
            this.data["stageListener"] = o;
            return GraceDone;
          };
          obj352.methods["stageListener:=(1)"] = writer_createJsGraphicsWrapper_stageListener469;
          reader_createJsGraphicsWrapper_stageListener469.confidential = true;
          writer_createJsGraphicsWrapper_stageListener469.confidential = true;
          obj352.mutable = true;
          setLineNumber(176);    // compilenode block
          var block470 = new GraceBlock(this, 176, 0);
          block470.real = function() {
            return GraceDone;
          };
          obj352.data["timedEventBlock"] = block470;
          var reader_createJsGraphicsWrapper_timedEventBlock471 = function() {
            return this.data["timedEventBlock"];
          };
          obj352.methods["timedEventBlock"] = reader_createJsGraphicsWrapper_timedEventBlock471;
          obj352.data["timedEventBlock"] = block470;
          var writer_createJsGraphicsWrapper_timedEventBlock471 = function(argcv, o) {
            this.data["timedEventBlock"] = o;
            return GraceDone;
          };
          obj352.methods["timedEventBlock:=(1)"] = writer_createJsGraphicsWrapper_timedEventBlock471;
          reader_createJsGraphicsWrapper_timedEventBlock471.confidential = true;
          writer_createJsGraphicsWrapper_timedEventBlock471.confidential = true;
          obj352.mutable = true;
          obj352.data["jsTimeout"] = undefined;
          var reader_createJsGraphicsWrapper_jsTimeout472 = function() {
            return this.data["jsTimeout"];
          };
          obj352.methods["jsTimeout"] = reader_createJsGraphicsWrapper_jsTimeout472;
          obj352.data["jsTimeout"] = undefined;
          var writer_createJsGraphicsWrapper_jsTimeout472 = function(argcv, o) {
            this.data["jsTimeout"] = o;
            return GraceDone;
          };
          obj352.methods["jsTimeout:=(1)"] = writer_createJsGraphicsWrapper_jsTimeout472;
          reader_createJsGraphicsWrapper_jsTimeout472.confidential = true;
          writer_createJsGraphicsWrapper_jsTimeout472.confidential = true;
          obj352.mutable = true;
          setLineNumber(178);    // compilenode block
          var block473 = new GraceBlock(this, 178, 0);
          block473.real = function() {
            return GraceDone;
          };
          obj352.data["tickerBlock"] = block473;
          var reader_createJsGraphicsWrapper_tickerBlock474 = function() {
            return this.data["tickerBlock"];
          };
          obj352.methods["tickerBlock"] = reader_createJsGraphicsWrapper_tickerBlock474;
          obj352.data["tickerBlock"] = block473;
          var writer_createJsGraphicsWrapper_tickerBlock474 = function(argcv, o) {
            this.data["tickerBlock"] = o;
            return GraceDone;
          };
          obj352.methods["tickerBlock:=(1)"] = writer_createJsGraphicsWrapper_tickerBlock474;
          reader_createJsGraphicsWrapper_tickerBlock474.confidential = true;
          writer_createJsGraphicsWrapper_tickerBlock474.confidential = true;
          obj352.mutable = true;
          superDepth = origSuperDepth;
        };
        obj_init_352.apply(inheritingObject, []);
        return obj352;
        };
        this.methods["stage(2)$object(1)"] = func351;
      setLineNumber(322);    // compilenode method
      var func475 = function(argcv) {    // method commonGraphics
        var returnTarget = invocationCount;
        invocationCount++;
        var curarg = 1;
        setModuleName("createJsGraphicsWrapper");
        var obj476 = Grace_allocObject(GraceObject, "commonGraphics");
        obj476.definitionModule = "createJsGraphicsWrapper";
        obj476.definitionLine = 322;
        obj476.outer = this;
        var reader_createJsGraphicsWrapper_outer477 = function() {
          return this.outer;
        };
        obj476.methods["outer"] = reader_createJsGraphicsWrapper_outer477;
        var obj_init_476 = function() {
          var origSuperDepth = superDepth;
          superDepth = obj476;
          var func478 = function(argcv) {    // method mouseLocation
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(329);    // compilenode member
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call481 = callmethodChecked(this, "listener", []);
            var call482 = callmethodChecked(call481, "mouseLocation", []);
            return call482;
          };
          func478.paramCounts = [0];
          obj476.methods["mouseLocation"] = func478;
          func478.definitionLine = 328;
          func478.definitionModule = "createJsGraphicsWrapper";
          var func483 = function(argcv) {    // method addMouseUpListener(_,_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_graphicsTypeObject = arguments[curarg];
            curarg++;
            var var_block = arguments[curarg];
            curarg++;
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(333);    // compilenode identifier
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call486 = callmethodChecked(this, "listener", []);
            var call487 = callmethodChecked(call486, "onMouseUp:=(1)", [1], var_block);
            setLineNumber(334);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call490 = callmethodChecked(this, "createJsGraphics", []);
            // call case 4: self request
            onSelf = true;
            var call492 = callmethodChecked(this, "listener", []);
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call494 = callmethodChecked(this, "listener", []);
            var call495 = callmethodChecked(call494, "addMouseUpListener(2)", [2], call490, call492);
            return call495;
          };
          func483.paramCounts = [2];
          obj476.methods["addMouseUpListener(2)"] = func483;
          func483.definitionLine = 332;
          func483.definitionModule = "createJsGraphicsWrapper";
          var func496 = function(argcv) {    // method addMouseDownListener(_,_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_graphicsTypeObject = arguments[curarg];
            curarg++;
            var var_block = arguments[curarg];
            curarg++;
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(338);    // compilenode identifier
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call499 = callmethodChecked(this, "listener", []);
            var call500 = callmethodChecked(call499, "onMouseDown:=(1)", [1], var_block);
            setLineNumber(339);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call503 = callmethodChecked(this, "createJsGraphics", []);
            // call case 4: self request
            onSelf = true;
            var call505 = callmethodChecked(this, "listener", []);
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call507 = callmethodChecked(this, "listener", []);
            var call508 = callmethodChecked(call507, "addMouseDownListener(2)", [2], call503, call505);
            return call508;
          };
          func496.paramCounts = [2];
          obj476.methods["addMouseDownListener(2)"] = func496;
          func496.definitionLine = 337;
          func496.definitionModule = "createJsGraphicsWrapper";
          var func509 = function(argcv) {    // method addMouseOverListener(_,_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_graphicsTypeObject = arguments[curarg];
            curarg++;
            var var_block = arguments[curarg];
            curarg++;
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(343);    // compilenode identifier
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call512 = callmethodChecked(this, "listener", []);
            var call513 = callmethodChecked(call512, "onMouseOver:=(1)", [1], var_block);
            setLineNumber(344);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call516 = callmethodChecked(this, "createJsGraphics", []);
            // call case 4: self request
            onSelf = true;
            var call518 = callmethodChecked(this, "listener", []);
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call520 = callmethodChecked(this, "listener", []);
            var call521 = callmethodChecked(call520, "addMouseOverListener(2)", [2], call516, call518);
            return call521;
          };
          func509.paramCounts = [2];
          obj476.methods["addMouseOverListener(2)"] = func509;
          func509.definitionLine = 342;
          func509.definitionModule = "createJsGraphicsWrapper";
          var func522 = function(argcv) {    // method addClickListener(_,_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_graphicsTypeObject = arguments[curarg];
            curarg++;
            var var_block = arguments[curarg];
            curarg++;
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(348);    // compilenode identifier
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call525 = callmethodChecked(this, "listener", []);
            var call526 = callmethodChecked(call525, "onClick:=(1)", [1], var_block);
            setLineNumber(349);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call529 = callmethodChecked(this, "createJsGraphics", []);
            // call case 4: self request
            onSelf = true;
            var call531 = callmethodChecked(this, "listener", []);
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call533 = callmethodChecked(this, "listener", []);
            var call534 = callmethodChecked(call533, "addClickListener(2)", [2], call529, call531);
            return call534;
          };
          func522.paramCounts = [2];
          obj476.methods["addClickListener(2)"] = func522;
          func522.definitionLine = 347;
          func522.definitionModule = "createJsGraphicsWrapper";
          var func535 = function(argcv) {    // method addPressMoveListener(_,_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_graphicsTypeObject = arguments[curarg];
            curarg++;
            var var_block = arguments[curarg];
            curarg++;
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(353);    // compilenode identifier
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call538 = callmethodChecked(this, "listener", []);
            var call539 = callmethodChecked(call538, "onPressMove:=(1)", [1], var_block);
            setLineNumber(354);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call542 = callmethodChecked(this, "createJsGraphics", []);
            // call case 4: self request
            onSelf = true;
            var call544 = callmethodChecked(this, "listener", []);
            // call case 6: other requests
            // call case 4: self request
            onSelf = true;
            var call546 = callmethodChecked(this, "listener", []);
            var call547 = callmethodChecked(call546, "addPressMoveListener(2)", [2], call542, call544);
            return call547;
          };
          func535.paramCounts = [2];
          obj476.methods["addPressMoveListener(2)"] = func535;
          func535.definitionLine = 352;
          func535.definitionModule = "createJsGraphicsWrapper";
          var func548 = function(argcv) {    // method setLocation(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_newLoc = arguments[curarg];
            curarg++;
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(358);    // compilenode identifier
            // call case 4: self request
            onSelf = true;
            var call550 = callmethodChecked(this, "location:=(1)", [1], var_newLoc);
            return call550;
          };
          func548.paramCounts = [1];
          obj476.methods["setLocation(1)"] = func548;
          func548.definitionLine = 357;
          func548.definitionModule = "createJsGraphicsWrapper";
          var func551 = function(argcv) {    // method move(_,_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_newX = arguments[curarg];
            curarg++;
            var var_newY = arguments[curarg];
            curarg++;
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(362);    // compilenode call
               // start native code from line 362
            var result = GraceDone;
            
              this.data.createJsGraphics.x = var_newX._value;
              this.data.createJsGraphics.y = var_newY._value;
        
            var nat552 = result;
               // end native code insertion
            return nat552;
          };
          func551.paramCounts = [2];
          obj476.methods["move(2)"] = func551;
          func551.definitionLine = 361;
          func551.definitionModule = "createJsGraphicsWrapper";
          var func553 = function(argcv) {    // method setVisible(_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_isVisible = arguments[curarg];
            curarg++;
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(369);    // compilenode call
               // start native code from line 369
            var result = GraceDone;
            
              var isVisible = var_isVisible._value
              this.data.createJsGraphics.visible = isVisible;
        
            var nat554 = result;
               // end native code insertion
            return nat554;
          };
          func553.paramCounts = [1];
          obj476.methods["setVisible(1)"] = func553;
          func553.definitionLine = 368;
          func553.definitionModule = "createJsGraphicsWrapper";
          var func555 = function(argcv) {    // method hitTest(_,_)
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            setModuleName("createJsGraphicsWrapper");
            setLineNumber(376);    // compilenode call
               // start native code from line 376
            var result = GraceDone;
            
              var x = var_x._value;
              var y = var_y._value;
              var shape = this.data.createJsGraphics;
              var pt = shape.globalToLocal(x, y);
              var hit = shape.hitTest(pt.x, pt.y);
              return new GraceBoolean(hit);
        
            var nat556 = result;
               // end native code insertion
            return nat556;
          };
          func555.paramCounts = [2];
          obj476.methods["hitTest(2)"] = func555;
          func555.definitionLine = 375;
          func555.definitionModule = "createJsGraphicsWrapper";
          obj476.data["createJsGraphics"] = undefined;
          var reader_createJsGraphicsWrapper_createJsGraphics557 = function() {
            return this.data["createJsGraphics"];
          };
          obj476.methods["createJsGraphics"] = reader_createJsGraphicsWrapper_createJsGraphics557;
          obj476.data["createJsGraphics"] = undefined;
          var writer_createJsGraphicsWrapper_createJsGraphics557 = function(argcv, o) {
            this.data["createJsGraphics"] = o;
            return GraceDone;
          };
          obj476.methods["createJsGraphics:=(1)"] = writer_createJsGraphicsWrapper_createJsGraphics557;
          obj476.mutable = true;
          obj476.data["color"] = undefined;
          var reader_createJsGraphicsWrapper_color558 = function() {
            return this.data["color"];
          };
          obj476.methods["color"] = reader_createJsGraphicsWrapper_color558;
          obj476.data["color"] = undefined;
          var writer_createJsGraphicsWrapper_color558 = function(argcv, o) {
            this.data["color"] = o;
            return GraceDone;
          };
          obj476.methods["color:=(1)"] = writer_createJsGraphicsWrapper_color558;
          reader_createJsGraphicsWrapper_color558.confidential = true;
          writer_createJsGraphicsWrapper_color558.confidential = true;
          obj476.mutable = true;
          setLineNumber(325);    // compilenode num
          var opresult561 = callmethodChecked(new GraceNum(0), "@(1)", [1], new GraceNum(0));
          obj476.data["location"] = opresult561;
          var reader_createJsGraphicsWrapper_location562 = function() {
            return this.data["location"];
          };
          obj476.methods["location"] = reader_createJsGraphicsWrapper_location562;
          obj476.data["location"] = opresult561;
          var writer_createJsGraphicsWrapper_location562 = function(argcv, o) {
            this.data["location"] = o;
            return GraceDone;
          };
          obj476.methods["location:=(1)"] = writer_createJsGraphicsWrapper_location562;
          reader_createJsGraphicsWrapper_location562.confidential = true;
          writer_createJsGraphicsWrapper_location562.confidential = true;
          obj476.mutable = true;
          setLineNumber(326);    // compilenode member
          // call case 6: other requests
          // call case 3: self.outer request
          var call565 = callmethodChecked(superDepth, "outer", [0]);
          onSelf = true;
          var call566 = callmethodChecked(call565, "eventListener", []);
          obj476.data["listener"] = call566;
          var reader_createJsGraphicsWrapper_listener567 = function() {
            return this.data["listener"];
          };
          obj476.methods["listener"] = reader_createJsGraphicsWrapper_listener567;
          obj476.data["listener"] = call566;
          var writer_createJsGraphicsWrapper_listener567 = function(argcv, o) {
            this.data["listener"] = o;
            return GraceDone;
          };
          obj476.methods["listener:=(1)"] = writer_createJsGraphicsWrapper_listener567;
          obj476.mutable = true;
          superDepth = origSuperDepth;
        };
        obj_init_476.apply(obj476, []);
        return obj476;
      };
      func475.paramCounts = [0];
      this.methods["commonGraphics"] = func475;
      func475.definitionLine = 322;
      func475.definitionModule = "createJsGraphicsWrapper";
        var func568 = function(argcv) {    // method commonGraphics$object(_)
          var curarg = 1;
          var inheritingObject = arguments[curarg++];
          // Start argument processing
          curarg = 1;
          // End argument processing
          setModuleName("createJsGraphicsWrapper");
          var returnTarget = invocationCount;
          invocationCount++;
          var obj569 = Grace_allocObject(GraceObject, "commonGraphics");
          obj569.definitionModule = "createJsGraphicsWrapper";
          obj569.definitionLine = 322;
          var inho569 = inheritingObject;
          while (inho569.superobj) inho569 = inho569.superobj;
          inho569.superobj = obj569;
          obj569.data = inheritingObject.data;
          if (inheritingObject.hasOwnProperty('_value'))
            obj569._value = inheritingObject._value;
          obj569.outer = this;
          var reader_createJsGraphicsWrapper_outer570 = function() {
            return this.outer;
          };
          obj569.methods["outer"] = reader_createJsGraphicsWrapper_outer570;
          var obj_init_569 = function() {
            var origSuperDepth = superDepth;
            superDepth = obj569;
            var func571 = function(argcv) {    // method mouseLocation
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("createJsGraphicsWrapper");
              setLineNumber(329);    // compilenode member
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call574 = callmethodChecked(this, "listener", []);
              var call575 = callmethodChecked(call574, "mouseLocation", []);
              return call575;
            };
            func571.paramCounts = [0];
            obj569.methods["mouseLocation"] = func571;
            func571.definitionLine = 328;
            func571.definitionModule = "createJsGraphicsWrapper";
            var func576 = function(argcv) {    // method addMouseUpListener(_,_)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_graphicsTypeObject = arguments[curarg];
              curarg++;
              var var_block = arguments[curarg];
              curarg++;
              setModuleName("createJsGraphicsWrapper");
              setLineNumber(333);    // compilenode identifier
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call579 = callmethodChecked(this, "listener", []);
              var call580 = callmethodChecked(call579, "onMouseUp:=(1)", [1], var_block);
              setLineNumber(334);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call583 = callmethodChecked(this, "createJsGraphics", []);
              // call case 4: self request
              onSelf = true;
              var call585 = callmethodChecked(this, "listener", []);
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call587 = callmethodChecked(this, "listener", []);
              var call588 = callmethodChecked(call587, "addMouseUpListener(2)", [2], call583, call585);
              return call588;
            };
            func576.paramCounts = [2];
            obj569.methods["addMouseUpListener(2)"] = func576;
            func576.definitionLine = 332;
            func576.definitionModule = "createJsGraphicsWrapper";
            var func589 = function(argcv) {    // method addMouseDownListener(_,_)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_graphicsTypeObject = arguments[curarg];
              curarg++;
              var var_block = arguments[curarg];
              curarg++;
              setModuleName("createJsGraphicsWrapper");
              setLineNumber(338);    // compilenode identifier
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call592 = callmethodChecked(this, "listener", []);
              var call593 = callmethodChecked(call592, "onMouseDown:=(1)", [1], var_block);
              setLineNumber(339);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call596 = callmethodChecked(this, "createJsGraphics", []);
              // call case 4: self request
              onSelf = true;
              var call598 = callmethodChecked(this, "listener", []);
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call600 = callmethodChecked(this, "listener", []);
              var call601 = callmethodChecked(call600, "addMouseDownListener(2)", [2], call596, call598);
              return call601;
            };
            func589.paramCounts = [2];
            obj569.methods["addMouseDownListener(2)"] = func589;
            func589.definitionLine = 337;
            func589.definitionModule = "createJsGraphicsWrapper";
            var func602 = function(argcv) {    // method addMouseOverListener(_,_)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_graphicsTypeObject = arguments[curarg];
              curarg++;
              var var_block = arguments[curarg];
              curarg++;
              setModuleName("createJsGraphicsWrapper");
              setLineNumber(343);    // compilenode identifier
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call605 = callmethodChecked(this, "listener", []);
              var call606 = callmethodChecked(call605, "onMouseOver:=(1)", [1], var_block);
              setLineNumber(344);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call609 = callmethodChecked(this, "createJsGraphics", []);
              // call case 4: self request
              onSelf = true;
              var call611 = callmethodChecked(this, "listener", []);
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call613 = callmethodChecked(this, "listener", []);
              var call614 = callmethodChecked(call613, "addMouseOverListener(2)", [2], call609, call611);
              return call614;
            };
            func602.paramCounts = [2];
            obj569.methods["addMouseOverListener(2)"] = func602;
            func602.definitionLine = 342;
            func602.definitionModule = "createJsGraphicsWrapper";
            var func615 = function(argcv) {    // method addClickListener(_,_)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_graphicsTypeObject = arguments[curarg];
              curarg++;
              var var_block = arguments[curarg];
              curarg++;
              setModuleName("createJsGraphicsWrapper");
              setLineNumber(348);    // compilenode identifier
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call618 = callmethodChecked(this, "listener", []);
              var call619 = callmethodChecked(call618, "onClick:=(1)", [1], var_block);
              setLineNumber(349);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call622 = callmethodChecked(this, "createJsGraphics", []);
              // call case 4: self request
              onSelf = true;
              var call624 = callmethodChecked(this, "listener", []);
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call626 = callmethodChecked(this, "listener", []);
              var call627 = callmethodChecked(call626, "addClickListener(2)", [2], call622, call624);
              return call627;
            };
            func615.paramCounts = [2];
            obj569.methods["addClickListener(2)"] = func615;
            func615.definitionLine = 347;
            func615.definitionModule = "createJsGraphicsWrapper";
            var func628 = function(argcv) {    // method addPressMoveListener(_,_)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_graphicsTypeObject = arguments[curarg];
              curarg++;
              var var_block = arguments[curarg];
              curarg++;
              setModuleName("createJsGraphicsWrapper");
              setLineNumber(353);    // compilenode identifier
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call631 = callmethodChecked(this, "listener", []);
              var call632 = callmethodChecked(call631, "onPressMove:=(1)", [1], var_block);
              setLineNumber(354);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call635 = callmethodChecked(this, "createJsGraphics", []);
              // call case 4: self request
              onSelf = true;
              var call637 = callmethodChecked(this, "listener", []);
              // call case 6: other requests
              // call case 4: self request
              onSelf = true;
              var call639 = callmethodChecked(this, "listener", []);
              var call640 = callmethodChecked(call639, "addPressMoveListener(2)", [2], call635, call637);
              return call640;
            };
            func628.paramCounts = [2];
            obj569.methods["addPressMoveListener(2)"] = func628;
            func628.definitionLine = 352;
            func628.definitionModule = "createJsGraphicsWrapper";
            var func641 = function(argcv) {    // method setLocation(_)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_newLoc = arguments[curarg];
              curarg++;
              setModuleName("createJsGraphicsWrapper");
              setLineNumber(358);    // compilenode identifier
              // call case 4: self request
              onSelf = true;
              var call643 = callmethodChecked(this, "location:=(1)", [1], var_newLoc);
              return call643;
            };
            func641.paramCounts = [1];
            obj569.methods["setLocation(1)"] = func641;
            func641.definitionLine = 357;
            func641.definitionModule = "createJsGraphicsWrapper";
            var func644 = function(argcv) {    // method move(_,_)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_newX = arguments[curarg];
              curarg++;
              var var_newY = arguments[curarg];
              curarg++;
              setModuleName("createJsGraphicsWrapper");
              setLineNumber(362);    // compilenode call
                 // start native code from line 362
              var result = GraceDone;
              
              this.data.createJsGraphics.x = var_newX._value;
              this.data.createJsGraphics.y = var_newY._value;
        
              var nat645 = result;
                 // end native code insertion
              return nat645;
            };
            func644.paramCounts = [2];
            obj569.methods["move(2)"] = func644;
            func644.definitionLine = 361;
            func644.definitionModule = "createJsGraphicsWrapper";
            var func646 = function(argcv) {    // method setVisible(_)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_isVisible = arguments[curarg];
              curarg++;
              setModuleName("createJsGraphicsWrapper");
              setLineNumber(369);    // compilenode call
                 // start native code from line 369
              var result = GraceDone;
              
              var isVisible = var_isVisible._value
              this.data.createJsGraphics.visible = isVisible;
        
              var nat647 = result;
                 // end native code insertion
              return nat647;
            };
            func646.paramCounts = [1];
            obj569.methods["setVisible(1)"] = func646;
            func646.definitionLine = 368;
            func646.definitionModule = "createJsGraphicsWrapper";
            var func648 = function(argcv) {    // method hitTest(_,_)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_x = arguments[curarg];
              curarg++;
              var var_y = arguments[curarg];
              curarg++;
              setModuleName("createJsGraphicsWrapper");
              setLineNumber(376);    // compilenode call
                 // start native code from line 376
              var result = GraceDone;
              
              var x = var_x._value;
              var y = var_y._value;
              var shape = this.data.createJsGraphics;
              var pt = shape.globalToLocal(x, y);
              var hit = shape.hitTest(pt.x, pt.y);
              return new GraceBoolean(hit);
        
              var nat649 = result;
                 // end native code insertion
              return nat649;
            };
            func648.paramCounts = [2];
            obj569.methods["hitTest(2)"] = func648;
            func648.definitionLine = 375;
            func648.definitionModule = "createJsGraphicsWrapper";
            obj569.data["createJsGraphics"] = undefined;
            var reader_createJsGraphicsWrapper_createJsGraphics650 = function() {
              return this.data["createJsGraphics"];
            };
            obj569.methods["createJsGraphics"] = reader_createJsGraphicsWrapper_createJsGraphics650;
            obj569.data["createJsGraphics"] = undefined;
            var writer_createJsGraphicsWrapper_createJsGraphics650 = function(argcv, o) {
              this.data["createJsGraphics"] = o;
              return GraceDone;
            };
            obj569.methods["createJsGraphics:=(1)"] = writer_createJsGraphicsWrapper_createJsGraphics650;
            obj569.mutable = true;
            obj569.data["color"] = undefined;
            var reader_createJsGraphicsWrapper_color651 = function() {
              return this.data["color"];
            };
            obj569.methods["color"] = reader_createJsGraphicsWrapper_color651;
            obj569.data["color"] = undefined;
            var writer_createJsGraphicsWrapper_color651 = function(argcv, o) {
              this.data["color"] = o;
              return GraceDone;
            };
            obj569.methods["color:=(1)"] = writer_createJsGraphicsWrapper_color651;
            reader_createJsGraphicsWrapper_color651.confidential = true;
            writer_createJsGraphicsWrapper_color651.confidential = true;
            obj569.mutable = true;
            setLineNumber(325);    // compilenode num
            var opresult654 = callmethodChecked(new GraceNum(0), "@(1)", [1], new GraceNum(0));
            obj569.data["location"] = opresult654;
            var reader_createJsGraphicsWrapper_location655 = function() {
              return this.data["location"];
            };
            obj569.methods["location"] = reader_createJsGraphicsWrapper_location655;
            obj569.data["location"] = opresult654;
            var writer_createJsGraphicsWrapper_location655 = function(argcv, o) {
              this.data["location"] = o;
              return GraceDone;
            };
            obj569.methods["location:=(1)"] = writer_createJsGraphicsWrapper_location655;
            reader_createJsGraphicsWrapper_location655.confidential = true;
            writer_createJsGraphicsWrapper_location655.confidential = true;
            obj569.mutable = true;
            setLineNumber(326);    // compilenode member
            // call case 6: other requests
            // call case 3: self.outer request
            var call658 = callmethodChecked(superDepth, "outer", [0]);
            onSelf = true;
            var call659 = callmethodChecked(call658, "eventListener", []);
            obj569.data["listener"] = call659;
            var reader_createJsGraphicsWrapper_listener660 = function() {
              return this.data["listener"];
            };
            obj569.methods["listener"] = reader_createJsGraphicsWrapper_listener660;
            obj569.data["listener"] = call659;
            var writer_createJsGraphicsWrapper_listener660 = function(argcv, o) {
              this.data["listener"] = o;
              return GraceDone;
            };
            obj569.methods["listener:=(1)"] = writer_createJsGraphicsWrapper_listener660;
            obj569.mutable = true;
            superDepth = origSuperDepth;
          };
          obj_init_569.apply(inheritingObject, []);
          return obj569;
          };
          this.methods["commonGraphics$object(1)"] = func568;
        setLineNumber(387);    // compilenode method
        var func661 = function(argcv) {    // method shape
          var returnTarget = invocationCount;
          invocationCount++;
          var curarg = 1;
          setModuleName("createJsGraphicsWrapper");
          var obj662 = Grace_allocObject(null, "shape");
          obj662.definitionModule = "createJsGraphicsWrapper";
          obj662.definitionLine = 387;
          obj662.outer = this;
          var reader_createJsGraphicsWrapper_outer663 = function() {
            return this.outer;
          };
          obj662.methods["outer"] = reader_createJsGraphicsWrapper_outer663;
          var obj_init_662 = function() {
            var origSuperDepth = superDepth;
            superDepth = obj662;
            var func664 = function(argcv) {    // method new
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("createJsGraphicsWrapper");
              setLineNumber(393);    // compilenode call
                 // start native code from line 393
              var result = GraceDone;
              
              return new createjs.Shape();
        
              var nat665 = result;
                 // end native code insertion
              return nat665;
            };
            func664.paramCounts = [0];
            obj662.methods["new"] = func664;
            func664.definitionLine = 392;
            func664.definitionModule = "createJsGraphicsWrapper";
            var func666 = function(argcv) {    // method clear
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("createJsGraphicsWrapper");
              setLineNumber(399);    // compilenode call
                 // start native code from line 399
              var result = GraceDone;
              
              this.data.createJsGraphics.graphics.clear();
        
              var nat667 = result;
                 // end native code insertion
              return nat667;
            };
            func666.paramCounts = [0];
            obj662.methods["clear"] = func666;
            func666.definitionLine = 398;
            func666.definitionModule = "createJsGraphicsWrapper";
            var func668 = function(argcv) {    // method beginFill(_)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_color__39__ = arguments[curarg];
              curarg++;
              setModuleName("createJsGraphicsWrapper");
              setLineNumber(404);    // compilenode identifier
              // call case 4: self request
              onSelf = true;
              var call670 = callmethodChecked(this, "color:=(1)", [1], var_color__39__);
              setLineNumber(405);    // compilenode call
                 // start native code from line 405
              var result = GraceDone;
              
              var color = this.data.color._value;
              this.data.createJsGraphics.graphics.beginFill(color);
        
              var nat671 = result;
                 // end native code insertion
              return nat671;
            };
            func668.paramCounts = [1];
            obj662.methods["beginFill(1)"] = func668;
            func668.definitionLine = 403;
            func668.definitionModule = "createJsGraphicsWrapper";
            var func672 = function(argcv) {    // method beginStroke(_)
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              var var_color__39__ = arguments[curarg];
              curarg++;
              setModuleName("createJsGraphicsWrapper");
              setLineNumber(411);    // compilenode identifier
              // call case 4: self request
              onSelf = true;
              var call674 = callmethodChecked(this, "color:=(1)", [1], var_color__39__);
              setLineNumber(412);    // compilenode call
                 // start native code from line 412
              var result = GraceDone;
              
              var color = this.data.color._value;
              this.data.createJsGraphics.graphics.beginStroke(color);
        
              var nat675 = result;
                 // end native code insertion
              return nat675;
            };
            func672.paramCounts = [1];
            obj662.methods["beginStroke(1)"] = func672;
            func672.definitionLine = 410;
            func672.definitionModule = "createJsGraphicsWrapper";
            setLineNumber(388);    // compilenode identifier
            // call case 6: other requests
            // call case 3: self.outer request
            var call678 = callmethodChecked(superDepth, "outer", [0]);
            var call679 = callmethodChecked(call678, "commonGraphics$object(1)", [0, 1], this);
            obj662.superobj = call679;
            if (call679.data) obj662.data = call679.data;
            if (call679.hasOwnProperty('_value'))
                obj662._value = call679._value;
            setLineNumber(390);    // compilenode member
            // call case 4: self request
            onSelf = true;
            var call682 = callmethodChecked(this, "new", []);
            // call case 4: self request
            onSelf = true;
            var call683 = callmethodChecked(this, "createJsGraphics:=(1)", [1], call682);
            superDepth = origSuperDepth;
          };
          obj_init_662.apply(obj662, []);
          return obj662;
        };
        func661.paramCounts = [0];
        this.methods["shape"] = func661;
        func661.definitionLine = 387;
        func661.definitionModule = "createJsGraphicsWrapper";
          var func684 = function(argcv) {    // method shape$object(_)
            var curarg = 1;
            var inheritingObject = arguments[curarg++];
            // Start argument processing
            curarg = 1;
            // End argument processing
            setModuleName("createJsGraphicsWrapper");
            var returnTarget = invocationCount;
            invocationCount++;
            var obj685 = Grace_allocObject(null, "shape");
            obj685.definitionModule = "createJsGraphicsWrapper";
            obj685.definitionLine = 387;
            var inho685 = inheritingObject;
            while (inho685.superobj) inho685 = inho685.superobj;
            inho685.superobj = obj685;
            obj685.data = inheritingObject.data;
            if (inheritingObject.hasOwnProperty('_value'))
              obj685._value = inheritingObject._value;
            obj685.outer = this;
            var reader_createJsGraphicsWrapper_outer686 = function() {
              return this.outer;
            };
            obj685.methods["outer"] = reader_createJsGraphicsWrapper_outer686;
            var obj_init_685 = function() {
              var origSuperDepth = superDepth;
              superDepth = obj685;
              var func687 = function(argcv) {    // method new
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                setModuleName("createJsGraphicsWrapper");
                setLineNumber(393);    // compilenode call
                   // start native code from line 393
                var result = GraceDone;
                
              return new createjs.Shape();
        
                var nat688 = result;
                   // end native code insertion
                return nat688;
              };
              func687.paramCounts = [0];
              obj685.methods["new"] = func687;
              func687.definitionLine = 392;
              func687.definitionModule = "createJsGraphicsWrapper";
              var func689 = function(argcv) {    // method clear
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                setModuleName("createJsGraphicsWrapper");
                setLineNumber(399);    // compilenode call
                   // start native code from line 399
                var result = GraceDone;
                
              this.data.createJsGraphics.graphics.clear();
        
                var nat690 = result;
                   // end native code insertion
                return nat690;
              };
              func689.paramCounts = [0];
              obj685.methods["clear"] = func689;
              func689.definitionLine = 398;
              func689.definitionModule = "createJsGraphicsWrapper";
              var func691 = function(argcv) {    // method beginFill(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_color__39__ = arguments[curarg];
                curarg++;
                setModuleName("createJsGraphicsWrapper");
                setLineNumber(404);    // compilenode identifier
                // call case 4: self request
                onSelf = true;
                var call693 = callmethodChecked(this, "color:=(1)", [1], var_color__39__);
                setLineNumber(405);    // compilenode call
                   // start native code from line 405
                var result = GraceDone;
                
              var color = this.data.color._value;
              this.data.createJsGraphics.graphics.beginFill(color);
        
                var nat694 = result;
                   // end native code insertion
                return nat694;
              };
              func691.paramCounts = [1];
              obj685.methods["beginFill(1)"] = func691;
              func691.definitionLine = 403;
              func691.definitionModule = "createJsGraphicsWrapper";
              var func695 = function(argcv) {    // method beginStroke(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_color__39__ = arguments[curarg];
                curarg++;
                setModuleName("createJsGraphicsWrapper");
                setLineNumber(411);    // compilenode identifier
                // call case 4: self request
                onSelf = true;
                var call697 = callmethodChecked(this, "color:=(1)", [1], var_color__39__);
                setLineNumber(412);    // compilenode call
                   // start native code from line 412
                var result = GraceDone;
                
              var color = this.data.color._value;
              this.data.createJsGraphics.graphics.beginStroke(color);
        
                var nat698 = result;
                   // end native code insertion
                return nat698;
              };
              func695.paramCounts = [1];
              obj685.methods["beginStroke(1)"] = func695;
              func695.definitionLine = 410;
              func695.definitionModule = "createJsGraphicsWrapper";
              setLineNumber(388);    // compilenode identifier
              // call case 6: other requests
              // call case 3: self.outer request
              var call701 = callmethodChecked(superDepth, "outer", [0]);
              var call702 = callmethodChecked(call701, "commonGraphics$object(1)", [0, 1], this);
              obj685.superobj = call702;
              if (call702.data) obj685.data = call702.data;
              if (call702.hasOwnProperty('_value'))
                  obj685._value = call702._value;
              setLineNumber(390);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call705 = callmethodChecked(this, "new", []);
              // call case 4: self request
              onSelf = true;
              var call706 = callmethodChecked(this, "createJsGraphics:=(1)", [1], call705);
              superDepth = origSuperDepth;
            };
            obj_init_685.apply(inheritingObject, []);
            return obj685;
            };
            this.methods["shape$object(1)"] = func684;
          setLineNumber(419);    // compilenode method
          var func707 = function(argcv) {    // method container
            var returnTarget = invocationCount;
            invocationCount++;
            var curarg = 1;
            setModuleName("createJsGraphicsWrapper");
            var obj708 = Grace_allocObject(null, "container");
            obj708.definitionModule = "createJsGraphicsWrapper";
            obj708.definitionLine = 419;
            obj708.outer = this;
            var reader_createJsGraphicsWrapper_outer709 = function() {
              return this.outer;
            };
            obj708.methods["outer"] = reader_createJsGraphicsWrapper_outer709;
            var obj_init_708 = function() {
              var origSuperDepth = superDepth;
              superDepth = obj708;
              var func710 = function(argcv) {    // method new
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                setModuleName("createJsGraphicsWrapper");
                setLineNumber(424);    // compilenode call
                   // start native code from line 424
                var result = GraceDone;
                
              return new createjs.Container();
        
                var nat711 = result;
                   // end native code insertion
                return nat711;
              };
              func710.paramCounts = [0];
              obj708.methods["new"] = func710;
              func710.definitionLine = 423;
              func710.definitionModule = "createJsGraphicsWrapper";
              var func712 = function(argcv) {    // method add(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_anObject = arguments[curarg];
                curarg++;
                setModuleName("createJsGraphicsWrapper");
                setLineNumber(430);    // compilenode call
                   // start native code from line 430
                var result = GraceDone;
                
              this.data.createJsGraphics.addChild(var_anObject.data.createJsGraphics);
        
                var nat713 = result;
                   // end native code insertion
                return nat713;
              };
              func712.paramCounts = [1];
              obj708.methods["add(1)"] = func712;
              func712.definitionLine = 429;
              func712.definitionModule = "createJsGraphicsWrapper";
              var func714 = function(argcv) {    // method setLocation(_)
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                var var_location = arguments[curarg];
                curarg++;
                setModuleName("createJsGraphicsWrapper");
                setLineNumber(436);    // compilenode call
                   // start native code from line 436
                var result = GraceDone;
                
              this.data.createJsGraphics.x = var_location.data.x._value;
              this.data.createJsGraphics.y = var_location.data.y._value;
        
                var nat715 = result;
                   // end native code insertion
                setLineNumber(440);    // compilenode identifier
                return this;
              };
              func714.paramCounts = [1];
              obj708.methods["setLocation(1)"] = func714;
              func714.definitionLine = 435;
              func714.definitionModule = "createJsGraphicsWrapper";
              setLineNumber(420);    // compilenode identifier
              // call case 6: other requests
              // call case 3: self.outer request
              var call718 = callmethodChecked(superDepth, "outer", [0]);
              var call719 = callmethodChecked(call718, "commonGraphics$object(1)", [0, 1], this);
              obj708.superobj = call719;
              if (call719.data) obj708.data = call719.data;
              if (call719.hasOwnProperty('_value'))
                  obj708._value = call719._value;
              setLineNumber(422);    // compilenode member
              // call case 4: self request
              onSelf = true;
              var call722 = callmethodChecked(this, "new", []);
              // call case 4: self request
              onSelf = true;
              var call723 = callmethodChecked(this, "createJsGraphics:=(1)", [1], call722);
              superDepth = origSuperDepth;
            };
            obj_init_708.apply(obj708, []);
            return obj708;
          };
          func707.paramCounts = [0];
          this.methods["container"] = func707;
          func707.definitionLine = 419;
          func707.definitionModule = "createJsGraphicsWrapper";
            var func724 = function(argcv) {    // method container$object(_)
              var curarg = 1;
              var inheritingObject = arguments[curarg++];
              // Start argument processing
              curarg = 1;
              // End argument processing
              setModuleName("createJsGraphicsWrapper");
              var returnTarget = invocationCount;
              invocationCount++;
              var obj725 = Grace_allocObject(null, "container");
              obj725.definitionModule = "createJsGraphicsWrapper";
              obj725.definitionLine = 419;
              var inho725 = inheritingObject;
              while (inho725.superobj) inho725 = inho725.superobj;
              inho725.superobj = obj725;
              obj725.data = inheritingObject.data;
              if (inheritingObject.hasOwnProperty('_value'))
                obj725._value = inheritingObject._value;
              obj725.outer = this;
              var reader_createJsGraphicsWrapper_outer726 = function() {
                return this.outer;
              };
              obj725.methods["outer"] = reader_createJsGraphicsWrapper_outer726;
              var obj_init_725 = function() {
                var origSuperDepth = superDepth;
                superDepth = obj725;
                var func727 = function(argcv) {    // method new
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  setModuleName("createJsGraphicsWrapper");
                  setLineNumber(424);    // compilenode call
                     // start native code from line 424
                  var result = GraceDone;
                  
              return new createjs.Container();
        
                  var nat728 = result;
                     // end native code insertion
                  return nat728;
                };
                func727.paramCounts = [0];
                obj725.methods["new"] = func727;
                func727.definitionLine = 423;
                func727.definitionModule = "createJsGraphicsWrapper";
                var func729 = function(argcv) {    // method add(_)
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  var var_anObject = arguments[curarg];
                  curarg++;
                  setModuleName("createJsGraphicsWrapper");
                  setLineNumber(430);    // compilenode call
                     // start native code from line 430
                  var result = GraceDone;
                  
              this.data.createJsGraphics.addChild(var_anObject.data.createJsGraphics);
        
                  var nat730 = result;
                     // end native code insertion
                  return nat730;
                };
                func729.paramCounts = [1];
                obj725.methods["add(1)"] = func729;
                func729.definitionLine = 429;
                func729.definitionModule = "createJsGraphicsWrapper";
                var func731 = function(argcv) {    // method setLocation(_)
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  var var_location = arguments[curarg];
                  curarg++;
                  setModuleName("createJsGraphicsWrapper");
                  setLineNumber(436);    // compilenode call
                     // start native code from line 436
                  var result = GraceDone;
                  
              this.data.createJsGraphics.x = var_location.data.x._value;
              this.data.createJsGraphics.y = var_location.data.y._value;
        
                  var nat732 = result;
                     // end native code insertion
                  setLineNumber(440);    // compilenode identifier
                  return this;
                };
                func731.paramCounts = [1];
                obj725.methods["setLocation(1)"] = func731;
                func731.definitionLine = 435;
                func731.definitionModule = "createJsGraphicsWrapper";
                setLineNumber(420);    // compilenode identifier
                // call case 6: other requests
                // call case 3: self.outer request
                var call735 = callmethodChecked(superDepth, "outer", [0]);
                var call736 = callmethodChecked(call735, "commonGraphics$object(1)", [0, 1], this);
                obj725.superobj = call736;
                if (call736.data) obj725.data = call736.data;
                if (call736.hasOwnProperty('_value'))
                    obj725._value = call736._value;
                setLineNumber(422);    // compilenode member
                // call case 4: self request
                onSelf = true;
                var call739 = callmethodChecked(this, "new", []);
                // call case 4: self request
                onSelf = true;
                var call740 = callmethodChecked(this, "createJsGraphics:=(1)", [1], call739);
                superDepth = origSuperDepth;
              };
              obj_init_725.apply(inheritingObject, []);
              return obj725;
              };
              this.methods["container$object(1)"] = func724;
            setLineNumber(444);    // compilenode method
            var func741 = function(argcv) {    // method circle
              var returnTarget = invocationCount;
              invocationCount++;
              var curarg = 1;
              setModuleName("createJsGraphicsWrapper");
              var obj742 = Grace_allocObject(null, "circle");
              obj742.definitionModule = "createJsGraphicsWrapper";
              obj742.definitionLine = 444;
              obj742.outer = this;
              var reader_createJsGraphicsWrapper_outer743 = function() {
                return this.outer;
              };
              obj742.methods["outer"] = reader_createJsGraphicsWrapper_outer743;
              var obj_init_742 = function() {
                var origSuperDepth = superDepth;
                superDepth = obj742;
                var func744 = function(argcv) {    // method draw(_)
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  var var_radius__39__ = arguments[curarg];
                  curarg++;
                  setModuleName("createJsGraphicsWrapper");
                  setLineNumber(448);    // compilenode identifier
                  // call case 4: self request
                  onSelf = true;
                  var call746 = callmethodChecked(this, "radius:=(1)", [1], var_radius__39__);
                  setLineNumber(449);    // compilenode call
                     // start native code from line 449
                  var result = GraceDone;
                  
              var x = this.data.location.data.x._value;
              var y = this.data.location.data.y._value;
              var radius = this.data.radius._value;

        this.data.createJsGraphics.graphics.drawCircle(x, y, radius);
        var circle = this.data.createJsGraphics;
        return circle;
        
                  var nat747 = result;
                     // end native code insertion
                  return nat747;
                };
                func744.paramCounts = [1];
                obj742.methods["draw(1)"] = func744;
                func744.definitionLine = 447;
                func744.definitionModule = "createJsGraphicsWrapper";
                setLineNumber(445);    // compilenode identifier
                // call case 6: other requests
                // call case 3: self.outer request
                var call750 = callmethodChecked(superDepth, "outer", [0]);
                var call751 = callmethodChecked(call750, "shape$object(1)", [0, 1], this);
                obj742.superobj = call751;
                if (call751.data) obj742.data = call751.data;
                if (call751.hasOwnProperty('_value'))
                    obj742._value = call751._value;
                obj742.data["radius"] = undefined;
                var reader_createJsGraphicsWrapper_radius752 = function() {
                  return this.data["radius"];
                };
                obj742.methods["radius"] = reader_createJsGraphicsWrapper_radius752;
                obj742.data["radius"] = undefined;
                var writer_createJsGraphicsWrapper_radius752 = function(argcv, o) {
                  this.data["radius"] = o;
                  return GraceDone;
                };
                obj742.methods["radius:=(1)"] = writer_createJsGraphicsWrapper_radius752;
                reader_createJsGraphicsWrapper_radius752.confidential = true;
                writer_createJsGraphicsWrapper_radius752.confidential = true;
                obj742.mutable = true;
                superDepth = origSuperDepth;
              };
              obj_init_742.apply(obj742, []);
              return obj742;
            };
            func741.paramCounts = [0];
            this.methods["circle"] = func741;
            func741.definitionLine = 444;
            func741.definitionModule = "createJsGraphicsWrapper";
              var func753 = function(argcv) {    // method circle$object(_)
                var curarg = 1;
                var inheritingObject = arguments[curarg++];
                // Start argument processing
                curarg = 1;
                // End argument processing
                setModuleName("createJsGraphicsWrapper");
                var returnTarget = invocationCount;
                invocationCount++;
                var obj754 = Grace_allocObject(null, "circle");
                obj754.definitionModule = "createJsGraphicsWrapper";
                obj754.definitionLine = 444;
                var inho754 = inheritingObject;
                while (inho754.superobj) inho754 = inho754.superobj;
                inho754.superobj = obj754;
                obj754.data = inheritingObject.data;
                if (inheritingObject.hasOwnProperty('_value'))
                  obj754._value = inheritingObject._value;
                obj754.outer = this;
                var reader_createJsGraphicsWrapper_outer755 = function() {
                  return this.outer;
                };
                obj754.methods["outer"] = reader_createJsGraphicsWrapper_outer755;
                var obj_init_754 = function() {
                  var origSuperDepth = superDepth;
                  superDepth = obj754;
                  var func756 = function(argcv) {    // method draw(_)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_radius__39__ = arguments[curarg];
                    curarg++;
                    setModuleName("createJsGraphicsWrapper");
                    setLineNumber(448);    // compilenode identifier
                    // call case 4: self request
                    onSelf = true;
                    var call758 = callmethodChecked(this, "radius:=(1)", [1], var_radius__39__);
                    setLineNumber(449);    // compilenode call
                       // start native code from line 449
                    var result = GraceDone;
                    
              var x = this.data.location.data.x._value;
              var y = this.data.location.data.y._value;
              var radius = this.data.radius._value;

        this.data.createJsGraphics.graphics.drawCircle(x, y, radius);
        var circle = this.data.createJsGraphics;
        return circle;
        
                    var nat759 = result;
                       // end native code insertion
                    return nat759;
                  };
                  func756.paramCounts = [1];
                  obj754.methods["draw(1)"] = func756;
                  func756.definitionLine = 447;
                  func756.definitionModule = "createJsGraphicsWrapper";
                  setLineNumber(445);    // compilenode identifier
                  // call case 6: other requests
                  // call case 3: self.outer request
                  var call762 = callmethodChecked(superDepth, "outer", [0]);
                  var call763 = callmethodChecked(call762, "shape$object(1)", [0, 1], this);
                  obj754.superobj = call763;
                  if (call763.data) obj754.data = call763.data;
                  if (call763.hasOwnProperty('_value'))
                      obj754._value = call763._value;
                  obj754.data["radius"] = undefined;
                  var reader_createJsGraphicsWrapper_radius764 = function() {
                    return this.data["radius"];
                  };
                  obj754.methods["radius"] = reader_createJsGraphicsWrapper_radius764;
                  obj754.data["radius"] = undefined;
                  var writer_createJsGraphicsWrapper_radius764 = function(argcv, o) {
                    this.data["radius"] = o;
                    return GraceDone;
                  };
                  obj754.methods["radius:=(1)"] = writer_createJsGraphicsWrapper_radius764;
                  reader_createJsGraphicsWrapper_radius764.confidential = true;
                  writer_createJsGraphicsWrapper_radius764.confidential = true;
                  obj754.mutable = true;
                  superDepth = origSuperDepth;
                };
                obj_init_754.apply(inheritingObject, []);
                return obj754;
                };
                this.methods["circle$object(1)"] = func753;
              setLineNumber(461);    // compilenode method
              var func765 = function(argcv) {    // method rectangle
                var returnTarget = invocationCount;
                invocationCount++;
                var curarg = 1;
                setModuleName("createJsGraphicsWrapper");
                var obj766 = Grace_allocObject(null, "rectangle");
                obj766.definitionModule = "createJsGraphicsWrapper";
                obj766.definitionLine = 461;
                obj766.outer = this;
                var reader_createJsGraphicsWrapper_outer767 = function() {
                  return this.outer;
                };
                obj766.methods["outer"] = reader_createJsGraphicsWrapper_outer767;
                var obj_init_766 = function() {
                  var origSuperDepth = superDepth;
                  superDepth = obj766;
                  var func768 = function(argcv) {    // method draw(_,_)
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    var var_w = arguments[curarg];
                    curarg++;
                    var var_h = arguments[curarg];
                    curarg++;
                    setModuleName("createJsGraphicsWrapper");
                    setLineNumber(466);    // compilenode identifier
                    // call case 4: self request
                    onSelf = true;
                    var call770 = callmethodChecked(this, "width:=(1)", [1], var_w);
                    setLineNumber(467);    // compilenode identifier
                    // call case 4: self request
                    onSelf = true;
                    var call772 = callmethodChecked(this, "height:=(1)", [1], var_h);
                    setLineNumber(468);    // compilenode call
                       // start native code from line 468
                    var result = GraceDone;
                    
              var x = this.data.location.data.x._value;
              var y = this.data.location.data.y._value;
              var height = this.data.height._value
              var width = this.data.width._value
              this.data.createJsGraphics.graphics.drawRect(x, y, width, height);
        
                    var nat773 = result;
                       // end native code insertion
                    return nat773;
                  };
                  func768.paramCounts = [2];
                  obj766.methods["draw(2)"] = func768;
                  func768.definitionLine = 465;
                  func768.definitionModule = "createJsGraphicsWrapper";
                  setLineNumber(462);    // compilenode identifier
                  // call case 6: other requests
                  // call case 3: self.outer request
                  var call776 = callmethodChecked(superDepth, "outer", [0]);
                  var call777 = callmethodChecked(call776, "shape$object(1)", [0, 1], this);
                  obj766.superobj = call777;
                  if (call777.data) obj766.data = call777.data;
                  if (call777.hasOwnProperty('_value'))
                      obj766._value = call777._value;
                  obj766.data["height"] = undefined;
                  var reader_createJsGraphicsWrapper_height778 = function() {
                    return this.data["height"];
                  };
                  obj766.methods["height"] = reader_createJsGraphicsWrapper_height778;
                  obj766.data["height"] = undefined;
                  var writer_createJsGraphicsWrapper_height778 = function(argcv, o) {
                    this.data["height"] = o;
                    return GraceDone;
                  };
                  obj766.methods["height:=(1)"] = writer_createJsGraphicsWrapper_height778;
                  reader_createJsGraphicsWrapper_height778.confidential = true;
                  writer_createJsGraphicsWrapper_height778.confidential = true;
                  obj766.mutable = true;
                  obj766.data["width"] = undefined;
                  var reader_createJsGraphicsWrapper_width779 = function() {
                    return this.data["width"];
                  };
                  obj766.methods["width"] = reader_createJsGraphicsWrapper_width779;
                  obj766.data["width"] = undefined;
                  var writer_createJsGraphicsWrapper_width779 = function(argcv, o) {
                    this.data["width"] = o;
                    return GraceDone;
                  };
                  obj766.methods["width:=(1)"] = writer_createJsGraphicsWrapper_width779;
                  reader_createJsGraphicsWrapper_width779.confidential = true;
                  writer_createJsGraphicsWrapper_width779.confidential = true;
                  obj766.mutable = true;
                  superDepth = origSuperDepth;
                };
                obj_init_766.apply(obj766, []);
                return obj766;
              };
              func765.paramCounts = [0];
              this.methods["rectangle"] = func765;
              func765.definitionLine = 461;
              func765.definitionModule = "createJsGraphicsWrapper";
                var func780 = function(argcv) {    // method rectangle$object(_)
                  var curarg = 1;
                  var inheritingObject = arguments[curarg++];
                  // Start argument processing
                  curarg = 1;
                  // End argument processing
                  setModuleName("createJsGraphicsWrapper");
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var obj781 = Grace_allocObject(null, "rectangle");
                  obj781.definitionModule = "createJsGraphicsWrapper";
                  obj781.definitionLine = 461;
                  var inho781 = inheritingObject;
                  while (inho781.superobj) inho781 = inho781.superobj;
                  inho781.superobj = obj781;
                  obj781.data = inheritingObject.data;
                  if (inheritingObject.hasOwnProperty('_value'))
                    obj781._value = inheritingObject._value;
                  obj781.outer = this;
                  var reader_createJsGraphicsWrapper_outer782 = function() {
                    return this.outer;
                  };
                  obj781.methods["outer"] = reader_createJsGraphicsWrapper_outer782;
                  var obj_init_781 = function() {
                    var origSuperDepth = superDepth;
                    superDepth = obj781;
                    var func783 = function(argcv) {    // method draw(_,_)
                      var returnTarget = invocationCount;
                      invocationCount++;
                      var curarg = 1;
                      var var_w = arguments[curarg];
                      curarg++;
                      var var_h = arguments[curarg];
                      curarg++;
                      setModuleName("createJsGraphicsWrapper");
                      setLineNumber(466);    // compilenode identifier
                      // call case 4: self request
                      onSelf = true;
                      var call785 = callmethodChecked(this, "width:=(1)", [1], var_w);
                      setLineNumber(467);    // compilenode identifier
                      // call case 4: self request
                      onSelf = true;
                      var call787 = callmethodChecked(this, "height:=(1)", [1], var_h);
                      setLineNumber(468);    // compilenode call
                         // start native code from line 468
                      var result = GraceDone;
                      
              var x = this.data.location.data.x._value;
              var y = this.data.location.data.y._value;
              var height = this.data.height._value
              var width = this.data.width._value
              this.data.createJsGraphics.graphics.drawRect(x, y, width, height);
        
                      var nat788 = result;
                         // end native code insertion
                      return nat788;
                    };
                    func783.paramCounts = [2];
                    obj781.methods["draw(2)"] = func783;
                    func783.definitionLine = 465;
                    func783.definitionModule = "createJsGraphicsWrapper";
                    setLineNumber(462);    // compilenode identifier
                    // call case 6: other requests
                    // call case 3: self.outer request
                    var call791 = callmethodChecked(superDepth, "outer", [0]);
                    var call792 = callmethodChecked(call791, "shape$object(1)", [0, 1], this);
                    obj781.superobj = call792;
                    if (call792.data) obj781.data = call792.data;
                    if (call792.hasOwnProperty('_value'))
                        obj781._value = call792._value;
                    obj781.data["height"] = undefined;
                    var reader_createJsGraphicsWrapper_height793 = function() {
                      return this.data["height"];
                    };
                    obj781.methods["height"] = reader_createJsGraphicsWrapper_height793;
                    obj781.data["height"] = undefined;
                    var writer_createJsGraphicsWrapper_height793 = function(argcv, o) {
                      this.data["height"] = o;
                      return GraceDone;
                    };
                    obj781.methods["height:=(1)"] = writer_createJsGraphicsWrapper_height793;
                    reader_createJsGraphicsWrapper_height793.confidential = true;
                    writer_createJsGraphicsWrapper_height793.confidential = true;
                    obj781.mutable = true;
                    obj781.data["width"] = undefined;
                    var reader_createJsGraphicsWrapper_width794 = function() {
                      return this.data["width"];
                    };
                    obj781.methods["width"] = reader_createJsGraphicsWrapper_width794;
                    obj781.data["width"] = undefined;
                    var writer_createJsGraphicsWrapper_width794 = function(argcv, o) {
                      this.data["width"] = o;
                      return GraceDone;
                    };
                    obj781.methods["width:=(1)"] = writer_createJsGraphicsWrapper_width794;
                    reader_createJsGraphicsWrapper_width794.confidential = true;
                    writer_createJsGraphicsWrapper_width794.confidential = true;
                    obj781.mutable = true;
                    superDepth = origSuperDepth;
                  };
                  obj_init_781.apply(inheritingObject, []);
                  return obj781;
                  };
                  this.methods["rectangle$object(1)"] = func780;
                setLineNumber(478);    // compilenode method
                var func795 = function(argcv) {    // method polyStar
                  var returnTarget = invocationCount;
                  invocationCount++;
                  var curarg = 1;
                  setModuleName("createJsGraphicsWrapper");
                  var obj796 = Grace_allocObject(null, "polyStar");
                  obj796.definitionModule = "createJsGraphicsWrapper";
                  obj796.definitionLine = 478;
                  obj796.outer = this;
                  var reader_createJsGraphicsWrapper_outer797 = function() {
                    return this.outer;
                  };
                  obj796.methods["outer"] = reader_createJsGraphicsWrapper_outer797;
                  var obj_init_796 = function() {
                    var origSuperDepth = superDepth;
                    superDepth = obj796;
                    var func798 = function(argcv) {    // method draw(_,_,_,_)
                      var returnTarget = invocationCount;
                      invocationCount++;
                      var curarg = 1;
                      var var_size__39__ = arguments[curarg];
                      curarg++;
                      var var_sides__39__ = arguments[curarg];
                      curarg++;
                      var var_pointSize__39__ = arguments[curarg];
                      curarg++;
                      var var_angle__39__ = arguments[curarg];
                      curarg++;
                      setModuleName("createJsGraphicsWrapper");
                      setLineNumber(485);    // compilenode identifier
                      // call case 4: self request
                      onSelf = true;
                      var call800 = callmethodChecked(this, "size:=(1)", [1], var_size__39__);
                      setLineNumber(486);    // compilenode identifier
                      // call case 4: self request
                      onSelf = true;
                      var call802 = callmethodChecked(this, "pointSize:=(1)", [1], var_pointSize__39__);
                      setLineNumber(487);    // compilenode identifier
                      // call case 4: self request
                      onSelf = true;
                      var call804 = callmethodChecked(this, "angle:=(1)", [1], var_angle__39__);
                      setLineNumber(488);    // compilenode identifier
                      // call case 4: self request
                      onSelf = true;
                      var call806 = callmethodChecked(this, "sides:=(1)", [1], var_sides__39__);
                      setLineNumber(489);    // compilenode call
                         // start native code from line 489
                      var result = GraceDone;
                      
              var x = this.data.location.data.x._value;
              var y = this.data.location.data.y._value;
              var size = this.data.size._value;
              var sides = this.data.sides._value;
              var pointSize = this.data.pointSize._value;
              var angle = this.data.angle._value;
              this.data.createJsGraphics.graphics.drawPolyStar(x, y, size, sides,pointSize, angle);
        
                      var nat807 = result;
                         // end native code insertion
                      return nat807;
                    };
                    func798.paramCounts = [4];
                    obj796.methods["draw(4)"] = func798;
                    func798.definitionLine = 484;
                    func798.definitionModule = "createJsGraphicsWrapper";
                    setLineNumber(479);    // compilenode identifier
                    // call case 6: other requests
                    // call case 3: self.outer request
                    var call810 = callmethodChecked(superDepth, "outer", [0]);
                    var call811 = callmethodChecked(call810, "shape$object(1)", [0, 1], this);
                    obj796.superobj = call811;
                    if (call811.data) obj796.data = call811.data;
                    if (call811.hasOwnProperty('_value'))
                        obj796._value = call811._value;
                    setLineNumber(480);    // compilenode num
                    obj796.data["size"] = new GraceNum(20);
                    var reader_createJsGraphicsWrapper_size812 = function() {
                      return this.data["size"];
                    };
                    obj796.methods["size"] = reader_createJsGraphicsWrapper_size812;
                    obj796.data["size"] = new GraceNum(20);
                    var writer_createJsGraphicsWrapper_size812 = function(argcv, o) {
                      this.data["size"] = o;
                      return GraceDone;
                    };
                    obj796.methods["size:=(1)"] = writer_createJsGraphicsWrapper_size812;
                    obj796.mutable = true;
                    setLineNumber(481);    // compilenode num
                    obj796.data["sides"] = new GraceNum(5);
                    var reader_createJsGraphicsWrapper_sides813 = function() {
                      return this.data["sides"];
                    };
                    obj796.methods["sides"] = reader_createJsGraphicsWrapper_sides813;
                    obj796.data["sides"] = new GraceNum(5);
                    var writer_createJsGraphicsWrapper_sides813 = function(argcv, o) {
                      this.data["sides"] = o;
                      return GraceDone;
                    };
                    obj796.methods["sides:=(1)"] = writer_createJsGraphicsWrapper_sides813;
                    obj796.mutable = true;
                    setLineNumber(482);    // compilenode num
                    obj796.data["pointSize"] = new GraceNum(2);
                    var reader_createJsGraphicsWrapper_pointSize814 = function() {
                      return this.data["pointSize"];
                    };
                    obj796.methods["pointSize"] = reader_createJsGraphicsWrapper_pointSize814;
                    obj796.data["pointSize"] = new GraceNum(2);
                    var writer_createJsGraphicsWrapper_pointSize814 = function(argcv, o) {
                      this.data["pointSize"] = o;
                      return GraceDone;
                    };
                    obj796.methods["pointSize:=(1)"] = writer_createJsGraphicsWrapper_pointSize814;
                    obj796.mutable = true;
                    setLineNumber(484);    // compilenode call
                    // call case 6: other requests
                    setLineNumber(483);    // compilenode num
                    var call816 = callmethodChecked(new GraceNum(90), "prefix-", [0]);
                    obj796.data["angle"] = call816;
                    var reader_createJsGraphicsWrapper_angle817 = function() {
                      return this.data["angle"];
                    };
                    obj796.methods["angle"] = reader_createJsGraphicsWrapper_angle817;
                    obj796.data["angle"] = call816;
                    var writer_createJsGraphicsWrapper_angle817 = function(argcv, o) {
                      this.data["angle"] = o;
                      return GraceDone;
                    };
                    obj796.methods["angle:=(1)"] = writer_createJsGraphicsWrapper_angle817;
                    obj796.mutable = true;
                    superDepth = origSuperDepth;
                  };
                  obj_init_796.apply(obj796, []);
                  return obj796;
                };
                func795.paramCounts = [0];
                this.methods["polyStar"] = func795;
                func795.definitionLine = 478;
                func795.definitionModule = "createJsGraphicsWrapper";
                  var func818 = function(argcv) {    // method polyStar$object(_)
                    var curarg = 1;
                    var inheritingObject = arguments[curarg++];
                    // Start argument processing
                    curarg = 1;
                    // End argument processing
                    setModuleName("createJsGraphicsWrapper");
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var obj819 = Grace_allocObject(null, "polyStar");
                    obj819.definitionModule = "createJsGraphicsWrapper";
                    obj819.definitionLine = 478;
                    var inho819 = inheritingObject;
                    while (inho819.superobj) inho819 = inho819.superobj;
                    inho819.superobj = obj819;
                    obj819.data = inheritingObject.data;
                    if (inheritingObject.hasOwnProperty('_value'))
                      obj819._value = inheritingObject._value;
                    obj819.outer = this;
                    var reader_createJsGraphicsWrapper_outer820 = function() {
                      return this.outer;
                    };
                    obj819.methods["outer"] = reader_createJsGraphicsWrapper_outer820;
                    var obj_init_819 = function() {
                      var origSuperDepth = superDepth;
                      superDepth = obj819;
                      var func821 = function(argcv) {    // method draw(_,_,_,_)
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var curarg = 1;
                        var var_size__39__ = arguments[curarg];
                        curarg++;
                        var var_sides__39__ = arguments[curarg];
                        curarg++;
                        var var_pointSize__39__ = arguments[curarg];
                        curarg++;
                        var var_angle__39__ = arguments[curarg];
                        curarg++;
                        setModuleName("createJsGraphicsWrapper");
                        setLineNumber(485);    // compilenode identifier
                        // call case 4: self request
                        onSelf = true;
                        var call823 = callmethodChecked(this, "size:=(1)", [1], var_size__39__);
                        setLineNumber(486);    // compilenode identifier
                        // call case 4: self request
                        onSelf = true;
                        var call825 = callmethodChecked(this, "pointSize:=(1)", [1], var_pointSize__39__);
                        setLineNumber(487);    // compilenode identifier
                        // call case 4: self request
                        onSelf = true;
                        var call827 = callmethodChecked(this, "angle:=(1)", [1], var_angle__39__);
                        setLineNumber(488);    // compilenode identifier
                        // call case 4: self request
                        onSelf = true;
                        var call829 = callmethodChecked(this, "sides:=(1)", [1], var_sides__39__);
                        setLineNumber(489);    // compilenode call
                           // start native code from line 489
                        var result = GraceDone;
                        
              var x = this.data.location.data.x._value;
              var y = this.data.location.data.y._value;
              var size = this.data.size._value;
              var sides = this.data.sides._value;
              var pointSize = this.data.pointSize._value;
              var angle = this.data.angle._value;
              this.data.createJsGraphics.graphics.drawPolyStar(x, y, size, sides,pointSize, angle);
        
                        var nat830 = result;
                           // end native code insertion
                        return nat830;
                      };
                      func821.paramCounts = [4];
                      obj819.methods["draw(4)"] = func821;
                      func821.definitionLine = 484;
                      func821.definitionModule = "createJsGraphicsWrapper";
                      setLineNumber(479);    // compilenode identifier
                      // call case 6: other requests
                      // call case 3: self.outer request
                      var call833 = callmethodChecked(superDepth, "outer", [0]);
                      var call834 = callmethodChecked(call833, "shape$object(1)", [0, 1], this);
                      obj819.superobj = call834;
                      if (call834.data) obj819.data = call834.data;
                      if (call834.hasOwnProperty('_value'))
                          obj819._value = call834._value;
                      setLineNumber(480);    // compilenode num
                      obj819.data["size"] = new GraceNum(20);
                      var reader_createJsGraphicsWrapper_size835 = function() {
                        return this.data["size"];
                      };
                      obj819.methods["size"] = reader_createJsGraphicsWrapper_size835;
                      obj819.data["size"] = new GraceNum(20);
                      var writer_createJsGraphicsWrapper_size835 = function(argcv, o) {
                        this.data["size"] = o;
                        return GraceDone;
                      };
                      obj819.methods["size:=(1)"] = writer_createJsGraphicsWrapper_size835;
                      obj819.mutable = true;
                      setLineNumber(481);    // compilenode num
                      obj819.data["sides"] = new GraceNum(5);
                      var reader_createJsGraphicsWrapper_sides836 = function() {
                        return this.data["sides"];
                      };
                      obj819.methods["sides"] = reader_createJsGraphicsWrapper_sides836;
                      obj819.data["sides"] = new GraceNum(5);
                      var writer_createJsGraphicsWrapper_sides836 = function(argcv, o) {
                        this.data["sides"] = o;
                        return GraceDone;
                      };
                      obj819.methods["sides:=(1)"] = writer_createJsGraphicsWrapper_sides836;
                      obj819.mutable = true;
                      setLineNumber(482);    // compilenode num
                      obj819.data["pointSize"] = new GraceNum(2);
                      var reader_createJsGraphicsWrapper_pointSize837 = function() {
                        return this.data["pointSize"];
                      };
                      obj819.methods["pointSize"] = reader_createJsGraphicsWrapper_pointSize837;
                      obj819.data["pointSize"] = new GraceNum(2);
                      var writer_createJsGraphicsWrapper_pointSize837 = function(argcv, o) {
                        this.data["pointSize"] = o;
                        return GraceDone;
                      };
                      obj819.methods["pointSize:=(1)"] = writer_createJsGraphicsWrapper_pointSize837;
                      obj819.mutable = true;
                      setLineNumber(484);    // compilenode call
                      // call case 6: other requests
                      setLineNumber(483);    // compilenode num
                      var call839 = callmethodChecked(new GraceNum(90), "prefix-", [0]);
                      obj819.data["angle"] = call839;
                      var reader_createJsGraphicsWrapper_angle840 = function() {
                        return this.data["angle"];
                      };
                      obj819.methods["angle"] = reader_createJsGraphicsWrapper_angle840;
                      obj819.data["angle"] = call839;
                      var writer_createJsGraphicsWrapper_angle840 = function(argcv, o) {
                        this.data["angle"] = o;
                        return GraceDone;
                      };
                      obj819.methods["angle:=(1)"] = writer_createJsGraphicsWrapper_angle840;
                      obj819.mutable = true;
                      superDepth = origSuperDepth;
                    };
                    obj_init_819.apply(inheritingObject, []);
                    return obj819;
                    };
                    this.methods["polyStar$object(1)"] = func818;
                  setLineNumber(501);    // compilenode method
                  var func841 = function(argcv) {    // method roundRect
                    var returnTarget = invocationCount;
                    invocationCount++;
                    var curarg = 1;
                    setModuleName("createJsGraphicsWrapper");
                    var obj842 = Grace_allocObject(null, "roundRect");
                    obj842.definitionModule = "createJsGraphicsWrapper";
                    obj842.definitionLine = 501;
                    obj842.outer = this;
                    var reader_createJsGraphicsWrapper_outer843 = function() {
                      return this.outer;
                    };
                    obj842.methods["outer"] = reader_createJsGraphicsWrapper_outer843;
                    var obj_init_842 = function() {
                      var origSuperDepth = superDepth;
                      superDepth = obj842;
                      var func844 = function(argcv) {    // method draw(_,_,_)
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var curarg = 1;
                        var var_width__39__ = arguments[curarg];
                        curarg++;
                        var var_height__39__ = arguments[curarg];
                        curarg++;
                        var var_radius__39__ = arguments[curarg];
                        curarg++;
                        setModuleName("createJsGraphicsWrapper");
                        setLineNumber(507);    // compilenode identifier
                        // call case 4: self request
                        onSelf = true;
                        var call846 = callmethodChecked(this, "width:=(1)", [1], var_width__39__);
                        setLineNumber(508);    // compilenode identifier
                        // call case 4: self request
                        onSelf = true;
                        var call848 = callmethodChecked(this, "height:=(1)", [1], var_height__39__);
                        setLineNumber(509);    // compilenode identifier
                        // call case 4: self request
                        onSelf = true;
                        var call850 = callmethodChecked(this, "radius:=(1)", [1], var_radius__39__);
                        setLineNumber(511);    // compilenode call
                           // start native code from line 511
                        var result = GraceDone;
                        
              var x = this.data.location.data.x._value;
              var y = this.data.location.data.y._value;
              var height = this.data.height._value
              var width = this.data.width._value
              var radius = this.data.radius._value
              this.data.createJsGraphics.graphics.drawRoundRect(x, y, width, height, radius);
        
                        var nat851 = result;
                           // end native code insertion
                        return nat851;
                      };
                      func844.paramCounts = [3];
                      obj842.methods["draw(3)"] = func844;
                      func844.definitionLine = 506;
                      func844.definitionModule = "createJsGraphicsWrapper";
                      setLineNumber(502);    // compilenode identifier
                      // call case 6: other requests
                      // call case 3: self.outer request
                      var call854 = callmethodChecked(superDepth, "outer", [0]);
                      var call855 = callmethodChecked(call854, "shape$object(1)", [0, 1], this);
                      obj842.superobj = call855;
                      if (call855.data) obj842.data = call855.data;
                      if (call855.hasOwnProperty('_value'))
                          obj842._value = call855._value;
                      obj842.data["height"] = undefined;
                      var reader_createJsGraphicsWrapper_height856 = function() {
                        return this.data["height"];
                      };
                      obj842.methods["height"] = reader_createJsGraphicsWrapper_height856;
                      obj842.data["height"] = undefined;
                      var writer_createJsGraphicsWrapper_height856 = function(argcv, o) {
                        this.data["height"] = o;
                        return GraceDone;
                      };
                      obj842.methods["height:=(1)"] = writer_createJsGraphicsWrapper_height856;
                      reader_createJsGraphicsWrapper_height856.confidential = true;
                      writer_createJsGraphicsWrapper_height856.confidential = true;
                      obj842.mutable = true;
                      obj842.data["width"] = undefined;
                      var reader_createJsGraphicsWrapper_width857 = function() {
                        return this.data["width"];
                      };
                      obj842.methods["width"] = reader_createJsGraphicsWrapper_width857;
                      obj842.data["width"] = undefined;
                      var writer_createJsGraphicsWrapper_width857 = function(argcv, o) {
                        this.data["width"] = o;
                        return GraceDone;
                      };
                      obj842.methods["width:=(1)"] = writer_createJsGraphicsWrapper_width857;
                      reader_createJsGraphicsWrapper_width857.confidential = true;
                      writer_createJsGraphicsWrapper_width857.confidential = true;
                      obj842.mutable = true;
                      setLineNumber(505);    // compilenode num
                      obj842.data["radius"] = new GraceNum(15);
                      var reader_createJsGraphicsWrapper_radius858 = function() {
                        return this.data["radius"];
                      };
                      obj842.methods["radius"] = reader_createJsGraphicsWrapper_radius858;
                      obj842.data["radius"] = new GraceNum(15);
                      var writer_createJsGraphicsWrapper_radius858 = function(argcv, o) {
                        this.data["radius"] = o;
                        return GraceDone;
                      };
                      obj842.methods["radius:=(1)"] = writer_createJsGraphicsWrapper_radius858;
                      obj842.mutable = true;
                      superDepth = origSuperDepth;
                    };
                    obj_init_842.apply(obj842, []);
                    return obj842;
                  };
                  func841.paramCounts = [0];
                  this.methods["roundRect"] = func841;
                  func841.definitionLine = 501;
                  func841.definitionModule = "createJsGraphicsWrapper";
                    var func859 = function(argcv) {    // method roundRect$object(_)
                      var curarg = 1;
                      var inheritingObject = arguments[curarg++];
                      // Start argument processing
                      curarg = 1;
                      // End argument processing
                      setModuleName("createJsGraphicsWrapper");
                      var returnTarget = invocationCount;
                      invocationCount++;
                      var obj860 = Grace_allocObject(null, "roundRect");
                      obj860.definitionModule = "createJsGraphicsWrapper";
                      obj860.definitionLine = 501;
                      var inho860 = inheritingObject;
                      while (inho860.superobj) inho860 = inho860.superobj;
                      inho860.superobj = obj860;
                      obj860.data = inheritingObject.data;
                      if (inheritingObject.hasOwnProperty('_value'))
                        obj860._value = inheritingObject._value;
                      obj860.outer = this;
                      var reader_createJsGraphicsWrapper_outer861 = function() {
                        return this.outer;
                      };
                      obj860.methods["outer"] = reader_createJsGraphicsWrapper_outer861;
                      var obj_init_860 = function() {
                        var origSuperDepth = superDepth;
                        superDepth = obj860;
                        var func862 = function(argcv) {    // method draw(_,_,_)
                          var returnTarget = invocationCount;
                          invocationCount++;
                          var curarg = 1;
                          var var_width__39__ = arguments[curarg];
                          curarg++;
                          var var_height__39__ = arguments[curarg];
                          curarg++;
                          var var_radius__39__ = arguments[curarg];
                          curarg++;
                          setModuleName("createJsGraphicsWrapper");
                          setLineNumber(507);    // compilenode identifier
                          // call case 4: self request
                          onSelf = true;
                          var call864 = callmethodChecked(this, "width:=(1)", [1], var_width__39__);
                          setLineNumber(508);    // compilenode identifier
                          // call case 4: self request
                          onSelf = true;
                          var call866 = callmethodChecked(this, "height:=(1)", [1], var_height__39__);
                          setLineNumber(509);    // compilenode identifier
                          // call case 4: self request
                          onSelf = true;
                          var call868 = callmethodChecked(this, "radius:=(1)", [1], var_radius__39__);
                          setLineNumber(511);    // compilenode call
                             // start native code from line 511
                          var result = GraceDone;
                          
              var x = this.data.location.data.x._value;
              var y = this.data.location.data.y._value;
              var height = this.data.height._value
              var width = this.data.width._value
              var radius = this.data.radius._value
              this.data.createJsGraphics.graphics.drawRoundRect(x, y, width, height, radius);
        
                          var nat869 = result;
                             // end native code insertion
                          return nat869;
                        };
                        func862.paramCounts = [3];
                        obj860.methods["draw(3)"] = func862;
                        func862.definitionLine = 506;
                        func862.definitionModule = "createJsGraphicsWrapper";
                        setLineNumber(502);    // compilenode identifier
                        // call case 6: other requests
                        // call case 3: self.outer request
                        var call872 = callmethodChecked(superDepth, "outer", [0]);
                        var call873 = callmethodChecked(call872, "shape$object(1)", [0, 1], this);
                        obj860.superobj = call873;
                        if (call873.data) obj860.data = call873.data;
                        if (call873.hasOwnProperty('_value'))
                            obj860._value = call873._value;
                        obj860.data["height"] = undefined;
                        var reader_createJsGraphicsWrapper_height874 = function() {
                          return this.data["height"];
                        };
                        obj860.methods["height"] = reader_createJsGraphicsWrapper_height874;
                        obj860.data["height"] = undefined;
                        var writer_createJsGraphicsWrapper_height874 = function(argcv, o) {
                          this.data["height"] = o;
                          return GraceDone;
                        };
                        obj860.methods["height:=(1)"] = writer_createJsGraphicsWrapper_height874;
                        reader_createJsGraphicsWrapper_height874.confidential = true;
                        writer_createJsGraphicsWrapper_height874.confidential = true;
                        obj860.mutable = true;
                        obj860.data["width"] = undefined;
                        var reader_createJsGraphicsWrapper_width875 = function() {
                          return this.data["width"];
                        };
                        obj860.methods["width"] = reader_createJsGraphicsWrapper_width875;
                        obj860.data["width"] = undefined;
                        var writer_createJsGraphicsWrapper_width875 = function(argcv, o) {
                          this.data["width"] = o;
                          return GraceDone;
                        };
                        obj860.methods["width:=(1)"] = writer_createJsGraphicsWrapper_width875;
                        reader_createJsGraphicsWrapper_width875.confidential = true;
                        writer_createJsGraphicsWrapper_width875.confidential = true;
                        obj860.mutable = true;
                        setLineNumber(505);    // compilenode num
                        obj860.data["radius"] = new GraceNum(15);
                        var reader_createJsGraphicsWrapper_radius876 = function() {
                          return this.data["radius"];
                        };
                        obj860.methods["radius"] = reader_createJsGraphicsWrapper_radius876;
                        obj860.data["radius"] = new GraceNum(15);
                        var writer_createJsGraphicsWrapper_radius876 = function(argcv, o) {
                          this.data["radius"] = o;
                          return GraceDone;
                        };
                        obj860.methods["radius:=(1)"] = writer_createJsGraphicsWrapper_radius876;
                        obj860.mutable = true;
                        superDepth = origSuperDepth;
                      };
                      obj_init_860.apply(inheritingObject, []);
                      return obj860;
                      };
                      this.methods["roundRect$object(1)"] = func859;
                    setLineNumber(522);    // compilenode method
                    var func877 = function(argcv) {    // method ellipse
                      var returnTarget = invocationCount;
                      invocationCount++;
                      var curarg = 1;
                      setModuleName("createJsGraphicsWrapper");
                      var obj878 = Grace_allocObject(null, "ellipse");
                      obj878.definitionModule = "createJsGraphicsWrapper";
                      obj878.definitionLine = 522;
                      obj878.outer = this;
                      var reader_createJsGraphicsWrapper_outer879 = function() {
                        return this.outer;
                      };
                      obj878.methods["outer"] = reader_createJsGraphicsWrapper_outer879;
                      var obj_init_878 = function() {
                        var origSuperDepth = superDepth;
                        superDepth = obj878;
                        var func880 = function(argcv) {    // method draw(_,_)
                          var returnTarget = invocationCount;
                          invocationCount++;
                          var curarg = 1;
                          var var_width__39__ = arguments[curarg];
                          curarg++;
                          var var_height__39__ = arguments[curarg];
                          curarg++;
                          setModuleName("createJsGraphicsWrapper");
                          setLineNumber(527);    // compilenode identifier
                          // call case 4: self request
                          onSelf = true;
                          var call882 = callmethodChecked(this, "height:=(1)", [1], var_height__39__);
                          setLineNumber(528);    // compilenode identifier
                          // call case 4: self request
                          onSelf = true;
                          var call884 = callmethodChecked(this, "width:=(1)", [1], var_width__39__);
                          setLineNumber(529);    // compilenode call
                             // start native code from line 529
                          var result = GraceDone;
                          
              var x = this.data.location.data.x._value;
              var y = this.data.location.data.y._value;
              var height = this.data.height._value
              var width = this.data.width._value
              this.data.createJsGraphics.graphics.drawEllipse(x, y, width, height);
        
                          var nat885 = result;
                             // end native code insertion
                          return nat885;
                        };
                        func880.paramCounts = [2];
                        obj878.methods["draw(2)"] = func880;
                        func880.definitionLine = 526;
                        func880.definitionModule = "createJsGraphicsWrapper";
                        setLineNumber(523);    // compilenode identifier
                        // call case 6: other requests
                        // call case 3: self.outer request
                        var call888 = callmethodChecked(superDepth, "outer", [0]);
                        var call889 = callmethodChecked(call888, "shape$object(1)", [0, 1], this);
                        obj878.superobj = call889;
                        if (call889.data) obj878.data = call889.data;
                        if (call889.hasOwnProperty('_value'))
                            obj878._value = call889._value;
                        obj878.data["height"] = undefined;
                        var reader_createJsGraphicsWrapper_height890 = function() {
                          return this.data["height"];
                        };
                        obj878.methods["height"] = reader_createJsGraphicsWrapper_height890;
                        obj878.data["height"] = undefined;
                        var writer_createJsGraphicsWrapper_height890 = function(argcv, o) {
                          this.data["height"] = o;
                          return GraceDone;
                        };
                        obj878.methods["height:=(1)"] = writer_createJsGraphicsWrapper_height890;
                        reader_createJsGraphicsWrapper_height890.confidential = true;
                        writer_createJsGraphicsWrapper_height890.confidential = true;
                        obj878.mutable = true;
                        obj878.data["width"] = undefined;
                        var reader_createJsGraphicsWrapper_width891 = function() {
                          return this.data["width"];
                        };
                        obj878.methods["width"] = reader_createJsGraphicsWrapper_width891;
                        obj878.data["width"] = undefined;
                        var writer_createJsGraphicsWrapper_width891 = function(argcv, o) {
                          this.data["width"] = o;
                          return GraceDone;
                        };
                        obj878.methods["width:=(1)"] = writer_createJsGraphicsWrapper_width891;
                        reader_createJsGraphicsWrapper_width891.confidential = true;
                        writer_createJsGraphicsWrapper_width891.confidential = true;
                        obj878.mutable = true;
                        superDepth = origSuperDepth;
                      };
                      obj_init_878.apply(obj878, []);
                      return obj878;
                    };
                    func877.paramCounts = [0];
                    this.methods["ellipse"] = func877;
                    func877.definitionLine = 522;
                    func877.definitionModule = "createJsGraphicsWrapper";
                      var func892 = function(argcv) {    // method ellipse$object(_)
                        var curarg = 1;
                        var inheritingObject = arguments[curarg++];
                        // Start argument processing
                        curarg = 1;
                        // End argument processing
                        setModuleName("createJsGraphicsWrapper");
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var obj893 = Grace_allocObject(null, "ellipse");
                        obj893.definitionModule = "createJsGraphicsWrapper";
                        obj893.definitionLine = 522;
                        var inho893 = inheritingObject;
                        while (inho893.superobj) inho893 = inho893.superobj;
                        inho893.superobj = obj893;
                        obj893.data = inheritingObject.data;
                        if (inheritingObject.hasOwnProperty('_value'))
                          obj893._value = inheritingObject._value;
                        obj893.outer = this;
                        var reader_createJsGraphicsWrapper_outer894 = function() {
                          return this.outer;
                        };
                        obj893.methods["outer"] = reader_createJsGraphicsWrapper_outer894;
                        var obj_init_893 = function() {
                          var origSuperDepth = superDepth;
                          superDepth = obj893;
                          var func895 = function(argcv) {    // method draw(_,_)
                            var returnTarget = invocationCount;
                            invocationCount++;
                            var curarg = 1;
                            var var_width__39__ = arguments[curarg];
                            curarg++;
                            var var_height__39__ = arguments[curarg];
                            curarg++;
                            setModuleName("createJsGraphicsWrapper");
                            setLineNumber(527);    // compilenode identifier
                            // call case 4: self request
                            onSelf = true;
                            var call897 = callmethodChecked(this, "height:=(1)", [1], var_height__39__);
                            setLineNumber(528);    // compilenode identifier
                            // call case 4: self request
                            onSelf = true;
                            var call899 = callmethodChecked(this, "width:=(1)", [1], var_width__39__);
                            setLineNumber(529);    // compilenode call
                               // start native code from line 529
                            var result = GraceDone;
                            
              var x = this.data.location.data.x._value;
              var y = this.data.location.data.y._value;
              var height = this.data.height._value
              var width = this.data.width._value
              this.data.createJsGraphics.graphics.drawEllipse(x, y, width, height);
        
                            var nat900 = result;
                               // end native code insertion
                            return nat900;
                          };
                          func895.paramCounts = [2];
                          obj893.methods["draw(2)"] = func895;
                          func895.definitionLine = 526;
                          func895.definitionModule = "createJsGraphicsWrapper";
                          setLineNumber(523);    // compilenode identifier
                          // call case 6: other requests
                          // call case 3: self.outer request
                          var call903 = callmethodChecked(superDepth, "outer", [0]);
                          var call904 = callmethodChecked(call903, "shape$object(1)", [0, 1], this);
                          obj893.superobj = call904;
                          if (call904.data) obj893.data = call904.data;
                          if (call904.hasOwnProperty('_value'))
                              obj893._value = call904._value;
                          obj893.data["height"] = undefined;
                          var reader_createJsGraphicsWrapper_height905 = function() {
                            return this.data["height"];
                          };
                          obj893.methods["height"] = reader_createJsGraphicsWrapper_height905;
                          obj893.data["height"] = undefined;
                          var writer_createJsGraphicsWrapper_height905 = function(argcv, o) {
                            this.data["height"] = o;
                            return GraceDone;
                          };
                          obj893.methods["height:=(1)"] = writer_createJsGraphicsWrapper_height905;
                          reader_createJsGraphicsWrapper_height905.confidential = true;
                          writer_createJsGraphicsWrapper_height905.confidential = true;
                          obj893.mutable = true;
                          obj893.data["width"] = undefined;
                          var reader_createJsGraphicsWrapper_width906 = function() {
                            return this.data["width"];
                          };
                          obj893.methods["width"] = reader_createJsGraphicsWrapper_width906;
                          obj893.data["width"] = undefined;
                          var writer_createJsGraphicsWrapper_width906 = function(argcv, o) {
                            this.data["width"] = o;
                            return GraceDone;
                          };
                          obj893.methods["width:=(1)"] = writer_createJsGraphicsWrapper_width906;
                          reader_createJsGraphicsWrapper_width906.confidential = true;
                          writer_createJsGraphicsWrapper_width906.confidential = true;
                          obj893.mutable = true;
                          superDepth = origSuperDepth;
                        };
                        obj_init_893.apply(inheritingObject, []);
                        return obj893;
                        };
                        this.methods["ellipse$object(1)"] = func892;
                      setLineNumber(539);    // compilenode method
                      var func907 = function(argcv) {    // method arc
                        var returnTarget = invocationCount;
                        invocationCount++;
                        var curarg = 1;
                        setModuleName("createJsGraphicsWrapper");
                        var obj908 = Grace_allocObject(null, "arc");
                        obj908.definitionModule = "createJsGraphicsWrapper";
                        obj908.definitionLine = 539;
                        obj908.outer = this;
                        var reader_createJsGraphicsWrapper_outer909 = function() {
                          return this.outer;
                        };
                        obj908.methods["outer"] = reader_createJsGraphicsWrapper_outer909;
                        var obj_init_908 = function() {
                          var origSuperDepth = superDepth;
                          superDepth = obj908;
                          var func910 = function(argcv) {    // method draw(_,_,_,_)
                            var returnTarget = invocationCount;
                            invocationCount++;
                            var curarg = 1;
                            var var_radius__39__ = arguments[curarg];
                            curarg++;
                            var var_startAngle__39__ = arguments[curarg];
                            curarg++;
                            var var_endAngle__39__ = arguments[curarg];
                            curarg++;
                            var var_anticlockwise__39__ = arguments[curarg];
                            curarg++;
                            setModuleName("createJsGraphicsWrapper");
                            setLineNumber(547);    // compilenode identifier
                            // call case 4: self request
                            onSelf = true;
                            var call912 = callmethodChecked(this, "radius:=(1)", [1], var_radius__39__);
                            setLineNumber(548);    // compilenode identifier
                            // call case 4: self request
                            onSelf = true;
                            var call914 = callmethodChecked(this, "startAngle:=(1)", [1], var_startAngle__39__);
                            setLineNumber(549);    // compilenode identifier
                            // call case 4: self request
                            onSelf = true;
                            var call916 = callmethodChecked(this, "endAngle:=(1)", [1], var_endAngle__39__);
                            setLineNumber(550);    // compilenode identifier
                            // call case 4: self request
                            onSelf = true;
                            var call918 = callmethodChecked(this, "anticlockwise:=(1)", [1], var_anticlockwise__39__);
                            setLineNumber(551);    // compilenode call
                               // start native code from line 551
                            var result = GraceDone;
                            
              var x = this.data.location.data.x._value;
              var y = this.data.location.data.y._value;
              var radius = this.data.radius._value;
              var startAngle = this.data.startAngle._value;
              var endAngle = this.data.endAngle._value;
              startAngle = startAngle * Math.PI / 180;
              endAngle = endAngle * Math.PI / 180;
              var anticlockwise = this.data.anticlockwise._value

        this.data.createJsGraphics.graphics.arc(x, y, radius, startAngle, endAngle, anticlockwise);
        
                            var nat919 = result;
                               // end native code insertion
                            return nat919;
                          };
                          func910.paramCounts = [4];
                          obj908.methods["draw(4)"] = func910;
                          func910.definitionLine = 546;
                          func910.definitionModule = "createJsGraphicsWrapper";
                          setLineNumber(540);    // compilenode identifier
                          // call case 6: other requests
                          // call case 3: self.outer request
                          var call922 = callmethodChecked(superDepth, "outer", [0]);
                          var call923 = callmethodChecked(call922, "shape$object(1)", [0, 1], this);
                          obj908.superobj = call923;
                          if (call923.data) obj908.data = call923.data;
                          if (call923.hasOwnProperty('_value'))
                              obj908._value = call923._value;
                          obj908.data["radius"] = undefined;
                          var reader_createJsGraphicsWrapper_radius924 = function() {
                            return this.data["radius"];
                          };
                          obj908.methods["radius"] = reader_createJsGraphicsWrapper_radius924;
                          obj908.data["radius"] = undefined;
                          var writer_createJsGraphicsWrapper_radius924 = function(argcv, o) {
                            this.data["radius"] = o;
                            return GraceDone;
                          };
                          obj908.methods["radius:=(1)"] = writer_createJsGraphicsWrapper_radius924;
                          reader_createJsGraphicsWrapper_radius924.confidential = true;
                          writer_createJsGraphicsWrapper_radius924.confidential = true;
                          obj908.mutable = true;
                          obj908.data["startAngle"] = undefined;
                          var reader_createJsGraphicsWrapper_startAngle925 = function() {
                            return this.data["startAngle"];
                          };
                          obj908.methods["startAngle"] = reader_createJsGraphicsWrapper_startAngle925;
                          obj908.data["startAngle"] = undefined;
                          var writer_createJsGraphicsWrapper_startAngle925 = function(argcv, o) {
                            this.data["startAngle"] = o;
                            return GraceDone;
                          };
                          obj908.methods["startAngle:=(1)"] = writer_createJsGraphicsWrapper_startAngle925;
                          reader_createJsGraphicsWrapper_startAngle925.confidential = true;
                          writer_createJsGraphicsWrapper_startAngle925.confidential = true;
                          obj908.mutable = true;
                          obj908.data["endAngle"] = undefined;
                          var reader_createJsGraphicsWrapper_endAngle926 = function() {
                            return this.data["endAngle"];
                          };
                          obj908.methods["endAngle"] = reader_createJsGraphicsWrapper_endAngle926;
                          obj908.data["endAngle"] = undefined;
                          var writer_createJsGraphicsWrapper_endAngle926 = function(argcv, o) {
                            this.data["endAngle"] = o;
                            return GraceDone;
                          };
                          obj908.methods["endAngle:=(1)"] = writer_createJsGraphicsWrapper_endAngle926;
                          reader_createJsGraphicsWrapper_endAngle926.confidential = true;
                          writer_createJsGraphicsWrapper_endAngle926.confidential = true;
                          obj908.mutable = true;
                          obj908.data["anticlockwise"] = undefined;
                          var reader_createJsGraphicsWrapper_anticlockwise927 = function() {
                            return this.data["anticlockwise"];
                          };
                          obj908.methods["anticlockwise"] = reader_createJsGraphicsWrapper_anticlockwise927;
                          obj908.data["anticlockwise"] = undefined;
                          var writer_createJsGraphicsWrapper_anticlockwise927 = function(argcv, o) {
                            this.data["anticlockwise"] = o;
                            return GraceDone;
                          };
                          obj908.methods["anticlockwise:=(1)"] = writer_createJsGraphicsWrapper_anticlockwise927;
                          reader_createJsGraphicsWrapper_anticlockwise927.confidential = true;
                          writer_createJsGraphicsWrapper_anticlockwise927.confidential = true;
                          obj908.mutable = true;
                          superDepth = origSuperDepth;
                        };
                        obj_init_908.apply(obj908, []);
                        return obj908;
                      };
                      func907.paramCounts = [0];
                      this.methods["arc"] = func907;
                      func907.definitionLine = 539;
                      func907.definitionModule = "createJsGraphicsWrapper";
                        var func928 = function(argcv) {    // method arc$object(_)
                          var curarg = 1;
                          var inheritingObject = arguments[curarg++];
                          // Start argument processing
                          curarg = 1;
                          // End argument processing
                          setModuleName("createJsGraphicsWrapper");
                          var returnTarget = invocationCount;
                          invocationCount++;
                          var obj929 = Grace_allocObject(null, "arc");
                          obj929.definitionModule = "createJsGraphicsWrapper";
                          obj929.definitionLine = 539;
                          var inho929 = inheritingObject;
                          while (inho929.superobj) inho929 = inho929.superobj;
                          inho929.superobj = obj929;
                          obj929.data = inheritingObject.data;
                          if (inheritingObject.hasOwnProperty('_value'))
                            obj929._value = inheritingObject._value;
                          obj929.outer = this;
                          var reader_createJsGraphicsWrapper_outer930 = function() {
                            return this.outer;
                          };
                          obj929.methods["outer"] = reader_createJsGraphicsWrapper_outer930;
                          var obj_init_929 = function() {
                            var origSuperDepth = superDepth;
                            superDepth = obj929;
                            var func931 = function(argcv) {    // method draw(_,_,_,_)
                              var returnTarget = invocationCount;
                              invocationCount++;
                              var curarg = 1;
                              var var_radius__39__ = arguments[curarg];
                              curarg++;
                              var var_startAngle__39__ = arguments[curarg];
                              curarg++;
                              var var_endAngle__39__ = arguments[curarg];
                              curarg++;
                              var var_anticlockwise__39__ = arguments[curarg];
                              curarg++;
                              setModuleName("createJsGraphicsWrapper");
                              setLineNumber(547);    // compilenode identifier
                              // call case 4: self request
                              onSelf = true;
                              var call933 = callmethodChecked(this, "radius:=(1)", [1], var_radius__39__);
                              setLineNumber(548);    // compilenode identifier
                              // call case 4: self request
                              onSelf = true;
                              var call935 = callmethodChecked(this, "startAngle:=(1)", [1], var_startAngle__39__);
                              setLineNumber(549);    // compilenode identifier
                              // call case 4: self request
                              onSelf = true;
                              var call937 = callmethodChecked(this, "endAngle:=(1)", [1], var_endAngle__39__);
                              setLineNumber(550);    // compilenode identifier
                              // call case 4: self request
                              onSelf = true;
                              var call939 = callmethodChecked(this, "anticlockwise:=(1)", [1], var_anticlockwise__39__);
                              setLineNumber(551);    // compilenode call
                                 // start native code from line 551
                              var result = GraceDone;
                              
              var x = this.data.location.data.x._value;
              var y = this.data.location.data.y._value;
              var radius = this.data.radius._value;
              var startAngle = this.data.startAngle._value;
              var endAngle = this.data.endAngle._value;
              startAngle = startAngle * Math.PI / 180;
              endAngle = endAngle * Math.PI / 180;
              var anticlockwise = this.data.anticlockwise._value

        this.data.createJsGraphics.graphics.arc(x, y, radius, startAngle, endAngle, anticlockwise);
        
                              var nat940 = result;
                                 // end native code insertion
                              return nat940;
                            };
                            func931.paramCounts = [4];
                            obj929.methods["draw(4)"] = func931;
                            func931.definitionLine = 546;
                            func931.definitionModule = "createJsGraphicsWrapper";
                            setLineNumber(540);    // compilenode identifier
                            // call case 6: other requests
                            // call case 3: self.outer request
                            var call943 = callmethodChecked(superDepth, "outer", [0]);
                            var call944 = callmethodChecked(call943, "shape$object(1)", [0, 1], this);
                            obj929.superobj = call944;
                            if (call944.data) obj929.data = call944.data;
                            if (call944.hasOwnProperty('_value'))
                                obj929._value = call944._value;
                            obj929.data["radius"] = undefined;
                            var reader_createJsGraphicsWrapper_radius945 = function() {
                              return this.data["radius"];
                            };
                            obj929.methods["radius"] = reader_createJsGraphicsWrapper_radius945;
                            obj929.data["radius"] = undefined;
                            var writer_createJsGraphicsWrapper_radius945 = function(argcv, o) {
                              this.data["radius"] = o;
                              return GraceDone;
                            };
                            obj929.methods["radius:=(1)"] = writer_createJsGraphicsWrapper_radius945;
                            reader_createJsGraphicsWrapper_radius945.confidential = true;
                            writer_createJsGraphicsWrapper_radius945.confidential = true;
                            obj929.mutable = true;
                            obj929.data["startAngle"] = undefined;
                            var reader_createJsGraphicsWrapper_startAngle946 = function() {
                              return this.data["startAngle"];
                            };
                            obj929.methods["startAngle"] = reader_createJsGraphicsWrapper_startAngle946;
                            obj929.data["startAngle"] = undefined;
                            var writer_createJsGraphicsWrapper_startAngle946 = function(argcv, o) {
                              this.data["startAngle"] = o;
                              return GraceDone;
                            };
                            obj929.methods["startAngle:=(1)"] = writer_createJsGraphicsWrapper_startAngle946;
                            reader_createJsGraphicsWrapper_startAngle946.confidential = true;
                            writer_createJsGraphicsWrapper_startAngle946.confidential = true;
                            obj929.mutable = true;
                            obj929.data["endAngle"] = undefined;
                            var reader_createJsGraphicsWrapper_endAngle947 = function() {
                              return this.data["endAngle"];
                            };
                            obj929.methods["endAngle"] = reader_createJsGraphicsWrapper_endAngle947;
                            obj929.data["endAngle"] = undefined;
                            var writer_createJsGraphicsWrapper_endAngle947 = function(argcv, o) {
                              this.data["endAngle"] = o;
                              return GraceDone;
                            };
                            obj929.methods["endAngle:=(1)"] = writer_createJsGraphicsWrapper_endAngle947;
                            reader_createJsGraphicsWrapper_endAngle947.confidential = true;
                            writer_createJsGraphicsWrapper_endAngle947.confidential = true;
                            obj929.mutable = true;
                            obj929.data["anticlockwise"] = undefined;
                            var reader_createJsGraphicsWrapper_anticlockwise948 = function() {
                              return this.data["anticlockwise"];
                            };
                            obj929.methods["anticlockwise"] = reader_createJsGraphicsWrapper_anticlockwise948;
                            obj929.data["anticlockwise"] = undefined;
                            var writer_createJsGraphicsWrapper_anticlockwise948 = function(argcv, o) {
                              this.data["anticlockwise"] = o;
                              return GraceDone;
                            };
                            obj929.methods["anticlockwise:=(1)"] = writer_createJsGraphicsWrapper_anticlockwise948;
                            reader_createJsGraphicsWrapper_anticlockwise948.confidential = true;
                            writer_createJsGraphicsWrapper_anticlockwise948.confidential = true;
                            obj929.mutable = true;
                            superDepth = origSuperDepth;
                          };
                          obj_init_929.apply(inheritingObject, []);
                          return obj929;
                          };
                          this.methods["arc$object(1)"] = func928;
                        setLineNumber(566);    // compilenode method
                        var func949 = function(argcv) {    // method text
                          var returnTarget = invocationCount;
                          invocationCount++;
                          var curarg = 1;
                          setModuleName("createJsGraphicsWrapper");
                          var obj950 = Grace_allocObject(null, "text");
                          obj950.definitionModule = "createJsGraphicsWrapper";
                          obj950.definitionLine = 566;
                          obj950.outer = this;
                          var reader_createJsGraphicsWrapper_outer951 = function() {
                            return this.outer;
                          };
                          obj950.methods["outer"] = reader_createJsGraphicsWrapper_outer951;
                          var obj_init_950 = function() {
                            var origSuperDepth = superDepth;
                            superDepth = obj950;
                            var func952 = function(argcv) {    // method new
                              var returnTarget = invocationCount;
                              invocationCount++;
                              var curarg = 1;
                              setModuleName("createJsGraphicsWrapper");
                              setLineNumber(572);    // compilenode num
                              return new GraceNum(0);
                            };
                            func952.paramCounts = [0];
                            obj950.methods["new"] = func952;
                            func952.definitionLine = 571;
                            func952.definitionModule = "createJsGraphicsWrapper";
                            var func953 = function(argcv) {    // method draw(_,_,_)
                              var returnTarget = invocationCount;
                              invocationCount++;
                              var curarg = 1;
                              var var_content__39__ = arguments[curarg];
                              curarg++;
                              var var_font__39__ = arguments[curarg];
                              curarg++;
                              var var_color__39__ = arguments[curarg];
                              curarg++;
                              setModuleName("createJsGraphicsWrapper");
                              setLineNumber(577);    // compilenode identifier
                              // call case 4: self request
                              onSelf = true;
                              var call956 = callmethodChecked(this, "innerDraw(3)", [3], var_content__39__, var_font__39__, var_color__39__);
                              // call case 4: self request
                              onSelf = true;
                              var call957 = callmethodChecked(this, "createJsGraphics:=(1)", [1], call956);
                              return call957;
                            };
                            func953.paramCounts = [3];
                            obj950.methods["draw(3)"] = func953;
                            func953.definitionLine = 576;
                            func953.definitionModule = "createJsGraphicsWrapper";
                            var func958 = function(argcv) {    // method width
                              var returnTarget = invocationCount;
                              invocationCount++;
                              var curarg = 1;
                              setModuleName("createJsGraphicsWrapper");
                              setLineNumber(581);    // compilenode call
                                 // start native code from line 581
                              var result = GraceDone;
                              
              var b = this.data.createJsGraphics.getBounds();
              return new GraceNum(b.width)
        
                              var nat959 = result;
                                 // end native code insertion
                              return nat959;
                            };
                            func958.paramCounts = [0];
                            obj950.methods["width"] = func958;
                            func958.definitionLine = 580;
                            func958.definitionModule = "createJsGraphicsWrapper";
                            var func960 = function(argcv) {    // method height
                              var returnTarget = invocationCount;
                              invocationCount++;
                              var curarg = 1;
                              setModuleName("createJsGraphicsWrapper");
                              setLineNumber(588);    // compilenode call
                                 // start native code from line 588
                              var result = GraceDone;
                              
              var b = this.data.createJsGraphics.getBounds();
              return new GraceNum(b.height)
        
                              var nat961 = result;
                                 // end native code insertion
                              return nat961;
                            };
                            func960.paramCounts = [0];
                            obj950.methods["height"] = func960;
                            func960.definitionLine = 587;
                            func960.definitionModule = "createJsGraphicsWrapper";
                            var func962 = function(argcv) {    // method innerDraw(_,_,_)
                              var returnTarget = invocationCount;
                              invocationCount++;
                              var curarg = 1;
                              var var_content__39__ = arguments[curarg];
                              curarg++;
                              var var_font__39__ = arguments[curarg];
                              curarg++;
                              var var_color__39__ = arguments[curarg];
                              curarg++;
                              setModuleName("createJsGraphicsWrapper");
                              setLineNumber(595);    // compilenode identifier
                              // call case 4: self request
                              onSelf = true;
                              var call964 = callmethodChecked(this, "color:=(1)", [1], var_color__39__);
                              setLineNumber(596);    // compilenode identifier
                              // call case 4: self request
                              onSelf = true;
                              var call966 = callmethodChecked(this, "content:=(1)", [1], var_content__39__);
                              setLineNumber(597);    // compilenode identifier
                              // call case 4: self request
                              onSelf = true;
                              var call968 = callmethodChecked(this, "font:=(1)", [1], var_font__39__);
                              setLineNumber(599);    // compilenode call
                                 // start native code from line 599
                              var result = GraceDone;
                              
              var color = this.data.color._value;
              var x = this.data.location.data.x._value;
              var y = this.data.location.data.y._value;
              var content = this.data.content._value;
              var font = this.data.font._value;
              var text = new createjs.Text(content, font, color);
              text.x = x;
              text.y = y;
              return text;
        
                              var nat969 = result;
                                 // end native code insertion
                              return nat969;
                            };
                            func962.confidential = true;
                            func962.paramCounts = [3];
                            obj950.methods["innerDraw(3)"] = func962;
                            func962.definitionLine = 594;
                            func962.definitionModule = "createJsGraphicsWrapper";
                            setLineNumber(567);    // compilenode identifier
                            // call case 6: other requests
                            // call case 3: self.outer request
                            var call972 = callmethodChecked(superDepth, "outer", [0]);
                            var call973 = callmethodChecked(call972, "commonGraphics$object(1)", [0, 1], this);
                            obj950.superobj = call973;
                            if (call973.data) obj950.data = call973.data;
                            if (call973.hasOwnProperty('_value'))
                                obj950._value = call973._value;
                            setLineNumber(569);    // compilenode string
                            var string974 = new GraceString("Did you forget to set text.content?");
                            obj950.data["content"] = string974;
                            var reader_createJsGraphicsWrapper_content975 = function() {
                              return this.data["content"];
                            };
                            obj950.methods["content"] = reader_createJsGraphicsWrapper_content975;
                            obj950.data["content"] = string974;
                            var writer_createJsGraphicsWrapper_content975 = function(argcv, o) {
                              this.data["content"] = o;
                              return GraceDone;
                            };
                            obj950.methods["content:=(1)"] = writer_createJsGraphicsWrapper_content975;
                            obj950.mutable = true;
                            setLineNumber(570);    // compilenode string
                            var string976 = new GraceString("12px Arial");
                            obj950.data["font"] = string976;
                            var reader_createJsGraphicsWrapper_font977 = function() {
                              return this.data["font"];
                            };
                            obj950.methods["font"] = reader_createJsGraphicsWrapper_font977;
                            obj950.data["font"] = string976;
                            var writer_createJsGraphicsWrapper_font977 = function(argcv, o) {
                              this.data["font"] = o;
                              return GraceDone;
                            };
                            obj950.methods["font:=(1)"] = writer_createJsGraphicsWrapper_font977;
                            obj950.mutable = true;
                            superDepth = origSuperDepth;
                          };
                          obj_init_950.apply(obj950, []);
                          return obj950;
                        };
                        func949.paramCounts = [0];
                        this.methods["text"] = func949;
                        func949.definitionLine = 566;
                        func949.definitionModule = "createJsGraphicsWrapper";
                          var func978 = function(argcv) {    // method text$object(_)
                            var curarg = 1;
                            var inheritingObject = arguments[curarg++];
                            // Start argument processing
                            curarg = 1;
                            // End argument processing
                            setModuleName("createJsGraphicsWrapper");
                            var returnTarget = invocationCount;
                            invocationCount++;
                            var obj979 = Grace_allocObject(null, "text");
                            obj979.definitionModule = "createJsGraphicsWrapper";
                            obj979.definitionLine = 566;
                            var inho979 = inheritingObject;
                            while (inho979.superobj) inho979 = inho979.superobj;
                            inho979.superobj = obj979;
                            obj979.data = inheritingObject.data;
                            if (inheritingObject.hasOwnProperty('_value'))
                              obj979._value = inheritingObject._value;
                            obj979.outer = this;
                            var reader_createJsGraphicsWrapper_outer980 = function() {
                              return this.outer;
                            };
                            obj979.methods["outer"] = reader_createJsGraphicsWrapper_outer980;
                            var obj_init_979 = function() {
                              var origSuperDepth = superDepth;
                              superDepth = obj979;
                              var func981 = function(argcv) {    // method new
                                var returnTarget = invocationCount;
                                invocationCount++;
                                var curarg = 1;
                                setModuleName("createJsGraphicsWrapper");
                                setLineNumber(572);    // compilenode num
                                return new GraceNum(0);
                              };
                              func981.paramCounts = [0];
                              obj979.methods["new"] = func981;
                              func981.definitionLine = 571;
                              func981.definitionModule = "createJsGraphicsWrapper";
                              var func982 = function(argcv) {    // method draw(_,_,_)
                                var returnTarget = invocationCount;
                                invocationCount++;
                                var curarg = 1;
                                var var_content__39__ = arguments[curarg];
                                curarg++;
                                var var_font__39__ = arguments[curarg];
                                curarg++;
                                var var_color__39__ = arguments[curarg];
                                curarg++;
                                setModuleName("createJsGraphicsWrapper");
                                setLineNumber(577);    // compilenode identifier
                                // call case 4: self request
                                onSelf = true;
                                var call985 = callmethodChecked(this, "innerDraw(3)", [3], var_content__39__, var_font__39__, var_color__39__);
                                // call case 4: self request
                                onSelf = true;
                                var call986 = callmethodChecked(this, "createJsGraphics:=(1)", [1], call985);
                                return call986;
                              };
                              func982.paramCounts = [3];
                              obj979.methods["draw(3)"] = func982;
                              func982.definitionLine = 576;
                              func982.definitionModule = "createJsGraphicsWrapper";
                              var func987 = function(argcv) {    // method width
                                var returnTarget = invocationCount;
                                invocationCount++;
                                var curarg = 1;
                                setModuleName("createJsGraphicsWrapper");
                                setLineNumber(581);    // compilenode call
                                   // start native code from line 581
                                var result = GraceDone;
                                
              var b = this.data.createJsGraphics.getBounds();
              return new GraceNum(b.width)
        
                                var nat988 = result;
                                   // end native code insertion
                                return nat988;
                              };
                              func987.paramCounts = [0];
                              obj979.methods["width"] = func987;
                              func987.definitionLine = 580;
                              func987.definitionModule = "createJsGraphicsWrapper";
                              var func989 = function(argcv) {    // method height
                                var returnTarget = invocationCount;
                                invocationCount++;
                                var curarg = 1;
                                setModuleName("createJsGraphicsWrapper");
                                setLineNumber(588);    // compilenode call
                                   // start native code from line 588
                                var result = GraceDone;
                                
              var b = this.data.createJsGraphics.getBounds();
              return new GraceNum(b.height)
        
                                var nat990 = result;
                                   // end native code insertion
                                return nat990;
                              };
                              func989.paramCounts = [0];
                              obj979.methods["height"] = func989;
                              func989.definitionLine = 587;
                              func989.definitionModule = "createJsGraphicsWrapper";
                              var func991 = function(argcv) {    // method innerDraw(_,_,_)
                                var returnTarget = invocationCount;
                                invocationCount++;
                                var curarg = 1;
                                var var_content__39__ = arguments[curarg];
                                curarg++;
                                var var_font__39__ = arguments[curarg];
                                curarg++;
                                var var_color__39__ = arguments[curarg];
                                curarg++;
                                setModuleName("createJsGraphicsWrapper");
                                setLineNumber(595);    // compilenode identifier
                                // call case 4: self request
                                onSelf = true;
                                var call993 = callmethodChecked(this, "color:=(1)", [1], var_color__39__);
                                setLineNumber(596);    // compilenode identifier
                                // call case 4: self request
                                onSelf = true;
                                var call995 = callmethodChecked(this, "content:=(1)", [1], var_content__39__);
                                setLineNumber(597);    // compilenode identifier
                                // call case 4: self request
                                onSelf = true;
                                var call997 = callmethodChecked(this, "font:=(1)", [1], var_font__39__);
                                setLineNumber(599);    // compilenode call
                                   // start native code from line 599
                                var result = GraceDone;
                                
              var color = this.data.color._value;
              var x = this.data.location.data.x._value;
              var y = this.data.location.data.y._value;
              var content = this.data.content._value;
              var font = this.data.font._value;
              var text = new createjs.Text(content, font, color);
              text.x = x;
              text.y = y;
              return text;
        
                                var nat998 = result;
                                   // end native code insertion
                                return nat998;
                              };
                              func991.confidential = true;
                              func991.paramCounts = [3];
                              obj979.methods["innerDraw(3)"] = func991;
                              func991.definitionLine = 594;
                              func991.definitionModule = "createJsGraphicsWrapper";
                              setLineNumber(567);    // compilenode identifier
                              // call case 6: other requests
                              // call case 3: self.outer request
                              var call1001 = callmethodChecked(superDepth, "outer", [0]);
                              var call1002 = callmethodChecked(call1001, "commonGraphics$object(1)", [0, 1], this);
                              obj979.superobj = call1002;
                              if (call1002.data) obj979.data = call1002.data;
                              if (call1002.hasOwnProperty('_value'))
                                  obj979._value = call1002._value;
                              setLineNumber(569);    // compilenode string
                              var string1003 = new GraceString("Did you forget to set text.content?");
                              obj979.data["content"] = string1003;
                              var reader_createJsGraphicsWrapper_content1004 = function() {
                                return this.data["content"];
                              };
                              obj979.methods["content"] = reader_createJsGraphicsWrapper_content1004;
                              obj979.data["content"] = string1003;
                              var writer_createJsGraphicsWrapper_content1004 = function(argcv, o) {
                                this.data["content"] = o;
                                return GraceDone;
                              };
                              obj979.methods["content:=(1)"] = writer_createJsGraphicsWrapper_content1004;
                              obj979.mutable = true;
                              setLineNumber(570);    // compilenode string
                              var string1005 = new GraceString("12px Arial");
                              obj979.data["font"] = string1005;
                              var reader_createJsGraphicsWrapper_font1006 = function() {
                                return this.data["font"];
                              };
                              obj979.methods["font"] = reader_createJsGraphicsWrapper_font1006;
                              obj979.data["font"] = string1005;
                              var writer_createJsGraphicsWrapper_font1006 = function(argcv, o) {
                                this.data["font"] = o;
                                return GraceDone;
                              };
                              obj979.methods["font:=(1)"] = writer_createJsGraphicsWrapper_font1006;
                              obj979.mutable = true;
                              superDepth = origSuperDepth;
                            };
                            obj_init_979.apply(inheritingObject, []);
                            return obj979;
                            };
                            this.methods["text$object(1)"] = func978;
                          setLineNumber(613);    // compilenode method
                          var func1007 = function(argcv) {    // method line
                            var returnTarget = invocationCount;
                            invocationCount++;
                            var curarg = 1;
                            setModuleName("createJsGraphicsWrapper");
                            var obj1008 = Grace_allocObject(null, "line");
                            obj1008.definitionModule = "createJsGraphicsWrapper";
                            obj1008.definitionLine = 613;
                            obj1008.outer = this;
                            var reader_createJsGraphicsWrapper_outer1009 = function() {
                              return this.outer;
                            };
                            obj1008.methods["outer"] = reader_createJsGraphicsWrapper_outer1009;
                            var obj_init_1008 = function() {
                              var origSuperDepth = superDepth;
                              superDepth = obj1008;
                              var func1010 = function(argcv) {    // method draw(_,_)
                                var returnTarget = invocationCount;
                                invocationCount++;
                                var curarg = 1;
                                var var_start__39__ = arguments[curarg];
                                curarg++;
                                var var_end__39__ = arguments[curarg];
                                curarg++;
                                setModuleName("createJsGraphicsWrapper");
                                setLineNumber(619);    // compilenode identifier
                                // call case 4: self request
                                onSelf = true;
                                var call1012 = callmethodChecked(this, "location:=(1)", [1], var_start__39__);
                                setLineNumber(620);    // compilenode identifier
                                // call case 4: self request
                                onSelf = true;
                                var call1014 = callmethodChecked(this, "start:=(1)", [1], var_start__39__);
                                setLineNumber(621);    // compilenode identifier
                                // call case 4: self request
                                onSelf = true;
                                var call1016 = callmethodChecked(this, "end:=(1)", [1], var_end__39__);
                                setLineNumber(622);    // compilenode call
                                   // start native code from line 622
                                var result = GraceDone;
                                
              var startX = this.data.start.data.x._value;
              var startY = this.data.start.data.y._value;
              var endX = this.data.end.data.x._value;
              var endY = this.data.end.data.y._value;
              this.data.createJsGraphics.graphics.moveTo(startX, startY).lineTo(endX,endY);
        
                                var nat1017 = result;
                                   // end native code insertion
                                return nat1017;
                              };
                              func1010.paramCounts = [2];
                              obj1008.methods["draw(2)"] = func1010;
                              func1010.definitionLine = 618;
                              func1010.definitionModule = "createJsGraphicsWrapper";
                              setLineNumber(614);    // compilenode identifier
                              // call case 6: other requests
                              // call case 3: self.outer request
                              var call1020 = callmethodChecked(superDepth, "outer", [0]);
                              var call1021 = callmethodChecked(call1020, "shape$object(1)", [0, 1], this);
                              obj1008.superobj = call1021;
                              if (call1021.data) obj1008.data = call1021.data;
                              if (call1021.hasOwnProperty('_value'))
                                  obj1008._value = call1021._value;
                              setLineNumber(615);    // compilenode num
                              var opresult1024 = callmethodChecked(new GraceNum(0), "@(1)", [1], new GraceNum(0));
                              obj1008.data["start"] = opresult1024;
                              var reader_createJsGraphicsWrapper_start1025 = function() {
                                return this.data["start"];
                              };
                              obj1008.methods["start"] = reader_createJsGraphicsWrapper_start1025;
                              obj1008.data["start"] = opresult1024;
                              var writer_createJsGraphicsWrapper_start1025 = function(argcv, o) {
                                this.data["start"] = o;
                                return GraceDone;
                              };
                              obj1008.methods["start:=(1)"] = writer_createJsGraphicsWrapper_start1025;
                              obj1008.mutable = true;
                              setLineNumber(616);    // compilenode num
                              var opresult1028 = callmethodChecked(new GraceNum(50), "@(1)", [1], new GraceNum(50));
                              obj1008.data["end"] = opresult1028;
                              var reader_createJsGraphicsWrapper_end1029 = function() {
                                return this.data["end"];
                              };
                              obj1008.methods["end"] = reader_createJsGraphicsWrapper_end1029;
                              obj1008.data["end"] = opresult1028;
                              var writer_createJsGraphicsWrapper_end1029 = function(argcv, o) {
                                this.data["end"] = o;
                                return GraceDone;
                              };
                              obj1008.methods["end:=(1)"] = writer_createJsGraphicsWrapper_end1029;
                              obj1008.mutable = true;
                              superDepth = origSuperDepth;
                            };
                            obj_init_1008.apply(obj1008, []);
                            return obj1008;
                          };
                          func1007.paramCounts = [0];
                          this.methods["line"] = func1007;
                          func1007.definitionLine = 613;
                          func1007.definitionModule = "createJsGraphicsWrapper";
                            var func1030 = function(argcv) {    // method line$object(_)
                              var curarg = 1;
                              var inheritingObject = arguments[curarg++];
                              // Start argument processing
                              curarg = 1;
                              // End argument processing
                              setModuleName("createJsGraphicsWrapper");
                              var returnTarget = invocationCount;
                              invocationCount++;
                              var obj1031 = Grace_allocObject(null, "line");
                              obj1031.definitionModule = "createJsGraphicsWrapper";
                              obj1031.definitionLine = 613;
                              var inho1031 = inheritingObject;
                              while (inho1031.superobj) inho1031 = inho1031.superobj;
                              inho1031.superobj = obj1031;
                              obj1031.data = inheritingObject.data;
                              if (inheritingObject.hasOwnProperty('_value'))
                                obj1031._value = inheritingObject._value;
                              obj1031.outer = this;
                              var reader_createJsGraphicsWrapper_outer1032 = function() {
                                return this.outer;
                              };
                              obj1031.methods["outer"] = reader_createJsGraphicsWrapper_outer1032;
                              var obj_init_1031 = function() {
                                var origSuperDepth = superDepth;
                                superDepth = obj1031;
                                var func1033 = function(argcv) {    // method draw(_,_)
                                  var returnTarget = invocationCount;
                                  invocationCount++;
                                  var curarg = 1;
                                  var var_start__39__ = arguments[curarg];
                                  curarg++;
                                  var var_end__39__ = arguments[curarg];
                                  curarg++;
                                  setModuleName("createJsGraphicsWrapper");
                                  setLineNumber(619);    // compilenode identifier
                                  // call case 4: self request
                                  onSelf = true;
                                  var call1035 = callmethodChecked(this, "location:=(1)", [1], var_start__39__);
                                  setLineNumber(620);    // compilenode identifier
                                  // call case 4: self request
                                  onSelf = true;
                                  var call1037 = callmethodChecked(this, "start:=(1)", [1], var_start__39__);
                                  setLineNumber(621);    // compilenode identifier
                                  // call case 4: self request
                                  onSelf = true;
                                  var call1039 = callmethodChecked(this, "end:=(1)", [1], var_end__39__);
                                  setLineNumber(622);    // compilenode call
                                     // start native code from line 622
                                  var result = GraceDone;
                                  
              var startX = this.data.start.data.x._value;
              var startY = this.data.start.data.y._value;
              var endX = this.data.end.data.x._value;
              var endY = this.data.end.data.y._value;
              this.data.createJsGraphics.graphics.moveTo(startX, startY).lineTo(endX,endY);
        
                                  var nat1040 = result;
                                     // end native code insertion
                                  return nat1040;
                                };
                                func1033.paramCounts = [2];
                                obj1031.methods["draw(2)"] = func1033;
                                func1033.definitionLine = 618;
                                func1033.definitionModule = "createJsGraphicsWrapper";
                                setLineNumber(614);    // compilenode identifier
                                // call case 6: other requests
                                // call case 3: self.outer request
                                var call1043 = callmethodChecked(superDepth, "outer", [0]);
                                var call1044 = callmethodChecked(call1043, "shape$object(1)", [0, 1], this);
                                obj1031.superobj = call1044;
                                if (call1044.data) obj1031.data = call1044.data;
                                if (call1044.hasOwnProperty('_value'))
                                    obj1031._value = call1044._value;
                                setLineNumber(615);    // compilenode num
                                var opresult1047 = callmethodChecked(new GraceNum(0), "@(1)", [1], new GraceNum(0));
                                obj1031.data["start"] = opresult1047;
                                var reader_createJsGraphicsWrapper_start1048 = function() {
                                  return this.data["start"];
                                };
                                obj1031.methods["start"] = reader_createJsGraphicsWrapper_start1048;
                                obj1031.data["start"] = opresult1047;
                                var writer_createJsGraphicsWrapper_start1048 = function(argcv, o) {
                                  this.data["start"] = o;
                                  return GraceDone;
                                };
                                obj1031.methods["start:=(1)"] = writer_createJsGraphicsWrapper_start1048;
                                obj1031.mutable = true;
                                setLineNumber(616);    // compilenode num
                                var opresult1051 = callmethodChecked(new GraceNum(50), "@(1)", [1], new GraceNum(50));
                                obj1031.data["end"] = opresult1051;
                                var reader_createJsGraphicsWrapper_end1052 = function() {
                                  return this.data["end"];
                                };
                                obj1031.methods["end"] = reader_createJsGraphicsWrapper_end1052;
                                obj1031.data["end"] = opresult1051;
                                var writer_createJsGraphicsWrapper_end1052 = function(argcv, o) {
                                  this.data["end"] = o;
                                  return GraceDone;
                                };
                                obj1031.methods["end:=(1)"] = writer_createJsGraphicsWrapper_end1052;
                                obj1031.mutable = true;
                                superDepth = origSuperDepth;
                              };
                              obj_init_1031.apply(inheritingObject, []);
                              return obj1031;
                              };
                              this.methods["line$object(1)"] = func1030;
                            setLineNumber(632);    // compilenode method
                            var func1053 = function(argcv) {    // method customShape
                              var returnTarget = invocationCount;
                              invocationCount++;
                              var curarg = 1;
                              setModuleName("createJsGraphicsWrapper");
                              var obj1054 = Grace_allocObject(null, "customShape");
                              obj1054.definitionModule = "createJsGraphicsWrapper";
                              obj1054.definitionLine = 632;
                              obj1054.outer = this;
                              var reader_createJsGraphicsWrapper_outer1055 = function() {
                                return this.outer;
                              };
                              obj1054.methods["outer"] = reader_createJsGraphicsWrapper_outer1055;
                              var obj_init_1054 = function() {
                                var origSuperDepth = superDepth;
                                superDepth = obj1054;
                                var func1056 = function(argcv) {    // method addPoint(_)
                                  var returnTarget = invocationCount;
                                  invocationCount++;
                                  var curarg = 1;
                                  var var_p = arguments[curarg];
                                  curarg++;
                                  setModuleName("createJsGraphicsWrapper");
                                  setLineNumber(643);    // compilenode identifier
                                  // call case 4: self request
                                  onSelf = true;
                                  var call1058 = callmethodChecked(this, "calcBounds(1)", [1], var_p);
                                  setLineNumber(644);    // compilenode identifier
                                  // call case 6: other requests
                                  // call case 4: self request
                                  onSelf = true;
                                  var call1061 = callmethodChecked(this, "points", []);
                                  var call1062 = callmethodChecked(call1061, "add(1)", [1], var_p);
                                  return call1062;
                                };
                                func1056.paramCounts = [1];
                                obj1054.methods["addPoint(1)"] = func1056;
                                func1056.definitionLine = 642;
                                func1056.definitionModule = "createJsGraphicsWrapper";
                                var func1063 = function(argcv) {    // method calcBounds(_)
                                  var returnTarget = invocationCount;
                                  invocationCount++;
                                  var curarg = 1;
                                  var var_p = arguments[curarg];
                                  curarg++;
                                  setModuleName("createJsGraphicsWrapper");
                                  var if1064 = GraceDone;
                                  setLineNumber(647);    // compilenode member
                                  // call case 6: other requests
                                  // call case 4: self request
                                  onSelf = true;
                                  var call1067 = callmethodChecked(this, "points", []);
                                  var call1068 = callmethodChecked(call1067, "isEmpty", []);
                                  if (Grace_isTrue(call1068)) {
                                    setLineNumber(648);    // compilenode member
                                    // call case 6: other requests
                                    var call1071 = callmethodChecked(var_p, "y", []);
                                    // call case 4: self request
                                    onSelf = true;
                                    var call1072 = callmethodChecked(this, "topMost:=(1)", [1], call1071);
                                    setLineNumber(649);    // compilenode member
                                    // call case 6: other requests
                                    var call1075 = callmethodChecked(var_p, "y", []);
                                    // call case 4: self request
                                    onSelf = true;
                                    var call1076 = callmethodChecked(this, "bottomMost:=(1)", [1], call1075);
                                    setLineNumber(650);    // compilenode member
                                    // call case 6: other requests
                                    var call1079 = callmethodChecked(var_p, "x", []);
                                    // call case 4: self request
                                    onSelf = true;
                                    var call1080 = callmethodChecked(this, "leftMost:=(1)", [1], call1079);
                                    setLineNumber(651);    // compilenode member
                                    // call case 6: other requests
                                    var call1083 = callmethodChecked(var_p, "x", []);
                                    // call case 4: self request
                                    onSelf = true;
                                    var call1084 = callmethodChecked(this, "rightMost:=(1)", [1], call1083);
                                    if1064 = call1084;
                                  } else {
                                    var if1085 = GraceDone;
                                    setLineNumber(653);    // compilenode member
                                    // call case 4: self request
                                    onSelf = true;
                                    var call1087 = callmethodChecked(this, "leftMost", []);
                                    // call case 6: other requests
                                    var call1090 = callmethodChecked(var_p, "x", []);
                                    var opresult1092 = callmethodChecked(call1090, "<(1)", [1], call1087);
                                    if (Grace_isTrue(opresult1092)) {
                                      // call case 6: other requests
                                      var call1095 = callmethodChecked(var_p, "x", []);
                                      // call case 4: self request
                                      onSelf = true;
                                      var call1096 = callmethodChecked(this, "leftMost:=(1)", [1], call1095);
                                      if1085 = call1096;
                                    }
                                    var if1097 = GraceDone;
                                    setLineNumber(654);    // compilenode member
                                    // call case 4: self request
                                    onSelf = true;
                                    var call1099 = callmethodChecked(this, "rightMost", []);
                                    // call case 6: other requests
                                    var call1102 = callmethodChecked(var_p, "x", []);
                                    var opresult1104 = callmethodChecked(call1102, ">(1)", [1], call1099);
                                    if (Grace_isTrue(opresult1104)) {
                                      // call case 6: other requests
                                      var call1107 = callmethodChecked(var_p, "x", []);
                                      // call case 4: self request
                                      onSelf = true;
                                      var call1108 = callmethodChecked(this, "rightMost:=(1)", [1], call1107);
                                      if1097 = call1108;
                                    }
                                    var if1109 = GraceDone;
                                    setLineNumber(655);    // compilenode member
                                    // call case 4: self request
                                    onSelf = true;
                                    var call1111 = callmethodChecked(this, "topMost", []);
                                    // call case 6: other requests
                                    var call1114 = callmethodChecked(var_p, "y", []);
                                    var opresult1116 = callmethodChecked(call1114, "<(1)", [1], call1111);
                                    if (Grace_isTrue(opresult1116)) {
                                      // call case 6: other requests
                                      var call1119 = callmethodChecked(var_p, "y", []);
                                      // call case 4: self request
                                      onSelf = true;
                                      var call1120 = callmethodChecked(this, "topMost:=(1)", [1], call1119);
                                      if1109 = call1120;
                                    }
                                    var if1121 = GraceDone;
                                    setLineNumber(656);    // compilenode member
                                    // call case 4: self request
                                    onSelf = true;
                                    var call1123 = callmethodChecked(this, "bottomMost", []);
                                    // call case 6: other requests
                                    var call1126 = callmethodChecked(var_p, "y", []);
                                    var opresult1128 = callmethodChecked(call1126, ">(1)", [1], call1123);
                                    if (Grace_isTrue(opresult1128)) {
                                      // call case 6: other requests
                                      var call1131 = callmethodChecked(var_p, "y", []);
                                      // call case 4: self request
                                      onSelf = true;
                                      var call1132 = callmethodChecked(this, "bottomMost:=(1)", [1], call1131);
                                      if1121 = call1132;
                                    }
                                    if1064 = if1121;
                                  }
                                  return if1064;
                                };
                                func1063.confidential = true;
                                func1063.paramCounts = [1];
                                obj1054.methods["calcBounds(1)"] = func1063;
                                func1063.definitionLine = 646;
                                func1063.definitionModule = "createJsGraphicsWrapper";
                                var func1133 = function(argcv) {    // method draw(_,_)
                                  var returnTarget = invocationCount;
                                  invocationCount++;
                                  var curarg = 1;
                                  var var_stroke__39__ = arguments[curarg];
                                  curarg++;
                                  var var_fill__39__ = arguments[curarg];
                                  curarg++;
                                  setModuleName("createJsGraphicsWrapper");
                                  var if1134 = GraceDone;
                                  setLineNumber(660);    // compilenode member
                                  // call case 6: other requests
                                  // call case 4: self request
                                  onSelf = true;
                                  var call1138 = callmethodChecked(this, "points", []);
                                  var call1139 = callmethodChecked(call1138, "size", []);
                                  var opresult1141 = callmethodChecked(call1139, "<(1)", [1], new GraceNum(2));
                                  if (Grace_isTrue(opresult1141)) {
                                    var string1142 = new GraceString("Not enough points in custom shape");
                                    var call1143 = Grace_print(string1142);
                                    return var_done;
                                  }
                                  setLineNumber(662);    // compilenode member
                                  // call case 6: other requests
                                  // call case 4: self request
                                  onSelf = true;
                                  var call1147 = callmethodChecked(this, "points", []);
                                  var call1148 = callmethodChecked(call1147, "first", []);
                                  // call case 4: self request
                                  onSelf = true;
                                  var call1149 = callmethodChecked(this, "current:=(1)", [1], call1148);
                                  setLineNumber(663);    // compilenode identifier
                                  // call case 4: self request
                                  onSelf = true;
                                  var call1151 = callmethodChecked(this, "stroke:=(1)", [1], var_stroke__39__);
                                  setLineNumber(664);    // compilenode identifier
                                  // call case 4: self request
                                  onSelf = true;
                                  var call1153 = callmethodChecked(this, "color:=(1)", [1], var_fill__39__);
                                  setLineNumber(666);    // compilenode call
                                     // start native code from line 666
                                  var result = GraceDone;
                                  
              var color = this.data.color._value;
              var stroke = this.data.stroke._value;
              var startX = this.data.current.data.x._value;
              var startY = this.data.current.data.y._value;
              this.data.createJsGraphics.graphics.beginFill(color);
              this.data.createJsGraphics.graphics.beginStroke(stroke);
              this.data.createJsGraphics.graphics.moveTo(startX, startY);
        
                                  var nat1154 = result;
                                     // end native code insertion
                                  setLineNumber(675);    // compilenode member
                                  // call case 4: self request
                                  onSelf = true;
                                  var call1157 = callmethodChecked(this, "points", []);
                                  var block1158 = new GraceBlock(this, 675, 1);
                                  setLineNumber(1);    // compilenode identifier
                                  block1158.real = function(var_x) {
                                    setLineNumber(676);    // compilenode identifier
                                    // call case 4: self request
                                    onSelf = true;
                                    var call1160 = callmethodChecked(this, "current:=(1)", [1], var_x);
                                    setLineNumber(677);    // compilenode call
                                       // start native code from line 677
                                    var result = GraceDone;
                                    
                  var endX = this.data.current.data.x._value;
                  var endY = this.data.current.data.y._value;
                  this.data.createJsGraphics.graphics.lineTo(endX, endY);
            
                                    var nat1161 = result;
                                       // end native code insertion
                                    return nat1161;
                                  };
                                  // call case 5: prelude request
                                  var call1162 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1157, block1158);
                                  setLineNumber(683);    // compilenode call
                                     // start native code from line 683
                                  var result = GraceDone;
                                  
              this.data.createJsGraphics.graphics.closePath()
        
                                  var nat1163 = result;
                                     // end native code insertion
                                  return nat1163;
                                };
                                func1133.paramCounts = [2];
                                obj1054.methods["draw(2)"] = func1133;
                                func1133.definitionLine = 659;
                                func1133.definitionModule = "createJsGraphicsWrapper";
                                var func1164 = function(argcv) {    // method setBounds
                                  var returnTarget = invocationCount;
                                  invocationCount++;
                                  var curarg = 1;
                                  setModuleName("createJsGraphicsWrapper");
                                  setLineNumber(689);    // compilenode member
                                  // call case 4: self request
                                  onSelf = true;
                                  var call1166 = callmethodChecked(this, "topMost", []);
                                  // call case 4: self request
                                  onSelf = true;
                                  var call1169 = callmethodChecked(this, "leftMost", []);
                                  var opresult1171 = callmethodChecked(call1169, "@(1)", [1], call1166);
                                  var var_bounds = opresult1171;
                                  setLineNumber(690);    // compilenode member
                                  // call case 4: self request
                                  onSelf = true;
                                  var call1174 = callmethodChecked(this, "leftMost", []);
                                  // call case 4: self request
                                  onSelf = true;
                                  var call1177 = callmethodChecked(this, "rightMost", []);
                                  var diff1179 = callmethodChecked(call1177, "-(1)", [1], call1174);
                                  // call case 4: self request
                                  onSelf = true;
                                  var call1181 = callmethodChecked(this, "topMost", []);
                                  // call case 4: self request
                                  onSelf = true;
                                  var call1184 = callmethodChecked(this, "bottomMost", []);
                                  var diff1186 = callmethodChecked(call1184, "-(1)", [1], call1181);
                                  // call case 1: super request
                                  var call1187 = callmethodsuper(this, "setBounds(3)", [3], var_bounds, diff1179, diff1186);
                                  return call1187;
                                };
                                func1164.paramCounts = [0];
                                obj1054.methods["setBounds"] = func1164;
                                func1164.definitionLine = 688;
                                func1164.definitionModule = "createJsGraphicsWrapper";
                                setLineNumber(633);    // compilenode identifier
                                // call case 6: other requests
                                // call case 3: self.outer request
                                var call1190 = callmethodChecked(superDepth, "outer", [0]);
                                var call1191 = callmethodChecked(call1190, "shape$object(1)", [0, 1], this);
                                obj1054.superobj = call1191;
                                if (call1191.data) obj1054.data = call1191.data;
                                if (call1191.hasOwnProperty('_value'))
                                    obj1054._value = call1191._value;
                                setLineNumber(634);    // compilenode member
                                // call case 5: prelude request
                                var call1193 = callmethodChecked(var_prelude, "emptyList", []);
                                obj1054.data["points"] = call1193;
                                var reader_createJsGraphicsWrapper_points1194 = function() {
                                  return this.data["points"];
                                };
                                obj1054.methods["points"] = reader_createJsGraphicsWrapper_points1194;
                                obj1054.data["points"] = call1193;
                                var writer_createJsGraphicsWrapper_points1194 = function(argcv, o) {
                                  this.data["points"] = o;
                                  return GraceDone;
                                };
                                obj1054.methods["points:=(1)"] = writer_createJsGraphicsWrapper_points1194;
                                reader_createJsGraphicsWrapper_points1194.confidential = true;
                                writer_createJsGraphicsWrapper_points1194.confidential = true;
                                obj1054.mutable = true;
                                obj1054.data["stroke"] = undefined;
                                var reader_createJsGraphicsWrapper_stroke1195 = function() {
                                  return this.data["stroke"];
                                };
                                obj1054.methods["stroke"] = reader_createJsGraphicsWrapper_stroke1195;
                                obj1054.data["stroke"] = undefined;
                                var writer_createJsGraphicsWrapper_stroke1195 = function(argcv, o) {
                                  this.data["stroke"] = o;
                                  return GraceDone;
                                };
                                obj1054.methods["stroke:=(1)"] = writer_createJsGraphicsWrapper_stroke1195;
                                reader_createJsGraphicsWrapper_stroke1195.confidential = true;
                                writer_createJsGraphicsWrapper_stroke1195.confidential = true;
                                obj1054.mutable = true;
                                obj1054.data["current"] = undefined;
                                var reader_createJsGraphicsWrapper_current1196 = function() {
                                  return this.data["current"];
                                };
                                obj1054.methods["current"] = reader_createJsGraphicsWrapper_current1196;
                                obj1054.data["current"] = undefined;
                                var writer_createJsGraphicsWrapper_current1196 = function(argcv, o) {
                                  this.data["current"] = o;
                                  return GraceDone;
                                };
                                obj1054.methods["current:=(1)"] = writer_createJsGraphicsWrapper_current1196;
                                reader_createJsGraphicsWrapper_current1196.confidential = true;
                                writer_createJsGraphicsWrapper_current1196.confidential = true;
                                obj1054.mutable = true;
                                obj1054.data["leftMost"] = undefined;
                                var reader_createJsGraphicsWrapper_leftMost1197 = function() {
                                  return this.data["leftMost"];
                                };
                                obj1054.methods["leftMost"] = reader_createJsGraphicsWrapper_leftMost1197;
                                obj1054.data["leftMost"] = undefined;
                                var writer_createJsGraphicsWrapper_leftMost1197 = function(argcv, o) {
                                  this.data["leftMost"] = o;
                                  return GraceDone;
                                };
                                obj1054.methods["leftMost:=(1)"] = writer_createJsGraphicsWrapper_leftMost1197;
                                reader_createJsGraphicsWrapper_leftMost1197.confidential = true;
                                writer_createJsGraphicsWrapper_leftMost1197.confidential = true;
                                obj1054.mutable = true;
                                obj1054.data["rightMost"] = undefined;
                                var reader_createJsGraphicsWrapper_rightMost1198 = function() {
                                  return this.data["rightMost"];
                                };
                                obj1054.methods["rightMost"] = reader_createJsGraphicsWrapper_rightMost1198;
                                obj1054.data["rightMost"] = undefined;
                                var writer_createJsGraphicsWrapper_rightMost1198 = function(argcv, o) {
                                  this.data["rightMost"] = o;
                                  return GraceDone;
                                };
                                obj1054.methods["rightMost:=(1)"] = writer_createJsGraphicsWrapper_rightMost1198;
                                reader_createJsGraphicsWrapper_rightMost1198.confidential = true;
                                writer_createJsGraphicsWrapper_rightMost1198.confidential = true;
                                obj1054.mutable = true;
                                obj1054.data["topMost"] = undefined;
                                var reader_createJsGraphicsWrapper_topMost1199 = function() {
                                  return this.data["topMost"];
                                };
                                obj1054.methods["topMost"] = reader_createJsGraphicsWrapper_topMost1199;
                                obj1054.data["topMost"] = undefined;
                                var writer_createJsGraphicsWrapper_topMost1199 = function(argcv, o) {
                                  this.data["topMost"] = o;
                                  return GraceDone;
                                };
                                obj1054.methods["topMost:=(1)"] = writer_createJsGraphicsWrapper_topMost1199;
                                reader_createJsGraphicsWrapper_topMost1199.confidential = true;
                                writer_createJsGraphicsWrapper_topMost1199.confidential = true;
                                obj1054.mutable = true;
                                obj1054.data["bottomMost"] = undefined;
                                var reader_createJsGraphicsWrapper_bottomMost1200 = function() {
                                  return this.data["bottomMost"];
                                };
                                obj1054.methods["bottomMost"] = reader_createJsGraphicsWrapper_bottomMost1200;
                                obj1054.data["bottomMost"] = undefined;
                                var writer_createJsGraphicsWrapper_bottomMost1200 = function(argcv, o) {
                                  this.data["bottomMost"] = o;
                                  return GraceDone;
                                };
                                obj1054.methods["bottomMost:=(1)"] = writer_createJsGraphicsWrapper_bottomMost1200;
                                reader_createJsGraphicsWrapper_bottomMost1200.confidential = true;
                                writer_createJsGraphicsWrapper_bottomMost1200.confidential = true;
                                obj1054.mutable = true;
                                superDepth = origSuperDepth;
                              };
                              obj_init_1054.apply(obj1054, []);
                              return obj1054;
                            };
                            func1053.paramCounts = [0];
                            this.methods["customShape"] = func1053;
                            func1053.definitionLine = 632;
                            func1053.definitionModule = "createJsGraphicsWrapper";
                              var func1201 = function(argcv) {    // method customShape$object(_)
                                var curarg = 1;
                                var inheritingObject = arguments[curarg++];
                                // Start argument processing
                                curarg = 1;
                                // End argument processing
                                setModuleName("createJsGraphicsWrapper");
                                var returnTarget = invocationCount;
                                invocationCount++;
                                var obj1202 = Grace_allocObject(null, "customShape");
                                obj1202.definitionModule = "createJsGraphicsWrapper";
                                obj1202.definitionLine = 632;
                                var inho1202 = inheritingObject;
                                while (inho1202.superobj) inho1202 = inho1202.superobj;
                                inho1202.superobj = obj1202;
                                obj1202.data = inheritingObject.data;
                                if (inheritingObject.hasOwnProperty('_value'))
                                  obj1202._value = inheritingObject._value;
                                obj1202.outer = this;
                                var reader_createJsGraphicsWrapper_outer1203 = function() {
                                  return this.outer;
                                };
                                obj1202.methods["outer"] = reader_createJsGraphicsWrapper_outer1203;
                                var obj_init_1202 = function() {
                                  var origSuperDepth = superDepth;
                                  superDepth = obj1202;
                                  var func1204 = function(argcv) {    // method addPoint(_)
                                    var returnTarget = invocationCount;
                                    invocationCount++;
                                    var curarg = 1;
                                    var var_p = arguments[curarg];
                                    curarg++;
                                    setModuleName("createJsGraphicsWrapper");
                                    setLineNumber(643);    // compilenode identifier
                                    // call case 4: self request
                                    onSelf = true;
                                    var call1206 = callmethodChecked(this, "calcBounds(1)", [1], var_p);
                                    setLineNumber(644);    // compilenode identifier
                                    // call case 6: other requests
                                    // call case 4: self request
                                    onSelf = true;
                                    var call1209 = callmethodChecked(this, "points", []);
                                    var call1210 = callmethodChecked(call1209, "add(1)", [1], var_p);
                                    return call1210;
                                  };
                                  func1204.paramCounts = [1];
                                  obj1202.methods["addPoint(1)"] = func1204;
                                  func1204.definitionLine = 642;
                                  func1204.definitionModule = "createJsGraphicsWrapper";
                                  var func1211 = function(argcv) {    // method calcBounds(_)
                                    var returnTarget = invocationCount;
                                    invocationCount++;
                                    var curarg = 1;
                                    var var_p = arguments[curarg];
                                    curarg++;
                                    setModuleName("createJsGraphicsWrapper");
                                    var if1212 = GraceDone;
                                    setLineNumber(647);    // compilenode member
                                    // call case 6: other requests
                                    // call case 4: self request
                                    onSelf = true;
                                    var call1215 = callmethodChecked(this, "points", []);
                                    var call1216 = callmethodChecked(call1215, "isEmpty", []);
                                    if (Grace_isTrue(call1216)) {
                                      setLineNumber(648);    // compilenode member
                                      // call case 6: other requests
                                      var call1219 = callmethodChecked(var_p, "y", []);
                                      // call case 4: self request
                                      onSelf = true;
                                      var call1220 = callmethodChecked(this, "topMost:=(1)", [1], call1219);
                                      setLineNumber(649);    // compilenode member
                                      // call case 6: other requests
                                      var call1223 = callmethodChecked(var_p, "y", []);
                                      // call case 4: self request
                                      onSelf = true;
                                      var call1224 = callmethodChecked(this, "bottomMost:=(1)", [1], call1223);
                                      setLineNumber(650);    // compilenode member
                                      // call case 6: other requests
                                      var call1227 = callmethodChecked(var_p, "x", []);
                                      // call case 4: self request
                                      onSelf = true;
                                      var call1228 = callmethodChecked(this, "leftMost:=(1)", [1], call1227);
                                      setLineNumber(651);    // compilenode member
                                      // call case 6: other requests
                                      var call1231 = callmethodChecked(var_p, "x", []);
                                      // call case 4: self request
                                      onSelf = true;
                                      var call1232 = callmethodChecked(this, "rightMost:=(1)", [1], call1231);
                                      if1212 = call1232;
                                    } else {
                                      var if1233 = GraceDone;
                                      setLineNumber(653);    // compilenode member
                                      // call case 4: self request
                                      onSelf = true;
                                      var call1235 = callmethodChecked(this, "leftMost", []);
                                      // call case 6: other requests
                                      var call1238 = callmethodChecked(var_p, "x", []);
                                      var opresult1240 = callmethodChecked(call1238, "<(1)", [1], call1235);
                                      if (Grace_isTrue(opresult1240)) {
                                        // call case 6: other requests
                                        var call1243 = callmethodChecked(var_p, "x", []);
                                        // call case 4: self request
                                        onSelf = true;
                                        var call1244 = callmethodChecked(this, "leftMost:=(1)", [1], call1243);
                                        if1233 = call1244;
                                      }
                                      var if1245 = GraceDone;
                                      setLineNumber(654);    // compilenode member
                                      // call case 4: self request
                                      onSelf = true;
                                      var call1247 = callmethodChecked(this, "rightMost", []);
                                      // call case 6: other requests
                                      var call1250 = callmethodChecked(var_p, "x", []);
                                      var opresult1252 = callmethodChecked(call1250, ">(1)", [1], call1247);
                                      if (Grace_isTrue(opresult1252)) {
                                        // call case 6: other requests
                                        var call1255 = callmethodChecked(var_p, "x", []);
                                        // call case 4: self request
                                        onSelf = true;
                                        var call1256 = callmethodChecked(this, "rightMost:=(1)", [1], call1255);
                                        if1245 = call1256;
                                      }
                                      var if1257 = GraceDone;
                                      setLineNumber(655);    // compilenode member
                                      // call case 4: self request
                                      onSelf = true;
                                      var call1259 = callmethodChecked(this, "topMost", []);
                                      // call case 6: other requests
                                      var call1262 = callmethodChecked(var_p, "y", []);
                                      var opresult1264 = callmethodChecked(call1262, "<(1)", [1], call1259);
                                      if (Grace_isTrue(opresult1264)) {
                                        // call case 6: other requests
                                        var call1267 = callmethodChecked(var_p, "y", []);
                                        // call case 4: self request
                                        onSelf = true;
                                        var call1268 = callmethodChecked(this, "topMost:=(1)", [1], call1267);
                                        if1257 = call1268;
                                      }
                                      var if1269 = GraceDone;
                                      setLineNumber(656);    // compilenode member
                                      // call case 4: self request
                                      onSelf = true;
                                      var call1271 = callmethodChecked(this, "bottomMost", []);
                                      // call case 6: other requests
                                      var call1274 = callmethodChecked(var_p, "y", []);
                                      var opresult1276 = callmethodChecked(call1274, ">(1)", [1], call1271);
                                      if (Grace_isTrue(opresult1276)) {
                                        // call case 6: other requests
                                        var call1279 = callmethodChecked(var_p, "y", []);
                                        // call case 4: self request
                                        onSelf = true;
                                        var call1280 = callmethodChecked(this, "bottomMost:=(1)", [1], call1279);
                                        if1269 = call1280;
                                      }
                                      if1212 = if1269;
                                    }
                                    return if1212;
                                  };
                                  func1211.confidential = true;
                                  func1211.paramCounts = [1];
                                  obj1202.methods["calcBounds(1)"] = func1211;
                                  func1211.definitionLine = 646;
                                  func1211.definitionModule = "createJsGraphicsWrapper";
                                  var func1281 = function(argcv) {    // method draw(_,_)
                                    var returnTarget = invocationCount;
                                    invocationCount++;
                                    var curarg = 1;
                                    var var_stroke__39__ = arguments[curarg];
                                    curarg++;
                                    var var_fill__39__ = arguments[curarg];
                                    curarg++;
                                    setModuleName("createJsGraphicsWrapper");
                                    var if1282 = GraceDone;
                                    setLineNumber(660);    // compilenode member
                                    // call case 6: other requests
                                    // call case 4: self request
                                    onSelf = true;
                                    var call1286 = callmethodChecked(this, "points", []);
                                    var call1287 = callmethodChecked(call1286, "size", []);
                                    var opresult1289 = callmethodChecked(call1287, "<(1)", [1], new GraceNum(2));
                                    if (Grace_isTrue(opresult1289)) {
                                      var string1290 = new GraceString("Not enough points in custom shape");
                                      var call1291 = Grace_print(string1290);
                                      return var_done;
                                    }
                                    setLineNumber(662);    // compilenode member
                                    // call case 6: other requests
                                    // call case 4: self request
                                    onSelf = true;
                                    var call1295 = callmethodChecked(this, "points", []);
                                    var call1296 = callmethodChecked(call1295, "first", []);
                                    // call case 4: self request
                                    onSelf = true;
                                    var call1297 = callmethodChecked(this, "current:=(1)", [1], call1296);
                                    setLineNumber(663);    // compilenode identifier
                                    // call case 4: self request
                                    onSelf = true;
                                    var call1299 = callmethodChecked(this, "stroke:=(1)", [1], var_stroke__39__);
                                    setLineNumber(664);    // compilenode identifier
                                    // call case 4: self request
                                    onSelf = true;
                                    var call1301 = callmethodChecked(this, "color:=(1)", [1], var_fill__39__);
                                    setLineNumber(666);    // compilenode call
                                       // start native code from line 666
                                    var result = GraceDone;
                                    
              var color = this.data.color._value;
              var stroke = this.data.stroke._value;
              var startX = this.data.current.data.x._value;
              var startY = this.data.current.data.y._value;
              this.data.createJsGraphics.graphics.beginFill(color);
              this.data.createJsGraphics.graphics.beginStroke(stroke);
              this.data.createJsGraphics.graphics.moveTo(startX, startY);
        
                                    var nat1302 = result;
                                       // end native code insertion
                                    setLineNumber(675);    // compilenode member
                                    // call case 4: self request
                                    onSelf = true;
                                    var call1305 = callmethodChecked(this, "points", []);
                                    var block1306 = new GraceBlock(this, 675, 1);
                                    setLineNumber(1);    // compilenode identifier
                                    block1306.real = function(var_x) {
                                      setLineNumber(676);    // compilenode identifier
                                      // call case 4: self request
                                      onSelf = true;
                                      var call1308 = callmethodChecked(this, "current:=(1)", [1], var_x);
                                      setLineNumber(677);    // compilenode call
                                         // start native code from line 677
                                      var result = GraceDone;
                                      
                  var endX = this.data.current.data.x._value;
                  var endY = this.data.current.data.y._value;
                  this.data.createJsGraphics.graphics.lineTo(endX, endY);
            
                                      var nat1309 = result;
                                         // end native code insertion
                                      return nat1309;
                                    };
                                    // call case 5: prelude request
                                    var call1310 = callmethodChecked(var_prelude, "for(1)do(1)", [1, 1], call1305, block1306);
                                    setLineNumber(683);    // compilenode call
                                       // start native code from line 683
                                    var result = GraceDone;
                                    
              this.data.createJsGraphics.graphics.closePath()
        
                                    var nat1311 = result;
                                       // end native code insertion
                                    return nat1311;
                                  };
                                  func1281.paramCounts = [2];
                                  obj1202.methods["draw(2)"] = func1281;
                                  func1281.definitionLine = 659;
                                  func1281.definitionModule = "createJsGraphicsWrapper";
                                  var func1312 = function(argcv) {    // method setBounds
                                    var returnTarget = invocationCount;
                                    invocationCount++;
                                    var curarg = 1;
                                    setModuleName("createJsGraphicsWrapper");
                                    setLineNumber(689);    // compilenode member
                                    // call case 4: self request
                                    onSelf = true;
                                    var call1314 = callmethodChecked(this, "topMost", []);
                                    // call case 4: self request
                                    onSelf = true;
                                    var call1317 = callmethodChecked(this, "leftMost", []);
                                    var opresult1319 = callmethodChecked(call1317, "@(1)", [1], call1314);
                                    var var_bounds = opresult1319;
                                    setLineNumber(690);    // compilenode member
                                    // call case 4: self request
                                    onSelf = true;
                                    var call1322 = callmethodChecked(this, "leftMost", []);
                                    // call case 4: self request
                                    onSelf = true;
                                    var call1325 = callmethodChecked(this, "rightMost", []);
                                    var diff1327 = callmethodChecked(call1325, "-(1)", [1], call1322);
                                    // call case 4: self request
                                    onSelf = true;
                                    var call1329 = callmethodChecked(this, "topMost", []);
                                    // call case 4: self request
                                    onSelf = true;
                                    var call1332 = callmethodChecked(this, "bottomMost", []);
                                    var diff1334 = callmethodChecked(call1332, "-(1)", [1], call1329);
                                    // call case 1: super request
                                    var call1335 = callmethodsuper(this, "setBounds(3)", [3], var_bounds, diff1327, diff1334);
                                    return call1335;
                                  };
                                  func1312.paramCounts = [0];
                                  obj1202.methods["setBounds"] = func1312;
                                  func1312.definitionLine = 688;
                                  func1312.definitionModule = "createJsGraphicsWrapper";
                                  setLineNumber(633);    // compilenode identifier
                                  // call case 6: other requests
                                  // call case 3: self.outer request
                                  var call1338 = callmethodChecked(superDepth, "outer", [0]);
                                  var call1339 = callmethodChecked(call1338, "shape$object(1)", [0, 1], this);
                                  obj1202.superobj = call1339;
                                  if (call1339.data) obj1202.data = call1339.data;
                                  if (call1339.hasOwnProperty('_value'))
                                      obj1202._value = call1339._value;
                                  setLineNumber(634);    // compilenode member
                                  // call case 5: prelude request
                                  var call1341 = callmethodChecked(var_prelude, "emptyList", []);
                                  obj1202.data["points"] = call1341;
                                  var reader_createJsGraphicsWrapper_points1342 = function() {
                                    return this.data["points"];
                                  };
                                  obj1202.methods["points"] = reader_createJsGraphicsWrapper_points1342;
                                  obj1202.data["points"] = call1341;
                                  var writer_createJsGraphicsWrapper_points1342 = function(argcv, o) {
                                    this.data["points"] = o;
                                    return GraceDone;
                                  };
                                  obj1202.methods["points:=(1)"] = writer_createJsGraphicsWrapper_points1342;
                                  reader_createJsGraphicsWrapper_points1342.confidential = true;
                                  writer_createJsGraphicsWrapper_points1342.confidential = true;
                                  obj1202.mutable = true;
                                  obj1202.data["stroke"] = undefined;
                                  var reader_createJsGraphicsWrapper_stroke1343 = function() {
                                    return this.data["stroke"];
                                  };
                                  obj1202.methods["stroke"] = reader_createJsGraphicsWrapper_stroke1343;
                                  obj1202.data["stroke"] = undefined;
                                  var writer_createJsGraphicsWrapper_stroke1343 = function(argcv, o) {
                                    this.data["stroke"] = o;
                                    return GraceDone;
                                  };
                                  obj1202.methods["stroke:=(1)"] = writer_createJsGraphicsWrapper_stroke1343;
                                  reader_createJsGraphicsWrapper_stroke1343.confidential = true;
                                  writer_createJsGraphicsWrapper_stroke1343.confidential = true;
                                  obj1202.mutable = true;
                                  obj1202.data["current"] = undefined;
                                  var reader_createJsGraphicsWrapper_current1344 = function() {
                                    return this.data["current"];
                                  };
                                  obj1202.methods["current"] = reader_createJsGraphicsWrapper_current1344;
                                  obj1202.data["current"] = undefined;
                                  var writer_createJsGraphicsWrapper_current1344 = function(argcv, o) {
                                    this.data["current"] = o;
                                    return GraceDone;
                                  };
                                  obj1202.methods["current:=(1)"] = writer_createJsGraphicsWrapper_current1344;
                                  reader_createJsGraphicsWrapper_current1344.confidential = true;
                                  writer_createJsGraphicsWrapper_current1344.confidential = true;
                                  obj1202.mutable = true;
                                  obj1202.data["leftMost"] = undefined;
                                  var reader_createJsGraphicsWrapper_leftMost1345 = function() {
                                    return this.data["leftMost"];
                                  };
                                  obj1202.methods["leftMost"] = reader_createJsGraphicsWrapper_leftMost1345;
                                  obj1202.data["leftMost"] = undefined;
                                  var writer_createJsGraphicsWrapper_leftMost1345 = function(argcv, o) {
                                    this.data["leftMost"] = o;
                                    return GraceDone;
                                  };
                                  obj1202.methods["leftMost:=(1)"] = writer_createJsGraphicsWrapper_leftMost1345;
                                  reader_createJsGraphicsWrapper_leftMost1345.confidential = true;
                                  writer_createJsGraphicsWrapper_leftMost1345.confidential = true;
                                  obj1202.mutable = true;
                                  obj1202.data["rightMost"] = undefined;
                                  var reader_createJsGraphicsWrapper_rightMost1346 = function() {
                                    return this.data["rightMost"];
                                  };
                                  obj1202.methods["rightMost"] = reader_createJsGraphicsWrapper_rightMost1346;
                                  obj1202.data["rightMost"] = undefined;
                                  var writer_createJsGraphicsWrapper_rightMost1346 = function(argcv, o) {
                                    this.data["rightMost"] = o;
                                    return GraceDone;
                                  };
                                  obj1202.methods["rightMost:=(1)"] = writer_createJsGraphicsWrapper_rightMost1346;
                                  reader_createJsGraphicsWrapper_rightMost1346.confidential = true;
                                  writer_createJsGraphicsWrapper_rightMost1346.confidential = true;
                                  obj1202.mutable = true;
                                  obj1202.data["topMost"] = undefined;
                                  var reader_createJsGraphicsWrapper_topMost1347 = function() {
                                    return this.data["topMost"];
                                  };
                                  obj1202.methods["topMost"] = reader_createJsGraphicsWrapper_topMost1347;
                                  obj1202.data["topMost"] = undefined;
                                  var writer_createJsGraphicsWrapper_topMost1347 = function(argcv, o) {
                                    this.data["topMost"] = o;
                                    return GraceDone;
                                  };
                                  obj1202.methods["topMost:=(1)"] = writer_createJsGraphicsWrapper_topMost1347;
                                  reader_createJsGraphicsWrapper_topMost1347.confidential = true;
                                  writer_createJsGraphicsWrapper_topMost1347.confidential = true;
                                  obj1202.mutable = true;
                                  obj1202.data["bottomMost"] = undefined;
                                  var reader_createJsGraphicsWrapper_bottomMost1348 = function() {
                                    return this.data["bottomMost"];
                                  };
                                  obj1202.methods["bottomMost"] = reader_createJsGraphicsWrapper_bottomMost1348;
                                  obj1202.data["bottomMost"] = undefined;
                                  var writer_createJsGraphicsWrapper_bottomMost1348 = function(argcv, o) {
                                    this.data["bottomMost"] = o;
                                    return GraceDone;
                                  };
                                  obj1202.methods["bottomMost:=(1)"] = writer_createJsGraphicsWrapper_bottomMost1348;
                                  reader_createJsGraphicsWrapper_bottomMost1348.confidential = true;
                                  writer_createJsGraphicsWrapper_bottomMost1348.confidential = true;
                                  obj1202.mutable = true;
                                  superDepth = origSuperDepth;
                                };
                                obj_init_1202.apply(inheritingObject, []);
                                return obj1202;
                                };
                                this.methods["customShape$object(1)"] = func1201;
                              setLineNumber(694);    // compilenode method
                              var func1349 = function(argcv) {    // method tween(_,_)
                                var returnTarget = invocationCount;
                                invocationCount++;
                                var curarg = 1;
                                var var_jsGraphicsObj = arguments[curarg];
                                curarg++;
                                var var_myStage = arguments[curarg];
                                curarg++;
                                setModuleName("createJsGraphicsWrapper");
                                var obj1350 = Grace_allocObject(GraceObject, "tween(_,_)");
                                obj1350.definitionModule = "createJsGraphicsWrapper";
                                obj1350.definitionLine = 694;
                                obj1350.outer = this;
                                var reader_createJsGraphicsWrapper_outer1351 = function() {
                                  return this.outer;
                                };
                                obj1350.methods["outer"] = reader_createJsGraphicsWrapper_outer1351;
                                var obj_init_1350 = function() {
                                  var origSuperDepth = superDepth;
                                  superDepth = obj1350;
                                  var func1352 = function(argcv) {    // method toX(_)
                                    var returnTarget = invocationCount;
                                    invocationCount++;
                                    var curarg = 1;
                                    var var_x = arguments[curarg];
                                    curarg++;
                                    setModuleName("createJsGraphicsWrapper");
                                    setLineNumber(703);    // compilenode call
                                       // start native code from line 703
                                    var result = GraceDone;
                                    var tween = this.data.jsTween;
              this.data.jsTween = tween.to({x:var_x._value}, 250);
                                    var nat1353 = result;
                                       // end native code insertion
                                    return nat1353;
                                  };
                                  func1352.paramCounts = [1];
                                  obj1350.methods["toX(1)"] = func1352;
                                  func1352.definitionLine = 702;
                                  func1352.definitionModule = "createJsGraphicsWrapper";
                                  var func1354 = function(argcv) {    // method wait(_)
                                    var returnTarget = invocationCount;
                                    invocationCount++;
                                    var curarg = 1;
                                    var var_time = arguments[curarg];
                                    curarg++;
                                    setModuleName("createJsGraphicsWrapper");
                                    setLineNumber(708);    // compilenode call
                                       // start native code from line 708
                                    var result = GraceDone;
                                    var tween = this.data.jsTween;
              this.data.jsTween = tween.wait(var_time._value);
                                    var nat1355 = result;
                                       // end native code insertion
                                    return nat1355;
                                  };
                                  func1354.paramCounts = [1];
                                  obj1350.methods["wait(1)"] = func1354;
                                  func1354.definitionLine = 707;
                                  func1354.definitionModule = "createJsGraphicsWrapper";
                                  obj1350.data["jsTween"] = undefined;
                                  var reader_createJsGraphicsWrapper_jsTween1356 = function() {
                                    return this.data["jsTween"];
                                  };
                                  obj1350.methods["jsTween"] = reader_createJsGraphicsWrapper_jsTween1356;
                                  obj1350.data["jsTween"] = undefined;
                                  var writer_createJsGraphicsWrapper_jsTween1356 = function(argcv, o) {
                                    this.data["jsTween"] = o;
                                    return GraceDone;
                                  };
                                  obj1350.methods["jsTween:=(1)"] = writer_createJsGraphicsWrapper_jsTween1356;
                                  reader_createJsGraphicsWrapper_jsTween1356.confidential = true;
                                  writer_createJsGraphicsWrapper_jsTween1356.confidential = true;
                                  obj1350.mutable = true;
                                  setLineNumber(696);    // compilenode call
                                     // start native code from line 696
                                  var result = GraceDone;
                                  var stage = var_myStage.data.mystage;
          createjs.Ticker.setFPS(60);
          createjs.Ticker.addEventListener("tick", stage);
          var shape = var_jsGraphicsObj.data.createJsGraphics;
          this.data.jsTween = createjs.Tween.get(shape, {override:true});
                                  var nat1357 = result;
                                     // end native code insertion
                                  superDepth = origSuperDepth;
                                };
                                obj_init_1350.apply(obj1350, []);
                                return obj1350;
                              };
                              func1349.paramCounts = [2];
                              this.methods["tween(2)"] = func1349;
                              func1349.definitionLine = 694;
                              func1349.definitionModule = "createJsGraphicsWrapper";
                                var func1358 = function(argcv) {    // method tween(_,_)$object(_)
                                  var curarg = 1;
                                  var var_jsGraphicsObj = arguments[curarg];
                                  curarg++;
                                  var var_myStage = arguments[curarg];
                                  curarg++;
                                  var inheritingObject = arguments[curarg++];
                                  // Start argument processing
                                  curarg = 1;
                                  curarg++;
                                  curarg++;
                                  // End argument processing
                                  setModuleName("createJsGraphicsWrapper");
                                  var returnTarget = invocationCount;
                                  invocationCount++;
                                  var obj1359 = Grace_allocObject(GraceObject, "tween(2)");
                                  obj1359.definitionModule = "createJsGraphicsWrapper";
                                  obj1359.definitionLine = 694;
                                  var inho1359 = inheritingObject;
                                  while (inho1359.superobj) inho1359 = inho1359.superobj;
                                  inho1359.superobj = obj1359;
                                  obj1359.data = inheritingObject.data;
                                  if (inheritingObject.hasOwnProperty('_value'))
                                    obj1359._value = inheritingObject._value;
                                  obj1359.outer = this;
                                  var reader_createJsGraphicsWrapper_outer1360 = function() {
                                    return this.outer;
                                  };
                                  obj1359.methods["outer"] = reader_createJsGraphicsWrapper_outer1360;
                                  var obj_init_1359 = function() {
                                    var origSuperDepth = superDepth;
                                    superDepth = obj1359;
                                    var func1361 = function(argcv) {    // method toX(_)
                                      var returnTarget = invocationCount;
                                      invocationCount++;
                                      var curarg = 1;
                                      var var_x = arguments[curarg];
                                      curarg++;
                                      setModuleName("createJsGraphicsWrapper");
                                      setLineNumber(703);    // compilenode call
                                         // start native code from line 703
                                      var result = GraceDone;
                                      var tween = this.data.jsTween;
              this.data.jsTween = tween.to({x:var_x._value}, 250);
                                      var nat1362 = result;
                                         // end native code insertion
                                      return nat1362;
                                    };
                                    func1361.paramCounts = [1];
                                    obj1359.methods["toX(1)"] = func1361;
                                    func1361.definitionLine = 702;
                                    func1361.definitionModule = "createJsGraphicsWrapper";
                                    var func1363 = function(argcv) {    // method wait(_)
                                      var returnTarget = invocationCount;
                                      invocationCount++;
                                      var curarg = 1;
                                      var var_time = arguments[curarg];
                                      curarg++;
                                      setModuleName("createJsGraphicsWrapper");
                                      setLineNumber(708);    // compilenode call
                                         // start native code from line 708
                                      var result = GraceDone;
                                      var tween = this.data.jsTween;
              this.data.jsTween = tween.wait(var_time._value);
                                      var nat1364 = result;
                                         // end native code insertion
                                      return nat1364;
                                    };
                                    func1363.paramCounts = [1];
                                    obj1359.methods["wait(1)"] = func1363;
                                    func1363.definitionLine = 707;
                                    func1363.definitionModule = "createJsGraphicsWrapper";
                                    obj1359.data["jsTween"] = undefined;
                                    var reader_createJsGraphicsWrapper_jsTween1365 = function() {
                                      return this.data["jsTween"];
                                    };
                                    obj1359.methods["jsTween"] = reader_createJsGraphicsWrapper_jsTween1365;
                                    obj1359.data["jsTween"] = undefined;
                                    var writer_createJsGraphicsWrapper_jsTween1365 = function(argcv, o) {
                                      this.data["jsTween"] = o;
                                      return GraceDone;
                                    };
                                    obj1359.methods["jsTween:=(1)"] = writer_createJsGraphicsWrapper_jsTween1365;
                                    reader_createJsGraphicsWrapper_jsTween1365.confidential = true;
                                    writer_createJsGraphicsWrapper_jsTween1365.confidential = true;
                                    obj1359.mutable = true;
                                    setLineNumber(696);    // compilenode call
                                       // start native code from line 696
                                    var result = GraceDone;
                                    var stage = var_myStage.data.mystage;
          createjs.Ticker.setFPS(60);
          createjs.Ticker.addEventListener("tick", stage);
          var shape = var_jsGraphicsObj.data.createJsGraphics;
          this.data.jsTween = createjs.Tween.get(shape, {override:true});
                                    var nat1366 = result;
                                       // end native code insertion
                                    superDepth = origSuperDepth;
                                  };
                                  obj_init_1359.apply(inheritingObject, []);
                                  return obj1359;
                                  };
                                  this.methods["tween(2)$object(1)"] = func1358;
                                setLineNumber(713);    // compilenode method
                                var func1367 = function(argcv) {    // method inputBox(_)
                                  var returnTarget = invocationCount;
                                  invocationCount++;
                                  var curarg = 1;
                                  var var_mystage = arguments[curarg];
                                  curarg++;
                                  setModuleName("createJsGraphicsWrapper");
                                  var obj1368 = Grace_allocObject(GraceObject, "inputBox(_)");
                                  obj1368.definitionModule = "createJsGraphicsWrapper";
                                  obj1368.definitionLine = 713;
                                  obj1368.outer = this;
                                  var reader_createJsGraphicsWrapper_outer1369 = function() {
                                    return this.outer;
                                  };
                                  obj1368.methods["outer"] = reader_createJsGraphicsWrapper_outer1369;
                                  var obj_init_1368 = function() {
                                    var origSuperDepth = superDepth;
                                    superDepth = obj1368;
                                    var func1370 = function(argcv) {    // method value
                                      var returnTarget = invocationCount;
                                      invocationCount++;
                                      var curarg = 1;
                                      setModuleName("createJsGraphicsWrapper");
                                      setLineNumber(726);    // compilenode call
                                         // start native code from line 726
                                      var result = GraceDone;
                                      
              var input = this.data.input;
              return new GraceString(input.value());
        
                                      var nat1371 = result;
                                         // end native code insertion
                                      return nat1371;
                                    };
                                    func1370.paramCounts = [0];
                                    obj1368.methods["value"] = func1370;
                                    func1370.definitionLine = 725;
                                    func1370.definitionModule = "createJsGraphicsWrapper";
                                    var func1372 = function(argcv) {    // method value:=(_)
                                      var returnTarget = invocationCount;
                                      invocationCount++;
                                      var curarg = 1;
                                      var var_newval = arguments[curarg];
                                      curarg++;
                                      setModuleName("createJsGraphicsWrapper");
                                      setLineNumber(733);    // compilenode call
                                         // start native code from line 733
                                      var result = GraceDone;
                                      
              var newval = var_newval._value;
              var input = this.data.input;
              input.value(newval);
              input.focus();
        
                                      var nat1373 = result;
                                         // end native code insertion
                                      return nat1373;
                                    };
                                    func1372.paramCounts = [1];
                                    obj1368.methods["value:=(1)"] = func1372;
                                    func1372.definitionLine = 732;
                                    func1372.definitionModule = "createJsGraphicsWrapper";
                                    var func1374 = function(argcv) {    // method draw
                                      var returnTarget = invocationCount;
                                      invocationCount++;
                                      var curarg = 1;
                                      setModuleName("createJsGraphicsWrapper");
                                      setLineNumber(742);    // compilenode call
                                         // start native code from line 742
                                      var result = GraceDone;
                                      
              var stage = var_mystage;
              var mycanvas = stage.stage.canvas;
              var input = new CanvasInput({
                  canvas: mycanvas,
                  x: this.data.location.data.x._value,
                  y: this.data.location.data.y._value,
                  width: this.data.width._value,
                  height: this.data.height._value,
                  fontSize: this.data.fontSize._value,
                  fontFamily: this.data.fontFamily._value,
                  fontColor: this.data.fontColor._value,
                  backgroundColor: this.data.backgroundColor._value,
                  borderColor: this.data.borderColor._value
        });
        input.focus();
        this.data.input = input;
        
                                      var nat1375 = result;
                                         // end native code insertion
                                      setLineNumber(760);    // compilenode member
                                      // call case 4: self request
                                      onSelf = true;
                                      var call1378 = callmethodChecked(this, "submitBlock", []);
                                      // call case 4: self request
                                      onSelf = true;
                                      var call1379 = callmethodChecked(this, "onSubmit(2)", [2], this, call1378);
                                      return call1379;
                                    };
                                    func1374.paramCounts = [0];
                                    obj1368.methods["draw"] = func1374;
                                    func1374.definitionLine = 741;
                                    func1374.definitionModule = "createJsGraphicsWrapper";
                                    var func1380 = function(argcv) {    // method focus
                                      var returnTarget = invocationCount;
                                      invocationCount++;
                                      var curarg = 1;
                                      setModuleName("createJsGraphicsWrapper");
                                      setLineNumber(764);    // compilenode call
                                         // start native code from line 764
                                      var result = GraceDone;
                                      
              var input = this.data.input;
              input.focus();
        
                                      var nat1381 = result;
                                         // end native code insertion
                                      return nat1381;
                                    };
                                    func1380.paramCounts = [0];
                                    obj1368.methods["focus"] = func1380;
                                    func1380.definitionLine = 763;
                                    func1380.definitionModule = "createJsGraphicsWrapper";
                                    var func1382 = function(argcv) {    // method destroy
                                      var returnTarget = invocationCount;
                                      invocationCount++;
                                      var curarg = 1;
                                      setModuleName("createJsGraphicsWrapper");
                                      setLineNumber(771);    // compilenode call
                                         // start native code from line 771
                                      var result = GraceDone;
                                      
              var input = this.data.input;
              input.destroy();
        
                                      var nat1383 = result;
                                         // end native code insertion
                                      return nat1383;
                                    };
                                    func1382.paramCounts = [0];
                                    obj1368.methods["destroy"] = func1382;
                                    func1382.definitionLine = 770;
                                    func1382.definitionModule = "createJsGraphicsWrapper";
                                    var func1384 = function(argcv) {    // method callSubmit
                                      var returnTarget = invocationCount;
                                      invocationCount++;
                                      var curarg = 1;
                                      setModuleName("createJsGraphicsWrapper");
                                      setLineNumber(778);    // compilenode member
                                      // call case 6: other requests
                                      // call case 4: self request
                                      onSelf = true;
                                      var call1387 = callmethodChecked(this, "submitBlock", []);
                                      var call1388 = callmethodChecked(call1387, "apply", []);
                                      return call1388;
                                    };
                                    func1384.paramCounts = [0];
                                    obj1368.methods["callSubmit"] = func1384;
                                    func1384.definitionLine = 777;
                                    func1384.definitionModule = "createJsGraphicsWrapper";
                                    var func1389 = function(argcv) {    // method onSubmit(_,_)
                                      var returnTarget = invocationCount;
                                      invocationCount++;
                                      var curarg = 1;
                                      var var_inputObj = arguments[curarg];
                                      curarg++;
                                      var var_block = arguments[curarg];
                                      curarg++;
                                      setModuleName("createJsGraphicsWrapper");
                                      setLineNumber(782);    // compilenode identifier
                                      // call case 4: self request
                                      onSelf = true;
                                      var call1391 = callmethodChecked(this, "submitBlock:=(1)", [1], var_block);
                                      setLineNumber(783);    // compilenode call
                                         // start native code from line 783
                                      var result = GraceDone;
                                      
              if(this.data.input != null) {
                  var input = this.data.input;
                  input.onsubmit(function(event) {
                      minigrace.trapErrors(function() {
                          callmethod(var_inputObj, "callSubmit", [0])
                });
            });
        }
        
                                      var nat1392 = result;
                                         // end native code insertion
                                      return nat1392;
                                    };
                                    func1389.paramCounts = [2];
                                    obj1368.methods["onSubmit(2)"] = func1389;
                                    func1389.definitionLine = 781;
                                    func1389.definitionModule = "createJsGraphicsWrapper";
                                    obj1368.data["location"] = undefined;
                                    var reader_createJsGraphicsWrapper_location1393 = function() {
                                      return this.data["location"];
                                    };
                                    obj1368.methods["location"] = reader_createJsGraphicsWrapper_location1393;
                                    obj1368.data["location"] = undefined;
                                    var writer_createJsGraphicsWrapper_location1393 = function(argcv, o) {
                                      this.data["location"] = o;
                                      return GraceDone;
                                    };
                                    obj1368.methods["location:=(1)"] = writer_createJsGraphicsWrapper_location1393;
                                    obj1368.mutable = true;
                                    obj1368.data["width"] = undefined;
                                    var reader_createJsGraphicsWrapper_width1394 = function() {
                                      return this.data["width"];
                                    };
                                    obj1368.methods["width"] = reader_createJsGraphicsWrapper_width1394;
                                    obj1368.data["width"] = undefined;
                                    var writer_createJsGraphicsWrapper_width1394 = function(argcv, o) {
                                      this.data["width"] = o;
                                      return GraceDone;
                                    };
                                    obj1368.methods["width:=(1)"] = writer_createJsGraphicsWrapper_width1394;
                                    obj1368.mutable = true;
                                    obj1368.data["height"] = undefined;
                                    var reader_createJsGraphicsWrapper_height1395 = function() {
                                      return this.data["height"];
                                    };
                                    obj1368.methods["height"] = reader_createJsGraphicsWrapper_height1395;
                                    obj1368.data["height"] = undefined;
                                    var writer_createJsGraphicsWrapper_height1395 = function(argcv, o) {
                                      this.data["height"] = o;
                                      return GraceDone;
                                    };
                                    obj1368.methods["height:=(1)"] = writer_createJsGraphicsWrapper_height1395;
                                    obj1368.mutable = true;
                                    obj1368.data["fontSize"] = undefined;
                                    var reader_createJsGraphicsWrapper_fontSize1396 = function() {
                                      return this.data["fontSize"];
                                    };
                                    obj1368.methods["fontSize"] = reader_createJsGraphicsWrapper_fontSize1396;
                                    obj1368.data["fontSize"] = undefined;
                                    var writer_createJsGraphicsWrapper_fontSize1396 = function(argcv, o) {
                                      this.data["fontSize"] = o;
                                      return GraceDone;
                                    };
                                    obj1368.methods["fontSize:=(1)"] = writer_createJsGraphicsWrapper_fontSize1396;
                                    obj1368.mutable = true;
                                    obj1368.data["fontFamily"] = undefined;
                                    var reader_createJsGraphicsWrapper_fontFamily1397 = function() {
                                      return this.data["fontFamily"];
                                    };
                                    obj1368.methods["fontFamily"] = reader_createJsGraphicsWrapper_fontFamily1397;
                                    obj1368.data["fontFamily"] = undefined;
                                    var writer_createJsGraphicsWrapper_fontFamily1397 = function(argcv, o) {
                                      this.data["fontFamily"] = o;
                                      return GraceDone;
                                    };
                                    obj1368.methods["fontFamily:=(1)"] = writer_createJsGraphicsWrapper_fontFamily1397;
                                    obj1368.mutable = true;
                                    obj1368.data["fontColor"] = undefined;
                                    var reader_createJsGraphicsWrapper_fontColor1398 = function() {
                                      return this.data["fontColor"];
                                    };
                                    obj1368.methods["fontColor"] = reader_createJsGraphicsWrapper_fontColor1398;
                                    obj1368.data["fontColor"] = undefined;
                                    var writer_createJsGraphicsWrapper_fontColor1398 = function(argcv, o) {
                                      this.data["fontColor"] = o;
                                      return GraceDone;
                                    };
                                    obj1368.methods["fontColor:=(1)"] = writer_createJsGraphicsWrapper_fontColor1398;
                                    obj1368.mutable = true;
                                    obj1368.data["backgroundColor"] = undefined;
                                    var reader_createJsGraphicsWrapper_backgroundColor1399 = function() {
                                      return this.data["backgroundColor"];
                                    };
                                    obj1368.methods["backgroundColor"] = reader_createJsGraphicsWrapper_backgroundColor1399;
                                    obj1368.data["backgroundColor"] = undefined;
                                    var writer_createJsGraphicsWrapper_backgroundColor1399 = function(argcv, o) {
                                      this.data["backgroundColor"] = o;
                                      return GraceDone;
                                    };
                                    obj1368.methods["backgroundColor:=(1)"] = writer_createJsGraphicsWrapper_backgroundColor1399;
                                    obj1368.mutable = true;
                                    obj1368.data["borderColor"] = undefined;
                                    var reader_createJsGraphicsWrapper_borderColor1400 = function() {
                                      return this.data["borderColor"];
                                    };
                                    obj1368.methods["borderColor"] = reader_createJsGraphicsWrapper_borderColor1400;
                                    obj1368.data["borderColor"] = undefined;
                                    var writer_createJsGraphicsWrapper_borderColor1400 = function(argcv, o) {
                                      this.data["borderColor"] = o;
                                      return GraceDone;
                                    };
                                    obj1368.methods["borderColor:=(1)"] = writer_createJsGraphicsWrapper_borderColor1400;
                                    obj1368.mutable = true;
                                    setLineNumber(722);    // compilenode block
                                    var block1401 = new GraceBlock(this, 722, 0);
                                    block1401.real = function() {
                                      return GraceDone;
                                    };
                                    obj1368.data["submitBlock"] = block1401;
                                    var reader_createJsGraphicsWrapper_submitBlock1402 = function() {
                                      return this.data["submitBlock"];
                                    };
                                    obj1368.methods["submitBlock"] = reader_createJsGraphicsWrapper_submitBlock1402;
                                    obj1368.data["submitBlock"] = block1401;
                                    var writer_createJsGraphicsWrapper_submitBlock1402 = function(argcv, o) {
                                      this.data["submitBlock"] = o;
                                      return GraceDone;
                                    };
                                    obj1368.methods["submitBlock:=(1)"] = writer_createJsGraphicsWrapper_submitBlock1402;
                                    reader_createJsGraphicsWrapper_submitBlock1402.confidential = true;
                                    writer_createJsGraphicsWrapper_submitBlock1402.confidential = true;
                                    obj1368.mutable = true;
                                    obj1368.data["input"] = undefined;
                                    var reader_createJsGraphicsWrapper_input1403 = function() {
                                      return this.data["input"];
                                    };
                                    obj1368.methods["input"] = reader_createJsGraphicsWrapper_input1403;
                                    obj1368.data["input"] = undefined;
                                    var writer_createJsGraphicsWrapper_input1403 = function(argcv, o) {
                                      this.data["input"] = o;
                                      return GraceDone;
                                    };
                                    obj1368.methods["input:=(1)"] = writer_createJsGraphicsWrapper_input1403;
                                    reader_createJsGraphicsWrapper_input1403.confidential = true;
                                    writer_createJsGraphicsWrapper_input1403.confidential = true;
                                    obj1368.mutable = true;
                                    superDepth = origSuperDepth;
                                  };
                                  obj_init_1368.apply(obj1368, []);
                                  return obj1368;
                                };
                                func1367.paramCounts = [1];
                                this.methods["inputBox(1)"] = func1367;
                                func1367.definitionLine = 713;
                                func1367.definitionModule = "createJsGraphicsWrapper";
                                  var func1404 = function(argcv) {    // method inputBox(_)$object(_)
                                    var curarg = 1;
                                    var var_mystage = arguments[curarg];
                                    curarg++;
                                    var inheritingObject = arguments[curarg++];
                                    // Start argument processing
                                    curarg = 1;
                                    curarg++;
                                    // End argument processing
                                    setModuleName("createJsGraphicsWrapper");
                                    var returnTarget = invocationCount;
                                    invocationCount++;
                                    var obj1405 = Grace_allocObject(GraceObject, "inputBox(1)");
                                    obj1405.definitionModule = "createJsGraphicsWrapper";
                                    obj1405.definitionLine = 713;
                                    var inho1405 = inheritingObject;
                                    while (inho1405.superobj) inho1405 = inho1405.superobj;
                                    inho1405.superobj = obj1405;
                                    obj1405.data = inheritingObject.data;
                                    if (inheritingObject.hasOwnProperty('_value'))
                                      obj1405._value = inheritingObject._value;
                                    obj1405.outer = this;
                                    var reader_createJsGraphicsWrapper_outer1406 = function() {
                                      return this.outer;
                                    };
                                    obj1405.methods["outer"] = reader_createJsGraphicsWrapper_outer1406;
                                    var obj_init_1405 = function() {
                                      var origSuperDepth = superDepth;
                                      superDepth = obj1405;
                                      var func1407 = function(argcv) {    // method value
                                        var returnTarget = invocationCount;
                                        invocationCount++;
                                        var curarg = 1;
                                        setModuleName("createJsGraphicsWrapper");
                                        setLineNumber(726);    // compilenode call
                                           // start native code from line 726
                                        var result = GraceDone;
                                        
              var input = this.data.input;
              return new GraceString(input.value());
        
                                        var nat1408 = result;
                                           // end native code insertion
                                        return nat1408;
                                      };
                                      func1407.paramCounts = [0];
                                      obj1405.methods["value"] = func1407;
                                      func1407.definitionLine = 725;
                                      func1407.definitionModule = "createJsGraphicsWrapper";
                                      var func1409 = function(argcv) {    // method value:=(_)
                                        var returnTarget = invocationCount;
                                        invocationCount++;
                                        var curarg = 1;
                                        var var_newval = arguments[curarg];
                                        curarg++;
                                        setModuleName("createJsGraphicsWrapper");
                                        setLineNumber(733);    // compilenode call
                                           // start native code from line 733
                                        var result = GraceDone;
                                        
              var newval = var_newval._value;
              var input = this.data.input;
              input.value(newval);
              input.focus();
        
                                        var nat1410 = result;
                                           // end native code insertion
                                        return nat1410;
                                      };
                                      func1409.paramCounts = [1];
                                      obj1405.methods["value:=(1)"] = func1409;
                                      func1409.definitionLine = 732;
                                      func1409.definitionModule = "createJsGraphicsWrapper";
                                      var func1411 = function(argcv) {    // method draw
                                        var returnTarget = invocationCount;
                                        invocationCount++;
                                        var curarg = 1;
                                        setModuleName("createJsGraphicsWrapper");
                                        setLineNumber(742);    // compilenode call
                                           // start native code from line 742
                                        var result = GraceDone;
                                        
              var stage = var_mystage;
              var mycanvas = stage.stage.canvas;
              var input = new CanvasInput({
                  canvas: mycanvas,
                  x: this.data.location.data.x._value,
                  y: this.data.location.data.y._value,
                  width: this.data.width._value,
                  height: this.data.height._value,
                  fontSize: this.data.fontSize._value,
                  fontFamily: this.data.fontFamily._value,
                  fontColor: this.data.fontColor._value,
                  backgroundColor: this.data.backgroundColor._value,
                  borderColor: this.data.borderColor._value
        });
        input.focus();
        this.data.input = input;
        
                                        var nat1412 = result;
                                           // end native code insertion
                                        setLineNumber(760);    // compilenode member
                                        // call case 4: self request
                                        onSelf = true;
                                        var call1415 = callmethodChecked(this, "submitBlock", []);
                                        // call case 4: self request
                                        onSelf = true;
                                        var call1416 = callmethodChecked(this, "onSubmit(2)", [2], this, call1415);
                                        return call1416;
                                      };
                                      func1411.paramCounts = [0];
                                      obj1405.methods["draw"] = func1411;
                                      func1411.definitionLine = 741;
                                      func1411.definitionModule = "createJsGraphicsWrapper";
                                      var func1417 = function(argcv) {    // method focus
                                        var returnTarget = invocationCount;
                                        invocationCount++;
                                        var curarg = 1;
                                        setModuleName("createJsGraphicsWrapper");
                                        setLineNumber(764);    // compilenode call
                                           // start native code from line 764
                                        var result = GraceDone;
                                        
              var input = this.data.input;
              input.focus();
        
                                        var nat1418 = result;
                                           // end native code insertion
                                        return nat1418;
                                      };
                                      func1417.paramCounts = [0];
                                      obj1405.methods["focus"] = func1417;
                                      func1417.definitionLine = 763;
                                      func1417.definitionModule = "createJsGraphicsWrapper";
                                      var func1419 = function(argcv) {    // method destroy
                                        var returnTarget = invocationCount;
                                        invocationCount++;
                                        var curarg = 1;
                                        setModuleName("createJsGraphicsWrapper");
                                        setLineNumber(771);    // compilenode call
                                           // start native code from line 771
                                        var result = GraceDone;
                                        
              var input = this.data.input;
              input.destroy();
        
                                        var nat1420 = result;
                                           // end native code insertion
                                        return nat1420;
                                      };
                                      func1419.paramCounts = [0];
                                      obj1405.methods["destroy"] = func1419;
                                      func1419.definitionLine = 770;
                                      func1419.definitionModule = "createJsGraphicsWrapper";
                                      var func1421 = function(argcv) {    // method callSubmit
                                        var returnTarget = invocationCount;
                                        invocationCount++;
                                        var curarg = 1;
                                        setModuleName("createJsGraphicsWrapper");
                                        setLineNumber(778);    // compilenode member
                                        // call case 6: other requests
                                        // call case 4: self request
                                        onSelf = true;
                                        var call1424 = callmethodChecked(this, "submitBlock", []);
                                        var call1425 = callmethodChecked(call1424, "apply", []);
                                        return call1425;
                                      };
                                      func1421.paramCounts = [0];
                                      obj1405.methods["callSubmit"] = func1421;
                                      func1421.definitionLine = 777;
                                      func1421.definitionModule = "createJsGraphicsWrapper";
                                      var func1426 = function(argcv) {    // method onSubmit(_,_)
                                        var returnTarget = invocationCount;
                                        invocationCount++;
                                        var curarg = 1;
                                        var var_inputObj = arguments[curarg];
                                        curarg++;
                                        var var_block = arguments[curarg];
                                        curarg++;
                                        setModuleName("createJsGraphicsWrapper");
                                        setLineNumber(782);    // compilenode identifier
                                        // call case 4: self request
                                        onSelf = true;
                                        var call1428 = callmethodChecked(this, "submitBlock:=(1)", [1], var_block);
                                        setLineNumber(783);    // compilenode call
                                           // start native code from line 783
                                        var result = GraceDone;
                                        
              if(this.data.input != null) {
                  var input = this.data.input;
                  input.onsubmit(function(event) {
                      minigrace.trapErrors(function() {
                          callmethod(var_inputObj, "callSubmit", [0])
                });
            });
        }
        
                                        var nat1429 = result;
                                           // end native code insertion
                                        return nat1429;
                                      };
                                      func1426.paramCounts = [2];
                                      obj1405.methods["onSubmit(2)"] = func1426;
                                      func1426.definitionLine = 781;
                                      func1426.definitionModule = "createJsGraphicsWrapper";
                                      obj1405.data["location"] = undefined;
                                      var reader_createJsGraphicsWrapper_location1430 = function() {
                                        return this.data["location"];
                                      };
                                      obj1405.methods["location"] = reader_createJsGraphicsWrapper_location1430;
                                      obj1405.data["location"] = undefined;
                                      var writer_createJsGraphicsWrapper_location1430 = function(argcv, o) {
                                        this.data["location"] = o;
                                        return GraceDone;
                                      };
                                      obj1405.methods["location:=(1)"] = writer_createJsGraphicsWrapper_location1430;
                                      obj1405.mutable = true;
                                      obj1405.data["width"] = undefined;
                                      var reader_createJsGraphicsWrapper_width1431 = function() {
                                        return this.data["width"];
                                      };
                                      obj1405.methods["width"] = reader_createJsGraphicsWrapper_width1431;
                                      obj1405.data["width"] = undefined;
                                      var writer_createJsGraphicsWrapper_width1431 = function(argcv, o) {
                                        this.data["width"] = o;
                                        return GraceDone;
                                      };
                                      obj1405.methods["width:=(1)"] = writer_createJsGraphicsWrapper_width1431;
                                      obj1405.mutable = true;
                                      obj1405.data["height"] = undefined;
                                      var reader_createJsGraphicsWrapper_height1432 = function() {
                                        return this.data["height"];
                                      };
                                      obj1405.methods["height"] = reader_createJsGraphicsWrapper_height1432;
                                      obj1405.data["height"] = undefined;
                                      var writer_createJsGraphicsWrapper_height1432 = function(argcv, o) {
                                        this.data["height"] = o;
                                        return GraceDone;
                                      };
                                      obj1405.methods["height:=(1)"] = writer_createJsGraphicsWrapper_height1432;
                                      obj1405.mutable = true;
                                      obj1405.data["fontSize"] = undefined;
                                      var reader_createJsGraphicsWrapper_fontSize1433 = function() {
                                        return this.data["fontSize"];
                                      };
                                      obj1405.methods["fontSize"] = reader_createJsGraphicsWrapper_fontSize1433;
                                      obj1405.data["fontSize"] = undefined;
                                      var writer_createJsGraphicsWrapper_fontSize1433 = function(argcv, o) {
                                        this.data["fontSize"] = o;
                                        return GraceDone;
                                      };
                                      obj1405.methods["fontSize:=(1)"] = writer_createJsGraphicsWrapper_fontSize1433;
                                      obj1405.mutable = true;
                                      obj1405.data["fontFamily"] = undefined;
                                      var reader_createJsGraphicsWrapper_fontFamily1434 = function() {
                                        return this.data["fontFamily"];
                                      };
                                      obj1405.methods["fontFamily"] = reader_createJsGraphicsWrapper_fontFamily1434;
                                      obj1405.data["fontFamily"] = undefined;
                                      var writer_createJsGraphicsWrapper_fontFamily1434 = function(argcv, o) {
                                        this.data["fontFamily"] = o;
                                        return GraceDone;
                                      };
                                      obj1405.methods["fontFamily:=(1)"] = writer_createJsGraphicsWrapper_fontFamily1434;
                                      obj1405.mutable = true;
                                      obj1405.data["fontColor"] = undefined;
                                      var reader_createJsGraphicsWrapper_fontColor1435 = function() {
                                        return this.data["fontColor"];
                                      };
                                      obj1405.methods["fontColor"] = reader_createJsGraphicsWrapper_fontColor1435;
                                      obj1405.data["fontColor"] = undefined;
                                      var writer_createJsGraphicsWrapper_fontColor1435 = function(argcv, o) {
                                        this.data["fontColor"] = o;
                                        return GraceDone;
                                      };
                                      obj1405.methods["fontColor:=(1)"] = writer_createJsGraphicsWrapper_fontColor1435;
                                      obj1405.mutable = true;
                                      obj1405.data["backgroundColor"] = undefined;
                                      var reader_createJsGraphicsWrapper_backgroundColor1436 = function() {
                                        return this.data["backgroundColor"];
                                      };
                                      obj1405.methods["backgroundColor"] = reader_createJsGraphicsWrapper_backgroundColor1436;
                                      obj1405.data["backgroundColor"] = undefined;
                                      var writer_createJsGraphicsWrapper_backgroundColor1436 = function(argcv, o) {
                                        this.data["backgroundColor"] = o;
                                        return GraceDone;
                                      };
                                      obj1405.methods["backgroundColor:=(1)"] = writer_createJsGraphicsWrapper_backgroundColor1436;
                                      obj1405.mutable = true;
                                      obj1405.data["borderColor"] = undefined;
                                      var reader_createJsGraphicsWrapper_borderColor1437 = function() {
                                        return this.data["borderColor"];
                                      };
                                      obj1405.methods["borderColor"] = reader_createJsGraphicsWrapper_borderColor1437;
                                      obj1405.data["borderColor"] = undefined;
                                      var writer_createJsGraphicsWrapper_borderColor1437 = function(argcv, o) {
                                        this.data["borderColor"] = o;
                                        return GraceDone;
                                      };
                                      obj1405.methods["borderColor:=(1)"] = writer_createJsGraphicsWrapper_borderColor1437;
                                      obj1405.mutable = true;
                                      setLineNumber(722);    // compilenode block
                                      var block1438 = new GraceBlock(this, 722, 0);
                                      block1438.real = function() {
                                        return GraceDone;
                                      };
                                      obj1405.data["submitBlock"] = block1438;
                                      var reader_createJsGraphicsWrapper_submitBlock1439 = function() {
                                        return this.data["submitBlock"];
                                      };
                                      obj1405.methods["submitBlock"] = reader_createJsGraphicsWrapper_submitBlock1439;
                                      obj1405.data["submitBlock"] = block1438;
                                      var writer_createJsGraphicsWrapper_submitBlock1439 = function(argcv, o) {
                                        this.data["submitBlock"] = o;
                                        return GraceDone;
                                      };
                                      obj1405.methods["submitBlock:=(1)"] = writer_createJsGraphicsWrapper_submitBlock1439;
                                      reader_createJsGraphicsWrapper_submitBlock1439.confidential = true;
                                      writer_createJsGraphicsWrapper_submitBlock1439.confidential = true;
                                      obj1405.mutable = true;
                                      obj1405.data["input"] = undefined;
                                      var reader_createJsGraphicsWrapper_input1440 = function() {
                                        return this.data["input"];
                                      };
                                      obj1405.methods["input"] = reader_createJsGraphicsWrapper_input1440;
                                      obj1405.data["input"] = undefined;
                                      var writer_createJsGraphicsWrapper_input1440 = function(argcv, o) {
                                        this.data["input"] = o;
                                        return GraceDone;
                                      };
                                      obj1405.methods["input:=(1)"] = writer_createJsGraphicsWrapper_input1440;
                                      reader_createJsGraphicsWrapper_input1440.confidential = true;
                                      writer_createJsGraphicsWrapper_input1440.confidential = true;
                                      obj1405.mutable = true;
                                      superDepth = origSuperDepth;
                                    };
                                    obj_init_1405.apply(inheritingObject, []);
                                    return obj1405;
                                    };
                                    this.methods["inputBox(1)$object(1)"] = func1404;
                                  return this;
                                }
                                gracecode_createJsGraphicsWrapper.imports = [];
                                if (typeof gctCache !== "undefined")
                                  gctCache['createJsGraphicsWrapper'] = "classes:\nconfidential:\nfresh-methods:\n arc\n circle\n commonGraphics\n container\n customShape\n ellipse\n eventListener\n inputBox(1)\n line\n polyStar\n rectangle\n roundRect\n shape\n stage(2)\n text\n tween(2)\nfresh:arc:\n ::(1)\n addClickListener(2)\n addMouseDownListener(2)\n addMouseOverListener(2)\n addMouseUpListener(2)\n addPressMoveListener(2)\n anticlockwise\n asDebugString\n asString\n basicAsString\n beginFill(1)\n beginStroke(1)\n clear\n color\n createJsGraphics\n draw(4)\n endAngle\n hitTest(2)\n isMe(1)\n listener\n location\n mouseLocation\n move(2)\n new\n radius\n setLocation(1)\n setVisible(1)\n startAngle\n \u2260(1)\nfresh:circle:\n ::(1)\n addClickListener(2)\n addMouseDownListener(2)\n addMouseOverListener(2)\n addMouseUpListener(2)\n addPressMoveListener(2)\n asDebugString\n asString\n basicAsString\n beginFill(1)\n beginStroke(1)\n clear\n color\n createJsGraphics\n draw(1)\n hitTest(2)\n isMe(1)\n listener\n location\n mouseLocation\n move(2)\n new\n radius\n setLocation(1)\n setVisible(1)\n \u2260(1)\nfresh:commonGraphics:\n addClickListener(2)\n addMouseDownListener(2)\n addMouseOverListener(2)\n addMouseUpListener(2)\n addPressMoveListener(2)\n color\n createJsGraphics\n hitTest(2)\n listener\n location\n mouseLocation\n move(2)\n setLocation(1)\n setVisible(1)\nfresh:container:\n ::(1)\n add(1)\n addClickListener(2)\n addMouseDownListener(2)\n addMouseOverListener(2)\n addMouseUpListener(2)\n addPressMoveListener(2)\n asDebugString\n asString\n basicAsString\n color\n createJsGraphics\n hitTest(2)\n isMe(1)\n listener\n location\n mouseLocation\n move(2)\n new\n setLocation(1)\n setVisible(1)\n \u2260(1)\nfresh:customShape:\n ::(1)\n addClickListener(2)\n addMouseDownListener(2)\n addMouseOverListener(2)\n addMouseUpListener(2)\n addPoint(1)\n addPressMoveListener(2)\n asDebugString\n asString\n basicAsString\n beginFill(1)\n beginStroke(1)\n bottomMost\n calcBounds(1)\n clear\n color\n createJsGraphics\n current\n draw(2)\n hitTest(2)\n isMe(1)\n leftMost\n listener\n location\n mouseLocation\n move(2)\n new\n points\n rightMost\n setBounds\n setLocation(1)\n setVisible(1)\n stroke\n topMost\n \u2260(1)\nfresh:ellipse:\n ::(1)\n addClickListener(2)\n addMouseDownListener(2)\n addMouseOverListener(2)\n addMouseUpListener(2)\n addPressMoveListener(2)\n asDebugString\n asString\n basicAsString\n beginFill(1)\n beginStroke(1)\n clear\n color\n createJsGraphics\n draw(2)\n height\n hitTest(2)\n isMe(1)\n listener\n location\n mouseLocation\n move(2)\n new\n setLocation(1)\n setVisible(1)\n width\n \u2260(1)\nfresh:eventListener:\n addClickListener(2)\n addMouseDownListener(2)\n addMouseExitListener(2)\n addMouseOverListener(2)\n addMouseUpListener(2)\n addPressMoveListener(2)\n addStageDownListener(2)\n addStageMouseMoveListener(2)\n addStageUpListener(2)\n clickBlock\n mouseDownBlock\n mouseExitBlock\n mouseLocation\n mouseLocation'\n mouseOverBlock\n mouseUpBlock\n onClick(2)\n onClick:=(1)\n onMouseDown(2)\n onMouseDown:=(1)\n onMouseExit\n onMouseExit:=(1)\n onMouseOver(2)\n onMouseOver:=(1)\n onMouseUp(2)\n onMouseUp:=(1)\n onPressMove(2)\n onPressMove:=(1)\n pressMoveBlock\nfresh:inputBox(1):\n backgroundColor\n borderColor\n callSubmit\n destroy\n draw\n focus\n fontColor\n fontFamily\n fontSize\n height\n input\n location\n onSubmit(2)\n submitBlock\n value\n value:=(1)\n width\nfresh:line:\n ::(1)\n addClickListener(2)\n addMouseDownListener(2)\n addMouseOverListener(2)\n addMouseUpListener(2)\n addPressMoveListener(2)\n asDebugString\n asString\n basicAsString\n beginFill(1)\n beginStroke(1)\n clear\n color\n createJsGraphics\n draw(2)\n end\n hitTest(2)\n isMe(1)\n listener\n location\n mouseLocation\n move(2)\n new\n setLocation(1)\n setVisible(1)\n start\n \u2260(1)\nfresh:polyStar:\n ::(1)\n addClickListener(2)\n addMouseDownListener(2)\n addMouseOverListener(2)\n addMouseUpListener(2)\n addPressMoveListener(2)\n angle\n asDebugString\n asString\n basicAsString\n beginFill(1)\n beginStroke(1)\n clear\n color\n createJsGraphics\n draw(4)\n hitTest(2)\n isMe(1)\n listener\n location\n mouseLocation\n move(2)\n new\n pointSize\n setLocation(1)\n setVisible(1)\n sides\n size\n \u2260(1)\nfresh:rectangle:\n ::(1)\n addClickListener(2)\n addMouseDownListener(2)\n addMouseOverListener(2)\n addMouseUpListener(2)\n addPressMoveListener(2)\n asDebugString\n asString\n basicAsString\n beginFill(1)\n beginStroke(1)\n clear\n color\n createJsGraphics\n draw(2)\n height\n hitTest(2)\n isMe(1)\n listener\n location\n mouseLocation\n move(2)\n new\n setLocation(1)\n setVisible(1)\n width\n \u2260(1)\nfresh:roundRect:\n ::(1)\n addClickListener(2)\n addMouseDownListener(2)\n addMouseOverListener(2)\n addMouseUpListener(2)\n addPressMoveListener(2)\n asDebugString\n asString\n basicAsString\n beginFill(1)\n beginStroke(1)\n clear\n color\n createJsGraphics\n draw(3)\n height\n hitTest(2)\n isMe(1)\n listener\n location\n mouseLocation\n move(2)\n new\n radius\n setLocation(1)\n setVisible(1)\n width\n \u2260(1)\nfresh:shape:\n ::(1)\n addClickListener(2)\n addMouseDownListener(2)\n addMouseOverListener(2)\n addMouseUpListener(2)\n addPressMoveListener(2)\n asDebugString\n asString\n basicAsString\n beginFill(1)\n beginStroke(1)\n clear\n color\n createJsGraphics\n hitTest(2)\n isMe(1)\n listener\n location\n mouseLocation\n move(2)\n new\n setLocation(1)\n setVisible(1)\n \u2260(1)\nfresh:stage(2):\n add(1)\n addMouseExitListener(1)\n addStageDownListener(1)\n addStageMouseMoveListener(1)\n addStageUpListener(1)\n clearTicker\n clearTimeout\n createClearButton(1)\n createJsGraphics\n enableMouseOver(1)\n jsTimeout\n mouseLocation\n mystage\n new(2)\n removeAllChildren\n removeAllEventListeners\n removeChild(1)\n setTicker(3)\n setTimeout(3)\n stageListener\n tickEvent\n tickerBlock\n timedEvent\n timedEventBlock\n update\nfresh:text:\n ::(1)\n addClickListener(2)\n addMouseDownListener(2)\n addMouseOverListener(2)\n addMouseUpListener(2)\n addPressMoveListener(2)\n asDebugString\n asString\n basicAsString\n color\n content\n createJsGraphics\n draw(3)\n font\n height\n hitTest(2)\n innerDraw(3)\n isMe(1)\n listener\n location\n mouseLocation\n move(2)\n new\n setLocation(1)\n setVisible(1)\n width\n \u2260(1)\nfresh:tween(2):\n jsTween\n toX(1)\n wait(1)\nmodules:\npath:\n createJsGraphicsWrapper\npublic:\n arc\n circle\n commonGraphics\n container\n customShape\n ellipse\n eventListener\n inputBox(1)\n line\n polyStar\n rectangle\n roundRect\n shape\n stage(2)\n text\n tween(2)\ntypes:\n";
                                if (typeof originalSourceLines !== "undefined") {
                                  originalSourceLines["createJsGraphicsWrapper"] = [
                                    "class eventListener {",
                                    "    var clickBlock := { }",
                                    "    var mouseUpBlock := { }",
                                    "    var mouseDownBlock := { }",
                                    "    var pressMoveBlock := { }",
                                    "    var mouseOverBlock := { }",
                                    "    var mouseExitBlock := { }",
                                    "    var mouseLocation' := 0@0",
                                    "",
                                    "    method onClick(x, y) {",
                                    "        mouseLocation' := x@y",
                                    "        clickBlock.apply",
                                    "    }",
                                    "",
                                    "    method mouseLocation {",
                                    "        mouseLocation'",
                                    "    }",
                                    "",
                                    "    method onClick:=(block) {",
                                    "        clickBlock := block",
                                    "    }",
                                    "",
                                    "    method onMouseUp(x, y) {",
                                    "        mouseLocation' := x@y",
                                    "        mouseUpBlock.apply",
                                    "    }",
                                    "",
                                    "    method onMouseUp:=(block) {",
                                    "        mouseUpBlock := block",
                                    "    }",
                                    "",
                                    "    method onMouseDown(x, y) {",
                                    "        mouseLocation' := x@y",
                                    "        mouseDownBlock.apply",
                                    "    }",
                                    "",
                                    "    method onMouseDown:=(block) {",
                                    "        mouseDownBlock := block",
                                    "    }",
                                    "",
                                    "    method onMouseOver(x, y) {",
                                    "        mouseLocation' := x@y",
                                    "        mouseOverBlock.apply",
                                    "    }",
                                    "",
                                    "    method onMouseOver:=(block) {",
                                    "        mouseOverBlock := block",
                                    "    }",
                                    "",
                                    "    method onPressMove(x, y) {",
                                    "        mouseLocation' := x@y",
                                    "        pressMoveBlock.apply",
                                    "    }",
                                    "",
                                    "    method onPressMove := (block) {",
                                    "        pressMoveBlock := block",
                                    "    }",
                                    "",
                                    "    method onMouseExit {",
                                    "        mouseExitBlock.apply",
                                    "    }",
                                    "",
                                    "    method onMouseExit := (block) {",
                                    "        mouseExitBlock := block",
                                    "    }",
                                    "",
                                    "    method addMouseUpListener(obj, listener) {",
                                    "        native \"js\" code ‹",
                                    "              var obj = var_obj;",
                                    "              obj.on(\"pressup\", function(event) {",
                                    "                  minigrace.trapErrors(function() {",
                                    "                      callmethod(var_listener, \"onMouseUp\", [2], new GraceNum(event.stageX),",
                                    "                      new GraceNum(event.stageY));",
                                    "            });",
                                    "        });",
                                    "        ›",
                                    "    }",
                                    "",
                                    "    method addMouseDownListener(obj, listener) {",
                                    "        native \"js\" code ‹",
                                    "              var obj = var_obj;",
                                    "              obj.on(\"pressup\", function(event) {",
                                    "                  minigrace.trapErrors(function() {",
                                    "                      callmethod(var_listener, \"onMouseDown\", [2], new GraceNum(event.stageX),",
                                    "                      new GraceNum(event.stageY));",
                                    "            });",
                                    "        });",
                                    "        ›",
                                    "    }",
                                    "",
                                    "    method addMouseOverListener(obj, listener) {",
                                    "        native \"js\" code ‹",
                                    "              var obj = var_obj;",
                                    "              obj.on(\"mouseover\", function(event) {",
                                    "                  minigrace.trapErrors(function() {",
                                    "                      callmethod(var_listener, \"onMouseOver\", [2], new GraceNum(event.stageX),",
                                    "                      new GraceNum(event.stageY));",
                                    "            });",
                                    "        });",
                                    "        ›",
                                    "    }",
                                    "",
                                    "    method addClickListener(obj, listener) {",
                                    "        native \"js\" code ‹",
                                    "              var shape = var_obj;",
                                    "              shape.on(\"click\", function(event) {",
                                    "                  minigrace.trapErrors(function() {",
                                    "                      callmethod(var_listener, \"onClick\", [2], new GraceNum(event.stageX),",
                                    "                      new GraceNum(event.stageY));",
                                    "            });",
                                    "        });",
                                    "        ›",
                                    "    }",
                                    "",
                                    "    method addPressMoveListener(obj, listener) {",
                                    "        native \"js\" code ‹",
                                    "              var shape = var_obj;",
                                    "              shape.on(\"pressmove\", function(event) {",
                                    "                  minigrace.trapErrors(function() {",
                                    "                      callmethod(var_listener, \"onPressMove\", [2], new GraceNum(event.stageX),",
                                    "                      new GraceNum(event.stageY));",
                                    "            });",
                                    "        });",
                                    "        ›",
                                    "    }",
                                    "",
                                    "    method addStageDownListener(stage, listener) {",
                                    "        native \"js\" code ‹",
                                    "              var_stage.on(\"stagemousedown\", function(event) {",
                                    "                  minigrace.trapErrors(function() {",
                                    "                      callmethod(var_listener, \"onMouseDown\", [2], new GraceNum(event.stageX),",
                                    "                      new GraceNum(event.stageY));",
                                    "            });",
                                    "        });",
                                    "        ›",
                                    "    }",
                                    "",
                                    "    method addStageUpListener(stage, listener) {",
                                    "        native \"js\" code ‹",
                                    "              var_stage.on(\"stagemouseup\", function(event) {",
                                    "                  minigrace.trapErrors(function() {",
                                    "                      callmethod(var_listener, \"onMouseUp\", [2], new GraceNum(event.stageX),",
                                    "                      new GraceNum(event.stageY));",
                                    "            });",
                                    "        });",
                                    "        ›",
                                    "    }",
                                    "",
                                    "    method addMouseExitListener(stage, listener) {",
                                    "        native \"js\" code ‹",
                                    "              var_stage.on(\"mouseleave\", function(event) {",
                                    "                  minigrace.trapErrors(function() {",
                                    "                      callmethod(var_listener, \"onMouseExit\", [0]);",
                                    "            });",
                                    "        });",
                                    "        ›",
                                    "    }",
                                    "",
                                    "    method addStageMouseMoveListener(stage, listener) {",
                                    "        native \"js\" code ‹",
                                    "              var_stage.on(\"stagemousemove\", function(event) {",
                                    "                  minigrace.trapErrors(function() {",
                                    "                      callmethod(var_listener, \"onMouseOver\", [2], new GraceNum(event.stageX),",
                                    "                      new GraceNum(event.stageY));",
                                    "            });",
                                    "        });",
                                    "        ›",
                                    "    }",
                                    "}",
                                    "",
                                    "class stage(width', height') {",
                                    "    var mystage := new (width', height')",
                                    "    createClearButton(self)",
                                    "    var createJsGraphics",
                                    "    var stageListener := eventListener",
                                    "    var timedEventBlock := { }",
                                    "    var jsTimeout",
                                    "    var tickerBlock := { }",
                                    "",
                                    "    method new(width, height) {",
                                    "        clearTimeout",
                                    "        native \"js\" code ‹",
                                    "              var width = var_width._value;",
                                    "              var height = var_height._value;",
                                    "              var size = \"height=\" + height.toString() + \",width=\" + width.toString()",
                                    "              var canvas = document.getElementById(\"graphics\");",
                                    "              var ctx = canvas.getContext(\"2d\");",
                                    "              ctx.setTransform(1, 0, 0, 1, 0, 0);",
                                    "              ctx.clearRect(0, 0, canvas.width, canvas,height);",
                                    "              var stage = new createjs.Stage(canvas);",
                                    "              createjs.Ticker.removeAllEventListeners();",
                                    "              stage.enableDOMEvents(true);",
                                    "              canvas.setAttribute('tabindex','0');",
                                    "              canvas.focus();",
                                    "              canvas = stage.canvas;",
                                    "              this.stage = stage",
                                    "              return stage;",
                                    "        ›",
                                    "    }",
                                    "",
                                    "    method createClearButton(myStage) {",
                                    "        native \"js\" code ‹",
                                    "              var stage = this.data.mystage;",
                                    "              var container = new createjs.Container();",
                                    "              var text = new createjs.Text(\"clear\", \"12px Arial\", \"black\");",
                                    "              text.x = 5;",
                                    "              text.y = 3;",
                                    "              container.x = stage.canvas.width - 35;",
                                    "              var rect = new createjs.Shape();",
                                    "              rect.graphics.beginFill(\"lightgrey\").drawRect(0, 0, 35, 20);",
                                    "              container.addChild(rect);",
                                    "              container.addChild(text);",
                                    "              container.addEventListener(\"click\", function(event) {",
                                    "                  stage.removeAllEventListeners();",
                                    "                  stage.removeAllChildren();",
                                    "                  stage.enableDOMEvents(false);",
                                    "                  stage.update();",
                                    "                  callmethod(var_myStage, \"clearTimeout\", [0]);",
                                    "                  createjs.Ticker.removeAllEventListeners();",
                                    "        });",
                                    "        stage.addChild(container);",
                                    "        stage.update();",
                                    "        ›",
                                    "    }",
                                    "",
                                    "    method mouseLocation {",
                                    "        stageListener.mouseLocation",
                                    "    }",
                                    "",
                                    "    method add(shape) {",
                                    "        self.createJsGraphics := shape.createJsGraphics",
                                    "        native \"js\" code ‹",
                                    "              this.data.mystage.addChild(this.data.createJsGraphics);",
                                    "        ›",
                                    "    }",
                                    "    method removeChild(shape) {",
                                    "        self.createJsGraphics := shape.createJsGraphics",
                                    "        native \"js\" code ‹",
                                    "              this.data.mystage.removeChild(this.data.createJsGraphics);",
                                    "        ›",
                                    "    }",
                                    "    method removeAllEventListeners {native \"js\" code ‹ this.data.mystage.removeAllEventListeners(); ›}",
                                    "    method update {",
                                    "        native \"js\" code ‹",
                                    "              this.data.mystage.update();",
                                    "        ›",
                                    "    }",
                                    "",
                                    "    method removeAllChildren {",
                                    "        native \"js\" code ‹",
                                    "              this.data.mystage.removeAllChildren();",
                                    "        ›",
                                    "    }",
                                    "",
                                    "    method addStageDownListener(block) {",
                                    "        stageListener.onMouseDown := block",
                                    "        stageListener.addStageDownListener(mystage, stageListener)",
                                    "    }",
                                    "",
                                    "    method addStageUpListener(block) {",
                                    "        stageListener.onMouseUp := block",
                                    "        stageListener.addStageUpListener(mystage, stageListener)",
                                    "    }",
                                    "",
                                    "    method addMouseExitListener(block) {",
                                    "        stageListener.onMouseExit := block",
                                    "        stageListener.addMouseExitListener(mystage, stageListener)",
                                    "    }",
                                    "",
                                    "    method addStageMouseMoveListener(block) {",
                                    "        stageListener.onMouseOver := block",
                                    "        stageListener.addStageMouseMoveListener(mystage, stageListener)",
                                    "    }",
                                    "",
                                    "    method enableMouseOver(frequency) {",
                                    "        native \"js\" code ‹",
                                    "              var freq = var_frequency._value",
                                    "              this.data.mystage.enableMouseOver(freq);",
                                    "        ›",
                                    "    }",
                                    "",
                                    "    method timedEvent {",
                                    "        timedEventBlock.apply",
                                    "    }",
                                    "",
                                    "    method tickEvent {",
                                    "        tickerBlock.apply",
                                    "    }",
                                    "",
                                    "    method setTimeout(block, time, myStage) {",
                                    "        timedEventBlock := block",
                                    "        native \"js\" code ‹var t = setTimeout(function() {",
                                    "            callmethod(var_myStage, \"timedEvent\", [0]);",
                                    "        }, var_time._value);",
                                    "        this.data.jsTimeout = t;›",
                                    "    }",
                                    "",
                                    "    method clearTimeout {",
                                    "        native \"js\" code ‹",
                                    "              var timeout = this.data.jsTimeout",
                                    "              clearTimeout(timeout);",
                                    "        ›",
                                    "    }",
                                    "",
                                    "    method setTicker(block, fps, myStage) {",
                                    "        tickerBlock := block",
                                    "        native \"js\" code ‹",
                                    "              createjs.Ticker.on(\"tick\", function(event) {",
                                    "                  callmethod(var_myStage, \"tickEvent\", [0]);",
                                    "        });",
                                    "        createjs.Ticker.setFPS(var_fps._value);",
                                    "              ›",
                                    "    }",
                                    "",
                                    "    method clearTicker {",
                                    "        native \"js\" code ‹",
                                    "              createjs.Ticker.removeAllEventListeners();",
                                    "        ›",
                                    "    }",
                                    "}",
                                    "",
                                    "class commonGraphics{",
                                    "    var createJsGraphics is public",
                                    "    var color",
                                    "    var location :=0@0",
                                    "    var listener is public := eventListener",
                                    "",
                                    "    method mouseLocation {",
                                    "        listener.mouseLocation",
                                    "    }",
                                    "",
                                    "    method addMouseUpListener(graphicsTypeObject, block) {",
                                    "        listener.onMouseUp := block",
                                    "        listener.addMouseUpListener(createJsGraphics, listener)",
                                    "    }",
                                    "",
                                    "    method addMouseDownListener(graphicsTypeObject, block) {",
                                    "        listener.onMouseDown := block",
                                    "        listener.addMouseDownListener(createJsGraphics, listener)",
                                    "    }",
                                    "",
                                    "    method addMouseOverListener(graphicsTypeObject, block) {",
                                    "        listener.onMouseOver := block",
                                    "        listener.addMouseOverListener(createJsGraphics, listener)",
                                    "    }",
                                    "",
                                    "    method addClickListener(graphicsTypeObject, block) {",
                                    "        listener.onClick := block",
                                    "        listener.addClickListener(createJsGraphics, listener)",
                                    "    }",
                                    "",
                                    "    method addPressMoveListener(graphicsTypeObject, block) {",
                                    "        listener.onPressMove := block",
                                    "        listener.addPressMoveListener(createJsGraphics, listener)",
                                    "    }",
                                    "",
                                    "    method setLocation(newLoc) {",
                                    "        self.location := newLoc",
                                    "    }",
                                    "",
                                    "    method move(newX,newY) {",
                                    "        native \"js\" code ‹",
                                    "              this.data.createJsGraphics.x = var_newX._value;",
                                    "              this.data.createJsGraphics.y = var_newY._value;",
                                    "        ›",
                                    "    }",
                                    "",
                                    "    method setVisible(isVisible) {",
                                    "        native \"js\" code ‹",
                                    "              var isVisible = var_isVisible._value",
                                    "              this.data.createJsGraphics.visible = isVisible;",
                                    "        ›",
                                    "    }",
                                    "",
                                    "    method hitTest(x, y) {",
                                    "        native \"js\" code ‹",
                                    "              var x = var_x._value;",
                                    "              var y = var_y._value;",
                                    "              var shape = this.data.createJsGraphics;",
                                    "              var pt = shape.globalToLocal(x, y);",
                                    "              var hit = shape.hitTest(pt.x, pt.y);",
                                    "              return new GraceBoolean(hit);",
                                    "        ›",
                                    "    }",
                                    "}",
                                    "",
                                    "class shape {",
                                    "    inherits commonGraphics",
                                    "",
                                    "    createJsGraphics := new",
                                    "",
                                    "    method new {",
                                    "        native \"js\" code ‹",
                                    "              return new createjs.Shape();",
                                    "        ›",
                                    "    }",
                                    "",
                                    "    method clear {",
                                    "        native \"js\" code ‹",
                                    "              this.data.createJsGraphics.graphics.clear();",
                                    "        ›",
                                    "    }",
                                    "    method beginFill(color') {",
                                    "        self.color := color'",
                                    "        native \"js\" code ‹",
                                    "              var color = this.data.color._value;",
                                    "              this.data.createJsGraphics.graphics.beginFill(color);",
                                    "        ›",
                                    "    }",
                                    "    method beginStroke(color') {",
                                    "        self.color := color'",
                                    "        native \"js\" code ‹",
                                    "              var color = this.data.color._value;",
                                    "              this.data.createJsGraphics.graphics.beginStroke(color);",
                                    "        ›",
                                    "    }",
                                    "}",
                                    "",
                                    "class container {",
                                    "    inherits commonGraphics",
                                    "",
                                    "    createJsGraphics := new",
                                    "    method new {",
                                    "        native \"js\" code ‹",
                                    "              return new createjs.Container();",
                                    "        ›",
                                    "    }",
                                    "",
                                    "    method add(anObject) {",
                                    "        native \"js\" code ‹",
                                    "              this.data.createJsGraphics.addChild(var_anObject.data.createJsGraphics);",
                                    "        ›",
                                    "    }",
                                    "",
                                    "    method setLocation(location) {",
                                    "        native \"js\" code ‹",
                                    "              this.data.createJsGraphics.x = var_location.data.x._value;",
                                    "              this.data.createJsGraphics.y = var_location.data.y._value;",
                                    "        ›",
                                    "        self",
                                    "    }",
                                    "}",
                                    "",
                                    "class circle {",
                                    "    inherits shape",
                                    "    var radius",
                                    "    method draw(radius') {",
                                    "        self.radius := radius'",
                                    "        native \"js\" code ‹",
                                    "              var x = this.data.location.data.x._value;",
                                    "              var y = this.data.location.data.y._value;",
                                    "              var radius = this.data.radius._value;",
                                    "",
                                    "        this.data.createJsGraphics.graphics.drawCircle(x, y, radius);",
                                    "        var circle = this.data.createJsGraphics;",
                                    "        return circle;",
                                    "        ›",
                                    "    }",
                                    "}",
                                    "",
                                    "class rectangle {",
                                    "    inherits shape",
                                    "    var height",
                                    "    var width",
                                    "    method draw(w, h) {",
                                    "        width := w",
                                    "        height := h",
                                    "        native \"js\" code ‹",
                                    "              var x = this.data.location.data.x._value;",
                                    "              var y = this.data.location.data.y._value;",
                                    "              var height = this.data.height._value",
                                    "              var width = this.data.width._value",
                                    "              this.data.createJsGraphics.graphics.drawRect(x, y, width, height);",
                                    "        ›",
                                    "    }",
                                    "}",
                                    "",
                                    "class polyStar {",
                                    "    inherits shape",
                                    "    var size is public := 20",
                                    "    var sides is public := 5",
                                    "    var pointSize is public := 2",
                                    "    var angle is public := -90",
                                    "    method draw(size', sides', pointSize', angle') {",
                                    "        self.size := size'",
                                    "        self.pointSize := pointSize'",
                                    "        self.angle := angle'",
                                    "        self.sides := sides'",
                                    "        native \"js\" code ‹",
                                    "              var x = this.data.location.data.x._value;",
                                    "              var y = this.data.location.data.y._value;",
                                    "              var size = this.data.size._value;",
                                    "              var sides = this.data.sides._value;",
                                    "              var pointSize = this.data.pointSize._value;",
                                    "              var angle = this.data.angle._value;",
                                    "              this.data.createJsGraphics.graphics.drawPolyStar(x, y, size, sides,pointSize, angle);",
                                    "        ›",
                                    "    }",
                                    "}",
                                    "",
                                    "class roundRect {",
                                    "    inherits shape",
                                    "    var height",
                                    "    var width",
                                    "    var radius is public := 15",
                                    "    method draw(width', height', radius') {",
                                    "        self.width := width'",
                                    "        self.height := height'",
                                    "        self.radius:= radius'",
                                    "",
                                    "        native \"js\" code ‹",
                                    "              var x = this.data.location.data.x._value;",
                                    "              var y = this.data.location.data.y._value;",
                                    "              var height = this.data.height._value",
                                    "              var width = this.data.width._value",
                                    "              var radius = this.data.radius._value",
                                    "              this.data.createJsGraphics.graphics.drawRoundRect(x, y, width, height, radius);",
                                    "        ›",
                                    "    }",
                                    "}",
                                    "",
                                    "class ellipse {",
                                    "    inherits shape",
                                    "    var height",
                                    "    var width",
                                    "    method draw(width', height') {",
                                    "        self.height := height'",
                                    "        self.width := width'",
                                    "        native \"js\" code ‹",
                                    "              var x = this.data.location.data.x._value;",
                                    "              var y = this.data.location.data.y._value;",
                                    "              var height = this.data.height._value",
                                    "              var width = this.data.width._value",
                                    "              this.data.createJsGraphics.graphics.drawEllipse(x, y, width, height);",
                                    "        ›",
                                    "    }",
                                    "}",
                                    "",
                                    "class arc {",
                                    "    inherits shape",
                                    "    var radius",
                                    "    var startAngle",
                                    "    var endAngle",
                                    "    var anticlockwise",
                                    "",
                                    "    method draw(radius', startAngle', endAngle', anticlockwise') {",
                                    "        radius := radius'",
                                    "        startAngle := startAngle'",
                                    "        endAngle := endAngle'",
                                    "        anticlockwise := anticlockwise'",
                                    "        native \"js\" code ‹",
                                    "              var x = this.data.location.data.x._value;",
                                    "              var y = this.data.location.data.y._value;",
                                    "              var radius = this.data.radius._value;",
                                    "              var startAngle = this.data.startAngle._value;",
                                    "              var endAngle = this.data.endAngle._value;",
                                    "              startAngle = startAngle * Math.PI / 180;",
                                    "              endAngle = endAngle * Math.PI / 180;",
                                    "              var anticlockwise = this.data.anticlockwise._value",
                                    "",
                                    "        this.data.createJsGraphics.graphics.arc(x, y, radius, startAngle, endAngle, anticlockwise);",
                                    "        ›",
                                    "    }",
                                    "}",
                                    "",
                                    "class text {",
                                    "    inherits commonGraphics",
                                    "",
                                    "    var content is public := \"Did you forget to set text.content?\"",
                                    "    var font is public := \"12px Arial\"",
                                    "    method new {",
                                    "        return 0",
                                    "    }",
                                    "    // This is necessary so that Grace waits for the Javascript part of the",
                                    "    // innerDraw to return before continuing",
                                    "    method draw(content', font', color') {",
                                    "        self.createJsGraphics := innerDraw(content', font', color')",
                                    "    }",
                                    "",
                                    "    method width {",
                                    "        native \"js\" code ‹",
                                    "              var b = this.data.createJsGraphics.getBounds();",
                                    "              return new GraceNum(b.width)",
                                    "        ›",
                                    "    }",
                                    "",
                                    "    method height {",
                                    "        native \"js\" code ‹",
                                    "              var b = this.data.createJsGraphics.getBounds();",
                                    "              return new GraceNum(b.height)",
                                    "        ›",
                                    "    }",
                                    "",
                                    "    method innerDraw(content', font', color') is confidential {",
                                    "        self.color := color'",
                                    "        self.content := content'",
                                    "        self.font := font'",
                                    "",
                                    "        native \"js\" code ‹",
                                    "              var color = this.data.color._value;",
                                    "              var x = this.data.location.data.x._value;",
                                    "              var y = this.data.location.data.y._value;",
                                    "              var content = this.data.content._value;",
                                    "              var font = this.data.font._value;",
                                    "              var text = new createjs.Text(content, font, color);",
                                    "              text.x = x;",
                                    "              text.y = y;",
                                    "              return text;",
                                    "        ›",
                                    "    }",
                                    "}",
                                    "",
                                    "class line {",
                                    "    inherits shape",
                                    "    var start is public := 0@0",
                                    "    var end is public := 50@50",
                                    "",
                                    "    method draw(start', end'){",
                                    "        self.location := start'",
                                    "        self.start := start'",
                                    "        self.end := end'",
                                    "        native \"js\" code ‹",
                                    "              var startX = this.data.start.data.x._value;",
                                    "              var startY = this.data.start.data.y._value;",
                                    "              var endX = this.data.end.data.x._value;",
                                    "              var endY = this.data.end.data.y._value;",
                                    "              this.data.createJsGraphics.graphics.moveTo(startX, startY).lineTo(endX,endY);",
                                    "        ›",
                                    "    }",
                                    "}",
                                    "",
                                    "class customShape {",
                                    "    inherits shape",
                                    "    var points := emptyList",
                                    "    var stroke;",
                                    "    var current;",
                                    "    var leftMost;",
                                    "    var rightMost;",
                                    "    var topMost;",
                                    "    var bottomMost;",
                                    "",
                                    "    method addPoint(p){",
                                    "        calcBounds(p)",
                                    "        points.add(p)",
                                    "    }",
                                    "    method calcBounds(p) is confidential {",
                                    "        if(points.isEmpty) then {",
                                    "            topMost := p.y",
                                    "            bottomMost := p.y",
                                    "            leftMost := p.x",
                                    "            rightMost := p.x",
                                    "        } else {",
                                    "            if(p.x < leftMost) then { leftMost := p.x }",
                                    "            if(p.x > rightMost) then { rightMost := p.x }",
                                    "            if(p.y < topMost) then { topMost := p.y }",
                                    "            if(p.y > bottomMost) then {bottomMost := p.y}",
                                    "        }",
                                    "    }",
                                    "    method draw(stroke', fill'){",
                                    "        if(points.size < 2) then { print(\"Not enough points in custom shape\"); return }",
                                    "",
                                    "        self.current := points.first",
                                    "        self.stroke := stroke';",
                                    "        self.color := fill';",
                                    "",
                                    "        native \"js\" code ‹",
                                    "              var color = this.data.color._value;",
                                    "              var stroke = this.data.stroke._value;",
                                    "              var startX = this.data.current.data.x._value;",
                                    "              var startY = this.data.current.data.y._value;",
                                    "              this.data.createJsGraphics.graphics.beginFill(color);",
                                    "              this.data.createJsGraphics.graphics.beginStroke(stroke);",
                                    "              this.data.createJsGraphics.graphics.moveTo(startX, startY);",
                                    "        ›",
                                    "        for(points) do {x ->",
                                    "            current := x",
                                    "            native \"js\" code ‹",
                                    "                  var endX = this.data.current.data.x._value;",
                                    "                  var endY = this.data.current.data.y._value;",
                                    "                  this.data.createJsGraphics.graphics.lineTo(endX, endY);",
                                    "            ›",
                                    "        }",
                                    "        native \"js\" code ‹",
                                    "              this.data.createJsGraphics.graphics.closePath()",
                                    "        ›",
                                    "    }",
                                    "",
                                    "    method setBounds {",
                                    "        var bounds := leftMost@topMost",
                                    "        super.setBounds(bounds, rightMost - leftMost, bottomMost - topMost)",
                                    "    }",
                                    "}",
                                    "",
                                    "class tween(jsGraphicsObj, myStage) {",
                                    "    var jsTween",
                                    "    native \"js\" code ‹var stage = var_myStage.data.mystage;",
                                    "          createjs.Ticker.setFPS(60);",
                                    "          createjs.Ticker.addEventListener(\"tick\", stage);",
                                    "          var shape = var_jsGraphicsObj.data.createJsGraphics;",
                                    "          this.data.jsTween = createjs.Tween.get(shape, {override:true});›",
                                    "",
                                    "    method toX(x) {",
                                    "        native \"js\" code ‹var tween = this.data.jsTween;",
                                    "              this.data.jsTween = tween.to({x:var_x._value}, 250);›",
                                    "    }",
                                    "",
                                    "    method wait(time) {",
                                    "        native \"js\" code ‹var tween = this.data.jsTween;",
                                    "              this.data.jsTween = tween.wait(var_time._value);›",
                                    "    }",
                                    "}",
                                    "",
                                    "class inputBox(mystage) {",
                                    "    var location is public",
                                    "    var width is public",
                                    "    var height is public",
                                    "    var fontSize is public",
                                    "    var fontFamily is public",
                                    "    var fontColor is public",
                                    "    var backgroundColor is public",
                                    "    var borderColor is public",
                                    "    var submitBlock := {}",
                                    "    var input",
                                    "",
                                    "    method value {",
                                    "        native \"js\" code ‹",
                                    "              var input = this.data.input;",
                                    "              return new GraceString(input.value());",
                                    "        ›",
                                    "    }",
                                    "",
                                    "    method value := (newval) {",
                                    "        native \"js\" code ‹",
                                    "              var newval = var_newval._value;",
                                    "              var input = this.data.input;",
                                    "              input.value(newval);",
                                    "              input.focus();",
                                    "        ›",
                                    "    }",
                                    "",
                                    "    method draw {",
                                    "        native \"js\" code ‹",
                                    "              var stage = var_mystage;",
                                    "              var mycanvas = stage.stage.canvas;",
                                    "              var input = new CanvasInput({",
                                    "                  canvas: mycanvas,",
                                    "                  x: this.data.location.data.x._value,",
                                    "                  y: this.data.location.data.y._value,",
                                    "                  width: this.data.width._value,",
                                    "                  height: this.data.height._value,",
                                    "                  fontSize: this.data.fontSize._value,",
                                    "                  fontFamily: this.data.fontFamily._value,",
                                    "                  fontColor: this.data.fontColor._value,",
                                    "                  backgroundColor: this.data.backgroundColor._value,",
                                    "                  borderColor: this.data.borderColor._value",
                                    "        });",
                                    "        input.focus();",
                                    "        this.data.input = input;",
                                    "        ›",
                                    "        onSubmit(self, submitBlock)",
                                    "    }",
                                    "",
                                    "    method focus {",
                                    "        native \"js\" code ‹",
                                    "              var input = this.data.input;",
                                    "              input.focus();",
                                    "        ›",
                                    "    }",
                                    "",
                                    "    method destroy {",
                                    "        native \"js\" code ‹",
                                    "              var input = this.data.input;",
                                    "              input.destroy();",
                                    "        ›",
                                    "    }",
                                    "",
                                    "    method callSubmit {",
                                    "        submitBlock.apply",
                                    "    }",
                                    "",
                                    "    method onSubmit(inputObj, block) {",
                                    "        submitBlock := block",
                                    "        native \"js\" code ‹",
                                    "              if(this.data.input != null) {",
                                    "                  var input = this.data.input;",
                                    "                  input.onsubmit(function(event) {",
                                    "                      minigrace.trapErrors(function() {",
                                    "                          callmethod(var_inputObj, \"callSubmit\", [0])",
                                    "                });",
                                    "            });",
                                    "        }",
                                    "        ›",
                                    "    }",
                                    "}" ];
                                }
                                if (typeof global !== "undefined")
                                  global.gracecode_createJsGraphicsWrapper = gracecode_createJsGraphicsWrapper;
                                if (typeof window !== "undefined")
                                  window.gracecode_createJsGraphicsWrapper = gracecode_createJsGraphicsWrapper;
