
"use strict";

let VehicleInfoGet = require('./VehicleInfoGet.js')
let SetMode = require('./SetMode.js')
let FileOpen = require('./FileOpen.js')
let ParamPull = require('./ParamPull.js')
let SetMavFrame = require('./SetMavFrame.js')
let FileRead = require('./FileRead.js')
let CommandInt = require('./CommandInt.js')
let FileList = require('./FileList.js')
let CommandLong = require('./CommandLong.js')
let FileRemove = require('./FileRemove.js')
let FileMakeDir = require('./FileMakeDir.js')
let LogRequestData = require('./LogRequestData.js')
let WaypointPush = require('./WaypointPush.js')
let WaypointSetCurrent = require('./WaypointSetCurrent.js')
let ParamSet = require('./ParamSet.js')
let MountConfigure = require('./MountConfigure.js')
let CommandTriggerControl = require('./CommandTriggerControl.js')
let FileTruncate = require('./FileTruncate.js')
let WaypointPull = require('./WaypointPull.js')
let CommandVtolTransition = require('./CommandVtolTransition.js')
let CommandTriggerInterval = require('./CommandTriggerInterval.js')
let MessageInterval = require('./MessageInterval.js')
let FileChecksum = require('./FileChecksum.js')
let CommandBool = require('./CommandBool.js')
let FileWrite = require('./FileWrite.js')
let ParamPush = require('./ParamPush.js')
let StreamRate = require('./StreamRate.js')
let FileRename = require('./FileRename.js')
let WaypointClear = require('./WaypointClear.js')
let LogRequestEnd = require('./LogRequestEnd.js')
let CommandTOL = require('./CommandTOL.js')
let CommandAck = require('./CommandAck.js')
let CommandHome = require('./CommandHome.js')
let FileClose = require('./FileClose.js')
let LogRequestList = require('./LogRequestList.js')
let FileRemoveDir = require('./FileRemoveDir.js')
let ParamGet = require('./ParamGet.js')

module.exports = {
  VehicleInfoGet: VehicleInfoGet,
  SetMode: SetMode,
  FileOpen: FileOpen,
  ParamPull: ParamPull,
  SetMavFrame: SetMavFrame,
  FileRead: FileRead,
  CommandInt: CommandInt,
  FileList: FileList,
  CommandLong: CommandLong,
  FileRemove: FileRemove,
  FileMakeDir: FileMakeDir,
  LogRequestData: LogRequestData,
  WaypointPush: WaypointPush,
  WaypointSetCurrent: WaypointSetCurrent,
  ParamSet: ParamSet,
  MountConfigure: MountConfigure,
  CommandTriggerControl: CommandTriggerControl,
  FileTruncate: FileTruncate,
  WaypointPull: WaypointPull,
  CommandVtolTransition: CommandVtolTransition,
  CommandTriggerInterval: CommandTriggerInterval,
  MessageInterval: MessageInterval,
  FileChecksum: FileChecksum,
  CommandBool: CommandBool,
  FileWrite: FileWrite,
  ParamPush: ParamPush,
  StreamRate: StreamRate,
  FileRename: FileRename,
  WaypointClear: WaypointClear,
  LogRequestEnd: LogRequestEnd,
  CommandTOL: CommandTOL,
  CommandAck: CommandAck,
  CommandHome: CommandHome,
  FileClose: FileClose,
  LogRequestList: LogRequestList,
  FileRemoveDir: FileRemoveDir,
  ParamGet: ParamGet,
};
