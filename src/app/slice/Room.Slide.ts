import { createEntityAdapter, createSlice, EntityState, PayloadAction, Update } from '@reduxjs/toolkit';

export enum EModeGridDeviceRoom {
  MODE2 = 'w-1/2',
  MODE3 = 'w-1/3',
  MODE4 = 'w-1/4',
  MODE5 = 'w-1/5'
}
const roomsAdapter = createEntityAdapter();
// Adapters
const devicesAdapter = createEntityAdapter<any>({
  selectId: device => device.Id
});
const usefulDevicesAdapter = createEntityAdapter<any>({
  selectId: device => device.Id
});
const primaryDevicesAdapter = createEntityAdapter<any>({
  selectId: device => device.Id
});

// Adapter
type initialStateType = {
  // Danh sách Phòng
  listRooms: Array<any>;
  // Giữ focus
  keepFocus: boolean;
  roomSelected: any;
  // danh sách các thiết bị
  devices: EntityState<any>;
  // danh sách các thiết bị ưu tiên có thể đặt tối đa 2 device control hoặc 4 device display có thể đặt hết vào và cho thêm lọc nếu cần thiết
  primaryDevices: EntityState<any>;
  // danh sách các thiết bị thường dùng "có gắn sao" có thể sẽ cần về sau
  usefulDevices: EntityState<any>;
  roomGridMode: EModeGridDeviceRoom;
};

// Reducer
const RoomSlide = createSlice({
  name: 'rooms',
  initialState: roomsAdapter.getInitialState({
    listRooms: [],
    keepFocus: false,
    roomSelected: undefined,
    deviceSelected: undefined,
    roomGridMode: EModeGridDeviceRoom.MODE2,
    devices: devicesAdapter.getInitialState(),
    primaryDevices: primaryDevicesAdapter.getInitialState(),
    usefulDevices: usefulDevicesAdapter.getInitialState()
  }),
  reducers: {
    refreshRoomValue: state => {
      state.listRooms = [];
      state.keepFocus = false;
      state.roomSelected = undefined;
    },
    updateRoomSelect: (state, action: PayloadAction<any>) => {
      state.roomSelected = action.payload;
    },
    updateRoomGridMode: (state, action: PayloadAction<EModeGridDeviceRoom>) => {
      state.roomGridMode = action.payload;
    },
    updateSelectDevice: (state, action: PayloadAction<any>) => {
      const device = devicesAdapter.getSelectors().selectById(state.devices, action.payload);
      state.deviceSelected = device;
    },
    updateDevice: (state, action: PayloadAction<Update<any>>) => {
      devicesAdapter.updateOne(state.devices, action.payload);
    },
    addDevices: (state, action: PayloadAction<any>) => {
      devicesAdapter.setAll(state.devices, action.payload);
    }
  }
});

// Selector store from adapter
export const devicesAllSelector = devicesAdapter.getSelectors((state: any) => state.rooms.devices);
export const primaryDevicesAllSelector = devicesAdapter.getSelectors((state: any) => state.rooms.primaryDevices);
export const usefulDevicesAllSelector = devicesAdapter.getSelectors((state: any) => state.rooms.usefulDevices);

export const { refreshRoomValue, updateRoomSelect, updateRoomGridMode, updateDevice, addDevices, updateSelectDevice } =
  RoomSlide.actions;

export default RoomSlide.reducer;
