
"use strict";

let WheelOdomStamped = require('./WheelOdomStamped.js');
let StatusText = require('./StatusText.js');
let ESCInfo = require('./ESCInfo.js');
let CameraImageCaptured = require('./CameraImageCaptured.js');
let HilStateQuaternion = require('./HilStateQuaternion.js');
let PositionTarget = require('./PositionTarget.js');
let Thrust = require('./Thrust.js');
let GPSINPUT = require('./GPSINPUT.js');
let Trajectory = require('./Trajectory.js');
let WaypointReached = require('./WaypointReached.js');
let VFR_HUD = require('./VFR_HUD.js');
let Vibration = require('./Vibration.js');
let RCIn = require('./RCIn.js');
let ManualControl = require('./ManualControl.js');
let ESCStatusItem = require('./ESCStatusItem.js');
let LandingTarget = require('./LandingTarget.js');
let HilGPS = require('./HilGPS.js');
let EstimatorStatus = require('./EstimatorStatus.js');
let DebugValue = require('./DebugValue.js');
let ESCTelemetryItem = require('./ESCTelemetryItem.js');
let OpticalFlowRad = require('./OpticalFlowRad.js');
let TimesyncStatus = require('./TimesyncStatus.js');
let Altitude = require('./Altitude.js');
let GPSRAW = require('./GPSRAW.js');
let Waypoint = require('./Waypoint.js');
let ADSBVehicle = require('./ADSBVehicle.js');
let ParamValue = require('./ParamValue.js');
let RTKBaseline = require('./RTKBaseline.js');
let PlayTuneV2 = require('./PlayTuneV2.js');
let MountControl = require('./MountControl.js');
let Mavlink = require('./Mavlink.js');
let NavControllerOutput = require('./NavControllerOutput.js');
let Tunnel = require('./Tunnel.js');
let HomePosition = require('./HomePosition.js');
let ESCInfoItem = require('./ESCInfoItem.js');
let HilActuatorControls = require('./HilActuatorControls.js');
let MagnetometerReporter = require('./MagnetometerReporter.js');
let LogEntry = require('./LogEntry.js');
let ESCTelemetry = require('./ESCTelemetry.js');
let OnboardComputerStatus = require('./OnboardComputerStatus.js');
let CommandCode = require('./CommandCode.js');
let WaypointList = require('./WaypointList.js');
let RCOut = require('./RCOut.js');
let FileEntry = require('./FileEntry.js');
let RadioStatus = require('./RadioStatus.js');
let CompanionProcessStatus = require('./CompanionProcessStatus.js');
let TerrainReport = require('./TerrainReport.js');
let LogData = require('./LogData.js');
let ESCStatus = require('./ESCStatus.js');
let Param = require('./Param.js');
let CellularStatus = require('./CellularStatus.js');
let HilControls = require('./HilControls.js');
let BatteryStatus = require('./BatteryStatus.js');
let ActuatorControl = require('./ActuatorControl.js');
let RTCM = require('./RTCM.js');
let VehicleInfo = require('./VehicleInfo.js');
let GPSRTK = require('./GPSRTK.js');
let ExtendedState = require('./ExtendedState.js');
let State = require('./State.js');
let GlobalPositionTarget = require('./GlobalPositionTarget.js');
let CamIMUStamp = require('./CamIMUStamp.js');
let HilSensor = require('./HilSensor.js');
let AttitudeTarget = require('./AttitudeTarget.js');
let OverrideRCIn = require('./OverrideRCIn.js');

module.exports = {
  WheelOdomStamped: WheelOdomStamped,
  StatusText: StatusText,
  ESCInfo: ESCInfo,
  CameraImageCaptured: CameraImageCaptured,
  HilStateQuaternion: HilStateQuaternion,
  PositionTarget: PositionTarget,
  Thrust: Thrust,
  GPSINPUT: GPSINPUT,
  Trajectory: Trajectory,
  WaypointReached: WaypointReached,
  VFR_HUD: VFR_HUD,
  Vibration: Vibration,
  RCIn: RCIn,
  ManualControl: ManualControl,
  ESCStatusItem: ESCStatusItem,
  LandingTarget: LandingTarget,
  HilGPS: HilGPS,
  EstimatorStatus: EstimatorStatus,
  DebugValue: DebugValue,
  ESCTelemetryItem: ESCTelemetryItem,
  OpticalFlowRad: OpticalFlowRad,
  TimesyncStatus: TimesyncStatus,
  Altitude: Altitude,
  GPSRAW: GPSRAW,
  Waypoint: Waypoint,
  ADSBVehicle: ADSBVehicle,
  ParamValue: ParamValue,
  RTKBaseline: RTKBaseline,
  PlayTuneV2: PlayTuneV2,
  MountControl: MountControl,
  Mavlink: Mavlink,
  NavControllerOutput: NavControllerOutput,
  Tunnel: Tunnel,
  HomePosition: HomePosition,
  ESCInfoItem: ESCInfoItem,
  HilActuatorControls: HilActuatorControls,
  MagnetometerReporter: MagnetometerReporter,
  LogEntry: LogEntry,
  ESCTelemetry: ESCTelemetry,
  OnboardComputerStatus: OnboardComputerStatus,
  CommandCode: CommandCode,
  WaypointList: WaypointList,
  RCOut: RCOut,
  FileEntry: FileEntry,
  RadioStatus: RadioStatus,
  CompanionProcessStatus: CompanionProcessStatus,
  TerrainReport: TerrainReport,
  LogData: LogData,
  ESCStatus: ESCStatus,
  Param: Param,
  CellularStatus: CellularStatus,
  HilControls: HilControls,
  BatteryStatus: BatteryStatus,
  ActuatorControl: ActuatorControl,
  RTCM: RTCM,
  VehicleInfo: VehicleInfo,
  GPSRTK: GPSRTK,
  ExtendedState: ExtendedState,
  State: State,
  GlobalPositionTarget: GlobalPositionTarget,
  CamIMUStamp: CamIMUStamp,
  HilSensor: HilSensor,
  AttitudeTarget: AttitudeTarget,
  OverrideRCIn: OverrideRCIn,
};
