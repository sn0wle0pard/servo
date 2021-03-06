// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'device/bluetooth/public/interfaces/test/fake_bluetooth.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('bluetooth.mojom');
  var uuid$ =
      mojo.internal.exposeNamespace('bluetooth.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'device/bluetooth/public/interfaces/uuid.mojom', '../uuid.mojom.js');
  }


  var kHCISuccess = 0x0000;
  var kHCIConnectionTimeout = 0x0008;
  var kGATTSuccess = 0x0000;
  var kGATTInvalidHandle = 0x0001;
  var CentralState = {};
  CentralState.ABSENT = 0;
  CentralState.POWERED_ON = CentralState.ABSENT + 1;
  CentralState.POWERED_OFF = CentralState.POWERED_ON + 1;

  CentralState.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  CentralState.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function CharacteristicProperties(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CharacteristicProperties.prototype.initDefaults_ = function() {
    this.broadcast = false;
    this.read = false;
    this.writeWithoutResponse = false;
    this.write = false;
    this.notify = false;
    this.indicate = false;
    this.authenticatedSignedWrites = false;
    this.extendedProperties = false;
  };
  CharacteristicProperties.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CharacteristicProperties.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;









    return validator.validationError.NONE;
  };

  CharacteristicProperties.encodedSize = codec.kStructHeaderSize + 8;

  CharacteristicProperties.decode = function(decoder) {
    var packed;
    var val = new CharacteristicProperties();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.broadcast = (packed >> 0) & 1 ? true : false;
    val.read = (packed >> 1) & 1 ? true : false;
    val.writeWithoutResponse = (packed >> 2) & 1 ? true : false;
    val.write = (packed >> 3) & 1 ? true : false;
    val.notify = (packed >> 4) & 1 ? true : false;
    val.indicate = (packed >> 5) & 1 ? true : false;
    val.authenticatedSignedWrites = (packed >> 6) & 1 ? true : false;
    val.extendedProperties = (packed >> 7) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  CharacteristicProperties.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CharacteristicProperties.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.broadcast & 1) << 0
    packed |= (val.read & 1) << 1
    packed |= (val.writeWithoutResponse & 1) << 2
    packed |= (val.write & 1) << 3
    packed |= (val.notify & 1) << 4
    packed |= (val.indicate & 1) << 5
    packed |= (val.authenticatedSignedWrites & 1) << 6
    packed |= (val.extendedProperties & 1) << 7
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FakeBluetooth_SetLESupported_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FakeBluetooth_SetLESupported_Params.prototype.initDefaults_ = function() {
    this.available = false;
  };
  FakeBluetooth_SetLESupported_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FakeBluetooth_SetLESupported_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  FakeBluetooth_SetLESupported_Params.encodedSize = codec.kStructHeaderSize + 8;

  FakeBluetooth_SetLESupported_Params.decode = function(decoder) {
    var packed;
    var val = new FakeBluetooth_SetLESupported_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.available = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FakeBluetooth_SetLESupported_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FakeBluetooth_SetLESupported_Params.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.available & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FakeBluetooth_SetLESupported_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FakeBluetooth_SetLESupported_ResponseParams.prototype.initDefaults_ = function() {
  };
  FakeBluetooth_SetLESupported_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FakeBluetooth_SetLESupported_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FakeBluetooth_SetLESupported_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  FakeBluetooth_SetLESupported_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FakeBluetooth_SetLESupported_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  FakeBluetooth_SetLESupported_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FakeBluetooth_SetLESupported_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function FakeBluetooth_SimulateCentral_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FakeBluetooth_SimulateCentral_Params.prototype.initDefaults_ = function() {
    this.state = 0;
  };
  FakeBluetooth_SimulateCentral_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FakeBluetooth_SimulateCentral_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FakeBluetooth_SimulateCentral_Params.state
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, CentralState);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FakeBluetooth_SimulateCentral_Params.encodedSize = codec.kStructHeaderSize + 8;

  FakeBluetooth_SimulateCentral_Params.decode = function(decoder) {
    var packed;
    var val = new FakeBluetooth_SimulateCentral_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.state = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FakeBluetooth_SimulateCentral_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FakeBluetooth_SimulateCentral_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.state);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FakeBluetooth_SimulateCentral_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FakeBluetooth_SimulateCentral_ResponseParams.prototype.initDefaults_ = function() {
    this.fakeCentral = new FakeCentralPtr();
  };
  FakeBluetooth_SimulateCentral_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FakeBluetooth_SimulateCentral_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FakeBluetooth_SimulateCentral_ResponseParams.fakeCentral
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FakeBluetooth_SimulateCentral_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  FakeBluetooth_SimulateCentral_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FakeBluetooth_SimulateCentral_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.fakeCentral = decoder.decodeStruct(new codec.Interface(FakeCentralPtr));
    return val;
  };

  FakeBluetooth_SimulateCentral_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FakeBluetooth_SimulateCentral_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(FakeCentralPtr), val.fakeCentral);
  };
  function FakeBluetooth_AllResponsesConsumed_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FakeBluetooth_AllResponsesConsumed_Params.prototype.initDefaults_ = function() {
  };
  FakeBluetooth_AllResponsesConsumed_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FakeBluetooth_AllResponsesConsumed_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FakeBluetooth_AllResponsesConsumed_Params.encodedSize = codec.kStructHeaderSize + 0;

  FakeBluetooth_AllResponsesConsumed_Params.decode = function(decoder) {
    var packed;
    var val = new FakeBluetooth_AllResponsesConsumed_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  FakeBluetooth_AllResponsesConsumed_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FakeBluetooth_AllResponsesConsumed_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function FakeBluetooth_AllResponsesConsumed_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FakeBluetooth_AllResponsesConsumed_ResponseParams.prototype.initDefaults_ = function() {
    this.consumed = false;
  };
  FakeBluetooth_AllResponsesConsumed_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FakeBluetooth_AllResponsesConsumed_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  FakeBluetooth_AllResponsesConsumed_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  FakeBluetooth_AllResponsesConsumed_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FakeBluetooth_AllResponsesConsumed_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.consumed = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FakeBluetooth_AllResponsesConsumed_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FakeBluetooth_AllResponsesConsumed_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.consumed & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FakeCentral_SimulatePreconnectedPeripheral_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FakeCentral_SimulatePreconnectedPeripheral_Params.prototype.initDefaults_ = function() {
    this.address = null;
    this.name = null;
    this.knownServiceUuids = null;
  };
  FakeCentral_SimulatePreconnectedPeripheral_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FakeCentral_SimulatePreconnectedPeripheral_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FakeCentral_SimulatePreconnectedPeripheral_Params.address
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate FakeCentral_SimulatePreconnectedPeripheral_Params.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate FakeCentral_SimulatePreconnectedPeripheral_Params.knownServiceUuids
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, new codec.PointerTo(uuid$.UUID), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FakeCentral_SimulatePreconnectedPeripheral_Params.encodedSize = codec.kStructHeaderSize + 24;

  FakeCentral_SimulatePreconnectedPeripheral_Params.decode = function(decoder) {
    var packed;
    var val = new FakeCentral_SimulatePreconnectedPeripheral_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.address = decoder.decodeStruct(codec.String);
    val.name = decoder.decodeStruct(codec.String);
    val.knownServiceUuids = decoder.decodeArrayPointer(new codec.PointerTo(uuid$.UUID));
    return val;
  };

  FakeCentral_SimulatePreconnectedPeripheral_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FakeCentral_SimulatePreconnectedPeripheral_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.address);
    encoder.encodeStruct(codec.String, val.name);
    encoder.encodeArrayPointer(new codec.PointerTo(uuid$.UUID), val.knownServiceUuids);
  };
  function FakeCentral_SimulatePreconnectedPeripheral_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FakeCentral_SimulatePreconnectedPeripheral_ResponseParams.prototype.initDefaults_ = function() {
  };
  FakeCentral_SimulatePreconnectedPeripheral_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FakeCentral_SimulatePreconnectedPeripheral_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FakeCentral_SimulatePreconnectedPeripheral_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  FakeCentral_SimulatePreconnectedPeripheral_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FakeCentral_SimulatePreconnectedPeripheral_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  FakeCentral_SimulatePreconnectedPeripheral_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FakeCentral_SimulatePreconnectedPeripheral_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function FakeCentral_SetNextGATTConnectionResponse_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FakeCentral_SetNextGATTConnectionResponse_Params.prototype.initDefaults_ = function() {
    this.address = null;
    this.code = 0;
  };
  FakeCentral_SetNextGATTConnectionResponse_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FakeCentral_SetNextGATTConnectionResponse_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FakeCentral_SetNextGATTConnectionResponse_Params.address
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  FakeCentral_SetNextGATTConnectionResponse_Params.encodedSize = codec.kStructHeaderSize + 16;

  FakeCentral_SetNextGATTConnectionResponse_Params.decode = function(decoder) {
    var packed;
    var val = new FakeCentral_SetNextGATTConnectionResponse_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.address = decoder.decodeStruct(codec.String);
    val.code = decoder.decodeStruct(codec.Uint16);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FakeCentral_SetNextGATTConnectionResponse_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FakeCentral_SetNextGATTConnectionResponse_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.address);
    encoder.encodeStruct(codec.Uint16, val.code);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FakeCentral_SetNextGATTConnectionResponse_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FakeCentral_SetNextGATTConnectionResponse_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  FakeCentral_SetNextGATTConnectionResponse_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FakeCentral_SetNextGATTConnectionResponse_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  FakeCentral_SetNextGATTConnectionResponse_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  FakeCentral_SetNextGATTConnectionResponse_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FakeCentral_SetNextGATTConnectionResponse_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FakeCentral_SetNextGATTConnectionResponse_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FakeCentral_SetNextGATTConnectionResponse_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FakeCentral_SetNextGATTDiscoveryResponse_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FakeCentral_SetNextGATTDiscoveryResponse_Params.prototype.initDefaults_ = function() {
    this.address = null;
    this.code = 0;
  };
  FakeCentral_SetNextGATTDiscoveryResponse_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FakeCentral_SetNextGATTDiscoveryResponse_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FakeCentral_SetNextGATTDiscoveryResponse_Params.address
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  FakeCentral_SetNextGATTDiscoveryResponse_Params.encodedSize = codec.kStructHeaderSize + 16;

  FakeCentral_SetNextGATTDiscoveryResponse_Params.decode = function(decoder) {
    var packed;
    var val = new FakeCentral_SetNextGATTDiscoveryResponse_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.address = decoder.decodeStruct(codec.String);
    val.code = decoder.decodeStruct(codec.Uint16);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FakeCentral_SetNextGATTDiscoveryResponse_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FakeCentral_SetNextGATTDiscoveryResponse_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.address);
    encoder.encodeStruct(codec.Uint16, val.code);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FakeCentral_SetNextGATTDiscoveryResponse_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FakeCentral_SetNextGATTDiscoveryResponse_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  FakeCentral_SetNextGATTDiscoveryResponse_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FakeCentral_SetNextGATTDiscoveryResponse_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  FakeCentral_SetNextGATTDiscoveryResponse_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  FakeCentral_SetNextGATTDiscoveryResponse_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FakeCentral_SetNextGATTDiscoveryResponse_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FakeCentral_SetNextGATTDiscoveryResponse_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FakeCentral_SetNextGATTDiscoveryResponse_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FakeCentral_SimulateGATTDisconnection_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FakeCentral_SimulateGATTDisconnection_Params.prototype.initDefaults_ = function() {
    this.address = null;
  };
  FakeCentral_SimulateGATTDisconnection_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FakeCentral_SimulateGATTDisconnection_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FakeCentral_SimulateGATTDisconnection_Params.address
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FakeCentral_SimulateGATTDisconnection_Params.encodedSize = codec.kStructHeaderSize + 8;

  FakeCentral_SimulateGATTDisconnection_Params.decode = function(decoder) {
    var packed;
    var val = new FakeCentral_SimulateGATTDisconnection_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.address = decoder.decodeStruct(codec.String);
    return val;
  };

  FakeCentral_SimulateGATTDisconnection_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FakeCentral_SimulateGATTDisconnection_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.address);
  };
  function FakeCentral_SimulateGATTDisconnection_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FakeCentral_SimulateGATTDisconnection_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  FakeCentral_SimulateGATTDisconnection_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FakeCentral_SimulateGATTDisconnection_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  FakeCentral_SimulateGATTDisconnection_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  FakeCentral_SimulateGATTDisconnection_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FakeCentral_SimulateGATTDisconnection_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FakeCentral_SimulateGATTDisconnection_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FakeCentral_SimulateGATTDisconnection_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FakeCentral_SimulateGATTServicesChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FakeCentral_SimulateGATTServicesChanged_Params.prototype.initDefaults_ = function() {
    this.address = null;
  };
  FakeCentral_SimulateGATTServicesChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FakeCentral_SimulateGATTServicesChanged_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FakeCentral_SimulateGATTServicesChanged_Params.address
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FakeCentral_SimulateGATTServicesChanged_Params.encodedSize = codec.kStructHeaderSize + 8;

  FakeCentral_SimulateGATTServicesChanged_Params.decode = function(decoder) {
    var packed;
    var val = new FakeCentral_SimulateGATTServicesChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.address = decoder.decodeStruct(codec.String);
    return val;
  };

  FakeCentral_SimulateGATTServicesChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FakeCentral_SimulateGATTServicesChanged_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.address);
  };
  function FakeCentral_SimulateGATTServicesChanged_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FakeCentral_SimulateGATTServicesChanged_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  FakeCentral_SimulateGATTServicesChanged_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FakeCentral_SimulateGATTServicesChanged_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  FakeCentral_SimulateGATTServicesChanged_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  FakeCentral_SimulateGATTServicesChanged_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FakeCentral_SimulateGATTServicesChanged_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FakeCentral_SimulateGATTServicesChanged_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FakeCentral_SimulateGATTServicesChanged_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FakeCentral_AddFakeService_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FakeCentral_AddFakeService_Params.prototype.initDefaults_ = function() {
    this.peripheralAddress = null;
    this.serviceUuid = null;
  };
  FakeCentral_AddFakeService_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FakeCentral_AddFakeService_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FakeCentral_AddFakeService_Params.peripheralAddress
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate FakeCentral_AddFakeService_Params.serviceUuid
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, uuid$.UUID, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FakeCentral_AddFakeService_Params.encodedSize = codec.kStructHeaderSize + 16;

  FakeCentral_AddFakeService_Params.decode = function(decoder) {
    var packed;
    var val = new FakeCentral_AddFakeService_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.peripheralAddress = decoder.decodeStruct(codec.String);
    val.serviceUuid = decoder.decodeStructPointer(uuid$.UUID);
    return val;
  };

  FakeCentral_AddFakeService_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FakeCentral_AddFakeService_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.peripheralAddress);
    encoder.encodeStructPointer(uuid$.UUID, val.serviceUuid);
  };
  function FakeCentral_AddFakeService_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FakeCentral_AddFakeService_ResponseParams.prototype.initDefaults_ = function() {
    this.serviceId = null;
  };
  FakeCentral_AddFakeService_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FakeCentral_AddFakeService_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FakeCentral_AddFakeService_ResponseParams.serviceId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FakeCentral_AddFakeService_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  FakeCentral_AddFakeService_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FakeCentral_AddFakeService_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.serviceId = decoder.decodeStruct(codec.NullableString);
    return val;
  };

  FakeCentral_AddFakeService_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FakeCentral_AddFakeService_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.NullableString, val.serviceId);
  };
  function FakeCentral_RemoveFakeService_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FakeCentral_RemoveFakeService_Params.prototype.initDefaults_ = function() {
    this.identifier = null;
    this.peripheralAddress = null;
  };
  FakeCentral_RemoveFakeService_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FakeCentral_RemoveFakeService_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FakeCentral_RemoveFakeService_Params.identifier
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate FakeCentral_RemoveFakeService_Params.peripheralAddress
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FakeCentral_RemoveFakeService_Params.encodedSize = codec.kStructHeaderSize + 16;

  FakeCentral_RemoveFakeService_Params.decode = function(decoder) {
    var packed;
    var val = new FakeCentral_RemoveFakeService_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.identifier = decoder.decodeStruct(codec.String);
    val.peripheralAddress = decoder.decodeStruct(codec.String);
    return val;
  };

  FakeCentral_RemoveFakeService_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FakeCentral_RemoveFakeService_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.identifier);
    encoder.encodeStruct(codec.String, val.peripheralAddress);
  };
  function FakeCentral_RemoveFakeService_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FakeCentral_RemoveFakeService_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  FakeCentral_RemoveFakeService_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FakeCentral_RemoveFakeService_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  FakeCentral_RemoveFakeService_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  FakeCentral_RemoveFakeService_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FakeCentral_RemoveFakeService_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FakeCentral_RemoveFakeService_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FakeCentral_RemoveFakeService_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FakeCentral_AddFakeCharacteristic_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FakeCentral_AddFakeCharacteristic_Params.prototype.initDefaults_ = function() {
    this.characteristicUuid = null;
    this.properties = null;
    this.serviceId = null;
    this.peripheralAddress = null;
  };
  FakeCentral_AddFakeCharacteristic_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FakeCentral_AddFakeCharacteristic_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 40}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FakeCentral_AddFakeCharacteristic_Params.characteristicUuid
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, uuid$.UUID, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FakeCentral_AddFakeCharacteristic_Params.properties
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, CharacteristicProperties, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FakeCentral_AddFakeCharacteristic_Params.serviceId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate FakeCentral_AddFakeCharacteristic_Params.peripheralAddress
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FakeCentral_AddFakeCharacteristic_Params.encodedSize = codec.kStructHeaderSize + 32;

  FakeCentral_AddFakeCharacteristic_Params.decode = function(decoder) {
    var packed;
    var val = new FakeCentral_AddFakeCharacteristic_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.characteristicUuid = decoder.decodeStructPointer(uuid$.UUID);
    val.properties = decoder.decodeStructPointer(CharacteristicProperties);
    val.serviceId = decoder.decodeStruct(codec.String);
    val.peripheralAddress = decoder.decodeStruct(codec.String);
    return val;
  };

  FakeCentral_AddFakeCharacteristic_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FakeCentral_AddFakeCharacteristic_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(uuid$.UUID, val.characteristicUuid);
    encoder.encodeStructPointer(CharacteristicProperties, val.properties);
    encoder.encodeStruct(codec.String, val.serviceId);
    encoder.encodeStruct(codec.String, val.peripheralAddress);
  };
  function FakeCentral_AddFakeCharacteristic_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FakeCentral_AddFakeCharacteristic_ResponseParams.prototype.initDefaults_ = function() {
    this.characteristicId = null;
  };
  FakeCentral_AddFakeCharacteristic_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FakeCentral_AddFakeCharacteristic_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FakeCentral_AddFakeCharacteristic_ResponseParams.characteristicId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FakeCentral_AddFakeCharacteristic_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  FakeCentral_AddFakeCharacteristic_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FakeCentral_AddFakeCharacteristic_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.characteristicId = decoder.decodeStruct(codec.NullableString);
    return val;
  };

  FakeCentral_AddFakeCharacteristic_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FakeCentral_AddFakeCharacteristic_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.NullableString, val.characteristicId);
  };
  function FakeCentral_RemoveFakeCharacteristic_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FakeCentral_RemoveFakeCharacteristic_Params.prototype.initDefaults_ = function() {
    this.identifier = null;
    this.serviceId = null;
    this.peripheralAddress = null;
  };
  FakeCentral_RemoveFakeCharacteristic_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FakeCentral_RemoveFakeCharacteristic_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FakeCentral_RemoveFakeCharacteristic_Params.identifier
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate FakeCentral_RemoveFakeCharacteristic_Params.serviceId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate FakeCentral_RemoveFakeCharacteristic_Params.peripheralAddress
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FakeCentral_RemoveFakeCharacteristic_Params.encodedSize = codec.kStructHeaderSize + 24;

  FakeCentral_RemoveFakeCharacteristic_Params.decode = function(decoder) {
    var packed;
    var val = new FakeCentral_RemoveFakeCharacteristic_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.identifier = decoder.decodeStruct(codec.String);
    val.serviceId = decoder.decodeStruct(codec.String);
    val.peripheralAddress = decoder.decodeStruct(codec.String);
    return val;
  };

  FakeCentral_RemoveFakeCharacteristic_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FakeCentral_RemoveFakeCharacteristic_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.identifier);
    encoder.encodeStruct(codec.String, val.serviceId);
    encoder.encodeStruct(codec.String, val.peripheralAddress);
  };
  function FakeCentral_RemoveFakeCharacteristic_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FakeCentral_RemoveFakeCharacteristic_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  FakeCentral_RemoveFakeCharacteristic_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FakeCentral_RemoveFakeCharacteristic_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  FakeCentral_RemoveFakeCharacteristic_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  FakeCentral_RemoveFakeCharacteristic_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FakeCentral_RemoveFakeCharacteristic_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FakeCentral_RemoveFakeCharacteristic_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FakeCentral_RemoveFakeCharacteristic_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FakeCentral_AddFakeDescriptor_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FakeCentral_AddFakeDescriptor_Params.prototype.initDefaults_ = function() {
    this.descriptorUuid = null;
    this.characteristicId = null;
    this.serviceId = null;
    this.peripheralAddress = null;
  };
  FakeCentral_AddFakeDescriptor_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FakeCentral_AddFakeDescriptor_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 40}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FakeCentral_AddFakeDescriptor_Params.descriptorUuid
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, uuid$.UUID, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FakeCentral_AddFakeDescriptor_Params.characteristicId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate FakeCentral_AddFakeDescriptor_Params.serviceId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate FakeCentral_AddFakeDescriptor_Params.peripheralAddress
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FakeCentral_AddFakeDescriptor_Params.encodedSize = codec.kStructHeaderSize + 32;

  FakeCentral_AddFakeDescriptor_Params.decode = function(decoder) {
    var packed;
    var val = new FakeCentral_AddFakeDescriptor_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.descriptorUuid = decoder.decodeStructPointer(uuid$.UUID);
    val.characteristicId = decoder.decodeStruct(codec.String);
    val.serviceId = decoder.decodeStruct(codec.String);
    val.peripheralAddress = decoder.decodeStruct(codec.String);
    return val;
  };

  FakeCentral_AddFakeDescriptor_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FakeCentral_AddFakeDescriptor_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(uuid$.UUID, val.descriptorUuid);
    encoder.encodeStruct(codec.String, val.characteristicId);
    encoder.encodeStruct(codec.String, val.serviceId);
    encoder.encodeStruct(codec.String, val.peripheralAddress);
  };
  function FakeCentral_AddFakeDescriptor_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FakeCentral_AddFakeDescriptor_ResponseParams.prototype.initDefaults_ = function() {
    this.descriptorId = null;
  };
  FakeCentral_AddFakeDescriptor_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FakeCentral_AddFakeDescriptor_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FakeCentral_AddFakeDescriptor_ResponseParams.descriptorId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FakeCentral_AddFakeDescriptor_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  FakeCentral_AddFakeDescriptor_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FakeCentral_AddFakeDescriptor_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.descriptorId = decoder.decodeStruct(codec.NullableString);
    return val;
  };

  FakeCentral_AddFakeDescriptor_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FakeCentral_AddFakeDescriptor_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.NullableString, val.descriptorId);
  };
  function FakeCentral_SetNextReadCharacteristicResponse_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FakeCentral_SetNextReadCharacteristicResponse_Params.prototype.initDefaults_ = function() {
    this.gattCode = 0;
    this.value = null;
    this.characteristicId = null;
    this.serviceId = null;
    this.peripheralAddress = null;
  };
  FakeCentral_SetNextReadCharacteristicResponse_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FakeCentral_SetNextReadCharacteristicResponse_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 48}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;



    // validate FakeCentral_SetNextReadCharacteristicResponse_Params.value
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 1, codec.Uint8, true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FakeCentral_SetNextReadCharacteristicResponse_Params.characteristicId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate FakeCentral_SetNextReadCharacteristicResponse_Params.serviceId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate FakeCentral_SetNextReadCharacteristicResponse_Params.peripheralAddress
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 32, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FakeCentral_SetNextReadCharacteristicResponse_Params.encodedSize = codec.kStructHeaderSize + 40;

  FakeCentral_SetNextReadCharacteristicResponse_Params.decode = function(decoder) {
    var packed;
    var val = new FakeCentral_SetNextReadCharacteristicResponse_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.gattCode = decoder.decodeStruct(codec.Uint16);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.value = decoder.decodeArrayPointer(codec.Uint8);
    val.characteristicId = decoder.decodeStruct(codec.String);
    val.serviceId = decoder.decodeStruct(codec.String);
    val.peripheralAddress = decoder.decodeStruct(codec.String);
    return val;
  };

  FakeCentral_SetNextReadCharacteristicResponse_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FakeCentral_SetNextReadCharacteristicResponse_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint16, val.gattCode);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(codec.Uint8, val.value);
    encoder.encodeStruct(codec.String, val.characteristicId);
    encoder.encodeStruct(codec.String, val.serviceId);
    encoder.encodeStruct(codec.String, val.peripheralAddress);
  };
  function FakeCentral_SetNextReadCharacteristicResponse_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FakeCentral_SetNextReadCharacteristicResponse_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  FakeCentral_SetNextReadCharacteristicResponse_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FakeCentral_SetNextReadCharacteristicResponse_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  FakeCentral_SetNextReadCharacteristicResponse_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  FakeCentral_SetNextReadCharacteristicResponse_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FakeCentral_SetNextReadCharacteristicResponse_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FakeCentral_SetNextReadCharacteristicResponse_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FakeCentral_SetNextReadCharacteristicResponse_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FakeCentral_SetNextWriteCharacteristicResponse_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FakeCentral_SetNextWriteCharacteristicResponse_Params.prototype.initDefaults_ = function() {
    this.gattCode = 0;
    this.characteristicId = null;
    this.serviceId = null;
    this.peripheralAddress = null;
  };
  FakeCentral_SetNextWriteCharacteristicResponse_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FakeCentral_SetNextWriteCharacteristicResponse_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 40}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;



    // validate FakeCentral_SetNextWriteCharacteristicResponse_Params.characteristicId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate FakeCentral_SetNextWriteCharacteristicResponse_Params.serviceId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate FakeCentral_SetNextWriteCharacteristicResponse_Params.peripheralAddress
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FakeCentral_SetNextWriteCharacteristicResponse_Params.encodedSize = codec.kStructHeaderSize + 32;

  FakeCentral_SetNextWriteCharacteristicResponse_Params.decode = function(decoder) {
    var packed;
    var val = new FakeCentral_SetNextWriteCharacteristicResponse_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.gattCode = decoder.decodeStruct(codec.Uint16);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.characteristicId = decoder.decodeStruct(codec.String);
    val.serviceId = decoder.decodeStruct(codec.String);
    val.peripheralAddress = decoder.decodeStruct(codec.String);
    return val;
  };

  FakeCentral_SetNextWriteCharacteristicResponse_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FakeCentral_SetNextWriteCharacteristicResponse_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint16, val.gattCode);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.String, val.characteristicId);
    encoder.encodeStruct(codec.String, val.serviceId);
    encoder.encodeStruct(codec.String, val.peripheralAddress);
  };
  function FakeCentral_SetNextWriteCharacteristicResponse_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FakeCentral_SetNextWriteCharacteristicResponse_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  FakeCentral_SetNextWriteCharacteristicResponse_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FakeCentral_SetNextWriteCharacteristicResponse_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  FakeCentral_SetNextWriteCharacteristicResponse_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  FakeCentral_SetNextWriteCharacteristicResponse_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FakeCentral_SetNextWriteCharacteristicResponse_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FakeCentral_SetNextWriteCharacteristicResponse_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FakeCentral_SetNextWriteCharacteristicResponse_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FakeCentral_SetNextSubscribeToNotificationsResponse_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FakeCentral_SetNextSubscribeToNotificationsResponse_Params.prototype.initDefaults_ = function() {
    this.gattCode = 0;
    this.characteristicId = null;
    this.serviceId = null;
    this.peripheralAddress = null;
  };
  FakeCentral_SetNextSubscribeToNotificationsResponse_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FakeCentral_SetNextSubscribeToNotificationsResponse_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 40}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;



    // validate FakeCentral_SetNextSubscribeToNotificationsResponse_Params.characteristicId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate FakeCentral_SetNextSubscribeToNotificationsResponse_Params.serviceId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate FakeCentral_SetNextSubscribeToNotificationsResponse_Params.peripheralAddress
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FakeCentral_SetNextSubscribeToNotificationsResponse_Params.encodedSize = codec.kStructHeaderSize + 32;

  FakeCentral_SetNextSubscribeToNotificationsResponse_Params.decode = function(decoder) {
    var packed;
    var val = new FakeCentral_SetNextSubscribeToNotificationsResponse_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.gattCode = decoder.decodeStruct(codec.Uint16);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.characteristicId = decoder.decodeStruct(codec.String);
    val.serviceId = decoder.decodeStruct(codec.String);
    val.peripheralAddress = decoder.decodeStruct(codec.String);
    return val;
  };

  FakeCentral_SetNextSubscribeToNotificationsResponse_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FakeCentral_SetNextSubscribeToNotificationsResponse_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint16, val.gattCode);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.String, val.characteristicId);
    encoder.encodeStruct(codec.String, val.serviceId);
    encoder.encodeStruct(codec.String, val.peripheralAddress);
  };
  function FakeCentral_SetNextSubscribeToNotificationsResponse_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FakeCentral_SetNextSubscribeToNotificationsResponse_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  FakeCentral_SetNextSubscribeToNotificationsResponse_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FakeCentral_SetNextSubscribeToNotificationsResponse_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  FakeCentral_SetNextSubscribeToNotificationsResponse_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  FakeCentral_SetNextSubscribeToNotificationsResponse_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FakeCentral_SetNextSubscribeToNotificationsResponse_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FakeCentral_SetNextSubscribeToNotificationsResponse_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FakeCentral_SetNextSubscribeToNotificationsResponse_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FakeCentral_GetLastWrittenValue_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FakeCentral_GetLastWrittenValue_Params.prototype.initDefaults_ = function() {
    this.characteristicId = null;
    this.serviceId = null;
    this.peripheralAddress = null;
  };
  FakeCentral_GetLastWrittenValue_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FakeCentral_GetLastWrittenValue_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FakeCentral_GetLastWrittenValue_Params.characteristicId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate FakeCentral_GetLastWrittenValue_Params.serviceId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate FakeCentral_GetLastWrittenValue_Params.peripheralAddress
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FakeCentral_GetLastWrittenValue_Params.encodedSize = codec.kStructHeaderSize + 24;

  FakeCentral_GetLastWrittenValue_Params.decode = function(decoder) {
    var packed;
    var val = new FakeCentral_GetLastWrittenValue_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.characteristicId = decoder.decodeStruct(codec.String);
    val.serviceId = decoder.decodeStruct(codec.String);
    val.peripheralAddress = decoder.decodeStruct(codec.String);
    return val;
  };

  FakeCentral_GetLastWrittenValue_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FakeCentral_GetLastWrittenValue_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.characteristicId);
    encoder.encodeStruct(codec.String, val.serviceId);
    encoder.encodeStruct(codec.String, val.peripheralAddress);
  };
  function FakeCentral_GetLastWrittenValue_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FakeCentral_GetLastWrittenValue_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
    this.value = null;
  };
  FakeCentral_GetLastWrittenValue_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FakeCentral_GetLastWrittenValue_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;



    // validate FakeCentral_GetLastWrittenValue_ResponseParams.value
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 1, codec.Uint8, true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FakeCentral_GetLastWrittenValue_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  FakeCentral_GetLastWrittenValue_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FakeCentral_GetLastWrittenValue_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.value = decoder.decodeArrayPointer(codec.Uint8);
    return val;
  };

  FakeCentral_GetLastWrittenValue_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FakeCentral_GetLastWrittenValue_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(codec.Uint8, val.value);
  };
  function FakeCentral_SetNextReadDescriptorResponse_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FakeCentral_SetNextReadDescriptorResponse_Params.prototype.initDefaults_ = function() {
    this.gattCode = 0;
    this.value = null;
    this.descriptorId = null;
    this.characteristicId = null;
    this.serviceId = null;
    this.peripheralAddress = null;
  };
  FakeCentral_SetNextReadDescriptorResponse_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FakeCentral_SetNextReadDescriptorResponse_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 56}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;



    // validate FakeCentral_SetNextReadDescriptorResponse_Params.value
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 1, codec.Uint8, true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FakeCentral_SetNextReadDescriptorResponse_Params.descriptorId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate FakeCentral_SetNextReadDescriptorResponse_Params.characteristicId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate FakeCentral_SetNextReadDescriptorResponse_Params.serviceId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 32, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate FakeCentral_SetNextReadDescriptorResponse_Params.peripheralAddress
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 40, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FakeCentral_SetNextReadDescriptorResponse_Params.encodedSize = codec.kStructHeaderSize + 48;

  FakeCentral_SetNextReadDescriptorResponse_Params.decode = function(decoder) {
    var packed;
    var val = new FakeCentral_SetNextReadDescriptorResponse_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.gattCode = decoder.decodeStruct(codec.Uint16);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.value = decoder.decodeArrayPointer(codec.Uint8);
    val.descriptorId = decoder.decodeStruct(codec.String);
    val.characteristicId = decoder.decodeStruct(codec.String);
    val.serviceId = decoder.decodeStruct(codec.String);
    val.peripheralAddress = decoder.decodeStruct(codec.String);
    return val;
  };

  FakeCentral_SetNextReadDescriptorResponse_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FakeCentral_SetNextReadDescriptorResponse_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint16, val.gattCode);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(codec.Uint8, val.value);
    encoder.encodeStruct(codec.String, val.descriptorId);
    encoder.encodeStruct(codec.String, val.characteristicId);
    encoder.encodeStruct(codec.String, val.serviceId);
    encoder.encodeStruct(codec.String, val.peripheralAddress);
  };
  function FakeCentral_SetNextReadDescriptorResponse_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FakeCentral_SetNextReadDescriptorResponse_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  FakeCentral_SetNextReadDescriptorResponse_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FakeCentral_SetNextReadDescriptorResponse_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  FakeCentral_SetNextReadDescriptorResponse_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  FakeCentral_SetNextReadDescriptorResponse_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FakeCentral_SetNextReadDescriptorResponse_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FakeCentral_SetNextReadDescriptorResponse_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FakeCentral_SetNextReadDescriptorResponse_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kFakeBluetooth_SetLESupported_Name = 0;
  var kFakeBluetooth_SimulateCentral_Name = 1;
  var kFakeBluetooth_AllResponsesConsumed_Name = 2;

  function FakeBluetoothPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(FakeBluetooth,
                                                   handleOrPtrInfo);
  }

  function FakeBluetoothAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        FakeBluetooth, associatedInterfacePtrInfo);
  }

  FakeBluetoothAssociatedPtr.prototype =
      Object.create(FakeBluetoothPtr.prototype);
  FakeBluetoothAssociatedPtr.prototype.constructor =
      FakeBluetoothAssociatedPtr;

  function FakeBluetoothProxy(receiver) {
    this.receiver_ = receiver;
  }
  FakeBluetoothPtr.prototype.setLESupported = function() {
    return FakeBluetoothProxy.prototype.setLESupported
        .apply(this.ptr.getProxy(), arguments);
  };

  FakeBluetoothProxy.prototype.setLESupported = function(available) {
    var params = new FakeBluetooth_SetLESupported_Params();
    params.available = available;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFakeBluetooth_SetLESupported_Name,
          codec.align(FakeBluetooth_SetLESupported_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FakeBluetooth_SetLESupported_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FakeBluetooth_SetLESupported_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  FakeBluetoothPtr.prototype.simulateCentral = function() {
    return FakeBluetoothProxy.prototype.simulateCentral
        .apply(this.ptr.getProxy(), arguments);
  };

  FakeBluetoothProxy.prototype.simulateCentral = function(state) {
    var params = new FakeBluetooth_SimulateCentral_Params();
    params.state = state;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFakeBluetooth_SimulateCentral_Name,
          codec.align(FakeBluetooth_SimulateCentral_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FakeBluetooth_SimulateCentral_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FakeBluetooth_SimulateCentral_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  FakeBluetoothPtr.prototype.allResponsesConsumed = function() {
    return FakeBluetoothProxy.prototype.allResponsesConsumed
        .apply(this.ptr.getProxy(), arguments);
  };

  FakeBluetoothProxy.prototype.allResponsesConsumed = function() {
    var params = new FakeBluetooth_AllResponsesConsumed_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFakeBluetooth_AllResponsesConsumed_Name,
          codec.align(FakeBluetooth_AllResponsesConsumed_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FakeBluetooth_AllResponsesConsumed_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FakeBluetooth_AllResponsesConsumed_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function FakeBluetoothStub(delegate) {
    this.delegate_ = delegate;
  }
  FakeBluetoothStub.prototype.setLESupported = function(available) {
    return this.delegate_ && this.delegate_.setLESupported && this.delegate_.setLESupported(available);
  }
  FakeBluetoothStub.prototype.simulateCentral = function(state) {
    return this.delegate_ && this.delegate_.simulateCentral && this.delegate_.simulateCentral(state);
  }
  FakeBluetoothStub.prototype.allResponsesConsumed = function() {
    return this.delegate_ && this.delegate_.allResponsesConsumed && this.delegate_.allResponsesConsumed();
  }

  FakeBluetoothStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  FakeBluetoothStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kFakeBluetooth_SetLESupported_Name:
      var params = reader.decodeStruct(FakeBluetooth_SetLESupported_Params);
      this.setLESupported(params.available).then(function(response) {
        var responseParams =
            new FakeBluetooth_SetLESupported_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kFakeBluetooth_SetLESupported_Name,
            codec.align(FakeBluetooth_SetLESupported_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FakeBluetooth_SetLESupported_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kFakeBluetooth_SimulateCentral_Name:
      var params = reader.decodeStruct(FakeBluetooth_SimulateCentral_Params);
      this.simulateCentral(params.state).then(function(response) {
        var responseParams =
            new FakeBluetooth_SimulateCentral_ResponseParams();
        responseParams.fakeCentral = response.fakeCentral;
        var builder = new codec.MessageV1Builder(
            kFakeBluetooth_SimulateCentral_Name,
            codec.align(FakeBluetooth_SimulateCentral_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FakeBluetooth_SimulateCentral_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kFakeBluetooth_AllResponsesConsumed_Name:
      var params = reader.decodeStruct(FakeBluetooth_AllResponsesConsumed_Params);
      this.allResponsesConsumed().then(function(response) {
        var responseParams =
            new FakeBluetooth_AllResponsesConsumed_ResponseParams();
        responseParams.consumed = response.consumed;
        var builder = new codec.MessageV1Builder(
            kFakeBluetooth_AllResponsesConsumed_Name,
            codec.align(FakeBluetooth_AllResponsesConsumed_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FakeBluetooth_AllResponsesConsumed_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateFakeBluetoothRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kFakeBluetooth_SetLESupported_Name:
        if (message.expectsResponse())
          paramsClass = FakeBluetooth_SetLESupported_Params;
      break;
      case kFakeBluetooth_SimulateCentral_Name:
        if (message.expectsResponse())
          paramsClass = FakeBluetooth_SimulateCentral_Params;
      break;
      case kFakeBluetooth_AllResponsesConsumed_Name:
        if (message.expectsResponse())
          paramsClass = FakeBluetooth_AllResponsesConsumed_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateFakeBluetoothResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kFakeBluetooth_SetLESupported_Name:
        if (message.isResponse())
          paramsClass = FakeBluetooth_SetLESupported_ResponseParams;
        break;
      case kFakeBluetooth_SimulateCentral_Name:
        if (message.isResponse())
          paramsClass = FakeBluetooth_SimulateCentral_ResponseParams;
        break;
      case kFakeBluetooth_AllResponsesConsumed_Name:
        if (message.isResponse())
          paramsClass = FakeBluetooth_AllResponsesConsumed_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var FakeBluetooth = {
    name: 'bluetooth::mojom::FakeBluetooth',
    kVersion: 0,
    ptrClass: FakeBluetoothPtr,
    proxyClass: FakeBluetoothProxy,
    stubClass: FakeBluetoothStub,
    validateRequest: validateFakeBluetoothRequest,
    validateResponse: validateFakeBluetoothResponse,
  };
  FakeBluetoothStub.prototype.validator = validateFakeBluetoothRequest;
  FakeBluetoothProxy.prototype.validator = validateFakeBluetoothResponse;
  var kFakeCentral_SimulatePreconnectedPeripheral_Name = 0;
  var kFakeCentral_SetNextGATTConnectionResponse_Name = 1;
  var kFakeCentral_SetNextGATTDiscoveryResponse_Name = 2;
  var kFakeCentral_SimulateGATTDisconnection_Name = 3;
  var kFakeCentral_SimulateGATTServicesChanged_Name = 4;
  var kFakeCentral_AddFakeService_Name = 5;
  var kFakeCentral_RemoveFakeService_Name = 6;
  var kFakeCentral_AddFakeCharacteristic_Name = 7;
  var kFakeCentral_RemoveFakeCharacteristic_Name = 8;
  var kFakeCentral_AddFakeDescriptor_Name = 9;
  var kFakeCentral_SetNextReadCharacteristicResponse_Name = 10;
  var kFakeCentral_SetNextWriteCharacteristicResponse_Name = 11;
  var kFakeCentral_SetNextSubscribeToNotificationsResponse_Name = 12;
  var kFakeCentral_GetLastWrittenValue_Name = 13;
  var kFakeCentral_SetNextReadDescriptorResponse_Name = 14;

  function FakeCentralPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(FakeCentral,
                                                   handleOrPtrInfo);
  }

  function FakeCentralAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        FakeCentral, associatedInterfacePtrInfo);
  }

  FakeCentralAssociatedPtr.prototype =
      Object.create(FakeCentralPtr.prototype);
  FakeCentralAssociatedPtr.prototype.constructor =
      FakeCentralAssociatedPtr;

  function FakeCentralProxy(receiver) {
    this.receiver_ = receiver;
  }
  FakeCentralPtr.prototype.simulatePreconnectedPeripheral = function() {
    return FakeCentralProxy.prototype.simulatePreconnectedPeripheral
        .apply(this.ptr.getProxy(), arguments);
  };

  FakeCentralProxy.prototype.simulatePreconnectedPeripheral = function(address, name, knownServiceUuids) {
    var params = new FakeCentral_SimulatePreconnectedPeripheral_Params();
    params.address = address;
    params.name = name;
    params.knownServiceUuids = knownServiceUuids;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFakeCentral_SimulatePreconnectedPeripheral_Name,
          codec.align(FakeCentral_SimulatePreconnectedPeripheral_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FakeCentral_SimulatePreconnectedPeripheral_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FakeCentral_SimulatePreconnectedPeripheral_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  FakeCentralPtr.prototype.setNextGATTConnectionResponse = function() {
    return FakeCentralProxy.prototype.setNextGATTConnectionResponse
        .apply(this.ptr.getProxy(), arguments);
  };

  FakeCentralProxy.prototype.setNextGATTConnectionResponse = function(address, code) {
    var params = new FakeCentral_SetNextGATTConnectionResponse_Params();
    params.address = address;
    params.code = code;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFakeCentral_SetNextGATTConnectionResponse_Name,
          codec.align(FakeCentral_SetNextGATTConnectionResponse_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FakeCentral_SetNextGATTConnectionResponse_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FakeCentral_SetNextGATTConnectionResponse_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  FakeCentralPtr.prototype.setNextGATTDiscoveryResponse = function() {
    return FakeCentralProxy.prototype.setNextGATTDiscoveryResponse
        .apply(this.ptr.getProxy(), arguments);
  };

  FakeCentralProxy.prototype.setNextGATTDiscoveryResponse = function(address, code) {
    var params = new FakeCentral_SetNextGATTDiscoveryResponse_Params();
    params.address = address;
    params.code = code;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFakeCentral_SetNextGATTDiscoveryResponse_Name,
          codec.align(FakeCentral_SetNextGATTDiscoveryResponse_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FakeCentral_SetNextGATTDiscoveryResponse_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FakeCentral_SetNextGATTDiscoveryResponse_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  FakeCentralPtr.prototype.simulateGATTDisconnection = function() {
    return FakeCentralProxy.prototype.simulateGATTDisconnection
        .apply(this.ptr.getProxy(), arguments);
  };

  FakeCentralProxy.prototype.simulateGATTDisconnection = function(address) {
    var params = new FakeCentral_SimulateGATTDisconnection_Params();
    params.address = address;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFakeCentral_SimulateGATTDisconnection_Name,
          codec.align(FakeCentral_SimulateGATTDisconnection_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FakeCentral_SimulateGATTDisconnection_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FakeCentral_SimulateGATTDisconnection_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  FakeCentralPtr.prototype.simulateGATTServicesChanged = function() {
    return FakeCentralProxy.prototype.simulateGATTServicesChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  FakeCentralProxy.prototype.simulateGATTServicesChanged = function(address) {
    var params = new FakeCentral_SimulateGATTServicesChanged_Params();
    params.address = address;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFakeCentral_SimulateGATTServicesChanged_Name,
          codec.align(FakeCentral_SimulateGATTServicesChanged_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FakeCentral_SimulateGATTServicesChanged_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FakeCentral_SimulateGATTServicesChanged_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  FakeCentralPtr.prototype.addFakeService = function() {
    return FakeCentralProxy.prototype.addFakeService
        .apply(this.ptr.getProxy(), arguments);
  };

  FakeCentralProxy.prototype.addFakeService = function(peripheralAddress, serviceUuid) {
    var params = new FakeCentral_AddFakeService_Params();
    params.peripheralAddress = peripheralAddress;
    params.serviceUuid = serviceUuid;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFakeCentral_AddFakeService_Name,
          codec.align(FakeCentral_AddFakeService_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FakeCentral_AddFakeService_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FakeCentral_AddFakeService_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  FakeCentralPtr.prototype.removeFakeService = function() {
    return FakeCentralProxy.prototype.removeFakeService
        .apply(this.ptr.getProxy(), arguments);
  };

  FakeCentralProxy.prototype.removeFakeService = function(identifier, peripheralAddress) {
    var params = new FakeCentral_RemoveFakeService_Params();
    params.identifier = identifier;
    params.peripheralAddress = peripheralAddress;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFakeCentral_RemoveFakeService_Name,
          codec.align(FakeCentral_RemoveFakeService_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FakeCentral_RemoveFakeService_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FakeCentral_RemoveFakeService_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  FakeCentralPtr.prototype.addFakeCharacteristic = function() {
    return FakeCentralProxy.prototype.addFakeCharacteristic
        .apply(this.ptr.getProxy(), arguments);
  };

  FakeCentralProxy.prototype.addFakeCharacteristic = function(characteristicUuid, properties, serviceId, peripheralAddress) {
    var params = new FakeCentral_AddFakeCharacteristic_Params();
    params.characteristicUuid = characteristicUuid;
    params.properties = properties;
    params.serviceId = serviceId;
    params.peripheralAddress = peripheralAddress;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFakeCentral_AddFakeCharacteristic_Name,
          codec.align(FakeCentral_AddFakeCharacteristic_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FakeCentral_AddFakeCharacteristic_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FakeCentral_AddFakeCharacteristic_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  FakeCentralPtr.prototype.removeFakeCharacteristic = function() {
    return FakeCentralProxy.prototype.removeFakeCharacteristic
        .apply(this.ptr.getProxy(), arguments);
  };

  FakeCentralProxy.prototype.removeFakeCharacteristic = function(identifier, serviceId, peripheralAddress) {
    var params = new FakeCentral_RemoveFakeCharacteristic_Params();
    params.identifier = identifier;
    params.serviceId = serviceId;
    params.peripheralAddress = peripheralAddress;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFakeCentral_RemoveFakeCharacteristic_Name,
          codec.align(FakeCentral_RemoveFakeCharacteristic_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FakeCentral_RemoveFakeCharacteristic_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FakeCentral_RemoveFakeCharacteristic_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  FakeCentralPtr.prototype.addFakeDescriptor = function() {
    return FakeCentralProxy.prototype.addFakeDescriptor
        .apply(this.ptr.getProxy(), arguments);
  };

  FakeCentralProxy.prototype.addFakeDescriptor = function(descriptorUuid, characteristicId, serviceId, peripheralAddress) {
    var params = new FakeCentral_AddFakeDescriptor_Params();
    params.descriptorUuid = descriptorUuid;
    params.characteristicId = characteristicId;
    params.serviceId = serviceId;
    params.peripheralAddress = peripheralAddress;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFakeCentral_AddFakeDescriptor_Name,
          codec.align(FakeCentral_AddFakeDescriptor_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FakeCentral_AddFakeDescriptor_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FakeCentral_AddFakeDescriptor_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  FakeCentralPtr.prototype.setNextReadCharacteristicResponse = function() {
    return FakeCentralProxy.prototype.setNextReadCharacteristicResponse
        .apply(this.ptr.getProxy(), arguments);
  };

  FakeCentralProxy.prototype.setNextReadCharacteristicResponse = function(gattCode, value, characteristicId, serviceId, peripheralAddress) {
    var params = new FakeCentral_SetNextReadCharacteristicResponse_Params();
    params.gattCode = gattCode;
    params.value = value;
    params.characteristicId = characteristicId;
    params.serviceId = serviceId;
    params.peripheralAddress = peripheralAddress;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFakeCentral_SetNextReadCharacteristicResponse_Name,
          codec.align(FakeCentral_SetNextReadCharacteristicResponse_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FakeCentral_SetNextReadCharacteristicResponse_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FakeCentral_SetNextReadCharacteristicResponse_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  FakeCentralPtr.prototype.setNextWriteCharacteristicResponse = function() {
    return FakeCentralProxy.prototype.setNextWriteCharacteristicResponse
        .apply(this.ptr.getProxy(), arguments);
  };

  FakeCentralProxy.prototype.setNextWriteCharacteristicResponse = function(gattCode, characteristicId, serviceId, peripheralAddress) {
    var params = new FakeCentral_SetNextWriteCharacteristicResponse_Params();
    params.gattCode = gattCode;
    params.characteristicId = characteristicId;
    params.serviceId = serviceId;
    params.peripheralAddress = peripheralAddress;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFakeCentral_SetNextWriteCharacteristicResponse_Name,
          codec.align(FakeCentral_SetNextWriteCharacteristicResponse_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FakeCentral_SetNextWriteCharacteristicResponse_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FakeCentral_SetNextWriteCharacteristicResponse_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  FakeCentralPtr.prototype.setNextSubscribeToNotificationsResponse = function() {
    return FakeCentralProxy.prototype.setNextSubscribeToNotificationsResponse
        .apply(this.ptr.getProxy(), arguments);
  };

  FakeCentralProxy.prototype.setNextSubscribeToNotificationsResponse = function(gattCode, characteristicId, serviceId, peripheralAddress) {
    var params = new FakeCentral_SetNextSubscribeToNotificationsResponse_Params();
    params.gattCode = gattCode;
    params.characteristicId = characteristicId;
    params.serviceId = serviceId;
    params.peripheralAddress = peripheralAddress;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFakeCentral_SetNextSubscribeToNotificationsResponse_Name,
          codec.align(FakeCentral_SetNextSubscribeToNotificationsResponse_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FakeCentral_SetNextSubscribeToNotificationsResponse_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FakeCentral_SetNextSubscribeToNotificationsResponse_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  FakeCentralPtr.prototype.getLastWrittenValue = function() {
    return FakeCentralProxy.prototype.getLastWrittenValue
        .apply(this.ptr.getProxy(), arguments);
  };

  FakeCentralProxy.prototype.getLastWrittenValue = function(characteristicId, serviceId, peripheralAddress) {
    var params = new FakeCentral_GetLastWrittenValue_Params();
    params.characteristicId = characteristicId;
    params.serviceId = serviceId;
    params.peripheralAddress = peripheralAddress;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFakeCentral_GetLastWrittenValue_Name,
          codec.align(FakeCentral_GetLastWrittenValue_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FakeCentral_GetLastWrittenValue_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FakeCentral_GetLastWrittenValue_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  FakeCentralPtr.prototype.setNextReadDescriptorResponse = function() {
    return FakeCentralProxy.prototype.setNextReadDescriptorResponse
        .apply(this.ptr.getProxy(), arguments);
  };

  FakeCentralProxy.prototype.setNextReadDescriptorResponse = function(gattCode, value, descriptorId, characteristicId, serviceId, peripheralAddress) {
    var params = new FakeCentral_SetNextReadDescriptorResponse_Params();
    params.gattCode = gattCode;
    params.value = value;
    params.descriptorId = descriptorId;
    params.characteristicId = characteristicId;
    params.serviceId = serviceId;
    params.peripheralAddress = peripheralAddress;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFakeCentral_SetNextReadDescriptorResponse_Name,
          codec.align(FakeCentral_SetNextReadDescriptorResponse_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FakeCentral_SetNextReadDescriptorResponse_Params, params);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FakeCentral_SetNextReadDescriptorResponse_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function FakeCentralStub(delegate) {
    this.delegate_ = delegate;
  }
  FakeCentralStub.prototype.simulatePreconnectedPeripheral = function(address, name, knownServiceUuids) {
    return this.delegate_ && this.delegate_.simulatePreconnectedPeripheral && this.delegate_.simulatePreconnectedPeripheral(address, name, knownServiceUuids);
  }
  FakeCentralStub.prototype.setNextGATTConnectionResponse = function(address, code) {
    return this.delegate_ && this.delegate_.setNextGATTConnectionResponse && this.delegate_.setNextGATTConnectionResponse(address, code);
  }
  FakeCentralStub.prototype.setNextGATTDiscoveryResponse = function(address, code) {
    return this.delegate_ && this.delegate_.setNextGATTDiscoveryResponse && this.delegate_.setNextGATTDiscoveryResponse(address, code);
  }
  FakeCentralStub.prototype.simulateGATTDisconnection = function(address) {
    return this.delegate_ && this.delegate_.simulateGATTDisconnection && this.delegate_.simulateGATTDisconnection(address);
  }
  FakeCentralStub.prototype.simulateGATTServicesChanged = function(address) {
    return this.delegate_ && this.delegate_.simulateGATTServicesChanged && this.delegate_.simulateGATTServicesChanged(address);
  }
  FakeCentralStub.prototype.addFakeService = function(peripheralAddress, serviceUuid) {
    return this.delegate_ && this.delegate_.addFakeService && this.delegate_.addFakeService(peripheralAddress, serviceUuid);
  }
  FakeCentralStub.prototype.removeFakeService = function(identifier, peripheralAddress) {
    return this.delegate_ && this.delegate_.removeFakeService && this.delegate_.removeFakeService(identifier, peripheralAddress);
  }
  FakeCentralStub.prototype.addFakeCharacteristic = function(characteristicUuid, properties, serviceId, peripheralAddress) {
    return this.delegate_ && this.delegate_.addFakeCharacteristic && this.delegate_.addFakeCharacteristic(characteristicUuid, properties, serviceId, peripheralAddress);
  }
  FakeCentralStub.prototype.removeFakeCharacteristic = function(identifier, serviceId, peripheralAddress) {
    return this.delegate_ && this.delegate_.removeFakeCharacteristic && this.delegate_.removeFakeCharacteristic(identifier, serviceId, peripheralAddress);
  }
  FakeCentralStub.prototype.addFakeDescriptor = function(descriptorUuid, characteristicId, serviceId, peripheralAddress) {
    return this.delegate_ && this.delegate_.addFakeDescriptor && this.delegate_.addFakeDescriptor(descriptorUuid, characteristicId, serviceId, peripheralAddress);
  }
  FakeCentralStub.prototype.setNextReadCharacteristicResponse = function(gattCode, value, characteristicId, serviceId, peripheralAddress) {
    return this.delegate_ && this.delegate_.setNextReadCharacteristicResponse && this.delegate_.setNextReadCharacteristicResponse(gattCode, value, characteristicId, serviceId, peripheralAddress);
  }
  FakeCentralStub.prototype.setNextWriteCharacteristicResponse = function(gattCode, characteristicId, serviceId, peripheralAddress) {
    return this.delegate_ && this.delegate_.setNextWriteCharacteristicResponse && this.delegate_.setNextWriteCharacteristicResponse(gattCode, characteristicId, serviceId, peripheralAddress);
  }
  FakeCentralStub.prototype.setNextSubscribeToNotificationsResponse = function(gattCode, characteristicId, serviceId, peripheralAddress) {
    return this.delegate_ && this.delegate_.setNextSubscribeToNotificationsResponse && this.delegate_.setNextSubscribeToNotificationsResponse(gattCode, characteristicId, serviceId, peripheralAddress);
  }
  FakeCentralStub.prototype.getLastWrittenValue = function(characteristicId, serviceId, peripheralAddress) {
    return this.delegate_ && this.delegate_.getLastWrittenValue && this.delegate_.getLastWrittenValue(characteristicId, serviceId, peripheralAddress);
  }
  FakeCentralStub.prototype.setNextReadDescriptorResponse = function(gattCode, value, descriptorId, characteristicId, serviceId, peripheralAddress) {
    return this.delegate_ && this.delegate_.setNextReadDescriptorResponse && this.delegate_.setNextReadDescriptorResponse(gattCode, value, descriptorId, characteristicId, serviceId, peripheralAddress);
  }

  FakeCentralStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  FakeCentralStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kFakeCentral_SimulatePreconnectedPeripheral_Name:
      var params = reader.decodeStruct(FakeCentral_SimulatePreconnectedPeripheral_Params);
      this.simulatePreconnectedPeripheral(params.address, params.name, params.knownServiceUuids).then(function(response) {
        var responseParams =
            new FakeCentral_SimulatePreconnectedPeripheral_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kFakeCentral_SimulatePreconnectedPeripheral_Name,
            codec.align(FakeCentral_SimulatePreconnectedPeripheral_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FakeCentral_SimulatePreconnectedPeripheral_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kFakeCentral_SetNextGATTConnectionResponse_Name:
      var params = reader.decodeStruct(FakeCentral_SetNextGATTConnectionResponse_Params);
      this.setNextGATTConnectionResponse(params.address, params.code).then(function(response) {
        var responseParams =
            new FakeCentral_SetNextGATTConnectionResponse_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageV1Builder(
            kFakeCentral_SetNextGATTConnectionResponse_Name,
            codec.align(FakeCentral_SetNextGATTConnectionResponse_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FakeCentral_SetNextGATTConnectionResponse_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kFakeCentral_SetNextGATTDiscoveryResponse_Name:
      var params = reader.decodeStruct(FakeCentral_SetNextGATTDiscoveryResponse_Params);
      this.setNextGATTDiscoveryResponse(params.address, params.code).then(function(response) {
        var responseParams =
            new FakeCentral_SetNextGATTDiscoveryResponse_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageV1Builder(
            kFakeCentral_SetNextGATTDiscoveryResponse_Name,
            codec.align(FakeCentral_SetNextGATTDiscoveryResponse_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FakeCentral_SetNextGATTDiscoveryResponse_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kFakeCentral_SimulateGATTDisconnection_Name:
      var params = reader.decodeStruct(FakeCentral_SimulateGATTDisconnection_Params);
      this.simulateGATTDisconnection(params.address).then(function(response) {
        var responseParams =
            new FakeCentral_SimulateGATTDisconnection_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageV1Builder(
            kFakeCentral_SimulateGATTDisconnection_Name,
            codec.align(FakeCentral_SimulateGATTDisconnection_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FakeCentral_SimulateGATTDisconnection_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kFakeCentral_SimulateGATTServicesChanged_Name:
      var params = reader.decodeStruct(FakeCentral_SimulateGATTServicesChanged_Params);
      this.simulateGATTServicesChanged(params.address).then(function(response) {
        var responseParams =
            new FakeCentral_SimulateGATTServicesChanged_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageV1Builder(
            kFakeCentral_SimulateGATTServicesChanged_Name,
            codec.align(FakeCentral_SimulateGATTServicesChanged_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FakeCentral_SimulateGATTServicesChanged_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kFakeCentral_AddFakeService_Name:
      var params = reader.decodeStruct(FakeCentral_AddFakeService_Params);
      this.addFakeService(params.peripheralAddress, params.serviceUuid).then(function(response) {
        var responseParams =
            new FakeCentral_AddFakeService_ResponseParams();
        responseParams.serviceId = response.serviceId;
        var builder = new codec.MessageV1Builder(
            kFakeCentral_AddFakeService_Name,
            codec.align(FakeCentral_AddFakeService_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FakeCentral_AddFakeService_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kFakeCentral_RemoveFakeService_Name:
      var params = reader.decodeStruct(FakeCentral_RemoveFakeService_Params);
      this.removeFakeService(params.identifier, params.peripheralAddress).then(function(response) {
        var responseParams =
            new FakeCentral_RemoveFakeService_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageV1Builder(
            kFakeCentral_RemoveFakeService_Name,
            codec.align(FakeCentral_RemoveFakeService_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FakeCentral_RemoveFakeService_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kFakeCentral_AddFakeCharacteristic_Name:
      var params = reader.decodeStruct(FakeCentral_AddFakeCharacteristic_Params);
      this.addFakeCharacteristic(params.characteristicUuid, params.properties, params.serviceId, params.peripheralAddress).then(function(response) {
        var responseParams =
            new FakeCentral_AddFakeCharacteristic_ResponseParams();
        responseParams.characteristicId = response.characteristicId;
        var builder = new codec.MessageV1Builder(
            kFakeCentral_AddFakeCharacteristic_Name,
            codec.align(FakeCentral_AddFakeCharacteristic_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FakeCentral_AddFakeCharacteristic_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kFakeCentral_RemoveFakeCharacteristic_Name:
      var params = reader.decodeStruct(FakeCentral_RemoveFakeCharacteristic_Params);
      this.removeFakeCharacteristic(params.identifier, params.serviceId, params.peripheralAddress).then(function(response) {
        var responseParams =
            new FakeCentral_RemoveFakeCharacteristic_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageV1Builder(
            kFakeCentral_RemoveFakeCharacteristic_Name,
            codec.align(FakeCentral_RemoveFakeCharacteristic_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FakeCentral_RemoveFakeCharacteristic_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kFakeCentral_AddFakeDescriptor_Name:
      var params = reader.decodeStruct(FakeCentral_AddFakeDescriptor_Params);
      this.addFakeDescriptor(params.descriptorUuid, params.characteristicId, params.serviceId, params.peripheralAddress).then(function(response) {
        var responseParams =
            new FakeCentral_AddFakeDescriptor_ResponseParams();
        responseParams.descriptorId = response.descriptorId;
        var builder = new codec.MessageV1Builder(
            kFakeCentral_AddFakeDescriptor_Name,
            codec.align(FakeCentral_AddFakeDescriptor_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FakeCentral_AddFakeDescriptor_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kFakeCentral_SetNextReadCharacteristicResponse_Name:
      var params = reader.decodeStruct(FakeCentral_SetNextReadCharacteristicResponse_Params);
      this.setNextReadCharacteristicResponse(params.gattCode, params.value, params.characteristicId, params.serviceId, params.peripheralAddress).then(function(response) {
        var responseParams =
            new FakeCentral_SetNextReadCharacteristicResponse_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageV1Builder(
            kFakeCentral_SetNextReadCharacteristicResponse_Name,
            codec.align(FakeCentral_SetNextReadCharacteristicResponse_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FakeCentral_SetNextReadCharacteristicResponse_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kFakeCentral_SetNextWriteCharacteristicResponse_Name:
      var params = reader.decodeStruct(FakeCentral_SetNextWriteCharacteristicResponse_Params);
      this.setNextWriteCharacteristicResponse(params.gattCode, params.characteristicId, params.serviceId, params.peripheralAddress).then(function(response) {
        var responseParams =
            new FakeCentral_SetNextWriteCharacteristicResponse_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageV1Builder(
            kFakeCentral_SetNextWriteCharacteristicResponse_Name,
            codec.align(FakeCentral_SetNextWriteCharacteristicResponse_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FakeCentral_SetNextWriteCharacteristicResponse_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kFakeCentral_SetNextSubscribeToNotificationsResponse_Name:
      var params = reader.decodeStruct(FakeCentral_SetNextSubscribeToNotificationsResponse_Params);
      this.setNextSubscribeToNotificationsResponse(params.gattCode, params.characteristicId, params.serviceId, params.peripheralAddress).then(function(response) {
        var responseParams =
            new FakeCentral_SetNextSubscribeToNotificationsResponse_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageV1Builder(
            kFakeCentral_SetNextSubscribeToNotificationsResponse_Name,
            codec.align(FakeCentral_SetNextSubscribeToNotificationsResponse_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FakeCentral_SetNextSubscribeToNotificationsResponse_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kFakeCentral_GetLastWrittenValue_Name:
      var params = reader.decodeStruct(FakeCentral_GetLastWrittenValue_Params);
      this.getLastWrittenValue(params.characteristicId, params.serviceId, params.peripheralAddress).then(function(response) {
        var responseParams =
            new FakeCentral_GetLastWrittenValue_ResponseParams();
        responseParams.success = response.success;
        responseParams.value = response.value;
        var builder = new codec.MessageV1Builder(
            kFakeCentral_GetLastWrittenValue_Name,
            codec.align(FakeCentral_GetLastWrittenValue_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FakeCentral_GetLastWrittenValue_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kFakeCentral_SetNextReadDescriptorResponse_Name:
      var params = reader.decodeStruct(FakeCentral_SetNextReadDescriptorResponse_Params);
      this.setNextReadDescriptorResponse(params.gattCode, params.value, params.descriptorId, params.characteristicId, params.serviceId, params.peripheralAddress).then(function(response) {
        var responseParams =
            new FakeCentral_SetNextReadDescriptorResponse_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageV1Builder(
            kFakeCentral_SetNextReadDescriptorResponse_Name,
            codec.align(FakeCentral_SetNextReadDescriptorResponse_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FakeCentral_SetNextReadDescriptorResponse_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateFakeCentralRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kFakeCentral_SimulatePreconnectedPeripheral_Name:
        if (message.expectsResponse())
          paramsClass = FakeCentral_SimulatePreconnectedPeripheral_Params;
      break;
      case kFakeCentral_SetNextGATTConnectionResponse_Name:
        if (message.expectsResponse())
          paramsClass = FakeCentral_SetNextGATTConnectionResponse_Params;
      break;
      case kFakeCentral_SetNextGATTDiscoveryResponse_Name:
        if (message.expectsResponse())
          paramsClass = FakeCentral_SetNextGATTDiscoveryResponse_Params;
      break;
      case kFakeCentral_SimulateGATTDisconnection_Name:
        if (message.expectsResponse())
          paramsClass = FakeCentral_SimulateGATTDisconnection_Params;
      break;
      case kFakeCentral_SimulateGATTServicesChanged_Name:
        if (message.expectsResponse())
          paramsClass = FakeCentral_SimulateGATTServicesChanged_Params;
      break;
      case kFakeCentral_AddFakeService_Name:
        if (message.expectsResponse())
          paramsClass = FakeCentral_AddFakeService_Params;
      break;
      case kFakeCentral_RemoveFakeService_Name:
        if (message.expectsResponse())
          paramsClass = FakeCentral_RemoveFakeService_Params;
      break;
      case kFakeCentral_AddFakeCharacteristic_Name:
        if (message.expectsResponse())
          paramsClass = FakeCentral_AddFakeCharacteristic_Params;
      break;
      case kFakeCentral_RemoveFakeCharacteristic_Name:
        if (message.expectsResponse())
          paramsClass = FakeCentral_RemoveFakeCharacteristic_Params;
      break;
      case kFakeCentral_AddFakeDescriptor_Name:
        if (message.expectsResponse())
          paramsClass = FakeCentral_AddFakeDescriptor_Params;
      break;
      case kFakeCentral_SetNextReadCharacteristicResponse_Name:
        if (message.expectsResponse())
          paramsClass = FakeCentral_SetNextReadCharacteristicResponse_Params;
      break;
      case kFakeCentral_SetNextWriteCharacteristicResponse_Name:
        if (message.expectsResponse())
          paramsClass = FakeCentral_SetNextWriteCharacteristicResponse_Params;
      break;
      case kFakeCentral_SetNextSubscribeToNotificationsResponse_Name:
        if (message.expectsResponse())
          paramsClass = FakeCentral_SetNextSubscribeToNotificationsResponse_Params;
      break;
      case kFakeCentral_GetLastWrittenValue_Name:
        if (message.expectsResponse())
          paramsClass = FakeCentral_GetLastWrittenValue_Params;
      break;
      case kFakeCentral_SetNextReadDescriptorResponse_Name:
        if (message.expectsResponse())
          paramsClass = FakeCentral_SetNextReadDescriptorResponse_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateFakeCentralResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kFakeCentral_SimulatePreconnectedPeripheral_Name:
        if (message.isResponse())
          paramsClass = FakeCentral_SimulatePreconnectedPeripheral_ResponseParams;
        break;
      case kFakeCentral_SetNextGATTConnectionResponse_Name:
        if (message.isResponse())
          paramsClass = FakeCentral_SetNextGATTConnectionResponse_ResponseParams;
        break;
      case kFakeCentral_SetNextGATTDiscoveryResponse_Name:
        if (message.isResponse())
          paramsClass = FakeCentral_SetNextGATTDiscoveryResponse_ResponseParams;
        break;
      case kFakeCentral_SimulateGATTDisconnection_Name:
        if (message.isResponse())
          paramsClass = FakeCentral_SimulateGATTDisconnection_ResponseParams;
        break;
      case kFakeCentral_SimulateGATTServicesChanged_Name:
        if (message.isResponse())
          paramsClass = FakeCentral_SimulateGATTServicesChanged_ResponseParams;
        break;
      case kFakeCentral_AddFakeService_Name:
        if (message.isResponse())
          paramsClass = FakeCentral_AddFakeService_ResponseParams;
        break;
      case kFakeCentral_RemoveFakeService_Name:
        if (message.isResponse())
          paramsClass = FakeCentral_RemoveFakeService_ResponseParams;
        break;
      case kFakeCentral_AddFakeCharacteristic_Name:
        if (message.isResponse())
          paramsClass = FakeCentral_AddFakeCharacteristic_ResponseParams;
        break;
      case kFakeCentral_RemoveFakeCharacteristic_Name:
        if (message.isResponse())
          paramsClass = FakeCentral_RemoveFakeCharacteristic_ResponseParams;
        break;
      case kFakeCentral_AddFakeDescriptor_Name:
        if (message.isResponse())
          paramsClass = FakeCentral_AddFakeDescriptor_ResponseParams;
        break;
      case kFakeCentral_SetNextReadCharacteristicResponse_Name:
        if (message.isResponse())
          paramsClass = FakeCentral_SetNextReadCharacteristicResponse_ResponseParams;
        break;
      case kFakeCentral_SetNextWriteCharacteristicResponse_Name:
        if (message.isResponse())
          paramsClass = FakeCentral_SetNextWriteCharacteristicResponse_ResponseParams;
        break;
      case kFakeCentral_SetNextSubscribeToNotificationsResponse_Name:
        if (message.isResponse())
          paramsClass = FakeCentral_SetNextSubscribeToNotificationsResponse_ResponseParams;
        break;
      case kFakeCentral_GetLastWrittenValue_Name:
        if (message.isResponse())
          paramsClass = FakeCentral_GetLastWrittenValue_ResponseParams;
        break;
      case kFakeCentral_SetNextReadDescriptorResponse_Name:
        if (message.isResponse())
          paramsClass = FakeCentral_SetNextReadDescriptorResponse_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var FakeCentral = {
    name: 'bluetooth::mojom::FakeCentral',
    kVersion: 0,
    ptrClass: FakeCentralPtr,
    proxyClass: FakeCentralProxy,
    stubClass: FakeCentralStub,
    validateRequest: validateFakeCentralRequest,
    validateResponse: validateFakeCentralResponse,
  };
  FakeCentralStub.prototype.validator = validateFakeCentralRequest;
  FakeCentralProxy.prototype.validator = validateFakeCentralResponse;
  exports.kHCISuccess = kHCISuccess;
  exports.kHCIConnectionTimeout = kHCIConnectionTimeout;
  exports.kGATTSuccess = kGATTSuccess;
  exports.kGATTInvalidHandle = kGATTInvalidHandle;
  exports.CentralState = CentralState;
  exports.CharacteristicProperties = CharacteristicProperties;
  exports.FakeBluetooth = FakeBluetooth;
  exports.FakeBluetoothPtr = FakeBluetoothPtr;
  exports.FakeBluetoothAssociatedPtr = FakeBluetoothAssociatedPtr;
  exports.FakeCentral = FakeCentral;
  exports.FakeCentralPtr = FakeCentralPtr;
  exports.FakeCentralAssociatedPtr = FakeCentralAssociatedPtr;
})();