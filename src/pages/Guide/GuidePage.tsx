// src/pages/JoinGuidePage.tsx

export default function GuidePage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 ">
      <h1 className="text-4xl font-bold mb-6 text-center">Hướng Dẫn Tham Gia Server GTA RP</h1>

      <ol className="space-y-8 text-lg">
        <li>
          <h2 className="text-2xl font-semibold mb-2">1. Tải Launcher</h2>
          <p>Truy cập vào trang chủ và tải về Launcher chính thức của server (GTA RP Client hoặc FiveM Launcher).</p>
        </li>

        <li>
          <h2 className="text-2xl font-semibold mb-2">2. Đăng ký tài khoản</h2>
          <p>
            Tạo tài khoản trên website bằng email cá nhân. Đảm bảo thông tin chính xác để dễ dàng khôi phục hoặc hỗ trợ.
          </p>
        </li>

        <li>
          <h2 className="text-2xl font-semibold mb-2">3. Xác minh Discord</h2>
          <p>Tham gia Discord server chính thức và thực hiện xác minh tự động để nhận quyền truy cập.</p>
        </li>

        <li>
          <h2 className="text-2xl font-semibold mb-2">4. Tải game GTA V</h2>
          <p>
            Bạn cần có bản quyền game GTA V (Steam / Epic Games / Rockstar Launcher). Hãy cài đặt sẵn trước khi chạy
            Launcher.
          </p>
        </li>

        <li>
          <h2 className="text-2xl font-semibold mb-2">5. Khởi chạy & tham gia</h2>
          <p>Sau khi cài đặt xong Launcher, bạn có thể đăng nhập, chọn server và tham gia RP ngay lập tức.</p>
        </li>
      </ol>

      <div className="mt-12 text-center">
        <a
          href="/register"
          className="inline-block px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black text-lg font-bold rounded-xl transition"
        >
          Bắt đầu ngay
        </a>
      </div>
    </div>
  );
}
