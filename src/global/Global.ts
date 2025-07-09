export const ZOOM_MAX = 19;
export const ZOOM_MIN = 5;
export const delayHoverTooltip = 250;
export const MIN_CLOUD = 4;

export const MINPAGESIZE = 50; // xem như là page size current cơ bản nhất
export const MINPAGESIZE1 = 120;
export const MINPAGESIZE2 = 560;
export const TIME_ZONE = new Date().getTimezoneOffset() / -60;

export const ERROR_TEMPE = 4000;
// đã chuyển lên file config rồi dùng trên đó luôn
export const FIL_ERROR_NL: any[] = [
    {
        companyId: 2158,
        groupIds: ['10263'],
        bss: null, // hoặc biển số [] string  nếu chỉ muốn lọc theo vài bs thôi
        valueLimit: 80
    }
];

// YYYYMMDDTHH:mm:ss
export const EXPIRE_LICENSE_FLV = '2026-10-10T00:00:00';

// cài đặt khai báo nàu sắc cho style của toàn web
// nếu up lại web thì chỉnh sửa version hoặc các thông số khác cần thiết cho bản up (dành cho AD và BM)
export enum COLOR_AD {
    keyWeb = 'AD',
    preVersion = 'https://gsht.adsun.vn',
    version = 'V.0.0.2', // phải sửa version ở ../public/data/versionWeb.json khi build chính nếu k sẽ bị lỗi
    lastUpdate = '08:40 03/07/2025',
    contact = '1900 54 54 56',
    nameDL = 'ADSUN'
}

// export enum COLOR_BM {
//   keyWeb = 'BM',
//   preVersion = 'https://gsht.gpsbinhminh.vn',
//   version = 'V.1.4.37', // phải sửa version ở ../public/data/versionWeb.json khi build chính nếu k sẽ bị lỗi
//   lastUpdate = '20/05/2025',
//   contact = '028 7307 9898',
//   nameDL = 'Bình Minh'
// }

// cấu hình access cho các host chính của công ty áp dụng cả AD và BM
// lưu ý cần phải thêm các host nếu có các host mới cần chạy, nếu không sẽ k sử dụng được web.!!!
export const LIST_ACCESS_HOST_MAIN = [
    'dinhvi2023.adsun.vn',
    'dinhvi2023.gpsbinhminh.vn',
    'localhost:3000',
    'test90new.adsun.vn',
    'dinhvi.adsun.vn',
    'demo.gpsbinhminh.vn',
    'pretest.gpsbinhminh.vn',
    'gpsbinhminh.vn'
];

// cấu hình access cho các công ty có yêu cầu riêng
// các công ty có yêu cầu riêng thì phải khai báo host ở đây, sau đó config thông tin tại file src\pages\auth\login\DataInfoSubLogin.json

export enum ColorBarProgress {
    HIGH = '#0de66d',
    MEDIUM = '#8ac7f8',
    LOW = '#FFF176',
    EXHAUSTED = '#EF5350'
}

export const COLOR_USING_WEB = COLOR_AD; // luôn à AD rồi...

// Trạng thái Status của xe
export enum CarStatus {
    ALL = 'ALL',
    STOP = 'STOP',
    RUN = 'RUN',
    STOP_ENGINE = 'STOP_ENGINE',
    LOST = 'LOST',
    LOSTGPS = 'LOSTGPS',
    OVERSPEED = 'OVERSPEED',
    ISFUEL = 'ISFUEL',
    ISTEMPRE = 'ISTEMPRE',
    ISLIVE = 'ISLIVE',
    ANOTHER = 'ANOTHER'
}

// Màu của trạng thái xe
export enum CarStatusColor {
    ALL = '#939190',
    STOP = '#DC0030',
    RUN = '#3465AA',
    STOP_ENGINE = '#EB2271',
    LOST = '#2A2A2A',
    LOSTGPS = '#09A275',
    OVERSPEED = '#F2B701',
    ISFUEL = '#8E44AD',
    ISTEMPRE = '#00ACC1',
    ISLIVE = '#5f901b',
    ANOTHER = '#8E44AD'
}

export interface ISelectOption {
    label: any;
    value: any;
    companyId?: any;
    serial?: any;
    Gplx?: any;
}

// All value select
export const AllOptionValue: ISelectOption = {
    label: 'Select.AllOption',
    value: -1
};

// Loại hình KD mới theio C08 quy đinh
export const TYPE_BUSSINESS_C08 = [
    {
        value: 'TaxiCar',
        label: 'TypeOfBusiness.TaxiCar' // "TaxiCar": "Taxi",
    },
    {
        value: 'BusCar',
        label: 'TypeOfBusiness.BusCar' // "BusCar": "Xe buýt",
    },
    {
        value: 'ContractCar',
        label: 'TypeOfBusiness.ContractCar' // "ContractCar": "Xe hợp đồng",
    },
    {
        value: 'TravelCar',
        label: 'TypeOfBusiness.TravelCar' // "TravelCar": "Xe du lịch",
    },
    {
        value: 'RouteCar',
        label: 'TypeOfBusiness.RouteCar' // "RouteCar": "Xe khách có tuyến cố định",
    },
    {
        value: 'Truck',
        label: 'TypeOfBusiness.Truck' // "Truck": "Xe tải",
    },
    {
        value: 'Tractor',
        label: 'TypeOfBusiness.Tractor' // "Tractor": "Xe đầu kéo",
    },
    {
        value: 'TopWeightness',
        label: 'TypeOfBusiness.TopWeightness' // "TopWeightness": "Xe siêu trường, siêu trọng",
    },
    {
        value: 'Ambulance',
        label: 'TypeOfBusiness.Ambulance' // "Ambulance" :"Xe cứu thương"
    }
];

// loại hình kinh doanh
export const TYPE_BUSSINESS = [
    {
        value: 'Car',
        number: 100,
        label: 'TypeOfBusiness.Car'
    },
    {
        value: 'VanTaiBus',
        number: 200,
        label: 'TypeOfBusiness.VanTaiBus'
    },
    {
        value: 'VanTaiKhach',
        number: 300,
        label: 'TypeOfBusiness.VanTaiKhach'
    },
    {
        value: 'VanChuyenKhach',
        number: 400,
        label: 'TypeOfBusiness.VanChuyenKhach'
    },
    {
        value: 'VanChuyenHang',
        number: 500,
        label: 'TypeOfBusiness.VanChuyenHang'
    },
    {
        value: 'XeTai',
        number: 600,
        label: 'TypeOfBusiness.XeTai'
    },
    {
        value: 'XeDauKeo',
        number: 900,
        label: 'TypeOfBusiness.XeTai'
    },
    {
        value: 'XeCongTrinh',
        number: '',
        label: 'TypeOfBusiness.XeCongTrinh'
    },

    {
        value: 'VanTaiHangHoaCampuchia',
        number: '',
        label: 'TypeOfBusiness.VanTaiHangHoaCampuchia'
    },
    {
        value: 'XeDauKeoCampuchia',
        number: '',
        label: 'TypeOfBusiness.XeDauKeoCampuchia'
    },
    {
        value: 'KhachCoDinhCampuchia',
        number: '',
        label: 'TypeOfBusiness.KhachCoDinhCampuchia'
    },
    {
        value: 'BusCoDinhGiuongNamCampuchia',
        number: '',
        label: 'TypeOfBusiness.BusCoDinhGiuongNamCampuchia'
    },
    {
        value: 'BusCoDinhGheNgoiCampuchia',
        number: '',
        label: 'TypeOfBusiness.BusCoDinhGheNgoiCampuchia'
    },
    {
        value: 'BusVanTaiHanhKhachCampuchia',
        number: '',
        label: 'TypeOfBusiness.BusVanTaiHanhKhachCampuchia'
    },
    {
        value: 'BusVanTaiHanhKhachCampuchia15',
        number: '',
        label: 'TypeOfBusiness.BusVanTaiHanhKhachCampuchia15'
    },
    {
        value: 'BusVanTaiHanhKhachCampuchia45',
        number: '',
        label: 'TypeOfBusiness.BusVanTaiHanhKhachCampuchia45'
    },

    {
        value: 'None',
        number: '',
        label: 'TypeOfBusiness.None'
    }
];

// Sở giao thông vận tải => Thay thành XD
export const SXD = [
    { Id: 61, Name: 'Hà Nội' },
    { Id: 62, Name: 'Hồ Chí Minh' },
    { Id: 59, Name: 'Đà Nẵng' },
    {
        Id: 58,
        Name: 'Cần Thơ'
    },
    { Id: 0, Name: 'An Giang' },
    { Id: 1, Name: 'Bà Rịa - Vũng Tàu' },
    { Id: 2, Name: 'Bắc Giang' },
    {
        Id: 3,
        Name: 'Bắc Kạn'
    },
    { Id: 4, Name: 'Bạc Liêu' },
    { Id: 5, Name: 'Bắc Ninh' },
    { Id: 6, Name: 'Bến Tre' },
    { Id: 7, Name: 'Bình Định' },
    { Id: 8, Name: 'Bình Dương' },
    {
        Id: 9,
        Name: 'Bình Phước'
    },
    { Id: 10, Name: 'Bình Thuận' },
    { Id: 11, Name: 'Cà Mau' },
    { Id: 12, Name: 'Cao Bằng' },
    { Id: 13, Name: 'Đắk Lắk' },
    { Id: 14, Name: 'Đắk Nông' },
    {
        Id: 15,
        Name: 'Điện Biên'
    },
    { Id: 16, Name: 'Đồng Nai' },
    { Id: 17, Name: 'Đồng Tháp' },
    { Id: 18, Name: 'Gia Lai' },
    { Id: 19, Name: 'Hà Giang' },
    { Id: 20, Name: 'Hà Nam' },
    {
        Id: 60,
        Name: 'Hải Phòng'
    },
    { Id: 21, Name: 'Hà Tĩnh' },
    { Id: 22, Name: 'Hải Dương' },
    { Id: 23, Name: 'Hậu Giang' },
    { Id: 24, Name: 'Hòa Bình' },
    { Id: 25, Name: 'Hưng Yên' },
    { Id: 26, Name: 'Khánh Hòa' },
    {
        Id: 27,
        Name: 'Kiên Giang'
    },
    { Id: 28, Name: 'Kon Tum' },
    { Id: 29, Name: 'Lai Châu' },
    { Id: 30, Name: 'Lâm Đồng' },
    { Id: 31, Name: 'Lạng Sơn' },
    { Id: 32, Name: 'Lào Cai' },
    {
        Id: 33,
        Name: 'Long An'
    },
    { Id: 34, Name: 'Nam Định' },
    { Id: 35, Name: 'Nghệ An' },
    { Id: 36, Name: 'Ninh Bình' },
    { Id: 37, Name: 'Ninh Thuận' },
    { Id: 38, Name: 'Phú Thọ' },
    {
        Id: 57,
        Name: 'Phú Yên'
    },
    { Id: 39, Name: 'Quảng Bình' },
    { Id: 40, Name: 'Quảng Nam' },
    { Id: 41, Name: 'Quảng Ngãi' },
    { Id: 42, Name: 'Quảng Ninh' },
    { Id: 43, Name: 'Quảng Trị' },
    { Id: 44, Name: 'Sóc Trăng' },
    {
        Id: 45,
        Name: 'Sơn La'
    },
    { Id: 46, Name: 'Tây Ninh' },
    { Id: 47, Name: 'Thái Bình' },
    { Id: 48, Name: 'Thái Nguyên' },
    { Id: 49, Name: 'Thanh Hóa' },
    {
        Id: 50,
        Name: 'Thừa Thiên Huế'
    },
    { Id: 51, Name: 'Tiền Giang' },
    { Id: 52, Name: 'Trà Vinh' },
    { Id: 53, Name: 'Tuyên Quang' },
    { Id: 54, Name: 'Vĩnh Long' },
    { Id: 55, Name: 'Vĩnh Phúc' },
    { Id: 56, Name: 'Yên Bái' },
    { Id: 57, Name: 'Phnom Penh' },
    { Id: 58, Name: 'Kampong Cham' }
];

// Style của bản đồ
export const DARK_MAP_STYLE = [
    { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
    { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
    { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
    {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
    },
    {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
    },
    {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{ color: '#263c3f' }]
    },
    {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#6b9a76' }]
    },
    {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#38414e' }]
    },
    {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#212a37' }]
    },
    {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#9ca5b3' }]
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#746855' }]
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#1f2835' }]
    },
    {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#f3d19c' }]
    },
    {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{ color: '#2f3948' }]
    },
    {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
    },
    {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#17263c' }]
    },
    {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#515c6d' }]
    },
    {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#17263c' }]
    }
];
export const keyAPIsDrive = 'AIzaSyB1V_08QprlkDLnIUywccJ-k4lb4aqCRgc';
export const IdFileDriveInstruct = '1NxPC_I_WL9wYDEqCE5Z4gCM_-MGwA07d';
export const company_isGGDirect = ['11', '4004', '3090']; // buộc cấu hình local không đẩy lên json đc
// export const company_isParkingMapTable = ['3188', '3199', '3139']; // đã lên json tuy nhiên dưới vẫn có chỗ dùng
// export const company_AlertGetPoint = ['11', '30', '3102']; // yêu cầu của Nam á Bank đã lên json tuy nhiên dưới vẫn có chỗ dùng

export const PHONE_REG_EXP = /(^$)|(^((([0][1,2])([0-9]{9}))|(([0][3,5,6,7,8,9])([0-9]{8})))$)/; // check chính xác là đúng định dạng sđt
export const PHONE_REG_EXP_DRIVER = /(^$)|(^(([0])([0-9]{7,11}))$)/; // check chỉ buộc nhập 0 đầu, các số phía sau chỉ từ 7 - 11 số
export const NUMBER_TEXT_REG_EXP = /^[a-zA-Z0-9]+$/;
export const SPECIAL_REG_EXP = /^[^_!@#$%^&*+=<>:;|~]*$/;
export const VNI_REG_EXP = /^[^\u00C0-\u1EF9]*$/;
export const TAX_CODE_REG = /(^(([0-9]{10})|(([0-9]{10})([-])([0-9]{3})))$)/; // check hợp lệ tax code VN

export const SECRET_KEY = 'adunt90';
export const DRIVER_FILTER = 'LAI XE DANG XUAT';

// Angle lệch so với tạo đồ trái đất
export const ANGLE_ERROR = 176;

// cài đặt giới hạn cho lịch tối đa chonh ngày 92 phía trước là cùng
export const Limit_Prev_Dates = 92;
export const Limit_Prev_Dates_2 = 92;

// Màu sắc option chọn màu biển số
export const COLORS = [
    '#1E88E5',
    '#34C5FA',
    '#337AB7',
    '#D81B60',
    '#8E24AA',
    '#5E35B1',
    '#3949AB',
    '#00ACC1',
    '#00897B',
    '#43A047',
    '#7CB342',
    '#6D4C41',
    '#F4511E',
    '#FB8C00',
    '#B7B7B7',
    '#768E9A',
    '#445962',
    '#ffffff'
];

// mã này không được phép đổi khi k cần thiết
// export const key = '6fa9626745f20f126cb08aa645a8f495ADSUN';
// export const iv = 'I8z880yA4lVhMCADSUN';
// export const keyBM = '6fa9794t4f20136cb08aa645a8r495ADSUN';
// export const ivBM = 'I8zyA08641VkMCADSUN';

// Background Map
export const IMAGE_MAP_BACKGROUND =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAAAcCAIAAACiUgXPAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAA8SURBVFhH7c9BDQAgDAAxDGJ0AvdGR8klNdBzZ3/VzdTN1M3UzdTN1M3UzdTN1M3UzdTN1M3UzfTvbfYBPFBhLo+q6m0AAAAASUVORK5CYII=';

export const ACTIVE_AREA_POLYGON = {
    fillOpacity: 0.5,
    strokeColor: '#001F54',
    strokeWeight: 5,
    zIndex: 2
};

export const AREA_POLYGON = {
    fillOpacity: 0.35,
    strokeColor: '#FF0000',
    strokeWeight: 2,
    zIndex: 1
};
